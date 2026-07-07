--- 
title: tape_archives
hide_title: false
hide_table_of_contents: false
keywords:
  - tape_archives
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

Creates, updates, deletes, gets or lists a <code>tape_archives</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tape_archives" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.tape_archives" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_tape_archives"
    values={[
        { label: 'describe_tape_archives', value: 'describe_tape_archives' }
    ]}
>
<TabItem value="describe_tape_archives">

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
    <td><CopyableCode code="CompletionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the archiving of the virtual tape was completed. The default timestamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.</td>
</tr>
<tr>
    <td><CopyableCode code="KMSKey" /></td>
    <td><code>string</code></td>
    <td>Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. Storage Gateway does not support asymmetric CMKs. This value must be set if KMSEncrypted is true, or if EncryptionType is SseKms or DsseKms. (pattern: &lt;code&gt;(^arn:(aws(|-cn|-us-gov|-iso&#91;A-Za-z0-9_-&#93;*|-eusc)):kms:(&#91;a-zA-Z0-9-&#93;+):(&#91;0-9&#93;+):(key|alias)/(\S+)$)|(^alias/(\S+)$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PoolEntryDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the tape entered the custom tape pool. The default timestamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.</td>
</tr>
<tr>
    <td><CopyableCode code="PoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the pool that was used to archive the tape. The tapes in this pool are archived in the S3 storage class that is associated with the pool.</td>
</tr>
<tr>
    <td><CopyableCode code="RetentionStartDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>If the archived tape is subject to tape retention lock, the date that the archived tape started being retained.</td>
</tr>
<tr>
    <td><CopyableCode code="RetrievedTo" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="TapeARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an archived virtual tape. (pattern: &lt;code&gt;arn:(aws(|-cn|-us-gov|-iso&#91;A-Za-z0-9_-&#93;*|-eusc)):storagegateway:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;+:tape\/&#91;0-9A-Z&#93;&#123;5,16&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TapeBarcode" /></td>
    <td><code>string</code></td>
    <td>The barcode that identifies the archived virtual tape. (pattern: &lt;code&gt;^&#91;A-Z0-9&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TapeCreatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the virtual tape was created.</td>
</tr>
<tr>
    <td><CopyableCode code="TapeSizeInBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size, in bytes, of the archived virtual tape.</td>
</tr>
<tr>
    <td><CopyableCode code="TapeStatus" /></td>
    <td><code>string</code></td>
    <td>The current state of the archived virtual tape.</td>
</tr>
<tr>
    <td><CopyableCode code="TapeUsedInBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size, in bytes, of data stored on the virtual tape. This value is not available for tapes created prior to May 13, 2015.</td>
</tr>
<tr>
    <td><CopyableCode code="Worm" /></td>
    <td><code>boolean</code></td>
    <td>Set to true if the archived tape is stored as write-once-read-many (WORM).</td>
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
    <td><a href="#describe_tape_archives"><CopyableCode code="describe_tape_archives" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This operation is only supported in the tape gateway type. If a specific TapeARN is not specified, Storage Gateway returns a description of all virtual tapes found in the VTS associated with your account.</td>
</tr>
<tr>
    <td><a href="#delete_tape_archive"><CopyableCode code="delete_tape_archive" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.</td>
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
    defaultValue="describe_tape_archives"
    values={[
        { label: 'describe_tape_archives', value: 'describe_tape_archives' }
    ]}
>
<TabItem value="describe_tape_archives">

Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This operation is only supported in the tape gateway type. If a specific TapeARN is not specified, Storage Gateway returns a description of all virtual tapes found in the VTS associated with your account.

```sql
SELECT
CompletionTime,
KMSKey,
PoolEntryDate,
PoolId,
RetentionStartDate,
RetrievedTo,
TapeARN,
TapeBarcode,
TapeCreatedDate,
TapeSizeInBytes,
TapeStatus,
TapeUsedInBytes,
Worm
FROM aws.storagegateway.tape_archives
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tape_archive"
    values={[
        { label: 'delete_tape_archive', value: 'delete_tape_archive' }
    ]}
>
<TabItem value="delete_tape_archive">

Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.

```sql
DELETE FROM aws.storagegateway.tape_archives
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
