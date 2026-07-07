--- 
title: images
hide_title: false
hide_table_of_contents: false
keywords:
  - images
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

Creates, updates, deletes, gets or lists an <code>images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_images"
    values={[
        { label: 'describe_images', value: 'describe_images' }
    ]}
>
<TabItem value="describe_images">

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
    <td><CopyableCode code="Architecture" /></td>
    <td><code>string</code></td>
    <td>The architecture of the image.</td>
</tr>
<tr>
    <td><CopyableCode code="BlockDeviceMappings" /></td>
    <td><code>string</code></td>
    <td>Any block device mapping entries.</td>
</tr>
<tr>
    <td><CopyableCode code="BootMode" /></td>
    <td><code>string</code></td>
    <td>The boot mode of the image. For more information, see Instance launch behavior with Amazon EC2 boot modes in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string</code></td>
    <td>The date and time the image was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DeprecationTime" /></td>
    <td><code>string</code></td>
    <td>The date and time to deprecate the AMI, in UTC, in the following format: YYYY-MM-DDTHH:MM:SSZ. If you specified a value for seconds, Amazon EC2 rounds the seconds to the nearest minute.</td>
</tr>
<tr>
    <td><CopyableCode code="DeregistrationProtection" /></td>
    <td><code>string</code></td>
    <td>Indicates whether deregistration protection is enabled for the AMI.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the AMI that was provided during image creation.</td>
</tr>
<tr>
    <td><CopyableCode code="EnaSupport" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether enhanced networking with ENA is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="FreeTierEligible" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the image is eligible for Amazon Web Services Free Tier. If true, the AMI is eligible for Free Tier and can be used to launch instances under the Free Tier limits. If false, the AMI is not eligible for Free Tier.</td>
</tr>
<tr>
    <td><CopyableCode code="Hypervisor" /></td>
    <td><code>string</code></td>
    <td>The hypervisor type of the image. Only xen is supported. ovm is not supported.</td>
</tr>
<tr>
    <td><CopyableCode code="ImageAllowed" /></td>
    <td><code>boolean</code></td>
    <td>If true, the AMI satisfies the criteria for Allowed AMIs and can be discovered and used in the account. If false and Allowed AMIs is set to enabled, the AMI can't be discovered or used in the account. If false and Allowed AMIs is set to audit-mode, the AMI can be discovered and used in the account. For more information, see Control the discovery and use of AMIs in Amazon EC2 with Allowed AMIs in Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>The ID of the AMI.</td>
</tr>
<tr>
    <td><CopyableCode code="ImageLocation" /></td>
    <td><code>string</code></td>
    <td>The location of the AMI.</td>
</tr>
<tr>
    <td><CopyableCode code="ImageOwnerAlias" /></td>
    <td><code>string</code></td>
    <td>The owner alias (amazon | aws-backup-vault | aws-marketplace).</td>
</tr>
<tr>
    <td><CopyableCode code="ImageType" /></td>
    <td><code>string</code></td>
    <td>The type of image.</td>
</tr>
<tr>
    <td><CopyableCode code="ImdsSupport" /></td>
    <td><code>string</code></td>
    <td>If v2.0, it indicates that IMDSv2 is specified in the AMI. Instances launched from this AMI will have HttpTokens automatically set to required so that, by default, the instance requires that IMDSv2 is used when requesting instance metadata. In addition, HttpPutResponseHopLimit is set to 2. For more information, see Configure the AMI in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="KernelId" /></td>
    <td><code>string</code></td>
    <td>The kernel associated with the image, if any. Only applicable for machine images.</td>
</tr>
<tr>
    <td><CopyableCode code="LastLaunchedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the AMI was last used to launch an EC2 instance. When the AMI is used to launch an instance, there is a 24-hour delay before that usage is reported. lastLaunchedTime data is available starting April 2017.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the AMI that was provided during image creation.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the image.</td>
</tr>
<tr>
    <td><CopyableCode code="Platform" /></td>
    <td><code>string</code></td>
    <td>This value is set to windows for Windows AMIs; otherwise, it is blank.</td>
</tr>
<tr>
    <td><CopyableCode code="PlatformDetails" /></td>
    <td><code>string</code></td>
    <td>The platform details associated with the billing code of the AMI. For more information, see Understand AMI billing information in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="ProductCodes" /></td>
    <td><code>string</code></td>
    <td>Any product codes associated with the AMI.</td>
</tr>
<tr>
    <td><CopyableCode code="Public" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the image has public launch permissions. The value is true if this image has public launch permissions or false if it has only implicit and explicit launch permissions.</td>
</tr>
<tr>
    <td><CopyableCode code="RamdiskId" /></td>
    <td><code>string</code></td>
    <td>The RAM disk associated with the image, if any. Only applicable for machine images.</td>
</tr>
<tr>
    <td><CopyableCode code="RootDeviceName" /></td>
    <td><code>string</code></td>
    <td>The device name of the root device volume (for example, /dev/sda1).</td>
</tr>
<tr>
    <td><CopyableCode code="RootDeviceType" /></td>
    <td><code>string</code></td>
    <td>The type of root device used by the AMI. The AMI can use an Amazon EBS volume or an instance store volume.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceImageId" /></td>
    <td><code>string</code></td>
    <td>The ID of the source AMI from which the AMI was created.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceImageRegion" /></td>
    <td><code>string</code></td>
    <td>The Region of the source AMI.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceInstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance that the AMI was created from if the AMI was created using CreateImage. This field only appears if the AMI was created using CreateImage.</td>
</tr>
<tr>
    <td><CopyableCode code="SriovNetSupport" /></td>
    <td><code>string</code></td>
    <td>Specifies whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the AMI. If the state is available, the image is successfully registered and can be used to launch an instance.</td>
</tr>
<tr>
    <td><CopyableCode code="StateReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the state change.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the image.</td>
</tr>
<tr>
    <td><CopyableCode code="TpmSupport" /></td>
    <td><code>string</code></td>
    <td>If the image is configured for NitroTPM support, the value is v2.0. For more information, see NitroTPM in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="UsageOperation" /></td>
    <td><code>string</code></td>
    <td>The operation of the Amazon EC2 instance and the billing code that is associated with the AMI. usageOperation corresponds to the lineitem/Operation column on your Amazon Web Services Cost and Usage Report and in the Amazon Web Services Price List API. You can view these fields on the Instances or AMIs pages in the Amazon EC2 console, or in the responses that are returned by the DescribeImages command in the Amazon EC2 API, or the describe-images command in the CLI.</td>
