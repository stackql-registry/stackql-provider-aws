--- 
title: route_server_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - route_server_endpoints
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

Creates, updates, deletes, gets or lists a <code>route_server_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="route_server_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.route_server_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_route_server_endpoints"
    values={[
        { label: 'describe_route_server_endpoints', value: 'describe_route_server_endpoints' }
    ]}
>
<TabItem value="describe_route_server_endpoints">

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
    <td><CopyableCode code="EniAddress" /></td>
    <td><code>string</code></td>
    <td>The IP address of the Elastic network interface for the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="EniId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Elastic network interface for the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>The reason for any failure in endpoint creation or operation.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteServerEndpointId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the route server endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteServerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the route server associated with this endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the route server endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet to place the route server endpoint into.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the route server endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC containing the endpoint.</td>
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
    <td><a href="#describe_route_server_endpoints"><CopyableCode code="describe_route_server_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RouteServerEndpointId"><code>RouteServerEndpointId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more route server endpoints. A route server endpoint is an Amazon Web Services-managed component inside a subnet that facilitates BGP (Border Gateway Protocol) connections between your route server and your BGP peers. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#create_route_server_endpoint"><CopyableCode code="create_route_server_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-RouteServerId"><code>RouteServerId</code></a>, <a href="#parameter-SubnetId"><code>SubnetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Creates a new endpoint for a route server in a specified subnet. A route server endpoint is an Amazon Web Services-managed component inside a subnet that facilitates BGP (Border Gateway Protocol) connections between your route server and your BGP peers. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_route_server_endpoint"><CopyableCode code="delete_route_server_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-RouteServerEndpointId"><code>RouteServerEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified route server endpoint. A route server endpoint is an Amazon Web Services-managed component inside a subnet that facilitates BGP (Border Gateway Protocol) connections between your route server and your BGP peers.</td>
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
<tr id="parameter-RouteServerEndpointId">
    <td><CopyableCode code="RouteServerEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the route server endpoint to delete.</td>
</tr>
<tr id="parameter-RouteServerId">
    <td><CopyableCode code="RouteServerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the route server for which to create an endpoint.</td>
</tr>
<tr id="parameter-SubnetId">
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet in which to create the route server endpoint.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier to ensure idempotency of the request.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters to apply to the describe request.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-RouteServerEndpointId">
    <td><CopyableCode code="RouteServerEndpointId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the route server endpoints to describe.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the route server endpoint during creation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_route_server_endpoints"
    values={[
        { label: 'describe_route_server_endpoints', value: 'describe_route_server_endpoints' }
    ]}
>
<TabItem value="describe_route_server_endpoints">

Describes one or more route server endpoints. A route server endpoint is an Amazon Web Services-managed component inside a subnet that facilitates BGP (Border Gateway Protocol) connections between your route server and your BGP peers. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.

```sql
SELECT
EniAddress,
EniId,
FailureReason,
RouteServerEndpointId,
RouteServerId,
State,
SubnetId,
Tags,
VpcId
FROM aws.ec2.route_server_endpoints
WHERE region = '{{ region }}' -- required
AND RouteServerEndpointId = '{{ RouteServerEndpointId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_route_server_endpoint"
    values={[
        { label: 'create_route_server_endpoint', value: 'create_route_server_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_route_server_endpoint">

Creates a new endpoint for a route server in a specified subnet. A route server endpoint is an Amazon Web Services-managed component inside a subnet that facilitates BGP (Border Gateway Protocol) connections between your route server and your BGP peers. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.

```sql
INSERT INTO aws.ec2.route_server_endpoints (
RouteServerId,
SubnetId,
region,
ClientToken,
DryRun,
TagSpecification
)
SELECT 
'{{ RouteServerId }}',
'{{ SubnetId }}',
'{{ region }}',
'{{ ClientToken }}',
'{{ DryRun }}',
'{{ TagSpecification }}'
RETURNING
EniAddress,
EniId,
FailureReason,
RouteServerEndpointId,
RouteServerId,
State,
SubnetId,
Tags,
VpcId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: route_server_endpoints
  props:
    - name: RouteServerId
      value: "{{ RouteServerId }}"
      description: Required parameter for the route_server_endpoints resource.
    - name: SubnetId
      value: "{{ SubnetId }}"
      description: Required parameter for the route_server_endpoints resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the route_server_endpoints resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier to ensure idempotency of the request.
      description: Unique, case-sensitive identifier to ensure idempotency of the request.
    - name: DryRun
      value: {{ DryRun }}
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the route server endpoint during creation.
      description: The tags to apply to the route server endpoint during creation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_route_server_endpoint"
    values={[
        { label: 'delete_route_server_endpoint', value: 'delete_route_server_endpoint' }
    ]}
>
<TabItem value="delete_route_server_endpoint">

Deletes the specified route server endpoint. A route server endpoint is an Amazon Web Services-managed component inside a subnet that facilitates BGP (Border Gateway Protocol) connections between your route server and your BGP peers.

```sql
DELETE FROM aws.ec2.route_server_endpoints
WHERE RouteServerEndpointId = '{{ RouteServerEndpointId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
