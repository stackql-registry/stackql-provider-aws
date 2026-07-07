--- 
title: volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes
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

Creates, updates, deletes, gets or lists a <code>volumes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="volumes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.volumes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_volumes"
    values={[
        { label: 'describe_volumes', value: 'describe_volumes' }
    ]}
>
<TabItem value="describe_volumes">

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
    <td><CopyableCode code="Attachments" /></td>
    <td><code>string</code></td>
    <td>This parameter is not returned by CreateVolume. Information about the volume attachments.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone for the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone for the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string</code></td>
    <td>The time stamp when volume creation was initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="Encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the volume is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="FastRestored" /></td>
    <td><code>boolean</code></td>
    <td>This parameter is not returned by CreateVolume. Indicates whether the volume was created using fast snapshot restore.</td>
</tr>
<tr>
    <td><CopyableCode code="Iops" /></td>
    <td><code>integer</code></td>
    <td>The number of I/O operations per second (IOPS). For gp3, io1, and io2 volumes, this represents the number of IOPS that are provisioned for the volume. For gp2 volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key that was used to protect the volume encryption key for the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="MultiAttachEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Amazon EBS Multi-Attach is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="Operator" /></td>
    <td><code>string</code></td>
    <td>The service provider that manages the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="OutpostArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Outpost.</td>
</tr>
<tr>
    <td><CopyableCode code="Size" /></td>
    <td><code>integer</code></td>
    <td>The size of the volume, in GiBs.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotId" /></td>
    <td><code>string</code></td>
    <td>The snapshot from which the volume was created, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceVolumeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the source volume from which the volume copy was created. Only for volume copies.</td>
</tr>
<tr>
    <td><CopyableCode code="SseType" /></td>
    <td><code>string</code></td>
    <td>This parameter is not returned by CreateVolume. Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The volume state.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="Throughput" /></td>
    <td><code>integer</code></td>
    <td>The throughput that the volume supports, in MiB/s.</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeInitializationRate" /></td>
    <td><code>integer</code></td>
    <td>The Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate) specified for the volume during creation, in MiB/s. If no volume initialization rate was specified, the value is null.</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeType" /></td>
    <td><code>string</code></td>
    <td>The volume type.</td>
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
    <td><a href="#describe_volumes"><CopyableCode code="describe_volumes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-VolumeId"><code>VolumeId</code></a>, <a href="#parameter-IncludeManagedResources"><code>IncludeManagedResources</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes the specified EBS volumes or all of your EBS volumes. If you are describing a long list of volumes, we recommend that you paginate the output to make the list more manageable. For more information, see Pagination. For more information about EBS volumes, see Amazon EBS volumes in the Amazon EBS User Guide. We strongly recommend using only paginated requests. Unpaginated requests are susceptible to throttling and timeouts. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.</td>
