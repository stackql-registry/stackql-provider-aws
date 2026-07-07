--- 
title: region_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - region_settings
  - backup
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>region_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.region_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_region_settings"
    values={[
        { label: 'describe_region_settings', value: 'describe_region_settings' }
    ]}
>
<TabItem value="describe_region_settings">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="ResourceTypeManagementPreference" /></td>
    <td><code>object</code></td>
    <td>Returns whether Backup fully manages the backups for a resource type. For the benefits of full Backup management, see Full Backup management. For a list of resource types and whether each supports full Backup management, see the Feature availability by resource table. If "DynamoDB":false, you can enable full Backup management for DynamoDB backup by enabling Backup's advanced DynamoDB backup features.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceTypeOptInPreference" /></td>
    <td><code>object</code></td>
    <td>The services along with the opt-in preferences in the Region.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_region_settings"><CopyableCode code="describe_region_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current service opt-in settings for the Region. If service opt-in is enabled for a service, Backup tries to protect that service's resources in this Region, when the resource is included in an on-demand backup or scheduled backup plan. Otherwise, Backup does not try to protect that service's resources in this Region.</td>
</tr>
<tr>
    <td><a href="#update_region_settings"><CopyableCode code="update_region_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the current service opt-in settings for the Region. Use the DescribeRegionSettings API to determine the resource types that are supported.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_region_settings"
    values={[
        { label: 'describe_region_settings', value: 'describe_region_settings' }
    ]}
>
<TabItem value="describe_region_settings">

Returns the current service opt-in settings for the Region. If service opt-in is enabled for a service, Backup tries to protect that service's resources in this Region, when the resource is included in an on-demand backup or scheduled backup plan. Otherwise, Backup does not try to protect that service's resources in this Region.

```sql
SELECT
ResourceTypeManagementPreference,
ResourceTypeOptInPreference
FROM aws.backup.region_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_region_settings"
    values={[
        { label: 'update_region_settings', value: 'update_region_settings' }
    ]}
>
<TabItem value="update_region_settings">

Updates the current service opt-in settings for the Region. Use the DescribeRegionSettings API to determine the resource types that are supported.

```sql
UPDATE aws.backup.region_settings
SET 
ResourceTypeOptInPreference = '{{ ResourceTypeOptInPreference }}',
ResourceTypeManagementPreference = '{{ ResourceTypeManagementPreference }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
