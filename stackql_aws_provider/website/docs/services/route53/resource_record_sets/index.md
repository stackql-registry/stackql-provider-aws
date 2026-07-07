--- 
title: resource_record_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_record_sets
  - route53
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

Creates, updates, deletes, gets or lists a <code>resource_record_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_record_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.resource_record_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_record_sets"
    values={[
        { label: 'list_resource_record_sets', value: 'list_resource_record_sets' }
    ]}
>
<TabItem value="list_resource_record_sets">

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
    <td><CopyableCode code="AliasTarget" /></td>
    <td><code>string</code></td>
    <td>Alias resource record sets only: Information about the Amazon Web Services resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to. If you're creating resource records sets for a private hosted zone, note the following: You can't create an alias resource record set in a private hosted zone to route traffic to a CloudFront distribution. For information about creating failover resource record sets in a private hosted zone, see Configuring Failover in a Private Hosted Zone in the Amazon Route 53 Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="CidrRoutingConfig" /></td>
    <td><code>string</code></td>
    <td>The object that is specified in resource record set object when you are linking a resource record set to a CIDR location. A LocationName with an asterisk “*” can be used to create a default CIDR record. CollectionId is still required for default record.</td>
</tr>
<tr>
    <td><CopyableCode code="Failover" /></td>
    <td><code>string</code></td>
    <td>Failover resource record sets only: To configure failover, you add the Failover element to two resource record sets. For one resource record set, you specify PRIMARY as the value for Failover; for the other resource record set, you specify SECONDARY. In addition, you include the HealthCheckId element and specify the health check that you want Amazon Route 53 to perform for each resource record set. Except where noted, the following failover behaviors assume that you have included the HealthCheckId element in both resource record sets: When the primary resource record set is healthy, Route 53 responds to DNS queries with the applicable value from the primary resource record set regardless of the health of the secondary resource record set. When the primary resource record set is unhealthy and the secondary resource record set is healthy, Route 53 responds to DNS queries with the applicable value from the secondary resource record set. When the secondary resource record set is unhealthy, Route 53 responds to DNS queries with the applicable value from the primary resource record set regardless of the health of the primary resource record set. If you omit the HealthCheckId element for the secondary resource record set, and if the primary resource record set is unhealthy, Route 53 always responds to DNS queries with the applicable value from the secondary resource record set. This is true regardless of the health of the associated endpoint. You can't create non-failover resource record sets that have the same values for the Name and Type elements as failover resource record sets. For failover alias resource record sets, you must also include the EvaluateTargetHealth element and set the value to true. For more information about configuring failover for Route 53, see the following topics in the Amazon Route 53 Developer Guide: Route 53 Health Checks and DNS Failover Configuring Failover in a Private Hosted Zone</td>
</tr>
<tr>
    <td><CopyableCode code="GeoLocation" /></td>
    <td><code>string</code></td>
    <td>Geolocation resource record sets only: A complex type that lets you control how Amazon Route 53 responds to DNS queries based on the geographic origin of the query. For example, if you want all queries from Africa to be routed to a web server with an IP address of 192.0.2.111, create a resource record set with a Type of A and a ContinentCode of AF. If you create separate resource record sets for overlapping geographic regions (for example, one resource record set for a continent and one for a country on the same continent), priority goes to the smallest geographic region. This allows you to route most queries for a continent to one resource and to route queries for a country on that continent to a different resource. You can't create two geolocation resource record sets that specify the same geographic location. The value * in the CountryCode element matches all geographic locations that aren't specified in other geolocation resource record sets that have the same values for the Name and Type elements. Geolocation works by mapping IP addresses to locations. However, some IP addresses aren't mapped to geographic locations, so even if you create geolocation resource record sets that cover all seven continents, Route 53 will receive some DNS queries from locations that it can't identify. We recommend that you create a resource record set for which the value of CountryCode is *. Two groups of queries are routed to the resource that you specify in this record: queries that come from locations for which you haven't created geolocation resource record sets and queries from IP addresses that aren't mapped to a location. If you don't create a * resource record set, Route 53 returns a "no answer" response for queries from those locations. You can't create non-geolocation resource record sets that have the same values for the Name and Type elements as geolocation resource record sets.</td>
