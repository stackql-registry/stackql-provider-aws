--- 
title: buckets_aggregations
hide_title: false
hide_table_of_contents: false
keywords:
  - buckets_aggregations
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

Creates, updates, deletes, gets or lists a <code>buckets_aggregations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="buckets_aggregations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.buckets_aggregations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_buckets_aggregation"
    values={[
        { label: 'get_buckets_aggregation', value: 'get_buckets_aggregation' }
    ]}
>
<TabItem value="get_buckets_aggregation">

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
    <td><CopyableCode code="buckets" /></td>
    <td><code>array</code></td>
    <td>The main part of the response with a list of buckets. Each bucket contains a keyValue and a count. keyValue: The aggregation field value counted for the particular bucket. count: The number of documents that have that value.</td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of things that fit the query string criteria.</td>
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
    <td><a href="#get_buckets_aggregation"><CopyableCode code="get_buckets_aggregation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Aggregates on indexed data with search queries pertaining to particular fields. Requires permission to access the GetBucketsAggregation action.</td>
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
    defaultValue="get_buckets_aggregation"
    values={[
        { label: 'get_buckets_aggregation', value: 'get_buckets_aggregation' }
    ]}
>
<TabItem value="get_buckets_aggregation">

Aggregates on indexed data with search queries pertaining to particular fields. Requires permission to access the GetBucketsAggregation action.

```sql
SELECT
buckets,
total_count
FROM aws.iot.buckets_aggregations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
