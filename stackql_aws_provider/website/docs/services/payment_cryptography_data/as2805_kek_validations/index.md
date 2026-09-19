--- 
title: as2805_kek_validations
hide_title: false
hide_table_of_contents: false
keywords:
  - as2805_kek_validations
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

Creates, updates, deletes, gets or lists an <code>as2805_kek_validations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="as2805_kek_validations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography_data.as2805_kek_validations" /></td></tr>
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
    <td><a href="#generate_as2805_kek_validation"><CopyableCode code="generate_as2805_kek_validation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyIdentifier"><code>KeyIdentifier</code></a>, <a href="#parameter-KekValidationType"><code>KekValidationType</code></a>, <a href="#parameter-RandomKeySendVariantMask"><code>RandomKeySendVariantMask</code></a></td>
    <td></td>
    <td>Generates a KekValidationRequest or a KekValidationResponse for node-to-node initialization between payment processing nodes using Australian Standard 2805 (AS2805). During node-to-node initialization, both communicating nodes must validate that they possess the correct Key Encrypting Keys (KEKs) before proceeding with session key exchange. In AS2805, the sending KEK (KEKs) of one node corresponds to the receiving KEK (KEKr) of its partner node. Each node uses its KEK to encrypt and decrypt session keys exchanged between the nodes. A KEK can be created or imported into Amazon Web Services Payment Cryptography using either the CreateKey or ImportKey operations. To use GenerateAs2805KekValidation to generate a KEK validation request, set KekValidationType to KekValidationRequest. This operation returns both RandomKeySend (KRs) and RandomKeyReceive (KRr) as response values. The partnering node receives the KRs, uses its KEKr to decrypt it, and generates a KRr which is an inverted value of KRs. The node receiving the KRr validates it against its own KRr generated during KEK validation request outside of Amazon Web Services Payment Cryptography. You can also use this operation to generate a KEK validation response, by setting KekValidationType to KekValidationResponse and providing the incoming KRs. This operation then calculates a KRr. To learn more about more about node-to-node initialization, see Validation of KEK in the Amazon Web Services Payment Cryptography User Guide. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies.</td>
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
    defaultValue="generate_as2805_kek_validation"
    values={[
        { label: 'generate_as2805_kek_validation', value: 'generate_as2805_kek_validation' }
    ]}
>
<TabItem value="generate_as2805_kek_validation">

Generates a KekValidationRequest or a KekValidationResponse for node-to-node initialization between payment processing nodes using Australian Standard 2805 (AS2805). During node-to-node initialization, both communicating nodes must validate that they possess the correct Key Encrypting Keys (KEKs) before proceeding with session key exchange. In AS2805, the sending KEK (KEKs) of one node corresponds to the receiving KEK (KEKr) of its partner node. Each node uses its KEK to encrypt and decrypt session keys exchanged between the nodes. A KEK can be created or imported into Amazon Web Services Payment Cryptography using either the CreateKey or ImportKey operations. To use GenerateAs2805KekValidation to generate a KEK validation request, set KekValidationType to KekValidationRequest. This operation returns both RandomKeySend (KRs) and RandomKeyReceive (KRr) as response values. The partnering node receives the KRs, uses its KEKr to decrypt it, and generates a KRr which is an inverted value of KRs. The node receiving the KRr validates it against its own KRr generated during KEK validation request outside of Amazon Web Services Payment Cryptography. You can also use this operation to generate a KEK validation response, by setting KekValidationType to KekValidationResponse and providing the incoming KRs. This operation then calculates a KRr. To learn more about more about node-to-node initialization, see Validation of KEK in the Amazon Web Services Payment Cryptography User Guide. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies.

```sql
EXEC aws.payment_cryptography_data.as2805_kek_validations.generate_as2805_kek_validation 
@region='{{ region }}' --required 
@@json=
'{
"KeyIdentifier": "{{ KeyIdentifier }}", 
"KekValidationType": "{{ KekValidationType }}", 
"RandomKeySendVariantMask": "{{ RandomKeySendVariantMask }}"
}'
;
```
</TabItem>
</Tabs>