</tr>
<tr>
    <td><a href="#create_volume"><CopyableCode code="create_volume" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a>, <a href="#parameter-AvailabilityZoneId"><code>AvailabilityZoneId</code></a>, <a href="#parameter-Encrypted"><code>Encrypted</code></a>, <a href="#parameter-Iops"><code>Iops</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-OutpostArn"><code>OutpostArn</code></a>, <a href="#parameter-Size"><code>Size</code></a>, <a href="#parameter-SnapshotId"><code>SnapshotId</code></a>, <a href="#parameter-VolumeType"><code>VolumeType</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-MultiAttachEnabled"><code>MultiAttachEnabled</code></a>, <a href="#parameter-Throughput"><code>Throughput</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-VolumeInitializationRate"><code>VolumeInitializationRate</code></a>, <a href="#parameter-Operator"><code>Operator</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates an EBS volume that can be attached to an instance in the same Availability Zone. You can create a new empty volume or restore a volume from an EBS snapshot. Any Amazon Web Services Marketplace product codes from the snapshot are propagated to the volume. You can create encrypted volumes. Encrypted volumes must be attached to instances that support Amazon EBS encryption. Volumes that are created from encrypted snapshots are also automatically encrypted. For more information, see Amazon EBS encryption in the Amazon EBS User Guide. You can tag your volumes during creation. For more information, see Tag your Amazon EC2 resources in the Amazon EC2 User Guide. For more information, see Create an Amazon EBS volume in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><a href="#attach_volume"><CopyableCode code="attach_volume" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-VolumeId"><code>VolumeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Device"><code>Device</code></a>, <a href="#parameter-EbsCardIndex"><code>EbsCardIndex</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Attaches an Amazon EBS volume to a running or stopped instance, and exposes it to the instance with the specified device name. The maximum number of Amazon EBS volumes that you can attach to an instance depends on the instance type. If you exceed the volume attachment limit for an instance type, the attachment request fails with the AttachmentLimitExceeded error. For more information, see Instance volume limits. After you attach an EBS volume, you must make it available for use. For more information, see Make an EBS volume available for use. If a volume has an Amazon Web Services Marketplace product code: The volume can be attached only to a stopped instance. Amazon Web Services Marketplace product codes are copied from the volume to the instance. You must be subscribed to the product. The instance type and operating system of the instance must support the product. For example, you can't detach a volume from a Windows instance and attach it to a Linux instance. For more information, see Attach an Amazon EBS volume to an instance in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><a href="#detach_volume"><CopyableCode code="detach_volume" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VolumeId"><code>VolumeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Device"><code>Device</code></a>, <a href="#parameter-Force"><code>Force</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Detaches an EBS volume from an instance. Make sure to unmount any file systems on the device within your operating system before detaching the volume. Failure to do so can result in the volume becoming stuck in the busy state while detaching. If this happens, detachment can be delayed indefinitely until you unmount the volume, force detachment, reboot the instance, or all three. If an EBS volume is the root device of an instance, it can't be detached while the instance is running. To detach the root volume, stop the instance first. When a volume with an Amazon Web Services Marketplace product code is detached from an instance, the product code is no longer associated with the instance. You can't detach or force detach volumes that are attached to Amazon Web Services-managed resources. Attempting to do this results in the UnsupportedOperationException exception. For more information, see Detach an Amazon EBS volume in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_volume"><CopyableCode code="delete_volume" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-VolumeId"><code>VolumeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified EBS volume. The volume must be in the available state (not attached to an instance). The volume can remain in the deleting state for several minutes. For more information, see Delete an Amazon EBS volume in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><a href="#copy_volumes"><CopyableCode code="copy_volumes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SourceVolumeId"><code>SourceVolumeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Iops"><code>Iops</code></a>, <a href="#parameter-Size"><code>Size</code></a>, <a href="#parameter-VolumeType"><code>VolumeType</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-MultiAttachEnabled"><code>MultiAttachEnabled</code></a>, <a href="#parameter-Throughput"><code>Throughput</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Creates a crash-consistent, point-in-time copy of an existing Amazon EBS volume within the same Availability Zone. The volume copy can be attached to an Amazon EC2 instance once it reaches the available state. For more information, see Copy an Amazon EBS volume.</td>
</tr>
<tr>
    <td><a href="#enable_volume_io"><CopyableCode code="enable_volume_io" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-VolumeId"><code>VolumeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Enables I/O operations for a volume that had I/O operations disabled because the data on the volume was potentially inconsistent.</td>
</tr>
<tr>
    <td><a href="#modify_volume"><CopyableCode code="modify_volume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-VolumeId"><code>VolumeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Size"><code>Size</code></a>, <a href="#parameter-VolumeType"><code>VolumeType</code></a>, <a href="#parameter-Iops"><code>Iops</code></a>, <a href="#parameter-Throughput"><code>Throughput</code></a>, <a href="#parameter-MultiAttachEnabled"><code>MultiAttachEnabled</code></a></td>
    <td>You can modify several parameters of an existing EBS volume, including volume size, volume type, and IOPS capacity. If your EBS volume is attached to a current-generation EC2 instance type, you might be able to apply these changes without stopping the instance or detaching the volume from it. For more information about modifying EBS volumes, see Amazon EBS Elastic Volumes in the Amazon EBS User Guide. When you complete a resize operation on your volume, you need to extend the volume's file-system size to take advantage of the new storage capacity. For more information, see Extend the file system. For more information, see Monitor the progress of volume modifications in the Amazon EBS User Guide. With previous-generation instance types, resizing an EBS volume might require detaching and reattaching the volume or stopping and restarting the instance. After you initiate a volume modification, you must wait for that modification to reach the completed state before you can initiate another modification for the same volume. You can modify a volume up to four times within a rolling 24-hour period, as long as the volume is in the in-use or available state, and all previous modifications for that volume are completed. If you exceed this limit, you get an error message that indicates when you can perform your next modification.</td>
