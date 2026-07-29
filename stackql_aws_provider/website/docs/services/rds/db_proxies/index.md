--- 
title: db_proxies
hide_title: false
hide_table_of_contents: false
keywords:
  - db_proxies
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

Creates, updates, deletes, gets or lists a <code>db_proxies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_proxies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_proxies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_proxies"
    values={[
        { label: 'describe_db_proxies', value: 'describe_db_proxies' }
    ]}
>
<TabItem value="describe_db_proxies">

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
    <td><CopyableCode code="auth" /></td>
    <td><code>string</code></td>
    <td>One or more data structures specifying the authorization mechanism to connect to the associated RDS DB instance or Aurora DB cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string</code></td>
    <td>The date and time when the proxy was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="db_proxy_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the proxy.</td>
</tr>
<tr>
    <td><CopyableCode code="db_proxy_name" /></td>
    <td><code>string</code></td>
    <td>The identifier for the proxy. This name must be unique for all proxies owned by your Amazon Web Services account in the specified Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="debug_logging" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the proxy logs detailed connection and query information. When you enable DebugLogging, the proxy captures connection details and connection pool behavior from your queries. Debug logging increases CloudWatch costs and can impact proxy performance. Enable this option only when you need to troubleshoot connection or performance issues.</td>
</tr>
<tr>
    <td><CopyableCode code="default_auth_scheme" /></td>
    <td><code>string</code></td>
    <td>The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database. Valid values are NONE and IAM_AUTH. When set to IAM_AUTH, the proxy uses end-to-end IAM authentication to connect to the database.</td>
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
    <td><CopyableCode code="engine_family" /></td>
    <td><code>string</code></td>
    <td>The kinds of databases that the proxy can connect to. This value determines which database network protocol the proxy recognizes when it interprets network traffic to and from the database. MYSQL supports Aurora MySQL, RDS for MariaDB, and RDS for MySQL databases. POSTGRESQL supports Aurora PostgreSQL and RDS for PostgreSQL databases. SQLSERVER supports RDS for Microsoft SQL Server databases.</td>
</tr>
<tr>
    <td><CopyableCode code="idle_client_timeout" /></td>
    <td><code>integer</code></td>
    <td>The number of seconds a connection to the proxy can have no activity before the proxy drops the client connection. The proxy keeps the underlying database connection open and puts it back into the connection pool for reuse by later connection requests. Default: 1800 (30 minutes) Constraints: 1 to 28,800</td>
</tr>
<tr>
    <td><CopyableCode code="require_tls" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Transport Layer Security (TLS) encryption is required for connections to the proxy.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the IAM role that the proxy uses to access Amazon Secrets Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of this proxy. A status of available means the proxy is ready to handle requests. Other values indicate that you must wait for the proxy to be ready, or take some action to resolve an issue.</td>
</tr>
<tr>
    <td><CopyableCode code="target_connection_network_type" /></td>
    <td><code>string</code></td>
    <td>The network type that the proxy uses to connect to the target database. The network type determines the IP version that the proxy uses for connections to the database. Valid values: IPV4 - The proxy connects to the database using IPv4 only. IPV6 - The proxy connects to the database using IPv6 only.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_date" /></td>
    <td><code>string</code></td>
    <td>The date and time when the proxy was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>Provides the VPC ID of the DB proxy.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_security_group_ids" /></td>
    <td><code>string</code></td>
    <td>Provides a list of VPC security groups that the proxy belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_subnet_ids" /></td>
    <td><code>string</code></td>
    <td>The EC2 subnet IDs for the proxy.</td>
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
    <td><a href="#describe_db_proxies"><CopyableCode code="describe_db_proxies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBProxyName"><code>DBProxyName</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Returns information about DB proxies.</td>
</tr>
<tr>
    <td><a href="#create_db_proxy"><CopyableCode code="create_db_proxy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBProxyName"><code>DBProxyName</code></a>, <a href="#parameter-EngineFamily"><code>EngineFamily</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-VpcSubnetIds"><code>VpcSubnetIds</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DefaultAuthScheme"><code>DefaultAuthScheme</code></a>, <a href="#parameter-Auth"><code>Auth</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a>, <a href="#parameter-RequireTLS"><code>RequireTLS</code></a>, <a href="#parameter-IdleClientTimeout"><code>IdleClientTimeout</code></a>, <a href="#parameter-DebugLogging"><code>DebugLogging</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-EndpointNetworkType"><code>EndpointNetworkType</code></a>, <a href="#parameter-TargetConnectionNetworkType"><code>TargetConnectionNetworkType</code></a></td>
    <td>Creates a new DB proxy.</td>
