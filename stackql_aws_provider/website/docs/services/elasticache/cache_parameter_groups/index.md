--- 
title: cache_parameter_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - cache_parameter_groups
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

Creates, updates, deletes, gets or lists a <code>cache_parameter_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cache_parameter_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.cache_parameter_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cache_parameter_groups"
    values={[
        { label: 'describe_cache_parameter_groups', value: 'describe_cache_parameter_groups' }
    ]}
>
<TabItem value="describe_cache_parameter_groups">

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
    <td>The ARN (Amazon Resource Name) of the cache parameter group.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_parameter_group_family" /></td>
    <td><code>string</code></td>
    <td>The name of the cache parameter group family that this cache parameter group is compatible with. Valid values are: memcached1.4 | memcached1.5 | memcached1.6 | redis2.6 | redis2.8 | redis3.2 | redis4.0 | redis5.0 | redis6.x | redis7</td>
</tr>
<tr>
    <td><CopyableCode code="cache_parameter_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the cache parameter group.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for this cache parameter group.</td>
</tr>
<tr>
    <td><CopyableCode code="is_global" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the parameter group is associated with a Global datastore</td>
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
    <td><a href="#describe_cache_parameter_groups"><CopyableCode code="describe_cache_parameter_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CacheParameterGroupName"><code>CacheParameterGroupName</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.</td>
</tr>
<tr>
    <td><a href="#create_cache_parameter_group"><CopyableCode code="create_cache_parameter_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-CacheParameterGroupName"><code>CacheParameterGroupName</code></a>, <a href="#parameter-CacheParameterGroupFamily"><code>CacheParameterGroupFamily</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster or replication group using the CacheParameterGroup. A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see: ModifyCacheParameterGroup in the ElastiCache API Reference. Parameters and Parameter Groups in the ElastiCache User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_cache_parameter_group"><CopyableCode code="modify_cache_parameter_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-CacheParameterGroupName"><code>CacheParameterGroupName</code></a>, <a href="#parameter-ParameterNameValues"><code>ParameterNameValues</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.</td>
</tr>
<tr>
    <td><a href="#delete_cache_parameter_group"><CopyableCode code="delete_cache_parameter_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-CacheParameterGroupName"><code>CacheParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.</td>
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
<tr id="parameter-CacheParameterGroupFamily">
    <td><CopyableCode code="CacheParameterGroupFamily" /></td>
    <td><code>string</code></td>
    <td>The name of the cache parameter group family that the cache parameter group can be used with. Valid values are: valkey8 | valkey7 | memcached1.4 | memcached1.5 | memcached1.6 | redis2.6 | redis2.8 | redis3.2 | redis4.0 | redis5.0 | redis6.x | redis7</td>
</tr>
<tr id="parameter-CacheParameterGroupName">
    <td><CopyableCode code="CacheParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the cache parameter group to delete. The specified cache security group must not be associated with any clusters.</td>
</tr>
<tr id="parameter-ParameterNameValues">
    <td><CopyableCode code="ParameterNameValues" /></td>
    <td><code>array</code></td>
    <td>An array of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional. A maximum of 20 parameters may be modified per request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CacheParameterGroupName">
    <td><CopyableCode code="CacheParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of a specific cache parameter group to return details for.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A user-specified description for the cache parameter group.</td>
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
    defaultValue="describe_cache_parameter_groups"
    values={[
        { label: 'describe_cache_parameter_groups', value: 'describe_cache_parameter_groups' }
    ]}
>
<TabItem value="describe_cache_parameter_groups">

Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.

```sql
SELECT
arn,
cache_parameter_group_family,
cache_parameter_group_name,
description,
is_global
FROM aws.elasticache.cache_parameter_groups
WHERE region = '{{ region }}' -- required
AND CacheParameterGroupName = '{{ CacheParameterGroupName }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cache_parameter_group"
    values={[
        { label: 'create_cache_parameter_group', value: 'create_cache_parameter_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cache_parameter_group">

Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster or replication group using the CacheParameterGroup. A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see: ModifyCacheParameterGroup in the ElastiCache API Reference. Parameters and Parameter Groups in the ElastiCache User Guide.

```sql
INSERT INTO aws.elasticache.cache_parameter_groups (
CacheParameterGroupName,
CacheParameterGroupFamily,
region,
Description,
Tags
)
SELECT 
'{{ CacheParameterGroupName }}',
'{{ CacheParameterGroupFamily }}',
'{{ region }}',
'{{ Description }}',
'{{ Tags }}'
RETURNING
arn,
cache_parameter_group_family,
cache_parameter_group_name,
description,
is_global
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cache_parameter_groups
  props:
    - name: CacheParameterGroupName
      value: "{{ CacheParameterGroupName }}"
      description: Required parameter for the cache_parameter_groups resource.
    - name: CacheParameterGroupFamily
      value: "{{ CacheParameterGroupFamily }}"
      description: Required parameter for the cache_parameter_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cache_parameter_groups resource.
    - name: Description
      value: "{{ Description }}"
      description: A user-specified description for the cache parameter group.
      description: A user-specified description for the cache parameter group.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
      description: A list of tags to be added to this resource. A tag is a key-value pair. A tag key must be accompanied by a tag value, although null is accepted.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_cache_parameter_group"
    values={[
        { label: 'modify_cache_parameter_group', value: 'modify_cache_parameter_group' }
    ]}
>
<TabItem value="modify_cache_parameter_group">

Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.

```sql
UPDATE aws.elasticache.cache_parameter_groups
SET 
-- No updatable properties
WHERE 
CacheParameterGroupName = '{{ CacheParameterGroupName }}' --required
AND ParameterNameValues = '{{ ParameterNameValues }}' --required
AND region = '{{ region }}' --required
RETURNING
cache_parameter_group_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cache_parameter_group"
    values={[
        { label: 'delete_cache_parameter_group', value: 'delete_cache_parameter_group' }
    ]}
>
<TabItem value="delete_cache_parameter_group">

Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.

```sql
DELETE FROM aws.elasticache.cache_parameter_groups
WHERE CacheParameterGroupName = '{{ CacheParameterGroupName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
