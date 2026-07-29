--- 
title: traffic_policy_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_policy_instances
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

Creates, updates, deletes, gets or lists a <code>traffic_policy_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="traffic_policy_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53.traffic_policy_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_traffic_policy_instance"
    values={[
        { label: 'get_traffic_policy_instance', value: 'get_traffic_policy_instance' },
        { label: 'list_traffic_policy_instances', value: 'list_traffic_policy_instances' }
    ]}
>
<TabItem value="get_traffic_policy_instance">

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
    <td><CopyableCode code="hosted_zone_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the hosted zone that Amazon Route 53 created resource record sets in.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID that Amazon Route 53 assigned to the new traffic policy instance.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>If State is Failed, an explanation of the reason for the failure. If State is another value, Message is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The DNS name, such as www.example.com, for which Amazon Route 53 responds to queries by using the resource record sets that are associated with this traffic policy instance.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The value of State is one of the following values: Applied Amazon Route 53 has finished creating resource record sets, and changes have propagated to all Route 53 edge locations. Creating Route 53 is creating the resource record sets. Use GetTrafficPolicyInstance to confirm that the CreateTrafficPolicyInstance request completed successfully. Failed Route 53 wasn't able to create or update the resource record sets. When the value of State is Failed, see Message for an explanation of what caused the request to fail.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer</code></td>
    <td>The TTL that Amazon Route 53 assigned to all of the resource record sets that it created in the specified hosted zone.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_policy_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the traffic policy that Amazon Route 53 used to create resource record sets in the specified hosted zone.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_policy_type" /></td>
    <td><code>string</code></td>
    <td>The DNS type that Amazon Route 53 assigned to all of the resource record sets that it created for this traffic policy instance.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_policy_version" /></td>
    <td><code>integer</code></td>
    <td>The version of the traffic policy that Amazon Route 53 used to create resource record sets in the specified hosted zone.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_traffic_policy_instances">

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
    <td><CopyableCode code="hosted_zone_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the hosted zone that Amazon Route 53 created resource record sets in.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID that Amazon Route 53 assigned to the new traffic policy instance.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>If State is Failed, an explanation of the reason for the failure. If State is another value, Message is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The DNS name, such as www.example.com, for which Amazon Route 53 responds to queries by using the resource record sets that are associated with this traffic policy instance.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The value of State is one of the following values: Applied Amazon Route 53 has finished creating resource record sets, and changes have propagated to all Route 53 edge locations. Creating Route 53 is creating the resource record sets. Use GetTrafficPolicyInstance to confirm that the CreateTrafficPolicyInstance request completed successfully. Failed Route 53 wasn't able to create or update the resource record sets. When the value of State is Failed, see Message for an explanation of what caused the request to fail.</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer</code></td>
    <td>The TTL that Amazon Route 53 assigned to all of the resource record sets that it created in the specified hosted zone.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_policy_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the traffic policy that Amazon Route 53 used to create resource record sets in the specified hosted zone.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_policy_type" /></td>
    <td><code>string</code></td>
    <td>The DNS type that Amazon Route 53 assigned to all of the resource record sets that it created for this traffic policy instance.</td>
</tr>
<tr>
    <td><CopyableCode code="traffic_policy_version" /></td>
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
    <td><a href="#get_traffic_policy_instance"><CopyableCode code="get_traffic_policy_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specified traffic policy instance. Use GetTrafficPolicyInstance with the id of new traffic policy instance to confirm that the CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance request completed successfully. For more information, see the State response element. In the Route 53 console, traffic policy instances are known as policy records.</td>
</tr>
<tr>
    <td><a href="#list_traffic_policy_instances"><CopyableCode code="list_traffic_policy_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-hostedzoneid"><code>hostedzoneid</code></a>, <a href="#parameter-trafficpolicyinstancename"><code>trafficpolicyinstancename</code></a>, <a href="#parameter-trafficpolicyinstancetype"><code>trafficpolicyinstancetype</code></a>, <a href="#parameter-maxitems"><code>maxitems</code></a></td>
    <td>Gets information about the traffic policy instances that you created by using the current Amazon Web Services account. After you submit an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element. Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100.</td>
</tr>
<tr>
    <td><a href="#create_traffic_policy_instance"><CopyableCode code="create_traffic_policy_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HostedZoneId"><code>HostedZoneId</code></a>, <a href="#parameter-TrafficPolicyId"><code>TrafficPolicyId</code></a>, <a href="#parameter-TrafficPolicyVersion"><code>TrafficPolicyVersion</code></a></td>
    <td></td>
    <td>Creates resource record sets in a specified hosted zone based on the settings in a specified traffic policy version. In addition, CreateTrafficPolicyInstance associates the resource record sets with a specified domain name (such as example.com) or subdomain name (such as www.example.com). Amazon Route 53 responds to DNS queries for the domain or subdomain name by using the resource record sets that CreateTrafficPolicyInstance created. After you submit an CreateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. Use GetTrafficPolicyInstance with the id of new traffic policy instance to confirm that the CreateTrafficPolicyInstance request completed successfully. For more information, see the State response element.</td>
