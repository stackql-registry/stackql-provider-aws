--- 
title: code_coverages
hide_title: false
hide_table_of_contents: false
keywords:
  - code_coverages
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

Creates, updates, deletes, gets or lists a <code>code_coverages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code_coverages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codebuild.code_coverages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_code_coverages"
    values={[
        { label: 'describe_code_coverages', value: 'describe_code_coverages' }
    ]}
>
<TabItem value="describe_code_coverages">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the code coverage report.</td>
</tr>
<tr>
    <td><CopyableCode code="branch_coverage_percentage" /></td>
    <td><code>number (double)</code></td>
    <td>The percentage of branches that are covered by your tests.</td>
</tr>
<tr>
    <td><CopyableCode code="branches_covered" /></td>
    <td><code>integer</code></td>
    <td>The number of conditional branches that are covered by your tests.</td>
</tr>
<tr>
    <td><CopyableCode code="branches_missed" /></td>
    <td><code>integer</code></td>
    <td>The number of conditional branches that are not covered by your tests.</td>
</tr>
<tr>
    <td><CopyableCode code="expired" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the tests were run.</td>
</tr>
<tr>
    <td><CopyableCode code="file_path" /></td>
    <td><code>string</code></td>
    <td>The path of the test report file.</td>
</tr>
<tr>
    <td><CopyableCode code="line_coverage_percentage" /></td>
    <td><code>number (double)</code></td>
    <td>The percentage of lines that are covered by your tests.</td>
</tr>
<tr>
    <td><CopyableCode code="lines_covered" /></td>
    <td><code>integer</code></td>
    <td>The number of lines that are covered by your tests.</td>
</tr>
<tr>
    <td><CopyableCode code="lines_missed" /></td>
    <td><code>integer</code></td>
    <td>The number of lines that are not covered by your tests.</td>
</tr>
<tr>
    <td><CopyableCode code="report_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the report.</td>
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
    <td><a href="#describe_code_coverages"><CopyableCode code="describe_code_coverages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves one or more code coverage reports.</td>
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
    defaultValue="describe_code_coverages"
    values={[
        { label: 'describe_code_coverages', value: 'describe_code_coverages' }
    ]}
>
<TabItem value="describe_code_coverages">

Retrieves one or more code coverage reports.

```sql
SELECT
id,
branch_coverage_percentage,
branches_covered,
branches_missed,
expired,
file_path,
line_coverage_percentage,
lines_covered,
lines_missed,
report_arn
FROM aws.codebuild.code_coverages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
