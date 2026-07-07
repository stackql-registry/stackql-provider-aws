--- 
title: bot_alias_replicas
hide_title: false
hide_table_of_contents: false
keywords:
  - bot_alias_replicas
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

Creates, updates, deletes, gets or lists a <code>bot_alias_replicas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bot_alias_replicas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.bot_alias_replicas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_bot_alias_replicas"
    values={[
        { label: 'list_bot_alias_replicas', value: 'list_bot_alias_replicas' }
    ]}
>
<TabItem value="list_bot_alias_replicas">

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
    <td><CopyableCode code="botAliasReplicaSummaries" /></td>
    <td><code>array</code></td>
    <td>The summary information of the replicated bot created from the source bot alias.</td>
</tr>
<tr>
    <td><CopyableCode code="botId" /></td>
    <td><code>string</code></td>
    <td>The unique bot ID of the replicated bot created from the source bot alias. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next token for the replicated bots created from the source bot alias.</td>
</tr>
<tr>
    <td><CopyableCode code="replicaRegion" /></td>
    <td><code>string</code></td>
    <td>The region that contains the replicated bots. Minimum value = 2, maximum value = 25.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceRegion" /></td>
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
    <td><a href="#list_bot_alias_replicas"><CopyableCode code="list_bot_alias_replicas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-replica_region"><code>replica_region</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The action to list the replicated bots created from the source bot alias.</td>
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
    <td>The request for the unique bot ID of the replicated bot created from the source bot alias.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-replica_region">
    <td><CopyableCode code="replica_region" /></td>
    <td><code>string</code></td>
    <td>The request for the secondary region of the replicated bot created from the source bot alias.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_bot_alias_replicas"
    values={[
        { label: 'list_bot_alias_replicas', value: 'list_bot_alias_replicas' }
    ]}
>
<TabItem value="list_bot_alias_replicas">

The action to list the replicated bots created from the source bot alias.

```sql
SELECT
botAliasReplicaSummaries,
botId,
nextToken,
replicaRegion,
sourceRegion
FROM aws.lexv2_models.bot_alias_replicas
WHERE bot_id = '{{ bot_id }}' -- required
AND replica_region = '{{ replica_region }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
