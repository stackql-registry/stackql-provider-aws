--- 
title: slack_user_identities
hide_title: false
hide_table_of_contents: false
keywords:
  - slack_user_identities
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

Creates, updates, deletes, gets or lists a <code>slack_user_identities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="slack_user_identities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chatbot.slack_user_identities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_slack_user_identities"
    values={[
        { label: 'describe_slack_user_identities', value: 'describe_slack_user_identities' }
    ]}
>
<TabItem value="describe_slack_user_identities">

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
    <td>The AWS user identity ARN used to associate a Slack user ID with an IAM Role. (pattern: &lt;code&gt;arn:aws:(iam|sts)::&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="chat_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the SlackChannelConfiguration associated with the user identity to delete. (pattern: &lt;code&gt;arn:aws:(wheatley|chatbot):&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>A user-defined role that AWS Chatbot assumes. This is not the service-linked role. For more information, see IAM policies for AWS Chatbot in the AWS Chatbot Administrator Guide. (pattern: &lt;code&gt;arn:aws:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="slack_team_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Slack workspace authorized with AWS Chatbot. (pattern: &lt;code&gt;&#91;0-9A-Z&#93;&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="slack_user_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user in Slack (pattern: &lt;code&gt;(.*)&lt;/code&gt;)</td>
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
    <td><a href="#describe_slack_user_identities"><CopyableCode code="describe_slack_user_identities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all Slack user identities with a mapped role.</td>
</tr>
<tr>
    <td><a href="#delete_slack_user_identity"><CopyableCode code="delete_slack_user_identity" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a user level permission for a Slack channel configuration.</td>
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
    defaultValue="describe_slack_user_identities"
    values={[
        { label: 'describe_slack_user_identities', value: 'describe_slack_user_identities' }
    ]}
>
<TabItem value="describe_slack_user_identities">

Lists all Slack user identities with a mapped role.

```sql
SELECT
aws_user_identity,
chat_configuration_arn,
iam_role_arn,
slack_team_id,
slack_user_id
FROM aws.chatbot.slack_user_identities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_slack_user_identity"
    values={[
        { label: 'delete_slack_user_identity', value: 'delete_slack_user_identity' }
    ]}
>
<TabItem value="delete_slack_user_identity">

Deletes a user level permission for a Slack channel configuration.

```sql
DELETE FROM aws.chatbot.slack_user_identities
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
