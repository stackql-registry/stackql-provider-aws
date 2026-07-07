--- 
title: policy_engines
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_engines
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

Creates, updates, deletes, gets or lists a <code>policy_engines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policy_engines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.policy_engines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy_engine"
    values={[
        { label: 'get_policy_engine', value: 'get_policy_engine' },
        { label: 'list_policy_engines', value: 'list_policy_engines' }
    ]}
>
<TabItem value="get_policy_engine">

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
    <td>The customer-assigned name of the policy engine. This is the human-readable identifier that was specified when the policy engine was created. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy engine was originally created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The human-readable description of the policy engine's purpose and scope. This helps administrators understand the policy engine's role in governance.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyEngineArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the policy engine. This globally unique identifier can be used for cross-service references and IAM policy statements. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;&#123;0,7&#125;:bedrock-agentcore:&#91;a-z0-9-&#93;&#123;9,15&#125;:&#91;0-9&#93;&#123;12&#125;:policy-engine/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyEngineId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the retrieved policy engine. This matches the policy engine ID provided in the request and serves as the system identifier. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*-&#91;a-z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the policy engine. (CREATING, ACTIVE, UPDATING, DELETING, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReasons" /></td>
    <td><code>array</code></td>
    <td>Additional information about the policy engine status. This provides details about any failures or the current state of the policy engine.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy engine was last modified. This tracks the most recent changes to the policy engine configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_policy_engines">

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
    <td>The customer-assigned immutable name for the policy engine. This human-readable identifier must be unique within the account and cannot exceed 48 characters. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy engine was originally created. This is automatically set by the service and used for auditing and lifecycle management.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human-readable description of the policy engine's purpose and scope. Limited to 4,096 characters, this helps administrators understand the policy engine's role in the overall governance strategy.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyEngineArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the policy engine. This globally unique identifier can be used for cross-service references and IAM policy statements. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;&#123;0,7&#125;:bedrock-agentcore:&#91;a-z0-9-&#93;&#123;9,15&#125;:&#91;0-9&#93;&#123;12&#125;:policy-engine/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyEngineId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the policy engine. This system-generated identifier consists of the user name plus a 10-character generated suffix and serves as the primary key for policy engine operations. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*-&#91;a-z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the policy engine. (CREATING, ACTIVE, UPDATING, DELETING, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReasons" /></td>
    <td><code>array</code></td>
    <td>Additional information about the policy engine status. This provides details about any failures or the current state of the policy engine lifecycle.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy engine was last modified. This tracks the most recent changes to the policy engine configuration or metadata.</td>
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
    <td><a href="#get_policy_engine"><CopyableCode code="get_policy_engine" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_engine_id"><code>policy_engine_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific policy engine within the AgentCore Policy system. This operation returns the complete policy engine configuration, metadata, and current status, allowing administrators to review and manage policy engine settings.</td>
</tr>
<tr>
    <td><a href="#list_policy_engines"><CopyableCode code="list_policy_engines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of policy engines within the AgentCore Policy system. This operation supports pagination to help administrators discover and manage policy engines across their account. Each policy engine serves as a container for related policies.</td>
</tr>
<tr>
    <td><a href="#create_policy_engine"><CopyableCode code="create_policy_engine" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new policy engine within the AgentCore Policy system. A policy engine is a collection of policies that evaluates and authorizes agent tool calls. When associated with Gateways (each Gateway can be associated with at most one policy engine, but multiple Gateways can be associated with the same engine), the policy engine intercepts all agent requests and determines whether to allow or deny each action based on the defined policies. This is an asynchronous operation. Use the GetPolicyEngine operation to poll the status field to track completion.</td>
</tr>
<tr>
    <td><a href="#update_policy_engine"><CopyableCode code="update_policy_engine" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-policy_engine_id"><code>policy_engine_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing policy engine within the AgentCore Policy system. This operation allows modification of the policy engine description while maintaining its identity. This is an asynchronous operation. Use the GetPolicyEngine operation to poll the status field to track completion.</td>
