--- 
title: keys
hide_title: false
hide_table_of_contents: false
keywords:
  - keys
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

Creates, updates, deletes, gets or lists a <code>keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kms.keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_key"
    values={[
        { label: 'describe_key', value: 'describe_key' },
        { label: 'list_keys', value: 'list_keys' }
    ]}
>
<TabItem value="describe_key">

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
    <td><CopyableCode code="AWSAccountId" /></td>
    <td><code>string</code></td>
    <td>The twelve-digit account ID of the Amazon Web Services account that owns the KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key. For examples, see Key Management Service (KMS) in the Example ARNs section of the Amazon Web Services General Reference.</td>
</tr>
<tr>
    <td><CopyableCode code="CloudHsmClusterId" /></td>
    <td><code>string</code></td>
    <td>The cluster ID of the CloudHSM cluster that contains the key material for the KMS key. When you create a KMS key in an CloudHSM custom key store, KMS creates the key material for the KMS key in the associated CloudHSM cluster. This field is present only when the KMS key is created in an CloudHSM key store. (pattern: &lt;code&gt;cluster-&#91;2-7a-zA-Z&#93;&#123;11,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the KMS key was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrentKeyMaterialId" /></td>
    <td><code>string</code></td>
    <td>Identifies the current key material. This value is present for symmetric encryption keys with AWS_KMS or EXTERNAL origin. These KMS keys support automatic or on-demand key rotation and can have multiple key materials associated with them. KMS uses the current key material for both encryption and decryption, and the non-current key material for decryption operations only. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CustomKeyStoreId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the custom key store that contains the KMS key. This field is present only when the KMS key is created in a custom key store.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomerMasterKeySpec" /></td>
    <td><code>string</code></td>
    <td>Instead, use the KeySpec field. The KeySpec and CustomerMasterKeySpec fields have the same value. We recommend that you use the KeySpec field in your code. However, to avoid breaking changes, KMS supports both fields. (RSA_2048, RSA_3072, RSA_4096, ECC_NIST_P256, ECC_NIST_P384, ECC_NIST_P521, ECC_SECG_P256K1, SYMMETRIC_DEFAULT, HMAC_224, HMAC_256, HMAC_384, HMAC_512, SM2)</td>
</tr>
<tr>
    <td><CopyableCode code="DeletionDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time after which KMS deletes this KMS key. This value is present only when the KMS key is scheduled for deletion, that is, when its KeyState is PendingDeletion. When the primary key in a multi-Region key is scheduled for deletion but still has replica keys, its key state is PendingReplicaDeletion and the length of its waiting period is displayed in the PendingDeletionWindowInDays field.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the KMS key is enabled. When KeyState is Enabled this value is true, otherwise it is false.</td>
</tr>
<tr>
    <td><CopyableCode code="EncryptionAlgorithms" /></td>
    <td><code>array</code></td>
    <td>The encryption algorithms that the KMS key supports. You cannot use the KMS key with other encryption algorithms within KMS. This value is present only when the KeyUsage of the KMS key is ENCRYPT_DECRYPT.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpirationModel" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the KMS key's key material expires. This value is present only when Origin is EXTERNAL, otherwise this value is omitted. (KEY_MATERIAL_EXPIRES, KEY_MATERIAL_DOES_NOT_EXPIRE)</td>
</tr>
<tr>
    <td><CopyableCode code="KeyAgreementAlgorithms" /></td>
    <td><code>array</code></td>
    <td>The key agreement algorithm used to derive a shared secret.</td>
</tr>
<tr>
    <td><CopyableCode code="KeyId" /></td>
    <td><code>string</code></td>
    <td>The globally unique identifier for the KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="KeyManager" /></td>
    <td><code>string</code></td>
    <td>The manager of the KMS key. KMS keys in your Amazon Web Services account are either customer managed or Amazon Web Services managed. For more information about the difference, see KMS keys in the Key Management Service Developer Guide. (AWS, CUSTOMER)</td>
</tr>
<tr>
    <td><CopyableCode code="KeySpec" /></td>
    <td><code>string</code></td>
    <td>Describes the type of key material in the KMS key. (RSA_2048, RSA_3072, RSA_4096, ECC_NIST_P256, ECC_NIST_P384, ECC_NIST_P521, ECC_SECG_P256K1, SYMMETRIC_DEFAULT, HMAC_224, HMAC_256, HMAC_384, HMAC_512, SM2, ML_DSA_44, ML_DSA_65, ML_DSA_87, ECC_NIST_EDWARDS25519)</td>
</tr>
<tr>
    <td><CopyableCode code="KeyState" /></td>
    <td><code>string</code></td>
    <td>The current status of the KMS key. For more information about how key state affects the use of a KMS key, see Key states of KMS keys in the Key Management Service Developer Guide. (Creating, Enabled, Disabled, PendingDeletion, PendingImport, PendingReplicaDeletion, Unavailable, Updating)</td>
</tr>
<tr>
    <td><CopyableCode code="KeyUsage" /></td>
    <td><code>string</code></td>
    <td>The cryptographic operations for which you can use the KMS key. (SIGN_VERIFY, ENCRYPT_DECRYPT, GENERATE_VERIFY_MAC, KEY_AGREEMENT)</td>
</tr>
<tr>
    <td><CopyableCode code="MacAlgorithms" /></td>
    <td><code>array</code></td>
    <td>The message authentication code (MAC) algorithm that the HMAC KMS key supports. This value is present only when the KeyUsage of the KMS key is GENERATE_VERIFY_MAC.</td>
</tr>
<tr>
    <td><CopyableCode code="MultiRegion" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the KMS key is a multi-Region (True) or regional (False) key. This value is True for multi-Region primary and replica keys and False for regional KMS keys. For more information about multi-Region keys, see Multi-Region keys in KMS in the Key Management Service Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="MultiRegionConfiguration" /></td>
    <td><code>object</code></td>
    <td>Lists the primary and replica keys in same multi-Region key. This field is present only when the value of the MultiRegion field is True. For more information about any listed KMS key, use the DescribeKey operation. MultiRegionKeyType indicates whether the KMS key is a PRIMARY or REPLICA key. PrimaryKey displays the key ARN and Region of the primary key. This field displays the current KMS key if it is the primary key. ReplicaKeys displays the key ARNs and Regions of all replica keys. This field includes the current KMS key if it is a replica key.</td>
</tr>
<tr>
    <td><CopyableCode code="Origin" /></td>
    <td><code>string</code></td>
    <td>The source of the key material for the KMS key. When this value is AWS_KMS, KMS created the key material. When this value is EXTERNAL, the key material was imported or the KMS key doesn't have any key material. When this value is AWS_CLOUDHSM, the key material was created in the CloudHSM cluster associated with a custom key store. (AWS_KMS, EXTERNAL, AWS_CLOUDHSM, EXTERNAL_KEY_STORE)</td>
</tr>
<tr>
    <td><CopyableCode code="PendingDeletionWindowInDays" /></td>
    <td><code>integer</code></td>
    <td>The waiting period before the primary key in a multi-Region key is deleted. This waiting period begins when the last of its replica keys is deleted. This value is present only when the KeyState of the KMS key is PendingReplicaDeletion. That indicates that the KMS key is the primary key in a multi-Region key, it is scheduled for deletion, and it still has existing replica keys. When a single-Region KMS key or a multi-Region replica key is scheduled for deletion, its deletion date is displayed in the DeletionDate field. However, when the primary key in a multi-Region key is scheduled for deletion, its waiting period doesn't begin until all of its replica keys are deleted. This value displays that waiting period. When the last replica key in the multi-Region key is deleted, the KeyState of the scheduled primary key changes from PendingReplicaDeletion to PendingDeletion and the deletion date appears in the DeletionDate field.</td>
</tr>
<tr>
    <td><CopyableCode code="SigningAlgorithms" /></td>
    <td><code>array</code></td>
    <td>The signing algorithms that the KMS key supports. You cannot use the KMS key with other signing algorithms within KMS. This field appears only when the KeyUsage of the KMS key is SIGN_VERIFY.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidTo" /></td>
    <td><code>string (date-time)</code></td>
    <td>The earliest time at which any imported key material permanently associated with this KMS key expires. When a key material expires, KMS deletes the key material and the KMS key becomes unusable. This value is present only for KMS keys whose Origin is EXTERNAL and the ExpirationModel is KEY_MATERIAL_EXPIRES, otherwise this value is omitted.</td>
</tr>
<tr>
    <td><CopyableCode code="XksKeyConfiguration" /></td>
    <td><code>object</code></td>
    <td>Information about the external key that is associated with a KMS key in an external key store. For more information, see External key in the Key Management Service Developer Guide.</td>
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
    <td><CopyableCode code="KeyArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the key.</td>
</tr>
<tr>
    <td><CopyableCode code="KeyId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the key.</td>
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
    <td><a href="#describe_key"><CopyableCode code="describe_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides detailed information about a KMS key. You can run DescribeKey on a customer managed key or an Amazon Web Services managed key. This detailed information includes the key ARN, creation date (and deletion date, if applicable), the key state, and the origin and expiration date (if any) of the key material. It includes fields, like KeySpec, that help you distinguish different types of KMS keys. It also displays the key usage (encryption, signing, or generating and verifying MACs) and the algorithms that the KMS key supports. For multi-Region keys, DescribeKey displays the primary key and all related replica keys. For KMS keys in CloudHSM key stores, it includes information about the key store, such as the key store ID and the CloudHSM cluster ID. For KMS keys in external key stores, it includes the custom key store ID and the ID of the external key. DescribeKey does not return the following information: Aliases associated with the KMS key. To get this information, use ListAliases. Whether automatic key rotation is enabled on the KMS key. To get this information, use GetKeyRotationStatus. Also, some key states prevent a KMS key from being automatically rotated. For details, see How key rotation works in the Key Management Service Developer Guide. Tags on the KMS key. To get this information, use ListResourceTags. Key policies and grants on the KMS key. To get this information, use GetKeyPolicy and ListGrants. In general, DescribeKey is a non-mutating operation. It returns data about KMS keys, but doesn't change them. However, Amazon Web Services services use DescribeKey to create Amazon Web Services managed keys from a predefined Amazon Web Services alias with no key ID. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:DescribeKey (key policy) Related operations: GetKeyPolicy GetKeyRotationStatus ListAliases ListGrants ListKeys ListResourceTags ListRetirableGrants Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#list_keys"><CopyableCode code="list_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of all KMS keys in the caller's Amazon Web Services account and Region. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:ListKeys (IAM policy) Related operations: CreateKey DescribeKey ListAliases ListResourceTags Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#create_key"><CopyableCode code="create_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a unique customer managed KMS key in your Amazon Web Services account and Region. You can use a KMS key in cryptographic operations, such as encryption and signing. Some Amazon Web Services services let you use KMS keys that you create and manage to protect your service resources. A KMS key is a logical representation of a cryptographic key. In addition to the key material used in cryptographic operations, a KMS key includes metadata, such as the key ID, key policy, creation date, description, and key state. Use the parameters of CreateKey to specify the type of KMS key, the source of its key material, its key policy, description, tags, and other properties. KMS has replaced the term customer master key (CMK) with Key Management Service key and KMS key. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term. To create different types of KMS keys, use the following guidance: Symmetric encryption KMS key By default, CreateKey creates a symmetric encryption KMS key with key material that KMS generates. This is the basic and most widely used type of KMS key, and provides the best performance. To create a symmetric encryption KMS key, you don't need to specify any parameters. The default value for KeySpec, SYMMETRIC_DEFAULT, the default value for KeyUsage, ENCRYPT_DECRYPT, and the default value for Origin, AWS_KMS, create a symmetric encryption KMS key with KMS key material. If you need a key for basic encryption and decryption or you are creating a KMS key to protect your resources in an Amazon Web Services service, create a symmetric encryption KMS key. The key material in a symmetric encryption key never leaves KMS unencrypted. You can use a symmetric encryption KMS key to encrypt and decrypt data up to 4,096 bytes, but they are typically used to generate data keys and data keys pairs. For details, see GenerateDataKey and GenerateDataKeyPair. Asymmetric KMS keys To create an asymmetric KMS key, use the KeySpec parameter to specify the type of key material in the KMS key. Then, use the KeyUsage parameter to determine whether the KMS key will be used to encrypt and decrypt or sign and verify. You can't change these properties after the KMS key is created. Asymmetric KMS keys contain an RSA key pair, Elliptic Curve (ECC) key pair, ML-DSA key pair or an SM2 key pair (China Regions only). The private key in an asymmetric KMS key never leaves KMS unencrypted. However, you can use the GetPublicKey operation to download the public key so it can be used outside of KMS. Each KMS key can have only one key usage. KMS keys with RSA key pairs can be used to encrypt and decrypt data or sign and verify messages (but not both). KMS keys with NIST-standard ECC key pairs can be used to sign and verify messages or derive shared secrets (but not both). KMS keys with ECC_SECG_P256K1 can be used only to sign and verify messages. KMS keys with ML-DSA key pairs can be used to sign and verify messages. KMS keys with SM2 key pairs (China Regions only) can be used to either encrypt and decrypt data, sign and verify messages, or derive shared secrets (you must choose one key usage type). For information about asymmetric KMS keys, see Asymmetric KMS keys in the Key Management Service Developer Guide. HMAC KMS key To create an HMAC KMS key, set the KeySpec parameter to a key spec value for HMAC KMS keys. Then set the KeyUsage parameter to GENERATE_VERIFY_MAC. You must set the key usage even though GENERATE_VERIFY_MAC is the only valid key usage value for HMAC KMS keys. You can't change these properties after the KMS key is created. HMAC KMS keys are symmetric keys that never leave KMS unencrypted. You can use HMAC keys to generate (GenerateMac) and verify (VerifyMac) HMAC codes for messages up to 4096 bytes. Multi-Region primary keys To create a multi-Region primary key in the local Amazon Web Services Region, use the MultiRegion parameter with a value of True. To create a multi-Region replica key, that is, a KMS key with the same key ID and key material as a primary key, but in a different Amazon Web Services Region, use the ReplicateKey operation. To change a replica key to a primary key, and its primary key to a replica key, use the UpdatePrimaryRegion operation. You can create multi-Region KMS keys for all supported KMS key types: symmetric encryption KMS keys, HMAC KMS keys, asymmetric encryption KMS keys, and asymmetric signing KMS keys. You can also create multi-Region keys with imported key material. However, you can't create multi-Region keys in a custom key store. This operation supports multi-Region keys, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see Multi-Region keys in KMS in the Key Management Service Developer Guide. Imported key material To import your own key material into a KMS key, begin by creating a KMS key with no key material. To do this, use the Origin parameter of CreateKey with a value of EXTERNAL. Next, use GetParametersForImport operation to get a public key and import token. Use the wrapping public key to encrypt your key material. Then, use ImportKeyMaterial with your import token to import the key material. For step-by-step instructions, see Importing Key Material in the Key Management Service Developer Guide . You can import key material into KMS keys of all supported KMS key types: symmetric encryption KMS keys, HMAC KMS keys, asymmetric encryption KMS keys, and asymmetric signing KMS keys. You can also create multi-Region keys with imported key material. However, you can't import key material into a KMS key in a custom key store. To create a multi-Region primary key with imported key material, use the Origin parameter of CreateKey with a value of EXTERNAL and the MultiRegion parameter with a value of True. To create replicas of the multi-Region primary key, use the ReplicateKey operation. For instructions, see Importing key material step 1. For more information about multi-Region keys, see Multi-Region keys in KMS in the Key Management Service Developer Guide. Custom key store A custom key store lets you protect your Amazon Web Services resources using keys in a backing key store that you own and manage. When you request a cryptographic operation with a KMS key in a custom key store, the operation is performed in the backing key store using its cryptographic keys. KMS supports CloudHSM key stores backed by an CloudHSM cluster and external key stores backed by an external key manager outside of Amazon Web Services. When you create a KMS key in an CloudHSM key store, KMS generates an encryption key in the CloudHSM cluster and associates it with the KMS key. When you create a KMS key in an external key store, you specify an existing encryption key in the external key manager. Some external key managers provide a simpler method for creating a KMS key in an external key store. For details, see your external key manager documentation. Before you create a KMS key in a custom key store, the ConnectionState of the key store must be CONNECTED. To connect the custom key store, use the ConnectCustomKeyStore operation. To find the ConnectionState, use the DescribeCustomKeyStores operation. To create a KMS key in a custom key store, use the CustomKeyStoreId. Use the default KeySpec value, SYMMETRIC_DEFAULT, and the default KeyUsage value, ENCRYPT_DECRYPT to create a symmetric encryption key. No other key type is supported in a custom key store. To create a KMS key in an CloudHSM key store, use the Origin parameter with a value of AWS_CLOUDHSM. The CloudHSM cluster that is associated with the custom key store must have at least two active HSMs in different Availability Zones in the Amazon Web Services Region. To create a KMS key in an external key store, use the Origin parameter with a value of EXTERNAL_KEY_STORE and an XksKeyId parameter that identifies an existing external key. Some external key managers provide a simpler method for creating a KMS key in an external key store. For details, see your external key manager documentation. Cross-account use: No. You cannot use this operation to create a KMS key in a different Amazon Web Services account. Required permissions: kms:CreateKey (IAM policy). To use the Tags parameter, kms:TagResource (IAM policy). For examples and information about related permissions, see Allow a user to create KMS keys in the Key Management Service Developer Guide. Related operations: DescribeKey ListKeys ScheduleKeyDeletion Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#update_key_description"><CopyableCode code="update_key_description" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a>, <a href="#parameter-Description"><code>Description</code></a></td>
    <td></td>
    <td>Updates the description of a KMS key. To see the description of a KMS key, use DescribeKey. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:UpdateKeyDescription (key policy) Related operations CreateKey DescribeKey Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#update_primary_region"><CopyableCode code="update_primary_region" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a>, <a href="#parameter-PrimaryRegion"><code>PrimaryRegion</code></a></td>
    <td></td>
    <td>Changes the primary key of a multi-Region key. This operation changes the replica key in the specified Region to a primary key and changes the former primary key to a replica key. For example, suppose you have a primary key in us-east-1 and a replica key in eu-west-2. If you run UpdatePrimaryRegion with a PrimaryRegion value of eu-west-2, the primary key is now the key in eu-west-2, and the key in us-east-1 becomes a replica key. For details, see Change the primary key in a set of multi-Region keys in the Key Management Service Developer Guide. This operation supports multi-Region keys, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see Multi-Region keys in KMS in the Key Management Service Developer Guide. The primary key of a multi-Region key is the source for properties that are always shared by primary and replica keys, including the key material, key ID, key spec, key usage, key material origin, and automatic key rotation. It's the only key that can be replicated. You cannot delete the primary key until all replica keys are deleted. The key ID and primary Region that you specify uniquely identify the replica key that will become the primary key. The primary Region must already have a replica key. This operation does not create a KMS key in the specified Region. To find the replica keys, use the DescribeKey operation on the primary key or any replica key. To create a replica key, use the ReplicateKey operation. You can run this operation while using the affected multi-Region keys in cryptographic operations. This operation should not delay, interrupt, or cause failures in cryptographic operations. Even after this operation completes, the process of updating the primary Region might still be in progress for a few more seconds. Operations such as DescribeKey might display both the old and new primary keys as replicas. The old and new primary keys have a transient key state of Updating. The original key state is restored when the update is complete. While the key state is Updating, you can use the keys in cryptographic operations, but you cannot replicate the new primary key or perform certain management operations, such as enabling or disabling these keys. For details about the Updating key state, see Key states of KMS keys in the Key Management Service Developer Guide. This operation does not return any output. To verify that primary key is changed, use the DescribeKey operation. Cross-account use: No. You cannot use this operation in a different Amazon Web Services account. Required permissions: kms:UpdatePrimaryRegion on the current primary key (in the primary key's Region). Include this permission primary key's key policy. kms:UpdatePrimaryRegion on the current replica key (in the replica key's Region). Include this permission in the replica key's key policy. Related operations CreateKey ReplicateKey Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#delete_imported_key_material"><CopyableCode code="delete_imported_key_material" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes key material that was previously imported. This operation makes the specified KMS key temporarily unusable. To restore the usability of the KMS key, reimport the same key material. For more information about importing key material into KMS, see Importing Key Material in the Key Management Service Developer Guide. When the specified KMS key is in the PendingDeletion state, this operation does not change the KMS key's state. Otherwise, it changes the KMS key's state to PendingImport. Considerations for multi-Region symmetric encryption keys When you delete the key material of a primary Region key that is in PENDING_ROTATION or PENDING_MULTI_REGION_IMPORT_AND_ROTATIONstate, you'll also be deleting the key materials for the replica Region keys. If you delete any key material of a replica Region key, the primary Region key and other replica Region keys remain unchanged. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:DeleteImportedKeyMaterial (key policy) Related operations: GetParametersForImport ListKeyRotations ImportKeyMaterial Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#cancel_key_deletion"><CopyableCode code="cancel_key_deletion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a></td>
    <td></td>
    <td>Cancels the deletion of a KMS key. When this operation succeeds, the key state of the KMS key is Disabled. To enable the KMS key, use EnableKey. For more information about scheduling and canceling deletion of a KMS key, see Deleting KMS keys in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:CancelKeyDeletion (key policy) Related operations: ScheduleKeyDeletion Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#derive_shared_secret"><CopyableCode code="derive_shared_secret" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a>, <a href="#parameter-KeyAgreementAlgorithm"><code>KeyAgreementAlgorithm</code></a>, <a href="#parameter-PublicKey"><code>PublicKey</code></a></td>
    <td></td>
    <td>Derives a shared secret using a key agreement algorithm. You must use an asymmetric NIST-standard elliptic curve (ECC) or SM2 (China Regions only) KMS key pair with a KeyUsage value of KEY_AGREEMENT to call DeriveSharedSecret. DeriveSharedSecret uses the Elliptic Curve Cryptography Cofactor Diffie-Hellman Primitive (ECDH) to establish a key agreement between two peers by deriving a shared secret from their elliptic curve public-private key pairs. You can use the raw shared secret that DeriveSharedSecret returns to derive a symmetric key that can encrypt and decrypt data that is sent between the two peers, or that can generate and verify HMACs. KMS recommends that you follow NIST recommendations for key derivation when using the raw shared secret to derive a symmetric key. The following workflow demonstrates how to establish key agreement over an insecure communication channel using DeriveSharedSecret. Alice calls CreateKey to create an asymmetric KMS key pair with a KeyUsage value of KEY_AGREEMENT. The asymmetric KMS key must use a NIST-standard elliptic curve (ECC) or SM2 (China Regions only) key spec. Bob creates an elliptic curve key pair. Bob can call CreateKey to create an asymmetric KMS key pair or generate a key pair outside of KMS. Bob's key pair must use the same NIST-standard elliptic curve (ECC) or SM2 (China Regions ony) curve as Alice. Alice and Bob exchange their public keys through an insecure communication channel (like the internet). Use GetPublicKey to download the public key of your asymmetric KMS key pair. KMS strongly recommends verifying that the public key you receive came from the expected party before using it to derive a shared secret. Alice calls DeriveSharedSecret. KMS uses the private key from the KMS key pair generated in Step 1, Bob's public key, and the Elliptic Curve Cryptography Cofactor Diffie-Hellman Primitive to derive the shared secret. The private key in your KMS key pair never leaves KMS unencrypted. DeriveSharedSecret returns the raw shared secret. Bob uses the Elliptic Curve Cryptography Cofactor Diffie-Hellman Primitive to calculate the same raw secret using his private key and Alice's public key. To derive a shared secret you must provide a key agreement algorithm, the private key of the caller's asymmetric NIST-standard elliptic curve or SM2 (China Regions only) KMS key pair, and the public key from your peer's NIST-standard elliptic curve or SM2 (China Regions only) key pair. The public key can be from another asymmetric KMS key pair or from a key pair generated outside of KMS, but both key pairs must be on the same elliptic curve. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:DeriveSharedSecret (key policy) Related operations: CreateKey GetPublicKey DescribeKey Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#disable_key"><CopyableCode code="disable_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a></td>
    <td></td>
    <td>Sets the state of a KMS key to disabled. This change temporarily prevents use of the KMS key for cryptographic operations. The KMS key that you use for this operation must be in a compatible key state. For more information about how key state affects the use of a KMS key, see Key states of KMS keys in the Key Management Service Developer Guide . Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:DisableKey (key policy) Related operations: EnableKey Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#disable_key_rotation"><CopyableCode code="disable_key_rotation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a></td>
    <td></td>
    <td>Disables automatic rotation of the key material of the specified symmetric encryption KMS key. Automatic key rotation is supported only on symmetric encryption KMS keys. You cannot enable automatic rotation of asymmetric KMS keys, HMAC KMS keys, KMS keys with imported key material, or KMS keys in a custom key store. To enable or disable automatic rotation of a set of related multi-Region keys, set the property on the primary key. You can enable (EnableKeyRotation) and disable automatic rotation of the key material in customer managed KMS keys. Key material rotation of Amazon Web Services managed KMS keys is not configurable. KMS always rotates the key material for every year. Rotation of Amazon Web Services owned KMS keys varies. In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three years to every year. For details, see EnableKeyRotation. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:DisableKeyRotation (key policy) Related operations: EnableKeyRotation GetKeyRotationStatus ListKeyRotations RotateKeyOnDemand Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#enable_key"><CopyableCode code="enable_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a></td>
    <td></td>
    <td>Sets the key state of a KMS key to enabled. This allows you to use the KMS key for cryptographic operations. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:EnableKey (key policy) Related operations: DisableKey Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#enable_key_rotation"><CopyableCode code="enable_key_rotation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a></td>
    <td></td>
    <td>Enables automatic rotation of the key material of the specified symmetric encryption KMS key. By default, when you enable automatic rotation of a customer managed KMS key, KMS rotates the key material of the KMS key one year (approximately 365 days) from the enable date and every year thereafter. You can use the optional RotationPeriodInDays parameter to specify a custom rotation period when you enable key rotation, or you can use RotationPeriodInDays to modify the rotation period of a key that you previously enabled automatic key rotation on. You can monitor rotation of the key material for your KMS keys in CloudTrail and Amazon CloudWatch. To disable rotation of the key material in a customer managed KMS key, use the DisableKeyRotation operation. You can use the GetKeyRotationStatus operation to identify any in progress rotations. You can use the ListKeyRotations operation to view the details of completed rotations. Automatic key rotation is supported only on symmetric encryption KMS keys. You cannot enable automatic rotation of asymmetric KMS keys, HMAC KMS keys, KMS keys with imported key material, or KMS keys in a custom key store. To enable or disable automatic rotation of a set of related multi-Region keys, set the property on the primary key. You cannot enable or disable automatic rotation of Amazon Web Services managed KMS keys. KMS always rotates the key material of Amazon Web Services managed keys every year. Rotation of Amazon Web Services owned KMS keys is managed by the Amazon Web Services service that owns the key. In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three years (approximately 1,095 days) to every year (approximately 365 days). New Amazon Web Services managed keys are automatically rotated one year after they are created, and approximately every year thereafter. Existing Amazon Web Services managed keys are automatically rotated one year after their most recent rotation, and every year thereafter. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:EnableKeyRotation (key policy) Related operations: DisableKeyRotation GetKeyRotationStatus ListKeyRotations RotateKeyOnDemand You can perform on-demand (RotateKeyOnDemand) rotation of the key material in customer managed KMS keys, regardless of whether or not automatic key rotation is enabled. Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#encrypt"><CopyableCode code="encrypt" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a></td>
    <td></td>
    <td>Encrypts plaintext of up to 4,096 bytes using a KMS key. You can use a symmetric or asymmetric KMS key with a KeyUsage of ENCRYPT_DECRYPT. You can use this operation to encrypt small amounts of arbitrary data, such as a personal identifier or database password, or other sensitive information. You don't need to use the Encrypt operation to encrypt a data key. The GenerateDataKey and GenerateDataKeyPair operations return a plaintext data key and an encrypted copy of that data key. If you use a symmetric encryption KMS key, you can use an encryption context to add additional security to your encryption operation. If you specify an EncryptionContext when encrypting data, you must specify the same encryption context (a case-sensitive exact match) when decrypting the data. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the Key Management Service Developer Guide. If you specify an asymmetric KMS key, you must also specify the encryption algorithm. The algorithm must be compatible with the KMS key spec. When you use an asymmetric KMS key to encrypt or reencrypt data, be sure to record the KMS key and encryption algorithm that you choose. You will be required to provide the same KMS key and encryption algorithm when you decrypt the data. If the KMS key and algorithm do not match the values used to encrypt the data, the decrypt operation fails. You are not required to supply the key ID and encryption algorithm when you decrypt with symmetric encryption KMS keys because KMS stores this information in the ciphertext blob. KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields. The maximum size of the data that you can encrypt varies with the type of KMS key and the encryption algorithm that you choose. Symmetric encryption KMS keys SYMMETRIC_DEFAULT: 4096 bytes RSA_2048 RSAES_OAEP_SHA_1: 214 bytes RSAES_OAEP_SHA_256: 190 bytes RSA_3072 RSAES_OAEP_SHA_1: 342 bytes RSAES_OAEP_SHA_256: 318 bytes RSA_4096 RSAES_OAEP_SHA_1: 470 bytes RSAES_OAEP_SHA_256: 446 bytes SM2PKE: 1024 bytes (China Regions only) The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:Encrypt (key policy) Related operations: Decrypt GenerateDataKey GenerateDataKeyPair Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#generate_data_key"><CopyableCode code="generate_data_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a></td>
    <td></td>
    <td>Returns a unique symmetric data key for use outside of KMS. This operation returns a plaintext copy of the data key and a copy that is encrypted under a symmetric encryption KMS key that you specify. The bytes in the plaintext key are random; they are not related to the caller or the KMS key. You can use the plaintext key to encrypt your data outside of KMS and store the encrypted data key with the encrypted data. To generate a data key, specify the symmetric encryption KMS key that will be used to encrypt the data key. You cannot use an asymmetric KMS key to encrypt data keys. To get the type of your KMS key, use the DescribeKey operation. You must also specify the length of the data key. Use either the KeySpec or NumberOfBytes parameters (but not both). For 128-bit and 256-bit data keys, use the KeySpec parameter. To generate a 128-bit SM4 data key (China Regions only), specify a KeySpec value of AES_128 or a NumberOfBytes value of 16. The symmetric encryption key used in China Regions to encrypt your data key is an SM4 encryption key. To get only an encrypted copy of the data key, use GenerateDataKeyWithoutPlaintext. To generate an asymmetric data key pair, use the GenerateDataKeyPair or GenerateDataKeyPairWithoutPlaintext operation. To get a cryptographically secure random byte string, use GenerateRandom. You can use an optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the Key Management Service Developer Guide. GenerateDataKey also supports Amazon Web Services Nitro Enclaves, which provide an isolated compute environment in Amazon EC2. To call GenerateDataKey for an Amazon Web Services Nitro enclave or NitroTPM, use the Amazon Web Services Nitro Enclaves SDK or any Amazon Web Services SDK. Use the Recipient parameter to provide the attestation document for the attested environment. GenerateDataKey returns a copy of the data key encrypted under the specified KMS key, as usual. But instead of a plaintext copy of the data key, the response includes a copy of the data key encrypted under the public key from the attestation document (CiphertextForRecipient). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see Cryptographic attestation support in KMS in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. How to use your data key We recommend that you use the following pattern to encrypt data locally in your application. You can write your own code or use a client-side encryption library, such as the Amazon Web Services Encryption SDK, the Amazon DynamoDB Encryption Client, or Amazon S3 client-side encryption to do these tasks for you. To encrypt data outside of KMS: Use the GenerateDataKey operation to get a data key. Use the plaintext data key (in the Plaintext field of the response) to encrypt your data outside of KMS. Then erase the plaintext data key from memory. Store the encrypted data key (in the CiphertextBlob field of the response) with the encrypted data. To decrypt data outside of KMS: Use the Decrypt operation to decrypt the encrypted data key. The operation returns a plaintext copy of the data key. Use the plaintext data key to decrypt data outside of KMS, then erase the plaintext data key from memory. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:GenerateDataKey (key policy) Related operations: Decrypt Encrypt GenerateDataKeyPair GenerateDataKeyPairWithoutPlaintext GenerateDataKeyWithoutPlaintext Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#generate_data_key_pair"><CopyableCode code="generate_data_key_pair" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a>, <a href="#parameter-KeyPairSpec"><code>KeyPairSpec</code></a></td>
    <td></td>
    <td>Returns a unique asymmetric data key pair for use outside of KMS. This operation returns a plaintext public key, a plaintext private key, and a copy of the private key that is encrypted under the symmetric encryption KMS key you specify. You can use the data key pair to perform asymmetric cryptography and implement digital signatures outside of KMS. The bytes in the keys are random; they are not related to the caller or to the KMS key that is used to encrypt the private key. You can use the public key that GenerateDataKeyPair returns to encrypt data or verify a signature outside of KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the Decrypt operation to decrypt the encrypted private key. To generate a data key pair, you must specify a symmetric encryption KMS key to encrypt the private key in a data key pair. You cannot use an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the DescribeKey operation. Use the KeyPairSpec parameter to choose an RSA or Elliptic Curve (ECC) data key pair. In China Regions, you can also choose an SM2 data key pair. KMS recommends that you use ECC key pairs for signing, and use RSA and SM2 key pairs for either encryption or signing, but not both. However, KMS cannot enforce any restrictions on the use of data key pairs outside of KMS. If you are using the data key pair to encrypt data, or for any operation where you don't immediately need a private key, consider using the GenerateDataKeyPairWithoutPlaintext operation. GenerateDataKeyPairWithoutPlaintext returns a plaintext public key and an encrypted private key, but omits the plaintext private key that you need only to decrypt ciphertext or sign a message. Later, when you need to decrypt the data or sign a message, use the Decrypt operation to decrypt the encrypted private key in the data key pair. GenerateDataKeyPair returns a unique data key pair for each request. The bytes in the keys are random; they are not related to the caller or the KMS key that is used to encrypt the private key. The public key is a DER-encoded X.509 SubjectPublicKeyInfo, as specified in RFC 5280. The private key is a DER-encoded PKCS8 PrivateKeyInfo, as specified in RFC 5958. GenerateDataKeyPair also supports Amazon Web Services Nitro Enclaves, which provide an isolated compute environment in Amazon EC2. To call GenerateDataKeyPair for an Amazon Web Services Nitro enclave or NitroTPM, use the Amazon Web Services Nitro Enclaves SDK or any Amazon Web Services SDK. Use the Recipient parameter to provide the attestation document for the attested environment. GenerateDataKeyPair returns the public data key and a copy of the private data key encrypted under the specified KMS key, as usual. But instead of a plaintext copy of the private data key (PrivateKeyPlaintext), the response includes a copy of the private data key encrypted under the public key from the attestation document (CiphertextForRecipient). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see Cryptographic attestation support in KMS in the Key Management Service Developer Guide. You can use an optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:GenerateDataKeyPair (key policy) Related operations: Decrypt Encrypt GenerateDataKey GenerateDataKeyPairWithoutPlaintext GenerateDataKeyWithoutPlaintext Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#generate_data_key_pair_without_plaintext"><CopyableCode code="generate_data_key_pair_without_plaintext" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a>, <a href="#parameter-KeyPairSpec"><code>KeyPairSpec</code></a></td>
    <td></td>
    <td>Returns a unique asymmetric data key pair for use outside of KMS. This operation returns a plaintext public key and a copy of the private key that is encrypted under the symmetric encryption KMS key you specify. Unlike GenerateDataKeyPair, this operation does not return a plaintext private key. The bytes in the keys are random; they are not related to the caller or to the KMS key that is used to encrypt the private key. You can use the public key that GenerateDataKeyPairWithoutPlaintext returns to encrypt data or verify a signature outside of KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the Decrypt operation to decrypt the encrypted private key. To generate a data key pair, you must specify a symmetric encryption KMS key to encrypt the private key in a data key pair. You cannot use an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the DescribeKey operation. Use the KeyPairSpec parameter to choose an RSA or Elliptic Curve (ECC) data key pair. In China Regions, you can also choose an SM2 data key pair. KMS recommends that you use ECC key pairs for signing, and use RSA and SM2 key pairs for either encryption or signing, but not both. However, KMS cannot enforce any restrictions on the use of data key pairs outside of KMS. GenerateDataKeyPairWithoutPlaintext returns a unique data key pair for each request. The bytes in the key are not related to the caller or KMS key that is used to encrypt the private key. The public key is a DER-encoded X.509 SubjectPublicKeyInfo, as specified in RFC 5280. You can use an optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:GenerateDataKeyPairWithoutPlaintext (key policy) Related operations: Decrypt Encrypt GenerateDataKey GenerateDataKeyPair GenerateDataKeyWithoutPlaintext Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#generate_data_key_without_plaintext"><CopyableCode code="generate_data_key_without_plaintext" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a></td>
    <td></td>
    <td>Returns a unique symmetric data key for use outside of KMS. This operation returns a data key that is encrypted under a symmetric encryption KMS key that you specify. The bytes in the key are random; they are not related to the caller or to the KMS key. GenerateDataKeyWithoutPlaintext is identical to the GenerateDataKey operation except that it does not return a plaintext copy of the data key. This operation is useful for systems that need to encrypt data at some point, but not immediately. When you need to encrypt the data, you call the Decrypt operation on the encrypted copy of the key. It's also useful in distributed systems with different levels of trust. For example, you might store encrypted data in containers. One component of your system creates new containers and stores an encrypted data key with each container. Then, a different component puts the data into the containers. That component first decrypts the data key, uses the plaintext data key to encrypt data, puts the encrypted data into the container, and then destroys the plaintext data key. In this system, the component that creates the containers never sees the plaintext data key. To request an asymmetric data key pair, use the GenerateDataKeyPair or GenerateDataKeyPairWithoutPlaintext operations. To generate a data key, you must specify the symmetric encryption KMS key that is used to encrypt the data key. You cannot use an asymmetric KMS key or a key in a custom key store to generate a data key. To get the type of your KMS key, use the DescribeKey operation. You must also specify the length of the data key. Use either the KeySpec or NumberOfBytes parameters (but not both). For 128-bit and 256-bit data keys, use the KeySpec parameter. To generate an SM4 data key (China Regions only), specify a KeySpec value of AES_128 or NumberOfBytes value of 16. The symmetric encryption key used in China Regions to encrypt your data key is an SM4 encryption key. If the operation succeeds, you will find the encrypted copy of the data key in the CiphertextBlob field. You can use an optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:GenerateDataKeyWithoutPlaintext (key policy) Related operations: Decrypt Encrypt GenerateDataKey GenerateDataKeyPair GenerateDataKeyPairWithoutPlaintext Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#generate_mac"><CopyableCode code="generate_mac" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Message"><code>Message</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a>, <a href="#parameter-MacAlgorithm"><code>MacAlgorithm</code></a></td>
    <td></td>
    <td>Generates a hash-based message authentication code (HMAC) for a message using an HMAC KMS key and a MAC algorithm that the key supports. HMAC KMS keys and the HMAC algorithms that KMS uses conform to industry standards defined in RFC 2104. You can use value that GenerateMac returns in the VerifyMac operation to demonstrate that the original message has not changed. Also, because a secret key is used to create the hash, you can verify that the party that generated the hash has the required secret key. You can also use the raw result to implement HMAC-based algorithms such as key derivation functions. This operation is part of KMS support for HMAC KMS keys. For details, see HMAC keys in KMS in the Key Management Service Developer Guide . Best practices recommend that you limit the time during which any signing mechanism, including an HMAC, is effective. This deters an attack where the actor uses a signed message to establish validity repeatedly or long after the message is superseded. HMAC tags do not include a timestamp, but you can include a timestamp in the token or message to help you detect when its time to refresh the HMAC. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:GenerateMac (key policy) Related operations: VerifyMac Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#import_key_material"><CopyableCode code="import_key_material" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a>, <a href="#parameter-ImportToken"><code>ImportToken</code></a>, <a href="#parameter-EncryptedKeyMaterial"><code>EncryptedKeyMaterial</code></a></td>
    <td></td>
    <td>Imports or reimports key material into an existing KMS key that was created without key material. You can also use this operation to set or update the expiration model and expiration date of the imported key material. By default, KMS creates KMS keys with key material that it generates. You can also generate and import your own key material. For more information about importing key material, see Importing key material. For asymmetric and HMAC keys, you cannot change the key material after the initial import. You can import multiple key materials into symmetric encryption keys and rotate the key material on demand using RotateKeyOnDemand. You can import new key materials into multi-Region symmetric encryption keys. To do so, you must import the new key material into the primary Region key. Then you can import the same key materials into the replica Region keys. You cannot directly import new key material into the replica Region keys. To import new key material for a multi-Region symmetric key, you’ll need to complete the following: Call ImportKeyMaterial on the primary Region key with the ImportTypeset to NEW_KEY_MATERIAL. Call ImportKeyMaterial on the replica Region key with the ImportType set to EXISTING_KEY_MATERIAL using the same key material imported to the primary Region key. You must do this for every replica Region key before you can perform the RotateKeyOnDemand operation on the primary Region key. After you import key material, you can reimport the same key material into that KMS key or, if the key supports on-demand rotation, import new key material. You can use the ImportType parameter to indicate whether you are importing new key material or re-importing previously imported key material. You might reimport key material to replace key material that expired or key material that you deleted. You might also reimport key material to change the expiration model or expiration date of the key material. Each time you import key material into KMS, you can determine whether (ExpirationModel) and when (ValidTo) the key material expires. To change the expiration of your key material, you must import it again, either by calling ImportKeyMaterial or using the import features of the KMS console. Before you call ImportKeyMaterial, complete these steps: Create or identify a KMS key with EXTERNAL origin, which indicates that the KMS key is designed for imported key material. To create a new KMS key for imported key material, call the CreateKey operation with an Origin value of EXTERNAL. You can create a symmetric encryption KMS key, HMAC KMS key, asymmetric encryption KMS key, asymmetric key agreement key, or asymmetric signing KMS key. You can also import key material into a multi-Region key of any supported type. However, you can't import key material into a KMS key in a custom key store. Call the GetParametersForImport operation to get a public key and import token set for importing key material. Use the public key in the GetParametersForImport response to encrypt your key material. Then, in an ImportKeyMaterial request, you submit your encrypted key material and import token. When calling this operation, you must specify the following values: The key ID or key ARN of the KMS key to associate with the imported key material. Its Origin must be EXTERNAL and its KeyState must be PendingImport or Enabled. You cannot perform this operation on a KMS key in a custom key store, or on a KMS key in a different Amazon Web Services account. To get the Origin and KeyState of a KMS key, call DescribeKey. The encrypted key material. The import token that GetParametersForImport returned. You must use a public key and token from the same GetParametersForImport response. Whether the key material expires (ExpirationModel) and, if so, when (ValidTo). For help with this choice, see Setting an expiration time in the Key Management Service Developer Guide. If you set an expiration date, KMS deletes the key material from the KMS key on the specified date, making the KMS key unusable. To use the KMS key in cryptographic operations again, you must reimport the same key material. However, you can delete and reimport the key material at any time, including before the key material expires. Each time you reimport, you can eliminate or reset the expiration time. When this operation is successful, the state of the KMS key changes to Enabled, and you can use the KMS key in cryptographic operations. For symmetric encryption keys, you will need to import all of the key materials associated with the KMS key to change its state to Enabled. Use the ListKeyRotations operation to list the ID and import state of each key material associated with a KMS key. If this operation fails, use the exception to help determine the problem. If the error is related to the key material, the import token, or wrapping key, use GetParametersForImport to get a new public key and import token for the KMS key and repeat the import procedure. For help, see Create a KMS key with imported key material in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:ImportKeyMaterial (key policy) Related operations: DeleteImportedKeyMaterial GetParametersForImport ListKeyRotations RotateKeyOnDemand Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#replicate_key"><CopyableCode code="replicate_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a>, <a href="#parameter-ReplicaRegion"><code>ReplicaRegion</code></a></td>
    <td></td>
    <td>Replicates a multi-Region key into the specified Region. This operation creates a multi-Region replica key based on a multi-Region primary key in a different Region of the same Amazon Web Services partition. You can create multiple replicas of a primary key, but each must be in a different Region. To create a multi-Region primary key, use the CreateKey operation. This operation supports multi-Region keys, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see Multi-Region keys in KMS in the Key Management Service Developer Guide. A replica key is a fully-functional KMS key that can be used independently of its primary and peer replica keys. A primary key and its replica keys share properties that make them interoperable. They have the same key ID and key material. They also have the same key spec, key usage, key material origin, and automatic key rotation status. KMS automatically synchronizes these shared properties among related multi-Region keys. All other properties of a replica key can differ, including its key policy, tags, aliases, and key state. KMS pricing and quotas for KMS keys apply to each primary key and replica key. When this operation completes, the new replica key has a transient key state of Creating. This key state changes to Enabled (or PendingImport) after a few seconds when the process of creating the new replica key is complete. While the key state is Creating, you can manage key, but you cannot yet use it in cryptographic operations. If you are creating and using the replica key programmatically, retry on KMSInvalidStateException or call DescribeKey to check its KeyState value before using it. For details about the Creating key state, see Key states of KMS keys in the Key Management Service Developer Guide. You cannot create more than one replica of a primary key in any Region. If the Region already includes a replica of the key you're trying to replicate, ReplicateKey returns an AlreadyExistsException error. If the key state of the existing replica is PendingDeletion, you can cancel the scheduled key deletion (CancelKeyDeletion) or wait for the key to be deleted. The new replica key you create will have the same shared properties as the original replica key. The CloudTrail log of a ReplicateKey operation records a ReplicateKey operation in the primary key's Region and a CreateKey operation in the replica key's Region. If you replicate a multi-Region primary key with imported key material, the replica key is created with no key material. You must import the same key material that you imported into the primary key. To convert a replica key to a primary key, use the UpdatePrimaryRegion operation. ReplicateKey uses different default values for the KeyPolicy and Tags parameters than those used in the KMS console. For details, see the parameter descriptions. Cross-account use: No. You cannot use this operation to create a replica key in a different Amazon Web Services account. Required permissions: kms:ReplicateKey on the primary key (in the primary key's Region). Include this permission in the primary key's key policy. kms:CreateKey in an IAM policy in the replica Region. To use the Tags parameter, kms:TagResource in an IAM policy in the replica Region. Related operations CreateKey UpdatePrimaryRegion Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#rotate_key_on_demand"><CopyableCode code="rotate_key_on_demand" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a></td>
    <td></td>
    <td>Immediately initiates rotation of the key material of the specified symmetric encryption KMS key. You can perform on-demand rotation of the key material in customer managed KMS keys, regardless of whether or not automatic key rotation is enabled. On-demand rotations do not change existing automatic rotation schedules. For example, consider a KMS key that has automatic key rotation enabled with a rotation period of 730 days. If the key is scheduled to automatically rotate on April 14, 2024, and you perform an on-demand rotation on April 10, 2024, the key will automatically rotate, as scheduled, on April 14, 2024 and every 730 days thereafter. You can perform on-demand key rotation a maximum of 25 times per KMS key. You can use the KMS console to view the number of remaining on-demand rotations available for a KMS key. You can use GetKeyRotationStatus to identify any in progress on-demand rotations. You can use ListKeyRotations to identify the date that completed on-demand rotations were performed. You can monitor rotation of the key material for your KMS keys in CloudTrail and Amazon CloudWatch. On-demand key rotation is supported only on symmetric encryption KMS keys. You cannot perform on-demand rotation of asymmetric KMS keys, HMAC KMS keys, or KMS keys in a custom key store. When you initiate on-demand key rotation on a symmetric encryption KMS key with imported key material, you must have already imported new key material and that key material's state should be PENDING_ROTATION. Use the ListKeyRotations operation to check the state of all key materials associated with a KMS key. To perform on-demand rotation of a set of related multi-Region keys, import new key material in the primary Region key, import the same key material in each replica Region key, and invoke the on-demand rotation on the primary Region key. You cannot initiate on-demand rotation of Amazon Web Services managed KMS keys. KMS always rotates the key material of Amazon Web Services managed keys every year. Rotation of Amazon Web Services owned KMS keys is managed by the Amazon Web Services service that owns the key. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:RotateKeyOnDemand (key policy) Related operations: EnableKeyRotation DisableKeyRotation GetKeyRotationStatus ImportKeyMaterial ListKeyRotations Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#schedule_key_deletion"><CopyableCode code="schedule_key_deletion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a></td>
    <td></td>
    <td>Schedules the deletion of a KMS key. By default, KMS applies a waiting period of 30 days, but you can specify a waiting period of 7-30 days. When this operation is successful, the key state of the KMS key changes to PendingDeletion and the key can't be used in any cryptographic operations. It remains in this state for the duration of the waiting period. Before the waiting period ends, you can use CancelKeyDeletion to cancel the deletion of the KMS key. After the waiting period ends, KMS deletes the KMS key, its key material, and all KMS data associated with it, including all aliases that refer to it. Deleting a KMS key is a destructive and potentially dangerous operation. When a KMS key is deleted, all data that was encrypted under the KMS key is unrecoverable. (The only exception is a multi-Region replica key, or an asymmetric or HMAC KMS key with imported key material.) To prevent the use of a KMS key without deleting it, use DisableKey. You can schedule the deletion of a multi-Region primary key and its replica keys at any time. However, KMS will not delete a multi-Region primary key with existing replica keys. If you schedule the deletion of a primary key with replicas, its key state changes to PendingReplicaDeletion and it cannot be replicated or used in cryptographic operations. This status can continue indefinitely. When the last of its replicas keys is deleted (not just scheduled), the key state of the primary key changes to PendingDeletion and its waiting period (PendingWindowInDays) begins. For details, see Deleting multi-Region keys in the Key Management Service Developer Guide. When KMS deletes a KMS key from an CloudHSM key store, it makes a best effort to delete the associated key material from the associated CloudHSM cluster. However, you might need to manually delete the orphaned key material from the cluster and its backups. Deleting a KMS key from an external key store has no effect on the associated external key. However, for both types of custom key stores, deleting a KMS key is destructive and irreversible. You cannot decrypt ciphertext encrypted under the KMS key by using only its associated external key or CloudHSM key. Also, you cannot recreate a KMS key in an external key store by creating a new KMS key with the same key material. For more information about scheduling a KMS key for deletion, see Deleting KMS keys in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:ScheduleKeyDeletion (key policy) Related operations CancelKeyDeletion DisableKey Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#sign"><CopyableCode code="sign" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a>, <a href="#parameter-Message"><code>Message</code></a>, <a href="#parameter-SigningAlgorithm"><code>SigningAlgorithm</code></a></td>
    <td></td>
    <td>Creates a digital signature for a message or message digest by using the private key in an asymmetric signing KMS key. To verify the signature, use the Verify operation, or use the public key in the same asymmetric KMS key outside of KMS. For information about asymmetric KMS keys, see Asymmetric KMS keys in the Key Management Service Developer Guide. Digital signatures are generated and verified by using asymmetric key pair, such as an RSA, ECC, or ML-DSA pair that is represented by an asymmetric KMS key. The key owner (or an authorized user) uses their private key to sign a message. Anyone with the public key can verify that the message was signed with that particular private key and that the message hasn't changed since it was signed. To use the Sign operation, provide the following information: Use the KeyId parameter to identify an asymmetric KMS key with a KeyUsage value of SIGN_VERIFY. To get the KeyUsage value of a KMS key, use the DescribeKey operation. The caller must have kms:Sign permission on the KMS key. Use the Message parameter to specify the message or message digest to sign. You can submit messages of up to 4096 bytes. To sign a larger message, generate a hash digest of the message, and then provide the hash digest in the Message parameter. To indicate whether the message is a full message, a digest, or an ML-DSA EXTERNAL_MU, use the MessageType parameter. Choose a signing algorithm that is compatible with the KMS key. When signing a message, be sure to record the KMS key and the signing algorithm. This information is required to verify the signature. Best practices recommend that you limit the time during which any signature is effective. This deters an attack where the actor uses a signed message to establish validity repeatedly or long after the message is superseded. Signatures do not include a timestamp, but you can include a timestamp in the signed message to help you detect when its time to refresh the signature. To verify the signature that this operation generates, use the Verify operation. Or use the GetPublicKey operation to download the public key and then use the public key to verify the signature outside of KMS. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:Sign (key policy) Related operations: Verify Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#verify"><CopyableCode code="verify" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a>, <a href="#parameter-Message"><code>Message</code></a>, <a href="#parameter-SigningAlgorithm"><code>SigningAlgorithm</code></a></td>
    <td></td>
    <td>Verifies a digital signature that was generated by the Sign operation. Verification confirms that an authorized user signed the message with the specified KMS key and signing algorithm, and the message hasn't changed since it was signed. If the signature is verified, the value of the SignatureValid field in the response is True. If the signature verification fails, the Verify operation fails with an KMSInvalidSignatureException exception. A digital signature is generated by using the private key in an asymmetric KMS key. The signature is verified by using the public key in the same asymmetric KMS key. For information about asymmetric KMS keys, see Asymmetric KMS keys in the Key Management Service Developer Guide. To use the Verify operation, specify the same asymmetric KMS key, message, and signing algorithm that were used to produce the signature. The message type does not need to be the same as the one used for signing, but it must indicate whether the value of the Message parameter should be hashed as part of the verification process. You can also verify the digital signature by using the public key of the KMS key outside of KMS. Use the GetPublicKey operation to download the public key in the asymmetric KMS key and then use the public key to verify the signature outside of KMS. The advantage of using the Verify operation is that it is performed within KMS. As a result, it's easy to call, the operation is performed within the FIPS boundary, it is logged in CloudTrail, and you can use key policy and IAM policy to determine who is authorized to use the KMS key to verify signatures. To verify a signature outside of KMS with an SM2 public key (China Regions only), you must specify the distinguishing ID. By default, KMS uses 1234567812345678 as the distinguishing ID. For more information, see Offline verification with SM2 key pairs. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:Verify (key policy) Related operations: Sign Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
