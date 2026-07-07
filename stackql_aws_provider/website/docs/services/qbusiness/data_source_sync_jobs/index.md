--- 
title: data_source_sync_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - data_source_sync_jobs
  - qbusiness
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

Creates, updates, deletes, gets or lists a <code>data_source_sync_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_source_sync_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.data_source_sync_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_data_source_sync_jobs"
    values={[
        { label: 'list_data_source_sync_jobs', value: 'list_data_source_sync_jobs' }
    ]}
>
<TabItem value="list_data_source_sync_jobs">

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
    <td><CopyableCode code="dataSourceErrorCode" /></td>
    <td><code>string</code></td>
    <td>If the reason that the synchronization failed is due to an error with the underlying data source, this field contains a code that identifies the error.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the synchronization job completed.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Provides information about a Amazon Q Business request error.</td>
</tr>
<tr>
    <td><CopyableCode code="executionId" /></td>
    <td><code>string</code></td>
    <td>The identifier of a data source synchronization job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>object</code></td>
    <td>Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a data source connector.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix time stamp when the data source synchronization job started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the synchronization job. When the Status field is set to SUCCEEDED, the synchronization job is done. If the status code is FAILED, the ErrorCode and ErrorMessage fields give you the reason for the failure. (FAILED, SUCCEEDED, SYNCING, INCOMPLETE, STOPPING, ABORTED, SYNCING_INDEXING)</td>
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
    <td><a href="#list_data_source_sync_jobs"><CopyableCode code="list_data_source_sync_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-syncStatus"><code>syncStatus</code></a></td>
    <td>Get information about an Amazon Q Business data source connector synchronization.</td>
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
    <td>The identifier of the Amazon Q Business application connected to the data source.</td>
</tr>
<tr id="parameter-data_source_id">
    <td><CopyableCode code="data_source_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the data source connector.</td>
</tr>
<tr id="parameter-index_id">
    <td><CopyableCode code="index_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the index used with the Amazon Q Business data source connector.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the data source connector sync.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of synchronization jobs to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the maxResults response was incpmplete because there is more data to retriever, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of responses.</td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the data source connector sync.</td>
</tr>
<tr id="parameter-syncStatus">
    <td><CopyableCode code="syncStatus" /></td>
    <td><code>string</code></td>
    <td>Only returns synchronization jobs with the Status field equal to the specified status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_data_source_sync_jobs"
    values={[
        { label: 'list_data_source_sync_jobs', value: 'list_data_source_sync_jobs' }
    ]}
>
<TabItem value="list_data_source_sync_jobs">

Get information about an Amazon Q Business data source connector synchronization.

```sql
SELECT
dataSourceErrorCode,
endTime,
error,
executionId,
metrics,
startTime,
status
FROM aws.qbusiness.data_source_sync_jobs
WHERE data_source_id = '{{ data_source_id }}' -- required
AND application_id = '{{ application_id }}' -- required
AND index_id = '{{ index_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND startTime = '{{ startTime }}'
AND endTime = '{{ endTime }}'
AND syncStatus = '{{ syncStatus }}'
;
```
</TabItem>
</Tabs>
