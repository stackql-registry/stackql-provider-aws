--- 
title: tape_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - tape_pools
  - storagegateway
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

Creates, updates, deletes, gets or lists a <code>tape_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tape_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.tape_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tape_pools"
    values={[
        { label: 'list_tape_pools', value: 'list_tape_pools' }
    ]}
>
<TabItem value="list_tape_pools">

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
    <td><CopyableCode code="pool_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom tape pool. Use the ListTapePools operation to return a list of custom tape pools for your account and Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="pool_name" /></td>
    <td><code>string</code></td>
    <td>The name of the custom tape pool. PoolName can use all ASCII characters, except '/' and '\'. (pattern: &lt;code&gt;^&#91; -\.0-\&#91;\&#93;-~&#93;*&#91;!-\.0-\&#91;\&#93;-~&#93;&#91; -\.0-\&#91;\&#93;-~&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pool_status" /></td>
    <td><code>string</code></td>
    <td>Status of the custom tape pool. Pool can be ACTIVE or DELETED. (ACTIVE, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_lock_time_in_days" /></td>
    <td><code>integer</code></td>
    <td>Tape retention lock time is set in days. Tape retention lock can be enabled for up to 100 years (36,500 days).</td>
</tr>
<tr>
    <td><CopyableCode code="retention_lock_type" /></td>
    <td><code>string</code></td>
    <td>Tape retention lock type, which can be configured in two modes. When configured in governance mode, Amazon Web Services accounts with specific IAM permissions are authorized to remove the tape retention lock from archived virtual tapes. When configured in compliance mode, the tape retention lock cannot be removed by any user, including the root Amazon Web Services account. (COMPLIANCE, GOVERNANCE, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="storage_class" /></td>
    <td><code>string</code></td>
    <td>The storage class that is associated with the custom pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool. (DEEP_ARCHIVE, GLACIER)</td>
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
    <td><a href="#list_tape_pools"><CopyableCode code="list_tape_pools" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists custom tape pools. You specify custom tape pools to list by specifying one or more custom tape pool Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN, the operation lists all custom tape pools. This operation supports pagination. You can optionally specify the Limit parameter in the body to limit the number of tape pools in the response. If the number of tape pools returned in the response is truncated, the response includes a Marker element that you can use in your subsequent request to retrieve the next set of tape pools.</td>
</tr>
<tr>
    <td><a href="#create_tape_pool"><CopyableCode code="create_tape_pool" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PoolName"><code>PoolName</code></a>, <a href="#parameter-StorageClass"><code>StorageClass</code></a></td>
    <td></td>
    <td>Creates a new custom tape pool. You can use custom tape pool to enable tape retention lock on tapes that are archived in the custom pool.</td>
</tr>
<tr>
    <td><a href="#assign_tape_pool"><CopyableCode code="assign_tape_pool" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TapeARN"><code>TapeARN</code></a>, <a href="#parameter-PoolId"><code>PoolId</code></a></td>
    <td></td>
    <td>Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.</td>
</tr>
<tr>
    <td><a href="#delete_tape_pool"><CopyableCode code="delete_tape_pool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes in the pool and if there are no automatic tape creation policies that reference the custom tape pool.</td>
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
    defaultValue="list_tape_pools"
    values={[
        { label: 'list_tape_pools', value: 'list_tape_pools' }
    ]}
>
<TabItem value="list_tape_pools">

Lists custom tape pools. You specify custom tape pools to list by specifying one or more custom tape pool Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN, the operation lists all custom tape pools. This operation supports pagination. You can optionally specify the Limit parameter in the body to limit the number of tape pools in the response. If the number of tape pools returned in the response is truncated, the response includes a Marker element that you can use in your subsequent request to retrieve the next set of tape pools.

```sql
SELECT
pool_arn,
pool_name,
pool_status,
retention_lock_time_in_days,
retention_lock_type,
storage_class
FROM aws.storagegateway.tape_pools
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tape_pool"
    values={[
        { label: 'create_tape_pool', value: 'create_tape_pool' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tape_pool">

Creates a new custom tape pool. You can use custom tape pool to enable tape retention lock on tapes that are archived in the custom pool.

```sql
INSERT INTO aws.storagegateway.tape_pools (
PoolName,
StorageClass,
RetentionLockType,
RetentionLockTimeInDays,
Tags,
region
)
SELECT 
'{{ PoolName }}' /* required */,
'{{ StorageClass }}' /* required */,
'{{ RetentionLockType }}',
{{ RetentionLockTimeInDays }},
'{{ Tags }}',
'{{ region }}'
RETURNING
pool_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tape_pools
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tape_pools resource.
    - name: PoolName
      value: "{{ PoolName }}"
      description: |
        The name of the new custom tape pool.
    - name: StorageClass
      value: "{{ StorageClass }}"
      description: |
        The storage class that is associated with the new custom pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.
      valid_values: ['DEEP_ARCHIVE', 'GLACIER']
    - name: RetentionLockType
      value: "{{ RetentionLockType }}"
      description: |
        Tape retention lock can be configured in two modes. When configured in governance mode, Amazon Web Services accounts with specific IAM permissions are authorized to remove the tape retention lock from archived virtual tapes. When configured in compliance mode, the tape retention lock cannot be removed by any user, including the root Amazon Web Services account.
      valid_values: ['COMPLIANCE', 'GOVERNANCE', 'NONE']
    - name: RetentionLockTimeInDays
      value: {{ RetentionLockTimeInDays }}
      description: |
        Tape retention lock time is set in days. Tape retention lock can be enabled for up to 100 years (36,500 days).
    - name: Tags
      description: |
        A list of up to 50 tags that can be assigned to tape pool. Each tag is a key-value pair. Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="assign_tape_pool"
    values={[
        { label: 'assign_tape_pool', value: 'assign_tape_pool' }
    ]}
>
<TabItem value="assign_tape_pool">

Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or S3 Glacier Deep Archive) that corresponds to the pool.

```sql
UPDATE aws.storagegateway.tape_pools
SET 
TapeARN = '{{ TapeARN }}',
PoolId = '{{ PoolId }}',
BypassGovernanceRetention = {{ BypassGovernanceRetention }}
WHERE 
region = '{{ region }}' --required
AND TapeARN = '{{ TapeARN }}' --required
AND PoolId = '{{ PoolId }}' --required
RETURNING
tape_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tape_pool"
    values={[
        { label: 'delete_tape_pool', value: 'delete_tape_pool' }
    ]}
>
<TabItem value="delete_tape_pool">

Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes in the pool and if there are no automatic tape creation policies that reference the custom tape pool.

```sql
DELETE FROM aws.storagegateway.tape_pools
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