</tr>
<tr>
    <td><a href="#restore_volume_from_recycle_bin"><CopyableCode code="restore_volume_from_recycle_bin" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-VolumeId"><code>VolumeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Restores a volume from the Recycle Bin. For more information, see Restore volumes from the Recycle Bin in the Amazon EBS User Guide.</td>
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
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr id="parameter-SourceVolumeId">
    <td><CopyableCode code="SourceVolumeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the source EBS volume to copy.</td>
</tr>
<tr id="parameter-VolumeId">
    <td><CopyableCode code="VolumeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the volume to restore.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AvailabilityZone">
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone in which to create the volume. For example, us-east-1a. Either AvailabilityZone or AvailabilityZoneId must be specified, but not both.</td>
</tr>
<tr id="parameter-AvailabilityZoneId">
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone in which to create the volume. For example, use1-az1. Either AvailabilityZone or AvailabilityZoneId must be specified, but not both.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensure Idempotency.</td>
</tr>
<tr id="parameter-Device">
    <td><CopyableCode code="Device" /></td>
    <td><code>string</code></td>
    <td>The device name.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EbsCardIndex">
    <td><CopyableCode code="EbsCardIndex" /></td>
    <td><code>integer</code></td>
    <td>The index of the EBS card. Some instance types support multiple EBS cards. The default EBS card index is 0.</td>
</tr>
<tr id="parameter-Encrypted">
    <td><CopyableCode code="Encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the volume should be encrypted. The effect of setting the encryption state to true depends on the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see Encryption by default in the Amazon EBS User Guide. Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption. For more information, see Supported instance types.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. attachment.attach-time - The time stamp when the attachment initiated. attachment.delete-on-termination - Whether the volume is deleted on instance termination. attachment.device - The device name specified in the block device mapping (for example, /dev/sda1). attachment.instance-id - The ID of the instance the volume is attached to. attachment.status - The attachment state (attaching | attached | detaching). availability-zone - The Availability Zone in which the volume was created. availability-zone-id - The ID of the Availability Zone in which the volume was created. create-time - The time stamp when the volume was created. encrypted - Indicates whether the volume is encrypted (true | false) fast-restored - Indicates whether the volume was created from a snapshot that is enabled for fast snapshot restore (true | false). multi-attach-enabled - Indicates whether the volume is enabled for Multi-Attach (true | false) operator.managed - A Boolean that indicates whether this is a managed volume. operator.principal - The principal that manages the volume. Only valid for managed volumes, where managed is true. size - The size of the volume, in GiB. snapshot-id - The snapshot from which the volume was created. status - The state of the volume (creating | available | in-use | deleting | deleted | error). tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. volume-id - The volume ID. volume-type - The Amazon EBS volume type (gp2 | gp3 | io1 | io2 | st1 | sc1| standard)</td>
</tr>
<tr id="parameter-Force">
    <td><CopyableCode code="Force" /></td>
    <td><code>boolean</code></td>
    <td>Forces detachment if the previous detachment attempt did not occur cleanly (for example, logging into an instance, unmounting the volume, and detaching normally). This option can lead to data loss or a corrupted file system. Use this option only as a last resort to detach a volume from a failed instance. The instance won't have an opportunity to flush file system caches or file system metadata. If you use this option, you must perform file system check and repair procedures.</td>
</tr>
<tr id="parameter-IncludeManagedResources">
    <td><CopyableCode code="IncludeManagedResources" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to include managed resources in the output. If this parameter is set to true, the output includes resources that are managed by Amazon Web Services services, even if managed resource visibility is set to hidden.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance. If you are detaching a Multi-Attach enabled volume, you must specify an instance ID.</td>
