--- 
title: identity_provider_by_identifiers
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_provider_by_identifiers
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

Creates, updates, deletes, gets or lists an <code>identity_provider_by_identifiers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_provider_by_identifiers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.identity_provider_by_identifiers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_identity_provider_by_identifier"
    values={[
        { label: 'get_identity_provider_by_identifier', value: 'get_identity_provider_by_identifier' }
    ]}
>
<TabItem value="get_identity_provider_by_identifier">

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
    <td><a href="#get_identity_provider_by_identifier"><CopyableCode code="get_identity_provider_by_identifier" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given the identifier of an identity provider (IdP), for example examplecorp, returns information about the user pool configuration for that IdP. For more information about IdPs, see Third-party IdP sign-in.</td>
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
    defaultValue="get_identity_provider_by_identifier"
    values={[
        { label: 'get_identity_provider_by_identifier', value: 'get_identity_provider_by_identifier' }
    ]}
>
<TabItem value="get_identity_provider_by_identifier">

Given the identifier of an identity provider (IdP), for example examplecorp, returns information about the user pool configuration for that IdP. For more information about IdPs, see Third-party IdP sign-in.

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
FROM aws.cognito_idp.identity_provider_by_identifiers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
