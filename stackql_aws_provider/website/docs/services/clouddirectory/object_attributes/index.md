--- 
title: object_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - object_attributes
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

Creates, updates, deletes, gets or lists an <code>object_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="object_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.clouddirectory.object_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_object_attributes"
    values={[
        { label: 'get_object_attributes', value: 'get_object_attributes' },
        { label: 'list_object_attributes', value: 'list_object_attributes' }
    ]}
>
<TabItem value="get_object_attributes">

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
    <td><CopyableCode code="Attributes" /></td>
    <td><code>array</code></td>
    <td>The attributes that are associated with the object.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_object_attributes">

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
    <td><CopyableCode code="Key" /></td>
    <td><code>object</code></td>
    <td>The key of the attribute.</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>object</code></td>
    <td>The value of the attribute.</td>
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
    <td><a href="#get_object_attributes"><CopyableCode code="get_object_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-consistency-level"><code>x-amz-consistency-level</code></a></td>
    <td>Retrieves attributes within a facet that are associated with an object.</td>
</tr>
<tr>
    <td><a href="#list_object_attributes"><CopyableCode code="list_object_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-consistency-level"><code>x-amz-consistency-level</code></a></td>
    <td>Lists all attributes that are associated with an object.</td>
</tr>
<tr>
    <td><a href="#update_object_attributes"><CopyableCode code="update_object_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ObjectReference"><code>ObjectReference</code></a>, <a href="#parameter-AttributeUpdates"><code>AttributeUpdates</code></a></td>
    <td></td>
    <td>Updates a given object's attributes.</td>
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
    <td>The Amazon Resource Name (ARN) that is associated with the Directory where the object resides. For more information, see arns.</td>
</tr>
<tr id="parameter-x-amz-consistency-level">
    <td><CopyableCode code="x-amz-consistency-level" /></td>
    <td><code>string</code></td>
    <td>Represents the manner and timing in which the successful write or update of an object is reflected in a subsequent read operation of that same object.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_object_attributes"
    values={[
        { label: 'get_object_attributes', value: 'get_object_attributes' },
        { label: 'list_object_attributes', value: 'list_object_attributes' }
    ]}
>
<TabItem value="get_object_attributes">

Retrieves attributes within a facet that are associated with an object.

```sql
SELECT
Attributes
FROM aws.clouddirectory.object_attributes
WHERE `x-amz-data-partition` = '{{ x-amz-data-partition }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-consistency-level` = '{{ x-amz-consistency-level }}'
;
```
</TabItem>
<TabItem value="list_object_attributes">

Lists all attributes that are associated with an object.

```sql
SELECT
Key,
Value
FROM aws.clouddirectory.object_attributes
WHERE `x-amz-data-partition` = '{{ x-amz-data-partition }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-consistency-level` = '{{ x-amz-consistency-level }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_object_attributes"
    values={[
        { label: 'update_object_attributes', value: 'update_object_attributes' }
    ]}
>
<TabItem value="update_object_attributes">

Updates a given object's attributes.

```sql
UPDATE aws.clouddirectory.object_attributes
SET 
ObjectReference = '{{ ObjectReference }}',
AttributeUpdates = '{{ AttributeUpdates }}'
WHERE 
`x-amz-data-partition` = '{{ x-amz-data-partition }}' --required
AND region = '{{ region }}' --required
AND ObjectReference = '{{ ObjectReference }}' --required
AND AttributeUpdates = '{{ AttributeUpdates }}' --required
RETURNING
ObjectIdentifier;
```
</TabItem>
</Tabs>
