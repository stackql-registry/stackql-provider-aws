--- 
title: open_id_connect_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - open_id_connect_providers
  - iam
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

Creates, updates, deletes, gets or lists an <code>open_id_connect_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="open_id_connect_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.open_id_connect_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_open_id_connect_provider"
    values={[
        { label: 'get_open_id_connect_provider', value: 'get_open_id_connect_provider' },
        { label: 'list_open_id_connect_providers', value: 'list_open_id_connect_providers' }
    ]}
>
<TabItem value="get_open_id_connect_provider">

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
    <td><CopyableCode code="ClientIDList" /></td>
    <td><code>string</code></td>
    <td>A list of client IDs (also known as audiences) that are associated with the specified IAM OIDC provider resource object. For more information, see CreateOpenIDConnectProvider.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string</code></td>
    <td>The date and time when the IAM OIDC provider resource object was created in the Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>A list of tags that are attached to the specified IAM OIDC provider. The returned list of tags is sorted by tag key. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="ThumbprintList" /></td>
    <td><code>string</code></td>
    <td>A list of certificate thumbprints that are associated with the specified IAM OIDC provider resource object. For more information, see CreateOpenIDConnectProvider.</td>
</tr>
<tr>
    <td><CopyableCode code="Url" /></td>
    <td><code>string</code></td>
    <td>The URL that the IAM OIDC provider resource object is associated with. For more information, see CreateOpenIDConnectProvider.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_open_id_connect_providers">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources. For more information about ARNs, go to Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.</td>
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
    <td><a href="#get_open_id_connect_provider"><CopyableCode code="get_open_id_connect_provider" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-OpenIDConnectProviderArn"><code>OpenIDConnectProviderArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified OpenID Connect (OIDC) provider resource object in IAM.</td>
</tr>
<tr>
    <td><a href="#list_open_id_connect_providers"><CopyableCode code="list_open_id_connect_providers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists information about the IAM OpenID Connect (OIDC) provider resource objects defined in the Amazon Web Services account. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see GetOpenIDConnectProvider.</td>
</tr>
<tr>
    <td><a href="#create_open_id_connect_provider"><CopyableCode code="create_open_id_connect_provider" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Url"><code>Url</code></a>, <a href="#parameter-ClientIDList"><code>ClientIDList</code></a>, <a href="#parameter-ThumbprintList"><code>ThumbprintList</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates an IAM entity to describe an identity provider (IdP) that supports OpenID Connect (OIDC). The OIDC provider that you create with this operation can be used as a principal in a role's trust policy. Such a policy establishes a trust relationship between Amazon Web Services and the OIDC provider. If you are using an OIDC identity provider from Google, Facebook, or Amazon Cognito, you don't need to create a separate IAM identity provider. These OIDC identity providers are already built-in to Amazon Web Services and are available for your use. Instead, you can move directly to creating new roles using your identity provider. To learn more, see Creating a role for web identity or OpenID connect federation in the IAM User Guide. When you create the IAM OIDC provider, you specify the following: The URL of the OIDC identity provider (IdP) to trust A list of client IDs (also known as audiences) that identify the application or applications allowed to authenticate using the OIDC provider A list of tags that are attached to the specified IAM OIDC provider A list of thumbprints of one or more server certificates that the IdP uses You get all of this information from the OIDC IdP you want to use to access Amazon Web Services. Amazon Web Services secures communication with OIDC identity providers (IdPs) using our library of trusted root certificate authorities (CAs) to verify the JSON Web Key Set (JWKS) endpoint's TLS certificate. If your OIDC IdP relies on a certificate that is not signed by one of these trusted CAs, only then we secure communication using the thumbprints set in the IdP's configuration. The trust for the OIDC provider is derived from the IAM provider that this operation creates. Therefore, it is best to limit access to the CreateOpenIDConnectProvider operation to highly privileged users.</td>
</tr>
<tr>
    <td><a href="#add_client_id_to_open_id_connect_provider"><CopyableCode code="add_client_id_to_open_id_connect_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-OpenIDConnectProviderArn"><code>OpenIDConnectProviderArn</code></a>, <a href="#parameter-ClientID"><code>ClientID</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds a new client ID (also known as audience) to the list of client IDs already registered for the specified IAM OpenID Connect (OIDC) provider resource. This operation is idempotent; it does not fail or return an error if you add an existing client ID to the provider.</td>
