--- 
title: edge_agent_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - edge_agent_configurations
  - kinesisvideo
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

Creates, updates, deletes, gets or lists an <code>edge_agent_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="edge_agent_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesisvideo.edge_agent_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_edge_agent_configurations"
    values={[
        { label: 'list_edge_agent_configurations', value: 'list_edge_agent_configurations' }
    ]}
>
<TabItem value="list_edge_agent_configurations">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the stream first created the edge config.</td>
</tr>
<tr>
    <td><CopyableCode code="EdgeConfig" /></td>
    <td><code>object</code></td>
    <td>A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise.</td>
</tr>
<tr>
    <td><CopyableCode code="FailedStatusDetails" /></td>
    <td><code>string</code></td>
    <td>A description of the generated failure status.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the stream last updated the edge config.</td>
</tr>
<tr>
    <td><CopyableCode code="StreamARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the stream. (pattern: &lt;code&gt;arn:&#91;a-z\d-&#93;+:kinesisvideo:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:&#91;a-z&#93;+/&#91;a-zA-Z0-9_.-&#93;+/&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StreamName" /></td>
    <td><code>string</code></td>
    <td>The name of the stream. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SyncStatus" /></td>
    <td><code>string</code></td>
    <td>The current sync status of the stream's edge configuration. (SYNCING, ACKNOWLEDGED, IN_SYNC, SYNC_FAILED, DELETING, DELETE_FAILED, DELETING_ACKNOWLEDGED)</td>
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
    <td><a href="#list_edge_agent_configurations"><CopyableCode code="list_edge_agent_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of edge configurations associated with the specified Edge Agent. In the request, you must specify the Edge Agent HubDeviceArn.</td>
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
    defaultValue="list_edge_agent_configurations"
    values={[
        { label: 'list_edge_agent_configurations', value: 'list_edge_agent_configurations' }
    ]}
>
<TabItem value="list_edge_agent_configurations">

Returns an array of edge configurations associated with the specified Edge Agent. In the request, you must specify the Edge Agent HubDeviceArn.

```sql
SELECT
CreationTime,
EdgeConfig,
FailedStatusDetails,
LastUpdatedTime,
StreamARN,
StreamName,
SyncStatus
FROM aws.kinesisvideo.edge_agent_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
