--- 
title: load_balancer_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancer_attributes
  - elbv2
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

Creates, updates, deletes, gets or lists a <code>load_balancer_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="load_balancer_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elbv2.load_balancer_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_load_balancer_attributes"
    values={[
        { label: 'describe_load_balancer_attributes', value: 'describe_load_balancer_attributes' }
    ]}
>
<TabItem value="describe_load_balancer_attributes">

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
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The name of the attribute. The following attributes are supported by all load balancers: deletion_protection.enabled - Indicates whether deletion protection is enabled. The value is true or false. The default is false. load_balancing.cross_zone.enabled - Indicates whether cross-zone load balancing is enabled. The possible values are true and false. The default for Network Load Balancers and Gateway Load Balancers is false. The default for Application Load Balancers is true, and can't be changed. The following attributes are supported by both Application Load Balancers and Network Load Balancers: access_logs.s3.enabled - Indicates whether access logs are enabled. The value is true or false. The default is false. access_logs.s3.bucket - The name of the S3 bucket for the access logs. This attribute is required if access logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket. access_logs.s3.prefix - The prefix for the location in the S3 bucket for the access logs. ipv6.deny_all_igw_traffic - Blocks internet gateway (IGW) access to the load balancer. It is set to false for internet-facing load balancers and true for internal load balancers, preventing unintended access to your internal load balancer through an internet gateway. zonal_shift.config.enabled - Indicates whether zonal shift is enabled. The possible values are true and false. The default is false. The following attributes are supported by only Application Load Balancers: idle_timeout.timeout_seconds - The idle timeout value, in seconds. The valid range is 1-4000 seconds. The default is 60 seconds. client_keep_alive.seconds - The client keep alive value, in seconds. The valid range is 60-604800 seconds. The default is 3600 seconds. connection_logs.s3.enabled - Indicates whether connection logs are enabled. The value is true or false. The default is false. connection_logs.s3.bucket - The name of the S3 bucket for the connection logs. This attribute is required if connection logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket. connection_logs.s3.prefix - The prefix for the location in the S3 bucket for the connection logs. health_check_logs.s3.enabled - Indicates whether health check logs are enabled. The value is true or false. The default is false. health_check_logs.s3.bucket - The name of the S3 bucket for the health check logs. This attribute is required if health check logs are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permissions to write to the bucket. health_check_logs.s3.prefix - The prefix for the location in the S3 bucket for the health check logs. routing.http.desync_mitigation_mode - Determines how the load balancer handles requests that might pose a security risk to your application. The possible values are monitor, defensive, and strictest. The default is defensive. routing.http.drop_invalid_header_fields.enabled - Indicates whether HTTP headers with invalid header fields are removed by the load balancer (true) or routed to targets (false). The default is false. routing.http.preserve_host_header.enabled - Indicates whether the Application Load Balancer should preserve the Host header in the HTTP request and send it to the target without any change. The possible values are true and false. The default is false. routing.http.x_amzn_tls_version_and_cipher_suite.enabled - Indicates whether the two headers (x-amzn-tls-version and x-amzn-tls-cipher-suite), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target. The x-amzn-tls-version header has information about the TLS protocol version negotiated with the client, and the x-amzn-tls-cipher-suite header has information about the cipher suite negotiated with the client. Both headers are in OpenSSL format. The possible values for the attribute are true and false. The default is false. routing.http.xff_client_port.enabled - Indicates whether the X-Forwarded-For header should preserve the source port that the client used to connect to the load balancer. The possible values are true and false. The default is false. routing.http.xff_header_processing.mode - Enables you to modify, preserve, or remove the X-Forwarded-For header in the HTTP request before the Application Load Balancer sends the request to the target. The possible values are append, preserve, and remove. The default is append. If the value is append, the Application Load Balancer adds the client IP address (of the last hop) to the X-Forwarded-For header in the HTTP request before it sends it to targets. If the value is preserve the Application Load Balancer preserves the X-Forwarded-For header in the HTTP request, and sends it to targets without any change. If the value is remove, the Application Load Balancer removes the X-Forwarded-For header in the HTTP request before it sends it to targets. routing.http2.enabled - Indicates whether clients can connect to the load balancer using HTTP/2. If true, clients can connect using HTTP/2 or HTTP/1.1. However, all client requests are subject to the stricter HTTP/2 header validation rules. For example, message header names must contain only alphanumeric characters and hyphens. If false, clients must connect using HTTP/1.1. The default is true. waf.fail_open.enabled - Indicates whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to Amazon Web Services WAF. The possible values are true and false. The default is false. The following attributes are supported by only Network Load Balancers: dns_record.client_routing_policy - Indicates how traffic is distributed among the load balancer Availability Zones. The possible values are availability_zone_affinity with 100 percent zonal affinity, partial_availability_zone_affinity with 85 percent zonal affinity, and any_availability_zone with 0 percent zonal affinity. secondary_ips.auto_assigned.per_subnet - The number of secondary IP addresses to configure for your load balancer nodes. Use to address port allocation errors if you can't add targets. The valid range is 0 to 7. The default is 0. After you set this value, you can't decrease it.</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value of the attribute.</td>
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
    <td><a href="#describe_load_balancer_attributes"><CopyableCode code="describe_load_balancer_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-LoadBalancerArn"><code>LoadBalancerArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. For more information, see the following: Load balancer attributes in the Application Load Balancers Guide Load balancer attributes in the Network Load Balancers Guide Load balancer attributes in the Gateway Load Balancers Guide</td>
</tr>
<tr>
    <td><a href="#modify_load_balancer_attributes"><CopyableCode code="modify_load_balancer_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-LoadBalancerArn"><code>LoadBalancerArn</code></a>, <a href="#parameter-Attributes"><code>Attributes</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies the specified attributes of the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.</td>
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
<tr id="parameter-Attributes">
    <td><CopyableCode code="Attributes" /></td>
    <td><code>array</code></td>
    <td>The load balancer attributes.</td>
</tr>
<tr id="parameter-LoadBalancerArn">
    <td><CopyableCode code="LoadBalancerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the load balancer.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_load_balancer_attributes"
    values={[
        { label: 'describe_load_balancer_attributes', value: 'describe_load_balancer_attributes' }
    ]}
>
<TabItem value="describe_load_balancer_attributes">

Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. For more information, see the following: Load balancer attributes in the Application Load Balancers Guide Load balancer attributes in the Network Load Balancers Guide Load balancer attributes in the Gateway Load Balancers Guide

```sql
SELECT
key,
value
FROM aws.elbv2.load_balancer_attributes
WHERE LoadBalancerArn = '{{ LoadBalancerArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_load_balancer_attributes"
    values={[
        { label: 'modify_load_balancer_attributes', value: 'modify_load_balancer_attributes' }
    ]}
>
<TabItem value="modify_load_balancer_attributes">

Modifies the specified attributes of the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.

```sql
UPDATE aws.elbv2.load_balancer_attributes
SET 
-- No updatable properties
WHERE 
LoadBalancerArn = '{{ LoadBalancerArn }}' --required
AND Attributes = '{{ Attributes }}' --required
AND region = '{{ region }}' --required
RETURNING
line_items;
```
</TabItem>
</Tabs>
