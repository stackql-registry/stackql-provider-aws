--- 
title: scaling_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - scaling_plans
  - autoscaling_plans
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

Creates, updates, deletes, gets or lists a <code>scaling_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scaling_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling_plans.scaling_plans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_scaling_plans"
    values={[
        { label: 'describe_scaling_plans', value: 'describe_scaling_plans' }
    ]}
>
<TabItem value="describe_scaling_plans">

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
    <td><CopyableCode code="ApplicationSource" /></td>
    <td><code>object</code></td>
    <td>Represents an application source.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix time stamp when the scaling plan was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ScalingInstructions" /></td>
    <td><code>array</code></td>
    <td>The scaling instructions.</td>
</tr>
<tr>
    <td><CopyableCode code="ScalingPlanName" /></td>
    <td><code>string</code></td>
    <td>The name of the scaling plan. (pattern: &lt;code&gt;&#91;\p&#123;Print&#125;&&&#91;^|:/&#93;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ScalingPlanVersion" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the scaling plan.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusCode" /></td>
    <td><code>string</code></td>
    <td>The status of the scaling plan. Active - The scaling plan is active. ActiveWithProblems - The scaling plan is active, but the scaling configuration for one or more resources could not be applied. CreationInProgress - The scaling plan is being created. CreationFailed - The scaling plan could not be created. DeletionInProgress - The scaling plan is being deleted. DeletionFailed - The scaling plan could not be deleted. UpdateInProgress - The scaling plan is being updated. UpdateFailed - The scaling plan could not be updated. (Active, ActiveWithProblems, CreationInProgress, CreationFailed, DeletionInProgress, DeletionFailed, UpdateInProgress, UpdateFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A simple message about the current status of the scaling plan. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix time stamp when the scaling plan entered the current status.</td>
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
    <td><a href="#describe_scaling_plans"><CopyableCode code="describe_scaling_plans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes one or more of your scaling plans.</td>
</tr>
<tr>
    <td><a href="#create_scaling_plan"><CopyableCode code="create_scaling_plan" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ScalingPlanName"><code>ScalingPlanName</code></a>, <a href="#parameter-ApplicationSource"><code>ApplicationSource</code></a>, <a href="#parameter-ScalingInstructions"><code>ScalingInstructions</code></a></td>
    <td></td>
    <td>Creates a scaling plan.</td>
</tr>
<tr>
    <td><a href="#update_scaling_plan"><CopyableCode code="update_scaling_plan" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ScalingPlanName"><code>ScalingPlanName</code></a>, <a href="#parameter-ScalingPlanVersion"><code>ScalingPlanVersion</code></a></td>
    <td></td>
    <td>Updates the specified scaling plan. You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</td>
</tr>
<tr>
    <td><a href="#delete_scaling_plan"><CopyableCode code="delete_scaling_plan" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified scaling plan. Deleting a scaling plan deletes the underlying ScalingInstruction for all of the scalable resources that are covered by the plan. If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</td>
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
    defaultValue="describe_scaling_plans"
    values={[
        { label: 'describe_scaling_plans', value: 'describe_scaling_plans' }
    ]}
>
<TabItem value="describe_scaling_plans">

Describes one or more of your scaling plans.

```sql
SELECT
ApplicationSource,
CreationTime,
ScalingInstructions,
ScalingPlanName,
ScalingPlanVersion,
StatusCode,
StatusMessage,
StatusStartTime
FROM aws.autoscaling_plans.scaling_plans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_scaling_plan"
    values={[
        { label: 'create_scaling_plan', value: 'create_scaling_plan' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_scaling_plan">

Creates a scaling plan.

```sql
INSERT INTO aws.autoscaling_plans.scaling_plans (
ScalingPlanName,
ApplicationSource,
ScalingInstructions,
region
)
SELECT 
'{{ ScalingPlanName }}' /* required */,
'{{ ApplicationSource }}' /* required */,
'{{ ScalingInstructions }}' /* required */,
'{{ region }}'
RETURNING
ScalingPlanVersion
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scaling_plans
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the scaling_plans resource.
    - name: ScalingPlanName
      value: "{{ ScalingPlanName }}"
      description: |
        The name of the scaling plan. Names cannot contain vertical bars, colons, or forward slashes.
    - name: ApplicationSource
      description: |
        A CloudFormation stack or set of tags. You can create one scaling plan per application source. For more information, see ApplicationSource in the AWS Auto Scaling API Reference.
      value:
        CloudFormationStackARN: "{{ CloudFormationStackARN }}"
        TagFilters:
          - Key: "{{ Key }}"
            Values: "{{ Values }}"
    - name: ScalingInstructions
      description: |
        The scaling instructions. For more information, see ScalingInstruction in the AWS Auto Scaling API Reference.
      value:
        - ServiceNamespace: "{{ ServiceNamespace }}"
          ResourceId: "{{ ResourceId }}"
          ScalableDimension: "{{ ScalableDimension }}"
          MinCapacity: {{ MinCapacity }}
          MaxCapacity: {{ MaxCapacity }}
          TargetTrackingConfigurations: "{{ TargetTrackingConfigurations }}"
          PredefinedLoadMetricSpecification:
            PredefinedLoadMetricType: "{{ PredefinedLoadMetricType }}"
            ResourceLabel: "{{ ResourceLabel }}"
          CustomizedLoadMetricSpecification:
            MetricName: "{{ MetricName }}"
            Namespace: "{{ Namespace }}"
            Dimensions:
              - Name: "{{ Name }}"
                Value: "{{ Value }}"
            Statistic: "{{ Statistic }}"
            Unit: "{{ Unit }}"
          ScheduledActionBufferTime: {{ ScheduledActionBufferTime }}
          PredictiveScalingMaxCapacityBehavior: "{{ PredictiveScalingMaxCapacityBehavior }}"
          PredictiveScalingMaxCapacityBuffer: {{ PredictiveScalingMaxCapacityBuffer }}
          PredictiveScalingMode: "{{ PredictiveScalingMode }}"
          ScalingPolicyUpdateBehavior: "{{ ScalingPolicyUpdateBehavior }}"
          DisableDynamicScaling: {{ DisableDynamicScaling }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_scaling_plan"
    values={[
        { label: 'update_scaling_plan', value: 'update_scaling_plan' }
    ]}
>
<TabItem value="update_scaling_plan">

Updates the specified scaling plan. You cannot update a scaling plan if it is in the process of being created, updated, or deleted.

```sql
UPDATE aws.autoscaling_plans.scaling_plans
SET 
ScalingPlanName = '{{ ScalingPlanName }}',
ScalingPlanVersion = {{ ScalingPlanVersion }},
ApplicationSource = '{{ ApplicationSource }}',
ScalingInstructions = '{{ ScalingInstructions }}'
WHERE 
region = '{{ region }}' --required
AND ScalingPlanName = '{{ ScalingPlanName }}' --required
AND ScalingPlanVersion = '{{ ScalingPlanVersion }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scaling_plan"
    values={[
        { label: 'delete_scaling_plan', value: 'delete_scaling_plan' }
    ]}
>
<TabItem value="delete_scaling_plan">

Deletes the specified scaling plan. Deleting a scaling plan deletes the underlying ScalingInstruction for all of the scalable resources that are covered by the plan. If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.

```sql
DELETE FROM aws.autoscaling_plans.scaling_plans
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
