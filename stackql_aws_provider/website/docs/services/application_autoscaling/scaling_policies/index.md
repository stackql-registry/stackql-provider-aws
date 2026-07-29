--- 
title: scaling_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - scaling_policies
  - application_autoscaling
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

Creates, updates, deletes, gets or lists a <code>scaling_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scaling_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_autoscaling.scaling_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_scaling_policies"
    values={[
        { label: 'describe_scaling_policies', value: 'describe_scaling_policies' }
    ]}
>
<TabItem value="describe_scaling_policies">

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
    <td><CopyableCode code="alarms" /></td>
    <td><code>array</code></td>
    <td>The CloudWatch alarms associated with the scaling policy.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp for when the scaling policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the scaling policy. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_name" /></td>
    <td><code>string</code></td>
    <td>The name of the scaling policy. (pattern: &lt;code&gt;\p&#123;Print&#125;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_type" /></td>
    <td><code>string</code></td>
    <td>The scaling policy type. The following policy types are supported: TargetTrackingScaling—Not supported for Amazon EMR StepScaling—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or Neptune. PredictiveScaling—Only supported for Amazon ECS (StepScaling, TargetTrackingScaling, PredictiveScaling)</td>
</tr>
<tr>
    <td><CopyableCode code="predictive_scaling_policy_configuration" /></td>
    <td><code>object</code></td>
    <td>The predictive scaling policy configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier. ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/my-cluster/my-service. Spot Fleet - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE. EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0. AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet. DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table. DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index. Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster. SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering. Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository. Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE. Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE. Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1. Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable. Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5. Amazon ElastiCache replication group - The resource type is replication-group and the unique identifier is the replication group name. Example: replication-group/mycluster. Amazon ElastiCache cache cluster - The resource type is cache-cluster and the unique identifier is the cache cluster name. Example: cache-cluster/mycluster. Neptune cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:mycluster. SageMaker serverless endpoint - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering. SageMaker inference component - The resource type is inference-component and the unique identifier is the resource ID. Example: inference-component/my-inference-component. Pool of WorkSpaces - The resource type is workspacespool and the unique identifier is the pool ID. Example: workspacespool/wspool-123456. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scalable_dimension" /></td>
    <td><code>string</code></td>
    <td>The scalable dimension. This string consists of the service namespace, resource type, and scaling property. ecs:service:DesiredCount - The task count of an ECS service. elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group. ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet. appstream:fleet:DesiredCapacity - The capacity of an AppStream 2.0 fleet. dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table. dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table. dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index. dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index. rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition. sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for a SageMaker model endpoint variant. custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service. comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint. comprehend:entity-recognizer-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend entity recognizer endpoint. lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function. cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table. cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table. kafka:broker-storage:VolumeSize - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster. elasticache:cache-cluster:Nodes - The number of nodes for an Amazon ElastiCache cache cluster. elasticache:replication-group:NodeGroups - The number of node groups for an Amazon ElastiCache replication group. elasticache:replication-group:Replicas - The number of replicas per node group for an Amazon ElastiCache replication group. neptune:cluster:ReadReplicaCount - The count of read replicas in an Amazon Neptune DB cluster. sagemaker:variant:DesiredProvisionedConcurrency - The provisioned concurrency for a SageMaker serverless endpoint. sagemaker:inference-component:DesiredCopyCount - The number of copies across an endpoint for a SageMaker inference component. workspaces:workspacespool:DesiredUserSessions - The number of user sessions for the WorkSpaces in the pool. (ecs:service:DesiredCount, ec2:spot-fleet-request:TargetCapacity, elasticmapreduce:instancegroup:InstanceCount, appstream:fleet:DesiredCapacity, dynamodb:table:ReadCapacityUnits, dynamodb:table:WriteCapacityUnits, dynamodb:index:ReadCapacityUnits, dynamodb:index:WriteCapacityUnits, rds:cluster:ReadReplicaCount, sagemaker:variant:DesiredInstanceCount, custom-resource:ResourceType:Property, comprehend:document-classifier-endpoint:DesiredInferenceUnits, comprehend:entity-recognizer-endpoint:DesiredInferenceUnits, lambda:function:ProvisionedConcurrency, cassandra:table:ReadCapacityUnits, cassandra:table:WriteCapacityUnits, kafka:broker-storage:VolumeSize, elasticache:cache-cluster:Nodes, elasticache:replication-group:NodeGroups, elasticache:replication-group:Replicas, neptune:cluster:ReadReplicaCount, sagemaker:variant:DesiredProvisionedConcurrency, sagemaker:inference-component:DesiredCopyCount, workspaces:workspacespool:DesiredUserSessions)</td>
</tr>
<tr>
    <td><CopyableCode code="service_namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the Amazon Web Services service that provides the resource, or a custom-resource. (ecs, elasticmapreduce, ec2, appstream, dynamodb, rds, sagemaker, custom-resource, comprehend, lambda, cassandra, kafka, elasticache, neptune, workspaces)</td>
</tr>
<tr>
    <td><CopyableCode code="step_scaling_policy_configuration" /></td>
    <td><code>object</code></td>
    <td>A step scaling policy.</td>
</tr>
<tr>
    <td><CopyableCode code="target_tracking_scaling_policy_configuration" /></td>
    <td><code>object</code></td>
    <td>A target tracking scaling policy.</td>
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
    <td><a href="#describe_scaling_policies"><CopyableCode code="describe_scaling_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the Application Auto Scaling scaling policies for the specified service namespace. You can filter the results using ResourceId, ScalableDimension, and PolicyNames. For more information, see Target tracking scaling policies and Step scaling policies in the Application Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#put_scaling_policy"><CopyableCode code="put_scaling_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PolicyName"><code>PolicyName</code></a>, <a href="#parameter-ServiceNamespace"><code>ServiceNamespace</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-ScalableDimension"><code>ScalableDimension</code></a></td>
    <td></td>
    <td>Creates or updates a scaling policy for an Application Auto Scaling scalable target. Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy until you have registered the resource as a scalable target. Multiple scaling policies can be in force at the same time for the same scalable target. You can have one or more target tracking scaling policies, one or more step scaling policies, or both. However, there is a chance that multiple policies could conflict, instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives precedence to the policy that provides the largest capacity for both scale out and scale in. For example, if one policy increases capacity by 3, another policy increases capacity by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest calculated capacity (200% of 10 = 20) and scales out to 30. We recommend caution, however, when using target tracking scaling policies with step scaling policies because conflicts between these policies can cause undesirable behavior. For example, if the step scaling policy initiates a scale-in activity before the target tracking policy is ready to scale in, the scale-in activity will not be blocked. After the scale-in activity completes, the target tracking policy could instruct the scalable target to scale out again. For more information, see Target tracking scaling policies, Step scaling policies, and Predictive scaling policies in the Application Auto Scaling User Guide. If a scalable target is deregistered, the scalable target is no longer available to use scaling policies. Any scaling policies that were specified for the scalable target are deleted.</td>
</tr>
<tr>
    <td><a href="#delete_scaling_policy"><CopyableCode code="delete_scaling_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified scaling policy for an Application Auto Scaling scalable target. Deleting a step scaling policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action. For more information, see Delete a step scaling policy and Delete a target tracking scaling policy in the Application Auto Scaling User Guide.</td>
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
    defaultValue="describe_scaling_policies"
    values={[
        { label: 'describe_scaling_policies', value: 'describe_scaling_policies' }
    ]}
>
<TabItem value="describe_scaling_policies">

Describes the Application Auto Scaling scaling policies for the specified service namespace. You can filter the results using ResourceId, ScalableDimension, and PolicyNames. For more information, see Target tracking scaling policies and Step scaling policies in the Application Auto Scaling User Guide.

```sql
SELECT
alarms,
creation_time,
policy_arn,
policy_name,
policy_type,
predictive_scaling_policy_configuration,
resource_id,
scalable_dimension,
service_namespace,
step_scaling_policy_configuration,
target_tracking_scaling_policy_configuration
FROM aws.application_autoscaling.scaling_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_scaling_policy"
    values={[
        { label: 'put_scaling_policy', value: 'put_scaling_policy' }
    ]}
>
<TabItem value="put_scaling_policy">

Creates or updates a scaling policy for an Application Auto Scaling scalable target. Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy until you have registered the resource as a scalable target. Multiple scaling policies can be in force at the same time for the same scalable target. You can have one or more target tracking scaling policies, one or more step scaling policies, or both. However, there is a chance that multiple policies could conflict, instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives precedence to the policy that provides the largest capacity for both scale out and scale in. For example, if one policy increases capacity by 3, another policy increases capacity by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest calculated capacity (200% of 10 = 20) and scales out to 30. We recommend caution, however, when using target tracking scaling policies with step scaling policies because conflicts between these policies can cause undesirable behavior. For example, if the step scaling policy initiates a scale-in activity before the target tracking policy is ready to scale in, the scale-in activity will not be blocked. After the scale-in activity completes, the target tracking policy could instruct the scalable target to scale out again. For more information, see Target tracking scaling policies, Step scaling policies, and Predictive scaling policies in the Application Auto Scaling User Guide. If a scalable target is deregistered, the scalable target is no longer available to use scaling policies. Any scaling policies that were specified for the scalable target are deleted.

```sql
REPLACE aws.application_autoscaling.scaling_policies
SET 
PolicyName = '{{ PolicyName }}',
ServiceNamespace = '{{ ServiceNamespace }}',
ResourceId = '{{ ResourceId }}',
ScalableDimension = '{{ ScalableDimension }}',
PolicyType = '{{ PolicyType }}',
StepScalingPolicyConfiguration = '{{ StepScalingPolicyConfiguration }}',
TargetTrackingScalingPolicyConfiguration = '{{ TargetTrackingScalingPolicyConfiguration }}',
PredictiveScalingPolicyConfiguration = '{{ PredictiveScalingPolicyConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND PolicyName = '{{ PolicyName }}' --required
AND ServiceNamespace = '{{ ServiceNamespace }}' --required
AND ResourceId = '{{ ResourceId }}' --required
AND ScalableDimension = '{{ ScalableDimension }}' --required
RETURNING
alarms,
policy_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scaling_policy"
    values={[
        { label: 'delete_scaling_policy', value: 'delete_scaling_policy' }
    ]}
>
<TabItem value="delete_scaling_policy">

Deletes the specified scaling policy for an Application Auto Scaling scalable target. Deleting a step scaling policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action. For more information, see Delete a step scaling policy and Delete a target tracking scaling policy in the Application Auto Scaling User Guide.

```sql
DELETE FROM aws.application_autoscaling.scaling_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
