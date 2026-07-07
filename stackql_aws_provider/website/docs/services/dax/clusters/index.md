--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - dax
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dax.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_clusters"
    values={[
        { label: 'describe_clusters', value: 'describe_clusters' }
    ]}
>
<TabItem value="describe_clusters">

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
    <td><CopyableCode code="ActiveNodes" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes in the cluster that are active (i.e., capable of serving requests).</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterDiscoveryEndpoint" /></td>
    <td><code>object</code></td>
    <td>The endpoint for this DAX cluster, consisting of a DNS name, a port number, and a URL. Applications should use the URL to configure the DAX client to find their cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterEndpointEncryptionType" /></td>
    <td><code>string</code></td>
    <td>The type of encryption supported by the cluster's endpoint. Values are: NONE for no encryption TLS for Transport Layer Security (NONE, TLS)</td>
</tr>
<tr>
    <td><CopyableCode code="ClusterName" /></td>
    <td><code>string</code></td>
    <td>The name of the DAX cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="IamRoleArn" /></td>
    <td><code>string</code></td>
    <td>A valid Amazon Resource Name (ARN) that identifies an IAM role. At runtime, DAX will assume this role and use the role's permissions to access DynamoDB on your behalf.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkType" /></td>
    <td><code>string</code></td>
    <td>The IP address type of the cluster. Values are: ipv4 - IPv4 addresses only ipv6 - IPv6 addresses only dual_stack - Both IPv4 and IPv6 addresses (ipv4, ipv6, dual_stack)</td>
</tr>
<tr>
    <td><CopyableCode code="NodeIdsToRemove" /></td>
    <td><code>array</code></td>
    <td>A list of nodes to be removed from the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="NodeType" /></td>
    <td><code>string</code></td>
    <td>The node type for the nodes in the cluster. (All nodes in a DAX cluster are of the same type.)</td>
</tr>
<tr>
    <td><CopyableCode code="Nodes" /></td>
    <td><code>array</code></td>
    <td>A list of nodes that are currently in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="NotificationConfiguration" /></td>
    <td><code>object</code></td>
    <td>Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS).</td>
</tr>
<tr>
    <td><CopyableCode code="ParameterGroup" /></td>
    <td><code>object</code></td>
    <td>The parameter group being used by nodes in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="PreferredMaintenanceWindow" /></td>
    <td><code>string</code></td>
    <td>A range of time when maintenance of DAX cluster software will be performed. For example: sun:01:00-sun:09:00. Cluster maintenance normally takes less than 30 minutes, and is performed automatically within the maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="SSEDescription" /></td>
    <td><code>object</code></td>
    <td>The description of the server-side encryption status on the specified DAX cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="SecurityGroups" /></td>
    <td><code>array</code></td>
    <td>A list of security groups, and the status of each, for the nodes in the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="SubnetGroup" /></td>
    <td><code>string</code></td>
    <td>The subnet group where the DAX cluster is running.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalNodes" /></td>
    <td><code>integer</code></td>
    <td>The total number of nodes in the cluster.</td>
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
    <td><a href="#describe_clusters"><CopyableCode code="describe_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied. If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned. If the cluster is in the DELETING state, only cluster level information will be displayed. If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is available, the cluster is ready for use. If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.</td>
</tr>
<tr>
    <td><a href="#create_cluster"><CopyableCode code="create_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a>, <a href="#parameter-NodeType"><code>NodeType</code></a>, <a href="#parameter-ReplicationFactor"><code>ReplicationFactor</code></a>, <a href="#parameter-IamRoleArn"><code>IamRoleArn</code></a></td>
    <td></td>
    <td>Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.</td>
</tr>
<tr>
    <td><a href="#update_cluster"><CopyableCode code="update_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a></td>
    <td></td>
    <td>Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.</td>
</tr>
<tr>
    <td><a href="#delete_cluster"><CopyableCode code="delete_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a previously provisioned DAX cluster. DeleteCluster deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.</td>
</tr>
<tr>
    <td><a href="#decrease_replication_factor"><CopyableCode code="decrease_replication_factor" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a>, <a href="#parameter-NewReplicationFactor"><code>NewReplicationFactor</code></a></td>
    <td></td>
    <td>Removes one or more nodes from a DAX cluster. You cannot use DecreaseReplicationFactor to remove the last node in a DAX cluster. If you need to do this, use DeleteCluster instead.</td>
</tr>
<tr>
    <td><a href="#increase_replication_factor"><CopyableCode code="increase_replication_factor" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a>, <a href="#parameter-NewReplicationFactor"><code>NewReplicationFactor</code></a></td>
    <td></td>
    <td>Adds one or more nodes to a DAX cluster.</td>
