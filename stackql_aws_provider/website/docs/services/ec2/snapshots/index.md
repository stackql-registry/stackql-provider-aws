--- 
title: snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots
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

Creates, updates, deletes, gets or lists a <code>snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_snapshots"
    values={[
        { label: 'describe_snapshots', value: 'describe_snapshots' }
    ]}
>
<TabItem value="describe_snapshots">

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
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone or Local Zone of the snapshot. For example, us-west-1a (Availability Zone) or us-west-2-lax-1a (Local Zone).</td>
</tr>
<tr>
    <td><CopyableCode code="CompletionDurationMinutes" /></td>
    <td><code>integer</code></td>
    <td>Only for snapshot copies created with time-based snapshot copy operations. The completion duration requested for the time-based snapshot copy operation.</td>
</tr>
<tr>
    <td><CopyableCode code="CompletionTime" /></td>
    <td><code>string</code></td>
    <td>The time stamp when the snapshot was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="DataEncryptionKeyId" /></td>
    <td><code>string</code></td>
    <td>The data encryption key identifier for the snapshot. This value is a unique identifier that corresponds to the data encryption key that was used to encrypt the original volume or snapshot copy. Because data encryption keys are inherited by volumes created from snapshots, and vice versa, if snapshots share the same data encryption key identifier, then they belong to the same volume/snapshot lineage. This parameter is only returned by DescribeSnapshots.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description for the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="Encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the snapshot is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="FullSnapshotSizeInBytes" /></td>
    <td><code>integer</code></td>
    <td>The full size of the snapshot, in bytes. This is not the incremental size of the snapshot. This is the full snapshot size and represents the size of all the blocks that were written to the source volume at the time the snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key that was used to protect the volume encryption key for the parent volume.</td>
</tr>
<tr>
    <td><CopyableCode code="OutpostArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Outpost on which the snapshot is stored. For more information, see Amazon EBS local snapshots on Outposts in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerAlias" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services owner alias, from an Amazon-maintained list (amazon). This is not the user-configured Amazon Web Services account alias set using the IAM console.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the EBS snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="Progress" /></td>
    <td><code>string</code></td>
    <td>The progress of the snapshot, as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="RestoreExpiryTime" /></td>
    <td><code>string</code></td>
    <td>Only for archived snapshots that are temporarily restored. Indicates the date and time when a temporarily restored snapshot will be automatically re-archived.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotId" /></td>
    <td><code>string</code></td>
    <td>The ID of the snapshot. Each snapshot receives a unique identifier when it is created.</td>
</tr>
<tr>
    <td><CopyableCode code="SseType" /></td>
    <td><code>string</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string</code></td>
    <td>The time stamp when the snapshot was initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The snapshot state.</td>
</tr>
<tr>
    <td><CopyableCode code="StateMessage" /></td>
    <td><code>string</code></td>
    <td>Encrypted Amazon EBS snapshots are copied asynchronously. If a snapshot copy operation fails (for example, if the proper KMS permissions are not obtained) this field displays error state details to help you diagnose why the error occurred. This parameter is only returned by DescribeSnapshots.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageTier" /></td>
    <td><code>string</code></td>
    <td>The storage tier in which the snapshot is stored. standard indicates that the snapshot is stored in the standard snapshot storage tier and that it is ready for use. archive indicates that the snapshot is currently archived and that it must be restored before it can be used.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="TransferType" /></td>
    <td><code>string</code></td>
    <td>Only for snapshot copies. Indicates whether the snapshot copy was created with a standard or time-based snapshot copy operation. Time-based snapshot copy operations complete within the completion duration specified in the request. Standard snapshot copy operations are completed on a best-effort basis. standard - The snapshot copy was created with a standard snapshot copy operation. time-based - The snapshot copy was created with a time-based snapshot copy operation.</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the volume that was used to create the snapshot. Snapshots created by a copy snapshot operation have an arbitrary volume ID that you should not use for any purpose.</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeSize" /></td>
    <td><code>integer</code></td>
    <td>The size of the volume, in GiB.</td>
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
    <td><a href="#describe_snapshots"><CopyableCode code="describe_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Owner"><code>Owner</code></a>, <a href="#parameter-RestorableBy"><code>RestorableBy</code></a>, <a href="#parameter-SnapshotId"><code>SnapshotId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes the specified EBS snapshots available to you or all of the EBS snapshots available to you. The snapshots available to you include public snapshots, private snapshots that you own, and private snapshots owned by other Amazon Web Services accounts for which you have explicit create volume permissions. The create volume permissions fall into the following categories: public: The owner of the snapshot granted create volume permissions for the snapshot to the all group. All Amazon Web Services accounts have create volume permissions for these snapshots. explicit: The owner of the snapshot granted create volume permissions to a specific Amazon Web Services account. implicit: An Amazon Web Services account has implicit create volume permissions for all snapshots it owns. The list of snapshots returned can be filtered by specifying snapshot IDs, snapshot owners, or Amazon Web Services accounts with create volume permissions. If no options are specified, Amazon EC2 returns all snapshots for which you have create volume permissions. If you specify one or more snapshot IDs, only snapshots that have the specified IDs are returned. If you specify an invalid snapshot ID, an error is returned. If you specify a snapshot ID for which you do not have access, it is not included in the returned results. If you specify one or more snapshot owners using the OwnerIds option, only snapshots from the specified owners and for which you have access are returned. The results can include the Amazon Web Services account IDs of the specified owners, amazon for snapshots owned by Amazon, or self for snapshots that you own. If you specify a list of restorable users, only snapshots with create snapshot permissions for those users are returned. You can specify Amazon Web Services account IDs (if you own the snapshots), self for snapshots for which you own or have explicit permissions, or all for public snapshots. If you are describing a long list of snapshots, we recommend that you paginate the output to make the list more manageable. For more information, see Pagination. For more information about EBS snapshots, see Amazon EBS snapshots in the Amazon EBS User Guide. We strongly recommend using only paginated requests. Unpaginated requests are susceptible to throttling and timeouts.</td>