</tr>
<tr>
    <td><a href="#update_traffic_policy_instance"><CopyableCode code="update_traffic_policy_instance" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrafficPolicyId"><code>TrafficPolicyId</code></a>, <a href="#parameter-TrafficPolicyVersion"><code>TrafficPolicyVersion</code></a></td>
    <td></td>
    <td>After you submit a UpdateTrafficPolicyInstance request, there's a brief delay while Route 53 creates the resource record sets that are specified in the traffic policy definition. Use GetTrafficPolicyInstance with the id of updated traffic policy instance confirm that the UpdateTrafficPolicyInstance request completed successfully. For more information, see the State response element. Updates the resource record sets in a specified hosted zone that were created based on the settings in a specified traffic policy version. When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS queries for the root resource record set name (such as example.com) while it replaces one group of resource record sets with another. Route 53 performs the following operations: Route 53 creates a new group of resource record sets based on the specified traffic policy. This is true regardless of how significant the differences are between the existing resource record sets and the new resource record sets. When all of the new resource record sets have been created, Route 53 starts to respond to DNS queries for the root resource record set name (such as example.com) by using the new resource record sets. Route 53 deletes the old group of resource record sets that are associated with the root resource record set name.</td>
</tr>
<tr>
    <td><a href="#delete_traffic_policy_instance"><CopyableCode code="delete_traffic_policy_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a traffic policy instance and all of the resource record sets that Amazon Route 53 created when you created the instance. In the Route 53 console, traffic policy instances are known as policy records.</td>
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
    <td>The ID of the traffic policy instance that you want to delete. When you delete a traffic policy instance, Amazon Route 53 also deletes all of the resource record sets that were created when you created the traffic policy instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-hostedzoneid">
    <td><CopyableCode code="hostedzoneid" /></td>
    <td><code>string</code></td>
    <td>If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstances request. For the value of HostedZoneId, specify the value of HostedZoneIdMarker from the previous response, which is the hosted zone ID of the first traffic policy instance in the next group of traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get.</td>
</tr>
<tr id="parameter-maxitems">
    <td><CopyableCode code="maxitems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of traffic policy instances that you want Amazon Route 53 to return in response to a ListTrafficPolicyInstances request. If you have more than MaxItems traffic policy instances, the value of the IsTruncated element in the response is true, and the values of HostedZoneIdMarker, TrafficPolicyInstanceNameMarker, and TrafficPolicyInstanceTypeMarker represent the first traffic policy instance in the next group of MaxItems traffic policy instances.</td>
</tr>
<tr id="parameter-trafficpolicyinstancename">
    <td><CopyableCode code="trafficpolicyinstancename" /></td>
    <td><code>string</code></td>
    <td>If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstances request. For the value of trafficpolicyinstancename, specify the value of TrafficPolicyInstanceNameMarker from the previous response, which is the name of the first traffic policy instance in the next group of traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get.</td>
</tr>
<tr id="parameter-trafficpolicyinstancetype">
    <td><CopyableCode code="trafficpolicyinstancetype" /></td>
    <td><code>string</code></td>
    <td>If the value of IsTruncated in the previous response was true, you have more traffic policy instances. To get more traffic policy instances, submit another ListTrafficPolicyInstances request. For the value of trafficpolicyinstancetype, specify the value of TrafficPolicyInstanceTypeMarker from the previous response, which is the type of the first traffic policy instance in the next group of traffic policy instances. If the value of IsTruncated in the previous response was false, there are no more traffic policy instances to get.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_traffic_policy_instance"
    values={[
        { label: 'get_traffic_policy_instance', value: 'get_traffic_policy_instance' },
        { label: 'list_traffic_policy_instances', value: 'list_traffic_policy_instances' }
    ]}
>
<TabItem value="get_traffic_policy_instance">

Gets information about a specified traffic policy instance. Use GetTrafficPolicyInstance with the id of new traffic policy instance to confirm that the CreateTrafficPolicyInstance or an UpdateTrafficPolicyInstance request completed successfully. For more information, see the State response element. In the Route 53 console, traffic policy instances are known as policy records.

