--- 
title: active_approval_team_deletions
hide_title: false
hide_table_of_contents: false
keywords:
  - active_approval_team_deletions
  - mpa
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

Creates, updates, deletes, gets or lists an <code>active_approval_team_deletions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="active_approval_team_deletions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mpa.active_approval_team_deletions" /></td></tr>
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
    <td><a href="#start_active_approval_team_deletion"><CopyableCode code="start_active_approval_team_deletion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts the deletion process for an active approval team. Deletions require team approval Requests to delete an active team must be approved by the team.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the team.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="start_active_approval_team_deletion"
    values={[
        { label: 'start_active_approval_team_deletion', value: 'start_active_approval_team_deletion' }
    ]}
>
<TabItem value="start_active_approval_team_deletion">

Starts the deletion process for an active approval team. Deletions require team approval Requests to delete an active team must be approved by the team.

```sql
EXEC aws.mpa.active_approval_team_deletions.start_active_approval_team_deletion 
@arn='{{ arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"PendingWindowDays": {{ PendingWindowDays }}
}'
;
```
</TabItem>
</Tabs>
