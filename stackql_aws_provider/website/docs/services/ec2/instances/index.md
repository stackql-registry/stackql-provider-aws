--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instances"
    values={[
        { label: 'describe_instances', value: 'describe_instances' }
    ]}
>
<TabItem value="describe_instances">

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
    <td><CopyableCode code="ami_launch_index" /></td>
    <td><code>integer</code></td>
    <td>The AMI launch index, which can be used to find this instance in the launch group.</td>
</tr>
<tr>
    <td><CopyableCode code="architecture" /></td>
    <td><code>string</code></td>
    <td>The architecture of the image.</td>
</tr>
<tr>
    <td><CopyableCode code="block_device_mappings" /></td>
    <td><code>string</code></td>
    <td>Any block device mapping entries for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="boot_mode" /></td>
    <td><code>string</code></td>
    <td>The boot mode that was specified by the AMI. If the value is uefi-preferred, the AMI supports both UEFI and Legacy BIOS. The currentInstanceBootMode parameter is the boot mode that is used to boot the instance at launch or start. The operating system contained in the AMI must be configured to support the specified boot mode. For more information, see Boot modes in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_block_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Block. For P5 instances, a Capacity Block ID refers to a group of instances. For Trn2u instances, a capacity block ID refers to an EC2 UltraServer.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_reservation_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_reservation_specification" /></td>
    <td><code>string</code></td>
    <td>Information about the Capacity Reservation targeting option.</td>
</tr>
<tr>
    <td><CopyableCode code="client_token" /></td>
    <td><code>string</code></td>
    <td>The idempotency token you provided when you launched the instance, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_options" /></td>
    <td><code>string</code></td>
    <td>The CPU options for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="current_instance_boot_mode" /></td>
    <td><code>string</code></td>
    <td>The boot mode that is used to boot the instance at launch or start. For more information, see Boot modes in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="ebs_optimized" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS Optimized instance.</td>
</tr>
<tr>
    <td><CopyableCode code="elastic_gpu_associations" /></td>
    <td><code>string</code></td>
    <td>Deprecated. Amazon Elastic Graphics reached end of life on January 8, 2024.</td>
</tr>
<tr>
    <td><CopyableCode code="elastic_inference_accelerator_associations" /></td>
    <td><code>string</code></td>
    <td>Deprecated Amazon Elastic Inference is no longer available.</td>
</tr>
<tr>
    <td><CopyableCode code="ena_support" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether enhanced networking with ENA is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="enclave_options" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.</td>
</tr>
<tr>
    <td><CopyableCode code="hibernation_options" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the instance is enabled for hibernation.</td>
</tr>
<tr>
    <td><CopyableCode code="hypervisor" /></td>
    <td><code>string</code></td>
    <td>The hypervisor type of the instance. The value xen is used for both Xen and Nitro hypervisors.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_instance_profile" /></td>
    <td><code>string</code></td>
    <td>The IAM instance profile associated with the instance, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="image_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the AMI used to launch the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_lifecycle" /></td>
    <td><code>string</code></td>
    <td>Indicates whether this is a Spot Instance or a Scheduled Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6_address" /></td>
    <td><code>string</code></td>
    <td>The IPv6 address assigned to the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="kernel_id" /></td>
    <td><code>string</code></td>
    <td>The kernel associated with this instance, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="key_name" /></td>
    <td><code>string</code></td>
    <td>The name of the key pair, if this instance was launched with an associated key pair.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_time" /></td>
    <td><code>string</code></td>
    <td>The time that the instance was last launched. To determine the time that instance was first launched, see the attachment time for the primary network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="licenses" /></td>
    <td><code>string</code></td>
    <td>The license configurations for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_options" /></td>
    <td><code>string</code></td>
    <td>Provides information on the recovery and maintenance options of your instance.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata_options" /></td>
    <td><code>string</code></td>
    <td>The metadata options for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="monitoring" /></td>
    <td><code>string</code></td>
    <td>The monitoring for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="network_interfaces" /></td>
    <td><code>string</code></td>
    <td>The network interfaces for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="network_performance_options" /></td>
    <td><code>string</code></td>
    <td>Contains settings for the network performance options for your instance.</td>
</tr>
<tr>
    <td><CopyableCode code="operator" /></td>
    <td><code>string</code></td>
    <td>The service provider that manages the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Outpost.</td>
</tr>
<tr>
    <td><CopyableCode code="placement" /></td>
    <td><code>string</code></td>
    <td>The location where the instance launched, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The platform. This value is windows for Windows instances; otherwise, it is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="platform_details" /></td>
    <td><code>string</code></td>
    <td>The platform details value for the instance. For more information, see AMI billing information fields in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="private_dns_name" /></td>
    <td><code>string</code></td>
    <td>&#91;IPv4 only&#93; The private DNS hostname name assigned to the instance. This DNS hostname can only be used inside the Amazon EC2 network. This name is not available until the instance enters the running state. The Amazon-provided DNS server resolves Amazon-provided private DNS hostnames if you've enabled DNS resolution and DNS hostnames in your VPC. If you are not using the Amazon-provided DNS server in your VPC, your custom domain name servers must resolve the hostname as appropriate.</td>
</tr>
<tr>
    <td><CopyableCode code="private_dns_name_options" /></td>
    <td><code>string</code></td>
    <td>The options for the instance hostname.</td>
</tr>
<tr>
    <td><CopyableCode code="private_ip_address" /></td>
    <td><code>string</code></td>
    <td>The private IPv4 address assigned to the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="product_codes" /></td>
    <td><code>string</code></td>
    <td>The product codes attached to this instance, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="public_dns_name" /></td>
    <td><code>string</code></td>
    <td>The public DNS name assigned to the instance. This name is not available until the instance enters the running state. This name is only available if you've enabled DNS hostnames for your VPC. The format of this name depends on the public hostname type.</td>
</tr>
<tr>
    <td><CopyableCode code="public_ip_address" /></td>
    <td><code>string</code></td>
    <td>The public IPv4 address, or the Carrier IP address assigned to the instance, if applicable. A Carrier IP address only applies to an instance launched in a subnet associated with a Wavelength Zone.</td>
</tr>
<tr>
    <td><CopyableCode code="ramdisk_id" /></td>
    <td><code>string</code></td>
    <td>The RAM disk associated with this instance, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="root_device_name" /></td>
    <td><code>string</code></td>
    <td>The device name of the root device volume (for example, /dev/sda1).</td>
</tr>
<tr>
    <td><CopyableCode code="root_device_type" /></td>
    <td><code>string</code></td>
    <td>The root device type used by the AMI. The AMI can use an EBS volume or an instance store volume.</td>
</tr>
<tr>
    <td><CopyableCode code="secondary_interfaces" /></td>
    <td><code>string</code></td>
    <td>The secondary interfaces for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="security_groups" /></td>
    <td><code>string</code></td>
    <td>The security groups for the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="source_dest_check" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether source/destination checking is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="spot_instance_request_id" /></td>
    <td><code>string</code></td>
    <td>If the request is a Spot Instance request, the ID of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="sriov_net_support" /></td>
    <td><code>string</code></td>
    <td>Specifies whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="state_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the most recent state transition.</td>
</tr>
<tr>
    <td><CopyableCode code="state_transition_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the most recent state transition. This might be an empty string.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet in which the instance is running.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="tpm_support" /></td>
    <td><code>string</code></td>
    <td>If the instance is configured for NitroTPM support, the value is v2.0. For more information, see NitroTPM in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="usage_operation" /></td>
    <td><code>string</code></td>
    <td>The usage operation value for the instance. For more information, see AMI billing information fields in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="usage_operation_update_time" /></td>
    <td><code>string</code></td>
    <td>The time that the usage operation was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualization_type" /></td>
    <td><code>string</code></td>
    <td>The virtualization type of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC in which the instance is running.</td>
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
    <td><a href="#describe_instances"><CopyableCode code="describe_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-IncludeManagedResources"><code>IncludeManagedResources</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes the specified instances or all instances. If you specify instance IDs, the output includes information for only the specified instances. If you specify filters, the output includes information for only those instances that meet the filter criteria. If you do not specify instance IDs or filters, the output includes information for all instances, which can affect performance. We recommend that you use pagination to ensure that the operation returns quickly and successfully. The response includes SQL license exemption status information for instances registered with the SQL LE service, providing visibility into license exemption configuration and status. If you specify an instance ID that is not valid, an error is returned. If you specify an instance that you do not own, it is not included in the output. Recently terminated instances might appear in the returned results. This interval is usually less than one hour. If you describe instances in the rare case where an Availability Zone is experiencing a service disruption and you specify instance IDs that are in the affected zone, or do not specify any instance IDs at all, the call fails. If you describe instances and specify only instance IDs that are in an unaffected zone, the call works normally. The Amazon EC2 API follows an eventual consistency model. This means that the result of an API command you run that creates or modifies resources might not be immediately available to all subsequent commands you run. For guidance on how to manage eventual consistency, see Eventual consistency in the Amazon EC2 API in the Amazon EC2 Developer Guide. We strongly recommend using only paginated requests. Unpaginated requests are susceptible to throttling and timeouts. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.</td>
</tr>
<tr>
    <td><a href="#create_delegate_mac_volume_ownership_task"><CopyableCode code="create_delegate_mac_volume_ownership_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-MacCredentials"><code>MacCredentials</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Delegates ownership of the Amazon EBS root volume for an Apple silicon Mac instance to an administrative user.</td>
</tr>
<tr>
    <td><a href="#create_mac_system_integrity_protection_modification_task"><CopyableCode code="create_mac_system_integrity_protection_modification_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-MacSystemIntegrityProtectionStatus"><code>MacSystemIntegrityProtectionStatus</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-MacCredentials"><code>MacCredentials</code></a>, <a href="#parameter-MacSystemIntegrityProtectionConfiguration"><code>MacSystemIntegrityProtectionConfiguration</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Creates a System Integrity Protection (SIP) modification task to configure the SIP settings for an x86 Mac instance or Apple silicon Mac instance. For more information, see Configure SIP for Amazon EC2 instances in the Amazon EC2 User Guide. When you configure the SIP settings for your instance, you can either enable or disable all SIP settings, or you can specify a custom SIP configuration that selectively enables or disables specific SIP settings. If you implement a custom configuration, connect to the instance and verify the settings to ensure that your requirements are properly implemented and functioning as intended. SIP configurations might change with macOS updates. We recommend that you review custom SIP settings after any macOS version upgrade to ensure continued compatibility and proper functionality of your security configurations. To enable or disable all SIP settings, use the MacSystemIntegrityProtectionStatus parameter only. For example, to enable all SIP settings, specify the following: MacSystemIntegrityProtectionStatus=enabled To specify a custom configuration that selectively enables or disables specific SIP settings, use the MacSystemIntegrityProtectionStatus parameter to enable or disable all SIP settings, and then use the MacSystemIntegrityProtectionConfiguration parameter to specify exceptions. In this case, the exceptions you specify for MacSystemIntegrityProtectionConfiguration override the value you specify for MacSystemIntegrityProtectionStatus. For example, to enable all SIP settings, except NvramProtections, specify the following: MacSystemIntegrityProtectionStatus=enabled MacSystemIntegrityProtectionConfigurationRequest "NvramProtections=disabled"</td>
</tr>
<tr>
    <td><a href="#run_instances"><CopyableCode code="run_instances" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-MaxCount"><code>MaxCount</code></a>, <a href="#parameter-MinCount"><code>MinCount</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-BlockDeviceMapping"><code>BlockDeviceMapping</code></a>, <a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-InstanceType"><code>InstanceType</code></a>, <a href="#parameter-Ipv6AddressCount"><code>Ipv6AddressCount</code></a>, <a href="#parameter-Ipv6Address"><code>Ipv6Address</code></a>, <a href="#parameter-KernelId"><code>KernelId</code></a>, <a href="#parameter-KeyName"><code>KeyName</code></a>, <a href="#parameter-Monitoring"><code>Monitoring</code></a>, <a href="#parameter-Placement"><code>Placement</code></a>, <a href="#parameter-RamdiskId"><code>RamdiskId</code></a>, <a href="#parameter-SecurityGroupId"><code>SecurityGroupId</code></a>, <a href="#parameter-SecurityGroup"><code>SecurityGroup</code></a>, <a href="#parameter-SubnetId"><code>SubnetId</code></a>, <a href="#parameter-UserData"><code>UserData</code></a>, <a href="#parameter-ElasticGpuSpecification"><code>ElasticGpuSpecification</code></a>, <a href="#parameter-ElasticInferenceAccelerator"><code>ElasticInferenceAccelerator</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-LaunchTemplate"><code>LaunchTemplate</code></a>, <a href="#parameter-InstanceMarketOptions"><code>InstanceMarketOptions</code></a>, <a href="#parameter-CreditSpecification"><code>CreditSpecification</code></a>, <a href="#parameter-CpuOptions"><code>CpuOptions</code></a>, <a href="#parameter-CapacityReservationSpecification"><code>CapacityReservationSpecification</code></a>, <a href="#parameter-HibernationOptions"><code>HibernationOptions</code></a>, <a href="#parameter-LicenseSpecification"><code>LicenseSpecification</code></a>, <a href="#parameter-MetadataOptions"><code>MetadataOptions</code></a>, <a href="#parameter-EnclaveOptions"><code>EnclaveOptions</code></a>, <a href="#parameter-PrivateDnsNameOptions"><code>PrivateDnsNameOptions</code></a>, <a href="#parameter-MaintenanceOptions"><code>MaintenanceOptions</code></a>, <a href="#parameter-DisableApiStop"><code>DisableApiStop</code></a>, <a href="#parameter-EnablePrimaryIpv6"><code>EnablePrimaryIpv6</code></a>, <a href="#parameter-NetworkPerformanceOptions"><code>NetworkPerformanceOptions</code></a>, <a href="#parameter-Operator"><code>Operator</code></a>, <a href="#parameter-SecondaryInterface"><code>SecondaryInterface</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-DisableApiTermination"><code>DisableApiTermination</code></a>, <a href="#parameter-InstanceInitiatedShutdownBehavior"><code>InstanceInitiatedShutdownBehavior</code></a>, <a href="#parameter-PrivateIpAddress"><code>PrivateIpAddress</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-AdditionalInfo"><code>AdditionalInfo</code></a>, <a href="#parameter-NetworkInterface"><code>NetworkInterface</code></a>, <a href="#parameter-IamInstanceProfile"><code>IamInstanceProfile</code></a>, <a href="#parameter-EbsOptimized"><code>EbsOptimized</code></a></td>
    <td>Launches the specified number of instances using an AMI for which you have permissions. You can specify a number of options, or leave the default options. The following rules apply: If you don't specify a subnet ID, we choose a default subnet from your default VPC for you. If you don't have a default VPC, you must specify a subnet ID in the request. All instances have a network interface with a primary private IPv4 address. If you don't specify this address, we choose one from the IPv4 range of your subnet. Not all instance types support IPv6 addresses. For more information, see Instance types. If you don't specify a security group ID, we use the default security group for the VPC. For more information, see Security groups. If any of the AMIs have a product code attached for which the user has not subscribed, the request fails. You can create a launch template, which is a resource that contains the parameters to launch an instance. When you launch an instance using RunInstances, you can specify the launch template instead of specifying the launch parameters. To ensure faster instance launches, break up large requests into smaller batches. For example, create five separate launch requests for 100 instances each instead of one launch request for 500 instances. RunInstances is subject to both request rate limiting and resource rate limiting. For more information, see Request throttling. An instance is ready for you to use when it's in the running state. You can check the state of your instance using DescribeInstances. You can tag instances and EBS volumes during launch, after launch, or both. For more information, see CreateTags and Tagging your Amazon EC2 resources. Linux instances have access to the public key of the key pair at boot. You can use this key to provide secure access to the instance. Amazon EC2 public images use this feature to provide secure access without passwords. For more information, see Key pairs. For troubleshooting, see What to do if an instance immediately terminates, and Troubleshooting connecting to your instance.</td>
