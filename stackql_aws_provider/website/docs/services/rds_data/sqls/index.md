--- 
title: sqls
hide_title: false
hide_table_of_contents: false
keywords:
  - sqls
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

Creates, updates, deletes, gets or lists a <code>sqls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sqls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds_data.sqls" /></td></tr>
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
    <td><a href="#execute_sql"><CopyableCode code="execute_sql" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-dbClusterOrInstanceArn"><code>dbClusterOrInstanceArn</code></a>, <a href="#parameter-awsSecretStoreArn"><code>awsSecretStoreArn</code></a>, <a href="#parameter-sqlStatements"><code>sqlStatements</code></a></td>
    <td></td>
    <td>Runs one or more SQL statements. This operation is deprecated. Please use the BatchExecuteStatement or ExecuteStatement operation.</td>
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
    defaultValue="execute_sql"
    values={[
        { label: 'execute_sql', value: 'execute_sql' }
    ]}
>
<TabItem value="execute_sql">

Runs one or more SQL statements. This operation is deprecated. Please use the BatchExecuteStatement or ExecuteStatement operation.

```sql
EXEC aws.rds_data.sqls.execute_sql 
@region='{{ region }}' --required 
@@json=
'{
"dbClusterOrInstanceArn": "{{ dbClusterOrInstanceArn }}", 
"awsSecretStoreArn": "{{ awsSecretStoreArn }}", 
"sqlStatements": "{{ sqlStatements }}", 
"database": "{{ database }}", 
"schema": "{{ schema }}"
}'
;
```
</TabItem>
</Tabs>
