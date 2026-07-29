--- 
title: scheduled_query_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_query_histories
  - logs
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

Creates, updates, deletes, gets or lists a <code>scheduled_query_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scheduled_query_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.scheduled_query_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_scheduled_query_history"
    values={[
        { label: 'get_scheduled_query_history', value: 'get_scheduled_query_history' }
    ]}
>
<TabItem value="get_scheduled_query_history">

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
    <td><CopyableCode code="destinations" /></td>
    <td><code>array</code></td>
    <td>Information about destination processing for this query execution.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Error message if the query execution failed.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_status" /></td>
    <td><code>string</code></td>
    <td>The execution status of the scheduled query run. (Running, InvalidQuery, Complete, Failed, Timeout)</td>
</tr>
<tr>
    <td><CopyableCode code="query_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this query execution.</td>
</tr>
<tr>
    <td><CopyableCode code="triggered_timestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the scheduled query execution was triggered.</td>
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
    <td><a href="#get_scheduled_query_history"><CopyableCode code="get_scheduled_query_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the execution history of a scheduled query within a specified time range, including query results and destination processing status.</td>
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
    defaultValue="get_scheduled_query_history"
    values={[
        { label: 'get_scheduled_query_history', value: 'get_scheduled_query_history' }
    ]}
>
<TabItem value="get_scheduled_query_history">

Retrieves the execution history of a scheduled query within a specified time range, including query results and destination processing status.

```sql
SELECT
destinations,
error_message,
execution_status,
query_id,
triggered_timestamp
FROM aws.logs.scheduled_query_histories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
