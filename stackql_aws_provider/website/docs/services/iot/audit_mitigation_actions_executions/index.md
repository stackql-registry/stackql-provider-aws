--- 
title: audit_mitigation_actions_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - audit_mitigation_actions_executions
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

Creates, updates, deletes, gets or lists an <code>audit_mitigation_actions_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="audit_mitigation_actions_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.audit_mitigation_actions_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_audit_mitigation_actions_executions"
    values={[
        { label: 'list_audit_mitigation_actions_executions', value: 'list_audit_mitigation_actions_executions' }
    ]}
>
<TabItem value="list_audit_mitigation_actions_executions">

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
    <td><CopyableCode code="action_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the mitigation action being applied by the task.</td>
</tr>
<tr>
    <td><CopyableCode code="action_name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the mitigation action being applied by the task. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the task was completed or canceled. Blank if the task is still running.</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>If an error occurred, the code that indicates which type of error occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="finding_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the findings to which the task and associated mitigation action are applied. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>If an error occurred, a message that describes the error.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the task was started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the task being executed. (IN_PROGRESS, COMPLETED, FAILED, CANCELED, SKIPPED, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the task that applies the mitigation action. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_audit_mitigation_actions_executions"><CopyableCode code="list_audit_mitigation_actions_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-taskId"><code>taskId</code></a>, <a href="#parameter-findingId"><code>findingId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-actionStatus"><code>actionStatus</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets the status of audit mitigation action tasks that were executed. Requires permission to access the ListAuditMitigationActionsExecutions action.</td>
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
<tr id="parameter-findingId">
    <td><CopyableCode code="findingId" /></td>
    <td><code>string</code></td>
    <td>Specify this filter to limit results to those that were applied to a specific audit finding.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-taskId">
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td>Specify this filter to limit results to actions for a specific audit mitigation actions task.</td>
</tr>
<tr id="parameter-actionStatus">
    <td><CopyableCode code="actionStatus" /></td>
    <td><code>string</code></td>
    <td>Specify this filter to limit results to those with a specific status.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_audit_mitigation_actions_executions"
    values={[
        { label: 'list_audit_mitigation_actions_executions', value: 'list_audit_mitigation_actions_executions' }
    ]}
>
<TabItem value="list_audit_mitigation_actions_executions">

Gets the status of audit mitigation action tasks that were executed. Requires permission to access the ListAuditMitigationActionsExecutions action.

```sql
SELECT
action_id,
action_name,
end_time,
error_code,
finding_id,
message,
start_time,
status,
task_id
FROM aws.iot.audit_mitigation_actions_executions
WHERE taskId = '{{ taskId }}' -- required
AND findingId = '{{ findingId }}' -- required
AND region = '{{ region }}' -- required
AND actionStatus = '{{ actionStatus }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
