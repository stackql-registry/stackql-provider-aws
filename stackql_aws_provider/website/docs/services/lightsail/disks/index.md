--- 
title: disks
hide_title: false
hide_table_of_contents: false
keywords:
  - disks
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

Creates, updates, deletes, gets or lists a <code>disks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="disks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.disks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_disk"
    values={[
        { label: 'get_disk', value: 'get_disk' },
        { label: 'get_disks', value: 'get_disks' }
    ]}
>
<TabItem value="get_disk">

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
    <td>The unique name of the disk. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="add_ons" /></td>
    <td><code>array</code></td>
    <td>An array of objects representing the add-ons enabled on the disk.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the disk. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attached_to" /></td>
    <td><code>string</code></td>
    <td>The resources to which the disk is attached. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attachment_state" /></td>
    <td><code>string</code></td>
    <td>(Discontinued) The attachment state of the disk. In releases prior to November 14, 2017, this parameter returned attached for system disks in the API response. It is now discontinued, but still included in the response. Use isAttached instead.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_mount_status" /></td>
    <td><code>string</code></td>
    <td>The status of automatically mounting a storage disk to a virtual computer. This parameter only applies to Lightsail for Research resources. (Failed, Pending, Mounted, NotMounted)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the disk was created.</td>
</tr>
<tr>
    <td><CopyableCode code="gb_in_use" /></td>
    <td><code>integer</code></td>
    <td>(Discontinued) The number of GB in use by the disk. In releases prior to November 14, 2017, this parameter was not included in the API response. It is now discontinued.</td>
</tr>
<tr>
    <td><CopyableCode code="iops" /></td>
    <td><code>integer</code></td>
    <td>The input/output operations per second (IOPS) of the disk.</td>
</tr>
<tr>
    <td><CopyableCode code="is_attached" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the disk is attached.</td>
