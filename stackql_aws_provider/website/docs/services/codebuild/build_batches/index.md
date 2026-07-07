--- 
title: build_batches
hide_title: false
hide_table_of_contents: false
keywords:
  - build_batches
  - codebuild
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

Creates, updates, deletes, gets or lists a <code>build_batches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="build_batches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codebuild.build_batches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_build_batches"
    values={[
        { label: 'batch_get_build_batches', value: 'batch_get_build_batches' },
        { label: 'list_build_batches', value: 'list_build_batches' }
    ]}
>
<TabItem value="batch_get_build_batches">

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
    <td><CopyableCode code="buildBatches" /></td>
    <td><code>array</code></td>
    <td>An array of BuildBatch objects that represent the retrieved batch builds.</td>
</tr>
<tr>
    <td><CopyableCode code="buildBatchesNotFound" /></td>
    <td><code>array</code></td>
    <td>An array that contains the identifiers of any batch builds that are not found.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_build_batches">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>An array of strings that contains the batch build identifiers.</td>
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
    <td><a href="#batch_get_build_batches"><CopyableCode code="batch_get_build_batches" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about one or more batch builds.</td>
</tr>
<tr>
    <td><a href="#list_build_batches"><CopyableCode code="list_build_batches" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the identifiers of your build batches in the current region.</td>
</tr>
<tr>
    <td><a href="#delete_build_batch"><CopyableCode code="delete_build_batch" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a batch build.</td>
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
    defaultValue="batch_get_build_batches"
    values={[
        { label: 'batch_get_build_batches', value: 'batch_get_build_batches' },
        { label: 'list_build_batches', value: 'list_build_batches' }
    ]}
>
<TabItem value="batch_get_build_batches">

Retrieves information about one or more batch builds.

```sql
SELECT
buildBatches,
buildBatchesNotFound
FROM aws.codebuild.build_batches
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_build_batches">

Retrieves the identifiers of your build batches in the current region.

```sql
SELECT
id
FROM aws.codebuild.build_batches
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_build_batch"
    values={[
        { label: 'delete_build_batch', value: 'delete_build_batch' }
    ]}
>
<TabItem value="delete_build_batch">

Deletes a batch build.

```sql
DELETE FROM aws.codebuild.build_batches
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
