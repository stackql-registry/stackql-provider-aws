--- 
title: runs
hide_title: false
hide_table_of_contents: false
keywords:
  - runs
  - omics
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

Creates, updates, deletes, gets or lists a <code>runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_run"
    values={[
        { label: 'get_run', value: 'get_run' },
        { label: 'list_runs', value: 'list_runs' }
    ]}
>
<TabItem value="get_run">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The run's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The run's name. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="accelerators" /></td>
    <td><code>string</code></td>
    <td>The computational accelerator used to run the workflow. (GPU)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The run's ARN. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="batchId" /></td>
    <td><code>string</code></td>
    <td>The run's batch ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cacheBehavior" /></td>
    <td><code>string</code></td>
    <td>The run cache behavior for the run. (CACHE_ON_FAILURE, CACHE_ALWAYS)</td>
</tr>
<tr>
    <td><CopyableCode code="cacheId" /></td>
    <td><code>string</code></td>
    <td>The run cache associated with the run. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration details for the workflow run.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>string</code></td>
    <td>The run's definition. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="digest" /></td>
    <td><code>string</code></td>
    <td>The run's digest.</td>
</tr>
<tr>
    <td><CopyableCode code="engineVersion" /></td>
    <td><code>string</code></td>
    <td>The actual Nextflow engine version that Amazon Web Services HealthOmics used for the run. The other workflow definition languages don't provide a value for this field. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;2&#125;.&#91;0-9&#93;&#123;2&#125;.&#91;0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>The reason a run has failed. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logLevel" /></td>
    <td><code>string</code></td>
    <td>The run's log level. (OFF, FATAL, ERROR, ALL)</td>
</tr>
<tr>
    <td><CopyableCode code="logLocation" /></td>
    <td><code>object</code></td>
    <td>The location of the run log.</td>
</tr>
<tr>
    <td><CopyableCode code="networkingMode" /></td>
    <td><code>string</code></td>
    <td>Configuration for run networking behavior. If absent, this will default to RESTRICTED. (RESTRICTED, VPC)</td>
</tr>
<tr>
    <td><CopyableCode code="outputUri" /></td>
    <td><code>string</code></td>
    <td>The run's output URI. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>The run's parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The run's priority.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceDigests" /></td>
    <td><code>object</code></td>
    <td>The run's resource digests.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionMode" /></td>
    <td><code>string</code></td>
    <td>The run's retention mode. (RETAIN, REMOVE)</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The run's service role ARN. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="runGroupId" /></td>
    <td><code>string</code></td>
    <td>The run's group ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="runId" /></td>
    <td><code>string</code></td>
    <td>The run's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="runOutputUri" /></td>
    <td><code>string</code></td>
    <td>The destination for workflow outputs. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the run started.</td>
</tr>
<tr>
    <td><CopyableCode code="startedBy" /></td>
    <td><code>string</code></td>
    <td>Who started the run.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The run's status. (PENDING, STARTING, RUNNING, STOPPING, COMPLETED, DELETED, CANCELLED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>The run's status message. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stopTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The run's stop time.</td>
</tr>
<tr>
    <td><CopyableCode code="storageCapacity" /></td>
    <td><code>integer</code></td>
    <td>The run's storage capacity in gibibytes. For dynamic storage, after the run has completed, this value is the maximum amount of storage used during the run.</td>
</tr>
<tr>
    <td><CopyableCode code="storageType" /></td>
    <td><code>string</code></td>
    <td>The run's storage type. (STATIC, DYNAMIC)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The run's tags.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>The universally unique identifier for a run. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpcConfig" /></td>
    <td><code>object</code></td>
    <td>VPC configuration for the workflow run.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowId" /></td>
    <td><code>string</code></td>
    <td>The run's workflow ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflowOwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the workflow owner. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflowType" /></td>
    <td><code>string</code></td>
    <td>The run's workflow type. (PRIVATE, READY2RUN)</td>
</tr>
<tr>
    <td><CopyableCode code="workflowUuid" /></td>
    <td><code>string</code></td>
    <td>The universally unique identifier (UUID) value for the workflow. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflowVersionName" /></td>
    <td><code>string</code></td>
    <td>The workflow version name. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9\-\._&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_runs">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The run's ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The run's name. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The run's ARN. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="batchId" /></td>
    <td><code>string</code></td>
    <td>The run's batch ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The run's priority.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the run started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The run's status. (PENDING, STARTING, RUNNING, STOPPING, COMPLETED, DELETED, CANCELLED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="stopTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the run stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="storageCapacity" /></td>
    <td><code>integer</code></td>
    <td>The run's storage capacity in gibibytes. For dynamic storage, after the run has completed, this value is the maximum amount of storage used during the run.</td>
