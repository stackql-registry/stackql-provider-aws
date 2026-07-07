--- 
title: account_overviews
hide_title: false
hide_table_of_contents: false
keywords:
  - account_overviews
  - devops_guru
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

Creates, updates, deletes, gets or lists an <code>account_overviews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_overviews" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_guru.account_overviews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_account_overview"
    values={[
        { label: 'describe_account_overview', value: 'describe_account_overview' }
    ]}
>
<TabItem value="describe_account_overview">

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
    <td><CopyableCode code="MeanTimeToRecoverInMilliseconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Mean Time to Recover (MTTR) for all closed insights that were created during the time range passed in.</td>
</tr>
<tr>
    <td><CopyableCode code="ProactiveInsights" /></td>
    <td><code>integer</code></td>
    <td>An integer that specifies the number of open proactive insights in your Amazon Web Services account that were created during the time range passed in.</td>
</tr>
<tr>
    <td><CopyableCode code="ReactiveInsights" /></td>
    <td><code>integer</code></td>
    <td>An integer that specifies the number of open reactive insights in your Amazon Web Services account that were created during the time range passed in.</td>
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
    <td><a href="#describe_account_overview"><CopyableCode code="describe_account_overview" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.</td>
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
    defaultValue="describe_account_overview"
    values={[
        { label: 'describe_account_overview', value: 'describe_account_overview' }
    ]}
>
<TabItem value="describe_account_overview">

For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.

```sql
SELECT
MeanTimeToRecoverInMilliseconds,
ProactiveInsights,
ReactiveInsights
FROM aws.devops_guru.account_overviews
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
