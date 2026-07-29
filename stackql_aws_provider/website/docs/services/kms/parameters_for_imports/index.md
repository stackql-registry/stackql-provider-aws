--- 
title: parameters_for_imports
hide_title: false
hide_table_of_contents: false
keywords:
  - parameters_for_imports
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

Creates, updates, deletes, gets or lists a <code>parameters_for_imports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="parameters_for_imports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kms.parameters_for_imports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_parameters_for_import"
    values={[
        { label: 'get_parameters_for_import', value: 'get_parameters_for_import' }
    ]}
>
<TabItem value="get_parameters_for_import">

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
    <td><CopyableCode code="import_token" /></td>
    <td><code>string (byte)</code></td>
    <td>The import token to send in a subsequent ImportKeyMaterial request.</td>
</tr>
<tr>
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (key ARN) of the KMS key to use in a subsequent ImportKeyMaterial request. This is the same KMS key specified in the GetParametersForImport request.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters_valid_to" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the import token and public key are no longer valid. After this time, you cannot use them to make an ImportKeyMaterial request and you must send another GetParametersForImport request to get new ones.</td>
</tr>
<tr>
    <td><CopyableCode code="public_key" /></td>
    <td><code>string (byte)</code></td>
    <td>The public key to use to encrypt the key material before importing it with ImportKeyMaterial.</td>
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
    <td><a href="#get_parameters_for_import"><CopyableCode code="get_parameters_for_import" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the public key and an import token you need to import or reimport key material for a KMS key. By default, KMS keys are created with key material that KMS generates. This operation supports Importing key material, an advanced feature that lets you generate and import the cryptographic key material for a KMS key. Before calling GetParametersForImport, use the CreateKey operation with an Origin value of EXTERNAL to create a KMS key with no key material. You can import key material for a symmetric encryption KMS key, HMAC KMS key, asymmetric encryption KMS key, or asymmetric signing KMS key. You can also import key material into a multi-Region key of any supported type. However, you can't import key material into a KMS key in a custom key store. You can also use GetParametersForImport to get a public key and import token to reimport the original key material into a KMS key whose key material expired or was deleted. GetParametersForImport returns the items that you need to import your key material. The public key (or "wrapping key") of an RSA key pair that KMS generates. You will use this public key to encrypt ("wrap") your key material while it's in transit to KMS. A import token that ensures that KMS can decrypt your key material and associate it with the correct KMS key. The public key and its import token are permanently linked and must be used together. Each public key and import token set is valid for 24 hours. The expiration date and time appear in the ParametersValidTo field in the GetParametersForImport response. You cannot use an expired public key or import token in an ImportKeyMaterial request. If your key and token expire, send another GetParametersForImport request. GetParametersForImport requires the following information: The key ID of the KMS key for which you are importing the key material. The key spec of the public key ("wrapping key") that you will use to encrypt your key material during import. The wrapping algorithm that you will use with the public key to encrypt your key material. You can use the same or a different public key spec and wrapping algorithm each time you import or reimport the same key material. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:GetParametersForImport (key policy) Related operations: ImportKeyMaterial DeleteImportedKeyMaterial Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
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
    defaultValue="get_parameters_for_import"
    values={[
        { label: 'get_parameters_for_import', value: 'get_parameters_for_import' }
    ]}
>
<TabItem value="get_parameters_for_import">

Returns the public key and an import token you need to import or reimport key material for a KMS key. By default, KMS keys are created with key material that KMS generates. This operation supports Importing key material, an advanced feature that lets you generate and import the cryptographic key material for a KMS key. Before calling GetParametersForImport, use the CreateKey operation with an Origin value of EXTERNAL to create a KMS key with no key material. You can import key material for a symmetric encryption KMS key, HMAC KMS key, asymmetric encryption KMS key, or asymmetric signing KMS key. You can also import key material into a multi-Region key of any supported type. However, you can't import key material into a KMS key in a custom key store. You can also use GetParametersForImport to get a public key and import token to reimport the original key material into a KMS key whose key material expired or was deleted. GetParametersForImport returns the items that you need to import your key material. The public key (or "wrapping key") of an RSA key pair that KMS generates. You will use this public key to encrypt ("wrap") your key material while it's in transit to KMS. A import token that ensures that KMS can decrypt your key material and associate it with the correct KMS key. The public key and its import token are permanently linked and must be used together. Each public key and import token set is valid for 24 hours. The expiration date and time appear in the ParametersValidTo field in the GetParametersForImport response. You cannot use an expired public key or import token in an ImportKeyMaterial request. If your key and token expire, send another GetParametersForImport request. GetParametersForImport requires the following information: The key ID of the KMS key for which you are importing the key material. The key spec of the public key ("wrapping key") that you will use to encrypt your key material during import. The wrapping algorithm that you will use with the public key to encrypt your key material. You can use the same or a different public key spec and wrapping algorithm each time you import or reimport the same key material. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:GetParametersForImport (key policy) Related operations: ImportKeyMaterial DeleteImportedKeyMaterial Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
SELECT
import_token,
key_id,
parameters_valid_to,
public_key
FROM aws.kms.parameters_for_imports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
