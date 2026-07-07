--- 
title: user_pool_clients
hide_title: false
hide_table_of_contents: false
keywords:
  - user_pool_clients
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

Creates, updates, deletes, gets or lists a <code>user_pool_clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_pool_clients" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.user_pool_clients" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_user_pool_client"
    values={[
        { label: 'describe_user_pool_client', value: 'describe_user_pool_client' },
        { label: 'list_user_pool_clients', value: 'list_user_pool_clients' }
    ]}
>
<TabItem value="describe_user_pool_client">

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
    <td><CopyableCode code="AccessTokenValidity" /></td>
    <td><code>integer</code></td>
    <td>The access token time limit. After this limit expires, your user can't use their access token. To specify the time unit for AccessTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set AccessTokenValidity to 10 and TokenValidityUnits to hours, your user can authorize access with their access token for 10 hours. The default time unit for AccessTokenValidity in an API request is hours. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your access tokens are valid for one hour.</td>
</tr>
<tr>
    <td><CopyableCode code="AllowedOAuthFlows" /></td>
    <td><code>array</code></td>
    <td>The OAuth grant types that you want your app client to generate. To create an app client that generates client credentials grants, you must add client_credentials as the only allowed OAuth flow. code Use a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the /oauth2/token endpoint. implicit Issue the access token (and, optionally, ID token, based on scopes) directly to your user. client_credentials Issue the access token from the /oauth2/token endpoint directly to a non-person user using a combination of the client ID and client secret.</td>
</tr>
<tr>
    <td><CopyableCode code="AllowedOAuthFlowsUserPoolClient" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to use OAuth 2.0 authorization server features in your app client. This parameter must have a value of true before you can configure the following features in your app client. CallBackURLs: Callback URLs. LogoutURLs: Sign-out redirect URLs. AllowedOAuthScopes: OAuth 2.0 scopes. AllowedOAuthFlows: Support for authorization code, implicit, and client credentials OAuth 2.0 grants. To use authorization server features, configure one of these features in the Amazon Cognito console or set AllowedOAuthFlowsUserPoolClient to true in a CreateUserPoolClient or UpdateUserPoolClient API request. If you don't set a value for AllowedOAuthFlowsUserPoolClient in a request with the CLI or SDKs, it defaults to false. When false, only SDK-based API sign-in is permitted.</td>
</tr>
<tr>
    <td><CopyableCode code="AllowedOAuthScopes" /></td>
    <td><code>array</code></td>
    <td>The OAuth 2.0 scopes that you want your app client to support. Can include standard OAuth scopes like phone, email, openid, and profile. Can also include the aws.cognito.signin.user.admin scope that authorizes user profile self-service operations and custom scopes from resource servers.</td>
</tr>
<tr>
    <td><CopyableCode code="AnalyticsConfiguration" /></td>
    <td><code>object</code></td>
    <td>The user pool analytics configuration for collecting metrics and sending them to your Amazon Pinpoint campaign. In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools only support sending events to Amazon Pinpoint projects in Amazon Web Services Region us-east-1. In Regions where Amazon Pinpoint is available, user pools support sending events to Amazon Pinpoint projects within that same Region.</td>
</tr>
<tr>
    <td><CopyableCode code="AuthSessionValidity" /></td>
    <td><code>integer</code></td>
    <td>Amazon Cognito creates a session token for each API request in an authentication flow. AuthSessionValidity is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.</td>
</tr>
<tr>
    <td><CopyableCode code="CallbackURLs" /></td>
    <td><code>array</code></td>
    <td>A list of allowed redirect (callback) URLs for the IdPs. A redirect URI must: Be an absolute URI. Be registered with the authorization server. Not include a fragment component. See OAuth 2.0 - Redirection Endpoint. Amazon Cognito requires HTTPS over HTTP for callback URLs to http:​//localhost, http:​//127.0.0.1 and http:​//&#91;::1&#93;. These callback URLs are for testing purposes only. You can specify custom TCP ports for your callback URLs. App callback URLs such as myapp:​//example are also supported.</td>
