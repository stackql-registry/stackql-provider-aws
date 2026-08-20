--- 
title: byoip_cidrs
hide_title: false
hide_table_of_contents: false
keywords:
  - byoip_cidrs
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

Creates, updates, deletes, gets or lists a <code>byoip_cidrs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="byoip_cidrs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.byoip_cidrs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_byoip_cidrs"
    values={[
        { label: 'describe_byoip_cidrs', value: 'describe_byoip_cidrs' }
    ]}
>
<TabItem value="describe_byoip_cidrs">

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
    <td><CopyableCode code="advertisement_type" /></td>
    <td><code>string</code></td>
    <td>Specifies the advertisement method for the BYOIP CIDR. Valid values are: unicast: IP is advertised from a single location (regional services like EC2) anycast: IP is advertised from multiple global locations simultaneously (global services like CloudFront) For more information, see Bring your own IP to CloudFront using IPAM in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="asn_associations" /></td>
    <td><code>string</code></td>
    <td>The BYOIP CIDR associations with ASNs.</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string</code></td>
    <td>The address range, in CIDR notation.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the address range.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_pool_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM pool associated with the CIDR.</td>
</tr>
<tr>
    <td><CopyableCode code="network_border_group" /></td>
    <td><code>string</code></td>
    <td>If you have Local Zones enabled, you can choose a network border group for Local Zones when you provision and advertise a BYOIPv4 CIDR. Choose the network border group carefully as the EIP and the Amazon Web Services resource it is associated with must reside in the same network border group. You can provision BYOIP address ranges to and advertise them in the following Local Zone network border groups: us-east-1-dfw-2 us-west-2-lax-1 us-west-2-phx-2 You cannot provision or advertise BYOIPv6 address ranges in Local Zones at this time.</td>
</tr>
<tr>
    <td><CopyableCode code="pool_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the address pool associated with the CIDR.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the address range. advertised: The address range is being advertised to the internet by Amazon Web Services. deprovisioned: The address range is deprovisioned. failed-deprovision: The request to deprovision the address range was unsuccessful. Ensure that all EIPs from the range have been deallocated and try again. failed-provision: The request to provision the address range was unsuccessful. pending-deprovision: You’ve submitted a request to deprovision an address range and it's pending. pending-provision: You’ve submitted a request to provision an address range and it's pending. provisioned: The address range is provisioned and can be advertised. The range is not currently advertised. provisioned-not-publicly-advertisable: The address range is provisioned and cannot be advertised.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Upon success, contains the ID of the address pool. Otherwise, contains an error message.</td>
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
    <td><a href="#describe_byoip_cidrs"><CopyableCode code="describe_byoip_cidrs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes the IP address ranges that were provisioned for use with Amazon Web Services resources through through bring your own IP addresses (BYOIP).</td>
</tr>
<tr>
    <td><a href="#advertise_byoip_cidr"><CopyableCode code="advertise_byoip_cidr" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Cidr"><code>Cidr</code></a>, <a href="#parameter-Asn"><code>Asn</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NetworkBorderGroup"><code>NetworkBorderGroup</code></a></td>
    <td>Advertises an IPv4 or IPv6 address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP). You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time. We recommend that you stop advertising the BYOIP CIDR from other locations when you advertise it from Amazon Web Services. To minimize down time, you can configure your Amazon Web Services resources to use an address from a BYOIP CIDR before it is advertised, and then simultaneously stop advertising it from the current location and start advertising it through Amazon Web Services. It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services because of BGP propagation delays.</td>
</tr>
<tr>
    <td><a href="#deprovision_byoip_cidr"><CopyableCode code="deprovision_byoip_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Cidr"><code>Cidr</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Releases the specified address range that you provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. Before you can release an address range, you must stop advertising it and you must not have any IP addresses allocated from its address range.</td>
</tr>
<tr>
    <td><a href="#move_byoip_cidr_to_ipam"><CopyableCode code="move_byoip_cidr_to_ipam" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-IpamPoolId"><code>IpamPoolId</code></a>, <a href="#parameter-IpamPoolOwner"><code>IpamPoolOwner</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Cidr"><code>Cidr</code></a></td>
    <td>Move a BYOIPv4 CIDR to IPAM from a public IPv4 pool. If you already have a BYOIPv4 CIDR with Amazon Web Services, you can move the CIDR to IPAM from a public IPv4 pool. You cannot move an IPv6 CIDR to IPAM. If you are bringing a new IP address to Amazon Web Services for the first time, complete the steps in Tutorial: BYOIP address CIDRs to IPAM.</td>
