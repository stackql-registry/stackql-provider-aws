--- 
title: user_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - user_pools
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

Creates, updates, deletes, gets or lists a <code>user_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.user_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_user_pool"
    values={[
        { label: 'describe_user_pool', value: 'describe_user_pool' },
        { label: 'list_user_pools', value: 'list_user_pools' }
    ]}
>
<TabItem value="describe_user_pool">

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
    <td><CopyableCode code="account_recovery_setting" /></td>
    <td><code>object</code></td>
    <td>The available verified method a user can use to recover their password when they call ForgotPassword. You can use this setting to define a preferred method when a user has more than one method available. With this setting, SMS doesn't qualify for a valid password recovery mechanism if the user also has SMS multi-factor authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy behavior to determine the recovery method where SMS is preferred through email.</td>
</tr>
<tr>
    <td><CopyableCode code="admin_create_user_config" /></td>
    <td><code>object</code></td>
    <td>The configuration for AdminCreateUser requests.</td>
</tr>
<tr>
    <td><CopyableCode code="alias_attributes" /></td>
    <td><code>array</code></td>
    <td>Attributes supported as an alias for this user pool. An alias is an attribute that users can enter as an alternative username. Possible values: phone_number, email, or preferred_username.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user pool. (pattern: &lt;code&gt;arn:&#91;\w+=/,.@-&#93;+:&#91;\w+=/,.@-&#93;+:(&#91;\w+=/,.@-&#93;*)?:&#91;0-9&#93;+:&#91;\w+=/,.@-&#93;+(:&#91;\w+=/,.@-&#93;+)?(:&#91;\w+=/,.@-&#93;+)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_verified_attributes" /></td>
    <td><code>array</code></td>
    <td>The attributes that are auto-verified in a user pool.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain" /></td>
    <td><code>string</code></td>
    <td>A custom domain name that you provide to Amazon Cognito. This parameter applies only if you use a custom domain to host the sign-up and sign-in pages for your application. An example of a custom domain name might be auth.example.com. For more information about adding a custom domain to your user pool, see Using Your Own Domain for the Hosted UI. (pattern: &lt;code&gt;^&#91;a-z0-9&#93;(?:&#91;a-z0-9\-&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection" /></td>
    <td><code>string</code></td>
    <td>When active, DeletionProtection prevents accidental deletion of your user pool. Before you can delete a user pool that you have protected against deletion, you must deactivate this feature. When you try to delete a protected user pool in a DeleteUserPool API request, Amazon Cognito returns an InvalidParameterException error. To delete a protected user pool, send a new DeleteUserPool request after you deactivate deletion protection in an UpdateUserPool API request. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="device_configuration" /></td>
    <td><code>object</code></td>
    <td>The device-remembering configuration for a user pool. A null value indicates that you have deactivated device remembering in your user pool. When you provide a value for any DeviceConfiguration field, you activate the Amazon Cognito device-remembering feature.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain prefix, if the user pool has a domain associated with it. (pattern: &lt;code&gt;^&#91;a-z0-9&#93;(?:&#91;a-z0-9\-&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="email_configuration" /></td>
    <td><code>object</code></td>
    <td>The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for messages from your user pool.</td>
</tr>
<tr>
    <td><CopyableCode code="email_configuration_failure" /></td>
    <td><code>string</code></td>
    <td>Deprecated. Review error codes from API requests with EventSource:cognito-idp.amazonaws.com in CloudTrail for information about problems with user pool email configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="email_verification_message" /></td>
    <td><code>string</code></td>
    <td>This parameter is no longer used. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\s*&#93;*\&#123;####\&#125;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\s*&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="email_verification_subject" /></td>
    <td><code>string</code></td>
    <td>This parameter is no longer used. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\s&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_number_of_users" /></td>
    <td><code>integer</code></td>
    <td>A number estimating the size of the user pool.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user pool. (pattern: &lt;code&gt;&#91;\w-&#93;+_&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lambda_config" /></td>
    <td><code>object</code></td>
    <td>A collection of user pool Lambda triggers. Amazon Cognito invokes triggers at several possible stages of user pool operations. Triggers can modify the outcome of the operations that invoked them.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="mfa_configuration" /></td>
    <td><code>string</code></td>
    <td>Can be one of the following values: OFF - MFA tokens aren't required and can't be specified during user registration. ON - MFA tokens are required for all user registrations. You can only specify required when you're initially creating a user pool. OPTIONAL - Users have the option when registering to create an MFA token. (OFF, ON, OPTIONAL)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the user pool. (pattern: &lt;code&gt;&#91;\w\s+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policies" /></td>
    <td><code>object</code></td>
    <td>A list of user pool policies. Contains the policy that sets password-complexity requirements.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_attributes" /></td>
    <td><code>array</code></td>
    <td>A list of the user attributes and their properties in your user pool. The attribute schema contains standard attributes, custom attributes with a custom: prefix, and developer attributes with a dev: prefix. For more information, see User pool attributes. Developer-only attributes are a legacy feature of user pools, and are read-only to all app clients. You can create and update developer-only attributes only with IAM-authenticated API operations. Use app client read/write permissions instead.</td>
</tr>
<tr>
    <td><CopyableCode code="sms_authentication_message" /></td>
    <td><code>string</code></td>
    <td>The contents of the SMS authentication message. (pattern: &lt;code&gt;.*\&#123;####\&#125;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sms_configuration" /></td>
    <td><code>object</code></td>
    <td>User pool configuration for delivery of SMS messages with Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="sms_configuration_failure" /></td>
    <td><code>string</code></td>
    <td>The reason why the SMS configuration can't send the messages to your users. This message might include comma-separated values to describe why your SMS configuration can't send messages to user pool end users. InvalidSmsRoleAccessPolicyException The Identity and Access Management role that Amazon Cognito uses to send SMS messages isn't properly configured. For more information, see SmsConfigurationType. SNSSandbox The Amazon Web Services account is in the SNS SMS Sandbox and messages will only reach verified end users. This parameter won’t get populated with SNSSandbox if the user creating the user pool doesn’t have SNS permissions. To learn how to move your Amazon Web Services account out of the sandbox, see Moving out of the SMS sandbox.</td>
</tr>
<tr>
    <td><CopyableCode code="sms_verification_message" /></td>
    <td><code>string</code></td>
    <td>This parameter is no longer used. (pattern: &lt;code&gt;.*\&#123;####\&#125;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>This parameter is no longer used. (Enabled, Disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="user_attribute_update_settings" /></td>
    <td><code>object</code></td>
    <td>The settings for updates to user attributes. These settings include the property AttributesRequireVerificationBeforeUpdate, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For more information, see Verifying updates to email addresses and phone numbers.</td>
</tr>
<tr>
    <td><CopyableCode code="user_pool_add_ons" /></td>
    <td><code>object</code></td>
    <td>Contains settings for activation of threat protection, including the operating mode and additional authentication types. To log user security information but take no action, set to AUDIT. To configure automatic security responses to potentially unwanted traffic to your user pool, set to ENFORCED. For more information, see Adding advanced security to a user pool. To activate this setting, your user pool must be on the Plus tier.</td>
</tr>
<tr>
    <td><CopyableCode code="user_pool_tags" /></td>
    <td><code>object</code></td>
    <td>The tags that are assigned to the user pool. A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="user_pool_tier" /></td>
    <td><code>string</code></td>
    <td>The user pool feature plan, or tier. This parameter determines the eligibility of the user pool for features like managed login, access-token customization, and threat protection. Defaults to ESSENTIALS. (LITE, ESSENTIALS, PLUS)</td>
</tr>
<tr>
    <td><CopyableCode code="username_attributes" /></td>
    <td><code>array</code></td>
    <td>Specifies whether a user can use an email address or phone number as a username when they sign up.</td>
</tr>
<tr>
    <td><CopyableCode code="username_configuration" /></td>
    <td><code>object</code></td>
    <td>Case sensitivity of the username input for the selected sign-in option. When case sensitivity is set to False (case insensitive), users can sign in with any combination of capital and lowercase letters. For example, username, USERNAME, or UserName, or for email, email@example.com or EMaiL@eXamplE.Com. For most use cases, set case sensitivity to False (case insensitive) as a best practice. When usernames and email addresses are case insensitive, Amazon Cognito treats any variation in case as the same user, and prevents a case variation from being assigned to the same attribute for a different user.</td>
</tr>
<tr>
    <td><CopyableCode code="verification_message_template" /></td>
    <td><code>object</code></td>
    <td>The template for the verification message that your user pool delivers to users who set an email address or phone number attribute.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_user_pools">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The user pool ID. (pattern: &lt;code&gt;&#91;\w-&#93;+_&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lambda_config" /></td>
    <td><code>object</code></td>
    <td>A collection of user pool Lambda triggers. Amazon Cognito invokes triggers at several possible stages of user pool operations. Triggers can modify the outcome of the operations that invoked them.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The user pool name. (pattern: &lt;code&gt;&#91;\w\s+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The user pool status. (Enabled, Disabled)</td>
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
    <td><a href="#describe_user_pool"><CopyableCode code="describe_user_pool" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given a user pool ID, returns configuration information. This operation is useful when you want to inspect an existing user pool and programmatically replicate the configuration to another user pool. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#list_user_pools"><CopyableCode code="list_user_pools" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists user pools and their details in the current Amazon Web Services account. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#create_user_pool"><CopyableCode code="create_user_pool" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PoolName"><code>PoolName</code></a></td>
    <td></td>
    <td>Creates a new Amazon Cognito user pool. This operation sets basic and advanced configuration options. If you don't provide a value for an attribute, Amazon Cognito sets it to its default value. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#update_auth_event_feedback"><CopyableCode code="update_auth_event_feedback" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-EventId"><code>EventId</code></a>, <a href="#parameter-FeedbackToken"><code>FeedbackToken</code></a>, <a href="#parameter-FeedbackValue"><code>FeedbackValue</code></a></td>
    <td></td>
    <td>Provides the feedback for an authentication event generated by threat protection features. The user's response indicates that you think that the event either was from a valid user or was an unwanted authentication attempt. This feedback improves the risk evaluation decision for the user pool as part of Amazon Cognito threat protection. To activate this setting, your user pool must be on the Plus tier. This operation requires a FeedbackToken that Amazon Cognito generates and adds to notification emails when users have potentially suspicious authentication events. Users invoke this operation when they select the link that corresponds to &#123;one-click-link-valid&#125; or &#123;one-click-link-invalid&#125; in your notification template. Because FeedbackToken is a required parameter, you can't make requests to UpdateAuthEventFeedback without the contents of the notification email message. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.</td>
</tr>
<tr>
    <td><a href="#add_custom_attributes"><CopyableCode code="add_custom_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-CustomAttributes"><code>CustomAttributes</code></a></td>
    <td></td>
    <td>Adds additional user attributes to the user pool schema. Custom attributes can be mutable or immutable and have a custom: or dev: prefix. For more information, see Custom attributes. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#update_user_pool"><CopyableCode code="update_user_pool" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Updates the configuration of a user pool. To avoid setting parameters to Amazon Cognito defaults, construct this API request to pass the existing configuration of your user pool, modified to include the changes that you want to make. With the exception of UserPoolTier, if you don't provide a value for an attribute, Amazon Cognito sets it to its default value. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#delete_user_pool"><CopyableCode code="delete_user_pool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a user pool. After you delete a user pool, users can no longer sign in to any associated applications. When you delete a user pool, it's no longer visible or operational in your Amazon Web Services account. Amazon Cognito retains deleted user pools in an inactive state for 14 days, then begins a cleanup process that fully removes them from Amazon Web Services systems. In case of accidental deletion, contact Amazon Web Services Support within 14 days for restoration assistance. Amazon Cognito begins full deletion of all resources from deleted user pools after 14 days. In the case of large user pools, the cleanup process might take significant additional time before all user data is permanently deleted.</td>
</tr>
<tr>
    <td><a href="#admin_add_user_to_group"><CopyableCode code="admin_add_user_to_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a></td>
    <td></td>
    <td>Adds a user to a group. A user who is in a group can present a preferred-role claim to an identity pool, and populates a cognito:groups claim to their access and identity tokens. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_confirm_sign_up"><CopyableCode code="admin_confirm_sign_up" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Confirms user sign-up as an administrator. This request sets a user account active in a user pool that requires confirmation of new user accounts before they can sign in. You can configure your user pool to not send confirmation codes to new users and instead confirm them with this API operation on the back end. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints To configure your user pool to require administrative confirmation of users, set AllowAdminCreateUserOnly to true in a CreateUserPool or UpdateUserPool request.</td>
</tr>
<tr>
    <td><a href="#admin_create_user"><CopyableCode code="admin_create_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Creates a new user in the specified user pool. If MessageAction isn't set, the default is to send a welcome message via email or phone (SMS). This message is based on a template that you configured in your call to create or update a user pool. This template includes your custom sign-up instructions and placeholders for user name and temporary password. Alternatively, you can call AdminCreateUser with SUPPRESS for the MessageAction parameter, and Amazon Cognito won't send any email. In either case, if the user has a password, they will be in the FORCE_CHANGE_PASSWORD state until they sign in and set their password. Your invitation message template must have the &#123;####&#125; password placeholder if your users have passwords. If your template doesn't have this placeholder, Amazon Cognito doesn't deliver the invitation message. In this case, you must update your message template and resend the password with a new AdminCreateUser request with a MessageAction value of RESEND. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_delete_user"><CopyableCode code="admin_delete_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Deletes a user profile in your user pool. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_delete_user_attributes"><CopyableCode code="admin_delete_user_attributes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-UserAttributeNames"><code>UserAttributeNames</code></a></td>
    <td></td>
    <td>Deletes attribute values from a user. This operation doesn't affect tokens for existing user sessions. The next ID token that the user receives will no longer have the deleted attributes. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_disable_provider_for_user"><CopyableCode code="admin_disable_provider_for_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Prevents the user from signing in with the specified external (SAML or social) identity provider (IdP). If the user that you want to deactivate is a Amazon Cognito user pools native username + password user, they can't use their password to sign in. If the user to deactivate is a linked external IdP user, any link between that user and an existing user is removed. When the external user signs in again, and the user is no longer attached to the previously linked DestinationUser, the user must create a new user account. The value of ProviderName must match the name of a user pool IdP. To deactivate a local user, set ProviderName to Cognito and the ProviderAttributeName to Cognito_Subject. The ProviderAttributeValue must be user's local username. The ProviderAttributeName must always be Cognito_Subject for social IdPs. The ProviderAttributeValue must always be the exact subject that was used when the user was originally linked as a source user. For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign in, the ProviderAttributeName and ProviderAttributeValue must be the same values that were used for the SourceUser when the identities were originally linked using AdminLinkProviderForUser call. This is also true if the linking was done with ProviderAttributeName set to Cognito_Subject. If the user has already signed in, the ProviderAttributeName must be Cognito_Subject and ProviderAttributeValue must be the NameID from their SAML assertion. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_disable_user"><CopyableCode code="admin_disable_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Deactivates a user profile and revokes all access tokens for the user. A deactivated user can't sign in, but still appears in the responses to ListUsers API requests. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_enable_user"><CopyableCode code="admin_enable_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Activates sign-in for a user profile that previously had sign-in access disabled. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_forget_device"><CopyableCode code="admin_forget_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-DeviceKey"><code>DeviceKey</code></a></td>
    <td></td>
    <td>Forgets, or deletes, a remembered device from a user's profile. After you forget the device, the user can no longer complete device authentication with that device and when applicable, must submit MFA codes again. For more information, see Working with devices. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_get_device"><CopyableCode code="admin_get_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeviceKey"><code>DeviceKey</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Given the device key, returns details for a user's device. For more information, see Working with devices. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_get_user"><CopyableCode code="admin_get_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Given a username, returns details about a user profile in a user pool. You can specify alias attributes in the Username request parameter. This operation contributes to your monthly active user (MAU) count for the purpose of billing. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_initiate_auth"><CopyableCode code="admin_initiate_auth" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-ClientId"><code>ClientId</code></a>, <a href="#parameter-AuthFlow"><code>AuthFlow</code></a></td>
    <td></td>
    <td>Starts sign-in for applications with a server-side component, for example a traditional web application. This operation specifies the authentication flow that you'd like to begin. The authentication flow that you specify must be supported in your app client configuration. For more information about authentication flows, see Authentication flows. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_link_provider_for_user"><CopyableCode code="admin_link_provider_for_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-DestinationUser"><code>DestinationUser</code></a>, <a href="#parameter-SourceUser"><code>SourceUser</code></a></td>
    <td></td>
    <td>Links an existing user account in a user pool, or DestinationUser, to an identity from an external IdP, or SourceUser, based on a specified attribute name and value from the external IdP. This operation connects a local user profile with a user identity who hasn't yet signed in from their third-party IdP. When the user signs in with their IdP, they get access-control configuration from the local user profile. Linked local users can also sign in with SDK-based API operations like InitiateAuth after they sign in at least once through their IdP. For more information, see Linking federated users. The maximum number of federated identities linked to a user is five. Because this API allows a user with an external federated identity to sign in as a local user, it is critical that it only be used with external IdPs and linked attributes that you trust. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_list_groups_for_user"><CopyableCode code="admin_list_groups_for_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Lists the groups that a user belongs to. User pool groups are identifiers that you can reference from the contents of ID and access tokens, and set preferred IAM roles for identity-pool authentication. For more information, see Adding groups to a user pool. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_list_user_auth_events"><CopyableCode code="admin_list_user_auth_events" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Requests a history of user activity and any risks detected as part of Amazon Cognito threat protection. For more information, see Viewing user event history. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_remove_user_from_group"><CopyableCode code="admin_remove_user_from_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a></td>
    <td></td>
    <td>Given a username and a group name, removes them from the group. User pool groups are identifiers that you can reference from the contents of ID and access tokens, and set preferred IAM roles for identity-pool authentication. For more information, see Adding groups to a user pool. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_reset_user_password"><CopyableCode code="admin_reset_user_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Begins the password reset process. Sets the requested user’s account into a RESET_REQUIRED status, and sends them a password-reset code. Your user pool also sends the user a notification with a reset code and the information that their password has been reset. At sign-in, your application or the managed login session receives a challenge to complete the reset by confirming the code and setting a new password. To use this API operation, your user pool must have self-service account recovery configured. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_respond_to_auth_challenge"><CopyableCode code="admin_respond_to_auth_challenge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-ClientId"><code>ClientId</code></a>, <a href="#parameter-ChallengeName"><code>ChallengeName</code></a></td>
    <td></td>
    <td>Some API operations in a user pool generate a challenge, like a prompt for an MFA code, for device authentication that bypasses MFA, or for a custom authentication challenge. An AdminRespondToAuthChallenge API request provides the answer to that challenge, like a code or a secure remote password (SRP). The parameters of a response to an authentication challenge vary with the type of challenge. For more information about custom authentication challenges, see Custom authentication challenge Lambda triggers. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_set_user_mfa_preference"><CopyableCode code="admin_set_user_mfa_preference" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Sets the user's multi-factor authentication (MFA) preference, including which MFA options are activated, and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_set_user_password"><CopyableCode code="admin_set_user_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-Password"><code>Password</code></a></td>
    <td></td>
    <td>Sets the specified user's password in a user pool. This operation administratively sets a temporary or permanent password for a user. With this operation, you can bypass self-service password changes and permit immediate sign-in with the password that you set. To do this, set Permanent to true. You can also set a new temporary password in this request, send it to a user, and require them to choose a new password on their next sign-in. To do this, set Permanent to false. If the password is temporary, the user's Status becomes FORCE_CHANGE_PASSWORD. When the user next tries to sign in, the InitiateAuth or AdminInitiateAuth response includes the NEW_PASSWORD_REQUIRED challenge. If the user doesn't sign in before the temporary password expires, they can no longer sign in and you must repeat this operation to set a temporary or permanent password for them. After the user sets a new password, or if you set a permanent password, their status becomes Confirmed. AdminSetUserPassword can set a password for the user profile that Amazon Cognito creates for third-party federated users. When you set a password, the federated user's status changes from EXTERNAL_PROVIDER to CONFIRMED. A user in this state can sign in as a federated user, and initiate authentication flows in the API like a linked native user. They can also modify their password and attributes in token-authenticated API requests like ChangePassword and UpdateUserAttributes. As a best security practice and to keep users in sync with your external IdP, don't set passwords on federated user profiles. To set up a federated user for native sign-in with a linked native user, refer to Linking federated users to an existing user profile. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_set_user_settings"><CopyableCode code="admin_set_user_settings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-MFAOptions"><code>MFAOptions</code></a></td>
    <td></td>
    <td>This action is no longer supported. You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_update_auth_event_feedback"><CopyableCode code="admin_update_auth_event_feedback" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-EventId"><code>EventId</code></a>, <a href="#parameter-FeedbackValue"><code>FeedbackValue</code></a></td>
    <td></td>
    <td>Provides the feedback for an authentication event generated by threat protection features. Your response indicates that you think that the event either was from a valid user or was an unwanted authentication attempt. This feedback improves the risk evaluation decision for the user pool as part of Amazon Cognito threat protection. To activate this setting, your user pool must be on the Plus tier. To train the threat-protection model to recognize trusted and untrusted sign-in characteristics, configure threat protection in audit-only mode and provide a mechanism for users or administrators to submit feedback. Your feedback can tell Amazon Cognito that a risk rating was assigned at a level you don't agree with. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_update_device_status"><CopyableCode code="admin_update_device_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-DeviceKey"><code>DeviceKey</code></a></td>
    <td></td>
    <td>Updates the status of a user's device so that it is marked as remembered or not remembered for the purpose of device authentication. Device authentication is a "remember me" mechanism that silently completes sign-in from trusted devices with a device key instead of a user-provided MFA code. This operation changes the status of a device without deleting it, so you can enable it again later. For more information about device authentication, see Working with devices. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#admin_update_user_attributes"><CopyableCode code="admin_update_user_attributes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-UserAttributes"><code>UserAttributes</code></a></td>
    <td></td>
    <td>Updates the specified user's attributes. To delete an attribute from your user, submit the attribute in your API request with a blank value. For custom attributes, you must add a custom: prefix to the attribute name, for example custom:department. This operation can set a user's email address or phone number as verified and permit immediate sign-in in user pools that require verification of these attributes. To do this, set the email_verified or phone_number_verified attribute to true. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.</td>
</tr>
<tr>
    <td><a href="#admin_user_global_sign_out"><CopyableCode code="admin_user_global_sign_out" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Invalidates the identity, access, and refresh tokens that Amazon Cognito issued to a user. Call this operation with your administrative credentials when your user signs out of your app. This results in the following behavior. Amazon Cognito no longer accepts token-authorized user operations that you authorize with a signed-out user's access tokens. For more information, see Using the Amazon Cognito user pools API and user pool endpoints. Amazon Cognito returns an Access Token has been revoked error when your app attempts to authorize a user pools API request with a revoked access token that contains the scope aws.cognito.signin.user.admin. Amazon Cognito no longer accepts a signed-out user's ID token in a GetId request to an identity pool with ServerSideTokenCheck enabled for its user pool IdP configuration in CognitoIdentityProvider. Amazon Cognito no longer accepts a signed-out user's refresh tokens in refresh requests. Other requests might be valid until your user's token expires. This operation doesn't clear the managed login session cookie. To clear the session for a user who signed in with managed login or the classic hosted UI, direct their browser session to the logout endpoint. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
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
    defaultValue="describe_user_pool"
    values={[
        { label: 'describe_user_pool', value: 'describe_user_pool' },
        { label: 'list_user_pools', value: 'list_user_pools' }
    ]}
>
<TabItem value="describe_user_pool">

Given a user pool ID, returns configuration information. This operation is useful when you want to inspect an existing user pool and programmatically replicate the configuration to another user pool. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
SELECT
account_recovery_setting,
admin_create_user_config,
alias_attributes,
arn,
auto_verified_attributes,
creation_date,
custom_domain,
deletion_protection,
device_configuration,
domain,
email_configuration,
email_configuration_failure,
email_verification_message,
email_verification_subject,
estimated_number_of_users,
id,
lambda_config,
last_modified_date,
mfa_configuration,
name,
policies,
schema_attributes,
sms_authentication_message,
sms_configuration,
sms_configuration_failure,
sms_verification_message,
status,
user_attribute_update_settings,
user_pool_add_ons,
user_pool_tags,
user_pool_tier,
username_attributes,
username_configuration,
verification_message_template
FROM aws.cognito_idp.user_pools
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_user_pools">

Lists user pools and their details in the current Amazon Web Services account. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
SELECT
creation_date,
id,
lambda_config,
last_modified_date,
name,
status
FROM aws.cognito_idp.user_pools
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_pool"
    values={[
        { label: 'create_user_pool', value: 'create_user_pool' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_pool">

Creates a new Amazon Cognito user pool. This operation sets basic and advanced configuration options. If you don't provide a value for an attribute, Amazon Cognito sets it to its default value. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
INSERT INTO aws.cognito_idp.user_pools (
PoolName,
Policies,
DeletionProtection,
LambdaConfig,
AutoVerifiedAttributes,
AliasAttributes,
UsernameAttributes,
SmsVerificationMessage,
EmailVerificationMessage,
EmailVerificationSubject,
VerificationMessageTemplate,
SmsAuthenticationMessage,
MfaConfiguration,
UserAttributeUpdateSettings,
DeviceConfiguration,
EmailConfiguration,
SmsConfiguration,
UserPoolTags,
AdminCreateUserConfig,
Schema,
UserPoolAddOns,
UsernameConfiguration,
AccountRecoverySetting,
UserPoolTier,
region
)
SELECT 
'{{ PoolName }}' /* required */,
'{{ Policies }}',
'{{ DeletionProtection }}',
'{{ LambdaConfig }}',
'{{ AutoVerifiedAttributes }}',
'{{ AliasAttributes }}',
'{{ UsernameAttributes }}',
'{{ SmsVerificationMessage }}',
'{{ EmailVerificationMessage }}',
'{{ EmailVerificationSubject }}',
'{{ VerificationMessageTemplate }}',
'{{ SmsAuthenticationMessage }}',
'{{ MfaConfiguration }}',
'{{ UserAttributeUpdateSettings }}',
'{{ DeviceConfiguration }}',
'{{ EmailConfiguration }}',
'{{ SmsConfiguration }}',
'{{ UserPoolTags }}',
'{{ AdminCreateUserConfig }}',
'{{ Schema }}',
'{{ UserPoolAddOns }}',
'{{ UsernameConfiguration }}',
'{{ AccountRecoverySetting }}',
'{{ UserPoolTier }}',
'{{ region }}'
RETURNING
user_pool
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: user_pools
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the user_pools resource.
    - name: PoolName
      value: "{{ PoolName }}"
      description: |
        A friendly name for your user pool.
    - name: Policies
      description: |
        The password policy and sign-in policy in the user pool. The password policy sets options like password complexity requirements and password history. The sign-in policy sets the options available to applications in choice-based authentication.
      value:
        PasswordPolicy:
          MinimumLength: {{ MinimumLength }}
          RequireUppercase: {{ RequireUppercase }}
          RequireLowercase: {{ RequireLowercase }}
          RequireNumbers: {{ RequireNumbers }}
          RequireSymbols: {{ RequireSymbols }}
          PasswordHistorySize: {{ PasswordHistorySize }}
          TemporaryPasswordValidityDays: {{ TemporaryPasswordValidityDays }}
        SignInPolicy:
          AllowedFirstAuthFactors:
            - "{{ AllowedFirstAuthFactors }}"
    - name: DeletionProtection
      value: "{{ DeletionProtection }}"
      description: |
        When active, DeletionProtection prevents accidental deletion of your user pool. Before you can delete a user pool that you have protected against deletion, you must deactivate this feature. When you try to delete a protected user pool in a DeleteUserPool API request, Amazon Cognito returns an InvalidParameterException error. To delete a protected user pool, send a new DeleteUserPool request after you deactivate deletion protection in an UpdateUserPool API request.
      valid_values: ['ACTIVE', 'INACTIVE']
    - name: LambdaConfig
      description: |
        A collection of user pool Lambda triggers. Amazon Cognito invokes triggers at several possible stages of authentication operations. Triggers can modify the outcome of the operations that invoked them.
      value:
        PreSignUp: "{{ PreSignUp }}"
        CustomMessage: "{{ CustomMessage }}"
        PostConfirmation: "{{ PostConfirmation }}"
        PreAuthentication: "{{ PreAuthentication }}"
        PostAuthentication: "{{ PostAuthentication }}"
        DefineAuthChallenge: "{{ DefineAuthChallenge }}"
        CreateAuthChallenge: "{{ CreateAuthChallenge }}"
        VerifyAuthChallengeResponse: "{{ VerifyAuthChallengeResponse }}"
        PreTokenGeneration: "{{ PreTokenGeneration }}"
        UserMigration: "{{ UserMigration }}"
        PreTokenGenerationConfig:
          LambdaVersion: "{{ LambdaVersion }}"
          LambdaArn: "{{ LambdaArn }}"
        CustomSMSSender:
          LambdaVersion: "{{ LambdaVersion }}"
          LambdaArn: "{{ LambdaArn }}"
        CustomEmailSender:
          LambdaVersion: "{{ LambdaVersion }}"
          LambdaArn: "{{ LambdaArn }}"
        KMSKeyID: "{{ KMSKeyID }}"
        InboundFederation:
          LambdaVersion: "{{ LambdaVersion }}"
          LambdaArn: "{{ LambdaArn }}"
    - name: AutoVerifiedAttributes
      value:
        - "{{ AutoVerifiedAttributes }}"
      description: |
        The attributes that you want your user pool to automatically verify. For more information, see Verifying contact information at sign-up.
    - name: AliasAttributes
      value:
        - "{{ AliasAttributes }}"
      description: |
        Attributes supported as an alias for this user pool. For more information about alias attributes, see Customizing sign-in attributes.
    - name: UsernameAttributes
      value:
        - "{{ UsernameAttributes }}"
      description: |
        Specifies whether a user can use an email address or phone number as a username when they sign up. For more information, see Customizing sign-in attributes.
    - name: SmsVerificationMessage
      value: "{{ SmsVerificationMessage }}"
      description: |
        This parameter is no longer used.
    - name: EmailVerificationMessage
      value: "{{ EmailVerificationMessage }}"
      description: |
        This parameter is no longer used.
    - name: EmailVerificationSubject
      value: "{{ EmailVerificationSubject }}"
      description: |
        This parameter is no longer used.
    - name: VerificationMessageTemplate
      description: |
        The template for the verification message that your user pool delivers to users who set an email address or phone number attribute. Set the email message type that corresponds to your DefaultEmailOption selection. For CONFIRM_WITH_LINK, specify an EmailMessageByLink and leave EmailMessage blank. For CONFIRM_WITH_CODE, specify an EmailMessage and leave EmailMessageByLink blank. When you supply both parameters with either choice, Amazon Cognito returns an error.
      value:
        SmsMessage: "{{ SmsMessage }}"
        EmailMessage: "{{ EmailMessage }}"
        EmailSubject: "{{ EmailSubject }}"
        EmailMessageByLink: "{{ EmailMessageByLink }}"
        EmailSubjectByLink: "{{ EmailSubjectByLink }}"
        DefaultEmailOption: "{{ DefaultEmailOption }}"
    - name: SmsAuthenticationMessage
      value: "{{ SmsAuthenticationMessage }}"
      description: |
        The contents of the SMS message that your user pool sends to users in SMS OTP and MFA authentication.
    - name: MfaConfiguration
      value: "{{ MfaConfiguration }}"
      description: |
        Sets multi-factor authentication (MFA) to be on, off, or optional. When ON, all users must set up MFA before they can sign in. When OPTIONAL, your application must make a client-side determination of whether a user wants to register an MFA device. For user pools with adaptive authentication with threat protection, choose OPTIONAL. When MfaConfiguration is OPTIONAL, managed login doesn't automatically prompt users to set up MFA. Amazon Cognito generates MFA prompts in API responses and in managed login for users who have chosen and configured a preferred MFA factor.
      valid_values: ['OFF', 'ON', 'OPTIONAL']
    - name: UserAttributeUpdateSettings
      description: |
        The settings for updates to user attributes. These settings include the property AttributesRequireVerificationBeforeUpdate, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For more information, see Verifying updates to email addresses and phone numbers.
      value:
        AttributesRequireVerificationBeforeUpdate:
          - "{{ AttributesRequireVerificationBeforeUpdate }}"
    - name: DeviceConfiguration
      description: |
        The device-remembering configuration for a user pool. Device remembering or device tracking is a "Remember me on this device" option for user pools that perform authentication with the device key of a trusted device in the back end, instead of a user-provided MFA code. For more information about device authentication, see Working with user devices in your user pool. A null value indicates that you have deactivated device remembering in your user pool. When you provide a value for any DeviceConfiguration field, you activate the Amazon Cognito device-remembering feature. For more information, see Working with devices.
      value:
        ChallengeRequiredOnNewDevice: {{ ChallengeRequiredOnNewDevice }}
        DeviceOnlyRememberedOnUserPrompt: {{ DeviceOnlyRememberedOnUserPrompt }}
    - name: EmailConfiguration
      description: |
        The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for messages from your user pool.
      value:
        SourceArn: "{{ SourceArn }}"
        ReplyToEmailAddress: "{{ ReplyToEmailAddress }}"
        EmailSendingAccount: "{{ EmailSendingAccount }}"
        From: "{{ From }}"
        ConfigurationSet: "{{ ConfigurationSet }}"
    - name: SmsConfiguration
      description: |
        The settings for your Amazon Cognito user pool to send SMS messages with Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account. For more information see SMS message settings.
      value:
        SnsCallerArn: "{{ SnsCallerArn }}"
        ExternalId: "{{ ExternalId }}"
        SnsRegion: "{{ SnsRegion }}"
    - name: UserPoolTags
      value: "{{ UserPoolTags }}"
      description: |
        The tag keys and values to assign to the user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.
    - name: AdminCreateUserConfig
      description: |
        The configuration for administrative creation of users. Includes the template for the invitation message for new users, the duration of temporary passwords, and permitting self-service sign-up.
      value:
        AllowAdminCreateUserOnly: {{ AllowAdminCreateUserOnly }}
        UnusedAccountValidityDays: {{ UnusedAccountValidityDays }}
        InviteMessageTemplate:
          SMSMessage: "{{ SMSMessage }}"
          EmailMessage: "{{ EmailMessage }}"
          EmailSubject: "{{ EmailSubject }}"
    - name: Schema
      description: |
        An array of attributes for the new user pool. You can add custom attributes and modify the properties of default attributes. The specifications in this parameter set the required attributes in your user pool. For more information, see Working with user attributes.
      value:
        - Name: "{{ Name }}"
          AttributeDataType: "{{ AttributeDataType }}"
          DeveloperOnlyAttribute: {{ DeveloperOnlyAttribute }}
          Mutable: {{ Mutable }}
          Required: {{ Required }}
          NumberAttributeConstraints:
            MinValue: "{{ MinValue }}"
            MaxValue: "{{ MaxValue }}"
          StringAttributeConstraints:
            MinLength: "{{ MinLength }}"
            MaxLength: "{{ MaxLength }}"
    - name: UserPoolAddOns
      description: |
        Contains settings for activation of threat protection, including the operating mode and additional authentication types. To log user security information but take no action, set to AUDIT. To configure automatic security responses to potentially unwanted traffic to your user pool, set to ENFORCED. For more information, see Adding advanced security to a user pool. To activate this setting, your user pool must be on the Plus tier.
      value:
        AdvancedSecurityMode: "{{ AdvancedSecurityMode }}"
        AdvancedSecurityAdditionalFlows:
          CustomAuthMode: "{{ CustomAuthMode }}"
    - name: UsernameConfiguration
      description: |
        Sets the case sensitivity option for sign-in usernames. When CaseSensitive is false (case insensitive), users can sign in with any combination of capital and lowercase letters. For example, username, USERNAME, or UserName, or for email, email@example.com or EMaiL@eXamplE.Com. For most use cases, set case sensitivity to false as a best practice. When usernames and email addresses are case insensitive, Amazon Cognito treats any variation in case as the same user, and prevents a case variation from being assigned to the same attribute for a different user. When CaseSensitive is true (case sensitive), Amazon Cognito interprets USERNAME and UserName as distinct users. This configuration is immutable after you set it.
      value:
        CaseSensitive: {{ CaseSensitive }}
    - name: AccountRecoverySetting
      description: |
        The available verified method a user can use to recover their password when they call ForgotPassword. You can use this setting to define a preferred method when a user has more than one method available. With this setting, SMS doesn't qualify for a valid password recovery mechanism if the user also has SMS multi-factor authentication (MFA) activated. Email MFA is also disqualifying for account recovery with email. In the absence of this setting, Amazon Cognito uses the legacy behavior to determine the recovery method where SMS is preferred over email. As a best practice, configure both verified_email and verified_phone_number, with one having a higher priority than the other.
      value:
        RecoveryMechanisms:
          - Priority: {{ Priority }}
            Name: "{{ Name }}"
    - name: UserPoolTier
      value: "{{ UserPoolTier }}"
      description: |
        The user pool feature plan, or tier. This parameter determines the eligibility of the user pool for features like managed login, access-token customization, and threat protection. Defaults to ESSENTIALS.
      valid_values: ['LITE', 'ESSENTIALS', 'PLUS']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_auth_event_feedback"
    values={[
        { label: 'update_auth_event_feedback', value: 'update_auth_event_feedback' },
        { label: 'add_custom_attributes', value: 'add_custom_attributes' },
        { label: 'update_user_pool', value: 'update_user_pool' }
    ]}
>
<TabItem value="update_auth_event_feedback">

Provides the feedback for an authentication event generated by threat protection features. The user's response indicates that you think that the event either was from a valid user or was an unwanted authentication attempt. This feedback improves the risk evaluation decision for the user pool as part of Amazon Cognito threat protection. To activate this setting, your user pool must be on the Plus tier. This operation requires a FeedbackToken that Amazon Cognito generates and adds to notification emails when users have potentially suspicious authentication events. Users invoke this operation when they select the link that corresponds to &#123;one-click-link-valid&#125; or &#123;one-click-link-invalid&#125; in your notification template. Because FeedbackToken is a required parameter, you can't make requests to UpdateAuthEventFeedback without the contents of the notification email message. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.

```sql
UPDATE aws.cognito_idp.user_pools
SET 
UserPoolId = '{{ UserPoolId }}',
Username = '{{ Username }}',
EventId = '{{ EventId }}',
FeedbackToken = '{{ FeedbackToken }}',
FeedbackValue = '{{ FeedbackValue }}'
WHERE 
region = '{{ region }}' --required
AND UserPoolId = '{{ UserPoolId }}' --required
AND EventId = '{{ EventId }}' --required
AND FeedbackToken = '{{ FeedbackToken }}' --required
AND FeedbackValue = '{{ FeedbackValue }}' --required;
```
</TabItem>
<TabItem value="add_custom_attributes">

Adds additional user attributes to the user pool schema. Custom attributes can be mutable or immutable and have a custom: or dev: prefix. For more information, see Custom attributes. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
UPDATE aws.cognito_idp.user_pools
SET 
UserPoolId = '{{ UserPoolId }}',
CustomAttributes = '{{ CustomAttributes }}'
WHERE 
region = '{{ region }}' --required
AND UserPoolId = '{{ UserPoolId }}' --required
AND CustomAttributes = '{{ CustomAttributes }}' --required;
```
</TabItem>
<TabItem value="update_user_pool">

Updates the configuration of a user pool. To avoid setting parameters to Amazon Cognito defaults, construct this API request to pass the existing configuration of your user pool, modified to include the changes that you want to make. With the exception of UserPoolTier, if you don't provide a value for an attribute, Amazon Cognito sets it to its default value. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
UPDATE aws.cognito_idp.user_pools
SET 
UserPoolId = '{{ UserPoolId }}',
Policies = '{{ Policies }}',
DeletionProtection = '{{ DeletionProtection }}',
LambdaConfig = '{{ LambdaConfig }}',
AutoVerifiedAttributes = '{{ AutoVerifiedAttributes }}',
SmsVerificationMessage = '{{ SmsVerificationMessage }}',
EmailVerificationMessage = '{{ EmailVerificationMessage }}',
EmailVerificationSubject = '{{ EmailVerificationSubject }}',
VerificationMessageTemplate = '{{ VerificationMessageTemplate }}',
SmsAuthenticationMessage = '{{ SmsAuthenticationMessage }}',
UserAttributeUpdateSettings = '{{ UserAttributeUpdateSettings }}',
MfaConfiguration = '{{ MfaConfiguration }}',
DeviceConfiguration = '{{ DeviceConfiguration }}',
EmailConfiguration = '{{ EmailConfiguration }}',
SmsConfiguration = '{{ SmsConfiguration }}',
UserPoolTags = '{{ UserPoolTags }}',
AdminCreateUserConfig = '{{ AdminCreateUserConfig }}',
UserPoolAddOns = '{{ UserPoolAddOns }}',
AccountRecoverySetting = '{{ AccountRecoverySetting }}',
PoolName = '{{ PoolName }}',
UserPoolTier = '{{ UserPoolTier }}'
WHERE 
region = '{{ region }}' --required
AND UserPoolId = '{{ UserPoolId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_pool"
    values={[
        { label: 'delete_user_pool', value: 'delete_user_pool' }
    ]}
>
<TabItem value="delete_user_pool">

Deletes a user pool. After you delete a user pool, users can no longer sign in to any associated applications. When you delete a user pool, it's no longer visible or operational in your Amazon Web Services account. Amazon Cognito retains deleted user pools in an inactive state for 14 days, then begins a cleanup process that fully removes them from Amazon Web Services systems. In case of accidental deletion, contact Amazon Web Services Support within 14 days for restoration assistance. Amazon Cognito begins full deletion of all resources from deleted user pools after 14 days. In the case of large user pools, the cleanup process might take significant additional time before all user data is permanently deleted.

```sql
DELETE FROM aws.cognito_idp.user_pools
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="admin_add_user_to_group"
    values={[
        { label: 'admin_add_user_to_group', value: 'admin_add_user_to_group' },
        { label: 'admin_confirm_sign_up', value: 'admin_confirm_sign_up' },
        { label: 'admin_create_user', value: 'admin_create_user' },
        { label: 'admin_delete_user', value: 'admin_delete_user' },
        { label: 'admin_delete_user_attributes', value: 'admin_delete_user_attributes' },
        { label: 'admin_disable_provider_for_user', value: 'admin_disable_provider_for_user' },
        { label: 'admin_disable_user', value: 'admin_disable_user' },
        { label: 'admin_enable_user', value: 'admin_enable_user' },
        { label: 'admin_forget_device', value: 'admin_forget_device' },
        { label: 'admin_get_device', value: 'admin_get_device' },
        { label: 'admin_get_user', value: 'admin_get_user' },
        { label: 'admin_initiate_auth', value: 'admin_initiate_auth' },
        { label: 'admin_link_provider_for_user', value: 'admin_link_provider_for_user' },
        { label: 'admin_list_groups_for_user', value: 'admin_list_groups_for_user' },
        { label: 'admin_list_user_auth_events', value: 'admin_list_user_auth_events' },
        { label: 'admin_remove_user_from_group', value: 'admin_remove_user_from_group' },
        { label: 'admin_reset_user_password', value: 'admin_reset_user_password' },
        { label: 'admin_respond_to_auth_challenge', value: 'admin_respond_to_auth_challenge' },
        { label: 'admin_set_user_mfa_preference', value: 'admin_set_user_mfa_preference' },
        { label: 'admin_set_user_password', value: 'admin_set_user_password' },
        { label: 'admin_set_user_settings', value: 'admin_set_user_settings' },
        { label: 'admin_update_auth_event_feedback', value: 'admin_update_auth_event_feedback' },
        { label: 'admin_update_device_status', value: 'admin_update_device_status' },
        { label: 'admin_update_user_attributes', value: 'admin_update_user_attributes' },
        { label: 'admin_user_global_sign_out', value: 'admin_user_global_sign_out' }
    ]}
>
<TabItem value="admin_add_user_to_group">

Adds a user to a group. A user who is in a group can present a preferred-role claim to an identity pool, and populates a cognito:groups claim to their access and identity tokens. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_add_user_to_group 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}", 
"GroupName": "{{ GroupName }}"
}'
;
```
</TabItem>
<TabItem value="admin_confirm_sign_up">

Confirms user sign-up as an administrator. This request sets a user account active in a user pool that requires confirmation of new user accounts before they can sign in. You can configure your user pool to not send confirmation codes to new users and instead confirm them with this API operation on the back end. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints To configure your user pool to require administrative confirmation of users, set AllowAdminCreateUserOnly to true in a CreateUserPool or UpdateUserPool request.

```sql
EXEC aws.cognito_idp.user_pools.admin_confirm_sign_up 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}", 
"ClientMetadata": "{{ ClientMetadata }}"
}'
;
```
</TabItem>
<TabItem value="admin_create_user">

Creates a new user in the specified user pool. If MessageAction isn't set, the default is to send a welcome message via email or phone (SMS). This message is based on a template that you configured in your call to create or update a user pool. This template includes your custom sign-up instructions and placeholders for user name and temporary password. Alternatively, you can call AdminCreateUser with SUPPRESS for the MessageAction parameter, and Amazon Cognito won't send any email. In either case, if the user has a password, they will be in the FORCE_CHANGE_PASSWORD state until they sign in and set their password. Your invitation message template must have the &#123;####&#125; password placeholder if your users have passwords. If your template doesn't have this placeholder, Amazon Cognito doesn't deliver the invitation message. In this case, you must update your message template and resend the password with a new AdminCreateUser request with a MessageAction value of RESEND. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_create_user 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}", 
"UserAttributes": "{{ UserAttributes }}", 
"ValidationData": "{{ ValidationData }}", 
"TemporaryPassword": "{{ TemporaryPassword }}", 
"ForceAliasCreation": {{ ForceAliasCreation }}, 
"MessageAction": "{{ MessageAction }}", 
"DesiredDeliveryMediums": "{{ DesiredDeliveryMediums }}", 
"ClientMetadata": "{{ ClientMetadata }}"
}'
;
```
</TabItem>
<TabItem value="admin_delete_user">

Deletes a user profile in your user pool. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_delete_user 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}"
}'
;
```
</TabItem>
<TabItem value="admin_delete_user_attributes">

Deletes attribute values from a user. This operation doesn't affect tokens for existing user sessions. The next ID token that the user receives will no longer have the deleted attributes. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_delete_user_attributes 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}", 
"UserAttributeNames": "{{ UserAttributeNames }}"
}'
;
```
</TabItem>
<TabItem value="admin_disable_provider_for_user">

Prevents the user from signing in with the specified external (SAML or social) identity provider (IdP). If the user that you want to deactivate is a Amazon Cognito user pools native username + password user, they can't use their password to sign in. If the user to deactivate is a linked external IdP user, any link between that user and an existing user is removed. When the external user signs in again, and the user is no longer attached to the previously linked DestinationUser, the user must create a new user account. The value of ProviderName must match the name of a user pool IdP. To deactivate a local user, set ProviderName to Cognito and the ProviderAttributeName to Cognito_Subject. The ProviderAttributeValue must be user's local username. The ProviderAttributeName must always be Cognito_Subject for social IdPs. The ProviderAttributeValue must always be the exact subject that was used when the user was originally linked as a source user. For de-linking a SAML identity, there are two scenarios. If the linked identity has not yet been used to sign in, the ProviderAttributeName and ProviderAttributeValue must be the same values that were used for the SourceUser when the identities were originally linked using AdminLinkProviderForUser call. This is also true if the linking was done with ProviderAttributeName set to Cognito_Subject. If the user has already signed in, the ProviderAttributeName must be Cognito_Subject and ProviderAttributeValue must be the NameID from their SAML assertion. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_disable_provider_for_user 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"User": "{{ User }}"
}'
;
```
</TabItem>
<TabItem value="admin_disable_user">

Deactivates a user profile and revokes all access tokens for the user. A deactivated user can't sign in, but still appears in the responses to ListUsers API requests. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_disable_user 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}"
}'
;
```
</TabItem>
<TabItem value="admin_enable_user">

Activates sign-in for a user profile that previously had sign-in access disabled. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_enable_user 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}"
}'
;
```
</TabItem>
<TabItem value="admin_forget_device">

Forgets, or deletes, a remembered device from a user's profile. After you forget the device, the user can no longer complete device authentication with that device and when applicable, must submit MFA codes again. For more information, see Working with devices. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_forget_device 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}", 
"DeviceKey": "{{ DeviceKey }}"
}'
;
```
</TabItem>
<TabItem value="admin_get_device">

Given the device key, returns details for a user's device. For more information, see Working with devices. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_get_device 
@region='{{ region }}' --required 
@@json=
'{
"DeviceKey": "{{ DeviceKey }}", 
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}"
}'
;
```
</TabItem>
<TabItem value="admin_get_user">

Given a username, returns details about a user profile in a user pool. You can specify alias attributes in the Username request parameter. This operation contributes to your monthly active user (MAU) count for the purpose of billing. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_get_user 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}"
}'
;
```
</TabItem>
<TabItem value="admin_initiate_auth">