</tr>
<tr>
    <td><CopyableCode code="VirtualizationType" /></td>
    <td><code>string</code></td>
    <td>The type of virtualization of the AMI.</td>
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
    <td><a href="#describe_images"><CopyableCode code="describe_images" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ExecutableBy"><code>ExecutableBy</code></a>, <a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-Owner"><code>Owner</code></a>, <a href="#parameter-IncludeDeprecated"><code>IncludeDeprecated</code></a>, <a href="#parameter-IncludeDisabled"><code>IncludeDisabled</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes the specified images (AMIs, AKIs, and ARIs) available to you or all of the images available to you. The images available to you include public images, private images that you own, and private images owned by other Amazon Web Services accounts for which you have explicit launch permissions. Recently deregistered images appear in the returned results for a short interval and then return empty results. After all instances that reference a deregistered AMI are terminated, specifying the ID of the image will eventually return an error indicating that the AMI ID cannot be found. When Allowed AMIs is set to enabled, only allowed images are returned in the results, with the imageAllowed field set to true for each image. In audit-mode, the imageAllowed field is set to true for images that meet the account's Allowed AMIs criteria, and false for images that don't meet the criteria. For more information, see Allowed AMIs. The Amazon EC2 API follows an eventual consistency model. This means that the result of an API command you run that creates or modifies resources might not be immediately available to all subsequent commands you run. For guidance on how to manage eventual consistency, see Eventual consistency in the Amazon EC2 API in the Amazon EC2 Developer Guide. We strongly recommend using only paginated requests. Unpaginated requests are susceptible to throttling and timeouts. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.</td>
</tr>
<tr>
    <td><a href="#create_image"><CopyableCode code="create_image" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-SnapshotLocation"><code>SnapshotLocation</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-NoReboot"><code>NoReboot</code></a>, <a href="#parameter-BlockDeviceMapping"><code>BlockDeviceMapping</code></a></td>
    <td>Creates an Amazon EBS-backed AMI from an Amazon EBS-backed instance that is either running or stopped. If you customized your instance with instance store volumes or Amazon EBS volumes in addition to the root device volume, the new AMI contains block device mapping information for those volumes. When you launch an instance from this new AMI, the instance automatically launches with those additional volumes. The location of the source instance determines where you can create the snapshots of the AMI: If the source instance is in a Region, you must create the snapshots in the same Region as the instance. If the source instance is in a Local Zone, you can create the snapshots in the same Local Zone or in its parent Region. For more information, see Create an Amazon EBS-backed AMI in the Amazon Elastic Compute Cloud User Guide.</td>
</tr>
<tr>
    <td><a href="#register_image"><CopyableCode code="register_image" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ImageLocation"><code>ImageLocation</code></a>, <a href="#parameter-BillingProduct"><code>BillingProduct</code></a>, <a href="#parameter-BootMode"><code>BootMode</code></a>, <a href="#parameter-TpmSupport"><code>TpmSupport</code></a>, <a href="#parameter-UefiData"><code>UefiData</code></a>, <a href="#parameter-ImdsSupport"><code>ImdsSupport</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Architecture"><code>Architecture</code></a>, <a href="#parameter-KernelId"><code>KernelId</code></a>, <a href="#parameter-RamdiskId"><code>RamdiskId</code></a>, <a href="#parameter-RootDeviceName"><code>RootDeviceName</code></a>, <a href="#parameter-BlockDeviceMapping"><code>BlockDeviceMapping</code></a>, <a href="#parameter-VirtualizationType"><code>VirtualizationType</code></a>, <a href="#parameter-SriovNetSupport"><code>SriovNetSupport</code></a>, <a href="#parameter-EnaSupport"><code>EnaSupport</code></a></td>
    <td>Registers an AMI. When you're creating an instance-store backed AMI, registering the AMI is the final step in the creation process. For more information about creating AMIs, see Create an AMI from a snapshot and Create an instance-store backed AMI in the Amazon EC2 User Guide. If needed, you can deregister an AMI at any time. Any modifications you make to an AMI backed by an instance store volume invalidates its registration. If you make changes to an image, deregister the previous image and register the new image. Register a snapshot of a root device volume You can use RegisterImage to create an Amazon EBS-backed Linux AMI from a snapshot of a root device volume. You specify the snapshot using a block device mapping. You can't set the encryption state of the volume using the block device mapping. If the snapshot is encrypted, or encryption by default is enabled, the root volume of an instance launched from the AMI is encrypted. For more information, see Create an AMI from a snapshot and Use encryption with EBS-backed AMIs in the Amazon EC2 User Guide. Amazon Web Services Marketplace product codes If any snapshots have Amazon Web Services Marketplace product codes, they are copied to the new AMI. In most cases, AMIs for Windows, RedHat, SUSE, and SQL Server require correct licensing information to be present on the AMI. For more information, see Understand AMI billing information in the Amazon EC2 User Guide. When creating an AMI from a snapshot, the RegisterImage operation derives the correct billing information from the snapshot's metadata, but this requires the appropriate metadata to be present. To verify if the correct billing information was applied, check the PlatformDetails field on the new AMI. If the field is empty or doesn't match the expected operating system code (for example, Windows, RedHat, SUSE, or SQL), the AMI creation was unsuccessful, and you should discard the AMI and instead create the AMI from an instance. For more information, see Create an AMI from an instance in the Amazon EC2 User Guide. If you purchase a Reserved Instance to apply to an On-Demand Instance that was launched from an AMI with a billing product code, make sure that the Reserved Instance has the matching billing product code. If you purchase a Reserved Instance without the matching billing product code, the Reserved Instance is not applied to the On-Demand Instance. For information about how to obtain the platform details and billing information of an AMI, see Understand AMI billing information in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#deregister_image"><CopyableCode code="deregister_image" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DeleteAssociatedSnapshots"><code>DeleteAssociatedSnapshots</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deregisters the specified AMI. A deregistered AMI can't be used to launch new instances. If a deregistered EBS-backed AMI matches a Recycle Bin retention rule, it moves to the Recycle Bin for the specified retention period. It can be restored before its retention period expires, after which it is permanently deleted. If the deregistered AMI doesn't match a retention rule, it is permanently deleted immediately. For more information, see Recover deleted Amazon EBS snapshots and EBS-backed AMIs with Recycle Bin in the Amazon EBS User Guide. When deregistering an EBS-backed AMI, you can optionally delete its associated snapshots at the same time. However, if a snapshot is associated with multiple AMIs, it won't be deleted even if specified for deletion, although the AMI will still be deregistered. Deregistering an AMI does not delete the following: Instances already launched from the AMI. You'll continue to incur usage costs for the instances until you terminate them. For EBS-backed AMIs: Snapshots that are associated with multiple AMIs. You'll continue to incur snapshot storage costs. For instance store-backed AMIs: The files uploaded to Amazon S3 during AMI creation. You'll continue to incur S3 storage costs. For more information, see Deregister an Amazon EC2 AMI in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#cancel_image_launch_permission"><CopyableCode code="cancel_image_launch_permission" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Removes your Amazon Web Services account from the launch permissions for the specified AMI. For more information, see Cancel having an AMI shared with your Amazon Web Services account in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#disable_fast_launch"><CopyableCode code="disable_fast_launch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Force"><code>Force</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Discontinue Windows fast launch for a Windows AMI, and clean up existing pre-provisioned snapshots. After you disable Windows fast launch, the AMI uses the standard launch process for each new instance. Amazon EC2 must remove all pre-provisioned snapshots before you can enable Windows fast launch again. You can only change these settings for Windows AMIs that you own or that have been shared with you.</td>
