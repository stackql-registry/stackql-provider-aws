--- 
title: migrations
hide_title: false
hide_table_of_contents: false
keywords:
  - migrations
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

Creates, updates, deletes, gets or lists a <code>migrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="migrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lex_models.migrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_migration"
    values={[
        { label: 'get_migration', value: 'get_migration' },
        { label: 'get_migrations', value: 'get_migrations' }
    ]}
>
<TabItem value="get_migration">

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
    <td><CopyableCode code="alerts" /></td>
    <td><code>array</code></td>
    <td>A list of alerts and warnings that indicate issues with the migration for the Amazon Lex V1 bot to Amazon Lex V2. You receive a warning when an Amazon Lex V1 feature has a different implementation if Amazon Lex V2. For more information, see Migrating a bot in the Amazon Lex V2 developer guide.</td>
</tr>
<tr>
    <td><CopyableCode code="migration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the migration. This is the same as the identifier used when calling the GetMigration operation. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="migration_status" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of the migration. When the status is COMPLETE the migration is finished and the bot is available in Amazon Lex V2. There may be alerts and warnings that need to be resolved to complete the migration. (IN_PROGRESS, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="migration_strategy" /></td>
    <td><code>string</code></td>
    <td>The strategy used to conduct the migration. CREATE_NEW - Creates a new Amazon Lex V2 bot and migrates the Amazon Lex V1 bot to the new bot. UPDATE_EXISTING - Overwrites the existing Amazon Lex V2 bot metadata and the locale being migrated. It doesn't change any other locales in the Amazon Lex V2 bot. If the locale doesn't exist, a new locale is created in the Amazon Lex V2 bot. (CREATE_NEW, UPDATE_EXISTING)</td>
</tr>
<tr>
    <td><CopyableCode code="migration_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the migration started.</td>
</tr>
<tr>
    <td><CopyableCode code="v_1_bot_locale" /></td>
    <td><code>string</code></td>
    <td>The locale of the Amazon Lex V1 bot migrated to Amazon Lex V2. (de-DE, en-AU, en-GB, en-IN, en-US, es-419, es-ES, es-US, fr-FR, fr-CA, it-IT, ja-JP, ko-KR)</td>
</tr>
<tr>
    <td><CopyableCode code="v_1_bot_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Lex V1 bot migrated to Amazon Lex V2. (pattern: &lt;code&gt;^(&#91;A-Za-z&#93;_?)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="v_1_bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the Amazon Lex V1 bot migrated to Amazon Lex V2. (pattern: &lt;code&gt;\$LATEST|&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="v_2_bot_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Lex V2 bot that the Amazon Lex V1 is being migrated to. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="v_2_bot_role" /></td>
    <td><code>string</code></td>
    <td>The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot. (pattern: &lt;code&gt;^arn:&#91;\w\-&#93;+:iam::&#91;\d&#93;&#123;12&#125;:role/.+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_migrations">

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
    <td><CopyableCode code="migration_summaries" /></td>
    <td><code>array</code></td>
    <td>An array of summaries for migrations from Amazon Lex V1 to Amazon Lex V2. To see details of the migration, use the migrationId from the summary in a call to the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If the response is truncated, it includes a pagination token that you can specify in your next request to fetch the next page of migrations.</td>
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
    <td><a href="#get_migration"><CopyableCode code="get_migration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-migration_id"><code>migration_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about an ongoing or complete migration from an Amazon Lex V1 bot to an Amazon Lex V2 bot. Use this operation to view the migration alerts and warnings related to the migration.</td>
</tr>
<tr>
    <td><a href="#get_migrations"><CopyableCode code="get_migrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-sortByAttribute"><code>sortByAttribute</code></a>, <a href="#parameter-sortByOrder"><code>sortByOrder</code></a>, <a href="#parameter-v1BotNameContains"><code>v1BotNameContains</code></a>, <a href="#parameter-migrationStatusEquals"><code>migrationStatusEquals</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.</td>
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
<tr id="parameter-migration_id">
    <td><CopyableCode code="migration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the migration to view. The migrationID is returned by the operation.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of migrations to return in the response. The default is 10.</td>
</tr>
<tr id="parameter-migrationStatusEquals">
    <td><CopyableCode code="migrationStatusEquals" /></td>
    <td><code>string</code></td>
    <td>Filters the list to contain only migrations in the specified state.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token that fetches the next page of migrations. If the response to this operation is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of migrations, specify the pagination token in the request.</td>
</tr>
<tr id="parameter-sortByAttribute">
    <td><CopyableCode code="sortByAttribute" /></td>
    <td><code>string</code></td>
    <td>The field to sort the list of migrations by. You can sort by the Amazon Lex V1 bot name or the date and time that the migration was started.</td>
</tr>
<tr id="parameter-sortByOrder">
    <td><CopyableCode code="sortByOrder" /></td>
    <td><code>string</code></td>
    <td>The order so sort the list.</td>
</tr>
<tr id="parameter-v1BotNameContains">
    <td><CopyableCode code="v1BotNameContains" /></td>
    <td><code>string</code></td>
    <td>Filters the list to contain only bots whose name contains the specified string. The string is matched anywhere in bot name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_migration"
    values={[
        { label: 'get_migration', value: 'get_migration' },
        { label: 'get_migrations', value: 'get_migrations' }
    ]}
>
<TabItem value="get_migration">

Provides details about an ongoing or complete migration from an Amazon Lex V1 bot to an Amazon Lex V2 bot. Use this operation to view the migration alerts and warnings related to the migration.

```sql
SELECT
alerts,
migration_id,
migration_status,
migration_strategy,
migration_timestamp,
v_1_bot_locale,
v_1_bot_name,
v_1_bot_version,
v_2_bot_id,
v_2_bot_role
FROM aws.lex_models.migrations
WHERE migration_id = '{{ migration_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_migrations">

Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.

```sql
SELECT
migration_summaries,
next_token
FROM aws.lex_models.migrations
WHERE region = '{{ region }}' -- required
AND sortByAttribute = '{{ sortByAttribute }}'
AND sortByOrder = '{{ sortByOrder }}'
AND v1BotNameContains = '{{ v1BotNameContains }}'
AND migrationStatusEquals = '{{ migrationStatusEquals }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
