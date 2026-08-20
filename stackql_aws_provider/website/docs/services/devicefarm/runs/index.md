--- 
title: runs
hide_title: false
hide_table_of_contents: false
keywords:
  - runs
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

Creates, updates, deletes, gets or lists a <code>runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_run"
    values={[
        { label: 'get_run', value: 'get_run' }
    ]}
>
<TabItem value="get_run">

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
    <td>The run's name.</td>
</tr>
<tr>
    <td><CopyableCode code="app_upload" /></td>
    <td><code>string</code></td>
    <td>An app to upload or that has been uploaded. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The run's ARN. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_method" /></td>
    <td><code>string</code></td>
    <td>Specifies the billing method for a test run: metered or unmetered. If the parameter is not specified, the default value is metered. If you have unmetered device slots, you must set this to unmetered to use them. Otherwise, the run is counted toward metered device minutes. (METERED, UNMETERED)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_jobs" /></td>
    <td><code>integer</code></td>
    <td>The total number of completed jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="counters" /></td>
    <td><code>object</code></td>
    <td>The run's result counters.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_artifact_paths" /></td>
    <td><code>object</code></td>
    <td>Output CustomerArtifactPaths object for the test run.</td>
</tr>
<tr>
    <td><CopyableCode code="device_minutes" /></td>
    <td><code>object</code></td>
    <td>Represents the total (metered or unmetered) minutes used by the test run.</td>
</tr>
<tr>
    <td><CopyableCode code="device_pool_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the device pool for the run. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="device_proxy" /></td>
    <td><code>object</code></td>
    <td>The device proxy configured for the devices in the run.</td>
</tr>
<tr>
    <td><CopyableCode code="device_selection_result" /></td>
    <td><code>object</code></td>
    <td>The results of a device filter used to select the devices for a test run.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_variables" /></td>
    <td><code>array</code></td>
    <td>Environment variables associated with the run.</td>
