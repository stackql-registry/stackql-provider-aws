--- 
title: keys
hide_title: false
hide_table_of_contents: false
keywords:
  - keys
  - payment_cryptography
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

Creates, updates, deletes, gets or lists a <code>keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography.keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_key"
    values={[
        { label: 'get_key', value: 'get_key' },
        { label: 'list_keys', value: 'list_keys' }
    ]}
>
<TabItem value="get_key">

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
    <td><CopyableCode code="create_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the key was created.</td>
</tr>
<tr>
    <td><CopyableCode code="delete_pending_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time after which Amazon Web Services Payment Cryptography will delete the key. This value is present only when KeyState is DELETE_PENDING and the key is scheduled for deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="delete_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time after which Amazon Web Services Payment Cryptography will delete the key. This value is present only when when the KeyState is DELETE_COMPLETE and the Amazon Web Services Payment Cryptography key is deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="derive_key_usage" /></td>
    <td><code>string</code></td>
    <td>The cryptographic usage of an ECDH derived key as deﬁned in section A.5.2 of the TR-31 spec. (TR31_B0_BASE_DERIVATION_KEY, TR31_C0_CARD_VERIFICATION_KEY, TR31_D0_SYMMETRIC_DATA_ENCRYPTION_KEY, TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS, TR31_E1_EMV_MKEY_CONFIDENTIALITY, TR31_E2_EMV_MKEY_INTEGRITY, TR31_E4_EMV_MKEY_DYNAMIC_NUMBERS, TR31_E5_EMV_MKEY_CARD_PERSONALIZATION, TR31_E6_EMV_MKEY_OTHER, TR31_K0_KEY_ENCRYPTION_KEY, TR31_K1_KEY_BLOCK_PROTECTION_KEY, TR31_M3_ISO_9797_3_MAC_KEY, TR31_M1_ISO_9797_1_MAC_KEY, TR31_M6_ISO_9797_5_CMAC_KEY, TR31_M7_HMAC_KEY, TR31_P0_PIN_ENCRYPTION_KEY, TR31_P1_PIN_GENERATION_KEY, TR31_V1_IBM3624_PIN_VERIFICATION_KEY, TR31_V2_VISA_PIN_VERIFICATION_KEY)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the key is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="exportable" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the key is exportable. This data is immutable after the key is created.</td>
</tr>
<tr>
    <td><CopyableCode code="key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the key. (pattern: &lt;code&gt;arn:aws:payment-cryptography:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;1,16&#125;-&#91;0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:key/&#91;0-9a-zA-Z&#93;&#123;16,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="key_attributes" /></td>
    <td><code>object</code></td>
    <td>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.</td>
</tr>
<tr>
    <td><CopyableCode code="key_check_value" /></td>
    <td><code>string</code></td>
    <td>The key check value (KCV) is used to check if all parties holding a given key have the same key or to detect that a key has changed. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="key_check_value_algorithm" /></td>
    <td><code>string</code></td>
    <td>The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity. For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result. For HMAC keys, the KCV is computed using the hash selected at key creation on a zero-length message, taking the leftmost 3 bytes. (CMAC, ANSI_X9_24, HMAC, SHA_1)</td>
</tr>
<tr>
    <td><CopyableCode code="key_origin" /></td>
    <td><code>string</code></td>
    <td>The source of the key material. For keys created within Amazon Web Services Payment Cryptography, the value is AWS_PAYMENT_CRYPTOGRAPHY. For keys imported into Amazon Web Services Payment Cryptography, the value is EXTERNAL. (EXTERNAL, AWS_PAYMENT_CRYPTOGRAPHY)</td>
</tr>
<tr>
    <td><CopyableCode code="key_state" /></td>
    <td><code>string</code></td>
    <td>The state of key that is being created or deleted. (CREATE_IN_PROGRESS, CREATE_COMPLETE, DELETE_PENDING, DELETE_COMPLETE)</td>
