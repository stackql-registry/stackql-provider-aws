--- 
title: differences
hide_title: false
hide_table_of_contents: false
keywords:
  - differences
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

Creates, updates, deletes, gets or lists a <code>differences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="differences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.differences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_differences"
    values={[
        { label: 'get_differences', value: 'get_differences' }
    ]}
>
<TabItem value="get_differences">

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
    <td><CopyableCode code="after_blob" /></td>
    <td><code>object</code></td>
    <td>Information about an afterBlob data type object, including the ID, the file mode permission code, and the path.</td>
</tr>
<tr>
    <td><CopyableCode code="before_blob" /></td>
    <td><code>object</code></td>
    <td>Information about a beforeBlob data type object, including the ID, the file mode permission code, and the path.</td>
</tr>
<tr>
    <td><CopyableCode code="change_type" /></td>
    <td><code>string</code></td>
    <td>Whether the change type of the difference is an addition (A), deletion (D), or modification (M). (A, M, D)</td>
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
    <td><a href="#get_differences"><CopyableCode code="get_differences" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path. For line-level diff details, pass the beforeBlob.blobId and afterBlob.blobId values from a Difference object to GetBlobDifferences.</td>
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
    defaultValue="get_differences"
    values={[
        { label: 'get_differences', value: 'get_differences' }
    ]}
>
<TabItem value="get_differences">

Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference). Results can be limited to a specified path. For line-level diff details, pass the beforeBlob.blobId and afterBlob.blobId values from a Difference object to GetBlobDifferences.

```sql
SELECT
after_blob,
before_blob,
change_type
FROM aws.codecommit.differences
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
