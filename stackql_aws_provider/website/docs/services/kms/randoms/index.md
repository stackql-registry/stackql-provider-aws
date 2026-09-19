--- 
title: randoms
hide_title: false
hide_table_of_contents: false
keywords:
  - randoms
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

Creates, updates, deletes, gets or lists a <code>randoms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="randoms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kms.randoms" /></td></tr>
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
    <td><a href="#generate_random"><CopyableCode code="generate_random" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a random byte string that is cryptographically secure. You must use the NumberOfBytes parameter to specify the length of the random byte string. There is no default value for string length. By default, the random byte string is generated in KMS. To generate the byte string in the CloudHSM cluster associated with an CloudHSM key store, use the CustomKeyStoreId parameter. GenerateRandom also supports Amazon Web Services Nitro Enclaves, which provide an isolated compute environment in Amazon EC2. To call GenerateRandom for a Nitro enclave or NitroTPM, use the Amazon Web Services Nitro Enclaves SDK or any Amazon Web Services SDK. Use the Recipient parameter to provide the attestation document for the attested environment. Instead of plaintext bytes, the response includes the plaintext bytes encrypted under the public key from the attestation document (CiphertextForRecipient). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see Cryptographic attestation support in KMS in the Key Management Service Developer Guide. For more information about entropy and random number generation, see Entropy and random number generation in the Key Management Service Developer Guide. Cross-account use: Not applicable. GenerateRandom does not use any account-specific resources, such as KMS keys. Required permissions: kms:GenerateRandom (IAM policy) Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
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
    defaultValue="generate_random"
    values={[
        { label: 'generate_random', value: 'generate_random' }
    ]}
>
<TabItem value="generate_random">

Returns a random byte string that is cryptographically secure. You must use the NumberOfBytes parameter to specify the length of the random byte string. There is no default value for string length. By default, the random byte string is generated in KMS. To generate the byte string in the CloudHSM cluster associated with an CloudHSM key store, use the CustomKeyStoreId parameter. GenerateRandom also supports Amazon Web Services Nitro Enclaves, which provide an isolated compute environment in Amazon EC2. To call GenerateRandom for a Nitro enclave or NitroTPM, use the Amazon Web Services Nitro Enclaves SDK or any Amazon Web Services SDK. Use the Recipient parameter to provide the attestation document for the attested environment. Instead of plaintext bytes, the response includes the plaintext bytes encrypted under the public key from the attestation document (CiphertextForRecipient). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see Cryptographic attestation support in KMS in the Key Management Service Developer Guide. For more information about entropy and random number generation, see Entropy and random number generation in the Key Management Service Developer Guide. Cross-account use: Not applicable. GenerateRandom does not use any account-specific resources, such as KMS keys. Required permissions: kms:GenerateRandom (IAM policy) Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.randoms.generate_random 
@region='{{ region }}' --required 
@@json=
'{
"NumberOfBytes": {{ NumberOfBytes }}, 
"CustomKeyStoreId": "{{ CustomKeyStoreId }}", 
"Recipient": "{{ Recipient }}"
}'
;
```
</TabItem>
</Tabs>
