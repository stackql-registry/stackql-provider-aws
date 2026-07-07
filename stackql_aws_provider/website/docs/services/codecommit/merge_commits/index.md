--- 
title: merge_commits
hide_title: false
hide_table_of_contents: false
keywords:
  - merge_commits
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

Creates, updates, deletes, gets or lists a <code>merge_commits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="merge_commits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.merge_commits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_merge_commit"
    values={[
        { label: 'get_merge_commit', value: 'get_merge_commit' }
    ]}
>
<TabItem value="get_merge_commit">

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
    <td><CopyableCode code="baseCommitId" /></td>
    <td><code>string</code></td>
    <td>The commit ID of the merge base.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationCommitId" /></td>
    <td><code>string</code></td>
    <td>The commit ID of the destination commit specifier that was used in the merge evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="mergedCommitId" /></td>
    <td><code>string</code></td>
    <td>The commit ID for the merge commit created when the source branch was merged into the destination branch. If the fast-forward merge strategy was used, there is no merge commit.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceCommitId" /></td>
    <td><code>string</code></td>
    <td>The commit ID of the source commit specifier that was used in the merge evaluation.</td>
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
    <td><a href="#get_merge_commit"><CopyableCode code="get_merge_commit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specified merge commit.</td>
</tr>
<tr>
    <td><a href="#create_unreferenced_merge_commit"><CopyableCode code="create_unreferenced_merge_commit" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-sourceCommitSpecifier"><code>sourceCommitSpecifier</code></a>, <a href="#parameter-destinationCommitSpecifier"><code>destinationCommitSpecifier</code></a>, <a href="#parameter-mergeOption"><code>mergeOption</code></a></td>
    <td></td>
    <td>Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit. This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.</td>
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
    defaultValue="get_merge_commit"
    values={[
        { label: 'get_merge_commit', value: 'get_merge_commit' }
    ]}
>
<TabItem value="get_merge_commit">

Returns information about a specified merge commit.

```sql
SELECT
baseCommitId,
destinationCommitId,
mergedCommitId,
sourceCommitId
FROM aws.codecommit.merge_commits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_unreferenced_merge_commit"
    values={[
        { label: 'create_unreferenced_merge_commit', value: 'create_unreferenced_merge_commit' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_unreferenced_merge_commit">

Creates an unreferenced commit that represents the result of merging two branches using a specified merge strategy. This can help you determine the outcome of a potential merge. This API cannot be used with the fast-forward merge strategy because that strategy does not create a merge commit. This unreferenced merge commit can only be accessed using the GetCommit API or through git commands such as git fetch. To retrieve this commit, you must specify its commit ID or otherwise reference it.

```sql
INSERT INTO aws.codecommit.merge_commits (
repositoryName,
sourceCommitSpecifier,
destinationCommitSpecifier,
mergeOption,
conflictDetailLevel,
conflictResolutionStrategy,
authorName,
email,
commitMessage,
keepEmptyFolders,
conflictResolution,
region
)
SELECT 
'{{ repositoryName }}' /* required */,
'{{ sourceCommitSpecifier }}' /* required */,
'{{ destinationCommitSpecifier }}' /* required */,
'{{ mergeOption }}' /* required */,
'{{ conflictDetailLevel }}',
'{{ conflictResolutionStrategy }}',
'{{ authorName }}',
'{{ email }}',
'{{ commitMessage }}',
{{ keepEmptyFolders }},
'{{ conflictResolution }}',
'{{ region }}'
RETURNING
commitId,
treeId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: merge_commits
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the merge_commits resource.
    - name: repositoryName
      value: "{{ repositoryName }}"
      description: |
        The name of the repository where you want to create the unreferenced merge commit.
    - name: sourceCommitSpecifier
      value: "{{ sourceCommitSpecifier }}"
      description: |
        The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
    - name: destinationCommitSpecifier
      value: "{{ destinationCommitSpecifier }}"
      description: |
        The branch, tag, HEAD, or other fully qualified reference used to identify a commit (for example, a branch name or a full commit ID).
    - name: mergeOption
      value: "{{ mergeOption }}"
      description: |
        The merge option or strategy you want to use to merge the code.
      valid_values: ['FAST_FORWARD_MERGE', 'SQUASH_MERGE', 'THREE_WAY_MERGE']
    - name: conflictDetailLevel
      value: "{{ conflictDetailLevel }}"
      description: |
        The level of conflict detail to use. If unspecified, the default FILE_LEVEL is used, which returns a not-mergeable result if the same file has differences in both branches. If LINE_LEVEL is specified, a conflict is considered not mergeable if the same file in both branches has differences on the same line.
      valid_values: ['FILE_LEVEL', 'LINE_LEVEL']
    - name: conflictResolutionStrategy
      value: "{{ conflictResolutionStrategy }}"
      description: |
        Specifies which branch to use when resolving conflicts, or whether to attempt automatically merging two versions of a file. The default is NONE, which requires any conflicts to be resolved manually before the merge operation is successful.
      valid_values: ['NONE', 'ACCEPT_SOURCE', 'ACCEPT_DESTINATION', 'AUTOMERGE']
    - name: authorName
      value: "{{ authorName }}"
      description: |
        The name of the author who created the unreferenced commit. This information is used as both the author and committer for the commit.
    - name: email
      value: "{{ email }}"
      description: |
        The email address for the person who created the unreferenced commit.
    - name: commitMessage
      value: "{{ commitMessage }}"
      description: |
        The commit message for the unreferenced commit.
    - name: keepEmptyFolders
      value: {{ keepEmptyFolders }}
      description: |
        If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If this is specified as true, a .gitkeep file is created for empty folders. The default is false.
    - name: conflictResolution
      description: |
        If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.
      value:
        replaceContents:
          - filePath: "{{ filePath }}"
            replacementType: "{{ replacementType }}"
            content: "{{ content }}"
            fileMode: "{{ fileMode }}"
        deleteFiles:
          - filePath: "{{ filePath }}"
        setFileModes:
          - filePath: "{{ filePath }}"
            fileMode: "{{ fileMode }}"
`}</CodeBlock>

</TabItem>
</Tabs>
