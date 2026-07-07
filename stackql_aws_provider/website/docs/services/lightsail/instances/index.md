--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - lightsail
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_instance"
    values={[
        { label: 'get_instance', value: 'get_instance' },
        { label: 'get_instances', value: 'get_instances' }
    ]}
>
<TabItem value="get_instance">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name the user gave the instance (Amazon_Linux_2023-1). (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="addOns" /></td>
    <td><code>array</code></td>
    <td>An array of objects representing the add-ons enabled on the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the instance (arn:aws:lightsail:us-east-2:123456789101:Instance/244ad76f-8aad-4741-809f-12345EXAMPLE). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="blueprintId" /></td>
    <td><code>string</code></td>
    <td>The blueprint ID (amazon_linux_2023). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="blueprintName" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the blueprint (Amazon Linux 2023). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bundleId" /></td>
    <td><code>string</code></td>
    <td>The bundle for the instance (micro_x_x). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the instance was created (1479734909.17) in Unix time format.</td>
</tr>
<tr>
    <td><CopyableCode code="hardware" /></td>
    <td><code>object</code></td>
    <td>The size of the vCPU and the amount of RAM for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type of the instance. The possible values are ipv4 for IPv4 only, ipv6 for IPv6 only, and dualstack for IPv4 and IPv6. (dualstack, ipv4, ipv6)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6Addresses" /></td>
    <td><code>array</code></td>
    <td>The IPv6 addresses of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="isStaticIp" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether this instance has a static IP assigned to it.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The region name and Availability Zone where the instance is located.</td>
</tr>
<tr>
    <td><CopyableCode code="metadataOptions" /></td>
    <td><code>object</code></td>
    <td>The metadata options for the Amazon Lightsail instance.</td>
</tr>
<tr>
    <td><CopyableCode code="networking" /></td>
    <td><code>object</code></td>
    <td>Information about the public ports and monthly data transfer rates for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="privateIpAddress" /></td>
    <td><code>string</code></td>
    <td>The private IP address of the instance. (pattern: &lt;code&gt;(&#91;0-9&#93;&#123;1,3&#125;\.)&#123;3&#125;&#91;0-9&#93;&#123;1,3&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="publicIpAddress" /></td>
    <td><code>string</code></td>
    <td>The public IP address of the instance. (pattern: &lt;code&gt;(&#91;0-9&#93;&#123;1,3&#125;\.)&#123;3&#125;&#91;0-9&#93;&#123;1,3&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource (usually Instance). (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="sshKeyName" /></td>
    <td><code>string</code></td>
    <td>The name of the SSH key being used to connect to the instance (LightsailDefaultKeyPair). (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>object</code></td>
    <td>The status code and the state (running) for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="supportCode" /></td>
    <td><code>string</code></td>
    <td>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The user name for connecting to the instance (ec2-user). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_instances">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name the user gave the instance (Amazon_Linux_2023-1). (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="addOns" /></td>
    <td><code>array</code></td>
    <td>An array of objects representing the add-ons enabled on the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the instance (arn:aws:lightsail:us-east-2:123456789101:Instance/244ad76f-8aad-4741-809f-12345EXAMPLE). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="blueprintId" /></td>
    <td><code>string</code></td>
    <td>The blueprint ID (amazon_linux_2023). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="blueprintName" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the blueprint (Amazon Linux 2023). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bundleId" /></td>
    <td><code>string</code></td>
    <td>The bundle for the instance (micro_x_x). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the instance was created (1479734909.17) in Unix time format.</td>
</tr>
<tr>
    <td><CopyableCode code="hardware" /></td>
    <td><code>object</code></td>
    <td>The size of the vCPU and the amount of RAM for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ipAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type of the instance. The possible values are ipv4 for IPv4 only, ipv6 for IPv6 only, and dualstack for IPv4 and IPv6. (dualstack, ipv4, ipv6)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6Addresses" /></td>
    <td><code>array</code></td>
    <td>The IPv6 addresses of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="isStaticIp" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether this instance has a static IP assigned to it.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The region name and Availability Zone where the instance is located.</td>
</tr>
<tr>
    <td><CopyableCode code="metadataOptions" /></td>
    <td><code>object</code></td>
    <td>The metadata options for the Amazon Lightsail instance.</td>
</tr>
<tr>
    <td><CopyableCode code="networking" /></td>
    <td><code>object</code></td>
    <td>Information about the public ports and monthly data transfer rates for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="privateIpAddress" /></td>
    <td><code>string</code></td>
    <td>The private IP address of the instance. (pattern: &lt;code&gt;(&#91;0-9&#93;&#123;1,3&#125;\.)&#123;3&#125;&#91;0-9&#93;&#123;1,3&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="publicIpAddress" /></td>
    <td><code>string</code></td>
    <td>The public IP address of the instance. (pattern: &lt;code&gt;(&#91;0-9&#93;&#123;1,3&#125;\.)&#123;3&#125;&#91;0-9&#93;&#123;1,3&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource (usually Instance). (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="sshKeyName" /></td>
    <td><code>string</code></td>
    <td>The name of the SSH key being used to connect to the instance (LightsailDefaultKeyPair). (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>object</code></td>
    <td>The status code and the state (running) for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="supportCode" /></td>
    <td><code>string</code></td>
    <td>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The user name for connecting to the instance (ec2-user). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_instance"><CopyableCode code="get_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific Amazon Lightsail instance, which is a virtual private server.</td>
</tr>
<tr>
    <td><a href="#get_instances"><CopyableCode code="get_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all Amazon Lightsail virtual private servers, or instances.</td>
</tr>
<tr>
    <td><a href="#create_instances"><CopyableCode code="create_instances" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceNames"><code>instanceNames</code></a>, <a href="#parameter-availabilityZone"><code>availabilityZone</code></a>, <a href="#parameter-blueprintId"><code>blueprintId</code></a>, <a href="#parameter-bundleId"><code>bundleId</code></a></td>
    <td></td>
    <td>Creates one or more Amazon Lightsail instances. The create instances operation supports tag-based access control via request tags. For more information, see the Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_instances_from_snapshot"><CopyableCode code="create_instances_from_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceNames"><code>instanceNames</code></a>, <a href="#parameter-availabilityZone"><code>availabilityZone</code></a>, <a href="#parameter-bundleId"><code>bundleId</code></a></td>
    <td></td>
    <td>Creates one or more new instances from a manual or automatic snapshot of an instance. The create instances from snapshot operation supports tag-based access control via request tags and resource tags applied to the resource identified by instance snapshot name. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#setup_instance_https"><CopyableCode code="setup_instance_https" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceName"><code>instanceName</code></a>, <a href="#parameter-emailAddress"><code>emailAddress</code></a>, <a href="#parameter-domainNames"><code>domainNames</code></a>, <a href="#parameter-certificateProvider"><code>certificateProvider</code></a></td>
    <td></td>
    <td>Creates an SSL/TLS certificate that secures traffic for your website. After the certificate is created, it is installed on the specified Lightsail instance. If you provide more than one domain name in the request, at least one name must be less than or equal to 63 characters in length.</td>
</tr>
<tr>
    <td><a href="#update_instance_metadata_options"><CopyableCode code="update_instance_metadata_options" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceName"><code>instanceName</code></a></td>
    <td></td>
    <td>Modifies the Amazon Lightsail instance metadata parameters on a running or stopped instance. When you modify the parameters on a running instance, the GetInstance or GetInstances API operation initially responds with a state of pending. After the parameter modifications are successfully applied, the state changes to applied in subsequent GetInstance or GetInstances API calls. For more information, see Use IMDSv2 with an Amazon Lightsail instance in the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#put_instance_public_ports"><CopyableCode code="put_instance_public_ports" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-portInfos"><code>portInfos</code></a>, <a href="#parameter-instanceName"><code>instanceName</code></a></td>
    <td></td>
    <td>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol. This action also closes all currently open ports that are not included in the request. Include all of the ports and the protocols you want to open in your PutInstancePublicPortsrequest. Or use the OpenInstancePublicPorts action to open ports without closing currently open ports. The PutInstancePublicPorts action supports tag-based access control via resource tags applied to the resource identified by instanceName. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_instance"><CopyableCode code="delete_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Lightsail instance. The delete instance operation supports tag-based access control via resource tags applied to the resource identified by instance name. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#close_instance_public_ports"><CopyableCode code="close_instance_public_ports" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-portInfo"><code>portInfo</code></a>, <a href="#parameter-instanceName"><code>instanceName</code></a></td>
    <td></td>
    <td>Closes ports for a specific Amazon Lightsail instance. The CloseInstancePublicPorts action supports tag-based access control via resource tags applied to the resource identified by instanceName. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_known_host_keys"><CopyableCode code="delete_known_host_keys" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceName"><code>instanceName</code></a></td>
    <td></td>
    <td>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance. This operation enables the Lightsail browser-based SSH or RDP clients to connect to the instance after a host key mismatch. Perform this operation only if you were expecting the host key or certificate mismatch or if you are familiar with the new host key or certificate on the instance. For more information, see Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP client.</td>
</tr>
<tr>
    <td><a href="#open_instance_public_ports"><CopyableCode code="open_instance_public_ports" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-portInfo"><code>portInfo</code></a>, <a href="#parameter-instanceName"><code>instanceName</code></a></td>
    <td></td>
    <td>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol. The OpenInstancePublicPorts action supports tag-based access control via resource tags applied to the resource identified by instanceName. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#reboot_instance"><CopyableCode code="reboot_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceName"><code>instanceName</code></a></td>
    <td></td>
    <td>Restarts a specific instance. The reboot instance operation supports tag-based access control via resource tags applied to the resource identified by instance name. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#start_instance"><CopyableCode code="start_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceName"><code>instanceName</code></a></td>
    <td></td>
    <td>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the reboot instance operation. When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the Amazon Lightsail Developer Guide. The start instance operation supports tag-based access control via resource tags applied to the resource identified by instance name. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#stop_instance"><CopyableCode code="stop_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceName"><code>instanceName</code></a></td>
    <td></td>
    <td>Stops a specific Amazon Lightsail instance that is currently running. When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the Amazon Lightsail Developer Guide. The stop instance operation supports tag-based access control via resource tags applied to the resource identified by instance name. For more information, see the Amazon Lightsail Developer Guide.</td>
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
    defaultValue="get_instance"
    values={[
        { label: 'get_instance', value: 'get_instance' },
        { label: 'get_instances', value: 'get_instances' }
    ]}
>
<TabItem value="get_instance">

Returns information about a specific Amazon Lightsail instance, which is a virtual private server.

```sql
SELECT
name,
addOns,
arn,
blueprintId,
blueprintName,
bundleId,
createdAt,
hardware,
ipAddressType,
ipv6Addresses,
isStaticIp,
location,
metadataOptions,
networking,
privateIpAddress,
publicIpAddress,
resourceType,
sshKeyName,
state,
supportCode,
tags,
username
FROM aws.lightsail.instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_instances">

Returns information about all Amazon Lightsail virtual private servers, or instances.

```sql
SELECT
name,
addOns,
arn,
blueprintId,
blueprintName,
bundleId,
createdAt,
hardware,
ipAddressType,
ipv6Addresses,
isStaticIp,
location,
metadataOptions,
networking,
privateIpAddress,
publicIpAddress,
resourceType,
sshKeyName,
state,
supportCode,
tags,
username
FROM aws.lightsail.instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_instances"
    values={[
        { label: 'create_instances', value: 'create_instances' },
        { label: 'create_instances_from_snapshot', value: 'create_instances_from_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_instances">

Creates one or more Amazon Lightsail instances. The create instances operation supports tag-based access control via request tags. For more information, see the Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.instances (
instanceNames,
availabilityZone,
customImageName,
blueprintId,
bundleId,
userData,
keyPairName,
tags,
addOns,
ipAddressType,
region
)
SELECT 
'{{ instanceNames }}' /* required */,
'{{ availabilityZone }}' /* required */,
'{{ customImageName }}',
'{{ blueprintId }}' /* required */,
'{{ bundleId }}' /* required */,
'{{ userData }}',
'{{ keyPairName }}',
'{{ tags }}',
'{{ addOns }}',
'{{ ipAddressType }}',
'{{ region }}'
RETURNING
operations
;
```
</TabItem>
<TabItem value="create_instances_from_snapshot">

Creates one or more new instances from a manual or automatic snapshot of an instance. The create instances from snapshot operation supports tag-based access control via request tags and resource tags applied to the resource identified by instance snapshot name. For more information, see the Amazon Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.instances (
instanceNames,
attachedDiskMapping,
availabilityZone,
instanceSnapshotName,
bundleId,
userData,
keyPairName,
tags,
addOns,
ipAddressType,
sourceInstanceName,
restoreDate,
useLatestRestorableAutoSnapshot,
region
)
SELECT 
'{{ instanceNames }}' /* required */,
'{{ attachedDiskMapping }}',
'{{ availabilityZone }}' /* required */,
'{{ instanceSnapshotName }}',
'{{ bundleId }}' /* required */,
'{{ userData }}',
'{{ keyPairName }}',
'{{ tags }}',
'{{ addOns }}',
'{{ ipAddressType }}',
'{{ sourceInstanceName }}',
'{{ restoreDate }}',
{{ useLatestRestorableAutoSnapshot }},
'{{ region }}'
RETURNING
operations
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instances resource.
    - name: instanceNames
      value:
        - "{{ instanceNames }}"
      description: |
        The names for your new instances.
    - name: availabilityZone
      value: "{{ availabilityZone }}"
      description: |
        The Availability Zone where you want to create your instances. Use the following formatting: us-east-2a (case sensitive). You can get a list of Availability Zones by using the get regions operation. Be sure to add the include Availability Zones parameter to your request.
    - name: customImageName
      value: "{{ customImageName }}"
      description: |
        (Discontinued) The name for your custom image. In releases prior to June 12, 2017, this parameter was ignored by the API. It is now discontinued.
    - name: blueprintId
      value: "{{ blueprintId }}"
      description: |
        The ID for a virtual private server image (app_wordpress_x_x or app_lamp_x_x). Use the get blueprints operation to return a list of available images (or blueprints). Use active blueprints when creating new instances. Inactive blueprints are listed to support customers with existing instances and are not necessarily available to create new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.
    - name: bundleId
      value: "{{ bundleId }}"
      description: |
        The bundle of specification information for your virtual private server (or instance), including the pricing plan (micro_x_x).
    - name: userData
      value: "{{ userData }}"
      description: |
        You can create a launch script that configures a server with additional user data. For example, apt-get -y update. Depending on the machine image you choose, the command to get software on your instance varies. Amazon Linux and CentOS use yum, Debian and Ubuntu use apt-get, and FreeBSD uses pkg. For a complete list, see the Amazon Lightsail Developer Guide.
    - name: keyPairName
      value: "{{ keyPairName }}"
      description: |
        The name for your key pair.
    - name: tags
      description: |
        The tag keys and optional values to add to the resource during create. Use the TagResource action to tag a resource after it's created.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: addOns
      description: |
        An array of objects representing the add-ons to enable for the new instance.
      value:
        - addOnType: "{{ addOnType }}"
          autoSnapshotAddOnRequest:
            snapshotTimeOfDay: "{{ snapshotTimeOfDay }}"
          stopInstanceOnIdleRequest:
            threshold: "{{ threshold }}"
            duration: "{{ duration }}"
    - name: ipAddressType
      value: "{{ ipAddressType }}"
      description: |
        The IP address type for the instance. The possible values are ipv4 for IPv4 only, ipv6 for IPv6 only, and dualstack for IPv4 and IPv6. The default value is dualstack.
      valid_values: ['dualstack', 'ipv4', 'ipv6']
    - name: attachedDiskMapping
      value: "{{ attachedDiskMapping }}"
      description: |
        An object containing information about one or more disk mappings.
    - name: instanceSnapshotName
      value: "{{ instanceSnapshotName }}"
      description: |
        The name of the instance snapshot on which you are basing your new instances. Use the get instance snapshots operation to return information about your existing snapshots. Constraint: This parameter cannot be defined together with the source instance name parameter. The instance snapshot name and source instance name parameters are mutually exclusive.
    - name: sourceInstanceName
      value: "{{ sourceInstanceName }}"
      description: |
        The name of the source instance from which the source automatic snapshot was created. Constraints: This parameter cannot be defined together with the instance snapshot name parameter. The source instance name and instance snapshot name parameters are mutually exclusive. Define this parameter only when creating a new instance from an automatic snapshot. For more information, see the Amazon Lightsail Developer Guide.
    - name: restoreDate
      value: "{{ restoreDate }}"
      description: |
        The date of the automatic snapshot to use for the new instance. Use the get auto snapshots operation to identify the dates of the available automatic snapshots. Constraints: Must be specified in YYYY-MM-DD format. This parameter cannot be defined together with the use latest restorable auto snapshot parameter. The restore date and use latest restorable auto snapshot parameters are mutually exclusive. Define this parameter only when creating a new instance from an automatic snapshot. For more information, see the Amazon Lightsail Developer Guide.
    - name: useLatestRestorableAutoSnapshot
      value: {{ useLatestRestorableAutoSnapshot }}
      description: |
        A Boolean value to indicate whether to use the latest available automatic snapshot. Constraints: This parameter cannot be defined together with the restore date parameter. The use latest restorable auto snapshot and restore date parameters are mutually exclusive. Define this parameter only when creating a new instance from an automatic snapshot. For more information, see the Amazon Lightsail Developer Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="setup_instance_https"
    values={[
        { label: 'setup_instance_https', value: 'setup_instance_https' },
        { label: 'update_instance_metadata_options', value: 'update_instance_metadata_options' }
    ]}
>
<TabItem value="setup_instance_https">

Creates an SSL/TLS certificate that secures traffic for your website. After the certificate is created, it is installed on the specified Lightsail instance. If you provide more than one domain name in the request, at least one name must be less than or equal to 63 characters in length.

```sql
UPDATE aws.lightsail.instances
SET 
instanceName = '{{ instanceName }}',
emailAddress = '{{ emailAddress }}',
domainNames = '{{ domainNames }}',
certificateProvider = '{{ certificateProvider }}'
WHERE 
region = '{{ region }}' --required
AND instanceName = '{{ instanceName }}' --required
AND emailAddress = '{{ emailAddress }}' --required
AND domainNames = '{{ domainNames }}' --required
AND certificateProvider = '{{ certificateProvider }}' --required
RETURNING
operations;
```
</TabItem>
<TabItem value="update_instance_metadata_options">

Modifies the Amazon Lightsail instance metadata parameters on a running or stopped instance. When you modify the parameters on a running instance, the GetInstance or GetInstances API operation initially responds with a state of pending. After the parameter modifications are successfully applied, the state changes to applied in subsequent GetInstance or GetInstances API calls. For more information, see Use IMDSv2 with an Amazon Lightsail instance in the Amazon Lightsail Developer Guide.

```sql
UPDATE aws.lightsail.instances
SET 
instanceName = '{{ instanceName }}',
httpTokens = '{{ httpTokens }}',
httpEndpoint = '{{ httpEndpoint }}',
httpPutResponseHopLimit = {{ httpPutResponseHopLimit }},
httpProtocolIpv6 = '{{ httpProtocolIpv6 }}'
WHERE 
region = '{{ region }}' --required
AND instanceName = '{{ instanceName }}' --required
RETURNING
operation;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_instance_public_ports"
    values={[
        { label: 'put_instance_public_ports', value: 'put_instance_public_ports' }
    ]}
>
<TabItem value="put_instance_public_ports">

Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol. This action also closes all currently open ports that are not included in the request. Include all of the ports and the protocols you want to open in your PutInstancePublicPortsrequest. Or use the OpenInstancePublicPorts action to open ports without closing currently open ports. The PutInstancePublicPorts action supports tag-based access control via resource tags applied to the resource identified by instanceName. For more information, see the Amazon Lightsail Developer Guide.

```sql
REPLACE aws.lightsail.instances
SET 
portInfos = '{{ portInfos }}',
instanceName = '{{ instanceName }}'
WHERE 
region = '{{ region }}' --required
AND portInfos = '{{ portInfos }}' --required
AND instanceName = '{{ instanceName }}' --required
RETURNING
operation;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_instance"
    values={[
        { label: 'delete_instance', value: 'delete_instance' }
    ]}
>
<TabItem value="delete_instance">

Deletes an Amazon Lightsail instance. The delete instance operation supports tag-based access control via resource tags applied to the resource identified by instance name. For more information, see the Amazon Lightsail Developer Guide.

```sql
DELETE FROM aws.lightsail.instances
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="close_instance_public_ports"
    values={[
        { label: 'close_instance_public_ports', value: 'close_instance_public_ports' },
        { label: 'delete_known_host_keys', value: 'delete_known_host_keys' },
        { label: 'open_instance_public_ports', value: 'open_instance_public_ports' },
        { label: 'reboot_instance', value: 'reboot_instance' },
        { label: 'start_instance', value: 'start_instance' },
        { label: 'stop_instance', value: 'stop_instance' }
    ]}
>
<TabItem value="close_instance_public_ports">

Closes ports for a specific Amazon Lightsail instance. The CloseInstancePublicPorts action supports tag-based access control via resource tags applied to the resource identified by instanceName. For more information, see the Amazon Lightsail Developer Guide.

```sql
EXEC aws.lightsail.instances.close_instance_public_ports 
@region='{{ region }}' --required 
@@json=
'{
"portInfo": "{{ portInfo }}", 
"instanceName": "{{ instanceName }}"
}'
;
```
</TabItem>
<TabItem value="delete_known_host_keys">

Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance. This operation enables the Lightsail browser-based SSH or RDP clients to connect to the instance after a host key mismatch. Perform this operation only if you were expecting the host key or certificate mismatch or if you are familiar with the new host key or certificate on the instance. For more information, see Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP client.

```sql
EXEC aws.lightsail.instances.delete_known_host_keys 
@region='{{ region }}' --required 
@@json=
'{
"instanceName": "{{ instanceName }}"
}'
;
```
</TabItem>
<TabItem value="open_instance_public_ports">

Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol. The OpenInstancePublicPorts action supports tag-based access control via resource tags applied to the resource identified by instanceName. For more information, see the Amazon Lightsail Developer Guide.

```sql
EXEC aws.lightsail.instances.open_instance_public_ports 
@region='{{ region }}' --required 
@@json=
'{
"portInfo": "{{ portInfo }}", 
"instanceName": "{{ instanceName }}"
}'
;
```
</TabItem>
<TabItem value="reboot_instance">

Restarts a specific instance. The reboot instance operation supports tag-based access control via resource tags applied to the resource identified by instance name. For more information, see the Amazon Lightsail Developer Guide.

```sql
EXEC aws.lightsail.instances.reboot_instance 
@region='{{ region }}' --required 
@@json=
'{
"instanceName": "{{ instanceName }}"
}'
;
```
</TabItem>
<TabItem value="start_instance">

Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the reboot instance operation. When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the Amazon Lightsail Developer Guide. The start instance operation supports tag-based access control via resource tags applied to the resource identified by instance name. For more information, see the Amazon Lightsail Developer Guide.

```sql
EXEC aws.lightsail.instances.start_instance 
@region='{{ region }}' --required 
@@json=
'{
"instanceName": "{{ instanceName }}"
}'
;
```
</TabItem>
<TabItem value="stop_instance">

Stops a specific Amazon Lightsail instance that is currently running. When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the Amazon Lightsail Developer Guide. The stop instance operation supports tag-based access control via resource tags applied to the resource identified by instance name. For more information, see the Amazon Lightsail Developer Guide.

```sql
EXEC aws.lightsail.instances.stop_instance 
@region='{{ region }}' --required 
@@json=
'{
"instanceName": "{{ instanceName }}", 
"force": {{ force }}
}'
;
```
</TabItem>
</Tabs>
