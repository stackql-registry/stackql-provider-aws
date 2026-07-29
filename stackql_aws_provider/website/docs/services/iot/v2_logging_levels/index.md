--- 
title: v2_logging_levels
hide_title: false
hide_table_of_contents: false
keywords:
  - v2_logging_levels
  - iot
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

Creates, updates, deletes, gets or lists a <code>v2_logging_levels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="v2_logging_levels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.v2_logging_levels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_v2_logging_levels"
    values={[
        { label: 'list_v2_logging_levels', value: 'list_v2_logging_levels' }
    ]}
>
<TabItem value="list_v2_logging_levels">

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
    <td><CopyableCode code="log_level" /></td>
    <td><code>string</code></td>
    <td>The logging level. (DEBUG, INFO, ERROR, WARN, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="log_target" /></td>
    <td><code>object</code></td>
    <td>A log target</td>
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
    <td><a href="#list_v2_logging_levels"><CopyableCode code="list_v2_logging_levels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-targetType"><code>targetType</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists logging levels. Requires permission to access the ListV2LoggingLevels action.</td>
</tr>
<tr>
    <td><a href="#set_v2_logging_level"><CopyableCode code="set_v2_logging_level" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logTarget"><code>logTarget</code></a>, <a href="#parameter-logLevel"><code>logLevel</code></a></td>
    <td></td>
    <td>Sets the logging level. Requires permission to access the SetV2LoggingLevel action.</td>
</tr>
<tr>
    <td><a href="#delete_v2_logging_level"><CopyableCode code="delete_v2_logging_level" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-targetType"><code>targetType</code></a>, <a href="#parameter-targetName"><code>targetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a logging level. Requires permission to access the DeleteV2LoggingLevel action.</td>
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
<tr id="parameter-targetName">
    <td><CopyableCode code="targetName" /></td>
    <td><code>string</code></td>
    <td>The name of the resource for which you are configuring logging.</td>
</tr>
<tr id="parameter-targetType">
    <td><CopyableCode code="targetType" /></td>
    <td><code>string</code></td>
    <td>The type of resource for which you are configuring logging. Must be THING_Group.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
<tr id="parameter-targetType">
    <td><CopyableCode code="targetType" /></td>
    <td><code>string</code></td>
    <td>The type of resource for which you are configuring logging. Must be THING_Group.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_v2_logging_levels"
    values={[
        { label: 'list_v2_logging_levels', value: 'list_v2_logging_levels' }
    ]}
>
<TabItem value="list_v2_logging_levels">

Lists logging levels. Requires permission to access the ListV2LoggingLevels action.

```sql
SELECT
log_level,
log_target
FROM aws.iot.v2_logging_levels
WHERE region = '{{ region }}' -- required
AND targetType = '{{ targetType }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_v2_logging_level"
    values={[
        { label: 'set_v2_logging_level', value: 'set_v2_logging_level' }
    ]}
>
<TabItem value="set_v2_logging_level">

Sets the logging level. Requires permission to access the SetV2LoggingLevel action.

```sql
UPDATE aws.iot.v2_logging_levels
SET 
logTarget = '{{ logTarget }}',
logLevel = '{{ logLevel }}'
WHERE 
region = '{{ region }}' --required
AND logTarget = '{{ logTarget }}' --required
AND logLevel = '{{ logLevel }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_v2_logging_level"
    values={[
        { label: 'delete_v2_logging_level', value: 'delete_v2_logging_level' }
    ]}
>
<TabItem value="delete_v2_logging_level">

Deletes a logging level. Requires permission to access the DeleteV2LoggingLevel action.

```sql
DELETE FROM aws.iot.v2_logging_levels
WHERE targetType = '{{ targetType }}' --required
AND targetName = '{{ targetName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
