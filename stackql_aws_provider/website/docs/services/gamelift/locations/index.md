--- 
title: locations
hide_title: false
hide_table_of_contents: false
keywords:
  - locations
  - gamelift
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

Creates, updates, deletes, gets or lists a <code>locations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="locations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.locations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_locations"
    values={[
        { label: 'list_locations', value: 'list_locations' }
    ]}
>
<TabItem value="list_locations">

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
    <td><CopyableCode code="location_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a custom location resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::location/location-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912. (pattern: &lt;code&gt;^arn:.*:location\/custom-\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="location_name" /></td>
    <td><code>string</code></td>
    <td>The location's name. (pattern: &lt;code&gt;^&#91;A-Za-z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ping_beacon" /></td>
    <td><code>object</code></td>
    <td>Information about the UDP ping beacon for this location. Ping beacons are fixed endpoints that you can use to measure network latency between a player device and an Amazon GameLift Servers hosting location.</td>
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
    <td><a href="#list_locations"><CopyableCode code="list_locations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Lists all custom and Amazon Web Services locations where Amazon GameLift Servers can host game servers. This operation also returns UDP ping beacon information for locations, which you can use to measure network latency between player devices and potential hosting locations. Learn more Service locations</td>
</tr>
<tr>
    <td><a href="#create_fleet_locations"><CopyableCode code="create_fleet_locations" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FleetId"><code>FleetId</code></a>, <a href="#parameter-Locations"><code>Locations</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Adds remote locations to an EC2 and begins populating the new locations with instances. The new instances conform to the fleet's instance type, auto-scaling, and other configuration settings. You can't add remote locations to a fleet that resides in an Amazon Web Services Region that doesn't support multiple locations. Fleets created prior to March 2021 can't support multiple locations. To add fleet locations, specify the fleet to be updated and provide a list of one or more locations. If successful, this operation returns the list of added locations with their status set to NEW. Amazon GameLift Servers initiates the process of starting an instance in each added location. You can track the status of each new location by monitoring location creation events using DescribeFleetEvents. Learn more Setting up fleets Update fleet locations Amazon GameLift Servers service locations for managed hosting.</td>
</tr>
<tr>
    <td><a href="#create_location"><CopyableCode code="create_location" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LocationName"><code>LocationName</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: Anywhere Creates a custom location for use in an Anywhere fleet.</td>
</tr>
<tr>
    <td><a href="#delete_fleet_locations"><CopyableCode code="delete_fleet_locations" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Removes locations from a multi-location fleet. When deleting a location, all game server process and all instances that are still active in the location are shut down. To delete fleet locations, identify the fleet ID and provide a list of the locations to be deleted. If successful, GameLift sets the location status to DELETING, and begins to shut down existing server processes and terminate instances in each location being deleted. When completed, the location status changes to TERMINATED. Learn more Setting up Amazon GameLift Servers fleets</td>
</tr>
<tr>
    <td><a href="#delete_location"><CopyableCode code="delete_location" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: Anywhere Deletes a custom location. Before deleting a custom location, review any fleets currently using the custom location and deregister the location if it is in use. For more information, see DeregisterCompute.</td>
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
    defaultValue="list_locations"
    values={[
        { label: 'list_locations', value: 'list_locations' }
    ]}
>
<TabItem value="list_locations">

This API works with the following fleet types: EC2, Anywhere, Container Lists all custom and Amazon Web Services locations where Amazon GameLift Servers can host game servers. This operation also returns UDP ping beacon information for locations, which you can use to measure network latency between player devices and potential hosting locations. Learn more Service locations

```sql
SELECT
location_arn,
location_name,
ping_beacon
FROM aws.gamelift.locations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_fleet_locations"
    values={[
        { label: 'create_fleet_locations', value: 'create_fleet_locations' },
        { label: 'create_location', value: 'create_location' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_fleet_locations">

This API works with the following fleet types: EC2, Anywhere, Container Adds remote locations to an EC2 and begins populating the new locations with instances. The new instances conform to the fleet's instance type, auto-scaling, and other configuration settings. You can't add remote locations to a fleet that resides in an Amazon Web Services Region that doesn't support multiple locations. Fleets created prior to March 2021 can't support multiple locations. To add fleet locations, specify the fleet to be updated and provide a list of one or more locations. If successful, this operation returns the list of added locations with their status set to NEW. Amazon GameLift Servers initiates the process of starting an instance in each added location. You can track the status of each new location by monitoring location creation events using DescribeFleetEvents. Learn more Setting up fleets Update fleet locations Amazon GameLift Servers service locations for managed hosting.

```sql
INSERT INTO aws.gamelift.locations (
FleetId,
Locations,
region
)
SELECT 
'{{ FleetId }}' /* required */,
'{{ Locations }}' /* required */,
'{{ region }}'
RETURNING
fleet_arn,
fleet_id,
location_states
;
```
</TabItem>
<TabItem value="create_location">

This API works with the following fleet types: Anywhere Creates a custom location for use in an Anywhere fleet.

```sql
INSERT INTO aws.gamelift.locations (
LocationName,
Tags,
region
)
SELECT 
'{{ LocationName }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
location
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: locations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the locations resource.
    - name: FleetId
      value: "{{ FleetId }}"
      description: |
        A unique identifier for the fleet to add locations to. You can use either the fleet ID or ARN value.
    - name: Locations
      description: |
        A list of locations to deploy additional instances to and manage as part of the fleet. You can add any Amazon GameLift Servers-supported Amazon Web Services Region as a remote location, in the form of an Amazon Web Services Region code such as us-west-2.
      value:
        - Location: "{{ Location }}"
    - name: LocationName
      value: "{{ LocationName }}"
      description: |
        A descriptive name for the custom location.
    - name: Tags
      description: |
        A list of labels to assign to the new resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management, and cost allocation. For more information, see Tagging Amazon Web Services Resources in the Amazon Web Services General Rareference.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_fleet_locations"
    values={[
        { label: 'delete_fleet_locations', value: 'delete_fleet_locations' },
        { label: 'delete_location', value: 'delete_location' }
    ]}
>
<TabItem value="delete_fleet_locations">

This API works with the following fleet types: EC2, Anywhere, Container Removes locations from a multi-location fleet. When deleting a location, all game server process and all instances that are still active in the location are shut down. To delete fleet locations, identify the fleet ID and provide a list of the locations to be deleted. If successful, GameLift sets the location status to DELETING, and begins to shut down existing server processes and terminate instances in each location being deleted. When completed, the location status changes to TERMINATED. Learn more Setting up Amazon GameLift Servers fleets

```sql
DELETE FROM aws.gamelift.locations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_location">

This API works with the following fleet types: Anywhere Deletes a custom location. Before deleting a custom location, review any fleets currently using the custom location and deregister the location if it is in use. For more information, see DeregisterCompute.

```sql
DELETE FROM aws.gamelift.locations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
