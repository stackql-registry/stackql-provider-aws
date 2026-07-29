--- 
title: availability_zone_change_protections
hide_title: false
hide_table_of_contents: false
keywords:
  - availability_zone_change_protections
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

Creates, updates, deletes, gets or lists an <code>availability_zone_change_protections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="availability_zone_change_protections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.availability_zone_change_protections" /></td></tr>
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
    <td><a href="#update_availability_zone_change_protection"><CopyableCode code="update_availability_zone_change_protection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AvailabilityZoneChangeProtection"><code>AvailabilityZoneChangeProtection</code></a></td>
    <td></td>
    <td>Modifies the AvailabilityZoneChangeProtection setting for a transit gateway-attached firewall. When enabled, this setting prevents accidental changes to the firewall's Availability Zone configuration. This helps protect against disrupting traffic flow in production environments. When enabled, you must disable this protection before using AssociateAvailabilityZones or DisassociateAvailabilityZones to modify the firewall's Availability Zone configuration.</td>
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
    defaultValue="update_availability_zone_change_protection"
    values={[
        { label: 'update_availability_zone_change_protection', value: 'update_availability_zone_change_protection' }
    ]}
>
<TabItem value="update_availability_zone_change_protection">

Modifies the AvailabilityZoneChangeProtection setting for a transit gateway-attached firewall. When enabled, this setting prevents accidental changes to the firewall's Availability Zone configuration. This helps protect against disrupting traffic flow in production environments. When enabled, you must disable this protection before using AssociateAvailabilityZones or DisassociateAvailabilityZones to modify the firewall's Availability Zone configuration.

```sql
UPDATE aws.network_firewall.availability_zone_change_protections
SET 
UpdateToken = '{{ UpdateToken }}',
FirewallArn = '{{ FirewallArn }}',
FirewallName = '{{ FirewallName }}',
AvailabilityZoneChangeProtection = {{ AvailabilityZoneChangeProtection }}
WHERE 
region = '{{ region }}' --required
AND AvailabilityZoneChangeProtection = {{ AvailabilityZoneChangeProtection }} --required
RETURNING
availability_zone_change_protection,
firewall_arn,
firewall_name,
update_token;
```
</TabItem>
</Tabs>
