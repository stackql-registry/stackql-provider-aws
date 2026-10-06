--- 
title: auth_request_cryptograms
hide_title: false
hide_table_of_contents: false
keywords:
  - auth_request_cryptograms
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

Creates, updates, deletes, gets or lists an <code>auth_request_cryptograms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="auth_request_cryptograms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography_data.auth_request_cryptograms" /></td></tr>
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
    <td><a href="#generate_auth_request_cryptogram"><CopyableCode code="generate_auth_request_cryptogram" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyIdentifier"><code>KeyIdentifier</code></a>, <a href="#parameter-TransactionData"><code>TransactionData</code></a>, <a href="#parameter-MajorKeyDerivationMode"><code>MajorKeyDerivationMode</code></a>, <a href="#parameter-SessionKeyDerivationAttributes"><code>SessionKeyDerivationAttributes</code></a></td>
    <td></td>
    <td>Generates an Authorization Request Cryptogram (ARQC) for an EMV chip payment card authorization. For more information, see Generate auth request cryptogram in the Amazon Web Services Payment Cryptography User Guide. ARQC generation uses an Issuer Master Key (IMK) for application cryptograms (TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS) to derive a session key, which is then used to generate the cryptogram from the provided transaction data (when applicable). To use this operation, you must first create or import an IMK-AC key by calling CreateKey or ImportKey. The KeyModesOfUse should be set to DeriveKey for the IMK-AC encryption key. This operation is intended for development and testing scenarios only. It is not recommended to use this operation as a substitute for card-based cryptogram generation in production payment flows. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: VerifyAuthRequestCryptogram</td>
</tr>
<tr>
    <td><a href="#verify_auth_request_cryptogram"><CopyableCode code="verify_auth_request_cryptogram" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyIdentifier"><code>KeyIdentifier</code></a>, <a href="#parameter-TransactionData"><code>TransactionData</code></a>, <a href="#parameter-AuthRequestCryptogram"><code>AuthRequestCryptogram</code></a>, <a href="#parameter-MajorKeyDerivationMode"><code>MajorKeyDerivationMode</code></a>, <a href="#parameter-SessionKeyDerivationAttributes"><code>SessionKeyDerivationAttributes</code></a></td>
    <td></td>
    <td>Verifies Authorization Request Cryptogram (ARQC) for a EMV chip payment card authorization. For more information, see Verify auth request cryptogram in the Amazon Web Services Payment Cryptography User Guide. ARQC generation is done outside of Amazon Web Services Payment Cryptography and is typically generated on a point of sale terminal for an EMV chip card to obtain payment authorization during transaction time. For ARQC verification, you must first import the ARQC generated outside of Amazon Web Services Payment Cryptography by calling ImportKey. This operation uses the imported ARQC and an major encryption key (DUKPT) created by calling CreateKey to either provide a boolean ARQC verification result or provide an APRC (Authorization Response Cryptogram) response using Method 1 or Method 2. The ARPC_METHOD_1 uses AuthResponseCode to generate ARPC and ARPC_METHOD_2 uses CardStatusUpdate to generate ARPC. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: VerifyCardValidationData VerifyPinData</td>
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
    defaultValue="generate_auth_request_cryptogram"
    values={[
        { label: 'generate_auth_request_cryptogram', value: 'generate_auth_request_cryptogram' },
        { label: 'verify_auth_request_cryptogram', value: 'verify_auth_request_cryptogram' }
    ]}
>
<TabItem value="generate_auth_request_cryptogram">

Generates an Authorization Request Cryptogram (ARQC) for an EMV chip payment card authorization. For more information, see Generate auth request cryptogram in the Amazon Web Services Payment Cryptography User Guide. ARQC generation uses an Issuer Master Key (IMK) for application cryptograms (TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS) to derive a session key, which is then used to generate the cryptogram from the provided transaction data (when applicable). To use this operation, you must first create or import an IMK-AC key by calling CreateKey or ImportKey. The KeyModesOfUse should be set to DeriveKey for the IMK-AC encryption key. This operation is intended for development and testing scenarios only. It is not recommended to use this operation as a substitute for card-based cryptogram generation in production payment flows. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: VerifyAuthRequestCryptogram

```sql
EXEC aws.payment_cryptography_data.auth_request_cryptograms.generate_auth_request_cryptogram 
@region='{{ region }}' --required 
@@json=
'{
"KeyIdentifier": "{{ KeyIdentifier }}", 
"TransactionData": "{{ TransactionData }}", 
"MajorKeyDerivationMode": "{{ MajorKeyDerivationMode }}", 
"SessionKeyDerivationAttributes": "{{ SessionKeyDerivationAttributes }}"
}'
;
```
</TabItem>
<TabItem value="verify_auth_request_cryptogram">

Verifies Authorization Request Cryptogram (ARQC) for a EMV chip payment card authorization. For more information, see Verify auth request cryptogram in the Amazon Web Services Payment Cryptography User Guide. ARQC generation is done outside of Amazon Web Services Payment Cryptography and is typically generated on a point of sale terminal for an EMV chip card to obtain payment authorization during transaction time. For ARQC verification, you must first import the ARQC generated outside of Amazon Web Services Payment Cryptography by calling ImportKey. This operation uses the imported ARQC and an major encryption key (DUKPT) created by calling CreateKey to either provide a boolean ARQC verification result or provide an APRC (Authorization Response Cryptogram) response using Method 1 or Method 2. The ARPC_METHOD_1 uses AuthResponseCode to generate ARPC and ARPC_METHOD_2 uses CardStatusUpdate to generate ARPC. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: VerifyCardValidationData VerifyPinData

```sql
EXEC aws.payment_cryptography_data.auth_request_cryptograms.verify_auth_request_cryptogram 
@region='{{ region }}' --required 
@@json=
'{
"KeyIdentifier": "{{ KeyIdentifier }}", 
"TransactionData": "{{ TransactionData }}", 
"AuthRequestCryptogram": "{{ AuthRequestCryptogram }}", 
"MajorKeyDerivationMode": "{{ MajorKeyDerivationMode }}", 
"SessionKeyDerivationAttributes": "{{ SessionKeyDerivationAttributes }}", 
"AuthResponseAttributes": "{{ AuthResponseAttributes }}"
}'
;
```
</TabItem>
</Tabs>
