--- 
title: identity_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_sources
  - verifiedpermissions
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

Creates, updates, deletes, gets or lists an <code>identity_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.verifiedpermissions.identity_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_identity_source"
    values={[
        { label: 'get_identity_source', value: 'get_identity_source' },
        { label: 'list_identity_sources', value: 'list_identity_sources' }
    ]}
>
<TabItem value="get_identity_source">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Contains configuration information about an identity source.</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the identity source was originally created.</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>object</code></td>
    <td>A structure that describes the configuration of the identity source.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_source_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the identity source. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the identity source was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_store_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the policy store that contains the identity source. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="principal_entity_type" /></td>
    <td><code>string</code></td>
    <td>The data type of principals generated for identities authenticated by this identity source. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_identity_sources">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Contains configuration information about an identity source.</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the identity source was originally created.</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>object</code></td>
    <td>A structure that contains the details of the associated identity provider (IdP).</td>
</tr>
<tr>
    <td><CopyableCode code="identity_source_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the identity source. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the identity source was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_store_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the policy store that contains the identity source. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="principal_entity_type" /></td>
    <td><code>string</code></td>
    <td>The Cedar entity type of the principals returned from the IdP associated with this identity source. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#get_identity_source"><CopyableCode code="get_identity_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details about the specified identity source.</td>
</tr>
<tr>
    <td><a href="#list_identity_sources"><CopyableCode code="list_identity_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of all of the identity sources defined in the specified policy store.</td>
</tr>
<tr>
    <td><a href="#create_identity_source"><CopyableCode code="create_identity_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyStoreId"><code>policyStoreId</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td></td>
    <td>Adds an identity source to a policy store–an Amazon Cognito user pool or OpenID Connect (OIDC) identity provider (IdP). After you create an identity source, you can use the identities provided by the IdP as proxies for the principal in authorization queries that use the IsAuthorizedWithToken or BatchIsAuthorizedWithToken API operations. These identities take the form of tokens that contain claims about the user, such as IDs, attributes and group memberships. Identity sources provide identity (ID) tokens and access tokens. Verified Permissions derives information about your user and session from token claims. Access tokens provide action context to your policies, and ID tokens provide principal Attributes. Tokens from an identity source user continue to be usable until they expire. Token revocation and resource deletion have no effect on the validity of a token in your policy store To reference a user from this identity source in your Cedar policies, refer to the following syntax examples. Amazon Cognito user pool: Namespace::&#91;Entity type&#93;::&#91;User pool ID&#93;|&#91;user principal attribute&#93;, for example MyCorp::User::us-east-1_EXAMPLE|a1b2c3d4-5678-90ab-cdef-EXAMPLE11111. OpenID Connect (OIDC) provider: Namespace::&#91;Entity type&#93;::&#91;entityIdPrefix&#93;|&#91;user principal attribute&#93;, for example MyCorp::User::MyOIDCProvider|a1b2c3d4-5678-90ab-cdef-EXAMPLE22222. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.</td>
</tr>
<tr>
    <td><a href="#update_identity_source"><CopyableCode code="update_identity_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyStoreId"><code>policyStoreId</code></a>, <a href="#parameter-identitySourceId"><code>identitySourceId</code></a>, <a href="#parameter-updateConfiguration"><code>updateConfiguration</code></a></td>
    <td></td>
    <td>Updates the specified identity source to use a new identity provider (IdP), or to change the mapping of identities from the IdP to a different principal entity type. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.</td>
</tr>
<tr>
    <td><a href="#delete_identity_source"><CopyableCode code="delete_identity_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an identity source that references an identity provider (IdP) such as Amazon Cognito. After you delete the identity source, you can no longer use tokens for identities from that identity source to represent principals in authorization queries made using IsAuthorizedWithToken. operations.</td>
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
    defaultValue="get_identity_source"
    values={[
        { label: 'get_identity_source', value: 'get_identity_source' },
        { label: 'list_identity_sources', value: 'list_identity_sources' }
    ]}
>
<TabItem value="get_identity_source">

Retrieves the details about the specified identity source.

