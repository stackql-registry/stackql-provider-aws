--- 
title: key_rotations
hide_title: false
hide_table_of_contents: false
keywords:
  - key_rotations
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

Creates, updates, deletes, gets or lists a <code>key_rotations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="key_rotations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kms.key_rotations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_key_rotations"
    values={[
        { label: 'list_key_rotations', value: 'list_key_rotations' }
    ]}
>
<TabItem value="list_key_rotations">

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
    <td><CopyableCode code="ExpirationModel" /></td>
    <td><code>string</code></td>
    <td>Indicates if the key material is configured to automatically expire. There are two possible values for this field: KEY_MATERIAL_EXPIRES and KEY_MATERIAL_DOES_NOT_EXPIRE. For any key material that expires, the expiration date and time is indicated in ValidTo. This field is only present for symmetric encryption KMS keys with EXTERNAL origin. (KEY_MATERIAL_EXPIRES, KEY_MATERIAL_DOES_NOT_EXPIRE)</td>
</tr>
<tr>
    <td><CopyableCode code="ImportState" /></td>
    <td><code>string</code></td>
    <td>Indicates if the key material is currently imported into KMS. It has two possible values: IMPORTED or PENDING_IMPORT. This field is only present for symmetric encryption KMS keys with EXTERNAL origin. (IMPORTED, PENDING_IMPORT)</td>
</tr>
<tr>
    <td><CopyableCode code="KeyId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the key.</td>
</tr>
<tr>
    <td><CopyableCode code="KeyMaterialDescription" /></td>
    <td><code>string</code></td>
    <td>User-specified description of the key material. This field is only present for symmetric encryption KMS keys with EXTERNAL origin. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9:/_\s.-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="KeyMaterialId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the key material. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="KeyMaterialState" /></td>
    <td><code>string</code></td>
    <td>There are four possible values for this field: CURRENT, NON_CURRENT, PENDING_MULTI_REGION_IMPORT_AND_ROTATION and PENDING_ROTATION. KMS uses CURRENT key material for both encryption and decryption and NON_CURRENT key material only for decryption. PENDING_ROTATION identifies key material that has been imported for on-demand key rotation but the rotation hasn't completed. The key material state PENDING_MULTI_REGION_IMPORT_AND_ROTATION is unique to multi-region, symmetric encryption keys with imported key material. It indicates key material that has been imported into the primary Region key but not all of the replica Region keys. When this key material is imported in to all of the replica Region keys, the key material state will change to PENDING_ROTATION. Key material in PENDING_MULTI_REGION_IMPORT_AND_ROTATION or PENDING_ROTATION state is not permanently associated with the KMS key. You can delete this key material and import different key material in its place. The PENDING_MULTI_REGION_IMPORT_AND_ROTATION and PENDING_ROTATION values are only used in symmetric encryption keys with imported key material. The other values, CURRENT and NON_CURRENT, are used for all KMS keys that support automatic or on-demand key rotation. (NON_CURRENT, CURRENT, PENDING_ROTATION, PENDING_MULTI_REGION_IMPORT_AND_ROTATION)</td>
</tr>
<tr>
    <td><CopyableCode code="RotationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time that the key material rotation completed. Formatted as Unix time. This field is not present for the first key material or an imported key material in PENDING_ROTATION state.</td>
</tr>
<tr>
    <td><CopyableCode code="RotationType" /></td>
    <td><code>string</code></td>
    <td>Identifies whether the key material rotation was a scheduled automatic rotation or an on-demand rotation. This field is not present for the first key material or an imported key material in PENDING_ROTATION state. (AUTOMATIC, ON_DEMAND)</td>
</tr>
<tr>
    <td><CopyableCode code="ValidTo" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time at which the key material expires. This field is only present for symmetric encryption KMS keys with EXTERNAL origin in rotation list entries with an ExpirationModel value of KEY_MATERIAL_EXPIRES.</td>
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
    <td><a href="#list_key_rotations"><CopyableCode code="list_key_rotations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the key materials associated with the specified KMS key. You can use the optional IncludeKeyMaterial parameter to control which key materials are included in the response. You must specify the KMS key in all requests. You can refine the key rotations list by limiting the number of rotations returned. For detailed information about automatic and on-demand key rotations, see Rotate KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:ListKeyRotations (key policy) Related operations: EnableKeyRotation DeleteImportedKeyMaterial DisableKeyRotation GetKeyRotationStatus ImportKeyMaterial RotateKeyOnDemand Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
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
    defaultValue="list_key_rotations"
    values={[
        { label: 'list_key_rotations', value: 'list_key_rotations' }
    ]}
>
<TabItem value="list_key_rotations">

Returns information about the key materials associated with the specified KMS key. You can use the optional IncludeKeyMaterial parameter to control which key materials are included in the response. You must specify the KMS key in all requests. You can refine the key rotations list by limiting the number of rotations returned. For detailed information about automatic and on-demand key rotations, see Rotate KMS keys in the Key Management Service Developer Guide. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:ListKeyRotations (key policy) Related operations: EnableKeyRotation DeleteImportedKeyMaterial DisableKeyRotation GetKeyRotationStatus ImportKeyMaterial RotateKeyOnDemand Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
SELECT
ExpirationModel,
ImportState,
KeyId,
KeyMaterialDescription,
KeyMaterialId,
KeyMaterialState,
RotationDate,
RotationType,
ValidTo
FROM aws.kms.key_rotations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
