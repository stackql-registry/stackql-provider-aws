--- 
title: classification_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - classification_jobs
  - macie2
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

Creates, updates, deletes, gets or lists a <code>classification_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="classification_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.classification_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_classification_job"
    values={[
        { label: 'describe_classification_job', value: 'describe_classification_job' },
        { label: 'list_classification_jobs', value: 'list_classification_jobs' }
    ]}
>
<TabItem value="describe_classification_job">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The custom name of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="allow_list_ids" /></td>
    <td><code>array</code></td>
    <td>An array of unique identifiers, one for each allow list that the job is configured to use when it analyzes data.</td>
</tr>
<tr>
    <td><CopyableCode code="client_token" /></td>
    <td><code>string</code></td>
    <td>The token that was provided to ensure the idempotency of the request to create the job.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_data_identifier_ids" /></td>
    <td><code>array</code></td>
    <td>An array of unique identifiers, one for each custom data identifier that the job is configured to use when it analyzes data. This value is null if the job is configured to use only managed data identifiers to analyze data.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The custom description of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="initial_run" /></td>
    <td><code>boolean</code></td>
    <td>For a recurring job, specifies whether you configured the job to analyze all existing, eligible objects immediately after the job was created (true). If you configured the job to analyze only those objects that were created or changed after the job was created and before the job's first scheduled run, this value is false. This value is also false for a one-time job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the job. Possible values are: CANCELLED - You cancelled the job or, if it's a one-time job, you paused the job and didn't resume it within 30 days. COMPLETE - For a one-time job, Amazon Macie finished processing the data specified for the job. This value doesn't apply to recurring jobs. IDLE - For a recurring job, the previous scheduled run is complete and the next scheduled run is pending. This value doesn't apply to one-time jobs. PAUSED - Macie started running the job but additional processing would exceed the monthly sensitive data discovery quota for your account or one or more member accounts that the job analyzes data for. RUNNING - For a one-time job, the job is in progress. For a recurring job, a scheduled run is in progress. USER_PAUSED - You paused the job. If you paused the job while it had a status of RUNNING and you don't resume it within 30 days of pausing it, the job or job run will expire and be cancelled, depending on the job's type. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property. (RUNNING, PAUSED, CANCELLED, COMPLETE, IDLE, USER_PAUSED)</td>
</tr>
<tr>
    <td><CopyableCode code="job_type" /></td>
    <td><code>string</code></td>
    <td>The schedule for running a classification job. Valid values are: (ONE_TIME, SCHEDULED)</td>
</tr>
<tr>
    <td><CopyableCode code="last_run_error_status" /></td>
    <td><code>object</code></td>
    <td>Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run.</td>
