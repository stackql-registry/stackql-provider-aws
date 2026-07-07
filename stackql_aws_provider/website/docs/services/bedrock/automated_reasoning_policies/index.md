--- 
title: automated_reasoning_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - automated_reasoning_policies
  - bedrock
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

Creates, updates, deletes, gets or lists an <code>automated_reasoning_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automated_reasoning_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.automated_reasoning_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_automated_reasoning_policy"
    values={[
        { label: 'get_automated_reasoning_policy', value: 'get_automated_reasoning_policy' },
        { label: 'list_automated_reasoning_policies', value: 'list_automated_reasoning_policies' }
    ]}
>
<TabItem value="get_automated_reasoning_policy">

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
    <td>The name of the policy. (pattern: &lt;code&gt;&#91;0-9a-zA-Z-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="definitionHash" /></td>
    <td><code>string</code></td>
    <td>The hash of the policy definition used as a concurrency token. (pattern: &lt;code&gt;&#91;0-9a-z&#93;&#123;128&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the policy. (pattern: &lt;code&gt;&#91;\s\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key used to encrypt the automated reasoning policy and its associated artifacts. If a KMS key is not provided during the initial CreateAutomatedReasoningPolicyRequest, the kmsKeyArn won't be included in the GetAutomatedReasoningPolicyResponse. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the policy. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:automated-reasoning-policy/&#91;a-z0-9&#93;&#123;12&#125;(:(&#91;1-9&#93;&#91;0-9&#93;&#123;0,11&#125;))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the policy. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the policy. (pattern: &lt;code&gt;(&#91;1-9&#93;&#91;0-9&#93;&#123;0,11&#125;)&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_automated_reasoning_policies">

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
    <td>The name of the policy. (pattern: &lt;code&gt;&#91;0-9a-zA-Z-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the policy. (pattern: &lt;code&gt;&#91;\s\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the policy. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:automated-reasoning-policy/&#91;a-z0-9&#93;&#123;12&#125;(:(&#91;1-9&#93;&#91;0-9&#93;&#123;0,11&#125;))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the policy. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the policy. (pattern: &lt;code&gt;(&#91;1-9&#93;&#91;0-9&#93;&#123;0,11&#125;)&lt;/code&gt;)</td>
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
    <td><a href="#get_automated_reasoning_policy"><CopyableCode code="get_automated_reasoning_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about an Automated Reasoning policy or policy version. Returns information including the policy definition, metadata, and timestamps.</td>
</tr>
<tr>
    <td><a href="#list_automated_reasoning_policies"><CopyableCode code="list_automated_reasoning_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-policyArn"><code>policyArn</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all Automated Reasoning policies in your account, with optional filtering by policy ARN. This helps you manage and discover existing policies.</td>
</tr>
<tr>
    <td><a href="#create_automated_reasoning_policy_version"><CopyableCode code="create_automated_reasoning_policy_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-lastUpdatedDefinitionHash"><code>lastUpdatedDefinitionHash</code></a></td>
    <td></td>
    <td>Creates a new version of an existing Automated Reasoning policy. This allows you to iterate on your policy rules while maintaining previous versions for rollback or comparison purposes.</td>
</tr>
<tr>
    <td><a href="#create_automated_reasoning_policy"><CopyableCode code="create_automated_reasoning_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates an Automated Reasoning policy for Amazon Bedrock Guardrails. Automated Reasoning policies use mathematical techniques to detect hallucinations, suggest corrections, and highlight unstated assumptions in the responses of your GenAI application. To create a policy, you upload a source document that describes the rules that you're encoding. Automated Reasoning extracts important concepts from the source document that will become variables in the policy and infers policy rules.</td>
</tr>
<tr>
    <td><a href="#update_automated_reasoning_policy"><CopyableCode code="update_automated_reasoning_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyDefinition"><code>policyDefinition</code></a></td>
    <td></td>
    <td>Updates an existing Automated Reasoning policy with new rules, variables, or configuration. This creates a new version of the policy while preserving the previous version.</td>
</tr>
<tr>
    <td><a href="#delete_automated_reasoning_policy"><CopyableCode code="delete_automated_reasoning_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Deletes an Automated Reasoning policy or policy version. This operation is idempotent. If you delete a policy more than once, each call succeeds. Deleting a policy removes it permanently and cannot be undone.</td>
</tr>
<tr>
    <td><a href="#cancel_automated_reasoning_policy_build_workflow"><CopyableCode code="cancel_automated_reasoning_policy_build_workflow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-build_workflow_id"><code>build_workflow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels a running Automated Reasoning policy build workflow. This stops the policy generation process and prevents further processing of the source documents.</td>
</tr>
<tr>
    <td><a href="#export_automated_reasoning_policy_version"><CopyableCode code="export_automated_reasoning_policy_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Exports the policy definition for an Automated Reasoning policy version. Returns the complete policy definition including rules, variables, and custom variable types in a structured format.</td>
</tr>
<tr>
    <td><a href="#start_automated_reasoning_policy_build_workflow"><CopyableCode code="start_automated_reasoning_policy_build_workflow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-build_workflow_type"><code>build_workflow_type</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceContent"><code>sourceContent</code></a></td>
    <td><a href="#parameter-x-amz-client-token"><code>x-amz-client-token</code></a></td>
    <td>Starts a new build workflow for an Automated Reasoning policy. This initiates the process of analyzing source documents and generating policy rules, variables, and types.</td>
</tr>
<tr>
    <td><a href="#start_automated_reasoning_policy_test_workflow"><CopyableCode code="start_automated_reasoning_policy_test_workflow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-build_workflow_id"><code>build_workflow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Initiates a test workflow to validate Automated Reasoning policy tests. The workflow executes the specified tests against the policy and generates validation results.</td>
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
<tr id="parameter-build_workflow_id">
    <td><CopyableCode code="build_workflow_id" /></td>
    <td><code>string</code></td>
    <td>The build workflow identifier. The build workflow must show a COMPLETED status before running tests.</td>
</tr>
<tr id="parameter-build_workflow_type">
    <td><CopyableCode code="build_workflow_type" /></td>
    <td><code>string</code></td>
    <td>The type of build workflow to start (e.g., DOCUMENT_INGESTION for processing new documents, POLICY_REPAIR for fixing existing policies).</td>
</tr>
<tr id="parameter-policy_arn">
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Automated Reasoning policy to test.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to force delete the automated reasoning policy even if it has active resources. When false, Amazon Bedrock validates if all artifacts have been deleted (e.g. policy version, test case, test result) for a policy before deletion. When true, Amazon Bedrock will delete the policy and all its artifacts without validation. Default is false.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of policies to return in a single call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-policyArn">
    <td><CopyableCode code="policyArn" /></td>
    <td><code>string</code></td>
    <td>Optional filter to list only the policy versions with the specified Amazon Resource Name (ARN). If not provided, the DRAFT versions for all policies are listed.</td>
</tr>
<tr id="parameter-x-amz-client-token">
    <td><CopyableCode code="x-amz-client-token" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier to ensure that the operation completes no more than once. If this token matches a previous request, Amazon Bedrock ignores the request but doesn't return an error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_automated_reasoning_policy"
    values={[
        { label: 'get_automated_reasoning_policy', value: 'get_automated_reasoning_policy' },
        { label: 'list_automated_reasoning_policies', value: 'list_automated_reasoning_policies' }
    ]}
>
<TabItem value="get_automated_reasoning_policy">

Retrieves details about an Automated Reasoning policy or policy version. Returns information including the policy definition, metadata, and timestamps.

```sql
SELECT
name,
createdAt,
definitionHash,
description,
kmsKeyArn,
policyArn,
policyId,
updatedAt,
version
FROM aws.bedrock.automated_reasoning_policies
WHERE policy_arn = '{{ policy_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_automated_reasoning_policies">

Lists all Automated Reasoning policies in your account, with optional filtering by policy ARN. This helps you manage and discover existing policies.

```sql
SELECT
name,
createdAt,
description,
policyArn,
policyId,
updatedAt,
version
FROM aws.bedrock.automated_reasoning_policies
WHERE region = '{{ region }}' -- required
AND policyArn = '{{ policyArn }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_automated_reasoning_policy_version"
    values={[
        { label: 'create_automated_reasoning_policy_version', value: 'create_automated_reasoning_policy_version' },
        { label: 'create_automated_reasoning_policy', value: 'create_automated_reasoning_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_automated_reasoning_policy_version">

Creates a new version of an existing Automated Reasoning policy. This allows you to iterate on your policy rules while maintaining previous versions for rollback or comparison purposes.

```sql
INSERT INTO aws.bedrock.automated_reasoning_policies (
clientRequestToken,
lastUpdatedDefinitionHash,
tags,
policy_arn,
region
)
SELECT 
'{{ clientRequestToken }}',
'{{ lastUpdatedDefinitionHash }}' /* required */,
'{{ tags }}',
'{{ policy_arn }}',
'{{ region }}'
RETURNING
name,
createdAt,
definitionHash,
description,
policyArn,
version
;
```
</TabItem>
<TabItem value="create_automated_reasoning_policy">

Creates an Automated Reasoning policy for Amazon Bedrock Guardrails. Automated Reasoning policies use mathematical techniques to detect hallucinations, suggest corrections, and highlight unstated assumptions in the responses of your GenAI application. To create a policy, you upload a source document that describes the rules that you're encoding. Automated Reasoning extracts important concepts from the source document that will become variables in the policy and infers policy rules.

```sql
INSERT INTO aws.bedrock.automated_reasoning_policies (
name,
description,
clientRequestToken,
policyDefinition,
kmsKeyId,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ clientRequestToken }}',
'{{ policyDefinition }}',
'{{ kmsKeyId }}',
'{{ tags }}',
'{{ region }}'
RETURNING
name,
createdAt,
definitionHash,
description,
policyArn,
updatedAt,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: automated_reasoning_policies
  props:
    - name: policy_arn
      value: "{{ policy_arn }}"
      description: Required parameter for the automated_reasoning_policies resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the automated_reasoning_policies resource.
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: lastUpdatedDefinitionHash
      value: "{{ lastUpdatedDefinitionHash }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: policyDefinition
      description: |
        Contains the formal logic rules, variables, and custom variable types that define an Automated Reasoning policy. The policy definition specifies the constraints used to validate foundation model responses for accuracy and logical consistency.
      value:
        version: "{{ version }}"
        types:
          - name: "{{ name }}"
            description: "{{ description }}"
            values: "{{ values }}"
        rules:
          - id: "{{ id }}"
            expression: "{{ expression }}"
            alternateExpression: "{{ alternateExpression }}"
        variables:
          - name: "{{ name }}"
            type_: "{{ type_ }}"
            description: "{{ description }}"
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_automated_reasoning_policy"
    values={[
        { label: 'update_automated_reasoning_policy', value: 'update_automated_reasoning_policy' }
    ]}
>
<TabItem value="update_automated_reasoning_policy">

Updates an existing Automated Reasoning policy with new rules, variables, or configuration. This creates a new version of the policy while preserving the previous version.

```sql
UPDATE aws.bedrock.automated_reasoning_policies
SET 
policyDefinition = '{{ policyDefinition }}',
name = '{{ name }}',
description = '{{ description }}'
WHERE 
policy_arn = '{{ policy_arn }}' --required
AND region = '{{ region }}' --required
AND policyDefinition = '{{ policyDefinition }}' --required
RETURNING
name,
definitionHash,
policyArn,
updatedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_automated_reasoning_policy"
    values={[
        { label: 'delete_automated_reasoning_policy', value: 'delete_automated_reasoning_policy' }
    ]}
>
<TabItem value="delete_automated_reasoning_policy">

Deletes an Automated Reasoning policy or policy version. This operation is idempotent. If you delete a policy more than once, each call succeeds. Deleting a policy removes it permanently and cannot be undone.

```sql
DELETE FROM aws.bedrock.automated_reasoning_policies
WHERE policy_arn = '{{ policy_arn }}' --required
AND region = '{{ region }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_automated_reasoning_policy_build_workflow"
    values={[
        { label: 'cancel_automated_reasoning_policy_build_workflow', value: 'cancel_automated_reasoning_policy_build_workflow' },
        { label: 'export_automated_reasoning_policy_version', value: 'export_automated_reasoning_policy_version' },
        { label: 'start_automated_reasoning_policy_build_workflow', value: 'start_automated_reasoning_policy_build_workflow' },
        { label: 'start_automated_reasoning_policy_test_workflow', value: 'start_automated_reasoning_policy_test_workflow' }
    ]}
>
<TabItem value="cancel_automated_reasoning_policy_build_workflow">

Cancels a running Automated Reasoning policy build workflow. This stops the policy generation process and prevents further processing of the source documents.

```sql
EXEC aws.bedrock.automated_reasoning_policies.cancel_automated_reasoning_policy_build_workflow 
@policy_arn='{{ policy_arn }}' --required, 
@build_workflow_id='{{ build_workflow_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="export_automated_reasoning_policy_version">

Exports the policy definition for an Automated Reasoning policy version. Returns the complete policy definition including rules, variables, and custom variable types in a structured format.

```sql
EXEC aws.bedrock.automated_reasoning_policies.export_automated_reasoning_policy_version 
@policy_arn='{{ policy_arn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="start_automated_reasoning_policy_build_workflow">

Starts a new build workflow for an Automated Reasoning policy. This initiates the process of analyzing source documents and generating policy rules, variables, and types.

```sql
EXEC aws.bedrock.automated_reasoning_policies.start_automated_reasoning_policy_build_workflow 
@policy_arn='{{ policy_arn }}' --required, 
@build_workflow_type='{{ build_workflow_type }}' --required, 
@region='{{ region }}' --required, 
@x-amz-client-token='{{ x-amz-client-token }}' 
@@json=
'{
"sourceContent": "{{ sourceContent }}"
}'
;
```
</TabItem>
<TabItem value="start_automated_reasoning_policy_test_workflow">

Initiates a test workflow to validate Automated Reasoning policy tests. The workflow executes the specified tests against the policy and generates validation results.

```sql
EXEC aws.bedrock.automated_reasoning_policies.start_automated_reasoning_policy_test_workflow 
@policy_arn='{{ policy_arn }}' --required, 
@build_workflow_id='{{ build_workflow_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"testCaseIds": "{{ testCaseIds }}", 
"clientRequestToken": "{{ clientRequestToken }}"
}'
;
```
</TabItem>
</Tabs>
