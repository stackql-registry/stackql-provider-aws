--- 
title: token_balances
hide_title: false
hide_table_of_contents: false
keywords:
  - token_balances
  - managedblockchain_query
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

Creates, updates, deletes, gets or lists a <code>token_balances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="token_balances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.managedblockchain_query.token_balances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_token_balance"
    values={[
        { label: 'get_token_balance', value: 'get_token_balance' },
        { label: 'list_token_balances', value: 'list_token_balances' },
        { label: 'batch_get_token_balance', value: 'batch_get_token_balance' }
    ]}
>
<TabItem value="get_token_balance">

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
    <td><CopyableCode code="at_blockchain_instant" /></td>
    <td><code>object</code></td>
    <td>The container for time.</td>
</tr>
<tr>
    <td><CopyableCode code="balance" /></td>
    <td><code>string</code></td>
    <td>The container for the token balance.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>object</code></td>
    <td>The container for time.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_identifier" /></td>
    <td><code>object</code></td>
    <td>The container for the owner identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="token_identifier" /></td>
    <td><code>object</code></td>
    <td>The container for the identifier for the token including the unique token ID and its blockchain network. Only the native tokens BTC and ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_token_balances">

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
    <td><CopyableCode code="at_blockchain_instant" /></td>
    <td><code>object</code></td>
    <td>The container for time.</td>
</tr>
<tr>
    <td><CopyableCode code="balance" /></td>
    <td><code>string</code></td>
    <td>The container of the token balance.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>object</code></td>
    <td>The container for time.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_identifier" /></td>
    <td><code>object</code></td>
    <td>The container for the owner identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="token_identifier" /></td>
    <td><code>object</code></td>
    <td>The container for the identifier for the token including the unique token ID and its blockchain network. Only the native tokens BTC and ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get_token_balance">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>An array of BatchGetTokenBalanceErrorItem objects returned from the request.</td>
</tr>
<tr>
    <td><CopyableCode code="token_balances" /></td>
    <td><code>array</code></td>
    <td>An array of BatchGetTokenBalanceOutputItem objects returned by the response.</td>
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
    <td><a href="#get_token_balance"><CopyableCode code="get_token_balance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the balance of a specific token, including native tokens, for a given address (wallet or contract) on the blockchain. Only the native tokens BTC and ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.</td>
</tr>
<tr>
    <td><a href="#list_token_balances"><CopyableCode code="list_token_balances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action returns the following for a given blockchain network: Lists all token balances owned by an address (either a contract address or a wallet address). Lists all token balances for all tokens created by a contract. Lists all token balances for a given token. You must always specify the network property of the tokenFilter when using this operation.</td>
</tr>
<tr>
    <td><a href="#batch_get_token_balance"><CopyableCode code="batch_get_token_balance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the token balance for a batch of tokens by using the BatchGetTokenBalance action for every token in the request. Only the native tokens BTC and ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.</td>
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
    defaultValue="get_token_balance"
    values={[
        { label: 'get_token_balance', value: 'get_token_balance' },
        { label: 'list_token_balances', value: 'list_token_balances' },
        { label: 'batch_get_token_balance', value: 'batch_get_token_balance' }
    ]}
>
<TabItem value="get_token_balance">

Gets the balance of a specific token, including native tokens, for a given address (wallet or contract) on the blockchain. Only the native tokens BTC and ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.

```sql
SELECT
at_blockchain_instant,
balance,
last_updated_time,
owner_identifier,
token_identifier
FROM aws.managedblockchain_query.token_balances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_token_balances">

This action returns the following for a given blockchain network: Lists all token balances owned by an address (either a contract address or a wallet address). Lists all token balances for all tokens created by a contract. Lists all token balances for a given token. You must always specify the network property of the tokenFilter when using this operation.

```sql
SELECT
at_blockchain_instant,
balance,
last_updated_time,
owner_identifier,
token_identifier
FROM aws.managedblockchain_query.token_balances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="batch_get_token_balance">

Gets the token balance for a batch of tokens by using the BatchGetTokenBalance action for every token in the request. Only the native tokens BTC and ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.

```sql
SELECT
errors,
token_balances
FROM aws.managedblockchain_query.token_balances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
