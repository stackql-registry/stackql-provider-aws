--- 
title: instance_connect_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_connect_endpoints
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

Creates, updates, deletes, gets or lists an <code>instance_connect_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_connect_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.instance_connect_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_connect_endpoints"
    values={[
        { label: 'describe_instance_connect_endpoints', value: 'describe_instance_connect_endpoints' }
    ]}
>
<TabItem value="describe_instance_connect_endpoints">

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
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone of the EC2 Instance Connect Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone of the EC2 Instance Connect Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string</code></td>
    <td>The date and time that the EC2 Instance Connect Endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DnsName" /></td>
    <td><code>string</code></td>
    <td>The DNS name of the EC2 Instance Connect Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="FipsDnsName" /></td>
    <td><code>string</code></td>
    <td>The Federal Information Processing Standards (FIPS) compliant DNS name of the EC2 Instance Connect Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceConnectEndpointArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the EC2 Instance Connect Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceConnectEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the EC2 Instance Connect Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="IpAddressType" /></td>
    <td><code>string</code></td>
    <td>The IP address type of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkInterfaceIds" /></td>
    <td><code>string</code></td>
    <td>The ID of the elastic network interface that Amazon EC2 automatically created when creating the EC2 Instance Connect Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that created the EC2 Instance Connect Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="PreserveClientIp" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether your client's IP address is preserved as the source when you connect to a resource. The following are the possible values. true - Use the IP address of the client. Your instance must have an IPv4 address. false - Use the IP address of the network interface. Default: false</td>
</tr>
<tr>
    <td><CopyableCode code="PublicDnsNames" /></td>
    <td><code>string</code></td>
    <td>The public DNS names of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="SecurityGroupIds" /></td>
    <td><code>string</code></td>
    <td>The security groups associated with the endpoint. If you didn't specify a security group, the default security group for your VPC is associated with the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the EC2 Instance Connect Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="StateMessage" /></td>
    <td><code>string</code></td>
    <td>The message for the current state of the EC2 Instance Connect Endpoint. Can include a failure message.</td>
</tr>
<tr>
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet in which the EC2 Instance Connect Endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the EC2 Instance Connect Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC in which the EC2 Instance Connect Endpoint was created.</td>
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
    <td><a href="#describe_instance_connect_endpoints"><CopyableCode code="describe_instance_connect_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-InstanceConnectEndpointId"><code>InstanceConnectEndpointId</code></a></td>
    <td>Describes the specified EC2 Instance Connect Endpoints or all EC2 Instance Connect Endpoints.</td>
</tr>
<tr>
    <td><a href="#create_instance_connect_endpoint"><CopyableCode code="create_instance_connect_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-SubnetId"><code>SubnetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-SecurityGroupId"><code>SecurityGroupId</code></a>, <a href="#parameter-PreserveClientIp"><code>PreserveClientIp</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-IpAddressType"><code>IpAddressType</code></a></td>
    <td>Creates an EC2 Instance Connect Endpoint. An EC2 Instance Connect Endpoint allows you to connect to an instance, without requiring the instance to have a public IPv4 or public IPv6 address. For more information, see Connect to your instances using EC2 Instance Connect Endpoint in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_instance_connect_endpoint"><CopyableCode code="modify_instance_connect_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InstanceConnectEndpointId"><code>InstanceConnectEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-IpAddressType"><code>IpAddressType</code></a>, <a href="#parameter-SecurityGroupId"><code>SecurityGroupId</code></a>, <a href="#parameter-PreserveClientIp"><code>PreserveClientIp</code></a></td>
    <td>Modifies the specified EC2 Instance Connect Endpoint. For more information, see Modify an EC2 Instance Connect Endpoint in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_instance_connect_endpoint"><CopyableCode code="delete_instance_connect_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-InstanceConnectEndpointId"><code>InstanceConnectEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified EC2 Instance Connect Endpoint.</td>
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
<tr id="parameter-InstanceConnectEndpointId">
    <td><CopyableCode code="InstanceConnectEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the EC2 Instance Connect Endpoint to delete.</td>
