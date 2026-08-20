--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
  - directconnect
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.directconnect.connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_connections"
    values={[
        { label: 'describe_connections', value: 'describe_connections' }
    ]}
>
<TabItem value="describe_connections">

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
    <td><CopyableCode code="connections" /></td>
    <td><code>array</code></td>
    <td>The connections.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</td>
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
    <td><a href="#describe_connections"><CopyableCode code="describe_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays the specified connection or all connections in this Region.</td>
</tr>
<tr>
    <td><a href="#create_connection"><CopyableCode code="create_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-bandwidth"><code>bandwidth</code></a>, <a href="#parameter-connectionName"><code>connectionName</code></a></td>
    <td></td>
    <td>Creates a connection between a customer network and a specific Direct Connect location. A connection links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an Direct Connect router. To find the locations for your Region, use DescribeLocations. You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection is created.</td>
</tr>
<tr>
    <td><a href="#disassociate_mac_sec_key"><CopyableCode code="disassociate_mac_sec_key" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectionId"><code>connectionId</code></a>, <a href="#parameter-secretARN"><code>secretARN</code></a></td>
    <td></td>
    <td>Removes the association between a MAC Security (MACsec) security key and a Direct Connect connection.</td>
</tr>
<tr>
    <td><a href="#update_connection"><CopyableCode code="update_connection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectionId"><code>connectionId</code></a></td>
    <td></td>
    <td>Updates the Direct Connect connection configuration. You can update the following parameters for a connection: The connection name The connection's MAC Security (MACsec) encryption mode.</td>
</tr>
<tr>
    <td><a href="#delete_connection"><CopyableCode code="delete_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified connection. Deleting a connection only stops the Direct Connect port hour and data transfer charges. If you are partnering with any third parties to connect with the Direct Connect location, you must cancel your service with them separately.</td>
</tr>
<tr>
    <td><a href="#associate_mac_sec_key"><CopyableCode code="associate_mac_sec_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectionId"><code>connectionId</code></a></td>
    <td></td>
    <td>Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with a Direct Connect connection. You must supply either the secretARN, or the CKN/CAK (ckn and cak) pair in the request. For information about MAC Security (MACsec) key considerations, see MACsec pre-shared CKN/CAK key considerations in the Direct Connect User Guide.</td>
</tr>
<tr>
    <td><a href="#confirm_connection"><CopyableCode code="confirm_connection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectionId"><code>connectionId</code></a></td>
    <td></td>
    <td>Confirms the creation of the specified hosted connection on an interconnect. Upon creation, the hosted connection is initially in the Ordering state, and remains in this state until the owner confirms creation of the hosted connection.</td>
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
    defaultValue="describe_connections"
    values={[
        { label: 'describe_connections', value: 'describe_connections' }
    ]}
>
<TabItem value="describe_connections">

Displays the specified connection or all connections in this Region.

```sql
SELECT
connections,
next_token
FROM aws.directconnect.connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connection"
    values={[
        { label: 'create_connection', value: 'create_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connection">

Creates a connection between a customer network and a specific Direct Connect location. A connection links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an Direct Connect router. To find the locations for your Region, use DescribeLocations. You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection is created.

```sql
INSERT INTO aws.directconnect.connections (
location,
bandwidth,
connectionName,
lagId,
tags,
providerName,
requestMACSec,
region
)
SELECT 
'{{ location }}' /* required */,
'{{ bandwidth }}' /* required */,
'{{ connectionName }}' /* required */,
'{{ lagId }}',
'{{ tags }}',
'{{ providerName }}',
{{ requestMACSec }},
'{{ region }}'
RETURNING
aws_device,
aws_device_v2,
aws_logical_device_id,
bandwidth,
connection_id,
connection_name,
connection_state,
encryption_mode,
has_logical_redundancy,
jumbo_frame_capable,
lag_id,
loa_issue_time,
location,
mac_sec_capable,
mac_sec_keys,
owner_account,
partner_interconnect_mac_sec_capable,
partner_name,
port_encryption_status,
provider_name,
rate_limiter_status,
region,
tags,
vlan
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connections resource.
    - name: location
      value: "{{ location }}"
      description: |
        The location of the connection.
    - name: bandwidth
      value: "{{ bandwidth }}"
      description: |
        The bandwidth of the connection.
    - name: connectionName
      value: "{{ connectionName }}"
      description: |
        The name of the connection.
    - name: lagId
      value: "{{ lagId }}"
      description: |
        The ID of the LAG.
    - name: tags
      description: |
        The tags to associate with the lag.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: providerName
      value: "{{ providerName }}"
      description: |
        The name of the service provider associated with the requested connection.
    - name: requestMACSec
      value: {{ requestMACSec }}
      description: |
        Indicates whether you want the connection to support MAC Security (MACsec). MAC Security (MACsec) is unavailable on hosted connections. For information about MAC Security (MACsec) prerequisites, see MAC Security in Direct Connect in the Direct Connect User Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="disassociate_mac_sec_key"
    values={[
        { label: 'disassociate_mac_sec_key', value: 'disassociate_mac_sec_key' },
        { label: 'update_connection', value: 'update_connection' }
    ]}
