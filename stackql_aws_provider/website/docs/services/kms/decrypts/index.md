--- 
title: decrypts
hide_title: false
hide_table_of_contents: false
keywords:
  - decrypts
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

Creates, updates, deletes, gets or lists a <code>decrypts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="decrypts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kms.decrypts" /></td></tr>
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
    <td><a href="#decrypt"><CopyableCode code="decrypt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Decrypts ciphertext that was encrypted by a KMS key using any of the following operations: Encrypt GenerateDataKey GenerateDataKeyPair GenerateDataKeyWithoutPlaintext GenerateDataKeyPairWithoutPlaintext You can use this operation to decrypt ciphertext that was encrypted under a symmetric encryption KMS key or an asymmetric encryption KMS key. When the KMS key is asymmetric, you must specify the KMS key and the encryption algorithm that was used to encrypt the ciphertext. For information about asymmetric KMS keys, see Asymmetric KMS keys in the Key Management Service Developer Guide. The Decrypt operation also decrypts ciphertext that was encrypted outside of KMS by the public key in an KMS asymmetric KMS key. However, it cannot decrypt symmetric ciphertext produced by other libraries, such as the Amazon Web Services Encryption SDK or Amazon S3 client-side encryption. These libraries return a ciphertext format that is incompatible with KMS. If the ciphertext was encrypted under a symmetric encryption KMS key, the KeyId parameter is optional. KMS can get this information from metadata that it adds to the symmetric ciphertext blob. This feature adds durability to your implementation by ensuring that authorized users can decrypt ciphertext decades after it was encrypted, even if they've lost track of the key ID. However, specifying the KMS key is always recommended as a best practice. When you use the KeyId parameter to specify a KMS key, KMS only uses the KMS key you specify. If the ciphertext was encrypted under a different KMS key, the Decrypt operation fails. This practice ensures that you use the KMS key that you intend. Whenever possible, use key policies to give users permission to call the Decrypt operation on a particular KMS key, instead of using IAM policies. Otherwise, you might create an IAM policy that gives the user Decrypt permission on all KMS keys. This user could decrypt ciphertext that was encrypted by KMS keys in other accounts if the key policy for the cross-account KMS key permits it. If you must use an IAM policy for Decrypt permissions, limit the user to particular KMS keys or particular trusted accounts. For details, see Best practices for IAM policies in the Key Management Service Developer Guide. Decrypt also supports Amazon Web Services Nitro Enclaves and NitroTPM, which provide attested environments in Amazon EC2. To call Decrypt for a Nitro enclave or NitroTPM, use the Amazon Web Services Nitro Enclaves SDK or any Amazon Web Services SDK. Use the Recipient parameter to provide the attestation document for the attested environment. Instead of the plaintext data, the response includes the plaintext data encrypted with the public key from the attestation document (CiphertextForRecipient). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see Cryptographic attestation support in KMS in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To specify a KMS key in a different Amazon Web Services account, use the key ARN or alias ARN. A short key ID is also acceptable when decrypting symmetric ciphertexts, though using a full key ARN is recommended to be more explicit about the intended KMS key. Required permissions: kms:Decrypt (key policy) Related operations: Encrypt GenerateDataKey GenerateDataKeyPair ReEncrypt Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
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
    defaultValue="decrypt"
    values={[
        { label: 'decrypt', value: 'decrypt' }
    ]}
>
<TabItem value="decrypt">

Decrypts ciphertext that was encrypted by a KMS key using any of the following operations: Encrypt GenerateDataKey GenerateDataKeyPair GenerateDataKeyWithoutPlaintext GenerateDataKeyPairWithoutPlaintext You can use this operation to decrypt ciphertext that was encrypted under a symmetric encryption KMS key or an asymmetric encryption KMS key. When the KMS key is asymmetric, you must specify the KMS key and the encryption algorithm that was used to encrypt the ciphertext. For information about asymmetric KMS keys, see Asymmetric KMS keys in the Key Management Service Developer Guide. The Decrypt operation also decrypts ciphertext that was encrypted outside of KMS by the public key in an KMS asymmetric KMS key. However, it cannot decrypt symmetric ciphertext produced by other libraries, such as the Amazon Web Services Encryption SDK or Amazon S3 client-side encryption. These libraries return a ciphertext format that is incompatible with KMS. If the ciphertext was encrypted under a symmetric encryption KMS key, the KeyId parameter is optional. KMS can get this information from metadata that it adds to the symmetric ciphertext blob. This feature adds durability to your implementation by ensuring that authorized users can decrypt ciphertext decades after it was encrypted, even if they've lost track of the key ID. However, specifying the KMS key is always recommended as a best practice. When you use the KeyId parameter to specify a KMS key, KMS only uses the KMS key you specify. If the ciphertext was encrypted under a different KMS key, the Decrypt operation fails. This practice ensures that you use the KMS key that you intend. Whenever possible, use key policies to give users permission to call the Decrypt operation on a particular KMS key, instead of using IAM policies. Otherwise, you might create an IAM policy that gives the user Decrypt permission on all KMS keys. This user could decrypt ciphertext that was encrypted by KMS keys in other accounts if the key policy for the cross-account KMS key permits it. If you must use an IAM policy for Decrypt permissions, limit the user to particular KMS keys or particular trusted accounts. For details, see Best practices for IAM policies in the Key Management Service Developer Guide. Decrypt also supports Amazon Web Services Nitro Enclaves and NitroTPM, which provide attested environments in Amazon EC2. To call Decrypt for a Nitro enclave or NitroTPM, use the Amazon Web Services Nitro Enclaves SDK or any Amazon Web Services SDK. Use the Recipient parameter to provide the attestation document for the attested environment. Instead of the plaintext data, the response includes the plaintext data encrypted with the public key from the attestation document (CiphertextForRecipient). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see Cryptographic attestation support in KMS in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To specify a KMS key in a different Amazon Web Services account, use the key ARN or alias ARN. A short key ID is also acceptable when decrypting symmetric ciphertexts, though using a full key ARN is recommended to be more explicit about the intended KMS key. Required permissions: kms:Decrypt (key policy) Related operations: Encrypt GenerateDataKey GenerateDataKeyPair ReEncrypt Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.decrypts.decrypt 
@region='{{ region }}' --required 
@@json=
'{
"CiphertextBlob": "{{ CiphertextBlob }}", 
"EncryptionContext": "{{ EncryptionContext }}", 
"GrantTokens": "{{ GrantTokens }}", 
"KeyId": "{{ KeyId }}", 
"EncryptionAlgorithm": "{{ EncryptionAlgorithm }}", 
"Recipient": "{{ Recipient }}", 
"DryRun": {{ DryRun }}, 
"DryRunModifiers": "{{ DryRunModifiers }}"
}'
;
```
</TabItem>
</Tabs>
