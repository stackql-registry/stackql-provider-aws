--- 
title: public_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - public_keys
  - kms
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

Creates, updates, deletes, gets or lists a <code>public_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="public_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kms.public_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_public_key"
    values={[
        { label: 'get_public_key', value: 'get_public_key' }
    ]}
>
<TabItem value="get_public_key">

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
    <td><CopyableCode code="CustomerMasterKeySpec" /></td>
    <td><code>string</code></td>
    <td>Instead, use the KeySpec field in the GetPublicKey response. The KeySpec and CustomerMasterKeySpec fields have the same value. We recommend that you use the KeySpec field in your code. However, to avoid breaking changes, KMS supports both fields. (RSA_2048, RSA_3072, RSA_4096, ECC_NIST_P256, ECC_NIST_P384, ECC_NIST_P521, ECC_SECG_P256K1, SYMMETRIC_DEFAULT, HMAC_224, HMAC_256, HMAC_384, HMAC_512, SM2)</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionAlgorithms" /></td>
    <td><code>array</code></td>
    <td>The encryption algorithms that KMS supports for this key. This information is critical. If a public key encrypts data outside of KMS by using an unsupported encryption algorithm, the ciphertext cannot be decrypted. This field appears in the response only when the KeyUsage of the public key is ENCRYPT_DECRYPT.</td>
</tr>
<tr>
    <td><CopyableCode code="KeyAgreementAlgorithms" /></td>
    <td><code>array</code></td>
    <td>The key agreement algorithm used to derive a shared secret. This field is present only when the KMS key has a KeyUsage value of KEY_AGREEMENT.</td>
</tr>
<tr>
    <td><CopyableCode code="KeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (key ARN) of the asymmetric KMS key from which the public key was downloaded.</td>
</tr>
<tr>
    <td><CopyableCode code="KeySpec" /></td>
    <td><code>string</code></td>
    <td>The type of the of the public key that was downloaded. (RSA_2048, RSA_3072, RSA_4096, ECC_NIST_P256, ECC_NIST_P384, ECC_NIST_P521, ECC_SECG_P256K1, SYMMETRIC_DEFAULT, HMAC_224, HMAC_256, HMAC_384, HMAC_512, SM2, ML_DSA_44, ML_DSA_65, ML_DSA_87, ECC_NIST_EDWARDS25519)</td>
</tr>
<tr>
    <td><CopyableCode code="KeyUsage" /></td>
    <td><code>string</code></td>
    <td>The permitted use of the public key. Valid values for asymmetric key pairs are ENCRYPT_DECRYPT, SIGN_VERIFY, and KEY_AGREEMENT. This information is critical. For example, if a public key with SIGN_VERIFY key usage encrypts data outside of KMS, the ciphertext cannot be decrypted. (SIGN_VERIFY, ENCRYPT_DECRYPT, GENERATE_VERIFY_MAC, KEY_AGREEMENT)</td>
</tr>
<tr>
    <td><CopyableCode code="PublicKey" /></td>
    <td><code>string (byte)</code></td>
    <td>The exported public key. The value is a DER-encoded X.509 public key, also known as SubjectPublicKeyInfo (SPKI), as defined in RFC 5280. When you use the HTTP API or the Amazon Web Services CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.</td>
</tr>
<tr>
    <td><CopyableCode code="SigningAlgorithms" /></td>
    <td><code>array</code></td>
    <td>The signing algorithms that KMS supports for this key. This field appears in the response only when the KeyUsage of the public key is SIGN_VERIFY.</td>
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
    <td><a href="#get_public_key"><CopyableCode code="get_public_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the public key of an asymmetric KMS key. Unlike the private key of a asymmetric KMS key, which never leaves KMS unencrypted, callers with kms:GetPublicKey permission can download the public key of an asymmetric KMS key. You can share the public key to allow others to encrypt messages and verify signatures outside of KMS. For information about asymmetric KMS keys, see Asymmetric KMS keys in the Key Management Service Developer Guide. You do not need to download the public key. Instead, you can use the public key within KMS by calling the Encrypt, ReEncrypt, or Verify operations with the identifier of an asymmetric KMS key. When you use the public key within KMS, you benefit from the authentication, authorization, and logging that are part of every KMS operation. You also reduce of risk of encrypting data that cannot be decrypted. These features are not effective outside of KMS. To help you use the public key safely outside of KMS, GetPublicKey returns important information about the public key in the response, including: KeySpec: The type of key material in the public key, such as RSA_4096 or ECC_NIST_P521. KeyUsage: Whether the key is used for encryption, signing, or deriving a shared secret. EncryptionAlgorithms, KeyAgreementAlgorithms, or SigningAlgorithms: A list of the encryption algorithms, key agreement algorithms, or signing algorithms for the key. Although KMS cannot enforce these restrictions on external operations, it is crucial that you use this information to prevent the public key from being used improperly. For example, you can prevent a public signing key from being used encrypt data, or prevent a public key from being used with an encryption algorithm that is not supported by KMS. You can also avoid errors, such as using the wrong signing algorithm in a verification operation. To verify a signature outside of KMS with an SM2 public key (China Regions only), you must specify the distinguishing ID. By default, KMS uses 1234567812345678 as the distinguishing ID. For more information, see Offline verification with SM2 key pairs. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:GetPublicKey (key policy) Related operations: CreateKey Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
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
    defaultValue="get_public_key"
    values={[
        { label: 'get_public_key', value: 'get_public_key' }
    ]}
>
<TabItem value="get_public_key">

Returns the public key of an asymmetric KMS key. Unlike the private key of a asymmetric KMS key, which never leaves KMS unencrypted, callers with kms:GetPublicKey permission can download the public key of an asymmetric KMS key. You can share the public key to allow others to encrypt messages and verify signatures outside of KMS. For information about asymmetric KMS keys, see Asymmetric KMS keys in the Key Management Service Developer Guide. You do not need to download the public key. Instead, you can use the public key within KMS by calling the Encrypt, ReEncrypt, or Verify operations with the identifier of an asymmetric KMS key. When you use the public key within KMS, you benefit from the authentication, authorization, and logging that are part of every KMS operation. You also reduce of risk of encrypting data that cannot be decrypted. These features are not effective outside of KMS. To help you use the public key safely outside of KMS, GetPublicKey returns important information about the public key in the response, including: KeySpec: The type of key material in the public key, such as RSA_4096 or ECC_NIST_P521. KeyUsage: Whether the key is used for encryption, signing, or deriving a shared secret. EncryptionAlgorithms, KeyAgreementAlgorithms, or SigningAlgorithms: A list of the encryption algorithms, key agreement algorithms, or signing algorithms for the key. Although KMS cannot enforce these restrictions on external operations, it is crucial that you use this information to prevent the public key from being used improperly. For example, you can prevent a public signing key from being used encrypt data, or prevent a public key from being used with an encryption algorithm that is not supported by KMS. You can also avoid errors, such as using the wrong signing algorithm in a verification operation. To verify a signature outside of KMS with an SM2 public key (China Regions only), you must specify the distinguishing ID. By default, KMS uses 1234567812345678 as the distinguishing ID. For more information, see Offline verification with SM2 key pairs. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:GetPublicKey (key policy) Related operations: CreateKey Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
SELECT
CustomerMasterKeySpec,
EncryptionAlgorithms,
KeyAgreementAlgorithms,
KeyId,
KeySpec,
KeyUsage,
PublicKey,
SigningAlgorithms
FROM aws.kms.public_keys
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