</tr>
<tr>
    <td><a href="#create_snapshot"><CopyableCode code="create_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-VolumeId"><code>VolumeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-OutpostArn"><code>OutpostArn</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-Location"><code>Location</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a snapshot of an EBS volume and stores it in Amazon S3. You can use snapshots for backups, to make copies of EBS volumes, and to save data before shutting down an instance. The location of the source EBS volume determines where you can create the snapshot. If the source volume is in a Region, you must create the snapshot in the same Region as the volume. If the source volume is in a Local Zone, you can create the snapshot in the same Local Zone or in its parent Amazon Web Services Region. If the source volume is on an Outpost, you can create the snapshot on the same Outpost or in its parent Amazon Web Services Region. When a snapshot is created, any Amazon Web Services Marketplace product codes that are associated with the source volume are propagated to the snapshot. You can take a snapshot of an attached volume that is in use. However, snapshots only capture data that has been written to your Amazon EBS volume at the time the snapshot command is issued; this might exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the volume long enough to take a snapshot, your snapshot should be complete. However, if you cannot pause all file writes to the volume, you should unmount the volume from within the instance, issue the snapshot command, and then remount the volume to ensure a consistent and complete snapshot. You may remount and use your volume while the snapshot status is pending. When you create a snapshot for an EBS volume that serves as a root device, we recommend that you stop the instance before taking the snapshot. Snapshots that are taken from encrypted volumes are automatically encrypted. Volumes that are created from encrypted snapshots are also automatically encrypted. Your encrypted volumes and any associated snapshots always remain protected. For more information, see Amazon EBS encryption in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><a href="#create_snapshots"><CopyableCode code="create_snapshots" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-InstanceSpecification"><code>InstanceSpecification</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-OutpostArn"><code>OutpostArn</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-CopyTagsFromSource"><code>CopyTagsFromSource</code></a>, <a href="#parameter-Location"><code>Location</code></a></td>
    <td>Creates crash-consistent snapshots of multiple EBS volumes attached to an Amazon EC2 instance. Volumes are chosen by specifying an instance. Each volume attached to the specified instance will produce one snapshot that is crash-consistent across the instance. You can include all of the volumes currently attached to the instance, or you can exclude the root volume or specific data (non-root) volumes from the multi-volume snapshot set. The location of the source instance determines where you can create the snapshots. If the source instance is in a Region, you must create the snapshots in the same Region as the instance. If the source instance is in a Local Zone, you can create the snapshots in the same Local Zone or in its parent Amazon Web Services Region. If the source instance is on an Outpost, you can create the snapshots on the same Outpost or in its parent Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#modify_snapshot_tier"><CopyableCode code="modify_snapshot_tier" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-SnapshotId"><code>SnapshotId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-StorageTier"><code>StorageTier</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Archives an Amazon EBS snapshot. When you archive a snapshot, it is converted to a full snapshot that includes all of the blocks of data that were written to the volume at the time the snapshot was created, and moved from the standard tier to the archive tier. For more information, see Archive Amazon EBS snapshots in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_snapshot"><CopyableCode code="delete_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-SnapshotId"><code>SnapshotId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified snapshot. When you make periodic snapshots of a volume, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the volume. You cannot delete a snapshot of the root device of an EBS volume used by a registered AMI. You must first deregister the AMI before you can delete the snapshot. For more information, see Delete an Amazon EBS snapshot in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><a href="#disable_snapshot_block_public_access"><CopyableCode code="disable_snapshot_block_public_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disables the block public access for snapshots setting at the account level for the specified Amazon Web Services Region. After you disable block public access for snapshots in a Region, users can publicly share snapshots in that Region. Enabling block public access for snapshots in block-all-sharing mode does not change the permissions for snapshots that are already publicly shared. Instead, it prevents these snapshots from be publicly visible and publicly accessible. Therefore, the attributes for these snapshots still indicate that they are publicly shared, even though they are not publicly available. If you disable block public access , these snapshots will become publicly available again. For more information, see Block public access for snapshots in the Amazon EBS User Guide .</td>
