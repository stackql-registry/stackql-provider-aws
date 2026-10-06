--- 
title: resource_state_updates
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_state_updates
  - imagebuilder
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

Creates, updates, deletes, gets or lists a <code>resource_state_updates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_state_updates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.resource_state_updates" /></td></tr>
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
    <td><a href="#start_resource_state_update"><CopyableCode code="start_resource_state_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Begins an asynchronous resource state update for lifecycle changes to the specified image resources.</td>
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
    defaultValue="start_resource_state_update"
    values={[
        { label: 'start_resource_state_update', value: 'start_resource_state_update' }
    ]}
>
<TabItem value="start_resource_state_update">

Begins an asynchronous resource state update for lifecycle changes to the specified image resources.

```sql
EXEC aws.imagebuilder.resource_state_updates.start_resource_state_update 
@region='{{ region }}' --required 
@@json=
'{
"resourceArn": "{{ resourceArn }}", 
"state": "{{ state }}", 
"executionRole": "{{ executionRole }}", 
"includeResources": "{{ includeResources }}", 
"exclusionRules": "{{ exclusionRules }}", 
"updateAt": "{{ updateAt }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
