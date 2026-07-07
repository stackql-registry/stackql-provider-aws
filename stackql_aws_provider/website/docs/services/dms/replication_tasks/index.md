--- 
title: replication_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_tasks
  - dms
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

Creates, updates, deletes, gets or lists a <code>replication_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replication_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.replication_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_replication_tasks"
    values={[
        { label: 'describe_replication_tasks', value: 'describe_replication_tasks' }
    ]}
>
<TabItem value="describe_replication_tasks">

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
    <td><CopyableCode code="CdcStartPosition" /></td>
    <td><code>string</code></td>
    <td>Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want the CDC operation to start. Specifying both values results in an error. The value can be in date, checkpoint, or LSN/SCN format. Date Example: --cdc-start-position “2018-03-08T12:12:12” Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93" LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</td>
</tr>
<tr>
    <td><CopyableCode code="CdcStopPosition" /></td>
    <td><code>string</code></td>
    <td>Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time. Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12” Commit time example: --cdc-stop-position “commit_time:2018-02-09T12:12:12“</td>
</tr>
<tr>
    <td><CopyableCode code="LastFailureMessage" /></td>
    <td><code>string</code></td>
    <td>The last error (failure) message generated for the replication task.</td>
</tr>
<tr>
    <td><CopyableCode code="MigrationType" /></td>
    <td><code>string</code></td>
    <td>The type of migration. (full-load, cdc, full-load-and-cdc)</td>
</tr>
<tr>
    <td><CopyableCode code="RecoveryCheckpoint" /></td>
    <td><code>string</code></td>
    <td>Indicates the last checkpoint that occurred during a change data capture (CDC) operation. You can provide this value to the CdcStartPosition parameter to start a CDC operation that begins at that checkpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the replication instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationTaskArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the replication task.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationTaskCreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the replication task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationTaskIdentifier" /></td>
    <td><code>string</code></td>
    <td>The user-assigned replication task identifier or name. Constraints: Must contain 1-255 alphanumeric characters or hyphens. First character must be a letter. Cannot end with a hyphen or contain two consecutive hyphens.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationTaskSettings" /></td>
    <td><code>string</code></td>
    <td>The settings for the replication task.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationTaskStartDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the replication task is scheduled to start.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicationTaskStats" /></td>
    <td><code>object</code></td>
    <td>The statistics for the task, including elapsed time, tables loaded, and table errors.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceEndpointArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the replication task. This response parameter can return one of the following values: "moving" – The task is being moved in response to running the MoveReplicationTask operation. "creating" – The task is being created in response to running the CreateReplicationTask operation. "deleting" – The task is being deleted in response to running the DeleteReplicationTask operation. "failed" – The task failed to successfully complete the database migration in response to running the StartReplicationTask operation. "failed-move" – The task failed to move in response to running the MoveReplicationTask operation. "modifying" – The task definition is being modified in response to running the ModifyReplicationTask operation. "ready" – The task is in a ready state where it can respond to other task operations, such as StartReplicationTask or DeleteReplicationTask . "running" – The task is performing a database migration in response to running the StartReplicationTask operation. "starting" – The task is preparing to perform a database migration in response to running the StartReplicationTask operation. "stopped" – The task has stopped in response to running the StopReplicationTask operation. "stopping" – The task is preparing to stop in response to running the StopReplicationTask operation. "testing" – The database migration specified for this task is being tested in response to running either the StartReplicationTaskAssessmentRun or the StartReplicationTaskAssessment operation. StartReplicationTaskAssessmentRun is an improved premigration task assessment operation. The StartReplicationTaskAssessment operation assesses data type compatibility only between the source and target database of a given migration task. In contrast, StartReplicationTaskAssessmentRun enables you to specify a variety of premigration task assessments in addition to data type compatibility. These assessments include ones for the validity of primary key definitions and likely issues with database migration performance, among others.</td>
</tr>
<tr>
    <td><CopyableCode code="StopReason" /></td>
    <td><code>string</code></td>
    <td>The reason the replication task was stopped. This response parameter can return one of the following values: "Stop Reason NORMAL" – The task completed successfully with no additional information returned. "Stop Reason RECOVERABLE_ERROR" "Stop Reason FATAL_ERROR" "Stop Reason FULL_LOAD_ONLY_FINISHED" – The task completed the full load phase. DMS applied cached changes if you set StopTaskCachedChangesApplied to true. "Stop Reason STOPPED_AFTER_FULL_LOAD" – Full load completed, with cached changes not applied "Stop Reason STOPPED_AFTER_CACHED_EVENTS" – Full load completed, with cached changes applied "Stop Reason EXPRESS_LICENSE_LIMITS_REACHED" "Stop Reason STOPPED_AFTER_DDL_APPLY" – User-defined stop task after DDL applied "Stop Reason STOPPED_DUE_TO_LOW_MEMORY" "Stop Reason STOPPED_DUE_TO_LOW_DISK" "Stop Reason STOPPED_AT_SERVER_TIME" – User-defined server time for stopping task "Stop Reason STOPPED_AT_COMMIT_TIME" – User-defined commit time for stopping task "Stop Reason RECONFIGURATION_RESTART" "Stop Reason RECYCLE_TASK"</td>
