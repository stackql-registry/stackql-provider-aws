--- 
title: cluster_security_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_security_groups
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

Creates, updates, deletes, gets or lists a <code>cluster_security_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_security_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.cluster_security_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster_security_groups"
    values={[
        { label: 'describe_cluster_security_groups', value: 'describe_cluster_security_groups' }
    ]}
>
<TabItem value="describe_cluster_security_groups">

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
    <td><CopyableCode code="ClusterSecurityGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster security group to which the operation was applied.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="EC2SecurityGroups" /></td>
    <td><code>string</code></td>
    <td>A list of EC2 security groups that are permitted to access clusters associated with this cluster security group.</td>
</tr>
<tr>
    <td><CopyableCode code="IPRanges" /></td>
    <td><code>string</code></td>
    <td>A list of IP ranges (CIDR blocks) that are permitted to access clusters associated with this cluster security group.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The list of tags for the cluster security group.</td>
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
    <td><a href="#describe_cluster_security_groups"><CopyableCode code="describe_cluster_security_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ClusterSecurityGroupName"><code>ClusterSecurityGroupName</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-TagValues"><code>TagValues</code></a></td>
    <td>Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group. For information about managing security groups, go to Amazon Redshift Cluster Security Groups in the Amazon Redshift Cluster Management Guide. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all security groups that have any combination of those values are returned. If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.</td>
</tr>
<tr>
    <td><a href="#create_cluster_security_group"><CopyableCode code="create_cluster_security_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ClusterSecurityGroupName"><code>ClusterSecurityGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new Amazon Redshift security group. You use security groups to control access to non-VPC clusters. For information about managing security groups, go to Amazon Redshift Cluster Security Groups in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#authorize_cluster_security_group_ingress"><CopyableCode code="authorize_cluster_security_group_ingress" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ClusterSecurityGroupName"><code>ClusterSecurityGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CIDRIP"><code>CIDRIP</code></a>, <a href="#parameter-EC2SecurityGroupName"><code>EC2SecurityGroupName</code></a>, <a href="#parameter-EC2SecurityGroupOwnerId"><code>EC2SecurityGroupOwnerId</code></a></td>
    <td>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group. If you authorize access to an Amazon EC2 security group, specify EC2SecurityGroupName and EC2SecurityGroupOwnerId. The Amazon EC2 security group and Amazon Redshift cluster must be in the same Amazon Web Services Region. If you authorize access to a CIDR/IP address range, specify CIDRIP. For an overview of CIDR blocks, see the Wikipedia article on Classless Inter-Domain Routing. You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to Working with Security Groups in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#delete_cluster_security_group"><CopyableCode code="delete_cluster_security_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ClusterSecurityGroupName"><code>ClusterSecurityGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Redshift security group. You cannot delete a security group that is associated with any clusters. You cannot delete the default security group. For information about managing security groups, go to Amazon Redshift Cluster Security Groups in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#revoke_cluster_security_group_ingress"><CopyableCode code="revoke_cluster_security_group_ingress" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ClusterSecurityGroupName"><code>ClusterSecurityGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CIDRIP"><code>CIDRIP</code></a>, <a href="#parameter-EC2SecurityGroupName"><code>EC2SecurityGroupName</code></a>, <a href="#parameter-EC2SecurityGroupOwnerId"><code>EC2SecurityGroupOwnerId</code></a></td>
    <td>Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see AuthorizeClusterSecurityGroupIngress. For information about managing security groups, go to Amazon Redshift Cluster Security Groups in the Amazon Redshift Cluster Management Guide.</td>
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
<tr id="parameter-ClusterSecurityGroupName">
    <td><CopyableCode code="ClusterSecurityGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the security Group from which to revoke the ingress rule.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CIDRIP">
    <td><CopyableCode code="CIDRIP" /></td>
    <td><code>string</code></td>
    <td>The IP range for which to revoke access. This range must be a valid Classless Inter-Domain Routing (CIDR) block of IP addresses. If CIDRIP is specified, EC2SecurityGroupName and EC2SecurityGroupOwnerId cannot be provided.</td>
</tr>
<tr id="parameter-ClusterSecurityGroupName">
    <td><CopyableCode code="ClusterSecurityGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of a cluster security group for which you are requesting details. You must specify either the Marker parameter or a ClusterSecurityGroupName parameter, but not both. Example: securitygroup1</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description for the security group.</td>
</tr>
<tr id="parameter-EC2SecurityGroupName">
    <td><CopyableCode code="EC2SecurityGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the EC2 Security Group whose access is to be revoked. If EC2SecurityGroupName is specified, EC2SecurityGroupOwnerId must also be provided and CIDRIP cannot be provided.</td>
</tr>
<tr id="parameter-EC2SecurityGroupOwnerId">
    <td><CopyableCode code="EC2SecurityGroupOwnerId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account number of the owner of the security group specified in the EC2SecurityGroupName parameter. The Amazon Web Services access key ID is not an acceptable value. If EC2SecurityGroupOwnerId is specified, EC2SecurityGroupName must also be provided. and CIDRIP cannot be provided. Example: 111122223333</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeClusterSecurityGroups request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request. Constraints: You must specify either the ClusterSecurityGroupName parameter or the Marker parameter, but not both.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-TagKeys">
    <td><CopyableCode code="TagKeys" /></td>
    <td><code>array</code></td>
    <td>A tag key or keys for which you want to return all matching cluster security groups that are associated with the specified key or keys. For example, suppose that you have security groups that are tagged with keys called owner and environment. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the security groups that have either or both of these tag keys associated with them.</td>
