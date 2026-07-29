--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
  - s3control
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.jobs" /></td></tr>
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
    <td><CopyableCode code="confirmation_required" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether confirmation is required before Amazon S3 begins running the specified job. Confirmation is required only for jobs created through the Amazon S3 console.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>A timestamp indicating when this job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for this job, if one was provided in this job's Create Job request.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reasons" /></td>
    <td><code>string</code></td>
    <td>If the specified job failed, this field contains information describing the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="generated_manifest_descriptor" /></td>
    <td><code>string</code></td>
    <td>The attribute of the JobDescriptor containing details about the job's generated manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for this job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the specified job.</td>
</tr>
<tr>
    <td><CopyableCode code="manifest" /></td>
    <td><code>string</code></td>
    <td>The configuration information for the specified job's manifest object.</td>
</tr>
<tr>
    <td><CopyableCode code="manifest_generator" /></td>
    <td><code>string</code></td>
    <td>The manifest generator that was used to generate a job manifest for this job.</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>The operation that the specified job is configured to run on the objects listed in the manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The priority of the specified job.</td>
</tr>
<tr>
    <td><CopyableCode code="progress_summary" /></td>
    <td><code>string</code></td>
    <td>Describes the total number of tasks that the specified job has run, the number of tasks that succeeded, and the number of tasks that failed.</td>
</tr>
<tr>
    <td><CopyableCode code="report" /></td>
    <td><code>string</code></td>
    <td>Contains the configuration information for the job-completion report if you requested one in the Create Job request.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) role assigned to run the tasks for this job.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the specified job.</td>
</tr>
<tr>
    <td><CopyableCode code="status_update_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for updating the job.</td>
</tr>
<tr>
    <td><CopyableCode code="suspended_cause" /></td>
    <td><code>string</code></td>
    <td>The reason why the specified job was suspended. A job is only suspended if you create it through the Amazon S3 console. When you create the job, it enters the Suspended state to await confirmation before running. After you confirm the job, it automatically exits the Suspended state.</td>
</tr>
<tr>
    <td><CopyableCode code="suspended_date" /></td>
    <td><code>string</code></td>
    <td>The timestamp when this job was suspended, if it has been suspended.</td>
</tr>
<tr>
    <td><CopyableCode code="termination_date" /></td>
    <td><code>string</code></td>
    <td>A timestamp indicating when this job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.</td>
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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>A timestamp indicating when the specified job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The user-specified description that was included in the specified job's Create Job request.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the specified job.</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>The operation that the specified job is configured to run on every object listed in the manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The current priority for the specified job.</td>
</tr>
<tr>
    <td><CopyableCode code="progress_summary" /></td>
    <td><code>string</code></td>
    <td>Describes the total number of tasks that the specified job has run, the number of tasks that succeeded, and the number of tasks that failed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The specified job's current status.</td>
</tr>
<tr>
    <td><CopyableCode code="termination_date" /></td>
    <td><code>string</code></td>
    <td>A timestamp indicating when the specified job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.</td>
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
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the configuration parameters and status for a Batch Operations job. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions To use the DescribeJob operation, you must have permission to perform the s3:DescribeJob action. Related actions include: CreateJob ListJobs UpdateJobPriority UpdateJobStatus</td>
</tr>
<tr>
    <td><a href="#list_jobs"><CopyableCode code="list_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-jobStatuses"><code>jobStatuses</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists current S3 Batch Operations jobs as well as the jobs that have ended within the last 90 days for the Amazon Web Services account making the request. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions To use the ListJobs operation, you must have permission to perform the s3:ListJobs action. Related actions include: CreateJob DescribeJob UpdateJobPriority UpdateJobStatus</td>
</tr>
<tr>
    <td><a href="#create_job"><CopyableCode code="create_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>This operation creates an S3 Batch Operations job. You can use S3 Batch Operations to perform large-scale batch actions on Amazon S3 objects. Batch Operations can run a single action on lists of Amazon S3 objects that you specify. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions For information about permissions required to use the Batch Operations, see Granting permissions for S3 Batch Operations in the Amazon S3 User Guide. Related actions include: DescribeJob ListJobs UpdateJobPriority UpdateJobStatus JobOperation</td>
