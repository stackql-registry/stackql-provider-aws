--- 
title: snapshots_in_recycle_bins
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots_in_recycle_bins
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

Creates, updates, deletes, gets or lists a <code>snapshots_in_recycle_bins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshots_in_recycle_bins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.snapshots_in_recycle_bins" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_snapshots_in_recycle_bin"
    values={[
        { label: 'list_snapshots_in_recycle_bin', value: 'list_snapshots_in_recycle_bin' }
    ]}
>
<TabItem value="list_snapshots_in_recycle_bin">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="recycle_bin_enter_time" /></td>
    <td><code>string</code></td>
    <td>The date and time when the snapshot entered the Recycle Bin.</td>
</tr>
<tr>
    <td><CopyableCode code="recycle_bin_exit_time" /></td>
    <td><code>string</code></td>
    <td>The date and time when the snapshot is to be permanently deleted from the Recycle Bin.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="volume_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the volume from which the snapshot was created.</td>
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
    <td><a href="#list_snapshots_in_recycle_bin"><CopyableCode code="list_snapshots_in_recycle_bin" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-SnapshotId"><code>SnapshotId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Lists one or more snapshots that are currently in the Recycle Bin.</td>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
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
<tr id="parameter-SnapshotId">
    <td><CopyableCode code="SnapshotId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the snapshots to list. Omit this parameter to list all of the snapshots that are in the Recycle Bin.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_snapshots_in_recycle_bin"
    values={[
        { label: 'list_snapshots_in_recycle_bin', value: 'list_snapshots_in_recycle_bin' }
    ]}
>
<TabItem value="list_snapshots_in_recycle_bin">

Lists one or more snapshots that are currently in the Recycle Bin.

```sql
SELECT
description,
recycle_bin_enter_time,
recycle_bin_exit_time,
snapshot_id,
volume_id
FROM aws.ec2.snapshots_in_recycle_bins
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND SnapshotId = '{{ SnapshotId }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