</tr>
<tr>
    <td><a href="#reboot_node"><CopyableCode code="reboot_node" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a>, <a href="#parameter-NodeId"><code>NodeId</code></a></td>
    <td></td>
    <td>Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING. RebootNode restarts the DAX engine process and does not remove the contents of the cache.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_clusters"
    values={[
        { label: 'describe_clusters', value: 'describe_clusters' }
    ]}
>
<TabItem value="describe_clusters">

Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied. If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned. If the cluster is in the DELETING state, only cluster level information will be displayed. If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is available, the cluster is ready for use. If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.

```sql
SELECT
ActiveNodes,
ClusterArn,
ClusterDiscoveryEndpoint,
ClusterEndpointEncryptionType,
ClusterName,
Description,
IamRoleArn,
NetworkType,
NodeIdsToRemove,
NodeType,
Nodes,
NotificationConfiguration,
ParameterGroup,
PreferredMaintenanceWindow,
SSEDescription,
SecurityGroups,
Status,
SubnetGroup,
TotalNodes
FROM aws.dax.clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cluster"
    values={[
        { label: 'create_cluster', value: 'create_cluster' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cluster">

Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.

```sql
INSERT INTO aws.dax.clusters (
ClusterName,
NodeType,
Description,
ReplicationFactor,
AvailabilityZones,
SubnetGroupName,
SecurityGroupIds,
PreferredMaintenanceWindow,
NotificationTopicArn,
IamRoleArn,
ParameterGroupName,
Tags,
SSESpecification,
ClusterEndpointEncryptionType,
NetworkType,
region
)
SELECT 
'{{ ClusterName }}' /* required */,
'{{ NodeType }}' /* required */,
'{{ Description }}',
{{ ReplicationFactor }} /* required */,
'{{ AvailabilityZones }}',
'{{ SubnetGroupName }}',
'{{ SecurityGroupIds }}',
'{{ PreferredMaintenanceWindow }}',
'{{ NotificationTopicArn }}',
'{{ IamRoleArn }}' /* required */,
'{{ ParameterGroupName }}',
'{{ Tags }}',
'{{ SSESpecification }}',
'{{ ClusterEndpointEncryptionType }}',
'{{ NetworkType }}',
'{{ region }}'
RETURNING
Cluster
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the clusters resource.
    - name: ClusterName
      value: "{{ ClusterName }}"
      description: |
        The cluster identifier. This parameter is stored as a lowercase string. Constraints: A name must contain from 1 to 20 alphanumeric characters or hyphens. The first character must be a letter. A name cannot end with a hyphen or contain two consecutive hyphens.
    - name: NodeType
      value: "{{ NodeType }}"
      description: |
        The compute and memory capacity of the nodes in the cluster.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the cluster.
    - name: ReplicationFactor
      value: {{ ReplicationFactor }}
      description: |
        The number of nodes in the DAX cluster. A replication factor of 1 will create a single-node cluster, without any read replicas. For additional fault tolerance, you can create a multiple node cluster with one or more read replicas. To do this, set ReplicationFactor to a number between 3 (one primary and two read replicas) and 10 (one primary and nine read replicas). If the AvailabilityZones parameter is provided, its length must equal the ReplicationFactor. Amazon Web Services recommends that you have at least two read replicas per cluster.
    - name: AvailabilityZones
      value:
        - "{{ AvailabilityZones }}"
      description: |
        The Availability Zones (AZs) in which the cluster nodes will reside after the cluster has been created or updated. If provided, the length of this list must equal the ReplicationFactor parameter. If you omit this parameter, DAX will spread the nodes across Availability Zones for the highest availability.
    - name: SubnetGroupName
      value: "{{ SubnetGroupName }}"
      description: |
        The name of the subnet group to be used for the replication group. DAX clusters can only run in an Amazon VPC environment. All of the subnets that you specify in a subnet group must exist in the same VPC.
    - name: SecurityGroupIds
      value:
        - "{{ SecurityGroupIds }}"
      description: |
        A list of security group IDs to be assigned to each node in the DAX cluster. (Each of the security group ID is system-generated.) If this parameter is not specified, DAX assigns the default VPC security group to each node.
    - name: PreferredMaintenanceWindow
      value: "{{ PreferredMaintenanceWindow }}"
      description: |
        Specifies the weekly time range during which maintenance on the DAX cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period. Valid values for ddd are: sun mon tue wed thu fri sat Example: sun:05:00-sun:09:00 If you don't specify a preferred maintenance window when you create or modify a cache cluster, DAX assigns a 60-minute maintenance window on a randomly selected day of the week.
    - name: NotificationTopicArn
      value: "{{ NotificationTopicArn }}"
      description: |
        The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications will be sent. The Amazon SNS topic owner must be same as the DAX cluster owner.
    - name: IamRoleArn
      value: "{{ IamRoleArn }}"
      description: |
        A valid Amazon Resource Name (ARN) that identifies an IAM role. At runtime, DAX will assume this role and use the role's permissions to access DynamoDB on your behalf.
    - name: ParameterGroupName
      value: "{{ ParameterGroupName }}"
      description: |
        The parameter group to be associated with the DAX cluster.
    - name: Tags
      description: |
        A set of tags to associate with the DAX cluster.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: SSESpecification
      description: |
        Represents the settings used to enable server-side encryption on the cluster.
      value:
        Enabled: {{ Enabled }}
    - name: ClusterEndpointEncryptionType
      value: "{{ ClusterEndpointEncryptionType }}"
      description: |
        The type of encryption the cluster's endpoint should support. Values are: NONE for no encryption TLS for Transport Layer Security
      valid_values: ['NONE', 'TLS']
    - name: NetworkType
      value: "{{ NetworkType }}"
      description: |
        Specifies the IP protocol(s) the cluster uses for network communications. Values are: ipv4 - The cluster is accessible only through IPv4 addresses ipv6 - The cluster is accessible only through IPv6 addresses dual_stack - The cluster is accessible through both IPv4 and IPv6 addresses. If no explicit NetworkType is provided, the network type is derived based on the subnet group's configuration.
      valid_values: ['ipv4', 'ipv6', 'dual_stack']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cluster"
    values={[
        { label: 'update_cluster', value: 'update_cluster' }
    ]}
