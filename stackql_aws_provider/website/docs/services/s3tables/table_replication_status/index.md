--- 
title: table_replication_status
hide_title: false
hide_table_of_contents: false
keywords:
  - table_replication_status
  - s3tables
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

Creates, updates, deletes, gets or lists a <code>table_replication_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_replication_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3tables.table_replication_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table_replication_status"
    values={[
        { label: 'get_table_replication_status', value: 'get_table_replication_status' }
    ]}
>
<TabItem value="get_table_replication_status">

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
    <td><CopyableCode code="destinations" /></td>
    <td><code>array</code></td>
    <td>An array of status information for each replication destination, including the current state, last successful update, and any error messages.</td>
</tr>
<tr>
    <td><CopyableCode code="source_table_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source table being replicated. (pattern: &lt;code&gt;(arn:aws&#91;-a-z0-9&#93;*:&#91;a-z0-9&#93;+:&#91;-a-z0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:bucket/&#91;a-z0-9_-&#93;&#123;3,63&#125;/table/&#91;a-zA-Z0-9-_&#93;&#123;1,255&#125;)&lt;/code&gt;)</td>
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
    <td><a href="#get_table_replication_status"><CopyableCode code="get_table_replication_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tableArn"><code>tableArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the replication status for a table, including the status of replication to each destination. This operation provides visibility into replication health and progress. Permissions You must have the s3tables:GetTableReplicationStatus permission to use this operation.</td>
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
<tr id="parameter-tableArn">
    <td><CopyableCode code="tableArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_table_replication_status"
    values={[
        { label: 'get_table_replication_status', value: 'get_table_replication_status' }
    ]}
>
<TabItem value="get_table_replication_status">

Retrieves the replication status for a table, including the status of replication to each destination. This operation provides visibility into replication health and progress. Permissions You must have the s3tables:GetTableReplicationStatus permission to use this operation.

```sql
SELECT
destinations,
source_table_arn
FROM aws.s3tables.table_replication_status
WHERE tableArn = '{{ tableArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