</tr>
<tr>
    <td><a href="#verify_mac"><CopyableCode code="verify_mac" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Message"><code>Message</code></a>, <a href="#parameter-KeyId"><code>KeyId</code></a>, <a href="#parameter-MacAlgorithm"><code>MacAlgorithm</code></a></td>
    <td></td>
    <td>Verifies the hash-based message authentication code (HMAC) for a specified message, HMAC KMS key, and MAC algorithm. To verify the HMAC, VerifyMac computes an HMAC using the message, HMAC KMS key, and MAC algorithm that you specify, and compares the computed HMAC to the HMAC that you specify. If the HMACs are identical, the verification succeeds; otherwise, it fails. Verification indicates that the message hasn't changed since the HMAC was calculated, and the specified key was used to generate and verify the HMAC. HMAC KMS keys and the HMAC algorithms that KMS uses conform to industry standards defined in RFC 2104. This operation is part of KMS support for HMAC KMS keys. For details, see HMAC keys in KMS in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:VerifyMac (key policy) Related operations: GenerateMac Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
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
    defaultValue="describe_key"
    values={[
        { label: 'describe_key', value: 'describe_key' },
        { label: 'list_keys', value: 'list_keys' }
    ]}
>
<TabItem value="describe_key">

Provides detailed information about a KMS key. You can run DescribeKey on a customer managed key or an Amazon Web Services managed key. This detailed information includes the key ARN, creation date (and deletion date, if applicable), the key state, and the origin and expiration date (if any) of the key material. It includes fields, like KeySpec, that help you distinguish different types of KMS keys. It also displays the key usage (encryption, signing, or generating and verifying MACs) and the algorithms that the KMS key supports. For multi-Region keys, DescribeKey displays the primary key and all related replica keys. For KMS keys in CloudHSM key stores, it includes information about the key store, such as the key store ID and the CloudHSM cluster ID. For KMS keys in external key stores, it includes the custom key store ID and the ID of the external key. DescribeKey does not return the following information: Aliases associated with the KMS key. To get this information, use ListAliases. Whether automatic key rotation is enabled on the KMS key. To get this information, use GetKeyRotationStatus. Also, some key states prevent a KMS key from being automatically rotated. For details, see How key rotation works in the Key Management Service Developer Guide. Tags on the KMS key. To get this information, use ListResourceTags. Key policies and grants on the KMS key. To get this information, use GetKeyPolicy and ListGrants. In general, DescribeKey is a non-mutating operation. It returns data about KMS keys, but doesn't change them. However, Amazon Web Services services use DescribeKey to create Amazon Web Services managed keys from a predefined Amazon Web Services alias with no key ID. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:DescribeKey (key policy) Related operations: GetKeyPolicy GetKeyRotationStatus ListAliases ListGrants ListKeys ListResourceTags ListRetirableGrants Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
SELECT
AWSAccountId,
Arn,
CloudHsmClusterId,
CreationDate,
CurrentKeyMaterialId,
CustomKeyStoreId,
CustomerMasterKeySpec,
DeletionDate,
Description,
Enabled,
EncryptionAlgorithms,
ExpirationModel,
KeyAgreementAlgorithms,
KeyId,
KeyManager,
KeySpec,
KeyState,
KeyUsage,
MacAlgorithms,
MultiRegion,
MultiRegionConfiguration,
Origin,
PendingDeletionWindowInDays,
SigningAlgorithms,
ValidTo,
XksKeyConfiguration
FROM aws.kms.keys
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_keys">

