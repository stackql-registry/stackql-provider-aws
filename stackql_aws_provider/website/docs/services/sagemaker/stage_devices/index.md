--- 
title: stage_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - stage_devices
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>stage_devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stage_devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.stage_devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_stage_devices"
    values={[
        { label: 'list_stage_devices', value: 'list_stage_devices' }
    ]}
>
<TabItem value="list_stage_devices">

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
    <td><CopyableCode code="deployed_stage_name" /></td>
    <td><code>string</code></td>
    <td>The name of the deployed stage. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the deployment on the device started.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the device. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9_.,;:! &#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="device_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the device. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:&#91;a-z\-&#93;*:&#91;a-z\-&#93;*:\d&#123;12&#125;:&#91;a-z\-&#93;*/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="device_deployment_status" /></td>
    <td><code>string</code></td>
    <td>The deployment status of the device. (READYTODEPLOY, INPROGRESS, DEPLOYED, FAILED, STOPPING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="device_deployment_status_message" /></td>
    <td><code>string</code></td>
    <td>The detailed error message for the deployoment status result.</td>
</tr>
<tr>
    <td><CopyableCode code="device_fleet_name" /></td>
    <td><code>string</code></td>
    <td>The name of the fleet to which the device belongs to. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="device_name" /></td>
    <td><code>string</code></td>
    <td>The name of the device. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="edge_deployment_plan_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the edge deployment plan. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z\-&#93;*:\d&#123;12&#125;:edge-deployment/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="edge_deployment_plan_name" /></td>
    <td><code>string</code></td>
    <td>The name of the edge deployment plan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stage_name" /></td>
    <td><code>string</code></td>
    <td>The name of the stage in the edge deployment plan. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_stage_devices"><CopyableCode code="list_stage_devices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists devices allocated to the stage, containing detailed device information and deployment status.</td>
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
    defaultValue="list_stage_devices"
    values={[
        { label: 'list_stage_devices', value: 'list_stage_devices' }
    ]}
>
<TabItem value="list_stage_devices">

Lists devices allocated to the stage, containing detailed device information and deployment status.

```sql
SELECT
deployed_stage_name,
deployment_start_time,
description,
device_arn,
device_deployment_status,
device_deployment_status_message,
device_fleet_name,
device_name,
edge_deployment_plan_arn,
edge_deployment_plan_name,
stage_name
FROM aws.sagemaker.stage_devices
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
