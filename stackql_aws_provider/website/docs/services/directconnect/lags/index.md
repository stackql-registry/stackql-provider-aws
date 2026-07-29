--- 
title: lags
hide_title: false
hide_table_of_contents: false
keywords:
  - lags
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

Creates, updates, deletes, gets or lists a <code>lags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.directconnect.lags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_lags"
    values={[
        { label: 'describe_lags', value: 'describe_lags' }
    ]}
>
<TabItem value="describe_lags">

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
    <td><CopyableCode code="lags" /></td>
    <td><code>array</code></td>
    <td>The LAGs.</td>
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
    <td><a href="#describe_lags"><CopyableCode code="describe_lags" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes all your link aggregation groups (LAG) or the specified LAG.</td>
</tr>
<tr>
    <td><a href="#create_lag"><CopyableCode code="create_lag" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-numberOfConnections"><code>numberOfConnections</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-connectionsBandwidth"><code>connectionsBandwidth</code></a>, <a href="#parameter-lagName"><code>lagName</code></a></td>
    <td></td>
    <td>Creates a link aggregation group (LAG) with the specified number of bundled physical dedicated connections between the customer network and a specific Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a single interface. All connections in a LAG must use the same bandwidth (either 1Gbps, 10Gbps, 100Gbps, or 400Gbps) and must terminate at the same Direct Connect endpoint. You can have up to 10 dedicated connections per location. Regardless of this limit, if you request more connections for the LAG than Direct Connect can allocate on a single endpoint, no LAG is created.. You can specify an existing physical dedicated connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG will be created on the same Direct Connect endpoint to which the dedicated connection terminates. Any virtual interfaces associated with the dedicated connection are automatically disassociated and re-associated with the LAG. The connection ID does not change. If the Amazon Web Services account used to create a LAG is a registered Direct Connect Partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.</td>
</tr>
<tr>
    <td><a href="#associate_connection_with_lag"><CopyableCode code="associate_connection_with_lag" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectionId"><code>connectionId</code></a>, <a href="#parameter-lagId"><code>lagId</code></a></td>
    <td></td>
    <td>Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to Amazon Web Services is interrupted). The connection must be hosted on the same Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing the connection would cause the original LAG to fall below its setting for minimum number of operational connections, the request fails. Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG. For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.</td>
</tr>
<tr>
    <td><a href="#update_lag"><CopyableCode code="update_lag" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-lagId"><code>lagId</code></a></td>
    <td></td>
    <td>Updates the attributes of the specified link aggregation group (LAG). You can update the following LAG attributes: The name of the LAG. The value for the minimum number of connections that must be operational for the LAG itself to be operational. The LAG's MACsec encryption mode. Amazon Web Services assigns this value to each connection which is part of the LAG. The tags If you adjust the threshold value for the minimum number of operational connections, ensure that the new value does not cause the LAG to fall below the threshold and become non-operational.</td>
</tr>
<tr>
    <td><a href="#delete_lag"><CopyableCode code="delete_lag" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.</td>
</tr>
<tr>
    <td><a href="#disassociate_connection_from_lag"><CopyableCode code="disassociate_connection_from_lag" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectionId"><code>connectionId</code></a>, <a href="#parameter-lagId"><code>lagId</code></a></td>
    <td></td>
    <td>Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the DeleteConnection request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an Direct Connect Partner is automatically converted to an interconnect. If disassociating the connection would cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections.</td>
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
    defaultValue="describe_lags"
    values={[
        { label: 'describe_lags', value: 'describe_lags' }
    ]}
>
<TabItem value="describe_lags">

Describes all your link aggregation groups (LAG) or the specified LAG.

