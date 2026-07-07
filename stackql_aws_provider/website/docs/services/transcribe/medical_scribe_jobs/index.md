--- 
title: medical_scribe_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - medical_scribe_jobs
  - transcribe
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

Creates, updates, deletes, gets or lists a <code>medical_scribe_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="medical_scribe_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transcribe.medical_scribe_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_medical_scribe_job"
    values={[
        { label: 'get_medical_scribe_job', value: 'get_medical_scribe_job' },
        { label: 'list_medical_scribe_jobs', value: 'list_medical_scribe_jobs' }
    ]}
>
<TabItem value="get_medical_scribe_job">

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
    <td><CopyableCode code="ChannelDefinitions" /></td>
    <td><code>array</code></td>
    <td>Makes it possible to specify which speaker is on which channel. For example, if the clinician is the first participant to speak, you would set ChannelId of the first ChannelDefinition in the list to 0 (to indicate the first channel) and ParticipantRole to CLINICIAN (to indicate that it's the clinician speaking). Then you would set the ChannelId of the second ChannelDefinition in the list to 1 (to indicate the second channel) and ParticipantRole to PATIENT (to indicate that it's the patient speaking).</td>
</tr>
<tr>
    <td><CopyableCode code="CompletionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the specified Medical Scribe job finished processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a Medical Scribe job that finished processing at 12:32 PM UTC-7 on May 4, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the specified Medical Scribe job request was made. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a Medical Scribe job that started processing at 12:32 PM UTC-7 on May 4, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="DataAccessRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files, write to the output bucket, and use your KMS key if supplied. If the role that you specify doesn’t have the appropriate permissions your request fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):iam::&#91;0-9&#93;&#123;0,63&#125;:role/&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1024&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>If MedicalScribeJobStatus is FAILED, FailureReason contains information about why the transcription job failed. See also: Common Errors.</td>
</tr>
<tr>
    <td><CopyableCode code="LanguageCode" /></td>
    <td><code>string</code></td>
    <td>The language code used to create your Medical Scribe job. US English (en-US) is the only supported language for Medical Scribe jobs. (en-US)</td>
</tr>
<tr>
    <td><CopyableCode code="Media" /></td>
    <td><code>object</code></td>
    <td>Describes the Amazon S3 location of the media file you want to use in your request. For information on supported media formats, refer to the MediaFormat parameter or the Media formats section in the Amazon S3 Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="MedicalScribeContextProvided" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the MedicalScribeContext object was provided when the Medical Scribe job was started.</td>
