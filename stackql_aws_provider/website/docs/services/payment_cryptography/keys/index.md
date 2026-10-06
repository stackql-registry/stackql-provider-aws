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
    <td><a href="#export_key"><CopyableCode code="export_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyMaterial"><code>KeyMaterial</code></a>, <a href="#parameter-ExportKeyIdentifier"><code>ExportKeyIdentifier</code></a></td>
    <td></td>
    <td>Exports a key from Amazon Web Services Payment Cryptography. Amazon Web Services Payment Cryptography simplifies key exchange by replacing the existing paper-based approach with a modern electronic approach. With ExportKey you can export symmetric keys using either symmetric and asymmetric key exchange mechanisms. Using this operation, you can share your Amazon Web Services Payment Cryptography generated keys with other service partners to perform cryptographic operations outside of Amazon Web Services Payment Cryptography For symmetric key exchange, Amazon Web Services Payment Cryptography uses the ANSI X9 TR-31 norm in accordance with PCI PIN guidelines. And for asymmetric key exchange, Amazon Web Services Payment Cryptography supports ANSI X9 TR-34 norm, RSA unwrap, and ECDH (Elliptic Curve Diffie-Hellman) key exchange mechanisms. Asymmetric key exchange methods are typically used to establish bi-directional trust between the two parties exhanging keys and are used for initial key exchange such as Key Encryption Key (KEK). After which you can export working keys using symmetric method to perform various cryptographic operations within Amazon Web Services Payment Cryptography. PCI requires specific minimum key strength of wrapping keys used to protect the keys being exchanged electronically. These requirements can change when PCI standards are revised. The rules specify that wrapping keys used for transport must be at least as strong as the key being protected. For more information on recommended key strength of wrapping keys and key exchange mechanism, see Importing and exporting keys in the Amazon Web Services Payment Cryptography User Guide. You can also use ExportKey functionality to generate and export an IPEK (Initial Pin Encryption Key) from Amazon Web Services Payment Cryptography using either TR-31 or TR-34 export key exchange. IPEK is generated from BDK (Base Derivation Key) and ExportDukptInitialKey attribute KSN (KeySerialNumber). The generated IPEK does not persist within Amazon Web Services Payment Cryptography and has to be re-generated each time during export. For key exchange using TR-31 or TR-34 key blocks, you can also export optional blocks within the key block header which contain additional attribute information about the key. The KeyVersion within KeyBlockHeaders indicates the version of the key within the key block. Furthermore, KeyExportability within KeyBlockHeaders can be used to further restrict exportability of the key after export from Amazon Web Services Payment Cryptography. The OptionalBlocks contain the additional data related to the key. For information on data type that can be included within optional blocks, refer to ASC X9.143-2022. Data included in key block headers is signed but transmitted in clear text. Sensitive or confidential information should not be included in optional blocks. Refer to ASC X9.143-2022 standard for information on allowed data type. To export initial keys (KEK) or IPEK using TR-34 Using this operation, you can export initial key using TR-34 asymmetric key exchange. You can only export KEK generated within Amazon Web Services Payment Cryptography. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Device (KRD). During key export process, KDH is Amazon Web Services Payment Cryptography which initiates key export and KRD is the user receiving the key. To initiate TR-34 key export, the KRD must obtain an export token by calling GetParametersForExport. This operation also generates a key pair for the purpose of key export, signs the key and returns back the signing public key certificate (also known as KDH signing certificate) and root certificate chain. The KDH uses the private key to sign the the export payload and the signing public key certificate is provided to KRD to verify the signature. The KRD can import the root certificate into its Hardware Security Module (HSM), as required. The export token and the associated KDH signing certificate expires after 30 days. Next the KRD generates a key pair for the the purpose of encrypting the KDH key and provides the public key cerificate (also known as KRD wrapping certificate) back to KDH. The KRD will also import the root cerificate chain into Amazon Web Services Payment Cryptography by calling ImportKey for RootCertificatePublicKey. The KDH, Amazon Web Services Payment Cryptography, will use the KRD wrapping cerificate to encrypt (wrap) the key under export and signs it with signing private key to generate a TR-34 WrappedKeyBlock. For more information on TR-34 key export, see section Exporting symmetric keys in the Amazon Web Services Payment Cryptography User Guide. Set the following parameters: ExportAttributes: Specify export attributes in case of IPEK export. This parameter is optional for KEK export. ExportKeyIdentifier: The KeyARN of the KEK or BDK (in case of IPEK) under export. KeyMaterial: Use Tr34KeyBlock parameters. CertificateAuthorityPublicKeyIdentifier: The KeyARN of the certificate chain that signed the KRD wrapping key certificate. ExportToken: Obtained from KDH by calling GetParametersForImport. WrappingKeyCertificate: The public key certificate in PEM format (base64 encoded) of the KRD wrapping key Amazon Web Services Payment Cryptography uses for encryption of the TR-34 export payload. This certificate must be signed by the root certificate (CertificateAuthorityPublicKeyIdentifier) imported into Amazon Web Services Payment Cryptography. When this operation is successful, Amazon Web Services Payment Cryptography returns the KEK or IPEK as a TR-34 WrappedKeyBlock. To export initial keys (KEK) or IPEK using RSA Wrap and Unwrap Using this operation, you can export initial key using asymmetric RSA wrap and unwrap key exchange method. To initiate export, generate an asymmetric key pair on the receiving HSM and obtain the public key certificate in PEM format (base64 encoded) for the purpose of wrapping and the root certifiate chain. Import the root certificate into Amazon Web Services Payment Cryptography by calling ImportKey for RootCertificatePublicKey. Next call ExportKey and set the following parameters: CertificateAuthorityPublicKeyIdentifier: The KeyARN of the certificate chain that signed wrapping key certificate. KeyMaterial: Set to KeyCryptogram. WrappingKeyCertificate: The public key certificate in PEM format (base64 encoded) obtained by the receiving HSM and signed by the root certificate (CertificateAuthorityPublicKeyIdentifier) imported into Amazon Web Services Payment Cryptography. The receiving HSM uses its private key component to unwrap the WrappedKeyCryptogram. When this operation is successful, Amazon Web Services Payment Cryptography returns the WrappedKeyCryptogram. To export working keys or IPEK using TR-31 Using this operation, you can export working keys or IPEK using TR-31 symmetric key exchange. In TR-31, you must use an initial key such as KEK to encrypt or wrap the key under export. To establish a KEK, you can use CreateKey or ImportKey. Set the following parameters: ExportAttributes: Specify export attributes in case of IPEK export. This parameter is optional for KEK export. ExportKeyIdentifier: The KeyARN of the KEK or BDK (in case of IPEK) under export. KeyMaterial: Use Tr31KeyBlock parameters. To export working keys using ECDH You can also use ECDH key agreement to export working keys in a TR-31 keyblock, where the wrapping key is an ECDH derived key. To initiate a TR-31 key export using ECDH, both sides must create an ECC key pair with key usage K3 and exchange public key certificates. In Amazon Web Services Payment Cryptography, you can do this by calling CreateKey. If you have not already done so, you must import the CA chain that issued the receiving public key certificate by calling ImportKey with input RootCertificatePublicKey for root CA or TrustedPublicKey for intermediate CA. You can then complete a TR-31 key export by deriving a shared wrapping key using the service ECC key pair, public certificate of your ECC key pair outside of Amazon Web Services Payment Cryptography, and the key derivation parameters including key derivation function, hash algorithm, derivation data, key algorithm. KeyMaterial: Use DiffieHellmanTr31KeyBlock parameters. PrivateKeyIdentifier: The KeyArn of the ECC key pair created within Amazon Web Services Payment Cryptography to derive a shared KEK. PublicKeyCertificate: The public key certificate of the receiving ECC key pair in PEM format (base64 encoded) to derive a shared KEK. CertificateAuthorityPublicKeyIdentifier: The keyARN of the CA that signed the public key certificate of the receiving ECC key pair. When this operation is successful, Amazon Web Services Payment Cryptography returns the working key as a TR-31 WrappedKeyBlock, where the wrapping key is the ECDH derived key. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: GetParametersForExport ImportKey</td>
