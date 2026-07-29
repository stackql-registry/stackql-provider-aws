--- 
title: mount_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - mount_targets
  - efs
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

Creates, updates, deletes, gets or lists a <code>mount_targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mount_targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.efs.mount_targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_mount_targets"
    values={[
        { label: 'describe_mount_targets', value: 'describe_mount_targets' }
    ]}
>
<TabItem value="describe_mount_targets">

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
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The unique and consistent identifier of the Availability Zone that the mount target resides in. For example, use1-az1 is an AZ ID for the us-east-1 Region and it has the same location in every Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Availability Zone in which the mount target is located. Availability Zones are independently mapped to names for each Amazon Web Services account. For example, the Availability Zone us-east-1a for your Amazon Web Services account might not be the same location as us-east-1a for another Amazon Web Services account. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="file_system_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the file system for which the mount target is intended. (pattern: &lt;code&gt;^(arn:aws&#91;-a-z&#93;*:elasticfilesystem:&#91;0-9a-z-:&#93;+:file-system/fs-&#91;0-9a-f&#93;&#123;8,40&#125;|fs-&#91;0-9a-f&#93;&#123;8,40&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string</code></td>
    <td>Address at which the file system can be mounted by using the mount target. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;1,3&#125;\.&#91;0-9&#93;&#123;1,3&#125;\.&#91;0-9&#93;&#123;1,3&#125;\.&#91;0-9&#93;&#123;1,3&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6_address" /></td>
    <td><code>string</code></td>
    <td>The IPv6 address for the mount target.</td>
</tr>
<tr>
    <td><CopyableCode code="life_cycle_state" /></td>
    <td><code>string</code></td>
    <td>Lifecycle state of the mount target. (creating, available, updating, deleting, deleted, error)</td>