</tr>
<tr>
    <td><a href="#modify_db_proxy"><CopyableCode code="modify_db_proxy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBProxyName"><code>DBProxyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NewDBProxyName"><code>NewDBProxyName</code></a>, <a href="#parameter-DefaultAuthScheme"><code>DefaultAuthScheme</code></a>, <a href="#parameter-Auth"><code>Auth</code></a>, <a href="#parameter-RequireTLS"><code>RequireTLS</code></a>, <a href="#parameter-IdleClientTimeout"><code>IdleClientTimeout</code></a>, <a href="#parameter-DebugLogging"><code>DebugLogging</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-SecurityGroups"><code>SecurityGroups</code></a></td>
    <td>Changes the settings for an existing DB proxy.</td>
</tr>
<tr>
    <td><a href="#delete_db_proxy"><CopyableCode code="delete_db_proxy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBProxyName"><code>DBProxyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing DB proxy.</td>
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
    <td>The name of the DB proxy to delete.</td>
</tr>
<tr id="parameter-EngineFamily">
    <td><CopyableCode code="EngineFamily" /></td>
    <td><code>string</code></td>
    <td>The kinds of databases that the proxy can connect to. This value determines which database network protocol the proxy recognizes when it interprets network traffic to and from the database. For Aurora MySQL, RDS for MariaDB, and RDS for MySQL databases, specify MYSQL. For Aurora PostgreSQL and RDS for PostgreSQL databases, specify POSTGRESQL. For RDS for Microsoft SQL Server, specify SQLSERVER.</td>
</tr>
<tr id="parameter-RoleArn">
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in Amazon Web Services Secrets Manager.</td>
</tr>
<tr id="parameter-VpcSubnetIds">
    <td><CopyableCode code="VpcSubnetIds" /></td>
    <td><code>array</code></td>
    <td>One or more VPC subnet IDs to associate with the new proxy.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Auth">
    <td><CopyableCode code="Auth" /></td>
    <td><code>array</code></td>
    <td>The new authentication settings for the DBProxy.</td>
</tr>
<tr id="parameter-DBProxyName">
    <td><CopyableCode code="DBProxyName" /></td>
    <td><code>string</code></td>
    <td>The name of the DB proxy. If you omit this parameter, the output includes information about all DB proxies owned by your Amazon Web Services account ID.</td>
</tr>
<tr id="parameter-DebugLogging">
    <td><CopyableCode code="DebugLogging" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the proxy logs detailed connection and query information. When you enable DebugLogging, the proxy captures connection details and connection pool behavior from your queries. Debug logging increases CloudWatch costs and can impact proxy performance. Enable this option only when you need to troubleshoot connection or performance issues.</td>
</tr>
<tr id="parameter-DefaultAuthScheme">
    <td><CopyableCode code="DefaultAuthScheme" /></td>
    <td><code>string</code></td>
    <td>The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database. Valid values are NONE and IAM_AUTH. When set to IAM_AUTH, the proxy uses end-to-end IAM authentication to connect to the database.</td>
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
<tr id="parameter-IdleClientTimeout">
    <td><CopyableCode code="IdleClientTimeout" /></td>
    <td><code>integer</code></td>
    <td>The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this value higher or lower than the connection timeout limit for the associated database.</td>
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
<tr id="parameter-NewDBProxyName">
    <td><CopyableCode code="NewDBProxyName" /></td>
    <td><code>string</code></td>
    <td>The new identifier for the DBProxy. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</td>
</tr>
<tr id="parameter-RequireTLS">
    <td><CopyableCode code="RequireTLS" /></td>
    <td><code>boolean</code></td>
    <td>Whether Transport Layer Security (TLS) encryption is required for connections to the proxy. By enabling this setting, you can enforce encrypted TLS connections to the proxy, even if the associated database doesn't use TLS.</td>
</tr>
<tr id="parameter-RoleArn">
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in Amazon Web Services Secrets Manager.</td>
</tr>
<tr id="parameter-SecurityGroups">
    <td><CopyableCode code="SecurityGroups" /></td>
    <td><code>array</code></td>
    <td>The new list of security groups for the DBProxy.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.</td>