Gets a list of all KMS keys in the caller's Amazon Web Services account and Region. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:ListKeys (IAM policy) Related operations: CreateKey DescribeKey ListAliases ListResourceTags Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
SELECT
KeyArn,
KeyId
FROM aws.kms.keys
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

Creates a unique customer managed KMS key in your Amazon Web Services account and Region. You can use a KMS key in cryptographic operations, such as encryption and signing. Some Amazon Web Services services let you use KMS keys that you create and manage to protect your service resources. A KMS key is a logical representation of a cryptographic key. In addition to the key material used in cryptographic operations, a KMS key includes metadata, such as the key ID, key policy, creation date, description, and key state. Use the parameters of CreateKey to specify the type of KMS key, the source of its key material, its key policy, description, tags, and other properties. KMS has replaced the term customer master key (CMK) with Key Management Service key and KMS key. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term. To create different types of KMS keys, use the following guidance: Symmetric encryption KMS key By default, CreateKey creates a symmetric encryption KMS key with key material that KMS generates. This is the basic and most widely used type of KMS key, and provides the best performance. To create a symmetric encryption KMS key, you don't need to specify any parameters. The default value for KeySpec, SYMMETRIC_DEFAULT, the default value for KeyUsage, ENCRYPT_DECRYPT, and the default value for Origin, AWS_KMS, create a symmetric encryption KMS key with KMS key material. If you need a key for basic encryption and decryption or you are creating a KMS key to protect your resources in an Amazon Web Services service, create a symmetric encryption KMS key. The key material in a symmetric encryption key never leaves KMS unencrypted. You can use a symmetric encryption KMS key to encrypt and decrypt data up to 4,096 bytes, but they are typically used to generate data keys and data keys pairs. For details, see GenerateDataKey and GenerateDataKeyPair. Asymmetric KMS keys To create an asymmetric KMS key, use the KeySpec parameter to specify the type of key material in the KMS key. Then, use the KeyUsage parameter to determine whether the KMS key will be used to encrypt and decrypt or sign and verify. You can't change these properties after the KMS key is created. Asymmetric KMS keys contain an RSA key pair, Elliptic Curve (ECC) key pair, ML-DSA key pair or an SM2 key pair (China Regions only). The private key in an asymmetric KMS key never leaves KMS unencrypted. However, you can use the GetPublicKey operation to download the public key so it can be used outside of KMS. Each KMS key can have only one key usage. KMS keys with RSA key pairs can be used to encrypt and decrypt data or sign and verify messages (but not both). KMS keys with NIST-standard ECC key pairs can be used to sign and verify messages or derive shared secrets (but not both). KMS keys with ECC_SECG_P256K1 can be used only to sign and verify messages. KMS keys with ML-DSA key pairs can be used to sign and verify messages. KMS keys with SM2 key pairs (China Regions only) can be used to either encrypt and decrypt data, sign and verify messages, or derive shared secrets (you must choose one key usage type). For information about asymmetric KMS keys, see Asymmetric KMS keys in the Key Management Service Developer Guide. HMAC KMS key To create an HMAC KMS key, set the KeySpec parameter to a key spec value for HMAC KMS keys. Then set the KeyUsage parameter to GENERATE_VERIFY_MAC. You must set the key usage even though GENERATE_VERIFY_MAC is the only valid key usage value for HMAC KMS keys. You can't change these properties after the KMS key is created. HMAC KMS keys are symmetric keys that never leave KMS unencrypted. You can use HMAC keys to generate (GenerateMac) and verify (VerifyMac) HMAC codes for messages up to 4096 bytes. Multi-Region primary keys To create a multi-Region primary key in the local Amazon Web Services Region, use the MultiRegion parameter with a value of True. To create a multi-Region replica key, that is, a KMS key with the same key ID and key material as a primary key, but in a different Amazon Web Services Region, use the ReplicateKey operation. To change a replica key to a primary key, and its primary key to a replica key, use the UpdatePrimaryRegion operation. You can create multi-Region KMS keys for all supported KMS key types: symmetric encryption KMS keys, HMAC KMS keys, asymmetric encryption KMS keys, and asymmetric signing KMS keys. You can also create multi-Region keys with imported key material. However, you can't create multi-Region keys in a custom key store. This operation supports multi-Region keys, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see Multi-Region keys in KMS in the Key Management Service Developer Guide. Imported key material To import your own key material into a KMS key, begin by creating a KMS key with no key material. To do this, use the Origin parameter of CreateKey with a value of EXTERNAL. Next, use GetParametersForImport operation to get a public key and import token. Use the wrapping public key to encrypt your key material. Then, use ImportKeyMaterial with your import token to import the key material. For step-by-step instructions, see Importing Key Material in the Key Management Service Developer Guide . You can import key material into KMS keys of all supported KMS key types: symmetric encryption KMS keys, HMAC KMS keys, asymmetric encryption KMS keys, and asymmetric signing KMS keys. You can also create multi-Region keys with imported key material. However, you can't import key material into a KMS key in a custom key store. To create a multi-Region primary key with imported key material, use the Origin parameter of CreateKey with a value of EXTERNAL and the MultiRegion parameter with a value of True. To create replicas of the multi-Region primary key, use the ReplicateKey operation. For instructions, see Importing key material step 1. For more information about multi-Region keys, see Multi-Region keys in KMS in the Key Management Service Developer Guide. Custom key store A custom key store lets you protect your Amazon Web Services resources using keys in a backing key store that you own and manage. When you request a cryptographic operation with a KMS key in a custom key store, the operation is performed in the backing key store using its cryptographic keys. KMS supports CloudHSM key stores backed by an CloudHSM cluster and external key stores backed by an external key manager outside of Amazon Web Services. When you create a KMS key in an CloudHSM key store, KMS generates an encryption key in the CloudHSM cluster and associates it with the KMS key. When you create a KMS key in an external key store, you specify an existing encryption key in the external key manager. Some external key managers provide a simpler method for creating a KMS key in an external key store. For details, see your external key manager documentation. Before you create a KMS key in a custom key store, the ConnectionState of the key store must be CONNECTED. To connect the custom key store, use the ConnectCustomKeyStore operation. To find the ConnectionState, use the DescribeCustomKeyStores operation. To create a KMS key in a custom key store, use the CustomKeyStoreId. Use the default KeySpec value, SYMMETRIC_DEFAULT, and the default KeyUsage value, ENCRYPT_DECRYPT to create a symmetric encryption key. No other key type is supported in a custom key store. To create a KMS key in an CloudHSM key store, use the Origin parameter with a value of AWS_CLOUDHSM. The CloudHSM cluster that is associated with the custom key store must have at least two active HSMs in different Availability Zones in the Amazon Web Services Region. To create a KMS key in an external key store, use the Origin parameter with a value of EXTERNAL_KEY_STORE and an XksKeyId parameter that identifies an existing external key. Some external key managers provide a simpler method for creating a KMS key in an external key store. For details, see your external key manager documentation. Cross-account use: No. You cannot use this operation to create a KMS key in a different Amazon Web Services account. Required permissions: kms:CreateKey (IAM policy). To use the Tags parameter, kms:TagResource (IAM policy). For examples and information about related permissions, see Allow a user to create KMS keys in the Key Management Service Developer Guide. Related operations: DescribeKey ListKeys ScheduleKeyDeletion Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
INSERT INTO aws.kms.keys (
Policy,
Description,
KeyUsage,
CustomerMasterKeySpec,
KeySpec,
Origin,
CustomKeyStoreId,
BypassPolicyLockoutSafetyCheck,
Tags,
MultiRegion,
XksKeyId,
region
)
SELECT 
'{{ Policy }}',
'{{ Description }}',
'{{ KeyUsage }}',
'{{ CustomerMasterKeySpec }}',
'{{ KeySpec }}',
'{{ Origin }}',
'{{ CustomKeyStoreId }}',
{{ BypassPolicyLockoutSafetyCheck }},
'{{ Tags }}',
{{ MultiRegion }},
'{{ XksKeyId }}',
'{{ region }}'
RETURNING
KeyMetadata
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
    - name: Policy
      value: "{{ Policy }}"
      description: |
        The key policy to attach to the KMS key. If you provide a key policy, it must meet the following criteria: The key policy must allow the calling principal to make a subsequent PutKeyPolicy request on the KMS key. This reduces the risk that the KMS key becomes unmanageable. For more information, see Default key policy in the Key Management Service Developer Guide. (To omit this condition, set BypassPolicyLockoutSafetyCheck to true.) Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to KMS. When you create a new Amazon Web Services principal, you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to KMS. For more information, see Changes that I make are not always immediately visible in the Amazon Web Services Identity and Access Management User Guide. If either of the required Resource or Action elements are missing from a key policy statement, the policy statement has no effect. When a key policy statement is missing one of these elements, the KMS console correctly reports an error, but the CreateKey and PutKeyPolicy API requests succeed, even though the policy statement is ineffective. For more information on required key policy elements, see Elements in a key policy in the Key Management Service Developer Guide. If you do not provide a key policy, KMS attaches a default key policy to the KMS key. For more information, see Default key policy in the Key Management Service Developer Guide. If the key policy exceeds the length constraint, KMS returns a LimitExceededException. For help writing and formatting a JSON policy document, see the IAM JSON Policy Reference in the Identity and Access Management User Guide .
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the KMS key. Use a description that helps you decide whether the KMS key is appropriate for a task. The default value is an empty string (no description). Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output. To set or change the description after the key is created, use UpdateKeyDescription.
    - name: KeyUsage
      value: "{{ KeyUsage }}"
      description: |
        Determines the cryptographic operations for which you can use the KMS key. The default value is ENCRYPT_DECRYPT. This parameter is optional when you are creating a symmetric encryption KMS key; otherwise, it is required. You can't change the KeyUsage value after the KMS key is created. Each KMS key can have only one key usage. This follows key usage best practices according to NIST SP 800-57 Recommendations for Key Management, section 5.2, Key usage. Select only one valid value. For symmetric encryption KMS keys, omit the parameter or specify ENCRYPT_DECRYPT. For HMAC KMS keys (symmetric), specify GENERATE_VERIFY_MAC. For asymmetric KMS keys with RSA key pairs, specify ENCRYPT_DECRYPT or SIGN_VERIFY. For asymmetric KMS keys with NIST-standard elliptic curve key pairs, specify SIGN_VERIFY or KEY_AGREEMENT. For asymmetric KMS keys with ECC_SECG_P256K1 key pairs, specify SIGN_VERIFY. For asymmetric KMS keys with ML-DSA key pairs, specify SIGN_VERIFY. For asymmetric KMS keys with SM2 key pairs (China Regions only), specify ENCRYPT_DECRYPT, SIGN_VERIFY, or KEY_AGREEMENT.
      valid_values: ['SIGN_VERIFY', 'ENCRYPT_DECRYPT', 'GENERATE_VERIFY_MAC', 'KEY_AGREEMENT']
    - name: CustomerMasterKeySpec
      value: "{{ CustomerMasterKeySpec }}"
      description: |
        Instead, use the KeySpec parameter. The KeySpec and CustomerMasterKeySpec parameters work the same way. Only the names differ. We recommend that you use KeySpec parameter in your code. However, to avoid breaking changes, KMS supports both parameters.
      valid_values: ['RSA_2048', 'RSA_3072', 'RSA_4096', 'ECC_NIST_P256', 'ECC_NIST_P384', 'ECC_NIST_P521', 'ECC_SECG_P256K1', 'SYMMETRIC_DEFAULT', 'HMAC_224', 'HMAC_256', 'HMAC_384', 'HMAC_512', 'SM2']
    - name: KeySpec
      value: "{{ KeySpec }}"
      description: |
        Specifies the type of KMS key to create. The default value, SYMMETRIC_DEFAULT, creates a KMS key with a 256-bit AES-GCM key that is used for encryption and decryption, except in China Regions, where it creates a 128-bit symmetric key that uses SM4 encryption. For a detailed description of all supported key specs, see Key spec reference in the Key Management Service Developer Guide . The KeySpec determines whether the KMS key contains a symmetric key or an asymmetric key pair. It also determines the algorithms that the KMS key supports. You can't change the KeySpec after the KMS key is created. To further restrict the algorithms that can be used with the KMS key, use a condition key in its key policy or IAM policy. For more information, see kms:EncryptionAlgorithm, kms:MacAlgorithm, kms:KeyAgreementAlgorithm, or kms:SigningAlgorithm in the Key Management Service Developer Guide . Amazon Web Services services that are integrated with KMS use symmetric encryption KMS keys to protect your data. These services do not support asymmetric KMS keys or HMAC KMS keys. KMS supports the following key specs for KMS keys: Symmetric encryption key (default) SYMMETRIC_DEFAULT HMAC keys (symmetric) HMAC_224 HMAC_256 HMAC_384 HMAC_512 Asymmetric RSA key pairs (encryption and decryption -or- signing and verification) RSA_2048 RSA_3072 RSA_4096 Asymmetric NIST-standard elliptic curve key pairs (signing and verification -or- deriving shared secrets) ECC_NIST_P256 (secp256r1) ECC_NIST_P384 (secp384r1) ECC_NIST_P521 (secp521r1) ECC_NIST_EDWARDS25519 (ed25519) - signing and verification only Note: For ECC_NIST_EDWARDS25519 KMS keys, the ED25519_SHA_512 signing algorithm requires MessageType:RAW , while ED25519_PH_SHA_512 requires MessageType:DIGEST . These message types cannot be used interchangeably. Other asymmetric elliptic curve key pairs (signing and verification) ECC_SECG_P256K1 (secp256k1), commonly used for cryptocurrencies. Asymmetric ML-DSA key pairs (signing and verification) ML_DSA_44 ML_DSA_65 ML_DSA_87 SM2 key pairs (encryption and decryption -or- signing and verification -or- deriving shared secrets) SM2 (China Regions only)
      valid_values: ['RSA_2048', 'RSA_3072', 'RSA_4096', 'ECC_NIST_P256', 'ECC_NIST_P384', 'ECC_NIST_P521', 'ECC_SECG_P256K1', 'SYMMETRIC_DEFAULT', 'HMAC_224', 'HMAC_256', 'HMAC_384', 'HMAC_512', 'SM2', 'ML_DSA_44', 'ML_DSA_65', 'ML_DSA_87', 'ECC_NIST_EDWARDS25519']
    - name: Origin
      value: "{{ Origin }}"
      description: |
        The source of the key material for the KMS key. You cannot change the origin after you create the KMS key. The default is AWS_KMS, which means that KMS creates the key material. To create a KMS key with no key material (for imported key material), set this value to EXTERNAL. For more information about importing key material into KMS, see Importing Key Material in the Key Management Service Developer Guide. The EXTERNAL origin value is valid only for symmetric KMS keys. To create a KMS key in an CloudHSM key store and create its key material in the associated CloudHSM cluster, set this value to AWS_CLOUDHSM. You must also use the CustomKeyStoreId parameter to identify the CloudHSM key store. The KeySpec value must be SYMMETRIC_DEFAULT. To create a KMS key in an external key store, set this value to EXTERNAL_KEY_STORE. You must also use the CustomKeyStoreId parameter to identify the external key store and the XksKeyId parameter to identify the associated external key. The KeySpec value must be SYMMETRIC_DEFAULT.
      valid_values: ['AWS_KMS', 'EXTERNAL', 'AWS_CLOUDHSM', 'EXTERNAL_KEY_STORE']
    - name: CustomKeyStoreId
      value: "{{ CustomKeyStoreId }}"
      description: |
        Creates the KMS key in the specified custom key store. The ConnectionState of the custom key store must be CONNECTED. To find the CustomKeyStoreID and ConnectionState use the DescribeCustomKeyStores operation. This parameter is valid only for symmetric encryption KMS keys in a single Region. You cannot create any other type of KMS key in a custom key store. When you create a KMS key in an CloudHSM key store, KMS generates a non-exportable 256-bit symmetric key in its associated CloudHSM cluster and associates it with the KMS key. When you create a KMS key in an external key store, you must use the XksKeyId parameter to specify an external key that serves as key material for the KMS key.
    - name: BypassPolicyLockoutSafetyCheck
      value: {{ BypassPolicyLockoutSafetyCheck }}
      description: |
        Skips ("bypasses") the key policy lockout safety check. The default value is false. Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately. For more information, see Default key policy in the Key Management Service Developer Guide. Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent PutKeyPolicy request on the KMS key.
    - name: Tags
      description: |
        Assigns one or more tags to the KMS key. Use this parameter to tag the KMS key when it is created. To tag an existing KMS key, use the TagResource operation. Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output. Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see ABAC for KMS in the Key Management Service Developer Guide. To use this parameter, you must have kms:TagResource permission in an IAM policy. Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You cannot have more than one tag on a KMS key with the same tag key. If you specify an existing tag key with a different tag value, KMS replaces the current tag value with the specified one. When you add tags to an Amazon Web Services resource, Amazon Web Services generates a cost allocation report with usage and costs aggregated by tags. Tags can also be used to control access to a KMS key. For details, see Tags in KMS.
      value:
        - TagKey: "{{ TagKey }}"
          TagValue: "{{ TagValue }}"
    - name: MultiRegion
      value: {{ MultiRegion }}
      description: |
        Creates a multi-Region primary key that you can replicate into other Amazon Web Services Regions. You cannot change this value after you create the KMS key. For a multi-Region key, set this parameter to True. For a single-Region KMS key, omit this parameter or set it to False. The default value is False. This operation supports multi-Region keys, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see Multi-Region keys in KMS in the Key Management Service Developer Guide. This value creates a primary key, not a replica. To create a replica key, use the ReplicateKey operation. You can create a symmetric or asymmetric multi-Region key, and you can create a multi-Region key with imported key material. However, you cannot create a multi-Region key in a custom key store.
    - name: XksKeyId
      value: "{{ XksKeyId }}"
      description: |
        Identifies the external key that serves as key material for the KMS key in an external key store. Specify the ID that the external key store proxy uses to refer to the external key. For help, see the documentation for your external key store proxy. This parameter is required for a KMS key with an Origin value of EXTERNAL_KEY_STORE. It is not valid for KMS keys with any other Origin value. The external key must be an existing 256-bit AES symmetric encryption key hosted outside of Amazon Web Services in an external key manager associated with the external key store specified by the CustomKeyStoreId parameter. This key must be enabled and configured to perform encryption and decryption. Each KMS key in an external key store must use a different external key. For details, see Requirements for a KMS key in an external key store in the Key Management Service Developer Guide. Each KMS key in an external key store is associated two backing keys. One is key material that KMS generates. The other is the external key specified by this parameter. When you use the KMS key in an external key store to encrypt data, the encryption operation is performed first by KMS using the KMS key material, and then by the external key manager using the specified external key, a process known as double encryption. For details, see Double encryption in the Key Management Service Developer Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_key_description"
    values={[
        { label: 'update_key_description', value: 'update_key_description' },
        { label: 'update_primary_region', value: 'update_primary_region' }
    ]}
