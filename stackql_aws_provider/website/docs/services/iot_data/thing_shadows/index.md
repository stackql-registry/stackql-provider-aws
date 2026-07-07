--- 
title: thing_shadows
hide_title: false
hide_table_of_contents: false
keywords:
  - thing_shadows
  - iot_data
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

Creates, updates, deletes, gets or lists a <code>thing_shadows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="thing_shadows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_data.thing_shadows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_thing_shadow"
    values={[
        { label: 'get_thing_shadow', value: 'get_thing_shadow' }
    ]}
>
<TabItem value="get_thing_shadow">

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
    <td><CopyableCode code="payload" /></td>
    <td><code>string (byte)</code></td>
    <td>The state information, in JSON format.</td>
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
    <td><a href="#get_thing_shadow"><CopyableCode code="get_thing_shadow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Gets the shadow for the specified thing. Requires permission to access the GetThingShadow action. For more information, see GetThingShadow in the IoT Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_thing_shadow"><CopyableCode code="update_thing_shadow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-payload"><code>payload</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Updates the shadow for the specified thing. Requires permission to access the UpdateThingShadow action. For more information, see UpdateThingShadow in the IoT Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_thing_shadow"><CopyableCode code="delete_thing_shadow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Deletes the shadow for the specified thing. Requires permission to access the DeleteThingShadow action. For more information, see DeleteThingShadow in the IoT Developer Guide.</td>
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
<tr id="parameter-thing_name">
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the thing.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the shadow.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_thing_shadow"
    values={[
        { label: 'get_thing_shadow', value: 'get_thing_shadow' }
    ]}
>
<TabItem value="get_thing_shadow">

Gets the shadow for the specified thing. Requires permission to access the GetThingShadow action. For more information, see GetThingShadow in the IoT Developer Guide.

```sql
SELECT
payload
FROM aws.iot_data.thing_shadows
WHERE thing_name = '{{ thing_name }}' -- required
AND region = '{{ region }}' -- required
AND name = '{{ name }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_thing_shadow"
    values={[
        { label: 'update_thing_shadow', value: 'update_thing_shadow' }
    ]}
>
<TabItem value="update_thing_shadow">

Updates the shadow for the specified thing. Requires permission to access the UpdateThingShadow action. For more information, see UpdateThingShadow in the IoT Developer Guide.

```sql
UPDATE aws.iot_data.thing_shadows
SET 
payload = '{{ payload }}'
WHERE 
thing_name = '{{ thing_name }}' --required
AND region = '{{ region }}' --required
AND payload = '{{ payload }}' --required
AND name = '{{ name}}'
RETURNING
payload;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_thing_shadow"
    values={[
        { label: 'delete_thing_shadow', value: 'delete_thing_shadow' }
    ]}
>
<TabItem value="delete_thing_shadow">

Deletes the shadow for the specified thing. Requires permission to access the DeleteThingShadow action. For more information, see DeleteThingShadow in the IoT Developer Guide.

```sql
DELETE FROM aws.iot_data.thing_shadows
WHERE thing_name = '{{ thing_name }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}'
;
```
</TabItem>
</Tabs>