Starts sign-in for applications with a server-side component, for example a traditional web application. This operation specifies the authentication flow that you'd like to begin. The authentication flow that you specify must be supported in your app client configuration. For more information about authentication flows, see Authentication flows. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_initiate_auth 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"ClientId": "{{ ClientId }}", 
"AuthFlow": "{{ AuthFlow }}", 
"AuthParameters": "{{ AuthParameters }}", 
"ClientMetadata": "{{ ClientMetadata }}", 
"AnalyticsMetadata": "{{ AnalyticsMetadata }}", 
"ContextData": "{{ ContextData }}", 
"Session": "{{ Session }}"
}'
;
```
</TabItem>
<TabItem value="admin_link_provider_for_user">

Links an existing user account in a user pool, or DestinationUser, to an identity from an external IdP, or SourceUser, based on a specified attribute name and value from the external IdP. This operation connects a local user profile with a user identity who hasn't yet signed in from their third-party IdP. When the user signs in with their IdP, they get access-control configuration from the local user profile. Linked local users can also sign in with SDK-based API operations like InitiateAuth after they sign in at least once through their IdP. For more information, see Linking federated users. The maximum number of federated identities linked to a user is five. Because this API allows a user with an external federated identity to sign in as a local user, it is critical that it only be used with external IdPs and linked attributes that you trust. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_link_provider_for_user 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"DestinationUser": "{{ DestinationUser }}", 
"SourceUser": "{{ SourceUser }}"
}'
;
```
</TabItem>
<TabItem value="admin_list_groups_for_user">

