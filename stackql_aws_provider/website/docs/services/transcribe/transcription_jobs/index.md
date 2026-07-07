--- 
title: transcription_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - transcription_jobs
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

Creates, updates, deletes, gets or lists a <code>transcription_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transcription_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transcribe.transcription_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_transcription_job"
    values={[
        { label: 'get_transcription_job', value: 'get_transcription_job' },
        { label: 'list_transcription_jobs', value: 'list_transcription_jobs' }
    ]}
>
<TabItem value="get_transcription_job">

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
    <td><CopyableCode code="CompletionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the specified transcription job finished processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00 represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="ContentRedaction" /></td>
    <td><code>object</code></td>
    <td>Makes it possible to redact or flag specified personally identifiable information (PII) in your transcript. If you use ContentRedaction, you must also include the sub-parameters: RedactionOutput and RedactionType. You can optionally include PiiEntityTypes to choose which types of PII you want to redact.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the specified transcription job request was made. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>If TranscriptionJobStatus is FAILED, FailureReason contains information about why the transcription job request failed. The FailureReason field contains one of the following values: Unsupported media format. The media format specified in MediaFormat isn't valid. Refer to refer to the MediaFormat parameter for a list of supported formats. The media format provided does not match the detected media format. The media format specified in MediaFormat doesn't match the format of the input file. Check the media format of your media file and correct the specified value. Invalid sample rate for audio file. The sample rate specified in MediaSampleRateHertz isn't valid. The sample rate must be between 8,000 and 48,000 hertz. The sample rate provided does not match the detected sample rate. The sample rate specified in MediaSampleRateHertz doesn't match the sample rate detected in your input media file. Check the sample rate of your media file and correct the specified value. Invalid file size: file size too large. The size of your media file is larger than what Amazon Transcribe can process. For more information, refer to Service quotas. Invalid number of channels: number of channels too large. Your audio contains more channels than Amazon Transcribe is able to process. For more information, refer to Service quotas.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentifiedLanguageScore" /></td>
    <td><code>number (float)</code></td>
    <td>The confidence score associated with the language identified in your media file. Confidence scores are values between 0 and 1; a larger value indicates a higher probability that the identified language correctly matches the language spoken in your media.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentifyLanguage" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether automatic language identification was enabled (TRUE) for the specified transcription job.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentifyMultipleLanguages" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether automatic multi-language identification was enabled (TRUE) for the specified transcription job.</td>
</tr>
<tr>
    <td><CopyableCode code="JobExecutionSettings" /></td>
    <td><code>object</code></td>
    <td>Provides information about how your transcription job was processed. This parameter shows if your request was queued and what data access role was used.</td>
</tr>
<tr>
    <td><CopyableCode code="LanguageCode" /></td>
    <td><code>string</code></td>
    <td>The language code used to create your transcription job. This parameter is used with single-language identification. For multi-language identification requests, refer to the plural version of this parameter, LanguageCodes. (af-ZA, ar-AE, ar-SA, da-DK, de-CH, de-DE, en-AB, en-AU, en-GB, en-IE, en-IN, en-US, en-WL, es-ES, es-US, fa-IR, fr-CA, fr-FR, he-IL, hi-IN, id-ID, it-IT, ja-JP, ko-KR, ms-MY, nl-NL, pt-BR, pt-PT, ru-RU, ta-IN, te-IN, tr-TR, zh-CN, zh-TW, th-TH, en-ZA, en-NZ, vi-VN, sv-SE, ab-GE, ast-ES, az-AZ, ba-RU, be-BY, bg-BG, bn-IN, bs-BA, ca-ES, ckb-IQ, ckb-IR, cs-CZ, cy-WL, el-GR, et-EE, et-ET, eu-ES, fi-FI, gl-ES, gu-IN, ha-NG, hr-HR, hu-HU, hy-AM, is-IS, ka-GE, kab-DZ, kk-KZ, kn-IN, ky-KG, lg-IN, lt-LT, lv-LV, mhr-RU, mi-NZ, mk-MK, ml-IN, mn-MN, mr-IN, mt-MT, no-NO, or-IN, pa-IN, pl-PL, ps-AF, ro-RO, rw-RW, si-LK, sk-SK, sl-SI, so-SO, sr-RS, su-ID, sw-BI, sw-KE, sw-RW, sw-TZ, sw-UG, tl-PH, tt-RU, ug-CN, uk-UA, uz-UZ, wo-SN, zh-HK, zu-ZA)</td>
