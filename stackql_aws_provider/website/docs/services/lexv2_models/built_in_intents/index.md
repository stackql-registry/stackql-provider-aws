--- 
title: built_in_intents
hide_title: false
hide_table_of_contents: false
keywords:
  - built_in_intents
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

Creates, updates, deletes, gets or lists a <code>built_in_intents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="built_in_intents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.built_in_intents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_built_in_intents"
    values={[
        { label: 'list_built_in_intents', value: 'list_built_in_intents' }
    ]}
>
<TabItem value="list_built_in_intents">

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
    <td><CopyableCode code="builtInIntentSummaries" /></td>
    <td><code>array</code></td>
    <td>Summary information for the built-in intents that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter of the request. If there are more intents available, the nextToken field contains a token to get the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="localeId" /></td>
    <td><code>string</code></td>
    <td>The language and locale of the intents in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates whether there are more results to return in a response to the ListBuiltInIntents operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListBotAliases operation request to get the next page of results.</td>
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
    <td><a href="#list_built_in_intents"><CopyableCode code="list_built_in_intents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. To use a built-in intent as a the base for your own intent, include the built-in intent signature in the parentIntentSignature parameter when you call the CreateIntent operation. For more information, see CreateIntent.</td>
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
<tr id="parameter-locale_id">
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the language and locale of the intents to list. The string must match one of the supported locales. For more information, see Supported languages.</td>
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
    defaultValue="list_built_in_intents"
    values={[
        { label: 'list_built_in_intents', value: 'list_built_in_intents' }
    ]}
>
<TabItem value="list_built_in_intents">

Gets a list of built-in intents provided by Amazon Lex that you can use in your bot. To use a built-in intent as a the base for your own intent, include the built-in intent signature in the parentIntentSignature parameter when you call the CreateIntent operation. For more information, see CreateIntent.

```sql
SELECT
builtInIntentSummaries,
localeId,
nextToken
FROM aws.lexv2_models.built_in_intents
WHERE locale_id = '{{ locale_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