</tr>
<tr>
    <td><CopyableCode code="TableMappings" /></td>
    <td><code>string</code></td>
    <td>Table mappings specified in the task.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetEndpointArn" /></td>
    <td><code>string</code></td>
    <td>The ARN that uniquely identifies the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetReplicationInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the replication instance to which this task is moved in response to running the MoveReplicationTask operation. Otherwise, this response parameter isn't a member of the ReplicationTask object.</td>
</tr>
<tr>
    <td><CopyableCode code="TaskData" /></td>
    <td><code>string</code></td>
    <td>Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see Specifying Supplemental Data for Task Settings in the Database Migration Service User Guide.</td>
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
    <td><a href="#describe_replication_tasks"><CopyableCode code="describe_replication_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about replication tasks for your account in the current region.</td>
</tr>
<tr>
    <td><a href="#create_replication_task"><CopyableCode code="create_replication_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationTaskIdentifier"><code>ReplicationTaskIdentifier</code></a>, <a href="#parameter-SourceEndpointArn"><code>SourceEndpointArn</code></a>, <a href="#parameter-TargetEndpointArn"><code>TargetEndpointArn</code></a>, <a href="#parameter-ReplicationInstanceArn"><code>ReplicationInstanceArn</code></a>, <a href="#parameter-MigrationType"><code>MigrationType</code></a>, <a href="#parameter-TableMappings"><code>TableMappings</code></a></td>
    <td></td>
    <td>Creates a replication task using the specified parameters.</td>
</tr>
<tr>
    <td><a href="#modify_replication_task"><CopyableCode code="modify_replication_task" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationTaskArn"><code>ReplicationTaskArn</code></a></td>
    <td></td>
    <td>Modifies the specified replication task. You can't modify the task endpoints. The task must be stopped before you can modify it. For more information about DMS tasks, see Working with Migration Tasks in the Database Migration Service User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_replication_task"><CopyableCode code="delete_replication_task" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified replication task.</td>
</tr>
<tr>
    <td><a href="#cancel_replication_task_assessment_run"><CopyableCode code="cancel_replication_task_assessment_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationTaskAssessmentRunArn"><code>ReplicationTaskAssessmentRunArn</code></a></td>
    <td></td>
    <td>Cancels a single premigration assessment run. This operation prevents any individual assessments from running if they haven't started running. It also attempts to cancel any individual assessments that are currently running.</td>
</tr>
<tr>
    <td><a href="#reload_tables"><CopyableCode code="reload_tables" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationTaskArn"><code>ReplicationTaskArn</code></a>, <a href="#parameter-TablesToReload"><code>TablesToReload</code></a></td>
    <td></td>
    <td>Reloads the target database table with the source data. You can only use this operation with a task in the RUNNING state, otherwise the service will throw an InvalidResourceStateFault exception.</td>
</tr>
<tr>
    <td><a href="#start_replication_task_assessment"><CopyableCode code="start_replication_task_assessment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationTaskArn"><code>ReplicationTaskArn</code></a></td>
    <td></td>
    <td>Starts the replication task assessment for unsupported data types in the source database. You can only use this operation for a task if the following conditions are true: The task must be in the stopped state. The task must have successful connections to the source and target. If either of these conditions are not met, an InvalidResourceStateFault error will result. For information about DMS task assessments, see Creating a task assessment report in the Database Migration Service User Guide.</td>
</tr>
<tr>
    <td><a href="#start_replication_task_assessment_run"><CopyableCode code="start_replication_task_assessment_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationTaskArn"><code>ReplicationTaskArn</code></a>, <a href="#parameter-ServiceAccessRoleArn"><code>ServiceAccessRoleArn</code></a>, <a href="#parameter-ResultLocationBucket"><code>ResultLocationBucket</code></a>, <a href="#parameter-AssessmentRunName"><code>AssessmentRunName</code></a></td>
    <td></td>
    <td>Starts a new premigration assessment run for one or more individual assessments of a migration task. The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete.</td>
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
    defaultValue="describe_replication_tasks"
    values={[
        { label: 'describe_replication_tasks', value: 'describe_replication_tasks' }
    ]}
