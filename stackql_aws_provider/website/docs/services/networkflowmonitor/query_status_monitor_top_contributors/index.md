--- 
title: query_status_monitor_top_contributors
hide_title: false
hide_table_of_contents: false
keywords:
  - query_status_monitor_top_contributors
  - networkflowmonitor
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

Creates, updates, deletes, gets or lists a <code>query_status_monitor_top_contributors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_status_monitor_top_contributors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkflowmonitor.query_status_monitor_top_contributors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_query_status_monitor_top_contributors"
    values={[
        { label: 'get_query_status_monitor_top_contributors', value: 'get_query_status_monitor_top_contributors' }
    ]}
>
<TabItem value="get_query_status_monitor_top_contributors">

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
    <td>When you run a query, use this call to check the status of the query to make sure that the query has SUCCEEDED before you review the results. QUEUED: The query is scheduled to run. RUNNING: The query is in progress but not complete. SUCCEEDED: The query completed sucessfully. FAILED: The query failed due to an error. CANCELED: The query was canceled. (QUEUED, RUNNING, SUCCEEDED, FAILED, CANCELED)</td>
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
    <td><a href="#get_query_status_monitor_top_contributors"><CopyableCode code="get_query_status_monitor_top_contributors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current status of a query for the Network Flow Monitor query interface, for a specified query ID and monitor. This call returns the query status for the top contributors for a monitor. When you create a query, use this call to check the status of the query to make sure that it has has SUCCEEDED before you review the results. Use the same query ID that you used for the corresponding API call to start (create) the query, StartQueryMonitorTopContributors. When you run a query, use this call to check the status of the query to make sure that the query has SUCCEEDED before you review the results.</td>
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
    <td>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to start a query.</td>
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
    defaultValue="get_query_status_monitor_top_contributors"
    values={[
        { label: 'get_query_status_monitor_top_contributors', value: 'get_query_status_monitor_top_contributors' }
    ]}
>
<TabItem value="get_query_status_monitor_top_contributors">

Returns the current status of a query for the Network Flow Monitor query interface, for a specified query ID and monitor. This call returns the query status for the top contributors for a monitor. When you create a query, use this call to check the status of the query to make sure that it has has SUCCEEDED before you review the results. Use the same query ID that you used for the corresponding API call to start (create) the query, StartQueryMonitorTopContributors. When you run a query, use this call to check the status of the query to make sure that the query has SUCCEEDED before you review the results.

```sql
SELECT
status
FROM aws.networkflowmonitor.query_status_monitor_top_contributors
WHERE monitor_name = '{{ monitor_name }}' -- required
AND query_id = '{{ query_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