>
<TabItem value="update_key_description">

Updates the description of a KMS key. To see the description of a KMS key, use DescribeKey. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:UpdateKeyDescription (key policy) Related operations CreateKey DescribeKey Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
UPDATE aws.kms.keys
SET 
KeyId = '{{ KeyId }}',
Description = '{{ Description }}'
WHERE 
region = '{{ region }}' --required
AND KeyId = '{{ KeyId }}' --required
AND Description = '{{ Description }}' --required;
```
</TabItem>
<TabItem value="update_primary_region">

Changes the primary key of a multi-Region key. This operation changes the replica key in the specified Region to a primary key and changes the former primary key to a replica key. For example, suppose you have a primary key in us-east-1 and a replica key in eu-west-2. If you run UpdatePrimaryRegion with a PrimaryRegion value of eu-west-2, the primary key is now the key in eu-west-2, and the key in us-east-1 becomes a replica key. For details, see Change the primary key in a set of multi-Region keys in the Key Management Service Developer Guide. This operation supports multi-Region keys, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see Multi-Region keys in KMS in the Key Management Service Developer Guide. The primary key of a multi-Region key is the source for properties that are always shared by primary and replica keys, including the key material, key ID, key spec, key usage, key material origin, and automatic key rotation. It's the only key that can be replicated. You cannot delete the primary key until all replica keys are deleted. The key ID and primary Region that you specify uniquely identify the replica key that will become the primary key. The primary Region must already have a replica key. This operation does not create a KMS key in the specified Region. To find the replica keys, use the DescribeKey operation on the primary key or any replica key. To create a replica key, use the ReplicateKey operation. You can run this operation while using the affected multi-Region keys in cryptographic operations. This operation should not delay, interrupt, or cause failures in cryptographic operations. Even after this operation completes, the process of updating the primary Region might still be in progress for a few more seconds. Operations such as DescribeKey might display both the old and new primary keys as replicas. The old and new primary keys have a transient key state of Updating. The original key state is restored when the update is complete. While the key state is Updating, you can use the keys in cryptographic operations, but you cannot replicate the new primary key or perform certain management operations, such as enabling or disabling these keys. For details about the Updating key state, see Key states of KMS keys in the Key Management Service Developer Guide. This operation does not return any output. To verify that primary key is changed, use the DescribeKey operation. Cross-account use: No. You cannot use this operation in a different Amazon Web Services account. Required permissions: kms:UpdatePrimaryRegion on the current primary key (in the primary key's Region). Include this permission primary key's key policy. kms:UpdatePrimaryRegion on the current replica key (in the replica key's Region). Include this permission in the replica key's key policy. Related operations CreateKey ReplicateKey Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
UPDATE aws.kms.keys
SET 
KeyId = '{{ KeyId }}',
PrimaryRegion = '{{ PrimaryRegion }}'
WHERE 
region = '{{ region }}' --required
AND KeyId = '{{ KeyId }}' --required
AND PrimaryRegion = '{{ PrimaryRegion }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_imported_key_material"
    values={[
        { label: 'delete_imported_key_material', value: 'delete_imported_key_material' }
    ]}
>
<TabItem value="delete_imported_key_material">

Deletes key material that was previously imported. This operation makes the specified KMS key temporarily unusable. To restore the usability of the KMS key, reimport the same key material. For more information about importing key material into KMS, see Importing Key Material in the Key Management Service Developer Guide. When the specified KMS key is in the PendingDeletion state, this operation does not change the KMS key's state. Otherwise, it changes the KMS key's state to PendingImport. Considerations for multi-Region symmetric encryption keys When you delete the key material of a primary Region key that is in PENDING_ROTATION or PENDING_MULTI_REGION_IMPORT_AND_ROTATIONstate, you'll also be deleting the key materials for the replica Region keys. If you delete any key material of a replica Region key, the primary Region key and other replica Region keys remain unchanged. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:DeleteImportedKeyMaterial (key policy) Related operations: GetParametersForImport ListKeyRotations ImportKeyMaterial Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
DELETE FROM aws.kms.keys
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_key_deletion"
    values={[
        { label: 'cancel_key_deletion', value: 'cancel_key_deletion' },
        { label: 'derive_shared_secret', value: 'derive_shared_secret' },
        { label: 'disable_key', value: 'disable_key' },
        { label: 'disable_key_rotation', value: 'disable_key_rotation' },
        { label: 'enable_key', value: 'enable_key' },
        { label: 'enable_key_rotation', value: 'enable_key_rotation' },
        { label: 'encrypt', value: 'encrypt' },
        { label: 'generate_data_key', value: 'generate_data_key' },
        { label: 'generate_data_key_pair', value: 'generate_data_key_pair' },
        { label: 'generate_data_key_pair_without_plaintext', value: 'generate_data_key_pair_without_plaintext' },
        { label: 'generate_data_key_without_plaintext', value: 'generate_data_key_without_plaintext' },
        { label: 'generate_mac', value: 'generate_mac' },
        { label: 'import_key_material', value: 'import_key_material' },
        { label: 'replicate_key', value: 'replicate_key' },
        { label: 'rotate_key_on_demand', value: 'rotate_key_on_demand' },
        { label: 'schedule_key_deletion', value: 'schedule_key_deletion' },
        { label: 'sign', value: 'sign' },
        { label: 'verify', value: 'verify' },
        { label: 'verify_mac', value: 'verify_mac' }
    ]}
>
<TabItem value="cancel_key_deletion">

Cancels the deletion of a KMS key. When this operation succeeds, the key state of the KMS key is Disabled. To enable the KMS key, use EnableKey. For more information about scheduling and canceling deletion of a KMS key, see Deleting KMS keys in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:CancelKeyDeletion (key policy) Related operations: ScheduleKeyDeletion Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.cancel_key_deletion 
@region='{{ region }}' --required 
@@json=
'{
"KeyId": "{{ KeyId }}"
}'
;
```
</TabItem>
<TabItem value="derive_shared_secret">

