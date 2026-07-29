--- 
title: vpc_endpoint_service_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoint_service_configurations
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

Creates, updates, deletes, gets or lists a <code>vpc_endpoint_service_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_endpoint_service_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpc_endpoint_service_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_endpoint_service_configurations"
    values={[
        { label: 'describe_vpc_endpoint_service_configurations', value: 'describe_vpc_endpoint_service_configurations' }
    ]}
>
<TabItem value="describe_vpc_endpoint_service_configurations">

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
    <td><CopyableCode code="acceptance_required" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether requests from other Amazon Web Services accounts to create an endpoint to the service must first be accepted.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_ids" /></td>
    <td><code>string</code></td>
    <td>The IDs of the Availability Zones in which the service is available. Either AvailabilityZone or AvailabilityZoneId can be specified, but not both</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>string</code></td>
    <td>The Availability Zones in which the service is available. Either AvailabilityZone or AvailabilityZoneId can be specified, but not both</td>
</tr>
<tr>
    <td><CopyableCode code="base_endpoint_dns_names" /></td>
    <td><code>string</code></td>
    <td>The DNS names for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_load_balancer_arns" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Names (ARNs) of the Gateway Load Balancers for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="manages_vpc_endpoints" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the service manages its VPC endpoints. Management of the service VPC endpoints using the VPC endpoint API is restricted.</td>
</tr>
<tr>
    <td><CopyableCode code="network_load_balancer_arns" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Names (ARNs) of the Network Load Balancers for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="payer_responsibility" /></td>
    <td><code>string</code></td>
    <td>The payer responsibility.</td>
</tr>
<tr>
    <td><CopyableCode code="private_dns_name" /></td>
    <td><code>string</code></td>
    <td>The private DNS name for the service.</td>
</tr>
<tr>
    <td><CopyableCode code="private_dns_name_configuration" /></td>
    <td><code>string</code></td>
    <td>Information about the endpoint service private DNS name configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="remote_access_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether consumers can access the service from a Region other than the Region where the service is hosted.</td>
</tr>
<tr>
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="service_state" /></td>
    <td><code>string</code></td>
    <td>The service state.</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>The type of service.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_ip_address_types" /></td>
    <td><code>string</code></td>
    <td>The supported IP address types.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_regions" /></td>
    <td><code>string</code></td>
    <td>The supported Regions.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the service.</td>
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
    <td><a href="#describe_vpc_endpoint_service_configurations"><CopyableCode code="describe_vpc_endpoint_service_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ServiceId"><code>ServiceId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes the VPC endpoint service configurations in your account (your services).</td>
</tr>
<tr>
    <td><a href="#create_vpc_endpoint_service_configuration"><CopyableCode code="create_vpc_endpoint_service_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-AcceptanceRequired"><code>AcceptanceRequired</code></a>, <a href="#parameter-PrivateDnsName"><code>PrivateDnsName</code></a>, <a href="#parameter-NetworkLoadBalancerArn"><code>NetworkLoadBalancerArn</code></a>, <a href="#parameter-GatewayLoadBalancerArn"><code>GatewayLoadBalancerArn</code></a>, <a href="#parameter-SupportedIpAddressType"><code>SupportedIpAddressType</code></a>, <a href="#parameter-SupportedRegion"><code>SupportedRegion</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Creates a VPC endpoint service to which service consumers (Amazon Web Services accounts, users, and IAM roles) can connect. Before you create an endpoint service, you must create one of the following for your service: A Network Load Balancer. Service consumers connect to your service using an interface endpoint. A Gateway Load Balancer. Service consumers connect to your service using a Gateway Load Balancer endpoint. If you set the private DNS name, you must prove that you own the private DNS domain name. For more information, see the Amazon Web Services PrivateLink Guide.</td>
