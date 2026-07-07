--- 
title: plans
hide_title: false
hide_table_of_contents: false
keywords:
  - plans
  - arc_region_switch
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

Creates, updates, deletes, gets or lists a <code>plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.arc_region_switch.plans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_plan"
    values={[
        { label: 'get_plan', value: 'get_plan' },
        { label: 'list_plans', value: 'list_plans' }
    ]}
>
<TabItem value="get_plan">

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
    <td>The name for a plan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(?:&#91;a-zA-Z0-9-&#93;&#123;0,30&#125;&#91;a-zA-Z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the plan. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z-&#93;*:arc-region-switch::&#91;0-9&#93;&#123;12&#125;:plan/(&#91;a-zA-Z0-9&#93;(?:&#91;a-zA-Z0-9-&#93;&#123;0,30&#125;&#91;a-zA-Z0-9&#93;)?):(&#91;a-z0-9&#93;&#123;6&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="associatedAlarms" /></td>
    <td><code>object</code></td>
    <td>The associated application health alarms for a plan.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for a plan.</td>
</tr>
<tr>
    <td><CopyableCode code="executionRole" /></td>
    <td><code>string</code></td>
    <td>The execution role for a plan. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z0-9-&#93;*:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of a plan. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="primaryRegion" /></td>
    <td><code>string</code></td>
    <td>The primary Region for a plan. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;-&#91;a-z-&#93;+-\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recoveryApproach" /></td>
    <td><code>string</code></td>
    <td>The recovery approach for a Region switch plan, which can be active/active (activeActive) or active/passive (activePassive). (activeActive, activePassive)</td>
</tr>
<tr>
    <td><CopyableCode code="recoveryTimeObjectiveMinutes" /></td>
    <td><code>integer</code></td>
    <td>The recovery time objective for a plan.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services Regions for a plan.</td>
</tr>
<tr>
    <td><CopyableCode code="reportConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration for automatic report generation for plan executions. When configured, Region switch automatically generates a report after each plan execution that includes execution events, plan configuration, and CloudWatch alarm states.</td>
</tr>
<tr>
    <td><CopyableCode code="triggers" /></td>
    <td><code>array</code></td>
    <td>The triggers for a plan.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the plan was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version for the plan.</td>
</tr>
<tr>
    <td><CopyableCode code="workflows" /></td>
    <td><code>array</code></td>
    <td>The workflows for a plan.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_plans">

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
    <td>The name of a Region switch plan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(?:&#91;a-zA-Z0-9-&#93;&#123;0,30&#125;&#91;a-zA-Z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="activePlanExecution" /></td>
    <td><code>string</code></td>
    <td>Specifies if this is the active plan execution at this time.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Region switch plan. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z-&#93;*:arc-region-switch::&#91;0-9&#93;&#123;12&#125;:plan/(&#91;a-zA-Z0-9&#93;(?:&#91;a-zA-Z0-9-&#93;&#123;0,30&#125;&#91;a-zA-Z0-9&#93;)?):(&#91;a-z0-9&#93;&#123;6&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of a Region switch plan.</td>
</tr>
<tr>
    <td><CopyableCode code="executionRole" /></td>
    <td><code>string</code></td>
    <td>The execution role is a way to categorize a Region switch plan.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of a Region switch plan. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="primaryRegion" /></td>
    <td><code>string</code></td>
    <td>The primary Region for a plan. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;-&#91;a-z-&#93;+-\d+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recoveryApproach" /></td>
    <td><code>string</code></td>
    <td>The recovery approach for a Region switch plan, which can be active/active (activeActive) or active/passive (activePassive). (activeActive, activePassive)</td>
</tr>
<tr>
    <td><CopyableCode code="recoveryTimeObjectiveMinutes" /></td>
    <td><code>integer</code></td>
    <td>The recovery time objective that you've specified.</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services Region specified for a Region switch plan.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the plan execution was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version for the plan.</td>
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
    <td><a href="#get_plan"><CopyableCode code="get_plan" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a Region switch plan. You must specify the ARN of the plan.</td>
</tr>
<tr>
    <td><a href="#list_plans"><CopyableCode code="list_plans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all Region switch plans in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_plan"><CopyableCode code="create_plan" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-workflows"><code>workflows</code></a>, <a href="#parameter-executionRole"><code>executionRole</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-regions"><code>regions</code></a>, <a href="#parameter-recoveryApproach"><code>recoveryApproach</code></a></td>
    <td></td>
    <td>Creates a new Region switch plan. A plan defines the steps required to shift traffic from one Amazon Web Services Region to another. You must specify a name for the plan, the primary Region, and at least one additional Region. You can also provide a description, execution role, recovery time objective, associated alarms, triggers, and workflows that define the steps to execute during a Region switch.</td>
</tr>
<tr>
    <td><a href="#update_plan"><CopyableCode code="update_plan" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-workflows"><code>workflows</code></a>, <a href="#parameter-executionRole"><code>executionRole</code></a></td>
    <td></td>
    <td>Updates an existing Region switch plan. You can modify the plan's description, workflows, execution role, recovery time objective, associated alarms, and triggers.</td>
</tr>
<tr>
    <td><a href="#delete_plan"><CopyableCode code="delete_plan" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Region switch plan. You must specify the ARN of the plan to delete. You cannot delete a plan that has an active execution in progress.</td>
</tr>
<tr>
    <td><a href="#cancel_plan_execution"><CopyableCode code="cancel_plan_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-planArn"><code>planArn</code></a>, <a href="#parameter-executionId"><code>executionId</code></a></td>
    <td></td>
    <td>Cancels an in-progress plan execution. This operation stops the execution of the plan and prevents any further steps from being processed. You must specify the plan ARN and execution ID. You can also provide an optional comment explaining why the execution was canceled.</td>
</tr>
<tr>
    <td><a href="#start_plan_execution"><CopyableCode code="start_plan_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-planArn"><code>planArn</code></a>, <a href="#parameter-targetRegion"><code>targetRegion</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Starts the execution of a Region switch plan. You can execute a plan in either graceful or ungraceful mode. Specifing ungraceful mode either changes the behavior of the execution blocks in a workflow or skips specific execution blocks.</td>
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
    defaultValue="get_plan"
    values={[
        { label: 'get_plan', value: 'get_plan' },
        { label: 'list_plans', value: 'list_plans' }
    ]}
>
<TabItem value="get_plan">

Retrieves detailed information about a Region switch plan. You must specify the ARN of the plan.

```sql
SELECT
name,
arn,
associatedAlarms,
description,
executionRole,
owner,
primaryRegion,
recoveryApproach,
recoveryTimeObjectiveMinutes,
regions,
reportConfiguration,
triggers,
updatedAt,
version,
workflows
FROM aws.arc_region_switch.plans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_plans">

Lists all Region switch plans in your Amazon Web Services account.

```sql
SELECT
name,
activePlanExecution,
arn,
description,
executionRole,
owner,
primaryRegion,
recoveryApproach,
recoveryTimeObjectiveMinutes,
regions,
updatedAt,
version
FROM aws.arc_region_switch.plans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_plan"
    values={[
        { label: 'create_plan', value: 'create_plan' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_plan">

Creates a new Region switch plan. A plan defines the steps required to shift traffic from one Amazon Web Services Region to another. You must specify a name for the plan, the primary Region, and at least one additional Region. You can also provide a description, execution role, recovery time objective, associated alarms, triggers, and workflows that define the steps to execute during a Region switch.

```sql
INSERT INTO aws.arc_region_switch.plans (
description,
workflows,
executionRole,
recoveryTimeObjectiveMinutes,
associatedAlarms,
triggers,
reportConfiguration,
name,
regions,
recoveryApproach,
primaryRegion,
tags,
region
)
SELECT 
'{{ description }}',
'{{ workflows }}' /* required */,
'{{ executionRole }}' /* required */,
{{ recoveryTimeObjectiveMinutes }},
'{{ associatedAlarms }}',
'{{ triggers }}',
'{{ reportConfiguration }}',
'{{ name }}' /* required */,
'{{ regions }}' /* required */,
'{{ recoveryApproach }}' /* required */,
'{{ primaryRegion }}',
'{{ tags }}',
'{{ region }}'
RETURNING
plan
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: plans
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the plans resource.
    - name: description
      value: "{{ description }}"
      description: |
        The description of a Region switch plan.
    - name: workflows
      description: |
        An array of workflows included in a Region switch plan.
      value:
        - steps: "{{ steps }}"
          workflowTargetAction: "{{ workflowTargetAction }}"
          workflowTargetRegion: "{{ workflowTargetRegion }}"
          workflowDescription: "{{ workflowDescription }}"
    - name: executionRole
      value: "{{ executionRole }}"
      description: |
        An execution role is a way to categorize a Region switch plan.
    - name: recoveryTimeObjectiveMinutes
      value: {{ recoveryTimeObjectiveMinutes }}
      description: |
        Optionally, you can specify an recovery time objective for a Region switch plan, in minutes.
    - name: associatedAlarms
      value: "{{ associatedAlarms }}"
      description: |
        The alarms associated with a Region switch plan.
    - name: triggers
      description: |
        The triggers associated with a Region switch plan.
      value:
        - description: "{{ description }}"
          targetRegion: "{{ targetRegion }}"
          action: "{{ action }}"
          conditions: "{{ conditions }}"
          minDelayMinutesBetweenExecutions: {{ minDelayMinutesBetweenExecutions }}
    - name: reportConfiguration
      description: |
        Configuration for automatic report generation for plan executions. When configured, Region switch automatically generates a report after each plan execution that includes execution events, plan configuration, and CloudWatch alarm states.
      value:
        reportOutput:
          - s3Configuration:
              bucketPath: "{{ bucketPath }}"
              bucketOwner: "{{ bucketOwner }}"
    - name: name
      value: "{{ name }}"
      description: |
        The name of a Region switch plan.
    - name: regions
      value:
        - "{{ regions }}"
      description: |
        An array that specifies the Amazon Web Services Regions for a Region switch plan. Specify two Regions.
    - name: recoveryApproach
      value: "{{ recoveryApproach }}"
      description: |
        The recovery approach for a Region switch plan, which can be active/active (activeActive) or active/passive (activePassive).
      valid_values: ['activeActive', 'activePassive']
    - name: primaryRegion
      value: "{{ primaryRegion }}"
      description: |
        The primary Amazon Web Services Region for the application. This is the Region where the application normally runs before any Region switch occurs.
    - name: tags
      value: "{{ tags }}"
      description: |
        The tags to apply to the Region switch plan.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_plan"
    values={[
        { label: 'update_plan', value: 'update_plan' }
    ]}
>
<TabItem value="update_plan">

Updates an existing Region switch plan. You can modify the plan's description, workflows, execution role, recovery time objective, associated alarms, and triggers.

```sql
UPDATE aws.arc_region_switch.plans
SET 
arn = '{{ arn }}',
description = '{{ description }}',
workflows = '{{ workflows }}',
executionRole = '{{ executionRole }}',
recoveryTimeObjectiveMinutes = {{ recoveryTimeObjectiveMinutes }},
associatedAlarms = '{{ associatedAlarms }}',
triggers = '{{ triggers }}',
reportConfiguration = '{{ reportConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
AND workflows = '{{ workflows }}' --required
AND executionRole = '{{ executionRole }}' --required
RETURNING
plan;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_plan"
    values={[
        { label: 'delete_plan', value: 'delete_plan' }
    ]}
>
<TabItem value="delete_plan">

Deletes a Region switch plan. You must specify the ARN of the plan to delete. You cannot delete a plan that has an active execution in progress.

```sql
DELETE FROM aws.arc_region_switch.plans
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_plan_execution"
    values={[
        { label: 'cancel_plan_execution', value: 'cancel_plan_execution' },
        { label: 'start_plan_execution', value: 'start_plan_execution' }
    ]}
>
<TabItem value="cancel_plan_execution">

Cancels an in-progress plan execution. This operation stops the execution of the plan and prevents any further steps from being processed. You must specify the plan ARN and execution ID. You can also provide an optional comment explaining why the execution was canceled.

```sql
EXEC aws.arc_region_switch.plans.cancel_plan_execution 
@region='{{ region }}' --required 
@@json=
'{
"planArn": "{{ planArn }}", 
"executionId": "{{ executionId }}", 
"comment": "{{ comment }}"
}'
;
```
</TabItem>
<TabItem value="start_plan_execution">

Starts the execution of a Region switch plan. You can execute a plan in either graceful or ungraceful mode. Specifing ungraceful mode either changes the behavior of the execution blocks in a workflow or skips specific execution blocks.

```sql
EXEC aws.arc_region_switch.plans.start_plan_execution 
@region='{{ region }}' --required 
@@json=
'{
"planArn": "{{ planArn }}", 
"targetRegion": "{{ targetRegion }}", 
"action": "{{ action }}", 
"mode": "{{ mode }}", 
"comment": "{{ comment }}", 
"latestVersion": "{{ latestVersion }}", 
"recoveryExecutionId": "{{ recoveryExecutionId }}"
}'
;
```
</TabItem>
</Tabs>