</tr>
<tr>
    <td><CopyableCode code="storageType" /></td>
    <td><code>string</code></td>
    <td>The run's storage type. (STATIC, DYNAMIC)</td>
</tr>
<tr>
    <td><CopyableCode code="workflowId" /></td>
    <td><code>string</code></td>
    <td>The run's workflow ID. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workflowVersionName" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow version. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9\-\._&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_run"><CopyableCode code="get_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-export"><code>export</code></a></td>
    <td>Gets detailed information about a specific run using its ID. Amazon Web Services HealthOmics stores a configurable number of runs, as determined by service limits, that are available to the console and API. If GetRun does not return the requested run, you can find all run logs in the CloudWatch logs. For more information about viewing the run logs, see CloudWatch logs in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#list_runs"><CopyableCode code="list_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-runGroupId"><code>runGroupId</code></a>, <a href="#parameter-batchId"><code>batchId</code></a>, <a href="#parameter-startingToken"><code>startingToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Retrieves a list of runs and returns each run's metadata and status. Amazon Web Services HealthOmics stores a configurable number of runs, as determined by service limits, that are available to the console and API. If the ListRuns response doesn't include specific runs that you expected, you can find all run logs in the CloudWatch logs. For more information about viewing the run logs, see CloudWatch logs in the Amazon Web Services HealthOmics User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_run"><CopyableCode code="delete_run" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a run and returns a response with no body if the operation is successful. You can only delete a run that has reached a COMPLETED, FAILED, or CANCELLED stage. A completed run has delivered an output, or was cancelled and resulted in no output. When you delete a run, only the metadata associated with the run is deleted. The run outputs remain in Amazon S3 and logs remain in CloudWatch. To verify that the workflow is deleted: Use ListRuns to confirm the workflow no longer appears in the list. Use GetRun to verify the workflow cannot be found.</td>
</tr>
<tr>
    <td><a href="#cancel_run_batch"><CopyableCode code="cancel_run_batch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-batchId"><code>batchId</code></a></td>
    <td></td>
    <td>Cancels all runs within a specified batch. This operation prevents not-yet-submitted runs from starting and submits CancelRun requests for runs that have already started. Cancel is only allowed on batches in PENDING, SUBMITTING, or INPROGRESS state. Cancel operations are non-atomic and may be partially successful. Use GetBatch to review successfulCancelSubmissionCount and failedCancelSubmissionCount in the submissionSummary. Only one cancel or delete operation per batch is allowed at a time.</td>
</tr>
<tr>
    <td><a href="#start_run_batch"><CopyableCode code="start_run_batch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-requestId"><code>requestId</code></a>, <a href="#parameter-defaultRunSetting"><code>defaultRunSetting</code></a>, <a href="#parameter-batchRunSettings"><code>batchRunSettings</code></a></td>
    <td></td>
    <td>Starts a batch of workflow runs. You can group up to 100,000 runs into a single batch that share a common configuration defined in defaultRunSetting. Per-run overrides can be provided either inline via inlineSettings (up to 100 runs) or via a JSON file stored in Amazon S3 via s3UriSettings (up to 100,000 runs). StartRunBatch validates common fields synchronously and returns immediately with a batch ID and status CREATING. The batch transitions to PENDING once initial setup completes. Runs are then submitted gradually and asynchronously at a rate governed by your StartRun throughput quota.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The run's ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-batchId">
    <td><CopyableCode code="batchId" /></td>
    <td><code>string</code></td>
    <td>Filter by batch ID.</td>
</tr>
<tr id="parameter-export">
    <td><CopyableCode code="export" /></td>
    <td><code>array</code></td>
    <td>The run's export format.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of runs to return in one page of results.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filter the list by run name.</td>
</tr>
<tr id="parameter-runGroupId">
    <td><CopyableCode code="runGroupId" /></td>
    <td><code>string</code></td>
    <td>Filter the list by run group ID.</td>
</tr>
<tr id="parameter-startingToken">
    <td><CopyableCode code="startingToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a run.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_run"
    values={[
        { label: 'get_run', value: 'get_run' },
        { label: 'list_runs', value: 'list_runs' }
    ]}
>
<TabItem value="get_run">