</tr>
<tr>
    <td><a href="#modify_vpc_endpoint_service_configuration"><CopyableCode code="modify_vpc_endpoint_service_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ServiceId"><code>ServiceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-PrivateDnsName"><code>PrivateDnsName</code></a>, <a href="#parameter-RemovePrivateDnsName"><code>RemovePrivateDnsName</code></a>, <a href="#parameter-AcceptanceRequired"><code>AcceptanceRequired</code></a>, <a href="#parameter-AddNetworkLoadBalancerArn"><code>AddNetworkLoadBalancerArn</code></a>, <a href="#parameter-RemoveNetworkLoadBalancerArn"><code>RemoveNetworkLoadBalancerArn</code></a>, <a href="#parameter-AddGatewayLoadBalancerArn"><code>AddGatewayLoadBalancerArn</code></a>, <a href="#parameter-RemoveGatewayLoadBalancerArn"><code>RemoveGatewayLoadBalancerArn</code></a>, <a href="#parameter-AddSupportedIpAddressType"><code>AddSupportedIpAddressType</code></a>, <a href="#parameter-RemoveSupportedIpAddressType"><code>RemoveSupportedIpAddressType</code></a>, <a href="#parameter-AddSupportedRegion"><code>AddSupportedRegion</code></a>, <a href="#parameter-RemoveSupportedRegion"><code>RemoveSupportedRegion</code></a></td>
    <td>Modifies the attributes of the specified VPC endpoint service configuration. If you set or modify the private DNS name, you must prove that you own the private DNS domain name.</td>
</tr>
<tr>
    <td><a href="#delete_vpc_endpoint_service_configurations"><CopyableCode code="delete_vpc_endpoint_service_configurations" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ServiceId"><code>ServiceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified VPC endpoint service configurations. Before you can delete an endpoint service configuration, you must reject any Available or PendingAcceptance interface endpoint connections that are attached to the service.</td>
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
    <td><code>array</code></td>
    <td>The IDs of the services.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AcceptanceRequired">
    <td><CopyableCode code="AcceptanceRequired" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether requests to create an endpoint to the service must be accepted.</td>
</tr>
<tr id="parameter-AddGatewayLoadBalancerArn">
    <td><CopyableCode code="AddGatewayLoadBalancerArn" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of Gateway Load Balancers to add to the service configuration.</td>
</tr>
<tr id="parameter-AddNetworkLoadBalancerArn">
    <td><CopyableCode code="AddNetworkLoadBalancerArn" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of Network Load Balancers to add to the service configuration.</td>
</tr>
<tr id="parameter-AddSupportedIpAddressType">
    <td><CopyableCode code="AddSupportedIpAddressType" /></td>
    <td><code>array</code></td>
    <td>The IP address types to add to the service configuration.</td>
</tr>
<tr id="parameter-AddSupportedRegion">
    <td><CopyableCode code="AddSupportedRegion" /></td>
    <td><code>array</code></td>
    <td>The supported Regions to add to the service configuration.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. service-name - The name of the service. service-id - The ID of the service. service-state - The state of the service (Pending | Available | Deleting | Deleted | Failed). supported-ip-address-types - The IP address type (ipv4 | ipv6). tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</td>
</tr>
<tr id="parameter-GatewayLoadBalancerArn">
    <td><CopyableCode code="GatewayLoadBalancerArn" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the Gateway Load Balancers.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for the request in a single page. The remaining results of the initial request can be seen by sending another request with the returned NextToken value. This value can be between 5 and 1,000; if MaxResults is given a value larger than 1,000, only 1,000 results are returned.</td>
</tr>
<tr id="parameter-NetworkLoadBalancerArn">
    <td><CopyableCode code="NetworkLoadBalancerArn" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the Network Load Balancers.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next page of results.</td>
</tr>
<tr id="parameter-PrivateDnsName">
    <td><CopyableCode code="PrivateDnsName" /></td>
    <td><code>string</code></td>
    <td>(Interface endpoint configuration) The private DNS name to assign to the endpoint service.</td>
