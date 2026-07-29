--- 
title: automated_reasoning_policy_test_results
hide_title: false
hide_table_of_contents: false
keywords:
  - automated_reasoning_policy_test_results
  - bedrock
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

Creates, updates, deletes, gets or lists an <code>automated_reasoning_policy_test_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automated_reasoning_policy_test_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.automated_reasoning_policy_test_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_automated_reasoning_policy_test_result"
    values={[
        { label: 'get_automated_reasoning_policy_test_result', value: 'get_automated_reasoning_policy_test_result' },
        { label: 'list_automated_reasoning_policy_test_results', value: 'list_automated_reasoning_policy_test_results' }
    ]}
>
<TabItem value="get_automated_reasoning_policy_test_result">

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
    <td><CopyableCode code="aggregated_test_findings_result" /></td>
    <td><code>string</code></td>
    <td>A summary of all test findings, aggregated to provide an overall assessment of policy quality and correctness. (VALID, INVALID, SATISFIABLE, IMPOSSIBLE, TRANSLATION_AMBIGUOUS, TOO_COMPLEX, NO_TRANSLATION)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Automated Reasoning policy that was tested. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:automated-reasoning-policy/&#91;a-z0-9&#93;&#123;12&#125;(:(&#91;1-9&#93;&#91;0-9&#93;&#123;0,11&#125;))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="test_case" /></td>
    <td><code>object</code></td>
    <td>Represents a test for validating an Automated Reasoning policy. tests contain sample inputs and expected outcomes to verify policy behavior.</td>
</tr>
<tr>
    <td><CopyableCode code="test_findings" /></td>
    <td><code>array</code></td>
    <td>Detailed findings from the test run, including any issues, violations, or unexpected behaviors discovered.</td>
</tr>
<tr>
    <td><CopyableCode code="test_run_result" /></td>
    <td><code>string</code></td>
    <td>The overall result of the test run, indicating whether the policy passed or failed validation. (PASSED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="test_run_status" /></td>
    <td><code>string</code></td>
    <td>The overall status of the test run (e.g., COMPLETED, FAILED, IN_PROGRESS). (NOT_STARTED, SCHEDULED, IN_PROGRESS, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the test results were last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_automated_reasoning_policy_test_results">

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
    <td><CopyableCode code="aggregated_test_findings_result" /></td>
    <td><code>string</code></td>
    <td>A summary of all test findings, aggregated to provide an overall assessment of policy quality and correctness. (VALID, INVALID, SATISFIABLE, IMPOSSIBLE, TRANSLATION_AMBIGUOUS, TOO_COMPLEX, NO_TRANSLATION)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Automated Reasoning policy that was tested. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:automated-reasoning-policy/&#91;a-z0-9&#93;&#123;12&#125;(:(&#91;1-9&#93;&#91;0-9&#93;&#123;0,11&#125;))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="test_case" /></td>
    <td><code>object</code></td>
    <td>Represents a test for validating an Automated Reasoning policy. tests contain sample inputs and expected outcomes to verify policy behavior.</td>
</tr>
<tr>
    <td><CopyableCode code="test_findings" /></td>
    <td><code>array</code></td>
    <td>Detailed findings from the test run, including any issues, violations, or unexpected behaviors discovered.</td>
</tr>
<tr>
    <td><CopyableCode code="test_run_result" /></td>
    <td><code>string</code></td>
    <td>The overall result of the test run, indicating whether the policy passed or failed validation. (PASSED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="test_run_status" /></td>
    <td><code>string</code></td>
    <td>The overall status of the test run (e.g., COMPLETED, FAILED, IN_PROGRESS). (NOT_STARTED, SCHEDULED, IN_PROGRESS, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the test results were last updated.</td>
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
    <td><a href="#get_automated_reasoning_policy_test_result"><CopyableCode code="get_automated_reasoning_policy_test_result" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-build_workflow_id"><code>build_workflow_id</code></a>, <a href="#parameter-test_case_id"><code>test_case_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the test result for a specific Automated Reasoning policy test. Returns detailed validation findings and execution status.</td>
</tr>
<tr>
    <td><a href="#list_automated_reasoning_policy_test_results"><CopyableCode code="list_automated_reasoning_policy_test_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-build_workflow_id"><code>build_workflow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists test results for an Automated Reasoning policy, showing how the policy performed against various test scenarios and validation checks.</td>
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
<tr id="parameter-build_workflow_id">
    <td><CopyableCode code="build_workflow_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the build workflow whose test results you want to list.</td>
</tr>
<tr id="parameter-policy_arn">
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Automated Reasoning policy whose test results you want to list.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-test_case_id">
    <td><CopyableCode code="test_case_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the test for which to retrieve results.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of test results to return in a single response. Valid range is 1-100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token from a previous request to continue listing test results from where the previous request left off.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_automated_reasoning_policy_test_result"
    values={[
        { label: 'get_automated_reasoning_policy_test_result', value: 'get_automated_reasoning_policy_test_result' },
        { label: 'list_automated_reasoning_policy_test_results', value: 'list_automated_reasoning_policy_test_results' }
    ]}
>
<TabItem value="get_automated_reasoning_policy_test_result">

Retrieves the test result for a specific Automated Reasoning policy test. Returns detailed validation findings and execution status.

```sql
SELECT
aggregated_test_findings_result,
policy_arn,
test_case,
test_findings,
test_run_result,
test_run_status,
updated_at
FROM aws.bedrock.automated_reasoning_policy_test_results
WHERE policy_arn = '{{ policy_arn }}' -- required
AND build_workflow_id = '{{ build_workflow_id }}' -- required
AND test_case_id = '{{ test_case_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_automated_reasoning_policy_test_results">

Lists test results for an Automated Reasoning policy, showing how the policy performed against various test scenarios and validation checks.

```sql
SELECT
aggregated_test_findings_result,
policy_arn,
test_case,
test_findings,
test_run_result,
test_run_status,
updated_at
FROM aws.bedrock.automated_reasoning_policy_test_results
WHERE policy_arn = '{{ policy_arn }}' -- required
AND build_workflow_id = '{{ build_workflow_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
