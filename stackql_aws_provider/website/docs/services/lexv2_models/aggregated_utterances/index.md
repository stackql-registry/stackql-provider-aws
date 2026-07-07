--- 
title: aggregated_utterances
hide_title: false
hide_table_of_contents: false
keywords:
  - aggregated_utterances
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

Creates, updates, deletes, gets or lists an <code>aggregated_utterances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aggregated_utterances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.aggregated_utterances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_aggregated_utterances"
    values={[
        { label: 'list_aggregated_utterances', value: 'list_aggregated_utterances' }
    ]}
>
<TabItem value="list_aggregated_utterances">

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
    <td><CopyableCode code="aggregatedUtterancesSummaries" /></td>
    <td><code>array</code></td>
    <td>Summaries of the aggregated utterance data. Each response contains information about the number of times that the utterance was seen during the time period, whether it was detected or missed, and when it was seen during the time period.</td>
</tr>
<tr>
    <td><CopyableCode code="aggregationDuration" /></td>
    <td><code>object</code></td>
    <td>Provides parameters for setting the time window and duration for aggregating utterance data.</td>
</tr>
<tr>
    <td><CopyableCode code="aggregationLastRefreshedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last date and time that the aggregated data was collected. The time period depends on the length of the aggregation window. Hours - for 1 hour time window, every half hour; otherwise every hour. Days - every 6 hours Weeks - for a one week time window, every 12 hours; otherwise, every day</td>
</tr>
<tr>
    <td><CopyableCode code="aggregationWindowEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the aggregation window ends. Only data collected between the start time and the end time are returned in the results.</td>
</tr>
<tr>
    <td><CopyableCode code="aggregationWindowStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the aggregation window begins. Only data collected after this time is returned in the results.</td>
</tr>
<tr>
    <td><CopyableCode code="botAliasId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the bot alias that contains the utterances. If you specified the bot version, the bot alias ID isn't returned. (pattern: &lt;code&gt;^(\bTSTALIASID\b|&#91;0-9a-zA-Z&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the bot that contains the utterances. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botVersion" /></td>
    <td><code>string</code></td>
    <td>The identifier of the bot version that contains the utterances. If you specified the bot alias, the bot version isn't returned. (pattern: &lt;code&gt;^(DRAFT|&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="localeId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the language and locale that the utterances are in.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates whether there are more results to return in a response to the ListAggregatedUtterances operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListAggregatedUtterances operation request to get the next page of results.</td>
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
    <td><a href="#list_aggregated_utterances"><CopyableCode code="list_aggregated_utterances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of utterances that users have sent to the bot. Utterances are aggregated by the text of the utterance. For example, all instances where customers used the phrase "I want to order pizza" are aggregated into the same line in the response. You can see both detected utterances and missed utterances. A detected utterance is where the bot properly recognized the utterance and activated the associated intent. A missed utterance was not recognized by the bot and didn't activate an intent. Utterances can be aggregated for a bot alias or for a bot version, but not both at the same time. Utterances statistics are not generated under the following conditions: The childDirected field was set to true when the bot was created. You are using slot obfuscation with one or more slots. You opted out of participating in improving Amazon Lex.</td>
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
    <td>The unique identifier of the bot associated with this request.</td>
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
    defaultValue="list_aggregated_utterances"
    values={[
        { label: 'list_aggregated_utterances', value: 'list_aggregated_utterances' }
    ]}
>
<TabItem value="list_aggregated_utterances">

Provides a list of utterances that users have sent to the bot. Utterances are aggregated by the text of the utterance. For example, all instances where customers used the phrase "I want to order pizza" are aggregated into the same line in the response. You can see both detected utterances and missed utterances. A detected utterance is where the bot properly recognized the utterance and activated the associated intent. A missed utterance was not recognized by the bot and didn't activate an intent. Utterances can be aggregated for a bot alias or for a bot version, but not both at the same time. Utterances statistics are not generated under the following conditions: The childDirected field was set to true when the bot was created. You are using slot obfuscation with one or more slots. You opted out of participating in improving Amazon Lex.

```sql
SELECT
aggregatedUtterancesSummaries,
aggregationDuration,
aggregationLastRefreshedDateTime,
aggregationWindowEndTime,
aggregationWindowStartTime,
botAliasId,
botId,
botVersion,
localeId,
nextToken
FROM aws.lexv2_models.aggregated_utterances
WHERE bot_id = '{{ bot_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
