--- 
title: vpc_endpoint_services
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoint_services
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

Creates, updates, deletes, gets or lists a <code>vpc_endpoint_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_endpoint_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpc_endpoint_services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_endpoint_services"
    values={[
        { label: 'describe_vpc_endpoint_services', value: 'describe_vpc_endpoint_services' }
    ]}
>
<TabItem value="describe_vpc_endpoint_services">

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
    <td>Indicates whether VPC endpoint connection requests to the service must be accepted by the service owner.</td>
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
    <td><CopyableCode code="manages_vpc_endpoints" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the service manages its VPC endpoints. Management of the service VPC endpoints using the VPC endpoint API is restricted.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the service owner.</td>
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
    <td><CopyableCode code="private_dns_name_verification_state" /></td>
    <td><code>string</code></td>
    <td>The verification state of the VPC endpoint service. Consumers of the endpoint service cannot use the private name when the state is not verified.</td>
</tr>
<tr>
    <td><CopyableCode code="private_dns_names" /></td>
    <td><code>string</code></td>
    <td>The private DNS names assigned to the VPC endpoint service.</td>
</tr>
<tr>
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the endpoint service.</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="service_region" /></td>
    <td><code>string</code></td>
    <td>The Region where the service is hosted.</td>
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
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the service.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_policy_supported" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the service supports endpoint policies.</td>
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
    <td><a href="#describe_vpc_endpoint_services"><CopyableCode code="describe_vpc_endpoint_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ServiceName"><code>ServiceName</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-ServiceRegion"><code>ServiceRegion</code></a></td>
    <td>Describes available services to which you can create a VPC endpoint. When the service provider and the consumer have different accounts in multiple Availability Zones, and the consumer views the VPC endpoint service information, the response only includes the common Availability Zones. For example, when the service provider account uses us-east-1a and us-east-1c and the consumer uses us-east-1a and us-east-1b, the response includes the VPC endpoint services in the common Availability Zone, us-east-1a.</td>
</tr>
<tr>
    <td><a href="#modify_vpc_endpoint_service_payer_responsibility"><CopyableCode code="modify_vpc_endpoint_service_payer_responsibility" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ServiceId"><code>ServiceId</code></a>, <a href="#parameter-PayerResponsibility"><code>PayerResponsibility</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies the payer responsibility for your VPC endpoint service.</td>
</tr>
<tr>
    <td><a href="#start_vpc_endpoint_service_private_dns_verification"><CopyableCode code="start_vpc_endpoint_service_private_dns_verification" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ServiceId"><code>ServiceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Initiates the verification process to prove that the service provider owns the private DNS name domain for the endpoint service. The service provider must successfully perform the verification before the consumer can use the name to access the service. Before the service provider runs this command, they must add a record to the DNS server.</td>
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
<tr id="parameter-PayerResponsibility">
    <td><CopyableCode code="PayerResponsibility" /></td>
    <td><code>string</code></td>
    <td>The entity that is responsible for the endpoint costs. The default is the endpoint owner. If you set the payer responsibility to the service owner, you cannot set it back to the endpoint owner.</td>
</tr>
<tr id="parameter-ServiceId">
    <td><CopyableCode code="ServiceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the endpoint service.</td>
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
    <td>The filters. owner - The ID or alias of the Amazon Web Services account that owns the service. service-name - The name of the service. service-region - The Region of the service. service-type - The type of service (Interface | Gateway | GatewayLoadBalancer). supported-ip-address-types - The IP address type (ipv4 | ipv6). tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</td>
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
<tr id="parameter-ServiceName">
    <td><CopyableCode code="ServiceName" /></td>
    <td><code>array</code></td>
    <td>The service names.</td>
</tr>
<tr id="parameter-ServiceRegion">
    <td><CopyableCode code="ServiceRegion" /></td>
    <td><code>array</code></td>
    <td>The service Regions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpc_endpoint_services"
    values={[
        { label: 'describe_vpc_endpoint_services', value: 'describe_vpc_endpoint_services' }
    ]}
>
<TabItem value="describe_vpc_endpoint_services">

Describes available services to which you can create a VPC endpoint. When the service provider and the consumer have different accounts in multiple Availability Zones, and the consumer views the VPC endpoint service information, the response only includes the common Availability Zones. For example, when the service provider account uses us-east-1a and us-east-1c and the consumer uses us-east-1a and us-east-1b, the response includes the VPC endpoint services in the common Availability Zone, us-east-1a.

```sql
SELECT
acceptance_required,
availability_zone_ids,
availability_zones,
base_endpoint_dns_names,
manages_vpc_endpoints,
owner,
payer_responsibility,
private_dns_name,
private_dns_name_verification_state,
private_dns_names,
service_id,
service_name,
service_region,
service_type,
supported_ip_address_types,
tags,
vpc_endpoint_policy_supported
FROM aws.ec2.vpc_endpoint_services
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND ServiceName = '{{ ServiceName }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND ServiceRegion = '{{ ServiceRegion }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_vpc_endpoint_service_payer_responsibility"
    values={[
        { label: 'modify_vpc_endpoint_service_payer_responsibility', value: 'modify_vpc_endpoint_service_payer_responsibility' }
    ]}
>
<TabItem value="modify_vpc_endpoint_service_payer_responsibility">

Modifies the payer responsibility for your VPC endpoint service.

```sql
UPDATE aws.ec2.vpc_endpoint_services
SET 
-- No updatable properties
WHERE 
ServiceId = '{{ ServiceId }}' --required
AND PayerResponsibility = '{{ PayerResponsibility }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
return_value;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_vpc_endpoint_service_private_dns_verification"
    values={[
        { label: 'start_vpc_endpoint_service_private_dns_verification', value: 'start_vpc_endpoint_service_private_dns_verification' }
    ]}
>
<TabItem value="start_vpc_endpoint_service_private_dns_verification">

Initiates the verification process to prove that the service provider owns the private DNS name domain for the endpoint service. The service provider must successfully perform the verification before the consumer can use the name to access the service. Before the service provider runs this command, they must add a record to the DNS server.

```sql
EXEC aws.ec2.vpc_endpoint_services.start_vpc_endpoint_service_private_dns_verification 
@ServiceId='{{ ServiceId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
