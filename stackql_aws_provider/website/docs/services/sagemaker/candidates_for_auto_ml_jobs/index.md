--- 
title: candidates_for_auto_ml_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - candidates_for_auto_ml_jobs
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

Creates, updates, deletes, gets or lists a <code>candidates_for_auto_ml_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="candidates_for_auto_ml_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.candidates_for_auto_ml_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_candidates_for_auto_ml_job"
    values={[
        { label: 'list_candidates_for_auto_ml_job', value: 'list_candidates_for_auto_ml_job' }
    ]}
>
<TabItem value="list_candidates_for_auto_ml_job">

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
    <td><CopyableCode code="CandidateName" /></td>
    <td><code>string</code></td>
    <td>The name of the candidate.</td>
</tr>
<tr>
    <td><CopyableCode code="CandidateProperties" /></td>
    <td><code>object</code></td>
    <td>The properties of an AutoML candidate job.</td>
</tr>
<tr>
    <td><CopyableCode code="CandidateStatus" /></td>
    <td><code>string</code></td>
    <td>The candidate's status. (Completed, InProgress, Failed, Stopped, Stopping)</td>
</tr>
<tr>
    <td><CopyableCode code="CandidateSteps" /></td>
    <td><code>array</code></td>
    <td>Information about the candidate's steps.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>The failure reason.</td>
</tr>
<tr>
    <td><CopyableCode code="FinalAutoMLJobObjectiveMetric" /></td>
    <td><code>object</code></td>
    <td>The best candidate result from an AutoML training job.</td>
</tr>
<tr>
    <td><CopyableCode code="InferenceContainerDefinitions" /></td>
    <td><code>object</code></td>
    <td>The mapping of all supported processing unit (CPU, GPU, etc...) to inference container definitions for the candidate. This field is populated for the AutoML jobs V2 (for example, for jobs created by calling CreateAutoMLJobV2) related to image or text classification problem types only.</td>
</tr>
<tr>
    <td><CopyableCode code="InferenceContainers" /></td>
    <td><code>array</code></td>
    <td>Information about the recommended inference container definitions.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modified time.</td>
</tr>
<tr>
    <td><CopyableCode code="ObjectiveStatus" /></td>
    <td><code>string</code></td>
    <td>The objective's status. (Succeeded, Pending, Failed)</td>
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
    <td><a href="#list_candidates_for_auto_ml_job"><CopyableCode code="list_candidates_for_auto_ml_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the candidates created for the job.</td>
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
    defaultValue="list_candidates_for_auto_ml_job"
    values={[
        { label: 'list_candidates_for_auto_ml_job', value: 'list_candidates_for_auto_ml_job' }
    ]}
>
<TabItem value="list_candidates_for_auto_ml_job">

List the candidates created for the job.

```sql
SELECT
CandidateName,
CandidateProperties,
CandidateStatus,
CandidateSteps,
CreationTime,
EndTime,
FailureReason,
FinalAutoMLJobObjectiveMetric,
InferenceContainerDefinitions,
InferenceContainers,
LastModifiedTime,
ObjectiveStatus
FROM aws.sagemaker.candidates_for_auto_ml_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
