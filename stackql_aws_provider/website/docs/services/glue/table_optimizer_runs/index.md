--- 
title: table_optimizer_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - table_optimizer_runs
  - glue
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

Creates, updates, deletes, gets or lists a <code>table_optimizer_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_optimizer_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.table_optimizer_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_table_optimizer_runs"
    values={[
        { label: 'list_table_optimizer_runs', value: 'list_table_optimizer_runs' }
    ]}
>
<TabItem value="list_table_optimizer_runs">

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
    <td><CopyableCode code="compaction_metrics" /></td>
    <td><code>object</code></td>
    <td>A CompactionMetrics object containing metrics for the optimizer run.</td>
</tr>
<tr>
    <td><CopyableCode code="compaction_strategy" /></td>
    <td><code>string</code></td>
    <td>The strategy used for the compaction run. Indicates which algorithm was applied to determine how files were selected and combined during the compaction process. Valid values are: binpack: Combines small files into larger files, typically targeting sizes over 100MB, while applying any pending deletes. This is the recommended compaction strategy for most use cases. sort: Organizes data based on specified columns which are sorted hierarchically during compaction, improving query performance for filtered operations. This strategy is recommended when your queries frequently filter on specific columns. To use this strategy, you must first define a sort order in your Iceberg table properties using the sort_order table property. z-order: Optimizes data organization by blending multiple attributes into a single scalar value that can be used for sorting, allowing efficient querying across multiple dimensions. This strategy is recommended when you need to query data across multiple dimensions simultaneously. To use this strategy, you must first define a sort order in your Iceberg table properties using the sort_order table property. (binpack, sort, z-order)</td>
</tr>
<tr>
    <td><CopyableCode code="end_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Represents the epoch timestamp at which the compaction job ended.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>An error that occured during the optimizer run.</td>
</tr>
<tr>
    <td><CopyableCode code="event_type" /></td>
    <td><code>string</code></td>
    <td>An event type representing the status of the table optimizer run. (starting, completed, failed, in_progress)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>object</code></td>
    <td>A RunMetrics object containing metrics for the optimizer run. This member is deprecated. See the individual metric members for compaction, retention, and orphan file deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="orphan_file_deletion_metrics" /></td>
    <td><code>object</code></td>
    <td>An OrphanFileDeletionMetrics object containing metrics for the optimizer run.</td>
</tr>
<tr>
    <td><CopyableCode code="retention_metrics" /></td>
    <td><code>object</code></td>
    <td>A RetentionMetrics object containing metrics for the optimizer run.</td>
</tr>
<tr>
    <td><CopyableCode code="start_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Represents the epoch timestamp at which the compaction job was started within Lake Formation.</td>
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
    <td><a href="#list_table_optimizer_runs"><CopyableCode code="list_table_optimizer_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the history of previous optimizer runs for a specific table.</td>
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
    defaultValue="list_table_optimizer_runs"
    values={[
        { label: 'list_table_optimizer_runs', value: 'list_table_optimizer_runs' }
    ]}
>
<TabItem value="list_table_optimizer_runs">

Lists the history of previous optimizer runs for a specific table.

```sql
SELECT
compaction_metrics,
compaction_strategy,
end_timestamp,
error,
event_type,
metrics,
orphan_file_deletion_metrics,
retention_metrics,
start_timestamp
FROM aws.glue.table_optimizer_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