</tr>
<tr>
    <td><CopyableCode code="GeoProximityLocation" /></td>
    <td><code>string</code></td>
    <td>GeoproximityLocation resource record sets only: A complex type that lets you control how Route 53 responds to DNS queries based on the geographic origin of the query and your resources.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthCheckId" /></td>
    <td><code>string</code></td>
    <td>If you want Amazon Route 53 to return this resource record set in response to a DNS query only when the status of a health check is healthy, include the HealthCheckId element and specify the ID of the applicable health check. Route 53 determines whether a resource record set is healthy based on one of the following: By periodically sending a request to the endpoint that is specified in the health check By aggregating the status of a specified group of health checks (calculated health checks) By determining the current state of a CloudWatch alarm (CloudWatch metric health checks) Route 53 doesn't check the health of the endpoint that is specified in the resource record set, for example, the endpoint specified by the IP address in the Value element. When you add a HealthCheckId element to a resource record set, Route 53 checks the health of the endpoint that you specified in the health check. For more information, see the following topics in the Amazon Route 53 Developer Guide: How Amazon Route 53 Determines Whether an Endpoint Is Healthy Route 53 Health Checks and DNS Failover Configuring Failover in a Private Hosted Zone When to Specify HealthCheckId Specifying a value for HealthCheckId is useful only when Route 53 is choosing between two or more resource record sets to respond to a DNS query, and you want Route 53 to base the choice in part on the status of a health check. Configuring health checks makes sense only in the following configurations: Non-alias resource record sets: You're checking the health of a group of non-alias resource record sets that have the same routing policy, name, and type (such as multiple weighted records named www.example.com with a type of A) and you specify health check IDs for all the resource record sets. If the health check status for a resource record set is healthy, Route 53 includes the record among the records that it responds to DNS queries with. If the health check status for a resource record set is unhealthy, Route 53 stops responding to DNS queries using the value for that resource record set. If the health check status for all resource record sets in the group is unhealthy, Route 53 considers all resource record sets in the group healthy and responds to DNS queries accordingly. Alias resource record sets: You specify the following settings: You set EvaluateTargetHealth to true for an alias resource record set in a group of resource record sets that have the same routing policy, name, and type (such as multiple weighted records named www.example.com with a type of A). You configure the alias resource record set to route traffic to a non-alias resource record set in the same hosted zone. You specify a health check ID for the non-alias resource record set. If the health check status is healthy, Route 53 considers the alias resource record set to be healthy and includes the alias record among the records that it responds to DNS queries with. If the health check status is unhealthy, Route 53 stops responding to DNS queries using the alias resource record set. The alias resource record set can also route traffic to a group of non-alias resource record sets that have the same routing policy, name, and type. In that configuration, associate health checks with all of the resource record sets in the group of non-alias resource record sets. Geolocation Routing For geolocation resource record sets, if an endpoint is unhealthy, Route 53 looks for a resource record set for the larger, associated geographic region. For example, suppose you have resource record sets for a state in the United States, for the entire United States, for North America, and a resource record set that has * for CountryCode is *, which applies to all locations. If the endpoint for the state resource record set is unhealthy, Route 53 checks for healthy resource record sets in the following order until it finds a resource record set for which the endpoint is healthy: The United States North America The default resource record set Specifying the Health Check Endpoint by Domain Name If your health checks specify the endpoint only by domain name, we recommend that you create a separate health check for each endpoint. For example, create a health check for each HTTP server that is serving content for www.example.com. For the value of FullyQualifiedDomainName, specify the domain name of the server (such as us-east-2-www.example.com), not the name of the resource record sets (www.example.com). Health check results will be unpredictable if you do the following: Create a health check that has the same value for FullyQualifiedDomainName as the name of a resource record set. Associate that health check with the resource record set.</td>