</tr>
<tr>
    <td><a href="#modify_instance_event_start_time"><CopyableCode code="modify_instance_event_start_time" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-InstanceEventId"><code>InstanceEventId</code></a>, <a href="#parameter-NotBefore"><code>NotBefore</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the start time for a scheduled Amazon EC2 instance event.</td>
</tr>
<tr>
    <td><a href="#modify_instance_capacity_reservation_attributes"><CopyableCode code="modify_instance_capacity_reservation_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-CapacityReservationSpecification"><code>CapacityReservationSpecification</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the Capacity Reservation settings for a stopped instance. Use this action to configure an instance to target a specific Capacity Reservation, run in any open Capacity Reservation with matching attributes, run in On-Demand Instance capacity, or only run in a Capacity Reservation.</td>
</tr>
<tr>
    <td><a href="#modify_instance_network_performance_options"><CopyableCode code="modify_instance_network_performance_options" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-BandwidthWeighting"><code>BandwidthWeighting</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Change the configuration of the network performance options for an existing instance.</td>
</tr>
<tr>
    <td><a href="#modify_instance_cpu_options"><CopyableCode code="modify_instance_cpu_options" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CoreCount"><code>CoreCount</code></a>, <a href="#parameter-ThreadsPerCore"><code>ThreadsPerCore</code></a>, <a href="#parameter-NestedVirtualization"><code>NestedVirtualization</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>By default, all vCPUs for the instance type are active when you launch an instance. When you configure the number of active vCPUs for the instance, it can help you save on licensing costs and optimize performance. The base cost of the instance remains unchanged. The number of active vCPUs equals the number of threads per CPU core multiplied by the number of cores. The instance must be in a Stopped state before you make changes. Some instance type options do not support this capability. For more information, see Supported CPU options in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#terminate_instances"><CopyableCode code="terminate_instances" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Force"><code>Force</code></a>, <a href="#parameter-SkipOsShutdown"><code>SkipOsShutdown</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Terminates (deletes) the specified instances. This operation is idempotent; if you terminate an instance more than once, each call succeeds. Terminating an instance is permanent and irreversible. After you terminate an instance, you can no longer connect to it, and it can't be recovered. All attached Amazon EBS volumes that are configured to be deleted on termination are also permanently deleted and can't be recovered. All data stored on instance store volumes is permanently lost. For more information, see How instance termination works. Before you terminate an instance, ensure that you have backed up all data that you need to retain after the termination to persistent storage. If you specify multiple instances and the request fails (for example, because of a single incorrect instance ID), none of the instances are terminated. If you terminate multiple instances across multiple Availability Zones, and one or more of the specified instances are enabled for termination protection, the request fails with the following results: The specified instances that are in the same Availability Zone as the protected instance are not terminated. The specified instances that are in different Availability Zones, where no other specified instances are protected, are successfully terminated. For example, say you have the following instances: Instance A: us-east-1a; Not protected Instance B: us-east-1a; Not protected Instance C: us-east-1b; Protected Instance D: us-east-1b; not protected If you attempt to terminate all of these instances in the same request, the request reports failure with the following results: Instance A and Instance B are successfully terminated because none of the specified instances in us-east-1a are enabled for termination protection. Instance C and Instance D fail to terminate because at least one of the specified instances in us-east-1b (Instance C) is enabled for termination protection. Terminated instances remain visible after termination (for approximately one hour). By default, Amazon EC2 deletes all EBS volumes that were attached when the instance launched. Volumes attached after instance launch continue running. By default, the TerminateInstances operation includes a graceful operating system (OS) shutdown. To bypass the graceful shutdown, use the skipOsShutdown parameter; however, this might risk data integrity. You can stop, start, and terminate EBS-backed instances. You can only terminate instance store-backed instances. What happens to an instance differs if you stop or terminate it. For example, when you stop an instance, the root device and any other devices attached to the instance persist. When you terminate an instance, any attached EBS volumes with the DeleteOnTermination block device mapping parameter set to true are automatically deleted. For more information about the differences between stopping and terminating instances, see Amazon EC2 instance state changes in the Amazon EC2 User Guide. When you terminate an instance, we attempt to terminate it forcibly after a short while. If your instance appears stuck in the shutting-down state after a period of time, there might be an issue with the underlying host computer. For more information about terminating and troubleshooting terminating your instances, see Terminate Amazon EC2 instances and Troubleshooting terminating your instance in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#bundle_instance"><CopyableCode code="bundle_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Storage"><code>Storage</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Bundles an Amazon instance store-backed Windows instance. During bundling, only the root device volume (C:\) is bundled. Data on other instance store volumes is not preserved. This action is no longer supported. To create an AMI, use CreateImage. For more information, see Create an Amazon EBS-backed AMI in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#confirm_product_instance"><CopyableCode code="confirm_product_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ProductCode"><code>ProductCode</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Determines whether a product code is associated with an instance. This action can only be used by the owner of the product code. It is useful when a product code owner must verify whether another user's instance is eligible for support.</td>
</tr>
<tr>
    <td><a href="#disable_instance_sql_ha_standby_detections"><CopyableCode code="disable_instance_sql_ha_standby_detections" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disable Amazon EC2 instances running in an SQL Server High Availability cluster from SQL Server High Availability instance standby detection monitoring. Once disabled, Amazon Web Services no longer monitors the metadata for the instances to determine whether they are active or standby nodes in the SQL Server High Availability cluster.</td>
</tr>
<tr>
    <td><a href="#enable_instance_sql_ha_standby_detections"><CopyableCode code="enable_instance_sql_ha_standby_detections" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SqlServerCredentials"><code>SqlServerCredentials</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Enable Amazon EC2 instances running in an SQL Server High Availability cluster for SQL Server High Availability instance standby detection monitoring. Once enabled, Amazon Web Services monitors the metadata for the instances to determine whether they are active or standby nodes in the SQL Server High Availability cluster. If the instances are determined to be standby failover nodes, Amazon Web Services automatically applies SQL Server licensing fee waiver for those instances. To register an instance, it must be running a Windows SQL Server license-included AMI and have the Amazon Web Services Systems Manager agent installed and running. Only Windows Server 2019 and later and SQL Server (Standard and Enterprise editions) 2017 and later are supported. For more information, see Prerequisites for using SQL Server High Availability instance standby detection.</td>
</tr>
<tr>
    <td><a href="#modify_instance_maintenance_options"><CopyableCode code="modify_instance_maintenance_options" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AutoRecovery"><code>AutoRecovery</code></a>, <a href="#parameter-RebootMigration"><code>RebootMigration</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the recovery behavior of your instance to disable simplified automatic recovery or set the recovery behavior to default. The default configuration will not enable simplified automatic recovery for an unsupported instance type. For more information, see Simplified automatic recovery. Modifies the reboot migration behavior during a user-initiated reboot of an instance that has a pending system-reboot event. For more information, see Enable or disable reboot migration.</td>
</tr>
<tr>
    <td><a href="#modify_instance_metadata_options"><CopyableCode code="modify_instance_metadata_options" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-HttpTokens"><code>HttpTokens</code></a>, <a href="#parameter-HttpPutResponseHopLimit"><code>HttpPutResponseHopLimit</code></a>, <a href="#parameter-HttpEndpoint"><code>HttpEndpoint</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-HttpProtocolIpv6"><code>HttpProtocolIpv6</code></a>, <a href="#parameter-InstanceMetadataTags"><code>InstanceMetadataTags</code></a></td>
    <td>Modify the instance metadata parameters on a running or stopped instance. When you modify the parameters on a stopped instance, they are applied when the instance is started. When you modify the parameters on a running instance, the API responds with a state of “pending”. After the parameter modifications are successfully applied to the instance, the state of the modifications changes from “pending” to “applied” in subsequent describe-instances API calls. For more information, see Instance metadata and user data in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_instance_placement"><CopyableCode code="modify_instance_placement" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-PartitionNumber"><code>PartitionNumber</code></a>, <a href="#parameter-HostResourceGroupArn"><code>HostResourceGroupArn</code></a>, <a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-Tenancy"><code>Tenancy</code></a>, <a href="#parameter-Affinity"><code>Affinity</code></a>, <a href="#parameter-HostId"><code>HostId</code></a></td>
    <td>Modifies the placement attributes for a specified instance. You can do the following: Modify the affinity between an instance and a Dedicated Host. When affinity is set to host and the instance is not associated with a specific Dedicated Host, the next time the instance is started, it is automatically associated with the host on which it lands. If the instance is restarted or rebooted, this relationship persists. Change the Dedicated Host with which an instance is associated. Change the instance tenancy of an instance. Move an instance to or from a placement group. At least one attribute for affinity, host ID, tenancy, or placement group name must be specified in the request. Affinity and tenancy can be modified in the same request. To modify the host ID, tenancy, placement group, or partition for an instance, the instance must be in the stopped state.</td>
</tr>
<tr>
    <td><a href="#modify_private_dns_name_options"><CopyableCode code="modify_private_dns_name_options" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-PrivateDnsHostnameType"><code>PrivateDnsHostnameType</code></a>, <a href="#parameter-EnableResourceNameDnsARecord"><code>EnableResourceNameDnsARecord</code></a>, <a href="#parameter-EnableResourceNameDnsAAAARecord"><code>EnableResourceNameDnsAAAARecord</code></a></td>
    <td>Modifies the options for instance hostnames for the specified instance.</td>
</tr>
<tr>
    <td><a href="#monitor_instances"><CopyableCode code="monitor_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Enables detailed monitoring for a running instance. Otherwise, basic monitoring is enabled. For more information, see Monitor your instances using CloudWatch in the Amazon EC2 User Guide. To disable detailed monitoring, see UnmonitorInstances.</td>
</tr>
<tr>
    <td><a href="#move_capacity_reservation_instances"><CopyableCode code="move_capacity_reservation_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SourceCapacityReservationId"><code>SourceCapacityReservationId</code></a>, <a href="#parameter-DestinationCapacityReservationId"><code>DestinationCapacityReservationId</code></a>, <a href="#parameter-InstanceCount"><code>InstanceCount</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Move available capacity from a source Capacity Reservation to a destination Capacity Reservation. The source Capacity Reservation and the destination Capacity Reservation must be active, owned by your Amazon Web Services account, and share the following: Instance type Platform Availability Zone Tenancy Placement group Capacity Reservation end time - At specific time or Manually.</td>
</tr>
<tr>
    <td><a href="#reboot_instances"><CopyableCode code="reboot_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Requests a reboot of the specified instances. This operation is asynchronous; it only queues a request to reboot the specified instances. The operation succeeds if the instances are valid and belong to you. Requests to reboot terminated instances are ignored. If an instance does not cleanly shut down within a few minutes, Amazon EC2 performs a hard reboot. For more information about troubleshooting, see Troubleshoot an unreachable instance in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#request_spot_instances"><CopyableCode code="request_spot_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LaunchSpecification"><code>LaunchSpecification</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-InstanceInterruptionBehavior"><code>InstanceInterruptionBehavior</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-SpotPrice"><code>SpotPrice</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-InstanceCount"><code>InstanceCount</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-ValidFrom"><code>ValidFrom</code></a>, <a href="#parameter-ValidUntil"><code>ValidUntil</code></a>, <a href="#parameter-LaunchGroup"><code>LaunchGroup</code></a>, <a href="#parameter-AvailabilityZoneGroup"><code>AvailabilityZoneGroup</code></a>, <a href="#parameter-BlockDurationMinutes"><code>BlockDurationMinutes</code></a></td>
    <td>Creates a Spot Instance request. For more information, see Work with Spot Instance in the Amazon EC2 User Guide. We strongly discourage using the RequestSpotInstances API because it is a legacy API with no planned investment. For options for requesting Spot Instances, see Which is the best Spot request method to use? in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#reset_instance_attribute"><CopyableCode code="reset_instance_attribute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-Attribute"><code>Attribute</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Resets an attribute of an instance to its default value. To reset the kernel or ramdisk, the instance must be in a stopped state. To reset the sourceDestCheck, the instance can be either running or stopped. The sourceDestCheck attribute controls whether source/destination checking is enabled. The default value is true, which means checking is enabled. This value must be false for a NAT instance to perform NAT. For more information, see NAT instances in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#send_diagnostic_interrupt"><CopyableCode code="send_diagnostic_interrupt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Sends a diagnostic interrupt to the specified Amazon EC2 instance to trigger a kernel panic (on Linux instances), or a blue screen/stop error (on Windows instances). For instances based on Intel and AMD processors, the interrupt is received as a non-maskable interrupt (NMI). In general, the operating system crashes and reboots when a kernel panic or stop error is triggered. The operating system can also be configured to perform diagnostic tasks, such as generating a memory dump file, loading a secondary kernel, or obtaining a call trace. Before sending a diagnostic interrupt to your instance, ensure that its operating system is configured to perform the required diagnostic tasks. For more information about configuring your operating system to generate a crash dump when a kernel panic or stop error occurs, see Send a diagnostic interrupt (for advanced users) in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#start_instances"><CopyableCode code="start_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AdditionalInfo"><code>AdditionalInfo</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Starts an Amazon EBS-backed instance that you've previously stopped. Instances that use Amazon EBS volumes as their root devices can be quickly stopped and started. When an instance is stopped, the compute resources are released and you are not billed for instance usage. However, your root partition Amazon EBS volume remains and continues to persist your data, and you are charged for Amazon EBS volume usage. You can restart your instance at any time. Every time you start your instance, Amazon EC2 charges a one-minute minimum for instance usage, and thereafter charges per second for instance usage. Before stopping an instance, make sure it is in a state from which it can be restarted. Stopping an instance does not preserve data stored in RAM. Performing this operation on an instance that uses an instance store as its root device returns an error. If you attempt to start a T3 instance with host tenancy and the unlimited CPU credit option, the request fails. The unlimited CPU credit option is not supported on Dedicated Hosts. Before you start the instance, either change its CPU credit option to standard, or change its tenancy to default or dedicated. For more information, see Stop and start Amazon EC2 instances in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#stop_instances"><CopyableCode code="stop_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Hibernate"><code>Hibernate</code></a>, <a href="#parameter-SkipOsShutdown"><code>SkipOsShutdown</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Force"><code>Force</code></a></td>
    <td>Stops an Amazon EBS-backed instance. You can restart your instance at any time using the StartInstances API. For more information, see Stop and start Amazon EC2 instances in the Amazon EC2 User Guide. When you stop or hibernate an instance, we shut it down. By default, this includes a graceful operating system (OS) shutdown. To bypass the graceful shutdown, use the skipOsShutdown parameter; however, this might risk data integrity. You can use the StopInstances operation together with the Hibernate parameter to hibernate an instance if the instance is enabled for hibernation and meets the hibernation prerequisites. Stopping an instance doesn't preserve data stored in RAM, while hibernation does. If hibernation fails, a normal shutdown occurs. For more information, see Hibernate your Amazon EC2 instance in the Amazon EC2 User Guide. If your instance appears stuck in the stopping state, there might be an issue with the underlying host computer. You can use the StopInstances operation together with the Force parameter to force stop your instance. For more information, see Troubleshoot Amazon EC2 instance stop issues in the Amazon EC2 User Guide. Stopping and hibernating an instance differs from rebooting or terminating it. For example, a stopped or hibernated instance retains its root volume and any data volumes, unlike terminated instances where these volumes are automatically deleted. For more information about the differences between stopping, hibernating, rebooting, and terminating instances, see Amazon EC2 instance state changes in the Amazon EC2 User Guide. We don't charge for instance usage or data transfer fees when an instance is stopped. However, the root volume and any data volumes remain and continue to persist your data, and you're charged for volume usage. Every time you start your instance, Amazon EC2 charges a one-minute minimum for instance usage, followed by per-second billing. You can't stop or hibernate instance store-backed instances.</td>
