--- 
title: pin_data
hide_title: false
hide_table_of_contents: false
keywords:
  - pin_data
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

Creates, updates, deletes, gets or lists a <code>pin_data</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pin_data" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography_data.pin_data" /></td></tr>
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
    <td><a href="#generate_pin_data"><CopyableCode code="generate_pin_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GenerationKeyIdentifier"><code>GenerationKeyIdentifier</code></a>, <a href="#parameter-EncryptionKeyIdentifier"><code>EncryptionKeyIdentifier</code></a>, <a href="#parameter-GenerationAttributes"><code>GenerationAttributes</code></a>, <a href="#parameter-PinBlockFormat"><code>PinBlockFormat</code></a></td>
    <td></td>
    <td>Generates pin-related data such as PIN, PIN Verification Value (PVV), PIN Block, and PIN Offset during new card issuance or reissuance. For more information, see Generate PIN data in the Amazon Web Services Payment Cryptography User Guide. PIN data is never transmitted in clear to or from Amazon Web Services Payment Cryptography. This operation generates PIN, PVV, or PIN Offset and then encrypts it using Pin Encryption Key (PEK) to create an EncryptedPinBlock for transmission from Amazon Web Services Payment Cryptography. This operation uses a separate Pin Verification Key (PVK) for VISA PVV generation. Using ECDH key exchange, you can receive cardholder selectable PINs into Amazon Web Services Payment Cryptography. The ECDH derived key protects the incoming PIN block. You can also use it for reveal PIN, wherein the generated PIN block is protected by the ECDH derived key before transmission from Amazon Web Services Payment Cryptography. For more information on establishing ECDH derived keys, see the Generating keys in the Amazon Web Services Payment Cryptography User Guide. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: GenerateCardValidationData TranslatePinData VerifyPinData</td>
</tr>
<tr>
    <td><a href="#translate_pin_data"><CopyableCode code="translate_pin_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IncomingKeyIdentifier"><code>IncomingKeyIdentifier</code></a>, <a href="#parameter-OutgoingKeyIdentifier"><code>OutgoingKeyIdentifier</code></a>, <a href="#parameter-IncomingTranslationAttributes"><code>IncomingTranslationAttributes</code></a>, <a href="#parameter-OutgoingTranslationAttributes"><code>OutgoingTranslationAttributes</code></a>, <a href="#parameter-EncryptedPinBlock"><code>EncryptedPinBlock</code></a></td>
    <td></td>
    <td>Translates encrypted PIN block from and to ISO 9564 formats 0,1,3,4. For more information, see Translate PIN data in the Amazon Web Services Payment Cryptography User Guide. PIN block translation involves changing a PIN block from one encryption key to another and optionally change its format. PIN block translation occurs entirely within the HSM boundary and PIN data never enters or leaves Amazon Web Services Payment Cryptography in clear text. The encryption key transformation can be from PEK (Pin Encryption Key) to BDK (Base Derivation Key) for DUKPT or from BDK for DUKPT to PEK. Amazon Web Services Payment Cryptography also supports use of dynamic keys and ECDH (Elliptic Curve Diffie-Hellman) based key exchange for this operation. Dynamic keys allow you to pass a PEK as a TR-31 WrappedKeyBlock. They can be used when key material is frequently rotated, such as during every card transaction, and there is need to avoid importing short-lived keys into Amazon Web Services Payment Cryptography. To translate PIN block using dynamic keys, the keyARN is the Key Encryption Key (KEK) of the TR-31 wrapped PEK. The incoming wrapped key shall have a key purpose of P0 with a mode of use of B or D. For more information, see Using Dynamic Keys in the Amazon Web Services Payment Cryptography User Guide. Using ECDH key exchange, you can receive cardholder selectable PINs into Amazon Web Services Payment Cryptography. The ECDH derived key protects the incoming PIN block, which is translated to a PEK encrypted PIN block for use within the service. You can also use ECDH for reveal PIN, wherein the service translates the PIN block from PEK to a ECDH derived encryption key. For more information on establishing ECDH derived keys, see the Creating keys in the Amazon Web Services Payment Cryptography User Guide. The allowed combinations of PIN block format translations are guided by PCI. It is important to note that not all encrypted PIN block formats (example, format 1) require PAN (Primary Account Number) as input. And as such, PIN block format that requires PAN (example, formats 0,3,4) cannot be translated to a format (format 1) that does not require a PAN for generation. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Amazon Web Services Payment Cryptography currently supports ISO PIN block 4 translation for PIN block built using legacy PAN length. That is, PAN is the right most 12 digits excluding the check digits. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: GeneratePinData VerifyPinData</td>
