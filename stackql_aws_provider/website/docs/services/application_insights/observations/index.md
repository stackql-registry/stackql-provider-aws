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
    <td><CopyableCode code="CloudWatchEventDetailType" /></td>
    <td><code>string</code></td>
    <td>The detail type of the CloudWatch Event-based observation, for example, EC2 Instance State-change Notification.</td>
</tr>
<tr>
    <td><CopyableCode code="CloudWatchEventId" /></td>
    <td><code>string</code></td>
    <td>The ID of the CloudWatch Event-based observation related to the detected problem.</td>
</tr>
<tr>
    <td><CopyableCode code="CloudWatchEventSource" /></td>
    <td><code>string</code></td>
    <td>The source of the CloudWatch Event. (EC2, CODE_DEPLOY, HEALTH, RDS)</td>
</tr>
<tr>
    <td><CopyableCode code="CodeDeployApplication" /></td>
    <td><code>string</code></td>
    <td>The CodeDeploy application to which the deployment belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="CodeDeployDeploymentGroup" /></td>
    <td><code>string</code></td>
    <td>The deployment group to which the CodeDeploy deployment belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="CodeDeployDeploymentId" /></td>
    <td><code>string</code></td>
    <td>The deployment ID of the CodeDeploy-based observation related to the detected problem.</td>
</tr>
<tr>
    <td><CopyableCode code="CodeDeployInstanceGroupId" /></td>
    <td><code>string</code></td>
    <td>The instance group to which the CodeDeploy instance belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="CodeDeployState" /></td>
    <td><code>string</code></td>
    <td>The status of the CodeDeploy deployment, for example SUCCESS or FAILURE.</td>
</tr>
<tr>
    <td><CopyableCode code="EbsCause" /></td>
    <td><code>string</code></td>
    <td>The cause of an EBS CloudWatch event.</td>
</tr>
<tr>
    <td><CopyableCode code="EbsEvent" /></td>
    <td><code>string</code></td>
    <td>The type of EBS CloudWatch event, such as createVolume, deleteVolume or attachVolume.</td>
</tr>
<tr>
    <td><CopyableCode code="EbsRequestId" /></td>
    <td><code>string</code></td>
    <td>The request ID of an EBS CloudWatch event.</td>
</tr>
<tr>
    <td><CopyableCode code="EbsResult" /></td>
    <td><code>string</code></td>
    <td>The result of an EBS CloudWatch event, such as failed or succeeded.</td>
</tr>
<tr>
    <td><CopyableCode code="Ec2State" /></td>
    <td><code>string</code></td>
    <td>The state of the instance, such as STOPPING or TERMINATING.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the observation ended, in epoch seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthEventArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Health Event-based observation.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthEventDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the Health event provided by the service, such as Amazon EC2.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthEventTypeCategory" /></td>
    <td><code>string</code></td>
    <td>The category of the Health event, such as issue.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthEventTypeCode" /></td>
    <td><code>string</code></td>
    <td>The type of the Health event, for example, AWS_EC2_POWER_CONNECTIVITY_ISSUE.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthService" /></td>
    <td><code>string</code></td>
    <td>The service to which the Health Event belongs, such as EC2.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the observation type. (pattern: &lt;code&gt;o-&#91;0-9a-fA-F&#93;&#123;8&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;4&#125;\-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LineTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp in the CloudWatch Logs that specifies when the matched line occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="LogFilter" /></td>
    <td><code>string</code></td>
    <td>The log filter of the observation. (ERROR, WARN, INFO)</td>
</tr>
<tr>
    <td><CopyableCode code="LogGroup" /></td>
    <td><code>string</code></td>
    <td>The log group name.</td>
</tr>
<tr>
    <td><CopyableCode code="LogText" /></td>
    <td><code>string</code></td>
    <td>The log text of the observation.</td>
</tr>
<tr>
    <td><CopyableCode code="MetricName" /></td>
    <td><code>string</code></td>
    <td>The name of the observation metric.</td>
</tr>
<tr>
    <td><CopyableCode code="MetricNamespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the observation metric.</td>
</tr>
<tr>
    <td><CopyableCode code="RdsEventCategories" /></td>
    <td><code>string</code></td>
    <td>The category of an RDS event.</td>
</tr>
<tr>
    <td><CopyableCode code="RdsEventMessage" /></td>
    <td><code>string</code></td>
    <td>The message of an RDS event.</td>
</tr>
<tr>
    <td><CopyableCode code="S3EventName" /></td>
    <td><code>string</code></td>
    <td>The name of the S3 CloudWatch Event-based observation.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceARN" /></td>
    <td><code>string</code></td>
    <td>The source resource ARN of the observation.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceType" /></td>
    <td><code>string</code></td>
    <td>The source type of the observation.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the observation was first detected, in epoch seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="StatesArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the step function-based observation.</td>
</tr>
<tr>
    <td><CopyableCode code="StatesExecutionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the step function execution-based observation.</td>
</tr>
<tr>
    <td><CopyableCode code="StatesInput" /></td>
    <td><code>string</code></td>
    <td>The input to the step function-based observation.</td>
</tr>
<tr>
    <td><CopyableCode code="StatesStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the step function-related observation.</td>
</tr>
<tr>
    <td><CopyableCode code="Unit" /></td>
    <td><code>string</code></td>
    <td>The unit of the source observation metric.</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>number (double)</code></td>
    <td>The value of the source observation metric.</td>
</tr>
<tr>
    <td><CopyableCode code="XRayErrorPercent" /></td>
    <td><code>integer</code></td>
    <td>The X-Ray request error percentage for this node.</td>
</tr>
<tr>
    <td><CopyableCode code="XRayFaultPercent" /></td>
    <td><code>integer</code></td>
    <td>The X-Ray request fault percentage for this node.</td>
</tr>
<tr>
    <td><CopyableCode code="XRayNodeName" /></td>
    <td><code>string</code></td>
    <td>The name of the X-Ray node.</td>
</tr>
<tr>
    <td><CopyableCode code="XRayNodeType" /></td>
    <td><code>string</code></td>
    <td>The type of the X-Ray node.</td>
</tr>
<tr>
    <td><CopyableCode code="XRayRequestAverageLatency" /></td>
    <td><code>integer (int64)</code></td>
    <td>The X-Ray node request average latency for this node.</td>
</tr>
<tr>
    <td><CopyableCode code="XRayRequestCount" /></td>
    <td><code>integer</code></td>
    <td>The X-Ray request count for this node.</td>
</tr>
<tr>
    <td><CopyableCode code="XRayThrottlePercent" /></td>
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
CloudWatchEventDetailType,
CloudWatchEventId,
CloudWatchEventSource,
CodeDeployApplication,
CodeDeployDeploymentGroup,
CodeDeployDeploymentId,
CodeDeployInstanceGroupId,
CodeDeployState,
EbsCause,
EbsEvent,
EbsRequestId,
EbsResult,
Ec2State,
EndTime,
HealthEventArn,
HealthEventDescription,
HealthEventTypeCategory,
HealthEventTypeCode,
HealthService,
Id,
LineTime,
LogFilter,
LogGroup,
LogText,
MetricName,
MetricNamespace,
RdsEventCategories,
RdsEventMessage,
S3EventName,
SourceARN,
SourceType,
StartTime,
StatesArn,
StatesExecutionArn,
StatesInput,
StatesStatus,
Unit,
Value,
XRayErrorPercent,
XRayFaultPercent,
XRayNodeName,
XRayNodeType,
XRayRequestAverageLatency,
XRayRequestCount,
XRayThrottlePercent
FROM aws.application_insights.observations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
