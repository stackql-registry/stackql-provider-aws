--- 
title: audience_export_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - audience_export_jobs
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

Creates, updates, deletes, gets or lists an <code>audience_export_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="audience_export_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanroomsml.audience_export_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_audience_export_jobs"
    values={[
        { label: 'list_audience_export_jobs', value: 'list_audience_export_jobs' }
    ]}
>
<TabItem value="list_audience_export_jobs">

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
    <td>The name of the audience export job. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="audienceGenerationJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the audience generation job that was exported. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:audience-generation-job/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="audienceSize" /></td>
    <td><code>object</code></td>
    <td>The size of the generated audience. Must match one of the sizes in the configured audience model.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the audience export job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the audience export job. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="outputLocation" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 bucket where the audience export is stored. (pattern: &lt;code&gt;s3:​//.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the audience export job. (CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="statusDetails" /></td>
    <td><code>object</code></td>
    <td>Details about the status of a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the audience export job was updated.</td>
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
    <td><a href="#list_audience_export_jobs"><CopyableCode code="list_audience_export_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-audienceGenerationJobArn"><code>audienceGenerationJobArn</code></a></td>
    <td>Returns a list of the audience export jobs.</td>
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
<tr id="parameter-audienceGenerationJobArn">
    <td><CopyableCode code="audienceGenerationJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the audience generation job that you are interested in.</td>
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
    defaultValue="list_audience_export_jobs"
    values={[
        { label: 'list_audience_export_jobs', value: 'list_audience_export_jobs' }
    ]}
>
<TabItem value="list_audience_export_jobs">

Returns a list of the audience export jobs.

```sql
SELECT
name,
audienceGenerationJobArn,
audienceSize,
createTime,
description,
outputLocation,
status,
statusDetails,
updateTime
FROM aws.cleanroomsml.audience_export_jobs
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND audienceGenerationJobArn = '{{ audienceGenerationJobArn }}'
;
```
</TabItem>
</Tabs>
