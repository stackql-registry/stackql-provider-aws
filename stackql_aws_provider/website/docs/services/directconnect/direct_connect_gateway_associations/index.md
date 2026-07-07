--- 
title: direct_connect_gateway_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - direct_connect_gateway_associations
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

Creates, updates, deletes, gets or lists a <code>direct_connect_gateway_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="direct_connect_gateway_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.directconnect.direct_connect_gateway_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_direct_connect_gateway_associations"
    values={[
        { label: 'describe_direct_connect_gateway_associations', value: 'describe_direct_connect_gateway_associations' }
    ]}
>
<TabItem value="describe_direct_connect_gateway_associations">

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
    <td><CopyableCode code="allowedPrefixesToDirectConnectGateway" /></td>
    <td><code>array</code></td>
    <td>The Amazon VPC prefixes to advertise to the Direct Connect gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedCoreNetwork" /></td>
    <td><code>object</code></td>
    <td>The ID of the Cloud WAN core network associated with the Direct Connect gateway attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedGateway" /></td>
    <td><code>object</code></td>
    <td>Information about the associated gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="associationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Direct Connect gateway association.</td>
</tr>
<tr>
    <td><CopyableCode code="associationState" /></td>
    <td><code>string</code></td>
    <td>The state of the association. The following are the possible values: associating: The initial state after calling CreateDirectConnectGatewayAssociation. associated: The Direct Connect gateway and virtual private gateway or transit gateway are successfully associated and ready to pass traffic. disassociating: The initial state after calling DeleteDirectConnectGatewayAssociation. disassociated: The virtual private gateway or transit gateway is disassociated from the Direct Connect gateway. Traffic flow between the Direct Connect gateway and virtual private gateway or transit gateway is stopped. updating: The CIDR blocks for the virtual private gateway or transit gateway are currently being updated. This could be new CIDR blocks added or current CIDR blocks removed. (associating, associated, disassociating, disassociated, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="directConnectGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Direct Connect gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="directConnectGatewayOwnerAccount" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the associated gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="stateChangeError" /></td>
    <td><code>string</code></td>
    <td>The error message if the state of an object failed to advance.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual private gateway. Applies only to private virtual interfaces.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualGatewayOwnerAccount" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the virtual private gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualGatewayRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the virtual private gateway is located.</td>
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
    <td><a href="#describe_direct_connect_gateway_associations"><CopyableCode code="describe_direct_connect_gateway_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the associations between your Direct Connect gateways and virtual private gateways and transit gateways. You must specify one of the following: A Direct Connect gateway The response contains all virtual private gateways and transit gateways associated with the Direct Connect gateway. A virtual private gateway The response contains the Direct Connect gateway. A transit gateway The response contains the Direct Connect gateway. A Direct Connect gateway and a virtual private gateway The response contains the association between the Direct Connect gateway and virtual private gateway. A Direct Connect gateway and a transit gateway The response contains the association between the Direct Connect gateway and transit gateway. A Direct Connect gateway and a virtual private gateway The response contains the association between the Direct Connect gateway and virtual private gateway. A Direct Connect gateway association to a Cloud WAN core network The response contains the Cloud WAN core network ID that the Direct Connect gateway is associated to.</td>
</tr>
<tr>
    <td><a href="#create_direct_connect_gateway_association"><CopyableCode code="create_direct_connect_gateway_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-directConnectGatewayId"><code>directConnectGatewayId</code></a></td>
    <td></td>
    <td>Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.</td>
</tr>
<tr>
    <td><a href="#update_direct_connect_gateway_association"><CopyableCode code="update_direct_connect_gateway_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified attributes of the Direct Connect gateway association. Add or remove prefixes from the association.</td>
</tr>
<tr>
    <td><a href="#delete_direct_connect_gateway_association"><CopyableCode code="delete_direct_connect_gateway_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the association between the specified Direct Connect gateway and virtual private gateway. We recommend that you specify the associationID to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the virtualGatewayId and directConnectGatewayId to delete an association.</td>
</tr>
<tr>
    <td><a href="#accept_direct_connect_gateway_association_proposal"><CopyableCode code="accept_direct_connect_gateway_association_proposal" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-directConnectGatewayId"><code>directConnectGatewayId</code></a>, <a href="#parameter-proposalId"><code>proposalId</code></a>, <a href="#parameter-associatedGatewayOwnerAccount"><code>associatedGatewayOwnerAccount</code></a></td>
    <td></td>
    <td>Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.</td>
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
    defaultValue="describe_direct_connect_gateway_associations"
    values={[
        { label: 'describe_direct_connect_gateway_associations', value: 'describe_direct_connect_gateway_associations' }
    ]}
>
<TabItem value="describe_direct_connect_gateway_associations">

Lists the associations between your Direct Connect gateways and virtual private gateways and transit gateways. You must specify one of the following: A Direct Connect gateway The response contains all virtual private gateways and transit gateways associated with the Direct Connect gateway. A virtual private gateway The response contains the Direct Connect gateway. A transit gateway The response contains the Direct Connect gateway. A Direct Connect gateway and a virtual private gateway The response contains the association between the Direct Connect gateway and virtual private gateway. A Direct Connect gateway and a transit gateway The response contains the association between the Direct Connect gateway and transit gateway. A Direct Connect gateway and a virtual private gateway The response contains the association between the Direct Connect gateway and virtual private gateway. A Direct Connect gateway association to a Cloud WAN core network The response contains the Cloud WAN core network ID that the Direct Connect gateway is associated to.

```sql
SELECT
allowedPrefixesToDirectConnectGateway,
associatedCoreNetwork,
associatedGateway,
associationId,
associationState,
directConnectGatewayId,
directConnectGatewayOwnerAccount,
stateChangeError,
virtualGatewayId,
virtualGatewayOwnerAccount,
virtualGatewayRegion
FROM aws.directconnect.direct_connect_gateway_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_direct_connect_gateway_association"
    values={[
        { label: 'create_direct_connect_gateway_association', value: 'create_direct_connect_gateway_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_direct_connect_gateway_association">

Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.

```sql
INSERT INTO aws.directconnect.direct_connect_gateway_associations (
directConnectGatewayId,
gatewayId,
addAllowedPrefixesToDirectConnectGateway,
virtualGatewayId,
region
)
SELECT 
'{{ directConnectGatewayId }}' /* required */,
'{{ gatewayId }}',
'{{ addAllowedPrefixesToDirectConnectGateway }}',
'{{ virtualGatewayId }}',
'{{ region }}'
RETURNING
directConnectGatewayAssociation
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: direct_connect_gateway_associations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the direct_connect_gateway_associations resource.
    - name: directConnectGatewayId
      value: "{{ directConnectGatewayId }}"
      description: |
        The ID of the Direct Connect gateway.
    - name: gatewayId
      value: "{{ gatewayId }}"
      description: |
        The ID of the virtual private gateway or transit gateway.
    - name: addAllowedPrefixesToDirectConnectGateway
      description: |
        The Amazon VPC prefixes to advertise to the Direct Connect gateway This parameter is required when you create an association to a transit gateway. For information about how to set the prefixes, see Allowed Prefixes in the Direct Connect User Guide.
      value:
        - cidr: "{{ cidr }}"
    - name: virtualGatewayId
      value: "{{ virtualGatewayId }}"
      description: |
        The ID of the virtual private gateway.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_direct_connect_gateway_association"
    values={[
        { label: 'update_direct_connect_gateway_association', value: 'update_direct_connect_gateway_association' }
    ]}
>
<TabItem value="update_direct_connect_gateway_association">

Updates the specified attributes of the Direct Connect gateway association. Add or remove prefixes from the association.

```sql
UPDATE aws.directconnect.direct_connect_gateway_associations
SET 
associationId = '{{ associationId }}',
addAllowedPrefixesToDirectConnectGateway = '{{ addAllowedPrefixesToDirectConnectGateway }}',
removeAllowedPrefixesToDirectConnectGateway = '{{ removeAllowedPrefixesToDirectConnectGateway }}'
WHERE 
region = '{{ region }}' --required
RETURNING
directConnectGatewayAssociation;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_direct_connect_gateway_association"
    values={[
        { label: 'delete_direct_connect_gateway_association', value: 'delete_direct_connect_gateway_association' }
    ]}
>
<TabItem value="delete_direct_connect_gateway_association">

Deletes the association between the specified Direct Connect gateway and virtual private gateway. We recommend that you specify the associationID to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the virtualGatewayId and directConnectGatewayId to delete an association.

```sql
DELETE FROM aws.directconnect.direct_connect_gateway_associations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_direct_connect_gateway_association_proposal"
    values={[
        { label: 'accept_direct_connect_gateway_association_proposal', value: 'accept_direct_connect_gateway_association_proposal' }
    ]}
>
<TabItem value="accept_direct_connect_gateway_association_proposal">

Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.

```sql
EXEC aws.directconnect.direct_connect_gateway_associations.accept_direct_connect_gateway_association_proposal 
@region='{{ region }}' --required 
@@json=
'{
"directConnectGatewayId": "{{ directConnectGatewayId }}", 
"proposalId": "{{ proposalId }}", 
"associatedGatewayOwnerAccount": "{{ associatedGatewayOwnerAccount }}", 
"overrideAllowedPrefixesToDirectConnectGateway": "{{ overrideAllowedPrefixesToDirectConnectGateway }}"
}'
;
```
</TabItem>
</Tabs>
