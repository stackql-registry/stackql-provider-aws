--- 
title: serverless_cache_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - serverless_cache_snapshots
  - elasticache
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

Creates, updates, deletes, gets or lists a <code>serverless_cache_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="serverless_cache_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.serverless_cache_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_serverless_cache_snapshots"
    values={[
        { label: 'describe_serverless_cache_snapshots', value: 'describe_serverless_cache_snapshots' }
    ]}
>
<TabItem value="describe_serverless_cache_snapshots">

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
    <td><CopyableCode code="ARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a serverless cache snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr>
    <td><CopyableCode code="BytesUsedForCache" /></td>
    <td><code>string</code></td>
    <td>The total size of a serverless cache snapshot, in bytes. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string</code></td>
    <td>The date and time that the source serverless cache's metadata and cache data set was obtained for the snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpiryTime" /></td>
    <td><code>string</code></td>
    <td>The time that the serverless cache snapshot will expire. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services Key Management Service (KMS) key of a serverless cache snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr>
    <td><CopyableCode code="ServerlessCacheConfiguration" /></td>
    <td><code>string</code></td>
    <td>The configuration of the serverless cache, at the time the snapshot was taken. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr>
    <td><CopyableCode code="ServerlessCacheSnapshotName" /></td>
    <td><code>string</code></td>
    <td>The identifier of a serverless cache snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotType" /></td>
    <td><code>string</code></td>
    <td>The type of snapshot of serverless cache. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the serverless cache. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
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
    <td><a href="#describe_serverless_cache_snapshots"><CopyableCode code="describe_serverless_cache_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ServerlessCacheName"><code>ServerlessCacheName</code></a>, <a href="#parameter-ServerlessCacheSnapshotName"><code>ServerlessCacheSnapshotName</code></a>, <a href="#parameter-SnapshotType"><code>SnapshotType</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Returns information about serverless cache snapshots. By default, this API lists all of the customer’s serverless cache snapshots. It can also describe a single serverless cache snapshot, or the snapshots associated with a particular serverless cache. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr>
    <td><a href="#create_serverless_cache_snapshot"><CopyableCode code="create_serverless_cache_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ServerlessCacheSnapshotName"><code>ServerlessCacheSnapshotName</code></a>, <a href="#parameter-ServerlessCacheName"><code>ServerlessCacheName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>This API creates a copy of an entire ServerlessCache at a specific moment in time. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr>
    <td><a href="#delete_serverless_cache_snapshot"><CopyableCode code="delete_serverless_cache_snapshot" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ServerlessCacheSnapshotName"><code>ServerlessCacheSnapshotName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing serverless cache snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
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
<tr id="parameter-ServerlessCacheName">
    <td><CopyableCode code="ServerlessCacheName" /></td>
    <td><code>string</code></td>
    <td>The name of an existing serverless cache. The snapshot is created from this cache. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr id="parameter-ServerlessCacheSnapshotName">
    <td><CopyableCode code="ServerlessCacheSnapshotName" /></td>
    <td><code>string</code></td>
    <td>Idenfitier of the snapshot to be deleted. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-KmsKeyId">
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The ID of the KMS key used to encrypt the snapshot. Available for Valkey, Redis OSS and Serverless Memcached only. Default: NULL</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified max-results value, a market is included in the response so that remaining results can be retrieved. Available for Valkey, Redis OSS and Serverless Memcached only.The default is 50. The Validation Constraints are a maximum of 50.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>An optional marker returned from a prior request to support pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by max-results. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr id="parameter-ServerlessCacheName">
    <td><CopyableCode code="ServerlessCacheName" /></td>
    <td><code>string</code></td>
    <td>The identifier of serverless cache. If this parameter is specified, only snapshots associated with that specific serverless cache are described. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr id="parameter-ServerlessCacheSnapshotName">
    <td><CopyableCode code="ServerlessCacheSnapshotName" /></td>
    <td><code>string</code></td>
    <td>The identifier of the serverless cache’s snapshot. If this parameter is specified, only this snapshot is described. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr id="parameter-SnapshotType">
    <td><CopyableCode code="SnapshotType" /></td>
    <td><code>string</code></td>
    <td>The type of snapshot that is being described. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags to be added to the snapshot resource. A tag is a key-value pair. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_serverless_cache_snapshots"
    values={[
        { label: 'describe_serverless_cache_snapshots', value: 'describe_serverless_cache_snapshots' }
    ]}
>
<TabItem value="describe_serverless_cache_snapshots">

Returns information about serverless cache snapshots. By default, this API lists all of the customer’s serverless cache snapshots. It can also describe a single serverless cache snapshot, or the snapshots associated with a particular serverless cache. Available for Valkey, Redis OSS and Serverless Memcached only.

```sql
SELECT
ARN,
BytesUsedForCache,
CreateTime,
ExpiryTime,
KmsKeyId,
ServerlessCacheConfiguration,
ServerlessCacheSnapshotName,
SnapshotType,
Status
FROM aws.elasticache.serverless_cache_snapshots
WHERE region = '{{ region }}' -- required
AND ServerlessCacheName = '{{ ServerlessCacheName }}'
AND ServerlessCacheSnapshotName = '{{ ServerlessCacheSnapshotName }}'
AND SnapshotType = '{{ SnapshotType }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_serverless_cache_snapshot"
    values={[
        { label: 'create_serverless_cache_snapshot', value: 'create_serverless_cache_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_serverless_cache_snapshot">

This API creates a copy of an entire ServerlessCache at a specific moment in time. Available for Valkey, Redis OSS and Serverless Memcached only.

```sql
INSERT INTO aws.elasticache.serverless_cache_snapshots (
ServerlessCacheSnapshotName,
ServerlessCacheName,
region,
KmsKeyId,
Tags
)
SELECT 
'{{ ServerlessCacheSnapshotName }}',
'{{ ServerlessCacheName }}',
'{{ region }}',
'{{ KmsKeyId }}',
'{{ Tags }}'
RETURNING
ARN,
BytesUsedForCache,
CreateTime,
ExpiryTime,
KmsKeyId,
ServerlessCacheConfiguration,
ServerlessCacheSnapshotName,
SnapshotType,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: serverless_cache_snapshots
  props:
    - name: ServerlessCacheSnapshotName
      value: "{{ ServerlessCacheSnapshotName }}"
      description: Required parameter for the serverless_cache_snapshots resource.
    - name: ServerlessCacheName
      value: "{{ ServerlessCacheName }}"
      description: Required parameter for the serverless_cache_snapshots resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the serverless_cache_snapshots resource.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: The ID of the KMS key used to encrypt the snapshot. Available for Valkey, Redis OSS and Serverless Memcached only. Default: NULL
      description: The ID of the KMS key used to encrypt the snapshot. Available for Valkey, Redis OSS and Serverless Memcached only. Default: NULL
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags to be added to the snapshot resource. A tag is a key-value pair. Available for Valkey, Redis OSS and Serverless Memcached only.
      description: A list of tags to be added to the snapshot resource. A tag is a key-value pair. Available for Valkey, Redis OSS and Serverless Memcached only.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_serverless_cache_snapshot"
    values={[
        { label: 'delete_serverless_cache_snapshot', value: 'delete_serverless_cache_snapshot' }
    ]}
>
<TabItem value="delete_serverless_cache_snapshot">

Deletes an existing serverless cache snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.

```sql
DELETE FROM aws.elasticache.serverless_cache_snapshots
WHERE ServerlessCacheSnapshotName = '{{ ServerlessCacheSnapshotName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