Derives a shared secret using a key agreement algorithm. You must use an asymmetric NIST-standard elliptic curve (ECC) or SM2 (China Regions only) KMS key pair with a KeyUsage value of KEY_AGREEMENT to call DeriveSharedSecret. DeriveSharedSecret uses the Elliptic Curve Cryptography Cofactor Diffie-Hellman Primitive (ECDH) to establish a key agreement between two peers by deriving a shared secret from their elliptic curve public-private key pairs. You can use the raw shared secret that DeriveSharedSecret returns to derive a symmetric key that can encrypt and decrypt data that is sent between the two peers, or that can generate and verify HMACs. KMS recommends that you follow NIST recommendations for key derivation when using the raw shared secret to derive a symmetric key. The following workflow demonstrates how to establish key agreement over an insecure communication channel using DeriveSharedSecret. Alice calls CreateKey to create an asymmetric KMS key pair with a KeyUsage value of KEY_AGREEMENT. The asymmetric KMS key must use a NIST-standard elliptic curve (ECC) or SM2 (China Regions only) key spec. Bob creates an elliptic curve key pair. Bob can call CreateKey to create an asymmetric KMS key pair or generate a key pair outside of KMS. Bob's key pair must use the same NIST-standard elliptic curve (ECC) or SM2 (China Regions ony) curve as Alice. Alice and Bob exchange their public keys through an insecure communication channel (like the internet). Use GetPublicKey to download the public key of your asymmetric KMS key pair. KMS strongly recommends verifying that the public key you receive came from the expected party before using it to derive a shared secret. Alice calls DeriveSharedSecret. KMS uses the private key from the KMS key pair generated in Step 1, Bob's public key, and the Elliptic Curve Cryptography Cofactor Diffie-Hellman Primitive to derive the shared secret. The private key in your KMS key pair never leaves KMS unencrypted. DeriveSharedSecret returns the raw shared secret. Bob uses the Elliptic Curve Cryptography Cofactor Diffie-Hellman Primitive to calculate the same raw secret using his private key and Alice's public key. To derive a shared secret you must provide a key agreement algorithm, the private key of the caller's asymmetric NIST-standard elliptic curve or SM2 (China Regions only) KMS key pair, and the public key from your peer's NIST-standard elliptic curve or SM2 (China Regions only) key pair. The public key can be from another asymmetric KMS key pair or from a key pair generated outside of KMS, but both key pairs must be on the same elliptic curve. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:DeriveSharedSecret (key policy) Related operations: CreateKey GetPublicKey DescribeKey Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.derive_shared_secret 
@region='{{ region }}' --required 
@@json=
'{
"KeyId": "{{ KeyId }}", 
"KeyAgreementAlgorithm": "{{ KeyAgreementAlgorithm }}", 
"PublicKey": "{{ PublicKey }}", 
"GrantTokens": "{{ GrantTokens }}", 
"DryRun": {{ DryRun }}, 
"Recipient": "{{ Recipient }}"
}'
;
```
</TabItem>
<TabItem value="disable_key">

Sets the state of a KMS key to disabled. This change temporarily prevents use of the KMS key for cryptographic operations. The KMS key that you use for this operation must be in a compatible key state. For more information about how key state affects the use of a KMS key, see Key states of KMS keys in the Key Management Service Developer Guide . Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:DisableKey (key policy) Related operations: EnableKey Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.disable_key 
@region='{{ region }}' --required 
@@json=
'{
"KeyId": "{{ KeyId }}"
}'
;
```
</TabItem>
<TabItem value="disable_key_rotation">

