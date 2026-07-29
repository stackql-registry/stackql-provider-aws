--- 
title: ai_guardrails
hide_title: false
hide_table_of_contents: false
keywords:
  - ai_guardrails
  - qconnect
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

Creates, updates, deletes, gets or lists an <code>ai_guardrails</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ai_guardrails" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qconnect.ai_guardrails" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ai_guardrail"
    values={[
        { label: 'get_ai_guardrail', value: 'get_ai_guardrail' },
        { label: 'list_ai_guardrails', value: 'list_ai_guardrails' }
    ]}
>
<TabItem value="get_ai_guardrail">

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
    <td><CopyableCode code="ai_guardrail" /></td>
    <td><code>object</code></td>
    <td>The data of the AI Guardrail.</td>
</tr>
<tr>
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the AI Guardrail version (returned if an AI Guardrail version was specified via use of a qualifier for the aiGuardrailId on the request).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ai_guardrails">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the AI Guardrail. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s_.,-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ai_guardrail_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the AI Guardrail. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ai_guardrail_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect AI Guardrail. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assistant_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;*?:wisdom:&#91;a-z0-9-&#93;*?:&#91;0-9&#93;&#123;12&#125;:&#91;a-z-&#93;*?/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;(?:/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#123;0,2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="assistant_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the guardrail or its version</td>
</tr>
<tr>
    <td><CopyableCode code="modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the AI Guardrail was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the AI Guardrail. (CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_IN_PROGRESS, DELETE_FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility_status" /></td>
    <td><code>string</code></td>
    <td>The visibility status of the AI Guardrail. (SAVED, PUBLISHED)</td>
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
    <td><a href="#get_ai_guardrail"><CopyableCode code="get_ai_guardrail" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-ai_guardrail_id"><code>ai_guardrail_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the Amazon Q in Connect AI Guardrail.</td>
</tr>
<tr>
    <td><a href="#list_ai_guardrails"><CopyableCode code="list_ai_guardrails" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the AI Guardrails available on the Amazon Q in Connect assistant.</td>
</tr>
<tr>
    <td><a href="#create_ai_guardrail"><CopyableCode code="create_ai_guardrail" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-blockedInputMessaging"><code>blockedInputMessaging</code></a>, <a href="#parameter-blockedOutputsMessaging"><code>blockedOutputsMessaging</code></a>, <a href="#parameter-visibilityStatus"><code>visibilityStatus</code></a></td>
    <td></td>
    <td>Creates an Amazon Q in Connect AI Guardrail.</td>
</tr>
<tr>
    <td><a href="#update_ai_guardrail"><CopyableCode code="update_ai_guardrail" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-ai_guardrail_id"><code>ai_guardrail_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-visibilityStatus"><code>visibilityStatus</code></a>, <a href="#parameter-blockedInputMessaging"><code>blockedInputMessaging</code></a>, <a href="#parameter-blockedOutputsMessaging"><code>blockedOutputsMessaging</code></a></td>
    <td></td>
    <td>Updates an AI Guardrail.</td>
</tr>
<tr>
    <td><a href="#delete_ai_guardrail"><CopyableCode code="delete_ai_guardrail" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-assistant_id"><code>assistant_id</code></a>, <a href="#parameter-ai_guardrail_id"><code>ai_guardrail_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Q in Connect AI Guardrail.</td>
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
<tr id="parameter-ai_guardrail_id">
    <td><CopyableCode code="ai_guardrail_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect AI Guardrail. Can be either the ID or the ARN. URLs cannot contain the ARN.</td>
</tr>
<tr id="parameter-assistant_id">
    <td><CopyableCode code="assistant_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ai_guardrail"
    values={[
        { label: 'get_ai_guardrail', value: 'get_ai_guardrail' },
        { label: 'list_ai_guardrails', value: 'list_ai_guardrails' }
    ]}
>
<TabItem value="get_ai_guardrail">

Gets the Amazon Q in Connect AI Guardrail.

