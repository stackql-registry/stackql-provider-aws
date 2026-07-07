--- 
title: identities
hide_title: false
hide_table_of_contents: false
keywords:
  - identities
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

Creates, updates, deletes, gets or lists an <code>identities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.identities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_identities"
    values={[
        { label: 'list_identities', value: 'list_identities' }
    ]}
>
<TabItem value="list_identities">

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
    <td><CopyableCode code="identity" /></td>
    <td><code>string</code></td>
    <td>A list of identities.</td>
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
    <td><a href="#list_identities"><CopyableCode code="list_identities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-IdentityType"><code>IdentityType</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Returns a list containing all of the identities (email addresses and domains) for your Amazon Web Services account in the current Amazon Web Services Region, regardless of verification status. You can execute this operation no more than once per second. It's recommended that for successive pagination calls of this API, you continue to the use the same parameter/value pairs as used in the original call, e.g., if you used IdentityType=Domain in the the original call and received a NextToken in the response, you should continue providing the IdentityType=Domain parameter for further NextToken calls; however, if you didn't provide the IdentityType parameter in the original call, then continue to not provide it for successive pagination calls. Using this protocol will ensure consistent results.</td>
</tr>
<tr>
    <td><a href="#set_identity_dkim_enabled"><CopyableCode code="set_identity_dkim_enabled" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DkimEnabled"><code>DkimEnabled</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Identity"><code>Identity</code></a></td>
    <td>Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends from addresses on that domain. If Easy DKIM signing is enabled for an email address, then Amazon SES uses DKIM to sign all email it sends from that address. For email addresses (for example, user@example.com), you can only enable DKIM signing if the corresponding domain (in this case, example.com) has been set up to use Easy DKIM. You can enable DKIM signing for an identity at any time after you start the verification process for the identity, even if the verification process isn't complete. You can execute this operation no more than once per second. For more information about Easy DKIM signing, go to the Amazon SES Developer Guide.</td>
</tr>
<tr>
    <td><a href="#set_identity_feedback_forwarding_enabled"><CopyableCode code="set_identity_feedback_forwarding_enabled" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ForwardingEnabled"><code>ForwardingEnabled</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Identity"><code>Identity</code></a></td>
    <td>Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints. Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS. You can execute this operation no more than once per second. For more information about using notifications with Amazon SES, see the Amazon SES Developer Guide.</td>
</tr>
<tr>
    <td><a href="#set_identity_headers_in_notifications_enabled"><CopyableCode code="set_identity_headers_in_notifications_enabled" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-NotificationType"><code>NotificationType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Identity"><code>Identity</code></a>, <a href="#parameter-Enabled"><code>Enabled</code></a></td>
    <td>Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type. You can execute this operation no more than once per second. For more information about using notifications with Amazon SES, see the Amazon SES Developer Guide.</td>
</tr>
<tr>
    <td><a href="#set_identity_mail_from_domain"><CopyableCode code="set_identity_mail_from_domain" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Identity"><code>Identity</code></a>, <a href="#parameter-MailFromDomain"><code>MailFromDomain</code></a>, <a href="#parameter-BehaviorOnMXFailure"><code>BehaviorOnMXFailure</code></a></td>
    <td>Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain). To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain's DNS settings. To ensure that your emails pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#delete_identity"><CopyableCode code="delete_identity" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Identity"><code>Identity</code></a></td>
    <td>Deletes the specified identity (an email address or a domain) from the list of verified identities. You can execute this operation no more than once per second.</td>
</tr>
<tr>
    <td><a href="#set_identity_notification_topic"><CopyableCode code="set_identity_notification_topic" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-NotificationType"><code>NotificationType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Identity"><code>Identity</code></a>, <a href="#parameter-SnsTopic"><code>SnsTopic</code></a></td>
    <td>Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use this operation, you specify a verified identity, such as an email address or domain. When you send an email that uses the chosen identity in the Source field, Amazon SES sends notifications to the topic you specified. You can send bounce, complaint, or delivery notifications (or any combination of the three) to the Amazon SNS topic that you specify. You can execute this operation no more than once per second. For more information about feedback notification, see the Amazon SES Developer Guide.</td>
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
<tr id="parameter-DkimEnabled">
    <td><CopyableCode code="DkimEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Sets whether DKIM signing is enabled for an identity. Set to true to enable DKIM signing for this identity; false to disable it.</td>