</tr>
<tr>
    <td><CopyableCode code="MedicalScribeJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the Medical Scribe job. Job names are case sensitive and must be unique within an Amazon Web Services account. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MedicalScribeJobStatus" /></td>
    <td><code>string</code></td>
    <td>Provides the status of the specified Medical Scribe job. If the status is COMPLETED, the job is finished and you can find the results at the location specified in MedicalScribeOutput If the status is FAILED, FailureReason provides details on why your Medical Scribe job failed. (QUEUED, IN_PROGRESS, FAILED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="MedicalScribeOutput" /></td>
    <td><code>object</code></td>
    <td>The location of the output of your Medical Scribe job. ClinicalDocumentUri holds the Amazon S3 URI for the Clinical Document and TranscriptFileUri holds the Amazon S3 URI for the Transcript.</td>
</tr>
<tr>
    <td><CopyableCode code="Settings" /></td>
    <td><code>object</code></td>
    <td>Makes it possible to control how your Medical Scribe job is processed using a MedicalScribeSettings object. Specify ChannelIdentification if ChannelDefinitions are set. Enabled ShowSpeakerLabels if ChannelIdentification and ChannelDefinitions are not set. One and only one of ChannelIdentification and ShowSpeakerLabels must be set. If ShowSpeakerLabels is set, MaxSpeakerLabels must also be set. Use Settings to specify a vocabulary or vocabulary filter or both using VocabularyName, VocabularyFilterName. VocabularyFilterMethod must be specified if VocabularyFilterName is set.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time your Medical Scribe job began processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a Medical Scribe job that started processing at 12:32 PM UTC-7 on May 4, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Adds one or more custom tags, each in the form of a key:value pair, to the Medical Scribe job. To learn more about using tags with Amazon Transcribe, refer to Tagging resources.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_medical_scribe_jobs">

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
    <td><CopyableCode code="MedicalScribeJobSummaries" /></td>
    <td><code>array</code></td>
    <td>Provides a summary of information about each result.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If NextToken is present in your response, it indicates that not all results are displayed. To view the next set of results, copy the string associated with the NextToken parameter in your results output, then run your request again including NextToken with the value of the copied string. Repeat as needed to view all your results. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Lists all Medical Scribe jobs that have the status specified in your request. Jobs are ordered by creation date, with the newest job first. (QUEUED, IN_PROGRESS, FAILED, COMPLETED)</td>
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
    <td><a href="#get_medical_scribe_job"><CopyableCode code="get_medical_scribe_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about the specified Medical Scribe job. To view the status of the specified medical transcription job, check the MedicalScribeJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in MedicalScribeOutput. If the status is FAILED, FailureReason provides details on why your Medical Scribe job failed. To get a list of your Medical Scribe jobs, use the operation.</td>
</tr>
<tr>
    <td><a href="#list_medical_scribe_jobs"><CopyableCode code="list_medical_scribe_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of Medical Scribe jobs that match the specified criteria. If no criteria are specified, all Medical Scribe jobs are returned. To get detailed information about a specific Medical Scribe job, use the operation.</td>
</tr>
<tr>
    <td><a href="#delete_medical_scribe_job"><CopyableCode code="delete_medical_scribe_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Medical Scribe job. To use this operation, specify the name of the job you want to delete using MedicalScribeJobName. Job names are case sensitive.</td>
</tr>
<tr>
    <td><a href="#start_medical_scribe_job"><CopyableCode code="start_medical_scribe_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MedicalScribeJobName"><code>MedicalScribeJobName</code></a>, <a href="#parameter-Media"><code>Media</code></a>, <a href="#parameter-OutputBucketName"><code>OutputBucketName</code></a>, <a href="#parameter-DataAccessRoleArn"><code>DataAccessRoleArn</code></a>, <a href="#parameter-Settings"><code>Settings</code></a></td>
    <td></td>
    <td>Transcribes patient-clinician conversations and generates clinical notes. Amazon Web Services HealthScribe automatically provides rich conversation transcripts, identifies speaker roles, classifies dialogues, extracts medical terms, and generates preliminary clinical notes. To learn more about these features, refer to Amazon Web Services HealthScribe. To make a StartMedicalScribeJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartMedicalTranscriptionJob request: DataAccessRoleArn: The ARN of an IAM role with the these minimum permissions: read permission on input file Amazon S3 bucket specified in Media, write permission on the Amazon S3 bucket specified in OutputBucketName, and full permissions on the KMS key specified in OutputEncryptionKMSKeyId (if set). The role should also allow transcribe.amazonaws.com to assume it. Media (MediaFileUri): The Amazon S3 location of your media file. MedicalScribeJobName: A custom name you create for your MedicalScribe job that is unique within your Amazon Web Services account. OutputBucketName: The Amazon S3 bucket where you want your output files stored. Settings: A MedicalScribeSettings object that must set exactly one of ShowSpeakerLabels or ChannelIdentification to true. If ShowSpeakerLabels is true, MaxSpeakerLabels must also be set. ChannelDefinitions: A MedicalScribeChannelDefinitions array should be set if and only if the ChannelIdentification value of Settings is set to true.</td>
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
    defaultValue="get_medical_scribe_job"
    values={[
        { label: 'get_medical_scribe_job', value: 'get_medical_scribe_job' },
        { label: 'list_medical_scribe_jobs', value: 'list_medical_scribe_jobs' }
    ]}
>
<TabItem value="get_medical_scribe_job">

Provides information about the specified Medical Scribe job. To view the status of the specified medical transcription job, check the MedicalScribeJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in MedicalScribeOutput. If the status is FAILED, FailureReason provides details on why your Medical Scribe job failed. To get a list of your Medical Scribe jobs, use the operation.

```sql
SELECT
ChannelDefinitions,
CompletionTime,
CreationTime,
DataAccessRoleArn,
FailureReason,
LanguageCode,
Media,
MedicalScribeContextProvided,
MedicalScribeJobName,
MedicalScribeJobStatus,
MedicalScribeOutput,
Settings,
StartTime,
Tags
FROM aws.transcribe.medical_scribe_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_medical_scribe_jobs">

Provides a list of Medical Scribe jobs that match the specified criteria. If no criteria are specified, all Medical Scribe jobs are returned. To get detailed information about a specific Medical Scribe job, use the operation.

```sql
SELECT
MedicalScribeJobSummaries,
NextToken,
Status
FROM aws.transcribe.medical_scribe_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_medical_scribe_job"
    values={[
        { label: 'delete_medical_scribe_job', value: 'delete_medical_scribe_job' }
    ]}
>
<TabItem value="delete_medical_scribe_job">

Deletes a Medical Scribe job. To use this operation, specify the name of the job you want to delete using MedicalScribeJobName. Job names are case sensitive.

```sql
DELETE FROM aws.transcribe.medical_scribe_jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_medical_scribe_job"
    values={[
        { label: 'start_medical_scribe_job', value: 'start_medical_scribe_job' }
    ]}
>
<TabItem value="start_medical_scribe_job">

Transcribes patient-clinician conversations and generates clinical notes. Amazon Web Services HealthScribe automatically provides rich conversation transcripts, identifies speaker roles, classifies dialogues, extracts medical terms, and generates preliminary clinical notes. To learn more about these features, refer to Amazon Web Services HealthScribe. To make a StartMedicalScribeJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartMedicalTranscriptionJob request: DataAccessRoleArn: The ARN of an IAM role with the these minimum permissions: read permission on input file Amazon S3 bucket specified in Media, write permission on the Amazon S3 bucket specified in OutputBucketName, and full permissions on the KMS key specified in OutputEncryptionKMSKeyId (if set). The role should also allow transcribe.amazonaws.com to assume it. Media (MediaFileUri): The Amazon S3 location of your media file. MedicalScribeJobName: A custom name you create for your MedicalScribe job that is unique within your Amazon Web Services account. OutputBucketName: The Amazon S3 bucket where you want your output files stored. Settings: A MedicalScribeSettings object that must set exactly one of ShowSpeakerLabels or ChannelIdentification to true. If ShowSpeakerLabels is true, MaxSpeakerLabels must also be set. ChannelDefinitions: A MedicalScribeChannelDefinitions array should be set if and only if the ChannelIdentification value of Settings is set to true.

```sql
EXEC aws.transcribe.medical_scribe_jobs.start_medical_scribe_job 
@region='{{ region }}' --required 
@@json=
'{
"MedicalScribeJobName": "{{ MedicalScribeJobName }}", 
"Media": "{{ Media }}", 
"OutputBucketName": "{{ OutputBucketName }}", 
"OutputEncryptionKMSKeyId": "{{ OutputEncryptionKMSKeyId }}", 
"KMSEncryptionContext": "{{ KMSEncryptionContext }}", 
"DataAccessRoleArn": "{{ DataAccessRoleArn }}", 
"Settings": "{{ Settings }}", 
"ChannelDefinitions": "{{ ChannelDefinitions }}", 
"Tags": "{{ Tags }}", 
"MedicalScribeContext": "{{ MedicalScribeContext }}"
}'
;
```
</TabItem>
</Tabs>