</tr>
<tr id="parameter-Iops">
    <td><CopyableCode code="Iops" /></td>
    <td><code>integer</code></td>
    <td>The target IOPS rate of the volume. This parameter is valid only for gp3, io1, and io2 volumes. The following are the supported values for each volume type: gp3: 3,000 - 80,000 IOPS io1: 100 - 64,000 IOPS io2: 100 - 256,000 IOPS Instances built on the Nitro System can support up to 256,000 IOPS. Other instances can support up to 32,000 IOPS. Default: The existing value is retained if you keep the same volume type. If you change the volume type to io1, io2, or gp3, the default is 3,000.</td>
</tr>
<tr id="parameter-KmsKeyId">
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the KMS key to use for Amazon EBS encryption. If this parameter is not specified, your KMS key for Amazon EBS is used. If KmsKeyId is specified, the encrypted state must be true. You can specify the KMS key using any of the following: Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab. Key alias. For example, alias/ExampleAlias. Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab. Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias. Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid, the action can appear to complete, but eventually fails.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-MultiAttachEnabled">
    <td><CopyableCode code="MultiAttachEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the volume to up to 16 Nitro-based instances in the same Availability Zone. This parameter is supported with io1 and io2 volumes only. For more information, see Amazon EBS Multi-Attach in the Amazon EBS User Guide.</td>
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
<tr id="parameter-OutpostArn">
    <td><CopyableCode code="OutpostArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Outpost on which to create the volume. If you intend to use a volume with an instance running on an outpost, then you must create the volume on the same outpost as the instance. You can't use a volume created in an Amazon Web Services Region with an instance on an Amazon Web Services outpost, or the other way around.</td>
</tr>
<tr id="parameter-Size">
    <td><CopyableCode code="Size" /></td>
    <td><code>integer</code></td>
    <td>The target size of the volume, in GiB. The target volume size must be greater than or equal to the existing size of the volume. The following are the supported volumes sizes for each volume type: gp2: 1 - 16,384 GiB gp3: 1 - 65,536 GiB io1: 4 - 16,384 GiB io2: 4 - 65,536 GiB st1 and sc1: 125 - 16,384 GiB standard: 1 - 1024 GiB Default: The existing size is retained.</td>
</tr>
<tr id="parameter-SnapshotId">
    <td><CopyableCode code="SnapshotId" /></td>
    <td><code>string</code></td>
    <td>The snapshot from which to create the volume. You must specify either a snapshot ID or a volume size.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the volume copy during creation.</td>
</tr>
<tr id="parameter-Throughput">
    <td><CopyableCode code="Throughput" /></td>
    <td><code>integer</code></td>
    <td>The target throughput of the volume, in MiB/s. This parameter is valid only for gp3 volumes. The maximum value is 2,000. Default: The existing value is retained if the source and target volume type is gp3. Otherwise, the default value is 125. Valid Range: Minimum value of 125. Maximum value of 2,000.</td>
</tr>
<tr id="parameter-VolumeId">
    <td><CopyableCode code="VolumeId" /></td>
    <td><code>array</code></td>
    <td>The volume IDs. If not specified, then all volumes are included in the response.</td>
</tr>
<tr id="parameter-VolumeInitializationRate">
    <td><CopyableCode code="VolumeInitializationRate" /></td>
    <td><code>integer</code></td>
    <td>Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume. This is also known as volume initialization. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation. This parameter is supported only for volumes created from snapshots. Omit this parameter if: You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation. If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore. You want to create a volume that is initialized at the default rate. For more information, see Initialize Amazon EBS volumes in the Amazon EC2 User Guide. Valid range: 100 - 300 MiB/s</td>
</tr>
<tr id="parameter-VolumeType">
    <td><CopyableCode code="VolumeType" /></td>
    <td><code>string</code></td>
    <td>The target EBS volume type of the volume. For more information, see Amazon EBS volume types in the Amazon EBS User Guide. Default: The existing type is retained.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_volumes"
    values={[
        { label: 'describe_volumes', value: 'describe_volumes' }
    ]}
>
<TabItem value="describe_volumes">

Describes the specified EBS volumes or all of your EBS volumes. If you are describing a long list of volumes, we recommend that you paginate the output to make the list more manageable. For more information, see Pagination. For more information about EBS volumes, see Amazon EBS volumes in the Amazon EBS User Guide. We strongly recommend using only paginated requests. Unpaginated requests are susceptible to throttling and timeouts. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.

