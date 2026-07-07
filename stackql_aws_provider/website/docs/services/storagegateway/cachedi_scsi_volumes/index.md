--- 
title: cachedi_scsi_volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - cachedi_scsi_volumes
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

Creates, updates, deletes, gets or lists a <code>cachedi_scsi_volumes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cachedi_scsi_volumes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.cachedi_scsi_volumes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cachedi_scsi_volumes"
    values={[
        { label: 'describe_cachedi_scsi_volumes', value: 'describe_cachedi_scsi_volumes' }
    ]}
>
<TabItem value="describe_cachedi_scsi_volumes">

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
    <td><CopyableCode code="CachediSCSIVolumes" /></td>
    <td><code>array</code></td>
    <td>An array of objects where each object contains metadata about one cached volume.</td>
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
    <td><a href="#describe_cachedi_scsi_volumes"><CopyableCode code="describe_cachedi_scsi_volumes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of the gateway volumes specified in the request. This operation is only supported in the cached volume gateway types. The list of gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><a href="#create_cachedi_scsi_volume"><CopyableCode code="create_cachedi_scsi_volume" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-VolumeSizeInBytes"><code>VolumeSizeInBytes</code></a>, <a href="#parameter-TargetName"><code>TargetName</code></a>, <a href="#parameter-NetworkInterfaceId"><code>NetworkInterfaceId</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Creates a cached volume on a specified cached volume gateway. This operation is only supported in the cached volume gateway type. Cache storage must be allocated to the gateway before you can create a cached volume. Use the AddCache operation to add cache storage to a gateway. In the request, you must specify the gateway, size of the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client token. In response, the gateway creates the volume and returns information about it. This information includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target. Optionally, you can provide the ARN for an existing volume as the SourceVolumeARN for this cached volume, which creates an exact copy of the existing volume’s latest recovery point. The VolumeSizeInBytes value must be equal to or larger than the size of the copied volume, in bytes.</td>
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
    defaultValue="describe_cachedi_scsi_volumes"
    values={[
        { label: 'describe_cachedi_scsi_volumes', value: 'describe_cachedi_scsi_volumes' }
    ]}
>
<TabItem value="describe_cachedi_scsi_volumes">

Returns a description of the gateway volumes specified in the request. This operation is only supported in the cached volume gateway types. The list of gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).

```sql
SELECT
CachediSCSIVolumes
FROM aws.storagegateway.cachedi_scsi_volumes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cachedi_scsi_volume"
    values={[
        { label: 'create_cachedi_scsi_volume', value: 'create_cachedi_scsi_volume' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cachedi_scsi_volume">

Creates a cached volume on a specified cached volume gateway. This operation is only supported in the cached volume gateway type. Cache storage must be allocated to the gateway before you can create a cached volume. Use the AddCache operation to add cache storage to a gateway. In the request, you must specify the gateway, size of the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client token. In response, the gateway creates the volume and returns information about it. This information includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target. Optionally, you can provide the ARN for an existing volume as the SourceVolumeARN for this cached volume, which creates an exact copy of the existing volume’s latest recovery point. The VolumeSizeInBytes value must be equal to or larger than the size of the copied volume, in bytes.

```sql
INSERT INTO aws.storagegateway.cachedi_scsi_volumes (
GatewayARN,
VolumeSizeInBytes,
SnapshotId,
TargetName,
SourceVolumeARN,
NetworkInterfaceId,
ClientToken,
KMSEncrypted,
KMSKey,
Tags,
region
)
SELECT 
'{{ GatewayARN }}' /* required */,
{{ VolumeSizeInBytes }} /* required */,
'{{ SnapshotId }}',
'{{ TargetName }}' /* required */,
'{{ SourceVolumeARN }}',
'{{ NetworkInterfaceId }}' /* required */,
'{{ ClientToken }}' /* required */,
{{ KMSEncrypted }},
'{{ KMSKey }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
TargetARN,
VolumeARN
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cachedi_scsi_volumes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cachedi_scsi_volumes resource.
    - name: GatewayARN
      value: "{{ GatewayARN }}"
      description: |
        The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
    - name: VolumeSizeInBytes
      value: {{ VolumeSizeInBytes }}
      description: |
        The size of the volume in bytes.
    - name: SnapshotId
      value: "{{ SnapshotId }}"
      description: |
        The snapshot ID (e.g. "snap-1122aabb") of the snapshot to restore as the new cached volume. Specify this field if you want to create the iSCSI storage volume from a snapshot; otherwise, do not include this field. To list snapshots for your account use DescribeSnapshots in the Amazon Elastic Compute Cloud API Reference.
    - name: TargetName
      value: "{{ TargetName }}"
      description: |
        The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying TargetName as myvolume results in the target ARN of arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume. The target name must be unique across all volumes on a gateway. If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.
    - name: SourceVolumeARN
      value: "{{ SourceVolumeARN }}"
      description: |
        The ARN for an existing volume. Specifying this ARN makes the new volume into an exact copy of the specified existing volume's latest recovery point. The VolumeSizeInBytes value for this new volume must be equal to or larger than the size of the existing volume, in bytes.
    - name: NetworkInterfaceId
      value: "{{ NetworkInterfaceId }}"
      description: |
        The network interface of the gateway on which to expose the iSCSI target. Accepts IPv4 and IPv6 addresses. Use DescribeGatewayInformation to get a list of the network interfaces available on a gateway. Valid Values: A valid IP address.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique identifier that you use to retry a request. If you retry a request, use the same ClientToken you specified in the initial request.
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
        A list of up to 50 tags that you can assign to a cached volume. Each tag is a key-value pair. Valid characters for key and value are letters, spaces, and numbers that you can represent in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256 characters.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>