</tr>
<tr id="parameter-RemoveGatewayLoadBalancerArn">
    <td><CopyableCode code="RemoveGatewayLoadBalancerArn" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of Gateway Load Balancers to remove from the service configuration.</td>
</tr>
<tr id="parameter-RemoveNetworkLoadBalancerArn">
    <td><CopyableCode code="RemoveNetworkLoadBalancerArn" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of Network Load Balancers to remove from the service configuration.</td>
</tr>
<tr id="parameter-RemovePrivateDnsName">
    <td><CopyableCode code="RemovePrivateDnsName" /></td>
    <td><code>boolean</code></td>
    <td>(Interface endpoint configuration) Removes the private DNS name of the endpoint service.</td>
</tr>
<tr id="parameter-RemoveSupportedIpAddressType">
    <td><CopyableCode code="RemoveSupportedIpAddressType" /></td>
    <td><code>array</code></td>
    <td>The IP address types to remove from the service configuration.</td>
</tr>
<tr id="parameter-RemoveSupportedRegion">
    <td><CopyableCode code="RemoveSupportedRegion" /></td>
    <td><code>array</code></td>
    <td>The supported Regions to remove from the service configuration.</td>
</tr>
<tr id="parameter-ServiceId">
    <td><CopyableCode code="ServiceId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the endpoint services.</td>
</tr>
<tr id="parameter-SupportedIpAddressType">
    <td><CopyableCode code="SupportedIpAddressType" /></td>
    <td><code>array</code></td>
    <td>The supported IP address types. The possible values are ipv4 and ipv6.</td>
</tr>
<tr id="parameter-SupportedRegion">
    <td><CopyableCode code="SupportedRegion" /></td>
    <td><code>array</code></td>
    <td>The Regions from which service consumers can access the service.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to associate with the service.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpc_endpoint_service_configurations"
    values={[
        { label: 'describe_vpc_endpoint_service_configurations', value: 'describe_vpc_endpoint_service_configurations' }
    ]}
>
<TabItem value="describe_vpc_endpoint_service_configurations">

Describes the VPC endpoint service configurations in your account (your services).

