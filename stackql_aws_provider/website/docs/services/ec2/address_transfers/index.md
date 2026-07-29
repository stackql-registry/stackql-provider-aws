--- 
title: address_transfers
hide_title: false
hide_table_of_contents: false
keywords:
  - address_transfers
  - ec2
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

Creates, updates, deletes, gets or lists an <code>address_transfers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="address_transfers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.address_transfers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_address_transfers"
    values={[
        { label: 'describe_address_transfers', value: 'describe_address_transfers' }
    ]}
>
<TabItem value="describe_address_transfers">

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
    <td><CopyableCode code="address_transfer_status" /></td>
    <td><code>string</code></td>
    <td>The Elastic IP address transfer status.</td>
</tr>
<tr>
    <td><CopyableCode code="allocation_id" /></td>
    <td><code>string</code></td>
    <td>The allocation ID of an Elastic IP address.</td>
</tr>
<tr>
    <td><CopyableCode code="public_ip" /></td>
    <td><code>string</code></td>
    <td>The Elastic IP address being transferred.</td>
</tr>
<tr>
    <td><CopyableCode code="transfer_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the account that you want to transfer the Elastic IP address to.</td>
</tr>
<tr>
    <td><CopyableCode code="transfer_offer_accepted_timestamp" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the Elastic IP address transfer was accepted.</td>
</tr>
<tr>
    <td><CopyableCode code="transfer_offer_expiration_timestamp" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the Elastic IP address transfer expired. When the source account starts the transfer, the transfer account has seven hours to allocate the Elastic IP address to complete the transfer, or the Elastic IP address will return to its original owner.</td>
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
    <td><a href="#describe_address_transfers"><CopyableCode code="describe_address_transfers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AllocationId"><code>AllocationId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes an Elastic IP address transfer. For more information, see Transfer Elastic IP addresses in the Amazon VPC User Guide. When you transfer an Elastic IP address, there is a two-step handshake between the source and transfer Amazon Web Services accounts. When the source account starts the transfer, the transfer account has seven days to accept the Elastic IP address transfer. During those seven days, the source account can view the pending transfer by using this action. After seven days, the transfer expires and ownership of the Elastic IP address returns to the source account. Accepted transfers are visible to the source account for 14 days after the transfers have been accepted.</td>
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
<tr id="parameter-AllocationId">
    <td><CopyableCode code="AllocationId" /></td>
    <td><code>array</code></td>
    <td>The allocation IDs of Elastic IP addresses.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of address transfers to return in one page of results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_address_transfers"
    values={[
        { label: 'describe_address_transfers', value: 'describe_address_transfers' }
    ]}
>
<TabItem value="describe_address_transfers">

Describes an Elastic IP address transfer. For more information, see Transfer Elastic IP addresses in the Amazon VPC User Guide. When you transfer an Elastic IP address, there is a two-step handshake between the source and transfer Amazon Web Services accounts. When the source account starts the transfer, the transfer account has seven days to accept the Elastic IP address transfer. During those seven days, the source account can view the pending transfer by using this action. After seven days, the transfer expires and ownership of the Elastic IP address returns to the source account. Accepted transfers are visible to the source account for 14 days after the transfers have been accepted.

```sql
SELECT
address_transfer_status,
allocation_id,
public_ip,
transfer_account_id,
transfer_offer_accepted_timestamp,
transfer_offer_expiration_timestamp
FROM aws.ec2.address_transfers
WHERE region = '{{ region }}' -- required
AND AllocationId = '{{ AllocationId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
