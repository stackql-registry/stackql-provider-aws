--- 
title: test_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - test_executions
  - lexv2_models
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

Creates, updates, deletes, gets or lists a <code>test_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.test_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_test_execution"
    values={[
        { label: 'describe_test_execution', value: 'describe_test_execution' },
        { label: 'list_test_executions', value: 'list_test_executions' }
    ]}
>
<TabItem value="describe_test_execution">

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
    <td><CopyableCode code="api_mode" /></td>
    <td><code>string</code></td>
    <td>Indicates whether we use streaming or non-streaming APIs are used for the test set execution. For streaming, StartConversation Amazon Lex Runtime API is used. Whereas for non-streaming, RecognizeUtterance and RecognizeText Amazon Lex Runtime API is used. (Streaming, NonStreaming)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The execution creation date and time for the test set execution.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reasons" /></td>
    <td><code>array</code></td>
    <td>Reasons for the failure of the test set execution.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the last update for the execution.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>The target bot for the test set execution details.</td>
</tr>
<tr>
    <td><CopyableCode code="test_execution_id" /></td>
    <td><code>string</code></td>
    <td>The execution Id for the test set execution. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="test_execution_modality" /></td>
    <td><code>string</code></td>
    <td>Indicates whether test set is audio or text. (Text, Audio)</td>
</tr>
<tr>
    <td><CopyableCode code="test_execution_status" /></td>
    <td><code>string</code></td>
    <td>The test execution status for the test execution. (Pending, Waiting, InProgress, Completed, Failed, Stopping, Stopped)</td>
</tr>
<tr>
    <td><CopyableCode code="test_set_id" /></td>
    <td><code>string</code></td>
    <td>The test set Id for the test set execution. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="test_set_name" /></td>
    <td><code>string</code></td>
    <td>The test set name of the test set execution. (pattern: &lt;code&gt;^(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_test_executions">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token that indicates whether there are more results to return in a response to the ListTestExecutions operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListTestExecutions operation request to get the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="test_executions" /></td>
    <td><code>array</code></td>
    <td>The list of test executions.</td>
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
    <td><a href="#describe_test_execution"><CopyableCode code="describe_test_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-test_execution_id"><code>test_execution_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets metadata information about the test execution.</td>
</tr>
<tr>
    <td><a href="#list_test_executions"><CopyableCode code="list_test_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The list of test set executions.</td>
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
<tr id="parameter-test_execution_id">
    <td><CopyableCode code="test_execution_id" /></td>
    <td><code>string</code></td>
    <td>The execution Id of the test set execution.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_test_execution"
    values={[
        { label: 'describe_test_execution', value: 'describe_test_execution' },
        { label: 'list_test_executions', value: 'list_test_executions' }
    ]}
>
<TabItem value="describe_test_execution">

Gets metadata information about the test execution.

```sql
SELECT
api_mode,
creation_date_time,
failure_reasons,
last_updated_date_time,
target,
test_execution_id,
test_execution_modality,
test_execution_status,
test_set_id,
test_set_name
FROM aws.lexv2_models.test_executions
WHERE test_execution_id = '{{ test_execution_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_test_executions">

The list of test set executions.

```sql
SELECT
next_token,
test_executions
FROM aws.lexv2_models.test_executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