</tr>
<tr>
    <td><CopyableCode code="mpa_status" /></td>
    <td><code>object</code></td>
    <td>The Multi-Party Approval (MPA) status for the key, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_region_key_type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether this key is a Multi-Region key and its role in the Multi-Region key hierarchy. Multi-Region replication keys allow the same key material to be used across multiple Amazon Web Services Regions. This field specifies whether the key is a Primary Region key (PRK) (which can be replicated to other Amazon Web Services Regions) or a Replica Region key (RRK) (which is a copy of a PRK in another Region). For more information, see Multi-Region key replication. (PRIMARY, REPLICA)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_region" /></td>
    <td><code>string</code></td>
    <td>An Amazon Web Services Region identifier in the standard format (e.g., us-east-1, eu-west-1). Used to specify regions for key replication operations. The region must be a valid Amazon Web Services Region where Amazon Web Services Payment Cryptography is available. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;1,16&#125;-&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="replication_status" /></td>
    <td><code>object</code></td>
    <td>Information about the replication status of the key across different Amazon Web Services Regions. This field provides details about the current state of key replication, including any status messages or operational information. It helps track the progress and health of key replication operations.</td>
</tr>
<tr>
    <td><CopyableCode code="usage_start_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time after which Amazon Web Services Payment Cryptography will start using the key material for cryptographic operations.</td>
</tr>
<tr>
    <td><CopyableCode code="usage_stop_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time after which Amazon Web Services Payment Cryptography will stop using the key material for cryptographic operations.</td>
</tr>
<tr>
    <td><CopyableCode code="using_default_replication_regions" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this key is using the account's default replication regions configuration for Multi-Region key replication. When set to true, the key automatically replicates to the regions specified in the account's default replication settings. When set to false, the key has a custom replication configuration that overrides the account defaults.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_keys">

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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the key is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="exportable" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the key is exportable. This data is immutable after the key is created.</td>
</tr>
<tr>
    <td><CopyableCode code="key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the key. (pattern: &lt;code&gt;arn:aws:payment-cryptography:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;1,16&#125;-&#91;0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:key/&#91;0-9a-zA-Z&#93;&#123;16,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="key_attributes" /></td>
    <td><code>object</code></td>
    <td>The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.</td>
</tr>
<tr>
    <td><CopyableCode code="key_check_value" /></td>
    <td><code>string</code></td>
    <td>The key check value (KCV) is used to check if all parties holding a given key have the same key or to detect that a key has changed. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="key_state" /></td>
    <td><code>string</code></td>
    <td>The state of an Amazon Web Services Payment Cryptography that is being created or deleted. (CREATE_IN_PROGRESS, CREATE_COMPLETE, DELETE_PENDING, DELETE_COMPLETE)</td>
</tr>
<tr>
    <td><CopyableCode code="multi_region_key_type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether this key is a Multi-Region key and its role in the Multi-Region key hierarchy. Multi-Region replication keys allow the same key material to be used across multiple Amazon Web Services Regions. This field specifies whether the key is a Primary Region key (PRK) (which can be replicated to other Amazon Web Services Regions) or a Replica Region key (RRK) (which is a copy of a PRK in another Region). For more information, see Multi-Region key replication. (PRIMARY, REPLICA)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_region" /></td>
    <td><code>string</code></td>
    <td>An Amazon Web Services Region identifier in the standard format (e.g., us-east-1, eu-west-1). Used to specify regions for key replication operations. The region must be a valid Amazon Web Services Region where Amazon Web Services Payment Cryptography is available. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;1,16&#125;-&#91;0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_key"><CopyableCode code="get_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the key metadata for an Amazon Web Services Payment Cryptography key, including the immutable and mutable attributes specified when the key was created. Returns key metadata including attributes, state, and timestamps, but does not return the actual cryptographic key material. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: CreateKey DeleteKey ListKeys</td>
</tr>
<tr>
    <td><a href="#list_keys"><CopyableCode code="list_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the keys in the caller's Amazon Web Services account and Amazon Web Services Region. You can filter the list of keys. This is a paginated operation, which means that each response might contain only a subset of all the keys. When the response contains only a subset of keys, it includes a NextToken value. Use this value in a subsequent ListKeys request to get more keys. When you receive a response with no NextToken (or an empty or null value), that means there are no more keys to get. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: CreateKey DeleteKey GetKey</td>
