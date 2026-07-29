--- 
title: routing_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - routing_controls
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

Creates, updates, deletes, gets or lists a <code>routing_controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="routing_controls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53_recovery_cluster.routing_controls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_routing_controls"
    values={[
        { label: 'list_routing_controls', value: 'list_routing_controls' }
    ]}
>
<TabItem value="list_routing_controls">

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
    <td><CopyableCode code="control_panel_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the control panel where the routing control is located. (pattern: &lt;code&gt;^&#91;A-Za-z0-9:.\/_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="control_panel_name" /></td>
    <td><code>string</code></td>
    <td>The name of the control panel where the routing control is located. Only ASCII characters are supported for control panel names. (pattern: &lt;code&gt;^\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the routing control owner. (pattern: &lt;code&gt;^\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="routing_control_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the routing control. (pattern: &lt;code&gt;^&#91;A-Za-z0-9:.\/_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="routing_control_name" /></td>
    <td><code>string</code></td>
    <td>The name of the routing control. (pattern: &lt;code&gt;^\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="routing_control_state" /></td>
    <td><code>string</code></td>
    <td>The current state of the routing control. When a routing control state is set to ON, traffic flows to a cell. When the state is set to OFF, traffic does not flow. (On, Off)</td>
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
    <td><a href="#list_routing_controls"><CopyableCode code="list_routing_controls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List routing control names and Amazon Resource Names (ARNs), as well as the routing control state for each routing control, along with the control panel name and control panel ARN for the routing controls. If you specify a control panel ARN, this call lists the routing controls in the control panel. Otherwise, it lists all the routing controls in the cluster. A routing control is a simple on/off switch in Route 53 ARC that you can use to route traffic to cells. When a routing control state is set to ON, traffic flows to a cell. When the state is set to OFF, traffic does not flow. Before you can create a routing control, you must first create a cluster, and then host the control in a control panel on the cluster. For more information, see Create routing control structures in the Amazon Route 53 Application Recovery Controller Developer Guide. You access one of the endpoints for the cluster to get or update the routing control state to redirect traffic for your application. You must specify Regional endpoints when you work with API cluster operations to use this API operation to list routing controls in Route 53 ARC. Learn more about working with routing controls in the following topics in the Amazon Route 53 Application Recovery Controller Developer Guide: Viewing and updating routing control states Working with routing controls in Route 53 ARC</td>
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
    defaultValue="list_routing_controls"
    values={[
        { label: 'list_routing_controls', value: 'list_routing_controls' }
    ]}
>
<TabItem value="list_routing_controls">

List routing control names and Amazon Resource Names (ARNs), as well as the routing control state for each routing control, along with the control panel name and control panel ARN for the routing controls. If you specify a control panel ARN, this call lists the routing controls in the control panel. Otherwise, it lists all the routing controls in the cluster. A routing control is a simple on/off switch in Route 53 ARC that you can use to route traffic to cells. When a routing control state is set to ON, traffic flows to a cell. When the state is set to OFF, traffic does not flow. Before you can create a routing control, you must first create a cluster, and then host the control in a control panel on the cluster. For more information, see Create routing control structures in the Amazon Route 53 Application Recovery Controller Developer Guide. You access one of the endpoints for the cluster to get or update the routing control state to redirect traffic for your application. You must specify Regional endpoints when you work with API cluster operations to use this API operation to list routing controls in Route 53 ARC. Learn more about working with routing controls in the following topics in the Amazon Route 53 Application Recovery Controller Developer Guide: Viewing and updating routing control states Working with routing controls in Route 53 ARC

```sql
SELECT
control_panel_arn,
control_panel_name,
owner,
routing_control_arn,
routing_control_name,
routing_control_state
FROM aws.route53_recovery_cluster.routing_controls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
