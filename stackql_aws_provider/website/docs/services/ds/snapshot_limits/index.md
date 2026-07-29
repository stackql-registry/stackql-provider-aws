--- 
title: snapshot_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshot_limits
  - ds
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

Creates, updates, deletes, gets or lists a <code>snapshot_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshot_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.snapshot_limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_snapshot_limits"
    values={[
        { label: 'get_snapshot_limits', value: 'get_snapshot_limits' }
    ]}
>
<TabItem value="get_snapshot_limits">

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
    <td><CopyableCode code="manual_snapshots_current_count" /></td>
    <td><code>integer</code></td>
    <td>The current number of manual snapshots of the directory.</td>
</tr>
<tr>
    <td><CopyableCode code="manual_snapshots_limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of manual snapshots allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="manual_snapshots_limit_reached" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the manual snapshot limit has been reached.</td>
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
    <td><a href="#get_snapshot_limits"><CopyableCode code="get_snapshot_limits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Obtains the manual snapshot limits for a directory.</td>
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
    defaultValue="get_snapshot_limits"
    values={[
        { label: 'get_snapshot_limits', value: 'get_snapshot_limits' }
    ]}
>
<TabItem value="get_snapshot_limits">

Obtains the manual snapshot limits for a directory.

```sql
SELECT
manual_snapshots_current_count,
manual_snapshots_limit,
manual_snapshots_limit_reached
FROM aws.ds.snapshot_limits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
