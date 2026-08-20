--- 
title: recovery_plan_execution_steps
hide_title: false
hide_table_of_contents: false
keywords:
  - recovery_plan_execution_steps
  - drs
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

Creates, updates, deletes, gets or lists a <code>recovery_plan_execution_steps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recovery_plan_execution_steps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.drs.recovery_plan_execution_steps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recovery_plan_execution_step"
    values={[
        { label: 'get_recovery_plan_execution_step', value: 'get_recovery_plan_execution_step' },
        { label: 'list_recovery_plan_execution_steps', value: 'list_recovery_plan_execution_steps' }
    ]}
>
<TabItem value="get_recovery_plan_execution_step">

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
    <td><CopyableCode code="attempt" /></td>
    <td><code>integer</code></td>
    <td>The number of times this step has been attempted.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Type-specific configuration for an execution step response. Mirrors RecoveryPlanStepConfiguration but uses execution-enriched server shapes.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the execution step was created. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_detail" /></td>
    <td><code>object</code></td>
    <td>Error details if the step failed.</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_plan_execution_step_arn" /></td>
    <td><code>string</code></td>
    <td>Strict ARN type for Recovery Plan resources. Only allows safe characters in the resource portion — rejects HTML/script injection characters (&lt;, &gt;, ", ', etc.) per AWS API input validation standards. Resource portion allows: &#91;A-Za-z0-9_/.-&#93; which covers all DRS recovery plan resource identifiers (plan-xxx, st-xxx, exec-xxx, step-xxx). (pattern: &lt;code&gt;arn:aws(-&#91;a-z0-9&#93;+)*:drs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:&#91;a-zA-Z0-9_/.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the execution step. (NOT_STARTED, EXECUTING, WAITING, COMPLETED, FAILED, TIMED_OUT, SKIPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="step_index" /></td>
    <td><code>integer</code></td>
    <td>The order of a step within a Recovery Plan (1-based).</td>
</tr>
<tr>
    <td><CopyableCode code="step_name" /></td>
    <td><code>string</code></td>
    <td>The name of a Recovery Plan Step. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9 _-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the execution step was last updated. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_recovery_plan_execution_steps">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Type-specific configuration for an execution step response. Mirrors RecoveryPlanStepConfiguration but uses execution-enriched server shapes.</td>
</tr>
<tr>
    <td><CopyableCode code="error_detail" /></td>
    <td><code>object</code></td>
    <td>Error details if the step failed.</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_plan_execution_step_arn" /></td>
    <td><code>string</code></td>
    <td>Strict ARN type for Recovery Plan resources. Only allows safe characters in the resource portion — rejects HTML/script injection characters (&lt;, &gt;, ", ', etc.) per AWS API input validation standards. Resource portion allows: &#91;A-Za-z0-9_/.-&#93; which covers all DRS recovery plan resource identifiers (plan-xxx, st-xxx, exec-xxx, step-xxx). (pattern: &lt;code&gt;arn:aws(-&#91;a-z0-9&#93;+)*:drs:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:&#91;a-zA-Z0-9_/.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the execution step. (NOT_STARTED, EXECUTING, WAITING, COMPLETED, FAILED, TIMED_OUT, SKIPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="step_index" /></td>
    <td><code>integer</code></td>
    <td>The order of a step within a Recovery Plan (1-based).</td>
</tr>
<tr>
    <td><CopyableCode code="step_name" /></td>
    <td><code>string</code></td>
    <td>The name of a Recovery Plan Step. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9 _-&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_recovery_plan_execution_step"><CopyableCode code="get_recovery_plan_execution_step" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of a step within a Recovery Plan execution.</td>
</tr>
<tr>
    <td><a href="#list_recovery_plan_execution_steps"><CopyableCode code="list_recovery_plan_execution_steps" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all steps within a Recovery Plan execution.</td>
</tr>
<tr>
    <td><a href="#update_recovery_plan_execution_step"><CopyableCode code="update_recovery_plan_execution_step" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recoveryPlanExecutionStepArn"><code>recoveryPlanExecutionStepArn</code></a></td>
    <td></td>
    <td>Updates an execution step. Supports two actions: (1) skip a step that is in NOT_STARTED or FAILED status; (2) update the wait duration of a WAIT type step that is in NOT_STARTED status.</td>
</tr>
<tr>
    <td><a href="#retry_recovery_plan_execution_step"><CopyableCode code="retry_recovery_plan_execution_step" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recoveryPlanExecutionStepArn"><code>recoveryPlanExecutionStepArn</code></a></td>
    <td></td>
    <td>Retries a failed SERVER type execution step.</td>
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
    defaultValue="get_recovery_plan_execution_step"
    values={[
        { label: 'get_recovery_plan_execution_step', value: 'get_recovery_plan_execution_step' },
        { label: 'list_recovery_plan_execution_steps', value: 'list_recovery_plan_execution_steps' }
    ]}
>
<TabItem value="get_recovery_plan_execution_step">

Gets the details of a step within a Recovery Plan execution.

```sql
SELECT
attempt,
configuration,
created_at,
error_detail,
recovery_plan_execution_step_arn,
status,
step_index,
step_name,
updated_at
FROM aws.drs.recovery_plan_execution_steps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_recovery_plan_execution_steps">

Lists all steps within a Recovery Plan execution.

```sql
SELECT
configuration,
error_detail,
recovery_plan_execution_step_arn,
status,
step_index,
step_name
FROM aws.drs.recovery_plan_execution_steps
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_recovery_plan_execution_step"
    values={[
        { label: 'update_recovery_plan_execution_step', value: 'update_recovery_plan_execution_step' }
    ]}
>
<TabItem value="update_recovery_plan_execution_step">

Updates an execution step. Supports two actions: (1) skip a step that is in NOT_STARTED or FAILED status; (2) update the wait duration of a WAIT type step that is in NOT_STARTED status.

```sql
UPDATE aws.drs.recovery_plan_execution_steps
SET 
recoveryPlanExecutionStepArn = '{{ recoveryPlanExecutionStepArn }}',
status = '{{ status }}',
servers = '{{ servers }}',
waitDurationMinutes = {{ waitDurationMinutes }}
WHERE 
region = '{{ region }}' --required
AND recoveryPlanExecutionStepArn = '{{ recoveryPlanExecutionStepArn }}' --required
RETURNING
recovery_plan_execution_step;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="retry_recovery_plan_execution_step"
    values={[
        { label: 'retry_recovery_plan_execution_step', value: 'retry_recovery_plan_execution_step' }
    ]}
>
<TabItem value="retry_recovery_plan_execution_step">

Retries a failed SERVER type execution step.

```sql
EXEC aws.drs.recovery_plan_execution_steps.retry_recovery_plan_execution_step 
@region='{{ region }}' --required 
@@json=
'{
"recoveryPlanExecutionStepArn": "{{ recoveryPlanExecutionStepArn }}"
}'
;
```
</TabItem>
</Tabs>
