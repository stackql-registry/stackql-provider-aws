--- 
title: availability_zones
hide_title: false
hide_table_of_contents: false
keywords:
  - availability_zones
  - ec2
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

Creates, updates, deletes, gets or lists an <code>availability_zones</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="availability_zones" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.availability_zones" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_availability_zones"
    values={[
        { label: 'describe_availability_zones', value: 'describe_availability_zones' }
    ]}
>
<TabItem value="describe_availability_zones">

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
    <td><CopyableCode code="Geography" /></td>
    <td><code>string</code></td>
    <td>The geography information for the Availability Zone or Local Zone. The geography is returned as a list.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupLongName" /></td>
    <td><code>string</code></td>
    <td>The long name of the Availability Zone group, Local Zone group, or Wavelength Zone group.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the zone group. For example: Availability Zones - us-east-1-zg-1 Local Zones - us-west-2-lax-1 Wavelength Zones - us-east-1-wl1-bos-wlz-1</td>
</tr>
<tr>
    <td><CopyableCode code="Messages" /></td>
    <td><code>string</code></td>
    <td>Any messages about the Availability Zone, Local Zone, or Wavelength Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkBorderGroup" /></td>
    <td><code>string</code></td>
    <td>The name of the network border group.</td>
</tr>
<tr>
    <td><CopyableCode code="OptInStatus" /></td>
    <td><code>string</code></td>
    <td>For Availability Zones, this parameter always has the value of opt-in-not-required. For Local Zones and Wavelength Zones, this parameter is the opt-in status. The possible values are opted-in and not-opted-in.</td>
</tr>
<tr>
    <td><CopyableCode code="ParentZoneId" /></td>
    <td><code>string</code></td>
    <td>The ID of the zone that handles some of the Local Zone or Wavelength Zone control plane operations, such as API calls.</td>
</tr>
<tr>
    <td><CopyableCode code="ParentZoneName" /></td>
    <td><code>string</code></td>
    <td>The name of the zone that handles some of the Local Zone or Wavelength Zone control plane operations, such as API calls.</td>
</tr>
<tr>
    <td><CopyableCode code="RegionName" /></td>
    <td><code>string</code></td>
    <td>The name of the Region.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the Availability Zone, Local Zone, or Wavelength Zone. The possible values are available, unavailable, and constrained.</td>
</tr>
<tr>
    <td><CopyableCode code="SubGeography" /></td>
    <td><code>string</code></td>
    <td>The sub-geography information for the Availability Zone or Local Zone. The sub-geography is returned as a list.</td>
</tr>
<tr>
    <td><CopyableCode code="ZoneId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone, Local Zone, or Wavelength Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="ZoneName" /></td>
    <td><code>string</code></td>
    <td>The name of the Availability Zone, Local Zone, or Wavelength Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="ZoneType" /></td>
    <td><code>string</code></td>
    <td>The type of zone. Valid values: availability-zone | local-zone | wavelength-zone</td>
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
    <td><a href="#describe_availability_zones"><CopyableCode code="describe_availability_zones" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ZoneName"><code>ZoneName</code></a>, <a href="#parameter-ZoneId"><code>ZoneId</code></a>, <a href="#parameter-AllAvailabilityZones"><code>AllAvailabilityZones</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes the Availability Zones, Local Zones, and Wavelength Zones that are available to you. For more information about Availability Zones, Local Zones, and Wavelength Zones, see Regions and zones in the Amazon EC2 User Guide. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.</td>
</tr>
<tr>
    <td><a href="#modify_availability_zone_group"><CopyableCode code="modify_availability_zone_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-OptInStatus"><code>OptInStatus</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Changes the opt-in status of the specified zone group for your account.</td>
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
<tr id="parameter-GroupName">
    <td><CopyableCode code="GroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the Availability Zone group, Local Zone group, or Wavelength Zone group.</td>
</tr>
<tr id="parameter-OptInStatus">
    <td><CopyableCode code="OptInStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates whether to opt in to the zone group. The only valid value is opted-in. You must contact Amazon Web Services Support to opt out of a Local Zone or Wavelength Zone group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AllAvailabilityZones">
    <td><CopyableCode code="AllAvailabilityZones" /></td>
    <td><code>boolean</code></td>
    <td>Include all Availability Zones, Local Zones, and Wavelength Zones regardless of your opt-in status. If you do not use this parameter, the results include only the zones for the Regions where you have chosen the option to opt in.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. group-long-name - The long name of the zone group for the Availability Zone (for example, US West (Oregon) 1), the Local Zone (for example, for Zone group us-west-2-lax-1, it is US West (Los Angeles), or the Wavelength Zone (for example, for Zone group us-east-1-wl1, it is US East (Verizon). group-name - The name of the zone group for the Availability Zone (for example, us-east-1-zg-1), the Local Zone (for example, us-west-2-lax-1), or the Wavelength Zone (for example, us-east-1-wl1). message - The Zone message. opt-in-status - The opt-in status (opted-in | not-opted-in | opt-in-not-required). parent-zone-id - The ID of the zone that handles some of the Local Zone and Wavelength Zone control plane operations, such as API calls. parent-zone-name - The ID of the zone that handles some of the Local Zone and Wavelength Zone control plane operations, such as API calls. region-name - The name of the Region for the Zone (for example, us-east-1). state - The state of the Availability Zone, the Local Zone, or the Wavelength Zone (available | unavailable | constrained). zone-id - The ID of the Availability Zone (for example, use1-az1), the Local Zone (for example, usw2-lax1-az1), or the Wavelength Zone (for example, us-east-1-wl1-bos-wlz-1). zone-name - The name of the Availability Zone (for example, us-east-1a), the Local Zone (for example, us-west-2-lax-1a), or the Wavelength Zone (for example, us-east-1-wl1-bos-wlz-1). zone-type - The type of zone (availability-zone | local-zone | wavelength-zone).</td>
</tr>
<tr id="parameter-ZoneId">
    <td><CopyableCode code="ZoneId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Availability Zones, Local Zones, and Wavelength Zones.</td>
</tr>
<tr id="parameter-ZoneName">
    <td><CopyableCode code="ZoneName" /></td>
    <td><code>array</code></td>
    <td>The names of the Availability Zones, Local Zones, and Wavelength Zones.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_availability_zones"
    values={[
        { label: 'describe_availability_zones', value: 'describe_availability_zones' }
    ]}
>
<TabItem value="describe_availability_zones">

Describes the Availability Zones, Local Zones, and Wavelength Zones that are available to you. For more information about Availability Zones, Local Zones, and Wavelength Zones, see Regions and zones in the Amazon EC2 User Guide. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.

```sql
SELECT
Geography,
GroupLongName,
GroupName,
Messages,
NetworkBorderGroup,
OptInStatus,
ParentZoneId,
ParentZoneName,
RegionName,
State,
SubGeography,
ZoneId,
ZoneName,
ZoneType
FROM aws.ec2.availability_zones
WHERE region = '{{ region }}' -- required
AND ZoneName = '{{ ZoneName }}'
AND ZoneId = '{{ ZoneId }}'
AND AllAvailabilityZones = '{{ AllAvailabilityZones }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_availability_zone_group"
    values={[
        { label: 'modify_availability_zone_group', value: 'modify_availability_zone_group' }
    ]}
>
<TabItem value="modify_availability_zone_group">

Changes the opt-in status of the specified zone group for your account.

```sql
UPDATE aws.ec2.availability_zones
SET 
-- No updatable properties
WHERE 
GroupName = '{{ GroupName }}' --required
AND OptInStatus = '{{ OptInStatus }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
Return;
```
</TabItem>
</Tabs>
