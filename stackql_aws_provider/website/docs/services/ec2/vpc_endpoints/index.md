--- 
title: vpc_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoints
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

Creates, updates, deletes, gets or lists a <code>vpc_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpc_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_endpoints"
    values={[
        { label: 'describe_vpc_endpoints', value: 'describe_vpc_endpoints' }
    ]}
>
<TabItem value="describe_vpc_endpoints">

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
    <td>The date and time that the endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_entries" /></td>
    <td><code>string</code></td>
    <td>(Interface endpoint) The DNS entries for the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_options" /></td>
    <td><code>string</code></td>
    <td>The DNS options for the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>Reason for the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="groups" /></td>
    <td><code>string</code></td>
    <td>(Interface endpoint) Information about the security groups that are associated with the network interface.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address_type" /></td>
    <td><code>string</code></td>
    <td>The IP address type for the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_4_prefixes" /></td>
    <td><code>string</code></td>
    <td>Array of IPv4 prefixes.</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6_prefixes" /></td>
    <td><code>string</code></td>
    <td>Array of IPv6 prefixes.</td>
</tr>
<tr>
    <td><CopyableCode code="last_error" /></td>
    <td><code>string</code></td>
    <td>The last error that occurred for endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface_ids" /></td>
    <td><code>string</code></td>
    <td>(Interface endpoint) The network interfaces for the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_document" /></td>
    <td><code>string</code></td>
    <td>The policy document associated with the endpoint, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="private_dns_enabled" /></td>
    <td><code>boolean</code></td>
    <td>(Interface endpoint) Indicates whether the VPC is associated with a private hosted zone.</td>
</tr>
<tr>
    <td><CopyableCode code="requester_managed" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the endpoint is being managed by its service.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="route_table_ids" /></td>
    <td><code>string</code></td>
    <td>(Gateway endpoint) The IDs of the route tables associated with the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service to which the endpoint is associated.</td>
</tr>
<tr>
    <td><CopyableCode code="service_network_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service network.</td>
</tr>
<tr>
    <td><CopyableCode code="service_region" /></td>
    <td><code>string</code></td>
    <td>The Region where the service is hosted.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_ids" /></td>
    <td><code>string</code></td>
    <td>(Interface endpoint) The subnets for the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_type" /></td>
    <td><code>string</code></td>
    <td>The type of endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC to which the endpoint is associated.</td>
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
    <td><a href="#describe_vpc_endpoints"><CopyableCode code="describe_vpc_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-VpcEndpointId"><code>VpcEndpointId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes your VPC endpoints. The default is to describe all your VPC endpoints. Alternatively, you can specify specific VPC endpoint IDs or filter the results to include only the VPC endpoints that match specific criteria.</td>
</tr>
<tr>
    <td><a href="#create_vpc_endpoint"><CopyableCode code="create_vpc_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-VpcEndpointType"><code>VpcEndpointType</code></a>, <a href="#parameter-ServiceName"><code>ServiceName</code></a>, <a href="#parameter-PolicyDocument"><code>PolicyDocument</code></a>, <a href="#parameter-RouteTableId"><code>RouteTableId</code></a>, <a href="#parameter-SubnetId"><code>SubnetId</code></a>, <a href="#parameter-SecurityGroupId"><code>SecurityGroupId</code></a>, <a href="#parameter-IpAddressType"><code>IpAddressType</code></a>, <a href="#parameter-DnsOptions"><code>DnsOptions</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-PrivateDnsEnabled"><code>PrivateDnsEnabled</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-SubnetConfiguration"><code>SubnetConfiguration</code></a>, <a href="#parameter-ServiceNetworkArn"><code>ServiceNetworkArn</code></a>, <a href="#parameter-ResourceConfigurationArn"><code>ResourceConfigurationArn</code></a>, <a href="#parameter-ServiceRegion"><code>ServiceRegion</code></a></td>
    <td>Creates a VPC endpoint. A VPC endpoint provides a private connection between the specified VPC and the specified endpoint service. You can use an endpoint service provided by Amazon Web Services, an Amazon Web Services Marketplace Partner, or another Amazon Web Services account. For more information, see the Amazon Web Services PrivateLink User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_vpc_endpoint"><CopyableCode code="modify_vpc_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VpcEndpointId"><code>VpcEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ResetPolicy"><code>ResetPolicy</code></a>, <a href="#parameter-PolicyDocument"><code>PolicyDocument</code></a>, <a href="#parameter-AddRouteTableId"><code>AddRouteTableId</code></a>, <a href="#parameter-RemoveRouteTableId"><code>RemoveRouteTableId</code></a>, <a href="#parameter-AddSubnetId"><code>AddSubnetId</code></a>, <a href="#parameter-RemoveSubnetId"><code>RemoveSubnetId</code></a>, <a href="#parameter-AddSecurityGroupId"><code>AddSecurityGroupId</code></a>, <a href="#parameter-RemoveSecurityGroupId"><code>RemoveSecurityGroupId</code></a>, <a href="#parameter-IpAddressType"><code>IpAddressType</code></a>, <a href="#parameter-DnsOptions"><code>DnsOptions</code></a>, <a href="#parameter-PrivateDnsEnabled"><code>PrivateDnsEnabled</code></a>, <a href="#parameter-SubnetConfiguration"><code>SubnetConfiguration</code></a></td>
    <td>Modifies attributes of a specified VPC endpoint. The attributes that you can modify depend on the type of VPC endpoint (interface, gateway, or Gateway Load Balancer). For more information, see the Amazon Web Services PrivateLink Guide.</td>