>
<TabItem value="describe_replication_tasks">

Returns information about replication tasks for your account in the current region.

```sql
SELECT
CdcStartPosition,
CdcStopPosition,
LastFailureMessage,
MigrationType,
RecoveryCheckpoint,
ReplicationInstanceArn,
ReplicationTaskArn,
ReplicationTaskCreationDate,
ReplicationTaskIdentifier,
ReplicationTaskSettings,
ReplicationTaskStartDate,
ReplicationTaskStats,
SourceEndpointArn,
Status,
StopReason,
TableMappings,
TargetEndpointArn,
TargetReplicationInstanceArn,
TaskData
FROM aws.dms.replication_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_replication_task"
    values={[
        { label: 'create_replication_task', value: 'create_replication_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_replication_task">

Creates a replication task using the specified parameters.

```sql
INSERT INTO aws.dms.replication_tasks (
ReplicationTaskIdentifier,
SourceEndpointArn,
TargetEndpointArn,
ReplicationInstanceArn,
MigrationType,
TableMappings,
ReplicationTaskSettings,
CdcStartTime,
CdcStartPosition,
CdcStopPosition,
Tags,
TaskData,
ResourceIdentifier,
region
)
SELECT 
'{{ ReplicationTaskIdentifier }}' /* required */,
'{{ SourceEndpointArn }}' /* required */,
'{{ TargetEndpointArn }}' /* required */,
'{{ ReplicationInstanceArn }}' /* required */,
'{{ MigrationType }}' /* required */,
'{{ TableMappings }}' /* required */,
'{{ ReplicationTaskSettings }}',
'{{ CdcStartTime }}',
'{{ CdcStartPosition }}',
'{{ CdcStopPosition }}',
'{{ Tags }}',
'{{ TaskData }}',
'{{ ResourceIdentifier }}',
'{{ region }}'
RETURNING
ReplicationTask
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: replication_tasks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the replication_tasks resource.
    - name: ReplicationTaskIdentifier
      value: "{{ ReplicationTaskIdentifier }}"
      description: |
        An identifier for the replication task. Constraints: Must contain 1-255 alphanumeric characters or hyphens. First character must be a letter. Cannot end with a hyphen or contain two consecutive hyphens.
    - name: SourceEndpointArn
      value: "{{ SourceEndpointArn }}"
      description: |
        An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.
    - name: TargetEndpointArn
      value: "{{ TargetEndpointArn }}"
      description: |
        An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.
    - name: ReplicationInstanceArn
      value: "{{ ReplicationInstanceArn }}"
      description: |
        The Amazon Resource Name (ARN) of a replication instance.
    - name: MigrationType
      value: "{{ MigrationType }}"
      description: |
        The migration type. Valid values: full-load | cdc | full-load-and-cdc
      valid_values: ['full-load', 'cdc', 'full-load-and-cdc']
    - name: TableMappings
      value: "{{ TableMappings }}"
      description: |
        The table mappings for the task, in JSON format. For more information, see Using Table Mapping to Specify Task Settings in the Database Migration Service User Guide.
    - name: ReplicationTaskSettings
      value: "{{ ReplicationTaskSettings }}"
      description: |
        Overall settings for the task, in JSON format. For more information, see Specifying Task Settings for Database Migration Service Tasks in the Database Migration Service User Guide.
    - name: CdcStartTime
      value: "{{ CdcStartTime }}"
      description: |
        Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error. Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”
    - name: CdcStartPosition
      value: "{{ CdcStartPosition }}"
      description: |
        Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error. The value can be in date, checkpoint, or LSN/SCN format. Date Example: --cdc-start-position “2018-03-08T12:12:12” Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93" LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373” When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the slotName extra connection attribute to the name of this logical replication slot. For more information, see Extra Connection Attributes When Using PostgreSQL as a Source for DMS.
    - name: CdcStopPosition
      value: "{{ CdcStopPosition }}"
      description: |
        Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time. Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12” Commit time example: --cdc-stop-position “commit_time:2018-02-09T12:12:12“
    - name: Tags
      description: |
        One or more tags to be assigned to the replication task.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          ResourceArn: "{{ ResourceArn }}"
    - name: TaskData
      value: "{{ TaskData }}"
      description: |
        Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see Specifying Supplemental Data for Task Settings in the Database Migration Service User Guide.
    - name: ResourceIdentifier
      value: "{{ ResourceIdentifier }}"
      description: |
        A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as Example-App-ARN1. For example, this value might result in the EndpointArn value arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1. If you don't specify a ResourceIdentifier value, DMS generates a default identifier value for the end of EndpointArn.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_replication_task"
    values={[
        { label: 'modify_replication_task', value: 'modify_replication_task' }
    ]}