</tr>
<tr id="parameter-SubnetId">
    <td><CopyableCode code="SubnetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the subnet in which to create the EC2 Instance Connect Endpoint.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. instance-connect-endpoint-id - The ID of the EC2 Instance Connect Endpoint. state - The state of the EC2 Instance Connect Endpoint (create-in-progress | create-complete | create-failed | delete-in-progress | delete-complete | delete-failed). subnet-id - The ID of the subnet in which the EC2 Instance Connect Endpoint was created. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. tag-value - The value of a tag assigned to the resource. Use this filter to find all resources that have a tag with a specific value, regardless of tag key. vpc-id - The ID of the VPC in which the EC2 Instance Connect Endpoint was created.</td>
</tr>
<tr id="parameter-InstanceConnectEndpointId">
    <td><CopyableCode code="InstanceConnectEndpointId" /></td>
    <td><code>array</code></td>
    <td>One or more EC2 Instance Connect Endpoint IDs.</td>
</tr>
<tr id="parameter-IpAddressType">
    <td><CopyableCode code="IpAddressType" /></td>
    <td><code>string</code></td>
    <td>The new IP address type for the EC2 Instance Connect Endpoint. PreserveClientIp is only supported on IPv4 EC2 Instance Connect Endpoints. To use PreserveClientIp, the value for IpAddressType must be ipv4.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-PreserveClientIp">
    <td><CopyableCode code="PreserveClientIp" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the client IP address is preserved as the source when you connect to a resource. The following are the possible values. true - Use the IP address of the client. Your instance must have an IPv4 address. false - Use the IP address of the network interface.</td>
</tr>
<tr id="parameter-SecurityGroupId">
    <td><CopyableCode code="SecurityGroupId" /></td>
    <td><code>array</code></td>
    <td>Changes the security groups for the EC2 Instance Connect Endpoint. The new set of groups you specify replaces the current set. You must specify at least one group, even if it's just the default security group in the VPC. You must specify the ID of the security group, not the name.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the EC2 Instance Connect Endpoint during creation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_instance_connect_endpoints"
    values={[
        { label: 'describe_instance_connect_endpoints', value: 'describe_instance_connect_endpoints' }
    ]}
>
<TabItem value="describe_instance_connect_endpoints">

Describes the specified EC2 Instance Connect Endpoints or all EC2 Instance Connect Endpoints.

