--- 
title: service_updates
hide_title: false
hide_table_of_contents: false
keywords:
  - service_updates
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

Creates, updates, deletes, gets or lists a <code>service_updates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_updates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.service_updates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_service_updates"
    values={[
        { label: 'describe_service_updates', value: 'describe_service_updates' }
    ]}
>
<TabItem value="describe_service_updates">

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
    <td><CopyableCode code="AutoUpdateAfterRecommendedApplyByDate" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the service update will be automatically applied once the recommended apply-by date has expired.</td>
</tr>
<tr>
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The Elasticache engine to which the update applies. Either Valkey, Redis OSS or Memcached.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The Elasticache engine version to which the update applies. Either Valkey, Redis OSS or Memcached engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="EstimatedUpdateTime" /></td>
    <td><code>string</code></td>
    <td>The estimated length of time the service update will take</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceUpdateDescription" /></td>
    <td><code>string</code></td>
    <td>Provides details of the service update</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceUpdateEndDate" /></td>
    <td><code>string</code></td>
    <td>The date after which the service update is no longer available</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceUpdateName" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the service update</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceUpdateRecommendedApplyByDate" /></td>
    <td><code>string</code></td>
    <td>The recommendend date to apply the service update in order to ensure compliance. For information on compliance, see Self-Service Security Updates for Compliance.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceUpdateReleaseDate" /></td>
    <td><code>string</code></td>
    <td>The date when the service update is initially available</td>
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
    <td><a href="#describe_service_updates"><CopyableCode code="describe_service_updates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ServiceUpdateName"><code>ServiceUpdateName</code></a>, <a href="#parameter-ServiceUpdateStatus"><code>ServiceUpdateStatus</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns details of the service updates</td>
</tr>
<tr>
    <td><a href="#batch_apply_update_action"><CopyableCode code="batch_apply_update_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ServiceUpdateName"><code>ServiceUpdateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReplicationGroupIds"><code>ReplicationGroupIds</code></a>, <a href="#parameter-CacheClusterIds"><code>CacheClusterIds</code></a></td>
    <td>Apply the service update. For more information on service updates and applying them, see Applying Service Updates.</td>
</tr>
<tr>
    <td><a href="#batch_stop_update_action"><CopyableCode code="batch_stop_update_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ServiceUpdateName"><code>ServiceUpdateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReplicationGroupIds"><code>ReplicationGroupIds</code></a>, <a href="#parameter-CacheClusterIds"><code>CacheClusterIds</code></a></td>
    <td>Stop the service update. For more information on service updates and stopping them, see Stopping Service Updates.</td>
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
<tr id="parameter-ServiceUpdateName">
    <td><CopyableCode code="ServiceUpdateName" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the service update</td>
</tr>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_service_updates"
    values={[
        { label: 'describe_service_updates', value: 'describe_service_updates' }
    ]}
>
<TabItem value="describe_service_updates">

Returns details of the service updates

```sql
SELECT
AutoUpdateAfterRecommendedApplyByDate,
Engine,
EngineVersion,
EstimatedUpdateTime,
ServiceUpdateDescription,
ServiceUpdateEndDate,
ServiceUpdateName,
ServiceUpdateRecommendedApplyByDate,
ServiceUpdateReleaseDate,
ServiceUpdateSeverity,
ServiceUpdateStatus,
ServiceUpdateType
FROM aws.elasticache.service_updates
WHERE region = '{{ region }}' -- required
AND ServiceUpdateName = '{{ ServiceUpdateName }}'
AND ServiceUpdateStatus = '{{ ServiceUpdateStatus }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_apply_update_action"
    values={[
        { label: 'batch_apply_update_action', value: 'batch_apply_update_action' },
        { label: 'batch_stop_update_action', value: 'batch_stop_update_action' }
    ]}
>
<TabItem value="batch_apply_update_action">

Apply the service update. For more information on service updates and applying them, see Applying Service Updates.

```sql
EXEC aws.elasticache.service_updates.batch_apply_update_action 
@ServiceUpdateName='{{ ServiceUpdateName }}' --required, 
@region='{{ region }}' --required, 
@ReplicationGroupIds='{{ ReplicationGroupIds }}', 
@CacheClusterIds='{{ CacheClusterIds }}'
;
```
</TabItem>
<TabItem value="batch_stop_update_action">

Stop the service update. For more information on service updates and stopping them, see Stopping Service Updates.

```sql
EXEC aws.elasticache.service_updates.batch_stop_update_action 
@ServiceUpdateName='{{ ServiceUpdateName }}' --required, 
@region='{{ region }}' --required, 
@ReplicationGroupIds='{{ ReplicationGroupIds }}', 
@CacheClusterIds='{{ CacheClusterIds }}'
;
```
</TabItem>
</Tabs>
