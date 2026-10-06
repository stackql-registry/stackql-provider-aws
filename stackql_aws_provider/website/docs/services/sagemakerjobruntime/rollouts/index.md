--- 
title: rollouts
hide_title: false
hide_table_of_contents: false
keywords:
  - rollouts
  - sagemakerjobruntime
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

Creates, updates, deletes, gets or lists a <code>rollouts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rollouts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemakerjobruntime.rollouts" /></td></tr>
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
    <td><a href="#complete_rollout"><CopyableCode code="complete_rollout" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-X-Amzn-SageMaker-Job-Arn"><code>X-Amzn-SageMaker-Job-Arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrajectoryId"><code>TrajectoryId</code></a></td>
    <td></td>
    <td>Marks a rollout as complete, indicating that no further turns will be appended to the trajectory. After calling this operation, the trajectory is sealed and eligible for reward submission via the UpdateReward operation.</td>
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
<tr id="parameter-X-Amzn-SageMaker-Job-Arn">
    <td><CopyableCode code="X-Amzn-SageMaker-Job-Arn" /></td>
    <td><code>string</code></td>
    <td>The job ARN.</td>
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
    defaultValue="complete_rollout"
    values={[
        { label: 'complete_rollout', value: 'complete_rollout' }
    ]}
>
<TabItem value="complete_rollout">

Marks a rollout as complete, indicating that no further turns will be appended to the trajectory. After calling this operation, the trajectory is sealed and eligible for reward submission via the UpdateReward operation.

```sql
EXEC aws.sagemakerjobruntime.rollouts.complete_rollout 
@X-Amzn-SageMaker-Job-Arn='{{ X-Amzn-SageMaker-Job-Arn }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"TrajectoryId": "{{ TrajectoryId }}", 
"Status": "{{ Status }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
</Tabs>
