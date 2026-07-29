--- 
title: function_event_invoke_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - function_event_invoke_configs
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

Creates, updates, deletes, gets or lists a <code>function_event_invoke_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="function_event_invoke_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.function_event_invoke_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_function_event_invoke_config"
    values={[
        { label: 'get_function_event_invoke_config', value: 'get_function_event_invoke_config' }
    ]}
>
<TabItem value="get_function_event_invoke_config">

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
    <td><CopyableCode code="destination_config" /></td>
    <td><code>object</code></td>
    <td>A configuration object that specifies the destination of an event after Lambda processes it. For more information, see Adding a destination.</td>
</tr>
<tr>
    <td><CopyableCode code="function_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the function. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_&#93;+(:(\$LATEST|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the configuration was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_event_age_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The maximum age of a request that Lambda sends to a function for processing.</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_retry_attempts" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of times to retry when the function returns an error.</td>
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
    <td><a href="#get_function_event_invoke_config"><CopyableCode code="get_function_event_invoke_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Qualifier"><code>Qualifier</code></a></td>
    <td>Retrieves the configuration for asynchronous invocation for a function, version, or alias. To configure options for asynchronous invocation, use PutFunctionEventInvokeConfig.</td>
</tr>
<tr>
    <td><a href="#update_function_event_invoke_config"><CopyableCode code="update_function_event_invoke_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Qualifier"><code>Qualifier</code></a></td>
    <td>Updates the configuration for asynchronous invocation for a function, version, or alias. To configure options for asynchronous invocation, use PutFunctionEventInvokeConfig.</td>
</tr>
<tr>
    <td><a href="#put_function_event_invoke_config"><CopyableCode code="put_function_event_invoke_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Qualifier"><code>Qualifier</code></a></td>
    <td>Configures options for asynchronous invocation on a function, version, or alias. If a configuration already exists for a function, version, or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without affecting existing settings for other options, use UpdateFunctionEventInvokeConfig. By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with UpdateFunctionConfiguration. To send an invocation record to a queue, topic, S3 bucket, function, or event bus, specify a destination. You can configure separate destinations for successful invocations (on-success) and events that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a dead-letter queue. S3 buckets are supported only for on-failure destinations. To retain records of successful invocations, use another destination type.</td>
</tr>
<tr>
    <td><a href="#delete_function_event_invoke_config"><CopyableCode code="delete_function_event_invoke_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Qualifier"><code>Qualifier</code></a></td>
    <td>Deletes the configuration for asynchronous invocation for a function, version, or alias. To configure options for asynchronous invocation, use PutFunctionEventInvokeConfig.</td>
</tr>
<tr>
    <td><a href="#list_function_event_invoke_configs"><CopyableCode code="list_function_event_invoke_configs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Retrieves a list of configurations for asynchronous invocation for a function. To configure options for asynchronous invocation, use PutFunctionEventInvokeConfig.</td>
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
    <td>The name or ARN of the Lambda function. Name formats Function name - my-function. Function ARN - arn:aws:lambda:us-west-2:123456789012:function:my-function. Partial ARN - 123456789012:function:my-function. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of configurations to return.</td>
</tr>
<tr id="parameter-Qualifier">
    <td><CopyableCode code="Qualifier" /></td>
    <td><code>string</code></td>
    <td>A version number or alias name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_function_event_invoke_config"
    values={[
        { label: 'get_function_event_invoke_config', value: 'get_function_event_invoke_config' }
    ]}
>
<TabItem value="get_function_event_invoke_config">

Retrieves the configuration for asynchronous invocation for a function, version, or alias. To configure options for asynchronous invocation, use PutFunctionEventInvokeConfig.

