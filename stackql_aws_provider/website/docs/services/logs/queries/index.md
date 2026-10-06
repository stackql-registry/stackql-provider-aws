--- 
title: queries
hide_title: false
hide_table_of_contents: false
keywords:
  - queries
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

Creates, updates, deletes, gets or lists a <code>queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_queries"
    values={[
        { label: 'describe_queries', value: 'describe_queries' }
    ]}
>
<TabItem value="describe_queries">

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
    <td><CopyableCode code="bytes_scanned" /></td>
    <td><code>number (double)</code></td>
    <td>The total number of bytes scanned by the query. This indicates the cost associated with the query.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The date and time that this query was created.</td>
</tr>
<tr>
    <td><CopyableCode code="log_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the log group scanned by this query. (pattern: &lt;code&gt;&#91;\.\-_/#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="query_duration" /></td>
    <td><code>integer (int64)</code></td>
    <td>The duration in milliseconds that the query took to execute.</td>
</tr>
<tr>
    <td><CopyableCode code="query_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID number of this query.</td>
</tr>
<tr>
    <td><CopyableCode code="query_language" /></td>
    <td><code>string</code></td>
    <td>The query language used for this query. For more information about the query languages that CloudWatch Logs supports, see Supported query languages. (CWLI, SQL, PPL)</td>
</tr>
<tr>
    <td><CopyableCode code="query_string" /></td>
    <td><code>string</code></td>
    <td>The query string used in this query.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of this query. Possible values are Cancelled, Complete, Failed, Running, Scheduled, and Unknown. (Scheduled, Running, Complete, Failed, Cancelled, Timeout, Unknown)</td>
</tr>
<tr>
    <td><CopyableCode code="user_identity" /></td>
    <td><code>string</code></td>
    <td>The ARN of the user who ran the query.</td>
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
    <td><a href="#describe_queries"><CopyableCode code="describe_queries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of CloudWatch Logs Insights queries that are scheduled, running, or have been run recently in this account. You can request all queries or limit it to queries of a specific log group or queries with a certain status. This operation includes both interactive queries started directly by users and automated queries executed by scheduled query configurations. Scheduled query executions appear in the results alongside manually initiated queries, providing visibility into all query activity in your account.</td>
</tr>
<tr>
    <td><a href="#start_query"><CopyableCode code="start_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-queryString"><code>queryString</code></a></td>
    <td></td>
    <td>Starts a query of one or more log groups or data sources using CloudWatch Logs Insights. You specify the log groups or data sources and time range to query and the query string to use. You can query up to 10 data sources in a single query. For more information, see CloudWatch Logs Insights Query Syntax. After you run a query using StartQuery, the query results are stored by CloudWatch Logs. You can use GetQueryResults to retrieve the results of a query, using the queryId that StartQuery returns. Interactive queries started with StartQuery share concurrency limits with automated scheduled query executions. Both types of queries count toward the same regional concurrent query quota, so high scheduled query activity may affect the availability of concurrent slots for interactive queries. To specify the log groups to query, a StartQuery operation must include one of the following: Either exactly one of the following parameters: logGroupName, logGroupNames, or logGroupIdentifiers Or the queryString must include a SOURCE command to select log groups for the query. The SOURCE command can select log groups based on log group name prefix, account ID, and log class, or select data sources using dataSource syntax in LogsQL, PPL, and SQL. In LogsQL, the SOURCE command also supports filtering by log group tags. For more information about the SOURCE command, see SOURCE. If you have associated a KMS key with the query results in this account, then StartQuery uses that key to encrypt the results when it stores them. If no key is associated with query results, the query results are encrypted with the default CloudWatch Logs encryption method. Queries time out after 60 minutes of runtime. If your queries are timing out, reduce the time range being searched or partition your query into a number of queries. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start a query in a linked source account. For more information, see CloudWatch cross-account observability. For a cross-account StartQuery operation, the query definition must be defined in the monitoring account. You can have up to 100 concurrent CloudWatch Logs insights queries, including queries that have been added to dashboards.</td>
