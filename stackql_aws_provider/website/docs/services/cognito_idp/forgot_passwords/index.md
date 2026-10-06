--- 
title: forgot_passwords
hide_title: false
hide_table_of_contents: false
keywords:
  - forgot_passwords
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

Creates, updates, deletes, gets or lists a <code>forgot_passwords</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="forgot_passwords" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.forgot_passwords" /></td></tr>
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
    <td><a href="#confirm_forgot_password"><CopyableCode code="confirm_forgot_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientId"><code>ClientId</code></a>, <a href="#parameter-Username"><code>Username</code></a>, <a href="#parameter-ConfirmationCode"><code>ConfirmationCode</code></a>, <a href="#parameter-Password"><code>Password</code></a></td>
    <td></td>
    <td>This public API operation accepts a confirmation code that Amazon Cognito sent to a user and accepts a new password for that user. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.</td>
</tr>
<tr>
    <td><a href="#forgot_password"><CopyableCode code="forgot_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientId"><code>ClientId</code></a>, <a href="#parameter-Username"><code>Username</code></a></td>
    <td></td>
    <td>Sends a password-reset confirmation code to the email address or phone number of the requested username. The message delivery method is determined by the user's available attributes and the AccountRecoverySetting configuration of the user pool. For the Username parameter, you can use the username or an email, phone, or preferred username alias. If neither a verified phone number nor a verified email exists, Amazon Cognito responds with an InvalidParameterException error . If your app client has a client secret and you don't provide a SECRET_HASH parameter, this API returns NotAuthorizedException. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.</td>
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
    defaultValue="confirm_forgot_password"
    values={[
        { label: 'confirm_forgot_password', value: 'confirm_forgot_password' },
        { label: 'forgot_password', value: 'forgot_password' }
    ]}
>
<TabItem value="confirm_forgot_password">

This public API operation accepts a confirmation code that Amazon Cognito sent to a user and accepts a new password for that user. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.

```sql
EXEC aws.cognito_idp.forgot_passwords.confirm_forgot_password 
@region='{{ region }}' --required 
@@json=
'{
"ClientId": "{{ ClientId }}", 
"SecretHash": "{{ SecretHash }}", 
"Username": "{{ Username }}", 
"ConfirmationCode": "{{ ConfirmationCode }}", 
"Password": "{{ Password }}", 
"AnalyticsMetadata": "{{ AnalyticsMetadata }}", 
"UserContextData": "{{ UserContextData }}", 
"ClientMetadata": "{{ ClientMetadata }}"
}'
;
```
</TabItem>
<TabItem value="forgot_password">

Sends a password-reset confirmation code to the email address or phone number of the requested username. The message delivery method is determined by the user's available attributes and the AccountRecoverySetting configuration of the user pool. For the Username parameter, you can use the username or an email, phone, or preferred username alias. If neither a verified phone number nor a verified email exists, Amazon Cognito responds with an InvalidParameterException error . If your app client has a client secret and you don't provide a SECRET_HASH parameter, this API returns NotAuthorizedException. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide.

```sql
EXEC aws.cognito_idp.forgot_passwords.forgot_password 
@region='{{ region }}' --required 
@@json=
'{
"ClientId": "{{ ClientId }}", 
"SecretHash": "{{ SecretHash }}", 
"UserContextData": "{{ UserContextData }}", 
"Username": "{{ Username }}", 
"AnalyticsMetadata": "{{ AnalyticsMetadata }}", 
"ClientMetadata": "{{ ClientMetadata }}"
}'
;
```
</TabItem>
</Tabs>
