--- 
title: instance_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_snapshots
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

Creates, updates, deletes, gets or lists an <code>instance_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.instance_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_instance_snapshot"
    values={[
        { label: 'get_instance_snapshot', value: 'get_instance_snapshot' },
        { label: 'get_instance_snapshots', value: 'get_instance_snapshots' }
    ]}
>
<TabItem value="get_instance_snapshot">

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
    <td>The name of the snapshot. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the snapshot (arn:aws:lightsail:us-east-2:123456789101:InstanceSnapshot/d23b5706-3322-4d83-81e5-12345EXAMPLE). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the snapshot was created (1479907467.024).</td>
</tr>
<tr>
    <td><CopyableCode code="fromAttachedDisks" /></td>
    <td><code>array</code></td>
    <td>An array of disk objects containing information about all block storage disks.</td>
</tr>
<tr>
    <td><CopyableCode code="fromBlueprintId" /></td>
    <td><code>string</code></td>
    <td>The blueprint ID from which you created the snapshot (amazon_linux_2023). A blueprint is a virtual private server (or instance) image used to create instances quickly.</td>
</tr>
<tr>
    <td><CopyableCode code="fromBundleId" /></td>
    <td><code>string</code></td>
    <td>The bundle ID from which you created the snapshot (micro_x_x).</td>
</tr>
<tr>
    <td><CopyableCode code="fromInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the instance from which the snapshot was created (arn:aws:lightsail:us-east-2:123456789101:Instance/64b8404c-ccb1-430b-8daf-12345EXAMPLE). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fromInstanceName" /></td>
    <td><code>string</code></td>
    <td>The instance from which the snapshot was created. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="isFromAutoSnapshot" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the snapshot was created from an automatic snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The region name and Availability Zone where you created the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>string</code></td>
    <td>The progress of the snapshot. This is populated only for disk snapshots, and is null for instance snapshots.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource (usually InstanceSnapshot). (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInGb" /></td>
    <td><code>integer</code></td>
    <td>The size in GB of the SSD.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state the snapshot is in. (pending, error, available)</td>
</tr>
<tr>
    <td><CopyableCode code="supportCode" /></td>
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
<TabItem value="get_instance_snapshots">

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
    <td>The name of the snapshot. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the snapshot (arn:aws:lightsail:us-east-2:123456789101:InstanceSnapshot/d23b5706-3322-4d83-81e5-12345EXAMPLE). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the snapshot was created (1479907467.024).</td>
</tr>
<tr>
    <td><CopyableCode code="fromAttachedDisks" /></td>
    <td><code>array</code></td>
    <td>An array of disk objects containing information about all block storage disks.</td>
</tr>
<tr>
    <td><CopyableCode code="fromBlueprintId" /></td>
    <td><code>string</code></td>
    <td>The blueprint ID from which you created the snapshot (amazon_linux_2023). A blueprint is a virtual private server (or instance) image used to create instances quickly.</td>
</tr>
<tr>
    <td><CopyableCode code="fromBundleId" /></td>
    <td><code>string</code></td>
    <td>The bundle ID from which you created the snapshot (micro_x_x).</td>
</tr>
<tr>
    <td><CopyableCode code="fromInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the instance from which the snapshot was created (arn:aws:lightsail:us-east-2:123456789101:Instance/64b8404c-ccb1-430b-8daf-12345EXAMPLE). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fromInstanceName" /></td>
    <td><code>string</code></td>
    <td>The instance from which the snapshot was created. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="isFromAutoSnapshot" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the snapshot was created from an automatic snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The region name and Availability Zone where you created the snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>string</code></td>
    <td>The progress of the snapshot. This is populated only for disk snapshots, and is null for instance snapshots.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource (usually InstanceSnapshot). (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInGb" /></td>
    <td><code>integer</code></td>
    <td>The size in GB of the SSD.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state the snapshot is in. (pending, error, available)</td>
</tr>
<tr>
    <td><CopyableCode code="supportCode" /></td>
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
    <td><a href="#get_instance_snapshot"><CopyableCode code="get_instance_snapshot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific instance snapshot.</td>
</tr>
<tr>
    <td><a href="#get_instance_snapshots"><CopyableCode code="get_instance_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns all instance snapshots for the user's account.</td>
</tr>
<tr>
    <td><a href="#create_instance_snapshot"><CopyableCode code="create_instance_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceSnapshotName"><code>instanceSnapshotName</code></a>, <a href="#parameter-instanceName"><code>instanceName</code></a></td>
    <td></td>
    <td>Creates a snapshot of a specific virtual private server, or instance. You can use a snapshot to create a new instance that is based on that snapshot. The create instance snapshot operation supports tag-based access control via request tags. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_instance_snapshot"><CopyableCode code="delete_instance_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specific snapshot of a virtual private server (or instance). The delete instance snapshot operation supports tag-based access control via resource tags applied to the resource identified by instance snapshot name. For more information, see the Amazon Lightsail Developer Guide.</td>
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
    defaultValue="get_instance_snapshot"
    values={[
        { label: 'get_instance_snapshot', value: 'get_instance_snapshot' },
        { label: 'get_instance_snapshots', value: 'get_instance_snapshots' }
    ]}
>
<TabItem value="get_instance_snapshot">

Returns information about a specific instance snapshot.

```sql
SELECT
name,
arn,
createdAt,
fromAttachedDisks,
fromBlueprintId,
fromBundleId,
fromInstanceArn,
fromInstanceName,
isFromAutoSnapshot,
location,
progress,
resourceType,
sizeInGb,
state,
supportCode,
tags
FROM aws.lightsail.instance_snapshots
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_instance_snapshots">

Returns all instance snapshots for the user's account.

```sql
SELECT
name,
arn,
createdAt,
fromAttachedDisks,
fromBlueprintId,
fromBundleId,
fromInstanceArn,
fromInstanceName,
isFromAutoSnapshot,
location,
progress,
resourceType,
sizeInGb,
state,
supportCode,
tags
FROM aws.lightsail.instance_snapshots
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_instance_snapshot"
    values={[
        { label: 'create_instance_snapshot', value: 'create_instance_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_instance_snapshot">

Creates a snapshot of a specific virtual private server, or instance. You can use a snapshot to create a new instance that is based on that snapshot. The create instance snapshot operation supports tag-based access control via request tags. For more information, see the Amazon Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.instance_snapshots (
instanceSnapshotName,
instanceName,
tags,
region
)
SELECT 
'{{ instanceSnapshotName }}' /* required */,
'{{ instanceName }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
operations
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instance_snapshots
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instance_snapshots resource.
    - name: instanceSnapshotName
      value: "{{ instanceSnapshotName }}"
      description: |
        The name for your new snapshot.
    - name: instanceName
      value: "{{ instanceName }}"
      description: |
        The Lightsail instance on which to base your snapshot.
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
    defaultValue="delete_instance_snapshot"
    values={[
        { label: 'delete_instance_snapshot', value: 'delete_instance_snapshot' }
    ]}
>
<TabItem value="delete_instance_snapshot">

Deletes a specific snapshot of a virtual private server (or instance). The delete instance snapshot operation supports tag-based access control via resource tags applied to the resource identified by instance snapshot name. For more information, see the Amazon Lightsail Developer Guide.

```sql
DELETE FROM aws.lightsail.instance_snapshots
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
