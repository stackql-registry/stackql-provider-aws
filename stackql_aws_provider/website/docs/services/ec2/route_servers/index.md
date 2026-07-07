--- 
title: route_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - route_servers
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

Creates, updates, deletes, gets or lists a <code>route_servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="route_servers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.route_servers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_route_servers"
    values={[
        { label: 'describe_route_servers', value: 'describe_route_servers' }
    ]}
>
<TabItem value="describe_route_servers">

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
    <td><CopyableCode code="AmazonSideAsn" /></td>
    <td><code>integer</code></td>
    <td>The Border Gateway Protocol (BGP) Autonomous System Number (ASN) for the appliance. Valid values are from 1 to 4294967295. We recommend using a private ASN in the 64512–65534 (16-bit ASN) or 4200000000–4294967294 (32-bit ASN) range.</td>
</tr>
<tr>
    <td><CopyableCode code="PersistRoutesDuration" /></td>
    <td><code>integer</code></td>
    <td>The number of minutes a route server will wait after BGP is re-established to unpersist the routes in the FIB and RIB. Value must be in the range of 1-5. The default value is 1. Only valid if persistRoutesState is 'enabled'. If you set the duration to 1 minute, then when your network appliance re-establishes BGP with route server, it has 1 minute to relearn it's adjacent network and advertise those routes to route server before route server resumes normal functionality. In most cases, 1 minute is probably sufficient. If, however, you have concerns that your BGP network may not be capable of fully re-establishing and re-learning everything in 1 minute, you can increase the duration up to 5 minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="PersistRoutesState" /></td>
    <td><code>string</code></td>
    <td>The current state of route persistence for the route server.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteServerId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the route server.</td>
</tr>
<tr>
    <td><CopyableCode code="SnsNotificationsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether SNS notifications are enabled for the route server. Enabling SNS notifications persists BGP status changes to an SNS topic provisioned by Amazon Web Services.</td>
</tr>
<tr>
    <td><CopyableCode code="SnsTopicArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the SNS topic where notifications are published.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the route server.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the route server.</td>
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
    <td><a href="#describe_route_servers"><CopyableCode code="describe_route_servers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RouteServerId"><code>RouteServerId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more route servers. Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature, VPC Route Server dynamically updates VPC and internet gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads. Route server supports the follow route table types: VPC route tables not associated with subnets Subnet route tables Internet gateway route tables Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use Transit Gateway Connect. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#create_route_server"><CopyableCode code="create_route_server" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-AmazonSideAsn"><code>AmazonSideAsn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-PersistRoutes"><code>PersistRoutes</code></a>, <a href="#parameter-PersistRoutesDuration"><code>PersistRoutesDuration</code></a>, <a href="#parameter-SnsNotificationsEnabled"><code>SnsNotificationsEnabled</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Creates a new route server to manage dynamic routing in a VPC. Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature, VPC Route Server dynamically updates VPC and internet gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads. Route server supports the follow route table types: VPC route tables not associated with subnets Subnet route tables Internet gateway route tables Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use Transit Gateway Connect. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#associate_route_server"><CopyableCode code="associate_route_server" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-RouteServerId"><code>RouteServerId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Associates a route server with a VPC to enable dynamic route updates. A route server association is the connection established between a route server and a VPC. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_route_server"><CopyableCode code="modify_route_server" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-RouteServerId"><code>RouteServerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PersistRoutes"><code>PersistRoutes</code></a>, <a href="#parameter-PersistRoutesDuration"><code>PersistRoutesDuration</code></a>, <a href="#parameter-SnsNotificationsEnabled"><code>SnsNotificationsEnabled</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the configuration of an existing route server. Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature, VPC Route Server dynamically updates VPC and internet gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads. Route server supports the follow route table types: VPC route tables not associated with subnets Subnet route tables Internet gateway route tables Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use Transit Gateway Connect. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_route_server"><CopyableCode code="delete_route_server" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-RouteServerId"><code>RouteServerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified route server. Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature, VPC Route Server dynamically updates VPC and internet gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads. Route server supports the follow route table types: VPC route tables not associated with subnets Subnet route tables Internet gateway route tables Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use Transit Gateway Connect. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#disable_route_server_propagation"><CopyableCode code="disable_route_server_propagation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-RouteServerId"><code>RouteServerId</code></a>, <a href="#parameter-RouteTableId"><code>RouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disables route propagation from a route server to a specified route table. When enabled, route server propagation installs the routes in the FIB on the route table you've specified. Route server supports IPv4 and IPv6 route propagation. Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature, VPC Route Server dynamically updates VPC and internet gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads. Route server supports the follow route table types: VPC route tables not associated with subnets Subnet route tables Internet gateway route tables Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use Transit Gateway Connect. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#disassociate_route_server"><CopyableCode code="disassociate_route_server" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-RouteServerId"><code>RouteServerId</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disassociates a route server from a VPC. A route server association is the connection established between a route server and a VPC. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#enable_route_server_propagation"><CopyableCode code="enable_route_server_propagation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-RouteServerId"><code>RouteServerId</code></a>, <a href="#parameter-RouteTableId"><code>RouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Defines which route tables the route server can update with routes. When enabled, route server propagation installs the routes in the FIB on the route table you've specified. Route server supports IPv4 and IPv6 route propagation. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.</td>
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
<tr id="parameter-AmazonSideAsn">
    <td><CopyableCode code="AmazonSideAsn" /></td>
    <td><code>integer (int64)</code></td>
    <td>The private Autonomous System Number (ASN) for the Amazon side of the BGP session. Valid values are from 1 to 4294967295. We recommend using a private ASN in the 64512–65534 (16-bit ASN) or 4200000000–4294967294 (32-bit ASN) range.</td>
