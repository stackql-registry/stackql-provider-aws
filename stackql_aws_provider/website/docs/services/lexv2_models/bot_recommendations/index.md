--- 
title: bot_recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - bot_recommendations
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

Creates, updates, deletes, gets or lists a <code>bot_recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bot_recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.bot_recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_bot_recommendation"
    values={[
        { label: 'describe_bot_recommendation', value: 'describe_bot_recommendation' },
        { label: 'list_bot_recommendations', value: 'list_bot_recommendations' }
    ]}
>
<TabItem value="describe_bot_recommendation">

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
    <td><CopyableCode code="botId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the bot associated with the bot recommendation. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botRecommendationId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the bot recommendation being described. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botRecommendationResults" /></td>
    <td><code>object</code></td>
    <td>The object representing the URL of the bot definition, the URL of the associated transcript and a statistical summary of the bot recommendation results.</td>
</tr>
<tr>
    <td><CopyableCode code="botRecommendationStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the bot recommendation. If the status is Failed, then the reasons for the failure are listed in the failureReasons field. (Processing, Deleting, Deleted, Downloading, Updating, Available, Failed, Stopping, Stopped)</td>
</tr>
<tr>
    <td><CopyableCode code="botVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the bot associated with the bot recommendation. (pattern: &lt;code&gt;^DRAFT$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the bot recommendation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionSetting" /></td>
    <td><code>object</code></td>
    <td>The object representing the passwords that were used to encrypt the data related to the bot recommendation results, as well as the KMS key ARN used to encrypt the associated metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReasons" /></td>
    <td><code>array</code></td>
    <td>If botRecommendationStatus is Failed, Amazon Lex explains why.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the bot recommendation was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="localeId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the language and locale of the bot recommendation to describe.</td>
</tr>
<tr>
    <td><CopyableCode code="transcriptSourceSetting" /></td>
    <td><code>object</code></td>
    <td>The object representing the Amazon S3 bucket containing the transcript, as well as the associated metadata.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_bot_recommendations">

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
    <td><CopyableCode code="botId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the bot that contains the bot recommendation list. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botRecommendationSummaries" /></td>
    <td><code>array</code></td>
    <td>Summary information for the bot recommendations that meet the filter specified in this request. The length of the list is specified in the maxResults parameter of the request. If there are more bot recommendations available, the nextToken field contains a token to get the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="botVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the bot that contains the bot recommendation list. (pattern: &lt;code&gt;^DRAFT$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="localeId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the language and locale of the bot recommendation list.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates whether there are more results to return in a response to the ListBotRecommendations operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListBotRecommendations operation request to get the next page of results.</td>
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
    <td><a href="#describe_bot_recommendation"><CopyableCode code="describe_bot_recommendation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-bot_recommendation_id"><code>bot_recommendation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides metadata information about a bot recommendation. This information will enable you to get a description on the request inputs, to download associated transcripts after processing is complete, and to download intents and slot-types generated by the bot recommendation.</td>
</tr>
<tr>
    <td><a href="#list_bot_recommendations"><CopyableCode code="list_bot_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a list of bot recommendations that meet the specified criteria.</td>
</tr>
<tr>
    <td><a href="#update_bot_recommendation"><CopyableCode code="update_bot_recommendation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-bot_recommendation_id"><code>bot_recommendation_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-encryptionSetting"><code>encryptionSetting</code></a></td>
    <td></td>
    <td>Updates an existing bot recommendation request.</td>
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
    <td>The unique identifier of the bot containing the bot recommendation to be updated.</td>
</tr>
<tr id="parameter-bot_recommendation_id">
    <td><CopyableCode code="bot_recommendation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the bot recommendation to be updated.</td>
</tr>
<tr id="parameter-bot_version">
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot containing the bot recommendation to be updated.</td>
</tr>
<tr id="parameter-locale_id">
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the language and locale of the bot recommendation to update. The string must match one of the supported locales. For more information, see Supported languages</td>
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
    defaultValue="describe_bot_recommendation"
    values={[
        { label: 'describe_bot_recommendation', value: 'describe_bot_recommendation' },
        { label: 'list_bot_recommendations', value: 'list_bot_recommendations' }
    ]}
>
<TabItem value="describe_bot_recommendation">

Provides metadata information about a bot recommendation. This information will enable you to get a description on the request inputs, to download associated transcripts after processing is complete, and to download intents and slot-types generated by the bot recommendation.

```sql
SELECT
botId,
botRecommendationId,
botRecommendationResults,
botRecommendationStatus,
botVersion,
creationDateTime,
encryptionSetting,
failureReasons,
lastUpdatedDateTime,
localeId,
transcriptSourceSetting
FROM aws.lexv2_models.bot_recommendations
WHERE bot_id = '{{ bot_id }}' -- required
AND bot_version = '{{ bot_version }}' -- required
AND locale_id = '{{ locale_id }}' -- required
AND bot_recommendation_id = '{{ bot_recommendation_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_bot_recommendations">

Get a list of bot recommendations that meet the specified criteria.

```sql
SELECT
botId,
botRecommendationSummaries,
botVersion,
localeId,
nextToken
FROM aws.lexv2_models.bot_recommendations
WHERE bot_id = '{{ bot_id }}' -- required
AND bot_version = '{{ bot_version }}' -- required
AND locale_id = '{{ locale_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_bot_recommendation"
    values={[
        { label: 'update_bot_recommendation', value: 'update_bot_recommendation' }
    ]}
>
<TabItem value="update_bot_recommendation">

Updates an existing bot recommendation request.

```sql
UPDATE aws.lexv2_models.bot_recommendations
SET 
encryptionSetting = '{{ encryptionSetting }}'
WHERE 
bot_id = '{{ bot_id }}' --required
AND bot_version = '{{ bot_version }}' --required
AND locale_id = '{{ locale_id }}' --required
AND bot_recommendation_id = '{{ bot_recommendation_id }}' --required
AND region = '{{ region }}' --required
AND encryptionSetting = '{{ encryptionSetting }}' --required
RETURNING
botId,
botRecommendationId,
botRecommendationStatus,
botVersion,
creationDateTime,
encryptionSetting,
lastUpdatedDateTime,
localeId,
transcriptSourceSetting;
```
</TabItem>
</Tabs>
