--- 
title: commits
hide_title: false
hide_table_of_contents: false
keywords:
  - commits
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

Creates, updates, deletes, gets or lists a <code>commits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="commits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.commits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_commits"
    values={[
        { label: 'batch_get_commits', value: 'batch_get_commits' },
        { label: 'get_commit', value: 'get_commit' }
    ]}
>
<TabItem value="batch_get_commits">

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
    <td><CopyableCode code="commits" /></td>
    <td><code>array</code></td>
    <td>An array of commit data type objects, each of which contains information about a specified commit.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Returns any commit IDs for which information could not be found. For example, if one of the commit IDs was a shortened SHA ID or that commit was not found in the specified repository, the ID returns an error object with more information.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_commit">

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
    <td><CopyableCode code="additional_data" /></td>
    <td><code>string</code></td>
    <td>Any other data associated with the specified commit.</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>Information about the author of the specified commit. Information includes the date in timestamp format with GMT offset, the name of the author, and the email address for the author, as configured in Git.</td>
</tr>
<tr>
    <td><CopyableCode code="commit_id" /></td>
    <td><code>string</code></td>
    <td>The full SHA ID of the specified commit.</td>
</tr>
<tr>
    <td><CopyableCode code="committer" /></td>
    <td><code>object</code></td>
    <td>Information about the person who committed the specified commit, also known as the committer. Information includes the date in timestamp format with GMT offset, the name of the committer, and the email address for the committer, as configured in Git. For more information about the difference between an author and a committer in Git, see Viewing the Commit History in Pro Git by Scott Chacon and Ben Straub.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The commit message associated with the specified commit.</td>
</tr>
<tr>
    <td><CopyableCode code="parents" /></td>
    <td><code>array</code></td>
    <td>A list of parent commits for the specified commit. Each parent commit ID is the full commit ID.</td>
</tr>
<tr>
    <td><CopyableCode code="tree_id" /></td>
    <td><code>string</code></td>
    <td>Tree information for the specified commit.</td>
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
    <td><a href="#batch_get_commits"><CopyableCode code="batch_get_commits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the contents of one or more commits in a repository.</td>
</tr>
<tr>
    <td><a href="#get_commit"><CopyableCode code="get_commit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a commit, including commit message and committer information.</td>
</tr>
<tr>
    <td><a href="#create_commit"><CopyableCode code="create_commit" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-branchName"><code>branchName</code></a></td>
    <td></td>
    <td>Creates a commit for a repository on the tip of a specified branch.</td>
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
    defaultValue="batch_get_commits"
    values={[
        { label: 'batch_get_commits', value: 'batch_get_commits' },
        { label: 'get_commit', value: 'get_commit' }
    ]}
>
<TabItem value="batch_get_commits">

Returns information about the contents of one or more commits in a repository.

```sql
SELECT
commits,
errors
FROM aws.codecommit.commits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_commit">

Returns information about a commit, including commit message and committer information.

```sql
SELECT
additional_data,
author,
commit_id,
committer,
message,
parents,
tree_id
FROM aws.codecommit.commits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_commit"
    values={[
        { label: 'create_commit', value: 'create_commit' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_commit">

Creates a commit for a repository on the tip of a specified branch.

```sql
INSERT INTO aws.codecommit.commits (
repositoryName,
branchName,
parentCommitId,
authorName,
email,
commitMessage,
keepEmptyFolders,
putFiles,
deleteFiles,
setFileModes,
region
)
SELECT 
'{{ repositoryName }}' /* required */,
'{{ branchName }}' /* required */,
'{{ parentCommitId }}',
'{{ authorName }}',
'{{ email }}',
'{{ commitMessage }}',
{{ keepEmptyFolders }},
'{{ putFiles }}',
'{{ deleteFiles }}',
'{{ setFileModes }}',
'{{ region }}'
RETURNING
commit_id,
files_added,
files_deleted,
files_updated,
tree_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: commits
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the commits resource.
    - name: repositoryName
      value: "{{ repositoryName }}"
      description: |
        The name of the repository where you create the commit.
    - name: branchName
      value: "{{ branchName }}"
      description: |
        The name of the branch where you create the commit.
    - name: parentCommitId
      value: "{{ parentCommitId }}"
      description: |
        The ID of the commit that is the parent of the commit you create. Not required if this is an empty repository.
    - name: authorName
      value: "{{ authorName }}"
      description: |
        The name of the author who created the commit. This information is used as both the author and committer for the commit.
    - name: email
      value: "{{ email }}"
      description: |
        The email address of the person who created the commit.
    - name: commitMessage
      value: "{{ commitMessage }}"
      description: |
        The commit message you want to include in the commit. Commit messages are limited to 256 KB. If no message is specified, a default message is used.
    - name: keepEmptyFolders
      value: {{ keepEmptyFolders }}
      description: |
        If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If true, a ..gitkeep file is created for empty folders. The default is false.
    - name: putFiles
      description: |
        The files to add or update in this commit.
      value:
        - filePath: "{{ filePath }}"
          fileMode: "{{ fileMode }}"
          fileContent: "{{ fileContent }}"
          sourceFile:
            filePath: "{{ filePath }}"
            isMove: {{ isMove }}
    - name: deleteFiles
      description: |
        The files to delete in this commit. These files still exist in earlier commits.
      value:
        - filePath: "{{ filePath }}"
    - name: setFileModes
      description: |
        The file modes to update for files in this commit.
      value:
        - filePath: "{{ filePath }}"
          fileMode: "{{ fileMode }}"
`}</CodeBlock>

</TabItem>
</Tabs>
