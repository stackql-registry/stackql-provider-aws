--- 
title: app_instance_bots
hide_title: false
hide_table_of_contents: false
keywords:
  - app_instance_bots
  - chime_sdk_identity
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

Creates, updates, deletes, gets or lists an <code>app_instance_bots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_instance_bots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_identity.app_instance_bots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_app_instance_bots"
    values={[
        { label: 'list_app_instance_bots', value: 'list_app_instance_bots' },
        { label: 'describe_app_instance_bot', value: 'describe_app_instance_bot' }
    ]}
>
<TabItem value="list_app_instance_bots">

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
    <td><CopyableCode code="AppInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppInstance. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AppInstanceBots" /></td>
    <td><code>array</code></td>
    <td>The information for each requested AppInstanceBot.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token passed by previous API calls until all requested bots are returned. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_app_instance_bot">

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
    <td><CopyableCode code="AppInstanceBotArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppInstanceBot. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Configuration" /></td>
    <td><code>object</code></td>
    <td>A structure that contains configuration data.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the AppInstanceBot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the AppInstanceBot was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Metadata" /></td>
    <td><code>string</code></td>
    <td>The metadata for an AppInstanceBot. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the AppInstanceBot. (pattern: &lt;code&gt;&#91;\u0009\u000A\u000D\u0020-\u007E\u0085\u00A0-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_app_instance_bots"><CopyableCode code="list_app_instance_bots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app-instance-arn"><code>app-instance-arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists all AppInstanceBots created under a single AppInstance.</td>
</tr>
<tr>
    <td><a href="#describe_app_instance_bot"><CopyableCode code="describe_app_instance_bot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_instance_bot_arn"><code>app_instance_bot_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The AppInstanceBot's information.</td>
</tr>
<tr>
    <td><a href="#create_app_instance_bot"><CopyableCode code="create_app_instance_bot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AppInstanceArn"><code>AppInstanceArn</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-Configuration"><code>Configuration</code></a></td>
    <td></td>
    <td>Creates a bot under an Amazon Chime AppInstance. The request consists of a unique Configuration and Name for that bot.</td>
</tr>
<tr>
    <td><a href="#update_app_instance_bot"><CopyableCode code="update_app_instance_bot" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_instance_bot_arn"><code>app_instance_bot_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Metadata"><code>Metadata</code></a></td>
    <td></td>
    <td>Updates the name and metadata of an AppInstanceBot.</td>
</tr>
<tr>
    <td><a href="#delete_app_instance_bot"><CopyableCode code="delete_app_instance_bot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_instance_bot_arn"><code>app_instance_bot_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an AppInstanceBot.</td>
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
<tr id="parameter-app-instance-arn">
    <td><CopyableCode code="app-instance-arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppInstance.</td>
</tr>
<tr id="parameter-app_instance_bot_arn">
    <td><CopyableCode code="app_instance_bot_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppInstanceBot being deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of requests to return.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token passed by previous API calls until all requested bots are returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_app_instance_bots"
    values={[
        { label: 'list_app_instance_bots', value: 'list_app_instance_bots' },
        { label: 'describe_app_instance_bot', value: 'describe_app_instance_bot' }
    ]}
>
<TabItem value="list_app_instance_bots">

Lists all AppInstanceBots created under a single AppInstance.

```sql
SELECT
AppInstanceArn,
AppInstanceBots,
NextToken
FROM aws.chime_sdk_identity.app_instance_bots
WHERE `app-instance-arn` = '{{ app-instance-arn }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
<TabItem value="describe_app_instance_bot">

The AppInstanceBot's information.

```sql
SELECT
AppInstanceBotArn,
Configuration,
CreatedTimestamp,
LastUpdatedTimestamp,
Metadata,
Name
FROM aws.chime_sdk_identity.app_instance_bots
WHERE app_instance_bot_arn = '{{ app_instance_bot_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app_instance_bot"
    values={[
        { label: 'create_app_instance_bot', value: 'create_app_instance_bot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app_instance_bot">

Creates a bot under an Amazon Chime AppInstance. The request consists of a unique Configuration and Name for that bot.

```sql
INSERT INTO aws.chime_sdk_identity.app_instance_bots (
AppInstanceArn,
Name,
Metadata,
ClientRequestToken,
Tags,
Configuration,
region
)
SELECT 
'{{ AppInstanceArn }}' /* required */,
'{{ Name }}',
'{{ Metadata }}',
'{{ ClientRequestToken }}' /* required */,
'{{ Tags }}',
'{{ Configuration }}' /* required */,
'{{ region }}'
RETURNING
AppInstanceBotArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: app_instance_bots
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the app_instance_bots resource.
    - name: AppInstanceArn
      value: "{{ AppInstanceArn }}"
    - name: Name
      value: "{{ Name }}"
    - name: Metadata
      value: "{{ Metadata }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: Configuration
      description: |
        A structure that contains configuration data.
      value:
        Lex:
          RespondsTo: "{{ RespondsTo }}"
          InvokedBy:
            StandardMessages: "{{ StandardMessages }}"
            TargetedMessages: "{{ TargetedMessages }}"
          LexBotAliasArn: "{{ LexBotAliasArn }}"
          LocaleId: "{{ LocaleId }}"
          WelcomeIntent: "{{ WelcomeIntent }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_app_instance_bot"
    values={[
        { label: 'update_app_instance_bot', value: 'update_app_instance_bot' }
    ]}
>
<TabItem value="update_app_instance_bot">

Updates the name and metadata of an AppInstanceBot.

```sql
UPDATE aws.chime_sdk_identity.app_instance_bots
SET 
Name = '{{ Name }}',
Metadata = '{{ Metadata }}',
Configuration = '{{ Configuration }}'
WHERE 
app_instance_bot_arn = '{{ app_instance_bot_arn }}' --required
AND region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND Metadata = '{{ Metadata }}' --required
RETURNING
AppInstanceBotArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app_instance_bot"
    values={[
        { label: 'delete_app_instance_bot', value: 'delete_app_instance_bot' }
    ]}
>
<TabItem value="delete_app_instance_bot">

Deletes an AppInstanceBot.

```sql
DELETE FROM aws.chime_sdk_identity.app_instance_bots
WHERE app_instance_bot_arn = '{{ app_instance_bot_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
