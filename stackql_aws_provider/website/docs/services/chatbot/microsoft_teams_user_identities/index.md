--- 
title: microsoft_teams_user_identities
hide_title: false
hide_table_of_contents: false
keywords:
  - microsoft_teams_user_identities
  - chatbot
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

Creates, updates, deletes, gets or lists a <code>microsoft_teams_user_identities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="microsoft_teams_user_identities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chatbot.microsoft_teams_user_identities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_microsoft_teams_user_identities"
    values={[
        { label: 'list_microsoft_teams_user_identities', value: 'list_microsoft_teams_user_identities' }
    ]}
>
<TabItem value="list_microsoft_teams_user_identities">

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
    <td><CopyableCode code="aws_user_identity" /></td>
    <td><code>string</code></td>
    <td>The AWS user identity ARN used to associate a Microsoft Teams user Identity with an IAM Role. (pattern: &lt;code&gt;arn:aws:(iam|sts)::&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="chat_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the MicrosoftTeamsChannelConfiguration associated with the user identity to delete. (pattern: &lt;code&gt;arn:aws:(wheatley|chatbot):&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>A user-defined role that AWS Chatbot assumes. This is not the service-linked role. For more information, see IAM policies for AWS Chatbot in the AWS Chatbot Administrator Guide. (pattern: &lt;code&gt;arn:aws:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Microsoft Teams authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more information, see Step 1: Configure a Microsoft Teams client in the AWS Chatbot Administrator Guide. (pattern: &lt;code&gt;&#91;0-9A-Fa-f&#93;&#123;8&#125;(?:-&#91;0-9A-Fa-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9A-Fa-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="teams_channel_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Microsoft Teams channel. (pattern: &lt;code&gt;(&#91;a-zA-Z0-9-_=+\/.,&#93;)*%3&#91;aA&#93;(&#91;a-zA-Z0-9-_=+\/.,&#93;)*%40(&#91;a-zA-Z0-9-_=+\/.,&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="teams_tenant_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Microsoft Teams tenant. (pattern: &lt;code&gt;&#91;0-9A-Fa-f&#93;&#123;8&#125;(?:-&#91;0-9A-Fa-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9A-Fa-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The Microsoft Teams user ID. (pattern: &lt;code&gt;&#91;0-9A-Fa-f&#93;&#123;8&#125;(?:-&#91;0-9A-Fa-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9A-Fa-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_microsoft_teams_user_identities"><CopyableCode code="list_microsoft_teams_user_identities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A list all Microsoft Teams user identities with a mapped role.</td>
</tr>
<tr>
    <td><a href="#delete_microsoft_teams_user_identity"><CopyableCode code="delete_microsoft_teams_user_identity" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Identifes a user level permission for a channel configuration.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_microsoft_teams_user_identities"
    values={[
        { label: 'list_microsoft_teams_user_identities', value: 'list_microsoft_teams_user_identities' }
    ]}
>
<TabItem value="list_microsoft_teams_user_identities">

A list all Microsoft Teams user identities with a mapped role.

```sql
SELECT
aws_user_identity,
chat_configuration_arn,
iam_role_arn,
team_id,
teams_channel_id,
teams_tenant_id,
user_id
FROM aws.chatbot.microsoft_teams_user_identities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_microsoft_teams_user_identity"
    values={[
        { label: 'delete_microsoft_teams_user_identity', value: 'delete_microsoft_teams_user_identity' }
    ]}
>
<TabItem value="delete_microsoft_teams_user_identity">

Identifes a user level permission for a channel configuration.

```sql
DELETE FROM aws.chatbot.microsoft_teams_user_identities
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
