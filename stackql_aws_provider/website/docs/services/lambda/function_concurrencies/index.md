--- 
title: function_concurrencies
hide_title: false
hide_table_of_contents: false
keywords:
  - function_concurrencies
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

Creates, updates, deletes, gets or lists a <code>function_concurrencies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="function_concurrencies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.function_concurrencies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_function_concurrency"
    values={[
        { label: 'get_function_concurrency', value: 'get_function_concurrency' }
    ]}
>
<TabItem value="get_function_concurrency">

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
    <td><CopyableCode code="ReservedConcurrentExecutions" /></td>
    <td><code>integer</code></td>
    <td>The number of simultaneous executions that are reserved for the function.</td>
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
    <td><a href="#get_function_concurrency"><CopyableCode code="get_function_concurrency" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a function, use PutFunctionConcurrency.</td>
</tr>
<tr>
    <td><a href="#put_function_concurrency"><CopyableCode code="put_function_concurrency" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReservedConcurrentExecutions"><code>ReservedConcurrentExecutions</code></a></td>
    <td></td>
    <td>Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level. Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use GetFunction to see the current setting for a function. Use GetAccountSettings to see your Regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see Lambda function scaling.</td>
</tr>
<tr>
    <td><a href="#delete_function_concurrency"><CopyableCode code="delete_function_concurrency" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a concurrent execution limit from a function.</td>
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
    <td>The name or ARN of the Lambda function. Name formats Function name – my-function. Function ARN – arn:aws:lambda:us-west-2:123456789012:function:my-function. Partial ARN – 123456789012:function:my-function. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</td>
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
    defaultValue="get_function_concurrency"
    values={[
        { label: 'get_function_concurrency', value: 'get_function_concurrency' }
    ]}
>
<TabItem value="get_function_concurrency">

Returns details about the reserved concurrency configuration for a function. To set a concurrency limit for a function, use PutFunctionConcurrency.

```sql
SELECT
ReservedConcurrentExecutions
FROM aws.lambda.function_concurrencies
WHERE function_name = '{{ function_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_function_concurrency"
    values={[
        { label: 'put_function_concurrency', value: 'put_function_concurrency' }
    ]}
>
<TabItem value="put_function_concurrency">

Sets the maximum number of simultaneous executions for a function, and reserves capacity for that concurrency level. Concurrency settings apply to the function as a whole, including all published versions and the unpublished version. Reserving concurrency both ensures that your function has capacity to process the specified number of events simultaneously, and prevents it from scaling beyond that level. Use GetFunction to see the current setting for a function. Use GetAccountSettings to see your Regional concurrency limit. You can reserve concurrency for as many functions as you like, as long as you leave at least 100 simultaneous executions unreserved for functions that aren't configured with a per-function limit. For more information, see Lambda function scaling.

```sql
REPLACE aws.lambda.function_concurrencies
SET 
ReservedConcurrentExecutions = {{ ReservedConcurrentExecutions }}
WHERE 
function_name = '{{ function_name }}' --required
AND region = '{{ region }}' --required
AND ReservedConcurrentExecutions = '{{ ReservedConcurrentExecutions }}' --required
RETURNING
ReservedConcurrentExecutions;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_function_concurrency"
    values={[
        { label: 'delete_function_concurrency', value: 'delete_function_concurrency' }
    ]}
>
<TabItem value="delete_function_concurrency">

Removes a concurrent execution limit from a function.

```sql
DELETE FROM aws.lambda.function_concurrencies
WHERE function_name = '{{ function_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