</tr>
<tr>
    <td><CopyableCode code="event_count" /></td>
    <td><code>integer</code></td>
    <td>For fuzz tests, this is the number of events, between 1 and 10000, that the UI fuzz test should perform.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The IAM role associated with the run. (pattern: &lt;code&gt;^arn:aws:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="insights" /></td>
    <td><code>object</code></td>
    <td>The insights for the run, including the report status and job-level metrics. This field contains data only if you specified insightsTypes when you scheduled the run.</td>
</tr>
<tr>
    <td><CopyableCode code="insights_types" /></td>
    <td><code>array</code></td>
    <td>The types of insights requested for the run.</td>
</tr>
<tr>
    <td><CopyableCode code="job_timeout_minutes" /></td>
    <td><code>integer</code></td>
    <td>The number of minutes the job executes before it times out.</td>
</tr>
<tr>
    <td><CopyableCode code="locale" /></td>
    <td><code>string</code></td>
    <td>Information about the locale that is used for the run.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>Information about the location that is used for the run.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A message about the run's result.</td>
</tr>
<tr>
    <td><CopyableCode code="network_profile" /></td>
    <td><code>object</code></td>
    <td>The network profile being used for a test run.</td>
</tr>
<tr>
    <td><CopyableCode code="parsing_result_url" /></td>
    <td><code>string</code></td>
    <td>Read-only URL for an object in an S3 bucket where you can get the parsing results of the test package. If the test package doesn't parse, the reason why it doesn't parse appears in the file that this URL points to.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The run's platform. Allowed values include: ANDROID IOS (ANDROID, IOS)</td>
</tr>
<tr>
    <td><CopyableCode code="radios" /></td>
    <td><code>object</code></td>
    <td>Information about the radio states for the run.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>string</code></td>
    <td>The run's result. Allowed values include: PENDING PASSED WARNED FAILED SKIPPED ERRORED STOPPED (PENDING, PASSED, WARNED, FAILED, SKIPPED, ERRORED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="result_code" /></td>
    <td><code>string</code></td>
    <td>Supporting field for the result field. Set only if result is SKIPPED. PARSING_FAILED if the result is skipped because of test package parsing failure. (PARSING_FAILED, VPC_ENDPOINT_SETUP_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="seed" /></td>
    <td><code>integer</code></td>
    <td>For fuzz tests, this is a seed to use for randomizing the UI fuzz test. Using the same seed value between tests ensures identical event sequences.</td>
</tr>
<tr>
    <td><CopyableCode code="skip_app_resign" /></td>
    <td><code>boolean</code></td>
    <td>When set to true, for private devices, Device Farm does not sign your app again. For public devices, Device Farm always signs your apps again. For more information about how Device Farm re-signs your apps, see Do you modify my app? in the AWS Device Farm FAQs.</td>
</tr>
<tr>
    <td><CopyableCode code="started" /></td>
    <td><code>string (date-time)</code></td>
    <td>The run's start time.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The run's status. Allowed values include: PENDING PENDING_CONCURRENCY PENDING_DEVICE PROCESSING SCHEDULING PREPARING RUNNING COMPLETED STOPPING (PENDING, PENDING_CONCURRENCY, PENDING_DEVICE, PROCESSING, SCHEDULING, PREPARING, RUNNING, COMPLETED, STOPPING)</td>
</tr>
<tr>
    <td><CopyableCode code="stopped" /></td>
    <td><code>string (date-time)</code></td>
    <td>The run's stop time.</td>
</tr>
<tr>
    <td><CopyableCode code="test_spec_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the YAML-formatted test specification for the run. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="total_jobs" /></td>
    <td><code>integer</code></td>
    <td>The total number of jobs for the run.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The run's type. Must be one of the following values: BUILTIN_FUZZ APPIUM_JAVA_JUNIT APPIUM_JAVA_TESTNG APPIUM_PYTHON APPIUM_NODE APPIUM_RUBY APPIUM_WEB_JAVA_JUNIT APPIUM_WEB_JAVA_TESTNG APPIUM_WEB_PYTHON APPIUM_WEB_NODE APPIUM_WEB_RUBY INSTRUMENTATION XCTEST XCTEST_UI (BUILTIN_FUZZ, APPIUM_JAVA_JUNIT, APPIUM_JAVA_TESTNG, APPIUM_PYTHON, APPIUM_NODE, APPIUM_RUBY, APPIUM_WEB_JAVA_JUNIT, APPIUM_WEB_JAVA_TESTNG, APPIUM_WEB_PYTHON, APPIUM_WEB_NODE, APPIUM_WEB_RUBY, INSTRUMENTATION, XCTEST, XCTEST_UI)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config" /></td>
    <td><code>object</code></td>
    <td>The VPC security groups and subnets that are attached to a project.</td>
</tr>
<tr>
    <td><CopyableCode code="web_url" /></td>
    <td><code>string</code></td>
    <td>The Device Farm console URL for the recording of the run.</td>
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
    <td><a href="#get_run"><CopyableCode code="get_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a run.</td>
</tr>
<tr>
    <td><a href="#delete_run"><CopyableCode code="delete_run" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the run, given the run ARN. You cannot delete a run if it is still active. You cannot undo this operation.</td>
</tr>
<tr>
    <td><a href="#list_runs"><CopyableCode code="list_runs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Gets information about runs, given an AWS Device Farm project ARN.</td>
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
    defaultValue="get_run"
    values={[
        { label: 'get_run', value: 'get_run' }
    ]}
>
<TabItem value="get_run">

Gets information about a run.

```sql
SELECT
name,
app_upload,
arn,
billing_method,
completed_jobs,
counters,
created,
customer_artifact_paths,
device_minutes,
device_pool_arn,
device_proxy,
device_selection_result,
environment_variables,
event_count,
execution_role_arn,
insights,
insights_types,
job_timeout_minutes,
locale,
location,
message,
network_profile,
parsing_result_url,
platform,
radios,
result,
result_code,
seed,
skip_app_resign,
started,
status,
stopped,
test_spec_arn,
total_jobs,
type_,
vpc_config,
web_url
FROM aws.devicefarm.runs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_run"
    values={[
        { label: 'delete_run', value: 'delete_run' }
    ]}
>
<TabItem value="delete_run">

Deletes the run, given the run ARN. You cannot delete a run if it is still active. You cannot undo this operation.

```sql
DELETE FROM aws.devicefarm.runs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_runs"
    values={[
        { label: 'list_runs', value: 'list_runs' }
    ]}
>
<TabItem value="list_runs">

Gets information about runs, given an AWS Device Farm project ARN.

```sql
EXEC aws.devicefarm.runs.list_runs 
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
