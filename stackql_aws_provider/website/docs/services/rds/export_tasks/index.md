--- 
title: export_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - export_tasks
  - rds
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

Creates, updates, deletes, gets or lists an <code>export_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="export_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.export_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_export_tasks"
    values={[
        { label: 'describe_export_tasks', value: 'describe_export_tasks' }
    ]}
>
<TabItem value="describe_export_tasks">

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
    <td><CopyableCode code="export_only" /></td>
    <td><code>string</code></td>
    <td>The data exported from the snapshot or cluster. Valid Values: database - Export all the data from a specified database. database.table table-name - Export a table of the snapshot or cluster. This format is valid only for RDS for MySQL, RDS for MariaDB, and Aurora MySQL. database.schema schema-name - Export a database schema of the snapshot or cluster. This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL. database.schema.table table-name - Export a table of the database schema. This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.</td>
</tr>
<tr>
    <td><CopyableCode code="export_task_identifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the snapshot or cluster export task. This ID isn't an identifier for the Amazon S3 bucket where the data is exported.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_cause" /></td>
    <td><code>string</code></td>
    <td>The reason the export failed, if it failed.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM role that is used to write to Amazon S3 when exporting a snapshot or cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The key identifier of the Amazon Web Services KMS key that is used to encrypt the data when it's exported to Amazon S3. The KMS key identifier is its key ARN, key ID, alias ARN, or alias name. The IAM role used for the export must have encryption and decryption permissions to use this KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="percent_progress" /></td>
    <td><code>integer</code></td>
    <td>The progress of the snapshot or cluster export task as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_bucket" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 bucket where the snapshot or cluster is exported to.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_prefix" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 bucket prefix that is the file name and path of the exported data.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_time" /></td>
    <td><code>string</code></td>
    <td>The time when the snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="source_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the snapshot or cluster exported to Amazon S3.</td>
</tr>
<tr>
    <td><CopyableCode code="source_type" /></td>
    <td><code>string</code></td>
    <td>The type of source for the export.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The progress status of the export task. The status can be one of the following: CANCELED CANCELING COMPLETE FAILED IN_PROGRESS STARTING</td>
</tr>
<tr>
    <td><CopyableCode code="task_end_time" /></td>
    <td><code>string</code></td>
    <td>The time when the snapshot or cluster export task ended.</td>
</tr>
<tr>
    <td><CopyableCode code="task_start_time" /></td>
    <td><code>string</code></td>
    <td>The time when the snapshot or cluster export task started.</td>
</tr>
<tr>
    <td><CopyableCode code="total_extracted_data_in_gb" /></td>
    <td><code>integer</code></td>
    <td>The total amount of data exported, in gigabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="warning_message" /></td>
    <td><code>string</code></td>
    <td>A warning about the snapshot or cluster export task.</td>
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
    <td><a href="#describe_export_tasks"><CopyableCode code="describe_export_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ExportTaskIdentifier"><code>ExportTaskIdentifier</code></a>, <a href="#parameter-SourceArn"><code>SourceArn</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-SourceType"><code>SourceType</code></a></td>
    <td>Returns information about a snapshot or cluster export to Amazon S3. This API operation supports pagination.</td>
</tr>
<tr>
    <td><a href="#cancel_export_task"><CopyableCode code="cancel_export_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ExportTaskIdentifier"><code>ExportTaskIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels an export task in progress that is exporting a snapshot or cluster to Amazon S3. Any data that has already been written to the S3 bucket isn't removed.</td>
</tr>
<tr>
    <td><a href="#start_export_task"><CopyableCode code="start_export_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ExportTaskIdentifier"><code>ExportTaskIdentifier</code></a>, <a href="#parameter-SourceArn"><code>SourceArn</code></a>, <a href="#parameter-S3BucketName"><code>S3BucketName</code></a>, <a href="#parameter-IamRoleArn"><code>IamRoleArn</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-S3Prefix"><code>S3Prefix</code></a>, <a href="#parameter-ExportOnly"><code>ExportOnly</code></a></td>
    <td>Starts an export of DB snapshot or DB cluster data to Amazon S3. The provided IAM role must have access to the S3 bucket. You can't export snapshot data from RDS Custom DB instances. For more information, see Supported Regions and DB engines for exporting snapshots to S3 in Amazon RDS. For more information on exporting DB snapshot data, see Exporting DB snapshot data to Amazon S3 in the Amazon RDS User Guide or Exporting DB cluster snapshot data to Amazon S3 in the Amazon Aurora User Guide. For more information on exporting DB cluster data, see Exporting DB cluster data to Amazon S3 in the Amazon Aurora User Guide.</td>
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
<tr id="parameter-ExportTaskIdentifier">
    <td><CopyableCode code="ExportTaskIdentifier" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the export task. This ID isn't an identifier for the Amazon S3 bucket where the data is to be exported.</td>