</tr>
<tr>
    <td><a href="#enable_snapshot_block_public_access"><CopyableCode code="enable_snapshot_block_public_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-State"><code>State</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Enables or modifies the block public access for snapshots setting at the account level for the specified Amazon Web Services Region. After you enable block public access for snapshots in a Region, users can no longer request public sharing for snapshots in that Region. Snapshots that are already publicly shared are either treated as private or they remain publicly shared, depending on the State that you specify. Enabling block public access for snapshots in block all sharing mode does not change the permissions for snapshots that are already publicly shared. Instead, it prevents these snapshots from be publicly visible and publicly accessible. Therefore, the attributes for these snapshots still indicate that they are publicly shared, even though they are not publicly available. If you later disable block public access or change the mode to block new sharing, these snapshots will become publicly available again. For more information, see Block public access for snapshots in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><a href="#lock_snapshot"><CopyableCode code="lock_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SnapshotId"><code>SnapshotId</code></a>, <a href="#parameter-LockMode"><code>LockMode</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-CoolOffPeriod"><code>CoolOffPeriod</code></a>, <a href="#parameter-LockDuration"><code>LockDuration</code></a>, <a href="#parameter-ExpirationDate"><code>ExpirationDate</code></a></td>
    <td>Locks an Amazon EBS snapshot in either governance or compliance mode to protect it against accidental or malicious deletions for a specific duration. A locked snapshot can't be deleted. You can also use this action to modify the lock settings for a snapshot that is already locked. The allowed modifications depend on the lock mode and lock state: If the snapshot is locked in governance mode, you can modify the lock mode and the lock duration or lock expiration date. If the snapshot is locked in compliance mode and it is in the cooling-off period, you can modify the lock mode and the lock duration or lock expiration date. If the snapshot is locked in compliance mode and the cooling-off period has lapsed, you can only increase the lock duration or extend the lock expiration date.</td>
</tr>
<tr>
    <td><a href="#reset_snapshot_attribute"><CopyableCode code="reset_snapshot_attribute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-Attribute"><code>Attribute</code></a>, <a href="#parameter-SnapshotId"><code>SnapshotId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Resets permission settings for the specified snapshot. For more information about modifying snapshot permissions, see Share a snapshot in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><a href="#restore_snapshot_from_recycle_bin"><CopyableCode code="restore_snapshot_from_recycle_bin" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SnapshotId"><code>SnapshotId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Restores a snapshot from the Recycle Bin. For more information, see Restore snapshots from the Recycle Bin in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><a href="#restore_snapshot_tier"><CopyableCode code="restore_snapshot_tier" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SnapshotId"><code>SnapshotId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TemporaryRestoreDays"><code>TemporaryRestoreDays</code></a>, <a href="#parameter-PermanentRestore"><code>PermanentRestore</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Restores an archived Amazon EBS snapshot for use temporarily or permanently, or modifies the restore period or restore type for a snapshot that was previously temporarily restored. For more information see Restore an archived snapshot and modify the restore period or restore type for a temporarily restored snapshot in the Amazon EBS User Guide.</td>
</tr>
<tr>
    <td><a href="#unlock_snapshot"><CopyableCode code="unlock_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SnapshotId"><code>SnapshotId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Unlocks a snapshot that is locked in governance mode or that is locked in compliance mode but still in the cooling-off period. You can't unlock a snapshot that is locked in compliance mode after the cooling-off period has expired.</td>
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
    <td>The attribute to reset. Currently, only the attribute for permission to create volumes can be reset.</td>
