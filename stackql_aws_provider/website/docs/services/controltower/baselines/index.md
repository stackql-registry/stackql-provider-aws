--- 
title: baselines
hide_title: false
hide_table_of_contents: false
keywords:
  - baselines
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

Creates, updates, deletes, gets or lists a <code>baselines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="baselines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.controltower.baselines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_baseline"
    values={[
        { label: 'get_baseline', value: 'get_baseline' },
        { label: 'list_baselines', value: 'list_baselines' }
    ]}
>
<TabItem value="get_baseline">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the baseline.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The baseline ARN. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;+:controltower:&#91;a-z0-9-&#93;*:&#91;0-9&#93;&#123;0,12&#125;:baseline/&#91;A-Z0-9&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the baseline.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_baselines">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The human-readable name of a Baseline.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The full ARN of a Baseline.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A summary description of a Baseline.</td>
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
    <td><a href="#get_baseline"><CopyableCode code="get_baseline" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve details about an existing Baseline resource by specifying its identifier. For usage examples, see the Amazon Web Services Control Tower User Guide .</td>
</tr>
<tr>
    <td><a href="#list_baselines"><CopyableCode code="list_baselines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a summary list of all available baselines. For usage examples, see the Amazon Web Services Control Tower User Guide .</td>
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
    defaultValue="get_baseline"
    values={[
        { label: 'get_baseline', value: 'get_baseline' },
        { label: 'list_baselines', value: 'list_baselines' }
    ]}
>
<TabItem value="get_baseline">

Retrieve details about an existing Baseline resource by specifying its identifier. For usage examples, see the Amazon Web Services Control Tower User Guide .

```sql
SELECT
name,
arn,
description
FROM aws.controltower.baselines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_baselines">

Returns a summary list of all available baselines. For usage examples, see the Amazon Web Services Control Tower User Guide .

```sql
SELECT
name,
arn,
description
FROM aws.controltower.baselines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
