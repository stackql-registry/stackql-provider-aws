--- 
title: application_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - application_snapshots
  - kinesisanalyticsv2
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

Creates, updates, deletes, gets or lists an <code>application_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesisanalyticsv2.application_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_application_snapshot"
    values={[
        { label: 'describe_application_snapshot', value: 'describe_application_snapshot' },
        { label: 'list_application_snapshots', value: 'list_application_snapshots' }
    ]}
>
<TabItem value="describe_application_snapshot">

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
    <td><CopyableCode code="ApplicationEncryptionConfigurationDescription" /></td>
    <td><code>object</code></td>
    <td>Specifies the encryption settings of data at rest for the application snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="ApplicationVersionId" /></td>
    <td><code>integer (int64)</code></td>
    <td>The current application version ID when the snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="RuntimeEnvironment" /></td>
    <td><code>string</code></td>
    <td>The Flink Runtime for the application snapshot. (SQL-1_0, FLINK-1_6, FLINK-1_8, ZEPPELIN-FLINK-1_0, FLINK-1_11, FLINK-1_13, ZEPPELIN-FLINK-2_0, FLINK-1_15, ZEPPELIN-FLINK-3_0, FLINK-1_18, FLINK-1_19, FLINK-1_20, FLINK-2_2)</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotCreationTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the application snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotName" /></td>
    <td><code>string</code></td>
    <td>The identifier for the application snapshot. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the application snapshot. (CREATING, READY, DELETING, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_application_snapshots">

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
    <td><CopyableCode code="ApplicationEncryptionConfigurationDescription" /></td>
    <td><code>object</code></td>
    <td>Specifies the encryption settings of data at rest for the application snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="ApplicationVersionId" /></td>
    <td><code>integer (int64)</code></td>
    <td>The current application version ID when the snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="RuntimeEnvironment" /></td>
    <td><code>string</code></td>
    <td>The Flink Runtime for the application snapshot. (SQL-1_0, FLINK-1_6, FLINK-1_8, ZEPPELIN-FLINK-1_0, FLINK-1_11, FLINK-1_13, ZEPPELIN-FLINK-2_0, FLINK-1_15, ZEPPELIN-FLINK-3_0, FLINK-1_18, FLINK-1_19, FLINK-1_20, FLINK-2_2)</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotCreationTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the application snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotName" /></td>
    <td><code>string</code></td>
    <td>The identifier for the application snapshot. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the application snapshot. (CREATING, READY, DELETING, FAILED)</td>
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
    <td><a href="#describe_application_snapshot"><CopyableCode code="describe_application_snapshot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a snapshot of application state data.</td>
</tr>
<tr>
    <td><a href="#list_application_snapshots"><CopyableCode code="list_application_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists information about the current application snapshots.</td>
</tr>
<tr>
    <td><a href="#create_application_snapshot"><CopyableCode code="create_application_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-SnapshotName"><code>SnapshotName</code></a></td>
    <td></td>
    <td>Creates a snapshot of the application's state data.</td>
</tr>
<tr>
    <td><a href="#delete_application_snapshot"><CopyableCode code="delete_application_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a snapshot of application state.</td>
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
    defaultValue="describe_application_snapshot"
    values={[
        { label: 'describe_application_snapshot', value: 'describe_application_snapshot' },
        { label: 'list_application_snapshots', value: 'list_application_snapshots' }
    ]}
>
<TabItem value="describe_application_snapshot">

Returns information about a snapshot of application state data.

```sql
SELECT
ApplicationEncryptionConfigurationDescription,
ApplicationVersionId,
RuntimeEnvironment,
SnapshotCreationTimestamp,
SnapshotName,
SnapshotStatus
FROM aws.kinesisanalyticsv2.application_snapshots
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_application_snapshots">

Lists information about the current application snapshots.

```sql
SELECT
ApplicationEncryptionConfigurationDescription,
ApplicationVersionId,
RuntimeEnvironment,
SnapshotCreationTimestamp,
SnapshotName,
SnapshotStatus
FROM aws.kinesisanalyticsv2.application_snapshots
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application_snapshot"
    values={[
        { label: 'create_application_snapshot', value: 'create_application_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application_snapshot">

Creates a snapshot of the application's state data.

```sql
INSERT INTO aws.kinesisanalyticsv2.application_snapshots (
ApplicationName,
SnapshotName,
region
)
SELECT 
'{{ ApplicationName }}' /* required */,
'{{ SnapshotName }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: application_snapshots
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the application_snapshots resource.
    - name: ApplicationName
      value: "{{ ApplicationName }}"
      description: |
        The name of an existing application
    - name: SnapshotName
      value: "{{ SnapshotName }}"
      description: |
        An identifier for the application snapshot.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application_snapshot"
    values={[
        { label: 'delete_application_snapshot', value: 'delete_application_snapshot' }
    ]}
>
<TabItem value="delete_application_snapshot">

Deletes a snapshot of application state.

```sql
DELETE FROM aws.kinesisanalyticsv2.application_snapshots
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