</tr>
<tr id="parameter-InstanceSpecification">
    <td><CopyableCode code="InstanceSpecification" /></td>
    <td><code>object</code></td>
    <td>The instance to specify which volumes should be included in the snapshots.</td>
</tr>
<tr id="parameter-LockMode">
    <td><CopyableCode code="LockMode" /></td>
    <td><code>string</code></td>
    <td>The mode in which to lock the snapshot. Specify one of the following: governance - Locks the snapshot in governance mode. Snapshots locked in governance mode can't be deleted until one of the following conditions are met: The lock duration expires. The snapshot is unlocked by a user with the appropriate permissions. Users with the appropriate IAM permissions can unlock the snapshot, increase or decrease the lock duration, and change the lock mode to compliance at any time. If you lock a snapshot in governance mode, omit CoolOffPeriod. compliance - Locks the snapshot in compliance mode. Snapshots locked in compliance mode can't be unlocked by any user. They can be deleted only after the lock duration expires. Users can't decrease the lock duration or change the lock mode to governance. However, users with appropriate IAM permissions can increase the lock duration at any time. If you lock a snapshot in compliance mode, you can optionally specify CoolOffPeriod.</td>
</tr>
<tr id="parameter-SnapshotId">
    <td><CopyableCode code="SnapshotId" /></td>
    <td><code>string</code></td>
    <td>The ID of the snapshot to unlock.</td>
</tr>
<tr id="parameter-VolumeId">
    <td><CopyableCode code="VolumeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon EBS volume.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CoolOffPeriod">
    <td><CopyableCode code="CoolOffPeriod" /></td>
    <td><code>integer</code></td>
    <td>The cooling-off period during which you can unlock the snapshot or modify the lock settings after locking the snapshot in compliance mode, in hours. After the cooling-off period expires, you can't unlock or delete the snapshot, decrease the lock duration, or change the lock mode. You can increase the lock duration after the cooling-off period expires. The cooling-off period is optional when locking a snapshot in compliance mode. If you are locking the snapshot in governance mode, omit this parameter. To lock the snapshot in compliance mode immediately without a cooling-off period, omit this parameter. If you are extending the lock duration for a snapshot that is locked in compliance mode after the cooling-off period has expired, omit this parameter. If you specify a cooling-period in a such a request, the request fails. Allowed values: Min 1, max 72.</td>
</tr>
<tr id="parameter-CopyTagsFromSource">
    <td><CopyableCode code="CopyTagsFromSource" /></td>
    <td><code>string</code></td>
    <td>Copies the tags from the specified volume to corresponding snapshot.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description propagated to every snapshot specified by the instance.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-ExpirationDate">
    <td><CopyableCode code="ExpirationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the snapshot lock is to automatically expire, in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ). You must specify either this parameter or LockDuration, but not both.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. description - A description of the snapshot. encrypted - Indicates whether the snapshot is encrypted (true | false) owner-alias - The owner alias, from an Amazon-maintained list (amazon). This is not the user-configured Amazon Web Services account alias set using the IAM console. We recommend that you use the related parameter instead of this filter. owner-id - The Amazon Web Services account ID of the owner. We recommend that you use the related parameter instead of this filter. progress - The progress of the snapshot, as a percentage (for example, 80%). snapshot-id - The snapshot ID. start-time - The time stamp when the snapshot was initiated. status - The status of the snapshot (pending | completed | error). storage-tier - The storage tier of the snapshot (archive | standard). transfer-type - The type of operation used to create the snapshot (time-based | standard). tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. volume-id - The ID of the volume the snapshot is for. volume-size - The size of the volume, in GiB.</td>
</tr>
<tr id="parameter-Location">
    <td><CopyableCode code="Location" /></td>
    <td><code>string</code></td>
    <td>Only supported for instances in Local Zones. If the source instance is not in a Local Zone, omit this parameter. To create local snapshots in the same Local Zone as the source instance, specify local. To create regional snapshots in the parent Region of the Local Zone, specify regional or omit this parameter. Default value: regional</td>