</tr>
<tr>
    <td><a href="#delete_vpc_endpoints"><CopyableCode code="delete_vpc_endpoints" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-VpcEndpointId"><code>VpcEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified VPC endpoints. When you delete a gateway endpoint, we delete the endpoint routes in the route tables for the endpoint. When you delete a Gateway Load Balancer endpoint, we delete its endpoint network interfaces. You can only delete Gateway Load Balancer endpoints when the routes that are associated with the endpoint are deleted. When you delete an interface endpoint, we delete its endpoint network interfaces.</td>
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
<tr id="parameter-VpcEndpointId">
    <td><CopyableCode code="VpcEndpointId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the VPC endpoints.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AddRouteTableId">
    <td><CopyableCode code="AddRouteTableId" /></td>
    <td><code>array</code></td>
    <td>(Gateway endpoint) The IDs of the route tables to associate with the endpoint.</td>
</tr>
<tr id="parameter-AddSecurityGroupId">
    <td><CopyableCode code="AddSecurityGroupId" /></td>
    <td><code>array</code></td>
    <td>(Interface endpoint) The IDs of the security groups to associate with the endpoint network interfaces.</td>
</tr>
<tr id="parameter-AddSubnetId">
    <td><CopyableCode code="AddSubnetId" /></td>
    <td><code>array</code></td>
    <td>(Interface and Gateway Load Balancer endpoints) The IDs of the subnets in which to serve the endpoint. For a Gateway Load Balancer endpoint, you can specify only one subnet.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.</td>
</tr>
<tr id="parameter-DnsOptions">
    <td><CopyableCode code="DnsOptions" /></td>
    <td><code>object</code></td>
    <td>The DNS options for the endpoint.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. ip-address-type - The IP address type (ipv4 | ipv6). service-name - The name of the service. service-region - The Region of the service. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. vpc-id - The ID of the VPC in which the endpoint resides. vpc-endpoint-id - The ID of the endpoint. vpc-endpoint-state - The state of the endpoint (pendingAcceptance | pending | available | deleting | deleted | rejected | failed). vpc-endpoint-type - The type of VPC endpoint (Interface | Gateway | GatewayLoadBalancer | Resource | ServiceNetwork).</td>
</tr>
<tr id="parameter-IpAddressType">
    <td><CopyableCode code="IpAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type for the endpoint.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. The request returns a token that you can specify in a subsequent call to get the next set of results. Constraint: If the value is greater than 1,000, we return only 1,000 items.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a prior call.)</td>
