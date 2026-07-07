--- 
title: resolver_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - resolver_endpoints
  - route53resolver
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

Creates, updates, deletes, gets or lists a <code>resolver_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resolver_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.resolver_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resolver_endpoint"
    values={[
        { label: 'get_resolver_endpoint', value: 'get_resolver_endpoint' },
        { label: 'list_resolver_endpoints', value: 'list_resolver_endpoints' }
    ]}
>
<TabItem value="get_resolver_endpoint">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) for the Resolver endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string</code></td>
    <td>The date and time that the endpoint was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="CreatorRequestId" /></td>
    <td><code>string</code></td>
    <td>A unique string that identifies the request that created the Resolver endpoint. The CreatorRequestId allows failed requests to be retried without the risk of running the operation twice.</td>
</tr>
<tr>
    <td><CopyableCode code="Direction" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the Resolver endpoint allows inbound or outbound DNS queries: INBOUND: allows DNS queries to your VPC from your network OUTBOUND: allows DNS queries from your VPC to your network INBOUND_DELEGATION: Resolver delegates queries to Route 53 private hosted zones from your network. (INBOUND, OUTBOUND, INBOUND_DELEGATION)</td>
</tr>
<tr>
    <td><CopyableCode code="Dns64Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether DNS64 is enabled for the inbound Resolver endpoint. When true, Route 53 Resolver synthesizes AAAA (IPv6) records for IPv4-only services by prepending the 64:ff9b::/96 prefix to the IPv4 address.</td>
</tr>
<tr>
    <td><CopyableCode code="HostVPCId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC that you want to create the Resolver endpoint in.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Resolver endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="IpAddressCount" /></td>
    <td><code>integer</code></td>
    <td>The number of IP addresses that the Resolver endpoint can use for DNS queries.</td>
</tr>
<tr>
    <td><CopyableCode code="Ipv6InternetAccessEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether IPv6 internet access is enabled for the outbound Resolver endpoint. When true, the endpoint elastic network interfaces (ENIs) can forward DNS queries to public IPv6 targets through an internet gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="ModificationTime" /></td>
    <td><code>string</code></td>
    <td>The date and time that the endpoint was last modified, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name that you assigned to the Resolver endpoint when you submitted a CreateResolverEndpoint request. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OutpostArn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) for the Outpost. (pattern: &lt;code&gt;^arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:outpost/op-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PreferredInstanceType" /></td>
    <td><code>string</code></td>
    <td>The Amazon EC2 instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="Protocols" /></td>
    <td><code>array</code></td>
    <td>Protocols used for the endpoint. DoH-FIPS is applicable for a default inbound endpoints only. For an inbound endpoint you can apply the protocols as follows: Do53 and DoH in combination. Do53 and DoH-FIPS in combination. Do53 alone. DoH alone. DoH-FIPS alone. None, which is treated as Do53. For a delegation inbound endpoint you can use Do53 only. For an outbound endpoint you can apply the protocols as follows: Do53 and DoH in combination. Do53 alone. DoH alone. None, which is treated as Do53.</td>
</tr>
<tr>
    <td><CopyableCode code="ResolverEndpointType" /></td>
    <td><code>string</code></td>
    <td>The Resolver endpoint IP address type. (IPV6, IPV4, DUALSTACK)</td>
</tr>
<tr>
    <td><CopyableCode code="RniEnhancedMetricsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether RNI enhanced metrics are enabled for the Resolver endpoint. When enabled, one-minute granular metrics are published in CloudWatch for each RNI associated with this endpoint. When disabled, these metrics are not published.</td>
</tr>
<tr>
    <td><CopyableCode code="SecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>A code that specifies the current status of the Resolver endpoint. Valid values include the following: CREATING: Resolver is creating and configuring one or more Amazon VPC network interfaces for this endpoint. OPERATIONAL: The Amazon VPC network interfaces for this endpoint are correctly configured and able to pass inbound or outbound DNS queries between your network and Resolver. UPDATING: Resolver is associating or disassociating one or more network interfaces with this endpoint. AUTO_RECOVERING: Resolver is trying to recover one or more of the network interfaces that are associated with this endpoint. During the recovery process, the endpoint functions with limited capacity because of the limit on the number of DNS queries per IP address (per network interface). For the current limit, see Limits on Route 53 Resolver. ACTION_NEEDED: This endpoint is unhealthy, and Resolver can't automatically recover it. To resolve the problem, we recommend that you check each IP address that you associated with the endpoint. For each IP address that isn't available, add another IP address and then delete the IP address that isn't available. (An endpoint must always include at least two IP addresses.) A status of ACTION_NEEDED can have a variety of causes. Here are two common causes: One or more of the network interfaces that are associated with the endpoint were deleted using Amazon VPC. The network interface couldn't be created for some reason that's outside the control of Resolver. DELETING: Resolver is deleting this endpoint and the associated network interfaces. (CREATING, OPERATIONAL, UPDATING, AUTO_RECOVERING, ACTION_NEEDED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the status of the Resolver endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetNameServerMetricsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether target name server metrics are enabled for the outbound Resolver endpoint. When enabled, one-minute granular metrics are published in CloudWatch for each target name server associated with this endpoint. When disabled, these metrics are not published. This feature is not supported for inbound Resolver endpoint.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resolver_endpoints">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) for the Resolver endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string</code></td>
    <td>The date and time that the endpoint was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="CreatorRequestId" /></td>
    <td><code>string</code></td>
    <td>A unique string that identifies the request that created the Resolver endpoint. The CreatorRequestId allows failed requests to be retried without the risk of running the operation twice.</td>
