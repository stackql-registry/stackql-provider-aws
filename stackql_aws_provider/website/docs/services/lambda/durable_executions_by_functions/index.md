--- 
title: durable_executions_by_functions
hide_title: false
hide_table_of_contents: false
keywords:
  - durable_executions_by_functions
  - lambda
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

Creates, updates, deletes, gets or lists a <code>durable_executions_by_functions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="durable_executions_by_functions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.durable_executions_by_functions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_durable_executions_by_function"
    values={[
        { label: 'list_durable_executions_by_function', value: 'list_durable_executions_by_function' }
    ]}
>
<TabItem value="list_durable_executions_by_function">

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
    <td><CopyableCode code="durable_execution_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the durable execution, if this execution is a durable execution. (pattern: &lt;code&gt;arn:(&#91;a-zA-Z0-9-&#93;+):lambda:(&#91;a-zA-Z0-9-&#93;+):(\d&#123;12&#125;):function:(&#91;a-zA-Z0-9_-&#93;+):(\$LATEST(?:\.PUBLISHED)?|&#91;0-9&#93;+)/durable-execution/(&#91;a-zA-Z0-9_-&#93;+)/(&#91;a-zA-Z0-9_-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="durable_execution_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the durable execution, if one was provided when the execution was started. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the durable execution ended, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).</td>
</tr>
<tr>
    <td><CopyableCode code="function_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Lambda function. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_\.&#93;+(:(\$LATEST(\.PUBLISHED)?|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the durable execution started, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the durable execution. (RUNNING, SUCCEEDED, FAILED, TIMED_OUT, STOPPED)</td>
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
    <td><a href="#list_durable_executions_by_function"><CopyableCode code="list_durable_executions_by_function" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Qualifier"><code>Qualifier</code></a>, <a href="#parameter-DurableExecutionName"><code>DurableExecutionName</code></a>, <a href="#parameter-Statuses"><code>Statuses</code></a>, <a href="#parameter-StartedAfter"><code>StartedAfter</code></a>, <a href="#parameter-StartedBefore"><code>StartedBefore</code></a>, <a href="#parameter-ReverseOrder"><code>ReverseOrder</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Returns a list of durable executions for a specified Lambda function. You can filter the results by execution name, status, and start time range. This API supports pagination for large result sets.</td>
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
<tr id="parameter-function_name">
    <td><CopyableCode code="function_name" /></td>
    <td><code>string</code></td>
    <td>The name or ARN of the Lambda function. You can specify a function name, a partial ARN, or a full ARN.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DurableExecutionName">
    <td><CopyableCode code="DurableExecutionName" /></td>
    <td><code>string</code></td>
    <td>Filter executions by name. Only executions with names that matches this string are returned.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Pagination token from a previous request to continue retrieving results.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of executions to return (1-1000). Default is 100.</td>
</tr>
<tr id="parameter-Qualifier">
    <td><CopyableCode code="Qualifier" /></td>
    <td><code>string</code></td>
    <td>The function version or alias. If not specified, lists executions for the $LATEST version.</td>
</tr>
<tr id="parameter-ReverseOrder">
    <td><CopyableCode code="ReverseOrder" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to return results in reverse chronological order (newest first). Default is false.</td>
</tr>
<tr id="parameter-StartedAfter">
    <td><CopyableCode code="StartedAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter executions that started after this timestamp (ISO 8601 format).</td>
</tr>
<tr id="parameter-StartedBefore">
    <td><CopyableCode code="StartedBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter executions that started before this timestamp (ISO 8601 format).</td>
</tr>
<tr id="parameter-Statuses">
    <td><CopyableCode code="Statuses" /></td>
    <td><code>array</code></td>
    <td>Filter executions by status. Valid values: RUNNING, SUCCEEDED, FAILED, TIMED_OUT, STOPPED.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_durable_executions_by_function"
    values={[
        { label: 'list_durable_executions_by_function', value: 'list_durable_executions_by_function' }
    ]}
>
<TabItem value="list_durable_executions_by_function">

Returns a list of durable executions for a specified Lambda function. You can filter the results by execution name, status, and start time range. This API supports pagination for large result sets.

```sql
SELECT
durable_execution_arn,
durable_execution_name,
end_timestamp,
function_arn,
start_timestamp,
status
FROM aws.lambda.durable_executions_by_functions
WHERE function_name = '{{ function_name }}' -- required
AND region = '{{ region }}' -- required
AND Qualifier = '{{ Qualifier }}'
AND DurableExecutionName = '{{ DurableExecutionName }}'
AND Statuses = '{{ Statuses }}'
AND StartedAfter = '{{ StartedAfter }}'
AND StartedBefore = '{{ StartedBefore }}'
AND ReverseOrder = '{{ ReverseOrder }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>