```sql
SELECT
lags,
next_token
FROM aws.directconnect.lags
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_lag"
    values={[
        { label: 'create_lag', value: 'create_lag' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_lag">

Creates a link aggregation group (LAG) with the specified number of bundled physical dedicated connections between the customer network and a specific Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a single interface. All connections in a LAG must use the same bandwidth (either 1Gbps, 10Gbps, 100Gbps, or 400Gbps) and must terminate at the same Direct Connect endpoint. You can have up to 10 dedicated connections per location. Regardless of this limit, if you request more connections for the LAG than Direct Connect can allocate on a single endpoint, no LAG is created.. You can specify an existing physical dedicated connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG will be created on the same Direct Connect endpoint to which the dedicated connection terminates. Any virtual interfaces associated with the dedicated connection are automatically disassociated and re-associated with the LAG. The connection ID does not change. If the Amazon Web Services account used to create a LAG is a registered Direct Connect Partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.

```sql
INSERT INTO aws.directconnect.lags (
numberOfConnections,
location,
connectionsBandwidth,
lagName,
connectionId,
tags,
childConnectionTags,
providerName,
requestMACSec,
region
)
SELECT 
{{ numberOfConnections }} /* required */,
'{{ location }}' /* required */,
'{{ connectionsBandwidth }}' /* required */,
'{{ lagName }}' /* required */,
'{{ connectionId }}',
'{{ tags }}',
'{{ childConnectionTags }}',
'{{ providerName }}',
{{ requestMACSec }},
'{{ region }}'
RETURNING
allows_hosted_connections,
aws_device,
aws_device_v2,
aws_logical_device_id,
connections,
connections_bandwidth,
encryption_mode,
has_logical_redundancy,
jumbo_frame_capable,
lag_id,
lag_name,
lag_state,
location,
mac_sec_capable,
mac_sec_keys,
minimum_links,
number_of_connections,
owner_account,
provider_name,
region,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: lags
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the lags resource.
    - name: numberOfConnections
      value: {{ numberOfConnections }}
      description: |
        The number of physical dedicated connections initially provisioned and bundled by the LAG. You can have a maximum of four connections when the port speed is 1Gbps or 10Gbps, or two when the port speed is 100Gbps or 400Gbps.
    - name: location
      value: "{{ location }}"
      description: |
        The location for the LAG.
    - name: connectionsBandwidth
      value: "{{ connectionsBandwidth }}"
      description: |
        The bandwidth of the individual physical dedicated connections bundled by the LAG. The possible values are 1Gbps,10Gbps, 100Gbps, and 400Gbps.
    - name: lagName
      value: "{{ lagName }}"
      description: |
        The name of the LAG.
    - name: connectionId
      value: "{{ connectionId }}"
      description: |
        The ID of an existing dedicated connection to migrate to the LAG.
    - name: tags
      description: |
        The tags to associate with the LAG.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: childConnectionTags
      description: |
        The tags to associate with the automtically created LAGs.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: providerName
      value: "{{ providerName }}"
      description: |
        The name of the service provider associated with the LAG.
    - name: requestMACSec
      value: {{ requestMACSec }}
      description: |
        Indicates whether the connection will support MAC Security (MACsec). All connections in the LAG must be capable of supporting MAC Security (MACsec). For information about MAC Security (MACsec) prerequisties, see MACsec prerequisties in the Direct Connect User Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_connection_with_lag"
    values={[
        { label: 'associate_connection_with_lag', value: 'associate_connection_with_lag' },
        { label: 'update_lag', value: 'update_lag' }
    ]}
>
<TabItem value="associate_connection_with_lag">

Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to Amazon Web Services is interrupted). The connection must be hosted on the same Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing the connection would cause the original LAG to fall below its setting for minimum number of operational connections, the request fails. Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG. For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.

```sql
UPDATE aws.directconnect.lags
SET 
connectionId = '{{ connectionId }}',
lagId = '{{ lagId }}'
WHERE 
region = '{{ region }}' --required
AND connectionId = '{{ connectionId }}' --required
AND lagId = '{{ lagId }}' --required
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
region,
tags,
vlan;
```
</TabItem>
<TabItem value="update_lag">

Updates the attributes of the specified link aggregation group (LAG). You can update the following LAG attributes: The name of the LAG. The value for the minimum number of connections that must be operational for the LAG itself to be operational. The LAG's MACsec encryption mode. Amazon Web Services assigns this value to each connection which is part of the LAG. The tags If you adjust the threshold value for the minimum number of operational connections, ensure that the new value does not cause the LAG to fall below the threshold and become non-operational.

```sql
UPDATE aws.directconnect.lags
SET 
lagId = '{{ lagId }}',
lagName = '{{ lagName }}',
minimumLinks = {{ minimumLinks }},
encryptionMode = '{{ encryptionMode }}'
WHERE 
region = '{{ region }}' --required
AND lagId = '{{ lagId }}' --required
RETURNING
allows_hosted_connections,
aws_device,
aws_device_v2,
aws_logical_device_id,
connections,
connections_bandwidth,
encryption_mode,
has_logical_redundancy,
jumbo_frame_capable,
lag_id,
lag_name,
lag_state,
location,
mac_sec_capable,
mac_sec_keys,
minimum_links,
number_of_connections,
owner_account,
provider_name,
region,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_lag"
    values={[
        { label: 'delete_lag', value: 'delete_lag' }
    ]}
>
<TabItem value="delete_lag">

Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.

```sql
DELETE FROM aws.directconnect.lags
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_connection_from_lag"
    values={[
        { label: 'disassociate_connection_from_lag', value: 'disassociate_connection_from_lag' }
    ]}
>
<TabItem value="disassociate_connection_from_lag">

Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the DeleteConnection request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an Direct Connect Partner is automatically converted to an interconnect. If disassociating the connection would cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections.

```sql
EXEC aws.directconnect.lags.disassociate_connection_from_lag 
@region='{{ region }}' --required 
@@json=
'{
"connectionId": "{{ connectionId }}", 
"lagId": "{{ lagId }}"
}'
;
```
</TabItem>
</Tabs>
