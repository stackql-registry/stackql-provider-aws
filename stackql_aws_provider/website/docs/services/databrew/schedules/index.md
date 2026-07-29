--- 
title: schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - schedules
  - databrew
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

Creates, updates, deletes, gets or lists a <code>schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.databrew.schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_schedule"
    values={[
        { label: 'describe_schedule', value: 'describe_schedule' },
        { label: 'list_schedules', value: 'list_schedules' }
    ]}
>
<TabItem value="describe_schedule">

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
    <td><CopyableCode code="create_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the schedule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier (user name) of the user who created the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="cron_expression" /></td>
    <td><code>string</code></td>
    <td>The date or dates and time or times when the jobs are to be run for the schedule. For more information, see Cron expressions in the Glue DataBrew Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="job_names" /></td>
    <td><code>array</code></td>
    <td>The name or names of one or more jobs to be run by using the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The identifier (user name) of the user who last modified the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the schedule was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Metadata tags associated with this schedule.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_schedules">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the schedule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who created the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="cron_expression" /></td>
    <td><code>string</code></td>
    <td>The dates and times when the job is to run. For more information, see Cron expressions in the Glue DataBrew Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="job_names" /></td>
    <td><code>array</code></td>
    <td>A list of jobs to be run, according to the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last modified the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the schedule was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Metadata tags that have been applied to the schedule.</td>
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
    <td><a href="#describe_schedule"><CopyableCode code="describe_schedule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the definition of a specific DataBrew schedule.</td>
</tr>
<tr>
    <td><a href="#list_schedules"><CopyableCode code="list_schedules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-jobName"><code>jobName</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the DataBrew schedules that are defined.</td>
</tr>
<tr>
    <td><a href="#create_schedule"><CopyableCode code="create_schedule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CronExpression"><code>CronExpression</code></a></td>
    <td></td>
    <td>Creates a new schedule for one or more DataBrew jobs. Jobs can be run at a specific date and time, or at regular intervals.</td>
</tr>
<tr>
    <td><a href="#update_schedule"><CopyableCode code="update_schedule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CronExpression"><code>CronExpression</code></a></td>
    <td></td>
    <td>Modifies the definition of an existing DataBrew schedule.</td>
</tr>
<tr>
    <td><a href="#delete_schedule"><CopyableCode code="delete_schedule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified DataBrew schedule.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the schedule to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-jobName">
    <td><CopyableCode code="jobName" /></td>
    <td><code>string</code></td>
    <td>The name of the job that these schedules apply to.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned by a previous call to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_schedule"
    values={[
        { label: 'describe_schedule', value: 'describe_schedule' },
        { label: 'list_schedules', value: 'list_schedules' }
    ]}
>
<TabItem value="describe_schedule">

Returns the definition of a specific DataBrew schedule.

```sql
SELECT
create_date,
created_by,
cron_expression,
job_names,
last_modified_by,
last_modified_date,
name,
resource_arn,
tags
FROM aws.databrew.schedules
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_schedules">

Lists the DataBrew schedules that are defined.

```sql
SELECT
account_id,
create_date,
created_by,
cron_expression,
job_names,
last_modified_by,
last_modified_date,
name,
resource_arn,
tags
FROM aws.databrew.schedules
WHERE region = '{{ region }}' -- required
AND jobName = '{{ jobName }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_schedule"
    values={[
        { label: 'create_schedule', value: 'create_schedule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_schedule">

Creates a new schedule for one or more DataBrew jobs. Jobs can be run at a specific date and time, or at regular intervals.

```sql
INSERT INTO aws.databrew.schedules (
JobNames,
CronExpression,
Tags,
Name,
region
)
SELECT 
'{{ JobNames }}',
'{{ CronExpression }}' /* required */,
'{{ Tags }}',
'{{ Name }}',
'{{ region }}'
RETURNING
name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: schedules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the schedules resource.
    - name: JobNames
      value:
        - "{{ JobNames }}"
    - name: CronExpression
      value: "{{ CronExpression }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: Name
      value: "{{ Name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_schedule"
    values={[
        { label: 'update_schedule', value: 'update_schedule' }
    ]}
>
<TabItem value="update_schedule">

Modifies the definition of an existing DataBrew schedule.

```sql
UPDATE aws.databrew.schedules
SET 
JobNames = '{{ JobNames }}',
CronExpression = '{{ CronExpression }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND CronExpression = '{{ CronExpression }}' --required
RETURNING
name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_schedule"
    values={[
        { label: 'delete_schedule', value: 'delete_schedule' }
    ]}
>
<TabItem value="delete_schedule">

Deletes the specified DataBrew schedule.

```sql
DELETE FROM aws.databrew.schedules
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
