--- 
title: automated_reasoning_policy_build_workflow_result_assets
hide_title: false
hide_table_of_contents: false
keywords:
  - automated_reasoning_policy_build_workflow_result_assets
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

Creates, updates, deletes, gets or lists an <code>automated_reasoning_policy_build_workflow_result_assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automated_reasoning_policy_build_workflow_result_assets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.automated_reasoning_policy_build_workflow_result_assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_automated_reasoning_policy_build_workflow_result_assets"
    values={[
        { label: 'get_automated_reasoning_policy_build_workflow_result_assets', value: 'get_automated_reasoning_policy_build_workflow_result_assets' }
    ]}
>
<TabItem value="get_automated_reasoning_policy_build_workflow_result_assets">

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
    <td><CopyableCode code="build_workflow_assets" /></td>
    <td><code>object</code></td>
    <td>The requested build workflow asset. This is a union type that returns only one of the available asset types (logs, reports, or generated artifacts) based on the specific asset type requested in the API call.</td>
</tr>
<tr>
    <td><CopyableCode code="build_workflow_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the build workflow. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-?&#91;a-f0-9&#93;&#123;4&#125;-?4&#91;a-f0-9&#93;&#123;3&#125;-?&#91;89ab&#93;&#91;a-f0-9&#93;&#123;3&#125;-?&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Automated Reasoning policy. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:automated-reasoning-policy/&#91;a-z0-9&#93;&#123;12&#125;(:(&#91;1-9&#93;&#91;0-9&#93;&#123;0,11&#125;))?&lt;/code&gt;)</td>
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
    <td><a href="#get_automated_reasoning_policy_build_workflow_result_assets"><CopyableCode code="get_automated_reasoning_policy_build_workflow_result_assets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-build_workflow_id"><code>build_workflow_id</code></a>, <a href="#parameter-assetType"><code>assetType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-assetId"><code>assetId</code></a></td>
    <td>Retrieves the resulting assets from a completed Automated Reasoning policy build workflow, including build logs, quality reports, and generated policy artifacts.</td>
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
<tr id="parameter-assetType">
    <td><CopyableCode code="assetType" /></td>
    <td><code>string</code></td>
    <td>The type of asset to retrieve (e.g., BUILD_LOG, QUALITY_REPORT, POLICY_DEFINITION, GENERATED_TEST_CASES, POLICY_SCENARIOS, FIDELITY_REPORT, ASSET_MANIFEST, SOURCE_DOCUMENT).</td>
</tr>
<tr id="parameter-build_workflow_id">
    <td><CopyableCode code="build_workflow_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the build workflow whose result assets you want to retrieve.</td>
</tr>
<tr id="parameter-policy_arn">
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Automated Reasoning policy whose build workflow assets you want to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-assetId">
    <td><CopyableCode code="assetId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the specific asset to retrieve when multiple assets of the same type exist. This is required when retrieving SOURCE_DOCUMENT assets, as multiple source documents may have been used in the workflow. The asset ID can be obtained from the asset manifest.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_automated_reasoning_policy_build_workflow_result_assets"
    values={[
        { label: 'get_automated_reasoning_policy_build_workflow_result_assets', value: 'get_automated_reasoning_policy_build_workflow_result_assets' }
    ]}
>
<TabItem value="get_automated_reasoning_policy_build_workflow_result_assets">

Retrieves the resulting assets from a completed Automated Reasoning policy build workflow, including build logs, quality reports, and generated policy artifacts.

```sql
SELECT
build_workflow_assets,
build_workflow_id,
policy_arn
FROM aws.bedrock.automated_reasoning_policy_build_workflow_result_assets
WHERE policy_arn = '{{ policy_arn }}' -- required
AND build_workflow_id = '{{ build_workflow_id }}' -- required
AND assetType = '{{ assetType }}' -- required
AND region = '{{ region }}' -- required
AND assetId = '{{ assetId }}'
;
```
</TabItem>
</Tabs>