Disables automatic rotation of the key material of the specified symmetric encryption KMS key. Automatic key rotation is supported only on symmetric encryption KMS keys. You cannot enable automatic rotation of asymmetric KMS keys, HMAC KMS keys, KMS keys with imported key material, or KMS keys in a custom key store. To enable or disable automatic rotation of a set of related multi-Region keys, set the property on the primary key. You can enable (EnableKeyRotation) and disable automatic rotation of the key material in customer managed KMS keys. Key material rotation of Amazon Web Services managed KMS keys is not configurable. KMS always rotates the key material for every year. Rotation of Amazon Web Services owned KMS keys varies. In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three years to every year. For details, see EnableKeyRotation. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:DisableKeyRotation (key policy) Related operations: EnableKeyRotation GetKeyRotationStatus ListKeyRotations RotateKeyOnDemand Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.disable_key_rotation 
@region='{{ region }}' --required 
@@json=
'{
"KeyId": "{{ KeyId }}"
}'
;
```
</TabItem>
<TabItem value="enable_key">

Sets the key state of a KMS key to enabled. This allows you to use the KMS key for cryptographic operations. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:EnableKey (key policy) Related operations: DisableKey Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.enable_key 
@region='{{ region }}' --required 
@@json=
'{
"KeyId": "{{ KeyId }}"
}'
;
```
</TabItem>
<TabItem value="enable_key_rotation">

Enables automatic rotation of the key material of the specified symmetric encryption KMS key. By default, when you enable automatic rotation of a customer managed KMS key, KMS rotates the key material of the KMS key one year (approximately 365 days) from the enable date and every year thereafter. You can use the optional RotationPeriodInDays parameter to specify a custom rotation period when you enable key rotation, or you can use RotationPeriodInDays to modify the rotation period of a key that you previously enabled automatic key rotation on. You can monitor rotation of the key material for your KMS keys in CloudTrail and Amazon CloudWatch. To disable rotation of the key material in a customer managed KMS key, use the DisableKeyRotation operation. You can use the GetKeyRotationStatus operation to identify any in progress rotations. You can use the ListKeyRotations operation to view the details of completed rotations. Automatic key rotation is supported only on symmetric encryption KMS keys. You cannot enable automatic rotation of asymmetric KMS keys, HMAC KMS keys, KMS keys with imported key material, or KMS keys in a custom key store. To enable or disable automatic rotation of a set of related multi-Region keys, set the property on the primary key. You cannot enable or disable automatic rotation of Amazon Web Services managed KMS keys. KMS always rotates the key material of Amazon Web Services managed keys every year. Rotation of Amazon Web Services owned KMS keys is managed by the Amazon Web Services service that owns the key. In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three years (approximately 1,095 days) to every year (approximately 365 days). New Amazon Web Services managed keys are automatically rotated one year after they are created, and approximately every year thereafter. Existing Amazon Web Services managed keys are automatically rotated one year after their most recent rotation, and every year thereafter. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:EnableKeyRotation (key policy) Related operations: DisableKeyRotation GetKeyRotationStatus ListKeyRotations RotateKeyOnDemand You can perform on-demand (RotateKeyOnDemand) rotation of the key material in customer managed KMS keys, regardless of whether or not automatic key rotation is enabled. Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.enable_key_rotation 
@region='{{ region }}' --required 
@@json=
'{
"KeyId": "{{ KeyId }}", 
"RotationPeriodInDays": {{ RotationPeriodInDays }}
}'
;
```
</TabItem>
<TabItem value="encrypt">

Encrypts plaintext of up to 4,096 bytes using a KMS key. You can use a symmetric or asymmetric KMS key with a KeyUsage of ENCRYPT_DECRYPT. You can use this operation to encrypt small amounts of arbitrary data, such as a personal identifier or database password, or other sensitive information. You don't need to use the Encrypt operation to encrypt a data key. The GenerateDataKey and GenerateDataKeyPair operations return a plaintext data key and an encrypted copy of that data key. If you use a symmetric encryption KMS key, you can use an encryption context to add additional security to your encryption operation. If you specify an EncryptionContext when encrypting data, you must specify the same encryption context (a case-sensitive exact match) when decrypting the data. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the Key Management Service Developer Guide. If you specify an asymmetric KMS key, you must also specify the encryption algorithm. The algorithm must be compatible with the KMS key spec. When you use an asymmetric KMS key to encrypt or reencrypt data, be sure to record the KMS key and encryption algorithm that you choose. You will be required to provide the same KMS key and encryption algorithm when you decrypt the data. If the KMS key and algorithm do not match the values used to encrypt the data, the decrypt operation fails. You are not required to supply the key ID and encryption algorithm when you decrypt with symmetric encryption KMS keys because KMS stores this information in the ciphertext blob. KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields. The maximum size of the data that you can encrypt varies with the type of KMS key and the encryption algorithm that you choose. Symmetric encryption KMS keys SYMMETRIC_DEFAULT: 4096 bytes RSA_2048 RSAES_OAEP_SHA_1: 214 bytes RSAES_OAEP_SHA_256: 190 bytes RSA_3072 RSAES_OAEP_SHA_1: 342 bytes RSAES_OAEP_SHA_256: 318 bytes RSA_4096 RSAES_OAEP_SHA_1: 470 bytes RSAES_OAEP_SHA_256: 446 bytes SM2PKE: 1024 bytes (China Regions only) The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:Encrypt (key policy) Related operations: Decrypt GenerateDataKey GenerateDataKeyPair Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.encrypt 
@region='{{ region }}' --required 
@@json=
'{
"KeyId": "{{ KeyId }}", 
"Plaintext": "{{ Plaintext }}", 
"EncryptionContext": "{{ EncryptionContext }}", 
"GrantTokens": "{{ GrantTokens }}", 
"EncryptionAlgorithm": "{{ EncryptionAlgorithm }}", 
"DryRun": {{ DryRun }}
}'
;
```
</TabItem>
<TabItem value="generate_data_key">

