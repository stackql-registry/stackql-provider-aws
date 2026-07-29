--- 
title: replication_table_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_table_statistics
  - dms
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

Creates, updates, deletes, gets or lists a <code>replication_table_statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replication_table_statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.replication_table_statistics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_replication_table_statistics"
    values={[
        { label: 'describe_replication_table_statistics', value: 'describe_replication_table_statistics' }
    ]}
>
<TabItem value="describe_replication_table_statistics">

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
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_config_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name of the replication config.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_table_statistics" /></td>
    <td><code>array</code></td>
    <td>Returns table statistics on the replication, including table name, rows inserted, rows updated, and rows deleted.</td>
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
    <td><a href="#describe_replication_table_statistics"><CopyableCode code="describe_replication_table_statistics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns table and schema statistics for one or more provisioned replications that use a given DMS Serverless replication configuration.</td>
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
    defaultValue="describe_replication_table_statistics"
    values={[
        { label: 'describe_replication_table_statistics', value: 'describe_replication_table_statistics' }
    ]}
>
<TabItem value="describe_replication_table_statistics">

Returns table and schema statistics for one or more provisioned replications that use a given DMS Serverless replication configuration.

```sql
SELECT
marker,
replication_config_arn,
replication_table_statistics
FROM aws.dms.replication_table_statistics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
