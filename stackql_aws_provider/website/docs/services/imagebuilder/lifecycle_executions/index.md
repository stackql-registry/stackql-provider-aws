--- 
title: lifecycle_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - lifecycle_executions
  - imagebuilder
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

Creates, updates, deletes, gets or lists a <code>lifecycle_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lifecycle_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.lifecycle_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lifecycle_execution"
    values={[
        { label: 'get_lifecycle_execution', value: 'get_lifecycle_execution' },
        { label: 'list_lifecycle_executions', value: 'list_lifecycle_executions' }
    ]}
>
<TabItem value="get_lifecycle_execution">

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
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the lifecycle runtime instance completed.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleExecutionId" /></td>
    <td><code>string</code></td>
    <td>Identifies the lifecycle policy runtime instance. (pattern: &lt;code&gt;^lce-&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecyclePolicyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the lifecycle policy that ran. (pattern: &lt;code&gt;^arn:aws(?:-&#91;a-z&#93;+)*:imagebuilder:&#91;a-z&#93;&#123;2,&#125;(?:-&#91;a-z&#93;+)+-&#91;0-9&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws):lifecycle-policy/&#91;a-z0-9-_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourcesImpactedSummary" /></td>
    <td><code>object</code></td>
    <td>Contains information about associated resources that are identified for action by the runtime instance of the lifecycle policy.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the lifecycle runtime instance started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>object</code></td>
    <td>Runtime state that reports if the policy action ran successfully, failed, or was skipped.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_lifecycle_executions">

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
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the lifecycle runtime instance completed.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleExecutionId" /></td>
    <td><code>string</code></td>
    <td>Identifies the lifecycle policy runtime instance. (pattern: &lt;code&gt;^lce-&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecyclePolicyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the lifecycle policy that ran. (pattern: &lt;code&gt;^arn:aws(?:-&#91;a-z&#93;+)*:imagebuilder:&#91;a-z&#93;&#123;2,&#125;(?:-&#91;a-z&#93;+)+-&#91;0-9&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws):lifecycle-policy/&#91;a-z0-9-_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourcesImpactedSummary" /></td>
    <td><code>object</code></td>
    <td>Contains information about associated resources that are identified for action by the runtime instance of the lifecycle policy.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the lifecycle runtime instance started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>object</code></td>
    <td>Runtime state that reports if the policy action ran successfully, failed, or was skipped.</td>
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
    <td><a href="#get_lifecycle_execution"><CopyableCode code="get_lifecycle_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-lifecycleExecutionId"><code>lifecycleExecutionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the runtime information that was logged for a specific runtime instance of the lifecycle policy.</td>
</tr>
<tr>
    <td><a href="#list_lifecycle_executions"><CopyableCode code="list_lifecycle_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the lifecycle runtime history for the specified resource.</td>
</tr>
<tr>
    <td><a href="#cancel_lifecycle_execution"><CopyableCode code="cancel_lifecycle_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-lifecycleExecutionId"><code>lifecycleExecutionId</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Cancel a specific image lifecycle policy runtime instance.</td>
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
<tr id="parameter-lifecycleExecutionId">
    <td><CopyableCode code="lifecycleExecutionId" /></td>
    <td><code>string</code></td>
    <td>Use the unique identifier for a runtime instance of the lifecycle policy to get runtime details.</td>
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
    defaultValue="get_lifecycle_execution"
    values={[
        { label: 'get_lifecycle_execution', value: 'get_lifecycle_execution' },
        { label: 'list_lifecycle_executions', value: 'list_lifecycle_executions' }
    ]}
>
<TabItem value="get_lifecycle_execution">

Get the runtime information that was logged for a specific runtime instance of the lifecycle policy.

```sql
SELECT
endTime,
lifecycleExecutionId,
lifecyclePolicyArn,
resourcesImpactedSummary,
startTime,
state
FROM aws.imagebuilder.lifecycle_executions
WHERE lifecycleExecutionId = '{{ lifecycleExecutionId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_lifecycle_executions">

Get the lifecycle runtime history for the specified resource.

```sql
SELECT
endTime,
lifecycleExecutionId,
lifecyclePolicyArn,
resourcesImpactedSummary,
startTime,
state
FROM aws.imagebuilder.lifecycle_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_lifecycle_execution"
    values={[
        { label: 'cancel_lifecycle_execution', value: 'cancel_lifecycle_execution' }
    ]}
>
<TabItem value="cancel_lifecycle_execution">

Cancel a specific image lifecycle policy runtime instance.

```sql
EXEC aws.imagebuilder.lifecycle_executions.cancel_lifecycle_execution 
@region='{{ region }}' --required 
@@json=
'{
"lifecycleExecutionId": "{{ lifecycleExecutionId }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