Returns a unique symmetric data key for use outside of KMS. This operation returns a plaintext copy of the data key and a copy that is encrypted under a symmetric encryption KMS key that you specify. The bytes in the plaintext key are random; they are not related to the caller or the KMS key. You can use the plaintext key to encrypt your data outside of KMS and store the encrypted data key with the encrypted data. To generate a data key, specify the symmetric encryption KMS key that will be used to encrypt the data key. You cannot use an asymmetric KMS key to encrypt data keys. To get the type of your KMS key, use the DescribeKey operation. You must also specify the length of the data key. Use either the KeySpec or NumberOfBytes parameters (but not both). For 128-bit and 256-bit data keys, use the KeySpec parameter. To generate a 128-bit SM4 data key (China Regions only), specify a KeySpec value of AES_128 or a NumberOfBytes value of 16. The symmetric encryption key used in China Regions to encrypt your data key is an SM4 encryption key. To get only an encrypted copy of the data key, use GenerateDataKeyWithoutPlaintext. To generate an asymmetric data key pair, use the GenerateDataKeyPair or GenerateDataKeyPairWithoutPlaintext operation. To get a cryptographically secure random byte string, use GenerateRandom. You can use an optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the Key Management Service Developer Guide. GenerateDataKey also supports Amazon Web Services Nitro Enclaves, which provide an isolated compute environment in Amazon EC2. To call GenerateDataKey for an Amazon Web Services Nitro enclave or NitroTPM, use the Amazon Web Services Nitro Enclaves SDK or any Amazon Web Services SDK. Use the Recipient parameter to provide the attestation document for the attested environment. GenerateDataKey returns a copy of the data key encrypted under the specified KMS key, as usual. But instead of a plaintext copy of the data key, the response includes a copy of the data key encrypted under the public key from the attestation document (CiphertextForRecipient). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see Cryptographic attestation support in KMS in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. How to use your data key We recommend that you use the following pattern to encrypt data locally in your application. You can write your own code or use a client-side encryption library, such as the Amazon Web Services Encryption SDK, the Amazon DynamoDB Encryption Client, or Amazon S3 client-side encryption to do these tasks for you. To encrypt data outside of KMS: Use the GenerateDataKey operation to get a data key. Use the plaintext data key (in the Plaintext field of the response) to encrypt your data outside of KMS. Then erase the plaintext data key from memory. Store the encrypted data key (in the CiphertextBlob field of the response) with the encrypted data. To decrypt data outside of KMS: Use the Decrypt operation to decrypt the encrypted data key. The operation returns a plaintext copy of the data key. Use the plaintext data key to decrypt data outside of KMS, then erase the plaintext data key from memory. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:GenerateDataKey (key policy) Related operations: Decrypt Encrypt GenerateDataKeyPair GenerateDataKeyPairWithoutPlaintext GenerateDataKeyWithoutPlaintext Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.generate_data_key 
@region='{{ region }}' --required 
@@json=
'{
"KeyId": "{{ KeyId }}", 
"EncryptionContext": "{{ EncryptionContext }}", 
"NumberOfBytes": {{ NumberOfBytes }}, 
"KeySpec": "{{ KeySpec }}", 
"GrantTokens": "{{ GrantTokens }}", 
"Recipient": "{{ Recipient }}", 
"DryRun": {{ DryRun }}
}'
;
```
</TabItem>
<TabItem value="generate_data_key_pair">

Returns a unique asymmetric data key pair for use outside of KMS. This operation returns a plaintext public key, a plaintext private key, and a copy of the private key that is encrypted under the symmetric encryption KMS key you specify. You can use the data key pair to perform asymmetric cryptography and implement digital signatures outside of KMS. The bytes in the keys are random; they are not related to the caller or to the KMS key that is used to encrypt the private key. You can use the public key that GenerateDataKeyPair returns to encrypt data or verify a signature outside of KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the Decrypt operation to decrypt the encrypted private key. To generate a data key pair, you must specify a symmetric encryption KMS key to encrypt the private key in a data key pair. You cannot use an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the DescribeKey operation. Use the KeyPairSpec parameter to choose an RSA or Elliptic Curve (ECC) data key pair. In China Regions, you can also choose an SM2 data key pair. KMS recommends that you use ECC key pairs for signing, and use RSA and SM2 key pairs for either encryption or signing, but not both. However, KMS cannot enforce any restrictions on the use of data key pairs outside of KMS. If you are using the data key pair to encrypt data, or for any operation where you don't immediately need a private key, consider using the GenerateDataKeyPairWithoutPlaintext operation. GenerateDataKeyPairWithoutPlaintext returns a plaintext public key and an encrypted private key, but omits the plaintext private key that you need only to decrypt ciphertext or sign a message. Later, when you need to decrypt the data or sign a message, use the Decrypt operation to decrypt the encrypted private key in the data key pair. GenerateDataKeyPair returns a unique data key pair for each request. The bytes in the keys are random; they are not related to the caller or the KMS key that is used to encrypt the private key. The public key is a DER-encoded X.509 SubjectPublicKeyInfo, as specified in RFC 5280. The private key is a DER-encoded PKCS8 PrivateKeyInfo, as specified in RFC 5958. GenerateDataKeyPair also supports Amazon Web Services Nitro Enclaves, which provide an isolated compute environment in Amazon EC2. To call GenerateDataKeyPair for an Amazon Web Services Nitro enclave or NitroTPM, use the Amazon Web Services Nitro Enclaves SDK or any Amazon Web Services SDK. Use the Recipient parameter to provide the attestation document for the attested environment. GenerateDataKeyPair returns the public data key and a copy of the private data key encrypted under the specified KMS key, as usual. But instead of a plaintext copy of the private data key (PrivateKeyPlaintext), the response includes a copy of the private data key encrypted under the public key from the attestation document (CiphertextForRecipient). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see Cryptographic attestation support in KMS in the Key Management Service Developer Guide. You can use an optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:GenerateDataKeyPair (key policy) Related operations: Decrypt Encrypt GenerateDataKey GenerateDataKeyPairWithoutPlaintext GenerateDataKeyWithoutPlaintext Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.generate_data_key_pair 
@region='{{ region }}' --required 
@@json=
'{
"EncryptionContext": "{{ EncryptionContext }}", 
"KeyId": "{{ KeyId }}", 
"KeyPairSpec": "{{ KeyPairSpec }}", 
"GrantTokens": "{{ GrantTokens }}", 
"Recipient": "{{ Recipient }}", 
"DryRun": {{ DryRun }}
}'
;
```
</TabItem>
<TabItem value="generate_data_key_pair_without_plaintext">

Returns a unique asymmetric data key pair for use outside of KMS. This operation returns a plaintext public key and a copy of the private key that is encrypted under the symmetric encryption KMS key you specify. Unlike GenerateDataKeyPair, this operation does not return a plaintext private key. The bytes in the keys are random; they are not related to the caller or to the KMS key that is used to encrypt the private key. You can use the public key that GenerateDataKeyPairWithoutPlaintext returns to encrypt data or verify a signature outside of KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the Decrypt operation to decrypt the encrypted private key. To generate a data key pair, you must specify a symmetric encryption KMS key to encrypt the private key in a data key pair. You cannot use an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the DescribeKey operation. Use the KeyPairSpec parameter to choose an RSA or Elliptic Curve (ECC) data key pair. In China Regions, you can also choose an SM2 data key pair. KMS recommends that you use ECC key pairs for signing, and use RSA and SM2 key pairs for either encryption or signing, but not both. However, KMS cannot enforce any restrictions on the use of data key pairs outside of KMS. GenerateDataKeyPairWithoutPlaintext returns a unique data key pair for each request. The bytes in the key are not related to the caller or KMS key that is used to encrypt the private key. The public key is a DER-encoded X.509 SubjectPublicKeyInfo, as specified in RFC 5280. You can use an optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:GenerateDataKeyPairWithoutPlaintext (key policy) Related operations: Decrypt Encrypt GenerateDataKey GenerateDataKeyPair GenerateDataKeyWithoutPlaintext Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.generate_data_key_pair_without_plaintext 
@region='{{ region }}' --required 
@@json=
'{
"EncryptionContext": "{{ EncryptionContext }}", 
"KeyId": "{{ KeyId }}", 
"KeyPairSpec": "{{ KeyPairSpec }}", 
"GrantTokens": "{{ GrantTokens }}", 
"DryRun": {{ DryRun }}
}'
;
```
</TabItem>
<TabItem value="generate_data_key_without_plaintext">

Returns a unique symmetric data key for use outside of KMS. This operation returns a data key that is encrypted under a symmetric encryption KMS key that you specify. The bytes in the key are random; they are not related to the caller or to the KMS key. GenerateDataKeyWithoutPlaintext is identical to the GenerateDataKey operation except that it does not return a plaintext copy of the data key. This operation is useful for systems that need to encrypt data at some point, but not immediately. When you need to encrypt the data, you call the Decrypt operation on the encrypted copy of the key. It's also useful in distributed systems with different levels of trust. For example, you might store encrypted data in containers. One component of your system creates new containers and stores an encrypted data key with each container. Then, a different component puts the data into the containers. That component first decrypts the data key, uses the plaintext data key to encrypt data, puts the encrypted data into the container, and then destroys the plaintext data key. In this system, the component that creates the containers never sees the plaintext data key. To request an asymmetric data key pair, use the GenerateDataKeyPair or GenerateDataKeyPairWithoutPlaintext operations. To generate a data key, you must specify the symmetric encryption KMS key that is used to encrypt the data key. You cannot use an asymmetric KMS key or a key in a custom key store to generate a data key. To get the type of your KMS key, use the DescribeKey operation. You must also specify the length of the data key. Use either the KeySpec or NumberOfBytes parameters (but not both). For 128-bit and 256-bit data keys, use the KeySpec parameter. To generate an SM4 data key (China Regions only), specify a KeySpec value of AES_128 or NumberOfBytes value of 16. The symmetric encryption key used in China Regions to encrypt your data key is an SM4 encryption key. If the operation succeeds, you will find the encrypted copy of the data key in the CiphertextBlob field. You can use an optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:GenerateDataKeyWithoutPlaintext (key policy) Related operations: Decrypt Encrypt GenerateDataKey GenerateDataKeyPair GenerateDataKeyPairWithoutPlaintext Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.generate_data_key_without_plaintext 
@region='{{ region }}' --required 
@@json=
'{
"KeyId": "{{ KeyId }}", 
"EncryptionContext": "{{ EncryptionContext }}", 
"KeySpec": "{{ KeySpec }}", 
"NumberOfBytes": {{ NumberOfBytes }}, 
"GrantTokens": "{{ GrantTokens }}", 
"DryRun": {{ DryRun }}
}'
;
```
</TabItem>
<TabItem value="generate_mac">

Generates a hash-based message authentication code (HMAC) for a message using an HMAC KMS key and a MAC algorithm that the key supports. HMAC KMS keys and the HMAC algorithms that KMS uses conform to industry standards defined in RFC 2104. You can use value that GenerateMac returns in the VerifyMac operation to demonstrate that the original message has not changed. Also, because a secret key is used to create the hash, you can verify that the party that generated the hash has the required secret key. You can also use the raw result to implement HMAC-based algorithms such as key derivation functions. This operation is part of KMS support for HMAC KMS keys. For details, see HMAC keys in KMS in the Key Management Service Developer Guide . Best practices recommend that you limit the time during which any signing mechanism, including an HMAC, is effective. This deters an attack where the actor uses a signed message to establish validity repeatedly or long after the message is superseded. HMAC tags do not include a timestamp, but you can include a timestamp in the token or message to help you detect when its time to refresh the HMAC. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:GenerateMac (key policy) Related operations: VerifyMac Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.generate_mac 
@region='{{ region }}' --required 
@@json=
'{
"Message": "{{ Message }}", 
"KeyId": "{{ KeyId }}", 
"MacAlgorithm": "{{ MacAlgorithm }}", 
"GrantTokens": "{{ GrantTokens }}", 
"DryRun": {{ DryRun }}
}'
;
```
</TabItem>
<TabItem value="import_key_material">

Imports or reimports key material into an existing KMS key that was created without key material. You can also use this operation to set or update the expiration model and expiration date of the imported key material. By default, KMS creates KMS keys with key material that it generates. You can also generate and import your own key material. For more information about importing key material, see Importing key material. For asymmetric and HMAC keys, you cannot change the key material after the initial import. You can import multiple key materials into symmetric encryption keys and rotate the key material on demand using RotateKeyOnDemand. You can import new key materials into multi-Region symmetric encryption keys. To do so, you must import the new key material into the primary Region key. Then you can import the same key materials into the replica Region keys. You cannot directly import new key material into the replica Region keys. To import new key material for a multi-Region symmetric key, you’ll need to complete the following: Call ImportKeyMaterial on the primary Region key with the ImportTypeset to NEW_KEY_MATERIAL. Call ImportKeyMaterial on the replica Region key with the ImportType set to EXISTING_KEY_MATERIAL using the same key material imported to the primary Region key. You must do this for every replica Region key before you can perform the RotateKeyOnDemand operation on the primary Region key. After you import key material, you can reimport the same key material into that KMS key or, if the key supports on-demand rotation, import new key material. You can use the ImportType parameter to indicate whether you are importing new key material or re-importing previously imported key material. You might reimport key material to replace key material that expired or key material that you deleted. You might also reimport key material to change the expiration model or expiration date of the key material. Each time you import key material into KMS, you can determine whether (ExpirationModel) and when (ValidTo) the key material expires. To change the expiration of your key material, you must import it again, either by calling ImportKeyMaterial or using the import features of the KMS console. Before you call ImportKeyMaterial, complete these steps: Create or identify a KMS key with EXTERNAL origin, which indicates that the KMS key is designed for imported key material. To create a new KMS key for imported key material, call the CreateKey operation with an Origin value of EXTERNAL. You can create a symmetric encryption KMS key, HMAC KMS key, asymmetric encryption KMS key, asymmetric key agreement key, or asymmetric signing KMS key. You can also import key material into a multi-Region key of any supported type. However, you can't import key material into a KMS key in a custom key store. Call the GetParametersForImport operation to get a public key and import token set for importing key material. Use the public key in the GetParametersForImport response to encrypt your key material. Then, in an ImportKeyMaterial request, you submit your encrypted key material and import token. When calling this operation, you must specify the following values: The key ID or key ARN of the KMS key to associate with the imported key material. Its Origin must be EXTERNAL and its KeyState must be PendingImport or Enabled. You cannot perform this operation on a KMS key in a custom key store, or on a KMS key in a different Amazon Web Services account. To get the Origin and KeyState of a KMS key, call DescribeKey. The encrypted key material. The import token that GetParametersForImport returned. You must use a public key and token from the same GetParametersForImport response. Whether the key material expires (ExpirationModel) and, if so, when (ValidTo). For help with this choice, see Setting an expiration time in the Key Management Service Developer Guide. If you set an expiration date, KMS deletes the key material from the KMS key on the specified date, making the KMS key unusable. To use the KMS key in cryptographic operations again, you must reimport the same key material. However, you can delete and reimport the key material at any time, including before the key material expires. Each time you reimport, you can eliminate or reset the expiration time. When this operation is successful, the state of the KMS key changes to Enabled, and you can use the KMS key in cryptographic operations. For symmetric encryption keys, you will need to import all of the key materials associated with the KMS key to change its state to Enabled. Use the ListKeyRotations operation to list the ID and import state of each key material associated with a KMS key. If this operation fails, use the exception to help determine the problem. If the error is related to the key material, the import token, or wrapping key, use GetParametersForImport to get a new public key and import token for the KMS key and repeat the import procedure. For help, see Create a KMS key with imported key material in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:ImportKeyMaterial (key policy) Related operations: DeleteImportedKeyMaterial GetParametersForImport ListKeyRotations RotateKeyOnDemand Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.import_key_material 
@region='{{ region }}' --required 
@@json=
'{
"KeyId": "{{ KeyId }}", 
"ImportToken": "{{ ImportToken }}", 
"EncryptedKeyMaterial": "{{ EncryptedKeyMaterial }}", 
"ValidTo": "{{ ValidTo }}", 
"ExpirationModel": "{{ ExpirationModel }}", 
"ImportType": "{{ ImportType }}", 
"KeyMaterialDescription": "{{ KeyMaterialDescription }}", 
"KeyMaterialId": "{{ KeyMaterialId }}"
}'
;
```
</TabItem>
<TabItem value="replicate_key">

