--- 
title: repository_sync_status
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_sync_status
  - proton
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

Creates, updates, deletes, gets or lists a <code>repository_sync_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repository_sync_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.repository_sync_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_repository_sync_status"
    values={[
        { label: 'get_repository_sync_status', value: 'get_repository_sync_status' }
    ]}
>
<TabItem value="get_repository_sync_status">

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
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>Detail data for sync attempt events.</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the sync attempt started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The sync attempt status. (INITIATED, IN_PROGRESS, SUCCEEDED, FAILED, QUEUED)</td>
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
    <td><a href="#get_repository_sync_status"><CopyableCode code="get_repository_sync_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the sync status of a repository used for Proton template sync. For more information about template sync, see . A repository sync status isn't tied to the Proton Repository resource (or any other Proton resource). Therefore, tags on an Proton Repository resource have no effect on this action. Specifically, you can't use these tags to control access to this action using Attribute-based access control (ABAC). For more information about ABAC, see ABAC in the Proton User Guide.</td>
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
    defaultValue="get_repository_sync_status"
    values={[
        { label: 'get_repository_sync_status', value: 'get_repository_sync_status' }
    ]}
>
<TabItem value="get_repository_sync_status">

Get the sync status of a repository used for Proton template sync. For more information about template sync, see . A repository sync status isn't tied to the Proton Repository resource (or any other Proton resource). Therefore, tags on an Proton Repository resource have no effect on this action. Specifically, you can't use these tags to control access to this action using Attribute-based access control (ABAC). For more information about ABAC, see ABAC in the Proton User Guide.

```sql
SELECT
events,
startedAt,
status
FROM aws.proton.repository_sync_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
