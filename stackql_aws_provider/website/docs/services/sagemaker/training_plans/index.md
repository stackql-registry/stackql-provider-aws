--- 
title: training_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - training_plans
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>training_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="training_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.training_plans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_training_plan"
    values={[
        { label: 'describe_training_plan', value: 'describe_training_plan' },
        { label: 'list_training_plans', value: 'list_training_plans' }
    ]}
>
<TabItem value="describe_training_plan">

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
    <td><CopyableCode code="AvailableInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of instances currently available for use in this training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailableSpareInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of available spare instances in the training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrencyCode" /></td>
    <td><code>string</code></td>
    <td>The currency code for the upfront fee (e.g., USD).</td>
</tr>
<tr>
    <td><CopyableCode code="DurationHours" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of whole hours in the total duration for this training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="DurationMinutes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The additional minutes beyond whole hours in the total duration for this training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="InUseInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of instances currently in use from this training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservedCapacitySummaries" /></td>
    <td><code>array</code></td>
    <td>The list of Reserved Capacity providing the underlying compute resources of the plan.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the training plan (e.g., Pending, Active, Expired). To see the complete list of status values available for a training plan, refer to the Status attribute within the TrainingPlanSummary object. (Pending, Active, Scheduled, Expired, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A message providing additional information about the current status of the training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetResources" /></td>
    <td><code>array</code></td>
    <td>The target resources (e.g., SageMaker Training Jobs, SageMaker HyperPod, SageMaker Endpoints, Studio apps) that can use this training plan. Training plans are specific to their target resource. A training plan designed for SageMaker training jobs can only be used to schedule and run training jobs. A training plan for HyperPod clusters can be used exclusively to provide compute resources to a cluster's instance group. A training plan for SageMaker endpoints can be used exclusively to provide compute resources to SageMaker endpoints for model deployment. A training plan for Studio apps can be used to launch JupyterLab and Code Editor apps on reserved training plan capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of instances reserved in this training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalUltraServerCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of UltraServers reserved to this training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingPlanArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN); of the training plan. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:training-plan/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingPlanName" /></td>
    <td><code>string</code></td>
    <td>The name of the training plan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UnhealthyInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of instances in the training plan that are currently in an unhealthy state.</td>
</tr>
<tr>
    <td><CopyableCode code="UpfrontFee" /></td>
    <td><code>string</code></td>
    <td>The upfront fee for the training plan.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_training_plans">

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
    <td><CopyableCode code="AvailableInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of instances currently available for use in this training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrencyCode" /></td>
    <td><code>string</code></td>
    <td>The currency code for the upfront fee (e.g., USD).</td>
</tr>
<tr>
    <td><CopyableCode code="DurationHours" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of whole hours in the total duration for this training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="DurationMinutes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The additional minutes beyond whole hours in the total duration for this training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="InUseInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of instances currently in use from this training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservedCapacitySummaries" /></td>
    <td><code>array</code></td>
    <td>A list of reserved capacities associated with this training plan, including details such as instance types, counts, and availability zones.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the training plan (e.g., Pending, Active, Expired). To see the complete list of status values available for a training plan, refer to the Status attribute within the TrainingPlanSummary object. (Pending, Active, Scheduled, Expired, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A message providing additional information about the current status of the training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetResources" /></td>
    <td><code>array</code></td>
    <td>The target resources (e.g., training jobs, HyperPod clusters, Endpoints, Studio apps) that can use this training plan. Training plans are specific to their target resource. A training plan designed for SageMaker training jobs can only be used to schedule and run training jobs. A training plan for HyperPod clusters can be used exclusively to provide compute resources to a cluster's instance group. A training plan for SageMaker endpoints can be used exclusively to provide compute resources to SageMaker endpoints for model deployment. A training plan for Studio apps can be used to launch JupyterLab and Code Editor apps on reserved training plan capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of instances reserved in this training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalUltraServerCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of UltraServers allocated to this training plan.</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingPlanArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN); of the training plan. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:training-plan/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TrainingPlanName" /></td>
    <td><code>string</code></td>
    <td>The name of the training plan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,63&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UpfrontFee" /></td>
    <td><code>string</code></td>
    <td>The upfront fee for the training plan.</td>
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
    <td><a href="#describe_training_plan"><CopyableCode code="describe_training_plan" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific training plan.</td>
</tr>
<tr>
    <td><a href="#list_training_plans"><CopyableCode code="list_training_plans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of training plans for the current account.</td>
</tr>
<tr>
    <td><a href="#create_training_plan"><CopyableCode code="create_training_plan" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrainingPlanName"><code>TrainingPlanName</code></a>, <a href="#parameter-TrainingPlanOfferingId"><code>TrainingPlanOfferingId</code></a></td>
    <td></td>
    <td>Creates a new training plan in SageMaker to reserve compute capacity. Amazon SageMaker Training Plan is a capability within SageMaker that allows customers to reserve and manage GPU capacity for large-scale AI model training. It provides a way to secure predictable access to computational resources within specific timelines and budgets, without the need to manage underlying infrastructure. How it works Plans can be created for specific resources such as SageMaker Training Jobs or SageMaker HyperPod clusters, automatically provisioning resources, setting up infrastructure, executing workloads, and handling infrastructure failures. Plan creation workflow Users search for available plan offerings based on their requirements (e.g., instance type, count, start time, duration) using the SearchTrainingPlanOfferings API operation. They create a plan that best matches their needs using the ID of the plan offering they want to use. After successful upfront payment, the plan's status becomes Scheduled. The plan can be used to: Queue training jobs. Allocate to an instance group of a SageMaker HyperPod cluster. When the plan start date arrives, it becomes Active. Based on available reserved capacity: Training jobs are launched. Instance groups are provisioned. Plan composition A plan can consist of one or more Reserved Capacities, each defined by a specific instance type, quantity, Availability Zone, duration, and start and end times. For more information about Reserved Capacity, see ReservedCapacitySummary .</td>
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
    defaultValue="describe_training_plan"
    values={[
        { label: 'describe_training_plan', value: 'describe_training_plan' },
        { label: 'list_training_plans', value: 'list_training_plans' }
    ]}
>
<TabItem value="describe_training_plan">

Retrieves detailed information about a specific training plan.

```sql
SELECT
AvailableInstanceCount,
AvailableSpareInstanceCount,
CurrencyCode,
DurationHours,
DurationMinutes,
EndTime,
InUseInstanceCount,
ReservedCapacitySummaries,
StartTime,
Status,
StatusMessage,
TargetResources,
TotalInstanceCount,
TotalUltraServerCount,
TrainingPlanArn,
TrainingPlanName,
UnhealthyInstanceCount,
UpfrontFee
FROM aws.sagemaker.training_plans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_training_plans">

Retrieves a list of training plans for the current account.

```sql
SELECT
AvailableInstanceCount,
CurrencyCode,
DurationHours,
DurationMinutes,
EndTime,
InUseInstanceCount,
ReservedCapacitySummaries,
StartTime,
Status,
StatusMessage,
TargetResources,
TotalInstanceCount,
TotalUltraServerCount,
TrainingPlanArn,
TrainingPlanName,
UpfrontFee
FROM aws.sagemaker.training_plans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_training_plan"
    values={[
        { label: 'create_training_plan', value: 'create_training_plan' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_training_plan">

Creates a new training plan in SageMaker to reserve compute capacity. Amazon SageMaker Training Plan is a capability within SageMaker that allows customers to reserve and manage GPU capacity for large-scale AI model training. It provides a way to secure predictable access to computational resources within specific timelines and budgets, without the need to manage underlying infrastructure. How it works Plans can be created for specific resources such as SageMaker Training Jobs or SageMaker HyperPod clusters, automatically provisioning resources, setting up infrastructure, executing workloads, and handling infrastructure failures. Plan creation workflow Users search for available plan offerings based on their requirements (e.g., instance type, count, start time, duration) using the SearchTrainingPlanOfferings API operation. They create a plan that best matches their needs using the ID of the plan offering they want to use. After successful upfront payment, the plan's status becomes Scheduled. The plan can be used to: Queue training jobs. Allocate to an instance group of a SageMaker HyperPod cluster. When the plan start date arrives, it becomes Active. Based on available reserved capacity: Training jobs are launched. Instance groups are provisioned. Plan composition A plan can consist of one or more Reserved Capacities, each defined by a specific instance type, quantity, Availability Zone, duration, and start and end times. For more information about Reserved Capacity, see ReservedCapacitySummary .

```sql
INSERT INTO aws.sagemaker.training_plans (
TrainingPlanName,
TrainingPlanOfferingId,
SpareInstanceCountPerUltraServer,
Tags,
region
)
SELECT 
'{{ TrainingPlanName }}' /* required */,
'{{ TrainingPlanOfferingId }}' /* required */,
{{ SpareInstanceCountPerUltraServer }},
'{{ Tags }}',
'{{ region }}'
RETURNING
TrainingPlanArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: training_plans
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the training_plans resource.
    - name: TrainingPlanName
      value: "{{ TrainingPlanName }}"
      description: |
        The name of the training plan to create.
    - name: TrainingPlanOfferingId
      value: "{{ TrainingPlanOfferingId }}"
      description: |
        The unique identifier of the training plan offering to use for creating this plan.
    - name: SpareInstanceCountPerUltraServer
      value: {{ SpareInstanceCountPerUltraServer }}
      description: |
        Number of spare instances to reserve per UltraServer for enhanced resiliency. Default is 1.
    - name: Tags
      description: |
        An array of key-value pairs to apply to this training plan.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>
