--- 
title: key_last_usages
hide_title: false
hide_table_of_contents: false
keywords:
  - key_last_usages
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

Creates, updates, deletes, gets or lists a <code>key_last_usages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="key_last_usages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kms.key_last_usages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_key_last_usage"
    values={[
        { label: 'get_key_last_usage', value: 'get_key_last_usage' }
    ]}
>
<TabItem value="get_key_last_usage">

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
    <td><CopyableCode code="key_creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the KMS key was created.</td>
</tr>
<tr>
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td>The globally unique identifier for the KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="key_last_usage" /></td>
    <td><code>object</code></td>
    <td>Contains usage information about the last time the KMS key was used for a successful cryptographic operation. If the key has not been used since tracking began, this response element is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="tracking_start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date from which KMS began recording cryptographic activity for this key, or the date the KMS key was created, whichever is later.</td>
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
    <td><a href="#get_key_last_usage"><CopyableCode code="get_key_last_usage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns usage information about the last successful cryptographic operation performed with a specified KMS key, including the operation type, timestamp, and associated CloudTrail event ID. The TrackingStartDate in the GetKeyLastUsage response indicates the date from which KMS began recording cryptographic activity for a given key. Use this value together with KeyCreationDate to understand the key's usage history: If the KeyLastUsage response element is present, the key has been used for a successful cryptographic operation since the TrackingStartDate. The response includes the operation type, timestamp, and associated CloudTrail event ID. If the KeyLastUsage response element is empty and KeyCreationDate is on or after TrackingStartDate, the key has not been used for a successful cryptographic operation since it was created. If the KeyLastUsage response element is empty and KeyCreationDate is before TrackingStartDate, there is no record of the key being used for a successful cryptographic operation since the TrackingStartDate. However, the key may have been used before tracking began. To determine whether the key was used before the TrackingStartDate, examine your past CloudTrail logs. For multi-Region KMS keys, primary and replica keys track last usage independently. Each key in a multi-Region key set maintains its own usage information. The ReEncrypt operation uses two keys: a source key for decryption and a destination key for encryption. Usage information is recorded for both keys independently, each with the CloudTrail event ID from the respective key owner's account. Do not use GetKeyLastUsage as the sole indicator when scheduling a key for deletion. Instead, first disable the key and monitor CloudTrail for DisabledException entries, as there could be infrequent workflows that are dependent on the key. By looking for this exception, you can identify potential dependencies and workload failures before they occur. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:GetKeyLastUsage (key policy) Related operations: DescribeKey DisableKey ScheduleKeyDeletion Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.</td>
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
    defaultValue="get_key_last_usage"
    values={[
        { label: 'get_key_last_usage', value: 'get_key_last_usage' }
    ]}
>
<TabItem value="get_key_last_usage">

Returns usage information about the last successful cryptographic operation performed with a specified KMS key, including the operation type, timestamp, and associated CloudTrail event ID. The TrackingStartDate in the GetKeyLastUsage response indicates the date from which KMS began recording cryptographic activity for a given key. Use this value together with KeyCreationDate to understand the key's usage history: If the KeyLastUsage response element is present, the key has been used for a successful cryptographic operation since the TrackingStartDate. The response includes the operation type, timestamp, and associated CloudTrail event ID. If the KeyLastUsage response element is empty and KeyCreationDate is on or after TrackingStartDate, the key has not been used for a successful cryptographic operation since it was created. If the KeyLastUsage response element is empty and KeyCreationDate is before TrackingStartDate, there is no record of the key being used for a successful cryptographic operation since the TrackingStartDate. However, the key may have been used before tracking began. To determine whether the key was used before the TrackingStartDate, examine your past CloudTrail logs. For multi-Region KMS keys, primary and replica keys track last usage independently. Each key in a multi-Region key set maintains its own usage information. The ReEncrypt operation uses two keys: a source key for decryption and a destination key for encryption. Usage information is recorded for both keys independently, each with the CloudTrail event ID from the respective key owner's account. Do not use GetKeyLastUsage as the sole indicator when scheduling a key for deletion. Instead, first disable the key and monitor CloudTrail for DisabledException entries, as there could be infrequent workflows that are dependent on the key. By looking for this exception, you can identify potential dependencies and workload failures before they occur. Cross-account use: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account. Required permissions: kms:GetKeyLastUsage (key policy) Related operations: DescribeKey DisableKey ScheduleKeyDeletion Eventual consistency: The KMS API follows an eventual consistency model. For more information, see KMS eventual consistency.

```sql
SELECT
key_creation_date,
key_id,
key_last_usage,
tracking_start_date
FROM aws.kms.key_last_usages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
