--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' },
        { label: 'list_policies', value: 'list_policies' }
    ]}
>
<TabItem value="get_policy">

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
    <td>The customer-assigned name of the policy. This is the human-readable identifier that was specified when the policy was created. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy was originally created.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>Represents the definition structure for policies within the AgentCore Policy system. This structure encapsulates different policy formats and languages that can be used to define access control rules.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The human-readable description of the policy's purpose and functionality. This helps administrators understand and manage the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the policy. This globally unique identifier can be used for cross-service references and IAM policy statements. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;&#123;0,7&#125;:bedrock-agentcore:&#91;a-z0-9-&#93;&#123;9,15&#125;:&#91;0-9&#93;&#123;12&#125;:policy-engine/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9_&#93;&#123;10&#125;/policy/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_engine_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the policy engine that manages this policy. This confirms the policy engine context for the retrieved policy. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*-&#91;a-z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the retrieved policy. This matches the policy ID provided in the request and serves as the system identifier for the policy. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*-&#91;a-z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the policy. (CREATING, ACTIVE, UPDATING, DELETING, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reasons" /></td>
    <td><code>array</code></td>
    <td>Additional information about the policy status. This provides details about any failures or the current state of the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy was last modified. This tracks the most recent changes to the policy configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_policies">

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
    <td>The customer-assigned immutable name for the policy. This human-readable identifier must be unique within the account and cannot exceed 48 characters. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy was originally created. This is automatically set by the service and used for auditing and lifecycle management.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>Represents the definition structure for policies within the AgentCore Policy system. This structure encapsulates different policy formats and languages that can be used to define access control rules.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human-readable description of the policy's purpose and functionality. Limited to 4,096 characters, this helps administrators understand and manage the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the policy. This globally unique identifier can be used for cross-service references and IAM policy statements. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;&#123;0,7&#125;:bedrock-agentcore:&#91;a-z0-9-&#93;&#123;9,15&#125;:&#91;0-9&#93;&#123;12&#125;:policy-engine/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9_&#93;&#123;10&#125;/policy/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_engine_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the policy engine that manages this policy. This establishes the policy engine context for policy evaluation and management. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*-&#91;a-z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the policy. This system-generated identifier consists of the user name plus a 10-character generated suffix and serves as the primary key for policy operations. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*-&#91;a-z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the policy. (CREATING, ACTIVE, UPDATING, DELETING, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reasons" /></td>
    <td><code>array</code></td>
    <td>Additional information about the policy status. This provides details about any failures or the current state of the policy lifecycle.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy was last modified. This tracks the most recent changes to the policy configuration or metadata.</td>
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
    <td><a href="#get_policy"><CopyableCode code="get_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_engine_id"><code>policy_engine_id</code></a>, <a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific policy within the AgentCore Policy system. This operation returns the complete policy definition, metadata, and current status, allowing administrators to review and manage policy configurations.</td>
</tr>
<tr>
    <td><a href="#list_policies"><CopyableCode code="list_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_engine_id"><code>policy_engine_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-targetResourceScope"><code>targetResourceScope</code></a></td>
    <td>Retrieves a list of policies within the AgentCore Policy engine. This operation supports pagination and filtering to help administrators manage and discover policies across policy engines. Results can be filtered by policy engine or resource associations.</td>
</tr>
<tr>
    <td><a href="#create_policy"><CopyableCode code="create_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-policy_engine_id"><code>policy_engine_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-definition"><code>definition</code></a></td>
    <td></td>
    <td>Creates a policy within the AgentCore Policy system. Policies provide real-time, deterministic control over agentic interactions with AgentCore Gateway. Using the Cedar policy language, you can define fine-grained policies that specify which interactions with Gateway tools are permitted based on input parameters and OAuth claims, ensuring agents operate within defined boundaries and business rules. The policy is validated during creation against the Cedar schema generated from the Gateway's tools' input schemas, which defines the available tools, their parameters, and expected data types. This is an asynchronous operation. Use the GetPolicy operation to poll the status field to track completion.</td>
