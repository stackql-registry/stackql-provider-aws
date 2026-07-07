--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
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

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_job"
    values={[
        { label: 'describe_job', value: 'describe_job' },
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="describe_job">

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
    <td><CopyableCode code="documentSource" /></td>
    <td><code>string</code></td>
    <td>An S3 link to the job document.</td>
</tr>
<tr>
    <td><CopyableCode code="job" /></td>
    <td><code>object</code></td>
    <td>Information about the job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_jobs">

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
    <td><CopyableCode code="completedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in seconds since the epoch, when the job completed.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in seconds since the epoch, when the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="isConcurrent" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a job is concurrent. Will be true when a job is rolling out new job executions or canceling previously created executions, otherwise false.</td>
</tr>
<tr>
    <td><CopyableCode code="jobArn" /></td>
    <td><code>string</code></td>
    <td>The job ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier you assigned to this job when it was created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, in seconds since the epoch, when the job was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The job summary status. (IN_PROGRESS, CANCELED, COMPLETED, DELETION_IN_PROGRESS, SCHEDULED)</td>
</tr>
<tr>
    <td><CopyableCode code="targetSelection" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group. We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets. By using continuous jobs, devices that join the group receive the job execution even after the job has been created. (CONTINUOUS, SNAPSHOT)</td>
</tr>
<tr>
    <td><CopyableCode code="thingGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the thing group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_job"><CopyableCode code="describe_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-beforeSubstitution"><code>beforeSubstitution</code></a></td>
    <td>Describes a job. Requires permission to access the DescribeJob action.</td>
</tr>
<tr>
    <td><a href="#list_jobs"><CopyableCode code="list_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-targetSelection"><code>targetSelection</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-thingGroupName"><code>thingGroupName</code></a>, <a href="#parameter-thingGroupId"><code>thingGroupId</code></a>, <a href="#parameter-namespaceId"><code>namespaceId</code></a></td>
    <td>Lists jobs. Requires permission to access the ListJobs action.</td>
</tr>
<tr>
    <td><a href="#create_job"><CopyableCode code="create_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targets"><code>targets</code></a></td>
    <td></td>
    <td>Creates a job. Requires permission to access the CreateJob action.</td>
</tr>
<tr>
    <td><a href="#associate_targets_with_job"><CopyableCode code="associate_targets_with_job" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targets"><code>targets</code></a></td>
    <td><a href="#parameter-namespaceId"><code>namespaceId</code></a></td>
    <td>Associates a group with a continuous job. The following criteria must be met: The job must have been created with the targetSelection field set to "CONTINUOUS". The job status must currently be "IN_PROGRESS". The total number of targets associated with a job must not exceed 100. Requires permission to access the AssociateTargetsWithJob action.</td>
</tr>
<tr>
    <td><a href="#update_job"><CopyableCode code="update_job" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-namespaceId"><code>namespaceId</code></a></td>
    <td>Updates supported fields of the specified job. Requires permission to access the UpdateJob action.</td>
</tr>
<tr>
    <td><a href="#delete_job"><CopyableCode code="delete_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a>, <a href="#parameter-namespaceId"><code>namespaceId</code></a></td>
    <td>Deletes a job and its related job executions. Deleting a job may take time, depending on the number of job executions created for the job and various other factors. While the job is being deleted, the status of the job will be shown as "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose status is already "DELETION_IN_PROGRESS" will result in an error. Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or a LimitExceededException will occur. Requires permission to access the DeleteJob action.</td>
</tr>
<tr>
    <td><a href="#cancel_job"><CopyableCode code="cancel_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Cancels a job. Requires permission to access the CancelJob action.</td>
</tr>
<tr>
    <td><a href="#cancel_job_execution"><CopyableCode code="cancel_job_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Cancels the execution of a job for a given thing. Requires permission to access the CancelJobExecution action.</td>
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
    <td>The ID of the job to be canceled.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-thing_name">
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the thing whose execution of the job will be canceled.</td>
</tr>
<tr id="parameter-beforeSubstitution">
    <td><CopyableCode code="beforeSubstitution" /></td>
    <td><code>boolean</code></td>
    <td>Provides a view of the job document before and after the substitution parameters have been resolved with their exact values.</td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td>(Optional) If true the job execution will be canceled if it has status IN_PROGRESS or QUEUED, otherwise the job execution will be canceled only if it has status QUEUED. If you attempt to cancel a job execution that is IN_PROGRESS, and you do not set force to true, then an InvalidStateTransitionException will be thrown. The default is false. Canceling a job execution which is "IN_PROGRESS", will cause the device to be unable to update the job execution status. Use caution and ensure that the device is able to recover to a valid state.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per request.</td>
</tr>
<tr id="parameter-namespaceId">
    <td><CopyableCode code="namespaceId" /></td>
    <td><code>string</code></td>
    <td>The namespace used to indicate that a job is a customer-managed job. When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format. $aws/things/THING_NAME/jobs/JOB_ID/notify-namespace-NAMESPACE_ID/ The namespaceId feature is only supported by IoT Greengrass at this time. For more information, see Setting up IoT Greengrass core devices.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next set of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>An optional filter that lets you search for jobs that have the specified status.</td>
</tr>
<tr id="parameter-targetSelection">
    <td><CopyableCode code="targetSelection" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group. We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets. By using continuous jobs, devices that join the group receive the job execution even after the job has been created.</td>
</tr>
<tr id="parameter-thingGroupId">
    <td><CopyableCode code="thingGroupId" /></td>
    <td><code>string</code></td>
    <td>A filter that limits the returned jobs to those for the specified group.</td>
</tr>
<tr id="parameter-thingGroupName">
    <td><CopyableCode code="thingGroupName" /></td>
    <td><code>string</code></td>
    <td>A filter that limits the returned jobs to those for the specified group.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_job"
    values={[
        { label: 'describe_job', value: 'describe_job' },
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="describe_job">

Describes a job. Requires permission to access the DescribeJob action.

```sql
SELECT
documentSource,
job
FROM aws.iot.jobs
WHERE job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
AND beforeSubstitution = '{{ beforeSubstitution }}'
;
```
</TabItem>
<TabItem value="list_jobs">

Lists jobs. Requires permission to access the ListJobs action.

```sql
SELECT
completedAt,
createdAt,
isConcurrent,
jobArn,
jobId,
lastUpdatedAt,
status,
targetSelection,
thingGroupId
FROM aws.iot.jobs
WHERE region = '{{ region }}' -- required
AND status = '{{ status }}'
AND targetSelection = '{{ targetSelection }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND thingGroupName = '{{ thingGroupName }}'
AND thingGroupId = '{{ thingGroupId }}'
AND namespaceId = '{{ namespaceId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_job"
    values={[
        { label: 'create_job', value: 'create_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_job">

Creates a job. Requires permission to access the CreateJob action.

```sql
INSERT INTO aws.iot.jobs (
targets,
documentSource,
document,
description,
presignedUrlConfig,
targetSelection,
jobExecutionsRolloutConfig,
abortConfig,
timeoutConfig,
tags,
namespaceId,
jobTemplateArn,
jobExecutionsRetryConfig,
documentParameters,
schedulingConfig,
destinationPackageVersions,
job_id,
region
)
SELECT 
'{{ targets }}' /* required */,
'{{ documentSource }}',
'{{ document }}',
'{{ description }}',
'{{ presignedUrlConfig }}',
'{{ targetSelection }}',
'{{ jobExecutionsRolloutConfig }}',
'{{ abortConfig }}',
'{{ timeoutConfig }}',
'{{ tags }}',
'{{ namespaceId }}',
'{{ jobTemplateArn }}',
'{{ jobExecutionsRetryConfig }}',
'{{ documentParameters }}',
'{{ schedulingConfig }}',
'{{ destinationPackageVersions }}',
'{{ job_id }}',
'{{ region }}'
RETURNING
description,
jobArn,
jobId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: jobs
  props:
    - name: job_id
      value: "{{ job_id }}"
      description: Required parameter for the jobs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the jobs resource.
    - name: targets
      value:
        - "{{ targets }}"
    - name: documentSource
      value: "{{ documentSource }}"
    - name: document
      value: "{{ document }}"
    - name: description
      value: "{{ description }}"
    - name: presignedUrlConfig
      description: |
        Configuration for pre-signed S3 URLs.
      value:
        roleArn: "{{ roleArn }}"
        expiresInSec: {{ expiresInSec }}
    - name: targetSelection
      value: "{{ targetSelection }}"
      valid_values: ['CONTINUOUS', 'SNAPSHOT']
    - name: jobExecutionsRolloutConfig
      description: |
        Allows you to create a staged rollout of a job.
      value:
        maximumPerMinute: {{ maximumPerMinute }}
        exponentialRate:
          baseRatePerMinute: {{ baseRatePerMinute }}
          incrementFactor: {{ incrementFactor }}
          rateIncreaseCriteria:
            numberOfNotifiedThings: {{ numberOfNotifiedThings }}
            numberOfSucceededThings: {{ numberOfSucceededThings }}
    - name: abortConfig
      description: |
        The criteria that determine when and how a job abort takes place.
      value:
        criteriaList:
          - failureType: "{{ failureType }}"
            action: "{{ action }}"
            thresholdPercentage: {{ thresholdPercentage }}
            minNumberOfExecutedThings: {{ minNumberOfExecutedThings }}
    - name: timeoutConfig
      description: |
        Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to IN_PROGRESS. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to TIMED_OUT.
      value:
        inProgressTimeoutInMinutes: {{ inProgressTimeoutInMinutes }}
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: namespaceId
      value: "{{ namespaceId }}"
    - name: jobTemplateArn
      value: "{{ jobTemplateArn }}"
    - name: jobExecutionsRetryConfig
      description: |
        The configuration that determines how many retries are allowed for each failure type for a job.
      value:
        criteriaList:
          - failureType: "{{ failureType }}"
            numberOfRetries: {{ numberOfRetries }}
    - name: documentParameters
      value: "{{ documentParameters }}"
    - name: schedulingConfig
      description: |
        Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group. Additionally, you can specify the end behavior for each job execution when it reaches the scheduled end time.
      value:
        startTime: "{{ startTime }}"
        endTime: "{{ endTime }}"
        endBehavior: "{{ endBehavior }}"
        maintenanceWindows:
          - startTime: "{{ startTime }}"
            durationInMinutes: {{ durationInMinutes }}
    - name: destinationPackageVersions
      value:
        - "{{ destinationPackageVersions }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_targets_with_job"
    values={[
        { label: 'associate_targets_with_job', value: 'associate_targets_with_job' },
        { label: 'update_job', value: 'update_job' }
    ]}
>
<TabItem value="associate_targets_with_job">

Associates a group with a continuous job. The following criteria must be met: The job must have been created with the targetSelection field set to "CONTINUOUS". The job status must currently be "IN_PROGRESS". The total number of targets associated with a job must not exceed 100. Requires permission to access the AssociateTargetsWithJob action.

```sql
UPDATE aws.iot.jobs
SET 
targets = '{{ targets }}',
comment = '{{ comment }}'
WHERE 
job_id = '{{ job_id }}' --required
AND region = '{{ region }}' --required
AND targets = '{{ targets }}' --required
AND namespaceId = '{{ namespaceId}}'
RETURNING
description,
jobArn,
jobId;
```
</TabItem>
<TabItem value="update_job">

Updates supported fields of the specified job. Requires permission to access the UpdateJob action.

```sql
UPDATE aws.iot.jobs
SET 
description = '{{ description }}',
presignedUrlConfig = '{{ presignedUrlConfig }}',
jobExecutionsRolloutConfig = '{{ jobExecutionsRolloutConfig }}',
abortConfig = '{{ abortConfig }}',
timeoutConfig = '{{ timeoutConfig }}',
jobExecutionsRetryConfig = '{{ jobExecutionsRetryConfig }}'
WHERE 
job_id = '{{ job_id }}' --required
AND region = '{{ region }}' --required
AND namespaceId = '{{ namespaceId}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_job"
    values={[
        { label: 'delete_job', value: 'delete_job' }
    ]}
>
<TabItem value="delete_job">

Deletes a job and its related job executions. Deleting a job may take time, depending on the number of job executions created for the job and various other factors. While the job is being deleted, the status of the job will be shown as "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose status is already "DELETION_IN_PROGRESS" will result in an error. Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or a LimitExceededException will occur. Requires permission to access the DeleteJob action.

```sql
DELETE FROM aws.iot.jobs
WHERE job_id = '{{ job_id }}' --required
AND region = '{{ region }}' --required
AND force = '{{ force }}'
AND namespaceId = '{{ namespaceId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_job"
    values={[
        { label: 'cancel_job', value: 'cancel_job' },
        { label: 'cancel_job_execution', value: 'cancel_job_execution' }
    ]}
>
<TabItem value="cancel_job">

Cancels a job. Requires permission to access the CancelJob action.

```sql
EXEC aws.iot.jobs.cancel_job 
@job_id='{{ job_id }}' --required, 
@region='{{ region }}' --required, 
@force={{ force }} 
@@json=
'{
"reasonCode": "{{ reasonCode }}", 
"comment": "{{ comment }}"
}'
;
```
</TabItem>
<TabItem value="cancel_job_execution">

Cancels the execution of a job for a given thing. Requires permission to access the CancelJobExecution action.

```sql
EXEC aws.iot.jobs.cancel_job_execution 
@job_id='{{ job_id }}' --required, 
@thing_name='{{ thing_name }}' --required, 
@region='{{ region }}' --required, 
@force={{ force }} 
@@json=
'{
"expectedVersion": {{ expectedVersion }}, 
"statusDetails": "{{ statusDetails }}"
}'
;
```
</TabItem>
</Tabs>
