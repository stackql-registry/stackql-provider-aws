--- 
title: agent_action_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - agent_action_groups
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

Creates, updates, deletes, gets or lists an <code>agent_action_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agent_action_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent.agent_action_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_agent_action_group"
    values={[
        { label: 'get_agent_action_group', value: 'get_agent_action_group' },
        { label: 'list_agent_action_groups', value: 'list_agent_action_groups' }
    ]}
>
<TabItem value="get_agent_action_group">

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
    <td><CopyableCode code="action_group_executor" /></td>
    <td><code>object</code></td>
    <td>Contains details about the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user.</td>
</tr>
<tr>
    <td><CopyableCode code="action_group_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the action group. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the action group. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action_group_state" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the action group is available for the agent to invoke or not when sending an InvokeAgent request. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent to which the action group belongs. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="agent_version" /></td>
    <td><code>string</code></td>
    <td>The version of the agent to which the action group belongs. (pattern: &lt;code&gt;(DRAFT|&#91;0-9&#93;&#123;0,4&#125;&#91;1-9&#93;&#91;0-9&#93;&#123;0,4&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="api_schema" /></td>
    <td><code>object</code></td>
    <td>Contains details about the OpenAPI schema for the action group. For more information, see Action group OpenAPI schemas. You can either include the schema directly in the payload field or you can upload it to an S3 bucket and specify the S3 bucket location in the s3 field.</td>
</tr>
<tr>
    <td><CopyableCode code="client_token" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,256&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the action group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the action group.</td>
</tr>
<tr>
    <td><CopyableCode code="function_schema" /></td>
    <td><code>object</code></td>
    <td>Defines functions that each define parameters that the agent needs to invoke from the user. Each function represents an action in an action group. This data type is used in the following API operations: CreateAgentActionGroup request CreateAgentActionGroup response UpdateAgentActionGroup request UpdateAgentActionGroup response GetAgentActionGroup response</td>
</tr>
<tr>
    <td><CopyableCode code="parent_action_group_signature_params" /></td>
    <td><code>object</code></td>
    <td>The configuration settings for a computer use action. Computer use is a new Anthropic Claude model capability (in beta) available with Claude 3.7 Sonnet and Claude 3.5 Sonnet v2 only. For more information, see Configure an Amazon Bedrock Agent to complete tasks with computer use tools.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_action_signature" /></td>
    <td><code>string</code></td>
    <td>If this field is set as AMAZON.UserInput, the agent can request the user for additional information when trying to complete a task. The description, apiSchema, and actionGroupExecutor fields must be blank for this action group. During orchestration, if the agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an Observation reprompting the user for more information. (AMAZON.UserInput, AMAZON.CodeInterpreter, ANTHROPIC.Computer, ANTHROPIC.Bash, ANTHROPIC.TextEditor)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the action group was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_agent_action_groups">

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
    <td><CopyableCode code="action_group_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the action group. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the action group. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action_group_state" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the action group is available for the agent to invoke or not when sending an InvokeAgent request. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the action group.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the action group was last updated.</td>
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
    <td><a href="#get_agent_action_group"><CopyableCode code="get_agent_action_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_version"><code>agent_version</code></a>, <a href="#parameter-action_group_id"><code>action_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an action group for an agent.</td>
</tr>
<tr>
    <td><a href="#list_agent_action_groups"><CopyableCode code="list_agent_action_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_version"><code>agent_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the action groups for an agent and information about each one.</td>
</tr>
<tr>
    <td><a href="#create_agent_action_group"><CopyableCode code="create_agent_action_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_version"><code>agent_version</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-actionGroupName"><code>actionGroupName</code></a></td>
    <td></td>
    <td>Creates an action group for an agent. An action group represents the actions that an agent can carry out for the customer by defining the APIs that an agent can call and the logic for calling them. To allow your agent to request the user for additional information when trying to complete a task, add an action group with the parentActionGroupSignature field set to AMAZON.UserInput. To allow your agent to generate, run, and troubleshoot code when trying to complete a task, add an action group with the parentActionGroupSignature field set to AMAZON.CodeInterpreter. You must leave the description, apiSchema, and actionGroupExecutor fields blank for this action group. During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an Observation reprompting the user for more information.</td>
</tr>
<tr>
    <td><a href="#update_agent_action_group"><CopyableCode code="update_agent_action_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_version"><code>agent_version</code></a>, <a href="#parameter-action_group_id"><code>action_group_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-actionGroupName"><code>actionGroupName</code></a></td>
    <td></td>
    <td>Updates the configuration for an action group for an agent.</td>
</tr>
<tr>
    <td><a href="#delete_agent_action_group"><CopyableCode code="delete_agent_action_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-agent_version"><code>agent_version</code></a>, <a href="#parameter-action_group_id"><code>action_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-skipResourceInUseCheck"><code>skipResourceInUseCheck</code></a></td>
    <td>Deletes an action group in an agent.</td>
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
<tr id="parameter-action_group_id">
    <td><CopyableCode code="action_group_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the action group to delete.</td>
</tr>
<tr id="parameter-agent_id">
    <td><CopyableCode code="agent_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent that the action group belongs to.</td>
</tr>
<tr id="parameter-agent_version">
    <td><CopyableCode code="agent_version" /></td>
    <td><code>string</code></td>
    <td>The version of the agent that the action group belongs to.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-skipResourceInUseCheck">
    <td><CopyableCode code="skipResourceInUseCheck" /></td>
    <td><code>boolean</code></td>
    <td>By default, this value is false and deletion is stopped if the resource is in use. If you set it to true, the resource will be deleted even if the resource is in use.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_agent_action_group"
    values={[
        { label: 'get_agent_action_group', value: 'get_agent_action_group' },
        { label: 'list_agent_action_groups', value: 'list_agent_action_groups' }
    ]}
>
<TabItem value="get_agent_action_group">

Gets information about an action group for an agent.

```sql
SELECT
action_group_executor,
action_group_id,
action_group_name,
action_group_state,
agent_id,
agent_version,
api_schema,
client_token,
created_at,
description,
function_schema,
parent_action_group_signature_params,
parent_action_signature,
updated_at
FROM aws.bedrock_agent.agent_action_groups
WHERE agent_id = '{{ agent_id }}' -- required
AND agent_version = '{{ agent_version }}' -- required
AND action_group_id = '{{ action_group_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_agent_action_groups">

Lists the action groups for an agent and information about each one.

```sql
SELECT
action_group_id,
action_group_name,
action_group_state,
description,
updated_at
FROM aws.bedrock_agent.agent_action_groups
WHERE agent_id = '{{ agent_id }}' -- required
AND agent_version = '{{ agent_version }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_agent_action_group"
    values={[
        { label: 'create_agent_action_group', value: 'create_agent_action_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_agent_action_group">

Creates an action group for an agent. An action group represents the actions that an agent can carry out for the customer by defining the APIs that an agent can call and the logic for calling them. To allow your agent to request the user for additional information when trying to complete a task, add an action group with the parentActionGroupSignature field set to AMAZON.UserInput. To allow your agent to generate, run, and troubleshoot code when trying to complete a task, add an action group with the parentActionGroupSignature field set to AMAZON.CodeInterpreter. You must leave the description, apiSchema, and actionGroupExecutor fields blank for this action group. During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an Observation reprompting the user for more information.

```sql
INSERT INTO aws.bedrock_agent.agent_action_groups (
actionGroupName,
clientToken,
description,
parentActionGroupSignature,
parentActionGroupSignatureParams,
actionGroupExecutor,
apiSchema,
actionGroupState,
functionSchema,
agent_id,
agent_version,
region
)
SELECT 
'{{ actionGroupName }}' /* required */,
'{{ clientToken }}',
'{{ description }}',
'{{ parentActionGroupSignature }}',
'{{ parentActionGroupSignatureParams }}',
'{{ actionGroupExecutor }}',
'{{ apiSchema }}',
'{{ actionGroupState }}',
'{{ functionSchema }}',
'{{ agent_id }}',
'{{ agent_version }}',
'{{ region }}'
RETURNING
agent_action_group
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: agent_action_groups
  props:
    - name: agent_id
      value: "{{ agent_id }}"
      description: Required parameter for the agent_action_groups resource.
    - name: agent_version
      value: "{{ agent_version }}"
      description: Required parameter for the agent_action_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the agent_action_groups resource.
    - name: actionGroupName
      value: "{{ actionGroupName }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: description
      value: "{{ description }}"
    - name: parentActionGroupSignature
      value: "{{ parentActionGroupSignature }}"
      valid_values: ['AMAZON.UserInput', 'AMAZON.CodeInterpreter', 'ANTHROPIC.Computer', 'ANTHROPIC.Bash', 'ANTHROPIC.TextEditor']
    - name: parentActionGroupSignatureParams
      value: "{{ parentActionGroupSignatureParams }}"
    - name: actionGroupExecutor
      description: |
        Contains details about the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user.
      value:
        lambda: "{{ lambda }}"
        customControl: "{{ customControl }}"
    - name: apiSchema
      description: |
        Contains details about the OpenAPI schema for the action group. For more information, see Action group OpenAPI schemas. You can either include the schema directly in the payload field or you can upload it to an S3 bucket and specify the S3 bucket location in the s3 field.
      value:
        s3:
          s3BucketName: "{{ s3BucketName }}"
          s3ObjectKey: "{{ s3ObjectKey }}"
        payload: "{{ payload }}"
    - name: actionGroupState
      value: "{{ actionGroupState }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: functionSchema
      description: |
        Defines functions that each define parameters that the agent needs to invoke from the user. Each function represents an action in an action group. This data type is used in the following API operations: CreateAgentActionGroup request CreateAgentActionGroup response UpdateAgentActionGroup request UpdateAgentActionGroup response GetAgentActionGroup response
      value:
        functions:
          - name: "{{ name }}"
            description: "{{ description }}"
            parameters: "{{ parameters }}"
            requireConfirmation: "{{ requireConfirmation }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_agent_action_group"
    values={[
        { label: 'update_agent_action_group', value: 'update_agent_action_group' }
    ]}
>
<TabItem value="update_agent_action_group">

Updates the configuration for an action group for an agent.

```sql
UPDATE aws.bedrock_agent.agent_action_groups
SET 
actionGroupName = '{{ actionGroupName }}',
description = '{{ description }}',
parentActionGroupSignature = '{{ parentActionGroupSignature }}',
parentActionGroupSignatureParams = '{{ parentActionGroupSignatureParams }}',
actionGroupExecutor = '{{ actionGroupExecutor }}',
actionGroupState = '{{ actionGroupState }}',
apiSchema = '{{ apiSchema }}',
functionSchema = '{{ functionSchema }}'
WHERE 
agent_id = '{{ agent_id }}' --required
AND agent_version = '{{ agent_version }}' --required
AND action_group_id = '{{ action_group_id }}' --required
AND region = '{{ region }}' --required
AND actionGroupName = '{{ actionGroupName }}' --required
RETURNING
agent_action_group;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_agent_action_group"
    values={[
        { label: 'delete_agent_action_group', value: 'delete_agent_action_group' }
    ]}
>
<TabItem value="delete_agent_action_group">

Deletes an action group in an agent.

```sql
DELETE FROM aws.bedrock_agent.agent_action_groups
WHERE agent_id = '{{ agent_id }}' --required
AND agent_version = '{{ agent_version }}' --required
AND action_group_id = '{{ action_group_id }}' --required
AND region = '{{ region }}' --required
AND skipResourceInUseCheck = '{{ skipResourceInUseCheck }}'
;
```
</TabItem>
</Tabs>
