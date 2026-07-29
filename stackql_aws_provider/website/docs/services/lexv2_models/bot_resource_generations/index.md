--- 
title: bot_resource_generations
hide_title: false
hide_table_of_contents: false
keywords:
  - bot_resource_generations
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

Creates, updates, deletes, gets or lists a <code>bot_resource_generations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bot_resource_generations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.bot_resource_generations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_bot_resource_generation"
    values={[
        { label: 'describe_bot_resource_generation', value: 'describe_bot_resource_generation' },
        { label: 'list_bot_resource_generations', value: 'list_bot_resource_generations' }
    ]}
>
<TabItem value="describe_bot_resource_generation">

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
    <td>The unique identifier of the bot for which the generation request was made. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot for which the generation request was made. (pattern: &lt;code&gt;^(DRAFT|&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the item was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reasons" /></td>
    <td><code>array</code></td>
    <td>A list of reasons why the generation of bot resources through natural language description failed.</td>
</tr>
<tr>
    <td><CopyableCode code="generated_bot_locale_url" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 location of the generated bot locale configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="generation_id" /></td>
    <td><code>string</code></td>
    <td>The generation ID for which to return the generation details. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="generation_input_prompt" /></td>
    <td><code>string</code></td>
    <td>The prompt used in the generation request.</td>
</tr>
<tr>
    <td><CopyableCode code="generation_status" /></td>
    <td><code>string</code></td>
    <td>The status of the generation request. (Failed, Complete, InProgress)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the generated item was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The locale of the bot for which the generation request was made.</td>
</tr>
<tr>
    <td><CopyableCode code="model_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the model used to generate the bot resources. (pattern: &lt;code&gt;^arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;::foundation-model\/&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;&#123;1&#125;(&#91;a-z0-9-&#93;&#123;1,63&#125;&#91;.&#93;)&#123;0,2&#125;&#91;a-z0-9-&#93;&#123;1,63&#125;(&#91;:&#93;&#91;a-z0-9-&#93;&#123;1,63&#125;)&#123;0,2&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_bot_resource_generations">

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
    <td>The unique identifier of the bot for which the generation requests were made. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot for which the generation requests were made. (pattern: &lt;code&gt;^(DRAFT|&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="generation_summaries" /></td>
    <td><code>array</code></td>
    <td>A list of objects, each containing information about a generation request for the bot locale.</td>
</tr>
<tr>
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The locale of the bot for which the generation requests were made.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the number specified in the maxResults, the response returns a token in the nextToken field. Use this token when making a request to return the next batch of results.</td>
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
    <td><a href="#describe_bot_resource_generation"><CopyableCode code="describe_bot_resource_generation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-generation_id"><code>generation_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a request to generate a bot through natural language description, made through the StartBotResource API. Use the generatedBotLocaleUrl to retrieve the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration.</td>
</tr>
<tr>
    <td><a href="#list_bot_resource_generations"><CopyableCode code="list_bot_resource_generations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-locale_id"><code>locale_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the generation requests made for a bot locale.</td>
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
    <td>The unique identifier of the bot whose generation requests you want to view.</td>
</tr>
<tr id="parameter-bot_version">
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot whose generation requests you want to view.</td>
</tr>
<tr id="parameter-generation_id">
    <td><CopyableCode code="generation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the generation request for which to return the generation details.</td>
</tr>
<tr id="parameter-locale_id">
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The locale of the bot whose generation requests you want to view.</td>
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
    defaultValue="describe_bot_resource_generation"
    values={[
        { label: 'describe_bot_resource_generation', value: 'describe_bot_resource_generation' },
        { label: 'list_bot_resource_generations', value: 'list_bot_resource_generations' }
    ]}
>
<TabItem value="describe_bot_resource_generation">

Returns information about a request to generate a bot through natural language description, made through the StartBotResource API. Use the generatedBotLocaleUrl to retrieve the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration.

```sql
SELECT
bot_id,
bot_version,
creation_date_time,
failure_reasons,
generated_bot_locale_url,
generation_id,
generation_input_prompt,
generation_status,
last_updated_date_time,
locale_id,
model_arn
FROM aws.lexv2_models.bot_resource_generations
WHERE bot_id = '{{ bot_id }}' -- required
AND bot_version = '{{ bot_version }}' -- required
AND locale_id = '{{ locale_id }}' -- required
AND generation_id = '{{ generation_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_bot_resource_generations">

Lists the generation requests made for a bot locale.

```sql
SELECT
bot_id,
bot_version,
generation_summaries,
locale_id,
next_token
FROM aws.lexv2_models.bot_resource_generations
WHERE bot_id = '{{ bot_id }}' -- required
AND bot_version = '{{ bot_version }}' -- required
AND locale_id = '{{ locale_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
