--- 
title: provisioned_concurrency_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - provisioned_concurrency_configs
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

Creates, updates, deletes, gets or lists a <code>provisioned_concurrency_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="provisioned_concurrency_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.provisioned_concurrency_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_provisioned_concurrency_config"
    values={[
        { label: 'get_provisioned_concurrency_config', value: 'get_provisioned_concurrency_config' },
        { label: 'list_provisioned_concurrency_configs', value: 'list_provisioned_concurrency_configs' }
    ]}
>
<TabItem value="get_provisioned_concurrency_config">

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
    <td><CopyableCode code="AllocatedProvisionedConcurrentExecutions" /></td>
    <td><code>integer</code></td>
    <td>The amount of provisioned concurrency allocated. When a weighted alias is used during linear and canary deployments, this value fluctuates depending on the amount of concurrency that is provisioned for the function versions.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailableProvisionedConcurrentExecutions" /></td>
    <td><code>integer</code></td>
    <td>The amount of provisioned concurrency available.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModified" /></td>
    <td><code>string</code></td>
    <td>The date and time that a user last updated the configuration, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestedProvisionedConcurrentExecutions" /></td>
    <td><code>integer</code></td>
    <td>The amount of provisioned concurrency requested.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the allocation process. (IN_PROGRESS, READY, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>For failed allocations, the reason that provisioned concurrency could not be allocated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_provisioned_concurrency_configs">

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
    <td><CopyableCode code="AllocatedProvisionedConcurrentExecutions" /></td>
    <td><code>integer</code></td>
    <td>The amount of provisioned concurrency allocated. When a weighted alias is used during linear and canary deployments, this value fluctuates depending on the amount of concurrency that is provisioned for the function versions.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailableProvisionedConcurrentExecutions" /></td>
    <td><code>integer</code></td>
    <td>The amount of provisioned concurrency available.</td>
</tr>
<tr>
    <td><CopyableCode code="FunctionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the alias or version. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_&#93;+(:(\$LATEST|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModified" /></td>
    <td><code>string</code></td>
    <td>The date and time that a user last updated the configuration, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestedProvisionedConcurrentExecutions" /></td>
    <td><code>integer</code></td>
    <td>The amount of provisioned concurrency requested.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the allocation process. (IN_PROGRESS, READY, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>For failed allocations, the reason that provisioned concurrency could not be allocated.</td>
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
    <td><a href="#get_provisioned_concurrency_config"><CopyableCode code="get_provisioned_concurrency_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-Qualifier"><code>Qualifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the provisioned concurrency configuration for a function's alias or version.</td>
</tr>
<tr>
    <td><a href="#list_provisioned_concurrency_configs"><CopyableCode code="list_provisioned_concurrency_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Retrieves a list of provisioned concurrency configurations for a function.</td>
</tr>
<tr>
    <td><a href="#put_provisioned_concurrency_config"><CopyableCode code="put_provisioned_concurrency_config" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-Qualifier"><code>Qualifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProvisionedConcurrentExecutions"><code>ProvisionedConcurrentExecutions</code></a></td>
    <td></td>
    <td>Adds a provisioned concurrency configuration to a function's alias or version.</td>
</tr>
<tr>
    <td><a href="#delete_provisioned_concurrency_config"><CopyableCode code="delete_provisioned_concurrency_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-Qualifier"><code>Qualifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the provisioned concurrency configuration for a function.</td>
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
    <td>The version number or alias name.</td>
</tr>
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
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>Specify a number to limit the number of configurations returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_provisioned_concurrency_config"
    values={[
        { label: 'get_provisioned_concurrency_config', value: 'get_provisioned_concurrency_config' },
        { label: 'list_provisioned_concurrency_configs', value: 'list_provisioned_concurrency_configs' }
    ]}
>
<TabItem value="get_provisioned_concurrency_config">

Retrieves the provisioned concurrency configuration for a function's alias or version.

```sql
SELECT
AllocatedProvisionedConcurrentExecutions,
AvailableProvisionedConcurrentExecutions,
LastModified,
RequestedProvisionedConcurrentExecutions,
Status,
StatusReason
FROM aws.lambda.provisioned_concurrency_configs
WHERE function_name = '{{ function_name }}' -- required
AND Qualifier = '{{ Qualifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_provisioned_concurrency_configs">

Retrieves a list of provisioned concurrency configurations for a function.

```sql
SELECT
AllocatedProvisionedConcurrentExecutions,
AvailableProvisionedConcurrentExecutions,
FunctionArn,
LastModified,
RequestedProvisionedConcurrentExecutions,
Status,
StatusReason
FROM aws.lambda.provisioned_concurrency_configs
WHERE function_name = '{{ function_name }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_provisioned_concurrency_config"
    values={[
        { label: 'put_provisioned_concurrency_config', value: 'put_provisioned_concurrency_config' }
    ]}
>
<TabItem value="put_provisioned_concurrency_config">

Adds a provisioned concurrency configuration to a function's alias or version.

```sql
REPLACE aws.lambda.provisioned_concurrency_configs
SET 
ProvisionedConcurrentExecutions = {{ ProvisionedConcurrentExecutions }}
WHERE 
function_name = '{{ function_name }}' --required
AND Qualifier = '{{ Qualifier }}' --required
AND region = '{{ region }}' --required
AND ProvisionedConcurrentExecutions = '{{ ProvisionedConcurrentExecutions }}' --required
RETURNING
AllocatedProvisionedConcurrentExecutions,
AvailableProvisionedConcurrentExecutions,
LastModified,
RequestedProvisionedConcurrentExecutions,
Status,
StatusReason;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_provisioned_concurrency_config"
    values={[
        { label: 'delete_provisioned_concurrency_config', value: 'delete_provisioned_concurrency_config' }
    ]}
>
<TabItem value="delete_provisioned_concurrency_config">

Deletes the provisioned concurrency configuration for a function.

```sql
DELETE FROM aws.lambda.provisioned_concurrency_configs
WHERE function_name = '{{ function_name }}' --required
AND Qualifier = '{{ Qualifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
