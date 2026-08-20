--- 
title: call_analytics_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - call_analytics_jobs
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

Creates, updates, deletes, gets or lists a <code>call_analytics_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="call_analytics_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transcribe.call_analytics_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_call_analytics_job"
    values={[
        { label: 'get_call_analytics_job', value: 'get_call_analytics_job' },
        { label: 'list_call_analytics_jobs', value: 'list_call_analytics_jobs' }
    ]}
>
<TabItem value="get_call_analytics_job">

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
    <td><CopyableCode code="call_analytics_job_details" /></td>
    <td><code>object</code></td>
    <td>Provides detailed information about a call analytics job, including information about skipped analytics features.</td>
</tr>
<tr>
    <td><CopyableCode code="call_analytics_job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Call Analytics job. Job names are case sensitive and must be unique within an Amazon Web Services account. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="call_analytics_job_status" /></td>
    <td><code>string</code></td>
    <td>Provides the status of the specified Call Analytics job. If the status is COMPLETED, the job is finished and you can find the results at the location specified in TranscriptFileUri (or RedactedTranscriptFileUri, if you requested transcript redaction). If the status is FAILED, FailureReason provides details on why your transcription job failed. (QUEUED, IN_PROGRESS, FAILED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="channel_definitions" /></td>
    <td><code>array</code></td>
    <td>Indicates which speaker is on which channel.</td>
</tr>
<tr>
    <td><CopyableCode code="completion_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the specified Call Analytics job finished processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00 represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the specified Call Analytics job request was made. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="data_access_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) you included in your request. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):iam::&#91;0-9&#93;&#123;0,63&#125;:role/&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1024&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If CallAnalyticsJobStatus is FAILED, FailureReason contains information about why the Call Analytics job request failed. The FailureReason field contains one of the following values: Unsupported media format. The media format specified in MediaFormat isn't valid. Refer to refer to the MediaFormat parameter for a list of supported formats. The media format provided does not match the detected media format. The media format specified in MediaFormat doesn't match the format of the input file. Check the media format of your media file and correct the specified value. Invalid sample rate for audio file. The sample rate specified in MediaSampleRateHertz isn't valid. The sample rate must be between 8,000 and 48,000 hertz. The sample rate provided does not match the detected sample rate. The sample rate specified in MediaSampleRateHertz doesn't match the sample rate detected in your input media file. Check the sample rate of your media file and correct the specified value. Invalid file size: file size too large. The size of your media file is larger than what Amazon Transcribe can process. For more information, refer to Service quotas. Invalid number of channels: number of channels too large. Your audio contains more channels than Amazon Transcribe is able to process. For more information, refer to Service quotas.</td>
</tr>
<tr>
    <td><CopyableCode code="identified_language_score" /></td>
    <td><code>number (float)</code></td>
    <td>The confidence score associated with the language identified in your media file. Confidence scores are values between 0 and 1; a larger value indicates a higher probability that the identified language correctly matches the language spoken in your media.</td>
</tr>
<tr>
    <td><CopyableCode code="language_code" /></td>
    <td><code>string</code></td>
    <td>The language code used to create your Call Analytics job. For a list of supported languages and their associated language codes, refer to the Supported languages table. If you do not know the language spoken in your media file, you can omit this field and let Amazon Transcribe automatically identify the language of your media. To improve the accuracy of language identification, you can include several language codes and Amazon Transcribe chooses the closest match for your transcription. (af-ZA, ar-AE, ar-SA, am-ET, cy-GB, da-DK, de-CH, de-DE, en-AB, en-AU, en-GB, en-IE, en-IN, en-US, en-WL, es-ES, es-MX, es-US, fa-AF, fa-IR, fr-CA, fr-FR, ga-IE, gd-GB, he-IL, hi-IN, ht-HT, id-ID, it-IT, ja-JP, jv-ID, km-KH, ko-KR, my-MM, ms-MY, nl-NL, pt-BR, pt-PT, ru-RU, ta-IN, te-IN, tr-TR, zh-CN, zh-TW, th-TH, en-ZA, en-NZ, vi-VN, sv-SE, ab-GE, ast-ES, az-AZ, ba-RU, be-BY, bg-BG, bn-IN, bs-BA, ca-ES, ckb-IQ, ckb-IR, cs-CZ, cy-WL, el-GR, et-EE, et-ET, eu-ES, fi-FI, gl-ES, gu-IN, ha-NG, hr-HR, hu-HU, hy-AM, is-IS, ka-GE, kab-DZ, kk-KZ, kn-IN, ky-KG, lg-IN, lt-LT, lv-LV, mhr-RU, mi-NZ, mk-MK, ml-IN, mn-MN, mr-IN, mt-MT, no-NO, ne-NP, or-IN, pa-IN, pl-PL, ps-AF, ro-RO, rw-RW, si-LK, sk-SK, sl-SI, so-SO, sq-AL, sr-RS, su-ID, sw-BI, sw-KE, sw-RW, sw-TZ, sw-UG, tl-PH, tt-RU, ug-CN, uk-UA, uz-UZ, wo-SN, zh-HK, zu-ZA)</td>