</tr>
<tr>
    <td><a href="#import_key"><CopyableCode code="import_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyMaterial"><code>KeyMaterial</code></a></td>
    <td></td>
    <td>Imports symmetric keys and public key certificates in PEM format (base64 encoded) into Amazon Web Services Payment Cryptography. Amazon Web Services Payment Cryptography simplifies key exchange by replacing the existing paper-based approach with a modern electronic approach. With ImportKey you can import symmetric keys using either symmetric and asymmetric key exchange mechanisms. For symmetric key exchange, Amazon Web Services Payment Cryptography uses the ANSI X9 TR-31 norm in accordance with PCI PIN guidelines. And for asymmetric key exchange, Amazon Web Services Payment Cryptography supports ANSI X9 TR-34 norm, RSA unwrap, and ECDH (Elliptic Curve Diffie-Hellman) key exchange mechanisms. Asymmetric key exchange methods are typically used to establish bi-directional trust between the two parties exhanging keys and are used for initial key exchange such as Key Encryption Key (KEK) or Zone Master Key (ZMK). After which you can import working keys using symmetric method to perform various cryptographic operations within Amazon Web Services Payment Cryptography. PCI requires specific minimum key strength of wrapping keys used to protect the keys being exchanged electronically. These requirements can change when PCI standards are revised. The rules specify that wrapping keys used for transport must be at least as strong as the key being protected. For more information on recommended key strength of wrapping keys and key exchange mechanism, see Importing and exporting keys in the Amazon Web Services Payment Cryptography User Guide. You can also import a root public key certificate, used to sign other public key certificates, or a trusted public key certificate under an already established root public key certificate. To import a public root key certificate Using this operation, you can import the public component (in PEM cerificate format) of your private root key. You can use the imported public root key certificate for digital signatures, for example signing wrapping key or signing key in TR-34, within your Amazon Web Services Payment Cryptography account. Set the following parameters: KeyMaterial: RootCertificatePublicKey KeyClass: PUBLIC_KEY KeyModesOfUse: Verify KeyUsage: TR31_S0_ASYMMETRIC_KEY_FOR_DIGITAL_SIGNATURE PublicKeyCertificate: The public key certificate in PEM format (base64 encoded) of the private root key under import. To import a trusted public key certificate The root public key certificate must be in place and operational before you import a trusted public key certificate. Set the following parameters: KeyMaterial: TrustedCertificatePublicKey CertificateAuthorityPublicKeyIdentifier: KeyArn of the RootCertificatePublicKey. KeyModesOfUse and KeyUsage: Corresponding to the cryptographic operations such as wrap, sign, or encrypt that you will allow the trusted public key certificate to perform. PublicKeyCertificate: The trusted public key certificate in PEM format (base64 encoded) under import. To import initial keys (KEK or ZMK or similar) using TR-34 Using this operation, you can import initial key using TR-34 asymmetric key exchange. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Device (KRD). During the key import process, KDH is the user who initiates the key import and KRD is Amazon Web Services Payment Cryptography who receives the key. To initiate TR-34 key import, the KDH must obtain an import token by calling GetParametersForImport. This operation generates an encryption keypair for the purpose of key import, signs the key and returns back the wrapping key certificate (also known as KRD wrapping certificate) and the root certificate chain. The KDH must trust and install the KRD wrapping certificate on its HSM and use it to encrypt (wrap) the KDH key during TR-34 WrappedKeyBlock generation. The import token and associated KRD wrapping certificate expires after 30 days. Next the KDH generates a key pair for the purpose of signing the encrypted KDH key and provides the public certificate of the signing key to Amazon Web Services Payment Cryptography. The KDH will also need to import the root certificate chain of the KDH signing certificate by calling ImportKey for RootCertificatePublicKey. For more information on TR-34 key import, see section Importing symmetric keys in the Amazon Web Services Payment Cryptography User Guide. Set the following parameters: KeyMaterial: Use Tr34KeyBlock parameters. CertificateAuthorityPublicKeyIdentifier: The KeyARN of the certificate chain that signed the KDH signing key certificate. ImportToken: Obtained from KRD by calling GetParametersForImport. WrappedKeyBlock: The TR-34 wrapped key material from KDH. It contains the KDH key under import, wrapped with KRD wrapping certificate and signed by KDH signing private key. This TR-34 key block is typically generated by the KDH Hardware Security Module (HSM) outside of Amazon Web Services Payment Cryptography. SigningKeyCertificate: The public key certificate in PEM format (base64 encoded) of the KDH signing key generated under the root certificate (CertificateAuthorityPublicKeyIdentifier) imported in Amazon Web Services Payment Cryptography. To import initial keys (KEK or ZMK or similar) using RSA Wrap and Unwrap Using this operation, you can import initial key using asymmetric RSA wrap and unwrap key exchange method. To initiate import, call GetParametersForImport with KeyMaterial set to KEY_CRYPTOGRAM to generate an import token. This operation also generates an encryption keypair for the purpose of key import, signs the key and returns back the wrapping key certificate in PEM format (base64 encoded) and its root certificate chain. The import token and associated KRD wrapping certificate expires after 30 days. You must trust and install the wrapping certificate and its certificate chain on the sending HSM and use it to wrap the key under export for WrappedKeyCryptogram generation. Next call ImportKey with KeyMaterial set to KEY_CRYPTOGRAM and provide the ImportToken and KeyAttributes for the key under import. To import working keys using TR-31 Amazon Web Services Payment Cryptography uses TR-31 symmetric key exchange norm to import working keys. A KEK must be established within Amazon Web Services Payment Cryptography by using TR-34 key import or by using CreateKey. To initiate a TR-31 key import, set the following parameters: KeyMaterial: Use Tr31KeyBlock parameters. WrappedKeyBlock: The TR-31 wrapped key material. It contains the key under import, encrypted using KEK. The TR-31 key block is typically generated by a HSM outside of Amazon Web Services Payment Cryptography. WrappingKeyIdentifier: The KeyArn of the KEK that Amazon Web Services Payment Cryptography uses to decrypt or unwrap the key under import. To import working keys using ECDH You can also use ECDH key agreement to import working keys as a TR-31 keyblock, where the wrapping key is an ECDH derived key. To initiate a TR-31 key import using ECDH, both sides must create an ECC key pair with key usage K3 and exchange public key certificates. In Amazon Web Services Payment Cryptography, you can do this by calling CreateKey and then GetPublicKeyCertificate to retrieve its public key certificate. Next, you can then generate a TR-31 WrappedKeyBlock using your own ECC key pair, the public certificate of the service's ECC key pair, and the key derivation parameters including key derivation function, hash algorithm, derivation data, and key algorithm. If you have not already done so, you must import the CA chain that issued the receiving public key certificate by calling ImportKey with input RootCertificatePublicKey for root CA or TrustedPublicKey for intermediate CA. To complete the TR-31 key import, you can use the following parameters. It is important that the ECDH key derivation parameters you use should match those used during import to derive the same shared wrapping key within Amazon Web Services Payment Cryptography. KeyMaterial: Use DiffieHellmanTr31KeyBlock parameters. PrivateKeyIdentifier: The KeyArn of the ECC key pair created within Amazon Web Services Payment Cryptography to derive a shared KEK. PublicKeyCertificate: The public key certificate of the receiving ECC key pair in PEM format (base64 encoded) to derive a shared KEK. CertificateAuthorityPublicKeyIdentifier: The keyARN of the CA that signed the public key certificate of the receiving ECC key pair. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: ExportKey GetParametersForImport</td>
