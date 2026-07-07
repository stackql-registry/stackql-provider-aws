--- 
title: monitoring_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - monitoring_executions
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

Creates, updates, deletes, gets or lists a <code>monitoring_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitoring_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.monitoring_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_monitoring_executions"
    values={[
        { label: 'list_monitoring_executions', value: 'list_monitoring_executions' }
    ]}
>
<TabItem value="list_monitoring_executions">

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
    <td>The time at which the monitoring job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointName" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint used to run the monitoring job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>Contains the reason a monitoring job failed, if it failed.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates the last time the monitoring job was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="MonitoringExecutionStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the monitoring job. (Pending, Completed, CompletedWithViolations, InProgress, Failed, Stopping, Stopped)</td>
</tr>
<tr>
    <td><CopyableCode code="MonitoringJobDefinitionName" /></td>
    <td><code>string</code></td>
    <td>The name of the monitoring job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MonitoringScheduleName" /></td>
    <td><code>string</code></td>
    <td>The name of the monitoring schedule. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MonitoringType" /></td>
    <td><code>string</code></td>
    <td>The type of the monitoring job. (DataQuality, ModelQuality, ModelBias, ModelExplainability)</td>
</tr>
<tr>
    <td><CopyableCode code="ProcessingJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the monitoring job. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:processing-job/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduledTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the monitoring job was scheduled.</td>
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
    <td><a href="#list_monitoring_executions"><CopyableCode code="list_monitoring_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns list of all monitoring job executions.</td>
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
    defaultValue="list_monitoring_executions"
    values={[
        { label: 'list_monitoring_executions', value: 'list_monitoring_executions' }
    ]}
>
<TabItem value="list_monitoring_executions">

Returns list of all monitoring job executions.

```sql
SELECT
CreationTime,
EndpointName,
FailureReason,
LastModifiedTime,
MonitoringExecutionStatus,
MonitoringJobDefinitionName,
MonitoringScheduleName,
MonitoringType,
ProcessingJobArn,
ScheduledTime
FROM aws.sagemaker.monitoring_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
