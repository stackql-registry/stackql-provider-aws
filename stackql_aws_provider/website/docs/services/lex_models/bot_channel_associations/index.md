--- 
title: bot_channel_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - bot_channel_associations
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

Creates, updates, deletes, gets or lists a <code>bot_channel_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bot_channel_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lex_models.bot_channel_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bot_channel_association"
    values={[
        { label: 'get_bot_channel_association', value: 'get_bot_channel_association' },
        { label: 'get_bot_channel_associations', value: 'get_bot_channel_associations' }
    ]}
>
<TabItem value="get_bot_channel_association">

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
    <td>The name of the association between the bot and the channel. (pattern: &lt;code&gt;^(&#91;A-Za-z&#93;_?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botAlias" /></td>
    <td><code>string</code></td>
    <td>An alias pointing to the specific version of the Amazon Lex bot to which this association is being made. (pattern: &lt;code&gt;^(&#91;A-Za-z&#93;_?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botConfiguration" /></td>
    <td><code>object</code></td>
    <td>Provides information that the messaging platform needs to communicate with the Amazon Lex bot.</td>
</tr>
<tr>
    <td><CopyableCode code="botName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Lex bot. (pattern: &lt;code&gt;^(&#91;A-Za-z&#93;_?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the association between the bot and the channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the association between the bot and the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>If status is FAILED, Amazon Lex provides the reason that it failed to create the association.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the bot channel. CREATED - The channel has been created and is ready for use. IN_PROGRESS - Channel creation is in progress. FAILED - There was an error creating the channel. For information about the reason for the failure, see the failureReason field. (IN_PROGRESS, CREATED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the messaging platform. (Facebook, Slack, Twilio-Sms, Kik)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_bot_channel_associations">

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
    <td>The name of the association between the bot and the channel. (pattern: &lt;code&gt;^(&#91;A-Za-z&#93;_?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botAlias" /></td>
    <td><code>string</code></td>
    <td>An alias pointing to the specific version of the Amazon Lex bot to which this association is being made. (pattern: &lt;code&gt;^(&#91;A-Za-z&#93;_?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botConfiguration" /></td>
    <td><code>object</code></td>
    <td>Provides information necessary to communicate with the messaging platform.</td>
</tr>
<tr>
    <td><CopyableCode code="botName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Lex bot to which this association is being made. Currently, Amazon Lex supports associations with Facebook and Slack, and Twilio. (pattern: &lt;code&gt;^(&#91;A-Za-z&#93;_?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the association between the Amazon Lex bot and the channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A text description of the association you are creating.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>If status is FAILED, Amazon Lex provides the reason that it failed to create the association.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the bot channel. CREATED - The channel has been created and is ready for use. IN_PROGRESS - Channel creation is in progress. FAILED - There was an error creating the channel. For information about the reason for the failure, see the failureReason field. (IN_PROGRESS, CREATED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of association by indicating the type of channel being established between the Amazon Lex bot and the external messaging platform. (Facebook, Slack, Twilio-Sms, Kik)</td>
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
    <td><a href="#get_bot_channel_association"><CopyableCode code="get_bot_channel_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-bot_name"><code>bot_name</code></a>, <a href="#parameter-alias_name"><code>alias_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the association between an Amazon Lex bot and a messaging platform. This operation requires permissions for the lex:GetBotChannelAssociation action.</td>
</tr>
<tr>
    <td><a href="#get_bot_channel_associations"><CopyableCode code="get_bot_channel_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_name"><code>bot_name</code></a>, <a href="#parameter-alias_name"><code>alias_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nameContains"><code>nameContains</code></a></td>
    <td>Returns a list of all of the channels associated with the specified bot. The GetBotChannelAssociations operation requires permissions for the lex:GetBotChannelAssociations action.</td>
</tr>
<tr>
    <td><a href="#delete_bot_channel_association"><CopyableCode code="delete_bot_channel_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-bot_name"><code>bot_name</code></a>, <a href="#parameter-alias_name"><code>alias_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the association between an Amazon Lex bot and a messaging platform. This operation requires permission for the lex:DeleteBotChannelAssociation action.</td>
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
<tr id="parameter-alias_name">
    <td><CopyableCode code="alias_name" /></td>
    <td><code>string</code></td>
    <td>An alias that points to the specific version of the Amazon Lex bot to which this association is being made.</td>
</tr>
<tr id="parameter-bot_name">
    <td><CopyableCode code="bot_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Lex bot.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the association. The name is case sensitive.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of associations to return in the response. The default is 50.</td>
</tr>
<tr id="parameter-nameContains">
    <td><CopyableCode code="nameContains" /></td>
    <td><code>string</code></td>
    <td>Substring to match in channel association names. An association will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz." To return all bot channel associations, use a hyphen ("-") as the nameContains parameter.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token for fetching the next page of associations. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of associations, specify the pagination token in the next request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bot_channel_association"
    values={[
        { label: 'get_bot_channel_association', value: 'get_bot_channel_association' },
        { label: 'get_bot_channel_associations', value: 'get_bot_channel_associations' }
    ]}
>
<TabItem value="get_bot_channel_association">

Returns information about the association between an Amazon Lex bot and a messaging platform. This operation requires permissions for the lex:GetBotChannelAssociation action.

```sql
SELECT
name,
botAlias,
botConfiguration,
botName,
createdDate,
description,
failureReason,
status,
type_
FROM aws.lex_models.bot_channel_associations
WHERE name = '{{ name }}' -- required
AND bot_name = '{{ bot_name }}' -- required
AND alias_name = '{{ alias_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_bot_channel_associations">

Returns a list of all of the channels associated with the specified bot. The GetBotChannelAssociations operation requires permissions for the lex:GetBotChannelAssociations action.

```sql
SELECT
name,
botAlias,
botConfiguration,
botName,
createdDate,
description,
failureReason,
status,
type_
FROM aws.lex_models.bot_channel_associations
WHERE bot_name = '{{ bot_name }}' -- required
AND alias_name = '{{ alias_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND nameContains = '{{ nameContains }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bot_channel_association"
    values={[
        { label: 'delete_bot_channel_association', value: 'delete_bot_channel_association' }
    ]}
>
<TabItem value="delete_bot_channel_association">

Deletes the association between an Amazon Lex bot and a messaging platform. This operation requires permission for the lex:DeleteBotChannelAssociation action.

```sql
DELETE FROM aws.lex_models.bot_channel_associations
WHERE name = '{{ name }}' --required
AND bot_name = '{{ bot_name }}' --required
AND alias_name = '{{ alias_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
