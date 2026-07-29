--- 
title: reserved_cache_nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - reserved_cache_nodes
  - elasticache
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

Creates, updates, deletes, gets or lists a <code>reserved_cache_nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reserved_cache_nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.reserved_cache_nodes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_reserved_cache_nodes"
    values={[
        { label: 'describe_reserved_cache_nodes', value: 'describe_reserved_cache_nodes' }
    ]}
>
<TabItem value="describe_reserved_cache_nodes">

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
    <td><CopyableCode code="cache_node_count" /></td>
    <td><code>integer</code></td>
    <td>The number of cache nodes that have been reserved.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_node_type" /></td>
    <td><code>string</code></td>
    <td>The cache node type for the reserved cache nodes. The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts. General purpose: Current generation: M7g node types: cache.m7g.large, cache.m7g.xlarge, cache.m7g.2xlarge, cache.m7g.4xlarge, cache.m7g.8xlarge, cache.m7g.12xlarge, cache.m7g.16xlarge For region availability, see Supported Node Types M6g node types (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): cache.m6g.large, cache.m6g.xlarge, cache.m6g.2xlarge, cache.m6g.4xlarge, cache.m6g.8xlarge, cache.m6g.12xlarge, cache.m6g.16xlarge M5 node types: cache.m5.large, cache.m5.xlarge, cache.m5.2xlarge, cache.m5.4xlarge, cache.m5.12xlarge, cache.m5.24xlarge M4 node types: cache.m4.large, cache.m4.xlarge, cache.m4.2xlarge, cache.m4.4xlarge, cache.m4.10xlarge T4g node types (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): cache.t4g.micro, cache.t4g.small, cache.t4g.medium T3 node types: cache.t3.micro, cache.t3.small, cache.t3.medium T2 node types: cache.t2.micro, cache.t2.small, cache.t2.medium Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) T1 node types: cache.t1.micro M1 node types: cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge M3 node types: cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge Compute optimized: Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) C1 node types: cache.c1.xlarge Memory optimized: Current generation: R7g node types: cache.r7g.large, cache.r7g.xlarge, cache.r7g.2xlarge, cache.r7g.4xlarge, cache.r7g.8xlarge, cache.r7g.12xlarge, cache.r7g.16xlarge For region availability, see Supported Node Types R6g node types (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): cache.r6g.large, cache.r6g.xlarge, cache.r6g.2xlarge, cache.r6g.4xlarge, cache.r6g.8xlarge, cache.r6g.12xlarge, cache.r6g.16xlarge R5 node types: cache.r5.large, cache.r5.xlarge, cache.r5.2xlarge, cache.r5.4xlarge, cache.r5.12xlarge, cache.r5.24xlarge R4 node types: cache.r4.large, cache.r4.xlarge, cache.r4.2xlarge, cache.r4.4xlarge, cache.r4.8xlarge, cache.r4.16xlarge Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) M2 node types: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge R3 node types: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge Additional node type info All current generation instance types are created in Amazon VPC by default. Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances. Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1 instances. The configuration variables appendonly and appendfsync are not supported on Valkey, or on Redis OSS version 2.8.22 and later.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>The duration of the reservation in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="fixed_price" /></td>
    <td><code>number</code></td>
    <td>The fixed price charged for this reserved cache node.</td>
</tr>
<tr>
    <td><CopyableCode code="offering_type" /></td>
    <td><code>string</code></td>
    <td>The offering type of this reserved cache node.</td>
</tr>
<tr>
    <td><CopyableCode code="product_description" /></td>
    <td><code>string</code></td>
    <td>The description of the reserved cache node.</td>
</tr>
<tr>
    <td><CopyableCode code="recurring_charges" /></td>
    <td><code>string</code></td>
    <td>The recurring price charged to run this reserved cache node.</td>
</tr>
<tr>
    <td><CopyableCode code="reservation_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the reserved cache node. Example: arn:aws:elasticache:us-east-1:123456789012:reserved-instance:ri-2017-03-27-08-33-25-582</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_cache_node_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="reserved_cache_nodes_offering_id" /></td>
    <td><code>string</code></td>
    <td>The offering identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string</code></td>
    <td>The time the reservation started.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the reserved cache node.</td>
