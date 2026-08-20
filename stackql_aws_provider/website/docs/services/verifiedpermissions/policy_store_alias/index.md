--- 
title: policy_store_alias
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_store_alias
  - verifiedpermissions
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

Creates, updates, deletes, gets or lists a <code>policy_store_alias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policy_store_alias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.verifiedpermissions.policy_store_alias" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy_store_alias"
    values={[
        { label: 'get_policy_store_alias', value: 'get_policy_store_alias' }
    ]}
>
<TabItem value="get_policy_store_alias">

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
    <td><CopyableCode code="alias_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the policy store alias. (pattern: &lt;code&gt;arn:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="alias_name" /></td>
    <td><code>string</code></td>
    <td>The name of the policy store alias. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the policy store alias was created.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_store_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the policy store associated with the alias. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the policy store alias. Policy Store Aliases in the Active state can be used normally. When a policy store alias is deleted, it enters the PendingDeletion state. Policy Store Aliases in the PendingDeletion cannot be used, and creating a policy store alias with the same alias name will fail. (Active, PendingDeletion)</td>
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
    <td><a href="#get_policy_store_alias"><CopyableCode code="get_policy_store_alias" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about the specified policy store alias.</td>
</tr>
<tr>
    <td><a href="#create_policy_store_alias"><CopyableCode code="create_policy_store_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-aliasName"><code>aliasName</code></a>, <a href="#parameter-policyStoreId"><code>policyStoreId</code></a></td>
    <td></td>
    <td>Creates a policy store alias for the specified policy store. A policy store alias is an alternative identifier that you can use to reference a policy store in API operations. This operation is idempotent. If multiple CreatePolicyStoreAlias requests are made where the aliasName and policyStoreId fields are the same between the requests, subsequent requests will be ignored. For each duplicate CreatePolicyStoreAlias request, a Success response will be returned and a new policy store alias will not be created. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.</td>
</tr>
<tr>
    <td><a href="#delete_policy_store_alias"><CopyableCode code="delete_policy_store_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified policy store alias. This operation is idempotent. If you specify a policy store alias that does not exist, the request response will still return a successful HTTP 200 status code. By default, when a policy store alias is deleted, it enters the PendingDeletion state. When a policy store alias is in the PendingDeletion state, new policy store aliases cannot be created with the same name. If the policy store alias is used in an API that has a policyStoreId field, the operation will fail with a ResourceNotFound exception. To immediately delete a policy store alias and bypass the PendingDeletion state, set the deletionMode parameter to HardDelete. Verified Permissions is eventually consistent. If you hard delete a policy store alias and then immediately recreate it to be associated with a different policy store, requests that reference this alias may continue to be evaluated against the previously associated policy store for a short period of time.</td>
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
    defaultValue="get_policy_store_alias"
    values={[
        { label: 'get_policy_store_alias', value: 'get_policy_store_alias' }
    ]}
>
<TabItem value="get_policy_store_alias">

Retrieves details about the specified policy store alias.

```sql
SELECT
alias_arn,
alias_name,
created_at,
policy_store_id,
state
FROM aws.verifiedpermissions.policy_store_alias
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_policy_store_alias"
    values={[
        { label: 'create_policy_store_alias', value: 'create_policy_store_alias' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_policy_store_alias">

Creates a policy store alias for the specified policy store. A policy store alias is an alternative identifier that you can use to reference a policy store in API operations. This operation is idempotent. If multiple CreatePolicyStoreAlias requests are made where the aliasName and policyStoreId fields are the same between the requests, subsequent requests will be ignored. For each duplicate CreatePolicyStoreAlias request, a Success response will be returned and a new policy store alias will not be created. Verified Permissions is eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.

```sql
INSERT INTO aws.verifiedpermissions.policy_store_alias (
aliasName,
policyStoreId,
region
)
SELECT 
'{{ aliasName }}' /* required */,
'{{ policyStoreId }}' /* required */,
'{{ region }}'
RETURNING
alias_arn,
alias_name,
created_at,
policy_store_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: policy_store_alias
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the policy_store_alias resource.
    - name: aliasName
      value: "{{ aliasName }}"
      description: |
        Specifies the name of the policy store alias to create. The name must be unique within your Amazon Web Services account and Amazon Web Services Region. The alias name must always be prefixed with policy-store-alias/.
    - name: policyStoreId
      value: "{{ policyStoreId }}"
      description: |
        Specifies the ID of the policy store to associate with the alias. The associated policy store must be specified using its ID. The alias name cannot be used.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_policy_store_alias"
    values={[
        { label: 'delete_policy_store_alias', value: 'delete_policy_store_alias' }
    ]}
>
<TabItem value="delete_policy_store_alias">

Deletes the specified policy store alias. This operation is idempotent. If you specify a policy store alias that does not exist, the request response will still return a successful HTTP 200 status code. By default, when a policy store alias is deleted, it enters the PendingDeletion state. When a policy store alias is in the PendingDeletion state, new policy store aliases cannot be created with the same name. If the policy store alias is used in an API that has a policyStoreId field, the operation will fail with a ResourceNotFound exception. To immediately delete a policy store alias and bypass the PendingDeletion state, set the deletionMode parameter to HardDelete. Verified Permissions is eventually consistent. If you hard delete a policy store alias and then immediately recreate it to be associated with a different policy store, requests that reference this alias may continue to be evaluated against the previously associated policy store for a short period of time.

```sql
DELETE FROM aws.verifiedpermissions.policy_store_alias
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
