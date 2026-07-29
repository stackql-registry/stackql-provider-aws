--- 
title: suite_run_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - suite_run_reports
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

Creates, updates, deletes, gets or lists a <code>suite_run_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="suite_run_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotdeviceadvisor.suite_run_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_suite_run_report"
    values={[
        { label: 'get_suite_run_report', value: 'get_suite_run_report' }
    ]}
>
<TabItem value="get_suite_run_report">

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
    <td><CopyableCode code="qualification_report_download_url" /></td>
    <td><code>string</code></td>
    <td>Download URL of the qualification report.</td>
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
    <td><a href="#get_suite_run_report"><CopyableCode code="get_suite_run_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-suite_definition_id"><code>suite_definition_id</code></a>, <a href="#parameter-suite_run_id"><code>suite_run_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a report download link for a successful Device Advisor qualifying test suite run. Requires permission to access the GetSuiteRunReport action.</td>
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
    <td>Suite definition ID of the test suite.</td>
</tr>
<tr id="parameter-suite_run_id">
    <td><CopyableCode code="suite_run_id" /></td>
    <td><code>string</code></td>
    <td>Suite run ID of the test suite run.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_suite_run_report"
    values={[
        { label: 'get_suite_run_report', value: 'get_suite_run_report' }
    ]}
>
<TabItem value="get_suite_run_report">

Gets a report download link for a successful Device Advisor qualifying test suite run. Requires permission to access the GetSuiteRunReport action.

```sql
SELECT
qualification_report_download_url
FROM aws.iotdeviceadvisor.suite_run_reports
WHERE suite_definition_id = '{{ suite_definition_id }}' -- required
AND suite_run_id = '{{ suite_run_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
