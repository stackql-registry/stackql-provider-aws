--- 
title: source_repository_branches
hide_title: false
hide_table_of_contents: false
keywords:
  - source_repository_branches
  - codecatalyst
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

Creates, updates, deletes, gets or lists a <code>source_repository_branches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="source_repository_branches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecatalyst.source_repository_branches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_source_repository_branches"
    values={[
        { label: 'list_source_repository_branches', value: 'list_source_repository_branches' }
    ]}
>
<TabItem value="list_source_repository_branches">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the branch.</td>
</tr>
<tr>
    <td><CopyableCode code="headCommitId" /></td>
    <td><code>string</code></td>
    <td>The commit ID of the tip of the branch at the time of the request, also known as the head commit.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the branch was last updated, in coordinated universal time (UTC) timestamp format as specified in RFC 3339.</td>
</tr>
<tr>
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The Git reference name of the branch.</td>
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
    <td><a href="#list_source_repository_branches"><CopyableCode code="list_source_repository_branches" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-project_name"><code>project_name</code></a>, <a href="#parameter-source_repository_name"><code>source_repository_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of branches in a specified source repository.</td>
</tr>
<tr>
    <td><a href="#create_source_repository_branch"><CopyableCode code="create_source_repository_branch" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-project_name"><code>project_name</code></a>, <a href="#parameter-source_repository_name"><code>source_repository_name</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a branch in a specified source repository in Amazon CodeCatalyst. This API only creates a branch in a source repository hosted in Amazon CodeCatalyst. You cannot use this API to create a branch in a linked repository.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the branch you're creating.</td>
</tr>
<tr id="parameter-project_name">
    <td><CopyableCode code="project_name" /></td>
    <td><code>string</code></td>
    <td>The name of the project in the space.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-source_repository_name">
    <td><CopyableCode code="source_repository_name" /></td>
    <td><code>string</code></td>
    <td>The name of the repository where you want to create a branch.</td>
</tr>
<tr id="parameter-space_name">
    <td><CopyableCode code="space_name" /></td>
    <td><code>string</code></td>
    <td>The name of the space.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_source_repository_branches"
    values={[
        { label: 'list_source_repository_branches', value: 'list_source_repository_branches' }
    ]}
>
<TabItem value="list_source_repository_branches">

Retrieves a list of branches in a specified source repository.

```sql
SELECT
name,
headCommitId,
lastUpdatedTime,
ref
FROM aws.codecatalyst.source_repository_branches
WHERE space_name = '{{ space_name }}' -- required
AND project_name = '{{ project_name }}' -- required
AND source_repository_name = '{{ source_repository_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_source_repository_branch"
    values={[
        { label: 'create_source_repository_branch', value: 'create_source_repository_branch' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_source_repository_branch">

Creates a branch in a specified source repository in Amazon CodeCatalyst. This API only creates a branch in a source repository hosted in Amazon CodeCatalyst. You cannot use this API to create a branch in a linked repository.

```sql
INSERT INTO aws.codecatalyst.source_repository_branches (
headCommitId,
space_name,
project_name,
source_repository_name,
name,
region
)
SELECT 
'{{ headCommitId }}',
'{{ space_name }}',
'{{ project_name }}',
'{{ source_repository_name }}',
'{{ name }}',
'{{ region }}'
RETURNING
name,
headCommitId,
lastUpdatedTime,
ref
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: source_repository_branches
  props:
    - name: space_name
      value: "{{ space_name }}"
      description: Required parameter for the source_repository_branches resource.
    - name: project_name
      value: "{{ project_name }}"
      description: Required parameter for the source_repository_branches resource.
    - name: source_repository_name
      value: "{{ source_repository_name }}"
      description: Required parameter for the source_repository_branches resource.
    - name: name
      value: "{{ name }}"
      description: Required parameter for the source_repository_branches resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the source_repository_branches resource.
    - name: headCommitId
      value: "{{ headCommitId }}"
`}</CodeBlock>

</TabItem>
</Tabs>
