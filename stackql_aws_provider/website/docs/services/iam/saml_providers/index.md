--- 
title: saml_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - saml_providers
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

Creates, updates, deletes, gets or lists a <code>saml_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="saml_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.saml_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_saml_provider"
    values={[
        { label: 'get_saml_provider', value: 'get_saml_provider' },
        { label: 'list_saml_providers', value: 'list_saml_providers' }
    ]}
>
<TabItem value="get_saml_provider">

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
    <td><CopyableCode code="AssertionEncryptionMode" /></td>
    <td><code>string</code></td>
    <td>Specifies the encryption setting for the SAML provider.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string</code></td>
    <td>The date and time when the SAML provider was created.</td>
</tr>
<tr>
    <td><CopyableCode code="PrivateKeyList" /></td>
    <td><code>string</code></td>
    <td>The private key metadata for the SAML provider.</td>
</tr>
<tr>
    <td><CopyableCode code="SAMLMetadataDocument" /></td>
    <td><code>string</code></td>
    <td>The XML metadata document that includes information about an identity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="SAMLProviderUUID" /></td>
    <td><code>string</code></td>
    <td>The unique identifier assigned to the SAML provider.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>A list of tags that are attached to the specified IAM SAML provider. The returned list of tags is sorted by tag key. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidUntil" /></td>
    <td><code>string</code></td>
    <td>The expiration date and time for the SAML provider.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_saml_providers">

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
    <td>The Amazon Resource Name (ARN) of the SAML provider.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string</code></td>
    <td>The date and time when the SAML provider was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidUntil" /></td>
    <td><code>string</code></td>
    <td>The expiration date and time for the SAML provider.</td>
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
    <td><a href="#get_saml_provider"><CopyableCode code="get_saml_provider" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-SAMLProviderArn"><code>SAMLProviderArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider resource object was created or updated. This operation requires Signature Version 4.</td>
</tr>
<tr>
    <td><a href="#list_saml_providers"><CopyableCode code="list_saml_providers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the SAML provider resource objects defined in IAM in the account. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a SAML provider, see GetSAMLProvider. This operation requires Signature Version 4.</td>
</tr>
<tr>
    <td><a href="#create_saml_provider"><CopyableCode code="create_saml_provider" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-SAMLMetadataDocument"><code>SAMLMetadataDocument</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-AssertionEncryptionMode"><code>AssertionEncryptionMode</code></a>, <a href="#parameter-AddPrivateKey"><code>AddPrivateKey</code></a></td>
    <td>Creates an IAM resource that describes an identity provider (IdP) that supports SAML 2.0. The SAML provider resource that you create with this operation can be used as a principal in an IAM role's trust policy. Such a policy can enable federated users who sign in using the SAML IdP to assume the role. You can create an IAM role that supports Web-based single sign-on (SSO) to the Amazon Web Services Management Console or one that supports API access to Amazon Web Services. When you create the SAML provider resource, you upload a SAML metadata document that you get from your IdP. That document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that the IdP sends. You must generate the metadata document using the identity management software that is used as your organization's IdP. This operation requires Signature Version 4. For more information, see Enabling SAML 2.0 federated users to access the Amazon Web Services Management Console and About SAML 2.0-based federation in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#update_saml_provider"><CopyableCode code="update_saml_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-SAMLProviderArn"><code>SAMLProviderArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SAMLMetadataDocument"><code>SAMLMetadataDocument</code></a>, <a href="#parameter-AssertionEncryptionMode"><code>AssertionEncryptionMode</code></a>, <a href="#parameter-AddPrivateKey"><code>AddPrivateKey</code></a>, <a href="#parameter-RemovePrivateKey"><code>RemovePrivateKey</code></a></td>
    <td>Updates the metadata document, SAML encryption settings, and private keys for an existing SAML provider. To rotate private keys, add your new private key and then remove the old key in a separate request.</td>
</tr>
<tr>
    <td><a href="#delete_saml_provider"><CopyableCode code="delete_saml_provider" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-SAMLProviderArn"><code>SAMLProviderArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a SAML provider resource in IAM. Deleting the provider resource from IAM does not update any roles that reference the SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume a role that references a non-existent provider resource ARN fails. This operation requires Signature Version 4.</td>
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
<tr id="parameter-Name">
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the provider to create. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-SAMLMetadataDocument">
    <td><CopyableCode code="SAMLMetadataDocument" /></td>
    <td><code>string</code></td>
    <td>An XML document generated by an identity provider (IdP) that supports SAML 2.0. The document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that are received from the IdP. You must generate the metadata document using the identity management software that is used as your organization's IdP. For more information, see About SAML 2.0-based federation in the IAM User Guide</td>
</tr>
<tr id="parameter-SAMLProviderArn">
    <td><CopyableCode code="SAMLProviderArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the SAML provider to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AddPrivateKey">
    <td><CopyableCode code="AddPrivateKey" /></td>
    <td><code>string</code></td>
    <td>Specifies the new private key from your external identity provider. The private key must be a .pem file that uses AES-GCM or AES-CBC encryption algorithm to decrypt SAML assertions.</td>
</tr>
<tr id="parameter-AssertionEncryptionMode">
    <td><CopyableCode code="AssertionEncryptionMode" /></td>
    <td><code>string</code></td>
    <td>Specifies the encryption setting for the SAML provider.</td>
