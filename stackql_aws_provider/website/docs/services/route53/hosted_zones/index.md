--- 
title: hosted_zones
hide_title: false
hide_table_of_contents: false
keywords:
  - hosted_zones
  - route53
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

Creates, updates, deletes, gets or lists a <code>hosted_zones</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hosted_zones" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.hosted_zones" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_hosted_zone"
    values={[
        { label: 'get_hosted_zone', value: 'get_hosted_zone' },
        { label: 'list_hosted_zones', value: 'list_hosted_zones' }
    ]}
>
<TabItem value="get_hosted_zone">

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
    <td><CopyableCode code="CallerReference" /></td>
    <td><code>string</code></td>
    <td>The value that you specified for CallerReference when you created the hosted zone.</td>
</tr>
<tr>
    <td><CopyableCode code="Config" /></td>
    <td><code>string</code></td>
    <td>A complex type that includes the Comment and PrivateZone elements. If you omitted the HostedZoneConfig and Comment elements from the request, the Config and Comment elements don't appear in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="Features" /></td>
    <td><code>string</code></td>
    <td>The features configuration for the hosted zone, including accelerated recovery settings and status information.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID that Amazon Route 53 assigned to the hosted zone when you created it.</td>
</tr>
<tr>
    <td><CopyableCode code="LinkedService" /></td>
    <td><code>string</code></td>
    <td>If the hosted zone was created by another service, the service that created the hosted zone. When a hosted zone is created by another service, you can't edit or delete it using Route 53.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain. For public hosted zones, this is the name that you have registered with your DNS registrar. For information about how to specify characters other than a-z, 0-9, and - (hyphen) and how to specify internationalized domain names, see CreateHostedZone.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceRecordSetCount" /></td>
    <td><code>integer</code></td>
    <td>The number of resource record sets in the hosted zone.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_hosted_zones">

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
    <td><CopyableCode code="CallerReference" /></td>
    <td><code>string</code></td>
    <td>The value that you specified for CallerReference when you created the hosted zone.</td>
</tr>
<tr>
    <td><CopyableCode code="Config" /></td>
    <td><code>string</code></td>
    <td>A complex type that includes the Comment and PrivateZone elements. If you omitted the HostedZoneConfig and Comment elements from the request, the Config and Comment elements don't appear in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="Features" /></td>
    <td><code>string</code></td>
    <td>The features configuration for the hosted zone, including accelerated recovery settings and status information.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID that Amazon Route 53 assigned to the hosted zone when you created it.</td>
</tr>
<tr>
    <td><CopyableCode code="LinkedService" /></td>
    <td><code>string</code></td>
    <td>If the hosted zone was created by another service, the service that created the hosted zone. When a hosted zone is created by another service, you can't edit or delete it using Route 53.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain. For public hosted zones, this is the name that you have registered with your DNS registrar. For information about how to specify characters other than a-z, 0-9, and - (hyphen) and how to specify internationalized domain names, see CreateHostedZone.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceRecordSetCount" /></td>
    <td><code>integer</code></td>
    <td>The number of resource record sets in the hosted zone.</td>
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
    <td><a href="#get_hosted_zone"><CopyableCode code="get_hosted_zone" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specified hosted zone including the four name servers assigned to the hosted zone. returns the VPCs associated with the specified hosted zone and does not reflect the VPC associations by Route 53 Profiles. To get the associations to a Profile, call the ListProfileAssociations API.</td>
</tr>
<tr>
    <td><a href="#list_hosted_zones"><CopyableCode code="list_hosted_zones" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-maxitems"><code>maxitems</code></a>, <a href="#parameter-delegationsetid"><code>delegationsetid</code></a>, <a href="#parameter-hostedzonetype"><code>hostedzonetype</code></a></td>
    <td>Retrieves a list of the public and private hosted zones that are associated with the current Amazon Web Services account. The response includes a HostedZones child element for each hosted zone. Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of hosted zones, you can use the maxitems parameter to list them in groups of up to 100.</td>