</tr>
<tr>
    <td><CopyableCode code="Direction" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the Resolver endpoint allows inbound or outbound DNS queries: INBOUND: allows DNS queries to your VPC from your network OUTBOUND: allows DNS queries from your VPC to your network INBOUND_DELEGATION: Resolver delegates queries to Route 53 private hosted zones from your network. (INBOUND, OUTBOUND, INBOUND_DELEGATION)</td>
</tr>
<tr>
    <td><CopyableCode code="Dns64Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether DNS64 is enabled for the inbound Resolver endpoint. When true, Route 53 Resolver synthesizes AAAA (IPv6) records for IPv4-only services by prepending the 64:ff9b::/96 prefix to the IPv4 address.</td>
</tr>
<tr>
    <td><CopyableCode code="HostVPCId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC that you want to create the Resolver endpoint in.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Resolver endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="IpAddressCount" /></td>
    <td><code>integer</code></td>
    <td>The number of IP addresses that the Resolver endpoint can use for DNS queries.</td>
</tr>
<tr>
    <td><CopyableCode code="Ipv6InternetAccessEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether IPv6 internet access is enabled for the outbound Resolver endpoint. When true, the endpoint elastic network interfaces (ENIs) can forward DNS queries to public IPv6 targets through an internet gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="ModificationTime" /></td>
    <td><code>string</code></td>
    <td>The date and time that the endpoint was last modified, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name that you assigned to the Resolver endpoint when you submitted a CreateResolverEndpoint request. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OutpostArn" /></td>
    <td><code>string</code></td>
    <td>The ARN (Amazon Resource Name) for the Outpost. (pattern: &lt;code&gt;^arn:aws(&#91;a-z-&#93;+)?:outposts:&#91;a-z\d-&#93;+:\d&#123;12&#125;:outpost/op-&#91;a-f0-9&#93;&#123;17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PreferredInstanceType" /></td>
    <td><code>string</code></td>
    <td>The Amazon EC2 instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="Protocols" /></td>
    <td><code>array</code></td>
    <td>Protocols used for the endpoint. DoH-FIPS is applicable for a default inbound endpoints only. For an inbound endpoint you can apply the protocols as follows: Do53 and DoH in combination. Do53 and DoH-FIPS in combination. Do53 alone. DoH alone. DoH-FIPS alone. None, which is treated as Do53. For a delegation inbound endpoint you can use Do53 only. For an outbound endpoint you can apply the protocols as follows: Do53 and DoH in combination. Do53 alone. DoH alone. None, which is treated as Do53.</td>
</tr>
<tr>
    <td><CopyableCode code="ResolverEndpointType" /></td>
    <td><code>string</code></td>
    <td>The Resolver endpoint IP address type. (IPV6, IPV4, DUALSTACK)</td>
</tr>
<tr>
    <td><CopyableCode code="RniEnhancedMetricsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether RNI enhanced metrics are enabled for the Resolver endpoint. When enabled, one-minute granular metrics are published in CloudWatch for each RNI associated with this endpoint. When disabled, these metrics are not published.</td>
</tr>
<tr>
    <td><CopyableCode code="SecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>A code that specifies the current status of the Resolver endpoint. Valid values include the following: CREATING: Resolver is creating and configuring one or more Amazon VPC network interfaces for this endpoint. OPERATIONAL: The Amazon VPC network interfaces for this endpoint are correctly configured and able to pass inbound or outbound DNS queries between your network and Resolver. UPDATING: Resolver is associating or disassociating one or more network interfaces with this endpoint. AUTO_RECOVERING: Resolver is trying to recover one or more of the network interfaces that are associated with this endpoint. During the recovery process, the endpoint functions with limited capacity because of the limit on the number of DNS queries per IP address (per network interface). For the current limit, see Limits on Route 53 Resolver. ACTION_NEEDED: This endpoint is unhealthy, and Resolver can't automatically recover it. To resolve the problem, we recommend that you check each IP address that you associated with the endpoint. For each IP address that isn't available, add another IP address and then delete the IP address that isn't available. (An endpoint must always include at least two IP addresses.) A status of ACTION_NEEDED can have a variety of causes. Here are two common causes: One or more of the network interfaces that are associated with the endpoint were deleted using Amazon VPC. The network interface couldn't be created for some reason that's outside the control of Resolver. DELETING: Resolver is deleting this endpoint and the associated network interfaces. (CREATING, OPERATIONAL, UPDATING, AUTO_RECOVERING, ACTION_NEEDED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the status of the Resolver endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetNameServerMetricsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether target name server metrics are enabled for the outbound Resolver endpoint. When enabled, one-minute granular metrics are published in CloudWatch for each target name server associated with this endpoint. When disabled, these metrics are not published. This feature is not supported for inbound Resolver endpoint.</td>
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
    <td><a href="#get_resolver_endpoint"><CopyableCode code="get_resolver_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the current status of the endpoint.</td>
</tr>
<tr>
    <td><a href="#list_resolver_endpoints"><CopyableCode code="list_resolver_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the Resolver endpoints that were created using the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_resolver_endpoint"><CopyableCode code="create_resolver_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CreatorRequestId"><code>CreatorRequestId</code></a>, <a href="#parameter-SecurityGroupIds"><code>SecurityGroupIds</code></a>, <a href="#parameter-IpAddresses"><code>IpAddresses</code></a></td>
    <td></td>
    <td>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound: An inbound Resolver endpoint forwards DNS queries to the DNS service for a VPC from your network. An outbound Resolver endpoint forwards DNS queries from the DNS service for a VPC to your network.</td>
</tr>
<tr>
    <td><a href="#associate_resolver_endpoint_ip_address"><CopyableCode code="associate_resolver_endpoint_ip_address" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResolverEndpointId"><code>ResolverEndpointId</code></a>, <a href="#parameter-IpAddress"><code>IpAddress</code></a></td>
    <td></td>
    <td>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address, submit one AssociateResolverEndpointIpAddress request for each IP address. To remove an IP address from an endpoint, see DisassociateResolverEndpointIpAddress.</td>
</tr>
<tr>
    <td><a href="#update_resolver_endpoint"><CopyableCode code="update_resolver_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResolverEndpointId"><code>ResolverEndpointId</code></a></td>
    <td></td>
    <td>Updates the name, or endpoint type for an inbound or an outbound Resolver endpoint. You can only update between IPV4 and DUALSTACK, IPV6 endpoint type can't be updated to other type.</td>
</tr>
<tr>
    <td><a href="#delete_resolver_endpoint"><CopyableCode code="delete_resolver_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound Resolver endpoint: Inbound: DNS queries from your network are no longer routed to the DNS service for the specified VPC. Outbound: DNS queries from a VPC are no longer routed to your network.</td>
</tr>
<tr>
    <td><a href="#disassociate_resolver_endpoint_ip_address"><CopyableCode code="disassociate_resolver_endpoint_ip_address" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResolverEndpointId"><code>ResolverEndpointId</code></a>, <a href="#parameter-IpAddress"><code>IpAddress</code></a></td>
    <td></td>
    <td>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address, submit one DisassociateResolverEndpointIpAddress request for each IP address. To add an IP address to an endpoint, see AssociateResolverEndpointIpAddress.</td>
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
    defaultValue="get_resolver_endpoint"
    values={[
        { label: 'get_resolver_endpoint', value: 'get_resolver_endpoint' },
        { label: 'list_resolver_endpoints', value: 'list_resolver_endpoints' }
    ]}
>
<TabItem value="get_resolver_endpoint">

Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the current status of the endpoint.

```sql
SELECT
Arn,
CreationTime,
CreatorRequestId,
Direction,
Dns64Enabled,
HostVPCId,
Id,
IpAddressCount,
Ipv6InternetAccessEnabled,
ModificationTime,
Name,
OutpostArn,
PreferredInstanceType,
Protocols,
ResolverEndpointType,
RniEnhancedMetricsEnabled,
SecurityGroupIds,
Status,
StatusMessage,
TargetNameServerMetricsEnabled
FROM aws.route53resolver.resolver_endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resolver_endpoints">

Lists all the Resolver endpoints that were created using the current Amazon Web Services account.

```sql
SELECT
Arn,
CreationTime,
CreatorRequestId,
Direction,
Dns64Enabled,
HostVPCId,
Id,
IpAddressCount,
Ipv6InternetAccessEnabled,
ModificationTime,
Name,
OutpostArn,
PreferredInstanceType,
Protocols,
ResolverEndpointType,
RniEnhancedMetricsEnabled,
SecurityGroupIds,
Status,
StatusMessage,
TargetNameServerMetricsEnabled
FROM aws.route53resolver.resolver_endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resolver_endpoint"
    values={[
        { label: 'create_resolver_endpoint', value: 'create_resolver_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resolver_endpoint">

Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound: An inbound Resolver endpoint forwards DNS queries to the DNS service for a VPC from your network. An outbound Resolver endpoint forwards DNS queries from the DNS service for a VPC to your network.

```sql
INSERT INTO aws.route53resolver.resolver_endpoints (
CreatorRequestId,
Name,
SecurityGroupIds,
Direction,
IpAddresses,
OutpostArn,
PreferredInstanceType,
Tags,
ResolverEndpointType,
Protocols,
RniEnhancedMetricsEnabled,
TargetNameServerMetricsEnabled,
Dns64Enabled,
Ipv6InternetAccessEnabled,
region
)
SELECT 
'{{ CreatorRequestId }}' /* required */,
'{{ Name }}',
'{{ SecurityGroupIds }}' /* required */,
'{{ Direction }}',
'{{ IpAddresses }}' /* required */,
'{{ OutpostArn }}',
'{{ PreferredInstanceType }}',
'{{ Tags }}',
'{{ ResolverEndpointType }}',
'{{ Protocols }}',
{{ RniEnhancedMetricsEnabled }},
{{ TargetNameServerMetricsEnabled }},
{{ Dns64Enabled }},
{{ Ipv6InternetAccessEnabled }},
'{{ region }}'
RETURNING
ResolverEndpoint
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resolver_endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resolver_endpoints resource.
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
      description: |
        A unique string that identifies the request and that allows failed requests to be retried without the risk of running the operation twice. CreatorRequestId can be any unique string, for example, a date/time stamp.
    - name: Name
      value: "{{ Name }}"
      description: |
        A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.
    - name: SecurityGroupIds
      value:
        - "{{ SecurityGroupIds }}"
      description: |
        The ID of one or more security groups that you want to use to control access to this VPC. The security group that you specify must include one or more inbound rules (for inbound Resolver endpoints) or outbound rules (for outbound Resolver endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network. Some security group rules will cause your connection to be tracked. For outbound resolver endpoint, it can potentially impact the maximum queries per second from outbound endpoint to your target name server. For inbound resolver endpoint, it can bring down the overall maximum queries per second per IP address to as low as 1500. To avoid connection tracking caused by security group, see Untracked connections.
    - name: Direction
      value: "{{ Direction }}"
      description: |
        Specify the applicable value: INBOUND: Resolver forwards DNS queries to the DNS service for a VPC from your network. OUTBOUND: Resolver forwards DNS queries from the DNS service for a VPC to your network. INBOUND_DELEGATION: Resolver delegates queries to Route 53 private hosted zones from your network.
      valid_values: ['INBOUND', 'OUTBOUND', 'INBOUND_DELEGATION']
    - name: IpAddresses
      description: |
        The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). The subnet ID uniquely identifies a VPC. Even though the minimum is 1, Route 53 requires that you create at least two.
      value:
        - SubnetId: "{{ SubnetId }}"
          Ip: "{{ Ip }}"
          Ipv6: "{{ Ipv6 }}"
    - name: OutpostArn
      value: "{{ OutpostArn }}"
      description: |
        The Amazon Resource Name (ARN) of the Outpost. If you specify this, you must also specify a value for the PreferredInstanceType.
    - name: PreferredInstanceType
      value: "{{ PreferredInstanceType }}"
      description: |
        The instance type. If you specify this, you must also specify a value for the OutpostArn.
    - name: Tags
      description: |
        A list of the tag keys and values that you want to associate with the endpoint.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ResolverEndpointType
      value: "{{ ResolverEndpointType }}"
      description: |
        For the endpoint type you can choose either IPv4, IPv6, or dual-stack. A dual-stack endpoint means that it will resolve via both IPv4 and IPv6. This endpoint type is applied to all IP addresses.
      valid_values: ['IPV6', 'IPV4', 'DUALSTACK']
    - name: Protocols
      value:
        - "{{ Protocols }}"
      description: |
        The protocols you want to use for the endpoint. DoH-FIPS is applicable for default inbound endpoints only. For a default inbound endpoint you can apply the protocols as follows: Do53 and DoH in combination. Do53 and DoH-FIPS in combination. Do53 alone. DoH alone. DoH-FIPS alone. None, which is treated as Do53. For a delegation inbound endpoint you can use Do53 only. For an outbound endpoint you can apply the protocols as follows: Do53 and DoH in combination. Do53 alone. DoH alone. None, which is treated as Do53.
    - name: RniEnhancedMetricsEnabled
      value: {{ RniEnhancedMetricsEnabled }}
      description: |
        Specifies whether RNI enhanced metrics are enabled for the Resolver endpoints. When set to true, one-minute granular metrics are published in CloudWatch for each RNI associated with this endpoint. When set to false, metrics are not published. Default is false. Standard CloudWatch pricing and charges are applied for using the Route 53 Resolver endpoint RNI enhanced metrics. For more information, see Detailed metrics.
    - name: TargetNameServerMetricsEnabled
      value: {{ TargetNameServerMetricsEnabled }}
      description: |
        Specifies whether target name server metrics are enabled for the outbound Resolver endpoints. When set to true, one-minute granular metrics are published in CloudWatch for each target name server associated with this endpoint. When set to false, metrics are not published. Default is false. This is not supported for inbound Resolver endpoints. Standard CloudWatch pricing and charges are applied for using the Route 53 Resolver endpoint target name server metrics. For more information, see Detailed metrics.
    - name: Dns64Enabled
      value: {{ Dns64Enabled }}
      description: |
        Specifies whether DNS64 is enabled for the inbound Resolver endpoint. When set to true, Route 53 Resolver synthesizes AAAA (IPv6) records for IPv4-only services by prepending the 64:ff9b::/96 prefix to the IPv4 address. This enables IPv6-only clients that send queries through the inbound endpoint to reach IPv4-only services. DNS64 works with NAT64 to provide complete IPv6-to-IPv4 translation. Default is false.
    - name: Ipv6InternetAccessEnabled
      value: {{ Ipv6InternetAccessEnabled }}
      description: |
        Specifies whether IPv6 internet access is enabled for the outbound Resolver endpoint. When set to true, the endpoint elastic network interfaces (ENIs) can forward DNS queries to public IPv6 targets through an internet gateway. Default is false. When you enable IPv6 internet access, use network controls like security groups, NACLs, or egress-only internet gateways to protect the endpoint ENIs from unsolicited ingress traffic. Be aware that some network controls can affect DNS query throughput due to connection tracking. For more information, see Amazon EC2 security group connection tracking and Resolver endpoint scaling.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_resolver_endpoint_ip_address"
    values={[
        { label: 'associate_resolver_endpoint_ip_address', value: 'associate_resolver_endpoint_ip_address' },
        { label: 'update_resolver_endpoint', value: 'update_resolver_endpoint' }
    ]}
>
<TabItem value="associate_resolver_endpoint_ip_address">

Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address, submit one AssociateResolverEndpointIpAddress request for each IP address. To remove an IP address from an endpoint, see DisassociateResolverEndpointIpAddress.

```sql
UPDATE aws.route53resolver.resolver_endpoints
SET 
ResolverEndpointId = '{{ ResolverEndpointId }}',
IpAddress = '{{ IpAddress }}'
WHERE 
region = '{{ region }}' --required
AND ResolverEndpointId = '{{ ResolverEndpointId }}' --required
AND IpAddress = '{{ IpAddress }}' --required
RETURNING
ResolverEndpoint;
```
</TabItem>
<TabItem value="update_resolver_endpoint">

Updates the name, or endpoint type for an inbound or an outbound Resolver endpoint. You can only update between IPV4 and DUALSTACK, IPV6 endpoint type can't be updated to other type.

```sql
UPDATE aws.route53resolver.resolver_endpoints
SET 
ResolverEndpointId = '{{ ResolverEndpointId }}',
Name = '{{ Name }}',
ResolverEndpointType = '{{ ResolverEndpointType }}',
UpdateIpAddresses = '{{ UpdateIpAddresses }}',
Protocols = '{{ Protocols }}',
RniEnhancedMetricsEnabled = {{ RniEnhancedMetricsEnabled }},
TargetNameServerMetricsEnabled = {{ TargetNameServerMetricsEnabled }},
Dns64Enabled = {{ Dns64Enabled }},
Ipv6InternetAccessEnabled = {{ Ipv6InternetAccessEnabled }}
WHERE 
region = '{{ region }}' --required
AND ResolverEndpointId = '{{ ResolverEndpointId }}' --required
RETURNING
ResolverEndpoint;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resolver_endpoint"
    values={[
        { label: 'delete_resolver_endpoint', value: 'delete_resolver_endpoint' }
    ]}
>
<TabItem value="delete_resolver_endpoint">

Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound Resolver endpoint: Inbound: DNS queries from your network are no longer routed to the DNS service for the specified VPC. Outbound: DNS queries from a VPC are no longer routed to your network.

```sql
DELETE FROM aws.route53resolver.resolver_endpoints
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_resolver_endpoint_ip_address"
    values={[
        { label: 'disassociate_resolver_endpoint_ip_address', value: 'disassociate_resolver_endpoint_ip_address' }
    ]}
>
<TabItem value="disassociate_resolver_endpoint_ip_address">

Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address, submit one DisassociateResolverEndpointIpAddress request for each IP address. To add an IP address to an endpoint, see AssociateResolverEndpointIpAddress.

```sql
EXEC aws.route53resolver.resolver_endpoints.disassociate_resolver_endpoint_ip_address 
@region='{{ region }}' --required 
@@json=
'{
"ResolverEndpointId": "{{ ResolverEndpointId }}", 
"IpAddress": "{{ IpAddress }}"
}'
;
```
</TabItem>
</Tabs>