</tr>
<tr>
    <td><a href="#update_job_priority"><CopyableCode code="update_job_priority" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-priority"><code>priority</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing S3 Batch Operations job's priority. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions To use the UpdateJobPriority operation, you must have permission to perform the s3:UpdateJobPriority action. Related actions include: CreateJob ListJobs DescribeJob UpdateJobStatus</td>
</tr>
<tr>
    <td><a href="#update_job_status"><CopyableCode code="update_job_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-requestedJobStatus"><code>requestedJobStatus</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-statusUpdateReason"><code>statusUpdateReason</code></a></td>
    <td>Updates the status for the specified job. Use this operation to confirm that you want to run a job or to cancel an existing job. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions To use the UpdateJobStatus operation, you must have permission to perform the s3:UpdateJobStatus action. Related actions include: CreateJob ListJobs DescribeJob UpdateJobStatus</td>
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
    <td>The ID of the job whose status you want to update.</td>
</tr>
<tr id="parameter-priority">
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The priority you want to assign to this job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-requestedJobStatus">
    <td><CopyableCode code="requestedJobStatus" /></td>
    <td><code>string</code></td>
    <td>The status that you want to move the specified job to.</td>
</tr>
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with the S3 Batch Operations job.</td>
</tr>
<tr id="parameter-jobStatuses">
    <td><CopyableCode code="jobStatuses" /></td>
    <td><code>array</code></td>
    <td>The List Jobs request returns jobs that match the statuses listed in this element.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of jobs that Amazon S3 will include in the List Jobs response. If there are more jobs than this number, the response will include a pagination token in the NextToken field to enable you to retrieve the next page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token to request the next page of results. Use the token that Amazon S3 returned in the NextToken element of the ListJobsResult from the previous List Jobs request.</td>
</tr>
<tr id="parameter-statusUpdateReason">
    <td><CopyableCode code="statusUpdateReason" /></td>
    <td><code>string</code></td>
    <td>A description of the reason why you want to change the specified job's status. This field can be any string up to the maximum length.</td>
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

Retrieves the configuration parameters and status for a Batch Operations job. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions To use the DescribeJob operation, you must have permission to perform the s3:DescribeJob action. Related actions include: CreateJob ListJobs UpdateJobPriority UpdateJobStatus

```sql
SELECT
confirmation_required,
creation_time,
description,
failure_reasons,
generated_manifest_descriptor,
job_arn,
job_id,
manifest,
manifest_generator,
operation,
priority,
progress_summary,
report,
role_arn,
status,
status_update_reason,
suspended_cause,
suspended_date,
termination_date
FROM aws.s3control.jobs
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_jobs">

Lists current S3 Batch Operations jobs as well as the jobs that have ended within the last 90 days for the Amazon Web Services account making the request. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions To use the ListJobs operation, you must have permission to perform the s3:ListJobs action. Related actions include: CreateJob DescribeJob UpdateJobPriority UpdateJobStatus

```sql
SELECT
creation_time,
description,
job_id,
operation,
priority,
progress_summary,
status,
termination_date
FROM aws.s3control.jobs
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND region = '{{ region }}' -- required
AND jobStatuses = '{{ jobStatuses }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
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

This operation creates an S3 Batch Operations job. You can use S3 Batch Operations to perform large-scale batch actions on Amazon S3 objects. Batch Operations can run a single action on lists of Amazon S3 objects that you specify. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions For information about permissions required to use the Batch Operations, see Granting permissions for S3 Batch Operations in the Amazon S3 User Guide. Related actions include: DescribeJob ListJobs UpdateJobPriority UpdateJobStatus JobOperation

