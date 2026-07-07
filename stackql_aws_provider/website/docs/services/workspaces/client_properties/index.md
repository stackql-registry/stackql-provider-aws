--- 
title: client_properties
hide_title: false
hide_table_of_contents: false
keywords:
  - client_properties
  - workspaces
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

Creates, updates, deletes, gets or lists a <code>client_properties</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="client_properties" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.client_properties" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_client_properties"
    values={[
        { label: 'describe_client_properties', value: 'describe_client_properties' }
    ]}
>
<TabItem value="describe_client_properties">

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
    <td><CopyableCode code="ClientPropertiesList" /></td>
    <td><code>array</code></td>
    <td>Information about the specified Amazon WorkSpaces clients.</td>
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
    <td><a href="#describe_client_properties"><CopyableCode code="describe_client_properties" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes one or more specified Amazon WorkSpaces clients.</td>
</tr>
<tr>
    <td><a href="#modify_client_properties"><CopyableCode code="modify_client_properties" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceId"><code>ResourceId</code></a>, <a href="#parameter-ClientProperties"><code>ClientProperties</code></a></td>
    <td></td>
    <td>Modifies the properties of the specified Amazon WorkSpaces clients.</td>
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
    defaultValue="describe_client_properties"
    values={[
        { label: 'describe_client_properties', value: 'describe_client_properties' }
    ]}
>
<TabItem value="describe_client_properties">

Retrieves a list that describes one or more specified Amazon WorkSpaces clients.

```sql
SELECT
ClientPropertiesList
FROM aws.workspaces.client_properties
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_client_properties"
    values={[
        { label: 'modify_client_properties', value: 'modify_client_properties' }
    ]}
>
<TabItem value="modify_client_properties">

Modifies the properties of the specified Amazon WorkSpaces clients.

```sql
UPDATE aws.workspaces.client_properties
SET 
ResourceId = '{{ ResourceId }}',
ClientProperties = '{{ ClientProperties }}'
WHERE 
region = '{{ region }}' --required
AND ResourceId = '{{ ResourceId }}' --required
AND ClientProperties = '{{ ClientProperties }}' --required;
```
</TabItem>
</Tabs>
