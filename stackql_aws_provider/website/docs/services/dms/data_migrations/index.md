--- 
title: data_migrations
hide_title: false
hide_table_of_contents: false
keywords:
  - data_migrations
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

Creates, updates, deletes, gets or lists a <code>data_migrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_migrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.data_migrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_migrations"
    values={[
        { label: 'describe_data_migrations', value: 'describe_data_migrations' }
    ]}
>
<TabItem value="describe_data_migrations">

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
    <td><CopyableCode code="DataMigrationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies this replication.</td>
</tr>
<tr>
    <td><CopyableCode code="DataMigrationCidrBlocks" /></td>
    <td><code>array</code></td>
    <td>The CIDR blocks of the endpoints for the data migration.</td>
</tr>
<tr>
    <td><CopyableCode code="DataMigrationCreateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UTC time when DMS created the data migration.</td>
</tr>
<tr>
    <td><CopyableCode code="DataMigrationEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UTC time when data migration ended.</td>
</tr>
<tr>
    <td><CopyableCode code="DataMigrationName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the data migration.</td>
</tr>
<tr>
    <td><CopyableCode code="DataMigrationSettings" /></td>
    <td><code>object</code></td>
    <td>Specifies CloudWatch settings and selection rules for the data migration.</td>
</tr>
<tr>
    <td><CopyableCode code="DataMigrationStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UTC time when DMS started the data migration.</td>
</tr>
<tr>
    <td><CopyableCode code="DataMigrationStatistics" /></td>
    <td><code>object</code></td>
    <td>Provides information about the data migration's run, including start and stop time, latency, and data migration progress.</td>
</tr>
<tr>
    <td><CopyableCode code="DataMigrationStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the data migration.</td>
</tr>
<tr>
    <td><CopyableCode code="DataMigrationType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the data migration is full-load only, change data capture (CDC) only, or full-load and CDC. (full-load, cdc, full-load-and-cdc)</td>
</tr>
<tr>
    <td><CopyableCode code="LastFailureMessage" /></td>
    <td><code>string</code></td>
    <td>Information about the data migration's most recent error or failure.</td>
</tr>
<tr>
    <td><CopyableCode code="MigrationProjectArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the data migration's associated migration project.</td>
</tr>
<tr>
    <td><CopyableCode code="PublicIpAddresses" /></td>
    <td><code>array</code></td>
    <td>The IP addresses of the endpoints for the data migration.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceAccessRoleArn" /></td>
    <td><code>string</code></td>
    <td>The IAM role that the data migration uses to access Amazon Web Services resources.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceDataSettings" /></td>
    <td><code>array</code></td>
    <td>Specifies information about the data migration's source data provider.</td>
</tr>
<tr>
    <td><CopyableCode code="StopReason" /></td>
    <td><code>string</code></td>
    <td>The reason the data migration last stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetDataSettings" /></td>
    <td><code>array</code></td>
    <td>Specifies information about the data migration's target data provider.</td>
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
    <td><a href="#describe_data_migrations"><CopyableCode code="describe_data_migrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about data migrations.</td>
</tr>
<tr>
    <td><a href="#create_data_migration"><CopyableCode code="create_data_migration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-DataMigrationType"><code>DataMigrationType</code></a>, <a href="#parameter-ServiceAccessRoleArn"><code>ServiceAccessRoleArn</code></a></td>
    <td></td>
    <td>Creates a data migration using the provided settings.</td>
</tr>
<tr>
    <td><a href="#modify_data_migration"><CopyableCode code="modify_data_migration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataMigrationIdentifier"><code>DataMigrationIdentifier</code></a></td>
    <td></td>
    <td>Modifies an existing DMS data migration.</td>
</tr>
<tr>
    <td><a href="#delete_data_migration"><CopyableCode code="delete_data_migration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified data migration.</td>
</tr>
<tr>
    <td><a href="#start_data_migration"><CopyableCode code="start_data_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataMigrationIdentifier"><code>DataMigrationIdentifier</code></a>, <a href="#parameter-StartType"><code>StartType</code></a></td>
    <td></td>
    <td>Starts the specified data migration.</td>
</tr>
<tr>
    <td><a href="#stop_data_migration"><CopyableCode code="stop_data_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataMigrationIdentifier"><code>DataMigrationIdentifier</code></a></td>
    <td></td>
    <td>Stops the specified data migration.</td>
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
    defaultValue="describe_data_migrations"
    values={[
        { label: 'describe_data_migrations', value: 'describe_data_migrations' }
    ]}
>
<TabItem value="describe_data_migrations">

Returns information about data migrations.

