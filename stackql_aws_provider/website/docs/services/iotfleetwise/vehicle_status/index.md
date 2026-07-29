--- 
title: vehicle_status
hide_title: false
hide_table_of_contents: false
keywords:
  - vehicle_status
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

Creates, updates, deletes, gets or lists a <code>vehicle_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vehicle_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotfleetwise.vehicle_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vehicle_status"
    values={[
        { label: 'get_vehicle_status', value: 'get_vehicle_status' }
    ]}
>
<TabItem value="get_vehicle_status">

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
    <td><CopyableCode code="campaign_name" /></td>
    <td><code>string</code></td>
    <td>The name of a campaign. (pattern: &lt;code&gt;&#91;a-zA-Z\d\-_:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a campaign, which can be one of the following: CREATED - The campaign exists but is not yet approved. READY - The campaign is approved but has not been deployed to the vehicle. Data has not arrived at the vehicle yet. HEALTHY - The campaign is deployed to the vehicle. SUSPENDED - The campaign is suspended and data collection is paused. DELETING - The campaign is being removed from the vehicle. READY_FOR_CHECKIN - The campaign is approved and waiting for vehicle check-in before deployment. (CREATED, READY, HEALTHY, SUSPENDED, DELETING, READY_FOR_CHECKIN)</td>
</tr>
<tr>
    <td><CopyableCode code="vehicle_name" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the vehicle. (pattern: &lt;code&gt;&#91;a-zA-Z\d\-_:&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_vehicle_status"><CopyableCode code="get_vehicle_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the status of campaigns, decoder manifests, or state templates associated with a vehicle.</td>
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
    defaultValue="get_vehicle_status"
    values={[
        { label: 'get_vehicle_status', value: 'get_vehicle_status' }
    ]}
>
<TabItem value="get_vehicle_status">

Retrieves information about the status of campaigns, decoder manifests, or state templates associated with a vehicle.

```sql
SELECT
campaign_name,
status,
vehicle_name
FROM aws.iotfleetwise.vehicle_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
