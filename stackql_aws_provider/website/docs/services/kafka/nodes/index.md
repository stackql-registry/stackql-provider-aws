--- 
title: nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - nodes
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

Creates, updates, deletes, gets or lists a <code>nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafka.nodes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_nodes"
    values={[
        { label: 'list_nodes', value: 'list_nodes' }
    ]}
>
<TabItem value="list_nodes">

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
    <td><CopyableCode code="AddedToClusterTime" /></td>
    <td><code>string</code></td>
    <td>The start time.</td>
</tr>
<tr>
    <td><CopyableCode code="BrokerNodeInfo" /></td>
    <td><code>object</code></td>
    <td>The broker node info.</td>
</tr>
<tr>
    <td><CopyableCode code="ControllerNodeInfo" /></td>
    <td><code>object</code></td>
    <td>The ControllerNodeInfo.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>The instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="NodeARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the node.</td>
</tr>
<tr>
    <td><CopyableCode code="NodeType" /></td>
    <td><code>string</code></td>
    <td>The node type. (BROKER)</td>
</tr>
<tr>
    <td><CopyableCode code="ZookeeperNodeInfo" /></td>
    <td><code>object</code></td>
    <td>The ZookeeperNodeInfo.</td>
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
    <td><a href="#list_nodes"><CopyableCode code="list_nodes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of the broker nodes in the cluster.</td>
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
    defaultValue="list_nodes"
    values={[
        { label: 'list_nodes', value: 'list_nodes' }
    ]}
>
<TabItem value="list_nodes">

Returns a list of the broker nodes in the cluster.

```sql
SELECT
AddedToClusterTime,
BrokerNodeInfo,
ControllerNodeInfo,
InstanceType,
NodeARN,
NodeType,
ZookeeperNodeInfo
FROM aws.kafka.nodes
WHERE cluster_arn = '{{ cluster_arn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
