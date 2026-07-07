--- 
title: global_networks
hide_title: false
hide_table_of_contents: false
keywords:
  - global_networks
  - networkmanager
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

Creates, updates, deletes, gets or lists a <code>global_networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="global_networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.global_networks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_global_networks"
    values={[
        { label: 'describe_global_networks', value: 'describe_global_networks' }
    ]}
>
<TabItem value="describe_global_networks">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the global network was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the global network. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the global network. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GlobalNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of the global network. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the global network. (PENDING, AVAILABLE, DELETING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags for the global network.</td>
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
    <td><a href="#describe_global_networks"><CopyableCode code="describe_global_networks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-globalNetworkIds"><code>globalNetworkIds</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Describes one or more global networks. By default, all global networks are described. To describe the objects in your global network, you must use the appropriate Get* action. For example, to list the transit gateways in your global network, use GetTransitGatewayRegistrations.</td>
</tr>
<tr>
    <td><a href="#register_transit_gateway"><CopyableCode code="register_transit_gateway" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TransitGatewayArn"><code>TransitGatewayArn</code></a></td>
    <td></td>
    <td>Registers a transit gateway in your global network. Not all Regions support transit gateways for global networks. For a list of the supported Regions, see Region Availability in the Amazon Web Services Transit Gateways for Global Networks User Guide. The transit gateway can be in any of the supported Amazon Web Services Regions, but it must be owned by the same Amazon Web Services account that owns the global network. You cannot register a transit gateway in more than one global network.</td>
</tr>
<tr>
    <td><a href="#create_global_network"><CopyableCode code="create_global_network" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new, empty global network.</td>
</tr>
<tr>
    <td><a href="#associate_customer_gateway"><CopyableCode code="associate_customer_gateway" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CustomerGatewayArn"><code>CustomerGatewayArn</code></a>, <a href="#parameter-DeviceId"><code>DeviceId</code></a></td>
    <td></td>
    <td>Associates a customer gateway with a device and optionally, with a link. If you specify a link, it must be associated with the specified device. You can only associate customer gateways that are connected to a VPN attachment on a transit gateway or core network registered in your global network. When you register a transit gateway or core network, customer gateways that are connected to the transit gateway are automatically included in the global network. To list customer gateways that are connected to a transit gateway, use the DescribeVpnConnections EC2 API and filter by transit-gateway-id. You cannot associate a customer gateway with more than one device and link.</td>
</tr>
<tr>
    <td><a href="#disassociate_customer_gateway"><CopyableCode code="disassociate_customer_gateway" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-customer_gateway_arn"><code>customer_gateway_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a customer gateway from a device and a link.</td>
</tr>
<tr>
    <td><a href="#update_global_network"><CopyableCode code="update_global_network" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing global network. To remove information for any of the parameters, specify an empty string.</td>
</tr>
<tr>
    <td><a href="#deregister_transit_gateway"><CopyableCode code="deregister_transit_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-transit_gateway_arn"><code>transit_gateway_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters a transit gateway from your global network. This action does not delete your transit gateway, or modify any of its attachments. This action removes any customer gateway associations.</td>
</tr>
<tr>
    <td><a href="#delete_global_network"><CopyableCode code="delete_global_network" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing global network. You must first delete all global network objects (devices, links, and sites), deregister all transit gateways, and delete any core networks.</td>
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
<tr id="parameter-customer_gateway_arn">
    <td><CopyableCode code="customer_gateway_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the customer gateway.</td>
</tr>
<tr id="parameter-global_network_id">
    <td><CopyableCode code="global_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the global network.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-transit_gateway_arn">
    <td><CopyableCode code="transit_gateway_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the transit gateway.</td>
</tr>
<tr id="parameter-globalNetworkIds">
    <td><CopyableCode code="globalNetworkIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of one or more global networks. The maximum is 10.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_global_networks"
    values={[
        { label: 'describe_global_networks', value: 'describe_global_networks' }
    ]}
>
<TabItem value="describe_global_networks">

Describes one or more global networks. By default, all global networks are described. To describe the objects in your global network, you must use the appropriate Get* action. For example, to list the transit gateways in your global network, use GetTransitGatewayRegistrations.

```sql
SELECT
CreatedAt,
Description,
GlobalNetworkArn,
GlobalNetworkId,
State,
Tags
FROM aws.networkmanager.global_networks
WHERE region = '{{ region }}' -- required
AND globalNetworkIds = '{{ globalNetworkIds }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_transit_gateway"
    values={[
        { label: 'register_transit_gateway', value: 'register_transit_gateway' },
        { label: 'create_global_network', value: 'create_global_network' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_transit_gateway">

Registers a transit gateway in your global network. Not all Regions support transit gateways for global networks. For a list of the supported Regions, see Region Availability in the Amazon Web Services Transit Gateways for Global Networks User Guide. The transit gateway can be in any of the supported Amazon Web Services Regions, but it must be owned by the same Amazon Web Services account that owns the global network. You cannot register a transit gateway in more than one global network.

```sql
INSERT INTO aws.networkmanager.global_networks (
TransitGatewayArn,
global_network_id,
region
)
SELECT 
'{{ TransitGatewayArn }}' /* required */,
'{{ global_network_id }}',
'{{ region }}'
RETURNING
TransitGatewayRegistration
;
```
</TabItem>
<TabItem value="create_global_network">

Creates a new, empty global network.

```sql
INSERT INTO aws.networkmanager.global_networks (
Description,
Tags,
region
)
SELECT 
'{{ Description }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
GlobalNetwork
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: global_networks
  props:
    - name: global_network_id
      value: "{{ global_network_id }}"
      description: Required parameter for the global_networks resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the global_networks resource.
    - name: TransitGatewayArn
      value: "{{ TransitGatewayArn }}"
    - name: Description
      value: "{{ Description }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_customer_gateway"
    values={[
        { label: 'associate_customer_gateway', value: 'associate_customer_gateway' },
        { label: 'disassociate_customer_gateway', value: 'disassociate_customer_gateway' },
        { label: 'update_global_network', value: 'update_global_network' }
    ]}
>
<TabItem value="associate_customer_gateway">

Associates a customer gateway with a device and optionally, with a link. If you specify a link, it must be associated with the specified device. You can only associate customer gateways that are connected to a VPN attachment on a transit gateway or core network registered in your global network. When you register a transit gateway or core network, customer gateways that are connected to the transit gateway are automatically included in the global network. To list customer gateways that are connected to a transit gateway, use the DescribeVpnConnections EC2 API and filter by transit-gateway-id. You cannot associate a customer gateway with more than one device and link.

```sql
UPDATE aws.networkmanager.global_networks
SET 
CustomerGatewayArn = '{{ CustomerGatewayArn }}',
DeviceId = '{{ DeviceId }}',
LinkId = '{{ LinkId }}'
WHERE 
global_network_id = '{{ global_network_id }}' --required
AND region = '{{ region }}' --required
AND CustomerGatewayArn = '{{ CustomerGatewayArn }}' --required
AND DeviceId = '{{ DeviceId }}' --required
RETURNING
CustomerGatewayAssociation;
```
</TabItem>
<TabItem value="disassociate_customer_gateway">

Disassociates a customer gateway from a device and a link.

```sql
UPDATE aws.networkmanager.global_networks
SET 
-- No updatable properties
WHERE 
global_network_id = '{{ global_network_id }}' --required
AND customer_gateway_arn = '{{ customer_gateway_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
CustomerGatewayAssociation;
```
</TabItem>
<TabItem value="update_global_network">

Updates an existing global network. To remove information for any of the parameters, specify an empty string.

```sql
UPDATE aws.networkmanager.global_networks
SET 
Description = '{{ Description }}'
WHERE 
global_network_id = '{{ global_network_id }}' --required
AND region = '{{ region }}' --required
RETURNING
GlobalNetwork;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_transit_gateway"
    values={[
        { label: 'deregister_transit_gateway', value: 'deregister_transit_gateway' },
        { label: 'delete_global_network', value: 'delete_global_network' }
    ]}
>
<TabItem value="deregister_transit_gateway">

Deregisters a transit gateway from your global network. This action does not delete your transit gateway, or modify any of its attachments. This action removes any customer gateway associations.

```sql
DELETE FROM aws.networkmanager.global_networks
WHERE global_network_id = '{{ global_network_id }}' --required
AND transit_gateway_arn = '{{ transit_gateway_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_global_network">

Deletes an existing global network. You must first delete all global network objects (devices, links, and sites), deregister all transit gateways, and delete any core networks.

```sql
DELETE FROM aws.networkmanager.global_networks
WHERE global_network_id = '{{ global_network_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
