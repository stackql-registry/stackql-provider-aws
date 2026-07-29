--- 
title: device_discoveries
hide_title: false
hide_table_of_contents: false
keywords:
  - device_discoveries
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists a <code>device_discoveries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="device_discoveries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.device_discoveries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_device_discovery"
    values={[
        { label: 'get_device_discovery', value: 'get_device_discovery' },
        { label: 'list_device_discoveries', value: 'list_device_discoveries' }
    ]}
>
<TabItem value="get_device_discovery">

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
    <td><CopyableCode code="account_association_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the account association used for the device discovery. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the device discovery job request. (pattern: &lt;code&gt;arn:aws:iotmanagedintegrations:&#91;0-9a-zA-Z-&#93;+:&#91;0-9&#93;+:device-discovery/&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="connector_association_id" /></td>
    <td><code>string</code></td>
    <td>The ID tracking the current discovery process for one connector association. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="controller_id" /></td>
    <td><code>string</code></td>
    <td>The id of the end-user's IoT hub. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="discovery_type" /></td>
    <td><code>string</code></td>
    <td>The discovery type supporting the type of device to be discovered in the device discovery job request. (ZWAVE, ZIGBEE, CLOUD, CUSTOM, CONTROLLER_CAPABILITY_REDISCOVERY)</td>
</tr>
<tr>
    <td><CopyableCode code="finished_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp value for the completion time of the device discovery.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The id of the device discovery job request. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp value for the start time of the device discovery.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the device discovery job request. (RUNNING, SUCCEEDED, FAILED, TIMED_OUT)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A set of key/value pairs that are used to manage the device discovery request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_device_discoveries">

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
    <td><CopyableCode code="discovery_type" /></td>
    <td><code>string</code></td>
    <td>The type of discovery process used to find devices. (ZWAVE, ZIGBEE, CLOUD, CUSTOM, CONTROLLER_CAPABILITY_REDISCOVERY)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the device discovery job. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the device discovery job. (RUNNING, SUCCEEDED, FAILED, TIMED_OUT)</td>
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
    <td><a href="#get_device_discovery"><CopyableCode code="get_device_discovery" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the current state of a device discovery.</td>
</tr>
<tr>
    <td><a href="#list_device_discoveries"><CopyableCode code="list_device_discoveries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-TypeFilter"><code>TypeFilter</code></a>, <a href="#parameter-StatusFilter"><code>StatusFilter</code></a></td>
    <td>Lists all device discovery tasks, with optional filtering by type and status.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The id of the device discovery job request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of device discovery jobs to return in a single response.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token used for pagination of results.</td>
</tr>
<tr id="parameter-StatusFilter">
    <td><CopyableCode code="StatusFilter" /></td>
    <td><code>string</code></td>
    <td>The status to filter device discovery jobs by.</td>
</tr>
<tr id="parameter-TypeFilter">
    <td><CopyableCode code="TypeFilter" /></td>
    <td><code>string</code></td>
    <td>The discovery type to filter device discovery jobs by.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_device_discovery"
    values={[
        { label: 'get_device_discovery', value: 'get_device_discovery' },
        { label: 'list_device_discoveries', value: 'list_device_discoveries' }
    ]}
>
<TabItem value="get_device_discovery">

Get the current state of a device discovery.

```sql
SELECT
account_association_id,
arn,
connector_association_id,
controller_id,
discovery_type,
finished_at,
id,
started_at,
status,
tags
FROM aws.iot_managed_integrations.device_discoveries
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_device_discoveries">

Lists all device discovery tasks, with optional filtering by type and status.

```sql
SELECT
discovery_type,
id,
status
FROM aws.iot_managed_integrations.device_discoveries
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND TypeFilter = '{{ TypeFilter }}'
AND StatusFilter = '{{ StatusFilter }}'
;
```
</TabItem>
</Tabs>
