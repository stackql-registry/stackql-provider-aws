--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - servicediscovery
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicediscovery.instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_instance"
    values={[
        { label: 'get_instance', value: 'get_instance' },
        { label: 'list_instances', value: 'list_instances' }
    ]}
>
<TabItem value="get_instance">

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
    <td><CopyableCode code="instance" /></td>
    <td><code>object</code></td>
    <td>A complex type that contains information about a specified instance.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that created the namespace that contains the service that the instance is associated with. If this isn't your account ID, it's the ID of the account that shared the namespace with your account.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_instances">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>A string map that contains the following information: The attributes that are associated with the instance. For each attribute, the applicable value. Supported attribute keys include the following: AWS_ALIAS_DNS_NAME For an alias record that routes traffic to an Elastic Load Balancing load balancer, the DNS name that's associated with the load balancer. AWS_EC2_INSTANCE_ID (HTTP namespaces only) The Amazon EC2 instance ID for the instance. When the AWS_EC2_INSTANCE_ID attribute is specified, then the AWS_INSTANCE_IPV4 attribute contains the primary private IPv4 address. AWS_INIT_HEALTH_STATUS If the service configuration includes HealthCheckCustomConfig, you can optionally use AWS_INIT_HEALTH_STATUS to specify the initial status of the custom health check, HEALTHY or UNHEALTHY. If you don't specify a value for AWS_INIT_HEALTH_STATUS, the initial status is HEALTHY. AWS_INSTANCE_CNAME For a CNAME record, the domain name that Route 53 returns in response to DNS queries (for example, example.com). AWS_INSTANCE_IPV4 For an A record, the IPv4 address that Route 53 returns in response to DNS queries (for example, 192.0.2.44). AWS_INSTANCE_IPV6 For an AAAA record, the IPv6 address that Route 53 returns in response to DNS queries (for example, 2001:0db8:85a3:0000:0000:abcd:0001:2345). AWS_INSTANCE_PORT For an SRV record, the value that Route 53 returns for the port. In addition, if the service includes HealthCheckConfig, the port on the endpoint that Route 53 sends requests to.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by_account" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that registered the instance. If this isn't your account ID, it's the ID of the account that shared the namespace with your account or the ID of another account with which the namespace has been shared. For more information about shared namespaces, see Cross-account Cloud Map namespace sharing in the Cloud Map Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID for an instance that you created by using a specified service.</td>
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
    <td><a href="#get_instance"><CopyableCode code="get_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specified instance.</td>
</tr>
<tr>
    <td><a href="#list_instances"><CopyableCode code="list_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists summary information about the instances that you registered by using a specified service.</td>
</tr>
<tr>
    <td><a href="#register_instance"><CopyableCode code="register_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServiceId"><code>ServiceId</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a></td>
    <td></td>
    <td>Creates or updates one or more records and, optionally, creates a health check based on the settings in a specified service. When you submit a RegisterInstance request, the following occurs: For each DNS record that you define in the service that's specified by ServiceId, a record is created or updated in the hosted zone that's associated with the corresponding namespace. If the service includes HealthCheckConfig, a health check is created based on the settings in the health check configuration. The health check, if any, is associated with each of the new or updated records. One RegisterInstance request must complete before you can submit another request and specify the same service ID and instance ID. For more information, see CreateService. When Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value: If the health check is healthy: returns all the records If the health check is unhealthy: returns the applicable value for the last healthy instance If you didn't specify a health check configuration: returns all the records For the current quota on the number of instances that you can register using the same namespace and using the same service, see Cloud Map quotas in the Cloud Map Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_instance_custom_health_status"><CopyableCode code="update_instance_custom_health_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServiceId"><code>ServiceId</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-Status"><code>Status</code></a></td>
    <td></td>
    <td>Submits a request to change the health status of a custom health check to healthy or unhealthy. You can use UpdateInstanceCustomHealthStatus to change the status only for custom health checks, which you define using HealthCheckCustomConfig when you create a service. You can't use it to change the status for Route 53 health checks, which you define using HealthCheckConfig. For more information, see HealthCheckCustomConfig.</td>
</tr>
<tr>
    <td><a href="#deregister_instance"><CopyableCode code="deregister_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the Amazon Route 53 DNS records and health check, if any, that Cloud Map created for the specified instance.</td>
</tr>
<tr>
    <td><a href="#discover_instances"><CopyableCode code="discover_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NamespaceName"><code>NamespaceName</code></a>, <a href="#parameter-ServiceName"><code>ServiceName</code></a></td>
    <td></td>
    <td>Discovers registered instances for a specified namespace and service. You can use DiscoverInstances to discover instances for any type of namespace. DiscoverInstances returns a randomized list of instances allowing customers to distribute traffic evenly across instances. For public and private DNS namespaces, you can also use DNS queries to discover instances.</td>
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
    defaultValue="get_instance"
    values={[
        { label: 'get_instance', value: 'get_instance' },
        { label: 'list_instances', value: 'list_instances' }
    ]}
