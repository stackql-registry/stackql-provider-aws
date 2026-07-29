--- 
title: trackers
hide_title: false
hide_table_of_contents: false
keywords:
  - trackers
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

Creates, updates, deletes, gets or lists a <code>trackers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trackers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.location.trackers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_tracker"
    values={[
        { label: 'describe_tracker', value: 'describe_tracker' },
        { label: 'list_trackers', value: 'list_trackers' }
    ]}
>
<TabItem value="describe_tracker">

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
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the tracker resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The optional description for the tracker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="event_bridge_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether UPDATE events from this tracker in EventBridge are enabled. If set to true these events will be sent to EventBridge.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_enable_geospatial_queries" /></td>
    <td><code>boolean</code></td>
    <td>Enables GeospatialQueries for a tracker that uses a Amazon Web Services KMS customer managed key. This parameter is only used if you are using a KMS customer managed key. If you wish to encrypt your data using your own KMS customer managed key, then the Bounding Polygon Queries feature will be disabled by default. This is because by using this feature, a representation of your device positions will not be encrypted using the your KMS managed key. The exact device position, however; is still encrypted using your managed key. You can choose to opt-in to the Bounding Polygon Quseries feature. This is done by setting the KmsKeyEnableGeospatialQueries parameter to true when creating or updating a Tracker.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>A key identifier for an Amazon Web Services KMS customer managed key assigned to the Amazon Location resource.</td>