</tr>
<tr>
    <td><a href="#create_key"><CopyableCode code="create_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyAttributes"><code>KeyAttributes</code></a></td>
    <td></td>
    <td>Creates an Amazon Web Services Payment Cryptography key, a logical representation of a cryptographic key, that is unique in your account and Amazon Web Services Region. You use keys for cryptographic functions such as encryption and decryption. In addition to the key material used in cryptographic operations, an Amazon Web Services Payment Cryptography key includes metadata such as the key ARN, key usage, key origin, creation date, description, and key state. When you create a key, you specify both immutable and mutable data about the key. The immutable data contains key attributes that define the scope and cryptographic operations that you can perform using the key, for example key class (example: SYMMETRIC_KEY), key algorithm (example: TDES_2KEY), key usage (example: TR31_P0_PIN_ENCRYPTION_KEY) and key modes of use (example: Encrypt). Amazon Web Services Payment Cryptography binds key attributes to keys using key blocks when you store or export them. Amazon Web Services Payment Cryptography stores the key contents wrapped and never stores or transmits them in the clear. For information about valid combinations of key attributes, see Understanding key attributes in the Amazon Web Services Payment Cryptography User Guide. The mutable data contained within a key includes usage timestamp and key deletion timestamp and can be modified after creation. You can use the CreateKey operation to generate an ECC (Elliptic Curve Cryptography) key pair used for establishing an ECDH (Elliptic Curve Diffie-Hellman) key agreement between two parties. In the ECDH key agreement process, both parties generate their own ECC key pair with key usage K3 and exchange the public keys. Each party then use their private key, the received public key from the other party, and the key derivation parameters including key derivation function, hash algorithm, derivation data, and key algorithm to derive a shared key. To maintain the single-use principle of cryptographic keys in payments, ECDH derived keys should not be used for multiple purposes, such as a TR31_P0_PIN_ENCRYPTION_KEY and TR31_K1_KEY_BLOCK_PROTECTION_KEY. When creating ECC key pairs in Amazon Web Services Payment Cryptography you can optionally set the DeriveKeyUsage parameter, which defines the key usage bound to the symmetric key that will be derived using the ECC key pair. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: DeleteKey GetKey ListKeys</td>
</tr>
<tr>
    <td><a href="#add_key_replication_regions"><CopyableCode code="add_key_replication_regions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyIdentifier"><code>KeyIdentifier</code></a>, <a href="#parameter-ReplicationRegions"><code>ReplicationRegions</code></a></td>
    <td></td>
    <td>Adds replication Amazon Web Services Regions to an existing Amazon Web Services Payment Cryptography key, enabling the key to be used for cryptographic operations in additional Amazon Web Services Regions. Multi-Region key replication allow you to use the same key material across multiple Amazon Web Services Regions, providing lower latency for applications distributed across regions. When you add Replication Regions, Amazon Web Services Payment Cryptography securely replicates the key material to the specified Amazon Web Services Regions. The key must be in an active state to add Replication Regions. You can add multiple regions in a single operation, and the key will be available for use in those regions once replication is complete. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: RemoveKeyReplicationRegions EnableDefaultKeyReplicationRegions GetDefaultKeyReplicationRegions</td>
</tr>
<tr>
    <td><a href="#delete_key"><CopyableCode code="delete_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the key material and metadata associated with Amazon Web Services Payment Cryptography key. Key deletion is irreversible. After a key is deleted, you can't perform cryptographic operations using the key. For example, you can't decrypt data that was encrypted by a deleted Amazon Web Services Payment Cryptography key, and the data may become unrecoverable. Because key deletion is destructive, Amazon Web Services Payment Cryptography has a safety mechanism to prevent accidental deletion of a key. When you call this operation, Amazon Web Services Payment Cryptography disables the specified key but doesn't delete it until after a waiting period set using DeleteKeyInDays. The default waiting period is 7 days. During the waiting period, the KeyState is DELETE_PENDING. After the key is deleted, the KeyState is DELETE_COMPLETE. You should delete a key only when you are sure that you don't need to use it anymore and no other parties are utilizing this key. If you aren't sure, consider deactivating it instead by calling StopKeyUsage. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: RestoreKey StartKeyUsage StopKeyUsage</td>
</tr>
<tr>
    <td><a href="#remove_key_replication_regions"><CopyableCode code="remove_key_replication_regions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyIdentifier"><code>KeyIdentifier</code></a>, <a href="#parameter-ReplicationRegions"><code>ReplicationRegions</code></a></td>
    <td></td>
    <td>Removes Replication Regions from an existing Amazon Web Services Payment Cryptography key, disabling the key's availability for cryptographic operations in the specified Amazon Web Services Regions. When you remove Replication Regions, the key material is securely deleted from those regions and can no longer be used for cryptographic operations there. This operation is irreversible for the specified Amazon Web Services Regions. For more information, see Multi-Region key replication. Ensure that no active cryptographic operations or applications depend on the key in the regions you're removing before performing this operation. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: AddKeyReplicationRegions DisableDefaultKeyReplicationRegions</td>
