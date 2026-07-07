--- 
title: backup_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_plans
  - backup
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

Creates, updates, deletes, gets or lists a <code>backup_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backup_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.backup_plans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_backup_plan"
    values={[
        { label: 'get_backup_plan', value: 'get_backup_plan' },
        { label: 'list_backup_plans', value: 'list_backup_plans' }
    ]}
>
<TabItem value="get_backup_plan">

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
    <td><CopyableCode code="AdvancedBackupSettings" /></td>
    <td><code>array</code></td>
    <td>Contains a list of BackupOptions for each resource type. The list is populated only if the advanced option is set for the backup plan.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupPlan" /></td>
    <td><code>object</code></td>
    <td>Specifies the body of a backup plan. Includes a BackupPlanName and one or more sets of Rules.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupPlanArn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupPlanId" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies a backup plan.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatorRequestId" /></td>
    <td><code>string</code></td>
    <td>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice.</td>
</tr>
<tr>
    <td><CopyableCode code="DeletionDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a backup plan is deleted, in Unix format and Coordinated Universal Time (UTC). The value of DeletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="LastExecutionDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time this backup plan was run. A date and time, in Unix format and Coordinated Universal Time (UTC). The value of LastExecutionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduledRunsPreview" /></td>
    <td><code>array</code></td>
    <td>List of upcoming scheduled backup runs. Only included when MaxScheduledRunsPreview parameter is greater than 0. Contains up to 10 future backup executions with their scheduled times, execution types, and associated rule IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionId" /></td>
    <td><code>string</code></td>
    <td>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_backup_plans">

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
    <td><CopyableCode code="AdvancedBackupSettings" /></td>
    <td><code>array</code></td>
    <td>Contains a list of BackupOptions for a resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupPlanArn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupPlanId" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies a backup plan.</td>
</tr>
<tr>
    <td><CopyableCode code="BackupPlanName" /></td>
    <td><code>string</code></td>
    <td>The display name of a saved backup plan.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a resource backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatorRequestId" /></td>
    <td><code>string</code></td>
    <td>A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters.</td>
</tr>
<tr>
    <td><CopyableCode code="DeletionDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a backup plan is deleted, in Unix format and Coordinated Universal Time (UTC). The value of DeletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="LastExecutionDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time this backup plan was run. A date and time, in Unix format and Coordinated Universal Time (UTC). The value of LastExecutionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionId" /></td>
    <td><code>string</code></td>
    <td>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.</td>
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
    <td><a href="#get_backup_plan"><CopyableCode code="get_backup_plan" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_plan_id"><code>backup_plan_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-versionId"><code>versionId</code></a>, <a href="#parameter-MaxScheduledRunsPreview"><code>MaxScheduledRunsPreview</code></a></td>
    <td>Returns BackupPlan details for the specified BackupPlanId. The details are the body of a backup plan in JSON format, in addition to plan metadata.</td>
</tr>
<tr>
    <td><a href="#list_backup_plans"><CopyableCode code="list_backup_plans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-includeDeleted"><code>includeDeleted</code></a></td>
    <td>Lists the active backup plans for the account.</td>
</tr>
<tr>
    <td><a href="#create_backup_plan"><CopyableCode code="create_backup_plan" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BackupPlan"><code>BackupPlan</code></a></td>
    <td></td>
    <td>Creates a backup plan using a backup plan name and backup rules. A backup plan is a document that contains information that Backup uses to schedule tasks that create recovery points for resources. If you call CreateBackupPlan with a plan that already exists, you receive an AlreadyExistsException exception.</td>
</tr>
<tr>
    <td><a href="#update_backup_plan"><CopyableCode code="update_backup_plan" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-backup_plan_id"><code>backup_plan_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BackupPlan"><code>BackupPlan</code></a></td>
    <td></td>
    <td>Updates the specified backup plan. The new version is uniquely identified by its ID.</td>
</tr>
<tr>
    <td><a href="#delete_backup_plan"><CopyableCode code="delete_backup_plan" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-backup_plan_id"><code>backup_plan_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a backup plan. A backup plan can only be deleted after all associated selections of resources have been deleted. Deleting a backup plan deletes the current version of a backup plan. Previous versions, if any, will still exist.</td>
</tr>
<tr>
    <td><a href="#export_backup_plan_template"><CopyableCode code="export_backup_plan_template" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-backup_plan_id"><code>backup_plan_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the backup plan that is specified by the plan ID as a backup template.</td>
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
<tr id="parameter-backup_plan_id">
    <td><CopyableCode code="backup_plan_id" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies a backup plan.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxScheduledRunsPreview">
    <td><CopyableCode code="MaxScheduledRunsPreview" /></td>
    <td><code>integer</code></td>
    <td>Number of future scheduled backup runs to preview. When set to 0 (default), no scheduled runs preview is included in the response. Valid range is 0-10.</td>
</tr>
<tr id="parameter-includeDeleted">
    <td><CopyableCode code="includeDeleted" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value with a default value of FALSE that returns deleted backup plans when set to TRUE.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to be returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
<tr id="parameter-versionId">
    <td><CopyableCode code="versionId" /></td>
    <td><code>string</code></td>
    <td>Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_backup_plan"
    values={[
        { label: 'get_backup_plan', value: 'get_backup_plan' },
        { label: 'list_backup_plans', value: 'list_backup_plans' }
    ]}
