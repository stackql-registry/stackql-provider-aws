--- 
title: file_systems
hide_title: false
hide_table_of_contents: false
keywords:
  - file_systems
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

Creates, updates, deletes, gets or lists a <code>file_systems</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="file_systems" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.file_systems" /></td></tr>
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
    <td><a href="#associate_file_system"><CopyableCode code="associate_file_system" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-Password"><code>Password</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-LocationARN"><code>LocationARN</code></a></td>
    <td></td>
    <td>Associate an Amazon FSx file system with the FSx File Gateway. After the association process is complete, the file shares on the Amazon FSx file system are available for access through the gateway. This operation only supports the FSx File Gateway type.</td>
</tr>
<tr>
    <td><a href="#disassociate_file_system"><CopyableCode code="disassociate_file_system" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileSystemAssociationARN"><code>FileSystemAssociationARN</code></a></td>
    <td></td>
    <td>Disassociates an Amazon FSx file system from the specified gateway. After the disassociation process finishes, the gateway can no longer access the Amazon FSx file system. This operation is only supported in the FSx File Gateway type.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="associate_file_system"
    values={[
        { label: 'associate_file_system', value: 'associate_file_system' },
        { label: 'disassociate_file_system', value: 'disassociate_file_system' }
    ]}
>
<TabItem value="associate_file_system">

Associate an Amazon FSx file system with the FSx File Gateway. After the association process is complete, the file shares on the Amazon FSx file system are available for access through the gateway. This operation only supports the FSx File Gateway type.

```sql
UPDATE aws.storagegateway.file_systems
SET 
UserName = '{{ UserName }}',
Password = '{{ Password }}',
ClientToken = '{{ ClientToken }}',
GatewayARN = '{{ GatewayARN }}',
LocationARN = '{{ LocationARN }}',
Tags = '{{ Tags }}',
AuditDestinationARN = '{{ AuditDestinationARN }}',
CacheAttributes = '{{ CacheAttributes }}',
EndpointNetworkConfiguration = '{{ EndpointNetworkConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND UserName = '{{ UserName }}' --required
AND Password = '{{ Password }}' --required
AND ClientToken = '{{ ClientToken }}' --required
AND GatewayARN = '{{ GatewayARN }}' --required
AND LocationARN = '{{ LocationARN }}' --required
RETURNING
file_system_association_arn;
```
</TabItem>
<TabItem value="disassociate_file_system">

Disassociates an Amazon FSx file system from the specified gateway. After the disassociation process finishes, the gateway can no longer access the Amazon FSx file system. This operation is only supported in the FSx File Gateway type.

```sql
UPDATE aws.storagegateway.file_systems
SET 
FileSystemAssociationARN = '{{ FileSystemAssociationARN }}',
ForceDelete = {{ ForceDelete }}
WHERE 
region = '{{ region }}' --required
AND FileSystemAssociationARN = '{{ FileSystemAssociationARN }}' --required
RETURNING
file_system_association_arn;
```
</TabItem>
</Tabs>
