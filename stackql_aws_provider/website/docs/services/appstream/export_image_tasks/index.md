--- 
title: export_image_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - export_image_tasks
  - appstream
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

Creates, updates, deletes, gets or lists an <code>export_image_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="export_image_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.export_image_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_export_image_task"
    values={[
        { label: 'get_export_image_task', value: 'get_export_image_task' }
    ]}
>
<TabItem value="get_export_image_task">

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
    <td><CopyableCode code="AmiDescription" /></td>
    <td><code>string</code></td>
    <td>The description that will be applied to the exported EC2 AMI.</td>
</tr>
<tr>
    <td><CopyableCode code="AmiId" /></td>
    <td><code>string</code></td>
    <td>The ID of the EC2 AMI that was created by this export task. This field is only populated when the task completes successfully. (pattern: &lt;code&gt;^ami-&#91;a-z0-9&#93;&#123;8,17&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AmiName" /></td>
    <td><code>string</code></td>
    <td>The name of the EC2 AMI that will be created by this export task. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9().\-/_&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the export image task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorDetails" /></td>
    <td><code>array</code></td>
    <td>Details about any errors that occurred during the export process. This field is only populated when the task fails.</td>
</tr>
<tr>
    <td><CopyableCode code="ImageArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the WorkSpaces Applications image being exported. (pattern: &lt;code&gt;^arn:aws(?:\-cn|\-iso\-b|\-iso|\-us\-gov)?:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.\\-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the export image task, such as PENDING, RUNNING, COMPLETED, or FAILED. (EXPORTING, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="TagSpecifications" /></td>
    <td><code>object</code></td>
    <td>The tags that will be applied to the exported EC2 AMI.</td>
</tr>
<tr>
    <td><CopyableCode code="TaskId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the export image task. Use this ID to track the task's progress and retrieve its details. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_export_image_task"><CopyableCode code="get_export_image_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an export image task, including its current state, progress, and any error details.</td>
</tr>
<tr>
    <td><a href="#create_export_image_task"><CopyableCode code="create_export_image_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ImageName"><code>ImageName</code></a>, <a href="#parameter-AmiName"><code>AmiName</code></a>, <a href="#parameter-IamRoleArn"><code>IamRoleArn</code></a></td>
    <td></td>
    <td>Creates a task to export a WorkSpaces Applications image to an EC2 AMI. This allows you to use your customized WorkSpaces Applications images with other AWS services or for backup purposes.</td>
</tr>
<tr>
    <td><a href="#list_export_image_tasks"><CopyableCode code="list_export_image_tasks" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists export image tasks, with optional filtering and pagination. Use this operation to monitor the status of multiple export operations.</td>
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
    defaultValue="get_export_image_task"
    values={[
        { label: 'get_export_image_task', value: 'get_export_image_task' }
    ]}
>
<TabItem value="get_export_image_task">

Retrieves information about an export image task, including its current state, progress, and any error details.

```sql
SELECT
AmiDescription,
AmiId,
AmiName,
CreatedDate,
ErrorDetails,
ImageArn,
State,
TagSpecifications,
TaskId
FROM aws.appstream.export_image_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_export_image_task"
    values={[
        { label: 'create_export_image_task', value: 'create_export_image_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_export_image_task">

Creates a task to export a WorkSpaces Applications image to an EC2 AMI. This allows you to use your customized WorkSpaces Applications images with other AWS services or for backup purposes.

```sql
INSERT INTO aws.appstream.export_image_tasks (
ImageName,
AmiName,
IamRoleArn,
TagSpecifications,
AmiDescription,
region
)
SELECT 
'{{ ImageName }}' /* required */,
'{{ AmiName }}' /* required */,
'{{ IamRoleArn }}' /* required */,
'{{ TagSpecifications }}',
'{{ AmiDescription }}',
'{{ region }}'
RETURNING
ExportImageTask
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: export_image_tasks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the export_image_tasks resource.
    - name: ImageName
      value: "{{ ImageName }}"
      description: |
        The name of the WorkSpaces Applications image to export. The image must be in an available state and owned by your account.
    - name: AmiName
      value: "{{ AmiName }}"
      description: |
        The name for the exported EC2 AMI. This is a required field that must be unique within your account and region.
    - name: IamRoleArn
      value: "{{ IamRoleArn }}"
      description: |
        The ARN of the IAM role that allows WorkSpaces Applications to create the AMI. The role must have permissions to copy images, describe images, and create tags, with a trust relationship allowing appstream.amazonaws.com to assume the role.
    - name: TagSpecifications
      value: "{{ TagSpecifications }}"
      description: |
        The tags to apply to the exported AMI. These tags help you organize and manage your EC2 AMIs.
    - name: AmiDescription
      value: "{{ AmiDescription }}"
      description: |
        An optional description for the exported AMI. This description will be applied to the resulting EC2 AMI.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_export_image_tasks"
    values={[
        { label: 'list_export_image_tasks', value: 'list_export_image_tasks' }
    ]}
>
<TabItem value="list_export_image_tasks">

Lists export image tasks, with optional filtering and pagination. Use this operation to monitor the status of multiple export operations.

```sql
EXEC aws.appstream.export_image_tasks.list_export_image_tasks 
@region='{{ region }}' --required 
@@json=
'{
"Filters": "{{ Filters }}", 
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}"
}'
;
```
</TabItem>
</Tabs>
