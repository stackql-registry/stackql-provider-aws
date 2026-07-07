--- 
title: attached_indices
hide_title: false
hide_table_of_contents: false
keywords:
  - attached_indices
  - clouddirectory
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

Creates, updates, deletes, gets or lists an <code>attached_indices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attached_indices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.clouddirectory.attached_indices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_attached_indices"
    values={[
        { label: 'list_attached_indices', value: 'list_attached_indices' }
    ]}
>
<TabItem value="list_attached_indices">

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
    <td><CopyableCode code="IndexedAttributes" /></td>
    <td><code>array</code></td>
    <td>The indexed attribute values.</td>
</tr>
<tr>
    <td><CopyableCode code="ObjectIdentifier" /></td>
    <td><code>string</code></td>
    <td>In response to ListIndex, the ObjectIdentifier of the object attached to the index. In response to ListAttachedIndices, the ObjectIdentifier of the index attached to the object. This field will always contain the ObjectIdentifier of the object on the opposite side of the attachment specified in the query.</td>
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
    <td><a href="#list_attached_indices"><CopyableCode code="list_attached_indices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-consistency-level"><code>x-amz-consistency-level</code></a></td>
    <td>Lists indices attached to the specified object.</td>
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
<tr id="parameter-x-amz-data-partition">
    <td><CopyableCode code="x-amz-data-partition" /></td>
    <td><code>string</code></td>
    <td>The ARN of the directory.</td>
</tr>
<tr id="parameter-x-amz-consistency-level">
    <td><CopyableCode code="x-amz-consistency-level" /></td>
    <td><code>string</code></td>
    <td>The consistency level to use for this operation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_attached_indices"
    values={[
        { label: 'list_attached_indices', value: 'list_attached_indices' }
    ]}
>
<TabItem value="list_attached_indices">

Lists indices attached to the specified object.

```sql
SELECT
IndexedAttributes,
ObjectIdentifier
FROM aws.clouddirectory.attached_indices
WHERE `x-amz-data-partition` = '{{ x-amz-data-partition }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-consistency-level` = '{{ x-amz-consistency-level }}'
;
```
</TabItem>
</Tabs>
