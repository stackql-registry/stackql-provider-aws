--- 
title: utterances_views
hide_title: false
hide_table_of_contents: false
keywords:
  - utterances_views
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

Creates, updates, deletes, gets or lists a <code>utterances_views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="utterances_views" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lex_models.utterances_views" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_utterances_view"
    values={[
        { label: 'get_utterances_view', value: 'get_utterances_view' }
    ]}
>
<TabItem value="get_utterances_view">

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
    <td><CopyableCode code="bot_name" /></td>
    <td><code>string</code></td>
    <td>The name of the bot for which utterance information was returned. (pattern: &lt;code&gt;^(&#91;A-Za-z&#93;_?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="utterances" /></td>
    <td><code>array</code></td>
    <td>An array of UtteranceList objects, each containing a list of UtteranceData objects describing the utterances that were processed by your bot. The response contains a maximum of 100 UtteranceData objects for each version. Amazon Lex returns the most frequent utterances received by the bot in the last 15 days.</td>
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
    <td><a href="#get_utterances_view"><CopyableCode code="get_utterances_view" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-botname"><code>botname</code></a>, <a href="#parameter-bot_versions"><code>bot_versions</code></a>, <a href="#parameter-status_type"><code>status_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use the GetUtterancesView operation to get information about the utterances that your users have made to your bot. You can use this list to tune the utterances that your bot responds to. For example, say that you have created a bot to order flowers. After your users have used your bot for a while, use the GetUtterancesView operation to see the requests that they have made and whether they have been successful. You might find that the utterance "I want flowers" is not being recognized. You could add this utterance to the OrderFlowers intent so that your bot recognizes that utterance. After you publish a new version of a bot, you can get information about the old version and the new so that you can compare the performance across the two versions. Utterance statistics are generated once a day. Data is available for the last 15 days. You can request information for up to 5 versions of your bot in each request. Amazon Lex returns the most frequent utterances received by the bot in the last 15 days. The response contains information about a maximum of 100 utterances for each version. If you set childDirected field to true when you created your bot, if you are using slot obfuscation with one or more slots, or if you opted out of participating in improving Amazon Lex, utterances are not available. This operation requires permissions for the lex:GetUtterancesView action.</td>
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
<tr id="parameter-bot_versions">
    <td><CopyableCode code="bot_versions" /></td>
    <td><code>array</code></td>
    <td>An array of bot versions for which utterance information should be returned. The limit is 5 versions per request.</td>
</tr>
<tr id="parameter-botname">
    <td><CopyableCode code="botname" /></td>
    <td><code>string</code></td>
    <td>The name of the bot for which utterance information should be returned.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-status_type">
    <td><CopyableCode code="status_type" /></td>
    <td><code>string</code></td>
    <td>To return utterances that were recognized and handled, use Detected. To return utterances that were not recognized, use Missed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_utterances_view"
    values={[
        { label: 'get_utterances_view', value: 'get_utterances_view' }
    ]}
>
<TabItem value="get_utterances_view">

Use the GetUtterancesView operation to get information about the utterances that your users have made to your bot. You can use this list to tune the utterances that your bot responds to. For example, say that you have created a bot to order flowers. After your users have used your bot for a while, use the GetUtterancesView operation to see the requests that they have made and whether they have been successful. You might find that the utterance "I want flowers" is not being recognized. You could add this utterance to the OrderFlowers intent so that your bot recognizes that utterance. After you publish a new version of a bot, you can get information about the old version and the new so that you can compare the performance across the two versions. Utterance statistics are generated once a day. Data is available for the last 15 days. You can request information for up to 5 versions of your bot in each request. Amazon Lex returns the most frequent utterances received by the bot in the last 15 days. The response contains information about a maximum of 100 utterances for each version. If you set childDirected field to true when you created your bot, if you are using slot obfuscation with one or more slots, or if you opted out of participating in improving Amazon Lex, utterances are not available. This operation requires permissions for the lex:GetUtterancesView action.

```sql
SELECT
bot_name,
utterances
FROM aws.lex_models.utterances_views
WHERE botname = '{{ botname }}' -- required
AND bot_versions = '{{ bot_versions }}' -- required
AND status_type = '{{ status_type }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
