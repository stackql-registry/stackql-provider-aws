--- 
title: endpoint_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoint_groups
  - globalaccelerator
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

Creates, updates, deletes, gets or lists an <code>endpoint_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoint_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.globalaccelerator.endpoint_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_endpoint_group"
    values={[
        { label: 'describe_endpoint_group', value: 'describe_endpoint_group' },
        { label: 'list_endpoint_groups', value: 'list_endpoint_groups' }
    ]}
>
<TabItem value="describe_endpoint_group">

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
    <td><CopyableCode code="endpoint_descriptions" /></td>
    <td><code>array</code></td>
    <td>The list of endpoint objects.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the endpoint group.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_group_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the endpoint group is located.</td>
</tr>
<tr>
    <td><CopyableCode code="health_check_interval_seconds" /></td>
    <td><code>integer</code></td>
    <td>The time—10 seconds or 30 seconds—between health checks for each endpoint. The default value is 30.</td>
</tr>
<tr>
    <td><CopyableCode code="health_check_path" /></td>
    <td><code>string</code></td>
    <td>If the protocol is HTTP/S, then this value provides the ping path that Global Accelerator uses for the destination on the endpoints for health checks. The default is slash (/). (pattern: &lt;code&gt;^/&#91;-a-zA-Z0-9@:%_\\+.~#?&/=&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="health_check_port" /></td>
    <td><code>integer</code></td>
    <td>The port that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. The default port is the port for the listener that this endpoint group is associated with. If the listener port is a list, Global Accelerator uses the first specified port in the list of ports.</td>
</tr>
<tr>
    <td><CopyableCode code="health_check_protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. The default value is TCP. (TCP, HTTP, HTTPS)</td>
</tr>
<tr>
    <td><CopyableCode code="port_overrides" /></td>
    <td><code>array</code></td>
    <td>Allows you to override the destination ports used to route traffic to an endpoint. Using a port override lets you map a list of external destination ports (that your users send traffic to) to a list of internal destination ports that you want an application endpoint to receive traffic on.</td>
</tr>
<tr>
    <td><CopyableCode code="threshold_count" /></td>
    <td><code>integer</code></td>
    <td>The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_dial_percentage" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of traffic to send to an Amazon Web Services Region. Additional traffic is distributed to other endpoint groups for this listener. Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is applied to the traffic that would otherwise have been routed to the Region based on optimal routing. The default value is 100.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_endpoint_groups">

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
    <td><CopyableCode code="endpoint_descriptions" /></td>
    <td><code>array</code></td>
    <td>The list of endpoint objects.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the endpoint group.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_group_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the endpoint group is located.</td>
</tr>
<tr>
    <td><CopyableCode code="health_check_interval_seconds" /></td>
    <td><code>integer</code></td>
    <td>The time—10 seconds or 30 seconds—between health checks for each endpoint. The default value is 30.</td>
</tr>
<tr>
    <td><CopyableCode code="health_check_path" /></td>
    <td><code>string</code></td>
    <td>If the protocol is HTTP/S, then this value provides the ping path that Global Accelerator uses for the destination on the endpoints for health checks. The default is slash (/). (pattern: &lt;code&gt;^/&#91;-a-zA-Z0-9@:%_\\+.~#?&/=&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="health_check_port" /></td>
    <td><code>integer</code></td>
    <td>The port that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. The default port is the port for the listener that this endpoint group is associated with. If the listener port is a list, Global Accelerator uses the first specified port in the list of ports.</td>
</tr>
<tr>
    <td><CopyableCode code="health_check_protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group. The default value is TCP. (TCP, HTTP, HTTPS)</td>
</tr>
<tr>
    <td><CopyableCode code="port_overrides" /></td>
    <td><code>array</code></td>
    <td>Allows you to override the destination ports used to route traffic to an endpoint. Using a port override lets you map a list of external destination ports (that your users send traffic to) to a list of internal destination ports that you want an application endpoint to receive traffic on.</td>
</tr>
<tr>
    <td><CopyableCode code="threshold_count" /></td>
    <td><code>integer</code></td>
    <td>The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_dial_percentage" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of traffic to send to an Amazon Web Services Region. Additional traffic is distributed to other endpoint groups for this listener. Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is applied to the traffic that would otherwise have been routed to the Region based on optimal routing. The default value is 100.</td>
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
    <td><a href="#describe_endpoint_group"><CopyableCode code="describe_endpoint_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describe an endpoint group.</td>
</tr>
<tr>
    <td><a href="#list_endpoint_groups"><CopyableCode code="list_endpoint_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the endpoint groups that are associated with a listener.</td>
</tr>
<tr>
    <td><a href="#create_endpoint_group"><CopyableCode code="create_endpoint_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ListenerArn"><code>ListenerArn</code></a>, <a href="#parameter-EndpointGroupRegion"><code>EndpointGroupRegion</code></a>, <a href="#parameter-IdempotencyToken"><code>IdempotencyToken</code></a></td>
    <td></td>
    <td>Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one Amazon Web Services Region. A resource must be valid and active when you add it as an endpoint. For more information about endpoint types and requirements for endpoints that you can add to Global Accelerator, see Endpoints for standard accelerators in the Global Accelerator Developer Guide.</td>
</tr>
<tr>
    <td><a href="#add_custom_routing_endpoints"><CopyableCode code="add_custom_routing_endpoints" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointConfigurations"><code>EndpointConfigurations</code></a>, <a href="#parameter-EndpointGroupArn"><code>EndpointGroupArn</code></a></td>
    <td></td>
    <td>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator. The listener port range must be large enough to support the number of IP addresses that can be specified in your subnet. The number of ports required is: subnet size times the number of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener port range of at least 255 ports. Note: You must have enough remaining listener ports available to map to the subnet ports, or the call will fail with a LimitExceededException. By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the AllowCustomRoutingTraffic operation.</td>
</tr>
<tr>
    <td><a href="#remove_custom_routing_endpoints"><CopyableCode code="remove_custom_routing_endpoints" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointIds"><code>EndpointIds</code></a>, <a href="#parameter-EndpointGroupArn"><code>EndpointGroupArn</code></a></td>
    <td></td>
    <td>Remove endpoints from a custom routing accelerator.</td>
</tr>
<tr>
    <td><a href="#remove_endpoints"><CopyableCode code="remove_endpoints" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointIdentifiers"><code>EndpointIdentifiers</code></a>, <a href="#parameter-EndpointGroupArn"><code>EndpointGroupArn</code></a></td>
    <td></td>
    <td>Remove endpoints from an endpoint group. The RemoveEndpoints API operation is the recommended option for removing endpoints. The alternative is to remove endpoints by updating an endpoint group by using the UpdateEndpointGroup API operation. There are two advantages to using AddEndpoints to remove endpoints instead: It's more convenient, because you only need to specify the endpoints that you want to remove. With the UpdateEndpointGroup API operation, you must specify all of the endpoints in the endpoint group except the ones that you want to remove from the group. It's faster, because Global Accelerator doesn't need to resolve any endpoints. With the UpdateEndpointGroup API operation, Global Accelerator must resolve all of the endpoints that remain in the group.</td>
</tr>
<tr>
    <td><a href="#update_endpoint_group"><CopyableCode code="update_endpoint_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointGroupArn"><code>EndpointGroupArn</code></a></td>
    <td></td>
    <td>Update an endpoint group. A resource must be valid and active when you add it as an endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_endpoint_group"><CopyableCode code="delete_endpoint_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an endpoint group from a listener.</td>
</tr>
<tr>
    <td><a href="#add_endpoints"><CopyableCode code="add_endpoints" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointConfigurations"><code>EndpointConfigurations</code></a>, <a href="#parameter-EndpointGroupArn"><code>EndpointGroupArn</code></a></td>
    <td></td>
    <td>Add endpoints to an endpoint group. The AddEndpoints API operation is the recommended option for adding endpoints. The alternative options are to add endpoints when you create an endpoint group (with the CreateEndpointGroup API) or when you update an endpoint group (with the UpdateEndpointGroup API). There are two advantages to using AddEndpoints to add endpoints in Global Accelerator: It's faster, because Global Accelerator only has to resolve the new endpoints that you're adding, rather than resolving new and existing endpoints. It's more convenient, because you don't need to specify the current endpoints that are already in the endpoint group, in addition to the new endpoints that you want to add. For information about endpoint types and requirements for endpoints that you can add to Global Accelerator, see Endpoints for standard accelerators in the Global Accelerator Developer Guide.</td>
</tr>
<tr>
    <td><a href="#allow_custom_routing_traffic"><CopyableCode code="allow_custom_routing_traffic" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointGroupArn"><code>EndpointGroupArn</code></a>, <a href="#parameter-EndpointId"><code>EndpointId</code></a></td>
    <td></td>
    <td>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group. After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</td>
</tr>
<tr>
    <td><a href="#deny_custom_routing_traffic"><CopyableCode code="deny_custom_routing_traffic" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointGroupArn"><code>EndpointGroupArn</code></a>, <a href="#parameter-EndpointId"><code>EndpointId</code></a></td>
    <td></td>
    <td>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a specified list of destination IP addresses and ports. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group. After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</td>
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
    defaultValue="describe_endpoint_group"
    values={[
        { label: 'describe_endpoint_group', value: 'describe_endpoint_group' },
        { label: 'list_endpoint_groups', value: 'list_endpoint_groups' }
    ]}
>
<TabItem value="describe_endpoint_group">

Describe an endpoint group.

```sql
SELECT
endpoint_descriptions,
endpoint_group_arn,
endpoint_group_region,
health_check_interval_seconds,
health_check_path,
health_check_port,
health_check_protocol,
port_overrides,
threshold_count,
traffic_dial_percentage
FROM aws.globalaccelerator.endpoint_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_endpoint_groups">

List the endpoint groups that are associated with a listener.

```sql
SELECT
endpoint_descriptions,
endpoint_group_arn,
endpoint_group_region,
health_check_interval_seconds,
health_check_path,
health_check_port,
health_check_protocol,
port_overrides,
threshold_count,
traffic_dial_percentage
FROM aws.globalaccelerator.endpoint_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_endpoint_group"
    values={[
        { label: 'create_endpoint_group', value: 'create_endpoint_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_endpoint_group">

Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one Amazon Web Services Region. A resource must be valid and active when you add it as an endpoint. For more information about endpoint types and requirements for endpoints that you can add to Global Accelerator, see Endpoints for standard accelerators in the Global Accelerator Developer Guide.

```sql
INSERT INTO aws.globalaccelerator.endpoint_groups (
ListenerArn,
EndpointGroupRegion,
EndpointConfigurations,
TrafficDialPercentage,
HealthCheckPort,
HealthCheckProtocol,
HealthCheckPath,
HealthCheckIntervalSeconds,
ThresholdCount,
IdempotencyToken,
PortOverrides,
region
)
SELECT 
'{{ ListenerArn }}' /* required */,
'{{ EndpointGroupRegion }}' /* required */,
'{{ EndpointConfigurations }}',
{{ TrafficDialPercentage }},
{{ HealthCheckPort }},
'{{ HealthCheckProtocol }}',
'{{ HealthCheckPath }}',
{{ HealthCheckIntervalSeconds }},
{{ ThresholdCount }},
'{{ IdempotencyToken }}' /* required */,
'{{ PortOverrides }}',
'{{ region }}'
RETURNING
endpoint_group
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: endpoint_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the endpoint_groups resource.
    - name: ListenerArn
      value: "{{ ListenerArn }}"
      description: |
        The Amazon Resource Name (ARN) of the listener.
    - name: EndpointGroupRegion
      value: "{{ EndpointGroupRegion }}"
      description: |
        The Amazon Web Services Region where the endpoint group is located. A listener can have only one endpoint group in a specific Region.
    - name: EndpointConfigurations
      description: |
        The list of endpoint objects.
      value:
        - EndpointId: "{{ EndpointId }}"
          Weight: {{ Weight }}
          ClientIPPreservationEnabled: {{ ClientIPPreservationEnabled }}
          AttachmentArn: "{{ AttachmentArn }}"
    - name: TrafficDialPercentage
      value: {{ TrafficDialPercentage }}
      description: |
        The percentage of traffic to send to an Amazon Web Services Region. Additional traffic is distributed to other endpoint groups for this listener. Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is applied to the traffic that would otherwise have been routed to the Region based on optimal routing. The default value is 100.
    - name: HealthCheckPort
      value: {{ HealthCheckPort }}
      description: |
        The port that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default port is the listener port that this endpoint group is associated with. If listener port is a list of ports, Global Accelerator uses the first port in the list.
    - name: HealthCheckProtocol
      value: "{{ HealthCheckProtocol }}"
      description: |
        The protocol that Global Accelerator uses to check the health of endpoints that are part of this endpoint group. The default value is TCP.
      valid_values: ['TCP', 'HTTP', 'HTTPS']
    - name: HealthCheckPath
      value: "{{ HealthCheckPath }}"
      description: |
        If the protocol is HTTP/S, then this specifies the path that is the destination for health check targets. The default value is slash (/).
    - name: HealthCheckIntervalSeconds
      value: {{ HealthCheckIntervalSeconds }}
      description: |
        The time—10 seconds or 30 seconds—between each health check for an endpoint. The default value is 30.
    - name: ThresholdCount
      value: {{ ThresholdCount }}
      description: |
        The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy. The default value is 3.
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency—that is, the uniqueness—of the request.
    - name: PortOverrides
      description: |
        Override specific listener ports used to route traffic to endpoints that are part of this endpoint group. For example, you can create a port override in which the listener receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080 and 1443, respectively, on the endpoints. For more information, see Overriding listener ports in the Global Accelerator Developer Guide.
      value:
        - ListenerPort: {{ ListenerPort }}
          EndpointPort: {{ EndpointPort }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_custom_routing_endpoints"
    values={[
        { label: 'add_custom_routing_endpoints', value: 'add_custom_routing_endpoints' },
        { label: 'remove_custom_routing_endpoints', value: 'remove_custom_routing_endpoints' },
        { label: 'remove_endpoints', value: 'remove_endpoints' },
        { label: 'update_endpoint_group', value: 'update_endpoint_group' }
    ]}
>
<TabItem value="add_custom_routing_endpoints">

Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator. The listener port range must be large enough to support the number of IP addresses that can be specified in your subnet. The number of ports required is: subnet size times the number of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener port range of at least 255 ports. Note: You must have enough remaining listener ports available to map to the subnet ports, or the call will fail with a LimitExceededException. By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the AllowCustomRoutingTraffic operation.

```sql
UPDATE aws.globalaccelerator.endpoint_groups
SET 
EndpointConfigurations = '{{ EndpointConfigurations }}',
EndpointGroupArn = '{{ EndpointGroupArn }}'
WHERE 
region = '{{ region }}' --required
AND EndpointConfigurations = '{{ EndpointConfigurations }}' --required
AND EndpointGroupArn = '{{ EndpointGroupArn }}' --required
RETURNING
endpoint_descriptions,
endpoint_group_arn;
```
</TabItem>
<TabItem value="remove_custom_routing_endpoints">

Remove endpoints from a custom routing accelerator.

```sql
UPDATE aws.globalaccelerator.endpoint_groups
SET 
EndpointIds = '{{ EndpointIds }}',
EndpointGroupArn = '{{ EndpointGroupArn }}'
WHERE 
region = '{{ region }}' --required
AND EndpointIds = '{{ EndpointIds }}' --required
AND EndpointGroupArn = '{{ EndpointGroupArn }}' --required;
```
</TabItem>
<TabItem value="remove_endpoints">

Remove endpoints from an endpoint group. The RemoveEndpoints API operation is the recommended option for removing endpoints. The alternative is to remove endpoints by updating an endpoint group by using the UpdateEndpointGroup API operation. There are two advantages to using AddEndpoints to remove endpoints instead: It's more convenient, because you only need to specify the endpoints that you want to remove. With the UpdateEndpointGroup API operation, you must specify all of the endpoints in the endpoint group except the ones that you want to remove from the group. It's faster, because Global Accelerator doesn't need to resolve any endpoints. With the UpdateEndpointGroup API operation, Global Accelerator must resolve all of the endpoints that remain in the group.

```sql
UPDATE aws.globalaccelerator.endpoint_groups
SET 
EndpointIdentifiers = '{{ EndpointIdentifiers }}',
EndpointGroupArn = '{{ EndpointGroupArn }}'
WHERE 
region = '{{ region }}' --required
AND EndpointIdentifiers = '{{ EndpointIdentifiers }}' --required
AND EndpointGroupArn = '{{ EndpointGroupArn }}' --required;
```
</TabItem>
<TabItem value="update_endpoint_group">

Update an endpoint group. A resource must be valid and active when you add it as an endpoint.

```sql
UPDATE aws.globalaccelerator.endpoint_groups
SET 
EndpointGroupArn = '{{ EndpointGroupArn }}',
EndpointConfigurations = '{{ EndpointConfigurations }}',
TrafficDialPercentage = {{ TrafficDialPercentage }},
HealthCheckPort = {{ HealthCheckPort }},
HealthCheckProtocol = '{{ HealthCheckProtocol }}',
HealthCheckPath = '{{ HealthCheckPath }}',
HealthCheckIntervalSeconds = {{ HealthCheckIntervalSeconds }},
ThresholdCount = {{ ThresholdCount }},
PortOverrides = '{{ PortOverrides }}'
WHERE 
region = '{{ region }}' --required
AND EndpointGroupArn = '{{ EndpointGroupArn }}' --required
RETURNING
endpoint_group;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_endpoint_group"
    values={[
        { label: 'delete_endpoint_group', value: 'delete_endpoint_group' }
    ]}
>
<TabItem value="delete_endpoint_group">

Delete an endpoint group from a listener.

```sql
DELETE FROM aws.globalaccelerator.endpoint_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add_endpoints"
    values={[
        { label: 'add_endpoints', value: 'add_endpoints' },
        { label: 'allow_custom_routing_traffic', value: 'allow_custom_routing_traffic' },
        { label: 'deny_custom_routing_traffic', value: 'deny_custom_routing_traffic' }
    ]}
>
<TabItem value="add_endpoints">

Add endpoints to an endpoint group. The AddEndpoints API operation is the recommended option for adding endpoints. The alternative options are to add endpoints when you create an endpoint group (with the CreateEndpointGroup API) or when you update an endpoint group (with the UpdateEndpointGroup API). There are two advantages to using AddEndpoints to add endpoints in Global Accelerator: It's faster, because Global Accelerator only has to resolve the new endpoints that you're adding, rather than resolving new and existing endpoints. It's more convenient, because you don't need to specify the current endpoints that are already in the endpoint group, in addition to the new endpoints that you want to add. For information about endpoint types and requirements for endpoints that you can add to Global Accelerator, see Endpoints for standard accelerators in the Global Accelerator Developer Guide.

```sql
EXEC aws.globalaccelerator.endpoint_groups.add_endpoints 
@region='{{ region }}' --required 
@@json=
'{
"EndpointConfigurations": "{{ EndpointConfigurations }}", 
"EndpointGroupArn": "{{ EndpointGroupArn }}"
}'
;
```
</TabItem>
<TabItem value="allow_custom_routing_traffic">

Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group. After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.

```sql
EXEC aws.globalaccelerator.endpoint_groups.allow_custom_routing_traffic 
@region='{{ region }}' --required 
@@json=
'{
"EndpointGroupArn": "{{ EndpointGroupArn }}", 
"EndpointId": "{{ EndpointId }}", 
"DestinationAddresses": "{{ DestinationAddresses }}", 
"DestinationPorts": "{{ DestinationPorts }}", 
"AllowAllTrafficToEndpoint": {{ AllowAllTrafficToEndpoint }}
}'
;
```
</TabItem>
<TabItem value="deny_custom_routing_traffic">

Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a specified list of destination IP addresses and ports. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group. After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.

```sql
EXEC aws.globalaccelerator.endpoint_groups.deny_custom_routing_traffic 
@region='{{ region }}' --required 
@@json=
'{
"EndpointGroupArn": "{{ EndpointGroupArn }}", 
"EndpointId": "{{ EndpointId }}", 
"DestinationAddresses": "{{ DestinationAddresses }}", 
"DestinationPorts": "{{ DestinationPorts }}", 
"DenyAllTrafficToEndpoint": {{ DenyAllTrafficToEndpoint }}
}'
;
```
</TabItem>
</Tabs>
