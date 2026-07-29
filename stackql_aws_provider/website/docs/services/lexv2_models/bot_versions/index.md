--- 
title: bot_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - bot_versions
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

Creates, updates, deletes, gets or lists a <code>bot_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bot_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.bot_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_bot_version"
    values={[
        { label: 'describe_bot_version', value: 'describe_bot_version' },
        { label: 'list_bot_versions', value: 'list_bot_versions' }
    ]}
>
<TabItem value="describe_bot_version">

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
    <td>The identifier of the bot that contains the version. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_members" /></td>
    <td><code>array</code></td>
    <td>The members of bot network in the version that was described.</td>
</tr>
<tr>
    <td><CopyableCode code="bot_name" /></td>
    <td><code>string</code></td>
    <td>The name of the bot that contains the version. (pattern: &lt;code&gt;^(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the bot. When the status is Available, the bot version is ready for use. (Creating, Available, Inactive, Deleting, Failed, Versioning, Importing, Updating)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_type" /></td>
    <td><code>string</code></td>
    <td>The type of the bot in the version that was described. (Bot, BotNetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot that was described. (pattern: &lt;code&gt;^&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of the date and time that the bot version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_privacy" /></td>
    <td><code>object</code></td>
    <td>By default, data stored by Amazon Lex is encrypted. The DataPrivacy structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description specified for the bot.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reasons" /></td>
    <td><code>array</code></td>
    <td>If the botStatus is Failed, this contains a list of reasons that the version couldn't be built.</td>
</tr>
<tr>
    <td><CopyableCode code="idle_session_ttl_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The number of seconds that a session with the bot remains active before it is discarded by Amazon Lex.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_bot_networks" /></td>
    <td><code>array</code></td>
    <td>A list of the networks to which the bot version you described belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot version. (pattern: &lt;code&gt;^arn:aws:iam::&#91;0-9&#93;&#123;12&#125;:role/.*$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_bot_versions">

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
    <td>The identifier of the bot to list versions for. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_version_summaries" /></td>
    <td><code>array</code></td>
    <td>Summary information for the bot versions that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter of the request. If there are more versions available, the nextToken field contains a token to get the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token that indicates whether there are more results to return in a response to the ListBotVersions operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListBotAliases operation request to get the next page of results.</td>
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
    <td><a href="#describe_bot_version"><CopyableCode code="describe_bot_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides metadata about a version of a bot.</td>
</tr>
<tr>
    <td><a href="#list_bot_versions"><CopyableCode code="list_bot_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about all of the versions of a bot. The ListBotVersions operation returns a summary of each version of a bot. For example, if a bot has three numbered versions, the ListBotVersions operation returns for summaries, one for each numbered version and one for the DRAFT version. The ListBotVersions operation always returns at least one version, the DRAFT version.</td>
</tr>
<tr>
    <td><a href="#create_bot_version"><CopyableCode code="create_bot_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-botVersionLocaleSpecification"><code>botVersionLocaleSpecification</code></a></td>
    <td></td>
    <td>Creates an immutable version of the bot. When you create the first version of a bot, Amazon Lex sets the version number to 1. Subsequent bot versions increase in an increment of 1. The version number will always represent the total number of versions created of the bot, not the current number of versions. If a bot version is deleted, that bot version number will not be reused.</td>
</tr>
<tr>
    <td><a href="#delete_bot_version"><CopyableCode code="delete_bot_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-bot_version"><code>bot_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-skipResourceInUseCheck"><code>skipResourceInUseCheck</code></a></td>
    <td>Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation.</td>
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
    <td>The identifier of the bot that contains the version.</td>
</tr>
<tr id="parameter-bot_version">
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-skipResourceInUseCheck">
    <td><CopyableCode code="skipResourceInUseCheck" /></td>
    <td><code>boolean</code></td>
    <td>By default, Amazon Lex checks if any other resource, such as an alias or bot network, is using the bot version before it is deleted and throws a ResourceInUseException exception if the version is being used by another resource. Set this parameter to true to skip this check and remove the version even if it is being used by another resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_bot_version"
    values={[
        { label: 'describe_bot_version', value: 'describe_bot_version' },
        { label: 'list_bot_versions', value: 'list_bot_versions' }
    ]}
>
<TabItem value="describe_bot_version">

Provides metadata about a version of a bot.

```sql
SELECT
bot_id,
bot_members,
bot_name,
bot_status,
bot_type,
bot_version,
creation_date_time,
data_privacy,
description,
failure_reasons,
idle_session_ttl_in_seconds,
parent_bot_networks,
role_arn
FROM aws.lexv2_models.bot_versions
WHERE bot_id = '{{ bot_id }}' -- required
AND bot_version = '{{ bot_version }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_bot_versions">

Gets information about all of the versions of a bot. The ListBotVersions operation returns a summary of each version of a bot. For example, if a bot has three numbered versions, the ListBotVersions operation returns for summaries, one for each numbered version and one for the DRAFT version. The ListBotVersions operation always returns at least one version, the DRAFT version.

```sql
SELECT
bot_id,
bot_version_summaries,
next_token
FROM aws.lexv2_models.bot_versions
WHERE bot_id = '{{ bot_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_bot_version"
    values={[
        { label: 'create_bot_version', value: 'create_bot_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_bot_version">

Creates an immutable version of the bot. When you create the first version of a bot, Amazon Lex sets the version number to 1. Subsequent bot versions increase in an increment of 1. The version number will always represent the total number of versions created of the bot, not the current number of versions. If a bot version is deleted, that bot version number will not be reused.

```sql
INSERT INTO aws.lexv2_models.bot_versions (
description,
botVersionLocaleSpecification,
bot_id,
region
)
SELECT 
'{{ description }}',
'{{ botVersionLocaleSpecification }}' /* required */,
'{{ bot_id }}',
'{{ region }}'
RETURNING
bot_id,
bot_status,
bot_version,
bot_version_locale_specification,
creation_date_time,
description
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: bot_versions
  props:
    - name: bot_id
      value: "{{ bot_id }}"
      description: Required parameter for the bot_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the bot_versions resource.
    - name: description
      value: "{{ description }}"
    - name: botVersionLocaleSpecification
      value: "{{ botVersionLocaleSpecification }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bot_version"
    values={[
        { label: 'delete_bot_version', value: 'delete_bot_version' }
    ]}
>
<TabItem value="delete_bot_version">

Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation.

```sql
DELETE FROM aws.lexv2_models.bot_versions
WHERE bot_id = '{{ bot_id }}' --required
AND bot_version = '{{ bot_version }}' --required
AND region = '{{ region }}' --required
AND skipResourceInUseCheck = '{{ skipResourceInUseCheck }}'
;
```
</TabItem>
</Tabs>
