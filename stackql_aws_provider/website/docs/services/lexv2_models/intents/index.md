--- 
title: intents
hide_title: false
hide_table_of_contents: false
keywords:
  - intents
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

Creates, updates, deletes, gets or lists an <code>intents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="intents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.intents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_intent"
    values={[
        { label: 'describe_intent', value: 'describe_intent' },
        { label: 'list_intents', value: 'list_intents' }
    ]}
>
<TabItem value="describe_intent">

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
    <td>The identifier of the bot associated with the intent. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the bot associated with the intent. (pattern: &lt;code&gt;^DRAFT$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of the date and time that the intent was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the intent.</td>
</tr>
<tr>
    <td><CopyableCode code="dialogCodeHook" /></td>
    <td><code>object</code></td>
    <td>Settings that determine the Lambda function that Amazon Lex uses for processing user responses.</td>
</tr>
<tr>
    <td><CopyableCode code="fulfillmentCodeHook" /></td>
    <td><code>object</code></td>
    <td>Determines if a Lambda function should be invoked for a specific intent.</td>
</tr>
<tr>
    <td><CopyableCode code="initialResponseSetting" /></td>
    <td><code>object</code></td>
    <td>Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.</td>
</tr>
<tr>
    <td><CopyableCode code="inputContexts" /></td>
    <td><code>array</code></td>
    <td>A list of contexts that must be active for the intent to be considered for sending to the user.</td>
</tr>
<tr>
    <td><CopyableCode code="intentClosingSetting" /></td>
    <td><code>object</code></td>
    <td>Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.</td>
</tr>
<tr>
    <td><CopyableCode code="intentConfirmationSetting" /></td>
    <td><code>object</code></td>
    <td>Provides a prompt for making sure that the user is ready for the intent to be fulfilled.</td>
</tr>
<tr>
    <td><CopyableCode code="intentDisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name specified for the intent.</td>
</tr>
<tr>
    <td><CopyableCode code="intentId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier assigned to the intent when it was created. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="intentName" /></td>
    <td><code>string</code></td>
    <td>The name specified for the intent. (pattern: &lt;code&gt;^(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kendraConfiguration" /></td>
    <td><code>object</code></td>
    <td>Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of the date and time that the intent was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="localeId" /></td>
    <td><code>string</code></td>
    <td>The language and locale specified for the intent.</td>
</tr>
<tr>
    <td><CopyableCode code="outputContexts" /></td>
    <td><code>array</code></td>
    <td>A list of contexts that are activated when the intent is fulfilled.</td>
</tr>
<tr>
    <td><CopyableCode code="parentIntentSignature" /></td>
    <td><code>string</code></td>
    <td>The identifier of the built-in intent that this intent is derived from, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="qInConnectIntentConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration details of the Qinconnect intent.</td>
</tr>
<tr>
    <td><CopyableCode code="qnAIntentConfiguration" /></td>
    <td><code>object</code></td>
    <td>Details about the the configuration of the built-in Amazon.QnAIntent.</td>
</tr>
<tr>
    <td><CopyableCode code="sampleUtterances" /></td>
    <td><code>array</code></td>
    <td>User utterances that trigger this intent.</td>
</tr>
<tr>
    <td><CopyableCode code="slotPriorities" /></td>
    <td><code>array</code></td>
    <td>The list that determines the priority that slots should be elicited from the user.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_intents">

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
    <td>The identifier of the bot that contains the intent. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the bot that contains the intent. (pattern: &lt;code&gt;^(DRAFT|&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="intentSummaries" /></td>
    <td><code>array</code></td>
    <td>Summary information for the intents that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter of the request. If there are more intents available, the nextToken field contains a token to get the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="localeId" /></td>
    <td><code>string</code></td>
    <td>The language and locale of the intents in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates whether there are more results to return in a response to the ListIntents operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListIntents operation request to get the next page of results.</td>
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
    <td><a href="#describe_intent"><CopyableCode code="describe_intent" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-intent_id"><code>intent_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns metadata about an intent.</td>
</tr>
<tr>
    <td><a href="#list_intents"><CopyableCode code="list_intents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a list of intents that meet the specified criteria.</td>
</tr>
<tr>
    <td><a href="#create_intent"><CopyableCode code="create_intent" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-intentName"><code>intentName</code></a></td>
    <td></td>
    <td>Creates an intent. To define the interaction between the user and your bot, you define one or more intents. For example, for a pizza ordering bot you would create an OrderPizza intent. When you create an intent, you must provide a name. You can optionally provide the following: Sample utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can't provide utterances for built-in intents. Information to be gathered. You specify slots for the information that you bot requests from the user. You can specify standard slot types, such as date and time, or custom slot types for your application. How the intent is fulfilled. You can provide a Lambda function or configure the intent to return the intent information to your client application. If you use a Lambda function, Amazon Lex invokes the function when all of the intent information is available. A confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?" A conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza." A follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with your pizza?"</td>
</tr>
<tr>
    <td><a href="#update_intent"><CopyableCode code="update_intent" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-intent_id"><code>intent_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-intentName"><code>intentName</code></a></td>
    <td></td>
    <td>Updates the settings for an intent.</td>
</tr>
<tr>
    <td><a href="#delete_intent"><CopyableCode code="delete_intent" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-intent_id"><code>intent_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified intent. Deleting an intent also deletes the slots associated with the intent.</td>
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
    <td>The identifier of the bot associated with the intent.</td>
</tr>
<tr id="parameter-bot_version">
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot associated with the intent.</td>
</tr>
<tr id="parameter-intent_id">
    <td><CopyableCode code="intent_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the intent to delete.</td>
</tr>
<tr id="parameter-locale_id">
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the language and locale where the bot will be deleted. The string must match one of the supported locales. For more information, see Supported languages.</td>
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
    defaultValue="describe_intent"
    values={[
        { label: 'describe_intent', value: 'describe_intent' },
        { label: 'list_intents', value: 'list_intents' }
    ]}
>
<TabItem value="describe_intent">

Returns metadata about an intent.

```sql
SELECT
botId,
botVersion,
creationDateTime,
description,
dialogCodeHook,
fulfillmentCodeHook,
initialResponseSetting,
inputContexts,
intentClosingSetting,
intentConfirmationSetting,
intentDisplayName,
intentId,
intentName,
kendraConfiguration,
lastUpdatedDateTime,
localeId,
outputContexts,
parentIntentSignature,
qInConnectIntentConfiguration,
qnAIntentConfiguration,
sampleUtterances,
slotPriorities
FROM aws.lexv2_models.intents
WHERE intent_id = '{{ intent_id }}' -- required
AND bot_id = '{{ bot_id }}' -- required
AND bot_version = '{{ bot_version }}' -- required
AND locale_id = '{{ locale_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_intents">

Get a list of intents that meet the specified criteria.

```sql
SELECT
botId,
botVersion,
intentSummaries,
localeId,
nextToken
FROM aws.lexv2_models.intents
WHERE bot_id = '{{ bot_id }}' -- required
AND bot_version = '{{ bot_version }}' -- required
AND locale_id = '{{ locale_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_intent"
    values={[
        { label: 'create_intent', value: 'create_intent' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_intent">

Creates an intent. To define the interaction between the user and your bot, you define one or more intents. For example, for a pizza ordering bot you would create an OrderPizza intent. When you create an intent, you must provide a name. You can optionally provide the following: Sample utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can't provide utterances for built-in intents. Information to be gathered. You specify slots for the information that you bot requests from the user. You can specify standard slot types, such as date and time, or custom slot types for your application. How the intent is fulfilled. You can provide a Lambda function or configure the intent to return the intent information to your client application. If you use a Lambda function, Amazon Lex invokes the function when all of the intent information is available. A confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?" A conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza." A follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with your pizza?"

```sql
INSERT INTO aws.lexv2_models.intents (
intentName,
intentDisplayName,
description,
parentIntentSignature,
sampleUtterances,
dialogCodeHook,
fulfillmentCodeHook,
intentConfirmationSetting,
intentClosingSetting,
inputContexts,
outputContexts,
kendraConfiguration,
initialResponseSetting,
qnAIntentConfiguration,
qInConnectIntentConfiguration,
bot_id,
bot_version,
locale_id,
region
)
SELECT 
'{{ intentName }}' /* required */,
'{{ intentDisplayName }}',
'{{ description }}',
'{{ parentIntentSignature }}',
'{{ sampleUtterances }}',
'{{ dialogCodeHook }}',
'{{ fulfillmentCodeHook }}',
'{{ intentConfirmationSetting }}',
'{{ intentClosingSetting }}',
'{{ inputContexts }}',
'{{ outputContexts }}',
'{{ kendraConfiguration }}',
'{{ initialResponseSetting }}',
'{{ qnAIntentConfiguration }}',
'{{ qInConnectIntentConfiguration }}',
'{{ bot_id }}',
'{{ bot_version }}',
'{{ locale_id }}',
'{{ region }}'
RETURNING
botId,
botVersion,
creationDateTime,
description,
dialogCodeHook,
fulfillmentCodeHook,
initialResponseSetting,
inputContexts,
intentClosingSetting,
intentConfirmationSetting,
intentDisplayName,
intentId,
intentName,
kendraConfiguration,
localeId,
outputContexts,
parentIntentSignature,
qInConnectIntentConfiguration,
qnAIntentConfiguration,
sampleUtterances
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: intents
  props:
    - name: bot_id
      value: "{{ bot_id }}"
      description: Required parameter for the intents resource.
    - name: bot_version
      value: "{{ bot_version }}"
      description: Required parameter for the intents resource.
    - name: locale_id
      value: "{{ locale_id }}"
      description: Required parameter for the intents resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the intents resource.
    - name: intentName
      value: "{{ intentName }}"
    - name: intentDisplayName
      value: "{{ intentDisplayName }}"
    - name: description
      value: "{{ description }}"
    - name: parentIntentSignature
      value: "{{ parentIntentSignature }}"
    - name: sampleUtterances
      value:
        - utterance: "{{ utterance }}"
    - name: dialogCodeHook
      description: |
        Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
      value:
        enabled: {{ enabled }}
    - name: fulfillmentCodeHook
      description: |
        Determines if a Lambda function should be invoked for a specific intent.
      value:
        enabled: {{ enabled }}
        postFulfillmentStatusSpecification:
          successResponse:
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            allowInterrupt: {{ allowInterrupt }}
          failureResponse:
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            allowInterrupt: {{ allowInterrupt }}
          timeoutResponse:
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            allowInterrupt: {{ allowInterrupt }}
          successNextStep:
            dialogAction:
              type_: "{{ type_ }}"
              slotToElicit: "{{ slotToElicit }}"
              suppressNextMessage: {{ suppressNextMessage }}
            intent:
              name: "{{ name }}"
              slots: "{{ slots }}"
            sessionAttributes: "{{ sessionAttributes }}"
          successConditional:
            active: {{ active }}
            conditionalBranches:
              - name: "{{ name }}"
                condition:
                  expressionString: "{{ expressionString }}"
                nextStep:
                  dialogAction: "{{ dialogAction }}"
                  intent: "{{ intent }}"
                  sessionAttributes: "{{ sessionAttributes }}"
                response:
                  messageGroups: "{{ messageGroups }}"
                  allowInterrupt: {{ allowInterrupt }}
            defaultBranch:
              nextStep:
                dialogAction: "{{ dialogAction }}"
                intent: "{{ intent }}"
                sessionAttributes: "{{ sessionAttributes }}"
              response:
                messageGroups: "{{ messageGroups }}"
                allowInterrupt: {{ allowInterrupt }}
          failureNextStep:
            dialogAction:
              type_: "{{ type_ }}"
              slotToElicit: "{{ slotToElicit }}"
              suppressNextMessage: {{ suppressNextMessage }}
            intent:
              name: "{{ name }}"
              slots: "{{ slots }}"
            sessionAttributes: "{{ sessionAttributes }}"
          failureConditional:
            active: {{ active }}
            conditionalBranches:
              - name: "{{ name }}"
                condition:
                  expressionString: "{{ expressionString }}"
                nextStep:
                  dialogAction: "{{ dialogAction }}"
                  intent: "{{ intent }}"
                  sessionAttributes: "{{ sessionAttributes }}"
                response:
                  messageGroups: "{{ messageGroups }}"
                  allowInterrupt: {{ allowInterrupt }}
            defaultBranch:
              nextStep:
                dialogAction: "{{ dialogAction }}"
                intent: "{{ intent }}"
                sessionAttributes: "{{ sessionAttributes }}"
              response:
                messageGroups: "{{ messageGroups }}"
                allowInterrupt: {{ allowInterrupt }}
          timeoutNextStep:
            dialogAction:
              type_: "{{ type_ }}"
              slotToElicit: "{{ slotToElicit }}"
              suppressNextMessage: {{ suppressNextMessage }}
            intent:
              name: "{{ name }}"
              slots: "{{ slots }}"
            sessionAttributes: "{{ sessionAttributes }}"
          timeoutConditional:
            active: {{ active }}
            conditionalBranches:
              - name: "{{ name }}"
                condition:
                  expressionString: "{{ expressionString }}"
                nextStep:
                  dialogAction: "{{ dialogAction }}"
                  intent: "{{ intent }}"
                  sessionAttributes: "{{ sessionAttributes }}"
                response:
                  messageGroups: "{{ messageGroups }}"
                  allowInterrupt: {{ allowInterrupt }}
            defaultBranch:
              nextStep:
                dialogAction: "{{ dialogAction }}"
                intent: "{{ intent }}"
                sessionAttributes: "{{ sessionAttributes }}"
              response:
                messageGroups: "{{ messageGroups }}"
                allowInterrupt: {{ allowInterrupt }}
        fulfillmentUpdatesSpecification:
          active: {{ active }}
          startResponse:
            delayInSeconds: {{ delayInSeconds }}
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            allowInterrupt: {{ allowInterrupt }}
          updateResponse:
            frequencyInSeconds: {{ frequencyInSeconds }}
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            allowInterrupt: {{ allowInterrupt }}
          timeoutInSeconds: {{ timeoutInSeconds }}
        active: {{ active }}
    - name: intentConfirmationSetting
      description: |
        Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
      value:
        promptSpecification:
          messageGroups:
            - message:
                plainTextMessage:
                  value: "{{ value }}"
                customPayload:
                  value: "{{ value }}"
                ssmlMessage:
                  value: "{{ value }}"
                imageResponseCard:
                  title_: "{{ title_ }}"
                  subtitle: "{{ subtitle }}"
                  imageUrl: "{{ imageUrl }}"
                  buttons: "{{ buttons }}"
              variations: "{{ variations }}"
          maxRetries: {{ maxRetries }}
          allowInterrupt: {{ allowInterrupt }}
          messageSelectionStrategy: "{{ messageSelectionStrategy }}"
          promptAttemptsSpecification: "{{ promptAttemptsSpecification }}"
        declinationResponse:
          messageGroups:
            - message:
                plainTextMessage:
                  value: "{{ value }}"
                customPayload:
                  value: "{{ value }}"
                ssmlMessage:
                  value: "{{ value }}"
                imageResponseCard:
                  title_: "{{ title_ }}"
                  subtitle: "{{ subtitle }}"
                  imageUrl: "{{ imageUrl }}"
                  buttons: "{{ buttons }}"
              variations: "{{ variations }}"
          allowInterrupt: {{ allowInterrupt }}
        active: {{ active }}
        confirmationResponse:
          messageGroups:
            - message:
                plainTextMessage:
                  value: "{{ value }}"
                customPayload:
                  value: "{{ value }}"
                ssmlMessage:
                  value: "{{ value }}"
                imageResponseCard:
                  title_: "{{ title_ }}"
                  subtitle: "{{ subtitle }}"
                  imageUrl: "{{ imageUrl }}"
                  buttons: "{{ buttons }}"
              variations: "{{ variations }}"
          allowInterrupt: {{ allowInterrupt }}
        confirmationNextStep:
          dialogAction:
            type_: "{{ type_ }}"
            slotToElicit: "{{ slotToElicit }}"
            suppressNextMessage: {{ suppressNextMessage }}
          intent:
            name: "{{ name }}"
            slots: "{{ slots }}"
          sessionAttributes: "{{ sessionAttributes }}"
        confirmationConditional:
          active: {{ active }}
          conditionalBranches:
            - name: "{{ name }}"
              condition:
                expressionString: "{{ expressionString }}"
              nextStep:
                dialogAction:
                  type_: "{{ type_ }}"
                  slotToElicit: "{{ slotToElicit }}"
                  suppressNextMessage: {{ suppressNextMessage }}
                intent:
                  name: "{{ name }}"
                  slots: "{{ slots }}"
                sessionAttributes: "{{ sessionAttributes }}"
              response:
                messageGroups:
                  - message:
                      plainTextMessage: "{{ plainTextMessage }}"
                      customPayload: "{{ customPayload }}"
                      ssmlMessage: "{{ ssmlMessage }}"
                      imageResponseCard: "{{ imageResponseCard }}"
                    variations: "{{ variations }}"
                allowInterrupt: {{ allowInterrupt }}
          defaultBranch:
            nextStep:
              dialogAction:
                type_: "{{ type_ }}"
                slotToElicit: "{{ slotToElicit }}"
                suppressNextMessage: {{ suppressNextMessage }}
              intent:
                name: "{{ name }}"
                slots: "{{ slots }}"
              sessionAttributes: "{{ sessionAttributes }}"
            response:
              messageGroups:
                - message:
                    plainTextMessage: "{{ plainTextMessage }}"
                    customPayload: "{{ customPayload }}"
                    ssmlMessage: "{{ ssmlMessage }}"
                    imageResponseCard: "{{ imageResponseCard }}"
                  variations: "{{ variations }}"
              allowInterrupt: {{ allowInterrupt }}
        declinationNextStep:
          dialogAction:
            type_: "{{ type_ }}"
            slotToElicit: "{{ slotToElicit }}"
            suppressNextMessage: {{ suppressNextMessage }}
          intent:
            name: "{{ name }}"
            slots: "{{ slots }}"
          sessionAttributes: "{{ sessionAttributes }}"
        declinationConditional:
          active: {{ active }}
          conditionalBranches:
            - name: "{{ name }}"
              condition:
                expressionString: "{{ expressionString }}"
              nextStep:
                dialogAction:
                  type_: "{{ type_ }}"
                  slotToElicit: "{{ slotToElicit }}"
                  suppressNextMessage: {{ suppressNextMessage }}
                intent:
                  name: "{{ name }}"
                  slots: "{{ slots }}"
                sessionAttributes: "{{ sessionAttributes }}"
              response:
                messageGroups:
                  - message:
                      plainTextMessage: "{{ plainTextMessage }}"
                      customPayload: "{{ customPayload }}"
                      ssmlMessage: "{{ ssmlMessage }}"
                      imageResponseCard: "{{ imageResponseCard }}"
                    variations: "{{ variations }}"
                allowInterrupt: {{ allowInterrupt }}
          defaultBranch:
            nextStep:
              dialogAction:
                type_: "{{ type_ }}"
                slotToElicit: "{{ slotToElicit }}"
                suppressNextMessage: {{ suppressNextMessage }}
              intent:
                name: "{{ name }}"
                slots: "{{ slots }}"
              sessionAttributes: "{{ sessionAttributes }}"
            response:
              messageGroups:
                - message:
                    plainTextMessage: "{{ plainTextMessage }}"
                    customPayload: "{{ customPayload }}"
                    ssmlMessage: "{{ ssmlMessage }}"
                    imageResponseCard: "{{ imageResponseCard }}"
                  variations: "{{ variations }}"
              allowInterrupt: {{ allowInterrupt }}
        failureResponse:
          messageGroups:
            - message:
                plainTextMessage:
                  value: "{{ value }}"
                customPayload:
                  value: "{{ value }}"
                ssmlMessage:
                  value: "{{ value }}"
                imageResponseCard:
                  title_: "{{ title_ }}"
                  subtitle: "{{ subtitle }}"
                  imageUrl: "{{ imageUrl }}"
                  buttons: "{{ buttons }}"
              variations: "{{ variations }}"
          allowInterrupt: {{ allowInterrupt }}
        failureNextStep:
          dialogAction:
            type_: "{{ type_ }}"
            slotToElicit: "{{ slotToElicit }}"
            suppressNextMessage: {{ suppressNextMessage }}
          intent:
            name: "{{ name }}"
            slots: "{{ slots }}"
          sessionAttributes: "{{ sessionAttributes }}"
        failureConditional:
          active: {{ active }}
          conditionalBranches:
            - name: "{{ name }}"
              condition:
                expressionString: "{{ expressionString }}"
              nextStep:
                dialogAction:
                  type_: "{{ type_ }}"
                  slotToElicit: "{{ slotToElicit }}"
                  suppressNextMessage: {{ suppressNextMessage }}
                intent:
                  name: "{{ name }}"
                  slots: "{{ slots }}"
                sessionAttributes: "{{ sessionAttributes }}"
              response:
                messageGroups:
                  - message:
                      plainTextMessage: "{{ plainTextMessage }}"
                      customPayload: "{{ customPayload }}"
                      ssmlMessage: "{{ ssmlMessage }}"
                      imageResponseCard: "{{ imageResponseCard }}"
                    variations: "{{ variations }}"
                allowInterrupt: {{ allowInterrupt }}
          defaultBranch:
            nextStep:
              dialogAction:
                type_: "{{ type_ }}"
                slotToElicit: "{{ slotToElicit }}"
                suppressNextMessage: {{ suppressNextMessage }}
              intent:
                name: "{{ name }}"
                slots: "{{ slots }}"
              sessionAttributes: "{{ sessionAttributes }}"
            response:
              messageGroups:
                - message:
                    plainTextMessage: "{{ plainTextMessage }}"
                    customPayload: "{{ customPayload }}"
                    ssmlMessage: "{{ ssmlMessage }}"
                    imageResponseCard: "{{ imageResponseCard }}"
                  variations: "{{ variations }}"
              allowInterrupt: {{ allowInterrupt }}
        codeHook:
          enableCodeHookInvocation: {{ enableCodeHookInvocation }}
          active: {{ active }}
          invocationLabel: "{{ invocationLabel }}"
          postCodeHookSpecification:
            successResponse:
              messageGroups:
                - message:
                    plainTextMessage: "{{ plainTextMessage }}"
                    customPayload: "{{ customPayload }}"
                    ssmlMessage: "{{ ssmlMessage }}"
                    imageResponseCard: "{{ imageResponseCard }}"
                  variations: "{{ variations }}"
              allowInterrupt: {{ allowInterrupt }}
            successNextStep:
              dialogAction:
                type_: "{{ type_ }}"
                slotToElicit: "{{ slotToElicit }}"
                suppressNextMessage: {{ suppressNextMessage }}
              intent:
                name: "{{ name }}"
                slots: "{{ slots }}"
              sessionAttributes: "{{ sessionAttributes }}"
            successConditional:
              active: {{ active }}
              conditionalBranches:
                - name: "{{ name }}"
                  condition:
                    expressionString: "{{ expressionString }}"
                  nextStep:
                    dialogAction: "{{ dialogAction }}"
                    intent: "{{ intent }}"
                    sessionAttributes: "{{ sessionAttributes }}"
                  response:
                    messageGroups: "{{ messageGroups }}"
                    allowInterrupt: {{ allowInterrupt }}
              defaultBranch:
                nextStep: "{{ nextStep }}"
                response: "{{ response }}"
            failureResponse:
              messageGroups:
                - message:
                    plainTextMessage: "{{ plainTextMessage }}"
                    customPayload: "{{ customPayload }}"
                    ssmlMessage: "{{ ssmlMessage }}"
                    imageResponseCard: "{{ imageResponseCard }}"
                  variations: "{{ variations }}"
              allowInterrupt: {{ allowInterrupt }}
            failureNextStep:
              dialogAction:
                type_: "{{ type_ }}"
                slotToElicit: "{{ slotToElicit }}"
                suppressNextMessage: {{ suppressNextMessage }}
              intent:
                name: "{{ name }}"
                slots: "{{ slots }}"
              sessionAttributes: "{{ sessionAttributes }}"
            failureConditional:
              active: {{ active }}
              conditionalBranches:
                - name: "{{ name }}"
                  condition:
                    expressionString: "{{ expressionString }}"
                  nextStep:
                    dialogAction: "{{ dialogAction }}"
                    intent: "{{ intent }}"
                    sessionAttributes: "{{ sessionAttributes }}"
                  response:
                    messageGroups: "{{ messageGroups }}"
                    allowInterrupt: {{ allowInterrupt }}
              defaultBranch:
                nextStep: "{{ nextStep }}"
                response: "{{ response }}"
            timeoutResponse:
              messageGroups:
                - message:
                    plainTextMessage: "{{ plainTextMessage }}"
                    customPayload: "{{ customPayload }}"
                    ssmlMessage: "{{ ssmlMessage }}"
                    imageResponseCard: "{{ imageResponseCard }}"
                  variations: "{{ variations }}"
              allowInterrupt: {{ allowInterrupt }}
            timeoutNextStep:
              dialogAction:
                type_: "{{ type_ }}"
                slotToElicit: "{{ slotToElicit }}"
                suppressNextMessage: {{ suppressNextMessage }}
              intent:
                name: "{{ name }}"
                slots: "{{ slots }}"
              sessionAttributes: "{{ sessionAttributes }}"
            timeoutConditional:
              active: {{ active }}
              conditionalBranches:
                - name: "{{ name }}"
                  condition:
                    expressionString: "{{ expressionString }}"
                  nextStep:
                    dialogAction: "{{ dialogAction }}"
                    intent: "{{ intent }}"
                    sessionAttributes: "{{ sessionAttributes }}"
                  response:
                    messageGroups: "{{ messageGroups }}"
                    allowInterrupt: {{ allowInterrupt }}
              defaultBranch:
                nextStep: "{{ nextStep }}"
                response: "{{ response }}"
        elicitationCodeHook:
          enableCodeHookInvocation: {{ enableCodeHookInvocation }}
          invocationLabel: "{{ invocationLabel }}"
    - name: intentClosingSetting
      description: |
        Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
      value:
        closingResponse:
          messageGroups:
            - message:
                plainTextMessage:
                  value: "{{ value }}"
                customPayload:
                  value: "{{ value }}"
                ssmlMessage:
                  value: "{{ value }}"
                imageResponseCard:
                  title_: "{{ title_ }}"
                  subtitle: "{{ subtitle }}"
                  imageUrl: "{{ imageUrl }}"
                  buttons: "{{ buttons }}"
              variations: "{{ variations }}"
          allowInterrupt: {{ allowInterrupt }}
        active: {{ active }}
        nextStep:
          dialogAction:
            type_: "{{ type_ }}"
            slotToElicit: "{{ slotToElicit }}"
            suppressNextMessage: {{ suppressNextMessage }}
          intent:
            name: "{{ name }}"
            slots: "{{ slots }}"
          sessionAttributes: "{{ sessionAttributes }}"
        conditional:
          active: {{ active }}
          conditionalBranches:
            - name: "{{ name }}"
              condition:
                expressionString: "{{ expressionString }}"
              nextStep:
                dialogAction:
                  type_: "{{ type_ }}"
                  slotToElicit: "{{ slotToElicit }}"
                  suppressNextMessage: {{ suppressNextMessage }}
                intent:
                  name: "{{ name }}"
                  slots: "{{ slots }}"
                sessionAttributes: "{{ sessionAttributes }}"
              response:
                messageGroups:
                  - message:
                      plainTextMessage: "{{ plainTextMessage }}"
                      customPayload: "{{ customPayload }}"
                      ssmlMessage: "{{ ssmlMessage }}"
                      imageResponseCard: "{{ imageResponseCard }}"
                    variations: "{{ variations }}"
                allowInterrupt: {{ allowInterrupt }}
          defaultBranch:
            nextStep:
              dialogAction:
                type_: "{{ type_ }}"
                slotToElicit: "{{ slotToElicit }}"
                suppressNextMessage: {{ suppressNextMessage }}
              intent:
                name: "{{ name }}"
                slots: "{{ slots }}"
              sessionAttributes: "{{ sessionAttributes }}"
            response:
              messageGroups:
                - message:
                    plainTextMessage: "{{ plainTextMessage }}"
                    customPayload: "{{ customPayload }}"
                    ssmlMessage: "{{ ssmlMessage }}"
                    imageResponseCard: "{{ imageResponseCard }}"
                  variations: "{{ variations }}"
              allowInterrupt: {{ allowInterrupt }}
    - name: inputContexts
      value:
        - name: "{{ name }}"
    - name: outputContexts
      value:
        - name: "{{ name }}"
          timeToLiveInSeconds: {{ timeToLiveInSeconds }}
          turnsToLive: {{ turnsToLive }}
    - name: kendraConfiguration
      description: |
        Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance.
      value:
        kendraIndex: "{{ kendraIndex }}"
        queryFilterStringEnabled: {{ queryFilterStringEnabled }}
        queryFilterString: "{{ queryFilterString }}"
    - name: initialResponseSetting
      description: |
        Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
      value:
        initialResponse:
          messageGroups:
            - message:
                plainTextMessage:
                  value: "{{ value }}"
                customPayload:
                  value: "{{ value }}"
                ssmlMessage:
                  value: "{{ value }}"
                imageResponseCard:
                  title_: "{{ title_ }}"
                  subtitle: "{{ subtitle }}"
                  imageUrl: "{{ imageUrl }}"
                  buttons: "{{ buttons }}"
              variations: "{{ variations }}"
          allowInterrupt: {{ allowInterrupt }}
        nextStep:
          dialogAction:
            type_: "{{ type_ }}"
            slotToElicit: "{{ slotToElicit }}"
            suppressNextMessage: {{ suppressNextMessage }}
          intent:
            name: "{{ name }}"
            slots: "{{ slots }}"
          sessionAttributes: "{{ sessionAttributes }}"
        conditional:
          active: {{ active }}
          conditionalBranches:
            - name: "{{ name }}"
              condition:
                expressionString: "{{ expressionString }}"
              nextStep:
                dialogAction:
                  type_: "{{ type_ }}"
                  slotToElicit: "{{ slotToElicit }}"
                  suppressNextMessage: {{ suppressNextMessage }}
                intent:
                  name: "{{ name }}"
                  slots: "{{ slots }}"
                sessionAttributes: "{{ sessionAttributes }}"
              response:
                messageGroups:
                  - message:
                      plainTextMessage: "{{ plainTextMessage }}"
                      customPayload: "{{ customPayload }}"
                      ssmlMessage: "{{ ssmlMessage }}"
                      imageResponseCard: "{{ imageResponseCard }}"
                    variations: "{{ variations }}"
                allowInterrupt: {{ allowInterrupt }}
          defaultBranch:
            nextStep:
              dialogAction:
                type_: "{{ type_ }}"
                slotToElicit: "{{ slotToElicit }}"
                suppressNextMessage: {{ suppressNextMessage }}
              intent:
                name: "{{ name }}"
                slots: "{{ slots }}"
              sessionAttributes: "{{ sessionAttributes }}"
            response:
              messageGroups:
                - message:
                    plainTextMessage: "{{ plainTextMessage }}"
                    customPayload: "{{ customPayload }}"
                    ssmlMessage: "{{ ssmlMessage }}"
                    imageResponseCard: "{{ imageResponseCard }}"
                  variations: "{{ variations }}"
              allowInterrupt: {{ allowInterrupt }}
        codeHook:
          enableCodeHookInvocation: {{ enableCodeHookInvocation }}
          active: {{ active }}
          invocationLabel: "{{ invocationLabel }}"
          postCodeHookSpecification:
            successResponse:
              messageGroups:
                - message:
                    plainTextMessage: "{{ plainTextMessage }}"
                    customPayload: "{{ customPayload }}"
                    ssmlMessage: "{{ ssmlMessage }}"
                    imageResponseCard: "{{ imageResponseCard }}"
                  variations: "{{ variations }}"
              allowInterrupt: {{ allowInterrupt }}
            successNextStep:
              dialogAction:
                type_: "{{ type_ }}"
                slotToElicit: "{{ slotToElicit }}"
                suppressNextMessage: {{ suppressNextMessage }}
              intent:
                name: "{{ name }}"
                slots: "{{ slots }}"
              sessionAttributes: "{{ sessionAttributes }}"
            successConditional:
              active: {{ active }}
              conditionalBranches:
                - name: "{{ name }}"
                  condition:
                    expressionString: "{{ expressionString }}"
                  nextStep:
                    dialogAction: "{{ dialogAction }}"
                    intent: "{{ intent }}"
                    sessionAttributes: "{{ sessionAttributes }}"
                  response:
                    messageGroups: "{{ messageGroups }}"
                    allowInterrupt: {{ allowInterrupt }}
              defaultBranch:
                nextStep: "{{ nextStep }}"
                response: "{{ response }}"
            failureResponse:
              messageGroups:
                - message:
                    plainTextMessage: "{{ plainTextMessage }}"
                    customPayload: "{{ customPayload }}"
                    ssmlMessage: "{{ ssmlMessage }}"
                    imageResponseCard: "{{ imageResponseCard }}"
                  variations: "{{ variations }}"
              allowInterrupt: {{ allowInterrupt }}
            failureNextStep:
              dialogAction:
                type_: "{{ type_ }}"
                slotToElicit: "{{ slotToElicit }}"
                suppressNextMessage: {{ suppressNextMessage }}
              intent:
                name: "{{ name }}"
                slots: "{{ slots }}"
              sessionAttributes: "{{ sessionAttributes }}"
            failureConditional:
              active: {{ active }}
              conditionalBranches:
                - name: "{{ name }}"
                  condition:
                    expressionString: "{{ expressionString }}"
                  nextStep:
                    dialogAction: "{{ dialogAction }}"
                    intent: "{{ intent }}"
                    sessionAttributes: "{{ sessionAttributes }}"
                  response:
                    messageGroups: "{{ messageGroups }}"
                    allowInterrupt: {{ allowInterrupt }}
              defaultBranch:
                nextStep: "{{ nextStep }}"
                response: "{{ response }}"
            timeoutResponse:
              messageGroups:
                - message:
                    plainTextMessage: "{{ plainTextMessage }}"
                    customPayload: "{{ customPayload }}"
                    ssmlMessage: "{{ ssmlMessage }}"
                    imageResponseCard: "{{ imageResponseCard }}"
                  variations: "{{ variations }}"
              allowInterrupt: {{ allowInterrupt }}
            timeoutNextStep:
              dialogAction:
                type_: "{{ type_ }}"
                slotToElicit: "{{ slotToElicit }}"
                suppressNextMessage: {{ suppressNextMessage }}
              intent:
                name: "{{ name }}"
                slots: "{{ slots }}"
              sessionAttributes: "{{ sessionAttributes }}"
            timeoutConditional:
              active: {{ active }}
              conditionalBranches:
                - name: "{{ name }}"
                  condition:
                    expressionString: "{{ expressionString }}"
                  nextStep:
                    dialogAction: "{{ dialogAction }}"
                    intent: "{{ intent }}"
                    sessionAttributes: "{{ sessionAttributes }}"
                  response:
                    messageGroups: "{{ messageGroups }}"
                    allowInterrupt: {{ allowInterrupt }}
              defaultBranch:
                nextStep: "{{ nextStep }}"
                response: "{{ response }}"
    - name: qnAIntentConfiguration
      description: |
        Details about the the configuration of the built-in Amazon.QnAIntent.
      value:
        dataSourceConfiguration:
          opensearchConfiguration:
            domainEndpoint: "{{ domainEndpoint }}"
            indexName: "{{ indexName }}"
            exactResponse: {{ exactResponse }}
            exactResponseFields:
              questionField: "{{ questionField }}"
              answerField: "{{ answerField }}"
            includeFields:
              - "{{ includeFields }}"
          kendraConfiguration:
            kendraIndex: "{{ kendraIndex }}"
            queryFilterStringEnabled: {{ queryFilterStringEnabled }}
            queryFilterString: "{{ queryFilterString }}"
            exactResponse: {{ exactResponse }}
          bedrockKnowledgeStoreConfiguration:
            bedrockKnowledgeBaseArn: "{{ bedrockKnowledgeBaseArn }}"
            exactResponse: {{ exactResponse }}
            exactResponseFields:
              answerField: "{{ answerField }}"
        bedrockModelConfiguration:
          modelArn: "{{ modelArn }}"
          guardrail:
            identifier: "{{ identifier }}"
            version: "{{ version }}"
          traceStatus: "{{ traceStatus }}"
          customPrompt: "{{ customPrompt }}"
    - name: qInConnectIntentConfiguration
      description: |
        The configuration details of the Qinconnect intent.
      value:
        qInConnectAssistantConfiguration:
          assistantArn: "{{ assistantArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_intent"
    values={[
        { label: 'update_intent', value: 'update_intent' }
    ]}
>
<TabItem value="update_intent">

Updates the settings for an intent.

```sql
UPDATE aws.lexv2_models.intents
SET 
intentName = '{{ intentName }}',
intentDisplayName = '{{ intentDisplayName }}',
description = '{{ description }}',
parentIntentSignature = '{{ parentIntentSignature }}',
sampleUtterances = '{{ sampleUtterances }}',
dialogCodeHook = '{{ dialogCodeHook }}',
fulfillmentCodeHook = '{{ fulfillmentCodeHook }}',
slotPriorities = '{{ slotPriorities }}',
intentConfirmationSetting = '{{ intentConfirmationSetting }}',
intentClosingSetting = '{{ intentClosingSetting }}',
inputContexts = '{{ inputContexts }}',
outputContexts = '{{ outputContexts }}',
kendraConfiguration = '{{ kendraConfiguration }}',
initialResponseSetting = '{{ initialResponseSetting }}',
qnAIntentConfiguration = '{{ qnAIntentConfiguration }}',
qInConnectIntentConfiguration = '{{ qInConnectIntentConfiguration }}'
WHERE 
intent_id = '{{ intent_id }}' --required
AND bot_id = '{{ bot_id }}' --required
AND bot_version = '{{ bot_version }}' --required
AND locale_id = '{{ locale_id }}' --required
AND region = '{{ region }}' --required
AND intentName = '{{ intentName }}' --required
RETURNING
botId,
botVersion,
creationDateTime,
description,
dialogCodeHook,
fulfillmentCodeHook,
initialResponseSetting,
inputContexts,
intentClosingSetting,
intentConfirmationSetting,
intentDisplayName,
intentId,
intentName,
kendraConfiguration,
lastUpdatedDateTime,
localeId,
outputContexts,
parentIntentSignature,
qInConnectIntentConfiguration,
qnAIntentConfiguration,
sampleUtterances,
slotPriorities;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_intent"
    values={[
        { label: 'delete_intent', value: 'delete_intent' }
    ]}
>
<TabItem value="delete_intent">

Removes the specified intent. Deleting an intent also deletes the slots associated with the intent.

```sql
DELETE FROM aws.lexv2_models.intents
WHERE intent_id = '{{ intent_id }}' --required
AND bot_id = '{{ bot_id }}' --required
AND bot_version = '{{ bot_version }}' --required
AND locale_id = '{{ locale_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
