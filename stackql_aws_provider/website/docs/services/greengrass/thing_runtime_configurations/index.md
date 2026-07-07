--- 
title: thing_runtime_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - thing_runtime_configurations
  - greengrass
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

Creates, updates, deletes, gets or lists a <code>thing_runtime_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="thing_runtime_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrass.thing_runtime_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_thing_runtime_configuration"
    values={[
        { label: 'get_thing_runtime_configuration', value: 'get_thing_runtime_configuration' }
    ]}
>
<TabItem value="get_thing_runtime_configuration">

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
    <td><CopyableCode code="TelemetryConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configuration for telemetry service.</td>
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
    <td><a href="#get_thing_runtime_configuration"><CopyableCode code="get_thing_runtime_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the runtime configuration of a thing.</td>
</tr>
<tr>
    <td><a href="#update_thing_runtime_configuration"><CopyableCode code="update_thing_runtime_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the runtime configuration of a thing.</td>
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
<tr id="parameter-thing_name">
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The thing name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_thing_runtime_configuration"
    values={[
        { label: 'get_thing_runtime_configuration', value: 'get_thing_runtime_configuration' }
    ]}
>
<TabItem value="get_thing_runtime_configuration">

Get the runtime configuration of a thing.

```sql
SELECT
TelemetryConfiguration
FROM aws.greengrass.thing_runtime_configurations
WHERE thing_name = '{{ thing_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_thing_runtime_configuration"
    values={[
        { label: 'update_thing_runtime_configuration', value: 'update_thing_runtime_configuration' }
    ]}
>
<TabItem value="update_thing_runtime_configuration">

Updates the runtime configuration of a thing.

```sql
UPDATE aws.greengrass.thing_runtime_configurations
SET 
TelemetryConfiguration = '{{ TelemetryConfiguration }}'
WHERE 
thing_name = '{{ thing_name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