</tr>
<tr>
    <td><a href="#provision_byoip_cidr"><CopyableCode code="provision_byoip_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Cidr"><code>Cidr</code></a>, <a href="#parameter-CidrAuthorizationContext"><code>CidrAuthorizationContext</code></a>, <a href="#parameter-PubliclyAdvertisable"><code>PubliclyAdvertisable</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-PoolTagSpecification"><code>PoolTagSpecification</code></a>, <a href="#parameter-MultiRegion"><code>MultiRegion</code></a>, <a href="#parameter-NetworkBorderGroup"><code>NetworkBorderGroup</code></a></td>
    <td>Provisions an IPv4 or IPv6 address range for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised. Amazon Web Services verifies that you own the address range and are authorized to advertise it. You must ensure that the address range is registered to you and that you created an RPKI ROA to authorize Amazon ASNs 16509 and 14618 to advertise the address range. For the Amazon Web Services GovCloud (US) Regions, authorize only ASN 8987. For the Amazon Web Services European Sovereign Cloud, authorize ASNs 16509 and 214101. For more information, see Bring your own IP addresses (BYOIP) in the Amazon EC2 User Guide. Provisioning an address range is an asynchronous operation, so the call returns immediately, but the address range is not ready to use until its status changes from pending-provision to provisioned. For more information, see Onboard your address range.</td>
</tr>
<tr>
    <td><a href="#withdraw_byoip_cidr"><CopyableCode code="withdraw_byoip_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Cidr"><code>Cidr</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time. It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of BGP propagation delays.</td>
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
<tr id="parameter-IpamPoolId">
    <td><CopyableCode code="IpamPoolId" /></td>
    <td><code>string</code></td>
    <td>The IPAM pool ID.</td>
</tr>
<tr id="parameter-IpamPoolOwner">
    <td><CopyableCode code="IpamPoolOwner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the owner of the IPAM pool.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Asn">
    <td><CopyableCode code="Asn" /></td>
    <td><code>string</code></td>
    <td>The public 2-byte or 4-byte ASN that you want to advertise.</td>
</tr>
<tr id="parameter-Cidr">
    <td><CopyableCode code="Cidr" /></td>
    <td><code>string</code></td>
    <td>The address range, in CIDR notation.</td>
</tr>
<tr id="parameter-CidrAuthorizationContext">
    <td><CopyableCode code="CidrAuthorizationContext" /></td>
    <td><code>object</code></td>
    <td>A signed document that proves that you are authorized to bring the specified IP address range to Amazon using BYOIP.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description for the address range and the address pool.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-MultiRegion">
    <td><CopyableCode code="MultiRegion" /></td>
    <td><code>boolean</code></td>
    <td>Reserved.</td>
</tr>
<tr id="parameter-NetworkBorderGroup">
    <td><CopyableCode code="NetworkBorderGroup" /></td>
    <td><code>string</code></td>
    <td>If you have Local Zones enabled, you can choose a network border group for Local Zones when you provision and advertise a BYOIPv4 CIDR. Choose the network border group carefully as the EIP and the Amazon Web Services resource it is associated with must reside in the same network border group. You can provision BYOIP address ranges to and advertise them in the following Local Zone network border groups: us-east-1-dfw-2 us-west-2-lax-1 us-west-2-phx-2 You cannot provision or advertise BYOIPv6 address ranges in Local Zones at this time.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-PoolTagSpecification">
    <td><CopyableCode code="PoolTagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the address pool.</td>
</tr>
<tr id="parameter-PubliclyAdvertisable">
    <td><CopyableCode code="PubliclyAdvertisable" /></td>
    <td><code>boolean</code></td>
    <td>(IPv6 only) Indicate whether the address range will be publicly advertised to the internet. Default: true</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_byoip_cidrs"
    values={[
        { label: 'describe_byoip_cidrs', value: 'describe_byoip_cidrs' }
    ]}
>
<TabItem value="describe_byoip_cidrs">

Describes the IP address ranges that were provisioned for use with Amazon Web Services resources through through bring your own IP addresses (BYOIP).