</tr>
<tr>
    <td><CopyableCode code="LanguageCodes" /></td>
    <td><code>array</code></td>
    <td>The language codes used to create your transcription job. This parameter is used with multi-language identification. For single-language identification requests, refer to the singular version of this parameter, LanguageCode.</td>
</tr>
<tr>
    <td><CopyableCode code="LanguageIdSettings" /></td>
    <td><code>object</code></td>
    <td>Provides the name and language of all custom language models, custom vocabularies, and custom vocabulary filters that you included in your request.</td>
</tr>
<tr>
    <td><CopyableCode code="LanguageOptions" /></td>
    <td><code>array</code></td>
    <td>Provides the language codes you specified in your request.</td>
</tr>
<tr>
    <td><CopyableCode code="Media" /></td>
    <td><code>object</code></td>
    <td>Describes the Amazon S3 location of the media file you want to use in your request. For information on supported media formats, refer to the MediaFormat parameter or the Media formats section in the Amazon S3 Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="MediaFormat" /></td>
    <td><code>string</code></td>
    <td>The format of the input media file. (mp3, mp4, wav, flac, ogg, amr, webm, m4a)</td>
</tr>
<tr>
    <td><CopyableCode code="MediaSampleRateHertz" /></td>
    <td><code>integer</code></td>
    <td>The sample rate, in hertz, of the audio track in your input media file.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelSettings" /></td>
    <td><code>object</code></td>
    <td>Provides information on the custom language model you included in your request.</td>
</tr>
<tr>
    <td><CopyableCode code="Settings" /></td>
    <td><code>object</code></td>
    <td>Provides information on any additional settings that were included in your request. Additional settings include channel identification, alternative transcriptions, speaker partitioning, custom vocabularies, and custom vocabulary filters.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the specified transcription job began processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="Subtitles" /></td>
    <td><code>object</code></td>
    <td>Indicates whether subtitles were generated with your transcription.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags, each in the form of a key:value pair, assigned to the specified transcription job.</td>
</tr>
<tr>
    <td><CopyableCode code="ToxicityDetection" /></td>
    <td><code>array</code></td>
    <td>Provides information about the toxicity detection settings applied to your transcription.</td>
</tr>
<tr>
    <td><CopyableCode code="Transcript" /></td>
    <td><code>object</code></td>
    <td>Provides you with the Amazon S3 URI you can use to access your transcript.</td>