</tr>
<tr>
    <td><a href="#unmonitor_instances"><CopyableCode code="unmonitor_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disables detailed monitoring for a running instance. For more information, see Monitoring your instances and volumes in the Amazon EC2 User Guide.</td>
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
    <td>The attribute to reset. You can only reset the following attributes: kernel | ramdisk | sourceDestCheck.</td>
</tr>
<tr id="parameter-BandwidthWeighting">
    <td><CopyableCode code="BandwidthWeighting" /></td>
    <td><code>string</code></td>
    <td>Specify the bandwidth weighting option to boost the associated type of baseline bandwidth, as follows: default This option uses the standard bandwidth configuration for your instance type. vpc-1 This option boosts your networking baseline bandwidth and reduces your EBS baseline bandwidth. ebs-1 This option boosts your EBS baseline bandwidth and reduces your networking baseline bandwidth.</td>
</tr>
<tr id="parameter-CapacityReservationSpecification">
    <td><CopyableCode code="CapacityReservationSpecification" /></td>
    <td><code>object</code></td>
    <td>Information about the Capacity Reservation targeting option.</td>
</tr>
<tr id="parameter-DestinationCapacityReservationId">
    <td><CopyableCode code="DestinationCapacityReservationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Reservation that you want to move capacity into.</td>
</tr>
<tr id="parameter-InstanceCount">
    <td><CopyableCode code="InstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of instances that you want to move from the source Capacity Reservation.</td>
</tr>
<tr id="parameter-InstanceEventId">
    <td><CopyableCode code="InstanceEventId" /></td>
    <td><code>string</code></td>
    <td>The ID of the event whose date and time you are modifying.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the instances.</td>
</tr>
<tr id="parameter-MacCredentials">
    <td><CopyableCode code="MacCredentials" /></td>
    <td><code>string</code></td>
    <td>Specifies the following credentials: Internal disk administrative user Username - Only the default administrative user (aws-managed-user) is supported and it is used by default. You can't specify a different administrative user. Password - If you did not change the default password for aws-managed-user, specify the default password, which is blank. Otherwise, specify your password. Amazon EBS root volume administrative user Username - If you did not change the default administrative user, specify ec2-user. Otherwise, specify the username for your administrative user. Password - Specify the password for the administrative user. The credentials must be specified in the following JSON format: &#123; "internalDiskPassword":"internal-disk-admin_password", "rootVolumeUsername":"root-volume-admin_username", "rootVolumepassword":"root-volume-admin_password" &#125;</td>
</tr>
<tr id="parameter-MacSystemIntegrityProtectionStatus">
    <td><CopyableCode code="MacSystemIntegrityProtectionStatus" /></td>
    <td><code>string</code></td>
    <td>Specifies the overall SIP status for the instance. To enable all SIP settings, specify enabled. To disable all SIP settings, specify disabled.</td>
</tr>
<tr id="parameter-MaxCount">
    <td><CopyableCode code="MaxCount" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of instances to launch. If you specify a value that is more capacity than Amazon EC2 can launch in the target Availability Zone, Amazon EC2 launches the largest possible number of instances above the specified minimum count. Constraints: Between 1 and the quota for the specified instance type for your account for this Region. For more information, see Amazon EC2 instance type quotas.</td>
</tr>
<tr id="parameter-MinCount">
    <td><CopyableCode code="MinCount" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of instances to launch. If you specify a value that is more capacity than Amazon EC2 can provide in the target Availability Zone, Amazon EC2 does not launch any instances. Constraints: Between 1 and the quota for the specified instance type for your account for this Region. For more information, see Amazon EC2 instance type quotas.</td>
</tr>
<tr id="parameter-NotBefore">
    <td><CopyableCode code="NotBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>The new date and time when the event will take place.</td>
</tr>
<tr id="parameter-ProductCode">
    <td><CopyableCode code="ProductCode" /></td>
    <td><code>string</code></td>
    <td>The product code. This must be a product code that you own.</td>
</tr>
<tr id="parameter-SourceCapacityReservationId">
    <td><CopyableCode code="SourceCapacityReservationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Reservation from which you want to move capacity.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AdditionalInfo">
    <td><CopyableCode code="AdditionalInfo" /></td>
    <td><code>string</code></td>
    <td>Reserved.</td>
</tr>
<tr id="parameter-Affinity">
    <td><CopyableCode code="Affinity" /></td>
    <td><code>string</code></td>
    <td>The affinity setting for the instance. For more information, see Host affinity in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-AutoRecovery">
    <td><CopyableCode code="AutoRecovery" /></td>
    <td><code>string</code></td>
    <td>Disables the automatic recovery behavior of your instance or sets it to default.</td>
</tr>
<tr id="parameter-AvailabilityZoneGroup">
    <td><CopyableCode code="AvailabilityZoneGroup" /></td>
    <td><code>string</code></td>
    <td>The user-specified name for a logical grouping of requests. When you specify an Availability Zone group in a Spot Instance request, all Spot Instances in the request are launched in the same Availability Zone. Instance proximity is maintained with this parameter, but the choice of Availability Zone is not. The group applies only to requests for Spot Instances of the same instance type. Any additional Spot Instance requests that are specified with the same Availability Zone group name are launched in that same Availability Zone, as long as at least one instance from the group is still active. If there is no active instance running in the Availability Zone group that you specify for a new Spot Instance request (all instances are terminated, the request is expired, or the maximum price you specified falls below current Spot price), then Amazon EC2 launches the instance in any Availability Zone where the constraint can be met. Consequently, the subsequent set of Spot Instances could be placed in a different zone from the original request, even if you specified the same Availability Zone group. Default: Instances are launched in any available Availability Zone.</td>
</tr>
<tr id="parameter-BlockDeviceMapping">
    <td><CopyableCode code="BlockDeviceMapping" /></td>
    <td><code>array</code></td>
    <td>The block device mapping, which defines the EBS volumes and instance store volumes to attach to the instance at launch. For more information, see Block device mappings in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-BlockDurationMinutes">
    <td><CopyableCode code="BlockDurationMinutes" /></td>
    <td><code>integer</code></td>
    <td>Deprecated.</td>
</tr>
<tr id="parameter-CapacityReservationSpecification">
    <td><CopyableCode code="CapacityReservationSpecification" /></td>
    <td><code>object</code></td>
    <td>Information about the Capacity Reservation targeting option. If you do not specify this parameter, the instance's Capacity Reservation preference defaults to open, which enables it to run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone, and tenancy).</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring idempotency in Amazon EC2 API requests in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-CoreCount">
    <td><CopyableCode code="CoreCount" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores to activate for the specified instance.</td>
</tr>
<tr id="parameter-CpuOptions">
    <td><CopyableCode code="CpuOptions" /></td>
    <td><code>object</code></td>
    <td>The CPU options for the instance. For more information, see Optimize CPU options in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-CreditSpecification">
    <td><CopyableCode code="CreditSpecification" /></td>
    <td><code>object</code></td>
    <td>The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited. To change this attribute after launch, use ModifyInstanceCreditSpecification. For more information, see Burstable performance instances in the Amazon EC2 User Guide. Default: standard (T2 instances) or unlimited (T3/T3a/T4g instances) For T3 instances with host tenancy, only standard is supported.</td>
</tr>
<tr id="parameter-DisableApiStop">
    <td><CopyableCode code="DisableApiStop" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether an instance is enabled for stop protection. For more information, see Enable stop protection for your EC2 instances.</td>
</tr>
<tr id="parameter-DisableApiTermination">
    <td><CopyableCode code="DisableApiTermination" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether termination protection is enabled for the instance. The default is false, which means that you can terminate the instance using the Amazon EC2 console, command line tools, or API. You can enable termination protection when you launch an instance, while the instance is running, or while the instance is stopped.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EbsOptimized">
    <td><CopyableCode code="EbsOptimized" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance. Default: false</td>
</tr>
<tr id="parameter-ElasticGpuSpecification">
    <td><CopyableCode code="ElasticGpuSpecification" /></td>
    <td><code>array</code></td>
    <td>An elastic GPU to associate with the instance. Amazon Elastic Graphics reached end of life on January 8, 2024.</td>
</tr>
<tr id="parameter-ElasticInferenceAccelerator">
    <td><CopyableCode code="ElasticInferenceAccelerator" /></td>
    <td><code>array</code></td>
    <td>An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available.</td>
</tr>
<tr id="parameter-EnablePrimaryIpv6">
    <td><CopyableCode code="EnablePrimaryIpv6" /></td>
    <td><code>boolean</code></td>
    <td>If you’re launching an instance into a dual-stack or IPv6-only subnet, you can enable assigning a primary IPv6 address. A primary IPv6 address is an IPv6 GUA address associated with an ENI that you have enabled to use a primary IPv6 address. Use this option if an instance relies on its IPv6 address not changing. When you launch the instance, Amazon Web Services will automatically assign an IPv6 address associated with the ENI attached to your instance to be the primary IPv6 address. Once you enable an IPv6 GUA address to be a primary IPv6, you cannot disable it. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. If you have multiple IPv6 addresses associated with an ENI attached to your instance and you enable a primary IPv6 address, the first IPv6 GUA address associated with the ENI becomes the primary IPv6 address.</td>
</tr>
<tr id="parameter-EnableResourceNameDnsAAAARecord">
    <td><CopyableCode code="EnableResourceNameDnsAAAARecord" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.</td>
</tr>
<tr id="parameter-EnableResourceNameDnsARecord">
    <td><CopyableCode code="EnableResourceNameDnsARecord" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to respond to DNS queries for instance hostnames with DNS A records.</td>
