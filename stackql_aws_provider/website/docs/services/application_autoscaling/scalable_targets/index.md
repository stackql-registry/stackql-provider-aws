--- 
title: scalable_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - scalable_targets
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

Creates, updates, deletes, gets or lists a <code>scalable_targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scalable_targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_autoscaling.scalable_targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_scalable_targets"
    values={[
        { label: 'describe_scalable_targets', value: 'describe_scalable_targets' }
    ]}
>
<TabItem value="describe_scalable_targets">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp for when the scalable target was created.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxCapacity" /></td>
    <td><code>integer</code></td>
    <td>The maximum value to scale to in response to a scale-out activity.</td>
</tr>
<tr>
    <td><CopyableCode code="MinCapacity" /></td>
    <td><code>integer</code></td>
    <td>The minimum value to scale to in response to a scale-in activity.</td>
</tr>
<tr>
    <td><CopyableCode code="PredictedCapacity" /></td>
    <td><code>integer</code></td>
    <td>The predicted capacity of the scalable target.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier. ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/my-cluster/my-service. Spot Fleet - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE. EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0. AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet. DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table. DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index. Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster. SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering. Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository. Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE. Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE. Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1. Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable. Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5. Amazon ElastiCache replication group - The resource type is replication-group and the unique identifier is the replication group name. Example: replication-group/mycluster. Amazon ElastiCache cache cluster - The resource type is cache-cluster and the unique identifier is the cache cluster name. Example: cache-cluster/mycluster. Neptune cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:mycluster. SageMaker serverless endpoint - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering. SageMaker inference component - The resource type is inference-component and the unique identifier is the resource ID. Example: inference-component/my-inference-component. Pool of WorkSpaces - The resource type is workspacespool and the unique identifier is the pool ID. Example: workspacespool/wspool-123456. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleARN" /></td>
    <td><code>string</code></td>
    <td>The ARN of an IAM role that allows Application Auto Scaling to modify the scalable target on your behalf. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ScalableDimension" /></td>
    <td><code>string</code></td>
    <td>The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property. ecs:service:DesiredCount - The task count of an ECS service. elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group. ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet. appstream:fleet:DesiredCapacity - The capacity of an AppStream 2.0 fleet. dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table. dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table. dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index. dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index. rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition. sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for a SageMaker model endpoint variant. custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service. comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint. comprehend:entity-recognizer-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend entity recognizer endpoint. lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function. cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table. cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table. kafka:broker-storage:VolumeSize - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster. elasticache:cache-cluster:Nodes - The number of nodes for an Amazon ElastiCache cache cluster. elasticache:replication-group:NodeGroups - The number of node groups for an Amazon ElastiCache replication group. elasticache:replication-group:Replicas - The number of replicas per node group for an Amazon ElastiCache replication group. neptune:cluster:ReadReplicaCount - The count of read replicas in an Amazon Neptune DB cluster. sagemaker:variant:DesiredProvisionedConcurrency - The provisioned concurrency for a SageMaker serverless endpoint. sagemaker:inference-component:DesiredCopyCount - The number of copies across an endpoint for a SageMaker inference component. workspaces:workspacespool:DesiredUserSessions - The number of user sessions for the WorkSpaces in the pool. (ecs:service:DesiredCount, ec2:spot-fleet-request:TargetCapacity, elasticmapreduce:instancegroup:InstanceCount, appstream:fleet:DesiredCapacity, dynamodb:table:ReadCapacityUnits, dynamodb:table:WriteCapacityUnits, dynamodb:index:ReadCapacityUnits, dynamodb:index:WriteCapacityUnits, rds:cluster:ReadReplicaCount, sagemaker:variant:DesiredInstanceCount, custom-resource:ResourceType:Property, comprehend:document-classifier-endpoint:DesiredInferenceUnits, comprehend:entity-recognizer-endpoint:DesiredInferenceUnits, lambda:function:ProvisionedConcurrency, cassandra:table:ReadCapacityUnits, cassandra:table:WriteCapacityUnits, kafka:broker-storage:VolumeSize, elasticache:cache-cluster:Nodes, elasticache:replication-group:NodeGroups, elasticache:replication-group:Replicas, neptune:cluster:ReadReplicaCount, sagemaker:variant:DesiredProvisionedConcurrency, sagemaker:inference-component:DesiredCopyCount, workspaces:workspacespool:DesiredUserSessions)</td>