</tr>
<tr>
    <td><CopyableCode code="TranscriptionJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the transcription job. Job names are case sensitive and must be unique within an Amazon Web Services account. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TranscriptionJobStatus" /></td>
    <td><code>string</code></td>
    <td>Provides the status of the specified transcription job. If the status is COMPLETED, the job is finished and you can find the results at the location specified in TranscriptFileUri (or RedactedTranscriptFileUri, if you requested transcript redaction). If the status is FAILED, FailureReason provides details on why your transcription job failed. (QUEUED, IN_PROGRESS, FAILED, COMPLETED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_transcription_jobs">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If NextToken is present in your response, it indicates that not all results are displayed. To view the next set of results, copy the string associated with the NextToken parameter in your results output, then run your request again including NextToken with the value of the copied string. Repeat as needed to view all your results. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Lists all transcription jobs that have the status specified in your request. Jobs are ordered by creation date, with the newest job first. (QUEUED, IN_PROGRESS, FAILED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="TranscriptionJobSummaries" /></td>
    <td><code>array</code></td>
    <td>Provides a summary of information about each result.</td>
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
    <td><a href="#get_transcription_job"><CopyableCode code="get_transcription_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about the specified transcription job. To view the status of the specified transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. If you enabled content redaction, the redacted transcript can be found at the location specified in RedactedTranscriptFileUri. To get a list of your transcription jobs, use the operation.</td>
</tr>
<tr>
    <td><a href="#list_transcription_jobs"><CopyableCode code="list_transcription_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned. To get detailed information about a specific transcription job, use the operation.</td>
</tr>
<tr>
    <td><a href="#delete_transcription_job"><CopyableCode code="delete_transcription_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a transcription job. To use this operation, specify the name of the job you want to delete using TranscriptionJobName. Job names are case sensitive.</td>
</tr>
<tr>
    <td><a href="#start_transcription_job"><CopyableCode code="start_transcription_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TranscriptionJobName"><code>TranscriptionJobName</code></a>, <a href="#parameter-Media"><code>Media</code></a></td>
    <td></td>
    <td>Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request. To make a StartTranscriptionJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartTranscriptionJob request: region: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas. TranscriptionJobName: A custom name you create for your transcription job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3 location of your media file. One of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages: If you know the language of your media file, specify it using the LanguageCode parameter; you can find all valid language codes in the Supported languages table. If you do not know the languages spoken in your media, use either IdentifyLanguage or IdentifyMultipleLanguages and let Amazon Transcribe identify the languages for you.</td>
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
    defaultValue="get_transcription_job"
    values={[
        { label: 'get_transcription_job', value: 'get_transcription_job' },
        { label: 'list_transcription_jobs', value: 'list_transcription_jobs' }
    ]}
>
<TabItem value="get_transcription_job">

Provides information about the specified transcription job. To view the status of the specified transcription job, check the TranscriptionJobStatus field. If the status is COMPLETED, the job is finished. You can find the results at the location specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. If you enabled content redaction, the redacted transcript can be found at the location specified in RedactedTranscriptFileUri. To get a list of your transcription jobs, use the operation.

```sql
SELECT
CompletionTime,
ContentRedaction,
CreationTime,
FailureReason,
IdentifiedLanguageScore,
IdentifyLanguage,
IdentifyMultipleLanguages,
JobExecutionSettings,
LanguageCode,
LanguageCodes,
LanguageIdSettings,
LanguageOptions,
Media,
MediaFormat,
MediaSampleRateHertz,
ModelSettings,
Settings,
StartTime,
Subtitles,
Tags,
ToxicityDetection,
Transcript,
TranscriptionJobName,
TranscriptionJobStatus
FROM aws.transcribe.transcription_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_transcription_jobs">

Provides a list of transcription jobs that match the specified criteria. If no criteria are specified, all transcription jobs are returned. To get detailed information about a specific transcription job, use the operation.

```sql
SELECT
NextToken,
Status,
TranscriptionJobSummaries
FROM aws.transcribe.transcription_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_transcription_job"
    values={[
        { label: 'delete_transcription_job', value: 'delete_transcription_job' }
    ]}
>
<TabItem value="delete_transcription_job">

Deletes a transcription job. To use this operation, specify the name of the job you want to delete using TranscriptionJobName. Job names are case sensitive.

```sql
DELETE FROM aws.transcribe.transcription_jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_transcription_job"
    values={[
        { label: 'start_transcription_job', value: 'start_transcription_job' }
    ]}
>
<TabItem value="start_transcription_job">

Transcribes the audio from a media file and applies any additional Request Parameters you choose to include in your request. To make a StartTranscriptionJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. You must include the following parameters in your StartTranscriptionJob request: region: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas. TranscriptionJobName: A custom name you create for your transcription job that is unique within your Amazon Web Services account. Media (MediaFileUri): The Amazon S3 location of your media file. One of LanguageCode, IdentifyLanguage, or IdentifyMultipleLanguages: If you know the language of your media file, specify it using the LanguageCode parameter; you can find all valid language codes in the Supported languages table. If you do not know the languages spoken in your media, use either IdentifyLanguage or IdentifyMultipleLanguages and let Amazon Transcribe identify the languages for you.

```sql
EXEC aws.transcribe.transcription_jobs.start_transcription_job 
@region='{{ region }}' --required 
@@json=
'{
"TranscriptionJobName": "{{ TranscriptionJobName }}", 
"LanguageCode": "{{ LanguageCode }}", 
"MediaSampleRateHertz": {{ MediaSampleRateHertz }}, 
"MediaFormat": "{{ MediaFormat }}", 
"Media": "{{ Media }}", 
"OutputBucketName": "{{ OutputBucketName }}", 
"OutputKey": "{{ OutputKey }}", 
"OutputEncryptionKMSKeyId": "{{ OutputEncryptionKMSKeyId }}", 
"KMSEncryptionContext": "{{ KMSEncryptionContext }}", 
"Settings": "{{ Settings }}", 
"ModelSettings": "{{ ModelSettings }}", 
"JobExecutionSettings": "{{ JobExecutionSettings }}", 
"ContentRedaction": "{{ ContentRedaction }}", 
"IdentifyLanguage": {{ IdentifyLanguage }}, 
"IdentifyMultipleLanguages": {{ IdentifyMultipleLanguages }}, 
"LanguageOptions": "{{ LanguageOptions }}", 
"Subtitles": "{{ Subtitles }}", 
"Tags": "{{ Tags }}", 
"LanguageIdSettings": "{{ LanguageIdSettings }}", 
"ToxicityDetection": "{{ ToxicityDetection }}"
}'
;
```
</TabItem>
</Tabs>
