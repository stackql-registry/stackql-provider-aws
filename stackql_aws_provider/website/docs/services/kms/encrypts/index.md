--- 
title: encrypts
hide_title: false
hide_table_of_contents: false
keywords:
  - encrypts
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

Creates, updates, deletes, gets or lists an <code>encrypts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="encrypts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kms.encrypts" /></td></tr>
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
    <td><a href="#re_encrypt"><CopyableCode code="re_encrypt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DestinationKeyId"><code>DestinationKeyId</code></a></td>
    <td></td>
    <td>Decrypts ciphertext and then reencrypts it entirely within KMS. You can use this operation to change the KMS key under which data is encrypted, such as when you manually rotate a KMS key or change the KMS key that protects a ciphertext. You can also use it to reencrypt ciphertext under the same KMS key, such as to change the encryption context of a ciphertext. The ReEncrypt operation can decrypt ciphertext that was encrypted by using a KMS key in an KMS operation, such as Encrypt or GenerateDataKey. It can also decrypt ciphertext that was encrypted by using the public key of an asymmetric KMS key outside of KMS. However, it cannot decrypt ciphertext produced by other libraries, such as the Amazon Web Services Encryption SDK or Amazon S3 client-side encryption. These libraries return a ciphertext format that is incompatible with KMS. When you use the ReEncrypt operation, you need to provide information for the decrypt operation and the subsequent encrypt operation. If your ciphertext was encrypted under an asymmetric KMS key, you must use the SourceKeyId parameter to identify the KMS key that encrypted the ciphertext. You must also supply the encryption algorithm that was used. This information is required to decrypt the data. If your ciphertext was encrypted under a symmetric encryption KMS key, the SourceKeyId parameter is optional. KMS can get this information from metadata that it adds to the symmetric ciphertext blob. This feature adds durability to your implementation by ensuring that authorized users can decrypt ciphertext decades after it was encrypted, even if they've lost track of the key ID. However, specifying the source KMS key is always recommended as a best practice. When you use the SourceKeyId parameter to specify a KMS key, KMS uses only the KMS key you specify. If the ciphertext was encrypted under a different KMS key, the ReEncrypt operation fails. This practice ensures that you use the KMS key that you intend. To reencrypt the data, you must use the DestinationKeyId parameter to specify the KMS key that re-encrypts the data after it is decrypted. If the destination KMS key is an asymmetric KMS key, you must also provide the encryption algorithm. The algorithm that you choose must be compatible with the KMS key. When you use an asymmetric KMS key to encrypt or reencrypt data, be sure to record the KMS key and encryption algorithm that you choose. You will be required to provide the same KMS key and encryption algorithm when you decrypt the data. If the KMS key and algorithm do not match the values used to encrypt the data, the decrypt operation fails. You are not required to supply the key ID and encryption algorithm when you decrypt with symmetric encryption KMS keys because KMS stores this information in the ciphertext blob. KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. When using grants with SourceArn constraints for ReEncrypt operations, the grants on both the source KMS key (for ReEncryptFrom) and the destination KMS key (for ReEncryptTo) must specify the same SourceArn value. Cross-account use: Yes. The source KMS key and destination KMS key can be in different Amazon Web Services accounts. Either or both KMS keys can be in a different account than the caller. To specify a KMS key in a different account, use the key ARN or alias ARN. A short key ID is also acceptable for the source key when decrypting symmetric ciphertexts, though using a full key ARN is recommended to be more explicit about the intended KMS key. Required permissions: kms:ReEncryptFrom permission on the source KMS key (key policy) kms:ReEncryptTo permission on the destination KMS key (key policy) To permit reencryption from or to a KMS key, include the "kms:ReEncrypt*" permission in your key policy. This permission is automatically included in the key policy when you use the console to create a KMS key. But you must include it manually when you create a KMS key programmatically or when you use the PutKeyPolicy operation to set a key policy. Related operations: Decrypt Encrypt GenerateDataKey GenerateDataKeyPair Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="re_encrypt"
    values={[
        { label: 're_encrypt', value: 're_encrypt' }
    ]}
>
<TabItem value="re_encrypt">

