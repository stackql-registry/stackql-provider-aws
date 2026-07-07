--- 
title: automated_reasoning_policy_test_cases
hide_title: false
hide_table_of_contents: false
keywords:
  - automated_reasoning_policy_test_cases
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

Creates, updates, deletes, gets or lists an <code>automated_reasoning_policy_test_cases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automated_reasoning_policy_test_cases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.automated_reasoning_policy_test_cases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_automated_reasoning_policy_test_case"
    values={[
        { label: 'get_automated_reasoning_policy_test_case', value: 'get_automated_reasoning_policy_test_case' },
        { label: 'list_automated_reasoning_policy_test_cases', value: 'list_automated_reasoning_policy_test_cases' }
    ]}
>
<TabItem value="get_automated_reasoning_policy_test_case">

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
    <td><CopyableCode code="policyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the policy that contains the test. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:automated-reasoning-policy/&#91;a-z0-9&#93;&#123;12&#125;(:(&#91;1-9&#93;&#91;0-9&#93;&#123;0,11&#125;))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="testCase" /></td>
    <td><code>object</code></td>
    <td>Represents a test for validating an Automated Reasoning policy. tests contain sample inputs and expected outcomes to verify policy behavior.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_automated_reasoning_policy_test_cases">

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
    <td><CopyableCode code="confidenceThreshold" /></td>
    <td><code>number (double)</code></td>
    <td>The minimum confidence level for logic validation. Content meeting this threshold is considered high-confidence and can be validated.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the test was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expectedAggregatedFindingsResult" /></td>
    <td><code>string</code></td>
    <td>The expected result of the Automated Reasoning check for this test. (VALID, INVALID, SATISFIABLE, IMPOSSIBLE, TRANSLATION_AMBIGUOUS, TOO_COMPLEX, NO_TRANSLATION)</td>
</tr>
<tr>
    <td><CopyableCode code="guardContent" /></td>
    <td><code>string</code></td>
    <td>The output content to be validated by the policy, typically representing a foundation model response.</td>
</tr>
<tr>
    <td><CopyableCode code="queryContent" /></td>
    <td><code>string</code></td>
    <td>The input query or prompt that generated the content. This provides context for the validation.</td>
</tr>
<tr>
    <td><CopyableCode code="testCaseId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the test. (pattern: &lt;code&gt;&#91;0-9A-Z&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the test was last updated.</td>
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
    <td><a href="#get_automated_reasoning_policy_test_case"><CopyableCode code="get_automated_reasoning_policy_test_case" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-test_case_id"><code>test_case_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a specific Automated Reasoning policy test.</td>
</tr>
<tr>
    <td><a href="#list_automated_reasoning_policy_test_cases"><CopyableCode code="list_automated_reasoning_policy_test_cases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists tests for an Automated Reasoning policy. We recommend using pagination to ensure that the operation returns quickly and successfully.</td>
</tr>
<tr>
    <td><a href="#create_automated_reasoning_policy_test_case"><CopyableCode code="create_automated_reasoning_policy_test_case" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-guardContent"><code>guardContent</code></a>, <a href="#parameter-expectedAggregatedFindingsResult"><code>expectedAggregatedFindingsResult</code></a></td>
    <td></td>
    <td>Creates a test for an Automated Reasoning policy. Tests validate that your policy works as expected by providing sample inputs and expected outcomes. Use tests to verify policy behavior before deploying to production.</td>
</tr>
<tr>
    <td><a href="#update_automated_reasoning_policy_test_case"><CopyableCode code="update_automated_reasoning_policy_test_case" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-test_case_id"><code>test_case_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-guardContent"><code>guardContent</code></a>, <a href="#parameter-lastUpdatedAt"><code>lastUpdatedAt</code></a>, <a href="#parameter-expectedAggregatedFindingsResult"><code>expectedAggregatedFindingsResult</code></a></td>
    <td></td>
    <td>Updates an existing Automated Reasoning policy test. You can modify the content, query, expected result, and confidence threshold.</td>
</tr>
<tr>
    <td><a href="#delete_automated_reasoning_policy_test_case"><CopyableCode code="delete_automated_reasoning_policy_test_case" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-test_case_id"><code>test_case_id</code></a>, <a href="#parameter-updatedAt"><code>updatedAt</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Automated Reasoning policy test. This operation is idempotent; if you delete a test more than once, each call succeeds.</td>
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
<tr id="parameter-policy_arn">
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Automated Reasoning policy that contains the test.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-test_case_id">
    <td><CopyableCode code="test_case_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the test to delete.</td>
