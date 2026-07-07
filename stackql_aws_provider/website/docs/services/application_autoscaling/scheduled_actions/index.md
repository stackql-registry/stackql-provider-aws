--- 
title: scheduled_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_actions
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

Creates, updates, deletes, gets or lists a <code>scheduled_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scheduled_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_autoscaling.scheduled_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_scheduled_actions"
    values={[
        { label: 'describe_scheduled_actions', value: 'describe_scheduled_actions' }
    ]}
>
<TabItem value="describe_scheduled_actions">

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
    <td>The date and time that the scheduled action was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the action is scheduled to end, in UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier. ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/my-cluster/my-service. Spot Fleet - The resource type is spot-fleet-request and the unique identifier is the Spot Fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE. EMR cluster - The resource type is instancegroup and the unique identifier is the cluster ID and instance group ID. Example: instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0. AppStream 2.0 fleet - The resource type is fleet and the unique identifier is the fleet name. Example: fleet/sample-fleet. DynamoDB table - The resource type is table and the unique identifier is the table name. Example: table/my-table. DynamoDB global secondary index - The resource type is index and the unique identifier is the index name. Example: table/my-table/index/my-table-index. Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster. SageMaker endpoint variant - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering. Custom resources are not supported with a resource type. This parameter must specify the OutputValue from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository. Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE. Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE. Lambda provisioned concurrency - The resource type is function and the unique identifier is the function name with a function version or alias name suffix that is not $LATEST. Example: function:my-function:prod or function:my-function:1. Amazon Keyspaces table - The resource type is table and the unique identifier is the table name. Example: keyspace/mykeyspace/table/mytable. Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5. Amazon ElastiCache replication group - The resource type is replication-group and the unique identifier is the replication group name. Example: replication-group/mycluster. Amazon ElastiCache cache cluster - The resource type is cache-cluster and the unique identifier is the cache cluster name. Example: cache-cluster/mycluster. Neptune cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:mycluster. SageMaker serverless endpoint - The resource type is variant and the unique identifier is the resource ID. Example: endpoint/my-end-point/variant/KMeansClustering. SageMaker inference component - The resource type is inference-component and the unique identifier is the resource ID. Example: inference-component/my-inference-component. Pool of WorkSpaces - The resource type is workspacespool and the unique identifier is the pool ID. Example: workspacespool/wspool-123456. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ScalableDimension" /></td>
    <td><code>string</code></td>
    <td>The scalable dimension. This string consists of the service namespace, resource type, and scaling property. ecs:service:DesiredCount - The task count of an ECS service. elasticmapreduce:instancegroup:InstanceCount - The instance count of an EMR Instance Group. ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot Fleet. appstream:fleet:DesiredCapacity - The capacity of an AppStream 2.0 fleet. dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table. dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table. dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index. dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index. rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition. sagemaker:variant:DesiredInstanceCount - The number of EC2 instances for a SageMaker model endpoint variant. custom-resource:ResourceType:Property - The scalable dimension for a custom resource provided by your own application or service. comprehend:document-classifier-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend document classification endpoint. comprehend:entity-recognizer-endpoint:DesiredInferenceUnits - The number of inference units for an Amazon Comprehend entity recognizer endpoint. lambda:function:ProvisionedConcurrency - The provisioned concurrency for a Lambda function. cassandra:table:ReadCapacityUnits - The provisioned read capacity for an Amazon Keyspaces table. cassandra:table:WriteCapacityUnits - The provisioned write capacity for an Amazon Keyspaces table. kafka:broker-storage:VolumeSize - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster. elasticache:cache-cluster:Nodes - The number of nodes for an Amazon ElastiCache cache cluster. elasticache:replication-group:NodeGroups - The number of node groups for an Amazon ElastiCache replication group. elasticache:replication-group:Replicas - The number of replicas per node group for an Amazon ElastiCache replication group. neptune:cluster:ReadReplicaCount - The count of read replicas in an Amazon Neptune DB cluster. sagemaker:variant:DesiredProvisionedConcurrency - The provisioned concurrency for a SageMaker serverless endpoint. sagemaker:inference-component:DesiredCopyCount - The number of copies across an endpoint for a SageMaker inference component. workspaces:workspacespool:DesiredUserSessions - The number of user sessions for the WorkSpaces in the pool. (ecs:service:DesiredCount, ec2:spot-fleet-request:TargetCapacity, elasticmapreduce:instancegroup:InstanceCount, appstream:fleet:DesiredCapacity, dynamodb:table:ReadCapacityUnits, dynamodb:table:WriteCapacityUnits, dynamodb:index:ReadCapacityUnits, dynamodb:index:WriteCapacityUnits, rds:cluster:ReadReplicaCount, sagemaker:variant:DesiredInstanceCount, custom-resource:ResourceType:Property, comprehend:document-classifier-endpoint:DesiredInferenceUnits, comprehend:entity-recognizer-endpoint:DesiredInferenceUnits, lambda:function:ProvisionedConcurrency, cassandra:table:ReadCapacityUnits, cassandra:table:WriteCapacityUnits, kafka:broker-storage:VolumeSize, elasticache:cache-cluster:Nodes, elasticache:replication-group:NodeGroups, elasticache:replication-group:Replicas, neptune:cluster:ReadReplicaCount, sagemaker:variant:DesiredProvisionedConcurrency, sagemaker:inference-component:DesiredCopyCount, workspaces:workspacespool:DesiredUserSessions)</td>
