--- 
title: vpc_endpoint_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoint_associations
  - network_firewall
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

Creates, updates, deletes, gets or lists a <code>vpc_endpoint_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_endpoint_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.vpc_endpoint_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_endpoint_association"
    values={[
        { label: 'describe_vpc_endpoint_association', value: 'describe_vpc_endpoint_association' },
        { label: 'list_vpc_endpoint_associations', value: 'list_vpc_endpoint_associations' }
    ]}
>
<TabItem value="describe_vpc_endpoint_association">

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
    <td><CopyableCode code="VpcEndpointAssociation" /></td>
    <td><code>object</code></td>
    <td>The configuration settings for the VPC endpoint association. These settings include the firewall and the VPC and subnet to use for the firewall endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcEndpointAssociationStatus" /></td>
    <td><code>object</code></td>
    <td>Detailed information about the current status of a VpcEndpointAssociation. You can retrieve this by calling DescribeVpcEndpointAssociation and providing the VPC endpoint association ARN.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_vpc_endpoint_associations">

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
    <td><CopyableCode code="VpcEndpointAssociationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a VPC endpoint association. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_vpc_endpoint_association"><CopyableCode code="describe_vpc_endpoint_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the data object for the specified VPC endpoint association.</td>
</tr>
<tr>
    <td><a href="#list_vpc_endpoint_associations"><CopyableCode code="list_vpc_endpoint_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the metadata for the VPC endpoint associations that you have defined. If you specify a fireawll, this returns only the endpoint associations for that firewall. Depending on your setting for max results and the number of associations, a single call might not return the full list.</td>
</tr>
<tr>
    <td><a href="#create_vpc_endpoint_association"><CopyableCode code="create_vpc_endpoint_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FirewallArn"><code>FirewallArn</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-SubnetMapping"><code>SubnetMapping</code></a></td>
    <td></td>
    <td>Creates a firewall endpoint for an Network Firewall firewall. This type of firewall endpoint is independent of the firewall endpoints that you specify in the Firewall itself, and you define it in addition to those endpoints after the firewall has been created. You can define a VPC endpoint association using a different VPC than the one you used in the firewall specifications.</td>
</tr>
<tr>
    <td><a href="#delete_vpc_endpoint_association"><CopyableCode code="delete_vpc_endpoint_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified VpcEndpointAssociation. You can check whether an endpoint association is in use by reviewing the route tables for the Availability Zones where you have the endpoint subnet mapping. You can retrieve the subnet mapping by calling DescribeVpcEndpointAssociation. You define and update the route tables through Amazon VPC. As needed, update the route tables for the Availability Zone to remove the firewall endpoint for the association. When the route tables no longer use the firewall endpoint, you can remove the endpoint association safely.</td>
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
    defaultValue="describe_vpc_endpoint_association"
    values={[
        { label: 'describe_vpc_endpoint_association', value: 'describe_vpc_endpoint_association' },
        { label: 'list_vpc_endpoint_associations', value: 'list_vpc_endpoint_associations' }
    ]}
>
<TabItem value="describe_vpc_endpoint_association">

Returns the data object for the specified VPC endpoint association.

```sql
SELECT
VpcEndpointAssociation,
VpcEndpointAssociationStatus
FROM aws.network_firewall.vpc_endpoint_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_vpc_endpoint_associations">

Retrieves the metadata for the VPC endpoint associations that you have defined. If you specify a fireawll, this returns only the endpoint associations for that firewall. Depending on your setting for max results and the number of associations, a single call might not return the full list.

```sql
SELECT
VpcEndpointAssociationArn
FROM aws.network_firewall.vpc_endpoint_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc_endpoint_association"
    values={[
        { label: 'create_vpc_endpoint_association', value: 'create_vpc_endpoint_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc_endpoint_association">

Creates a firewall endpoint for an Network Firewall firewall. This type of firewall endpoint is independent of the firewall endpoints that you specify in the Firewall itself, and you define it in addition to those endpoints after the firewall has been created. You can define a VPC endpoint association using a different VPC than the one you used in the firewall specifications.

```sql
INSERT INTO aws.network_firewall.vpc_endpoint_associations (
FirewallArn,
VpcId,
SubnetMapping,
Description,
Tags,
region
)
SELECT 
'{{ FirewallArn }}' /* required */,
'{{ VpcId }}' /* required */,
'{{ SubnetMapping }}' /* required */,
'{{ Description }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
VpcEndpointAssociation,
VpcEndpointAssociationStatus
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_endpoint_associations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_endpoint_associations resource.
    - name: FirewallArn
      value: "{{ FirewallArn }}"
      description: |
        The Amazon Resource Name (ARN) of the firewall.
    - name: VpcId
      value: "{{ VpcId }}"
      description: |
        The unique identifier of the VPC where you want to create a firewall endpoint.
    - name: SubnetMapping
      description: |
        The ID for a subnet that's used in an association with a firewall. This is used in CreateFirewall, AssociateSubnets, and CreateVpcEndpointAssociation. Network Firewall creates an instance of the associated firewall in each subnet that you specify, to filter traffic in the subnet's Availability Zone.
      value:
        SubnetId: "{{ SubnetId }}"
        IPAddressType: "{{ IPAddressType }}"
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the VPC endpoint association.
    - name: Tags
      description: |
        The key:value pairs to associate with the resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpc_endpoint_association"
    values={[
        { label: 'delete_vpc_endpoint_association', value: 'delete_vpc_endpoint_association' }
    ]}
>
<TabItem value="delete_vpc_endpoint_association">

Deletes the specified VpcEndpointAssociation. You can check whether an endpoint association is in use by reviewing the route tables for the Availability Zones where you have the endpoint subnet mapping. You can retrieve the subnet mapping by calling DescribeVpcEndpointAssociation. You define and update the route tables through Amazon VPC. As needed, update the route tables for the Availability Zone to remove the firewall endpoint for the association. When the route tables no longer use the firewall endpoint, you can remove the endpoint association safely.

```sql
DELETE FROM aws.network_firewall.vpc_endpoint_associations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