</tr>
<tr id="parameter-RouteServerId">
    <td><CopyableCode code="RouteServerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the route server for which to enable propagation.</td>
</tr>
<tr id="parameter-RouteTableId">
    <td><CopyableCode code="RouteTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the route table to which route server will propagate routes.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC to disassociate from the route server.</td>
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
<tr id="parameter-PersistRoutes">
    <td><CopyableCode code="PersistRoutes" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to persist routes after all BGP sessions are terminated. enable: Routes will be persisted in FIB and RIB after all BGP sessions are terminated. disable: Routes will not be persisted in FIB and RIB after all BGP sessions are terminated. reset: If a route server has persisted routes due to all BGP sessions having ended, reset will withdraw all routes and reset route server to an empty FIB and RIB.</td>
</tr>
<tr id="parameter-PersistRoutesDuration">
    <td><CopyableCode code="PersistRoutesDuration" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of minutes a route server will wait after BGP is re-established to unpersist the routes in the FIB and RIB. Value must be in the range of 1-5. Required if PersistRoutes is enabled. If you set the duration to 1 minute, then when your network appliance re-establishes BGP with route server, it has 1 minute to relearn it's adjacent network and advertise those routes to route server before route server resumes normal functionality. In most cases, 1 minute is probably sufficient. If, however, you have concerns that your BGP network may not be capable of fully re-establishing and re-learning everything in 1 minute, you can increase the duration up to 5 minutes.</td>
</tr>
<tr id="parameter-RouteServerId">
    <td><CopyableCode code="RouteServerId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the route servers to describe.</td>
</tr>
<tr id="parameter-SnsNotificationsEnabled">
    <td><CopyableCode code="SnsNotificationsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to enable SNS notifications for route server events. Enabling SNS notifications persists BGP status changes to an SNS topic provisioned by Amazon Web Services.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the route server during creation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_route_servers"
    values={[
        { label: 'describe_route_servers', value: 'describe_route_servers' }
    ]}
>
<TabItem value="describe_route_servers">