</tr>
<tr>
    <td><a href="#delete_policy_engine"><CopyableCode code="delete_policy_engine" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policy_engine_id"><code>policy_engine_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing policy engine from the AgentCore Policy system. The policy engine must not have any associated policies before deletion. Once deleted, the policy engine and all its configurations become unavailable for policy management and evaluation. This is an asynchronous operation. Use the GetPolicyEngine operation to poll the status field to track completion.</td>
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
    <td>The unique identifier of the policy engine to be deleted. This must be a valid policy engine ID that exists within the account.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of policy engines to return in a single response. If not specified, the default is 10 policy engines per page, with a maximum of 100 per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous ListPolicyEngines call. Use this token to retrieve the next page of results when the response is paginated.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_policy_engine"
    values={[
        { label: 'get_policy_engine', value: 'get_policy_engine' },
        { label: 'list_policy_engines', value: 'list_policy_engines' }
    ]}
>
<TabItem value="get_policy_engine">

Retrieves detailed information about a specific policy engine within the AgentCore Policy system. This operation returns the complete policy engine configuration, metadata, and current status, allowing administrators to review and manage policy engine settings.

```sql
SELECT
name,
createdAt,
description,
encryptionKeyArn,
policyEngineArn,
policyEngineId,
status,
statusReasons,
updatedAt
FROM aws.bedrock_agentcore_control.policy_engines
WHERE policy_engine_id = '{{ policy_engine_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_policy_engines">

Retrieves a list of policy engines within the AgentCore Policy system. This operation supports pagination to help administrators discover and manage policy engines across their account. Each policy engine serves as a container for related policies.

```sql
SELECT
name,
createdAt,
description,
encryptionKeyArn,
policyEngineArn,
policyEngineId,
status,
statusReasons,
updatedAt
FROM aws.bedrock_agentcore_control.policy_engines
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_policy_engine"
    values={[
        { label: 'create_policy_engine', value: 'create_policy_engine' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_policy_engine">

Creates a new policy engine within the AgentCore Policy system. A policy engine is a collection of policies that evaluates and authorizes agent tool calls. When associated with Gateways (each Gateway can be associated with at most one policy engine, but multiple Gateways can be associated with the same engine), the policy engine intercepts all agent requests and determines whether to allow or deny each action based on the defined policies. This is an asynchronous operation. Use the GetPolicyEngine operation to poll the status field to track completion.

```sql
INSERT INTO aws.bedrock_agentcore_control.policy_engines (
name,
description,
clientToken,
encryptionKeyArn,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ clientToken }}',
'{{ encryptionKeyArn }}',
'{{ tags }}',
'{{ region }}'
RETURNING
name,
createdAt,
description,
encryptionKeyArn,
policyEngineArn,
policyEngineId,
status,
statusReasons,
updatedAt
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: policy_engines
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the policy_engines resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: encryptionKeyArn
      value: "{{ encryptionKeyArn }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_policy_engine"
    values={[
        { label: 'update_policy_engine', value: 'update_policy_engine' }
    ]}
>
<TabItem value="update_policy_engine">

Updates an existing policy engine within the AgentCore Policy system. This operation allows modification of the policy engine description while maintaining its identity. This is an asynchronous operation. Use the GetPolicyEngine operation to poll the status field to track completion.

```sql
UPDATE aws.bedrock_agentcore_control.policy_engines
SET 
description = '{{ description }}'
WHERE 
policy_engine_id = '{{ policy_engine_id }}' --required
AND region = '{{ region }}' --required
RETURNING
name,
createdAt,
description,
encryptionKeyArn,
policyEngineArn,
policyEngineId,
status,
statusReasons,
updatedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_policy_engine"
    values={[
        { label: 'delete_policy_engine', value: 'delete_policy_engine' }
    ]}
>
<TabItem value="delete_policy_engine">

Deletes an existing policy engine from the AgentCore Policy system. The policy engine must not have any associated policies before deletion. Once deleted, the policy engine and all its configurations become unavailable for policy management and evaluation. This is an asynchronous operation. Use the GetPolicyEngine operation to poll the status field to track completion.

```sql
DELETE FROM aws.bedrock_agentcore_control.policy_engines
WHERE policy_engine_id = '{{ policy_engine_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
