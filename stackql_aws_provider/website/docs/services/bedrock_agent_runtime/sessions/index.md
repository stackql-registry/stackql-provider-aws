--- 
title: sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - sessions
  - bedrock_agent_runtime
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

Creates, updates, deletes, gets or lists a <code>sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent_runtime.sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_session"
    values={[
        { label: 'get_session', value: 'get_session' },
        { label: 'list_sessions', value: 'list_sessions' }
    ]}
>
<TabItem value="get_session">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Key Management Service key used to encrypt the session data. For more information, see Amazon Bedrock session encryption. (pattern: &lt;code&gt;^arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the session was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="session_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the session. (pattern: &lt;code&gt;^arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:session/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the session in UUID format. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="session_metadata" /></td>
    <td><code>object</code></td>
    <td>A map of key-value pairs containing attributes persisted across the session.</td>
</tr>
<tr>
    <td><CopyableCode code="session_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the session. (ACTIVE, EXPIRED, ENDED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_sessions">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the session was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the session was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="session_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the session. (pattern: &lt;code&gt;^arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:session/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the session. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="session_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the session. (ACTIVE, EXPIRED, ENDED)</td>
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
    <td><a href="#get_session"><CopyableCode code="get_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-session_identifier"><code>session_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a specific session. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.</td>
</tr>
<tr>
    <td><a href="#list_sessions"><CopyableCode code="list_sessions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all sessions in your Amazon Web Services account. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.</td>
</tr>
<tr>
    <td><a href="#create_session"><CopyableCode code="create_session" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a session to temporarily store conversations for generative AI (GenAI) applications built with open-source frameworks such as LangGraph and LlamaIndex. Sessions enable you to save the state of conversations at checkpoints, with the added security and infrastructure of Amazon Web Services. For more information, see Store and retrieve conversation history and context with Amazon Bedrock sessions. By default, Amazon Bedrock uses Amazon Web Services-managed keys for session encryption, including session metadata, or you can use your own KMS key. For more information, see Amazon Bedrock session encryption. You use a session to store state and conversation history for generative AI applications built with open-source frameworks. For Amazon Bedrock Agents, the service automatically manages conversation context and associates them with the agent-specific sessionId you specify in the InvokeAgent API operation. Related APIs: ListSessions GetSession EndSession DeleteSession</td>
</tr>
<tr>
    <td><a href="#update_session"><CopyableCode code="update_session" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-session_identifier"><code>session_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the metadata or encryption settings of a session. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.</td>
</tr>
<tr>
    <td><a href="#delete_session"><CopyableCode code="delete_session" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-session_identifier"><code>session_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a session that you ended. You can't delete a session with an ACTIVE status. To delete an active session, you must first end it with the EndSession API operation. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.</td>
</tr>
<tr>
    <td><a href="#end_session"><CopyableCode code="end_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-session_identifier"><code>session_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Ends the session. After you end a session, you can still access its content but you can’t add to it. To delete the session and it's content, you use the DeleteSession API operation. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.</td>
</tr>
<tr>
    <td><a href="#invoke_agent"><CopyableCode code="invoke_agent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agent_alias_id"><code>agent_alias_id</code></a>, <a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-source-arn"><code>x-amz-source-arn</code></a></td>
    <td>Sends a prompt for the agent to process and respond to. Note the following fields for the request: To continue the same conversation with an agent, use the same sessionId value in the request. To activate trace enablement, turn enableTrace to true. Trace enablement helps you follow the agent's reasoning process that led it to the information it processed, the actions it took, and the final result it yielded. For more information, see Trace enablement. End a conversation by setting endSession to true. In the sessionState object, you can include attributes for the session or prompt or, if you configured an action group to return control, results from invocation of the action group. The response contains both chunk and trace attributes. The final response is returned in the bytes field of the chunk object. The InvokeAgent returns one chunk for the entire interaction. The attribution object contains citations for parts of the response. If you set enableTrace to true in the request, you can trace the agent's steps and reasoning process that led it to the response. If the action predicted was configured to return control, the response returns parameters for the action, elicited from the user, in the returnControl field. Errors are also surfaced in the response.</td>
</tr>
<tr>
    <td><a href="#invoke_inline_agent"><CopyableCode code="invoke_inline_agent" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-foundationModel"><code>foundationModel</code></a>, <a href="#parameter-instruction"><code>instruction</code></a></td>
    <td></td>
    <td>Invokes an inline Amazon Bedrock agent using the configurations you provide with the request. Specify the following fields for security purposes. (Optional) customerEncryptionKeyArn – The Amazon Resource Name (ARN) of a KMS key to encrypt the creation of the agent. (Optional) idleSessionTTLinSeconds – Specify the number of seconds for which the agent should maintain session information. After this time expires, the subsequent InvokeInlineAgent request begins a new session. To override the default prompt behavior for agent orchestration and to use advanced prompts, include a promptOverrideConfiguration object. For more information, see Advanced prompts. The agent instructions will not be honored if your agent has only one knowledge base, uses default prompts, has no action group, and user input is disabled.</td>
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
<tr id="parameter-agent_alias_id">
    <td><CopyableCode code="agent_alias_id" /></td>
    <td><code>string</code></td>
    <td>The alias of the agent to use.</td>
</tr>
<tr id="parameter-agent_id">
    <td><CopyableCode code="agent_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the agent to use.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the session. Use the same value across requests to continue the same conversation.</td>
</tr>
<tr id="parameter-session_identifier">
    <td><CopyableCode code="session_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the session to end. You can specify either the session's sessionId or its Amazon Resource Name (ARN).</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
<tr id="parameter-x-amz-source-arn">
    <td><CopyableCode code="x-amz-source-arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the resource making the request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_session"
    values={[
        { label: 'get_session', value: 'get_session' },
        { label: 'list_sessions', value: 'list_sessions' }
    ]}
>
<TabItem value="get_session">

Retrieves details about a specific session. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.

```sql
SELECT
created_at,
encryption_key_arn,
last_updated_at,
session_arn,
session_id,
session_metadata,
session_status
FROM aws.bedrock_agent_runtime.sessions
WHERE session_identifier = '{{ session_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_sessions">

Lists all sessions in your Amazon Web Services account. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.

```sql
SELECT
created_at,
last_updated_at,
session_arn,
session_id,
session_status
FROM aws.bedrock_agent_runtime.sessions
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_session"
    values={[
        { label: 'create_session', value: 'create_session' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_session">

Creates a session to temporarily store conversations for generative AI (GenAI) applications built with open-source frameworks such as LangGraph and LlamaIndex. Sessions enable you to save the state of conversations at checkpoints, with the added security and infrastructure of Amazon Web Services. For more information, see Store and retrieve conversation history and context with Amazon Bedrock sessions. By default, Amazon Bedrock uses Amazon Web Services-managed keys for session encryption, including session metadata, or you can use your own KMS key. For more information, see Amazon Bedrock session encryption. You use a session to store state and conversation history for generative AI applications built with open-source frameworks. For Amazon Bedrock Agents, the service automatically manages conversation context and associates them with the agent-specific sessionId you specify in the InvokeAgent API operation. Related APIs: ListSessions GetSession EndSession DeleteSession

```sql
INSERT INTO aws.bedrock_agent_runtime.sessions (
encryptionKeyArn,
sessionMetadata,
tags,
region
)
SELECT 
'{{ encryptionKeyArn }}',
'{{ sessionMetadata }}',
'{{ tags }}',
'{{ region }}'
RETURNING
created_at,
session_arn,
session_id,
session_status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: sessions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the sessions resource.
    - name: encryptionKeyArn
      value: "{{ encryptionKeyArn }}"
    - name: sessionMetadata
      value: "{{ sessionMetadata }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        A map of tag keys and values
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_session"
    values={[
        { label: 'update_session', value: 'update_session' }
    ]}
>
<TabItem value="update_session">

Updates the metadata or encryption settings of a session. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.

```sql
UPDATE aws.bedrock_agent_runtime.sessions
SET 
sessionMetadata = '{{ sessionMetadata }}'
WHERE 
session_identifier = '{{ session_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
created_at,
last_updated_at,
session_arn,
session_id,
session_status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_session"
    values={[
        { label: 'delete_session', value: 'delete_session' }
    ]}
>
<TabItem value="delete_session">

Deletes a session that you ended. You can't delete a session with an ACTIVE status. To delete an active session, you must first end it with the EndSession API operation. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.

```sql
DELETE FROM aws.bedrock_agent_runtime.sessions
WHERE session_identifier = '{{ session_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="end_session"
    values={[
        { label: 'end_session', value: 'end_session' },
        { label: 'invoke_agent', value: 'invoke_agent' },
        { label: 'invoke_inline_agent', value: 'invoke_inline_agent' }
    ]}
>
<TabItem value="end_session">

Ends the session. After you end a session, you can still access its content but you can’t add to it. To delete the session and it's content, you use the DeleteSession API operation. For more information about sessions, see Store and retrieve conversation history and context with Amazon Bedrock sessions.

```sql
EXEC aws.bedrock_agent_runtime.sessions.end_session 
@session_identifier='{{ session_identifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="invoke_agent">

Sends a prompt for the agent to process and respond to. Note the following fields for the request: To continue the same conversation with an agent, use the same sessionId value in the request. To activate trace enablement, turn enableTrace to true. Trace enablement helps you follow the agent's reasoning process that led it to the information it processed, the actions it took, and the final result it yielded. For more information, see Trace enablement. End a conversation by setting endSession to true. In the sessionState object, you can include attributes for the session or prompt or, if you configured an action group to return control, results from invocation of the action group. The response contains both chunk and trace attributes. The final response is returned in the bytes field of the chunk object. The InvokeAgent returns one chunk for the entire interaction. The attribution object contains citations for parts of the response. If you set enableTrace to true in the request, you can trace the agent's steps and reasoning process that led it to the response. If the action predicted was configured to return control, the response returns parameters for the action, elicited from the user, in the returnControl field. Errors are also surfaced in the response.

```sql
EXEC aws.bedrock_agent_runtime.sessions.invoke_agent 
@agent_alias_id='{{ agent_alias_id }}' --required, 
@agent_id='{{ agent_id }}' --required, 
@session_id='{{ session_id }}' --required, 
@region='{{ region }}' --required, 
@x-amz-source-arn='{{ x-amz-source-arn }}' 
@@json=
'{
"bedrockModelConfigurations": "{{ bedrockModelConfigurations }}", 
"enableTrace": {{ enableTrace }}, 
"endSession": {{ endSession }}, 
"inputText": "{{ inputText }}", 
"memoryId": "{{ memoryId }}", 
"promptCreationConfigurations": "{{ promptCreationConfigurations }}", 
"sessionState": "{{ sessionState }}", 
"streamingConfigurations": "{{ streamingConfigurations }}"
}'
;
```
</TabItem>
<TabItem value="invoke_inline_agent">

Invokes an inline Amazon Bedrock agent using the configurations you provide with the request. Specify the following fields for security purposes. (Optional) customerEncryptionKeyArn – The Amazon Resource Name (ARN) of a KMS key to encrypt the creation of the agent. (Optional) idleSessionTTLinSeconds – Specify the number of seconds for which the agent should maintain session information. After this time expires, the subsequent InvokeInlineAgent request begins a new session. To override the default prompt behavior for agent orchestration and to use advanced prompts, include a promptOverrideConfiguration object. For more information, see Advanced prompts. The agent instructions will not be honored if your agent has only one knowledge base, uses default prompts, has no action group, and user input is disabled.

```sql
EXEC aws.bedrock_agent_runtime.sessions.invoke_inline_agent 
@session_id='{{ session_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"actionGroups": "{{ actionGroups }}", 
"agentCollaboration": "{{ agentCollaboration }}", 
"agentName": "{{ agentName }}", 
"bedrockModelConfigurations": "{{ bedrockModelConfigurations }}", 
"collaboratorConfigurations": "{{ collaboratorConfigurations }}", 
"collaborators": "{{ collaborators }}", 
"customOrchestration": "{{ customOrchestration }}", 
"customerEncryptionKeyArn": "{{ customerEncryptionKeyArn }}", 
"enableTrace": {{ enableTrace }}, 
"endSession": {{ endSession }}, 
"foundationModel": "{{ foundationModel }}", 
"guardrailConfiguration": "{{ guardrailConfiguration }}", 
"idleSessionTTLInSeconds": {{ idleSessionTTLInSeconds }}, 
"inlineSessionState": "{{ inlineSessionState }}", 
"inputText": "{{ inputText }}", 
"instruction": "{{ instruction }}", 
"knowledgeBases": "{{ knowledgeBases }}", 
"orchestrationType": "{{ orchestrationType }}", 
"promptCreationConfigurations": "{{ promptCreationConfigurations }}", 
"promptOverrideConfiguration": "{{ promptOverrideConfiguration }}", 
"streamingConfigurations": "{{ streamingConfigurations }}"
}'
;
```
</TabItem>
</Tabs>
