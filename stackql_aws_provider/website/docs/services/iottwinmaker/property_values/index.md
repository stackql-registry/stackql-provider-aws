--- 
title: property_values
hide_title: false
hide_table_of_contents: false
keywords:
  - property_values
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

Creates, updates, deletes, gets or lists a <code>property_values</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="property_values" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iottwinmaker.property_values" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_property_value"
    values={[
        { label: 'get_property_value', value: 'get_property_value' }
    ]}
>
<TabItem value="get_property_value">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The string that specifies the next page of results. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="propertyValues" /></td>
    <td><code>object</code></td>
    <td>An object that maps strings to the properties and latest property values in the response. Each string in the mapping must be unique to this object.</td>
</tr>
<tr>
    <td><CopyableCode code="tabularPropertyValues" /></td>
    <td><code>array</code></td>
    <td>A table of property values.</td>
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
    <td><a href="#get_property_value"><CopyableCode code="get_property_value" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the property values for a component, component type, entity, or workspace. You must specify a value for either componentName, componentTypeId, entityId, or workspaceId.</td>
</tr>
<tr>
    <td><a href="#batch_put_property_values"><CopyableCode code="batch_put_property_values" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-entries"><code>entries</code></a></td>
    <td></td>
    <td>Sets values for multiple time series properties.</td>
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
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace that contains the properties to set.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_property_value"
    values={[
        { label: 'get_property_value', value: 'get_property_value' }
    ]}
>
<TabItem value="get_property_value">

Gets the property values for a component, component type, entity, or workspace. You must specify a value for either componentName, componentTypeId, entityId, or workspaceId.

```sql
SELECT
nextToken,
propertyValues,
tabularPropertyValues
FROM aws.iottwinmaker.property_values
WHERE workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_put_property_values"
    values={[
        { label: 'batch_put_property_values', value: 'batch_put_property_values' }
    ]}
>
<TabItem value="batch_put_property_values">

Sets values for multiple time series properties.

```sql
EXEC aws.iottwinmaker.property_values.batch_put_property_values 
@workspace_id='{{ workspace_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"entries": "{{ entries }}"
}'
;
```
</TabItem>
</Tabs>
