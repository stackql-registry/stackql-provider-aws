--- 
title: ab_tests
hide_title: false
hide_table_of_contents: false
keywords:
  - ab_tests
  - bedrock_agentcore
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

Creates, updates, deletes, gets or lists an <code>ab_tests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ab_tests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.ab_tests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ab_test"
    values={[
        { label: 'get_ab_test', value: 'get_ab_test' },
        { label: 'list_ab_tests', value: 'list_ab_tests' }
    ]}
>
<TabItem value="get_ab_test">

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
    <td>The name of the A/B test. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ab_test_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the A/B test. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z-&#93;*:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:ab-test/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ab_test_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the A/B test. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the A/B test was created.</td>
</tr>
<tr>
    <td><CopyableCode code="current_run_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the current run of the A/B test.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the A/B test.</td>
</tr>
<tr>
    <td><CopyableCode code="error_details" /></td>
    <td><code>array</code></td>
    <td>The error details if the A/B test encountered failures.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_config" /></td>
    <td><code>object</code></td>
    <td>The evaluation configuration for an A/B test, specifying which online evaluation configurations to use for measuring variant performance.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_status" /></td>
    <td><code>string</code></td>
    <td>The execution status indicating whether the A/B test is currently running. (PAUSED, RUNNING, STOPPED, NOT_STARTED)</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway used for traffic splitting. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):bedrock-agentcore:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:gateway/(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,48&#125;-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_filter" /></td>
    <td><code>object</code></td>
    <td>A filter to restrict which gateway target paths are included in the A/B test.</td>
</tr>
<tr>
    <td><CopyableCode code="max_duration_expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the A/B test will automatically expire.</td>
</tr>
<tr>
    <td><CopyableCode code="results" /></td>
    <td><code>object</code></td>
    <td>The statistical results of the A/B test, including per-evaluator metrics and significance analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The IAM role ARN used by the A/B test. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the A/B test was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the A/B test. (CREATING, ACTIVE, CREATE_FAILED, UPDATING, UPDATE_FAILED, DELETING, DELETE_FAILED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="stopped_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the A/B test was stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the A/B test was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="variants" /></td>
    <td><code>array</code></td>
    <td>The list of variants in the A/B test.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ab_tests">

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
    <td>The name of the A/B test. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ab_test_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the A/B test. (pattern: &lt;code&gt;arn:aws&#91;a-zA-Z-&#93;*:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:ab-test/&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ab_test_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the A/B test. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-_&#93;&#123;0,99&#125;-&#91;a-zA-Z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the A/B test was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the A/B test.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_status" /></td>
    <td><code>string</code></td>
    <td>The execution status of the A/B test. (PAUSED, RUNNING, STOPPED, NOT_STARTED)</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway used for traffic splitting. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):bedrock-agentcore:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:gateway/(&#91;0-9a-z&#93;&#91;-&#93;?)&#123;1,48&#125;-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the A/B test. (CREATING, ACTIVE, CREATE_FAILED, UPDATING, UPDATE_FAILED, DELETING, DELETE_FAILED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the A/B test was last updated.</td>
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
    <td><a href="#get_ab_test"><CopyableCode code="get_ab_test" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ab_test_id"><code>ab_test_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about an A/B test, including its configuration, status, and statistical results.</td>
</tr>
<tr>
    <td><a href="#list_ab_tests"><CopyableCode code="list_ab_tests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all A/B tests in the account.</td>
</tr>
<tr>
    <td><a href="#create_ab_test"><CopyableCode code="create_ab_test" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-gatewayArn"><code>gatewayArn</code></a>, <a href="#parameter-variants"><code>variants</code></a>, <a href="#parameter-evaluationConfig"><code>evaluationConfig</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates an A/B test for comparing agent configurations. A/B tests split traffic between a control variant and a treatment variant through a gateway, then evaluate performance using online evaluation configurations to determine which variant performs better.</td>
</tr>
<tr>
    <td><a href="#update_ab_test"><CopyableCode code="update_ab_test" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ab_test_id"><code>ab_test_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an A/B test's configuration, including variants, traffic allocation, evaluation settings, or execution status.</td>
</tr>
<tr>
    <td><a href="#delete_ab_test"><CopyableCode code="delete_ab_test" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ab_test_id"><code>ab_test_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an A/B test and its associated gateway rules.</td>
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
<tr id="parameter-ab_test_id">
    <td><CopyableCode code="ab_test_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the A/B test to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_ab_test"
    values={[
        { label: 'get_ab_test', value: 'get_ab_test' },
        { label: 'list_ab_tests', value: 'list_ab_tests' }
    ]}
>
<TabItem value="get_ab_test">

Retrieves detailed information about an A/B test, including its configuration, status, and statistical results.

```sql
SELECT
name,
ab_test_arn,
ab_test_id,
created_at,
current_run_id,
description,
error_details,
evaluation_config,
execution_status,
gateway_arn,
gateway_filter,
max_duration_expires_at,
results,
role_arn,
started_at,
status,
stopped_at,
updated_at,
variants
FROM aws.bedrock_agentcore.ab_tests
WHERE ab_test_id = '{{ ab_test_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ab_tests">

Lists all A/B tests in the account.

```sql
SELECT
name,
ab_test_arn,
ab_test_id,
created_at,
description,
execution_status,
gateway_arn,
status,
updated_at
FROM aws.bedrock_agentcore.ab_tests
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ab_test"
    values={[
        { label: 'create_ab_test', value: 'create_ab_test' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ab_test">

Creates an A/B test for comparing agent configurations. A/B tests split traffic between a control variant and a treatment variant through a gateway, then evaluate performance using online evaluation configurations to determine which variant performs better.

```sql
INSERT INTO aws.bedrock_agentcore.ab_tests (
name,
description,
gatewayArn,
variants,
gatewayFilter,
evaluationConfig,
roleArn,
enableOnCreate,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ gatewayArn }}' /* required */,
'{{ variants }}' /* required */,
'{{ gatewayFilter }}',
'{{ evaluationConfig }}' /* required */,
'{{ roleArn }}' /* required */,
{{ enableOnCreate }},
'{{ clientToken }}',
'{{ region }}'
RETURNING
name,
ab_test_arn,
ab_test_id,
created_at,
execution_status,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ab_tests
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ab_tests resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: gatewayArn
      value: "{{ gatewayArn }}"
    - name: variants
      value:
        - name: "{{ name }}"
          weight: {{ weight }}
          variantConfiguration:
            configurationBundle:
              bundleArn: "{{ bundleArn }}"
              bundleVersion: "{{ bundleVersion }}"
            target:
              name: "{{ name }}"
    - name: gatewayFilter
      description: |
        A filter to restrict which gateway target paths are included in the A/B test.
      value:
        targetPaths:
          - "{{ targetPaths }}"
    - name: evaluationConfig
      description: |
        The evaluation configuration for an A/B test, specifying which online evaluation configurations to use for measuring variant performance.
      value:
        onlineEvaluationConfigArn: "{{ onlineEvaluationConfigArn }}"
        perVariantOnlineEvaluationConfig:
          - name: "{{ name }}"
            onlineEvaluationConfigArn: "{{ onlineEvaluationConfigArn }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: enableOnCreate
      value: {{ enableOnCreate }}
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_ab_test"
    values={[
        { label: 'update_ab_test', value: 'update_ab_test' }
    ]}
>
<TabItem value="update_ab_test">

Updates an A/B test's configuration, including variants, traffic allocation, evaluation settings, or execution status.

```sql
UPDATE aws.bedrock_agentcore.ab_tests
SET 
clientToken = '{{ clientToken }}',
name = '{{ name }}',
description = '{{ description }}',
variants = '{{ variants }}',
gatewayFilter = '{{ gatewayFilter }}',
evaluationConfig = '{{ evaluationConfig }}',
roleArn = '{{ roleArn }}',
executionStatus = '{{ executionStatus }}'
WHERE 
ab_test_id = '{{ ab_test_id }}' --required
AND region = '{{ region }}' --required
RETURNING
ab_test_arn,
ab_test_id,
execution_status,
status,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ab_test"
    values={[
        { label: 'delete_ab_test', value: 'delete_ab_test' }
    ]}
>
<TabItem value="delete_ab_test">

Deletes an A/B test and its associated gateway rules.

```sql
DELETE FROM aws.bedrock_agentcore.ab_tests
WHERE ab_test_id = '{{ ab_test_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