</tr>
<tr>
    <td><CopyableCode code="mount_target_id" /></td>
    <td><code>string</code></td>
    <td>System-assigned mount target ID. (pattern: &lt;code&gt;^fsmt-&#91;0-9a-f&#93;&#123;8,40&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the network interface that Amazon EFS created when it created the mount target.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>Amazon Web Services account ID that owns the resource. (pattern: &lt;code&gt;^(\d&#123;12&#125;)|(\d&#123;4&#125;-\d&#123;4&#125;-\d&#123;4&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the mount target's subnet. (pattern: &lt;code&gt;^subnet-&#91;0-9a-f&#93;&#123;8,40&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The virtual private cloud (VPC) ID that the mount target is configured in.</td>
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
    <td><a href="#describe_mount_targets"><CopyableCode code="describe_mount_targets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxItems"><code>MaxItems</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-FileSystemId"><code>FileSystemId</code></a>, <a href="#parameter-MountTargetId"><code>MountTargetId</code></a>, <a href="#parameter-AccessPointId"><code>AccessPointId</code></a></td>
    <td>Returns the descriptions of all the current mount targets, or a specific mount target, for a file system. When requesting all of the current mount targets, the order of mount targets returned in the response is unspecified. This operation requires permissions for the elasticfilesystem:DescribeMountTargets action, on either the file system ID that you specify in FileSystemId, or on the file system of the mount target that you specify in MountTargetId.</td>
</tr>
<tr>
    <td><a href="#create_mount_target"><CopyableCode code="create_mount_target" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileSystemId"><code>FileSystemId</code></a>, <a href="#parameter-SubnetId"><code>SubnetId</code></a></td>
    <td></td>
    <td>Creates a mount target for a file system. You can then mount the file system on EC2 instances by using the mount target. You can create one mount target in each Availability Zone in your VPC. All EC2 instances in a VPC within a given Availability Zone share a single mount target for a given file system. If you have multiple subnets in an Availability Zone, you create a mount target in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target in order to access their file system. You can create only one mount target for a One Zone file system. You must create that mount target in the same Availability Zone in which the file system is located. Use the AvailabilityZoneName and AvailabiltyZoneId properties in the DescribeFileSystems response object to get this information. Use the subnetId associated with the file system's Availability Zone when creating the mount target. For more information, see Amazon EFS: How it Works. To create a mount target for a file system, the file system's lifecycle state must be available. For more information, see DescribeFileSystems. In the request, provide the following: The file system ID for which you are creating the mount target. A subnet ID, which determines the following: The VPC in which Amazon EFS creates the mount target The Availability Zone in which Amazon EFS creates the mount target The IP address range from which Amazon EFS selects the IP address of the mount target (if you don't specify an IP address in the request) After creating the mount target, Amazon EFS returns a response that includes, a MountTargetId and an IpAddress. You use this IP address when mounting the file system in an EC2 instance. You can also use the mount target's DNS name when mounting the file system. The EC2 instance on which you mount the file system by using the mount target can resolve the mount target's DNS name to its IP address. For more information, see How it Works: Implementation Overview. Note that you can create mount targets for a file system in only one VPC, and there can be only one mount target per Availability Zone. That is, if the file system already has one or more mount targets created for it, the subnet specified in the request to add another mount target must meet the following requirements: Must belong to the same VPC as the subnets of the existing mount targets Must not be in the same Availability Zone as any of the subnets of the existing mount targets If the request satisfies the requirements, Amazon EFS does the following: Creates a new mount target in the specified subnet. Also creates a new network interface in the subnet as follows: If the request provides an IpAddress, Amazon EFS assigns that IP address to the network interface. Otherwise, Amazon EFS assigns a free address in the subnet (in the same way that the Amazon EC2 CreateNetworkInterface call does when a request does not specify a primary private IP address). If the request provides SecurityGroups, this network interface is associated with those security groups. Otherwise, it belongs to the default security group for the subnet's VPC. Assigns the description Mount target fsmt-id for file system fs-id where fsmt-id is the mount target ID, and fs-id is the FileSystemId. Sets the requesterManaged property of the network interface to true, and the requesterId value to EFS. Each Amazon EFS mount target has one corresponding requester-managed EC2 network interface. After the network interface is created, Amazon EFS sets the NetworkInterfaceId field in the mount target's description to the network interface ID, and the IpAddress field to its address. If network interface creation fails, the entire CreateMountTarget operation fails. The CreateMountTarget call returns only after creating the network interface, but while the mount target state is still creating, you can check the mount target creation status by calling the DescribeMountTargets operation, which among other things returns the mount target state. We recommend that you create a mount target in each of the Availability Zones. There are cost considerations for using a file system in an Availability Zone through a mount target created in another Availability Zone. For more information, see Amazon EFS pricing. In addition, by always using a mount target local to the instance's Availability Zone, you eliminate a partial failure scenario. If the Availability Zone in which your mount target is created goes down, then you can't access your file system through that mount target. This operation requires permissions for the following action on the file system: elasticfilesystem:CreateMountTarget This operation also requires permissions for the following Amazon EC2 actions: ec2:DescribeSubnets ec2:DescribeNetworkInterfaces ec2:CreateNetworkInterface</td>
</tr>
<tr>
    <td><a href="#delete_mount_target"><CopyableCode code="delete_mount_target" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-mount_target_id"><code>mount_target_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified mount target. This operation forcibly breaks any mounts of the file system by using the mount target that is being deleted, which might disrupt instances or applications using those mounts. To avoid applications getting cut off abruptly, you might consider unmounting any mounts of the mount target, if feasible. The operation also deletes the associated network interface. Uncommitted writes might be lost, but breaking a mount target using this operation does not corrupt the file system itself. The file system you created remains. You can mount an EC2 instance in your VPC by using another mount target. This operation requires permissions for the following action on the file system: elasticfilesystem:DeleteMountTarget The DeleteMountTarget call returns while the mount target state is still deleting. You can check the mount target deletion by calling the DescribeMountTargets operation, which returns a list of mount target descriptions for the given file system. The operation also requires permissions for the following Amazon EC2 action on the mount target's network interface: ec2:DeleteNetworkInterface</td>
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
<tr id="parameter-mount_target_id">
    <td><CopyableCode code="mount_target_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the mount target to delete (String).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AccessPointId">
    <td><CopyableCode code="AccessPointId" /></td>
    <td><code>string</code></td>
    <td>(Optional) The ID of the access point whose mount targets that you want to list. It must be included in your request if a FileSystemId or MountTargetId is not included in your request. Accepts either an access point ID or ARN as input.</td>
</tr>
<tr id="parameter-FileSystemId">
    <td><CopyableCode code="FileSystemId" /></td>
    <td><code>string</code></td>
    <td>(Optional) ID of the file system whose mount targets you want to list (String). It must be included in your request if an AccessPointId or MountTargetId is not included. Accepts either a file system ID or ARN as input.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>(Optional) Opaque pagination token returned from a previous DescribeMountTargets operation (String). If present, it specifies to continue the list from where the previous returning call left off.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>(Optional) Maximum number of mount targets to return in the response. Currently, this number is automatically set to 10, and other values are ignored. The response is paginated at 100 per page if you have more than 100 mount targets.</td>
</tr>
<tr id="parameter-MountTargetId">
    <td><CopyableCode code="MountTargetId" /></td>
    <td><code>string</code></td>
    <td>(Optional) ID of the mount target that you want to have described (String). It must be included in your request if FileSystemId is not included. Accepts either a mount target ID or ARN as input.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_mount_targets"
    values={[
        { label: 'describe_mount_targets', value: 'describe_mount_targets' }
    ]}
>
<TabItem value="describe_mount_targets">

Returns the descriptions of all the current mount targets, or a specific mount target, for a file system. When requesting all of the current mount targets, the order of mount targets returned in the response is unspecified. This operation requires permissions for the elasticfilesystem:DescribeMountTargets action, on either the file system ID that you specify in FileSystemId, or on the file system of the mount target that you specify in MountTargetId.

```sql
SELECT
availability_zone_id,
availability_zone_name,
file_system_id,
ip_address,
ipv_6_address,
life_cycle_state,
mount_target_id,
network_interface_id,
owner_id,
subnet_id,
vpc_id
FROM aws.efs.mount_targets
WHERE region = '{{ region }}' -- required
AND MaxItems = '{{ MaxItems }}'
AND Marker = '{{ Marker }}'
AND FileSystemId = '{{ FileSystemId }}'
AND MountTargetId = '{{ MountTargetId }}'
AND AccessPointId = '{{ AccessPointId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_mount_target"
    values={[
        { label: 'create_mount_target', value: 'create_mount_target' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_mount_target">

Creates a mount target for a file system. You can then mount the file system on EC2 instances by using the mount target. You can create one mount target in each Availability Zone in your VPC. All EC2 instances in a VPC within a given Availability Zone share a single mount target for a given file system. If you have multiple subnets in an Availability Zone, you create a mount target in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target in order to access their file system. You can create only one mount target for a One Zone file system. You must create that mount target in the same Availability Zone in which the file system is located. Use the AvailabilityZoneName and AvailabiltyZoneId properties in the DescribeFileSystems response object to get this information. Use the subnetId associated with the file system's Availability Zone when creating the mount target. For more information, see Amazon EFS: How it Works. To create a mount target for a file system, the file system's lifecycle state must be available. For more information, see DescribeFileSystems. In the request, provide the following: The file system ID for which you are creating the mount target. A subnet ID, which determines the following: The VPC in which Amazon EFS creates the mount target The Availability Zone in which Amazon EFS creates the mount target The IP address range from which Amazon EFS selects the IP address of the mount target (if you don't specify an IP address in the request) After creating the mount target, Amazon EFS returns a response that includes, a MountTargetId and an IpAddress. You use this IP address when mounting the file system in an EC2 instance. You can also use the mount target's DNS name when mounting the file system. The EC2 instance on which you mount the file system by using the mount target can resolve the mount target's DNS name to its IP address. For more information, see How it Works: Implementation Overview. Note that you can create mount targets for a file system in only one VPC, and there can be only one mount target per Availability Zone. That is, if the file system already has one or more mount targets created for it, the subnet specified in the request to add another mount target must meet the following requirements: Must belong to the same VPC as the subnets of the existing mount targets Must not be in the same Availability Zone as any of the subnets of the existing mount targets If the request satisfies the requirements, Amazon EFS does the following: Creates a new mount target in the specified subnet. Also creates a new network interface in the subnet as follows: If the request provides an IpAddress, Amazon EFS assigns that IP address to the network interface. Otherwise, Amazon EFS assigns a free address in the subnet (in the same way that the Amazon EC2 CreateNetworkInterface call does when a request does not specify a primary private IP address). If the request provides SecurityGroups, this network interface is associated with those security groups. Otherwise, it belongs to the default security group for the subnet's VPC. Assigns the description Mount target fsmt-id for file system fs-id where fsmt-id is the mount target ID, and fs-id is the FileSystemId. Sets the requesterManaged property of the network interface to true, and the requesterId value to EFS. Each Amazon EFS mount target has one corresponding requester-managed EC2 network interface. After the network interface is created, Amazon EFS sets the NetworkInterfaceId field in the mount target's description to the network interface ID, and the IpAddress field to its address. If network interface creation fails, the entire CreateMountTarget operation fails. The CreateMountTarget call returns only after creating the network interface, but while the mount target state is still creating, you can check the mount target creation status by calling the DescribeMountTargets operation, which among other things returns the mount target state. We recommend that you create a mount target in each of the Availability Zones. There are cost considerations for using a file system in an Availability Zone through a mount target created in another Availability Zone. For more information, see Amazon EFS pricing. In addition, by always using a mount target local to the instance's Availability Zone, you eliminate a partial failure scenario. If the Availability Zone in which your mount target is created goes down, then you can't access your file system through that mount target. This operation requires permissions for the following action on the file system: elasticfilesystem:CreateMountTarget This operation also requires permissions for the following Amazon EC2 actions: ec2:DescribeSubnets ec2:DescribeNetworkInterfaces ec2:CreateNetworkInterface

```sql
INSERT INTO aws.efs.mount_targets (
FileSystemId,
SubnetId,
IpAddress,
Ipv6Address,
IpAddressType,
SecurityGroups,
region
)
SELECT 
'{{ FileSystemId }}' /* required */,
'{{ SubnetId }}' /* required */,
'{{ IpAddress }}',
'{{ Ipv6Address }}',
'{{ IpAddressType }}',
'{{ SecurityGroups }}',
'{{ region }}'
RETURNING
availability_zone_id,
availability_zone_name,
file_system_id,
ip_address,
ipv_6_address,
life_cycle_state,
mount_target_id,
network_interface_id,
owner_id,
subnet_id,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: mount_targets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the mount_targets resource.
    - name: FileSystemId
      value: "{{ FileSystemId }}"
    - name: SubnetId
      value: "{{ SubnetId }}"
    - name: IpAddress
      value: "{{ IpAddress }}"
    - name: Ipv6Address
      value: "{{ Ipv6Address }}"
    - name: IpAddressType
      value: "{{ IpAddressType }}"
      valid_values: ['IPV4_ONLY', 'IPV6_ONLY', 'DUAL_STACK']
    - name: SecurityGroups
      value:
        - "{{ SecurityGroups }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_mount_target"
    values={[
        { label: 'delete_mount_target', value: 'delete_mount_target' }
    ]}
>
<TabItem value="delete_mount_target">

Deletes the specified mount target. This operation forcibly breaks any mounts of the file system by using the mount target that is being deleted, which might disrupt instances or applications using those mounts. To avoid applications getting cut off abruptly, you might consider unmounting any mounts of the mount target, if feasible. The operation also deletes the associated network interface. Uncommitted writes might be lost, but breaking a mount target using this operation does not corrupt the file system itself. The file system you created remains. You can mount an EC2 instance in your VPC by using another mount target. This operation requires permissions for the following action on the file system: elasticfilesystem:DeleteMountTarget The DeleteMountTarget call returns while the mount target state is still deleting. You can check the mount target deletion by calling the DescribeMountTargets operation, which returns a list of mount target descriptions for the given file system. The operation also requires permissions for the following Amazon EC2 action on the mount target's network interface: ec2:DeleteNetworkInterface

```sql
DELETE FROM aws.efs.mount_targets
WHERE mount_target_id = '{{ mount_target_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
