--- 
title: text_translation_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - text_translation_jobs
  - translate
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

Creates, updates, deletes, gets or lists a <code>text_translation_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="text_translation_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.translate.text_translation_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_text_translation_job"
    values={[
        { label: 'describe_text_translation_job', value: 'describe_text_translation_job' },
        { label: 'list_text_translation_jobs', value: 'list_text_translation_jobs' }
    ]}
>
<TabItem value="describe_text_translation_job">

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
    <td>The Amazon Resource Name (ARN) of an AWS Identity Access and Management (IAM) role that granted Amazon Translate read access to the job's input data. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the translation job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="input_data_config" /></td>
    <td><code>object</code></td>
    <td>The input configuration properties that were specified when the job was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="job_details" /></td>
    <td><code>object</code></td>
    <td>The number of documents successfully and unsuccessfully processed during the translation job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the translation job. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The user-defined name of the translation job. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The status of the translation job. (SUBMITTED, IN_PROGRESS, COMPLETED, COMPLETED_WITH_ERROR, FAILED, STOP_REQUESTED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>An explanation of any errors that may have occurred during the translation job.</td>
</tr>
<tr>
    <td><CopyableCode code="output_data_config" /></td>
    <td><code>object</code></td>
    <td>The output configuration properties that were specified when the job was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="parallel_data_names" /></td>
    <td><code>array</code></td>
    <td>A list containing the names of the parallel data resources applied to the translation job.</td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td>Settings that modify the translation output.</td>
</tr>
<tr>
    <td><CopyableCode code="source_language_code" /></td>
    <td><code>string</code></td>
    <td>The language code of the language of the source text. The language must be a language supported by Amazon Translate.</td>
</tr>
<tr>
    <td><CopyableCode code="submitted_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the translation job was submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="target_language_codes" /></td>
    <td><code>array</code></td>
    <td>The language code of the language of the target text. The language must be a language supported by Amazon Translate.</td>
</tr>
<tr>
    <td><CopyableCode code="terminology_names" /></td>
    <td><code>array</code></td>
    <td>A list containing the names of the terminologies applied to a translation job. Only one terminology can be applied per StartTextTranslationJob request at this time.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_text_translation_jobs">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return. (pattern: &lt;code&gt;\p&#123;ASCII&#125;&#123;0,8192&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="text_translation_job_properties_list" /></td>
    <td><code>array</code></td>
    <td>A list containing the properties of each job that is returned.</td>
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
    <td><a href="#describe_text_translation_job"><CopyableCode code="describe_text_translation_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the properties associated with an asynchronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.</td>
</tr>
<tr>
    <td><a href="#list_text_translation_jobs"><CopyableCode code="list_text_translation_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of the batch translation jobs that you have submitted.</td>
</tr>
<tr>
    <td><a href="#start_text_translation_job"><CopyableCode code="start_text_translation_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InputDataConfig"><code>InputDataConfig</code></a>, <a href="#parameter-OutputDataConfig"><code>OutputDataConfig</code></a>, <a href="#parameter-DataAccessRoleArn"><code>DataAccessRoleArn</code></a>, <a href="#parameter-SourceLanguageCode"><code>SourceLanguageCode</code></a>, <a href="#parameter-TargetLanguageCodes"><code>TargetLanguageCodes</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Starts an asynchronous batch translation job. Use batch translation jobs to translate large volumes of text across multiple documents at once. For batch translation, you can input documents with different source languages (specify auto as the source language). You can specify one or more target languages. Batch translation translates each input document into each of the target languages. For more information, see Asynchronous batch processing. Batch translation jobs can be described with the DescribeTextTranslationJob operation, listed with the ListTextTranslationJobs operation, and stopped with the StopTextTranslationJob operation.</td>
</tr>
<tr>
    <td><a href="#stop_text_translation_job"><CopyableCode code="stop_text_translation_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JobId"><code>JobId</code></a></td>
    <td></td>
    <td>Stops an asynchronous batch translation job that is in progress. If the job's state is IN_PROGRESS, the job will be marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state. Otherwise, the job is put into the STOPPED state. Asynchronous batch translation jobs are started with the StartTextTranslationJob operation. You can use the DescribeTextTranslationJob or ListTextTranslationJobs operations to get a batch translation job's JobId.</td>
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
    defaultValue="describe_text_translation_job"
    values={[
        { label: 'describe_text_translation_job', value: 'describe_text_translation_job' },
        { label: 'list_text_translation_jobs', value: 'list_text_translation_jobs' }
    ]}
>
<TabItem value="describe_text_translation_job">

Gets the properties associated with an asynchronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.

```sql
SELECT
data_access_role_arn,
end_time,
input_data_config,
job_details,
job_id,
job_name,
job_status,
message,
output_data_config,
parallel_data_names,
settings,
source_language_code,
submitted_time,
target_language_codes,
terminology_names
FROM aws.translate.text_translation_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_text_translation_jobs">

Gets a list of the batch translation jobs that you have submitted.

```sql
SELECT
next_token,
text_translation_job_properties_list
FROM aws.translate.text_translation_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_text_translation_job"
    values={[
        { label: 'start_text_translation_job', value: 'start_text_translation_job' },
        { label: 'stop_text_translation_job', value: 'stop_text_translation_job' }
    ]}
>
<TabItem value="start_text_translation_job">

Starts an asynchronous batch translation job. Use batch translation jobs to translate large volumes of text across multiple documents at once. For batch translation, you can input documents with different source languages (specify auto as the source language). You can specify one or more target languages. Batch translation translates each input document into each of the target languages. For more information, see Asynchronous batch processing. Batch translation jobs can be described with the DescribeTextTranslationJob operation, listed with the ListTextTranslationJobs operation, and stopped with the StopTextTranslationJob operation.

```sql
EXEC aws.translate.text_translation_jobs.start_text_translation_job 
@region='{{ region }}' --required 
@@json=
'{
"JobName": "{{ JobName }}", 
"InputDataConfig": "{{ InputDataConfig }}", 
"OutputDataConfig": "{{ OutputDataConfig }}", 
"DataAccessRoleArn": "{{ DataAccessRoleArn }}", 
"SourceLanguageCode": "{{ SourceLanguageCode }}", 
"TargetLanguageCodes": "{{ TargetLanguageCodes }}", 
"TerminologyNames": "{{ TerminologyNames }}", 
"ParallelDataNames": "{{ ParallelDataNames }}", 
"ClientToken": "{{ ClientToken }}", 
"Settings": "{{ Settings }}"
}'
;
```
</TabItem>
<TabItem value="stop_text_translation_job">

Stops an asynchronous batch translation job that is in progress. If the job's state is IN_PROGRESS, the job will be marked for termination and put into the STOP_REQUESTED state. If the job completes before it can be stopped, it is put into the COMPLETED state. Otherwise, the job is put into the STOPPED state. Asynchronous batch translation jobs are started with the StartTextTranslationJob operation. You can use the DescribeTextTranslationJob or ListTextTranslationJobs operations to get a batch translation job's JobId.

```sql
EXEC aws.translate.text_translation_jobs.stop_text_translation_job 
@region='{{ region }}' --required 
@@json=
'{
"JobId": "{{ JobId }}"
}'
;
```
</TabItem>
</Tabs>