```sql
SELECT
destination_config,
function_arn,
last_modified,
maximum_event_age_in_seconds,
maximum_retry_attempts
FROM aws.lambda.function_event_invoke_configs
WHERE function_name = '{{ function_name }}' -- required
AND region = '{{ region }}' -- required
AND Qualifier = '{{ Qualifier }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_function_event_invoke_config"
    values={[
        { label: 'update_function_event_invoke_config', value: 'update_function_event_invoke_config' }
    ]}
>
<TabItem value="update_function_event_invoke_config">

Updates the configuration for asynchronous invocation for a function, version, or alias. To configure options for asynchronous invocation, use PutFunctionEventInvokeConfig.

```sql
UPDATE aws.lambda.function_event_invoke_configs
SET 
MaximumRetryAttempts = {{ MaximumRetryAttempts }},
MaximumEventAgeInSeconds = {{ MaximumEventAgeInSeconds }},
DestinationConfig = '{{ DestinationConfig }}'
WHERE 
function_name = '{{ function_name }}' --required
AND region = '{{ region }}' --required
AND Qualifier = '{{ Qualifier}}'
RETURNING
destination_config,
function_arn,
last_modified,
maximum_event_age_in_seconds,
maximum_retry_attempts;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_function_event_invoke_config"
    values={[
        { label: 'put_function_event_invoke_config', value: 'put_function_event_invoke_config' }
    ]}
>
<TabItem value="put_function_event_invoke_config">

Configures options for asynchronous invocation on a function, version, or alias. If a configuration already exists for a function, version, or alias, this operation overwrites it. If you exclude any settings, they are removed. To set one option without affecting existing settings for other options, use UpdateFunctionEventInvokeConfig. By default, Lambda retries an asynchronous invocation twice if the function returns an error. It retains events in a queue for up to six hours. When an event fails all processing attempts or stays in the asynchronous invocation queue for too long, Lambda discards it. To retain discarded events, configure a dead-letter queue with UpdateFunctionConfiguration. To send an invocation record to a queue, topic, S3 bucket, function, or event bus, specify a destination. You can configure separate destinations for successful invocations (on-success) and events that fail all processing attempts (on-failure). You can configure destinations in addition to or instead of a dead-letter queue. S3 buckets are supported only for on-failure destinations. To retain records of successful invocations, use another destination type.

```sql
REPLACE aws.lambda.function_event_invoke_configs
SET 
MaximumRetryAttempts = {{ MaximumRetryAttempts }},
MaximumEventAgeInSeconds = {{ MaximumEventAgeInSeconds }},
DestinationConfig = '{{ DestinationConfig }}'
WHERE 
function_name = '{{ function_name }}' --required
AND region = '{{ region }}' --required
AND Qualifier = '{{ Qualifier}}'
RETURNING
destination_config,
function_arn,
last_modified,
maximum_event_age_in_seconds,
maximum_retry_attempts;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_function_event_invoke_config"
    values={[
        { label: 'delete_function_event_invoke_config', value: 'delete_function_event_invoke_config' }
    ]}
>
<TabItem value="delete_function_event_invoke_config">

Deletes the configuration for asynchronous invocation for a function, version, or alias. To configure options for asynchronous invocation, use PutFunctionEventInvokeConfig.

```sql
DELETE FROM aws.lambda.function_event_invoke_configs
WHERE function_name = '{{ function_name }}' --required
AND region = '{{ region }}' --required
AND Qualifier = '{{ Qualifier }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_function_event_invoke_configs"
    values={[
        { label: 'list_function_event_invoke_configs', value: 'list_function_event_invoke_configs' }
    ]}
>
<TabItem value="list_function_event_invoke_configs">

Retrieves a list of configurations for asynchronous invocation for a function. To configure options for asynchronous invocation, use PutFunctionEventInvokeConfig.

```sql
EXEC aws.lambda.function_event_invoke_configs.list_function_event_invoke_configs 
@function_name='{{ function_name }}' --required, 
@region='{{ region }}' --required, 
@Marker='{{ Marker }}', 
@MaxItems='{{ MaxItems }}'
;
```
</TabItem>
</Tabs>