```sql
SELECT
acceptance_required,
availability_zone_ids,
availability_zones,
base_endpoint_dns_names,
gateway_load_balancer_arns,
manages_vpc_endpoints,
network_load_balancer_arns,
payer_responsibility,
private_dns_name,
private_dns_name_configuration,
remote_access_enabled,
service_id,
service_name,
service_state,
service_type,
supported_ip_address_types,
supported_regions,
tags
FROM aws.ec2.vpc_endpoint_service_configurations
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND ServiceId = '{{ ServiceId }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc_endpoint_service_configuration"
    values={[
        { label: 'create_vpc_endpoint_service_configuration', value: 'create_vpc_endpoint_service_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc_endpoint_service_configuration">

Creates a VPC endpoint service to which service consumers (Amazon Web Services accounts, users, and IAM roles) can connect. Before you create an endpoint service, you must create one of the following for your service: A Network Load Balancer. Service consumers connect to your service using an interface endpoint. A Gateway Load Balancer. Service consumers connect to your service using a Gateway Load Balancer endpoint. If you set the private DNS name, you must prove that you own the private DNS domain name. For more information, see the Amazon Web Services PrivateLink Guide.

```sql
INSERT INTO aws.ec2.vpc_endpoint_service_configurations (
region,
DryRun,
AcceptanceRequired,
PrivateDnsName,
NetworkLoadBalancerArn,
GatewayLoadBalancerArn,
SupportedIpAddressType,
SupportedRegion,
ClientToken,
TagSpecification
)
SELECT 
'{{ region }}',
'{{ DryRun }}',
'{{ AcceptanceRequired }}',
'{{ PrivateDnsName }}',
'{{ NetworkLoadBalancerArn }}',
'{{ GatewayLoadBalancerArn }}',
'{{ SupportedIpAddressType }}',
'{{ SupportedRegion }}',
'{{ ClientToken }}',
'{{ TagSpecification }}'
RETURNING
client_token,
service_configuration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_endpoint_service_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_endpoint_service_configurations resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: AcceptanceRequired
      value: {{ AcceptanceRequired }}
      description: Indicates whether requests from service consumers to create an endpoint to your service must be accepted manually.
      description: Indicates whether requests from service consumers to create an endpoint to your service must be accepted manually.
    - name: PrivateDnsName
      value: "{{ PrivateDnsName }}"
      description: (Interface endpoint configuration) The private DNS name to assign to the VPC endpoint service.
      description: (Interface endpoint configuration) The private DNS name to assign to the VPC endpoint service.
    - name: NetworkLoadBalancerArn
      value: "{{ NetworkLoadBalancerArn }}"
      description: The Amazon Resource Names (ARNs) of the Network Load Balancers.
      description: The Amazon Resource Names (ARNs) of the Network Load Balancers.
    - name: GatewayLoadBalancerArn
      value: "{{ GatewayLoadBalancerArn }}"
      description: The Amazon Resource Names (ARNs) of the Gateway Load Balancers.
      description: The Amazon Resource Names (ARNs) of the Gateway Load Balancers.
    - name: SupportedIpAddressType
      value: "{{ SupportedIpAddressType }}"
      description: The supported IP address types. The possible values are ipv4 and ipv6.
      description: The supported IP address types. The possible values are ipv4 and ipv6.
    - name: SupportedRegion
      value: "{{ SupportedRegion }}"
      description: The Regions from which service consumers can access the service.
      description: The Regions from which service consumers can access the service.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to associate with the service.
      description: The tags to associate with the service.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_vpc_endpoint_service_configuration"
    values={[
        { label: 'modify_vpc_endpoint_service_configuration', value: 'modify_vpc_endpoint_service_configuration' }
    ]}
>
<TabItem value="modify_vpc_endpoint_service_configuration">

Modifies the attributes of the specified VPC endpoint service configuration. If you set or modify the private DNS name, you must prove that you own the private DNS domain name.

```sql
UPDATE aws.ec2.vpc_endpoint_service_configurations
SET 
-- No updatable properties
WHERE 
ServiceId = '{{ ServiceId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND PrivateDnsName = '{{ PrivateDnsName}}'
AND RemovePrivateDnsName = {{ RemovePrivateDnsName}}
AND AcceptanceRequired = {{ AcceptanceRequired}}
AND AddNetworkLoadBalancerArn = '{{ AddNetworkLoadBalancerArn}}'
AND RemoveNetworkLoadBalancerArn = '{{ RemoveNetworkLoadBalancerArn}}'
AND AddGatewayLoadBalancerArn = '{{ AddGatewayLoadBalancerArn}}'
AND RemoveGatewayLoadBalancerArn = '{{ RemoveGatewayLoadBalancerArn}}'
AND AddSupportedIpAddressType = '{{ AddSupportedIpAddressType}}'
AND RemoveSupportedIpAddressType = '{{ RemoveSupportedIpAddressType}}'
AND AddSupportedRegion = '{{ AddSupportedRegion}}'
AND RemoveSupportedRegion = '{{ RemoveSupportedRegion}}'
RETURNING
return;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpc_endpoint_service_configurations"
    values={[
        { label: 'delete_vpc_endpoint_service_configurations', value: 'delete_vpc_endpoint_service_configurations' }
    ]}
>
<TabItem value="delete_vpc_endpoint_service_configurations">

Deletes the specified VPC endpoint service configurations. Before you can delete an endpoint service configuration, you must reject any Available or PendingAcceptance interface endpoint connections that are attached to the service.

```sql
DELETE FROM aws.ec2.vpc_endpoint_service_configurations
WHERE ServiceId = '{{ ServiceId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
