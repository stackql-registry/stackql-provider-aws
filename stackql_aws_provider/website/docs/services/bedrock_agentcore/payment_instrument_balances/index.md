--- 
title: payment_instrument_balances
hide_title: false
hide_table_of_contents: false
keywords:
  - payment_instrument_balances
  - bedrock_agentcore
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

Creates, updates, deletes, gets or lists a <code>payment_instrument_balances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="payment_instrument_balances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.payment_instrument_balances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_payment_instrument_balance"
    values={[
        { label: 'get_payment_instrument_balance', value: 'get_payment_instrument_balance' }
    ]}
>
<TabItem value="get_payment_instrument_balance">

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
    <td><CopyableCode code="payment_instrument_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the payment instrument. (pattern: &lt;code&gt;payment-instrument-&#91;0-9a-zA-Z-&#93;&#123;15&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="token_balance" /></td>
    <td><code>object</code></td>
    <td>The balance of the supported token on the requested chain.</td>
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
    <td><a href="#get_payment_instrument_balance"><CopyableCode code="get_payment_instrument_balance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-User-Id"><code>X-Amzn-Bedrock-AgentCore-Payments-User-Id</code></a>, <a href="#parameter-X-Amzn-Bedrock-AgentCore-Payments-Agent-Name"><code>X-Amzn-Bedrock-AgentCore-Payments-Agent-Name</code></a></td>
    <td>Get the balance of a payment instrument</td>
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
<tr id="parameter-X-Amzn-Bedrock-AgentCore-Payments-Agent-Name">
    <td><CopyableCode code="X-Amzn-Bedrock-AgentCore-Payments-Agent-Name" /></td>
    <td><code>string</code></td>
    <td>The agent name associated with this request, used for observability.</td>
</tr>
<tr id="parameter-X-Amzn-Bedrock-AgentCore-Payments-User-Id">
    <td><CopyableCode code="X-Amzn-Bedrock-AgentCore-Payments-User-Id" /></td>
    <td><code>string</code></td>
    <td>The user ID associated with this payment instrument.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_payment_instrument_balance"
    values={[
        { label: 'get_payment_instrument_balance', value: 'get_payment_instrument_balance' }
    ]}
>
<TabItem value="get_payment_instrument_balance">

Get the balance of a payment instrument

```sql
SELECT
payment_instrument_id,
token_balance
FROM aws.bedrock_agentcore.payment_instrument_balances
WHERE region = '{{ region }}' -- required
AND `X-Amzn-Bedrock-AgentCore-Payments-User-Id` = '{{ X-Amzn-Bedrock-AgentCore-Payments-User-Id }}'
AND `X-Amzn-Bedrock-AgentCore-Payments-Agent-Name` = '{{ X-Amzn-Bedrock-AgentCore-Payments-Agent-Name }}'
;
```
</TabItem>
</Tabs>
