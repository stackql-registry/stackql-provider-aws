--- 
title: global_table_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - global_table_settings
  - dynamodb
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

Creates, updates, deletes, gets or lists a <code>global_table_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="global_table_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dynamodb.global_table_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_global_table_settings"
    values={[
        { label: 'describe_global_table_settings', value: 'describe_global_table_settings' }
    ]}
>
<TabItem value="describe_global_table_settings">

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
    <td><CopyableCode code="global_table_name" /></td>
    <td><code>string</code></td>
    <td>The name of the global table. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="replica_settings" /></td>
    <td><code>array</code></td>
    <td>The Region-specific settings for the global table.</td>
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
    <td><a href="#describe_global_table_settings"><CopyableCode code="describe_global_table_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes Region-specific settings for a global table. This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables.</td>
</tr>
<tr>
    <td><a href="#update_global_table_settings"><CopyableCode code="update_global_table_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GlobalTableName"><code>GlobalTableName</code></a></td>
    <td></td>
    <td>Updates settings for a global table. This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables.</td>
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
    defaultValue="describe_global_table_settings"
    values={[
        { label: 'describe_global_table_settings', value: 'describe_global_table_settings' }
    ]}
>
<TabItem value="describe_global_table_settings">

Describes Region-specific settings for a global table. This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables.

```sql
SELECT
global_table_name,
replica_settings
FROM aws.dynamodb.global_table_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_global_table_settings"
    values={[
        { label: 'update_global_table_settings', value: 'update_global_table_settings' }
    ]}
>
<TabItem value="update_global_table_settings">

Updates settings for a global table. This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables.

```sql
UPDATE aws.dynamodb.global_table_settings
SET 
GlobalTableName = '{{ GlobalTableName }}',
GlobalTableBillingMode = '{{ GlobalTableBillingMode }}',
GlobalTableProvisionedWriteCapacityUnits = {{ GlobalTableProvisionedWriteCapacityUnits }},
GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate = '{{ GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate }}',
GlobalTableGlobalSecondaryIndexSettingsUpdate = '{{ GlobalTableGlobalSecondaryIndexSettingsUpdate }}',
ReplicaSettingsUpdate = '{{ ReplicaSettingsUpdate }}'
WHERE 
region = '{{ region }}' --required
AND GlobalTableName = '{{ GlobalTableName }}' --required
RETURNING
global_table_name,
replica_settings;
```
</TabItem>
</Tabs>
