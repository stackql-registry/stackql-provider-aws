--- 
title: domain_healths
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_healths
  - opensearch
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

Creates, updates, deletes, gets or lists a <code>domain_healths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_healths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.domain_healths" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_domain_health"
    values={[
        { label: 'describe_domain_health', value: 'describe_domain_health' }
    ]}
>
<TabItem value="describe_domain_health">

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
    <td><CopyableCode code="ActiveAvailabilityZoneCount" /></td>
    <td><code>string</code></td>
    <td>The number of active Availability Zones configured for the domain. If the service is unable to fetch this information, it will return NotAvailable. (pattern: &lt;code&gt;^((\d+)|(NotAvailable))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZoneCount" /></td>
    <td><code>string</code></td>
    <td>The number of Availability Zones configured for the domain. If the service is unable to fetch this information, it will return NotAvailable. (pattern: &lt;code&gt;^((\d+)|(NotAvailable))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterHealth" /></td>
    <td><code>string</code></td>
    <td>The current health status of your cluster. Red - At least one primary shard is not allocated to any node. Yellow - All primary shards are allocated to nodes, but some replicas aren’t. Green - All primary shards and their replicas are allocated to nodes. NotAvailable - Unable to retrieve cluster health. (Red, Yellow, Green, NotAvailable)</td>
</tr>
<tr>
    <td><CopyableCode code="DataNodeCount" /></td>
    <td><code>string</code></td>
    <td>The number of data nodes configured for the domain. If the service is unable to fetch this information, it will return NotAvailable. (pattern: &lt;code&gt;^((\d+)|(NotAvailable))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DedicatedMaster" /></td>
    <td><code>boolean</code></td>
    <td>A boolean that indicates if dedicated master nodes are activated for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainState" /></td>
    <td><code>string</code></td>
    <td>The current state of the domain. Processing - The domain has updates in progress. Active - Requested changes have been processed and deployed to the domain. (Active, Processing, NotAvailable)</td>
</tr>
<tr>
    <td><CopyableCode code="EnvironmentInformation" /></td>
    <td><code>array</code></td>
    <td>A list of EnvironmentInfo for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="MasterEligibleNodeCount" /></td>
    <td><code>string</code></td>
    <td>The number of nodes that can be elected as a master node. If dedicated master nodes is turned on, this value is the number of dedicated master nodes configured for the domain. If the service is unable to fetch this information, it will return NotAvailable. (pattern: &lt;code&gt;^((\d+)|(NotAvailable))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MasterNode" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the domain has an elected master node. Available - The domain has an elected master node. UnAvailable - The master node hasn't yet been elected, and a quorum to elect a new master node hasn't been reached. (Available, UnAvailable)</td>
</tr>
<tr>
    <td><CopyableCode code="StandByAvailabilityZoneCount" /></td>
    <td><code>string</code></td>
    <td>The number of standby Availability Zones configured for the domain. If the service is unable to fetch this information, it will return NotAvailable. (pattern: &lt;code&gt;^((\d+)|(NotAvailable))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TotalShards" /></td>
    <td><code>string</code></td>
    <td>The total number of primary and replica shards for the domain. (pattern: &lt;code&gt;^((\d+)|(NotAvailable))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TotalUnAssignedShards" /></td>
    <td><code>string</code></td>
    <td>The total number of primary and replica shards not allocated to any of the nodes for the cluster. (pattern: &lt;code&gt;^((\d+)|(NotAvailable))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WarmNodeCount" /></td>
    <td><code>string</code></td>
    <td>The number of warm nodes configured for the domain. (pattern: &lt;code&gt;^((\d+)|(NotAvailable))$&lt;/code&gt;)</td>
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
    <td><a href="#describe_domain_health"><CopyableCode code="describe_domain_health" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about domain and node health, the standby Availability Zone, number of nodes per Availability Zone, and shard count per node.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain.</td>
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
    defaultValue="describe_domain_health"
    values={[
        { label: 'describe_domain_health', value: 'describe_domain_health' }
    ]}
>
<TabItem value="describe_domain_health">

Returns information about domain and node health, the standby Availability Zone, number of nodes per Availability Zone, and shard count per node.

```sql
SELECT
ActiveAvailabilityZoneCount,
AvailabilityZoneCount,
ClusterHealth,
DataNodeCount,
DedicatedMaster,
DomainState,
EnvironmentInformation,
MasterEligibleNodeCount,
MasterNode,
StandByAvailabilityZoneCount,
TotalShards,
TotalUnAssignedShards,
WarmNodeCount
FROM aws.opensearch.domain_healths
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
