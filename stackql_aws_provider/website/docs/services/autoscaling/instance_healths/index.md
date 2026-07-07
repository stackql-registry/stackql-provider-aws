--- 
title: instance_healths
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_healths
  - autoscaling
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

Creates, updates, deletes, gets or lists an <code>instance_healths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_healths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.instance_healths" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#set_instance_health"><CopyableCode code="set_instance_health" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-HealthStatus"><code>HealthStatus</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ShouldRespectGracePeriod"><code>ShouldRespectGracePeriod</code></a></td>
    <td>Sets the health status of the specified instance. For more information, see Set up a custom health check for your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.</td>
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
<tr id="parameter-HealthStatus">
    <td><CopyableCode code="HealthStatus" /></td>
    <td><code>string</code></td>
    <td>The health status of the instance. Set to Healthy to have the instance remain in service. Set to Unhealthy to have the instance be out of service. Amazon EC2 Auto Scaling terminates and replaces the unhealthy instance.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ShouldRespectGracePeriod">
    <td><CopyableCode code="ShouldRespectGracePeriod" /></td>
    <td><code>boolean</code></td>
    <td>If the Auto Scaling group of the specified instance has a HealthCheckGracePeriod specified for the group, by default, this call respects the grace period. Set this to False, to have the call not respect the grace period associated with the group. For more information about the health check grace period, see Set the health check grace period for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="set_instance_health"
    values={[
        { label: 'set_instance_health', value: 'set_instance_health' }
    ]}
>
<TabItem value="set_instance_health">

Sets the health status of the specified instance. For more information, see Set up a custom health check for your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.

```sql
UPDATE aws.autoscaling.instance_healths
SET 
-- No updatable properties
WHERE 
InstanceId = '{{ InstanceId }}' --required
AND HealthStatus = '{{ HealthStatus }}' --required
AND region = '{{ region }}' --required
AND ShouldRespectGracePeriod = {{ ShouldRespectGracePeriod}};
```
</TabItem>
</Tabs>
