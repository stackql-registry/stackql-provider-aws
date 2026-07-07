--- 
title: effective_hours_of_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - effective_hours_of_operations
  - connect
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

Creates, updates, deletes, gets or lists an <code>effective_hours_of_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="effective_hours_of_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.effective_hours_of_operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_effective_hours_of_operations"
    values={[
        { label: 'get_effective_hours_of_operations', value: 'get_effective_hours_of_operations' }
    ]}
>
<TabItem value="get_effective_hours_of_operations">

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
    <td><CopyableCode code="EffectiveHoursOfOperationList" /></td>
    <td><code>array</code></td>
    <td>Information about the effective hours of operations.</td>
</tr>
<tr>
    <td><CopyableCode code="EffectiveOverrideHoursList" /></td>
    <td><code>array</code></td>
    <td>Information about override configurations applied to the base hours of operation to calculate the effective hours. For more information about how override types are applied, see Build your list of overrides in the Administrator Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeZone" /></td>
    <td><code>string</code></td>
    <td>The time zone for the hours of operation.</td>
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
    <td><a href="#get_effective_hours_of_operations"><CopyableCode code="get_effective_hours_of_operations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-hours_of_operation_id"><code>hours_of_operation_id</code></a>, <a href="#parameter-fromDate"><code>fromDate</code></a>, <a href="#parameter-toDate"><code>toDate</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the hours of operations with the effective override applied.</td>
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
<tr id="parameter-fromDate">
    <td><CopyableCode code="fromDate" /></td>
    <td><code>string</code></td>
    <td>The date from when the hours of operation are listed.</td>
</tr>
<tr id="parameter-hours_of_operation_id">
    <td><CopyableCode code="hours_of_operation_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the hours of operation.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-toDate">
    <td><CopyableCode code="toDate" /></td>
    <td><code>string</code></td>
    <td>The date until when the hours of operation are listed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_effective_hours_of_operations"
    values={[
        { label: 'get_effective_hours_of_operations', value: 'get_effective_hours_of_operations' }
    ]}
>
<TabItem value="get_effective_hours_of_operations">

Get the hours of operations with the effective override applied.

```sql
SELECT
EffectiveHoursOfOperationList,
EffectiveOverrideHoursList,
TimeZone
FROM aws.connect.effective_hours_of_operations
WHERE instance_id = '{{ instance_id }}' -- required
AND hours_of_operation_id = '{{ hours_of_operation_id }}' -- required
AND fromDate = '{{ fromDate }}' -- required
AND toDate = '{{ toDate }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
