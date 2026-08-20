--- 
title: function_scaling_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - function_scaling_configs
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

Creates, updates, deletes, gets or lists a <code>function_scaling_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="function_scaling_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.function_scaling_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_function_scaling_config"
    values={[
        { label: 'get_function_scaling_config', value: 'get_function_scaling_config' }
    ]}
>
<TabItem value="get_function_scaling_config">

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
    <td><CopyableCode code="applied_function_scaling_config" /></td>
    <td><code>object</code></td>
    <td>The scaling configuration that is currently applied to the function. This represents the actual scaling settings in effect.</td>
</tr>
<tr>
    <td><CopyableCode code="function_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the function. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:(eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_&#93;+(:(\$LATEST|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="requested_function_scaling_config" /></td>
    <td><code>object</code></td>
    <td>The scaling configuration that was requested for the function.</td>
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
    <td><a href="#get_function_scaling_config"><CopyableCode code="get_function_scaling_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-Qualifier"><code>Qualifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the scaling configuration for a Lambda Managed Instances function.</td>
</tr>
<tr>
    <td><a href="#put_function_scaling_config"><CopyableCode code="put_function_scaling_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-Qualifier"><code>Qualifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sets the scaling configuration for a Lambda Managed Instances function. The scaling configuration defines the minimum and maximum number of execution environments that can be provisioned for the function, allowing you to control scaling behavior and resource allocation.</td>
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
<tr id="parameter-Qualifier">
    <td><CopyableCode code="Qualifier" /></td>
    <td><code>string</code></td>
    <td>Specify a version or alias to set the scaling configuration for a published version of the function.</td>
</tr>
<tr id="parameter-function_name">
    <td><CopyableCode code="function_name" /></td>
    <td><code>string</code></td>
    <td>The name or ARN of the Lambda function.</td>
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
    defaultValue="get_function_scaling_config"
    values={[
        { label: 'get_function_scaling_config', value: 'get_function_scaling_config' }
    ]}
>
<TabItem value="get_function_scaling_config">

Retrieves the scaling configuration for a Lambda Managed Instances function.

```sql
SELECT
applied_function_scaling_config,
function_arn,
requested_function_scaling_config
FROM aws.lambda.function_scaling_configs
WHERE function_name = '{{ function_name }}' -- required
AND Qualifier = '{{ Qualifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_function_scaling_config"
    values={[
        { label: 'put_function_scaling_config', value: 'put_function_scaling_config' }
    ]}
>
<TabItem value="put_function_scaling_config">

Sets the scaling configuration for a Lambda Managed Instances function. The scaling configuration defines the minimum and maximum number of execution environments that can be provisioned for the function, allowing you to control scaling behavior and resource allocation.

```sql
REPLACE aws.lambda.function_scaling_configs
SET 
FunctionScalingConfig = '{{ FunctionScalingConfig }}'
WHERE 
function_name = '{{ function_name }}' --required
AND Qualifier = '{{ Qualifier }}' --required
AND region = '{{ region }}' --required
RETURNING
function_state;
```
</TabItem>
</Tabs>
