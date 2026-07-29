--- 
title: root_folders
hide_title: false
hide_table_of_contents: false
keywords:
  - root_folders
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

Creates, updates, deletes, gets or lists a <code>root_folders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="root_folders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workdocs.root_folders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_root_folders"
    values={[
        { label: 'describe_root_folders', value: 'describe_root_folders' }
    ]}
>
<TabItem value="describe_root_folders">

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
    <td><a href="#describe_root_folders"><CopyableCode code="describe_root_folders" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-marker"><code>marker</code></a></td>
    <td>Describes the current user's special folders; the RootFolder and the RecycleBin. RootFolder is the root of user's files and folders and RecycleBin is the root of recycled items. This is not a valid action for SigV4 (administrative API) clients. This action requires an authentication token. To get an authentication token, register an application with Amazon WorkDocs. For more information, see Authentication and Access Control for User Applications in the Amazon WorkDocs Developer Guide.</td>
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
<tr id="parameter-Authentication">
    <td><CopyableCode code="Authentication" /></td>
    <td><code>string</code></td>
    <td>Amazon WorkDocs authentication token.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results. (You received this marker from a previous call.)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_root_folders"
    values={[
        { label: 'describe_root_folders', value: 'describe_root_folders' }
    ]}
>
<TabItem value="describe_root_folders">

Describes the current user's special folders; the RootFolder and the RecycleBin. RootFolder is the root of user's files and folders and RecycleBin is the root of recycled items. This is not a valid action for SigV4 (administrative API) clients. This action requires an authentication token. To get an authentication token, register an application with Amazon WorkDocs. For more information, see Authentication and Access Control for User Applications in the Amazon WorkDocs Developer Guide.

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
FROM aws.workdocs.root_folders
WHERE Authentication = '{{ Authentication }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND marker = '{{ marker }}'
;
```
</TabItem>
</Tabs>
