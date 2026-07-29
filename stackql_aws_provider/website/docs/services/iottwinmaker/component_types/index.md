--- 
title: component_types
hide_title: false
hide_table_of_contents: false
keywords:
  - component_types
  - iottwinmaker
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

Creates, updates, deletes, gets or lists a <code>component_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="component_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iottwinmaker.component_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_component_type"
    values={[
        { label: 'get_component_type', value: 'get_component_type' },
        { label: 'list_component_types', value: 'list_component_types' }
    ]}
>
<TabItem value="get_component_type">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the component type. (pattern: &lt;code&gt;arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:&#91;\/a-zA-Z0-9_\-\.:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="component_type_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the component type. (pattern: &lt;code&gt;&#91;a-zA-Z_\.\-0-9:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="component_type_name" /></td>
    <td><code>string</code></td>
    <td>The component type name. (pattern: &lt;code&gt;.*&#91;^\u0000-\u001F\u007F&#93;*.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="composite_component_types" /></td>
    <td><code>object</code></td>
    <td>This is an object that maps strings to compositeComponentTypes of the componentType. CompositeComponentType is referenced by componentTypeId.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the component type was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the component type. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="extends_from" /></td>
    <td><code>array</code></td>
    <td>The name of the parent component type that this component type extends.</td>
</tr>
<tr>
    <td><CopyableCode code="functions" /></td>
    <td><code>object</code></td>
    <td>An object that maps strings to the functions in the component type. Each string in the mapping must be unique to this object.</td>
</tr>
<tr>
    <td><CopyableCode code="is_abstract" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that specifies whether the component type is abstract.</td>
</tr>
<tr>
    <td><CopyableCode code="is_schema_initialized" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that specifies whether the component type has a schema initializer and that the schema initializer has run.</td>
</tr>
<tr>
    <td><CopyableCode code="is_singleton" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that specifies whether an entity can have more than one component of this type.</td>
</tr>
<tr>
    <td><CopyableCode code="property_definitions" /></td>
    <td><code>object</code></td>
    <td>An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object.</td>
</tr>
<tr>
    <td><CopyableCode code="property_groups" /></td>
    <td><code>object</code></td>
    <td>The maximum number of results to return at one time. The default is 25. Valid Range: Minimum value of 1. Maximum value of 250.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the component type.</td>
</tr>
<tr>
    <td><CopyableCode code="sync_source" /></td>
    <td><code>string</code></td>
    <td>The syncSource of the SyncJob, if this entity was created by a SyncJob. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the component was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace that contains the component type. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9&#93;&#91;a-zA-Z_\-0-9&#93;*&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_component_types">

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
    <td><CopyableCode code="component_type_summaries" /></td>
    <td><code>array</code></td>
    <td>A list of objects that contain information about the component types.</td>
</tr>
<tr>
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>Specifies the maximum number of results to display.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The string that specifies the next page of results. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9&#93;&#91;a-zA-Z_\-0-9&#93;*&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_component_type"><CopyableCode code="get_component_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-component_type_id"><code>component_type_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a component type.</td>
</tr>
<tr>
    <td><a href="#list_component_types"><CopyableCode code="list_component_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all component types in a workspace.</td>
</tr>
<tr>
    <td><a href="#create_component_type"><CopyableCode code="create_component_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-component_type_id"><code>component_type_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a component type.</td>
</tr>
<tr>
    <td><a href="#update_component_type"><CopyableCode code="update_component_type" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-component_type_id"><code>component_type_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates information in a component type.</td>
</tr>
<tr>
    <td><a href="#delete_component_type"><CopyableCode code="delete_component_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-component_type_id"><code>component_type_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a component type.</td>
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
<tr id="parameter-component_type_id">
    <td><CopyableCode code="component_type_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the component type to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace that contains the component type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_component_type"
    values={[
        { label: 'get_component_type', value: 'get_component_type' },
        { label: 'list_component_types', value: 'list_component_types' }
    ]}
>
<TabItem value="get_component_type">

Retrieves information about a component type.

```sql
SELECT
arn,
component_type_id,
component_type_name,
composite_component_types,
creation_date_time,
description,
extends_from,
functions,
is_abstract,
is_schema_initialized,
is_singleton,
property_definitions,
property_groups,
status,
sync_source,
update_date_time,
workspace_id
FROM aws.iottwinmaker.component_types
WHERE workspace_id = '{{ workspace_id }}' -- required
AND component_type_id = '{{ component_type_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_component_types">

Lists all component types in a workspace.

```sql
SELECT
component_type_summaries,
max_results,
next_token,
workspace_id
FROM aws.iottwinmaker.component_types
WHERE workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_component_type"
    values={[
        { label: 'create_component_type', value: 'create_component_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_component_type">

Creates a component type.

```sql
INSERT INTO aws.iottwinmaker.component_types (
isSingleton,
description,
propertyDefinitions,
extendsFrom,
functions,
tags,
propertyGroups,
componentTypeName,
compositeComponentTypes,
workspace_id,
component_type_id,
region
)
SELECT 
{{ isSingleton }},
'{{ description }}',
'{{ propertyDefinitions }}',
'{{ extendsFrom }}',
'{{ functions }}',
'{{ tags }}',
'{{ propertyGroups }}',
'{{ componentTypeName }}',
'{{ compositeComponentTypes }}',
'{{ workspace_id }}',
'{{ component_type_id }}',
'{{ region }}'
RETURNING
arn,
creation_date_time,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: component_types
  props:
    - name: workspace_id
      value: "{{ workspace_id }}"
      description: Required parameter for the component_types resource.
    - name: component_type_id
      value: "{{ component_type_id }}"
      description: Required parameter for the component_types resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the component_types resource.
    - name: isSingleton
      value: {{ isSingleton }}
    - name: description
      value: "{{ description }}"
    - name: propertyDefinitions
      value: "{{ propertyDefinitions }}"
    - name: extendsFrom
      value:
        - "{{ extendsFrom }}"
    - name: functions
      value: "{{ functions }}"
    - name: tags
      value: "{{ tags }}"
    - name: propertyGroups
      value: "{{ propertyGroups }}"
    - name: componentTypeName
      value: "{{ componentTypeName }}"
    - name: compositeComponentTypes
      value: "{{ compositeComponentTypes }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_component_type"
    values={[
        { label: 'update_component_type', value: 'update_component_type' }
    ]}
>
<TabItem value="update_component_type">

Updates information in a component type.

```sql
UPDATE aws.iottwinmaker.component_types
SET 
isSingleton = {{ isSingleton }},
description = '{{ description }}',
propertyDefinitions = '{{ propertyDefinitions }}',
extendsFrom = '{{ extendsFrom }}',
functions = '{{ functions }}',
propertyGroups = '{{ propertyGroups }}',
componentTypeName = '{{ componentTypeName }}',
compositeComponentTypes = '{{ compositeComponentTypes }}'
WHERE 
workspace_id = '{{ workspace_id }}' --required
AND component_type_id = '{{ component_type_id }}' --required
AND region = '{{ region }}' --required
RETURNING
arn,
component_type_id,
state,
workspace_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_component_type"
    values={[
        { label: 'delete_component_type', value: 'delete_component_type' }
    ]}
>
<TabItem value="delete_component_type">

Deletes a component type.

```sql
DELETE FROM aws.iottwinmaker.component_types
WHERE workspace_id = '{{ workspace_id }}' --required
AND component_type_id = '{{ component_type_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
