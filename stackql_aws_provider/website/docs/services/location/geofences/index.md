--- 
title: geofences
hide_title: false
hide_table_of_contents: false
keywords:
  - geofences
  - location
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

Creates, updates, deletes, gets or lists a <code>geofences</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="geofences" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.geofences" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_geofence"
    values={[
        { label: 'get_geofence', value: 'get_geofence' },
        { label: 'list_geofences', value: 'list_geofences' }
    ]}
>
<TabItem value="get_geofence">

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
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the geofence collection was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ</td>
</tr>
<tr>
    <td><CopyableCode code="GeofenceId" /></td>
    <td><code>string</code></td>
    <td>The geofence identifier. (pattern: &lt;code&gt;&#91;-._\p&#123;L&#125;\p&#123;N&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GeofenceProperties" /></td>
    <td><code>object</code></td>
    <td>User defined properties of the geofence. A property is a key-value pair stored with the geofence and added to any geofence event triggered with that geofence. Format: "key" : "value"</td>
</tr>
<tr>
    <td><CopyableCode code="Geometry" /></td>
    <td><code>object</code></td>
    <td>Contains the geofence geometry details describing the position of the geofence. Can be a circle, a polygon, or a multipolygon.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Identifies the state of the geofence. A geofence will hold one of the following states: ACTIVE — The geofence has been indexed by the system. PENDING — The geofence is being processed by the system. FAILED — The geofence failed to be indexed by the system. DELETED — The geofence has been deleted from the system index. DELETING — The geofence is being deleted from the system index.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the geofence collection was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_geofences">

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
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the geofence was stored in a geofence collection in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ</td>
</tr>
<tr>
    <td><CopyableCode code="GeofenceId" /></td>
    <td><code>string</code></td>
    <td>The geofence identifier. (pattern: &lt;code&gt;&#91;-._\p&#123;L&#125;\p&#123;N&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GeofenceProperties" /></td>
    <td><code>object</code></td>
    <td>User defined properties of the geofence. A property is a key-value pair stored with the geofence and added to any geofence event triggered with that geofence. Format: "key" : "value"</td>
</tr>
<tr>
    <td><CopyableCode code="Geometry" /></td>
    <td><code>object</code></td>
    <td>Contains the geofence geometry details. A geofence geometry can be a circle, a polygon, or a multipolygon. Polygon and MultiPolygon geometries can be defined using their respective parameters, or encoded in Geobuf format using the Geobuf parameter. Including multiple geometry types in the same request will return a validation error. Amazon Location doesn't currently support polygons that cross the antimeridian.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Identifies the state of the geofence. A geofence will hold one of the following states: ACTIVE — The geofence has been indexed by the system. PENDING — The geofence is being processed by the system. FAILED — The geofence failed to be indexed by the system. DELETED — The geofence has been deleted from the system index. DELETING — The geofence is being deleted from the system index.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the geofence was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ</td>
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
    <td><a href="#get_geofence"><CopyableCode code="get_geofence" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collection_name"><code>collection_name</code></a>, <a href="#parameter-geofence_id"><code>geofence_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the geofence details from a geofence collection. The returned geometry will always match the geometry format used when the geofence was created.</td>
</tr>
<tr>
    <td><a href="#list_geofences"><CopyableCode code="list_geofences" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-collection_name"><code>collection_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists geofences stored in a given geofence collection.</td>
</tr>
<tr>
    <td><a href="#put_geofence"><CopyableCode code="put_geofence" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-collection_name"><code>collection_name</code></a>, <a href="#parameter-geofence_id"><code>geofence_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.</td>
</tr>
<tr>
    <td><a href="#batch_delete_geofence"><CopyableCode code="batch_delete_geofence" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-collection_name"><code>collection_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GeofenceIds"><code>GeofenceIds</code></a></td>
    <td></td>
    <td>Deletes a batch of geofences from a geofence collection. This operation deletes the resource permanently.</td>
</tr>
<tr>
    <td><a href="#batch_evaluate_geofences"><CopyableCode code="batch_evaluate_geofences" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-collection_name"><code>collection_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DevicePositionUpdates"><code>DevicePositionUpdates</code></a></td>
    <td></td>
    <td>Evaluates device positions against the geofence geometries from a given geofence collection. This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge: ENTER if Amazon Location determines that the tracked device has entered a geofenced area. EXIT if Amazon Location determines that the tracked device has exited a geofenced area. The last geofence that a device was observed within is tracked for 30 days after the most recent device position update. Geofence evaluation uses the given device position. It does not account for the optional Accuracy of a DevicePositionUpdate. The DeviceID is used as a string to represent the device. You do not need to have a Tracker associated with the DeviceID.</td>
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
<tr id="parameter-collection_name">
    <td><CopyableCode code="collection_name" /></td>
    <td><code>string</code></td>
    <td>The geofence collection used in evaluating the position of devices against its geofences.</td>
</tr>
<tr id="parameter-geofence_id">
    <td><CopyableCode code="geofence_id" /></td>
    <td><code>string</code></td>
    <td>An identifier for the geofence. For example, ExampleGeofence-1.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_geofence"
    values={[
        { label: 'get_geofence', value: 'get_geofence' },
        { label: 'list_geofences', value: 'list_geofences' }
    ]}
>
<TabItem value="get_geofence">

Retrieves the geofence details from a geofence collection. The returned geometry will always match the geometry format used when the geofence was created.

```sql
SELECT
CreateTime,
GeofenceId,
GeofenceProperties,
Geometry,
Status,
UpdateTime
FROM aws.location.geofences
WHERE collection_name = '{{ collection_name }}' -- required
AND geofence_id = '{{ geofence_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_geofences">

Lists geofences stored in a given geofence collection.

```sql
SELECT
CreateTime,
GeofenceId,
GeofenceProperties,
Geometry,
Status,
UpdateTime
FROM aws.location.geofences
WHERE collection_name = '{{ collection_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_geofence"
    values={[
        { label: 'put_geofence', value: 'put_geofence' }
    ]}
>
<TabItem value="put_geofence">

Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.

```sql
REPLACE aws.location.geofences
SET 
Geometry = '{{ Geometry }}',
GeofenceProperties = '{{ GeofenceProperties }}'
WHERE 
collection_name = '{{ collection_name }}' --required
AND geofence_id = '{{ geofence_id }}' --required
AND region = '{{ region }}' --required
RETURNING
CreateTime,
GeofenceId,
UpdateTime;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_geofence"
    values={[
        { label: 'batch_delete_geofence', value: 'batch_delete_geofence' },
        { label: 'batch_evaluate_geofences', value: 'batch_evaluate_geofences' }
    ]}
>
<TabItem value="batch_delete_geofence">

Deletes a batch of geofences from a geofence collection. This operation deletes the resource permanently.

```sql
EXEC aws.location.geofences.batch_delete_geofence 
@collection_name='{{ collection_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"GeofenceIds": "{{ GeofenceIds }}"
}'
;
```
</TabItem>
<TabItem value="batch_evaluate_geofences">

Evaluates device positions against the geofence geometries from a given geofence collection. This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge: ENTER if Amazon Location determines that the tracked device has entered a geofenced area. EXIT if Amazon Location determines that the tracked device has exited a geofenced area. The last geofence that a device was observed within is tracked for 30 days after the most recent device position update. Geofence evaluation uses the given device position. It does not account for the optional Accuracy of a DevicePositionUpdate. The DeviceID is used as a string to represent the device. You do not need to have a Tracker associated with the DeviceID.

```sql
EXEC aws.location.geofences.batch_evaluate_geofences 
@collection_name='{{ collection_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"DevicePositionUpdates": "{{ DevicePositionUpdates }}"
}'
;
```
</TabItem>
</Tabs>
