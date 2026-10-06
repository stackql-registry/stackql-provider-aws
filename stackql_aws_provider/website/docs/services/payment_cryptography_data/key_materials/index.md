--- 
title: key_materials
hide_title: false
hide_table_of_contents: false
keywords:
  - key_materials
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

Creates, updates, deletes, gets or lists a <code>key_materials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="key_materials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography_data.key_materials" /></td></tr>
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
    <td><a href="#translate_key_material"><CopyableCode code="translate_key_material" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IncomingKeyMaterial"><code>IncomingKeyMaterial</code></a>, <a href="#parameter-OutgoingKeyMaterial"><code>OutgoingKeyMaterial</code></a></td>
    <td></td>
    <td>Translates an cryptographic key between different wrapping keys without importing the key into Amazon Web Services Payment Cryptography. This operation can be used when key material is frequently rotated, such as during every card transaction, and there is a need to avoid importing short-lived keys into Amazon Web Services Payment Cryptography. It translates short-lived transaction keys such as PEK generated for each transaction and wrapped with an ECDH derived wrapping key to another KEK wrapping key. Before using this operation, you must first request the public key certificate of the ECC key pair generated within Amazon Web Services Payment Cryptography to establish an ECDH key agreement. In TranslateKeyData, the service uses its own ECC key pair, public certificate of receiving ECC key pair, and the key derivation parameters to generate a derived key. The service uses this derived key to unwrap the incoming transaction key received as a TR31WrappedKeyBlock and re-wrap using a user provided KEK to generate an outgoing Tr31WrappedKeyBlock. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: CreateKey GetPublicCertificate ImportKey</td>
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
    defaultValue="translate_key_material"
    values={[
        { label: 'translate_key_material', value: 'translate_key_material' }
    ]}
>
<TabItem value="translate_key_material">

Translates an cryptographic key between different wrapping keys without importing the key into Amazon Web Services Payment Cryptography. This operation can be used when key material is frequently rotated, such as during every card transaction, and there is a need to avoid importing short-lived keys into Amazon Web Services Payment Cryptography. It translates short-lived transaction keys such as PEK generated for each transaction and wrapped with an ECDH derived wrapping key to another KEK wrapping key. Before using this operation, you must first request the public key certificate of the ECC key pair generated within Amazon Web Services Payment Cryptography to establish an ECDH key agreement. In TranslateKeyData, the service uses its own ECC key pair, public certificate of receiving ECC key pair, and the key derivation parameters to generate a derived key. The service uses this derived key to unwrap the incoming transaction key received as a TR31WrappedKeyBlock and re-wrap using a user provided KEK to generate an outgoing Tr31WrappedKeyBlock. For information about valid keys for this operation, see Understanding key attributes and Key types for specific data operations in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see Resource-based policies. Related operations: CreateKey GetPublicCertificate ImportKey

```sql
EXEC aws.payment_cryptography_data.key_materials.translate_key_material 
@region='{{ region }}' --required 
@@json=
'{
"IncomingKeyMaterial": "{{ IncomingKeyMaterial }}", 
"OutgoingKeyMaterial": "{{ OutgoingKeyMaterial }}", 
"KeyCheckValueAlgorithm": "{{ KeyCheckValueAlgorithm }}"
}'
;
```
</TabItem>
</Tabs>