Describes one or more route servers. Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature, VPC Route Server dynamically updates VPC and internet gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads. Route server supports the follow route table types: VPC route tables not associated with subnets Subnet route tables Internet gateway route tables Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use Transit Gateway Connect. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.

```sql
SELECT
AmazonSideAsn,
PersistRoutesDuration,
PersistRoutesState,
RouteServerId,
SnsNotificationsEnabled,
SnsTopicArn,
State,
Tags
FROM aws.ec2.route_servers
WHERE region = '{{ region }}' -- required
AND RouteServerId = '{{ RouteServerId }}'
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
    defaultValue="create_route_server"
    values={[
        { label: 'create_route_server', value: 'create_route_server' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_route_server">

Creates a new route server to manage dynamic routing in a VPC. Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature, VPC Route Server dynamically updates VPC and internet gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads. Route server supports the follow route table types: VPC route tables not associated with subnets Subnet route tables Internet gateway route tables Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use Transit Gateway Connect. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.

```sql
INSERT INTO aws.ec2.route_servers (
AmazonSideAsn,
region,
ClientToken,
DryRun,
PersistRoutes,
PersistRoutesDuration,
SnsNotificationsEnabled,
TagSpecification
)
SELECT 
'{{ AmazonSideAsn }}',
'{{ region }}',
'{{ ClientToken }}',
'{{ DryRun }}',
'{{ PersistRoutes }}',
'{{ PersistRoutesDuration }}',
'{{ SnsNotificationsEnabled }}',
'{{ TagSpecification }}'
RETURNING
AmazonSideAsn,
PersistRoutesDuration,
PersistRoutesState,
RouteServerId,
SnsNotificationsEnabled,
SnsTopicArn,
State,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: route_servers
  props:
    - name: AmazonSideAsn
      value: "{{ AmazonSideAsn }}"
      description: Required parameter for the route_servers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the route_servers resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier to ensure idempotency of the request.
      description: Unique, case-sensitive identifier to ensure idempotency of the request.
    - name: DryRun
      value: {{ DryRun }}
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: A check for whether you have the required permissions for the action without actually making the request and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: PersistRoutes
      value: "{{ PersistRoutes }}"
      description: Indicates whether routes should be persisted after all BGP sessions are terminated.
      description: Indicates whether routes should be persisted after all BGP sessions are terminated.
    - name: PersistRoutesDuration
      value: "{{ PersistRoutesDuration }}"
      description: The number of minutes a route server will wait after BGP is re-established to unpersist the routes in the FIB and RIB. Value must be in the range of 1-5. Required if PersistRoutes is enabled. If you set the duration to 1 minute, then when your network appliance re-establishes BGP with route server, it has 1 minute to relearn it's adjacent network and advertise those routes to route server before route server resumes normal functionality. In most cases, 1 minute is probably sufficient. If, however, you have concerns that your BGP network may not be capable of fully re-establishing and re-learning everything in 1 minute, you can increase the duration up to 5 minutes.
      description: The number of minutes a route server will wait after BGP is re-established to unpersist the routes in the FIB and RIB. Value must be in the range of 1-5. Required if PersistRoutes is enabled. If you set the duration to 1 minute, then when your network appliance re-establishes BGP with route server, it has 1 minute to relearn it's adjacent network and advertise those routes to route server before route server resumes normal functionality. In most cases, 1 minute is probably sufficient. If, however, you have concerns that your BGP network may not be capable of fully re-establishing and re-learning everything in 1 minute, you can increase the duration up to 5 minutes.
    - name: SnsNotificationsEnabled
      value: {{ SnsNotificationsEnabled }}
      description: Indicates whether SNS notifications should be enabled for route server events. Enabling SNS notifications persists BGP status changes to an SNS topic provisioned by Amazon Web Services.
      description: Indicates whether SNS notifications should be enabled for route server events. Enabling SNS notifications persists BGP status changes to an SNS topic provisioned by Amazon Web Services.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the route server during creation.
      description: The tags to apply to the route server during creation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_route_server"
    values={[
        { label: 'associate_route_server', value: 'associate_route_server' },
        { label: 'modify_route_server', value: 'modify_route_server' }
    ]}
