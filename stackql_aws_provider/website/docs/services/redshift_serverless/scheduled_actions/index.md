--- 
title: scheduled_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_actions
  - redshift_serverless
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

Creates, updates, deletes, gets or lists a <code>scheduled_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scheduled_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_serverless.scheduled_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_scheduled_action"
    values={[
        { label: 'get_scheduled_action', value: 'get_scheduled_action' },
        { label: 'list_scheduled_actions', value: 'list_scheduled_actions' }
    ]}
>
<TabItem value="get_scheduled_action">

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
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of</td>
</tr>
<tr>
    <td><CopyableCode code="namespaceName" /></td>
    <td><code>string</code></td>
    <td>The end time in UTC when the schedule is no longer active. After this time, the scheduled action does not trigger. (pattern: &lt;code&gt;^&#91;a-z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="nextInvocations" /></td>
    <td><code>array</code></td>
    <td>An array of timestamps of when the next scheduled actions will trigger.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role to assume to run the scheduled action. This IAM role must have permission to run the Amazon Redshift Serverless API operation in the scheduled action. This IAM role must allow the Amazon Redshift scheduler to schedule creating snapshots. (Principal scheduler.redshift.amazonaws.com) to assume permissions on your behalf. For more information about the IAM role to use with the Amazon Redshift scheduler, see Using Identity-Based Policies for Amazon Redshift in the Amazon Redshift Management Guide</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>The schedule for a one-time (at timestamp format) or recurring (cron format) scheduled action. Schedule invocations must be separated by at least one hour. Times are in UTC. Format of at timestamp is yyyy-mm-ddThh:mm:ss. For example, 2016-03-04T17:27:00. Format of cron expression is (Minutes Hours Day-of-month Month Day-of-week Year). For example, "(0 10 ? * MON *)". For more information, see Cron Expressions in the Amazon CloudWatch Events User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledActionDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the scheduled action.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledActionName" /></td>
    <td><code>string</code></td>
    <td>The name of the scheduled action. (pattern: &lt;code&gt;^&#91;a-z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledActionUuid" /></td>
    <td><code>string</code></td>
    <td>The uuid of the scheduled action.</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time in UTC when the schedule is active. Before this time, the scheduled action does not trigger.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the scheduled action. (ACTIVE, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="targetAction" /></td>
    <td><code>object</code></td>
    <td>A JSON format string of the Amazon Redshift Serverless API operation with input parameters. The following is an example of a target action. "&#123;"CreateSnapshot": &#123;"NamespaceName": "sampleNamespace","SnapshotName": "sampleSnapshot", "retentionPeriod": "1"&#125;&#125;"</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_scheduled_actions">

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
    <td><CopyableCode code="namespaceName" /></td>
    <td><code>string</code></td>
    <td>Name of associated Amazon Redshift Serverless namespace. (pattern: &lt;code&gt;^&#91;a-z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledActionName" /></td>
    <td><code>string</code></td>
    <td>Name of associated scheduled action. (pattern: &lt;code&gt;^&#91;a-z0-9-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#get_scheduled_action"><CopyableCode code="get_scheduled_action" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a scheduled action.</td>
</tr>
<tr>
    <td><a href="#list_scheduled_actions"><CopyableCode code="list_scheduled_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of scheduled actions. You can use the flags to filter the list of returned scheduled actions.</td>
</tr>
<tr>
    <td><a href="#create_scheduled_action"><CopyableCode code="create_scheduled_action" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-schedule"><code>schedule</code></a>, <a href="#parameter-scheduledActionName"><code>scheduledActionName</code></a>, <a href="#parameter-targetAction"><code>targetAction</code></a></td>
    <td></td>
    <td>Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action. For example, you can create a schedule of when to run the CreateSnapshot API operation.</td>
</tr>
<tr>
    <td><a href="#update_scheduled_action"><CopyableCode code="update_scheduled_action" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-scheduledActionName"><code>scheduledActionName</code></a></td>
    <td></td>
    <td>Updates a scheduled action.</td>
</tr>
<tr>
    <td><a href="#delete_scheduled_action"><CopyableCode code="delete_scheduled_action" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a scheduled action.</td>
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
    defaultValue="get_scheduled_action"
    values={[
        { label: 'get_scheduled_action', value: 'get_scheduled_action' },
        { label: 'list_scheduled_actions', value: 'list_scheduled_actions' }
    ]}
>
<TabItem value="get_scheduled_action">

Returns information about a scheduled action.

```sql
SELECT
endTime,
namespaceName,
nextInvocations,
roleArn,
schedule,
scheduledActionDescription,
scheduledActionName,
scheduledActionUuid,
startTime,
state,
targetAction
FROM aws.redshift_serverless.scheduled_actions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_scheduled_actions">

Returns a list of scheduled actions. You can use the flags to filter the list of returned scheduled actions.

```sql
SELECT
namespaceName,
scheduledActionName
FROM aws.redshift_serverless.scheduled_actions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_scheduled_action"
    values={[
        { label: 'create_scheduled_action', value: 'create_scheduled_action' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_scheduled_action">

Creates a scheduled action. A scheduled action contains a schedule and an Amazon Redshift API action. For example, you can create a schedule of when to run the CreateSnapshot API operation.

```sql
INSERT INTO aws.redshift_serverless.scheduled_actions (
enabled,
endTime,
namespaceName,
roleArn,
schedule,
scheduledActionDescription,
scheduledActionName,
startTime,
targetAction,
region
)
SELECT 
{{ enabled }},
'{{ endTime }}',
'{{ namespaceName }}' /* required */,
'{{ roleArn }}' /* required */,
'{{ schedule }}' /* required */,
'{{ scheduledActionDescription }}',
'{{ scheduledActionName }}' /* required */,
'{{ startTime }}',
'{{ targetAction }}' /* required */,
'{{ region }}'
RETURNING
scheduledAction
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scheduled_actions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the scheduled_actions resource.
    - name: enabled
      value: {{ enabled }}
      description: |
        Indicates whether the schedule is enabled. If false, the scheduled action does not trigger. For more information about state of the scheduled action, see ScheduledAction.
    - name: endTime
      value: "{{ endTime }}"
      description: |
        The end time in UTC when the schedule is no longer active. After this time, the scheduled action does not trigger.
    - name: namespaceName
      value: "{{ namespaceName }}"
      description: |
        The name of the namespace for which to create a scheduled action.
    - name: roleArn
      value: "{{ roleArn }}"
      description: |
        The ARN of the IAM role to assume to run the scheduled action. This IAM role must have permission to run the Amazon Redshift Serverless API operation in the scheduled action. This IAM role must allow the Amazon Redshift scheduler to schedule creating snapshots. (Principal scheduler.redshift.amazonaws.com) to assume permissions on your behalf. For more information about the IAM role to use with the Amazon Redshift scheduler, see Using Identity-Based Policies for Amazon Redshift in the Amazon Redshift Management Guide
    - name: schedule
      description: |
        The schedule for a one-time (at timestamp format) or recurring (cron format) scheduled action. Schedule invocations must be separated by at least one hour. Times are in UTC. Format of at timestamp is yyyy-mm-ddThh:mm:ss. For example, 2016-03-04T17:27:00. Format of cron expression is (Minutes Hours Day-of-month Month Day-of-week Year). For example, "(0 10 ? * MON *)". For more information, see Cron Expressions in the Amazon CloudWatch Events User Guide.
      value:
        at: "{{ at }}"
        cron: "{{ cron }}"
    - name: scheduledActionDescription
      value: "{{ scheduledActionDescription }}"
      description: |
        The description of the scheduled action.
    - name: scheduledActionName
      value: "{{ scheduledActionName }}"
      description: |
        The name of the scheduled action.
    - name: startTime
      value: "{{ startTime }}"
      description: |
        The start time in UTC when the schedule is active. Before this time, the scheduled action does not trigger.
    - name: targetAction
      description: |
        A JSON format string of the Amazon Redshift Serverless API operation with input parameters. The following is an example of a target action. "{"CreateSnapshot": {"NamespaceName": "sampleNamespace","SnapshotName": "sampleSnapshot", "retentionPeriod": "1"}}"
      value:
        createSnapshot:
          namespaceName: "{{ namespaceName }}"
          retentionPeriod: {{ retentionPeriod }}
          snapshotNamePrefix: "{{ snapshotNamePrefix }}"
          tags:
            - key: "{{ key }}"
              value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_scheduled_action"
    values={[
        { label: 'update_scheduled_action', value: 'update_scheduled_action' }
    ]}
>
<TabItem value="update_scheduled_action">

Updates a scheduled action.

```sql
UPDATE aws.redshift_serverless.scheduled_actions
SET 
enabled = {{ enabled }},
endTime = '{{ endTime }}',
roleArn = '{{ roleArn }}',
schedule = '{{ schedule }}',
scheduledActionDescription = '{{ scheduledActionDescription }}',
scheduledActionName = '{{ scheduledActionName }}',
startTime = '{{ startTime }}',
targetAction = '{{ targetAction }}'
WHERE 
region = '{{ region }}' --required
AND scheduledActionName = '{{ scheduledActionName }}' --required
RETURNING
scheduledAction;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scheduled_action"
    values={[
        { label: 'delete_scheduled_action', value: 'delete_scheduled_action' }
    ]}
>
<TabItem value="delete_scheduled_action">

Deletes a scheduled action.

```sql
DELETE FROM aws.redshift_serverless.scheduled_actions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
