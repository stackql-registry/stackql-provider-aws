--- 
title: endpoint_access
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoint_access
  - redshift
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

Creates, updates, deletes, gets or lists an <code>endpoint_access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoint_access" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.endpoint_access" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_endpoint_access"
    values={[
        { label: 'describe_endpoint_access', value: 'describe_endpoint_access' }
    ]}
>
<TabItem value="describe_endpoint_access">

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
    <td><CopyableCode code="address" /></td>
    <td><code>string</code></td>
    <td>The DNS address of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_identifier" /></td>
    <td><code>string</code></td>
    <td>The cluster identifier of the cluster associated with the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_create_time" /></td>
    <td><code>string</code></td>
    <td>The time (UTC) that the endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_status" /></td>
    <td><code>string</code></td>
    <td>The status of the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port number on which the cluster accepts incoming connections.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the owner of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_group_name" /></td>
    <td><code>string</code></td>
    <td>The subnet group name where Amazon Redshift chooses to deploy the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint" /></td>
    <td><code>string</code></td>
    <td>The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_security_groups" /></td>
    <td><code>string</code></td>
    <td>The security groups associated with the endpoint.</td>
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
    <td><a href="#describe_endpoint_access"><CopyableCode code="describe_endpoint_access" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-ResourceOwner"><code>ResourceOwner</code></a>, <a href="#parameter-EndpointName"><code>EndpointName</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Describes a Redshift-managed VPC endpoint.</td>
</tr>
<tr>
    <td><a href="#create_endpoint_access"><CopyableCode code="create_endpoint_access" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-EndpointName"><code>EndpointName</code></a>, <a href="#parameter-SubnetGroupName"><code>SubnetGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-ResourceOwner"><code>ResourceOwner</code></a>, <a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a></td>
    <td>Creates a Redshift-managed VPC endpoint.</td>
</tr>
<tr>
    <td><a href="#authorize_endpoint_access"><CopyableCode code="authorize_endpoint_access" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-Account"><code>Account</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-VpcIds"><code>VpcIds</code></a></td>
    <td>Grants access to a cluster.</td>
</tr>
<tr>
    <td><a href="#modify_endpoint_access"><CopyableCode code="modify_endpoint_access" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-EndpointName"><code>EndpointName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-VpcSecurityGroupIds"><code>VpcSecurityGroupIds</code></a></td>
    <td>Modifies a Redshift-managed VPC endpoint.</td>
</tr>
<tr>
    <td><a href="#revoke_endpoint_access"><CopyableCode code="revoke_endpoint_access" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-Account"><code>Account</code></a>, <a href="#parameter-VpcIds"><code>VpcIds</code></a>, <a href="#parameter-Force"><code>Force</code></a></td>
    <td>Revokes access to a cluster.</td>
</tr>
<tr>
    <td><a href="#delete_endpoint_access"><CopyableCode code="delete_endpoint_access" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-EndpointName"><code>EndpointName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Redshift-managed VPC endpoint.</td>
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
<tr id="parameter-Account">
    <td><CopyableCode code="Account" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID to grant access to.</td>
</tr>
<tr id="parameter-EndpointName">
    <td><CopyableCode code="EndpointName" /></td>
    <td><code>string</code></td>
    <td>The Redshift-managed VPC endpoint to delete.</td>
</tr>
<tr id="parameter-SubnetGroupName">
    <td><CopyableCode code="SubnetGroupName" /></td>
    <td><code>string</code></td>
    <td>The subnet group from which Amazon Redshift chooses the subnet to deploy the endpoint.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Account">
    <td><CopyableCode code="Account" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID whose access is to be revoked.</td>
</tr>
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The cluster to revoke access from.</td>
</tr>
<tr id="parameter-EndpointName">
    <td><CopyableCode code="EndpointName" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint to be described.</td>
</tr>
<tr id="parameter-Force">
    <td><CopyableCode code="Force" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to force the revoke action. If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeEndpointAccess request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by the MaxRecords parameter.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a Marker is included in the response so that the remaining results can be retrieved.</td>
</tr>
<tr id="parameter-ResourceOwner">
    <td><CopyableCode code="ResourceOwner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the owner of the cluster. This is only required if the cluster is in another Amazon Web Services account.</td>
</tr>
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The virtual private cloud (VPC) identifier with access to the cluster.</td>
</tr>
<tr id="parameter-VpcIds">
    <td><CopyableCode code="VpcIds" /></td>
    <td><code>array</code></td>
    <td>The virtual private cloud (VPC) identifiers for which access is to be revoked.</td>
</tr>
<tr id="parameter-VpcSecurityGroupIds">
    <td><CopyableCode code="VpcSecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>The complete list of VPC security groups associated with the endpoint after the endpoint is modified.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_endpoint_access"
    values={[
        { label: 'describe_endpoint_access', value: 'describe_endpoint_access' }
    ]}