</tr>
<tr id="parameter-EnclaveOptions">
    <td><CopyableCode code="EnclaveOptions" /></td>
    <td><code>object</code></td>
    <td>Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more information, see Amazon Web Services Nitro Enclaves User Guide. You can't enable Amazon Web Services Nitro Enclaves and hibernation on the same instance.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. affinity - The affinity setting for an instance running on a Dedicated Host (default | host). architecture - The instance architecture (i386 | x86_64 | arm64). availability-zone - The Availability Zone of the instance. availability-zone-id - The ID of the Availability Zone of the instance. block-device-mapping.attach-time - The attach time for an EBS volume mapped to the instance, for example, 2022-09-15T17:15:20.000Z. block-device-mapping.delete-on-termination - A Boolean that indicates whether the EBS volume is deleted on instance termination. block-device-mapping.device-name - The device name specified in the block device mapping (for example, /dev/sdh or xvdh). block-device-mapping.status - The status for the EBS volume (attaching | attached | detaching | detached). block-device-mapping.volume-id - The volume ID of the EBS volume. boot-mode - The boot mode that was specified by the AMI (legacy-bios | uefi | uefi-preferred). capacity-reservation-id - The ID of the Capacity Reservation into which the instance was launched. capacity-reservation-specification.capacity-reservation-preference - The instance's Capacity Reservation preference (open | none). capacity-reservation-specification.capacity-reservation-target.capacity-reservation-id - The ID of the targeted Capacity Reservation. capacity-reservation-specification.capacity-reservation-target.capacity-reservation-resource-group-arn - The ARN of the targeted Capacity Reservation group. client-token - The idempotency token you provided when you launched the instance. current-instance-boot-mode - The boot mode that is used to launch the instance at launch or start (legacy-bios | uefi). dns-name - The public DNS name of the instance. ebs-optimized - A Boolean that indicates whether the instance is optimized for Amazon EBS I/O. ena-support - A Boolean that indicates whether the instance is enabled for enhanced networking with ENA. enclave-options.enabled - A Boolean that indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. hibernation-options.configured - A Boolean that indicates whether the instance is enabled for hibernation. A value of true means that the instance is enabled for hibernation. host-id - The ID of the Dedicated Host on which the instance is running, if applicable. hypervisor - The hypervisor type of the instance (ovm | xen). The value xen is used for both Xen and Nitro hypervisors. iam-instance-profile.arn - The instance profile associated with the instance. Specified as an ARN. iam-instance-profile.id - The instance profile associated with the instance. Specified as an ID. image-id - The ID of the image used to launch the instance. instance-id - The ID of the instance. instance-lifecycle - Indicates whether this is a Spot Instance, a Scheduled Instance, or a Capacity Block (spot | scheduled | capacity-block). instance-state-code - The state of the instance, as a 16-bit unsigned integer. The high byte is used for internal purposes and should be ignored. The low byte is set based on the state represented. The valid values are: 0 (pending), 16 (running), 32 (shutting-down), 48 (terminated), 64 (stopping), and 80 (stopped). instance-state-name - The state of the instance (pending | running | shutting-down | terminated | stopping | stopped). instance-type - The type of instance (for example, t2.micro). instance.group-id - The ID of the security group for the instance. instance.group-name - The name of the security group for the instance. ip-address - The public IPv4 address of the instance. ipv6-address - The IPv6 address of the instance. kernel-id - The kernel ID. key-name - The name of the key pair used when the instance was launched. launch-index - When launching multiple instances, this is the index for the instance in the launch group (for example, 0, 1, 2, and so on). launch-time - The time when the instance was launched, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example, 2021-09-29T11:04:43.305Z. You can use a wildcard (*), for example, 2021-09-29T*, which matches an entire day. maintenance-options.auto-recovery - The current automatic recovery behavior of the instance (disabled | default). metadata-options.http-endpoint - The status of access to the HTTP metadata endpoint on your instance (enabled | disabled) metadata-options.http-protocol-ipv4 - Indicates whether the IPv4 endpoint is enabled (disabled | enabled). metadata-options.http-protocol-ipv6 - Indicates whether the IPv6 endpoint is enabled (disabled | enabled). metadata-options.http-put-response-hop-limit - The HTTP metadata request put response hop limit (integer, possible values 1 to 64) metadata-options.http-tokens - The metadata request authorization state (optional | required) metadata-options.instance-metadata-tags - The status of access to instance tags from the instance metadata (enabled | disabled) metadata-options.state - The state of the metadata option changes (pending | applied). monitoring-state - Indicates whether detailed monitoring is enabled (disabled | enabled). network-interface.addresses.association.allocation-id - The allocation ID. network-interface.addresses.association.association-id - The association ID. network-interface.addresses.association.carrier-ip - The carrier IP address. network-interface.addresses.association.customer-owned-ip - The customer-owned IP address. network-interface.addresses.association.ip-owner-id - The owner ID of the private IPv4 address associated with the network interface. network-interface.addresses.association.public-dns-name - The public DNS name. network-interface.addresses.association.public-ip - The ID of the association of an Elastic IP address (IPv4) with a network interface. network-interface.addresses.primary - Specifies whether the IPv4 address of the network interface is the primary private IPv4 address. network-interface.addresses.private-dns-name - The private DNS name. network-interface.addresses.private-ip-address - The private IPv4 address associated with the network interface. network-interface.association.allocation-id - The allocation ID returned when you allocated the Elastic IP address (IPv4) for your network interface. network-interface.association.association-id - The association ID returned when the network interface was associated with an IPv4 address. network-interface.association.carrier-ip - The customer-owned IP address. network-interface.association.customer-owned-ip - The customer-owned IP address. network-interface.association.ip-owner-id - The owner of the Elastic IP address (IPv4) associated with the network interface. network-interface.association.public-dns-name - The public DNS name. network-interface.association.public-ip - The address of the Elastic IP address (IPv4) bound to the network interface. network-interface.attachment.attach-time - The time that the network interface was attached to an instance. network-interface.attachment.attachment-id - The ID of the interface attachment. network-interface.attachment.delete-on-termination - Specifies whether the attachment is deleted when an instance is terminated. network-interface.attachment.device-index - The device index to which the network interface is attached. network-interface.attachment.instance-id - The ID of the instance to which the network interface is attached. network-interface.attachment.instance-owner-id - The owner ID of the instance to which the network interface is attached. network-interface.attachment.network-card-index - The index of the network card. network-interface.attachment.status - The status of the attachment (attaching | attached | detaching | detached). network-interface.availability-zone - The Availability Zone for the network interface. network-interface.deny-all-igw-traffic - A Boolean that indicates whether a network interface with an IPv6 address is unreachable from the public internet. network-interface.description - The description of the network interface. network-interface.group-id - The ID of a security group associated with the network interface. network-interface.group-name - The name of a security group associated with the network interface. network-interface.ipv4-prefixes.ipv4-prefix - The IPv4 prefixes that are assigned to the network interface. network-interface.ipv6-address - The IPv6 address associated with the network interface. network-interface.ipv6-addresses.ipv6-address - The IPv6 address associated with the network interface. network-interface.ipv6-addresses.is-primary-ipv6 - A Boolean that indicates whether this is the primary IPv6 address. network-interface.ipv6-native - A Boolean that indicates whether this is an IPv6 only network interface. network-interface.ipv6-prefixes.ipv6-prefix - The IPv6 prefix assigned to the network interface. network-interface.mac-address - The MAC address of the network interface. network-interface.network-interface-id - The ID of the network interface. network-interface.operator.managed - A Boolean that indicates whether the instance has a managed network interface. network-interface.operator.principal - The principal that manages the network interface. Only valid for instances with managed network interfaces, where managed is true. network-interface.outpost-arn - The ARN of the Outpost. network-interface.owner-id - The ID of the owner of the network interface. network-interface.private-dns-name - The private DNS name of the network interface. network-interface.private-ip-address - The private IPv4 address. network-interface.public-dns-name - The public DNS name. network-interface.requester-id - The requester ID for the network interface. network-interface.requester-managed - Indicates whether the network interface is being managed by Amazon Web Services. network-interface.status - The status of the network interface (available) | in-use). network-interface.source-dest-check - Whether the network interface performs source/destination checking. A value of true means that checking is enabled, and false means that checking is disabled. The value must be false for the network interface to perform network address translation (NAT) in your VPC. network-interface.subnet-id - The ID of the subnet for the network interface. network-interface.tag-key - The key of a tag assigned to the network interface. network-interface.tag-value - The value of a tag assigned to the network interface. network-interface.vpc-id - The ID of the VPC for the network interface. network-performance-options.bandwidth-weighting - Where the performance boost is applied, if applicable. Valid values: default, vpc-1, ebs-1. operator.managed - A Boolean that indicates whether this is a managed instance. operator.principal - The principal that manages the instance. Only valid for managed instances, where managed is true. outpost-arn - The Amazon Resource Name (ARN) of the Outpost. owner-id - The Amazon Web Services account ID of the instance owner. placement-group-name - The name of the placement group for the instance. placement-partition-number - The partition in which the instance is located. platform - The platform. To list only Windows instances, use windows. platform-details - The platform (Linux/UNIX | Red Hat BYOL Linux | Red Hat Enterprise Linux | Red Hat Enterprise Linux with HA | Red Hat Enterprise Linux with High Availability | Red Hat Enterprise Linux with SQL Server Standard and HA | Red Hat Enterprise Linux with SQL Server Enterprise and HA | Red Hat Enterprise Linux with SQL Server Standard | Red Hat Enterprise Linux with SQL Server Web | Red Hat Enterprise Linux with SQL Server Enterprise | SQL Server Enterprise | SQL Server Standard | SQL Server Web | SUSE Linux | Ubuntu Pro | Windows | Windows BYOL | Windows with SQL Server Enterprise | Windows with SQL Server Standard | Windows with SQL Server Web). private-dns-name - The private IPv4 DNS name of the instance. private-dns-name-options.enable-resource-name-dns-a-record - A Boolean that indicates whether to respond to DNS queries for instance hostnames with DNS A records. private-dns-name-options.enable-resource-name-dns-aaaa-record - A Boolean that indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. private-dns-name-options.hostname-type - The type of hostname (ip-name | resource-name). private-ip-address - The private IPv4 address of the instance. This can only be used to filter by the primary IP address of the network interface attached to the instance. To filter by additional IP addresses assigned to the network interface, use the filter network-interface.addresses.private-ip-address. product-code - The product code associated with the AMI used to launch the instance. product-code.type - The type of product code (devpay | marketplace). ramdisk-id - The RAM disk ID. reason - The reason for the current state of the instance (for example, shows "User Initiated &#91;date&#93;" when you stop or terminate the instance). Similar to the state-reason-code filter. requester-id - The ID of the entity that launched the instance on your behalf (for example, Amazon Web Services Management Console, Auto Scaling, and so on). reservation-id - The ID of the instance's reservation. A reservation ID is created any time you launch an instance. A reservation ID has a one-to-one relationship with an instance launch request, but can be associated with more than one instance if you launch multiple instances using the same launch request. For example, if you launch one instance, you get one reservation ID. If you launch ten instances using the same launch request, you also get one reservation ID. root-device-name - The device name of the root device volume (for example, /dev/sda1). root-device-type - The type of the root device volume (ebs | instance-store). source-dest-check - Indicates whether the instance performs source/destination checking. A value of true means that checking is enabled, and false means that checking is disabled. The value must be false for the instance to perform network address translation (NAT) in your VPC. spot-instance-request-id - The ID of the Spot Instance request. state-reason-code - The reason code for the state change. state-reason-message - A message that describes the state change. subnet-id - The ID of the subnet for the instance. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific key, regardless of the tag value. tenancy - The tenancy of an instance (dedicated | default | host). tpm-support - Indicates if the instance is configured for NitroTPM support (v2.0). usage-operation - The usage operation value for the instance (RunInstances | RunInstances:00g0 | RunInstances:0010 | RunInstances:1010 | RunInstances:1014 | RunInstances:1110 | RunInstances:0014 | RunInstances:0210 | RunInstances:0110 | RunInstances:0100 | RunInstances:0004 | RunInstances:0200 | RunInstances:000g | RunInstances:0g00 | RunInstances:0002 | RunInstances:0800 | RunInstances:0102 | RunInstances:0006 | RunInstances:0202). usage-operation-update-time - The time that the usage operation was last updated, for example, 2022-09-15T17:15:20.000Z. virtualization-type - The virtualization type of the instance (paravirtual | hvm). vpc-id - The ID of the VPC that the instance is running in.</td>
</tr>
<tr id="parameter-Force">
    <td><CopyableCode code="Force" /></td>
    <td><code>boolean</code></td>
    <td>Forces the instance to stop. The instance will first attempt a graceful shutdown, which includes flushing file system caches and metadata. If the graceful shutdown fails to complete within the timeout period, the instance shuts down forcibly without flushing the file system caches and metadata. After using this option, you must perform file system check and repair procedures. This option is not recommended for Windows instances. For more information, see Troubleshoot Amazon EC2 instance stop issues in the Amazon EC2 User Guide. Default: false</td>
</tr>
<tr id="parameter-GroupId">
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td>The Group Id of a placement group. You must specify the Placement Group Group Id to launch an instance in a shared placement group.</td>
</tr>
<tr id="parameter-GroupName">
    <td><CopyableCode code="GroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the placement group in which to place the instance. For spread placement groups, the instance must have a tenancy of default. For cluster and partition placement groups, the instance must have a tenancy of default or dedicated. To remove an instance from a placement group, specify an empty string ("").</td>
</tr>
<tr id="parameter-Hibernate">
    <td><CopyableCode code="Hibernate" /></td>
    <td><code>boolean</code></td>
    <td>Hibernates the instance if the instance was enabled for hibernation at launch. If the instance cannot hibernate successfully, a normal shutdown occurs. For more information, see Hibernate your Amazon EC2 instance in the Amazon EC2 User Guide. Default: false</td>
</tr>
<tr id="parameter-HibernationOptions">
    <td><CopyableCode code="HibernationOptions" /></td>
    <td><code>object</code></td>
    <td>Indicates whether an instance is enabled for hibernation. This parameter is valid only if the instance meets the hibernation prerequisites. For more information, see Hibernate your Amazon EC2 instance in the Amazon EC2 User Guide. You can't enable hibernation and Amazon Web Services Nitro Enclaves on the same instance.</td>
</tr>
<tr id="parameter-HostId">
    <td><CopyableCode code="HostId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Dedicated Host with which to associate the instance.</td>
</tr>
<tr id="parameter-HostResourceGroupArn">
    <td><CopyableCode code="HostResourceGroupArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the host resource group in which to place the instance. The instance must have a tenancy of host to specify this parameter.</td>
</tr>
<tr id="parameter-HttpEndpoint">
    <td><CopyableCode code="HttpEndpoint" /></td>
    <td><code>string</code></td>
    <td>Enables or disables the HTTP metadata endpoint on your instances. If this parameter is not specified, the existing state is maintained. If you specify a value of disabled, you cannot access your instance metadata.</td>
</tr>
<tr id="parameter-HttpProtocolIpv6">
    <td><CopyableCode code="HttpProtocolIpv6" /></td>
    <td><code>string</code></td>
    <td>Enables or disables the IPv6 endpoint for the instance metadata service. Applies only if you enabled the HTTP metadata endpoint.</td>
</tr>
<tr id="parameter-HttpPutResponseHopLimit">
    <td><CopyableCode code="HttpPutResponseHopLimit" /></td>
    <td><code>integer</code></td>
    <td>The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel. If no parameter is specified, the existing state is maintained. Possible values: Integers from 1 to 64</td>
</tr>
<tr id="parameter-HttpTokens">
    <td><CopyableCode code="HttpTokens" /></td>
    <td><code>string</code></td>
    <td>Indicates whether IMDSv2 is required. optional - IMDSv2 is optional. You can choose whether to send a session token in your instance metadata retrieval requests. If you retrieve IAM role credentials without a session token, you receive the IMDSv1 role credentials. If you retrieve IAM role credentials using a valid session token, you receive the IMDSv2 role credentials. required - IMDSv2 is required. You must send a session token in your instance metadata retrieval requests. With this option, retrieving the IAM role credentials always returns IMDSv2 credentials; IMDSv1 credentials are not available. Default: If the value of ImdsSupport for the Amazon Machine Image (AMI) for your instance is v2.0 and the account level default is set to no-preference, the default is required. If the value of ImdsSupport for the Amazon Machine Image (AMI) for your instance is v2.0, but the account level default is set to V1 or V2, the default is optional. The default value can also be affected by other combinations of parameters. For more information, see Order of precedence for instance metadata options in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-IamInstanceProfile">
    <td><CopyableCode code="IamInstanceProfile" /></td>
    <td><code>object</code></td>
    <td>The name or Amazon Resource Name (ARN) of an IAM instance profile.</td>
</tr>
<tr id="parameter-ImageId">
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>The ID of the AMI. An AMI ID is required to launch an instance and must be specified here or in a launch template.</td>
</tr>
<tr id="parameter-IncludeManagedResources">
    <td><CopyableCode code="IncludeManagedResources" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to include managed resources in the output. If this parameter is set to true, the output includes resources that are managed by Amazon Web Services services, even if managed resource visibility is set to hidden.</td>
</tr>
<tr id="parameter-InstanceCount">
    <td><CopyableCode code="InstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of Spot Instances to launch. Default: 1</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>array</code></td>
    <td>The instance IDs. Default: Describes all your instances.</td>
