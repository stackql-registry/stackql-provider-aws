--- 
title: enhanced_monitorings
hide_title: false
hide_table_of_contents: false
keywords:
  - enhanced_monitorings
  - kinesis
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

Creates, updates, deletes, gets or lists an <code>enhanced_monitorings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enhanced_monitorings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis.enhanced_monitorings" /></td></tr>
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
    <td><a href="#disable_enhanced_monitoring"><CopyableCode code="disable_enhanced_monitoring" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ShardLevelMetrics"><code>ShardLevelMetrics</code></a></td>
    <td></td>
    <td>Disables enhanced monitoring. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API.</td>
</tr>
<tr>
    <td><a href="#enable_enhanced_monitoring"><CopyableCode code="enable_enhanced_monitoring" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ShardLevelMetrics"><code>ShardLevelMetrics</code></a></td>
    <td></td>
    <td>Enables enhanced Kinesis data stream monitoring for shard-level metrics. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="disable_enhanced_monitoring"
    values={[
        { label: 'disable_enhanced_monitoring', value: 'disable_enhanced_monitoring' },
        { label: 'enable_enhanced_monitoring', value: 'enable_enhanced_monitoring' }
    ]}
>
<TabItem value="disable_enhanced_monitoring">

Disables enhanced monitoring. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API.

```sql
EXEC aws.kinesis.enhanced_monitorings.disable_enhanced_monitoring 
@region='{{ region }}' --required 
@@json=
'{
"StreamName": "{{ StreamName }}", 
"ShardLevelMetrics": "{{ ShardLevelMetrics }}", 
"StreamARN": "{{ StreamARN }}", 
"StreamId": "{{ StreamId }}"
}'
;
```
</TabItem>
<TabItem value="enable_enhanced_monitoring">

Enables enhanced Kinesis data stream monitoring for shard-level metrics. When invoking this API, you must use either the StreamARN or the StreamName parameter, or both. It is recommended that you use the StreamARN input parameter when you invoke this API.

```sql
EXEC aws.kinesis.enhanced_monitorings.enable_enhanced_monitoring 
@region='{{ region }}' --required 
@@json=
'{
"StreamName": "{{ StreamName }}", 
"ShardLevelMetrics": "{{ ShardLevelMetrics }}", 
"StreamARN": "{{ StreamARN }}", 
"StreamId": "{{ StreamId }}"
}'
;
```
</TabItem>
</Tabs>
