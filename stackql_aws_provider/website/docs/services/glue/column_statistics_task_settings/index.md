--- 
title: column_statistics_task_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - column_statistics_task_settings
  - glue
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

Creates, updates, deletes, gets or lists a <code>column_statistics_task_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="column_statistics_task_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.column_statistics_task_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_column_statistics_task_settings"
    values={[
        { label: 'get_column_statistics_task_settings', value: 'get_column_statistics_task_settings' }
    ]}
>
<TabItem value="get_column_statistics_task_settings">

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
    <td><CopyableCode code="catalog_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Data Catalog in which the database resides. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="column_name_list" /></td>
    <td><code>array</code></td>
    <td>A list of column names for which to run statistics.</td>
</tr>
<tr>
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the database where the table resides.</td>
</tr>
<tr>
    <td><CopyableCode code="last_execution_attempt" /></td>
    <td><code>object</code></td>
    <td>The last ExecutionAttempt for the column statistics task run.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The role used for running the column statistics.</td>
</tr>
<tr>
    <td><CopyableCode code="sample_size" /></td>
    <td><code>number (double)</code></td>
    <td>The percentage of data to sample.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>A schedule for running the column statistics, specified in CRON syntax.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_type" /></td>
    <td><code>string</code></td>
    <td>The type of schedule for a column statistics task. Possible values may be CRON or AUTO. (CRON, AUTO)</td>
</tr>
<tr>
    <td><CopyableCode code="security_configuration" /></td>
    <td><code>string</code></td>
    <td>Name of the security configuration that is used to encrypt CloudWatch logs.</td>
</tr>
<tr>
    <td><CopyableCode code="setting_source" /></td>
    <td><code>string</code></td>
    <td>The source of setting the column statistics task. Possible values may be CATALOG or TABLE. (CATALOG, TABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="table_name" /></td>
    <td><code>string</code></td>
    <td>The name of the table for which to generate column statistics.</td>
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
    <td><a href="#get_column_statistics_task_settings"><CopyableCode code="get_column_statistics_task_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets settings for a column statistics task.</td>
</tr>
<tr>
    <td><a href="#create_column_statistics_task_settings"><CopyableCode code="create_column_statistics_task_settings" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-Role"><code>Role</code></a></td>
    <td></td>
    <td>Creates settings for a column statistics task.</td>
</tr>
<tr>
    <td><a href="#update_column_statistics_task_settings"><CopyableCode code="update_column_statistics_task_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a></td>
    <td></td>
    <td>Updates settings for a column statistics task.</td>
</tr>
<tr>
    <td><a href="#delete_column_statistics_task_settings"><CopyableCode code="delete_column_statistics_task_settings" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes settings for a column statistics task.</td>
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
    defaultValue="get_column_statistics_task_settings"
    values={[
        { label: 'get_column_statistics_task_settings', value: 'get_column_statistics_task_settings' }
    ]}
>
<TabItem value="get_column_statistics_task_settings">

Gets settings for a column statistics task.

```sql
SELECT
catalog_id,
column_name_list,
database_name,
last_execution_attempt,
role,
sample_size,
schedule,
schedule_type,
security_configuration,
setting_source,
table_name
FROM aws.glue.column_statistics_task_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_column_statistics_task_settings"
    values={[
        { label: 'create_column_statistics_task_settings', value: 'create_column_statistics_task_settings' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_column_statistics_task_settings">

Creates settings for a column statistics task.

```sql
INSERT INTO aws.glue.column_statistics_task_settings (
DatabaseName,
TableName,
Role,
Schedule,
ColumnNameList,
SampleSize,
CatalogID,
SecurityConfiguration,
Tags,
region
)
SELECT 
'{{ DatabaseName }}' /* required */,
'{{ TableName }}' /* required */,
'{{ Role }}' /* required */,
'{{ Schedule }}',
'{{ ColumnNameList }}',
{{ SampleSize }},
'{{ CatalogID }}',
'{{ SecurityConfiguration }}',
'{{ Tags }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: column_statistics_task_settings
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the column_statistics_task_settings resource.
    - name: DatabaseName
      value: "{{ DatabaseName }}"
      description: |
        The name of the database where the table resides.
    - name: TableName
      value: "{{ TableName }}"
      description: |
        The name of the table for which to generate column statistics.
    - name: Role
      value: "{{ Role }}"
      description: |
        The role used for running the column statistics.
    - name: Schedule
      value: "{{ Schedule }}"
      description: |
        A schedule for running the column statistics, specified in CRON syntax.
    - name: ColumnNameList
      value:
        - "{{ ColumnNameList }}"
      description: |
        A list of column names for which to run statistics.
    - name: SampleSize
      value: {{ SampleSize }}
      description: |
        The percentage of data to sample.
    - name: CatalogID
      value: "{{ CatalogID }}"
      description: |
        The ID of the Data Catalog in which the database resides.
    - name: SecurityConfiguration
      value: "{{ SecurityConfiguration }}"
      description: |
        Name of the security configuration that is used to encrypt CloudWatch logs.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A map of tags.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_column_statistics_task_settings"
    values={[
        { label: 'update_column_statistics_task_settings', value: 'update_column_statistics_task_settings' }
    ]}
>
<TabItem value="update_column_statistics_task_settings">

Updates settings for a column statistics task.

```sql
UPDATE aws.glue.column_statistics_task_settings
SET 
DatabaseName = '{{ DatabaseName }}',
TableName = '{{ TableName }}',
Role = '{{ Role }}',
Schedule = '{{ Schedule }}',
ColumnNameList = '{{ ColumnNameList }}',
SampleSize = {{ SampleSize }},
CatalogID = '{{ CatalogID }}',
SecurityConfiguration = '{{ SecurityConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND DatabaseName = '{{ DatabaseName }}' --required
AND TableName = '{{ TableName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_column_statistics_task_settings"
    values={[
        { label: 'delete_column_statistics_task_settings', value: 'delete_column_statistics_task_settings' }
    ]}
>
<TabItem value="delete_column_statistics_task_settings">

Deletes settings for a column statistics task.

```sql
DELETE FROM aws.glue.column_statistics_task_settings
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