</tr>
<tr id="parameter-InstanceInitiatedShutdownBehavior">
    <td><CopyableCode code="InstanceInitiatedShutdownBehavior" /></td>
    <td><code>string</code></td>
    <td>Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown). Default: stop</td>
</tr>
<tr id="parameter-InstanceInterruptionBehavior">
    <td><CopyableCode code="InstanceInterruptionBehavior" /></td>
    <td><code>string</code></td>
    <td>The behavior when a Spot Instance is interrupted. The default is terminate.</td>
</tr>
<tr id="parameter-InstanceMarketOptions">
    <td><CopyableCode code="InstanceMarketOptions" /></td>
    <td><code>object</code></td>
    <td>The market (purchasing) option for the instances. For RunInstances, persistent Spot Instance requests are only supported when InstanceInterruptionBehavior is set to either hibernate or stop.</td>
</tr>
<tr id="parameter-InstanceMetadataTags">
    <td><CopyableCode code="InstanceMetadataTags" /></td>
    <td><code>string</code></td>
    <td>Set to enabled to allow access to instance tags from the instance metadata. Set to disabled to turn off access to instance tags from the instance metadata. For more information, see View tags for your EC2 instances using instance metadata.</td>
</tr>
<tr id="parameter-InstanceType">
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The instance type. For more information, see Amazon EC2 Instance Types Guide.</td>
</tr>
<tr id="parameter-Ipv6Address">
    <td><CopyableCode code="Ipv6Address" /></td>
    <td><code>array</code></td>
    <td>The IPv6 addresses from the range of the subnet to associate with the primary network interface. You cannot specify this option and the option to assign a number of IPv6 addresses in the same request. You cannot specify this option if you've specified a minimum number of instances to launch. You cannot specify this option and the network interfaces option in the same request.</td>
</tr>
<tr id="parameter-Ipv6AddressCount">
    <td><CopyableCode code="Ipv6AddressCount" /></td>
    <td><code>integer</code></td>
    <td>The number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet. You cannot specify this option and the option to assign specific IPv6 addresses in the same request. You can specify this option if you've specified a minimum number of instances to launch. You cannot specify this option and the network interfaces option in the same request.</td>
</tr>
<tr id="parameter-KernelId">
    <td><CopyableCode code="KernelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the kernel. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see PV-GRUB in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-KeyName">
    <td><CopyableCode code="KeyName" /></td>
    <td><code>string</code></td>
    <td>The name of the key pair. For more information, see Create a key pair for your EC2 instance. If you do not specify a key pair, you can't connect to the instance unless you choose an AMI that is configured to allow users another way to log in.</td>
</tr>
<tr id="parameter-LaunchGroup">
    <td><CopyableCode code="LaunchGroup" /></td>
    <td><code>string</code></td>
    <td>The instance launch group. Launch groups are Spot Instances that launch together and terminate together. Default: Instances are launched and terminated individually</td>
</tr>
<tr id="parameter-LaunchSpecification">
    <td><CopyableCode code="LaunchSpecification" /></td>
    <td><code>object</code></td>
    <td>The launch specification.</td>
</tr>
<tr id="parameter-LaunchTemplate">
    <td><CopyableCode code="LaunchTemplate" /></td>
    <td><code>object</code></td>
    <td>The launch template. Any additional parameters that you specify for the new instance overwrite the corresponding parameters included in the launch template.</td>
</tr>
<tr id="parameter-LicenseSpecification">
    <td><CopyableCode code="LicenseSpecification" /></td>
    <td><code>array</code></td>
    <td>The license configurations.</td>
</tr>
<tr id="parameter-MacCredentials">
    <td><CopyableCode code="MacCredentials" /></td>
    <td><code>string</code></td>
    <td>&#91;Apple silicon Mac instances only&#93; Specifies the following credentials: Internal disk administrative user Username - Only the default administrative user (aws-managed-user) is supported and it is used by default. You can't specify a different administrative user. Password - If you did not change the default password for aws-managed-user, specify the default password, which is blank. Otherwise, specify your password. Amazon EBS root volume administrative user Username - If you did not change the default administrative user, specify ec2-user. Otherwise, specify the username for your administrative user. Password - Specify the password for the administrative user. The credentials must be specified in the following JSON format: &#123; "internalDiskPassword":"internal-disk-admin_password", "rootVolumeUsername":"root-volume-admin_username", "rootVolumepassword":"root-volume-admin_password" &#125;</td>
</tr>
<tr id="parameter-MacSystemIntegrityProtectionConfiguration">
    <td><CopyableCode code="MacSystemIntegrityProtectionConfiguration" /></td>
    <td><code>object</code></td>
    <td>Specifies the overrides to selectively enable or disable individual SIP settings. The individual settings you specify here override the overall SIP status you specify for MacSystemIntegrityProtectionStatus.</td>
</tr>
<tr id="parameter-MaintenanceOptions">
    <td><CopyableCode code="MaintenanceOptions" /></td>
    <td><code>object</code></td>
    <td>The maintenance and recovery options for the instance.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination. You cannot specify this parameter and the instance IDs parameter in the same request.</td>
</tr>
<tr id="parameter-MetadataOptions">
    <td><CopyableCode code="MetadataOptions" /></td>
    <td><code>object</code></td>
    <td>The metadata options for the instance. For more information, see Configure the Instance Metadata Service options.</td>
</tr>
<tr id="parameter-Monitoring">
    <td><CopyableCode code="Monitoring" /></td>
    <td><code>object</code></td>
    <td>Specifies whether detailed monitoring is enabled for the instance.</td>
</tr>
<tr id="parameter-NestedVirtualization">
    <td><CopyableCode code="NestedVirtualization" /></td>
    <td><code>string</code></td>
    <td>Indicates whether to enable or disable nested virtualization for the instance. When nested virtualization is enabled, Virtual Secure Mode (VSM) is automatically disabled for the instance.</td>
</tr>
<tr id="parameter-NetworkInterface">
    <td><CopyableCode code="NetworkInterface" /></td>
    <td><code>array</code></td>
    <td>The network interfaces to associate with the instance.</td>
</tr>
<tr id="parameter-NetworkPerformanceOptions">
    <td><CopyableCode code="NetworkPerformanceOptions" /></td>
    <td><code>object</code></td>
    <td>Contains settings for the network performance options for the instance.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-Operator">
    <td><CopyableCode code="Operator" /></td>
    <td><code>object</code></td>
    <td>Reserved for internal use.</td>
</tr>
<tr id="parameter-PartitionNumber">
    <td><CopyableCode code="PartitionNumber" /></td>
    <td><code>integer</code></td>
    <td>The number of the partition in which to place the instance. Valid only if the placement group strategy is set to partition.</td>
</tr>
<tr id="parameter-Placement">
    <td><CopyableCode code="Placement" /></td>
    <td><code>object</code></td>
    <td>The placement for the instance.</td>
</tr>
<tr id="parameter-PrivateDnsHostnameType">
    <td><CopyableCode code="PrivateDnsHostnameType" /></td>
    <td><code>string</code></td>
    <td>The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID.</td>
</tr>
<tr id="parameter-PrivateDnsNameOptions">
    <td><CopyableCode code="PrivateDnsNameOptions" /></td>
    <td><code>object</code></td>
    <td>The options for the instance hostname. The default values are inherited from the subnet. Applies only if creating a network interface, not attaching an existing one.</td>
</tr>
<tr id="parameter-PrivateIpAddress">
    <td><CopyableCode code="PrivateIpAddress" /></td>
    <td><code>string</code></td>
    <td>The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet. Only one private IP address can be designated as primary. You can't specify this option if you've specified the option to designate a private IP address as the primary IP address in a network interface specification. You cannot specify this option if you're launching more than one instance in the request. You cannot specify this option and the network interfaces option in the same request.</td>
</tr>
<tr id="parameter-RamdiskId">
    <td><CopyableCode code="RamdiskId" /></td>
    <td><code>string</code></td>
    <td>The ID of the RAM disk to select. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, go to the Amazon Web Services Resource Center and search for the kernel ID. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see PV-GRUB in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-RebootMigration">
    <td><CopyableCode code="RebootMigration" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to attempt reboot migration during a user-initiated reboot of an instance that has a scheduled system-reboot event: default - Amazon EC2 attempts to migrate the instance to new hardware (reboot migration). If successful, the system-reboot event is cleared. If unsuccessful, an in-place reboot occurs and the event remains scheduled. disabled - Amazon EC2 keeps the instance on the same hardware (in-place reboot). The system-reboot event remains scheduled. This setting only applies to supported instances that have a scheduled reboot event. For more information, see Enable or disable reboot migration in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-SecondaryInterface">
    <td><CopyableCode code="SecondaryInterface" /></td>
    <td><code>array</code></td>
    <td>The secondary interfaces to associate with the instance.</td>
</tr>
<tr id="parameter-SecurityGroup">
    <td><CopyableCode code="SecurityGroup" /></td>
    <td><code>array</code></td>
    <td>&#91;Default VPC&#93; The names of the security groups. If you specify a network interface, you must specify any security groups as part of the network interface instead of using this parameter. Default: Amazon EC2 uses the default security group.</td>
</tr>
<tr id="parameter-SecurityGroupId">
    <td><CopyableCode code="SecurityGroupId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the security groups. If you specify a network interface, you must specify any security groups as part of the network interface instead of using this parameter.</td>
</tr>
<tr id="parameter-SkipOsShutdown">
    <td><CopyableCode code="SkipOsShutdown" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to bypass the graceful OS shutdown process when the instance is stopped. Bypassing the graceful OS shutdown might result in data loss or corruption (for example, memory contents not flushed to disk or loss of in-flight IOs) or skipped shutdown scripts. Default: false</td>
</tr>
<tr id="parameter-SpotPrice">
    <td><CopyableCode code="SpotPrice" /></td>
    <td><code>string</code></td>
    <td>The maximum price per unit hour that you are willing to pay for a Spot Instance. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price. If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify this parameter.</td>
</tr>
<tr id="parameter-SqlServerCredentials">
    <td><CopyableCode code="SqlServerCredentials" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Secrets Manager secret containing the SQL Server access credentials. The specified secret must contain valid SQL Server credentials for the specified instances. If not specified, deafult local user credentials will be used by the Amazon Web Services Systems Manager agent. To enable instances with different credentials, you must make separate requests.</td>
</tr>
<tr id="parameter-Storage">
    <td><CopyableCode code="Storage" /></td>
    <td><code>object</code></td>
    <td>The bucket in which to store the AMI. You can specify a bucket that you already own or a new bucket that Amazon EC2 creates on your behalf. If you specify a bucket that belongs to someone else, Amazon EC2 returns an error.</td>
</tr>
<tr id="parameter-SubnetId">
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet to launch the instance into. If you specify a network interface, you must specify any subnets as part of the network interface instead of using this parameter.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The key-value pair for tagging the Spot Instance request on creation. The value for ResourceType must be spot-instances-request, otherwise the Spot Instance request fails. To tag the Spot Instance request after it has been created, see CreateTags.</td>
</tr>
<tr id="parameter-Tenancy">
    <td><CopyableCode code="Tenancy" /></td>
    <td><code>string</code></td>
    <td>The tenancy for the instance. For T3 instances, you must launch the instance on a Dedicated Host to use a tenancy of host. You can't change the tenancy from host to dedicated or default. Attempting to make one of these unsupported tenancy changes results in an InvalidRequest error code.</td>
</tr>
<tr id="parameter-ThreadsPerCore">
    <td><CopyableCode code="ThreadsPerCore" /></td>
    <td><code>integer</code></td>
    <td>The number of threads to run for each CPU core.</td>
</tr>
<tr id="parameter-Type">
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The Spot Instance request type. Default: one-time</td>
</tr>
<tr id="parameter-UserData">
    <td><CopyableCode code="UserData" /></td>
    <td><code>string</code></td>
    <td>The user data to make available to the instance. User data must be base64-encoded. Depending on the tool or SDK that you're using, the base64-encoding might be performed for you. For more information, see Run commands at launch using instance user data.</td>
</tr>
<tr id="parameter-ValidFrom">
    <td><CopyableCode code="ValidFrom" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date of the request. If this is a one-time request, the request becomes active at this date and time and remains active until all instances launch, the request expires, or the request is canceled. If the request is persistent, the request becomes active at this date and time and remains active until it expires or is canceled. The specified start date and time cannot be equal to the current date and time. You must specify a start date and time that occurs after the current date and time.</td>
</tr>
<tr id="parameter-ValidUntil">
    <td><CopyableCode code="ValidUntil" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end date of the request, in UTC format (YYYY-MM-DDTHH:MM:SSZ). For a persistent request, the request remains active until the ValidUntil date and time is reached. Otherwise, the request remains active until you cancel it. For a one-time request, the request remains active until all instances launch, the request is canceled, or the ValidUntil date and time is reached. By default, the request is valid for 7 days from the date the request was created.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_instances"
    values={[
        { label: 'describe_instances', value: 'describe_instances' }
    ]}
>
<TabItem value="describe_instances">

Describes the specified instances or all instances. If you specify instance IDs, the output includes information for only the specified instances. If you specify filters, the output includes information for only those instances that meet the filter criteria. If you do not specify instance IDs or filters, the output includes information for all instances, which can affect performance. We recommend that you use pagination to ensure that the operation returns quickly and successfully. The response includes SQL license exemption status information for instances registered with the SQL LE service, providing visibility into license exemption configuration and status. If you specify an instance ID that is not valid, an error is returned. If you specify an instance that you do not own, it is not included in the output. Recently terminated instances might appear in the returned results. This interval is usually less than one hour. If you describe instances in the rare case where an Availability Zone is experiencing a service disruption and you specify instance IDs that are in the affected zone, or do not specify any instance IDs at all, the call fails. If you describe instances and specify only instance IDs that are in an unaffected zone, the call works normally. The Amazon EC2 API follows an eventual consistency model. This means that the result of an API command you run that creates or modifies resources might not be immediately available to all subsequent commands you run. For guidance on how to manage eventual consistency, see Eventual consistency in the Amazon EC2 API in the Amazon EC2 Developer Guide. We strongly recommend using only paginated requests. Unpaginated requests are susceptible to throttling and timeouts. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.

