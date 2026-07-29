--- 
title: identity_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_providers
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

Creates, updates, deletes, gets or lists an <code>identity_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.identity_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_identity_provider"
    values={[
        { label: 'describe_identity_provider', value: 'describe_identity_provider' },
        { label: 'list_identity_providers', value: 'list_identity_providers' }
    ]}
>
<TabItem value="describe_identity_provider">

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
    <td><CopyableCode code="attribute_mapping" /></td>
    <td><code>object</code></td>
    <td>A mapping of IdP attributes to standard and custom user pool attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="idp_identifiers" /></td>
    <td><code>array</code></td>
    <td>A list of IdP identifiers. IdP identifiers are strings that represent friendly names or domain names of IdPs, for example MyIdP or auth.example.com. You can choose to route user authorization requests to the right IdP with either IdP identifiers or IdP names. For more information, see identity_provider and idp_identifier at Authorize endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="provider_details" /></td>
    <td><code>object</code></td>
    <td>The scopes, URLs, and identifiers for your external identity provider. The following examples describe the provider detail keys for each IdP type. These values and their schema are subject to change. Social IdP authorize_scopes values must match the values listed here. OpenID Connect (OIDC) Amazon Cognito accepts the following elements when it can't discover endpoint URLs from oidc_issuer: attributes_url, authorize_url, jwks_uri, token_url. Create or update request: "ProviderDetails": &#123; "attributes_request_method": "GET", "attributes_url": "https:​//auth.example.com/userInfo", "authorize_scopes": "openid profile email", "authorize_url": "https:​//auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https:​//auth.example.com/.well-known/jwks.json", "oidc_issuer": "https:​//auth.example.com", "token_url": "https:​//example.com/token" &#125; Describe response: "ProviderDetails": &#123; "attributes_request_method": "GET", "attributes_url": "https:​//auth.example.com/userInfo", "attributes_url_add_attributes": "false", "authorize_scopes": "openid profile email", "authorize_url": "https:​//auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https:​//auth.example.com/.well-known/jwks.json", "oidc_issuer": "https:​//auth.example.com", "token_url": "https:​//example.com/token" &#125; SAML Create or update request with Metadata URL: "ProviderDetails": &#123; "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataURL": "https:​//auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256" &#125; Create or update request with Metadata file: "ProviderDetails": &#123; "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataFile": "&#91;metadata XML&#93;", "RequestSigningAlgorithm": "rsa-sha256" &#125; The value of MetadataFile must be the plaintext metadata document with all quote (") characters escaped by backslashes. Describe response: "ProviderDetails": &#123; "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "ActiveEncryptionCertificate": "&#91;certificate&#93;", "MetadataURL": "https:​//auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256", "SLORedirectBindingURI": "https:​//auth.example.com/slo/saml", "SSORedirectBindingURI": "https:​//auth.example.com/sso/saml" &#125; LoginWithAmazon Create or update request: "ProviderDetails": &#123; "authorize_scopes": "profile postal_code", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret" Describe response: "ProviderDetails": &#123; "attributes_url": "https:​//api.amazon.com/user/profile", "attributes_url_add_attributes": "false", "authorize_scopes": "profile postal_code", "authorize_url": "https:​//www.amazon.com/ap/oa", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "POST", "token_url": "https:​//api.amazon.com/auth/o2/token" &#125; Google Create or update request: "ProviderDetails": &#123; "authorize_scopes": "email profile openid", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret" &#125; Describe response: "ProviderDetails": &#123; "attributes_url": "https:​//people.googleapis.com/v1/people/me?personFields=", "attributes_url_add_attributes": "true", "authorize_scopes": "email profile openid", "authorize_url": "https:​//accounts.google.com/o/oauth2/v2/auth", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret", "oidc_issuer": "https:​//accounts.google.com", "token_request_method": "POST", "token_url": "https:​//www.googleapis.com/oauth2/v4/token" &#125; SignInWithApple Create or update request: "ProviderDetails": &#123; "authorize_scopes": "email name", "client_id": "com.example.cognito", "private_key": "1EXAMPLE", "key_id": "2EXAMPLE", "team_id": "3EXAMPLE" &#125; Describe response: "ProviderDetails": &#123; "attributes_url_add_attributes": "false", "authorize_scopes": "email name", "authorize_url": "https:​//appleid.apple.com/auth/authorize", "client_id": "com.example.cognito", "key_id": "1EXAMPLE", "oidc_issuer": "https:​//appleid.apple.com", "team_id": "2EXAMPLE", "token_request_method": "POST", "token_url": "https:​//appleid.apple.com/auth/token" &#125; Facebook Create or update request: "ProviderDetails": &#123; "api_version": "v17.0", "authorize_scopes": "public_profile, email", "client_id": "1example23456789", "client_secret": "provider-app-client-secret" &#125; Describe response: "ProviderDetails": &#123; "api_version": "v17.0", "attributes_url": "https:​//graph.facebook.com/v17.0/me?fields=", "attributes_url_add_attributes": "true", "authorize_scopes": "public_profile, email", "authorize_url": "https:​//www.facebook.com/v17.0/dialog/oauth", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "GET", "token_url": "https:​//graph.facebook.com/v17.0/oauth/access_token" &#125;</td>
