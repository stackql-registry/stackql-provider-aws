--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
  - billingconductor
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

Creates, updates, deletes, gets or lists an <code>accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billingconductor.accounts" /></td></tr>
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
    <td><a href="#associate_accounts"><CopyableCode code="associate_accounts" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountIds"><code>AccountIds</code></a></td>
    <td></td>
    <td>Connects an array of account IDs in a consolidated billing family to a predefined billing group. The account IDs must be a part of the consolidated billing family during the current month, and not already associated with another billing group. The maximum number of accounts that can be associated in one call is 30.</td>
</tr>
<tr>
    <td><a href="#disassociate_accounts"><CopyableCode code="disassociate_accounts" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountIds"><code>AccountIds</code></a></td>
    <td></td>
    <td>Removes the specified list of account IDs from the given billing group.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="associate_accounts"
    values={[
        { label: 'associate_accounts', value: 'associate_accounts' }
    ]}
>
<TabItem value="associate_accounts">

Connects an array of account IDs in a consolidated billing family to a predefined billing group. The account IDs must be a part of the consolidated billing family during the current month, and not already associated with another billing group. The maximum number of accounts that can be associated in one call is 30.

```sql
UPDATE aws.billingconductor.accounts
SET 
Arn = '{{ Arn }}',
AccountIds = '{{ AccountIds }}'
WHERE 
region = '{{ region }}' --required
AND AccountIds = '{{ AccountIds }}' --required
RETURNING
arn;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_accounts"
    values={[
        { label: 'disassociate_accounts', value: 'disassociate_accounts' }
    ]}
>
<TabItem value="disassociate_accounts">

Removes the specified list of account IDs from the given billing group.

```sql
EXEC aws.billingconductor.accounts.disassociate_accounts 
@region='{{ region }}' --required 
@@json=
'{
"Arn": "{{ Arn }}", 
"AccountIds": "{{ AccountIds }}"
}'
;
```
</TabItem>
</Tabs>
