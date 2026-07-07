--- 
title: thing_types
hide_title: false
hide_table_of_contents: false
keywords:
  - thing_types
  - iot
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

Creates, updates, deletes, gets or lists a <code>thing_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="thing_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.thing_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_thing_type"
    values={[
        { label: 'describe_thing_type', value: 'describe_thing_type' },
        { label: 'list_thing_types', value: 'list_thing_types' }
    ]}
>
<TabItem value="describe_thing_type">

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
    <td><CopyableCode code="thingTypeArn" /></td>
    <td><code>string</code></td>
    <td>The thing type ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="thingTypeId" /></td>
    <td><code>string</code></td>
    <td>The thing type ID.</td>
</tr>
<tr>
    <td><CopyableCode code="thingTypeMetadata" /></td>
    <td><code>object</code></td>
    <td>The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when it was deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="thingTypeName" /></td>
    <td><code>string</code></td>
    <td>The name of the thing type. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="thingTypeProperties" /></td>
    <td><code>object</code></td>
    <td>The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_thing_types">

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
    <td><CopyableCode code="thingTypeArn" /></td>
    <td><code>string</code></td>
    <td>The thing type ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="thingTypeMetadata" /></td>
    <td><code>object</code></td>
    <td>The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when it was deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="thingTypeName" /></td>
    <td><code>string</code></td>
    <td>The name of the thing type. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="thingTypeProperties" /></td>
    <td><code>object</code></td>
    <td>The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.</td>
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
    <td><a href="#describe_thing_type"><CopyableCode code="describe_thing_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-thing_type_name"><code>thing_type_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified thing type. Requires permission to access the DescribeThingType action.</td>
</tr>
<tr>
    <td><a href="#list_thing_types"><CopyableCode code="list_thing_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-thingTypeName"><code>thingTypeName</code></a></td>
    <td>Lists the existing thing types. Requires permission to access the ListThingTypes action.</td>
</tr>
<tr>
    <td><a href="#create_thing_type"><CopyableCode code="create_thing_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-thing_type_name"><code>thing_type_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new thing type. If this call is made multiple times using the same thing type name and configuration, the call will succeed. If this call is made with the same thing type name but different configuration a ResourceAlreadyExistsException is thrown. Requires permission to access the CreateThingType action.</td>
</tr>
<tr>
    <td><a href="#update_thing_type"><CopyableCode code="update_thing_type" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-thing_type_name"><code>thing_type_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a thing type.</td>
</tr>
<tr>
    <td><a href="#delete_thing_type"><CopyableCode code="delete_thing_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-thing_type_name"><code>thing_type_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified thing type. You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling DeprecateThingType, then remove any associated things by calling UpdateThing to change the thing type on any associated thing, and finally use DeleteThingType to delete the thing type. Requires permission to access the DeleteThingType action.</td>
</tr>
<tr>
    <td><a href="#deprecate_thing_type"><CopyableCode code="deprecate_thing_type" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-thing_type_name"><code>thing_type_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deprecates a thing type. You can not associate new things with deprecated thing type. Requires permission to access the DeprecateThingType action.</td>
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
<tr id="parameter-thing_type_name">
    <td><CopyableCode code="thing_type_name" /></td>
    <td><code>string</code></td>
    <td>The name of the thing type to deprecate.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this operation.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
<tr id="parameter-thingTypeName">
    <td><CopyableCode code="thingTypeName" /></td>
    <td><code>string</code></td>
    <td>The name of the thing type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_thing_type"
    values={[
        { label: 'describe_thing_type', value: 'describe_thing_type' },
        { label: 'list_thing_types', value: 'list_thing_types' }
    ]}
>
<TabItem value="describe_thing_type">

Gets information about the specified thing type. Requires permission to access the DescribeThingType action.

```sql
SELECT
thingTypeArn,
thingTypeId,
thingTypeMetadata,
thingTypeName,
thingTypeProperties
FROM aws.iot.thing_types
WHERE thing_type_name = '{{ thing_type_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_thing_types">

Lists the existing thing types. Requires permission to access the ListThingTypes action.

```sql
SELECT
thingTypeArn,
thingTypeMetadata,
thingTypeName,
thingTypeProperties
FROM aws.iot.thing_types
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND thingTypeName = '{{ thingTypeName }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_thing_type"
    values={[
        { label: 'create_thing_type', value: 'create_thing_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_thing_type">

Creates a new thing type. If this call is made multiple times using the same thing type name and configuration, the call will succeed. If this call is made with the same thing type name but different configuration a ResourceAlreadyExistsException is thrown. Requires permission to access the CreateThingType action.

```sql
INSERT INTO aws.iot.thing_types (
thingTypeProperties,
tags,
thing_type_name,
region
)
SELECT 
'{{ thingTypeProperties }}',
'{{ tags }}',
'{{ thing_type_name }}',
'{{ region }}'
RETURNING
thingTypeArn,
thingTypeId,
thingTypeName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: thing_types
  props:
    - name: thing_type_name
      value: "{{ thing_type_name }}"
      description: Required parameter for the thing_types resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the thing_types resource.
    - name: thingTypeProperties
      description: |
        The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
      value:
        thingTypeDescription: "{{ thingTypeDescription }}"
        searchableAttributes:
          - "{{ searchableAttributes }}"
        mqtt5Configuration:
          propagatingAttributes:
            - userPropertyKey: "{{ userPropertyKey }}"
              thingAttribute: "{{ thingAttribute }}"
              connectionAttribute: "{{ connectionAttribute }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_thing_type"
    values={[
        { label: 'update_thing_type', value: 'update_thing_type' }
    ]}
>
<TabItem value="update_thing_type">

Updates a thing type.

```sql
UPDATE aws.iot.thing_types
SET 
thingTypeProperties = '{{ thingTypeProperties }}'
WHERE 
thing_type_name = '{{ thing_type_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_thing_type"
    values={[
        { label: 'delete_thing_type', value: 'delete_thing_type' }
    ]}
>
<TabItem value="delete_thing_type">

Deletes the specified thing type. You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling DeprecateThingType, then remove any associated things by calling UpdateThing to change the thing type on any associated thing, and finally use DeleteThingType to delete the thing type. Requires permission to access the DeleteThingType action.

```sql
DELETE FROM aws.iot.thing_types
WHERE thing_type_name = '{{ thing_type_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="deprecate_thing_type"
    values={[
        { label: 'deprecate_thing_type', value: 'deprecate_thing_type' }
    ]}
>
<TabItem value="deprecate_thing_type">

Deprecates a thing type. You can not associate new things with deprecated thing type. Requires permission to access the DeprecateThingType action.

```sql
EXEC aws.iot.thing_types.deprecate_thing_type 
@thing_type_name='{{ thing_type_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"undoDeprecate": {{ undoDeprecate }}
}'
;
```
</TabItem>
</Tabs>
