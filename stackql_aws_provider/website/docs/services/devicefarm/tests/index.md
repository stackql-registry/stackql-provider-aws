--- 
title: tests
hide_title: false
hide_table_of_contents: false
keywords:
  - tests
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

Creates, updates, deletes, gets or lists a <code>tests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.tests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_test"
    values={[
        { label: 'get_test', value: 'get_test' }
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
    <td>The test's name.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The test's ARN. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="counters" /></td>
    <td><code>object</code></td>
    <td>The test's result counters.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the test was created.</td>
</tr>
<tr>
    <td><CopyableCode code="device_minutes" /></td>
    <td><code>object</code></td>
    <td>Represents the total (metered or unmetered) minutes used by the test.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A message about the test's result.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>string</code></td>
    <td>The test's result. Allowed values include: PENDING PASSED WARNED FAILED SKIPPED ERRORED STOPPED (PENDING, PASSED, WARNED, FAILED, SKIPPED, ERRORED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="started" /></td>
    <td><code>string (date-time)</code></td>
    <td>The test's start time.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The test's status. Allowed values include: PENDING PENDING_CONCURRENCY PENDING_DEVICE PROCESSING SCHEDULING PREPARING RUNNING COMPLETED STOPPING (PENDING, PENDING_CONCURRENCY, PENDING_DEVICE, PROCESSING, SCHEDULING, PREPARING, RUNNING, COMPLETED, STOPPING)</td>
</tr>
<tr>
    <td><CopyableCode code="stopped" /></td>
    <td><code>string (date-time)</code></td>
    <td>The test's stop time.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The test's type. Must be one of the following values: BUILTIN_FUZZ APPIUM_JAVA_JUNIT APPIUM_JAVA_TESTNG APPIUM_PYTHON APPIUM_NODE APPIUM_RUBY APPIUM_WEB_JAVA_JUNIT APPIUM_WEB_JAVA_TESTNG APPIUM_WEB_PYTHON APPIUM_WEB_NODE APPIUM_WEB_RUBY INSTRUMENTATION XCTEST XCTEST_UI (BUILTIN_FUZZ, APPIUM_JAVA_JUNIT, APPIUM_JAVA_TESTNG, APPIUM_PYTHON, APPIUM_NODE, APPIUM_RUBY, APPIUM_WEB_JAVA_JUNIT, APPIUM_WEB_JAVA_TESTNG, APPIUM_WEB_PYTHON, APPIUM_WEB_NODE, APPIUM_WEB_RUBY, INSTRUMENTATION, XCTEST, XCTEST_UI)</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a test.</td>
</tr>
<tr>
    <td><a href="#create_test_grid_url"><CopyableCode code="create_test_grid_url" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-projectArn"><code>projectArn</code></a>, <a href="#parameter-expiresInSeconds"><code>expiresInSeconds</code></a></td>
    <td></td>
    <td>Creates a signed, short-term URL that can be passed to a Selenium RemoteWebDriver constructor.</td>
</tr>
<tr>
    <td><a href="#list_tests"><CopyableCode code="list_tests" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Gets information about tests in a given test suite.</td>
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
    defaultValue="get_test"
    values={[
        { label: 'get_test', value: 'get_test' }
    ]}
>
<TabItem value="get_test">

Gets information about a test.

```sql
SELECT
name,
arn,
counters,
created,
device_minutes,
message,
result,
started,
status,
stopped,
type_
FROM aws.devicefarm.tests
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_test_grid_url"
    values={[
        { label: 'create_test_grid_url', value: 'create_test_grid_url' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_test_grid_url">

Creates a signed, short-term URL that can be passed to a Selenium RemoteWebDriver constructor.

```sql
INSERT INTO aws.devicefarm.tests (
projectArn,
expiresInSeconds,
region
)
SELECT 
'{{ projectArn }}' /* required */,
{{ expiresInSeconds }} /* required */,
'{{ region }}'
RETURNING
expires,
url
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
    - name: projectArn
      value: "{{ projectArn }}"
      description: |
        ARN (from CreateTestGridProject or ListTestGridProjects) to associate with the short-term URL.
    - name: expiresInSeconds
      value: {{ expiresInSeconds }}
      description: |
        Lifetime, in seconds, of the URL.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_tests"
    values={[
        { label: 'list_tests', value: 'list_tests' }
    ]}
>
<TabItem value="list_tests">

Gets information about tests in a given test suite.

```sql
EXEC aws.devicefarm.tests.list_tests 
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
