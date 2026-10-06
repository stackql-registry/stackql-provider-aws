--- 
title: controls
hide_title: false
hide_table_of_contents: false
keywords:
  - controls
  - controltower
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

Creates, updates, deletes, gets or lists a <code>controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="controls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.controltower.controls" /></td></tr>
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
    <td><a href="#disable_control"><CopyableCode code="disable_control" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API call turns off a control. It starts an asynchronous operation that deletes Amazon Web Services resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify. For usage examples, see the Controls Reference Guide .</td>
</tr>
<tr>
    <td><a href="#enable_control"><CopyableCode code="enable_control" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-controlIdentifier"><code>controlIdentifier</code></a>, <a href="#parameter-targetIdentifier"><code>targetIdentifier</code></a></td>
    <td></td>
    <td>This API call activates a control. It starts an asynchronous operation that creates Amazon Web Services resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify. For usage examples, see the Controls Reference Guide .</td>
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
    defaultValue="disable_control"
    values={[
        { label: 'disable_control', value: 'disable_control' },
        { label: 'enable_control', value: 'enable_control' }
    ]}
>
<TabItem value="disable_control">

This API call turns off a control. It starts an asynchronous operation that deletes Amazon Web Services resources on the specified organizational unit and the accounts it contains. The resources will vary according to the control that you specify. For usage examples, see the Controls Reference Guide .

```sql
EXEC aws.controltower.controls.disable_control 
@region='{{ region }}' --required 
@@json=
'{
"controlIdentifier": "{{ controlIdentifier }}", 
"targetIdentifier": "{{ targetIdentifier }}", 
"enabledControlIdentifier": "{{ enabledControlIdentifier }}"
}'
;
```
</TabItem>
<TabItem value="enable_control">

This API call activates a control. It starts an asynchronous operation that creates Amazon Web Services resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify. For usage examples, see the Controls Reference Guide .

```sql
EXEC aws.controltower.controls.enable_control 
@region='{{ region }}' --required 
@@json=
'{
"controlIdentifier": "{{ controlIdentifier }}", 
"targetIdentifier": "{{ targetIdentifier }}", 
"tags": "{{ tags }}", 
"parameters": "{{ parameters }}"
}'
;
```
</TabItem>
</Tabs>