Lists the groups that a user belongs to. User pool groups are identifiers that you can reference from the contents of ID and access tokens, and set preferred IAM roles for identity-pool authentication. For more information, see Adding groups to a user pool. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_list_groups_for_user 
@region='{{ region }}' --required 
@@json=
'{
"Username": "{{ Username }}", 
"UserPoolId": "{{ UserPoolId }}", 
"Limit": {{ Limit }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
<TabItem value="admin_list_user_auth_events">

Requests a history of user activity and any risks detected as part of Amazon Cognito threat protection. For more information, see Viewing user event history. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_list_user_auth_events 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}", 
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
<TabItem value="admin_remove_user_from_group">

Given a username and a group name, removes them from the group. User pool groups are identifiers that you can reference from the contents of ID and access tokens, and set preferred IAM roles for identity-pool authentication. For more information, see Adding groups to a user pool. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_remove_user_from_group 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}", 
"GroupName": "{{ GroupName }}"
}'
;
```
</TabItem>
<TabItem value="admin_reset_user_password">

Begins the password reset process. Sets the requested user’s account into a RESET_REQUIRED status, and sends them a password-reset code. Your user pool also sends the user a notification with a reset code and the information that their password has been reset. At sign-in, your application or the managed login session receives a challenge to complete the reset by confirming the code and setting a new password. To use this API operation, your user pool must have self-service account recovery configured. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_reset_user_password 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}", 
"ClientMetadata": "{{ ClientMetadata }}"
}'
;
```
</TabItem>
<TabItem value="admin_respond_to_auth_challenge">

