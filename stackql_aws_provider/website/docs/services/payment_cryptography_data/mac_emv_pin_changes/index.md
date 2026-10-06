--- 
title: mac_emv_pin_changes
hide_title: false
hide_table_of_contents: false
keywords:
  - mac_emv_pin_changes
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

Creates, updates, deletes, gets or lists a <code>mac_emv_pin_changes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mac_emv_pin_changes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography_data.mac_emv_pin_changes" /></td></tr>
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
    <td><a href="#generate_mac_emv_pin_change"><CopyableCode code="generate_mac_emv_pin_change" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NewPinPekIdentifier"><code>NewPinPekIdentifier</code></a>, <a href="#parameter-NewEncryptedPinBlock"><code>NewEncryptedPinBlock</code></a>, <a href="#parameter-PinBlockFormat"><code>PinBlockFormat</code></a>, <a href="#parameter-SecureMessagingIntegrityKeyIdentifier"><code>SecureMessagingIntegrityKeyIdentifier</code></a>, <a href="#parameter-SecureMessagingConfidentialityKeyIdentifier"><code>SecureMessagingConfidentialityKeyIdentifier</code></a>, <a href="#parameter-MessageData"><code>MessageData</code></a>, <a href="#parameter-DerivationMethodAttributes"><code>DerivationMethodAttributes</code></a></td>
    <td></td>
    <td>Generates an issuer script mac for EMV payment cards that use offline PINs as the cardholder verification method (CVM). This operation generates an authenticated issuer script response by appending the incoming message data (APDU command) with the target encrypted PIN block in ISO2 format. The command structure and method to send the issuer script update to the card is not defined by this operation and is typically determined by the applicable payment card scheme. The primary inputs to this operation include the incoming new encrypted pinblock, PIN encryption key (PEK), issuer master key (IMK), primary account number (PAN), and the payment card derivation method. The operation uses two issuer master keys - secure messaging for confidentiality (IMK-SMC) and secure messaging for integrity (IMK-SMI). The SMC key is used to internally derive a key to secure the pin, while SMI key is used to internally derive a key to authenticate the script reponse as per the EMV 4.4 - Book 2 - Security and Key Management specification. This operation supports Amex, EMV2000, EMVCommon, Mastercard and Visa derivation methods, each requiring specific input parameters. Users must follow the specific derivation method and input parameters defined by the respective payment card scheme. Use GenerateMac operation when sending a script update to an EMV card that does not involve PIN change. When assigning IAM permissions, it is important to understand that EncryptData using EMV keys and GenerateMac perform similar functions to this command. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: EncryptData GenerateMac</td>
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
    defaultValue="generate_mac_emv_pin_change"
    values={[
        { label: 'generate_mac_emv_pin_change', value: 'generate_mac_emv_pin_change' }
    ]}
>
<TabItem value="generate_mac_emv_pin_change">

Generates an issuer script mac for EMV payment cards that use offline PINs as the cardholder verification method (CVM). This operation generates an authenticated issuer script response by appending the incoming message data (APDU command) with the target encrypted PIN block in ISO2 format. The command structure and method to send the issuer script update to the card is not defined by this operation and is typically determined by the applicable payment card scheme. The primary inputs to this operation include the incoming new encrypted pinblock, PIN encryption key (PEK), issuer master key (IMK), primary account number (PAN), and the payment card derivation method. The operation uses two issuer master keys - secure messaging for confidentiality (IMK-SMC) and secure messaging for integrity (IMK-SMI). The SMC key is used to internally derive a key to secure the pin, while SMI key is used to internally derive a key to authenticate the script reponse as per the EMV 4.4 - Book 2 - Security and Key Management specification. This operation supports Amex, EMV2000, EMVCommon, Mastercard and Visa derivation methods, each requiring specific input parameters. Users must follow the specific derivation method and input parameters defined by the respective payment card scheme. Use GenerateMac operation when sending a script update to an EMV card that does not involve PIN change. When assigning IAM permissions, it is important to understand that EncryptData using EMV keys and GenerateMac perform similar functions to this command. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: EncryptData GenerateMac

```sql
EXEC aws.payment_cryptography_data.mac_emv_pin_changes.generate_mac_emv_pin_change 
@region='{{ region }}' --required 
@@json=
'{
"NewPinPekIdentifier": "{{ NewPinPekIdentifier }}", 
"NewEncryptedPinBlock": "{{ NewEncryptedPinBlock }}", 
"PinBlockFormat": "{{ PinBlockFormat }}", 
"SecureMessagingIntegrityKeyIdentifier": "{{ SecureMessagingIntegrityKeyIdentifier }}", 
"SecureMessagingConfidentialityKeyIdentifier": "{{ SecureMessagingConfidentialityKeyIdentifier }}", 
"MessageData": "{{ MessageData }}", 
"DerivationMethodAttributes": "{{ DerivationMethodAttributes }}"
}'
;
```
</TabItem>
</Tabs>
