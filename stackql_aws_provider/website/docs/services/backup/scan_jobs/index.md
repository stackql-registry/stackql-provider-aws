--- 
title: scan_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - scan_jobs
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

Creates, updates, deletes, gets or lists a <code>scan_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scan_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.scan_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_scan_job"
    values={[
        { label: 'describe_scan_job', value: 'describe_scan_job' },
        { label: 'list_scan_jobs', value: 'list_scan_jobs' }
    ]}
>
<TabItem value="describe_scan_job">

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
    <td>Returns the account ID that owns the scan job. Pattern: ^&#91;0-9&#93;&#123;12&#125;$</td>
</tr>
<tr>
    <td><CopyableCode code="backup_vault_arn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault</td>
</tr>
<tr>
    <td><CopyableCode code="backup_vault_name" /></td>
    <td><code>string</code></td>
    <td>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. Pattern: ^&#91;a-zA-Z0-9\-\_\.&#93;&#123;2,50&#125;$</td>
</tr>
<tr>
    <td><CopyableCode code="completion_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a backup index finished creation, in Unix format and Coordinated Universal Time (UTC). The value of CompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="continuous_scan_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The point in time the scan job scanned up to for a continuous backup.</td>
</tr>
<tr>
    <td><CopyableCode code="continuous_scan_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The point in time the scan job started scan from for a continuous backup.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Contains identifying information about the creation of a scan job, including the backup plan and rule that initiated the scan.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a backup index finished creation, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, arn:aws:iam::123456789012:role/S3Access.</td>
</tr>
<tr>
    <td><CopyableCode code="malware_scanner" /></td>
    <td><code>string</code></td>
    <td>The scanning engine used for the corresponding scan job. Currently only GUARDUTY is supported. (GUARDDUTY)</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_point_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies the target recovery point for scanning.; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies the source resource of the corresponding recovery point ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_name" /></td>
    <td><code>string</code></td>
    <td>The non-unique name of the resource that belongs to the specified backup.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services Resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume. Pattern: ^&#91;a-zA-Z0-9\-\_\.&#93;&#123;1,50&#125;$ (EBS, EC2, S3)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_base_recovery_point_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies the base recovery point for scanning. This field will only be populated when an incremental scan job has taken place.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_id" /></td>
    <td><code>string</code></td>
    <td>The scan ID generated by Amazon GuardDuty for the corresponding Scan Job ID request from Backup.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_job_id" /></td>
    <td><code>string</code></td>
    <td>The scan job ID that uniquely identified the request to Backup.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_mode" /></td>
    <td><code>string</code></td>
    <td>Specifies the scan type used for the scan job. (FULL_SCAN, INCREMENTAL_SCAN)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_result" /></td>
    <td><code>object</code></td>
    <td>Contains the ScanResultsStatus for the scanning job and returns THREATS_FOUND or NO_THREATS_FOUND for completed jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="scanner_role_arn" /></td>
    <td><code>string</code></td>
    <td>Specifies the scanner IAM role ARN used to for the scan job.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of a scan job. (CANCELED, COMPLETED, COMPLETED_WITH_ISSUES, CREATED, FAILED, RUNNING)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A detailed message explaining the status of the job to back up a resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_scan_jobs">

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
    <td>The account ID that owns the scan job.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_vault_arn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault.</td>
</tr>
<tr>
    <td><CopyableCode code="backup_vault_name" /></td>
    <td><code>string</code></td>
    <td>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.</td>
</tr>
<tr>
    <td><CopyableCode code="completion_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a scan job is completed, in Unix format and Coordinated Universal Time (UTC). The value of CompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="continuous_scan_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The point in time the scan job scanned up to for a continuous backup.</td>
</tr>
<tr>
    <td><CopyableCode code="continuous_scan_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The point in time the scan job started scan from for a continuous backup.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Contains identifying information about the creation of a scan job, including the backup plan and rule that initiated the scan.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a scan job is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>Specifies the IAM role ARN used to create the scan job; for example, arn:aws:iam::123456789012:role/S3Access.</td>