Some API operations in a user pool generate a challenge, like a prompt for an MFA code, for device authentication that bypasses MFA, or for a custom authentication challenge. An AdminRespondToAuthChallenge API request provides the answer to that challenge, like a code or a secure remote password (SRP). The parameters of a response to an authentication challenge vary with the type of challenge. For more information about custom authentication challenges, see Custom authentication challenge Lambda triggers. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_respond_to_auth_challenge 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"ClientId": "{{ ClientId }}", 
"ChallengeName": "{{ ChallengeName }}", 
"ChallengeResponses": "{{ ChallengeResponses }}", 
"Session": "{{ Session }}", 
"AnalyticsMetadata": "{{ AnalyticsMetadata }}", 
"ContextData": "{{ ContextData }}", 
"ClientMetadata": "{{ ClientMetadata }}"
}'
;
```
</TabItem>
<TabItem value="admin_set_user_mfa_preference">

Sets the user's multi-factor authentication (MFA) preference, including which MFA options are activated, and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_set_user_mfa_preference 
@region='{{ region }}' --required 
@@json=
'{
"SMSMfaSettings": "{{ SMSMfaSettings }}", 
"SoftwareTokenMfaSettings": "{{ SoftwareTokenMfaSettings }}", 
"EmailMfaSettings": "{{ EmailMfaSettings }}", 
"WebAuthnMfaSettings": "{{ WebAuthnMfaSettings }}", 
"Username": "{{ Username }}", 
"UserPoolId": "{{ UserPoolId }}"
}'
;
```
</TabItem>
<TabItem value="admin_set_user_password">

