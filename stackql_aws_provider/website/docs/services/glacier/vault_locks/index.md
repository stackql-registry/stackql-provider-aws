--- 
title: vault_locks
hide_title: false
hide_table_of_contents: false
keywords:
  - vault_locks
  - glacier
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

Creates, updates, deletes, gets or lists a <code>vault_locks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vault_locks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glacier.vault_locks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vault_lock"
    values={[
        { label: 'get_vault_lock', value: 'get_vault_lock' }
    ]}
>
<TabItem value="get_vault_lock">

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
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string</code></td>
    <td>The UTC date and time at which the vault lock was put into the InProgress state.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpirationDate" /></td>
    <td><code>string</code></td>
    <td>The UTC date and time at which the lock ID expires. This value can be null if the vault lock is in a Locked state.</td>
</tr>
<tr>
    <td><CopyableCode code="Policy" /></td>
    <td><code>string</code></td>
    <td>The vault lock policy as a JSON string, which uses "\" as an escape character.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the vault lock. InProgress or Locked.</td>
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
    <td><a href="#get_vault_lock"><CopyableCode code="get_vault_lock" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation retrieves the following attributes from the lock-policy subresource set on the specified vault: The vault lock policy set on the vault. The state of the vault lock, which is either InProgess or Locked. When the lock ID expires. The lock ID is used to complete the vault locking process. When the vault lock was initiated and put into the InProgress state. A vault lock is put into the InProgress state by calling InitiateVaultLock. A vault lock is put into the Locked state by calling CompleteVaultLock. You can abort the vault locking process by calling AbortVaultLock. For more information about the vault locking process, Amazon Glacier Vault Lock. If there is no vault lock policy set on the vault, the operation returns a 404 Not found error. For more information about vault lock policies, Amazon Glacier Access Control with Vault Lock Policies.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The AccountId value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '-' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-vault_name">
    <td><CopyableCode code="vault_name" /></td>
    <td><code>string</code></td>
    <td>The name of the vault.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_vault_lock"
    values={[
        { label: 'get_vault_lock', value: 'get_vault_lock' }
    ]}
>
<TabItem value="get_vault_lock">

This operation retrieves the following attributes from the lock-policy subresource set on the specified vault: The vault lock policy set on the vault. The state of the vault lock, which is either InProgess or Locked. When the lock ID expires. The lock ID is used to complete the vault locking process. When the vault lock was initiated and put into the InProgress state. A vault lock is put into the InProgress state by calling InitiateVaultLock. A vault lock is put into the Locked state by calling CompleteVaultLock. You can abort the vault locking process by calling AbortVaultLock. For more information about the vault locking process, Amazon Glacier Vault Lock. If there is no vault lock policy set on the vault, the operation returns a 404 Not found error. For more information about vault lock policies, Amazon Glacier Access Control with Vault Lock Policies.

```sql
SELECT
CreationDate,
ExpirationDate,
Policy,
State
FROM aws.glacier.vault_locks
WHERE account_id = '{{ account_id }}' -- required
AND vault_name = '{{ vault_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