</tr>
<tr>
    <td><a href="#disable_image_block_public_access"><CopyableCode code="disable_image_block_public_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disables block public access for AMIs at the account level in the specified Amazon Web Services Region. This removes the block public access restriction from your account. With the restriction removed, you can publicly share your AMIs in the specified Amazon Web Services Region. For more information, see Block public access to your AMIs in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#disable_image_deprecation"><CopyableCode code="disable_image_deprecation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Cancels the deprecation of the specified AMI. For more information, see Deprecate an Amazon EC2 AMI in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#disable_image_deregistration_protection"><CopyableCode code="disable_image_deregistration_protection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disables deregistration protection for an AMI. When deregistration protection is disabled, the AMI can be deregistered. If you chose to include a 24-hour cooldown period when you enabled deregistration protection for the AMI, then, when you disable deregistration protection, you won’t immediately be able to deregister the AMI. For more information, see Protect an Amazon EC2 AMI from deregistration in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#enable_fast_launch"><CopyableCode code="enable_fast_launch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-SnapshotConfiguration"><code>SnapshotConfiguration</code></a>, <a href="#parameter-LaunchTemplate"><code>LaunchTemplate</code></a>, <a href="#parameter-MaxParallelLaunches"><code>MaxParallelLaunches</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>When you enable Windows fast launch for a Windows AMI, images are pre-provisioned, using snapshots to launch instances up to 65% faster. To create the optimized Windows image, Amazon EC2 launches an instance and runs through Sysprep steps, rebooting as required. Then it creates a set of reserved snapshots that are used for subsequent launches. The reserved snapshots are automatically replenished as they are used, depending on your settings for launch frequency. You can only change these settings for Windows AMIs that you own or that have been shared with you.</td>
</tr>
<tr>
    <td><a href="#enable_image_block_public_access"><CopyableCode code="enable_image_block_public_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ImageBlockPublicAccessState"><code>ImageBlockPublicAccessState</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Enables block public access for AMIs at the account level in the specified Amazon Web Services Region. This prevents the public sharing of your AMIs. However, if you already have public AMIs, they will remain publicly available. The API can take up to 10 minutes to configure this setting. During this time, if you run GetImageBlockPublicAccessState, the response will be unblocked. When the API has completed the configuration, the response will be block-new-sharing. For more information, see Block public access to your AMIs in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#enable_image_deprecation"><CopyableCode code="enable_image_deprecation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-DeprecateAt"><code>DeprecateAt</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Enables deprecation of the specified AMI at the specified date and time. For more information, see Deprecate an AMI in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#enable_image_deregistration_protection"><CopyableCode code="enable_image_deregistration_protection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-WithCooldown"><code>WithCooldown</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Enables deregistration protection for an AMI. When deregistration protection is enabled, the AMI can't be deregistered. To allow the AMI to be deregistered, you must first disable deregistration protection. For more information, see Protect an Amazon EC2 AMI from deregistration in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#reset_image_attribute"><CopyableCode code="reset_image_attribute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-Attribute"><code>Attribute</code></a>, <a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Resets an attribute of an AMI to its default value.</td>
</tr>
<tr>
    <td><a href="#restore_image_from_recycle_bin"><CopyableCode code="restore_image_from_recycle_bin" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Restores an AMI from the Recycle Bin. For more information, see Recover deleted Amazon EBS snapshots and EBS-back AMIs with Recycle Bin in the Amazon EC2 User Guide.</td>
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
    <td>The attribute to reset (currently you can only reset the launch permission attribute).</td>
</tr>
<tr id="parameter-DeprecateAt">
    <td><CopyableCode code="DeprecateAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time to deprecate the AMI, in UTC, in the following format: YYYY-MM-DDTHH:MM:SSZ. If you specify a value for seconds, Amazon EC2 rounds the seconds to the nearest minute. You can’t specify a date in the past. The upper limit for DeprecateAt is 10 years from now, except for public AMIs, where the upper limit is 2 years from the creation date.</td>
</tr>
<tr id="parameter-ImageBlockPublicAccessState">
    <td><CopyableCode code="ImageBlockPublicAccessState" /></td>
    <td><code>string</code></td>
    <td>Specify block-new-sharing to enable block public access for AMIs at the account level in the specified Region. This will block any attempt to publicly share your AMIs in the specified Region.</td>
</tr>
<tr id="parameter-ImageId">
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>The ID of the AMI to restore.</td>
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
<tr id="parameter-Architecture">
    <td><CopyableCode code="Architecture" /></td>
    <td><code>string</code></td>
    <td>The architecture of the AMI. Default: For Amazon EBS-backed AMIs, i386. For instance store-backed AMIs, the architecture specified in the manifest file.</td>
</tr>
<tr id="parameter-BillingProduct">
    <td><CopyableCode code="BillingProduct" /></td>
    <td><code>array</code></td>
    <td>The billing product codes. Your account must be authorized to specify billing product codes. If your account is not authorized to specify billing product codes, you can publish AMIs that include billable software and list them on the Amazon Web Services Marketplace. You must first register as a seller on the Amazon Web Services Marketplace. For more information, see Getting started as an Amazon Web Services Marketplace seller and AMI-based products in Amazon Web Services Marketplace in the Amazon Web Services Marketplace Seller Guide.</td>
</tr>
<tr id="parameter-BlockDeviceMapping">
    <td><CopyableCode code="BlockDeviceMapping" /></td>
    <td><code>array</code></td>
    <td>The block device mapping entries. If you specify an Amazon EBS volume using the ID of an Amazon EBS snapshot, you can't specify the encryption state of the volume. If you create an AMI on an Outpost, then all backing snapshots must be on the same Outpost or in the Region of that Outpost. AMIs on an Outpost that include local snapshots can be used to launch instances on the same Outpost only. For more information, Create AMIs from local snapshots in the Amazon EBS User Guide.</td>
