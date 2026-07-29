--- 
title: monitors
hide_title: false
hide_table_of_contents: false
keywords:
  - monitors
  - networkflowmonitor
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

Creates, updates, deletes, gets or lists a <code>monitors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="monitors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkflowmonitor.monitors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_monitor"
    values={[
        { label: 'get_monitor', value: 'get_monitor' },
        { label: 'list_monitors', value: 'list_monitors' }
    ]}
>
<TabItem value="get_monitor">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the monitor was created.</td>
</tr>
<tr>
    <td><CopyableCode code="local_resources" /></td>
    <td><code>array</code></td>
    <td>The local resources to monitor. A local resource in a workload is the location of the hosts where the Network Flow Monitor agent is installed.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the monitor was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the monitor. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_status" /></td>
    <td><code>string</code></td>
    <td>The status of a monitor. The status can be one of the following PENDING: The monitor is in the process of being created. ACTIVE: The monitor is active. INACTIVE: The monitor is inactive. ERROR: Monitor creation failed due to an error. DELETING: The monitor is in the process of being deleted. (PENDING, ACTIVE, INACTIVE, ERROR, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_resources" /></td>
    <td><code>array</code></td>
    <td>The remote resources to monitor. A remote resource is the other endpoint specified for the network flow of a workload, with a local resource. For example, Amazon Dynamo DB can be a remote resource.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags for a monitor.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_monitors">

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
    <td><CopyableCode code="monitor_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the monitor. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="monitor_status" /></td>
    <td><code>string</code></td>
    <td>The status of a monitor. The status can be one of the following PENDING: The monitor is in the process of being created. ACTIVE: The monitor is active. INACTIVE: The monitor is inactive. ERROR: Monitor creation failed due to an error. DELETING: The monitor is in the process of being deleted. (PENDING, ACTIVE, INACTIVE, ERROR, DELETING)</td>
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
    <td><a href="#get_monitor"><CopyableCode code="get_monitor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a monitor in Network Flow Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information.</td>
</tr>
<tr>
    <td><a href="#list_monitors"><CopyableCode code="list_monitors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-monitorStatus"><code>monitorStatus</code></a></td>
    <td>List all monitors in an account. Optionally, you can list only monitors that have a specific status, by using the STATUS parameter.</td>
</tr>
<tr>
    <td><a href="#create_monitor"><CopyableCode code="create_monitor" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-monitorName"><code>monitorName</code></a>, <a href="#parameter-localResources"><code>localResources</code></a>, <a href="#parameter-scopeArn"><code>scopeArn</code></a></td>
    <td></td>
    <td>Create a monitor for specific network flows between local and remote resources, so that you can monitor network performance for one or several of your workloads. For each monitor, Network Flow Monitor publishes detailed end-to-end performance metrics and a network health indicator (NHI) that informs you whether there were Amazon Web Services network issues for one or more of the network flows tracked by a monitor, during a time period that you choose.</td>
</tr>
<tr>
    <td><a href="#update_monitor"><CopyableCode code="update_monitor" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update a monitor to add or remove local or remote resources.</td>
</tr>
<tr>
    <td><a href="#delete_monitor"><CopyableCode code="delete_monitor" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a monitor in Network Flow Monitor.</td>
</tr>
<tr>
    <td><a href="#start_query_monitor_top_contributors"><CopyableCode code="start_query_monitor_top_contributors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-metricName"><code>metricName</code></a>, <a href="#parameter-destinationCategory"><code>destinationCategory</code></a></td>
    <td></td>
    <td>Create a query that you can use with the Network Flow Monitor query interface to return the top contributors for a monitor. Specify the monitor that you want to create the query for. The call returns a query ID that you can use with GetQueryResultsMonitorTopContributors to run the query and return the top contributors for a specific monitor. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable APIs for the top contributors that you want to be returned.</td>
</tr>
<tr>
    <td><a href="#stop_query_monitor_top_contributors"><CopyableCode code="stop_query_monitor_top_contributors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-monitor_name"><code>monitor_name</code></a>, <a href="#parameter-query_id"><code>query_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stop a top contributors query for a monitor. Specify the query that you want to stop by providing a query ID and a monitor name. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.</td>
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
<tr id="parameter-monitor_name">
    <td><CopyableCode code="monitor_name" /></td>
    <td><code>string</code></td>
    <td>The name of the monitor.</td>
</tr>
<tr id="parameter-query_id">
    <td><CopyableCode code="query_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the query. A query ID is an internally-generated identifier for a specific query returned from an API call to create a query.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of query results that you want to return with this call.</td>
</tr>
<tr id="parameter-monitorStatus">
    <td><CopyableCode code="monitorStatus" /></td>
    <td><code>string</code></td>
    <td>The status of a monitor. The status can be one of the following PENDING: The monitor is in the process of being created. ACTIVE: The monitor is active. INACTIVE: The monitor is inactive. ERROR: Monitor creation failed due to an error. DELETING: The monitor is in the process of being deleted.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. You receive this token from a previous call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_monitor"
    values={[
        { label: 'get_monitor', value: 'get_monitor' },
        { label: 'list_monitors', value: 'list_monitors' }
    ]}
>
<TabItem value="get_monitor">

Gets information about a monitor in Network Flow Monitor based on a monitor name. The information returned includes the Amazon Resource Name (ARN), create time, modified time, resources included in the monitor, and status information.

```sql
SELECT
created_at,
local_resources,
modified_at,
monitor_arn,
monitor_name,
monitor_status,
remote_resources,
tags
FROM aws.networkflowmonitor.monitors
WHERE monitor_name = '{{ monitor_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_monitors">

List all monitors in an account. Optionally, you can list only monitors that have a specific status, by using the STATUS parameter.

```sql
SELECT
monitor_arn,
monitor_name,
monitor_status
FROM aws.networkflowmonitor.monitors
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND monitorStatus = '{{ monitorStatus }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_monitor"
    values={[
        { label: 'create_monitor', value: 'create_monitor' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_monitor">

Create a monitor for specific network flows between local and remote resources, so that you can monitor network performance for one or several of your workloads. For each monitor, Network Flow Monitor publishes detailed end-to-end performance metrics and a network health indicator (NHI) that informs you whether there were Amazon Web Services network issues for one or more of the network flows tracked by a monitor, during a time period that you choose.

```sql
INSERT INTO aws.networkflowmonitor.monitors (
monitorName,
localResources,
remoteResources,
scopeArn,
clientToken,
tags,
region
)
SELECT 
'{{ monitorName }}' /* required */,
'{{ localResources }}' /* required */,
'{{ remoteResources }}',
'{{ scopeArn }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
created_at,
local_resources,
modified_at,
monitor_arn,
monitor_name,
monitor_status,
remote_resources,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: monitors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the monitors resource.
    - name: monitorName
      value: "{{ monitorName }}"
    - name: localResources
      value:
        - type_: "{{ type_ }}"
          identifier: "{{ identifier }}"
    - name: remoteResources
      value:
        - type_: "{{ type_ }}"
          identifier: "{{ identifier }}"
    - name: scopeArn
      value: "{{ scopeArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_monitor"
    values={[
        { label: 'update_monitor', value: 'update_monitor' }
    ]}
>
<TabItem value="update_monitor">

Update a monitor to add or remove local or remote resources.

```sql
UPDATE aws.networkflowmonitor.monitors
SET 
localResourcesToAdd = '{{ localResourcesToAdd }}',
localResourcesToRemove = '{{ localResourcesToRemove }}',
remoteResourcesToAdd = '{{ remoteResourcesToAdd }}',
remoteResourcesToRemove = '{{ remoteResourcesToRemove }}',
clientToken = '{{ clientToken }}'
WHERE 
monitor_name = '{{ monitor_name }}' --required
AND region = '{{ region }}' --required
RETURNING
created_at,
local_resources,
modified_at,
monitor_arn,
monitor_name,
monitor_status,
remote_resources,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_monitor"
    values={[
        { label: 'delete_monitor', value: 'delete_monitor' }
    ]}
>
<TabItem value="delete_monitor">

Deletes a monitor in Network Flow Monitor.

```sql
DELETE FROM aws.networkflowmonitor.monitors
WHERE monitor_name = '{{ monitor_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_query_monitor_top_contributors"
    values={[
        { label: 'start_query_monitor_top_contributors', value: 'start_query_monitor_top_contributors' },
        { label: 'stop_query_monitor_top_contributors', value: 'stop_query_monitor_top_contributors' }
    ]}
>
<TabItem value="start_query_monitor_top_contributors">

Create a query that you can use with the Network Flow Monitor query interface to return the top contributors for a monitor. Specify the monitor that you want to create the query for. The call returns a query ID that you can use with GetQueryResultsMonitorTopContributors to run the query and return the top contributors for a specific monitor. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable APIs for the top contributors that you want to be returned.

```sql
EXEC aws.networkflowmonitor.monitors.start_query_monitor_top_contributors 
@monitor_name='{{ monitor_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"startTime": "{{ startTime }}", 
"endTime": "{{ endTime }}", 
"metricName": "{{ metricName }}", 
"destinationCategory": "{{ destinationCategory }}", 
"limit": {{ limit }}
}'
;
```
</TabItem>
<TabItem value="stop_query_monitor_top_contributors">

Stop a top contributors query for a monitor. Specify the query that you want to stop by providing a query ID and a monitor name. Top contributors in Network Flow Monitor are network flows with the highest values for a specific metric type. Top contributors can be across all workload insights, for a given scope, or for a specific monitor. Use the applicable call for the top contributors that you want to be returned.

```sql
EXEC aws.networkflowmonitor.monitors.stop_query_monitor_top_contributors 
@monitor_name='{{ monitor_name }}' --required, 
@query_id='{{ query_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
