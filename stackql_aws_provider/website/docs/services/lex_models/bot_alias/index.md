--- 
title: bot_alias
hide_title: false
hide_table_of_contents: false
keywords:
  - bot_alias
  - lex_models
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

Creates, updates, deletes, gets or lists a <code>bot_alias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bot_alias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lex_models.bot_alias" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bot_alias"
    values={[
        { label: 'get_bot_alias', value: 'get_bot_alias' }
    ]}
>
<TabItem value="get_bot_alias">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the bot alias. (pattern: &lt;code&gt;^(&#91;A-Za-z&#93;_?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_name" /></td>
    <td><code>string</code></td>
    <td>The name of the bot that the alias points to. (pattern: &lt;code&gt;^(&#91;A-Za-z&#93;_?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot that the alias points to. (pattern: &lt;code&gt;\$LATEST|&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Checksum of the bot alias.</td>
</tr>
<tr>
    <td><CopyableCode code="conversation_logs" /></td>
    <td><code>object</code></td>
    <td>The settings that determine how Amazon Lex uses conversation logs for the alias.</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the bot alias was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the bot alias.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the bot alias was updated. When you create a resource, the creation date and the last updated date are the same.</td>
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
    <td><a href="#get_bot_alias"><CopyableCode code="get_bot_alias" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-bot_name"><code>bot_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an Amazon Lex bot alias. For more information about aliases, see versioning-aliases. This operation requires permissions for the lex:GetBotAlias action.</td>
</tr>
<tr>
    <td><a href="#put_bot_alias"><CopyableCode code="put_bot_alias" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-bot_name"><code>bot_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-botVersion"><code>botVersion</code></a></td>
    <td></td>
    <td>Creates an alias for the specified version of the bot or replaces an alias for the specified bot. To change the version of the bot that the alias points to, replace the alias. For more information about aliases, see versioning-aliases. This operation requires permissions for the lex:PutBotAlias action.</td>
</tr>
<tr>
    <td><a href="#delete_bot_alias"><CopyableCode code="delete_bot_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-bot_name"><code>bot_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the channel association that refers to the bot. You can remove the reference to the alias by deleting the channel association. If you get the same exception again, delete the referring association until the DeleteBotAlias operation is successful.</td>
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
<tr id="parameter-bot_name">
    <td><CopyableCode code="bot_name" /></td>
    <td><code>string</code></td>
    <td>The name of the bot that the alias points to.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the alias to delete. The name is case sensitive.</td>
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
    defaultValue="get_bot_alias"
    values={[
        { label: 'get_bot_alias', value: 'get_bot_alias' }
    ]}
>
<TabItem value="get_bot_alias">

Returns information about an Amazon Lex bot alias. For more information about aliases, see versioning-aliases. This operation requires permissions for the lex:GetBotAlias action.

```sql
SELECT
name,
bot_name,
bot_version,
checksum,
conversation_logs,
created_date,
description,
last_updated_date
FROM aws.lex_models.bot_alias
WHERE name = '{{ name }}' -- required
AND bot_name = '{{ bot_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_bot_alias"
    values={[
        { label: 'put_bot_alias', value: 'put_bot_alias' }
    ]}
>
<TabItem value="put_bot_alias">

Creates an alias for the specified version of the bot or replaces an alias for the specified bot. To change the version of the bot that the alias points to, replace the alias. For more information about aliases, see versioning-aliases. This operation requires permissions for the lex:PutBotAlias action.

```sql
REPLACE aws.lex_models.bot_alias
SET 
description = '{{ description }}',
botVersion = '{{ botVersion }}',
checksum = '{{ checksum }}',
conversationLogs = '{{ conversationLogs }}',
tags = '{{ tags }}'
WHERE 
name = '{{ name }}' --required
AND bot_name = '{{ bot_name }}' --required
AND region = '{{ region }}' --required
AND botVersion = '{{ botVersion }}' --required
RETURNING
name,
bot_name,
bot_version,
checksum,
conversation_logs,
created_date,
description,
last_updated_date,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bot_alias"
    values={[
        { label: 'delete_bot_alias', value: 'delete_bot_alias' }
    ]}
>
<TabItem value="delete_bot_alias">

Deletes an alias for the specified bot. You can't delete an alias that is used in the association between a bot and a messaging channel. If an alias is used in a channel association, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the channel association that refers to the bot. You can remove the reference to the alias by deleting the channel association. If you get the same exception again, delete the referring association until the DeleteBotAlias operation is successful.

```sql
DELETE FROM aws.lex_models.bot_alias
WHERE name = '{{ name }}' --required
AND bot_name = '{{ bot_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
