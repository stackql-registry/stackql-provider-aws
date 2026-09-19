--- 
title: snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots
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

Creates, updates, deletes, gets or lists a <code>snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.snapshots" /></td></tr>
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
    <td><a href="#copy_snapshot"><CopyableCode code="copy_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetSnapshotName"><code>targetSnapshotName</code></a>, <a href="#parameter-sourceRegion"><code>sourceRegion</code></a></td>
    <td></td>
    <td>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an automatic snapshot of an instance or disk as a manual snapshot. This operation can also be used to copy a manual or automatic snapshot of an instance or a disk from one Amazon Web Services Region to another in Amazon Lightsail. When copying a manual snapshot, be sure to define the source region, source snapshot name, and target snapshot name parameters. When copying an automatic snapshot, be sure to define the source region, source resource name, target snapshot name, and either the restore date or the use latest restorable auto snapshot parameters.</td>
</tr>
<tr>
    <td><a href="#export_snapshot"><CopyableCode code="export_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceSnapshotName"><code>sourceSnapshotName</code></a></td>
    <td></td>
    <td>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2). This operation results in an export snapshot record that can be used with the create cloud formation stack operation to create new Amazon EC2 instances. Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the source Lightsail snapshot. The export snapshot operation supports tag-based access control via resource tags applied to the resource identified by source snapshot name. For more information, see the Amazon Lightsail Developer Guide. Use the get instance snapshots or get disk snapshots operations to get a list of snapshots that you can export to Amazon EC2.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="copy_snapshot"
    values={[
        { label: 'copy_snapshot', value: 'copy_snapshot' },
        { label: 'export_snapshot', value: 'export_snapshot' }
    ]}
>
<TabItem value="copy_snapshot">

Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an automatic snapshot of an instance or disk as a manual snapshot. This operation can also be used to copy a manual or automatic snapshot of an instance or a disk from one Amazon Web Services Region to another in Amazon Lightsail. When copying a manual snapshot, be sure to define the source region, source snapshot name, and target snapshot name parameters. When copying an automatic snapshot, be sure to define the source region, source resource name, target snapshot name, and either the restore date or the use latest restorable auto snapshot parameters.

```sql
EXEC aws.lightsail.snapshots.copy_snapshot 
@region='{{ region }}' --required 
@@json=
'{
"sourceSnapshotName": "{{ sourceSnapshotName }}", 
"sourceResourceName": "{{ sourceResourceName }}", 
"restoreDate": "{{ restoreDate }}", 
"useLatestRestorableAutoSnapshot": {{ useLatestRestorableAutoSnapshot }}, 
"targetSnapshotName": "{{ targetSnapshotName }}", 
"sourceRegion": "{{ sourceRegion }}"
}'
;
```
</TabItem>
<TabItem value="export_snapshot">

Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2). This operation results in an export snapshot record that can be used with the create cloud formation stack operation to create new Amazon EC2 instances. Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the source Lightsail snapshot. The export snapshot operation supports tag-based access control via resource tags applied to the resource identified by source snapshot name. For more information, see the Amazon Lightsail Developer Guide. Use the get instance snapshots or get disk snapshots operations to get a list of snapshots that you can export to Amazon EC2.

```sql
EXEC aws.lightsail.snapshots.export_snapshot 
@region='{{ region }}' --required 
@@json=
'{
"sourceSnapshotName": "{{ sourceSnapshotName }}"
}'
;
```
</TabItem>
</Tabs>
