--- 
title: ipam_byoasns
hide_title: false
hide_table_of_contents: false
keywords:
  - ipam_byoasns
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

Creates, updates, deletes, gets or lists an <code>ipam_byoasns</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipam_byoasns" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.ipam_byoasns" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ipam_byoasn"
    values={[
        { label: 'describe_ipam_byoasn', value: 'describe_ipam_byoasn' }
    ]}
>
<TabItem value="describe_ipam_byoasn">

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
    <td><CopyableCode code="asn" /></td>
    <td><code>string</code></td>
    <td>A public 2-byte or 4-byte ASN.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_id" /></td>
    <td><code>string</code></td>
    <td>An IPAM ID.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The provisioning state of the BYOASN.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message.</td>
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
    <td><a href="#describe_ipam_byoasn"><CopyableCode code="describe_ipam_byoasn" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes your Autonomous System Numbers (ASNs), their provisioning statuses, and the BYOIP CIDRs with which they are associated. For more information, see Tutorial: Bring your ASN to IPAM in the Amazon VPC IPAM guide.</td>
</tr>
<tr>
    <td><a href="#provision_ipam_byoasn"><CopyableCode code="provision_ipam_byoasn" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IpamId"><code>IpamId</code></a>, <a href="#parameter-AsnAuthorizationContext"><code>AsnAuthorizationContext</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Asn"><code>Asn</code></a></td>
    <td>Provisions your Autonomous System Number (ASN) for use in your Amazon Web Services account. This action requires authorization context for Amazon to bring the ASN to an Amazon Web Services account. For more information, see Tutorial: Bring your ASN to IPAM in the Amazon VPC IPAM guide.</td>
</tr>
<tr>
    <td><a href="#deprovision_ipam_byoasn"><CopyableCode code="deprovision_ipam_byoasn" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IpamId"><code>IpamId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Asn"><code>Asn</code></a></td>
    <td>Deprovisions your Autonomous System Number (ASN) from your Amazon Web Services account. This action can only be called after any BYOIP CIDR associations are removed from your Amazon Web Services account with DisassociateIpamByoasn. For more information, see Tutorial: Bring your ASN to IPAM in the Amazon VPC IPAM guide.</td>
</tr>
<tr>
    <td><a href="#associate_ipam_byoasn"><CopyableCode code="associate_ipam_byoasn" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Asn"><code>Asn</code></a>, <a href="#parameter-Cidr"><code>Cidr</code></a></td>
    <td>Associates your Autonomous System Number (ASN) with a BYOIP CIDR that you own in the same Amazon Web Services Region. For more information, see Tutorial: Bring your ASN to IPAM in the Amazon VPC IPAM guide. After the association succeeds, the ASN is eligible for advertisement. You can view the association with DescribeByoipCidrs. You can advertise the CIDR with AdvertiseByoipCidr.</td>
</tr>
<tr>
    <td><a href="#disassociate_ipam_byoasn"><CopyableCode code="disassociate_ipam_byoasn" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Asn"><code>Asn</code></a>, <a href="#parameter-Cidr"><code>Cidr</code></a></td>
    <td>Remove the association between your Autonomous System Number (ASN) and your BYOIP CIDR. You may want to use this action to disassociate an ASN from a CIDR or if you want to swap ASNs. For more information, see Tutorial: Bring your ASN to IPAM in the Amazon VPC IPAM guide.</td>
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
<tr id="parameter-AsnAuthorizationContext">
    <td><CopyableCode code="AsnAuthorizationContext" /></td>
    <td><code>object</code></td>
    <td>An ASN authorization context.</td>
</tr>
<tr id="parameter-IpamId">
    <td><CopyableCode code="IpamId" /></td>
    <td><code>string</code></td>
    <td>The IPAM ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Asn">
    <td><CopyableCode code="Asn" /></td>
    <td><code>string</code></td>
    <td>A public 2-byte or 4-byte ASN.</td>
</tr>
<tr id="parameter-Cidr">
    <td><CopyableCode code="Cidr" /></td>
    <td><code>string</code></td>
    <td>A BYOIP CIDR.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_ipam_byoasn"
    values={[
        { label: 'describe_ipam_byoasn', value: 'describe_ipam_byoasn' }
    ]}
>
<TabItem value="describe_ipam_byoasn">

Describes your Autonomous System Numbers (ASNs), their provisioning statuses, and the BYOIP CIDRs with which they are associated. For more information, see Tutorial: Bring your ASN to IPAM in the Amazon VPC IPAM guide.

```sql
SELECT
asn,
ipam_id,
state,
status_message
FROM aws.ec2.ipam_byoasns
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="provision_ipam_byoasn"
    values={[
        { label: 'provision_ipam_byoasn', value: 'provision_ipam_byoasn' },
        { label: 'deprovision_ipam_byoasn', value: 'deprovision_ipam_byoasn' },
        { label: 'associate_ipam_byoasn', value: 'associate_ipam_byoasn' }
    ]}
>
<TabItem value="provision_ipam_byoasn">

Provisions your Autonomous System Number (ASN) for use in your Amazon Web Services account. This action requires authorization context for Amazon to bring the ASN to an Amazon Web Services account. For more information, see Tutorial: Bring your ASN to IPAM in the Amazon VPC IPAM guide.

```sql
UPDATE aws.ec2.ipam_byoasns
SET 
-- No updatable properties
WHERE 
IpamId = '{{ IpamId }}' --required
AND AsnAuthorizationContext = '{{ AsnAuthorizationContext }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Asn = '{{ Asn}}'
RETURNING
asn,
ipam_id,
state,
status_message;
```
</TabItem>
<TabItem value="deprovision_ipam_byoasn">

Deprovisions your Autonomous System Number (ASN) from your Amazon Web Services account. This action can only be called after any BYOIP CIDR associations are removed from your Amazon Web Services account with DisassociateIpamByoasn. For more information, see Tutorial: Bring your ASN to IPAM in the Amazon VPC IPAM guide.

```sql
UPDATE aws.ec2.ipam_byoasns
SET 
-- No updatable properties
WHERE 
IpamId = '{{ IpamId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Asn = '{{ Asn}}'
RETURNING
asn,
ipam_id,
state,
status_message;
```
</TabItem>
<TabItem value="associate_ipam_byoasn">

Associates your Autonomous System Number (ASN) with a BYOIP CIDR that you own in the same Amazon Web Services Region. For more information, see Tutorial: Bring your ASN to IPAM in the Amazon VPC IPAM guide. After the association succeeds, the ASN is eligible for advertisement. You can view the association with DescribeByoipCidrs. You can advertise the CIDR with AdvertiseByoipCidr.

```sql
UPDATE aws.ec2.ipam_byoasns
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Asn = '{{ Asn}}'
AND Cidr = '{{ Cidr}}'
RETURNING
asn,
cidr,
state,
status_message;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_ipam_byoasn"
    values={[
        { label: 'disassociate_ipam_byoasn', value: 'disassociate_ipam_byoasn' }
    ]}
>
<TabItem value="disassociate_ipam_byoasn">

Remove the association between your Autonomous System Number (ASN) and your BYOIP CIDR. You may want to use this action to disassociate an ASN from a CIDR or if you want to swap ASNs. For more information, see Tutorial: Bring your ASN to IPAM in the Amazon VPC IPAM guide.

```sql
EXEC aws.ec2.ipam_byoasns.disassociate_ipam_byoasn 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@Asn='{{ Asn }}', 
@Cidr='{{ Cidr }}'
;
```
</TabItem>
</Tabs>
