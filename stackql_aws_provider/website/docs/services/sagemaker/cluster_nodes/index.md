--- 
title: cluster_nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_nodes
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>cluster_nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.cluster_nodes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster_node"
    values={[
        { label: 'describe_cluster_node', value: 'describe_cluster_node' }
    ]}
>
<TabItem value="describe_cluster_node">

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
    <td><CopyableCode code="capacity_type" /></td>
    <td><code>string</code></td>
    <td>The capacity type of the node. Valid values are OnDemand and Spot. When set to OnDemand, the node is launched as an On-Demand instance. When set to Spot, the node is launched as a Spot instance. (Spot, OnDemand)</td>
</tr>
<tr>
    <td><CopyableCode code="current_image_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Machine Image (AMI) currently in use by the node. (pattern: &lt;code&gt;ami-&#91;0-9a-fA-F&#93;&#123;8,17&#125;|default&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="current_image_release_version" /></td>
    <td><code>string</code></td>
    <td>The version of the HyperPod-managed AMI currently running on the node. (pattern: &lt;code&gt;&#91;0-9&#93;+\.&#91;0-9&#93;+\.&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="desired_image_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Machine Image (AMI) desired for the node. (pattern: &lt;code&gt;ami-&#91;0-9a-fA-F&#93;&#123;8,17&#125;|default&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="desired_image_release_version" /></td>
    <td><code>string</code></td>
    <td>The desired version of the HyperPod-managed AMI for the node. This may differ from the current version when an update is pending. (pattern: &lt;code&gt;&#91;0-9&#93;+\.&#91;0-9&#93;+\.&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="image_version_status" /></td>
    <td><code>string</code></td>
    <td>The status of the image version for the cluster node. (UpToDate, UpdateAvailable, SecurityUpdateRequired, EndOfLife)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_group_name" /></td>
    <td><code>string</code></td>
    <td>The instance group name in which the instance is. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_status" /></td>
    <td><code>object</code></td>
    <td>The status of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_storage_configs" /></td>
    <td><code>array</code></td>
    <td>The configurations of additional storage specified to the instance group where the instance (node) is launched.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The type of the instance. (ml.p4d.24xlarge, ml.p4de.24xlarge, ml.p5.48xlarge, ml.p5.4xlarge, ml.p6e-gb200.36xlarge, ml.trn1.32xlarge, ml.trn1n.32xlarge, ml.g5.xlarge, ml.g5.2xlarge, ml.g5.4xlarge, ml.g5.8xlarge, ml.g5.12xlarge, ml.g5.16xlarge, ml.g5.24xlarge, ml.g5.48xlarge, ml.c5.large, ml.c5.xlarge, ml.c5.2xlarge, ml.c5.4xlarge, ml.c5.9xlarge, ml.c5.12xlarge, ml.c5.18xlarge, ml.c5.24xlarge, ml.c5n.large, ml.c5n.2xlarge, ml.c5n.4xlarge, ml.c5n.9xlarge, ml.c5n.18xlarge, ml.m5.large, ml.m5.xlarge, ml.m5.2xlarge, ml.m5.4xlarge, ml.m5.8xlarge, ml.m5.12xlarge, ml.m5.16xlarge, ml.m5.24xlarge, ml.t3.medium, ml.t3.large, ml.t3.xlarge, ml.t3.2xlarge, ml.g6.xlarge, ml.g6.2xlarge, ml.g6.4xlarge, ml.g6.8xlarge, ml.g6.16xlarge, ml.g6.12xlarge, ml.g6.24xlarge, ml.g6.48xlarge, ml.gr6.4xlarge, ml.gr6.8xlarge, ml.g6e.xlarge, ml.g6e.2xlarge, ml.g6e.4xlarge, ml.g6e.8xlarge, ml.g6e.16xlarge, ml.g6e.12xlarge, ml.g6e.24xlarge, ml.g6e.48xlarge, ml.p5e.48xlarge, ml.p5en.48xlarge, ml.p6-b200.48xlarge, ml.trn2.3xlarge, ml.trn2.48xlarge, ml.c6i.large, ml.c6i.xlarge, ml.c6i.2xlarge, ml.c6i.4xlarge, ml.c6i.8xlarge, ml.c6i.12xlarge, ml.c6i.16xlarge, ml.c6i.24xlarge, ml.c6i.32xlarge, ml.m6i.large, ml.m6i.xlarge, ml.m6i.2xlarge, ml.m6i.4xlarge, ml.m6i.8xlarge, ml.m6i.12xlarge, ml.m6i.16xlarge, ml.m6i.24xlarge, ml.m6i.32xlarge, ml.r6i.large, ml.r6i.xlarge, ml.r6i.2xlarge, ml.r6i.4xlarge, ml.r6i.8xlarge, ml.r6i.12xlarge, ml.r6i.16xlarge, ml.r6i.24xlarge, ml.r6i.32xlarge, ml.i3en.large, ml.i3en.xlarge, ml.i3en.2xlarge, ml.i3en.3xlarge, ml.i3en.6xlarge, ml.i3en.12xlarge, ml.i3en.24xlarge, ml.m7i.large, ml.m7i.xlarge, ml.m7i.2xlarge, ml.m7i.4xlarge, ml.m7i.8xlarge, ml.m7i.12xlarge, ml.m7i.16xlarge, ml.m7i.24xlarge, ml.m7i.48xlarge, ml.r7i.large, ml.r7i.xlarge, ml.r7i.2xlarge, ml.r7i.4xlarge, ml.r7i.8xlarge, ml.r7i.12xlarge, ml.r7i.16xlarge, ml.r7i.24xlarge, ml.r7i.48xlarge, ml.r5d.16xlarge, ml.g7e.2xlarge, ml.g7e.4xlarge, ml.g7e.8xlarge, ml.g7e.12xlarge, ml.g7e.24xlarge, ml.g7e.48xlarge, ml.p6-b300.48xlarge, ml.g4dn.xlarge, ml.g4dn.2xlarge, ml.g4dn.4xlarge, ml.g4dn.8xlarge, ml.g4dn.12xlarge, ml.g4dn.16xlarge, ml.c6g.medium, ml.c6g.large, ml.c6g.xlarge, ml.c6g.2xlarge, ml.c6g.4xlarge, ml.c6g.8xlarge, ml.c6g.12xlarge, ml.c6g.16xlarge, ml.c7g.medium, ml.c7g.large, ml.c7g.xlarge, ml.c7g.2xlarge, ml.c7g.4xlarge, ml.c7g.8xlarge, ml.c7g.12xlarge, ml.c7g.16xlarge, ml.c8g.medium, ml.c8g.large, ml.c8g.xlarge, ml.c8g.2xlarge, ml.c8g.4xlarge, ml.c8g.8xlarge, ml.c8g.12xlarge, ml.c8g.16xlarge, ml.c8g.24xlarge, ml.c8g.48xlarge, ml.c6a.large, ml.c6a.xlarge, ml.c6a.2xlarge, ml.c6a.4xlarge, ml.c6a.8xlarge, ml.c6a.12xlarge, ml.c6a.16xlarge, ml.c6a.24xlarge, ml.c6a.32xlarge, ml.c6a.48xlarge, ml.m6a.large, ml.m6a.xlarge, ml.m6a.2xlarge, ml.m6a.4xlarge, ml.m6a.8xlarge, ml.m6a.12xlarge, ml.m6a.16xlarge, ml.m6a.24xlarge, ml.m6a.32xlarge, ml.m6a.48xlarge, ml.m6g.medium, ml.m6g.large, ml.m6g.xlarge, ml.m6g.2xlarge, ml.m6g.4xlarge, ml.m6g.8xlarge, ml.m6g.12xlarge, ml.m6g.16xlarge, ml.m7g.medium, ml.m7g.large, ml.m7g.xlarge, ml.m7g.2xlarge, ml.m7g.4xlarge, ml.m7g.8xlarge, ml.m7g.12xlarge, ml.m7g.16xlarge, ml.m8g.medium, ml.m8g.large, ml.m8g.xlarge, ml.m8g.2xlarge, ml.m8g.4xlarge, ml.m8g.8xlarge, ml.m8g.12xlarge, ml.m8g.16xlarge, ml.m8g.24xlarge, ml.m8g.48xlarge, ml.g7.2xlarge, ml.g7.4xlarge, ml.g7.8xlarge, ml.g7.12xlarge, ml.g7.24xlarge, ml.g7.48xlarge)</td>
</tr>
<tr>
    <td><CopyableCode code="kubernetes_config" /></td>
    <td><code>object</code></td>
    <td>The Kubernetes configuration applied to this node, showing both the current and desired state of labels and taints. The cluster works to reconcile the actual state with the declared state.</td>
</tr>
<tr>
    <td><CopyableCode code="last_software_update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the cluster was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the instance is launched.</td>
</tr>
<tr>
    <td><CopyableCode code="life_cycle_config" /></td>
    <td><code>object</code></td>
    <td>The LifeCycle configuration applied to the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="network_interface" /></td>
    <td><code>object</code></td>
    <td>The network interface configuration for the cluster node.</td>
</tr>
<tr>
    <td><CopyableCode code="node_logical_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the node that persists throughout its lifecycle, from provisioning request to termination. This identifier can be used to track the node even before it has an assigned InstanceId. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-&#93;*&#91;a-zA-Z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="override_vpc_config" /></td>
    <td><code>object</code></td>
    <td>Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC.</td>
</tr>
<tr>
    <td><CopyableCode code="placement" /></td>
    <td><code>object</code></td>
    <td>The placement details of the SageMaker HyperPod cluster node.</td>
</tr>
<tr>
    <td><CopyableCode code="private_dns_hostname" /></td>
    <td><code>string</code></td>
    <td>The private DNS hostname of the SageMaker HyperPod cluster node. (pattern: &lt;code&gt;ip-((25&#91;0-5&#93;|(2&#91;0-4&#93;|1\d|&#91;1-9&#93;|)\d)-?\b)&#123;4&#125;\..*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="private_primary_ip" /></td>
    <td><code>string</code></td>
    <td>The private primary IP address of the SageMaker HyperPod cluster node. (pattern: &lt;code&gt;((25&#91;0-5&#93;|(2&#91;0-4&#93;|1\d|&#91;1-9&#93;|)\d)\.?\b)&#123;4&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="private_primary_ipv_6" /></td>
    <td><code>string</code></td>
    <td>The private primary IPv6 address of the SageMaker HyperPod cluster node when configured with an Amazon VPC that supports IPv6 and includes subnets with IPv6 addressing enabled in either the cluster Amazon VPC configuration or the instance group Amazon VPC configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="threads_per_core" /></td>
    <td><code>integer</code></td>
    <td>The number of threads per CPU core you specified under CreateCluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ultra_server_info" /></td>
    <td><code>object</code></td>
    <td>Contains information about the UltraServer.</td>
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
    <td><a href="#describe_cluster_node"><CopyableCode code="describe_cluster_node" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information of a node (also called a instance interchangeably) of a SageMaker HyperPod cluster.</td>
</tr>
<tr>
    <td><a href="#attach_cluster_node_volume"><CopyableCode code="attach_cluster_node_volume" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterArn"><code>ClusterArn</code></a>, <a href="#parameter-NodeId"><code>NodeId</code></a>, <a href="#parameter-VolumeId"><code>VolumeId</code></a></td>
    <td></td>
    <td>Attaches your Amazon Elastic Block Store (Amazon EBS) volume to a node in your EKS orchestrated HyperPod cluster. This API works with the Amazon Elastic Block Store (Amazon EBS) Container Storage Interface (CSI) driver to manage the lifecycle of persistent storage in your HyperPod EKS clusters.</td>
</tr>
<tr>
    <td><a href="#batch_add_cluster_nodes"><CopyableCode code="batch_add_cluster_nodes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a>, <a href="#parameter-NodesToAdd"><code>NodesToAdd</code></a></td>
    <td></td>
    <td>Adds nodes to a HyperPod cluster by incrementing the target count for one or more instance groups. This operation returns a unique NodeLogicalId for each node being added, which can be used to track the provisioning status of the node. This API provides a safer alternative to UpdateCluster for scaling operations by avoiding unintended configuration changes. This API is only supported for clusters using Continuous as the NodeProvisioningMode.</td>
</tr>
<tr>
    <td><a href="#batch_delete_cluster_nodes"><CopyableCode code="batch_delete_cluster_nodes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a></td>
    <td></td>
    <td>Deletes specific nodes within a SageMaker HyperPod cluster. BatchDeleteClusterNodes accepts a cluster name and a list of node IDs. To safeguard your work, back up your data to Amazon S3 or an FSx for Lustre file system before invoking the API on a worker node group. This will help prevent any potential data loss from the instance root volume. For more information about backup, see Use the backup script provided by SageMaker HyperPod. If you want to invoke this API on an existing cluster, you'll first need to patch the cluster by running the UpdateClusterSoftware API. For more information about patching a cluster, see Update the SageMaker HyperPod platform software of a cluster.</td>
</tr>
<tr>
    <td><a href="#batch_reboot_cluster_nodes"><CopyableCode code="batch_reboot_cluster_nodes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a></td>
    <td></td>
    <td>Reboots specific nodes within a SageMaker HyperPod cluster using a soft recovery mechanism. BatchRebootClusterNodes performs a graceful reboot of the specified nodes by calling the Amazon Elastic Compute Cloud RebootInstances API, which attempts to cleanly shut down the operating system before restarting the instance. This operation is useful for recovering from transient issues or applying certain configuration changes that require a restart. Rebooting a node may cause temporary service interruption for workloads running on that node. Ensure your workloads can handle node restarts or use appropriate scheduling to minimize impact. You can reboot up to 25 nodes in a single request. For SageMaker HyperPod clusters using the Slurm workload manager, ensure rebooting nodes will not disrupt critical cluster operations.</td>
</tr>
<tr>
    <td><a href="#batch_replace_cluster_nodes"><CopyableCode code="batch_replace_cluster_nodes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a></td>
    <td></td>
    <td>Replaces specific nodes within a SageMaker HyperPod cluster with new hardware. BatchReplaceClusterNodes terminates the specified instances and provisions new replacement instances with the same configuration but fresh hardware. The Amazon Machine Image (AMI) and instance configuration remain the same. This operation is useful for recovering from hardware failures or persistent issues that cannot be resolved through a reboot. Data Loss Warning: Replacing nodes destroys all instance volumes, including both root and secondary volumes. All data stored on these volumes will be permanently lost and cannot be recovered. To safeguard your work, back up your data to Amazon S3 or an FSx for Lustre file system before invoking the API on a worker node group. This will help prevent any potential data loss from the instance root volume. For more information about backup, see Use the backup script provided by SageMaker HyperPod. If you want to invoke this API on an existing cluster, you'll first need to patch the cluster by running the UpdateClusterSoftware API. For more information about patching a cluster, see Update the SageMaker HyperPod platform software of a cluster. You can replace up to 25 nodes in a single request.</td>
</tr>
<tr>
    <td><a href="#detach_cluster_node_volume"><CopyableCode code="detach_cluster_node_volume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterArn"><code>ClusterArn</code></a>, <a href="#parameter-NodeId"><code>NodeId</code></a>, <a href="#parameter-VolumeId"><code>VolumeId</code></a></td>
    <td></td>
    <td>Detaches your Amazon Elastic Block Store (Amazon EBS) volume from a node in your EKS orchestrated SageMaker HyperPod cluster. This API works with the Amazon Elastic Block Store (Amazon EBS) Container Storage Interface (CSI) driver to manage the lifecycle of persistent storage in your HyperPod EKS clusters.</td>
</tr>
<tr>
    <td><a href="#list_cluster_nodes"><CopyableCode code="list_cluster_nodes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a></td>
    <td></td>
    <td>Retrieves the list of instances (also called nodes interchangeably) in a SageMaker HyperPod cluster.</td>
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
    defaultValue="describe_cluster_node"
    values={[
        { label: 'describe_cluster_node', value: 'describe_cluster_node' }
    ]}
>
<TabItem value="describe_cluster_node">

Retrieves information of a node (also called a instance interchangeably) of a SageMaker HyperPod cluster.

```sql
SELECT
capacity_type,
current_image_id,
current_image_release_version,
desired_image_id,
desired_image_release_version,
image_version_status,
instance_group_name,
instance_id,
instance_status,
instance_storage_configs,
instance_type,
kubernetes_config,
last_software_update_time,
launch_time,
life_cycle_config,
network_interface,
node_logical_id,
override_vpc_config,
placement,
private_dns_hostname,
private_primary_ip,
private_primary_ipv_6,
threads_per_core,
ultra_server_info
FROM aws.sagemaker.cluster_nodes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_cluster_node_volume"
    values={[
        { label: 'attach_cluster_node_volume', value: 'attach_cluster_node_volume' }
    ]}
>
<TabItem value="attach_cluster_node_volume">

Attaches your Amazon Elastic Block Store (Amazon EBS) volume to a node in your EKS orchestrated HyperPod cluster. This API works with the Amazon Elastic Block Store (Amazon EBS) Container Storage Interface (CSI) driver to manage the lifecycle of persistent storage in your HyperPod EKS clusters.

```sql
UPDATE aws.sagemaker.cluster_nodes
SET 
ClusterArn = '{{ ClusterArn }}',
NodeId = '{{ NodeId }}',
VolumeId = '{{ VolumeId }}'
WHERE 
region = '{{ region }}' --required
AND ClusterArn = '{{ ClusterArn }}' --required
AND NodeId = '{{ NodeId }}' --required
AND VolumeId = '{{ VolumeId }}' --required
RETURNING
attach_time,
cluster_arn,
device_name,
node_id,
status,
volume_id;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_add_cluster_nodes"
    values={[
        { label: 'batch_add_cluster_nodes', value: 'batch_add_cluster_nodes' },
        { label: 'batch_delete_cluster_nodes', value: 'batch_delete_cluster_nodes' },
        { label: 'batch_reboot_cluster_nodes', value: 'batch_reboot_cluster_nodes' },
        { label: 'batch_replace_cluster_nodes', value: 'batch_replace_cluster_nodes' },
        { label: 'detach_cluster_node_volume', value: 'detach_cluster_node_volume' },
        { label: 'list_cluster_nodes', value: 'list_cluster_nodes' }
    ]}
>
<TabItem value="batch_add_cluster_nodes">

Adds nodes to a HyperPod cluster by incrementing the target count for one or more instance groups. This operation returns a unique NodeLogicalId for each node being added, which can be used to track the provisioning status of the node. This API provides a safer alternative to UpdateCluster for scaling operations by avoiding unintended configuration changes. This API is only supported for clusters using Continuous as the NodeProvisioningMode.

```sql
EXEC aws.sagemaker.cluster_nodes.batch_add_cluster_nodes 
@region='{{ region }}' --required 
@@json=
'{
"ClusterName": "{{ ClusterName }}", 
"ClientToken": "{{ ClientToken }}", 
"NodesToAdd": "{{ NodesToAdd }}"
}'
;
```
</TabItem>
<TabItem value="batch_delete_cluster_nodes">

Deletes specific nodes within a SageMaker HyperPod cluster. BatchDeleteClusterNodes accepts a cluster name and a list of node IDs. To safeguard your work, back up your data to Amazon S3 or an FSx for Lustre file system before invoking the API on a worker node group. This will help prevent any potential data loss from the instance root volume. For more information about backup, see Use the backup script provided by SageMaker HyperPod. If you want to invoke this API on an existing cluster, you'll first need to patch the cluster by running the UpdateClusterSoftware API. For more information about patching a cluster, see Update the SageMaker HyperPod platform software of a cluster.

```sql
EXEC aws.sagemaker.cluster_nodes.batch_delete_cluster_nodes 
@region='{{ region }}' --required 
@@json=
'{
"ClusterName": "{{ ClusterName }}", 
"NodeIds": "{{ NodeIds }}", 
"NodeLogicalIds": "{{ NodeLogicalIds }}"
}'
;
```
</TabItem>
<TabItem value="batch_reboot_cluster_nodes">

Reboots specific nodes within a SageMaker HyperPod cluster using a soft recovery mechanism. BatchRebootClusterNodes performs a graceful reboot of the specified nodes by calling the Amazon Elastic Compute Cloud RebootInstances API, which attempts to cleanly shut down the operating system before restarting the instance. This operation is useful for recovering from transient issues or applying certain configuration changes that require a restart. Rebooting a node may cause temporary service interruption for workloads running on that node. Ensure your workloads can handle node restarts or use appropriate scheduling to minimize impact. You can reboot up to 25 nodes in a single request. For SageMaker HyperPod clusters using the Slurm workload manager, ensure rebooting nodes will not disrupt critical cluster operations.

```sql
EXEC aws.sagemaker.cluster_nodes.batch_reboot_cluster_nodes 
@region='{{ region }}' --required 
@@json=
'{
"ClusterName": "{{ ClusterName }}", 
"NodeIds": "{{ NodeIds }}", 
"NodeLogicalIds": "{{ NodeLogicalIds }}"
}'
;
```
</TabItem>
<TabItem value="batch_replace_cluster_nodes">

Replaces specific nodes within a SageMaker HyperPod cluster with new hardware. BatchReplaceClusterNodes terminates the specified instances and provisions new replacement instances with the same configuration but fresh hardware. The Amazon Machine Image (AMI) and instance configuration remain the same. This operation is useful for recovering from hardware failures or persistent issues that cannot be resolved through a reboot. Data Loss Warning: Replacing nodes destroys all instance volumes, including both root and secondary volumes. All data stored on these volumes will be permanently lost and cannot be recovered. To safeguard your work, back up your data to Amazon S3 or an FSx for Lustre file system before invoking the API on a worker node group. This will help prevent any potential data loss from the instance root volume. For more information about backup, see Use the backup script provided by SageMaker HyperPod. If you want to invoke this API on an existing cluster, you'll first need to patch the cluster by running the UpdateClusterSoftware API. For more information about patching a cluster, see Update the SageMaker HyperPod platform software of a cluster. You can replace up to 25 nodes in a single request.

```sql
EXEC aws.sagemaker.cluster_nodes.batch_replace_cluster_nodes 
@region='{{ region }}' --required 
@@json=
'{
"ClusterName": "{{ ClusterName }}", 
"NodeIds": "{{ NodeIds }}", 
"NodeLogicalIds": "{{ NodeLogicalIds }}"
}'
;
```
</TabItem>
<TabItem value="detach_cluster_node_volume">

Detaches your Amazon Elastic Block Store (Amazon EBS) volume from a node in your EKS orchestrated SageMaker HyperPod cluster. This API works with the Amazon Elastic Block Store (Amazon EBS) Container Storage Interface (CSI) driver to manage the lifecycle of persistent storage in your HyperPod EKS clusters.

```sql
EXEC aws.sagemaker.cluster_nodes.detach_cluster_node_volume 
@region='{{ region }}' --required 
@@json=
'{
"ClusterArn": "{{ ClusterArn }}", 
"NodeId": "{{ NodeId }}", 
"VolumeId": "{{ VolumeId }}"
}'
;
```
</TabItem>
<TabItem value="list_cluster_nodes">

Retrieves the list of instances (also called nodes interchangeably) in a SageMaker HyperPod cluster.

```sql
EXEC aws.sagemaker.cluster_nodes.list_cluster_nodes 
@region='{{ region }}' --required 
@@json=
'{
"ClusterName": "{{ ClusterName }}", 
"CreationTimeAfter": "{{ CreationTimeAfter }}", 
"CreationTimeBefore": "{{ CreationTimeBefore }}", 
"InstanceGroupNameContains": "{{ InstanceGroupNameContains }}", 
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}", 
"SortBy": "{{ SortBy }}", 
"SortOrder": "{{ SortOrder }}", 
"IncludeNodeLogicalIds": {{ IncludeNodeLogicalIds }}
}'
;
```
</TabItem>
</Tabs>
