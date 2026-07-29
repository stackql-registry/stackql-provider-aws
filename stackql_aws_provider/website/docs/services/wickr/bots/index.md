--- 
title: bots
hide_title: false
hide_table_of_contents: false
keywords:
  - bots
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

Creates, updates, deletes, gets or lists a <code>bots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wickr.bots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bot"
    values={[
        { label: 'get_bot', value: 'get_bot' },
        { label: 'list_bots', value: 'list_bots' }
    ]}
>
<TabItem value="get_bot">

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
    <td>The unique identifier of the bot. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the bot that is visible to users. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the security group to which the bot belongs. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="has_challenge" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the bot has a password set.</td>
</tr>
<tr>
    <td><CopyableCode code="last_login" /></td>
    <td><code>string</code></td>
    <td>The timestamp of the bot's last login. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pubkey" /></td>
    <td><code>string</code></td>
    <td>The public key of the bot used for encryption. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The current status of the bot (1 for pending, 2 for active).</td>
</tr>
<tr>
    <td><CopyableCode code="suspended" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the bot is currently suspended.</td>
</tr>
<tr>
    <td><CopyableCode code="uname" /></td>
    <td><code>string</code></td>
    <td>The unique username hash identifier for the bot. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The username of the bot. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_bots">

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
    <td>The unique identifier of the bot. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the bot that is visible to users. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the security group to which the bot belongs. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="has_challenge" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the bot has a password set.</td>
</tr>
<tr>
    <td><CopyableCode code="last_login" /></td>
    <td><code>string</code></td>
    <td>The timestamp of the bot's last login. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pubkey" /></td>
    <td><code>string</code></td>
    <td>The public key of the bot used for encryption. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The current status of the bot (1 for pending, 2 for active).</td>
</tr>
<tr>
    <td><CopyableCode code="suspended" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the bot is currently suspended.</td>
</tr>
<tr>
    <td><CopyableCode code="uname" /></td>
    <td><code>string</code></td>
    <td>The unique username hash identifier for the bot. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The username of the bot. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_bot"><CopyableCode code="get_bot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific bot in a Wickr network, including its status, group membership, and authentication details.</td>
</tr>
<tr>
    <td><a href="#list_bots"><CopyableCode code="list_bots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-sortFields"><code>sortFields</code></a>, <a href="#parameter-sortDirection"><code>sortDirection</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-groupId"><code>groupId</code></a></td>
    <td>Retrieves a paginated list of bots in a specified Wickr network. You can filter and sort the results based on various criteria.</td>
</tr>
<tr>
    <td><a href="#create_bot"><CopyableCode code="create_bot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-groupId"><code>groupId</code></a>, <a href="#parameter-challenge"><code>challenge</code></a></td>
    <td></td>
    <td>Creates a new bot in a specified Wickr network. Bots are automated accounts that can send and receive messages, enabling integration with external systems and automation of tasks.</td>
</tr>
<tr>
    <td><a href="#update_bot"><CopyableCode code="update_bot" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the properties of an existing bot in a Wickr network. This operation allows you to modify the bot's display name, security group, password, or suspension status.</td>
</tr>
<tr>
    <td><a href="#delete_bot"><CopyableCode code="delete_bot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a bot from a specified Wickr network. This operation permanently removes the bot account and its associated data from the network.</td>
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
    <td>The unique identifier of the bot to be deleted.</td>
</tr>
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Wickr network from which the bot will be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Filter results to only include bots with display names matching this value.</td>
</tr>
<tr id="parameter-groupId">
    <td><CopyableCode code="groupId" /></td>
    <td><code>string</code></td>
    <td>Filter results to only include bots belonging to this security group.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of bots to return in a single page. Valid range is 1-100. Default is 10.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for retrieving the next page of results. This is returned from a previous request when there are more results available.</td>
</tr>
<tr id="parameter-sortDirection">
    <td><CopyableCode code="sortDirection" /></td>
    <td><code>string</code></td>
    <td>The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.</td>
</tr>
<tr id="parameter-sortFields">
    <td><CopyableCode code="sortFields" /></td>
    <td><code>string</code></td>
    <td>The fields to sort bots by. Multiple fields can be specified by separating them with '+'. Accepted values include 'username', 'firstName', 'displayName', 'status', and 'groupId'.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>Filter results to only include bots with this status (1 for pending, 2 for active).</td>
</tr>
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>Filter results to only include bots with usernames matching this value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bot"
    values={[
        { label: 'get_bot', value: 'get_bot' },
        { label: 'list_bots', value: 'list_bots' }
    ]}
>
<TabItem value="get_bot">

Retrieves detailed information about a specific bot in a Wickr network, including its status, group membership, and authentication details.

```sql
SELECT
bot_id,
display_name,
group_id,
has_challenge,
last_login,
pubkey,
status,
suspended,
uname,
username
FROM aws.wickr.bots
WHERE network_id = '{{ network_id }}' -- required
AND bot_id = '{{ bot_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_bots">

Retrieves a paginated list of bots in a specified Wickr network. You can filter and sort the results based on various criteria.

```sql
SELECT
bot_id,
display_name,
group_id,
has_challenge,
last_login,
pubkey,
status,
suspended,
uname,
username
FROM aws.wickr.bots
WHERE network_id = '{{ network_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND sortFields = '{{ sortFields }}'
AND sortDirection = '{{ sortDirection }}'
AND displayName = '{{ displayName }}'
AND username = '{{ username }}'
AND status = '{{ status }}'
AND groupId = '{{ groupId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_bot"
    values={[
        { label: 'create_bot', value: 'create_bot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_bot">

Creates a new bot in a specified Wickr network. Bots are automated accounts that can send and receive messages, enabling integration with external systems and automation of tasks.

```sql
INSERT INTO aws.wickr.bots (
username,
displayName,
groupId,
challenge,
network_id,
region
)
SELECT 
'{{ username }}' /* required */,
'{{ displayName }}',
'{{ groupId }}' /* required */,
'{{ challenge }}' /* required */,
'{{ network_id }}',
'{{ region }}'
RETURNING
bot_id,
display_name,
group_id,
message,
network_id,
username
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: bots
  props:
    - name: network_id
      value: "{{ network_id }}"
      description: Required parameter for the bots resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the bots resource.
    - name: username
      value: "{{ username }}"
    - name: displayName
      value: "{{ displayName }}"
    - name: groupId
      value: "{{ groupId }}"
    - name: challenge
      value: "{{ challenge }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_bot"
    values={[
        { label: 'update_bot', value: 'update_bot' }
    ]}
>
<TabItem value="update_bot">

Updates the properties of an existing bot in a Wickr network. This operation allows you to modify the bot's display name, security group, password, or suspension status.

```sql
UPDATE aws.wickr.bots
SET 
displayName = '{{ displayName }}',
groupId = '{{ groupId }}',
challenge = '{{ challenge }}',
suspend = {{ suspend }}
WHERE 
network_id = '{{ network_id }}' --required
AND bot_id = '{{ bot_id }}' --required
AND region = '{{ region }}' --required
RETURNING
message;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bot"
    values={[
        { label: 'delete_bot', value: 'delete_bot' }
    ]}
>
<TabItem value="delete_bot">

Deletes a bot from a specified Wickr network. This operation permanently removes the bot account and its associated data from the network.

```sql
DELETE FROM aws.wickr.bots
WHERE network_id = '{{ network_id }}' --required
AND bot_id = '{{ bot_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
