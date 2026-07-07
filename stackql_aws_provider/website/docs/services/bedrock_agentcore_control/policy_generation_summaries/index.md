--- 
title: policy_generation_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_generation_summaries
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

Creates, updates, deletes, gets or lists a <code>policy_generation_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policy_generation_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.policy_generation_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy_generation_summary"
    values={[
        { label: 'get_policy_generation_summary', value: 'get_policy_generation_summary' },
        { label: 'list_policy_generation_summaries', value: 'list_policy_generation_summaries' }
    ]}
>
<TabItem value="get_policy_generation_summary">

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
    <td>The customer-assigned name for the policy generation request. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy generation request was created.</td>
</tr>
<tr>
    <td><CopyableCode code="findings" /></td>
    <td><code>string</code></td>
    <td>The findings from the policy generation process, if available.</td>
</tr>
<tr>
    <td><CopyableCode code="policyEngineId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the policy engine associated with this policy generation. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*-&#91;a-z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyGenerationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the policy generation request. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;&#123;0,7&#125;:bedrock-agentcore:&#91;a-z0-9-&#93;&#123;9,15&#125;:&#91;0-9&#93;&#123;12&#125;:policy-engine/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9_&#93;&#123;10&#125;/policy-generation/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyGenerationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the policy generation request. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*-&#91;a-z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>The resource information associated with the policy generation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the policy generation request. (GENERATING, GENERATED, GENERATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the policy generation was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_policy_generation_summaries">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this policy generation request was created.</td>
</tr>
<tr>
    <td><CopyableCode code="findings" /></td>
    <td><code>string</code></td>
    <td>Findings and insights from this policy generation process.</td>
</tr>
<tr>
    <td><CopyableCode code="policyEngineId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the policy engine associated with this generation request. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*-&#91;a-z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyGenerationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of this policy generation request. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;&#123;0,7&#125;:bedrock-agentcore:&#91;a-z0-9-&#93;&#123;9,15&#125;:&#91;0-9&#93;&#123;12&#125;:policy-engine/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9_&#93;&#123;10&#125;/policy-generation/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,47&#125;-&#91;a-zA-Z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyGenerationId" /></td>
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
    <td><CopyableCode code="updatedAt" /></td>
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
    <td><a href="#get_policy_generation_summary"><CopyableCode code="get_policy_generation_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_generation_id"><code>policy_generation_id</code></a>, <a href="#parameter-policy_engine_id"><code>policy_engine_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a metadata-only summary of a specific policy generation request without decrypting customer content. This lightweight read operation returns resource identifiers, status, timestamps, and findings, but does not include status reasons. Because this operation does not require access to the customer's KMS key, it is suitable for resource discovery, inventory, and integration scenarios where only metadata is needed.</td>
</tr>
<tr>
    <td><a href="#list_policy_generation_summaries"><CopyableCode code="list_policy_generation_summaries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_engine_id"><code>policy_engine_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a paginated list of metadata-only policy generation summaries within a policy engine without decrypting customer content. This lightweight read operation returns resource identifiers, status, timestamps, and findings for each policy generation, but does not include status reasons. Because this operation does not require access to the customer's KMS key, it is suitable for resource discovery, inventory, and integration scenarios where only metadata is needed.</td>
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
    <td>The identifier of the policy engine whose policy generation summaries to retrieve.</td>
</tr>
<tr id="parameter-policy_generation_id">
    <td><CopyableCode code="policy_generation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the policy generation request to retrieve the summary for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of policy generation summaries to return in a single response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous ListPolicyGenerationSummaries call. Use this token to retrieve the next page of results when the response is paginated.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_policy_generation_summary"
    values={[
        { label: 'get_policy_generation_summary', value: 'get_policy_generation_summary' },
        { label: 'list_policy_generation_summaries', value: 'list_policy_generation_summaries' }
    ]}
>
<TabItem value="get_policy_generation_summary">

Retrieves a metadata-only summary of a specific policy generation request without decrypting customer content. This lightweight read operation returns resource identifiers, status, timestamps, and findings, but does not include status reasons. Because this operation does not require access to the customer's KMS key, it is suitable for resource discovery, inventory, and integration scenarios where only metadata is needed.

```sql
SELECT
name,
createdAt,
findings,
policyEngineId,
policyGenerationArn,
policyGenerationId,
resource,
status,
updatedAt
FROM aws.bedrock_agentcore_control.policy_generation_summaries
WHERE policy_generation_id = '{{ policy_generation_id }}' -- required
AND policy_engine_id = '{{ policy_engine_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_policy_generation_summaries">

Retrieves a paginated list of metadata-only policy generation summaries within a policy engine without decrypting customer content. This lightweight read operation returns resource identifiers, status, timestamps, and findings for each policy generation, but does not include status reasons. Because this operation does not require access to the customer's KMS key, it is suitable for resource discovery, inventory, and integration scenarios where only metadata is needed.

```sql
SELECT
name,
createdAt,
findings,
policyEngineId,
policyGenerationArn,
policyGenerationId,
resource,
status,
updatedAt
FROM aws.bedrock_agentcore_control.policy_generation_summaries
WHERE policy_engine_id = '{{ policy_engine_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