</tr>
<tr>
    <td><CopyableCode code="malware_scanner" /></td>
    <td><code>string</code></td>
    <td>The scanning engine used for the scan job. Currently only GUARDDUTY is supported. (GUARDDUTY)</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_point_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies the recovery point being scanned; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies the source resource of the recovery point being scanned.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_name" /></td>
    <td><code>string</code></td>
    <td>The non-unique name of the resource that belongs to the specified backup.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services resource being scanned; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database. (EBS, EC2, S3)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_base_recovery_point_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN that uniquely identifies the base recovery point for scanning. This field is populated when an incremental scan job has taken place.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_id" /></td>
    <td><code>string</code></td>
    <td>The scan ID generated by the malware scanner for the corresponding scan job.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier that identifies the scan job request to Backup.</td>
</tr>
<tr>
    <td><CopyableCode code="scan_mode" /></td>
    <td><code>string</code></td>
    <td>Specifies the scan type use for the scan job. Includes: FULL_SCAN will scan the entire data lineage within the backup. INCREMENTAL_SCAN will scan the data difference between the target recovery point and base recovery point ARN. (FULL_SCAN, INCREMENTAL_SCAN)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_result" /></td>
    <td><code>object</code></td>
    <td>Contains the scan results information, including the status of threats found during scanning.</td>
</tr>
<tr>
    <td><CopyableCode code="scanner_role_arn" /></td>
    <td><code>string</code></td>
    <td>Specifies the scanner IAM role ARN used for the scan job.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the scan job. Valid values: CREATED | RUNNING | COMPLETED | COMPLETED_WITH_ISSUES | FAILED | CANCELED. (CANCELED, COMPLETED, COMPLETED_WITH_ISSUES, CREATED, FAILED, RUNNING)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A detailed message explaining the status of the scan job.</td>
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
    <td><a href="#describe_scan_job"><CopyableCode code="describe_scan_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scan_job_id"><code>scan_job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns scan job details for the specified ScanJobID.</td>
</tr>
<tr>
    <td><a href="#list_scan_jobs"><CopyableCode code="list_scan_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ByAccountId"><code>ByAccountId</code></a>, <a href="#parameter-ByBackupVaultName"><code>ByBackupVaultName</code></a>, <a href="#parameter-ByCompleteAfter"><code>ByCompleteAfter</code></a>, <a href="#parameter-ByCompleteBefore"><code>ByCompleteBefore</code></a>, <a href="#parameter-ByMalwareScanner"><code>ByMalwareScanner</code></a>, <a href="#parameter-ByRecoveryPointArn"><code>ByRecoveryPointArn</code></a>, <a href="#parameter-ByResourceArn"><code>ByResourceArn</code></a>, <a href="#parameter-ByResourceType"><code>ByResourceType</code></a>, <a href="#parameter-ByScanResultStatus"><code>ByScanResultStatus</code></a>, <a href="#parameter-ByState"><code>ByState</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of existing scan jobs for an authenticated account for the last 30 days.</td>
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
<tr id="parameter-scan_job_id">
    <td><CopyableCode code="scan_job_id" /></td>
    <td><code>string</code></td>
    <td>Uniquely identifies a request to Backup to scan a resource.</td>
</tr>
<tr id="parameter-ByAccountId">
    <td><CopyableCode code="ByAccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID to list the jobs from. Returns only backup jobs associated with the specified account ID. If used from an Amazon Web Services Organizations management account, passing * returns all jobs across the organization. Pattern: ^&#91;0-9&#93;&#123;12&#125;$</td>
</tr>
<tr id="parameter-ByBackupVaultName">
    <td><CopyableCode code="ByBackupVaultName" /></td>
    <td><code>string</code></td>
    <td>Returns only scan jobs that will be stored in the specified backup vault. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. Pattern: ^&#91;a-zA-Z0-9\-\_\.&#93;&#123;2,50&#125;$</td>
</tr>
<tr id="parameter-ByCompleteAfter">
    <td><CopyableCode code="ByCompleteAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns only scan jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC).</td>
