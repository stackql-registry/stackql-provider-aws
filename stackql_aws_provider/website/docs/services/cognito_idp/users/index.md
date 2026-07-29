--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user"
    values={[
        { label: 'get_user', value: 'get_user' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="get_user">

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
    <td><CopyableCode code="mfa_options" /></td>
    <td><code>array</code></td>
    <td>This response parameter is no longer supported. It provides information only about SMS MFA configurations. It doesn't provide information about time-based one-time password (TOTP) software token MFA configurations. To look up information about either type of MFA configuration, use UserMFASettingList instead.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_mfa_setting" /></td>
    <td><code>string</code></td>
    <td>The user's preferred MFA. Users can prefer SMS message, email message, or TOTP MFA.</td>
</tr>
<tr>
    <td><CopyableCode code="user_attributes" /></td>
    <td><code>array</code></td>
    <td>An array of name-value pairs representing user attributes. Custom attributes are prepended with the custom: prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="user_mfa_setting_list" /></td>
    <td><code>array</code></td>
    <td>The MFA options that are activated for the user. The possible values in this list are SMS_MFA, EMAIL_OTP, and SOFTWARE_TOKEN_MFA.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The name of the user that you requested. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_users">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>array</code></td>
    <td>Names and values of a user's attributes, for example email.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the user's account is enabled or disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="mfa_options" /></td>
    <td><code>array</code></td>
    <td>The user's MFA configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="user_create_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="user_last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="user_status" /></td>
    <td><code>string</code></td>
    <td>The user status. This can be one of the following: UNCONFIRMED: User has been created but not confirmed. CONFIRMED: User has been confirmed. EXTERNAL_PROVIDER: User signed in with a third-party IdP. RESET_REQUIRED: User is confirmed, but the user must request a code and reset their password before they can sign in. FORCE_CHANGE_PASSWORD: The user is confirmed and the user can sign in using a temporary password, but on first sign-in, the user must change their password to a new value before doing anything else. The statuses ARCHIVED, UNKNOWN, and COMPROMISED are no longer used. (UNCONFIRMED, CONFIRMED, ARCHIVED, COMPROMISED, UNKNOWN, RESET_REQUIRED, FORCE_CHANGE_PASSWORD, EXTERNAL_PROVIDER)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The user's username. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_user"><CopyableCode code="get_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets user attributes and and MFA settings for the currently signed-in user. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.</td>
</tr>
<tr>
    <td><a href="#list_users"><CopyableCode code="list_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given a user pool ID, returns a list of users and their basic details in a user pool. This operation is eventually consistent. You might experience a delay before results are up-to-date. To validate the existence or configuration of an individual user, use AdminGetUser. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#set_user_settings"><CopyableCode code="set_user_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccessToken"><code>AccessToken</code></a>, <a href="#parameter-MFAOptions"><code>MFAOptions</code></a></td>
    <td></td>
    <td>This action is no longer supported. You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token or email MFA. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.</td>
</tr>
<tr>
    <td><a href="#update_user_attributes"><CopyableCode code="update_user_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserAttributes"><code>UserAttributes</code></a>, <a href="#parameter-AccessToken"><code>AccessToken</code></a></td>
    <td></td>
    <td>Updates the currently signed-in user's attributes. To delete an attribute from the user, submit the attribute in your API request with a blank value. For custom attributes, you must add a custom: prefix to the attribute name, for example custom:department. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.</td>
</tr>
<tr>
    <td><a href="#set_user_mfa_preference"><CopyableCode code="set_user_mfa_preference" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccessToken"><code>AccessToken</code></a></td>
    <td></td>
    <td>Set the user's multi-factor authentication (MFA) method preference, including which MFA factors are activated and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts unless device tracking is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.</td>
</tr>
<tr>
    <td><a href="#delete_user_attributes"><CopyableCode code="delete_user_attributes" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes attributes from the currently signed-in user. For example, your application can submit a request to this operation when a user wants to remove their birthdate attribute value. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.</td>
</tr>
<tr>
    <td><a href="#delete_user"><CopyableCode code="delete_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the profile of the currently signed-in user. A deleted user profile can no longer be used to sign in and can't be restored. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.</td>
</tr>
<tr>
    <td><a href="#start_user_import_job"><CopyableCode code="start_user_import_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-JobId"><code>JobId</code></a></td>
    <td></td>
    <td>Instructs your user pool to start importing users from a CSV file that contains their usernames and attributes. For more information about importing users from a CSV file, see Importing users from a CSV file.</td>
</tr>
<tr>
    <td><a href="#stop_user_import_job"><CopyableCode code="stop_user_import_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-JobId"><code>JobId</code></a></td>
    <td></td>
    <td>Instructs your user pool to stop a running job that's importing users from a CSV file that contains their usernames and attributes. For more information about importing users from a CSV file, see Importing users from a CSV file.</td>
</tr>
<tr>
    <td><a href="#verify_user_attribute"><CopyableCode code="verify_user_attribute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccessToken"><code>AccessToken</code></a>, <a href="#parameter-AttributeName"><code>AttributeName</code></a>, <a href="#parameter-Code"><code>Code</code></a></td>
    <td></td>
    <td>Submits a verification code for a signed-in user who has added or changed a value of an auto-verified attribute. When successful, the user's attribute becomes verified and the attribute email_verified or phone_number_verified becomes true. If your user pool requires verification before Amazon Cognito updates the attribute value, this operation updates the affected attribute to its pending value. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.</td>
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
    defaultValue="get_user"
    values={[
        { label: 'get_user', value: 'get_user' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="get_user">

Gets user attributes and and MFA settings for the currently signed-in user. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.

```sql
SELECT
mfa_options,
preferred_mfa_setting,
user_attributes,
user_mfa_setting_list,
username
FROM aws.cognito_idp.users
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_users">

Given a user pool ID, returns a list of users and their basic details in a user pool. This operation is eventually consistent. You might experience a delay before results are up-to-date. To validate the existence or configuration of an individual user, use AdminGetUser. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
SELECT
attributes,
enabled,
mfa_options,
user_create_date,
user_last_modified_date,
user_status,
username
FROM aws.cognito_idp.users
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_user_settings"
    values={[
        { label: 'set_user_settings', value: 'set_user_settings' },
        { label: 'update_user_attributes', value: 'update_user_attributes' },
        { label: 'set_user_mfa_preference', value: 'set_user_mfa_preference' }
    ]}
>
<TabItem value="set_user_settings">

This action is no longer supported. You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token or email MFA. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.

```sql
UPDATE aws.cognito_idp.users
SET 
AccessToken = '{{ AccessToken }}',
MFAOptions = '{{ MFAOptions }}'
WHERE 
region = '{{ region }}' --required
AND AccessToken = '{{ AccessToken }}' --required
AND MFAOptions = '{{ MFAOptions }}' --required;
```
</TabItem>
<TabItem value="update_user_attributes">

Updates the currently signed-in user's attributes. To delete an attribute from the user, submit the attribute in your API request with a blank value. For custom attributes, you must add a custom: prefix to the attribute name, for example custom:department. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.

```sql
UPDATE aws.cognito_idp.users
SET 
UserAttributes = '{{ UserAttributes }}',
AccessToken = '{{ AccessToken }}',
ClientMetadata = '{{ ClientMetadata }}'
WHERE 
region = '{{ region }}' --required
AND UserAttributes = '{{ UserAttributes }}' --required
AND AccessToken = '{{ AccessToken }}' --required
RETURNING
code_delivery_details_list;
```
</TabItem>
<TabItem value="set_user_mfa_preference">

Set the user's multi-factor authentication (MFA) method preference, including which MFA factors are activated and if any are preferred. Only one factor can be set as preferred. The preferred MFA factor will be used to authenticate a user if multiple factors are activated. If multiple options are activated and no preference is set, a challenge to choose an MFA option will be returned during sign-in. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts unless device tracking is turned on and the device has been trusted. If you want MFA to be applied selectively based on the assessed risk level of sign-in attempts, deactivate MFA for users and turn on Adaptive Authentication for the user pool. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.

```sql
UPDATE aws.cognito_idp.users
SET 
SMSMfaSettings = '{{ SMSMfaSettings }}',
SoftwareTokenMfaSettings = '{{ SoftwareTokenMfaSettings }}',
EmailMfaSettings = '{{ EmailMfaSettings }}',
WebAuthnMfaSettings = '{{ WebAuthnMfaSettings }}',
AccessToken = '{{ AccessToken }}'
WHERE 
region = '{{ region }}' --required
AND AccessToken = '{{ AccessToken }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_attributes"
    values={[
        { label: 'delete_user_attributes', value: 'delete_user_attributes' },
        { label: 'delete_user', value: 'delete_user' }
    ]}
>
<TabItem value="delete_user_attributes">

Deletes attributes from the currently signed-in user. For example, your application can submit a request to this operation when a user wants to remove their birthdate attribute value. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.

```sql
DELETE FROM aws.cognito_idp.users
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_user">

Deletes the profile of the currently signed-in user. A deleted user profile can no longer be used to sign in and can't be restored. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.

```sql
DELETE FROM aws.cognito_idp.users
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_user_import_job"
    values={[
        { label: 'start_user_import_job', value: 'start_user_import_job' },
        { label: 'stop_user_import_job', value: 'stop_user_import_job' },
        { label: 'verify_user_attribute', value: 'verify_user_attribute' }
    ]}
>
<TabItem value="start_user_import_job">

Instructs your user pool to start importing users from a CSV file that contains their usernames and attributes. For more information about importing users from a CSV file, see Importing users from a CSV file.

```sql
EXEC aws.cognito_idp.users.start_user_import_job 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"JobId": "{{ JobId }}"
}'
;
```
</TabItem>
<TabItem value="stop_user_import_job">

Instructs your user pool to stop a running job that's importing users from a CSV file that contains their usernames and attributes. For more information about importing users from a CSV file, see Importing users from a CSV file.

```sql
EXEC aws.cognito_idp.users.stop_user_import_job 
@region='{{ region }}' --required 
@@json=
'{
"UserPoolId": "{{ UserPoolId }}", 
"JobId": "{{ JobId }}"
}'
;
```
</TabItem>
<TabItem value="verify_user_attribute">

Submits a verification code for a signed-in user who has added or changed a value of an auto-verified attribute. When successful, the user's attribute becomes verified and the attribute email_verified or phone_number_verified becomes true. If your user pool requires verification before Amazon Cognito updates the attribute value, this operation updates the affected attribute to its pending value. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.

```sql
EXEC aws.cognito_idp.users.verify_user_attribute 
@region='{{ region }}' --required 
@@json=
'{
"AccessToken": "{{ AccessToken }}", 
"AttributeName": "{{ AttributeName }}", 
"Code": "{{ Code }}"
}'
;
```
</TabItem>
</Tabs>
