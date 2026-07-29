--- 
title: db_proxy_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - db_proxy_endpoints
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

Creates, updates, deletes, gets or lists a <code>db_proxy_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_proxy_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_proxy_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_proxy_endpoints"
    values={[
        { label: 'describe_db_proxy_endpoints', value: 'describe_db_proxy_endpoints' }
    ]}
>
<TabItem value="describe_db_proxy_endpoints">

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
    <td><CopyableCode code="created_date" /></td>
    <td><code>string</code></td>
    <td>The date and time when the DB proxy endpoint was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="db_proxy_endpoint_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the DB proxy endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="db_proxy_endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name for the DB proxy endpoint. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</td>
</tr>
<tr>
    <td><CopyableCode code="db_proxy_name" /></td>
    <td><code>string</code></td>
    <td>The identifier for the DB proxy that is associated with this DB proxy endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint that you can use to connect to the DB proxy. You include the endpoint value in the connection string for a database client application.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_network_type" /></td>
    <td><code>string</code></td>
    <td>The network type of the DB proxy endpoint. The network type determines the IP version that the proxy endpoint supports. Valid values: IPV4 - The proxy endpoint supports IPv4 only. IPV6 - The proxy endpoint supports IPv6 only. DUAL - The proxy endpoint supports both IPv4 and IPv6.</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this endpoint is the default endpoint for the associated DB proxy. Default DB proxy endpoints always have read/write capability. Other endpoints that you associate with the DB proxy can be either read/write or read-only.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of this DB proxy endpoint. A status of available means the endpoint is ready to handle requests. Other values indicate that you must wait for the endpoint to be ready, or take some action to resolve an issue.</td>
</tr>
<tr>
    <td><CopyableCode code="target_role" /></td>
    <td><code>string</code></td>
    <td>A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>Provides the VPC ID of the DB proxy endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_security_group_ids" /></td>
    <td><code>string</code></td>
    <td>Provides a list of VPC security groups that the DB proxy endpoint belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_subnet_ids" /></td>
    <td><code>string</code></td>
    <td>The EC2 subnet IDs for the DB proxy endpoint.</td>
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
    <td><a href="#describe_db_proxy_endpoints"><CopyableCode code="describe_db_proxy_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBProxyName"><code>DBProxyName</code></a>, <a href="#parameter-DBProxyEndpointName"><code>DBProxyEndpointName</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Returns information about DB proxy endpoints.</td>
</tr>
<tr>
    <td><a href="#create_db_proxy_endpoint"><CopyableCode code="create_db_proxy_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBProxyName"><code>DBProxyName</code></a>, <a href="#parameter-DBProxyEndpointName"><code>DBProxyEndpointName</code></a>, <a href="#parameter-VpcSubnetIds"><code>VpcSubnetIds</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-TargetRole"><code>TargetRole</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-EndpointNetworkType"><code>EndpointNetworkType</code></a></td>
    <td>Creates a DBProxyEndpoint. Only applies to proxies that are associated with Aurora DB clusters. You can use DB proxy endpoints to specify read/write or read-only access to the DB cluster. You can also use DB proxy endpoints to access a DB proxy through a different VPC than the proxy's default VPC.</td>
</tr>
<tr>
    <td><a href="#modify_db_proxy_endpoint"><CopyableCode code="modify_db_proxy_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBProxyEndpointName"><code>DBProxyEndpointName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NewDBProxyEndpointName"><code>NewDBProxyEndpointName</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a></td>
    <td>Changes the settings for an existing DB proxy endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_db_proxy_endpoint"><CopyableCode code="delete_db_proxy_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBProxyEndpointName"><code>DBProxyEndpointName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a DBProxyEndpoint. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.</td>
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
<tr id="parameter-DBProxyEndpointName">
    <td><CopyableCode code="DBProxyEndpointName" /></td>
    <td><code>string</code></td>
    <td>The name of the DB proxy endpoint to delete.</td>
</tr>
<tr id="parameter-DBProxyName">
    <td><CopyableCode code="DBProxyName" /></td>
    <td><code>string</code></td>
    <td>The name of the DB proxy associated with the DB proxy endpoint that you create.</td>
