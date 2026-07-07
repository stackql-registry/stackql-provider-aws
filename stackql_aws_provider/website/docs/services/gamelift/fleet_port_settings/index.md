--- 
title: fleet_port_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - fleet_port_settings
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

Creates, updates, deletes, gets or lists a <code>fleet_port_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fleet_port_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.fleet_port_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fleet_port_settings"
    values={[
        { label: 'describe_fleet_port_settings', value: 'describe_fleet_port_settings' }
    ]}
>
<TabItem value="describe_fleet_port_settings">

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
    <td><CopyableCode code="FleetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers fleet resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::fleet/fleet-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912. (pattern: &lt;code&gt;^arn:.*:&#91;a-z&#93;*fleet\/&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FleetId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the fleet that was requested. (pattern: &lt;code&gt;^&#91;a-z&#93;*fleet-&#91;a-zA-Z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InboundPermissions" /></td>
    <td><code>array</code></td>
    <td>The port settings for the requested fleet ID.</td>
</tr>
<tr>
    <td><CopyableCode code="Location" /></td>
    <td><code>string</code></td>
    <td>The requested fleet location, expressed as an Amazon Web Services Region code, such as us-west-2. (pattern: &lt;code&gt;^&#91;A-Za-z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of updates to the fleet's port settings in the requested fleet location. A status of PENDING_UPDATE indicates that an update was requested for the fleet but has not yet been completed for the location. (PENDING_UPDATE)</td>
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
    <td><a href="#describe_fleet_port_settings"><CopyableCode code="describe_fleet_port_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Container Retrieves a fleet's inbound connection permissions. Connection permissions specify IP addresses and port settings that incoming traffic can use to access server processes in the fleet. Game server processes that are running in the fleet must use a port that falls within this range. Use this operation in the following ways: To retrieve the port settings for a fleet, identify the fleet's unique identifier. To check the status of recent updates to a fleet remote location, specify the fleet ID and a location. Port setting updates can take time to propagate across all locations. If successful, a set of IpPermission objects is returned for the requested fleet ID. When specifying a location, this operation returns a pending status. If the requested fleet has been deleted, the result set is empty. Learn more Setting up Amazon GameLift Servers fleets</td>
</tr>
<tr>
    <td><a href="#update_fleet_port_settings"><CopyableCode code="update_fleet_port_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FleetId"><code>FleetId</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Container Updates permissions that allow inbound traffic to connect to game sessions in the fleet. To update settings, specify the fleet ID to be updated and specify the changes to be made. List the permissions you want to add in InboundPermissionAuthorizations, and permissions you want to remove in InboundPermissionRevocations. Permissions to be removed must match existing fleet permissions. If successful, the fleet ID for the updated fleet is returned. For fleets with remote locations, port setting updates can take time to propagate across all locations. You can check the status of updates in each location by calling DescribeFleetPortSettings with a location name. Learn more Setting up Amazon GameLift Servers fleets</td>
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
    defaultValue="describe_fleet_port_settings"
    values={[
        { label: 'describe_fleet_port_settings', value: 'describe_fleet_port_settings' }
    ]}
>
<TabItem value="describe_fleet_port_settings">

This API works with the following fleet types: EC2, Container Retrieves a fleet's inbound connection permissions. Connection permissions specify IP addresses and port settings that incoming traffic can use to access server processes in the fleet. Game server processes that are running in the fleet must use a port that falls within this range. Use this operation in the following ways: To retrieve the port settings for a fleet, identify the fleet's unique identifier. To check the status of recent updates to a fleet remote location, specify the fleet ID and a location. Port setting updates can take time to propagate across all locations. If successful, a set of IpPermission objects is returned for the requested fleet ID. When specifying a location, this operation returns a pending status. If the requested fleet has been deleted, the result set is empty. Learn more Setting up Amazon GameLift Servers fleets

```sql
SELECT
FleetArn,
FleetId,
InboundPermissions,
Location,
UpdateStatus
FROM aws.gamelift.fleet_port_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_fleet_port_settings"
    values={[
        { label: 'update_fleet_port_settings', value: 'update_fleet_port_settings' }
    ]}
>
<TabItem value="update_fleet_port_settings">

This API works with the following fleet types: EC2, Container Updates permissions that allow inbound traffic to connect to game sessions in the fleet. To update settings, specify the fleet ID to be updated and specify the changes to be made. List the permissions you want to add in InboundPermissionAuthorizations, and permissions you want to remove in InboundPermissionRevocations. Permissions to be removed must match existing fleet permissions. If successful, the fleet ID for the updated fleet is returned. For fleets with remote locations, port setting updates can take time to propagate across all locations. You can check the status of updates in each location by calling DescribeFleetPortSettings with a location name. Learn more Setting up Amazon GameLift Servers fleets

```sql
UPDATE aws.gamelift.fleet_port_settings
SET 
FleetId = '{{ FleetId }}',
InboundPermissionAuthorizations = '{{ InboundPermissionAuthorizations }}',
InboundPermissionRevocations = '{{ InboundPermissionRevocations }}'
WHERE 
region = '{{ region }}' --required
AND FleetId = '{{ FleetId }}' --required
RETURNING
FleetArn,
FleetId;
```
</TabItem>
</Tabs>