```sql
SELECT
configuration,
created_date,
details,
identity_source_id,
last_updated_date,
policy_store_id,
principal_entity_type
FROM aws.verifiedpermissions.identity_sources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_identity_sources">

Returns a paginated list of all of the identity sources defined in the specified policy store.

```sql
SELECT
configuration,
created_date,
details,
identity_source_id,
last_updated_date,
policy_store_id,
principal_entity_type
FROM aws.verifiedpermissions.identity_sources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_identity_source"
    values={[
        { label: 'create_identity_source', value: 'create_identity_source' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_identity_source">

Adds an identity source to a policy store–an Amazon Cognito user pool or OpenID Connect (OIDC) identity provider (IdP). After you create an identity source, you can use the identities provided by the IdP as proxies for the principal in authorization queries that use the IsAuthorizedWithToken or BatchIsAuthorizedWithToken API operations. These identities take the form of tokens that contain claims about the user, such as IDs, attributes and group memberships. Identity sources provide identity (ID) tokens and access tokens. Verified Permissions derives information about your user and session from token claims. Access tokens provide action context to your policies, and ID tokens provide principal Attributes. Tokens from an identity source user continue to be usable until they expire. Token revocation and resource deletion have no effect on the validity of a token in your policy store To reference a user from this identity source in your Cedar policies, refer to the following syntax examples. Amazon Cognito user pool: Namespace::[Entity type]::[User pool ID]|[user principal attribute], for example MyCorp::User::us-east-1_EXAMPLE|a1b2c3d4-5678-90ab-cdef-EXAMPLE11111. OpenID Connect (OIDC) provider: Namespace::[Entity type]::[entityIdPrefix]|[user principal attribute], for example MyCorp::User::MyOIDCProvider|a1b2c3d4-5678-90ab-cdef-EXAMPLE22222. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.

```sql
INSERT INTO aws.verifiedpermissions.identity_sources (
clientToken,
policyStoreId,
configuration,
principalEntityType,
region
)
SELECT 
'{{ clientToken }}',
'{{ policyStoreId }}' /* required */,
'{{ configuration }}' /* required */,
'{{ principalEntityType }}',
'{{ region }}'
RETURNING
created_date,
identity_source_id,
last_updated_date,
policy_store_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: identity_sources
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the identity_sources resource.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an ConflictException error. Verified Permissions recognizes a ClientToken for eight hours. After eight hours, the next request with the same parameters performs the operation again regardless of the value of ClientToken.
    - name: policyStoreId
      value: "{{ policyStoreId }}"
      description: |
        Specifies the ID of the policy store in which you want to store this identity source. Only policies and requests made using this policy store can reference identities from the identity provider configured in the new identity source. To specify a policy store, use its ID or alias name. When using an alias name, prefix it with policy-store-alias/. For example: ID: PSEXAMPLEabcdefg111111 Alias name: policy-store-alias/example-policy-store To view aliases, use ListPolicyStoreAliases.
    - name: configuration
      description: |
        Specifies the details required to communicate with the identity provider (IdP) associated with this identity source.
      value:
        cognitoUserPoolConfiguration:
          userPoolArn: "{{ userPoolArn }}"
          clientIds:
            - "{{ clientIds }}"
          groupConfiguration:
            groupEntityType: "{{ groupEntityType }}"
        openIdConnectConfiguration:
          issuer: "{{ issuer }}"
          entityIdPrefix: "{{ entityIdPrefix }}"
          groupConfiguration:
            groupClaim: "{{ groupClaim }}"
            groupEntityType: "{{ groupEntityType }}"
          tokenSelection:
            accessTokenOnly:
              principalIdClaim: "{{ principalIdClaim }}"
              audiences:
                - "{{ audiences }}"
            identityTokenOnly:
              principalIdClaim: "{{ principalIdClaim }}"
              clientIds:
                - "{{ clientIds }}"
    - name: principalEntityType
      value: "{{ principalEntityType }}"
      description: |
        Specifies the namespace and data type of the principals generated for identities authenticated by the new identity source.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_identity_source"
    values={[
        { label: 'update_identity_source', value: 'update_identity_source' }
    ]}
>
<TabItem value="update_identity_source">

Updates the specified identity source to use a new identity provider (IdP), or to change the mapping of identities from the IdP to a different principal entity type. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.

```sql
UPDATE aws.verifiedpermissions.identity_sources
SET 
policyStoreId = '{{ policyStoreId }}',
identitySourceId = '{{ identitySourceId }}',
updateConfiguration = '{{ updateConfiguration }}',
principalEntityType = '{{ principalEntityType }}'
WHERE 
region = '{{ region }}' --required
AND policyStoreId = '{{ policyStoreId }}' --required
AND identitySourceId = '{{ identitySourceId }}' --required
AND updateConfiguration = '{{ updateConfiguration }}' --required
RETURNING
created_date,
identity_source_id,
last_updated_date,
policy_store_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_identity_source"
    values={[
        { label: 'delete_identity_source', value: 'delete_identity_source' }
    ]}
>
<TabItem value="delete_identity_source">

Deletes an identity source that references an identity provider (IdP) such as Amazon Cognito. After you delete the identity source, you can no longer use tokens for identities from that identity source to represent principals in authorization queries made using IsAuthorizedWithToken. operations.

```sql
DELETE FROM aws.verifiedpermissions.identity_sources
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
