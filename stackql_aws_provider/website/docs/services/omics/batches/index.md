--- 
title: batches
hide_title: false
hide_table_of_contents: false
keywords:
  - batches
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

Creates, updates, deletes, gets or lists a <code>batches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="batches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.batches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_batch"
    values={[
        { label: 'get_batch', value: 'get_batch' },
        { label: 'list_batch', value: 'list_batch' }
    ]}
>
<TabItem value="get_batch">

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
    <td>The identifier portion of the run batch ARN. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The optional user-friendly name of the batch. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN of the run batch. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the batch was created.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultRunSetting" /></td>
    <td><code>object</code></td>
    <td>The shared configuration applied to all runs in the batch. See DefaultRunSetting.</td>
</tr>
<tr>
    <td><CopyableCode code="failedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the batch transitioned to a FAILED status.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>A description of the batch failure. Present only when status is FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="processedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when all run executions completed.</td>
</tr>
<tr>
    <td><CopyableCode code="runSummary" /></td>
    <td><code>object</code></td>
    <td>A summary of run execution states. Run execution counts are eventually consistent and may lag behind actual run states. Final counts are accurate once the batch reaches PROCESSED status. See RunSummary.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the run batch. Possible values: CREATING (initial setup), PENDING (ready to submit runs), SUBMITTING (submitting runs), INPROGRESS (runs executing), STOPPING (cancellation in progress), PROCESSED (all runs completed), CANCELLED (batch cancelled), FAILED (batch failed), RUNS_DELETING (deleting runs), RUNS_DELETED (runs deleted). (CREATING, PENDING, SUBMITTING, INPROGRESS, STOPPING, CANCELLED, FAILED, PROCESSED, RUNS_DELETING, RUNS_DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="submissionSummary" /></td>
    <td><code>object</code></td>
    <td>A summary of run submission outcomes. See SubmissionSummary.</td>
</tr>
<tr>
    <td><CopyableCode code="submittedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when all run submissions completed.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>AWS tags associated with the run batch.</td>
</tr>
<tr>
    <td><CopyableCode code="totalRuns" /></td>
    <td><code>integer</code></td>
    <td>The total number of runs in the batch.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>The universally unique identifier (UUID) for the run batch. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_batch">

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
    <td>The batch identifier. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The batch name. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the batch was created.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current batch status. (CREATING, PENDING, SUBMITTING, INPROGRESS, STOPPING, CANCELLED, FAILED, PROCESSED, RUNS_DELETING, RUNS_DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="totalRuns" /></td>
    <td><code>integer</code></td>
    <td>The total number of runs in the batch.</td>
</tr>
<tr>
    <td><CopyableCode code="workflowId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the workflow used for the batch. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_batch"><CopyableCode code="get_batch" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-batch_id"><code>batch_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details and current status for a specific run batch, including submission progress and run execution counts.</td>
</tr>
<tr>
    <td><a href="#list_batch"><CopyableCode code="list_batch" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxItems"><code>maxItems</code></a>, <a href="#parameter-startingToken"><code>startingToken</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-runGroupId"><code>runGroupId</code></a></td>
    <td>Returns a list of run batches in your account, with optional filtering by status, name, or run group. Results are paginated. Only one filter per call is supported.</td>
</tr>
<tr>
    <td><a href="#delete_batch"><CopyableCode code="delete_batch" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-batch_id"><code>batch_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a run batch resource and its associated metadata. This operation does not delete the individual workflow runs. To delete the runs, call DeleteRunBatch before calling DeleteBatch. DeleteBatch requires the batch to be in a terminal state: PROCESSED, FAILED, CANCELLED, or RUNS_DELETED. After DeleteBatch completes, the batch metadata is no longer accessible. You cannot call GetBatch, ListRunsInBatch, DeleteRunBatch, or CancelRunBatch on a deleted batch.</td>
</tr>
<tr>
    <td><a href="#delete_run_batch"><CopyableCode code="delete_run_batch" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the individual workflow runs within a batch. This operation is separate from DeleteBatch, which removes the batch metadata. Delete is only allowed on batches in PROCESSED or CANCELLED state. Delete operations are non-atomic and may be partially successful. Use GetBatch to review successfulDeleteSubmissionCount and failedDeleteSubmissionCount in the submissionSummary. Only one cancel or delete operation per batch is allowed at a time.</td>
</tr>
<tr>
    <td><a href="#batch_delete_read_set"><CopyableCode code="batch_delete_read_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-sequence_store_id"><code>sequence_store_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ids"><code>ids</code></a></td>
    <td></td>
    <td>Deletes one or more read sets. If the operation is successful, it returns a response with no body. If there is an error with deleting one of the read sets, the operation returns an error list. If the operation successfully deletes only a subset of files, it will return an error list for the remaining files that fail to be deleted. There is a limit of 100 read sets that can be deleted in each BatchDeleteReadSet API call.</td>
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
<tr id="parameter-batch_id">
    <td><CopyableCode code="batch_id" /></td>
    <td><code>string</code></td>
    <td>The identifier portion of the run batch ARN.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-sequence_store_id">
    <td><CopyableCode code="sequence_store_id" /></td>
    <td><code>string</code></td>
    <td>The read sets' sequence store ID.</td>
</tr>
<tr id="parameter-maxItems">
    <td><CopyableCode code="maxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of batches to return. If not specified, defaults to 100.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filter batches by name.</td>
</tr>
<tr id="parameter-runGroupId">
    <td><CopyableCode code="runGroupId" /></td>
    <td><code>string</code></td>
    <td>Filter batches by run group ID.</td>
</tr>
<tr id="parameter-startingToken">
    <td><CopyableCode code="startingToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a prior ListBatch call.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter batches by status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_batch"
    values={[
        { label: 'get_batch', value: 'get_batch' },
        { label: 'list_batch', value: 'list_batch' }
    ]}
>
<TabItem value="get_batch">

Retrieves details and current status for a specific run batch, including submission progress and run execution counts.

```sql
SELECT
id,
name,
arn,
creationTime,
defaultRunSetting,
failedTime,
failureReason,
processedTime,
runSummary,
status,
submissionSummary,
submittedTime,
tags,
totalRuns,
uuid
FROM aws.omics.batches
WHERE batch_id = '{{ batch_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_batch">

Returns a list of run batches in your account, with optional filtering by status, name, or run group. Results are paginated. Only one filter per call is supported.

```sql
SELECT
id,
name,
createdAt,
status,
totalRuns,
workflowId
FROM aws.omics.batches
WHERE region = '{{ region }}' -- required
AND maxItems = '{{ maxItems }}'
AND startingToken = '{{ startingToken }}'
AND status = '{{ status }}'
AND name = '{{ name }}'
AND runGroupId = '{{ runGroupId }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_batch"
    values={[
        { label: 'delete_batch', value: 'delete_batch' },
        { label: 'delete_run_batch', value: 'delete_run_batch' }
    ]}
>
<TabItem value="delete_batch">

Deletes a run batch resource and its associated metadata. This operation does not delete the individual workflow runs. To delete the runs, call DeleteRunBatch before calling DeleteBatch. DeleteBatch requires the batch to be in a terminal state: PROCESSED, FAILED, CANCELLED, or RUNS_DELETED. After DeleteBatch completes, the batch metadata is no longer accessible. You cannot call GetBatch, ListRunsInBatch, DeleteRunBatch, or CancelRunBatch on a deleted batch.

```sql
DELETE FROM aws.omics.batches
WHERE batch_id = '{{ batch_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_run_batch">

Deletes the individual workflow runs within a batch. This operation is separate from DeleteBatch, which removes the batch metadata. Delete is only allowed on batches in PROCESSED or CANCELLED state. Delete operations are non-atomic and may be partially successful. Use GetBatch to review successfulDeleteSubmissionCount and failedDeleteSubmissionCount in the submissionSummary. Only one cancel or delete operation per batch is allowed at a time.

```sql
DELETE FROM aws.omics.batches
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_read_set"
    values={[
        { label: 'batch_delete_read_set', value: 'batch_delete_read_set' }
    ]}
>
<TabItem value="batch_delete_read_set">

Deletes one or more read sets. If the operation is successful, it returns a response with no body. If there is an error with deleting one of the read sets, the operation returns an error list. If the operation successfully deletes only a subset of files, it will return an error list for the remaining files that fail to be deleted. There is a limit of 100 read sets that can be deleted in each BatchDeleteReadSet API call.

```sql
EXEC aws.omics.batches.batch_delete_read_set 
@sequence_store_id='{{ sequence_store_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ids": "{{ ids }}"
}'
;
```
</TabItem>
</Tabs>
