--- 
title: refresh_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - refresh_schedules
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

Creates, updates, deletes, gets or lists a <code>refresh_schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="refresh_schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.refresh_schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_refresh_schedule"
    values={[
        { label: 'describe_refresh_schedule', value: 'describe_refresh_schedule' },
        { label: 'list_refresh_schedules', value: 'list_refresh_schedules' }
    ]}
>
<TabItem value="describe_refresh_schedule">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the refresh schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="RefreshSchedule" /></td>
    <td><code>object</code></td>
    <td>The refresh schedule of a dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_refresh_schedules">

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
    <td><CopyableCode code="RefreshSchedules" /></td>
    <td><code>array</code></td>
    <td>The list of refresh schedules for the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
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
    <td><a href="#describe_refresh_schedule"><CopyableCode code="describe_refresh_schedule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-schedule_id"><code>schedule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a summary of a refresh schedule.</td>
</tr>
<tr>
    <td><a href="#list_refresh_schedules"><CopyableCode code="list_refresh_schedules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the refresh schedules of a dataset. Each dataset can have up to 5 schedules.</td>
</tr>
<tr>
    <td><a href="#create_refresh_schedule"><CopyableCode code="create_refresh_schedule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Schedule"><code>Schedule</code></a></td>
    <td></td>
    <td>Creates a refresh schedule for a dataset. You can create up to 5 different schedules for a single dataset.</td>
</tr>
<tr>
    <td><a href="#update_refresh_schedule"><CopyableCode code="update_refresh_schedule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Schedule"><code>Schedule</code></a></td>
    <td></td>
    <td>Updates a refresh schedule for a dataset.</td>
</tr>
<tr>
    <td><a href="#delete_refresh_schedule"><CopyableCode code="delete_refresh_schedule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-schedule_id"><code>schedule_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a refresh schedule from a dataset.</td>
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
<tr id="parameter-data_set_id">
    <td><CopyableCode code="data_set_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dataset.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-schedule_id">
    <td><CopyableCode code="schedule_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the refresh schedule.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_refresh_schedule"
    values={[
        { label: 'describe_refresh_schedule', value: 'describe_refresh_schedule' },
        { label: 'list_refresh_schedules', value: 'list_refresh_schedules' }
    ]}
>
<TabItem value="describe_refresh_schedule">

Provides a summary of a refresh schedule.

```sql
SELECT
Arn,
RefreshSchedule,
RequestId,
Status
FROM aws.quicksight.refresh_schedules
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND data_set_id = '{{ data_set_id }}' -- required
AND schedule_id = '{{ schedule_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_refresh_schedules">

Lists the refresh schedules of a dataset. Each dataset can have up to 5 schedules.

```sql
SELECT
RefreshSchedules,
RequestId,
Status
FROM aws.quicksight.refresh_schedules
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND data_set_id = '{{ data_set_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_refresh_schedule"
    values={[
        { label: 'create_refresh_schedule', value: 'create_refresh_schedule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_refresh_schedule">

Creates a refresh schedule for a dataset. You can create up to 5 different schedules for a single dataset.

```sql
INSERT INTO aws.quicksight.refresh_schedules (
Schedule,
data_set_id,
aws_account_id,
region
)
SELECT 
'{{ Schedule }}' /* required */,
'{{ data_set_id }}',
'{{ aws_account_id }}',
'{{ region }}'
RETURNING
Arn,
RequestId,
ScheduleId,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: refresh_schedules
  props:
    - name: data_set_id
      value: "{{ data_set_id }}"
      description: Required parameter for the refresh_schedules resource.
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the refresh_schedules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the refresh_schedules resource.
    - name: Schedule
      description: |
        The refresh schedule of a dataset.
      value:
        ScheduleId: "{{ ScheduleId }}"
        ScheduleFrequency:
          Interval: "{{ Interval }}"
          RefreshOnDay:
            DayOfWeek: "{{ DayOfWeek }}"
            DayOfMonth: "{{ DayOfMonth }}"
          Timezone: "{{ Timezone }}"
          TimeOfTheDay: "{{ TimeOfTheDay }}"
        StartAfterDateTime: "{{ StartAfterDateTime }}"
        RefreshType: "{{ RefreshType }}"
        Arn: "{{ Arn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_refresh_schedule"
    values={[
        { label: 'update_refresh_schedule', value: 'update_refresh_schedule' }
    ]}
>
<TabItem value="update_refresh_schedule">

Updates a refresh schedule for a dataset.

```sql
UPDATE aws.quicksight.refresh_schedules
SET 
Schedule = '{{ Schedule }}'
WHERE 
data_set_id = '{{ data_set_id }}' --required
AND aws_account_id = '{{ aws_account_id }}' --required
AND region = '{{ region }}' --required
AND Schedule = '{{ Schedule }}' --required
RETURNING
Arn,
RequestId,
ScheduleId,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_refresh_schedule"
    values={[
        { label: 'delete_refresh_schedule', value: 'delete_refresh_schedule' }
    ]}
>
<TabItem value="delete_refresh_schedule">

Deletes a refresh schedule from a dataset.

```sql
DELETE FROM aws.quicksight.refresh_schedules
WHERE data_set_id = '{{ data_set_id }}' --required
AND aws_account_id = '{{ aws_account_id }}' --required
AND schedule_id = '{{ schedule_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