>
<TabItem value="associate_route_server">

Associates a route server with a VPC to enable dynamic route updates. A route server association is the connection established between a route server and a VPC. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.

```sql
UPDATE aws.ec2.route_servers
SET 
-- No updatable properties
WHERE 
RouteServerId = '{{ RouteServerId }}' --required
AND VpcId = '{{ VpcId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
RouteServerId,
State,
VpcId;
```
</TabItem>
<TabItem value="modify_route_server">

Modifies the configuration of an existing route server. Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature, VPC Route Server dynamically updates VPC and internet gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads. Route server supports the follow route table types: VPC route tables not associated with subnets Subnet route tables Internet gateway route tables Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use Transit Gateway Connect. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.

```sql
UPDATE aws.ec2.route_servers
SET 
-- No updatable properties
WHERE 
RouteServerId = '{{ RouteServerId }}' --required
AND region = '{{ region }}' --required
AND PersistRoutes = '{{ PersistRoutes}}'
AND PersistRoutesDuration = '{{ PersistRoutesDuration}}'
AND SnsNotificationsEnabled = {{ SnsNotificationsEnabled}}
AND DryRun = {{ DryRun}}
RETURNING
AmazonSideAsn,
PersistRoutesDuration,
PersistRoutesState,
RouteServerId,
SnsNotificationsEnabled,
SnsTopicArn,
State,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_route_server"
    values={[
        { label: 'delete_route_server', value: 'delete_route_server' }
    ]}
>
<TabItem value="delete_route_server">

Deletes the specified route server. Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature, VPC Route Server dynamically updates VPC and internet gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads. Route server supports the follow route table types: VPC route tables not associated with subnets Subnet route tables Internet gateway route tables Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use Transit Gateway Connect. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.

```sql
DELETE FROM aws.ec2.route_servers
WHERE RouteServerId = '{{ RouteServerId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_route_server_propagation"
    values={[
        { label: 'disable_route_server_propagation', value: 'disable_route_server_propagation' },
        { label: 'disassociate_route_server', value: 'disassociate_route_server' },
        { label: 'enable_route_server_propagation', value: 'enable_route_server_propagation' }
    ]}
>
<TabItem value="disable_route_server_propagation">

Disables route propagation from a route server to a specified route table. When enabled, route server propagation installs the routes in the FIB on the route table you've specified. Route server supports IPv4 and IPv6 route propagation. Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature, VPC Route Server dynamically updates VPC and internet gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads. Route server supports the follow route table types: VPC route tables not associated with subnets Subnet route tables Internet gateway route tables Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use Transit Gateway Connect. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.

```sql
EXEC aws.ec2.route_servers.disable_route_server_propagation 
@RouteServerId='{{ RouteServerId }}' --required, 
@RouteTableId='{{ RouteTableId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="disassociate_route_server">

Disassociates a route server from a VPC. A route server association is the connection established between a route server and a VPC. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.

```sql
EXEC aws.ec2.route_servers.disassociate_route_server 
@RouteServerId='{{ RouteServerId }}' --required, 
@VpcId='{{ VpcId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="enable_route_server_propagation">

Defines which route tables the route server can update with routes. When enabled, route server propagation installs the routes in the FIB on the route table you've specified. Route server supports IPv4 and IPv6 route propagation. For more information see Dynamic routing in your VPC with VPC Route Server in the Amazon VPC User Guide.

```sql
EXEC aws.ec2.route_servers.enable_route_server_propagation 
@RouteServerId='{{ RouteServerId }}' --required, 
@RouteTableId='{{ RouteTableId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
