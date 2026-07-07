--- 
title: snapshot_schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshot_schedules
  - redshift
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

Creates, updates, deletes, gets or lists a <code>snapshot_schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshot_schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.snapshot_schedules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_snapshot_schedules"
    values={[
        { label: 'describe_snapshot_schedules', value: 'describe_snapshot_schedules' }
    ]}
>
<TabItem value="describe_snapshot_schedules">

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
    <td><CopyableCode code="AssociatedClusterCount" /></td>
    <td><code>integer</code></td>
    <td>The number of clusters associated with the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="AssociatedClusters" /></td>
    <td><code>string</code></td>
    <td>A list of clusters associated with the schedule. A maximum of 100 clusters is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="NextInvocations" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleDefinitions" /></td>
    <td><code>string</code></td>
    <td>A list of ScheduleDefinitions.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleIdentifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>An optional set of tags describing the schedule.</td>
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
    <td><a href="#describe_snapshot_schedules"><CopyableCode code="describe_snapshot_schedules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-ScheduleIdentifier"><code>ScheduleIdentifier</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-TagValues"><code>TagValues</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Returns a list of snapshot schedules.</td>
</tr>
<tr>
    <td><a href="#create_snapshot_schedule"><CopyableCode code="create_snapshot_schedule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ScheduleDefinitions"><code>ScheduleDefinitions</code></a>, <a href="#parameter-ScheduleIdentifier"><code>ScheduleIdentifier</code></a>, <a href="#parameter-ScheduleDescription"><code>ScheduleDescription</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NextInvocations"><code>NextInvocations</code></a></td>
    <td>Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule.</td>
</tr>
<tr>
    <td><a href="#modify_snapshot_schedule"><CopyableCode code="modify_snapshot_schedule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ScheduleIdentifier"><code>ScheduleIdentifier</code></a>, <a href="#parameter-ScheduleDefinitions"><code>ScheduleDefinitions</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.</td>
</tr>
<tr>
    <td><a href="#modify_cluster_snapshot_schedule"><CopyableCode code="modify_cluster_snapshot_schedule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ScheduleIdentifier"><code>ScheduleIdentifier</code></a>, <a href="#parameter-DisassociateSchedule"><code>DisassociateSchedule</code></a></td>
    <td>Modifies a snapshot schedule for a cluster.</td>
</tr>
<tr>
    <td><a href="#delete_snapshot_schedule"><CopyableCode code="delete_snapshot_schedule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ScheduleIdentifier"><code>ScheduleIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a snapshot schedule.</td>
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
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the cluster whose snapshot schedule you want to modify.</td>
</tr>
<tr id="parameter-ScheduleDefinitions">
    <td><CopyableCode code="ScheduleDefinitions" /></td>
    <td><code>array</code></td>
    <td>An updated list of schedule definitions. A schedule definition is made up of schedule expressions, for example, "cron(30 12 *)" or "rate(12 hours)".</td>
</tr>
<tr id="parameter-ScheduleIdentifier">
    <td><CopyableCode code="ScheduleIdentifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of the snapshot schedule to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the cluster whose snapshot schedules you want to view.</td>
</tr>
<tr id="parameter-DisassociateSchedule">
    <td><CopyableCode code="DisassociateSchedule" /></td>
    <td><code>boolean</code></td>
    <td>A boolean to indicate whether to remove the assoiciation between the cluster and the schedule.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the marker parameter and retrying the command. If the marker field is empty, all response records have been retrieved for the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number or response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.</td>
</tr>
<tr id="parameter-NextInvocations">
    <td><CopyableCode code="NextInvocations" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-ScheduleDefinitions">
    <td><CopyableCode code="ScheduleDefinitions" /></td>
    <td><code>array</code></td>
    <td>The definition of the snapshot schedule. The definition is made up of schedule expressions, for example "cron(30 12 *)" or "rate(12 hours)".</td>
</tr>
<tr id="parameter-ScheduleDescription">
    <td><CopyableCode code="ScheduleDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the snapshot schedule.</td>
</tr>
<tr id="parameter-ScheduleIdentifier">
    <td><CopyableCode code="ScheduleIdentifier" /></td>
    <td><code>string</code></td>
    <td>A unique alphanumeric identifier for the schedule that you want to associate with the cluster.</td>
</tr>
<tr id="parameter-TagKeys">
    <td><CopyableCode code="TagKeys" /></td>
    <td><code>array</code></td>
    <td>The key value for a snapshot schedule tag.</td>
</tr>
<tr id="parameter-TagValues">
    <td><CopyableCode code="TagValues" /></td>
    <td><code>array</code></td>
    <td>The value corresponding to the key of the snapshot schedule tag.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>An optional set of tags you can use to search for the schedule.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_snapshot_schedules"
    values={[
        { label: 'describe_snapshot_schedules', value: 'describe_snapshot_schedules' }
    ]}