</tr>
<tr>
    <td><a href="#create_key_signing_key"><CopyableCode code="create_key_signing_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CallerReference"><code>CallerReference</code></a>, <a href="#parameter-HostedZoneId"><code>HostedZoneId</code></a>, <a href="#parameter-KeyManagementServiceArn"><code>KeyManagementServiceArn</code></a></td>
    <td></td>
    <td>Creates a new key-signing key (KSK) associated with a hosted zone. You can only have two KSKs per hosted zone.</td>
</tr>
<tr>
    <td><a href="#create_hosted_zone"><CopyableCode code="create_hosted_zone" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CallerReference"><code>CallerReference</code></a></td>
    <td></td>
    <td>Creates a new public or private hosted zone. You create records in a public hosted zone to define how you want to route traffic on the internet for a domain, such as example.com, and its subdomains (apex.example.com, acme.example.com). You create records in a private hosted zone to define how you want to route traffic for a domain and its subdomains within one or more Amazon Virtual Private Clouds (Amazon VPCs). You can't convert a public hosted zone to a private hosted zone or vice versa. Instead, you must create a new hosted zone with the same name and create new resource record sets. For more information about charges for hosted zones, see Amazon Route 53 Pricing. Note the following: You can't create a hosted zone for a top-level domain (TLD) such as .com. For public hosted zones, Route 53 automatically creates a default SOA record and four NS records for the zone. For more information about SOA and NS records, see NS and SOA Records that Route 53 Creates for a Hosted Zone in the Amazon Route 53 Developer Guide. If you want to use the same name servers for multiple public hosted zones, you can optionally associate a reusable delegation set with the hosted zone. See the DelegationSetId element. If your domain is registered with a registrar other than Route 53, you must update the name servers with your registrar to make Route 53 the DNS service for the domain. For more information, see Migrating DNS Service for an Existing Domain to Amazon Route 53 in the Amazon Route 53 Developer Guide. When you submit a CreateHostedZone request, the initial status of the hosted zone is PENDING. For public hosted zones, this means that the NS and SOA records are not yet available on all Route 53 DNS servers. When the NS and SOA records are available, the status of the zone changes to INSYNC. The CreateHostedZone request requires the caller to have an ec2:DescribeVpcs permission. When creating private hosted zones, the Amazon VPC must belong to the same partition where the hosted zone is created. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition. The following are the supported partitions: aws - Amazon Web Services Regions aws-cn - China Regions aws-us-gov - Amazon Web Services GovCloud (US) Region For more information, see Access Management in the Amazon Web Services General Reference.</td>
</tr>
<tr>
    <td><a href="#associate_vpc_with_hosted_zone"><CopyableCode code="associate_vpc_with_hosted_zone" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates an Amazon VPC with a private hosted zone. To perform the association, the VPC and the private hosted zone must already exist. You can't convert a public hosted zone into a private hosted zone. If you want to associate a VPC that was created by using one Amazon Web Services account with a private hosted zone that was created by using a different account, the Amazon Web Services account that created the private hosted zone must first submit a CreateVPCAssociationAuthorization request. Then the account that created the VPC must submit an AssociateVPCWithHostedZone request. When granting access, the hosted zone and the Amazon VPC must belong to the same partition. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition. The following are the supported partitions: aws - Amazon Web Services Regions aws-cn - China Regions aws-us-gov - Amazon Web Services GovCloud (US) Region For more information, see Access Management in the Amazon Web Services General Reference.</td>
</tr>
<tr>
    <td><a href="#delete_key_signing_key"><CopyableCode code="delete_key_signing_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-hosted_zone_id"><code>hosted_zone_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a key-signing key (KSK). Before you can delete a KSK, you must deactivate it. The KSK must be deactivated before you can delete it regardless of whether the hosted zone is enabled for DNSSEC signing. You can use DeactivateKeySigningKey to deactivate the key before you delete it. Use GetDNSSEC to verify that the KSK is in an INACTIVE status.</td>
