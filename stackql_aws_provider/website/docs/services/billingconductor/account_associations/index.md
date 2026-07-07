--- 
title: account_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - account_associations
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

Creates, updates, deletes, gets or lists an <code>account_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billingconductor.account_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_account_associations"
    values={[
        { label: 'list_account_associations', value: 'list_account_associations' }
    ]}
>
<TabItem value="list_account_associations">

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
    <td><CopyableCode code="AccountEmail" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account email.</td>
</tr>
<tr>
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The associating array of account IDs. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AccountName" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account name.</td>
</tr>
<tr>
    <td><CopyableCode code="BillingGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Billing Group Arn that the linked account is associated to. (pattern: &lt;code&gt;(arn:aws(-cn)?:billingconductor::&#91;0-9&#93;&#123;12&#125;:billinggroup/)?&#91;a-zA-Z0-9&#93;&#123;10,12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_account_associations"><CopyableCode code="list_account_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This is a paginated call to list linked accounts that are linked to the payer account for the specified time period. If no information is provided, the current billing period is used. The response will optionally include the billing group that's associated with the linked account.</td>
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
    defaultValue="list_account_associations"
    values={[
        { label: 'list_account_associations', value: 'list_account_associations' }
    ]}
>
<TabItem value="list_account_associations">

This is a paginated call to list linked accounts that are linked to the payer account for the specified time period. If no information is provided, the current billing period is used. The response will optionally include the billing group that's associated with the linked account.

```sql
SELECT
AccountEmail,
AccountId,
AccountName,
BillingGroupArn
FROM aws.billingconductor.account_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
