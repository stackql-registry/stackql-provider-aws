--- 
title: merge_options
hide_title: false
hide_table_of_contents: false
keywords:
  - merge_options
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

Creates, updates, deletes, gets or lists a <code>merge_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="merge_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.merge_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_merge_options"
    values={[
        { label: 'get_merge_options', value: 'get_merge_options' }
    ]}
>
<TabItem value="get_merge_options">

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
    <td><CopyableCode code="mergeOptions" /></td>
    <td><code>array</code></td>
    <td>The merge option or strategy used to merge the code.</td>
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
    <td><a href="#get_merge_options"><CopyableCode code="get_merge_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.</td>
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
    defaultValue="get_merge_options"
    values={[
        { label: 'get_merge_options', value: 'get_merge_options' }
    ]}
>
<TabItem value="get_merge_options">

Returns information about the merge options available for merging two specified branches. For details about why a merge option is not available, use GetMergeConflicts or DescribeMergeConflicts.

```sql
SELECT
baseCommitId,
destinationCommitId,
mergeOptions,
sourceCommitId
FROM aws.codecommit.merge_options
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
