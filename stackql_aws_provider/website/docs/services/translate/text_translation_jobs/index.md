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
    <td><CopyableCode code="DataAccessRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an AWS Identity Access and Management (IAM) role that granted Amazon Translate read access to the job's input data. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the translation job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="InputDataConfig" /></td>
    <td><code>object</code></td>
    <td>The input configuration properties that were specified when the job was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="JobDetails" /></td>
    <td><code>object</code></td>
    <td>The number of documents successfully and unsuccessfully processed during the translation job.</td>
</tr>
<tr>
    <td><CopyableCode code="JobId" /></td>
    <td><code>string</code></td>
    <td>The ID of the translation job. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobName" /></td>
    <td><code>string</code></td>
    <td>The user-defined name of the translation job. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="JobStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the translation job. (SUBMITTED, IN_PROGRESS, COMPLETED, COMPLETED_WITH_ERROR, FAILED, STOP_REQUESTED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>An explanation of any errors that may have occurred during the translation job.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputDataConfig" /></td>
    <td><code>object</code></td>
    <td>The output configuration properties that were specified when the job was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="ParallelDataNames" /></td>
    <td><code>array</code></td>
    <td>A list containing the names of the parallel data resources applied to the translation job.</td>
</tr>
<tr>
    <td><CopyableCode code="Settings" /></td>
    <td><code>object</code></td>
    <td>Settings that modify the translation output.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceLanguageCode" /></td>
    <td><code>string</code></td>
    <td>The language code of the language of the source text. The language must be a language supported by Amazon Translate.</td>
</tr>
<tr>
    <td><CopyableCode code="SubmittedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the translation job was submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetLanguageCodes" /></td>
    <td><code>array</code></td>
    <td>The language code of the language of the target text. The language must be a language supported by Amazon Translate.</td>
</tr>
<tr>
    <td><CopyableCode code="TerminologyNames" /></td>
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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return. (pattern: &lt;code&gt;\p&#123;ASCII&#125;&#123;0,8192&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TextTranslationJobPropertiesList" /></td>
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
DataAccessRoleArn,
EndTime,
InputDataConfig,
JobDetails,
JobId,
JobName,
JobStatus,
Message,
OutputDataConfig,
ParallelDataNames,
Settings,
SourceLanguageCode,
SubmittedTime,
TargetLanguageCodes,
TerminologyNames
FROM aws.translate.text_translation_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_text_translation_jobs">

Gets a list of the batch translation jobs that you have submitted.

```sql
SELECT
NextToken,
TextTranslationJobPropertiesList
FROM aws.translate.text_translation_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
