--- 
title: snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots
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

Creates, updates, deletes, gets or lists a <code>snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ebs.snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#complete_snapshot"><CopyableCode code="complete_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-snapshot_id"><code>snapshot_id</code></a>, <a href="#parameter-x-amz-ChangedBlocksCount"><code>x-amz-ChangedBlocksCount</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-Checksum"><code>x-amz-Checksum</code></a>, <a href="#parameter-x-amz-Checksum-Algorithm"><code>x-amz-Checksum-Algorithm</code></a>, <a href="#parameter-x-amz-Checksum-Aggregation-Method"><code>x-amz-Checksum-Aggregation-Method</code></a></td>
    <td>Seals and completes the snapshot after all of the required blocks of data have been written to it. Completing the snapshot changes the status to completed. You cannot write new blocks to a snapshot after it has been completed. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.</td>
</tr>
<tr>
    <td><a href="#start_snapshot"><CopyableCode code="start_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VolumeSize"><code>VolumeSize</code></a></td>
    <td></td>
    <td>Creates a new Amazon EBS snapshot. The new snapshot enters the pending state after the request completes. After creating the snapshot, use PutSnapshotBlock to write blocks of data to the snapshot. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.</td>
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
<tr id="parameter-snapshot_id">
    <td><CopyableCode code="snapshot_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the snapshot.</td>
</tr>
<tr id="parameter-x-amz-ChangedBlocksCount">
    <td><CopyableCode code="x-amz-ChangedBlocksCount" /></td>
    <td><code>integer</code></td>
    <td>The number of blocks that were written to the snapshot.</td>
</tr>
<tr id="parameter-x-amz-Checksum">
    <td><CopyableCode code="x-amz-Checksum" /></td>
    <td><code>string</code></td>
    <td>An aggregated Base-64 SHA256 checksum based on the checksums of each written block. To generate the aggregated checksum using the linear aggregation method, arrange the checksums for each written block in ascending order of their block index, concatenate them to form a single string, and then generate the checksum on the entire string using the SHA256 algorithm.</td>
</tr>
<tr id="parameter-x-amz-Checksum-Aggregation-Method">
    <td><CopyableCode code="x-amz-Checksum-Aggregation-Method" /></td>
    <td><code>string</code></td>
    <td>The aggregation method used to generate the checksum. Currently, the only supported aggregation method is LINEAR.</td>
</tr>
<tr id="parameter-x-amz-Checksum-Algorithm">
    <td><CopyableCode code="x-amz-Checksum-Algorithm" /></td>
    <td><code>string</code></td>
    <td>The algorithm used to generate the checksum. Currently, the only supported algorithm is SHA256.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="complete_snapshot"
    values={[
        { label: 'complete_snapshot', value: 'complete_snapshot' },
        { label: 'start_snapshot', value: 'start_snapshot' }
    ]}
>
<TabItem value="complete_snapshot">

Seals and completes the snapshot after all of the required blocks of data have been written to it. Completing the snapshot changes the status to completed. You cannot write new blocks to a snapshot after it has been completed. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

```sql
EXEC aws.ebs.snapshots.complete_snapshot 
@snapshot_id='{{ snapshot_id }}' --required, 
@x-amz-ChangedBlocksCount='{{ x-amz-ChangedBlocksCount }}' --required, 
@region='{{ region }}' --required, 
@x-amz-Checksum='{{ x-amz-Checksum }}', 
@x-amz-Checksum-Algorithm='{{ x-amz-Checksum-Algorithm }}', 
@x-amz-Checksum-Aggregation-Method='{{ x-amz-Checksum-Aggregation-Method }}'
;
```
</TabItem>
<TabItem value="start_snapshot">

Creates a new Amazon EBS snapshot. The new snapshot enters the pending state after the request completes. After creating the snapshot, use PutSnapshotBlock to write blocks of data to the snapshot. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.

```sql
EXEC aws.ebs.snapshots.start_snapshot 
@region='{{ region }}' --required 
@@json=
'{
"VolumeSize": {{ VolumeSize }}, 
"ParentSnapshotId": "{{ ParentSnapshotId }}", 
"Tags": "{{ Tags }}", 
"Description": "{{ Description }}", 
"ClientToken": "{{ ClientToken }}", 
"Encrypted": {{ Encrypted }}, 
"KmsKeyArn": "{{ KmsKeyArn }}", 
"Timeout": {{ Timeout }}
}'
;
```
</TabItem>
</Tabs>
