--- 
title: routing_control_states
hide_title: false
hide_table_of_contents: false
keywords:
  - routing_control_states
  - route53_recovery_cluster
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

Creates, updates, deletes, gets or lists a <code>routing_control_states</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="routing_control_states" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53_recovery_cluster.routing_control_states" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_routing_control_state"
    values={[
        { label: 'get_routing_control_state', value: 'get_routing_control_state' }
    ]}
>
<TabItem value="get_routing_control_state">

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
    <td><CopyableCode code="RoutingControlArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the response. (pattern: &lt;code&gt;^&#91;A-Za-z0-9:.\/_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoutingControlName" /></td>
    <td><code>string</code></td>
    <td>The routing control name. (pattern: &lt;code&gt;^\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoutingControlState" /></td>
    <td><code>string</code></td>
    <td>The state of the routing control. (On, Off)</td>
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
    <td><a href="#get_routing_control_state"><CopyableCode code="get_routing_control_state" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the state for a routing control. A routing control is a simple on/off switch that you can use to route traffic to cells. When a routing control state is set to ON, traffic flows to a cell. When the state is set to OFF, traffic does not flow. Before you can create a routing control, you must first create a cluster, and then host the control in a control panel on the cluster. For more information, see Create routing control structures in the Amazon Route 53 Application Recovery Controller Developer Guide. You access one of the endpoints for the cluster to get or update the routing control state to redirect traffic for your application. You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Route 53 ARC. To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see API examples in the Amazon Route 53 Application Recovery Controller Developer Guide. Learn more about working with routing controls in the following topics in the Amazon Route 53 Application Recovery Controller Developer Guide: Viewing and updating routing control states Working with routing controls in Route 53 ARC</td>
</tr>
<tr>
    <td><a href="#update_routing_control_state"><CopyableCode code="update_routing_control_state" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RoutingControlArn"><code>RoutingControlArn</code></a>, <a href="#parameter-RoutingControlState"><code>RoutingControlState</code></a></td>
    <td></td>
    <td>Set the state of the routing control to reroute traffic. You can set the value to ON or OFF. When the state is ON, traffic flows to a cell. When the state is OFF, traffic does not flow. With Route 53 ARC, you can add safety rules for routing controls, which are safeguards for routing control state updates that help prevent unexpected outcomes, like fail open traffic routing. However, there are scenarios when you might want to bypass the routing control safeguards that are enforced with safety rules that you've configured. For example, you might want to fail over quickly for disaster recovery, and one or more safety rules might be unexpectedly preventing you from updating a routing control state to reroute traffic. In a "break glass" scenario like this, you can override one or more safety rules to change a routing control state and fail over your application. The SafetyRulesToOverride property enables you override one or more safety rules and update routing control states. For more information, see Override safety rules to reroute traffic in the Amazon Route 53 Application Recovery Controller Developer Guide. You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Route 53 ARC. To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see API examples in the Amazon Route 53 Application Recovery Controller Developer Guide. Viewing and updating routing control states Working with routing controls overall</td>
</tr>
<tr>
    <td><a href="#update_routing_control_states"><CopyableCode code="update_routing_control_states" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UpdateRoutingControlStateEntries"><code>UpdateRoutingControlStateEntries</code></a></td>
    <td></td>
    <td>Set multiple routing control states. You can set the value for each state to be ON or OFF. When the state is ON, traffic flows to a cell. When it's OFF, traffic does not flow. With Route 53 ARC, you can add safety rules for routing controls, which are safeguards for routing control state updates that help prevent unexpected outcomes, like fail open traffic routing. However, there are scenarios when you might want to bypass the routing control safeguards that are enforced with safety rules that you've configured. For example, you might want to fail over quickly for disaster recovery, and one or more safety rules might be unexpectedly preventing you from updating a routing control state to reroute traffic. In a "break glass" scenario like this, you can override one or more safety rules to change a routing control state and fail over your application. The SafetyRulesToOverride property enables you override one or more safety rules and update routing control states. For more information, see Override safety rules to reroute traffic in the Amazon Route 53 Application Recovery Controller Developer Guide. You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Route 53 ARC. To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see API examples in the Amazon Route 53 Application Recovery Controller Developer Guide. Viewing and updating routing control states Working with routing controls overall</td>
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
    defaultValue="get_routing_control_state"
    values={[
        { label: 'get_routing_control_state', value: 'get_routing_control_state' }
    ]}
>
<TabItem value="get_routing_control_state">

Get the state for a routing control. A routing control is a simple on/off switch that you can use to route traffic to cells. When a routing control state is set to ON, traffic flows to a cell. When the state is set to OFF, traffic does not flow. Before you can create a routing control, you must first create a cluster, and then host the control in a control panel on the cluster. For more information, see Create routing control structures in the Amazon Route 53 Application Recovery Controller Developer Guide. You access one of the endpoints for the cluster to get or update the routing control state to redirect traffic for your application. You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Route 53 ARC. To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see API examples in the Amazon Route 53 Application Recovery Controller Developer Guide. Learn more about working with routing controls in the following topics in the Amazon Route 53 Application Recovery Controller Developer Guide: Viewing and updating routing control states Working with routing controls in Route 53 ARC

```sql
SELECT
RoutingControlArn,
RoutingControlName,
RoutingControlState
FROM aws.route53_recovery_cluster.routing_control_states
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_routing_control_state"
    values={[
        { label: 'update_routing_control_state', value: 'update_routing_control_state' },
        { label: 'update_routing_control_states', value: 'update_routing_control_states' }
    ]}
>
<TabItem value="update_routing_control_state">

Set the state of the routing control to reroute traffic. You can set the value to ON or OFF. When the state is ON, traffic flows to a cell. When the state is OFF, traffic does not flow. With Route 53 ARC, you can add safety rules for routing controls, which are safeguards for routing control state updates that help prevent unexpected outcomes, like fail open traffic routing. However, there are scenarios when you might want to bypass the routing control safeguards that are enforced with safety rules that you've configured. For example, you might want to fail over quickly for disaster recovery, and one or more safety rules might be unexpectedly preventing you from updating a routing control state to reroute traffic. In a "break glass" scenario like this, you can override one or more safety rules to change a routing control state and fail over your application. The SafetyRulesToOverride property enables you override one or more safety rules and update routing control states. For more information, see Override safety rules to reroute traffic in the Amazon Route 53 Application Recovery Controller Developer Guide. You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Route 53 ARC. To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see API examples in the Amazon Route 53 Application Recovery Controller Developer Guide. Viewing and updating routing control states Working with routing controls overall

```sql
UPDATE aws.route53_recovery_cluster.routing_control_states
SET 
RoutingControlArn = '{{ RoutingControlArn }}',
RoutingControlState = '{{ RoutingControlState }}',
SafetyRulesToOverride = '{{ SafetyRulesToOverride }}'
WHERE 
region = '{{ region }}' --required
AND RoutingControlArn = '{{ RoutingControlArn }}' --required
AND RoutingControlState = '{{ RoutingControlState }}' --required;
```
</TabItem>
<TabItem value="update_routing_control_states">

Set multiple routing control states. You can set the value for each state to be ON or OFF. When the state is ON, traffic flows to a cell. When it's OFF, traffic does not flow. With Route 53 ARC, you can add safety rules for routing controls, which are safeguards for routing control state updates that help prevent unexpected outcomes, like fail open traffic routing. However, there are scenarios when you might want to bypass the routing control safeguards that are enforced with safety rules that you've configured. For example, you might want to fail over quickly for disaster recovery, and one or more safety rules might be unexpectedly preventing you from updating a routing control state to reroute traffic. In a "break glass" scenario like this, you can override one or more safety rules to change a routing control state and fail over your application. The SafetyRulesToOverride property enables you override one or more safety rules and update routing control states. For more information, see Override safety rules to reroute traffic in the Amazon Route 53 Application Recovery Controller Developer Guide. You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Route 53 ARC. To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see API examples in the Amazon Route 53 Application Recovery Controller Developer Guide. Viewing and updating routing control states Working with routing controls overall

```sql
UPDATE aws.route53_recovery_cluster.routing_control_states
SET 
UpdateRoutingControlStateEntries = '{{ UpdateRoutingControlStateEntries }}',
SafetyRulesToOverride = '{{ SafetyRulesToOverride }}'
WHERE 
region = '{{ region }}' --required
AND UpdateRoutingControlStateEntries = '{{ UpdateRoutingControlStateEntries }}' --required;
```
</TabItem>
</Tabs>
