--- 
title: update_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - update_actions
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

Creates, updates, deletes, gets or lists a <code>update_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="update_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.update_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_update_actions"
    values={[
        { label: 'describe_update_actions', value: 'describe_update_actions' }
    ]}
>
<TabItem value="describe_update_actions">

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
    <td><CopyableCode code="CacheClusterId" /></td>
    <td><code>string</code></td>
    <td>The ID of the cache cluster</td>
</tr>
<tr>
    <td><CopyableCode code="CacheNodeUpdateStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the service update on the cache node</td>
</tr>
<tr>
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The Elasticache engine to which the update applies. Either Valkey, Redis OSS or Memcached.</td>
</tr>
<tr>
    <td><CopyableCode code="EstimatedUpdateTime" /></td>
    <td><code>string</code></td>
    <td>The estimated length of time for the update to complete</td>
</tr>
<tr>
    <td><CopyableCode code="NodeGroupUpdateStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the service update on the node group</td>
</tr>
<tr>
    <td><CopyableCode code="NodesUpdated" /></td>
    <td><code>string</code></td>
    <td>The progress of the service update on the replication group</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the replication group</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceUpdateName" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the service update</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceUpdateRecommendedApplyByDate" /></td>
    <td><code>string</code></td>
    <td>The recommended date to apply the service update to ensure compliance. For information on compliance, see Self-Service Security Updates for Compliance.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceUpdateReleaseDate" /></td>
    <td><code>string</code></td>
    <td>The date the update is first available</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceUpdateSeverity" /></td>
    <td><code>string</code></td>
    <td>The severity of the service update</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceUpdateStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the service update</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceUpdateType" /></td>
    <td><code>string</code></td>
    <td>Reflects the nature of the service update</td>
</tr>
<tr>
    <td><CopyableCode code="SlaMet" /></td>
    <td><code>string</code></td>
    <td>If yes, all nodes in the replication group have been updated by the recommended apply-by date. If no, at least one node in the replication group have not been updated by the recommended apply-by date. If N/A, the replication group was created after the recommended apply-by date.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateActionAvailableDate" /></td>
    <td><code>string</code></td>
    <td>The date that the service update is available to a replication group</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateActionStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the update action</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateActionStatusModifiedDate" /></td>
    <td><code>string</code></td>
    <td>The date when the UpdateActionStatus was last modified</td>
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
    <td><a href="#describe_update_actions"><CopyableCode code="describe_update_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ServiceUpdateName"><code>ServiceUpdateName</code></a>, <a href="#parameter-ReplicationGroupIds"><code>ReplicationGroupIds</code></a>, <a href="#parameter-CacheClusterIds"><code>CacheClusterIds</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-ServiceUpdateStatus"><code>ServiceUpdateStatus</code></a>, <a href="#parameter-ServiceUpdateTimeRange"><code>ServiceUpdateTimeRange</code></a>, <a href="#parameter-UpdateActionStatus"><code>UpdateActionStatus</code></a>, <a href="#parameter-ShowNodeLevelUpdateStatus"><code>ShowNodeLevelUpdateStatus</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns details of the update actions</td>
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
<tr id="parameter-CacheClusterIds">
    <td><CopyableCode code="CacheClusterIds" /></td>
    <td><code>array</code></td>
    <td>The cache cluster IDs</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The Elasticache engine to which the update applies. Either Valkey, Redis OSS or Memcached.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response</td>
</tr>
<tr id="parameter-ReplicationGroupIds">
    <td><CopyableCode code="ReplicationGroupIds" /></td>
    <td><code>array</code></td>
    <td>The replication group IDs</td>
</tr>
<tr id="parameter-ServiceUpdateName">
    <td><CopyableCode code="ServiceUpdateName" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the service update</td>
</tr>
<tr id="parameter-ServiceUpdateStatus">
    <td><CopyableCode code="ServiceUpdateStatus" /></td>
    <td><code>array</code></td>
    <td>The status of the service update</td>
</tr>
<tr id="parameter-ServiceUpdateTimeRange">
    <td><CopyableCode code="ServiceUpdateTimeRange" /></td>
    <td><code>object</code></td>
    <td>The range of time specified to search for service updates that are in available status</td>
</tr>
<tr id="parameter-ShowNodeLevelUpdateStatus">
    <td><CopyableCode code="ShowNodeLevelUpdateStatus" /></td>
    <td><code>boolean</code></td>
    <td>Dictates whether to include node level update status in the response</td>
</tr>
<tr id="parameter-UpdateActionStatus">
    <td><CopyableCode code="UpdateActionStatus" /></td>
    <td><code>array</code></td>
    <td>The status of the update action.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_update_actions"
    values={[
        { label: 'describe_update_actions', value: 'describe_update_actions' }
    ]}
>
<TabItem value="describe_update_actions">

Returns details of the update actions

```sql
SELECT
CacheClusterId,
CacheNodeUpdateStatus,
Engine,
EstimatedUpdateTime,
NodeGroupUpdateStatus,
NodesUpdated,
ReplicationGroupId,
ServiceUpdateName,
ServiceUpdateRecommendedApplyByDate,
ServiceUpdateReleaseDate,
ServiceUpdateSeverity,
ServiceUpdateStatus,
ServiceUpdateType,
SlaMet,
UpdateActionAvailableDate,
UpdateActionStatus,
UpdateActionStatusModifiedDate
FROM aws.elasticache.update_actions
WHERE region = '{{ region }}' -- required
AND ServiceUpdateName = '{{ ServiceUpdateName }}'
AND ReplicationGroupIds = '{{ ReplicationGroupIds }}'
AND CacheClusterIds = '{{ CacheClusterIds }}'
AND Engine = '{{ Engine }}'
AND ServiceUpdateStatus = '{{ ServiceUpdateStatus }}'
AND ServiceUpdateTimeRange = '{{ ServiceUpdateTimeRange }}'
AND UpdateActionStatus = '{{ UpdateActionStatus }}'
AND ShowNodeLevelUpdateStatus = '{{ ShowNodeLevelUpdateStatus }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
