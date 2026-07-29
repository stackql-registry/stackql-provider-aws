--- 
title: slack_channel_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - slack_channel_configurations
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

Creates, updates, deletes, gets or lists a <code>slack_channel_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="slack_channel_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chatbot.slack_channel_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_slack_channel_configurations"
    values={[
        { label: 'describe_slack_channel_configurations', value: 'describe_slack_channel_configurations' }
    ]}
>
<TabItem value="describe_slack_channel_configurations">

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
    <td><CopyableCode code="chat_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the SlackChannelConfiguration. (pattern: &lt;code&gt;arn:aws:(wheatley|chatbot):&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="guardrail_policy_arns" /></td>
    <td><code>array</code></td>
    <td>The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed AdministratorAccess policy is applied by default if this is not set.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>A user-defined role that AWS Chatbot assumes. This is not the service-linked role. For more information, see IAM policies for AWS Chatbot in the AWS Chatbot Administrator Guide. (pattern: &lt;code&gt;arn:aws:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logging_level" /></td>
    <td><code>string</code></td>
    <td>Logging levels include ERROR, INFO, or NONE. (pattern: &lt;code&gt;(ERROR|INFO|NONE)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="slack_channel_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Slack channel. To get this ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="slack_channel_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Slack channel.</td>
</tr>
<tr>
    <td><CopyableCode code="slack_team_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Slack workspace authorized with Amazon Chime. (pattern: &lt;code&gt;&#91;0-9A-Z&#93;&#123;1,255&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="slack_team_name" /></td>
    <td><code>string</code></td>
    <td>Name of the Slack workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="sns_topic_arns" /></td>
    <td><code>array</code></td>
    <td>The ARNs of the SNS topics that deliver notifications to AWS Chatbot.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Either ENABLED or DISABLED. The resource returns DISABLED if the organization's AWS Chatbot policy has explicitly denied that configuration. For example, if Amazon Chime is disabled. (pattern: &lt;code&gt;(ENABLED|DISABLED)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state_reason" /></td>
    <td><code>string</code></td>
    <td>Provided if State is DISABLED. Provides context as to why the resource is disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="user_authorization_required" /></td>
    <td><code>boolean</code></td>
    <td>Enables use of a user role requirement in your chat configuration.</td>
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
    <td><a href="#describe_slack_channel_configurations"><CopyableCode code="describe_slack_channel_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists Slack channel configurations optionally filtered by ChatConfigurationArn</td>
</tr>
<tr>
    <td><a href="#create_slack_channel_configuration"><CopyableCode code="create_slack_channel_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SlackTeamId"><code>SlackTeamId</code></a>, <a href="#parameter-SlackChannelId"><code>SlackChannelId</code></a>, <a href="#parameter-IamRoleArn"><code>IamRoleArn</code></a>, <a href="#parameter-ConfigurationName"><code>ConfigurationName</code></a></td>
    <td></td>
    <td>Creates an AWS Chatbot confugration for Slack.</td>
</tr>
<tr>
    <td><a href="#update_slack_channel_configuration"><CopyableCode code="update_slack_channel_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChatConfigurationArn"><code>ChatConfigurationArn</code></a>, <a href="#parameter-SlackChannelId"><code>SlackChannelId</code></a></td>
    <td></td>
    <td>Updates a Slack channel configuration.</td>
</tr>
<tr>
    <td><a href="#delete_slack_channel_configuration"><CopyableCode code="delete_slack_channel_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Slack channel configuration for AWS Chatbot</td>
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
    defaultValue="describe_slack_channel_configurations"
    values={[
        { label: 'describe_slack_channel_configurations', value: 'describe_slack_channel_configurations' }
    ]}
>
<TabItem value="describe_slack_channel_configurations">

Lists Slack channel configurations optionally filtered by ChatConfigurationArn

```sql
SELECT
chat_configuration_arn,
configuration_name,
guardrail_policy_arns,
iam_role_arn,
logging_level,
slack_channel_id,
slack_channel_name,
slack_team_id,
slack_team_name,
sns_topic_arns,
state,
state_reason,
tags,
user_authorization_required
FROM aws.chatbot.slack_channel_configurations
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

Creates an AWS Chatbot confugration for Slack.

```sql
INSERT INTO aws.chatbot.slack_channel_configurations (
SlackTeamId,
SlackChannelId,
SlackChannelName,
SnsTopicArns,
IamRoleArn,
ConfigurationName,
LoggingLevel,
GuardrailPolicyArns,
UserAuthorizationRequired,
Tags,
region
)
SELECT 
'{{ SlackTeamId }}' /* required */,
'{{ SlackChannelId }}' /* required */,
'{{ SlackChannelName }}',
'{{ SnsTopicArns }}',
'{{ IamRoleArn }}' /* required */,
'{{ ConfigurationName }}' /* required */,
'{{ LoggingLevel }}',
'{{ GuardrailPolicyArns }}',
{{ UserAuthorizationRequired }},
'{{ Tags }}',
'{{ region }}'
RETURNING
channel_configuration
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
    - name: SlackTeamId
      value: "{{ SlackTeamId }}"
    - name: SlackChannelId
      value: "{{ SlackChannelId }}"
    - name: SlackChannelName
      value: "{{ SlackChannelName }}"
    - name: SnsTopicArns
      value:
        - "{{ SnsTopicArns }}"
    - name: IamRoleArn
      value: "{{ IamRoleArn }}"
    - name: ConfigurationName
      value: "{{ ConfigurationName }}"
    - name: LoggingLevel
      value: "{{ LoggingLevel }}"
    - name: GuardrailPolicyArns
      value:
        - "{{ GuardrailPolicyArns }}"
    - name: UserAuthorizationRequired
      value: {{ UserAuthorizationRequired }}
    - name: Tags
      value:
        - TagKey: "{{ TagKey }}"
          TagValue: "{{ TagValue }}"
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

Updates a Slack channel configuration.

```sql
UPDATE aws.chatbot.slack_channel_configurations
SET 
ChatConfigurationArn = '{{ ChatConfigurationArn }}',
SlackChannelId = '{{ SlackChannelId }}',
SlackChannelName = '{{ SlackChannelName }}',
SnsTopicArns = '{{ SnsTopicArns }}',
IamRoleArn = '{{ IamRoleArn }}',
LoggingLevel = '{{ LoggingLevel }}',
GuardrailPolicyArns = '{{ GuardrailPolicyArns }}',
UserAuthorizationRequired = {{ UserAuthorizationRequired }}
WHERE 
region = '{{ region }}' --required
AND ChatConfigurationArn = '{{ ChatConfigurationArn }}' --required
AND SlackChannelId = '{{ SlackChannelId }}' --required
RETURNING
channel_configuration;
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

Deletes a Slack channel configuration for AWS Chatbot

```sql
DELETE FROM aws.chatbot.slack_channel_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
