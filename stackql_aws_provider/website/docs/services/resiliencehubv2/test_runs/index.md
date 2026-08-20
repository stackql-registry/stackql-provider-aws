--- 
title: test_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - test_runs
  - resiliencehubv2
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

Creates, updates, deletes, gets or lists a <code>test_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.test_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_test_run"
    values={[
        { label: 'get_test_run', value: 'get_test_run' },
        { label: 'list_test_runs', value: 'list_test_runs' }
    ]}
>
<TabItem value="get_test_run">

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
    <td><CopyableCode code="account_targeting" /></td>
    <td><code>string</code></td>
    <td>Indicates whether this test run targets a single account or multiple accounts. (SINGLE_ACCOUNT, MULTI_ACCOUNT)</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the test run ended.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>A human-readable reason for test run failure. Only present when the status is FAILED or ERROR.</td>
</tr>
<tr>
    <td><CopyableCode code="event_count" /></td>
    <td><code>integer</code></td>
    <td>The number of events recorded for the test run. Use ListTestRunEvents to retrieve the details.</td>
</tr>
<tr>
    <td><CopyableCode code="experiments" /></td>
    <td><code>array</code></td>
    <td>The AWS Fault Injection Service (AWS FIS) experiments run as part of the test run.</td>
</tr>
<tr>
    <td><CopyableCode code="logging_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for test execution logging destinations.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>The parameter values used for the test run.</td>
</tr>
<tr>
    <td><CopyableCode code="permission_model" /></td>
    <td><code>object</code></td>
    <td>Defines the permission model for a service.</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>object</code></td>
    <td>The resilience policy snapshotted from the service when the run was started.</td>
</tr>
<tr>
    <td><CopyableCode code="region_switch_execution_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the ARC Region switch execution detected during the test run. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)+-&#91;0-9&#93;+/&#91;0-9a-fA-F&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="region_switch_plan_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The Regions snapshotted from the service when the run was started.</td>
</tr>
<tr>
    <td><CopyableCode code="report_configuration" /></td>
    <td><code>object</code></td>
    <td>The report configuration snapshotted from the service when the run was started.</td>
</tr>
<tr>
    <td><CopyableCode code="report_output" /></td>
    <td><code>object</code></td>
    <td>The report generation result for the test run. Present after report generation completes or fails.</td>
</tr>
<tr>
    <td><CopyableCode code="role_name" /></td>
    <td><code>string</code></td>
    <td>Resource name (used in ARN — no spaces allowed). (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_\-&#93;&#123;1,59&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the test run started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the test run. (INITIALIZING, RUNNING, STOPPING, PASSED, FAILED, STOPPED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="stop_conditions" /></td>
    <td><code>array</code></td>
    <td>The stop conditions snapshotted from the test when the run was started.</td>
</tr>
<tr>
    <td><CopyableCode code="test_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a test.</td>
</tr>
<tr>
    <td><CopyableCode code="test_run_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a test run.</td>
</tr>
<tr>
    <td><CopyableCode code="test_template_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN owned by the service. Accepts either a standard 12-digit account ID or the literal "aws" for AWS-managed resources, such as AWS-managed test templates. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):(&#91;0-9&#93;&#123;12&#125;|aws):&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_test_runs">

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
    <td><CopyableCode code="account_targeting" /></td>
    <td><code>string</code></td>
    <td>Indicates whether this test run targets a single account or multiple accounts. (SINGLE_ACCOUNT, MULTI_ACCOUNT)</td>
</tr>
<tr>
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the test run ended.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>A human-readable reason for test run failure. Only present when the status is FAILED or ERROR.</td>
</tr>
<tr>
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the test run started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the test run. (INITIALIZING, RUNNING, STOPPING, PASSED, FAILED, STOPPED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="test_run_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a test run.</td>
</tr>
<tr>
    <td><CopyableCode code="test_template_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN owned by the service. Accepts either a standard 12-digit account ID or the literal "aws" for AWS-managed resources, such as AWS-managed test templates. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):(&#91;0-9&#93;&#123;12&#125;|aws):&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_test_run"><CopyableCode code="get_test_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-testRunId"><code>testRunId</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a test run by ID, including its status, results, and the configuration snapshotted when the run started.</td>
</tr>
<tr>
    <td><a href="#list_test_runs"><CopyableCode code="list_test_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-testId"><code>testId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the runs of a test, or all test runs for a service.</td>
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
<tr id="parameter-serviceArn">
    <td><CopyableCode code="serviceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the service to list test runs for.</td>
</tr>
<tr id="parameter-testRunId">
    <td><CopyableCode code="testRunId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the test run to retrieve.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-testId">
    <td><CopyableCode code="testId" /></td>
    <td><code>string</code></td>
    <td>Filter test runs by test identifier.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_test_run"
    values={[
        { label: 'get_test_run', value: 'get_test_run' },
        { label: 'list_test_runs', value: 'list_test_runs' }
    ]}
>
<TabItem value="get_test_run">

Retrieves a test run by ID, including its status, results, and the configuration snapshotted when the run started.

```sql
SELECT
account_targeting,
ended_at,
error_message,
event_count,
experiments,
logging_configuration,
parameters,
permission_model,
policy,
region_switch_execution_id,
region_switch_plan_arn,
regions,
report_configuration,
report_output,
role_name,
service_arn,
started_at,
status,
stop_conditions,
test_id,
test_run_id,
test_template_arn
FROM aws.resiliencehubv2.test_runs
WHERE testRunId = '{{ testRunId }}' -- required
AND serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_test_runs">

Lists the runs of a test, or all test runs for a service.

```sql
SELECT
account_targeting,
ended_at,
error_message,
service_arn,
started_at,
status,
test_run_id,
test_template_arn
FROM aws.resiliencehubv2.test_runs
WHERE serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
AND testId = '{{ testId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
