--- 
title: rule_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - rule_executions
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

Creates, updates, deletes, gets or lists a <code>rule_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rule_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codepipeline.rule_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_rule_executions"
    values={[
        { label: 'list_rule_executions', value: 'list_rule_executions' }
    ]}
>
<TabItem value="list_rule_executions">

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
    <td><CopyableCode code="input" /></td>
    <td><code>object</code></td>
    <td>Input details for the rule execution, such as role ARN, Region, and input artifacts.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the last change to the rule execution, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="output" /></td>
    <td><code>object</code></td>
    <td>Output details for the rule execution, such as the rule execution result.</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineExecutionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the pipeline execution in the stage where the rule was run. Use the GetPipelineState action to retrieve the current pipelineExecutionId of the stage. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipelineVersion" /></td>
    <td><code>integer</code></td>
    <td>The version number of the pipeline with the stage where the rule was run.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleExecutionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the run for the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleName" /></td>
    <td><code>string</code></td>
    <td>The name of the rule that was run in the stage. (pattern: &lt;code&gt;&#91;A-Za-z0-9.@\-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stageName" /></td>
    <td><code>string</code></td>
    <td>The name of the stage where the rule was run. (pattern: &lt;code&gt;&#91;A-Za-z0-9.@\-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the rule execution.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the rule execution. Status categories are InProgress, Succeeded, and Failed. (InProgress, Abandoned, Succeeded, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The ARN of the user who changed the rule execution details.</td>
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
    <td><a href="#list_rule_executions"><CopyableCode code="list_rule_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the rule executions that have occurred in a pipeline configured for conditions with rules.</td>
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
    defaultValue="list_rule_executions"
    values={[
        { label: 'list_rule_executions', value: 'list_rule_executions' }
    ]}
>
<TabItem value="list_rule_executions">

Lists the rule executions that have occurred in a pipeline configured for conditions with rules.

```sql
SELECT
input,
lastUpdateTime,
output,
pipelineExecutionId,
pipelineVersion,
ruleExecutionId,
ruleName,
stageName,
startTime,
status,
updatedBy
FROM aws.codepipeline.rule_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
