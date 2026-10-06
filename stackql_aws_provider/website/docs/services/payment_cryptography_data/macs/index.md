--- 
title: macs
hide_title: false
hide_table_of_contents: false
keywords:
  - macs
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

Creates, updates, deletes, gets or lists a <code>macs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="macs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography_data.macs" /></td></tr>
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
    <td><a href="#generate_mac"><CopyableCode code="generate_mac" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyIdentifier"><code>KeyIdentifier</code></a>, <a href="#parameter-MessageData"><code>MessageData</code></a>, <a href="#parameter-GenerationAttributes"><code>GenerationAttributes</code></a></td>
    <td></td>
    <td>Generates a Message Authentication Code (MAC) cryptogram within Amazon Web Services Payment Cryptography. You can use this operation to authenticate card-related data by using known data values to generate MAC for data validation between the sending and receiving parties. This operation uses message data, a secret encryption key and MAC algorithm to generate a unique MAC value for transmission. The receiving party of the MAC must use the same message data, secret encryption key and MAC algorithm to reproduce another MAC value for comparision. You can use this operation to generate a DUPKT, CMAC, HMAC or EMV MAC by setting generation attributes and algorithm to the associated values. The MAC generation encryption key must have valid values for KeyUsage such as TR31_M7_HMAC_KEY for HMAC generation, and the key must have KeyModesOfUse set to Generate. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: VerifyMac</td>
</tr>
<tr>
    <td><a href="#verify_mac"><CopyableCode code="verify_mac" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-KeyIdentifier"><code>KeyIdentifier</code></a>, <a href="#parameter-MessageData"><code>MessageData</code></a>, <a href="#parameter-VerificationAttributes"><code>VerificationAttributes</code></a></td>
    <td></td>
    <td>Verifies a Message Authentication Code (MAC). You can use this operation to verify MAC for message data authentication such as . In this operation, you must use the same message data, secret encryption key and MAC algorithm that was used to generate MAC. You can use this operation to verify a DUPKT, CMAC, HMAC or EMV MAC by setting generation attributes and algorithm to the associated values. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: GenerateMac</td>
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
    defaultValue="generate_mac"
    values={[
        { label: 'generate_mac', value: 'generate_mac' },
        { label: 'verify_mac', value: 'verify_mac' }
    ]}
>
<TabItem value="generate_mac">

Generates a Message Authentication Code (MAC) cryptogram within Amazon Web Services Payment Cryptography. You can use this operation to authenticate card-related data by using known data values to generate MAC for data validation between the sending and receiving parties. This operation uses message data, a secret encryption key and MAC algorithm to generate a unique MAC value for transmission. The receiving party of the MAC must use the same message data, secret encryption key and MAC algorithm to reproduce another MAC value for comparision. You can use this operation to generate a DUPKT, CMAC, HMAC or EMV MAC by setting generation attributes and algorithm to the associated values. The MAC generation encryption key must have valid values for KeyUsage such as TR31_M7_HMAC_KEY for HMAC generation, and the key must have KeyModesOfUse set to Generate. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: VerifyMac

```sql
EXEC aws.payment_cryptography_data.macs.generate_mac 
@region='{{ region }}' --required 
@@json=
'{
"KeyIdentifier": "{{ KeyIdentifier }}", 
"MessageData": "{{ MessageData }}", 
"GenerationAttributes": "{{ GenerationAttributes }}", 
"MacLength": {{ MacLength }}
}'
;
```
</TabItem>
<TabItem value="verify_mac">

Verifies a Message Authentication Code (MAC). You can use this operation to verify MAC for message data authentication such as . In this operation, you must use the same message data, secret encryption key and MAC algorithm that was used to generate MAC. You can use this operation to verify a DUPKT, CMAC, HMAC or EMV MAC by setting generation attributes and algorithm to the associated values. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: GenerateMac

```sql
EXEC aws.payment_cryptography_data.macs.verify_mac 
@region='{{ region }}' --required 
@@json=
'{
"KeyIdentifier": "{{ KeyIdentifier }}", 
"MessageData": "{{ MessageData }}", 
"Mac": "{{ Mac }}", 
"VerificationAttributes": "{{ VerificationAttributes }}", 
"MacLength": {{ MacLength }}
}'
;
```
</TabItem>
</Tabs>
