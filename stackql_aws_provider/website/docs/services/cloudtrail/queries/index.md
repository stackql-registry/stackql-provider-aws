--- 
title: queries
hide_title: false
hide_table_of_contents: false
keywords:
  - queries
  - cloudtrail
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudtrail.queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_queries"
    values={[
        { label: 'list_queries', value: 'list_queries' },
        { label: 'describe_query', value: 'describe_query' }
    ]}
>
<TabItem value="list_queries">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token you can use to get the next page of results. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="queries" /></td>
    <td><code>array</code></td>
    <td>Lists matching query results, and shows query ID, status, and creation time of each query.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_query">

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
    <td><CopyableCode code="delivery_s3_uri" /></td>
    <td><code>string</code></td>
    <td>The URI for the S3 bucket where CloudTrail delivered query results, if applicable. (pattern: &lt;code&gt;s3:​//&#91;a-z0-9&#93;&#91;\.\-a-z0-9&#93;&#123;1,61&#125;&#91;a-z0-9&#93;(/.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_status" /></td>
    <td><code>string</code></td>
    <td>The delivery status. (SUCCESS, FAILED, FAILED_SIGNING_FILE, PENDING, RESOURCE_NOT_FOUND, ACCESS_DENIED, ACCESS_DENIED_SIGNING_FILE, CANCELLED, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The error message returned if a query failed. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_data_store_owner_account_id" /></td>
    <td><code>string</code></td>
    <td>The account ID of the event data store owner. (pattern: &lt;code&gt;\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="prompt" /></td>
    <td><code>string</code></td>
    <td>The prompt used for a generated query. For information about generated queries, see Create CloudTrail Lake queries from natural language prompts in the CloudTrail user guide. (pattern: &lt;code&gt;^&#91; -~\n&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="query_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the query. (pattern: &lt;code&gt;^&#91;a-f0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="query_statistics" /></td>
    <td><code>object</code></td>
    <td>Metadata about a query, including the number of events that were matched, the total number of events scanned, the query run time in milliseconds, and the query's creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="query_status" /></td>
    <td><code>string</code></td>
    <td>The status of a query. Values for QueryStatus include QUEUED, RUNNING, FINISHED, FAILED, TIMED_OUT, or CANCELLED (QUEUED, RUNNING, FINISHED, FAILED, CANCELLED, TIMED_OUT)</td>
</tr>
<tr>
    <td><CopyableCode code="query_string" /></td>
    <td><code>string</code></td>
    <td>The SQL code of a query. (pattern: &lt;code&gt;(?s).*&lt;/code&gt;)</td>
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
    <td><a href="#list_queries"><CopyableCode code="list_queries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of queries and query statuses for the past seven days. You must specify an ARN value for EventDataStore. Optionally, to shorten the list of results, you can specify a time range, formatted as timestamps, by adding StartTime and EndTime parameters, and a QueryStatus value. Valid values for QueryStatus include QUEUED, RUNNING, FINISHED, FAILED, TIMED_OUT, or CANCELLED.</td>
</tr>
<tr>
    <td><a href="#describe_query"><CopyableCode code="describe_query" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns metadata about a query, including query run time in milliseconds, number of events scanned and matched, and query status. If the query results were delivered to an S3 bucket, the response also provides the S3 URI and the delivery status. You must specify either QueryId or QueryAlias. Specifying the QueryAlias parameter returns information about the last query run for the alias. You can provide RefreshId along with QueryAlias to view the query results of a dashboard query for the specified RefreshId.</td>
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
    defaultValue="list_queries"
    values={[
        { label: 'list_queries', value: 'list_queries' },
        { label: 'describe_query', value: 'describe_query' }
    ]}
>
<TabItem value="list_queries">

Returns a list of queries and query statuses for the past seven days. You must specify an ARN value for EventDataStore. Optionally, to shorten the list of results, you can specify a time range, formatted as timestamps, by adding StartTime and EndTime parameters, and a QueryStatus value. Valid values for QueryStatus include QUEUED, RUNNING, FINISHED, FAILED, TIMED_OUT, or CANCELLED.

```sql
SELECT
next_token,
queries
FROM aws.cloudtrail.queries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_query">

Returns metadata about a query, including query run time in milliseconds, number of events scanned and matched, and query status. If the query results were delivered to an S3 bucket, the response also provides the S3 URI and the delivery status. You must specify either QueryId or QueryAlias. Specifying the QueryAlias parameter returns information about the last query run for the alias. You can provide RefreshId along with QueryAlias to view the query results of a dashboard query for the specified RefreshId.

```sql
SELECT
delivery_s3_uri,
delivery_status,
error_message,
event_data_store_owner_account_id,
prompt,
query_id,
query_statistics,
query_status,
query_string
FROM aws.cloudtrail.queries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
