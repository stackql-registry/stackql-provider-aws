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
