--- 
title: scaling_plan_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - scaling_plan_resources
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

Creates, updates, deletes, gets or lists a <code>scaling_plan_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scaling_plan_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling_plans.scaling_plan_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_scaling_plan_resources"
    values={[
        { label: 'describe_scaling_plan_resources', value: 'describe_scaling_plan_resources' }
    ]}
>
<TabItem value="describe_scaling_plan_resources">

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
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource. This string consists of the resource type and unique identifier. Auto Scaling group - The resource type is autoScalingGroup and the unique identifier is the name of the Auto Scaling group. Example: autoScalingGroup/my-asg. ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp. Spot Fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE. DynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table. DynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index. Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ScalableDimension" /></td>
    <td><code>string</code></td>
    <td>The scalable dimension for the resource. autoscaling:autoScalingGroup:DesiredCapacity - The desired capacity of an Auto Scaling group. ecs:service:DesiredCount - The desired task count of an ECS service. ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet request. dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table. dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table. dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index. dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index. rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition. (autoscaling:autoScalingGroup:DesiredCapacity, ecs:service:DesiredCount, ec2:spot-fleet-request:TargetCapacity, rds:cluster:ReadReplicaCount, dynamodb:table:ReadCapacityUnits, dynamodb:table:WriteCapacityUnits, dynamodb:index:ReadCapacityUnits, dynamodb:index:WriteCapacityUnits)</td>
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
    <td><CopyableCode code="ScalingPolicies" /></td>
    <td><code>array</code></td>
    <td>The scaling policies.</td>
</tr>
<tr>
    <td><CopyableCode code="ScalingStatusCode" /></td>
    <td><code>string</code></td>
    <td>The scaling status of the resource. Active - The scaling configuration is active. Inactive - The scaling configuration is not active because the scaling plan is being created or the scaling configuration could not be applied. Check the status message for more information. PartiallyActive - The scaling configuration is partially active because the scaling plan is being created or deleted or the scaling configuration could not be fully applied. Check the status message for more information. (Inactive, PartiallyActive, Active)</td>
</tr>
<tr>
    <td><CopyableCode code="ScalingStatusMessage" /></td>
    <td><code>string</code></td>
    <td>A simple message about the current scaling status of the resource. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceNamespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the AWS service. (autoscaling, ecs, ec2, rds, dynamodb)</td>
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
    <td><a href="#describe_scaling_plan_resources"><CopyableCode code="describe_scaling_plan_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the scalable resources in the specified scaling plan.</td>
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
    defaultValue="describe_scaling_plan_resources"
    values={[
        { label: 'describe_scaling_plan_resources', value: 'describe_scaling_plan_resources' }
    ]}
>
<TabItem value="describe_scaling_plan_resources">

Describes the scalable resources in the specified scaling plan.

```sql
SELECT
ResourceId,
ScalableDimension,
ScalingPlanName,
ScalingPlanVersion,
ScalingPolicies,
ScalingStatusCode,
ScalingStatusMessage,
ServiceNamespace
FROM aws.autoscaling_plans.scaling_plan_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
