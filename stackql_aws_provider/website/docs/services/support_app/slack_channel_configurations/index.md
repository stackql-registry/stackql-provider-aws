--- 
title: slack_channel_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - slack_channel_configurations
  - support_app
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

Creates, updates, deletes, gets or lists a <code>slack_channel_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="slack_channel_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.support_app.slack_channel_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_slack_channel_configurations"
    values={[
        { label: 'list_slack_channel_configurations', value: 'list_slack_channel_configurations' }
    ]}
>
<TabItem value="list_slack_channel_configurations">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The point where pagination should resume when the response returns only partial results. (pattern: &lt;code&gt;^\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="slack_channel_configurations" /></td>
    <td><code>array</code></td>
    <td>The configurations for a Slack channel.</td>
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
    <td><a href="#list_slack_channel_configurations"><CopyableCode code="list_slack_channel_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the Slack channel configurations for an Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_slack_channel_configuration"><CopyableCode code="create_slack_channel_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-channelId"><code>channelId</code></a>, <a href="#parameter-channelRoleArn"><code>channelRoleArn</code></a>, <a href="#parameter-notifyOnCaseSeverity"><code>notifyOnCaseSeverity</code></a>, <a href="#parameter-teamId"><code>teamId</code></a></td>
    <td></td>
    <td>Creates a Slack channel configuration for your Amazon Web Services account. You can add up to 5 Slack workspaces for your account. You can add up to 20 Slack channels for your account. A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that you need to manage support cases for your organization. This can reduce the notifications about case updates that you receive in the Slack channel. We recommend that you choose a private Slack channel so that only members in that channel have read and write access to your support cases. Anyone in your Slack channel can create, update, or resolve support cases for your account. Users require an invitation to join private channels.</td>
</tr>
<tr>
    <td><a href="#update_slack_channel_configuration"><CopyableCode code="update_slack_channel_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-channelId"><code>channelId</code></a>, <a href="#parameter-teamId"><code>teamId</code></a></td>
    <td></td>
    <td>Updates the configuration for a Slack channel, such as case update notifications.</td>
</tr>
<tr>
    <td><a href="#delete_slack_channel_configuration"><CopyableCode code="delete_slack_channel_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Slack channel configuration from your Amazon Web Services account. This operation doesn't delete your Slack channel.</td>
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
    defaultValue="list_slack_channel_configurations"
    values={[
        { label: 'list_slack_channel_configurations', value: 'list_slack_channel_configurations' }
    ]}
>
<TabItem value="list_slack_channel_configurations">

Lists the Slack channel configurations for an Amazon Web Services account.

```sql
SELECT
next_token,
slack_channel_configurations
FROM aws.support_app.slack_channel_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_slack_channel_configuration"
    values={[
        { label: 'create_slack_channel_configuration', value: 'create_slack_channel_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_slack_channel_configuration">

Creates a Slack channel configuration for your Amazon Web Services account. You can add up to 5 Slack workspaces for your account. You can add up to 20 Slack channels for your account. A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that you need to manage support cases for your organization. This can reduce the notifications about case updates that you receive in the Slack channel. We recommend that you choose a private Slack channel so that only members in that channel have read and write access to your support cases. Anyone in your Slack channel can create, update, or resolve support cases for your account. Users require an invitation to join private channels.

```sql
INSERT INTO aws.support_app.slack_channel_configurations (
channelId,
channelName,
channelRoleArn,
notifyOnAddCorrespondenceToCase,
notifyOnCaseSeverity,
notifyOnCreateOrReopenCase,
notifyOnResolveCase,
teamId,
region
)
SELECT 
'{{ channelId }}' /* required */,
'{{ channelName }}',
'{{ channelRoleArn }}' /* required */,
{{ notifyOnAddCorrespondenceToCase }},
'{{ notifyOnCaseSeverity }}' /* required */,
{{ notifyOnCreateOrReopenCase }},
{{ notifyOnResolveCase }},
'{{ teamId }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: slack_channel_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the slack_channel_configurations resource.
    - name: channelId
      value: "{{ channelId }}"
    - name: channelName
      value: "{{ channelName }}"
    - name: channelRoleArn
      value: "{{ channelRoleArn }}"
    - name: notifyOnAddCorrespondenceToCase
      value: {{ notifyOnAddCorrespondenceToCase }}
    - name: notifyOnCaseSeverity
      value: "{{ notifyOnCaseSeverity }}"
      valid_values: ['none', 'all', 'high']
    - name: notifyOnCreateOrReopenCase
      value: {{ notifyOnCreateOrReopenCase }}
    - name: notifyOnResolveCase
      value: {{ notifyOnResolveCase }}
    - name: teamId
      value: "{{ teamId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_slack_channel_configuration"
    values={[
        { label: 'update_slack_channel_configuration', value: 'update_slack_channel_configuration' }
    ]}
>
<TabItem value="update_slack_channel_configuration">

Updates the configuration for a Slack channel, such as case update notifications.

```sql
UPDATE aws.support_app.slack_channel_configurations
SET 
channelId = '{{ channelId }}',
channelName = '{{ channelName }}',
channelRoleArn = '{{ channelRoleArn }}',
notifyOnAddCorrespondenceToCase = {{ notifyOnAddCorrespondenceToCase }},
notifyOnCaseSeverity = '{{ notifyOnCaseSeverity }}',
notifyOnCreateOrReopenCase = {{ notifyOnCreateOrReopenCase }},
notifyOnResolveCase = {{ notifyOnResolveCase }},
teamId = '{{ teamId }}'
WHERE 
region = '{{ region }}' --required
AND channelId = '{{ channelId }}' --required
AND teamId = '{{ teamId }}' --required
RETURNING
channel_id,
channel_name,
channel_role_arn,
notify_on_add_correspondence_to_case,
notify_on_case_severity,
notify_on_create_or_reopen_case,
notify_on_resolve_case,
team_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_slack_channel_configuration"
    values={[
        { label: 'delete_slack_channel_configuration', value: 'delete_slack_channel_configuration' }
    ]}
>
<TabItem value="delete_slack_channel_configuration">

Deletes a Slack channel configuration from your Amazon Web Services account. This operation doesn't delete your Slack channel.

```sql
DELETE FROM aws.support_app.slack_channel_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
