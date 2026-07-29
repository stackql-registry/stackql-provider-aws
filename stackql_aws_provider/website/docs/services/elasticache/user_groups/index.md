--- 
title: user_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - user_groups
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

Creates, updates, deletes, gets or lists a <code>user_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.user_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_user_groups"
    values={[
        { label: 'describe_user_groups', value: 'describe_user_groups' }
    ]}
>
<TabItem value="describe_user_groups">

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
    <td>The Amazon Resource Name (ARN) of the user group.</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>The options are valkey or redis.</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_engine_version" /></td>
    <td><code>string</code></td>
    <td>The minimum engine version required, which is Redis OSS 6.0</td>
</tr>
<tr>
    <td><CopyableCode code="pending_changes" /></td>
    <td><code>string</code></td>
    <td>A list of updates being applied to the user group.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_groups" /></td>
    <td><code>string</code></td>
    <td>A list of replication groups that the user group can access.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_caches" /></td>
    <td><code>string</code></td>
    <td>Indicates which serverless caches the specified user group is associated with. Available for Valkey, Redis OSS and Serverless Memcached only.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Indicates user group status. Can be "creating", "active", "modifying", "deleting".</td>
</tr>
<tr>
    <td><CopyableCode code="user_group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user group.</td>
</tr>
<tr>
    <td><CopyableCode code="user_ids" /></td>
    <td><code>string</code></td>
    <td>The list of user IDs that belong to the user group.</td>
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
    <td><a href="#describe_user_groups"><CopyableCode code="describe_user_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserGroupId"><code>UserGroupId</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of user groups.</td>
</tr>
<tr>
    <td><a href="#create_user_group"><CopyableCode code="create_user_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-UserGroupId"><code>UserGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-UserIds"><code>UserIds</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>For Valkey engine version 7.2 onwards and Redis OSS 6.0 to 7.1: Creates a user group. For more information, see Using Role Based Access Control (RBAC)</td>
</tr>
<tr>
    <td><a href="#modify_user_group"><CopyableCode code="modify_user_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-UserGroupId"><code>UserGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserIdsToAdd"><code>UserIdsToAdd</code></a>, <a href="#parameter-UserIdsToRemove"><code>UserIdsToRemove</code></a>, <a href="#parameter-Engine"><code>Engine</code></a></td>
    <td>Changes the list of users that belong to the user group.</td>
</tr>
<tr>
    <td><a href="#delete_user_group"><CopyableCode code="delete_user_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-UserGroupId"><code>UserGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>For Valkey engine version 7.2 onwards and Redis OSS 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see Using Role Based Access Control (RBAC).</td>
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
<tr id="parameter-UserGroupId">
    <td><CopyableCode code="UserGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the user group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>Modifies the engine listed in a user group. The options are valkey or redis.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. &gt;</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted. Available for Valkey and Redis OSS only.</td>
</tr>
<tr id="parameter-UserGroupId">
    <td><CopyableCode code="UserGroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of the user group.</td>
</tr>
<tr id="parameter-UserIds">
    <td><CopyableCode code="UserIds" /></td>
    <td><code>array</code></td>
    <td>The list of user IDs that belong to the user group.</td>
</tr>
<tr id="parameter-UserIdsToAdd">
    <td><CopyableCode code="UserIdsToAdd" /></td>
    <td><code>array</code></td>
    <td>The list of user IDs to add to the user group.</td>
</tr>
<tr id="parameter-UserIdsToRemove">
    <td><CopyableCode code="UserIdsToRemove" /></td>
    <td><code>array</code></td>
    <td>The list of user IDs to remove from the user group.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_user_groups"
    values={[
        { label: 'describe_user_groups', value: 'describe_user_groups' }
    ]}
>
<TabItem value="describe_user_groups">

Returns a list of user groups.

```sql
SELECT
arn,
engine,
minimum_engine_version,
pending_changes,
replication_groups,
serverless_caches,
status,
user_group_id,
user_ids
FROM aws.elasticache.user_groups
WHERE region = '{{ region }}' -- required
AND UserGroupId = '{{ UserGroupId }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_group"
    values={[
        { label: 'create_user_group', value: 'create_user_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_group">

For Valkey engine version 7.2 onwards and Redis OSS 6.0 to 7.1: Creates a user group. For more information, see Using Role Based Access Control (RBAC)

```sql
INSERT INTO aws.elasticache.user_groups (
UserGroupId,
region,
Engine,
UserIds,
Tags
)
SELECT 
'{{ UserGroupId }}',
'{{ region }}',
'{{ Engine }}',
'{{ UserIds }}',
'{{ Tags }}'
RETURNING
arn,
engine,
minimum_engine_version,
pending_changes,
replication_groups,
serverless_caches,
status,
user_group_id,
user_ids
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: user_groups
  props:
    - name: UserGroupId
      value: "{{ UserGroupId }}"
      description: Required parameter for the user_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the user_groups resource.
    - name: Engine
      value: "{{ Engine }}"
      description: Sets the engine listed in a user group. The options are valkey or redis.
      description: Sets the engine listed in a user group. The options are valkey or redis.
    - name: UserIds
      value: "{{ UserIds }}"
      description: The list of user IDs that belong to the user group.
      description: The list of user IDs that belong to the user group.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted. Available for Valkey and Redis OSS only.
      description: A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted. Available for Valkey and Redis OSS only.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_user_group"
    values={[
        { label: 'modify_user_group', value: 'modify_user_group' }
    ]}
>
<TabItem value="modify_user_group">

Changes the list of users that belong to the user group.

```sql
UPDATE aws.elasticache.user_groups
SET 
-- No updatable properties
WHERE 
UserGroupId = '{{ UserGroupId }}' --required
AND region = '{{ region }}' --required
AND UserIdsToAdd = '{{ UserIdsToAdd}}'
AND UserIdsToRemove = '{{ UserIdsToRemove}}'
AND Engine = '{{ Engine}}'
RETURNING
arn,
engine,
minimum_engine_version,
pending_changes,
replication_groups,
serverless_caches,
status,
user_group_id,
user_ids;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_group"
    values={[
        { label: 'delete_user_group', value: 'delete_user_group' }
    ]}
>
<TabItem value="delete_user_group">

For Valkey engine version 7.2 onwards and Redis OSS 6.0 onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see Using Role Based Access Control (RBAC).

```sql
DELETE FROM aws.elasticache.user_groups
WHERE UserGroupId = '{{ UserGroupId }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