```sql
SELECT
Attachments,
AvailabilityZone,
AvailabilityZoneId,
CreateTime,
Encrypted,
FastRestored,
Iops,
KmsKeyId,
MultiAttachEnabled,
Operator,
OutpostArn,
Size,
SnapshotId,
SourceVolumeId,
SseType,
State,
Tags,
Throughput,
VolumeId,
VolumeInitializationRate,
VolumeType
FROM aws.ec2.volumes
WHERE region = '{{ region }}' -- required
AND VolumeId = '{{ VolumeId }}'
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
    defaultValue="create_volume"
    values={[
        { label: 'create_volume', value: 'create_volume' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_volume">

Creates an EBS volume that can be attached to an instance in the same Availability Zone. You can create a new empty volume or restore a volume from an EBS snapshot. Any Amazon Web Services Marketplace product codes from the snapshot are propagated to the volume. You can create encrypted volumes. Encrypted volumes must be attached to instances that support Amazon EBS encryption. Volumes that are created from encrypted snapshots are also automatically encrypted. For more information, see Amazon EBS encryption in the Amazon EBS User Guide. You can tag your volumes during creation. For more information, see Tag your Amazon EC2 resources in the Amazon EC2 User Guide. For more information, see Create an Amazon EBS volume in the Amazon EBS User Guide.

```sql
INSERT INTO aws.ec2.volumes (
region,
AvailabilityZone,
AvailabilityZoneId,
Encrypted,
Iops,
KmsKeyId,
OutpostArn,
Size,
SnapshotId,
VolumeType,
TagSpecification,
MultiAttachEnabled,
Throughput,
ClientToken,
VolumeInitializationRate,
Operator,
DryRun
)
SELECT 
'{{ region }}',
'{{ AvailabilityZone }}',
'{{ AvailabilityZoneId }}',
'{{ Encrypted }}',
'{{ Iops }}',
'{{ KmsKeyId }}',
'{{ OutpostArn }}',
'{{ Size }}',
'{{ SnapshotId }}',
'{{ VolumeType }}',
'{{ TagSpecification }}',
'{{ MultiAttachEnabled }}',
'{{ Throughput }}',
'{{ ClientToken }}',
'{{ VolumeInitializationRate }}',
'{{ Operator }}',
'{{ DryRun }}'
RETURNING
Attachments,
AvailabilityZone,
AvailabilityZoneId,
CreateTime,
Encrypted,
FastRestored,
Iops,
KmsKeyId,
MultiAttachEnabled,
Operator,
OutpostArn,
Size,
SnapshotId,
SourceVolumeId,
SseType,
State,
Tags,
Throughput,
VolumeId,
VolumeInitializationRate,
VolumeType
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: volumes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the volumes resource.
    - name: AvailabilityZone
      value: "{{ AvailabilityZone }}"
      description: The ID of the Availability Zone in which to create the volume. For example, us-east-1a. Either AvailabilityZone or AvailabilityZoneId must be specified, but not both.
      description: The ID of the Availability Zone in which to create the volume. For example, us-east-1a. Either AvailabilityZone or AvailabilityZoneId must be specified, but not both.
    - name: AvailabilityZoneId
      value: "{{ AvailabilityZoneId }}"
      description: The ID of the Availability Zone in which to create the volume. For example, use1-az1. Either AvailabilityZone or AvailabilityZoneId must be specified, but not both.
      description: The ID of the Availability Zone in which to create the volume. For example, use1-az1. Either AvailabilityZone or AvailabilityZoneId must be specified, but not both.
    - name: Encrypted
      value: {{ Encrypted }}
      description: Indicates whether the volume should be encrypted. The effect of setting the encryption state to true depends on the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see Encryption by default in the Amazon EBS User Guide. Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption. For more information, see Supported instance types.
      description: Indicates whether the volume should be encrypted. The effect of setting the encryption state to true depends on the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see Encryption by default in the Amazon EBS User Guide. Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption. For more information, see Supported instance types.
    - name: Iops
      value: {{ Iops }}
      description: The number of I/O operations per second (IOPS) to provision for the volume. Required for io1 and io2 volumes. Optional for gp3 volumes. Omit for all other volume types. Valid ranges: gp3: 3,000 (default) - 80,000 IOPS io1: 100 - 64,000 IOPS io2: 100 - 256,000 IOPS Instances built on the Nitro System can support up to 256,000 IOPS. Other instances can support up to 32,000 IOPS.
      description: The number of I/O operations per second (IOPS) to provision for the volume. Required for io1 and io2 volumes. Optional for gp3 volumes. Omit for all other volume types. Valid ranges: gp3: 3,000 (default) - 80,000 IOPS io1: 100 - 64,000 IOPS io2: 100 - 256,000 IOPS Instances built on the Nitro System can support up to 256,000 IOPS. Other instances can support up to 32,000 IOPS.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: The identifier of the KMS key to use for Amazon EBS encryption. If this parameter is not specified, your KMS key for Amazon EBS is used. If KmsKeyId is specified, the encrypted state must be true. You can specify the KMS key using any of the following: Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab. Key alias. For example, alias/ExampleAlias. Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab. Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias. Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid, the action can appear to complete, but eventually fails.
      description: The identifier of the KMS key to use for Amazon EBS encryption. If this parameter is not specified, your KMS key for Amazon EBS is used. If KmsKeyId is specified, the encrypted state must be true. You can specify the KMS key using any of the following: Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab. Key alias. For example, alias/ExampleAlias. Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab. Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias. Amazon Web Services authenticates the KMS key asynchronously. Therefore, if you specify an ID, alias, or ARN that is not valid, the action can appear to complete, but eventually fails.
    - name: OutpostArn
      value: "{{ OutpostArn }}"
      description: The Amazon Resource Name (ARN) of the Outpost on which to create the volume. If you intend to use a volume with an instance running on an outpost, then you must create the volume on the same outpost as the instance. You can't use a volume created in an Amazon Web Services Region with an instance on an Amazon Web Services outpost, or the other way around.
      description: The Amazon Resource Name (ARN) of the Outpost on which to create the volume. If you intend to use a volume with an instance running on an outpost, then you must create the volume on the same outpost as the instance. You can't use a volume created in an Amazon Web Services Region with an instance on an Amazon Web Services outpost, or the other way around.
    - name: Size
      value: {{ Size }}
      description: The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size, and you can specify a volume size that is equal to or larger than the snapshot size. Valid sizes: gp2: 1 - 16,384 GiB gp3: 1 - 65,536 GiB io1: 4 - 16,384 GiB io2: 4 - 65,536 GiB st1 and sc1: 125 - 16,384 GiB standard: 1 - 1024 GiB
      description: The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size, and you can specify a volume size that is equal to or larger than the snapshot size. Valid sizes: gp2: 1 - 16,384 GiB gp3: 1 - 65,536 GiB io1: 4 - 16,384 GiB io2: 4 - 65,536 GiB st1 and sc1: 125 - 16,384 GiB standard: 1 - 1024 GiB
    - name: SnapshotId
      value: "{{ SnapshotId }}"
      description: The snapshot from which to create the volume. You must specify either a snapshot ID or a volume size.
      description: The snapshot from which to create the volume. You must specify either a snapshot ID or a volume size.
    - name: VolumeType
      value: "{{ VolumeType }}"
      description: The volume type. This parameter can be one of the following values: General Purpose SSD: gp2 | gp3 Provisioned IOPS SSD: io1 | io2 Throughput Optimized HDD: st1 Cold HDD: sc1 Magnetic: standard Throughput Optimized HDD (st1) and Cold HDD (sc1) volumes can't be used as boot volumes. For more information, see Amazon EBS volume types in the Amazon EBS User Guide. Default: gp2
      description: The volume type. This parameter can be one of the following values: General Purpose SSD: gp2 | gp3 Provisioned IOPS SSD: io1 | io2 Throughput Optimized HDD: st1 Cold HDD: sc1 Magnetic: standard Throughput Optimized HDD (st1) and Cold HDD (sc1) volumes can't be used as boot volumes. For more information, see Amazon EBS volume types in the Amazon EBS User Guide. Default: gp2
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the volume during creation.
      description: The tags to apply to the volume during creation.
    - name: MultiAttachEnabled
      value: {{ MultiAttachEnabled }}
      description: Indicates whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the volume to up to 16 Instances built on the Nitro System in the same Availability Zone. This parameter is supported with io1 and io2 volumes only. For more information, see Amazon EBS Multi-Attach in the Amazon EBS User Guide.
      description: Indicates whether to enable Amazon EBS Multi-Attach. If you enable Multi-Attach, you can attach the volume to up to 16 Instances built on the Nitro System in the same Availability Zone. This parameter is supported with io1 and io2 volumes only. For more information, see Amazon EBS Multi-Attach in the Amazon EBS User Guide.
    - name: Throughput
      value: {{ Throughput }}
      description: The throughput to provision for the volume, in MiB/s. Supported for gp3 volumes only. Omit for all other volume types. Valid Range: 125 - 2000 MiB/s
      description: The throughput to provision for the volume, in MiB/s. Supported for gp3 volumes only. Omit for all other volume types. Valid Range: 125 - 2000 MiB/s
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensure Idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensure Idempotency.
    - name: VolumeInitializationRate
      value: {{ VolumeInitializationRate }}
      description: Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume. This is also known as volume initialization. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation. This parameter is supported only for volumes created from snapshots. Omit this parameter if: You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation. If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore. You want to create a volume that is initialized at the default rate. For more information, see Initialize Amazon EBS volumes in the Amazon EC2 User Guide. Valid range: 100 - 300 MiB/s
      description: Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume. This is also known as volume initialization. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation. This parameter is supported only for volumes created from snapshots. Omit this parameter if: You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation. If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore. You want to create a volume that is initialized at the default rate. For more information, see Initialize Amazon EBS volumes in the Amazon EC2 User Guide. Valid range: 100 - 300 MiB/s
    - name: Operator
      value: "{{ Operator }}"
      description: Reserved for internal use.
      description: Reserved for internal use.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_volume"
    values={[
        { label: 'attach_volume', value: 'attach_volume' },
        { label: 'detach_volume', value: 'detach_volume' }
    ]}