</tr>
<tr id="parameter-BootMode">
    <td><CopyableCode code="BootMode" /></td>
    <td><code>string</code></td>
    <td>The boot mode of the AMI. A value of uefi-preferred indicates that the AMI supports both UEFI and Legacy BIOS. The operating system contained in the AMI must be configured to support the specified boot mode. For more information, see Instance launch behavior with Amazon EC2 boot modes in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-DeleteAssociatedSnapshots">
    <td><CopyableCode code="DeleteAssociatedSnapshots" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to delete the snapshots associated with the AMI during deregistration. If a snapshot is associated with multiple AMIs, it is not deleted, regardless of this setting. Default: The snapshots are not deleted.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description for your AMI.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EnaSupport">
    <td><CopyableCode code="EnaSupport" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to enable enhanced networking with ENA for the AMI and any instances that you launch from the AMI. This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.</td>
</tr>
<tr id="parameter-ExecutableBy">
    <td><CopyableCode code="ExecutableBy" /></td>
    <td><code>array</code></td>
    <td>Scopes the images by users with explicit launch permissions. Specify an Amazon Web Services account ID, self (the sender of the request), or all (public AMIs). If you specify an Amazon Web Services account ID that is not your own, only AMIs shared with that specific Amazon Web Services account ID are returned. However, AMIs that are shared with the account’s organization or organizational unit (OU) are not returned. If you specify self or your own Amazon Web Services account ID, AMIs shared with your account are returned. In addition, AMIs that are shared with the organization or OU of which you are member are also returned. If you specify all, all public AMIs are returned.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. architecture - The image architecture (i386 | x86_64 | arm64 | x86_64_mac | arm64_mac). block-device-mapping.delete-on-termination - A Boolean value that indicates whether the Amazon EBS volume is deleted on instance termination. block-device-mapping.device-name - The device name specified in the block device mapping (for example, /dev/sdh or xvdh). block-device-mapping.snapshot-id - The ID of the snapshot used for the Amazon EBS volume. block-device-mapping.volume-size - The volume size of the Amazon EBS volume, in GiB. block-device-mapping.volume-type - The volume type of the Amazon EBS volume (io1 | io2 | gp2 | gp3 | sc1 | st1 | standard). block-device-mapping.encrypted - A Boolean that indicates whether the Amazon EBS volume is encrypted. creation-date - The time when the image was created, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example, 2021-09-29T11:04:43.305Z. You can use a wildcard (*), for example, 2021-09-29T*, which matches an entire day. description - The description of the image (provided during image creation). ena-support - A Boolean that indicates whether enhanced networking with ENA is enabled. free-tier-eligible - A Boolean that indicates whether this image can be used under the Amazon Web Services Free Tier (true | false). hypervisor - The hypervisor type (ovm | xen). image-allowed - A Boolean that indicates whether the image meets the criteria specified for Allowed AMIs. image-id - The ID of the image. image-type - The image type (machine | kernel | ramdisk). is-public - A Boolean that indicates whether the image is public. kernel-id - The kernel ID. manifest-location - The location of the image manifest. name - The name of the AMI (provided during image creation). owner-alias - The owner alias (amazon | aws-backup-vault | aws-marketplace). The valid aliases are defined in an Amazon-maintained list. This is not the Amazon Web Services account alias that can be set using the IAM console. We recommend that you use the Owner request parameter instead of this filter. owner-id - The Amazon Web Services account ID of the owner. We recommend that you use the Owner request parameter instead of this filter. platform - The platform. The only supported value is windows. product-code - The product code. product-code.type - The type of the product code (marketplace). ramdisk-id - The RAM disk ID. root-device-name - The device name of the root device volume (for example, /dev/sda1). root-device-type - The type of the root device volume (ebs | instance-store). source-image-id - The ID of the source AMI from which the AMI was created. source-image-region - The Region of the source AMI. source-instance-id - The ID of the instance that the AMI was created from if the AMI was created using CreateImage. This filter is applicable only if the AMI was created using CreateImage. state - The state of the image (available | pending | failed). state-reason-code - The reason code for the state change. state-reason-message - The message for the state change. sriov-net-support - A value of simple indicates that enhanced networking with the Intel 82599 VF interface is enabled. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. virtualization-type - The virtualization type (paravirtual | hvm).</td>
</tr>
<tr id="parameter-Force">
    <td><CopyableCode code="Force" /></td>
    <td><code>boolean</code></td>
    <td>Forces the image settings to turn off Windows fast launch for your Windows AMI. This parameter overrides any errors that are encountered while cleaning up resources in your account.</td>
</tr>
<tr id="parameter-ImageId">
    <td><CopyableCode code="ImageId" /></td>
    <td><code>array</code></td>
    <td>The image IDs. Default: Describes all images available to you.</td>
</tr>
<tr id="parameter-ImageLocation">
    <td><CopyableCode code="ImageLocation" /></td>
    <td><code>string</code></td>
    <td>The full path to your AMI manifest in Amazon S3 storage. The specified bucket must have the aws-exec-read canned access control list (ACL) to ensure that it can be accessed by Amazon EC2. For more information, see Canned ACL in the Amazon S3 Service Developer Guide.</td>
</tr>
<tr id="parameter-ImdsSupport">
    <td><CopyableCode code="ImdsSupport" /></td>
    <td><code>string</code></td>
    <td>Set to v2.0 to indicate that IMDSv2 is specified in the AMI. Instances launched from this AMI will have HttpTokens automatically set to required so that, by default, the instance requires that IMDSv2 is used when requesting instance metadata. In addition, HttpPutResponseHopLimit is set to 2. For more information, see Configure the AMI in the Amazon EC2 User Guide. If you set the value to v2.0, make sure that your AMI software can support IMDSv2.</td>
</tr>
<tr id="parameter-IncludeDeprecated">
    <td><CopyableCode code="IncludeDeprecated" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to include deprecated AMIs. Default: No deprecated AMIs are included in the response. If you are the AMI owner, all deprecated AMIs appear in the response regardless of what you specify for this parameter.</td>
</tr>
<tr id="parameter-IncludeDisabled">
    <td><CopyableCode code="IncludeDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to include disabled AMIs. Default: No disabled AMIs are included in the response.</td>
</tr>
<tr id="parameter-KernelId">
    <td><CopyableCode code="KernelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the kernel.</td>
</tr>
<tr id="parameter-LaunchTemplate">
    <td><CopyableCode code="LaunchTemplate" /></td>
    <td><code>object</code></td>
    <td>The launch template to use when launching Windows instances from pre-provisioned snapshots. Launch template parameters can include either the name or ID of the launch template, but not both.</td>
