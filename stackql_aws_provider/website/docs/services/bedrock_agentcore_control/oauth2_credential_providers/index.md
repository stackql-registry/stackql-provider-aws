--- 
title: oauth2_credential_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - oauth2_credential_providers
  - bedrock_agentcore_control
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

Creates, updates, deletes, gets or lists an <code>oauth2_credential_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="oauth2_credential_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.oauth2_credential_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_oauth2_credential_provider"
    values={[
        { label: 'get_oauth2_credential_provider', value: 'get_oauth2_credential_provider' },
        { label: 'list_oauth2_credential_providers', value: 'list_oauth2_credential_providers' }
    ]}
>
<TabItem value="get_oauth2_credential_provider">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the OAuth2 credential provider. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="callback_url" /></td>
    <td><code>string</code></td>
    <td>Callback URL to register on the OAuth2 credential provider as an allowed callback URL. This URL is where the OAuth2 authorization server redirects users after they complete the authorization flow.</td>
</tr>
<tr>
    <td><CopyableCode code="client_secret_arn" /></td>
    <td><code>object</code></td>
    <td>Contains information about a secret in Amazon Web Services Secrets Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="client_secret_json_key" /></td>
    <td><code>string</code></td>
    <td>The JSON key used to extract the client secret value from the Amazon Web Services Secrets Manager secret.</td>
</tr>
<tr>
    <td><CopyableCode code="client_secret_source" /></td>
    <td><code>string</code></td>
    <td>The source type of the client secret. Either MANAGED if the secret is managed by the service, or EXTERNAL if managed by the user in Amazon Web Services Secrets Manager. (MANAGED, EXTERNAL)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the OAuth2 credential provider was created.</td>
