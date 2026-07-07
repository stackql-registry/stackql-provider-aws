--- 
title: odb_peering_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - odb_peering_connections
  - odb
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

Creates, updates, deletes, gets or lists an <code>odb_peering_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="odb_peering_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.odb_peering_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_odb_peering_connection"
    values={[
        { label: 'get_odb_peering_connection', value: 'get_odb_peering_connection' },
        { label: 'list_odb_peering_connections', value: 'list_odb_peering_connections' }
    ]}
>
<TabItem value="get_odb_peering_connection">

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
    <td>The timestamp when the ODB peering connection was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the ODB peering connection.</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ODB network that initiated the peering connection.</td>
</tr>
<tr>
    <td><CopyableCode code="odbPeeringConnectionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ODB peering connection. Example: arn:aws:odb:us-east-1:123456789012:odb-peering-connection/odbpcx-abcdefgh12345678</td>
</tr>
<tr>
    <td><CopyableCode code="odbPeeringConnectionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the ODB peering connection. A sample ID is odbpcx-abcdefgh12345678. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="odbPeeringConnectionType" /></td>
    <td><code>string</code></td>
    <td>The type of the ODB peering connection. Valid Values: ODB-VPC | ODB-ODB</td>
</tr>
<tr>
    <td><CopyableCode code="peerNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the peer network.</td>
</tr>
<tr>
    <td><CopyableCode code="peerNetworkCidrs" /></td>
    <td><code>array</code></td>
    <td>The CIDR blocks associated with the peering connection. These CIDR blocks define the IP address ranges that can communicate through the peering connection.</td>
</tr>
<tr>
    <td><CopyableCode code="percentProgress" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage progress of the ODB peering connection creation or deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the ODB peering connection. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current status of the ODB peering connection.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_odb_peering_connections">

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
    <td>The timestamp when the ODB peering connection was created.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the ODB peering connection.</td>
</tr>
<tr>
    <td><CopyableCode code="odbNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ODB network that initiated the peering connection.</td>
</tr>
<tr>
    <td><CopyableCode code="odbPeeringConnectionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ODB peering connection.</td>
</tr>
<tr>
    <td><CopyableCode code="odbPeeringConnectionId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the ODB peering connection. A sample ID is odbpcx-abcdefgh12345678. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="odbPeeringConnectionType" /></td>
    <td><code>string</code></td>
    <td>The type of the ODB peering connection. Valid Values: ODB-VPC | ODB-ODB</td>
</tr>
<tr>
    <td><CopyableCode code="peerNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the peer network.</td>
</tr>
<tr>
    <td><CopyableCode code="peerNetworkCidrs" /></td>
    <td><code>array</code></td>
    <td>The CIDR blocks associated with the peering connection. These CIDR blocks define the IP address ranges that can communicate through the peering connection.</td>
