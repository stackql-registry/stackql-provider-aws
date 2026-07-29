--- 
title: cache_subnet_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - cache_subnet_groups
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

Creates, updates, deletes, gets or lists a <code>cache_subnet_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cache_subnet_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.cache_subnet_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cache_subnet_groups"
    values={[
        { label: 'describe_cache_subnet_groups', value: 'describe_cache_subnet_groups' }
    ]}
>
<TabItem value="describe_cache_subnet_groups">

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
    <td>The ARN (Amazon Resource Name) of the cache subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_subnet_group_description" /></td>
    <td><code>string</code></td>
    <td>The description of the cache subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_subnet_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the cache subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="subnets" /></td>
    <td><code>string</code></td>
    <td>A list of subnets associated with the cache subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_network_types" /></td>
    <td><code>string</code></td>
    <td>Either ipv4 | ipv6 | dual_stack. IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 or Memcached engine version 1.6.6 and above on all instances built on the Nitro system.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group.</td>
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
    <td><a href="#describe_cache_subnet_groups"><CopyableCode code="describe_cache_subnet_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CacheSubnetGroupName"><code>CacheSubnetGroupName</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default.</td>
</tr>
<tr>
    <td><a href="#create_cache_subnet_group"><CopyableCode code="create_cache_subnet_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-CacheSubnetGroupName"><code>CacheSubnetGroupName</code></a>, <a href="#parameter-CacheSubnetGroupDescription"><code>CacheSubnetGroupDescription</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new cache subnet group. Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</td>
</tr>
<tr>
    <td><a href="#modify_cache_subnet_group"><CopyableCode code="modify_cache_subnet_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-CacheSubnetGroupName"><code>CacheSubnetGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CacheSubnetGroupDescription"><code>CacheSubnetGroupDescription</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a></td>
    <td>Modifies an existing cache subnet group.</td>
</tr>
<tr>
    <td><a href="#delete_cache_subnet_group"><CopyableCode code="delete_cache_subnet_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-CacheSubnetGroupName"><code>CacheSubnetGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a cache subnet group. You cannot delete a default cache subnet group or one that is associated with any clusters.</td>
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
<tr id="parameter-CacheSubnetGroupDescription">
    <td><CopyableCode code="CacheSubnetGroupDescription" /></td>
    <td><code>string</code></td>
    <td>A description for the cache subnet group.</td>
</tr>
<tr id="parameter-CacheSubnetGroupName">
    <td><CopyableCode code="CacheSubnetGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the cache subnet group to delete. Constraints: Must contain no more than 255 alphanumeric characters or hyphens.</td>
</tr>
<tr id="parameter-SubnetIds">
    <td><CopyableCode code="SubnetIds" /></td>
    <td><code>array</code></td>
    <td>A list of VPC subnet IDs for the cache subnet group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CacheSubnetGroupDescription">
    <td><CopyableCode code="CacheSubnetGroupDescription" /></td>
    <td><code>string</code></td>
    <td>A description of the cache subnet group.</td>
</tr>
<tr id="parameter-CacheSubnetGroupName">
    <td><CopyableCode code="CacheSubnetGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the cache subnet group to return details for.</td>
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
<tr id="parameter-SubnetIds">
    <td><CopyableCode code="SubnetIds" /></td>
    <td><code>array</code></td>
    <td>The EC2 subnet IDs for the cache subnet group.</td>
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
    defaultValue="describe_cache_subnet_groups"
    values={[
        { label: 'describe_cache_subnet_groups', value: 'describe_cache_subnet_groups' }
    ]}
>
<TabItem value="describe_cache_subnet_groups">

Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default.

```sql
SELECT
arn,
cache_subnet_group_description,
cache_subnet_group_name,
subnets,
supported_network_types,
vpc_id
FROM aws.elasticache.cache_subnet_groups
WHERE region = '{{ region }}' -- required
AND CacheSubnetGroupName = '{{ CacheSubnetGroupName }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cache_subnet_group"
    values={[
        { label: 'create_cache_subnet_group', value: 'create_cache_subnet_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cache_subnet_group">

Creates a new cache subnet group. Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).

```sql
INSERT INTO aws.elasticache.cache_subnet_groups (
CacheSubnetGroupName,
CacheSubnetGroupDescription,
SubnetIds,
region,
Tags
)
SELECT 
'{{ CacheSubnetGroupName }}',
'{{ CacheSubnetGroupDescription }}',
'{{ SubnetIds }}',
'{{ region }}',
'{{ Tags }}'
RETURNING
arn,
cache_subnet_group_description,
cache_subnet_group_name,
subnets,
supported_network_types,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cache_subnet_groups
  props:
    - name: CacheSubnetGroupName
      value: "{{ CacheSubnetGroupName }}"
      description: Required parameter for the cache_subnet_groups resource.
    - name: CacheSubnetGroupDescription
      value: "{{ CacheSubnetGroupDescription }}"
      description: Required parameter for the cache_subnet_groups resource.
    - name: SubnetIds
      value: "{{ SubnetIds }}"
      description: Required parameter for the cache_subnet_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cache_subnet_groups resource.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
      description: A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_cache_subnet_group"
    values={[
        { label: 'modify_cache_subnet_group', value: 'modify_cache_subnet_group' }
    ]}
>
<TabItem value="modify_cache_subnet_group">

Modifies an existing cache subnet group.

```sql
UPDATE aws.elasticache.cache_subnet_groups
SET 
-- No updatable properties
WHERE 
CacheSubnetGroupName = '{{ CacheSubnetGroupName }}' --required
AND region = '{{ region }}' --required
AND CacheSubnetGroupDescription = '{{ CacheSubnetGroupDescription}}'
AND SubnetIds = '{{ SubnetIds}}'
RETURNING
arn,
cache_subnet_group_description,
cache_subnet_group_name,
subnets,
supported_network_types,
vpc_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cache_subnet_group"
    values={[
        { label: 'delete_cache_subnet_group', value: 'delete_cache_subnet_group' }
    ]}
>
<TabItem value="delete_cache_subnet_group">

Deletes a cache subnet group. You cannot delete a default cache subnet group or one that is associated with any clusters.

```sql
DELETE FROM aws.elasticache.cache_subnet_groups
WHERE CacheSubnetGroupName = '{{ CacheSubnetGroupName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
