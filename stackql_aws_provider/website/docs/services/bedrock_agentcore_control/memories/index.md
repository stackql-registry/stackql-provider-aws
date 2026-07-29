--- 
title: memories
hide_title: false
hide_table_of_contents: false
keywords:
  - memories
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

Creates, updates, deletes, gets or lists a <code>memories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="memories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.memories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_memory"
    values={[
        { label: 'get_memory', value: 'get_memory' },
        { label: 'list_memories', value: 'list_memories' }
    ]}
>
<TabItem value="get_memory">

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
    <td>The unique identifier of the memory. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the memory. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the memory. (pattern: &lt;code&gt;arn:aws:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:memory\/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the memory was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the memory.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the KMS key used to encrypt the memory. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_expiry_duration" /></td>
    <td><code>integer</code></td>
    <td>The number of days after which memory events will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for failure if the memory is in a failed state.</td>
</tr>
<tr>
    <td><CopyableCode code="indexed_keys" /></td>
    <td><code>array</code></td>
    <td>The indexed metadata keys for this memory. Only indexed keys can be used in metadata filters.</td>
</tr>
<tr>
    <td><CopyableCode code="memory_execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that provides permissions for the memory. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the memory. (CREATING, ACTIVE, FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="strategies" /></td>
    <td><code>array</code></td>
    <td>The list of memory strategies associated with this memory.</td>
</tr>
<tr>
    <td><CopyableCode code="stream_delivery_resources" /></td>
    <td><code>object</code></td>
    <td>Configuration for streaming memory record data to external resources.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the memory was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_memories">

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
    <td>The unique identifier of the memory. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the memory. (pattern: &lt;code&gt;arn:aws:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:memory\/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the memory was created.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the memory. (CREATING, ACTIVE, FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the memory was last updated.</td>
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
    <td><a href="#get_memory"><CopyableCode code="get_memory" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-memory_id"><code>memory_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-view"><code>view</code></a></td>
    <td>Retrieve an existing Amazon Bedrock AgentCore Memory resource.</td>
</tr>
<tr>
    <td><a href="#list_memories"><CopyableCode code="list_memories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the available Amazon Bedrock AgentCore Memory resources in the current Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#create_memory"><CopyableCode code="create_memory" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-eventExpiryDuration"><code>eventExpiryDuration</code></a></td>
    <td></td>
    <td>Creates a new Amazon Bedrock AgentCore Memory resource.</td>
</tr>
<tr>
    <td><a href="#update_memory"><CopyableCode code="update_memory" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-memory_id"><code>memory_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update an Amazon Bedrock AgentCore Memory resource memory.</td>
</tr>
<tr>
    <td><a href="#delete_memory"><CopyableCode code="delete_memory" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-memory_id"><code>memory_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes an Amazon Bedrock AgentCore Memory resource.</td>
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
<tr id="parameter-memory_id">
    <td><CopyableCode code="memory_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the memory to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A client token is used for keeping track of idempotent requests. It can contain a session id which can be around 250 chars, combined with a unique AWS identifier.</td>
</tr>
<tr id="parameter-view">
    <td><CopyableCode code="view" /></td>
    <td><code>string</code></td>
    <td>The level of detail to return for the memory.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_memory"
    values={[
        { label: 'get_memory', value: 'get_memory' },
        { label: 'list_memories', value: 'list_memories' }
    ]}
>
<TabItem value="get_memory">

Retrieve an existing Amazon Bedrock AgentCore Memory resource.

```sql
SELECT
id,
name,
arn,
created_at,
description,
encryption_key_arn,
event_expiry_duration,
failure_reason,
indexed_keys,
memory_execution_role_arn,
status,
strategies,
stream_delivery_resources,
updated_at
FROM aws.bedrock_agentcore_control.memories
WHERE memory_id = '{{ memory_id }}' -- required
AND region = '{{ region }}' -- required
AND view = '{{ view }}'
;
```
</TabItem>
<TabItem value="list_memories">

Lists the available Amazon Bedrock AgentCore Memory resources in the current Amazon Web Services Region.

```sql
SELECT
id,
arn,
created_at,
status,
updated_at
FROM aws.bedrock_agentcore_control.memories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_memory"
    values={[
        { label: 'create_memory', value: 'create_memory' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_memory">

Creates a new Amazon Bedrock AgentCore Memory resource.

```sql
INSERT INTO aws.bedrock_agentcore_control.memories (
clientToken,
name,
description,
encryptionKeyArn,
memoryExecutionRoleArn,
eventExpiryDuration,
memoryStrategies,
indexedKeys,
streamDeliveryResources,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ name }}' /* required */,
'{{ description }}',
'{{ encryptionKeyArn }}',
'{{ memoryExecutionRoleArn }}',
{{ eventExpiryDuration }} /* required */,
'{{ memoryStrategies }}',
'{{ indexedKeys }}',
'{{ streamDeliveryResources }}',
'{{ tags }}',
'{{ region }}'
RETURNING
memory
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: memories
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the memories resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: encryptionKeyArn
      value: "{{ encryptionKeyArn }}"
    - name: memoryExecutionRoleArn
      value: "{{ memoryExecutionRoleArn }}"
    - name: eventExpiryDuration
      value: {{ eventExpiryDuration }}
    - name: memoryStrategies
      value:
        - semanticMemoryStrategy:
            name: "{{ name }}"
            description: "{{ description }}"
            namespaces:
              - "{{ namespaces }}"
            namespaceTemplates:
              - "{{ namespaceTemplates }}"
            memoryRecordSchema:
              metadataSchema:
                - key: "{{ key }}"
                  type_: "{{ type_ }}"
                  extractionConfig:
                    llmExtractionConfig: "{{ llmExtractionConfig }}"
          summaryMemoryStrategy:
            name: "{{ name }}"
            description: "{{ description }}"
            namespaces:
              - "{{ namespaces }}"
            namespaceTemplates:
              - "{{ namespaceTemplates }}"
            memoryRecordSchema:
              metadataSchema:
                - key: "{{ key }}"
                  type_: "{{ type_ }}"
                  extractionConfig:
                    llmExtractionConfig: "{{ llmExtractionConfig }}"
          userPreferenceMemoryStrategy:
            name: "{{ name }}"
            description: "{{ description }}"
            namespaces:
              - "{{ namespaces }}"
            namespaceTemplates:
              - "{{ namespaceTemplates }}"
            memoryRecordSchema:
              metadataSchema:
                - key: "{{ key }}"
                  type_: "{{ type_ }}"
                  extractionConfig:
                    llmExtractionConfig: "{{ llmExtractionConfig }}"
          customMemoryStrategy:
            name: "{{ name }}"
            description: "{{ description }}"
            namespaces:
              - "{{ namespaces }}"
            namespaceTemplates:
              - "{{ namespaceTemplates }}"
            configuration:
              semanticOverride:
                extraction:
                  appendToPrompt: "{{ appendToPrompt }}"
                  modelId: "{{ modelId }}"
                consolidation:
                  appendToPrompt: "{{ appendToPrompt }}"
                  modelId: "{{ modelId }}"
              summaryOverride:
                consolidation:
                  appendToPrompt: "{{ appendToPrompt }}"
                  modelId: "{{ modelId }}"
              userPreferenceOverride:
                extraction:
                  appendToPrompt: "{{ appendToPrompt }}"
                  modelId: "{{ modelId }}"
                consolidation:
                  appendToPrompt: "{{ appendToPrompt }}"
                  modelId: "{{ modelId }}"
              episodicOverride:
                extraction:
                  appendToPrompt: "{{ appendToPrompt }}"
                  modelId: "{{ modelId }}"
                consolidation:
                  appendToPrompt: "{{ appendToPrompt }}"
                  modelId: "{{ modelId }}"
                reflection:
                  appendToPrompt: "{{ appendToPrompt }}"
                  modelId: "{{ modelId }}"
                  namespaces: "{{ namespaces }}"
                  namespaceTemplates: "{{ namespaceTemplates }}"
                  memoryRecordSchema: "{{ memoryRecordSchema }}"
              selfManagedConfiguration:
                triggerConditions:
                  - messageBasedTrigger:
                      messageCount: {{ messageCount }}
                    tokenBasedTrigger:
                      tokenCount: {{ tokenCount }}
                    timeBasedTrigger:
                      idleSessionTimeout: {{ idleSessionTimeout }}
                invocationConfiguration:
                  topicArn: "{{ topicArn }}"
                  payloadDeliveryBucketName: "{{ payloadDeliveryBucketName }}"
                historicalContextWindowSize: {{ historicalContextWindowSize }}
            memoryRecordSchema:
              metadataSchema:
                - key: "{{ key }}"
                  type_: "{{ type_ }}"
                  extractionConfig:
                    llmExtractionConfig: "{{ llmExtractionConfig }}"
          episodicMemoryStrategy:
            name: "{{ name }}"
            description: "{{ description }}"
            namespaces:
              - "{{ namespaces }}"
            namespaceTemplates:
              - "{{ namespaceTemplates }}"
            reflectionConfiguration:
              namespaces:
                - "{{ namespaces }}"
              namespaceTemplates:
                - "{{ namespaceTemplates }}"
              memoryRecordSchema:
                metadataSchema:
                  - key: "{{ key }}"
                    type_: "{{ type_ }}"
                    extractionConfig:
                      llmExtractionConfig: "{{ llmExtractionConfig }}"
            memoryRecordSchema:
              metadataSchema:
                - key: "{{ key }}"
                  type_: "{{ type_ }}"
                  extractionConfig:
                    llmExtractionConfig: "{{ llmExtractionConfig }}"
    - name: indexedKeys
      value:
        - key: "{{ key }}"
          type_: "{{ type_ }}"
    - name: streamDeliveryResources
      description: |
        Configuration for streaming memory record data to external resources.
      value:
        resources:
          - kinesis:
              dataStreamArn: "{{ dataStreamArn }}"
              contentConfigurations:
                - type_: "{{ type_ }}"
                  level: "{{ level }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_memory"
    values={[
        { label: 'update_memory', value: 'update_memory' }
    ]}
>
<TabItem value="update_memory">

Update an Amazon Bedrock AgentCore Memory resource memory.

```sql
UPDATE aws.bedrock_agentcore_control.memories
SET 
clientToken = '{{ clientToken }}',
description = '{{ description }}',
eventExpiryDuration = {{ eventExpiryDuration }},
memoryExecutionRoleArn = '{{ memoryExecutionRoleArn }}',
memoryStrategies = '{{ memoryStrategies }}',
addIndexedKeys = '{{ addIndexedKeys }}',
streamDeliveryResources = '{{ streamDeliveryResources }}'
WHERE 
memory_id = '{{ memory_id }}' --required
AND region = '{{ region }}' --required
RETURNING
memory;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_memory"
    values={[
        { label: 'delete_memory', value: 'delete_memory' }
    ]}
>
<TabItem value="delete_memory">

Deletes an Amazon Bedrock AgentCore Memory resource.

```sql
DELETE FROM aws.bedrock_agentcore_control.memories
WHERE memory_id = '{{ memory_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
