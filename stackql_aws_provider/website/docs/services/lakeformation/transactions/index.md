--- 
title: transactions
hide_title: false
hide_table_of_contents: false
keywords:
  - transactions
  - lakeformation
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.transactions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_transaction"
    values={[
        { label: 'describe_transaction', value: 'describe_transaction' },
        { label: 'list_transactions', value: 'list_transactions' }
    ]}
>
<TabItem value="describe_transaction">

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
    <td><CopyableCode code="TransactionEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the transaction committed or aborted, if it is not currently active.</td>
</tr>
<tr>
    <td><CopyableCode code="TransactionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transaction. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TransactionStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the transaction started.</td>
</tr>
<tr>
    <td><CopyableCode code="TransactionStatus" /></td>
    <td><code>string</code></td>
    <td>A status of ACTIVE, COMMITTED, or ABORTED. (ACTIVE, COMMITTED, ABORTED, COMMIT_IN_PROGRESS)</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A continuation token indicating whether additional data is available.</td>
</tr>
<tr>
    <td><CopyableCode code="Transactions" /></td>
    <td><code>array</code></td>
    <td>A list of transactions. The record for each transaction is a TransactionDescription object.</td>
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
    <td><a href="#describe_transaction"><CopyableCode code="describe_transaction" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of a single transaction.</td>
</tr>
<tr>
    <td><a href="#list_transactions"><CopyableCode code="list_transactions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned. This operation can help you identify uncommitted transactions or to get information about transactions.</td>
</tr>
<tr>
    <td><a href="#delete_objects_on_cancel"><CopyableCode code="delete_objects_on_cancel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels. The Glue ETL library function write_dynamic_frame.from_catalog() includes an option to automatically call DeleteObjectsOnCancel before writes. For more information, see Rolling Back Amazon S3 Writes.</td>
</tr>
<tr>
    <td><a href="#commit_transaction"><CopyableCode code="commit_transaction" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TransactionId"><code>TransactionId</code></a></td>
    <td></td>
    <td>Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction.</td>
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
    defaultValue="describe_transaction"
    values={[
        { label: 'describe_transaction', value: 'describe_transaction' },
        { label: 'list_transactions', value: 'list_transactions' }
    ]}
>
<TabItem value="describe_transaction">

Returns the details of a single transaction.

```sql
SELECT
TransactionEndTime,
TransactionId,
TransactionStartTime,
TransactionStatus
FROM aws.lakeformation.transactions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_transactions">

Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned. This operation can help you identify uncommitted transactions or to get information about transactions.

```sql
SELECT
NextToken,
Transactions
FROM aws.lakeformation.transactions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_objects_on_cancel"
    values={[
        { label: 'delete_objects_on_cancel', value: 'delete_objects_on_cancel' }
    ]}
>
<TabItem value="delete_objects_on_cancel">

For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels. The Glue ETL library function write_dynamic_frame.from_catalog() includes an option to automatically call DeleteObjectsOnCancel before writes. For more information, see Rolling Back Amazon S3 Writes.

```sql
DELETE FROM aws.lakeformation.transactions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="commit_transaction"
    values={[
        { label: 'commit_transaction', value: 'commit_transaction' }
    ]}
>
<TabItem value="commit_transaction">

Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction.

```sql
EXEC aws.lakeformation.transactions.commit_transaction 
@region='{{ region }}' --required 
@@json=
'{
"TransactionId": "{{ TransactionId }}"
}'
;
```
</TabItem>
</Tabs>