</tr>
<tr>
    <td><CopyableCode code="usage_price" /></td>
    <td><code>number</code></td>
    <td>The hourly price charged for this reserved cache node.</td>
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
    <td><a href="#describe_reserved_cache_nodes"><CopyableCode code="describe_reserved_cache_nodes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReservedCacheNodeId"><code>ReservedCacheNodeId</code></a>, <a href="#parameter-ReservedCacheNodesOfferingId"><code>ReservedCacheNodesOfferingId</code></a>, <a href="#parameter-CacheNodeType"><code>CacheNodeType</code></a>, <a href="#parameter-Duration"><code>Duration</code></a>, <a href="#parameter-ProductDescription"><code>ProductDescription</code></a>, <a href="#parameter-OfferingType"><code>OfferingType</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns information about reserved cache nodes for this account, or about a specified reserved cache node.</td>
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
<tr id="parameter-CacheNodeType">
    <td><CopyableCode code="CacheNodeType" /></td>
    <td><code>string</code></td>
    <td>The cache node type filter value. Use this parameter to show only those reservations matching the specified cache node type. The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts. General purpose: Current generation: M7g node types: cache.m7g.large, cache.m7g.xlarge, cache.m7g.2xlarge, cache.m7g.4xlarge, cache.m7g.8xlarge, cache.m7g.12xlarge, cache.m7g.16xlarge For region availability, see Supported Node Types M6g node types (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): cache.m6g.large, cache.m6g.xlarge, cache.m6g.2xlarge, cache.m6g.4xlarge, cache.m6g.8xlarge, cache.m6g.12xlarge, cache.m6g.16xlarge M5 node types: cache.m5.large, cache.m5.xlarge, cache.m5.2xlarge, cache.m5.4xlarge, cache.m5.12xlarge, cache.m5.24xlarge M4 node types: cache.m4.large, cache.m4.xlarge, cache.m4.2xlarge, cache.m4.4xlarge, cache.m4.10xlarge T4g node types (available only for Redis OSS engine version 5.0.6 onward and Memcached engine version 1.5.16 onward): cache.t4g.micro, cache.t4g.small, cache.t4g.medium T3 node types: cache.t3.micro, cache.t3.small, cache.t3.medium T2 node types: cache.t2.micro, cache.t2.small, cache.t2.medium Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) T1 node types: cache.t1.micro M1 node types: cache.m1.small, cache.m1.medium, cache.m1.large, cache.m1.xlarge M3 node types: cache.m3.medium, cache.m3.large, cache.m3.xlarge, cache.m3.2xlarge Compute optimized: Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) C1 node types: cache.c1.xlarge Memory optimized: Current generation: R7g node types: cache.r7g.large, cache.r7g.xlarge, cache.r7g.2xlarge, cache.r7g.4xlarge, cache.r7g.8xlarge, cache.r7g.12xlarge, cache.r7g.16xlarge For region availability, see Supported Node Types R6g node types (available only for Redis OSS engine version 5.0.6 onward and for Memcached engine version 1.5.16 onward): cache.r6g.large, cache.r6g.xlarge, cache.r6g.2xlarge, cache.r6g.4xlarge, cache.r6g.8xlarge, cache.r6g.12xlarge, cache.r6g.16xlarge R5 node types: cache.r5.large, cache.r5.xlarge, cache.r5.2xlarge, cache.r5.4xlarge, cache.r5.12xlarge, cache.r5.24xlarge R4 node types: cache.r4.large, cache.r4.xlarge, cache.r4.2xlarge, cache.r4.4xlarge, cache.r4.8xlarge, cache.r4.16xlarge Previous generation: (not recommended. Existing clusters are still supported but creation of new clusters is not supported for these types.) M2 node types: cache.m2.xlarge, cache.m2.2xlarge, cache.m2.4xlarge R3 node types: cache.r3.large, cache.r3.xlarge, cache.r3.2xlarge, cache.r3.4xlarge, cache.r3.8xlarge Additional node type info All current generation instance types are created in Amazon VPC by default. Valkey or Redis OSS append-only files (AOF) are not supported for T1 or T2 instances. Valkey or Redis OSS Multi-AZ with automatic failover is not supported on T1 instances. The configuration variables appendonly and appendfsync are not supported on Valkey, or on Redis OSS version 2.8.22 and later.</td>
</tr>
<tr id="parameter-Duration">
    <td><CopyableCode code="Duration" /></td>
    <td><code>string</code></td>
    <td>The duration filter value, specified in years or seconds. Use this parameter to show only reservations for this duration. Valid Values: 1 | 3 | 31536000 | 94608000</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.</td>
</tr>
<tr id="parameter-OfferingType">
    <td><CopyableCode code="OfferingType" /></td>
    <td><code>string</code></td>
    <td>The offering type filter value. Use this parameter to show only the available offerings matching the specified offering type. Valid values: "Light Utilization"|"Medium Utilization"|"Heavy Utilization"|"All Upfront"|"Partial Upfront"| "No Upfront"</td>
</tr>
<tr id="parameter-ProductDescription">
    <td><CopyableCode code="ProductDescription" /></td>
    <td><code>string</code></td>
    <td>The product description filter value. Use this parameter to show only those reservations matching the specified product description.</td>
</tr>
<tr id="parameter-ReservedCacheNodeId">
    <td><CopyableCode code="ReservedCacheNodeId" /></td>
    <td><code>string</code></td>
    <td>The reserved cache node identifier filter value. Use this parameter to show only the reservation that matches the specified reservation ID.</td>
</tr>
<tr id="parameter-ReservedCacheNodesOfferingId">
    <td><CopyableCode code="ReservedCacheNodesOfferingId" /></td>
    <td><code>string</code></td>
    <td>The offering identifier filter value. Use this parameter to show only purchased reservations matching the specified offering identifier.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_reserved_cache_nodes"
    values={[
        { label: 'describe_reserved_cache_nodes', value: 'describe_reserved_cache_nodes' }
    ]}
>
<TabItem value="describe_reserved_cache_nodes">

Returns information about reserved cache nodes for this account, or about a specified reserved cache node.

```sql
SELECT
cache_node_count,
cache_node_type,
duration,
fixed_price,
offering_type,
product_description,
recurring_charges,
reservation_arn,
reserved_cache_node_id,
reserved_cache_nodes_offering_id,
start_time,
state,
usage_price
FROM aws.elasticache.reserved_cache_nodes
WHERE region = '{{ region }}' -- required
AND ReservedCacheNodeId = '{{ ReservedCacheNodeId }}'
AND ReservedCacheNodesOfferingId = '{{ ReservedCacheNodesOfferingId }}'
AND CacheNodeType = '{{ CacheNodeType }}'
AND Duration = '{{ Duration }}'
AND ProductDescription = '{{ ProductDescription }}'
AND OfferingType = '{{ OfferingType }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
