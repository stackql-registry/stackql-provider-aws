--- 
title: hosted_zones_by_names
hide_title: false
hide_table_of_contents: false
keywords:
  - hosted_zones_by_names
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

Creates, updates, deletes, gets or lists a <code>hosted_zones_by_names</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hosted_zones_by_names" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.hosted_zones_by_names" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_hosted_zones_by_name"
    values={[
        { label: 'list_hosted_zones_by_name', value: 'list_hosted_zones_by_name' }
    ]}
>
<TabItem value="list_hosted_zones_by_name">

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
    <td><CopyableCode code="CallerReference" /></td>
    <td><code>string</code></td>
    <td>The value that you specified for CallerReference when you created the hosted zone.</td>
</tr>
<tr>
    <td><CopyableCode code="Config" /></td>
    <td><code>string</code></td>
    <td>A complex type that includes the Comment and PrivateZone elements. If you omitted the HostedZoneConfig and Comment elements from the request, the Config and Comment elements don't appear in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="Features" /></td>
    <td><code>string</code></td>
    <td>The features configuration for the hosted zone, including accelerated recovery settings and status information.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID that Amazon Route 53 assigned to the hosted zone when you created it.</td>
</tr>
<tr>
    <td><CopyableCode code="LinkedService" /></td>
    <td><code>string</code></td>
    <td>If the hosted zone was created by another service, the service that created the hosted zone. When a hosted zone is created by another service, you can't edit or delete it using Route 53.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain. For public hosted zones, this is the name that you have registered with your DNS registrar. For information about how to specify characters other than a-z, 0-9, and - (hyphen) and how to specify internationalized domain names, see CreateHostedZone.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceRecordSetCount" /></td>
    <td><code>integer</code></td>
    <td>The number of resource record sets in the hosted zone.</td>
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
    <td><a href="#list_hosted_zones_by_name"><CopyableCode code="list_hosted_zones_by_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-dnsname"><code>dnsname</code></a>, <a href="#parameter-hostedzoneid"><code>hostedzoneid</code></a>, <a href="#parameter-maxitems"><code>maxitems</code></a></td>
    <td>Retrieves a list of your hosted zones in lexicographic order. The response includes a HostedZones child element for each hosted zone created by the current Amazon Web Services account. ListHostedZonesByName sorts hosted zones by name with the labels reversed. For example: com.example.www. Note the trailing dot, which can change the sort order in some circumstances. If the domain name includes escape characters or Punycode, ListHostedZonesByName alphabetizes the domain name using the escaped or Punycoded value, which is the format that Amazon Route 53 saves in its database. For example, to create a hosted zone for exämple.com, you specify ex\344mple.com for the domain name. ListHostedZonesByName alphabetizes it as: com.ex\344mple. The labels are reversed and alphabetized using the escaped value. For more information about valid domain name formats, including internationalized domain names, see DNS Domain Name Format in the Amazon Route 53 Developer Guide. Route 53 returns up to 100 items in each response. If you have a lot of hosted zones, use the MaxItems parameter to list them in groups of up to 100. The response includes values that help navigate from one group of MaxItems hosted zones to the next: The DNSName and HostedZoneId elements in the response contain the values, if any, specified for the dnsname and hostedzoneid parameters in the request that produced the current response. The MaxItems element in the response contains the value, if any, that you specified for the maxitems parameter in the request that produced the current response. If the value of IsTruncated in the response is true, there are more hosted zones associated with the current Amazon Web Services account. If IsTruncated is false, this response includes the last hosted zone that is associated with the current account. The NextDNSName element and NextHostedZoneId elements are omitted from the response. The NextDNSName and NextHostedZoneId elements in the response contain the domain name and the hosted zone ID of the next hosted zone that is associated with the current Amazon Web Services account. If you want to list more hosted zones, make another call to ListHostedZonesByName, and specify the value of NextDNSName and NextHostedZoneId in the dnsname and hostedzoneid parameters, respectively.</td>
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
<tr id="parameter-dnsname">
    <td><CopyableCode code="dnsname" /></td>
    <td><code>string</code></td>
    <td>(Optional) For your first request to ListHostedZonesByName, include the dnsname parameter only if you want to specify the name of the first hosted zone in the response. If you don't include the dnsname parameter, Amazon Route 53 returns all of the hosted zones that were created by the current Amazon Web Services account, in ASCII order. For subsequent requests, include both dnsname and hostedzoneid parameters. For dnsname, specify the value of NextDNSName from the previous response.</td>
