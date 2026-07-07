--- 
title: target_healths
hide_title: false
hide_table_of_contents: false
keywords:
  - target_healths
  - elbv2
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

Creates, updates, deletes, gets or lists a <code>target_healths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="target_healths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elbv2.target_healths" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_target_health"
    values={[
        { label: 'describe_target_health', value: 'describe_target_health' }
    ]}
>
<TabItem value="describe_target_health">

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
    <td><CopyableCode code="AdministrativeOverride" /></td>
    <td><code>string</code></td>
    <td>The administrative override information for the target.</td>
</tr>
<tr>
    <td><CopyableCode code="AnomalyDetection" /></td>
    <td><code>string</code></td>
    <td>The anomaly detection result for the target. If no anomalies were detected, the result is normal. If anomalies were detected, the result is anomalous.</td>
</tr>
<tr>
    <td><CopyableCode code="HealthCheckPort" /></td>
    <td><code>string</code></td>
    <td>The port to use to connect with the target.</td>
</tr>
<tr>
    <td><CopyableCode code="Target" /></td>
    <td><code>string</code></td>
    <td>The description of the target.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetHealth" /></td>
    <td><code>string</code></td>
    <td>The health information for the target.</td>
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
    <td><a href="#describe_target_health"><CopyableCode code="describe_target_health" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TargetGroupArn"><code>TargetGroupArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Targets"><code>Targets</code></a>, <a href="#parameter-Include"><code>Include</code></a></td>
    <td>Describes the health of the specified targets or all of your targets.</td>
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
<tr id="parameter-TargetGroupArn">
    <td><CopyableCode code="TargetGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the target group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Include">
    <td><CopyableCode code="Include" /></td>
    <td><code>array</code></td>
    <td>Used to include anomaly detection information.</td>
</tr>
<tr id="parameter-Targets">
    <td><CopyableCode code="Targets" /></td>
    <td><code>array</code></td>
    <td>The targets.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_target_health"
    values={[
        { label: 'describe_target_health', value: 'describe_target_health' }
    ]}
>
<TabItem value="describe_target_health">

Describes the health of the specified targets or all of your targets.

```sql
SELECT
AdministrativeOverride,
AnomalyDetection,
HealthCheckPort,
Target,
TargetHealth
FROM aws.elbv2.target_healths
WHERE TargetGroupArn = '{{ TargetGroupArn }}' -- required
AND region = '{{ region }}' -- required
AND Targets = '{{ Targets }}'
AND Include = '{{ Include }}'
;
```
</TabItem>
</Tabs>
