--- 
title: query_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - query_statistics
  - lakeformation
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

Creates, updates, deletes, gets or lists a <code>query_statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.query_statistics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_query_statistics"
    values={[
        { label: 'get_query_statistics', value: 'get_query_statistics' }
    ]}
>
<TabItem value="get_query_statistics">

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
    <td><CopyableCode code="execution_statistics" /></td>
    <td><code>object</code></td>
    <td>An ExecutionStatistics structure containing execution statistics.</td>
</tr>
<tr>
    <td><CopyableCode code="planning_statistics" /></td>
    <td><code>object</code></td>
    <td>A PlanningStatistics structure containing query planning statistics.</td>
</tr>
<tr>
    <td><CopyableCode code="query_submission_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the query was submitted.</td>
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
    <td><a href="#get_query_statistics"><CopyableCode code="get_query_statistics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves statistics on the planning and execution of a query.</td>
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
    defaultValue="get_query_statistics"
    values={[
        { label: 'get_query_statistics', value: 'get_query_statistics' }
    ]}
>
<TabItem value="get_query_statistics">

Retrieves statistics on the planning and execution of a query.

```sql
SELECT
execution_statistics,
planning_statistics,
query_submission_time
FROM aws.lakeformation.query_statistics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
