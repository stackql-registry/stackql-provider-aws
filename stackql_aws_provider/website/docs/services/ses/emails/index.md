--- 
title: emails
hide_title: false
hide_table_of_contents: false
keywords:
  - emails
  - ses
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.emails" /></td></tr>
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
    <td><a href="#parameter-Source"><code>Source</code></a>, <a href="#parameter-Destination"><code>Destination</code></a>, <a href="#parameter-Message"><code>Message</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReplyToAddresses"><code>ReplyToAddresses</code></a>, <a href="#parameter-ReturnPath"><code>ReturnPath</code></a>, <a href="#parameter-SourceArn"><code>SourceArn</code></a>, <a href="#parameter-ReturnPathArn"><code>ReturnPathArn</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a></td>
    <td>Composes an email message and immediately queues it for sending. To send email using this operation, your message must meet the following requirements: The message must be sent from a verified email address or domain. If you attempt to send email using a non-verified address or domain, the operation results in an "Email address not verified" error. If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see Verifying Email Addresses and Domains in the Amazon SES Developer Guide. The maximum message size is 10 MB. The message must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format UserName@&#91;SubDomain.&#93;Domain.TopLevelDomain), the entire message is rejected, even if the message contains other recipients that are valid. The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the SendEmail operation several times to send the message to each group. For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your sending quota). For more information about sending quotas in Amazon SES, see Managing Your Amazon SES Sending Limits in the Amazon SES Developer Guide.</td>
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
<tr id="parameter-Destination">
    <td><CopyableCode code="Destination" /></td>
    <td><code>object</code></td>
    <td>The destination for this email, composed of To:, CC:, and BCC: fields.</td>
</tr>
<tr id="parameter-Message">
    <td><CopyableCode code="Message" /></td>
    <td><code>object</code></td>
    <td>The message to be sent.</td>
</tr>
<tr id="parameter-Source">
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the Amazon SES Developer Guide. If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the SourceArn parameter. For more information about sending authorization, see the Amazon SES Developer Guide. Amazon SES does not support the SMTPUTF8 extension, as described in RFC6531. For this reason, the email address string must be 7-bit ASCII. If you want to send to or from email addresses that contain Unicode characters in the domain part of an address, you must encode the domain using Punycode. Punycode is not permitted in the local part of the email address (the part before the @ sign) nor in the "friendly from" name. If you want to use Unicode characters in the "friendly from" name, you must encode the "friendly from" name using MIME encoded-word syntax, as described in Sending raw email using the Amazon SES API. For more information about Punycode, see RFC 3492.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ConfigurationSetName">
    <td><CopyableCode code="ConfigurationSetName" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration set to use when you send an email using SendEmail.</td>
</tr>
<tr id="parameter-ReplyToAddresses">
    <td><CopyableCode code="ReplyToAddresses" /></td>
    <td><code>array</code></td>
    <td>The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address receives the reply.</td>
</tr>
<tr id="parameter-ReturnPath">
    <td><CopyableCode code="ReturnPath" /></td>
    <td><code>string</code></td>
    <td>The email address that bounces and complaints are forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message is returned from the recipient's ISP; this message is forwarded to the email address specified by the ReturnPath parameter. The ReturnPath parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES.</td>
</tr>
<tr id="parameter-ReturnPathArn">
    <td><CopyableCode code="ReturnPathArn" /></td>
    <td><code>string</code></td>
    <td>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the ReturnPath parameter. For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to use feedback@example.com, then you would specify the ReturnPathArn to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the ReturnPath to be feedback@example.com. For more information about sending authorization, see the Amazon SES Developer Guide.</td>
</tr>
<tr id="parameter-SourceArn">
    <td><CopyableCode code="SourceArn" /></td>
    <td><code>string</code></td>
    <td>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the Source parameter. For example, if the owner of example.com (which has ARN arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that authorizes you to send from user@example.com, then you would specify the SourceArn to be arn:aws:ses:us-east-1:123456789012:identity/example.com, and the Source to be user@example.com. For more information about sending authorization, see the Amazon SES Developer Guide.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags, in the form of name/value pairs, to apply to an email that you send using SendEmail. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.</td>
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

Composes an email message and immediately queues it for sending. To send email using this operation, your message must meet the following requirements: The message must be sent from a verified email address or domain. If you attempt to send email using a non-verified address or domain, the operation results in an "Email address not verified" error. If your account is still in the Amazon SES sandbox, you may only send to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see Verifying Email Addresses and Domains in the Amazon SES Developer Guide. The maximum message size is 10 MB. The message must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format UserName@[SubDomain.]Domain.TopLevelDomain), the entire message is rejected, even if the message contains other recipients that are valid. The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the SendEmail operation several times to send the message to each group. For every message that you send, the total number of recipients (including each recipient in the To:, CC: and BCC: fields) is counted against the maximum number of emails you can send in a 24-hour period (your sending quota). For more information about sending quotas in Amazon SES, see Managing Your Amazon SES Sending Limits in the Amazon SES Developer Guide.

```sql
EXEC aws.ses.emails.send_email 
@Source='{{ Source }}' --required, 
@Destination='{{ Destination }}' --required, 
@Message='{{ Message }}' --required, 
@region='{{ region }}' --required, 
@ReplyToAddresses='{{ ReplyToAddresses }}', 
@ReturnPath='{{ ReturnPath }}', 
@SourceArn='{{ SourceArn }}', 
@ReturnPathArn='{{ ReturnPathArn }}', 
@Tags='{{ Tags }}', 
@ConfigurationSetName='{{ ConfigurationSetName }}'
;
```
</TabItem>
</Tabs>