</tr>
<tr id="parameter-RemovePrivateKey">
    <td><CopyableCode code="RemovePrivateKey" /></td>
    <td><code>string</code></td>
    <td>The Key ID of the private key to remove.</td>
</tr>
<tr id="parameter-SAMLMetadataDocument">
    <td><CopyableCode code="SAMLMetadataDocument" /></td>
    <td><code>string</code></td>
    <td>An XML document generated by an identity provider (IdP) that supports SAML 2.0. The document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that are received from the IdP. You must generate the metadata document using the identity management software that is used as your IdP.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags that you want to attach to the new IAM SAML provider. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_saml_provider"
    values={[
        { label: 'get_saml_provider', value: 'get_saml_provider' },
        { label: 'list_saml_providers', value: 'list_saml_providers' }
    ]}
>
<TabItem value="get_saml_provider">

Returns the SAML provider metadocument that was uploaded when the IAM SAML provider resource object was created or updated. This operation requires Signature Version 4.

```sql
SELECT
AssertionEncryptionMode,
CreateDate,
PrivateKeyList,
SAMLMetadataDocument,
SAMLProviderUUID,
Tags,
ValidUntil
FROM aws.iam.saml_providers
WHERE SAMLProviderArn = '{{ SAMLProviderArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_saml_providers">

Lists the SAML provider resource objects defined in IAM in the account. IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a SAML provider, see GetSAMLProvider. This operation requires Signature Version 4.

```sql
SELECT
Arn,
CreateDate,
ValidUntil
FROM aws.iam.saml_providers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_saml_provider"
    values={[
        { label: 'create_saml_provider', value: 'create_saml_provider' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_saml_provider">

Creates an IAM resource that describes an identity provider (IdP) that supports SAML 2.0. The SAML provider resource that you create with this operation can be used as a principal in an IAM role's trust policy. Such a policy can enable federated users who sign in using the SAML IdP to assume the role. You can create an IAM role that supports Web-based single sign-on (SSO) to the Amazon Web Services Management Console or one that supports API access to Amazon Web Services. When you create the SAML provider resource, you upload a SAML metadata document that you get from your IdP. That document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that the IdP sends. You must generate the metadata document using the identity management software that is used as your organization's IdP. This operation requires Signature Version 4. For more information, see Enabling SAML 2.0 federated users to access the Amazon Web Services Management Console and About SAML 2.0-based federation in the IAM User Guide.

```sql
INSERT INTO aws.iam.saml_providers (
SAMLMetadataDocument,
Name,
region,
Tags,
AssertionEncryptionMode,
AddPrivateKey
)
SELECT 
'{{ SAMLMetadataDocument }}',
'{{ Name }}',
'{{ region }}',
'{{ Tags }}',
'{{ AssertionEncryptionMode }}',
'{{ AddPrivateKey }}'
RETURNING
SAMLProviderArn,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: saml_providers
  props:
    - name: SAMLMetadataDocument
      value: "{{ SAMLMetadataDocument }}"
      description: Required parameter for the saml_providers resource.
    - name: Name
      value: "{{ Name }}"
      description: Required parameter for the saml_providers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the saml_providers resource.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags that you want to attach to the new IAM SAML provider. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
      description: A list of tags that you want to attach to the new IAM SAML provider. Each tag consists of a key name and an associated value. For more information about tagging, see Tagging IAM resources in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
    - name: AssertionEncryptionMode
      value: "{{ AssertionEncryptionMode }}"
      description: Specifies the encryption setting for the SAML provider.
      description: Specifies the encryption setting for the SAML provider.
    - name: AddPrivateKey
      value: "{{ AddPrivateKey }}"
      description: The private key generated from your external identity provider. The private key must be a .pem file that uses AES-GCM or AES-CBC encryption algorithm to decrypt SAML assertions.
      description: The private key generated from your external identity provider. The private key must be a .pem file that uses AES-GCM or AES-CBC encryption algorithm to decrypt SAML assertions.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_saml_provider"
    values={[
        { label: 'update_saml_provider', value: 'update_saml_provider' }
    ]}
>
<TabItem value="update_saml_provider">

Updates the metadata document, SAML encryption settings, and private keys for an existing SAML provider. To rotate private keys, add your new private key and then remove the old key in a separate request.

```sql
UPDATE aws.iam.saml_providers
SET 
-- No updatable properties
WHERE 
SAMLProviderArn = '{{ SAMLProviderArn }}' --required
AND region = '{{ region }}' --required
AND SAMLMetadataDocument = '{{ SAMLMetadataDocument}}'
AND AssertionEncryptionMode = '{{ AssertionEncryptionMode}}'
AND AddPrivateKey = '{{ AddPrivateKey}}'
AND RemovePrivateKey = '{{ RemovePrivateKey}}'
RETURNING
SAMLProviderArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_saml_provider"
    values={[
        { label: 'delete_saml_provider', value: 'delete_saml_provider' }
    ]}
>
<TabItem value="delete_saml_provider">

Deletes a SAML provider resource in IAM. Deleting the provider resource from IAM does not update any roles that reference the SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume a role that references a non-existent provider resource ARN fails. This operation requires Signature Version 4.

```sql
DELETE FROM aws.iam.saml_providers
WHERE SAMLProviderArn = '{{ SAMLProviderArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
