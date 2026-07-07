--- 
title: upload_buffers
hide_title: false
hide_table_of_contents: false
keywords:
  - upload_buffers
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

Creates, updates, deletes, gets or lists a <code>upload_buffers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="upload_buffers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.upload_buffers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_upload_buffer"
    values={[
        { label: 'describe_upload_buffer', value: 'describe_upload_buffer' }
    ]}
>
<TabItem value="describe_upload_buffer">

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
    <td><CopyableCode code="DiskIds" /></td>
    <td><code>array</code></td>
    <td>An array of the gateway's local disk IDs that are configured as working storage. Each local disk ID is specified as a string (minimum length of 1 and maximum length of 300). If no local disks are configured as working storage, then the DiskIds array is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="UploadBufferAllocatedInBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of bytes allocated in the gateway's as upload buffer.</td>
</tr>
<tr>
    <td><CopyableCode code="UploadBufferUsedInBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of bytes being used in the gateway's upload buffer.</td>
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
    <td><a href="#describe_upload_buffer"><CopyableCode code="describe_upload_buffer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the upload buffer of a gateway. This operation is supported for the stored volume, cached volume, and tape gateway types. The response includes disk IDs that are configured as upload buffer space, and it includes the amount of upload buffer space allocated and used.</td>
</tr>
<tr>
    <td><a href="#add_upload_buffer"><CopyableCode code="add_upload_buffer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayARN"><code>GatewayARN</code></a>, <a href="#parameter-DiskIds"><code>DiskIds</code></a></td>
    <td></td>
    <td>Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is supported for the stored volume, cached volume, and tape gateway types. In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to configure as upload buffer.</td>
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
    defaultValue="describe_upload_buffer"
    values={[
        { label: 'describe_upload_buffer', value: 'describe_upload_buffer' }
    ]}
>
<TabItem value="describe_upload_buffer">

Returns information about the upload buffer of a gateway. This operation is supported for the stored volume, cached volume, and tape gateway types. The response includes disk IDs that are configured as upload buffer space, and it includes the amount of upload buffer space allocated and used.

```sql
SELECT
DiskIds,
GatewayARN,
UploadBufferAllocatedInBytes,
UploadBufferUsedInBytes
FROM aws.storagegateway.upload_buffers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_upload_buffer"
    values={[
        { label: 'add_upload_buffer', value: 'add_upload_buffer' }
    ]}
>
<TabItem value="add_upload_buffer">

Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is supported for the stored volume, cached volume, and tape gateway types. In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to configure as upload buffer.

```sql
UPDATE aws.storagegateway.upload_buffers
SET 
GatewayARN = '{{ GatewayARN }}',
DiskIds = '{{ DiskIds }}'
WHERE 
region = '{{ region }}' --required
AND GatewayARN = '{{ GatewayARN }}' --required
AND DiskIds = '{{ DiskIds }}' --required
RETURNING
GatewayARN;
```
</TabItem>
</Tabs>
