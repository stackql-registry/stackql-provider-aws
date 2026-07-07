--- 
title: store_image_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - store_image_tasks
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

Creates, updates, deletes, gets or lists a <code>store_image_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="store_image_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.store_image_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_store_image_tasks"
    values={[
        { label: 'describe_store_image_tasks', value: 'describe_store_image_tasks' }
    ]}
>
<TabItem value="describe_store_image_tasks">

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
    <td><CopyableCode code="AmiId" /></td>
    <td><code>string</code></td>
    <td>The ID of the AMI that is being stored.</td>
</tr>
<tr>
    <td><CopyableCode code="Bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon S3 bucket that contains the stored AMI object.</td>
</tr>
<tr>
    <td><CopyableCode code="ProgressPercentage" /></td>
    <td><code>integer</code></td>
    <td>The progress of the task as a percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="S3objectKey" /></td>
    <td><code>string</code></td>
    <td>The name of the stored AMI object in the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="StoreTaskFailureReason" /></td>
    <td><code>string</code></td>
    <td>If the tasks fails, the reason for the failure is returned. If the task succeeds, null is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="StoreTaskState" /></td>
    <td><code>string</code></td>
    <td>The state of the store task (InProgress, Completed, or Failed).</td>
</tr>
<tr>
    <td><CopyableCode code="TaskStartTime" /></td>
    <td><code>string</code></td>
    <td>The time the task started.</td>
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
    <td><a href="#describe_store_image_tasks"><CopyableCode code="describe_store_image_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes the progress of the AMI store tasks. You can describe the store tasks for specified AMIs. If you don't specify the AMIs, you get a paginated list of store tasks from the last 31 days. For each AMI task, the response indicates if the task is InProgress, Completed, or Failed. For tasks InProgress, the response shows the estimated progress as a percentage. Tasks are listed in reverse chronological order. Currently, only tasks from the past 31 days can be viewed. To use this API, you must have the required permissions. For more information, see Permissions for storing and restoring AMIs using S3 in the Amazon EC2 User Guide. For more information, see Store and restore an AMI using S3 in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#create_store_image_task"><CopyableCode code="create_store_image_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Bucket"><code>Bucket</code></a>, <a href="#parameter-S3ObjectTag"><code>S3ObjectTag</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Stores an AMI as a single object in an Amazon S3 bucket. To use this API, you must have the required permissions. For more information, see Permissions for storing and restoring AMIs using S3 in the Amazon EC2 User Guide. For more information, see Store and restore an AMI using S3 in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-ImageId">
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>The ID of the AMI.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Bucket">
    <td><CopyableCode code="Bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon S3 bucket in which the AMI object will be stored. The bucket must be in the Region in which the request is being made. The AMI object appears in the bucket only after the upload task has completed.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. task-state - Returns tasks in a certain state (InProgress | Completed | Failed) bucket - Returns task information for tasks that targeted a specific bucket. For the filter value, specify the bucket name. When you specify the ImageIds parameter, any filters that you specify are ignored. To use the filters, you must remove the ImageIds parameter.</td>
</tr>
<tr id="parameter-ImageId">
    <td><CopyableCode code="ImageId" /></td>
    <td><code>array</code></td>
    <td>The AMI IDs for which to show progress. Up to 20 AMI IDs can be included in a request.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination. You cannot specify this parameter and the ImageIds parameter in the same call.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-S3ObjectTag">
    <td><CopyableCode code="S3ObjectTag" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the AMI object that will be stored in the Amazon S3 bucket.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_store_image_tasks"
    values={[
        { label: 'describe_store_image_tasks', value: 'describe_store_image_tasks' }
    ]}
>
<TabItem value="describe_store_image_tasks">

Describes the progress of the AMI store tasks. You can describe the store tasks for specified AMIs. If you don't specify the AMIs, you get a paginated list of store tasks from the last 31 days. For each AMI task, the response indicates if the task is InProgress, Completed, or Failed. For tasks InProgress, the response shows the estimated progress as a percentage. Tasks are listed in reverse chronological order. Currently, only tasks from the past 31 days can be viewed. To use this API, you must have the required permissions. For more information, see Permissions for storing and restoring AMIs using S3 in the Amazon EC2 User Guide. For more information, see Store and restore an AMI using S3 in the Amazon EC2 User Guide.

```sql
SELECT
AmiId,
Bucket,
ProgressPercentage,
S3objectKey,
StoreTaskFailureReason,
StoreTaskState,
TaskStartTime
FROM aws.ec2.store_image_tasks
WHERE region = '{{ region }}' -- required
AND ImageId = '{{ ImageId }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_store_image_task"
    values={[
        { label: 'create_store_image_task', value: 'create_store_image_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_store_image_task">

Stores an AMI as a single object in an Amazon S3 bucket. To use this API, you must have the required permissions. For more information, see Permissions for storing and restoring AMIs using S3 in the Amazon EC2 User Guide. For more information, see Store and restore an AMI using S3 in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.store_image_tasks (
ImageId,
region,
Bucket,
S3ObjectTag,
DryRun
)
SELECT 
'{{ ImageId }}',
'{{ region }}',
'{{ Bucket }}',
'{{ S3ObjectTag }}',
'{{ DryRun }}'
RETURNING
ObjectKey
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: store_image_tasks
  props:
    - name: ImageId
      value: "{{ ImageId }}"
      description: Required parameter for the store_image_tasks resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the store_image_tasks resource.
    - name: Bucket
      value: "{{ Bucket }}"
      description: The name of the Amazon S3 bucket in which the AMI object will be stored. The bucket must be in the Region in which the request is being made. The AMI object appears in the bucket only after the upload task has completed.
      description: The name of the Amazon S3 bucket in which the AMI object will be stored. The bucket must be in the Region in which the request is being made. The AMI object appears in the bucket only after the upload task has completed.
    - name: S3ObjectTag
      value: "{{ S3ObjectTag }}"
      description: The tags to apply to the AMI object that will be stored in the Amazon S3 bucket.
      description: The tags to apply to the AMI object that will be stored in the Amazon S3 bucket.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>
