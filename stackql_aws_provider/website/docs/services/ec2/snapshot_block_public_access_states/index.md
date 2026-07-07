--- 
title: snapshot_block_public_access_states
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshot_block_public_access_states
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

Creates, updates, deletes, gets or lists a <code>snapshot_block_public_access_states</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshot_block_public_access_states" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.snapshot_block_public_access_states" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_snapshot_block_public_access_state"
    values={[
        { label: 'get_snapshot_block_public_access_state', value: 'get_snapshot_block_public_access_state' }
    ]}
>
<TabItem value="get_snapshot_block_public_access_state">

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
    <td><CopyableCode code="ManagedBy" /></td>
    <td><code>string</code></td>
    <td>The entity that manages the state for block public access for snapshots. Possible values include: account - The state is managed by the account. declarative-policy - The state is managed by a declarative policy and can't be modified by the account.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of block public access for snapshots. Possible values include: block-all-sharing - All public sharing of snapshots is blocked. Users in the account can't request new public sharing. Additionally, snapshots that were already publicly shared are treated as private and are not publicly available. block-new-sharing - Only new public sharing of snapshots is blocked. Users in the account can't request new public sharing. However, snapshots that were already publicly shared, remain publicly available. unblocked - Public sharing is not blocked. Users can publicly share snapshots.</td>
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
    <td><a href="#get_snapshot_block_public_access_state"><CopyableCode code="get_snapshot_block_public_access_state" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Gets the current state of block public access for snapshots setting for the account and Region. For more information, see Block public access for snapshots in the Amazon EBS User Guide.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_snapshot_block_public_access_state"
    values={[
        { label: 'get_snapshot_block_public_access_state', value: 'get_snapshot_block_public_access_state' }
    ]}
>
<TabItem value="get_snapshot_block_public_access_state">

Gets the current state of block public access for snapshots setting for the account and Region. For more information, see Block public access for snapshots in the Amazon EBS User Guide.

```sql
SELECT
ManagedBy,
State
FROM aws.ec2.snapshot_block_public_access_states
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