</tr>
<tr id="parameter-VpcSubnetIds">
    <td><CopyableCode code="VpcSubnetIds" /></td>
    <td><code>array</code></td>
    <td>The VPC subnet IDs for the DB proxy endpoint that you create. You can specify a different set of subnet IDs than for the original DB proxy.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DBProxyEndpointName">
    <td><CopyableCode code="DBProxyEndpointName" /></td>
    <td><code>string</code></td>
    <td>The name of a DB proxy endpoint to describe. If you omit this parameter, the output includes information about all DB proxy endpoints associated with the specified proxy.</td>
</tr>
<tr id="parameter-DBProxyName">
    <td><CopyableCode code="DBProxyName" /></td>
    <td><code>string</code></td>
    <td>The name of the DB proxy whose endpoints you want to describe. If you omit this parameter, the output includes information about all DB proxy endpoints associated with all your DB proxies.</td>
</tr>
<tr id="parameter-EndpointNetworkType">
    <td><CopyableCode code="EndpointNetworkType" /></td>
    <td><code>string</code></td>
    <td>The network type of the DB proxy endpoint. The network type determines the IP version that the proxy endpoint supports. Valid values: IPV4 - The proxy endpoint supports IPv4 only. IPV6 - The proxy endpoint supports IPv6 only. DUAL - The proxy endpoint supports both IPv4 and IPv6. Default: IPV4 Constraints: If you specify IPV6 or DUAL, the VPC and all subnets must have an IPv6 CIDR block. If you specify IPV6 or DUAL, the VPC tenancy cannot be dedicated.</td>
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
<tr id="parameter-NewDBProxyEndpointName">
    <td><CopyableCode code="NewDBProxyEndpointName" /></td>
    <td><code>string</code></td>
    <td>The new identifier for the DBProxyEndpoint. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr id="parameter-TargetRole">
    <td><CopyableCode code="TargetRole" /></td>
    <td><code>string</code></td>
    <td>The role of the DB proxy endpoint. The role determines whether the endpoint can be used for read/write or only read operations. The default is READ_WRITE. The only role that proxies for RDS for Microsoft SQL Server support is READ_WRITE.</td>
</tr>
<tr id="parameter-VpcSecurityGroupIds">
    <td><CopyableCode code="VpcSecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>The VPC security group IDs for the DB proxy endpoint. When the DB proxy endpoint uses a different VPC than the original proxy, you also specify a different set of security group IDs than for the original proxy.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_proxy_endpoints"
    values={[
        { label: 'describe_db_proxy_endpoints', value: 'describe_db_proxy_endpoints' }
    ]}
>
<TabItem value="describe_db_proxy_endpoints">

Returns information about DB proxy endpoints.

