--- 
title: node_configuration_options
hide_title: false
hide_table_of_contents: false
keywords:
  - node_configuration_options
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

Creates, updates, deletes, gets or lists a <code>node_configuration_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="node_configuration_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.node_configuration_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_node_configuration_options"
    values={[
        { label: 'describe_node_configuration_options', value: 'describe_node_configuration_options' }
    ]}
>
<TabItem value="describe_node_configuration_options">

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
    <td><CopyableCode code="estimated_disk_utilization_percent" /></td>
    <td><code>number</code></td>
    <td>The estimated disk utilizaton percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The category of the node configuration recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="node_type" /></td>
    <td><code>string</code></td>
    <td>The node type, such as, "ra3.4xlarge".</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_nodes" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes.</td>
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
    <td><a href="#describe_node_configuration_options"><CopyableCode code="describe_node_configuration_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ActionType"><code>ActionType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-SnapshotIdentifier"><code>SnapshotIdentifier</code></a>, <a href="#parameter-SnapshotArn"><code>SnapshotArn</code></a>, <a href="#parameter-OwnerAccount"><code>OwnerAccount</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Returns properties of possible node configurations such as node type, number of nodes, and disk usage for the specified action type.</td>
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
<tr id="parameter-ActionType">
    <td><CopyableCode code="ActionType" /></td>
    <td><code>string</code></td>
    <td>The action type to evaluate for possible node configurations. Specify "restore-cluster" to get configuration combinations based on an existing snapshot. Specify "recommend-node-config" to get configuration recommendations based on an existing cluster or snapshot. Specify "resize-cluster" to get configuration combinations for elastic resize based on an existing cluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cluster to evaluate for possible node configurations.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>A set of name, operator, and value items to filter the results.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeNodeConfigurationOptions request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 500 Constraints: minimum 100, maximum 500.</td>
</tr>
<tr id="parameter-OwnerAccount">
    <td><CopyableCode code="OwnerAccount" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot.</td>
</tr>
<tr id="parameter-SnapshotArn">
    <td><CopyableCode code="SnapshotArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the snapshot associated with the message to describe node configuration.</td>
</tr>
<tr id="parameter-SnapshotIdentifier">
    <td><CopyableCode code="SnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the snapshot to evaluate for possible node configurations.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_node_configuration_options"
    values={[
        { label: 'describe_node_configuration_options', value: 'describe_node_configuration_options' }
    ]}
>
<TabItem value="describe_node_configuration_options">

Returns properties of possible node configurations such as node type, number of nodes, and disk usage for the specified action type.

```sql
SELECT
estimated_disk_utilization_percent,
mode,
node_type,
number_of_nodes
FROM aws.redshift.node_configuration_options
WHERE ActionType = '{{ ActionType }}' -- required
AND region = '{{ region }}' -- required
AND ClusterIdentifier = '{{ ClusterIdentifier }}'
AND SnapshotIdentifier = '{{ SnapshotIdentifier }}'
AND SnapshotArn = '{{ SnapshotArn }}'
AND OwnerAccount = '{{ OwnerAccount }}'
AND Filter = '{{ Filter }}'
AND Marker = '{{ Marker }}'
AND MaxRecords = '{{ MaxRecords }}'
;
```
</TabItem>
</Tabs>