</tr>
<tr id="parameter-LockDuration">
    <td><CopyableCode code="LockDuration" /></td>
    <td><code>integer</code></td>
    <td>The period of time for which to lock the snapshot, in days. The snapshot lock will automatically expire after this period lapses. You must specify either this parameter or ExpirationDate, but not both. Allowed values: Min: 1, max 36500</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-OutpostArn">
    <td><CopyableCode code="OutpostArn" /></td>
    <td><code>string</code></td>
    <td>Only supported for instances on Outposts. If the source instance is not on an Outpost, omit this parameter. To create the snapshots on the same Outpost as the source instance, specify the ARN of that Outpost. The snapshots must be created on the same Outpost as the instance. To create the snapshots in the parent Region of the Outpost, omit this parameter. For more information, see Create local snapshots from volumes on an Outpost in the Amazon EBS User Guide.</td>
</tr>
<tr id="parameter-Owner">
    <td><CopyableCode code="Owner" /></td>
    <td><code>array</code></td>
    <td>Scopes the results to snapshots with the specified owners. You can specify a combination of Amazon Web Services account IDs, self, and amazon.</td>
</tr>
<tr id="parameter-PermanentRestore">
    <td><CopyableCode code="PermanentRestore" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to permanently restore an archived snapshot. To permanently restore an archived snapshot, specify true and omit the RestoreSnapshotTierRequest$TemporaryRestoreDays parameter.</td>
</tr>
<tr id="parameter-RestorableBy">
    <td><CopyableCode code="RestorableBy" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Amazon Web Services accounts that can create volumes from the snapshot.</td>
</tr>
<tr id="parameter-SnapshotId">
    <td><CopyableCode code="SnapshotId" /></td>
    <td><code>array</code></td>
    <td>The snapshot IDs. Default: Describes the snapshots for which you have create volume permissions.</td>
</tr>
<tr id="parameter-State">
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The mode in which to enable block public access for snapshots for the Region. Specify one of the following values: block-all-sharing - Prevents all public sharing of snapshots in the Region. Users in the account will no longer be able to request new public sharing. Additionally, snapshots that are already publicly shared are treated as private and they are no longer publicly available. block-new-sharing - Prevents only new public sharing of snapshots in the Region. Users in the account will no longer be able to request new public sharing. However, snapshots that are already publicly shared, remain publicly available. unblocked is not a valid value for EnableSnapshotBlockPublicAccess.</td>
</tr>
<tr id="parameter-StorageTier">
    <td><CopyableCode code="StorageTier" /></td>
    <td><code>string</code></td>
    <td>The name of the storage tier. You must specify archive.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>Tags to apply to every snapshot specified by the instance.</td>
</tr>
<tr id="parameter-TemporaryRestoreDays">
    <td><CopyableCode code="TemporaryRestoreDays" /></td>
    <td><code>integer</code></td>
    <td>Specifies the number of days for which to temporarily restore an archived snapshot. Required for temporary restores only. The snapshot will be automatically re-archived after this period. To temporarily restore an archived snapshot, specify the number of days and omit the PermanentRestore parameter or set it to false.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_snapshots"
    values={[
        { label: 'describe_snapshots', value: 'describe_snapshots' }
    ]}
>
<TabItem value="describe_snapshots">

Describes the specified EBS snapshots available to you or all of the EBS snapshots available to you. The snapshots available to you include public snapshots, private snapshots that you own, and private snapshots owned by other Amazon Web Services accounts for which you have explicit create volume permissions. The create volume permissions fall into the following categories: public: The owner of the snapshot granted create volume permissions for the snapshot to the all group. All Amazon Web Services accounts have create volume permissions for these snapshots. explicit: The owner of the snapshot granted create volume permissions to a specific Amazon Web Services account. implicit: An Amazon Web Services account has implicit create volume permissions for all snapshots it owns. The list of snapshots returned can be filtered by specifying snapshot IDs, snapshot owners, or Amazon Web Services accounts with create volume permissions. If no options are specified, Amazon EC2 returns all snapshots for which you have create volume permissions. If you specify one or more snapshot IDs, only snapshots that have the specified IDs are returned. If you specify an invalid snapshot ID, an error is returned. If you specify a snapshot ID for which you do not have access, it is not included in the returned results. If you specify one or more snapshot owners using the OwnerIds option, only snapshots from the specified owners and for which you have access are returned. The results can include the Amazon Web Services account IDs of the specified owners, amazon for snapshots owned by Amazon, or self for snapshots that you own. If you specify a list of restorable users, only snapshots with create snapshot permissions for those users are returned. You can specify Amazon Web Services account IDs (if you own the snapshots), self for snapshots for which you own or have explicit permissions, or all for public snapshots. If you are describing a long list of snapshots, we recommend that you paginate the output to make the list more manageable. For more information, see Pagination. For more information about EBS snapshots, see Amazon EBS snapshots in the Amazon EBS User Guide. We strongly recommend using only paginated requests. Unpaginated requests are susceptible to throttling and timeouts.

