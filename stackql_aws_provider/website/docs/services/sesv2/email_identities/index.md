--- 
title: email_identities
hide_title: false
hide_table_of_contents: false
keywords:
  - email_identities
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

Creates, updates, deletes, gets or lists an <code>email_identities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="email_identities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.email_identities" /></td></tr>
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
    <td><CopyableCode code="ConfigurationSetName" /></td>
    <td><code>string</code></td>
    <td>The name of a configuration set. Configuration sets are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</td>
</tr>
<tr>
    <td><CopyableCode code="DkimAttributes" /></td>
    <td><code>object</code></td>
    <td>An object that contains information about the DKIM attributes for the identity.</td>
</tr>
<tr>
    <td><CopyableCode code="FeedbackForwardingStatus" /></td>
    <td><code>boolean</code></td>
    <td>The feedback forwarding configuration for the identity. If the value is true, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the Return-Path header of the original email. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityType" /></td>
    <td><code>string</code></td>
    <td>The email identity type. Note: the MANAGED_DOMAIN identity type is not supported. (EMAIL_ADDRESS, DOMAIN, MANAGED_DOMAIN)</td>
</tr>
<tr>
    <td><CopyableCode code="MailFromAttributes" /></td>
    <td><code>object</code></td>
    <td>An object that contains information about the Mail-From attributes for the email identity.</td>
</tr>
<tr>
    <td><CopyableCode code="Policies" /></td>
    <td><code>object</code></td>
    <td>A map of policy names to policies.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>An array of objects that define the tags (keys and values) that are associated with the email identity.</td>
</tr>
<tr>
    <td><CopyableCode code="VerificationInfo" /></td>
    <td><code>object</code></td>
    <td>An object that contains additional information about the verification status for the identity.</td>
</tr>
<tr>
    <td><CopyableCode code="VerificationStatus" /></td>
    <td><code>string</code></td>
    <td>The verification status of the identity. The status can be one of the following: PENDING – The verification process was initiated, but Amazon SES hasn't yet been able to verify the identity. SUCCESS – The verification process completed successfully. FAILED – The verification process failed. TEMPORARY_FAILURE – A temporary issue is preventing Amazon SES from determining the verification status of the identity. NOT_STARTED – The verification process hasn't been initiated for the identity. (PENDING, SUCCESS, FAILED, TEMPORARY_FAILURE, NOT_STARTED)</td>
</tr>
<tr>
    <td><CopyableCode code="VerifiedForSendingStatus" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether or not the identity is verified. You can only send email from verified email addresses or domains. For more information about verifying identities, see the Amazon Pinpoint User Guide.</td>
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
    <td><CopyableCode code="EmailIdentities" /></td>
    <td><code>array</code></td>
    <td>An array that includes all of the email identities associated with your Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates that there are additional configuration sets to list. To view additional configuration sets, issue another request to ListEmailIdentities, and pass this token in the NextToken parameter.</td>
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
    <td>Provides information about a specific identity, including the identity's verification status, sending authorization policies, its DKIM authentication status, and its custom Mail-From settings.</td>
</tr>
<tr>
    <td><a href="#list_email_identities"><CopyableCode code="list_email_identities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>Returns a list of all of the email identities that are associated with your Amazon Web Services account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't. This operation returns identities that are associated with Amazon SES and Amazon Pinpoint.</td>
</tr>
<tr>
    <td><a href="#create_email_identity"><CopyableCode code="create_email_identity" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EmailIdentity"><code>EmailIdentity</code></a></td>
    <td></td>
    <td>Starts the process of verifying an email identity. An identity is an email address or domain that you use when you send email. Before you can use an identity to send email, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2 permission to send email from the identity. When you verify an email address, Amazon SES sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. When you verify a domain without specifying the DkimSigningAttributes object, this operation provides a set of DKIM tokens. You can convert these tokens into CNAME records, which you then add to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. This verification method is known as Easy DKIM. Alternatively, you can perform the verification process by providing your own public-private key pair. This verification method is known as Bring Your Own DKIM (BYODKIM). To use BYODKIM, your call to the CreateEmailIdentity operation has to include the DkimSigningAttributes object. When you specify this object, you provide a selector (a component of the DNS record name that identifies the public key to use for DKIM authentication) and a private key. When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. For some DNS providers, it can take 72 hours or more to complete the domain verification process. Additionally, you can associate an existing configuration set with the email identity that you're verifying.</td>
</tr>
<tr>
    <td><a href="#put_email_identity_dkim_signing_attributes"><CopyableCode code="put_email_identity_dkim_signing_attributes" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-email_identity"><code>email_identity</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SigningAttributesOrigin"><code>SigningAttributesOrigin</code></a></td>
    <td></td>
    <td>Used to configure or change the DKIM authentication settings for an email domain identity. You can use this operation to do any of the following: Update the signing attributes for an identity that uses Bring Your Own DKIM (BYODKIM). Update the key length that should be used for Easy DKIM. Change from using no DKIM authentication to using Easy DKIM. Change from using no DKIM authentication to using BYODKIM. Change from using Easy DKIM to using BYODKIM. Change from using BYODKIM to using Easy DKIM.</td>
</tr>
<tr>
    <td><a href="#put_email_identity_configuration_set_attributes"><CopyableCode code="put_email_identity_configuration_set_attributes" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-email_identity"><code>email_identity</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Used to associate a configuration set with an email identity.</td>
</tr>
<tr>
    <td><a href="#delete_email_identity"><CopyableCode code="delete_email_identity" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-email_identity"><code>email_identity</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an email identity. An identity can be either an email address or a domain name.</td>
