--- 
title: reserved_node_exchange_configuration_options
hide_title: false
hide_table_of_contents: false
keywords:
  - reserved_node_exchange_configuration_options
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

Creates, updates, deletes, gets or lists a <code>reserved_node_exchange_configuration_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reserved_node_exchange_configuration_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.reserved_node_exchange_configuration_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_reserved_node_exchange_configuration_options"
    values={[
        { label: 'get_reserved_node_exchange_configuration_options', value: 'get_reserved_node_exchange_configuration_options' }
    ]}
>
<TabItem value="get_reserved_node_exchange_configuration_options">

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
    <td><CopyableCode code="source_reserved_node" /></td>
    <td><code>string</code></td>
    <td>Describes a reserved node. You can call the DescribeReservedNodeOfferings API to obtain the available reserved node offerings.</td>
</tr>
<tr>
    <td><CopyableCode code="target_reserved_node_count" /></td>
    <td><code>integer</code></td>
    <td>The target reserved-node count.</td>
</tr>
<tr>
    <td><CopyableCode code="target_reserved_node_offering" /></td>
    <td><code>string</code></td>
    <td>Describes a reserved node offering.</td>
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
    <td><a href="#get_reserved_node_exchange_configuration_options"><CopyableCode code="get_reserved_node_exchange_configuration_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ActionType"><code>ActionType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-SnapshotIdentifier"><code>SnapshotIdentifier</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Gets the configuration options for the reserved-node exchange. These options include information about the source reserved node and target reserved node offering. Details include the node type, the price, the node count, and the offering type.</td>
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
    <td>The action type of the reserved-node configuration. The action type can be an exchange initiated from either a snapshot or a resize.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the cluster that is the source for a reserved-node exchange.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous GetReservedNodeExchangeConfigurationOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the MaxRecords parameter. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a Marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.</td>
</tr>
<tr id="parameter-SnapshotIdentifier">
    <td><CopyableCode code="SnapshotIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the snapshot that is the source for the reserved-node exchange.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_reserved_node_exchange_configuration_options"
    values={[
        { label: 'get_reserved_node_exchange_configuration_options', value: 'get_reserved_node_exchange_configuration_options' }
    ]}
>
<TabItem value="get_reserved_node_exchange_configuration_options">

Gets the configuration options for the reserved-node exchange. These options include information about the source reserved node and target reserved node offering. Details include the node type, the price, the node count, and the offering type.

```sql
SELECT
source_reserved_node,
target_reserved_node_count,
target_reserved_node_offering
FROM aws.redshift.reserved_node_exchange_configuration_options
WHERE ActionType = '{{ ActionType }}' -- required
AND region = '{{ region }}' -- required
AND ClusterIdentifier = '{{ ClusterIdentifier }}'
AND SnapshotIdentifier = '{{ SnapshotIdentifier }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
