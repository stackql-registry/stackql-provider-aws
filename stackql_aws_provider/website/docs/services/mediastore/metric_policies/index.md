--- 
title: metric_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - metric_policies
  - mediastore
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

Creates, updates, deletes, gets or lists a <code>metric_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metric_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediastore.metric_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_metric_policy"
    values={[
        { label: 'get_metric_policy', value: 'get_metric_policy' }
    ]}
>
<TabItem value="get_metric_policy">

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
    <td><CopyableCode code="ContainerLevelMetrics" /></td>
    <td><code>string</code></td>
    <td>A setting to enable or disable metrics at the container level. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="MetricPolicyRules" /></td>
    <td><code>array</code></td>
    <td>A parameter that holds an array of rules that enable metrics at the object level. This parameter is optional, but if you choose to include it, you must also include at least one rule. By default, you can include up to five rules. You can also request a quota increase to allow up to 300 rules per policy.</td>
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
    <td><a href="#get_metric_policy"><CopyableCode code="get_metric_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the metric policy for the specified container.</td>
</tr>
<tr>
    <td><a href="#put_metric_policy"><CopyableCode code="put_metric_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContainerName"><code>ContainerName</code></a>, <a href="#parameter-MetricPolicy"><code>MetricPolicy</code></a></td>
    <td></td>
    <td>The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.</td>
</tr>
<tr>
    <td><a href="#delete_metric_policy"><CopyableCode code="delete_metric_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.</td>
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
    defaultValue="get_metric_policy"
    values={[
        { label: 'get_metric_policy', value: 'get_metric_policy' }
    ]}
>
<TabItem value="get_metric_policy">

Returns the metric policy for the specified container.

```sql
SELECT
ContainerLevelMetrics,
MetricPolicyRules
FROM aws.mediastore.metric_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_metric_policy"
    values={[
        { label: 'put_metric_policy', value: 'put_metric_policy' }
    ]}
>
<TabItem value="put_metric_policy">

The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.

```sql
REPLACE aws.mediastore.metric_policies
SET 
ContainerName = '{{ ContainerName }}',
MetricPolicy = '{{ MetricPolicy }}'
WHERE 
region = '{{ region }}' --required
AND ContainerName = '{{ ContainerName }}' --required
AND MetricPolicy = '{{ MetricPolicy }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_metric_policy"
    values={[
        { label: 'delete_metric_policy', value: 'delete_metric_policy' }
    ]}
>
<TabItem value="delete_metric_policy">

Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.

```sql
DELETE FROM aws.mediastore.metric_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
