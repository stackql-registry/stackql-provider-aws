--- 
title: relational_database_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - relational_database_snapshots
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

Creates, updates, deletes, gets or lists a <code>relational_database_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="relational_database_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.relational_database_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_relational_database_snapshot"
    values={[
        { label: 'get_relational_database_snapshot', value: 'get_relational_database_snapshot' },
        { label: 'get_relational_database_snapshots', value: 'get_relational_database_snapshots' }
    ]}
>
<TabItem value="get_relational_database_snapshot">

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
    <td>The name of the database snapshot. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the database snapshot. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the database snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The software of the database snapshot (for example, MySQL) (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="engineVersion" /></td>
    <td><code>string</code></td>
    <td>The database engine version for the database snapshot (for example, 5.7.23). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fromRelationalDatabaseArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the database from which the database snapshot was created. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fromRelationalDatabaseBlueprintId" /></td>
    <td><code>string</code></td>
    <td>The blueprint ID of the database from which the database snapshot was created. A blueprint describes the major engine version of a database.</td>
</tr>
<tr>
    <td><CopyableCode code="fromRelationalDatabaseBundleId" /></td>
    <td><code>string</code></td>
    <td>The bundle ID of the database from which the database snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="fromRelationalDatabaseName" /></td>
    <td><code>string</code></td>
    <td>The name of the source database from which the database snapshot was created. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The Region name and Availability Zone where the database snapshot is located.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The Lightsail resource type. (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInGb" /></td>
    <td><code>integer</code></td>
    <td>The size of the disk in GB (for example, 32) for the database snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the database snapshot. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="supportCode" /></td>
    <td><code>string</code></td>
    <td>The support code for the database snapshot. Include this code in your email to support when you have questions about a database snapshot in Lightsail. This code enables our support team to look up your Lightsail information more easily.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tag keys and optional values for the resource. For more information about tags in Lightsail, see the Amazon Lightsail Developer Guide.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_relational_database_snapshots">

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
    <td>The name of the database snapshot. (pattern: &lt;code&gt;\w&#91;\w\-&#93;*\w&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the database snapshot. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the database snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The software of the database snapshot (for example, MySQL) (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="engineVersion" /></td>
    <td><code>string</code></td>
    <td>The database engine version for the database snapshot (for example, 5.7.23). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fromRelationalDatabaseArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the database from which the database snapshot was created. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fromRelationalDatabaseBlueprintId" /></td>
    <td><code>string</code></td>
    <td>The blueprint ID of the database from which the database snapshot was created. A blueprint describes the major engine version of a database.</td>
</tr>
<tr>
    <td><CopyableCode code="fromRelationalDatabaseBundleId" /></td>
    <td><code>string</code></td>
    <td>The bundle ID of the database from which the database snapshot was created.</td>
</tr>
<tr>
    <td><CopyableCode code="fromRelationalDatabaseName" /></td>
    <td><code>string</code></td>
    <td>The name of the source database from which the database snapshot was created. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The Region name and Availability Zone where the database snapshot is located.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The Lightsail resource type. (ContainerService, Instance, StaticIp, KeyPair, InstanceSnapshot, Domain, PeeredVpc, LoadBalancer, LoadBalancerTlsCertificate, Disk, DiskSnapshot, RelationalDatabase, RelationalDatabaseSnapshot, ExportSnapshotRecord, CloudFormationStackRecord, Alarm, ContactMethod, Distribution, Certificate, Bucket)</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInGb" /></td>
    <td><code>integer</code></td>
    <td>The size of the disk in GB (for example, 32) for the database snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the database snapshot. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="supportCode" /></td>
    <td><code>string</code></td>
    <td>The support code for the database snapshot. Include this code in your email to support when you have questions about a database snapshot in Lightsail. This code enables our support team to look up your Lightsail information more easily.</td>
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
    <td><a href="#get_relational_database_snapshot"><CopyableCode code="get_relational_database_snapshot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific database snapshot in Amazon Lightsail.</td>
</tr>
<tr>
    <td><a href="#get_relational_database_snapshots"><CopyableCode code="get_relational_database_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all of your database snapshots in Amazon Lightsail.</td>
</tr>
<tr>
    <td><a href="#create_relational_database_snapshot"><CopyableCode code="create_relational_database_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-relationalDatabaseName"><code>relationalDatabaseName</code></a>, <a href="#parameter-relationalDatabaseSnapshotName"><code>relationalDatabaseSnapshotName</code></a></td>
    <td></td>
    <td>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups, to make copies of a database, and to save data before deleting a database. The create relational database snapshot operation supports tag-based access control via request tags. For more information, see the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_relational_database_snapshot"><CopyableCode code="delete_relational_database_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a database snapshot in Amazon Lightsail. The delete relational database snapshot operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the Amazon Lightsail Developer Guide.</td>
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
    defaultValue="get_relational_database_snapshot"
    values={[
        { label: 'get_relational_database_snapshot', value: 'get_relational_database_snapshot' },
        { label: 'get_relational_database_snapshots', value: 'get_relational_database_snapshots' }
    ]}
>
<TabItem value="get_relational_database_snapshot">

Returns information about a specific database snapshot in Amazon Lightsail.

```sql
SELECT
name,
arn,
createdAt,
engine,
engineVersion,
fromRelationalDatabaseArn,
fromRelationalDatabaseBlueprintId,
fromRelationalDatabaseBundleId,
fromRelationalDatabaseName,
location,
resourceType,
sizeInGb,
state,
supportCode,
tags
FROM aws.lightsail.relational_database_snapshots
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_relational_database_snapshots">

Returns information about all of your database snapshots in Amazon Lightsail.

```sql
SELECT
name,
arn,
createdAt,
engine,
engineVersion,
fromRelationalDatabaseArn,
fromRelationalDatabaseBlueprintId,
fromRelationalDatabaseBundleId,
fromRelationalDatabaseName,
location,
resourceType,
sizeInGb,
state,
supportCode,
tags
FROM aws.lightsail.relational_database_snapshots
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_relational_database_snapshot"
    values={[
        { label: 'create_relational_database_snapshot', value: 'create_relational_database_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_relational_database_snapshot">

Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups, to make copies of a database, and to save data before deleting a database. The create relational database snapshot operation supports tag-based access control via request tags. For more information, see the Amazon Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.relational_database_snapshots (
relationalDatabaseName,
relationalDatabaseSnapshotName,
tags,
region
)
SELECT 
'{{ relationalDatabaseName }}' /* required */,
'{{ relationalDatabaseSnapshotName }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
operations
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: relational_database_snapshots
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the relational_database_snapshots resource.
    - name: relationalDatabaseName
      value: "{{ relationalDatabaseName }}"
      description: |
        The name of the database on which to base your new snapshot.
    - name: relationalDatabaseSnapshotName
      value: "{{ relationalDatabaseSnapshotName }}"
      description: |
        The name for your new database snapshot. Constraints: Must contain from 2 to 255 alphanumeric characters, or hyphens. The first and last character must be a letter or number.
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
    defaultValue="delete_relational_database_snapshot"
    values={[
        { label: 'delete_relational_database_snapshot', value: 'delete_relational_database_snapshot' }
    ]}
>
<TabItem value="delete_relational_database_snapshot">

Deletes a database snapshot in Amazon Lightsail. The delete relational database snapshot operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the Amazon Lightsail Developer Guide.

```sql
DELETE FROM aws.lightsail.relational_database_snapshots
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
