--- 
title: profile_with_agents
hide_title: false
hide_table_of_contents: false
keywords:
  - profile_with_agents
  - healthlake
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

Creates, updates, deletes, gets or lists a <code>profile_with_agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profile_with_agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.healthlake.profile_with_agents" /></td></tr>
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
    <td><a href="#update_profile_with_agent"><CopyableCode code="update_profile_with_agent" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProfileId"><code>ProfileId</code></a>, <a href="#parameter-SourceFormat"><code>SourceFormat</code></a>, <a href="#parameter-InputMessage"><code>InputMessage</code></a></td>
    <td></td>
    <td>Updates a data transformation profile using chat-based interaction with an agent. Supports multi-turn conversations for iteratively customizing profiles.</td>
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
    defaultValue="update_profile_with_agent"
    values={[
        { label: 'update_profile_with_agent', value: 'update_profile_with_agent' }
    ]}
>
<TabItem value="update_profile_with_agent">

Updates a data transformation profile using chat-based interaction with an agent. Supports multi-turn conversations for iteratively customizing profiles.

```sql
UPDATE aws.healthlake.profile_with_agents
SET 
ProfileId = '{{ ProfileId }}',
SourceFormat = '{{ SourceFormat }}',
InputMessage = '{{ InputMessage }}',
ConversationId = '{{ ConversationId }}'
WHERE 
region = '{{ region }}' --required
AND ProfileId = '{{ ProfileId }}' --required
AND SourceFormat = '{{ SourceFormat }}' --required
AND InputMessage = '{{ InputMessage }}' --required
RETURNING
agent_response,
conversation_id;
```
</TabItem>
</Tabs>
