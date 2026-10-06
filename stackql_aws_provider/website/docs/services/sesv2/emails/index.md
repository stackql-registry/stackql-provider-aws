--- 
title: emails
hide_title: false
hide_table_of_contents: false
keywords:
  - emails
  - sesv2
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

Creates, updates, deletes, gets or lists an <code>emails</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="emails" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.emails" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#send_email"><CopyableCode code="send_email" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Content"><code>Content</code></a></td>
    <td></td>
    <td>Sends an email message. You can use the Amazon SES API v2 to send the following types of messages: Simple – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon SES assembles the message for you. Raw – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message. Templated – A message that contains personalization tags. When you send this type of email, Amazon SES API v2 automatically replaces the tags with values that you specify.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="send_email"
    values={[
        { label: 'send_email', value: 'send_email' }
    ]}
>
<TabItem value="send_email">

Sends an email message. You can use the Amazon SES API v2 to send the following types of messages: Simple – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon SES assembles the message for you. Raw – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message. Templated – A message that contains personalization tags. When you send this type of email, Amazon SES API v2 automatically replaces the tags with values that you specify.

```sql
EXEC aws.sesv2.emails.send_email 
@region='{{ region }}' --required 
@@json=
'{
"FromEmailAddress": "{{ FromEmailAddress }}", 
"FromEmailAddressIdentityArn": "{{ FromEmailAddressIdentityArn }}", 
"Destination": "{{ Destination }}", 
"ReplyToAddresses": "{{ ReplyToAddresses }}", 
"FeedbackForwardingEmailAddress": "{{ FeedbackForwardingEmailAddress }}", 
"FeedbackForwardingEmailAddressIdentityArn": "{{ FeedbackForwardingEmailAddressIdentityArn }}", 
"Content": "{{ Content }}", 
"EmailTags": "{{ EmailTags }}", 
"ConfigurationSetName": "{{ ConfigurationSetName }}", 
"EndpointId": "{{ EndpointId }}", 
"TenantName": "{{ TenantName }}", 
"ListManagementOptions": "{{ ListManagementOptions }}", 
"ConfigurationOverrides": "{{ ConfigurationOverrides }}"
}'
;
```
</TabItem>
</Tabs>
