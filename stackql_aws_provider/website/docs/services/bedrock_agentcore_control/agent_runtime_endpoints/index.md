--- 
title: agent_runtime_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_runtime_endpoints
  - bedrock_agentcore_control
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

Creates, updates, deletes, gets or lists an <code>agent_runtime_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_runtime_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.agent_runtime_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agent_runtime_endpoint"
    values={[
        { label: 'get_agent_runtime_endpoint', value: 'get_agent_runtime_endpoint' },
        { label: 'list_agent_runtime_endpoints', value: 'list_agent_runtime_endpoints' }
    ]}
>
<TabItem value="get_agent_runtime_endpoint">

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
    <td>The unique identifier of the AgentCore Runtime endpoint. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the AgentCore Runtime endpoint. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_runtime_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the AgentCore Runtime. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:runtime/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_runtime_endpoint_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the AgentCore Runtime endpoint. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:runtime/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;/runtime-endpoint/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the AgentCore Runtime endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the AgentCore Runtime endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for failure if the AgentCore Runtime endpoint is in a failed state.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the AgentCore Runtime endpoint was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="live_version" /></td>
    <td><code>string</code></td>
    <td>The currently deployed version of the AgentCore Runtime on the endpoint. (pattern: &lt;code&gt;(&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the AgentCore Runtime endpoint. (CREATING, CREATE_FAILED, UPDATING, UPDATE_FAILED, READY, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="target_version" /></td>
    <td><code>string</code></td>
    <td>The target version of the AgentCore Runtime for the endpoint. (pattern: &lt;code&gt;(&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agent_runtime_endpoints">

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
    <td>The unique identifier of the agent runtime endpoint. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the agent runtime endpoint. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_runtime_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the agent runtime associated with the endpoint. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:runtime/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_runtime_endpoint_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the agent runtime endpoint. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:runtime/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;/runtime-endpoint/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the agent runtime endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the agent runtime endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the agent runtime endpoint was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="live_version" /></td>
    <td><code>string</code></td>
    <td>The live version of the agent runtime endpoint. This is the version that is currently serving requests. (pattern: &lt;code&gt;(&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the agent runtime endpoint. (CREATING, CREATE_FAILED, UPDATING, UPDATE_FAILED, READY, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="target_version" /></td>
    <td><code>string</code></td>
    <td>The target version of the agent runtime endpoint. This is the version that the endpoint is being updated to. (pattern: &lt;code&gt;(&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
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
    <td><a href="#get_agent_runtime_endpoint"><CopyableCode code="get_agent_runtime_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_runtime_id"><code>agent_runtime_id</code></a>, <a href="#parameter-endpoint_name"><code>endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an Amazon Secure AgentEndpoint.</td>
</tr>
<tr>
    <td><a href="#list_agent_runtime_endpoints"><CopyableCode code="list_agent_runtime_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_runtime_id"><code>agent_runtime_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all endpoints for a specific Amazon Secure Agent.</td>
</tr>
<tr>
    <td><a href="#create_agent_runtime_endpoint"><CopyableCode code="create_agent_runtime_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-agent_runtime_id"><code>agent_runtime_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates an AgentCore Runtime endpoint.</td>
</tr>
<tr>
    <td><a href="#update_agent_runtime_endpoint"><CopyableCode code="update_agent_runtime_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_runtime_id"><code>agent_runtime_id</code></a>, <a href="#parameter-endpoint_name"><code>endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing Amazon Bedrock AgentCore Runtime endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_agent_runtime_endpoint"><CopyableCode code="delete_agent_runtime_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_runtime_id"><code>agent_runtime_id</code></a>, <a href="#parameter-endpoint_name"><code>endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes an AgentCore Runtime endpoint.</td>
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
<tr id="parameter-agent_runtime_id">
    <td><CopyableCode code="agent_runtime_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the AgentCore Runtime associated with the endpoint.</td>
</tr>
<tr id="parameter-endpoint_name">
    <td><CopyableCode code="endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name of the AgentCore Runtime endpoint to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure idempotency of the request.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_agent_runtime_endpoint"
    values={[
        { label: 'get_agent_runtime_endpoint', value: 'get_agent_runtime_endpoint' },
        { label: 'list_agent_runtime_endpoints', value: 'list_agent_runtime_endpoints' }
    ]}
>
<TabItem value="get_agent_runtime_endpoint">

Gets information about an Amazon Secure AgentEndpoint.

```sql
SELECT
id,
name,
agent_runtime_arn,
agent_runtime_endpoint_arn,
created_at,
description,
failure_reason,
last_updated_at,
live_version,
status,
target_version
FROM aws.bedrock_agentcore_control.agent_runtime_endpoints
WHERE agent_runtime_id = '{{ agent_runtime_id }}' -- required
AND endpoint_name = '{{ endpoint_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_agent_runtime_endpoints">

Lists all endpoints for a specific Amazon Secure Agent.

```sql
SELECT
id,
name,
agent_runtime_arn,
agent_runtime_endpoint_arn,
created_at,
description,
last_updated_at,
live_version,
status,
target_version
FROM aws.bedrock_agentcore_control.agent_runtime_endpoints
WHERE agent_runtime_id = '{{ agent_runtime_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_agent_runtime_endpoint"
    values={[
        { label: 'create_agent_runtime_endpoint', value: 'create_agent_runtime_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_agent_runtime_endpoint">

Creates an AgentCore Runtime endpoint.

```sql
INSERT INTO aws.bedrock_agentcore_control.agent_runtime_endpoints (
name,
agentRuntimeVersion,
description,
clientToken,
tags,
agent_runtime_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ agentRuntimeVersion }}',
'{{ description }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ agent_runtime_id }}',
'{{ region }}'
RETURNING
agent_runtime_arn,
agent_runtime_endpoint_arn,
agent_runtime_id,
created_at,
endpoint_name,
status,
target_version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agent_runtime_endpoints
  props:
    - name: agent_runtime_id
      value: "{{ agent_runtime_id }}"
      description: Required parameter for the agent_runtime_endpoints resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the agent_runtime_endpoints resource.
    - name: name
      value: "{{ name }}"
    - name: agentRuntimeVersion
      value: "{{ agentRuntimeVersion }}"
    - name: description
      value: "{{ description }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_agent_runtime_endpoint"
    values={[
        { label: 'update_agent_runtime_endpoint', value: 'update_agent_runtime_endpoint' }
    ]}
>
<TabItem value="update_agent_runtime_endpoint">

Updates an existing Amazon Bedrock AgentCore Runtime endpoint.

```sql
UPDATE aws.bedrock_agentcore_control.agent_runtime_endpoints
SET 
agentRuntimeVersion = '{{ agentRuntimeVersion }}',
description = '{{ description }}',
clientToken = '{{ clientToken }}'
WHERE 
agent_runtime_id = '{{ agent_runtime_id }}' --required
AND endpoint_name = '{{ endpoint_name }}' --required
AND region = '{{ region }}' --required
RETURNING
agent_runtime_arn,
agent_runtime_endpoint_arn,
created_at,
last_updated_at,
live_version,
status,
target_version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_agent_runtime_endpoint"
    values={[
        { label: 'delete_agent_runtime_endpoint', value: 'delete_agent_runtime_endpoint' }
    ]}
>
<TabItem value="delete_agent_runtime_endpoint">

Deletes an AgentCore Runtime endpoint.

```sql
DELETE FROM aws.bedrock_agentcore_control.agent_runtime_endpoints
WHERE agent_runtime_id = '{{ agent_runtime_id }}' --required
AND endpoint_name = '{{ endpoint_name }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
