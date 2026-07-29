--- 
title: disk_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - disk_snapshots
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>disk_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="disk_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.disk_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_disk_snapshot"
    values={[
        { label: 'get_disk_snapshot', value: 'get_disk_snapshot' },
        { label: 'get_disk_snapshots', value: 'get_disk_snapshots' }
    ]}
>
<TabItem value="get_disk_snapshot">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the disk snapshot (my-disk-snapshot). (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the disk snapshot. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the disk snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="from_disk_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source disk from which the disk snapshot was created. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="from_disk_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the source disk from which the disk snapshot was created. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="from_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source instance from which the disk (system volume) snapshot was created. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="from_instance_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the source instance from which the disk (system volume) snapshot was created. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="is_from_auto_snapshot" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the snapshot was created from an automatic snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The AWS Region and Availability Zone where the disk snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>string</code></td>
    <td>The progress of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The Lightsail resource type (DiskSnapshot). (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_gb" /></td>
    <td><code>integer</code></td>
    <td>The size of the disk in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The status of the disk snapshot operation. (pending, completed, error, unknown)</td>
</tr>
<tr>
    <td><CopyableCode code="support_code" /></td>
    <td><code>string</code></td>
    <td>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the Amazon Lightsail Developer Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_disk_snapshots">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the disk snapshot (my-disk-snapshot). (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the disk snapshot. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the disk snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="from_disk_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source disk from which the disk snapshot was created. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="from_disk_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the source disk from which the disk snapshot was created. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="from_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source instance from which the disk (system volume) snapshot was created. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="from_instance_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the source instance from which the disk (system volume) snapshot was created. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="is_from_auto_snapshot" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the snapshot was created from an automatic snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The AWS Region and Availability Zone where the disk snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>string</code></td>
    <td>The progress of the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The Lightsail resource type (DiskSnapshot). (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_gb" /></td>
    <td><code>integer</code></td>
    <td>The size of the disk in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The status of the disk snapshot operation. (pending, completed, error, unknown)</td>
</tr>
<tr>
    <td><CopyableCode code="support_code" /></td>
    <td><code>string</code></td>
    <td>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the Amazon Lightsail Developer Guide.</td>
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
    <td><a href="#get_disk_snapshot"><CopyableCode code="get_disk_snapshot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific block storage disk snapshot.</td>
</tr>
<tr>
    <td><a href="#get_disk_snapshots"><CopyableCode code="get_disk_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all block storage disk snapshots in your AWS account and region.</td>
</tr>
<tr>
    <td><a href="#create_disk_snapshot"><CopyableCode code="create_disk_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-diskSnapshotName"><code>diskSnapshotName</code></a></td>
    <td></td>
    <td>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance. You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending. You can also use this operation to create a snapshot of an instance's system volume. You might want to do this, for example, to recover data from the system volume of a botched instance or to create a backup of the system volume like you would for a block storage disk. To create a snapshot of a system volume, just define the instance name parameter when issuing the snapshot command, and a snapshot of the defined instance's system volume will be created. After the snapshot is available, you can create a block storage disk from the snapshot and attach it to a running instance to access the data on the disk. The create disk snapshot operation supports tag-based access control via request tags. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_disk_snapshot"><CopyableCode code="delete_disk_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified disk snapshot. When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk. The delete disk snapshot operation supports tag-based access control via resource tags applied to the resource identified by disk snapshot name. For more information, see the Amazon Lightsail Developer Guide.</td>
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
    defaultValue="get_disk_snapshot"
    values={[
        { label: 'get_disk_snapshot', value: 'get_disk_snapshot' },
        { label: 'get_disk_snapshots', value: 'get_disk_snapshots' }
    ]}
>
<TabItem value="get_disk_snapshot">

Returns information about a specific block storage disk snapshot.

```sql
SELECT
name,
arn,
created_at,
from_disk_arn,
from_disk_name,
from_instance_arn,
from_instance_name,
is_from_auto_snapshot,
location,
progress,
resource_type,
size_in_gb,
state,
support_code,
tags
FROM aws.lightsail.disk_snapshots
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_disk_snapshots">

Returns information about all block storage disk snapshots in your AWS account and region.

```sql
SELECT
name,
arn,
created_at,
from_disk_arn,
from_disk_name,
from_instance_arn,
from_instance_name,
is_from_auto_snapshot,
location,
progress,
resource_type,
size_in_gb,
state,
support_code,
tags
FROM aws.lightsail.disk_snapshots
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_disk_snapshot"
    values={[
        { label: 'create_disk_snapshot', value: 'create_disk_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_disk_snapshot">

Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance. You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending. You can also use this operation to create a snapshot of an instance's system volume. You might want to do this, for example, to recover data from the system volume of a botched instance or to create a backup of the system volume like you would for a block storage disk. To create a snapshot of a system volume, just define the instance name parameter when issuing the snapshot command, and a snapshot of the defined instance's system volume will be created. After the snapshot is available, you can create a block storage disk from the snapshot and attach it to a running instance to access the data on the disk. The create disk snapshot operation supports tag-based access control via request tags. For more information, see the Amazon Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.disk_snapshots (
diskName,
diskSnapshotName,
instanceName,
tags,
region
)
SELECT 
'{{ diskName }}',
'{{ diskSnapshotName }}' /* required */,
'{{ instanceName }}',
'{{ tags }}',
'{{ region }}'
RETURNING
operations
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: disk_snapshots
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the disk_snapshots resource.
    - name: diskName
      value: "{{ diskName }}"
      description: |
        The unique name of the source disk (Disk-Virginia-1). This parameter cannot be defined together with the instance name parameter. The disk name and instance name parameters are mutually exclusive.
    - name: diskSnapshotName
      value: "{{ diskSnapshotName }}"
      description: |
        The name of the destination disk snapshot (my-disk-snapshot) based on the source disk.
    - name: instanceName
      value: "{{ instanceName }}"
      description: |
        The unique name of the source instance (Amazon_Linux-512MB-Virginia-1). When this is defined, a snapshot of the instance's system volume is created. This parameter cannot be defined together with the disk name parameter. The instance name and disk name parameters are mutually exclusive.
    - name: tags
      description: |
        The tag keys and optional values to add to the resource during create. Use the TagResource action to tag a resource after it's created.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_disk_snapshot"
    values={[
        { label: 'delete_disk_snapshot', value: 'delete_disk_snapshot' }
    ]}
>
<TabItem value="delete_disk_snapshot">

Deletes the specified disk snapshot. When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk. The delete disk snapshot operation supports tag-based access control via resource tags applied to the resource identified by disk snapshot name. For more information, see the Amazon Lightsail Developer Guide.

```sql
DELETE FROM aws.lightsail.disk_snapshots
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