Sets the specified user's password in a user pool. This operation administratively sets a temporary or permanent password for a user. With this operation, you can bypass self-service password changes and permit immediate sign-in with the password that you set. To do this, set Permanent to true. You can also set a new temporary password in this request, send it to a user, and require them to choose a new password on their next sign-in. To do this, set Permanent to false. If the password is temporary, the user's Status becomes FORCE_CHANGE_PASSWORD. When the user next tries to sign in, the InitiateAuth or AdminInitiateAuth response includes the NEW_PASSWORD_REQUIRED challenge. If the user doesn't sign in before the temporary password expires, they can no longer sign in and you must repeat this operation to set a temporary or permanent password for them. After the user sets a new password, or if you set a permanent password, their status becomes Confirmed. AdminSetUserPassword can set a password for the user profile that Amazon Cognito creates for third-party federated users. When you set a password, the federated user's status changes from EXTERNAL_PROVIDER to CONFIRMED. A user in this state can sign in as a federated user, and initiate authentication flows in the API like a linked native user. They can also modify their password and attributes in token-authenticated API requests like ChangePassword and UpdateUserAttributes. As a best security practice and to keep users in sync with your external IdP, don't set passwords on federated user profiles. To set up a federated user for native sign-in with a linked native user, refer to Linking federated users to an existing user profile. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_set_user_password 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}", 
"Password": "{{ Password }}", 
"Permanent": {{ Permanent }}
}'
;
```
</TabItem>
<TabItem value="admin_set_user_settings">

This action is no longer supported. You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token MFA. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_set_user_settings 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}", 
"MFAOptions": "{{ MFAOptions }}"
}'
;
```
</TabItem>
<TabItem value="admin_update_auth_event_feedback">