</tr>
<tr>
    <td><a href="#delete_hosted_zone"><CopyableCode code="delete_hosted_zone" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a hosted zone. If the hosted zone was created by another service, such as Cloud Map, see Deleting Public Hosted Zones That Were Created by Another Service in the Amazon Route 53 Developer Guide for information about how to delete it. (The process is the same for public and private hosted zones that were created by another service.) If you want to keep your domain registration but you want to stop routing internet traffic to your website or web application, we recommend that you delete resource record sets in the hosted zone instead of deleting the hosted zone. If you delete a hosted zone, you can't undelete it. You must create a new hosted zone and update the name servers for your domain registration, which can require up to 48 hours to take effect. (If you delegated responsibility for a subdomain to a hosted zone and you delete the child hosted zone, you must update the name servers in the parent hosted zone.) In addition, if you delete a hosted zone, someone could hijack the domain and route traffic to their own resources using your domain name. If you want to avoid the monthly charge for the hosted zone, you can transfer DNS service for the domain to a free DNS service. When you transfer DNS service, you have to update the name servers for the domain registration. If the domain is registered with Route 53, see UpdateDomainNameservers for information about how to replace Route 53 name servers with name servers for the new DNS service. If the domain is registered with another registrar, use the method provided by the registrar to update name servers for the domain registration. For more information, perform an internet search on "free DNS service." You can delete a hosted zone only if it contains only the default SOA and NS records and has DNSSEC signing disabled. If the hosted zone contains other records or has DNSSEC enabled, you must delete the records and disable DNSSEC before deletion. Attempting to delete a hosted zone with additional records or DNSSEC enabled returns a HostedZoneNotEmpty error. For information about deleting records, see ChangeResourceRecordSets. To verify that the hosted zone has been deleted, do one of the following: Use the GetHostedZone action to request information about the hosted zone. Use the ListHostedZones action to get a list of the hosted zones associated with the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#activate_key_signing_key"><CopyableCode code="activate_key_signing_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-hosted_zone_id"><code>hosted_zone_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Activates a key-signing key (KSK) so that it can be used for signing by DNSSEC. This operation changes the KSK status to ACTIVE.</td>
</tr>
<tr>
    <td><a href="#deactivate_key_signing_key"><CopyableCode code="deactivate_key_signing_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-hosted_zone_id"><code>hosted_zone_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deactivates a key-signing key (KSK) so that it will not be used for signing by DNSSEC. This operation changes the KSK status to INACTIVE.</td>
</tr>
<tr>
    <td><a href="#update_hosted_zone_comment"><CopyableCode code="update_hosted_zone_comment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the comment for a specified hosted zone.</td>
</tr>
<tr>
    <td><a href="#disable_hosted_zone_dnssec"><CopyableCode code="disable_hosted_zone_dnssec" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables DNSSEC signing in a specific hosted zone. This action does not deactivate any key-signing keys (KSKs) that are active in the hosted zone.</td>
</tr>
<tr>
    <td><a href="#disassociate_vpc_from_hosted_zone"><CopyableCode code="disassociate_vpc_from_hosted_zone" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates an Amazon Virtual Private Cloud (Amazon VPC) from an Amazon Route 53 private hosted zone. Note the following: You can't disassociate the last Amazon VPC from a private hosted zone. You can't convert a private hosted zone into a public hosted zone. You can submit a DisassociateVPCFromHostedZone request using either the account that created the hosted zone or the account that created the Amazon VPC. Some services, such as Cloud Map and Amazon Elastic File System (Amazon EFS) automatically create hosted zones and associate VPCs with the hosted zones. A service can create a hosted zone using your account or using its own account. You can disassociate a VPC from a hosted zone only if the service created the hosted zone using your account. When you run DisassociateVPCFromHostedZone, if the hosted zone has a value for OwningAccount, you can use DisassociateVPCFromHostedZone. If the hosted zone has a value for OwningService, you can't use DisassociateVPCFromHostedZone. When revoking access, the hosted zone and the Amazon VPC must belong to the same partition. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition. The following are the supported partitions: aws - Amazon Web Services Regions aws-cn - China Regions aws-us-gov - Amazon Web Services GovCloud (US) Region For more information, see Access Management in the Amazon Web Services General Reference.</td>
