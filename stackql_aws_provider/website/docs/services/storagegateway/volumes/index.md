--- 
title: volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes
  - storagegateway
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.volumes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_volumes"
    values={[
        { label: 'list_volumes', value: 'list_volumes' }
    ]}
>
<TabItem value="list_volumes">

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
    <td><CopyableCode code="gateway_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations. Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</td>
</tr>
<tr>
    <td><CopyableCode code="volume_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the storage volume. For example, the following is a valid ARN: arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-). (pattern: &lt;code&gt;arn:(aws(|-cn|-us-gov|-iso&#91;A-Za-z0-9_-&#93;*|-eusc)):storagegateway:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;+:gateway\/(.+)\/volume\/vol-(\S+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="volume_attachment_status" /></td>
    <td><code>string</code></td>
    <td>One of the VolumeStatus values that indicates the state of the storage volume.</td>
</tr>
<tr>
    <td><CopyableCode code="volume_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier assigned to the volume. This ID becomes part of the volume Amazon Resource Name (ARN), which you use as input for other operations. Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</td>
</tr>
<tr>
    <td><CopyableCode code="volume_size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the volume in bytes. Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</td>
</tr>
<tr>
    <td><CopyableCode code="volume_type" /></td>
    <td><code>string</code></td>
    <td>One of the VolumeType enumeration values describing the type of the volume.</td>
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
    <td><a href="#list_volumes"><CopyableCode code="list_volumes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in the response. If the number of volumes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This operation is only supported in the cached volume and stored volume gateway types.</td>
</tr>
<tr>
    <td><a href="#create_snapshot"><CopyableCode code="create_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VolumeARN"><code>VolumeARN</code></a>, <a href="#parameter-SnapshotDescription"><code>SnapshotDescription</code></a></td>
    <td></td>
    <td>Initiates a snapshot of a volume. Storage Gateway provides the ability to back up point-in-time snapshots of your data to Amazon Simple Storage (Amazon S3) for durable off-site recovery, and also import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad hoc basis. This API enables you to take an ad hoc snapshot. For more information, see Editing a snapshot schedule. In the CreateSnapshot request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When Storage Gateway takes the snapshot of specified volume, the snapshot and description appears in the Storage Gateway console. In response, Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only supported in stored and cached volume gateway type. To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the Amazon Elastic Compute Cloud API Reference. Volume and snapshot IDs are changing to a longer length ID format. For more information, see the important note on the Welcome page.</td>
</tr>
<tr>
    <td><a href="#attach_volume"><CopyableCode code="attach_volume" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-VolumeARN"><code>VolumeARN</code></a>, <a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a></td>
    <td></td>
    <td>Connects a volume to an iSCSI connection and then attaches the volume to the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.</td>
</tr>
<tr>
    <td><a href="#detach_volume"><CopyableCode code="detach_volume" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VolumeARN"><code>VolumeARN</code></a></td>
    <td></td>
    <td>Disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance. This operation is only supported in the volume gateway type.</td>
</tr>
<tr>
    <td><a href="#delete_volume"><CopyableCode code="delete_volume" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified storage volume that you previously created using the CreateCachediSCSIVolume or CreateStorediSCSIVolume API. This operation is only supported in the cached volume and stored volume types. For stored volume gateways, the local disk that was configured as the storage volume is not deleted. You can reuse the local disk to create another storage volume. Before you delete a volume, make sure there are no iSCSI connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and check the snapshot status. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference. In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to delete.</td>
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
    defaultValue="list_volumes"
    values={[
        { label: 'list_volumes', value: 'list_volumes' }
    ]}
>
<TabItem value="list_volumes">

Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in the response. If the number of volumes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This operation is only supported in the cached volume and stored volume gateway types.

```sql
SELECT
gateway_arn,
gateway_id,
volume_arn,
volume_attachment_status,
volume_id,
volume_size_in_bytes,
volume_type
FROM aws.storagegateway.volumes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_snapshot"
    values={[
        { label: 'create_snapshot', value: 'create_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_snapshot">

Initiates a snapshot of a volume. Storage Gateway provides the ability to back up point-in-time snapshots of your data to Amazon Simple Storage (Amazon S3) for durable off-site recovery, and also import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad hoc basis. This API enables you to take an ad hoc snapshot. For more information, see Editing a snapshot schedule. In the CreateSnapshot request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When Storage Gateway takes the snapshot of specified volume, the snapshot and description appears in the Storage Gateway console. In response, Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only supported in stored and cached volume gateway type. To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the Amazon Elastic Compute Cloud API Reference. Volume and snapshot IDs are changing to a longer length ID format. For more information, see the important note on the Welcome page.

```sql
INSERT INTO aws.storagegateway.volumes (
VolumeARN,
SnapshotDescription,
Tags,
region
)
SELECT 
'{{ VolumeARN }}' /* required */,
'{{ SnapshotDescription }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
snapshot_id,
volume_arn
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
    - name: VolumeARN
      value: "{{ VolumeARN }}"
      description: |
        The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of gateway volumes.
    - name: SnapshotDescription
      value: "{{ SnapshotDescription }}"
      description: |
        Textual description of the snapshot that appears in the Amazon EC2 console, Elastic Block Store snapshots panel in the Description field, and in the Storage Gateway snapshot Details pane, Description field.
    - name: Tags
      description: |
        A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair. Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
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

Connects a volume to an iSCSI connection and then attaches the volume to the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance.

```sql
UPDATE aws.storagegateway.volumes
SET 
GatewayARN = '{{ GatewayARN }}',
TargetName = '{{ TargetName }}',
VolumeARN = '{{ VolumeARN }}',
NetworkInterfaceId = '{{ NetworkInterfaceId }}',
DiskId = '{{ DiskId }}'
WHERE 
region = '{{ region }}' --required
AND GatewayARN = '{{ GatewayARN }}' --required
AND VolumeARN = '{{ VolumeARN }}' --required
AND NetworkInterfaceId = '{{ NetworkInterfaceId }}' --required
RETURNING
target_arn,
volume_arn;
```
</TabItem>
<TabItem value="detach_volume">

Disconnects a volume from an iSCSI connection and then detaches the volume from the specified gateway. Detaching and attaching a volume enables you to recover your data from one gateway to a different gateway without creating a snapshot. It also makes it easier to move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2 instance. This operation is only supported in the volume gateway type.

```sql
UPDATE aws.storagegateway.volumes
SET 
VolumeARN = '{{ VolumeARN }}',
ForceDetach = {{ ForceDetach }}
WHERE 
region = '{{ region }}' --required
AND VolumeARN = '{{ VolumeARN }}' --required
RETURNING
volume_arn;
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

Deletes the specified storage volume that you previously created using the CreateCachediSCSIVolume or CreateStorediSCSIVolume API. This operation is only supported in the cached volume and stored volume types. For stored volume gateways, the local disk that was configured as the storage volume is not deleted. You can reuse the local disk to create another storage volume. Before you delete a volume, make sure there are no iSCSI connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and check the snapshot status. For more information, go to DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference. In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to delete.

```sql
DELETE FROM aws.storagegateway.volumes
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
