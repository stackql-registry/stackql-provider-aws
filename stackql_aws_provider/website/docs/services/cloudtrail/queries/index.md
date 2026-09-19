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
    <td>CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see CloudTrail Lake availability change. Returns a list of queries and query statuses for the past seven days. You must specify an ARN value for EventDataStore. Optionally, to shorten the list of results, you can specify a time range, formatted as timestamps, by adding StartTime and EndTime parameters, and a QueryStatus value. Valid values for QueryStatus include QUEUED, RUNNING, FINISHED, FAILED, TIMED_OUT, or CANCELLED.</td>
</tr>
<tr>
    <td><a href="#describe_query"><CopyableCode code="describe_query" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see CloudTrail Lake availability change. Returns metadata about a query, including query run time in milliseconds, number of events scanned and matched, and query status. If the query results were delivered to an S3 bucket, the response also provides the S3 URI and the delivery status. You must specify either QueryId or QueryAlias. Specifying the QueryAlias parameter returns information about the last query run for the alias. You can provide RefreshId along with QueryAlias to view the query results of a dashboard query for the specified RefreshId.</td>
</tr>
<tr>
    <td><a href="#cancel_query"><CopyableCode code="cancel_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-QueryId"><code>QueryId</code></a></td>
    <td></td>
    <td>CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see CloudTrail Lake availability change. Cancels a query if the query is not in a terminated state, such as CANCELLED, FAILED, TIMED_OUT, or FINISHED. You must specify an ARN value for EventDataStore. The ID of the query that you want to cancel is also required. When you run CancelQuery, the query status might show as CANCELLED even if the operation is not yet finished.</td>
</tr>
<tr>
    <td><a href="#generate_query"><CopyableCode code="generate_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EventDataStores"><code>EventDataStores</code></a></td>
    <td></td>
    <td>CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see CloudTrail Lake availability change. Generates a query from a natural language prompt. This operation uses generative artificial intelligence (generative AI) to produce a ready-to-use SQL query from the prompt. The prompt can be a question or a statement about the event data in your event data store. For example, you can enter prompts like "What are my top errors in the past month?" and “Give me a list of users that used SNS.” The prompt must be in English. For information about limitations, permissions, and supported Regions, see Create CloudTrail Lake queries from natural language prompts in the CloudTrail user guide. Do not include any personally identifying, confidential, or sensitive information in your prompts. This feature uses generative AI large language models (LLMs); we recommend double-checking the LLM response.</td>
</tr>
<tr>
    <td><a href="#start_query"><CopyableCode code="start_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see CloudTrail Lake availability change. Starts a CloudTrail Lake query. Use the QueryStatement parameter to provide your SQL query, enclosed in single quotation marks. Use the optional DeliveryS3Uri parameter to deliver the query results to an S3 bucket. StartQuery requires you specify either the QueryStatement parameter, or a QueryAlias and any QueryParameters. In the current release, the QueryAlias and QueryParameters parameters are used only for the queries that populate the CloudTrail Lake dashboards.</td>
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

CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see CloudTrail Lake availability change. Returns a list of queries and query statuses for the past seven days. You must specify an ARN value for EventDataStore. Optionally, to shorten the list of results, you can specify a time range, formatted as timestamps, by adding StartTime and EndTime parameters, and a QueryStatus value. Valid values for QueryStatus include QUEUED, RUNNING, FINISHED, FAILED, TIMED_OUT, or CANCELLED.

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

CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see CloudTrail Lake availability change. Returns metadata about a query, including query run time in milliseconds, number of events scanned and matched, and query status. If the query results were delivered to an S3 bucket, the response also provides the S3 URI and the delivery status. You must specify either QueryId or QueryAlias. Specifying the QueryAlias parameter returns information about the last query run for the alias. You can provide RefreshId along with QueryAlias to view the query results of a dashboard query for the specified RefreshId.

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


## Lifecycle Methods

<Tabs
    defaultValue="cancel_query"
    values={[
        { label: 'cancel_query', value: 'cancel_query' },
        { label: 'generate_query', value: 'generate_query' },
        { label: 'start_query', value: 'start_query' }
    ]}
>
<TabItem value="cancel_query">

CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see CloudTrail Lake availability change. Cancels a query if the query is not in a terminated state, such as CANCELLED, FAILED, TIMED_OUT, or FINISHED. You must specify an ARN value for EventDataStore. The ID of the query that you want to cancel is also required. When you run CancelQuery, the query status might show as CANCELLED even if the operation is not yet finished.

```sql
EXEC aws.cloudtrail.queries.cancel_query 
@region='{{ region }}' --required 
@@json=
'{
"EventDataStore": "{{ EventDataStore }}", 
"QueryId": "{{ QueryId }}", 
"EventDataStoreOwnerAccountId": "{{ EventDataStoreOwnerAccountId }}"
}'
;
```
</TabItem>
<TabItem value="generate_query">

CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see CloudTrail Lake availability change. Generates a query from a natural language prompt. This operation uses generative artificial intelligence (generative AI) to produce a ready-to-use SQL query from the prompt. The prompt can be a question or a statement about the event data in your event data store. For example, you can enter prompts like "What are my top errors in the past month?" and “Give me a list of users that used SNS.” The prompt must be in English. For information about limitations, permissions, and supported Regions, see Create CloudTrail Lake queries from natural language prompts in the CloudTrail user guide. Do not include any personally identifying, confidential, or sensitive information in your prompts. This feature uses generative AI large language models (LLMs); we recommend double-checking the LLM response.

```sql
EXEC aws.cloudtrail.queries.generate_query 
@region='{{ region }}' --required 
@@json=
'{
"EventDataStores": "{{ EventDataStores }}", 
"Prompt": "{{ Prompt }}"
}'
;
```
</TabItem>
<TabItem value="start_query">

CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see CloudTrail Lake availability change. Starts a CloudTrail Lake query. Use the QueryStatement parameter to provide your SQL query, enclosed in single quotation marks. Use the optional DeliveryS3Uri parameter to deliver the query results to an S3 bucket. StartQuery requires you specify either the QueryStatement parameter, or a QueryAlias and any QueryParameters. In the current release, the QueryAlias and QueryParameters parameters are used only for the queries that populate the CloudTrail Lake dashboards.

```sql
EXEC aws.cloudtrail.queries.start_query 
@region='{{ region }}' --required 
@@json=
'{
"QueryStatement": "{{ QueryStatement }}", 
"DeliveryS3Uri": "{{ DeliveryS3Uri }}", 
"QueryAlias": "{{ QueryAlias }}", 
"QueryParameters": "{{ QueryParameters }}", 
"EventDataStoreOwnerAccountId": "{{ EventDataStoreOwnerAccountId }}"
}'
;
```
</TabItem>
</Tabs>
