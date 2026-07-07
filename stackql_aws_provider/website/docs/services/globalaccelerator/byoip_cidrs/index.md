--- 
title: byoip_cidrs
hide_title: false
hide_table_of_contents: false
keywords:
  - byoip_cidrs
  - globalaccelerator
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

Creates, updates, deletes, gets or lists a <code>byoip_cidrs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="byoip_cidrs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.globalaccelerator.byoip_cidrs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_byoip_cidrs"
    values={[
        { label: 'list_byoip_cidrs', value: 'list_byoip_cidrs' }
    ]}
>
<TabItem value="list_byoip_cidrs">

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
    <td><CopyableCode code="Cidr" /></td>
    <td><code>string</code></td>
    <td>The address range, in CIDR notation. For more information, see Bring your own IP addresses (BYOIP) in the Global Accelerator Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Events" /></td>
    <td><code>array</code></td>
    <td>A history of status changes for an IP address range that you bring to Global Accelerator through bring your own IP address (BYOIP).</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the address pool. (PENDING_PROVISIONING, READY, PENDING_ADVERTISING, ADVERTISING, PENDING_WITHDRAWING, PENDING_DEPROVISIONING, DEPROVISIONED, FAILED_PROVISION, FAILED_ADVERTISING, FAILED_WITHDRAW, FAILED_DEPROVISION)</td>
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
    <td><a href="#list_byoip_cidrs"><CopyableCode code="list_byoip_cidrs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the IP address ranges that were specified in calls to ProvisionByoipCidr, including the current state and a history of state changes.</td>
</tr>
<tr>
    <td><a href="#provision_byoip_cidr"><CopyableCode code="provision_byoip_cidr" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CidrAuthorizationContext"><code>CidrAuthorizationContext</code></a></td>
    <td></td>
    <td>Provisions an IP address range to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using AdvertiseByoipCidr. For more information, see Bring your own IP addresses (BYOIP) in the Global Accelerator Developer Guide.</td>
</tr>
<tr>
    <td><a href="#advertise_byoip_cidr"><CopyableCode code="advertise_byoip_cidr" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Advertises an IPv4 address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services because of propagation delays. To stop advertising the BYOIP address range, use WithdrawByoipCidr. For more information, see Bring your own IP addresses (BYOIP) in the Global Accelerator Developer Guide.</td>
</tr>
<tr>
    <td><a href="#deprovision_byoip_cidr"><CopyableCode code="deprovision_byoip_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Releases the specified address range that you provisioned to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. Before you can release an address range, you must stop advertising it by using WithdrawByoipCidr and you must not have any accelerators that are using static IP addresses allocated from its address range. For more information, see Bring your own IP addresses (BYOIP) in the Global Accelerator Developer Guide.</td>
</tr>
<tr>
    <td><a href="#withdraw_byoip_cidr"><CopyableCode code="withdraw_byoip_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time. It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of propagation delays. For more information, see Bring your own IP addresses (BYOIP) in the Global Accelerator Developer Guide.</td>
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
    defaultValue="list_byoip_cidrs"
    values={[
        { label: 'list_byoip_cidrs', value: 'list_byoip_cidrs' }
    ]}
>
<TabItem value="list_byoip_cidrs">

Lists the IP address ranges that were specified in calls to ProvisionByoipCidr, including the current state and a history of state changes.

```sql
SELECT
Cidr,
Events,
State
FROM aws.globalaccelerator.byoip_cidrs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="provision_byoip_cidr"
    values={[
        { label: 'provision_byoip_cidr', value: 'provision_byoip_cidr' },
        { label: 'advertise_byoip_cidr', value: 'advertise_byoip_cidr' }
    ]}
>
<TabItem value="provision_byoip_cidr">

Provisions an IP address range to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using AdvertiseByoipCidr. For more information, see Bring your own IP addresses (BYOIP) in the Global Accelerator Developer Guide.

```sql
UPDATE aws.globalaccelerator.byoip_cidrs
SET 
Cidr = '{{ Cidr }}',
CidrAuthorizationContext = '{{ CidrAuthorizationContext }}'
WHERE 
region = '{{ region }}' --required
AND CidrAuthorizationContext = '{{ CidrAuthorizationContext }}' --required
RETURNING
ByoipCidr;
```
</TabItem>
<TabItem value="advertise_byoip_cidr">

Advertises an IPv4 address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services because of propagation delays. To stop advertising the BYOIP address range, use WithdrawByoipCidr. For more information, see Bring your own IP addresses (BYOIP) in the Global Accelerator Developer Guide.

```sql
UPDATE aws.globalaccelerator.byoip_cidrs
SET 
Cidr = '{{ Cidr }}'
WHERE 
region = '{{ region }}' --required
RETURNING
ByoipCidr;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="deprovision_byoip_cidr"
    values={[
        { label: 'deprovision_byoip_cidr', value: 'deprovision_byoip_cidr' },
        { label: 'withdraw_byoip_cidr', value: 'withdraw_byoip_cidr' }
    ]}
>
<TabItem value="deprovision_byoip_cidr">

Releases the specified address range that you provisioned to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. Before you can release an address range, you must stop advertising it by using WithdrawByoipCidr and you must not have any accelerators that are using static IP addresses allocated from its address range. For more information, see Bring your own IP addresses (BYOIP) in the Global Accelerator Developer Guide.

```sql
EXEC aws.globalaccelerator.byoip_cidrs.deprovision_byoip_cidr 
@region='{{ region }}' --required 
@@json=
'{
"Cidr": "{{ Cidr }}"
}'
;
```
</TabItem>
<TabItem value="withdraw_byoip_cidr">

Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time. It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of propagation delays. For more information, see Bring your own IP addresses (BYOIP) in the Global Accelerator Developer Guide.

```sql
EXEC aws.globalaccelerator.byoip_cidrs.withdraw_byoip_cidr 
@region='{{ region }}' --required 
@@json=
'{
"Cidr": "{{ Cidr }}"
}'
;
```
</TabItem>
</Tabs>