</tr>
<tr>
    <td><a href="#update_policy"><CopyableCode code="update_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-policy_engine_id"><code>policy_engine_id</code></a>, <a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing policy within the AgentCore Policy system. This operation allows modification of the policy description and definition while maintaining the policy's identity. The updated policy is validated against the Cedar schema before being applied. This is an asynchronous operation. Use the GetPolicy operation to poll the status field to track completion.</td>
</tr>
<tr>
    <td><a href="#delete_policy"><CopyableCode code="delete_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policy_engine_id"><code>policy_engine_id</code></a>, <a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing policy from the AgentCore Policy system. Once deleted, the policy can no longer be used for agent behavior control and all references to it become invalid. This is an asynchronous operation. Use the GetPolicy operation to poll the status field to track completion.</td>
</tr>
<tr>
    <td><a href="#start_policy_generation"><CopyableCode code="start_policy_generation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-policy_engine_id"><code>policy_engine_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resource"><code>resource</code></a>, <a href="#parameter-content"><code>content</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Initiates the AI-powered generation of Cedar policies from natural language descriptions within the AgentCore Policy system. This feature enables both technical and non-technical users to create policies by describing their authorization requirements in plain English, which is then automatically translated into formal Cedar policy statements. The generation process analyzes the natural language input along with the Gateway's tool context to produce validated policy options. Generated policy assets are automatically deleted after 7 days, so you should review and create policies from the generated assets within this timeframe. Once created, policies are permanent and not subject to this expiration. Generated policies should be reviewed and tested in log-only mode before deploying to production. Use this when you want to describe policy intent naturally rather than learning Cedar syntax, though generated policies may require refinement for complex scenarios.</td>
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
<tr id="parameter-policy_engine_id">
    <td><CopyableCode code="policy_engine_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the policy engine that provides the context for policy generation. This engine's schema and tool context are used to ensure generated policies are valid and applicable.</td>
</tr>
<tr id="parameter-policy_id">
    <td><CopyableCode code="policy_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the policy to be deleted. This must be a valid policy ID that exists within the specified policy engine.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of policies to return in a single response. If not specified, the default is 10 policies per page, with a maximum of 100 per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous ListPolicies call. Use this token to retrieve the next page of results when the response is paginated.</td>
</tr>
<tr id="parameter-targetResourceScope">
    <td><CopyableCode code="targetResourceScope" /></td>
    <td><code>string</code></td>
    <td>Optional filter to list policies that apply to a specific resource scope or resource type. This helps narrow down policy results to those relevant for particular Amazon Web Services resources, agent tools, or operational contexts within the policy engine ecosystem.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' },
        { label: 'list_policies', value: 'list_policies' }
    ]}
>
<TabItem value="get_policy">

Retrieves detailed information about a specific policy within the AgentCore Policy system. This operation returns the complete policy definition, metadata, and current status, allowing administrators to review and manage policy configurations.