```sql
SELECT
AvailabilityZone,
AvailabilityZoneId,
CreatedAt,
DnsName,
FipsDnsName,
InstanceConnectEndpointArn,
InstanceConnectEndpointId,
IpAddressType,
NetworkInterfaceIds,
OwnerId,
PreserveClientIp,
PublicDnsNames,
SecurityGroupIds,
State,
StateMessage,
SubnetId,
Tags,
VpcId
FROM aws.ec2.instance_connect_endpoints
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND Filter = '{{ Filter }}'
AND InstanceConnectEndpointId = '{{ InstanceConnectEndpointId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_instance_connect_endpoint"
    values={[
        { label: 'create_instance_connect_endpoint', value: 'create_instance_connect_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_instance_connect_endpoint">

Creates an EC2 Instance Connect Endpoint. An EC2 Instance Connect Endpoint allows you to connect to an instance, without requiring the instance to have a public IPv4 or public IPv6 address. For more information, see Connect to your instances using EC2 Instance Connect Endpoint in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.instance_connect_endpoints (
SubnetId,
region,
DryRun,
SecurityGroupId,
PreserveClientIp,
ClientToken,
TagSpecification,
IpAddressType
)
SELECT 
'{{ SubnetId }}',
'{{ region }}',
'{{ DryRun }}',
'{{ SecurityGroupId }}',
'{{ PreserveClientIp }}',
'{{ ClientToken }}',
'{{ TagSpecification }}',
'{{ IpAddressType }}'
RETURNING
AvailabilityZone,
AvailabilityZoneId,
CreatedAt,
DnsName,
FipsDnsName,
InstanceConnectEndpointArn,
InstanceConnectEndpointId,
IpAddressType,
NetworkInterfaceIds,
OwnerId,
PreserveClientIp,
PublicDnsNames,
SecurityGroupIds,
State,
StateMessage,
SubnetId,
Tags,
VpcId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instance_connect_endpoints
  props:
    - name: SubnetId
      value: "{{ SubnetId }}"
      description: Required parameter for the instance_connect_endpoints resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instance_connect_endpoints resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: SecurityGroupId
      value: "{{ SecurityGroupId }}"
      description: One or more security groups to associate with the endpoint. If you don't specify a security group, the default security group for your VPC will be associated with the endpoint.
      description: One or more security groups to associate with the endpoint. If you don't specify a security group, the default security group for your VPC will be associated with the endpoint.
    - name: PreserveClientIp
      value: {{ PreserveClientIp }}
      description: Indicates whether the client IP address is preserved as the source. The following are the possible values. true - Use the client IP address as the source. false - Use the network interface IP address as the source. PreserveClientIp is only supported on IPv4 EC2 Instance Connect Endpoints. To use PreserveClientIp, the value for IpAddressType must be ipv4. Default: false
      description: Indicates whether the client IP address is preserved as the source. The following are the possible values. true - Use the client IP address as the source. false - Use the network interface IP address as the source. PreserveClientIp is only supported on IPv4 EC2 Instance Connect Endpoints. To use PreserveClientIp, the value for IpAddressType must be ipv4. Default: false
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the EC2 Instance Connect Endpoint during creation.
      description: The tags to apply to the EC2 Instance Connect Endpoint during creation.
    - name: IpAddressType
      value: "{{ IpAddressType }}"
      description: The IP address type of the endpoint. If no value is specified, the default value is determined by the IP address type of the subnet: dualstack - If the subnet has both IPv4 and IPv6 CIDRs ipv4 - If the subnet has only IPv4 CIDRs ipv6 - If the subnet has only IPv6 CIDRs PreserveClientIp is only supported on IPv4 EC2 Instance Connect Endpoints. To use PreserveClientIp, the value for IpAddressType must be ipv4.
      description: The IP address type of the endpoint. If no value is specified, the default value is determined by the IP address type of the subnet: dualstack - If the subnet has both IPv4 and IPv6 CIDRs ipv4 - If the subnet has only IPv4 CIDRs ipv6 - If the subnet has only IPv6 CIDRs PreserveClientIp is only supported on IPv4 EC2 Instance Connect Endpoints. To use PreserveClientIp, the value for IpAddressType must be ipv4.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_instance_connect_endpoint"
    values={[
        { label: 'modify_instance_connect_endpoint', value: 'modify_instance_connect_endpoint' }
    ]}
>
<TabItem value="modify_instance_connect_endpoint">

Modifies the specified EC2 Instance Connect Endpoint. For more information, see Modify an EC2 Instance Connect Endpoint in the Amazon EC2 User Guide.

```sql
UPDATE aws.ec2.instance_connect_endpoints
SET 
-- No updatable properties
WHERE 
InstanceConnectEndpointId = '{{ InstanceConnectEndpointId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND IpAddressType = '{{ IpAddressType}}'
AND SecurityGroupId = '{{ SecurityGroupId}}'
AND PreserveClientIp = {{ PreserveClientIp}}
RETURNING
Return;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_instance_connect_endpoint"
    values={[
        { label: 'delete_instance_connect_endpoint', value: 'delete_instance_connect_endpoint' }
    ]}
>
<TabItem value="delete_instance_connect_endpoint">

Deletes the specified EC2 Instance Connect Endpoint.

```sql
DELETE FROM aws.ec2.instance_connect_endpoints
WHERE InstanceConnectEndpointId = '{{ InstanceConnectEndpointId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
