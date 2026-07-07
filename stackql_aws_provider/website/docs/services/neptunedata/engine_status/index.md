--- 
title: engine_status
hide_title: false
hide_table_of_contents: false
keywords:
  - engine_status
  - neptunedata
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

Creates, updates, deletes, gets or lists an <code>engine_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="engine_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptunedata.engine_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_engine_status"
    values={[
        { label: 'get_engine_status', value: 'get_engine_status' }
    ]}
>
<TabItem value="get_engine_status">

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
    <td><CopyableCode code="dbEngineVersion" /></td>
    <td><code>string</code></td>
    <td>Set to the Neptune engine version running on your DB cluster. If this engine version has been manually patched since it was released, the version number is prefixed by Patch-.</td>
</tr>
<tr>
    <td><CopyableCode code="dfeQueryEngine" /></td>
    <td><code>string</code></td>
    <td>Set to enabled if the DFE engine is fully enabled, or to viaQueryHint (the default) if the DFE engine is only used with queries that have the useDFE query hint set to true.</td>
</tr>
<tr>
    <td><CopyableCode code="features" /></td>
    <td><code>object</code></td>
    <td>Contains status information about the features enabled on your DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="gremlin" /></td>
    <td><code>object</code></td>
    <td>Contains information about the Gremlin query language available on your cluster. Specifically, it contains a version field that specifies the current TinkerPop version being used by the engine.</td>
</tr>
<tr>
    <td><CopyableCode code="labMode" /></td>
    <td><code>object</code></td>
    <td>Contains Lab Mode settings being used by the engine.</td>
</tr>
<tr>
    <td><CopyableCode code="opencypher" /></td>
    <td><code>object</code></td>
    <td>Contains information about the openCypher query language available on your cluster. Specifically, it contains a version field that specifies the current operCypher version being used by the engine.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Set to reader if the instance is a read-replica, or to writer if the instance is the primary instance.</td>
</tr>
<tr>
    <td><CopyableCode code="rollingBackTrxCount" /></td>
    <td><code>integer</code></td>
    <td>If there are transactions being rolled back, this field is set to the number of such transactions. If there are none, the field doesn't appear at all.</td>
</tr>
<tr>
    <td><CopyableCode code="rollingBackTrxEarliestStartTime" /></td>
    <td><code>string</code></td>
    <td>Set to the start time of the earliest transaction being rolled back. If no transactions are being rolled back, the field doesn't appear at all.</td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td>Contains information about the current settings on your DB cluster. For example, contains the current cluster query timeout setting (clusterQueryTimeoutInMs).</td>
</tr>
<tr>
    <td><CopyableCode code="sparql" /></td>
    <td><code>object</code></td>
    <td>Contains information about the SPARQL query language available on your cluster. Specifically, it contains a version field that specifies the current SPARQL version being used by the engine.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string</code></td>
    <td>Set to the UTC time at which the current server process started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Set to healthy if the instance is not experiencing problems. If the instance is recovering from a crash or from being rebooted and there are active transactions running from the latest server shutdown, status is set to recovery.</td>
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
    <td><a href="#get_engine_status"><CopyableCode code="get_engine_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the status of the graph database on the host. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetEngineStatus IAM action in that cluster.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_engine_status"
    values={[
        { label: 'get_engine_status', value: 'get_engine_status' }
    ]}
>
<TabItem value="get_engine_status">

Retrieves the status of the graph database on the host. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetEngineStatus IAM action in that cluster.

```sql
SELECT
dbEngineVersion,
dfeQueryEngine,
features,
gremlin,
labMode,
opencypher,
role,
rollingBackTrxCount,
rollingBackTrxEarliestStartTime,
settings,
sparql,
startTime,
status
FROM aws.neptunedata.engine_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
