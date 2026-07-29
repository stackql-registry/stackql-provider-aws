--- 
title: migration_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - migration_tasks
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

Creates, updates, deletes, gets or lists a <code>migration_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="migration_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgh.migration_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_migration_task"
    values={[
        { label: 'describe_migration_task', value: 'describe_migration_task' },
        { label: 'list_migration_tasks', value: 'list_migration_tasks' }
    ]}
>
<TabItem value="describe_migration_task">

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
    <td><CopyableCode code="migration_task_name" /></td>
    <td><code>string</code></td>
    <td>Unique identifier that references the migration task. Do not store personal data in this field. (pattern: &lt;code&gt;&#91;^:|&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="progress_update_stream" /></td>
    <td><code>string</code></td>
    <td>A name that identifies the vendor of the migration tool being used. (pattern: &lt;code&gt;&#91;^/:|\000-\037&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_attribute_list" /></td>
    <td><code>array</code></td>
    <td>Information about the resource that is being migrated. This data will be used to map the task to a resource in the Application Discovery Service repository.</td>
</tr>
<tr>
    <td><CopyableCode code="task" /></td>
    <td><code>object</code></td>
    <td>Task object encapsulating task information.</td>
</tr>
<tr>
    <td><CopyableCode code="update_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the task was gathered.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_migration_tasks">

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
    <td><CopyableCode code="migration_task_name" /></td>
    <td><code>string</code></td>
    <td>Unique identifier that references the migration task. Do not store personal data in this field. (pattern: &lt;code&gt;&#91;^:|&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="progress_percent" /></td>
    <td><code>integer</code></td>
    <td>Indication of the percentage completion of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="progress_update_stream" /></td>
    <td><code>string</code></td>
    <td>An AWS resource used for access control. It should uniquely identify the migration tool as it is used for all updates made by the tool. (pattern: &lt;code&gt;&#91;^/:|\000-\037&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the task. (NOT_STARTED, IN_PROGRESS, FAILED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_detail" /></td>
    <td><code>string</code></td>
    <td>Detail information of what is being done within the overall status state. (pattern: &lt;code&gt;^.&#123;0,2500&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the task was gathered.</td>
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
    <td><a href="#describe_migration_task"><CopyableCode code="describe_migration_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of all attributes associated with a specific migration task.</td>
</tr>
<tr>
    <td><a href="#list_migration_tasks"><CopyableCode code="list_migration_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits: Can show a summary list of the most recent migration tasks. Can show a summary list of migration tasks associated with a given discovered resource. Lists migration tasks in a paginated interface.</td>
</tr>
<tr>
    <td><a href="#put_resource_attributes"><CopyableCode code="put_resource_attributes" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProgressUpdateStream"><code>ProgressUpdateStream</code></a>, <a href="#parameter-MigrationTaskName"><code>MigrationTaskName</code></a>, <a href="#parameter-ResourceAttributeList"><code>ResourceAttributeList</code></a></td>
    <td></td>
    <td>Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service repository. This association occurs asynchronously after PutResourceAttributes returns. Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to add an IP address, it will then be required to call it with both the IP and MAC addresses to prevent overriding the MAC address. Note the instructions regarding the special use case of the ResourceAttributeList parameter when specifying any "VM" related value. Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call ListDiscoveredResources.</td>
</tr>
<tr>
    <td><a href="#import_migration_task"><CopyableCode code="import_migration_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProgressUpdateStream"><code>ProgressUpdateStream</code></a>, <a href="#parameter-MigrationTaskName"><code>MigrationTaskName</code></a></td>
    <td></td>
    <td>Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool. This API is a prerequisite to calling the NotifyMigrationTaskState API as the migration tool must first register the migration task with Migration Hub.</td>
</tr>
<tr>
    <td><a href="#notify_migration_task_state"><CopyableCode code="notify_migration_task_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProgressUpdateStream"><code>ProgressUpdateStream</code></a>, <a href="#parameter-MigrationTaskName"><code>MigrationTaskName</code></a>, <a href="#parameter-Task"><code>Task</code></a>, <a href="#parameter-UpdateDateTime"><code>UpdateDateTime</code></a>, <a href="#parameter-NextUpdateSeconds"><code>NextUpdateSeconds</code></a></td>
    <td></td>
    <td>Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits: Migration tools will call the NotifyMigrationTaskState API to share the latest progress and status. MigrationTaskName is used for addressing updates to the correct target. ProgressUpdateStream is used for access control and to provide a namespace for each migration tool.</td>
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
    defaultValue="describe_migration_task"
    values={[
        { label: 'describe_migration_task', value: 'describe_migration_task' },
        { label: 'list_migration_tasks', value: 'list_migration_tasks' }
    ]}
>
<TabItem value="describe_migration_task">

Retrieves a list of all attributes associated with a specific migration task.

```sql
SELECT
migration_task_name,
progress_update_stream,
resource_attribute_list,
task,
update_date_time
FROM aws.mgh.migration_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_migration_tasks">

Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits: Can show a summary list of the most recent migration tasks. Can show a summary list of migration tasks associated with a given discovered resource. Lists migration tasks in a paginated interface.

```sql
SELECT
migration_task_name,
progress_percent,
progress_update_stream,
status,
status_detail,
update_date_time
FROM aws.mgh.migration_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_resource_attributes"
    values={[
        { label: 'put_resource_attributes', value: 'put_resource_attributes' }
    ]}
>
<TabItem value="put_resource_attributes">

Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service repository. This association occurs asynchronously after PutResourceAttributes returns. Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to add an IP address, it will then be required to call it with both the IP and MAC addresses to prevent overriding the MAC address. Note the instructions regarding the special use case of the ResourceAttributeList parameter when specifying any "VM" related value. Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call ListDiscoveredResources.

```sql
REPLACE aws.mgh.migration_tasks
SET 
ProgressUpdateStream = '{{ ProgressUpdateStream }}',
MigrationTaskName = '{{ MigrationTaskName }}',
ResourceAttributeList = '{{ ResourceAttributeList }}',
DryRun = {{ DryRun }}
WHERE 
region = '{{ region }}' --required
AND ProgressUpdateStream = '{{ ProgressUpdateStream }}' --required
AND MigrationTaskName = '{{ MigrationTaskName }}' --required
AND ResourceAttributeList = '{{ ResourceAttributeList }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import_migration_task"
    values={[
        { label: 'import_migration_task', value: 'import_migration_task' },
        { label: 'notify_migration_task_state', value: 'notify_migration_task_state' }
    ]}
>
<TabItem value="import_migration_task">

Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool. This API is a prerequisite to calling the NotifyMigrationTaskState API as the migration tool must first register the migration task with Migration Hub.

```sql
EXEC aws.mgh.migration_tasks.import_migration_task 
@region='{{ region }}' --required 
@@json=
'{
"ProgressUpdateStream": "{{ ProgressUpdateStream }}", 
"MigrationTaskName": "{{ MigrationTaskName }}", 
"DryRun": {{ DryRun }}
}'
;
```
</TabItem>
<TabItem value="notify_migration_task_state">

Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits: Migration tools will call the NotifyMigrationTaskState API to share the latest progress and status. MigrationTaskName is used for addressing updates to the correct target. ProgressUpdateStream is used for access control and to provide a namespace for each migration tool.

```sql
EXEC aws.mgh.migration_tasks.notify_migration_task_state 
@region='{{ region }}' --required 
@@json=
'{
"ProgressUpdateStream": "{{ ProgressUpdateStream }}", 
"MigrationTaskName": "{{ MigrationTaskName }}", 
"Task": "{{ Task }}", 
"UpdateDateTime": "{{ UpdateDateTime }}", 
"NextUpdateSeconds": {{ NextUpdateSeconds }}, 
"DryRun": {{ DryRun }}
}'
;
```
</TabItem>
</Tabs>