```sql
SELECT
AvailabilityZone,
CompletionDurationMinutes,
CompletionTime,
DataEncryptionKeyId,
Description,
Encrypted,
FullSnapshotSizeInBytes,
KmsKeyId,
OutpostArn,
OwnerAlias,
OwnerId,
Progress,
RestoreExpiryTime,
SnapshotId,
SseType,
StartTime,
State,
StateMessage,
StorageTier,
Tags,
TransferType,
VolumeId,
VolumeSize
FROM aws.ec2.snapshots
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND Owner = '{{ Owner }}'
AND RestorableBy = '{{ RestorableBy }}'
AND SnapshotId = '{{ SnapshotId }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_snapshot"
    values={[
        { label: 'create_snapshot', value: 'create_snapshot' },
        { label: 'create_snapshots', value: 'create_snapshots' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_snapshot">

Creates a snapshot of an EBS volume and stores it in Amazon S3. You can use snapshots for backups, to make copies of EBS volumes, and to save data before shutting down an instance. The location of the source EBS volume determines where you can create the snapshot. If the source volume is in a Region, you must create the snapshot in the same Region as the volume. If the source volume is in a Local Zone, you can create the snapshot in the same Local Zone or in its parent Amazon Web Services Region. If the source volume is on an Outpost, you can create the snapshot on the same Outpost or in its parent Amazon Web Services Region. When a snapshot is created, any Amazon Web Services Marketplace product codes that are associated with the source volume are propagated to the snapshot. You can take a snapshot of an attached volume that is in use. However, snapshots only capture data that has been written to your Amazon EBS volume at the time the snapshot command is issued; this might exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the volume long enough to take a snapshot, your snapshot should be complete. However, if you cannot pause all file writes to the volume, you should unmount the volume from within the instance, issue the snapshot command, and then remount the volume to ensure a consistent and complete snapshot. You may remount and use your volume while the snapshot status is pending. When you create a snapshot for an EBS volume that serves as a root device, we recommend that you stop the instance before taking the snapshot. Snapshots that are taken from encrypted volumes are automatically encrypted. Volumes that are created from encrypted snapshots are also automatically encrypted. Your encrypted volumes and any associated snapshots always remain protected. For more information, see Amazon EBS encryption in the Amazon EBS User Guide.

```sql
INSERT INTO aws.ec2.snapshots (
VolumeId,
region,
Description,
OutpostArn,
TagSpecification,
Location,
DryRun
)
SELECT 
'{{ VolumeId }}',
'{{ region }}',
'{{ Description }}',
'{{ OutpostArn }}',
'{{ TagSpecification }}',
'{{ Location }}',
'{{ DryRun }}'
RETURNING
AvailabilityZone,
CompletionDurationMinutes,
CompletionTime,
DataEncryptionKeyId,
Description,
Encrypted,
FullSnapshotSizeInBytes,
KmsKeyId,
OutpostArn,
OwnerAlias,
OwnerId,
Progress,
RestoreExpiryTime,
SnapshotId,
SseType,
StartTime,
State,
StateMessage,
StorageTier,
Tags,
TransferType,
VolumeId,
VolumeSize
;
```
</TabItem>
<TabItem value="create_snapshots">

Creates crash-consistent snapshots of multiple EBS volumes attached to an Amazon EC2 instance. Volumes are chosen by specifying an instance. Each volume attached to the specified instance will produce one snapshot that is crash-consistent across the instance. You can include all of the volumes currently attached to the instance, or you can exclude the root volume or specific data (non-root) volumes from the multi-volume snapshot set. The location of the source instance determines where you can create the snapshots. If the source instance is in a Region, you must create the snapshots in the same Region as the instance. If the source instance is in a Local Zone, you can create the snapshots in the same Local Zone or in its parent Amazon Web Services Region. If the source instance is on an Outpost, you can create the snapshots on the same Outpost or in its parent Amazon Web Services Region.

```sql
INSERT INTO aws.ec2.snapshots (
InstanceSpecification,
region,
Description,
OutpostArn,
TagSpecification,
DryRun,
CopyTagsFromSource,
Location
)
SELECT 
'{{ InstanceSpecification }}',
'{{ region }}',
'{{ Description }}',
'{{ OutpostArn }}',
'{{ TagSpecification }}',
'{{ DryRun }}',
'{{ CopyTagsFromSource }}',
'{{ Location }}'
RETURNING
AvailabilityZone,
Description,
Encrypted,
OutpostArn,
OwnerId,
Progress,
SnapshotId,
SseType,
StartTime,
State,
Tags,
VolumeId,
VolumeSize
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: snapshots
  props:
    - name: VolumeId
      value: "{{ VolumeId }}"
      description: Required parameter for the snapshots resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the snapshots resource.
    - name: InstanceSpecification
      value: "{{ InstanceSpecification }}"
      description: Required parameter for the snapshots resource.
    - name: Description
      value: "{{ Description }}"
      description: A description for the snapshot.
      description: A description for the snapshot.
    - name: OutpostArn
      value: "{{ OutpostArn }}"
      description: Only supported for volumes on Outposts. If the source volume is not on an Outpost, omit this parameter. To create the snapshot on the same Outpost as the source volume, specify the ARN of that Outpost. The snapshot must be created on the same Outpost as the volume. To create the snapshot in the parent Region of the Outpost, omit this parameter. For more information, see Create local snapshots from volumes on an Outpost in the Amazon EBS User Guide.
      description: Only supported for volumes on Outposts. If the source volume is not on an Outpost, omit this parameter. To create the snapshot on the same Outpost as the source volume, specify the ARN of that Outpost. The snapshot must be created on the same Outpost as the volume. To create the snapshot in the parent Region of the Outpost, omit this parameter. For more information, see Create local snapshots from volumes on an Outpost in the Amazon EBS User Guide.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the snapshot during creation.
      description: The tags to apply to the snapshot during creation.
    - name: Location
      value: "{{ Location }}"
      description: Only supported for volumes in Local Zones. If the source volume is not in a Local Zone, omit this parameter. To create a local snapshot in the same Local Zone as the source volume, specify local. To create a regional snapshot in the parent Region of the Local Zone, specify regional or omit this parameter. Default value: regional
      description: Only supported for volumes in Local Zones. If the source volume is not in a Local Zone, omit this parameter. To create a local snapshot in the same Local Zone as the source volume, specify local. To create a regional snapshot in the parent Region of the Local Zone, specify regional or omit this parameter. Default value: regional
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: CopyTagsFromSource
      value: "{{ CopyTagsFromSource }}"
      description: Copies the tags from the specified volume to corresponding snapshot.
      description: Copies the tags from the specified volume to corresponding snapshot.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_snapshot_tier"
    values={[
        { label: 'modify_snapshot_tier', value: 'modify_snapshot_tier' }
    ]}
