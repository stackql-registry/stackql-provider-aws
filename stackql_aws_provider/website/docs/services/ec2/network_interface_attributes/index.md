--- 
title: network_interface_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - network_interface_attributes
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

Creates, updates, deletes, gets or lists a <code>network_interface_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_interface_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.network_interface_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_network_interface_attribute"
    values={[
        { label: 'describe_network_interface_attribute', value: 'describe_network_interface_attribute' }
    ]}
>
<TabItem value="describe_network_interface_attribute">

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
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the security group.</td>
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
    <td><a href="#describe_network_interface_attribute"><CopyableCode code="describe_network_interface_attribute" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Attribute"><code>Attribute</code></a></td>
    <td>Describes a network interface attribute. You can specify only one attribute at a time.</td>
</tr>
<tr>
    <td><a href="#modify_network_interface_attribute"><CopyableCode code="modify_network_interface_attribute" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EnaSrdSpecification"><code>EnaSrdSpecification</code></a>, <a href="#parameter-EnablePrimaryIpv6"><code>EnablePrimaryIpv6</code></a>, <a href="#parameter-ConnectionTrackingSpecification"><code>ConnectionTrackingSpecification</code></a>, <a href="#parameter-AssociatePublicIpAddress"><code>AssociatePublicIpAddress</code></a>, <a href="#parameter-AssociatedSubnetId"><code>AssociatedSubnetId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-SourceDestCheck"><code>SourceDestCheck</code></a>, <a href="#parameter-SecurityGroupId"><code>SecurityGroupId</code></a>, <a href="#parameter-Attachment"><code>Attachment</code></a></td>
    <td>Modifies the specified network interface attribute. You can specify only one attribute at a time. You can use this action to attach and detach security groups from an existing EC2 instance.</td>
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
<tr id="parameter-NetworkInterfaceId">
    <td><CopyableCode code="NetworkInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the network interface.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AssociatePublicIpAddress">
    <td><CopyableCode code="AssociatePublicIpAddress" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to assign a public IPv4 address to a network interface. This option can be enabled for any network interface but will only apply to the primary network interface (eth0).</td>
</tr>
<tr id="parameter-AssociatedSubnetId">
    <td><CopyableCode code="AssociatedSubnetId" /></td>
    <td><code>array</code></td>
    <td>A list of subnet IDs to associate with the network interface.</td>
</tr>
<tr id="parameter-Attachment">
    <td><CopyableCode code="Attachment" /></td>
    <td><code>object</code></td>
    <td>Information about the interface attachment. If modifying the delete on termination attribute, you must specify the ID of the interface attachment.</td>
</tr>
<tr id="parameter-Attribute">
    <td><CopyableCode code="Attribute" /></td>
    <td><code>string</code></td>
    <td>The attribute of the network interface. This parameter is required.</td>
</tr>
<tr id="parameter-ConnectionTrackingSpecification">
    <td><CopyableCode code="ConnectionTrackingSpecification" /></td>
    <td><code>object</code></td>
    <td>A connection tracking specification.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>object</code></td>
    <td>A description for the network interface.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EnaSrdSpecification">
    <td><CopyableCode code="EnaSrdSpecification" /></td>
    <td><code>object</code></td>
    <td>Updates the ENA Express configuration for the network interface that’s attached to the instance.</td>
</tr>
<tr id="parameter-EnablePrimaryIpv6">
    <td><CopyableCode code="EnablePrimaryIpv6" /></td>
    <td><code>boolean</code></td>
    <td>If you’re modifying a network interface in a dual-stack or IPv6-only subnet, you have the option to assign a primary IPv6 IP address. A primary IPv6 address is an IPv6 GUA address associated with an ENI that you have enabled to use a primary IPv6 address. Use this option if the instance that this ENI will be attached to relies on its IPv6 address not changing. Amazon Web Services will automatically assign an IPv6 address associated with the ENI attached to your instance to be the primary IPv6 address. Once you enable an IPv6 GUA address to be a primary IPv6, you cannot disable it. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. If you have multiple IPv6 addresses associated with an ENI attached to your instance and you enable a primary IPv6 address, the first IPv6 GUA address associated with the ENI becomes the primary IPv6 address.</td>
</tr>
<tr id="parameter-SecurityGroupId">
    <td><CopyableCode code="SecurityGroupId" /></td>
    <td><code>array</code></td>
    <td>Changes the security groups for the network interface. The new set of groups you specify replaces the current set. You must specify at least one group, even if it's just the default security group in the VPC. You must specify the ID of the security group, not the name.</td>
</tr>
<tr id="parameter-SourceDestCheck">
    <td><CopyableCode code="SourceDestCheck" /></td>
    <td><code>object</code></td>
    <td>Enable or disable source/destination checks, which ensure that the instance is either the source or the destination of any traffic that it receives. If the value is true, source/destination checks are enabled; otherwise, they are disabled. The default value is true. You must disable source/destination checks if the instance runs services such as network address translation, routing, or firewalls.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_network_interface_attribute"
    values={[
        { label: 'describe_network_interface_attribute', value: 'describe_network_interface_attribute' }
    ]}
>
<TabItem value="describe_network_interface_attribute">

Describes a network interface attribute. You can specify only one attribute at a time.

```sql
SELECT
GroupId,
GroupName
FROM aws.ec2.network_interface_attributes
WHERE NetworkInterfaceId = '{{ NetworkInterfaceId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Attribute = '{{ Attribute }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_network_interface_attribute"
    values={[
        { label: 'modify_network_interface_attribute', value: 'modify_network_interface_attribute' }
    ]}
>
<TabItem value="modify_network_interface_attribute">

Modifies the specified network interface attribute. You can specify only one attribute at a time. You can use this action to attach and detach security groups from an existing EC2 instance.

```sql
UPDATE aws.ec2.network_interface_attributes
SET 
-- No updatable properties
WHERE 
NetworkInterfaceId = '{{ NetworkInterfaceId }}' --required
AND region = '{{ region }}' --required
AND EnaSrdSpecification = '{{ EnaSrdSpecification}}'
AND EnablePrimaryIpv6 = {{ EnablePrimaryIpv6}}
AND ConnectionTrackingSpecification = '{{ ConnectionTrackingSpecification}}'
AND AssociatePublicIpAddress = {{ AssociatePublicIpAddress}}
AND AssociatedSubnetId = '{{ AssociatedSubnetId}}'
AND DryRun = {{ DryRun}}
AND Description = '{{ Description}}'
AND SourceDestCheck = '{{ SourceDestCheck}}'
AND SecurityGroupId = '{{ SecurityGroupId}}'
AND Attachment = '{{ Attachment}}';
```
</TabItem>
</Tabs>
