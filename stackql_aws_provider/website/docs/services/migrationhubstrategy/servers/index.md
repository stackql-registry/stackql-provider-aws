--- 
title: servers
hide_title: false
hide_table_of_contents: false
keywords:
  - servers
  - migrationhubstrategy
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

Creates, updates, deletes, gets or lists a <code>servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="servers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migrationhubstrategy.servers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_servers"
    values={[
        { label: 'list_servers', value: 'list_servers' }
    ]}
>
<TabItem value="list_servers">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The server ID. (pattern: &lt;code&gt;^&#91;0-9a-b&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the server.</td>
</tr>
<tr>
    <td><CopyableCode code="antipattern_report_s3_object" /></td>
    <td><code>object</code></td>
    <td>Contains the S3 bucket name and the Amazon S3 key name.</td>
</tr>
<tr>
    <td><CopyableCode code="antipattern_report_status" /></td>
    <td><code>string</code></td>
    <td>The status of the anti-pattern report generation. (FAILED, IN_PROGRESS, SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="antipattern_report_status_message" /></td>
    <td><code>string</code></td>
    <td>A message about the status of the anti-pattern report generation. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_component_strategy_summary" /></td>
    <td><code>array</code></td>
    <td>A list of strategy summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="data_collection_status" /></td>
    <td><code>string</code></td>
    <td>The status of assessment for the server. (dataCollectionTaskToBeScheduled, dataCollectionTaskScheduled, dataCollectionTaskStarted, dataCollectionTaskStopped, dataCollectionTaskSuccess, dataCollectionTaskFailed, dataCollectionTaskPartialSuccess)</td>
</tr>
<tr>
    <td><CopyableCode code="last_analyzed_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the server was assessed.</td>
</tr>
<tr>
    <td><CopyableCode code="list_antipattern_severity_summary" /></td>
    <td><code>array</code></td>
    <td>A list of anti-pattern severity summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_set" /></td>
    <td><code>object</code></td>
    <td>A set of recommendations.</td>
</tr>
<tr>
    <td><CopyableCode code="server_error" /></td>
    <td><code>object</code></td>
    <td>The error in server analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="server_type" /></td>
    <td><code>string</code></td>
    <td>The type of server. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A message about the status of data collection, which contains detailed descriptions of any error messages. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="system_info" /></td>
    <td><code>object</code></td>
    <td>System information about the server.</td>
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
    <td><a href="#list_servers"><CopyableCode code="list_servers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all the servers.</td>
</tr>
<tr>
    <td><a href="#update_server_config"><CopyableCode code="update_server_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serverId"><code>serverId</code></a></td>
    <td></td>
    <td>Updates the configuration of the specified server.</td>
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
    defaultValue="list_servers"
    values={[
        { label: 'list_servers', value: 'list_servers' }
    ]}
>
<TabItem value="list_servers">

Returns a list of all the servers.

```sql
SELECT
id,
name,
antipattern_report_s3_object,
antipattern_report_status,
antipattern_report_status_message,
application_component_strategy_summary,
data_collection_status,
last_analyzed_timestamp,
list_antipattern_severity_summary,
recommendation_set,
server_error,
server_type,
status_message,
system_info
FROM aws.migrationhubstrategy.servers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_server_config"
    values={[
        { label: 'update_server_config', value: 'update_server_config' }
    ]}
>
<TabItem value="update_server_config">

Updates the configuration of the specified server.

```sql
UPDATE aws.migrationhubstrategy.servers
SET 
serverId = '{{ serverId }}',
strategyOption = '{{ strategyOption }}'
WHERE 
region = '{{ region }}' --required
AND serverId = '{{ serverId }}' --required;
```
</TabItem>
</Tabs>
