--- 
title: db_proxy_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - db_proxy_targets
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

Creates, updates, deletes, gets or lists a <code>db_proxy_targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_proxy_targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_proxy_targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_proxy_targets"
    values={[
        { label: 'describe_db_proxy_targets', value: 'describe_db_proxy_targets' }
    ]}
>
<TabItem value="describe_db_proxy_targets">

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
    <td><CopyableCode code="Endpoint" /></td>
    <td><code>string</code></td>
    <td>The writer endpoint for the RDS DB instance or Aurora DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="Port" /></td>
    <td><code>integer</code></td>
    <td>The port that the RDS Proxy uses to connect to the target RDS DB instance or Aurora DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="RdsResourceId" /></td>
    <td><code>string</code></td>
    <td>The identifier representing the target. It can be the instance identifier for an RDS DB instance, or the cluster identifier for an Aurora DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="Role" /></td>
    <td><code>string</code></td>
    <td>A value that indicates whether the target of the proxy can be used for read/write or read-only operations.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the RDS DB instance or Aurora DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetHealth" /></td>
    <td><code>string</code></td>
    <td>Information about the connection health of the RDS Proxy target.</td>
</tr>
<tr>
    <td><CopyableCode code="TrackedClusterId" /></td>
    <td><code>string</code></td>
    <td>The DB cluster identifier when the target represents an Aurora DB cluster. This field is blank when the target represents an RDS DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>Specifies the kind of database, such as an RDS DB instance or an Aurora DB cluster, that the target represents.</td>
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
    <td><a href="#describe_db_proxy_targets"><CopyableCode code="describe_db_proxy_targets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DBProxyName"><code>DBProxyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TargetGroupName"><code>TargetGroupName</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Returns information about DBProxyTarget objects. This API supports pagination.</td>
</tr>
<tr>
    <td><a href="#register_db_proxy_targets"><CopyableCode code="register_db_proxy_targets" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBProxyName"><code>DBProxyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TargetGroupName"><code>TargetGroupName</code></a>, <a href="#parameter-DBInstanceIdentifiers"><code>DBInstanceIdentifiers</code></a>, <a href="#parameter-DBClusterIdentifiers"><code>DBClusterIdentifiers</code></a></td>
    <td>Associate one or more DBProxyTarget data structures with a DBProxyTargetGroup.</td>
</tr>
<tr>
    <td><a href="#deregister_db_proxy_targets"><CopyableCode code="deregister_db_proxy_targets" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBProxyName"><code>DBProxyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TargetGroupName"><code>TargetGroupName</code></a>, <a href="#parameter-DBInstanceIdentifiers"><code>DBInstanceIdentifiers</code></a>, <a href="#parameter-DBClusterIdentifiers"><code>DBClusterIdentifiers</code></a></td>
    <td>Remove the association between one or more DBProxyTarget data structures and a DBProxyTargetGroup.</td>
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
    <td>The identifier of the DBProxy that is associated with the DBProxyTargetGroup.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DBClusterIdentifiers">
    <td><CopyableCode code="DBClusterIdentifiers" /></td>
    <td><code>array</code></td>
    <td>One or more DB cluster identifiers.</td>
</tr>
<tr id="parameter-DBInstanceIdentifiers">
    <td><CopyableCode code="DBInstanceIdentifiers" /></td>
    <td><code>array</code></td>
    <td>One or more DB instance identifiers.</td>
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
<tr id="parameter-TargetGroupName">
    <td><CopyableCode code="TargetGroupName" /></td>
    <td><code>string</code></td>
    <td>The identifier of the DBProxyTargetGroup.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_proxy_targets"
    values={[
        { label: 'describe_db_proxy_targets', value: 'describe_db_proxy_targets' }
    ]}
>
<TabItem value="describe_db_proxy_targets">

Returns information about DBProxyTarget objects. This API supports pagination.

```sql
SELECT
Endpoint,
Port,
RdsResourceId,
Role,
TargetArn,
TargetHealth,
TrackedClusterId,
Type
FROM aws.rds.db_proxy_targets
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


## `INSERT` examples

<Tabs
    defaultValue="register_db_proxy_targets"
    values={[
        { label: 'register_db_proxy_targets', value: 'register_db_proxy_targets' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_db_proxy_targets">

Associate one or more DBProxyTarget data structures with a DBProxyTargetGroup.

```sql
INSERT INTO aws.rds.db_proxy_targets (
DBProxyName,
region,
TargetGroupName,
DBInstanceIdentifiers,
DBClusterIdentifiers
)
SELECT 
'{{ DBProxyName }}',
'{{ region }}',
'{{ TargetGroupName }}',
'{{ DBInstanceIdentifiers }}',
'{{ DBClusterIdentifiers }}'
RETURNING
Endpoint,
Port,
RdsResourceId,
Role,
TargetArn,
TargetHealth,
TrackedClusterId,
Type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_proxy_targets
  props:
    - name: DBProxyName
      value: "{{ DBProxyName }}"
      description: Required parameter for the db_proxy_targets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_proxy_targets resource.
    - name: TargetGroupName
      value: "{{ TargetGroupName }}"
      description: The identifier of the DBProxyTargetGroup.
      description: The identifier of the DBProxyTargetGroup.
    - name: DBInstanceIdentifiers
      value: "{{ DBInstanceIdentifiers }}"
      description: One or more DB instance identifiers.
      description: One or more DB instance identifiers.
    - name: DBClusterIdentifiers
      value: "{{ DBClusterIdentifiers }}"
      description: One or more DB cluster identifiers.
      description: One or more DB cluster identifiers.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_db_proxy_targets"
    values={[
        { label: 'deregister_db_proxy_targets', value: 'deregister_db_proxy_targets' }
    ]}
>
<TabItem value="deregister_db_proxy_targets">

Remove the association between one or more DBProxyTarget data structures and a DBProxyTargetGroup.

```sql
DELETE FROM aws.rds.db_proxy_targets
WHERE DBProxyName = '{{ DBProxyName }}' --required
AND region = '{{ region }}' --required
AND TargetGroupName = '{{ TargetGroupName }}'
AND DBInstanceIdentifiers = '{{ DBInstanceIdentifiers }}'
AND DBClusterIdentifiers = '{{ DBClusterIdentifiers }}'
;
```
</TabItem>
</Tabs>
