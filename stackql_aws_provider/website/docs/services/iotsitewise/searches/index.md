--- 
title: searches
hide_title: false
hide_table_of_contents: false
keywords:
  - searches
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

Creates, updates, deletes, gets or lists a <code>searches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="searches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.searches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_search"
    values={[
        { label: 'describe_search', value: 'describe_search' },
        { label: 'list_searches', value: 'list_searches' }
    ]}
>
<TabItem value="describe_search">

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
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The group identifier associated with the search, if one was supplied on the request. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="query_statement" /></td>
    <td><code>string</code></td>
    <td>The natural-language query that was submitted for the search.</td>
</tr>
<tr>
    <td><CopyableCode code="search_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a search, assigned by the service when the search is started. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+(-&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="search_type" /></td>
    <td><code>string</code></td>
    <td>The search strategy used for the search. (DEEP, QUICK)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the search was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the search. (QUEUED, RUNNING, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>A human-readable explanation of the current status. Populated when the search has FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace the search runs against. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_searches">

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
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>A caller-supplied identifier used to group related searches together. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="query_statement" /></td>
    <td><code>string</code></td>
    <td>The natural-language query that was submitted for the search.</td>
</tr>
<tr>
    <td><CopyableCode code="search_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a search, assigned by the service when the search is started. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+(-&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="search_type" /></td>
    <td><code>string</code></td>
    <td>The search strategy, which trades off latency against recall. DEEP runs the full semantic and structured search for the highest-quality matches; QUICK returns faster, lower-recall results. When searchType is omitted on a request, the search defaults to QUICK. (DEEP, QUICK)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the search was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The lifecycle status of a search. (QUEUED, RUNNING, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>A human-readable explanation of the current status. Populated when the search has FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace the search runs against. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_search"><CopyableCode code="describe_search" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-search_id"><code>search_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current status and metadata of a single search, including the query that was submitted, the search type, and — when the search has failed — the reason. Use this to poll a search started with StartSearch until it reaches a terminal status (SUCCEEDED or FAILED).</td>
</tr>
<tr>
    <td><a href="#list_searches"><CopyableCode code="list_searches" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the searches in a workspace, most recently started first. Results can be narrowed with optional filters (status, search type, group, and started-at time range) and are paginated: when nextToken is present, pass it on a subsequent call to retrieve the next page.</td>
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
    <td>The identifier of the search to describe.</td>
</tr>
<tr id="parameter-workspace_name">
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace whose searches are listed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_search"
    values={[
        { label: 'describe_search', value: 'describe_search' },
        { label: 'list_searches', value: 'list_searches' }
    ]}
>
<TabItem value="describe_search">

Returns the current status and metadata of a single search, including the query that was submitted, the search type, and — when the search has failed — the reason. Use this to poll a search started with StartSearch until it reaches a terminal status (SUCCEEDED or FAILED).

```sql
SELECT
group_id,
query_statement,
search_id,
search_type,
started_at,
status,
status_reason,
workspace_name
FROM aws.iotsitewise.searches
WHERE workspace_name = '{{ workspace_name }}' -- required
AND search_id = '{{ search_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_searches">

Lists the searches in a workspace, most recently started first. Results can be narrowed with optional filters (status, search type, group, and started-at time range) and are paginated: when nextToken is present, pass it on a subsequent call to retrieve the next page.

```sql
SELECT
group_id,
query_statement,
search_id,
search_type,
started_at,
status,
status_reason,
workspace_name
FROM aws.iotsitewise.searches
WHERE workspace_name = '{{ workspace_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
