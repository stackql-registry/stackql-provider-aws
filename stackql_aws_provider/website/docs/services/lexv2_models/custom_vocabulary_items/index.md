--- 
title: custom_vocabulary_items
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_vocabulary_items
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

Creates, updates, deletes, gets or lists a <code>custom_vocabulary_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_vocabulary_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.custom_vocabulary_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_custom_vocabulary_items"
    values={[
        { label: 'list_custom_vocabulary_items', value: 'list_custom_vocabulary_items' }
    ]}
>
<TabItem value="list_custom_vocabulary_items">

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
    <td>The identifier of the bot associated with this custom vocabulary. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botVersion" /></td>
    <td><code>string</code></td>
    <td>The identifier of the version of the bot associated with this custom vocabulary. (pattern: &lt;code&gt;^(DRAFT|&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="customVocabularyItems" /></td>
    <td><code>array</code></td>
    <td>The custom vocabulary items from the list custom vocabulary response.</td>
</tr>
<tr>
    <td><CopyableCode code="localeId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see Supported Languages .</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken identifier to the list custom vocabulary response.</td>
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
    <td><a href="#list_custom_vocabulary_items"><CopyableCode code="list_custom_vocabulary_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Paginated list of custom vocabulary items for a given bot locale's custom vocabulary.</td>
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
    <td>The identifier of the version of the bot associated with this custom vocabulary.</td>
</tr>
<tr id="parameter-bot_version">
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The bot version of the bot to the list custom vocabulary request.</td>
</tr>
<tr id="parameter-locale_id">
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see Supported languages (https:​//docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).</td>
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
    defaultValue="list_custom_vocabulary_items"
    values={[
        { label: 'list_custom_vocabulary_items', value: 'list_custom_vocabulary_items' }
    ]}
>
<TabItem value="list_custom_vocabulary_items">

Paginated list of custom vocabulary items for a given bot locale's custom vocabulary.

```sql
SELECT
botId,
botVersion,
customVocabularyItems,
localeId,
nextToken
FROM aws.lexv2_models.custom_vocabulary_items
WHERE bot_id = '{{ bot_id }}' -- required
AND bot_version = '{{ bot_version }}' -- required
AND locale_id = '{{ locale_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
