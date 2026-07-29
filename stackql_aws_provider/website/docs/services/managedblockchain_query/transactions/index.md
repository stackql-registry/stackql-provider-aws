--- 
title: transactions
hide_title: false
hide_table_of_contents: false
keywords:
  - transactions
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

Creates, updates, deletes, gets or lists a <code>transactions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transactions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.managedblockchain_query.transactions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_transactions"
    values={[
        { label: 'list_transactions', value: 'list_transactions' },
        { label: 'get_transaction', value: 'get_transaction' }
    ]}
>
<TabItem value="list_transactions">

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
    <td><CopyableCode code="confirmation_status" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to list transactions that have not reached Finality. (FINAL, NONFINAL)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The blockchain network where the transaction occurred. (ETHEREUM_MAINNET, ETHEREUM_SEPOLIA_TESTNET, BITCOIN_MAINNET, BITCOIN_TESTNET)</td>
</tr>
<tr>
    <td><CopyableCode code="transaction_hash" /></td>
    <td><code>string</code></td>
    <td>The hash of a transaction. It is generated when a transaction is created. (pattern: &lt;code&gt;(0x&#91;A-Fa-f0-9&#93;&#123;64&#125;|&#91;A-Fa-f0-9&#93;&#123;64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="transaction_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of a Bitcoin transaction. It is generated when a transaction is created. (pattern: &lt;code&gt;(0x&#91;A-Fa-f0-9&#93;&#123;64&#125;|&#91;A-Fa-f0-9&#93;&#123;64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="transaction_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the transaction occurred.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_transaction">

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
    <td><CopyableCode code="block_hash" /></td>
    <td><code>string</code></td>
    <td>The block hash is a unique identifier for a block. It is a fixed-size string that is calculated by using the information in the block. The block hash is used to verify the integrity of the data in the block. (pattern: &lt;code&gt;(0x&#91;A-Fa-f0-9&#93;&#123;64&#125;|&#91;A-Fa-f0-9&#93;&#123;64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="block_number" /></td>
    <td><code>string</code></td>
    <td>The block number in which the transaction is recorded.</td>
</tr>
<tr>
    <td><CopyableCode code="confirmation_status" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the transaction has reached Finality. (FINAL, NONFINAL)</td>
</tr>
<tr>
    <td><CopyableCode code="contract_address" /></td>
    <td><code>string</code></td>
    <td>The blockchain address for the contract. (pattern: &lt;code&gt;&#91;-A-Za-z0-9&#93;&#123;13,74&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cumulative_gas_used" /></td>
    <td><code>string</code></td>
    <td>The amount of gas used up to the specified point in the block.</td>
</tr>
<tr>
    <td><CopyableCode code="effective_gas_price" /></td>
    <td><code>string</code></td>
    <td>The effective gas price.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_status" /></td>
    <td><code>string</code></td>
    <td>Identifies whether the transaction has succeeded or failed. (FAILED, SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="from" /></td>
    <td><code>string</code></td>
    <td>The initiator of the transaction. It is either in the form a public key or a contract address. (pattern: &lt;code&gt;&#91;-A-Za-z0-9&#93;&#123;13,74&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="gas_used" /></td>
    <td><code>string</code></td>
    <td>The amount of gas used for the transaction.</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The blockchain network where the transaction occurred. (ETHEREUM_MAINNET, ETHEREUM_SEPOLIA_TESTNET, BITCOIN_MAINNET, BITCOIN_TESTNET)</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_transactions" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of transactions in the block.</td>
</tr>
<tr>
    <td><CopyableCode code="signature_r" /></td>
    <td><code>string</code></td>
    <td>The signature of the transaction. The X coordinate of a point R.</td>
</tr>
<tr>
    <td><CopyableCode code="signature_s" /></td>
    <td><code>string</code></td>
    <td>The signature of the transaction. The Y coordinate of a point S.</td>
</tr>
<tr>
    <td><CopyableCode code="signature_v" /></td>
    <td><code>integer</code></td>
    <td>The signature of the transaction. The Z coordinate of a point V.</td>
</tr>
<tr>
    <td><CopyableCode code="to" /></td>
    <td><code>string</code></td>
    <td>The identifier of the transaction. It is generated whenever a transaction is verified and added to the blockchain. (pattern: &lt;code&gt;&#91;-A-Za-z0-9&#93;&#123;13,74&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="transaction_fee" /></td>
    <td><code>string</code></td>
    <td>The transaction fee.</td>
</tr>
<tr>
    <td><CopyableCode code="transaction_hash" /></td>
    <td><code>string</code></td>
    <td>The hash of a transaction. It is generated when a transaction is created. (pattern: &lt;code&gt;(0x&#91;A-Fa-f0-9&#93;&#123;64&#125;|&#91;A-Fa-f0-9&#93;&#123;64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="transaction_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of a Bitcoin transaction. It is generated when a transaction is created.</td>
</tr>
<tr>
    <td><CopyableCode code="transaction_index" /></td>
    <td><code>integer (int64)</code></td>
    <td>The index of the transaction within a blockchain.</td>
</tr>
<tr>
    <td><CopyableCode code="transaction_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Timestamp of the transaction.</td>
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
    <td><a href="#list_transactions"><CopyableCode code="list_transactions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the transaction events for a transaction.</td>
</tr>
<tr>
    <td><a href="#get_transaction"><CopyableCode code="get_transaction" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of a transaction. This action will return transaction details for all transactions that are confirmed on the blockchain, even if they have not reached finality.</td>
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
    defaultValue="list_transactions"
    values={[
        { label: 'list_transactions', value: 'list_transactions' },
        { label: 'get_transaction', value: 'get_transaction' }
    ]}
>
<TabItem value="list_transactions">

Lists all the transaction events for a transaction.

```sql
SELECT
confirmation_status,
network,
transaction_hash,
transaction_id,
transaction_timestamp
FROM aws.managedblockchain_query.transactions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_transaction">

Gets the details of a transaction. This action will return transaction details for all transactions that are confirmed on the blockchain, even if they have not reached finality.

```sql
SELECT
block_hash,
block_number,
confirmation_status,
contract_address,
cumulative_gas_used,
effective_gas_price,
execution_status,
from,
gas_used,
network,
number_of_transactions,
signature_r,
signature_s,
signature_v,
to,
transaction_fee,
transaction_hash,
transaction_id,
transaction_index,
transaction_timestamp
FROM aws.managedblockchain_query.transactions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
