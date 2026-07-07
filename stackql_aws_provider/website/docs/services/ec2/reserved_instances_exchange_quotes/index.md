--- 
title: reserved_instances_exchange_quotes
hide_title: false
hide_table_of_contents: false
keywords:
  - reserved_instances_exchange_quotes
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

Creates, updates, deletes, gets or lists a <code>reserved_instances_exchange_quotes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reserved_instances_exchange_quotes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.reserved_instances_exchange_quotes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_reserved_instances_exchange_quote"
    values={[
        { label: 'get_reserved_instances_exchange_quote', value: 'get_reserved_instances_exchange_quote' }
    ]}
>
<TabItem value="get_reserved_instances_exchange_quote">

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
    <td><CopyableCode code="CurrencyCode" /></td>
    <td><code>string</code></td>
    <td>The currency of the transaction.</td>
</tr>
<tr>
    <td><CopyableCode code="IsValidExchange" /></td>
    <td><code>boolean</code></td>
    <td>If true, the exchange is valid. If false, the exchange cannot be completed.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputReservedInstancesWillExpireAt" /></td>
    <td><code>string</code></td>
    <td>The new end date of the reservation term.</td>
</tr>
<tr>
    <td><CopyableCode code="PaymentDue" /></td>
    <td><code>string</code></td>
    <td>The total true upfront charge for the exchange.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservedInstanceValueRollup" /></td>
    <td><code>string</code></td>
    <td>The cost associated with the Reserved Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservedInstanceValueSet" /></td>
    <td><code>string</code></td>
    <td>The configuration of your Convertible Reserved Instances.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetConfigurationValueRollup" /></td>
    <td><code>string</code></td>
    <td>The cost associated with the Reserved Instance.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetConfigurationValueSet" /></td>
    <td><code>string</code></td>
    <td>The values of the target Convertible Reserved Instances.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidationFailureReason" /></td>
    <td><code>string</code></td>
    <td>Describes the reason why the exchange cannot be completed.</td>
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
    <td><a href="#get_reserved_instances_exchange_quote"><CopyableCode code="get_reserved_instances_exchange_quote" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ReservedInstanceId"><code>ReservedInstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TargetConfiguration"><code>TargetConfiguration</code></a></td>
    <td>Returns a quote and exchange information for exchanging one or more specified Convertible Reserved Instances for a new Convertible Reserved Instance. If the exchange cannot be performed, the reason is returned in the response. Use AcceptReservedInstancesExchangeQuote to perform the exchange.</td>
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
<tr id="parameter-ReservedInstanceId">
    <td><CopyableCode code="ReservedInstanceId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Convertible Reserved Instances to exchange.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-TargetConfiguration">
    <td><CopyableCode code="TargetConfiguration" /></td>
    <td><code>array</code></td>
    <td>The configuration of the target Convertible Reserved Instance to exchange for your current Convertible Reserved Instances.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_reserved_instances_exchange_quote"
    values={[
        { label: 'get_reserved_instances_exchange_quote', value: 'get_reserved_instances_exchange_quote' }
    ]}
>
<TabItem value="get_reserved_instances_exchange_quote">

Returns a quote and exchange information for exchanging one or more specified Convertible Reserved Instances for a new Convertible Reserved Instance. If the exchange cannot be performed, the reason is returned in the response. Use AcceptReservedInstancesExchangeQuote to perform the exchange.

```sql
SELECT
CurrencyCode,
IsValidExchange,
OutputReservedInstancesWillExpireAt,
PaymentDue,
ReservedInstanceValueRollup,
ReservedInstanceValueSet,
TargetConfigurationValueRollup,
TargetConfigurationValueSet,
ValidationFailureReason
FROM aws.ec2.reserved_instances_exchange_quotes
WHERE ReservedInstanceId = '{{ ReservedInstanceId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND TargetConfiguration = '{{ TargetConfiguration }}'
;
```
</TabItem>
</Tabs>
