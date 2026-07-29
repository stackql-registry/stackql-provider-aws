--- 
title: speaker_enrollment_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - speaker_enrollment_jobs
  - voice_id
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

Creates, updates, deletes, gets or lists a <code>speaker_enrollment_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="speaker_enrollment_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.voice_id.speaker_enrollment_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_speaker_enrollment_job"
    values={[
        { label: 'describe_speaker_enrollment_job', value: 'describe_speaker_enrollment_job' },
        { label: 'list_speaker_enrollment_jobs', value: 'list_speaker_enrollment_jobs' }
    ]}
>
<TabItem value="describe_speaker_enrollment_job">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when the speaker enrollment job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_access_role_arn" /></td>
    <td><code>string</code></td>
    <td>The IAM role Amazon Resource Name (ARN) that grants Voice ID permissions to access customer's buckets to read the input manifest file and write the job output file. (pattern: &lt;code&gt;^arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the domain that contains the speaker enrollment job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when the speaker enrollment job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="enrollment_config" /></td>
    <td><code>object</code></td>
    <td>The configuration that defines the action to take when the speaker is already enrolled in Voice ID, and the FraudDetectionConfig to use.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_details" /></td>
    <td><code>object</code></td>
    <td>Contains details that are populated when an entire batch job fails. In cases of individual registration job failures, the batch job as a whole doesn't fail; it is completed with a JobStatus of COMPLETED_WITH_ERRORS. You can use the job output file to identify the individual registration requests that failed.</td>
</tr>
<tr>
    <td><CopyableCode code="input_data_config" /></td>
    <td><code>object</code></td>
    <td>The input data config containing an S3 URI for the input manifest file that contains the list of speaker enrollment job requests.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The service-generated identifier for the speaker enrollment job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The client-provided name for the speaker enrollment job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_progress" /></td>
    <td><code>object</code></td>
    <td>Provides details on job progress. This field shows the completed percentage of registration requests listed in the input file.</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the speaker enrollment job. (SUBMITTED, IN_PROGRESS, COMPLETED, COMPLETED_WITH_ERRORS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="output_data_config" /></td>
    <td><code>object</code></td>
    <td>The output data config containing the S3 location where Voice ID writes the job output file; you must also include a KMS key ID to encrypt the file.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_speaker_enrollment_jobs">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when of the speaker enrollment job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the domain that contains the speaker enrollment job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when the speaker enrollment job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_details" /></td>
    <td><code>object</code></td>
    <td>Contains details that are populated when an entire batch job fails. In cases of individual registration job failures, the batch job as a whole doesn't fail; it is completed with a JobStatus of COMPLETED_WITH_ERRORS. You can use the job output file to identify the individual registration requests that failed.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The service-generated identifier for the speaker enrollment job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The client-provided name for the speaker enrollment job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_progress" /></td>
    <td><code>object</code></td>
    <td>Provides details regarding job progress. This field shows the completed percentage of enrollment requests listed in the input file.</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the speaker enrollment job. (SUBMITTED, IN_PROGRESS, COMPLETED, COMPLETED_WITH_ERRORS, FAILED)</td>
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
    <td><a href="#describe_speaker_enrollment_job"><CopyableCode code="describe_speaker_enrollment_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified speaker enrollment job.</td>
</tr>
<tr>
    <td><a href="#list_speaker_enrollment_jobs"><CopyableCode code="list_speaker_enrollment_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the speaker enrollment jobs in the domain with the specified JobStatus. If JobStatus is not provided, this lists all jobs with all possible speaker enrollment job statuses.</td>
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
    defaultValue="describe_speaker_enrollment_job"
    values={[
        { label: 'describe_speaker_enrollment_job', value: 'describe_speaker_enrollment_job' },
        { label: 'list_speaker_enrollment_jobs', value: 'list_speaker_enrollment_jobs' }
    ]}
>
<TabItem value="describe_speaker_enrollment_job">

Describes the specified speaker enrollment job.

```sql
SELECT
created_at,
data_access_role_arn,
domain_id,
ended_at,
enrollment_config,
failure_details,
input_data_config,
job_id,
job_name,
job_progress,
job_status,
output_data_config
FROM aws.voice_id.speaker_enrollment_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_speaker_enrollment_jobs">

Lists all the speaker enrollment jobs in the domain with the specified JobStatus. If JobStatus is not provided, this lists all jobs with all possible speaker enrollment job statuses.

```sql
SELECT
created_at,
domain_id,
ended_at,
failure_details,
job_id,
job_name,
job_progress,
job_status
FROM aws.voice_id.speaker_enrollment_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