Gets detailed information about a specific run using its ID. Amazon Web Services HealthOmics stores a configurable number of runs, as determined by service limits, that are available to the console and API. If GetRun does not return the requested run, you can find all run logs in the CloudWatch logs. For more information about viewing the run logs, see CloudWatch logs in the Amazon Web Services HealthOmics User Guide.

```sql
SELECT
id,
name,
accelerators,
arn,
batchId,
cacheBehavior,
cacheId,
configuration,
creationTime,
definition,
digest,
engineVersion,
failureReason,
logLevel,
logLocation,
networkingMode,
outputUri,
parameters,
priority,
resourceDigests,
retentionMode,
roleArn,
runGroupId,
runId,
runOutputUri,
startTime,
startedBy,
status,
statusMessage,
stopTime,
storageCapacity,
storageType,
tags,
uuid,
vpcConfig,
workflowId,
workflowOwnerId,
workflowType,
workflowUuid,
workflowVersionName
FROM aws.omics.runs
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND export = '{{ export }}'
;
```
</TabItem>
<TabItem value="list_runs">

Retrieves a list of runs and returns each run's metadata and status. Amazon Web Services HealthOmics stores a configurable number of runs, as determined by service limits, that are available to the console and API. If the ListRuns response doesn't include specific runs that you expected, you can find all run logs in the CloudWatch logs. For more information about viewing the run logs, see CloudWatch logs in the Amazon Web Services HealthOmics User Guide.

```sql
SELECT
id,
name,
arn,
batchId,
creationTime,
priority,
startTime,
status,
stopTime,
storageCapacity,
storageType,
workflowId,
workflowVersionName
FROM aws.omics.runs
WHERE region = '{{ region }}' -- required
AND name = '{{ name }}'
AND runGroupId = '{{ runGroupId }}'
AND batchId = '{{ batchId }}'
AND startingToken = '{{ startingToken }}'
AND maxResults = '{{ maxResults }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_run"
    values={[
        { label: 'delete_run', value: 'delete_run' }
    ]}
>
<TabItem value="delete_run">

Deletes a run and returns a response with no body if the operation is successful. You can only delete a run that has reached a COMPLETED, FAILED, or CANCELLED stage. A completed run has delivered an output, or was cancelled and resulted in no output. When you delete a run, only the metadata associated with the run is deleted. The run outputs remain in Amazon S3 and logs remain in CloudWatch. To verify that the workflow is deleted: Use ListRuns to confirm the workflow no longer appears in the list. Use GetRun to verify the workflow cannot be found.

```sql
DELETE FROM aws.omics.runs
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_run_batch"
    values={[
        { label: 'cancel_run_batch', value: 'cancel_run_batch' },
        { label: 'start_run_batch', value: 'start_run_batch' }
    ]}
>
<TabItem value="cancel_run_batch">

Cancels all runs within a specified batch. This operation prevents not-yet-submitted runs from starting and submits CancelRun requests for runs that have already started. Cancel is only allowed on batches in PENDING, SUBMITTING, or INPROGRESS state. Cancel operations are non-atomic and may be partially successful. Use GetBatch to review successfulCancelSubmissionCount and failedCancelSubmissionCount in the submissionSummary. Only one cancel or delete operation per batch is allowed at a time.

```sql
EXEC aws.omics.runs.cancel_run_batch 
@region='{{ region }}' --required 
@@json=
'{
"batchId": "{{ batchId }}"
}'
;
```
</TabItem>
<TabItem value="start_run_batch">

Starts a batch of workflow runs. You can group up to 100,000 runs into a single batch that share a common configuration defined in defaultRunSetting. Per-run overrides can be provided either inline via inlineSettings (up to 100 runs) or via a JSON file stored in Amazon S3 via s3UriSettings (up to 100,000 runs). StartRunBatch validates common fields synchronously and returns immediately with a batch ID and status CREATING. The batch transitions to PENDING once initial setup completes. Runs are then submitted gradually and asynchronously at a rate governed by your StartRun throughput quota.

```sql
EXEC aws.omics.runs.start_run_batch 
@region='{{ region }}' --required 
@@json=
'{
"batchName": "{{ batchName }}", 
"requestId": "{{ requestId }}", 
"tags": "{{ tags }}", 
"defaultRunSetting": "{{ defaultRunSetting }}", 
"batchRunSettings": "{{ batchRunSettings }}"
}'
;
```
</TabItem>
</Tabs>
