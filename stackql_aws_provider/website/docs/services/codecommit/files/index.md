--- 
title: files
hide_title: false
hide_table_of_contents: false
keywords:
  - files
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

Creates, updates, deletes, gets or lists a <code>files</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="files" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.files" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_file"
    values={[
        { label: 'get_file', value: 'get_file' }
    ]}
>
<TabItem value="get_file">

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
    <td><CopyableCode code="blob_id" /></td>
    <td><code>string</code></td>
    <td>The blob ID of the object that represents the file content.</td>
</tr>
<tr>
    <td><CopyableCode code="commit_id" /></td>
    <td><code>string</code></td>
    <td>The full commit ID of the commit that contains the content returned by GetFile.</td>
</tr>
<tr>
    <td><CopyableCode code="file_content" /></td>
    <td><code>string (byte)</code></td>
    <td>The base-64 encoded binary data object that represents the content of the file.</td>
</tr>
<tr>
    <td><CopyableCode code="file_mode" /></td>
    <td><code>string</code></td>
    <td>The extrapolated file mode permissions of the blob. Valid values include strings such as EXECUTABLE and not numeric values. The file mode permissions returned by this API are not the standard file mode permission values, such as 100644, but rather extrapolated values. See the supported return values. (EXECUTABLE, NORMAL, SYMLINK)</td>
</tr>
<tr>
    <td><CopyableCode code="file_path" /></td>
    <td><code>string</code></td>
    <td>The fully qualified path to the specified file. Returns the name and extension of the file.</td>
</tr>
<tr>
    <td><CopyableCode code="file_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the contents of the file, in bytes.</td>
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
    <td><a href="#get_file"><CopyableCode code="get_file" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the base-64 encoded contents of a specified file and its metadata.</td>
</tr>
<tr>
    <td><a href="#put_file"><CopyableCode code="put_file" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-branchName"><code>branchName</code></a>, <a href="#parameter-fileContent"><code>fileContent</code></a>, <a href="#parameter-filePath"><code>filePath</code></a></td>
    <td></td>
    <td>Adds or updates a file in a branch in an CodeCommit repository, and generates a commit for the addition in the specified branch.</td>
</tr>
<tr>
    <td><a href="#delete_file"><CopyableCode code="delete_file" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.</td>
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
    defaultValue="get_file"
    values={[
        { label: 'get_file', value: 'get_file' }
    ]}
>
<TabItem value="get_file">

Returns the base-64 encoded contents of a specified file and its metadata.

```sql
SELECT
blob_id,
commit_id,
file_content,
file_mode,
file_path,
file_size
FROM aws.codecommit.files
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_file"
    values={[
        { label: 'put_file', value: 'put_file' }
    ]}
>
<TabItem value="put_file">

Adds or updates a file in a branch in an CodeCommit repository, and generates a commit for the addition in the specified branch.

```sql
REPLACE aws.codecommit.files
SET 
repositoryName = '{{ repositoryName }}',
branchName = '{{ branchName }}',
fileContent = '{{ fileContent }}',
filePath = '{{ filePath }}',
fileMode = '{{ fileMode }}',
parentCommitId = '{{ parentCommitId }}',
commitMessage = '{{ commitMessage }}',
name = '{{ name }}',
email = '{{ email }}'
WHERE 
region = '{{ region }}' --required
AND repositoryName = '{{ repositoryName }}' --required
AND branchName = '{{ branchName }}' --required
AND fileContent = '{{ fileContent }}' --required
AND filePath = '{{ filePath }}' --required
RETURNING
blob_id,
commit_id,
tree_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_file"
    values={[
        { label: 'delete_file', value: 'delete_file' }
    ]}
>
<TabItem value="delete_file">

Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file still exists in the commits earlier to the commit that contains the deletion.

```sql
DELETE FROM aws.codecommit.files
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
