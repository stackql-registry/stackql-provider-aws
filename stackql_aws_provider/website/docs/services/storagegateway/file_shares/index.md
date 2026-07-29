--- 
title: file_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - file_shares
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

Creates, updates, deletes, gets or lists a <code>file_shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="file_shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.file_shares" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_file_shares"
    values={[
        { label: 'list_file_shares', value: 'list_file_shares' }
    ]}
>
<TabItem value="list_file_shares">

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
    <td><CopyableCode code="file_share_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the file share.</td>
</tr>
<tr>
    <td><CopyableCode code="file_share_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the file share.</td>
</tr>
<tr>
    <td><CopyableCode code="file_share_status" /></td>
    <td><code>string</code></td>
    <td>The status of the file share. Valid Values: CREATING | UPDATING | AVAILABLE | DELETING</td>
</tr>
<tr>
    <td><CopyableCode code="file_share_type" /></td>
    <td><code>string</code></td>
    <td>The type of the file share. (NFS, SMB)</td>
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
    <td><a href="#list_file_shares"><CopyableCode code="list_file_shares" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of the file shares for a specific S3 File Gateway, or the list of file shares that belong to the calling Amazon Web Services account. This operation is only supported for S3 File Gateways.</td>
</tr>
<tr>
    <td><a href="#delete_file_share"><CopyableCode code="delete_file_share" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a file share from an S3 File Gateway. This operation is only supported for S3 File Gateways.</td>
</tr>
<tr>
    <td><a href="#evict_files_failing_upload"><CopyableCode code="evict_files_failing_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileShareARN"><code>FileShareARN</code></a></td>
    <td></td>
    <td>Starts a process that cleans the specified file share's cache of file entries that are failing upload to Amazon S3. This API operation reports success if the request is received with valid arguments, and there are no other cache clean operations currently in-progress for the specified file share. After a successful request, the cache clean operation occurs asynchronously and reports progress using CloudWatch logs and notifications. If ForceRemove is set to True, the cache clean operation will delete file data from the gateway which might otherwise be recoverable. We recommend using this operation only after all other methods to clear files failing upload have been exhausted, and if your business need outweighs the potential data loss.</td>
</tr>
<tr>
    <td><a href="#notify_when_uploaded"><CopyableCode code="notify_when_uploaded" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FileShareARN"><code>FileShareARN</code></a></td>
    <td></td>
    <td>Sends you notification through Amazon EventBridge when all files written to your file share have been uploaded to Amazon S3. Storage Gateway can send a notification through Amazon EventBridge when all files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you make a request for notification. When the upload is done, Storage Gateway sends you notification through EventBridge. You can configure EventBridge to send the notification through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File Gateways. For more information, see Getting file upload notification in the Amazon S3 File Gateway User Guide.</td>
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
    defaultValue="list_file_shares"
    values={[
        { label: 'list_file_shares', value: 'list_file_shares' }
    ]}
>
<TabItem value="list_file_shares">

Gets a list of the file shares for a specific S3 File Gateway, or the list of file shares that belong to the calling Amazon Web Services account. This operation is only supported for S3 File Gateways.

```sql
SELECT
file_share_arn,
file_share_id,
file_share_status,
file_share_type,
gateway_arn
FROM aws.storagegateway.file_shares
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_file_share"
    values={[
        { label: 'delete_file_share', value: 'delete_file_share' }
    ]}
>
<TabItem value="delete_file_share">

Deletes a file share from an S3 File Gateway. This operation is only supported for S3 File Gateways.

```sql
DELETE FROM aws.storagegateway.file_shares
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="evict_files_failing_upload"
    values={[
        { label: 'evict_files_failing_upload', value: 'evict_files_failing_upload' },
        { label: 'notify_when_uploaded', value: 'notify_when_uploaded' }
    ]}
>
<TabItem value="evict_files_failing_upload">

Starts a process that cleans the specified file share's cache of file entries that are failing upload to Amazon S3. This API operation reports success if the request is received with valid arguments, and there are no other cache clean operations currently in-progress for the specified file share. After a successful request, the cache clean operation occurs asynchronously and reports progress using CloudWatch logs and notifications. If ForceRemove is set to True, the cache clean operation will delete file data from the gateway which might otherwise be recoverable. We recommend using this operation only after all other methods to clear files failing upload have been exhausted, and if your business need outweighs the potential data loss.

```sql
EXEC aws.storagegateway.file_shares.evict_files_failing_upload 
@region='{{ region }}' --required 
@@json=
'{
"FileShareARN": "{{ FileShareARN }}", 
"ForceRemove": {{ ForceRemove }}
}'
;
```
</TabItem>
<TabItem value="notify_when_uploaded">

Sends you notification through Amazon EventBridge when all files written to your file share have been uploaded to Amazon S3. Storage Gateway can send a notification through Amazon EventBridge when all files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the file share up to the time that you make a request for notification. When the upload is done, Storage Gateway sends you notification through EventBridge. You can configure EventBridge to send the notification through event targets such as Amazon SNS or Lambda function. This operation is only supported for S3 File Gateways. For more information, see Getting file upload notification in the Amazon S3 File Gateway User Guide.

```sql
EXEC aws.storagegateway.file_shares.notify_when_uploaded 
@region='{{ region }}' --required 
@@json=
'{
"FileShareARN": "{{ FileShareARN }}"
}'
;
```
</TabItem>
</Tabs>
