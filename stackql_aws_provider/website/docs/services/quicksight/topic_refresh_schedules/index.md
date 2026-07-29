--- 
title: topic_refresh_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - topic_refresh_schedules
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>topic_refresh_schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="topic_refresh_schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.topic_refresh_schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_topic_refresh_schedule"
    values={[
        { label: 'describe_topic_refresh_schedule', value: 'describe_topic_refresh_schedule' },
        { label: 'list_topic_refresh_schedules', value: 'list_topic_refresh_schedules' }
    ]}
>
<TabItem value="describe_topic_refresh_schedule">

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
    <td><CopyableCode code="dataset_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="refresh_schedule" /></td>
    <td><code>object</code></td>
    <td>A structure that represents a topic refresh schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="topic_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the topic.</td>
</tr>
<tr>
    <td><CopyableCode code="topic_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the topic that contains the refresh schedule that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. (pattern: &lt;code&gt;^&#91;A-Za-z0-9-_.\\+&#93;*$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_topic_refresh_schedules">

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
    <td><CopyableCode code="refresh_schedules" /></td>
    <td><code>array</code></td>
    <td>The list of topic refresh schedules.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="topic_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the topic.</td>
</tr>
<tr>
    <td><CopyableCode code="topic_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account. (pattern: &lt;code&gt;^&#91;A-Za-z0-9-_.\\+&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#describe_topic_refresh_schedule"><CopyableCode code="describe_topic_refresh_schedule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a topic refresh schedule.</td>
</tr>
<tr>
    <td><a href="#list_topic_refresh_schedules"><CopyableCode code="list_topic_refresh_schedules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all of the refresh schedules for a topic.</td>
</tr>
<tr>
    <td><a href="#create_topic_refresh_schedule"><CopyableCode code="create_topic_refresh_schedule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatasetArn"><code>DatasetArn</code></a>, <a href="#parameter-RefreshSchedule"><code>RefreshSchedule</code></a></td>
    <td></td>
    <td>Creates a topic refresh schedule.</td>
</tr>
<tr>
    <td><a href="#update_topic_refresh_schedule"><CopyableCode code="update_topic_refresh_schedule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RefreshSchedule"><code>RefreshSchedule</code></a></td>
    <td></td>
    <td>Updates a topic refresh schedule.</td>
</tr>
<tr>
    <td><a href="#delete_topic_refresh_schedule"><CopyableCode code="delete_topic_refresh_schedule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-topic_id"><code>topic_id</code></a>, <a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a topic refresh schedule.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID.</td>
</tr>
<tr id="parameter-dataset_id">
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dataset.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-topic_id">
    <td><CopyableCode code="topic_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_topic_refresh_schedule"
    values={[
        { label: 'describe_topic_refresh_schedule', value: 'describe_topic_refresh_schedule' },
        { label: 'list_topic_refresh_schedules', value: 'list_topic_refresh_schedules' }
    ]}
>
<TabItem value="describe_topic_refresh_schedule">

Deletes a topic refresh schedule.

```sql
SELECT
dataset_arn,
refresh_schedule,
request_id,
status,
topic_arn,
topic_id
FROM aws.quicksight.topic_refresh_schedules
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND topic_id = '{{ topic_id }}' -- required
AND dataset_id = '{{ dataset_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_topic_refresh_schedules">

Lists all of the refresh schedules for a topic.

```sql
SELECT
refresh_schedules,
request_id,
status,
topic_arn,
topic_id
FROM aws.quicksight.topic_refresh_schedules
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND topic_id = '{{ topic_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_topic_refresh_schedule"
    values={[
        { label: 'create_topic_refresh_schedule', value: 'create_topic_refresh_schedule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_topic_refresh_schedule">

Creates a topic refresh schedule.

```sql
INSERT INTO aws.quicksight.topic_refresh_schedules (
DatasetArn,
DatasetName,
RefreshSchedule,
aws_account_id,
topic_id,
region
)
SELECT 
'{{ DatasetArn }}' /* required */,
'{{ DatasetName }}',
'{{ RefreshSchedule }}' /* required */,
'{{ aws_account_id }}',
'{{ topic_id }}',
'{{ region }}'
RETURNING
dataset_arn,
request_id,
status,
topic_arn,
topic_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: topic_refresh_schedules
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the topic_refresh_schedules resource.
    - name: topic_id
      value: "{{ topic_id }}"
      description: Required parameter for the topic_refresh_schedules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the topic_refresh_schedules resource.
    - name: DatasetArn
      value: "{{ DatasetArn }}"
    - name: DatasetName
      value: "{{ DatasetName }}"
    - name: RefreshSchedule
      description: |
        A structure that represents a topic refresh schedule.
      value:
        IsEnabled: {{ IsEnabled }}
        BasedOnSpiceSchedule: {{ BasedOnSpiceSchedule }}
        StartingAt: "{{ StartingAt }}"
        Timezone: "{{ Timezone }}"
        RepeatAt: "{{ RepeatAt }}"
        TopicScheduleType: "{{ TopicScheduleType }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_topic_refresh_schedule"
    values={[
        { label: 'update_topic_refresh_schedule', value: 'update_topic_refresh_schedule' }
    ]}
>
<TabItem value="update_topic_refresh_schedule">

Updates a topic refresh schedule.

```sql
UPDATE aws.quicksight.topic_refresh_schedules
SET 
RefreshSchedule = '{{ RefreshSchedule }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND topic_id = '{{ topic_id }}' --required
AND dataset_id = '{{ dataset_id }}' --required
AND region = '{{ region }}' --required
AND RefreshSchedule = '{{ RefreshSchedule }}' --required
RETURNING
dataset_arn,
request_id,
status,
topic_arn,
topic_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_topic_refresh_schedule"
    values={[
        { label: 'delete_topic_refresh_schedule', value: 'delete_topic_refresh_schedule' }
    ]}
>
<TabItem value="delete_topic_refresh_schedule">

Deletes a topic refresh schedule.

```sql
DELETE FROM aws.quicksight.topic_refresh_schedules
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND topic_id = '{{ topic_id }}' --required
AND dataset_id = '{{ dataset_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