</tr>
<tr id="parameter-PolicyDocument">
    <td><CopyableCode code="PolicyDocument" /></td>
    <td><code>string</code></td>
    <td>(Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the service. The policy must be in valid JSON format.</td>
</tr>
<tr id="parameter-PrivateDnsEnabled">
    <td><CopyableCode code="PrivateDnsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>(Interface endpoint) Indicates whether a private hosted zone is associated with the VPC.</td>
</tr>
<tr id="parameter-RemoveRouteTableId">
    <td><CopyableCode code="RemoveRouteTableId" /></td>
    <td><code>array</code></td>
    <td>(Gateway endpoint) The IDs of the route tables to disassociate from the endpoint.</td>
</tr>
<tr id="parameter-RemoveSecurityGroupId">
    <td><CopyableCode code="RemoveSecurityGroupId" /></td>
    <td><code>array</code></td>
    <td>(Interface endpoint) The IDs of the security groups to disassociate from the endpoint network interfaces.</td>
</tr>
<tr id="parameter-RemoveSubnetId">
    <td><CopyableCode code="RemoveSubnetId" /></td>
    <td><code>array</code></td>
    <td>(Interface endpoint) The IDs of the subnets from which to remove the endpoint.</td>
</tr>
<tr id="parameter-ResetPolicy">
    <td><CopyableCode code="ResetPolicy" /></td>
    <td><code>boolean</code></td>
    <td>(Gateway endpoint) Specify true to reset the policy document to the default policy. The default policy allows full access to the service.</td>
</tr>
<tr id="parameter-ResourceConfigurationArn">
    <td><CopyableCode code="ResourceConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a resource configuration that will be associated with the VPC endpoint of type resource.</td>
</tr>
<tr id="parameter-RouteTableId">
    <td><CopyableCode code="RouteTableId" /></td>
    <td><code>array</code></td>
    <td>(Gateway endpoint) The route table IDs.</td>
</tr>
<tr id="parameter-SecurityGroupId">
    <td><CopyableCode code="SecurityGroupId" /></td>
    <td><code>array</code></td>
    <td>(Interface endpoint) The IDs of the security groups to associate with the endpoint network interfaces. If this parameter is not specified, we use the default security group for the VPC.</td>
</tr>
<tr id="parameter-ServiceName">
    <td><CopyableCode code="ServiceName" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint service.</td>
</tr>
<tr id="parameter-ServiceNetworkArn">
    <td><CopyableCode code="ServiceNetworkArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a service network that will be associated with the VPC endpoint of type service-network.</td>
</tr>
<tr id="parameter-ServiceRegion">
    <td><CopyableCode code="ServiceRegion" /></td>
    <td><code>string</code></td>
    <td>The Region where the service is hosted. The default is the current Region.</td>
</tr>
<tr id="parameter-SubnetConfiguration">
    <td><CopyableCode code="SubnetConfiguration" /></td>
    <td><code>array</code></td>
    <td>The subnet configurations for the endpoint.</td>
</tr>
<tr id="parameter-SubnetId">
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>array</code></td>
    <td>(Interface and Gateway Load Balancer endpoints) The IDs of the subnets in which to create endpoint network interfaces. For a Gateway Load Balancer endpoint, you can specify only one subnet.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to associate with the endpoint.</td>
</tr>
<tr id="parameter-VpcEndpointId">
    <td><CopyableCode code="VpcEndpointId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the VPC endpoints.</td>
</tr>
<tr id="parameter-VpcEndpointType">
    <td><CopyableCode code="VpcEndpointType" /></td>
    <td><code>string</code></td>
    <td>The type of endpoint. Default: Gateway</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpc_endpoints"
    values={[
        { label: 'describe_vpc_endpoints', value: 'describe_vpc_endpoints' }
    ]}
>
<TabItem value="describe_vpc_endpoints">

Describes your VPC endpoints. The default is to describe all your VPC endpoints. Alternatively, you can specify specific VPC endpoint IDs or filter the results to include only the VPC endpoints that match specific criteria.

```sql
SELECT
creation_timestamp,
dns_entries,
dns_options,
failure_reason,
groups,
ip_address_type,
ipv_4_prefixes,
ipv_6_prefixes,
last_error,
network_interface_ids,
owner_id,
policy_document,
private_dns_enabled,
requester_managed,
resource_configuration_arn,
route_table_ids,
service_name,
service_network_arn,
service_region,
state,
subnet_ids,
tags,
vpc_endpoint_id,
vpc_endpoint_type,
vpc_id
FROM aws.ec2.vpc_endpoints
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND VpcEndpointId = '{{ VpcEndpointId }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc_endpoint"
    values={[
        { label: 'create_vpc_endpoint', value: 'create_vpc_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc_endpoint">

Creates a VPC endpoint. A VPC endpoint provides a private connection between the specified VPC and the specified endpoint service. You can use an endpoint service provided by Amazon Web Services, an Amazon Web Services Marketplace Partner, or another Amazon Web Services account. For more information, see the Amazon Web Services PrivateLink User Guide.

```sql
INSERT INTO aws.ec2.vpc_endpoints (
VpcId,
region,
DryRun,
VpcEndpointType,
ServiceName,
PolicyDocument,
RouteTableId,
SubnetId,
SecurityGroupId,
IpAddressType,
DnsOptions,
ClientToken,
PrivateDnsEnabled,
TagSpecification,
SubnetConfiguration,
ServiceNetworkArn,
ResourceConfigurationArn,
ServiceRegion
)
SELECT 
'{{ VpcId }}',
'{{ region }}',
'{{ DryRun }}',
'{{ VpcEndpointType }}',
'{{ ServiceName }}',
'{{ PolicyDocument }}',
'{{ RouteTableId }}',
'{{ SubnetId }}',
'{{ SecurityGroupId }}',
'{{ IpAddressType }}',
'{{ DnsOptions }}',
'{{ ClientToken }}',
'{{ PrivateDnsEnabled }}',
'{{ TagSpecification }}',
'{{ SubnetConfiguration }}',
'{{ ServiceNetworkArn }}',
'{{ ResourceConfigurationArn }}',
'{{ ServiceRegion }}'
RETURNING
creation_timestamp,
dns_entries,
dns_options,
failure_reason,
groups,
ip_address_type,
ipv_4_prefixes,
ipv_6_prefixes,
last_error,
network_interface_ids,
owner_id,
policy_document,
private_dns_enabled,
requester_managed,
resource_configuration_arn,
route_table_ids,
service_name,
service_network_arn,
service_region,
state,
subnet_ids,
tags,
vpc_endpoint_id,
vpc_endpoint_type,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_endpoints
  props:
    - name: VpcId
      value: "{{ VpcId }}"
      description: Required parameter for the vpc_endpoints resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_endpoints resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: VpcEndpointType
      value: "{{ VpcEndpointType }}"
      description: The type of endpoint. Default: Gateway
      description: The type of endpoint. Default: Gateway
    - name: ServiceName
      value: "{{ ServiceName }}"
      description: The name of the endpoint service.
      description: The name of the endpoint service.
    - name: PolicyDocument
      value: "{{ PolicyDocument }}"
      description: (Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the service. The policy must be in valid JSON format. If this parameter is not specified, we attach a default policy that allows full access to the service.
      description: (Interface and gateway endpoints) A policy to attach to the endpoint that controls access to the service. The policy must be in valid JSON format. If this parameter is not specified, we attach a default policy that allows full access to the service.
    - name: RouteTableId
      value: "{{ RouteTableId }}"
      description: (Gateway endpoint) The route table IDs.
      description: (Gateway endpoint) The route table IDs.
    - name: SubnetId
      value: "{{ SubnetId }}"
      description: (Interface and Gateway Load Balancer endpoints) The IDs of the subnets in which to create endpoint network interfaces. For a Gateway Load Balancer endpoint, you can specify only one subnet.
      description: (Interface and Gateway Load Balancer endpoints) The IDs of the subnets in which to create endpoint network interfaces. For a Gateway Load Balancer endpoint, you can specify only one subnet.
    - name: SecurityGroupId
      value: "{{ SecurityGroupId }}"
      description: (Interface endpoint) The IDs of the security groups to associate with the endpoint network interfaces. If this parameter is not specified, we use the default security group for the VPC.
      description: (Interface endpoint) The IDs of the security groups to associate with the endpoint network interfaces. If this parameter is not specified, we use the default security group for the VPC.
    - name: IpAddressType
      value: "{{ IpAddressType }}"
      description: The IP address type for the endpoint.
      description: The IP address type for the endpoint.
    - name: DnsOptions
      value: "{{ DnsOptions }}"
      description: The DNS options for the endpoint.
      description: The DNS options for the endpoint.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
    - name: PrivateDnsEnabled
      value: {{ PrivateDnsEnabled }}
      description: (Interface endpoint) Indicates whether to associate a private hosted zone with the specified VPC. The private hosted zone contains a record set for the default public DNS name for the service for the Region (for example, kinesis.us-east-1.amazonaws.com), which resolves to the private IP addresses of the endpoint network interfaces in the VPC. This enables you to make requests to the default public DNS name for the service instead of the public DNS names that are automatically generated by the VPC endpoint service. To use a private hosted zone, you must set the following VPC attributes to true: enableDnsHostnames and enableDnsSupport. Use ModifyVpcAttribute to set the VPC attributes.
      description: (Interface endpoint) Indicates whether to associate a private hosted zone with the specified VPC. The private hosted zone contains a record set for the default public DNS name for the service for the Region (for example, kinesis.us-east-1.amazonaws.com), which resolves to the private IP addresses of the endpoint network interfaces in the VPC. This enables you to make requests to the default public DNS name for the service instead of the public DNS names that are automatically generated by the VPC endpoint service. To use a private hosted zone, you must set the following VPC attributes to true: enableDnsHostnames and enableDnsSupport. Use ModifyVpcAttribute to set the VPC attributes.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to associate with the endpoint.
      description: The tags to associate with the endpoint.
    - name: SubnetConfiguration
      value: "{{ SubnetConfiguration }}"
      description: The subnet configurations for the endpoint.
      description: The subnet configurations for the endpoint.
    - name: ServiceNetworkArn
      value: "{{ ServiceNetworkArn }}"
      description: The Amazon Resource Name (ARN) of a service network that will be associated with the VPC endpoint of type service-network.
      description: The Amazon Resource Name (ARN) of a service network that will be associated with the VPC endpoint of type service-network.
    - name: ResourceConfigurationArn
      value: "{{ ResourceConfigurationArn }}"
      description: The Amazon Resource Name (ARN) of a resource configuration that will be associated with the VPC endpoint of type resource.
      description: The Amazon Resource Name (ARN) of a resource configuration that will be associated with the VPC endpoint of type resource.
    - name: ServiceRegion
      value: "{{ ServiceRegion }}"
      description: The Region where the service is hosted. The default is the current Region.
      description: The Region where the service is hosted. The default is the current Region.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_vpc_endpoint"
    values={[
        { label: 'modify_vpc_endpoint', value: 'modify_vpc_endpoint' }
    ]}
>
<TabItem value="modify_vpc_endpoint">

Modifies attributes of a specified VPC endpoint. The attributes that you can modify depend on the type of VPC endpoint (interface, gateway, or Gateway Load Balancer). For more information, see the Amazon Web Services PrivateLink Guide.

```sql
UPDATE aws.ec2.vpc_endpoints
SET 
-- No updatable properties
WHERE 
VpcEndpointId = '{{ VpcEndpointId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND ResetPolicy = {{ ResetPolicy}}
AND PolicyDocument = '{{ PolicyDocument}}'
AND AddRouteTableId = '{{ AddRouteTableId}}'
AND RemoveRouteTableId = '{{ RemoveRouteTableId}}'
AND AddSubnetId = '{{ AddSubnetId}}'
AND RemoveSubnetId = '{{ RemoveSubnetId}}'
AND AddSecurityGroupId = '{{ AddSecurityGroupId}}'
AND RemoveSecurityGroupId = '{{ RemoveSecurityGroupId}}'
AND IpAddressType = '{{ IpAddressType}}'
AND DnsOptions = '{{ DnsOptions}}'
AND PrivateDnsEnabled = {{ PrivateDnsEnabled}}
AND SubnetConfiguration = '{{ SubnetConfiguration}}'
RETURNING
return;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpc_endpoints"
    values={[
        { label: 'delete_vpc_endpoints', value: 'delete_vpc_endpoints' }
    ]}
>
<TabItem value="delete_vpc_endpoints">

Deletes the specified VPC endpoints. When you delete a gateway endpoint, we delete the endpoint routes in the route tables for the endpoint. When you delete a Gateway Load Balancer endpoint, we delete its endpoint network interfaces. You can only delete Gateway Load Balancer endpoints when the routes that are associated with the endpoint are deleted. When you delete an interface endpoint, we delete its endpoint network interfaces.

```sql
DELETE FROM aws.ec2.vpc_endpoints
WHERE VpcEndpointId = '{{ VpcEndpointId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
