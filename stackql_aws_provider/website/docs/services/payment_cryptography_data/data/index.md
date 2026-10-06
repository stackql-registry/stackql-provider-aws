--- 
title: data
hide_title: false
hide_table_of_contents: false
keywords:
  - data
  - payment_cryptography_data
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

Creates, updates, deletes, gets or lists a <code>data</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography_data.data" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#decrypt_data"><CopyableCode code="decrypt_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-key_identifier"><code>key_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CipherText"><code>CipherText</code></a>, <a href="#parameter-DecryptionAttributes"><code>DecryptionAttributes</code></a></td>
    <td></td>
    <td>Decrypts ciphertext data to plaintext using a symmetric (TDES, AES), asymmetric (RSA), or derived (DUKPT or EMV) encryption key scheme. For more information, see Decrypt data in the Amazon Web Services Payment Cryptography User Guide. You can use an decryption key generated within Amazon Web Services Payment Cryptography, or you can import your own decryption key by calling ImportKey. For this operation, the key must have KeyModesOfUse set to Decrypt. In asymmetric decryption, Amazon Web Services Payment Cryptography decrypts the ciphertext using the private component of the asymmetric encryption key pair. For data encryption outside of Amazon Web Services Payment Cryptography, you can export the public component of the asymmetric key pair by calling GetPublicCertificate. This operation also supports dynamic keys, allowing you to pass a dynamic decryption key as a TR-31 WrappedKeyBlock. This can be used when key material is frequently rotated, such as during every card transaction, and there is need to avoid importing short-lived keys into Amazon Web Services Payment Cryptography. To decrypt using dynamic keys, the keyARN is the Key Encryption Key (KEK) of the TR-31 wrapped decryption key material. The incoming wrapped key shall have a key purpose of D0 with a mode of use of B or D. For more information, see Using Dynamic Keys in the Amazon Web Services Payment Cryptography User Guide. For symmetric and DUKPT decryption, Amazon Web Services Payment Cryptography supports TDES and AES algorithms. For EMV decryption, Amazon Web Services Payment Cryptography supports TDES algorithms. For asymmetric decryption, Amazon Web Services Payment Cryptography supports RSA. When you use TDES or TDES DUKPT, the ciphertext data length must be a multiple of 8 bytes. For AES or AES DUKPT, the ciphertext data length must be a multiple of 16 bytes. For RSA, it sould be equal to the key size unless padding is enabled. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: EncryptData GetPublicCertificate ImportKey</td>
</tr>
<tr>
    <td><a href="#encrypt_data"><CopyableCode code="encrypt_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-key_identifier"><code>key_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PlainText"><code>PlainText</code></a>, <a href="#parameter-EncryptionAttributes"><code>EncryptionAttributes</code></a></td>
    <td></td>
    <td>Encrypts plaintext data to ciphertext using a symmetric (TDES, AES), asymmetric (RSA), or derived (DUKPT or EMV) encryption key scheme. For more information, see Encrypt data in the Amazon Web Services Payment Cryptography User Guide. You can generate an encryption key within Amazon Web Services Payment Cryptography by calling CreateKey. You can import your own encryption key by calling ImportKey. For this operation, the key must have KeyModesOfUse set to Encrypt. In asymmetric encryption, plaintext is encrypted using public component. You can import the public component of an asymmetric key pair created outside Amazon Web Services Payment Cryptography by calling ImportKey. This operation also supports dynamic keys, allowing you to pass a dynamic encryption key as a TR-31 WrappedKeyBlock. This can be used when key material is frequently rotated, such as during every card transaction, and there is need to avoid importing short-lived keys into Amazon Web Services Payment Cryptography. To encrypt using dynamic keys, the keyARN is the Key Encryption Key (KEK) of the TR-31 wrapped encryption key material. The incoming wrapped key shall have a key purpose of D0 with a mode of use of B or D. For more information, see Using Dynamic Keys in the Amazon Web Services Payment Cryptography User Guide. For symmetric and DUKPT encryption, Amazon Web Services Payment Cryptography supports TDES and AES algorithms. For EMV encryption, Amazon Web Services Payment Cryptography supports TDES algorithms.For asymmetric encryption, Amazon Web Services Payment Cryptography supports RSA. When you use TDES or TDES DUKPT, the plaintext data length must be a multiple of 8 bytes. For AES or AES DUKPT, the plaintext data length must be a multiple of 16 bytes. For RSA, it sould be equal to the key size unless padding is enabled. To encrypt using DUKPT, you must already have a BDK (Base Derivation Key) key in your account with KeyModesOfUse set to DeriveKey, or you can generate a new DUKPT key by calling CreateKey. To encrypt using EMV, you must already have an IMK (Issuer Master Key) key in your account with KeyModesOfUse set to DeriveKey. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: DecryptData GetPublicCertificate ImportKey ReEncryptData</td>
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
<tr id="parameter-key_identifier">
    <td><CopyableCode code="key_identifier" /></td>
    <td><code>string</code></td>
    <td>The keyARN of the encryption key that Amazon Web Services Payment Cryptography uses for plaintext encryption. When a WrappedKeyBlock is provided, this value will be the identifier to the key wrapping key. Otherwise, it is the key identifier used to perform the operation.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="decrypt_data"
    values={[
        { label: 'decrypt_data', value: 'decrypt_data' },
        { label: 'encrypt_data', value: 'encrypt_data' }
    ]}
