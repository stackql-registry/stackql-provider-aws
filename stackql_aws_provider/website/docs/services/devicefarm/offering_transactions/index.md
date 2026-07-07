--- 
title: offering_transactions
hide_title: false
hide_table_of_contents: false
keywords:
  - offering_transactions
  - devicefarm
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

Creates, updates, deletes, gets or lists an <code>offering_transactions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="offering_transactions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.offering_transactions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_offering_transactions"
    values={[
        { label: 'list_offering_transactions', value: 'list_offering_transactions' }
    ]}
>
<TabItem value="list_offering_transactions">

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
    <td><CopyableCode code="cost" /></td>
    <td><code>object</code></td>
    <td>The cost of an offering transaction.</td>
</tr>
<tr>
    <td><CopyableCode code="createdOn" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date on which an offering transaction was created.</td>
</tr>
<tr>
    <td><CopyableCode code="offeringPromotionId" /></td>
    <td><code>string</code></td>
    <td>The ID that corresponds to a device offering promotion.</td>
</tr>
<tr>
    <td><CopyableCode code="offeringStatus" /></td>
    <td><code>object</code></td>
    <td>The status of an offering transaction.</td>
</tr>
<tr>
    <td><CopyableCode code="transactionId" /></td>
    <td><code>string</code></td>
    <td>The transaction ID of the offering transaction.</td>
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
    <td><a href="#list_offering_transactions"><CopyableCode code="list_offering_transactions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a NotEligible error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact aws-devicefarm-support@amazon.com.</td>
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
    defaultValue="list_offering_transactions"
    values={[
        { label: 'list_offering_transactions', value: 'list_offering_transactions' }
    ]}
>
<TabItem value="list_offering_transactions">

Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a NotEligible error if the user is not permitted to invoke the operation. If you must be able to invoke this operation, contact aws-devicefarm-support@amazon.com.

```sql
SELECT
cost,
createdOn,
offeringPromotionId,
offeringStatus,
transactionId
FROM aws.devicefarm.offering_transactions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
