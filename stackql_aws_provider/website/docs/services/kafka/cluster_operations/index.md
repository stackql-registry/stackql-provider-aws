--- 
title: cluster_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_operations
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

Creates, updates, deletes, gets or lists a <code>cluster_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafka.cluster_operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster_operation"
    values={[
        { label: 'describe_cluster_operation', value: 'describe_cluster_operation' },
        { label: 'list_cluster_operations', value: 'list_cluster_operations' }
    ]}
>
<TabItem value="describe_cluster_operation">

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
    <td><CopyableCode code="client_request_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the API request that triggered this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the operation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the operation finished.</td>
</tr>
<tr>
    <td><CopyableCode code="error_info" /></td>
    <td><code>object</code></td>
    <td>Describes the error if the operation fails.</td>
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
    <td><CopyableCode code="operation_steps" /></td>
    <td><code>array</code></td>
    <td>Steps completed during the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_type" /></td>
    <td><code>string</code></td>
    <td>Type of the cluster operation.</td>
</tr>
<tr>
    <td><CopyableCode code="source_cluster_info" /></td>
    <td><code>object</code></td>
    <td>Information about cluster attributes before a cluster is updated.</td>
</tr>
<tr>
    <td><CopyableCode code="target_cluster_info" /></td>
    <td><code>object</code></td>
    <td>Information about cluster attributes after a cluster is updated.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_connection_info" /></td>
    <td><code>object</code></td>
    <td>Description of the VPC connection for CreateVpcConnection and DeleteVpcConnection operations.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cluster_operations">

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
    <td><CopyableCode code="client_request_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the API request that triggered this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the operation was created.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the operation finished.</td>
</tr>
<tr>
    <td><CopyableCode code="error_info" /></td>
    <td><code>object</code></td>
    <td>Describes the error if the operation fails.</td>
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
    <td><CopyableCode code="operation_steps" /></td>
    <td><code>array</code></td>
    <td>Steps completed during the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_type" /></td>
    <td><code>string</code></td>
    <td>Type of the cluster operation.</td>
</tr>
<tr>
    <td><CopyableCode code="source_cluster_info" /></td>
    <td><code>object</code></td>
    <td>Information about cluster attributes before a cluster is updated.</td>
</tr>
<tr>
    <td><CopyableCode code="target_cluster_info" /></td>
    <td><code>object</code></td>
    <td>Information about cluster attributes after a cluster is updated.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_connection_info" /></td>
    <td><code>object</code></td>
    <td>Description of the VPC connection for CreateVpcConnection and DeleteVpcConnection operations.</td>
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
    <td><a href="#describe_cluster_operation"><CopyableCode code="describe_cluster_operation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_operation_arn"><code>cluster_operation_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of the cluster operation specified by the ARN.</td>
</tr>
<tr>
    <td><a href="#list_cluster_operations"><CopyableCode code="list_cluster_operations" /></a></td>
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
    <td>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</td>
</tr>
<tr id="parameter-cluster_operation_arn">
    <td><CopyableCode code="cluster_operation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the MSK cluster operation.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_cluster_operation"
    values={[
        { label: 'describe_cluster_operation', value: 'describe_cluster_operation' },
        { label: 'list_cluster_operations', value: 'list_cluster_operations' }
    ]}
>
<TabItem value="describe_cluster_operation">

Returns a description of the cluster operation specified by the ARN.

```sql
SELECT
client_request_id,
cluster_arn,
creation_time,
end_time,
error_info,
operation_arn,
operation_state,
operation_steps,
operation_type,
source_cluster_info,
target_cluster_info,
vpc_connection_info
FROM aws.kafka.cluster_operations
WHERE cluster_operation_arn = '{{ cluster_operation_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cluster_operations">

Returns a list of all the operations that have been performed on the specified MSK cluster.

```sql
SELECT
client_request_id,
cluster_arn,
creation_time,
end_time,
error_info,
operation_arn,
operation_state,
operation_steps,
operation_type,
source_cluster_info,
target_cluster_info,
vpc_connection_info
FROM aws.kafka.cluster_operations
WHERE cluster_arn = '{{ cluster_arn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
