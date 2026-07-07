--- 
title: log_levels_by_resource_types
hide_title: false
hide_table_of_contents: false
keywords:
  - log_levels_by_resource_types
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

Creates, updates, deletes, gets or lists a <code>log_levels_by_resource_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="log_levels_by_resource_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.log_levels_by_resource_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_log_levels_by_resource_types"
    values={[
        { label: 'get_log_levels_by_resource_types', value: 'get_log_levels_by_resource_types' }
    ]}
>
<TabItem value="get_log_levels_by_resource_types">

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
    <td><CopyableCode code="DefaultLogLevel" /></td>
    <td><code>string</code></td>
    <td>The log level for a log message. The log levels can be disabled, or set to ERROR to display less verbose logs containing only error information, or to INFO for more detailed logs. (INFO, ERROR, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="FuotaTaskLogOptions" /></td>
    <td><code>array</code></td>
    <td>The list of FUOTA task log options.</td>
</tr>
<tr>
    <td><CopyableCode code="WirelessDeviceLogOptions" /></td>
    <td><code>array</code></td>
    <td>The list of wireless device log options.</td>
</tr>
<tr>
    <td><CopyableCode code="WirelessGatewayLogOptions" /></td>
    <td><code>array</code></td>
    <td>The list of wireless gateway log options.</td>
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
    <td><a href="#get_log_levels_by_resource_types"><CopyableCode code="get_log_levels_by_resource_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns current default log levels or log levels by resource types. Based on the resource type, log levels can be returned for wireless device, wireless gateway, or FUOTA task log options.</td>
</tr>
<tr>
    <td><a href="#update_log_levels_by_resource_types"><CopyableCode code="update_log_levels_by_resource_types" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Set default log level, or log levels by resource types. This can be for wireless device, wireless gateway, or FUOTA task log options, and is used to control the log messages that'll be displayed in CloudWatch.</td>
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
    defaultValue="get_log_levels_by_resource_types"
    values={[
        { label: 'get_log_levels_by_resource_types', value: 'get_log_levels_by_resource_types' }
    ]}
>
<TabItem value="get_log_levels_by_resource_types">

Returns current default log levels or log levels by resource types. Based on the resource type, log levels can be returned for wireless device, wireless gateway, or FUOTA task log options.

```sql
SELECT
DefaultLogLevel,
FuotaTaskLogOptions,
WirelessDeviceLogOptions,
WirelessGatewayLogOptions
FROM aws.iotwireless.log_levels_by_resource_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_log_levels_by_resource_types"
    values={[
        { label: 'update_log_levels_by_resource_types', value: 'update_log_levels_by_resource_types' }
    ]}
>
<TabItem value="update_log_levels_by_resource_types">

Set default log level, or log levels by resource types. This can be for wireless device, wireless gateway, or FUOTA task log options, and is used to control the log messages that'll be displayed in CloudWatch.

```sql
UPDATE aws.iotwireless.log_levels_by_resource_types
SET 
DefaultLogLevel = '{{ DefaultLogLevel }}',
FuotaTaskLogOptions = '{{ FuotaTaskLogOptions }}',
WirelessDeviceLogOptions = '{{ WirelessDeviceLogOptions }}',
WirelessGatewayLogOptions = '{{ WirelessGatewayLogOptions }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
