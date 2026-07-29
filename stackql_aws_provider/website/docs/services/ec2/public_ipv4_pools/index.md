--- 
title: public_ipv4_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - public_ipv4_pools
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

Creates, updates, deletes, gets or lists a <code>public_ipv4_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="public_ipv4_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.public_ipv4_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_public_ipv4_pools"
    values={[
        { label: 'describe_public_ipv4_pools', value: 'describe_public_ipv4_pools' }
    ]}
>
<TabItem value="describe_public_ipv4_pools">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the address pool.</td>
</tr>
<tr>
    <td><CopyableCode code="network_border_group" /></td>
    <td><code>string</code></td>
    <td>The name of the location from which the address pool is advertised. A network border group is a unique set of Availability Zones or Local Zones from where Amazon Web Services advertises public IP addresses.</td>
</tr>
<tr>
    <td><CopyableCode code="pool_address_ranges" /></td>
    <td><code>string</code></td>
    <td>The address ranges.</td>
</tr>
<tr>
    <td><CopyableCode code="pool_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the address pool.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags for the address pool.</td>
</tr>
<tr>
    <td><CopyableCode code="total_address_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of addresses.</td>
</tr>
<tr>
    <td><CopyableCode code="total_available_address_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of available addresses.</td>
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
    <td><a href="#describe_public_ipv4_pools"><CopyableCode code="describe_public_ipv4_pools" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PoolId"><code>PoolId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes the specified IPv4 address pools.</td>
</tr>
<tr>
    <td><a href="#create_public_ipv4_pool"><CopyableCode code="create_public_ipv4_pool" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-NetworkBorderGroup"><code>NetworkBorderGroup</code></a></td>
    <td>Creates a public IPv4 address pool. A public IPv4 pool is an EC2 IP address pool required for the public IPv4 CIDRs that you own and bring to Amazon Web Services to manage with IPAM. IPv6 addresses you bring to Amazon Web Services, however, use IPAM pools only. To monitor the status of pool creation, use DescribePublicIpv4Pools.</td>
</tr>
<tr>
    <td><a href="#provision_public_ipv4_pool_cidr"><CopyableCode code="provision_public_ipv4_pool_cidr" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-IpamPoolId"><code>IpamPoolId</code></a>, <a href="#parameter-PoolId"><code>PoolId</code></a>, <a href="#parameter-NetmaskLength"><code>NetmaskLength</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NetworkBorderGroup"><code>NetworkBorderGroup</code></a></td>
    <td>Provision a CIDR to a public IPv4 pool. For more information about IPAM, see What is IPAM? in the Amazon VPC IPAM User Guide.</td>
</tr>
<tr>
    <td><a href="#deprovision_public_ipv4_pool_cidr"><CopyableCode code="deprovision_public_ipv4_pool_cidr" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-PoolId"><code>PoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Cidr"><code>Cidr</code></a></td>
    <td>Deprovision a CIDR from a public IPv4 pool.</td>
</tr>
<tr>
    <td><a href="#delete_public_ipv4_pool"><CopyableCode code="delete_public_ipv4_pool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-PoolId"><code>PoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NetworkBorderGroup"><code>NetworkBorderGroup</code></a></td>
    <td>Delete a public IPv4 pool. A public IPv4 pool is an EC2 IP address pool required for the public IPv4 CIDRs that you own and bring to Amazon Web Services to manage with IPAM. IPv6 addresses you bring to Amazon Web Services, however, use IPAM pools only.</td>
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
<tr id="parameter-IpamPoolId">
    <td><CopyableCode code="IpamPoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the IPAM pool you would like to use to allocate this CIDR.</td>
</tr>
<tr id="parameter-NetmaskLength">
    <td><CopyableCode code="NetmaskLength" /></td>
    <td><code>integer</code></td>
    <td>The netmask length of the CIDR you would like to allocate to the public IPv4 pool. The least specific netmask length you can define is 24.</td>
</tr>
<tr id="parameter-PoolId">
    <td><CopyableCode code="PoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the public IPv4 pool you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Cidr">
    <td><CopyableCode code="Cidr" /></td>
    <td><code>string</code></td>
    <td>The CIDR you want to deprovision from the pool.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NetworkBorderGroup">
    <td><CopyableCode code="NetworkBorderGroup" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone (AZ) or Local Zone (LZ) network border group that the resource that the IP address is assigned to is in. Defaults to an AZ network border group. For more information on available Local Zones, see Local Zone availability in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-PoolId">
    <td><CopyableCode code="PoolId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the address pools.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_public_ipv4_pools"
    values={[
        { label: 'describe_public_ipv4_pools', value: 'describe_public_ipv4_pools' }
    ]}
