--- 
title: identity_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_pools
  - cognito_identity
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

Creates, updates, deletes, gets or lists an <code>identity_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_identity.identity_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_identity_pool"
    values={[
        { label: 'describe_identity_pool', value: 'describe_identity_pool' },
        { label: 'list_identity_pools', value: 'list_identity_pools' }
    ]}
>
<TabItem value="describe_identity_pool">

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
    <td><CopyableCode code="AllowClassicFlow" /></td>
    <td><code>boolean</code></td>
    <td>Enables or disables the Basic (Classic) authentication flow. For more information, see Identity Pools (Federated Identities) Authentication Flow in the Amazon Cognito Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="AllowUnauthenticatedIdentities" /></td>
    <td><code>boolean</code></td>
    <td>TRUE if the identity pool supports unauthenticated logins.</td>
</tr>
<tr>
    <td><CopyableCode code="CognitoIdentityProviders" /></td>
    <td><code>array</code></td>
    <td>A list representing an Amazon Cognito user pool and its client ID.</td>
</tr>
<tr>
    <td><CopyableCode code="DeveloperProviderName" /></td>
    <td><code>string</code></td>
    <td>The "domain" by which Cognito will refer to your users. (pattern: &lt;code&gt;&#91;\w._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityPoolId" /></td>
    <td><code>string</code></td>
    <td>An identity pool ID in the format REGION:GUID. (pattern: &lt;code&gt;&#91;\w-&#93;+:&#91;0-9a-f-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityPoolName" /></td>
    <td><code>string</code></td>
    <td>A string that you provide. (pattern: &lt;code&gt;&#91;\w\s+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityPoolTags" /></td>
    <td><code>object</code></td>
    <td>The tags that are assigned to the identity pool. A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="OpenIdConnectProviderARNs" /></td>
    <td><code>array</code></td>
    <td>The ARNs of the OpenID Connect providers.</td>
</tr>
<tr>
    <td><CopyableCode code="SamlProviderARNs" /></td>
    <td><code>array</code></td>
    <td>An array of Amazon Resource Names (ARNs) of the SAML provider for your identity pool.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedLoginProviders" /></td>
    <td><code>object</code></td>
    <td>Optional key:value pairs mapping provider names to provider app IDs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_identity_pools">

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
    <td><CopyableCode code="IdentityPoolId" /></td>
    <td><code>string</code></td>
    <td>An identity pool ID in the format REGION:GUID. (pattern: &lt;code&gt;&#91;\w-&#93;+:&#91;0-9a-f-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityPoolName" /></td>
    <td><code>string</code></td>
    <td>A string that you provide. (pattern: &lt;code&gt;&#91;\w\s+=,.@-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_identity_pool"><CopyableCode code="describe_identity_pool" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users. You must use Amazon Web Services developer credentials to call this operation.</td>
</tr>
<tr>
    <td><a href="#list_identity_pools"><CopyableCode code="list_identity_pools" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all of the Cognito identity pools registered for your account. You must use Amazon Web Services developer credentials to call this operation.</td>
</tr>
<tr>
    <td><a href="#create_identity_pool"><CopyableCode code="create_identity_pool" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityPoolName"><code>IdentityPoolName</code></a>, <a href="#parameter-AllowUnauthenticatedIdentities"><code>AllowUnauthenticatedIdentities</code></a></td>
    <td></td>
    <td>Creates a new identity pool. The identity pool is a store of user identity information that is specific to your Amazon Web Services account. The keys for SupportedLoginProviders are as follows: Facebook: graph.facebook.com Google: accounts.google.com Sign in With Apple: appleid.apple.com Amazon: www.amazon.com Twitter: api.twitter.com Digits: www.digits.com If you don't provide a value for a parameter, Amazon Cognito sets it to its default value. You must use Amazon Web Services developer credentials to call this operation.</td>
</tr>
<tr>
    <td><a href="#update_identity_pool"><CopyableCode code="update_identity_pool" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityPoolId"><code>IdentityPoolId</code></a>, <a href="#parameter-IdentityPoolName"><code>IdentityPoolName</code></a>, <a href="#parameter-AllowUnauthenticatedIdentities"><code>AllowUnauthenticatedIdentities</code></a></td>
    <td></td>
    <td>Updates the configuration of an identity pool. If you don't provide a value for a parameter, Amazon Cognito sets it to its default value. You must use Amazon Web Services developer credentials to call this operation.</td>
</tr>
<tr>
    <td><a href="#delete_identity_pool"><CopyableCode code="delete_identity_pool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an identity pool. Once a pool is deleted, users will not be able to authenticate with the pool. You must use Amazon Web Services developer credentials to call this operation.</td>
</tr>
<tr>
    <td><a href="#unlink_developer_identity"><CopyableCode code="unlink_developer_identity" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityId"><code>IdentityId</code></a>, <a href="#parameter-IdentityPoolId"><code>IdentityPoolId</code></a>, <a href="#parameter-DeveloperProviderName"><code>DeveloperProviderName</code></a>, <a href="#parameter-DeveloperUserIdentifier"><code>DeveloperUserIdentifier</code></a></td>
    <td></td>
    <td>Unlinks a DeveloperUserIdentifier from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible. You must use Amazon Web Services developer credentials to call this operation.</td>
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
    defaultValue="describe_identity_pool"
    values={[
        { label: 'describe_identity_pool', value: 'describe_identity_pool' },
        { label: 'list_identity_pools', value: 'list_identity_pools' }
    ]}
>
<TabItem value="describe_identity_pool">

Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users. You must use Amazon Web Services developer credentials to call this operation.

```sql
SELECT
AllowClassicFlow,
AllowUnauthenticatedIdentities,
CognitoIdentityProviders,
DeveloperProviderName,
IdentityPoolId,
IdentityPoolName,
IdentityPoolTags,
OpenIdConnectProviderARNs,
SamlProviderARNs,
SupportedLoginProviders
FROM aws.cognito_identity.identity_pools
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_identity_pools">

Lists all of the Cognito identity pools registered for your account. You must use Amazon Web Services developer credentials to call this operation.

```sql
SELECT
IdentityPoolId,
IdentityPoolName
FROM aws.cognito_identity.identity_pools
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_identity_pool"
    values={[
        { label: 'create_identity_pool', value: 'create_identity_pool' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_identity_pool">

Creates a new identity pool. The identity pool is a store of user identity information that is specific to your Amazon Web Services account. The keys for SupportedLoginProviders are as follows: Facebook: graph.facebook.com Google: accounts.google.com Sign in With Apple: appleid.apple.com Amazon: www.amazon.com Twitter: api.twitter.com Digits: www.digits.com If you don't provide a value for a parameter, Amazon Cognito sets it to its default value. You must use Amazon Web Services developer credentials to call this operation.

```sql
INSERT INTO aws.cognito_identity.identity_pools (
IdentityPoolName,
AllowUnauthenticatedIdentities,
AllowClassicFlow,
SupportedLoginProviders,
DeveloperProviderName,
OpenIdConnectProviderARNs,
CognitoIdentityProviders,
SamlProviderARNs,
IdentityPoolTags,
region
)
SELECT 
'{{ IdentityPoolName }}' /* required */,
{{ AllowUnauthenticatedIdentities }} /* required */,
{{ AllowClassicFlow }},
'{{ SupportedLoginProviders }}',
'{{ DeveloperProviderName }}',
'{{ OpenIdConnectProviderARNs }}',
'{{ CognitoIdentityProviders }}',
'{{ SamlProviderARNs }}',
'{{ IdentityPoolTags }}',
'{{ region }}'
RETURNING
AllowClassicFlow,
AllowUnauthenticatedIdentities,
CognitoIdentityProviders,
DeveloperProviderName,
IdentityPoolId,
IdentityPoolName,
IdentityPoolTags,
OpenIdConnectProviderARNs,
SamlProviderARNs,
SupportedLoginProviders
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: identity_pools
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the identity_pools resource.
    - name: IdentityPoolName
      value: "{{ IdentityPoolName }}"
      description: |
        A string that you provide.
    - name: AllowUnauthenticatedIdentities
      value: {{ AllowUnauthenticatedIdentities }}
      description: |
        TRUE if the identity pool supports unauthenticated logins.
    - name: AllowClassicFlow
      value: {{ AllowClassicFlow }}
      description: |
        Enables or disables the Basic (Classic) authentication flow. For more information, see Identity Pools (Federated Identities) Authentication Flow in the Amazon Cognito Developer Guide.
    - name: SupportedLoginProviders
      value: "{{ SupportedLoginProviders }}"
      description: |
        Optional key:value pairs mapping provider names to provider app IDs.
    - name: DeveloperProviderName
      value: "{{ DeveloperProviderName }}"
      description: |
        The "domain" by which Cognito will refer to your users. This name acts as a placeholder that allows your backend and the Cognito service to communicate about the developer provider. For the DeveloperProviderName, you can use letters as well as period (.), underscore (_), and dash (-). Once you have set a developer provider name, you cannot change it. Please take care in setting this parameter.
    - name: OpenIdConnectProviderARNs
      value:
        - "{{ OpenIdConnectProviderARNs }}"
      description: |
        The Amazon Resource Names (ARN) of the OpenID Connect providers.
    - name: CognitoIdentityProviders
      description: |
        An array of Amazon Cognito user pools and their client IDs.
      value:
        - ProviderName: "{{ ProviderName }}"
          ClientId: "{{ ClientId }}"
          ServerSideTokenCheck: {{ ServerSideTokenCheck }}
    - name: SamlProviderARNs
      value:
        - "{{ SamlProviderARNs }}"
      description: |
        An array of Amazon Resource Names (ARNs) of the SAML provider for your identity pool.
    - name: IdentityPoolTags
      value: "{{ IdentityPoolTags }}"
      description: |
        Tags to assign to the identity pool. A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_identity_pool"
    values={[
        { label: 'update_identity_pool', value: 'update_identity_pool' }
    ]}
>
<TabItem value="update_identity_pool">

Updates the configuration of an identity pool. If you don't provide a value for a parameter, Amazon Cognito sets it to its default value. You must use Amazon Web Services developer credentials to call this operation.

```sql
UPDATE aws.cognito_identity.identity_pools
SET 
IdentityPoolId = '{{ IdentityPoolId }}',
IdentityPoolName = '{{ IdentityPoolName }}',
AllowUnauthenticatedIdentities = {{ AllowUnauthenticatedIdentities }},
AllowClassicFlow = {{ AllowClassicFlow }},
SupportedLoginProviders = '{{ SupportedLoginProviders }}',
DeveloperProviderName = '{{ DeveloperProviderName }}',
OpenIdConnectProviderARNs = '{{ OpenIdConnectProviderARNs }}',
CognitoIdentityProviders = '{{ CognitoIdentityProviders }}',
SamlProviderARNs = '{{ SamlProviderARNs }}',
IdentityPoolTags = '{{ IdentityPoolTags }}'
WHERE 
region = '{{ region }}' --required
AND IdentityPoolId = '{{ IdentityPoolId }}' --required
AND IdentityPoolName = '{{ IdentityPoolName }}' --required
AND AllowUnauthenticatedIdentities = {{ AllowUnauthenticatedIdentities }} --required
RETURNING
AllowClassicFlow,
AllowUnauthenticatedIdentities,
CognitoIdentityProviders,
DeveloperProviderName,
IdentityPoolId,
IdentityPoolName,
IdentityPoolTags,
OpenIdConnectProviderARNs,
SamlProviderARNs,
SupportedLoginProviders;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_identity_pool"
    values={[
        { label: 'delete_identity_pool', value: 'delete_identity_pool' }
    ]}
>
<TabItem value="delete_identity_pool">

Deletes an identity pool. Once a pool is deleted, users will not be able to authenticate with the pool. You must use Amazon Web Services developer credentials to call this operation.

```sql
DELETE FROM aws.cognito_identity.identity_pools
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="unlink_developer_identity"
    values={[
        { label: 'unlink_developer_identity', value: 'unlink_developer_identity' }
    ]}
>
<TabItem value="unlink_developer_identity">

Unlinks a DeveloperUserIdentifier from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible. You must use Amazon Web Services developer credentials to call this operation.

```sql
EXEC aws.cognito_identity.identity_pools.unlink_developer_identity 
@region='{{ region }}' --required 
@@json=
'{
"IdentityId": "{{ IdentityId }}", 
"IdentityPoolId": "{{ IdentityPoolId }}", 
"DeveloperProviderName": "{{ DeveloperProviderName }}", 
"DeveloperUserIdentifier": "{{ DeveloperUserIdentifier }}"
}'
;
```
</TabItem>
</Tabs>
