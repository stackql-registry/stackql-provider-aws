--- 
title: archive_searches
hide_title: false
hide_table_of_contents: false
keywords:
  - archive_searches
  - mailmanager
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

Creates, updates, deletes, gets or lists an <code>archive_searches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="archive_searches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mailmanager.archive_searches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_archive_search"
    values={[
        { label: 'get_archive_search', value: 'get_archive_search' },
        { label: 'list_archive_searches', value: 'list_archive_searches' }
    ]}
>
<TabItem value="get_archive_search">

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
    <td><CopyableCode code="ArchiveId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the archive the email search was performed in. (pattern: &lt;code&gt;a-&#91;\w&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Filters" /></td>
    <td><code>object</code></td>
    <td>The criteria used to filter emails included in the search.</td>
</tr>
<tr>
    <td><CopyableCode code="FromTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start timestamp of the range the searched emails cover.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of search results to return.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>object</code></td>
    <td>The current status of the search job.</td>
</tr>
<tr>
    <td><CopyableCode code="ToTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end timestamp of the range the searched emails cover.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_archive_searches">

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
    <td><CopyableCode code="SearchId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the search job.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>object</code></td>
    <td>The current status of the search job.</td>
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
    <td><a href="#get_archive_search"><CopyableCode code="get_archive_search" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details and current status of a specific email archive search job.</td>
</tr>
<tr>
    <td><a href="#list_archive_searches"><CopyableCode code="list_archive_searches" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of email archive search jobs.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_archive_search"
    values={[
        { label: 'get_archive_search', value: 'get_archive_search' },
        { label: 'list_archive_searches', value: 'list_archive_searches' }
    ]}
>
<TabItem value="get_archive_search">

Retrieves the details and current status of a specific email archive search job.

```sql
SELECT
ArchiveId,
Filters,
FromTimestamp,
MaxResults,
Status,
ToTimestamp
FROM aws.mailmanager.archive_searches
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_archive_searches">

Returns a list of email archive search jobs.

```sql
SELECT
SearchId,
Status
FROM aws.mailmanager.archive_searches
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