>
<TabItem value="describe_public_ipv4_pools">

Describes the specified IPv4 address pools.

```sql
SELECT
description,
network_border_group,
pool_address_ranges,
pool_id,
tags,
total_address_count,
total_available_address_count
FROM aws.ec2.public_ipv4_pools
WHERE region = '{{ region }}' -- required
AND PoolId = '{{ PoolId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_public_ipv4_pool"
    values={[
        { label: 'create_public_ipv4_pool', value: 'create_public_ipv4_pool' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_public_ipv4_pool">

Creates a public IPv4 address pool. A public IPv4 pool is an EC2 IP address pool required for the public IPv4 CIDRs that you own and bring to Amazon Web Services to manage with IPAM. IPv6 addresses you bring to Amazon Web Services, however, use IPAM pools only. To monitor the status of pool creation, use DescribePublicIpv4Pools.

```sql
INSERT INTO aws.ec2.public_ipv4_pools (
region,
DryRun,
TagSpecification,
NetworkBorderGroup
)
SELECT 
'{{ region }}',
'{{ DryRun }}',
'{{ TagSpecification }}',
'{{ NetworkBorderGroup }}'
RETURNING
pool_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: public_ipv4_pools
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the public_ipv4_pools resource.
    - name: DryRun
      value: {{ DryRun }}
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.
      description: The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value.
    - name: NetworkBorderGroup
      value: "{{ NetworkBorderGroup }}"
      description: The Availability Zone (AZ) or Local Zone (LZ) network border group that the resource that the IP address is assigned to is in. Defaults to an AZ network border group. For more information on available Local Zones, see Local Zone availability in the Amazon EC2 User Guide.
      description: The Availability Zone (AZ) or Local Zone (LZ) network border group that the resource that the IP address is assigned to is in. Defaults to an AZ network border group. For more information on available Local Zones, see Local Zone availability in the Amazon EC2 User Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="provision_public_ipv4_pool_cidr"
    values={[
        { label: 'provision_public_ipv4_pool_cidr', value: 'provision_public_ipv4_pool_cidr' },
        { label: 'deprovision_public_ipv4_pool_cidr', value: 'deprovision_public_ipv4_pool_cidr' }
    ]}
>
<TabItem value="provision_public_ipv4_pool_cidr">

Provision a CIDR to a public IPv4 pool. For more information about IPAM, see What is IPAM? in the Amazon VPC IPAM User Guide.

```sql
UPDATE aws.ec2.public_ipv4_pools
SET 
-- No updatable properties
WHERE 
IpamPoolId = '{{ IpamPoolId }}' --required
AND PoolId = '{{ PoolId }}' --required
AND NetmaskLength = '{{ NetmaskLength }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND NetworkBorderGroup = '{{ NetworkBorderGroup}}'
RETURNING
pool_address_range,
pool_id;
```
</TabItem>
<TabItem value="deprovision_public_ipv4_pool_cidr">

Deprovision a CIDR from a public IPv4 pool.

```sql
UPDATE aws.ec2.public_ipv4_pools
SET 
-- No updatable properties
WHERE 
PoolId = '{{ PoolId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Cidr = '{{ Cidr}}'
RETURNING
deprovisioned_addresses,
pool_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_public_ipv4_pool"
    values={[
        { label: 'delete_public_ipv4_pool', value: 'delete_public_ipv4_pool' }
    ]}
>
<TabItem value="delete_public_ipv4_pool">

Delete a public IPv4 pool. A public IPv4 pool is an EC2 IP address pool required for the public IPv4 CIDRs that you own and bring to Amazon Web Services to manage with IPAM. IPv6 addresses you bring to Amazon Web Services, however, use IPAM pools only.

```sql
DELETE FROM aws.ec2.public_ipv4_pools
WHERE PoolId = '{{ PoolId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
AND NetworkBorderGroup = '{{ NetworkBorderGroup }}'
;
```
</TabItem>
</Tabs>
