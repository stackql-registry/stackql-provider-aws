--- 
title: practice_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - practice_runs
  - arc_zonal_shift
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

Creates, updates, deletes, gets or lists a <code>practice_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="practice_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.arc_zonal_shift.practice_runs" /></td></tr>
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
    <td><a href="#cancel_practice_run"><CopyableCode code="cancel_practice_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-zonal_shift_id"><code>zonal_shift_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancel an in-progress practice run zonal shift in Amazon Application Recovery Controller.</td>
</tr>
<tr>
    <td><a href="#start_practice_run"><CopyableCode code="start_practice_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceIdentifier"><code>resourceIdentifier</code></a>, <a href="#parameter-awayFrom"><code>awayFrom</code></a>, <a href="#parameter-comment"><code>comment</code></a></td>
    <td></td>
    <td>Start an on-demand practice run zonal shift in Amazon Application Recovery Controller. With zonal autoshift enabled, you can start an on-demand practice run to verify preparedness at any time. Amazon Web Services also runs automated practice runs about weekly when you have enabled zonal autoshift. For more information, see Considerations when you configure zonal autoshift in the Amazon Application Recovery Controller Developer Guide.</td>
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
<tr id="parameter-zonal_shift_id">
    <td><CopyableCode code="zonal_shift_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of a practice run zonal shift in Amazon Application Recovery Controller that you want to cancel.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="cancel_practice_run"
    values={[
        { label: 'cancel_practice_run', value: 'cancel_practice_run' },
        { label: 'start_practice_run', value: 'start_practice_run' }
    ]}
>
<TabItem value="cancel_practice_run">

Cancel an in-progress practice run zonal shift in Amazon Application Recovery Controller.

```sql
EXEC aws.arc_zonal_shift.practice_runs.cancel_practice_run 
@zonal_shift_id='{{ zonal_shift_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="start_practice_run">

Start an on-demand practice run zonal shift in Amazon Application Recovery Controller. With zonal autoshift enabled, you can start an on-demand practice run to verify preparedness at any time. Amazon Web Services also runs automated practice runs about weekly when you have enabled zonal autoshift. For more information, see Considerations when you configure zonal autoshift in the Amazon Application Recovery Controller Developer Guide.

```sql
EXEC aws.arc_zonal_shift.practice_runs.start_practice_run 
@region='{{ region }}' --required 
@@json=
'{
"resourceIdentifier": "{{ resourceIdentifier }}", 
"awayFrom": "{{ awayFrom }}", 
"comment": "{{ comment }}"
}'
;
```
</TabItem>
</Tabs>
