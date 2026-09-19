--- 
title: cross_region_routings
hide_title: false
hide_table_of_contents: false
keywords:
  - cross_region_routings
  - connect
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

Creates, updates, deletes, gets or lists a <code>cross_region_routings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cross_region_routings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.cross_region_routings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cross_region_routing"
    values={[
        { label: 'get_cross_region_routing', value: 'get_cross_region_routing' }
    ]}
>
<TabItem value="get_cross_region_routing">

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
    <td><CopyableCode code="isolated_region" /></td>
    <td><code>string</code></td>
    <td>The list of Regions for which cross-region routing is currently disabled (isolated). When a Region appears in this list, contacts originating in that Region will not be routed to agents in other Regions, and agents in that Region will not receive contacts from other Regions.</td>
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
    <td><a href="#get_cross_region_routing"><CopyableCode code="get_cross_region_routing" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current cross-region routing configuration for an Amazon Connect Global Resiliency instance enabled for global routing. This operation returns whether cross-region routing is currently enabled or disabled (isolated) for the instance. This operation is available only for Amazon Connect Global Resiliency instances enabled for global routing.</td>
</tr>
<tr>
    <td><a href="#update_cross_region_routing"><CopyableCode code="update_cross_region_routing" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IsolatedAll"><code>IsolatedAll</code></a></td>
    <td></td>
    <td>Updates the cross-region routing configuration for an Amazon Connect Global Resiliency instance enabled for global routing. When invoked with IsolatedAll set to true, this operation disables cross-region routing, meaning contacts originating in one Region will no longer be routed to agents in another Region. This operation is available only for Amazon Connect Global Resiliency instances enabled for global routing. Reporting and contact search continue to operate globally after you use this operation.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cross_region_routing"
    values={[
        { label: 'get_cross_region_routing', value: 'get_cross_region_routing' }
    ]}
>
<TabItem value="get_cross_region_routing">

Retrieves the current cross-region routing configuration for an Amazon Connect Global Resiliency instance enabled for global routing. This operation returns whether cross-region routing is currently enabled or disabled (isolated) for the instance. This operation is available only for Amazon Connect Global Resiliency instances enabled for global routing.

```sql
SELECT
isolated_region
FROM aws.connect.cross_region_routings
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cross_region_routing"
    values={[
        { label: 'update_cross_region_routing', value: 'update_cross_region_routing' }
    ]}
>
<TabItem value="update_cross_region_routing">

Updates the cross-region routing configuration for an Amazon Connect Global Resiliency instance enabled for global routing. When invoked with IsolatedAll set to true, this operation disables cross-region routing, meaning contacts originating in one Region will no longer be routed to agents in another Region. This operation is available only for Amazon Connect Global Resiliency instances enabled for global routing. Reporting and contact search continue to operate globally after you use this operation.

```sql
UPDATE aws.connect.cross_region_routings
SET 
IsolatedAll = {{ IsolatedAll }}
WHERE 
instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND IsolatedAll = {{ IsolatedAll }} --required;
```
</TabItem>
</Tabs>
