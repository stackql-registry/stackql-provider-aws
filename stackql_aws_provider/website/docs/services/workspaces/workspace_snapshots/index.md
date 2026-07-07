--- 
title: workspace_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - workspace_snapshots
  - workspaces
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

Creates, updates, deletes, gets or lists a <code>workspace_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspace_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.workspace_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workspace_snapshots"
    values={[
        { label: 'describe_workspace_snapshots', value: 'describe_workspace_snapshots' }
    ]}
>
<TabItem value="describe_workspace_snapshots">

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
    <td><CopyableCode code="RebuildSnapshots" /></td>
    <td><code>array</code></td>
    <td>Information about the snapshots that can be used to rebuild a WorkSpace. These snapshots include the user volume.</td>
</tr>
<tr>
    <td><CopyableCode code="RestoreSnapshots" /></td>
    <td><code>array</code></td>
    <td>Information about the snapshots that can be used to restore a WorkSpace. These snapshots include both the root volume and the user volume.</td>
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
    <td><a href="#describe_workspace_snapshots"><CopyableCode code="describe_workspace_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the snapshots for the specified WorkSpace.</td>
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
    defaultValue="describe_workspace_snapshots"
    values={[
        { label: 'describe_workspace_snapshots', value: 'describe_workspace_snapshots' }
    ]}
>
<TabItem value="describe_workspace_snapshots">

Describes the snapshots for the specified WorkSpace.

```sql
SELECT
RebuildSnapshots,
RestoreSnapshots
FROM aws.workspaces.workspace_snapshots
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
