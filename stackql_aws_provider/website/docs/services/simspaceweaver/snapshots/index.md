--- 
title: snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots
  - simspaceweaver
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.simspaceweaver.snapshots" /></td></tr>
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
    <td><a href="#create_snapshot"><CopyableCode code="create_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Destination"><code>Destination</code></a>, <a href="#parameter-Simulation"><code>Simulation</code></a></td>
    <td></td>
    <td>Creates a snapshot of the specified simulation. A snapshot is a file that contains simulation state data at a specific time. The state data saved in a snapshot includes entity data from the State Fabric, the simulation configuration specified in the schema, and the clock tick number. You can use the snapshot to initialize a new simulation. For more information about snapshots, see Snapshots in the SimSpace Weaver User Guide. You specify a Destination when you create a snapshot. The Destination is the name of an Amazon S3 bucket and an optional ObjectKeyPrefix. The ObjectKeyPrefix is usually the name of a folder in the bucket. SimSpace Weaver creates a snapshot folder inside the Destination and places the snapshot file there. The snapshot file is an Amazon S3 object. It has an object key with the form: object-key-prefix/snapshot/simulation-name-YYMMdd-HHmm-ss.zip, where: YY is the 2-digit year MM is the 2-digit month dd is the 2-digit day of the month HH is the 2-digit hour (24-hour clock) mm is the 2-digit minutes ss is the 2-digit seconds</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_snapshot"
    values={[
        { label: 'create_snapshot', value: 'create_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_snapshot">

Creates a snapshot of the specified simulation. A snapshot is a file that contains simulation state data at a specific time. The state data saved in a snapshot includes entity data from the State Fabric, the simulation configuration specified in the schema, and the clock tick number. You can use the snapshot to initialize a new simulation. For more information about snapshots, see Snapshots in the SimSpace Weaver User Guide. You specify a Destination when you create a snapshot. The Destination is the name of an Amazon S3 bucket and an optional ObjectKeyPrefix. The ObjectKeyPrefix is usually the name of a folder in the bucket. SimSpace Weaver creates a snapshot folder inside the Destination and places the snapshot file there. The snapshot file is an Amazon S3 object. It has an object key with the form: object-key-prefix/snapshot/simulation-name-YYMMdd-HHmm-ss.zip, where: YY is the 2-digit year MM is the 2-digit month dd is the 2-digit day of the month HH is the 2-digit hour (24-hour clock) mm is the 2-digit minutes ss is the 2-digit seconds

```sql
INSERT INTO aws.simspaceweaver.snapshots (
Destination,
Simulation,
region
)
SELECT 
'{{ Destination }}' /* required */,
'{{ Simulation }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: snapshots
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the snapshots resource.
    - name: Destination
      description: |
        An Amazon S3 bucket and optional folder (object key prefix) where SimSpace Weaver creates a file.
      value:
        BucketName: "{{ BucketName }}"
        ObjectKeyPrefix: "{{ ObjectKeyPrefix }}"
    - name: Simulation
      value: "{{ Simulation }}"
`}</CodeBlock>

</TabItem>
</Tabs>