</tr>
<tr id="parameter-ForwardingEnabled">
    <td><CopyableCode code="ForwardingEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Sets whether Amazon SES forwards bounce and complaint notifications as email. true specifies that Amazon SES forwards bounce and complaint notifications as email, in addition to any Amazon SNS topic publishing otherwise specified. false specifies that Amazon SES publishes bounce and complaint notifications only through Amazon SNS. This value can only be set to false when Amazon SNS topics are set for both Bounce and Complaint notification types.</td>
</tr>
<tr id="parameter-NotificationType">
    <td><CopyableCode code="NotificationType" /></td>
    <td><code>string</code></td>
    <td>The type of notifications that are published to the specified Amazon SNS topic.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-BehaviorOnMXFailure">
    <td><CopyableCode code="BehaviorOnMXFailure" /></td>
    <td><code>string</code></td>
    <td>The action for Amazon SES to take if it cannot successfully read the required MX record when you send an email. If you choose UseDefaultValue, Amazon SES uses amazonses.com (or a subdomain of that) as the MAIL FROM domain. If you choose RejectMessage, Amazon SES returns a MailFromDomainNotVerified error and not send the email. The action specified in BehaviorOnMXFailure is taken when the custom MAIL FROM domain setup is in the Pending, Failed, and TemporaryFailure states.</td>
</tr>
<tr id="parameter-Enabled">
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Sets whether Amazon SES includes the original email headers in Amazon SNS notifications of the specified notification type. A value of true specifies that Amazon SES includes headers in notifications, and a value of false specifies that Amazon SES does not include headers in notifications. This value can only be set when NotificationType is already set to use a particular Amazon SNS topic.</td>
</tr>
<tr id="parameter-Identity">
    <td><CopyableCode code="Identity" /></td>
    <td><code>string</code></td>
    <td>The identity (email address or domain) for the Amazon SNS topic. You can only specify a verified identity for this parameter. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). The following examples are all valid identities: sender@example.com, example.com, arn:aws:ses:us-east-1:123456789012:identity/example.com.</td>
</tr>
<tr id="parameter-IdentityType">
    <td><CopyableCode code="IdentityType" /></td>
    <td><code>string</code></td>
    <td>The type of the identities to list. Possible values are "EmailAddress" and "Domain". If this parameter is omitted, then all identities are listed.</td>
</tr>
<tr id="parameter-MailFromDomain">
    <td><CopyableCode code="MailFromDomain" /></td>
    <td><code>string</code></td>
    <td>The custom MAIL FROM domain for the verified identity to use. The MAIL FROM domain must 1) be a subdomain of the verified identity, 2) not be used in a "From" address if the MAIL FROM domain is the destination of email feedback forwarding (for more information, see the Amazon SES Developer Guide), and 3) not be used to receive emails. A value of null disables the custom MAIL FROM setting for the identity.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of identities per page. Possible values are 1-1000 inclusive.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use for pagination.</td>
</tr>
<tr id="parameter-SnsTopic">
    <td><CopyableCode code="SnsTopic" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon SNS topic. If the parameter is omitted from the request or a null value is passed, SnsTopic is cleared and publishing is disabled.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_identities"
    values={[
        { label: 'list_identities', value: 'list_identities' }
    ]}
>
<TabItem value="list_identities">

Returns a list containing all of the identities (email addresses and domains) for your Amazon Web Services account in the current Amazon Web Services Region, regardless of verification status. You can execute this operation no more than once per second. It's recommended that for successive pagination calls of this API, you continue to the use the same parameter/value pairs as used in the original call, e.g., if you used IdentityType=Domain in the the original call and received a NextToken in the response, you should continue providing the IdentityType=Domain parameter for further NextToken calls; however, if you didn't provide the IdentityType parameter in the original call, then continue to not provide it for successive pagination calls. Using this protocol will ensure consistent results.

