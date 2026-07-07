--- 
title: user_pool_mfa_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - user_pool_mfa_configs
  - cognito_idp
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

Creates, updates, deletes, gets or lists a <code>user_pool_mfa_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_pool_mfa_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.user_pool_mfa_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_pool_mfa_config"
    values={[
        { label: 'get_user_pool_mfa_config', value: 'get_user_pool_mfa_config' }
    ]}
>
<TabItem value="get_user_pool_mfa_config">

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
    <td><CopyableCode code="EmailMfaConfiguration" /></td>
    <td><code>object</code></td>
    <td>Shows configuration for user pool email message MFA and sign-in with one-time passwords (OTPs). Includes the subject and body of the email message template for sign-in and MFA messages. To activate this setting, your user pool must be in the Essentials tier or higher.</td>
</tr>
<tr>
    <td><CopyableCode code="MfaConfiguration" /></td>
    <td><code>string</code></td>
    <td>Displays the state of multi-factor authentication (MFA) as on, off, or optional. When ON, all users must set up MFA before they can sign in. When OPTIONAL, your application must make a client-side determination of whether a user wants to register an MFA device. For user pools with adaptive authentication with threat protection, choose OPTIONAL. When MfaConfiguration is OPTIONAL, managed login doesn't automatically prompt users to set up MFA. Amazon Cognito generates MFA prompts in API responses and in managed login for users who have chosen and configured a preferred MFA factor. (OFF, ON, OPTIONAL)</td>
</tr>
<tr>
    <td><CopyableCode code="SmsMfaConfiguration" /></td>
    <td><code>object</code></td>
    <td>Shows user pool configuration for SMS message MFA. Includes the message template and the SMS message sending configuration for Amazon SNS.</td>
</tr>
<tr>
    <td><CopyableCode code="SoftwareTokenMfaConfiguration" /></td>
    <td><code>object</code></td>
    <td>Shows user pool configuration for time-based one-time password (TOTP) MFA. Includes TOTP enabled or disabled state.</td>
</tr>
<tr>
    <td><CopyableCode code="WebAuthnConfiguration" /></td>
    <td><code>object</code></td>
    <td>Shows user pool configuration for sign-in with passkey authenticators such as biometric devices and security keys. Includes relying-party configuration, user-verification requirements, and whether passkeys can satisfy MFA requirements.</td>
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
    <td><a href="#get_user_pool_mfa_config"><CopyableCode code="get_user_pool_mfa_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given a user pool ID, returns configuration for sign-in with WebAuthn authenticators and for multi-factor authentication (MFA). This operation describes the following: The WebAuthn relying party (RP) ID and user-verification settings. The required, optional, or disabled state of MFA for all user pool users. The message templates for email and SMS MFA. The enabled or disabled state of time-based one-time password (TOTP) MFA. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#set_user_pool_mfa_config"><CopyableCode code="set_user_pool_mfa_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Sets user pool multi-factor authentication (MFA) and passkey configuration. For more information about user pool MFA, see Adding MFA. For more information about WebAuthn passkeys see Authentication flows. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_user_pool_mfa_config"
    values={[
        { label: 'get_user_pool_mfa_config', value: 'get_user_pool_mfa_config' }
    ]}
>
<TabItem value="get_user_pool_mfa_config">

Given a user pool ID, returns configuration for sign-in with WebAuthn authenticators and for multi-factor authentication (MFA). This operation describes the following: The WebAuthn relying party (RP) ID and user-verification settings. The required, optional, or disabled state of MFA for all user pool users. The message templates for email and SMS MFA. The enabled or disabled state of time-based one-time password (TOTP) MFA. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
SELECT
EmailMfaConfiguration,
MfaConfiguration,
SmsMfaConfiguration,
SoftwareTokenMfaConfiguration,
WebAuthnConfiguration
FROM aws.cognito_idp.user_pool_mfa_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_user_pool_mfa_config"
    values={[
        { label: 'set_user_pool_mfa_config', value: 'set_user_pool_mfa_config' }
    ]}
>
<TabItem value="set_user_pool_mfa_config">

Sets user pool multi-factor authentication (MFA) and passkey configuration. For more information about user pool MFA, see Adding MFA. For more information about WebAuthn passkeys see Authentication flows. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.

```sql
UPDATE aws.cognito_idp.user_pool_mfa_configs
SET 
UserPoolId = '{{ UserPoolId }}',
SmsMfaConfiguration = '{{ SmsMfaConfiguration }}',
SoftwareTokenMfaConfiguration = '{{ SoftwareTokenMfaConfiguration }}',
EmailMfaConfiguration = '{{ EmailMfaConfiguration }}',
MfaConfiguration = '{{ MfaConfiguration }}',
WebAuthnConfiguration = '{{ WebAuthnConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND UserPoolId = '{{ UserPoolId }}' --required
RETURNING
EmailMfaConfiguration,
MfaConfiguration,
SmsMfaConfiguration,
SoftwareTokenMfaConfiguration,
WebAuthnConfiguration;
```
</TabItem>
</Tabs>
