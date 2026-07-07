--- 
title: transaction_events
hide_title: false
hide_table_of_contents: false
keywords:
  - transaction_events
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

Creates, updates, deletes, gets or lists a <code>transaction_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transaction_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.managedblockchain_query.transaction_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_transaction_events"
    values={[
        { label: 'list_transaction_events', value: 'list_transaction_events' }
    ]}
>
<TabItem value="list_transaction_events">

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
    <td><CopyableCode code="blockchainInstant" /></td>
    <td><code>object</code></td>
    <td>The container for time.</td>
</tr>
<tr>
    <td><CopyableCode code="confirmationStatus" /></td>
    <td><code>string</code></td>
    <td>This container specifies whether the transaction has reached Finality. (FINAL, NONFINAL)</td>
</tr>
<tr>
    <td><CopyableCode code="contractAddress" /></td>
    <td><code>string</code></td>
    <td>The blockchain address for the contract (pattern: &lt;code&gt;&#91;-A-Za-z0-9&#93;&#123;13,74&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="eventType" /></td>
    <td><code>string</code></td>
    <td>The type of transaction event. (ERC20_TRANSFER, ERC20_MINT, ERC20_BURN, ERC20_DEPOSIT, ERC20_WITHDRAWAL, ERC721_TRANSFER, ERC1155_TRANSFER, BITCOIN_VIN, BITCOIN_VOUT, INTERNAL_ETH_TRANSFER, ETH_TRANSFER)</td>
</tr>
<tr>
    <td><CopyableCode code="from" /></td>
    <td><code>string</code></td>
    <td>The wallet address initiating the transaction. It can either be a public key or a contract. (pattern: &lt;code&gt;&#91;-A-Za-z0-9&#93;&#123;13,74&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>The blockchain network where the transaction occurred. (ETHEREUM_MAINNET, ETHEREUM_SEPOLIA_TESTNET, BITCOIN_MAINNET, BITCOIN_TESTNET)</td>
</tr>
<tr>
    <td><CopyableCode code="spentVoutIndex" /></td>
    <td><code>integer</code></td>
    <td>The position of the spent transaction output in the output list of the creating transaction. This is only returned for BITCOIN_VIN event types.</td>
</tr>
<tr>
    <td><CopyableCode code="spentVoutTransactionHash" /></td>
    <td><code>string</code></td>
    <td>The transactionHash that created the spent transaction output. This is only returned for BITCOIN_VIN event types.</td>
</tr>
<tr>
    <td><CopyableCode code="spentVoutTransactionId" /></td>
    <td><code>string</code></td>
    <td>The transactionId that created the spent transaction output. This is only returned for BITCOIN_VIN event types.</td>
</tr>
<tr>
    <td><CopyableCode code="to" /></td>
    <td><code>string</code></td>
    <td>The wallet address receiving the transaction. It can either be a public key or a contract. (pattern: &lt;code&gt;&#91;-A-Za-z0-9&#93;&#123;13,74&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tokenId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the token involved in the transaction. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;1,66&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="transactionHash" /></td>
    <td><code>string</code></td>
    <td>The hash of a transaction. It is generated when a transaction is created. (pattern: &lt;code&gt;(0x&#91;A-Fa-f0-9&#93;&#123;64&#125;|&#91;A-Fa-f0-9&#93;&#123;64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="transactionId" /></td>
    <td><code>string</code></td>
    <td>The identifier of a Bitcoin transaction. It is generated when a transaction is created.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value that was transacted.</td>
</tr>
<tr>
    <td><CopyableCode code="voutIndex" /></td>
    <td><code>integer</code></td>
    <td>The position of the transaction output in the transaction output list.</td>
</tr>
<tr>
    <td><CopyableCode code="voutSpent" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the transaction output is spent or unspent. This is only returned for BITCOIN_VOUT event types. This is only returned for BITCOIN_VOUT event types.</td>
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
    <td><a href="#list_transaction_events"><CopyableCode code="list_transaction_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the transaction events for a transaction This action will return transaction details for all transactions that are confirmed on the blockchain, even if they have not reached finality.</td>
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
    defaultValue="list_transaction_events"
    values={[
        { label: 'list_transaction_events', value: 'list_transaction_events' }
    ]}
>
<TabItem value="list_transaction_events">

Lists all the transaction events for a transaction This action will return transaction details for all transactions that are confirmed on the blockchain, even if they have not reached finality.

```sql
SELECT
blockchainInstant,
confirmationStatus,
contractAddress,
eventType,
from,
network,
spentVoutIndex,
spentVoutTransactionHash,
spentVoutTransactionId,
to,
tokenId,
transactionHash,
transactionId,
value,
voutIndex,
voutSpent
FROM aws.managedblockchain_query.transaction_events
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
