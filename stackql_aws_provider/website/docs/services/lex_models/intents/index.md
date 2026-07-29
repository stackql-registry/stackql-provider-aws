--- 
title: intents
hide_title: false
hide_table_of_contents: false
keywords:
  - intents
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

Creates, updates, deletes, gets or lists an <code>intents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="intents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lex_models.intents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_intent"
    values={[
        { label: 'get_intent', value: 'get_intent' },
        { label: 'get_intents', value: 'get_intents' }
    ]}
>
<TabItem value="get_intent">

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
    <td>The name of the intent. (pattern: &lt;code&gt;^(&#91;A-Za-z&#93;_?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Checksum of the intent.</td>
</tr>
<tr>
    <td><CopyableCode code="conclusion_statement" /></td>
    <td><code>object</code></td>
    <td>After the Lambda function specified in the fulfillmentActivity element fulfills the intent, Amazon Lex conveys this statement to the user.</td>
</tr>
<tr>
    <td><CopyableCode code="confirmation_prompt" /></td>
    <td><code>object</code></td>
    <td>If defined in the bot, Amazon Lex uses prompt to confirm the intent before fulfilling the user's request. For more information, see PutIntent.</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the intent was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the intent.</td>
</tr>
<tr>
    <td><CopyableCode code="dialog_code_hook" /></td>
    <td><code>object</code></td>
    <td>If defined in the bot, Amazon Amazon Lex invokes this Lambda function for each user input. For more information, see PutIntent.</td>
</tr>
<tr>
    <td><CopyableCode code="follow_up_prompt" /></td>
    <td><code>object</code></td>
    <td>If defined in the bot, Amazon Lex uses this prompt to solicit additional user activity after the intent is fulfilled. For more information, see PutIntent.</td>
</tr>
<tr>
    <td><CopyableCode code="fulfillment_activity" /></td>
    <td><code>object</code></td>
    <td>Describes how the intent is fulfilled. For more information, see PutIntent.</td>
</tr>
<tr>
    <td><CopyableCode code="input_contexts" /></td>
    <td><code>array</code></td>
    <td>An array of InputContext objects that lists the contexts that must be active for Amazon Lex to choose the intent in a conversation with the user.</td>
</tr>
<tr>
    <td><CopyableCode code="kendra_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration information, if any, to connect to an Amazon Kendra index with the AMAZON.KendraSearchIntent intent.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the intent was updated. When you create a resource, the creation date and the last updated date are the same.</td>
</tr>
<tr>
    <td><CopyableCode code="output_contexts" /></td>
    <td><code>array</code></td>
    <td>An array of OutputContext objects that lists the contexts that the intent activates when the intent is fulfilled.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_intent_signature" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for a built-in intent.</td>
</tr>
<tr>
    <td><CopyableCode code="rejection_statement" /></td>
    <td><code>object</code></td>
    <td>If the user answers "no" to the question defined in confirmationPrompt, Amazon Lex responds with this statement to acknowledge that the intent was canceled.</td>
</tr>
<tr>
    <td><CopyableCode code="sample_utterances" /></td>
    <td><code>array</code></td>
    <td>An array of sample utterances configured for the intent.</td>
</tr>
<tr>
    <td><CopyableCode code="slots" /></td>
    <td><code>array</code></td>
    <td>An array of intent slots configured for the intent.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the intent. (pattern: &lt;code&gt;\$LATEST|&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_intents">

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
    <td>The name of the intent. (pattern: &lt;code&gt;^(&#91;A-Za-z&#93;_?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the intent was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the intent.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the intent was updated. When you create an intent, the creation date and last updated date are the same.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the intent. (pattern: &lt;code&gt;\$LATEST|&#91;0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_intent"><CopyableCode code="get_intent" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an intent. In addition to the intent name, you must specify the intent version. This operation requires permissions to perform the lex:GetIntent action.</td>
</tr>
<tr>
    <td><a href="#get_intents"><CopyableCode code="get_intents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nameContains"><code>nameContains</code></a></td>
    <td>Returns intent information as follows: If you specify the nameContains field, returns the $LATEST version of all intents that contain the specified string. If you don't specify the nameContains field, returns information about the $LATEST version of all intents. The operation requires permission for the lex:GetIntents action.</td>
</tr>
<tr>
    <td><a href="#put_intent"><CopyableCode code="put_intent" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an intent or replaces an existing intent. To define the interaction between the user and your bot, you use one or more intents. For a pizza ordering bot, for example, you would create an OrderPizza intent. To create an intent or replace an existing intent, you must provide the following: Intent name. For example, OrderPizza. Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza." Information to be gathered. You specify slot types for the information that your bot will request from the user. You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust of a pizza. How the intent will be fulfilled. You can provide a Lambda function or configure the intent to return the intent information to the client application. If you use a Lambda function, when all of the intent information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the intent information to the client application. You can specify other optional information in the request, such as: A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?" A conclusion statement to send to the user after the intent has been fulfilled. For example, "I placed your pizza order." A follow-up prompt that asks the user for additional activity. For example, asking "Do you want to order a drink with your pizza?" If you specify an existing intent name to update the intent, Amazon Lex replaces the values in the $LATEST version of the intent with the values in the request. Amazon Lex removes fields that you don't provide in the request. If you don't specify the required fields, Amazon Lex throws an exception. When you update the $LATEST version of an intent, the status field of any bot that uses the $LATEST version of the intent is set to NOT_BUILT. For more information, see how-it-works. This operation requires permissions for the lex:PutIntent action.</td>
</tr>
<tr>
    <td><a href="#delete_intent"><CopyableCode code="delete_intent" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes all versions of the intent, including the $LATEST version. To delete a specific version of the intent, use the DeleteIntentVersion operation. You can delete a version of an intent only if it is not referenced. To delete an intent that is referred to in one or more bots (see how-it-works), you must remove those references first. If you get the ResourceInUseException exception, it provides an example reference that shows where the intent is referenced. To remove the reference to the intent, either update the bot or delete it. If you get the same exception when you attempt to delete the intent again, repeat until the intent has no references and the call to DeleteIntent is successful. This operation requires permission for the lex:DeleteIntent action.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the intent. The name is case sensitive.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the intent.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of intents to return in the response. The default is 10.</td>
</tr>
<tr id="parameter-nameContains">
    <td><CopyableCode code="nameContains" /></td>
    <td><code>string</code></td>
    <td>Substring to match in intent names. An intent will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token that fetches the next page of intents. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of intents, specify the pagination token in the next request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_intent"
    values={[
        { label: 'get_intent', value: 'get_intent' },
        { label: 'get_intents', value: 'get_intents' }
    ]}
>
<TabItem value="get_intent">

Returns information about an intent. In addition to the intent name, you must specify the intent version. This operation requires permissions to perform the lex:GetIntent action.

```sql
SELECT
name,
checksum,
conclusion_statement,
confirmation_prompt,
created_date,
description,
dialog_code_hook,
follow_up_prompt,
fulfillment_activity,
input_contexts,
kendra_configuration,
last_updated_date,
output_contexts,
parent_intent_signature,
rejection_statement,
sample_utterances,
slots,
version
FROM aws.lex_models.intents
WHERE name = '{{ name }}' -- required
AND version = '{{ version }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_intents">

Returns intent information as follows: If you specify the nameContains field, returns the $LATEST version of all intents that contain the specified string. If you don't specify the nameContains field, returns information about the $LATEST version of all intents. The operation requires permission for the lex:GetIntents action.

```sql
SELECT
name,
created_date,
description,
last_updated_date,
version
FROM aws.lex_models.intents
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
    defaultValue="put_intent"
    values={[
        { label: 'put_intent', value: 'put_intent' }
    ]}
>
<TabItem value="put_intent">

Creates an intent or replaces an existing intent. To define the interaction between the user and your bot, you use one or more intents. For a pizza ordering bot, for example, you would create an OrderPizza intent. To create an intent or replace an existing intent, you must provide the following: Intent name. For example, OrderPizza. Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza." Information to be gathered. You specify slot types for the information that your bot will request from the user. You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust of a pizza. How the intent will be fulfilled. You can provide a Lambda function or configure the intent to return the intent information to the client application. If you use a Lambda function, when all of the intent information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the intent information to the client application. You can specify other optional information in the request, such as: A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?" A conclusion statement to send to the user after the intent has been fulfilled. For example, "I placed your pizza order." A follow-up prompt that asks the user for additional activity. For example, asking "Do you want to order a drink with your pizza?" If you specify an existing intent name to update the intent, Amazon Lex replaces the values in the $LATEST version of the intent with the values in the request. Amazon Lex removes fields that you don't provide in the request. If you don't specify the required fields, Amazon Lex throws an exception. When you update the $LATEST version of an intent, the status field of any bot that uses the $LATEST version of the intent is set to NOT_BUILT. For more information, see how-it-works. This operation requires permissions for the lex:PutIntent action.

```sql
REPLACE aws.lex_models.intents
SET 
description = '{{ description }}',
slots = '{{ slots }}',
sampleUtterances = '{{ sampleUtterances }}',
confirmationPrompt = '{{ confirmationPrompt }}',
rejectionStatement = '{{ rejectionStatement }}',
followUpPrompt = '{{ followUpPrompt }}',
conclusionStatement = '{{ conclusionStatement }}',
dialogCodeHook = '{{ dialogCodeHook }}',
fulfillmentActivity = '{{ fulfillmentActivity }}',
parentIntentSignature = '{{ parentIntentSignature }}',
checksum = '{{ checksum }}',
createVersion = {{ createVersion }},
kendraConfiguration = '{{ kendraConfiguration }}',
inputContexts = '{{ inputContexts }}',
outputContexts = '{{ outputContexts }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
RETURNING
name,
checksum,
conclusion_statement,
confirmation_prompt,
create_version,
created_date,
description,
dialog_code_hook,
follow_up_prompt,
fulfillment_activity,
input_contexts,
kendra_configuration,
last_updated_date,
output_contexts,
parent_intent_signature,
rejection_statement,
sample_utterances,
slots,
version;
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

Deletes all versions of the intent, including the $LATEST version. To delete a specific version of the intent, use the DeleteIntentVersion operation. You can delete a version of an intent only if it is not referenced. To delete an intent that is referred to in one or more bots (see how-it-works), you must remove those references first. If you get the ResourceInUseException exception, it provides an example reference that shows where the intent is referenced. To remove the reference to the intent, either update the bot or delete it. If you get the same exception when you attempt to delete the intent again, repeat until the intent has no references and the call to DeleteIntent is successful. This operation requires permission for the lex:DeleteIntent action.

```sql
DELETE FROM aws.lex_models.intents
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
