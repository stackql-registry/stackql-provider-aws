--- 
title: local_gateway_virtual_interface_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - local_gateway_virtual_interface_groups
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

Creates, updates, deletes, gets or lists a <code>local_gateway_virtual_interface_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="local_gateway_virtual_interface_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.local_gateway_virtual_interface_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_local_gateway_virtual_interface_groups"
    values={[
        { label: 'describe_local_gateway_virtual_interface_groups', value: 'describe_local_gateway_virtual_interface_groups' }
    ]}
>
<TabItem value="describe_local_gateway_virtual_interface_groups">

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
    <td><CopyableCode code="ConfigurationState" /></td>
    <td><code>string</code></td>
    <td>The current state of the local gateway virtual interface group.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalBgpAsn" /></td>
    <td><code>integer</code></td>
    <td>The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP).</td>
</tr>
<tr>
    <td><CopyableCode code="LocalBgpAsnExtended" /></td>
    <td><code>integer</code></td>
    <td>The extended 32-bit ASN for the local BGP configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalGatewayVirtualInterfaceGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) of the local gateway virtual interface group.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalGatewayVirtualInterfaceGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual interface group.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalGatewayVirtualInterfaceIds" /></td>
    <td><code>string</code></td>
    <td>The IDs of the virtual interfaces.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the local gateway virtual interface group.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the virtual interface group.</td>
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
    <td><a href="#describe_local_gateway_virtual_interface_groups"><CopyableCode code="describe_local_gateway_virtual_interface_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LocalGatewayVirtualInterfaceGroupId"><code>LocalGatewayVirtualInterfaceGroupId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the specified local gateway virtual interface groups.</td>
</tr>
<tr>
    <td><a href="#create_local_gateway_virtual_interface_group"><CopyableCode code="create_local_gateway_virtual_interface_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-LocalGatewayId"><code>LocalGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LocalBgpAsn"><code>LocalBgpAsn</code></a>, <a href="#parameter-LocalBgpAsnExtended"><code>LocalBgpAsnExtended</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Create a local gateway virtual interface group.</td>
</tr>
<tr>
    <td><a href="#delete_local_gateway_virtual_interface_group"><CopyableCode code="delete_local_gateway_virtual_interface_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-LocalGatewayVirtualInterfaceGroupId"><code>LocalGatewayVirtualInterfaceGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Delete the specified local gateway interface group.</td>
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
<tr id="parameter-LocalGatewayId">
    <td><CopyableCode code="LocalGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway.</td>
</tr>
<tr id="parameter-LocalGatewayVirtualInterfaceGroupId">
    <td><CopyableCode code="LocalGatewayVirtualInterfaceGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the local gateway virtual interface group to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. local-gateway-id - The ID of a local gateway. local-gateway-virtual-interface-group-id - The ID of the virtual interface group. local-gateway-virtual-interface-id - The ID of the virtual interface. owner-id - The ID of the Amazon Web Services account that owns the local gateway virtual interface group.</td>
</tr>
<tr id="parameter-LocalBgpAsn">
    <td><CopyableCode code="LocalBgpAsn" /></td>
    <td><code>integer</code></td>
    <td>The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP).</td>
</tr>
<tr id="parameter-LocalBgpAsnExtended">
    <td><CopyableCode code="LocalBgpAsnExtended" /></td>
    <td><code>integer (int64)</code></td>
    <td>The extended 32-bit ASN for the local BGP configuration.</td>
</tr>
<tr id="parameter-LocalGatewayVirtualInterfaceGroupId">
    <td><CopyableCode code="LocalGatewayVirtualInterfaceGroupId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the virtual interface groups.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the local gateway virtual interface group when the resource is being created.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_local_gateway_virtual_interface_groups"
    values={[
        { label: 'describe_local_gateway_virtual_interface_groups', value: 'describe_local_gateway_virtual_interface_groups' }
    ]}
>
<TabItem value="describe_local_gateway_virtual_interface_groups">

Describes the specified local gateway virtual interface groups.

```sql
SELECT
ConfigurationState,
LocalBgpAsn,
LocalBgpAsnExtended,
LocalGatewayId,
LocalGatewayVirtualInterfaceGroupArn,
LocalGatewayVirtualInterfaceGroupId,
LocalGatewayVirtualInterfaceIds,
OwnerId,
Tags
FROM aws.ec2.local_gateway_virtual_interface_groups
WHERE region = '{{ region }}' -- required
AND LocalGatewayVirtualInterfaceGroupId = '{{ LocalGatewayVirtualInterfaceGroupId }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_local_gateway_virtual_interface_group"
    values={[
        { label: 'create_local_gateway_virtual_interface_group', value: 'create_local_gateway_virtual_interface_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_local_gateway_virtual_interface_group">

Create a local gateway virtual interface group.

```sql
INSERT INTO aws.ec2.local_gateway_virtual_interface_groups (
LocalGatewayId,
region,
LocalBgpAsn,
LocalBgpAsnExtended,
TagSpecification,
DryRun
)
SELECT 
'{{ LocalGatewayId }}',
'{{ region }}',
'{{ LocalBgpAsn }}',
'{{ LocalBgpAsnExtended }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
ConfigurationState,
LocalBgpAsn,
LocalBgpAsnExtended,
LocalGatewayId,
LocalGatewayVirtualInterfaceGroupArn,
LocalGatewayVirtualInterfaceGroupId,
LocalGatewayVirtualInterfaceIds,
OwnerId,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: local_gateway_virtual_interface_groups
  props:
    - name: LocalGatewayId
      value: "{{ LocalGatewayId }}"
      description: Required parameter for the local_gateway_virtual_interface_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the local_gateway_virtual_interface_groups resource.
    - name: LocalBgpAsn
      value: {{ LocalBgpAsn }}
      description: The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP).
      description: The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP).
    - name: LocalBgpAsnExtended
      value: "{{ LocalBgpAsnExtended }}"
      description: The extended 32-bit ASN for the local BGP configuration.
      description: The extended 32-bit ASN for the local BGP configuration.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the local gateway virtual interface group when the resource is being created.
      description: The tags to apply to the local gateway virtual interface group when the resource is being created.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_local_gateway_virtual_interface_group"
    values={[
        { label: 'delete_local_gateway_virtual_interface_group', value: 'delete_local_gateway_virtual_interface_group' }
    ]}
>
<TabItem value="delete_local_gateway_virtual_interface_group">

Delete the specified local gateway interface group.

```sql
DELETE FROM aws.ec2.local_gateway_virtual_interface_groups
WHERE LocalGatewayVirtualInterfaceGroupId = '{{ LocalGatewayVirtualInterfaceGroupId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
