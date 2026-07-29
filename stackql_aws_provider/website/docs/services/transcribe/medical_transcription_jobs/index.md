--- 
title: medical_transcription_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - medical_transcription_jobs
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

Creates, updates, deletes, gets or lists a <code>medical_transcription_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="medical_transcription_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transcribe.medical_transcription_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_medical_transcription_job"
    values={[
        { label: 'get_medical_transcription_job', value: 'get_medical_transcription_job' },
        { label: 'list_medical_transcription_jobs', value: 'list_medical_transcription_jobs' }
    ]}
>
<TabItem value="get_medical_transcription_job">

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
    <td><CopyableCode code="completion_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the specified medical transcription job finished processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00 represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="content_identification_type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether content identification was enabled for your transcription request. (PHI)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the specified medical transcription job request was made. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If TranscriptionJobStatus is FAILED, FailureReason contains information about why the transcription job request failed. The FailureReason field contains one of the following values: Unsupported media format. The media format specified in MediaFormat isn't valid. Refer to refer to the MediaFormat parameter for a list of supported formats. The media format provided does not match the detected media format. The media format specified in MediaFormat doesn't match the format of the input file. Check the media format of your media file and correct the specified value. Invalid sample rate for audio file. The sample rate specified in MediaSampleRateHertz isn't valid. The sample rate must be between 16,000 and 48,000 hertz. The sample rate provided does not match the detected sample rate. The sample rate specified in MediaSampleRateHertz doesn't match the sample rate detected in your input media file. Check the sample rate of your media file and correct the specified value. Invalid file size: file size too large. The size of your media file is larger than what Amazon Transcribe can process. For more information, refer to Service quotas. Invalid number of channels: number of channels too large. Your audio contains more channels than Amazon Transcribe is able to process. For more information, refer to Service quotas.</td>
</tr>
<tr>
    <td><CopyableCode code="language_code" /></td>
    <td><code>string</code></td>
    <td>The language code used to create your medical transcription job. US English (en-US) is the only supported language for medical transcriptions. (af-ZA, ar-AE, ar-SA, da-DK, de-CH, de-DE, en-AB, en-AU, en-GB, en-IE, en-IN, en-US, en-WL, es-ES, es-US, fa-IR, fr-CA, fr-FR, he-IL, hi-IN, id-ID, it-IT, ja-JP, ko-KR, ms-MY, nl-NL, pt-BR, pt-PT, ru-RU, ta-IN, te-IN, tr-TR, zh-CN, zh-TW, th-TH, en-ZA, en-NZ, vi-VN, sv-SE, ab-GE, ast-ES, az-AZ, ba-RU, be-BY, bg-BG, bn-IN, bs-BA, ca-ES, ckb-IQ, ckb-IR, cs-CZ, cy-WL, el-GR, et-EE, et-ET, eu-ES, fi-FI, gl-ES, gu-IN, ha-NG, hr-HR, hu-HU, hy-AM, is-IS, ka-GE, kab-DZ, kk-KZ, kn-IN, ky-KG, lg-IN, lt-LT, lv-LV, mhr-RU, mi-NZ, mk-MK, ml-IN, mn-MN, mr-IN, mt-MT, no-NO, or-IN, pa-IN, pl-PL, ps-AF, ro-RO, rw-RW, si-LK, sk-SK, sl-SI, so-SO, sr-RS, su-ID, sw-BI, sw-KE, sw-RW, sw-TZ, sw-UG, tl-PH, tt-RU, ug-CN, uk-UA, uz-UZ, wo-SN, zh-HK, zu-ZA)</td>
</tr>
<tr>
    <td><CopyableCode code="media" /></td>
    <td><code>object</code></td>
    <td>Describes the Amazon S3 location of the media file you want to use in your request. For information on supported media formats, refer to the MediaFormat parameter or the Media formats section in the Amazon S3 Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="media_format" /></td>
    <td><code>string</code></td>
    <td>The format of the input media file. (mp3, mp4, wav, flac, ogg, amr, webm, m4a)</td>
</tr>
<tr>
    <td><CopyableCode code="media_sample_rate_hertz" /></td>
    <td><code>integer</code></td>
    <td>The sample rate, in hertz, of the audio track in your input media file.</td>
</tr>
<tr>
    <td><CopyableCode code="medical_transcription_job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the medical transcription job. Job names are case sensitive and must be unique within an Amazon Web Services account. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td>Provides information on any additional settings that were included in your request. Additional settings include channel identification, alternative transcriptions, speaker partitioning, custom vocabularies, and custom vocabulary filters.</td>
</tr>
<tr>
    <td><CopyableCode code="specialty" /></td>
    <td><code>string</code></td>
    <td>Describes the medical specialty represented in your media. (PRIMARYCARE)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the specified medical transcription job began processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags, each in the form of a key:value pair, assigned to the specified medical transcription job.</td>
</tr>
<tr>
    <td><CopyableCode code="transcript" /></td>
    <td><code>object</code></td>
    <td>Provides you with the Amazon S3 URI you can use to access your transcript.</td>
