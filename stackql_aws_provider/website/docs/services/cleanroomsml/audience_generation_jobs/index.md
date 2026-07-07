--- 
title: audience_generation_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - audience_generation_jobs
  - cleanroomsml
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

Creates, updates, deletes, gets or lists an <code>audience_generation_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="audience_generation_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanroomsml.audience_generation_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_audience_generation_job"
    values={[
        { label: 'get_audience_generation_job', value: 'get_audience_generation_job' },
        { label: 'list_audience_generation_jobs', value: 'list_audience_generation_jobs' }
    ]}
>
<TabItem value="get_audience_generation_job">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the audience generation job. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="audienceGenerationJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the audience generation job. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:audience-generation-job/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the collaboration that this audience generation job is associated with. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredAudienceModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured audience model used for this audience generation job. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:configured-audience-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the audience generation job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the audience generation job. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="includeSeedInOutput" /></td>
    <td><code>boolean</code></td>
    <td>Configure whether the seed users are included in the output audience. By default, Clean Rooms ML removes seed users from the output audience. If you specify TRUE, the seed users will appear first in the output. Clean Rooms ML does not explicitly reveal whether a user was in the seed, but the recipient of the audience will know that the first minimumSeedSize count of users are from the seed.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>object</code></td>
    <td>The relevance scores for different audience sizes and the recall score of the generated audience.</td>
</tr>
<tr>
    <td><CopyableCode code="protectedQueryIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the protected query for this audience generation job.</td>
</tr>
<tr>
    <td><CopyableCode code="seedAudience" /></td>
    <td><code>object</code></td>
    <td>The seed audience that was used for this audience generation job. This field will be null if the account calling the API is the account that started this audience generation job.</td>
</tr>
<tr>
    <td><CopyableCode code="startedBy" /></td>
    <td><code>string</code></td>
    <td>The AWS account that started this audience generation job. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the audience generation job. (CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusDetails" /></td>
    <td><code>object</code></td>
    <td>Details about the status of a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that are associated to this audience generation job.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the audience generation job was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_audience_generation_jobs">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the audience generation job. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="audienceGenerationJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the audience generation job. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:audience-generation-job/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborationId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the collaboration that contains this audience generation job. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuredAudienceModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured audience model that was used for this audience generation job. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:configured-audience-model/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the audience generation job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the audience generation job. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startedBy" /></td>
    <td><code>string</code></td>
    <td>The AWS Account that submitted the job. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the audience generation job. (CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE, DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the audience generation job was updated.</td>
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
    <td><a href="#get_audience_generation_job"><CopyableCode code="get_audience_generation_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-audience_generation_job_arn"><code>audience_generation_job_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an audience generation job.</td>
</tr>
<tr>
    <td><a href="#list_audience_generation_jobs"><CopyableCode code="list_audience_generation_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-configuredAudienceModelArn"><code>configuredAudienceModelArn</code></a>, <a href="#parameter-collaborationId"><code>collaborationId</code></a></td>
    <td>Returns a list of audience generation jobs.</td>
</tr>
<tr>
    <td><a href="#delete_audience_generation_job"><CopyableCode code="delete_audience_generation_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-audience_generation_job_arn"><code>audience_generation_job_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified audience generation job, and removes all data associated with the job.</td>
</tr>
<tr>
    <td><a href="#start_audience_export_job"><CopyableCode code="start_audience_export_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-audienceGenerationJobArn"><code>audienceGenerationJobArn</code></a>, <a href="#parameter-audienceSize"><code>audienceSize</code></a></td>
    <td></td>
    <td>Export an audience of a specified size after you have generated an audience.</td>
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
<tr id="parameter-audience_generation_job_arn">
    <td><CopyableCode code="audience_generation_job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the audience generation job that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-collaborationId">
    <td><CopyableCode code="collaborationId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the collaboration that contains the audience generation jobs that you are interested in.</td>
</tr>
<tr id="parameter-configuredAudienceModelArn">
    <td><CopyableCode code="configuredAudienceModelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configured audience model that was used for the audience generation jobs that you are interested in.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum size of the results that is returned per call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token value retrieved from a previous call to access the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_audience_generation_job"
    values={[
        { label: 'get_audience_generation_job', value: 'get_audience_generation_job' },
        { label: 'list_audience_generation_jobs', value: 'list_audience_generation_jobs' }
    ]}
>
<TabItem value="get_audience_generation_job">

Returns information about an audience generation job.

```sql
SELECT
name,
audienceGenerationJobArn,
collaborationId,
configuredAudienceModelArn,
createTime,
description,
includeSeedInOutput,
metrics,
protectedQueryIdentifier,
seedAudience,
startedBy,
status,
statusDetails,
tags,
updateTime
FROM aws.cleanroomsml.audience_generation_jobs
WHERE audience_generation_job_arn = '{{ audience_generation_job_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_audience_generation_jobs">

Returns a list of audience generation jobs.

```sql
SELECT
name,
audienceGenerationJobArn,
collaborationId,
configuredAudienceModelArn,
createTime,
description,
startedBy,
status,
updateTime
FROM aws.cleanroomsml.audience_generation_jobs
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND configuredAudienceModelArn = '{{ configuredAudienceModelArn }}'
AND collaborationId = '{{ collaborationId }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_audience_generation_job"
    values={[
        { label: 'delete_audience_generation_job', value: 'delete_audience_generation_job' }
    ]}
>
<TabItem value="delete_audience_generation_job">

Deletes the specified audience generation job, and removes all data associated with the job.

```sql
DELETE FROM aws.cleanroomsml.audience_generation_jobs
WHERE audience_generation_job_arn = '{{ audience_generation_job_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_audience_export_job"
    values={[
        { label: 'start_audience_export_job', value: 'start_audience_export_job' }
    ]}
>
<TabItem value="start_audience_export_job">

Export an audience of a specified size after you have generated an audience.

```sql
EXEC aws.cleanroomsml.audience_generation_jobs.start_audience_export_job 
@region='{{ region }}' --required 
@@json=
'{
"name": "{{ name }}", 
"audienceGenerationJobArn": "{{ audienceGenerationJobArn }}", 
"audienceSize": "{{ audienceSize }}", 
"description": "{{ description }}"
}'
;
```
</TabItem>
</Tabs>