</tr>
<tr id="parameter-TargetConnectionNetworkType">
    <td><CopyableCode code="TargetConnectionNetworkType" /></td>
    <td><code>string</code></td>
    <td>The network type that the proxy uses to connect to the target database. The network type determines the IP version that the proxy uses for connections to the database. Valid values: IPV4 - The proxy connects to the database using IPv4 only. IPV6 - The proxy connects to the database using IPv6 only. Default: IPV4 Constraints: If you specify IPV6, the database must support dual-stack mode. RDS doesn't support IPv6-only databases. All targets registered with the proxy must be compatible with the specified network type.</td>
</tr>
<tr id="parameter-VpcSecurityGroupIds">
    <td><CopyableCode code="VpcSecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>One or more VPC security group IDs to associate with the new proxy.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_proxies"
    values={[
        { label: 'describe_db_proxies', value: 'describe_db_proxies' }
    ]}
>
<TabItem value="describe_db_proxies">

Returns information about DB proxies.

```sql
SELECT
auth,
created_date,
db_proxy_arn,
db_proxy_name,
debug_logging,
default_auth_scheme,
endpoint,
endpoint_network_type,
engine_family,
idle_client_timeout,
require_tls,
role_arn,
status,
target_connection_network_type,
updated_date,
vpc_id,
vpc_security_group_ids,
vpc_subnet_ids
FROM aws.rds.db_proxies
WHERE region = '{{ region }}' -- required
AND DBProxyName = '{{ DBProxyName }}'
AND Filters = '{{ Filters }}'
AND Marker = '{{ Marker }}'
AND MaxRecords = '{{ MaxRecords }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_db_proxy"
    values={[
        { label: 'create_db_proxy', value: 'create_db_proxy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_db_proxy">

Creates a new DB proxy.

```sql
INSERT INTO aws.rds.db_proxies (
DBProxyName,
EngineFamily,
RoleArn,
VpcSubnetIds,
region,
DefaultAuthScheme,
Auth,
VpcSecurityGroupIds,
RequireTLS,
IdleClientTimeout,
DebugLogging,
Tags,
EndpointNetworkType,
TargetConnectionNetworkType
)
SELECT 
'{{ DBProxyName }}',
'{{ EngineFamily }}',
'{{ RoleArn }}',
'{{ VpcSubnetIds }}',
'{{ region }}',
'{{ DefaultAuthScheme }}',
'{{ Auth }}',
'{{ VpcSecurityGroupIds }}',
'{{ RequireTLS }}',
'{{ IdleClientTimeout }}',
'{{ DebugLogging }}',
'{{ Tags }}',
'{{ EndpointNetworkType }}',
'{{ TargetConnectionNetworkType }}'
RETURNING
auth,
created_date,
db_proxy_arn,
db_proxy_name,
debug_logging,
default_auth_scheme,
endpoint,
endpoint_network_type,
engine_family,
idle_client_timeout,
require_tls,
role_arn,
status,
target_connection_network_type,
updated_date,
vpc_id,
vpc_security_group_ids,
vpc_subnet_ids
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_proxies
  props:
    - name: DBProxyName
      value: "{{ DBProxyName }}"
      description: Required parameter for the db_proxies resource.
    - name: EngineFamily
      value: "{{ EngineFamily }}"
      description: Required parameter for the db_proxies resource.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: Required parameter for the db_proxies resource.
    - name: VpcSubnetIds
      value: "{{ VpcSubnetIds }}"
      description: Required parameter for the db_proxies resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_proxies resource.
    - name: DefaultAuthScheme
      value: "{{ DefaultAuthScheme }}"
      description: The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database. Valid values are NONE and IAM_AUTH. When set to IAM_AUTH, the proxy uses end-to-end IAM authentication to connect to the database. If you don't specify DefaultAuthScheme or specify this parameter as NONE, you must specify the Auth option.
      description: The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database. Valid values are NONE and IAM_AUTH. When set to IAM_AUTH, the proxy uses end-to-end IAM authentication to connect to the database. If you don't specify DefaultAuthScheme or specify this parameter as NONE, you must specify the Auth option.
    - name: Auth
      value: "{{ Auth }}"
      description: The authorization mechanism that the proxy uses.
      description: The authorization mechanism that the proxy uses.
    - name: VpcSecurityGroupIds
      value: "{{ VpcSecurityGroupIds }}"
      description: One or more VPC security group IDs to associate with the new proxy.
      description: One or more VPC security group IDs to associate with the new proxy.
    - name: RequireTLS
      value: {{ RequireTLS }}
      description: Specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy. By enabling this setting, you can enforce encrypted TLS connections to the proxy.
      description: Specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy. By enabling this setting, you can enforce encrypted TLS connections to the proxy.
    - name: IdleClientTimeout
      value: {{ IdleClientTimeout }}
      description: The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this value higher or lower than the connection timeout limit for the associated database.
      description: The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this value higher or lower than the connection timeout limit for the associated database.
    - name: DebugLogging
      value: {{ DebugLogging }}
      description: Specifies whether the proxy logs detailed connection and query information. When you enable DebugLogging, the proxy captures connection details and connection pool behavior from your queries. Debug logging increases CloudWatch costs and can impact proxy performance. Enable this option only when you need to troubleshoot connection or performance issues.
      description: Specifies whether the proxy logs detailed connection and query information. When you enable DebugLogging, the proxy captures connection details and connection pool behavior from your queries. Debug logging increases CloudWatch costs and can impact proxy performance. Enable this option only when you need to troubleshoot connection or performance issues.
    - name: Tags
      value: "{{ Tags }}"
      description: An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
      description: An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
    - name: EndpointNetworkType
      value: "{{ EndpointNetworkType }}"
      description: The network type of the DB proxy endpoint. The network type determines the IP version that the proxy endpoint supports. Valid values: IPV4 - The proxy endpoint supports IPv4 only. IPV6 - The proxy endpoint supports IPv6 only. DUAL - The proxy endpoint supports both IPv4 and IPv6. Default: IPV4 Constraints: If you specify IPV6 or DUAL, the VPC and all subnets must have an IPv6 CIDR block. If you specify IPV6 or DUAL, the VPC tenancy cannot be dedicated.
      description: The network type of the DB proxy endpoint. The network type determines the IP version that the proxy endpoint supports. Valid values: IPV4 - The proxy endpoint supports IPv4 only. IPV6 - The proxy endpoint supports IPv6 only. DUAL - The proxy endpoint supports both IPv4 and IPv6. Default: IPV4 Constraints: If you specify IPV6 or DUAL, the VPC and all subnets must have an IPv6 CIDR block. If you specify IPV6 or DUAL, the VPC tenancy cannot be dedicated.
    - name: TargetConnectionNetworkType
      value: "{{ TargetConnectionNetworkType }}"
      description: The network type that the proxy uses to connect to the target database. The network type determines the IP version that the proxy uses for connections to the database. Valid values: IPV4 - The proxy connects to the database using IPv4 only. IPV6 - The proxy connects to the database using IPv6 only. Default: IPV4 Constraints: If you specify IPV6, the database must support dual-stack mode. RDS doesn't support IPv6-only databases. All targets registered with the proxy must be compatible with the specified network type.
      description: The network type that the proxy uses to connect to the target database. The network type determines the IP version that the proxy uses for connections to the database. Valid values: IPV4 - The proxy connects to the database using IPv4 only. IPV6 - The proxy connects to the database using IPv6 only. Default: IPV4 Constraints: If you specify IPV6, the database must support dual-stack mode. RDS doesn't support IPv6-only databases. All targets registered with the proxy must be compatible with the specified network type.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_db_proxy"
    values={[
        { label: 'modify_db_proxy', value: 'modify_db_proxy' }
    ]}