```sql
SELECT
ami_launch_index,
architecture,
block_device_mappings,
boot_mode,
capacity_block_id,
capacity_reservation_id,
capacity_reservation_specification,
client_token,
cpu_options,
current_instance_boot_mode,
ebs_optimized,
elastic_gpu_associations,
elastic_inference_accelerator_associations,
ena_support,
enclave_options,
hibernation_options,
hypervisor,
iam_instance_profile,
image_id,
instance_id,
instance_lifecycle,
instance_type,
ipv_6_address,
kernel_id,
key_name,
launch_time,
licenses,
maintenance_options,
metadata_options,
monitoring,
network_interfaces,
network_performance_options,
operator,
outpost_arn,
placement,
platform,
platform_details,
private_dns_name,
private_dns_name_options,
private_ip_address,
product_codes,
public_dns_name,
public_ip_address,
ramdisk_id,
root_device_name,
root_device_type,
secondary_interfaces,
security_groups,
source_dest_check,
spot_instance_request_id,
sriov_net_support,
state,
state_reason,
state_transition_reason,
subnet_id,
tags,
tpm_support,
usage_operation,
usage_operation_update_time,
virtualization_type,
vpc_id
FROM aws.ec2.instances
WHERE region = '{{ region }}' -- required
AND InstanceId = '{{ InstanceId }}'
AND IncludeManagedResources = '{{ IncludeManagedResources }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_delegate_mac_volume_ownership_task"
    values={[
        { label: 'create_delegate_mac_volume_ownership_task', value: 'create_delegate_mac_volume_ownership_task' },
        { label: 'create_mac_system_integrity_protection_modification_task', value: 'create_mac_system_integrity_protection_modification_task' },
        { label: 'run_instances', value: 'run_instances' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_delegate_mac_volume_ownership_task">

Delegates ownership of the Amazon EBS root volume for an Apple silicon Mac instance to an administrative user.

```sql
INSERT INTO aws.ec2.instances (
InstanceId,
MacCredentials,
region,
ClientToken,
DryRun,
TagSpecification
)
SELECT 
'{{ InstanceId }}',
'{{ MacCredentials }}',
'{{ region }}',
'{{ ClientToken }}',
'{{ DryRun }}',
'{{ TagSpecification }}'
RETURNING
instance_id,
mac_modification_task_id,
mac_system_integrity_protection_config,
start_time,
tags,
task_state,
task_type
;
```
</TabItem>
<TabItem value="create_mac_system_integrity_protection_modification_task">

Creates a System Integrity Protection (SIP) modification task to configure the SIP settings for an x86 Mac instance or Apple silicon Mac instance. For more information, see Configure SIP for Amazon EC2 instances in the Amazon EC2 User Guide. When you configure the SIP settings for your instance, you can either enable or disable all SIP settings, or you can specify a custom SIP configuration that selectively enables or disables specific SIP settings. If you implement a custom configuration, connect to the instance and verify the settings to ensure that your requirements are properly implemented and functioning as intended. SIP configurations might change with macOS updates. We recommend that you review custom SIP settings after any macOS version upgrade to ensure continued compatibility and proper functionality of your security configurations. To enable or disable all SIP settings, use the MacSystemIntegrityProtectionStatus parameter only. For example, to enable all SIP settings, specify the following: MacSystemIntegrityProtectionStatus=enabled To specify a custom configuration that selectively enables or disables specific SIP settings, use the MacSystemIntegrityProtectionStatus parameter to enable or disable all SIP settings, and then use the MacSystemIntegrityProtectionConfiguration parameter to specify exceptions. In this case, the exceptions you specify for MacSystemIntegrityProtectionConfiguration override the value you specify for MacSystemIntegrityProtectionStatus. For example, to enable all SIP settings, except NvramProtections, specify the following: MacSystemIntegrityProtectionStatus=enabled MacSystemIntegrityProtectionConfigurationRequest "NvramProtections=disabled"

```sql
INSERT INTO aws.ec2.instances (
InstanceId,
MacSystemIntegrityProtectionStatus,
region,
ClientToken,
DryRun,
MacCredentials,
MacSystemIntegrityProtectionConfiguration,
TagSpecification
)
SELECT 
'{{ InstanceId }}',
'{{ MacSystemIntegrityProtectionStatus }}',
'{{ region }}',
'{{ ClientToken }}',
'{{ DryRun }}',
'{{ MacCredentials }}',
'{{ MacSystemIntegrityProtectionConfiguration }}',
'{{ TagSpecification }}'
RETURNING
instance_id,
mac_modification_task_id,
mac_system_integrity_protection_config,
start_time,
tags,
task_state,
task_type
;
```
</TabItem>
<TabItem value="run_instances">

Launches the specified number of instances using an AMI for which you have permissions. You can specify a number of options, or leave the default options. The following rules apply: If you don't specify a subnet ID, we choose a default subnet from your default VPC for you. If you don't have a default VPC, you must specify a subnet ID in the request. All instances have a network interface with a primary private IPv4 address. If you don't specify this address, we choose one from the IPv4 range of your subnet. Not all instance types support IPv6 addresses. For more information, see Instance types. If you don't specify a security group ID, we use the default security group for the VPC. For more information, see Security groups. If any of the AMIs have a product code attached for which the user has not subscribed, the request fails. You can create a launch template, which is a resource that contains the parameters to launch an instance. When you launch an instance using RunInstances, you can specify the launch template instead of specifying the launch parameters. To ensure faster instance launches, break up large requests into smaller batches. For example, create five separate launch requests for 100 instances each instead of one launch request for 500 instances. RunInstances is subject to both request rate limiting and resource rate limiting. For more information, see Request throttling. An instance is ready for you to use when it's in the running state. You can check the state of your instance using DescribeInstances. You can tag instances and EBS volumes during launch, after launch, or both. For more information, see CreateTags and Tagging your Amazon EC2 resources. Linux instances have access to the public key of the key pair at boot. You can use this key to provide secure access to the instance. Amazon EC2 public images use this feature to provide secure access without passwords. For more information, see Key pairs. For troubleshooting, see What to do if an instance immediately terminates, and Troubleshooting connecting to your instance.

```sql
INSERT INTO aws.ec2.instances (
MaxCount,
MinCount,
region,
BlockDeviceMapping,
ImageId,
InstanceType,
Ipv6AddressCount,
Ipv6Address,
KernelId,
KeyName,
Monitoring,
Placement,
RamdiskId,
SecurityGroupId,
SecurityGroup,
SubnetId,
UserData,
ElasticGpuSpecification,
ElasticInferenceAccelerator,
TagSpecification,
LaunchTemplate,
InstanceMarketOptions,
CreditSpecification,
CpuOptions,
CapacityReservationSpecification,
HibernationOptions,
LicenseSpecification,
MetadataOptions,
EnclaveOptions,
PrivateDnsNameOptions,
MaintenanceOptions,
DisableApiStop,
EnablePrimaryIpv6,
NetworkPerformanceOptions,
Operator,
SecondaryInterface,
DryRun,
DisableApiTermination,
InstanceInitiatedShutdownBehavior,
PrivateIpAddress,
ClientToken,
AdditionalInfo,
NetworkInterface,
IamInstanceProfile,
EbsOptimized
)
SELECT 
'{{ MaxCount }}',
'{{ MinCount }}',
'{{ region }}',
'{{ BlockDeviceMapping }}',
'{{ ImageId }}',
'{{ InstanceType }}',
'{{ Ipv6AddressCount }}',
'{{ Ipv6Address }}',
'{{ KernelId }}',
'{{ KeyName }}',
'{{ Monitoring }}',
'{{ Placement }}',
'{{ RamdiskId }}',
'{{ SecurityGroupId }}',
'{{ SecurityGroup }}',
'{{ SubnetId }}',
'{{ UserData }}',
'{{ ElasticGpuSpecification }}',
'{{ ElasticInferenceAccelerator }}',
'{{ TagSpecification }}',
'{{ LaunchTemplate }}',
'{{ InstanceMarketOptions }}',
'{{ CreditSpecification }}',
'{{ CpuOptions }}',
'{{ CapacityReservationSpecification }}',
'{{ HibernationOptions }}',
'{{ LicenseSpecification }}',
'{{ MetadataOptions }}',
'{{ EnclaveOptions }}',
'{{ PrivateDnsNameOptions }}',
'{{ MaintenanceOptions }}',
'{{ DisableApiStop }}',
'{{ EnablePrimaryIpv6 }}',
'{{ NetworkPerformanceOptions }}',
'{{ Operator }}',
'{{ SecondaryInterface }}',
'{{ DryRun }}',
'{{ DisableApiTermination }}',
'{{ InstanceInitiatedShutdownBehavior }}',
'{{ PrivateIpAddress }}',
'{{ ClientToken }}',
'{{ AdditionalInfo }}',
'{{ NetworkInterface }}',
'{{ IamInstanceProfile }}',
'{{ EbsOptimized }}'
RETURNING
ami_launch_index,
architecture,
block_device_mappings,
boot_mode,
capacity_block_id,
capacity_reservation_id,
capacity_reservation_specification,
client_token,
cpu_options,
current_instance_boot_mode,
ebs_optimized,
elastic_gpu_associations,
elastic_inference_accelerator_associations,
ena_support,
enclave_options,
hibernation_options,
hypervisor,
iam_instance_profile,
image_id,
instance_id,
instance_lifecycle,
instance_type,
ipv_6_address,
kernel_id,
key_name,
launch_time,
licenses,
maintenance_options,
metadata_options,
monitoring,
network_interfaces,
network_performance_options,
operator,
outpost_arn,
placement,
platform,
platform_details,
private_dns_name,
private_dns_name_options,
private_ip_address,
product_codes,
public_dns_name,
public_ip_address,
ramdisk_id,
root_device_name,
root_device_type,
secondary_interfaces,
security_groups,
source_dest_check,
spot_instance_request_id,
sriov_net_support,
state,
state_reason,
state_transition_reason,
subnet_id,
tags,
tpm_support,
usage_operation,
usage_operation_update_time,
virtualization_type,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instances
  props:
    - name: InstanceId
      value: "{{ InstanceId }}"
      description: Required parameter for the instances resource.
    - name: MacCredentials
      value: "{{ MacCredentials }}"
      description: Required parameter for the instances resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instances resource.
    - name: MacSystemIntegrityProtectionStatus
      value: "{{ MacSystemIntegrityProtectionStatus }}"
      description: Required parameter for the instances resource.
    - name: MaxCount
      value: {{ MaxCount }}
      description: Required parameter for the instances resource.
    - name: MinCount
      value: {{ MinCount }}
      description: Required parameter for the instances resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring Idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring Idempotency.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the volume ownership delegation task.
      description: The tags to assign to the volume ownership delegation task.
    - name: MacSystemIntegrityProtectionConfiguration
      value: "{{ MacSystemIntegrityProtectionConfiguration }}"
      description: Specifies the overrides to selectively enable or disable individual SIP settings. The individual settings you specify here override the overall SIP status you specify for MacSystemIntegrityProtectionStatus.
      description: Specifies the overrides to selectively enable or disable individual SIP settings. The individual settings you specify here override the overall SIP status you specify for MacSystemIntegrityProtectionStatus.
    - name: BlockDeviceMapping
      value: "{{ BlockDeviceMapping }}"
      description: The block device mapping, which defines the EBS volumes and instance store volumes to attach to the instance at launch. For more information, see Block device mappings in the Amazon EC2 User Guide.
      description: The block device mapping, which defines the EBS volumes and instance store volumes to attach to the instance at launch. For more information, see Block device mappings in the Amazon EC2 User Guide.
    - name: ImageId
      value: "{{ ImageId }}"
      description: The ID of the AMI. An AMI ID is required to launch an instance and must be specified here or in a launch template.
      description: The ID of the AMI. An AMI ID is required to launch an instance and must be specified here or in a launch template.
    - name: InstanceType
      value: "{{ InstanceType }}"
      description: The instance type. For more information, see Amazon EC2 Instance Types Guide.
      description: The instance type. For more information, see Amazon EC2 Instance Types Guide.
    - name: Ipv6AddressCount
      value: {{ Ipv6AddressCount }}
      description: The number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet. You cannot specify this option and the option to assign specific IPv6 addresses in the same request. You can specify this option if you've specified a minimum number of instances to launch. You cannot specify this option and the network interfaces option in the same request.
      description: The number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet. You cannot specify this option and the option to assign specific IPv6 addresses in the same request. You can specify this option if you've specified a minimum number of instances to launch. You cannot specify this option and the network interfaces option in the same request.
    - name: Ipv6Address
      value: "{{ Ipv6Address }}"
      description: The IPv6 addresses from the range of the subnet to associate with the primary network interface. You cannot specify this option and the option to assign a number of IPv6 addresses in the same request. You cannot specify this option if you've specified a minimum number of instances to launch. You cannot specify this option and the network interfaces option in the same request.
      description: The IPv6 addresses from the range of the subnet to associate with the primary network interface. You cannot specify this option and the option to assign a number of IPv6 addresses in the same request. You cannot specify this option if you've specified a minimum number of instances to launch. You cannot specify this option and the network interfaces option in the same request.
    - name: KernelId
      value: "{{ KernelId }}"
      description: The ID of the kernel. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see PV-GRUB in the Amazon EC2 User Guide.
      description: The ID of the kernel. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see PV-GRUB in the Amazon EC2 User Guide.
    - name: KeyName
      value: "{{ KeyName }}"
      description: The name of the key pair. For more information, see Create a key pair for your EC2 instance. If you do not specify a key pair, you can't connect to the instance unless you choose an AMI that is configured to allow users another way to log in.
      description: The name of the key pair. For more information, see Create a key pair for your EC2 instance. If you do not specify a key pair, you can't connect to the instance unless you choose an AMI that is configured to allow users another way to log in.
    - name: Monitoring
      value: "{{ Monitoring }}"
      description: Specifies whether detailed monitoring is enabled for the instance.
      description: Specifies whether detailed monitoring is enabled for the instance.
    - name: Placement
      value: "{{ Placement }}"
      description: The placement for the instance.
      description: The placement for the instance.
    - name: RamdiskId
      value: "{{ RamdiskId }}"
      description: The ID of the RAM disk to select. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, go to the Amazon Web Services Resource Center and search for the kernel ID. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see PV-GRUB in the Amazon EC2 User Guide.
      description: The ID of the RAM disk to select. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, go to the Amazon Web Services Resource Center and search for the kernel ID. We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see PV-GRUB in the Amazon EC2 User Guide.
    - name: SecurityGroupId
      value: "{{ SecurityGroupId }}"
      description: The IDs of the security groups. If you specify a network interface, you must specify any security groups as part of the network interface instead of using this parameter.
      description: The IDs of the security groups. If you specify a network interface, you must specify any security groups as part of the network interface instead of using this parameter.
    - name: SecurityGroup
      value: "{{ SecurityGroup }}"
      description: [Default VPC] The names of the security groups. If you specify a network interface, you must specify any security groups as part of the network interface instead of using this parameter. Default: Amazon EC2 uses the default security group.
      description: [Default VPC] The names of the security groups. If you specify a network interface, you must specify any security groups as part of the network interface instead of using this parameter. Default: Amazon EC2 uses the default security group.
    - name: SubnetId
      value: "{{ SubnetId }}"
      description: The ID of the subnet to launch the instance into. If you specify a network interface, you must specify any subnets as part of the network interface instead of using this parameter.
      description: The ID of the subnet to launch the instance into. If you specify a network interface, you must specify any subnets as part of the network interface instead of using this parameter.
    - name: UserData
      value: "{{ UserData }}"
      description: The user data to make available to the instance. User data must be base64-encoded. Depending on the tool or SDK that you're using, the base64-encoding might be performed for you. For more information, see Run commands at launch using instance user data.
      description: The user data to make available to the instance. User data must be base64-encoded. Depending on the tool or SDK that you're using, the base64-encoding might be performed for you. For more information, see Run commands at launch using instance user data.
    - name: ElasticGpuSpecification
      value: "{{ ElasticGpuSpecification }}"
      description: An elastic GPU to associate with the instance. Amazon Elastic Graphics reached end of life on January 8, 2024.
      description: An elastic GPU to associate with the instance. Amazon Elastic Graphics reached end of life on January 8, 2024.
    - name: ElasticInferenceAccelerator
      value: "{{ ElasticInferenceAccelerator }}"
      description: An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available.
      description: An elastic inference accelerator to associate with the instance. Amazon Elastic Inference is no longer available.
    - name: LaunchTemplate
      value: "{{ LaunchTemplate }}"
      description: The launch template. Any additional parameters that you specify for the new instance overwrite the corresponding parameters included in the launch template.
      description: The launch template. Any additional parameters that you specify for the new instance overwrite the corresponding parameters included in the launch template.
    - name: InstanceMarketOptions
      value: "{{ InstanceMarketOptions }}"
      description: The market (purchasing) option for the instances. For RunInstances, persistent Spot Instance requests are only supported when InstanceInterruptionBehavior is set to either hibernate or stop.
      description: The market (purchasing) option for the instances. For RunInstances, persistent Spot Instance requests are only supported when InstanceInterruptionBehavior is set to either hibernate or stop.
    - name: CreditSpecification
      value: "{{ CreditSpecification }}"
      description: The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited. To change this attribute after launch, use ModifyInstanceCreditSpecification. For more information, see Burstable performance instances in the Amazon EC2 User Guide. Default: standard (T2 instances) or unlimited (T3/T3a/T4g instances) For T3 instances with host tenancy, only standard is supported.
      description: The credit option for CPU usage of the burstable performance instance. Valid values are standard and unlimited. To change this attribute after launch, use ModifyInstanceCreditSpecification. For more information, see Burstable performance instances in the Amazon EC2 User Guide. Default: standard (T2 instances) or unlimited (T3/T3a/T4g instances) For T3 instances with host tenancy, only standard is supported.
    - name: CpuOptions
      value: "{{ CpuOptions }}"
      description: The CPU options for the instance. For more information, see Optimize CPU options in the Amazon EC2 User Guide.
      description: The CPU options for the instance. For more information, see Optimize CPU options in the Amazon EC2 User Guide.
    - name: CapacityReservationSpecification
      value: "{{ CapacityReservationSpecification }}"
      description: Information about the Capacity Reservation targeting option. If you do not specify this parameter, the instance's Capacity Reservation preference defaults to open, which enables it to run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone, and tenancy).
      description: Information about the Capacity Reservation targeting option. If you do not specify this parameter, the instance's Capacity Reservation preference defaults to open, which enables it to run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone, and tenancy).
    - name: HibernationOptions
      value: "{{ HibernationOptions }}"
      description: Indicates whether an instance is enabled for hibernation. This parameter is valid only if the instance meets the hibernation prerequisites. For more information, see Hibernate your Amazon EC2 instance in the Amazon EC2 User Guide. You can't enable hibernation and Amazon Web Services Nitro Enclaves on the same instance.
      description: Indicates whether an instance is enabled for hibernation. This parameter is valid only if the instance meets the hibernation prerequisites. For more information, see Hibernate your Amazon EC2 instance in the Amazon EC2 User Guide. You can't enable hibernation and Amazon Web Services Nitro Enclaves on the same instance.
    - name: LicenseSpecification
      value: "{{ LicenseSpecification }}"
      description: The license configurations.
      description: The license configurations.
    - name: MetadataOptions
      value: "{{ MetadataOptions }}"
      description: The metadata options for the instance. For more information, see Configure the Instance Metadata Service options.
      description: The metadata options for the instance. For more information, see Configure the Instance Metadata Service options.
    - name: EnclaveOptions
      value: "{{ EnclaveOptions }}"
      description: Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more information, see Amazon Web Services Nitro Enclaves User Guide. You can't enable Amazon Web Services Nitro Enclaves and hibernation on the same instance.
      description: Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves. For more information, see Amazon Web Services Nitro Enclaves User Guide. You can't enable Amazon Web Services Nitro Enclaves and hibernation on the same instance.
    - name: PrivateDnsNameOptions
      value: "{{ PrivateDnsNameOptions }}"
      description: The options for the instance hostname. The default values are inherited from the subnet. Applies only if creating a network interface, not attaching an existing one.
      description: The options for the instance hostname. The default values are inherited from the subnet. Applies only if creating a network interface, not attaching an existing one.
    - name: MaintenanceOptions
      value: "{{ MaintenanceOptions }}"
      description: The maintenance and recovery options for the instance.
      description: The maintenance and recovery options for the instance.
    - name: DisableApiStop
      value: {{ DisableApiStop }}
      description: Indicates whether an instance is enabled for stop protection. For more information, see Enable stop protection for your EC2 instances.
      description: Indicates whether an instance is enabled for stop protection. For more information, see Enable stop protection for your EC2 instances.
    - name: EnablePrimaryIpv6
      value: {{ EnablePrimaryIpv6 }}
      description: If you’re launching an instance into a dual-stack or IPv6-only subnet, you can enable assigning a primary IPv6 address. A primary IPv6 address is an IPv6 GUA address associated with an ENI that you have enabled to use a primary IPv6 address. Use this option if an instance relies on its IPv6 address not changing. When you launch the instance, Amazon Web Services will automatically assign an IPv6 address associated with the ENI attached to your instance to be the primary IPv6 address. Once you enable an IPv6 GUA address to be a primary IPv6, you cannot disable it. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. If you have multiple IPv6 addresses associated with an ENI attached to your instance and you enable a primary IPv6 address, the first IPv6 GUA address associated with the ENI becomes the primary IPv6 address.
      description: If you’re launching an instance into a dual-stack or IPv6-only subnet, you can enable assigning a primary IPv6 address. A primary IPv6 address is an IPv6 GUA address associated with an ENI that you have enabled to use a primary IPv6 address. Use this option if an instance relies on its IPv6 address not changing. When you launch the instance, Amazon Web Services will automatically assign an IPv6 address associated with the ENI attached to your instance to be the primary IPv6 address. Once you enable an IPv6 GUA address to be a primary IPv6, you cannot disable it. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. If you have multiple IPv6 addresses associated with an ENI attached to your instance and you enable a primary IPv6 address, the first IPv6 GUA address associated with the ENI becomes the primary IPv6 address.
    - name: NetworkPerformanceOptions
      value: "{{ NetworkPerformanceOptions }}"
      description: Contains settings for the network performance options for the instance.
      description: Contains settings for the network performance options for the instance.
    - name: Operator
      value: "{{ Operator }}"
      description: Reserved for internal use.
      description: Reserved for internal use.
    - name: SecondaryInterface
      value: "{{ SecondaryInterface }}"
      description: The secondary interfaces to associate with the instance.
      description: The secondary interfaces to associate with the instance.
    - name: DisableApiTermination
      value: {{ DisableApiTermination }}
      description: Indicates whether termination protection is enabled for the instance. The default is false, which means that you can terminate the instance using the Amazon EC2 console, command line tools, or API. You can enable termination protection when you launch an instance, while the instance is running, or while the instance is stopped.
      description: Indicates whether termination protection is enabled for the instance. The default is false, which means that you can terminate the instance using the Amazon EC2 console, command line tools, or API. You can enable termination protection when you launch an instance, while the instance is running, or while the instance is stopped.
    - name: InstanceInitiatedShutdownBehavior
      value: "{{ InstanceInitiatedShutdownBehavior }}"
      description: Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown). Default: stop
      description: Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown). Default: stop
    - name: PrivateIpAddress
      value: "{{ PrivateIpAddress }}"
      description: The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet. Only one private IP address can be designated as primary. You can't specify this option if you've specified the option to designate a private IP address as the primary IP address in a network interface specification. You cannot specify this option if you're launching more than one instance in the request. You cannot specify this option and the network interfaces option in the same request.
      description: The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet. Only one private IP address can be designated as primary. You can't specify this option if you've specified the option to designate a private IP address as the primary IP address in a network interface specification. You cannot specify this option if you're launching more than one instance in the request. You cannot specify this option and the network interfaces option in the same request.
    - name: AdditionalInfo
      value: "{{ AdditionalInfo }}"
      description: Reserved.
      description: Reserved.
    - name: NetworkInterface
      value: "{{ NetworkInterface }}"
      description: The network interfaces to associate with the instance.
      description: The network interfaces to associate with the instance.
    - name: IamInstanceProfile
      value: "{{ IamInstanceProfile }}"
      description: The name or Amazon Resource Name (ARN) of an IAM instance profile.
      description: The name or Amazon Resource Name (ARN) of an IAM instance profile.
    - name: EbsOptimized
      value: {{ EbsOptimized }}
      description: Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance. Default: false
      description: Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance. Default: false
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_instance_event_start_time"
    values={[
        { label: 'modify_instance_event_start_time', value: 'modify_instance_event_start_time' },
        { label: 'modify_instance_capacity_reservation_attributes', value: 'modify_instance_capacity_reservation_attributes' },
        { label: 'modify_instance_network_performance_options', value: 'modify_instance_network_performance_options' },
        { label: 'modify_instance_cpu_options', value: 'modify_instance_cpu_options' }
    ]}
