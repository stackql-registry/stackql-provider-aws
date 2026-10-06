--- 
title: card_validation_data
hide_title: false
hide_table_of_contents: false
keywords:
  - card_validation_data
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

Creates, updates, deletes, gets or lists a <code>card_validation_data</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="card_validation_data" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography_data.card_validation_data" /></td></tr>
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
    <td><a href="#generate_card_validation_data"><CopyableCode code="generate_card_validation_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyIdentifier"><code>KeyIdentifier</code></a>, <a href="#parameter-PrimaryAccountNumber"><code>PrimaryAccountNumber</code></a>, <a href="#parameter-GenerationAttributes"><code>GenerationAttributes</code></a></td>
    <td></td>
    <td>Generates card-related validation data using algorithms such as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2), or Card Security Codes (CSC). For more information, see Generate card data in the Amazon Web Services Payment Cryptography User Guide. This operation generates a CVV or CSC value that is printed on a payment credit or debit card during card production. The CVV or CSC, PAN (Primary Account Number) and expiration date of the card are required to check its validity during transaction processing. To begin this operation, a CVK (Card Verification Key) encryption key is required. You can use CreateKey or ImportKey to establish a CVK within Amazon Web Services Payment Cryptography. The KeyModesOfUse should be set to Generate and Verify for a CVK encryption key. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: ImportKey VerifyCardValidationData</td>
</tr>
<tr>
    <td><a href="#verify_card_validation_data"><CopyableCode code="verify_card_validation_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyIdentifier"><code>KeyIdentifier</code></a>, <a href="#parameter-PrimaryAccountNumber"><code>PrimaryAccountNumber</code></a>, <a href="#parameter-VerificationAttributes"><code>VerificationAttributes</code></a>, <a href="#parameter-ValidationData"><code>ValidationData</code></a></td>
    <td></td>
    <td>Verifies card-related validation data using algorithms such as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2) and Card Security Codes (CSC). For more information, see Verify card data in the Amazon Web Services Payment Cryptography User Guide. This operation validates the CVV or CSC codes that is printed on a payment credit or debit card during card payment transaction. The input values are typically provided as part of an inbound transaction to an issuer or supporting platform partner. Amazon Web Services Payment Cryptography uses CVV or CSC, PAN (Primary Account Number) and expiration date of the card to check its validity during transaction processing. In this operation, the CVK (Card Verification Key) encryption key for use with card data verification is same as the one in used for GenerateCardValidationData. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: GenerateCardValidationData VerifyAuthRequestCryptogram VerifyPinData</td>
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
    defaultValue="generate_card_validation_data"
    values={[
        { label: 'generate_card_validation_data', value: 'generate_card_validation_data' },
        { label: 'verify_card_validation_data', value: 'verify_card_validation_data' }
    ]}
>
<TabItem value="generate_card_validation_data">

Generates card-related validation data using algorithms such as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2), or Card Security Codes (CSC). For more information, see Generate card data in the Amazon Web Services Payment Cryptography User Guide. This operation generates a CVV or CSC value that is printed on a payment credit or debit card during card production. The CVV or CSC, PAN (Primary Account Number) and expiration date of the card are required to check its validity during transaction processing. To begin this operation, a CVK (Card Verification Key) encryption key is required. You can use CreateKey or ImportKey to establish a CVK within Amazon Web Services Payment Cryptography. The KeyModesOfUse should be set to Generate and Verify for a CVK encryption key. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: ImportKey VerifyCardValidationData

```sql
EXEC aws.payment_cryptography_data.card_validation_data.generate_card_validation_data 
@region='{{ region }}' --required 
@@json=
'{
"KeyIdentifier": "{{ KeyIdentifier }}", 
"PrimaryAccountNumber": "{{ PrimaryAccountNumber }}", 
"GenerationAttributes": "{{ GenerationAttributes }}", 
"ValidationDataLength": {{ ValidationDataLength }}
}'
;
```
</TabItem>
<TabItem value="verify_card_validation_data">

Verifies card-related validation data using algorithms such as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2) and Card Security Codes (CSC). For more information, see Verify card data in the Amazon Web Services Payment Cryptography User Guide. This operation validates the CVV or CSC codes that is printed on a payment credit or debit card during card payment transaction. The input values are typically provided as part of an inbound transaction to an issuer or supporting platform partner. Amazon Web Services Payment Cryptography uses CVV or CSC, PAN (Primary Account Number) and expiration date of the card to check its validity during transaction processing. In this operation, the CVK (Card Verification Key) encryption key for use with card data verification is same as the one in used for GenerateCardValidationData. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: GenerateCardValidationData VerifyAuthRequestCryptogram VerifyPinData

```sql
EXEC aws.payment_cryptography_data.card_validation_data.verify_card_validation_data 
@region='{{ region }}' --required 
@@json=
'{
"KeyIdentifier": "{{ KeyIdentifier }}", 
"PrimaryAccountNumber": "{{ PrimaryAccountNumber }}", 
"VerificationAttributes": "{{ VerificationAttributes }}", 
"ValidationData": "{{ ValidationData }}"
}'
;
```
</TabItem>
</Tabs>
