--- 
title: observations
hide_title: false
hide_table_of_contents: false
keywords:
  - observations
  - application_insights
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

Creates, updates, deletes, gets or lists an <code>observations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="observations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_insights.observations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_observation"
    values={[
        { label: 'describe_observation', value: 'describe_observation' }
    ]}
>
<TabItem value="describe_observation">

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
    <td><CopyableCode code="cloud_watch_event_detail_type" /></td>
    <td><code>string</code></td>
    <td>The detail type of the CloudWatch Event-based observation, for example, EC2 Instance State-change Notification.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_watch_event_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the CloudWatch Event-based observation related to the detected problem.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_watch_event_source" /></td>
    <td><code>string</code></td>
    <td>The source of the CloudWatch Event. (EC2, CODE_DEPLOY, HEALTH, RDS)</td>
</tr>
<tr>
    <td><CopyableCode code="code_deploy_application" /></td>
    <td><code>string</code></td>
    <td>The CodeDeploy application to which the deployment belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="code_deploy_deployment_group" /></td>
    <td><code>string</code></td>
    <td>The deployment group to which the CodeDeploy deployment belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="code_deploy_deployment_id" /></td>
    <td><code>string</code></td>
    <td>The deployment ID of the CodeDeploy-based observation related to the detected problem.</td>
</tr>
<tr>
    <td><CopyableCode code="code_deploy_instance_group_id" /></td>
    <td><code>string</code></td>
    <td>The instance group to which the CodeDeploy instance belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="code_deploy_state" /></td>
    <td><code>string</code></td>
    <td>The status of the CodeDeploy deployment, for example SUCCESS or FAILURE.</td>
</tr>
<tr>
    <td><CopyableCode code="ebs_cause" /></td>
    <td><code>string</code></td>
    <td>The cause of an EBS CloudWatch event.</td>
</tr>
<tr>
    <td><CopyableCode code="ebs_event" /></td>
    <td><code>string</code></td>
    <td>The type of EBS CloudWatch event, such as createVolume, deleteVolume or attachVolume.</td>
</tr>
<tr>
    <td><CopyableCode code="ebs_request_id" /></td>
    <td><code>string</code></td>
    <td>The request ID of an EBS CloudWatch event.</td>
</tr>
<tr>
    <td><CopyableCode code="ebs_result" /></td>
    <td><code>string</code></td>
    <td>The result of an EBS CloudWatch event, such as failed or succeeded.</td>
</tr>
<tr>
    <td><CopyableCode code="ec_2_state" /></td>
    <td><code>string</code></td>
    <td>The state of the instance, such as STOPPING or TERMINATING.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the observation ended, in epoch seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="health_event_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Health Event-based observation.</td>
</tr>
<tr>
    <td><CopyableCode code="health_event_description" /></td>
    <td><code>string</code></td>
    <td>The description of the Health event provided by the service, such as Amazon EC2.</td>
</tr>
<tr>
    <td><CopyableCode code="health_event_type_category" /></td>
    <td><code>string</code></td>
    <td>The category of the Health event, such as issue.</td>
</tr>
<tr>
    <td><CopyableCode code="health_event_type_code" /></td>
    <td><code>string</code></td>
    <td>The type of the Health event, for example, AWS_EC2_POWER_CONNECTIVITY_ISSUE.</td>