```sql
SELECT
ai_guardrail,
version_number
FROM aws.qconnect.ai_guardrails
WHERE assistant_id = '{{ assistant_id }}' -- required
AND ai_guardrail_id = '{{ ai_guardrail_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ai_guardrails">

Lists the AI Guardrails available on the Amazon Q in Connect assistant.

```sql
SELECT
name,
ai_guardrail_arn,
ai_guardrail_id,
assistant_arn,
assistant_id,
description,
modified_time,
status,
tags,
visibility_status
FROM aws.qconnect.ai_guardrails
WHERE assistant_id = '{{ assistant_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ai_guardrail"
    values={[
        { label: 'create_ai_guardrail', value: 'create_ai_guardrail' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ai_guardrail">

Creates an Amazon Q in Connect AI Guardrail.

```sql
INSERT INTO aws.qconnect.ai_guardrails (
clientToken,
name,
blockedInputMessaging,
blockedOutputsMessaging,
visibilityStatus,
description,
topicPolicyConfig,
contentPolicyConfig,
wordPolicyConfig,
sensitiveInformationPolicyConfig,
contextualGroundingPolicyConfig,
tags,
assistant_id,
region
)
SELECT 
'{{ clientToken }}',
'{{ name }}' /* required */,
'{{ blockedInputMessaging }}' /* required */,
'{{ blockedOutputsMessaging }}' /* required */,
'{{ visibilityStatus }}' /* required */,
'{{ description }}',
'{{ topicPolicyConfig }}',
'{{ contentPolicyConfig }}',
'{{ wordPolicyConfig }}',
'{{ sensitiveInformationPolicyConfig }}',
'{{ contextualGroundingPolicyConfig }}',
'{{ tags }}',
'{{ assistant_id }}',
'{{ region }}'
RETURNING
ai_guardrail
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ai_guardrails
  props:
    - name: assistant_id
      value: "{{ assistant_id }}"
      description: Required parameter for the ai_guardrails resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ai_guardrails resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: name
      value: "{{ name }}"
    - name: blockedInputMessaging
      value: "{{ blockedInputMessaging }}"
      description: |
        Messaging for when violations are detected in text
    - name: blockedOutputsMessaging
      value: "{{ blockedOutputsMessaging }}"
      description: |
        Messaging for when violations are detected in text
    - name: visibilityStatus
      value: "{{ visibilityStatus }}"
      valid_values: ['SAVED', 'PUBLISHED']
    - name: description
      value: "{{ description }}"
      description: |
        Description of the guardrail or its version
    - name: topicPolicyConfig
      description: |
        Contains details about topics that the AI Guardrail should identify and deny.
      value:
        topicsConfig:
          - name: "{{ name }}"
            definition: "{{ definition }}"
            examples: "{{ examples }}"
            type_: "{{ type_ }}"
    - name: contentPolicyConfig
      description: |
        Contains details about how to handle harmful content.
      value:
        filtersConfig:
          - type_: "{{ type_ }}"
            inputStrength: "{{ inputStrength }}"
            outputStrength: "{{ outputStrength }}"
    - name: wordPolicyConfig
      description: |
        Contains details about the word policy to configured for the AI Guardrail.
      value:
        wordsConfig:
          - text: "{{ text }}"
        managedWordListsConfig:
          - type_: "{{ type_ }}"
    - name: sensitiveInformationPolicyConfig
      description: |
        Contains details about PII entities and regular expressions to configure for the AI Guardrail.
      value:
        piiEntitiesConfig:
          - type_: "{{ type_ }}"
            action: "{{ action }}"
        regexesConfig:
          - name: "{{ name }}"
            description: "{{ description }}"
            pattern_: "{{ pattern_ }}"
            action: "{{ action }}"
    - name: contextualGroundingPolicyConfig
      description: |
        The policy configuration details for the AI Guardrail's contextual grounding policy.
      value:
        filtersConfig:
          - type_: "{{ type_ }}"
            threshold: {{ threshold }}
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ai_guardrail"
    values={[
        { label: 'update_ai_guardrail', value: 'update_ai_guardrail' }
    ]}
>
<TabItem value="update_ai_guardrail">

Updates an AI Guardrail.

```sql
UPDATE aws.qconnect.ai_guardrails
SET 
clientToken = '{{ clientToken }}',
visibilityStatus = '{{ visibilityStatus }}',
blockedInputMessaging = '{{ blockedInputMessaging }}',
blockedOutputsMessaging = '{{ blockedOutputsMessaging }}',
description = '{{ description }}',
topicPolicyConfig = '{{ topicPolicyConfig }}',
contentPolicyConfig = '{{ contentPolicyConfig }}',
wordPolicyConfig = '{{ wordPolicyConfig }}',
sensitiveInformationPolicyConfig = '{{ sensitiveInformationPolicyConfig }}',
contextualGroundingPolicyConfig = '{{ contextualGroundingPolicyConfig }}'
WHERE 
assistant_id = '{{ assistant_id }}' --required
AND ai_guardrail_id = '{{ ai_guardrail_id }}' --required
AND region = '{{ region }}' --required
AND visibilityStatus = '{{ visibilityStatus }}' --required
AND blockedInputMessaging = '{{ blockedInputMessaging }}' --required
AND blockedOutputsMessaging = '{{ blockedOutputsMessaging }}' --required
RETURNING
ai_guardrail;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ai_guardrail"
    values={[
        { label: 'delete_ai_guardrail', value: 'delete_ai_guardrail' }
    ]}
>
<TabItem value="delete_ai_guardrail">

Deletes an Amazon Q in Connect AI Guardrail.

```sql
DELETE FROM aws.qconnect.ai_guardrails
WHERE assistant_id = '{{ assistant_id }}' --required
AND ai_guardrail_id = '{{ ai_guardrail_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