>
<TabItem value="describe_endpoint_access">

Describes a Redshift-managed VPC endpoint.

```sql
SELECT
address,
cluster_identifier,
endpoint_create_time,
endpoint_name,
endpoint_status,
port,
resource_owner,
subnet_group_name,
vpc_endpoint,
vpc_security_groups
FROM aws.redshift.endpoint_access
WHERE region = '{{ region }}' -- required
AND ClusterIdentifier = '{{ ClusterIdentifier }}'
AND ResourceOwner = '{{ ResourceOwner }}'
AND EndpointName = '{{ EndpointName }}'
AND VpcId = '{{ VpcId }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_endpoint_access"
    values={[
        { label: 'create_endpoint_access', value: 'create_endpoint_access' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_endpoint_access">

Creates a Redshift-managed VPC endpoint.

```sql
INSERT INTO aws.redshift.endpoint_access (
EndpointName,
SubnetGroupName,
region,
ClusterIdentifier,
ResourceOwner,
VpcSecurityGroupIds
)
SELECT 
'{{ EndpointName }}',
'{{ SubnetGroupName }}',
'{{ region }}',
'{{ ClusterIdentifier }}',
'{{ ResourceOwner }}',
'{{ VpcSecurityGroupIds }}'
RETURNING
address,
cluster_identifier,
endpoint_create_time,
endpoint_name,
endpoint_status,
port,
resource_owner,
subnet_group_name,
vpc_endpoint,
vpc_security_groups
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: endpoint_access
  props:
    - name: EndpointName
      value: "{{ EndpointName }}"
      description: Required parameter for the endpoint_access resource.
    - name: SubnetGroupName
      value: "{{ SubnetGroupName }}"
      description: Required parameter for the endpoint_access resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the endpoint_access resource.
    - name: ClusterIdentifier
      value: "{{ ClusterIdentifier }}"
      description: The cluster identifier of the cluster to access.
      description: The cluster identifier of the cluster to access.
    - name: ResourceOwner
      value: "{{ ResourceOwner }}"
      description: The Amazon Web Services account ID of the owner of the cluster. This is only required if the cluster is in another Amazon Web Services account.
      description: The Amazon Web Services account ID of the owner of the cluster. This is only required if the cluster is in another Amazon Web Services account.
    - name: VpcSecurityGroupIds
      value: "{{ VpcSecurityGroupIds }}"
      description: The security group that defines the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
      description: The security group that defines the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="authorize_endpoint_access"
    values={[
        { label: 'authorize_endpoint_access', value: 'authorize_endpoint_access' },
        { label: 'modify_endpoint_access', value: 'modify_endpoint_access' },
        { label: 'revoke_endpoint_access', value: 'revoke_endpoint_access' }
    ]}
>
<TabItem value="authorize_endpoint_access">

Grants access to a cluster.

```sql
UPDATE aws.redshift.endpoint_access
SET 
-- No updatable properties
WHERE 
Account = '{{ Account }}' --required
AND region = '{{ region }}' --required
AND ClusterIdentifier = '{{ ClusterIdentifier}}'
AND VpcIds = '{{ VpcIds}}'
RETURNING
allowed_all_vpcs,
allowed_vpcs,
authorize_time,
cluster_identifier,
cluster_status,
endpoint_count,
grantee,
grantor,
status;
```
</TabItem>
<TabItem value="modify_endpoint_access">

Modifies a Redshift-managed VPC endpoint.

```sql
UPDATE aws.redshift.endpoint_access
SET 
-- No updatable properties
WHERE 
EndpointName = '{{ EndpointName }}' --required
AND region = '{{ region }}' --required
AND VpcSecurityGroupIds = '{{ VpcSecurityGroupIds}}'
RETURNING
address,
cluster_identifier,
endpoint_create_time,
endpoint_name,
endpoint_status,
port,
resource_owner,
subnet_group_name,
vpc_endpoint,
vpc_security_groups;
```
</TabItem>
<TabItem value="revoke_endpoint_access">

Revokes access to a cluster.

```sql
UPDATE aws.redshift.endpoint_access
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND ClusterIdentifier = '{{ ClusterIdentifier}}'
AND Account = '{{ Account}}'
AND VpcIds = '{{ VpcIds}}'
AND Force = {{ Force}}
RETURNING
allowed_all_vpcs,
allowed_vpcs,
authorize_time,
cluster_identifier,
cluster_status,
endpoint_count,
grantee,
grantor,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_endpoint_access"
    values={[
        { label: 'delete_endpoint_access', value: 'delete_endpoint_access' }
    ]}
>
<TabItem value="delete_endpoint_access">

Deletes a Redshift-managed VPC endpoint.

```sql
DELETE FROM aws.redshift.endpoint_access
WHERE EndpointName = '{{ EndpointName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