</tr>
<tr>
    <td><a href="#verify_pin_data"><CopyableCode code="verify_pin_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VerificationKeyIdentifier"><code>VerificationKeyIdentifier</code></a>, <a href="#parameter-EncryptionKeyIdentifier"><code>EncryptionKeyIdentifier</code></a>, <a href="#parameter-VerificationAttributes"><code>VerificationAttributes</code></a>, <a href="#parameter-EncryptedPinBlock"><code>EncryptedPinBlock</code></a>, <a href="#parameter-PinBlockFormat"><code>PinBlockFormat</code></a></td>
    <td></td>
    <td>Verifies pin-related data such as PIN and PIN Offset using algorithms including VISA PVV and IBM3624. For more information, see Verify PIN data in the Amazon Web Services Payment Cryptography User Guide. This operation verifies PIN data for user payment card. A card holder PIN data is never transmitted in clear to or from Amazon Web Services Payment Cryptography. This operation uses PIN Verification Key (PVK) for PIN or PIN Offset generation and then encrypts it using PIN Encryption Key (PEK) to create an EncryptedPinBlock for transmission from Amazon Web Services Payment Cryptography. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: GeneratePinData TranslatePinData</td>
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
    defaultValue="generate_pin_data"
    values={[
        { label: 'generate_pin_data', value: 'generate_pin_data' },
        { label: 'translate_pin_data', value: 'translate_pin_data' },
        { label: 'verify_pin_data', value: 'verify_pin_data' }
    ]}
>
<TabItem value="generate_pin_data">

Generates pin-related data such as PIN, PIN Verification Value (PVV), PIN Block, and PIN Offset during new card issuance or reissuance. For more information, see Generate PIN data in the Amazon Web Services Payment Cryptography User Guide. PIN data is never transmitted in clear to or from Amazon Web Services Payment Cryptography. This operation generates PIN, PVV, or PIN Offset and then encrypts it using Pin Encryption Key (PEK) to create an EncryptedPinBlock for transmission from Amazon Web Services Payment Cryptography. This operation uses a separate Pin Verification Key (PVK) for VISA PVV generation. Using ECDH key exchange, you can receive cardholder selectable PINs into Amazon Web Services Payment Cryptography. The ECDH derived key protects the incoming PIN block. You can also use it for reveal PIN, wherein the generated PIN block is protected by the ECDH derived key before transmission from Amazon Web Services Payment Cryptography. For more information on establishing ECDH derived keys, see the Generating keys in the Amazon Web Services Payment Cryptography User Guide. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: GenerateCardValidationData TranslatePinData VerifyPinData

```sql
EXEC aws.payment_cryptography_data.pin_data.generate_pin_data 
@region='{{ region }}' --required 
@@json=
'{
"GenerationKeyIdentifier": "{{ GenerationKeyIdentifier }}", 
"EncryptionKeyIdentifier": "{{ EncryptionKeyIdentifier }}", 
"GenerationAttributes": "{{ GenerationAttributes }}", 
"PinDataLength": {{ PinDataLength }}, 
"PrimaryAccountNumber": "{{ PrimaryAccountNumber }}", 
"PinBlockFormat": "{{ PinBlockFormat }}", 
"EncryptionWrappedKey": "{{ EncryptionWrappedKey }}"
}'
;
```
</TabItem>
<TabItem value="translate_pin_data">