</tr>
<tr>
    <td><a href="#start_key_usage"><CopyableCode code="start_key_usage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyIdentifier"><code>KeyIdentifier</code></a></td>
    <td></td>
    <td>Enables an Amazon Web Services Payment Cryptography key, which makes it active for cryptographic operations within Amazon Web Services Payment Cryptography Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: StopKeyUsage</td>
</tr>
<tr>
    <td><a href="#stop_key_usage"><CopyableCode code="stop_key_usage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyIdentifier"><code>KeyIdentifier</code></a></td>
    <td></td>
    <td>Disables an Amazon Web Services Payment Cryptography key, which makes it inactive within Amazon Web Services Payment Cryptography. You can use this operation instead of DeleteKey to deactivate a key. You can enable the key in the future by calling StartKeyUsage. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: DeleteKey StartKeyUsage</td>
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
    defaultValue="get_key"
    values={[
        { label: 'get_key', value: 'get_key' },
        { label: 'list_keys', value: 'list_keys' }
    ]}
>
<TabItem value="get_key">

Gets the key metadata for an Amazon Web Services Payment Cryptography key, including the immutable and mutable attributes specified when the key was created. Returns key metadata including attributes, state, and timestamps, but does not return the actual cryptographic key material. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: CreateKey DeleteKey ListKeys

