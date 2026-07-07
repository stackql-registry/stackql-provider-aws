--- 
title: db_cluster_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - db_cluster_endpoints
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

Creates, updates, deletes, gets or lists a <code>db_cluster_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_cluster_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_cluster_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_cluster_endpoints"
    values={[
        { label: 'describe_db_cluster_endpoints', value: 'describe_db_cluster_endpoints' }
    ]}
>
<TabItem value="describe_db_cluster_endpoints">

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
    <td><CopyableCode code="CustomEndpointType" /></td>
    <td><code>string</code></td>
    <td>The type associated with a custom endpoint. One of: READER, WRITER, ANY.</td>
</tr>
<tr>
    <td><CopyableCode code="DBClusterEndpointArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="DBClusterEndpointIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier associated with the endpoint. This parameter is stored as a lowercase string.</td>
</tr>
<tr>
    <td><CopyableCode code="DBClusterEndpointResourceIdentifier" /></td>
    <td><code>string</code></td>
    <td>A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.</td>
</tr>
<tr>
    <td><CopyableCode code="Endpoint" /></td>
    <td><code>string</code></td>
    <td>The DNS address of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointType" /></td>
    <td><code>string</code></td>
    <td>The type of the endpoint. One of: READER, WRITER, CUSTOM.</td>
</tr>
<tr>
    <td><CopyableCode code="ExcludedMembers" /></td>
    <td><code>string</code></td>
    <td>List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="StaticMembers" /></td>
    <td><code>string</code></td>
    <td>List of DB instance identifiers that are part of the custom endpoint group.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the endpoint. One of: creating, available, deleting, inactive, modifying. The inactive state applies to an endpoint that can't be used for a certain kind of cluster, such as a writer endpoint for a read-only secondary cluster in a global database.</td>
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
    <td><a href="#describe_db_cluster_endpoints"><CopyableCode code="describe_db_cluster_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-DBClusterEndpointIdentifier"><code>DBClusterEndpointIdentifier</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns information about endpoints for an Amazon Aurora DB cluster. This action only applies to Aurora DB clusters.</td>
</tr>
<tr>
    <td><a href="#create_db_cluster_endpoint"><CopyableCode code="create_db_cluster_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-DBClusterEndpointIdentifier"><code>DBClusterEndpointIdentifier</code></a>, <a href="#parameter-EndpointType"><code>EndpointType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-StaticMembers"><code>StaticMembers</code></a>, <a href="#parameter-ExcludedMembers"><code>ExcludedMembers</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster. This action applies only to Aurora DB clusters.</td>
</tr>
<tr>
    <td><a href="#modify_db_cluster_endpoint"><CopyableCode code="modify_db_cluster_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBClusterEndpointIdentifier"><code>DBClusterEndpointIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EndpointType"><code>EndpointType</code></a>, <a href="#parameter-StaticMembers"><code>StaticMembers</code></a>, <a href="#parameter-ExcludedMembers"><code>ExcludedMembers</code></a></td>
    <td>Modifies the properties of an endpoint in an Amazon Aurora DB cluster. This operation only applies to Aurora DB clusters.</td>
</tr>
<tr>
    <td><a href="#delete_db_cluster_endpoint"><CopyableCode code="delete_db_cluster_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBClusterEndpointIdentifier"><code>DBClusterEndpointIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster. This action only applies to Aurora DB clusters.</td>
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
<tr id="parameter-DBClusterEndpointIdentifier">
    <td><CopyableCode code="DBClusterEndpointIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier associated with the custom endpoint. This parameter is stored as a lowercase string.</td>
</tr>
<tr id="parameter-DBClusterIdentifier">
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.</td>
</tr>
<tr id="parameter-EndpointType">
    <td><CopyableCode code="EndpointType" /></td>
    <td><code>string</code></td>
    <td>The type of the endpoint, one of: READER, WRITER, ANY.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DBClusterEndpointIdentifier">
    <td><CopyableCode code="DBClusterEndpointIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the endpoint to describe. This parameter is stored as a lowercase string.</td>
</tr>
<tr id="parameter-DBClusterIdentifier">
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is stored as a lowercase string.</td>
</tr>
<tr id="parameter-EndpointType">
    <td><CopyableCode code="EndpointType" /></td>
    <td><code>string</code></td>
    <td>The type of the endpoint. One of: READER, WRITER, ANY.</td>
</tr>
<tr id="parameter-ExcludedMembers">
    <td><CopyableCode code="ExcludedMembers" /></td>
    <td><code>array</code></td>
    <td>List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A set of name-value pairs that define which endpoints to include in the output. The filters are specified as name-value pairs, in the format Name=endpoint_type,Values=endpoint_type1,endpoint_type2,.... Name can be one of: db-cluster-endpoint-type, db-cluster-endpoint-custom-type, db-cluster-endpoint-id, db-cluster-endpoint-status. Values for the db-cluster-endpoint-type filter can be one or more of: reader, writer, custom. Values for the db-cluster-endpoint-custom-type filter can be one or more of: reader, any. Values for the db-cluster-endpoint-status filter can be one or more of: available, creating, deleting, inactive, modifying.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeDBClusterEndpoints request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-StaticMembers">
    <td><CopyableCode code="StaticMembers" /></td>
    <td><code>array</code></td>
    <td>List of DB instance identifiers that are part of the custom endpoint group.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to be assigned to the Amazon RDS resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_cluster_endpoints"
    values={[
        { label: 'describe_db_cluster_endpoints', value: 'describe_db_cluster_endpoints' }
    ]}
