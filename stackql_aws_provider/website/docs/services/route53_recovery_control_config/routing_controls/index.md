--- 
title: routing_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - routing_controls
  - route53_recovery_control_config
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53_recovery_control_config.routing_controls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_routing_control"
    values={[
        { label: 'describe_routing_control', value: 'describe_routing_control' },
        { label: 'list_routing_controls', value: 'list_routing_controls' }
    ]}
>
<TabItem value="describe_routing_control">

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
    <td>The Amazon Resource Name (ARN) of the control panel that includes the routing control. (pattern: &lt;code&gt;^&#91;A-Za-z0-9:\/_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the routing control. (pattern: &lt;code&gt;^\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the routing control owner. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="routing_control_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the routing control. (pattern: &lt;code&gt;^&#91;A-Za-z0-9:\/_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The deployment status of a routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION. (PENDING, DEPLOYED, PENDING_DELETION)</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td>The Amazon Resource Name (ARN) of the control panel that includes the routing control. (pattern: &lt;code&gt;^&#91;A-Za-z0-9:\/_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the routing control. (pattern: &lt;code&gt;^\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the routing control owner. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="routing_control_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the routing control. (pattern: &lt;code&gt;^&#91;A-Za-z0-9:\/_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The deployment status of a routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION. (PENDING, DEPLOYED, PENDING_DELETION)</td>
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
    <td><a href="#describe_routing_control"><CopyableCode code="describe_routing_control" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-routing_control_arn"><code>routing_control_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays details about a routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</td>
</tr>
<tr>
    <td><a href="#list_routing_controls"><CopyableCode code="list_routing_controls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-control_panel_arn"><code>control_panel_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns an array of routing controls for a control panel. A routing control is an Amazon Route 53 Application Recovery Controller construct that has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.</td>
</tr>
<tr>
    <td><a href="#create_routing_control"><CopyableCode code="create_routing_control" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterArn"><code>ClusterArn</code></a>, <a href="#parameter-RoutingControlName"><code>RoutingControlName</code></a></td>
    <td></td>
    <td>Creates a new routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</td>
</tr>
<tr>
    <td><a href="#update_routing_control"><CopyableCode code="update_routing_control" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RoutingControlArn"><code>RoutingControlArn</code></a>, <a href="#parameter-RoutingControlName"><code>RoutingControlName</code></a></td>
    <td></td>
    <td>Updates a routing control. You can only update the name of the routing control. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</td>
</tr>
<tr>
    <td><a href="#delete_routing_control"><CopyableCode code="delete_routing_control" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-routing_control_arn"><code>routing_control_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a routing control.</td>
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
<tr id="parameter-control_panel_arn">
    <td><CopyableCode code="control_panel_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the control panel.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-routing_control_arn">
    <td><CopyableCode code="routing_control_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the routing control that you're deleting.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of objects that you want to return with this call.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies which batch of results you want to see.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_routing_control"
    values={[
        { label: 'describe_routing_control', value: 'describe_routing_control' },
        { label: 'list_routing_controls', value: 'list_routing_controls' }
    ]}
>
<TabItem value="describe_routing_control">

Displays details about a routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.

```sql
SELECT
control_panel_arn,
name,
owner,
routing_control_arn,
status
FROM aws.route53_recovery_control_config.routing_controls
WHERE routing_control_arn = '{{ routing_control_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_routing_controls">

Returns an array of routing controls for a control panel. A routing control is an Amazon Route 53 Application Recovery Controller construct that has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.

```sql
SELECT
control_panel_arn,
name,
owner,
routing_control_arn,
status
FROM aws.route53_recovery_control_config.routing_controls
WHERE control_panel_arn = '{{ control_panel_arn }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_routing_control"
    values={[
        { label: 'create_routing_control', value: 'create_routing_control' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_routing_control">

Creates a new routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control traffic routing. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.

```sql
INSERT INTO aws.route53_recovery_control_config.routing_controls (
ClientToken,
ClusterArn,
ControlPanelArn,
RoutingControlName,
region
)
SELECT 
'{{ ClientToken }}',
'{{ ClusterArn }}' /* required */,
'{{ ControlPanelArn }}',
'{{ RoutingControlName }}' /* required */,
'{{ region }}'
RETURNING
routing_control
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: routing_controls
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the routing_controls resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: ClusterArn
      value: "{{ ClusterArn }}"
    - name: ControlPanelArn
      value: "{{ ControlPanelArn }}"
    - name: RoutingControlName
      value: "{{ RoutingControlName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_routing_control"
    values={[
        { label: 'update_routing_control', value: 'update_routing_control' }
    ]}
>
<TabItem value="update_routing_control">

Updates a routing control. You can only update the name of the routing control. To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.

```sql
UPDATE aws.route53_recovery_control_config.routing_controls
SET 
RoutingControlArn = '{{ RoutingControlArn }}',
RoutingControlName = '{{ RoutingControlName }}'
WHERE 
region = '{{ region }}' --required
AND RoutingControlArn = '{{ RoutingControlArn }}' --required
AND RoutingControlName = '{{ RoutingControlName }}' --required
RETURNING
routing_control;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_routing_control"
    values={[
        { label: 'delete_routing_control', value: 'delete_routing_control' }
    ]}
>
<TabItem value="delete_routing_control">

Deletes a routing control.

```sql
DELETE FROM aws.route53_recovery_control_config.routing_controls
WHERE routing_control_arn = '{{ routing_control_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
