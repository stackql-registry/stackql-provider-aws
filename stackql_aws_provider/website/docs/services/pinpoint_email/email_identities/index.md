--- 
title: email_identities
hide_title: false
hide_table_of_contents: false
keywords:
  - email_identities
  - pinpoint_email
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

Creates, updates, deletes, gets or lists an <code>email_identities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="email_identities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_email.email_identities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_email_identity"
    values={[
        { label: 'get_email_identity', value: 'get_email_identity' },
        { label: 'list_email_identities', value: 'list_email_identities' }
    ]}
>
<TabItem value="get_email_identity">

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
    <td><CopyableCode code="DkimAttributes" /></td>
    <td><code>object</code></td>
    <td>An object that contains information about the DKIM attributes for the identity. This object includes the tokens that you use to create the CNAME records that are required to complete the DKIM verification process.</td>
</tr>
<tr>
    <td><CopyableCode code="FeedbackForwardingStatus" /></td>
    <td><code>boolean</code></td>
    <td>The feedback forwarding configuration for the identity. If the value is true, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email. When you set this value to false, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic or another event destination. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityType" /></td>
    <td><code>string</code></td>
    <td>The email identity type. (EMAIL_ADDRESS, DOMAIN, MANAGED_DOMAIN)</td>
</tr>
<tr>
    <td><CopyableCode code="MailFromAttributes" /></td>
    <td><code>object</code></td>
    <td>An object that contains information about the Mail-From attributes for the email identity.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>An array of objects that define the tags (keys and values) that are associated with the email identity.</td>
</tr>
<tr>
    <td><CopyableCode code="VerifiedForSendingStatus" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether or not the identity is verified. In Amazon Pinpoint, you can only send email from verified email addresses or domains. For more information about verifying identities, see the Amazon Pinpoint User Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_email_identities">

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
    <td><CopyableCode code="IdentityName" /></td>
    <td><code>string</code></td>
    <td>The address or domain of the identity.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityType" /></td>
    <td><code>string</code></td>
    <td>The email identity type. The identity type can be one of the following: EMAIL_ADDRESS – The identity is an email address. DOMAIN – The identity is a domain. MANAGED_DOMAIN – The identity is a domain that is managed by AWS. (EMAIL_ADDRESS, DOMAIN, MANAGED_DOMAIN)</td>
</tr>
<tr>
    <td><CopyableCode code="SendingEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether or not you can send email from the identity. In Amazon Pinpoint, an identity is an email address or domain that you send email from. Before you can send email from an identity, you have to demostrate that you own the identity, and that you authorize Amazon Pinpoint to send email from that identity.</td>
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
    <td><a href="#get_email_identity"><CopyableCode code="get_email_identity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-email_identity"><code>email_identity</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about a specific identity associated with your Amazon Pinpoint account, including the identity's verification status, its DKIM authentication status, and its custom Mail-From settings.</td>
</tr>
<tr>
    <td><a href="#list_email_identities"><CopyableCode code="list_email_identities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>Returns a list of all of the email identities that are associated with your Amazon Pinpoint account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't.</td>
</tr>
<tr>
    <td><a href="#create_email_identity"><CopyableCode code="create_email_identity" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EmailIdentity"><code>EmailIdentity</code></a></td>
    <td></td>
    <td>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email address or domain that you use when you send email. Before you can use an identity to send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission to send email from the address. When you verify an email address, Amazon Pinpoint sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS configuration for your domain. It usually takes around 72 hours to complete the domain verification process.</td>
</tr>
<tr>
    <td><a href="#put_email_identity_dkim_attributes"><CopyableCode code="put_email_identity_dkim_attributes" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-email_identity"><code>email_identity</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Used to enable or disable DKIM authentication for an email identity.</td>
</tr>
<tr>
    <td><a href="#delete_email_identity"><CopyableCode code="delete_email_identity" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-email_identity"><code>email_identity</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity can be either an email address or a domain name.</td>
</tr>
<tr>
    <td><a href="#put_email_identity_feedback_attributes"><CopyableCode code="put_email_identity_feedback_attributes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-email_identity"><code>email_identity</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event. When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email. When you disable feedback forwarding, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</td>