>
<TabItem value="describe_db_cluster_endpoints">

Returns information about endpoints for an Amazon Aurora DB cluster. This action only applies to Aurora DB clusters.

```sql
SELECT
CustomEndpointType,
DBClusterEndpointArn,
DBClusterEndpointIdentifier,
DBClusterEndpointResourceIdentifier,
DBClusterIdentifier,
Endpoint,
EndpointType,
ExcludedMembers,
StaticMembers,
Status
FROM aws.rds.db_cluster_endpoints
WHERE region = '{{ region }}' -- required
AND DBClusterIdentifier = '{{ DBClusterIdentifier }}'
AND DBClusterEndpointIdentifier = '{{ DBClusterEndpointIdentifier }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_db_cluster_endpoint"
    values={[
        { label: 'create_db_cluster_endpoint', value: 'create_db_cluster_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_db_cluster_endpoint">

Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster. This action applies only to Aurora DB clusters.

```sql
INSERT INTO aws.rds.db_cluster_endpoints (
DBClusterIdentifier,
DBClusterEndpointIdentifier,
EndpointType,
region,
StaticMembers,
ExcludedMembers,
Tags
)
SELECT 
'{{ DBClusterIdentifier }}',
'{{ DBClusterEndpointIdentifier }}',
'{{ EndpointType }}',
'{{ region }}',
'{{ StaticMembers }}',
'{{ ExcludedMembers }}',
'{{ Tags }}'
RETURNING
CustomEndpointType,
DBClusterEndpointArn,
DBClusterEndpointIdentifier,
DBClusterEndpointResourceIdentifier,
DBClusterIdentifier,
Endpoint,
EndpointType,
ExcludedMembers,
StaticMembers,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_cluster_endpoints
  props:
    - name: DBClusterIdentifier
      value: "{{ DBClusterIdentifier }}"
      description: Required parameter for the db_cluster_endpoints resource.
    - name: DBClusterEndpointIdentifier
      value: "{{ DBClusterEndpointIdentifier }}"
      description: Required parameter for the db_cluster_endpoints resource.
    - name: EndpointType
      value: "{{ EndpointType }}"
      description: Required parameter for the db_cluster_endpoints resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_cluster_endpoints resource.
    - name: StaticMembers
      value: "{{ StaticMembers }}"
      description: List of DB instance identifiers that are part of the custom endpoint group.
      description: List of DB instance identifiers that are part of the custom endpoint group.
    - name: ExcludedMembers
      value: "{{ ExcludedMembers }}"
      description: List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. This parameter is relevant only if the list of static members is empty.
      description: List of DB instance identifiers that aren't part of the custom endpoint group. All other eligible instances are reachable through the custom endpoint. This parameter is relevant only if the list of static members is empty.
    - name: Tags
      value: "{{ Tags }}"
      description: The tags to be assigned to the Amazon RDS resource.
      description: The tags to be assigned to the Amazon RDS resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_db_cluster_endpoint"
    values={[
        { label: 'modify_db_cluster_endpoint', value: 'modify_db_cluster_endpoint' }
    ]}
>
<TabItem value="modify_db_cluster_endpoint">

Modifies the properties of an endpoint in an Amazon Aurora DB cluster. This operation only applies to Aurora DB clusters.

```sql
UPDATE aws.rds.db_cluster_endpoints
SET 
-- No updatable properties
WHERE 
DBClusterEndpointIdentifier = '{{ DBClusterEndpointIdentifier }}' --required
AND region = '{{ region }}' --required
AND EndpointType = '{{ EndpointType}}'
AND StaticMembers = '{{ StaticMembers}}'
AND ExcludedMembers = '{{ ExcludedMembers}}'
RETURNING
CustomEndpointType,
DBClusterEndpointArn,
DBClusterEndpointIdentifier,
DBClusterEndpointResourceIdentifier,
DBClusterIdentifier,
Endpoint,
EndpointType,
ExcludedMembers,
StaticMembers,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_db_cluster_endpoint"
    values={[
        { label: 'delete_db_cluster_endpoint', value: 'delete_db_cluster_endpoint' }
    ]}
>
<TabItem value="delete_db_cluster_endpoint">

Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster. This action only applies to Aurora DB clusters.

```sql
DELETE FROM aws.rds.db_cluster_endpoints
WHERE DBClusterEndpointIdentifier = '{{ DBClusterEndpointIdentifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
