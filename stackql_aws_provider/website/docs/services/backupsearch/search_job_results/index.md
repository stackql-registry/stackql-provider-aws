--- 
title: search_job_results
hide_title: false
hide_table_of_contents: false
keywords:
  - search_job_results
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

Creates, updates, deletes, gets or lists a <code>search_job_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="search_job_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backupsearch.search_job_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_search_job_results"
    values={[
        { label: 'list_search_job_results', value: 'list_search_job_results' }
    ]}
>
<TabItem value="list_search_job_results">

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
    <td><CopyableCode code="EBSResultItem" /></td>
    <td><code>object</code></td>
    <td>These are items returned in the search results of an Amazon EBS search.</td>
</tr>
<tr>
    <td><CopyableCode code="S3ResultItem" /></td>
    <td><code>object</code></td>
    <td>These are items returned in the search results of an Amazon S3 search.</td>
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
    <td><a href="#list_search_job_results"><CopyableCode code="list_search_job_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-search_job_identifier"><code>search_job_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>This operation returns a list of a specified search job.</td>
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
    <td>The next item following a partial list of returned search job results. For example, if a request is made to return MaxResults number of search job results, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_search_job_results"
    values={[
        { label: 'list_search_job_results', value: 'list_search_job_results' }
    ]}
>
<TabItem value="list_search_job_results">

This operation returns a list of a specified search job.

```sql
SELECT
EBSResultItem,
S3ResultItem
FROM aws.backupsearch.search_job_results
WHERE search_job_identifier = '{{ search_job_identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
