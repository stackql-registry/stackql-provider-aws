--- 
title: canaries_last_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - canaries_last_runs
  - synthetics
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

Creates, updates, deletes, gets or lists a <code>canaries_last_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="canaries_last_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.synthetics.canaries_last_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_canaries_last_run"
    values={[
        { label: 'describe_canaries_last_run', value: 'describe_canaries_last_run' }
    ]}
>
<TabItem value="describe_canaries_last_run">

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
    <td><CopyableCode code="canaries_last_run" /></td>
    <td><code>array</code></td>
    <td>An array that contains the information from the most recent run of each canary.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token that indicates that there is more data available. You can use this token in a subsequent DescribeCanariesLastRun operation to retrieve the next set of results.</td>
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
    <td><a href="#describe_canaries_last_run"><CopyableCode code="describe_canaries_last_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this operation to see information from the most recent run of each canary that you have created. This operation supports resource-level authorization using an IAM policy and the Names parameter. If you specify the Names parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response. You are required to use the Names parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see Limiting a user to viewing specific canaries.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="describe_canaries_last_run"
    values={[
        { label: 'describe_canaries_last_run', value: 'describe_canaries_last_run' }
    ]}
>
<TabItem value="describe_canaries_last_run">

Use this operation to see information from the most recent run of each canary that you have created. This operation supports resource-level authorization using an IAM policy and the Names parameter. If you specify the Names parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response. You are required to use the Names parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see Limiting a user to viewing specific canaries.

```sql
SELECT
canaries_last_run,
next_token
FROM aws.synthetics.canaries_last_runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
