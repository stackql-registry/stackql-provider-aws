--- 
title: ec2_recommendation_projected_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - ec2_recommendation_projected_metrics
  - compute_optimizer
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

Creates, updates, deletes, gets or lists an <code>ec2_recommendation_projected_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ec2_recommendation_projected_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.compute_optimizer.ec2_recommendation_projected_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ec2_recommendation_projected_metrics"
    values={[
        { label: 'get_ec2_recommendation_projected_metrics', value: 'get_ec2_recommendation_projected_metrics' }
    ]}
>
<TabItem value="get_ec2_recommendation_projected_metrics">

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
    <td><CopyableCode code="recommendedOptionProjectedMetrics" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describes projected metrics.</td>
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
    <td><a href="#get_ec2_recommendation_projected_metrics"><CopyableCode code="get_ec2_recommendation_projected_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the projected utilization metrics of Amazon EC2 instance recommendations. The Cpu and Memory metrics are the only projected utilization metrics returned when you run this action. Additionally, the Memory metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see Enabling Memory Utilization with the CloudWatch Agent.</td>
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
    defaultValue="get_ec2_recommendation_projected_metrics"
    values={[
        { label: 'get_ec2_recommendation_projected_metrics', value: 'get_ec2_recommendation_projected_metrics' }
    ]}
>
<TabItem value="get_ec2_recommendation_projected_metrics">

Returns the projected utilization metrics of Amazon EC2 instance recommendations. The Cpu and Memory metrics are the only projected utilization metrics returned when you run this action. Additionally, the Memory metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see Enabling Memory Utilization with the CloudWatch Agent.

```sql
SELECT
recommendedOptionProjectedMetrics
FROM aws.compute_optimizer.ec2_recommendation_projected_metrics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
