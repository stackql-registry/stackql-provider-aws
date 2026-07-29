--- 
title: query_states
hide_title: false
hide_table_of_contents: false
keywords:
  - query_states
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

Creates, updates, deletes, gets or lists a <code>query_states</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_states" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.query_states" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_query_state"
    values={[
        { label: 'get_query_state', value: 'get_query_state' }
    ]}
>
<TabItem value="get_query_state">

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
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>An error message when the operation fails.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of a query previously submitted. The possible states are: PENDING: the query is pending. WORKUNITS_AVAILABLE: some work units are ready for retrieval and execution. FINISHED: the query planning finished successfully, and all work units are ready for retrieval and execution. ERROR: an error occurred with the query, such as an invalid query ID or a backend error. (PENDING, WORKUNITS_AVAILABLE, ERROR, FINISHED, EXPIRED)</td>
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
    <td><a href="#get_query_state"><CopyableCode code="get_query_state" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the state of a query previously submitted. Clients are expected to poll GetQueryState to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to StartQueryPlanning.</td>
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
    defaultValue="get_query_state"
    values={[
        { label: 'get_query_state', value: 'get_query_state' }
    ]}
>
<TabItem value="get_query_state">

Returns the state of a query previously submitted. Clients are expected to poll GetQueryState to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to StartQueryPlanning.

```sql
SELECT
error,
state
FROM aws.lakeformation.query_states
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
