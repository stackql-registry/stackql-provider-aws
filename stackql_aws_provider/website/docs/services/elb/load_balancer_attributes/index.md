--- 
title: load_balancer_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancer_attributes
  - elb
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elb.load_balancer_attributes" /></td></tr>
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
    <td><CopyableCode code="AccessLog" /></td>
    <td><code>string</code></td>
    <td>If enabled, the load balancer captures detailed information of all requests and delivers the information to the Amazon S3 bucket that you specify. For more information, see Enable Access Logs in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="AdditionalAttributes" /></td>
    <td><code>string</code></td>
    <td>Any additional attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionDraining" /></td>
    <td><code>string</code></td>
    <td>If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance. For more information, see Configure Connection Draining in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionSettings" /></td>
    <td><code>string</code></td>
    <td>If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration. By default, Elastic Load Balancing maintains a 60-second idle connection timeout for both front-end and back-end connections of your load balancer. For more information, see Configure Idle Connection Timeout in the Classic Load Balancers Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="CrossZoneLoadBalancing" /></td>
    <td><code>string</code></td>
    <td>If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones. For more information, see Configure Cross-Zone Load Balancing in the Classic Load Balancers Guide.</td>
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
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the attributes for the specified load balancer.</td>
</tr>
<tr>
    <td><a href="#modify_load_balancer_attributes"><CopyableCode code="modify_load_balancer_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-LoadBalancerAttributes"><code>LoadBalancerAttributes</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies the attributes of the specified load balancer. You can modify the load balancer attributes, such as AccessLogs, ConnectionDraining, and CrossZoneLoadBalancing by either enabling or disabling them. Or, you can modify the load balancer attribute ConnectionSettings by specifying an idle connection timeout value for your load balancer. For more information, see the following in the Classic Load Balancers Guide: Cross-Zone Load Balancing Connection Draining Access Logs Idle Connection Timeout</td>
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
<tr id="parameter-LoadBalancerAttributes">
    <td><CopyableCode code="LoadBalancerAttributes" /></td>
    <td><code>object</code></td>
    <td>The attributes for the load balancer.</td>
</tr>
<tr id="parameter-LoadBalancerName">
    <td><CopyableCode code="LoadBalancerName" /></td>
    <td><code>string</code></td>
    <td>The name of the load balancer.</td>
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

Describes the attributes for the specified load balancer.

```sql
SELECT
AccessLog,
AdditionalAttributes,
ConnectionDraining,
ConnectionSettings,
CrossZoneLoadBalancing
FROM aws.elb.load_balancer_attributes
WHERE LoadBalancerName = '{{ LoadBalancerName }}' -- required
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

Modifies the attributes of the specified load balancer. You can modify the load balancer attributes, such as AccessLogs, ConnectionDraining, and CrossZoneLoadBalancing by either enabling or disabling them. Or, you can modify the load balancer attribute ConnectionSettings by specifying an idle connection timeout value for your load balancer. For more information, see the following in the Classic Load Balancers Guide: Cross-Zone Load Balancing Connection Draining Access Logs Idle Connection Timeout

```sql
UPDATE aws.elb.load_balancer_attributes
SET 
-- No updatable properties
WHERE 
LoadBalancerName = '{{ LoadBalancerName }}' --required
AND LoadBalancerAttributes = '{{ LoadBalancerAttributes }}' --required
AND region = '{{ region }}' --required
RETURNING
AccessLog,
AdditionalAttributes,
ConnectionDraining,
ConnectionSettings,
CrossZoneLoadBalancing;
```
</TabItem>
</Tabs>