</tr>
<tr id="parameter-TagValues">
    <td><CopyableCode code="TagValues" /></td>
    <td><code>array</code></td>
    <td>A tag value or values for which you want to return all matching cluster security groups that are associated with the specified tag value or values. For example, suppose that you have security groups that are tagged with values called admin and test. If you specify both of these tag values in the request, Amazon Redshift returns a response with the security groups that have either or both of these tag values associated with them.</td>
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
    defaultValue="describe_cluster_security_groups"
    values={[
        { label: 'describe_cluster_security_groups', value: 'describe_cluster_security_groups' }
    ]}
>
<TabItem value="describe_cluster_security_groups">

Returns information about Amazon Redshift security groups. If the name of a security group is specified, the response will contain only information about only that security group. For information about managing security groups, go to Amazon Redshift Cluster Security Groups in the Amazon Redshift Cluster Management Guide. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all security groups that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all security groups that have any combination of those values are returned. If both tag keys and values are omitted from the request, security groups are returned regardless of whether they have tag keys or values associated with them.

```sql
SELECT
ClusterSecurityGroupName,
Description,
EC2SecurityGroups,
IPRanges,
Tags
FROM aws.redshift.cluster_security_groups
WHERE region = '{{ region }}' -- required
AND ClusterSecurityGroupName = '{{ ClusterSecurityGroupName }}'
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
    defaultValue="create_cluster_security_group"
    values={[
        { label: 'create_cluster_security_group', value: 'create_cluster_security_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cluster_security_group">

Creates a new Amazon Redshift security group. You use security groups to control access to non-VPC clusters. For information about managing security groups, go to Amazon Redshift Cluster Security Groups in the Amazon Redshift Cluster Management Guide.

```sql
INSERT INTO aws.redshift.cluster_security_groups (
ClusterSecurityGroupName,
region,
Description,
Tags
)
SELECT 
'{{ ClusterSecurityGroupName }}',
'{{ region }}',
'{{ Description }}',
'{{ Tags }}'
RETURNING
ClusterSecurityGroupName,
Description,
EC2SecurityGroups,
IPRanges,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cluster_security_groups
  props:
    - name: ClusterSecurityGroupName
      value: "{{ ClusterSecurityGroupName }}"
      description: Required parameter for the cluster_security_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cluster_security_groups resource.
    - name: Description
      value: "{{ Description }}"
      description: A description for the security group.
      description: A description for the security group.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tag instances.
      description: A list of tag instances.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="authorize_cluster_security_group_ingress"
    values={[
        { label: 'authorize_cluster_security_group_ingress', value: 'authorize_cluster_security_group_ingress' }
    ]}
>
<TabItem value="authorize_cluster_security_group_ingress">

Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group. If you authorize access to an Amazon EC2 security group, specify EC2SecurityGroupName and EC2SecurityGroupOwnerId. The Amazon EC2 security group and Amazon Redshift cluster must be in the same Amazon Web Services Region. If you authorize access to a CIDR/IP address range, specify CIDRIP. For an overview of CIDR blocks, see the Wikipedia article on Classless Inter-Domain Routing. You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to Working with Security Groups in the Amazon Redshift Cluster Management Guide.

```sql
UPDATE aws.redshift.cluster_security_groups
SET 
-- No updatable properties
WHERE 
ClusterSecurityGroupName = '{{ ClusterSecurityGroupName }}' --required
AND region = '{{ region }}' --required
AND CIDRIP = '{{ CIDRIP}}'
AND EC2SecurityGroupName = '{{ EC2SecurityGroupName}}'
AND EC2SecurityGroupOwnerId = '{{ EC2SecurityGroupOwnerId}}'
RETURNING
ClusterSecurityGroupName,
Description,
EC2SecurityGroups,
IPRanges,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cluster_security_group"
    values={[
        { label: 'delete_cluster_security_group', value: 'delete_cluster_security_group' }
    ]}
>
<TabItem value="delete_cluster_security_group">

Deletes an Amazon Redshift security group. You cannot delete a security group that is associated with any clusters. You cannot delete the default security group. For information about managing security groups, go to Amazon Redshift Cluster Security Groups in the Amazon Redshift Cluster Management Guide.

```sql
DELETE FROM aws.redshift.cluster_security_groups
WHERE ClusterSecurityGroupName = '{{ ClusterSecurityGroupName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="revoke_cluster_security_group_ingress"
    values={[
        { label: 'revoke_cluster_security_group_ingress', value: 'revoke_cluster_security_group_ingress' }
    ]}
>
<TabItem value="revoke_cluster_security_group_ingress">

Revokes an ingress rule in an Amazon Redshift security group for a previously authorized IP range or Amazon EC2 security group. To add an ingress rule, see AuthorizeClusterSecurityGroupIngress. For information about managing security groups, go to Amazon Redshift Cluster Security Groups in the Amazon Redshift Cluster Management Guide.

```sql
EXEC aws.redshift.cluster_security_groups.revoke_cluster_security_group_ingress 
@ClusterSecurityGroupName='{{ ClusterSecurityGroupName }}' --required, 
@region='{{ region }}' --required, 
@CIDRIP='{{ CIDRIP }}', 
@EC2SecurityGroupName='{{ EC2SecurityGroupName }}', 
@EC2SecurityGroupOwnerId='{{ EC2SecurityGroupOwnerId }}'
;
```
</TabItem>
</Tabs>
