--- 
title: media_analysis_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - media_analysis_jobs
  - rekognition
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

Creates, updates, deletes, gets or lists a <code>media_analysis_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="media_analysis_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.media_analysis_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_media_analysis_job"
    values={[
        { label: 'get_media_analysis_job', value: 'get_media_analysis_job' },
        { label: 'list_media_analysis_jobs', value: 'list_media_analysis_jobs' }
    ]}
>
<TabItem value="get_media_analysis_job">

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
    <td><CopyableCode code="completion_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix date and time when the job finished.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix date and time when the job was started.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_details" /></td>
    <td><code>object</code></td>
    <td>Details about the error that resulted in failure of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="input" /></td>
    <td><code>object</code></td>
    <td>Reference to the input manifest that was provided in the job creation request.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the media analysis job. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the media analysis job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>KMS Key that was provided in the creation request. (pattern: &lt;code&gt;^&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,2048&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="manifest_summary" /></td>
    <td><code>object</code></td>
    <td>The summary manifest provides statistics on input manifest and errors identified in the input manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="operations_config" /></td>
    <td><code>object</code></td>
    <td>Operation configurations that were provided during job creation.</td>
</tr>
<tr>
    <td><CopyableCode code="output_config" /></td>
    <td><code>object</code></td>
    <td>Output configuration that was provided in the creation request.</td>
</tr>
<tr>
    <td><CopyableCode code="results" /></td>
    <td><code>object</code></td>
    <td>Output manifest that contains prediction results.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the media analysis job. (CREATED, QUEUED, IN_PROGRESS, SUCCEEDED, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_media_analysis_jobs">

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
    <td><CopyableCode code="media_analysis_jobs" /></td>
    <td><code>array</code></td>
    <td>Contains a list of all media analysis jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Pagination token, if the previous response was incomplete.</td>
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
    <td><a href="#get_media_analysis_job"><CopyableCode code="get_media_analysis_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the results for a given media analysis job. Takes a JobId returned by StartMediaAnalysisJob.</td>
</tr>
<tr>
    <td><a href="#list_media_analysis_jobs"><CopyableCode code="list_media_analysis_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of media analysis jobs. Results are sorted by CreationTimestamp in descending order.</td>
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
    defaultValue="get_media_analysis_job"
    values={[
        { label: 'get_media_analysis_job', value: 'get_media_analysis_job' },
        { label: 'list_media_analysis_jobs', value: 'list_media_analysis_jobs' }
    ]}
>
<TabItem value="get_media_analysis_job">

Retrieves the results for a given media analysis job. Takes a JobId returned by StartMediaAnalysisJob.

```sql
SELECT
completion_timestamp,
creation_timestamp,
failure_details,
input,
job_id,
job_name,
kms_key_id,
manifest_summary,
operations_config,
output_config,
results,
status
FROM aws.rekognition.media_analysis_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_media_analysis_jobs">

Returns a list of media analysis jobs. Results are sorted by CreationTimestamp in descending order.

```sql
SELECT
media_analysis_jobs,
next_token
FROM aws.rekognition.media_analysis_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
