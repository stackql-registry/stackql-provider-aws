--- 
title: policy_store_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_store_aliases
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

Creates, updates, deletes, gets or lists a <code>policy_store_aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policy_store_aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.verifiedpermissions.policy_store_aliases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_policy_store_aliases"
    values={[
        { label: 'list_policy_store_aliases', value: 'list_policy_store_aliases' }
    ]}
>
<TabItem value="list_policy_store_aliases">

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
    <td><CopyableCode code="aliasArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the policy store alias. (pattern: &lt;code&gt;arn:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:&#91;^:&#93;*:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aliasName" /></td>
    <td><code>string</code></td>
    <td>The name of the policy store alias. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the policy store alias was created.</td>
</tr>
<tr>
    <td><CopyableCode code="policyStoreId" /></td>
    <td><code>string</code></td>
    <td>The ID of the policy store associated with the alias. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-/_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the policy store alias. Policy Store Aliases in the Active state can be used normally. When a policy store alias is deleted, it enters the PendingDeletion state. Policy Store Aliases in the PendingDeletion state cannot be used, and creating a policy store alias with the same alias name will fail. (Active, PendingDeletion)</td>
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
    <td><a href="#list_policy_store_aliases"><CopyableCode code="list_policy_store_aliases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of all policy store aliases in the calling Amazon Web Services account.</td>
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
    defaultValue="list_policy_store_aliases"
    values={[
        { label: 'list_policy_store_aliases', value: 'list_policy_store_aliases' }
    ]}
>
<TabItem value="list_policy_store_aliases">

Returns a paginated list of all policy store aliases in the calling Amazon Web Services account.

```sql
SELECT
aliasArn,
aliasName,
createdAt,
policyStoreId,
state
FROM aws.verifiedpermissions.policy_store_aliases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
