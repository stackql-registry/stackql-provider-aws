--- 
title: migration_task_updates
hide_title: false
hide_table_of_contents: false
keywords:
  - migration_task_updates
  - mgh
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

Creates, updates, deletes, gets or lists a <code>migration_task_updates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="migration_task_updates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgh.migration_task_updates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_migration_task_updates"
    values={[
        { label: 'list_migration_task_updates', value: 'list_migration_task_updates' }
    ]}
>
<TabItem value="list_migration_task_updates">

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
    <td><CopyableCode code="MigrationTaskState" /></td>
    <td><code>object</code></td>
    <td>Task object encapsulating task information.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for the update.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateType" /></td>
    <td><code>string</code></td>
    <td>The type of the update. (MIGRATION_TASK_STATE_UPDATED)</td>
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
    <td><a href="#list_migration_task_updates"><CopyableCode code="list_migration_task_updates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is a paginated API that returns all the migration-task states for the specified MigrationTaskName and ProgressUpdateStream.</td>
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
    defaultValue="list_migration_task_updates"
    values={[
        { label: 'list_migration_task_updates', value: 'list_migration_task_updates' }
    ]}
>
<TabItem value="list_migration_task_updates">

This is a paginated API that returns all the migration-task states for the specified MigrationTaskName and ProgressUpdateStream.

```sql
SELECT
MigrationTaskState,
UpdateDateTime,
UpdateType
FROM aws.mgh.migration_task_updates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