</tr>
<tr>
    <td><CopyableCode code="media" /></td>
    <td><code>object</code></td>
    <td>Provides the Amazon S3 location of the media file you used in your Call Analytics request.</td>
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
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td>Provides information on any additional settings that were included in your request. Additional settings include content redaction and language identification settings.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the specified Call Analytics job began processing. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags, each in the form of a key:value pair, assigned to the specified call analytics job.</td>
</tr>
<tr>
    <td><CopyableCode code="transcript" /></td>
    <td><code>object</code></td>
    <td>Provides you with the Amazon S3 URI you can use to access your transcript.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_call_analytics_jobs">

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
    <td><CopyableCode code="call_analytics_job_summaries" /></td>
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
    <td>Lists all Call Analytics jobs that have the status specified in your request. Jobs are ordered by creation date, with the newest job first. (QUEUED, IN_PROGRESS, FAILED, COMPLETED)</td>
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
    <td><a href="#get_call_analytics_job"><CopyableCode code="get_call_analytics_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about the specified Call Analytics job. To view the job's status, refer to CallAnalyticsJobStatus. If the status is COMPLETED, the job is finished. You can find your completed transcript at the URI specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in RedactedTranscriptFileUri. If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in RedactedMediaFileUri. To get a list of your Call Analytics jobs, use the operation.</td>
</tr>
<tr>
    <td><a href="#list_call_analytics_jobs"><CopyableCode code="list_call_analytics_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned. To get detailed information about a specific Call Analytics job, use the operation.</td>
</tr>
<tr>
    <td><a href="#delete_call_analytics_job"><CopyableCode code="delete_call_analytics_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using CallAnalyticsJobName. Job names are case sensitive.</td>
</tr>
<tr>
    <td><a href="#start_call_analytics_job"><CopyableCode code="start_call_analytics_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CallAnalyticsJobName"><code>CallAnalyticsJobName</code></a>, <a href="#parameter-Media"><code>Media</code></a></td>
    <td></td>
    <td>Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request. In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to Analyzing call center audio with Call Analytics. If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time transcriptions. To make a StartCallAnalyticsJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. Job queuing is available for Call Analytics jobs. If you pass a DataAccessRoleArn in your request and you exceed your Concurrent Job Limit, your job will automatically be added to a queue to be processed once your concurrent job count is below the limit. You must include the following parameters in your StartCallAnalyticsJob request: region: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas. CallAnalyticsJobName: A custom name that you create for your transcription job that's unique within your Amazon Web Services account. Media (MediaFileUri or RedactedMediaFileUri): The Amazon S3 location of your media file. With Call Analytics, you can redact the audio contained in your media file by including RedactedMediaFileUri, instead of MediaFileUri, to specify the location of your input audio. If you choose to redact your audio, you can find your redacted media at the location specified in the RedactedMediaFileUri field of your response.</td>
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
    defaultValue="get_call_analytics_job"
    values={[
        { label: 'get_call_analytics_job', value: 'get_call_analytics_job' },
        { label: 'list_call_analytics_jobs', value: 'list_call_analytics_jobs' }
    ]}
>
<TabItem value="get_call_analytics_job">

