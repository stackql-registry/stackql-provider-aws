--- 
title: traffic_policy_instances_by_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_policy_instances_by_policies
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

Creates, updates, deletes, gets or lists a <code>traffic_policy_instances_by_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="traffic_policy_instances_by_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.traffic_policy_instances_by_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_traffic_policy_instances_by_policy"
    values={[
        { label: 'list_traffic_policy_instances_by_policy', value: 'list_traffic_policy_instances_by_policy' }
    ]}
>
<TabItem value="list_traffic_policy_instances_by_policy">

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
    <td><CopyableCode code="HostedZoneId" /></td>
    <td><code>string</code></td>
    <td>The ID of the hosted zone that Amazon Route 53 created resource record sets in.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID that Amazon Route 53 assigned to the new traffic policy instance.</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>If State is Failed, an explanation of the reason for the failure. If State is another value, Message is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The DNS name, such as www.example.com, for which Amazon Route 53 responds to queries by using the resource record sets that are associated with this traffic policy instance.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The value of State is one of the following values: Applied Amazon Route 53 has finished creating resource record sets, and changes have propagated to all Route 53 edge locations. Creating Route 53 is creating the resource record sets. Use GetTrafficPolicyInstance to confirm that the CreateTrafficPolicyInstance request completed successfully. Failed Route 53 wasn't able to create or update the resource record sets. When the value of State is Failed, see Message for an explanation of what caused the request to fail.</td>
</tr>
<tr>
    <td><CopyableCode code="TTL" /></td>
    <td><code>integer</code></td>
    <td>The TTL that Amazon Route 53 assigned to all of the resource record sets that it created in the specified hosted zone.</td>
</tr>
<tr>
    <td><CopyableCode code="TrafficPolicyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the traffic policy that Amazon Route 53 used to create resource record sets in the specified hosted zone.</td>
</tr>
<tr>
    <td><CopyableCode code="TrafficPolicyType" /></td>
    <td><code>string</code></td>
    <td>The DNS type that Amazon Route 53 assigned to all of the resource record sets that it created for this traffic policy instance.</td>
</tr>
<tr>
    <td><CopyableCode code="TrafficPolicyVersion" /></td>
    <td><code>integer</code></td>
    <td>The version of the traffic policy that Amazon Route 53 used to create resource record sets in the specified hosted zone.</td>
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
    <td><a href="#list_traffic_policy_instances_by_policy"><CopyableCode code="list_traffic_policy_instances_by_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-hostedzoneid"><code>hostedzoneid</code></a>, <a href="#parameter-trafficpolicyinstancename"><code>trafficpolicyinstancename</code></a>, <a href="#parameter-trafficpolicyinstancetype"><code>trafficpolicyinstancetype</code></a>, <a href="#parameter-maxitems"><code>maxitems</code></a></td>
    <td>Gets information about the traffic policy instances that you created by using a specify traffic policy version. After you submit a CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element. Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100.</td>
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
    <td>The ID of the traffic policy for which you want to list traffic policy instances.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The version of the traffic policy for which you want to list traffic policy instances. The version must be associated with the traffic policy that is specified by TrafficPolicyId.</td>
</tr>
<tr id="parameter-hostedzoneid">
    <td><CopyableCode code="hostedzoneid" /></td>
    <td><code>string</code></td>
    <td>If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstancesByPolicy request. For the value of hostedzoneid, specify the value of HostedZoneIdMarker from the previous response, which is the hosted zone ID of the first traffic policy instance that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get.</td>
</tr>
<tr id="parameter-maxitems">
    <td><CopyableCode code="maxitems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of traffic policy instances to be included in the response body for this request. If you have more than MaxItems traffic policy instances, the value of the IsTruncated element in the response is true, and the values of HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker represent the first traffic policy instance that Amazon Route 53 will return if you submit another request.</td>
</tr>
<tr id="parameter-trafficpolicyinstancename">
    <td><CopyableCode code="trafficpolicyinstancename" /></td>
    <td><code>string</code></td>
    <td>If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstancesByPolicy request. For the value of trafficpolicyinstancename, specify the value of TrafficPolicyInstanceNameMarker from the previous response, which is the name of the first traffic policy instance that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get.</td>
</tr>
<tr id="parameter-trafficpolicyinstancetype">
    <td><CopyableCode code="trafficpolicyinstancetype" /></td>
    <td><code>string</code></td>
    <td>If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstancesByPolicy request. For the value of trafficpolicyinstancetype, specify the value of TrafficPolicyInstanceTypeMarker from the previous response, which is the name of the first traffic policy instance that Amazon Route 53 will return if you submit another request. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_traffic_policy_instances_by_policy"
    values={[
        { label: 'list_traffic_policy_instances_by_policy', value: 'list_traffic_policy_instances_by_policy' }
    ]}
>
<TabItem value="list_traffic_policy_instances_by_policy">

Gets information about the traffic policy instances that you created by using a specify traffic policy version. After you submit a CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element. Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100.

```sql
SELECT
HostedZoneId,
Id,
Message,
Name,
State,
TTL,
TrafficPolicyId,
TrafficPolicyType,
TrafficPolicyVersion
FROM aws.route53.traffic_policy_instances_by_policies
WHERE id = '{{ id }}' -- required
AND version = '{{ version }}' -- required
AND region = '{{ region }}' -- required
AND hostedzoneid = '{{ hostedzoneid }}'
AND trafficpolicyinstancename = '{{ trafficpolicyinstancename }}'
AND trafficpolicyinstancetype = '{{ trafficpolicyinstancetype }}'
AND maxitems = '{{ maxitems }}'
;
```
</TabItem>
</Tabs>
