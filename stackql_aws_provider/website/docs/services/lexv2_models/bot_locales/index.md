--- 
title: bot_locales
hide_title: false
hide_table_of_contents: false
keywords:
  - bot_locales
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

Creates, updates, deletes, gets or lists a <code>bot_locales</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bot_locales" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.bot_locales" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_bot_locale"
    values={[
        { label: 'describe_bot_locale', value: 'describe_bot_locale' },
        { label: 'list_bot_locales', value: 'list_bot_locales' }
    ]}
>
<TabItem value="describe_bot_locale">

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
    <td><CopyableCode code="audioFillerSettings" /></td>
    <td><code>object</code></td>
    <td>The audio filler settings configured for the bot locale.</td>
</tr>
<tr>
    <td><CopyableCode code="botId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the bot associated with the locale. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botLocaleHistoryEvents" /></td>
    <td><code>array</code></td>
    <td>History of changes, such as when a locale is used in an alias, that have taken place for the locale.</td>
</tr>
<tr>
    <td><CopyableCode code="botLocaleStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the bot. If the status is Failed, the reasons for the failure are listed in the failureReasons field. (Creating, Building, Built, ReadyExpressTesting, Failed, Deleting, NotBuilt, Importing, Processing)</td>
</tr>
<tr>
    <td><CopyableCode code="botVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the bot associated with the locale. (pattern: &lt;code&gt;^(DRAFT|&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the locale was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the locale.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReasons" /></td>
    <td><code>array</code></td>
    <td>if botLocaleStatus is Failed, Amazon Lex explains why it failed to build the bot.</td>
</tr>
<tr>
    <td><CopyableCode code="generativeAISettings" /></td>
    <td><code>object</code></td>
    <td>Contains settings for Amazon Bedrock's generative AI features for your bot locale.</td>
</tr>
<tr>
    <td><CopyableCode code="intentsCount" /></td>
    <td><code>integer</code></td>
    <td>The number of intents defined for the locale.</td>
</tr>
<tr>
    <td><CopyableCode code="lastBuildSubmittedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the locale was last submitted for building.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the locale was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="localeId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the described locale.</td>
</tr>
<tr>
    <td><CopyableCode code="localeName" /></td>
    <td><code>string</code></td>
    <td>The name of the locale.</td>
</tr>
<tr>
    <td><CopyableCode code="nluIntentConfidenceThreshold" /></td>
    <td><code>number (double)</code></td>
    <td>The confidence threshold where Amazon Lex inserts the AMAZON.FallbackIntent and AMAZON.KendraSearchIntent intents in the list of possible intents for an utterance.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendedActions" /></td>
    <td><code>array</code></td>
    <td>Recommended actions to take to resolve an error in the failureReasons field.</td>
</tr>
<tr>
    <td><CopyableCode code="slotTypesCount" /></td>
    <td><code>integer</code></td>
    <td>The number of slot types defined for the locale.</td>
</tr>
<tr>
    <td><CopyableCode code="speechDetectionSensitivity" /></td>
    <td><code>string</code></td>
    <td>The sensitivity level for voice activity detection (VAD) configured for the bot locale. (Default, HighNoiseTolerance, MaximumNoiseTolerance)</td>
</tr>
<tr>
    <td><CopyableCode code="speechRecognitionSettings" /></td>
    <td><code>object</code></td>
    <td>The speech-to-text settings configured for the bot locale.</td>
</tr>
<tr>
    <td><CopyableCode code="unifiedSpeechSettings" /></td>
    <td><code>object</code></td>
    <td>The unified speech settings configured for the bot locale.</td>
</tr>
<tr>
    <td><CopyableCode code="voiceSettings" /></td>
    <td><code>object</code></td>
    <td>The Amazon Polly voice Amazon Lex uses for voice interaction with the user.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_bot_locales">

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
    <td>The identifier of the bot to list locales for. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botLocaleSummaries" /></td>
    <td><code>array</code></td>
    <td>Summary information for the locales that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter of the request. If there are more locales available, the nextToken field contains a token to get the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="botVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the bot. (pattern: &lt;code&gt;^(DRAFT|&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates whether there are more results to return in a response to the ListBotLocales operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListBotLocales operation request to get the next page of results.</td>
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
    <td><a href="#describe_bot_locale"><CopyableCode code="describe_bot_locale" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the settings that a bot has for a specific locale.</td>
</tr>
<tr>
    <td><a href="#list_bot_locales"><CopyableCode code="list_bot_locales" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of locales for the specified bot.</td>
</tr>
<tr>
    <td><a href="#create_bot_locale"><CopyableCode code="create_bot_locale" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-localeId"><code>localeId</code></a>, <a href="#parameter-nluIntentConfidenceThreshold"><code>nluIntentConfidenceThreshold</code></a></td>
    <td></td>
    <td>Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in conversations with users in the specified language and locale. You must add a locale to a bot before you can add intents and slot types to the bot.</td>