</tr>
<tr id="parameter-IamRoleArn">
    <td><CopyableCode code="IamRoleArn" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM role to use for writing to the Amazon S3 bucket when exporting a snapshot or cluster. In the IAM policy attached to your IAM role, include the following required actions to allow the transfer of files from Amazon RDS or Amazon Aurora to an S3 bucket: s3:PutObject* s3:GetObject* s3:ListBucket s3:DeleteObject* s3:GetBucketLocation In the policy, include the resources to identify the S3 bucket and objects in the bucket. The following list of resources shows the Amazon Resource Name (ARN) format for accessing S3: arn:aws:s3:::your-s3-bucket arn:aws:s3:::your-s3-bucket/*</td>
</tr>
<tr id="parameter-KmsKeyId">
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services KMS key to use to encrypt the data exported to Amazon S3. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. The caller of this operation must be authorized to run the following operations. These can be set in the Amazon Web Services KMS key policy: kms:CreateGrant kms:DescribeKey</td>
</tr>
<tr id="parameter-S3BucketName">
    <td><CopyableCode code="S3BucketName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon S3 bucket to export the snapshot or cluster data to.</td>
</tr>
<tr id="parameter-SourceArn">
    <td><CopyableCode code="SourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the snapshot or cluster to export to Amazon S3.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ExportOnly">
    <td><CopyableCode code="ExportOnly" /></td>
    <td><code>array</code></td>
    <td>The data to be exported from the snapshot or cluster. If this parameter isn't provided, all of the data is exported. Valid Values: database - Export all the data from a specified database. database.table table-name - Export a table of the snapshot or cluster. This format is valid only for RDS for MySQL, RDS for MariaDB, and Aurora MySQL. database.schema schema-name - Export a database schema of the snapshot or cluster. This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL. database.schema.table table-name - Export a table of the database schema. This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.</td>
</tr>
<tr id="parameter-ExportTaskIdentifier">
    <td><CopyableCode code="ExportTaskIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the snapshot or cluster export task to be described.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>Filters specify one or more snapshot or cluster exports to describe. The filters are specified as name-value pairs that define what to include in the output. Filter names and values are case-sensitive. Supported filters include the following: export-task-identifier - An identifier for the snapshot or cluster export task. s3-bucket - The Amazon S3 bucket the data is exported to. source-arn - The Amazon Resource Name (ARN) of the snapshot or cluster exported to Amazon S3. status - The status of the export task. Must be lowercase. Valid statuses are the following: canceled canceling complete failed in_progress starting</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeExportTasks request. If you specify this parameter, the response includes only records beyond the marker, up to the value specified by the MaxRecords parameter.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified value, a pagination token called a marker is included in the response. You can use the marker in a later DescribeExportTasks request to retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-S3Prefix">
    <td><CopyableCode code="S3Prefix" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 bucket prefix to use as the file name and path of the exported data.</td>
</tr>
<tr id="parameter-SourceArn">
    <td><CopyableCode code="SourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the snapshot or cluster exported to Amazon S3.</td>
</tr>
<tr id="parameter-SourceType">
    <td><CopyableCode code="SourceType" /></td>
    <td><code>string</code></td>
    <td>The type of source for the export.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_export_tasks"
    values={[
        { label: 'describe_export_tasks', value: 'describe_export_tasks' }
    ]}
>
<TabItem value="describe_export_tasks">

Returns information about a snapshot or cluster export to Amazon S3. This API operation supports pagination.

```sql
SELECT
export_only,
export_task_identifier,
failure_cause,
iam_role_arn,
kms_key_id,
percent_progress,
s3_bucket,
s3_prefix,
snapshot_time,
source_arn,
source_type,
status,
task_end_time,
task_start_time,
total_extracted_data_in_gb,
warning_message
FROM aws.rds.export_tasks
WHERE region = '{{ region }}' -- required
AND ExportTaskIdentifier = '{{ ExportTaskIdentifier }}'
AND SourceArn = '{{ SourceArn }}'
AND Filters = '{{ Filters }}'
AND Marker = '{{ Marker }}'
AND MaxRecords = '{{ MaxRecords }}'
AND SourceType = '{{ SourceType }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_export_task"
    values={[
        { label: 'cancel_export_task', value: 'cancel_export_task' },
        { label: 'start_export_task', value: 'start_export_task' }
    ]}
>
<TabItem value="cancel_export_task">

Cancels an export task in progress that is exporting a snapshot or cluster to Amazon S3. Any data that has already been written to the S3 bucket isn't removed.

```sql
EXEC aws.rds.export_tasks.cancel_export_task 
@ExportTaskIdentifier='{{ ExportTaskIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="start_export_task">

Starts an export of DB snapshot or DB cluster data to Amazon S3. The provided IAM role must have access to the S3 bucket. You can't export snapshot data from RDS Custom DB instances. For more information, see Supported Regions and DB engines for exporting snapshots to S3 in Amazon RDS. For more information on exporting DB snapshot data, see Exporting DB snapshot data to Amazon S3 in the Amazon RDS User Guide or Exporting DB cluster snapshot data to Amazon S3 in the Amazon Aurora User Guide. For more information on exporting DB cluster data, see Exporting DB cluster data to Amazon S3 in the Amazon Aurora User Guide.

```sql
EXEC aws.rds.export_tasks.start_export_task 
@ExportTaskIdentifier='{{ ExportTaskIdentifier }}' --required, 
@SourceArn='{{ SourceArn }}' --required, 
@S3BucketName='{{ S3BucketName }}' --required, 
@IamRoleArn='{{ IamRoleArn }}' --required, 
@KmsKeyId='{{ KmsKeyId }}' --required, 
@region='{{ region }}' --required, 
@S3Prefix='{{ S3Prefix }}', 
@ExportOnly='{{ ExportOnly }}'
;
```
</TabItem>
</Tabs>
