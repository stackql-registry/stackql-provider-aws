--- 
title: report_group_trends
hide_title: false
hide_table_of_contents: false
keywords:
  - report_group_trends
  - codebuild
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

Creates, updates, deletes, gets or lists a <code>report_group_trends</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="report_group_trends" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codebuild.report_group_trends" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_report_group_trend"
    values={[
        { label: 'get_report_group_trend', value: 'get_report_group_trend' }
    ]}
>
<TabItem value="get_report_group_trend">

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
    <td><CopyableCode code="raw_data" /></td>
    <td><code>array</code></td>
    <td>An array that contains the raw data for each report.</td>
</tr>
<tr>
    <td><CopyableCode code="stats" /></td>
    <td><code>object</code></td>
    <td>Contains the accumulated trend data.</td>
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
    <td><a href="#get_report_group_trend"><CopyableCode code="get_report_group_trend" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Analyzes and accumulates test report values for the specified test reports.</td>
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
    defaultValue="get_report_group_trend"
    values={[
        { label: 'get_report_group_trend', value: 'get_report_group_trend' }
    ]}
>
<TabItem value="get_report_group_trend">

Analyzes and accumulates test report values for the specified test reports.

```sql
SELECT
raw_data,
stats
FROM aws.codebuild.report_group_trends
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
