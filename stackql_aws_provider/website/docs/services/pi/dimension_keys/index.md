--- 
title: dimension_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - dimension_keys
  - pi
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

Creates, updates, deletes, gets or lists a <code>dimension_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dimension_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pi.dimension_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dimension_keys"
    values={[
        { label: 'describe_dimension_keys', value: 'describe_dimension_keys' }
    ]}
>
<TabItem value="describe_dimension_keys">

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
    <td><CopyableCode code="AlignedEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time for the returned dimension keys, after alignment to a granular boundary (as specified by PeriodInSeconds). AlignedEndTime will be greater than or equal to the value of the user-specified Endtime.</td>
</tr>
<tr>
    <td><CopyableCode code="AlignedStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time for the returned dimension keys, after alignment to a granular boundary (as specified by PeriodInSeconds). AlignedStartTime will be less than or equal to the value of the user-specified StartTime.</td>
</tr>
<tr>
    <td><CopyableCode code="Keys" /></td>
    <td><code>array</code></td>
    <td>The dimension keys that were requested.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token that indicates the response didn’t return all available records because MaxRecords was specified in the previous request. To get the remaining records, specify NextToken in a separate request with this value. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_=-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PartitionKeys" /></td>
    <td><code>array</code></td>
    <td>If PartitionBy was present in the request, PartitionKeys contains the breakdown of dimension keys by the specified partitions.</td>
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
    <td><a href="#describe_dimension_keys"><CopyableCode code="describe_dimension_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>For a specific time period, retrieve the top N dimension keys for a metric. Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</td>
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
    defaultValue="describe_dimension_keys"
    values={[
        { label: 'describe_dimension_keys', value: 'describe_dimension_keys' }
    ]}
>
<TabItem value="describe_dimension_keys">

For a specific time period, retrieve the top N dimension keys for a metric. Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.

```sql
SELECT
AlignedEndTime,
AlignedStartTime,
Keys,
NextToken,
PartitionKeys
FROM aws.pi.dimension_keys
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