</tr>
<tr>
    <td><CopyableCode code="ScalableTargetAction" /></td>
    <td><code>object</code></td>
    <td>The new minimum and maximum capacity. You can set both values or just one. At the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="Schedule" /></td>
    <td><code>string</code></td>
    <td>The schedule for this action. The following formats are supported: At expressions - "at(yyyy-mm-ddThh:mm:ss)" Rate expressions - "rate(value unit)" Cron expressions - "cron(fields)" At expressions are useful for one-time schedules. Cron expressions are useful for scheduled actions that run periodically at a specified date and time, and rate expressions are useful for scheduled actions that run at a regular interval. At and cron expressions use Universal Coordinated Time (UTC) by default. The cron format consists of six fields separated by white spaces: &#91;Minutes&#93; &#91;Hours&#93; &#91;Day_of_Month&#93; &#91;Month&#93; &#91;Day_of_Week&#93; &#91;Year&#93;. For rate expressions, value is a positive integer and unit is minute | minutes | hour | hours | day | days. For more information, see Schedule recurring scaling actions using cron expressions in the Application Auto Scaling User Guide. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduledActionARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the scheduled action. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduledActionName" /></td>
    <td><code>string</code></td>
    <td>The name of the scheduled action. (pattern: &lt;code&gt;(?!((^&#91; &#93;+.*)|(.*(&#91;\u0000-\u001f&#93;|&#91;\u007f-\u009f&#93;|&#91;:/|&#93;)+.*)|(.*&#91; &#93;+$))).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceNamespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the Amazon Web Services service that provides the resource, or a custom-resource. (ecs, elasticmapreduce, ec2, appstream, dynamodb, rds, sagemaker, custom-resource, comprehend, lambda, cassandra, kafka, elasticache, neptune, workspaces)</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the action is scheduled to begin, in UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="Timezone" /></td>
    <td><code>string</code></td>
    <td>The time zone used when referring to the date and time of a scheduled action, when the scheduled action uses an at or cron expression. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_scheduled_actions"><CopyableCode code="describe_scheduled_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the Application Auto Scaling scheduled actions for the specified service namespace. You can filter the results using the ResourceId, ScalableDimension, and ScheduledActionNames parameters. For more information, see Scheduled scaling in the Application Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#put_scheduled_action"><CopyableCode code="put_scheduled_action" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServiceNamespace"><code>ServiceNamespace</code></a>, <a href="#parameter-ScheduledActionName"><code>ScheduledActionName</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-ScalableDimension"><code>ScalableDimension</code></a></td>
    <td></td>
    <td>Creates or updates a scheduled action for an Application Auto Scaling scalable target. Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you have registered the resource as a scalable target. When you specify start and end times with a recurring schedule using a cron expression or rates, they form the boundaries for when the recurring action starts and stops. To update a scheduled action, specify the parameters that you want to change. If you don't specify start and end times, the old values are deleted. For more information, see Scheduled scaling in the Application Auto Scaling User Guide. If a scalable target is deregistered, the scalable target is no longer available to run scheduled actions. Any scheduled actions that were specified for the scalable target are deleted.</td>
</tr>
<tr>
    <td><a href="#delete_scheduled_action"><CopyableCode code="delete_scheduled_action" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified scheduled action for an Application Auto Scaling scalable target. For more information, see Delete a scheduled action in the Application Auto Scaling User Guide.</td>
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
    defaultValue="describe_scheduled_actions"
    values={[
        { label: 'describe_scheduled_actions', value: 'describe_scheduled_actions' }
    ]}
>
<TabItem value="describe_scheduled_actions">

Describes the Application Auto Scaling scheduled actions for the specified service namespace. You can filter the results using the ResourceId, ScalableDimension, and ScheduledActionNames parameters. For more information, see Scheduled scaling in the Application Auto Scaling User Guide.

```sql
SELECT
CreationTime,
EndTime,
ResourceId,
ScalableDimension,
ScalableTargetAction,
Schedule,
ScheduledActionARN,
ScheduledActionName,
ServiceNamespace,
StartTime,
Timezone
FROM aws.application_autoscaling.scheduled_actions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_scheduled_action"
    values={[
        { label: 'put_scheduled_action', value: 'put_scheduled_action' }
    ]}
>
<TabItem value="put_scheduled_action">

Creates or updates a scheduled action for an Application Auto Scaling scalable target. Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you have registered the resource as a scalable target. When you specify start and end times with a recurring schedule using a cron expression or rates, they form the boundaries for when the recurring action starts and stops. To update a scheduled action, specify the parameters that you want to change. If you don't specify start and end times, the old values are deleted. For more information, see Scheduled scaling in the Application Auto Scaling User Guide. If a scalable target is deregistered, the scalable target is no longer available to run scheduled actions. Any scheduled actions that were specified for the scalable target are deleted.

```sql
REPLACE aws.application_autoscaling.scheduled_actions
SET 
ServiceNamespace = '{{ ServiceNamespace }}',
Schedule = '{{ Schedule }}',
Timezone = '{{ Timezone }}',
ScheduledActionName = '{{ ScheduledActionName }}',
ResourceId = '{{ ResourceId }}',
ScalableDimension = '{{ ScalableDimension }}',
StartTime = '{{ StartTime }}',
EndTime = '{{ EndTime }}',
ScalableTargetAction = '{{ ScalableTargetAction }}'
WHERE 
region = '{{ region }}' --required
AND ServiceNamespace = '{{ ServiceNamespace }}' --required
AND ScheduledActionName = '{{ ScheduledActionName }}' --required
AND ResourceId = '{{ ResourceId }}' --required
AND ScalableDimension = '{{ ScalableDimension }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scheduled_action"
    values={[
        { label: 'delete_scheduled_action', value: 'delete_scheduled_action' }
    ]}
>
<TabItem value="delete_scheduled_action">

Deletes the specified scheduled action for an Application Auto Scaling scalable target. For more information, see Delete a scheduled action in the Application Auto Scaling User Guide.

```sql
DELETE FROM aws.application_autoscaling.scheduled_actions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
