--- 
title: launch_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - launch_configurations
  - autoscaling
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

Creates, updates, deletes, gets or lists a <code>launch_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="launch_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.launch_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_launch_configurations"
    values={[
        { label: 'describe_launch_configurations', value: 'describe_launch_configurations' }
    ]}
>
<TabItem value="describe_launch_configurations">

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
    <td><CopyableCode code="associate_public_ip_address" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to assign a public IPv4 address to the group's instances. If the instance is launched into a default subnet, the default is to assign a public IPv4 address, unless you disabled the option to assign a public IPv4 address on the subnet. If the instance is launched into a nondefault subnet, the default is not to assign a public IPv4 address, unless you enabled the option to assign a public IPv4 address on the subnet. For more information, see Provide network connectivity for your Auto Scaling instances using Amazon VPC in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="block_device_mappings" /></td>
    <td><code>string</code></td>
    <td>The block device mapping entries that define the block devices to attach to the instances at launch. By default, the block devices specified in the block device mapping for the AMI are used. For more information, see Block device mappings in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="classic_link_vpc_id" /></td>
    <td><code>string</code></td>
    <td>Available for backward compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="classic_link_vpc_security_groups" /></td>
    <td><code>string</code></td>
    <td>Available for backward compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string</code></td>
    <td>The creation date and time for the launch configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="ebs_optimized" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false). For more information, see Amazon EBS-optimized instances in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_instance_profile" /></td>
    <td><code>string</code></td>
    <td>The name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role. For more information, see IAM role for applications that run on Amazon EC2 instances in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="image_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Machine Image (AMI) to use to launch your EC2 instances. For more information, see Find a Linux AMI in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_monitoring" /></td>
    <td><code>string</code></td>
    <td>Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring. For more information, see Configure monitoring for Auto Scaling instances in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type for the instances. For information about available instance types, see Available instance types in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="kernel_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the kernel associated with the AMI.</td>
</tr>
<tr>
    <td><CopyableCode code="key_name" /></td>
    <td><code>string</code></td>
    <td>The name of the key pair. For more information, see Amazon EC2 key pairs and Amazon EC2 instances in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the launch configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_configuration_name" /></td>
    <td><code>string</code></td>
    <td>The name of the launch configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata_options" /></td>
    <td><code>string</code></td>
    <td>The metadata options for the instances. For more information, see Configure the instance metadata options in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="placement_tenancy" /></td>
    <td><code>string</code></td>
    <td>The tenancy of the instance, either default or dedicated. An instance with dedicated tenancy runs on isolated, single-tenant hardware and can only be launched into a VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="ramdisk_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the RAM disk associated with the AMI.</td>
</tr>
<tr>
    <td><CopyableCode code="security_groups" /></td>
    <td><code>string</code></td>
    <td>A list that contains the security groups to assign to the instances in the Auto Scaling group. For more information, see Control traffic to your Amazon Web Services resources using security groups in the Amazon Virtual Private Cloud User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="spot_price" /></td>
    <td><code>string</code></td>
    <td>The maximum hourly price to be paid for any Spot Instance launched to fulfill the request. Spot Instances are launched when the price you specify exceeds the current Spot price. For more information, see Requesting Spot Instances for fault-tolerant and flexible applications in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="user_data" /></td>
    <td><code>string</code></td>
    <td>The user data to make available to the launched EC2 instances. For more information, see Instance metadata and user data in the Amazon EC2 User Guide. If you are using a command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text. User data is limited to 16 KB.</td>
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
    <td><a href="#describe_launch_configurations"><CopyableCode code="describe_launch_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LaunchConfigurationNames"><code>LaunchConfigurationNames</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Gets information about the launch configurations in the account and Region.</td>