Replicates a multi-Region key into the specified Region. This operation creates a multi-Region replica key based on a multi-Region primary key in a different Region of the same Amazon Web Services partition. You can create multiple replicas of a primary key, but each must be in a different Region. To create a multi-Region primary key, use the CreateKey operation. This operation supports multi-Region keys, an KMS feature that lets you create multiple interoperable KMS keys in different Amazon Web Services Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them interchangeably to encrypt data in one Amazon Web Services Region and decrypt it in a different Amazon Web Services Region without re-encrypting the data or making a cross-Region call. For more information about multi-Region keys, see Multi-Region keys in KMS in the Key Management Service Developer Guide. A replica key is a fully-functional KMS key that can be used independently of its primary and peer replica keys. A primary key and its replica keys share properties that make them interoperable. They have the same key ID and key material. They also have the same key spec, key usage, key material origin, and automatic key rotation status. KMS automatically synchronizes these shared properties among related multi-Region keys. All other properties of a replica key can differ, including its key policy, tags, aliases, and key state. KMS pricing and quotas for KMS keys apply to each primary key and replica key. When this operation completes, the new replica key has a transient key state of Creating. This key state changes to Enabled (or PendingImport) after a few seconds when the process of creating the new replica key is complete. While the key state is Creating, you can manage key, but you cannot yet use it in cryptographic operations. If you are creating and using the replica key programmatically, retry on KMSInvalidStateException or call DescribeKey to check its KeyState value before using it. For details about the Creating key state, see Key states of KMS keys in the Key Management Service Developer Guide. You cannot create more than one replica of a primary key in any Region. If the Region already includes a replica of the key you're trying to replicate, ReplicateKey returns an AlreadyExistsException error. If the key state of the existing replica is PendingDeletion, you can cancel the scheduled key deletion (CancelKeyDeletion) or wait for the key to be deleted. The new replica key you create will have the same shared properties as the original replica key. The CloudTrail log of a ReplicateKey operation records a ReplicateKey operation in the primary key's Region and a CreateKey operation in the replica key's Region. If you replicate a multi-Region primary key with imported key material, the replica key is created with no key material. You must import the same key material that you imported into the primary key. To convert a replica key to a primary key, use the UpdatePrimaryRegion operation. ReplicateKey uses different default values for the KeyPolicy and Tags parameters than those used in the KMS console. For details, see the parameter descriptions. Cross-account use: No. You cannot use this operation to create a replica key in a different Amazon Web Services account. Required permissions: kms:ReplicateKey on the primary key (in the primary key's Region). Include this permission in the primary key's key policy. kms:CreateKey in an IAM policy in the replica Region. To use the Tags parameter, kms:TagResource in an IAM policy in the replica Region. Related operations CreateKey UpdatePrimaryRegion Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.replicate_key 
@region='{{ region }}' --required 
@@json=
'{
"KeyId": "{{ KeyId }}", 
"ReplicaRegion": "{{ ReplicaRegion }}", 
"Policy": "{{ Policy }}", 
"BypassPolicyLockoutSafetyCheck": {{ BypassPolicyLockoutSafetyCheck }}, 
"Description": "{{ Description }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
<TabItem value="rotate_key_on_demand">

Immediately initiates rotation of the key material of the specified symmetric encryption KMS key. You can perform on-demand rotation of the key material in customer managed KMS keys, regardless of whether or not automatic key rotation is enabled. On-demand rotations do not change existing automatic rotation schedules. For example, consider a KMS key that has automatic key rotation enabled with a rotation period of 730 days. If the key is scheduled to automatically rotate on April 14, 2024, and you perform an on-demand rotation on April 10, 2024, the key will automatically rotate, as scheduled, on April 14, 2024 and every 730 days thereafter. You can perform on-demand key rotation a maximum of 25 times per KMS key. You can use the KMS console to view the number of remaining on-demand rotations available for a KMS key. You can use GetKeyRotationStatus to identify any in progress on-demand rotations. You can use ListKeyRotations to identify the date that completed on-demand rotations were performed. You can monitor rotation of the key material for your KMS keys in CloudTrail and Amazon CloudWatch. On-demand key rotation is supported only on symmetric encryption KMS keys. You cannot perform on-demand rotation of asymmetric KMS keys, HMAC KMS keys, or KMS keys in a custom key store. When you initiate on-demand key rotation on a symmetric encryption KMS key with imported key material, you must have already imported new key material and that key material's state should be PENDING_ROTATION. Use the ListKeyRotations operation to check the state of all key materials associated with a KMS key. To perform on-demand rotation of a set of related multi-Region keys, import new key material in the primary Region key, import the same key material in each replica Region key, and invoke the on-demand rotation on the primary Region key. You cannot initiate on-demand rotation of Amazon Web Services managed KMS keys. KMS always rotates the key material of Amazon Web Services managed keys every year. Rotation of Amazon Web Services owned KMS keys is managed by the Amazon Web Services service that owns the key. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:RotateKeyOnDemand (key policy) Related operations: EnableKeyRotation DisableKeyRotation GetKeyRotationStatus ImportKeyMaterial ListKeyRotations Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.rotate_key_on_demand 
@region='{{ region }}' --required 
@@json=
'{
"KeyId": "{{ KeyId }}"
}'
;
```
</TabItem>
<TabItem value="schedule_key_deletion">

Schedules the deletion of a KMS key. By default, KMS applies a waiting period of 30 days, but you can specify a waiting period of 7-30 days. When this operation is successful, the key state of the KMS key changes to PendingDeletion and the key can't be used in any cryptographic operations. It remains in this state for the duration of the waiting period. Before the waiting period ends, you can use CancelKeyDeletion to cancel the deletion of the KMS key. After the waiting period ends, KMS deletes the KMS key, its key material, and all KMS data associated with it, including all aliases that refer to it. Deleting a KMS key is a destructive and potentially dangerous operation. When a KMS key is deleted, all data that was encrypted under the KMS key is unrecoverable. (The only exception is a multi-Region replica key, or an asymmetric or HMAC KMS key with imported key material.) To prevent the use of a KMS key without deleting it, use DisableKey. You can schedule the deletion of a multi-Region primary key and its replica keys at any time. However, KMS will not delete a multi-Region primary key with existing replica keys. If you schedule the deletion of a primary key with replicas, its key state changes to PendingReplicaDeletion and it cannot be replicated or used in cryptographic operations. This status can continue indefinitely. When the last of its replicas keys is deleted (not just scheduled), the key state of the primary key changes to PendingDeletion and its waiting period (PendingWindowInDays) begins. For details, see Deleting multi-Region keys in the Key Management Service Developer Guide. When KMS deletes a KMS key from an CloudHSM key store, it makes a best effort to delete the associated key material from the associated CloudHSM cluster. However, you might need to manually delete the orphaned key material from the cluster and its backups. Deleting a KMS key from an external key store has no effect on the associated external key. However, for both types of custom key stores, deleting a KMS key is destructive and irreversible. You cannot decrypt ciphertext encrypted under the KMS key by using only its associated external key or CloudHSM key. Also, you cannot recreate a KMS key in an external key store by creating a new KMS key with the same key material. For more information about scheduling a KMS key for deletion, see Deleting KMS keys in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:ScheduleKeyDeletion (key policy) Related operations CancelKeyDeletion DisableKey Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.schedule_key_deletion 
@region='{{ region }}' --required 
@@json=
'{
"KeyId": "{{ KeyId }}", 
"PendingWindowInDays": {{ PendingWindowInDays }}
}'
;
```
</TabItem>
<TabItem value="sign">

Creates a digital signature for a message or message digest by using the private key in an asymmetric signing KMS key. To verify the signature, use the Verify operation, or use the public key in the same asymmetric KMS key outside of KMS. For information about asymmetric KMS keys, see Asymmetric KMS keys in the Key Management Service Developer Guide. Digital signatures are generated and verified by using asymmetric key pair, such as an RSA, ECC, or ML-DSA pair that is represented by an asymmetric KMS key. The key owner (or an authorized user) uses their private key to sign a message. Anyone with the public key can verify that the message was signed with that particular private key and that the message hasn't changed since it was signed. To use the Sign operation, provide the following information: Use the KeyId parameter to identify an asymmetric KMS key with a KeyUsage value of SIGN_VERIFY. To get the KeyUsage value of a KMS key, use the DescribeKey operation. The caller must have kms:Sign permission on the KMS key. Use the Message parameter to specify the message or message digest to sign. You can submit messages of up to 4096 bytes. To sign a larger message, generate a hash digest of the message, and then provide the hash digest in the Message parameter. To indicate whether the message is a full message, a digest, or an ML-DSA EXTERNAL_MU, use the MessageType parameter. Choose a signing algorithm that is compatible with the KMS key. When signing a message, be sure to record the KMS key and the signing algorithm. This information is required to verify the signature. Best practices recommend that you limit the time during which any signature is effective. This deters an attack where the actor uses a signed message to establish validity repeatedly or long after the message is superseded. Signatures do not include a timestamp, but you can include a timestamp in the signed message to help you detect when its time to refresh the signature. To verify the signature that this operation generates, use the Verify operation. Or use the GetPublicKey operation to download the public key and then use the public key to verify the signature outside of KMS. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:Sign (key policy) Related operations: Verify Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.sign 
@region='{{ region }}' --required 
@@json=
'{
"KeyId": "{{ KeyId }}", 
"Message": "{{ Message }}", 
"MessageType": "{{ MessageType }}", 
"GrantTokens": "{{ GrantTokens }}", 
"SigningAlgorithm": "{{ SigningAlgorithm }}", 
"DryRun": {{ DryRun }}
}'
;
```
</TabItem>
<TabItem value="verify">

Verifies a digital signature that was generated by the Sign operation. Verification confirms that an authorized user signed the message with the specified KMS key and signing algorithm, and the message hasn't changed since it was signed. If the signature is verified, the value of the SignatureValid field in the response is True. If the signature verification fails, the Verify operation fails with an KMSInvalidSignatureException exception. A digital signature is generated by using the private key in an asymmetric KMS key. The signature is verified by using the public key in the same asymmetric KMS key. For information about asymmetric KMS keys, see Asymmetric KMS keys in the Key Management Service Developer Guide. To use the Verify operation, specify the same asymmetric KMS key, message, and signing algorithm that were used to produce the signature. The message type does not need to be the same as the one used for signing, but it must indicate whether the value of the Message parameter should be hashed as part of the verification process. You can also verify the digital signature by using the public key of the KMS key outside of KMS. Use the GetPublicKey operation to download the public key in the asymmetric KMS key and then use the public key to verify the signature outside of KMS. The advantage of using the Verify operation is that it is performed within KMS. As a result, it's easy to call, the operation is performed within the FIPS boundary, it is logged in CloudTrail, and you can use key policy and IAM policy to determine who is authorized to use the KMS key to verify signatures. To verify a signature outside of KMS with an SM2 public key (China Regions only), you must specify the distinguishing ID. By default, KMS uses 1234567812345678 as the distinguishing ID. For more information, see Offline verification with SM2 key pairs. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:Verify (key policy) Related operations: Sign Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.verify 
@region='{{ region }}' --required 
@@json=
'{
"KeyId": "{{ KeyId }}", 
"Message": "{{ Message }}", 
"MessageType": "{{ MessageType }}", 
"Signature": "{{ Signature }}", 
"SigningAlgorithm": "{{ SigningAlgorithm }}", 
"GrantTokens": "{{ GrantTokens }}", 
"DryRun": {{ DryRun }}
}'
;
```
</TabItem>
<TabItem value="verify_mac">

Verifies the hash-based message authentication code (HMAC) for a specified message, HMAC KMS key, and MAC algorithm. To verify the HMAC, VerifyMac computes an HMAC using the message, HMAC KMS key, and MAC algorithm that you specify, and compares the computed HMAC to the HMAC that you specify. If the HMACs are identical, the verification succeeds; otherwise, it fails. Verification indicates that the message hasn't changed since the HMAC was calculated, and the specified key was used to generate and verify the HMAC. HMAC KMS keys and the HMAC algorithms that KMS uses conform to industry standards defined in RFC 2104. This operation is part of KMS support for HMAC KMS keys. For details, see HMAC keys in KMS in the Key Management Service Developer Guide. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the KeyId parameter. Required permissions: kms:VerifyMac (key policy) Related operations: GenerateMac Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
EXEC aws.kms.keys.verify_mac 
@region='{{ region }}' --required 
@@json=
'{
"Message": "{{ Message }}", 
"KeyId": "{{ KeyId }}", 
"MacAlgorithm": "{{ MacAlgorithm }}", 
"Mac": "{{ Mac }}", 
"GrantTokens": "{{ GrantTokens }}", 
"DryRun": {{ DryRun }}
}'
;
```
</TabItem>
</Tabs>
