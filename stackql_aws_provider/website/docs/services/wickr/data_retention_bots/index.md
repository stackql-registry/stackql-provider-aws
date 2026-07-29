--- 
title: data_retention_bots
hide_title: false
hide_table_of_contents: false
keywords:
  - data_retention_bots
  - wickr
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

Creates, updates, deletes, gets or lists a <code>data_retention_bots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_retention_bots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wickr.data_retention_bots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_retention_bot"
    values={[
        { label: 'get_data_retention_bot', value: 'get_data_retention_bot' }
    ]}
>
<TabItem value="get_data_retention_bot">

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
    <td><CopyableCode code="bot_exists" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a data retention bot exists in the network.</td>
</tr>
<tr>
    <td><CopyableCode code="bot_name" /></td>
    <td><code>string</code></td>
    <td>The name of the data retention bot. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="is_bot_active" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the data retention bot is active and operational.</td>
</tr>
<tr>
    <td><CopyableCode code="is_data_retention_bot_registered" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the data retention bot has been registered with the network.</td>
</tr>
<tr>
    <td><CopyableCode code="is_data_retention_service_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the data retention service is enabled for the network.</td>
</tr>
<tr>
    <td><CopyableCode code="is_pubkey_msg_acked" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the public key message has been acknowledged by the bot.</td>
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
    <td><a href="#get_data_retention_bot"><CopyableCode code="get_data_retention_bot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the data retention bot in a Wickr network, including its status and whether the data retention service is enabled.</td>
</tr>
<tr>
    <td><a href="#create_data_retention_bot"><CopyableCode code="create_data_retention_bot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a data retention bot in a Wickr network. Data retention bots are specialized bots that handle message archiving and compliance by capturing and storing messages for regulatory or organizational requirements.</td>
</tr>
<tr>
    <td><a href="#delete_data_retention_bot"><CopyableCode code="delete_data_retention_bot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the data retention bot from a Wickr network. This operation permanently removes the bot and all its associated data from the database.</td>
</tr>
<tr>
    <td><a href="#create_data_retention_bot_challenge"><CopyableCode code="create_data_retention_bot_challenge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new challenge password for the data retention bot. This password is used for authentication when the bot connects to the network.</td>
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
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Wickr network containing the data retention bot.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_retention_bot"
    values={[
        { label: 'get_data_retention_bot', value: 'get_data_retention_bot' }
    ]}
>
<TabItem value="get_data_retention_bot">

Retrieves information about the data retention bot in a Wickr network, including its status and whether the data retention service is enabled.

```sql
SELECT
bot_exists,
bot_name,
is_bot_active,
is_data_retention_bot_registered,
is_data_retention_service_enabled,
is_pubkey_msg_acked
FROM aws.wickr.data_retention_bots
WHERE network_id = '{{ network_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_retention_bot"
    values={[
        { label: 'create_data_retention_bot', value: 'create_data_retention_bot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_retention_bot">

Creates a data retention bot in a Wickr network. Data retention bots are specialized bots that handle message archiving and compliance by capturing and storing messages for regulatory or organizational requirements.

```sql
INSERT INTO aws.wickr.data_retention_bots (
network_id,
region
)
SELECT 
'{{ network_id }}',
'{{ region }}'
RETURNING
message
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_retention_bots
  props:
    - name: network_id
      value: "{{ network_id }}"
      description: Required parameter for the data_retention_bots resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_retention_bots resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_retention_bot"
    values={[
        { label: 'delete_data_retention_bot', value: 'delete_data_retention_bot' }
    ]}
>
<TabItem value="delete_data_retention_bot">

Deletes the data retention bot from a Wickr network. This operation permanently removes the bot and all its associated data from the database.

```sql
DELETE FROM aws.wickr.data_retention_bots
WHERE network_id = '{{ network_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="create_data_retention_bot_challenge"
    values={[
        { label: 'create_data_retention_bot_challenge', value: 'create_data_retention_bot_challenge' }
    ]}
>
<TabItem value="create_data_retention_bot_challenge">

Creates a new challenge password for the data retention bot. This password is used for authentication when the bot connects to the network.

```sql
EXEC aws.wickr.data_retention_bots.create_data_retention_bot_challenge 
@network_id='{{ network_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
