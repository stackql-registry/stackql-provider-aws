--- 
title: estimated_water_allocations
hide_title: false
hide_table_of_contents: false
keywords:
  - estimated_water_allocations
  - sustainability
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

Creates, updates, deletes, gets or lists an <code>estimated_water_allocations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="estimated_water_allocations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sustainability.estimated_water_allocations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_estimated_water_allocation"
    values={[
        { label: 'get_estimated_water_allocation', value: 'get_estimated_water_allocation' }
    ]}
>
<TabItem value="get_estimated_water_allocation">

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
    <td><CopyableCode code="allocation_values" /></td>
    <td><code>object</code></td>
    <td>The allocation values for the requested water allocation types.</td>
</tr>
<tr>
    <td><CopyableCode code="dimensions_values" /></td>
    <td><code>object</code></td>
    <td>The dimensions used to group water allocation values.</td>
</tr>
<tr>
    <td><CopyableCode code="model_version" /></td>
    <td><code>string</code></td>
    <td>The semantic version-formatted string that indicates the methodology version used to calculate the water allocation values. The AWS Sustainability service reflects the most recent model version for every month. You will not see two entries for the same month with different ModelVersion values. (pattern: &lt;code&gt;v(0|&#91;1-9&#93;\d*)\.(0|&#91;1-9&#93;\d*)\.(0|&#91;1-9&#93;\d*)(?:-((?:0|&#91;1-9&#93;\d*|\d*&#91;a-zA-Z-&#93;&#91;0-9a-zA-Z-&#93;*)(?:\.(?:0|&#91;1-9&#93;\d*|\d*&#91;a-zA-Z-&#93;&#91;0-9a-zA-Z-&#93;*))*))?(?:\+(&#91;0-9a-zA-Z-&#93;+(?:\.&#91;0-9a-zA-Z-&#93;+)*))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="time_period" /></td>
    <td><code>object</code></td>
    <td>Represents a duration of time defined by start and end timestamps.</td>
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
    <td><a href="#get_estimated_water_allocation"><CopyableCode code="get_estimated_water_allocation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns estimated water allocation values based on customer grouping and filtering parameters. We recommend using pagination to ensure that the operation returns quickly and successfully.</td>
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
    defaultValue="get_estimated_water_allocation"
    values={[
        { label: 'get_estimated_water_allocation', value: 'get_estimated_water_allocation' }
    ]}
>
<TabItem value="get_estimated_water_allocation">

Returns estimated water allocation values based on customer grouping and filtering parameters. We recommend using pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
allocation_values,
dimensions_values,
model_version,
time_period
FROM aws.sustainability.estimated_water_allocations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
