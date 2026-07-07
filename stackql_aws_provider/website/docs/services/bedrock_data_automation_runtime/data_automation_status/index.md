--- 
title: data_automation_status
hide_title: false
hide_table_of_contents: false
keywords:
  - data_automation_status
  - bedrock_data_automation_runtime
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

Creates, updates, deletes, gets or lists a <code>data_automation_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_automation_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_data_automation_runtime.data_automation_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_automation_status"
    values={[
        { label: 'get_data_automation_status', value: 'get_data_automation_status' }
    ]}
>
<TabItem value="get_data_automation_status">

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
    <td><CopyableCode code="errorMessage" /></td>
    <td><code>string</code></td>
    <td>Error Message.</td>
</tr>
<tr>
    <td><CopyableCode code="errorType" /></td>
    <td><code>string</code></td>
    <td>Error Type.</td>
</tr>
<tr>
    <td><CopyableCode code="jobCompletionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Job completion time.</td>
</tr>
<tr>
    <td><CopyableCode code="jobDurationInSeconds" /></td>
    <td><code>integer</code></td>
    <td>Job duration in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="jobSubmissionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Job Submission time.</td>
</tr>
<tr>
    <td><CopyableCode code="outputConfiguration" /></td>
    <td><code>object</code></td>
    <td>Output configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Job Status. (Created, InProgress, Success, ServiceError, ClientError)</td>
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
    <td><a href="#get_data_automation_status"><CopyableCode code="get_data_automation_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>API used to get data automation status.</td>
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
    defaultValue="get_data_automation_status"
    values={[
        { label: 'get_data_automation_status', value: 'get_data_automation_status' }
    ]}
>
<TabItem value="get_data_automation_status">

API used to get data automation status.

```sql
SELECT
errorMessage,
errorType,
jobCompletionTime,
jobDurationInSeconds,
jobSubmissionTime,
outputConfiguration,
status
FROM aws.bedrock_data_automation_runtime.data_automation_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
