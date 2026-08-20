--- 
title: replace_root_volume_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - replace_root_volume_tasks
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

Creates, updates, deletes, gets or lists a <code>replace_root_volume_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replace_root_volume_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.replace_root_volume_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_replace_root_volume_tasks"
    values={[
        { label: 'describe_replace_root_volume_tasks', value: 'describe_replace_root_volume_tasks' }
    ]}
>
<TabItem value="describe_replace_root_volume_tasks">

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
    <td><CopyableCode code="complete_time" /></td>
    <td><code>string</code></td>
    <td>The time the task completed.</td>
</tr>
<tr>
    <td><CopyableCode code="delete_replaced_root_volume" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the original root volume is to be deleted after the root volume replacement task completes.</td>
</tr>
<tr>
    <td><CopyableCode code="image_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the AMI used to create the replacement root volume.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance for which the root volume replacement task was created.</td>
</tr>
<tr>
    <td><CopyableCode code="replace_root_volume_task_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the root volume replacement task.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the snapshot used to create the replacement root volume.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string</code></td>
    <td>The time the task was started.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the task.</td>
</tr>
<tr>
    <td><CopyableCode code="task_state" /></td>
    <td><code>string</code></td>
    <td>The state of the task. The task can be in one of the following states: pending - the replacement volume is being created. in-progress - the original volume is being detached and the replacement volume is being attached. succeeded - the replacement volume has been successfully attached to the instance and the instance is available. failing - the replacement task is in the process of failing. failed - the replacement task has failed but the original root volume is still attached. failing-detached - the replacement task is in the process of failing. The instance might have no root volume attached. failed-detached - the replacement task has failed and the instance has no root volume attached.</td>
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
    <td><a href="#describe_replace_root_volume_tasks"><CopyableCode code="describe_replace_root_volume_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReplaceRootVolumeTaskId"><code>ReplaceRootVolumeTaskId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes a root volume replacement task. For more information, see Replace a root volume in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#create_replace_root_volume_task"><CopyableCode code="create_replace_root_volume_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SnapshotId"><code>SnapshotId</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-DeleteReplacedRootVolume"><code>DeleteReplacedRootVolume</code></a>, <a href="#parameter-VolumeInitializationRate"><code>VolumeInitializationRate</code></a>, <a href="#parameter-VolumeId"><code>VolumeId</code></a></td>
    <td>Replaces the EBS-backed root volume for a running instance with a new volume that is restored to the original root volume's launch state, that is restored to a specific snapshot taken from the original root volume, that is restored from an AMI that has the same key characteristics as that of the instance, or that is replaced by a specified volume. For more information, see Replace a root volume in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance for which to replace the root volume.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency. For more information, see Ensuring idempotency.</td>
</tr>
<tr id="parameter-DeleteReplacedRootVolume">
    <td><CopyableCode code="DeleteReplacedRootVolume" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to automatically delete the original root volume after the root volume replacement task completes. To delete the original root volume, specify true. If you choose to keep the original root volume after the replacement task completes, you must manually delete it when you no longer need it.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>Filter to use: instance-id - The ID of the instance for which the root volume replacement task was created.</td>
</tr>
<tr id="parameter-ImageId">
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>The ID of the AMI to use to restore the root volume. The specified AMI must have the same product code, billing information, architecture type, and virtualization type as that of the instance. If you want to restore the replacement volume from a specific snapshot, if you want to restore it to its launch state, or if you want to replace the root volume with a specified volume, omit this parameter.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-ReplaceRootVolumeTaskId">
    <td><CopyableCode code="ReplaceRootVolumeTaskId" /></td>
    <td><code>array</code></td>
    <td>The ID of the root volume replacement task to view.</td>
</tr>
<tr id="parameter-SnapshotId">
    <td><CopyableCode code="SnapshotId" /></td>
    <td><code>string</code></td>
    <td>The ID of the snapshot from which to restore the replacement root volume. The specified snapshot must be a snapshot that you previously created from the original root volume. If you want to restore the replacement root volume to the initial launch state, if you want to restore the replacement root volume from an AMI, or if you want to replace the root volume with a specified volume, omit this parameter.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the root volume replacement task.</td>
</tr>
<tr id="parameter-VolumeId">
    <td><CopyableCode code="VolumeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the volume to use as the replacement root volume. The specified volume must be in the same Availability Zone as the instance, must be in the available state, and must not be attached to an instance. If the original root volume is encrypted, the specified volume must also be encrypted. If you want to restore the replacement root volume from a specific snapshot, an AMI, or to its launch state, omit this parameter.</td>
</tr>
<tr id="parameter-VolumeInitializationRate">
    <td><CopyableCode code="VolumeInitializationRate" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the replacement root volume. This is also known as volume initialization. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation. Omit this parameter if: You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation. If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore. You want to create a volume that is initialized at the default rate. For more information, see Initialize Amazon EBS volumes in the Amazon EC2 User Guide. Valid range: 100 - 300 MiB/s</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_replace_root_volume_tasks"
    values={[
        { label: 'describe_replace_root_volume_tasks', value: 'describe_replace_root_volume_tasks' }
    ]}
>
<TabItem value="describe_replace_root_volume_tasks">

Describes a root volume replacement task. For more information, see Replace a root volume in the Amazon EC2 User Guide.

