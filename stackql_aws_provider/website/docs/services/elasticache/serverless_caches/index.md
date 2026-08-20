--- 
title: serverless_caches
hide_title: false
hide_table_of_contents: false
keywords:
  - serverless_caches
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

Creates, updates, deletes, gets or lists a <code>serverless_caches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="serverless_caches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.serverless_caches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_serverless_caches"
    values={[
        { label: 'describe_serverless_caches', value: 'describe_serverless_caches' }
    ]}
>
<TabItem value="describe_serverless_caches">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the serverless cache.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_usage_limits" /></td>
    <td><code>string</code></td>
    <td>The cache usage limit for the serverless cache.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string</code></td>
    <td>When the serverless cache was created.</td>
</tr>
<tr>
    <td><CopyableCode code="daily_snapshot_time" /></td>
    <td><code>string</code></td>
    <td>The daily time that a cache snapshot will be created. Default is NULL, i.e. snapshots will not be created at a specific time on a daily basis. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the serverless cache.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Represents the information required for client programs to connect to a cache node. This value is read-only.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The engine the serverless cache is compatible with.</td>
</tr>
<tr>
    <td><CopyableCode code="full_engine_version" /></td>
    <td><code>string</code></td>
    <td>The name and version number of the engine the serverless cache is compatible with.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services Key Management Service (KMS) key that is used to encrypt data at rest in the serverless cache.</td>
</tr>
<tr>
    <td><CopyableCode code="major_engine_version" /></td>
    <td><code>string</code></td>
    <td>The version number of the engine the serverless cache is compatible with.</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>The type of IP address protocol used by the serverless cache. Must be either ipv4 | ipv6 | dual_stack. ipv6 is only supported with IPv6-only subnets. If not specified, defaults to ipv4, unless all provided subnets are IPv6-only, in which case it defaults to ipv6.</td>
</tr>
<tr>
    <td><CopyableCode code="reader_endpoint" /></td>
    <td><code>string</code></td>
    <td>Represents the information required for client programs to connect to a cache node. This value is read-only.</td>
</tr>
<tr>
    <td><CopyableCode code="security_group_ids" /></td>
    <td><code>string</code></td>
    <td>The IDs of the EC2 security groups associated with the serverless cache.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_cache_name" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the serverless cache.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_retention_limit" /></td>
    <td><code>integer</code></td>
    <td>The number of days for which ElastiCache retains automatic snapshots before deleting them. Available for Valkey, Redis OSS and Serverless Memcached only. The maximum value allowed is 35 days.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the serverless cache. The allowed values are CREATING, AVAILABLE, DELETING, CREATE-FAILED and MODIFYING.</td>
</tr>
<tr>
    <td><CopyableCode code="storage_encryption_type" /></td>
    <td><code>string</code></td>
    <td>Indicates the type of encryption for data stored at rest in the serverless cache. Serverless caches are always encrypted at rest. The value is sse-elasticache if an ElastiCache service-managed key is used, or sse-kms if a customer-managed KMS key is used.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_ids" /></td>
    <td><code>string</code></td>
    <td>If no subnet IDs are given and your VPC is in us-west-1, then ElastiCache will select 2 default subnets across AZs in your VPC. For all other Regions, if no subnet IDs are given then ElastiCache will select 3 default subnets across AZs in your default VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="user_group_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user group associated with the serverless cache. Available for Valkey and Redis OSS only. Default is NULL.</td>
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
    <td><a href="#describe_serverless_caches"><CopyableCode code="describe_serverless_caches" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ServerlessCacheName"><code>ServerlessCacheName</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns information about a specific serverless cache. If no identifier is specified, then the API returns information on all the serverless caches belonging to this Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_serverless_cache"><CopyableCode code="create_serverless_cache" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ServerlessCacheName"><code>ServerlessCacheName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-MajorEngineVersion"><code>MajorEngineVersion</code></a>, <a href="#parameter-CacheUsageLimits"><code>CacheUsageLimits</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-SecurityGroupIds"><code>SecurityGroupIds</code></a>, <a href="#parameter-SnapshotArnsToRestore"><code>SnapshotArnsToRestore</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-UserGroupId"><code>UserGroupId</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a>, <a href="#parameter-SnapshotRetentionLimit"><code>SnapshotRetentionLimit</code></a>, <a href="#parameter-DailySnapshotTime"><code>DailySnapshotTime</code></a>, <a href="#parameter-NetworkType"><code>NetworkType</code></a></td>
    <td>Creates a serverless cache.</td>
