--- 
title: limits
hide_title: false
hide_table_of_contents: false
keywords:
  - limits
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

Creates, updates, deletes, gets or lists a <code>limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis.limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_limits"
    values={[
        { label: 'describe_limits', value: 'describe_limits' }
    ]}
>
<TabItem value="describe_limits">

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
    <td><CopyableCode code="on_demand_stream_count" /></td>
    <td><code>integer</code></td>
    <td>Indicates the number of data streams with the on-demand capacity mode.</td>
</tr>
<tr>
    <td><CopyableCode code="on_demand_stream_count_limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of data streams with the on-demand capacity mode.</td>
</tr>
<tr>
    <td><CopyableCode code="open_shard_count" /></td>
    <td><code>integer</code></td>
    <td>The number of open shards.</td>
</tr>
<tr>
    <td><CopyableCode code="shard_limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of shards.</td>
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
    <td><a href="#describe_limits"><CopyableCode code="describe_limits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the shard limits and usage for the account. If you update your account limits, the old limits might be returned for a few minutes. This operation has a limit of one transaction per second per account.</td>
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
    defaultValue="describe_limits"
    values={[
        { label: 'describe_limits', value: 'describe_limits' }
    ]}
>
<TabItem value="describe_limits">

Describes the shard limits and usage for the account. If you update your account limits, the old limits might be returned for a few minutes. This operation has a limit of one transaction per second per account.

```sql
SELECT
on_demand_stream_count,
on_demand_stream_count_limit,
open_shard_count,
shard_limit
FROM aws.kinesis.limits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
