--- 
title: instance_storage_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_storage_configs
  - connect
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

Creates, updates, deletes, gets or lists an <code>instance_storage_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_storage_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.instance_storage_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_storage_config"
    values={[
        { label: 'describe_instance_storage_config', value: 'describe_instance_storage_config' },
        { label: 'list_instance_storage_configs', value: 'list_instance_storage_configs' }
    ]}
>
<TabItem value="describe_instance_storage_config">

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
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</td>
</tr>
<tr>
    <td><CopyableCode code="kinesis_firehose_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of the Kinesis Firehose delivery stream.</td>
</tr>
<tr>
    <td><CopyableCode code="kinesis_stream_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of the Kinesis data stream.</td>
</tr>
<tr>
    <td><CopyableCode code="kinesis_video_stream_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of the Kinesis video stream.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_config" /></td>
    <td><code>object</code></td>
    <td>The S3 bucket configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_type" /></td>
    <td><code>string</code></td>
    <td>A valid storage type. (S3, KINESIS_VIDEO_STREAM, KINESIS_STREAM, KINESIS_FIREHOSE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_instance_storage_configs">

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
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</td>
</tr>
<tr>
    <td><CopyableCode code="kinesis_firehose_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of the Kinesis Firehose delivery stream.</td>
</tr>
<tr>
    <td><CopyableCode code="kinesis_stream_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of the Kinesis data stream.</td>
</tr>
<tr>
    <td><CopyableCode code="kinesis_video_stream_config" /></td>
    <td><code>object</code></td>
    <td>The configuration of the Kinesis video stream.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_config" /></td>
    <td><code>object</code></td>
    <td>The S3 bucket configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_type" /></td>
    <td><code>string</code></td>
    <td>A valid storage type. (S3, KINESIS_VIDEO_STREAM, KINESIS_STREAM, KINESIS_FIREHOSE)</td>
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
    <td><a href="#describe_instance_storage_config"><CopyableCode code="describe_instance_storage_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-association_id"><code>association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-resourceType"><code>resourceType</code></a></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Retrieves the current storage configurations for the specified resource type, association ID, and instance ID.</td>
</tr>
<tr>
    <td><a href="#list_instance_storage_configs"><CopyableCode code="list_instance_storage_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of storage configs for the identified instance and resource type.</td>
</tr>
<tr>
    <td><a href="#associate_instance_storage_config"><CopyableCode code="associate_instance_storage_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-StorageConfig"><code>StorageConfig</code></a></td>
    <td></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Associates a storage resource type for the first time. You can only associate one type of storage configuration in a single call. This means, for example, that you can't define an instance with multiple S3 buckets for storing chat transcripts. This API does not create a resource that doesn't exist. It only associates it to the instance. Ensure that the resource being specified in the storage configuration, like an S3 bucket, exists when being used for association.</td>
</tr>
<tr>
    <td><a href="#update_instance_storage_config"><CopyableCode code="update_instance_storage_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-association_id"><code>association_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StorageConfig"><code>StorageConfig</code></a></td>
    <td><a href="#parameter-resourceType"><code>resourceType</code></a></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Updates an existing configuration for a resource type. This API is idempotent.</td>
</tr>
<tr>
    <td><a href="#disassociate_instance_storage_config"><CopyableCode code="disassociate_instance_storage_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-association_id"><code>association_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Removes the storage type configurations for the specified resource type and association ID.</td>
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
<tr id="parameter-association_id">
    <td><CopyableCode code="association_id" /></td>
    <td><code>string</code></td>
    <td>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>A valid resource type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_instance_storage_config"
    values={[
        { label: 'describe_instance_storage_config', value: 'describe_instance_storage_config' },
        { label: 'list_instance_storage_configs', value: 'list_instance_storage_configs' }
    ]}
>
<TabItem value="describe_instance_storage_config">

This API is in preview release for Amazon Connect and is subject to change. Retrieves the current storage configurations for the specified resource type, association ID, and instance ID.

```sql
SELECT
association_id,
kinesis_firehose_config,
kinesis_stream_config,
kinesis_video_stream_config,
s3_config,
storage_type
FROM aws.connect.instance_storage_configs
WHERE instance_id = '{{ instance_id }}' -- required
AND association_id = '{{ association_id }}' -- required
AND region = '{{ region }}' -- required
AND resourceType = '{{ resourceType }}'
;
```
</TabItem>
<TabItem value="list_instance_storage_configs">

This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of storage configs for the identified instance and resource type.

```sql
SELECT
association_id,
kinesis_firehose_config,
kinesis_stream_config,
kinesis_video_stream_config,
s3_config,
storage_type
FROM aws.connect.instance_storage_configs
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND resourceType = '{{ resourceType }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_instance_storage_config"
    values={[
        { label: 'associate_instance_storage_config', value: 'associate_instance_storage_config' },
        { label: 'update_instance_storage_config', value: 'update_instance_storage_config' },
        { label: 'disassociate_instance_storage_config', value: 'disassociate_instance_storage_config' }
    ]}
>
<TabItem value="associate_instance_storage_config">

This API is in preview release for Amazon Connect and is subject to change. Associates a storage resource type for the first time. You can only associate one type of storage configuration in a single call. This means, for example, that you can't define an instance with multiple S3 buckets for storing chat transcripts. This API does not create a resource that doesn't exist. It only associates it to the instance. Ensure that the resource being specified in the storage configuration, like an S3 bucket, exists when being used for association.

```sql
UPDATE aws.connect.instance_storage_configs
SET 
ResourceType = '{{ ResourceType }}',
StorageConfig = '{{ StorageConfig }}',
ClientToken = '{{ ClientToken }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND ResourceType = '{{ ResourceType }}' --required
AND StorageConfig = '{{ StorageConfig }}' --required
RETURNING
association_id;
```
</TabItem>
<TabItem value="update_instance_storage_config">

This API is in preview release for Amazon Connect and is subject to change. Updates an existing configuration for a resource type. This API is idempotent.

```sql
UPDATE aws.connect.instance_storage_configs
SET 
StorageConfig = '{{ StorageConfig }}',
ClientToken = '{{ ClientToken }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND association_id = '{{ association_id }}' --required
AND region = '{{ region }}' --required
AND StorageConfig = '{{ StorageConfig }}' --required
AND resourceType = '{{ resourceType}}';
```
</TabItem>
<TabItem value="disassociate_instance_storage_config">

This API is in preview release for Amazon Connect and is subject to change. Removes the storage type configurations for the specified resource type and association ID.

```sql
UPDATE aws.connect.instance_storage_configs
SET 
-- No updatable properties
WHERE 
instance_id = '{{ instance_id }}' --required
AND association_id = '{{ association_id }}' --required
AND region = '{{ region }}' --required
AND resourceType = '{{ resourceType}}'
AND clientToken = '{{ clientToken}}';
```
</TabItem>
</Tabs>
