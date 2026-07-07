--- 
title: slack_workspaces
hide_title: false
hide_table_of_contents: false
keywords:
  - slack_workspaces
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

Creates, updates, deletes, gets or lists a <code>slack_workspaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="slack_workspaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chatbot.slack_workspaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_slack_workspaces"
    values={[
        { label: 'describe_slack_workspaces', value: 'describe_slack_workspaces' }
    ]}
>
<TabItem value="describe_slack_workspaces">

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
    <td><CopyableCode code="SlackTeamId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Slack workspace authorized with AWS Chatbot. (pattern: &lt;code&gt;&#91;0-9A-Z&#93;&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SlackTeamName" /></td>
    <td><code>string</code></td>
    <td>The name of the Slack workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>Either ENABLED or DISABLED. The resource returns DISABLED if the organization's AWS Chatbot policy has explicitly denied that configuration. For example, if Amazon Chime is disabled. (pattern: &lt;code&gt;(ENABLED|DISABLED)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StateReason" /></td>
    <td><code>string</code></td>
    <td>Provided if State is DISABLED. Provides context as to why the resource is disabled.</td>
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
    <td><a href="#describe_slack_workspaces"><CopyableCode code="describe_slack_workspaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all authorized Slack workspaces connected to the AWS Account onboarded with AWS Chatbot.</td>
</tr>
<tr>
    <td><a href="#delete_slack_workspace_authorization"><CopyableCode code="delete_slack_workspace_authorization" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the Slack workspace authorization that allows channels to be configured in that workspace. This requires all configured channels in the workspace to be deleted.</td>
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
    defaultValue="describe_slack_workspaces"
    values={[
        { label: 'describe_slack_workspaces', value: 'describe_slack_workspaces' }
    ]}
>
<TabItem value="describe_slack_workspaces">

List all authorized Slack workspaces connected to the AWS Account onboarded with AWS Chatbot.

```sql
SELECT
SlackTeamId,
SlackTeamName,
State,
StateReason
FROM aws.chatbot.slack_workspaces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_slack_workspace_authorization"
    values={[
        { label: 'delete_slack_workspace_authorization', value: 'delete_slack_workspace_authorization' }
    ]}
>
<TabItem value="delete_slack_workspace_authorization">

Deletes the Slack workspace authorization that allows channels to be configured in that workspace. This requires all configured channels in the workspace to be deleted.

```sql
DELETE FROM aws.chatbot.slack_workspaces
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