</tr>
<tr>
    <td><a href="#enable_hosted_zone_dnssec"><CopyableCode code="enable_hosted_zone_dnssec" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables DNSSEC signing in a specific hosted zone.</td>
</tr>
<tr>
    <td><a href="#update_hosted_zone_features"><CopyableCode code="update_hosted_zone_features" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the features configuration for a hosted zone. This operation allows you to enable or disable specific features for your hosted zone, such as accelerated recovery. Accelerated recovery enables you to update DNS records in your public hosted zone even when the us-east-1 region is unavailable.</td>
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
<tr id="parameter-hosted_zone_id">
    <td><CopyableCode code="hosted_zone_id" /></td>
    <td><code>string</code></td>
    <td>A unique string used to identify a hosted zone.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the hosted zone for which you want to update features. This is the unique identifier for your hosted zone.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A string used to identify a key-signing key (KSK).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-delegationsetid">
    <td><CopyableCode code="delegationsetid" /></td>
    <td><code>string</code></td>
    <td>If you're using reusable delegation sets and you want to list all of the hosted zones that are associated with a reusable delegation set, specify the ID of that reusable delegation set.</td>
</tr>
<tr id="parameter-hostedzonetype">
    <td><CopyableCode code="hostedzonetype" /></td>
    <td><code>string</code></td>
    <td>(Optional) Specifies if the hosted zone is private.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>If the value of IsTruncated in the previous response was true, you have more hosted zones. To get more hosted zones, submit another ListHostedZones request. For the value of marker, specify the value of NextMarker from the previous response, which is the ID of the first hosted zone that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more hosted zones to get.</td>
</tr>
<tr id="parameter-maxitems">
    <td><CopyableCode code="maxitems" /></td>
    <td><code>string</code></td>
    <td>(Optional) The maximum number of hosted zones that you want Amazon Route 53 to return. If you have more than maxitems hosted zones, the value of IsTruncated in the response is true, and the value of NextMarker is the hosted zone ID of the first hosted zone that Route 53 will return if you submit another request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_hosted_zone"
    values={[
        { label: 'get_hosted_zone', value: 'get_hosted_zone' },
        { label: 'list_hosted_zones', value: 'list_hosted_zones' }
    ]}
>
<TabItem value="get_hosted_zone">

Gets information about a specified hosted zone including the four name servers assigned to the hosted zone. returns the VPCs associated with the specified hosted zone and does not reflect the VPC associations by Route 53 Profiles. To get the associations to a Profile, call the ListProfileAssociations API.

