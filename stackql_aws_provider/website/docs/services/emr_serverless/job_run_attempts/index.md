--- 
title: job_run_attempts
hide_title: false
hide_table_of_contents: false
keywords:
  - job_run_attempts
  - emr_serverless
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

Creates, updates, deletes, gets or lists a <code>job_run_attempts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_run_attempts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr_serverless.job_run_attempts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_job_run_attempts"
    values={[
        { label: 'list_job_run_attempts', value: 'list_job_run_attempts' }
    ]}
>
<TabItem value="list_job_run_attempts">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run attempt. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the job run attempt. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the application the job is running on. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the job run. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):emr-serverless:.+:(\d&#123;12&#125;):\/applications\/&#91;0-9a-zA-Z&#93;+\/jobruns\/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attempt" /></td>
    <td><code>integer</code></td>
    <td>The attempt number of the job run execution.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job run attempt was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the job run. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):(iam|sts)::(\d&#123;12&#125;)?:&#91;\w/+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="executionRole" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the execution role of the job run.. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z0-9-&#93;*):iam::(&#91;0-9&#93;&#123;12&#125;):(role((\u002F)|(\u002F&#91;\u0021-\u007F&#93;+\u002F))&#91;\w+=,.@-&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="jobCreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the job run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The mode of the job run attempt. (BATCH, STREAMING)</td>
</tr>
<tr>
    <td><CopyableCode code="releaseLabel" /></td>
    <td><code>string</code></td>
    <td>The Amazon EMR release label of the job run attempt. (pattern: &lt;code&gt;&#91;A-Za-z0-9._/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the job run attempt. (SUBMITTED, PENDING, SCHEDULED, RUNNING, SUCCESS, FAILED, CANCELLING, CANCELLED, QUEUED)</td>
</tr>
<tr>
    <td><CopyableCode code="stateDetails" /></td>
    <td><code>string</code></td>
    <td>The state details of the job run attempt. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the job run, such as Spark or Hive.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the job run attempt was last updated.</td>
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
    <td><a href="#list_job_run_attempts"><CopyableCode code="list_job_run_attempts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-job_run_id"><code>job_run_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all attempt of a job run.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application for which to list job runs.</td>
</tr>
<tr id="parameter-job_run_id">
    <td><CopyableCode code="job_run_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the job run to list.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of job run attempts to list.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of job run attempt results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_job_run_attempts"
    values={[
        { label: 'list_job_run_attempts', value: 'list_job_run_attempts' }
    ]}
>
<TabItem value="list_job_run_attempts">

Lists all attempt of a job run.

```sql
SELECT
id,
name,
applicationId,
arn,
attempt,
createdAt,
createdBy,
executionRole,
jobCreatedAt,
mode,
releaseLabel,
state,
stateDetails,
type_,
updatedAt
FROM aws.emr_serverless.job_run_attempts
WHERE application_id = '{{ application_id }}' -- required
AND job_run_id = '{{ job_run_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
