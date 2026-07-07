--- 
title: automated_reasoning_policy_annotations
hide_title: false
hide_table_of_contents: false
keywords:
  - automated_reasoning_policy_annotations
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

Creates, updates, deletes, gets or lists an <code>automated_reasoning_policy_annotations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automated_reasoning_policy_annotations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.automated_reasoning_policy_annotations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_automated_reasoning_policy_annotations"
    values={[
        { label: 'get_automated_reasoning_policy_annotations', value: 'get_automated_reasoning_policy_annotations' }
    ]}
>
<TabItem value="get_automated_reasoning_policy_annotations">

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
    <td>The name of the Automated Reasoning policy. (pattern: &lt;code&gt;&#91;0-9a-zA-Z-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="annotationSetHash" /></td>
    <td><code>string</code></td>
    <td>A hash value representing the current state of the annotations. This is used for optimistic concurrency control when updating annotations. (pattern: &lt;code&gt;&#91;0-9a-z&#93;&#123;128&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="annotations" /></td>
    <td><code>array</code></td>
    <td>The current set of annotations containing rules, variables, and types extracted from the source documents. These can be modified before finalizing the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="buildWorkflowId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the build workflow. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-?&#91;a-f0-9&#93;&#123;4&#125;-?4&#91;a-f0-9&#93;&#123;3&#125;-?&#91;89ab&#93;&#91;a-f0-9&#93;&#123;3&#125;-?&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Automated Reasoning policy. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:automated-reasoning-policy/&#91;a-z0-9&#93;&#123;12&#125;(:(&#91;1-9&#93;&#91;0-9&#93;&#123;0,11&#125;))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the annotations were last updated.</td>
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
    <td><a href="#get_automated_reasoning_policy_annotations"><CopyableCode code="get_automated_reasoning_policy_annotations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-build_workflow_id"><code>build_workflow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current annotations for an Automated Reasoning policy build workflow. Annotations contain corrections to the rules, variables and types to be applied to the policy.</td>
</tr>
<tr>
    <td><a href="#update_automated_reasoning_policy_annotations"><CopyableCode code="update_automated_reasoning_policy_annotations" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-build_workflow_id"><code>build_workflow_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-annotations"><code>annotations</code></a>, <a href="#parameter-lastUpdatedAnnotationSetHash"><code>lastUpdatedAnnotationSetHash</code></a></td>
    <td></td>
    <td>Updates the annotations for an Automated Reasoning policy build workflow. This allows you to modify extracted rules, variables, and types before finalizing the policy.</td>
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
    <td>The unique identifier of the build workflow whose annotations you want to update.</td>
</tr>
<tr id="parameter-policy_arn">
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Automated Reasoning policy whose annotations you want to update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_automated_reasoning_policy_annotations"
    values={[
        { label: 'get_automated_reasoning_policy_annotations', value: 'get_automated_reasoning_policy_annotations' }
    ]}
>
<TabItem value="get_automated_reasoning_policy_annotations">

Retrieves the current annotations for an Automated Reasoning policy build workflow. Annotations contain corrections to the rules, variables and types to be applied to the policy.

```sql
SELECT
name,
annotationSetHash,
annotations,
buildWorkflowId,
policyArn,
updatedAt
FROM aws.bedrock.automated_reasoning_policy_annotations
WHERE policy_arn = '{{ policy_arn }}' -- required
AND build_workflow_id = '{{ build_workflow_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_automated_reasoning_policy_annotations"
    values={[
        { label: 'update_automated_reasoning_policy_annotations', value: 'update_automated_reasoning_policy_annotations' }
    ]}
>
<TabItem value="update_automated_reasoning_policy_annotations">

Updates the annotations for an Automated Reasoning policy build workflow. This allows you to modify extracted rules, variables, and types before finalizing the policy.

```sql
UPDATE aws.bedrock.automated_reasoning_policy_annotations
SET 
annotations = '{{ annotations }}',
lastUpdatedAnnotationSetHash = '{{ lastUpdatedAnnotationSetHash }}'
WHERE 
policy_arn = '{{ policy_arn }}' --required
AND build_workflow_id = '{{ build_workflow_id }}' --required
AND region = '{{ region }}' --required
AND annotations = '{{ annotations }}' --required
AND lastUpdatedAnnotationSetHash = '{{ lastUpdatedAnnotationSetHash }}' --required
RETURNING
annotationSetHash,
buildWorkflowId,
policyArn,
updatedAt;
```
</TabItem>
</Tabs>