</tr>
<tr id="parameter-updatedAt">
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the test was last updated. This is used as a concurrency token to prevent conflicting modifications.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of tests to return in a single call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from a previous request to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_automated_reasoning_policy_test_case"
    values={[
        { label: 'get_automated_reasoning_policy_test_case', value: 'get_automated_reasoning_policy_test_case' },
        { label: 'list_automated_reasoning_policy_test_cases', value: 'list_automated_reasoning_policy_test_cases' }
    ]}
>
<TabItem value="get_automated_reasoning_policy_test_case">

Retrieves details about a specific Automated Reasoning policy test.

```sql
SELECT
policyArn,
testCase
FROM aws.bedrock.automated_reasoning_policy_test_cases
WHERE policy_arn = '{{ policy_arn }}' -- required
AND test_case_id = '{{ test_case_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_automated_reasoning_policy_test_cases">

Lists tests for an Automated Reasoning policy. We recommend using pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
confidenceThreshold,
createdAt,
expectedAggregatedFindingsResult,
guardContent,
queryContent,
testCaseId,
updatedAt
FROM aws.bedrock.automated_reasoning_policy_test_cases
WHERE policy_arn = '{{ policy_arn }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_automated_reasoning_policy_test_case"
    values={[
        { label: 'create_automated_reasoning_policy_test_case', value: 'create_automated_reasoning_policy_test_case' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_automated_reasoning_policy_test_case">

Creates a test for an Automated Reasoning policy. Tests validate that your policy works as expected by providing sample inputs and expected outcomes. Use tests to verify policy behavior before deploying to production.

```sql
INSERT INTO aws.bedrock.automated_reasoning_policy_test_cases (
guardContent,
queryContent,
expectedAggregatedFindingsResult,
clientRequestToken,
confidenceThreshold,
policy_arn,
region
)
SELECT 
'{{ guardContent }}' /* required */,
'{{ queryContent }}',
'{{ expectedAggregatedFindingsResult }}' /* required */,
'{{ clientRequestToken }}',
{{ confidenceThreshold }},
'{{ policy_arn }}',
'{{ region }}'
RETURNING
policyArn,
testCaseId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: automated_reasoning_policy_test_cases
  props:
    - name: policy_arn
      value: "{{ policy_arn }}"
      description: Required parameter for the automated_reasoning_policy_test_cases resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the automated_reasoning_policy_test_cases resource.
    - name: guardContent
      value: "{{ guardContent }}"
    - name: queryContent
      value: "{{ queryContent }}"
    - name: expectedAggregatedFindingsResult
      value: "{{ expectedAggregatedFindingsResult }}"
      valid_values: ['VALID', 'INVALID', 'SATISFIABLE', 'IMPOSSIBLE', 'TRANSLATION_AMBIGUOUS', 'TOO_COMPLEX', 'NO_TRANSLATION']
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: confidenceThreshold
      value: {{ confidenceThreshold }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_automated_reasoning_policy_test_case"
    values={[
        { label: 'update_automated_reasoning_policy_test_case', value: 'update_automated_reasoning_policy_test_case' }
    ]}
>
<TabItem value="update_automated_reasoning_policy_test_case">

Updates an existing Automated Reasoning policy test. You can modify the content, query, expected result, and confidence threshold.

```sql
UPDATE aws.bedrock.automated_reasoning_policy_test_cases
SET 
guardContent = '{{ guardContent }}',
queryContent = '{{ queryContent }}',
lastUpdatedAt = '{{ lastUpdatedAt }}',
expectedAggregatedFindingsResult = '{{ expectedAggregatedFindingsResult }}',
confidenceThreshold = {{ confidenceThreshold }},
clientRequestToken = '{{ clientRequestToken }}'
WHERE 
policy_arn = '{{ policy_arn }}' --required
AND test_case_id = '{{ test_case_id }}' --required
AND region = '{{ region }}' --required
AND guardContent = '{{ guardContent }}' --required
AND lastUpdatedAt = '{{ lastUpdatedAt }}' --required
AND expectedAggregatedFindingsResult = '{{ expectedAggregatedFindingsResult }}' --required
RETURNING
policyArn,
testCaseId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_automated_reasoning_policy_test_case"
    values={[
        { label: 'delete_automated_reasoning_policy_test_case', value: 'delete_automated_reasoning_policy_test_case' }
    ]}
>
<TabItem value="delete_automated_reasoning_policy_test_case">

Deletes an Automated Reasoning policy test. This operation is idempotent; if you delete a test more than once, each call succeeds.

```sql
DELETE FROM aws.bedrock.automated_reasoning_policy_test_cases
WHERE policy_arn = '{{ policy_arn }}' --required
AND test_case_id = '{{ test_case_id }}' --required
AND updatedAt = '{{ updatedAt }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
