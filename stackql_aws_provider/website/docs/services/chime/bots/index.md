--- 
title: bots
hide_title: false
hide_table_of_contents: false
keywords:
  - bots
  - chime
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime.bots" /></td></tr>
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
    <td><CopyableCode code="BotEmail" /></td>
    <td><code>string</code></td>
    <td>The bot email address.</td>
</tr>
<tr>
    <td><CopyableCode code="BotId" /></td>
    <td><code>string</code></td>
    <td>The bot ID.</td>
</tr>
<tr>
    <td><CopyableCode code="BotType" /></td>
    <td><code>string</code></td>
    <td>The bot type. (ChatBot)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The bot creation timestamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="Disabled" /></td>
    <td><code>boolean</code></td>
    <td>When true, the bot is stopped from running in your account.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The bot display name.</td>
</tr>
<tr>
    <td><CopyableCode code="SecurityToken" /></td>
    <td><code>string</code></td>
    <td>The security token used to authenticate Amazon Chime with the outgoing event endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The updated bot timestamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="UserId" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the bot user.</td>
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
    <td><CopyableCode code="Bots" /></td>
    <td><code>array</code></td>
    <td>List of bots and bot details.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
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
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details for the specified bot, such as bot email address, bot type, status, and display name.</td>
</tr>
<tr>
    <td><a href="#list_bots"><CopyableCode code="list_bots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.</td>
</tr>
<tr>
    <td><a href="#create_bot"><CopyableCode code="create_bot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DisplayName"><code>DisplayName</code></a></td>
    <td></td>
    <td>Creates a bot for an Amazon Chime Enterprise account.</td>
</tr>
<tr>
    <td><a href="#update_bot"><CopyableCode code="update_bot" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the status of the specified bot, such as starting or stopping the bot from running in your Amazon Chime Enterprise account.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime account ID.</td>
</tr>
<tr id="parameter-bot_id">
    <td><CopyableCode code="bot_id" /></td>
    <td><code>string</code></td>
    <td>The bot ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. The default is 10.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
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

Retrieves details for the specified bot, such as bot email address, bot type, status, and display name.

```sql
SELECT
BotEmail,
BotId,
BotType,
CreatedTimestamp,
Disabled,
DisplayName,
SecurityToken,
UpdatedTimestamp,
UserId
FROM aws.chime.bots
WHERE account_id = '{{ account_id }}' -- required
AND bot_id = '{{ bot_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_bots">

Lists the bots associated with the administrator's Amazon Chime Enterprise account ID.

```sql
SELECT
Bots,
NextToken
FROM aws.chime.bots
WHERE account_id = '{{ account_id }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
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

Creates a bot for an Amazon Chime Enterprise account.

```sql
INSERT INTO aws.chime.bots (
DisplayName,
Domain,
account_id,
region
)
SELECT 
'{{ DisplayName }}' /* required */,
'{{ Domain }}',
'{{ account_id }}',
'{{ region }}'
RETURNING
Bot
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: bots
  props:
    - name: account_id
      value: "{{ account_id }}"
      description: Required parameter for the bots resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the bots resource.
    - name: DisplayName
      value: "{{ DisplayName }}"
    - name: Domain
      value: "{{ Domain }}"
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

Updates the status of the specified bot, such as starting or stopping the bot from running in your Amazon Chime Enterprise account.

```sql
UPDATE aws.chime.bots
SET 
Disabled = {{ Disabled }}
WHERE 
account_id = '{{ account_id }}' --required
AND bot_id = '{{ bot_id }}' --required
AND region = '{{ region }}' --required
RETURNING
Bot;
```
</TabItem>
</Tabs>