>
<TabItem value="attach_volume">

Attaches an Amazon EBS volume to a running or stopped instance, and exposes it to the instance with the specified device name. The maximum number of Amazon EBS volumes that you can attach to an instance depends on the instance type. If you exceed the volume attachment limit for an instance type, the attachment request fails with the AttachmentLimitExceeded error. For more information, see Instance volume limits. After you attach an EBS volume, you must make it available for use. For more information, see Make an EBS volume available for use. If a volume has an Amazon Web Services Marketplace product code: The volume can be attached only to a stopped instance. Amazon Web Services Marketplace product codes are copied from the volume to the instance. You must be subscribed to the product. The instance type and operating system of the instance must support the product. For example, you can't detach a volume from a Windows instance and attach it to a Linux instance. For more information, see Attach an Amazon EBS volume to an instance in the Amazon EBS User Guide.

```sql
UPDATE aws.ec2.volumes
SET 
-- No updatable properties
WHERE 
InstanceId = '{{ InstanceId }}' --required
AND VolumeId = '{{ VolumeId }}' --required
AND region = '{{ region }}' --required
AND Device = '{{ Device}}'
AND EbsCardIndex = '{{ EbsCardIndex}}'
AND DryRun = {{ DryRun}}
RETURNING
AssociatedResource,
AttachTime,
DeleteOnTermination,
Device,
EbsCardIndex,
InstanceId,
InstanceOwningService,
State,
VolumeId;
```
</TabItem>
<TabItem value="detach_volume">

