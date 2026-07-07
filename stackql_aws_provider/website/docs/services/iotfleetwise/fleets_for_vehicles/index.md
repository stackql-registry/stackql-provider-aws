--- 
title: fleets_for_vehicles
hide_title: false
hide_table_of_contents: false
keywords:
  - fleets_for_vehicles
  - iotfleetwise
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

Creates, updates, deletes, gets or lists a <code>fleets_for_vehicles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fleets_for_vehicles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotfleetwise.fleets_for_vehicles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_fleets_for_vehicle"
    values={[
        { label: 'list_fleets_for_vehicle', value: 'list_fleets_for_vehicle' }
    ]}
>
<TabItem value="list_fleets_for_vehicle">

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
    <td><CopyableCode code="fleet" /></td>
    <td><code>string</code></td>
    <td>A list of fleet IDs that the vehicle is associated with.</td>
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
    <td><a href="#list_fleets_for_vehicle"><CopyableCode code="list_fleets_for_vehicle" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of IDs for all fleets that the vehicle is associated with. This API operation uses pagination. Specify the nextToken parameter in the request to return more results.</td>
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
    defaultValue="list_fleets_for_vehicle"
    values={[
        { label: 'list_fleets_for_vehicle', value: 'list_fleets_for_vehicle' }
    ]}
>
<TabItem value="list_fleets_for_vehicle">

Retrieves a list of IDs for all fleets that the vehicle is associated with. This API operation uses pagination. Specify the nextToken parameter in the request to return more results.

```sql
SELECT
fleet
FROM aws.iotfleetwise.fleets_for_vehicles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