>
<TabItem value="get_instance">

Gets information about a specified instance.

```sql
SELECT
instance,
resource_owner
FROM aws.servicediscovery.instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_instances">

Lists summary information about the instances that you registered by using a specified service.

```sql
SELECT
attributes,
created_by_account,
id
FROM aws.servicediscovery.instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_instance"
    values={[
        { label: 'register_instance', value: 'register_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_instance">

Creates or updates one or more records and, optionally, creates a health check based on the settings in a specified service. When you submit a RegisterInstance request, the following occurs: For each DNS record that you define in the service that's specified by ServiceId, a record is created or updated in the hosted zone that's associated with the corresponding namespace. If the service includes HealthCheckConfig, a health check is created based on the settings in the health check configuration. The health check, if any, is associated with each of the new or updated records. One RegisterInstance request must complete before you can submit another request and specify the same service ID and instance ID. For more information, see CreateService. When Cloud Map receives a DNS query for the specified DNS name, it returns the applicable value: If the health check is healthy: returns all the records If the health check is unhealthy: returns the applicable value for the last healthy instance If you didn't specify a health check configuration: returns all the records For the current quota on the number of instances that you can register using the same namespace and using the same service, see Cloud Map quotas in the Cloud Map Developer Guide.

```sql
INSERT INTO aws.servicediscovery.instances (
ServiceId,
InstanceId,
CreatorRequestId,
Attributes,
region
)
SELECT 
'{{ ServiceId }}' /* required */,
'{{ InstanceId }}' /* required */,
'{{ CreatorRequestId }}',
'{{ Attributes }}',
'{{ region }}'
RETURNING
operation_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instances resource.
    - name: ServiceId
      value: "{{ ServiceId }}"
      description: |
        The ID or Amazon Resource Name (ARN) of the service that you want to use for settings for the instance. For services created in a shared namespace, specify the service ARN. For more information about shared namespaces, see Cross-account Cloud Map namespace sharing in the Cloud Map Developer Guide.
    - name: InstanceId
      value: "{{ InstanceId }}"
      description: |
        An identifier that you want to associate with the instance. Note the following: If the service that's specified by ServiceId includes settings for an SRV record, the value of InstanceId is automatically included as part of the value for the SRV record. For more information, see DnsRecord > Type. You can use this value to update an existing instance. To register a new instance, you must specify a value that's unique among instances that you register by using the same service. If you specify an existing InstanceId and ServiceId, Cloud Map updates the existing DNS records, if any. If there's also an existing health check, Cloud Map deletes the old health check and creates a new one. The health check isn't deleted immediately, so it will still appear for a while if you submit a ListHealthChecks request, for example. Do not include sensitive information in InstanceId if the namespace is discoverable by public DNS queries and any Type member of DnsRecord for the service contains SRV because the InstanceId is discoverable by public DNS queries.
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
      description: |
        A unique string that identifies the request and that allows failed RegisterInstance requests to be retried without the risk of executing the operation twice. You must use a unique CreatorRequestId string every time you submit a RegisterInstance request if you're registering additional instances for the same namespace and service. CreatorRequestId can be any unique string (for example, a date/time stamp).
    - name: Attributes
      value: "{{ Attributes }}"
      description: |
        A string map that contains the following information for the service that you specify in ServiceId: The attributes that apply to the records that are defined in the service. For each attribute, the applicable value. Do not include sensitive information in the attributes if the namespace is discoverable by public DNS queries. The following are the supported attribute keys. AWS_ALIAS_DNS_NAME If you want Cloud Map to create an Amazon Route 53 alias record that routes traffic to an Elastic Load Balancing load balancer, specify the DNS name that's associated with the load balancer. For information about how to get the DNS name, see "DNSName" in the topic AliasTarget in the Route 53 API Reference. Note the following: The configuration for the service that's specified by ServiceId must include settings for an A record, an AAAA record, or both. In the service that's specified by ServiceId, the value of RoutingPolicy must be WEIGHTED. If the service that's specified by ServiceId includes HealthCheckConfig settings, Cloud Map will create the Route 53 health check, but it doesn't associate the health check with the alias record. Cloud Map currently doesn't support creating alias records that route traffic to Amazon Web Services resources other than Elastic Load Balancing load balancers. If you specify a value for AWS_ALIAS_DNS_NAME, don't specify values for any of the AWS_INSTANCE attributes. The AWS_ALIAS_DNS_NAME is not supported in the GovCloud (US) Regions. AWS_EC2_INSTANCE_ID HTTP namespaces only. The Amazon EC2 instance ID for the instance. If the AWS_EC2_INSTANCE_ID attribute is specified, then the only other attribute that can be specified is AWS_INIT_HEALTH_STATUS. When the AWS_EC2_INSTANCE_ID attribute is specified, then the AWS_INSTANCE_IPV4 attribute will be filled out with the primary private IPv4 address. AWS_INIT_HEALTH_STATUS If the service configuration includes HealthCheckCustomConfig, you can optionally use AWS_INIT_HEALTH_STATUS to specify the initial status of the custom health check, HEALTHY or UNHEALTHY. If you don't specify a value for AWS_INIT_HEALTH_STATUS, the initial status is HEALTHY. AWS_INSTANCE_CNAME If the service configuration includes a CNAME record, the domain name that you want Route 53 to return in response to DNS queries (for example, example.com). This value is required if the service specified by ServiceId includes settings for an CNAME record. AWS_INSTANCE_IPV4 If the service configuration includes an A record, the IPv4 address that you want Route 53 to return in response to DNS queries (for example, 192.0.2.44). This value is required if the service specified by ServiceId includes settings for an A record. If the service includes settings for an SRV record, you must specify a value for AWS_INSTANCE_IPV4, AWS_INSTANCE_IPV6, or both. AWS_INSTANCE_IPV6 If the service configuration includes an AAAA record, the IPv6 address that you want Route 53 to return in response to DNS queries (for example, 2001:0db8:85a3:0000:0000:abcd:0001:2345). This value is required if the service specified by ServiceId includes settings for an AAAA record. If the service includes settings for an SRV record, you must specify a value for AWS_INSTANCE_IPV4, AWS_INSTANCE_IPV6, or both. AWS_INSTANCE_PORT If the service includes an SRV record, the value that you want Route 53 to return for the port. If the service includes HealthCheckConfig, the port on the endpoint that you want Route 53 to send requests to. This value is required if you specified settings for an SRV record or a Route 53 health check when you created the service. Custom attributes You can add up to 30 custom attributes. For each key-value pair, the maximum length of the attribute name is 255 characters, and the maximum length of the attribute value is 1,024 characters. The total size of all provided attributes (sum of all keys and values) must not exceed 5,000 characters.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_instance_custom_health_status"
    values={[
        { label: 'update_instance_custom_health_status', value: 'update_instance_custom_health_status' }
    ]}
>
<TabItem value="update_instance_custom_health_status">

Submits a request to change the health status of a custom health check to healthy or unhealthy. You can use UpdateInstanceCustomHealthStatus to change the status only for custom health checks, which you define using HealthCheckCustomConfig when you create a service. You can't use it to change the status for Route 53 health checks, which you define using HealthCheckConfig. For more information, see HealthCheckCustomConfig.

```sql
UPDATE aws.servicediscovery.instances
SET 
ServiceId = '{{ ServiceId }}',
InstanceId = '{{ InstanceId }}',
Status = '{{ Status }}'
WHERE 
region = '{{ region }}' --required
AND ServiceId = '{{ ServiceId }}' --required
AND InstanceId = '{{ InstanceId }}' --required
AND Status = '{{ Status }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_instance"
    values={[
        { label: 'deregister_instance', value: 'deregister_instance' }
    ]}
>
<TabItem value="deregister_instance">

Deletes the Amazon Route 53 DNS records and health check, if any, that Cloud Map created for the specified instance.

```sql
DELETE FROM aws.servicediscovery.instances
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="discover_instances"
    values={[
        { label: 'discover_instances', value: 'discover_instances' }
    ]}
>
<TabItem value="discover_instances">

Discovers registered instances for a specified namespace and service. You can use DiscoverInstances to discover instances for any type of namespace. DiscoverInstances returns a randomized list of instances allowing customers to distribute traffic evenly across instances. For public and private DNS namespaces, you can also use DNS queries to discover instances.

```sql
EXEC aws.servicediscovery.instances.discover_instances 
@region='{{ region }}' --required 
@@json=
'{
"NamespaceName": "{{ NamespaceName }}", 
"ServiceName": "{{ ServiceName }}", 
"MaxResults": {{ MaxResults }}, 
"QueryParameters": "{{ QueryParameters }}", 
"OptionalParameters": "{{ OptionalParameters }}", 
"HealthStatus": "{{ HealthStatus }}", 
"OwnerAccount": "{{ OwnerAccount }}"
}'
;
```
</TabItem>
</Tabs>
