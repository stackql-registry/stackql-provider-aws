--- 
title: managed_notification_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_notification_configurations
  - notifications
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

Creates, updates, deletes, gets or lists a <code>managed_notification_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_notification_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.notifications.managed_notification_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_managed_notification_configuration"
    values={[
        { label: 'get_managed_notification_configuration', value: 'get_managed_notification_configuration' },
        { label: 'list_managed_notification_configurations', value: 'list_managed_notification_configurations' }
    ]}
>
<TabItem value="get_managed_notification_configuration">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the ManagedNotificationConfiguration. (pattern: &lt;code&gt;&#91;A-Za-z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the ManagedNotificationConfiguration resource. (pattern: &lt;code&gt;arn:&#91;-.a-z0-9&#93;&#123;1,63&#125;:notifications::&#91;0-9&#93;&#123;12&#125;:managed-notification-configuration/category/&#91;a-zA-Z0-9\-&#93;&#123;3,64&#125;/sub-category/&#91;a-zA-Z0-9\-&#93;&#123;3,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category of the ManagedNotificationConfiguration.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the ManagedNotificationConfiguration. (pattern: &lt;code&gt;&#91;^\u0001-\u001F\u007F-\u009F&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subCategory" /></td>
    <td><code>string</code></td>
    <td>The subCategory of the ManagedNotificationConfiguration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_managed_notification_configurations">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the ManagedNotificationConfiguration. (pattern: &lt;code&gt;&#91;A-Za-z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ManagedNotificationConfiguration. (pattern: &lt;code&gt;arn:&#91;-.a-z0-9&#93;&#123;1,63&#125;:notifications::&#91;0-9&#93;&#123;12&#125;:managed-notification-configuration/category/&#91;a-zA-Z0-9\-&#93;&#123;3,64&#125;/sub-category/&#91;a-zA-Z0-9\-&#93;&#123;3,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the ManagedNotificationConfiguration. (pattern: &lt;code&gt;&#91;^\u0001-\u001F\u007F-\u009F&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_managed_notification_configuration"><CopyableCode code="get_managed_notification_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a specified ManagedNotificationConfiguration.</td>
</tr>
<tr>
    <td><a href="#list_managed_notification_configurations"><CopyableCode code="list_managed_notification_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-channelIdentifier"><code>channelIdentifier</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of Managed Notification Configurations according to specified filters, ordered by creation time in reverse chronological order (newest first).</td>
</tr>
<tr>
    <td><a href="#associate_managed_notification_account_contact"><CopyableCode code="associate_managed_notification_account_contact" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-contact_identifier"><code>contact_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-managedNotificationConfigurationArn"><code>managedNotificationConfigurationArn</code></a></td>
    <td></td>
    <td>Associates an Account Contact with a particular ManagedNotificationConfiguration.</td>
</tr>
<tr>
    <td><a href="#disassociate_managed_notification_account_contact"><CopyableCode code="disassociate_managed_notification_account_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-contact_identifier"><code>contact_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-managedNotificationConfigurationArn"><code>managedNotificationConfigurationArn</code></a></td>
    <td></td>
    <td>Disassociates an Account Contact with a particular ManagedNotificationConfiguration.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ManagedNotificationConfiguration to return.</td>
</tr>
<tr id="parameter-contact_identifier">
    <td><CopyableCode code="contact_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique value of an Account Contact Type to associate with the ManagedNotificationConfiguration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-channelIdentifier">
    <td><CopyableCode code="channelIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier or ARN of the notification channel to filter configurations by.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned in this call. Defaults to 20.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The start token for paginated calls. Retrieved from the response of a previous ListManagedNotificationChannelAssociations call. Next token uses Base64 encoding.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_managed_notification_configuration"
    values={[
        { label: 'get_managed_notification_configuration', value: 'get_managed_notification_configuration' },
        { label: 'list_managed_notification_configurations', value: 'list_managed_notification_configurations' }
    ]}
>
<TabItem value="get_managed_notification_configuration">

Returns a specified ManagedNotificationConfiguration.

```sql
SELECT
name,
arn,
category,
description,
subCategory
FROM aws.notifications.managed_notification_configurations
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_managed_notification_configurations">

Returns a list of Managed Notification Configurations according to specified filters, ordered by creation time in reverse chronological order (newest first).

```sql
SELECT
name,
arn,
description
FROM aws.notifications.managed_notification_configurations
WHERE region = '{{ region }}' -- required
AND channelIdentifier = '{{ channelIdentifier }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_managed_notification_account_contact"
    values={[
        { label: 'associate_managed_notification_account_contact', value: 'associate_managed_notification_account_contact' }
    ]}
>
<TabItem value="associate_managed_notification_account_contact">

Associates an Account Contact with a particular ManagedNotificationConfiguration.

```sql
UPDATE aws.notifications.managed_notification_configurations
SET 
managedNotificationConfigurationArn = '{{ managedNotificationConfigurationArn }}'
WHERE 
contact_identifier = '{{ contact_identifier }}' --required
AND region = '{{ region }}' --required
AND managedNotificationConfigurationArn = '{{ managedNotificationConfigurationArn }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_managed_notification_account_contact"
    values={[
        { label: 'disassociate_managed_notification_account_contact', value: 'disassociate_managed_notification_account_contact' }
    ]}
>
<TabItem value="disassociate_managed_notification_account_contact">

Disassociates an Account Contact with a particular ManagedNotificationConfiguration.

```sql
EXEC aws.notifications.managed_notification_configurations.disassociate_managed_notification_account_contact 
@contact_identifier='{{ contact_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"managedNotificationConfigurationArn": "{{ managedNotificationConfigurationArn }}"
}'
;
```
</TabItem>
</Tabs>
