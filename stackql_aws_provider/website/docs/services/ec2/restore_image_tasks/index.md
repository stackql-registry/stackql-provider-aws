--- 
title: restore_image_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - restore_image_tasks
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

Creates, updates, deletes, gets or lists a <code>restore_image_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="restore_image_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.restore_image_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_restore_image_task"><CopyableCode code="create_restore_image_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ObjectKey"><code>ObjectKey</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Bucket"><code>Bucket</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Starts a task that restores an AMI from an Amazon S3 object that was previously created by using CreateStoreImageTask. To use this API, you must have the required permissions. For more information, see Permissions for storing and restoring AMIs using S3 in the Amazon EC2 User Guide. For more information, see Store and restore an AMI using S3 in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-ObjectKey">
    <td><CopyableCode code="ObjectKey" /></td>
    <td><code>string</code></td>
    <td>The name of the stored AMI object in the bucket.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Bucket">
    <td><CopyableCode code="Bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon S3 bucket that contains the stored AMI object.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Name">
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name for the restored AMI. The name must be unique for AMIs in the Region for this account. If you do not provide a name, the new AMI gets the same name as the original AMI.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the AMI and snapshots on restoration. You can tag the AMI, the snapshots, or both. To tag the AMI, the value for ResourceType must be image. To tag the snapshots, the value for ResourceType must be snapshot. The same tag is applied to all of the snapshots that are created.</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_restore_image_task"
    values={[
        { label: 'create_restore_image_task', value: 'create_restore_image_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_restore_image_task">

Starts a task that restores an AMI from an Amazon S3 object that was previously created by using CreateStoreImageTask. To use this API, you must have the required permissions. For more information, see Permissions for storing and restoring AMIs using S3 in the Amazon EC2 User Guide. For more information, see Store and restore an AMI using S3 in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.restore_image_tasks (
ObjectKey,
region,
Bucket,
Name,
TagSpecification,
DryRun
)
SELECT 
'{{ ObjectKey }}',
'{{ region }}',
'{{ Bucket }}',
'{{ Name }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
image_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: restore_image_tasks
  props:
    - name: ObjectKey
      value: "{{ ObjectKey }}"
      description: Required parameter for the restore_image_tasks resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the restore_image_tasks resource.
    - name: Bucket
      value: "{{ Bucket }}"
      description: The name of the Amazon S3 bucket that contains the stored AMI object.
      description: The name of the Amazon S3 bucket that contains the stored AMI object.
    - name: Name
      value: "{{ Name }}"
      description: The name for the restored AMI. The name must be unique for AMIs in the Region for this account. If you do not provide a name, the new AMI gets the same name as the original AMI.
      description: The name for the restored AMI. The name must be unique for AMIs in the Region for this account. If you do not provide a name, the new AMI gets the same name as the original AMI.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the AMI and snapshots on restoration. You can tag the AMI, the snapshots, or both. To tag the AMI, the value for ResourceType must be image. To tag the snapshots, the value for ResourceType must be snapshot. The same tag is applied to all of the snapshots that are created.
      description: The tags to apply to the AMI and snapshots on restoration. You can tag the AMI, the snapshots, or both. To tag the AMI, the value for ResourceType must be image. To tag the snapshots, the value for ResourceType must be snapshot. The same tag is applied to all of the snapshots that are created.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>