</tr>
<tr>
    <td><a href="#modify_serverless_cache"><CopyableCode code="modify_serverless_cache" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ServerlessCacheName"><code>ServerlessCacheName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-CacheUsageLimits"><code>CacheUsageLimits</code></a>, <a href="#parameter-RemoveUserGroup"><code>RemoveUserGroup</code></a>, <a href="#parameter-UserGroupId"><code>UserGroupId</code></a>, <a href="#parameter-SecurityGroupIds"><code>SecurityGroupIds</code></a>, <a href="#parameter-SnapshotRetentionLimit"><code>SnapshotRetentionLimit</code></a>, <a href="#parameter-DailySnapshotTime"><code>DailySnapshotTime</code></a>, <a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-MajorEngineVersion"><code>MajorEngineVersion</code></a></td>
    <td>This API modifies the attributes of a serverless cache.</td>
</tr>
<tr>
    <td><a href="#delete_serverless_cache"><CopyableCode code="delete_serverless_cache" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ServerlessCacheName"><code>ServerlessCacheName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-FinalSnapshotName"><code>FinalSnapshotName</code></a></td>
    <td>Deletes a specified existing serverless cache. CreateServerlessCacheSnapshot permission is required to create a final snapshot. Without this permission, the API call will fail with an Access Denied exception.</td>
</tr>
<tr>
    <td><a href="#copy_serverless_cache_snapshot"><CopyableCode code="copy_serverless_cache_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SourceServerlessCacheSnapshotName"><code>SourceServerlessCacheSnapshotName</code></a>, <a href="#parameter-TargetServerlessCacheSnapshotName"><code>TargetServerlessCacheSnapshotName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a copy of an existing serverless cache’s snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr>
    <td><a href="#export_serverless_cache_snapshot"><CopyableCode code="export_serverless_cache_snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ServerlessCacheSnapshotName"><code>ServerlessCacheSnapshotName</code></a>, <a href="#parameter-S3BucketName"><code>S3BucketName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the functionality to export the serverless cache snapshot data to Amazon S3. Available for Valkey and Redis OSS only.</td>
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
<tr id="parameter-S3BucketName">
    <td><CopyableCode code="S3BucketName" /></td>
    <td><code>string</code></td>
    <td>Name of the Amazon S3 bucket to export the snapshot to. The Amazon S3 bucket must also be in same region as the snapshot. Available for Valkey and Redis OSS only.</td>
</tr>
<tr id="parameter-ServerlessCacheName">
    <td><CopyableCode code="ServerlessCacheName" /></td>
    <td><code>string</code></td>
    <td>The identifier of the serverless cache to be deleted.</td>
</tr>
<tr id="parameter-ServerlessCacheSnapshotName">
    <td><CopyableCode code="ServerlessCacheSnapshotName" /></td>
    <td><code>string</code></td>
    <td>The identifier of the serverless cache snapshot to be exported to S3. Available for Valkey and Redis OSS only.</td>
</tr>
<tr id="parameter-SourceServerlessCacheSnapshotName">
    <td><CopyableCode code="SourceServerlessCacheSnapshotName" /></td>
    <td><code>string</code></td>
    <td>The identifier of the existing serverless cache’s snapshot to be copied. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr id="parameter-TargetServerlessCacheSnapshotName">
    <td><CopyableCode code="TargetServerlessCacheSnapshotName" /></td>
    <td><code>string</code></td>
    <td>The identifier for the snapshot to be created. Available for Valkey, Redis OSS and Serverless Memcached only. This value is stored as a lowercase string.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CacheUsageLimits">
    <td><CopyableCode code="CacheUsageLimits" /></td>
    <td><code>object</code></td>
    <td>Modify the cache usage limit for the serverless cache.</td>
</tr>
<tr id="parameter-DailySnapshotTime">
    <td><CopyableCode code="DailySnapshotTime" /></td>
    <td><code>string</code></td>
    <td>The daily time during which Elasticache begins taking a daily snapshot of the serverless cache. Available for Valkey, Redis OSS and Serverless Memcached only. The default is NULL, i.e. the existing snapshot time configured for the cluster is not removed.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>User provided description for the serverless cache. Default = NULL, i.e. the existing description is not removed/modified. The description has a maximum length of 255 characters.</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>Modifies the engine listed in a serverless cache request. The options are valkey, memcached or redis.</td>
</tr>
<tr id="parameter-FinalSnapshotName">
    <td><CopyableCode code="FinalSnapshotName" /></td>
    <td><code>string</code></td>
    <td>Name of the final snapshot to be taken before the serverless cache is deleted. Available for Valkey, Redis OSS and Serverless Memcached only. Default: NULL, i.e. a final snapshot is not taken.</td>