```sql
SELECT
advertisement_type,
asn_associations,
cidr,
description,
ipam_pool_id,
network_border_group,
pool_id,
state,
status_message
FROM aws.ec2.byoip_cidrs
WHERE MaxResults = '{{ MaxResults }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="advertise_byoip_cidr"
    values={[
        { label: 'advertise_byoip_cidr', value: 'advertise_byoip_cidr' }
    ]}
>
<TabItem value="advertise_byoip_cidr">

Advertises an IPv4 or IPv6 address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP). You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time. We recommend that you stop advertising the BYOIP CIDR from other locations when you advertise it from Amazon Web Services. To minimize down time, you can configure your Amazon Web Services resources to use an address from a BYOIP CIDR before it is advertised, and then simultaneously stop advertising it from the current location and start advertising it through Amazon Web Services. It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services because of BGP propagation delays.

```sql
UPDATE aws.ec2.byoip_cidrs
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND Cidr = '{{ Cidr}}'
AND Asn = '{{ Asn}}'
AND DryRun = {{ DryRun}}
AND NetworkBorderGroup = '{{ NetworkBorderGroup}}'
RETURNING
advertisement_type,
asn_associations,
cidr,
description,
ipam_pool_id,
network_border_group,
pool_id,
state,
status_message;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="deprovision_byoip_cidr"
    values={[
        { label: 'deprovision_byoip_cidr', value: 'deprovision_byoip_cidr' },
        { label: 'move_byoip_cidr_to_ipam', value: 'move_byoip_cidr_to_ipam' },
        { label: 'provision_byoip_cidr', value: 'provision_byoip_cidr' },
        { label: 'withdraw_byoip_cidr', value: 'withdraw_byoip_cidr' }
    ]}
>
<TabItem value="deprovision_byoip_cidr">

Releases the specified address range that you provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. Before you can release an address range, you must stop advertising it and you must not have any IP addresses allocated from its address range.

```sql
EXEC aws.ec2.byoip_cidrs.deprovision_byoip_cidr 
@region='{{ region }}' --required, 
@Cidr='{{ Cidr }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="move_byoip_cidr_to_ipam">

Move a BYOIPv4 CIDR to IPAM from a public IPv4 pool. If you already have a BYOIPv4 CIDR with Amazon Web Services, you can move the CIDR to IPAM from a public IPv4 pool. You cannot move an IPv6 CIDR to IPAM. If you are bringing a new IP address to Amazon Web Services for the first time, complete the steps in Tutorial: BYOIP address CIDRs to IPAM.

```sql
EXEC aws.ec2.byoip_cidrs.move_byoip_cidr_to_ipam 
@IpamPoolId='{{ IpamPoolId }}' --required, 
@IpamPoolOwner='{{ IpamPoolOwner }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@Cidr='{{ Cidr }}'
;
```
</TabItem>
<TabItem value="provision_byoip_cidr">

Provisions an IPv4 or IPv6 address range for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised. Amazon Web Services verifies that you own the address range and are authorized to advertise it. You must ensure that the address range is registered to you and that you created an RPKI ROA to authorize Amazon ASNs 16509 and 14618 to advertise the address range. For the Amazon Web Services GovCloud (US) Regions, authorize only ASN 8987. For the Amazon Web Services European Sovereign Cloud, authorize ASNs 16509 and 214101. For more information, see Bring your own IP addresses (BYOIP) in the Amazon EC2 User Guide. Provisioning an address range is an asynchronous operation, so the call returns immediately, but the address range is not ready to use until its status changes from pending-provision to provisioned. For more information, see Onboard your address range.

```sql
EXEC aws.ec2.byoip_cidrs.provision_byoip_cidr 
@region='{{ region }}' --required, 
@Cidr='{{ Cidr }}', 
@CidrAuthorizationContext='{{ CidrAuthorizationContext }}', 
@PubliclyAdvertisable={{ PubliclyAdvertisable }}, 
@Description='{{ Description }}', 
@DryRun={{ DryRun }}, 
@PoolTagSpecification='{{ PoolTagSpecification }}', 
@MultiRegion={{ MultiRegion }}, 
@NetworkBorderGroup='{{ NetworkBorderGroup }}'
;
```
</TabItem>
<TabItem value="withdraw_byoip_cidr">

Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time. It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of BGP propagation delays.

```sql
EXEC aws.ec2.byoip_cidrs.withdraw_byoip_cidr 
@region='{{ region }}' --required, 
@Cidr='{{ Cidr }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
