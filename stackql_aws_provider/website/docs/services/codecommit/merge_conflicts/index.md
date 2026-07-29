--- 
title: merge_conflicts
hide_title: false
hide_table_of_contents: false
keywords:
  - merge_conflicts
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

Creates, updates, deletes, gets or lists a <code>merge_conflicts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="merge_conflicts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.merge_conflicts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_merge_conflicts"
    values={[
        { label: 'describe_merge_conflicts', value: 'describe_merge_conflicts' },
        { label: 'get_merge_conflicts', value: 'get_merge_conflicts' }
    ]}
>
<TabItem value="describe_merge_conflicts">

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
    <td><CopyableCode code="base_commit_id" /></td>
    <td><code>string</code></td>
    <td>The commit ID of the merge base.</td>
</tr>
<tr>
    <td><CopyableCode code="conflict_metadata" /></td>
    <td><code>object</code></td>
    <td>Contains metadata about the conflicts found in the merge.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_commit_id" /></td>
    <td><code>string</code></td>
    <td>The commit ID of the destination commit specifier that was used in the merge evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="merge_hunks" /></td>
    <td><code>array</code></td>
    <td>A list of merge hunks of the differences between the files or lines.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>An enumeration token that can be used in a request to return the next batch of the results.</td>
</tr>
<tr>
    <td><CopyableCode code="source_commit_id" /></td>
    <td><code>string</code></td>
    <td>The commit ID of the source commit specifier that was used in the merge evaluation.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_merge_conflicts">

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
    <td><CopyableCode code="base_commit_id" /></td>
    <td><code>string</code></td>
    <td>The commit ID of the merge base.</td>
</tr>
<tr>
    <td><CopyableCode code="conflict_metadata_list" /></td>
    <td><code>array</code></td>
    <td>A list of metadata for any conflicting files. If the specified merge strategy is FAST_FORWARD_MERGE, this list is always empty.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_commit_id" /></td>
    <td><code>string</code></td>
    <td>The commit ID of the destination commit specifier that was used in the merge evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="mergeable" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that indicates whether the code is mergeable by the specified merge option.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>An enumeration token that can be used in a request to return the next batch of the results.</td>
</tr>
<tr>
    <td><CopyableCode code="source_commit_id" /></td>
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
    <td><a href="#describe_merge_conflicts"><CopyableCode code="describe_merge_conflicts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.</td>
</tr>
<tr>
    <td><a href="#get_merge_conflicts"><CopyableCode code="get_merge_conflicts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.</td>
</tr>
<tr>
    <td><a href="#batch_describe_merge_conflicts"><CopyableCode code="batch_describe_merge_conflicts" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-destinationCommitSpecifier"><code>destinationCommitSpecifier</code></a>, <a href="#parameter-sourceCommitSpecifier"><code>sourceCommitSpecifier</code></a>, <a href="#parameter-mergeOption"><code>mergeOption</code></a></td>
    <td></td>
    <td>Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.</td>
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
    defaultValue="describe_merge_conflicts"
    values={[
        { label: 'describe_merge_conflicts', value: 'describe_merge_conflicts' },
        { label: 'get_merge_conflicts', value: 'get_merge_conflicts' }
    ]}
>
<TabItem value="describe_merge_conflicts">

Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy. If the merge option for the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.

```sql
SELECT
base_commit_id,
conflict_metadata,
destination_commit_id,
merge_hunks,
next_token,
source_commit_id
FROM aws.codecommit.merge_conflicts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_merge_conflicts">

Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.

```sql
SELECT
base_commit_id,
conflict_metadata_list,
destination_commit_id,
mergeable,
next_token,
source_commit_id
FROM aws.codecommit.merge_conflicts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_describe_merge_conflicts"
    values={[
        { label: 'batch_describe_merge_conflicts', value: 'batch_describe_merge_conflicts' }
    ]}
>
<TabItem value="batch_describe_merge_conflicts">

Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.

```sql
EXEC aws.codecommit.merge_conflicts.batch_describe_merge_conflicts 
@region='{{ region }}' --required 
@@json=
'{
"repositoryName": "{{ repositoryName }}", 
"destinationCommitSpecifier": "{{ destinationCommitSpecifier }}", 
"sourceCommitSpecifier": "{{ sourceCommitSpecifier }}", 
"mergeOption": "{{ mergeOption }}", 
"maxMergeHunks": {{ maxMergeHunks }}, 
"maxConflictFiles": {{ maxConflictFiles }}, 
"filePaths": "{{ filePaths }}", 
"conflictDetailLevel": "{{ conflictDetailLevel }}", 
"conflictResolutionStrategy": "{{ conflictResolutionStrategy }}", 
"nextToken": "{{ nextToken }}"
}'
;
```
</TabItem>
</Tabs>
