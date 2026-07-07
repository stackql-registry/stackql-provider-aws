--- 
title: records
hide_title: false
hide_table_of_contents: false
keywords:
  - records
  - cognito_sync
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

Creates, updates, deletes, gets or lists a <code>records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_sync.records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_records"
    values={[
        { label: 'list_records', value: 'list_records' }
    ]}
>
<TabItem value="list_records">

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
    <td><CopyableCode code="Count" /></td>
    <td><code>integer</code></td>
    <td>Total number of records.</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetDeletedAfterRequestedSyncCount" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value specifying whether to delete the dataset locally.</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetExists" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the dataset exists.</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetSyncCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>Server sync count for this dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>The user/device that made the last change to this record.</td>
</tr>
<tr>
    <td><CopyableCode code="MergedDatasetNames" /></td>
    <td><code>array</code></td>
    <td>Names of merged datasets.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token for obtaining the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="Records" /></td>
    <td><code>array</code></td>
    <td>A list of all records.</td>
</tr>
<tr>
    <td><CopyableCode code="SyncSessionToken" /></td>
    <td><code>string</code></td>
    <td>A token containing a session ID, identity ID, and expiration.</td>
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
    <td><a href="#list_records"><CopyableCode code="list_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identity_pool_id"><code>identity_pool_id</code></a>, <a href="#parameter-identity_id"><code>identity_id</code></a>, <a href="#parameter-dataset_name"><code>dataset_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-lastSyncCount"><code>lastSyncCount</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-syncSessionToken"><code>syncSessionToken</code></a></td>
    <td>Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data. ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</td>
</tr>
<tr>
    <td><a href="#update_records"><CopyableCode code="update_records" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identity_pool_id"><code>identity_pool_id</code></a>, <a href="#parameter-identity_id"><code>identity_id</code></a>, <a href="#parameter-dataset_name"><code>dataset_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SyncSessionToken"><code>SyncSessionToken</code></a></td>
    <td><a href="#parameter-x-amz-Client-Context"><code>x-amz-Client-Context</code></a></td>
    <td>Posts updates to records and adds and deletes records for a dataset and user. The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count. For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0. This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</td>
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
<tr id="parameter-dataset_name">
    <td><CopyableCode code="dataset_name" /></td>
    <td><code>string</code></td>
    <td>A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot).</td>
</tr>
<tr id="parameter-identity_id">
    <td><CopyableCode code="identity_id" /></td>
    <td><code>string</code></td>
    <td>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</td>
</tr>
<tr id="parameter-identity_pool_id">
    <td><CopyableCode code="identity_pool_id" /></td>
    <td><code>string</code></td>
    <td>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-lastSyncCount">
    <td><CopyableCode code="lastSyncCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The last server sync count for this record.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token for obtaining the next page of results.</td>
</tr>
<tr id="parameter-syncSessionToken">
    <td><CopyableCode code="syncSessionToken" /></td>
    <td><code>string</code></td>
    <td>A token containing a session ID, identity ID, and expiration.</td>
</tr>
<tr id="parameter-x-amz-Client-Context">
    <td><CopyableCode code="x-amz-Client-Context" /></td>
    <td><code>string</code></td>
    <td>Intended to supply a device ID that will populate the lastModifiedBy field referenced in other methods. The ClientContext field is not yet implemented.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_records"
    values={[
        { label: 'list_records', value: 'list_records' }
    ]}
>
<TabItem value="list_records">

Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data. ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.

```sql
SELECT
Count,
DatasetDeletedAfterRequestedSyncCount,
DatasetExists,
DatasetSyncCount,
LastModifiedBy,
MergedDatasetNames,
NextToken,
Records,
SyncSessionToken
FROM aws.cognito_sync.records
WHERE identity_pool_id = '{{ identity_pool_id }}' -- required
AND identity_id = '{{ identity_id }}' -- required
AND dataset_name = '{{ dataset_name }}' -- required
AND region = '{{ region }}' -- required
AND lastSyncCount = '{{ lastSyncCount }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND syncSessionToken = '{{ syncSessionToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_records"
    values={[
        { label: 'update_records', value: 'update_records' }
    ]}
>
<TabItem value="update_records">

Posts updates to records and adds and deletes records for a dataset and user. The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count. For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0. This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.

```sql
UPDATE aws.cognito_sync.records
SET 
DeviceId = '{{ DeviceId }}',
RecordPatches = '{{ RecordPatches }}',
SyncSessionToken = '{{ SyncSessionToken }}'
WHERE 
identity_pool_id = '{{ identity_pool_id }}' --required
AND identity_id = '{{ identity_id }}' --required
AND dataset_name = '{{ dataset_name }}' --required
AND region = '{{ region }}' --required
AND SyncSessionToken = '{{ SyncSessionToken }}' --required
AND `x-amz-Client-Context` = '{{ x-amz-Client-Context}}'
RETURNING
Records;
```
</TabItem>
</Tabs>
