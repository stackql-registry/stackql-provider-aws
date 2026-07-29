--- 
title: bot_replicas
hide_title: false
hide_table_of_contents: false
keywords:
  - bot_replicas
  - lexv2_models
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

Creates, updates, deletes, gets or lists a <code>bot_replicas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bot_replicas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.bot_replicas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_bot_replica"
    values={[
        { label: 'describe_bot_replica', value: 'describe_bot_replica' },
        { label: 'list_bot_replicas', value: 'list_bot_replicas' }
    ]}
>
<TabItem value="describe_bot_replica">

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
    <td><CopyableCode code="bot_id" /></td>
    <td><code>string</code></td>
    <td>The unique bot ID of the replicated bot being monitored. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_replica_status" /></td>
    <td><code>string</code></td>
    <td>The operational status of the replicated bot being monitored. (Enabling, Enabled, Deleting, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date and time of the replicated bot being monitored.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reasons" /></td>
    <td><code>array</code></td>
    <td>The failure reasons the bot being monitored failed to replicate.</td>
</tr>
<tr>
    <td><CopyableCode code="replica_region" /></td>
    <td><code>string</code></td>
    <td>The region that contains the replicated bots. Minimum value = 2, maximum value = 25.</td>
</tr>
<tr>
    <td><CopyableCode code="source_region" /></td>
    <td><code>string</code></td>
    <td>The region that contains the replicated bots. Minimum value = 2, maximum value = 25.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_bot_replicas">

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
    <td><CopyableCode code="bot_id" /></td>
    <td><code>string</code></td>
    <td>the unique bot IDs in the list of replicated bots. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_replica_summaries" /></td>
    <td><code>array</code></td>
    <td>The summary details for the replicated bots.</td>
</tr>
<tr>
    <td><CopyableCode code="source_region" /></td>
    <td><code>string</code></td>
    <td>The region that contains the replicated bots. Minimum value = 2, maximum value = 25.</td>
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
    <td><a href="#describe_bot_replica"><CopyableCode code="describe_bot_replica" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-replica_region"><code>replica_region</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Monitors the bot replication status through the UI console.</td>
</tr>
<tr>
    <td><a href="#list_bot_replicas"><CopyableCode code="list_bot_replicas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The action to list the replicated bots.</td>
</tr>
<tr>
    <td><a href="#create_bot_replica"><CopyableCode code="create_bot_replica" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-replicaRegion"><code>replicaRegion</code></a></td>
    <td></td>
    <td>Action to create a replication of the source bot in the secondary region.</td>
</tr>
<tr>
    <td><a href="#delete_bot_replica"><CopyableCode code="delete_bot_replica" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-replica_region"><code>replica_region</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The action to delete the replicated bot in the secondary region.</td>
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
<tr id="parameter-bot_id">
    <td><CopyableCode code="bot_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the replicated bot to be deleted from the secondary region</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-replica_region">
    <td><CopyableCode code="replica_region" /></td>
    <td><code>string</code></td>
    <td>The secondary region of the replicated bot that will be deleted.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_bot_replica"
    values={[
        { label: 'describe_bot_replica', value: 'describe_bot_replica' },
        { label: 'list_bot_replicas', value: 'list_bot_replicas' }
    ]}
>
<TabItem value="describe_bot_replica">

Monitors the bot replication status through the UI console.

```sql
SELECT
bot_id,
bot_replica_status,
creation_date_time,
failure_reasons,
replica_region,
source_region
FROM aws.lexv2_models.bot_replicas
WHERE bot_id = '{{ bot_id }}' -- required
AND replica_region = '{{ replica_region }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_bot_replicas">

The action to list the replicated bots.

```sql
SELECT
bot_id,
bot_replica_summaries,
source_region
FROM aws.lexv2_models.bot_replicas
WHERE bot_id = '{{ bot_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_bot_replica"
    values={[
        { label: 'create_bot_replica', value: 'create_bot_replica' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_bot_replica">

Action to create a replication of the source bot in the secondary region.

```sql
INSERT INTO aws.lexv2_models.bot_replicas (
replicaRegion,
bot_id,
region
)
SELECT 
'{{ replicaRegion }}' /* required */,
'{{ bot_id }}',
'{{ region }}'
RETURNING
bot_id,
bot_replica_status,
creation_date_time,
replica_region,
source_region
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: bot_replicas
  props:
    - name: bot_id
      value: "{{ bot_id }}"
      description: Required parameter for the bot_replicas resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the bot_replicas resource.
    - name: replicaRegion
      value: "{{ replicaRegion }}"
      description: |
        The region that contains the replicated bots. Minimum value = 2, maximum value = 25.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bot_replica"
    values={[
        { label: 'delete_bot_replica', value: 'delete_bot_replica' }
    ]}
>
<TabItem value="delete_bot_replica">

The action to delete the replicated bot in the secondary region.

```sql
DELETE FROM aws.lexv2_models.bot_replicas
WHERE bot_id = '{{ bot_id }}' --required
AND replica_region = '{{ replica_region }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
