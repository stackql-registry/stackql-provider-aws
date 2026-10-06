--- 
title: statements
hide_title: false
hide_table_of_contents: false
keywords:
  - statements
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

Creates, updates, deletes, gets or lists a <code>statements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="statements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds_data.statements" /></td></tr>
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
    <td><a href="#batch_execute_statement"><CopyableCode code="batch_execute_statement" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-secretArn"><code>secretArn</code></a>, <a href="#parameter-sql"><code>sql</code></a></td>
    <td></td>
    <td>Runs a batch SQL statement over an array of data. You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations. If a call isn't part of a transaction because it doesn't include the transactionID parameter, changes that result from the call are committed automatically. There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set. The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</td>
</tr>
<tr>
    <td><a href="#execute_statement"><CopyableCode code="execute_statement" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-secretArn"><code>secretArn</code></a>, <a href="#parameter-sql"><code>sql</code></a></td>
    <td></td>
    <td>Runs a SQL statement against a database. If a call isn't part of a transaction because it doesn't include the transactionID parameter, changes that result from the call are committed automatically. If the binary response data from the database is more than 1 MB, the call is terminated.</td>
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
    defaultValue="batch_execute_statement"
    values={[
        { label: 'batch_execute_statement', value: 'batch_execute_statement' },
        { label: 'execute_statement', value: 'execute_statement' }
    ]}
>
<TabItem value="batch_execute_statement">

Runs a batch SQL statement over an array of data. You can run bulk update and insert operations for multiple records using a DML statement with different parameter sets. Bulk operations can provide a significant performance improvement over individual insert and update operations. If a call isn't part of a transaction because it doesn't include the transactionID parameter, changes that result from the call are committed automatically. There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and the size of each parameter set. The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.

```sql
EXEC aws.rds_data.statements.batch_execute_statement 
@region='{{ region }}' --required 
@@json=
'{
"resourceArn": "{{ resourceArn }}", 
"secretArn": "{{ secretArn }}", 
"sql": "{{ sql }}", 
"database": "{{ database }}", 
"schema": "{{ schema }}", 
"parameterSets": "{{ parameterSets }}", 
"transactionId": "{{ transactionId }}"
}'
;
```
</TabItem>
<TabItem value="execute_statement">

Runs a SQL statement against a database. If a call isn't part of a transaction because it doesn't include the transactionID parameter, changes that result from the call are committed automatically. If the binary response data from the database is more than 1 MB, the call is terminated.

```sql
EXEC aws.rds_data.statements.execute_statement 
@region='{{ region }}' --required 
@@json=
'{
"resourceArn": "{{ resourceArn }}", 
"secretArn": "{{ secretArn }}", 
"sql": "{{ sql }}", 
"database": "{{ database }}", 
"schema": "{{ schema }}", 
"parameters": "{{ parameters }}", 
"transactionId": "{{ transactionId }}", 
"includeResultMetadata": {{ includeResultMetadata }}, 
"continueAfterTimeout": {{ continueAfterTimeout }}, 
"resultSetOptions": "{{ resultSetOptions }}", 
"formatRecordsAs": "{{ formatRecordsAs }}"
}'
;
```
</TabItem>
</Tabs>
