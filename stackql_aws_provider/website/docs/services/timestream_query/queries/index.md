--- 
title: queries
hide_title: false
hide_table_of_contents: false
keywords:
  - queries
  - timestream_query
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

Creates, updates, deletes, gets or lists a <code>queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.timestream_query.queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#cancel_query"><CopyableCode code="cancel_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueryId"><code>QueryId</code></a></td>
    <td></td>
    <td>Cancels a query that has been issued. Cancellation is provided only if the query has not completed running before the cancellation request was issued. Because cancellation is an idempotent operation, subsequent cancellation requests will return a CancellationMessage, indicating that the query has already been canceled. See code sample for details.</td>
</tr>
<tr>
    <td><a href="#prepare_query"><CopyableCode code="prepare_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueryString"><code>QueryString</code></a></td>
    <td></td>
    <td>A synchronous operation that allows you to submit a query with parameters to be stored by Timestream for later running. Timestream only supports using this operation with ValidateOnly set to true.</td>
</tr>
<tr>
    <td><a href="#query"><CopyableCode code="query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueryString"><code>QueryString</code></a></td>
    <td></td>
    <td>Query is a synchronous operation that enables you to run a query against your Amazon Timestream data. If you enabled QueryInsights, this API also returns insights and metrics related to the query that you executed. QueryInsights helps with performance tuning of your query. For more information about QueryInsights, see Using query insights to optimize queries in Amazon Timestream. The maximum number of Query API requests you're allowed to make with QueryInsights enabled is 1 query per second (QPS). If you exceed this query rate, it might result in throttling. Query will time out after 60 seconds. You must update the default timeout in the SDK to support a timeout of 60 seconds. See the code sample for details. Your query request will fail in the following cases: If you submit a Query request with the same client token outside of the 5-minute idempotency window. If you submit a Query request with the same client token, but change other parameters, within the 5-minute idempotency window. If the size of the row (including the query metadata) exceeds 1 MB, then the query will fail with the following error message: Query aborted as max page response size has been exceeded by the output result row If the IAM principal of the query initiator and the result reader are not the same and/or the query initiator and the result reader do not have the same query string in the query requests, the query will fail with an Invalid pagination token error.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="cancel_query"
    values={[
        { label: 'cancel_query', value: 'cancel_query' },
        { label: 'prepare_query', value: 'prepare_query' },
        { label: 'query', value: 'query' }
    ]}
>
<TabItem value="cancel_query">

Cancels a query that has been issued. Cancellation is provided only if the query has not completed running before the cancellation request was issued. Because cancellation is an idempotent operation, subsequent cancellation requests will return a CancellationMessage, indicating that the query has already been canceled. See code sample for details.

```sql
EXEC aws.timestream_query.queries.cancel_query 
@region='{{ region }}' --required 
@@json=
'{
"QueryId": "{{ QueryId }}"
}'
;
```
</TabItem>
<TabItem value="prepare_query">

A synchronous operation that allows you to submit a query with parameters to be stored by Timestream for later running. Timestream only supports using this operation with ValidateOnly set to true.

```sql
EXEC aws.timestream_query.queries.prepare_query 
@region='{{ region }}' --required 
@@json=
'{
"QueryString": "{{ QueryString }}", 
"ValidateOnly": {{ ValidateOnly }}
}'
;
```
</TabItem>
<TabItem value="query">

Query is a synchronous operation that enables you to run a query against your Amazon Timestream data. If you enabled QueryInsights, this API also returns insights and metrics related to the query that you executed. QueryInsights helps with performance tuning of your query. For more information about QueryInsights, see Using query insights to optimize queries in Amazon Timestream. The maximum number of Query API requests you're allowed to make with QueryInsights enabled is 1 query per second (QPS). If you exceed this query rate, it might result in throttling. Query will time out after 60 seconds. You must update the default timeout in the SDK to support a timeout of 60 seconds. See the code sample for details. Your query request will fail in the following cases: If you submit a Query request with the same client token outside of the 5-minute idempotency window. If you submit a Query request with the same client token, but change other parameters, within the 5-minute idempotency window. If the size of the row (including the query metadata) exceeds 1 MB, then the query will fail with the following error message: Query aborted as max page response size has been exceeded by the output result row If the IAM principal of the query initiator and the result reader are not the same and/or the query initiator and the result reader do not have the same query string in the query requests, the query will fail with an Invalid pagination token error.

```sql
EXEC aws.timestream_query.queries.query 
@region='{{ region }}' --required 
@@json=
'{
"QueryString": "{{ QueryString }}", 
"ClientToken": "{{ ClientToken }}", 
"NextToken": "{{ NextToken }}", 
"MaxRows": {{ MaxRows }}, 
"QueryInsights": "{{ QueryInsights }}"
}'
;
```
</TabItem>
</Tabs>