</tr>
<tr>
    <td><CopyableCode code="MultiValueAnswer" /></td>
    <td><code>boolean</code></td>
    <td>Multivalue answer resource record sets only: To route traffic approximately randomly to multiple resources, such as web servers, create one multivalue answer record for each resource and specify true for MultiValueAnswer. Note the following: If you associate a health check with a multivalue answer resource record set, Amazon Route 53 responds to DNS queries with the corresponding IP address only when the health check is healthy. If you don't associate a health check with a multivalue answer record, Route 53 always considers the record to be healthy. Route 53 responds to DNS queries with up to eight healthy records; if you have eight or fewer healthy records, Route 53 responds to all DNS queries with all the healthy records. If you have more than eight healthy records, Route 53 responds to different DNS resolvers with different combinations of healthy records. When all records are unhealthy, Route 53 responds to DNS queries with up to eight unhealthy records. If a resource becomes unavailable after a resolver caches a response, client software typically tries another of the IP addresses in the response. You can't create multivalue answer alias records.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>For ChangeResourceRecordSets requests, the name of the record that you want to create, update, or delete. For ListResourceRecordSets responses, the name of a record in the specified hosted zone. ChangeResourceRecordSets Only Enter a fully qualified domain name, for example, www.example.com. You can optionally include a trailing dot. If you omit the trailing dot, Amazon Route 53 assumes that the domain name that you specify is fully qualified. This means that Route 53 treats www.example.com (without a trailing dot) and www.example.com. (with a trailing dot) as identical. For information about how to specify characters other than a-z, 0-9, and - (hyphen) and how to specify internationalized domain names, see DNS Domain Name Format in the Amazon Route 53 Developer Guide. You can use the asterisk (*) wildcard to replace the leftmost label in a domain name, for example, *.example.com. Note the following: The * must replace the entire label. For example, you can't specify *prod.example.com or prod*.example.com. The * can't replace any of the middle labels, for example, marketing.*.example.com. If you include * in any position other than the leftmost label in a domain name, DNS treats it as an * character (ASCII 42), not as a wildcard. You can't use the * wildcard for resource records sets that have a type of NS.</td>
</tr>
<tr>
    <td><CopyableCode code="Region" /></td>
    <td><code>string</code></td>
    <td>Latency-based resource record sets only: The Amazon EC2 Region where you created the resource that this resource record set refers to. The resource typically is an Amazon Web Services resource, such as an EC2 instance or an ELB load balancer, and is referred to by an IP address or a DNS domain name, depending on the record type. When Amazon Route 53 receives a DNS query for a domain name and type for which you have created latency resource record sets, Route 53 selects the latency resource record set that has the lowest latency between the end user and the associated Amazon EC2 Region. Route 53 then returns the value that is associated with the selected resource record set. Note the following: You can only specify one ResourceRecord per latency resource record set. You can only create one latency resource record set for each Amazon EC2 Region. You aren't required to create latency resource record sets for all Amazon EC2 Regions. Route 53 will choose the region with the best latency from among the regions that you create latency resource record sets for. You can't create non-latency resource record sets that have the same values for the Name and Type elements as latency resource record sets.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceRecords" /></td>
    <td><code>string</code></td>
    <td>Information about the resource records to act upon. If you're creating an alias resource record set, omit ResourceRecords.</td>