Decrypts ciphertext and then reencrypts it entirely within KMS. You can use this operation to change the KMS key under which data is encrypted, such as when you manually rotate a KMS key or change the KMS key that protects a ciphertext. You can also use it to reencrypt ciphertext under the same KMS key, such as to change the encryption context of a ciphertext. The ReEncrypt operation can decrypt ciphertext that was encrypted by using a KMS key in an KMS operation, such as Encrypt or GenerateDataKey. It can also decrypt ciphertext that was encrypted by using the public key of an asymmetric KMS key outside of KMS. However, it cannot decrypt ciphertext produced by other libraries, such as the Amazon Web Services Encryption SDK or Amazon S3 client-side encryption. These libraries return a ciphertext format that is incompatible with KMS. When you use the ReEncrypt operation, you need to provide information for the decrypt operation and the subsequent encrypt operation. If your ciphertext was encrypted under an asymmetric KMS key, you must use the SourceKeyId parameter to identify the KMS key that encrypted the ciphertext. You must also supply the encryption algorithm that was used. This information is required to decrypt the data. If your ciphertext was encrypted under a symmetric encryption KMS key, the SourceKeyId parameter is optional. KMS can get this information from metadata that it adds to the symmetric ciphertext blob. This feature adds durability to your implementation by ensuring that authorized users can decrypt ciphertext decades after it was encrypted, even if they've lost track of the key ID. However, specifying the source KMS key is always recommended as a best practice. When you use the SourceKeyId parameter to specify a KMS key, KMS uses only the KMS key you specify. If the ciphertext was encrypted under a different KMS key, the ReEncrypt operation fails. This practice ensures that you use the KMS key that you intend. To reencrypt the data, you must use the DestinationKeyId parameter to specify the KMS key that re-encrypts the data after it is decrypted. If the destination KMS key is an asymmetric KMS key, you must also provide the encryption algorithm. The algorithm that you choose must be compatible with the KMS key. When you use an asymmetric KMS key to encrypt or reencrypt data, be sure to record the KMS key and encryption algorithm that you choose. You will be required to provide the same KMS key and encryption algorithm when you decrypt the data. If the KMS key and algorithm do not match the values used to encrypt the data, the decrypt operation fails. You are not required to supply the key ID and encryption algorithm when you decrypt with symmetric encryption KMS keys because KMS stores this information in the ciphertext blob. KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. When using grants with SourceArn constraints for ReEncrypt operations, the grants on both the source KMS key (for ReEncryptFrom) and the destination KMS key (for ReEncryptTo) must specify the same SourceArn value. Cross-account use: Yes. The source KMS key and destination KMS key can be in different Amazon Web Services accounts. Either or both KMS keys can be in a different account than the caller. To specify a KMS key in a different account, use the key ARN or alias ARN. A short key ID is also acceptable for the source key when decrypting symmetric ciphertexts, though using a full key ARN is recommended to be more explicit about the intended KMS key. Required permissions: kms:ReEncryptFrom permission on the source KMS key (key policy) kms:ReEncryptTo permission on the destination KMS key (key policy) To permit reencryption from or to a KMS key, include the "kms:ReEncrypt*" permission in your key policy. This permission is automatically included in the key policy when you use the console to create a KMS key. But you must include it manually when you create a KMS key programmatically or when you use the PutKeyPolicy operation to set a key policy. Related operations: Decrypt Encrypt GenerateDataKey GenerateDataKeyPair Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.encrypts.re_encrypt 
@region='{{ region }}' --required 
@@json=
'{
"CiphertextBlob": "{{ CiphertextBlob }}", 
"SourceEncryptionContext": "{{ SourceEncryptionContext }}", 
"SourceKeyId": "{{ SourceKeyId }}", 
"DestinationKeyId": "{{ DestinationKeyId }}", 
"DestinationEncryptionContext": "{{ DestinationEncryptionContext }}", 
"SourceEncryptionAlgorithm": "{{ SourceEncryptionAlgorithm }}", 
"DestinationEncryptionAlgorithm": "{{ DestinationEncryptionAlgorithm }}", 
"GrantTokens": "{{ GrantTokens }}", 
"DryRun": {{ DryRun }}, 
"DryRunModifiers": "{{ DryRunModifiers }}"
}'
;
```
</TabItem>
</Tabs>
