--- 
title: test_cases
hide_title: false
hide_table_of_contents: false
keywords:
  - test_cases
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

Creates, updates, deletes, gets or lists a <code>test_cases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_cases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codebuild.test_cases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_test_cases"
    values={[
        { label: 'describe_test_cases', value: 'describe_test_cases' }
    ]}
>
<TabItem value="describe_test_cases">

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
    <td>The name of the test case.</td>
</tr>
<tr>
    <td><CopyableCode code="duration_in_nano_seconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of nanoseconds it took to run this test case.</td>
</tr>
<tr>
    <td><CopyableCode code="expired" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a test case expires. A test case expires 30 days after it is created. An expired test case is not available to view in CodeBuild.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A message associated with a test case. For example, an error message or stack trace.</td>
</tr>
<tr>
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>A string that is applied to a series of related test cases. CodeBuild generates the prefix. The prefix depends on the framework used to generate the tests.</td>
</tr>
<tr>
    <td><CopyableCode code="report_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the report to which the test case belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status returned by the test case after it was run. Valid statuses are SUCCEEDED, FAILED, ERROR, SKIPPED, and UNKNOWN.</td>
</tr>
<tr>
    <td><CopyableCode code="test_raw_data_path" /></td>
    <td><code>string</code></td>
    <td>The path to the raw data file that contains the test result.</td>
</tr>
<tr>
    <td><CopyableCode code="test_suite_name" /></td>
    <td><code>string</code></td>
    <td>The name of the test suite that the test case is a part of.</td>
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
    <td><a href="#describe_test_cases"><CopyableCode code="describe_test_cases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of details about test cases for a report.</td>
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
    defaultValue="describe_test_cases"
    values={[
        { label: 'describe_test_cases', value: 'describe_test_cases' }
    ]}
>
<TabItem value="describe_test_cases">

Returns a list of details about test cases for a report.

```sql
SELECT
name,
duration_in_nano_seconds,
expired,
message,
prefix,
report_arn,
status,
test_raw_data_path,
test_suite_name
FROM aws.codebuild.test_cases
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
