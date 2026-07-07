--- 
title: telemetry_records
hide_title: false
hide_table_of_contents: false
keywords:
  - telemetry_records
  - xray
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

Creates, updates, deletes, gets or lists a <code>telemetry_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="telemetry_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.xray.telemetry_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#put_telemetry_records"><CopyableCode code="put_telemetry_records" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TelemetryRecords"><code>TelemetryRecords</code></a></td>
    <td></td>
    <td>Used by the Amazon Web Services X-Ray daemon to upload telemetry.</td>
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

## `REPLACE` examples

<Tabs
    defaultValue="put_telemetry_records"
    values={[
        { label: 'put_telemetry_records', value: 'put_telemetry_records' }
    ]}
>
<TabItem value="put_telemetry_records">

Used by the Amazon Web Services X-Ray daemon to upload telemetry.

```sql
REPLACE aws.xray.telemetry_records
SET 
TelemetryRecords = '{{ TelemetryRecords }}',
EC2InstanceId = '{{ EC2InstanceId }}',
Hostname = '{{ Hostname }}',
ResourceARN = '{{ ResourceARN }}'
WHERE 
region = '{{ region }}' --required
AND TelemetryRecords = '{{ TelemetryRecords }}' --required;
```
</TabItem>
</Tabs>
