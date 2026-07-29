--- 
title: load_balancers
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancers
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>load_balancers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="load_balancers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.load_balancers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_load_balancer"
    values={[
        { label: 'get_load_balancer', value: 'get_load_balancer' },
        { label: 'get_load_balancers', value: 'get_load_balancers' }
    ]}
>
<TabItem value="get_load_balancer">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the load balancer (my-load-balancer). (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the load balancer. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_options" /></td>
    <td><code>object</code></td>
    <td>A string to string map of the configuration options for your load balancer. Valid values are listed below.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when your load balancer was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_name" /></td>
    <td><code>string</code></td>
    <td>The DNS name of your Lightsail load balancer. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="health_check_path" /></td>
    <td><code>string</code></td>
    <td>The path you specified to perform your health checks. If no path is specified, the load balancer tries to make a request to the default (root) page. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="https_redirection_enabled" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_health_summary" /></td>
    <td><code>array</code></td>
    <td>An array of InstanceHealthSummary objects describing the health of the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_port" /></td>
    <td><code>integer</code></td>
    <td>The port where the load balancer will direct traffic to your Lightsail instances. For HTTP traffic, it's port 80. For HTTPS traffic, it's port 443.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address_type" /></td>
    <td><code>string</code></td>
    <td>The IP address type of the load balancer. The possible values are ipv4 for IPv4 only, ipv6 for IPv6 only, and dualstack for IPv4 and IPv6. (dualstack, ipv4, ipv6)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The AWS Region where your load balancer was created (us-east-2a). Lightsail automatically creates your load balancer across Availability Zones.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol you have enabled for your load balancer. Valid values are below. You can't just have HTTP_HTTPS, but you can have just HTTP. (HTTP_HTTPS, HTTP)</td>
</tr>
<tr>
    <td><CopyableCode code="public_ports" /></td>
    <td><code>array</code></td>
    <td>An array of public port settings for your load balancer. For HTTP, use port 80. For HTTPS, use port 443.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The resource type (LoadBalancer. (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The status of your load balancer. Valid values are below. (active, provisioning, active_impaired, failed, unknown)</td>
</tr>
<tr>
    <td><CopyableCode code="support_code" /></td>
    <td><code>string</code></td>
    <td>The support code. Include this code in your email to support when you have questions about your Lightsail load balancer. This code enables our support team to look up your Lightsail information more easily.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="tls_certificate_summaries" /></td>
    <td><code>array</code></td>
    <td>An array of LoadBalancerTlsCertificateSummary objects that provide additional information about the SSL/TLS certificates. For example, if true, the certificate is attached to the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="tls_policy_name" /></td>
    <td><code>string</code></td>
    <td>The name of the TLS security policy for the load balancer. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_load_balancers">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the load balancer (my-load-balancer). (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the load balancer. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_options" /></td>
    <td><code>object</code></td>
    <td>A string to string map of the configuration options for your load balancer. Valid values are listed below.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when your load balancer was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_name" /></td>
    <td><code>string</code></td>
    <td>The DNS name of your Lightsail load balancer. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="health_check_path" /></td>
    <td><code>string</code></td>
    <td>The path you specified to perform your health checks. If no path is specified, the load balancer tries to make a request to the default (root) page. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="https_redirection_enabled" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_health_summary" /></td>
    <td><code>array</code></td>
    <td>An array of InstanceHealthSummary objects describing the health of the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_port" /></td>
    <td><code>integer</code></td>
    <td>The port where the load balancer will direct traffic to your Lightsail instances. For HTTP traffic, it's port 80. For HTTPS traffic, it's port 443.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address_type" /></td>
    <td><code>string</code></td>
    <td>The IP address type of the load balancer. The possible values are ipv4 for IPv4 only, ipv6 for IPv6 only, and dualstack for IPv4 and IPv6. (dualstack, ipv4, ipv6)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The AWS Region where your load balancer was created (us-east-2a). Lightsail automatically creates your load balancer across Availability Zones.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol you have enabled for your load balancer. Valid values are below. You can't just have HTTP_HTTPS, but you can have just HTTP. (HTTP_HTTPS, HTTP)</td>
</tr>
<tr>
    <td><CopyableCode code="public_ports" /></td>
    <td><code>array</code></td>
    <td>An array of public port settings for your load balancer. For HTTP, use port 80. For HTTPS, use port 443.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The resource type (LoadBalancer. (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The status of your load balancer. Valid values are below. (active, provisioning, active_impaired, failed, unknown)</td>
</tr>
<tr>
    <td><CopyableCode code="support_code" /></td>
    <td><code>string</code></td>
    <td>The support code. Include this code in your email to support when you have questions about your Lightsail load balancer. This code enables our support team to look up your Lightsail information more easily.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="tls_certificate_summaries" /></td>
    <td><code>array</code></td>
    <td>An array of LoadBalancerTlsCertificateSummary objects that provide additional information about the SSL/TLS certificates. For example, if true, the certificate is attached to the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="tls_policy_name" /></td>
    <td><code>string</code></td>
    <td>The name of the TLS security policy for the load balancer. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
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
    <td><a href="#get_load_balancer"><CopyableCode code="get_load_balancer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified Lightsail load balancer.</td>
</tr>
<tr>
    <td><a href="#get_load_balancers"><CopyableCode code="get_load_balancers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all load balancers in an account.</td>
</tr>
<tr>
    <td><a href="#create_load_balancer"><CopyableCode code="create_load_balancer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-loadBalancerName"><code>loadBalancerName</code></a>, <a href="#parameter-instancePort"><code>instancePort</code></a></td>
    <td></td>
    <td>Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see Configure your Lightsail instances for load balancing. You can create up to 10 load balancers per AWS Region in your account. When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the UpdateLoadBalancerAttribute operation. The create load balancer operation supports tag-based access control via request tags. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_load_balancer_attribute"><CopyableCode code="update_load_balancer_attribute" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-loadBalancerName"><code>loadBalancerName</code></a>, <a href="#parameter-attributeName"><code>attributeName</code></a>, <a href="#parameter-attributeValue"><code>attributeValue</code></a></td>
    <td></td>
    <td>Updates the specified attribute for a load balancer. You can only update one attribute at a time. The update load balancer attribute operation supports tag-based access control via resource tags applied to the resource identified by load balancer name. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#attach_instances_to_load_balancer"><CopyableCode code="attach_instances_to_load_balancer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-loadBalancerName"><code>loadBalancerName</code></a>, <a href="#parameter-instanceNames"><code>instanceNames</code></a></td>
    <td></td>
    <td>Attaches one or more Lightsail instances to a load balancer. After some time, the instances are attached to the load balancer and the health check status is available. The attach instances to load balancer operation supports tag-based access control via resource tags applied to the resource identified by load balancer name. For more information, see the Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_load_balancer"><CopyableCode code="delete_load_balancer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again. The delete load balancer operation supports tag-based access control via resource tags applied to the resource identified by load balancer name. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#detach_instances_from_load_balancer"><CopyableCode code="detach_instances_from_load_balancer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-loadBalancerName"><code>loadBalancerName</code></a>, <a href="#parameter-instanceNames"><code>instanceNames</code></a></td>
    <td></td>
    <td>Detaches the specified instances from a Lightsail load balancer. This operation waits until the instances are no longer needed before they are detached from the load balancer. The detach instances from load balancer operation supports tag-based access control via resource tags applied to the resource identified by load balancer name. For more information, see the Amazon Lightsail Developer Guide.</td>
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
    defaultValue="get_load_balancer"
    values={[
        { label: 'get_load_balancer', value: 'get_load_balancer' },
        { label: 'get_load_balancers', value: 'get_load_balancers' }
    ]}
>
<TabItem value="get_load_balancer">

Returns information about the specified Lightsail load balancer.

```sql
SELECT
name,
arn,
configuration_options,
created_at,
dns_name,
health_check_path,
https_redirection_enabled,
instance_health_summary,
instance_port,
ip_address_type,
location,
protocol,
public_ports,
resource_type,
state,
support_code,
tags,
tls_certificate_summaries,
tls_policy_name
FROM aws.lightsail.load_balancers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_load_balancers">

Returns information about all load balancers in an account.

```sql
SELECT
name,
arn,
configuration_options,
created_at,
dns_name,
health_check_path,
https_redirection_enabled,
instance_health_summary,
instance_port,
ip_address_type,
location,
protocol,
public_ports,
resource_type,
state,
support_code,
tags,
tls_certificate_summaries,
tls_policy_name
FROM aws.lightsail.load_balancers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_load_balancer"
    values={[
        { label: 'create_load_balancer', value: 'create_load_balancer' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_load_balancer">

Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see Configure your Lightsail instances for load balancing. You can create up to 10 load balancers per AWS Region in your account. When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the UpdateLoadBalancerAttribute operation. The create load balancer operation supports tag-based access control via request tags. For more information, see the Amazon Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.load_balancers (
loadBalancerName,
instancePort,
healthCheckPath,
certificateName,
certificateDomainName,
certificateAlternativeNames,
tags,
ipAddressType,
tlsPolicyName,
region
)
SELECT 
'{{ loadBalancerName }}' /* required */,
{{ instancePort }} /* required */,
'{{ healthCheckPath }}',
'{{ certificateName }}',
'{{ certificateDomainName }}',
'{{ certificateAlternativeNames }}',
'{{ tags }}',
'{{ ipAddressType }}',
'{{ tlsPolicyName }}',
'{{ region }}'
RETURNING
operations
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: load_balancers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the load_balancers resource.
    - name: loadBalancerName
      value: "{{ loadBalancerName }}"
      description: |
        The name of your load balancer.
    - name: instancePort
      value: {{ instancePort }}
      description: |
        The instance port where you're creating your load balancer.
    - name: healthCheckPath
      value: "{{ healthCheckPath }}"
      description: |
        The path you provided to perform the load balancer health check. If you didn't specify a health check path, Lightsail uses the root path of your website ("/"). You may want to specify a custom health check path other than the root of your application if your home page loads slowly or has a lot of media or scripting on it.
    - name: certificateName
      value: "{{ certificateName }}"
      description: |
        The name of the SSL/TLS certificate. If you specify certificateName, then certificateDomainName is required (and vice-versa).
    - name: certificateDomainName
      value: "{{ certificateDomainName }}"
      description: |
        The domain name with which your certificate is associated (example.com). If you specify certificateDomainName, then certificateName is required (and vice-versa).
    - name: certificateAlternativeNames
      value:
        - "{{ certificateAlternativeNames }}"
      description: |
        The optional alternative domains and subdomains to use with your SSL/TLS certificate (www.example.com, example.com, m.example.com, blog.example.com).
    - name: tags
      description: |
        The tag keys and optional values to add to the resource during create. Use the TagResource action to tag a resource after it's created.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: ipAddressType
      value: "{{ ipAddressType }}"
      description: |
        The IP address type for the load balancer. The possible values are ipv4 for IPv4 only, ipv6 for IPv6 only, and dualstack for IPv4 and IPv6. The default value is dualstack.
      valid_values: ['dualstack', 'ipv4', 'ipv6']
    - name: tlsPolicyName
      value: "{{ tlsPolicyName }}"
      description: |
        The name of the TLS policy to apply to the load balancer. Use the GetLoadBalancerTlsPolicies action to get a list of TLS policy names that you can specify. For more information about load balancer TLS policies, see Configuring TLS security policies on your Amazon Lightsail load balancers in the Amazon Lightsail Developer Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_load_balancer_attribute"
    values={[
        { label: 'update_load_balancer_attribute', value: 'update_load_balancer_attribute' },
        { label: 'attach_instances_to_load_balancer', value: 'attach_instances_to_load_balancer' }
    ]}
>
<TabItem value="update_load_balancer_attribute">

Updates the specified attribute for a load balancer. You can only update one attribute at a time. The update load balancer attribute operation supports tag-based access control via resource tags applied to the resource identified by load balancer name. For more information, see the Amazon Lightsail Developer Guide.

```sql
UPDATE aws.lightsail.load_balancers
SET 
loadBalancerName = '{{ loadBalancerName }}',
attributeName = '{{ attributeName }}',
attributeValue = '{{ attributeValue }}'
WHERE 
region = '{{ region }}' --required
AND loadBalancerName = '{{ loadBalancerName }}' --required
AND attributeName = '{{ attributeName }}' --required
AND attributeValue = '{{ attributeValue }}' --required
RETURNING
operations;
```
</TabItem>
<TabItem value="attach_instances_to_load_balancer">

Attaches one or more Lightsail instances to a load balancer. After some time, the instances are attached to the load balancer and the health check status is available. The attach instances to load balancer operation supports tag-based access control via resource tags applied to the resource identified by load balancer name. For more information, see the Lightsail Developer Guide.

```sql
UPDATE aws.lightsail.load_balancers
SET 
loadBalancerName = '{{ loadBalancerName }}',
instanceNames = '{{ instanceNames }}'
WHERE 
region = '{{ region }}' --required
AND loadBalancerName = '{{ loadBalancerName }}' --required
AND instanceNames = '{{ instanceNames }}' --required
RETURNING
operations;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_load_balancer"
    values={[
        { label: 'delete_load_balancer', value: 'delete_load_balancer' }
    ]}
>
<TabItem value="delete_load_balancer">

Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again. The delete load balancer operation supports tag-based access control via resource tags applied to the resource identified by load balancer name. For more information, see the Amazon Lightsail Developer Guide.

```sql
DELETE FROM aws.lightsail.load_balancers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detach_instances_from_load_balancer"
    values={[
        { label: 'detach_instances_from_load_balancer', value: 'detach_instances_from_load_balancer' }
    ]}
>
<TabItem value="detach_instances_from_load_balancer">

Detaches the specified instances from a Lightsail load balancer. This operation waits until the instances are no longer needed before they are detached from the load balancer. The detach instances from load balancer operation supports tag-based access control via resource tags applied to the resource identified by load balancer name. For more information, see the Amazon Lightsail Developer Guide.

```sql
EXEC aws.lightsail.load_balancers.detach_instances_from_load_balancer 
@region='{{ region }}' --required 
@@json=
'{
"loadBalancerName": "{{ loadBalancerName }}", 
"instanceNames": "{{ instanceNames }}"
}'
;
```
</TabItem>
</Tabs>
