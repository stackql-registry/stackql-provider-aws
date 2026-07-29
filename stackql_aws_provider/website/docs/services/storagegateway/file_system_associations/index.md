--- 
title: file_system_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - file_system_associations
  - storagegateway
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

Creates, updates, deletes, gets or lists a <code>file_system_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="file_system_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.file_system_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_file_system_associations"
    values={[
        { label: 'describe_file_system_associations', value: 'describe_file_system_associations' },
        { label: 'list_file_system_associations', value: 'list_file_system_associations' }
    ]}
>
<TabItem value="describe_file_system_associations">

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
    <td><CopyableCode code="file_system_association_info_list" /></td>
    <td><code>array</code></td>
    <td>An array containing the FileSystemAssociationInfo data type of each file system association to be described.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_file_system_associations">

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
    <td><CopyableCode code="file_system_association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the file system association.</td>
</tr>
<tr>
    <td><CopyableCode code="file_system_association_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the file system association.</td>
</tr>
<tr>
    <td><CopyableCode code="file_system_association_status" /></td>
    <td><code>string</code></td>
    <td>The status of the file share. Valid Values: AVAILABLE | CREATING | DELETING | FORCE_DELETING | UPDATING | ERROR</td>
</tr>
<tr>
    <td><CopyableCode code="gateway_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.</td>
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
    <td><a href="#describe_file_system_associations"><CopyableCode code="describe_file_system_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the file system association information. This operation is only supported for FSx File Gateways.</td>
</tr>
<tr>
    <td><a href="#list_file_system_associations"><CopyableCode code="list_file_system_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of FileSystemAssociationSummary objects. Each object contains a summary of a file system association. This operation is only supported for FSx File Gateways.</td>
</tr>
<tr>
    <td><a href="#update_file_system_association"><CopyableCode code="update_file_system_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileSystemAssociationARN"><code>FileSystemAssociationARN</code></a></td>
    <td></td>
    <td>Updates a file system association. This operation is only supported in the FSx File Gateways.</td>
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
    defaultValue="describe_file_system_associations"
    values={[
        { label: 'describe_file_system_associations', value: 'describe_file_system_associations' },
        { label: 'list_file_system_associations', value: 'list_file_system_associations' }
    ]}
>
<TabItem value="describe_file_system_associations">

Gets the file system association information. This operation is only supported for FSx File Gateways.

```sql
SELECT
file_system_association_info_list
FROM aws.storagegateway.file_system_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_file_system_associations">

Gets a list of FileSystemAssociationSummary objects. Each object contains a summary of a file system association. This operation is only supported for FSx File Gateways.

```sql
SELECT
file_system_association_arn,
file_system_association_id,
file_system_association_status,
gateway_arn
FROM aws.storagegateway.file_system_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_file_system_association"
    values={[
        { label: 'update_file_system_association', value: 'update_file_system_association' }
    ]}
>
<TabItem value="update_file_system_association">

Updates a file system association. This operation is only supported in the FSx File Gateways.

```sql
UPDATE aws.storagegateway.file_system_associations
SET 
FileSystemAssociationARN = '{{ FileSystemAssociationARN }}',
UserName = '{{ UserName }}',
Password = '{{ Password }}',
AuditDestinationARN = '{{ AuditDestinationARN }}',
CacheAttributes = '{{ CacheAttributes }}'
WHERE 
region = '{{ region }}' --required
AND FileSystemAssociationARN = '{{ FileSystemAssociationARN }}' --required
RETURNING
file_system_association_arn;
```
</TabItem>
</Tabs>
