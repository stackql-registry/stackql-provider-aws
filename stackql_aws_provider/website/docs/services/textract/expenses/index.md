--- 
title: expenses
hide_title: false
hide_table_of_contents: false
keywords:
  - expenses
  - textract
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

Creates, updates, deletes, gets or lists an <code>expenses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="expenses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.textract.expenses" /></td></tr>
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
    <td><a href="#analyze_expense"><CopyableCode code="analyze_expense" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Document"><code>Document</code></a></td>
    <td></td>
    <td>AnalyzeExpense synchronously analyzes an input document for financially related relationships between text. Information is returned as ExpenseDocuments and seperated as follows: LineItemGroups- A data set containing LineItems which store information about the lines of text, such as an item purchased and its price on a receipt. SummaryFields- Contains all other information a receipt, such as header information or the vendors name.</td>
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
    defaultValue="analyze_expense"
    values={[
        { label: 'analyze_expense', value: 'analyze_expense' }
    ]}
>
<TabItem value="analyze_expense">

AnalyzeExpense synchronously analyzes an input document for financially related relationships between text. Information is returned as ExpenseDocuments and seperated as follows: LineItemGroups- A data set containing LineItems which store information about the lines of text, such as an item purchased and its price on a receipt. SummaryFields- Contains all other information a receipt, such as header information or the vendors name.

```sql
EXEC aws.textract.expenses.analyze_expense 
@region='{{ region }}' --required 
@@json=
'{
"Document": "{{ Document }}"
}'
;
```
</TabItem>
</Tabs>