```sql
SELECT
create_timestamp,
delete_pending_timestamp,
delete_timestamp,
derive_key_usage,
enabled,
exportable,
key_arn,
key_attributes,
key_check_value,
key_check_value_algorithm,
key_origin,
key_state,
mpa_status,
multi_region_key_type,
primary_region,
replication_status,
usage_start_timestamp,
usage_stop_timestamp,
using_default_replication_regions
FROM aws.payment_cryptography.keys
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_keys">

Lists the keys in the caller's Amazon Web Services account and Amazon Web Services Region. You can filter the list of keys. This is a paginated operation, which means that each response might contain only a subset of all the keys. When the response contains only a subset of keys, it includes a NextToken value. Use this value in a subsequent ListKeys request to get more keys. When you receive a response with no NextToken (or an empty or null value), that means there are no more keys to get. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: CreateKey DeleteKey GetKey

```sql
SELECT
enabled,
exportable,
key_arn,
key_attributes,
key_check_value,
key_state,
multi_region_key_type,
primary_region
FROM aws.payment_cryptography.keys
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_key"
    values={[
        { label: 'create_key', value: 'create_key' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_key">

Creates an Amazon Web Services Payment Cryptography key, a logical representation of a cryptographic key, that is unique in your account and Amazon Web Services Region. You use keys for cryptographic functions such as encryption and decryption. In addition to the key material used in cryptographic operations, an Amazon Web Services Payment Cryptography key includes metadata such as the key ARN, key usage, key origin, creation date, description, and key state. When you create a key, you specify both immutable and mutable data about the key. The immutable data contains key attributes that define the scope and cryptographic operations that you can perform using the key, for example key class (example: SYMMETRIC_KEY), key algorithm (example: TDES_2KEY), key usage (example: TR31_P0_PIN_ENCRYPTION_KEY) and key modes of use (example: Encrypt). Amazon Web Services Payment Cryptography binds key attributes to keys using key blocks when you store or export them. Amazon Web Services Payment Cryptography stores the key contents wrapped and never stores or transmits them in the clear. For information about valid combinations of key attributes, see Understanding key attributes in the Amazon Web Services Payment Cryptography User Guide. The mutable data contained within a key includes usage timestamp and key deletion timestamp and can be modified after creation. You can use the CreateKey operation to generate an ECC (Elliptic Curve Cryptography) key pair used for establishing an ECDH (Elliptic Curve Diffie-Hellman) key agreement between two parties. In the ECDH key agreement process, both parties generate their own ECC key pair with key usage K3 and exchange the public keys. Each party then use their private key, the received public key from the other party, and the key derivation parameters including key derivation function, hash algorithm, derivation data, and key algorithm to derive a shared key. To maintain the single-use principle of cryptographic keys in payments, ECDH derived keys should not be used for multiple purposes, such as a TR31_P0_PIN_ENCRYPTION_KEY and TR31_K1_KEY_BLOCK_PROTECTION_KEY. When creating ECC key pairs in Amazon Web Services Payment Cryptography you can optionally set the DeriveKeyUsage parameter, which defines the key usage bound to the symmetric key that will be derived using the ECC key pair. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: DeleteKey GetKey ListKeys

```sql
INSERT INTO aws.payment_cryptography.keys (
KeyAttributes,
KeyCheckValueAlgorithm,
Exportable,
Enabled,
Tags,
DeriveKeyUsage,
ReplicationRegions,
region
)
SELECT 
'{{ KeyAttributes }}' /* required */,
'{{ KeyCheckValueAlgorithm }}',
{{ Exportable }},
{{ Enabled }},
'{{ Tags }}',
'{{ DeriveKeyUsage }}',
'{{ ReplicationRegions }}',
'{{ region }}'
RETURNING
key
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: keys
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the keys resource.
    - name: KeyAttributes
      description: |
        The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.
      value:
        KeyUsage: "{{ KeyUsage }}"
        KeyClass: "{{ KeyClass }}"
        KeyAlgorithm: "{{ KeyAlgorithm }}"
        KeyModesOfUse:
          Encrypt: {{ Encrypt }}
          Decrypt: {{ Decrypt }}
          Wrap: {{ Wrap }}
          Unwrap: {{ Unwrap }}
          Generate: {{ Generate }}
          Sign: {{ Sign }}
          Verify: {{ Verify }}
          DeriveKey: {{ DeriveKey }}
          NoRestrictions: {{ NoRestrictions }}
    - name: KeyCheckValueAlgorithm
      value: "{{ KeyCheckValueAlgorithm }}"
      description: |
        The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity. For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result. For HMAC keys, the KCV is computed using the hash selected at key creation on a zero-length message, taking the leftmost 3 bytes.
      valid_values: ['CMAC', 'ANSI_X9_24', 'HMAC', 'SHA_1']
    - name: Exportable
      value: {{ Exportable }}
      description: |
        Specifies whether the key is exportable from the service.
    - name: Enabled
      value: {{ Enabled }}
      description: |
        Specifies whether to enable the key. If the key is enabled, it is activated for use within the service. If the key is not enabled, then it is created but not activated. The default value is enabled.
    - name: Tags
      description: |
        Assigns one or more tags to the Amazon Web Services Payment Cryptography key. Use this parameter to tag a key when it is created. To tag an existing Amazon Web Services Payment Cryptography key, use the TagResource operation. Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key. Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output. Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: DeriveKeyUsage
      value: "{{ DeriveKeyUsage }}"
      description: |
        The intended cryptographic usage of keys derived from the ECC key pair to be created. After creating an ECC key pair, you cannot change the intended cryptographic usage of keys derived from it using ECDH.
      valid_values: ['TR31_B0_BASE_DERIVATION_KEY', 'TR31_C0_CARD_VERIFICATION_KEY', 'TR31_D0_SYMMETRIC_DATA_ENCRYPTION_KEY', 'TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS', 'TR31_E1_EMV_MKEY_CONFIDENTIALITY', 'TR31_E2_EMV_MKEY_INTEGRITY', 'TR31_E4_EMV_MKEY_DYNAMIC_NUMBERS', 'TR31_E5_EMV_MKEY_CARD_PERSONALIZATION', 'TR31_E6_EMV_MKEY_OTHER', 'TR31_K0_KEY_ENCRYPTION_KEY', 'TR31_K1_KEY_BLOCK_PROTECTION_KEY', 'TR31_M3_ISO_9797_3_MAC_KEY', 'TR31_M1_ISO_9797_1_MAC_KEY', 'TR31_M6_ISO_9797_5_CMAC_KEY', 'TR31_M7_HMAC_KEY', 'TR31_P0_PIN_ENCRYPTION_KEY', 'TR31_P1_PIN_GENERATION_KEY', 'TR31_V1_IBM3624_PIN_VERIFICATION_KEY', 'TR31_V2_VISA_PIN_VERIFICATION_KEY']
    - name: ReplicationRegions
      value:
        - "{{ ReplicationRegions }}"
      description: |
        A list of Amazon Web Services Regions for key replication operations. Each region in the list must be a valid Amazon Web Services Region identifier where Amazon Web Services Payment Cryptography is available. This list is used to specify which regions should be added to or removed from a key's replication configuration.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_key_replication_regions"
    values={[
        { label: 'add_key_replication_regions', value: 'add_key_replication_regions' }
    ]}
>
<TabItem value="add_key_replication_regions">

Adds replication Amazon Web Services Regions to an existing Amazon Web Services Payment Cryptography key, enabling the key to be used for cryptographic operations in additional Amazon Web Services Regions. Multi-Region key replication allow you to use the same key material across multiple Amazon Web Services Regions, providing lower latency for applications distributed across regions. When you add Replication Regions, Amazon Web Services Payment Cryptography securely replicates the key material to the specified Amazon Web Services Regions. The key must be in an active state to add Replication Regions. You can add multiple regions in a single operation, and the key will be available for use in those regions once replication is complete. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: RemoveKeyReplicationRegions EnableDefaultKeyReplicationRegions GetDefaultKeyReplicationRegions

```sql
UPDATE aws.payment_cryptography.keys
SET 
KeyIdentifier = '{{ KeyIdentifier }}',
ReplicationRegions = '{{ ReplicationRegions }}'
WHERE 
region = '{{ region }}' --required
AND KeyIdentifier = '{{ KeyIdentifier }}' --required
AND ReplicationRegions = '{{ ReplicationRegions }}' --required
RETURNING
key;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_key"
    values={[
        { label: 'delete_key', value: 'delete_key' }
    ]}
>
<TabItem value="delete_key">

Deletes the key material and metadata associated with Amazon Web Services Payment Cryptography key. Key deletion is irreversible. After a key is deleted, you can't perform cryptographic operations using the key. For example, you can't decrypt data that was encrypted by a deleted Amazon Web Services Payment Cryptography key, and the data may become unrecoverable. Because key deletion is destructive, Amazon Web Services Payment Cryptography has a safety mechanism to prevent accidental deletion of a key. When you call this operation, Amazon Web Services Payment Cryptography disables the specified key but doesn't delete it until after a waiting period set using DeleteKeyInDays. The default waiting period is 7 days. During the waiting period, the KeyState is DELETE_PENDING. After the key is deleted, the KeyState is DELETE_COMPLETE. You should delete a key only when you are sure that you don't need to use it anymore and no other parties are utilizing this key. If you aren't sure, consider deactivating it instead by calling StopKeyUsage. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: RestoreKey StartKeyUsage StopKeyUsage

```sql
DELETE FROM aws.payment_cryptography.keys
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="remove_key_replication_regions"
    values={[
        { label: 'remove_key_replication_regions', value: 'remove_key_replication_regions' },
        { label: 'start_key_usage', value: 'start_key_usage' },
        { label: 'stop_key_usage', value: 'stop_key_usage' }
    ]}
>
<TabItem value="remove_key_replication_regions">

Removes Replication Regions from an existing Amazon Web Services Payment Cryptography key, disabling the key's availability for cryptographic operations in the specified Amazon Web Services Regions. When you remove Replication Regions, the key material is securely deleted from those regions and can no longer be used for cryptographic operations there. This operation is irreversible for the specified Amazon Web Services Regions. For more information, see Multi-Region key replication. Ensure that no active cryptographic operations or applications depend on the key in the regions you're removing before performing this operation. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: AddKeyReplicationRegions DisableDefaultKeyReplicationRegions

```sql
EXEC aws.payment_cryptography.keys.remove_key_replication_regions 
@region='{{ region }}' --required 
@@json=
'{
"KeyIdentifier": "{{ KeyIdentifier }}", 
"ReplicationRegions": "{{ ReplicationRegions }}"
}'
;
```
</TabItem>
<TabItem value="start_key_usage">

Enables an Amazon Web Services Payment Cryptography key, which makes it active for cryptographic operations within Amazon Web Services Payment Cryptography Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: StopKeyUsage

```sql
EXEC aws.payment_cryptography.keys.start_key_usage 
@region='{{ region }}' --required 
@@json=
'{
"KeyIdentifier": "{{ KeyIdentifier }}"
}'
;
```
</TabItem>
<TabItem value="stop_key_usage">

Disables an Amazon Web Services Payment Cryptography key, which makes it inactive within Amazon Web Services Payment Cryptography. You can use this operation instead of DeleteKey to deactivate a key. You can enable the key in the future by calling StartKeyUsage. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: DeleteKey StartKeyUsage

```sql
EXEC aws.payment_cryptography.keys.stop_key_usage 
@region='{{ region }}' --required 
@@json=
'{
"KeyIdentifier": "{{ KeyIdentifier }}"
}'
;
```
</TabItem>
</Tabs>
