--- 
title: sign_ups
hide_title: false
hide_table_of_contents: false
keywords:
  - sign_ups
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

Creates, updates, deletes, gets or lists a <code>sign_ups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sign_ups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.sign_ups" /></td></tr>
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
    <td><a href="#confirm_sign_up"><CopyableCode code="confirm_sign_up" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientId"><code>ClientId</code></a>, <a href="#parameter-Username"><code>Username</code></a>, <a href="#parameter-ConfirmationCode"><code>ConfirmationCode</code></a></td>
    <td></td>
    <td>Confirms the account of a new user. This public API operation submits a code that Amazon Cognito sent to your user when they signed up in your user pool. After your user enters their code, they confirm ownership of the email address or phone number that they provided, and their user account becomes active. Depending on your user pool configuration, your users will receive their confirmation code in an email or SMS message. Local users who signed up in your user pool are the only type of user who can confirm sign-up with a code. Users who federate through an external identity provider (IdP) have already been confirmed by their IdP. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.</td>
</tr>
<tr>
    <td><a href="#sign_up"><CopyableCode code="sign_up" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientId"><code>ClientId</code></a>, <a href="#parameter-Username"><code>Username</code></a></td>
    <td></td>
    <td>Registers a user with an app client and requests a user name, password, and user attributes in the user pool. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide. You might receive a LimitExceeded exception in response to this request if you have exceeded a rate quota for email or SMS messages, and if your user pool automatically verifies email addresses or phone numbers. When you get this exception in the response, the user is successfully created and is in an UNCONFIRMED state.</td>
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
    defaultValue="confirm_sign_up"
    values={[
        { label: 'confirm_sign_up', value: 'confirm_sign_up' },
        { label: 'sign_up', value: 'sign_up' }
    ]}
>
<TabItem value="confirm_sign_up">

Confirms the account of a new user. This public API operation submits a code that Amazon Cognito sent to your user when they signed up in your user pool. After your user enters their code, they confirm ownership of the email address or phone number that they provided, and their user account becomes active. Depending on your user pool configuration, your users will receive their confirmation code in an email or SMS message. Local users who signed up in your user pool are the only type of user who can confirm sign-up with a code. Users who federate through an external identity provider (IdP) have already been confirmed by their IdP. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.

```sql
EXEC aws.cognito_idp.sign_ups.confirm_sign_up 
@region='{{ region }}' --required 
@@json=
'{
"ClientId": "{{ ClientId }}", 
"SecretHash": "{{ SecretHash }}", 
"Username": "{{ Username }}", 
"ConfirmationCode": "{{ ConfirmationCode }}", 
"ForceAliasCreation": {{ ForceAliasCreation }}, 
"AnalyticsMetadata": "{{ AnalyticsMetadata }}", 
"UserContextData": "{{ UserContextData }}", 
"ClientMetadata": "{{ ClientMetadata }}", 
"Session": "{{ Session }}"
}'
;
```
</TabItem>
<TabItem value="sign_up">

Registers a user with an app client and requests a user name, password, and user attributes in the user pool. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints. This action might generate an SMS text message. Starting June 1, 2021, US telecom carriers require you to register an origination phone number before you can send SMS messages to US phone numbers. If you use SMS text messages in Amazon Cognito, you must register a phone number with Amazon Pinpoint. Amazon Cognito uses the registered number automatically. Otherwise, Amazon Cognito users who must receive SMS messages might not be able to sign up, activate their accounts, or sign in. If you have never used SMS text messages with Amazon Cognito or any other Amazon Web Services service, Amazon Simple Notification Service might place your account in the SMS sandbox. In sandbox mode , you can send messages only to verified phone numbers. After you test your app while in the sandbox environment, you can move out of the sandbox and into production. For more information, see SMS message settings for Amazon Cognito user pools in the Amazon Cognito Developer Guide. You might receive a LimitExceeded exception in response to this request if you have exceeded a rate quota for email or SMS messages, and if your user pool automatically verifies email addresses or phone numbers. When you get this exception in the response, the user is successfully created and is in an UNCONFIRMED state.

```sql
EXEC aws.cognito_idp.sign_ups.sign_up 
@region='{{ region }}' --required 
@@json=
'{
"ClientId": "{{ ClientId }}", 
"SecretHash": "{{ SecretHash }}", 
"Username": "{{ Username }}", 
"Password": "{{ Password }}", 
"UserAttributes": "{{ UserAttributes }}", 
"ValidationData": "{{ ValidationData }}", 
"AnalyticsMetadata": "{{ AnalyticsMetadata }}", 
"UserContextData": "{{ UserContextData }}", 
"ClientMetadata": "{{ ClientMetadata }}"
}'
;
```
</TabItem>
</Tabs>