Detaches an EBS volume from an instance. Make sure to unmount any file systems on the device within your operating system before detaching the volume. Failure to do so can result in the volume becoming stuck in the busy state while detaching. If this happens, detachment can be delayed indefinitely until you unmount the volume, force detachment, reboot the instance, or all three. If an EBS volume is the root device of an instance, it can't be detached while the instance is running. To detach the root volume, stop the instance first. When a volume with an Amazon Web Services Marketplace product code is detached from an instance, the product code is no longer associated with the instance. You can't detach or force detach volumes that are attached to Amazon Web Services-managed resources. Attempting to do this results in the UnsupportedOperationException exception. For more information, see Detach an Amazon EBS volume in the Amazon EBS User Guide.

```sql
UPDATE aws.ec2.volumes
SET 
-- No updatable properties
WHERE 
VolumeId = '{{ VolumeId }}' --required
AND region = '{{ region }}' --required
AND Device = '{{ Device}}'
AND Force = {{ Force}}
AND InstanceId = '{{ InstanceId}}'
AND DryRun = {{ DryRun}}
RETURNING
AssociatedResource,
AttachTime,
DeleteOnTermination,
Device,
EbsCardIndex,
InstanceId,
InstanceOwningService,
State,
VolumeId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_volume"
    values={[
        { label: 'delete_volume', value: 'delete_volume' }
    ]}
>
<TabItem value="delete_volume">

Deletes the specified EBS volume. The volume must be in the available state (not attached to an instance). The volume can remain in the deleting state for several minutes. For more information, see Delete an Amazon EBS volume in the Amazon EBS User Guide.

```sql
DELETE FROM aws.ec2.volumes
WHERE VolumeId = '{{ VolumeId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="copy_volumes"
    values={[
        { label: 'copy_volumes', value: 'copy_volumes' },
        { label: 'enable_volume_io', value: 'enable_volume_io' },
        { label: 'modify_volume', value: 'modify_volume' },
        { label: 'restore_volume_from_recycle_bin', value: 'restore_volume_from_recycle_bin' }
    ]}
