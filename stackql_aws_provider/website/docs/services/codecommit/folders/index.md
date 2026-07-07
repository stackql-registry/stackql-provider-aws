--- 
title: folders
hide_title: false
hide_table_of_contents: false
keywords:
  - folders
  - codecommit
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

Creates, updates, deletes, gets or lists a <code>folders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="folders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.folders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_folder"
    values={[
        { label: 'get_folder', value: 'get_folder' }
    ]}
>
<TabItem value="get_folder">

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
    <td><CopyableCode code="commitId" /></td>
    <td><code>string</code></td>
    <td>The full commit ID used as a reference for the returned version of the folder content.</td>
</tr>
<tr>
    <td><CopyableCode code="files" /></td>
    <td><code>array</code></td>
    <td>The list of files in the specified folder, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="folderPath" /></td>
    <td><code>string</code></td>
    <td>The fully qualified path of the folder whose contents are returned.</td>
</tr>
<tr>
    <td><CopyableCode code="subFolders" /></td>
    <td><code>array</code></td>
    <td>The list of folders that exist under the specified folder, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="subModules" /></td>
    <td><code>array</code></td>
    <td>The list of submodules in the specified folder, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="symbolicLinks" /></td>
    <td><code>array</code></td>
    <td>The list of symbolic links to other files and folders in the specified folder, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="treeId" /></td>
    <td><code>string</code></td>
    <td>The full SHA-1 pointer of the tree information for the commit that contains the folder.</td>
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
    <td><a href="#get_folder"><CopyableCode code="get_folder" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the contents of a specified folder in a repository.</td>
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
    defaultValue="get_folder"
    values={[
        { label: 'get_folder', value: 'get_folder' }
    ]}
>
<TabItem value="get_folder">

Returns the contents of a specified folder in a repository.

```sql
SELECT
commitId,
files,
folderPath,
subFolders,
subModules,
symbolicLinks,
treeId
FROM aws.codecommit.folders
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