</tr>
<tr>
    <td><a href="#update_open_id_connect_provider_thumbprint"><CopyableCode code="update_open_id_connect_provider_thumbprint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-OpenIDConnectProviderArn"><code>OpenIDConnectProviderArn</code></a>, <a href="#parameter-ThumbprintList"><code>ThumbprintList</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Replaces the existing list of server certificate thumbprints associated with an OpenID Connect (OIDC) provider resource object with a new list of thumbprints. The list that you pass with this operation completely replaces the existing list of thumbprints. (The lists are not merged.) Typically, you need to update a thumbprint only when the identity provider certificate changes, which occurs rarely. However, if the provider's certificate does change, any attempt to assume an IAM role that specifies the OIDC provider as a principal fails until the certificate thumbprint is updated. Amazon Web Services secures communication with OIDC identity providers (IdPs) using our library of trusted root certificate authorities (CAs) to verify the JSON Web Key Set (JWKS) endpoint's TLS certificate. If your OIDC IdP relies on a certificate that is not signed by one of these trusted CAs, only then we secure communication using the thumbprints set in the IdP's configuration. Trust for the OIDC provider is derived from the provider certificate and is validated by the thumbprint. Therefore, it is best to limit access to the UpdateOpenIDConnectProviderThumbprint operation to highly privileged users.</td>
</tr>
<tr>
    <td><a href="#delete_open_id_connect_provider"><CopyableCode code="delete_open_id_connect_provider" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-OpenIDConnectProviderArn"><code>OpenIDConnectProviderArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an OpenID Connect identity provider (IdP) resource object in IAM. Deleting an IAM OIDC provider resource does not update any roles that reference the provider as a principal in their trust policies. Any attempt to assume a role that references a deleted provider fails. This operation is idempotent; it does not fail or return an error if you call the operation for a provider that does not exist.</td>
</tr>
<tr>
    <td><a href="#remove_client_id_from_open_id_connect_provider"><CopyableCode code="remove_client_id_from_open_id_connect_provider" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-OpenIDConnectProviderArn"><code>OpenIDConnectProviderArn</code></a>, <a href="#parameter-ClientID"><code>ClientID</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified client ID (also known as audience) from the list of client IDs registered for the specified IAM OpenID Connect (OIDC) provider resource object. This operation is idempotent; it does not fail or return an error if you try to remove a client ID that does not exist.</td>
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
<tr id="parameter-ClientID">
    <td><CopyableCode code="ClientID" /></td>
    <td><code>string</code></td>
    <td>The client ID (also known as audience) to remove from the IAM OIDC provider resource. For more information about client IDs, see CreateOpenIDConnectProvider.</td>
</tr>
<tr id="parameter-OpenIDConnectProviderArn">
    <td><CopyableCode code="OpenIDConnectProviderArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM OIDC provider resource to remove the client ID from. You can get a list of OIDC provider ARNs by using the ListOpenIDConnectProviders operation. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.</td>
</tr>
<tr id="parameter-ThumbprintList">
    <td><CopyableCode code="ThumbprintList" /></td>
    <td><code>array</code></td>
    <td>A list of certificate thumbprints that are associated with the specified IAM OpenID Connect provider. For more information, see CreateOpenIDConnectProvider.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientIDList">
    <td><CopyableCode code="ClientIDList" /></td>
    <td><code>array</code></td>
    <td>Provides a list of client IDs, also known as audiences. When a mobile or web app registers with an OpenID Connect provider, they establish a value that identifies the application. This is the value that's sent as the client_id parameter on OAuth requests. You can register multiple client IDs with the same provider. For example, you might have multiple applications that use the same OIDC provider. You cannot register more than 100 client IDs with a single IAM OIDC provider. There is no defined format for a client ID. The CreateOpenIDConnectProviderRequest operation accepts client IDs up to 255 characters long.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags that you want to attach to the new IAM OpenID Connect (OIDC) provider. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.</td>
