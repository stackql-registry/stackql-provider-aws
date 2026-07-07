--- 
title: search_job_backups
hide_title: false
hide_table_of_contents: false
keywords:
  - search_job_backups
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

Creates, updates, deletes, gets or lists a <code>search_job_backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="search_job_backups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backupsearch.search_job_backups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_search_job_backups"
    values={[
        { label: 'list_search_job_backups', value: 'list_search_job_backups' }
    ]}
>
<TabItem value="list_search_job_backups">

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
    <td><CopyableCode code="BackupCreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>This is the creation time of the backup (recovery point).</td>
</tr>
<tr>
    <td><CopyableCode code="BackupResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the backup resources.</td>
</tr>
<tr>
    <td><CopyableCode code="IndexCreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>This is the creation time of the backup index.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>This is the resource type of the search. (S3, EBS)</td>
</tr>
<tr>
    <td><CopyableCode code="SourceResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the source resources.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>This is the status of the search job backup result. (RUNNING, COMPLETED, STOPPING, STOPPED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>This is the status message included with the results.</td>
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
    <td><a href="#list_search_job_backups"><CopyableCode code="list_search_job_backups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-search_job_identifier"><code>search_job_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>This operation returns a list of all backups (recovery points) in a paginated format that were included in the search job. If a search does not display an expected backup in the results, you can call this operation to display each backup included in the search. Any backups that were not included because they have a FAILED status from a permissions issue will be displayed, along with a status message. Only recovery points with a backup index that has a status of ACTIVE will be included in search results. If the index has any other status, its status will be displayed along with a status message.</td>
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
    <td>The unique string that specifies the search job.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of resource list items to be returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned backups included in a search job. For example, if a request is made to return MaxResults number of backups, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_search_job_backups"
    values={[
        { label: 'list_search_job_backups', value: 'list_search_job_backups' }
    ]}
>
<TabItem value="list_search_job_backups">

This operation returns a list of all backups (recovery points) in a paginated format that were included in the search job. If a search does not display an expected backup in the results, you can call this operation to display each backup included in the search. Any backups that were not included because they have a FAILED status from a permissions issue will be displayed, along with a status message. Only recovery points with a backup index that has a status of ACTIVE will be included in search results. If the index has any other status, its status will be displayed along with a status message.

```sql
SELECT
BackupCreationTime,
BackupResourceArn,
IndexCreationTime,
ResourceType,
SourceResourceArn,
Status,
StatusMessage
FROM aws.backupsearch.search_job_backups
WHERE search_job_identifier = '{{ search_job_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