</tr>
<tr>
    <td><CopyableCode code="transcription_job_status" /></td>
    <td><code>string</code></td>
    <td>Provides the status of the specified medical transcription job. If the status is COMPLETED, the job is finished and you can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. (QUEUED, IN_PROGRESS, FAILED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the input media is a dictation or a conversation, as specified in the StartMedicalTranscriptionJob request. (CONVERSATION, DICTATION)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_medical_transcription_jobs">

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
    <td><CopyableCode code="medical_transcription_job_summaries" /></td>
    <td><code>array</code></td>
    <td>Provides a summary of information about each result.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If NextToken is present in your response, it indicates that not all results are displayed. To view the next set of results, copy the string associated with the NextToken parameter in your results output, then run your request again including NextToken with the value of the copied string. Repeat as needed to view all your results. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Lists all medical transcription jobs that have the status specified in your request. Jobs are ordered by creation date, with the newest job first. (QUEUED, IN_PROGRESS, FAILED, COMPLETED)</td>
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
    <td><a href="#get_medical_transcription_job"><CopyableCode code="get_medical_transcription_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about the specified medical transcription job. To view the status of the specified medical transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. To get a list of your medical transcription jobs, use the operation.</td>
</tr>
<tr>
    <td><a href="#list_medical_transcription_jobs"><CopyableCode code="list_medical_transcription_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned. To get detailed information about a specific medical transcription job, use the operation.</td>
</tr>
<tr>
    <td><a href="#delete_medical_transcription_job"><CopyableCode code="delete_medical_transcription_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using MedicalTranscriptionJobName. Job names are case sensitive.</td>
</tr>
<tr>
    <td><a href="#start_medical_transcription_job"><CopyableCode code="start_medical_transcription_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MedicalTranscriptionJobName"><code>MedicalTranscriptionJobName</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a>, <a href="#parameter-Media"><code>Media</code></a>, <a href="#parameter-OutputBucketName"><code>OutputBucketName</code></a>, <a href="#parameter-Specialty"><code>Specialty</code></a>, <a href="#parameter-Type"><code>Type</code></a></td>
    <td></td>
    <td>Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request. In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to How Amazon Transcribe Medical works. To make a StartMedicalTranscriptionJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartMedicalTranscriptionJob request: region: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas. MedicalTranscriptionJobName: A custom name you create for your transcription job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3 location of your media file. LanguageCode: This must be en-US. OutputBucketName: The Amazon S3 bucket where you want your transcript stored. If you want your output stored in a sub-folder of this bucket, you must also include OutputKey. Specialty: This must be PRIMARYCARE. Type: Choose whether your audio is a conversation or a dictation.</td>
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
    defaultValue="get_medical_transcription_job"
    values={[
        { label: 'get_medical_transcription_job', value: 'get_medical_transcription_job' },
        { label: 'list_medical_transcription_jobs', value: 'list_medical_transcription_jobs' }
    ]}
>
<TabItem value="get_medical_transcription_job">

Provides information about the specified medical transcription job. To view the status of the specified medical transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. To get a list of your medical transcription jobs, use the operation.

```sql
SELECT
completion_time,
content_identification_type,
creation_time,
failure_reason,
language_code,
media,
media_format,
media_sample_rate_hertz,
medical_transcription_job_name,
settings,
specialty,
start_time,
tags,
transcript,
transcription_job_status,
type
FROM aws.transcribe.medical_transcription_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_medical_transcription_jobs">

Provides a list of medical transcription jobs that match the specified criteria. If no criteria are specified, all medical transcription jobs are returned. To get detailed information about a specific medical transcription job, use the operation.

```sql
SELECT
medical_transcription_job_summaries,
next_token,
status
FROM aws.transcribe.medical_transcription_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_medical_transcription_job"
    values={[
        { label: 'delete_medical_transcription_job', value: 'delete_medical_transcription_job' }
    ]}
>
<TabItem value="delete_medical_transcription_job">

Deletes a medical transcription job. To use this operation, specify the name of the job you want to delete using MedicalTranscriptionJobName. Job names are case sensitive.

```sql
DELETE FROM aws.transcribe.medical_transcription_jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_medical_transcription_job"
    values={[
        { label: 'start_medical_transcription_job', value: 'start_medical_transcription_job' }
    ]}
>
<TabItem value="start_medical_transcription_job">

Transcribes the audio from a medical dictation or conversation and applies any additional Request Parameters you choose to include in your request. In addition to many standard transcription features, Amazon Transcribe Medical provides you with a robust medical vocabulary and, optionally, content identification, which adds flags to personal health information (PHI). To learn more about these features, refer to How Amazon Transcribe Medical works. To make a StartMedicalTranscriptionJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartMedicalTranscriptionJob request: region: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas. MedicalTranscriptionJobName: A custom name you create for your transcription job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3 location of your media file. LanguageCode: This must be en-US. OutputBucketName: The Amazon S3 bucket where you want your transcript stored. If you want your output stored in a sub-folder of this bucket, you must also include OutputKey. Specialty: This must be PRIMARYCARE. Type: Choose whether your audio is a conversation or a dictation.

```sql
EXEC aws.transcribe.medical_transcription_jobs.start_medical_transcription_job 
@region='{{ region }}' --required 
@@json=
'{
"MedicalTranscriptionJobName": "{{ MedicalTranscriptionJobName }}", 
"LanguageCode": "{{ LanguageCode }}", 
"MediaSampleRateHertz": {{ MediaSampleRateHertz }}, 
"MediaFormat": "{{ MediaFormat }}", 
"Media": "{{ Media }}", 
"OutputBucketName": "{{ OutputBucketName }}", 
"OutputKey": "{{ OutputKey }}", 
"OutputEncryptionKMSKeyId": "{{ OutputEncryptionKMSKeyId }}", 
"KMSEncryptionContext": "{{ KMSEncryptionContext }}", 
"Settings": "{{ Settings }}", 
"ContentIdentificationType": "{{ ContentIdentificationType }}", 
"Specialty": "{{ Specialty }}", 
"Type": "{{ Type }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
