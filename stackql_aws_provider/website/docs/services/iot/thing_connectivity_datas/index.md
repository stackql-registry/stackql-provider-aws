--- 
title: thing_connectivity_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - thing_connectivity_datas
  - iot
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

Creates, updates, deletes, gets or lists a <code>thing_connectivity_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="thing_connectivity_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.thing_connectivity_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_thing_connectivity_data"
    values={[
        { label: 'get_thing_connectivity_data', value: 'get_thing_connectivity_data' }
    ]}
>
<TabItem value="get_thing_connectivity_data">

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
    <td><CopyableCode code="clean_session" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the client is using a clean session. Returns true for clean sessions.</td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the MQTT client.</td>
</tr>
<tr>
    <td><CopyableCode code="connected" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean that indicates the connectivity status.</td>
</tr>
<tr>
    <td><CopyableCode code="disconnect_reason" /></td>
    <td><code>string</code></td>
    <td>The reason that the client is disconnected. (AUTH_ERROR, CLIENT_INITIATED_DISCONNECT, CLIENT_ERROR, CONNECTION_LOST, DUPLICATE_CLIENTID, FORBIDDEN_ACCESS, MQTT_KEEP_ALIVE_TIMEOUT, SERVER_ERROR, SERVER_INITIATED_DISCONNECT, API_INITIATED_DISCONNECT, THROTTLED, WEBSOCKET_TTL_EXPIRATION, CUSTOMAUTH_TTL_EXPIRATION, UNKNOWN, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="keep_alive_duration" /></td>
    <td><code>integer</code></td>
    <td>The keep-alive interval in seconds that the client specified when establishing the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="session_expiry" /></td>
    <td><code>integer (int64)</code></td>
    <td>The session expiry interval in seconds for the MQTT client connection. This value indicates how long the session will remain active after the client disconnects.</td>
</tr>
<tr>
    <td><CopyableCode code="source_ip" /></td>
    <td><code>string</code></td>
    <td>The IP address of the client that initiated the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="source_port" /></td>
    <td><code>integer</code></td>
    <td>The client's source port.</td>
</tr>
<tr>
    <td><CopyableCode code="target_ip" /></td>
    <td><code>string</code></td>
    <td>The IP address of the Amazon Web Services IoT Core endpoint that the client connected to.</td>
</tr>
<tr>
    <td><CopyableCode code="target_port" /></td>
    <td><code>integer</code></td>
    <td>The port number of the Amazon Web Services IoT Core endpoint that the client connected to.</td>
</tr>
<tr>
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of your IoT thing. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the device connected or disconnected.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC endpoint. Present for clients connected to Amazon Web Services IoT Core via a VPC endpoint.</td>
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
    <td><a href="#get_thing_connectivity_data"><CopyableCode code="get_thing_connectivity_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the live connectivity status per device. If a device has never connected to IoT Core or was disconnected for more than 1 hour before fleet indexing's thingConnectivityIndexingMode was enabled, the response will have the connected field set to false with no additional session details.</td>
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
<tr id="parameter-thing_name">
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of your IoT thing.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_thing_connectivity_data"
    values={[
        { label: 'get_thing_connectivity_data', value: 'get_thing_connectivity_data' }
    ]}
>
<TabItem value="get_thing_connectivity_data">

Retrieves the live connectivity status per device. If a device has never connected to IoT Core or was disconnected for more than 1 hour before fleet indexing's thingConnectivityIndexingMode was enabled, the response will have the connected field set to false with no additional session details.

```sql
SELECT
clean_session,
client_id,
connected,
disconnect_reason,
keep_alive_duration,
session_expiry,
source_ip,
source_port,
target_ip,
target_port,
thing_name,
timestamp,
vpc_endpoint_id
FROM aws.iot.thing_connectivity_datas
WHERE thing_name = '{{ thing_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
