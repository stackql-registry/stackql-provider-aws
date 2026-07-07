--- 
title: resizes
hide_title: false
hide_table_of_contents: false
keywords:
  - resizes
  - redshift
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

Creates, updates, deletes, gets or lists a <code>resizes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resizes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.resizes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_resize"
    values={[
        { label: 'describe_resize', value: 'describe_resize' }
    ]}
>
<TabItem value="describe_resize">

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
    <td><CopyableCode code="avg_resize_rate_in_mega_bytes_per_second" /></td>
    <td><code>number</code></td>
    <td>The average rate of the resize operation over the last few minutes, measured in megabytes per second. After the resize operation completes, this value shows the average rate of the entire resize operation.</td>
</tr>
<tr>
    <td><CopyableCode code="data_transfer_progress_percent" /></td>
    <td><code>number</code></td>
    <td>The percent of data transferred from source cluster to target cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="elapsed_time_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The amount of seconds that have elapsed since the resize operation began. After the resize operation completes, this value shows the total actual time, in seconds, for the resize operation.</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_time_to_completion_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The estimated time remaining, in seconds, until the resize operation is complete. This value is calculated based on the average resize rate and the estimated amount of data remaining to be processed. Once the resize operation is complete, this value will be 0.</td>
</tr>
<tr>
    <td><CopyableCode code="import_tables_completed" /></td>
    <td><code>array</code></td>
    <td>The names of tables that have been completely imported . Valid Values: List of table names.</td>
</tr>
<tr>
    <td><CopyableCode code="import_tables_in_progress" /></td>
    <td><code>array</code></td>
    <td>The names of tables that are being currently imported. Valid Values: List of table names.</td>
</tr>
<tr>
    <td><CopyableCode code="import_tables_not_started" /></td>
    <td><code>array</code></td>
    <td>The names of tables that have not been yet imported. Valid Values: List of table names</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>An optional string to provide additional details about the resize action.</td>
</tr>
<tr>
    <td><CopyableCode code="progress_in_mega_bytes" /></td>
    <td><code>integer</code></td>
    <td>While the resize operation is in progress, this value shows the current amount of data, in megabytes, that has been processed so far. When the resize operation is complete, this value shows the total amount of data, in megabytes, on the cluster, which may be more or less than TotalResizeDataInMegaBytes (the estimated total amount of data before resize).</td>
</tr>
<tr>
    <td><CopyableCode code="resize_type" /></td>
    <td><code>string</code></td>
    <td>An enum with possible values of ClassicResize and ElasticResize. These values describe the type of resize operation being performed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the resize operation. Valid Values: NONE | IN_PROGRESS | FAILED | SUCCEEDED | CANCELLING</td>
</tr>
<tr>
    <td><CopyableCode code="target_cluster_type" /></td>
    <td><code>string</code></td>
    <td>The cluster type after the resize operation is complete. Valid Values: multi-node | single-node</td>
</tr>
<tr>
    <td><CopyableCode code="target_encryption_type" /></td>
    <td><code>string</code></td>
    <td>The type of encryption for the cluster after the resize is complete. Possible values are KMS and None.</td>
</tr>
<tr>
    <td><CopyableCode code="target_node_type" /></td>
    <td><code>string</code></td>
    <td>The node type that the cluster will have after the resize operation is complete.</td>
</tr>
<tr>
    <td><CopyableCode code="target_number_of_nodes" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes that the cluster will have after the resize operation is complete.</td>
</tr>
<tr>
    <td><CopyableCode code="total_resize_data_in_mega_bytes" /></td>
    <td><code>integer</code></td>
    <td>The estimated total amount of data, in megabytes, on the cluster before the resize operation began.</td>
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
    <td><a href="#describe_resize"><CopyableCode code="describe_resize" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a HTTP 404 error is returned. If a resize operation was initiated and completed, the status of the resize remains as SUCCEEDED until the next resize. A resize operation can be requested using ModifyCluster and specifying a different number or type of nodes for the cluster.</td>
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
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a cluster whose resize progress you are requesting. This parameter is case-sensitive. By default, resize operations for all clusters defined for an Amazon Web Services account are returned.</td>
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
    defaultValue="describe_resize"
    values={[
        { label: 'describe_resize', value: 'describe_resize' }
    ]}
>
<TabItem value="describe_resize">

Returns information about the last resize operation for the specified cluster. If no resize operation has ever been initiated for the specified cluster, a HTTP 404 error is returned. If a resize operation was initiated and completed, the status of the resize remains as SUCCEEDED until the next resize. A resize operation can be requested using ModifyCluster and specifying a different number or type of nodes for the cluster.

```sql
SELECT
avg_resize_rate_in_mega_bytes_per_second,
data_transfer_progress_percent,
elapsed_time_in_seconds,
estimated_time_to_completion_in_seconds,
import_tables_completed,
import_tables_in_progress,
import_tables_not_started,
message,
progress_in_mega_bytes,
resize_type,
status,
target_cluster_type,
target_encryption_type,
target_node_type,
target_number_of_nodes,
total_resize_data_in_mega_bytes
FROM aws.redshift.resizes
WHERE ClusterIdentifier = '{{ ClusterIdentifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
