--- 
title: instance_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_attributes
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

Creates, updates, deletes, gets or lists an <code>instance_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.instance_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_attribute"
    values={[
        { label: 'describe_instance_attribute', value: 'describe_instance_attribute' }
    ]}
>
<TabItem value="describe_instance_attribute">

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
    <td><CopyableCode code="BlockDeviceMappings" /></td>
    <td><code>string</code></td>
    <td>The block device mapping of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="DisableApiStop" /></td>
    <td><code>string</code></td>
    <td>Indicates whether stop protection is enabled for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="DisableApiTermination" /></td>
    <td><code>string</code></td>
    <td>Indicates whether termination protection is enabled. If the value is true, you can't terminate the instance using the Amazon EC2 console, command line tools, or API.</td>
</tr>
<tr>
    <td><CopyableCode code="EbsOptimized" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the instance is optimized for Amazon EBS I/O.</td>
</tr>
<tr>
    <td><CopyableCode code="EnaSupport" /></td>
    <td><code>string</code></td>
    <td>Indicates whether enhanced networking with ENA is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="EnclaveOptions" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</td>
</tr>
<tr>
    <td><CopyableCode code="Groups" /></td>
    <td><code>string</code></td>
    <td>The security groups associated with the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceInitiatedShutdownBehavior" /></td>
    <td><code>string</code></td>
    <td>Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="KernelId" /></td>
    <td><code>string</code></td>
    <td>The kernel ID.</td>
</tr>
<tr>
    <td><CopyableCode code="ProductCodes" /></td>
    <td><code>string</code></td>
    <td>The product codes.</td>
</tr>
<tr>
    <td><CopyableCode code="RamdiskId" /></td>
    <td><code>string</code></td>
    <td>The RAM disk ID.</td>
</tr>
<tr>
    <td><CopyableCode code="RootDeviceName" /></td>
    <td><code>string</code></td>
    <td>The device name of the root device volume (for example, /dev/sda1).</td>
</tr>
<tr>
    <td><CopyableCode code="SourceDestCheck" /></td>
    <td><code>string</code></td>
    <td>Indicates whether source/destination checks are enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="SriovNetSupport" /></td>
    <td><code>string</code></td>
    <td>Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="UserData" /></td>
    <td><code>string</code></td>
    <td>The user data.</td>
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
    <td><a href="#describe_instance_attribute"><CopyableCode code="describe_instance_attribute" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-Attribute"><code>Attribute</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the specified attribute of the specified instance. You can specify only one attribute at a time. Available attributes include SQL license exemption configuration for instances registered with the SQL LE service.</td>
</tr>
<tr>
    <td><a href="#modify_instance_attribute"><CopyableCode code="modify_instance_attribute" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SourceDestCheck"><code>SourceDestCheck</code></a>, <a href="#parameter-DisableApiStop"><code>DisableApiStop</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Attribute"><code>Attribute</code></a>, <a href="#parameter-Value"><code>Value</code></a>, <a href="#parameter-BlockDeviceMapping"><code>BlockDeviceMapping</code></a>, <a href="#parameter-DisableApiTermination"><code>DisableApiTermination</code></a>, <a href="#parameter-InstanceType"><code>InstanceType</code></a>, <a href="#parameter-Kernel"><code>Kernel</code></a>, <a href="#parameter-Ramdisk"><code>Ramdisk</code></a>, <a href="#parameter-UserData"><code>UserData</code></a>, <a href="#parameter-InstanceInitiatedShutdownBehavior"><code>InstanceInitiatedShutdownBehavior</code></a>, <a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-EbsOptimized"><code>EbsOptimized</code></a>, <a href="#parameter-SriovNetSupport"><code>SriovNetSupport</code></a>, <a href="#parameter-EnaSupport"><code>EnaSupport</code></a></td>
    <td>Modifies the specified attribute of the specified instance. You can specify only one attribute at a time. Note: Using this action to change the security groups associated with an elastic network interface (ENI) attached to an instance can result in an error if the instance has more than one ENI. To change the security groups associated with an ENI attached to an instance that has multiple ENIs, we recommend that you use the ModifyNetworkInterfaceAttribute action. To modify some attributes, the instance must be stopped. For more information, see Modify a stopped instance in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-Attribute">
    <td><CopyableCode code="Attribute" /></td>
    <td><code>string</code></td>
    <td>The instance attribute. Note that the enaSupport attribute is not supported.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Attribute">
    <td><CopyableCode code="Attribute" /></td>
    <td><code>string</code></td>
    <td>The name of the attribute to modify. When changing the instance type: If the original instance type is configured for configurable bandwidth, and the desired instance type doesn't support configurable bandwidth, first set the existing bandwidth configuration to default using the ModifyInstanceNetworkPerformanceOptions operation. You can modify the following attributes only: disableApiTermination | instanceType | kernel | ramdisk | instanceInitiatedShutdownBehavior | blockDeviceMapping | userData | sourceDestCheck | groupSet | ebsOptimized | sriovNetSupport | enaSupport | nvmeSupport | disableApiStop | enclaveOptions</td>