```sql
SELECT
identity
FROM aws.ses.identities
WHERE region = '{{ region }}' -- required
AND IdentityType = '{{ IdentityType }}'
AND NextToken = '{{ NextToken }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_identity_dkim_enabled"
    values={[
        { label: 'set_identity_dkim_enabled', value: 'set_identity_dkim_enabled' },
        { label: 'set_identity_feedback_forwarding_enabled', value: 'set_identity_feedback_forwarding_enabled' },
        { label: 'set_identity_headers_in_notifications_enabled', value: 'set_identity_headers_in_notifications_enabled' },
        { label: 'set_identity_mail_from_domain', value: 'set_identity_mail_from_domain' }
    ]}
>
<TabItem value="set_identity_dkim_enabled">

Enables or disables Easy DKIM signing of email sent from an identity. If Easy DKIM signing is enabled for a domain, then Amazon SES uses DKIM to sign all email that it sends from addresses on that domain. If Easy DKIM signing is enabled for an email address, then Amazon SES uses DKIM to sign all email it sends from that address. For email addresses (for example, user@example.com), you can only enable DKIM signing if the corresponding domain (in this case, example.com) has been set up to use Easy DKIM. You can enable DKIM signing for an identity at any time after you start the verification process for the identity, even if the verification process isn't complete. You can execute this operation no more than once per second. For more information about Easy DKIM signing, go to the Amazon SES Developer Guide.

```sql
UPDATE aws.ses.identities
SET 
-- No updatable properties
WHERE 
DkimEnabled = '{{ DkimEnabled }}' --required
AND region = '{{ region }}' --required
AND Identity = '{{ Identity}}';
```
</TabItem>
<TabItem value="set_identity_feedback_forwarding_enabled">

Given an identity (an email address or a domain), enables or disables whether Amazon SES forwards bounce and complaint notifications as email. Feedback forwarding can only be disabled when Amazon Simple Notification Service (Amazon SNS) topics are specified for both bounces and complaints. Feedback forwarding does not apply to delivery notifications. Delivery notifications are only available through Amazon SNS. You can execute this operation no more than once per second. For more information about using notifications with Amazon SES, see the Amazon SES Developer Guide.

```sql
UPDATE aws.ses.identities
SET 
-- No updatable properties
WHERE 
ForwardingEnabled = '{{ ForwardingEnabled }}' --required
AND region = '{{ region }}' --required
AND Identity = '{{ Identity}}';
```
</TabItem>
<TabItem value="set_identity_headers_in_notifications_enabled">

Given an identity (an email address or a domain), sets whether Amazon SES includes the original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified type. You can execute this operation no more than once per second. For more information about using notifications with Amazon SES, see the Amazon SES Developer Guide.

```sql
UPDATE aws.ses.identities
SET 
-- No updatable properties
WHERE 
NotificationType = '{{ NotificationType }}' --required
AND region = '{{ region }}' --required
AND Identity = '{{ Identity}}'
AND Enabled = {{ Enabled}};
```
</TabItem>
<TabItem value="set_identity_mail_from_domain">

Enables or disables the custom MAIL FROM domain setup for a verified identity (an email address or a domain). To send emails using the specified MAIL FROM domain, you must add an MX record to your MAIL FROM domain's DNS settings. To ensure that your emails pass Sender Policy Framework (SPF) checks, you must also add or update an SPF record. For more information, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
UPDATE aws.ses.identities
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND Identity = '{{ Identity}}'
AND MailFromDomain = '{{ MailFromDomain}}'
AND BehaviorOnMXFailure = '{{ BehaviorOnMXFailure}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_identity"
    values={[
        { label: 'delete_identity', value: 'delete_identity' }
    ]}
>
<TabItem value="delete_identity">

Deletes the specified identity (an email address or a domain) from the list of verified identities. You can execute this operation no more than once per second.

```sql
DELETE FROM aws.ses.identities
WHERE region = '{{ region }}' --required
AND Identity = '{{ Identity }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="set_identity_notification_topic"
    values={[
        { label: 'set_identity_notification_topic', value: 'set_identity_notification_topic' }
    ]}
>
<TabItem value="set_identity_notification_topic">

Sets an Amazon Simple Notification Service (Amazon SNS) topic to use when delivering notifications. When you use this operation, you specify a verified identity, such as an email address or domain. When you send an email that uses the chosen identity in the Source field, Amazon SES sends notifications to the topic you specified. You can send bounce, complaint, or delivery notifications (or any combination of the three) to the Amazon SNS topic that you specify. You can execute this operation no more than once per second. For more information about feedback notification, see the Amazon SES Developer Guide.

```sql
EXEC aws.ses.identities.set_identity_notification_topic 
@NotificationType='{{ NotificationType }}' --required, 
@region='{{ region }}' --required, 
@Identity='{{ Identity }}', 
@SnsTopic='{{ SnsTopic }}'
;
```
</TabItem>
</Tabs>
