--- 
title: statement_result_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - statement_result_v2s
  - redshift_data
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

Creates, updates, deletes, gets or lists a <code>statement_result_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statement_result_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_data.statement_result_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_statement_result_v2"
    values={[
        { label: 'get_statement_result_v2', value: 'get_statement_result_v2' }
    ]}
>
<TabItem value="get_statement_result_v2">

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
    <td><CopyableCode code="CSVRecords" /></td>
    <td><code>string</code></td>
    <td>The results of the SQL statement in CSV format.</td>
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
    <td><a href="#get_statement_result_v2"><CopyableCode code="get_statement_result_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fetches the temporarily cached result of an SQL statement in CSV format. The ExecuteStatement or BatchExecuteStatement operation that ran the SQL statement must have specified ResultFormat as CSV. A token is returned to page through the statement results. For more information about the Amazon Redshift Data API and CLI usage examples, see Using the Amazon Redshift Data API in the Amazon Redshift Management Guide.</td>
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
    defaultValue="get_statement_result_v2"
    values={[
        { label: 'get_statement_result_v2', value: 'get_statement_result_v2' }
    ]}
>
<TabItem value="get_statement_result_v2">

Fetches the temporarily cached result of an SQL statement in CSV format. The ExecuteStatement or BatchExecuteStatement operation that ran the SQL statement must have specified ResultFormat as CSV. A token is returned to page through the statement results. For more information about the Amazon Redshift Data API and CLI usage examples, see Using the Amazon Redshift Data API in the Amazon Redshift Management Guide.

```sql
SELECT
CSVRecords
FROM aws.redshift_data.statement_result_v2s
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
