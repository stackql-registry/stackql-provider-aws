--- 
title: trunk_interfaces
hide_title: false
hide_table_of_contents: false
keywords:
  - trunk_interfaces
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

Creates, updates, deletes, gets or lists a <code>trunk_interfaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trunk_interfaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.trunk_interfaces" /></td></tr>
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
    <td><a href="#associate_trunk_interface"><CopyableCode code="associate_trunk_interface" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-BranchInterfaceId"><code>BranchInterfaceId</code></a>, <a href="#parameter-TrunkInterfaceId"><code>TrunkInterfaceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-VlanId"><code>VlanId</code></a>, <a href="#parameter-GreKey"><code>GreKey</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Associates a branch network interface with a trunk network interface. Before you create the association, use CreateNetworkInterface command and set the interface type to trunk. You must also create a network interface for each branch network interface that you want to associate with the trunk network interface.</td>
</tr>
<tr>
    <td><a href="#disassociate_trunk_interface"><CopyableCode code="disassociate_trunk_interface" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-AssociationId"><code>AssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Removes an association between a branch network interface with a trunk network interface.</td>
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
<tr id="parameter-AssociationId">
    <td><CopyableCode code="AssociationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the association</td>
</tr>
<tr id="parameter-BranchInterfaceId">
    <td><CopyableCode code="BranchInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the branch network interface.</td>
</tr>
<tr id="parameter-TrunkInterfaceId">
    <td><CopyableCode code="TrunkInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the trunk network interface.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-GreKey">
    <td><CopyableCode code="GreKey" /></td>
    <td><code>integer</code></td>
    <td>The application key. This applies to the GRE protocol.</td>
</tr>
<tr id="parameter-VlanId">
    <td><CopyableCode code="VlanId" /></td>
    <td><code>integer</code></td>
    <td>The ID of the VLAN. This applies to the VLAN protocol.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="associate_trunk_interface"
    values={[
        { label: 'associate_trunk_interface', value: 'associate_trunk_interface' },
        { label: 'disassociate_trunk_interface', value: 'disassociate_trunk_interface' }
    ]}
>
<TabItem value="associate_trunk_interface">

Associates a branch network interface with a trunk network interface. Before you create the association, use CreateNetworkInterface command and set the interface type to trunk. You must also create a network interface for each branch network interface that you want to associate with the trunk network interface.

```sql
UPDATE aws.ec2.trunk_interfaces
SET 
-- No updatable properties
WHERE 
BranchInterfaceId = '{{ BranchInterfaceId }}' --required
AND TrunkInterfaceId = '{{ TrunkInterfaceId }}' --required
AND region = '{{ region }}' --required
AND VlanId = '{{ VlanId}}'
AND GreKey = '{{ GreKey}}'
AND ClientToken = '{{ ClientToken}}'
AND DryRun = {{ DryRun}}
RETURNING
ClientToken,
InterfaceAssociation;
```
</TabItem>
<TabItem value="disassociate_trunk_interface">

Removes an association between a branch network interface with a trunk network interface.

```sql
UPDATE aws.ec2.trunk_interfaces
SET 
-- No updatable properties
WHERE 
AssociationId = '{{ AssociationId }}' --required
AND region = '{{ region }}' --required
AND ClientToken = '{{ ClientToken}}'
AND DryRun = {{ DryRun}}
RETURNING
ClientToken,
Return;
```
</TabItem>
</Tabs>