</tr>
<tr>
    <td><CopyableCode code="health_service" /></td>
    <td><code>string</code></td>
    <td>The service to which the Health Event belongs, such as EC2.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the observation type. (pattern: &lt;code&gt;o-&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="line_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp in the CloudWatch Logs that specifies when the matched line occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="log_filter" /></td>
    <td><code>string</code></td>
    <td>The log filter of the observation. (ERROR, WARN, INFO)</td>
</tr>
<tr>
    <td><CopyableCode code="log_group" /></td>
    <td><code>string</code></td>
    <td>The log group name.</td>
</tr>
<tr>
    <td><CopyableCode code="log_text" /></td>
    <td><code>string</code></td>
    <td>The log text of the observation.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_name" /></td>
    <td><code>string</code></td>
    <td>The name of the observation metric.</td>
</tr>
<tr>
    <td><CopyableCode code="metric_namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the observation metric.</td>
</tr>
<tr>
    <td><CopyableCode code="rds_event_categories" /></td>
    <td><code>string</code></td>
    <td>The category of an RDS event.</td>
</tr>
<tr>
    <td><CopyableCode code="rds_event_message" /></td>
    <td><code>string</code></td>
    <td>The message of an RDS event.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_event_name" /></td>
    <td><code>string</code></td>
    <td>The name of the S3 CloudWatch Event-based observation.</td>
</tr>
<tr>
    <td><CopyableCode code="source_arn" /></td>
    <td><code>string</code></td>
    <td>The source resource ARN of the observation.</td>
</tr>
<tr>
    <td><CopyableCode code="source_type" /></td>
    <td><code>string</code></td>
    <td>The source type of the observation.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the observation was first detected, in epoch seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="states_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the step function-based observation.</td>
</tr>
<tr>
    <td><CopyableCode code="states_execution_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the step function execution-based observation.</td>
</tr>
<tr>
    <td><CopyableCode code="states_input" /></td>
    <td><code>string</code></td>
    <td>The input to the step function-based observation.</td>
</tr>
<tr>
    <td><CopyableCode code="states_status" /></td>
    <td><code>string</code></td>
    <td>The status of the step function-related observation.</td>
</tr>
<tr>
    <td><CopyableCode code="unit" /></td>
    <td><code>string</code></td>
    <td>The unit of the source observation metric.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>number (double)</code></td>
    <td>The value of the source observation metric.</td>
</tr>
<tr>
    <td><CopyableCode code="x_ray_error_percent" /></td>
    <td><code>integer</code></td>
    <td>The X-Ray request error percentage for this node.</td>
</tr>
<tr>
    <td><CopyableCode code="x_ray_fault_percent" /></td>
    <td><code>integer</code></td>
    <td>The X-Ray request fault percentage for this node.</td>
</tr>
<tr>
    <td><CopyableCode code="x_ray_node_name" /></td>
    <td><code>string</code></td>
    <td>The name of the X-Ray node.</td>
</tr>
<tr>
    <td><CopyableCode code="x_ray_node_type" /></td>
    <td><code>string</code></td>
    <td>The type of the X-Ray node.</td>
</tr>
<tr>
    <td><CopyableCode code="x_ray_request_average_latency" /></td>
    <td><code>integer (int64)</code></td>
    <td>The X-Ray node request average latency for this node.</td>
</tr>
<tr>
    <td><CopyableCode code="x_ray_request_count" /></td>
    <td><code>integer</code></td>
    <td>The X-Ray request count for this node.</td>
</tr>
<tr>
    <td><CopyableCode code="x_ray_throttle_percent" /></td>
    <td><code>integer</code></td>
    <td>The X-Ray request throttle percentage for this node.</td>
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
    <td><a href="#describe_observation"><CopyableCode code="describe_observation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an anomaly or error with the application.</td>
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
    defaultValue="describe_observation"
    values={[
        { label: 'describe_observation', value: 'describe_observation' }
    ]}
>
<TabItem value="describe_observation">

Describes an anomaly or error with the application.

```sql
SELECT
cloud_watch_event_detail_type,
cloud_watch_event_id,
cloud_watch_event_source,
code_deploy_application,
code_deploy_deployment_group,
code_deploy_deployment_id,
code_deploy_instance_group_id,
code_deploy_state,
ebs_cause,
ebs_event,
ebs_request_id,
ebs_result,
ec_2_state,
end_time,
health_event_arn,
health_event_description,
health_event_type_category,
health_event_type_code,
health_service,
id,
line_time,
log_filter,
log_group,
log_text,
metric_name,
metric_namespace,
rds_event_categories,
rds_event_message,
s3_event_name,
source_arn,
source_type,
start_time,
states_arn,
states_execution_arn,
states_input,
states_status,
unit,
value,
x_ray_error_percent,
x_ray_fault_percent,
x_ray_node_name,
x_ray_node_type,
x_ray_request_average_latency,
x_ray_request_count,
x_ray_throttle_percent
FROM aws.application_insights.observations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
