--- 
title: db_proxy_target_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_proxy_target_groups
  - rds
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

Creates, updates, deletes, gets or lists a <code>db_proxy_target_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_proxy_target_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_proxy_target_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_proxy_target_groups"
    values={[
        { label: 'describe_db_proxy_target_groups', value: 'describe_db_proxy_target_groups' }
    ]}
>
<TabItem value="describe_db_proxy_target_groups">

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
    <td><CopyableCode code="connection_pool_config" /></td>
    <td><code>string</code></td>
    <td>The settings that determine the size and behavior of the connection pool for the target group.</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string</code></td>
    <td>The date and time when the target group was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="db_proxy_name" /></td>
    <td><code>string</code></td>
    <td>The identifier for the RDS proxy associated with this target group.</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this target group is the first one used for connection requests by the associated proxy. Because each proxy is currently associated with a single target group, currently this setting is always true.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of this target group. A status of available means the target group is correctly associated with a database. Other values indicate that you must wait for the target group to be ready, or take some action to resolve an issue.</td>
</tr>
<tr>
    <td><CopyableCode code="target_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) representing the target group.</td>
</tr>
<tr>
    <td><CopyableCode code="target_group_name" /></td>
    <td><code>string</code></td>
    <td>The identifier for the target group. This name must be unique for all target groups owned by your Amazon Web Services account in the specified Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_date" /></td>
    <td><code>string</code></td>
    <td>The date and time when the target group was last updated.</td>
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
    <td><a href="#describe_db_proxy_target_groups"><CopyableCode code="describe_db_proxy_target_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DBProxyName"><code>DBProxyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TargetGroupName"><code>TargetGroupName</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Returns information about DB proxy target groups, represented by DBProxyTargetGroup data structures.</td>
</tr>
<tr>
    <td><a href="#modify_db_proxy_target_group"><CopyableCode code="modify_db_proxy_target_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TargetGroupName"><code>TargetGroupName</code></a>, <a href="#parameter-DBProxyName"><code>DBProxyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ConnectionPoolConfig"><code>ConnectionPoolConfig</code></a>, <a href="#parameter-NewName"><code>NewName</code></a></td>
    <td>Modifies the properties of a DBProxyTargetGroup.</td>
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
<tr id="parameter-DBProxyName">
    <td><CopyableCode code="DBProxyName" /></td>
    <td><code>string</code></td>
    <td>The name of the proxy.</td>
</tr>
<tr id="parameter-TargetGroupName">
    <td><CopyableCode code="TargetGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the target group to modify.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ConnectionPoolConfig">
    <td><CopyableCode code="ConnectionPoolConfig" /></td>
    <td><code>object</code></td>
    <td>The settings that determine the size and behavior of the connection pool for the target group.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter is not currently supported.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-NewName">
    <td><CopyableCode code="NewName" /></td>
    <td><code>string</code></td>
    <td>The new name for the modified DBProxyTarget. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens. You can't rename the default target group.</td>
</tr>
<tr id="parameter-TargetGroupName">
    <td><CopyableCode code="TargetGroupName" /></td>
    <td><code>string</code></td>
    <td>The identifier of the DBProxyTargetGroup to describe.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_proxy_target_groups"
    values={[
        { label: 'describe_db_proxy_target_groups', value: 'describe_db_proxy_target_groups' }
    ]}
>
<TabItem value="describe_db_proxy_target_groups">

Returns information about DB proxy target groups, represented by DBProxyTargetGroup data structures.

```sql
SELECT
connection_pool_config,
created_date,
db_proxy_name,
is_default,
status,
target_group_arn,
target_group_name,
updated_date
FROM aws.rds.db_proxy_target_groups
WHERE DBProxyName = '{{ DBProxyName }}' -- required
AND region = '{{ region }}' -- required
AND TargetGroupName = '{{ TargetGroupName }}'
AND Filters = '{{ Filters }}'
AND Marker = '{{ Marker }}'
AND MaxRecords = '{{ MaxRecords }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_db_proxy_target_group"
    values={[
        { label: 'modify_db_proxy_target_group', value: 'modify_db_proxy_target_group' }
    ]}
>
<TabItem value="modify_db_proxy_target_group">

Modifies the properties of a DBProxyTargetGroup.

```sql
UPDATE aws.rds.db_proxy_target_groups
SET 
-- No updatable properties
WHERE 
TargetGroupName = '{{ TargetGroupName }}' --required
AND DBProxyName = '{{ DBProxyName }}' --required
AND region = '{{ region }}' --required
AND ConnectionPoolConfig = '{{ ConnectionPoolConfig}}'
AND NewName = '{{ NewName}}'
RETURNING
connection_pool_config,
created_date,
db_proxy_name,
is_default,
status,
target_group_arn,
target_group_name,
updated_date;
```
</TabItem>
</Tabs>