Translates encrypted PIN block from and to ISO 9564 formats 0,1,3,4. For more information, see Translate PIN data in the Amazon Web Services Payment Cryptography User Guide. PIN block translation involves changing a PIN block from one encryption key to another and optionally change its format. PIN block translation occurs entirely within the HSM boundary and PIN data never enters or leaves Amazon Web Services Payment Cryptography in clear text. The encryption key transformation can be from PEK (Pin Encryption Key) to BDK (Base Derivation Key) for DUKPT or from BDK for DUKPT to PEK. Amazon Web Services Payment Cryptography also supports use of dynamic keys and ECDH (Elliptic Curve Diffie-Hellman) based key exchange for this operation. Dynamic keys allow you to pass a PEK as a TR-31 WrappedKeyBlock. They can be used when key material is frequently rotated, such as during every card transaction, and there is need to avoid importing short-lived keys into Amazon Web Services Payment Cryptography. To translate PIN block using dynamic keys, the keyARN is the Key Encryption Key (KEK) of the TR-31 wrapped PEK. The incoming wrapped key shall have a key purpose of P0 with a mode of use of B or D. For more information, see Using Dynamic Keys in the Amazon Web Services Payment Cryptography User Guide. Using ECDH key exchange, you can receive cardholder selectable PINs into Amazon Web Services Payment Cryptography. The ECDH derived key protects the incoming PIN block, which is translated to a PEK encrypted PIN block for use within the service. You can also use ECDH for reveal PIN, wherein the service translates the PIN block from PEK to a ECDH derived encryption key. For more information on establishing ECDH derived keys, see the Creating keys in the Amazon Web Services Payment Cryptography User Guide. The allowed combinations of PIN block format translations are guided by PCI. It is important to note that not all encrypted PIN block formats (example, format 1) require PAN (Primary Account Number) as input. And as such, PIN block format that requires PAN (example, formats 0,3,4) cannot be translated to a format (format 1) that does not require a PAN for generation. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Amazon Web Services Payment Cryptography currently supports ISO PIN block 4 translation for PIN block built using legacy PAN length. That is, PAN is the right most 12 digits excluding the check digits. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: GeneratePinData VerifyPinData

```sql
EXEC aws.payment_cryptography_data.pin_data.translate_pin_data 
@region='{{ region }}' --required 
@@json=
'{
"IncomingKeyIdentifier": "{{ IncomingKeyIdentifier }}", 
"OutgoingKeyIdentifier": "{{ OutgoingKeyIdentifier }}", 
"IncomingTranslationAttributes": "{{ IncomingTranslationAttributes }}", 
"OutgoingTranslationAttributes": "{{ OutgoingTranslationAttributes }}", 
"EncryptedPinBlock": "{{ EncryptedPinBlock }}", 
"IncomingDukptAttributes": "{{ IncomingDukptAttributes }}", 
"OutgoingDukptAttributes": "{{ OutgoingDukptAttributes }}", 
"IncomingWrappedKey": "{{ IncomingWrappedKey }}", 
"OutgoingWrappedKey": "{{ OutgoingWrappedKey }}", 
"IncomingAs2805Attributes": "{{ IncomingAs2805Attributes }}"
}'
;
```
</TabItem>
<TabItem value="verify_pin_data">

Verifies pin-related data such as PIN and PIN Offset using algorithms including VISA PVV and IBM3624. For more information, see Verify PIN data in the Amazon Web Services Payment Cryptography User Guide. This operation verifies PIN data for user payment card. A card holder PIN data is never transmitted in clear to or from Amazon Web Services Payment Cryptography. This operation uses PIN Verification Key (PVK) for PIN or PIN Offset generation and then encrypts it using PIN Encryption Key (PEK) to create an EncryptedPinBlock for transmission from Amazon Web Services Payment Cryptography. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: GeneratePinData TranslatePinData

```sql
EXEC aws.payment_cryptography_data.pin_data.verify_pin_data 
@region='{{ region }}' --required 
@@json=
'{
"VerificationKeyIdentifier": "{{ VerificationKeyIdentifier }}", 
"EncryptionKeyIdentifier": "{{ EncryptionKeyIdentifier }}", 
"VerificationAttributes": "{{ VerificationAttributes }}", 
"EncryptedPinBlock": "{{ EncryptedPinBlock }}", 
"PrimaryAccountNumber": "{{ PrimaryAccountNumber }}", 
"PinBlockFormat": "{{ PinBlockFormat }}", 
"PinDataLength": {{ PinDataLength }}, 
"DukptAttributes": "{{ DukptAttributes }}", 
"EncryptionWrappedKey": "{{ EncryptionWrappedKey }}"
}'
;
```
</TabItem>
</Tabs>
