--- 
title: waiting_workflow_steps
hide_title: false
hide_table_of_contents: false
keywords:
  - waiting_workflow_steps
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

Creates, updates, deletes, gets or lists a <code>waiting_workflow_steps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="waiting_workflow_steps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.waiting_workflow_steps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_waiting_workflow_steps"
    values={[
        { label: 'list_waiting_workflow_steps', value: 'list_waiting_workflow_steps' }
    ]}
>
<TabItem value="list_waiting_workflow_steps">

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
    <td>The name of the workflow step. (pattern: &lt;code&gt;^&#91;A-Za-z&#93;&#91;A-Za-z0-9-_&#93;&#123;1,99&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The name of the step action. (pattern: &lt;code&gt;^&#91;A-Za-z&#93;&#91;A-Za-z0-9-_&#93;&#123;1,99&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="image_build_version_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the image build version that ran the workflow. (pattern: &lt;code&gt;^arn:aws&#91;^:&#93;*:imagebuilder:&#91;^:&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws(?:-&#91;a-z-&#93;+)?):image/&#91;a-z0-9-_&#93;+/&#91;0-9&#93;+\.&#91;0-9&#93;+\.&#91;0-9&#93;+/&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the workflow step started.</td>
</tr>
<tr>
    <td><CopyableCode code="step_execution_id" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies the workflow step that ran for the associated image build version. (pattern: &lt;code&gt;^step-&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_build_version_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workflow resource that ran. (pattern: &lt;code&gt;^arn:aws(?:-&#91;a-z&#93;+)*:imagebuilder:&#91;a-z&#93;&#123;2,&#125;(?:-&#91;a-z&#93;+)+-&#91;0-9&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws(?:-&#91;a-z-&#93;+)?):workflow/(build|test|distribution)/&#91;a-z0-9-_&#93;+/&#91;0-9&#93;+\.&#91;0-9&#93;+\.&#91;0-9&#93;+/&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_execution_id" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies the runtime instance of the workflow that contains the workflow step that ran for the associated image build version. (pattern: &lt;code&gt;^wf-&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#list_waiting_workflow_steps"><CopyableCode code="list_waiting_workflow_steps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a list of workflow steps that are waiting for action for workflows in your Amazon Web Services account.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_waiting_workflow_steps"
    values={[
        { label: 'list_waiting_workflow_steps', value: 'list_waiting_workflow_steps' }
    ]}
>
<TabItem value="list_waiting_workflow_steps">

Get a list of workflow steps that are waiting for action for workflows in your Amazon Web Services account.

```sql
SELECT
name,
action,
image_build_version_arn,
start_time,
step_execution_id,
workflow_build_version_arn,
workflow_execution_id
FROM aws.imagebuilder.waiting_workflow_steps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