</tr>
<tr>
    <td><CopyableCode code="position_filtering" /></td>
    <td><code>string</code></td>
    <td>The position filtering method of the tracker resource. (TimeBased, DistanceBased, AccuracyBased)</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_plan" /></td>
    <td><code>string</code></td>
    <td>Always returns RequestBasedUsage. (RequestBasedUsage, MobileAssetTracking, MobileAssetManagement)</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_plan_data_source" /></td>
    <td><code>string</code></td>
    <td>No longer used. Always returns an empty string.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the tracker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="tracker_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the tracker resource. Used when you need to specify a resource across all Amazon Web Services. Format example: arn:aws:geo:region:account-id:tracker/ExampleTracker (pattern: &lt;code&gt;arn(:&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*)&#123;2&#125;(:(&#91;a-z0-9&#93;+(&#91;.-&#93;&#91;a-z0-9&#93;+)*)?)&#123;2&#125;:(&#91;^/&#93;.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tracker_name" /></td>
    <td><code>string</code></td>
    <td>The name of the tracker resource. (pattern: &lt;code&gt;&#91;-._\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the tracker resource was last updated in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_trackers">

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
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the tracker resource was created in ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the tracker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_plan" /></td>
    <td><code>string</code></td>
    <td>Always returns RequestBasedUsage. (RequestBasedUsage, MobileAssetTracking, MobileAssetManagement)</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_plan_data_source" /></td>
    <td><code>string</code></td>
    <td>No longer used. Always returns an empty string.</td>
</tr>
<tr>
    <td><CopyableCode code="tracker_name" /></td>
    <td><code>string</code></td>
    <td>The name of the tracker resource. (pattern: &lt;code&gt;&#91;-._\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the device's position was determined. Uses ISO 8601 format: YYYY-MM-DDThh:mm:ss.sssZ.</td>
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
    <td><a href="#describe_tracker"><CopyableCode code="describe_tracker" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tracker_name"><code>tracker_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the tracker resource details.</td>
</tr>
<tr>
    <td><a href="#list_trackers"><CopyableCode code="list_trackers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists tracker resources in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_tracker"><CopyableCode code="create_tracker" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrackerName"><code>TrackerName</code></a></td>
    <td></td>
    <td>Creates a tracker resource in your Amazon Web Services account, which lets you retrieve current and historical location of devices.</td>
</tr>
<tr>
    <td><a href="#update_tracker"><CopyableCode code="update_tracker" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-tracker_name"><code>tracker_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified properties of a given tracker resource.</td>
</tr>
<tr>
    <td><a href="#delete_tracker"><CopyableCode code="delete_tracker" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-tracker_name"><code>tracker_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a tracker resource from your Amazon Web Services account. This operation deletes the resource permanently. If the tracker resource is in use, you may encounter an error. Make sure that the target resource isn't a dependency for your applications.</td>
</tr>
<tr>
    <td><a href="#batch_delete_device_position_history"><CopyableCode code="batch_delete_device_position_history" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-tracker_name"><code>tracker_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeviceIds"><code>DeviceIds</code></a></td>
    <td></td>
    <td>Deletes the position history of one or more devices from a tracker resource.</td>
</tr>
<tr>
    <td><a href="#batch_update_device_position"><CopyableCode code="batch_update_device_position" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-tracker_name"><code>tracker_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Updates"><code>Updates</code></a></td>
    <td></td>
    <td>Uploads position update data for one or more devices to a tracker resource (up to 10 devices per batch). Amazon Location uses the data when it reports the last known device position and position history. Amazon Location retains location data for 30 days. Position updates are handled based on the PositionFiltering property of the tracker. When PositionFiltering is set to TimeBased, updates are evaluated against linked geofence collections, and location data is stored at a maximum of one position per 30 second interval. If your update frequency is more often than every 30 seconds, only one update per 30 seconds is stored for each unique device ID. When PositionFiltering is set to DistanceBased filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than 30 m (98.4 ft). When PositionFiltering is set to AccuracyBased filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than the measured accuracy. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is neither stored or evaluated if the device has moved less than 15 m. If PositionFiltering is set to AccuracyBased filtering, Amazon Location uses the default value &#123; "Horizontal": 0&#125; when accuracy is not provided on a DevicePositionUpdate.</td>
</tr>
<tr>
    <td><a href="#verify_device_position"><CopyableCode code="verify_device_position" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-tracker_name"><code>tracker_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeviceState"><code>DeviceState</code></a></td>
    <td></td>
    <td>Verifies the integrity of the device's position by determining if it was reported behind a proxy, and by comparing it to an inferred position estimated based on the device's state. The Location Integrity SDK provides enhanced features related to device verification, and it is available for use by request. To get access to the SDK, contact Sales Support.</td>
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
<tr id="parameter-tracker_name">
    <td><CopyableCode code="tracker_name" /></td>
    <td><code>string</code></td>
    <td>The name of the tracker resource to be associated with verification request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_tracker"
    values={[
        { label: 'describe_tracker', value: 'describe_tracker' },
        { label: 'list_trackers', value: 'list_trackers' }
    ]}
>
<TabItem value="describe_tracker">

Retrieves the tracker resource details.

```sql
SELECT
create_time,
description,
event_bridge_enabled,
kms_key_enable_geospatial_queries,
kms_key_id,
position_filtering,
pricing_plan,
pricing_plan_data_source,
tags,
tracker_arn,
tracker_name,
update_time
FROM aws.location.trackers
WHERE tracker_name = '{{ tracker_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_trackers">

Lists tracker resources in your Amazon Web Services account.

```sql
SELECT
create_time,
description,
pricing_plan,
pricing_plan_data_source,
tracker_name,
update_time
FROM aws.location.trackers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tracker"
    values={[
        { label: 'create_tracker', value: 'create_tracker' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tracker">

Creates a tracker resource in your Amazon Web Services account, which lets you retrieve current and historical location of devices.

```sql
INSERT INTO aws.location.trackers (
TrackerName,
PricingPlan,
KmsKeyId,
PricingPlanDataSource,
Description,
Tags,
PositionFiltering,
EventBridgeEnabled,
KmsKeyEnableGeospatialQueries,
region
)
SELECT 
'{{ TrackerName }}' /* required */,
'{{ PricingPlan }}',
'{{ KmsKeyId }}',
'{{ PricingPlanDataSource }}',
'{{ Description }}',
'{{ Tags }}',
'{{ PositionFiltering }}',
{{ EventBridgeEnabled }},
{{ KmsKeyEnableGeospatialQueries }},
'{{ region }}'
RETURNING
create_time,
tracker_arn,
tracker_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: trackers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the trackers resource.
    - name: TrackerName
      value: "{{ TrackerName }}"
    - name: PricingPlan
      value: "{{ PricingPlan }}"
      valid_values: ['RequestBasedUsage', 'MobileAssetTracking', 'MobileAssetManagement']
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
    - name: PricingPlanDataSource
      value: "{{ PricingPlanDataSource }}"
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: PositionFiltering
      value: "{{ PositionFiltering }}"
      valid_values: ['TimeBased', 'DistanceBased', 'AccuracyBased']
    - name: EventBridgeEnabled
      value: {{ EventBridgeEnabled }}
    - name: KmsKeyEnableGeospatialQueries
      value: {{ KmsKeyEnableGeospatialQueries }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_tracker"
    values={[
        { label: 'update_tracker', value: 'update_tracker' }
    ]}
>
<TabItem value="update_tracker">

Updates the specified properties of a given tracker resource.

```sql
UPDATE aws.location.trackers
SET 
PricingPlan = '{{ PricingPlan }}',
PricingPlanDataSource = '{{ PricingPlanDataSource }}',
Description = '{{ Description }}',
PositionFiltering = '{{ PositionFiltering }}',
EventBridgeEnabled = {{ EventBridgeEnabled }},
KmsKeyEnableGeospatialQueries = {{ KmsKeyEnableGeospatialQueries }}
WHERE 
tracker_name = '{{ tracker_name }}' --required
AND region = '{{ region }}' --required
RETURNING
tracker_arn,
tracker_name,
update_time;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tracker"
    values={[
        { label: 'delete_tracker', value: 'delete_tracker' }
    ]}
>
<TabItem value="delete_tracker">

Deletes a tracker resource from your Amazon Web Services account. This operation deletes the resource permanently. If the tracker resource is in use, you may encounter an error. Make sure that the target resource isn't a dependency for your applications.

```sql
DELETE FROM aws.location.trackers
WHERE tracker_name = '{{ tracker_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_device_position_history"
    values={[
        { label: 'batch_delete_device_position_history', value: 'batch_delete_device_position_history' },
        { label: 'batch_update_device_position', value: 'batch_update_device_position' },
        { label: 'verify_device_position', value: 'verify_device_position' }
    ]}
>
<TabItem value="batch_delete_device_position_history">

Deletes the position history of one or more devices from a tracker resource.

```sql
EXEC aws.location.trackers.batch_delete_device_position_history 
@tracker_name='{{ tracker_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"DeviceIds": "{{ DeviceIds }}"
}'
;
```
</TabItem>
<TabItem value="batch_update_device_position">

Uploads position update data for one or more devices to a tracker resource (up to 10 devices per batch). Amazon Location uses the data when it reports the last known device position and position history. Amazon Location retains location data for 30 days. Position updates are handled based on the PositionFiltering property of the tracker. When PositionFiltering is set to TimeBased, updates are evaluated against linked geofence collections, and location data is stored at a maximum of one position per 30 second interval. If your update frequency is more often than every 30 seconds, only one update per 30 seconds is stored for each unique device ID. When PositionFiltering is set to DistanceBased filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than 30 m (98.4 ft). When PositionFiltering is set to AccuracyBased filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than the measured accuracy. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is neither stored or evaluated if the device has moved less than 15 m. If PositionFiltering is set to AccuracyBased filtering, Amazon Location uses the default value &#123; "Horizontal": 0&#125; when accuracy is not provided on a DevicePositionUpdate.

```sql
EXEC aws.location.trackers.batch_update_device_position 
@tracker_name='{{ tracker_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Updates": "{{ Updates }}"
}'
;
```
</TabItem>
<TabItem value="verify_device_position">

Verifies the integrity of the device's position by determining if it was reported behind a proxy, and by comparing it to an inferred position estimated based on the device's state. The Location Integrity SDK provides enhanced features related to device verification, and it is available for use by request. To get access to the SDK, contact Sales Support.

```sql
EXEC aws.location.trackers.verify_device_position 
@tracker_name='{{ tracker_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"DeviceState": "{{ DeviceState }}", 
"DistanceUnit": "{{ DistanceUnit }}"
}'
;
```
</TabItem>
</Tabs>