</tr>
<tr id="parameter-KmsKeyId">
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the KMS key used to encrypt the target snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr id="parameter-MajorEngineVersion">
    <td><CopyableCode code="MajorEngineVersion" /></td>
    <td><code>string</code></td>
    <td>Modifies the engine vesion listed in a serverless cache request.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records in the response. If more records exist than the specified max-records value, the next token is included in the response so that remaining results can be retrieved. The default is 50.</td>
</tr>
<tr id="parameter-NetworkType">
    <td><CopyableCode code="NetworkType" /></td>
    <td><code>string</code></td>
    <td>The IP protocol version used by the serverless cache. Must be either ipv4 | ipv6 | dual_stack. ipv6 is only supported with IPv6-only subnets. If not specified, defaults to ipv4, unless all provided subnets are IPv6-only, in which case it defaults to ipv6.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>An optional marker returned from a prior request to support pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxResults.</td>
</tr>
<tr id="parameter-RemoveUserGroup">
    <td><CopyableCode code="RemoveUserGroup" /></td>
    <td><code>boolean</code></td>
    <td>The identifier of the UserGroup to be removed from association with the Valkey and Redis OSS serverless cache. Available for Valkey and Redis OSS only. Default is NULL.</td>
</tr>
<tr id="parameter-SecurityGroupIds">
    <td><CopyableCode code="SecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>The new list of VPC security groups to be associated with the serverless cache. Populating this list means the current VPC security groups will be removed. This security group is used to authorize traffic access for the VPC end-point (private-link). Default = NULL - the existing list of VPC security groups is not removed.</td>
</tr>
<tr id="parameter-ServerlessCacheName">
    <td><CopyableCode code="ServerlessCacheName" /></td>
    <td><code>string</code></td>
    <td>The identifier for the serverless cache. If this parameter is specified, only information about that specific serverless cache is returned. Default: NULL</td>
</tr>
<tr id="parameter-SnapshotArnsToRestore">
    <td><CopyableCode code="SnapshotArnsToRestore" /></td>
    <td><code>array</code></td>
    <td>The ARN(s) of the snapshot that the new serverless cache will be created from. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr id="parameter-SnapshotRetentionLimit">
    <td><CopyableCode code="SnapshotRetentionLimit" /></td>
    <td><code>integer</code></td>
    <td>The number of days for which Elasticache retains automatic snapshots before deleting them. Available for Valkey, Redis OSS and Serverless Memcached only. Default = NULL, i.e. the existing snapshot-retention-limit will not be removed or modified. The maximum value allowed is 35 days.</td>
</tr>
<tr id="parameter-SubnetIds">
    <td><CopyableCode code="SubnetIds" /></td>
    <td><code>array</code></td>
    <td>A list of the identifiers of the subnets where the VPC endpoint for the serverless cache will be deployed. All the subnetIds must belong to the same VPC.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags to be added to the target snapshot resource. A tag is a key-value pair. Available for Valkey, Redis OSS and Serverless Memcached only. Default: NULL</td>
</tr>
<tr id="parameter-UserGroupId">
    <td><CopyableCode code="UserGroupId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the UserGroup to be associated with the serverless cache. Available for Valkey and Redis OSS only. Default is NULL - the existing UserGroup is not removed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_serverless_caches"
    values={[
        { label: 'describe_serverless_caches', value: 'describe_serverless_caches' }
    ]}
>
<TabItem value="describe_serverless_caches">

Returns information about a specific serverless cache. If no identifier is specified, then the API returns information on all the serverless caches belonging to this Amazon Web Services account.

