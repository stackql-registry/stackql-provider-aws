--- 
title: test_case_execution_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - test_case_execution_summaries
  - connect
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

Creates, updates, deletes, gets or lists a <code>test_case_execution_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_case_execution_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.test_case_execution_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_test_case_execution_summary"
    values={[
        { label: 'get_test_case_execution_summary', value: 'get_test_case_execution_summary' }
    ]}
>
<TabItem value="get_test_case_execution_summary">

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
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the test case execution ended.</td>
</tr>
<tr>
    <td><CopyableCode code="observation_summary" /></td>
    <td><code>object</code></td>
    <td>Summary statistics for the test case execution.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the test case execution started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the test case execution. (INITIATED, PASSED, FAILED, IN_PROGRESS, STOPPED)</td>
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
    <td><a href="#get_test_case_execution_summary"><CopyableCode code="get_test_case_execution_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-test_case_id"><code>test_case_id</code></a>, <a href="#parameter-test_case_execution_id"><code>test_case_execution_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves an overview of a test execution that includes the status of the execution, start and end time, and observation summary.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-test_case_execution_id">
    <td><CopyableCode code="test_case_execution_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the test case execution.</td>
</tr>
<tr id="parameter-test_case_id">
    <td><CopyableCode code="test_case_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the test case.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_test_case_execution_summary"
    values={[
        { label: 'get_test_case_execution_summary', value: 'get_test_case_execution_summary' }
    ]}
>
<TabItem value="get_test_case_execution_summary">

Retrieves an overview of a test execution that includes the status of the execution, start and end time, and observation summary.

```sql
SELECT
end_time,
observation_summary,
start_time,
status
FROM aws.connect.test_case_execution_summaries
WHERE instance_id = '{{ instance_id }}' -- required
AND test_case_id = '{{ test_case_id }}' -- required
AND test_case_execution_id = '{{ test_case_execution_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
