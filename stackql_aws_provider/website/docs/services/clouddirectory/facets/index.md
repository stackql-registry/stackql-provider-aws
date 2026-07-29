--- 
title: facets
hide_title: false
hide_table_of_contents: false
keywords:
  - facets
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

Creates, updates, deletes, gets or lists a <code>facets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="facets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.clouddirectory.facets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_facet"
    values={[
        { label: 'get_facet', value: 'get_facet' }
    ]}
>
<TabItem value="get_facet">

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
    <td><CopyableCode code="facet_style" /></td>
    <td><code>string</code></td>
    <td>There are two different styles that you can define on any given facet, Static and Dynamic. For static facets, all attributes must be defined in the schema. For dynamic facets, attributes can be defined during data plane operations. (STATIC, DYNAMIC)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Facet. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="object_type" /></td>
    <td><code>string</code></td>
    <td>The object type that is associated with the facet. See CreateFacetRequest$ObjectType for more details. (NODE, LEAF_NODE, POLICY, INDEX)</td>
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
    <td><a href="#get_facet"><CopyableCode code="get_facet" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details of the Facet, such as facet name, attributes, Rules, or ObjectType. You can call this on all kinds of schema facets -- published, development, or applied.</td>
</tr>
<tr>
    <td><a href="#create_facet"><CopyableCode code="create_facet" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Creates a new Facet in a schema. Facet creation is allowed only in development or applied schemas.</td>
</tr>
<tr>
    <td><a href="#create_typed_link_facet"><CopyableCode code="create_typed_link_facet" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a TypedLinkFacet. For more information, see Typed Links.</td>
</tr>
<tr>
    <td><a href="#update_typed_link_facet"><CopyableCode code="update_typed_link_facet" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-AttributeUpdates"><code>AttributeUpdates</code></a>, <a href="#parameter-IdentityAttributeOrder"><code>IdentityAttributeOrder</code></a></td>
    <td></td>
    <td>Updates a TypedLinkFacet. For more information, see Typed Links.</td>
</tr>
<tr>
    <td><a href="#add_facet_to_object"><CopyableCode code="add_facet_to_object" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SchemaFacet"><code>SchemaFacet</code></a>, <a href="#parameter-ObjectReference"><code>ObjectReference</code></a></td>
    <td></td>
    <td>Adds a new Facet to an object. An object can have more than one facet applied on it.</td>
</tr>
<tr>
    <td><a href="#update_facet"><CopyableCode code="update_facet" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Does the following: Adds new Attributes, Rules, or ObjectTypes. Updates existing Attributes, Rules, or ObjectTypes. Deletes existing Attributes, Rules, or ObjectTypes.</td>
</tr>
<tr>
    <td><a href="#delete_facet"><CopyableCode code="delete_facet" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a given Facet. All attributes and Rules that are associated with the facet will be deleted. Only development schema facets are allowed deletion.</td>
</tr>
<tr>
    <td><a href="#delete_typed_link_facet"><CopyableCode code="delete_typed_link_facet" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Deletes a TypedLinkFacet. For more information, see Typed Links.</td>
</tr>
<tr>
    <td><a href="#remove_facet_from_object"><CopyableCode code="remove_facet_from_object" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-x-amz-data-partition"><code>x-amz-data-partition</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SchemaFacet"><code>SchemaFacet</code></a>, <a href="#parameter-ObjectReference"><code>ObjectReference</code></a></td>
    <td></td>
    <td>Removes the specified facet from the specified object.</td>
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
    <td>The ARN of the directory in which the object resides.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_facet"
    values={[
        { label: 'get_facet', value: 'get_facet' }
    ]}
>
<TabItem value="get_facet">

Gets details of the Facet, such as facet name, attributes, Rules, or ObjectType. You can call this on all kinds of schema facets -- published, development, or applied.

```sql
SELECT
facet_style,
name,
object_type
FROM aws.clouddirectory.facets
WHERE `x-amz-data-partition` = '{{ x-amz-data-partition }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_facet"
    values={[
        { label: 'create_facet', value: 'create_facet' },
        { label: 'create_typed_link_facet', value: 'create_typed_link_facet' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_facet">

Creates a new Facet in a schema. Facet creation is allowed only in development or applied schemas.

```sql
INSERT INTO aws.clouddirectory.facets (
Name,
Attributes,
ObjectType,
FacetStyle,
`x-amz-data-partition`,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Attributes }}',
'{{ ObjectType }}',
'{{ FacetStyle }}',
'{{ x-amz-data-partition }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="create_typed_link_facet">

Creates a TypedLinkFacet. For more information, see Typed Links.

