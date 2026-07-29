--- 
title: adjustment_types
hide_title: false
hide_table_of_contents: false
keywords:
  - adjustment_types
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

Creates, updates, deletes, gets or lists an <code>adjustment_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="adjustment_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.adjustment_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_adjustment_types"
    values={[
        { label: 'describe_adjustment_types', value: 'describe_adjustment_types' }
    ]}
>
<TabItem value="describe_adjustment_types">

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
    <td><CopyableCode code="adjustment_type" /></td>
    <td><code>string</code></td>
    <td>The policy adjustment type. The valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity.</td>
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
    <td><a href="#describe_adjustment_types"><CopyableCode code="describe_adjustment_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the available adjustment types for step scaling and simple scaling policies. The following adjustment types are supported: ChangeInCapacity ExactCapacity PercentChangeInCapacity</td>
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
    defaultValue="describe_adjustment_types"
    values={[
        { label: 'describe_adjustment_types', value: 'describe_adjustment_types' }
    ]}
>
<TabItem value="describe_adjustment_types">

Describes the available adjustment types for step scaling and simple scaling policies. The following adjustment types are supported: ChangeInCapacity ExactCapacity PercentChangeInCapacity

```sql
SELECT
adjustment_type
FROM aws.autoscaling.adjustment_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
