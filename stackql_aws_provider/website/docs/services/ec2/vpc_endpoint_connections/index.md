--- 
title: vpc_endpoint_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoint_connections
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

Creates, updates, deletes, gets or lists a <code>vpc_endpoint_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_endpoint_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpc_endpoint_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_endpoint_connections"
    values={[
        { label: 'describe_vpc_endpoint_connections', value: 'describe_vpc_endpoint_connections' }
    ]}
>
<TabItem value="describe_vpc_endpoint_connections">

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
    <td><CopyableCode code="creation_timestamp" /></td>
    <td><code>string</code></td>
    <td>The date and time that the VPC endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_entries" /></td>
    <td><code>string</code></td>
    <td>The DNS entries for the VPC endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_load_balancer_arns" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address_type" /></td>
    <td><code>string</code></td>
    <td>The IP address type for the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="network_load_balancer_arns" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Names (ARNs) of the network load balancers for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the service to which the endpoint is connected.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_connection_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC endpoint connection.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_owner" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the VPC endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_region" /></td>
    <td><code>string</code></td>
    <td>The Region of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_state" /></td>
    <td><code>string</code></td>
    <td>The state of the VPC endpoint.</td>
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
    <td><a href="#describe_vpc_endpoint_connections"><CopyableCode code="describe_vpc_endpoint_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes the VPC endpoint connections to your VPC endpoint services, including any endpoints that are pending your acceptance.</td>
</tr>
<tr>
    <td><a href="#accept_vpc_endpoint_connections"><CopyableCode code="accept_vpc_endpoint_connections" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ServiceId"><code>ServiceId</code></a>, <a href="#parameter-VpcEndpointId"><code>VpcEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Accepts connection requests to your VPC endpoint service.</td>
</tr>
<tr>
    <td><a href="#reject_vpc_endpoint_connections"><CopyableCode code="reject_vpc_endpoint_connections" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ServiceId"><code>ServiceId</code></a>, <a href="#parameter-VpcEndpointId"><code>VpcEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Rejects VPC endpoint connection requests to your VPC endpoint service.</td>
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
<tr id="parameter-ServiceId">
    <td><CopyableCode code="ServiceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the service.</td>
</tr>
<tr id="parameter-VpcEndpointId">
    <td><CopyableCode code="VpcEndpointId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the VPC endpoints.</td>
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
    <td>The filters. ip-address-type - The IP address type (ipv4 | ipv6). service-id - The ID of the service. vpc-endpoint-owner - The ID of the Amazon Web Services account ID that owns the endpoint. vpc-endpoint-region - The Region of the endpoint or cross-region to find endpoints for other Regions. vpc-endpoint-state - The state of the endpoint (pendingAcceptance | pending | available | deleting | deleted | rejected | failed). vpc-endpoint-id - The ID of the endpoint.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for the request in a single page. The remaining results of the initial request can be seen by sending another request with the returned NextToken value. This value can be between 5 and 1,000; if MaxResults is given a value larger than 1,000, only 1,000 results are returned.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpc_endpoint_connections"
    values={[
        { label: 'describe_vpc_endpoint_connections', value: 'describe_vpc_endpoint_connections' }
    ]}
>
<TabItem value="describe_vpc_endpoint_connections">

Describes the VPC endpoint connections to your VPC endpoint services, including any endpoints that are pending your acceptance.

```sql
SELECT
creation_timestamp,
dns_entries,
gateway_load_balancer_arns,
ip_address_type,
network_load_balancer_arns,
service_id,
tags,
vpc_endpoint_connection_id,
vpc_endpoint_id,
vpc_endpoint_owner,
vpc_endpoint_region,
vpc_endpoint_state
FROM aws.ec2.vpc_endpoint_connections
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_vpc_endpoint_connections"
    values={[
        { label: 'accept_vpc_endpoint_connections', value: 'accept_vpc_endpoint_connections' },
        { label: 'reject_vpc_endpoint_connections', value: 'reject_vpc_endpoint_connections' }
    ]}
>
<TabItem value="accept_vpc_endpoint_connections">

Accepts connection requests to your VPC endpoint service.

```sql
EXEC aws.ec2.vpc_endpoint_connections.accept_vpc_endpoint_connections 
@ServiceId='{{ ServiceId }}' --required, 
@VpcEndpointId='{{ VpcEndpointId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="reject_vpc_endpoint_connections">

Rejects VPC endpoint connection requests to your VPC endpoint service.

```sql
EXEC aws.ec2.vpc_endpoint_connections.reject_vpc_endpoint_connections 
@ServiceId='{{ ServiceId }}' --required, 
@VpcEndpointId='{{ VpcEndpointId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
