--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicediscovery.services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service"
    values={[
        { label: 'get_service', value: 'get_service' }
    ]}
>
<TabItem value="get_service">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that Cloud Map assigns to the service when you create it.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the service was created, in Unix format and Coordinated Universal Time (UTC). The value of CreateDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by_account" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that created the service. If this isn't your account ID, it is the ID of account of the namespace owner or of another account with which the namespace has been shared. For more information about shared namespaces, see Cross-account Cloud Map namespace sharing in the Cloud Map Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="creator_request_id" /></td>
    <td><code>string</code></td>
    <td>A unique string that identifies the request and that allows failed requests to be retried without the risk of running the operation twice. CreatorRequestId can be any unique string (for example, a date/timestamp).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_config" /></td>
    <td><code>object</code></td>
    <td>A complex type that contains information about the Route 53 DNS records that you want Cloud Map to create when you register an instance. The record types of a service can only be changed by deleting the service and recreating it with a new Dnsconfig.</td>
</tr>
<tr>
    <td><CopyableCode code="health_check_config" /></td>
    <td><code>object</code></td>
    <td>Public DNS and HTTP namespaces only. A complex type that contains settings for an optional health check. If you specify settings for a health check, Cloud Map associates the health check with the records that you specify in DnsConfig. For information about the charges for health checks, see Amazon Route 53 Pricing.</td>
</tr>
<tr>
    <td><CopyableCode code="health_check_custom_config" /></td>
    <td><code>object</code></td>
    <td>A complex type that contains information about an optional custom health check. If you specify a health check configuration, you can specify either HealthCheckCustomConfig or HealthCheckConfig but not both.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID that Cloud Map assigned to the service when you created it.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_count" /></td>
    <td><code>integer</code></td>
    <td>The number of instances that are currently associated with the service. Instances that were previously associated with the service but that are deleted aren't included in the count. The count might not reflect pending registrations and deregistrations.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the service. (pattern: &lt;code&gt;((?=^.&#123;1,127&#125;$)^(&#91;a-zA-Z0-9_&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,61&#125;&#91;a-zA-Z0-9_&#93;|&#91;a-zA-Z0-9&#93;)(\.(&#91;a-zA-Z0-9_&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,61&#125;&#91;a-zA-Z0-9_&#93;|&#91;a-zA-Z0-9&#93;))*$)|(^\.$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the namespace that was used to create the service.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that created the namespace with which the service is associated. If this isn't your account ID, it is the ID of the account that shared the namespace with your account. For more information about shared namespaces, see Cross-account Cloud Map namespace sharing in the Cloud Map Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Describes the systems that can be used to discover the service instances. DNS_HTTP The service instances can be discovered using either DNS queries or the DiscoverInstances API operation. HTTP The service instances can only be discovered using the DiscoverInstances API operation. DNS Reserved. (HTTP, DNS_HTTP, DNS)</td>
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
    <td><a href="#get_service"><CopyableCode code="get_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the settings for a specified service.</td>
</tr>
<tr>
    <td><a href="#create_service"><CopyableCode code="create_service" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a service. This action defines the configuration for the following entities: For public and private DNS namespaces, one of the following combinations of DNS records in Amazon Route 53: A AAAA A and AAAA SRV CNAME Optionally, a health check After you create the service, you can submit a RegisterInstance request, and Cloud Map uses the values in the configuration to create the specified entities. For the current quota on the number of instances that you can register using the same namespace and using the same service, see Cloud Map quotas in the Cloud Map Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_service"><CopyableCode code="update_service" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Submits a request to perform the following operations: Update the TTL setting for existing DnsRecords configurations Add, update, or delete HealthCheckConfig for a specified service You can't add, update, or delete a HealthCheckCustomConfig configuration. For public and private DNS namespaces, note the following: If you omit any existing DnsRecords or HealthCheckConfig configurations from an UpdateService request, the configurations are deleted from the service. If you omit an existing HealthCheckCustomConfig configuration from an UpdateService request, the configuration isn't deleted from the service. You can't call UpdateService and update settings in the following scenarios: When the service is associated with an HTTP namespace When the service is associated with a shared namespace and contains instances that were registered by Amazon Web Services accounts other than the account making the UpdateService call When you update settings for a service, Cloud Map also updates the corresponding settings in all the records and health checks that were created by using the specified service.</td>
</tr>
<tr>
    <td><a href="#delete_service"><CopyableCode code="delete_service" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified service and all associated service attributes. If the service still contains one or more registered instances, the request fails.</td>
</tr>
<tr>
    <td><a href="#list_services"><CopyableCode code="list_services" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists summary information for all the services that are associated with one or more namespaces.</td>
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
    defaultValue="get_service"
    values={[
        { label: 'get_service', value: 'get_service' }
    ]}
>
<TabItem value="get_service">

Gets the settings for a specified service.