>
<TabItem value="copy_volumes">

Creates a crash-consistent, point-in-time copy of an existing Amazon EBS volume within the same Availability Zone. The volume copy can be attached to an Amazon EC2 instance once it reaches the available state. For more information, see Copy an Amazon EBS volume.

```sql
EXEC aws.ec2.volumes.copy_volumes 
@SourceVolumeId='{{ SourceVolumeId }}' --required, 
@region='{{ region }}' --required, 
@Iops='{{ Iops }}', 
@Size='{{ Size }}', 
@VolumeType='{{ VolumeType }}', 
@DryRun={{ DryRun }}, 
@TagSpecification='{{ TagSpecification }}', 
@MultiAttachEnabled={{ MultiAttachEnabled }}, 
@Throughput='{{ Throughput }}', 
@ClientToken='{{ ClientToken }}'
;
```
</TabItem>
<TabItem value="enable_volume_io">

Enables I/O operations for a volume that had I/O operations disabled because the data on the volume was potentially inconsistent.

```sql
EXEC aws.ec2.volumes.enable_volume_io 
@VolumeId='{{ VolumeId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="modify_volume">

You can modify several parameters of an existing EBS volume, including volume size, volume type, and IOPS capacity. If your EBS volume is attached to a current-generation EC2 instance type, you might be able to apply these changes without stopping the instance or detaching the volume from it. For more information about modifying EBS volumes, see Amazon EBS Elastic Volumes in the Amazon EBS User Guide. When you complete a resize operation on your volume, you need to extend the volume's file-system size to take advantage of the new storage capacity. For more information, see Extend the file system. For more information, see Monitor the progress of volume modifications in the Amazon EBS User Guide. With previous-generation instance types, resizing an EBS volume might require detaching and reattaching the volume or stopping and restarting the instance. After you initiate a volume modification, you must wait for that modification to reach the completed state before you can initiate another modification for the same volume. You can modify a volume up to four times within a rolling 24-hour period, as long as the volume is in the in-use or available state, and all previous modifications for that volume are completed. If you exceed this limit, you get an error message that indicates when you can perform your next modification.

```sql
EXEC aws.ec2.volumes.modify_volume 
@VolumeId='{{ VolumeId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@Size='{{ Size }}', 
@VolumeType='{{ VolumeType }}', 
@Iops='{{ Iops }}', 
@Throughput='{{ Throughput }}', 
@MultiAttachEnabled={{ MultiAttachEnabled }}
;
```
</TabItem>
<TabItem value="restore_volume_from_recycle_bin">

Restores a volume from the Recycle Bin. For more information, see Restore volumes from the Recycle Bin in the Amazon EBS User Guide.

```sql
EXEC aws.ec2.volumes.restore_volume_from_recycle_bin 
@VolumeId='{{ VolumeId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