```sql
SELECT
name,
created_at,
definition,
description,
policy_arn,
policy_engine_id,
policy_id,
status,
status_reasons,
updated_at
FROM aws.bedrock_agentcore_control.policies
WHERE policy_engine_id = '{{ policy_engine_id }}' -- required
AND policy_id = '{{ policy_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_policies">

Retrieves a list of policies within the AgentCore Policy engine. This operation supports pagination and filtering to help administrators manage and discover policies across policy engines. Results can be filtered by policy engine or resource associations.

```sql
SELECT
name,
created_at,
definition,
description,
policy_arn,
policy_engine_id,
policy_id,
status,
status_reasons,
updated_at
FROM aws.bedrock_agentcore_control.policies
WHERE policy_engine_id = '{{ policy_engine_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND targetResourceScope = '{{ targetResourceScope }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_policy"
    values={[
        { label: 'create_policy', value: 'create_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_policy">

Creates a policy within the AgentCore Policy system. Policies provide real-time, deterministic control over agentic interactions with AgentCore Gateway. Using the Cedar policy language, you can define fine-grained policies that specify which interactions with Gateway tools are permitted based on input parameters and OAuth claims, ensuring agents operate within defined boundaries and business rules. The policy is validated during creation against the Cedar schema generated from the Gateway's tools' input schemas, which defines the available tools, their parameters, and expected data types. This is an asynchronous operation. Use the GetPolicy operation to poll the status field to track completion.

```sql
INSERT INTO aws.bedrock_agentcore_control.policies (
name,
definition,
description,
validationMode,
clientToken,
policy_engine_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ definition }}' /* required */,
'{{ description }}',
'{{ validationMode }}',
'{{ clientToken }}',
'{{ policy_engine_id }}',
'{{ region }}'
RETURNING
name,
created_at,
definition,
description,
policy_arn,
policy_engine_id,
policy_id,
status,
status_reasons,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: policies
  props:
    - name: policy_engine_id
      value: "{{ policy_engine_id }}"
      description: Required parameter for the policies resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the policies resource.
    - name: name
      value: "{{ name }}"
    - name: definition
      description: |
        Represents the definition structure for policies within the AgentCore Policy system. This structure encapsulates different policy formats and languages that can be used to define access control rules.
      value:
        cedar:
          statement: "{{ statement }}"
        policyGeneration:
          policyGenerationId: "{{ policyGenerationId }}"
          policyGenerationAssetId: "{{ policyGenerationAssetId }}"
    - name: description
      value: "{{ description }}"
    - name: validationMode
      value: "{{ validationMode }}"
      valid_values: ['FAIL_ON_ANY_FINDINGS', 'IGNORE_ALL_FINDINGS']
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_policy"
    values={[
        { label: 'update_policy', value: 'update_policy' }
    ]}
>
<TabItem value="update_policy">

Updates an existing policy within the AgentCore Policy system. This operation allows modification of the policy description and definition while maintaining the policy's identity. The updated policy is validated against the Cedar schema before being applied. This is an asynchronous operation. Use the GetPolicy operation to poll the status field to track completion.

```sql
UPDATE aws.bedrock_agentcore_control.policies
SET 
description = '{{ description }}',
definition = '{{ definition }}',
validationMode = '{{ validationMode }}'
WHERE 
policy_engine_id = '{{ policy_engine_id }}' --required
AND policy_id = '{{ policy_id }}' --required
AND region = '{{ region }}' --required
RETURNING
name,
created_at,
definition,
description,
policy_arn,
policy_engine_id,
policy_id,
status,
status_reasons,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_policy"
    values={[
        { label: 'delete_policy', value: 'delete_policy' }
    ]}
>
<TabItem value="delete_policy">

Deletes an existing policy from the AgentCore Policy system. Once deleted, the policy can no longer be used for agent behavior control and all references to it become invalid. This is an asynchronous operation. Use the GetPolicy operation to poll the status field to track completion.

```sql
DELETE FROM aws.bedrock_agentcore_control.policies
WHERE policy_engine_id = '{{ policy_engine_id }}' --required
AND policy_id = '{{ policy_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_policy_generation"
    values={[
        { label: 'start_policy_generation', value: 'start_policy_generation' }
    ]}
>
<TabItem value="start_policy_generation">

Initiates the AI-powered generation of Cedar policies from natural language descriptions within the AgentCore Policy system. This feature enables both technical and non-technical users to create policies by describing their authorization requirements in plain English, which is then automatically translated into formal Cedar policy statements. The generation process analyzes the natural language input along with the Gateway's tool context to produce validated policy options. Generated policy assets are automatically deleted after 7 days, so you should review and create policies from the generated assets within this timeframe. Once created, policies are permanent and not subject to this expiration. Generated policies should be reviewed and tested in log-only mode before deploying to production. Use this when you want to describe policy intent naturally rather than learning Cedar syntax, though generated policies may require refinement for complex scenarios.

```sql
EXEC aws.bedrock_agentcore_control.policies.start_policy_generation 
@policy_engine_id='{{ policy_engine_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"resource": "{{ resource }}", 
"content": "{{ content }}", 
"name": "{{ name }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