</tr>
<tr id="parameter-BlockDeviceMapping">
    <td><CopyableCode code="BlockDeviceMapping" /></td>
    <td><code>array</code></td>
    <td>Modifies the DeleteOnTermination attribute for volumes that are currently attached. The volume must be owned by the caller. If no value is specified for DeleteOnTermination, the default is true and the volume is deleted when the instance is terminated. You can't modify the DeleteOnTermination attribute for volumes that are attached to Amazon Web Services-managed resources. To add instance store volumes to an Amazon EBS-backed instance, you must add them when you launch the instance. For more information, see Update the block device mapping when launching an instance in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-DisableApiStop">
    <td><CopyableCode code="DisableApiStop" /></td>
    <td><code>object</code></td>
    <td>Indicates whether an instance is enabled for stop protection. For more information, see Enable stop protection for your instance.</td>
</tr>
<tr id="parameter-DisableApiTermination">
    <td><CopyableCode code="DisableApiTermination" /></td>
    <td><code>object</code></td>
    <td>Enable or disable termination protection for the instance. If the value is true, you can't terminate the instance using the Amazon EC2 console, command line interface, or API. You can't enable termination protection for Spot Instances.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EbsOptimized">
    <td><CopyableCode code="EbsOptimized" /></td>
    <td><code>object</code></td>
    <td>Specifies whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</td>
</tr>
<tr id="parameter-EnaSupport">
    <td><CopyableCode code="EnaSupport" /></td>
    <td><code>object</code></td>
    <td>Set to true to enable enhanced networking with ENA for the instance. This option is supported only for HVM instances. Specifying this option with a PV instance can make it unreachable.</td>
</tr>
<tr id="parameter-GroupId">
    <td><CopyableCode code="GroupId" /></td>
    <td><code>array</code></td>
    <td>Replaces the security groups of the instance with the specified security groups. You must specify the ID of at least one security group, even if it's just the default security group for the VPC.</td>
</tr>
<tr id="parameter-InstanceInitiatedShutdownBehavior">
    <td><CopyableCode code="InstanceInitiatedShutdownBehavior" /></td>
    <td><code>object</code></td>
    <td>Specifies whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).</td>
</tr>
<tr id="parameter-InstanceType">
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>object</code></td>
    <td>Changes the instance type to the specified value. For more information, see Instance types in the Amazon EC2 User Guide. If the instance type is not valid, the error returned is InvalidInstanceAttributeValue.</td>
</tr>
<tr id="parameter-Kernel">
    <td><CopyableCode code="Kernel" /></td>
    <td><code>object</code></td>
    <td>Changes the instance's kernel to the specified value. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see PV-GRUB.</td>
</tr>
<tr id="parameter-Ramdisk">
    <td><CopyableCode code="Ramdisk" /></td>
    <td><code>object</code></td>
    <td>Changes the instance's RAM disk to the specified value. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see PV-GRUB.</td>