</tr>
<tr>
    <td><a href="#update_bot_locale"><CopyableCode code="update_bot_locale" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-nluIntentConfidenceThreshold"><code>nluIntentConfidenceThreshold</code></a></td>
    <td></td>
    <td>Updates the settings that a bot has for a specific locale.</td>
</tr>
<tr>
    <td><a href="#delete_bot_locale"><CopyableCode code="delete_bot_locale" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a locale from a bot. When you delete a locale, all intents, slots, and slot types defined for the locale are also deleted.</td>
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
    <td>The unique identifier of the bot that contains the locale.</td>
</tr>
<tr id="parameter-bot_version">
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot that contains the locale.</td>
</tr>
<tr id="parameter-locale_id">
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the language and locale that will be deleted. The string must match one of the supported locales. For more information, see Supported languages.</td>
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
    defaultValue="describe_bot_locale"
    values={[
        { label: 'describe_bot_locale', value: 'describe_bot_locale' },
        { label: 'list_bot_locales', value: 'list_bot_locales' }
    ]}
>
<TabItem value="describe_bot_locale">

Describes the settings that a bot has for a specific locale.

```sql
SELECT
audioFillerSettings,
botId,
botLocaleHistoryEvents,
botLocaleStatus,
botVersion,
creationDateTime,
description,
failureReasons,
generativeAISettings,
intentsCount,
lastBuildSubmittedDateTime,
lastUpdatedDateTime,
localeId,
localeName,
nluIntentConfidenceThreshold,
recommendedActions,
slotTypesCount,
speechDetectionSensitivity,
speechRecognitionSettings,
unifiedSpeechSettings,
voiceSettings
FROM aws.lexv2_models.bot_locales
WHERE bot_id = '{{ bot_id }}' -- required
AND bot_version = '{{ bot_version }}' -- required
AND locale_id = '{{ locale_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_bot_locales">

Gets a list of locales for the specified bot.

```sql
SELECT
botId,
botLocaleSummaries,
botVersion,
nextToken
FROM aws.lexv2_models.bot_locales
WHERE bot_id = '{{ bot_id }}' -- required
AND bot_version = '{{ bot_version }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_bot_locale"
    values={[
        { label: 'create_bot_locale', value: 'create_bot_locale' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_bot_locale">

Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in conversations with users in the specified language and locale. You must add a locale to a bot before you can add intents and slot types to the bot.

```sql
INSERT INTO aws.lexv2_models.bot_locales (
localeId,
description,
nluIntentConfidenceThreshold,
voiceSettings,
unifiedSpeechSettings,
audioFillerSettings,
speechRecognitionSettings,
generativeAISettings,
speechDetectionSensitivity,
bot_id,
bot_version,
region
)
SELECT 
'{{ localeId }}' /* required */,
'{{ description }}',
{{ nluIntentConfidenceThreshold }} /* required */,
'{{ voiceSettings }}',
'{{ unifiedSpeechSettings }}',
'{{ audioFillerSettings }}',
'{{ speechRecognitionSettings }}',
'{{ generativeAISettings }}',
'{{ speechDetectionSensitivity }}',
'{{ bot_id }}',
'{{ bot_version }}',
'{{ region }}'
RETURNING
audioFillerSettings,
botId,
botLocaleStatus,
botVersion,
creationDateTime,
description,
generativeAISettings,
localeId,
localeName,
nluIntentConfidenceThreshold,
speechDetectionSensitivity,
speechRecognitionSettings,
unifiedSpeechSettings,
voiceSettings
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: bot_locales
  props:
    - name: bot_id
      value: "{{ bot_id }}"
      description: Required parameter for the bot_locales resource.
    - name: bot_version
      value: "{{ bot_version }}"
      description: Required parameter for the bot_locales resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the bot_locales resource.
    - name: localeId
      value: "{{ localeId }}"
    - name: description
      value: "{{ description }}"
    - name: nluIntentConfidenceThreshold
      value: {{ nluIntentConfidenceThreshold }}
    - name: voiceSettings
      description: |
        Defines settings for using an Amazon Polly voice to communicate with a user. Valid values include: standard neural long-form generative
      value:
        engine: "{{ engine }}"
        voiceId: "{{ voiceId }}"
    - name: unifiedSpeechSettings
      description: |
        Unified configuration settings that combine speech recognition and synthesis capabilities.
      value:
        speechFoundationModel:
          modelArn: "{{ modelArn }}"
          voiceId: "{{ voiceId }}"
    - name: audioFillerSettings
      description: |
        Configuration that plays background filler audio during speech-to-speech interactions to mask processing delays and improve the perceived responsiveness of the bot. Audio filler requires unifiedSpeechSettings (speech-to-speech) to be enabled on the bot locale when enabled is true.
      value:
        enabled: {{ enabled }}
        audioType: "{{ audioType }}"
        startDelayInMilliseconds: {{ startDelayInMilliseconds }}
        minimumPlayDurationInMilliseconds: {{ minimumPlayDurationInMilliseconds }}
        responseDeliveryDelayInMilliseconds: {{ responseDeliveryDelayInMilliseconds }}
    - name: speechRecognitionSettings
      description: |
        Settings that control how Amazon Lex processes and recognizes speech input from users.
      value:
        speechModelPreference: "{{ speechModelPreference }}"
        speechModelConfig:
          deepgramConfig:
            apiTokenSecretArn: "{{ apiTokenSecretArn }}"
            modelId: "{{ modelId }}"
    - name: generativeAISettings
      description: |
        Contains specifications about the generative AI capabilities from Amazon Bedrock that you can turn on for your bot.
      value:
        runtimeSettings:
          slotResolutionImprovement:
            enabled: {{ enabled }}
            bedrockModelSpecification:
              modelArn: "{{ modelArn }}"
              guardrail:
                identifier: "{{ identifier }}"
                version: "{{ version }}"
              traceStatus: "{{ traceStatus }}"
              customPrompt: "{{ customPrompt }}"
          nluImprovement:
            enabled: {{ enabled }}
            assistedNluMode: "{{ assistedNluMode }}"
            intentDisambiguationSettings:
              enabled: {{ enabled }}
              maxDisambiguationIntents: {{ maxDisambiguationIntents }}
              customDisambiguationMessage: "{{ customDisambiguationMessage }}"
        buildtimeSettings:
          descriptiveBotBuilder:
            enabled: {{ enabled }}
            bedrockModelSpecification:
              modelArn: "{{ modelArn }}"
              guardrail:
                identifier: "{{ identifier }}"
                version: "{{ version }}"
              traceStatus: "{{ traceStatus }}"
              customPrompt: "{{ customPrompt }}"
          sampleUtteranceGeneration:
            enabled: {{ enabled }}
            bedrockModelSpecification:
              modelArn: "{{ modelArn }}"
              guardrail:
                identifier: "{{ identifier }}"
                version: "{{ version }}"
              traceStatus: "{{ traceStatus }}"
              customPrompt: "{{ customPrompt }}"
    - name: speechDetectionSensitivity
      value: "{{ speechDetectionSensitivity }}"
      description: |
        Determines the sensitivity level for voice activity detection (VAD) in noisy environments. This setting helps optimize speech recognition accuracy by adjusting how the system responds to background noise. Valid values include: Default - Standard sensitivity level suitable for most environments HighNoiseTolerance - Increased tolerance for moderate background noise MaximumNoiseTolerance - Maximum tolerance for high levels of background noise
      valid_values: ['Default', 'HighNoiseTolerance', 'MaximumNoiseTolerance']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_bot_locale"
    values={[
        { label: 'update_bot_locale', value: 'update_bot_locale' }
    ]}
>
<TabItem value="update_bot_locale">

Updates the settings that a bot has for a specific locale.

```sql
UPDATE aws.lexv2_models.bot_locales
SET 
description = '{{ description }}',
nluIntentConfidenceThreshold = {{ nluIntentConfidenceThreshold }},
voiceSettings = '{{ voiceSettings }}',
unifiedSpeechSettings = '{{ unifiedSpeechSettings }}',
audioFillerSettings = '{{ audioFillerSettings }}',
speechRecognitionSettings = '{{ speechRecognitionSettings }}',
generativeAISettings = '{{ generativeAISettings }}',
speechDetectionSensitivity = '{{ speechDetectionSensitivity }}'
WHERE 
bot_id = '{{ bot_id }}' --required
AND bot_version = '{{ bot_version }}' --required
AND locale_id = '{{ locale_id }}' --required
AND region = '{{ region }}' --required
AND nluIntentConfidenceThreshold = '{{ nluIntentConfidenceThreshold }}' --required
RETURNING
audioFillerSettings,
botId,
botLocaleStatus,
botVersion,
creationDateTime,
description,
failureReasons,
generativeAISettings,
lastUpdatedDateTime,
localeId,
localeName,
nluIntentConfidenceThreshold,
recommendedActions,
speechDetectionSensitivity,
speechRecognitionSettings,
unifiedSpeechSettings,
voiceSettings;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bot_locale"
    values={[
        { label: 'delete_bot_locale', value: 'delete_bot_locale' }
    ]}
>
<TabItem value="delete_bot_locale">

Removes a locale from a bot. When you delete a locale, all intents, slots, and slot types defined for the locale are also deleted.

```sql
DELETE FROM aws.lexv2_models.bot_locales
WHERE bot_id = '{{ bot_id }}' --required
AND bot_version = '{{ bot_version }}' --required
AND locale_id = '{{ locale_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
