--- 
title: identity_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_providers
  - workspaces_web
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_web.identity_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_identity_provider"
    values={[
        { label: 'get_identity_provider', value: 'get_identity_provider' },
        { label: 'list_identity_providers', value: 'list_identity_providers' }
    ]}
>
<TabItem value="get_identity_provider">

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
    <td><CopyableCode code="identityProviderArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the identity provider. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)&#123;2,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="identityProviderDetails" /></td>
    <td><code>object</code></td>
    <td>The identity provider details. The following list describes the provider detail keys for each identity provider type. For Google and Login with Amazon: client_id client_secret authorize_scopes For Facebook: client_id client_secret authorize_scopes api_version For Sign in with Apple: client_id team_id key_id private_key authorize_scopes For OIDC providers: client_id client_secret attributes_request_method oidc_issuer authorize_scopes authorize_url if not available from discovery URL specified by oidc_issuer key token_url if not available from discovery URL specified by oidc_issuer key attributes_url if not available from discovery URL specified by oidc_issuer key jwks_uri if not available from discovery URL specified by oidc_issuer key For SAML providers: MetadataFile OR MetadataURL IDPSignout (boolean) optional IDPInit (boolean) optional RequestSigningAlgorithm (string) optional - Only accepts rsa-sha256 EncryptedResponses (boolean) optional</td>
</tr>
<tr>
    <td><CopyableCode code="identityProviderName" /></td>
    <td><code>string</code></td>
    <td>The identity provider name. (pattern: &lt;code&gt;&#91;^_&#93;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;&#91;^_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="identityProviderType" /></td>
    <td><code>string</code></td>
    <td>The identity provider type. (SAML, Facebook, Google, LoginWithAmazon, SignInWithApple, OIDC)</td>
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
    <td><CopyableCode code="identityProviders" /></td>
    <td><code>array</code></td>
    <td>The identity providers.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
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
    <td><a href="#get_identity_provider"><CopyableCode code="get_identity_provider" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identity_provider_arn"><code>identity_provider_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the identity provider.</td>
</tr>
<tr>
    <td><a href="#list_identity_providers"><CopyableCode code="list_identity_providers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of identity providers for a specific web portal.</td>
</tr>
<tr>
    <td><a href="#create_identity_provider"><CopyableCode code="create_identity_provider" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-portalArn"><code>portalArn</code></a>, <a href="#parameter-identityProviderName"><code>identityProviderName</code></a>, <a href="#parameter-identityProviderType"><code>identityProviderType</code></a>, <a href="#parameter-identityProviderDetails"><code>identityProviderDetails</code></a></td>
    <td></td>
    <td>Creates an identity provider resource that is then associated with a web portal.</td>
</tr>
<tr>
    <td><a href="#update_identity_provider"><CopyableCode code="update_identity_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identity_provider_arn"><code>identity_provider_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the identity provider.</td>
</tr>
<tr>
    <td><a href="#delete_identity_provider"><CopyableCode code="delete_identity_provider" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identity_provider_arn"><code>identity_provider_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the identity provider.</td>
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
<tr id="parameter-identity_provider_arn">
    <td><CopyableCode code="identity_provider_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the identity provider.</td>
</tr>
<tr id="parameter-portal_arn">
    <td><CopyableCode code="portal_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the web portal.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be included in the next page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_identity_provider"
    values={[
        { label: 'get_identity_provider', value: 'get_identity_provider' },
        { label: 'list_identity_providers', value: 'list_identity_providers' }
    ]}
>
<TabItem value="get_identity_provider">

Gets the identity provider.

```sql
SELECT
identityProviderArn,
identityProviderDetails,
identityProviderName,
identityProviderType
FROM aws.workspaces_web.identity_providers
WHERE identity_provider_arn = '{{ identity_provider_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_identity_providers">

Retrieves a list of identity providers for a specific web portal.

```sql
SELECT
identityProviders,
nextToken
FROM aws.workspaces_web.identity_providers
WHERE portal_arn = '{{ portal_arn }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
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

Creates an identity provider resource that is then associated with a web portal.

```sql
INSERT INTO aws.workspaces_web.identity_providers (
portalArn,
identityProviderName,
identityProviderType,
identityProviderDetails,
clientToken,
tags,
region
)
SELECT 
'{{ portalArn }}' /* required */,
'{{ identityProviderName }}' /* required */,
'{{ identityProviderType }}' /* required */,
'{{ identityProviderDetails }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
identityProviderArn
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
    - name: portalArn
      value: "{{ portalArn }}"
    - name: identityProviderName
      value: "{{ identityProviderName }}"
    - name: identityProviderType
      value: "{{ identityProviderType }}"
      valid_values: ['SAML', 'Facebook', 'Google', 'LoginWithAmazon', 'SignInWithApple', 'OIDC']
    - name: identityProviderDetails
      value: "{{ identityProviderDetails }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
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

Updates the identity provider.

```sql
UPDATE aws.workspaces_web.identity_providers
SET 
identityProviderName = '{{ identityProviderName }}',
identityProviderType = '{{ identityProviderType }}',
identityProviderDetails = '{{ identityProviderDetails }}',
clientToken = '{{ clientToken }}'
WHERE 
identity_provider_arn = '{{ identity_provider_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
identityProvider;
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

Deletes the identity provider.

```sql
DELETE FROM aws.workspaces_web.identity_providers
WHERE identity_provider_arn = '{{ identity_provider_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