>
<TabItem value="modify_db_proxy">

Changes the settings for an existing DB proxy.

```sql
UPDATE aws.rds.db_proxies
SET 
-- No updatable properties
WHERE 
DBProxyName = '{{ DBProxyName }}' --required
AND region = '{{ region }}' --required
AND NewDBProxyName = '{{ NewDBProxyName}}'
AND DefaultAuthScheme = '{{ DefaultAuthScheme}}'
AND Auth = '{{ Auth}}'
AND RequireTLS = {{ RequireTLS}}
AND IdleClientTimeout = '{{ IdleClientTimeout}}'
AND DebugLogging = {{ DebugLogging}}
AND RoleArn = '{{ RoleArn}}'
AND SecurityGroups = '{{ SecurityGroups}}'
RETURNING
auth,
created_date,
db_proxy_arn,
db_proxy_name,
debug_logging,
default_auth_scheme,
endpoint,
endpoint_network_type,
engine_family,
idle_client_timeout,
require_tls,
role_arn,
status,
target_connection_network_type,
updated_date,
vpc_id,
vpc_security_group_ids,
vpc_subnet_ids;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_db_proxy"
    values={[
        { label: 'delete_db_proxy', value: 'delete_db_proxy' }
    ]}
>
<TabItem value="delete_db_proxy">

Deletes an existing DB proxy.

```sql
DELETE FROM aws.rds.db_proxies
WHERE DBProxyName = '{{ DBProxyName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
