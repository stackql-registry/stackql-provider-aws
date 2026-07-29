--- 
title: function_code_signing_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - function_code_signing_configs
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

Creates, updates, deletes, gets or lists a <code>function_code_signing_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="function_code_signing_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.function_code_signing_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_function_code_signing_config"
    values={[
        { label: 'get_function_code_signing_config', value: 'get_function_code_signing_config' }
    ]}
>
<TabItem value="get_function_code_signing_config">

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
    <td><CopyableCode code="code_signing_config_arn" /></td>
    <td><code>string</code></td>
    <td>The The Amazon Resource Name (ARN) of the code signing configuration. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(b?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:code-signing-config:csc-&#91;a-z0-9&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="function_name" /></td>
    <td><code>string</code></td>
    <td>The name or ARN of the Lambda function. Name formats Function name - MyFunction. Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction. Partial ARN - 123456789012:function:MyFunction. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length. (pattern: &lt;code&gt;(arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:)?(&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:)?(\d&#123;12&#125;:)?(function:)?(&#91;a-zA-Z0-9-_&#93;+)(:(\$LATEST|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
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
    <td><a href="#get_function_code_signing_config"><CopyableCode code="get_function_code_signing_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the code signing configuration for the specified function.</td>
</tr>
<tr>
    <td><a href="#put_function_code_signing_config"><CopyableCode code="put_function_code_signing_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CodeSigningConfigArn"><code>CodeSigningConfigArn</code></a></td>
    <td></td>
    <td>Update the code signing configuration for the function. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function.</td>
</tr>
<tr>
    <td><a href="#delete_function_code_signing_config"><CopyableCode code="delete_function_code_signing_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the code signing configuration from the function.</td>
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
    <td>The name or ARN of the Lambda function. Name formats Function name - MyFunction. Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction. Partial ARN - 123456789012:function:MyFunction. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</td>
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
    defaultValue="get_function_code_signing_config"
    values={[
        { label: 'get_function_code_signing_config', value: 'get_function_code_signing_config' }
    ]}
>
<TabItem value="get_function_code_signing_config">

Returns the code signing configuration for the specified function.

```sql
SELECT
code_signing_config_arn,
function_name
FROM aws.lambda.function_code_signing_configs
WHERE function_name = '{{ function_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_function_code_signing_config"
    values={[
        { label: 'put_function_code_signing_config', value: 'put_function_code_signing_config' }
    ]}
>
<TabItem value="put_function_code_signing_config">

Update the code signing configuration for the function. Changes to the code signing configuration take effect the next time a user tries to deploy a code package to the function.

```sql
REPLACE aws.lambda.function_code_signing_configs
SET 
CodeSigningConfigArn = '{{ CodeSigningConfigArn }}'
WHERE 
function_name = '{{ function_name }}' --required
AND region = '{{ region }}' --required
AND CodeSigningConfigArn = '{{ CodeSigningConfigArn }}' --required
RETURNING
code_signing_config_arn,
function_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_function_code_signing_config"
    values={[
        { label: 'delete_function_code_signing_config', value: 'delete_function_code_signing_config' }
    ]}
>
<TabItem value="delete_function_code_signing_config">

Removes the code signing configuration from the function.

```sql
DELETE FROM aws.lambda.function_code_signing_configs
WHERE function_name = '{{ function_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
