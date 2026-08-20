--- 
title: alias
hide_title: false
hide_table_of_contents: false
keywords:
  - alias
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

Creates, updates, deletes, gets or lists an <code>alias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.alias" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_alias"
    values={[
        { label: 'get_alias', value: 'get_alias' }
    ]}
>
<TabItem value="get_alias">

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
    <td><CopyableCode code="alias_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the alias. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:(eusc-)?&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_&#93;+(:(\$LATEST|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the alias.</td>
</tr>
<tr>
    <td><CopyableCode code="function_version" /></td>
    <td><code>string</code></td>
    <td>The function version that the alias invokes. (pattern: &lt;code&gt;(\$LATEST|&#91;0-9&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the alias. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9-_&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="revision_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier that changes when you update the alias.</td>
</tr>
<tr>
    <td><CopyableCode code="routing_config" /></td>
    <td><code>object</code></td>
    <td>The traffic-shifting configuration of a Lambda function alias.</td>
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
    <td><a href="#get_alias"><CopyableCode code="get_alias" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about a Lambda function alias.</td>
</tr>
<tr>
    <td><a href="#create_alias"><CopyableCode code="create_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FunctionVersion"><code>FunctionVersion</code></a></td>
    <td></td>
    <td>Creates an alias for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version. You can also map an alias to split invocation requests between two versions. Use the RoutingConfig parameter to specify a second version and the percentage of invocation requests that it receives.</td>
</tr>
<tr>
    <td><a href="#update_alias"><CopyableCode code="update_alias" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration of a Lambda function alias.</td>
</tr>
<tr>
    <td><a href="#delete_alias"><CopyableCode code="delete_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Lambda function alias.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the alias.</td>
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
    defaultValue="get_alias"
    values={[
        { label: 'get_alias', value: 'get_alias' }
    ]}
>
<TabItem value="get_alias">

Returns details about a Lambda function alias.

```sql
SELECT
alias_arn,
description,
function_version,
name,
revision_id,
routing_config
FROM aws.lambda.alias
WHERE function_name = '{{ function_name }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_alias"
    values={[
        { label: 'create_alias', value: 'create_alias' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_alias">

Creates an alias for a Lambda function version. Use aliases to provide clients with a function identifier that you can update to invoke a different version. You can also map an alias to split invocation requests between two versions. Use the RoutingConfig parameter to specify a second version and the percentage of invocation requests that it receives.

```sql
INSERT INTO aws.lambda.alias (
Name,
FunctionVersion,
Description,
RoutingConfig,
function_name,
region
)
SELECT 
'{{ Name }}',
'{{ FunctionVersion }}' /* required */,
'{{ Description }}',
'{{ RoutingConfig }}',
'{{ function_name }}',
'{{ region }}'
RETURNING
alias_arn,
description,
function_version,
name,
revision_id,
routing_config
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: alias
  props:
    - name: function_name
      value: "{{ function_name }}"
      description: Required parameter for the alias resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the alias resource.
    - name: Name
      value: "{{ Name }}"
    - name: FunctionVersion
      value: "{{ FunctionVersion }}"
    - name: Description
      value: "{{ Description }}"
    - name: RoutingConfig
      description: |
        The traffic-shifting configuration of a Lambda function alias.
      value:
        AdditionalVersionWeights: "{{ AdditionalVersionWeights }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_alias"
    values={[
        { label: 'update_alias', value: 'update_alias' }
    ]}
>
<TabItem value="update_alias">

Updates the configuration of a Lambda function alias.

```sql
UPDATE aws.lambda.alias
SET 
FunctionVersion = '{{ FunctionVersion }}',
Description = '{{ Description }}',
RoutingConfig = '{{ RoutingConfig }}',
RevisionId = '{{ RevisionId }}'
WHERE 
function_name = '{{ function_name }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
RETURNING
alias_arn,
description,
function_version,
name,
revision_id,
routing_config;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_alias"
    values={[
        { label: 'delete_alias', value: 'delete_alias' }
    ]}
>
<TabItem value="delete_alias">

Deletes a Lambda function alias.

```sql
DELETE FROM aws.lambda.alias
WHERE function_name = '{{ function_name }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