</tr>
<tr>
    <td><CopyableCode code="percentProgress" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage progress of the ODB peering connection creation or deletion.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the ODB peering connection. (AVAILABLE, FAILED, PROVISIONING, TERMINATED, TERMINATING, UPDATING, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current status of the ODB peering connection.</td>
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
    <td><a href="#get_odb_peering_connection"><CopyableCode code="get_odb_peering_connection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an ODB peering connection.</td>
</tr>
<tr>
    <td><a href="#list_odb_peering_connections"><CopyableCode code="list_odb_peering_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all ODB peering connections or those associated with a specific ODB network.</td>
</tr>
<tr>
    <td><a href="#create_odb_peering_connection"><CopyableCode code="create_odb_peering_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-odbNetworkId"><code>odbNetworkId</code></a>, <a href="#parameter-peerNetworkId"><code>peerNetworkId</code></a></td>
    <td></td>
    <td>Creates a peering connection between an ODB network and a VPC. A peering connection enables private connectivity between the networks for application-tier communication.</td>
</tr>
<tr>
    <td><a href="#update_odb_peering_connection"><CopyableCode code="update_odb_peering_connection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-odbPeeringConnectionId"><code>odbPeeringConnectionId</code></a></td>
    <td></td>
    <td>Modifies the settings of an Oracle Database@Amazon Web Services peering connection. You can update the display name and add or remove CIDR blocks from the peering connection.</td>
</tr>
<tr>
    <td><a href="#delete_odb_peering_connection"><CopyableCode code="delete_odb_peering_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an ODB peering connection. When you delete an ODB peering connection, the underlying VPC peering connection is also deleted.</td>
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
    defaultValue="get_odb_peering_connection"
    values={[
        { label: 'get_odb_peering_connection', value: 'get_odb_peering_connection' },
        { label: 'list_odb_peering_connections', value: 'list_odb_peering_connections' }
    ]}
>
<TabItem value="get_odb_peering_connection">

Retrieves information about an ODB peering connection.

```sql
SELECT
createdAt,
displayName,
odbNetworkArn,
odbPeeringConnectionArn,
odbPeeringConnectionId,
odbPeeringConnectionType,
peerNetworkArn,
peerNetworkCidrs,
percentProgress,
status,
statusReason
FROM aws.odb.odb_peering_connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_odb_peering_connections">

Lists all ODB peering connections or those associated with a specific ODB network.

```sql
SELECT
createdAt,
displayName,
odbNetworkArn,
odbPeeringConnectionArn,
odbPeeringConnectionId,
odbPeeringConnectionType,
peerNetworkArn,
peerNetworkCidrs,
percentProgress,
status,
statusReason
FROM aws.odb.odb_peering_connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_odb_peering_connection"
    values={[
        { label: 'create_odb_peering_connection', value: 'create_odb_peering_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_odb_peering_connection">

Creates a peering connection between an ODB network and a VPC. A peering connection enables private connectivity between the networks for application-tier communication.

```sql
INSERT INTO aws.odb.odb_peering_connections (
odbNetworkId,
peerNetworkId,
displayName,
peerNetworkCidrsToBeAdded,
peerNetworkRouteTableIds,
clientToken,
tags,
region
)
SELECT 
'{{ odbNetworkId }}' /* required */,
'{{ peerNetworkId }}' /* required */,
'{{ displayName }}',
'{{ peerNetworkCidrsToBeAdded }}',
'{{ peerNetworkRouteTableIds }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
displayName,
odbPeeringConnectionId,
status,
statusReason
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: odb_peering_connections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the odb_peering_connections resource.
    - name: odbNetworkId
      value: "{{ odbNetworkId }}"
      description: |
        The unique identifier of the ODB network that initiates the peering connection.
    - name: peerNetworkId
      value: "{{ peerNetworkId }}"
      description: |
        The unique identifier of the peer network. This can be either a VPC ID or another ODB network ID.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The display name for the ODB peering connection.
    - name: peerNetworkCidrsToBeAdded
      value:
        - "{{ peerNetworkCidrsToBeAdded }}"
      description: |
        A list of CIDR blocks to add to the peering connection. These CIDR blocks define the IP address ranges that can communicate through the peering connection.
    - name: peerNetworkRouteTableIds
      value:
        - "{{ peerNetworkRouteTableIds }}"
      description: |
        The unique identifier of the VPC route table for which a route to the ODB network is automatically created during peering connection establishment.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        The client token for the ODB peering connection request. Constraints: Must be unique for each request.
    - name: tags
      value: "{{ tags }}"
      description: |
        The tags to assign to the ODB peering connection.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_odb_peering_connection"
    values={[
        { label: 'update_odb_peering_connection', value: 'update_odb_peering_connection' }
    ]}
>
<TabItem value="update_odb_peering_connection">

Modifies the settings of an Oracle Database@Amazon Web Services peering connection. You can update the display name and add or remove CIDR blocks from the peering connection.

```sql
UPDATE aws.odb.odb_peering_connections
SET 
odbPeeringConnectionId = '{{ odbPeeringConnectionId }}',
displayName = '{{ displayName }}',
peerNetworkCidrsToBeAdded = '{{ peerNetworkCidrsToBeAdded }}',
peerNetworkCidrsToBeRemoved = '{{ peerNetworkCidrsToBeRemoved }}'
WHERE 
region = '{{ region }}' --required
AND odbPeeringConnectionId = '{{ odbPeeringConnectionId }}' --required
RETURNING
displayName,
odbPeeringConnectionId,
status,
statusReason;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_odb_peering_connection"
    values={[
        { label: 'delete_odb_peering_connection', value: 'delete_odb_peering_connection' }
    ]}
>
<TabItem value="delete_odb_peering_connection">

Deletes an ODB peering connection. When you delete an ODB peering connection, the underlying VPC peering connection is also deleted.

```sql
DELETE FROM aws.odb.odb_peering_connections
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
