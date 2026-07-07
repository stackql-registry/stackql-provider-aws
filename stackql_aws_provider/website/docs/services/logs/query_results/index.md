--- 
title: query_results
hide_title: false
hide_table_of_contents: false
keywords:
  - query_results
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

Creates, updates, deletes, gets or lists a <code>query_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="query_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.query_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_query_results"
    values={[
        { label: 'get_query_results', value: 'get_query_results' }
    ]}
>
<TabItem value="get_query_results">

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
    <td><CopyableCode code="encryptionKey" /></td>
    <td><code>string</code></td>
    <td>If you associated an KMS key with the CloudWatch Logs Insights query results in this account, this field displays the ARN of the key that's used to encrypt the query results when StartQuery stores them.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If there are more log events remaining in the results, the response includes a nextToken. You can use this token in a subsequent GetQueryResults request to get the next set of results. You can retrieve up to 100,000 log event results from a query by paginating with this token.</td>
</tr>
<tr>
    <td><CopyableCode code="queryLanguage" /></td>
    <td><code>string</code></td>
    <td>The query language used for this query. For more information about the query languages that CloudWatch Logs supports, see Supported query languages. (CWLI, SQL, PPL)</td>
</tr>
<tr>
    <td><CopyableCode code="results" /></td>
    <td><code>array</code></td>
    <td>The log events that matched the query criteria during the most recent time it ran. The results value is an array of arrays. Each log event is one object in the top-level array. Each of these log event objects is an array of field/value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="statistics" /></td>
    <td><code>object</code></td>
    <td>Includes the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the scanned log events. These values reflect the full raw results of the query.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the most recent running of the query. Possible values are Cancelled, Complete, Failed, Running, Scheduled, Timeout, and Unknown. Queries time out after 60 minutes of runtime. To avoid having your queries time out, reduce the time range being searched or partition your query into a number of queries. (Scheduled, Running, Complete, Failed, Cancelled, Timeout, Unknown)</td>
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
    <td><a href="#get_query_results"><CopyableCode code="get_query_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the results from the specified query. Only the fields requested in the query are returned, along with a @ptr field, which is the identifier for the log record. You can use the value of @ptr in a GetLogRecord operation to get the full log record. GetQueryResults does not start running a query. To run a query, use StartQuery. For more information about how long results of previous queries are available, see CloudWatch Logs quotas. If the value of the Status field in the output is Running, this operation returns only partial results. If you see a value of Scheduled or Running for the status, you can retry the operation later to see the final results. This operation is used both for retrieving results from interactive queries and from automated scheduled query executions. Scheduled queries use GetQueryResults internally to retrieve query results for processing and delivery to configured destinations. You can retrieve up to 100,000 log event results from a query, if available, by using pagination. Use the nextToken returned in the response to request additional pages of results, with each page returning up to 10,000 log events. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start queries in linked source accounts. For more information, see CloudWatch cross-account observability.</td>
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
    defaultValue="get_query_results"
    values={[
        { label: 'get_query_results', value: 'get_query_results' }
    ]}
>
<TabItem value="get_query_results">

Returns the results from the specified query. Only the fields requested in the query are returned, along with a @ptr field, which is the identifier for the log record. You can use the value of @ptr in a GetLogRecord operation to get the full log record. GetQueryResults does not start running a query. To run a query, use StartQuery. For more information about how long results of previous queries are available, see CloudWatch Logs quotas. If the value of the Status field in the output is Running, this operation returns only partial results. If you see a value of Scheduled or Running for the status, you can retry the operation later to see the final results. This operation is used both for retrieving results from interactive queries and from automated scheduled query executions. Scheduled queries use GetQueryResults internally to retrieve query results for processing and delivery to configured destinations. You can retrieve up to 100,000 log event results from a query, if available, by using pagination. Use the nextToken returned in the response to request additional pages of results, with each page returning up to 10,000 log events. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start queries in linked source accounts. For more information, see CloudWatch cross-account observability.

```sql
SELECT
encryptionKey,
nextToken,
queryLanguage,
results,
statistics,
status
FROM aws.logs.query_results
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
