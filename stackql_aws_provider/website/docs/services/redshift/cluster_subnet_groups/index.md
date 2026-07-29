--- 
title: cluster_subnet_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_subnet_groups
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

Creates, updates, deletes, gets or lists a <code>cluster_subnet_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_subnet_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.cluster_subnet_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster_subnet_groups"
    values={[
        { label: 'describe_cluster_subnet_groups', value: 'describe_cluster_subnet_groups' }
    ]}
>
<TabItem value="describe_cluster_subnet_groups">

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
    <td><CopyableCode code="cluster_subnet_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the cluster subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_group_status" /></td>
    <td><code>string</code></td>
    <td>The status of the cluster subnet group. Possible values are Complete, Incomplete and Invalid.</td>
</tr>
<tr>
    <td><CopyableCode code="subnets" /></td>
    <td><code>string</code></td>
    <td>A list of the VPC Subnet elements.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_cluster_ip_address_types" /></td>
    <td><code>string</code></td>
    <td>The IP address types supported by this cluster subnet group. Possible values are ipv4 and dualstack.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The list of tags for the cluster subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The VPC ID of the cluster subnet group.</td>
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
    <td><a href="#describe_cluster_subnet_groups"><CopyableCode code="describe_cluster_subnet_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterSubnetGroupName"><code>ClusterSubnetGroupName</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-TagValues"><code>TagValues</code></a></td>
    <td>Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in your Amazon Web Services account. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all subnet groups that have any combination of those values are returned. If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.</td>
</tr>
<tr>
    <td><a href="#create_cluster_subnet_group"><CopyableCode code="create_cluster_subnet_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ClusterSubnetGroupName"><code>ClusterSubnetGroupName</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating Amazon Redshift subnet group. For information about subnet groups, go to Amazon Redshift Cluster Subnet Groups in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#modify_cluster_subnet_group"><CopyableCode code="modify_cluster_subnet_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ClusterSubnetGroupName"><code>ClusterSubnetGroupName</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a></td>
    <td>Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets. VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. If a subnet group for a provisioned cluster is in an account with VPC BPA turned on, the following capabilities are blocked: Creating a public cluster Restoring a public cluster Modifying a private cluster to be public Adding a subnet with VPC BPA turned on to the subnet group when there's at least one public cluster within the group For more information about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_cluster_subnet_group"><CopyableCode code="delete_cluster_subnet_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ClusterSubnetGroupName"><code>ClusterSubnetGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified cluster subnet group.</td>
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
<tr id="parameter-ClusterSubnetGroupName">
    <td><CopyableCode code="ClusterSubnetGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster subnet group name to be deleted.</td>
</tr>
<tr id="parameter-SubnetIds">
    <td><CopyableCode code="SubnetIds" /></td>
    <td><code>array</code></td>
    <td>An array of VPC subnet IDs. A maximum of 20 subnets can be modified in a single request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClusterSubnetGroupName">
    <td><CopyableCode code="ClusterSubnetGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster subnet group for which information is requested.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A text description of the subnet group to be modified.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeClusterSubnetGroups request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-TagKeys">
    <td><CopyableCode code="TagKeys" /></td>
    <td><code>array</code></td>
    <td>A tag key or keys for which you want to return all matching cluster subnet groups that are associated with the specified key or keys. For example, suppose that you have subnet groups that are tagged with keys called owner and environment. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the subnet groups that have either or both of these tag keys associated with them.</td>
</tr>
<tr id="parameter-TagValues">
    <td><CopyableCode code="TagValues" /></td>
    <td><code>array</code></td>
    <td>A tag value or values for which you want to return all matching cluster subnet groups that are associated with the specified tag value or values. For example, suppose that you have subnet groups that are tagged with values called admin and test. If you specify both of these tag values in the request, Amazon Redshift returns a response with the subnet groups that have either or both of these tag values associated with them.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tag instances.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_cluster_subnet_groups"
    values={[
        { label: 'describe_cluster_subnet_groups', value: 'describe_cluster_subnet_groups' }
    ]}
>
<TabItem value="describe_cluster_subnet_groups">

Returns one or more cluster subnet group objects, which contain metadata about your cluster subnet groups. By default, this operation returns information about all cluster subnet groups that are defined in your Amazon Web Services account. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all subnet groups that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all subnet groups that have any combination of those values are returned. If both tag keys and values are omitted from the request, subnet groups are returned regardless of whether they have tag keys or values associated with them.

```sql
SELECT
cluster_subnet_group_name,
description,
subnet_group_status,
subnets,
supported_cluster_ip_address_types,
tags,
vpc_id
FROM aws.redshift.cluster_subnet_groups
WHERE region = '{{ region }}' -- required
AND ClusterSubnetGroupName = '{{ ClusterSubnetGroupName }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND TagKeys = '{{ TagKeys }}'
AND TagValues = '{{ TagValues }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cluster_subnet_group"
    values={[
        { label: 'create_cluster_subnet_group', value: 'create_cluster_subnet_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cluster_subnet_group">

Creates a new Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating Amazon Redshift subnet group. For information about subnet groups, go to Amazon Redshift Cluster Subnet Groups in the Amazon Redshift Cluster Management Guide.

```sql
INSERT INTO aws.redshift.cluster_subnet_groups (
ClusterSubnetGroupName,
SubnetIds,
region,
Description,
Tags
)
SELECT 
'{{ ClusterSubnetGroupName }}',
'{{ SubnetIds }}',
'{{ region }}',
'{{ Description }}',
'{{ Tags }}'
RETURNING
cluster_subnet_group_name,
description,
subnet_group_status,
subnets,
supported_cluster_ip_address_types,
tags,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cluster_subnet_groups
  props:
    - name: ClusterSubnetGroupName
      value: "{{ ClusterSubnetGroupName }}"
      description: Required parameter for the cluster_subnet_groups resource.
    - name: SubnetIds
      value: "{{ SubnetIds }}"
      description: Required parameter for the cluster_subnet_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cluster_subnet_groups resource.
    - name: Description
      value: "{{ Description }}"
      description: A description for the subnet group.
      description: A description for the subnet group.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tag instances.
      description: A list of tag instances.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_cluster_subnet_group"
    values={[
        { label: 'modify_cluster_subnet_group', value: 'modify_cluster_subnet_group' }
    ]}
>
<TabItem value="modify_cluster_subnet_group">

Modifies a cluster subnet group to include the specified list of VPC subnets. The operation replaces the existing list of subnets with the new list of subnets. VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. If a subnet group for a provisioned cluster is in an account with VPC BPA turned on, the following capabilities are blocked: Creating a public cluster Restoring a public cluster Modifying a private cluster to be public Adding a subnet with VPC BPA turned on to the subnet group when there's at least one public cluster within the group For more information about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.

```sql
UPDATE aws.redshift.cluster_subnet_groups
SET 
-- No updatable properties
WHERE 
ClusterSubnetGroupName = '{{ ClusterSubnetGroupName }}' --required
AND SubnetIds = '{{ SubnetIds }}' --required
AND region = '{{ region }}' --required
AND Description = '{{ Description}}'
RETURNING
cluster_subnet_group_name,
description,
subnet_group_status,
subnets,
supported_cluster_ip_address_types,
tags,
vpc_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cluster_subnet_group"
    values={[
        { label: 'delete_cluster_subnet_group', value: 'delete_cluster_subnet_group' }
    ]}
>
<TabItem value="delete_cluster_subnet_group">

Deletes the specified cluster subnet group.

```sql
DELETE FROM aws.redshift.cluster_subnet_groups
WHERE ClusterSubnetGroupName = '{{ ClusterSubnetGroupName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
