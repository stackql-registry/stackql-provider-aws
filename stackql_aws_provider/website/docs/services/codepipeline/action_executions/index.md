--- 
title: action_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - action_executions
  - codepipeline
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

Creates, updates, deletes, gets or lists an <code>action_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="action_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codepipeline.action_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_action_executions"
    values={[
        { label: 'list_action_executions', value: 'list_action_executions' }
    ]}
>
<TabItem value="list_action_executions">

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
    <td><CopyableCode code="action_execution_id" /></td>
    <td><code>string</code></td>
    <td>The action execution ID.</td>
</tr>
<tr>
    <td><CopyableCode code="action_name" /></td>
    <td><code>string</code></td>
    <td>The name of the action. (pattern: &lt;code&gt;&#91;A-Za-z0-9.@\-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="input" /></td>
    <td><code>object</code></td>
    <td>Input details for the action execution, such as role ARN, Region, and input artifacts.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last update time of the action execution.</td>
</tr>
<tr>
    <td><CopyableCode code="output" /></td>
    <td><code>object</code></td>
    <td>Output details for the action execution, such as the action execution result.</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_execution_id" /></td>
    <td><code>string</code></td>
    <td>The pipeline execution ID for the action execution. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_version" /></td>
    <td><code>integer</code></td>
    <td>The version of the pipeline where the action was run.</td>
</tr>
<tr>
    <td><CopyableCode code="stage_name" /></td>
    <td><code>string</code></td>
    <td>The name of the stage that contains the action. (pattern: &lt;code&gt;&#91;A-Za-z0-9.@\-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the action execution.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the action execution. Status categories are InProgress, Succeeded, and Failed. (InProgress, Abandoned, Succeeded, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The ARN of the user who changed the pipeline execution details.</td>
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
    <td><a href="#list_action_executions"><CopyableCode code="list_action_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the action executions that have occurred in a pipeline.</td>
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
    defaultValue="list_action_executions"
    values={[
        { label: 'list_action_executions', value: 'list_action_executions' }
    ]}
>
<TabItem value="list_action_executions">

Lists the action executions that have occurred in a pipeline.

```sql
SELECT
action_execution_id,
action_name,
input,
last_update_time,
output,
pipeline_execution_id,
pipeline_version,
stage_name,
start_time,
status,
updated_by
FROM aws.codepipeline.action_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
