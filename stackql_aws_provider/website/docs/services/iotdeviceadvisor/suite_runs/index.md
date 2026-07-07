--- 
title: suite_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - suite_runs
  - iotdeviceadvisor
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

Creates, updates, deletes, gets or lists a <code>suite_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="suite_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotdeviceadvisor.suite_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_suite_run"
    values={[
        { label: 'get_suite_run', value: 'get_suite_run' },
        { label: 'list_suite_runs', value: 'list_suite_runs' }
    ]}
>
<TabItem value="get_suite_run">

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
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date (in Unix epoch time) when the test suite run ended.</td>
</tr>
<tr>
    <td><CopyableCode code="errorReason" /></td>
    <td><code>string</code></td>
    <td>Error reason for any test suite run failure.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date (in Unix epoch time) when the test suite run started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status for the test suite run. (PASS, FAIL, CANCELED, PENDING, RUNNING, STOPPING, STOPPED, PASS_WITH_WARNINGS, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="suiteDefinitionId" /></td>
    <td><code>string</code></td>
    <td>Suite definition ID for the test suite run.</td>
</tr>
<tr>
    <td><CopyableCode code="suiteDefinitionVersion" /></td>
    <td><code>string</code></td>
    <td>Suite definition version for the test suite run.</td>
</tr>
<tr>
    <td><CopyableCode code="suiteRunArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the suite run.</td>
</tr>
<tr>
    <td><CopyableCode code="suiteRunConfiguration" /></td>
    <td><code>object</code></td>
    <td>Suite run configuration for the test suite run.</td>
</tr>
<tr>
    <td><CopyableCode code="suiteRunId" /></td>
    <td><code>string</code></td>
    <td>Suite run ID for the test suite run.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags attached to the suite run.</td>
</tr>
<tr>
    <td><CopyableCode code="testResult" /></td>
    <td><code>object</code></td>
    <td>Test results for the test suite run.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_suite_runs">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next set of results.</td>
</tr>
<tr>
    <td><CopyableCode code="suiteRunsList" /></td>
    <td><code>array</code></td>
    <td>An array of objects that provide summaries of information about the suite runs in the list.</td>
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
    <td><a href="#get_suite_run"><CopyableCode code="get_suite_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-suite_definition_id"><code>suite_definition_id</code></a>, <a href="#parameter-suite_run_id"><code>suite_run_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a Device Advisor test suite run. Requires permission to access the GetSuiteRun action.</td>
</tr>
<tr>
    <td><a href="#list_suite_runs"><CopyableCode code="list_suite_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-suiteDefinitionId"><code>suiteDefinitionId</code></a>, <a href="#parameter-suiteDefinitionVersion"><code>suiteDefinitionVersion</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite. Requires permission to access the ListSuiteRuns action.</td>
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
<tr id="parameter-suite_definition_id">
    <td><CopyableCode code="suite_definition_id" /></td>
    <td><code>string</code></td>
    <td>Suite definition ID for the test suite run.</td>
</tr>
<tr id="parameter-suite_run_id">
    <td><CopyableCode code="suite_run_id" /></td>
    <td><code>string</code></td>
    <td>Suite run ID for the test suite run.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at once.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve the next set of results.</td>
</tr>
<tr id="parameter-suiteDefinitionId">
    <td><CopyableCode code="suiteDefinitionId" /></td>
    <td><code>string</code></td>
    <td>Lists the test suite runs of the specified test suite based on suite definition ID.</td>
</tr>
<tr id="parameter-suiteDefinitionVersion">
    <td><CopyableCode code="suiteDefinitionVersion" /></td>
    <td><code>string</code></td>
    <td>Must be passed along with suiteDefinitionId. Lists the test suite runs of the specified test suite based on suite definition version.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_suite_run"
    values={[
        { label: 'get_suite_run', value: 'get_suite_run' },
        { label: 'list_suite_runs', value: 'list_suite_runs' }
    ]}
>
<TabItem value="get_suite_run">

Gets information about a Device Advisor test suite run. Requires permission to access the GetSuiteRun action.

```sql
SELECT
endTime,
errorReason,
startTime,
status,
suiteDefinitionId,
suiteDefinitionVersion,
suiteRunArn,
suiteRunConfiguration,
suiteRunId,
tags,
testResult
FROM aws.iotdeviceadvisor.suite_runs
WHERE suite_definition_id = '{{ suite_definition_id }}' -- required
AND suite_run_id = '{{ suite_run_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_suite_runs">

Lists runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite. Requires permission to access the ListSuiteRuns action.

```sql
SELECT
nextToken,
suiteRunsList
FROM aws.iotdeviceadvisor.suite_runs
WHERE region = '{{ region }}' -- required
AND suiteDefinitionId = '{{ suiteDefinitionId }}'
AND suiteDefinitionVersion = '{{ suiteDefinitionVersion }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
