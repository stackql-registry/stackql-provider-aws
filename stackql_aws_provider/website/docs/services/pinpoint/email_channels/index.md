--- 
title: email_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - email_channels
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

Creates, updates, deletes, gets or lists an <code>email_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="email_channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.email_channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_email_channel"
    values={[
        { label: 'get_email_channel', value: 'get_email_channel' }
    ]}
>
<TabItem value="get_email_channel">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application that the email channel applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_set" /></td>
    <td><code>string</code></td>
    <td>The Amazon SES configuration set that's applied to messages that are sent through the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 format, when the email channel was enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the email channel is enabled for the application.</td>
</tr>
<tr>
    <td><CopyableCode code="from_address" /></td>
    <td><code>string</code></td>
    <td>The verified email address that email is sent from when you send email through the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="has_credential" /></td>
    <td><code>boolean</code></td>
    <td>(Not used) This property is retained only for backward compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>(Deprecated) An identifier for the email channel. This property is retained only for backward compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="identity" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that's used when you send email through the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="is_archived" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the email channel is archived.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The user who last modified the email channel.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 format, when the email channel was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="messages_per_second" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of emails that can be sent through the channel each second.</td>
</tr>
<tr>
    <td><CopyableCode code="orchestration_sending_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of an IAM role for Amazon Pinpoint to use to send email from your campaigns or journeys through Amazon SES.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The type of messaging or notification platform for the channel. For the email channel, this value is EMAIL.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AWS Identity and Access Management (IAM) role that Amazon Pinpoint uses to submit email-related event data for the channel.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The current version of the email channel.</td>
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
    <td><a href="#get_email_channel"><CopyableCode code="get_email_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the status and settings of the email channel for an application.</td>
</tr>
<tr>
    <td><a href="#update_email_channel"><CopyableCode code="update_email_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EmailChannelRequest"><code>EmailChannelRequest</code></a></td>
    <td></td>
    <td>Enables the email channel for an application or updates the status and settings of the email channel for an application.</td>
</tr>
<tr>
    <td><a href="#delete_email_channel"><CopyableCode code="delete_email_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables the email channel for an application and deletes any existing settings for the channel.</td>
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
    defaultValue="get_email_channel"
    values={[
        { label: 'get_email_channel', value: 'get_email_channel' }
    ]}
>
<TabItem value="get_email_channel">

Retrieves information about the status and settings of the email channel for an application.

```sql
SELECT
application_id,
configuration_set,
creation_date,
enabled,
from_address,
has_credential,
id,
identity,
is_archived,
last_modified_by,
last_modified_date,
messages_per_second,
orchestration_sending_role_arn,
platform,
role_arn,
version
FROM aws.pinpoint.email_channels
WHERE `application-id` = '{{ application-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_email_channel"
    values={[
        { label: 'update_email_channel', value: 'update_email_channel' }
    ]}
>
<TabItem value="update_email_channel">

Enables the email channel for an application or updates the status and settings of the email channel for an application.

```sql
UPDATE aws.pinpoint.email_channels
SET 
EmailChannelRequest = '{{ EmailChannelRequest }}'
WHERE 
`application-id` = '{{ application-id }}' --required
AND region = '{{ region }}' --required
AND EmailChannelRequest = '{{ EmailChannelRequest }}' --required
RETURNING
email_channel_response;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_email_channel"
    values={[
        { label: 'delete_email_channel', value: 'delete_email_channel' }
    ]}
>
<TabItem value="delete_email_channel">

Disables the email channel for an application and deletes any existing settings for the channel.

```sql
DELETE FROM aws.pinpoint.email_channels
WHERE `application-id` = '{{ application-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
