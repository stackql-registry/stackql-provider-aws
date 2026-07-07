--- 
title: position_estimates
hide_title: false
hide_table_of_contents: false
keywords:
  - position_estimates
  - iotwireless
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

Creates, updates, deletes, gets or lists a <code>position_estimates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="position_estimates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.position_estimates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_position_estimate"
    values={[
        { label: 'get_position_estimate', value: 'get_position_estimate' }
    ]}
>
<TabItem value="get_position_estimate">

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
    <td><CopyableCode code="GeoJsonPayload" /></td>
    <td><code>string (byte)</code></td>
    <td>The position information of the resource, displayed as a JSON payload. The payload is of type blob and uses the GeoJSON format, which a format that's used to encode geographic data structures. A sample payload contains the timestamp information, the WGS84 coordinates of the location, and the accuracy and confidence level. For more information and examples, see Resolve device location (console).</td>
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
    <td><a href="#get_position_estimate"><CopyableCode code="get_position_estimate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get estimated position information as a payload in GeoJSON format. The payload measurement data is resolved using solvers that are provided by third-party vendors.</td>
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
    defaultValue="get_position_estimate"
    values={[
        { label: 'get_position_estimate', value: 'get_position_estimate' }
    ]}
>
<TabItem value="get_position_estimate">

Get estimated position information as a payload in GeoJSON format. The payload measurement data is resolved using solvers that are provided by third-party vendors.

```sql
SELECT
GeoJsonPayload
FROM aws.iotwireless.position_estimates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
