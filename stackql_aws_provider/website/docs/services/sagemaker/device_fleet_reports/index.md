--- 
title: device_fleet_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - device_fleet_reports
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>device_fleet_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="device_fleet_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.device_fleet_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_device_fleet_report"
    values={[
        { label: 'get_device_fleet_report', value: 'get_device_fleet_report' }
    ]}
>
<TabItem value="get_device_fleet_report">

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
    <td><CopyableCode code="AgentVersions" /></td>
    <td><code>array</code></td>
    <td>The versions of Edge Manager agent deployed on the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Description of the fleet. (pattern: &lt;code&gt;&#91;-a-zA-Z0-9_.,;:! &#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceFleetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the device. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:device-fleet/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceFleetName" /></td>
    <td><code>string</code></td>
    <td>The name of the fleet. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceStats" /></td>
    <td><code>object</code></td>
    <td>Status of devices.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelStats" /></td>
    <td><code>array</code></td>
    <td>Status of model on device.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputConfig" /></td>
    <td><code>object</code></td>
    <td>The output configuration for storing sample data collected by the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="ReportGenerated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of when the report was generated.</td>
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
    <td><a href="#get_device_fleet_report"><CopyableCode code="get_device_fleet_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a fleet.</td>
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
    defaultValue="get_device_fleet_report"
    values={[
        { label: 'get_device_fleet_report', value: 'get_device_fleet_report' }
    ]}
>
<TabItem value="get_device_fleet_report">

Describes a fleet.

```sql
SELECT
AgentVersions,
Description,
DeviceFleetArn,
DeviceFleetName,
DeviceStats,
ModelStats,
OutputConfig,
ReportGenerated
FROM aws.sagemaker.device_fleet_reports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
