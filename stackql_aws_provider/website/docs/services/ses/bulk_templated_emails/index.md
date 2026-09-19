--- 
title: bulk_templated_emails
hide_title: false
hide_table_of_contents: false
keywords:
  - bulk_templated_emails
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

Creates, updates, deletes, gets or lists a <code>bulk_templated_emails</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bulk_templated_emails" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.bulk_templated_emails" /></td></tr>
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
    <td><a href="#send_bulk_templated_email"><CopyableCode code="send_bulk_templated_email" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-Source"><code>Source</code></a>, <a href="#parameter-Template"><code>Template</code></a>, <a href="#parameter-DefaultTemplateData"><code>DefaultTemplateData</code></a>, <a href="#parameter-Destinations"><code>Destinations</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SourceArn"><code>SourceArn</code></a>, <a href="#parameter-ReplyToAddresses"><code>ReplyToAddresses</code></a>, <a href="#parameter-ReturnPath"><code>ReturnPath</code></a>, <a href="#parameter-ReturnPathArn"><code>ReturnPathArn</code></a>, <a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a>, <a href="#parameter-DefaultTags"><code>DefaultTags</code></a>, <a href="#parameter-TemplateArn"><code>TemplateArn</code></a></td>
    <td>Composes an email message to multiple destinations. The message body is created using an email template. To send email using this operation, your call must meet the following requirements: The call must refer to an existing email template. You can create email templates using CreateTemplate. The message must be sent from a verified email address or domain. If your account is still in the Amazon SES sandbox, you may send only to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see Verifying Email Addresses and Domains in the Amazon SES Developer Guide. The maximum message size is 10 MB. Each Destination parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format UserName@&#91;SubDomain.&#93;Domain.TopLevelDomain), the entire message is rejected, even if the message contains other recipients that are valid. The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the SendBulkTemplatedEmail operation several times to send the message to each group. The number of destinations you can contact in a single call can be limited by your account's maximum sending rate.</td>
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
<tr id="parameter-DefaultTemplateData">
    <td><CopyableCode code="DefaultTemplateData" /></td>
    <td><code>string</code></td>
    <td>A list of replacement values to apply to the template when replacement data is not specified in a Destination object. These values act as a default or fallback option when no other data is available. The template data is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.</td>
</tr>
<tr id="parameter-Destinations">
    <td><CopyableCode code="Destinations" /></td>
    <td><code>array</code></td>
    <td>One or more Destination objects. All of the recipients in a Destination receive the same version of the email. You can specify up to 50 Destination objects within a Destinations array.</td>
</tr>
<tr id="parameter-Source">
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the Amazon SES Developer Guide. If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the SourceArn parameter. For more information about sending authorization, see the Amazon SES Developer Guide. Amazon SES does not support the SMTPUTF8 extension, as described in RFC6531. For this reason, the email address string must be 7-bit ASCII. If you want to send to or from email addresses that contain Unicode characters in the domain part of an address, you must encode the domain using Punycode. Punycode is not permitted in the local part of the email address (the part before the @ sign) nor in the "friendly from" name. If you want to use Unicode characters in the "friendly from" name, you must encode the "friendly from" name using MIME encoded-word syntax, as described in Sending raw email using the Amazon SES API. For more information about Punycode, see RFC 3492.</td>
</tr>
<tr id="parameter-Template">
    <td><CopyableCode code="Template" /></td>
    <td><code>string</code></td>
    <td>The template to use when sending this email.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ConfigurationSetName">
    <td><CopyableCode code="ConfigurationSetName" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration set to use when you send an email using SendBulkTemplatedEmail.</td>
</tr>
<tr id="parameter-DefaultTags">
    <td><CopyableCode code="DefaultTags" /></td>
    <td><code>array</code></td>
    <td>A list of tags, in the form of name/value pairs, to apply to an email that you send to a destination using SendBulkTemplatedEmail.</td>
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
<tr id="parameter-TemplateArn">
    <td><CopyableCode code="TemplateArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the template to use when sending this email.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="send_bulk_templated_email"
    values={[
        { label: 'send_bulk_templated_email', value: 'send_bulk_templated_email' }
    ]}
>
<TabItem value="send_bulk_templated_email">

Composes an email message to multiple destinations. The message body is created using an email template. To send email using this operation, your call must meet the following requirements: The call must refer to an existing email template. You can create email templates using CreateTemplate. The message must be sent from a verified email address or domain. If your account is still in the Amazon SES sandbox, you may send only to verified addresses or domains, or to email addresses associated with the Amazon SES Mailbox Simulator. For more information, see Verifying Email Addresses and Domains in the Amazon SES Developer Guide. The maximum message size is 10 MB. Each Destination parameter must include at least one recipient email address. The recipient address can be a To: address, a CC: address, or a BCC: address. If a recipient email address is invalid (that is, it is not in the format UserName@[SubDomain.]Domain.TopLevelDomain), the entire message is rejected, even if the message contains other recipients that are valid. The message may not include more than 50 recipients, across the To:, CC: and BCC: fields. If you need to send an email message to a larger audience, you can divide your recipient list into groups of 50 or fewer, and then call the SendBulkTemplatedEmail operation several times to send the message to each group. The number of destinations you can contact in a single call can be limited by your account's maximum sending rate.

```sql
EXEC aws.ses.bulk_templated_emails.send_bulk_templated_email 
@Source='{{ Source }}' --required, 
@Template='{{ Template }}' --required, 
@DefaultTemplateData='{{ DefaultTemplateData }}' --required, 
@Destinations='{{ Destinations }}' --required, 
@region='{{ region }}' --required, 
@SourceArn='{{ SourceArn }}', 
@ReplyToAddresses='{{ ReplyToAddresses }}', 
@ReturnPath='{{ ReturnPath }}', 
@ReturnPathArn='{{ ReturnPathArn }}', 
@ConfigurationSetName='{{ ConfigurationSetName }}', 
@DefaultTags='{{ DefaultTags }}', 
@TemplateArn='{{ TemplateArn }}'
;
```
</TabItem>
</Tabs>