</tr>
<tr id="parameter-ThumbprintList">
    <td><CopyableCode code="ThumbprintList" /></td>
    <td><code>array</code></td>
    <td>A list of server certificate thumbprints for the OpenID Connect (OIDC) identity provider's server certificates. Typically this list includes only one entry. However, IAM lets you have up to five thumbprints for an OIDC provider. This lets you maintain multiple thumbprints if the identity provider is rotating certificates. This parameter is optional. If it is not included, IAM will retrieve and use the top intermediate certificate authority (CA) thumbprint of the OpenID Connect identity provider server certificate. The server certificate thumbprint is the hex-encoded SHA-1 hash value of the X.509 certificate used by the domain where the OpenID Connect provider makes its keys available. It is always a 40-character string. For example, assume that the OIDC provider is server.example.com and the provider stores its keys at https:​//keys.server.example.com/openid-connect. In that case, the thumbprint string would be the hex-encoded SHA-1 hash value of the certificate used by https:​//keys.server.example.com. For more information about obtaining the OIDC provider thumbprint, see Obtaining the thumbprint for an OpenID Connect provider in the IAM user Guide. If your OIDC provider's discovery endpoint and JWKS endpoint (jwks_uri) use different certificates or hosts, include the thumbprints for both endpoints in this list.</td>
</tr>
<tr id="parameter-Url">
    <td><CopyableCode code="Url" /></td>
    <td><code>string</code></td>
    <td>The URL of the identity provider. The URL must begin with https:​// and should correspond to the iss claim in the provider's OpenID Connect ID tokens. Per the OIDC standard, path components are allowed but query parameters are not. Typically the URL consists of only a hostname, like https:​//server.example.org or https:​//example.com. The URL should not contain a port number. You cannot register the same provider multiple times in a single Amazon Web Services account. If you try to submit a URL that has already been used for an OpenID Connect provider in the Amazon Web Services account, you will get an error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_open_id_connect_provider"
    values={[
        { label: 'get_open_id_connect_provider', value: 'get_open_id_connect_provider' },
        { label: 'list_open_id_connect_providers', value: 'list_open_id_connect_providers' }
    ]}
>
<TabItem value="get_open_id_connect_provider">

Returns information about the specified OpenID Connect (OIDC) provider resource object in IAM.