>
<TabItem value="modify_snapshot_tier">

Archives an Amazon EBS snapshot. When you archive a snapshot, it is converted to a full snapshot that includes all of the blocks of data that were written to the volume at the time the snapshot was created, and moved from the standard tier to the archive tier. For more information, see Archive Amazon EBS snapshots in the Amazon EBS User Guide.

```sql
UPDATE aws.ec2.snapshots
SET 
-- No updatable properties
WHERE 
SnapshotId = '{{ SnapshotId }}' --required
AND region = '{{ region }}' --required
AND StorageTier = '{{ StorageTier}}'
AND DryRun = {{ DryRun}}
RETURNING
SnapshotId,
TieringStartTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_snapshot"
    values={[
        { label: 'delete_snapshot', value: 'delete_snapshot' }
    ]}
>
<TabItem value="delete_snapshot">

Deletes the specified snapshot. When you make periodic snapshots of a volume, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the volume. You cannot delete a snapshot of the root device of an EBS volume used by a registered AMI. You must first deregister the AMI before you can delete the snapshot. For more information, see Delete an Amazon EBS snapshot in the Amazon EBS User Guide.

```sql
DELETE FROM aws.ec2.snapshots
WHERE SnapshotId = '{{ SnapshotId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_snapshot_block_public_access"
    values={[
        { label: 'disable_snapshot_block_public_access', value: 'disable_snapshot_block_public_access' },
        { label: 'enable_snapshot_block_public_access', value: 'enable_snapshot_block_public_access' },
        { label: 'lock_snapshot', value: 'lock_snapshot' },
        { label: 'reset_snapshot_attribute', value: 'reset_snapshot_attribute' },
        { label: 'restore_snapshot_from_recycle_bin', value: 'restore_snapshot_from_recycle_bin' },
        { label: 'restore_snapshot_tier', value: 'restore_snapshot_tier' },
        { label: 'unlock_snapshot', value: 'unlock_snapshot' }
    ]}