</tr>
<tr id="parameter-hostedzoneid">
    <td><CopyableCode code="hostedzoneid" /></td>
    <td><code>string</code></td>
    <td>(Optional) For your first request to ListHostedZonesByName, do not include the hostedzoneid parameter. If you have more hosted zones than the value of maxitems, ListHostedZonesByName returns only the first maxitems hosted zones. To get the next group of maxitems hosted zones, submit another request to ListHostedZonesByName and include both dnsname and hostedzoneid parameters. For the value of hostedzoneid, specify the value of the NextHostedZoneId element from the previous response.</td>
</tr>
<tr id="parameter-maxitems">
    <td><CopyableCode code="maxitems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of hosted zones to be included in the response body for this request. If you have more than maxitems hosted zones, then the value of the IsTruncated element in the response is true, and the values of NextDNSName and NextHostedZoneId specify the first hosted zone in the next group of maxitems hosted zones.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_hosted_zones_by_name"
    values={[
        { label: 'list_hosted_zones_by_name', value: 'list_hosted_zones_by_name' }
    ]}
>
<TabItem value="list_hosted_zones_by_name">

Retrieves a list of your hosted zones in lexicographic order. The response includes a HostedZones child element for each hosted zone created by the current Amazon Web Services account. ListHostedZonesByName sorts hosted zones by name with the labels reversed. For example: com.example.www. Note the trailing dot, which can change the sort order in some circumstances. If the domain name includes escape characters or Punycode, ListHostedZonesByName alphabetizes the domain name using the escaped or Punycoded value, which is the format that Amazon Route 53 saves in its database. For example, to create a hosted zone for exämple.com, you specify ex\344mple.com for the domain name. ListHostedZonesByName alphabetizes it as: com.ex\344mple. The labels are reversed and alphabetized using the escaped value. For more information about valid domain name formats, including internationalized domain names, see DNS Domain Name Format in the Amazon Route 53 Developer Guide. Route 53 returns up to 100 items in each response. If you have a lot of hosted zones, use the MaxItems parameter to list them in groups of up to 100. The response includes values that help navigate from one group of MaxItems hosted zones to the next: The DNSName and HostedZoneId elements in the response contain the values, if any, specified for the dnsname and hostedzoneid parameters in the request that produced the current response. The MaxItems element in the response contains the value, if any, that you specified for the maxitems parameter in the request that produced the current response. If the value of IsTruncated in the response is true, there are more hosted zones associated with the current Amazon Web Services account. If IsTruncated is false, this response includes the last hosted zone that is associated with the current account. The NextDNSName element and NextHostedZoneId elements are omitted from the response. The NextDNSName and NextHostedZoneId elements in the response contain the domain name and the hosted zone ID of the next hosted zone that is associated with the current Amazon Web Services account. If you want to list more hosted zones, make another call to ListHostedZonesByName, and specify the value of NextDNSName and NextHostedZoneId in the dnsname and hostedzoneid parameters, respectively.

```sql
SELECT
CallerReference,
Config,
Features,
Id,
LinkedService,
Name,
ResourceRecordSetCount
FROM aws.route53.hosted_zones_by_names
WHERE region = '{{ region }}' -- required
AND dnsname = '{{ dnsname }}'
AND hostedzoneid = '{{ hostedzoneid }}'
AND maxitems = '{{ maxitems }}'
;
```
</TabItem>
</Tabs>