</tr>
<tr>
    <td><CopyableCode code="credential_provider_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the credential provider requested. (pattern: &lt;code&gt;arn:(aws|aws-us-gov):acps:&#91;A-Za-z0-9-&#93;&#123;1,64&#125;:&#91;0-9&#93;&#123;12&#125;:token-vault/&#91;a-zA-Z0-9-.&#93;+/oauth2credentialprovider/&#91;a-zA-Z0-9-.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="credential_provider_vendor" /></td>
    <td><code>string</code></td>
    <td>The vendor of the OAuth2 credential provider. (GoogleOauth2, GithubOauth2, SlackOauth2, SalesforceOauth2, MicrosoftOauth2, CustomOauth2, AtlassianOauth2, LinkedinOauth2, XOauth2, OktaOauth2, OneLoginOauth2, PingOneOauth2, FacebookOauth2, YandexOauth2, RedditOauth2, ZoomOauth2, TwitchOauth2, SpotifyOauth2, DropboxOauth2, NotionOauth2, HubspotOauth2, CyberArkOauth2, FusionAuthOauth2, Auth0Oauth2, CognitoOauth2)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for failure if the OAuth2 credential provider is in a failed state.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the OAuth2 credential provider was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="oauth_2_provider_config_output" /></td>
    <td><code>object</code></td>
    <td>Contains the output configuration for an OAuth2 provider.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the OAuth2 credential provider. (CREATING, CREATE_FAILED, UPDATING, UPDATE_FAILED, READY, DELETING, DELETE_FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_oauth2_credential_providers">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the OAuth2 credential provider. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the OAuth2 credential provider was created.</td>
</tr>
<tr>
    <td><CopyableCode code="credential_provider_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the OAuth2 credential provider. (pattern: &lt;code&gt;arn:(aws|aws-us-gov):acps:&#91;A-Za-z0-9-&#93;&#123;1,64&#125;:&#91;0-9&#93;&#123;12&#125;:token-vault/&#91;a-zA-Z0-9-.&#93;+/oauth2credentialprovider/&#91;a-zA-Z0-9-.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="credential_provider_vendor" /></td>
    <td><code>string</code></td>
    <td>The vendor of the OAuth2 credential provider. (GoogleOauth2, GithubOauth2, SlackOauth2, SalesforceOauth2, MicrosoftOauth2, CustomOauth2, AtlassianOauth2, LinkedinOauth2, XOauth2, OktaOauth2, OneLoginOauth2, PingOneOauth2, FacebookOauth2, YandexOauth2, RedditOauth2, ZoomOauth2, TwitchOauth2, SpotifyOauth2, DropboxOauth2, NotionOauth2, HubspotOauth2, CyberArkOauth2, FusionAuthOauth2, Auth0Oauth2, CognitoOauth2)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the OAuth2 credential provider was last updated.</td>
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
    <td><a href="#get_oauth2_credential_provider"><CopyableCode code="get_oauth2_credential_provider" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an OAuth2 credential provider.</td>
</tr>
<tr>
    <td><a href="#list_oauth2_credential_providers"><CopyableCode code="list_oauth2_credential_providers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all OAuth2 credential providers in your account.</td>
</tr>
<tr>
    <td><a href="#create_oauth2_credential_provider"><CopyableCode code="create_oauth2_credential_provider" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-credentialProviderVendor"><code>credentialProviderVendor</code></a>, <a href="#parameter-oauth2ProviderConfigInput"><code>oauth2ProviderConfigInput</code></a></td>
    <td></td>
    <td>Creates a new OAuth2 credential provider.</td>
</tr>
<tr>
    <td><a href="#update_oauth2_credential_provider"><CopyableCode code="update_oauth2_credential_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-credentialProviderVendor"><code>credentialProviderVendor</code></a>, <a href="#parameter-oauth2ProviderConfigInput"><code>oauth2ProviderConfigInput</code></a></td>
    <td></td>
    <td>Updates an existing OAuth2 credential provider.</td>
</tr>
<tr>
    <td><a href="#delete_oauth2_credential_provider"><CopyableCode code="delete_oauth2_credential_provider" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an OAuth2 credential provider.</td>
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
    defaultValue="get_oauth2_credential_provider"
    values={[
        { label: 'get_oauth2_credential_provider', value: 'get_oauth2_credential_provider' },
        { label: 'list_oauth2_credential_providers', value: 'list_oauth2_credential_providers' }
    ]}
>
<TabItem value="get_oauth2_credential_provider">

Retrieves information about an OAuth2 credential provider.

```sql
SELECT
name,
callback_url,
client_secret_arn,
client_secret_json_key,
client_secret_source,
created_time,
credential_provider_arn,
credential_provider_vendor,
failure_reason,
last_updated_time,
oauth_2_provider_config_output,
status
FROM aws.bedrock_agentcore_control.oauth2_credential_providers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_oauth2_credential_providers">

Lists all OAuth2 credential providers in your account.

```sql
SELECT
name,
created_time,
credential_provider_arn,
credential_provider_vendor,
last_updated_time
FROM aws.bedrock_agentcore_control.oauth2_credential_providers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_oauth2_credential_provider"
    values={[
        { label: 'create_oauth2_credential_provider', value: 'create_oauth2_credential_provider' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_oauth2_credential_provider">

Creates a new OAuth2 credential provider.

```sql
INSERT INTO aws.bedrock_agentcore_control.oauth2_credential_providers (
name,
credentialProviderVendor,
oauth2ProviderConfigInput,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ credentialProviderVendor }}' /* required */,
'{{ oauth2ProviderConfigInput }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
name,
callback_url,
client_secret_arn,
client_secret_json_key,
client_secret_source,
credential_provider_arn,
oauth_2_provider_config_output,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: oauth2_credential_providers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the oauth2_credential_providers resource.
    - name: name
      value: "{{ name }}"
    - name: credentialProviderVendor
      value: "{{ credentialProviderVendor }}"
      valid_values: ['GoogleOauth2', 'GithubOauth2', 'SlackOauth2', 'SalesforceOauth2', 'MicrosoftOauth2', 'CustomOauth2', 'AtlassianOauth2', 'LinkedinOauth2', 'XOauth2', 'OktaOauth2', 'OneLoginOauth2', 'PingOneOauth2', 'FacebookOauth2', 'YandexOauth2', 'RedditOauth2', 'ZoomOauth2', 'TwitchOauth2', 'SpotifyOauth2', 'DropboxOauth2', 'NotionOauth2', 'HubspotOauth2', 'CyberArkOauth2', 'FusionAuthOauth2', 'Auth0Oauth2', 'CognitoOauth2']
    - name: oauth2ProviderConfigInput
      description: |
        Contains the input configuration for an OAuth2 provider.
      value:
        customOauth2ProviderConfig:
          oauthDiscovery:
            discoveryUrl: "{{ discoveryUrl }}"
            authorizationServerMetadata:
              issuer: "{{ issuer }}"
              authorizationEndpoint: "{{ authorizationEndpoint }}"
              tokenEndpoint: "{{ tokenEndpoint }}"
              responseTypes:
                - "{{ responseTypes }}"
              tokenEndpointAuthMethods:
                - "{{ tokenEndpointAuthMethods }}"
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          clientSecretConfig:
            secretId: "{{ secretId }}"
            jsonKey: "{{ jsonKey }}"
          clientSecretSource: "{{ clientSecretSource }}"
          onBehalfOfTokenExchangeConfig:
            grantType: "{{ grantType }}"
            tokenExchangeGrantTypeConfig:
              actorTokenContent: "{{ actorTokenContent }}"
              actorTokenScopes:
                - "{{ actorTokenScopes }}"
          clientAuthenticationMethod: "{{ clientAuthenticationMethod }}"
          privateKeyJwtConfig:
            privateKeySource:
              kmsKeySource:
                kmsKeyArn: "{{ kmsKeyArn }}"
            signingAlgorithm: "{{ signingAlgorithm }}"
            additionalHeaderClaims: "{{ additionalHeaderClaims }}"
            additionalPayloadClaims: "{{ additionalPayloadClaims }}"
          privateEndpoint:
            selfManagedLatticeResource:
              resourceConfigurationIdentifier: "{{ resourceConfigurationIdentifier }}"
            managedVpcResource:
              vpcIdentifier: "{{ vpcIdentifier }}"
              subnetIds:
                - "{{ subnetIds }}"
              endpointIpAddressType: "{{ endpointIpAddressType }}"
              securityGroupIds:
                - "{{ securityGroupIds }}"
              tags: "{{ tags }}"
              routingDomain: "{{ routingDomain }}"
          privateEndpointOverrides:
            - domain: "{{ domain }}"
              privateEndpoint:
                selfManagedLatticeResource:
                  resourceConfigurationIdentifier: "{{ resourceConfigurationIdentifier }}"
                managedVpcResource:
                  vpcIdentifier: "{{ vpcIdentifier }}"
                  subnetIds: "{{ subnetIds }}"
                  endpointIpAddressType: "{{ endpointIpAddressType }}"
                  securityGroupIds: "{{ securityGroupIds }}"
                  tags: "{{ tags }}"
                  routingDomain: "{{ routingDomain }}"
        googleOauth2ProviderConfig:
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          clientSecretConfig:
            secretId: "{{ secretId }}"
            jsonKey: "{{ jsonKey }}"
          clientSecretSource: "{{ clientSecretSource }}"
        githubOauth2ProviderConfig:
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          clientSecretConfig:
            secretId: "{{ secretId }}"
            jsonKey: "{{ jsonKey }}"
          clientSecretSource: "{{ clientSecretSource }}"
        slackOauth2ProviderConfig:
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          clientSecretConfig:
            secretId: "{{ secretId }}"
            jsonKey: "{{ jsonKey }}"
          clientSecretSource: "{{ clientSecretSource }}"
        salesforceOauth2ProviderConfig:
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          clientSecretConfig:
            secretId: "{{ secretId }}"
            jsonKey: "{{ jsonKey }}"
          clientSecretSource: "{{ clientSecretSource }}"
        microsoftOauth2ProviderConfig:
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          clientSecretConfig:
            secretId: "{{ secretId }}"
            jsonKey: "{{ jsonKey }}"
          clientSecretSource: "{{ clientSecretSource }}"
          tenantId: "{{ tenantId }}"
        atlassianOauth2ProviderConfig:
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          clientSecretConfig:
            secretId: "{{ secretId }}"
            jsonKey: "{{ jsonKey }}"
          clientSecretSource: "{{ clientSecretSource }}"
        linkedinOauth2ProviderConfig:
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          clientSecretConfig:
            secretId: "{{ secretId }}"
            jsonKey: "{{ jsonKey }}"
          clientSecretSource: "{{ clientSecretSource }}"
        includedOauth2ProviderConfig:
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
          clientSecretConfig:
            secretId: "{{ secretId }}"
            jsonKey: "{{ jsonKey }}"
          clientSecretSource: "{{ clientSecretSource }}"
          issuer: "{{ issuer }}"
          authorizationEndpoint: "{{ authorizationEndpoint }}"
          tokenEndpoint: "{{ tokenEndpoint }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_oauth2_credential_provider"
    values={[
        { label: 'update_oauth2_credential_provider', value: 'update_oauth2_credential_provider' }
    ]}
>
<TabItem value="update_oauth2_credential_provider">

Updates an existing OAuth2 credential provider.

```sql
UPDATE aws.bedrock_agentcore_control.oauth2_credential_providers
SET 
name = '{{ name }}',
credentialProviderVendor = '{{ credentialProviderVendor }}',
oauth2ProviderConfigInput = '{{ oauth2ProviderConfigInput }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND credentialProviderVendor = '{{ credentialProviderVendor }}' --required
AND oauth2ProviderConfigInput = '{{ oauth2ProviderConfigInput }}' --required
RETURNING
name,
callback_url,
client_secret_arn,
client_secret_json_key,
client_secret_source,
created_time,
credential_provider_arn,
credential_provider_vendor,
last_updated_time,
oauth_2_provider_config_output,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_oauth2_credential_provider"
    values={[
        { label: 'delete_oauth2_credential_provider', value: 'delete_oauth2_credential_provider' }
    ]}
>
<TabItem value="delete_oauth2_credential_provider">

Deletes an OAuth2 credential provider.

```sql
DELETE FROM aws.bedrock_agentcore_control.oauth2_credential_providers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
