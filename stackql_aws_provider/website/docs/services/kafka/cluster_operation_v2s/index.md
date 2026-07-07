--- 
title: cluster_operation_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_operation_v2s
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

Creates, updates, deletes, gets or lists a <code>cluster_operation_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_operation_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafka.cluster_operation_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster_operation_v2"
    values={[
        { label: 'describe_cluster_operation_v2', value: 'describe_cluster_operation_v2' }
    ]}
>
<TabItem value="describe_cluster_operation_v2">

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
    <td><CopyableCode code="ClusterArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterType" /></td>
    <td><code>string</code></td>
    <td>Type of the backend cluster. (PROVISIONED, SERVERLESS)</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the operation finished.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorInfo" /></td>
    <td><code>object</code></td>
    <td>If cluster operation failed from an error, it describes the error.</td>
</tr>
<tr>
    <td><CopyableCode code="OperationArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the cluster operation.</td>
</tr>
<tr>
    <td><CopyableCode code="OperationState" /></td>
    <td><code>string</code></td>
    <td>State of the cluster operation.</td>
</tr>
<tr>
    <td><CopyableCode code="OperationType" /></td>
    <td><code>string</code></td>
    <td>Type of the cluster operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Provisioned" /></td>
    <td><code>object</code></td>
    <td>Properties of a provisioned cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="Serverless" /></td>
    <td><code>object</code></td>
    <td>Properties of a serverless cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
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
    <td><a href="#describe_cluster_operation_v2"><CopyableCode code="describe_cluster_operation_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_operation_arn"><code>cluster_operation_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of the cluster operation specified by the ARN.</td>
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
<tr id="parameter-cluster_operation_arn">
    <td><CopyableCode code="cluster_operation_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the cluster operation to describe.</td>
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
    defaultValue="describe_cluster_operation_v2"
    values={[
        { label: 'describe_cluster_operation_v2', value: 'describe_cluster_operation_v2' }
    ]}
>
<TabItem value="describe_cluster_operation_v2">

Returns a description of the cluster operation specified by the ARN.

```sql
SELECT
ClusterArn,
ClusterType,
EndTime,
ErrorInfo,
OperationArn,
OperationState,
OperationType,
Provisioned,
Serverless,
StartTime
FROM aws.kafka.cluster_operation_v2s
WHERE cluster_operation_arn = '{{ cluster_operation_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