>
<TabItem value="modify_instance_event_start_time">

Modifies the start time for a scheduled Amazon EC2 instance event.

```sql
UPDATE aws.ec2.instances
SET 
-- No updatable properties
WHERE 
InstanceId = '{{ InstanceId }}' --required
AND InstanceEventId = '{{ InstanceEventId }}' --required
AND NotBefore = '{{ NotBefore }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
code,
description,
instance_event_id,
not_after,
not_before,
not_before_deadline;
```
</TabItem>
<TabItem value="modify_instance_capacity_reservation_attributes">

Modifies the Capacity Reservation settings for a stopped instance. Use this action to configure an instance to target a specific Capacity Reservation, run in any open Capacity Reservation with matching attributes, run in On-Demand Instance capacity, or only run in a Capacity Reservation.

```sql
UPDATE aws.ec2.instances
SET 
-- No updatable properties
WHERE 
InstanceId = '{{ InstanceId }}' --required
AND CapacityReservationSpecification = '{{ CapacityReservationSpecification }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
return;
```
</TabItem>
<TabItem value="modify_instance_network_performance_options">

Change the configuration of the network performance options for an existing instance.

```sql
UPDATE aws.ec2.instances
SET 
-- No updatable properties
WHERE 
InstanceId = '{{ InstanceId }}' --required
AND BandwidthWeighting = '{{ BandwidthWeighting }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
bandwidth_weighting,
instance_id;
```
</TabItem>
<TabItem value="modify_instance_cpu_options">

By default, all vCPUs for the instance type are active when you launch an instance. When you configure the number of active vCPUs for the instance, it can help you save on licensing costs and optimize performance. The base cost of the instance remains unchanged. The number of active vCPUs equals the number of threads per CPU core multiplied by the number of cores. The instance must be in a Stopped state before you make changes. Some instance type options do not support this capability. For more information, see Supported CPU options in the Amazon EC2 User Guide.

```sql
UPDATE aws.ec2.instances
SET 
-- No updatable properties
WHERE 
InstanceId = '{{ InstanceId }}' --required
AND region = '{{ region }}' --required
AND CoreCount = '{{ CoreCount}}'
AND ThreadsPerCore = '{{ ThreadsPerCore}}'
AND NestedVirtualization = '{{ NestedVirtualization}}'
AND DryRun = {{ DryRun}}
RETURNING
core_count,
instance_id,
nested_virtualization,
threads_per_core;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate_instances"
    values={[
        { label: 'terminate_instances', value: 'terminate_instances' }
    ]}
>
<TabItem value="terminate_instances">

Terminates (deletes) the specified instances. This operation is idempotent; if you terminate an instance more than once, each call succeeds. Terminating an instance is permanent and irreversible. After you terminate an instance, you can no longer connect to it, and it can't be recovered. All attached Amazon EBS volumes that are configured to be deleted on termination are also permanently deleted and can't be recovered. All data stored on instance store volumes is permanently lost. For more information, see How instance termination works. Before you terminate an instance, ensure that you have backed up all data that you need to retain after the termination to persistent storage. If you specify multiple instances and the request fails (for example, because of a single incorrect instance ID), none of the instances are terminated. If you terminate multiple instances across multiple Availability Zones, and one or more of the specified instances are enabled for termination protection, the request fails with the following results: The specified instances that are in the same Availability Zone as the protected instance are not terminated. The specified instances that are in different Availability Zones, where no other specified instances are protected, are successfully terminated. For example, say you have the following instances: Instance A: us-east-1a; Not protected Instance B: us-east-1a; Not protected Instance C: us-east-1b; Protected Instance D: us-east-1b; not protected If you attempt to terminate all of these instances in the same request, the request reports failure with the following results: Instance A and Instance B are successfully terminated because none of the specified instances in us-east-1a are enabled for termination protection. Instance C and Instance D fail to terminate because at least one of the specified instances in us-east-1b (Instance C) is enabled for termination protection. Terminated instances remain visible after termination (for approximately one hour). By default, Amazon EC2 deletes all EBS volumes that were attached when the instance launched. Volumes attached after instance launch continue running. By default, the TerminateInstances operation includes a graceful operating system (OS) shutdown. To bypass the graceful shutdown, use the skipOsShutdown parameter; however, this might risk data integrity. You can stop, start, and terminate EBS-backed instances. You can only terminate instance store-backed instances. What happens to an instance differs if you stop or terminate it. For example, when you stop an instance, the root device and any other devices attached to the instance persist. When you terminate an instance, any attached EBS volumes with the DeleteOnTermination block device mapping parameter set to true are automatically deleted. For more information about the differences between stopping and terminating instances, see Amazon EC2 instance state changes in the Amazon EC2 User Guide. When you terminate an instance, we attempt to terminate it forcibly after a short while. If your instance appears stuck in the shutting-down state after a period of time, there might be an issue with the underlying host computer. For more information about terminating and troubleshooting terminating your instances, see Terminate Amazon EC2 instances and Troubleshooting terminating your instance in the Amazon EC2 User Guide.

```sql
DELETE FROM aws.ec2.instances
WHERE InstanceId = '{{ InstanceId }}' --required
AND region = '{{ region }}' --required
AND Force = '{{ Force }}'
AND SkipOsShutdown = '{{ SkipOsShutdown }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="bundle_instance"
    values={[
        { label: 'bundle_instance', value: 'bundle_instance' },
        { label: 'confirm_product_instance', value: 'confirm_product_instance' },
        { label: 'disable_instance_sql_ha_standby_detections', value: 'disable_instance_sql_ha_standby_detections' },
        { label: 'enable_instance_sql_ha_standby_detections', value: 'enable_instance_sql_ha_standby_detections' },
        { label: 'modify_instance_maintenance_options', value: 'modify_instance_maintenance_options' },
        { label: 'modify_instance_metadata_options', value: 'modify_instance_metadata_options' },
        { label: 'modify_instance_placement', value: 'modify_instance_placement' },
        { label: 'modify_private_dns_name_options', value: 'modify_private_dns_name_options' },
        { label: 'monitor_instances', value: 'monitor_instances' },
        { label: 'move_capacity_reservation_instances', value: 'move_capacity_reservation_instances' },
        { label: 'reboot_instances', value: 'reboot_instances' },
        { label: 'request_spot_instances', value: 'request_spot_instances' },
        { label: 'reset_instance_attribute', value: 'reset_instance_attribute' },
        { label: 'send_diagnostic_interrupt', value: 'send_diagnostic_interrupt' },
        { label: 'start_instances', value: 'start_instances' },
        { label: 'stop_instances', value: 'stop_instances' },
        { label: 'unmonitor_instances', value: 'unmonitor_instances' }
    ]}
