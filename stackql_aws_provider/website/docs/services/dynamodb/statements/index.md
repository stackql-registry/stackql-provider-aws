--- 
title: statements
hide_title: false
hide_table_of_contents: false
keywords:
  - statements
  - dynamodb
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dynamodb.statements" /></td></tr>
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
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Statements"><code>Statements</code></a></td>
    <td></td>
    <td>This operation allows you to perform batch reads or writes on data stored in DynamoDB, using PartiQL. Each read statement in a BatchExecuteStatement must specify an equality condition on all key attributes. This enforces that each SELECT statement in a batch returns at most a single item. For more information, see Running batch operations with PartiQL for DynamoDB . The entire batch must consist of either read statements or write statements, you cannot mix both in one batch. A HTTP 200 response does not mean that all statements in the BatchExecuteStatement succeeded. Error details for individual statements can be found under the Error field of the BatchStatementResponse for each statement.</td>
</tr>
<tr>
    <td><a href="#execute_statement"><CopyableCode code="execute_statement" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Statement"><code>Statement</code></a></td>
    <td></td>
    <td>This operation allows you to perform reads and singleton writes on data stored in DynamoDB, using PartiQL. For PartiQL reads (SELECT statement), if the total number of processed items exceeds the maximum dataset size limit of 1 MB, the read stops and results are returned to the user as a LastEvaluatedKey value to continue the read in a subsequent operation. If the filter criteria in WHERE clause does not match any data, the read will return an empty result set. A single SELECT statement response can return up to the maximum number of items (if using the Limit parameter) or a maximum of 1 MB of data (and then apply any filtering to the results using WHERE clause). If LastEvaluatedKey is present in the response, you need to paginate the result set. If NextToken is present, you need to paginate the result set and include NextToken.</td>
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

This operation allows you to perform batch reads or writes on data stored in DynamoDB, using PartiQL. Each read statement in a BatchExecuteStatement must specify an equality condition on all key attributes. This enforces that each SELECT statement in a batch returns at most a single item. For more information, see Running batch operations with PartiQL for DynamoDB . The entire batch must consist of either read statements or write statements, you cannot mix both in one batch. A HTTP 200 response does not mean that all statements in the BatchExecuteStatement succeeded. Error details for individual statements can be found under the Error field of the BatchStatementResponse for each statement.

```sql
EXEC aws.dynamodb.statements.batch_execute_statement 
@region='{{ region }}' --required 
@@json=
'{
"Statements": "{{ Statements }}", 
"ReturnConsumedCapacity": "{{ ReturnConsumedCapacity }}"
}'
;
```
</TabItem>
<TabItem value="execute_statement">

This operation allows you to perform reads and singleton writes on data stored in DynamoDB, using PartiQL. For PartiQL reads (SELECT statement), if the total number of processed items exceeds the maximum dataset size limit of 1 MB, the read stops and results are returned to the user as a LastEvaluatedKey value to continue the read in a subsequent operation. If the filter criteria in WHERE clause does not match any data, the read will return an empty result set. A single SELECT statement response can return up to the maximum number of items (if using the Limit parameter) or a maximum of 1 MB of data (and then apply any filtering to the results using WHERE clause). If LastEvaluatedKey is present in the response, you need to paginate the result set. If NextToken is present, you need to paginate the result set and include NextToken.

```sql
EXEC aws.dynamodb.statements.execute_statement 
@region='{{ region }}' --required 
@@json=
'{
"Statement": "{{ Statement }}", 
"Parameters": "{{ Parameters }}", 
"ConsistentRead": {{ ConsistentRead }}, 
"NextToken": "{{ NextToken }}", 
"ReturnConsumedCapacity": "{{ ReturnConsumedCapacity }}", 
"Limit": {{ Limit }}, 
"ReturnValuesOnConditionCheckFailure": "{{ ReturnValuesOnConditionCheckFailure }}"
}'
;
```
</TabItem>
</Tabs>