```sql
SELECT
arn,
create_date,
created_by_account,
creator_request_id,
description,
dns_config,
health_check_config,
health_check_custom_config,
id,
instance_count,
name,
namespace_id,
resource_owner,
type
FROM aws.servicediscovery.services
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service"
    values={[
        { label: 'create_service', value: 'create_service' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service">

Creates a service. This action defines the configuration for the following entities: For public and private DNS namespaces, one of the following combinations of DNS records in Amazon Route 53: A AAAA A and AAAA SRV CNAME Optionally, a health check After you create the service, you can submit a RegisterInstance request, and Cloud Map uses the values in the configuration to create the specified entities. For the current quota on the number of instances that you can register using the same namespace and using the same service, see Cloud Map quotas in the Cloud Map Developer Guide.

```sql
INSERT INTO aws.servicediscovery.services (
Name,
NamespaceId,
CreatorRequestId,
Description,
DnsConfig,
HealthCheckConfig,
HealthCheckCustomConfig,
Tags,
Type,
region
)
SELECT 
'{{ Name }}',
'{{ NamespaceId }}',
'{{ CreatorRequestId }}',
'{{ Description }}',
'{{ DnsConfig }}',
'{{ HealthCheckConfig }}',
'{{ HealthCheckCustomConfig }}',
'{{ Tags }}',
'{{ Type }}',
'{{ region }}'
RETURNING
service
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: services
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the services resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name that you want to assign to the service. Do not include sensitive information in the name if the namespace is discoverable by public DNS queries. If you want Cloud Map to create an SRV record when you register an instance and you're using a system that requires a specific SRV format, such as HAProxy, specify the following for Name: Start the name with an underscore (_), such as _exampleservice. End the name with ._protocol, such as ._tcp. When you register an instance, Cloud Map creates an SRV record and assigns a name to the record by concatenating the service name and the namespace name (for example, _exampleservice._tcp.example.com). For services that are accessible by DNS queries, you can't create multiple services with names that differ only by case (such as EXAMPLE and example). Otherwise, these services have the same DNS name and can't be distinguished. However, if you use a namespace that's only accessible by API calls, then you can create services that with names that differ only by case.
    - name: NamespaceId
      value: "{{ NamespaceId }}"
      description: |
        The ID or Amazon Resource Name (ARN) of the namespace that you want to use to create the service. For namespaces shared with your Amazon Web Services account, specify the namespace ARN. For more information about shared namespaces, see Cross-account Cloud Map namespace sharing in the Cloud Map Developer Guide.
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
      description: |
        A unique string that identifies the request and that allows failed CreateService requests to be retried without the risk of running the operation twice. CreatorRequestId can be any unique string (for example, a date/timestamp).
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the service.
    - name: DnsConfig
      description: |
        A complex type that contains information about the Amazon Route 53 records that you want Cloud Map to create when you register an instance.
      value:
        NamespaceId: "{{ NamespaceId }}"
        RoutingPolicy: "{{ RoutingPolicy }}"
        DnsRecords:
          - Type: "{{ Type }}"
            TTL: {{ TTL }}
    - name: HealthCheckConfig
      description: |
        Public DNS and HTTP namespaces only. A complex type that contains settings for an optional Route 53 health check. If you specify settings for a health check, Cloud Map associates the health check with all the Route 53 DNS records that you specify in DnsConfig. If you specify a health check configuration, you can specify either HealthCheckCustomConfig or HealthCheckConfig but not both. For information about the charges for health checks, see Cloud Map Pricing.
      value:
        Type: "{{ Type }}"
        ResourcePath: "{{ ResourcePath }}"
        FailureThreshold: {{ FailureThreshold }}
    - name: HealthCheckCustomConfig
      description: |
        A complex type that contains information about an optional custom health check. If you specify a health check configuration, you can specify either HealthCheckCustomConfig or HealthCheckConfig but not both. You can't add, update, or delete a HealthCheckCustomConfig configuration from an existing service.
      value:
        FailureThreshold: {{ FailureThreshold }}
    - name: Tags
      description: |
        The tags to add to the service. Each tag consists of a key and an optional value that you define. Tags keys can be up to 128 characters in length, and tag values can be up to 256 characters in length.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: Type
      value: "{{ Type }}"
      description: |
        If present, specifies that the service instances are only discoverable using the DiscoverInstances API operation. No DNS records is registered for the service instances. The only valid value is HTTP.
      valid_values: ['HTTP']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service"
    values={[
        { label: 'update_service', value: 'update_service' }
    ]}
>
<TabItem value="update_service">

Submits a request to perform the following operations: Update the TTL setting for existing DnsRecords configurations Add, update, or delete HealthCheckConfig for a specified service You can't add, update, or delete a HealthCheckCustomConfig configuration. For public and private DNS namespaces, note the following: If you omit any existing DnsRecords or HealthCheckConfig configurations from an UpdateService request, the configurations are deleted from the service. If you omit an existing HealthCheckCustomConfig configuration from an UpdateService request, the configuration isn't deleted from the service. You can't call UpdateService and update settings in the following scenarios: When the service is associated with an HTTP namespace When the service is associated with a shared namespace and contains instances that were registered by Amazon Web Services accounts other than the account making the UpdateService call When you update settings for a service, Cloud Map also updates the corresponding settings in all the records and health checks that were created by using the specified service.

```sql
UPDATE aws.servicediscovery.services
SET 
Id = '{{ Id }}',
Service = '{{ Service }}'
WHERE 
region = '{{ region }}' --required
RETURNING
operation_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service"
    values={[
        { label: 'delete_service', value: 'delete_service' }
    ]}
>
<TabItem value="delete_service">

Deletes a specified service and all associated service attributes. If the service still contains one or more registered instances, the request fails.

```sql
DELETE FROM aws.servicediscovery.services
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_services"
    values={[
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="list_services">

Lists summary information for all the services that are associated with one or more namespaces.

```sql
EXEC aws.servicediscovery.services.list_services 
@region='{{ region }}' --required 
@@json=
'{
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}, 
"Filters": "{{ Filters }}"
}'
;
```
</TabItem>
</Tabs>
