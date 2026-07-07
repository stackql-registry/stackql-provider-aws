--- 
title: control_panels
hide_title: false
hide_table_of_contents: false
keywords:
  - control_panels
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

Creates, updates, deletes, gets or lists a <code>control_panels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="control_panels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53_recovery_control_config.control_panels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_control_panel"
    values={[
        { label: 'describe_control_panel', value: 'describe_control_panel' },
        { label: 'list_control_panels', value: 'list_control_panels' }
    ]}
>
<TabItem value="describe_control_panel">

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
    <td><CopyableCode code="ClusterArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the cluster that includes the control panel. (pattern: &lt;code&gt;^&#91;A-Za-z0-9:\/_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ControlPanelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the control panel. (pattern: &lt;code&gt;^&#91;A-Za-z0-9:\/_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultControlPanel" /></td>
    <td><code>boolean</code></td>
    <td>A flag that Amazon Route 53 Application Recovery Controller sets to true to designate the default control panel for a cluster. When you create a cluster, Amazon Route 53 Application Recovery Controller creates a control panel, and sets this flag for that control panel. If you create a control panel yourself, this flag is set to false.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the control panel. You can use any non-white space character in the name. (pattern: &lt;code&gt;^\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the control panel owner. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoutingControlCount" /></td>
    <td><code>integer</code></td>
    <td>The number of routing controls in the control panel.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The deployment status of control panel. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION. (PENDING, DEPLOYED, PENDING_DELETION)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_control_panels">

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
    <td><CopyableCode code="ClusterArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the cluster that includes the control panel. (pattern: &lt;code&gt;^&#91;A-Za-z0-9:\/_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ControlPanelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the control panel. (pattern: &lt;code&gt;^&#91;A-Za-z0-9:\/_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultControlPanel" /></td>
    <td><code>boolean</code></td>
    <td>A flag that Amazon Route 53 Application Recovery Controller sets to true to designate the default control panel for a cluster. When you create a cluster, Amazon Route 53 Application Recovery Controller creates a control panel, and sets this flag for that control panel. If you create a control panel yourself, this flag is set to false.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the control panel. You can use any non-white space character in the name. (pattern: &lt;code&gt;^\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the control panel owner. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoutingControlCount" /></td>
    <td><code>integer</code></td>
    <td>The number of routing controls in the control panel.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The deployment status of control panel. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION. (PENDING, DEPLOYED, PENDING_DELETION)</td>
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
    <td><a href="#describe_control_panel"><CopyableCode code="describe_control_panel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-control_panel_arn"><code>control_panel_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays details about a control panel.</td>
</tr>
<tr>
    <td><a href="#list_control_panels"><CopyableCode code="list_control_panels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterArn"><code>ClusterArn</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns an array of control panels in an account or in a cluster.</td>
</tr>
<tr>
    <td><a href="#create_control_panel"><CopyableCode code="create_control_panel" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterArn"><code>ClusterArn</code></a>, <a href="#parameter-ControlPanelName"><code>ControlPanelName</code></a></td>
    <td></td>
    <td>Creates a new control panel. A control panel represents a group of routing controls that can be changed together in a single transaction. You can use a control panel to centrally view the operational status of applications across your organization, and trigger multi-app failovers in a single transaction, for example, to fail over an Availability Zone or Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#update_control_panel"><CopyableCode code="update_control_panel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ControlPanelArn"><code>ControlPanelArn</code></a>, <a href="#parameter-ControlPanelName"><code>ControlPanelName</code></a></td>
    <td></td>
    <td>Updates a control panel. The only update you can make to a control panel is to change the name of the control panel.</td>
</tr>
<tr>
    <td><a href="#delete_control_panel"><CopyableCode code="delete_control_panel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-control_panel_arn"><code>control_panel_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a control panel.</td>
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
<tr id="parameter-ClusterArn">
    <td><CopyableCode code="ClusterArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a cluster.</td>
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
    defaultValue="describe_control_panel"
    values={[
        { label: 'describe_control_panel', value: 'describe_control_panel' },
        { label: 'list_control_panels', value: 'list_control_panels' }
    ]}
>
<TabItem value="describe_control_panel">

Displays details about a control panel.

```sql
SELECT
ClusterArn,
ControlPanelArn,
DefaultControlPanel,
Name,
Owner,
RoutingControlCount,
Status
FROM aws.route53_recovery_control_config.control_panels
WHERE control_panel_arn = '{{ control_panel_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_control_panels">

Returns an array of control panels in an account or in a cluster.

```sql
SELECT
ClusterArn,
ControlPanelArn,
DefaultControlPanel,
Name,
Owner,
RoutingControlCount,
Status
FROM aws.route53_recovery_control_config.control_panels
WHERE region = '{{ region }}' -- required
AND ClusterArn = '{{ ClusterArn }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_control_panel"
    values={[
        { label: 'create_control_panel', value: 'create_control_panel' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_control_panel">

Creates a new control panel. A control panel represents a group of routing controls that can be changed together in a single transaction. You can use a control panel to centrally view the operational status of applications across your organization, and trigger multi-app failovers in a single transaction, for example, to fail over an Availability Zone or Amazon Web Services Region.

```sql
INSERT INTO aws.route53_recovery_control_config.control_panels (
ClientToken,
ClusterArn,
ControlPanelName,
Tags,
region
)
SELECT 
'{{ ClientToken }}',
'{{ ClusterArn }}' /* required */,
'{{ ControlPanelName }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
ControlPanel
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: control_panels
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the control_panels resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: ClusterArn
      value: "{{ ClusterArn }}"
    - name: ControlPanelName
      value: "{{ ControlPanelName }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_control_panel"
    values={[
        { label: 'update_control_panel', value: 'update_control_panel' }
    ]}
>
<TabItem value="update_control_panel">

Updates a control panel. The only update you can make to a control panel is to change the name of the control panel.

```sql
UPDATE aws.route53_recovery_control_config.control_panels
SET 
ControlPanelArn = '{{ ControlPanelArn }}',
ControlPanelName = '{{ ControlPanelName }}'
WHERE 
region = '{{ region }}' --required
AND ControlPanelArn = '{{ ControlPanelArn }}' --required
AND ControlPanelName = '{{ ControlPanelName }}' --required
RETURNING
ControlPanel;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_control_panel"
    values={[
        { label: 'delete_control_panel', value: 'delete_control_panel' }
    ]}
>
<TabItem value="delete_control_panel">

Deletes a control panel.

```sql
DELETE FROM aws.route53_recovery_control_config.control_panels
WHERE control_panel_arn = '{{ control_panel_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
