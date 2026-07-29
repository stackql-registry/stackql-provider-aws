--- 
title: tapes
hide_title: false
hide_table_of_contents: false
keywords:
  - tapes
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

Creates, updates, deletes, gets or lists a <code>tapes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tapes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.tapes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_tapes"
    values={[
        { label: 'describe_tapes', value: 'describe_tapes' },
        { label: 'list_tapes', value: 'list_tapes' }
    ]}
>
<TabItem value="describe_tapes">

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
    <td><CopyableCode code="kms_key" /></td>
    <td><code>string</code></td>
    <td>Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value must be set if KMSEncrypted is true, or if EncryptionType is SseKms or DsseKms. (pattern: &lt;code&gt;(^arn:(aws(|-cn|-us-gov|-iso&#91;A-Za-z0-9_-&#93;*|-eusc)):kms:(&#91;a-zA-Z0-9-&#93;+):(&#91;0-9&#93;+):(key|alias)/(\S+)$)|(^alias/(\S+)$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pool_entry_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the tape enters a custom tape pool.</td>
</tr>
<tr>
    <td><CopyableCode code="pool_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the pool that contains tapes that will be archived. The tapes in this pool are archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>number (double)</code></td>
    <td>For archiving virtual tapes, indicates how much data remains to be uploaded before archiving is complete. Range: 0 (not started) to 100 (complete).</td>
</tr>
<tr>
    <td><CopyableCode code="retention_start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the tape is first archived with tape retention lock enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="tape_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the virtual tape. (pattern: &lt;code&gt;arn:(aws(|-cn|-us-gov|-iso&#91;A-Za-z0-9_-&#93;*|-eusc)):storagegateway:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;+:tape\/&#91;0-9A-Z&#93;&#123;5,16&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tape_barcode" /></td>
    <td><code>string</code></td>
    <td>The barcode that identifies a specific virtual tape. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tape_created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the virtual tape was created.</td>
</tr>
<tr>
    <td><CopyableCode code="tape_size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size, in bytes, of the virtual tape capacity.</td>
</tr>
<tr>
    <td><CopyableCode code="tape_status" /></td>
    <td><code>string</code></td>
    <td>The current state of the virtual tape.</td>
</tr>
<tr>
    <td><CopyableCode code="tape_used_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size, in bytes, of data stored on the virtual tape. This value is not available for tapes created prior to May 13, 2015.</td>
</tr>
<tr>
    <td><CopyableCode code="vtl_device" /></td>
    <td><code>string</code></td>
    <td>The virtual tape library (VTL) device that the virtual tape is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="worm" /></td>
    <td><code>boolean</code></td>
    <td>If the tape is archived as write-once-read-many (WORM), this value is true.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tapes">

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
    <td><CopyableCode code="pool_entry_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the tape entered the custom tape pool with tape retention lock enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="pool_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</td>
</tr>
<tr>
    <td><CopyableCode code="retention_start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the tape became subject to tape retention lock.</td>
</tr>
<tr>
    <td><CopyableCode code="tape_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a virtual tape. (pattern: &lt;code&gt;arn:(aws(|-cn|-us-gov|-iso&#91;A-Za-z0-9_-&#93;*|-eusc)):storagegateway:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;+:tape\/&#91;0-9A-Z&#93;&#123;5,16&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tape_barcode" /></td>
    <td><code>string</code></td>
    <td>The barcode that identifies a specific virtual tape. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tape_size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size, in bytes, of a virtual tape.</td>
</tr>
<tr>
    <td><CopyableCode code="tape_status" /></td>
    <td><code>string</code></td>
    <td>The status of the tape.</td>
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
    <td><a href="#describe_tapes"><CopyableCode code="describe_tapes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of virtual tapes that correspond to the specified Amazon Resource Names (ARNs). If TapeARN is not specified, returns a description of the virtual tapes associated with the specified gateway. This operation is only supported for the tape gateway type. The operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the Limit field in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of tapes.</td>
</tr>
<tr>
    <td><a href="#list_tapes"><CopyableCode code="list_tapes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both your VTL and VTS. This operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the Limit parameter in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a Marker element that you can use in your subsequent request to retrieve the next set of tapes. This operation is only supported in the tape gateway type.</td>
</tr>
<tr>
    <td><a href="#create_tapes"><CopyableCode code="create_tapes" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-TapeSizeInBytes"><code>TapeSizeInBytes</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-NumTapesToCreate"><code>NumTapesToCreate</code></a>, <a href="#parameter-TapeBarcodePrefix"><code>TapeBarcodePrefix</code></a></td>
    <td></td>
    <td>Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This operation is only supported in the tape gateway type. Cache storage must be allocated to the gateway before you can create virtual tapes. Use the AddCache operation to add cache storage to a gateway.</td>
</tr>
<tr>
    <td><a href="#create_tape_with_barcode"><CopyableCode code="create_tape_with_barcode" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-TapeSizeInBytes"><code>TapeSizeInBytes</code></a>, <a href="#parameter-TapeBarcode"><code>TapeBarcode</code></a></td>
    <td></td>
    <td>Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the tape. A barcode is unique and cannot be reused if it has already been used on a tape. This applies to barcodes used on deleted tapes. This operation is only supported in the tape gateway type. Cache storage must be allocated to the gateway before you can create a virtual tape. Use the AddCache operation to add cache storage to a gateway.</td>
</tr>
<tr>
    <td><a href="#delete_tape"><CopyableCode code="delete_tape" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified virtual tape. This operation is only supported in the tape gateway type.</td>
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
    defaultValue="describe_tapes"
    values={[
        { label: 'describe_tapes', value: 'describe_tapes' },
        { label: 'list_tapes', value: 'list_tapes' }
    ]}
>
<TabItem value="describe_tapes">

Returns a description of virtual tapes that correspond to the specified Amazon Resource Names (ARNs). If TapeARN is not specified, returns a description of the virtual tapes associated with the specified gateway. This operation is only supported for the tape gateway type. The operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the Limit field in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of tapes.

```sql
SELECT
kms_key,
pool_entry_date,
pool_id,
progress,
retention_start_date,
tape_arn,
tape_barcode,
tape_created_date,
tape_size_in_bytes,
tape_status,
tape_used_in_bytes,
vtl_device,
worm
FROM aws.storagegateway.tapes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tapes">

Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both your VTL and VTS. This operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the Limit parameter in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a Marker element that you can use in your subsequent request to retrieve the next set of tapes. This operation is only supported in the tape gateway type.

```sql
SELECT
gateway_arn,
pool_entry_date,
pool_id,
retention_start_date,
tape_arn,
tape_barcode,
tape_size_in_bytes,
tape_status
FROM aws.storagegateway.tapes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tapes"
    values={[
        { label: 'create_tapes', value: 'create_tapes' },
        { label: 'create_tape_with_barcode', value: 'create_tape_with_barcode' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tapes">

Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This operation is only supported in the tape gateway type. Cache storage must be allocated to the gateway before you can create virtual tapes. Use the AddCache operation to add cache storage to a gateway.

```sql
INSERT INTO aws.storagegateway.tapes (
GatewayARN,
TapeSizeInBytes,
ClientToken,
NumTapesToCreate,
TapeBarcodePrefix,
KMSEncrypted,
KMSKey,
PoolId,
Worm,
Tags,
region
)
SELECT 
'{{ GatewayARN }}' /* required */,
{{ TapeSizeInBytes }} /* required */,
'{{ ClientToken }}' /* required */,
{{ NumTapesToCreate }} /* required */,
'{{ TapeBarcodePrefix }}' /* required */,
{{ KMSEncrypted }},
'{{ KMSKey }}',
'{{ PoolId }}',
{{ Worm }},
'{{ Tags }}',
'{{ region }}'
RETURNING
tape_arns
;
```
</TabItem>
<TabItem value="create_tape_with_barcode">

Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the tape. A barcode is unique and cannot be reused if it has already been used on a tape. This applies to barcodes used on deleted tapes. This operation is only supported in the tape gateway type. Cache storage must be allocated to the gateway before you can create a virtual tape. Use the AddCache operation to add cache storage to a gateway.

```sql
INSERT INTO aws.storagegateway.tapes (
GatewayARN,
TapeSizeInBytes,
TapeBarcode,
KMSEncrypted,
KMSKey,
PoolId,
Worm,
Tags,
region
)
SELECT 
'{{ GatewayARN }}' /* required */,
{{ TapeSizeInBytes }} /* required */,
'{{ TapeBarcode }}' /* required */,
{{ KMSEncrypted }},
'{{ KMSKey }}',
'{{ PoolId }}',
{{ Worm }},
'{{ Tags }}',
'{{ region }}'
RETURNING
tape_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tapes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tapes resource.
    - name: GatewayARN
      value: "{{ GatewayARN }}"
      description: |
        The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.
    - name: TapeSizeInBytes
      value: {{ TapeSizeInBytes }}
      description: |
        The size, in bytes, of the virtual tape that you want to create. The size must be aligned by gigabyte (1024*1024*1024 bytes).
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique identifier that you use to retry a request. If you retry a request, use the same ClientToken you specified in the initial request. Using the same ClientToken prevents creating the tape multiple times.
    - name: NumTapesToCreate
      value: {{ NumTapesToCreate }}
      description: |
        The number of virtual tapes that you want to create.
    - name: TapeBarcodePrefix
      value: "{{ TapeBarcodePrefix }}"
      description: |
        A prefix that you append to the barcode of the virtual tape you are creating. This prefix makes the barcode unique. The prefix must be 1-4 characters in length and must be one of the uppercase letters from A to Z.
    - name: KMSEncrypted
      value: {{ KMSEncrypted }}
      description: |
        Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3. Optional. Valid Values: true | false
    - name: KMSKey
      value: "{{ KMSKey }}"
      description: |
        The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value can only be set when KMSEncrypted is true. Optional.
    - name: PoolId
      value: "{{ PoolId }}"
      description: |
        The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Deep Archive) that corresponds to the pool.
    - name: Worm
      value: {{ Worm }}
      description: |
        Set to TRUE if the tape you are creating is to be configured as a write-once-read-many (WORM) tape.
    - name: Tags
      description: |
        A list of up to 50 tags that can be assigned to a virtual tape that has a barcode. Each tag is a key-value pair. Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: TapeBarcode
      value: "{{ TapeBarcode }}"
      description: |
        The barcode that you want to assign to the tape. Barcodes cannot be reused. This includes barcodes used for tapes that have been deleted.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tape"
    values={[
        { label: 'delete_tape', value: 'delete_tape' }
    ]}
>
<TabItem value="delete_tape">

Deletes the specified virtual tape. This operation is only supported in the tape gateway type.

```sql
DELETE FROM aws.storagegateway.tapes
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
