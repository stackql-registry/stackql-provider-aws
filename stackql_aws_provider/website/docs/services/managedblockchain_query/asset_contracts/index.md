--- 
title: asset_contracts
hide_title: false
hide_table_of_contents: false
keywords:
  - asset_contracts
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

Creates, updates, deletes, gets or lists an <code>asset_contracts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="asset_contracts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.managedblockchain_query.asset_contracts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_asset_contract"
    values={[
        { label: 'get_asset_contract', value: 'get_asset_contract' },
        { label: 'list_asset_contracts', value: 'list_asset_contracts' }
    ]}
>
<TabItem value="get_asset_contract">

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
    <td><CopyableCode code="contract_identifier" /></td>
    <td><code>object</code></td>
    <td>Container for the blockchain address and network information about a contract.</td>
</tr>
<tr>
    <td><CopyableCode code="deployer_address" /></td>
    <td><code>string</code></td>
    <td>The address of the deployer of contract. (pattern: &lt;code&gt;&#91;-A-Za-z0-9&#93;&#123;13,74&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata of the contract.</td>
</tr>
<tr>
    <td><CopyableCode code="token_standard" /></td>
    <td><code>string</code></td>
    <td>The token standard of the contract requested. (ERC20, ERC721, ERC1155)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_asset_contracts">

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
    <td><CopyableCode code="contract_identifier" /></td>
    <td><code>object</code></td>
    <td>Container for the blockchain address and network information about a contract.</td>
</tr>
<tr>
    <td><CopyableCode code="deployer_address" /></td>
    <td><code>string</code></td>
    <td>The address of the contract deployer. (pattern: &lt;code&gt;&#91;-A-Za-z0-9&#93;&#123;13,74&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="token_standard" /></td>
    <td><code>string</code></td>
    <td>The token standard of the contract. (ERC20, ERC721, ERC1155)</td>
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
    <td><a href="#get_asset_contract"><CopyableCode code="get_asset_contract" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the information about a specific contract deployed on the blockchain. The Bitcoin blockchain networks do not support this operation. Metadata is currently only available for some ERC-20 contracts. Metadata will be available for additional contracts in the future.</td>
</tr>
<tr>
    <td><a href="#list_asset_contracts"><CopyableCode code="list_asset_contracts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the contracts for a given contract type deployed by an address (either a contract address or a wallet address). The Bitcoin blockchain networks do not support this operation.</td>
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
    defaultValue="get_asset_contract"
    values={[
        { label: 'get_asset_contract', value: 'get_asset_contract' },
        { label: 'list_asset_contracts', value: 'list_asset_contracts' }
    ]}
>
<TabItem value="get_asset_contract">

Gets the information about a specific contract deployed on the blockchain. The Bitcoin blockchain networks do not support this operation. Metadata is currently only available for some ERC-20 contracts. Metadata will be available for additional contracts in the future.

```sql
SELECT
contract_identifier,
deployer_address,
metadata,
token_standard
FROM aws.managedblockchain_query.asset_contracts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_asset_contracts">

Lists all the contracts for a given contract type deployed by an address (either a contract address or a wallet address). The Bitcoin blockchain networks do not support this operation.

```sql
SELECT
contract_identifier,
deployer_address,
token_standard
FROM aws.managedblockchain_query.asset_contracts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
