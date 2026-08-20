--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - iot_data
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_data.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connection"
    values={[
        { label: 'get_connection', value: 'get_connection' }
    ]}
>
<TabItem value="get_connection">

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
    <td>Indicates whether the client is using a clean session. Returns true for clean sessions or false for persistent sessions.</td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the MQTT client. This is the same client ID that was used when the client established the connection. (pattern: &lt;code&gt;^&#91;^$&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connected" /></td>
    <td><code>boolean</code></td>
    <td>The connection state of the client. Returns true if the client is currently connected, or false if the client is not connected.</td>
</tr>
<tr>
    <td><CopyableCode code="connected_since" /></td>
    <td><code>integer (int64)</code></td>
    <td>Unix timestamp (in milliseconds) indicating when the client connected. Present only when connected is true.</td>
</tr>
<tr>
    <td><CopyableCode code="disconnect_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the last disconnection, if the client is currently disconnected. See the developer guide for valid disconnect reasons.</td>
</tr>
<tr>
    <td><CopyableCode code="disconnected_since" /></td>
    <td><code>integer (int64)</code></td>
    <td>Unix timestamp (in milliseconds) indicating when the client disconnected. Present only when connected is false. This information is available for 30 minutes after the client disconnects.</td>
</tr>
<tr>
    <td><CopyableCode code="keep_alive_duration" /></td>
    <td><code>integer</code></td>
    <td>The keep-alive interval in seconds that the client specified when establishing the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="session_expiry" /></td>
    <td><code>integer (int64)</code></td>
    <td>The session expiry interval in seconds for the MQTT client connection. This is configured by the user. This value indicates how long the session will remain active after the client disconnects.</td>
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
    <td>The IP address of the Amazon Web Services IoT Core endpoint that the client connected to. For clients connected to VPC endpoints, this is the private IP address of the network interface the client is connected to.</td>
</tr>
<tr>
    <td><CopyableCode code="target_port" /></td>
    <td><code>integer</code></td>
    <td>The port number of the Amazon Web Services IoT Core endpoint that the client connected to.</td>
</tr>
<tr>
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the thing associated with the principal of the MQTT client, if applicable. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC endpoint. Present for clients connected to IoT Core via a VPC endpoint.</td>
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
    <td><a href="#get_connection"><CopyableCode code="get_connection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-client_id"><code>client_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-includeSocketInformation"><code>includeSocketInformation</code></a></td>
    <td>Retrieves connection information for the specified MQTT client. Requires permission to access the GetConnection action.</td>
</tr>
<tr>
    <td><a href="#delete_connection"><CopyableCode code="delete_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-client_id"><code>client_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-cleanSession"><code>cleanSession</code></a>, <a href="#parameter-preventWillMessage"><code>preventWillMessage</code></a></td>
    <td>Disconnects a connected MQTT client from Amazon Web Services IoT Core. When you disconnect a client, Amazon Web Services IoT Core closes the client's network connection and optionally cleans the session state. Requires permission to access the DeleteConnection action.</td>
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
<tr id="parameter-client_id">
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the MQTT client to disconnect. The client ID can't start with a dollar sign ($). MQTT client IDs must be URL encoded (percent-encoded) when they contain characters that are not valid in HTTP requests, such as spaces, forward slashes (/), and UTF-8 characters.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-cleanSession">
    <td><CopyableCode code="cleanSession" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to remove the client's persistent session state when disconnecting. Set to TRUE to delete all session information, including subscriptions and queued messages. Set to FALSE to preserve the session state for persistent sessions. For clean sessions this parameter will be ignored. By default, this is set to FALSE (preserves the session state).</td>
</tr>
<tr id="parameter-includeSocketInformation">
    <td><CopyableCode code="includeSocketInformation" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if socket information (sourcePort, targetPort, sourceIp, targetIp) should be included in the GetConnection response. Set to TRUE to include socket information. Set to FALSE to omit socket information. By default, this is set to FALSE. See the developer guide for how to authorize this parameter.</td>
</tr>
<tr id="parameter-preventWillMessage">
    <td><CopyableCode code="preventWillMessage" /></td>
    <td><code>boolean</code></td>
    <td>Controls if Amazon Web Services IoT Core publishes the client's Last Will and Testament (LWT) message upon disconnection. Set to TRUE to prevent publishing the LWT message. Set to FALSE to ensure that LWT is published. By default, this is set to FALSE (LWT message is published).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_connection"
    values={[
        { label: 'get_connection', value: 'get_connection' }
    ]}
>
<TabItem value="get_connection">

Retrieves connection information for the specified MQTT client. Requires permission to access the GetConnection action.

```sql
SELECT
clean_session,
client_id,
connected,
connected_since,
disconnect_reason,
disconnected_since,
keep_alive_duration,
session_expiry,
source_ip,
source_port,
target_ip,
target_port,
thing_name,
vpc_endpoint_id
FROM aws.iot_data.connections
WHERE client_id = '{{ client_id }}' -- required
AND region = '{{ region }}' -- required
AND includeSocketInformation = '{{ includeSocketInformation }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connection"
    values={[
        { label: 'delete_connection', value: 'delete_connection' }
    ]}
>
<TabItem value="delete_connection">

Disconnects a connected MQTT client from Amazon Web Services IoT Core. When you disconnect a client, Amazon Web Services IoT Core closes the client's network connection and optionally cleans the session state. Requires permission to access the DeleteConnection action.

```sql
DELETE FROM aws.iot_data.connections
WHERE client_id = '{{ client_id }}' --required
AND region = '{{ region }}' --required
AND cleanSession = '{{ cleanSession }}'
AND preventWillMessage = '{{ preventWillMessage }}'
;
```
</TabItem>
</Tabs>