```sql
SELECT
CallerReference,
Config,
Features,
Id,
LinkedService,
Name,
ResourceRecordSetCount
FROM aws.route53.hosted_zones
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_hosted_zones">

Retrieves a list of the public and private hosted zones that are associated with the current Amazon Web Services account. The response includes a HostedZones child element for each hosted zone. Amazon Route 53 returns a maximum of 100 items in each response. If you have a lot of hosted zones, you can use the maxitems parameter to list them in groups of up to 100.

```sql
SELECT
CallerReference,
Config,
Features,
Id,
LinkedService,
Name,
ResourceRecordSetCount
FROM aws.route53.hosted_zones
WHERE region = '{{ region }}' -- required
AND marker = '{{ marker }}'
AND maxitems = '{{ maxitems }}'
AND delegationsetid = '{{ delegationsetid }}'
AND hostedzonetype = '{{ hostedzonetype }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_key_signing_key"
    values={[
        { label: 'create_key_signing_key', value: 'create_key_signing_key' },
        { label: 'create_hosted_zone', value: 'create_hosted_zone' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_key_signing_key">

Creates a new key-signing key (KSK) associated with a hosted zone. You can only have two KSKs per hosted zone.

```sql
INSERT INTO aws.route53.hosted_zones (
CallerReference,
HostedZoneId,
KeyManagementServiceArn,
Name,
Status,
region
)
SELECT 
'{{ CallerReference }}' /* required */,
'{{ HostedZoneId }}' /* required */,
'{{ KeyManagementServiceArn }}' /* required */,
'{{ Name }}',
'{{ Status }}',
'{{ region }}'
RETURNING
CreatedDate,
DNSKEYRecord,
DSRecord,
DigestAlgorithmMnemonic,
DigestAlgorithmType,
DigestValue,
Flag,
KeyTag,
KmsArn,
LastModifiedDate,
Name,
PublicKey,
SigningAlgorithmMnemonic,
SigningAlgorithmType,
Status,
StatusMessage
;
```
</TabItem>
<TabItem value="create_hosted_zone">

Creates a new public or private hosted zone. You create records in a public hosted zone to define how you want to route traffic on the internet for a domain, such as example.com, and its subdomains (apex.example.com, acme.example.com). You create records in a private hosted zone to define how you want to route traffic for a domain and its subdomains within one or more Amazon Virtual Private Clouds (Amazon VPCs). You can't convert a public hosted zone to a private hosted zone or vice versa. Instead, you must create a new hosted zone with the same name and create new resource record sets. For more information about charges for hosted zones, see Amazon Route 53 Pricing. Note the following: You can't create a hosted zone for a top-level domain (TLD) such as .com. For public hosted zones, Route 53 automatically creates a default SOA record and four NS records for the zone. For more information about SOA and NS records, see NS and SOA Records that Route 53 Creates for a Hosted Zone in the Amazon Route 53 Developer Guide. If you want to use the same name servers for multiple public hosted zones, you can optionally associate a reusable delegation set with the hosted zone. See the DelegationSetId element. If your domain is registered with a registrar other than Route 53, you must update the name servers with your registrar to make Route 53 the DNS service for the domain. For more information, see Migrating DNS Service for an Existing Domain to Amazon Route 53 in the Amazon Route 53 Developer Guide. When you submit a CreateHostedZone request, the initial status of the hosted zone is PENDING. For public hosted zones, this means that the NS and SOA records are not yet available on all Route 53 DNS servers. When the NS and SOA records are available, the status of the zone changes to INSYNC. The CreateHostedZone request requires the caller to have an ec2:DescribeVpcs permission. When creating private hosted zones, the Amazon VPC must belong to the same partition where the hosted zone is created. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition. The following are the supported partitions: aws - Amazon Web Services Regions aws-cn - China Regions aws-us-gov - Amazon Web Services GovCloud (US) Region For more information, see Access Management in the Amazon Web Services General Reference.

```sql
INSERT INTO aws.route53.hosted_zones (
Name,
VPC,
CallerReference,
HostedZoneConfig,
DelegationSetId,
region
)
SELECT 
'{{ Name }}',
'{{ VPC }}',
'{{ CallerReference }}' /* required */,
'{{ HostedZoneConfig }}',
'{{ DelegationSetId }}',
'{{ region }}'
RETURNING
CallerReference,
Config,
Features,
Id,
LinkedService,
Name,
ResourceRecordSetCount
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hosted_zones
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the hosted_zones resource.
    - name: CallerReference
      value: "{{ CallerReference }}"
    - name: HostedZoneId
      value: "{{ HostedZoneId }}"
    - name: KeyManagementServiceArn
      value: "{{ KeyManagementServiceArn }}"
    - name: Name
      value: "{{ Name }}"
    - name: Status
      value: "{{ Status }}"
    - name: VPC
      description: |
        (Private hosted zones only) A complex type that contains information about an Amazon VPC. If you associate a private hosted zone with an Amazon VPC when you make a CreateHostedZone request, the following parameters are also required.
      value:
        VPCRegion: "{{ VPCRegion }}"
        VPCId: "{{ VPCId }}"
    - name: HostedZoneConfig
      description: |
        A complex type that contains an optional comment about your hosted zone. If you don't want to specify a comment, omit both the HostedZoneConfig and Comment elements.
      value:
        Comment: "{{ Comment }}"
        PrivateZone: {{ PrivateZone }}
    - name: DelegationSetId
      value: "{{ DelegationSetId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_vpc_with_hosted_zone"
    values={[
        { label: 'associate_vpc_with_hosted_zone', value: 'associate_vpc_with_hosted_zone' }
    ]}
>
<TabItem value="associate_vpc_with_hosted_zone">

Associates an Amazon VPC with a private hosted zone. To perform the association, the VPC and the private hosted zone must already exist. You can't convert a public hosted zone into a private hosted zone. If you want to associate a VPC that was created by using one Amazon Web Services account with a private hosted zone that was created by using a different account, the Amazon Web Services account that created the private hosted zone must first submit a CreateVPCAssociationAuthorization request. Then the account that created the VPC must submit an AssociateVPCWithHostedZone request. When granting access, the hosted zone and the Amazon VPC must belong to the same partition. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition. The following are the supported partitions: aws - Amazon Web Services Regions aws-cn - China Regions aws-us-gov - Amazon Web Services GovCloud (US) Region For more information, see Access Management in the Amazon Web Services General Reference.

```sql
UPDATE aws.route53.hosted_zones
SET 
VPC = '{{ VPC }}',
Comment = '{{ Comment }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
Comment,
Id,
Status,
SubmittedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_key_signing_key"
    values={[
        { label: 'delete_key_signing_key', value: 'delete_key_signing_key' },
        { label: 'delete_hosted_zone', value: 'delete_hosted_zone' }
    ]}
>
<TabItem value="delete_key_signing_key">

Deletes a key-signing key (KSK). Before you can delete a KSK, you must deactivate it. The KSK must be deactivated before you can delete it regardless of whether the hosted zone is enabled for DNSSEC signing. You can use DeactivateKeySigningKey to deactivate the key before you delete it. Use GetDNSSEC to verify that the KSK is in an INACTIVE status.

```sql
DELETE FROM aws.route53.hosted_zones
WHERE hosted_zone_id = '{{ hosted_zone_id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_hosted_zone">

Deletes a hosted zone. If the hosted zone was created by another service, such as Cloud Map, see Deleting Public Hosted Zones That Were Created by Another Service in the Amazon Route 53 Developer Guide for information about how to delete it. (The process is the same for public and private hosted zones that were created by another service.) If you want to keep your domain registration but you want to stop routing internet traffic to your website or web application, we recommend that you delete resource record sets in the hosted zone instead of deleting the hosted zone. If you delete a hosted zone, you can't undelete it. You must create a new hosted zone and update the name servers for your domain registration, which can require up to 48 hours to take effect. (If you delegated responsibility for a subdomain to a hosted zone and you delete the child hosted zone, you must update the name servers in the parent hosted zone.) In addition, if you delete a hosted zone, someone could hijack the domain and route traffic to their own resources using your domain name. If you want to avoid the monthly charge for the hosted zone, you can transfer DNS service for the domain to a free DNS service. When you transfer DNS service, you have to update the name servers for the domain registration. If the domain is registered with Route 53, see UpdateDomainNameservers for information about how to replace Route 53 name servers with name servers for the new DNS service. If the domain is registered with another registrar, use the method provided by the registrar to update name servers for the domain registration. For more information, perform an internet search on "free DNS service." You can delete a hosted zone only if it contains only the default SOA and NS records and has DNSSEC signing disabled. If the hosted zone contains other records or has DNSSEC enabled, you must delete the records and disable DNSSEC before deletion. Attempting to delete a hosted zone with additional records or DNSSEC enabled returns a HostedZoneNotEmpty error. For information about deleting records, see ChangeResourceRecordSets. To verify that the hosted zone has been deleted, do one of the following: Use the GetHostedZone action to request information about the hosted zone. Use the ListHostedZones action to get a list of the hosted zones associated with the current Amazon Web Services account.

```sql
DELETE FROM aws.route53.hosted_zones
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="activate_key_signing_key"
    values={[
        { label: 'activate_key_signing_key', value: 'activate_key_signing_key' },
        { label: 'deactivate_key_signing_key', value: 'deactivate_key_signing_key' },
        { label: 'update_hosted_zone_comment', value: 'update_hosted_zone_comment' },
        { label: 'disable_hosted_zone_dnssec', value: 'disable_hosted_zone_dnssec' },
        { label: 'disassociate_vpc_from_hosted_zone', value: 'disassociate_vpc_from_hosted_zone' },
        { label: 'enable_hosted_zone_dnssec', value: 'enable_hosted_zone_dnssec' },
        { label: 'update_hosted_zone_features', value: 'update_hosted_zone_features' }
    ]}
>
<TabItem value="activate_key_signing_key">

Activates a key-signing key (KSK) so that it can be used for signing by DNSSEC. This operation changes the KSK status to ACTIVE.

```sql
EXEC aws.route53.hosted_zones.activate_key_signing_key 
@hosted_zone_id='{{ hosted_zone_id }}' --required, 
@name='{{ name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="deactivate_key_signing_key">

Deactivates a key-signing key (KSK) so that it will not be used for signing by DNSSEC. This operation changes the KSK status to INACTIVE.

```sql
EXEC aws.route53.hosted_zones.deactivate_key_signing_key 
@hosted_zone_id='{{ hosted_zone_id }}' --required, 
@name='{{ name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="update_hosted_zone_comment">

Updates the comment for a specified hosted zone.

```sql
EXEC aws.route53.hosted_zones.update_hosted_zone_comment 
@id='{{ id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Comment": "{{ Comment }}"
}'
;
```
</TabItem>
<TabItem value="disable_hosted_zone_dnssec">

Disables DNSSEC signing in a specific hosted zone. This action does not deactivate any key-signing keys (KSKs) that are active in the hosted zone.

```sql
EXEC aws.route53.hosted_zones.disable_hosted_zone_dnssec 
@id='{{ id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="disassociate_vpc_from_hosted_zone">

Disassociates an Amazon Virtual Private Cloud (Amazon VPC) from an Amazon Route 53 private hosted zone. Note the following: You can't disassociate the last Amazon VPC from a private hosted zone. You can't convert a private hosted zone into a public hosted zone. You can submit a DisassociateVPCFromHostedZone request using either the account that created the hosted zone or the account that created the Amazon VPC. Some services, such as Cloud Map and Amazon Elastic File System (Amazon EFS) automatically create hosted zones and associate VPCs with the hosted zones. A service can create a hosted zone using your account or using its own account. You can disassociate a VPC from a hosted zone only if the service created the hosted zone using your account. When you run DisassociateVPCFromHostedZone, if the hosted zone has a value for OwningAccount, you can use DisassociateVPCFromHostedZone. If the hosted zone has a value for OwningService, you can't use DisassociateVPCFromHostedZone. When revoking access, the hosted zone and the Amazon VPC must belong to the same partition. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one partition. The following are the supported partitions: aws - Amazon Web Services Regions aws-cn - China Regions aws-us-gov - Amazon Web Services GovCloud (US) Region For more information, see Access Management in the Amazon Web Services General Reference.

```sql
EXEC aws.route53.hosted_zones.disassociate_vpc_from_hosted_zone 
@id='{{ id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"VPC": "{{ VPC }}", 
"Comment": "{{ Comment }}"
}'
;
```
</TabItem>
<TabItem value="enable_hosted_zone_dnssec">

Enables DNSSEC signing in a specific hosted zone.

```sql
EXEC aws.route53.hosted_zones.enable_hosted_zone_dnssec 
@id='{{ id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="update_hosted_zone_features">

Updates the features configuration for a hosted zone. This operation allows you to enable or disable specific features for your hosted zone, such as accelerated recovery. Accelerated recovery enables you to update DNS records in your public hosted zone even when the us-east-1 region is unavailable.

```sql
EXEC aws.route53.hosted_zones.update_hosted_zone_features 
@id='{{ id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"EnableAcceleratedRecovery": {{ EnableAcceleratedRecovery }}
}'
;
```
</TabItem>
</Tabs>
