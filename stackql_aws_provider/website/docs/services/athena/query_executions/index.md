--- 
title: query_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - query_executions
  - athena
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

Creates, updates, deletes, gets or lists a <code>query_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.athena.query_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_query_execution"
    values={[
        { label: 'batch_get_query_execution', value: 'batch_get_query_execution' },
        { label: 'get_query_execution', value: 'get_query_execution' },
        { label: 'list_query_executions', value: 'list_query_executions' }
    ]}
>
<TabItem value="batch_get_query_execution">

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
    <td><CopyableCode code="query_executions" /></td>
    <td><code>array</code></td>
    <td>Information about a query execution.</td>
</tr>
<tr>
    <td><CopyableCode code="unprocessed_query_execution_ids" /></td>
    <td><code>array</code></td>
    <td>Information about the query executions that failed to run.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_query_execution">

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
    <td><CopyableCode code="engine_version" /></td>
    <td><code>object</code></td>
    <td>The engine version that executed the query.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_parameters" /></td>
    <td><code>array</code></td>
    <td>A list of values for the parameters in a query. The values are applied sequentially to the parameters in the query in the order in which the parameters occur. The list of parameters is not returned in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_query_results_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for storing results in Athena owned storage, which includes whether this feature is enabled; whether encryption configuration, if any, is used for encrypting query results.</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>The SQL query statements which the query execution ran.</td>
</tr>
<tr>
    <td><CopyableCode code="query_execution_context" /></td>
    <td><code>object</code></td>
    <td>The database in which the query execution occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="query_execution_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for each query execution. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="query_results_s3_access_grants_configuration" /></td>
    <td><code>object</code></td>
    <td>Specifies whether Amazon S3 access grants are enabled for query results.</td>
</tr>
<tr>
    <td><CopyableCode code="result_configuration" /></td>
    <td><code>object</code></td>
    <td>The location in Amazon S3 where query and calculation results are stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the location for the query results and the encryption configuration that are specified for the workgroup.</td>
</tr>
<tr>
    <td><CopyableCode code="result_reuse_configuration" /></td>
    <td><code>object</code></td>
    <td>Specifies the query result reuse behavior that was used for the query.</td>
</tr>
<tr>
    <td><CopyableCode code="statement_type" /></td>
    <td><code>string</code></td>
    <td>The type of query statement that was run. DDL indicates DDL query statements. DML indicates DML (Data Manipulation Language) query statements, such as CREATE TABLE AS SELECT. UTILITY indicates query statements other than DDL and DML, such as SHOW CREATE TABLE, EXPLAIN, DESCRIBE, or SHOW TABLES. (DDL, DML, UTILITY)</td>
</tr>
<tr>
    <td><CopyableCode code="statistics" /></td>
    <td><code>object</code></td>
    <td>Query execution statistics, such as the amount of data scanned, the amount of time that the query took to process, and the type of statement that was run.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The completion date, current state, submission time, and state change reason (if applicable) for the query execution.</td>
</tr>
<tr>
    <td><CopyableCode code="substatement_type" /></td>
    <td><code>string</code></td>
    <td>The kind of query statement that was run.</td>
</tr>
<tr>
    <td><CopyableCode code="work_group" /></td>
    <td><code>string</code></td>
    <td>The name of the workgroup in which the query ran. (pattern: &lt;code&gt;&#91;a-zA-Z0-9._-&#93;&#123;1,128&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_query_executions">

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
    <td><CopyableCode code="query_execution_id" /></td>
    <td><code>string</code></td>
    <td>The unique IDs of each query execution as an array of strings.</td>
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
    <td><a href="#batch_get_query_execution"><CopyableCode code="batch_get_query_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use ListQueryExecutionsInput$WorkGroup. Query executions differ from named (saved) queries. Use BatchGetNamedQueryInput to get details about named queries.</td>
</tr>
<tr>
    <td><a href="#get_query_execution"><CopyableCode code="get_query_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.</td>
</tr>
<tr>
    <td><a href="#list_query_executions"><CopyableCode code="list_query_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of available query execution IDs for the queries in the specified workgroup. Athena keeps a query history for 45 days. If a workgroup is not specified, returns a list of query execution IDs for the primary workgroup. Requires you to have access to the workgroup in which the queries ran.</td>
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
    defaultValue="batch_get_query_execution"
    values={[
        { label: 'batch_get_query_execution', value: 'batch_get_query_execution' },
        { label: 'get_query_execution', value: 'get_query_execution' },
        { label: 'list_query_executions', value: 'list_query_executions' }
    ]}
>
<TabItem value="batch_get_query_execution">

Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use ListQueryExecutionsInput$WorkGroup. Query executions differ from named (saved) queries. Use BatchGetNamedQueryInput to get details about named queries.

```sql
SELECT
query_executions,
unprocessed_query_execution_ids
FROM aws.athena.query_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_query_execution">

Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.

```sql
SELECT
engine_version,
execution_parameters,
managed_query_results_configuration,
query,
query_execution_context,
query_execution_id,
query_results_s3_access_grants_configuration,
result_configuration,
result_reuse_configuration,
statement_type,
statistics,
status,
substatement_type,
work_group
FROM aws.athena.query_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_query_executions">

Provides a list of available query execution IDs for the queries in the specified workgroup. Athena keeps a query history for 45 days. If a workgroup is not specified, returns a list of query execution IDs for the primary workgroup. Requires you to have access to the workgroup in which the queries ran.

```sql
SELECT
query_execution_id
FROM aws.athena.query_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