</tr>
<tr>
    <td><CopyableCode code="SetIdentifier" /></td>
    <td><code>string</code></td>
    <td>Resource record sets that have a routing policy other than simple: An identifier that differentiates among multiple resource record sets that have the same combination of name and type, such as multiple weighted resource record sets named acme.example.com that have a type of A. In a group of resource record sets that have the same name and type, the value of SetIdentifier must be unique for each resource record set. For information about routing policies, see Choosing a Routing Policy in the Amazon Route 53 Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="TTL" /></td>
    <td><code>integer</code></td>
    <td>The resource record cache time to live (TTL), in seconds. Note the following: If you're creating or updating an alias resource record set, omit TTL. Amazon Route 53 uses the value of TTL for the alias target. If you're associating this resource record set with a health check (if you're adding a HealthCheckId element), we recommend that you specify a TTL of 60 seconds or less so clients respond quickly to changes in health status. All of the resource record sets in a group of weighted resource record sets must have the same value for TTL. If a group of weighted resource record sets includes one or more weighted alias resource record sets for which the alias target is an ELB load balancer, we recommend that you specify a TTL of 60 seconds for all of the non-alias weighted resource record sets that have the same name and type. Values other than 60 seconds (the TTL for load balancers) will change the effect of the values that you specify for Weight.</td>
</tr>
<tr>
    <td><CopyableCode code="TrafficPolicyInstanceId" /></td>
    <td><code>string</code></td>
    <td>When you create a traffic policy instance, Amazon Route 53 automatically creates a resource record set. TrafficPolicyInstanceId is the ID of the traffic policy instance that Route 53 created this resource record set for. To delete the resource record set that is associated with a traffic policy instance, use DeleteTrafficPolicyInstance. Route 53 will delete the resource record set automatically. If you delete the resource record set by using ChangeResourceRecordSets, Route 53 doesn't automatically delete the traffic policy instance, and you'll continue to be charged for it even though it's no longer in use.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The DNS record type. For information about different record types and how data is encoded for them, see Supported DNS Resource Record Types in the Amazon Route 53 Developer Guide. Valid values for basic resource record sets: A | AAAA | CAA | CNAME | DS |MX | NAPTR | NS | PTR | SOA | SPF | SRV | TXT| TLSA| SSHFP| SVCB| HTTPS Values for weighted, latency, geolocation, and failover resource record sets: A | AAAA | CAA | CNAME | MX | NAPTR | PTR | SPF | SRV | TXT| TLSA| SSHFP| SVCB| HTTPS. When creating a group of weighted, latency, geolocation, or failover resource record sets, specify the same value for all of the resource record sets in the group. Valid values for multivalue answer resource record sets: A | AAAA | MX | NAPTR | PTR | SPF | SRV | TXT| CAA| TLSA| SSHFP| SVCB| HTTPS SPF records were formerly used to verify the identity of the sender of email messages. However, we no longer recommend that you create resource record sets for which the value of Type is SPF. RFC 7208, Sender Policy Framework (SPF) for Authorizing Use of Domains in Email, Version 1, has been updated to say, "...&#91;I&#93;ts existence and mechanism defined in &#91;RFC4408&#93; have led to some interoperability issues. Accordingly, its use is no longer appropriate for SPF version 1; implementations are not to use it." In RFC 7208, see section 14.1, The SPF DNS Record Type. Values for alias resource record sets: Amazon API Gateway custom regional APIs and edge-optimized APIs: A CloudFront distributions: A If IPv6 is enabled for the distribution, create two resource record sets to route traffic to your distribution, one with a value of A and one with a value of AAAA. Amazon API Gateway environment that has a regionalized subdomain: A ELB load balancers: A | AAAA Amazon S3 buckets: A Amazon Virtual Private Cloud interface VPC endpoints A Another resource record set in this hosted zone: Specify the type of the resource record set that you're creating the alias for. All values are supported except NS and SOA. If you're creating an alias record that has the same name as the hosted zone (known as the zone apex), you can't route traffic to a record for which the value of Type is CNAME. This is because the alias record must have the same type as the record you're routing traffic to, and creating a CNAME record for the zone apex isn't supported even for an alias record.</td>
</tr>
<tr>
    <td><CopyableCode code="Weight" /></td>
    <td><code>integer</code></td>
    <td>Weighted resource record sets only: Among resource record sets that have the same combination of DNS name and type, a value that determines the proportion of DNS queries that Amazon Route 53 responds to using the current resource record set. Route 53 calculates the sum of the weights for the resource record sets that have the same combination of DNS name and type. Route 53 then responds to queries based on the ratio of a resource's weight to the total. Note the following: You must specify a value for the Weight element for every weighted resource record set. You can only specify one ResourceRecord per weighted resource record set. You can't create latency, failover, or geolocation resource record sets that have the same values for the Name and Type elements as weighted resource record sets. You can create a maximum of 100 weighted resource record sets that have the same values for the Name and Type elements. For weighted (but not weighted alias) resource record sets, if you set Weight to 0 for a resource record set, Route 53 never responds to queries with the applicable value for that resource record set. However, if you set Weight to 0 for all resource record sets that have the same combination of DNS name and type, traffic is routed to all resources with equal probability. The effect of setting Weight to 0 is different when you associate health checks with weighted resource record sets. For more information, see Options for Configuring Route 53 Active-Active and Active-Passive Failover in the Amazon Route 53 Developer Guide.</td>
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
    <td><a href="#list_resource_record_sets"><CopyableCode code="list_resource_record_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-maxitems"><code>maxitems</code></a></td>
    <td>Lists the resource record sets in a specified hosted zone. ListResourceRecordSets returns up to 300 resource record sets at a time in ASCII order, beginning at a position specified by the name and type elements. Sort order ListResourceRecordSets sorts results first by DNS name with the labels reversed, for example: com.example.www. Note the trailing dot, which can change the sort order when the record name contains characters that appear before . (decimal 46) in the ASCII table. These characters include the following: ! " # $ % & ' ( ) * + , - When multiple records have the same DNS name, ListResourceRecordSets sorts results by the record type. Specifying where to start listing records You can use the name and type elements to specify the resource record set that the list begins with: If you do not specify Name or Type The results begin with the first resource record set that the hosted zone contains. If you specify Name but not Type The results begin with the first resource record set in the list whose name is greater than or equal to Name. If you specify Type but not Name Amazon Route 53 returns the InvalidInput error. If you specify both Name and Type The results begin with the first resource record set in the list whose name is greater than or equal to Name, and whose type is greater than or equal to Type. Type is only used to sort between records with the same record Name. Resource record sets that are PENDING This action returns the most current version of the records. This includes records that are PENDING, and that are not yet available on all Route 53 DNS servers. Changing resource record sets To ensure that you get an accurate listing of the resource record sets for a hosted zone at a point in time, do not submit a ChangeResourceRecordSets request while you're paging through the results of a ListResourceRecordSets request. If you do, some pages may display results without the latest changes while other pages display results with the latest changes. Displaying the next page of results If a ListResourceRecordSets command returns more than one page of results, the value of IsTruncated is true. To display the next page of results, get the values of NextRecordName, NextRecordType, and NextRecordIdentifier (if any) from the response. Then submit another ListResourceRecordSets request, and specify those values for StartRecordName, StartRecordType, and StartRecordIdentifier.</td>
</tr>
<tr>
    <td><a href="#change_resource_record_sets"><CopyableCode code="change_resource_record_sets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChangeBatch"><code>ChangeBatch</code></a></td>
    <td></td>
    <td>Creates, changes, or deletes a resource record set, which contains authoritative DNS information for a specified domain name or subdomain name. For example, you can use ChangeResourceRecordSets to create a resource record set that routes traffic for test.example.com to a web server that has an IP address of 192.0.2.44. Deleting Resource Record Sets To delete a resource record set, you must specify all the same values that you specified when you created it. Change Batches and Transactional Changes The request body must include a document with a ChangeResourceRecordSetsRequest element. The request body contains a list of change items, known as a change batch. Change batches are considered transactional changes. Route 53 validates the changes in the request and then either makes all or none of the changes in the change batch request. This ensures that DNS routing isn't adversely affected by partial changes to the resource record sets in a hosted zone. For example, suppose a change batch request contains two changes: it deletes the CNAME resource record set for www.example.com and creates an alias resource record set for www.example.com. If validation for both records succeeds, Route 53 deletes the first resource record set and creates the second resource record set in a single operation. If validation for either the DELETE or the CREATE action fails, then the request is canceled, and the original CNAME record continues to exist. If you try to delete the same resource record set more than once in a single change batch, Route 53 returns an InvalidChangeBatch error. Traffic Flow To create resource record sets for complex routing configurations, use either the traffic flow visual editor in the Route 53 console or the API actions for traffic policies and traffic policy instances. Save the configuration as a traffic policy, then associate the traffic policy with one or more domain names (such as example.com) or subdomain names (such as www.example.com), in the same hosted zone or in multiple hosted zones. You can roll back the updates if the new configuration isn't performing as expected. For more information, see Using Traffic Flow to Route DNS Traffic in the Amazon Route 53 Developer Guide. Create, Delete, and Upsert Use ChangeResourceRecordsSetsRequest to perform the following actions: CREATE: Creates a resource record set that has the specified values. DELETE: Deletes an existing resource record set that has the specified values. UPSERT: If a resource set doesn't exist, Route 53 creates it. If a resource set exists Route 53 updates it with the values in the request. Syntaxes for Creating, Updating, and Deleting Resource Record Sets The syntax for a request depends on the type of resource record set that you want to create, delete, or update, such as weighted, alias, or failover. The XML elements in your request must appear in the order listed in the syntax. For an example for each type of resource record set, see "Examples." Don't refer to the syntax in the "Parameter Syntax" section, which includes all of the elements for every kind of resource record set that you can create, delete, or update by using ChangeResourceRecordSets. Change Propagation to Route 53 DNS Servers When you submit a ChangeResourceRecordSets request, Route 53 propagates your changes to all of the Route 53 authoritative DNS servers managing the hosted zone. While your changes are propagating, GetChange returns a status of PENDING. When propagation is complete, GetChange returns a status of INSYNC. Changes generally propagate to all Route 53 name servers managing the hosted zone within 60 seconds. For more information, see GetChange. Limits on ChangeResourceRecordSets Requests For information about the limits on a ChangeResourceRecordSets request, see Limits in the Amazon Route 53 Developer Guide.</td>
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
    <td>The ID of the hosted zone that contains the resource record sets that you want to change.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>Resource record sets that have a routing policy other than simple: If results were truncated for a given DNS name and type, specify the value of NextRecordIdentifier from the previous response to get the next resource record set that has the current DNS name and type.</td>
</tr>
<tr id="parameter-maxitems">
    <td><CopyableCode code="maxitems" /></td>
    <td><code>string</code></td>
    <td>(Optional) The maximum number of resource records sets to include in the response body for this request. If the response includes more than maxitems resource record sets, the value of the IsTruncated element in the response is true, and the values of the NextRecordName and NextRecordType elements in the response identify the first resource record set in the next group of maxitems resource record sets.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The first name in the lexicographic ordering of resource record sets that you want to list. If the specified record name doesn't exist, the results begin with the first resource record set that has a name greater than the value of name.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of resource record set to begin the record listing from. Valid values for basic resource record sets: A | AAAA | CAA | CNAME | MX | NAPTR | NS | PTR | SOA | SPF | SRV | TXT Values for weighted, latency, geolocation, and failover resource record sets: A | AAAA | CAA | CNAME | MX | NAPTR | PTR | SPF | SRV | TXT Values for alias resource record sets: API Gateway custom regional API or edge-optimized API: A CloudFront distribution: A or AAAA Elastic Beanstalk environment that has a regionalized subdomain: A Elastic Load Balancing load balancer: A | AAAA S3 bucket: A VPC interface VPC endpoint: A Another resource record set in this hosted zone: The type of the resource record set that the alias references. Constraint: Specifying type without specifying name returns an InvalidInput error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_resource_record_sets"
    values={[
        { label: 'list_resource_record_sets', value: 'list_resource_record_sets' }
    ]}
>
<TabItem value="list_resource_record_sets">

Lists the resource record sets in a specified hosted zone. ListResourceRecordSets returns up to 300 resource record sets at a time in ASCII order, beginning at a position specified by the name and type elements. Sort order ListResourceRecordSets sorts results first by DNS name with the labels reversed, for example: com.example.www. Note the trailing dot, which can change the sort order when the record name contains characters that appear before . (decimal 46) in the ASCII table. These characters include the following: ! " # $ % & ' ( ) * + , - When multiple records have the same DNS name, ListResourceRecordSets sorts results by the record type. Specifying where to start listing records You can use the name and type elements to specify the resource record set that the list begins with: If you do not specify Name or Type The results begin with the first resource record set that the hosted zone contains. If you specify Name but not Type The results begin with the first resource record set in the list whose name is greater than or equal to Name. If you specify Type but not Name Amazon Route 53 returns the InvalidInput error. If you specify both Name and Type The results begin with the first resource record set in the list whose name is greater than or equal to Name, and whose type is greater than or equal to Type. Type is only used to sort between records with the same record Name. Resource record sets that are PENDING This action returns the most current version of the records. This includes records that are PENDING, and that are not yet available on all Route 53 DNS servers. Changing resource record sets To ensure that you get an accurate listing of the resource record sets for a hosted zone at a point in time, do not submit a ChangeResourceRecordSets request while you're paging through the results of a ListResourceRecordSets request. If you do, some pages may display results without the latest changes while other pages display results with the latest changes. Displaying the next page of results If a ListResourceRecordSets command returns more than one page of results, the value of IsTruncated is true. To display the next page of results, get the values of NextRecordName, NextRecordType, and NextRecordIdentifier (if any) from the response. Then submit another ListResourceRecordSets request, and specify those values for StartRecordName, StartRecordType, and StartRecordIdentifier.

```sql
SELECT
AliasTarget,
CidrRoutingConfig,
Failover,
GeoLocation,
GeoProximityLocation,
HealthCheckId,
MultiValueAnswer,
Name,
Region,
ResourceRecords,
SetIdentifier,
TTL,
TrafficPolicyInstanceId,
Type,
Weight
FROM aws.route53.resource_record_sets
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND name = '{{ name }}'
AND type = '{{ type }}'
AND identifier = '{{ identifier }}'
AND maxitems = '{{ maxitems }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="change_resource_record_sets"
    values={[
        { label: 'change_resource_record_sets', value: 'change_resource_record_sets' }
    ]}
>
<TabItem value="change_resource_record_sets">

Creates, changes, or deletes a resource record set, which contains authoritative DNS information for a specified domain name or subdomain name. For example, you can use ChangeResourceRecordSets to create a resource record set that routes traffic for test.example.com to a web server that has an IP address of 192.0.2.44. Deleting Resource Record Sets To delete a resource record set, you must specify all the same values that you specified when you created it. Change Batches and Transactional Changes The request body must include a document with a ChangeResourceRecordSetsRequest element. The request body contains a list of change items, known as a change batch. Change batches are considered transactional changes. Route 53 validates the changes in the request and then either makes all or none of the changes in the change batch request. This ensures that DNS routing isn't adversely affected by partial changes to the resource record sets in a hosted zone. For example, suppose a change batch request contains two changes: it deletes the CNAME resource record set for www.example.com and creates an alias resource record set for www.example.com. If validation for both records succeeds, Route 53 deletes the first resource record set and creates the second resource record set in a single operation. If validation for either the DELETE or the CREATE action fails, then the request is canceled, and the original CNAME record continues to exist. If you try to delete the same resource record set more than once in a single change batch, Route 53 returns an InvalidChangeBatch error. Traffic Flow To create resource record sets for complex routing configurations, use either the traffic flow visual editor in the Route 53 console or the API actions for traffic policies and traffic policy instances. Save the configuration as a traffic policy, then associate the traffic policy with one or more domain names (such as example.com) or subdomain names (such as www.example.com), in the same hosted zone or in multiple hosted zones. You can roll back the updates if the new configuration isn't performing as expected. For more information, see Using Traffic Flow to Route DNS Traffic in the Amazon Route 53 Developer Guide. Create, Delete, and Upsert Use ChangeResourceRecordsSetsRequest to perform the following actions: CREATE: Creates a resource record set that has the specified values. DELETE: Deletes an existing resource record set that has the specified values. UPSERT: If a resource set doesn't exist, Route 53 creates it. If a resource set exists Route 53 updates it with the values in the request. Syntaxes for Creating, Updating, and Deleting Resource Record Sets The syntax for a request depends on the type of resource record set that you want to create, delete, or update, such as weighted, alias, or failover. The XML elements in your request must appear in the order listed in the syntax. For an example for each type of resource record set, see "Examples." Don't refer to the syntax in the "Parameter Syntax" section, which includes all of the elements for every kind of resource record set that you can create, delete, or update by using ChangeResourceRecordSets. Change Propagation to Route 53 DNS Servers When you submit a ChangeResourceRecordSets request, Route 53 propagates your changes to all of the Route 53 authoritative DNS servers managing the hosted zone. While your changes are propagating, GetChange returns a status of PENDING. When propagation is complete, GetChange returns a status of INSYNC. Changes generally propagate to all Route 53 name servers managing the hosted zone within 60 seconds. For more information, see GetChange. Limits on ChangeResourceRecordSets Requests For information about the limits on a ChangeResourceRecordSets request, see Limits in the Amazon Route 53 Developer Guide.

```sql
EXEC aws.route53.resource_record_sets.change_resource_record_sets 
@id='{{ id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ChangeBatch": "{{ ChangeBatch }}"
}'
;
```
</TabItem>
</Tabs>
