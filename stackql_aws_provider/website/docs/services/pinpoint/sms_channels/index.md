--- 
title: sms_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - sms_channels
  - pinpoint
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

Creates, updates, deletes, gets or lists a <code>sms_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sms_channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.sms_channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sms_channel"
    values={[
        { label: 'get_sms_channel', value: 'get_sms_channel' }
    ]}
>
<TabItem value="get_sms_channel">

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
    <td><CopyableCode code="ApplicationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application that the SMS channel applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 format, when the SMS channel was enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the SMS channel is enabled for the application.</td>
</tr>
<tr>
    <td><CopyableCode code="HasCredential" /></td>
    <td><code>boolean</code></td>
    <td>(Not used) This property is retained only for backward compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>(Deprecated) An identifier for the SMS channel. This property is retained only for backward compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="IsArchived" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the SMS channel is archived.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>The user who last modified the SMS channel.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 format, when the SMS channel was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Platform" /></td>
    <td><code>string</code></td>
    <td>The type of messaging or notification platform for the channel. For the SMS channel, this value is SMS.</td>
</tr>
<tr>
    <td><CopyableCode code="PromotionalMessagesPerSecond" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of promotional messages that you can send through the SMS channel each second.</td>
</tr>
<tr>
    <td><CopyableCode code="SenderId" /></td>
    <td><code>string</code></td>
    <td>The identity that displays on recipients' devices when they receive messages from the SMS channel.</td>
</tr>
<tr>
    <td><CopyableCode code="ShortCode" /></td>
    <td><code>string</code></td>
    <td>The registered short code to use when you send messages through the SMS channel.</td>
</tr>
<tr>
    <td><CopyableCode code="TransactionalMessagesPerSecond" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of transactional messages that you can send through the SMS channel each second.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>integer</code></td>
    <td>The current version of the SMS channel.</td>
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
    <td><a href="#get_sms_channel"><CopyableCode code="get_sms_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the status and settings of the SMS channel for an application.</td>
</tr>
<tr>
    <td><a href="#update_sms_channel"><CopyableCode code="update_sms_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SMSChannelRequest"><code>SMSChannelRequest</code></a></td>
    <td></td>
    <td>Enables the SMS channel for an application or updates the status and settings of the SMS channel for an application.</td>
</tr>
<tr>
    <td><a href="#delete_sms_channel"><CopyableCode code="delete_sms_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables the SMS channel for an application and deletes any existing settings for the channel.</td>
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
<tr id="parameter-application-id">
    <td><CopyableCode code="application-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sms_channel"
    values={[
        { label: 'get_sms_channel', value: 'get_sms_channel' }
    ]}
>
<TabItem value="get_sms_channel">

Retrieves information about the status and settings of the SMS channel for an application.

```sql
SELECT
ApplicationId,
CreationDate,
Enabled,
HasCredential,
Id,
IsArchived,
LastModifiedBy,
LastModifiedDate,
Platform,
PromotionalMessagesPerSecond,
SenderId,
ShortCode,
TransactionalMessagesPerSecond,
Version
FROM aws.pinpoint.sms_channels
WHERE `application-id` = '{{ application-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_sms_channel"
    values={[
        { label: 'update_sms_channel', value: 'update_sms_channel' }
    ]}
>
<TabItem value="update_sms_channel">

Enables the SMS channel for an application or updates the status and settings of the SMS channel for an application.

```sql
UPDATE aws.pinpoint.sms_channels
SET 
SMSChannelRequest = '{{ SMSChannelRequest }}'
WHERE 
`application-id` = '{{ application-id }}' --required
AND region = '{{ region }}' --required
AND SMSChannelRequest = '{{ SMSChannelRequest }}' --required
RETURNING
SMSChannelResponse;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_sms_channel"
    values={[
        { label: 'delete_sms_channel', value: 'delete_sms_channel' }
    ]}
>
<TabItem value="delete_sms_channel">

Disables the SMS channel for an application and deletes any existing settings for the channel.

```sql
DELETE FROM aws.pinpoint.sms_channels
WHERE `application-id` = '{{ application-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
