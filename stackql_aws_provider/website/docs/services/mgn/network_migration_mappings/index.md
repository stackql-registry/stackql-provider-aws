--- 
title: network_migration_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - network_migration_mappings
  - mgn
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

Creates, updates, deletes, gets or lists a <code>network_migration_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_migration_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.network_migration_mappings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_network_migration_mappings"
    values={[
        { label: 'list_network_migration_mappings', value: 'list_network_migration_mappings' }
    ]}
>
<TabItem value="list_network_migration_mappings">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the job completed or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="jobID" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the mapping job. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="networkMigrationDefinitionID" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network migration definition. (pattern: &lt;code&gt;nmd-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="networkMigrationExecutionID" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network migration execution. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the mapping job. (PENDING, STARTED, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusDetails" /></td>
    <td><code>string</code></td>
    <td>Detailed status information about the job.</td>
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
    <td><a href="#list_network_migration_mappings"><CopyableCode code="list_network_migration_mappings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists network migration mapping jobs, which analyze and create relationships between source and target network resources.</td>
</tr>
<tr>
    <td><a href="#start_network_migration_mapping_update"><CopyableCode code="start_network_migration_mapping_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-networkMigrationExecutionID"><code>networkMigrationExecutionID</code></a>, <a href="#parameter-networkMigrationDefinitionID"><code>networkMigrationDefinitionID</code></a></td>
    <td></td>
    <td>Starts a job to apply customer modifications to network migration mappings, such as changing properties.</td>
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
    defaultValue="list_network_migration_mappings"
    values={[
        { label: 'list_network_migration_mappings', value: 'list_network_migration_mappings' }
    ]}
>
<TabItem value="list_network_migration_mappings">

Lists network migration mapping jobs, which analyze and create relationships between source and target network resources.

```sql
SELECT
createdAt,
endedAt,
jobID,
networkMigrationDefinitionID,
networkMigrationExecutionID,
status,
statusDetails
FROM aws.mgn.network_migration_mappings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_network_migration_mapping_update"
    values={[
        { label: 'start_network_migration_mapping_update', value: 'start_network_migration_mapping_update' }
    ]}
>
<TabItem value="start_network_migration_mapping_update">

Starts a job to apply customer modifications to network migration mappings, such as changing properties.

```sql
EXEC aws.mgn.network_migration_mappings.start_network_migration_mapping_update 
@region='{{ region }}' --required 
@@json=
'{
"networkMigrationExecutionID": "{{ networkMigrationExecutionID }}", 
"networkMigrationDefinitionID": "{{ networkMigrationDefinitionID }}", 
"constructs": "{{ constructs }}", 
"segments": "{{ segments }}"
}'
;
```
</TabItem>
</Tabs>