```sql
SELECT
arn,
cache_usage_limits,
create_time,
daily_snapshot_time,
description,
endpoint,
engine,
full_engine_version,
kms_key_id,
major_engine_version,
network_type,
reader_endpoint,
security_group_ids,
serverless_cache_name,
snapshot_retention_limit,
status,
storage_encryption_type,
subnet_ids,
user_group_id
FROM aws.elasticache.serverless_caches
WHERE region = '{{ region }}' -- required
AND ServerlessCacheName = '{{ ServerlessCacheName }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_serverless_cache"
    values={[
        { label: 'create_serverless_cache', value: 'create_serverless_cache' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_serverless_cache">

Creates a serverless cache.

```sql
INSERT INTO aws.elasticache.serverless_caches (
ServerlessCacheName,
region,
Description,
Engine,
MajorEngineVersion,
CacheUsageLimits,
KmsKeyId,
SecurityGroupIds,
SnapshotArnsToRestore,
Tags,
UserGroupId,
SubnetIds,
SnapshotRetentionLimit,
DailySnapshotTime,
NetworkType
)
SELECT 
'{{ ServerlessCacheName }}',
'{{ region }}',
'{{ Description }}',
'{{ Engine }}',
'{{ MajorEngineVersion }}',
'{{ CacheUsageLimits }}',
'{{ KmsKeyId }}',
'{{ SecurityGroupIds }}',
'{{ SnapshotArnsToRestore }}',
'{{ Tags }}',
'{{ UserGroupId }}',
'{{ SubnetIds }}',
'{{ SnapshotRetentionLimit }}',
'{{ DailySnapshotTime }}',
'{{ NetworkType }}'
RETURNING
arn,
cache_usage_limits,
create_time,
daily_snapshot_time,
description,
endpoint,
engine,
full_engine_version,
kms_key_id,
major_engine_version,
network_type,
reader_endpoint,
security_group_ids,
serverless_cache_name,
snapshot_retention_limit,
status,
storage_encryption_type,
subnet_ids,
user_group_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: serverless_caches
  props:
    - name: ServerlessCacheName
      value: "{{ ServerlessCacheName }}"
      description: Required parameter for the serverless_caches resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the serverless_caches resource.
    - name: Description
      value: "{{ Description }}"
      description: User-provided description for the serverless cache. The default is NULL, i.e. if no description is provided then an empty string will be returned. The maximum length is 255 characters.
      description: User-provided description for the serverless cache. The default is NULL, i.e. if no description is provided then an empty string will be returned. The maximum length is 255 characters.
    - name: Engine
      value: "{{ Engine }}"
      description: The name of the cache engine to be used for creating the serverless cache.
      description: The name of the cache engine to be used for creating the serverless cache.
    - name: MajorEngineVersion
      value: "{{ MajorEngineVersion }}"
      description: The version of the cache engine that will be used to create the serverless cache.
      description: The version of the cache engine that will be used to create the serverless cache.
    - name: CacheUsageLimits
      value: "{{ CacheUsageLimits }}"
      description: Sets the cache usage limits for storage and ElastiCache Processing Units for the cache.
      description: Sets the cache usage limits for storage and ElastiCache Processing Units for the cache.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: ARN of the customer managed key for encrypting the data at rest. If no KMS key is provided, a default service key is used.
      description: ARN of the customer managed key for encrypting the data at rest. If no KMS key is provided, a default service key is used.
    - name: SecurityGroupIds
      value: "{{ SecurityGroupIds }}"
      description: A list of the one or more VPC security groups to be associated with the serverless cache. The security group will authorize traffic access for the VPC end-point (private-link). If no other information is given this will be the VPC’s Default Security Group that is associated with the cluster VPC end-point.
      description: A list of the one or more VPC security groups to be associated with the serverless cache. The security group will authorize traffic access for the VPC end-point (private-link). If no other information is given this will be the VPC’s Default Security Group that is associated with the cluster VPC end-point.
    - name: SnapshotArnsToRestore
      value: "{{ SnapshotArnsToRestore }}"
      description: The ARN(s) of the snapshot that the new serverless cache will be created from. Available for Valkey, Redis OSS and Serverless Memcached only.
      description: The ARN(s) of the snapshot that the new serverless cache will be created from. Available for Valkey, Redis OSS and Serverless Memcached only.
    - name: Tags
      value: "{{ Tags }}"
      description: The list of tags (key, value) pairs to be added to the serverless cache resource. Default is NULL.
      description: The list of tags (key, value) pairs to be added to the serverless cache resource. Default is NULL.
    - name: UserGroupId
      value: "{{ UserGroupId }}"
      description: The identifier of the UserGroup to be associated with the serverless cache. Available for Valkey and Redis OSS only. Default is NULL.
      description: The identifier of the UserGroup to be associated with the serverless cache. Available for Valkey and Redis OSS only. Default is NULL.
    - name: SubnetIds
      value: "{{ SubnetIds }}"
      description: A list of the identifiers of the subnets where the VPC endpoint for the serverless cache will be deployed. All the subnetIds must belong to the same VPC.
      description: A list of the identifiers of the subnets where the VPC endpoint for the serverless cache will be deployed. All the subnetIds must belong to the same VPC.
    - name: SnapshotRetentionLimit
      value: {{ SnapshotRetentionLimit }}
      description: The number of days for which ElastiCache retains automatic snapshots before deleting them. Available for Valkey, Redis OSS and Serverless Memcached only. The maximum value allowed is 35 days.
      description: The number of days for which ElastiCache retains automatic snapshots before deleting them. Available for Valkey, Redis OSS and Serverless Memcached only. The maximum value allowed is 35 days.
    - name: DailySnapshotTime
      value: "{{ DailySnapshotTime }}"
      description: The daily time that snapshots will be created from the new serverless cache. By default this number is populated with 0, i.e. no snapshots will be created on an automatic daily basis. Available for Valkey, Redis OSS and Serverless Memcached only.
      description: The daily time that snapshots will be created from the new serverless cache. By default this number is populated with 0, i.e. no snapshots will be created on an automatic daily basis. Available for Valkey, Redis OSS and Serverless Memcached only.
    - name: NetworkType
      value: "{{ NetworkType }}"
      description: The IP protocol version used by the serverless cache. Must be either ipv4 | ipv6 | dual_stack. ipv6 is only supported with IPv6-only subnets. If not specified, defaults to ipv4, unless all provided subnets are IPv6-only, in which case it defaults to ipv6.
      description: The IP protocol version used by the serverless cache. Must be either ipv4 | ipv6 | dual_stack. ipv6 is only supported with IPv6-only subnets. If not specified, defaults to ipv4, unless all provided subnets are IPv6-only, in which case it defaults to ipv6.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_serverless_cache"
    values={[
        { label: 'modify_serverless_cache', value: 'modify_serverless_cache' }
    ]}
