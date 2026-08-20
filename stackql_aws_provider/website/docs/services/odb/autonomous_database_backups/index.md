--- 
title: autonomous_database_backups
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_database_backups
  - odb
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

Creates, updates, deletes, gets or lists an <code>autonomous_database_backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_database_backups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.autonomous_database_backups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_autonomous_database_backup"
    values={[
        { label: 'get_autonomous_database_backup', value: 'get_autonomous_database_backup' },
        { label: 'list_autonomous_database_backups', value: 'list_autonomous_database_backups' }
    ]}
>
<TabItem value="get_autonomous_database_backup">

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
    <td><CopyableCode code="autonomous_database_backup_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Autonomous Database backup. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="autonomous_database_backup_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Autonomous Database backup. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="autonomous_database_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Autonomous Database that the backup was created from. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="db_version" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database software version of the Autonomous Database backup.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name of the Autonomous Database backup.</td>
</tr>
<tr>
    <td><CopyableCode code="is_automatic" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the backup was created automatically.</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud Identifier (OCID) of the Autonomous Database backup.</td>
</tr>
<tr>
    <td><CopyableCode code="retention_period_in_days" /></td>
    <td><code>integer</code></td>
    <td>The retention period, in days, for the Autonomous Database backup.</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_tbs" /></td>
    <td><code>number (double)</code></td>
    <td>The size of the Autonomous Database backup, in terabytes (TB).</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Autonomous Database backup. (ACTIVE, CREATING, UPDATING, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current status of the Autonomous Database backup, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="time_available_till" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time until which the Autonomous Database backup is available for restore.</td>
</tr>
<tr>
    <td><CopyableCode code="time_ended" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Autonomous Database backup ended.</td>
</tr>
<tr>
    <td><CopyableCode code="time_started" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Autonomous Database backup started.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the Autonomous Database backup. (INCREMENTAL, FULL, LONGTERM, VIRTUAL_FULL, CUMULATIVE_INCREMENTAL, ROLL_FORWARD_IMAGE_COPY)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_autonomous_database_backups">

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
    <td><CopyableCode code="autonomous_database_backup_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Autonomous Database backup. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="autonomous_database_backup_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Autonomous Database backup. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="autonomous_database_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Autonomous Database that the backup was created from. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="db_version" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database software version of the Autonomous Database backup.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name of the Autonomous Database backup.</td>
</tr>
<tr>
    <td><CopyableCode code="is_automatic" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the backup was created automatically.</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud Identifier (OCID) of the Autonomous Database backup.</td>
</tr>
<tr>
    <td><CopyableCode code="retention_period_in_days" /></td>
    <td><code>integer</code></td>
    <td>The retention period, in days, for the Autonomous Database backup.</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_tbs" /></td>
    <td><code>number (double)</code></td>
    <td>The size of the Autonomous Database backup, in terabytes (TB).</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Autonomous Database backup. (ACTIVE, CREATING, UPDATING, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current status of the Autonomous Database backup, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="time_available_till" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time until which the Autonomous Database backup is available for restore.</td>
</tr>
<tr>
    <td><CopyableCode code="time_ended" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Autonomous Database backup ended.</td>
</tr>
<tr>
    <td><CopyableCode code="time_started" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Autonomous Database backup started.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the Autonomous Database backup. (INCREMENTAL, FULL, LONGTERM, VIRTUAL_FULL, CUMULATIVE_INCREMENTAL, ROLL_FORWARD_IMAGE_COPY)</td>
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
    <td><a href="#get_autonomous_database_backup"><CopyableCode code="get_autonomous_database_backup" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specific Autonomous Database backup.</td>
</tr>
<tr>
    <td><a href="#list_autonomous_database_backups"><CopyableCode code="list_autonomous_database_backups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the backups of the specified Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#create_autonomous_database_backup"><CopyableCode code="create_autonomous_database_backup" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a></td>
    <td></td>
    <td>Creates a new backup of the specified Autonomous Database.</td>
</tr>
<tr>
    <td><a href="#update_autonomous_database_backup"><CopyableCode code="update_autonomous_database_backup" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-autonomousDatabaseBackupId"><code>autonomousDatabaseBackupId</code></a></td>
    <td></td>
    <td>Updates the properties of an Autonomous Database backup.</td>
</tr>
<tr>
    <td><a href="#delete_autonomous_database_backup"><CopyableCode code="delete_autonomous_database_backup" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Autonomous Database backup.</td>
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
    defaultValue="get_autonomous_database_backup"
    values={[
        { label: 'get_autonomous_database_backup', value: 'get_autonomous_database_backup' },
        { label: 'list_autonomous_database_backups', value: 'list_autonomous_database_backups' }
    ]}
>
<TabItem value="get_autonomous_database_backup">

Gets information about a specific Autonomous Database backup.

```sql
SELECT
autonomous_database_backup_arn,
autonomous_database_backup_id,
autonomous_database_id,
db_version,
display_name,
is_automatic,
ocid,
retention_period_in_days,
size_in_tbs,
status,
status_reason,
time_available_till,
time_ended,
time_started,
type_
FROM aws.odb.autonomous_database_backups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_autonomous_database_backups">

Lists the backups of the specified Autonomous Database.

```sql
SELECT
autonomous_database_backup_arn,
autonomous_database_backup_id,
autonomous_database_id,
db_version,
display_name,
is_automatic,
ocid,
retention_period_in_days,
size_in_tbs,
status,
status_reason,
time_available_till,
time_ended,
time_started,
type_
FROM aws.odb.autonomous_database_backups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_autonomous_database_backup"
    values={[
        { label: 'create_autonomous_database_backup', value: 'create_autonomous_database_backup' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_autonomous_database_backup">

Creates a new backup of the specified Autonomous Database.

```sql
INSERT INTO aws.odb.autonomous_database_backups (
autonomousDatabaseId,
displayName,
retentionPeriodInDays,
clientToken,
tags,
region
)
SELECT 
'{{ autonomousDatabaseId }}' /* required */,
'{{ displayName }}',
{{ retentionPeriodInDays }},
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
autonomous_database_backup_id,
display_name,
status,
status_reason
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: autonomous_database_backups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the autonomous_database_backups resource.
    - name: autonomousDatabaseId
      value: "{{ autonomousDatabaseId }}"
      description: |
        The unique identifier of the Autonomous Database to back up.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-friendly name for the Autonomous Database backup.
    - name: retentionPeriodInDays
      value: {{ retentionPeriodInDays }}
      description: |
        The retention period, in days, for the Autonomous Database backup.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A client-provided token to ensure the idempotency of the request.
    - name: tags
      value: "{{ tags }}"
      description: |
        The list of resource tags to apply to the Autonomous Database backup. Each tag is a key-value pair with no predefined name, type, or namespace.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_autonomous_database_backup"
    values={[
        { label: 'update_autonomous_database_backup', value: 'update_autonomous_database_backup' }
    ]}
>
<TabItem value="update_autonomous_database_backup">

Updates the properties of an Autonomous Database backup.

```sql
UPDATE aws.odb.autonomous_database_backups
SET 
autonomousDatabaseBackupId = '{{ autonomousDatabaseBackupId }}',
retentionPeriodInDays = {{ retentionPeriodInDays }}
WHERE 
region = '{{ region }}' --required
AND autonomousDatabaseBackupId = '{{ autonomousDatabaseBackupId }}' --required
RETURNING
autonomous_database_backup_id,
display_name,
status,
status_reason;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_autonomous_database_backup"
    values={[
        { label: 'delete_autonomous_database_backup', value: 'delete_autonomous_database_backup' }
    ]}
>
<TabItem value="delete_autonomous_database_backup">

Deletes the specified Autonomous Database backup.

```sql
DELETE FROM aws.odb.autonomous_database_backups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
