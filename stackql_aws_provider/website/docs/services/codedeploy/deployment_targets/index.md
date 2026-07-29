--- 
title: deployment_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_targets
  - codedeploy
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

Creates, updates, deletes, gets or lists a <code>deployment_targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployment_targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codedeploy.deployment_targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_deployment_targets"
    values={[
        { label: 'batch_get_deployment_targets', value: 'batch_get_deployment_targets' },
        { label: 'get_deployment_target', value: 'get_deployment_target' },
        { label: 'list_deployment_targets', value: 'list_deployment_targets' }
    ]}
>
<TabItem value="batch_get_deployment_targets">

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
    <td><CopyableCode code="deployment_targets" /></td>
    <td><code>array</code></td>
    <td>A list of target objects for a deployment. Each target object contains details about the target, such as its status and lifecycle events. The type of the target objects depends on the deployment' compute platform. EC2/On-premises: Each target object is an Amazon EC2 or on-premises instance. Lambda: The target object is a specific version of an Lambda function. Amazon ECS: The target object is an Amazon ECS service. CloudFormation: The target object is an CloudFormation blue/green deployment.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_deployment_target">

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
    <td><CopyableCode code="cloud_formation_target" /></td>
    <td><code>object</code></td>
    <td>Information about the target to be updated by an CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_target_type" /></td>
    <td><code>string</code></td>
    <td>The deployment type that is specific to the deployment's compute platform or deployments initiated by a CloudFormation stack update. (InstanceTarget, LambdaTarget, ECSTarget, CloudFormationTarget)</td>
</tr>
<tr>
    <td><CopyableCode code="ecs_target" /></td>
    <td><code>object</code></td>
    <td>Information about the target for a deployment that uses the Amazon ECS compute platform.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_target" /></td>
    <td><code>object</code></td>
    <td>Information about the target for a deployment that uses the EC2/On-premises compute platform.</td>
</tr>
<tr>
    <td><CopyableCode code="lambda_target" /></td>
    <td><code>object</code></td>
    <td>Information about the target for a deployment that uses the Lambda compute platform.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_deployment_targets">

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
    <td><CopyableCode code="target_id" /></td>
    <td><code>string</code></td>
    <td>The unique IDs of deployment targets.</td>
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
    <td><a href="#batch_get_deployment_targets"><CopyableCode code="batch_get_deployment_targets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated BatchGetDeploymentInstances. The maximum number of targets that can be returned is 25. The type of targets returned depends on the deployment's compute platform or deployment method: EC2/On-premises: Information about Amazon EC2 instance targets. Lambda: Information about Lambda functions targets. Amazon ECS: Information about Amazon ECS service targets. CloudFormation: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</td>
</tr>
<tr>
    <td><a href="#get_deployment_target"><CopyableCode code="get_deployment_target" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a deployment target.</td>
</tr>
<tr>
    <td><a href="#list_deployment_targets"><CopyableCode code="list_deployment_targets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of target IDs that are associated a deployment.</td>
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
    defaultValue="batch_get_deployment_targets"
    values={[
        { label: 'batch_get_deployment_targets', value: 'batch_get_deployment_targets' },
        { label: 'get_deployment_target', value: 'get_deployment_target' },
        { label: 'list_deployment_targets', value: 'list_deployment_targets' }
    ]}
>
<TabItem value="batch_get_deployment_targets">

Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated BatchGetDeploymentInstances. The maximum number of targets that can be returned is 25. The type of targets returned depends on the deployment's compute platform or deployment method: EC2/On-premises: Information about Amazon EC2 instance targets. Lambda: Information about Lambda functions targets. Amazon ECS: Information about Amazon ECS service targets. CloudFormation: Information about targets of blue/green deployments initiated by a CloudFormation stack update.

```sql
SELECT
deployment_targets
FROM aws.codedeploy.deployment_targets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_deployment_target">

Returns information about a deployment target.

```sql
SELECT
cloud_formation_target,
deployment_target_type,
ecs_target,
instance_target,
lambda_target
FROM aws.codedeploy.deployment_targets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_deployment_targets">

Returns an array of target IDs that are associated a deployment.

```sql
SELECT
target_id
FROM aws.codedeploy.deployment_targets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
