--- 
title: client_vpn_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - client_vpn_connections
  - ec2
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

Creates, updates, deletes, gets or lists a <code>client_vpn_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="client_vpn_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.client_vpn_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_client_vpn_connections"
    values={[
        { label: 'describe_client_vpn_connections', value: 'describe_client_vpn_connections' }
    ]}
>
<TabItem value="describe_client_vpn_connections">

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
    <td><CopyableCode code="client_ip" /></td>
    <td><code>string</code></td>
    <td>The IP address of the client.</td>
</tr>
<tr>
    <td><CopyableCode code="client_ipv_6_address" /></td>
    <td><code>string</code></td>
    <td>The IPv6 address assigned to the client connection when using a dual-stack Client VPN endpoint. This field is only populated when the endpoint is configured for dual-stack addressing, and the client is using IPv6 for connectivity.</td>
</tr>
<tr>
    <td><CopyableCode code="client_vpn_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Client VPN endpoint to which the client is connected.</td>
</tr>
<tr>
    <td><CopyableCode code="common_name" /></td>
    <td><code>string</code></td>
    <td>The common name associated with the client. This is either the name of the client certificate, or the Active Directory user name.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_end_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the client connection was terminated.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_established_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the client connection was established.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the client connection.</td>
</tr>
<tr>
    <td><CopyableCode code="egress_bytes" /></td>
    <td><code>string</code></td>
    <td>The number of bytes received by the client.</td>
</tr>
<tr>
    <td><CopyableCode code="egress_packets" /></td>
    <td><code>string</code></td>
    <td>The number of packets received by the client.</td>
</tr>
<tr>
    <td><CopyableCode code="ingress_bytes" /></td>
    <td><code>string</code></td>
    <td>The number of bytes sent by the client.</td>
</tr>
<tr>
    <td><CopyableCode code="ingress_packets" /></td>
    <td><code>string</code></td>
    <td>The number of packets sent by the client.</td>
</tr>
<tr>
    <td><CopyableCode code="posture_compliance_statuses" /></td>
    <td><code>string</code></td>
    <td>The statuses returned by the client connect handler for posture compliance, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current state of the client connection.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string</code></td>
    <td>The current date and time.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The username of the client who established the client connection. This information is only provided if Active Directory client authentication is used.</td>
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
    <td><a href="#describe_client_vpn_connections"><CopyableCode code="describe_client_vpn_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes active client connections and connections that have been terminated within the last 60 minutes for the specified Client VPN endpoint.</td>
</tr>
<tr>
    <td><a href="#terminate_client_vpn_connections"><CopyableCode code="terminate_client_vpn_connections" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ClientVpnEndpointId"><code>ClientVpnEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ConnectionId"><code>ConnectionId</code></a>, <a href="#parameter-Username"><code>Username</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Terminates active Client VPN endpoint connections. This action can be used to terminate a specific client connection, or up to five connections established by a specific user.</td>
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
<tr id="parameter-ClientVpnEndpointId">
    <td><CopyableCode code="ClientVpnEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Client VPN endpoint to which the client is connected.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ConnectionId">
    <td><CopyableCode code="ConnectionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the client connection to be terminated.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. Filter names and values are case-sensitive. connection-id - The ID of the connection. username - For Active Directory client authentication, the user name of the client who established the client connection.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next page of results.</td>
</tr>
<tr id="parameter-Username">
    <td><CopyableCode code="Username" /></td>
    <td><code>string</code></td>
    <td>The name of the user who initiated the connection. Use this option to terminate all active connections for the specified user. This option can only be used if the user has established up to five connections.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_client_vpn_connections"
    values={[
        { label: 'describe_client_vpn_connections', value: 'describe_client_vpn_connections' }
    ]}
>
<TabItem value="describe_client_vpn_connections">

Describes active client connections and connections that have been terminated within the last 60 minutes for the specified Client VPN endpoint.

```sql
SELECT
client_ip,
client_ipv_6_address,
client_vpn_endpoint_id,
common_name,
connection_end_time,
connection_established_time,
connection_id,
egress_bytes,
egress_packets,
ingress_bytes,
ingress_packets,
posture_compliance_statuses,
status,
timestamp,
username
FROM aws.ec2.client_vpn_connections
WHERE ClientVpnEndpointId = '{{ ClientVpnEndpointId }}' -- required
AND region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate_client_vpn_connections"
    values={[
        { label: 'terminate_client_vpn_connections', value: 'terminate_client_vpn_connections' }
    ]}
>
<TabItem value="terminate_client_vpn_connections">

Terminates active Client VPN endpoint connections. This action can be used to terminate a specific client connection, or up to five connections established by a specific user.

```sql
DELETE FROM aws.ec2.client_vpn_connections
WHERE ClientVpnEndpointId = '{{ ClientVpnEndpointId }}' --required
AND region = '{{ region }}' --required
AND ConnectionId = '{{ ConnectionId }}'
AND Username = '{{ Username }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
