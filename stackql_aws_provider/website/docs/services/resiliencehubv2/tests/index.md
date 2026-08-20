--- 
title: tests
hide_title: false
hide_table_of_contents: false
keywords:
  - tests
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

Creates, updates, deletes, gets or lists a <code>tests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.tests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_test"
    values={[
        { label: 'get_test', value: 'get_test' },
        { label: 'list_tests', value: 'list_tests' }
    ]}
>
<TabItem value="get_test">

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
    <td>The name of the test.</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>The fault actions the test runs.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the test was created.</td>
</tr>
<tr>
    <td><CopyableCode code="logging_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for test execution logging destinations.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>The parameter values configured for the test.</td>
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
    <td><CopyableCode code="stop_conditions" /></td>
    <td><code>array</code></td>
    <td>The stop conditions for the test.</td>
</tr>
<tr>
    <td><CopyableCode code="successful_test_runs" /></td>
    <td><code>integer</code></td>
    <td>The number of successful runs of the test.</td>
</tr>
<tr>
    <td><CopyableCode code="test_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the test.</td>
</tr>
<tr>
    <td><CopyableCode code="test_template_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN owned by the service. Accepts either a standard 12-digit account ID or the literal "aws" for AWS-managed resources, such as AWS-managed test templates. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):(&#91;0-9&#93;&#123;12&#125;|aws):&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="total_test_runs" /></td>
    <td><code>integer</code></td>
    <td>The total number of runs of the test.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tests">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the test was created.</td>
</tr>
<tr>
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="successful_test_runs" /></td>
    <td><code>integer</code></td>
    <td>The number of successful runs of the test.</td>
</tr>
<tr>
    <td><CopyableCode code="test_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a test.</td>
</tr>
<tr>
    <td><CopyableCode code="test_template_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN owned by the service. Accepts either a standard 12-digit account ID or the literal "aws" for AWS-managed resources, such as AWS-managed test templates. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):(&#91;0-9&#93;&#123;12&#125;|aws):&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="total_test_runs" /></td>
    <td><code>integer</code></td>
    <td>The total number of runs of the test.</td>
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
    <td><a href="#get_test"><CopyableCode code="get_test" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-testId"><code>testId</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a test by ID.</td>
</tr>
<tr>
    <td><a href="#list_tests"><CopyableCode code="list_tests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the tests configured for a service.</td>
</tr>
<tr>
    <td><a href="#create_test"><CopyableCode code="create_test" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-testTemplateArn"><code>testTemplateArn</code></a></td>
    <td></td>
    <td>Creates a test for a service by configuring a test template. Each service has one test per template.</td>
</tr>
<tr>
    <td><a href="#update_test"><CopyableCode code="update_test" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-testId"><code>testId</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing test.</td>
</tr>
<tr>
    <td><a href="#delete_test"><CopyableCode code="delete_test" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a test.</td>
</tr>
<tr>
    <td><a href="#start_test_run"><CopyableCode code="start_test_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-testId"><code>testId</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a></td>
    <td></td>
    <td>Starts a run of a test. Each run scopes to the current resources in the service and produces a pass or fail outcome.</td>
</tr>
<tr>
    <td><a href="#stop_test_run"><CopyableCode code="stop_test_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-testRunId"><code>testRunId</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a></td>
    <td></td>
    <td>Stops an in-progress test run.</td>
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
    <td>The ARN of the service to list tests for.</td>
</tr>
<tr id="parameter-testId">
    <td><CopyableCode code="testId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the test to retrieve.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_test"
    values={[
        { label: 'get_test', value: 'get_test' },
        { label: 'list_tests', value: 'list_tests' }
    ]}
>
<TabItem value="get_test">

Retrieves a test by ID.

```sql
SELECT
name,
actions,
creation_time,
logging_configuration,
parameters,
role_name,
service_arn,
stop_conditions,
successful_test_runs,
test_id,
test_template_arn,
total_test_runs
FROM aws.resiliencehubv2.tests
WHERE testId = '{{ testId }}' -- required
AND serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tests">

Lists the tests configured for a service.

```sql
SELECT
creation_time,
service_arn,
successful_test_runs,
test_id,
test_template_arn,
total_test_runs
FROM aws.resiliencehubv2.tests
WHERE serviceArn = '{{ serviceArn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_test"
    values={[
        { label: 'create_test', value: 'create_test' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_test">

Creates a test for a service by configuring a test template. Each service has one test per template.

```sql
INSERT INTO aws.resiliencehubv2.tests (
serviceArn,
testTemplateArn,
loggingConfiguration,
stopConditions,
roleName,
parameters,
region
)
SELECT 
'{{ serviceArn }}' /* required */,
'{{ testTemplateArn }}' /* required */,
'{{ loggingConfiguration }}',
'{{ stopConditions }}',
'{{ roleName }}',
'{{ parameters }}',
'{{ region }}'
RETURNING
test
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tests
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tests resource.
    - name: serviceArn
      value: "{{ serviceArn }}"
      description: |
        ARN identifier.
    - name: testTemplateArn
      value: "{{ testTemplateArn }}"
      description: |
        An ARN owned by the service. Accepts either a standard 12-digit account ID or the literal "aws" for AWS-managed resources, such as AWS-managed test templates.
    - name: loggingConfiguration
      description: |
        Configuration for test execution logging destinations.
      value:
        s3BucketName: "{{ s3BucketName }}"
        cloudWatchLogGroupArn: "{{ cloudWatchLogGroupArn }}"
        logSchemaVersion: "{{ logSchemaVersion }}"
    - name: stopConditions
      value:
        - source: "{{ source }}"
          value: "{{ value }}"
    - name: roleName
      value: "{{ roleName }}"
      description: |
        Resource name (used in ARN — no spaces allowed).
    - name: parameters
      value: "{{ parameters }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_test"
    values={[
        { label: 'update_test', value: 'update_test' }
    ]}
>
<TabItem value="update_test">

Updates the configuration of an existing test.

```sql
UPDATE aws.resiliencehubv2.tests
SET 
testId = '{{ testId }}',
serviceArn = '{{ serviceArn }}',
loggingConfiguration = '{{ loggingConfiguration }}',
stopConditions = '{{ stopConditions }}',
roleName = '{{ roleName }}',
parameters = '{{ parameters }}'
WHERE 
region = '{{ region }}' --required
AND testId = '{{ testId }}' --required
AND serviceArn = '{{ serviceArn }}' --required
RETURNING
test;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_test"
    values={[
        { label: 'delete_test', value: 'delete_test' }
    ]}
>
<TabItem value="delete_test">

Deletes a test.

```sql
DELETE FROM aws.resiliencehubv2.tests
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_test_run"
    values={[
        { label: 'start_test_run', value: 'start_test_run' },
        { label: 'stop_test_run', value: 'stop_test_run' }
    ]}
>
<TabItem value="start_test_run">

Starts a run of a test. Each run scopes to the current resources in the service and produces a pass or fail outcome.

```sql
EXEC aws.resiliencehubv2.tests.start_test_run 
@region='{{ region }}' --required 
@@json=
'{
"testId": "{{ testId }}", 
"serviceArn": "{{ serviceArn }}"
}'
;
```
</TabItem>
<TabItem value="stop_test_run">

Stops an in-progress test run.

```sql
EXEC aws.resiliencehubv2.tests.stop_test_run 
@region='{{ region }}' --required 
@@json=
'{
"testRunId": "{{ testRunId }}", 
"serviceArn": "{{ serviceArn }}"
}'
;
```
</TabItem>
</Tabs>
