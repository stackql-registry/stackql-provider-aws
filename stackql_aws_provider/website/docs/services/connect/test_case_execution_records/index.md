--- 
title: test_case_execution_records
hide_title: false
hide_table_of_contents: false
keywords:
  - test_case_execution_records
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

Creates, updates, deletes, gets or lists a <code>test_case_execution_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_case_execution_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.test_case_execution_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_test_case_execution_records"
    values={[
        { label: 'list_test_case_execution_records', value: 'list_test_case_execution_records' }
    ]}
>
<TabItem value="list_test_case_execution_records">

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
    <td><CopyableCode code="ExecutionRecords" /></td>
    <td><code>array</code></td>
    <td>An array of test case execution record objects.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If there are additional results, this is the token for the next set of results.</td>
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
    <td><a href="#list_test_case_execution_records"><CopyableCode code="list_test_case_execution_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-test_case_id"><code>test_case_id</code></a>, <a href="#parameter-test_case_execution_id"><code>test_case_execution_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists detailed steps of test case execution that includes all observations along with actions taken and data associated in the specified Amazon Connect instance.</td>
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
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter execution records by status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_test_case_execution_records"
    values={[
        { label: 'list_test_case_execution_records', value: 'list_test_case_execution_records' }
    ]}
>
<TabItem value="list_test_case_execution_records">

Lists detailed steps of test case execution that includes all observations along with actions taken and data associated in the specified Amazon Connect instance.

```sql
SELECT
ExecutionRecords,
NextToken
FROM aws.connect.test_case_execution_records
WHERE instance_id = '{{ instance_id }}' -- required
AND test_case_id = '{{ test_case_id }}' -- required
AND test_case_execution_id = '{{ test_case_execution_id }}' -- required
AND region = '{{ region }}' -- required
AND status = '{{ status }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
