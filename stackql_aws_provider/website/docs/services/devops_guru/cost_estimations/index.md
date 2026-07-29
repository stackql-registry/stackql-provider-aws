--- 
title: cost_estimations
hide_title: false
hide_table_of_contents: false
keywords:
  - cost_estimations
  - devops_guru
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

Creates, updates, deletes, gets or lists a <code>cost_estimations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cost_estimations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_guru.cost_estimations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cost_estimation"
    values={[
        { label: 'get_cost_estimation', value: 'get_cost_estimation' }
    ]}
>
<TabItem value="get_cost_estimation">

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
    <td><CopyableCode code="cost" /></td>
    <td><code>number (double)</code></td>
    <td>The total estimated monthly cost to analyze the active resources for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="count" /></td>
    <td><code>integer</code></td>
    <td>The number of active resources analyzed for this service to create a monthly cost estimate.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the resource. The resource is ACTIVE if it produces metrics, events, or logs within an hour, otherwise it is INACTIVE. You pay for the number of active Amazon Web Services resource hours analyzed for each resource. Inactive resources are not charged. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the Amazon Web Services resource. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;+&#91;a-zA-Z0-9-_:&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="unit_cost" /></td>
    <td><code>number (double)</code></td>
    <td>The price per hour to analyze the resources in the service. For more information, see Estimate your Amazon DevOps Guru costs and Amazon DevOps Guru pricing.</td>
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
    <td><a href="#get_cost_estimation"><CopyableCode code="get_cost_estimation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see Estimate your Amazon DevOps Guru costs and Amazon DevOps Guru pricing.</td>
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
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cost_estimation"
    values={[
        { label: 'get_cost_estimation', value: 'get_cost_estimation' }
    ]}
>
<TabItem value="get_cost_estimation">

Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see Estimate your Amazon DevOps Guru costs and Amazon DevOps Guru pricing.

```sql
SELECT
cost,
count,
state,
type,
unit_cost
FROM aws.devops_guru.cost_estimations
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