</tr>
<tr>
    <td><a href="#remove_key_replication_regions"><CopyableCode code="remove_key_replication_regions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyIdentifier"><code>KeyIdentifier</code></a>, <a href="#parameter-ReplicationRegions"><code>ReplicationRegions</code></a></td>
    <td></td>
    <td>Removes Replication Regions from an existing Amazon Web Services Payment Cryptography key, disabling the key's availability for cryptographic operations in the specified Amazon Web Services Regions. When you remove Replication Regions, the key material is securely deleted from those regions and can no longer be used for cryptographic operations there. This operation is irreversible for the specified Amazon Web Services Regions. For more information, see Multi-Region key replication. Ensure that no active cryptographic operations or applications depend on the key in the regions you're removing before performing this operation. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: AddKeyReplicationRegions DisableDefaultKeyReplicationRegions</td>
</tr>
<tr>
    <td><a href="#restore_key"><CopyableCode code="restore_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyIdentifier"><code>KeyIdentifier</code></a></td>
    <td></td>
    <td>Cancels a scheduled key deletion during the waiting period. Use this operation to restore a Key that is scheduled for deletion. During the waiting period, the KeyState is DELETE_PENDING and deletePendingTimestamp contains the date and time after which the Key will be deleted. After Key is restored, the KeyState is CREATE_COMPLETE, and the value for deletePendingTimestamp is removed. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: DeleteKey StartKeyUsage StopKeyUsage</td>
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
    defaultValue="export_key"
    values={[
        { label: 'export_key', value: 'export_key' },
        { label: 'import_key', value: 'import_key' },
        { label: 'remove_key_replication_regions', value: 'remove_key_replication_regions' },
        { label: 'restore_key', value: 'restore_key' },
        { label: 'start_key_usage', value: 'start_key_usage' },
        { label: 'stop_key_usage', value: 'stop_key_usage' }
    ]}
