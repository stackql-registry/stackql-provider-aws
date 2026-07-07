--- 
title: suites
hide_title: false
hide_table_of_contents: false
keywords:
  - suites
  - devicefarm
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

Creates, updates, deletes, gets or lists a <code>suites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="suites" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.suites" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_suite"
    values={[
        { label: 'get_suite', value: 'get_suite' }
    ]}
>
<TabItem value="get_suite">

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
    <td>The suite's name.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The suite's ARN. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="counters" /></td>
    <td><code>object</code></td>
    <td>The suite's result counters.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the suite was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deviceMinutes" /></td>
    <td><code>object</code></td>
    <td>Represents the total (metered or unmetered) minutes used by the test suite.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A message about the suite's result.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>string</code></td>
    <td>The suite's result. Allowed values include: PENDING PASSED WARNED FAILED SKIPPED ERRORED STOPPED (PENDING, PASSED, WARNED, FAILED, SKIPPED, ERRORED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="started" /></td>
    <td><code>string (date-time)</code></td>
    <td>The suite's start time.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The suite's status. Allowed values include: PENDING PENDING_CONCURRENCY PENDING_DEVICE PROCESSING SCHEDULING PREPARING RUNNING COMPLETED STOPPING (PENDING, PENDING_CONCURRENCY, PENDING_DEVICE, PROCESSING, SCHEDULING, PREPARING, RUNNING, COMPLETED, STOPPING)</td>
</tr>
<tr>
    <td><CopyableCode code="stopped" /></td>
    <td><code>string (date-time)</code></td>
    <td>The suite's stop time.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The suite's type. Must be one of the following values: BUILTIN_FUZZ APPIUM_JAVA_JUNIT APPIUM_JAVA_TESTNG APPIUM_PYTHON APPIUM_NODE APPIUM_RUBY APPIUM_WEB_JAVA_JUNIT APPIUM_WEB_JAVA_TESTNG APPIUM_WEB_PYTHON APPIUM_WEB_NODE APPIUM_WEB_RUBY INSTRUMENTATION XCTEST XCTEST_UI (BUILTIN_FUZZ, APPIUM_JAVA_JUNIT, APPIUM_JAVA_TESTNG, APPIUM_PYTHON, APPIUM_NODE, APPIUM_RUBY, APPIUM_WEB_JAVA_JUNIT, APPIUM_WEB_JAVA_TESTNG, APPIUM_WEB_PYTHON, APPIUM_WEB_NODE, APPIUM_WEB_RUBY, INSTRUMENTATION, XCTEST, XCTEST_UI)</td>
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
    <td><a href="#get_suite"><CopyableCode code="get_suite" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a suite.</td>
</tr>
<tr>
    <td><a href="#list_suites"><CopyableCode code="list_suites" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Gets information about test suites for a given job.</td>
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
    defaultValue="get_suite"
    values={[
        { label: 'get_suite', value: 'get_suite' }
    ]}
>
<TabItem value="get_suite">

Gets information about a suite.

```sql
SELECT
name,
arn,
counters,
created,
deviceMinutes,
message,
result,
started,
status,
stopped,
type_
FROM aws.devicefarm.suites
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_suites"
    values={[
        { label: 'list_suites', value: 'list_suites' }
    ]}
>
<TabItem value="list_suites">

Gets information about test suites for a given job.

```sql
EXEC aws.devicefarm.suites.list_suites 
@region='{{ region }}' --required 
@@json=
'{
"arn": "{{ arn }}", 
"nextToken": "{{ nextToken }}"
}'
;
```
</TabItem>
</Tabs>
