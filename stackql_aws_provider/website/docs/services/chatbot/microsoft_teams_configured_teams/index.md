--- 
title: microsoft_teams_configured_teams
hide_title: false
hide_table_of_contents: false
keywords:
  - microsoft_teams_configured_teams
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

Creates, updates, deletes, gets or lists a <code>microsoft_teams_configured_teams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="microsoft_teams_configured_teams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chatbot.microsoft_teams_configured_teams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_microsoft_teams_configured_teams"
    values={[
        { label: 'list_microsoft_teams_configured_teams', value: 'list_microsoft_teams_configured_teams' }
    ]}
>
<TabItem value="list_microsoft_teams_configured_teams">

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
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>Either ENABLED or DISABLED. The resource returns DISABLED if the organization's AWS Chatbot policy has explicitly denied that configuration. For example, if Amazon Chime is disabled. (pattern: &lt;code&gt;(ENABLED|DISABLED)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StateReason" /></td>
    <td><code>string</code></td>
    <td>Provided if State is DISABLED. Provides context as to why the resource is disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="TeamId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Microsoft Teams authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more information, see Step 1: Configure a Microsoft Teams client in the AWS Chatbot Administrator Guide. (pattern: &lt;code&gt;&#91;0-9A-Fa-f&#93;&#123;8&#125;(?:-&#91;0-9A-Fa-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9A-Fa-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TeamName" /></td>
    <td><code>string</code></td>
    <td>The name of the Microsoft Teams Team. (pattern: &lt;code&gt;&#91;0-9A-Fa-f&#93;&#123;8&#125;(?:-&#91;0-9A-Fa-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9A-Fa-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TenantId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Microsoft Teams tenant. (pattern: &lt;code&gt;&#91;0-9A-Fa-f&#93;&#123;8&#125;(?:-&#91;0-9A-Fa-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9A-Fa-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_microsoft_teams_configured_teams"><CopyableCode code="list_microsoft_teams_configured_teams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all authorized Microsoft Teams for an AWS Account</td>
</tr>
<tr>
    <td><a href="#delete_microsoft_teams_configured_team"><CopyableCode code="delete_microsoft_teams_configured_team" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the Microsoft Teams team authorization allowing for channels to be configured in that Microsoft Teams team. Note that the Microsoft Teams team must have no channels configured to remove it.</td>
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
    defaultValue="list_microsoft_teams_configured_teams"
    values={[
        { label: 'list_microsoft_teams_configured_teams', value: 'list_microsoft_teams_configured_teams' }
    ]}
>
<TabItem value="list_microsoft_teams_configured_teams">

Lists all authorized Microsoft Teams for an AWS Account

```sql
SELECT
State,
StateReason,
TeamId,
TeamName,
TenantId
FROM aws.chatbot.microsoft_teams_configured_teams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_microsoft_teams_configured_team"
    values={[
        { label: 'delete_microsoft_teams_configured_team', value: 'delete_microsoft_teams_configured_team' }
    ]}
>
<TabItem value="delete_microsoft_teams_configured_team">

Deletes the Microsoft Teams team authorization allowing for channels to be configured in that Microsoft Teams team. Note that the Microsoft Teams team must have no channels configured to remove it.

```sql
DELETE FROM aws.chatbot.microsoft_teams_configured_teams
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
