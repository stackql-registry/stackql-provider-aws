--- 
title: runtime_management_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - runtime_management_configs
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

Creates, updates, deletes, gets or lists a <code>runtime_management_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="runtime_management_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.runtime_management_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_runtime_management_config"
    values={[
        { label: 'get_runtime_management_config', value: 'get_runtime_management_config' }
    ]}
>
<TabItem value="get_runtime_management_config">

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
    <td><CopyableCode code="function_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of your function. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_\.&#93;+(:(\$LATEST(\.PUBLISHED)?|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_version_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the runtime the function is configured to use. If the runtime update mode is Manual, the ARN is returned, otherwise null is returned. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):lambda:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(b?)))?-&#91;a-z&#93;+-\d&#123;1&#125;::runtime:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_runtime_on" /></td>
    <td><code>string</code></td>
    <td>The current runtime update mode of the function. (Auto, Manual, FunctionUpdate)</td>
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
    <td><a href="#get_runtime_management_config"><CopyableCode code="get_runtime_management_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Qualifier"><code>Qualifier</code></a></td>
    <td>Retrieves the runtime management configuration for a function's version. If the runtime update mode is Manual, this includes the ARN of the runtime version and the runtime update mode. If the runtime update mode is Auto or Function update, this includes the runtime update mode and null is returned for the ARN. For more information, see Runtime updates.</td>
</tr>
<tr>
    <td><a href="#put_runtime_management_config"><CopyableCode code="put_runtime_management_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UpdateRuntimeOn"><code>UpdateRuntimeOn</code></a></td>
    <td><a href="#parameter-Qualifier"><code>Qualifier</code></a></td>
    <td>Sets the runtime management configuration for a function's version. For more information, see Runtime updates.</td>
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
<tr id="parameter-Qualifier">
    <td><CopyableCode code="Qualifier" /></td>
    <td><code>string</code></td>
    <td>Specify a version of the function. This can be $LATEST or a published version number. If no value is specified, the configuration for the $LATEST version is returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_runtime_management_config"
    values={[
        { label: 'get_runtime_management_config', value: 'get_runtime_management_config' }
    ]}
>
<TabItem value="get_runtime_management_config">

Retrieves the runtime management configuration for a function's version. If the runtime update mode is Manual, this includes the ARN of the runtime version and the runtime update mode. If the runtime update mode is Auto or Function update, this includes the runtime update mode and null is returned for the ARN. For more information, see Runtime updates.

```sql
SELECT
function_arn,
runtime_version_arn,
update_runtime_on
FROM aws.lambda.runtime_management_configs
WHERE function_name = '{{ function_name }}' -- required
AND region = '{{ region }}' -- required
AND Qualifier = '{{ Qualifier }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_runtime_management_config"
    values={[
        { label: 'put_runtime_management_config', value: 'put_runtime_management_config' }
    ]}
>
<TabItem value="put_runtime_management_config">

Sets the runtime management configuration for a function's version. For more information, see Runtime updates.

```sql
REPLACE aws.lambda.runtime_management_configs
SET 
UpdateRuntimeOn = '{{ UpdateRuntimeOn }}',
RuntimeVersionArn = '{{ RuntimeVersionArn }}'
WHERE 
function_name = '{{ function_name }}' --required
AND region = '{{ region }}' --required
AND UpdateRuntimeOn = '{{ UpdateRuntimeOn }}' --required
AND Qualifier = '{{ Qualifier}}'
RETURNING
function_arn,
runtime_version_arn,
update_runtime_on;
```
</TabItem>
</Tabs>
