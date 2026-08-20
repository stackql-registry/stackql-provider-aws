--- 
title: credits
hide_title: false
hide_table_of_contents: false
keywords:
  - credits
  - billing
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

Creates, updates, deletes, gets or lists a <code>credits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="credits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billing.credits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_credits"
    values={[
        { label: 'get_credits', value: 'get_credits' }
    ]}
>
<TabItem value="get_credits">

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
    <td><CopyableCode code="credits" /></td>
    <td><code>array</code></td>
    <td>The list of credits matching the request. Returns an empty list when no credits exist.</td>
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
    <td><a href="#get_credits"><CopyableCode code="get_credits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of Amazon Web Services account credits for the specified account. Each credit includes its identifier, type, monetary amounts, applicable products, expiration, sharing configuration, and current enabled status. When the caller is the management account of a consolidated billing family and payerAccountFlag is true, the response aggregates credits across the entire family. Otherwise, the response includes only credits owned by the account specified in accountId.</td>
</tr>
<tr>
    <td><a href="#redeem_credits"><CopyableCode code="redeem_credits" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-promoCode"><code>promoCode</code></a></td>
    <td></td>
    <td>Redeems an Amazon Web Services promotional credit code on behalf of the calling account. On success, a new credit is added to the account's credit ledger with the amount, validity period, and applicable products defined by the promotion. The credit is then automatically applied to subsequent bills according to the standard credit application order.</td>
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
    defaultValue="get_credits"
    values={[
        { label: 'get_credits', value: 'get_credits' }
    ]}
>
<TabItem value="get_credits">

Returns the list of Amazon Web Services account credits for the specified account. Each credit includes its identifier, type, monetary amounts, applicable products, expiration, sharing configuration, and current enabled status. When the caller is the management account of a consolidated billing family and payerAccountFlag is true, the response aggregates credits across the entire family. Otherwise, the response includes only credits owned by the account specified in accountId.

```sql
SELECT
credits
FROM aws.billing.credits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="redeem_credits"
    values={[
        { label: 'redeem_credits', value: 'redeem_credits' }
    ]}
>
<TabItem value="redeem_credits">

Redeems an Amazon Web Services promotional credit code on behalf of the calling account. On success, a new credit is added to the account's credit ledger with the amount, validity period, and applicable products defined by the promotion. The credit is then automatically applied to subsequent bills according to the standard credit application order.

```sql
EXEC aws.billing.credits.redeem_credits 
@region='{{ region }}' --required 
@@json=
'{
"promoCode": "{{ promoCode }}"
}'
;
```
</TabItem>
</Tabs>
