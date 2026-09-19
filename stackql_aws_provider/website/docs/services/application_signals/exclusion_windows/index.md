--- 
title: exclusion_windows
hide_title: false
hide_table_of_contents: false
keywords:
  - exclusion_windows
  - application_signals
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

Creates, updates, deletes, gets or lists an <code>exclusion_windows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exclusion_windows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_signals.exclusion_windows" /></td></tr>
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
    <td><a href="#batch_update_exclusion_windows"><CopyableCode code="batch_update_exclusion_windows" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SloIds"><code>SloIds</code></a></td>
    <td></td>
    <td>Add or remove time window exclusions for one or more Service Level Objectives (SLOs).</td>
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
    defaultValue="batch_update_exclusion_windows"
    values={[
        { label: 'batch_update_exclusion_windows', value: 'batch_update_exclusion_windows' }
    ]}
>
<TabItem value="batch_update_exclusion_windows">

Add or remove time window exclusions for one or more Service Level Objectives (SLOs).

```sql
EXEC aws.application_signals.exclusion_windows.batch_update_exclusion_windows 
@region='{{ region }}' --required 
@@json=
'{
"SloIds": "{{ SloIds }}", 
"AddExclusionWindows": "{{ AddExclusionWindows }}", 
"RemoveExclusionWindows": "{{ RemoveExclusionWindows }}"
}'
;
```
</TabItem>
</Tabs>
