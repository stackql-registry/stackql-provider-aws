--- 
title: vault_notifications
hide_title: false
hide_table_of_contents: false
keywords:
  - vault_notifications
  - glacier
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

Creates, updates, deletes, gets or lists a <code>vault_notifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vault_notifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glacier.vault_notifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vault_notifications"
    values={[
        { label: 'get_vault_notifications', value: 'get_vault_notifications' }
    ]}
>
<TabItem value="get_vault_notifications">

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
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>A list of one or more events for which Amazon Glacier will send a notification to the specified Amazon SNS topic.</td>
</tr>
<tr>
    <td><CopyableCode code="sns_topic" /></td>
    <td><code>string</code></td>
    <td>The Amazon Simple Notification Service (Amazon SNS) topic Amazon Resource Name (ARN).</td>
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
    <td><a href="#get_vault_notifications"><CopyableCode code="get_vault_notifications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation retrieves the notification-configuration subresource of the specified vault. For information about setting a notification configuration on a vault, see SetVaultNotifications. If a notification configuration for a vault is not set, the operation returns a 404 Not Found error. For more information about vault notifications, see Configuring Vault Notifications in Amazon Glacier. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Configuring Vault Notifications in Amazon Glacier and Get Vault Notification Configuration in the Amazon Glacier Developer Guide.</td>
</tr>
<tr>
    <td><a href="#set_vault_notifications"><CopyableCode code="set_vault_notifications" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation configures notifications that will be sent when specific events happen to a vault. By default, you don't get any notifications. To configure vault notifications, send a PUT request to the notification-configuration subresource of the vault. The request should include a JSON document that provides an Amazon SNS topic and specific events for which you want Amazon Glacier to send notifications to the topic. Amazon SNS topics must grant permission to the vault to be allowed to publish notifications to the topic. You can configure a vault to publish a notification for the following vault events: ArchiveRetrievalCompleted This event occurs when a job that was initiated for an archive retrieval is completed (InitiateJob). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from DescribeJob. InventoryRetrievalCompleted This event occurs when a job that was initiated for an inventory retrieval is completed (InitiateJob). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from DescribeJob. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Configuring Vault Notifications in Amazon Glacier and Set Vault Notification Configuration in the Amazon Glacier Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_vault_notifications"><CopyableCode code="delete_vault_notifications" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation deletes the notification configuration set for a vault. The operation is eventually consistent; that is, it might take some time for Amazon Glacier to completely disable the notifications and you might still receive some notifications for a short time after you send the delete request. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Configuring Vault Notifications in Amazon Glacier and Delete Vault Notification Configuration in the Amazon Glacier Developer Guide.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-vault_name">
    <td><CopyableCode code="vault_name" /></td>
    <td><code>string</code></td>
    <td>The name of the vault.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_vault_notifications"
    values={[
        { label: 'get_vault_notifications', value: 'get_vault_notifications' }
    ]}
>
<TabItem value="get_vault_notifications">

This operation retrieves the notification-configuration subresource of the specified vault. For information about setting a notification configuration on a vault, see SetVaultNotifications. If a notification configuration for a vault is not set, the operation returns a 404 Not Found error. For more information about vault notifications, see Configuring Vault Notifications in Amazon Glacier. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Configuring Vault Notifications in Amazon Glacier and Get Vault Notification Configuration in the Amazon Glacier Developer Guide.

```sql
SELECT
events,
sns_topic
FROM aws.glacier.vault_notifications
WHERE account_id = '{{ account_id }}' -- required
AND vault_name = '{{ vault_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_vault_notifications"
    values={[
        { label: 'set_vault_notifications', value: 'set_vault_notifications' }
    ]}
>
<TabItem value="set_vault_notifications">

This operation configures notifications that will be sent when specific events happen to a vault. By default, you don't get any notifications. To configure vault notifications, send a PUT request to the notification-configuration subresource of the vault. The request should include a JSON document that provides an Amazon SNS topic and specific events for which you want Amazon Glacier to send notifications to the topic. Amazon SNS topics must grant permission to the vault to be allowed to publish notifications to the topic. You can configure a vault to publish a notification for the following vault events: ArchiveRetrievalCompleted This event occurs when a job that was initiated for an archive retrieval is completed (InitiateJob). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from DescribeJob. InventoryRetrievalCompleted This event occurs when a job that was initiated for an inventory retrieval is completed (InitiateJob). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from DescribeJob. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Configuring Vault Notifications in Amazon Glacier and Set Vault Notification Configuration in the Amazon Glacier Developer Guide.

```sql
UPDATE aws.glacier.vault_notifications
SET 
vaultNotificationConfig = '{{ vaultNotificationConfig }}'
WHERE 
account_id = '{{ account_id }}' --required
AND vault_name = '{{ vault_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vault_notifications"
    values={[
        { label: 'delete_vault_notifications', value: 'delete_vault_notifications' }
    ]}
>
<TabItem value="delete_vault_notifications">

This operation deletes the notification configuration set for a vault. The operation is eventually consistent; that is, it might take some time for Amazon Glacier to completely disable the notifications and you might still receive some notifications for a short time after you send the delete request. An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see Access Control Using AWS Identity and Access Management (IAM). For conceptual information and underlying REST API, see Configuring Vault Notifications in Amazon Glacier and Delete Vault Notification Configuration in the Amazon Glacier Developer Guide.

```sql
DELETE FROM aws.glacier.vault_notifications
WHERE account_id = '{{ account_id }}' --required
AND vault_name = '{{ vault_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