```sql
INSERT INTO aws.clouddirectory.facets (
Facet,
`x-amz-data-partition`,
region
)
SELECT 
'{{ Facet }}',
'{{ x-amz-data-partition }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: facets
  props:
    - name: x-amz-data-partition
      value: "{{ x-amz-data-partition }}"
      description: Required parameter for the facets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the facets resource.
    - name: Name
      value: "{{ Name }}"
    - name: Attributes
      value:
        - Name: "{{ Name }}"
          AttributeDefinition:
            Type: "{{ Type }}"
            DefaultValue:
              StringValue: "{{ StringValue }}"
              BinaryValue: "{{ BinaryValue }}"
              BooleanValue: {{ BooleanValue }}
              NumberValue: "{{ NumberValue }}"
              DatetimeValue: "{{ DatetimeValue }}"
            IsImmutable: {{ IsImmutable }}
            Rules: "{{ Rules }}"
          AttributeReference:
            TargetFacetName: "{{ TargetFacetName }}"
            TargetAttributeName: "{{ TargetAttributeName }}"
          RequiredBehavior: "{{ RequiredBehavior }}"
    - name: ObjectType
      value: "{{ ObjectType }}"
      valid_values: ['NODE', 'LEAF_NODE', 'POLICY', 'INDEX']
    - name: FacetStyle
      value: "{{ FacetStyle }}"
      valid_values: ['STATIC', 'DYNAMIC']
    - name: Facet
      description: |
        Defines the typed links structure and its attributes. To create a typed link facet, use the CreateTypedLinkFacet API.
      value:
        Name: "{{ Name }}"
        Attributes:
          - Name: "{{ Name }}"
            Type: "{{ Type }}"
            DefaultValue:
              StringValue: "{{ StringValue }}"
              BinaryValue: "{{ BinaryValue }}"
              BooleanValue: {{ BooleanValue }}
              NumberValue: "{{ NumberValue }}"
              DatetimeValue: "{{ DatetimeValue }}"
            IsImmutable: {{ IsImmutable }}
            Rules: "{{ Rules }}"
            RequiredBehavior: "{{ RequiredBehavior }}"
        IdentityAttributeOrder:
          - "{{ IdentityAttributeOrder }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_typed_link_facet"
    values={[
        { label: 'update_typed_link_facet', value: 'update_typed_link_facet' },
        { label: 'add_facet_to_object', value: 'add_facet_to_object' },
        { label: 'update_facet', value: 'update_facet' }
    ]}
>
<TabItem value="update_typed_link_facet">

Updates a TypedLinkFacet. For more information, see Typed Links.

```sql
UPDATE aws.clouddirectory.facets
SET 
Name = '{{ Name }}',
AttributeUpdates = '{{ AttributeUpdates }}',
IdentityAttributeOrder = '{{ IdentityAttributeOrder }}'
WHERE 
`x-amz-data-partition` = '{{ x-amz-data-partition }}' --required
AND region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND AttributeUpdates = '{{ AttributeUpdates }}' --required
AND IdentityAttributeOrder = '{{ IdentityAttributeOrder }}' --required;
```
</TabItem>
<TabItem value="add_facet_to_object">

Adds a new Facet to an object. An object can have more than one facet applied on it.

```sql
UPDATE aws.clouddirectory.facets
SET 
SchemaFacet = '{{ SchemaFacet }}',
ObjectAttributeList = '{{ ObjectAttributeList }}',
ObjectReference = '{{ ObjectReference }}'
WHERE 
`x-amz-data-partition` = '{{ x-amz-data-partition }}' --required
AND region = '{{ region }}' --required
AND SchemaFacet = '{{ SchemaFacet }}' --required
AND ObjectReference = '{{ ObjectReference }}' --required;
```
</TabItem>
<TabItem value="update_facet">

Does the following: Adds new Attributes, Rules, or ObjectTypes. Updates existing Attributes, Rules, or ObjectTypes. Deletes existing Attributes, Rules, or ObjectTypes.

```sql
UPDATE aws.clouddirectory.facets
SET 
Name = '{{ Name }}',
AttributeUpdates = '{{ AttributeUpdates }}',
ObjectType = '{{ ObjectType }}'
WHERE 
`x-amz-data-partition` = '{{ x-amz-data-partition }}' --required
AND region = '{{ region }}' --required
AND Name = '{{ Name }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_facet"
    values={[
        { label: 'delete_facet', value: 'delete_facet' }
    ]}
>
<TabItem value="delete_facet">

Deletes a given Facet. All attributes and Rules that are associated with the facet will be deleted. Only development schema facets are allowed deletion.

```sql
DELETE FROM aws.clouddirectory.facets
WHERE `x-amz-data-partition` = '{{ x-amz-data-partition }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_typed_link_facet"
    values={[
        { label: 'delete_typed_link_facet', value: 'delete_typed_link_facet' },
        { label: 'remove_facet_from_object', value: 'remove_facet_from_object' }
    ]}
>
<TabItem value="delete_typed_link_facet">

Deletes a TypedLinkFacet. For more information, see Typed Links.

```sql
EXEC aws.clouddirectory.facets.delete_typed_link_facet 
@x-amz-data-partition='{{ x-amz-data-partition }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}"
}'
;
```
</TabItem>
<TabItem value="remove_facet_from_object">

Removes the specified facet from the specified object.

```sql
EXEC aws.clouddirectory.facets.remove_facet_from_object 
@x-amz-data-partition='{{ x-amz-data-partition }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"SchemaFacet": "{{ SchemaFacet }}", 
"ObjectReference": "{{ ObjectReference }}"
}'
;
```
</TabItem>
</Tabs>
