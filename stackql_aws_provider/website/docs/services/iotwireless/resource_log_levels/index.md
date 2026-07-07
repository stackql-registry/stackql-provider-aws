--- 
title: resource_log_levels
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_log_levels
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

Creates, updates, deletes, gets or lists a <code>resource_log_levels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_log_levels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.resource_log_levels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_log_level"
    values={[
        { label: 'get_resource_log_level', value: 'get_resource_log_level' }
    ]}
>
<TabItem value="get_resource_log_level">

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
    <td><CopyableCode code="LogLevel" /></td>
    <td><code>string</code></td>
    <td>The log level for a log message. The log levels can be disabled, or set to ERROR to display less verbose logs containing only error information, or to INFO for more detailed logs. (INFO, ERROR, DISABLED)</td>
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
    <td><a href="#get_resource_log_level"><CopyableCode code="get_resource_log_level" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_identifier"><code>resource_identifier</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fetches the log-level override, if any, for a given resource ID and resource type..</td>
</tr>
<tr>
    <td><a href="#put_resource_log_level"><CopyableCode code="put_resource_log_level" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-resource_identifier"><code>resource_identifier</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LogLevel"><code>LogLevel</code></a></td>
    <td></td>
    <td>Sets the log-level override for a resource ID and resource type. A limit of 200 log level override can be set per account.</td>
</tr>
<tr>
    <td><a href="#reset_all_resource_log_levels"><CopyableCode code="reset_all_resource_log_levels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the log-level overrides for all resources; wireless devices, wireless gateways, and FUOTA tasks.</td>
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
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource, which can be WirelessDevice, WirelessGateway, or FuotaTask.</td>
</tr>
<tr id="parameter-resource_identifier">
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_resource_log_level"
    values={[
        { label: 'get_resource_log_level', value: 'get_resource_log_level' }
    ]}
>
<TabItem value="get_resource_log_level">

Fetches the log-level override, if any, for a given resource ID and resource type..

```sql
SELECT
LogLevel
FROM aws.iotwireless.resource_log_levels
WHERE resource_identifier = '{{ resource_identifier }}' -- required
AND resourceType = '{{ resourceType }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_resource_log_level"
    values={[
        { label: 'put_resource_log_level', value: 'put_resource_log_level' }
    ]}
>
<TabItem value="put_resource_log_level">

Sets the log-level override for a resource ID and resource type. A limit of 200 log level override can be set per account.

```sql
REPLACE aws.iotwireless.resource_log_levels
SET 
LogLevel = '{{ LogLevel }}'
WHERE 
resource_identifier = '{{ resource_identifier }}' --required
AND resourceType = '{{ resourceType }}' --required
AND region = '{{ region }}' --required
AND LogLevel = '{{ LogLevel }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_all_resource_log_levels"
    values={[
        { label: 'reset_all_resource_log_levels', value: 'reset_all_resource_log_levels' }
    ]}
>
<TabItem value="reset_all_resource_log_levels">

Removes the log-level overrides for all resources; wireless devices, wireless gateways, and FUOTA tasks.

```sql
EXEC aws.iotwireless.resource_log_levels.reset_all_resource_log_levels 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