</tr>
<tr id="parameter-SourceDestCheck">
    <td><CopyableCode code="SourceDestCheck" /></td>
    <td><code>object</code></td>
    <td>Enable or disable source/destination checks, which ensure that the instance is either the source or the destination of any traffic that it receives. If the value is true, source/destination checks are enabled; otherwise, they are disabled. The default value is true. You must disable source/destination checks if the instance runs services such as network address translation, routing, or firewalls.</td>
</tr>
<tr id="parameter-SriovNetSupport">
    <td><CopyableCode code="SriovNetSupport" /></td>
    <td><code>object</code></td>
    <td>Set to simple to enable enhanced networking with the Intel 82599 Virtual Function interface for the instance. There is no way to disable enhanced networking with the Intel 82599 Virtual Function interface at this time. This option is supported only for HVM instances. Specifying this option with a PV instance can make it unreachable.</td>
</tr>
<tr id="parameter-UserData">
    <td><CopyableCode code="UserData" /></td>
    <td><code>object</code></td>
    <td>Changes the instance's user data to the specified value. User data must be base64-encoded. Depending on the tool or SDK that you're using, the base64-encoding might be performed for you. For more information, see Work with instance user data.</td>
</tr>
<tr id="parameter-Value">
    <td><CopyableCode code="Value" /></td>
    <td><code>string</code></td>
    <td>A new value for the attribute. Use only with the kernel, ramdisk, userData, disableApiTermination, or instanceInitiatedShutdownBehavior attribute.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_instance_attribute"
    values={[
        { label: 'describe_instance_attribute', value: 'describe_instance_attribute' }
    ]}
>
<TabItem value="describe_instance_attribute">

Describes the specified attribute of the specified instance. You can specify only one attribute at a time. Available attributes include SQL license exemption configuration for instances registered with the SQL LE service.

```sql
SELECT
BlockDeviceMappings,
DisableApiStop,
DisableApiTermination,
EbsOptimized,
EnaSupport,
EnclaveOptions,
Groups,
InstanceId,
InstanceInitiatedShutdownBehavior,
InstanceType,
KernelId,
ProductCodes,
RamdiskId,
RootDeviceName,
SourceDestCheck,
SriovNetSupport,
UserData
FROM aws.ec2.instance_attributes
WHERE InstanceId = '{{ InstanceId }}' -- required
AND Attribute = '{{ Attribute }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_instance_attribute"
    values={[
        { label: 'modify_instance_attribute', value: 'modify_instance_attribute' }
    ]}
>
<TabItem value="modify_instance_attribute">

Modifies the specified attribute of the specified instance. You can specify only one attribute at a time. Note: Using this action to change the security groups associated with an elastic network interface (ENI) attached to an instance can result in an error if the instance has more than one ENI. To change the security groups associated with an ENI attached to an instance that has multiple ENIs, we recommend that you use the ModifyNetworkInterfaceAttribute action. To modify some attributes, the instance must be stopped. For more information, see Modify a stopped instance in the Amazon EC2 User Guide.

```sql
UPDATE aws.ec2.instance_attributes
SET 
-- No updatable properties
WHERE 
InstanceId = '{{ InstanceId }}' --required
AND region = '{{ region }}' --required
AND SourceDestCheck = '{{ SourceDestCheck}}'
AND DisableApiStop = '{{ DisableApiStop}}'
AND DryRun = {{ DryRun}}
AND Attribute = '{{ Attribute}}'
AND Value = '{{ Value}}'
AND BlockDeviceMapping = '{{ BlockDeviceMapping}}'
AND DisableApiTermination = '{{ DisableApiTermination}}'
AND InstanceType = '{{ InstanceType}}'
AND Kernel = '{{ Kernel}}'
AND Ramdisk = '{{ Ramdisk}}'
AND UserData = '{{ UserData}}'
AND InstanceInitiatedShutdownBehavior = '{{ InstanceInitiatedShutdownBehavior}}'
AND GroupId = '{{ GroupId}}'
AND EbsOptimized = '{{ EbsOptimized}}'
AND SriovNetSupport = '{{ SriovNetSupport}}'
AND EnaSupport = '{{ EnaSupport}}';
```
</TabItem>
</Tabs>