</tr>
<tr>
    <td><a href="#put_email_identity_dkim_attributes"><CopyableCode code="put_email_identity_dkim_attributes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-email_identity"><code>email_identity</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Used to enable or disable DKIM authentication for an email identity.</td>
</tr>
<tr>
    <td><a href="#put_email_identity_feedback_attributes"><CopyableCode code="put_email_identity_feedback_attributes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-email_identity"><code>email_identity</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event. If the value is true, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the Return-Path header of the original email. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</td>
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
    <td>The verified email identity.</td>
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

Provides information about a specific identity, including the identity's verification status, sending authorization policies, its DKIM authentication status, and its custom Mail-From settings.

```sql
SELECT
ConfigurationSetName,
DkimAttributes,
FeedbackForwardingStatus,
IdentityType,
MailFromAttributes,
Policies,
Tags,
VerificationInfo,
VerificationStatus,
VerifiedForSendingStatus
FROM aws.sesv2.email_identities
WHERE email_identity = '{{ email_identity }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_email_identities">

Returns a list of all of the email identities that are associated with your Amazon Web Services account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't. This operation returns identities that are associated with Amazon SES and Amazon Pinpoint.

```sql
SELECT
EmailIdentities,
NextToken
FROM aws.sesv2.email_identities
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

Starts the process of verifying an email identity. An identity is an email address or domain that you use when you send email. Before you can use an identity to send email, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2 permission to send email from the identity. When you verify an email address, Amazon SES sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. When you verify a domain without specifying the DkimSigningAttributes object, this operation provides a set of DKIM tokens. You can convert these tokens into CNAME records, which you then add to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. This verification method is known as Easy DKIM. Alternatively, you can perform the verification process by providing your own public-private key pair. This verification method is known as Bring Your Own DKIM (BYODKIM). To use BYODKIM, your call to the CreateEmailIdentity operation has to include the DkimSigningAttributes object. When you specify this object, you provide a selector (a component of the DNS record name that identifies the public key to use for DKIM authentication) and a private key. When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. For some DNS providers, it can take 72 hours or more to complete the domain verification process. Additionally, you can associate an existing configuration set with the email identity that you're verifying.

```sql
INSERT INTO aws.sesv2.email_identities (
EmailIdentity,
Tags,
DkimSigningAttributes,
ConfigurationSetName,
region
)
SELECT 
'{{ EmailIdentity }}' /* required */,
'{{ Tags }}',
'{{ DkimSigningAttributes }}',
'{{ ConfigurationSetName }}',
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
    - name: DkimSigningAttributes
      description: |
        An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy DKIM
      value:
        DomainSigningSelector: "{{ DomainSigningSelector }}"
        DomainSigningPrivateKey: "{{ DomainSigningPrivateKey }}"
        NextSigningKeyLength: "{{ NextSigningKeyLength }}"
        DomainSigningAttributesOrigin: "{{ DomainSigningAttributesOrigin }}"
    - name: ConfigurationSetName
      value: "{{ ConfigurationSetName }}"
      description: |
        The name of a configuration set. Configuration sets are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_email_identity_dkim_signing_attributes"
    values={[
        { label: 'put_email_identity_dkim_signing_attributes', value: 'put_email_identity_dkim_signing_attributes' },
        { label: 'put_email_identity_configuration_set_attributes', value: 'put_email_identity_configuration_set_attributes' }
    ]}
>
<TabItem value="put_email_identity_dkim_signing_attributes">

Used to configure or change the DKIM authentication settings for an email domain identity. You can use this operation to do any of the following: Update the signing attributes for an identity that uses Bring Your Own DKIM (BYODKIM). Update the key length that should be used for Easy DKIM. Change from using no DKIM authentication to using Easy DKIM. Change from using no DKIM authentication to using BYODKIM. Change from using Easy DKIM to using BYODKIM. Change from using BYODKIM to using Easy DKIM.

```sql
REPLACE aws.sesv2.email_identities
SET 
SigningAttributesOrigin = '{{ SigningAttributesOrigin }}',
SigningAttributes = '{{ SigningAttributes }}'
WHERE 
email_identity = '{{ email_identity }}' --required
AND region = '{{ region }}' --required
AND SigningAttributesOrigin = '{{ SigningAttributesOrigin }}' --required
RETURNING
DkimStatus,
DkimTokens,
SigningHostedZone;
```
</TabItem>
<TabItem value="put_email_identity_configuration_set_attributes">

Used to associate a configuration set with an email identity.

```sql
REPLACE aws.sesv2.email_identities
SET 
ConfigurationSetName = '{{ ConfigurationSetName }}'
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

Deletes an email identity. An identity can be either an email address or a domain name.

```sql
DELETE FROM aws.sesv2.email_identities
WHERE email_identity = '{{ email_identity }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="put_email_identity_dkim_attributes"
    values={[
        { label: 'put_email_identity_dkim_attributes', value: 'put_email_identity_dkim_attributes' },
        { label: 'put_email_identity_feedback_attributes', value: 'put_email_identity_feedback_attributes' },
        { label: 'put_email_identity_mail_from_attributes', value: 'put_email_identity_mail_from_attributes' }
    ]}
>
<TabItem value="put_email_identity_dkim_attributes">

Used to enable or disable DKIM authentication for an email identity.

```sql
EXEC aws.sesv2.email_identities.put_email_identity_dkim_attributes 
@email_identity='{{ email_identity }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"SigningEnabled": {{ SigningEnabled }}
}'
;
```
</TabItem>
<TabItem value="put_email_identity_feedback_attributes">

Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event. If the value is true, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the Return-Path header of the original email. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).

```sql
EXEC aws.sesv2.email_identities.put_email_identity_feedback_attributes 
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
EXEC aws.sesv2.email_identities.put_email_identity_mail_from_attributes 
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
