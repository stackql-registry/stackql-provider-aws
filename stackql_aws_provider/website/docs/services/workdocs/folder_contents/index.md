--- 
title: folder_contents
hide_title: false
hide_table_of_contents: false
keywords:
  - folder_contents
  - workdocs
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

Creates, updates, deletes, gets or lists a <code>folder_contents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="folder_contents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workdocs.folder_contents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_folder_contents"
    values={[
        { label: 'describe_folder_contents', value: 'describe_folder_contents' }
    ]}
>
<TabItem value="describe_folder_contents">

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
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the folder was created.</td>
</tr>
<tr>
    <td><CopyableCode code="creator_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the creator. (pattern: &lt;code&gt;&#91;&\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the folder. (pattern: &lt;code&gt;&#91;\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>List of labels on the folder.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_version_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the latest version of the folder metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the folder was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the folder. (pattern: &lt;code&gt;&#91;\u0020-\u202D\u202F-\uFFFF&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_folder_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the parent folder. (pattern: &lt;code&gt;&#91;\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_state" /></td>
    <td><code>string</code></td>
    <td>The resource state of the folder. (ACTIVE, RESTORING, RECYCLING, RECYCLED)</td>
</tr>
<tr>
    <td><CopyableCode code="signature" /></td>
    <td><code>string</code></td>
    <td>The unique identifier created from the subfolders and documents of the folder. (pattern: &lt;code&gt;&#91;&\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the folder metadata.</td>
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
    <td><a href="#describe_folder_contents"><CopyableCode code="describe_folder_contents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-folder_id"><code>folder_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-order"><code>order</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-include"><code>include</code></a></td>
    <td>Describes the contents of the specified folder, including its documents and subfolders. By default, Amazon WorkDocs returns the first 100 active document and folder metadata items. If there are more results, the response includes a marker that you can use to request the next set of results. You can also request initialized documents.</td>
</tr>
<tr>
    <td><a href="#delete_folder_contents"><CopyableCode code="delete_folder_contents" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-folder_id"><code>folder_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Deletes the contents of the specified folder.</td>
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
<tr id="parameter-folder_id">
    <td><CopyableCode code="folder_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the folder.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Authentication">
    <td><CopyableCode code="Authentication" /></td>
    <td><code>string</code></td>
    <td>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>The contents to include. Specify "INITIALIZED" to include initialized documents.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return with this call.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results. This marker was received from a previous call.</td>
</tr>
<tr id="parameter-order">
    <td><CopyableCode code="order" /></td>
    <td><code>string</code></td>
    <td>The order for the contents of the folder.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The sorting criteria.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of items.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_folder_contents"
    values={[
        { label: 'describe_folder_contents', value: 'describe_folder_contents' }
    ]}
>
<TabItem value="describe_folder_contents">

Describes the contents of the specified folder, including its documents and subfolders. By default, Amazon WorkDocs returns the first 100 active document and folder metadata items. If there are more results, the response includes a marker that you can use to request the next set of results. You can also request initialized documents.

```sql
SELECT
created_timestamp,
creator_id,
id,
labels,
latest_version_size,
modified_timestamp,
name,
parent_folder_id,
resource_state,
signature,
size
FROM aws.workdocs.folder_contents
WHERE folder_id = '{{ folder_id }}' -- required
AND region = '{{ region }}' -- required
AND Authentication = '{{ Authentication }}'
AND sort = '{{ sort }}'
AND order = '{{ order }}'
AND limit = '{{ limit }}'
AND marker = '{{ marker }}'
AND type = '{{ type }}'
AND include = '{{ include }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_folder_contents"
    values={[
        { label: 'delete_folder_contents', value: 'delete_folder_contents' }
    ]}
>
<TabItem value="delete_folder_contents">

Deletes the contents of the specified folder.

```sql
DELETE FROM aws.workdocs.folder_contents
WHERE folder_id = '{{ folder_id }}' --required
AND region = '{{ region }}' --required
AND Authentication = '{{ Authentication }}'
;
```
</TabItem>
</Tabs>