>
<TabItem value="get_backup_plan">

Returns BackupPlan details for the specified BackupPlanId. The details are the body of a backup plan in JSON format, in addition to plan metadata.

```sql
SELECT
AdvancedBackupSettings,
BackupPlan,
BackupPlanArn,
BackupPlanId,
CreationDate,
CreatorRequestId,
DeletionDate,
LastExecutionDate,
ScheduledRunsPreview,
VersionId
FROM aws.backup.backup_plans
WHERE backup_plan_id = '{{ backup_plan_id }}' -- required
AND region = '{{ region }}' -- required
AND versionId = '{{ versionId }}'
AND MaxScheduledRunsPreview = '{{ MaxScheduledRunsPreview }}'
;
```
</TabItem>
<TabItem value="list_backup_plans">

Lists the active backup plans for the account.

```sql
SELECT
AdvancedBackupSettings,
BackupPlanArn,
BackupPlanId,
BackupPlanName,
CreationDate,
CreatorRequestId,
DeletionDate,
LastExecutionDate,
VersionId
FROM aws.backup.backup_plans
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND includeDeleted = '{{ includeDeleted }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_backup_plan"
    values={[
        { label: 'create_backup_plan', value: 'create_backup_plan' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_backup_plan">

Creates a backup plan using a backup plan name and backup rules. A backup plan is a document that contains information that Backup uses to schedule tasks that create recovery points for resources. If you call CreateBackupPlan with a plan that already exists, you receive an AlreadyExistsException exception.

```sql
INSERT INTO aws.backup.backup_plans (
BackupPlan,
BackupPlanTags,
CreatorRequestId,
region
)
SELECT 
'{{ BackupPlan }}' /* required */,
'{{ BackupPlanTags }}',
'{{ CreatorRequestId }}',
'{{ region }}'
RETURNING
AdvancedBackupSettings,
BackupPlanArn,
BackupPlanId,
CreationDate,
VersionId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: backup_plans
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the backup_plans resource.
    - name: BackupPlan
      description: |
        Contains an optional backup plan display name and an array of BackupRule objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task.
      value:
        BackupPlanName: "{{ BackupPlanName }}"
        Rules:
          - RuleName: "{{ RuleName }}"
            TargetBackupVaultName: "{{ TargetBackupVaultName }}"
            TargetLogicallyAirGappedBackupVaultArn: "{{ TargetLogicallyAirGappedBackupVaultArn }}"
            ScheduleExpression: "{{ ScheduleExpression }}"
            StartWindowMinutes: {{ StartWindowMinutes }}
            CompletionWindowMinutes: {{ CompletionWindowMinutes }}
            Lifecycle:
              MoveToColdStorageAfterDays: {{ MoveToColdStorageAfterDays }}
              DeleteAfterDays: {{ DeleteAfterDays }}
              OptInToArchiveForSupportedResources: {{ OptInToArchiveForSupportedResources }}
              DeleteAfterEvent: "{{ DeleteAfterEvent }}"
            RecoveryPointTags: "{{ RecoveryPointTags }}"
            CopyActions: "{{ CopyActions }}"
            EnableContinuousBackup: {{ EnableContinuousBackup }}
            ScheduleExpressionTimezone: "{{ ScheduleExpressionTimezone }}"
            IndexActions: "{{ IndexActions }}"
            ScanActions: "{{ ScanActions }}"
        AdvancedBackupSettings:
          - ResourceType: "{{ ResourceType }}"
            BackupOptions: "{{ BackupOptions }}"
        ScanSettings:
          - MalwareScanner: "{{ MalwareScanner }}"
            ResourceTypes: "{{ ResourceTypes }}"
            ScannerRoleArn: "{{ ScannerRoleArn }}"
    - name: BackupPlanTags
      value: "{{ BackupPlanTags }}"
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_backup_plan"
    values={[
        { label: 'update_backup_plan', value: 'update_backup_plan' }
    ]}
>
<TabItem value="update_backup_plan">

Updates the specified backup plan. The new version is uniquely identified by its ID.

```sql
UPDATE aws.backup.backup_plans
SET 
BackupPlan = '{{ BackupPlan }}'
WHERE 
backup_plan_id = '{{ backup_plan_id }}' --required
AND region = '{{ region }}' --required
AND BackupPlan = '{{ BackupPlan }}' --required
RETURNING
AdvancedBackupSettings,
BackupPlanArn,
BackupPlanId,
CreationDate,
ScanSettings,
VersionId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_backup_plan"
    values={[
        { label: 'delete_backup_plan', value: 'delete_backup_plan' }
    ]}
>
<TabItem value="delete_backup_plan">

Deletes a backup plan. A backup plan can only be deleted after all associated selections of resources have been deleted. Deleting a backup plan deletes the current version of a backup plan. Previous versions, if any, will still exist.

```sql
DELETE FROM aws.backup.backup_plans
WHERE backup_plan_id = '{{ backup_plan_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_backup_plan_template"
    values={[
        { label: 'export_backup_plan_template', value: 'export_backup_plan_template' }
    ]}
>
<TabItem value="export_backup_plan_template">

Returns the backup plan that is specified by the plan ID as a backup template.

```sql
EXEC aws.backup.backup_plans.export_backup_plan_template 
@backup_plan_id='{{ backup_plan_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