Provides the feedback for an authentication event generated by threat protection features. Your response indicates that you think that the event either was from a valid user or was an unwanted authentication attempt. This feedback improves the risk evaluation decision for the user pool as part of Amazon Cognito threat protection. To activate this setting, your user pool must be on the Plus tier. To train the threat-protection model to recognize trusted and untrusted sign-in characteristics, configure threat protection in audit-only mode and provide a mechanism for users or administrators to submit feedback. Your feedback can tell Amazon Cognito that a risk rating was assigned at a level you don't agree with. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_update_auth_event_feedback 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}", 
"EventId": "{{ EventId }}", 
"FeedbackValue": "{{ FeedbackValue }}"
}'
;
```
</TabItem>
<TabItem value="admin_update_device_status">

Updates the status of a user's device so that it is marked as remembered or not remembered for the purpose of device authentication. Device authentication is a "remember me" mechanism that silently completes sign-in from trusted devices with a device key instead of a user-provided MFA code. This operation changes the status of a device without deleting it, so you can enable it again later. For more information about device authentication, see Working with devices. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_update_device_status 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}", 
"DeviceKey": "{{ DeviceKey }}", 
"DeviceRememberedStatus": "{{ DeviceRememberedStatus }}"
}'
;
```
</TabItem>
<TabItem value="admin_update_user_attributes">