```sql
SELECT
ClientIDList,
CreateDate,
Tags,
ThumbprintList,
Url
FROM aws.iam.open_id_connect_providers
WHERE OpenIDConnectProviderArn = '{{ OpenIDConnectProviderArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_open_id_connect_providers">

Lists information about the IAM OpenID Connect (OIDC) provider resource objects defined in the Amazon Web Services account. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see GetOpenIDConnectProvider.

```sql
SELECT
Arn
FROM aws.iam.open_id_connect_providers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_open_id_connect_provider"
    values={[
        { label: 'create_open_id_connect_provider', value: 'create_open_id_connect_provider' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_open_id_connect_provider">

Creates an IAM entity to describe an identity provider (IdP) that supports OpenID Connect (OIDC). The OIDC provider that you create with this operation can be used as a principal in a role's trust policy. Such a policy establishes a trust relationship between Amazon Web Services and the OIDC provider. If you are using an OIDC identity provider from Google, Facebook, or Amazon Cognito, you don't need to create a separate IAM identity provider. These OIDC identity providers are already built-in to Amazon Web Services and are available for your use. Instead, you can move directly to creating new roles using your identity provider. To learn more, see Creating a role for web identity or OpenID connect federation in the IAM User Guide. When you create the IAM OIDC provider, you specify the following: The URL of the OIDC identity provider (IdP) to trust A list of client IDs (also known as audiences) that identify the application or applications allowed to authenticate using the OIDC provider A list of tags that are attached to the specified IAM OIDC provider A list of thumbprints of one or more server certificates that the IdP uses You get all of this information from the OIDC IdP you want to use to access Amazon Web Services. Amazon Web Services secures communication with OIDC identity providers (IdPs) using our library of trusted root certificate authorities (CAs) to verify the JSON Web Key Set (JWKS) endpoint's TLS certificate. If your OIDC IdP relies on a certificate that is not signed by one of these trusted CAs, only then we secure communication using the thumbprints set in the IdP's configuration. The trust for the OIDC provider is derived from the IAM provider that this operation creates. Therefore, it is best to limit access to the CreateOpenIDConnectProvider operation to highly privileged users.

```sql
INSERT INTO aws.iam.open_id_connect_providers (
region,
Url,
ClientIDList,
ThumbprintList,
Tags
)
SELECT 
'{{ region }}',
'{{ Url }}',
'{{ ClientIDList }}',
'{{ ThumbprintList }}',
'{{ Tags }}'
RETURNING
OpenIDConnectProviderArn,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: open_id_connect_providers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the open_id_connect_providers resource.
    - name: Url
      value: "{{ Url }}"
      description: The URL of the identity provider. The URL must begin with https:// and should correspond to the iss claim in the provider's OpenID Connect ID tokens. Per the OIDC standard, path components are allowed but query parameters are not. Typically the URL consists of only a hostname, like https://server.example.org or https://example.com. The URL should not contain a port number. You cannot register the same provider multiple times in a single Amazon Web Services account. If you try to submit a URL that has already been used for an OpenID Connect provider in the Amazon Web Services account, you will get an error.
      description: The URL of the identity provider. The URL must begin with https:// and should correspond to the iss claim in the provider's OpenID Connect ID tokens. Per the OIDC standard, path components are allowed but query parameters are not. Typically the URL consists of only a hostname, like https://server.example.org or https://example.com. The URL should not contain a port number. You cannot register the same provider multiple times in a single Amazon Web Services account. If you try to submit a URL that has already been used for an OpenID Connect provider in the Amazon Web Services account, you will get an error.
    - name: ClientIDList
      value: "{{ ClientIDList }}"
      description: Provides a list of client IDs, also known as audiences. When a mobile or web app registers with an OpenID Connect provider, they establish a value that identifies the application. This is the value that's sent as the client_id parameter on OAuth requests. You can register multiple client IDs with the same provider. For example, you might have multiple applications that use the same OIDC provider. You cannot register more than 100 client IDs with a single IAM OIDC provider. There is no defined format for a client ID. The CreateOpenIDConnectProviderRequest operation accepts client IDs up to 255 characters long.
      description: Provides a list of client IDs, also known as audiences. When a mobile or web app registers with an OpenID Connect provider, they establish a value that identifies the application. This is the value that's sent as the client_id parameter on OAuth requests. You can register multiple client IDs with the same provider. For example, you might have multiple applications that use the same OIDC provider. You cannot register more than 100 client IDs with a single IAM OIDC provider. There is no defined format for a client ID. The CreateOpenIDConnectProviderRequest operation accepts client IDs up to 255 characters long.
    - name: ThumbprintList
      value: "{{ ThumbprintList }}"
      description: A list of server certificate thumbprints for the OpenID Connect (OIDC) identity provider's server certificates. Typically this list includes only one entry. However, IAM lets you have up to five thumbprints for an OIDC provider. This lets you maintain multiple thumbprints if the identity provider is rotating certificates. This parameter is optional. If it is not included, IAM will retrieve and use the top intermediate certificate authority (CA) thumbprint of the OpenID Connect identity provider server certificate. The server certificate thumbprint is the hex-encoded SHA-1 hash value of the X.509 certificate used by the domain where the OpenID Connect provider makes its keys available. It is always a 40-character string. For example, assume that the OIDC provider is server.example.com and the provider stores its keys at https://keys.server.example.com/openid-connect. In that case, the thumbprint string would be the hex-encoded SHA-1 hash value of the certificate used by https://keys.server.example.com. For more information about obtaining the OIDC provider thumbprint, see Obtaining the thumbprint for an OpenID Connect provider in the IAM user Guide. If your OIDC provider's discovery endpoint and JWKS endpoint (jwks_uri) use different certificates or hosts, include the thumbprints for both endpoints in this list.
      description: A list of server certificate thumbprints for the OpenID Connect (OIDC) identity provider's server certificates. Typically this list includes only one entry. However, IAM lets you have up to five thumbprints for an OIDC provider. This lets you maintain multiple thumbprints if the identity provider is rotating certificates. This parameter is optional. If it is not included, IAM will retrieve and use the top intermediate certificate authority (CA) thumbprint of the OpenID Connect identity provider server certificate. The server certificate thumbprint is the hex-encoded SHA-1 hash value of the X.509 certificate used by the domain where the OpenID Connect provider makes its keys available. It is always a 40-character string. For example, assume that the OIDC provider is server.example.com and the provider stores its keys at https://keys.server.example.com/openid-connect. In that case, the thumbprint string would be the hex-encoded SHA-1 hash value of the certificate used by https://keys.server.example.com. For more information about obtaining the OIDC provider thumbprint, see Obtaining the thumbprint for an OpenID Connect provider in the IAM user Guide. If your OIDC provider's discovery endpoint and JWKS endpoint (jwks_uri) use different certificates or hosts, include the thumbprints for both endpoints in this list.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags that you want to attach to the new IAM OpenID Connect (OIDC) provider. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
      description: A list of tags that you want to attach to the new IAM OpenID Connect (OIDC) provider. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_client_id_to_open_id_connect_provider"
    values={[
        { label: 'add_client_id_to_open_id_connect_provider', value: 'add_client_id_to_open_id_connect_provider' },
        { label: 'update_open_id_connect_provider_thumbprint', value: 'update_open_id_connect_provider_thumbprint' }
    ]}
>
<TabItem value="add_client_id_to_open_id_connect_provider">

Adds a new client ID (also known as audience) to the list of client IDs already registered for the specified IAM OpenID Connect (OIDC) provider resource. This operation is idempotent; it does not fail or return an error if you add an existing client ID to the provider.

```sql
UPDATE aws.iam.open_id_connect_providers
SET 
-- No updatable properties
WHERE 
OpenIDConnectProviderArn = '{{ OpenIDConnectProviderArn }}' --required
AND ClientID = '{{ ClientID }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_open_id_connect_provider_thumbprint">

Replaces the existing list of server certificate thumbprints associated with an OpenID Connect (OIDC) provider resource object with a new list of thumbprints. The list that you pass with this operation completely replaces the existing list of thumbprints. (The lists are not merged.) Typically, you need to update a thumbprint only when the identity provider certificate changes, which occurs rarely. However, if the provider's certificate does change, any attempt to assume an IAM role that specifies the OIDC provider as a principal fails until the certificate thumbprint is updated. Amazon Web Services secures communication with OIDC identity providers (IdPs) using our library of trusted root certificate authorities (CAs) to verify the JSON Web Key Set (JWKS) endpoint's TLS certificate. If your OIDC IdP relies on a certificate that is not signed by one of these trusted CAs, only then we secure communication using the thumbprints set in the IdP's configuration. Trust for the OIDC provider is derived from the provider certificate and is validated by the thumbprint. Therefore, it is best to limit access to the UpdateOpenIDConnectProviderThumbprint operation to highly privileged users.

```sql
UPDATE aws.iam.open_id_connect_providers
SET 
-- No updatable properties
WHERE 
OpenIDConnectProviderArn = '{{ OpenIDConnectProviderArn }}' --required
AND ThumbprintList = '{{ ThumbprintList }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_open_id_connect_provider"
    values={[
        { label: 'delete_open_id_connect_provider', value: 'delete_open_id_connect_provider' }
    ]}
>
<TabItem value="delete_open_id_connect_provider">

Deletes an OpenID Connect identity provider (IdP) resource object in IAM. Deleting an IAM OIDC provider resource does not update any roles that reference the provider as a principal in their trust policies. Any attempt to assume a role that references a deleted provider fails. This operation is idempotent; it does not fail or return an error if you call the operation for a provider that does not exist.

```sql
DELETE FROM aws.iam.open_id_connect_providers
WHERE OpenIDConnectProviderArn = '{{ OpenIDConnectProviderArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="remove_client_id_from_open_id_connect_provider"
    values={[
        { label: 'remove_client_id_from_open_id_connect_provider', value: 'remove_client_id_from_open_id_connect_provider' }
    ]}
>
<TabItem value="remove_client_id_from_open_id_connect_provider">

Removes the specified client ID (also known as audience) from the list of client IDs registered for the specified IAM OpenID Connect (OIDC) provider resource object. This operation is idempotent; it does not fail or return an error if you try to remove a client ID that does not exist.

```sql
EXEC aws.iam.open_id_connect_providers.remove_client_id_from_open_id_connect_provider 
@OpenIDConnectProviderArn='{{ OpenIDConnectProviderArn }}' --required, 
@ClientID='{{ ClientID }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
