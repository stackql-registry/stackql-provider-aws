--- 
title: distribution_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - distribution_configs
  - cloudfront
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

Creates, updates, deletes, gets or lists a <code>distribution_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="distribution_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.distribution_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_distribution_config"
    values={[
        { label: 'get_distribution_config', value: 'get_distribution_config' }
    ]}
>
<TabItem value="get_distribution_config">

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
    <td><CopyableCode code="aliases" /></td>
    <td><code>string</code></td>
    <td>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see Unsupported features for SaaS Manager for Amazon CloudFront in the Amazon CloudFront Developer Guide. A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.</td>
</tr>
<tr>
    <td><CopyableCode code="anycast_ip_list_id" /></td>
    <td><code>string</code></td>
    <td>To use this field for a multi-tenant distribution, use a connection group instead. For more information, see ConnectionGroup. ID of the Anycast static IP list that is associated with the distribution.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_behaviors" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains zero or more CacheBehavior elements.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_tag_config" /></td>
    <td><code>string</code></td>
    <td>Configuration for cache tag extraction from origin responses. When specified, CloudFront reads the header named in HeaderName from origin responses and stores the comma-separated values as cache tags on the object. Distributions without CacheTagConfig do not extract tags. When CacheTagConfig is removed from a distribution via UpdateDistribution, CloudFront stops extracting tags from origin responses. Changing the HeaderName on an existing distribution does not retroactively affect previously cached objects. Tag-based invalidations will not apply to objects already cached using a previous header. To ensure tag invalidations function after updating the header name, use path-based invalidations to recache all objects that use cache tags.</td>
</tr>
<tr>
    <td><CopyableCode code="caller_reference" /></td>
    <td><code>string</code></td>
    <td>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed. If the value of CallerReference is new (regardless of the content of the DistributionConfig object), CloudFront creates a new distribution. If CallerReference is a value that you already sent in a previous request to create a distribution, CloudFront returns a DistributionAlreadyExists error.</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>A comment to describe the distribution. The comment cannot be longer than 128 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_function_association" /></td>
    <td><code>string</code></td>
    <td>The distribution's connection function association.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_mode" /></td>
    <td><code>string</code></td>
    <td>This field specifies whether the connection mode is through a standard distribution (direct) or a multi-tenant distribution with distribution tenants (tenant-only).</td>
</tr>
<tr>
    <td><CopyableCode code="continuous_deployment_policy_id" /></td>
    <td><code>string</code></td>
    <td>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see Unsupported features for SaaS Manager for Amazon CloudFront in the Amazon CloudFront Developer Guide. The identifier of a continuous deployment policy. For more information, see CreateContinuousDeploymentPolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_error_responses" /></td>
    <td><code>string</code></td>
    <td>A complex type that controls the following: Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer. How long CloudFront caches HTTP status codes in the 4xx and 5xx range. For more information about custom error pages, see Customizing Error Responses in the Amazon CloudFront Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="default_cache_behavior" /></td>
    <td><code>string</code></td>
    <td>A complex type that describes the default cache behavior if you don't specify a CacheBehavior element or if files don't match any of the values of PathPattern in CacheBehavior elements. You must create exactly one default cache behavior.</td>
</tr>
<tr>
    <td><CopyableCode code="default_root_object" /></td>
    <td><code>string</code></td>
    <td>When a viewer requests the root URL for your distribution, the default root object is the object that you want CloudFront to request from your origin. For example, if your root URL is https:​//www.example.com, you can specify CloudFront to return the index.html file as the default root object. You can specify a default root object so that viewers see a specific file or object, instead of another object in your distribution (for example, https:​//www.example.com/product-description.html). A default root object avoids exposing the contents of your distribution. You can specify the object name or a path to the object name (for example, index.html or exampleFolderName/index.html). Your string can't begin with a forward slash (/). Only specify the object name or the path to the object. If you don't want to specify a default root object when you create a distribution, include an empty DefaultRootObject element. To delete the default root object from an existing distribution, update the distribution configuration and include an empty DefaultRootObject element. To replace the default root object, update the distribution configuration and specify the new object. For more information about the default root object, see Specify a default root object in the Amazon CloudFront Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>From this field, you can enable or disable the selected distribution.</td>
</tr>
<tr>
    <td><CopyableCode code="http_version" /></td>
    <td><code>string</code></td>
    <td>(Optional) Specify the HTTP version(s) that you want viewers to use to communicate with CloudFront. The default value for new web distributions is http2. Viewers that don't support HTTP/2 automatically use an earlier HTTP version. For viewers and CloudFront to use HTTP/2, viewers must support TLSv1.2 or later, and must support Server Name Indication (SNI). For viewers and CloudFront to use HTTP/3, viewers must support TLSv1.3 and Server Name Indication (SNI). CloudFront supports HTTP/3 connection migration to allow the viewer to switch networks without losing connection. For more information about connection migration, see Connection Migration at RFC 9000. For more information about supported TLSv1.3 ciphers, see Supported protocols and ciphers between viewers and CloudFront.</td>
