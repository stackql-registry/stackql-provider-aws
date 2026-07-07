--- 
title: detect_mitigation_actions_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - detect_mitigation_actions_executions
  - iot
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

Creates, updates, deletes, gets or lists a <code>detect_mitigation_actions_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="detect_mitigation_actions_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.detect_mitigation_actions_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_detect_mitigation_actions_executions"
    values={[
        { label: 'list_detect_mitigation_actions_executions', value: 'list_detect_mitigation_actions_executions' }
    ]}
>
<TabItem value="list_detect_mitigation_actions_executions">

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
    <td><CopyableCode code="actionName" /></td>
    <td><code>string</code></td>
    <td>The friendly name that uniquely identifies the mitigation action. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="errorCode" /></td>
    <td><code>string</code></td>
    <td>The error code of a mitigation action.</td>
</tr>
<tr>
    <td><CopyableCode code="executionEndDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date a mitigation action ended.</td>
</tr>
<tr>
    <td><CopyableCode code="executionStartDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date a mitigation action was started.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The message of a mitigation action.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a mitigation action. (IN_PROGRESS, SUCCESSFUL, FAILED, SKIPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the task. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="thingName" /></td>
    <td><code>string</code></td>
    <td>The name of the thing.</td>
</tr>
<tr>
    <td><CopyableCode code="violationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the violation. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_detect_mitigation_actions_executions"><CopyableCode code="list_detect_mitigation_actions_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-taskId"><code>taskId</code></a>, <a href="#parameter-violationId"><code>violationId</code></a>, <a href="#parameter-thingName"><code>thingName</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists mitigation actions executions for a Device Defender ML Detect Security Profile. Requires permission to access the ListDetectMitigationActionsExecutions action.</td>
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
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the time period for which ML Detect mitigation actions executions are returned.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time. The default is 25.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results.</td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A filter to limit results to those found after the specified time. You must specify either the startTime and endTime or the taskId, but not both.</td>
</tr>
<tr id="parameter-taskId">
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the task.</td>
</tr>
<tr id="parameter-thingName">
    <td><CopyableCode code="thingName" /></td>
    <td><code>string</code></td>
    <td>The name of the thing whose mitigation actions are listed.</td>
</tr>
<tr id="parameter-violationId">
    <td><CopyableCode code="violationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the violation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_detect_mitigation_actions_executions"
    values={[
        { label: 'list_detect_mitigation_actions_executions', value: 'list_detect_mitigation_actions_executions' }
    ]}
>
<TabItem value="list_detect_mitigation_actions_executions">

Lists mitigation actions executions for a Device Defender ML Detect Security Profile. Requires permission to access the ListDetectMitigationActionsExecutions action.

```sql
SELECT
actionName,
errorCode,
executionEndDate,
executionStartDate,
message,
status,
taskId,
thingName,
violationId
FROM aws.iot.detect_mitigation_actions_executions
WHERE region = '{{ region }}' -- required
AND taskId = '{{ taskId }}'
AND violationId = '{{ violationId }}'
AND thingName = '{{ thingName }}'
AND startTime = '{{ startTime }}'
AND endTime = '{{ endTime }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
