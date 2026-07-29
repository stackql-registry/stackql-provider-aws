--- 
title: direct_connect_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - direct_connect_gateways
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

Creates, updates, deletes, gets or lists a <code>direct_connect_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="direct_connect_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.directconnect.direct_connect_gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_direct_connect_gateways"
    values={[
        { label: 'describe_direct_connect_gateways', value: 'describe_direct_connect_gateways' }
    ]}
>
<TabItem value="describe_direct_connect_gateways">

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
    <td><CopyableCode code="amazon_side_asn" /></td>
    <td><code>integer (int64)</code></td>
    <td>The autonomous system number (AS) for the Amazon side of the connection.</td>
</tr>
<tr>
    <td><CopyableCode code="direct_connect_gateway_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Direct Connect gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="direct_connect_gateway_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Direct Connect gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="direct_connect_gateway_state" /></td>
    <td><code>string</code></td>
    <td>The state of the Direct Connect gateway. The following are the possible values: pending: The initial state after calling CreateDirectConnectGateway. available: The Direct Connect gateway is ready for use. deleting: The initial state after calling DeleteDirectConnectGateway. deleted: The Direct Connect gateway is deleted and cannot pass traffic. (pending, available, deleting, deleted)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the Direct Connect gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="state_change_error" /></td>
    <td><code>string</code></td>
    <td>The error message if the state of an object failed to advance.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Information about a tag.</td>
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
    <td><a href="#describe_direct_connect_gateways"><CopyableCode code="describe_direct_connect_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.</td>
</tr>
<tr>
    <td><a href="#create_direct_connect_gateway"><CopyableCode code="create_direct_connect_gateway" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-directConnectGatewayName"><code>directConnectGatewayName</code></a></td>
    <td></td>
    <td>Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any Amazon Web Services Region after it is created. The virtual interfaces and virtual private gateways that are connected through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to connect to a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic between them.</td>
</tr>
<tr>
    <td><a href="#update_direct_connect_gateway"><CopyableCode code="update_direct_connect_gateway" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-directConnectGatewayId"><code>directConnectGatewayId</code></a>, <a href="#parameter-newDirectConnectGatewayName"><code>newDirectConnectGatewayName</code></a></td>
    <td></td>
    <td>Updates the name of a current Direct Connect gateway.</td>
</tr>
<tr>
    <td><a href="#delete_direct_connect_gateway"><CopyableCode code="delete_direct_connect_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect gateway.</td>
</tr>
<tr>
    <td><a href="#confirm_transit_virtual_interface"><CopyableCode code="confirm_transit_virtual_interface" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-virtualInterfaceId"><code>virtualInterfaceId</code></a>, <a href="#parameter-directConnectGatewayId"><code>directConnectGatewayId</code></a></td>
    <td></td>
    <td>Accepts ownership of a transit virtual interface created by another Amazon Web Services account. After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</td>
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
    defaultValue="describe_direct_connect_gateways"
    values={[
        { label: 'describe_direct_connect_gateways', value: 'describe_direct_connect_gateways' }
    ]}
>
<TabItem value="describe_direct_connect_gateways">

Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.

```sql
SELECT
amazon_side_asn,
direct_connect_gateway_id,
direct_connect_gateway_name,
direct_connect_gateway_state,
owner_account,
state_change_error,
tags
FROM aws.directconnect.direct_connect_gateways
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_direct_connect_gateway"
    values={[
        { label: 'create_direct_connect_gateway', value: 'create_direct_connect_gateway' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_direct_connect_gateway">

Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any Amazon Web Services Region after it is created. The virtual interfaces and virtual private gateways that are connected through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to connect to a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic between them.

```sql
INSERT INTO aws.directconnect.direct_connect_gateways (
directConnectGatewayName,
tags,
amazonSideAsn,
region
)
SELECT 
'{{ directConnectGatewayName }}' /* required */,
'{{ tags }}',
{{ amazonSideAsn }},
'{{ region }}'
RETURNING
direct_connect_gateway
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: direct_connect_gateways
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the direct_connect_gateways resource.
    - name: directConnectGatewayName
      value: "{{ directConnectGatewayName }}"
      description: |
        The name of the Direct Connect gateway.
    - name: tags
      description: |
        The key-value pair tags associated with the request.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: amazonSideAsn
      value: {{ amazonSideAsn }}
      description: |
        The autonomous system number (ASN) for Border Gateway Protocol (BGP) to be configured on the Amazon side of the connection. The ASN must be in the private range of 64,512 to 65,534 or 4,200,000,000 to 4,294,967,294. The default is 64512.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_direct_connect_gateway"
    values={[
        { label: 'update_direct_connect_gateway', value: 'update_direct_connect_gateway' }
    ]}
>
<TabItem value="update_direct_connect_gateway">

Updates the name of a current Direct Connect gateway.

```sql
UPDATE aws.directconnect.direct_connect_gateways
SET 
directConnectGatewayId = '{{ directConnectGatewayId }}',
newDirectConnectGatewayName = '{{ newDirectConnectGatewayName }}'
WHERE 
region = '{{ region }}' --required
AND directConnectGatewayId = '{{ directConnectGatewayId }}' --required
AND newDirectConnectGatewayName = '{{ newDirectConnectGatewayName }}' --required
RETURNING
direct_connect_gateway;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_direct_connect_gateway"
    values={[
        { label: 'delete_direct_connect_gateway', value: 'delete_direct_connect_gateway' }
    ]}
>
<TabItem value="delete_direct_connect_gateway">

Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect gateway.

```sql
DELETE FROM aws.directconnect.direct_connect_gateways
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="confirm_transit_virtual_interface"
    values={[
        { label: 'confirm_transit_virtual_interface', value: 'confirm_transit_virtual_interface' }
    ]}
>
<TabItem value="confirm_transit_virtual_interface">

Accepts ownership of a transit virtual interface created by another Amazon Web Services account. After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.

```sql
EXEC aws.directconnect.direct_connect_gateways.confirm_transit_virtual_interface 
@region='{{ region }}' --required 
@@json=
'{
"virtualInterfaceId": "{{ virtualInterfaceId }}", 
"directConnectGatewayId": "{{ directConnectGatewayId }}"
}'
;
```
</TabItem>
</Tabs>