>
<TabItem value="bundle_instance">

Bundles an Amazon instance store-backed Windows instance. During bundling, only the root device volume (C:\) is bundled. Data on other instance store volumes is not preserved. This action is no longer supported. To create an AMI, use CreateImage. For more information, see Create an Amazon EBS-backed AMI in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.instances.bundle_instance 
@InstanceId='{{ InstanceId }}' --required, 
@region='{{ region }}' --required, 
@Storage='{{ Storage }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="confirm_product_instance">

Determines whether a product code is associated with an instance. This action can only be used by the owner of the product code. It is useful when a product code owner must verify whether another user's instance is eligible for support.

```sql
EXEC aws.ec2.instances.confirm_product_instance 
@InstanceId='{{ InstanceId }}' --required, 
@ProductCode='{{ ProductCode }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="disable_instance_sql_ha_standby_detections">

Disable Amazon EC2 instances running in an SQL Server High Availability cluster from SQL Server High Availability instance standby detection monitoring. Once disabled, Amazon Web Services no longer monitors the metadata for the instances to determine whether they are active or standby nodes in the SQL Server High Availability cluster.

```sql
EXEC aws.ec2.instances.disable_instance_sql_ha_standby_detections 
@InstanceId='{{ InstanceId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="enable_instance_sql_ha_standby_detections">

Enable Amazon EC2 instances running in an SQL Server High Availability cluster for SQL Server High Availability instance standby detection monitoring. Once enabled, Amazon Web Services monitors the metadata for the instances to determine whether they are active or standby nodes in the SQL Server High Availability cluster. If the instances are determined to be standby failover nodes, Amazon Web Services automatically applies SQL Server licensing fee waiver for those instances. To register an instance, it must be running a Windows SQL Server license-included AMI and have the Amazon Web Services Systems Manager agent installed and running. Only Windows Server 2019 and later and SQL Server (Standard and Enterprise editions) 2017 and later are supported. For more information, see Prerequisites for using SQL Server High Availability instance standby detection.

```sql
EXEC aws.ec2.instances.enable_instance_sql_ha_standby_detections 
@InstanceId='{{ InstanceId }}' --required, 
@region='{{ region }}' --required, 
@SqlServerCredentials='{{ SqlServerCredentials }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="modify_instance_maintenance_options">

Modifies the recovery behavior of your instance to disable simplified automatic recovery or set the recovery behavior to default. The default configuration will not enable simplified automatic recovery for an unsupported instance type. For more information, see Simplified automatic recovery. Modifies the reboot migration behavior during a user-initiated reboot of an instance that has a pending system-reboot event. For more information, see Enable or disable reboot migration.

```sql
EXEC aws.ec2.instances.modify_instance_maintenance_options 
@InstanceId='{{ InstanceId }}' --required, 
@region='{{ region }}' --required, 
@AutoRecovery='{{ AutoRecovery }}', 
@RebootMigration='{{ RebootMigration }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="modify_instance_metadata_options">

Modify the instance metadata parameters on a running or stopped instance. When you modify the parameters on a stopped instance, they are applied when the instance is started. When you modify the parameters on a running instance, the API responds with a state of “pending”. After the parameter modifications are successfully applied to the instance, the state of the modifications changes from “pending” to “applied” in subsequent describe-instances API calls. For more information, see Instance metadata and user data in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.instances.modify_instance_metadata_options 
@InstanceId='{{ InstanceId }}' --required, 
@region='{{ region }}' --required, 
@HttpTokens='{{ HttpTokens }}', 
@HttpPutResponseHopLimit='{{ HttpPutResponseHopLimit }}', 
@HttpEndpoint='{{ HttpEndpoint }}', 
@DryRun={{ DryRun }}, 
@HttpProtocolIpv6='{{ HttpProtocolIpv6 }}', 
@InstanceMetadataTags='{{ InstanceMetadataTags }}'
;
```
</TabItem>
<TabItem value="modify_instance_placement">

Modifies the placement attributes for a specified instance. You can do the following: Modify the affinity between an instance and a Dedicated Host. When affinity is set to host and the instance is not associated with a specific Dedicated Host, the next time the instance is started, it is automatically associated with the host on which it lands. If the instance is restarted or rebooted, this relationship persists. Change the Dedicated Host with which an instance is associated. Change the instance tenancy of an instance. Move an instance to or from a placement group. At least one attribute for affinity, host ID, tenancy, or placement group name must be specified in the request. Affinity and tenancy can be modified in the same request. To modify the host ID, tenancy, placement group, or partition for an instance, the instance must be in the stopped state.

```sql
EXEC aws.ec2.instances.modify_instance_placement 
@InstanceId='{{ InstanceId }}' --required, 
@region='{{ region }}' --required, 
@GroupName='{{ GroupName }}', 
@PartitionNumber='{{ PartitionNumber }}', 
@HostResourceGroupArn='{{ HostResourceGroupArn }}', 
@GroupId='{{ GroupId }}', 
@Tenancy='{{ Tenancy }}', 
@Affinity='{{ Affinity }}', 
@HostId='{{ HostId }}'
;
```
</TabItem>
<TabItem value="modify_private_dns_name_options">

Modifies the options for instance hostnames for the specified instance.

```sql
EXEC aws.ec2.instances.modify_private_dns_name_options 
@InstanceId='{{ InstanceId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@PrivateDnsHostnameType='{{ PrivateDnsHostnameType }}', 
@EnableResourceNameDnsARecord={{ EnableResourceNameDnsARecord }}, 
@EnableResourceNameDnsAAAARecord={{ EnableResourceNameDnsAAAARecord }}
;
```
</TabItem>
<TabItem value="monitor_instances">

Enables detailed monitoring for a running instance. Otherwise, basic monitoring is enabled. For more information, see Monitor your instances using CloudWatch in the Amazon EC2 User Guide. To disable detailed monitoring, see UnmonitorInstances.

```sql
EXEC aws.ec2.instances.monitor_instances 
@InstanceId='{{ InstanceId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="move_capacity_reservation_instances">

Move available capacity from a source Capacity Reservation to a destination Capacity Reservation. The source Capacity Reservation and the destination Capacity Reservation must be active, owned by your Amazon Web Services account, and share the following: Instance type Platform Availability Zone Tenancy Placement group Capacity Reservation end time - At specific time or Manually.

```sql
EXEC aws.ec2.instances.move_capacity_reservation_instances 
@SourceCapacityReservationId='{{ SourceCapacityReservationId }}' --required, 
@DestinationCapacityReservationId='{{ DestinationCapacityReservationId }}' --required, 
@InstanceCount='{{ InstanceCount }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@ClientToken='{{ ClientToken }}'
;
```
</TabItem>
<TabItem value="reboot_instances">

Requests a reboot of the specified instances. This operation is asynchronous; it only queues a request to reboot the specified instances. The operation succeeds if the instances are valid and belong to you. Requests to reboot terminated instances are ignored. If an instance does not cleanly shut down within a few minutes, Amazon EC2 performs a hard reboot. For more information about troubleshooting, see Troubleshoot an unreachable instance in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.instances.reboot_instances 
@InstanceId='{{ InstanceId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="request_spot_instances">

Creates a Spot Instance request. For more information, see Work with Spot Instance in the Amazon EC2 User Guide. We strongly discourage using the RequestSpotInstances API because it is a legacy API with no planned investment. For options for requesting Spot Instances, see Which is the best Spot request method to use? in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.instances.request_spot_instances 
@region='{{ region }}' --required, 
@LaunchSpecification='{{ LaunchSpecification }}', 
@TagSpecification='{{ TagSpecification }}', 
@InstanceInterruptionBehavior='{{ InstanceInterruptionBehavior }}', 
@DryRun={{ DryRun }}, 
@SpotPrice='{{ SpotPrice }}', 
@ClientToken='{{ ClientToken }}', 
@InstanceCount='{{ InstanceCount }}', 
@Type='{{ Type }}', 
@ValidFrom='{{ ValidFrom }}', 
@ValidUntil='{{ ValidUntil }}', 
@LaunchGroup='{{ LaunchGroup }}', 
@AvailabilityZoneGroup='{{ AvailabilityZoneGroup }}', 
@BlockDurationMinutes='{{ BlockDurationMinutes }}'
;
```
</TabItem>
<TabItem value="reset_instance_attribute">

Resets an attribute of an instance to its default value. To reset the kernel or ramdisk, the instance must be in a stopped state. To reset the sourceDestCheck, the instance can be either running or stopped. The sourceDestCheck attribute controls whether source/destination checking is enabled. The default value is true, which means checking is enabled. This value must be false for a NAT instance to perform NAT. For more information, see NAT instances in the Amazon VPC User Guide.

```sql
EXEC aws.ec2.instances.reset_instance_attribute 
@InstanceId='{{ InstanceId }}' --required, 
@Attribute='{{ Attribute }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="send_diagnostic_interrupt">

Sends a diagnostic interrupt to the specified Amazon EC2 instance to trigger a kernel panic (on Linux instances), or a blue screen/stop error (on Windows instances). For instances based on Intel and AMD processors, the interrupt is received as a non-maskable interrupt (NMI). In general, the operating system crashes and reboots when a kernel panic or stop error is triggered. The operating system can also be configured to perform diagnostic tasks, such as generating a memory dump file, loading a secondary kernel, or obtaining a call trace. Before sending a diagnostic interrupt to your instance, ensure that its operating system is configured to perform the required diagnostic tasks. For more information about configuring your operating system to generate a crash dump when a kernel panic or stop error occurs, see Send a diagnostic interrupt (for advanced users) in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.instances.send_diagnostic_interrupt 
@InstanceId='{{ InstanceId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="start_instances">

Starts an Amazon EBS-backed instance that you've previously stopped. Instances that use Amazon EBS volumes as their root devices can be quickly stopped and started. When an instance is stopped, the compute resources are released and you are not billed for instance usage. However, your root partition Amazon EBS volume remains and continues to persist your data, and you are charged for Amazon EBS volume usage. You can restart your instance at any time. Every time you start your instance, Amazon EC2 charges a one-minute minimum for instance usage, and thereafter charges per second for instance usage. Before stopping an instance, make sure it is in a state from which it can be restarted. Stopping an instance does not preserve data stored in RAM. Performing this operation on an instance that uses an instance store as its root device returns an error. If you attempt to start a T3 instance with host tenancy and the unlimited CPU credit option, the request fails. The unlimited CPU credit option is not supported on Dedicated Hosts. Before you start the instance, either change its CPU credit option to standard, or change its tenancy to default or dedicated. For more information, see Stop and start Amazon EC2 instances in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.instances.start_instances 
@InstanceId='{{ InstanceId }}' --required, 
@region='{{ region }}' --required, 
@AdditionalInfo='{{ AdditionalInfo }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="stop_instances">

Stops an Amazon EBS-backed instance. You can restart your instance at any time using the StartInstances API. For more information, see Stop and start Amazon EC2 instances in the Amazon EC2 User Guide. When you stop or hibernate an instance, we shut it down. By default, this includes a graceful operating system (OS) shutdown. To bypass the graceful shutdown, use the skipOsShutdown parameter; however, this might risk data integrity. You can use the StopInstances operation together with the Hibernate parameter to hibernate an instance if the instance is enabled for hibernation and meets the hibernation prerequisites. Stopping an instance doesn't preserve data stored in RAM, while hibernation does. If hibernation fails, a normal shutdown occurs. For more information, see Hibernate your Amazon EC2 instance in the Amazon EC2 User Guide. If your instance appears stuck in the stopping state, there might be an issue with the underlying host computer. You can use the StopInstances operation together with the Force parameter to force stop your instance. For more information, see Troubleshoot Amazon EC2 instance stop issues in the Amazon EC2 User Guide. Stopping and hibernating an instance differs from rebooting or terminating it. For example, a stopped or hibernated instance retains its root volume and any data volumes, unlike terminated instances where these volumes are automatically deleted. For more information about the differences between stopping, hibernating, rebooting, and terminating instances, see Amazon EC2 instance state changes in the Amazon EC2 User Guide. We don't charge for instance usage or data transfer fees when an instance is stopped. However, the root volume and any data volumes remain and continue to persist your data, and you're charged for volume usage. Every time you start your instance, Amazon EC2 charges a one-minute minimum for instance usage, followed by per-second billing. You can't stop or hibernate instance store-backed instances.

```sql
EXEC aws.ec2.instances.stop_instances 
@InstanceId='{{ InstanceId }}' --required, 
@region='{{ region }}' --required, 
@Hibernate={{ Hibernate }}, 
@SkipOsShutdown={{ SkipOsShutdown }}, 
@DryRun={{ DryRun }}, 
@Force={{ Force }}
;
```
</TabItem>
<TabItem value="unmonitor_instances">

Disables detailed monitoring for a running instance. For more information, see Monitoring your instances and volumes in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.instances.unmonitor_instances 
@InstanceId='{{ InstanceId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
