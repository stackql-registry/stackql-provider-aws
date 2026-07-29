--- 
title: components
hide_title: false
hide_table_of_contents: false
keywords:
  - components
  - amplifyuibuilder
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

Creates, updates, deletes, gets or lists a <code>components</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="components" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplifyuibuilder.components" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_component"
    values={[
        { label: 'get_component', value: 'get_component' },
        { label: 'list_components', value: 'list_components' }
    ]}
>
<TabItem value="get_component">

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
    <td>The unique ID of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the Amplify app associated with the component.</td>
</tr>
<tr>
    <td><CopyableCode code="binding_properties" /></td>
    <td><code>object</code></td>
    <td>The information to connect a component's properties to data at runtime. You can't specify tags as a valid property for bindingProperties.</td>
</tr>
<tr>
    <td><CopyableCode code="children" /></td>
    <td><code>array</code></td>
    <td>A list of the component's ComponentChild instances.</td>
</tr>
<tr>
    <td><CopyableCode code="collection_properties" /></td>
    <td><code>object</code></td>
    <td>The data binding configuration for the component's properties. Use this for a collection component. You can't specify tags as a valid property for collectionProperties.</td>
</tr>
<tr>
    <td><CopyableCode code="component_type" /></td>
    <td><code>string</code></td>
    <td>The type of the component. This can be an Amplify custom UI component or another custom component.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the component was created.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment that is a part of the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>object</code></td>
    <td>Describes the events that can be raised on the component. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the component was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="overrides" /></td>
    <td><code>object</code></td>
    <td>Describes the component's properties that can be overriden in a customized instance of the component. You can't specify tags as a valid property for overrides.</td>
</tr>
<tr>
    <td><CopyableCode code="properties_" /></td>
    <td><code>object</code></td>
    <td>Describes the component's properties. You can't specify tags as a valid property for properties.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_version" /></td>
    <td><code>string</code></td>
    <td>The schema version of the component when it was imported.</td>
</tr>
<tr>
    <td><CopyableCode code="source_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the component in its original source system, such as Figma.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>One or more key-value pairs to use when tagging the component.</td>
</tr>
<tr>
    <td><CopyableCode code="variants" /></td>
    <td><code>array</code></td>
    <td>A list of the component's variants. A variant is a unique style configuration of a main component.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_components">

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
    <td>The unique ID of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the Amplify app associated with the component.</td>
</tr>
<tr>
    <td><CopyableCode code="component_type" /></td>
    <td><code>string</code></td>
    <td>The component type.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment that is a part of the Amplify app.</td>
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
    <td><a href="#get_component"><CopyableCode code="get_component" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an existing component for an Amplify app.</td>
</tr>
<tr>
    <td><a href="#list_components"><CopyableCode code="list_components" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of components for a specified Amplify app and backend environment.</td>
</tr>
<tr>
    <td><a href="#create_component"><CopyableCode code="create_component" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-componentToCreate"><code>componentToCreate</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Creates a new component for an Amplify app.</td>
</tr>
<tr>
    <td><a href="#update_component"><CopyableCode code="update_component" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-updatedComponent"><code>updatedComponent</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Updates an existing component.</td>
</tr>
<tr>
    <td><a href="#delete_component"><CopyableCode code="delete_component" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a component from an Amplify app.</td>
</tr>
<tr>
    <td><a href="#export_components"><CopyableCode code="export_components" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Exports component configurations to code that is ready to integrate into an Amplify app.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the Amplify app to export components to.</td>
</tr>
<tr id="parameter-environment_name">
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment that is a part of the Amplify app.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the component to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>The unique client token.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of components to retrieve.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to request the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_component"
    values={[
        { label: 'get_component', value: 'get_component' },
        { label: 'list_components', value: 'list_components' }
    ]}
>
<TabItem value="get_component">

Returns an existing component for an Amplify app.

```sql
SELECT
id,
name,
app_id,
binding_properties,
children,
collection_properties,
component_type,
created_at,
environment_name,
events,
modified_at,
overrides,
properties_,
schema_version,
source_id,
tags,
variants
FROM aws.amplifyuibuilder.components
WHERE app_id = '{{ app_id }}' -- required
AND environment_name = '{{ environment_name }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_components">

Retrieves a list of components for a specified Amplify app and backend environment.

```sql
SELECT
id,
name,
app_id,
component_type,
environment_name
FROM aws.amplifyuibuilder.components
WHERE app_id = '{{ app_id }}' -- required
AND environment_name = '{{ environment_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_component"
    values={[
        { label: 'create_component', value: 'create_component' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_component">

Creates a new component for an Amplify app.

```sql
INSERT INTO aws.amplifyuibuilder.components (
componentToCreate,
app_id,
environment_name,
region,
clientToken
)
SELECT 
'{{ componentToCreate }}' /* required */,
'{{ app_id }}',
'{{ environment_name }}',
'{{ region }}',
'{{ clientToken }}'
RETURNING
entity
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: components
  props:
    - name: app_id
      value: "{{ app_id }}"
      description: Required parameter for the components resource.
    - name: environment_name
      value: "{{ environment_name }}"
      description: Required parameter for the components resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the components resource.
    - name: componentToCreate
      description: |
        Represents all of the information that is required to create a component.
      value:
        name: "{{ name }}"
        sourceId: "{{ sourceId }}"
        componentType: "{{ componentType }}"
        properties_: "{{ properties_ }}"
        children:
          - componentType: "{{ componentType }}"
            name: "{{ name }}"
            properties_: "{{ properties_ }}"
            children: "{{ children }}"
            events: "{{ events }}"
            sourceId: "{{ sourceId }}"
        variants:
          - variantValues: "{{ variantValues }}"
            overrides: "{{ overrides }}"
        overrides: "{{ overrides }}"
        bindingProperties: "{{ bindingProperties }}"
        collectionProperties: "{{ collectionProperties }}"
        tags: "{{ tags }}"
        events: "{{ events }}"
        schemaVersion: "{{ schemaVersion }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: The unique client token.
      description: The unique client token.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_component"
    values={[
        { label: 'update_component', value: 'update_component' }
    ]}
>
<TabItem value="update_component">

Updates an existing component.

```sql
UPDATE aws.amplifyuibuilder.components
SET 
updatedComponent = '{{ updatedComponent }}'
WHERE 
app_id = '{{ app_id }}' --required
AND environment_name = '{{ environment_name }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND updatedComponent = '{{ updatedComponent }}' --required
AND clientToken = '{{ clientToken}}'
RETURNING
entity;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_component"
    values={[
        { label: 'delete_component', value: 'delete_component' }
    ]}
>
<TabItem value="delete_component">

Deletes a component from an Amplify app.

```sql
DELETE FROM aws.amplifyuibuilder.components
WHERE app_id = '{{ app_id }}' --required
AND environment_name = '{{ environment_name }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_components"
    values={[
        { label: 'export_components', value: 'export_components' }
    ]}
>
<TabItem value="export_components">

Exports component configurations to code that is ready to integrate into an Amplify app.

```sql
EXEC aws.amplifyuibuilder.components.export_components 
@app_id='{{ app_id }}' --required, 
@environment_name='{{ environment_name }}' --required, 
@region='{{ region }}' --required, 
@nextToken='{{ nextToken }}'
;
```
</TabItem>
</Tabs>