```sql
INSERT INTO aws.s3control.jobs (
ConfirmationRequired,
Operation,
Report,
ClientRequestToken,
Manifest,
Description,
Priority,
RoleArn,
Tags,
ManifestGenerator,
`x-amz-account-id`,
region
)
SELECT 
{{ ConfirmationRequired }},
'{{ Operation }}',
'{{ Report }}',
'{{ ClientRequestToken }}' /* required */,
'{{ Manifest }}',
'{{ Description }}',
{{ Priority }},
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
'{{ ManifestGenerator }}',
'{{ x-amz-account-id }}',
'{{ region }}'
RETURNING
job_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: jobs
  props:
    - name: x-amz-account-id
      value: "{{ x-amz-account-id }}"
      description: Required parameter for the jobs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the jobs resource.
    - name: ConfirmationRequired
      value: {{ ConfirmationRequired }}
    - name: Operation
      description: |
        The operation that you want this job to perform on every object listed in the manifest. For more information about the available operations, see Operations in the Amazon S3 User Guide.
      value:
        LambdaInvoke:
          FunctionArn: "{{ FunctionArn }}"
          InvocationSchemaVersion: "{{ InvocationSchemaVersion }}"
          UserArguments: "{{ UserArguments }}"
        S3PutObjectCopy:
          TargetResource: "{{ TargetResource }}"
          CannedAccessControlList: "{{ CannedAccessControlList }}"
          AccessControlGrants:
            - Grantee:
                TypeIdentifier: "{{ TypeIdentifier }}"
                Identifier: "{{ Identifier }}"
                DisplayName: "{{ DisplayName }}"
              Permission: "{{ Permission }}"
          MetadataDirective: "{{ MetadataDirective }}"
          ModifiedSinceConstraint: "{{ ModifiedSinceConstraint }}"
          NewObjectMetadata:
            CacheControl: "{{ CacheControl }}"
            ContentDisposition: "{{ ContentDisposition }}"
            ContentEncoding: "{{ ContentEncoding }}"
            ContentLanguage: "{{ ContentLanguage }}"
            UserMetadata: "{{ UserMetadata }}"
            ContentLength: {{ ContentLength }}
            ContentMD5: "{{ ContentMD5 }}"
            ContentType: "{{ ContentType }}"
            HttpExpiresDate: "{{ HttpExpiresDate }}"
            RequesterCharged: {{ RequesterCharged }}
            SSEAlgorithm: "{{ SSEAlgorithm }}"
          NewObjectTagging:
            - Key: "{{ Key }}"
              Value: "{{ Value }}"
          RedirectLocation: "{{ RedirectLocation }}"
          RequesterPays: {{ RequesterPays }}
          StorageClass: "{{ StorageClass }}"
          UnModifiedSinceConstraint: "{{ UnModifiedSinceConstraint }}"
          SSEAwsKmsKeyId: "{{ SSEAwsKmsKeyId }}"
          TargetKeyPrefix: "{{ TargetKeyPrefix }}"
          ObjectLockLegalHoldStatus: "{{ ObjectLockLegalHoldStatus }}"
          ObjectLockMode: "{{ ObjectLockMode }}"
          ObjectLockRetainUntilDate: "{{ ObjectLockRetainUntilDate }}"
          BucketKeyEnabled: {{ BucketKeyEnabled }}
          ChecksumAlgorithm: "{{ ChecksumAlgorithm }}"
        S3PutObjectAcl:
          AccessControlPolicy:
            AccessControlList:
              Owner:
                ID: "{{ ID }}"
                DisplayName: "{{ DisplayName }}"
              Grants:
                - Grantee:
                    TypeIdentifier: "{{ TypeIdentifier }}"
                    Identifier: "{{ Identifier }}"
                    DisplayName: "{{ DisplayName }}"
                  Permission: "{{ Permission }}"
            CannedAccessControlList: "{{ CannedAccessControlList }}"
        S3PutObjectTagging:
          TagSet:
            - Key: "{{ Key }}"
              Value: "{{ Value }}"
        S3DeleteObjectTagging: "{{ S3DeleteObjectTagging }}"
        S3InitiateRestoreObject:
          ExpirationInDays: {{ ExpirationInDays }}
          GlacierJobTier: "{{ GlacierJobTier }}"
        S3PutObjectLegalHold:
          LegalHold:
            Status: "{{ Status }}"
        S3PutObjectRetention:
          BypassGovernanceRetention: {{ BypassGovernanceRetention }}
          Retention:
            RetainUntilDate: "{{ RetainUntilDate }}"
            Mode: "{{ Mode }}"
        S3ReplicateObject: "{{ S3ReplicateObject }}"
        S3ComputeObjectChecksum:
          ChecksumAlgorithm: "{{ ChecksumAlgorithm }}"
          ChecksumType: "{{ ChecksumType }}"
        S3UpdateObjectEncryption:
          ObjectEncryption:
            SSEKMS:
              KMSKeyArn: "{{ KMSKeyArn }}"
              BucketKeyEnabled: {{ BucketKeyEnabled }}
    - name: Report
      description: |
        Contains the configuration parameters for a job-completion report.
      value:
        Bucket: "{{ Bucket }}"
        Format: "{{ Format }}"
        Enabled: {{ Enabled }}
        Prefix: "{{ Prefix }}"
        ReportScope: "{{ ReportScope }}"
        ExpectedBucketOwner: "{{ ExpectedBucketOwner }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: Manifest
      description: |
        Contains the configuration information for a job's manifest.
      value:
        Spec:
          Format: "{{ Format }}"
          Fields:
            - "{{ Fields }}"
        Location:
          ObjectArn: "{{ ObjectArn }}"
          ObjectVersionId: "{{ ObjectVersionId }}"
          ETag: "{{ ETag }}"
    - name: Description
      value: "{{ Description }}"
    - name: Priority
      value: {{ Priority }}
    - name: RoleArn
      value: "{{ RoleArn }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ManifestGenerator
      description: |
        Configures the type of the job's ManifestGenerator.
      value:
        S3JobManifestGenerator:
          ExpectedBucketOwner: "{{ ExpectedBucketOwner }}"
          SourceBucket: "{{ SourceBucket }}"
          ManifestOutputLocation:
            ExpectedManifestBucketOwner: "{{ ExpectedManifestBucketOwner }}"
            Bucket: "{{ Bucket }}"
            ManifestPrefix: "{{ ManifestPrefix }}"
            ManifestEncryption:
              SSES3: "{{ SSES3 }}"
              SSEKMS:
                KeyId: "{{ KeyId }}"
            ManifestFormat: "{{ ManifestFormat }}"
          Filter:
            EligibleForReplication: {{ EligibleForReplication }}
            CreatedAfter: "{{ CreatedAfter }}"
            CreatedBefore: "{{ CreatedBefore }}"
            ObjectReplicationStatuses:
              - "{{ ObjectReplicationStatuses }}"
            KeyNameConstraint:
              MatchAnyPrefix:
                - "{{ MatchAnyPrefix }}"
              MatchAnySuffix:
                - "{{ MatchAnySuffix }}"
              MatchAnySubstring:
                - "{{ MatchAnySubstring }}"
            ObjectSizeGreaterThanBytes: {{ ObjectSizeGreaterThanBytes }}
            ObjectSizeLessThanBytes: {{ ObjectSizeLessThanBytes }}
            MatchAnyStorageClass:
              - "{{ MatchAnyStorageClass }}"
            MatchAnyObjectEncryption:
              - SSES3: "{{ SSES3 }}"
                SSEKMS:
                  KmsKeyArn: "{{ KmsKeyArn }}"
                  BucketKeyEnabled: {{ BucketKeyEnabled }}
                DSSEKMS:
                  KmsKeyArn: "{{ KmsKeyArn }}"
                SSEC: "{{ SSEC }}"
                NOTSSE: "{{ NOTSSE }}"
          EnableManifestOutput: {{ EnableManifestOutput }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_job_priority"
    values={[
        { label: 'update_job_priority', value: 'update_job_priority' },
        { label: 'update_job_status', value: 'update_job_status' }
    ]}
>
<TabItem value="update_job_priority">

Updates an existing S3 Batch Operations job's priority. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions To use the UpdateJobPriority operation, you must have permission to perform the s3:UpdateJobPriority action. Related actions include: CreateJob ListJobs DescribeJob UpdateJobStatus

```sql
UPDATE aws.s3control.jobs
SET 
-- No updatable properties
WHERE 
`x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND id = '{{ id }}' --required
AND priority = '{{ priority }}' --required
AND region = '{{ region }}' --required
RETURNING
job_id,
priority;
```
</TabItem>
<TabItem value="update_job_status">

Updates the status for the specified job. Use this operation to confirm that you want to run a job or to cancel an existing job. For more information, see S3 Batch Operations in the Amazon S3 User Guide. Permissions To use the UpdateJobStatus operation, you must have permission to perform the s3:UpdateJobStatus action. Related actions include: CreateJob ListJobs DescribeJob UpdateJobStatus

```sql
UPDATE aws.s3control.jobs
SET 
-- No updatable properties
WHERE 
`x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND id = '{{ id }}' --required
AND requestedJobStatus = '{{ requestedJobStatus }}' --required
AND region = '{{ region }}' --required
AND statusUpdateReason = '{{ statusUpdateReason}}'
RETURNING
job_id,
status,
status_update_reason;
```
</TabItem>
</Tabs>
