--- 
title: storedi_scsi_volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - storedi_scsi_volumes
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

Creates, updates, deletes, gets or lists a <code>storedi_scsi_volumes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="storedi_scsi_volumes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.storedi_scsi_volumes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_storedi_scsi_volumes"
    values={[
        { label: 'describe_storedi_scsi_volumes', value: 'describe_storedi_scsi_volumes' }
    ]}
>
<TabItem value="describe_storedi_scsi_volumes">

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
    <td><CopyableCode code="storedi_scsi_volumes" /></td>
    <td><code>array</code></td>
    <td>Describes a single unit of output from DescribeStorediSCSIVolumes. The following fields are returned: ChapEnabled: Indicates whether mutual CHAP is enabled for the iSCSI target. LunNumber: The logical disk number. NetworkInterfaceId: The network interface ID of the stored volume that initiator use to map the stored volume as an iSCSI target. NetworkInterfacePort: The port used to communicate with iSCSI targets. PreservedExistingData: Indicates when the stored volume was created, existing data on the underlying local disk was preserved. SourceSnapshotId: If the stored volume was created from a snapshot, this field contains the snapshot ID used, e.g. snap-1122aabb. Otherwise, this field is not included. StorediSCSIVolumes: An array of StorediSCSIVolume objects where each object contains metadata about one stored volume. TargetARN: The Amazon Resource Name (ARN) of the volume target. VolumeARN: The Amazon Resource Name (ARN) of the stored volume. VolumeDiskId: The disk ID of the local disk that was specified in the CreateStorediSCSIVolume operation. VolumeId: The unique identifier of the storage volume, e.g. vol-1122AABB. VolumeiSCSIAttributes: An VolumeiSCSIAttributes object that represents a collection of iSCSI attributes for one stored volume. VolumeProgress: Represents the percentage complete if the volume is restoring or bootstrapping that represents the percent of data transferred. This field does not appear in the response if the stored volume is not restoring or bootstrapping. VolumeSizeInBytes: The size of the volume in bytes. VolumeStatus: One of the VolumeStatus values that indicates the state of the volume. VolumeType: One of the enumeration values describing the type of the volume. Currently, only STORED volumes are supported.</td>
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
    <td><a href="#describe_storedi_scsi_volumes"><CopyableCode code="describe_storedi_scsi_volumes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume ARNs. This operation is only supported in stored volume gateway type.</td>
</tr>
<tr>
    <td><a href="#create_storedi_scsi_volume"><CopyableCode code="create_storedi_scsi_volume" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-DiskId"><code>DiskId</code></a>, <a href="#parameter-PreserveExistingData"><code>PreserveExistingData</code></a>, <a href="#parameter-TargetName"><code>TargetName</code></a>, <a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a></td>
    <td></td>
    <td>Creates a volume on a specified gateway. This operation is only supported in the stored volume gateway type. The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty gateway volume, then any existing data on the disk is erased. In the request, you must specify the gateway and the disk information on which you are creating the volume. In response, the gateway creates the volume and returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.</td>
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
    defaultValue="describe_storedi_scsi_volumes"
    values={[
        { label: 'describe_storedi_scsi_volumes', value: 'describe_storedi_scsi_volumes' }
    ]}
>
<TabItem value="describe_storedi_scsi_volumes">

Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume ARNs. This operation is only supported in stored volume gateway type.

```sql
SELECT
storedi_scsi_volumes
FROM aws.storagegateway.storedi_scsi_volumes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_storedi_scsi_volume"
    values={[
        { label: 'create_storedi_scsi_volume', value: 'create_storedi_scsi_volume' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_storedi_scsi_volume">

Creates a volume on a specified gateway. This operation is only supported in the stored volume gateway type. The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty gateway volume, then any existing data on the disk is erased. In the request, you must specify the gateway and the disk information on which you are creating the volume. In response, the gateway creates the volume and returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.

```sql
INSERT INTO aws.storagegateway.storedi_scsi_volumes (
GatewayARN,
DiskId,
SnapshotId,
PreserveExistingData,
TargetName,
NetworkInterfaceId,
KMSEncrypted,
KMSKey,
Tags,
region
)
SELECT 
'{{ GatewayARN }}' /* required */,
'{{ DiskId }}' /* required */,
'{{ SnapshotId }}',
{{ PreserveExistingData }} /* required */,
'{{ TargetName }}' /* required */,
'{{ NetworkInterfaceId }}' /* required */,
{{ KMSEncrypted }},
'{{ KMSKey }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
target_arn,
volume_arn,
volume_size_in_bytes
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: storedi_scsi_volumes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the storedi_scsi_volumes resource.
    - name: GatewayARN
      value: "{{ GatewayARN }}"
      description: |
        The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
    - name: DiskId
      value: "{{ DiskId }}"
      description: |
        The unique identifier for the gateway local disk that is configured as a stored volume. Use ListLocalDisks to list disk IDs for a gateway.
    - name: SnapshotId
      value: "{{ SnapshotId }}"
      description: |
        The snapshot ID (e.g., "snap-1122aabb") of the snapshot to restore as the new stored volume. Specify this field if you want to create the iSCSI storage volume from a snapshot; otherwise, do not include this field. To list snapshots for your account use DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference.
    - name: PreserveExistingData
      value: {{ PreserveExistingData }}
      description: |
        Set to true if you want to preserve the data on the local disk. Otherwise, set to false to create an empty volume. Valid Values: true | false
    - name: TargetName
      value: "{{ TargetName }}"
      description: |
        The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying TargetName as myvolume results in the target ARN of arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume. The target name must be unique across all volumes on a gateway. If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.
    - name: NetworkInterfaceId
      value: "{{ NetworkInterfaceId }}"
      description: |
        The network interface of the gateway on which to expose the iSCSI target. Accepts IPv4 and IPv6 addresses. Use DescribeGatewayInformation to get a list of the network interfaces available on a gateway. Valid Values: A valid IP address.
    - name: KMSEncrypted
      value: {{ KMSEncrypted }}
      description: |
        Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3. Optional. Valid Values: true | false
    - name: KMSKey
      value: "{{ KMSKey }}"
      description: |
        The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when KMSEncrypted is true. Optional.
    - name: Tags
      description: |
        A list of up to 50 tags that can be assigned to a stored volume. Each tag is a key-value pair. Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>