```sql
SELECT
complete_time,
delete_replaced_root_volume,
image_id,
instance_id,
replace_root_volume_task_id,
snapshot_id,
start_time,
tags,
task_state
FROM aws.ec2.replace_root_volume_tasks
WHERE region = '{{ region }}' -- required
AND ReplaceRootVolumeTaskId = '{{ ReplaceRootVolumeTaskId }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_replace_root_volume_task"
    values={[
        { label: 'create_replace_root_volume_task', value: 'create_replace_root_volume_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_replace_root_volume_task">

Replaces the EBS-backed root volume for a running instance with a new volume that is restored to the original root volume's launch state, that is restored to a specific snapshot taken from the original root volume, that is restored from an AMI that has the same key characteristics as that of the instance, or that is replaced by a specified volume. For more information, see Replace a root volume in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.replace_root_volume_tasks (
InstanceId,
region,
SnapshotId,
ClientToken,
DryRun,
TagSpecification,
ImageId,
DeleteReplacedRootVolume,
VolumeInitializationRate,
VolumeId
)
SELECT 
'{{ InstanceId }}',
'{{ region }}',
'{{ SnapshotId }}',
'{{ ClientToken }}',
'{{ DryRun }}',
'{{ TagSpecification }}',
'{{ ImageId }}',
'{{ DeleteReplacedRootVolume }}',
'{{ VolumeInitializationRate }}',
'{{ VolumeId }}'
RETURNING
complete_time,
delete_replaced_root_volume,
image_id,
instance_id,
replace_root_volume_task_id,
snapshot_id,
start_time,
tags,
task_state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: replace_root_volume_tasks
  props:
    - name: InstanceId
      value: "{{ InstanceId }}"
      description: Required parameter for the replace_root_volume_tasks resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the replace_root_volume_tasks resource.
    - name: SnapshotId
      value: "{{ SnapshotId }}"
      description: The ID of the snapshot from which to restore the replacement root volume. The specified snapshot must be a snapshot that you previously created from the original root volume. If you want to restore the replacement root volume to the initial launch state, if you want to restore the replacement root volume from an AMI, or if you want to replace the root volume with a specified volume, omit this parameter.
      description: The ID of the snapshot from which to restore the replacement root volume. The specified snapshot must be a snapshot that you previously created from the original root volume. If you want to restore the replacement root volume to the initial launch state, if you want to restore the replacement root volume from an AMI, or if you want to replace the root volume with a specified volume, omit this parameter.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency. For more information, see Ensuring idempotency.
      description: Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, a randomly generated token is used for the request to ensure idempotency. For more information, see Ensuring idempotency.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the root volume replacement task.
      description: The tags to apply to the root volume replacement task.
    - name: ImageId
      value: "{{ ImageId }}"
      description: The ID of the AMI to use to restore the root volume. The specified AMI must have the same product code, billing information, architecture type, and virtualization type as that of the instance. If you want to restore the replacement volume from a specific snapshot, if you want to restore it to its launch state, or if you want to replace the root volume with a specified volume, omit this parameter.
      description: The ID of the AMI to use to restore the root volume. The specified AMI must have the same product code, billing information, architecture type, and virtualization type as that of the instance. If you want to restore the replacement volume from a specific snapshot, if you want to restore it to its launch state, or if you want to replace the root volume with a specified volume, omit this parameter.
    - name: DeleteReplacedRootVolume
      value: {{ DeleteReplacedRootVolume }}
      description: Indicates whether to automatically delete the original root volume after the root volume replacement task completes. To delete the original root volume, specify true. If you choose to keep the original root volume after the replacement task completes, you must manually delete it when you no longer need it.
      description: Indicates whether to automatically delete the original root volume after the root volume replacement task completes. To delete the original root volume, specify true. If you choose to keep the original root volume after the replacement task completes, you must manually delete it when you no longer need it.
    - name: VolumeInitializationRate
      value: "{{ VolumeInitializationRate }}"
      description: Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the replacement root volume. This is also known as volume initialization. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation. Omit this parameter if: You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation. If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore. You want to create a volume that is initialized at the default rate. For more information, see Initialize Amazon EBS volumes in the Amazon EC2 User Guide. Valid range: 100 - 300 MiB/s
      description: Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the replacement root volume. This is also known as volume initialization. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation. Omit this parameter if: You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation. If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore. You want to create a volume that is initialized at the default rate. For more information, see Initialize Amazon EBS volumes in the Amazon EC2 User Guide. Valid range: 100 - 300 MiB/s
    - name: VolumeId
      value: "{{ VolumeId }}"
      description: The ID of the volume to use as the replacement root volume. The specified volume must be in the same Availability Zone as the instance, must be in the available state, and must not be attached to an instance. If the original root volume is encrypted, the specified volume must also be encrypted. If you want to restore the replacement root volume from a specific snapshot, an AMI, or to its launch state, omit this parameter.
      description: The ID of the volume to use as the replacement root volume. The specified volume must be in the same Availability Zone as the instance, must be in the available state, and must not be attached to an instance. If the original root volume is encrypted, the specified volume must also be encrypted. If you want to restore the replacement root volume from a specific snapshot, an AMI, or to its launch state, omit this parameter.
`}</CodeBlock>

</TabItem>
</Tabs>
