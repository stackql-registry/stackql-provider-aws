--- 
title: policy_generations
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_generations
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

Creates, updates, deletes, gets or lists a <code>policy_generations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policy_generations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.policy_generations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy_generation"
    values={[
        { label: 'get_policy_generation', value: 'get_policy_generation' },
        { label: 'list_policy_generations', value: 'list_policy_generations' }
    ]}
>
<TabItem value="get_policy_generation">

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
    <td>The customer-assigned name for the policy generation request. This helps identify and track generation operations across multiple requests. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy generation request was created. This is used for tracking and auditing generation operations and their lifecycle.</td>
</tr>
<tr>
    <td><CopyableCode code="findings" /></td>
    <td><code>string</code></td>
    <td>The findings and results from the policy generation process. This includes any issues, recommendations, validation results, or insights from the generated policies.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_engine_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the policy engine associated with this policy generation. This confirms the policy engine context for the generation operation. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*-&#91;a-z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_generation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the policy generation. This globally unique identifier can be used for tracking, auditing, and cross-service references. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;&#123;0,7&#125;:bedrock-agentcore:&#91;a-z0-9-&#93;&#123;9,15&#125;:&#91;0-9&#93;&#123;12&#125;:policy-engine/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9_&#93;&#123;10&#125;/policy-generation/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_generation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the policy generation request. This matches the generation ID provided in the request and serves as the tracking identifier. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*-&#91;a-z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>The resource information associated with the policy generation. This provides context about the target resources for which the policies are being generated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the policy generation. This indicates whether the generation is in progress, completed successfully, or failed during processing. (GENERATING, GENERATED, GENERATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reasons" /></td>
    <td><code>array</code></td>
    <td>Additional information about the generation status. This provides details about any failures, warnings, or the current state of the generation process.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy generation was last updated. This tracks the progress of the generation process and any status changes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_policy_generations">

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
    <td>The customer-assigned name for this policy generation request. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this policy generation request was created.</td>
</tr>
<tr>
    <td><CopyableCode code="findings" /></td>
    <td><code>string</code></td>
    <td>Findings and insights from this policy generation process.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_engine_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the policy engine associated with this generation request. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*-&#91;a-z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_generation_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of this policy generation request. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;&#123;0,7&#125;:bedrock-agentcore:&#91;a-z0-9-&#93;&#123;9,15&#125;:&#91;0-9&#93;&#123;12&#125;:policy-engine/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9_&#93;&#123;10&#125;/policy-generation/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_generation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this policy generation request. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*-&#91;a-z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>The resource information associated with this policy generation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of this policy generation request. (GENERATING, GENERATED, GENERATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reasons" /></td>
    <td><code>array</code></td>
    <td>Additional information about the generation status.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this policy generation was last updated.</td>
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
    <td><a href="#get_policy_generation"><CopyableCode code="get_policy_generation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_generation_id"><code>policy_generation_id</code></a>, <a href="#parameter-policy_engine_id"><code>policy_engine_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a policy generation request within the AgentCore Policy system. Policy generation converts natural language descriptions into Cedar policy statements using AI-powered translation, enabling non-technical users to create policies.</td>
</tr>
<tr>
    <td><a href="#list_policy_generations"><CopyableCode code="list_policy_generations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_engine_id"><code>policy_engine_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of policy generation requests within the AgentCore Policy system. This operation supports pagination and filtering to help track and manage AI-powered policy generation operations.</td>
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
    <td>The identifier of the policy engine whose policy generations to retrieve.</td>
</tr>
<tr id="parameter-policy_generation_id">
    <td><CopyableCode code="policy_generation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the policy generation request to be retrieved. This must be a valid generation ID from a previous StartPolicyGeneration call.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of policy generations to return in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token for retrieving additional policy generations when results are paginated.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_policy_generation"
    values={[
        { label: 'get_policy_generation', value: 'get_policy_generation' },
        { label: 'list_policy_generations', value: 'list_policy_generations' }
    ]}
>
<TabItem value="get_policy_generation">

Retrieves information about a policy generation request within the AgentCore Policy system. Policy generation converts natural language descriptions into Cedar policy statements using AI-powered translation, enabling non-technical users to create policies.

```sql
SELECT
name,
created_at,
findings,
policy_engine_id,
policy_generation_arn,
policy_generation_id,
resource,
status,
status_reasons,
updated_at
FROM aws.bedrock_agentcore_control.policy_generations
WHERE policy_generation_id = '{{ policy_generation_id }}' -- required
AND policy_engine_id = '{{ policy_engine_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_policy_generations">

Retrieves a list of policy generation requests within the AgentCore Policy system. This operation supports pagination and filtering to help track and manage AI-powered policy generation operations.

```sql
SELECT
name,
created_at,
findings,
policy_engine_id,
policy_generation_arn,
policy_generation_id,
resource,
status,
status_reasons,
updated_at
FROM aws.bedrock_agentcore_control.policy_generations
WHERE policy_engine_id = '{{ policy_engine_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