</tr>
<tr id="parameter-ByCompleteBefore">
    <td><CopyableCode code="ByCompleteBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns only backup jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC).</td>
</tr>
<tr id="parameter-ByMalwareScanner">
    <td><CopyableCode code="ByMalwareScanner" /></td>
    <td><code>string</code></td>
    <td>Returns only the scan jobs for the specified malware scanner. Currently only supports GUARDDUTY.</td>
</tr>
<tr id="parameter-ByRecoveryPointArn">
    <td><CopyableCode code="ByRecoveryPointArn" /></td>
    <td><code>string</code></td>
    <td>Returns only the scan jobs that are ran against the specified recovery point.</td>
</tr>
<tr id="parameter-ByResourceArn">
    <td><CopyableCode code="ByResourceArn" /></td>
    <td><code>string</code></td>
    <td>Returns only scan jobs that match the specified resource Amazon Resource Name (ARN).</td>
</tr>
<tr id="parameter-ByResourceType">
    <td><CopyableCode code="ByResourceType" /></td>
    <td><code>string</code></td>
    <td>Returns restore testing selections by the specified restore testing plan name. EBSfor Amazon Elastic Block Store EC2for Amazon Elastic Compute Cloud S3for Amazon Simple Storage Service (Amazon S3) Pattern: ^&#91;a-zA-Z0-9\-\_\.&#93;&#123;1,50&#125;$</td>
</tr>
<tr id="parameter-ByScanResultStatus">
    <td><CopyableCode code="ByScanResultStatus" /></td>
    <td><code>string</code></td>
    <td>Returns only the scan jobs for the specified scan results: THREATS_FOUND NO_THREATS_FOUND</td>
</tr>
<tr id="parameter-ByState">
    <td><CopyableCode code="ByState" /></td>
    <td><code>string</code></td>
    <td>Returns only the scan jobs for the specified scanning job state.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to be returned. Valid Range: Minimum value of 1. Maximum value of 1000.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_scan_job"
    values={[
        { label: 'describe_scan_job', value: 'describe_scan_job' },
        { label: 'list_scan_jobs', value: 'list_scan_jobs' }
    ]}
>
<TabItem value="describe_scan_job">

Returns scan job details for the specified ScanJobID.

```sql
SELECT
account_id,
backup_vault_arn,
backup_vault_name,
completion_date,
continuous_scan_end_time,
continuous_scan_start_time,
created_by,
creation_date,
iam_role_arn,
malware_scanner,
recovery_point_arn,
resource_arn,
resource_name,
resource_type,
scan_base_recovery_point_arn,
scan_id,
scan_job_id,
scan_mode,
scan_result,
scanner_role_arn,
state,
status_message
FROM aws.backup.scan_jobs
WHERE scan_job_id = '{{ scan_job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_scan_jobs">

Returns a list of existing scan jobs for an authenticated account for the last 30 days.

```sql
SELECT
account_id,
backup_vault_arn,
backup_vault_name,
completion_date,
continuous_scan_end_time,
continuous_scan_start_time,
created_by,
creation_date,
iam_role_arn,
malware_scanner,
recovery_point_arn,
resource_arn,
resource_name,
resource_type,
scan_base_recovery_point_arn,
scan_id,
scan_job_id,
scan_mode,
scan_result,
scanner_role_arn,
state,
status_message
FROM aws.backup.scan_jobs
WHERE region = '{{ region }}' -- required
AND ByAccountId = '{{ ByAccountId }}'
AND ByBackupVaultName = '{{ ByBackupVaultName }}'
AND ByCompleteAfter = '{{ ByCompleteAfter }}'
AND ByCompleteBefore = '{{ ByCompleteBefore }}'
AND ByMalwareScanner = '{{ ByMalwareScanner }}'
AND ByRecoveryPointArn = '{{ ByRecoveryPointArn }}'
AND ByResourceArn = '{{ ByResourceArn }}'
AND ByResourceType = '{{ ByResourceType }}'
AND ByScanResultStatus = '{{ ByScanResultStatus }}'
AND ByState = '{{ ByState }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