</tr>
<tr>
    <td><CopyableCode code="last_run_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when the job started. If the job is a recurring job, this value indicates when the most recent run started or, if the job hasn't run yet, when the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_data_identifier_ids" /></td>
    <td><code>array</code></td>
    <td>An array of unique identifiers, one for each managed data identifier that the job is explicitly configured to include (use) or exclude (not use) when it analyzes data. Inclusion or exclusion depends on the managed data identifier selection type specified for the job (managedDataIdentifierSelector). This value is null if the job's managed data identifier selection type is ALL, NONE, or RECOMMENDED.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_data_identifier_selector" /></td>
    <td><code>string</code></td>
    <td>The selection type that determines which managed data identifiers a classification job uses to analyze data. Valid values are: (ALL, EXCLUDE, INCLUDE, NONE, RECOMMENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="s_3_job_definition" /></td>
    <td><code>object</code></td>
    <td>Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.</td>
</tr>
<tr>
    <td><CopyableCode code="sampling_percentage" /></td>
    <td><code>integer</code></td>
    <td>The sampling depth, as a percentage, that determines the percentage of eligible objects that the job analyzes.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_frequency" /></td>
    <td><code>object</code></td>
    <td>Specifies the recurrence pattern for running a classification job.</td>
</tr>
<tr>
    <td><CopyableCode code="statistics" /></td>
    <td><code>object</code></td>
    <td>The number of times that the job has run and processing statistics for the job's current run.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of key-value pairs that specifies which tags (keys and values) are associated with the job.</td>
</tr>
<tr>
    <td><CopyableCode code="user_paused_details" /></td>
    <td><code>object</code></td>
    <td>If the current status of the job is USER_PAUSED, specifies when the job was paused and when the job or job run will expire and be cancelled if it isn't resumed. This value is present only if the value for jobStatus is USER_PAUSED.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_classification_jobs">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The custom name of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="bucket_criteria" /></td>
    <td><code>object</code></td>
    <td>The property- and tag-based conditions that determine which S3 buckets are included or excluded from the job's analysis. Each time the job runs, the job uses these criteria to determine which buckets to analyze. A job's definition can contain a bucketCriteria object or a bucketDefinitions array, not both.</td>
</tr>
<tr>
    <td><CopyableCode code="bucket_definitions" /></td>
    <td><code>array</code></td>
    <td>An array of objects, one for each Amazon Web Services account that owns specific S3 buckets for the job to analyze. Each object specifies the account ID for an account and one or more buckets to analyze for that account. A job's definition can contain a bucketDefinitions array or a bucketCriteria object, not both.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The status of a classification job. Possible values are: (RUNNING, PAUSED, CANCELLED, COMPLETE, IDLE, USER_PAUSED)</td>
</tr>
<tr>
    <td><CopyableCode code="job_type" /></td>
    <td><code>string</code></td>
    <td>The schedule for running a classification job. Valid values are: (ONE_TIME, SCHEDULED)</td>
</tr>
<tr>
    <td><CopyableCode code="last_run_error_status" /></td>
    <td><code>object</code></td>
    <td>Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run.</td>
</tr>
<tr>
    <td><CopyableCode code="user_paused_details" /></td>
    <td><code>object</code></td>
    <td>If the current status of the job is USER_PAUSED, specifies when the job was paused and when the job or job run will expire and be cancelled if it isn't resumed. This value is present only if the value for jobStatus is USER_PAUSED.</td>
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
    <td><a href="#describe_classification_job"><CopyableCode code="describe_classification_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the status and settings for a classification job.</td>
</tr>
<tr>
    <td><a href="#list_classification_jobs"><CopyableCode code="list_classification_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a subset of information about one or more classification jobs.</td>
</tr>
<tr>
    <td><a href="#create_classification_job"><CopyableCode code="create_classification_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-jobType"><code>jobType</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-s3JobDefinition"><code>s3JobDefinition</code></a></td>
    <td></td>
    <td>Creates and defines the settings for a classification job.</td>
</tr>
<tr>
    <td><a href="#update_classification_job"><CopyableCode code="update_classification_job" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobStatus"><code>jobStatus</code></a></td>
    <td></td>
    <td>Changes the status of a classification job.</td>
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
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the classification job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_classification_job"
    values={[
        { label: 'describe_classification_job', value: 'describe_classification_job' },
        { label: 'list_classification_jobs', value: 'list_classification_jobs' }
    ]}
>
<TabItem value="describe_classification_job">

Retrieves the status and settings for a classification job.

```sql
SELECT
name,
allow_list_ids,
client_token,
created_at,
custom_data_identifier_ids,
description,
initial_run,
job_arn,
job_id,
job_status,
job_type,
last_run_error_status,
last_run_time,
managed_data_identifier_ids,
managed_data_identifier_selector,
s_3_job_definition,
sampling_percentage,
schedule_frequency,
statistics,
tags,
user_paused_details
FROM aws.macie2.classification_jobs
WHERE job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_classification_jobs">

Retrieves a subset of information about one or more classification jobs.

```sql
SELECT
name,
bucket_criteria,
bucket_definitions,
created_at,
job_id,
job_status,
job_type,
last_run_error_status,
user_paused_details
FROM aws.macie2.classification_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_classification_job"
    values={[
        { label: 'create_classification_job', value: 'create_classification_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_classification_job">

Creates and defines the settings for a classification job.

```sql
INSERT INTO aws.macie2.classification_jobs (
allowListIds,
clientToken,
customDataIdentifierIds,
description,
initialRun,
jobType,
managedDataIdentifierIds,
managedDataIdentifierSelector,
name,
s3JobDefinition,
samplingPercentage,
scheduleFrequency,
tags,
region
)
SELECT 
'{{ allowListIds }}',
'{{ clientToken }}' /* required */,
'{{ customDataIdentifierIds }}',
'{{ description }}',
{{ initialRun }},
'{{ jobType }}' /* required */,
'{{ managedDataIdentifierIds }}',
'{{ managedDataIdentifierSelector }}',
'{{ name }}' /* required */,
'{{ s3JobDefinition }}' /* required */,
{{ samplingPercentage }},
'{{ scheduleFrequency }}',
'{{ tags }}',
'{{ region }}'
RETURNING
job_arn,
job_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: classification_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the classification_jobs resource.
    - name: allowListIds
      value:
        - "{{ allowListIds }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: customDataIdentifierIds
      value:
        - "{{ customDataIdentifierIds }}"
    - name: description
      value: "{{ description }}"
    - name: initialRun
      value: {{ initialRun }}
    - name: jobType
      value: "{{ jobType }}"
      description: |
        The schedule for running a classification job. Valid values are:
      valid_values: ['ONE_TIME', 'SCHEDULED']
    - name: managedDataIdentifierIds
      value:
        - "{{ managedDataIdentifierIds }}"
    - name: managedDataIdentifierSelector
      value: "{{ managedDataIdentifierSelector }}"
      description: |
        The selection type that determines which managed data identifiers a classification job uses to analyze data. Valid values are:
      valid_values: ['ALL', 'EXCLUDE', 'INCLUDE', 'NONE', 'RECOMMENDED']
    - name: name
      value: "{{ name }}"
    - name: s3JobDefinition
      description: |
        Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.
      value:
        bucketCriteria:
          excludes:
            and:
              - simpleCriterion:
                  comparator: "{{ comparator }}"
                  key: "{{ key }}"
                  values: "{{ values }}"
                tagCriterion:
                  comparator: "{{ comparator }}"
                  tagValues: "{{ tagValues }}"
          includes:
            and:
              - simpleCriterion:
                  comparator: "{{ comparator }}"
                  key: "{{ key }}"
                  values: "{{ values }}"
                tagCriterion:
                  comparator: "{{ comparator }}"
                  tagValues: "{{ tagValues }}"
        bucketDefinitions:
          - accountId: "{{ accountId }}"
            buckets: "{{ buckets }}"
        scoping:
          excludes:
            and:
              - simpleScopeTerm:
                  comparator: "{{ comparator }}"
                  key: "{{ key }}"
                  values: "{{ values }}"
                tagScopeTerm:
                  comparator: "{{ comparator }}"
                  key: "{{ key }}"
                  tagValues: "{{ tagValues }}"
                  target: "{{ target }}"
          includes:
            and:
              - simpleScopeTerm:
                  comparator: "{{ comparator }}"
                  key: "{{ key }}"
                  values: "{{ values }}"
                tagScopeTerm:
                  comparator: "{{ comparator }}"
                  key: "{{ key }}"
                  tagValues: "{{ tagValues }}"
                  target: "{{ target }}"
    - name: samplingPercentage
      value: {{ samplingPercentage }}
    - name: scheduleFrequency
      description: |
        Specifies the recurrence pattern for running a classification job.
      value:
        dailySchedule: "{{ dailySchedule }}"
        monthlySchedule:
          dayOfMonth: {{ dayOfMonth }}
        weeklySchedule:
          dayOfWeek: "{{ dayOfWeek }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_classification_job"
    values={[
        { label: 'update_classification_job', value: 'update_classification_job' }
    ]}
>
<TabItem value="update_classification_job">

Changes the status of a classification job.

```sql
UPDATE aws.macie2.classification_jobs
SET 
jobStatus = '{{ jobStatus }}'
WHERE 
job_id = '{{ job_id }}' --required
AND region = '{{ region }}' --required
AND jobStatus = '{{ jobStatus }}' --required;
```
</TabItem>
</Tabs>