Provides information about the specified Call Analytics job. To view the job's status, refer to CallAnalyticsJobStatus. If the status is COMPLETED, the job is finished. You can find your completed transcript at the URI specified in TranscriptFileUri. If the status is FAILED, FailureReason provides details on why your transcription job failed. If you enabled personally identifiable information (PII) redaction, the redacted transcript appears at the location specified in RedactedTranscriptFileUri. If you chose to redact the audio in your media file, you can find your redacted media file at the location specified in RedactedMediaFileUri. To get a list of your Call Analytics jobs, use the operation.

```sql
SELECT
call_analytics_job_details,
call_analytics_job_name,
call_analytics_job_status,
channel_definitions,
completion_time,
creation_time,
data_access_role_arn,
failure_reason,
identified_language_score,
language_code,
media,
media_format,
media_sample_rate_hertz,
settings,
start_time,
tags,
transcript
FROM aws.transcribe.call_analytics_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_call_analytics_jobs">

Provides a list of Call Analytics jobs that match the specified criteria. If no criteria are specified, all Call Analytics jobs are returned. To get detailed information about a specific Call Analytics job, use the operation.

```sql
SELECT
call_analytics_job_summaries,
next_token,
status
FROM aws.transcribe.call_analytics_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_call_analytics_job"
    values={[
        { label: 'delete_call_analytics_job', value: 'delete_call_analytics_job' }
    ]}
>
<TabItem value="delete_call_analytics_job">

Deletes a Call Analytics job. To use this operation, specify the name of the job you want to delete using CallAnalyticsJobName. Job names are case sensitive.

```sql
DELETE FROM aws.transcribe.call_analytics_jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_call_analytics_job"
    values={[
        { label: 'start_call_analytics_job', value: 'start_call_analytics_job' }
    ]}
>
<TabItem value="start_call_analytics_job">

Transcribes the audio from a customer service call and applies any additional Request Parameters you choose to include in your request. In addition to many standard transcription features, Call Analytics provides you with call characteristics, call summarization, speaker sentiment, and optional redaction of your text transcript and your audio file. You can also apply custom categories to flag specified conditions. To learn more about these features and insights, refer to Analyzing call center audio with Call Analytics. If you want to apply categories to your Call Analytics job, you must create them before submitting your job request. Categories cannot be retroactively applied to a job. To create a new category, use the operation. To learn more about Call Analytics categories, see Creating categories for post-call transcriptions and Creating categories for real-time transcriptions. To make a StartCallAnalyticsJob request, you must first upload your media file into an Amazon S3 bucket; you can then specify the Amazon S3 location of the file using the Media parameter. Job queuing is available for Call Analytics jobs. If you pass a DataAccessRoleArn in your request and you exceed your Concurrent Job Limit, your job will automatically be added to a queue to be processed once your concurrent job count is below the limit. You must include the following parameters in your StartCallAnalyticsJob request: region: The Amazon Web Services Region where you are making your request. For a list of Amazon Web Services Regions supported with Amazon Transcribe, refer to Amazon Transcribe endpoints and quotas. CallAnalyticsJobName: A custom name that you create for your transcription job that's unique within your Amazon Web Services account. Media (MediaFileUri or RedactedMediaFileUri): The Amazon S3 location of your media file. With Call Analytics, you can redact the audio contained in your media file by including RedactedMediaFileUri, instead of MediaFileUri, to specify the location of your input audio. If you choose to redact your audio, you can find your redacted media at the location specified in the RedactedMediaFileUri field of your response.

```sql
EXEC aws.transcribe.call_analytics_jobs.start_call_analytics_job 
@region='{{ region }}' --required 
@@json=
'{
"CallAnalyticsJobName": "{{ CallAnalyticsJobName }}", 
"Media": "{{ Media }}", 
"OutputLocation": "{{ OutputLocation }}", 
"OutputEncryptionKMSKeyId": "{{ OutputEncryptionKMSKeyId }}", 
"DataAccessRoleArn": "{{ DataAccessRoleArn }}", 
"Settings": "{{ Settings }}", 
"Tags": "{{ Tags }}", 
"ChannelDefinitions": "{{ ChannelDefinitions }}"
}'
;
```
</TabItem>
</Tabs>