>
<TabItem value="update_cluster">

Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.

```sql
UPDATE aws.dax.clusters
SET 
ClusterName = '{{ ClusterName }}',
Description = '{{ Description }}',
PreferredMaintenanceWindow = '{{ PreferredMaintenanceWindow }}',
NotificationTopicArn = '{{ NotificationTopicArn }}',
NotificationTopicStatus = '{{ NotificationTopicStatus }}',
ParameterGroupName = '{{ ParameterGroupName }}',
SecurityGroupIds = '{{ SecurityGroupIds }}'
WHERE 
region = '{{ region }}' --required
AND ClusterName = '{{ ClusterName }}' --required
RETURNING
Cluster;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_cluster"
    values={[
        { label: 'delete_cluster', value: 'delete_cluster' }
    ]}
>
<TabItem value="delete_cluster">

Deletes a previously provisioned DAX cluster. DeleteCluster deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.

```sql
DELETE FROM aws.dax.clusters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="decrease_replication_factor"
    values={[
        { label: 'decrease_replication_factor', value: 'decrease_replication_factor' },
        { label: 'increase_replication_factor', value: 'increase_replication_factor' },
        { label: 'reboot_node', value: 'reboot_node' }
    ]}
>
<TabItem value="decrease_replication_factor">

Removes one or more nodes from a DAX cluster. You cannot use DecreaseReplicationFactor to remove the last node in a DAX cluster. If you need to do this, use DeleteCluster instead.

```sql
EXEC aws.dax.clusters.decrease_replication_factor 
@region='{{ region }}' --required 
@@json=
'{
"ClusterName": "{{ ClusterName }}", 
"NewReplicationFactor": {{ NewReplicationFactor }}, 
"AvailabilityZones": "{{ AvailabilityZones }}", 
"NodeIdsToRemove": "{{ NodeIdsToRemove }}"
}'
;
```
</TabItem>
<TabItem value="increase_replication_factor">

Adds one or more nodes to a DAX cluster.

```sql
EXEC aws.dax.clusters.increase_replication_factor 
@region='{{ region }}' --required 
@@json=
'{
"ClusterName": "{{ ClusterName }}", 
"NewReplicationFactor": {{ NewReplicationFactor }}, 
"AvailabilityZones": "{{ AvailabilityZones }}"
}'
;
```
</TabItem>
<TabItem value="reboot_node">

Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING. RebootNode restarts the DAX engine process and does not remove the contents of the cache.

```sql
EXEC aws.dax.clusters.reboot_node 
@region='{{ region }}' --required 
@@json=
'{
"ClusterName": "{{ ClusterName }}", 
"NodeId": "{{ NodeId }}"
}'
;
```
</TabItem>
</Tabs>
