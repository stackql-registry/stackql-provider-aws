--- 
title: valid_db_instance_modifications
hide_title: false
hide_table_of_contents: false
keywords:
  - valid_db_instance_modifications
  - neptune
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

Creates, updates, deletes, gets or lists a <code>valid_db_instance_modifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="valid_db_instance_modifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune.valid_db_instance_modifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_valid_db_instance_modifications"
    values={[
        { label: 'describe_valid_db_instance_modifications', value: 'describe_valid_db_instance_modifications' }
    ]}
>
<TabItem value="describe_valid_db_instance_modifications">

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
    <td><CopyableCode code="Storage" /></td>
    <td><code>string</code></td>
    <td>Valid storage options for your DB instance.</td>
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
    <td><a href="#describe_valid_db_instance_modifications"><CopyableCode code="describe_valid_db_instance_modifications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>You can call DescribeValidDBInstanceModifications to learn what modifications you can make to your DB instance. You can use this information when you call ModifyDBInstance.</td>
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
<tr id="parameter-DBInstanceIdentifier">
    <td><CopyableCode code="DBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The customer identifier or the ARN of your DB instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_valid_db_instance_modifications"
    values={[
        { label: 'describe_valid_db_instance_modifications', value: 'describe_valid_db_instance_modifications' }
    ]}
>
<TabItem value="describe_valid_db_instance_modifications">

You can call DescribeValidDBInstanceModifications to learn what modifications you can make to your DB instance. You can use this information when you call ModifyDBInstance.

```sql
SELECT
Storage
FROM aws.neptune.valid_db_instance_modifications
WHERE DBInstanceIdentifier = '{{ DBInstanceIdentifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
