--- 
title: tunnels
hide_title: false
hide_table_of_contents: false
keywords:
  - tunnels
  - iotsecuretunneling
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

Creates, updates, deletes, gets or lists a <code>tunnels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tunnels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsecuretunneling.tunnels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_tunnel"
    values={[
        { label: 'describe_tunnel', value: 'describe_tunnel' },
        { label: 'list_tunnels', value: 'list_tunnels' }
    ]}
>
<TabItem value="describe_tunnel">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the tunnel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the tunnel. (pattern: &lt;code&gt;&#91;^\p&#123;C&#125;&#93;&#123;1,2048&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="destinationConfig" /></td>
    <td><code>object</code></td>
    <td>The destination configuration that specifies the thing name of the destination device and a service name that the local proxy uses to connect to the destination application.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationConnectionState" /></td>
    <td><code>object</code></td>
    <td>The connection state of the destination application.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the tunnel was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceConnectionState" /></td>
    <td><code>object</code></td>
    <td>The connection state of the source application.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a tunnel. Valid values are: Open and Closed. (OPEN, CLOSED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of tag metadata associated with the secure tunnel.</td>
</tr>
<tr>
    <td><CopyableCode code="timeoutConfig" /></td>
    <td><code>object</code></td>
    <td>Timeout configuration for the tunnel.</td>
</tr>
<tr>
    <td><CopyableCode code="tunnelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a tunnel.</td>
</tr>
<tr>
    <td><CopyableCode code="tunnelId" /></td>
    <td><code>string</code></td>
    <td>A unique alpha-numeric ID that identifies a tunnel. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_\-+=:&#93;&#123;1,128&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tunnels">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to get the next set of results, or null if there are no additional results. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_=-&#93;&#123;1,4096&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tunnelSummaries" /></td>
    <td><code>array</code></td>
    <td>A short description of the tunnels in an Amazon Web Services account.</td>
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
    <td><a href="#describe_tunnel"><CopyableCode code="describe_tunnel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a tunnel identified by the unique tunnel id. Requires permission to access the DescribeTunnel action.</td>
</tr>
<tr>
    <td><a href="#list_tunnels"><CopyableCode code="list_tunnels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all tunnels for an Amazon Web Services account. Tunnels are listed by creation time in descending order, newer tunnels will be listed before older tunnels. Requires permission to access the ListTunnels action.</td>
</tr>
<tr>
    <td><a href="#close_tunnel"><CopyableCode code="close_tunnel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-tunnelId"><code>tunnelId</code></a></td>
    <td></td>
    <td>Closes a tunnel identified by the unique tunnel id. When a CloseTunnel request is received, we close the WebSocket connections between the client and proxy server so no data can be transmitted. Requires permission to access the CloseTunnel action.</td>
</tr>
<tr>
    <td><a href="#rotate_tunnel_access_token"><CopyableCode code="rotate_tunnel_access_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-tunnelId"><code>tunnelId</code></a>, <a href="#parameter-clientMode"><code>clientMode</code></a></td>
    <td></td>
    <td>Revokes the current client access token (CAT) and returns new CAT for clients to use when reconnecting to secure tunneling to access the same tunnel. Requires permission to access the RotateTunnelAccessToken action. Rotating the CAT doesn't extend the tunnel duration. For example, say the tunnel duration is 12 hours and the tunnel has already been open for 4 hours. When you rotate the access tokens, the new tokens that are generated can only be used for the remaining 8 hours.</td>
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
    defaultValue="describe_tunnel"
    values={[
        { label: 'describe_tunnel', value: 'describe_tunnel' },
        { label: 'list_tunnels', value: 'list_tunnels' }
    ]}
>
<TabItem value="describe_tunnel">

Gets information about a tunnel identified by the unique tunnel id. Requires permission to access the DescribeTunnel action.

```sql
SELECT
createdAt,
description,
destinationConfig,
destinationConnectionState,
lastUpdatedAt,
sourceConnectionState,
status,
tags,
timeoutConfig,
tunnelArn,
tunnelId
FROM aws.iotsecuretunneling.tunnels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tunnels">

List all tunnels for an Amazon Web Services account. Tunnels are listed by creation time in descending order, newer tunnels will be listed before older tunnels. Requires permission to access the ListTunnels action.

```sql
SELECT
nextToken,
tunnelSummaries
FROM aws.iotsecuretunneling.tunnels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="close_tunnel"
    values={[
        { label: 'close_tunnel', value: 'close_tunnel' },
        { label: 'rotate_tunnel_access_token', value: 'rotate_tunnel_access_token' }
    ]}
>
<TabItem value="close_tunnel">

Closes a tunnel identified by the unique tunnel id. When a CloseTunnel request is received, we close the WebSocket connections between the client and proxy server so no data can be transmitted. Requires permission to access the CloseTunnel action.

```sql
EXEC aws.iotsecuretunneling.tunnels.close_tunnel 
@region='{{ region }}' --required 
@@json=
'{
"tunnelId": "{{ tunnelId }}", 
"delete": {{ delete }}
}'
;
```
</TabItem>
<TabItem value="rotate_tunnel_access_token">

Revokes the current client access token (CAT) and returns new CAT for clients to use when reconnecting to secure tunneling to access the same tunnel. Requires permission to access the RotateTunnelAccessToken action. Rotating the CAT doesn't extend the tunnel duration. For example, say the tunnel duration is 12 hours and the tunnel has already been open for 4 hours. When you rotate the access tokens, the new tokens that are generated can only be used for the remaining 8 hours.

```sql
EXEC aws.iotsecuretunneling.tunnels.rotate_tunnel_access_token 
@region='{{ region }}' --required 
@@json=
'{
"tunnelId": "{{ tunnelId }}", 
"clientMode": "{{ clientMode }}", 
"destinationConfig": "{{ destinationConfig }}"
}'
;
```
</TabItem>
</Tabs>