>
<TabItem value="describe_snapshot_schedules">

Returns a list of snapshot schedules.

```sql
SELECT
AssociatedClusterCount,
AssociatedClusters,
NextInvocations,
ScheduleDefinitions,
ScheduleDescription,
ScheduleIdentifier,
Tags
FROM aws.redshift.snapshot_schedules
WHERE region = '{{ region }}' -- required
AND ClusterIdentifier = '{{ ClusterIdentifier }}'
AND ScheduleIdentifier = '{{ ScheduleIdentifier }}'
AND TagKeys = '{{ TagKeys }}'
AND TagValues = '{{ TagValues }}'
AND Marker = '{{ Marker }}'
AND MaxRecords = '{{ MaxRecords }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_snapshot_schedule"
    values={[
        { label: 'create_snapshot_schedule', value: 'create_snapshot_schedule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_snapshot_schedule">

Create a snapshot schedule that can be associated to a cluster and which overrides the default system backup schedule.

```sql
INSERT INTO aws.redshift.snapshot_schedules (
region,
ScheduleDefinitions,
ScheduleIdentifier,
ScheduleDescription,
Tags,
DryRun,
NextInvocations
)
SELECT 
'{{ region }}',
'{{ ScheduleDefinitions }}',
'{{ ScheduleIdentifier }}',
'{{ ScheduleDescription }}',
'{{ Tags }}',
'{{ DryRun }}',
'{{ NextInvocations }}'
RETURNING
AssociatedClusterCount,
AssociatedClusters,
NextInvocations,
ScheduleDefinitions,
ScheduleDescription,
ScheduleIdentifier,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: snapshot_schedules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the snapshot_schedules resource.
    - name: ScheduleDefinitions
      value: "{{ ScheduleDefinitions }}"
      description: The definition of the snapshot schedule. The definition is made up of schedule expressions, for example "cron(30 12 *)" or "rate(12 hours)".
      description: The definition of the snapshot schedule. The definition is made up of schedule expressions, for example "cron(30 12 *)" or "rate(12 hours)".
    - name: ScheduleIdentifier
      value: "{{ ScheduleIdentifier }}"
      description: A unique identifier for a snapshot schedule. Only alphanumeric characters are allowed for the identifier.
      description: A unique identifier for a snapshot schedule. Only alphanumeric characters are allowed for the identifier.
    - name: ScheduleDescription
      value: "{{ ScheduleDescription }}"
      description: The description of the snapshot schedule.
      description: The description of the snapshot schedule.
    - name: Tags
      value: "{{ Tags }}"
      description: An optional set of tags you can use to search for the schedule.
      description: An optional set of tags you can use to search for the schedule.
    - name: DryRun
      value: {{ DryRun }}
    - name: NextInvocations
      value: {{ NextInvocations }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_snapshot_schedule"
    values={[
        { label: 'modify_snapshot_schedule', value: 'modify_snapshot_schedule' },
        { label: 'modify_cluster_snapshot_schedule', value: 'modify_cluster_snapshot_schedule' }
    ]}
>
<TabItem value="modify_snapshot_schedule">

Modifies a snapshot schedule. Any schedule associated with a cluster is modified asynchronously.

```sql
UPDATE aws.redshift.snapshot_schedules
SET 
-- No updatable properties
WHERE 
ScheduleIdentifier = '{{ ScheduleIdentifier }}' --required
AND ScheduleDefinitions = '{{ ScheduleDefinitions }}' --required
AND region = '{{ region }}' --required
RETURNING
AssociatedClusterCount,
AssociatedClusters,
NextInvocations,
ScheduleDefinitions,
ScheduleDescription,
ScheduleIdentifier,
Tags;
```
</TabItem>
<TabItem value="modify_cluster_snapshot_schedule">

Modifies a snapshot schedule for a cluster.

```sql
UPDATE aws.redshift.snapshot_schedules
SET 
-- No updatable properties
WHERE 
ClusterIdentifier = '{{ ClusterIdentifier }}' --required
AND region = '{{ region }}' --required
AND ScheduleIdentifier = '{{ ScheduleIdentifier}}'
AND DisassociateSchedule = {{ DisassociateSchedule}};
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_snapshot_schedule"
    values={[
        { label: 'delete_snapshot_schedule', value: 'delete_snapshot_schedule' }
    ]}
>
<TabItem value="delete_snapshot_schedule">

Deletes a snapshot schedule.

```sql
DELETE FROM aws.redshift.snapshot_schedules
WHERE ScheduleIdentifier = '{{ ScheduleIdentifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
