--- 
title: query_status
hide_title: false
hide_table_of_contents: false
keywords:
  - query_status
  - internetmonitor
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

Creates, updates, deletes, gets or lists a <code>query_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.internetmonitor.query_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_query_status"
    values={[
        { label: 'get_query_status', value: 'get_query_status' }
    ]}
>
<TabItem value="get_query_status">

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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status for a query. (QUEUED, RUNNING, SUCCEEDED, FAILED, CANCELED)</td>
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
    <td><a href="#get_query_status"><CopyableCode code="get_query_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current status of a query for the Amazon CloudWatch Internet Monitor query interface, for a specified query ID and monitor. When you run a query, check the status to make sure that the query has SUCCEEDED before you review the results. QUEUED: The query is scheduled to run. RUNNING: The query is in progress but not complete. SUCCEEDED: The query completed sucessfully. FAILED: The query failed due to an error. CANCELED: The query was canceled.</td>
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
<tr id="parameter-monitor_name">
    <td><CopyableCode code="monitor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor.</td>
</tr>
<tr id="parameter-query_id">
    <td><CopyableCode code="query_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the query that you want to return the status for. A QueryId is an internally-generated dentifier for a specific query.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_query_status"
    values={[
        { label: 'get_query_status', value: 'get_query_status' }
    ]}
>
<TabItem value="get_query_status">

Returns the current status of a query for the Amazon CloudWatch Internet Monitor query interface, for a specified query ID and monitor. When you run a query, check the status to make sure that the query has SUCCEEDED before you review the results. QUEUED: The query is scheduled to run. RUNNING: The query is in progress but not complete. SUCCEEDED: The query completed sucessfully. FAILED: The query failed due to an error. CANCELED: The query was canceled.

```sql
SELECT
status
FROM aws.internetmonitor.query_status
WHERE monitor_name = '{{ monitor_name }}' -- required
AND query_id = '{{ query_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
