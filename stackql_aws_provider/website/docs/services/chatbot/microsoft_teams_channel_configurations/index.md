--- 
title: microsoft_teams_channel_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - microsoft_teams_channel_configurations
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

Creates, updates, deletes, gets or lists a <code>microsoft_teams_channel_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="microsoft_teams_channel_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chatbot.microsoft_teams_channel_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_microsoft_teams_channel_configuration"
    values={[
        { label: 'get_microsoft_teams_channel_configuration', value: 'get_microsoft_teams_channel_configuration' },
        { label: 'list_microsoft_teams_channel_configurations', value: 'list_microsoft_teams_channel_configurations' }
    ]}
>
<TabItem value="get_microsoft_teams_channel_configuration">

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
    <td><CopyableCode code="channel_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Microsoft Teams channel. (pattern: &lt;code&gt;(&#91;a-zA-Z0-9-_=+\/.,&#93;)*%3&#91;aA&#93;(&#91;a-zA-Z0-9-_=+\/.,&#93;)*%40(&#91;a-zA-Z0-9-_=+\/.,&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Microsoft Teams channel. (pattern: &lt;code&gt;(.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="chat_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the MicrosoftTeamsChannelConfiguration associated with the user identity to delete. (pattern: &lt;code&gt;arn:aws:(wheatley|chatbot):&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
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
    <td><CopyableCode code="sns_topic_arns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the SNS topics that deliver notifications to AWS Chatbot.</td>
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
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Microsoft Teams authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more information, see Step 1: Configure a Microsoft Teams client in the AWS Chatbot Administrator Guide. (pattern: &lt;code&gt;&#91;0-9A-Fa-f&#93;&#123;8&#125;(?:-&#91;0-9A-Fa-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9A-Fa-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="team_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Microsoft Teams Team. (pattern: &lt;code&gt;(.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tenant_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Microsoft Teams tenant. (pattern: &lt;code&gt;&#91;0-9A-Fa-f&#93;&#123;8&#125;(?:-&#91;0-9A-Fa-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9A-Fa-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="user_authorization_required" /></td>
    <td><code>boolean</code></td>
    <td>Enables use of a user role requirement in your chat configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_microsoft_teams_channel_configurations">

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
    <td><CopyableCode code="channel_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Microsoft Teams channel. (pattern: &lt;code&gt;(&#91;a-zA-Z0-9-_=+\/.,&#93;)*%3&#91;aA&#93;(&#91;a-zA-Z0-9-_=+\/.,&#93;)*%40(&#91;a-zA-Z0-9-_=+\/.,&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Microsoft Teams channel. (pattern: &lt;code&gt;(.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="chat_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the MicrosoftTeamsChannelConfiguration associated with the user identity to delete. (pattern: &lt;code&gt;arn:aws:(wheatley|chatbot):&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
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
    <td><CopyableCode code="sns_topic_arns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the SNS topics that deliver notifications to AWS Chatbot.</td>
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
    <td><CopyableCode code="team_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Microsoft Teams authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more information, see Step 1: Configure a Microsoft Teams client in the AWS Chatbot Administrator Guide. (pattern: &lt;code&gt;&#91;0-9A-Fa-f&#93;&#123;8&#125;(?:-&#91;0-9A-Fa-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9A-Fa-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="team_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Microsoft Teams Team. (pattern: &lt;code&gt;(.*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tenant_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Microsoft Teams tenant. (pattern: &lt;code&gt;&#91;0-9A-Fa-f&#93;&#123;8&#125;(?:-&#91;0-9A-Fa-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9A-Fa-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_microsoft_teams_channel_configuration"><CopyableCode code="get_microsoft_teams_channel_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a Microsoft Teams channel configuration in an AWS account.</td>
</tr>
<tr>
    <td><a href="#list_microsoft_teams_channel_configurations"><CopyableCode code="list_microsoft_teams_channel_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all AWS Chatbot Microsoft Teams channel configurations in an AWS account.</td>
</tr>
<tr>
    <td><a href="#create_microsoft_teams_channel_configuration"><CopyableCode code="create_microsoft_teams_channel_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChannelId"><code>ChannelId</code></a>, <a href="#parameter-TeamId"><code>TeamId</code></a>, <a href="#parameter-TenantId"><code>TenantId</code></a>, <a href="#parameter-IamRoleArn"><code>IamRoleArn</code></a>, <a href="#parameter-ConfigurationName"><code>ConfigurationName</code></a></td>
    <td></td>
    <td>Creates an AWS Chatbot configuration for Microsoft Teams.</td>
</tr>
<tr>
    <td><a href="#update_microsoft_teams_channel_configuration"><CopyableCode code="update_microsoft_teams_channel_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChatConfigurationArn"><code>ChatConfigurationArn</code></a>, <a href="#parameter-ChannelId"><code>ChannelId</code></a></td>
    <td></td>
    <td>Updates an Microsoft Teams channel configuration.</td>
</tr>
<tr>
    <td><a href="#delete_microsoft_teams_channel_configuration"><CopyableCode code="delete_microsoft_teams_channel_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Microsoft Teams channel configuration for AWS Chatbot</td>
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
    defaultValue="get_microsoft_teams_channel_configuration"
    values={[
        { label: 'get_microsoft_teams_channel_configuration', value: 'get_microsoft_teams_channel_configuration' },
        { label: 'list_microsoft_teams_channel_configurations', value: 'list_microsoft_teams_channel_configurations' }
    ]}
>
<TabItem value="get_microsoft_teams_channel_configuration">

Returns a Microsoft Teams channel configuration in an AWS account.

```sql
SELECT
channel_id,
channel_name,
chat_configuration_arn,
configuration_name,
guardrail_policy_arns,
iam_role_arn,
logging_level,
sns_topic_arns,
state,
state_reason,
tags,
team_id,
team_name,
tenant_id,
user_authorization_required
FROM aws.chatbot.microsoft_teams_channel_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_microsoft_teams_channel_configurations">

Lists all AWS Chatbot Microsoft Teams channel configurations in an AWS account.

```sql
SELECT
channel_id,
channel_name,
chat_configuration_arn,
configuration_name,
guardrail_policy_arns,
iam_role_arn,
logging_level,
sns_topic_arns,
state,
state_reason,
tags,
team_id,
team_name,
tenant_id,
user_authorization_required
FROM aws.chatbot.microsoft_teams_channel_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_microsoft_teams_channel_configuration"
    values={[
        { label: 'create_microsoft_teams_channel_configuration', value: 'create_microsoft_teams_channel_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_microsoft_teams_channel_configuration">

Creates an AWS Chatbot configuration for Microsoft Teams.

```sql
INSERT INTO aws.chatbot.microsoft_teams_channel_configurations (
ChannelId,
ChannelName,
TeamId,
TeamName,
TenantId,
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
'{{ ChannelId }}' /* required */,
'{{ ChannelName }}',
'{{ TeamId }}' /* required */,
'{{ TeamName }}',
'{{ TenantId }}' /* required */,
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
- name: microsoft_teams_channel_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the microsoft_teams_channel_configurations resource.
    - name: ChannelId
      value: "{{ ChannelId }}"
    - name: ChannelName
      value: "{{ ChannelName }}"
    - name: TeamId
      value: "{{ TeamId }}"
    - name: TeamName
      value: "{{ TeamName }}"
    - name: TenantId
      value: "{{ TenantId }}"
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
    defaultValue="update_microsoft_teams_channel_configuration"
    values={[
        { label: 'update_microsoft_teams_channel_configuration', value: 'update_microsoft_teams_channel_configuration' }
    ]}
>
<TabItem value="update_microsoft_teams_channel_configuration">

Updates an Microsoft Teams channel configuration.

```sql
UPDATE aws.chatbot.microsoft_teams_channel_configurations
SET 
ChatConfigurationArn = '{{ ChatConfigurationArn }}',
ChannelId = '{{ ChannelId }}',
ChannelName = '{{ ChannelName }}',
SnsTopicArns = '{{ SnsTopicArns }}',
IamRoleArn = '{{ IamRoleArn }}',
LoggingLevel = '{{ LoggingLevel }}',
GuardrailPolicyArns = '{{ GuardrailPolicyArns }}',
UserAuthorizationRequired = {{ UserAuthorizationRequired }}
WHERE 
region = '{{ region }}' --required
AND ChatConfigurationArn = '{{ ChatConfigurationArn }}' --required
AND ChannelId = '{{ ChannelId }}' --required
RETURNING
channel_configuration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_microsoft_teams_channel_configuration"
    values={[
        { label: 'delete_microsoft_teams_channel_configuration', value: 'delete_microsoft_teams_channel_configuration' }
    ]}
>
<TabItem value="delete_microsoft_teams_channel_configuration">

Deletes a Microsoft Teams channel configuration for AWS Chatbot

```sql
DELETE FROM aws.chatbot.microsoft_teams_channel_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
