--- 
title: associated_transcripts
hide_title: false
hide_table_of_contents: false
keywords:
  - associated_transcripts
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

Creates, updates, deletes, gets or lists an <code>associated_transcripts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="associated_transcripts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.associated_transcripts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_associated_transcripts"
    values={[
        { label: 'search_associated_transcripts', value: 'search_associated_transcripts' }
    ]}
>
<TabItem value="search_associated_transcripts">

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
    <td><CopyableCode code="associatedTranscripts" /></td>
    <td><code>array</code></td>
    <td>The object that contains the associated transcript that meet the criteria you specified.</td>
</tr>
<tr>
    <td><CopyableCode code="botId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the bot associated with the transcripts that you are searching. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botRecommendationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the bot recommendation associated with the transcripts to search. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the bot containing the transcripts that you are searching. (pattern: &lt;code&gt;^(DRAFT|&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="localeId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the language and locale of the transcripts to search. The string must match one of the supported locales. For more information, see Supported languages</td>
</tr>
<tr>
    <td><CopyableCode code="nextIndex" /></td>
    <td><code>integer</code></td>
    <td>A index that indicates whether there are more results to return in a response to the SearchAssociatedTranscripts operation. If the nextIndex field is present, you send the contents as the nextIndex parameter of a SearchAssociatedTranscriptsRequest operation to get the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="totalResults" /></td>
    <td><code>integer</code></td>
    <td>The total number of transcripts returned by the search.</td>
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
    <td><a href="#search_associated_transcripts"><CopyableCode code="search_associated_transcripts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-bot_recommendation_id"><code>bot_recommendation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Search for associated transcripts that meet the specified criteria.</td>
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
    <td>The unique identifier of the bot associated with the transcripts that you are searching.</td>
</tr>
<tr id="parameter-bot_recommendation_id">
    <td><CopyableCode code="bot_recommendation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the bot recommendation associated with the transcripts to search.</td>
</tr>
<tr id="parameter-bot_version">
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot containing the transcripts that you are searching.</td>
</tr>
<tr id="parameter-locale_id">
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the language and locale of the transcripts to search. The string must match one of the supported locales. For more information, see Supported languages</td>
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
    defaultValue="search_associated_transcripts"
    values={[
        { label: 'search_associated_transcripts', value: 'search_associated_transcripts' }
    ]}
>
<TabItem value="search_associated_transcripts">

Search for associated transcripts that meet the specified criteria.

```sql
SELECT
associatedTranscripts,
botId,
botRecommendationId,
botVersion,
localeId,
nextIndex,
totalResults
FROM aws.lexv2_models.associated_transcripts
WHERE bot_id = '{{ bot_id }}' -- required
AND bot_version = '{{ bot_version }}' -- required
AND locale_id = '{{ locale_id }}' -- required
AND bot_recommendation_id = '{{ bot_recommendation_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
