--- 
title: search_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - search_jobs
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

Creates, updates, deletes, gets or lists a <code>search_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="search_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backupsearch.search_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_search_job"
    values={[
        { label: 'get_search_job', value: 'get_search_job' },
        { label: 'list_search_jobs', value: 'list_search_jobs' }
    ]}
>
<TabItem value="get_search_job">

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
    <td>The date and time that a search job completed, in Unix format and Coordinated Universal Time (UTC). The value of CompletionTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a search job was created, in Unix format and Coordinated Universal Time (UTC). The value of CompletionTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrentSearchProgress" /></td>
    <td><code>object</code></td>
    <td>Returns numbers representing BackupsScannedCount, ItemsScanned, and ItemsMatched.</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionKeyArn" /></td>
    <td><code>string</code></td>
    <td>The encryption key for the specified search job. Example: arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab.</td>
</tr>
<tr>
    <td><CopyableCode code="ItemFilters" /></td>
    <td><code>object</code></td>
    <td>Item Filters represent all input item properties specified when the search was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Returned name of the specified search job.</td>
</tr>
<tr>
    <td><CopyableCode code="SearchJobArn" /></td>
    <td><code>string</code></td>
    <td>The unique string that identifies the Amazon Resource Name (ARN) of the specified search job.</td>
</tr>
<tr>
    <td><CopyableCode code="SearchJobIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique string that identifies the specified search job.</td>
</tr>
<tr>
    <td><CopyableCode code="SearchScope" /></td>
    <td><code>object</code></td>
    <td>The search scope is all backup properties input into a search.</td>
</tr>
<tr>
    <td><CopyableCode code="SearchScopeSummary" /></td>
    <td><code>object</code></td>
    <td>Returned summary of the specified search job scope, including: TotalBackupsToScanCount, the number of recovery points returned by the search. TotalItemsToScanCount, the number of items returned by the search.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the specified search job. A search job may have one of the following statuses: RUNNING; COMPLETED; STOPPED; FAILED; TIMED_OUT; or EXPIRED . (RUNNING, COMPLETED, STOPPING, STOPPED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A status message will be returned for either a earch job with a status of ERRORED or a status of COMPLETED jobs with issues. For example, a message may say that a search contained recovery points unable to be scanned because of a permissions issue.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_search_jobs">

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
    <td>This is the completion time of the search job.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>This is the creation time of the search job.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>This is the name of the search job.</td>
</tr>
<tr>
    <td><CopyableCode code="SearchJobArn" /></td>
    <td><code>string</code></td>
    <td>The unique string that identifies the Amazon Resource Name (ARN) of the specified search job.</td>
</tr>
<tr>
    <td><CopyableCode code="SearchJobIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique string that specifies the search job.</td>
</tr>
<tr>
    <td><CopyableCode code="SearchScopeSummary" /></td>
    <td><code>object</code></td>
    <td>Returned summary of the specified search job scope, including: TotalBackupsToScanCount, the number of recovery points returned by the search. TotalItemsToScanCount, the number of items returned by the search.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>This is the status of the search job. (RUNNING, COMPLETED, STOPPING, STOPPED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A status message will be returned for either a earch job with a status of ERRORED or a status of COMPLETED jobs with issues. For example, a message may say that a search contained recovery points unable to be scanned because of a permissions issue.</td>
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
    <td><a href="#get_search_job"><CopyableCode code="get_search_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-search_job_identifier"><code>search_job_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation retrieves metadata of a search job, including its progress.</td>
</tr>
<tr>
    <td><a href="#list_search_jobs"><CopyableCode code="list_search_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Status"><code>Status</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>This operation returns a list of search jobs belonging to an account.</td>
</tr>
<tr>
    <td><a href="#start_search_result_export_job"><CopyableCode code="start_search_result_export_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SearchJobIdentifier"><code>SearchJobIdentifier</code></a>, <a href="#parameter-ExportSpecification"><code>ExportSpecification</code></a></td>
    <td></td>
    <td>This operations starts a job to export the results of search job to a designated S3 bucket.</td>
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
<tr id="parameter-search_job_identifier">
    <td><CopyableCode code="search_job_identifier" /></td>
    <td><code>string</code></td>
    <td>Required unique string that specifies the search job.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of resource list items to be returned.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned search jobs. For example, if a request is made to return MaxResults number of backups, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Include this parameter to filter list by search job status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_search_job"
    values={[
        { label: 'get_search_job', value: 'get_search_job' },
        { label: 'list_search_jobs', value: 'list_search_jobs' }
    ]}
>
<TabItem value="get_search_job">

This operation retrieves metadata of a search job, including its progress.

```sql
SELECT
CompletionTime,
CreationTime,
CurrentSearchProgress,
EncryptionKeyArn,
ItemFilters,
Name,
SearchJobArn,
SearchJobIdentifier,
SearchScope,
SearchScopeSummary,
Status,
StatusMessage
FROM aws.backupsearch.search_jobs
WHERE search_job_identifier = '{{ search_job_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_search_jobs">

This operation returns a list of search jobs belonging to an account.

```sql
SELECT
CompletionTime,
CreationTime,
Name,
SearchJobArn,
SearchJobIdentifier,
SearchScopeSummary,
Status,
StatusMessage
FROM aws.backupsearch.search_jobs
WHERE region = '{{ region }}' -- required
AND Status = '{{ Status }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_search_result_export_job"
    values={[
        { label: 'start_search_result_export_job', value: 'start_search_result_export_job' }
    ]}
>
<TabItem value="start_search_result_export_job">

This operations starts a job to export the results of search job to a designated S3 bucket.

```sql
EXEC aws.backupsearch.search_jobs.start_search_result_export_job 
@region='{{ region }}' --required 
@@json=
'{
"SearchJobIdentifier": "{{ SearchJobIdentifier }}", 
"ExportSpecification": "{{ ExportSpecification }}", 
"ClientToken": "{{ ClientToken }}", 
"Tags": "{{ Tags }}", 
"RoleArn": "{{ RoleArn }}"
}'
;
```
</TabItem>
</Tabs>