</tr>
<tr>
    <td><a href="#put_email_identity_mail_from_attributes"><CopyableCode code="put_email_identity_mail_from_attributes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-email_identity"><code>email_identity</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Used to enable or disable the custom Mail-From domain configuration for an email identity.</td>
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
<tr id="parameter-email_identity">
    <td><CopyableCode code="email_identity" /></td>
    <td><code>string</code></td>
    <td>The verified email identity that you want to set up the custom MAIL FROM domain for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token returned from a previous call to ListEmailIdentities to indicate the position in the list of identities.</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>The number of results to show in a single call to ListEmailIdentities. If the number of results is larger than the number you specified in this parameter, then the response includes a NextToken element, which you can use to obtain additional results. The value you specify has to be at least 0, and can be no more than 1000.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_email_identity"
    values={[
        { label: 'get_email_identity', value: 'get_email_identity' },
        { label: 'list_email_identities', value: 'list_email_identities' }
    ]}
>
<TabItem value="get_email_identity">

Provides information about a specific identity associated with your Amazon Pinpoint account, including the identity's verification status, its DKIM authentication status, and its custom Mail-From settings.

```sql
SELECT
DkimAttributes,
FeedbackForwardingStatus,
IdentityType,
MailFromAttributes,
Tags,
VerifiedForSendingStatus
FROM aws.pinpoint_email.email_identities
WHERE email_identity = '{{ email_identity }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_email_identities">

Returns a list of all of the email identities that are associated with your Amazon Pinpoint account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't.

```sql
SELECT
IdentityName,
IdentityType,
SendingEnabled
FROM aws.pinpoint_email.email_identities
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_email_identity"
    values={[
        { label: 'create_email_identity', value: 'create_email_identity' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_email_identity">

Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email address or domain that you use when you send email. Before you can use an identity to send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission to send email from the address. When you verify an email address, Amazon Pinpoint sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS configuration for your domain. It usually takes around 72 hours to complete the domain verification process.

```sql
INSERT INTO aws.pinpoint_email.email_identities (
EmailIdentity,
Tags,
region
)
SELECT 
'{{ EmailIdentity }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
DkimAttributes,
IdentityType,
VerifiedForSendingStatus
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: email_identities
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the email_identities resource.
    - name: EmailIdentity
      value: "{{ EmailIdentity }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_email_identity_dkim_attributes"
    values={[
        { label: 'put_email_identity_dkim_attributes', value: 'put_email_identity_dkim_attributes' }
    ]}
>
<TabItem value="put_email_identity_dkim_attributes">

Used to enable or disable DKIM authentication for an email identity.

```sql
REPLACE aws.pinpoint_email.email_identities
SET 
SigningEnabled = {{ SigningEnabled }}
WHERE 
email_identity = '{{ email_identity }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_email_identity"
    values={[
        { label: 'delete_email_identity', value: 'delete_email_identity' }
    ]}
>
<TabItem value="delete_email_identity">

Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity can be either an email address or a domain name.

```sql
DELETE FROM aws.pinpoint_email.email_identities
WHERE email_identity = '{{ email_identity }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="put_email_identity_feedback_attributes"
    values={[
        { label: 'put_email_identity_feedback_attributes', value: 'put_email_identity_feedback_attributes' },
        { label: 'put_email_identity_mail_from_attributes', value: 'put_email_identity_mail_from_attributes' }
    ]}
>
<TabItem value="put_email_identity_feedback_attributes">

Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event. When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email. When you disable feedback forwarding, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).

```sql
EXEC aws.pinpoint_email.email_identities.put_email_identity_feedback_attributes 
@email_identity='{{ email_identity }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"EmailForwardingEnabled": {{ EmailForwardingEnabled }}
}'
;
```
</TabItem>
<TabItem value="put_email_identity_mail_from_attributes">

Used to enable or disable the custom Mail-From domain configuration for an email identity.

```sql
EXEC aws.pinpoint_email.email_identities.put_email_identity_mail_from_attributes 
@email_identity='{{ email_identity }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"MailFromDomain": "{{ MailFromDomain }}", 
"BehaviorOnMxFailure": "{{ BehaviorOnMxFailure }}"
}'
;
```
</TabItem>
</Tabs>
