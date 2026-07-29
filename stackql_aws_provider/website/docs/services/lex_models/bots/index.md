--- 
title: bots
hide_title: false
hide_table_of_contents: false
keywords:
  - bots
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

Creates, updates, deletes, gets or lists a <code>bots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lex_models.bots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bot"
    values={[
        { label: 'get_bot', value: 'get_bot' },
        { label: 'get_bots', value: 'get_bots' }
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the bot. (pattern: &lt;code&gt;^(&#91;A-Za-z&#93;_?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="abort_statement" /></td>
    <td><code>object</code></td>
    <td>The message that Amazon Lex returns when the user elects to end the conversation without completing it. For more information, see PutBot.</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Checksum of the bot used to identify a specific revision of the bot's $LATEST version.</td>
</tr>
<tr>
    <td><CopyableCode code="child_directed" /></td>
    <td><code>boolean</code></td>
    <td>For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying true or false in the childDirected field. By specifying true in the childDirected field, you confirm that your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying false in the childDirected field, you confirm that your use of Amazon Lex is not related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the childDirected field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the Amazon Lex FAQ.</td>
</tr>
<tr>
    <td><CopyableCode code="clarification_prompt" /></td>
    <td><code>object</code></td>
    <td>The message Amazon Lex uses when it doesn't understand the user's request. For more information, see PutBot.</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the bot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the bot.</td>
</tr>
<tr>
    <td><CopyableCode code="detect_sentiment" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether user utterances should be sent to Amazon Comprehend for sentiment analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_model_improvements" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the bot uses accuracy improvements. true indicates that the bot is using the improvements, otherwise, false.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If status is FAILED, Amazon Lex explains why it failed to build the bot.</td>
</tr>
<tr>
    <td><CopyableCode code="idle_session_ttl_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. For more information, see PutBot.</td>
</tr>
<tr>
    <td><CopyableCode code="intents" /></td>
    <td><code>array</code></td>
    <td>An array of intent objects. For more information, see PutBot.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the bot was updated. When you create a resource, the creation date and last updated date are the same.</td>
</tr>
<tr>
    <td><CopyableCode code="locale" /></td>
    <td><code>string</code></td>
    <td>The target locale for the bot. (de-DE, en-AU, en-GB, en-IN, en-US, es-419, es-ES, es-US, fr-FR, fr-CA, it-IT, ja-JP, ko-KR)</td>
</tr>
<tr>
    <td><CopyableCode code="nlu_intent_confidence_threshold" /></td>
    <td><code>number (double)</code></td>
    <td>The score that determines where Amazon Lex inserts the AMAZON.FallbackIntent, AMAZON.KendraSearchIntent, or both when returning alternative intents in a PostContent or PostText response. AMAZON.FallbackIntent is inserted if the confidence score for all intents is below this value. AMAZON.KendraSearchIntent is only inserted if it is configured for the bot.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the bot. When the status is BUILDING Amazon Lex is building the bot for testing and use. If the status of the bot is READY_BASIC_TESTING, you can test the bot using the exact utterances specified in the bot's intents. When the bot is ready for full testing or to run, the status is READY. If there was a problem with building the bot, the status is FAILED and the failureReason field explains why the bot did not build. If the bot was saved but not built, the status is NOT_BUILT. (BUILDING, READY, READY_BASIC_TESTING, FAILED, NOT_BUILT)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot. For a new bot, the version is always $LATEST. (pattern: &lt;code&gt;\$LATEST|&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="voice_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user. For more information, see PutBot.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_bots">

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
    <td>The name of the bot. (pattern: &lt;code&gt;^(&#91;A-Za-z&#93;_?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the bot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the bot.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the bot was updated. When you create a bot, the creation date and last updated date are the same.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the bot. (BUILDING, READY, READY_BASIC_TESTING, FAILED, NOT_BUILT)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot. For a new bot, the version is always $LATEST. (pattern: &lt;code&gt;\$LATEST|&#91;0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-versionoralias"><code>versionoralias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias. This operation requires permissions for the lex:GetBot action.</td>
</tr>
<tr>
    <td><a href="#get_bots"><CopyableCode code="get_bots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nameContains"><code>nameContains</code></a></td>
    <td>Returns bot information as follows: If you provide the nameContains field, the response includes information for the $LATEST version of all bots whose name contains the specified string. If you don't specify the nameContains field, the operation returns information about the $LATEST version of all of your bots. This operation requires permission for the lex:GetBots action.</td>
</tr>
<tr>
    <td><a href="#put_bot"><CopyableCode code="put_bot" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-locale"><code>locale</code></a>, <a href="#parameter-childDirected"><code>childDirected</code></a></td>
    <td></td>
    <td>Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update a bot you are only required to specify a name, a locale, and whether the bot is directed toward children under age 13. You can use this to add intents later, or to remove intents from an existing bot. When you create a bot with the minimum information, the bot is created or updated but Amazon Lex returns the response FAILED. You can build the bot after you add one or more intents. For more information about Amazon Lex bots, see how-it-works. If you specify the name of an existing bot, the fields in the request replace the existing values in the $LATEST version of the bot. Amazon Lex removes any fields that you don't provide values for in the request, except for the idleTTLInSeconds and privacySettings fields, which are set to their default values. If you don't specify values for required fields, Amazon Lex throws an exception. This operation requires permissions for the lex:PutBot action. For more information, see security-iam.</td>
</tr>
<tr>
    <td><a href="#delete_utterances"><CopyableCode code="delete_utterances" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bot_name"><code>bot_name</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the GetUtterancesView operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input. Use the DeleteUtterances operation to manually delete stored utterances for a specific user. When you use the DeleteUtterances operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the GetUtterancesView operation are deleted after 15 days. This operation requires permissions for the lex:DeleteUtterances action.</td>
</tr>
<tr>
    <td><a href="#delete_bot"><CopyableCode code="delete_bot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes all versions of the bot, including the $LATEST version. To delete a specific version of the bot, use the DeleteBotVersion operation. The DeleteBot operation doesn't immediately remove the bot schema. Instead, it is marked for deletion and removed later. Amazon Lex stores utterances indefinitely for improving the ability of your bot to respond to user inputs. These utterances are not removed when the bot is deleted. To remove the utterances, use the DeleteUtterances operation. If a bot has an alias, you can't delete it. Instead, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the alias that refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again, delete the referring alias until the DeleteBot operation is successful. This operation requires permissions for the lex:DeleteBot action.</td>
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
    <td>The name of the bot that stored the utterances.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the bot. The name is case sensitive.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the user that made the utterances. This is the user ID that was sent in the PostContent or PostText operation request that contained the utterance.</td>
</tr>
<tr id="parameter-versionoralias">
    <td><CopyableCode code="versionoralias" /></td>
    <td><code>string</code></td>
    <td>The version or alias of the bot.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of bots to return in the response that the request will return. The default is 10.</td>
</tr>
<tr id="parameter-nameContains">
    <td><CopyableCode code="nameContains" /></td>
    <td><code>string</code></td>
    <td>Substring to match in bot names. A bot will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token that fetches the next page of bots. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of bots, specify the pagination token in the next request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bot"
    values={[
        { label: 'get_bot', value: 'get_bot' },
        { label: 'get_bots', value: 'get_bots' }
    ]}
>
<TabItem value="get_bot">

Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias. This operation requires permissions for the lex:GetBot action.

```sql
SELECT
name,
abort_statement,
checksum,
child_directed,
clarification_prompt,
created_date,
description,
detect_sentiment,
enable_model_improvements,
failure_reason,
idle_session_ttl_in_seconds,
intents,
last_updated_date,
locale,
nlu_intent_confidence_threshold,
status,
version,
voice_id
FROM aws.lex_models.bots
WHERE name = '{{ name }}' -- required
AND versionoralias = '{{ versionoralias }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_bots">

Returns bot information as follows: If you provide the nameContains field, the response includes information for the $LATEST version of all bots whose name contains the specified string. If you don't specify the nameContains field, the operation returns information about the $LATEST version of all of your bots. This operation requires permission for the lex:GetBots action.

```sql
SELECT
name,
created_date,
description,
last_updated_date,
status,
version
FROM aws.lex_models.bots
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND nameContains = '{{ nameContains }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_bot"
    values={[
        { label: 'put_bot', value: 'put_bot' }
    ]}
>
<TabItem value="put_bot">

Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update a bot you are only required to specify a name, a locale, and whether the bot is directed toward children under age 13. You can use this to add intents later, or to remove intents from an existing bot. When you create a bot with the minimum information, the bot is created or updated but Amazon Lex returns the response FAILED. You can build the bot after you add one or more intents. For more information about Amazon Lex bots, see how-it-works. If you specify the name of an existing bot, the fields in the request replace the existing values in the $LATEST version of the bot. Amazon Lex removes any fields that you don't provide values for in the request, except for the idleTTLInSeconds and privacySettings fields, which are set to their default values. If you don't specify values for required fields, Amazon Lex throws an exception. This operation requires permissions for the lex:PutBot action. For more information, see security-iam.

```sql
REPLACE aws.lex_models.bots
SET 
description = '{{ description }}',
intents = '{{ intents }}',
enableModelImprovements = {{ enableModelImprovements }},
nluIntentConfidenceThreshold = {{ nluIntentConfidenceThreshold }},
clarificationPrompt = '{{ clarificationPrompt }}',
abortStatement = '{{ abortStatement }}',
idleSessionTTLInSeconds = {{ idleSessionTTLInSeconds }},
voiceId = '{{ voiceId }}',
checksum = '{{ checksum }}',
processBehavior = '{{ processBehavior }}',
locale = '{{ locale }}',
childDirected = {{ childDirected }},
detectSentiment = {{ detectSentiment }},
createVersion = {{ createVersion }},
tags = '{{ tags }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND locale = '{{ locale }}' --required
AND childDirected = {{ childDirected }} --required
RETURNING
name,
abort_statement,
checksum,
child_directed,
clarification_prompt,
create_version,
created_date,
description,
detect_sentiment,
enable_model_improvements,
failure_reason,
idle_session_ttl_in_seconds,
intents,
last_updated_date,
locale,
nlu_intent_confidence_threshold,
status,
tags,
version,
voice_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_utterances"
    values={[
        { label: 'delete_utterances', value: 'delete_utterances' },
        { label: 'delete_bot', value: 'delete_bot' }
    ]}
>
<TabItem value="delete_utterances">

Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the GetUtterancesView operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input. Use the DeleteUtterances operation to manually delete stored utterances for a specific user. When you use the DeleteUtterances operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the GetUtterancesView operation are deleted after 15 days. This operation requires permissions for the lex:DeleteUtterances action.

```sql
DELETE FROM aws.lex_models.bots
WHERE bot_name = '{{ bot_name }}' --required
AND user_id = '{{ user_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_bot">

Deletes all versions of the bot, including the $LATEST version. To delete a specific version of the bot, use the DeleteBotVersion operation. The DeleteBot operation doesn't immediately remove the bot schema. Instead, it is marked for deletion and removed later. Amazon Lex stores utterances indefinitely for improving the ability of your bot to respond to user inputs. These utterances are not removed when the bot is deleted. To remove the utterances, use the DeleteUtterances operation. If a bot has an alias, you can't delete it. Instead, the DeleteBot operation returns a ResourceInUseException exception that includes a reference to the alias that refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again, delete the referring alias until the DeleteBot operation is successful. This operation requires permissions for the lex:DeleteBot action.

```sql
DELETE FROM aws.lex_models.bots
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
