--- 
title: table_replications
hide_title: false
hide_table_of_contents: false
keywords:
  - table_replications
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

Creates, updates, deletes, gets or lists a <code>table_replications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_replications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3tables.table_replications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table_replication"
    values={[
        { label: 'get_table_replication', value: 'get_table_replication' }
    ]}
>
<TabItem value="get_table_replication">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>The replication configuration for the table, including the IAM role and replication rules.</td>
</tr>
<tr>
    <td><CopyableCode code="version_token" /></td>
    <td><code>string</code></td>
    <td>A version token that represents the current state of the table's replication configuration. Use this token when updating the configuration to ensure consistency.</td>
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
    <td><a href="#get_table_replication"><CopyableCode code="get_table_replication" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tableArn"><code>tableArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the replication configuration for a specific table. Permissions You must have the s3tables:GetTableReplication permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#put_table_replication"><CopyableCode code="put_table_replication" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-tableArn"><code>tableArn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td><a href="#parameter-versionToken"><code>versionToken</code></a></td>
    <td>Creates or updates the replication configuration for a specific table. This operation allows you to define table-level replication independently of bucket-level replication, providing granular control over which tables are replicated and where. Permissions You must have the s3tables:PutTableReplication permission to use this operation. The IAM role specified in the configuration must have permissions to read from the source table and write to all destination tables. You must also have the following permissions: s3tables:GetTable permission on the source table being replicated. s3tables:CreateTable permission for the destination. s3tables:CreateNamespace permission for the destination. s3tables:GetTableMaintenanceConfig permission for the source table. s3tables:PutTableMaintenanceConfig permission for the destination table. You must have iam:PassRole permission with condition allowing roles to be passed to replication.s3tables.amazonaws.com.</td>
</tr>
<tr>
    <td><a href="#delete_table_replication"><CopyableCode code="delete_table_replication" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-tableArn"><code>tableArn</code></a>, <a href="#parameter-versionToken"><code>versionToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the replication configuration for a specific table. After deletion, new updates to this table will no longer be replicated to destination tables, though existing replicated copies will remain in destination buckets. Permissions You must have the s3tables:DeleteTableReplication permission to use this operation.</td>
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
<tr id="parameter-versionToken">
    <td><CopyableCode code="versionToken" /></td>
    <td><code>string</code></td>
    <td>A version token from a previous GetTableReplication call. Use this token to ensure you're deleting the expected version of the configuration.</td>
</tr>
<tr id="parameter-versionToken">
    <td><CopyableCode code="versionToken" /></td>
    <td><code>string</code></td>
    <td>A version token from a previous GetTableReplication call. Use this token to ensure you're updating the expected version of the configuration.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_table_replication"
    values={[
        { label: 'get_table_replication', value: 'get_table_replication' }
    ]}
>
<TabItem value="get_table_replication">

Retrieves the replication configuration for a specific table. Permissions You must have the s3tables:GetTableReplication permission to use this operation.

```sql
SELECT
configuration,
version_token
FROM aws.s3tables.table_replications
WHERE tableArn = '{{ tableArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_table_replication"
    values={[
        { label: 'put_table_replication', value: 'put_table_replication' }
    ]}
>
<TabItem value="put_table_replication">

Creates or updates the replication configuration for a specific table. This operation allows you to define table-level replication independently of bucket-level replication, providing granular control over which tables are replicated and where. Permissions You must have the s3tables:PutTableReplication permission to use this operation. The IAM role specified in the configuration must have permissions to read from the source table and write to all destination tables. You must also have the following permissions: s3tables:GetTable permission on the source table being replicated. s3tables:CreateTable permission for the destination. s3tables:CreateNamespace permission for the destination. s3tables:GetTableMaintenanceConfig permission for the source table. s3tables:PutTableMaintenanceConfig permission for the destination table. You must have iam:PassRole permission with condition allowing roles to be passed to replication.s3tables.amazonaws.com.

```sql
REPLACE aws.s3tables.table_replications
SET 
configuration = '{{ configuration }}'
WHERE 
tableArn = '{{ tableArn }}' --required
AND region = '{{ region }}' --required
AND configuration = '{{ configuration }}' --required
AND versionToken = '{{ versionToken}}'
RETURNING
status,
version_token;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_table_replication"
    values={[
        { label: 'delete_table_replication', value: 'delete_table_replication' }
    ]}
>
<TabItem value="delete_table_replication">

Deletes the replication configuration for a specific table. After deletion, new updates to this table will no longer be replicated to destination tables, though existing replicated copies will remain in destination buckets. Permissions You must have the s3tables:DeleteTableReplication permission to use this operation.

```sql
DELETE FROM aws.s3tables.table_replications
WHERE tableArn = '{{ tableArn }}' --required
AND versionToken = '{{ versionToken }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
