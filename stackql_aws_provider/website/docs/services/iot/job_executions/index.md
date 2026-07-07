--- 
title: job_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - job_executions
  - iot
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

Creates, updates, deletes, gets or lists a <code>job_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.job_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_job_execution"
    values={[
        { label: 'describe_job_execution', value: 'describe_job_execution' }
    ]}
>
<TabItem value="describe_job_execution">

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
    <td><CopyableCode code="approximateSecondsBeforeTimedOut" /></td>
    <td><code>integer (int64)</code></td>
    <td>The estimated number of seconds that remain before the job execution status will be changed to TIMED_OUT. The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes). The actual job execution timeout can occur up to 60 seconds later than the estimated duration. This value will not be included if the job execution has reached a terminal status.</td>
</tr>
<tr>
    <td><CopyableCode code="executionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>A string (consisting of the digits "0" through "9") which identifies this particular job execution on this particular device. It can be used in commands which return or update job execution information.</td>
</tr>
<tr>
    <td><CopyableCode code="forceCanceled" /></td>
    <td><code>boolean</code></td>
    <td>Will be true if the job execution was canceled with the optional force parameter set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier you assigned to the job when it was created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in seconds since the epoch, when the job execution was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="queuedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in seconds since the epoch, when the job execution was queued.</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in seconds since the epoch, when the job execution started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the job execution (IN_PROGRESS, QUEUED, FAILED, SUCCEEDED, TIMED_OUT, CANCELED, or REJECTED). (QUEUED, IN_PROGRESS, SUCCEEDED, FAILED, TIMED_OUT, REJECTED, REMOVED, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusDetails" /></td>
    <td><code>object</code></td>
    <td>A collection of name/value pairs that describe the status of the job execution.</td>
</tr>
<tr>
    <td><CopyableCode code="thingArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the thing on which the job execution is running.</td>
</tr>
<tr>
    <td><CopyableCode code="versionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the job execution. Job execution versions are incremented each time they are updated by a device.</td>
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
    <td><a href="#describe_job_execution"><CopyableCode code="describe_job_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-executionNumber"><code>executionNumber</code></a></td>
    <td>Describes a job execution. Requires permission to access the DescribeJobExecution action.</td>
</tr>
<tr>
    <td><a href="#delete_job_execution"><CopyableCode code="delete_job_execution" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-execution_number"><code>execution_number</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-namespaceId"><code>namespaceId</code></a></td>
    <td>Deletes a job execution. Requires permission to access the DeleteJobExecution action.</td>
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
<tr id="parameter-execution_number">
    <td><CopyableCode code="execution_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The ID of the job execution to be deleted. The executionNumber refers to the execution of a particular job on a particular device. Note that once a job execution is deleted, the executionNumber may be reused by IoT, so be sure you get and use the correct value here.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job whose execution on a particular device will be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-thing_name">
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the thing whose job execution will be deleted.</td>
</tr>
<tr id="parameter-executionNumber">
    <td><CopyableCode code="executionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>A string (consisting of the digits "0" through "9" which is used to specify a particular job execution on a particular device.</td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td>(Optional) When true, you can delete a job execution which is "IN_PROGRESS". Otherwise, you can only delete a job execution which is in a terminal state ("SUCCEEDED", "FAILED", "REJECTED", "REMOVED" or "CANCELED") or an exception will occur. The default is false. Deleting a job execution which is "IN_PROGRESS", will cause the device to be unable to access job information or update the job execution status. Use caution and ensure that the device is able to recover to a valid state.</td>
</tr>
<tr id="parameter-namespaceId">
    <td><CopyableCode code="namespaceId" /></td>
    <td><code>string</code></td>
    <td>The namespace used to indicate that a job is a customer-managed job. When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format. $aws/things/THING_NAME/jobs/JOB_ID/notify-namespace-NAMESPACE_ID/ The namespaceId feature is only supported by IoT Greengrass at this time. For more information, see Setting up IoT Greengrass core devices.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_job_execution"
    values={[
        { label: 'describe_job_execution', value: 'describe_job_execution' }
    ]}
>
<TabItem value="describe_job_execution">

Describes a job execution. Requires permission to access the DescribeJobExecution action.

```sql
SELECT
approximateSecondsBeforeTimedOut,
executionNumber,
forceCanceled,
jobId,
lastUpdatedAt,
queuedAt,
startedAt,
status,
statusDetails,
thingArn,
versionNumber
FROM aws.iot.job_executions
WHERE job_id = '{{ job_id }}' -- required
AND thing_name = '{{ thing_name }}' -- required
AND region = '{{ region }}' -- required
AND executionNumber = '{{ executionNumber }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_job_execution"
    values={[
        { label: 'delete_job_execution', value: 'delete_job_execution' }
    ]}
>
<TabItem value="delete_job_execution">

Deletes a job execution. Requires permission to access the DeleteJobExecution action.

```sql
DELETE FROM aws.iot.job_executions
WHERE job_id = '{{ job_id }}' --required
AND thing_name = '{{ thing_name }}' --required
AND execution_number = '{{ execution_number }}' --required
AND region = '{{ region }}' --required
AND force = '{{ force }}'
AND namespaceId = '{{ namespaceId }}'
;
```
</TabItem>
</Tabs>
