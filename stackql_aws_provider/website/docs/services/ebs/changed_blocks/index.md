--- 
title: changed_blocks
hide_title: false
hide_table_of_contents: false
keywords:
  - changed_blocks
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

Creates, updates, deletes, gets or lists a <code>changed_blocks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="changed_blocks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ebs.changed_blocks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_changed_blocks"
    values={[
        { label: 'list_changed_blocks', value: 'list_changed_blocks' }
    ]}
>
<TabItem value="list_changed_blocks">

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
    <td><CopyableCode code="BlockSize" /></td>
    <td><code>integer</code></td>
    <td>The size of the blocks in the snapshot, in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="ChangedBlocks" /></td>
    <td><code>array</code></td>
    <td>An array of objects containing information about the changed blocks.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpiryTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the BlockToken expires.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return. (pattern: &lt;code&gt;^&#91;A-Za-z0-9+/=&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VolumeSize" /></td>
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
    <td><a href="#list_changed_blocks"><CopyableCode code="list_changed_blocks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-second_snapshot_id"><code>second_snapshot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-firstSnapshotId"><code>firstSnapshotId</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-startingBlockIndex"><code>startingBlockIndex</code></a></td>
    <td>Returns information about the blocks that are different between two Amazon Elastic Block Store snapshots of the same volume/snapshot lineage. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.</td>
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
<tr id="parameter-second_snapshot_id">
    <td><CopyableCode code="second_snapshot_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the second snapshot to use for the comparison. The SecondSnapshotId parameter must be specified with a FirstSnapshotID parameter; otherwise, an error occurs.</td>
</tr>
<tr id="parameter-firstSnapshotId">
    <td><CopyableCode code="firstSnapshotId" /></td>
    <td><code>string</code></td>
    <td>The ID of the first snapshot to use for the comparison. The FirstSnapshotID parameter must be specified with a SecondSnapshotId parameter; otherwise, an error occurs.</td>
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
    <td>The block index from which the comparison should start. The list in the response will start from this block index or the next valid block index in the snapshots. If you specify NextToken, then StartingBlockIndex is ignored.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_changed_blocks"
    values={[
        { label: 'list_changed_blocks', value: 'list_changed_blocks' }
    ]}
>
<TabItem value="list_changed_blocks">

Returns information about the blocks that are different between two Amazon Elastic Block Store snapshots of the same volume/snapshot lineage. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

```sql
SELECT
BlockSize,
ChangedBlocks,
ExpiryTime,
NextToken,
VolumeSize
FROM aws.ebs.changed_blocks
WHERE second_snapshot_id = '{{ second_snapshot_id }}' -- required
AND region = '{{ region }}' -- required
AND firstSnapshotId = '{{ firstSnapshotId }}'
AND pageToken = '{{ pageToken }}'
AND maxResults = '{{ maxResults }}'
AND startingBlockIndex = '{{ startingBlockIndex }}'
;
```
</TabItem>
</Tabs>
