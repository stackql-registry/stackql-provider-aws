--- 
title: on_demand_audit_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - on_demand_audit_tasks
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

Creates, updates, deletes, gets or lists an <code>on_demand_audit_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="on_demand_audit_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.on_demand_audit_tasks" /></td></tr>
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
    <td><a href="#start_on_demand_audit_task"><CopyableCode code="start_on_demand_audit_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetCheckNames"><code>targetCheckNames</code></a></td>
    <td></td>
    <td>Starts an on-demand Device Defender audit. Requires permission to access the StartOnDemandAuditTask action.</td>
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
    defaultValue="start_on_demand_audit_task"
    values={[
        { label: 'start_on_demand_audit_task', value: 'start_on_demand_audit_task' }
    ]}
>
<TabItem value="start_on_demand_audit_task">

Starts an on-demand Device Defender audit. Requires permission to access the StartOnDemandAuditTask action.

```sql
EXEC aws.iot.on_demand_audit_tasks.start_on_demand_audit_task 
@region='{{ region }}' --required 
@@json=
'{
"targetCheckNames": "{{ targetCheckNames }}"
}'
;
```
</TabItem>
</Tabs>