>
<TabItem value="modify_replication_task">

Modifies the specified replication task. You can't modify the task endpoints. The task must be stopped before you can modify it. For more information about DMS tasks, see Working with Migration Tasks in the Database Migration Service User Guide.

```sql
UPDATE aws.dms.replication_tasks
SET 
ReplicationTaskArn = '{{ ReplicationTaskArn }}',
ReplicationTaskIdentifier = '{{ ReplicationTaskIdentifier }}',
MigrationType = '{{ MigrationType }}',
TableMappings = '{{ TableMappings }}',
ReplicationTaskSettings = '{{ ReplicationTaskSettings }}',
CdcStartTime = '{{ CdcStartTime }}',
CdcStartPosition = '{{ CdcStartPosition }}',
CdcStopPosition = '{{ CdcStopPosition }}',
TaskData = '{{ TaskData }}'
WHERE 
region = '{{ region }}' --required
AND ReplicationTaskArn = '{{ ReplicationTaskArn }}' --required
RETURNING
ReplicationTask;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_replication_task"
    values={[
        { label: 'delete_replication_task', value: 'delete_replication_task' }
    ]}
>
<TabItem value="delete_replication_task">

Deletes the specified replication task.

```sql
DELETE FROM aws.dms.replication_tasks
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_replication_task_assessment_run"
    values={[
        { label: 'cancel_replication_task_assessment_run', value: 'cancel_replication_task_assessment_run' },
        { label: 'reload_tables', value: 'reload_tables' },
        { label: 'start_replication_task_assessment', value: 'start_replication_task_assessment' },
        { label: 'start_replication_task_assessment_run', value: 'start_replication_task_assessment_run' }
    ]}
>
<TabItem value="cancel_replication_task_assessment_run">

Cancels a single premigration assessment run. This operation prevents any individual assessments from running if they haven't started running. It also attempts to cancel any individual assessments that are currently running.

```sql
EXEC aws.dms.replication_tasks.cancel_replication_task_assessment_run 
@region='{{ region }}' --required 
@@json=
'{
"ReplicationTaskAssessmentRunArn": "{{ ReplicationTaskAssessmentRunArn }}"
}'
;
```
</TabItem>
<TabItem value="reload_tables">

Reloads the target database table with the source data. You can only use this operation with a task in the RUNNING state, otherwise the service will throw an InvalidResourceStateFault exception.

```sql
EXEC aws.dms.replication_tasks.reload_tables 
@region='{{ region }}' --required 
@@json=
'{
"ReplicationTaskArn": "{{ ReplicationTaskArn }}", 
"TablesToReload": "{{ TablesToReload }}", 
"ReloadOption": "{{ ReloadOption }}"
}'
;
```
</TabItem>
<TabItem value="start_replication_task_assessment">

Starts the replication task assessment for unsupported data types in the source database. You can only use this operation for a task if the following conditions are true: The task must be in the stopped state. The task must have successful connections to the source and target. If either of these conditions are not met, an InvalidResourceStateFault error will result. For information about DMS task assessments, see Creating a task assessment report in the Database Migration Service User Guide.

```sql
EXEC aws.dms.replication_tasks.start_replication_task_assessment 
@region='{{ region }}' --required 
@@json=
'{
"ReplicationTaskArn": "{{ ReplicationTaskArn }}"
}'
;
```
</TabItem>
<TabItem value="start_replication_task_assessment_run">

Starts a new premigration assessment run for one or more individual assessments of a migration task. The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete.

```sql
EXEC aws.dms.replication_tasks.start_replication_task_assessment_run 
@region='{{ region }}' --required 
@@json=
'{
"ReplicationTaskArn": "{{ ReplicationTaskArn }}", 
"ServiceAccessRoleArn": "{{ ServiceAccessRoleArn }}", 
"ResultLocationBucket": "{{ ResultLocationBucket }}", 
"ResultLocationFolder": "{{ ResultLocationFolder }}", 
"ResultEncryptionMode": "{{ ResultEncryptionMode }}", 
"ResultKmsKeyArn": "{{ ResultKmsKeyArn }}", 
"AssessmentRunName": "{{ AssessmentRunName }}", 
"IncludeOnly": "{{ IncludeOnly }}", 
"Exclude": "{{ Exclude }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
