--- 
title: managed_scaling_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_scaling_policies
  - emr
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

Creates, updates, deletes, gets or lists a <code>managed_scaling_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_scaling_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.managed_scaling_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_managed_scaling_policy"
    values={[
        { label: 'get_managed_scaling_policy', value: 'get_managed_scaling_policy' }
    ]}
>
<TabItem value="get_managed_scaling_policy">

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
    <td><CopyableCode code="compute_limits" /></td>
    <td><code>object</code></td>
    <td>The Amazon EC2 unit limits for a managed scaling policy. The managed scaling activity of a cluster is not allowed to go above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="scaling_strategy" /></td>
    <td><code>string</code></td>
    <td>Determines whether a custom scaling utilization performance index can be set. Possible values include ADVANCED or DEFAULT. (DEFAULT, ADVANCED)</td>
</tr>
<tr>
    <td><CopyableCode code="utilization_performance_index" /></td>
    <td><code>integer</code></td>
    <td>An integer value that represents an advanced scaling strategy. Setting a higher value optimizes for performance. Setting a lower value optimizes for resource conservation. Setting the value to 50 balances performance and resource conservation. Possible values are 1, 25, 50, 75, and 100.</td>
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
    <td><a href="#get_managed_scaling_policy"><CopyableCode code="get_managed_scaling_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fetches the attached managed scaling policy for an Amazon EMR cluster.</td>
</tr>
<tr>
    <td><a href="#remove_managed_scaling_policy"><CopyableCode code="remove_managed_scaling_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterId"><code>ClusterId</code></a></td>
    <td></td>
    <td>Removes a managed scaling policy from a specified Amazon EMR cluster.</td>
</tr>
<tr>
    <td><a href="#put_managed_scaling_policy"><CopyableCode code="put_managed_scaling_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterId"><code>ClusterId</code></a>, <a href="#parameter-ManagedScalingPolicy"><code>ManagedScalingPolicy</code></a></td>
    <td></td>
    <td>Creates or updates a managed scaling policy for an Amazon EMR cluster. The managed scaling policy defines the limits for resources, such as Amazon EC2 instances that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration.</td>
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
    defaultValue="get_managed_scaling_policy"
    values={[
        { label: 'get_managed_scaling_policy', value: 'get_managed_scaling_policy' }
    ]}
>
<TabItem value="get_managed_scaling_policy">

Fetches the attached managed scaling policy for an Amazon EMR cluster.

```sql
SELECT
compute_limits,
scaling_strategy,
utilization_performance_index
FROM aws.emr.managed_scaling_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="remove_managed_scaling_policy"
    values={[
        { label: 'remove_managed_scaling_policy', value: 'remove_managed_scaling_policy' }
    ]}
>
<TabItem value="remove_managed_scaling_policy">

Removes a managed scaling policy from a specified Amazon EMR cluster.

```sql
UPDATE aws.emr.managed_scaling_policies
SET 
ClusterId = '{{ ClusterId }}'
WHERE 
region = '{{ region }}' --required
AND ClusterId = '{{ ClusterId }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_managed_scaling_policy"
    values={[
        { label: 'put_managed_scaling_policy', value: 'put_managed_scaling_policy' }
    ]}
>
<TabItem value="put_managed_scaling_policy">

Creates or updates a managed scaling policy for an Amazon EMR cluster. The managed scaling policy defines the limits for resources, such as Amazon EC2 instances that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration.

```sql
REPLACE aws.emr.managed_scaling_policies
SET 
ClusterId = '{{ ClusterId }}',
ManagedScalingPolicy = '{{ ManagedScalingPolicy }}'
WHERE 
region = '{{ region }}' --required
AND ClusterId = '{{ ClusterId }}' --required
AND ManagedScalingPolicy = '{{ ManagedScalingPolicy }}' --required;
```
</TabItem>
</Tabs>
