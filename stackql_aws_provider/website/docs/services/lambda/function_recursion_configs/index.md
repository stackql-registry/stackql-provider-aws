--- 
title: function_recursion_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - function_recursion_configs
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

Creates, updates, deletes, gets or lists a <code>function_recursion_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="function_recursion_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.function_recursion_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_function_recursion_config"
    values={[
        { label: 'get_function_recursion_config', value: 'get_function_recursion_config' }
    ]}
>
<TabItem value="get_function_recursion_config">

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
    <td><CopyableCode code="RecursiveLoop" /></td>
    <td><code>string</code></td>
    <td>If your function's recursive loop detection configuration is Allow, Lambda doesn't take any action when it detects your function being invoked as part of a recursive loop. If your function's recursive loop detection configuration is Terminate, Lambda stops your function being invoked and notifies you when it detects your function being invoked as part of a recursive loop. By default, Lambda sets your function's configuration to Terminate. You can update this configuration using the PutFunctionRecursionConfig action. (Allow, Terminate)</td>
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
    <td><a href="#get_function_recursion_config"><CopyableCode code="get_function_recursion_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns your function's recursive loop detection configuration.</td>
</tr>
<tr>
    <td><a href="#put_function_recursion_config"><CopyableCode code="put_function_recursion_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RecursiveLoop"><code>RecursiveLoop</code></a></td>
    <td></td>
    <td>Sets your function's recursive loop detection configuration. When you configure a Lambda function to output to the same service or resource that invokes the function, it's possible to create an infinite recursive loop. For example, a Lambda function might write a message to an Amazon Simple Queue Service (Amazon SQS) queue, which then invokes the same function. This invocation causes the function to write another message to the queue, which in turn invokes the function again. Lambda can detect certain types of recursive loops shortly after they occur. When Lambda detects a recursive loop and your function's recursive loop detection configuration is set to Terminate, it stops your function being invoked and notifies you.</td>
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
    defaultValue="get_function_recursion_config"
    values={[
        { label: 'get_function_recursion_config', value: 'get_function_recursion_config' }
    ]}
>
<TabItem value="get_function_recursion_config">

Returns your function's recursive loop detection configuration.

```sql
SELECT
RecursiveLoop
FROM aws.lambda.function_recursion_configs
WHERE function_name = '{{ function_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_function_recursion_config"
    values={[
        { label: 'put_function_recursion_config', value: 'put_function_recursion_config' }
    ]}
>
<TabItem value="put_function_recursion_config">

Sets your function's recursive loop detection configuration. When you configure a Lambda function to output to the same service or resource that invokes the function, it's possible to create an infinite recursive loop. For example, a Lambda function might write a message to an Amazon Simple Queue Service (Amazon SQS) queue, which then invokes the same function. This invocation causes the function to write another message to the queue, which in turn invokes the function again. Lambda can detect certain types of recursive loops shortly after they occur. When Lambda detects a recursive loop and your function's recursive loop detection configuration is set to Terminate, it stops your function being invoked and notifies you.

```sql
REPLACE aws.lambda.function_recursion_configs
SET 
RecursiveLoop = '{{ RecursiveLoop }}'
WHERE 
function_name = '{{ function_name }}' --required
AND region = '{{ region }}' --required
AND RecursiveLoop = '{{ RecursiveLoop }}' --required
RETURNING
RecursiveLoop;
```
</TabItem>
</Tabs>
