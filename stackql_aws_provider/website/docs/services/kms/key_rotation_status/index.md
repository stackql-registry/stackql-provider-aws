--- 
title: key_rotation_status
hide_title: false
hide_table_of_contents: false
keywords:
  - key_rotation_status
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

Creates, updates, deletes, gets or lists a <code>key_rotation_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="key_rotation_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kms.key_rotation_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_key_rotation_status"
    values={[
        { label: 'get_key_rotation_status', value: 'get_key_rotation_status' }
    ]}
>
<TabItem value="get_key_rotation_status">

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
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td>Identifies the specified symmetric encryption KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="key_rotation_enabled" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that specifies whether key rotation is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="next_rotation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The next date that KMS will automatically rotate the key material.</td>
</tr>
<tr>
    <td><CopyableCode code="on_demand_rotation_start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Identifies the date and time that an in progress on-demand rotation was initiated. KMS uses a background process to perform rotations. As a result, there might be a slight delay between initiating on-demand key rotation and the rotation's completion. Once the on-demand rotation is complete, KMS removes this field from the response. You can use ListKeyRotations to view the details of the completed on-demand rotation.</td>
</tr>
<tr>
    <td><CopyableCode code="rotation_period_in_days" /></td>
    <td><code>integer</code></td>
    <td>The number of days between each automatic rotation. The default value is 365 days.</td>
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
    <td><a href="#get_key_rotation_status"><CopyableCode code="get_key_rotation_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides detailed information about the rotation status for a KMS key, including whether automatic rotation of the key material is enabled for the specified KMS key, the rotation period, and the next scheduled rotation date. Automatic key rotation is supported only on symmetric encryption KMS keys. You cannot enable automatic rotation of asymmetric KMS keys, HMAC KMS keys, KMS keys with imported key material, or KMS keys in a custom key store. To enable or disable automatic rotation of a set of related multi-Region keys, set the property on the primary key. You can enable (EnableKeyRotation) and disable automatic rotation (DisableKeyRotation) of the key material in customer managed KMS keys. Key material rotation of Amazon Web Services managed KMS keys is not configurable. KMS always rotates the key material in Amazon Web Services managed KMS keys every year. The key rotation status for Amazon Web Services managed KMS keys is always true. You can perform on-demand (RotateKeyOnDemand) rotation of the key material in customer managed KMS keys, regardless of whether or not automatic key rotation is enabled. You can use GetKeyRotationStatus to identify the date and time that an in progress on-demand rotation was initiated. You can use ListKeyRotations to view the details of completed rotations. In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three years to every year. For details, see EnableKeyRotation. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Disabled: The key rotation status does not change when you disable a KMS key. However, while the KMS key is disabled, KMS does not rotate the key material. When you re-enable the KMS key, rotation resumes. If the key material in the re-enabled KMS key hasn't been rotated in one year, KMS rotates it immediately, and every year thereafter. If it's been less than a year since the key material in the re-enabled KMS key was rotated, the KMS key resumes its prior rotation schedule. Pending deletion: While a KMS key is pending deletion, its key rotation status is false and KMS does not rotate the key material. If you cancel the deletion, the original key rotation status returns to true. Cross-account use: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the KeyId parameter. Required permissions: kms:GetKeyRotationStatus (key policy) Related operations: DisableKeyRotation EnableKeyRotation ListKeyRotations RotateKeyOnDemand Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
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
    defaultValue="get_key_rotation_status"
    values={[
        { label: 'get_key_rotation_status', value: 'get_key_rotation_status' }
    ]}
>
<TabItem value="get_key_rotation_status">

Provides detailed information about the rotation status for a KMS key, including whether automatic rotation of the key material is enabled for the specified KMS key, the rotation period, and the next scheduled rotation date. Automatic key rotation is supported only on symmetric encryption KMS keys. You cannot enable automatic rotation of asymmetric KMS keys, HMAC KMS keys, KMS keys with imported key material, or KMS keys in a custom key store. To enable or disable automatic rotation of a set of related multi-Region keys, set the property on the primary key. You can enable (EnableKeyRotation) and disable automatic rotation (DisableKeyRotation) of the key material in customer managed KMS keys. Key material rotation of Amazon Web Services managed KMS keys is not configurable. KMS always rotates the key material in Amazon Web Services managed KMS keys every year. The key rotation status for Amazon Web Services managed KMS keys is always true. You can perform on-demand (RotateKeyOnDemand) rotation of the key material in customer managed KMS keys, regardless of whether or not automatic key rotation is enabled. You can use GetKeyRotationStatus to identify the date and time that an in progress on-demand rotation was initiated. You can use ListKeyRotations to view the details of completed rotations. In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three years to every year. For details, see EnableKeyRotation. The KMS key that you use for this operation must be in a compatible key state. For details, see Key states of KMS keys in the Key Management Service Developer Guide. Disabled: The key rotation status does not change when you disable a KMS key. However, while the KMS key is disabled, KMS does not rotate the key material. When you re-enable the KMS key, rotation resumes. If the key material in the re-enabled KMS key hasn't been rotated in one year, KMS rotates it immediately, and every year thereafter. If it's been less than a year since the key material in the re-enabled KMS key was rotated, the KMS key resumes its prior rotation schedule. Pending deletion: While a KMS key is pending deletion, its key rotation status is false and KMS does not rotate the key material. If you cancel the deletion, the original key rotation status returns to true. Cross-account use: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the KeyId parameter. Required permissions: kms:GetKeyRotationStatus (key policy) Related operations: DisableKeyRotation EnableKeyRotation ListKeyRotations RotateKeyOnDemand Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
SELECT
key_id,
key_rotation_enabled,
next_rotation_date,
on_demand_rotation_start_date,
rotation_period_in_days
FROM aws.kms.key_rotation_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
