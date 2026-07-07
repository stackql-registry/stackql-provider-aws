--- 
title: network_migration_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - network_migration_executions
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

Creates, updates, deletes, gets or lists a <code>network_migration_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_migration_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.network_migration_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_network_migration_executions"
    values={[
        { label: 'list_network_migration_executions', value: 'list_network_migration_executions' }
    ]}
>
<TabItem value="list_network_migration_executions">

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
    <td><CopyableCode code="activity" /></td>
    <td><code>string</code></td>
    <td>The current activity being performed in the execution. (MAPPING, MAPPING_UPDATE, CODE_GENERATION, DEPLOY, DEPLOYED_STACKS_DELETION, ANALYZE)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the execution was created.</td>
</tr>
<tr>
    <td><CopyableCode code="networkMigrationDefinitionID" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network migration definition used by this execution. (pattern: &lt;code&gt;nmd-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="networkMigrationExecutionID" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the execution. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stage" /></td>
    <td><code>string</code></td>
    <td>The current stage of the execution in the migration workflow. (MAPPING, CODE_GENERATION, DEPLOY, DEPLOYED_STACKS_DELETION, ANALYZE)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the execution. (PENDING, STARTED, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags assigned to the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the execution was last updated.</td>
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
    <td><a href="#list_network_migration_executions"><CopyableCode code="list_network_migration_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists network migration execution instances for a given definition, showing the status and progress of each execution.</td>
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
    defaultValue="list_network_migration_executions"
    values={[
        { label: 'list_network_migration_executions', value: 'list_network_migration_executions' }
    ]}
>
<TabItem value="list_network_migration_executions">

Lists network migration execution instances for a given definition, showing the status and progress of each execution.

```sql
SELECT
activity,
createdAt,
networkMigrationDefinitionID,
networkMigrationExecutionID,
stage,
status,
tags,
updatedAt
FROM aws.mgn.network_migration_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