</tr>
<tr>
    <td><CopyableCode code="is_ipv6_enabled" /></td>
    <td><code>boolean</code></td>
    <td>To use this field for a multi-tenant distribution, use a connection group instead. For more information, see ConnectionGroup. If you want CloudFront to respond to IPv6 DNS requests with an IPv6 address for your distribution, specify true. If you specify false, CloudFront responds to IPv6 DNS requests with the DNS response code NOERROR and with no IP addresses. This allows viewers to submit a second request, for an IPv4 address for your distribution. In general, you should enable IPv6 if you have users on IPv6 networks who want to access your content. However, if you're using signed URLs or signed cookies to restrict access to your content, and if you're using a custom policy that includes the IpAddress parameter to restrict the IP addresses that can access your content, don't enable IPv6. If you want to restrict access to some content by IP address and not restrict access to other content (or restrict access but not by IP address), you can create two distributions. For more information, see Creating a Signed URL Using a Custom Policy in the Amazon CloudFront Developer Guide. If you're using an Route 53 Amazon Web Services Integration alias resource record set to route traffic to your CloudFront distribution, you need to create a second alias resource record set when both of the following are true: You enable IPv6 for the distribution You're using alternate domain names in the URLs for your objects For more information, see Routing Traffic to an Amazon CloudFront Web Distribution by Using Your Domain Name in the Route 53 Amazon Web Services Integration Developer Guide. If you created a CNAME resource record set, either with Route 53 Amazon Web Services Integration or with another DNS service, you don't need to make any changes. A CNAME record will route traffic to your distribution regardless of the IP address format of the viewer request.</td>
</tr>
<tr>
    <td><CopyableCode code="logging" /></td>
    <td><code>string</code></td>
    <td>A complex type that controls whether access logs are written for the distribution. For more information about logging, see Access Logs in the Amazon CloudFront Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="origin_groups" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains information about origin groups for this distribution.</td>
</tr>
<tr>
    <td><CopyableCode code="origins" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains information about origins for this distribution.</td>
</tr>
<tr>
    <td><CopyableCode code="price_class" /></td>
    <td><code>string</code></td>
    <td>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see Unsupported features for SaaS Manager for Amazon CloudFront in the Amazon CloudFront Developer Guide. The price class that corresponds with the maximum price that you want to pay for CloudFront service. If you specify PriceClass_All, CloudFront responds to requests for your objects from all CloudFront edge locations. If you specify a price class other than PriceClass_All, CloudFront serves your objects from the CloudFront edge location that has the lowest latency among the edge locations in your price class. Viewers who are in or near regions that are excluded from your specified price class may encounter slower performance. For more information about price classes, see Choosing the Price Class for a CloudFront Distribution in the Amazon CloudFront Developer Guide. For information about CloudFront pricing, including how price classes (such as Price Class 100) map to CloudFront regions, see Amazon CloudFront Pricing.</td>
</tr>
<tr>
    <td><CopyableCode code="restrictions" /></td>
    <td><code>string</code></td>
    <td>A complex type that identifies ways in which you want to restrict distribution of your content.</td>
</tr>
<tr>
    <td><CopyableCode code="staging" /></td>
    <td><code>boolean</code></td>
    <td>This field only supports standard distributions. You can't specify this field for multi-tenant distributions. For more information, see Unsupported features for SaaS Manager for Amazon CloudFront in the Amazon CloudFront Developer Guide. A Boolean that indicates whether this is a staging distribution. When this value is true, this is a staging distribution. When this value is false, this is not a staging distribution.</td>
</tr>
<tr>
    <td><CopyableCode code="tenant_config" /></td>
    <td><code>string</code></td>
    <td>This field only supports multi-tenant distributions. You can't specify this field for standard distributions. For more information, see Unsupported features for SaaS Manager for Amazon CloudFront in the Amazon CloudFront Developer Guide. A distribution tenant configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="viewer_certificate" /></td>
    <td><code>string</code></td>
    <td>A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.</td>
</tr>
<tr>
    <td><CopyableCode code="viewer_mtls_config" /></td>
    <td><code>string</code></td>
    <td>The distribution's viewer mTLS configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="web_acl_id" /></td>
    <td><code>string</code></td>
    <td>Multi-tenant distributions only support WAF V2 web ACLs. A unique identifier that specifies the WAF web ACL, if any, to associate with this distribution. To specify a web ACL created using the latest version of WAF, use the ACL ARN, for example arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111. To specify a web ACL created using WAF Classic, use the ACL ID, for example a1b2c3d4-5678-90ab-cdef-EXAMPLE11111. WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to CloudFront, and lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, CloudFront responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page when a request is blocked. For more information about WAF, see the WAF Developer Guide.</td>
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
    <td><a href="#get_distribution_config"><CopyableCode code="get_distribution_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the configuration information about a distribution.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The distribution's ID. If the ID is empty, an empty distribution configuration is returned.</td>
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
    defaultValue="get_distribution_config"
    values={[
        { label: 'get_distribution_config', value: 'get_distribution_config' }
    ]}
>
<TabItem value="get_distribution_config">

Get the configuration information about a distribution.

```sql
SELECT
aliases,
anycast_ip_list_id,
cache_behaviors,
cache_tag_config,
caller_reference,
comment,
connection_function_association,
connection_mode,
continuous_deployment_policy_id,
custom_error_responses,
default_cache_behavior,
default_root_object,
enabled,
http_version,
is_ipv6_enabled,
logging,
origin_groups,
origins,
price_class,
restrictions,
staging,
tenant_config,
viewer_certificate,
viewer_mtls_config,
web_acl_id
FROM aws.cloudfront.distribution_configs
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
