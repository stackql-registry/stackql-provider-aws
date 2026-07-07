--- 
title: export_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - export_tasks
  - ec2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.export_tasks" /></td></tr>
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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the resource being exported.</td>
</tr>
<tr>
    <td><CopyableCode code="ExportTaskId" /></td>
    <td><code>string</code></td>
    <td>The ID of the export task.</td>
</tr>
<tr>
    <td><CopyableCode code="ExportToS3Task" /></td>
    <td><code>string</code></td>
    <td>Information about the export task.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceExportDetails" /></td>
    <td><code>string</code></td>
    <td>Information about the instance to export.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the export task.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>The status message related to the export task.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags for the export task.</td>
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
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-ExportTaskId"><code>ExportTaskId</code></a></td>
    <td>Describes the specified export instance tasks or all of your export instance tasks.</td>
</tr>
<tr>
    <td><a href="#create_instance_export_task"><CopyableCode code="create_instance_export_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-TargetEnvironment"><code>TargetEnvironment</code></a>, <a href="#parameter-ExportToS3"><code>ExportToS3</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-Description"><code>Description</code></a></td>
    <td>Exports a running or stopped instance to an Amazon S3 bucket. For information about the prerequisites for your Amazon S3 bucket, supported operating systems, image formats, and known limitations for the types of instances you can export, see Exporting an instance as a VM Using VM Import/Export in the VM Import/Export User Guide.</td>
</tr>
<tr>
    <td><a href="#cancel_export_task"><CopyableCode code="cancel_export_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ExportTaskId"><code>ExportTaskId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels an active export task. The request removes all artifacts of the export, including any partially-created Amazon S3 objects. If the export task is complete or is in the process of transferring the final disk image, the command fails and returns an error.</td>
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
<tr id="parameter-ExportTaskId">
    <td><CopyableCode code="ExportTaskId" /></td>
    <td><code>string</code></td>
    <td>The ID of the export task. This is the ID returned by the CreateInstanceExportTask and ExportImage operations.</td>
</tr>
<tr id="parameter-ExportToS3">
    <td><CopyableCode code="ExportToS3" /></td>
    <td><code>object</code></td>
    <td>The format and location for an export instance task.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr id="parameter-TargetEnvironment">
    <td><CopyableCode code="TargetEnvironment" /></td>
    <td><code>string</code></td>
    <td>The target virtualization environment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description for the conversion task or the resource being exported. The maximum length is 255 characters.</td>
</tr>
<tr id="parameter-ExportTaskId">
    <td><CopyableCode code="ExportTaskId" /></td>
    <td><code>array</code></td>
    <td>The export task IDs.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>the filters for the export tasks.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the export instance task during creation.</td>
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

Describes the specified export instance tasks or all of your export instance tasks.

```sql
SELECT
Description,
ExportTaskId,
ExportToS3Task,
InstanceExportDetails,
State,
StatusMessage,
Tags
FROM aws.ec2.export_tasks
WHERE region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND ExportTaskId = '{{ ExportTaskId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_instance_export_task"
    values={[
        { label: 'create_instance_export_task', value: 'create_instance_export_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_instance_export_task">

Exports a running or stopped instance to an Amazon S3 bucket. For information about the prerequisites for your Amazon S3 bucket, supported operating systems, image formats, and known limitations for the types of instances you can export, see Exporting an instance as a VM Using VM Import/Export in the VM Import/Export User Guide.

```sql
INSERT INTO aws.ec2.export_tasks (
InstanceId,
TargetEnvironment,
ExportToS3,
region,
TagSpecification,
Description
)
SELECT 
'{{ InstanceId }}',
'{{ TargetEnvironment }}',
'{{ ExportToS3 }}',
'{{ region }}',
'{{ TagSpecification }}',
'{{ Description }}'
RETURNING
Description,
ExportTaskId,
ExportToS3Task,
InstanceExportDetails,
State,
StatusMessage,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: export_tasks
  props:
    - name: InstanceId
      value: "{{ InstanceId }}"
      description: Required parameter for the export_tasks resource.
    - name: TargetEnvironment
      value: "{{ TargetEnvironment }}"
      description: Required parameter for the export_tasks resource.
    - name: ExportToS3
      value: "{{ ExportToS3 }}"
      description: Required parameter for the export_tasks resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the export_tasks resource.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the export instance task during creation.
      description: The tags to apply to the export instance task during creation.
    - name: Description
      value: "{{ Description }}"
      description: A description for the conversion task or the resource being exported. The maximum length is 255 characters.
      description: A description for the conversion task or the resource being exported. The maximum length is 255 characters.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_export_task"
    values={[
        { label: 'cancel_export_task', value: 'cancel_export_task' }
    ]}
>
<TabItem value="cancel_export_task">

Cancels an active export task. The request removes all artifacts of the export, including any partially-created Amazon S3 objects. If the export task is complete or is in the process of transferring the final disk image, the command fails and returns an error.

```sql
EXEC aws.ec2.export_tasks.cancel_export_task 
@ExportTaskId='{{ ExportTaskId }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
