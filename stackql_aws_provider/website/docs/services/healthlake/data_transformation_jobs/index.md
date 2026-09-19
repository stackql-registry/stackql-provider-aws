--- 
title: data_transformation_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - data_transformation_jobs
  - healthlake
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

Creates, updates, deletes, gets or lists a <code>data_transformation_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_transformation_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.healthlake.data_transformation_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_transformation_job"
    values={[
        { label: 'describe_data_transformation_job', value: 'describe_data_transformation_job' },
        { label: 'list_data_transformation_jobs', value: 'list_data_transformation_jobs' }
    ]}
>
<TabItem value="describe_data_transformation_job">

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
    <td><CopyableCode code="data_access_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that grants HealthLake access to the specified Amazon S3 locations. HealthLake assumes this role to read input files and write output files. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="drift_detection_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether drift detection is enabled for this job. When enabled, HealthLake writes a drift report to the output Amazon S3 location alongside the converted files.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the job completed or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="input_data_config" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location and format of the source files for this job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data transformation job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the data transformation job. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_progress_report" /></td>
    <td><code>object</code></td>
    <td>The progress report for the data transformation job, including counts of files processed and resources generated.</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the data transformation job. (SUBMITTED, QUEUED, IN_PROGRESS, COMPLETED, COMPLETED_WITH_ERRORS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>An informational message about the job, such as an error description if the job failed.</td>
</tr>
<tr>
    <td><CopyableCode code="output_data_config" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location and encryption configuration for the converted output.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data transformation profile used for this job. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_name" /></td>
    <td><code>string</code></td>
    <td>The name of the data transformation profile used for this job.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_version" /></td>
    <td><code>integer</code></td>
    <td>The version number of the data transformation profile used for this job.</td>
</tr>
<tr>
    <td><CopyableCode code="provenance_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether FHIR R4 Provenance resource generation is enabled for this transformation job. When provenance is enabled, the service also generates related DocumentReference and Device resources.</td>
</tr>
<tr>
    <td><CopyableCode code="submit_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the job was submitted.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_transformation_jobs">

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
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the job completed.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the job. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the job. (SUBMITTED, QUEUED, IN_PROGRESS, COMPLETED, COMPLETED_WITH_ERRORS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="source_format" /></td>
    <td><code>string</code></td>
    <td>The source data format for this job. (CCDA, CSV)</td>
</tr>
<tr>
    <td><CopyableCode code="submit_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the job was submitted.</td>
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
    <td><a href="#describe_data_transformation_job"><CopyableCode code="describe_data_transformation_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a data transformation job, including its current status, configuration, and progress information.</td>
</tr>
<tr>
    <td><a href="#list_data_transformation_jobs"><CopyableCode code="list_data_transformation_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists data transformation jobs for your Amazon Web Services account. Results can be filtered by status, job name, and submit time window. Results are paginated. Use the NextToken parameter to retrieve additional results.</td>
</tr>
<tr>
    <td><a href="#start_data_transformation_job"><CopyableCode code="start_data_transformation_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InputDataConfig"><code>InputDataConfig</code></a>, <a href="#parameter-OutputDataConfig"><code>OutputDataConfig</code></a>, <a href="#parameter-DataAccessRoleArn"><code>DataAccessRoleArn</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-ProfileId"><code>ProfileId</code></a></td>
    <td></td>
    <td>Starts an asynchronous data transformation job that converts source files from Amazon Simple Storage Service (Amazon S3) and writes the output to Amazon S3 or HealthLake.</td>
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
    defaultValue="describe_data_transformation_job"
    values={[
        { label: 'describe_data_transformation_job', value: 'describe_data_transformation_job' },
        { label: 'list_data_transformation_jobs', value: 'list_data_transformation_jobs' }
    ]}
>
<TabItem value="describe_data_transformation_job">

Describes a data transformation job, including its current status, configuration, and progress information.

```sql
SELECT
data_access_role_arn,
drift_detection_enabled,
end_time,
input_data_config,
job_id,
job_name,
job_progress_report,
job_status,
message,
output_data_config,
profile_id,
profile_name,
profile_version,
provenance_enabled,
submit_time
FROM aws.healthlake.data_transformation_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_transformation_jobs">

Lists data transformation jobs for your Amazon Web Services account. Results can be filtered by status, job name, and submit time window. Results are paginated. Use the NextToken parameter to retrieve additional results.

```sql
SELECT
end_time,
job_id,
job_name,
job_status,
source_format,
submit_time
FROM aws.healthlake.data_transformation_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_data_transformation_job"
    values={[
        { label: 'start_data_transformation_job', value: 'start_data_transformation_job' }
    ]}
>
<TabItem value="start_data_transformation_job">

Starts an asynchronous data transformation job that converts source files from Amazon Simple Storage Service (Amazon S3) and writes the output to Amazon S3 or HealthLake.

```sql
EXEC aws.healthlake.data_transformation_jobs.start_data_transformation_job 
@region='{{ region }}' --required 
@@json=
'{
"InputDataConfig": "{{ InputDataConfig }}", 
"OutputDataConfig": "{{ OutputDataConfig }}", 
"DataAccessRoleArn": "{{ DataAccessRoleArn }}", 
"ClientToken": "{{ ClientToken }}", 
"JobName": "{{ JobName }}", 
"ProfileId": "{{ ProfileId }}", 
"DriftDetectionEnabled": {{ DriftDetectionEnabled }}, 
"ProvenanceEnabled": {{ ProvenanceEnabled }}
}'
;
```
</TabItem>
</Tabs>
