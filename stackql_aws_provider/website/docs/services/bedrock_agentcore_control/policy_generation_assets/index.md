--- 
title: policy_generation_assets
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_generation_assets
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

Creates, updates, deletes, gets or lists a <code>policy_generation_assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policy_generation_assets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.policy_generation_assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_policy_generation_assets"
    values={[
        { label: 'list_policy_generation_assets', value: 'list_policy_generation_assets' }
    ]}
>
<TabItem value="list_policy_generation_assets">

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
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>Represents the definition structure for policies within the AgentCore Policy system. This structure encapsulates different policy formats and languages that can be used to define access control rules.</td>
</tr>
<tr>
    <td><CopyableCode code="findings" /></td>
    <td><code>array</code></td>
    <td>Analysis findings and insights related to this specific generated policy asset. These findings may include validation results, potential issues, or recommendations for improvement to help users evaluate the quality and appropriateness of the generated policy.</td>
</tr>
<tr>
    <td><CopyableCode code="policyGenerationAssetId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this generated policy asset within the policy generation request. This ID can be used to reference specific generated policy options when creating actual policies from the generation results. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;A-Za-z0-9_&#93;*-&#91;a-z0-9_&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rawTextFragment" /></td>
    <td><code>string</code></td>
    <td>The portion of the original natural language input that this generated policy asset addresses. This helps users understand which part of their policy description was translated into this specific Cedar policy statement, enabling better policy selection and refinement. When a single natural language input describes multiple authorization requirements, the generation process creates separate policy assets for each requirement, with each asset's rawTextFragment showing which requirement it addresses. Use this mapping to verify that all parts of your natural language input were correctly translated into Cedar policies.</td>
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
    <td><a href="#list_policy_generation_assets"><CopyableCode code="list_policy_generation_assets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_generation_id"><code>policy_generation_id</code></a>, <a href="#parameter-policy_engine_id"><code>policy_engine_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of generated policy assets from a policy generation request within the AgentCore Policy system. This operation returns the actual Cedar policies and related artifacts produced by the AI-powered policy generation process, allowing users to review and select from multiple generated policy options.</td>
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
    <td>The unique identifier of the policy engine associated with the policy generation request. This provides the context for the generation operation and ensures assets are retrieved from the correct policy engine.</td>
</tr>
<tr id="parameter-policy_generation_id">
    <td><CopyableCode code="policy_generation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the policy generation request whose assets are to be retrieved. This must be a valid generation ID from a previous StartPolicyGeneration call that has completed processing.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of policy generation assets to return in a single response. If not specified, the default is 10 assets per page, with a maximum of 100 per page. This helps control response size when dealing with policy generations that produce many alternative policy options.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous ListPolicyGenerationAssets call. Use this token to retrieve the next page of assets when the response is paginated due to large numbers of generated policy options.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_policy_generation_assets"
    values={[
        { label: 'list_policy_generation_assets', value: 'list_policy_generation_assets' }
    ]}
>
<TabItem value="list_policy_generation_assets">

Retrieves a list of generated policy assets from a policy generation request within the AgentCore Policy system. This operation returns the actual Cedar policies and related artifacts produced by the AI-powered policy generation process, allowing users to review and select from multiple generated policy options.

```sql
SELECT
definition,
findings,
policyGenerationAssetId,
rawTextFragment
FROM aws.bedrock_agentcore_control.policy_generation_assets
WHERE policy_generation_id = '{{ policy_generation_id }}' -- required
AND policy_engine_id = '{{ policy_engine_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
