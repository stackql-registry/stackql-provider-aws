--- 
title: branches
hide_title: false
hide_table_of_contents: false
keywords:
  - branches
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

Creates, updates, deletes, gets or lists a <code>branches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="branches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.branches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_branches"
    values={[
        { label: 'list_branches', value: 'list_branches' },
        { label: 'get_branch', value: 'get_branch' }
    ]}
>
<TabItem value="list_branches">

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
    <td><CopyableCode code="branche" /></td>
    <td><code>string</code></td>
    <td>The list of branch names.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_branch">

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
    <td><CopyableCode code="branch_name" /></td>
    <td><code>string</code></td>
    <td>The name of the branch.</td>
</tr>
<tr>
    <td><CopyableCode code="commit_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the last commit made to the branch.</td>
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
    <td><a href="#list_branches"><CopyableCode code="list_branches" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about one or more branches in a repository.</td>
</tr>
<tr>
    <td><a href="#get_branch"><CopyableCode code="get_branch" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a repository branch, including its name and the last commit ID.</td>
</tr>
<tr>
    <td><a href="#create_branch"><CopyableCode code="create_branch" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-branchName"><code>branchName</code></a>, <a href="#parameter-commitId"><code>commitId</code></a></td>
    <td></td>
    <td>Creates a branch in a repository and points the branch to a commit. Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</td>
</tr>
<tr>
    <td><a href="#update_default_branch"><CopyableCode code="update_default_branch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-defaultBranchName"><code>defaultBranchName</code></a></td>
    <td></td>
    <td>Sets or changes the default branch name for the specified repository. If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</td>
</tr>
<tr>
    <td><a href="#delete_branch"><CopyableCode code="delete_branch" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a branch from a repository, unless that branch is the default branch for the repository.</td>
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
    defaultValue="list_branches"
    values={[
        { label: 'list_branches', value: 'list_branches' },
        { label: 'get_branch', value: 'get_branch' }
    ]}
>
<TabItem value="list_branches">

Gets information about one or more branches in a repository.

```sql
SELECT
branche
FROM aws.codecommit.branches
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_branch">

Returns information about a repository branch, including its name and the last commit ID.

```sql
SELECT
branch_name,
commit_id
FROM aws.codecommit.branches
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_branch"
    values={[
        { label: 'create_branch', value: 'create_branch' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_branch">

Creates a branch in a repository and points the branch to a commit. Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.

```sql
INSERT INTO aws.codecommit.branches (
repositoryName,
branchName,
commitId,
region
)
SELECT 
'{{ repositoryName }}' /* required */,
'{{ branchName }}' /* required */,
'{{ commitId }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: branches
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the branches resource.
    - name: repositoryName
      value: "{{ repositoryName }}"
      description: |
        The name of the repository in which you want to create the new branch.
    - name: branchName
      value: "{{ branchName }}"
      description: |
        The name of the new branch to create.
    - name: commitId
      value: "{{ commitId }}"
      description: |
        The ID of the commit to point the new branch to.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_default_branch"
    values={[
        { label: 'update_default_branch', value: 'update_default_branch' }
    ]}
>
<TabItem value="update_default_branch">

Sets or changes the default branch name for the specified repository. If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.

```sql
UPDATE aws.codecommit.branches
SET 
repositoryName = '{{ repositoryName }}',
defaultBranchName = '{{ defaultBranchName }}'
WHERE 
region = '{{ region }}' --required
AND repositoryName = '{{ repositoryName }}' --required
AND defaultBranchName = '{{ defaultBranchName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_branch"
    values={[
        { label: 'delete_branch', value: 'delete_branch' }
    ]}
>
<TabItem value="delete_branch">

Deletes a branch from a repository, unless that branch is the default branch for the repository.

```sql
DELETE FROM aws.codecommit.branches
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
