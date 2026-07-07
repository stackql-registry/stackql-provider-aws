--- 
title: chime_webhook_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - chime_webhook_configurations
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

Creates, updates, deletes, gets or lists a <code>chime_webhook_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="chime_webhook_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chatbot.chime_webhook_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_chime_webhook_configurations"
    values={[
        { label: 'describe_chime_webhook_configurations', value: 'describe_chime_webhook_configurations' }
    ]}
>
<TabItem value="describe_chime_webhook_configurations">

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
    <td><CopyableCode code="ChatConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ChimeWebhookConfiguration. (pattern: &lt;code&gt;arn:aws:(wheatley|chatbot):&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IamRoleArn" /></td>
    <td><code>string</code></td>
    <td>A user-defined role that AWS Chatbot assumes. This is not the service-linked role. For more information, see IAM policies for AWS Chatbot in the AWS Chatbot Administrator Guide. (pattern: &lt;code&gt;arn:aws:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LoggingLevel" /></td>
    <td><code>string</code></td>
    <td>Logging levels include ERROR, INFO, or NONE. (pattern: &lt;code&gt;(ERROR|INFO|NONE)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SnsTopicArns" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the SNS topics that deliver notifications to AWS Chatbot.</td>
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
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.</td>
</tr>
<tr>
    <td><CopyableCode code="WebhookDescription" /></td>
    <td><code>string</code></td>
    <td>A description of the webhook. We recommend using the convention RoomName/WebhookName. For more information, see Tutorial: Get started with Amazon Chime in the AWS Chatbot Administrator Guide.</td>
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
    <td><a href="#describe_chime_webhook_configurations"><CopyableCode code="describe_chime_webhook_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists Amazon Chime webhook configurations optionally filtered by ChatConfigurationArn</td>
</tr>
<tr>
    <td><a href="#create_chime_webhook_configuration"><CopyableCode code="create_chime_webhook_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WebhookDescription"><code>WebhookDescription</code></a>, <a href="#parameter-WebhookUrl"><code>WebhookUrl</code></a>, <a href="#parameter-SnsTopicArns"><code>SnsTopicArns</code></a>, <a href="#parameter-IamRoleArn"><code>IamRoleArn</code></a>, <a href="#parameter-ConfigurationName"><code>ConfigurationName</code></a></td>
    <td></td>
    <td>Creates an AWS Chatbot configuration for Amazon Chime.</td>
</tr>
<tr>
    <td><a href="#update_chime_webhook_configuration"><CopyableCode code="update_chime_webhook_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChatConfigurationArn"><code>ChatConfigurationArn</code></a></td>
    <td></td>
    <td>Updates a Amazon Chime webhook configuration.</td>
</tr>
<tr>
    <td><a href="#delete_chime_webhook_configuration"><CopyableCode code="delete_chime_webhook_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Amazon Chime webhook configuration for AWS Chatbot.</td>
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
    defaultValue="describe_chime_webhook_configurations"
    values={[
        { label: 'describe_chime_webhook_configurations', value: 'describe_chime_webhook_configurations' }
    ]}
>
<TabItem value="describe_chime_webhook_configurations">

Lists Amazon Chime webhook configurations optionally filtered by ChatConfigurationArn

```sql
SELECT
ChatConfigurationArn,
ConfigurationName,
IamRoleArn,
LoggingLevel,
SnsTopicArns,
State,
StateReason,
Tags,
WebhookDescription
FROM aws.chatbot.chime_webhook_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_chime_webhook_configuration"
    values={[
        { label: 'create_chime_webhook_configuration', value: 'create_chime_webhook_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_chime_webhook_configuration">

Creates an AWS Chatbot configuration for Amazon Chime.

```sql
INSERT INTO aws.chatbot.chime_webhook_configurations (
WebhookDescription,
WebhookUrl,
SnsTopicArns,
IamRoleArn,
ConfigurationName,
LoggingLevel,
Tags,
region
)
SELECT 
'{{ WebhookDescription }}' /* required */,
'{{ WebhookUrl }}' /* required */,
'{{ SnsTopicArns }}' /* required */,
'{{ IamRoleArn }}' /* required */,
'{{ ConfigurationName }}' /* required */,
'{{ LoggingLevel }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
WebhookConfiguration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: chime_webhook_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the chime_webhook_configurations resource.
    - name: WebhookDescription
      value: "{{ WebhookDescription }}"
    - name: WebhookUrl
      value: "{{ WebhookUrl }}"
    - name: SnsTopicArns
      value:
        - "{{ SnsTopicArns }}"
    - name: IamRoleArn
      value: "{{ IamRoleArn }}"
    - name: ConfigurationName
      value: "{{ ConfigurationName }}"
    - name: LoggingLevel
      value: "{{ LoggingLevel }}"
    - name: Tags
      value:
        - TagKey: "{{ TagKey }}"
          TagValue: "{{ TagValue }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_chime_webhook_configuration"
    values={[
        { label: 'update_chime_webhook_configuration', value: 'update_chime_webhook_configuration' }
    ]}
>
<TabItem value="update_chime_webhook_configuration">

Updates a Amazon Chime webhook configuration.

```sql
UPDATE aws.chatbot.chime_webhook_configurations
SET 
ChatConfigurationArn = '{{ ChatConfigurationArn }}',
WebhookDescription = '{{ WebhookDescription }}',
WebhookUrl = '{{ WebhookUrl }}',
SnsTopicArns = '{{ SnsTopicArns }}',
IamRoleArn = '{{ IamRoleArn }}',
LoggingLevel = '{{ LoggingLevel }}'
WHERE 
region = '{{ region }}' --required
AND ChatConfigurationArn = '{{ ChatConfigurationArn }}' --required
RETURNING
WebhookConfiguration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_chime_webhook_configuration"
    values={[
        { label: 'delete_chime_webhook_configuration', value: 'delete_chime_webhook_configuration' }
    ]}
>
<TabItem value="delete_chime_webhook_configuration">

Deletes a Amazon Chime webhook configuration for AWS Chatbot.

```sql
DELETE FROM aws.chatbot.chime_webhook_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