```sql
SELECT
hosted_zone_id,
id,
message,
name,
state,
ttl,
traffic_policy_id,
traffic_policy_type,
traffic_policy_version
FROM aws.route53.traffic_policy_instances
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_traffic_policy_instances">

Gets information about the traffic policy instances that you created by using the current Amazon Web Services account. After you submit an UpdateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. For more information, see the State response element. Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic policy instances, you can use the MaxItems parameter to list them in groups of up to 100.

```sql
SELECT
hosted_zone_id,
id,
message,
name,
state,
ttl,
traffic_policy_id,
traffic_policy_type,
traffic_policy_version
FROM aws.route53.traffic_policy_instances
WHERE region = '{{ region }}' -- required
AND hostedzoneid = '{{ hostedzoneid }}'
AND trafficpolicyinstancename = '{{ trafficpolicyinstancename }}'
AND trafficpolicyinstancetype = '{{ trafficpolicyinstancetype }}'
AND maxitems = '{{ maxitems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_traffic_policy_instance"
    values={[
        { label: 'create_traffic_policy_instance', value: 'create_traffic_policy_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_traffic_policy_instance">

Creates resource record sets in a specified hosted zone based on the settings in a specified traffic policy version. In addition, CreateTrafficPolicyInstance associates the resource record sets with a specified domain name (such as example.com) or subdomain name (such as www.example.com). Amazon Route 53 responds to DNS queries for the domain or subdomain name by using the resource record sets that CreateTrafficPolicyInstance created. After you submit an CreateTrafficPolicyInstance request, there's a brief delay while Amazon Route 53 creates the resource record sets that are specified in the traffic policy definition. Use GetTrafficPolicyInstance with the id of new traffic policy instance to confirm that the CreateTrafficPolicyInstance request completed successfully. For more information, see the State response element.

```sql
INSERT INTO aws.route53.traffic_policy_instances (
HostedZoneId,
Name,
TTL,
TrafficPolicyId,
TrafficPolicyVersion,
region
)
SELECT 
'{{ HostedZoneId }}' /* required */,
'{{ Name }}',
{{ TTL }},
'{{ TrafficPolicyId }}' /* required */,
{{ TrafficPolicyVersion }} /* required */,
'{{ region }}'
RETURNING
hosted_zone_id,
id,
message,
name,
state,
ttl,
traffic_policy_id,
traffic_policy_type,
traffic_policy_version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: traffic_policy_instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the traffic_policy_instances resource.
    - name: HostedZoneId
      value: "{{ HostedZoneId }}"
    - name: Name
      value: "{{ Name }}"
    - name: TTL
      value: {{ TTL }}
    - name: TrafficPolicyId
      value: "{{ TrafficPolicyId }}"
    - name: TrafficPolicyVersion
      value: {{ TrafficPolicyVersion }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_traffic_policy_instance"
    values={[
        { label: 'update_traffic_policy_instance', value: 'update_traffic_policy_instance' }
    ]}
>
<TabItem value="update_traffic_policy_instance">

After you submit a UpdateTrafficPolicyInstance request, there's a brief delay while Route 53 creates the resource record sets that are specified in the traffic policy definition. Use GetTrafficPolicyInstance with the id of updated traffic policy instance confirm that the UpdateTrafficPolicyInstance request completed successfully. For more information, see the State response element. Updates the resource record sets in a specified hosted zone that were created based on the settings in a specified traffic policy version. When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS queries for the root resource record set name (such as example.com) while it replaces one group of resource record sets with another. Route 53 performs the following operations: Route 53 creates a new group of resource record sets based on the specified traffic policy. This is true regardless of how significant the differences are between the existing resource record sets and the new resource record sets. When all of the new resource record sets have been created, Route 53 starts to respond to DNS queries for the root resource record set name (such as example.com) by using the new resource record sets. Route 53 deletes the old group of resource record sets that are associated with the root resource record set name.

```sql
UPDATE aws.route53.traffic_policy_instances
SET 
TTL = {{ TTL }},
TrafficPolicyId = '{{ TrafficPolicyId }}',
TrafficPolicyVersion = {{ TrafficPolicyVersion }}
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND TrafficPolicyId = '{{ TrafficPolicyId }}' --required
AND TrafficPolicyVersion = '{{ TrafficPolicyVersion }}' --required
RETURNING
hosted_zone_id,
id,
message,
name,
state,
ttl,
traffic_policy_id,
traffic_policy_type,
traffic_policy_version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_traffic_policy_instance"
    values={[
        { label: 'delete_traffic_policy_instance', value: 'delete_traffic_policy_instance' }
    ]}
>
<TabItem value="delete_traffic_policy_instance">

Deletes a traffic policy instance and all of the resource record sets that Amazon Route 53 created when you created the instance. In the Route 53 console, traffic policy instances are known as policy records.

```sql
DELETE FROM aws.route53.traffic_policy_instances
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
