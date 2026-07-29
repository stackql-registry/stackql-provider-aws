--- 
title: availability_zones
hide_title: false
hide_table_of_contents: false
keywords:
  - availability_zones
  - network_firewall
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.availability_zones" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#associate_availability_zones"><CopyableCode code="associate_availability_zones" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AvailabilityZoneMappings"><code>AvailabilityZoneMappings</code></a></td>
    <td></td>
    <td>Associates the specified Availability Zones with a transit gateway-attached firewall. For each Availability Zone, Network Firewall creates a firewall endpoint to process traffic. You can specify one or more Availability Zones where you want to deploy the firewall. After adding Availability Zones, you must update your transit gateway route tables to direct traffic through the new firewall endpoints. Use DescribeFirewall to monitor the status of the new endpoints.</td>
</tr>
<tr>
    <td><a href="#disassociate_availability_zones"><CopyableCode code="disassociate_availability_zones" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AvailabilityZoneMappings"><code>AvailabilityZoneMappings</code></a></td>
    <td></td>
    <td>Removes the specified Availability Zone associations from a transit gateway-attached firewall. This removes the firewall endpoints from these Availability Zones and stops traffic filtering in those zones. Before removing an Availability Zone, ensure you've updated your transit gateway route tables to redirect traffic appropriately. If AvailabilityZoneChangeProtection is enabled, you must first disable it using UpdateAvailabilityZoneChangeProtection. To verify the status of your Availability Zone changes, use DescribeFirewall.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="associate_availability_zones"
    values={[
        { label: 'associate_availability_zones', value: 'associate_availability_zones' }
    ]}
>
<TabItem value="associate_availability_zones">

Associates the specified Availability Zones with a transit gateway-attached firewall. For each Availability Zone, Network Firewall creates a firewall endpoint to process traffic. You can specify one or more Availability Zones where you want to deploy the firewall. After adding Availability Zones, you must update your transit gateway route tables to direct traffic through the new firewall endpoints. Use DescribeFirewall to monitor the status of the new endpoints.

```sql
UPDATE aws.network_firewall.availability_zones
SET 
UpdateToken = '{{ UpdateToken }}',
FirewallArn = '{{ FirewallArn }}',
FirewallName = '{{ FirewallName }}',
AvailabilityZoneMappings = '{{ AvailabilityZoneMappings }}'
WHERE 
region = '{{ region }}' --required
AND AvailabilityZoneMappings = '{{ AvailabilityZoneMappings }}' --required
RETURNING
availability_zone_mappings,
firewall_arn,
firewall_name,
update_token;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_availability_zones"
    values={[
        { label: 'disassociate_availability_zones', value: 'disassociate_availability_zones' }
    ]}
>
<TabItem value="disassociate_availability_zones">

Removes the specified Availability Zone associations from a transit gateway-attached firewall. This removes the firewall endpoints from these Availability Zones and stops traffic filtering in those zones. Before removing an Availability Zone, ensure you've updated your transit gateway route tables to redirect traffic appropriately. If AvailabilityZoneChangeProtection is enabled, you must first disable it using UpdateAvailabilityZoneChangeProtection. To verify the status of your Availability Zone changes, use DescribeFirewall.

```sql
EXEC aws.network_firewall.availability_zones.disassociate_availability_zones 
@region='{{ region }}' --required 
@@json=
'{
"UpdateToken": "{{ UpdateToken }}", 
"FirewallArn": "{{ FirewallArn }}", 
"FirewallName": "{{ FirewallName }}", 
"AvailabilityZoneMappings": "{{ AvailabilityZoneMappings }}"
}'
;
```
</TabItem>
</Tabs>