>
<TabItem value="modify_serverless_cache">

This API modifies the attributes of a serverless cache.

```sql
UPDATE aws.elasticache.serverless_caches
SET 
-- No updatable properties
WHERE 
ServerlessCacheName = '{{ ServerlessCacheName }}' --required
AND region = '{{ region }}' --required
AND Description = '{{ Description}}'
AND CacheUsageLimits = '{{ CacheUsageLimits}}'
AND RemoveUserGroup = {{ RemoveUserGroup}}
AND UserGroupId = '{{ UserGroupId}}'
AND SecurityGroupIds = '{{ SecurityGroupIds}}'
AND SnapshotRetentionLimit = '{{ SnapshotRetentionLimit}}'
AND DailySnapshotTime = '{{ DailySnapshotTime}}'
AND Engine = '{{ Engine}}'
AND MajorEngineVersion = '{{ MajorEngineVersion}}'
RETURNING
arn,
cache_usage_limits,
create_time,
daily_snapshot_time,
description,
endpoint,
engine,
full_engine_version,
kms_key_id,
major_engine_version,
network_type,
reader_endpoint,
security_group_ids,
serverless_cache_name,
snapshot_retention_limit,
status,
storage_encryption_type,
subnet_ids,
user_group_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_serverless_cache"
    values={[
        { label: 'delete_serverless_cache', value: 'delete_serverless_cache' }
    ]}
>
<TabItem value="delete_serverless_cache">

Deletes a specified existing serverless cache. CreateServerlessCacheSnapshot permission is required to create a final snapshot. Without this permission, the API call will fail with an Access Denied exception.

```sql
DELETE FROM aws.elasticache.serverless_caches
WHERE ServerlessCacheName = '{{ ServerlessCacheName }}' --required
AND region = '{{ region }}' --required
AND FinalSnapshotName = '{{ FinalSnapshotName }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="copy_serverless_cache_snapshot"
    values={[
        { label: 'copy_serverless_cache_snapshot', value: 'copy_serverless_cache_snapshot' },
        { label: 'export_serverless_cache_snapshot', value: 'export_serverless_cache_snapshot' }
    ]}
>
<TabItem value="copy_serverless_cache_snapshot">

Creates a copy of an existing serverless cache’s snapshot. Available for Valkey, Redis OSS and Serverless Memcached only.

```sql
EXEC aws.elasticache.serverless_caches.copy_serverless_cache_snapshot 
@SourceServerlessCacheSnapshotName='{{ SourceServerlessCacheSnapshotName }}' --required, 
@TargetServerlessCacheSnapshotName='{{ TargetServerlessCacheSnapshotName }}' --required, 
@region='{{ region }}' --required, 
@KmsKeyId='{{ KmsKeyId }}', 
@Tags='{{ Tags }}'
;
```
</TabItem>
<TabItem value="export_serverless_cache_snapshot">

Provides the functionality to export the serverless cache snapshot data to Amazon S3. Available for Valkey and Redis OSS only.

```sql
EXEC aws.elasticache.serverless_caches.export_serverless_cache_snapshot 
@ServerlessCacheSnapshotName='{{ ServerlessCacheSnapshotName }}' --required, 
@S3BucketName='{{ S3BucketName }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
