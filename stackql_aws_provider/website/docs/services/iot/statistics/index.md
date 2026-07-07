--- 
title: statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - statistics
  - iot
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

Creates, updates, deletes, gets or lists a <code>statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.statistics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_statistics"
    values={[
        { label: 'get_statistics', value: 'get_statistics' }
    ]}
>
<TabItem value="get_statistics">

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
    <td><CopyableCode code="average" /></td>
    <td><code>number (double)</code></td>
    <td>The average of the aggregated field values.</td>
</tr>
<tr>
    <td><CopyableCode code="count" /></td>
    <td><code>integer</code></td>
    <td>The count of things that match the query string criteria and contain a valid aggregation field value.</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_" /></td>
    <td><code>number (double)</code></td>
    <td>The maximum aggregated field value.</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_" /></td>
    <td><code>number (double)</code></td>
    <td>The minimum aggregated field value.</td>
</tr>
<tr>
    <td><CopyableCode code="stdDeviation" /></td>
    <td><code>number (double)</code></td>
    <td>The standard deviation of the aggregated field values.</td>
</tr>
<tr>
    <td><CopyableCode code="sum" /></td>
    <td><code>number (double)</code></td>
    <td>The sum of the aggregated field values.</td>
</tr>
<tr>
    <td><CopyableCode code="sumOfSquares" /></td>
    <td><code>number (double)</code></td>
    <td>The sum of the squares of the aggregated field values.</td>
</tr>
<tr>
    <td><CopyableCode code="variance" /></td>
    <td><code>number (double)</code></td>
    <td>The variance of the aggregated field values.</td>
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
    <td><a href="#get_statistics"><CopyableCode code="get_statistics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the count, average, sum, minimum, maximum, sum of squares, variance, and standard deviation for the specified aggregated field. If the aggregation field is of type String, only the count statistic is returned. Requires permission to access the GetStatistics action.</td>
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
    defaultValue="get_statistics"
    values={[
        { label: 'get_statistics', value: 'get_statistics' }
    ]}
>
<TabItem value="get_statistics">

Returns the count, average, sum, minimum, maximum, sum of squares, variance, and standard deviation for the specified aggregated field. If the aggregation field is of type String, only the count statistic is returned. Requires permission to access the GetStatistics action.

```sql
SELECT
average,
count,
maximum_,
minimum_,
stdDeviation,
sum,
sumOfSquares,
variance
FROM aws.iot.statistics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
