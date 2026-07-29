--- 
title: slots
hide_title: false
hide_table_of_contents: false
keywords:
  - slots
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

Creates, updates, deletes, gets or lists a <code>slots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="slots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.slots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_slot"
    values={[
        { label: 'describe_slot', value: 'describe_slot' },
        { label: 'list_slots', value: 'list_slots' }
    ]}
>
<TabItem value="describe_slot">

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
    <td>The identifier of the bot associated with the slot. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot associated with the slot. (pattern: &lt;code&gt;^(DRAFT|&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of the date and time that the slot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description specified for the slot.</td>
</tr>
<tr>
    <td><CopyableCode code="intent_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the intent associated with the slot. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of the date and time that the slot was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The language and locale specified for the slot.</td>
</tr>
<tr>
    <td><CopyableCode code="multiple_values_setting" /></td>
    <td><code>object</code></td>
    <td>Indicates whether a slot can return multiple values.</td>
</tr>
<tr>
    <td><CopyableCode code="obfuscation_setting" /></td>
    <td><code>object</code></td>
    <td>Determines whether Amazon Lex obscures slot values in conversation logs.</td>
</tr>
<tr>
    <td><CopyableCode code="slot_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier generated for the slot. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="slot_name" /></td>
    <td><code>string</code></td>
    <td>The name specified for the slot. (pattern: &lt;code&gt;^(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="slot_type_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the slot type that determines the values entered into the slot. (pattern: &lt;code&gt;^((AMAZON\.)&#91;a-zA-Z_&#93;+?|&#91;0-9a-zA-Z&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sub_slot_setting" /></td>
    <td><code>object</code></td>
    <td>Specifications for the constituent sub slots and the expression for the composite slot.</td>
</tr>
<tr>
    <td><CopyableCode code="value_elicitation_setting" /></td>
    <td><code>object</code></td>
    <td>Specifies the elicitation setting details eliciting a slot.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_slots">

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
    <td>The identifier of the bot that contains the slots. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot that contains the slots. (pattern: &lt;code&gt;^(DRAFT|&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="intent_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the intent that contains the slots. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The language and locale of the slots in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token that indicates whether there are more results to return in a response to the ListSlots operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListSlots operation request to get the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="slot_summaries" /></td>
    <td><code>array</code></td>
    <td>Summary information for the slots that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter of the request. If there are more slots available, the nextToken field contains a token to get the next page of results.</td>
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
    <td><a href="#describe_slot"><CopyableCode code="describe_slot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-slot_id"><code>slot_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-intent_id"><code>intent_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets metadata information about a slot.</td>
</tr>
<tr>
    <td><a href="#list_slots"><CopyableCode code="list_slots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-intent_id"><code>intent_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of slots that match the specified criteria.</td>
</tr>
<tr>
    <td><a href="#create_slot"><CopyableCode code="create_slot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-intent_id"><code>intent_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-slotName"><code>slotName</code></a>, <a href="#parameter-valueElicitationSetting"><code>valueElicitationSetting</code></a></td>
    <td></td>
    <td>Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an OrderPizza intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user.</td>
</tr>
<tr>
    <td><a href="#update_slot"><CopyableCode code="update_slot" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-slot_id"><code>slot_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-intent_id"><code>intent_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-slotName"><code>slotName</code></a>, <a href="#parameter-valueElicitationSetting"><code>valueElicitationSetting</code></a></td>
    <td></td>
    <td>Updates the settings for a slot.</td>
</tr>
<tr>
    <td><a href="#delete_slot"><CopyableCode code="delete_slot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-slot_id"><code>slot_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-intent_id"><code>intent_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified slot from an intent.</td>
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
    <td>The identifier of the bot associated with the slot to delete.</td>
</tr>
<tr id="parameter-bot_version">
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot associated with the slot to delete.</td>
</tr>
<tr id="parameter-intent_id">
    <td><CopyableCode code="intent_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the intent associated with the slot.</td>
</tr>
<tr id="parameter-locale_id">
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the language and locale that the slot will be deleted from. The string must match one of the supported locales. For more information, see Supported languages.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-slot_id">
    <td><CopyableCode code="slot_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the slot to delete.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_slot"
    values={[
        { label: 'describe_slot', value: 'describe_slot' },
        { label: 'list_slots', value: 'list_slots' }
    ]}
>
<TabItem value="describe_slot">

Gets metadata information about a slot.

```sql
SELECT
bot_id,
bot_version,
creation_date_time,
description,
intent_id,
last_updated_date_time,
locale_id,
multiple_values_setting,
obfuscation_setting,
slot_id,
slot_name,
slot_type_id,
sub_slot_setting,
value_elicitation_setting
FROM aws.lexv2_models.slots
WHERE slot_id = '{{ slot_id }}' -- required
AND bot_id = '{{ bot_id }}' -- required
AND bot_version = '{{ bot_version }}' -- required
AND locale_id = '{{ locale_id }}' -- required
AND intent_id = '{{ intent_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_slots">

Gets a list of slots that match the specified criteria.

```sql
SELECT
bot_id,
bot_version,
intent_id,
locale_id,
next_token,
slot_summaries
FROM aws.lexv2_models.slots
WHERE bot_id = '{{ bot_id }}' -- required
AND bot_version = '{{ bot_version }}' -- required
AND locale_id = '{{ locale_id }}' -- required
AND intent_id = '{{ intent_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_slot"
    values={[
        { label: 'create_slot', value: 'create_slot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_slot">

Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an OrderPizza intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user.

```sql
INSERT INTO aws.lexv2_models.slots (
slotName,
description,
slotTypeId,
valueElicitationSetting,
obfuscationSetting,
multipleValuesSetting,
subSlotSetting,
bot_id,
bot_version,
locale_id,
intent_id,
region
)
SELECT 
'{{ slotName }}' /* required */,
'{{ description }}',
'{{ slotTypeId }}',
'{{ valueElicitationSetting }}' /* required */,
'{{ obfuscationSetting }}',
'{{ multipleValuesSetting }}',
'{{ subSlotSetting }}',
'{{ bot_id }}',
'{{ bot_version }}',
'{{ locale_id }}',
'{{ intent_id }}',
'{{ region }}'
RETURNING
bot_id,
bot_version,
creation_date_time,
description,
intent_id,
locale_id,
multiple_values_setting,
obfuscation_setting,
slot_id,
slot_name,
slot_type_id,
sub_slot_setting,
value_elicitation_setting
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: slots
  props:
    - name: bot_id
      value: "{{ bot_id }}"
      description: Required parameter for the slots resource.
    - name: bot_version
      value: "{{ bot_version }}"
      description: Required parameter for the slots resource.
    - name: locale_id
      value: "{{ locale_id }}"
      description: Required parameter for the slots resource.
    - name: intent_id
      value: "{{ intent_id }}"
      description: Required parameter for the slots resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the slots resource.
    - name: slotName
      value: "{{ slotName }}"
    - name: description
      value: "{{ description }}"
    - name: slotTypeId
      value: "{{ slotTypeId }}"
    - name: valueElicitationSetting
      description: |
        Specifies the elicitation setting details eliciting a slot.
      value:
        defaultValueSpecification:
          defaultValueList:
            - defaultValue: "{{ defaultValue }}"
        slotConstraint: "{{ slotConstraint }}"
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
        sampleUtterances:
          - utterance: "{{ utterance }}"
        waitAndContinueSpecification:
          waitingResponse:
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            allowInterrupt: {{ allowInterrupt }}
          continueResponse:
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            allowInterrupt: {{ allowInterrupt }}
          stillWaitingResponse:
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            frequencyInSeconds: {{ frequencyInSeconds }}
            timeoutInSeconds: {{ timeoutInSeconds }}
            allowInterrupt: {{ allowInterrupt }}
          active: {{ active }}
        slotCaptureSetting:
          captureResponse:
            messageGroups:
              - message:
                  plainTextMessage: "{{ plainTextMessage }}"
                  customPayload: "{{ customPayload }}"
                  ssmlMessage: "{{ ssmlMessage }}"
                  imageResponseCard: "{{ imageResponseCard }}"
                variations: "{{ variations }}"
            allowInterrupt: {{ allowInterrupt }}
          captureNextStep:
            dialogAction:
              type_: "{{ type_ }}"
              slotToElicit: "{{ slotToElicit }}"
              suppressNextMessage: {{ suppressNextMessage }}
            intent:
              name: "{{ name }}"
              slots: "{{ slots }}"
            sessionAttributes: "{{ sessionAttributes }}"
          captureConditional:
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
              nextStep:
                dialogAction: "{{ dialogAction }}"
                intent: "{{ intent }}"
                sessionAttributes: "{{ sessionAttributes }}"
              response:
                messageGroups: "{{ messageGroups }}"
                allowInterrupt: {{ allowInterrupt }}
          codeHook:
            enableCodeHookInvocation: {{ enableCodeHookInvocation }}
            active: {{ active }}
            invocationLabel: "{{ invocationLabel }}"
            postCodeHookSpecification:
              successResponse:
                messageGroups: "{{ messageGroups }}"
                allowInterrupt: {{ allowInterrupt }}
              successNextStep:
                dialogAction: "{{ dialogAction }}"
                intent: "{{ intent }}"
                sessionAttributes: "{{ sessionAttributes }}"
              successConditional:
                active: {{ active }}
                conditionalBranches: "{{ conditionalBranches }}"
                defaultBranch: "{{ defaultBranch }}"
              failureResponse:
                messageGroups: "{{ messageGroups }}"
                allowInterrupt: {{ allowInterrupt }}
              failureNextStep:
                dialogAction: "{{ dialogAction }}"
                intent: "{{ intent }}"
                sessionAttributes: "{{ sessionAttributes }}"
              failureConditional:
                active: {{ active }}
                conditionalBranches: "{{ conditionalBranches }}"
                defaultBranch: "{{ defaultBranch }}"
              timeoutResponse:
                messageGroups: "{{ messageGroups }}"
                allowInterrupt: {{ allowInterrupt }}
              timeoutNextStep:
                dialogAction: "{{ dialogAction }}"
                intent: "{{ intent }}"
                sessionAttributes: "{{ sessionAttributes }}"
              timeoutConditional:
                active: {{ active }}
                conditionalBranches: "{{ conditionalBranches }}"
                defaultBranch: "{{ defaultBranch }}"
          elicitationCodeHook:
            enableCodeHookInvocation: {{ enableCodeHookInvocation }}
            invocationLabel: "{{ invocationLabel }}"
        slotResolutionSetting:
          slotResolutionStrategy: "{{ slotResolutionStrategy }}"
    - name: obfuscationSetting
      description: |
        Determines whether Amazon Lex obscures slot values in conversation logs.
      value:
        obfuscationSettingType: "{{ obfuscationSettingType }}"
    - name: multipleValuesSetting
      description: |
        Indicates whether a slot can return multiple values.
      value:
        allowMultipleValues: {{ allowMultipleValues }}
    - name: subSlotSetting
      description: |
        Specifications for the constituent sub slots and the expression for the composite slot.
      value:
        expression: "{{ expression }}"
        slotSpecifications: "{{ slotSpecifications }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_slot"
    values={[
        { label: 'update_slot', value: 'update_slot' }
    ]}
>
<TabItem value="update_slot">

Updates the settings for a slot.

```sql
UPDATE aws.lexv2_models.slots
SET 
slotName = '{{ slotName }}',
description = '{{ description }}',
slotTypeId = '{{ slotTypeId }}',
valueElicitationSetting = '{{ valueElicitationSetting }}',
obfuscationSetting = '{{ obfuscationSetting }}',
multipleValuesSetting = '{{ multipleValuesSetting }}',
subSlotSetting = '{{ subSlotSetting }}'
WHERE 
slot_id = '{{ slot_id }}' --required
AND bot_id = '{{ bot_id }}' --required
AND bot_version = '{{ bot_version }}' --required
AND locale_id = '{{ locale_id }}' --required
AND intent_id = '{{ intent_id }}' --required
AND region = '{{ region }}' --required
AND slotName = '{{ slotName }}' --required
AND valueElicitationSetting = '{{ valueElicitationSetting }}' --required
RETURNING
bot_id,
bot_version,
creation_date_time,
description,
intent_id,
last_updated_date_time,
locale_id,
multiple_values_setting,
obfuscation_setting,
slot_id,
slot_name,
slot_type_id,
sub_slot_setting,
value_elicitation_setting;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_slot"
    values={[
        { label: 'delete_slot', value: 'delete_slot' }
    ]}
>
<TabItem value="delete_slot">

Deletes the specified slot from an intent.

```sql
DELETE FROM aws.lexv2_models.slots
WHERE slot_id = '{{ slot_id }}' --required
AND bot_id = '{{ bot_id }}' --required
AND bot_version = '{{ bot_version }}' --required
AND locale_id = '{{ locale_id }}' --required
AND intent_id = '{{ intent_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
