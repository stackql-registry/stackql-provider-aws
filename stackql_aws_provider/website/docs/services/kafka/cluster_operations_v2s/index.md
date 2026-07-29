--- 
title: cluster_operations_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_operations_v2s
  - kafka
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

Creates, updates, deletes, gets or lists a <code>cluster_operations_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_operations_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafka.cluster_operations_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cluster_operations_v2"
    values={[
        { label: 'list_cluster_operations_v2', value: 'list_cluster_operations_v2' }
    ]}
>
<TabItem value="list_cluster_operations_v2">

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
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_type" /></td>
    <td><code>string</code></td>
    <td>Type of the backend cluster. (PROVISIONED, SERVERLESS)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the operation finished.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the cluster operation.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_state" /></td>
    <td><code>string</code></td>
    <td>State of the cluster operation.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_type" /></td>
    <td><code>string</code></td>
    <td>Type of the cluster operation.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which operation was started.</td>
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
    <td><a href="#list_cluster_operations_v2"><CopyableCode code="list_cluster_operations_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of all the operations that have been performed on the specified MSK cluster.</td>
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
<tr id="parameter-cluster_arn">
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The arn of the cluster whose operations are being requested.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maxResults of the query.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken of the query.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_cluster_operations_v2"
    values={[
        { label: 'list_cluster_operations_v2', value: 'list_cluster_operations_v2' }
    ]}
>
<TabItem value="list_cluster_operations_v2">

Returns a list of all the operations that have been performed on the specified MSK cluster.

```sql
SELECT
cluster_arn,
cluster_type,
end_time,
operation_arn,
operation_state,
operation_type,
start_time
FROM aws.kafka.cluster_operations_v2s
WHERE cluster_arn = '{{ cluster_arn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