</tr>
<tr>
    <td><CopyableCode code="ClientId" /></td>
    <td><code>string</code></td>
    <td>The ID of the app client. (pattern: &lt;code&gt;&#91;\w+&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ClientName" /></td>
    <td><code>string</code></td>
    <td>The name of the app client. (pattern: &lt;code&gt;&#91;\w\s+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ClientSecret" /></td>
    <td><code>string</code></td>
    <td>The app client secret. (pattern: &lt;code&gt;&#91;\w+&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultRedirectURI" /></td>
    <td><code>string</code></td>
    <td>The default redirect URI. Must be in the CallbackURLs list. A redirect URI must: Be an absolute URI. Be registered with the authorization server. Not include a fragment component. See OAuth 2.0 - Redirection Endpoint. Amazon Cognito requires HTTPS over HTTP for callback URLs to http:​//localhost, http:​//127.0.0.1 and http:​//&#91;::1&#93;. These callback URLs are for testing purposes only. You can specify custom TCP ports for your callback URLs. App callback URLs such as myapp:​//example are also supported. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EnablePropagateAdditionalUserContextData" /></td>
    <td><code>boolean</code></td>
    <td>When EnablePropagateAdditionalUserContextData is true, Amazon Cognito accepts an IpAddress value that you send in the UserContextData parameter. The UserContextData parameter sends information to Amazon Cognito threat protection for risk analysis. You can send UserContextData when you sign in Amazon Cognito native users with the InitiateAuth and RespondToAuthChallenge API operations. When EnablePropagateAdditionalUserContextData is false, you can't send your user's source IP address to Amazon Cognito threat protection with unauthenticated API operations. EnablePropagateAdditionalUserContextData doesn't affect whether you can send a source IP address in a ContextData parameter with the authenticated API operations AdminInitiateAuth and AdminRespondToAuthChallenge. You can only activate EnablePropagateAdditionalUserContextData in an app client that has a client secret. For more information about propagation of user context data, see Adding user device and session data to API requests.</td>
</tr>
<tr>
    <td><CopyableCode code="EnableTokenRevocation" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether token revocation is activated for the user pool client. When you create a new user pool client, token revocation is activated by default.</td>
</tr>
<tr>
    <td><CopyableCode code="ExplicitAuthFlows" /></td>
    <td><code>array</code></td>
    <td>The authentication flows that you want your user pool client to support. For each app client in your user pool, you can sign in your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that you define with Lambda functions. If you don't specify a value for ExplicitAuthFlows, your app client supports ALLOW_REFRESH_TOKEN_AUTH, ALLOW_USER_SRP_AUTH, and ALLOW_CUSTOM_AUTH. The values for authentication flow options include the following. ALLOW_USER_AUTH: Enable selection-based sign-in with USER_AUTH. This setting covers username-password, secure remote password (SRP), passwordless, and passkey authentication. This authentiation flow can do username-password and SRP authentication without other ExplicitAuthFlows permitting them. For example users can complete an SRP challenge through USER_AUTH without the flow USER_SRP_AUTH being active for the app client. This flow doesn't include CUSTOM_AUTH. To activate this setting, your user pool must be in the Essentials tier or higher. ALLOW_ADMIN_USER_PASSWORD_AUTH: Enable admin based user password authentication flow ADMIN_USER_PASSWORD_AUTH. This setting replaces the ADMIN_NO_SRP_AUTH setting. With this authentication flow, your app passes a user name and password to Amazon Cognito in the request, instead of using the Secure Remote Password (SRP) protocol to securely transmit the password. ALLOW_CUSTOM_AUTH: Enable Lambda trigger based authentication. ALLOW_USER_PASSWORD_AUTH: Enable user password-based authentication. In this flow, Amazon Cognito receives the password in the request instead of using the SRP protocol to verify passwords. ALLOW_USER_SRP_AUTH: Enable SRP-based authentication. ALLOW_REFRESH_TOKEN_AUTH: Enable authflow to refresh tokens. In some environments, you will see the values ADMIN_NO_SRP_AUTH, CUSTOM_AUTH_FLOW_ONLY, or USER_PASSWORD_AUTH. You can't assign these legacy ExplicitAuthFlows values to user pool clients at the same time as values that begin with ALLOW_, like ALLOW_USER_SRP_AUTH.</td>
</tr>
<tr>
    <td><CopyableCode code="IdTokenValidity" /></td>
    <td><code>integer</code></td>
    <td>The ID token time limit. After this limit expires, your user can't use their ID token. To specify the time unit for IdTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set IdTokenValidity as 10 and TokenValidityUnits as hours, your user can authenticate their session with their ID token for 10 hours. The default time unit for IdTokenValidity in an API request is hours. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your ID tokens are valid for one hour.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="LogoutURLs" /></td>
    <td><code>array</code></td>
    <td>A list of allowed logout URLs for the IdPs.</td>
</tr>
<tr>
    <td><CopyableCode code="PreventUserExistenceErrors" /></td>
    <td><code>string</code></td>
    <td>When ENABLED, suppresses messages that might indicate a valid user exists when someone attempts sign-in. This parameters sets your preference for the errors and responses that you want Amazon Cognito APIs to return during authentication, account confirmation, and password recovery when the user doesn't exist in the user pool. When set to ENABLED and the user doesn't exist, authentication returns an error indicating either the username or password was incorrect. Account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to LEGACY, those APIs return a UserNotFoundException exception if the user doesn't exist in the user pool. Defaults to LEGACY. (LEGACY, ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="ReadAttributes" /></td>
    <td><code>array</code></td>
    <td>The list of user attributes that you want your app client to have read access to. After your user authenticates in your app, their access token authorizes them to read their own attribute value for any attribute in this list. When you don't specify the ReadAttributes for your app client, your app can read the values of email_verified, phone_number_verified, and the standard attributes of your user pool. When your user pool app client has read access to these default attributes, ReadAttributes doesn't return any information. Amazon Cognito only populates ReadAttributes in the API response if you have specified your own custom set of read attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="RefreshTokenRotation" /></td>
    <td><code>object</code></td>
    <td>The configuration of your app client for refresh token rotation. When enabled, your app client issues new ID, access, and refresh tokens when users renew their sessions with refresh tokens. When disabled, token refresh issues only ID and access tokens.</td>
</tr>
<tr>
    <td><CopyableCode code="RefreshTokenValidity" /></td>
    <td><code>integer</code></td>
    <td>The refresh token time limit. After this limit expires, your user can't use their refresh token. To specify the time unit for RefreshTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set RefreshTokenValidity as 10 and TokenValidityUnits as days, your user can refresh their session and retrieve new access and ID tokens for 10 days. The default time unit for RefreshTokenValidity in an API request is days. You can't set RefreshTokenValidity to 0. If you do, Amazon Cognito overrides the value with the default value of 30 days. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your refresh tokens are valid for 30 days.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedIdentityProviders" /></td>
    <td><code>array</code></td>
    <td>A list of provider names for the identity providers (IdPs) that are supported on this client. The following are supported: COGNITO, Facebook, Google, SignInWithApple, and LoginWithAmazon. You can also specify the names that you configured for the SAML and OIDC IdPs in your user pool, for example MySAMLIdP or MyOIDCIdP. This parameter sets the IdPs that managed login will display on the login page for your app client. The removal of COGNITO from this list doesn't prevent authentication operations for local users with the user pools API in an Amazon Web Services SDK. The only way to prevent SDK-based authentication is to block access with a WAF rule.</td>
</tr>
<tr>
    <td><CopyableCode code="TokenValidityUnits" /></td>
    <td><code>object</code></td>
    <td>The time units that, with IdTokenValidity, AccessTokenValidity, and RefreshTokenValidity, set and display the duration of ID, access, and refresh tokens for an app client. You can assign a separate token validity unit to each type of token.</td>
</tr>
<tr>
    <td><CopyableCode code="UserPoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the user pool associated with the app client. (pattern: &lt;code&gt;&#91;\w-&#93;+_&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WriteAttributes" /></td>
    <td><code>array</code></td>
    <td>The list of user attributes that you want your app client to have write access to. After your user authenticates in your app, their access token authorizes them to set or modify their own attribute value for any attribute in this list. When you don't specify the WriteAttributes for your app client, your app can write the values of the Standard attributes of your user pool. When your user pool has write access to these default attributes, WriteAttributes doesn't return any information. Amazon Cognito only populates WriteAttributes in the API response if you have specified your own custom set of write attributes. If your app client allows users to sign in through an IdP, this array must include all attributes that you have mapped to IdP attributes. Amazon Cognito updates mapped attributes when users sign in to your application through an IdP. If your app client does not have write access to a mapped attribute, Amazon Cognito throws an error when it tries to update the attribute. For more information, see Specifying IdP Attribute Mappings for Your user pool.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_user_pool_clients">

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
    <td><CopyableCode code="ClientId" /></td>
    <td><code>string</code></td>
    <td>The app client ID. (pattern: &lt;code&gt;&#91;\w+&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ClientName" /></td>
    <td><code>string</code></td>
    <td>The app client name. (pattern: &lt;code&gt;&#91;\w\s+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UserPoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the user pool that's associated with the app client. (pattern: &lt;code&gt;&#91;\w-&#93;+_&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_user_pool_client"><CopyableCode code="describe_user_pool_client" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given an app client ID, returns configuration information. This operation is useful when you want to inspect an existing app client and programmatically replicate the configuration to another app client. For more information about app clients, see App clients. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#list_user_pool_clients"><CopyableCode code="list_user_pool_clients" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given a user pool ID, lists app clients. App clients are sets of rules for the access that you want a user pool to grant to one application. For more information, see App clients. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#create_user_pool_client"><CopyableCode code="create_user_pool_client" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-ClientName"><code>ClientName</code></a></td>
    <td></td>
    <td>Creates an app client in a user pool. This operation sets basic and advanced configuration options. Unlike app clients created in the console, Amazon Cognito doesn't automatically assign a branding style to app clients that you configure with this API operation. Managed login and classic hosted UI pages aren't available for your client until after you apply a branding style. If you don't provide a value for an attribute, Amazon Cognito sets it to its default value. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#update_user_pool_client"><CopyableCode code="update_user_pool_client" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-ClientId"><code>ClientId</code></a></td>
    <td></td>
    <td>Given a user pool app client ID, updates the configuration. To avoid setting parameters to Amazon Cognito defaults, construct this API request to pass the existing configuration of your app client, modified to include the changes that you want to make. If you don't provide a value for an attribute, Amazon Cognito sets it to its default value. Unlike app clients created in the console, Amazon Cognito doesn't automatically assign a branding style to app clients that you configure with this API operation. Managed login and classic hosted UI pages aren't available for your client until after you apply a branding style. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#delete_user_pool_client"><CopyableCode code="delete_user_pool_client" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a user pool app client. After you delete an app client, users can no longer sign in to the associated application.</td>
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
    defaultValue="describe_user_pool_client"
    values={[
        { label: 'describe_user_pool_client', value: 'describe_user_pool_client' },
        { label: 'list_user_pool_clients', value: 'list_user_pool_clients' }
    ]}
>
<TabItem value="describe_user_pool_client">

Given an app client ID, returns configuration information. This operation is useful when you want to inspect an existing app client and programmatically replicate the configuration to another app client. For more information about app clients, see App clients. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
SELECT
AccessTokenValidity,
AllowedOAuthFlows,
AllowedOAuthFlowsUserPoolClient,
AllowedOAuthScopes,
AnalyticsConfiguration,
AuthSessionValidity,
CallbackURLs,
ClientId,
ClientName,
ClientSecret,
CreationDate,
DefaultRedirectURI,
EnablePropagateAdditionalUserContextData,
EnableTokenRevocation,
ExplicitAuthFlows,
IdTokenValidity,
LastModifiedDate,
LogoutURLs,
PreventUserExistenceErrors,
ReadAttributes,
RefreshTokenRotation,
RefreshTokenValidity,
SupportedIdentityProviders,
TokenValidityUnits,
UserPoolId,
WriteAttributes
FROM aws.cognito_idp.user_pool_clients
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_user_pool_clients">

Given a user pool ID, lists app clients. App clients are sets of rules for the access that you want a user pool to grant to one application. For more information, see App clients. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
SELECT
ClientId,
ClientName,
UserPoolId
FROM aws.cognito_idp.user_pool_clients
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_pool_client"
    values={[
        { label: 'create_user_pool_client', value: 'create_user_pool_client' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_pool_client">

Creates an app client in a user pool. This operation sets basic and advanced configuration options. Unlike app clients created in the console, Amazon Cognito doesn't automatically assign a branding style to app clients that you configure with this API operation. Managed login and classic hosted UI pages aren't available for your client until after you apply a branding style. If you don't provide a value for an attribute, Amazon Cognito sets it to its default value. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
INSERT INTO aws.cognito_idp.user_pool_clients (
UserPoolId,
ClientName,
GenerateSecret,
ClientSecret,
RefreshTokenValidity,
AccessTokenValidity,
IdTokenValidity,
TokenValidityUnits,
ReadAttributes,
WriteAttributes,
ExplicitAuthFlows,
SupportedIdentityProviders,
CallbackURLs,
LogoutURLs,
DefaultRedirectURI,
AllowedOAuthFlows,
AllowedOAuthScopes,
AllowedOAuthFlowsUserPoolClient,
AnalyticsConfiguration,
PreventUserExistenceErrors,
EnableTokenRevocation,
EnablePropagateAdditionalUserContextData,
AuthSessionValidity,
RefreshTokenRotation,
region
)
SELECT 
'{{ UserPoolId }}' /* required */,
'{{ ClientName }}' /* required */,
{{ GenerateSecret }},
'{{ ClientSecret }}',
{{ RefreshTokenValidity }},
{{ AccessTokenValidity }},
{{ IdTokenValidity }},
'{{ TokenValidityUnits }}',
'{{ ReadAttributes }}',
'{{ WriteAttributes }}',
'{{ ExplicitAuthFlows }}',
'{{ SupportedIdentityProviders }}',
'{{ CallbackURLs }}',
'{{ LogoutURLs }}',
'{{ DefaultRedirectURI }}',
'{{ AllowedOAuthFlows }}',
'{{ AllowedOAuthScopes }}',
{{ AllowedOAuthFlowsUserPoolClient }},
'{{ AnalyticsConfiguration }}',
'{{ PreventUserExistenceErrors }}',
{{ EnableTokenRevocation }},
{{ EnablePropagateAdditionalUserContextData }},
{{ AuthSessionValidity }},
'{{ RefreshTokenRotation }}',
'{{ region }}'
RETURNING
UserPoolClient
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: user_pool_clients
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the user_pool_clients resource.
    - name: UserPoolId
      value: "{{ UserPoolId }}"
      description: |
        The ID of the user pool where you want to create an app client.
    - name: ClientName
      value: "{{ ClientName }}"
      description: |
        A friendly name for the app client that you want to create.
    - name: GenerateSecret
      value: {{ GenerateSecret }}
      description: |
        When true, generates a client secret for the app client. Client secrets are used with server-side and machine-to-machine applications. Client secrets are automatically generated; you can't specify a secret value. For more information, see App client types.
    - name: ClientSecret
      value: "{{ ClientSecret }}"
      description: |
        A custom client secret that you want to use for the app client. You cannot specify both GenerateSecret as true and provide a ClientSecret value.
    - name: RefreshTokenValidity
      value: {{ RefreshTokenValidity }}
      description: |
        The refresh token time limit. After this limit expires, your user can't use their refresh token. To specify the time unit for RefreshTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set RefreshTokenValidity as 10 and TokenValidityUnits as days, your user can refresh their session and retrieve new access and ID tokens for 10 days. The default time unit for RefreshTokenValidity in an API request is days. You can't set RefreshTokenValidity to 0. If you do, Amazon Cognito overrides the value with the default value of 30 days. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your refresh tokens are valid for 30 days.
    - name: AccessTokenValidity
      value: {{ AccessTokenValidity }}
      description: |
        The access token time limit. After this limit expires, your user can't use their access token. To specify the time unit for AccessTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set AccessTokenValidity to 10 and TokenValidityUnits to hours, your user can authorize access with their access token for 10 hours. The default time unit for AccessTokenValidity in an API request is hours. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your access tokens are valid for one hour.
    - name: IdTokenValidity
      value: {{ IdTokenValidity }}
      description: |
        The ID token time limit. After this limit expires, your user can't use their ID token. To specify the time unit for IdTokenValidity as seconds, minutes, hours, or days, set a TokenValidityUnits value in your API request. For example, when you set IdTokenValidity as 10 and TokenValidityUnits as hours, your user can authenticate their session with their ID token for 10 hours. The default time unit for IdTokenValidity in an API request is hours. Valid range is displayed below in seconds. If you don't specify otherwise in the configuration of your app client, your ID tokens are valid for one hour.
    - name: TokenValidityUnits
      description: |
        The units that validity times are represented in. The default unit for refresh tokens is days, and the default for ID and access tokens are hours.
      value:
        AccessToken: "{{ AccessToken }}"
        IdToken: "{{ IdToken }}"
        RefreshToken: "{{ RefreshToken }}"
    - name: ReadAttributes
      value:
        - "{{ ReadAttributes }}"
      description: |
        The list of user attributes that you want your app client to have read access to. After your user authenticates in your app, their access token authorizes them to read their own attribute value for any attribute in this list. When you don't specify the ReadAttributes for your app client, your app can read the values of email_verified, phone_number_verified, and the standard attributes of your user pool. When your user pool app client has read access to these default attributes, ReadAttributes doesn't return any information. Amazon Cognito only populates ReadAttributes in the API response if you have specified your own custom set of read attributes.
    - name: WriteAttributes
      value:
        - "{{ WriteAttributes }}"
      description: |
        The list of user attributes that you want your app client to have write access to. After your user authenticates in your app, their access token authorizes them to set or modify their own attribute value for any attribute in this list. When you don't specify the WriteAttributes for your app client, your app can write the values of the Standard attributes of your user pool. When your user pool has write access to these default attributes, WriteAttributes doesn't return any information. Amazon Cognito only populates WriteAttributes in the API response if you have specified your own custom set of write attributes. If your app client allows users to sign in through an IdP, this array must include all attributes that you have mapped to IdP attributes. Amazon Cognito updates mapped attributes when users sign in to your application through an IdP. If your app client does not have write access to a mapped attribute, Amazon Cognito throws an error when it tries to update the attribute. For more information, see Specifying IdP Attribute Mappings for Your user pool.
    - name: ExplicitAuthFlows
      value:
        - "{{ ExplicitAuthFlows }}"
      description: |
        The authentication flows that you want your user pool client to support. For each app client in your user pool, you can sign in your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that you define with Lambda functions. If you don't specify a value for ExplicitAuthFlows, your app client supports ALLOW_REFRESH_TOKEN_AUTH, ALLOW_USER_SRP_AUTH, and ALLOW_CUSTOM_AUTH. The values for authentication flow options include the following. ALLOW_USER_AUTH: Enable selection-based sign-in with USER_AUTH. This setting covers username-password, secure remote password (SRP), passwordless, and passkey authentication. This authentiation flow can do username-password and SRP authentication without other ExplicitAuthFlows permitting them. For example users can complete an SRP challenge through USER_AUTH without the flow USER_SRP_AUTH being active for the app client. This flow doesn't include CUSTOM_AUTH. To activate this setting, your user pool must be in the Essentials tier or higher. ALLOW_ADMIN_USER_PASSWORD_AUTH: Enable admin based user password authentication flow ADMIN_USER_PASSWORD_AUTH. This setting replaces the ADMIN_NO_SRP_AUTH setting. With this authentication flow, your app passes a user name and password to Amazon Cognito in the request, instead of using the Secure Remote Password (SRP) protocol to securely transmit the password. ALLOW_CUSTOM_AUTH: Enable Lambda trigger based authentication. ALLOW_USER_PASSWORD_AUTH: Enable user password-based authentication. In this flow, Amazon Cognito receives the password in the request instead of using the SRP protocol to verify passwords. ALLOW_USER_SRP_AUTH: Enable SRP-based authentication. ALLOW_REFRESH_TOKEN_AUTH: Enable authflow to refresh tokens. In some environments, you will see the values ADMIN_NO_SRP_AUTH, CUSTOM_AUTH_FLOW_ONLY, or USER_PASSWORD_AUTH. You can't assign these legacy ExplicitAuthFlows values to user pool clients at the same time as values that begin with ALLOW_, like ALLOW_USER_SRP_AUTH.
    - name: SupportedIdentityProviders
      value:
        - "{{ SupportedIdentityProviders }}"
      description: |
        A list of provider names for the identity providers (IdPs) that are supported on this client. The following are supported: COGNITO, Facebook, Google, SignInWithApple, and LoginWithAmazon. You can also specify the names that you configured for the SAML and OIDC IdPs in your user pool, for example MySAMLIdP or MyOIDCIdP. This parameter sets the IdPs that managed login will display on the login page for your app client. The removal of COGNITO from this list doesn't prevent authentication operations for local users with the user pools API in an Amazon Web Services SDK. The only way to prevent SDK-based authentication is to block access with a WAF rule.
    - name: CallbackURLs
      value:
        - "{{ CallbackURLs }}"
      description: |
        A list of allowed redirect, or callback, URLs for managed login authentication. These URLs are the paths where you want to send your users' browsers after they complete authentication with managed login or a third-party IdP. Typically, callback URLs are the home of an application that uses OAuth or OIDC libraries to process authentication outcomes. A redirect URI must meet the following requirements: Be an absolute URI. Be registered with the authorization server. Amazon Cognito doesn't accept authorization requests with redirect_uri values that aren't in the list of CallbackURLs that you provide in this parameter. Not include a fragment component. See OAuth 2.0 - Redirection Endpoint. Amazon Cognito requires HTTPS over HTTP except for callback URLs to http://localhost, http://127.0.0.1 and http://[::1]. These callback URLs are for testing purposes only. You can specify custom TCP ports for your callback URLs. App callback URLs such as myapp://example are also supported.
    - name: LogoutURLs
      value:
        - "{{ LogoutURLs }}"
      description: |
        A list of allowed logout URLs for managed login authentication. When you pass logout_uri and client_id parameters to /logout, Amazon Cognito signs out your user and redirects them to the logout URL. This parameter describes the URLs that you want to be the permitted targets of logout_uri. A typical use of these URLs is when a user selects "Sign out" and you redirect them to your public homepage. For more information, see Logout endpoint.
    - name: DefaultRedirectURI
      value: "{{ DefaultRedirectURI }}"
      description: |
        The default redirect URI. In app clients with one assigned IdP, replaces redirect_uri in authentication requests. Must be in the CallbackURLs list.
    - name: AllowedOAuthFlows
      value:
        - "{{ AllowedOAuthFlows }}"
      description: |
        The OAuth grant types that you want your app client to generate for clients in managed login authentication. To create an app client that generates client credentials grants, you must add client_credentials as the only allowed OAuth flow. code Use a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the /oauth2/token endpoint. implicit Issue the access token, and the ID token when scopes like openid and profile are requested, directly to your user. client_credentials Issue the access token from the /oauth2/token endpoint directly to a non-person user, authorized by a combination of the client ID and client secret.
    - name: AllowedOAuthScopes
      value:
        - "{{ AllowedOAuthScopes }}"
      description: |
        The OAuth, OpenID Connect (OIDC), and custom scopes that you want to permit your app client to authorize access with. Scopes govern access control to user pool self-service API operations, user data from the userInfo endpoint, and third-party APIs. Scope values include phone, email, openid, and profile. The aws.cognito.signin.user.admin scope authorizes user self-service operations. Custom scopes with resource servers authorize access to external APIs.
    - name: AllowedOAuthFlowsUserPoolClient
      value: {{ AllowedOAuthFlowsUserPoolClient }}
      description: |
        Set to true to use OAuth 2.0 authorization server features in your app client. This parameter must have a value of true before you can configure the following features in your app client. CallBackURLs: Callback URLs. LogoutURLs: Sign-out redirect URLs. AllowedOAuthScopes: OAuth 2.0 scopes. AllowedOAuthFlows: Support for authorization code, implicit, and client credentials OAuth 2.0 grants. To use authorization server features, configure one of these features in the Amazon Cognito console or set AllowedOAuthFlowsUserPoolClient to true in a CreateUserPoolClient or UpdateUserPoolClient API request. If you don't set a value for AllowedOAuthFlowsUserPoolClient in a request with the CLI or SDKs, it defaults to false. When false, only SDK-based API sign-in is permitted.
    - name: AnalyticsConfiguration
      description: |
        The user pool analytics configuration for collecting metrics and sending them to your Amazon Pinpoint campaign. In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools might not have access to analytics or might be configurable with campaigns in the US East (N. Virginia) Region. For more information, see Using Amazon Pinpoint analytics.
      value:
        ApplicationId: "{{ ApplicationId }}"
        ApplicationArn: "{{ ApplicationArn }}"
        RoleArn: "{{ RoleArn }}"
        ExternalId: "{{ ExternalId }}"
        UserDataShared: {{ UserDataShared }}
    - name: PreventUserExistenceErrors
      value: "{{ PreventUserExistenceErrors }}"
      description: |
        When ENABLED, suppresses messages that might indicate a valid user exists when someone attempts sign-in. This parameters sets your preference for the errors and responses that you want Amazon Cognito APIs to return during authentication, account confirmation, and password recovery when the user doesn't exist in the user pool. When set to ENABLED and the user doesn't exist, authentication returns an error indicating either the username or password was incorrect. Account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to LEGACY, those APIs return a UserNotFoundException exception if the user doesn't exist in the user pool. Defaults to LEGACY.
      valid_values: ['LEGACY', 'ENABLED']
    - name: EnableTokenRevocation
      value: {{ EnableTokenRevocation }}
      description: |
        Activates or deactivates token revocation in the target app client. If you don't include this parameter, token revocation is automatically activated for the new user pool client.
    - name: EnablePropagateAdditionalUserContextData
      value: {{ EnablePropagateAdditionalUserContextData }}
      description: |
        When true, your application can include additional UserContextData in authentication requests. This data includes the IP address, and contributes to analysis by threat protection features. For more information about propagation of user context data, see Adding session data to API requests. If you don’t include this parameter, you can't send the source IP address to Amazon Cognito threat protection features. You can only activate EnablePropagateAdditionalUserContextData in an app client that has a client secret.
    - name: AuthSessionValidity
      value: {{ AuthSessionValidity }}
      description: |
        Amazon Cognito creates a session token for each API request in an authentication flow. AuthSessionValidity is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.
    - name: RefreshTokenRotation
      description: |
        The configuration of your app client for refresh token rotation. When enabled, your app client issues new ID, access, and refresh tokens when users renew their sessions with refresh tokens. When disabled, token refresh issues only ID and access tokens.
      value:
        Feature: "{{ Feature }}"
        RetryGracePeriodSeconds: {{ RetryGracePeriodSeconds }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_user_pool_client"
    values={[
        { label: 'update_user_pool_client', value: 'update_user_pool_client' }
    ]}
>
<TabItem value="update_user_pool_client">

Given a user pool app client ID, updates the configuration. To avoid setting parameters to Amazon Cognito defaults, construct this API request to pass the existing configuration of your app client, modified to include the changes that you want to make. If you don't provide a value for an attribute, Amazon Cognito sets it to its default value. Unlike app clients created in the console, Amazon Cognito doesn't automatically assign a branding style to app clients that you configure with this API operation. Managed login and classic hosted UI pages aren't available for your client until after you apply a branding style. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
UPDATE aws.cognito_idp.user_pool_clients
SET 
UserPoolId = '{{ UserPoolId }}',
ClientId = '{{ ClientId }}',
ClientName = '{{ ClientName }}',
RefreshTokenValidity = {{ RefreshTokenValidity }},
AccessTokenValidity = {{ AccessTokenValidity }},
IdTokenValidity = {{ IdTokenValidity }},
TokenValidityUnits = '{{ TokenValidityUnits }}',
ReadAttributes = '{{ ReadAttributes }}',
WriteAttributes = '{{ WriteAttributes }}',
ExplicitAuthFlows = '{{ ExplicitAuthFlows }}',
SupportedIdentityProviders = '{{ SupportedIdentityProviders }}',
CallbackURLs = '{{ CallbackURLs }}',
LogoutURLs = '{{ LogoutURLs }}',
DefaultRedirectURI = '{{ DefaultRedirectURI }}',
AllowedOAuthFlows = '{{ AllowedOAuthFlows }}',
AllowedOAuthScopes = '{{ AllowedOAuthScopes }}',
AllowedOAuthFlowsUserPoolClient = {{ AllowedOAuthFlowsUserPoolClient }},
AnalyticsConfiguration = '{{ AnalyticsConfiguration }}',
PreventUserExistenceErrors = '{{ PreventUserExistenceErrors }}',
EnableTokenRevocation = {{ EnableTokenRevocation }},
EnablePropagateAdditionalUserContextData = {{ EnablePropagateAdditionalUserContextData }},
AuthSessionValidity = {{ AuthSessionValidity }},
RefreshTokenRotation = '{{ RefreshTokenRotation }}'
WHERE 
region = '{{ region }}' --required
AND UserPoolId = '{{ UserPoolId }}' --required
AND ClientId = '{{ ClientId }}' --required
RETURNING
UserPoolClient;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_pool_client"
    values={[
        { label: 'delete_user_pool_client', value: 'delete_user_pool_client' }
    ]}
>
<TabItem value="delete_user_pool_client">

Deletes a user pool app client. After you delete an app client, users can no longer sign in to the associated application.

```sql
DELETE FROM aws.cognito_idp.user_pool_clients
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
