--- 
title: orderable_cluster_options
hide_title: false
hide_table_of_contents: false
keywords:
  - orderable_cluster_options
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

Creates, updates, deletes, gets or lists an <code>orderable_cluster_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="orderable_cluster_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.orderable_cluster_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_orderable_cluster_options"
    values={[
        { label: 'describe_orderable_cluster_options', value: 'describe_orderable_cluster_options' }
    ]}
>
<TabItem value="describe_orderable_cluster_options">

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
    <td><CopyableCode code="AvailabilityZones" /></td>
    <td><code>string</code></td>
    <td>A list of availability zones for the orderable cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterType" /></td>
    <td><code>string</code></td>
    <td>The cluster type, for example multi-node.</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the orderable cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="NodeType" /></td>
    <td><code>string</code></td>
    <td>The node type for the orderable cluster.</td>
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
    <td><a href="#describe_orderable_cluster_options"><CopyableCode code="describe_orderable_cluster_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterVersion"><code>ClusterVersion</code></a>, <a href="#parameter-NodeType"><code>NodeType</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to Amazon Redshift Clusters in the Amazon Redshift Cluster Management Guide.</td>
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
<tr id="parameter-ClusterVersion">
    <td><CopyableCode code="ClusterVersion" /></td>
    <td><code>string</code></td>
    <td>The version filter value. Specify this parameter to show only the available offerings matching the specified version. Default: All versions. Constraints: Must be one of the version returned from DescribeClusterVersions.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeOrderableClusterOptions request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-NodeType">
    <td><CopyableCode code="NodeType" /></td>
    <td><code>string</code></td>
    <td>The node type filter value. Specify this parameter to show only the available offerings matching the specified node type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_orderable_cluster_options"
    values={[
        { label: 'describe_orderable_cluster_options', value: 'describe_orderable_cluster_options' }
    ]}
>
<TabItem value="describe_orderable_cluster_options">

Returns a list of orderable cluster options. Before you create a new cluster you can use this operation to find what options are available, such as the EC2 Availability Zones (AZ) in the specific Amazon Web Services Region that you can specify, and the node types you can request. The node types differ by available storage, memory, CPU and price. With the cost involved you might want to obtain a list of cluster options in the specific region and specify values when creating a cluster. For more information about managing clusters, go to Amazon Redshift Clusters in the Amazon Redshift Cluster Management Guide.

```sql
SELECT
AvailabilityZones,
ClusterType,
ClusterVersion,
NodeType
FROM aws.redshift.orderable_cluster_options
WHERE region = '{{ region }}' -- required
AND ClusterVersion = '{{ ClusterVersion }}'
AND NodeType = '{{ NodeType }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