</tr>
<tr>
    <td><CopyableCode code="provider_name" /></td>
    <td><code>string</code></td>
    <td>A friendly name for the IdP. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\p&#123;Z&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_type" /></td>
    <td><code>string</code></td>
    <td>The type of IdP. Either SAML, OIDC, or a named social identity provider. (SAML, Facebook, Google, LoginWithAmazon, SignInWithApple, OIDC)</td>
</tr>
<tr>
    <td><CopyableCode code="user_pool_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user pool associated with the IdP. (pattern: &lt;code&gt;&#91;\w-&#93;+_&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_identity_providers">

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
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="provider_name" /></td>
    <td><code>string</code></td>
    <td>The name of the IdP, for example MySAMLProvider. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\p&#123;Z&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_type" /></td>
    <td><code>string</code></td>
    <td>The type of the provider, for example SAML. Amazon Cognito supports SAML 2.0, OIDC, and social IdPs. User pools list supported social IdPs by name in this response parameter: Facebook, Google, Login with Amazon, and Sign in with Apple. (SAML, Facebook, Google, LoginWithAmazon, SignInWithApple, OIDC)</td>
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
    <td><a href="#describe_identity_provider"><CopyableCode code="describe_identity_provider" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given a user pool ID and identity provider (IdP) name, returns details about the IdP.</td>
</tr>
<tr>
    <td><a href="#list_identity_providers"><CopyableCode code="list_identity_providers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given a user pool ID, returns information about configured identity providers (IdPs). For more information about IdPs, see Third-party IdP sign-in. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#create_identity_provider"><CopyableCode code="create_identity_provider" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-ProviderName"><code>ProviderName</code></a>, <a href="#parameter-ProviderType"><code>ProviderType</code></a>, <a href="#parameter-ProviderDetails"><code>ProviderDetails</code></a></td>
    <td></td>
    <td>Adds a configuration and trust relationship between a third-party identity provider (IdP) and a user pool. Amazon Cognito accepts sign-in with third-party identity providers through managed login and OIDC relying-party libraries. For more information, see Third-party IdP sign-in. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#update_identity_provider"><CopyableCode code="update_identity_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-ProviderName"><code>ProviderName</code></a></td>
    <td></td>
    <td>Modifies the configuration and trust relationship between a third-party identity provider (IdP) and a user pool. Amazon Cognito accepts sign-in with third-party identity providers through managed login and OIDC relying-party libraries. For more information, see Third-party IdP sign-in. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#delete_identity_provider"><CopyableCode code="delete_identity_provider" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a user pool identity provider (IdP). After you delete an IdP, users can no longer sign in to your user pool through that IdP. For more information about user pool IdPs, see Third-party IdP sign-in. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
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
    defaultValue="describe_identity_provider"
    values={[
        { label: 'describe_identity_provider', value: 'describe_identity_provider' },
        { label: 'list_identity_providers', value: 'list_identity_providers' }
    ]}