</tr>
<tr>
    <td><a href="#create_launch_configuration"><CopyableCode code="create_launch_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-LaunchConfigurationName"><code>LaunchConfigurationName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-KeyName"><code>KeyName</code></a>, <a href="#parameter-SecurityGroups"><code>SecurityGroups</code></a>, <a href="#parameter-ClassicLinkVPCId"><code>ClassicLinkVPCId</code></a>, <a href="#parameter-ClassicLinkVPCSecurityGroups"><code>ClassicLinkVPCSecurityGroups</code></a>, <a href="#parameter-UserData"><code>UserData</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-InstanceType"><code>InstanceType</code></a>, <a href="#parameter-KernelId"><code>KernelId</code></a>, <a href="#parameter-RamdiskId"><code>RamdiskId</code></a>, <a href="#parameter-BlockDeviceMappings"><code>BlockDeviceMappings</code></a>, <a href="#parameter-InstanceMonitoring"><code>InstanceMonitoring</code></a>, <a href="#parameter-SpotPrice"><code>SpotPrice</code></a>, <a href="#parameter-IamInstanceProfile"><code>IamInstanceProfile</code></a>, <a href="#parameter-EbsOptimized"><code>EbsOptimized</code></a>, <a href="#parameter-AssociatePublicIpAddress"><code>AssociatePublicIpAddress</code></a>, <a href="#parameter-PlacementTenancy"><code>PlacementTenancy</code></a>, <a href="#parameter-MetadataOptions"><code>MetadataOptions</code></a></td>
    <td>Creates a launch configuration. If you exceed your maximum limit of launch configurations, the call fails. To query this limit, call the DescribeAccountLimits API. For information about updating this limit, see Quotas for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. For more information, see Launch configurations in the Amazon EC2 Auto Scaling User Guide. Amazon EC2 Auto Scaling configures instances launched as part of an Auto Scaling group using either a launch template or a launch configuration. We strongly recommend that you do not use launch configurations. They do not provide full functionality for Amazon EC2 Auto Scaling or Amazon EC2. For information about using launch templates, see Launch templates in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_launch_configuration"><CopyableCode code="delete_launch_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-LaunchConfigurationName"><code>LaunchConfigurationName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified launch configuration. The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.</td>
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
<tr id="parameter-LaunchConfigurationName">
    <td><CopyableCode code="LaunchConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The name of the launch configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AssociatePublicIpAddress">
    <td><CopyableCode code="AssociatePublicIpAddress" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to assign a public IPv4 address to the group's instances. If the instance is launched into a default subnet, the default is to assign a public IPv4 address, unless you disabled the option to assign a public IPv4 address on the subnet. If the instance is launched into a nondefault subnet, the default is not to assign a public IPv4 address, unless you enabled the option to assign a public IPv4 address on the subnet. If you specify true, each instance in the Auto Scaling group receives a unique public IPv4 address. For more information, see Provide network connectivity for your Auto Scaling instances using Amazon VPC in the Amazon EC2 Auto Scaling User Guide. If you specify this property, you must specify at least one subnet for VPCZoneIdentifier when you create your group.</td>
</tr>
<tr id="parameter-BlockDeviceMappings">
    <td><CopyableCode code="BlockDeviceMappings" /></td>
    <td><code>array</code></td>
    <td>The block device mapping entries that define the block devices to attach to the instances at launch. By default, the block devices specified in the block device mapping for the AMI are used. For more information, see Block device mappings in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-ClassicLinkVPCId">
    <td><CopyableCode code="ClassicLinkVPCId" /></td>
    <td><code>string</code></td>
    <td>Available for backward compatibility.</td>
</tr>
<tr id="parameter-ClassicLinkVPCSecurityGroups">
    <td><CopyableCode code="ClassicLinkVPCSecurityGroups" /></td>
    <td><code>array</code></td>
    <td>Available for backward compatibility.</td>
</tr>
<tr id="parameter-EbsOptimized">
    <td><CopyableCode code="EbsOptimized" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false). The optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization is not available with all instance types. Additional fees are incurred when you enable EBS optimization for an instance type that is not EBS-optimized by default. For more information, see Amazon EBS-optimized instances in the Amazon EC2 User Guide. The default value is false.</td>
