--- 
title: snapshot_blocks
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshot_blocks
  - ebs
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

Creates, updates, deletes, gets or lists a <code>snapshot_blocks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshot_blocks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ebs.snapshot_blocks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_snapshot_block"
    values={[
        { label: 'get_snapshot_block', value: 'get_snapshot_block' },
        { label: 'list_snapshot_blocks', value: 'list_snapshot_blocks' }
    ]}
>
<TabItem value="get_snapshot_block">

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
    <td><CopyableCode code="block_data" /></td>
    <td><code>string (byte)</code></td>
    <td>The data content of the block.</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>The checksum generated for the block, which is Base64 encoded. (pattern: &lt;code&gt;^&#91;A-Za-z0-9+/=&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="checksum_algorithm" /></td>
    <td><code>string</code></td>
    <td>The algorithm used to generate the checksum for the block, such as SHA256. (SHA256) (pattern: &lt;code&gt;^&#91;A-Za-z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="data_length" /></td>
    <td><code>integer</code></td>
    <td>The size of the data in the block.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_snapshot_blocks">

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
    <td><CopyableCode code="block_size" /></td>
    <td><code>integer</code></td>
    <td>The size of the blocks in the snapshot, in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="blocks" /></td>
    <td><code>array</code></td>
    <td>An array of objects containing information about the blocks.</td>
</tr>
<tr>
    <td><CopyableCode code="expiry_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the BlockToken expires.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return. (pattern: &lt;code&gt;^&#91;A-Za-z0-9+/=&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="volume_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the volume in GB.</td>
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
    <td><a href="#get_snapshot_block"><CopyableCode code="get_snapshot_block" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-snapshot_id"><code>snapshot_id</code></a>, <a href="#parameter-block_index"><code>block_index</code></a>, <a href="#parameter-blockToken"><code>blockToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the data in a block in an Amazon Elastic Block Store snapshot. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.</td>
</tr>
<tr>
    <td><a href="#list_snapshot_blocks"><CopyableCode code="list_snapshot_blocks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-snapshot_id"><code>snapshot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-startingBlockIndex"><code>startingBlockIndex</code></a></td>
    <td>Returns information about the blocks in an Amazon Elastic Block Store snapshot. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.</td>
</tr>
<tr>
    <td><a href="#put_snapshot_block"><CopyableCode code="put_snapshot_block" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-snapshot_id"><code>snapshot_id</code></a>, <a href="#parameter-block_index"><code>block_index</code></a>, <a href="#parameter-x-amz-Data-Length"><code>x-amz-Data-Length</code></a>, <a href="#parameter-x-amz-Checksum"><code>x-amz-Checksum</code></a>, <a href="#parameter-x-amz-Checksum-Algorithm"><code>x-amz-Checksum-Algorithm</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BlockData"><code>BlockData</code></a></td>
    <td><a href="#parameter-x-amz-Progress"><code>x-amz-Progress</code></a></td>
    <td>Writes a block of data to a snapshot. If the specified block contains data, the existing data is overwritten. The target snapshot must be in the pending state. Data written to a snapshot must be aligned with 512-KiB sectors. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.</td>
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
<tr id="parameter-blockToken">
    <td><CopyableCode code="blockToken" /></td>
    <td><code>string</code></td>
    <td>The block token of the block from which to get data. You can obtain the BlockToken by running the ListChangedBlocks or ListSnapshotBlocks operations.</td>
</tr>
<tr id="parameter-block_index">
    <td><CopyableCode code="block_index" /></td>
    <td><code>integer</code></td>
    <td>The block index of the block in which to write the data. A block index is a logical index in units of 512 KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/524288). The logical offset of the data must be 512 KiB aligned.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-snapshot_id">
    <td><CopyableCode code="snapshot_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the snapshot. If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see Using encryption in the Amazon Elastic Compute Cloud User Guide..</td>
</tr>
<tr id="parameter-x-amz-Checksum">
    <td><CopyableCode code="x-amz-Checksum" /></td>
    <td><code>string</code></td>
    <td>A Base64-encoded SHA256 checksum of the data. Only SHA256 checksums are supported.</td>
</tr>
<tr id="parameter-x-amz-Checksum-Algorithm">
    <td><CopyableCode code="x-amz-Checksum-Algorithm" /></td>
    <td><code>string</code></td>
    <td>The algorithm used to generate the checksum. Currently, the only supported algorithm is SHA256.</td>
</tr>
<tr id="parameter-x-amz-Data-Length">
    <td><CopyableCode code="x-amz-Data-Length" /></td>
    <td><code>integer</code></td>
    <td>The size of the data to write to the block, in bytes. Currently, the only supported size is 524288 bytes. Valid values: 524288</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of blocks to be returned by the request. Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than MaxResults or an empty array of blocks. To retrieve the next set of blocks from the snapshot, make another request with the returned NextToken value. The value of NextToken is null when there are no more blocks to return.</td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td>The token to request the next page of results. If you specify NextToken, then StartingBlockIndex is ignored.</td>
</tr>
<tr id="parameter-startingBlockIndex">
    <td><CopyableCode code="startingBlockIndex" /></td>
    <td><code>integer</code></td>
    <td>The block index from which the list should start. The list in the response will start from this block index or the next valid block index in the snapshot. If you specify NextToken, then StartingBlockIndex is ignored.</td>
</tr>
<tr id="parameter-x-amz-Progress">
    <td><CopyableCode code="x-amz-Progress" /></td>
    <td><code>integer</code></td>
    <td>The progress of the write process, as a percentage.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_snapshot_block"
    values={[
        { label: 'get_snapshot_block', value: 'get_snapshot_block' },
        { label: 'list_snapshot_blocks', value: 'list_snapshot_blocks' }
    ]}
>
<TabItem value="get_snapshot_block">

Returns the data in a block in an Amazon Elastic Block Store snapshot. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

```sql
SELECT
block_data,
checksum,
checksum_algorithm,
data_length
FROM aws.ebs.snapshot_blocks
WHERE snapshot_id = '{{ snapshot_id }}' -- required
AND block_index = '{{ block_index }}' -- required
AND blockToken = '{{ blockToken }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_snapshot_blocks">

Returns information about the blocks in an Amazon Elastic Block Store snapshot. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

```sql
SELECT
block_size,
blocks,
expiry_time,
next_token,
volume_size
FROM aws.ebs.snapshot_blocks
WHERE snapshot_id = '{{ snapshot_id }}' -- required
AND region = '{{ region }}' -- required
AND pageToken = '{{ pageToken }}'
AND maxResults = '{{ maxResults }}'
AND startingBlockIndex = '{{ startingBlockIndex }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_snapshot_block"
    values={[
        { label: 'put_snapshot_block', value: 'put_snapshot_block' }
    ]}
>
<TabItem value="put_snapshot_block">

Writes a block of data to a snapshot. If the specified block contains data, the existing data is overwritten. The target snapshot must be in the pending state. Data written to a snapshot must be aligned with 512-KiB sectors. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

```sql
REPLACE aws.ebs.snapshot_blocks
SET 
BlockData = '{{ BlockData }}'
WHERE 
snapshot_id = '{{ snapshot_id }}' --required
AND block_index = '{{ block_index }}' --required
AND `x-amz-Data-Length` = '{{ x-amz-Data-Length }}' --required
AND `x-amz-Checksum` = '{{ x-amz-Checksum }}' --required
AND `x-amz-Checksum-Algorithm` = '{{ x-amz-Checksum-Algorithm }}' --required
AND region = '{{ region }}' --required
AND BlockData = '{{ BlockData }}' --required
AND `x-amz-Progress` = '{{ x-amz-Progress}}'
RETURNING
checksum,
checksum_algorithm;
```
</TabItem>
</Tabs>