>
<TabItem value="describe_identity_provider">

Given a user pool ID and identity provider (IdP) name, returns details about the IdP.

```sql
SELECT
attribute_mapping,
creation_date,
idp_identifiers,
last_modified_date,
provider_details,
provider_name,
provider_type,
user_pool_id
FROM aws.cognito_idp.identity_providers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_identity_providers">

Given a user pool ID, returns information about configured identity providers (IdPs). For more information about IdPs, see Third-party IdP sign-in. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
SELECT
creation_date,
last_modified_date,
provider_name,
provider_type
FROM aws.cognito_idp.identity_providers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_identity_provider"
    values={[
        { label: 'create_identity_provider', value: 'create_identity_provider' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_identity_provider">

Adds a configuration and trust relationship between a third-party identity provider (IdP) and a user pool. Amazon Cognito accepts sign-in with third-party identity providers through managed login and OIDC relying-party libraries. For more information, see Third-party IdP sign-in. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
INSERT INTO aws.cognito_idp.identity_providers (
UserPoolId,
ProviderName,
ProviderType,
ProviderDetails,
AttributeMapping,
IdpIdentifiers,
region
)
SELECT 
'{{ UserPoolId }}' /* required */,
'{{ ProviderName }}' /* required */,
'{{ ProviderType }}' /* required */,
'{{ ProviderDetails }}' /* required */,
'{{ AttributeMapping }}',
'{{ IdpIdentifiers }}',
'{{ region }}'
RETURNING
identity_provider
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: identity_providers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the identity_providers resource.
    - name: UserPoolId
      value: "{{ UserPoolId }}"
      description: |
        The Id of the user pool where you want to create an IdP.
    - name: ProviderName
      value: "{{ ProviderName }}"
      description: |
        The name that you want to assign to the IdP. You can pass the identity provider name in the identity_provider query parameter of requests to the Authorize endpoint to silently redirect to sign-in with the associated IdP.
    - name: ProviderType
      value: "{{ ProviderType }}"
      description: |
        The type of IdP that you want to add. Amazon Cognito supports OIDC, SAML 2.0, Login With Amazon, Sign In With Apple, Google, and Facebook IdPs.
      valid_values: ['SAML', 'Facebook', 'Google', 'LoginWithAmazon', 'SignInWithApple', 'OIDC']
    - name: ProviderDetails
      value: "{{ ProviderDetails }}"
      description: |
        The scopes, URLs, and identifiers for your external identity provider. The following examples describe the provider detail keys for each IdP type. These values and their schema are subject to change. Social IdP authorize_scopes values must match the values listed here. OpenID Connect (OIDC) Amazon Cognito accepts the following elements when it can't discover endpoint URLs from oidc_issuer: attributes_url, authorize_url, jwks_uri, token_url. Create or update request: "ProviderDetails": { "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" } Describe response: "ProviderDetails": { "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "attributes_url_add_attributes": "false", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" } SAML Create or update request with Metadata URL: "ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256" } Create or update request with Metadata file: "ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataFile": "[metadata XML]", "RequestSigningAlgorithm": "rsa-sha256" } The value of MetadataFile must be the plaintext metadata document with all quote (") characters escaped by backslashes. Describe response: "ProviderDetails": { "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "ActiveEncryptionCertificate": "[certificate]", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256", "SLORedirectBindingURI": "https://auth.example.com/slo/saml", "SSORedirectBindingURI": "https://auth.example.com/sso/saml" } LoginWithAmazon Create or update request: "ProviderDetails": { "authorize_scopes": "profile postal_code", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret" Describe response: "ProviderDetails": { "attributes_url": "https://api.amazon.com/user/profile", "attributes_url_add_attributes": "false", "authorize_scopes": "profile postal_code", "authorize_url": "https://www.amazon.com/ap/oa", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "POST", "token_url": "https://api.amazon.com/auth/o2/token" } Google Create or update request: "ProviderDetails": { "authorize_scopes": "email profile openid", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret" } Describe response: "ProviderDetails": { "attributes_url": "https://people.googleapis.com/v1/people/me?personFields=", "attributes_url_add_attributes": "true", "authorize_scopes": "email profile openid", "authorize_url": "https://accounts.google.com/o/oauth2/v2/auth", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret", "oidc_issuer": "https://accounts.google.com", "token_request_method": "POST", "token_url": "https://www.googleapis.com/oauth2/v4/token" } SignInWithApple Create or update request: "ProviderDetails": { "authorize_scopes": "email name", "client_id": "com.example.cognito", "private_key": "1EXAMPLE", "key_id": "2EXAMPLE", "team_id": "3EXAMPLE" } Describe response: "ProviderDetails": { "attributes_url_add_attributes": "false", "authorize_scopes": "email name", "authorize_url": "https://appleid.apple.com/auth/authorize", "client_id": "com.example.cognito", "key_id": "1EXAMPLE", "oidc_issuer": "https://appleid.apple.com", "team_id": "2EXAMPLE", "token_request_method": "POST", "token_url": "https://appleid.apple.com/auth/token" } Facebook Create or update request: "ProviderDetails": { "api_version": "v17.0", "authorize_scopes": "public_profile, email", "client_id": "1example23456789", "client_secret": "provider-app-client-secret" } Describe response: "ProviderDetails": { "api_version": "v17.0", "attributes_url": "https://graph.facebook.com/v17.0/me?fields=", "attributes_url_add_attributes": "true", "authorize_scopes": "public_profile, email", "authorize_url": "https://www.facebook.com/v17.0/dialog/oauth", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "GET", "token_url": "https://graph.facebook.com/v17.0/oauth/access_token" }
    - name: AttributeMapping
      value: "{{ AttributeMapping }}"
      description: |
        A mapping of IdP attributes to standard and custom user pool attributes. Specify a user pool attribute as the key of the key-value pair, and the IdP attribute claim name as the value.
    - name: IdpIdentifiers
      value:
        - "{{ IdpIdentifiers }}"
      description: |
        An array of IdP identifiers, for example "IdPIdentifiers": [ "MyIdP", "MyIdP2" ]. Identifiers are friendly names that you can pass in the idp_identifier query parameter of requests to the Authorize endpoint to silently redirect to sign-in with the associated IdP. Identifiers in a domain format also enable the use of email-address matching with SAML providers.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_identity_provider"
    values={[
        { label: 'update_identity_provider', value: 'update_identity_provider' }
    ]}
>
<TabItem value="update_identity_provider">

Modifies the configuration and trust relationship between a third-party identity provider (IdP) and a user pool. Amazon Cognito accepts sign-in with third-party identity providers through managed login and OIDC relying-party libraries. For more information, see Third-party IdP sign-in. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
UPDATE aws.cognito_idp.identity_providers
SET 
UserPoolId = '{{ UserPoolId }}',
ProviderName = '{{ ProviderName }}',
ProviderDetails = '{{ ProviderDetails }}',
AttributeMapping = '{{ AttributeMapping }}',
IdpIdentifiers = '{{ IdpIdentifiers }}'
WHERE 
region = '{{ region }}' --required
AND UserPoolId = '{{ UserPoolId }}' --required
AND ProviderName = '{{ ProviderName }}' --required
RETURNING
identity_provider;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_identity_provider"
    values={[
        { label: 'delete_identity_provider', value: 'delete_identity_provider' }
    ]}
>
<TabItem value="delete_identity_provider">

Deletes a user pool identity provider (IdP). After you delete an IdP, users can no longer sign in to your user pool through that IdP. For more information about user pool IdPs, see Third-party IdP sign-in. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
DELETE FROM aws.cognito_idp.identity_providers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