>
<TabItem value="export_key">

Exports a key from Amazon Web Services Payment Cryptography. Amazon Web Services Payment Cryptography simplifies key exchange by replacing the existing paper-based approach with a modern electronic approach. With ExportKey you can export symmetric keys using either symmetric and asymmetric key exchange mechanisms. Using this operation, you can share your Amazon Web Services Payment Cryptography generated keys with other service partners to perform cryptographic operations outside of Amazon Web Services Payment Cryptography For symmetric key exchange, Amazon Web Services Payment Cryptography uses the ANSI X9 TR-31 norm in accordance with PCI PIN guidelines. And for asymmetric key exchange, Amazon Web Services Payment Cryptography supports ANSI X9 TR-34 norm, RSA unwrap, and ECDH (Elliptic Curve Diffie-Hellman) key exchange mechanisms. Asymmetric key exchange methods are typically used to establish bi-directional trust between the two parties exhanging keys and are used for initial key exchange such as Key Encryption Key (KEK). After which you can export working keys using symmetric method to perform various cryptographic operations within Amazon Web Services Payment Cryptography. PCI requires specific minimum key strength of wrapping keys used to protect the keys being exchanged electronically. These requirements can change when PCI standards are revised. The rules specify that wrapping keys used for transport must be at least as strong as the key being protected. For more information on recommended key strength of wrapping keys and key exchange mechanism, see Importing and exporting keys in the Amazon Web Services Payment Cryptography User Guide. You can also use ExportKey functionality to generate and export an IPEK (Initial Pin Encryption Key) from Amazon Web Services Payment Cryptography using either TR-31 or TR-34 export key exchange. IPEK is generated from BDK (Base Derivation Key) and ExportDukptInitialKey attribute KSN (KeySerialNumber). The generated IPEK does not persist within Amazon Web Services Payment Cryptography and has to be re-generated each time during export. For key exchange using TR-31 or TR-34 key blocks, you can also export optional blocks within the key block header which contain additional attribute information about the key. The KeyVersion within KeyBlockHeaders indicates the version of the key within the key block. Furthermore, KeyExportability within KeyBlockHeaders can be used to further restrict exportability of the key after export from Amazon Web Services Payment Cryptography. The OptionalBlocks contain the additional data related to the key. For information on data type that can be included within optional blocks, refer to ASC X9.143-2022. Data included in key block headers is signed but transmitted in clear text. Sensitive or confidential information should not be included in optional blocks. Refer to ASC X9.143-2022 standard for information on allowed data type. To export initial keys (KEK) or IPEK using TR-34 Using this operation, you can export initial key using TR-34 asymmetric key exchange. You can only export KEK generated within Amazon Web Services Payment Cryptography. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Device (KRD). During key export process, KDH is Amazon Web Services Payment Cryptography which initiates key export and KRD is the user receiving the key. To initiate TR-34 key export, the KRD must obtain an export token by calling GetParametersForExport. This operation also generates a key pair for the purpose of key export, signs the key and returns back the signing public key certificate (also known as KDH signing certificate) and root certificate chain. The KDH uses the private key to sign the the export payload and the signing public key certificate is provided to KRD to verify the signature. The KRD can import the root certificate into its Hardware Security Module (HSM), as required. The export token and the associated KDH signing certificate expires after 30 days. Next the KRD generates a key pair for the the purpose of encrypting the KDH key and provides the public key cerificate (also known as KRD wrapping certificate) back to KDH. The KRD will also import the root cerificate chain into Amazon Web Services Payment Cryptography by calling ImportKey for RootCertificatePublicKey. The KDH, Amazon Web Services Payment Cryptography, will use the KRD wrapping cerificate to encrypt (wrap) the key under export and signs it with signing private key to generate a TR-34 WrappedKeyBlock. For more information on TR-34 key export, see section Exporting symmetric keys in the Amazon Web Services Payment Cryptography User Guide. Set the following parameters: ExportAttributes: Specify export attributes in case of IPEK export. This parameter is optional for KEK export. ExportKeyIdentifier: The KeyARN of the KEK or BDK (in case of IPEK) under export. KeyMaterial: Use Tr34KeyBlock parameters. CertificateAuthorityPublicKeyIdentifier: The KeyARN of the certificate chain that signed the KRD wrapping key certificate. ExportToken: Obtained from KDH by calling GetParametersForImport. WrappingKeyCertificate: The public key certificate in PEM format (base64 encoded) of the KRD wrapping key Amazon Web Services Payment Cryptography uses for encryption of the TR-34 export payload. This certificate must be signed by the root certificate (CertificateAuthorityPublicKeyIdentifier) imported into Amazon Web Services Payment Cryptography. When this operation is successful, Amazon Web Services Payment Cryptography returns the KEK or IPEK as a TR-34 WrappedKeyBlock. To export initial keys (KEK) or IPEK using RSA Wrap and Unwrap Using this operation, you can export initial key using asymmetric RSA wrap and unwrap key exchange method. To initiate export, generate an asymmetric key pair on the receiving HSM and obtain the public key certificate in PEM format (base64 encoded) for the purpose of wrapping and the root certifiate chain. Import the root certificate into Amazon Web Services Payment Cryptography by calling ImportKey for RootCertificatePublicKey. Next call ExportKey and set the following parameters: CertificateAuthorityPublicKeyIdentifier: The KeyARN of the certificate chain that signed wrapping key certificate. KeyMaterial: Set to KeyCryptogram. WrappingKeyCertificate: The public key certificate in PEM format (base64 encoded) obtained by the receiving HSM and signed by the root certificate (CertificateAuthorityPublicKeyIdentifier) imported into Amazon Web Services Payment Cryptography. The receiving HSM uses its private key component to unwrap the WrappedKeyCryptogram. When this operation is successful, Amazon Web Services Payment Cryptography returns the WrappedKeyCryptogram. To export working keys or IPEK using TR-31 Using this operation, you can export working keys or IPEK using TR-31 symmetric key exchange. In TR-31, you must use an initial key such as KEK to encrypt or wrap the key under export. To establish a KEK, you can use CreateKey or ImportKey. Set the following parameters: ExportAttributes: Specify export attributes in case of IPEK export. This parameter is optional for KEK export. ExportKeyIdentifier: The KeyARN of the KEK or BDK (in case of IPEK) under export. KeyMaterial: Use Tr31KeyBlock parameters. To export working keys using ECDH You can also use ECDH key agreement to export working keys in a TR-31 keyblock, where the wrapping key is an ECDH derived key. To initiate a TR-31 key export using ECDH, both sides must create an ECC key pair with key usage K3 and exchange public key certificates. In Amazon Web Services Payment Cryptography, you can do this by calling CreateKey. If you have not already done so, you must import the CA chain that issued the receiving public key certificate by calling ImportKey with input RootCertificatePublicKey for root CA or TrustedPublicKey for intermediate CA. You can then complete a TR-31 key export by deriving a shared wrapping key using the service ECC key pair, public certificate of your ECC key pair outside of Amazon Web Services Payment Cryptography, and the key derivation parameters including key derivation function, hash algorithm, derivation data, key algorithm. KeyMaterial: Use DiffieHellmanTr31KeyBlock parameters. PrivateKeyIdentifier: The KeyArn of the ECC key pair created within Amazon Web Services Payment Cryptography to derive a shared KEK. PublicKeyCertificate: The public key certificate of the receiving ECC key pair in PEM format (base64 encoded) to derive a shared KEK. CertificateAuthorityPublicKeyIdentifier: The keyARN of the CA that signed the public key certificate of the receiving ECC key pair. When this operation is successful, Amazon Web Services Payment Cryptography returns the working key as a TR-31 WrappedKeyBlock, where the wrapping key is the ECDH derived key. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: GetParametersForExport ImportKey

