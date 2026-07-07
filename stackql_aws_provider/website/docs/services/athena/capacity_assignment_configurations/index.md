--- 
title: capacity_assignment_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_assignment_configurations
  - athena
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

Creates, updates, deletes, gets or lists a <code>capacity_assignment_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_assignment_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.athena.capacity_assignment_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_capacity_assignment_configuration"
    values={[
        { label: 'get_capacity_assignment_configuration', value: 'get_capacity_assignment_configuration' }
    ]}
>
<TabItem value="get_capacity_assignment_configuration">

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
    <td><CopyableCode code="CapacityAssignments" /></td>
    <td><code>array</code></td>
    <td>The list of assignments that make up the capacity assignment configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="CapacityReservationName" /></td>
    <td><code>string</code></td>
    <td>The name of the reservation that the capacity assignment configuration is for. (pattern: &lt;code&gt;&#91;a-zA-Z0-9._-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_capacity_assignment_configuration"><CopyableCode code="get_capacity_assignment_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the capacity assignment configuration for a capacity reservation, if one exists.</td>
</tr>
<tr>
    <td><a href="#put_capacity_assignment_configuration"><CopyableCode code="put_capacity_assignment_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CapacityReservationName"><code>CapacityReservationName</code></a>, <a href="#parameter-CapacityAssignments"><code>CapacityAssignments</code></a></td>
    <td></td>
    <td>Puts a new capacity assignment configuration for a specified capacity reservation. If a capacity assignment configuration already exists for the capacity reservation, replaces the existing capacity assignment configuration.</td>
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
    defaultValue="get_capacity_assignment_configuration"
    values={[
        { label: 'get_capacity_assignment_configuration', value: 'get_capacity_assignment_configuration' }
    ]}
>
<TabItem value="get_capacity_assignment_configuration">

Gets the capacity assignment configuration for a capacity reservation, if one exists.

```sql
SELECT
CapacityAssignments,
CapacityReservationName
FROM aws.athena.capacity_assignment_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_capacity_assignment_configuration"
    values={[
        { label: 'put_capacity_assignment_configuration', value: 'put_capacity_assignment_configuration' }
    ]}
>
<TabItem value="put_capacity_assignment_configuration">

Puts a new capacity assignment configuration for a specified capacity reservation. If a capacity assignment configuration already exists for the capacity reservation, replaces the existing capacity assignment configuration.

```sql
REPLACE aws.athena.capacity_assignment_configurations
SET 
CapacityReservationName = '{{ CapacityReservationName }}',
CapacityAssignments = '{{ CapacityAssignments }}'
WHERE 
region = '{{ region }}' --required
AND CapacityReservationName = '{{ CapacityReservationName }}' --required
AND CapacityAssignments = '{{ CapacityAssignments }}' --required;
```
</TabItem>
</Tabs>