</tr>
<tr>
    <td><CopyableCode code="ScalableTargetARN" /></td>
    <td><code>string</code></td>
    <td>The ARN of the scalable target. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceNamespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the Amazon Web Services service that provides the resource, or a custom-resource. (ecs, elasticmapreduce, ec2, appstream, dynamodb, rds, sagemaker, custom-resource, comprehend, lambda, cassandra, kafka, elasticache, neptune, workspaces)</td>
</tr>
<tr>
    <td><CopyableCode code="SuspendedState" /></td>
    <td><code>object</code></td>
    <td>Specifies whether the scaling activities for a scalable target are in a suspended state.</td>
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
    <td><a href="#describe_scalable_targets"><CopyableCode code="describe_scalable_targets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the scalable targets in the specified namespace. You can filter the results using ResourceIds and ScalableDimension.</td>
</tr>
<tr>
    <td><a href="#register_scalable_target"><CopyableCode code="register_scalable_target" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServiceNamespace"><code>ServiceNamespace</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-ScalableDimension"><code>ScalableDimension</code></a></td>
    <td></td>
    <td>Registers or updates a scalable target, which is the resource that you want to scale. Scalable targets are uniquely identified by the combination of resource ID, scalable dimension, and namespace, which represents some capacity dimension of the underlying service. When you register a new scalable target, you must specify values for the minimum and maximum capacity. If the specified resource is not active in the target service, this operation does not change the resource's current capacity. Otherwise, it changes the resource's current capacity to a value that is inside of this range. If you add a scaling policy, current capacity is adjustable within the specified range when scaling starts. Application Auto Scaling scaling policies will not scale capacity to values that are outside of the minimum and maximum range. After you register a scalable target, you do not need to register it again to use other Application Auto Scaling operations. To see which resources have been registered, use DescribeScalableTargets. You can also view the scaling policies for a service namespace by using DescribeScalableTargets. If you no longer need a scalable target, you can deregister it by using DeregisterScalableTarget. To update a scalable target, specify the parameters that you want to change. Include the parameters that identify the scalable target: resource ID, scalable dimension, and namespace. Any parameters that you don't specify are not changed by this update request. If you call the RegisterScalableTarget API operation to create a scalable target, there might be a brief delay until the operation achieves eventual consistency. You might become aware of this brief delay if you get unexpected errors when performing sequential operations. The typical strategy is to retry the request, and some Amazon Web Services SDKs include automatic backoff and retry logic. If you call the RegisterScalableTarget API operation to update an existing scalable target, Application Auto Scaling retrieves the current capacity of the resource. If it's below the minimum capacity or above the maximum capacity, Application Auto Scaling adjusts the capacity of the scalable target to place it within these bounds, even if you don't include the MinCapacity or MaxCapacity request parameters.</td>
</tr>
<tr>
    <td><a href="#deregister_scalable_target"><CopyableCode code="deregister_scalable_target" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which resources have been registered, use DescribeScalableTargets. Deregistering a scalable target deletes the scaling policies and the scheduled actions that are associated with it.</td>
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
    defaultValue="describe_scalable_targets"
    values={[
        { label: 'describe_scalable_targets', value: 'describe_scalable_targets' }
    ]}
>
<TabItem value="describe_scalable_targets">

Gets information about the scalable targets in the specified namespace. You can filter the results using ResourceIds and ScalableDimension.

