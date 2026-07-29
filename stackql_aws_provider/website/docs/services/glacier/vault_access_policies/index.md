--- 
title: vault_access_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - vault_access_policies
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

Creates, updates, deletes, gets or lists a <code>vault_access_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vault_access_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glacier.vault_access_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vault_access_policy"
    values={[
        { label: 'get_vault_access_policy', value: 'get_vault_access_policy' }
    ]}
>
<TabItem value="get_vault_access_policy">

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
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The vault access policy.</td>
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
    <td><a href="#get_vault_access_policy"><CopyableCode code="get_vault_access_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation retrieves the access-policy subresource set on the vault; for more information on setting this subresource, see Set Vault Access Policy (PUT access-policy). If there is no access policy set on the vault, the operation returns a 404 Not found error. For more information about vault access policies, see Amazon Glacier Access Control with Vault Access Policies.</td>
</tr>
<tr>
    <td><a href="#set_vault_access_policy"><CopyableCode code="set_vault_access_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation configures an access policy for a vault and will overwrite an existing policy. To configure a vault access policy, send a PUT request to the access-policy subresource of the vault. An access policy is specific to a vault and is also called a vault subresource. You can set one access policy per vault and the policy can be up to 20 KB in size. For more information about vault access policies, see Amazon Glacier Access Control with Vault Access Policies.</td>
</tr>
<tr>
    <td><a href="#delete_vault_access_policy"><CopyableCode code="delete_vault_access_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-vault_name"><code>vault_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation deletes the access policy associated with the specified vault. The operation is eventually consistent; that is, it might take some time for Amazon Glacier to completely remove the access policy, and you might still see the effect of the policy for a short time after you send the delete request. This operation is idempotent. You can invoke delete multiple times, even if there is no policy associated with the vault. For more information about vault access policies, see Amazon Glacier Access Control with Vault Access Policies.</td>
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
    defaultValue="get_vault_access_policy"
    values={[
        { label: 'get_vault_access_policy', value: 'get_vault_access_policy' }
    ]}
>
<TabItem value="get_vault_access_policy">

This operation retrieves the access-policy subresource set on the vault; for more information on setting this subresource, see Set Vault Access Policy (PUT access-policy). If there is no access policy set on the vault, the operation returns a 404 Not found error. For more information about vault access policies, see Amazon Glacier Access Control with Vault Access Policies.

```sql
SELECT
policy
FROM aws.glacier.vault_access_policies
WHERE account_id = '{{ account_id }}' -- required
AND vault_name = '{{ vault_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_vault_access_policy"
    values={[
        { label: 'set_vault_access_policy', value: 'set_vault_access_policy' }
    ]}
>
<TabItem value="set_vault_access_policy">

This operation configures an access policy for a vault and will overwrite an existing policy. To configure a vault access policy, send a PUT request to the access-policy subresource of the vault. An access policy is specific to a vault and is also called a vault subresource. You can set one access policy per vault and the policy can be up to 20 KB in size. For more information about vault access policies, see Amazon Glacier Access Control with Vault Access Policies.

```sql
UPDATE aws.glacier.vault_access_policies
SET 
policy = '{{ policy }}'
WHERE 
account_id = '{{ account_id }}' --required
AND vault_name = '{{ vault_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vault_access_policy"
    values={[
        { label: 'delete_vault_access_policy', value: 'delete_vault_access_policy' }
    ]}
>
<TabItem value="delete_vault_access_policy">

This operation deletes the access policy associated with the specified vault. The operation is eventually consistent; that is, it might take some time for Amazon Glacier to completely remove the access policy, and you might still see the effect of the policy for a short time after you send the delete request. This operation is idempotent. You can invoke delete multiple times, even if there is no policy associated with the vault. For more information about vault access policies, see Amazon Glacier Access Control with Vault Access Policies.

```sql
DELETE FROM aws.glacier.vault_access_policies
WHERE account_id = '{{ account_id }}' --required
AND vault_name = '{{ vault_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
