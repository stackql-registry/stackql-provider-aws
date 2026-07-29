--- 
title: bot_alias
hide_title: false
hide_table_of_contents: false
keywords:
  - bot_alias
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

Creates, updates, deletes, gets or lists a <code>bot_alias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bot_alias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.bot_alias" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_bot_alias"
    values={[
        { label: 'describe_bot_alias', value: 'describe_bot_alias' }
    ]}
>
<TabItem value="describe_bot_alias">

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
    <td><CopyableCode code="bot_alias_history_events" /></td>
    <td><code>array</code></td>
    <td>A list of events that affect a bot alias. For example, an event is recorded when the version that the alias points to changes.</td>
</tr>
<tr>
    <td><CopyableCode code="bot_alias_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the bot alias. (pattern: &lt;code&gt;^(\bTSTALIASID\b|&#91;0-9a-zA-Z&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_alias_locale_settings" /></td>
    <td><code>object</code></td>
    <td>The locale settings that are unique to the alias.</td>
</tr>
<tr>
    <td><CopyableCode code="bot_alias_name" /></td>
    <td><code>string</code></td>
    <td>The name of the bot alias. (pattern: &lt;code&gt;^(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_alias_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the alias. When the alias is Available, the alias is ready for use with your bot. (Creating, Available, Deleting, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the bot associated with the bot alias. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot associated with the bot alias. (pattern: &lt;code&gt;^(DRAFT|&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="conversation_log_settings" /></td>
    <td><code>object</code></td>
    <td>Configures conversation logging that saves audio, text, and metadata for the conversations with your users.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of the date and time that the alias was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the bot alias.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of the date and time that the alias was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_bot_networks" /></td>
    <td><code>array</code></td>
    <td>A list of the networks to which the bot alias you described belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="sentiment_analysis_settings" /></td>
    <td><code>object</code></td>
    <td>Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.</td>
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
    <td><a href="#describe_bot_alias"><CopyableCode code="describe_bot_alias" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_alias_id"><code>bot_alias_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get information about a specific bot alias.</td>
</tr>
<tr>
    <td><a href="#create_bot_alias"><CopyableCode code="create_bot_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-botAliasName"><code>botAliasName</code></a></td>
    <td></td>
    <td>Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot. For example, you can create an alias called "PROD" that your applications use to call the Amazon Lex bot.</td>
</tr>
<tr>
    <td><a href="#update_bot_alias"><CopyableCode code="update_bot_alias" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bot_alias_id"><code>bot_alias_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-botAliasName"><code>botAliasName</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing bot alias.</td>
</tr>
<tr>
    <td><a href="#delete_bot_alias"><CopyableCode code="delete_bot_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bot_alias_id"><code>bot_alias_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-skipResourceInUseCheck"><code>skipResourceInUseCheck</code></a></td>
    <td>Deletes the specified bot alias.</td>
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
<tr id="parameter-bot_alias_id">
    <td><CopyableCode code="bot_alias_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the bot alias to delete.</td>
</tr>
<tr id="parameter-bot_id">
    <td><CopyableCode code="bot_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the bot associated with the alias to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-skipResourceInUseCheck">
    <td><CopyableCode code="skipResourceInUseCheck" /></td>
    <td><code>boolean</code></td>
    <td>By default, Amazon Lex checks if any other resource, such as a bot network, is using the bot alias before it is deleted and throws a ResourceInUseException exception if the alias is being used by another resource. Set this parameter to true to skip this check and remove the alias even if it is being used by another resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_bot_alias"
    values={[
        { label: 'describe_bot_alias', value: 'describe_bot_alias' }
    ]}
>
<TabItem value="describe_bot_alias">

Get information about a specific bot alias.

```sql
SELECT
bot_alias_history_events,
bot_alias_id,
bot_alias_locale_settings,
bot_alias_name,
bot_alias_status,
bot_id,
bot_version,
conversation_log_settings,
creation_date_time,
description,
last_updated_date_time,
parent_bot_networks,
sentiment_analysis_settings
FROM aws.lexv2_models.bot_alias
WHERE bot_alias_id = '{{ bot_alias_id }}' -- required
AND bot_id = '{{ bot_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_bot_alias"
    values={[
        { label: 'create_bot_alias', value: 'create_bot_alias' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_bot_alias">

Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot. For example, you can create an alias called "PROD" that your applications use to call the Amazon Lex bot.

```sql
INSERT INTO aws.lexv2_models.bot_alias (
botAliasName,
description,
botVersion,
botAliasLocaleSettings,
conversationLogSettings,
sentimentAnalysisSettings,
tags,
bot_id,
region
)
SELECT 
'{{ botAliasName }}' /* required */,
'{{ description }}',
'{{ botVersion }}',
'{{ botAliasLocaleSettings }}',
'{{ conversationLogSettings }}',
'{{ sentimentAnalysisSettings }}',
'{{ tags }}',
'{{ bot_id }}',
'{{ region }}'
RETURNING
bot_alias_id,
bot_alias_locale_settings,
bot_alias_name,
bot_alias_status,
bot_id,
bot_version,
conversation_log_settings,
creation_date_time,
description,
sentiment_analysis_settings,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: bot_alias
  props:
    - name: bot_id
      value: "{{ bot_id }}"
      description: Required parameter for the bot_alias resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the bot_alias resource.
    - name: botAliasName
      value: "{{ botAliasName }}"
    - name: description
      value: "{{ description }}"
    - name: botVersion
      value: "{{ botVersion }}"
    - name: botAliasLocaleSettings
      value: "{{ botAliasLocaleSettings }}"
    - name: conversationLogSettings
      description: |
        Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
      value:
        textLogSettings:
          - enabled: {{ enabled }}
            destination:
              cloudWatch:
                cloudWatchLogGroupArn: "{{ cloudWatchLogGroupArn }}"
                logPrefix: "{{ logPrefix }}"
            selectiveLoggingEnabled: {{ selectiveLoggingEnabled }}
        audioLogSettings:
          - enabled: {{ enabled }}
            destination:
              s3Bucket:
                kmsKeyArn: "{{ kmsKeyArn }}"
                s3BucketArn: "{{ s3BucketArn }}"
                logPrefix: "{{ logPrefix }}"
            selectiveLoggingEnabled: {{ selectiveLoggingEnabled }}
    - name: sentimentAnalysisSettings
      description: |
        Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
      value:
        detectSentiment: {{ detectSentiment }}
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_bot_alias"
    values={[
        { label: 'update_bot_alias', value: 'update_bot_alias' }
    ]}
>
<TabItem value="update_bot_alias">

Updates the configuration of an existing bot alias.

```sql
UPDATE aws.lexv2_models.bot_alias
SET 
botAliasName = '{{ botAliasName }}',
description = '{{ description }}',
botVersion = '{{ botVersion }}',
botAliasLocaleSettings = '{{ botAliasLocaleSettings }}',
conversationLogSettings = '{{ conversationLogSettings }}',
sentimentAnalysisSettings = '{{ sentimentAnalysisSettings }}'
WHERE 
bot_alias_id = '{{ bot_alias_id }}' --required
AND bot_id = '{{ bot_id }}' --required
AND region = '{{ region }}' --required
AND botAliasName = '{{ botAliasName }}' --required
RETURNING
bot_alias_id,
bot_alias_locale_settings,
bot_alias_name,
bot_alias_status,
bot_id,
bot_version,
conversation_log_settings,
creation_date_time,
description,
last_updated_date_time,
sentiment_analysis_settings;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bot_alias"
    values={[
        { label: 'delete_bot_alias', value: 'delete_bot_alias' }
    ]}
>
<TabItem value="delete_bot_alias">

Deletes the specified bot alias.

```sql
DELETE FROM aws.lexv2_models.bot_alias
WHERE bot_alias_id = '{{ bot_alias_id }}' --required
AND bot_id = '{{ bot_id }}' --required
AND region = '{{ region }}' --required
AND skipResourceInUseCheck = '{{ skipResourceInUseCheck }}'
;
```
</TabItem>
</Tabs>