```sql
SELECT
CreationTime,
MaxCapacity,
MinCapacity,
PredictedCapacity,
ResourceId,
RoleARN,
ScalableDimension,
ScalableTargetARN,
ServiceNamespace,
SuspendedState
FROM aws.application_autoscaling.scalable_targets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_scalable_target"
    values={[
        { label: 'register_scalable_target', value: 'register_scalable_target' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_scalable_target">

Registers or updates a scalable target, which is the resource that you want to scale. Scalable targets are uniquely identified by the combination of resource ID, scalable dimension, and namespace, which represents some capacity dimension of the underlying service. When you register a new scalable target, you must specify values for the minimum and maximum capacity. If the specified resource is not active in the target service, this operation does not change the resource's current capacity. Otherwise, it changes the resource's current capacity to a value that is inside of this range. If you add a scaling policy, current capacity is adjustable within the specified range when scaling starts. Application Auto Scaling scaling policies will not scale capacity to values that are outside of the minimum and maximum range. After you register a scalable target, you do not need to register it again to use other Application Auto Scaling operations. To see which resources have been registered, use DescribeScalableTargets. You can also view the scaling policies for a service namespace by using DescribeScalableTargets. If you no longer need a scalable target, you can deregister it by using DeregisterScalableTarget. To update a scalable target, specify the parameters that you want to change. Include the parameters that identify the scalable target: resource ID, scalable dimension, and namespace. Any parameters that you don't specify are not changed by this update request. If you call the RegisterScalableTarget API operation to create a scalable target, there might be a brief delay until the operation achieves eventual consistency. You might become aware of this brief delay if you get unexpected errors when performing sequential operations. The typical strategy is to retry the request, and some Amazon Web Services SDKs include automatic backoff and retry logic. If you call the RegisterScalableTarget API operation to update an existing scalable target, Application Auto Scaling retrieves the current capacity of the resource. If it's below the minimum capacity or above the maximum capacity, Application Auto Scaling adjusts the capacity of the scalable target to place it within these bounds, even if you don't include the MinCapacity or MaxCapacity request parameters.

```sql
INSERT INTO aws.application_autoscaling.scalable_targets (
ServiceNamespace,
ResourceId,
ScalableDimension,
MinCapacity,
MaxCapacity,
RoleARN,
SuspendedState,
Tags,
region
)
SELECT 
'{{ ServiceNamespace }}' /* required */,
'{{ ResourceId }}' /* required */,
'{{ ScalableDimension }}' /* required */,
{{ MinCapacity }},
{{ MaxCapacity }},
'{{ RoleARN }}',
'{{ SuspendedState }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
ScalableTargetARN
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scalable_targets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the scalable_targets resource.
    - name: ServiceNamespace
      value: "{{ ServiceNamespace }}"
      description: |
        The namespace of the Amazon Web Services service that provides the resource. For a resource provided by your own application or service, use custom-resource instead.
      valid_values: ['ecs', 'elasticmapreduce', 'ec2', 'appstream', 'dynamodb', 'rds', 'sagemaker', 'custom-resource', 'comprehend', 'lambda', 'cassandra', 'kafka', 'elasticache', 'neptune', 'workspaces']
    - name: ResourceId
      value: "{{ ResourceId }}"
      description: |
        The identifier of the resource that is associated with the scalable target. This string consists of the resource type and unique identifier. ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/my-cluster/my-service. Spot Fleet - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE. EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0. AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet. DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table. DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index. Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster. SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering. Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository. Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE. Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE. Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1. Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable. Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5. Amazon ElastiCache replication group - The resource type is replication-group and the unique identifier is the replication group name. Example: replication-group/mycluster. Amazon ElastiCache cache cluster - The resource type is cache-cluster and the unique identifier is the cache cluster name. Example: cache-cluster/mycluster. Neptune cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:mycluster. SageMaker serverless endpoint - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering. SageMaker inference component - The resource type is inference-component and the unique identifier is the resource ID. Example: inference-component/my-inference-component. Pool of WorkSpaces - The resource type is workspacespool and the unique identifier is the pool ID. Example: workspacespool/wspool-123456.
    - name: ScalableDimension
      value: "{{ ScalableDimension }}"
      description: |
        The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property. ecs:service:DesiredCount - The task count of an ECS service. elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group. ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet. appstream:fleet:DesiredCapacity - The capacity of an AppStream 2.0 fleet. dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table. dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table. dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index. dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index. rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition. sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for a SageMaker model endpoint variant. custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service. comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint. comprehend:entity-recognizer-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend entity recognizer endpoint. lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function. cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table. cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table. kafka:broker-storage:VolumeSize - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster. elasticache:cache-cluster:Nodes - The number of nodes for an Amazon ElastiCache cache cluster. elasticache:replication-group:NodeGroups - The number of node groups for an Amazon ElastiCache replication group. elasticache:replication-group:Replicas - The number of replicas per node group for an Amazon ElastiCache replication group. neptune:cluster:ReadReplicaCount - The count of read replicas in an Amazon Neptune DB cluster. sagemaker:variant:DesiredProvisionedConcurrency - The provisioned concurrency for a SageMaker serverless endpoint. sagemaker:inference-component:DesiredCopyCount - The number of copies across an endpoint for a SageMaker inference component. workspaces:workspacespool:DesiredUserSessions - The number of user sessions for the WorkSpaces in the pool.
      valid_values: ['ecs:service:DesiredCount', 'ec2:spot-fleet-request:TargetCapacity', 'elasticmapreduce:instancegroup:InstanceCount', 'appstream:fleet:DesiredCapacity', 'dynamodb:table:ReadCapacityUnits', 'dynamodb:table:WriteCapacityUnits', 'dynamodb:index:ReadCapacityUnits', 'dynamodb:index:WriteCapacityUnits', 'rds:cluster:ReadReplicaCount', 'sagemaker:variant:DesiredInstanceCount', 'custom-resource:ResourceType:Property', 'comprehend:document-classifier-endpoint:DesiredInferenceUnits', 'comprehend:entity-recognizer-endpoint:DesiredInferenceUnits', 'lambda:function:ProvisionedConcurrency', 'cassandra:table:ReadCapacityUnits', 'cassandra:table:WriteCapacityUnits', 'kafka:broker-storage:VolumeSize', 'elasticache:cache-cluster:Nodes', 'elasticache:replication-group:NodeGroups', 'elasticache:replication-group:Replicas', 'neptune:cluster:ReadReplicaCount', 'sagemaker:variant:DesiredProvisionedConcurrency', 'sagemaker:inference-component:DesiredCopyCount', 'workspaces:workspacespool:DesiredUserSessions']
    - name: MinCapacity
      value: {{ MinCapacity }}
      description: |
        The minimum value that you plan to scale in to. When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand. This property is required when registering a new scalable target. For the following resources, the minimum value allowed is 0. AppStream 2.0 fleets Aurora DB clusters ECS services EMR clusters Lambda provisioned concurrency SageMaker endpoint variants SageMaker inference components SageMaker serverless endpoint provisioned concurrency Spot Fleets custom resources It's strongly recommended that you specify a value greater than 0. A value greater than 0 means that data points are continuously reported to CloudWatch that scaling policies can use to scale on a metric like average CPU utilization. For all other resources, the minimum allowed value depends on the type of resource that you are using. If you provide a value that is lower than what a resource can accept, an error occurs. In which case, the error message will provide the minimum value that the resource can accept.
    - name: MaxCapacity
      value: {{ MaxCapacity }}
      description: |
        The maximum value that you plan to scale out to. When a scaling policy is in effect, Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to changing demand. This property is required when registering a new scalable target. Although you can specify a large maximum capacity, note that service quotas might impose lower limits. Each service has its own default quotas for the maximum capacity of the resource. If you want to specify a higher limit, you can request an increase. For more information, consult the documentation for that service. For information about the default quotas for each service, see Service endpoints and quotas in the Amazon Web Services General Reference.
    - name: RoleARN
      value: "{{ RoleARN }}"
      description: |
        This parameter is required for services that do not support service-linked roles (such as Amazon EMR), and it must specify the ARN of an IAM role that allows Application Auto Scaling to modify the scalable target on your behalf. If the service supports service-linked roles, Application Auto Scaling uses a service-linked role, which it creates if it does not yet exist. For more information, see How Application Auto Scaling works with IAM.
    - name: SuspendedState
      description: |
        An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. Setting the value of an attribute to true suspends the specified scaling activities. Setting it to false (default) resumes the specified scaling activities. Suspension Outcomes For DynamicScalingInSuspended, while a suspension is in effect, all scale-in activities that are triggered by a scaling policy are suspended. For DynamicScalingOutSuspended, while a suspension is in effect, all scale-out activities that are triggered by a scaling policy are suspended. For ScheduledScalingSuspended, while a suspension is in effect, all scaling activities that involve scheduled actions are suspended. For more information, see Suspend and resume scaling in the Application Auto Scaling User Guide.
      value:
        DynamicScalingInSuspended: {{ DynamicScalingInSuspended }}
        DynamicScalingOutSuspended: {{ DynamicScalingOutSuspended }}
        ScheduledScalingSuspended: {{ ScheduledScalingSuspended }}
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Assigns one or more tags to the scalable target. Use this parameter to tag the scalable target when it is created. To tag an existing scalable target, use the TagResource operation. Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required. You cannot have more than one tag on a scalable target with the same tag key. Use tags to control access to a scalable target. For more information, see Tagging support for Application Auto Scaling in the Application Auto Scaling User Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_scalable_target"
    values={[
        { label: 'deregister_scalable_target', value: 'deregister_scalable_target' }
    ]}
>
<TabItem value="deregister_scalable_target">

Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which resources have been registered, use DescribeScalableTargets. Deregistering a scalable target deletes the scaling policies and the scheduled actions that are associated with it.

```sql
DELETE FROM aws.application_autoscaling.scalable_targets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