```sql
SELECT
created_date,
db_proxy_endpoint_arn,
db_proxy_endpoint_name,
db_proxy_name,
endpoint,
endpoint_network_type,
is_default,
status,
target_role,
vpc_id,
vpc_security_group_ids,
vpc_subnet_ids
FROM aws.rds.db_proxy_endpoints
WHERE region = '{{ region }}' -- required
AND DBProxyName = '{{ DBProxyName }}'
AND DBProxyEndpointName = '{{ DBProxyEndpointName }}'
AND Filters = '{{ Filters }}'
AND Marker = '{{ Marker }}'
AND MaxRecords = '{{ MaxRecords }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_db_proxy_endpoint"
    values={[
        { label: 'create_db_proxy_endpoint', value: 'create_db_proxy_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_db_proxy_endpoint">

Creates a DBProxyEndpoint. Only applies to proxies that are associated with Aurora DB clusters. You can use DB proxy endpoints to specify read/write or read-only access to the DB cluster. You can also use DB proxy endpoints to access a DB proxy through a different VPC than the proxy's default VPC.

```sql
INSERT INTO aws.rds.db_proxy_endpoints (
DBProxyName,
DBProxyEndpointName,
VpcSubnetIds,
region,
VpcSecurityGroupIds,
TargetRole,
Tags,
EndpointNetworkType
)
SELECT 
'{{ DBProxyName }}',
'{{ DBProxyEndpointName }}',
'{{ VpcSubnetIds }}',
'{{ region }}',
'{{ VpcSecurityGroupIds }}',
'{{ TargetRole }}',
'{{ Tags }}',
'{{ EndpointNetworkType }}'
RETURNING
created_date,
db_proxy_endpoint_arn,
db_proxy_endpoint_name,
db_proxy_name,
endpoint,
endpoint_network_type,
is_default,
status,
target_role,
vpc_id,
vpc_security_group_ids,
vpc_subnet_ids
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_proxy_endpoints
  props:
    - name: DBProxyName
      value: "{{ DBProxyName }}"
      description: Required parameter for the db_proxy_endpoints resource.
    - name: DBProxyEndpointName
      value: "{{ DBProxyEndpointName }}"
      description: Required parameter for the db_proxy_endpoints resource.
    - name: VpcSubnetIds
      value: "{{ VpcSubnetIds }}"
      description: Required parameter for the db_proxy_endpoints resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_proxy_endpoints resource.
    - name: VpcSecurityGroupIds
      value: "{{ VpcSecurityGroupIds }}"
      description: The VPC security group IDs for the DB proxy endpoint that you create. You can specify a different set of security group IDs than for the original DB proxy. The default is the default security group for the VPC.
      description: The VPC security group IDs for the DB proxy endpoint that you create. You can specify a different set of security group IDs than for the original DB proxy. The default is the default security group for the VPC.
    - name: TargetRole
      value: "{{ TargetRole }}"
      description: The role of the DB proxy endpoint. The role determines whether the endpoint can be used for read/write or only read operations. The default is READ_WRITE. The only role that proxies for RDS for Microsoft SQL Server support is READ_WRITE.
      description: The role of the DB proxy endpoint. The role determines whether the endpoint can be used for read/write or only read operations. The default is READ_WRITE. The only role that proxies for RDS for Microsoft SQL Server support is READ_WRITE.
    - name: Tags
      value: "{{ Tags }}"
    - name: EndpointNetworkType
      value: "{{ EndpointNetworkType }}"
      description: The network type of the DB proxy endpoint. The network type determines the IP version that the proxy endpoint supports. Valid values: IPV4 - The proxy endpoint supports IPv4 only. IPV6 - The proxy endpoint supports IPv6 only. DUAL - The proxy endpoint supports both IPv4 and IPv6. Default: IPV4 Constraints: If you specify IPV6 or DUAL, the VPC and all subnets must have an IPv6 CIDR block. If you specify IPV6 or DUAL, the VPC tenancy cannot be dedicated.
      description: The network type of the DB proxy endpoint. The network type determines the IP version that the proxy endpoint supports. Valid values: IPV4 - The proxy endpoint supports IPv4 only. IPV6 - The proxy endpoint supports IPv6 only. DUAL - The proxy endpoint supports both IPv4 and IPv6. Default: IPV4 Constraints: If you specify IPV6 or DUAL, the VPC and all subnets must have an IPv6 CIDR block. If you specify IPV6 or DUAL, the VPC tenancy cannot be dedicated.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_db_proxy_endpoint"
    values={[
        { label: 'modify_db_proxy_endpoint', value: 'modify_db_proxy_endpoint' }
    ]}
>
<TabItem value="modify_db_proxy_endpoint">

Changes the settings for an existing DB proxy endpoint.

```sql
UPDATE aws.rds.db_proxy_endpoints
SET 
-- No updatable properties
WHERE 
DBProxyEndpointName = '{{ DBProxyEndpointName }}' --required
AND region = '{{ region }}' --required
AND NewDBProxyEndpointName = '{{ NewDBProxyEndpointName}}'
AND VpcSecurityGroupIds = '{{ VpcSecurityGroupIds}}'
RETURNING
created_date,
db_proxy_endpoint_arn,
db_proxy_endpoint_name,
db_proxy_name,
endpoint,
endpoint_network_type,
is_default,
status,
target_role,
vpc_id,
vpc_security_group_ids,
vpc_subnet_ids;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_db_proxy_endpoint"
    values={[
        { label: 'delete_db_proxy_endpoint', value: 'delete_db_proxy_endpoint' }
    ]}
>
<TabItem value="delete_db_proxy_endpoint">

Deletes a DBProxyEndpoint. Doing so removes the ability to access the DB proxy using the endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write or read-only operations, or using a different VPC than the DB proxy's default VPC.

```sql
DELETE FROM aws.rds.db_proxy_endpoints
WHERE DBProxyEndpointName = '{{ DBProxyEndpointName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
