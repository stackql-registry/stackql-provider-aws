--- 
title: cache_security_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - cache_security_groups
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

Creates, updates, deletes, gets or lists a <code>cache_security_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cache_security_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.cache_security_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cache_security_groups"
    values={[
        { label: 'describe_cache_security_groups', value: 'describe_cache_security_groups' }
    ]}
>
<TabItem value="describe_cache_security_groups">

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
    <td>The ARN of the cache security group,</td>
</tr>
<tr>
    <td><CopyableCode code="CacheSecurityGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the cache security group.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the cache security group.</td>
</tr>
<tr>
    <td><CopyableCode code="EC2SecurityGroups" /></td>
    <td><code>string</code></td>
    <td>A list of Amazon EC2 security groups that are associated with this cache security group.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The Amazon account ID of the cache security group owner.</td>
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
    <td><a href="#describe_cache_security_groups"><CopyableCode code="describe_cache_security_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CacheSecurityGroupName"><code>CacheSecurityGroupName</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup</td>
</tr>
<tr>
    <td><a href="#create_cache_security_group"><CopyableCode code="create_cache_security_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-CacheSecurityGroupName"><code>CacheSecurityGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new cache security group. Use a cache security group to control access to one or more clusters. Cache security groups are only used when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache subnet group instead. For more information, see CreateCacheSubnetGroup.</td>
</tr>
<tr>
    <td><a href="#authorize_cache_security_group_ingress"><CopyableCode code="authorize_cache_security_group_ingress" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-CacheSecurityGroupName"><code>CacheSecurityGroupName</code></a>, <a href="#parameter-EC2SecurityGroupName"><code>EC2SecurityGroupName</code></a>, <a href="#parameter-EC2SecurityGroupOwnerId"><code>EC2SecurityGroupOwnerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism. You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</td>
</tr>
<tr>
    <td><a href="#delete_cache_security_group"><CopyableCode code="delete_cache_security_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-CacheSecurityGroupName"><code>CacheSecurityGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a cache security group. You cannot delete a cache security group if it is associated with any clusters.</td>
</tr>
<tr>
    <td><a href="#revoke_cache_security_group_ingress"><CopyableCode code="revoke_cache_security_group_ingress" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-CacheSecurityGroupName"><code>CacheSecurityGroupName</code></a>, <a href="#parameter-EC2SecurityGroupName"><code>EC2SecurityGroupName</code></a>, <a href="#parameter-EC2SecurityGroupOwnerId"><code>EC2SecurityGroupOwnerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.</td>
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
<tr id="parameter-CacheSecurityGroupName">
    <td><CopyableCode code="CacheSecurityGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the cache security group to revoke ingress from.</td>
</tr>
<tr id="parameter-EC2SecurityGroupName">
    <td><CopyableCode code="EC2SecurityGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon EC2 security group to revoke access from.</td>
</tr>
<tr id="parameter-EC2SecurityGroupOwnerId">
    <td><CopyableCode code="EC2SecurityGroupOwnerId" /></td>
    <td><code>string</code></td>
    <td>The Amazon account number of the Amazon EC2 security group owner. Note that this is not the same thing as an Amazon access key ID - you must provide a valid Amazon account number for this parameter.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CacheSecurityGroupName">
    <td><CopyableCode code="CacheSecurityGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the cache security group to return details for.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description for the cache security group.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_cache_security_groups"
    values={[
        { label: 'describe_cache_security_groups', value: 'describe_cache_security_groups' }
    ]}
>
<TabItem value="describe_cache_security_groups">

Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup

```sql
SELECT
ARN,
CacheSecurityGroupName,
Description,
EC2SecurityGroups,
OwnerId
FROM aws.elasticache.cache_security_groups
WHERE region = '{{ region }}' -- required
AND CacheSecurityGroupName = '{{ CacheSecurityGroupName }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cache_security_group"
    values={[
        { label: 'create_cache_security_group', value: 'create_cache_security_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cache_security_group">

Creates a new cache security group. Use a cache security group to control access to one or more clusters. Cache security groups are only used when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache subnet group instead. For more information, see CreateCacheSubnetGroup.

```sql
INSERT INTO aws.elasticache.cache_security_groups (
CacheSecurityGroupName,
region,
Description,
Tags
)
SELECT 
'{{ CacheSecurityGroupName }}',
'{{ region }}',
'{{ Description }}',
'{{ Tags }}'
RETURNING
ARN,
CacheSecurityGroupName,
Description,
EC2SecurityGroups,
OwnerId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cache_security_groups
  props:
    - name: CacheSecurityGroupName
      value: "{{ CacheSecurityGroupName }}"
      description: Required parameter for the cache_security_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cache_security_groups resource.
    - name: Description
      value: "{{ Description }}"
      description: A description for the cache security group.
      description: A description for the cache security group.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
      description: A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="authorize_cache_security_group_ingress"
    values={[
        { label: 'authorize_cache_security_group_ingress', value: 'authorize_cache_security_group_ingress' }
    ]}
>
<TabItem value="authorize_cache_security_group_ingress">

Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism. You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.

```sql
UPDATE aws.elasticache.cache_security_groups
SET 
-- No updatable properties
WHERE 
CacheSecurityGroupName = '{{ CacheSecurityGroupName }}' --required
AND EC2SecurityGroupName = '{{ EC2SecurityGroupName }}' --required
AND EC2SecurityGroupOwnerId = '{{ EC2SecurityGroupOwnerId }}' --required
AND region = '{{ region }}' --required
RETURNING
ARN,
CacheSecurityGroupName,
Description,
EC2SecurityGroups,
OwnerId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cache_security_group"
    values={[
        { label: 'delete_cache_security_group', value: 'delete_cache_security_group' }
    ]}
>
<TabItem value="delete_cache_security_group">

Deletes a cache security group. You cannot delete a cache security group if it is associated with any clusters.

```sql
DELETE FROM aws.elasticache.cache_security_groups
WHERE CacheSecurityGroupName = '{{ CacheSecurityGroupName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="revoke_cache_security_group_ingress"
    values={[
        { label: 'revoke_cache_security_group_ingress', value: 'revoke_cache_security_group_ingress' }
    ]}
>
<TabItem value="revoke_cache_security_group_ingress">

Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.

```sql
EXEC aws.elasticache.cache_security_groups.revoke_cache_security_group_ingress 
@CacheSecurityGroupName='{{ CacheSecurityGroupName }}' --required, 
@EC2SecurityGroupName='{{ EC2SecurityGroupName }}' --required, 
@EC2SecurityGroupOwnerId='{{ EC2SecurityGroupOwnerId }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