```sql
EXEC aws.payment_cryptography.keys.export_key 
@region='{{ region }}' --required 
@@json=
'{
"KeyMaterial": "{{ KeyMaterial }}", 
"ExportKeyIdentifier": "{{ ExportKeyIdentifier }}", 
"ExportAttributes": "{{ ExportAttributes }}"
}'
;
```
</TabItem>
<TabItem value="import_key">

Imports symmetric keys and public key certificates in PEM format (base64 encoded) into Amazon Web Services Payment Cryptography. Amazon Web Services Payment Cryptography simplifies key exchange by replacing the existing paper-based approach with a modern electronic approach. With ImportKey you can import symmetric keys using either symmetric and asymmetric key exchange mechanisms. For symmetric key exchange, Amazon Web Services Payment Cryptography uses the ANSI X9 TR-31 norm in accordance with PCI PIN guidelines. And for asymmetric key exchange, Amazon Web Services Payment Cryptography supports ANSI X9 TR-34 norm, RSA unwrap, and ECDH (Elliptic Curve Diffie-Hellman) key exchange mechanisms. Asymmetric key exchange methods are typically used to establish bi-directional trust between the two parties exhanging keys and are used for initial key exchange such as Key Encryption Key (KEK) or Zone Master Key (ZMK). After which you can import working keys using symmetric method to perform various cryptographic operations within Amazon Web Services Payment Cryptography. PCI requires specific minimum key strength of wrapping keys used to protect the keys being exchanged electronically. These requirements can change when PCI standards are revised. The rules specify that wrapping keys used for transport must be at least as strong as the key being protected. For more information on recommended key strength of wrapping keys and key exchange mechanism, see Importing and exporting keys in the Amazon Web Services Payment Cryptography User Guide. You can also import a root public key certificate, used to sign other public key certificates, or a trusted public key certificate under an already established root public key certificate. To import a public root key certificate Using this operation, you can import the public component (in PEM cerificate format) of your private root key. You can use the imported public root key certificate for digital signatures, for example signing wrapping key or signing key in TR-34, within your Amazon Web Services Payment Cryptography account. Set the following parameters: KeyMaterial: RootCertificatePublicKey KeyClass: PUBLIC_KEY KeyModesOfUse: Verify KeyUsage: TR31_S0_ASYMMETRIC_KEY_FOR_DIGITAL_SIGNATURE PublicKeyCertificate: The public key certificate in PEM format (base64 encoded) of the private root key under import. To import a trusted public key certificate The root public key certificate must be in place and operational before you import a trusted public key certificate. Set the following parameters: KeyMaterial: TrustedCertificatePublicKey CertificateAuthorityPublicKeyIdentifier: KeyArn of the RootCertificatePublicKey. KeyModesOfUse and KeyUsage: Corresponding to the cryptographic operations such as wrap, sign, or encrypt that you will allow the trusted public key certificate to perform. PublicKeyCertificate: The trusted public key certificate in PEM format (base64 encoded) under import. To import initial keys (KEK or ZMK or similar) using TR-34 Using this operation, you can import initial key using TR-34 asymmetric key exchange. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Device (KRD). During the key import process, KDH is the user who initiates the key import and KRD is Amazon Web Services Payment Cryptography who receives the key. To initiate TR-34 key import, the KDH must obtain an import token by calling GetParametersForImport. This operation generates an encryption keypair for the purpose of key import, signs the key and returns back the wrapping key certificate (also known as KRD wrapping certificate) and the root certificate chain. The KDH must trust and install the KRD wrapping certificate on its HSM and use it to encrypt (wrap) the KDH key during TR-34 WrappedKeyBlock generation. The import token and associated KRD wrapping certificate expires after 30 days. Next the KDH generates a key pair for the purpose of signing the encrypted KDH key and provides the public certificate of the signing key to Amazon Web Services Payment Cryptography. The KDH will also need to import the root certificate chain of the KDH signing certificate by calling ImportKey for RootCertificatePublicKey. For more information on TR-34 key import, see section Importing symmetric keys in the Amazon Web Services Payment Cryptography User Guide. Set the following parameters: KeyMaterial: Use Tr34KeyBlock parameters. CertificateAuthorityPublicKeyIdentifier: The KeyARN of the certificate chain that signed the KDH signing key certificate. ImportToken: Obtained from KRD by calling GetParametersForImport. WrappedKeyBlock: The TR-34 wrapped key material from KDH. It contains the KDH key under import, wrapped with KRD wrapping certificate and signed by KDH signing private key. This TR-34 key block is typically generated by the KDH Hardware Security Module (HSM) outside of Amazon Web Services Payment Cryptography. SigningKeyCertificate: The public key certificate in PEM format (base64 encoded) of the KDH signing key generated under the root certificate (CertificateAuthorityPublicKeyIdentifier) imported in Amazon Web Services Payment Cryptography. To import initial keys (KEK or ZMK or similar) using RSA Wrap and Unwrap Using this operation, you can import initial key using asymmetric RSA wrap and unwrap key exchange method. To initiate import, call GetParametersForImport with KeyMaterial set to KEY_CRYPTOGRAM to generate an import token. This operation also generates an encryption keypair for the purpose of key import, signs the key and returns back the wrapping key certificate in PEM format (base64 encoded) and its root certificate chain. The import token and associated KRD wrapping certificate expires after 30 days. You must trust and install the wrapping certificate and its certificate chain on the sending HSM and use it to wrap the key under export for WrappedKeyCryptogram generation. Next call ImportKey with KeyMaterial set to KEY_CRYPTOGRAM and provide the ImportToken and KeyAttributes for the key under import. To import working keys using TR-31 Amazon Web Services Payment Cryptography uses TR-31 symmetric key exchange norm to import working keys. A KEK must be established within Amazon Web Services Payment Cryptography by using TR-34 key import or by using CreateKey. To initiate a TR-31 key import, set the following parameters: KeyMaterial: Use Tr31KeyBlock parameters. WrappedKeyBlock: The TR-31 wrapped key material. It contains the key under import, encrypted using KEK. The TR-31 key block is typically generated by a HSM outside of Amazon Web Services Payment Cryptography. WrappingKeyIdentifier: The KeyArn of the KEK that Amazon Web Services Payment Cryptography uses to decrypt or unwrap the key under import. To import working keys using ECDH You can also use ECDH key agreement to import working keys as a TR-31 keyblock, where the wrapping key is an ECDH derived key. To initiate a TR-31 key import using ECDH, both sides must create an ECC key pair with key usage K3 and exchange public key certificates. In Amazon Web Services Payment Cryptography, you can do this by calling CreateKey and then GetPublicKeyCertificate to retrieve its public key certificate. Next, you can then generate a TR-31 WrappedKeyBlock using your own ECC key pair, the public certificate of the service's ECC key pair, and the key derivation parameters including key derivation function, hash algorithm, derivation data, and key algorithm. If you have not already done so, you must import the CA chain that issued the receiving public key certificate by calling ImportKey with input RootCertificatePublicKey for root CA or TrustedPublicKey for intermediate CA. To complete the TR-31 key import, you can use the following parameters. It is important that the ECDH key derivation parameters you use should match those used during import to derive the same shared wrapping key within Amazon Web Services Payment Cryptography. KeyMaterial: Use DiffieHellmanTr31KeyBlock parameters. PrivateKeyIdentifier: The KeyArn of the ECC key pair created within Amazon Web Services Payment Cryptography to derive a shared KEK. PublicKeyCertificate: The public key certificate of the receiving ECC key pair in PEM format (base64 encoded) to derive a shared KEK. CertificateAuthorityPublicKeyIdentifier: The keyARN of the CA that signed the public key certificate of the receiving ECC key pair. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: ExportKey GetParametersForImport

```sql
EXEC aws.payment_cryptography.keys.import_key 
@region='{{ region }}' --required 
@@json=
'{
"KeyMaterial": "{{ KeyMaterial }}", 
"KeyCheckValueAlgorithm": "{{ KeyCheckValueAlgorithm }}", 
"Enabled": {{ Enabled }}, 
"Tags": "{{ Tags }}", 
"ReplicationRegions": "{{ ReplicationRegions }}", 
"RequesterComment": "{{ RequesterComment }}"
}'
;
```
</TabItem>
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
<TabItem value="restore_key">

Cancels a scheduled key deletion during the waiting period. Use this operation to restore a Key that is scheduled for deletion. During the waiting period, the KeyState is DELETE_PENDING and deletePendingTimestamp contains the date and time after which the Key will be deleted. After Key is restored, the KeyState is CREATE_COMPLETE, and the value for deletePendingTimestamp is removed. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: DeleteKey StartKeyUsage StopKeyUsage

```sql
EXEC aws.payment_cryptography.keys.restore_key 
@region='{{ region }}' --required 
@@json=
'{
"KeyIdentifier": "{{ KeyIdentifier }}"
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
