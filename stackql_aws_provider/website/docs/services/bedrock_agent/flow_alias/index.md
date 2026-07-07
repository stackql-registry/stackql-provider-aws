--- 
title: flow_alias
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_alias
  - bedrock_agent
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

Creates, updates, deletes, gets or lists a <code>flow_alias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flow_alias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent.flow_alias" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_flow_alias"
    values={[
        { label: 'get_flow_alias', value: 'get_flow_alias' }
    ]}
>
<TabItem value="get_flow_alias">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the alias of the flow. (pattern: &lt;code&gt;(TSTALIASID|&#91;0-9a-zA-Z&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the alias. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow. (pattern: &lt;code&gt;arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:flow/&#91;0-9a-zA-Z&#93;&#123;10&#125;/alias/(TSTALIASID|&#91;0-9a-zA-Z&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="concurrencyConfiguration" /></td>
    <td><code>object</code></td>
    <td>Determines how multiple nodes in a flow can run in parallel. Running nodes concurrently can improve your flow's performance.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the flow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="flowId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow that the alias belongs to. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="routingConfiguration" /></td>
    <td><code>array</code></td>
    <td>Contains information about the version that the alias is mapped to.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the alias was last updated.</td>
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
    <td><a href="#get_flow_alias"><CopyableCode code="get_flow_alias" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-flow_identifier"><code>flow_identifier</code></a>, <a href="#parameter-alias_identifier"><code>alias_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a flow. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#create_flow_alias"><CopyableCode code="create_flow_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-flow_identifier"><code>flow_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-routingConfiguration"><code>routingConfiguration</code></a></td>
    <td></td>
    <td>Creates an alias of a flow for deployment. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#update_flow_alias"><CopyableCode code="update_flow_alias" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-flow_identifier"><code>flow_identifier</code></a>, <a href="#parameter-alias_identifier"><code>alias_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-routingConfiguration"><code>routingConfiguration</code></a></td>
    <td></td>
    <td>Modifies the alias of a flow. Include both fields that you want to keep and ones that you want to change. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_flow_alias"><CopyableCode code="delete_flow_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-flow_identifier"><code>flow_identifier</code></a>, <a href="#parameter-alias_identifier"><code>alias_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an alias of a flow.</td>
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
<tr id="parameter-alias_identifier">
    <td><CopyableCode code="alias_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the alias to be deleted.</td>
</tr>
<tr id="parameter-flow_identifier">
    <td><CopyableCode code="flow_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow that the alias belongs to.</td>
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
    defaultValue="get_flow_alias"
    values={[
        { label: 'get_flow_alias', value: 'get_flow_alias' }
    ]}
>
<TabItem value="get_flow_alias">

Retrieves information about a flow. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.

```sql
SELECT
id,
name,
arn,
concurrencyConfiguration,
createdAt,
description,
flowId,
routingConfiguration,
updatedAt
FROM aws.bedrock_agent.flow_alias
WHERE flow_identifier = '{{ flow_identifier }}' -- required
AND alias_identifier = '{{ alias_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_flow_alias"
    values={[
        { label: 'create_flow_alias', value: 'create_flow_alias' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_flow_alias">

Creates an alias of a flow for deployment. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.

```sql
INSERT INTO aws.bedrock_agent.flow_alias (
name,
description,
routingConfiguration,
concurrencyConfiguration,
clientToken,
tags,
flow_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ routingConfiguration }}' /* required */,
'{{ concurrencyConfiguration }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ flow_identifier }}',
'{{ region }}'
RETURNING
id,
name,
arn,
concurrencyConfiguration,
createdAt,
description,
flowId,
routingConfiguration,
updatedAt
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: flow_alias
  props:
    - name: flow_identifier
      value: "{{ flow_identifier }}"
      description: Required parameter for the flow_alias resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the flow_alias resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: routingConfiguration
      value:
        - flowVersion: "{{ flowVersion }}"
    - name: concurrencyConfiguration
      description: |
        Determines how multiple nodes in a flow can run in parallel. Running nodes concurrently can improve your flow's performance.
      value:
        type_: "{{ type_ }}"
        maxConcurrency: {{ maxConcurrency }}
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_flow_alias"
    values={[
        { label: 'update_flow_alias', value: 'update_flow_alias' }
    ]}
>
<TabItem value="update_flow_alias">

Modifies the alias of a flow. Include both fields that you want to keep and ones that you want to change. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.

```sql
UPDATE aws.bedrock_agent.flow_alias
SET 
name = '{{ name }}',
description = '{{ description }}',
routingConfiguration = '{{ routingConfiguration }}',
concurrencyConfiguration = '{{ concurrencyConfiguration }}'
WHERE 
flow_identifier = '{{ flow_identifier }}' --required
AND alias_identifier = '{{ alias_identifier }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND routingConfiguration = '{{ routingConfiguration }}' --required
RETURNING
id,
name,
arn,
concurrencyConfiguration,
createdAt,
description,
flowId,
routingConfiguration,
updatedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_flow_alias"
    values={[
        { label: 'delete_flow_alias', value: 'delete_flow_alias' }
    ]}
>
<TabItem value="delete_flow_alias">

Deletes an alias of a flow.

```sql
DELETE FROM aws.bedrock_agent.flow_alias
WHERE flow_identifier = '{{ flow_identifier }}' --required
AND alias_identifier = '{{ alias_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
