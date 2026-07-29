--- 
title: resource_positions
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_positions
  - iotwireless
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

Creates, updates, deletes, gets or lists a <code>resource_positions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_positions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.resource_positions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_position"
    values={[
        { label: 'get_resource_position', value: 'get_resource_position' }
    ]}
>
<TabItem value="get_resource_position">

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
    <td><CopyableCode code="geo_json_payload" /></td>
    <td><code>string (byte)</code></td>
    <td>The position information of the resource, displayed as a JSON payload. The payload uses the GeoJSON format, which a format that's used to encode geographic data structures. For more information, see GeoJSON.</td>
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
    <td><a href="#get_resource_position"><CopyableCode code="get_resource_position" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_identifier"><code>resource_identifier</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the position information for a given wireless device or a wireless gateway resource. The position information uses the World Geodetic System (WGS84).</td>
</tr>
<tr>
    <td><a href="#update_resource_position"><CopyableCode code="update_resource_position" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_identifier"><code>resource_identifier</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update the position information of a given wireless device or a wireless gateway resource. The position coordinates are based on the World Geodetic System (WGS84).</td>
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
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource for which position information is updated, which can be a wireless device or a wireless gateway.</td>
</tr>
<tr id="parameter-resource_identifier">
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource for which position information is updated. It can be the wireless device ID or the wireless gateway ID, depending on the resource type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_resource_position"
    values={[
        { label: 'get_resource_position', value: 'get_resource_position' }
    ]}
>
<TabItem value="get_resource_position">

Get the position information for a given wireless device or a wireless gateway resource. The position information uses the World Geodetic System (WGS84).

```sql
SELECT
geo_json_payload
FROM aws.iotwireless.resource_positions
WHERE resource_identifier = '{{ resource_identifier }}' -- required
AND resourceType = '{{ resourceType }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resource_position"
    values={[
        { label: 'update_resource_position', value: 'update_resource_position' }
    ]}
>
<TabItem value="update_resource_position">

Update the position information of a given wireless device or a wireless gateway resource. The position coordinates are based on the World Geodetic System (WGS84).

```sql
UPDATE aws.iotwireless.resource_positions
SET 
GeoJsonPayload = '{{ GeoJsonPayload }}'
WHERE 
resource_identifier = '{{ resource_identifier }}' --required
AND resourceType = '{{ resourceType }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
