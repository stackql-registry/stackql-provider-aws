--- 
title: search_results
hide_title: false
hide_table_of_contents: false
keywords:
  - search_results
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>search_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="search_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.search_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_search_results"
    values={[
        { label: 'get_search_results', value: 'get_search_results' }
    ]}
>
<TabItem value="get_search_results">

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
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the dataset that contains the matching data. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_timestamp" /></td>
    <td><code>object</code></td>
    <td>Contains a timestamp with optional nanosecond granularity.</td>
</tr>
<tr>
    <td><CopyableCode code="score" /></td>
    <td><code>number (float)</code></td>
    <td>The relevance score of this result. Higher scores indicate a stronger match.</td>
</tr>
<tr>
    <td><CopyableCode code="search_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a search, assigned by the service when the search is started. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+(-&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_timestamp" /></td>
    <td><code>object</code></td>
    <td>Contains a timestamp with optional nanosecond granularity.</td>
</tr>
<tr>
    <td><CopyableCode code="time_series_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the time series that contains the matching data.</td>
</tr>
<tr>
    <td><CopyableCode code="top_timestamp" /></td>
    <td><code>object</code></td>
    <td>Contains a timestamp with optional nanosecond granularity.</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace the search ran against. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#get_search_results"><CopyableCode code="get_search_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-search_id"><code>search_id</code></a>, <a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves the ranked results of a search, ordered by descending relevance score. Results are available only after the search has reached the SUCCEEDED status. Calling this on a search that exists but has not yet completed returns InvalidRequestException, while calling it on a search that does not exist returns ResourceNotFoundException. The response is paginated: when nextToken is present, pass it on a subsequent call to retrieve the next page.</td>
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
<tr id="parameter-search_id">
    <td><CopyableCode code="search_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the search whose results are retrieved.</td>
</tr>
<tr id="parameter-workspace_name">
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace the search belongs to.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single page. Valid range is 1 to 10,000; if omitted, a service-defined default is used.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token returned by a previous GetSearchResults call. Provide it to retrieve the next page of results; omit it to retrieve the first page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_search_results"
    values={[
        { label: 'get_search_results', value: 'get_search_results' }
    ]}
>
<TabItem value="get_search_results">

Retrieves the ranked results of a search, ordered by descending relevance score. Results are available only after the search has reached the SUCCEEDED status. Calling this on a search that exists but has not yet completed returns InvalidRequestException, while calling it on a search that does not exist returns ResourceNotFoundException. The response is paginated: when nextToken is present, pass it on a subsequent call to retrieve the next page.

```sql
SELECT
dataset_id,
end_timestamp,
score,
search_id,
start_timestamp,
time_series_id,
top_timestamp,
workspace_name
FROM aws.iotsitewise.search_results
WHERE search_id = '{{ search_id }}' -- required
AND workspace_name = '{{ workspace_name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
