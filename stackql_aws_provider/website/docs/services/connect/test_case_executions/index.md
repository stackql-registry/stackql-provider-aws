--- 
title: test_case_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - test_case_executions
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

Creates, updates, deletes, gets or lists a <code>test_case_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_case_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.test_case_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_test_case_executions"
    values={[
        { label: 'list_test_case_executions', value: 'list_test_case_executions' }
    ]}
>
<TabItem value="list_test_case_executions">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If there are additional results, this is the token for the next set of results.</td>
</tr>
<tr>
    <td><CopyableCode code="TestCaseExecutions" /></td>
    <td><code>array</code></td>
    <td>An array of test case execution summary objects.</td>
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
    <td><a href="#list_test_case_executions"><CopyableCode code="list_test_case_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-testCaseId"><code>testCaseId</code></a>, <a href="#parameter-testCaseName"><code>testCaseName</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all test case executions and allows filtering by test case id, test case name, start time, end time or status of the execution for the specified Amazon Connect instance.</td>
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
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Filter executions that started before this time.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Filter executions that started after this time.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter executions by status.</td>
</tr>
<tr id="parameter-testCaseId">
    <td><CopyableCode code="testCaseId" /></td>
    <td><code>string</code></td>
    <td>Filter executions by test case identifier.</td>
</tr>
<tr id="parameter-testCaseName">
    <td><CopyableCode code="testCaseName" /></td>
    <td><code>string</code></td>
    <td>Filter executions by test case name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_test_case_executions"
    values={[
        { label: 'list_test_case_executions', value: 'list_test_case_executions' }
    ]}
>
<TabItem value="list_test_case_executions">

Lists all test case executions and allows filtering by test case id, test case name, start time, end time or status of the execution for the specified Amazon Connect instance.

```sql
SELECT
NextToken,
TestCaseExecutions
FROM aws.connect.test_case_executions
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND testCaseId = '{{ testCaseId }}'
AND testCaseName = '{{ testCaseName }}'
AND startTime = '{{ startTime }}'
AND endTime = '{{ endTime }}'
AND status = '{{ status }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
