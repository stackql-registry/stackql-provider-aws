--- 
title: regions
hide_title: false
hide_table_of_contents: false
keywords:
  - regions
  - account
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

Creates, updates, deletes, gets or lists a <code>regions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="regions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.account.regions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_regions"
    values={[
        { label: 'list_regions', value: 'list_regions' }
    ]}
>
<TabItem value="list_regions">

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
    <td><CopyableCode code="region_name" /></td>
    <td><code>string</code></td>
    <td>The Region code of a given Region (for example, us-east-1).</td>
</tr>
<tr>
    <td><CopyableCode code="region_opt_status" /></td>
    <td><code>string</code></td>
    <td>One of potential statuses a Region can undergo (Enabled, Enabling, Disabled, Disabling, Enabled_By_Default). (ENABLED, ENABLING, DISABLING, DISABLED, ENABLED_BY_DEFAULT)</td>
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
    <td><a href="#list_regions"><CopyableCode code="list_regions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the Regions for a given account and their respective opt-in statuses. Optionally, this list can be filtered by the region-opt-status-contains parameter.</td>
</tr>
<tr>
    <td><a href="#disable_region"><CopyableCode code="disable_region" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegionName"><code>RegionName</code></a></td>
    <td></td>
    <td>Disables (opts-out) a particular Region for an account. The act of disabling a Region will remove all IAM access to any resources that reside in that Region.</td>
</tr>
<tr>
    <td><a href="#enable_region"><CopyableCode code="enable_region" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegionName"><code>RegionName</code></a></td>
    <td></td>
    <td>Enables (opts-in) a particular Region for an account.</td>
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
    defaultValue="list_regions"
    values={[
        { label: 'list_regions', value: 'list_regions' }
    ]}
>
<TabItem value="list_regions">

Lists all the Regions for a given account and their respective opt-in statuses. Optionally, this list can be filtered by the region-opt-status-contains parameter.

```sql
SELECT
region_name,
region_opt_status
FROM aws.account.regions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_region"
    values={[
        { label: 'disable_region', value: 'disable_region' },
        { label: 'enable_region', value: 'enable_region' }
    ]}
>
<TabItem value="disable_region">

Disables (opts-out) a particular Region for an account. The act of disabling a Region will remove all IAM access to any resources that reside in that Region.

```sql
EXEC aws.account.regions.disable_region 
@region='{{ region }}' --required 
@@json=
'{
"AccountId": "{{ AccountId }}", 
"RegionName": "{{ RegionName }}"
}'
;
```
</TabItem>
<TabItem value="enable_region">

Enables (opts-in) a particular Region for an account.

```sql
EXEC aws.account.regions.enable_region 
@region='{{ region }}' --required 
@@json=
'{
"AccountId": "{{ AccountId }}", 
"RegionName": "{{ RegionName }}"
}'
;
```
</TabItem>
</Tabs>
