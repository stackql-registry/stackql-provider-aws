--- 
title: lens_review_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - lens_review_reports
  - wellarchitected
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

Creates, updates, deletes, gets or lists a <code>lens_review_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lens_review_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.lens_review_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lens_review_report"
    values={[
        { label: 'get_lens_review_report', value: 'get_lens_review_report' }
    ]}
>
<TabItem value="get_lens_review_report">

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
    <td><CopyableCode code="lens_review_report" /></td>
    <td><code>object</code></td>
    <td>A report of a lens review.</td>
</tr>
<tr>
    <td><CopyableCode code="milestone_number" /></td>
    <td><code>integer</code></td>
    <td>The milestone number. A workload can have a maximum of 100 milestones.</td>
</tr>
<tr>
    <td><CopyableCode code="workload_id" /></td>
    <td><code>string</code></td>
    <td>The ID assigned to the workload. This ID is unique within an Amazon Web Services Region. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_lens_review_report"><CopyableCode code="get_lens_review_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MilestoneNumber"><code>MilestoneNumber</code></a></td>
    <td>Get lens review report.</td>
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
<tr id="parameter-lens_alias">
    <td><CopyableCode code="lens_alias" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workload_id">
    <td><CopyableCode code="workload_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-MilestoneNumber">
    <td><CopyableCode code="MilestoneNumber" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_lens_review_report"
    values={[
        { label: 'get_lens_review_report', value: 'get_lens_review_report' }
    ]}
>
<TabItem value="get_lens_review_report">

Get lens review report.

```sql
SELECT
lens_review_report,
milestone_number,
workload_id
FROM aws.wellarchitected.lens_review_reports
WHERE workload_id = '{{ workload_id }}' -- required
AND lens_alias = '{{ lens_alias }}' -- required
AND region = '{{ region }}' -- required
AND MilestoneNumber = '{{ MilestoneNumber }}'
;
```
</TabItem>
</Tabs>