```sql
SELECT
DataMigrationArn,
DataMigrationCidrBlocks,
DataMigrationCreateTime,
DataMigrationEndTime,
DataMigrationName,
DataMigrationSettings,
DataMigrationStartTime,
DataMigrationStatistics,
DataMigrationStatus,
DataMigrationType,
LastFailureMessage,
MigrationProjectArn,
PublicIpAddresses,
ServiceAccessRoleArn,
SourceDataSettings,
StopReason,
TargetDataSettings
FROM aws.dms.data_migrations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_migration"
    values={[
        { label: 'create_data_migration', value: 'create_data_migration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_migration">

Creates a data migration using the provided settings.

```sql
INSERT INTO aws.dms.data_migrations (
DataMigrationName,
MigrationProjectIdentifier,
DataMigrationType,
ServiceAccessRoleArn,
EnableCloudwatchLogs,
SourceDataSettings,
TargetDataSettings,
NumberOfJobs,
Tags,
SelectionRules,
region
)
SELECT 
'{{ DataMigrationName }}',
'{{ MigrationProjectIdentifier }}' /* required */,
'{{ DataMigrationType }}' /* required */,
'{{ ServiceAccessRoleArn }}' /* required */,
{{ EnableCloudwatchLogs }},
'{{ SourceDataSettings }}',
'{{ TargetDataSettings }}',
{{ NumberOfJobs }},
'{{ Tags }}',
'{{ SelectionRules }}',
'{{ region }}'
RETURNING
DataMigration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_migrations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_migrations resource.
    - name: DataMigrationName
      value: "{{ DataMigrationName }}"
      description: |
        A user-friendly name for the data migration. Data migration names have the following constraints: Must begin with a letter, and can only contain ASCII letters, digits, and hyphens. Can't end with a hyphen or contain two consecutive hyphens. Length must be from 1 to 255 characters.
    - name: MigrationProjectIdentifier
      value: "{{ MigrationProjectIdentifier }}"
      description: |
        An identifier for the migration project.
    - name: DataMigrationType
      value: "{{ DataMigrationType }}"
      description: |
        Specifies if the data migration is full-load only, change data capture (CDC) only, or full-load and CDC.
      valid_values: ['full-load', 'cdc', 'full-load-and-cdc']
    - name: ServiceAccessRoleArn
      value: "{{ ServiceAccessRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) for the service access role that you want to use to create the data migration.
    - name: EnableCloudwatchLogs
      value: {{ EnableCloudwatchLogs }}
      description: |
        Specifies whether to enable CloudWatch logs for the data migration.
    - name: SourceDataSettings
      description: |
        Specifies information about the source data provider.
      value:
        - CDCStartPosition: "{{ CDCStartPosition }}"
          CDCStartTime: "{{ CDCStartTime }}"
          CDCStopTime: "{{ CDCStopTime }}"
          SlotName: "{{ SlotName }}"
    - name: TargetDataSettings
      description: |
        Specifies information about the target data provider.
      value:
        - TablePreparationMode: "{{ TablePreparationMode }}"
    - name: NumberOfJobs
      value: {{ NumberOfJobs }}
      description: |
        The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target.
    - name: Tags
      description: |
        One or more tags to be assigned to the data migration.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          ResourceArn: "{{ ResourceArn }}"
    - name: SelectionRules
      value: "{{ SelectionRules }}"
      description: |
        An optional JSON string specifying what tables, views, and schemas to include or exclude from the migration.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_data_migration"
    values={[
        { label: 'modify_data_migration', value: 'modify_data_migration' }
    ]}
>
<TabItem value="modify_data_migration">

Modifies an existing DMS data migration.

```sql
UPDATE aws.dms.data_migrations
SET 
DataMigrationIdentifier = '{{ DataMigrationIdentifier }}',
DataMigrationName = '{{ DataMigrationName }}',
EnableCloudwatchLogs = {{ EnableCloudwatchLogs }},
ServiceAccessRoleArn = '{{ ServiceAccessRoleArn }}',
DataMigrationType = '{{ DataMigrationType }}',
SourceDataSettings = '{{ SourceDataSettings }}',
TargetDataSettings = '{{ TargetDataSettings }}',
NumberOfJobs = {{ NumberOfJobs }},
SelectionRules = '{{ SelectionRules }}'
WHERE 
region = '{{ region }}' --required
AND DataMigrationIdentifier = '{{ DataMigrationIdentifier }}' --required
RETURNING
DataMigration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_migration"
    values={[
        { label: 'delete_data_migration', value: 'delete_data_migration' }
    ]}
>
<TabItem value="delete_data_migration">

Deletes the specified data migration.

```sql
DELETE FROM aws.dms.data_migrations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_data_migration"
    values={[
        { label: 'start_data_migration', value: 'start_data_migration' },
        { label: 'stop_data_migration', value: 'stop_data_migration' }
    ]}
>
<TabItem value="start_data_migration">

Starts the specified data migration.

```sql
EXEC aws.dms.data_migrations.start_data_migration 
@region='{{ region }}' --required 
@@json=
'{
"DataMigrationIdentifier": "{{ DataMigrationIdentifier }}", 
"StartType": "{{ StartType }}"
}'
;
```
</TabItem>
<TabItem value="stop_data_migration">

Stops the specified data migration.

```sql
EXEC aws.dms.data_migrations.stop_data_migration 
@region='{{ region }}' --required 
@@json=
'{
"DataMigrationIdentifier": "{{ DataMigrationIdentifier }}"
}'
;
```
</TabItem>
</Tabs>
