--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
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

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_job"
    values={[
        { label: 'get_job', value: 'get_job' }
    ]}
>
<TabItem value="get_job">

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
    <td>The job's name.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The job's ARN. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="counters" /></td>
    <td><code>object</code></td>
    <td>The job's result counters.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="device" /></td>
    <td><code>object</code></td>
    <td>The device (phone or tablet).</td>
</tr>
<tr>
    <td><CopyableCode code="device_minutes" /></td>
    <td><code>object</code></td>
    <td>Represents the total (metered or unmetered) minutes used by the job.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the instance. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A message about the job's result.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>string</code></td>
    <td>The job's result. Allowed values include: PENDING PASSED WARNED FAILED SKIPPED ERRORED STOPPED (PENDING, PASSED, WARNED, FAILED, SKIPPED, ERRORED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="started" /></td>
    <td><code>string (date-time)</code></td>
    <td>The job's start time.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The job's status. Allowed values include: PENDING PENDING_CONCURRENCY PENDING_DEVICE PROCESSING SCHEDULING PREPARING RUNNING COMPLETED STOPPING (PENDING, PENDING_CONCURRENCY, PENDING_DEVICE, PROCESSING, SCHEDULING, PREPARING, RUNNING, COMPLETED, STOPPING)</td>
</tr>
<tr>
    <td><CopyableCode code="stopped" /></td>
    <td><code>string (date-time)</code></td>
    <td>The job's stop time.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The job's type. Allowed values include the following: BUILTIN_FUZZ APPIUM_JAVA_JUNIT APPIUM_JAVA_TESTNG APPIUM_PYTHON APPIUM_NODE APPIUM_RUBY APPIUM_WEB_JAVA_JUNIT APPIUM_WEB_JAVA_TESTNG APPIUM_WEB_PYTHON APPIUM_WEB_NODE APPIUM_WEB_RUBY INSTRUMENTATION XCTEST XCTEST_UI (BUILTIN_FUZZ, APPIUM_JAVA_JUNIT, APPIUM_JAVA_TESTNG, APPIUM_PYTHON, APPIUM_NODE, APPIUM_RUBY, APPIUM_WEB_JAVA_JUNIT, APPIUM_WEB_JAVA_TESTNG, APPIUM_WEB_PYTHON, APPIUM_WEB_NODE, APPIUM_WEB_RUBY, INSTRUMENTATION, XCTEST, XCTEST_UI)</td>
</tr>
<tr>
    <td><CopyableCode code="video_capture" /></td>
    <td><code>boolean</code></td>
    <td>This value is set to true if video capture is enabled. Otherwise, it is set to false.</td>
</tr>
<tr>
    <td><CopyableCode code="video_endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint for streaming device video.</td>
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
    <td><a href="#get_job"><CopyableCode code="get_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a job.</td>
</tr>
<tr>
    <td><a href="#list_jobs"><CopyableCode code="list_jobs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Gets information about jobs for a given test run.</td>
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
    defaultValue="get_job"
    values={[
        { label: 'get_job', value: 'get_job' }
    ]}
>
<TabItem value="get_job">

Gets information about a job.

```sql
SELECT
name,
arn,
counters,
created,
device,
device_minutes,
instance_arn,
message,
result,
started,
status,
stopped,
type_,
video_capture,
video_endpoint
FROM aws.devicefarm.jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_jobs"
    values={[
        { label: 'list_jobs', value: 'list_jobs' }
    ]}
>
<TabItem value="list_jobs">

Gets information about jobs for a given test run.

```sql
EXEC aws.devicefarm.jobs.list_jobs 
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
