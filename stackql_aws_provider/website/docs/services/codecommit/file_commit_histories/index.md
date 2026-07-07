--- 
title: file_commit_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - file_commit_histories
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

Creates, updates, deletes, gets or lists a <code>file_commit_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="file_commit_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.file_commit_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_file_commit_history"
    values={[
        { label: 'list_file_commit_history', value: 'list_file_commit_history' }
    ]}
>
<TabItem value="list_file_commit_history">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>An enumeration token that can be used to return the next batch of results.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionDag" /></td>
    <td><code>array</code></td>
    <td>An array of FileVersion objects that form a directed acyclic graph (DAG) of the changes to the file made by the commits that changed the file.</td>
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
    <td><a href="#list_file_commit_history"><CopyableCode code="list_file_commit_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of commits and changes to a specified file.</td>
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
    defaultValue="list_file_commit_history"
    values={[
        { label: 'list_file_commit_history', value: 'list_file_commit_history' }
    ]}
>
<TabItem value="list_file_commit_history">

Retrieves a list of commits and changes to a specified file.

```sql
SELECT
nextToken,
revisionDag
FROM aws.codecommit.file_commit_histories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
