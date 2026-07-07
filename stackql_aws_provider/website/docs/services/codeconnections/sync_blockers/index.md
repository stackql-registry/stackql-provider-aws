--- 
title: sync_blockers
hide_title: false
hide_table_of_contents: false
keywords:
  - sync_blockers
  - codeconnections
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

Creates, updates, deletes, gets or lists a <code>sync_blockers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sync_blockers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeconnections.sync_blockers" /></td></tr>
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
    <td><a href="#update_sync_blocker"><CopyableCode code="update_sync_blocker" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Id"><code>Id</code></a>, <a href="#parameter-SyncType"><code>SyncType</code></a>, <a href="#parameter-ResourceName"><code>ResourceName</code></a>, <a href="#parameter-ResolvedReason"><code>ResolvedReason</code></a></td>
    <td></td>
    <td>Allows you to update the status of a sync blocker, resolving the blocker and allowing syncing to continue.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="update_sync_blocker"
    values={[
        { label: 'update_sync_blocker', value: 'update_sync_blocker' }
    ]}
>
<TabItem value="update_sync_blocker">

Allows you to update the status of a sync blocker, resolving the blocker and allowing syncing to continue.

```sql
UPDATE aws.codeconnections.sync_blockers
SET 
Id = '{{ Id }}',
SyncType = '{{ SyncType }}',
ResourceName = '{{ ResourceName }}',
ResolvedReason = '{{ ResolvedReason }}'
WHERE 
region = '{{ region }}' --required
AND Id = '{{ Id }}' --required
AND SyncType = '{{ SyncType }}' --required
AND ResourceName = '{{ ResourceName }}' --required
AND ResolvedReason = '{{ ResolvedReason }}' --required
RETURNING
ParentResourceName,
ResourceName,
SyncBlocker;
```
</TabItem>
</Tabs>
