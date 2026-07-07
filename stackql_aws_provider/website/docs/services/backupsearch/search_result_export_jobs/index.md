--- 
title: search_result_export_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - search_result_export_jobs
  - backupsearch
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

Creates, updates, deletes, gets or lists a <code>search_result_export_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="search_result_export_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backupsearch.search_result_export_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_search_result_export_job"
    values={[
        { label: 'get_search_result_export_job', value: 'get_search_result_export_job' },
        { label: 'list_search_result_export_jobs', value: 'list_search_result_export_jobs' }
    ]}
>
<TabItem value="get_search_result_export_job">

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
    <td>The date and time that an export job completed, in Unix format and Coordinated Universal Time (UTC). The value of CreationTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that an export job was created, in Unix format and Coordinated Universal Time (UTC). The value of CreationTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="ExportJobArn" /></td>
    <td><code>string</code></td>
    <td>The unique Amazon Resource Name (ARN) that uniquely identifies the export job.</td>
</tr>
<tr>
    <td><CopyableCode code="ExportJobIdentifier" /></td>
    <td><code>string</code></td>
    <td>This is the unique string that identifies the specified export job.</td>
</tr>
<tr>
    <td><CopyableCode code="ExportSpecification" /></td>
    <td><code>object</code></td>
    <td>The export specification consists of the destination S3 bucket to which the search results were exported, along with the destination prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="SearchJobArn" /></td>
    <td><code>string</code></td>
    <td>The unique string that identifies the Amazon Resource Name (ARN) of the specified search job.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>This is the current status of the export job. (RUNNING, FAILED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A status message is a string that is returned for search job with a status of FAILED, along with steps to remedy and retry the operation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_search_result_export_jobs">

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
    <td>This is a timestamp of the time the export job compeleted.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>This is a timestamp of the time the export job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ExportJobArn" /></td>
    <td><code>string</code></td>
    <td>This is the unique ARN (Amazon Resource Name) that belongs to the new export job.</td>
</tr>
<tr>
    <td><CopyableCode code="ExportJobIdentifier" /></td>
    <td><code>string</code></td>
    <td>This is the unique string that identifies a specific export job.</td>
</tr>
<tr>
    <td><CopyableCode code="SearchJobArn" /></td>
    <td><code>string</code></td>
    <td>The unique string that identifies the Amazon Resource Name (ARN) of the specified search job.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the export job is one of the following: CREATED; RUNNING; FAILED; or COMPLETED. (RUNNING, FAILED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A status message is a string that is returned for an export job. A status message is included for any status other than COMPLETED without issues.</td>
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
    <td><a href="#get_search_result_export_job"><CopyableCode code="get_search_result_export_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-export_job_identifier"><code>export_job_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation retrieves the metadata of an export job. An export job is an operation that transmits the results of a search job to a specified S3 bucket in a .csv file. An export job allows you to retain results of a search beyond the search job's scheduled retention of 7 days.</td>
</tr>
<tr>
    <td><a href="#list_search_result_export_jobs"><CopyableCode code="list_search_result_export_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Status"><code>Status</code></a>, <a href="#parameter-SearchJobIdentifier"><code>SearchJobIdentifier</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>This operation exports search results of a search job to a specified destination S3 bucket.</td>
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
<tr id="parameter-export_job_identifier">
    <td><CopyableCode code="export_job_identifier" /></td>
    <td><code>string</code></td>
    <td>This is the unique string that identifies a specific export job. Required for this operation.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of resource list items to be returned.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned backups included in a search job. For example, if a request is made to return MaxResults number of backups, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
<tr id="parameter-SearchJobIdentifier">
    <td><CopyableCode code="SearchJobIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique string that specifies the search job.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The search jobs to be included in the export job can be filtered by including this parameter.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_search_result_export_job"
    values={[
        { label: 'get_search_result_export_job', value: 'get_search_result_export_job' },
        { label: 'list_search_result_export_jobs', value: 'list_search_result_export_jobs' }
    ]}
>
<TabItem value="get_search_result_export_job">

This operation retrieves the metadata of an export job. An export job is an operation that transmits the results of a search job to a specified S3 bucket in a .csv file. An export job allows you to retain results of a search beyond the search job's scheduled retention of 7 days.

```sql
SELECT
CompletionTime,
CreationTime,
ExportJobArn,
ExportJobIdentifier,
ExportSpecification,
SearchJobArn,
Status,
StatusMessage
FROM aws.backupsearch.search_result_export_jobs
WHERE export_job_identifier = '{{ export_job_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_search_result_export_jobs">

This operation exports search results of a search job to a specified destination S3 bucket.

```sql
SELECT
CompletionTime,
CreationTime,
ExportJobArn,
ExportJobIdentifier,
SearchJobArn,
Status,
StatusMessage
FROM aws.backupsearch.search_result_export_jobs
WHERE region = '{{ region }}' -- required
AND Status = '{{ Status }}'
AND SearchJobIdentifier = '{{ SearchJobIdentifier }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