</tr>
<tr id="parameter-IamInstanceProfile">
    <td><CopyableCode code="IamInstanceProfile" /></td>
    <td><code>string</code></td>
    <td>The name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role. For more information, see IAM role for applications that run on Amazon EC2 instances in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-ImageId">
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Machine Image (AMI) that was assigned during registration. For more information, see Find a Linux AMI in the Amazon EC2 User Guide. If you specify InstanceId, an ImageId is not required.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance to use to create the launch configuration. The new launch configuration derives attributes from the instance, except for the block device mapping. To create a launch configuration with a block device mapping or override any other instance attributes, specify them as part of the same request. For more information, see Create a launch configuration in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-InstanceMonitoring">
    <td><CopyableCode code="InstanceMonitoring" /></td>
    <td><code>object</code></td>
    <td>Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring. The default value is true (enabled). When detailed monitoring is enabled, Amazon CloudWatch generates metrics every minute and your account is charged a fee. When you disable detailed monitoring, CloudWatch generates metrics every 5 minutes. For more information, see Configure monitoring for Auto Scaling instances in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-InstanceType">
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>Specifies the instance type of the EC2 instance. For information about available instance types, see Available instance types in the Amazon EC2 User Guide. If you specify InstanceId, an InstanceType is not required.</td>
</tr>
<tr id="parameter-KernelId">
    <td><CopyableCode code="KernelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the kernel associated with the AMI. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see User provided kernels in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-KeyName">
    <td><CopyableCode code="KeyName" /></td>
    <td><code>string</code></td>
    <td>The name of the key pair. For more information, see Amazon EC2 key pairs and Amazon EC2 instances in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-LaunchConfigurationNames">
    <td><CopyableCode code="LaunchConfigurationNames" /></td>
    <td><code>array</code></td>
    <td>The launch configuration names. If you omit this property, all launch configurations are described. Array Members: Maximum number of 50 items.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return with this call. The default value is 50 and the maximum value is 100.</td>
</tr>
<tr id="parameter-MetadataOptions">
    <td><CopyableCode code="MetadataOptions" /></td>
    <td><code>object</code></td>
    <td>The metadata options for the instances. For more information, see Configure the instance metadata options in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-PlacementTenancy">
    <td><CopyableCode code="PlacementTenancy" /></td>
    <td><code>string</code></td>
    <td>The tenancy of the instance, either default or dedicated. An instance with dedicated tenancy runs on isolated, single-tenant hardware and can only be launched into a VPC. To launch dedicated instances into a shared tenancy VPC (a VPC with the instance placement tenancy attribute set to default), you must set the value of this property to dedicated. If you specify PlacementTenancy, you must specify at least one subnet for VPCZoneIdentifier when you create your group. Valid values: default | dedicated</td>
</tr>
<tr id="parameter-RamdiskId">
    <td><CopyableCode code="RamdiskId" /></td>
    <td><code>string</code></td>
    <td>The ID of the RAM disk to select. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see User provided kernels in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-SecurityGroups">
    <td><CopyableCode code="SecurityGroups" /></td>
    <td><code>array</code></td>
    <td>A list that contains the security group IDs to assign to the instances in the Auto Scaling group. For more information, see Control traffic to your Amazon Web Services resources using security groups in the Amazon Virtual Private Cloud User Guide.</td>
</tr>
<tr id="parameter-SpotPrice">
    <td><CopyableCode code="SpotPrice" /></td>
    <td><code>string</code></td>
    <td>The maximum hourly price to be paid for any Spot Instance launched to fulfill the request. Spot Instances are launched when the price you specify exceeds the current Spot price. For more information, see Request Spot Instances for fault-tolerant and flexible applications in the Amazon EC2 Auto Scaling User Guide. Valid Range: Minimum value of 0.001 When you change your maximum price by creating a new launch configuration, running instances will continue to run as long as the maximum price for those running instances is higher than the current Spot price.</td>
</tr>
<tr id="parameter-UserData">
    <td><CopyableCode code="UserData" /></td>
    <td><code>string</code></td>
    <td>The user data to make available to the launched EC2 instances. For more information, see Instance metadata and user data (Linux) and Instance metadata and user data (Windows). If you are using a command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text. User data is limited to 16 KB.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_launch_configurations"
    values={[
        { label: 'describe_launch_configurations', value: 'describe_launch_configurations' }
    ]}
>
<TabItem value="describe_launch_configurations">

Gets information about the launch configurations in the account and Region.

