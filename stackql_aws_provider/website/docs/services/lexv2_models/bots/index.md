--- 
title: bots
hide_title: false
hide_table_of_contents: false
keywords:
  - bots
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

Creates, updates, deletes, gets or lists a <code>bots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.bots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_bot"
    values={[
        { label: 'describe_bot', value: 'describe_bot' },
        { label: 'list_bots', value: 'list_bots' }
    ]}
>
<TabItem value="describe_bot">

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
    <td>The unique identifier of the bot. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_members" /></td>
    <td><code>array</code></td>
    <td>The list of bots in the network that was described.</td>
</tr>
<tr>
    <td><CopyableCode code="bot_name" /></td>
    <td><code>string</code></td>
    <td>The name of the bot. (pattern: &lt;code&gt;^(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the bot. When the status is Available the bot is ready to be used in conversations with users. (Creating, Available, Inactive, Deleting, Failed, Versioning, Importing, Updating)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_type" /></td>
    <td><code>string</code></td>
    <td>The type of the bot that was described. (Bot, BotNetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of the date and time that the bot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_privacy" /></td>
    <td><code>object</code></td>
    <td>By default, data stored by Amazon Lex is encrypted. The DataPrivacy structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the bot.</td>
</tr>
<tr>
    <td><CopyableCode code="error_log_settings" /></td>
    <td><code>object</code></td>
    <td>Settings parameters for the error logs, whether it is enabled or disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reasons" /></td>
    <td><code>array</code></td>
    <td>If the botStatus is Failed, this contains a list of reasons that the bot couldn't be built.</td>
</tr>
<tr>
    <td><CopyableCode code="idle_session_ttl_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The maximum time in seconds that Amazon Lex retains the data gathered in a conversation.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of the date and time that the bot was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot. (pattern: &lt;code&gt;^arn:aws:iam::&#91;0-9&#93;&#123;12&#125;:role/.*$&lt;/code&gt;)</td>
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
    <td><CopyableCode code="bot_summaries" /></td>
    <td><code>array</code></td>
    <td>Summary information for the bots that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter of the request. If there are more bots available, the nextToken field contains a token to the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token that indicates whether there are more results to return in a response to the ListBots operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListBots operation request to get the next page of results.</td>
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
    <td><a href="#describe_bot"><CopyableCode code="describe_bot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides metadata information about a bot.</td>
</tr>
<tr>
    <td><a href="#list_bots"><CopyableCode code="list_bots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of available bots.</td>
</tr>
<tr>
    <td><a href="#create_bot"><CopyableCode code="create_bot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-botName"><code>botName</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-dataPrivacy"><code>dataPrivacy</code></a>, <a href="#parameter-idleSessionTTLInSeconds"><code>idleSessionTTLInSeconds</code></a></td>
    <td></td>
    <td>Creates an Amazon Lex conversational bot.</td>
</tr>
<tr>
    <td><a href="#update_bot"><CopyableCode code="update_bot" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-botName"><code>botName</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-dataPrivacy"><code>dataPrivacy</code></a>, <a href="#parameter-idleSessionTTLInSeconds"><code>idleSessionTTLInSeconds</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing bot.</td>
</tr>
<tr>
    <td><a href="#delete_custom_vocabulary"><CopyableCode code="delete_custom_vocabulary" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a custom vocabulary from the specified locale in the specified bot.</td>
</tr>
<tr>
    <td><a href="#delete_bot"><CopyableCode code="delete_bot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-skipResourceInUseCheck"><code>skipResourceInUseCheck</code></a></td>
    <td>Deletes all versions of a bot, including the Draft version. To delete a specific version, use the DeleteBotVersion operation. When you delete a bot, all of the resources contained in the bot are also deleted. Deleting a bot removes all locales, intents, slot, and slot types defined for the bot. If a bot has an alias, the DeleteBot operation returns a ResourceInUseException exception. If you want to delete the bot and the alias, set the skipResourceInUseCheck parameter to true.</td>
</tr>
<tr>
    <td><a href="#batch_create_custom_vocabulary_item"><CopyableCode code="batch_create_custom_vocabulary_item" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-customVocabularyItemList"><code>customVocabularyItemList</code></a></td>
    <td></td>
    <td>Create a batch of custom vocabulary items for a given bot locale's custom vocabulary.</td>
</tr>
<tr>
    <td><a href="#batch_delete_custom_vocabulary_item"><CopyableCode code="batch_delete_custom_vocabulary_item" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-customVocabularyItemList"><code>customVocabularyItemList</code></a></td>
    <td></td>
    <td>Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary.</td>
</tr>
<tr>
    <td><a href="#batch_update_custom_vocabulary_item"><CopyableCode code="batch_update_custom_vocabulary_item" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-customVocabularyItemList"><code>customVocabularyItemList</code></a></td>
    <td></td>
    <td>Update a batch of custom vocabulary items for a given bot locale's custom vocabulary.</td>
</tr>
<tr>
    <td><a href="#build_bot_locale"><CopyableCode code="build_bot_locale" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple locales. At runtime the locale is used to choose a specific build of the bot.</td>
</tr>
<tr>
    <td><a href="#delete_utterances"><CopyableCode code="delete_utterances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-localeId"><code>localeId</code></a>, <a href="#parameter-sessionId"><code>sessionId</code></a></td>
    <td>Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the ListAggregatedUtterances operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input.. Use the DeleteUtterances operation to manually delete utterances for a specific session. When you use the DeleteUtterances operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the ListAggregatedUtterances operation are deleted after 15 days.</td>
</tr>
<tr>
    <td><a href="#generate_bot_element"><CopyableCode code="generate_bot_element" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-intentId"><code>intentId</code></a></td>
    <td></td>
    <td>Generates sample utterances for an intent.</td>
</tr>
<tr>
    <td><a href="#start_bot_recommendation"><CopyableCode code="start_bot_recommendation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-transcriptSourceSetting"><code>transcriptSourceSetting</code></a></td>
    <td></td>
    <td>Use this to provide your transcript data, and to start the bot recommendation process.</td>
</tr>
<tr>
    <td><a href="#start_bot_analyzer"><CopyableCode code="start_bot_analyzer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-analysisScope"><code>analysisScope</code></a></td>
    <td></td>
    <td>Initiates an asynchronous analysis of your bot configuration using AI-powered analysis to identify potential issues and recommend improvements based on AWS best practices. The analysis examines your bot's configuration, including intents, utterances, slots, and conversation flows, to provide actionable recommendations for optimization.</td>
</tr>
<tr>
    <td><a href="#start_bot_resource_generation"><CopyableCode code="start_bot_resource_generation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-generationInputPrompt"><code>generationInputPrompt</code></a></td>
    <td></td>
    <td>Starts a request for the descriptive bot builder to generate a bot locale configuration based on the prompt you provide it. After you make this call, use the DescribeBotResourceGeneration operation to check on the status of the generation and for the generatedBotLocaleUrl when the generation is complete. Use that value to retrieve the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration.</td>
</tr>
<tr>
    <td><a href="#stop_bot_analyzer"><CopyableCode code="stop_bot_analyzer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_analyzer_request_id"><code>bot_analyzer_request_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels an ongoing bot analysis execution. Once stopped, the analysis cannot be resumed and no recommendations will be generated.</td>
</tr>
<tr>
    <td><a href="#stop_bot_recommendation"><CopyableCode code="stop_bot_recommendation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-bot_recommendation_id"><code>bot_recommendation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stop an already running Bot Recommendation request.</td>
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
<tr id="parameter-bot_analyzer_request_id">
    <td><CopyableCode code="bot_analyzer_request_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the analysis request to stop.</td>
</tr>
<tr id="parameter-bot_id">
    <td><CopyableCode code="bot_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the bot containing the bot recommendation to be stopped.</td>
</tr>
<tr id="parameter-bot_recommendation_id">
    <td><CopyableCode code="bot_recommendation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the bot recommendation to be stopped.</td>
</tr>
<tr id="parameter-bot_version">
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot containing the bot recommendation.</td>
</tr>
<tr id="parameter-locale_id">
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the language and locale of the bot recommendation to stop. The string must match one of the supported locales. For more information, see Supported languages</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-localeId">
    <td><CopyableCode code="localeId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the language and locale where the utterances were collected. The string must match one of the supported locales. For more information, see Supported languages.</td>
</tr>
<tr id="parameter-sessionId">
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the session with the user. The ID is returned in the response from the RecognizeText and RecognizeUtterance operations.</td>
</tr>
<tr id="parameter-skipResourceInUseCheck">
    <td><CopyableCode code="skipResourceInUseCheck" /></td>
    <td><code>boolean</code></td>
    <td>By default, Amazon Lex checks if any other resource, such as an alias or bot network, is using the bot version before it is deleted and throws a ResourceInUseException exception if the bot is being used by another resource. Set this parameter to true to skip this check and remove the bot even if it is being used by another resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_bot"
    values={[
        { label: 'describe_bot', value: 'describe_bot' },
        { label: 'list_bots', value: 'list_bots' }
    ]}
>
<TabItem value="describe_bot">

Provides metadata information about a bot.

```sql
SELECT
bot_id,
bot_members,
bot_name,
bot_status,
bot_type,
creation_date_time,
data_privacy,
description,
error_log_settings,
failure_reasons,
idle_session_ttl_in_seconds,
last_updated_date_time,
role_arn
FROM aws.lexv2_models.bots
WHERE bot_id = '{{ bot_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_bots">

Gets a list of available bots.

```sql
SELECT
bot_summaries,
next_token
FROM aws.lexv2_models.bots
WHERE region = '{{ region }}' -- required
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

Creates an Amazon Lex conversational bot.

```sql
INSERT INTO aws.lexv2_models.bots (
botName,
description,
roleArn,
dataPrivacy,
idleSessionTTLInSeconds,
botTags,
testBotAliasTags,
botType,
botMembers,
errorLogSettings,
region
)
SELECT 
'{{ botName }}' /* required */,
'{{ description }}',
'{{ roleArn }}' /* required */,
'{{ dataPrivacy }}' /* required */,
{{ idleSessionTTLInSeconds }} /* required */,
'{{ botTags }}',
'{{ testBotAliasTags }}',
'{{ botType }}',
'{{ botMembers }}',
'{{ errorLogSettings }}',
'{{ region }}'
RETURNING
bot_id,
bot_members,
bot_name,
bot_status,
bot_tags,
bot_type,
creation_date_time,
data_privacy,
description,
error_log_settings,
idle_session_ttl_in_seconds,
role_arn,
test_bot_alias_tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: bots
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the bots resource.
    - name: botName
      value: "{{ botName }}"
    - name: description
      value: "{{ description }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: dataPrivacy
      description: |
        By default, data stored by Amazon Lex is encrypted. The DataPrivacy structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
      value:
        childDirected: {{ childDirected }}
    - name: idleSessionTTLInSeconds
      value: {{ idleSessionTTLInSeconds }}
    - name: botTags
      value: "{{ botTags }}"
    - name: testBotAliasTags
      value: "{{ testBotAliasTags }}"
    - name: botType
      value: "{{ botType }}"
      valid_values: ['Bot', 'BotNetwork']
    - name: botMembers
      value:
        - botMemberId: "{{ botMemberId }}"
          botMemberName: "{{ botMemberName }}"
          botMemberAliasId: "{{ botMemberAliasId }}"
          botMemberAliasName: "{{ botMemberAliasName }}"
          botMemberVersion: "{{ botMemberVersion }}"
    - name: errorLogSettings
      description: |
        Settings parameters for the error logs, whether it is enabled or disabled.
      value:
        enabled: {{ enabled }}
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

Updates the configuration of an existing bot.

```sql
UPDATE aws.lexv2_models.bots
SET 
botName = '{{ botName }}',
description = '{{ description }}',
roleArn = '{{ roleArn }}',
dataPrivacy = '{{ dataPrivacy }}',
idleSessionTTLInSeconds = {{ idleSessionTTLInSeconds }},
botType = '{{ botType }}',
botMembers = '{{ botMembers }}',
errorLogSettings = '{{ errorLogSettings }}'
WHERE 
bot_id = '{{ bot_id }}' --required
AND region = '{{ region }}' --required
AND botName = '{{ botName }}' --required
AND roleArn = '{{ roleArn }}' --required
AND dataPrivacy = '{{ dataPrivacy }}' --required
AND idleSessionTTLInSeconds = '{{ idleSessionTTLInSeconds }}' --required
RETURNING
bot_id,
bot_members,
bot_name,
bot_status,
bot_type,
creation_date_time,
data_privacy,
description,
error_log_settings,
idle_session_ttl_in_seconds,
last_updated_date_time,
role_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_vocabulary"
    values={[
        { label: 'delete_custom_vocabulary', value: 'delete_custom_vocabulary' },
        { label: 'delete_bot', value: 'delete_bot' }
    ]}
>
<TabItem value="delete_custom_vocabulary">

Removes a custom vocabulary from the specified locale in the specified bot.

```sql
DELETE FROM aws.lexv2_models.bots
WHERE bot_id = '{{ bot_id }}' --required
AND bot_version = '{{ bot_version }}' --required
AND locale_id = '{{ locale_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_bot">

Deletes all versions of a bot, including the Draft version. To delete a specific version, use the DeleteBotVersion operation. When you delete a bot, all of the resources contained in the bot are also deleted. Deleting a bot removes all locales, intents, slot, and slot types defined for the bot. If a bot has an alias, the DeleteBot operation returns a ResourceInUseException exception. If you want to delete the bot and the alias, set the skipResourceInUseCheck parameter to true.

```sql
DELETE FROM aws.lexv2_models.bots
WHERE bot_id = '{{ bot_id }}' --required
AND region = '{{ region }}' --required
AND skipResourceInUseCheck = '{{ skipResourceInUseCheck }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_create_custom_vocabulary_item"
    values={[
        { label: 'batch_create_custom_vocabulary_item', value: 'batch_create_custom_vocabulary_item' },
        { label: 'batch_delete_custom_vocabulary_item', value: 'batch_delete_custom_vocabulary_item' },
        { label: 'batch_update_custom_vocabulary_item', value: 'batch_update_custom_vocabulary_item' },
        { label: 'build_bot_locale', value: 'build_bot_locale' },
        { label: 'delete_utterances', value: 'delete_utterances' },
        { label: 'generate_bot_element', value: 'generate_bot_element' },
        { label: 'start_bot_recommendation', value: 'start_bot_recommendation' },
        { label: 'start_bot_analyzer', value: 'start_bot_analyzer' },
        { label: 'start_bot_resource_generation', value: 'start_bot_resource_generation' },
        { label: 'stop_bot_analyzer', value: 'stop_bot_analyzer' },
        { label: 'stop_bot_recommendation', value: 'stop_bot_recommendation' }
    ]}
>
<TabItem value="batch_create_custom_vocabulary_item">

Create a batch of custom vocabulary items for a given bot locale's custom vocabulary.

```sql
EXEC aws.lexv2_models.bots.batch_create_custom_vocabulary_item 
@bot_id='{{ bot_id }}' --required, 
@bot_version='{{ bot_version }}' --required, 
@locale_id='{{ locale_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"customVocabularyItemList": "{{ customVocabularyItemList }}"
}'
;
```
</TabItem>
<TabItem value="batch_delete_custom_vocabulary_item">

Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary.

```sql
EXEC aws.lexv2_models.bots.batch_delete_custom_vocabulary_item 
@bot_id='{{ bot_id }}' --required, 
@bot_version='{{ bot_version }}' --required, 
@locale_id='{{ locale_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"customVocabularyItemList": "{{ customVocabularyItemList }}"
}'
;
```
</TabItem>
<TabItem value="batch_update_custom_vocabulary_item">

Update a batch of custom vocabulary items for a given bot locale's custom vocabulary.

```sql
EXEC aws.lexv2_models.bots.batch_update_custom_vocabulary_item 
@bot_id='{{ bot_id }}' --required, 
@bot_version='{{ bot_version }}' --required, 
@locale_id='{{ locale_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"customVocabularyItemList": "{{ customVocabularyItemList }}"
}'
;
```
</TabItem>
<TabItem value="build_bot_locale">

Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple locales. At runtime the locale is used to choose a specific build of the bot.

```sql
EXEC aws.lexv2_models.bots.build_bot_locale 
@bot_id='{{ bot_id }}' --required, 
@bot_version='{{ bot_version }}' --required, 
@locale_id='{{ locale_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_utterances">

Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the ListAggregatedUtterances operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input.. Use the DeleteUtterances operation to manually delete utterances for a specific session. When you use the DeleteUtterances operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the ListAggregatedUtterances operation are deleted after 15 days.

```sql
EXEC aws.lexv2_models.bots.delete_utterances 
@bot_id='{{ bot_id }}' --required, 
@region='{{ region }}' --required, 
@localeId='{{ localeId }}', 
@sessionId='{{ sessionId }}'
;
```
</TabItem>
<TabItem value="generate_bot_element">

Generates sample utterances for an intent.

```sql
EXEC aws.lexv2_models.bots.generate_bot_element 
@bot_id='{{ bot_id }}' --required, 
@bot_version='{{ bot_version }}' --required, 
@locale_id='{{ locale_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"intentId": "{{ intentId }}"
}'
;
```
</TabItem>
<TabItem value="start_bot_recommendation">

Use this to provide your transcript data, and to start the bot recommendation process.

```sql
EXEC aws.lexv2_models.bots.start_bot_recommendation 
@bot_id='{{ bot_id }}' --required, 
@bot_version='{{ bot_version }}' --required, 
@locale_id='{{ locale_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"transcriptSourceSetting": "{{ transcriptSourceSetting }}", 
"encryptionSetting": "{{ encryptionSetting }}"
}'
;
```
</TabItem>
<TabItem value="start_bot_analyzer">

Initiates an asynchronous analysis of your bot configuration using AI-powered analysis to identify potential issues and recommend improvements based on AWS best practices. The analysis examines your bot's configuration, including intents, utterances, slots, and conversation flows, to provide actionable recommendations for optimization.

```sql
EXEC aws.lexv2_models.bots.start_bot_analyzer 
@bot_id='{{ bot_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"analysisScope": "{{ analysisScope }}", 
"localeId": "{{ localeId }}", 
"botVersion": "{{ botVersion }}"
}'
;
```
</TabItem>
<TabItem value="start_bot_resource_generation">

Starts a request for the descriptive bot builder to generate a bot locale configuration based on the prompt you provide it. After you make this call, use the DescribeBotResourceGeneration operation to check on the status of the generation and for the generatedBotLocaleUrl when the generation is complete. Use that value to retrieve the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration.

```sql
EXEC aws.lexv2_models.bots.start_bot_resource_generation 
@bot_id='{{ bot_id }}' --required, 
@bot_version='{{ bot_version }}' --required, 
@locale_id='{{ locale_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"generationInputPrompt": "{{ generationInputPrompt }}"
}'
;
```
</TabItem>
<TabItem value="stop_bot_analyzer">

Cancels an ongoing bot analysis execution. Once stopped, the analysis cannot be resumed and no recommendations will be generated.

```sql
EXEC aws.lexv2_models.bots.stop_bot_analyzer 
@bot_id='{{ bot_id }}' --required, 
@bot_analyzer_request_id='{{ bot_analyzer_request_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_bot_recommendation">

Stop an already running Bot Recommendation request.

```sql
EXEC aws.lexv2_models.bots.stop_bot_recommendation 
@bot_id='{{ bot_id }}' --required, 
@bot_version='{{ bot_version }}' --required, 
@locale_id='{{ locale_id }}' --required, 
@bot_recommendation_id='{{ bot_recommendation_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
