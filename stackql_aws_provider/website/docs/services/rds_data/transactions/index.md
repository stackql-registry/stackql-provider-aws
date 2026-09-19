--- 
title: transactions
hide_title: false
hide_table_of_contents: false
keywords:
  - transactions
  - rds_data
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds_data.transactions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#begin_transaction"><CopyableCode code="begin_transaction" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-secretArn"><code>secretArn</code></a></td>
    <td></td>
    <td>Starts a SQL transaction. A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours. A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically. For Aurora MySQL, DDL statements inside a transaction cause an implicit commit. We recommend that you run each MySQL DDL statement in a separate ExecuteStatement call with continueAfterTimeout enabled.</td>
</tr>
<tr>
    <td><a href="#commit_transaction"><CopyableCode code="commit_transaction" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-secretArn"><code>secretArn</code></a>, <a href="#parameter-transactionId"><code>transactionId</code></a></td>
    <td></td>
    <td>Ends a SQL transaction started with the BeginTransaction operation and commits the changes.</td>
</tr>
<tr>
    <td><a href="#rollback_transaction"><CopyableCode code="rollback_transaction" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-secretArn"><code>secretArn</code></a>, <a href="#parameter-transactionId"><code>transactionId</code></a></td>
    <td></td>
    <td>Performs a rollback of a transaction. Rolling back a transaction cancels its changes.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="begin_transaction"
    values={[
        { label: 'begin_transaction', value: 'begin_transaction' },
        { label: 'commit_transaction', value: 'commit_transaction' },
        { label: 'rollback_transaction', value: 'rollback_transaction' }
    ]}
>
<TabItem value="begin_transaction">

Starts a SQL transaction. A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours. A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically. For Aurora MySQL, DDL statements inside a transaction cause an implicit commit. We recommend that you run each MySQL DDL statement in a separate ExecuteStatement call with continueAfterTimeout enabled.

```sql
EXEC aws.rds_data.transactions.begin_transaction 
@region='{{ region }}' --required 
@@json=
'{
"resourceArn": "{{ resourceArn }}", 
"secretArn": "{{ secretArn }}", 
"database": "{{ database }}", 
"schema": "{{ schema }}"
}'
;
```
</TabItem>
<TabItem value="commit_transaction">

Ends a SQL transaction started with the BeginTransaction operation and commits the changes.

```sql
EXEC aws.rds_data.transactions.commit_transaction 
@region='{{ region }}' --required 
@@json=
'{
"resourceArn": "{{ resourceArn }}", 
"secretArn": "{{ secretArn }}", 
"transactionId": "{{ transactionId }}"
}'
;
```
</TabItem>
<TabItem value="rollback_transaction">

Performs a rollback of a transaction. Rolling back a transaction cancels its changes.

```sql
EXEC aws.rds_data.transactions.rollback_transaction 
@region='{{ region }}' --required 
@@json=
'{
"resourceArn": "{{ resourceArn }}", 
"secretArn": "{{ secretArn }}", 
"transactionId": "{{ transactionId }}"
}'
;
```
</TabItem>
</Tabs>