```sql
SELECT
associate_public_ip_address,
block_device_mappings,
classic_link_vpc_id,
classic_link_vpc_security_groups,
created_time,
ebs_optimized,
iam_instance_profile,
image_id,
instance_monitoring,
instance_type,
kernel_id,
key_name,
launch_configuration_arn,
launch_configuration_name,
metadata_options,
placement_tenancy,
ramdisk_id,
security_groups,
spot_price,
user_data
FROM aws.autoscaling.launch_configurations
WHERE region = '{{ region }}' -- required
AND LaunchConfigurationNames = '{{ LaunchConfigurationNames }}'
AND NextToken = '{{ NextToken }}'
AND MaxRecords = '{{ MaxRecords }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_launch_configuration"
    values={[
        { label: 'create_launch_configuration', value: 'create_launch_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_launch_configuration">

Creates a launch configuration. If you exceed your maximum limit of launch configurations, the call fails. To query this limit, call the DescribeAccountLimits API. For information about updating this limit, see Quotas for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. For more information, see Launch configurations in the Amazon EC2 Auto Scaling User Guide. Amazon EC2 Auto Scaling configures instances launched as part of an Auto Scaling group using either a launch template or a launch configuration. We strongly recommend that you do not use launch configurations. They do not provide full functionality for Amazon EC2 Auto Scaling or Amazon EC2. For information about using launch templates, see Launch templates in the Amazon EC2 Auto Scaling User Guide.

```sql
INSERT INTO aws.autoscaling.launch_configurations (
LaunchConfigurationName,
region,
ImageId,
KeyName,
SecurityGroups,
ClassicLinkVPCId,
ClassicLinkVPCSecurityGroups,
UserData,
InstanceId,
InstanceType,
KernelId,
RamdiskId,
BlockDeviceMappings,
InstanceMonitoring,
SpotPrice,
IamInstanceProfile,
EbsOptimized,
AssociatePublicIpAddress,
PlacementTenancy,
MetadataOptions
)
SELECT 
'{{ LaunchConfigurationName }}',
'{{ region }}',
'{{ ImageId }}',
'{{ KeyName }}',
'{{ SecurityGroups }}',
'{{ ClassicLinkVPCId }}',
'{{ ClassicLinkVPCSecurityGroups }}',
'{{ UserData }}',
'{{ InstanceId }}',
'{{ InstanceType }}',
'{{ KernelId }}',
'{{ RamdiskId }}',
'{{ BlockDeviceMappings }}',
'{{ InstanceMonitoring }}',
'{{ SpotPrice }}',
'{{ IamInstanceProfile }}',
'{{ EbsOptimized }}',
'{{ AssociatePublicIpAddress }}',
'{{ PlacementTenancy }}',
'{{ MetadataOptions }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: launch_configurations
  props:
    - name: LaunchConfigurationName
      value: "{{ LaunchConfigurationName }}"
      description: Required parameter for the launch_configurations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the launch_configurations resource.
    - name: ImageId
      value: "{{ ImageId }}"
      description: The ID of the Amazon Machine Image (AMI) that was assigned during registration. For more information, see Find a Linux AMI in the Amazon EC2 User Guide. If you specify InstanceId, an ImageId is not required.
      description: The ID of the Amazon Machine Image (AMI) that was assigned during registration. For more information, see Find a Linux AMI in the Amazon EC2 User Guide. If you specify InstanceId, an ImageId is not required.
    - name: KeyName
      value: "{{ KeyName }}"
      description: The name of the key pair. For more information, see Amazon EC2 key pairs and Amazon EC2 instances in the Amazon EC2 User Guide.
      description: The name of the key pair. For more information, see Amazon EC2 key pairs and Amazon EC2 instances in the Amazon EC2 User Guide.
    - name: SecurityGroups
      value: "{{ SecurityGroups }}"
      description: A list that contains the security group IDs to assign to the instances in the Auto Scaling group. For more information, see Control traffic to your Amazon Web Services resources using security groups in the Amazon Virtual Private Cloud User Guide.
      description: A list that contains the security group IDs to assign to the instances in the Auto Scaling group. For more information, see Control traffic to your Amazon Web Services resources using security groups in the Amazon Virtual Private Cloud User Guide.
    - name: ClassicLinkVPCId
      value: "{{ ClassicLinkVPCId }}"
      description: Available for backward compatibility.
      description: Available for backward compatibility.
    - name: ClassicLinkVPCSecurityGroups
      value: "{{ ClassicLinkVPCSecurityGroups }}"
      description: Available for backward compatibility.
      description: Available for backward compatibility.
    - name: UserData
      value: "{{ UserData }}"
      description: The user data to make available to the launched EC2 instances. For more information, see Instance metadata and user data (Linux) and Instance metadata and user data (Windows). If you are using a command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text. User data is limited to 16 KB.
      description: The user data to make available to the launched EC2 instances. For more information, see Instance metadata and user data (Linux) and Instance metadata and user data (Windows). If you are using a command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text. User data is limited to 16 KB.
    - name: InstanceId
      value: "{{ InstanceId }}"
      description: The ID of the instance to use to create the launch configuration. The new launch configuration derives attributes from the instance, except for the block device mapping. To create a launch configuration with a block device mapping or override any other instance attributes, specify them as part of the same request. For more information, see Create a launch configuration in the Amazon EC2 Auto Scaling User Guide.
      description: The ID of the instance to use to create the launch configuration. The new launch configuration derives attributes from the instance, except for the block device mapping. To create a launch configuration with a block device mapping or override any other instance attributes, specify them as part of the same request. For more information, see Create a launch configuration in the Amazon EC2 Auto Scaling User Guide.
    - name: InstanceType
      value: "{{ InstanceType }}"
      description: Specifies the instance type of the EC2 instance. For information about available instance types, see Available instance types in the Amazon EC2 User Guide. If you specify InstanceId, an InstanceType is not required.
      description: Specifies the instance type of the EC2 instance. For information about available instance types, see Available instance types in the Amazon EC2 User Guide. If you specify InstanceId, an InstanceType is not required.
    - name: KernelId
      value: "{{ KernelId }}"
      description: The ID of the kernel associated with the AMI. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see User provided kernels in the Amazon EC2 User Guide.
      description: The ID of the kernel associated with the AMI. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see User provided kernels in the Amazon EC2 User Guide.
    - name: RamdiskId
      value: "{{ RamdiskId }}"
      description: The ID of the RAM disk to select. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see User provided kernels in the Amazon EC2 User Guide.
      description: The ID of the RAM disk to select. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see User provided kernels in the Amazon EC2 User Guide.
    - name: BlockDeviceMappings
      value: "{{ BlockDeviceMappings }}"
      description: The block device mapping entries that define the block devices to attach to the instances at launch. By default, the block devices specified in the block device mapping for the AMI are used. For more information, see Block device mappings in the Amazon EC2 User Guide.
      description: The block device mapping entries that define the block devices to attach to the instances at launch. By default, the block devices specified in the block device mapping for the AMI are used. For more information, see Block device mappings in the Amazon EC2 User Guide.
    - name: InstanceMonitoring
      value: "{{ InstanceMonitoring }}"
      description: Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring. The default value is true (enabled). When detailed monitoring is enabled, Amazon CloudWatch generates metrics every minute and your account is charged a fee. When you disable detailed monitoring, CloudWatch generates metrics every 5 minutes. For more information, see Configure monitoring for Auto Scaling instances in the Amazon EC2 Auto Scaling User Guide.
      description: Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring. The default value is true (enabled). When detailed monitoring is enabled, Amazon CloudWatch generates metrics every minute and your account is charged a fee. When you disable detailed monitoring, CloudWatch generates metrics every 5 minutes. For more information, see Configure monitoring for Auto Scaling instances in the Amazon EC2 Auto Scaling User Guide.
    - name: SpotPrice
      value: "{{ SpotPrice }}"
      description: The maximum hourly price to be paid for any Spot Instance launched to fulfill the request. Spot Instances are launched when the price you specify exceeds the current Spot price. For more information, see Request Spot Instances for fault-tolerant and flexible applications in the Amazon EC2 Auto Scaling User Guide. Valid Range: Minimum value of 0.001 When you change your maximum price by creating a new launch configuration, running instances will continue to run as long as the maximum price for those running instances is higher than the current Spot price.
      description: The maximum hourly price to be paid for any Spot Instance launched to fulfill the request. Spot Instances are launched when the price you specify exceeds the current Spot price. For more information, see Request Spot Instances for fault-tolerant and flexible applications in the Amazon EC2 Auto Scaling User Guide. Valid Range: Minimum value of 0.001 When you change your maximum price by creating a new launch configuration, running instances will continue to run as long as the maximum price for those running instances is higher than the current Spot price.
    - name: IamInstanceProfile
      value: "{{ IamInstanceProfile }}"
      description: The name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role. For more information, see IAM role for applications that run on Amazon EC2 instances in the Amazon EC2 Auto Scaling User Guide.
      description: The name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role. For more information, see IAM role for applications that run on Amazon EC2 instances in the Amazon EC2 Auto Scaling User Guide.
    - name: EbsOptimized
      value: {{ EbsOptimized }}
      description: Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false). The optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization is not available with all instance types. Additional fees are incurred when you enable EBS optimization for an instance type that is not EBS-optimized by default. For more information, see Amazon EBS-optimized instances in the Amazon EC2 User Guide. The default value is false.
      description: Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false). The optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization is not available with all instance types. Additional fees are incurred when you enable EBS optimization for an instance type that is not EBS-optimized by default. For more information, see Amazon EBS-optimized instances in the Amazon EC2 User Guide. The default value is false.
    - name: AssociatePublicIpAddress
      value: {{ AssociatePublicIpAddress }}
      description: Specifies whether to assign a public IPv4 address to the group's instances. If the instance is launched into a default subnet, the default is to assign a public IPv4 address, unless you disabled the option to assign a public IPv4 address on the subnet. If the instance is launched into a nondefault subnet, the default is not to assign a public IPv4 address, unless you enabled the option to assign a public IPv4 address on the subnet. If you specify true, each instance in the Auto Scaling group receives a unique public IPv4 address. For more information, see Provide network connectivity for your Auto Scaling instances using Amazon VPC in the Amazon EC2 Auto Scaling User Guide. If you specify this property, you must specify at least one subnet for VPCZoneIdentifier when you create your group.
      description: Specifies whether to assign a public IPv4 address to the group's instances. If the instance is launched into a default subnet, the default is to assign a public IPv4 address, unless you disabled the option to assign a public IPv4 address on the subnet. If the instance is launched into a nondefault subnet, the default is not to assign a public IPv4 address, unless you enabled the option to assign a public IPv4 address on the subnet. If you specify true, each instance in the Auto Scaling group receives a unique public IPv4 address. For more information, see Provide network connectivity for your Auto Scaling instances using Amazon VPC in the Amazon EC2 Auto Scaling User Guide. If you specify this property, you must specify at least one subnet for VPCZoneIdentifier when you create your group.
    - name: PlacementTenancy
      value: "{{ PlacementTenancy }}"
      description: The tenancy of the instance, either default or dedicated. An instance with dedicated tenancy runs on isolated, single-tenant hardware and can only be launched into a VPC. To launch dedicated instances into a shared tenancy VPC (a VPC with the instance placement tenancy attribute set to default), you must set the value of this property to dedicated. If you specify PlacementTenancy, you must specify at least one subnet for VPCZoneIdentifier when you create your group. Valid values: default | dedicated
      description: The tenancy of the instance, either default or dedicated. An instance with dedicated tenancy runs on isolated, single-tenant hardware and can only be launched into a VPC. To launch dedicated instances into a shared tenancy VPC (a VPC with the instance placement tenancy attribute set to default), you must set the value of this property to dedicated. If you specify PlacementTenancy, you must specify at least one subnet for VPCZoneIdentifier when you create your group. Valid values: default | dedicated
    - name: MetadataOptions
      value: "{{ MetadataOptions }}"
      description: The metadata options for the instances. For more information, see Configure the instance metadata options in the Amazon EC2 Auto Scaling User Guide.
      description: The metadata options for the instances. For more information, see Configure the instance metadata options in the Amazon EC2 Auto Scaling User Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_launch_configuration"
    values={[
        { label: 'delete_launch_configuration', value: 'delete_launch_configuration' }
    ]}
>
<TabItem value="delete_launch_configuration">

Deletes the specified launch configuration. The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.

```sql
DELETE FROM aws.autoscaling.launch_configurations
WHERE LaunchConfigurationName = '{{ LaunchConfigurationName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