Updates the specified user's attributes. To delete an attribute from your user, submit the attribute in your API request with a blank value. For custom attributes, you must add a custom: prefix to the attribute name, for example custom:department. This operation can set a user's email address or phone number as verified and permit immediate sign-in in user pools that require verification of these attributes. To do this, set the email_verified or phone_number_verified attribute to true. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.

```sql
EXEC aws.cognito_idp.user_pools.admin_update_user_attributes 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}", 
"UserAttributes": "{{ UserAttributes }}", 
"ClientMetadata": "{{ ClientMetadata }}"
}'
;
```
</TabItem>
<TabItem value="admin_user_global_sign_out">

Invalidates the identity, access, and refresh tokens that Amazon Cognito issued to a user. Call this operation with your administrative credentials when your user signs out of your app. This results in the following behavior. Amazon Cognito no longer accepts token-authorized user operations that you authorize with a signed-out user's access tokens. For more information, see Using the Amazon Cognito user pools API and user pool endpoints. Amazon Cognito returns an Access Token has been revoked error when your app attempts to authorize a user pools API request with a revoked access token that contains the scope aws.cognito.signin.user.admin. Amazon Cognito no longer accepts a signed-out user's ID token in a GetId request to an identity pool with ServerSideTokenCheck enabled for its user pool IdP configuration in CognitoIdentityProvider. Amazon Cognito no longer accepts a signed-out user's refresh tokens in refresh requests. Other requests might be valid until your user's token expires. This operation doesn't clear the managed login session cookie. To clear the session for a user who signed in with managed login or the classic hosted UI, direct their browser session to the logout endpoint. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
EXEC aws.cognito_idp.user_pools.admin_user_global_sign_out 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"Username": "{{ Username }}"
}'
;
```
</TabItem>
</Tabs>
