--- 
title: objects
hide_title: false
hide_table_of_contents: false
keywords:
  - objects
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

Creates, updates, deletes, gets or lists an <code>objects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="objects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.clouddirectory.objects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_object"><CopyableCode code="create_object" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SchemaFacets"><code>SchemaFacets</code></a></td>
    <td></td>
    <td>Creates an object in a Directory. Additionally attaches the object to a parent, if a parent reference and LinkName is specified. An object is simply a collection of Facet attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet.</td>
</tr>
<tr>
    <td><a href="#attach_object"><CopyableCode code="attach_object" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ParentReference"><code>ParentReference</code></a>, <a href="#parameter-ChildReference"><code>ChildReference</code></a>, <a href="#parameter-LinkName"><code>LinkName</code></a></td>
    <td></td>
    <td>Attaches an existing object to another object. An object can be accessed in two ways: Using the path Using ObjectIdentifier</td>
</tr>
<tr>
    <td><a href="#detach_object"><CopyableCode code="detach_object" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ParentReference"><code>ParentReference</code></a>, <a href="#parameter-LinkName"><code>LinkName</code></a></td>
    <td></td>
    <td>Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.</td>
</tr>
<tr>
    <td><a href="#delete_object"><CopyableCode code="delete_object" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see Amazon Cloud Directory Limits.</td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_object"
    values={[
        { label: 'create_object', value: 'create_object' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_object">

Creates an object in a Directory. Additionally attaches the object to a parent, if a parent reference and LinkName is specified. An object is simply a collection of Facet attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet.

```sql
INSERT INTO aws.clouddirectory.objects (
SchemaFacets,
ObjectAttributeList,
ParentReference,
LinkName,
`x-amz-data-partition`,
region
)
SELECT 
'{{ SchemaFacets }}' /* required */,
'{{ ObjectAttributeList }}',
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
- name: objects
  props:
    - name: x-amz-data-partition
      value: "{{ x-amz-data-partition }}"
      description: Required parameter for the objects resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the objects resource.
    - name: SchemaFacets
      value:
        - SchemaArn: "{{ SchemaArn }}"
          FacetName: "{{ FacetName }}"
    - name: ObjectAttributeList
      value:
        - Key:
            SchemaArn: "{{ SchemaArn }}"
            FacetName: "{{ FacetName }}"
            Name: "{{ Name }}"
          Value:
            StringValue: "{{ StringValue }}"
            BinaryValue: "{{ BinaryValue }}"
            BooleanValue: {{ BooleanValue }}
            NumberValue: "{{ NumberValue }}"
            DatetimeValue: "{{ DatetimeValue }}"
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
    defaultValue="attach_object"
    values={[
        { label: 'attach_object', value: 'attach_object' },
        { label: 'detach_object', value: 'detach_object' }
    ]}
>
<TabItem value="attach_object">

Attaches an existing object to another object. An object can be accessed in two ways: Using the path Using ObjectIdentifier

```sql
UPDATE aws.clouddirectory.objects
SET 
ParentReference = '{{ ParentReference }}',
ChildReference = '{{ ChildReference }}',
LinkName = '{{ LinkName }}'
WHERE 
`x-amz-data-partition` = '{{ x-amz-data-partition }}' --required
AND region = '{{ region }}' --required
AND ParentReference = '{{ ParentReference }}' --required
AND ChildReference = '{{ ChildReference }}' --required
AND LinkName = '{{ LinkName }}' --required
RETURNING
AttachedObjectIdentifier;
```
</TabItem>
<TabItem value="detach_object">

Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.

```sql
UPDATE aws.clouddirectory.objects
SET 
ParentReference = '{{ ParentReference }}',
LinkName = '{{ LinkName }}'
WHERE 
`x-amz-data-partition` = '{{ x-amz-data-partition }}' --required
AND region = '{{ region }}' --required
AND ParentReference = '{{ ParentReference }}' --required
AND LinkName = '{{ LinkName }}' --required
RETURNING
DetachedObjectIdentifier;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_object"
    values={[
        { label: 'delete_object', value: 'delete_object' }
    ]}
>
<TabItem value="delete_object">

Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see Amazon Cloud Directory Limits.

```sql
DELETE FROM aws.clouddirectory.objects
WHERE `x-amz-data-partition` = '{{ x-amz-data-partition }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
