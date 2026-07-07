--- 
title: indexes
hide_title: false
hide_table_of_contents: false
keywords:
  - indexes
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

Creates, updates, deletes, gets or lists an <code>indexes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="indexes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.clouddirectory.indexes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_index"
    values={[
        { label: 'list_index', value: 'list_index' }
    ]}
>
<TabItem value="list_index">

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
    <td><a href="#list_index"><CopyableCode code="list_index" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-consistency-level"><code>x-amz-consistency-level</code></a></td>
    <td>Lists objects attached to the specified index.</td>
</tr>
<tr>
    <td><a href="#create_index"><CopyableCode code="create_index" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrderedIndexedAttributeList"><code>OrderedIndexedAttributeList</code></a>, <a href="#parameter-IsUnique"><code>IsUnique</code></a></td>
    <td></td>
    <td>Creates an index object. See Indexing and search for more information.</td>
</tr>
<tr>
    <td><a href="#attach_to_index"><CopyableCode code="attach_to_index" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexReference"><code>IndexReference</code></a>, <a href="#parameter-TargetReference"><code>TargetReference</code></a></td>
    <td></td>
    <td>Attaches the specified object to the specified index.</td>
</tr>
<tr>
    <td><a href="#detach_from_index"><CopyableCode code="detach_from_index" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexReference"><code>IndexReference</code></a>, <a href="#parameter-TargetReference"><code>TargetReference</code></a></td>
    <td></td>
    <td>Detaches the specified object from the specified index.</td>
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
    <td>The Amazon Resource Name (ARN) of the directory the index and object exist in.</td>
</tr>
<tr id="parameter-x-amz-consistency-level">
    <td><CopyableCode code="x-amz-consistency-level" /></td>
    <td><code>string</code></td>
    <td>The consistency level to execute the request at.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_index"
    values={[
        { label: 'list_index', value: 'list_index' }
    ]}
>
<TabItem value="list_index">

Lists objects attached to the specified index.

```sql
SELECT
IndexedAttributes,
ObjectIdentifier
FROM aws.clouddirectory.indexes
WHERE `x-amz-data-partition` = '{{ x-amz-data-partition }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-consistency-level` = '{{ x-amz-consistency-level }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_index"
    values={[
        { label: 'create_index', value: 'create_index' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_index">

Creates an index object. See Indexing and search for more information.

```sql
INSERT INTO aws.clouddirectory.indexes (
OrderedIndexedAttributeList,
IsUnique,
ParentReference,
LinkName,
`x-amz-data-partition`,
region
)
SELECT 
'{{ OrderedIndexedAttributeList }}' /* required */,
{{ IsUnique }} /* required */,
'{{ ParentReference }}',
'{{ LinkName }}',
'{{ x-amz-data-partition }}',
'{{ region }}'
RETURNING
ObjectIdentifier
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: indexes
  props:
    - name: x-amz-data-partition
      value: "{{ x-amz-data-partition }}"
      description: Required parameter for the indexes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the indexes resource.
    - name: OrderedIndexedAttributeList
      value:
        - SchemaArn: "{{ SchemaArn }}"
          FacetName: "{{ FacetName }}"
          Name: "{{ Name }}"
    - name: IsUnique
      value: {{ IsUnique }}
    - name: ParentReference
      description: |
        The reference that identifies an object.
      value:
        Selector: "{{ Selector }}"
    - name: LinkName
      value: "{{ LinkName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_to_index"
    values={[
        { label: 'attach_to_index', value: 'attach_to_index' }
    ]}
>
<TabItem value="attach_to_index">

Attaches the specified object to the specified index.

```sql
UPDATE aws.clouddirectory.indexes
SET 
IndexReference = '{{ IndexReference }}',
TargetReference = '{{ TargetReference }}'
WHERE 
`x-amz-data-partition` = '{{ x-amz-data-partition }}' --required
AND region = '{{ region }}' --required
AND IndexReference = '{{ IndexReference }}' --required
AND TargetReference = '{{ TargetReference }}' --required
RETURNING
AttachedObjectIdentifier;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detach_from_index"
    values={[
        { label: 'detach_from_index', value: 'detach_from_index' }
    ]}
>
<TabItem value="detach_from_index">

Detaches the specified object from the specified index.

```sql
EXEC aws.clouddirectory.indexes.detach_from_index 
@x-amz-data-partition='{{ x-amz-data-partition }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"IndexReference": "{{ IndexReference }}", 
"TargetReference": "{{ TargetReference }}"
}'
;
```
</TabItem>
</Tabs>
