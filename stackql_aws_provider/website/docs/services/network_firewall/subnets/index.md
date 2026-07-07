--- 
title: subnets
hide_title: false
hide_table_of_contents: false
keywords:
  - subnets
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

Creates, updates, deletes, gets or lists a <code>subnets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subnets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.subnets" /></td></tr>
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
    <td><a href="#associate_subnets"><CopyableCode code="associate_subnets" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SubnetMappings"><code>SubnetMappings</code></a></td>
    <td></td>
    <td>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one subnet for each of the Availability Zones that the VPC spans. This request creates an Network Firewall firewall endpoint in each of the subnets. To enable the firewall's protections, you must also modify the VPC's route tables for each subnet's Availability Zone, to redirect the traffic that's coming into and going out of the zone through the firewall endpoint.</td>
</tr>
<tr>
    <td><a href="#disassociate_subnets"><CopyableCode code="disassociate_subnets" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a></td>
    <td></td>
    <td>Removes the specified subnet associations from the firewall. This removes the firewall endpoints from the subnets and removes any network filtering protections that the endpoints were providing.</td>
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
    defaultValue="associate_subnets"
    values={[
        { label: 'associate_subnets', value: 'associate_subnets' },
        { label: 'disassociate_subnets', value: 'disassociate_subnets' }
    ]}
>
<TabItem value="associate_subnets">

Associates the specified subnets in the Amazon VPC to the firewall. You can specify one subnet for each of the Availability Zones that the VPC spans. This request creates an Network Firewall firewall endpoint in each of the subnets. To enable the firewall's protections, you must also modify the VPC's route tables for each subnet's Availability Zone, to redirect the traffic that's coming into and going out of the zone through the firewall endpoint.

```sql
UPDATE aws.network_firewall.subnets
SET 
UpdateToken = '{{ UpdateToken }}',
FirewallArn = '{{ FirewallArn }}',
FirewallName = '{{ FirewallName }}',
SubnetMappings = '{{ SubnetMappings }}'
WHERE 
region = '{{ region }}' --required
AND SubnetMappings = '{{ SubnetMappings }}' --required
RETURNING
FirewallArn,
FirewallName,
SubnetMappings,
UpdateToken;
```
</TabItem>
<TabItem value="disassociate_subnets">

Removes the specified subnet associations from the firewall. This removes the firewall endpoints from the subnets and removes any network filtering protections that the endpoints were providing.

```sql
UPDATE aws.network_firewall.subnets
SET 
UpdateToken = '{{ UpdateToken }}',
FirewallArn = '{{ FirewallArn }}',
FirewallName = '{{ FirewallName }}',
SubnetIds = '{{ SubnetIds }}'
WHERE 
region = '{{ region }}' --required
AND SubnetIds = '{{ SubnetIds }}' --required
RETURNING
FirewallArn,
FirewallName,
SubnetMappings,
UpdateToken;
```
</TabItem>
</Tabs>
