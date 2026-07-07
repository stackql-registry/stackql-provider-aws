--- 
title: evaluators
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluators
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

Creates, updates, deletes, gets or lists an <code>evaluators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evaluators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.evaluators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_evaluator"
    values={[
        { label: 'get_evaluator', value: 'get_evaluator' },
        { label: 'list_evaluators', value: 'list_evaluators' }
    ]}
>
<TabItem value="get_evaluator">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the evaluator was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the evaluator.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluatorArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the evaluator. (pattern: &lt;code&gt;arn:aws:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:evaluator\/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;$|^arn:aws:bedrock-agentcore:::evaluator/Builtin.&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluatorConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration that defines how an evaluator assesses agent performance, including the evaluation method and parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluatorId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the evaluator. (pattern: &lt;code&gt;(Builtin.&#91;a-zA-Z0-9_-&#93;+|&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluatorName" /></td>
    <td><code>string</code></td>
    <td>The name of the evaluator. (pattern: &lt;code&gt;(Builtin.&#91;a-zA-Z0-9_-&#93;+|&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the customer managed KMS key used to encrypt the evaluator's sensitive data. This field is only present for evaluators encrypted with a customer managed key. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="level" /></td>
    <td><code>string</code></td>
    <td>The evaluation level (TOOL_CALL, TRACE, or SESSION) that determines the scope of evaluation. (TOOL_CALL, TRACE, SESSION)</td>
</tr>
<tr>
    <td><CopyableCode code="lockedForModification" /></td>
    <td><code>boolean</code></td>
    <td>Whether the evaluator is locked for modification due to being referenced by active online evaluation configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the evaluator. (ACTIVE, CREATING, CREATE_FAILED, UPDATING, UPDATE_FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the evaluator was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_evaluators">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the evaluator was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the evaluator.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluatorArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the evaluator. (pattern: &lt;code&gt;arn:aws:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:evaluator\/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;$|^arn:aws:bedrock-agentcore:::evaluator/Builtin.&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluatorId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the evaluator. (pattern: &lt;code&gt;(Builtin.&#91;a-zA-Z0-9_-&#93;+|&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluatorName" /></td>
    <td><code>string</code></td>
    <td>The name of the evaluator. (pattern: &lt;code&gt;(Builtin.&#91;a-zA-Z0-9_-&#93;+|&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluatorType" /></td>
    <td><code>string</code></td>
    <td>The type of evaluator, indicating whether it is a built-in evaluator provided by the service or a custom evaluator created by the user. (Builtin, Custom, CustomCode)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the customer managed KMS key used to encrypt the evaluator's sensitive data. This field is only present for evaluators encrypted with a customer managed key. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="level" /></td>
    <td><code>string</code></td>
    <td>The evaluation level (TOOL_CALL, TRACE, or SESSION) that determines the scope of evaluation. (TOOL_CALL, TRACE, SESSION)</td>
</tr>
<tr>
    <td><CopyableCode code="lockedForModification" /></td>
    <td><code>boolean</code></td>
    <td>Whether the evaluator is locked for modification due to being referenced by active online evaluation configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the evaluator. (ACTIVE, CREATING, CREATE_FAILED, UPDATING, UPDATE_FAILED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the evaluator was last updated.</td>
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
    <td><a href="#get_evaluator"><CopyableCode code="get_evaluator" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-evaluator_id"><code>evaluator_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-includedData"><code>includedData</code></a></td>
    <td>Retrieves detailed information about an evaluator, including its configuration, status, and metadata. Works with both built-in and custom evaluators.</td>
</tr>
<tr>
    <td><a href="#list_evaluators"><CopyableCode code="list_evaluators" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all available evaluators, including both builtin evaluators provided by the service and custom evaluators created by the user.</td>
</tr>
<tr>
    <td><a href="#create_evaluator"><CopyableCode code="create_evaluator" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-evaluatorName"><code>evaluatorName</code></a>, <a href="#parameter-evaluatorConfig"><code>evaluatorConfig</code></a>, <a href="#parameter-level"><code>level</code></a></td>
    <td></td>
    <td>Creates a custom evaluator for agent quality assessment. Custom evaluators can use either LLM-as-a-Judge configurations with user-defined prompts, rating scales, and model settings, or code-based configurations with customer-managed Lambda functions to evaluate agent performance at tool call, trace, or session levels.</td>
</tr>
<tr>
    <td><a href="#update_evaluator"><CopyableCode code="update_evaluator" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-evaluator_id"><code>evaluator_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a custom evaluator's configuration, description, or evaluation level. Built-in evaluators cannot be updated. The evaluator must not be locked for modification.</td>
</tr>
<tr>
    <td><a href="#delete_evaluator"><CopyableCode code="delete_evaluator" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-evaluator_id"><code>evaluator_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom evaluator. Builtin evaluators cannot be deleted. The evaluator must not be referenced by any active online evaluation configurations.</td>
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
<tr id="parameter-evaluator_id">
    <td><CopyableCode code="evaluator_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the evaluator to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-includedData">
    <td><CopyableCode code="includedData" /></td>
    <td><code>string</code></td>
    <td>Controls which data is returned in the response. ALL_DATA (default) returns the full evaluator including decrypted instructions and rating scale. For evaluators encrypted with a customer managed KMS key, this requires kms:Decrypt permission on the key. METADATA_ONLY returns evaluator metadata and model configuration without instructions or rating scale, and does not require any KMS permissions.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of evaluators to return in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from a previous request to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_evaluator"
    values={[
        { label: 'get_evaluator', value: 'get_evaluator' },
        { label: 'list_evaluators', value: 'list_evaluators' }
    ]}
>
<TabItem value="get_evaluator">

Retrieves detailed information about an evaluator, including its configuration, status, and metadata. Works with both built-in and custom evaluators.

```sql
SELECT
createdAt,
description,
evaluatorArn,
evaluatorConfig,
evaluatorId,
evaluatorName,
kmsKeyArn,
level,
lockedForModification,
status,
updatedAt
FROM aws.bedrock_agentcore_control.evaluators
WHERE evaluator_id = '{{ evaluator_id }}' -- required
AND region = '{{ region }}' -- required
AND includedData = '{{ includedData }}'
;
```
</TabItem>
<TabItem value="list_evaluators">

Lists all available evaluators, including both builtin evaluators provided by the service and custom evaluators created by the user.

```sql
SELECT
createdAt,
description,
evaluatorArn,
evaluatorId,
evaluatorName,
evaluatorType,
kmsKeyArn,
level,
lockedForModification,
status,
updatedAt
FROM aws.bedrock_agentcore_control.evaluators
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_evaluator"
    values={[
        { label: 'create_evaluator', value: 'create_evaluator' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_evaluator">

Creates a custom evaluator for agent quality assessment. Custom evaluators can use either LLM-as-a-Judge configurations with user-defined prompts, rating scales, and model settings, or code-based configurations with customer-managed Lambda functions to evaluate agent performance at tool call, trace, or session levels.

```sql
INSERT INTO aws.bedrock_agentcore_control.evaluators (
clientToken,
evaluatorName,
description,
evaluatorConfig,
level,
kmsKeyArn,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ evaluatorName }}' /* required */,
'{{ description }}',
'{{ evaluatorConfig }}' /* required */,
'{{ level }}' /* required */,
'{{ kmsKeyArn }}',
'{{ tags }}',
'{{ region }}'
RETURNING
createdAt,
evaluatorArn,
evaluatorId,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: evaluators
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the evaluators resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: evaluatorName
      value: "{{ evaluatorName }}"
    - name: description
      value: "{{ description }}"
    - name: evaluatorConfig
      description: |
        The configuration that defines how an evaluator assesses agent performance, including the evaluation method and parameters.
      value:
        llmAsAJudge:
          instructions: "{{ instructions }}"
          ratingScale:
            numerical:
              - definition: "{{ definition }}"
                value: {{ value }}
                label: "{{ label }}"
            categorical:
              - definition: "{{ definition }}"
                label: "{{ label }}"
          modelConfig:
            bedrockEvaluatorModelConfig:
              modelId: "{{ modelId }}"
              inferenceConfig:
                maxTokens: {{ maxTokens }}
                temperature: {{ temperature }}
                topP: {{ topP }}
                stopSequences: "{{ stopSequences }}"
              additionalModelRequestFields: "{{ additionalModelRequestFields }}"
        codeBased:
          lambdaConfig:
            lambdaArn: "{{ lambdaArn }}"
            lambdaTimeoutInSeconds: {{ lambdaTimeoutInSeconds }}
    - name: level
      value: "{{ level }}"
      valid_values: ['TOOL_CALL', 'TRACE', 'SESSION']
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_evaluator"
    values={[
        { label: 'update_evaluator', value: 'update_evaluator' }
    ]}
>
<TabItem value="update_evaluator">

Updates a custom evaluator's configuration, description, or evaluation level. Built-in evaluators cannot be updated. The evaluator must not be locked for modification.

```sql
UPDATE aws.bedrock_agentcore_control.evaluators
SET 
clientToken = '{{ clientToken }}',
description = '{{ description }}',
evaluatorConfig = '{{ evaluatorConfig }}',
level = '{{ level }}',
kmsKeyArn = '{{ kmsKeyArn }}'
WHERE 
evaluator_id = '{{ evaluator_id }}' --required
AND region = '{{ region }}' --required
RETURNING
evaluatorArn,
evaluatorId,
status,
updatedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_evaluator"
    values={[
        { label: 'delete_evaluator', value: 'delete_evaluator' }
    ]}
>
<TabItem value="delete_evaluator">

Deletes a custom evaluator. Builtin evaluators cannot be deleted. The evaluator must not be referenced by any active online evaluation configurations.

```sql
DELETE FROM aws.bedrock_agentcore_control.evaluators
WHERE evaluator_id = '{{ evaluator_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