</tr>
<tr>
    <td><a href="#stop_query"><CopyableCode code="stop_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-queryId"><code>queryId</code></a></td>
    <td></td>
    <td>Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running. This operation can be used to cancel both interactive queries and individual scheduled query executions. When used with scheduled queries, StopQuery cancels only the specific execution identified by the query ID, not the scheduled query configuration itself.</td>
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
    defaultValue="describe_queries"
    values={[
        { label: 'describe_queries', value: 'describe_queries' }
    ]}
>
<TabItem value="describe_queries">

Returns a list of CloudWatch Logs Insights queries that are scheduled, running, or have been run recently in this account. You can request all queries or limit it to queries of a specific log group or queries with a certain status. This operation includes both interactive queries started directly by users and automated queries executed by scheduled query configurations. Scheduled query executions appear in the results alongside manually initiated queries, providing visibility into all query activity in your account.

```sql
SELECT
bytes_scanned,
create_time,
log_group_name,
query_duration,
query_id,
query_language,
query_string,
status,
user_identity
FROM aws.logs.queries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_query"
    values={[
        { label: 'start_query', value: 'start_query' },
        { label: 'stop_query', value: 'stop_query' }
    ]}
>
<TabItem value="start_query">

Starts a query of one or more log groups or data sources using CloudWatch Logs Insights. You specify the log groups or data sources and time range to query and the query string to use. You can query up to 10 data sources in a single query. For more information, see CloudWatch Logs Insights Query Syntax. After you run a query using StartQuery, the query results are stored by CloudWatch Logs. You can use GetQueryResults to retrieve the results of a query, using the queryId that StartQuery returns. Interactive queries started with StartQuery share concurrency limits with automated scheduled query executions. Both types of queries count toward the same regional concurrent query quota, so high scheduled query activity may affect the availability of concurrent slots for interactive queries. To specify the log groups to query, a StartQuery operation must include one of the following: Either exactly one of the following parameters: logGroupName, logGroupNames, or logGroupIdentifiers Or the queryString must include a SOURCE command to select log groups for the query. The SOURCE command can select log groups based on log group name prefix, account ID, and log class, or select data sources using dataSource syntax in LogsQL, PPL, and SQL. In LogsQL, the SOURCE command also supports filtering by log group tags. For more information about the SOURCE command, see SOURCE. If you have associated a KMS key with the query results in this account, then StartQuery uses that key to encrypt the results when it stores them. If no key is associated with query results, the query results are encrypted with the default CloudWatch Logs encryption method. Queries time out after 60 minutes of runtime. If your queries are timing out, reduce the time range being searched or partition your query into a number of queries. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start a query in a linked source account. For more information, see CloudWatch cross-account observability. For a cross-account StartQuery operation, the query definition must be defined in the monitoring account. You can have up to 100 concurrent CloudWatch Logs insights queries, including queries that have been added to dashboards.

```sql
EXEC aws.logs.queries.start_query 
@region='{{ region }}' --required 
@@json=
'{
"queryLanguage": "{{ queryLanguage }}", 
"logGroupName": "{{ logGroupName }}", 
"logGroupNames": "{{ logGroupNames }}", 
"logGroupIdentifiers": "{{ logGroupIdentifiers }}", 
"startTime": {{ startTime }}, 
"endTime": {{ endTime }}, 
"queryString": "{{ queryString }}", 
"limit": {{ limit }}
}'
;
```
</TabItem>
<TabItem value="stop_query">

Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running. This operation can be used to cancel both interactive queries and individual scheduled query executions. When used with scheduled queries, StopQuery cancels only the specific execution identified by the query ID, not the scheduled query configuration itself.

```sql
EXEC aws.logs.queries.stop_query 
@region='{{ region }}' --required 
@@json=
'{
"queryId": "{{ queryId }}"
}'
;
```
</TabItem>
</Tabs>