>
<TabItem value="disassociate_mac_sec_key">

Removes the association between a MAC Security (MACsec) security key and a Direct Connect connection.

```sql
UPDATE aws.directconnect.connections
SET 
connectionId = '{{ connectionId }}',
secretARN = '{{ secretARN }}'
WHERE 
region = '{{ region }}' --required
AND connectionId = '{{ connectionId }}' --required
AND secretARN = '{{ secretARN }}' --required
RETURNING
connection_id,
mac_sec_keys;
```
</TabItem>
<TabItem value="update_connection">

Updates the Direct Connect connection configuration. You can update the following parameters for a connection: The connection name The connection's MAC Security (MACsec) encryption mode.

```sql
UPDATE aws.directconnect.connections
SET 
connectionId = '{{ connectionId }}',
connectionName = '{{ connectionName }}',
encryptionMode = '{{ encryptionMode }}'
WHERE 
region = '{{ region }}' --required
AND connectionId = '{{ connectionId }}' --required
RETURNING
aws_device,
aws_device_v2,
aws_logical_device_id,
bandwidth,
connection_id,
connection_name,
connection_state,
encryption_mode,
has_logical_redundancy,
jumbo_frame_capable,
lag_id,
loa_issue_time,
location,
mac_sec_capable,
mac_sec_keys,
owner_account,
partner_interconnect_mac_sec_capable,
partner_name,
port_encryption_status,
provider_name,
rate_limiter_status,
region,
tags,
vlan;
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

Deletes the specified connection. Deleting a connection only stops the Direct Connect port hour and data transfer charges. If you are partnering with any third parties to connect with the Direct Connect location, you must cancel your service with them separately.

```sql
DELETE FROM aws.directconnect.connections
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="associate_mac_sec_key"
    values={[
        { label: 'associate_mac_sec_key', value: 'associate_mac_sec_key' },
        { label: 'confirm_connection', value: 'confirm_connection' }
    ]}
>
<TabItem value="associate_mac_sec_key">

Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with a Direct Connect connection. You must supply either the secretARN, or the CKN/CAK (ckn and cak) pair in the request. For information about MAC Security (MACsec) key considerations, see MACsec pre-shared CKN/CAK key considerations in the Direct Connect User Guide.

```sql
EXEC aws.directconnect.connections.associate_mac_sec_key 
@region='{{ region }}' --required 
@@json=
'{
"connectionId": "{{ connectionId }}", 
"secretARN": "{{ secretARN }}", 
"ckn": "{{ ckn }}", 
"cak": "{{ cak }}"
}'
;
```
</TabItem>
<TabItem value="confirm_connection">

Confirms the creation of the specified hosted connection on an interconnect. Upon creation, the hosted connection is initially in the Ordering state, and remains in this state until the owner confirms creation of the hosted connection.

```sql
EXEC aws.directconnect.connections.confirm_connection 
@region='{{ region }}' --required 
@@json=
'{
"connectionId": "{{ connectionId }}"
}'
;
```
</TabItem>
</Tabs>
