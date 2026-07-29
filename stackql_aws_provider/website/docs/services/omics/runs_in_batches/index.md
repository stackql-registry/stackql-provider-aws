--- 
title: runs_in_batches
hide_title: false
hide_table_of_contents: false
keywords:
  - runs_in_batches
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

Creates, updates, deletes, gets or lists a <code>runs_in_batches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="runs_in_batches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.runs_in_batches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_runs_in_batch"
    values={[
        { label: 'list_runs_in_batch', value: 'list_runs_in_batch' }
    ]}
>
<TabItem value="list_runs_in_batch">

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
    <td><CopyableCode code="run_arn" /></td>
    <td><code>string</code></td>
    <td>The unique ARN of the workflow run. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="run_id" /></td>
    <td><code>string</code></td>
    <td>The HealthOmics-generated identifier for the workflow run. Empty if submission failed. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="run_internal_uuid" /></td>
    <td><code>string</code></td>
    <td>The universally unique identifier (UUID) for the run. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="run_setting_id" /></td>
    <td><code>string</code></td>
    <td>The customer-provided identifier for the run configuration. Use this to correlate results back to the input configuration provided in inlineSettings or s3UriSettings. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="submission_failure_message" /></td>
    <td><code>string</code></td>
    <td>A detailed message describing the submission failure. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="submission_failure_reason" /></td>
    <td><code>string</code></td>
    <td>The error category for a failed submission. See the run-level failure table in the HealthOmics User Guide for details on each value. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;||\p&#123;M&#125;||\p&#123;Z&#125;||\p&#123;S&#125;||\p&#123;N&#125;||\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="submission_status" /></td>
    <td><code>string</code></td>
    <td>The submission outcome for this run. (SUCCESS, FAILED, CANCEL_SUCCESS, CANCEL_FAILED, DELETE_SUCCESS, DELETE_FAILED)</td>
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
    <td><a href="#list_runs_in_batch"><CopyableCode code="list_runs_in_batch" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-batch_id"><code>batch_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxItems"><code>maxItems</code></a>, <a href="#parameter-startingToken"><code>startingToken</code></a>, <a href="#parameter-submissionStatus"><code>submissionStatus</code></a>, <a href="#parameter-runSettingId"><code>runSettingId</code></a>, <a href="#parameter-runId"><code>runId</code></a></td>
    <td>Returns a paginated list of individual workflow runs within a specific batch. Use this operation to map each runSettingId to its HealthOmics-generated runId, and to check the submission status of each run. Only one filter per call is supported.</td>
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
<tr id="parameter-maxItems">
    <td><CopyableCode code="maxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of runs to return.</td>
</tr>
<tr id="parameter-runId">
    <td><CopyableCode code="runId" /></td>
    <td><code>string</code></td>
    <td>Filter runs by the HealthOmics-generated run ID.</td>
</tr>
<tr id="parameter-runSettingId">
    <td><CopyableCode code="runSettingId" /></td>
    <td><code>string</code></td>
    <td>Filter runs by the customer-provided run setting ID.</td>
</tr>
<tr id="parameter-startingToken">
    <td><CopyableCode code="startingToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a prior ListRunsInBatch call.</td>
</tr>
<tr id="parameter-submissionStatus">
    <td><CopyableCode code="submissionStatus" /></td>
    <td><code>string</code></td>
    <td>Filter runs by submission status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_runs_in_batch"
    values={[
        { label: 'list_runs_in_batch', value: 'list_runs_in_batch' }
    ]}
>
<TabItem value="list_runs_in_batch">

Returns a paginated list of individual workflow runs within a specific batch. Use this operation to map each runSettingId to its HealthOmics-generated runId, and to check the submission status of each run. Only one filter per call is supported.

```sql
SELECT
run_arn,
run_id,
run_internal_uuid,
run_setting_id,
submission_failure_message,
submission_failure_reason,
submission_status
FROM aws.omics.runs_in_batches
WHERE batch_id = '{{ batch_id }}' -- required
AND region = '{{ region }}' -- required
AND maxItems = '{{ maxItems }}'
AND startingToken = '{{ startingToken }}'
AND submissionStatus = '{{ submissionStatus }}'
AND runSettingId = '{{ runSettingId }}'
AND runId = '{{ runId }}'
;
```
</TabItem>
</Tabs>