>
<TabItem value="disable_snapshot_block_public_access">

Disables the block public access for snapshots setting at the account level for the specified Amazon Web Services Region. After you disable block public access for snapshots in a Region, users can publicly share snapshots in that Region. Enabling block public access for snapshots in block-all-sharing mode does not change the permissions for snapshots that are already publicly shared. Instead, it prevents these snapshots from be publicly visible and publicly accessible. Therefore, the attributes for these snapshots still indicate that they are publicly shared, even though they are not publicly available. If you disable block public access , these snapshots will become publicly available again. For more information, see Block public access for snapshots in the Amazon EBS User Guide .

```sql
EXEC aws.ec2.snapshots.disable_snapshot_block_public_access 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="enable_snapshot_block_public_access">

Enables or modifies the block public access for snapshots setting at the account level for the specified Amazon Web Services Region. After you enable block public access for snapshots in a Region, users can no longer request public sharing for snapshots in that Region. Snapshots that are already publicly shared are either treated as private or they remain publicly shared, depending on the State that you specify. Enabling block public access for snapshots in block all sharing mode does not change the permissions for snapshots that are already publicly shared. Instead, it prevents these snapshots from be publicly visible and publicly accessible. Therefore, the attributes for these snapshots still indicate that they are publicly shared, even though they are not publicly available. If you later disable block public access or change the mode to block new sharing, these snapshots will become publicly available again. For more information, see Block public access for snapshots in the Amazon EBS User Guide.

```sql
EXEC aws.ec2.snapshots.enable_snapshot_block_public_access 
@region='{{ region }}' --required, 
@State='{{ State }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="lock_snapshot">

Locks an Amazon EBS snapshot in either governance or compliance mode to protect it against accidental or malicious deletions for a specific duration. A locked snapshot can't be deleted. You can also use this action to modify the lock settings for a snapshot that is already locked. The allowed modifications depend on the lock mode and lock state: If the snapshot is locked in governance mode, you can modify the lock mode and the lock duration or lock expiration date. If the snapshot is locked in compliance mode and it is in the cooling-off period, you can modify the lock mode and the lock duration or lock expiration date. If the snapshot is locked in compliance mode and the cooling-off period has lapsed, you can only increase the lock duration or extend the lock expiration date.

```sql
EXEC aws.ec2.snapshots.lock_snapshot 
@SnapshotId='{{ SnapshotId }}' --required, 
@LockMode='{{ LockMode }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@CoolOffPeriod='{{ CoolOffPeriod }}', 
@LockDuration='{{ LockDuration }}', 
@ExpirationDate='{{ ExpirationDate }}'
;
```
</TabItem>
<TabItem value="reset_snapshot_attribute">

Resets permission settings for the specified snapshot. For more information about modifying snapshot permissions, see Share a snapshot in the Amazon EBS User Guide.

```sql
EXEC aws.ec2.snapshots.reset_snapshot_attribute 
@Attribute='{{ Attribute }}' --required, 
@SnapshotId='{{ SnapshotId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="restore_snapshot_from_recycle_bin">

Restores a snapshot from the Recycle Bin. For more information, see Restore snapshots from the Recycle Bin in the Amazon EBS User Guide.

```sql
EXEC aws.ec2.snapshots.restore_snapshot_from_recycle_bin 
@SnapshotId='{{ SnapshotId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="restore_snapshot_tier">

Restores an archived Amazon EBS snapshot for use temporarily or permanently, or modifies the restore period or restore type for a snapshot that was previously temporarily restored. For more information see Restore an archived snapshot and modify the restore period or restore type for a temporarily restored snapshot in the Amazon EBS User Guide.

```sql
EXEC aws.ec2.snapshots.restore_snapshot_tier 
@SnapshotId='{{ SnapshotId }}' --required, 
@region='{{ region }}' --required, 
@TemporaryRestoreDays='{{ TemporaryRestoreDays }}', 
@PermanentRestore={{ PermanentRestore }}, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="unlock_snapshot">

Unlocks a snapshot that is locked in governance mode or that is locked in compliance mode but still in the cooling-off period. You can't unlock a snapshot that is locked in compliance mode after the cooling-off period has expired.

```sql
EXEC aws.ec2.snapshots.unlock_snapshot 
@SnapshotId='{{ SnapshotId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
