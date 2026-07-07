--- 
title: direct_connect_gateway_association_proposals
hide_title: false
hide_table_of_contents: false
keywords:
  - direct_connect_gateway_association_proposals
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

Creates, updates, deletes, gets or lists a <code>direct_connect_gateway_association_proposals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="direct_connect_gateway_association_proposals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.directconnect.direct_connect_gateway_association_proposals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_direct_connect_gateway_association_proposals"
    values={[
        { label: 'describe_direct_connect_gateway_association_proposals', value: 'describe_direct_connect_gateway_association_proposals' }
    ]}
>
<TabItem value="describe_direct_connect_gateway_association_proposals">

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
    <td><CopyableCode code="directConnectGatewayAssociationProposals" /></td>
    <td><code>array</code></td>
    <td>Describes the Direct Connect gateway association proposals.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
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
    <td><a href="#describe_direct_connect_gateway_association_proposals"><CopyableCode code="describe_direct_connect_gateway_association_proposals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway.</td>
</tr>
<tr>
    <td><a href="#create_direct_connect_gateway_association_proposal"><CopyableCode code="create_direct_connect_gateway_association_proposal" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-directConnectGatewayId"><code>directConnectGatewayId</code></a>, <a href="#parameter-directConnectGatewayOwnerAccount"><code>directConnectGatewayOwnerAccount</code></a>, <a href="#parameter-gatewayId"><code>gatewayId</code></a></td>
    <td></td>
    <td>Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway. You can associate a Direct Connect gateway and virtual private gateway or transit gateway that is owned by any Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#delete_direct_connect_gateway_association_proposal"><CopyableCode code="delete_direct_connect_gateway_association_proposal" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.</td>
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
    defaultValue="describe_direct_connect_gateway_association_proposals"
    values={[
        { label: 'describe_direct_connect_gateway_association_proposals', value: 'describe_direct_connect_gateway_association_proposals' }
    ]}
>
<TabItem value="describe_direct_connect_gateway_association_proposals">

Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway.

```sql
SELECT
directConnectGatewayAssociationProposals,
nextToken
FROM aws.directconnect.direct_connect_gateway_association_proposals
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_direct_connect_gateway_association_proposal"
    values={[
        { label: 'create_direct_connect_gateway_association_proposal', value: 'create_direct_connect_gateway_association_proposal' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_direct_connect_gateway_association_proposal">

Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway. You can associate a Direct Connect gateway and virtual private gateway or transit gateway that is owned by any Amazon Web Services account.

```sql
INSERT INTO aws.directconnect.direct_connect_gateway_association_proposals (
directConnectGatewayId,
directConnectGatewayOwnerAccount,
gatewayId,
addAllowedPrefixesToDirectConnectGateway,
removeAllowedPrefixesToDirectConnectGateway,
region
)
SELECT 
'{{ directConnectGatewayId }}' /* required */,
'{{ directConnectGatewayOwnerAccount }}' /* required */,
'{{ gatewayId }}' /* required */,
'{{ addAllowedPrefixesToDirectConnectGateway }}',
'{{ removeAllowedPrefixesToDirectConnectGateway }}',
'{{ region }}'
RETURNING
directConnectGatewayAssociationProposal
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: direct_connect_gateway_association_proposals
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the direct_connect_gateway_association_proposals resource.
    - name: directConnectGatewayId
      value: "{{ directConnectGatewayId }}"
      description: |
        The ID of the Direct Connect gateway.
    - name: directConnectGatewayOwnerAccount
      value: "{{ directConnectGatewayOwnerAccount }}"
      description: |
        The ID of the Amazon Web Services account that owns the Direct Connect gateway.
    - name: gatewayId
      value: "{{ gatewayId }}"
      description: |
        The ID of the virtual private gateway or transit gateway.
    - name: addAllowedPrefixesToDirectConnectGateway
      description: |
        The Amazon VPC prefixes to advertise to the Direct Connect gateway.
      value:
        - cidr: "{{ cidr }}"
    - name: removeAllowedPrefixesToDirectConnectGateway
      description: |
        The Amazon VPC prefixes to no longer advertise to the Direct Connect gateway.
      value:
        - cidr: "{{ cidr }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_direct_connect_gateway_association_proposal"
    values={[
        { label: 'delete_direct_connect_gateway_association_proposal', value: 'delete_direct_connect_gateway_association_proposal' }
    ]}
>
<TabItem value="delete_direct_connect_gateway_association_proposal">

Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.

```sql
DELETE FROM aws.directconnect.direct_connect_gateway_association_proposals
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