>
<TabItem value="decrypt_data">

Decrypts ciphertext data to plaintext using a symmetric (TDES, AES), asymmetric (RSA), or derived (DUKPT or EMV) encryption key scheme. For more information, see Decrypt data in the Amazon Web Services Payment Cryptography User Guide. You can use an decryption key generated within Amazon Web Services Payment Cryptography, or you can import your own decryption key by calling ImportKey. For this operation, the key must have KeyModesOfUse set to Decrypt. In asymmetric decryption, Amazon Web Services Payment Cryptography decrypts the ciphertext using the private component of the asymmetric encryption key pair. For data encryption outside of Amazon Web Services Payment Cryptography, you can export the public component of the asymmetric key pair by calling GetPublicCertificate. This operation also supports dynamic keys, allowing you to pass a dynamic decryption key as a TR-31 WrappedKeyBlock. This can be used when key material is frequently rotated, such as during every card transaction, and there is need to avoid importing short-lived keys into Amazon Web Services Payment Cryptography. To decrypt using dynamic keys, the keyARN is the Key Encryption Key (KEK) of the TR-31 wrapped decryption key material. The incoming wrapped key shall have a key purpose of D0 with a mode of use of B or D. For more information, see Using Dynamic Keys in the Amazon Web Services Payment Cryptography User Guide. For symmetric and DUKPT decryption, Amazon Web Services Payment Cryptography supports TDES and AES algorithms. For EMV decryption, Amazon Web Services Payment Cryptography supports TDES algorithms. For asymmetric decryption, Amazon Web Services Payment Cryptography supports RSA. When you use TDES or TDES DUKPT, the ciphertext data length must be a multiple of 8 bytes. For AES or AES DUKPT, the ciphertext data length must be a multiple of 16 bytes. For RSA, it sould be equal to the key size unless padding is enabled. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: EncryptData GetPublicCertificate ImportKey

```sql
EXEC aws.payment_cryptography_data.data.decrypt_data 
@key_identifier='{{ key_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"CipherText": "{{ CipherText }}", 
"DecryptionAttributes": "{{ DecryptionAttributes }}", 
"WrappedKey": "{{ WrappedKey }}"
}'
;
```
</TabItem>
<TabItem value="encrypt_data">

Encrypts plaintext data to ciphertext using a symmetric (TDES, AES), asymmetric (RSA), or derived (DUKPT or EMV) encryption key scheme. For more information, see Encrypt data in the Amazon Web Services Payment Cryptography User Guide. You can generate an encryption key within Amazon Web Services Payment Cryptography by calling CreateKey. You can import your own encryption key by calling ImportKey. For this operation, the key must have KeyModesOfUse set to Encrypt. In asymmetric encryption, plaintext is encrypted using public component. You can import the public component of an asymmetric key pair created outside Amazon Web Services Payment Cryptography by calling ImportKey. This operation also supports dynamic keys, allowing you to pass a dynamic encryption key as a TR-31 WrappedKeyBlock. This can be used when key material is frequently rotated, such as during every card transaction, and there is need to avoid importing short-lived keys into Amazon Web Services Payment Cryptography. To encrypt using dynamic keys, the keyARN is the Key Encryption Key (KEK) of the TR-31 wrapped encryption key material. The incoming wrapped key shall have a key purpose of D0 with a mode of use of B or D. For more information, see Using Dynamic Keys in the Amazon Web Services Payment Cryptography User Guide. For symmetric and DUKPT encryption, Amazon Web Services Payment Cryptography supports TDES and AES algorithms. For EMV encryption, Amazon Web Services Payment Cryptography supports TDES algorithms.For asymmetric encryption, Amazon Web Services Payment Cryptography supports RSA. When you use TDES or TDES DUKPT, the plaintext data length must be a multiple of 8 bytes. For AES or AES DUKPT, the plaintext data length must be a multiple of 16 bytes. For RSA, it sould be equal to the key size unless padding is enabled. To encrypt using DUKPT, you must already have a BDK (Base Derivation Key) key in your account with KeyModesOfUse set to DeriveKey, or you can generate a new DUKPT key by calling CreateKey. To encrypt using EMV, you must already have an IMK (Issuer Master Key) key in your account with KeyModesOfUse set to DeriveKey. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: DecryptData GetPublicCertificate ImportKey ReEncryptData

```sql
EXEC aws.payment_cryptography_data.data.encrypt_data 
@key_identifier='{{ key_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"PlainText": "{{ PlainText }}", 
"EncryptionAttributes": "{{ EncryptionAttributes }}", 
"WrappedKey": "{{ WrappedKey }}"
}'
;
```
</TabItem>
</Tabs>