</tr>
<tr>
    <td><CopyableCode code="is_system_disk" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether this disk is a system disk (has an operating system loaded on it).</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The AWS Region and Availability Zone where the disk is located.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The disk path.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The Lightsail resource type (Disk). (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_gb" /></td>
    <td><code>integer</code></td>
    <td>The size of the disk in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Describes the status of the disk. (pending, error, available, in-use, unknown)</td>
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
<TabItem value="get_disks">

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
    <td>The unique name of the disk. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="add_ons" /></td>
    <td><code>array</code></td>
    <td>An array of objects representing the add-ons enabled on the disk.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the disk. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attached_to" /></td>
    <td><code>string</code></td>
    <td>The resources to which the disk is attached. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attachment_state" /></td>
    <td><code>string</code></td>
    <td>(Discontinued) The attachment state of the disk. In releases prior to November 14, 2017, this parameter returned attached for system disks in the API response. It is now discontinued, but still included in the response. Use isAttached instead.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_mount_status" /></td>
    <td><code>string</code></td>
    <td>The status of automatically mounting a storage disk to a virtual computer. This parameter only applies to Lightsail for Research resources. (Failed, Pending, Mounted, NotMounted)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the disk was created.</td>
</tr>
<tr>
    <td><CopyableCode code="gb_in_use" /></td>
    <td><code>integer</code></td>
    <td>(Discontinued) The number of GB in use by the disk. In releases prior to November 14, 2017, this parameter was not included in the API response. It is now discontinued.</td>
</tr>
<tr>
    <td><CopyableCode code="iops" /></td>
    <td><code>integer</code></td>
    <td>The input/output operations per second (IOPS) of the disk.</td>
</tr>
<tr>
    <td><CopyableCode code="is_attached" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the disk is attached.</td>
</tr>
<tr>
    <td><CopyableCode code="is_system_disk" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether this disk is a system disk (has an operating system loaded on it).</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The AWS Region and Availability Zone where the disk is located.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The disk path.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The Lightsail resource type (Disk). (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="size_in_gb" /></td>
    <td><code>integer</code></td>
    <td>The size of the disk in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Describes the status of the disk. (pending, error, available, in-use, unknown)</td>
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
    <td><a href="#get_disk"><CopyableCode code="get_disk" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific block storage disk.</td>
</tr>
<tr>
    <td><a href="#get_disks"><CopyableCode code="get_disks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all block storage disks in your AWS account and region.</td>
</tr>
<tr>
    <td><a href="#create_disk"><CopyableCode code="create_disk" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-diskName"><code>diskName</code></a>, <a href="#parameter-availabilityZone"><code>availabilityZone</code></a>, <a href="#parameter-sizeInGb"><code>sizeInGb</code></a></td>
    <td></td>
    <td>Creates a block storage disk that can be attached to an Amazon Lightsail instance in the same Availability Zone (us-east-2a). The create disk operation supports tag-based access control via request tags. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#attach_disk"><CopyableCode code="attach_disk" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-diskName"><code>diskName</code></a>, <a href="#parameter-instanceName"><code>instanceName</code></a>, <a href="#parameter-diskPath"><code>diskPath</code></a></td>
    <td></td>
    <td>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name. The attach disk operation supports tag-based access control via resource tags applied to the resource identified by disk name. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#detach_disk"><CopyableCode code="detach_disk" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-diskName"><code>diskName</code></a></td>
    <td></td>
    <td>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk. The detach disk operation supports tag-based access control via resource tags applied to the resource identified by disk name. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_disk"><CopyableCode code="delete_disk" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified block storage disk. The disk must be in the available state (not attached to a Lightsail instance). The disk may remain in the deleting state for several minutes. The delete disk operation supports tag-based access control via resource tags applied to the resource identified by disk name. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_disk_from_snapshot"><CopyableCode code="create_disk_from_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-diskName"><code>diskName</code></a>, <a href="#parameter-availabilityZone"><code>availabilityZone</code></a>, <a href="#parameter-sizeInGb"><code>sizeInGb</code></a></td>
    <td></td>
    <td>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting disk can be attached to an Amazon Lightsail instance in the same Availability Zone (us-east-2a). The create disk from snapshot operation supports tag-based access control via request tags and resource tags applied to the resource identified by disk snapshot name. For more information, see the Amazon Lightsail Developer Guide.</td>
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
    defaultValue="get_disk"
    values={[
        { label: 'get_disk', value: 'get_disk' },
        { label: 'get_disks', value: 'get_disks' }
    ]}
>
<TabItem value="get_disk">

Returns information about a specific block storage disk.

```sql
SELECT
name,
add_ons,
arn,
attached_to,
attachment_state,
auto_mount_status,
created_at,
gb_in_use,
iops,
is_attached,
is_system_disk,
location,
path,
resource_type,
size_in_gb,
state,
support_code,
tags
FROM aws.lightsail.disks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_disks">

Returns information about all block storage disks in your AWS account and region.

```sql
SELECT
name,
add_ons,
arn,
attached_to,
attachment_state,
auto_mount_status,
created_at,
gb_in_use,
iops,
is_attached,
is_system_disk,
location,
path,
resource_type,
size_in_gb,
state,
support_code,
tags
FROM aws.lightsail.disks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_disk"
    values={[
        { label: 'create_disk', value: 'create_disk' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_disk">

Creates a block storage disk that can be attached to an Amazon Lightsail instance in the same Availability Zone (us-east-2a). The create disk operation supports tag-based access control via request tags. For more information, see the Amazon Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.disks (
diskName,
availabilityZone,
sizeInGb,
tags,
addOns,
region
)
SELECT 
'{{ diskName }}' /* required */,
'{{ availabilityZone }}' /* required */,
{{ sizeInGb }} /* required */,
'{{ tags }}',
'{{ addOns }}',
'{{ region }}'
RETURNING
operations
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: disks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the disks resource.
    - name: diskName
      value: "{{ diskName }}"
      description: |
        The unique Lightsail disk name (my-disk).
    - name: availabilityZone
      value: "{{ availabilityZone }}"
      description: |
        The Availability Zone where you want to create the disk (us-east-2a). Use the same Availability Zone as the Lightsail instance to which you want to attach the disk. Use the get regions operation to list the Availability Zones where Lightsail is currently available.
    - name: sizeInGb
      value: {{ sizeInGb }}
      description: |
        The size of the disk in GB (32).
    - name: tags
      description: |
        The tag keys and optional values to add to the resource during create. Use the TagResource action to tag a resource after it's created.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: addOns
      description: |
        An array of objects that represent the add-ons to enable for the new disk.
      value:
        - addOnType: "{{ addOnType }}"
          autoSnapshotAddOnRequest:
            snapshotTimeOfDay: "{{ snapshotTimeOfDay }}"
          stopInstanceOnIdleRequest:
            threshold: "{{ threshold }}"
            duration: "{{ duration }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_disk"
    values={[
        { label: 'attach_disk', value: 'attach_disk' },
        { label: 'detach_disk', value: 'detach_disk' }
    ]}
>
<TabItem value="attach_disk">

Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name. The attach disk operation supports tag-based access control via resource tags applied to the resource identified by disk name. For more information, see the Amazon Lightsail Developer Guide.

```sql
UPDATE aws.lightsail.disks
SET 
diskName = '{{ diskName }}',
instanceName = '{{ instanceName }}',
diskPath = '{{ diskPath }}',
autoMounting = {{ autoMounting }}
WHERE 
region = '{{ region }}' --required
AND diskName = '{{ diskName }}' --required
AND instanceName = '{{ instanceName }}' --required
AND diskPath = '{{ diskPath }}' --required
RETURNING
operations;
```
</TabItem>
<TabItem value="detach_disk">

Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk. The detach disk operation supports tag-based access control via resource tags applied to the resource identified by disk name. For more information, see the Amazon Lightsail Developer Guide.

```sql
UPDATE aws.lightsail.disks
SET 
diskName = '{{ diskName }}'
WHERE 
region = '{{ region }}' --required
AND diskName = '{{ diskName }}' --required
RETURNING
operations;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_disk"
    values={[
        { label: 'delete_disk', value: 'delete_disk' }
    ]}
>
<TabItem value="delete_disk">

Deletes the specified block storage disk. The disk must be in the available state (not attached to a Lightsail instance). The disk may remain in the deleting state for several minutes. The delete disk operation supports tag-based access control via resource tags applied to the resource identified by disk name. For more information, see the Amazon Lightsail Developer Guide.

```sql
DELETE FROM aws.lightsail.disks
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="create_disk_from_snapshot"
    values={[
        { label: 'create_disk_from_snapshot', value: 'create_disk_from_snapshot' }
    ]}
>
<TabItem value="create_disk_from_snapshot">

Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting disk can be attached to an Amazon Lightsail instance in the same Availability Zone (us-east-2a). The create disk from snapshot operation supports tag-based access control via request tags and resource tags applied to the resource identified by disk snapshot name. For more information, see the Amazon Lightsail Developer Guide.

```sql
EXEC aws.lightsail.disks.create_disk_from_snapshot 
@region='{{ region }}' --required 
@@json=
'{
"diskName": "{{ diskName }}", 
"diskSnapshotName": "{{ diskSnapshotName }}", 
"availabilityZone": "{{ availabilityZone }}", 
"sizeInGb": {{ sizeInGb }}, 
"tags": "{{ tags }}", 
"addOns": "{{ addOns }}", 
"sourceDiskName": "{{ sourceDiskName }}", 
"restoreDate": "{{ restoreDate }}", 
"useLatestRestorableAutoSnapshot": {{ useLatestRestorableAutoSnapshot }}
}'
;
```
</TabItem>
</Tabs>