</tr>
<tr id="parameter-MaxParallelLaunches">
    <td><CopyableCode code="MaxParallelLaunches" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of instances that Amazon EC2 can launch at the same time to create pre-provisioned snapshots for Windows fast launch. Value must be 6 or greater.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-Name">
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A name for your AMI. Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets (&#91;&#93;), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-NoReboot">
    <td><CopyableCode code="NoReboot" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether or not the instance should be automatically rebooted before creating the image. Specify one of the following values: true - The instance is not rebooted before creating the image. This creates crash-consistent snapshots that include only the data that has been written to the volumes at the time the snapshots are created. Buffered data and data in memory that has not yet been written to the volumes is not included in the snapshots. false - The instance is rebooted before creating the image. This ensures that all buffered data and data in memory is written to the volumes before the snapshots are created. Default: false</td>
</tr>
<tr id="parameter-Owner">
    <td><CopyableCode code="Owner" /></td>
    <td><code>array</code></td>
    <td>Scopes the results to images with the specified owners. You can specify a combination of Amazon Web Services account IDs, self, amazon, aws-backup-vault, and aws-marketplace. If you omit this parameter, the results include all images for which you have launch permissions, regardless of ownership.</td>
</tr>
<tr id="parameter-RamdiskId">
    <td><CopyableCode code="RamdiskId" /></td>
    <td><code>string</code></td>
    <td>The ID of the RAM disk.</td>
</tr>
<tr id="parameter-ResourceType">
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource to use for pre-provisioning the AMI for Windows fast launch. Supported values include: snapshot, which is the default value.</td>
</tr>
<tr id="parameter-RootDeviceName">
    <td><CopyableCode code="RootDeviceName" /></td>
    <td><code>string</code></td>
    <td>The device name of the root device volume (for example, /dev/sda1).</td>
</tr>
<tr id="parameter-SnapshotConfiguration">
    <td><CopyableCode code="SnapshotConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration settings for creating and managing the snapshots that are used for pre-provisioning the AMI for Windows fast launch. The associated ResourceType must be snapshot.</td>
</tr>
<tr id="parameter-SnapshotLocation">
    <td><CopyableCode code="SnapshotLocation" /></td>
    <td><code>string</code></td>
    <td>Only supported for instances in Local Zones. If the source instance is not in a Local Zone, omit this parameter. The Amazon S3 location where the snapshots will be stored. To create local snapshots in the same Local Zone as the source instance, specify local. To create regional snapshots in the parent Region of the Local Zone, specify regional or omit this parameter. Default: regional</td>
</tr>
<tr id="parameter-SriovNetSupport">
    <td><CopyableCode code="SriovNetSupport" /></td>
    <td><code>string</code></td>
    <td>Set to simple to enable enhanced networking with the Intel 82599 Virtual Function interface for the AMI and any instances that you launch from the AMI. There is no way to disable sriovNetSupport at this time. This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the AMI. To tag the AMI, the value for ResourceType must be image. If you specify another value for ResourceType, the request fails. To tag an AMI after it has been registered, see CreateTags.</td>
</tr>
<tr id="parameter-TpmSupport">
    <td><CopyableCode code="TpmSupport" /></td>
    <td><code>string</code></td>
    <td>Set to v2.0 to enable Trusted Platform Module (TPM) support. For more information, see NitroTPM in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-UefiData">
    <td><CopyableCode code="UefiData" /></td>
    <td><code>string</code></td>
    <td>Base64 representation of the non-volatile UEFI variable store. To retrieve the UEFI data, use the GetInstanceUefiData command. You can inspect and modify the UEFI data by using the python-uefivars tool on GitHub. For more information, see UEFI Secure Boot for Amazon EC2 instances in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-VirtualizationType">
    <td><CopyableCode code="VirtualizationType" /></td>
    <td><code>string</code></td>
    <td>The type of virtualization (hvm | paravirtual). Default: paravirtual</td>
</tr>
<tr id="parameter-WithCooldown">
    <td><CopyableCode code="WithCooldown" /></td>
    <td><code>boolean</code></td>
    <td>If true, enforces deregistration protection for 24 hours after deregistration protection is disabled.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_images"
    values={[
        { label: 'describe_images', value: 'describe_images' }
    ]}
>
<TabItem value="describe_images">

Describes the specified images (AMIs, AKIs, and ARIs) available to you or all of the images available to you. The images available to you include public images, private images that you own, and private images owned by other Amazon Web Services accounts for which you have explicit launch permissions. Recently deregistered images appear in the returned results for a short interval and then return empty results. After all instances that reference a deregistered AMI are terminated, specifying the ID of the image will eventually return an error indicating that the AMI ID cannot be found. When Allowed AMIs is set to enabled, only allowed images are returned in the results, with the imageAllowed field set to true for each image. In audit-mode, the imageAllowed field is set to true for images that meet the account's Allowed AMIs criteria, and false for images that don't meet the criteria. For more information, see Allowed AMIs. The Amazon EC2 API follows an eventual consistency model. This means that the result of an API command you run that creates or modifies resources might not be immediately available to all subsequent commands you run. For guidance on how to manage eventual consistency, see Eventual consistency in the Amazon EC2 API in the Amazon EC2 Developer Guide. We strongly recommend using only paginated requests. Unpaginated requests are susceptible to throttling and timeouts. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.

```sql
SELECT
Architecture,
BlockDeviceMappings,
BootMode,
CreationDate,
DeprecationTime,
DeregistrationProtection,
Description,
EnaSupport,
FreeTierEligible,
Hypervisor,
ImageAllowed,
ImageId,
ImageLocation,
ImageOwnerAlias,
ImageType,
ImdsSupport,
KernelId,
LastLaunchedTime,
Name,
OwnerId,
Platform,
PlatformDetails,
ProductCodes,
Public,
RamdiskId,
RootDeviceName,
RootDeviceType,
SourceImageId,
SourceImageRegion,
SourceInstanceId,
SriovNetSupport,
State,
StateReason,
Tags,
TpmSupport,
UsageOperation,
VirtualizationType
FROM aws.ec2.images
WHERE region = '{{ region }}' -- required
AND ExecutableBy = '{{ ExecutableBy }}'
AND ImageId = '{{ ImageId }}'
AND Owner = '{{ Owner }}'
AND IncludeDeprecated = '{{ IncludeDeprecated }}'
AND IncludeDisabled = '{{ IncludeDisabled }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_image"
    values={[
        { label: 'create_image', value: 'create_image' },
        { label: 'register_image', value: 'register_image' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_image">

Creates an Amazon EBS-backed AMI from an Amazon EBS-backed instance that is either running or stopped. If you customized your instance with instance store volumes or Amazon EBS volumes in addition to the root device volume, the new AMI contains block device mapping information for those volumes. When you launch an instance from this new AMI, the instance automatically launches with those additional volumes. The location of the source instance determines where you can create the snapshots of the AMI: If the source instance is in a Region, you must create the snapshots in the same Region as the instance. If the source instance is in a Local Zone, you can create the snapshots in the same Local Zone or in its parent Region. For more information, see Create an Amazon EBS-backed AMI in the Amazon Elastic Compute Cloud User Guide.

```sql
INSERT INTO aws.ec2.images (
InstanceId,
region,
TagSpecification,
SnapshotLocation,
DryRun,
Name,
Description,
NoReboot,
BlockDeviceMapping
)
SELECT 
'{{ InstanceId }}',
'{{ region }}',
'{{ TagSpecification }}',
'{{ SnapshotLocation }}',
'{{ DryRun }}',
'{{ Name }}',
'{{ Description }}',
'{{ NoReboot }}',
'{{ BlockDeviceMapping }}'
RETURNING
ImageId
;
```
</TabItem>
<TabItem value="register_image">

Registers an AMI. When you're creating an instance-store backed AMI, registering the AMI is the final step in the creation process. For more information about creating AMIs, see Create an AMI from a snapshot and Create an instance-store backed AMI in the Amazon EC2 User Guide. If needed, you can deregister an AMI at any time. Any modifications you make to an AMI backed by an instance store volume invalidates its registration. If you make changes to an image, deregister the previous image and register the new image. Register a snapshot of a root device volume You can use RegisterImage to create an Amazon EBS-backed Linux AMI from a snapshot of a root device volume. You specify the snapshot using a block device mapping. You can't set the encryption state of the volume using the block device mapping. If the snapshot is encrypted, or encryption by default is enabled, the root volume of an instance launched from the AMI is encrypted. For more information, see Create an AMI from a snapshot and Use encryption with EBS-backed AMIs in the Amazon EC2 User Guide. Amazon Web Services Marketplace product codes If any snapshots have Amazon Web Services Marketplace product codes, they are copied to the new AMI. In most cases, AMIs for Windows, RedHat, SUSE, and SQL Server require correct licensing information to be present on the AMI. For more information, see Understand AMI billing information in the Amazon EC2 User Guide. When creating an AMI from a snapshot, the RegisterImage operation derives the correct billing information from the snapshot's metadata, but this requires the appropriate metadata to be present. To verify if the correct billing information was applied, check the PlatformDetails field on the new AMI. If the field is empty or doesn't match the expected operating system code (for example, Windows, RedHat, SUSE, or SQL), the AMI creation was unsuccessful, and you should discard the AMI and instead create the AMI from an instance. For more information, see Create an AMI from an instance in the Amazon EC2 User Guide. If you purchase a Reserved Instance to apply to an On-Demand Instance that was launched from an AMI with a billing product code, make sure that the Reserved Instance has the matching billing product code. If you purchase a Reserved Instance without the matching billing product code, the Reserved Instance is not applied to the On-Demand Instance. For information about how to obtain the platform details and billing information of an AMI, see Understand AMI billing information in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.images (
region,
ImageLocation,
BillingProduct,
BootMode,
TpmSupport,
UefiData,
ImdsSupport,
TagSpecification,
DryRun,
Name,
Description,
Architecture,
KernelId,
RamdiskId,
RootDeviceName,
BlockDeviceMapping,
VirtualizationType,
SriovNetSupport,
EnaSupport
)
SELECT 
'{{ region }}',
'{{ ImageLocation }}',
'{{ BillingProduct }}',
'{{ BootMode }}',
'{{ TpmSupport }}',
'{{ UefiData }}',
'{{ ImdsSupport }}',
'{{ TagSpecification }}',
'{{ DryRun }}',
'{{ Name }}',
'{{ Description }}',
'{{ Architecture }}',
'{{ KernelId }}',
'{{ RamdiskId }}',
'{{ RootDeviceName }}',
'{{ BlockDeviceMapping }}',
'{{ VirtualizationType }}',
'{{ SriovNetSupport }}',
'{{ EnaSupport }}'
RETURNING
ImageId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: images
  props:
    - name: InstanceId
      value: "{{ InstanceId }}"
      description: Required parameter for the images resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the images resource.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the AMI and snapshots on creation. You can tag the AMI, the snapshots, or both. To tag the AMI, the value for ResourceType must be image. To tag the snapshots that are created of the root volume and of other Amazon EBS volumes that are attached to the instance, the value for ResourceType must be snapshot. The same tag is applied to all of the snapshots that are created. If you specify other values for ResourceType, the request fails. To tag an AMI or snapshot after it has been created, see CreateTags.
      description: The tags to apply to the AMI and snapshots on creation. You can tag the AMI, the snapshots, or both. To tag the AMI, the value for ResourceType must be image. To tag the snapshots that are created of the root volume and of other Amazon EBS volumes that are attached to the instance, the value for ResourceType must be snapshot. The same tag is applied to all of the snapshots that are created. If you specify other values for ResourceType, the request fails. To tag an AMI or snapshot after it has been created, see CreateTags.
    - name: SnapshotLocation
      value: "{{ SnapshotLocation }}"
      description: Only supported for instances in Local Zones. If the source instance is not in a Local Zone, omit this parameter. The Amazon S3 location where the snapshots will be stored. To create local snapshots in the same Local Zone as the source instance, specify local. To create regional snapshots in the parent Region of the Local Zone, specify regional or omit this parameter. Default: regional
      description: Only supported for instances in Local Zones. If the source instance is not in a Local Zone, omit this parameter. The Amazon S3 location where the snapshots will be stored. To create local snapshots in the same Local Zone as the source instance, specify local. To create regional snapshots in the parent Region of the Local Zone, specify regional or omit this parameter. Default: regional
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: Name
      value: "{{ Name }}"
      description: A name for the new image. Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)
      description: A name for the new image. Constraints: 3-128 alphanumeric characters, parentheses (()), square brackets ([]), spaces ( ), periods (.), slashes (/), dashes (-), single quotes ('), at-signs (@), or underscores(_)
    - name: Description
      value: "{{ Description }}"
      description: A description for the new image.
      description: A description for the new image.
    - name: NoReboot
      value: {{ NoReboot }}
      description: Indicates whether or not the instance should be automatically rebooted before creating the image. Specify one of the following values: true - The instance is not rebooted before creating the image. This creates crash-consistent snapshots that include only the data that has been written to the volumes at the time the snapshots are created. Buffered data and data in memory that has not yet been written to the volumes is not included in the snapshots. false - The instance is rebooted before creating the image. This ensures that all buffered data and data in memory is written to the volumes before the snapshots are created. Default: false
      description: Indicates whether or not the instance should be automatically rebooted before creating the image. Specify one of the following values: true - The instance is not rebooted before creating the image. This creates crash-consistent snapshots that include only the data that has been written to the volumes at the time the snapshots are created. Buffered data and data in memory that has not yet been written to the volumes is not included in the snapshots. false - The instance is rebooted before creating the image. This ensures that all buffered data and data in memory is written to the volumes before the snapshots are created. Default: false
    - name: BlockDeviceMapping
      value: "{{ BlockDeviceMapping }}"
      description: The block device mappings. When using the CreateImage action: You can't change the volume size using the VolumeSize parameter. If you want a different volume size, you must first change the volume size of the source instance. You can't modify the encryption status of existing volumes or snapshots. To create an AMI with volumes or snapshots that have a different encryption status (for example, where the source volume and snapshots are unencrypted, and you want to create an AMI with encrypted volumes or snapshots), copy the image instead. The only option that can be changed for existing mappings or snapshots is DeleteOnTermination.
      description: The block device mappings. When using the CreateImage action: You can't change the volume size using the VolumeSize parameter. If you want a different volume size, you must first change the volume size of the source instance. You can't modify the encryption status of existing volumes or snapshots. To create an AMI with volumes or snapshots that have a different encryption status (for example, where the source volume and snapshots are unencrypted, and you want to create an AMI with encrypted volumes or snapshots), copy the image instead. The only option that can be changed for existing mappings or snapshots is DeleteOnTermination.
    - name: ImageLocation
      value: "{{ ImageLocation }}"
      description: The full path to your AMI manifest in Amazon S3 storage. The specified bucket must have the aws-exec-read canned access control list (ACL) to ensure that it can be accessed by Amazon EC2. For more information, see Canned ACL in the Amazon S3 Service Developer Guide.
      description: The full path to your AMI manifest in Amazon S3 storage. The specified bucket must have the aws-exec-read canned access control list (ACL) to ensure that it can be accessed by Amazon EC2. For more information, see Canned ACL in the Amazon S3 Service Developer Guide.
    - name: BillingProduct
      value: "{{ BillingProduct }}"
      description: The billing product codes. Your account must be authorized to specify billing product codes. If your account is not authorized to specify billing product codes, you can publish AMIs that include billable software and list them on the Amazon Web Services Marketplace. You must first register as a seller on the Amazon Web Services Marketplace. For more information, see Getting started as an Amazon Web Services Marketplace seller and AMI-based products in Amazon Web Services Marketplace in the Amazon Web Services Marketplace Seller Guide.
      description: The billing product codes. Your account must be authorized to specify billing product codes. If your account is not authorized to specify billing product codes, you can publish AMIs that include billable software and list them on the Amazon Web Services Marketplace. You must first register as a seller on the Amazon Web Services Marketplace. For more information, see Getting started as an Amazon Web Services Marketplace seller and AMI-based products in Amazon Web Services Marketplace in the Amazon Web Services Marketplace Seller Guide.
    - name: BootMode
      value: "{{ BootMode }}"
      description: The boot mode of the AMI. A value of uefi-preferred indicates that the AMI supports both UEFI and Legacy BIOS. The operating system contained in the AMI must be configured to support the specified boot mode. For more information, see Instance launch behavior with Amazon EC2 boot modes in the Amazon EC2 User Guide.
      description: The boot mode of the AMI. A value of uefi-preferred indicates that the AMI supports both UEFI and Legacy BIOS. The operating system contained in the AMI must be configured to support the specified boot mode. For more information, see Instance launch behavior with Amazon EC2 boot modes in the Amazon EC2 User Guide.
    - name: TpmSupport
      value: "{{ TpmSupport }}"
      description: Set to v2.0 to enable Trusted Platform Module (TPM) support. For more information, see NitroTPM in the Amazon EC2 User Guide.
      description: Set to v2.0 to enable Trusted Platform Module (TPM) support. For more information, see NitroTPM in the Amazon EC2 User Guide.
    - name: UefiData
      value: "{{ UefiData }}"
      description: Base64 representation of the non-volatile UEFI variable store. To retrieve the UEFI data, use the GetInstanceUefiData command. You can inspect and modify the UEFI data by using the python-uefivars tool on GitHub. For more information, see UEFI Secure Boot for Amazon EC2 instances in the Amazon EC2 User Guide.
      description: Base64 representation of the non-volatile UEFI variable store. To retrieve the UEFI data, use the GetInstanceUefiData command. You can inspect and modify the UEFI data by using the python-uefivars tool on GitHub. For more information, see UEFI Secure Boot for Amazon EC2 instances in the Amazon EC2 User Guide.
    - name: ImdsSupport
      value: "{{ ImdsSupport }}"
      description: Set to v2.0 to indicate that IMDSv2 is specified in the AMI. Instances launched from this AMI will have HttpTokens automatically set to required so that, by default, the instance requires that IMDSv2 is used when requesting instance metadata. In addition, HttpPutResponseHopLimit is set to 2. For more information, see Configure the AMI in the Amazon EC2 User Guide. If you set the value to v2.0, make sure that your AMI software can support IMDSv2.
      description: Set to v2.0 to indicate that IMDSv2 is specified in the AMI. Instances launched from this AMI will have HttpTokens automatically set to required so that, by default, the instance requires that IMDSv2 is used when requesting instance metadata. In addition, HttpPutResponseHopLimit is set to 2. For more information, see Configure the AMI in the Amazon EC2 User Guide. If you set the value to v2.0, make sure that your AMI software can support IMDSv2.
    - name: Architecture
      value: "{{ Architecture }}"
      description: The architecture of the AMI. Default: For Amazon EBS-backed AMIs, i386. For instance store-backed AMIs, the architecture specified in the manifest file.
      description: The architecture of the AMI. Default: For Amazon EBS-backed AMIs, i386. For instance store-backed AMIs, the architecture specified in the manifest file.
    - name: KernelId
      value: "{{ KernelId }}"
      description: The ID of the kernel.
      description: The ID of the kernel.
    - name: RamdiskId
      value: "{{ RamdiskId }}"
      description: The ID of the RAM disk.
      description: The ID of the RAM disk.
    - name: RootDeviceName
      value: "{{ RootDeviceName }}"
      description: The device name of the root device volume (for example, /dev/sda1).
      description: The device name of the root device volume (for example, /dev/sda1).
    - name: VirtualizationType
      value: "{{ VirtualizationType }}"
      description: The type of virtualization (hvm | paravirtual). Default: paravirtual
      description: The type of virtualization (hvm | paravirtual). Default: paravirtual
    - name: SriovNetSupport
      value: "{{ SriovNetSupport }}"
      description: Set to simple to enable enhanced networking with the Intel 82599 Virtual Function interface for the AMI and any instances that you launch from the AMI. There is no way to disable sriovNetSupport at this time. This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.
      description: Set to simple to enable enhanced networking with the Intel 82599 Virtual Function interface for the AMI and any instances that you launch from the AMI. There is no way to disable sriovNetSupport at this time. This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.
    - name: EnaSupport
      value: {{ EnaSupport }}
      description: Set to true to enable enhanced networking with ENA for the AMI and any instances that you launch from the AMI. This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.
      description: Set to true to enable enhanced networking with ENA for the AMI and any instances that you launch from the AMI. This option is supported only for HVM AMIs. Specifying this option with a PV AMI can make instances launched from the AMI unreachable.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_image"
    values={[
        { label: 'deregister_image', value: 'deregister_image' }
    ]}
>
<TabItem value="deregister_image">

Deregisters the specified AMI. A deregistered AMI can't be used to launch new instances. If a deregistered EBS-backed AMI matches a Recycle Bin retention rule, it moves to the Recycle Bin for the specified retention period. It can be restored before its retention period expires, after which it is permanently deleted. If the deregistered AMI doesn't match a retention rule, it is permanently deleted immediately. For more information, see Recover deleted Amazon EBS snapshots and EBS-backed AMIs with Recycle Bin in the Amazon EBS User Guide. When deregistering an EBS-backed AMI, you can optionally delete its associated snapshots at the same time. However, if a snapshot is associated with multiple AMIs, it won't be deleted even if specified for deletion, although the AMI will still be deregistered. Deregistering an AMI does not delete the following: Instances already launched from the AMI. You'll continue to incur usage costs for the instances until you terminate them. For EBS-backed AMIs: Snapshots that are associated with multiple AMIs. You'll continue to incur snapshot storage costs. For instance store-backed AMIs: The files uploaded to Amazon S3 during AMI creation. You'll continue to incur S3 storage costs. For more information, see Deregister an Amazon EC2 AMI in the Amazon EC2 User Guide.

```sql
DELETE FROM aws.ec2.images
WHERE ImageId = '{{ ImageId }}' --required
AND region = '{{ region }}' --required
AND DeleteAssociatedSnapshots = '{{ DeleteAssociatedSnapshots }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_image_launch_permission"
    values={[
        { label: 'cancel_image_launch_permission', value: 'cancel_image_launch_permission' },
        { label: 'disable_fast_launch', value: 'disable_fast_launch' },
        { label: 'disable_image_block_public_access', value: 'disable_image_block_public_access' },
        { label: 'disable_image_deprecation', value: 'disable_image_deprecation' },
        { label: 'disable_image_deregistration_protection', value: 'disable_image_deregistration_protection' },
        { label: 'enable_fast_launch', value: 'enable_fast_launch' },
        { label: 'enable_image_block_public_access', value: 'enable_image_block_public_access' },
        { label: 'enable_image_deprecation', value: 'enable_image_deprecation' },
        { label: 'enable_image_deregistration_protection', value: 'enable_image_deregistration_protection' },
        { label: 'reset_image_attribute', value: 'reset_image_attribute' },
        { label: 'restore_image_from_recycle_bin', value: 'restore_image_from_recycle_bin' }
    ]}
>
<TabItem value="cancel_image_launch_permission">

Removes your Amazon Web Services account from the launch permissions for the specified AMI. For more information, see Cancel having an AMI shared with your Amazon Web Services account in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.images.cancel_image_launch_permission 
@ImageId='{{ ImageId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="disable_fast_launch">

Discontinue Windows fast launch for a Windows AMI, and clean up existing pre-provisioned snapshots. After you disable Windows fast launch, the AMI uses the standard launch process for each new instance. Amazon EC2 must remove all pre-provisioned snapshots before you can enable Windows fast launch again. You can only change these settings for Windows AMIs that you own or that have been shared with you.

```sql
EXEC aws.ec2.images.disable_fast_launch 
@ImageId='{{ ImageId }}' --required, 
@region='{{ region }}' --required, 
@Force={{ Force }}, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="disable_image_block_public_access">

Disables block public access for AMIs at the account level in the specified Amazon Web Services Region. This removes the block public access restriction from your account. With the restriction removed, you can publicly share your AMIs in the specified Amazon Web Services Region. For more information, see Block public access to your AMIs in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.images.disable_image_block_public_access 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="disable_image_deprecation">

Cancels the deprecation of the specified AMI. For more information, see Deprecate an Amazon EC2 AMI in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.images.disable_image_deprecation 
@ImageId='{{ ImageId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="disable_image_deregistration_protection">

Disables deregistration protection for an AMI. When deregistration protection is disabled, the AMI can be deregistered. If you chose to include a 24-hour cooldown period when you enabled deregistration protection for the AMI, then, when you disable deregistration protection, you won’t immediately be able to deregister the AMI. For more information, see Protect an Amazon EC2 AMI from deregistration in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.images.disable_image_deregistration_protection 
@ImageId='{{ ImageId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="enable_fast_launch">

When you enable Windows fast launch for a Windows AMI, images are pre-provisioned, using snapshots to launch instances up to 65% faster. To create the optimized Windows image, Amazon EC2 launches an instance and runs through Sysprep steps, rebooting as required. Then it creates a set of reserved snapshots that are used for subsequent launches. The reserved snapshots are automatically replenished as they are used, depending on your settings for launch frequency. You can only change these settings for Windows AMIs that you own or that have been shared with you.

```sql
EXEC aws.ec2.images.enable_fast_launch 
@ImageId='{{ ImageId }}' --required, 
@region='{{ region }}' --required, 
@ResourceType='{{ ResourceType }}', 
@SnapshotConfiguration='{{ SnapshotConfiguration }}', 
@LaunchTemplate='{{ LaunchTemplate }}', 
@MaxParallelLaunches='{{ MaxParallelLaunches }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="enable_image_block_public_access">

Enables block public access for AMIs at the account level in the specified Amazon Web Services Region. This prevents the public sharing of your AMIs. However, if you already have public AMIs, they will remain publicly available. The API can take up to 10 minutes to configure this setting. During this time, if you run GetImageBlockPublicAccessState, the response will be unblocked. When the API has completed the configuration, the response will be block-new-sharing. For more information, see Block public access to your AMIs in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.images.enable_image_block_public_access 
@ImageBlockPublicAccessState='{{ ImageBlockPublicAccessState }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="enable_image_deprecation">

Enables deprecation of the specified AMI at the specified date and time. For more information, see Deprecate an AMI in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.images.enable_image_deprecation 
@ImageId='{{ ImageId }}' --required, 
@DeprecateAt='{{ DeprecateAt }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="enable_image_deregistration_protection">

Enables deregistration protection for an AMI. When deregistration protection is enabled, the AMI can't be deregistered. To allow the AMI to be deregistered, you must first disable deregistration protection. For more information, see Protect an Amazon EC2 AMI from deregistration in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.images.enable_image_deregistration_protection 
@ImageId='{{ ImageId }}' --required, 
@region='{{ region }}' --required, 
@WithCooldown={{ WithCooldown }}, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="reset_image_attribute">

Resets an attribute of an AMI to its default value.

```sql
EXEC aws.ec2.images.reset_image_attribute 
@Attribute='{{ Attribute }}' --required, 
@ImageId='{{ ImageId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="restore_image_from_recycle_bin">

Restores an AMI from the Recycle Bin. For more information, see Recover deleted Amazon EBS snapshots and EBS-back AMIs with Recycle Bin in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.images.restore_image_from_recycle_bin 
@ImageId='{{ ImageId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
