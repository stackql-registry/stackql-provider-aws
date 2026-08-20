--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.clusters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster"
    values={[
        { label: 'describe_cluster', value: 'describe_cluster' },
        { label: 'list_clusters', value: 'list_clusters' }
    ]}
>
<TabItem value="describe_cluster">

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
    <td><CopyableCode code="auto_scaling" /></td>
    <td><code>object</code></td>
    <td>The current autoscaling configuration and status for the autoscaler.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the SageMaker HyperPod cluster. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:cluster/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>The name of the SageMaker HyperPod cluster. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_role" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that HyperPod uses for cluster autoscaling operations. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_status" /></td>
    <td><code>string</code></td>
    <td>The status of the SageMaker HyperPod cluster. (Creating, Deleting, Failed, InService, RollingBack, SystemUpdating, Updating)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the SageMaker Cluster is created.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>The failure message of the SageMaker HyperPod cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_groups" /></td>
    <td><code>array</code></td>
    <td>The instance groups of the SageMaker HyperPod cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="node_provisioning_mode" /></td>
    <td><code>string</code></td>
    <td>The mode used for provisioning nodes in the cluster. (Continuous)</td>
</tr>
<tr>
    <td><CopyableCode code="node_recovery" /></td>
    <td><code>string</code></td>
    <td>The node recovery mode configured for the SageMaker HyperPod cluster. (Automatic, None)</td>
</tr>
<tr>
    <td><CopyableCode code="orchestrator" /></td>
    <td><code>object</code></td>
    <td>The type of orchestrator used for the SageMaker HyperPod cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="restricted_instance_groups" /></td>
    <td><code>array</code></td>
    <td>The specialized instance groups for training models like Amazon Nova to be created in the SageMaker HyperPod cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="restricted_instance_groups_config" /></td>
    <td><code>object</code></td>
    <td>The configuration for the restricted instance groups (RIG) in the SageMaker HyperPod cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="tiered_storage_config" /></td>
    <td><code>object</code></td>
    <td>The current configuration for managed tier checkpointing on the HyperPod cluster. For example, this shows whether the feature is enabled and the percentage of cluster memory allocated for checkpoint storage.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config" /></td>
    <td><code>object</code></td>
    <td>Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_clusters">

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
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the SageMaker HyperPod cluster. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:cluster/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>The name of the SageMaker HyperPod cluster. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_status" /></td>
    <td><code>string</code></td>
    <td>The status of the SageMaker HyperPod cluster. (Creating, Deleting, Failed, InService, RollingBack, SystemUpdating, Updating)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the SageMaker HyperPod cluster is created.</td>
</tr>
<tr>
    <td><CopyableCode code="image_version_status" /></td>
    <td><code>string</code></td>
    <td>The aggregate status of the image version across the cluster's instance groups. (UpToDate, UpdateAvailable, SecurityUpdateRequired, EndOfLife)</td>
</tr>
<tr>
    <td><CopyableCode code="training_plan_arns" /></td>
    <td><code>array</code></td>
    <td>A list of Amazon Resource Names (ARNs) of the training plans associated with this cluster. For more information about how to reserve GPU capacity for your SageMaker HyperPod clusters using Amazon SageMaker Training Plan, see CreateTrainingPlan .</td>
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
    <td><a href="#describe_cluster"><CopyableCode code="describe_cluster" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information of a SageMaker HyperPod cluster.</td>
</tr>
<tr>
    <td><a href="#list_clusters"><CopyableCode code="list_clusters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the list of SageMaker HyperPod clusters.</td>
</tr>
<tr>
    <td><a href="#create_cluster"><CopyableCode code="create_cluster" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a></td>
    <td></td>
    <td>Creates an Amazon SageMaker HyperPod cluster. SageMaker HyperPod is a capability of SageMaker for creating and managing persistent clusters for developing large machine learning models, such as large language models (LLMs) and diffusion models. To learn more, see Amazon SageMaker HyperPod in the Amazon SageMaker Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_cluster"><CopyableCode code="update_cluster" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a></td>
    <td></td>
    <td>Updates a SageMaker HyperPod cluster.</td>
</tr>
<tr>
    <td><a href="#delete_cluster"><CopyableCode code="delete_cluster" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a SageMaker HyperPod cluster.</td>
</tr>
<tr>
    <td><a href="#start_cluster_health_check"><CopyableCode code="start_cluster_health_check" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a>, <a href="#parameter-DeepHealthCheckConfigurations"><code>DeepHealthCheckConfigurations</code></a></td>
    <td></td>
    <td>Start deep health checks for a SageMaker HyperPod cluster. You can use DescribeClusterNode API to track progress of the deep health checks. The unhealthy nodes will be automatically rebooted or replaced. Please see Resilience-related Kubernetes labels by SageMaker HyperPod for details.</td>
</tr>
<tr>
    <td><a href="#update_cluster_software"><CopyableCode code="update_cluster_software" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterName"><code>ClusterName</code></a></td>
    <td></td>
    <td>Updates the platform software of a SageMaker HyperPod cluster for security patching. To learn how to use this API, see Update the SageMaker HyperPod platform software of a cluster. The UpgradeClusterSoftware API call may impact your SageMaker HyperPod cluster uptime and availability. Plan accordingly to mitigate potential disruptions to your workloads.</td>
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
    defaultValue="describe_cluster"
    values={[
        { label: 'describe_cluster', value: 'describe_cluster' },
        { label: 'list_clusters', value: 'list_clusters' }
    ]}
>
<TabItem value="describe_cluster">

Retrieves information of a SageMaker HyperPod cluster.

```sql
SELECT
auto_scaling,
cluster_arn,
cluster_name,
cluster_role,
cluster_status,
creation_time,
failure_message,
instance_groups,
node_provisioning_mode,
node_recovery,
orchestrator,
restricted_instance_groups,
restricted_instance_groups_config,
tiered_storage_config,
vpc_config
FROM aws.sagemaker.clusters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_clusters">

Retrieves the list of SageMaker HyperPod clusters.

```sql
SELECT
cluster_arn,
cluster_name,
cluster_status,
creation_time,
image_version_status,
training_plan_arns
FROM aws.sagemaker.clusters
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

Creates an Amazon SageMaker HyperPod cluster. SageMaker HyperPod is a capability of SageMaker for creating and managing persistent clusters for developing large machine learning models, such as large language models (LLMs) and diffusion models. To learn more, see Amazon SageMaker HyperPod in the Amazon SageMaker Developer Guide.

```sql
INSERT INTO aws.sagemaker.clusters (
ClusterName,
InstanceGroups,
RestrictedInstanceGroups,
RestrictedInstanceGroupsConfig,
VpcConfig,
Tags,
Orchestrator,
NodeRecovery,
TieredStorageConfig,
NodeProvisioningMode,
ClusterRole,
AutoScaling,
region
)
SELECT 
'{{ ClusterName }}' /* required */,
'{{ InstanceGroups }}',
'{{ RestrictedInstanceGroups }}',
'{{ RestrictedInstanceGroupsConfig }}',
'{{ VpcConfig }}',
'{{ Tags }}',
'{{ Orchestrator }}',
'{{ NodeRecovery }}',
'{{ TieredStorageConfig }}',
'{{ NodeProvisioningMode }}',
'{{ ClusterRole }}',
'{{ AutoScaling }}',
'{{ region }}'
RETURNING
cluster_arn
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
        The name for the new SageMaker HyperPod cluster.
    - name: InstanceGroups
      description: |
        The instance groups to be created in the SageMaker HyperPod cluster.
      value:
        - InstanceCount: {{ InstanceCount }}
          MinInstanceCount: {{ MinInstanceCount }}
          InstanceGroupName: "{{ InstanceGroupName }}"
          InstanceType: "{{ InstanceType }}"
          InstanceRequirements:
            InstanceTypes:
              - "{{ InstanceTypes }}"
          LifeCycleConfig:
            SourceS3Uri: "{{ SourceS3Uri }}"
            OnCreate: "{{ OnCreate }}"
            OnInitComplete: "{{ OnInitComplete }}"
          ExecutionRole: "{{ ExecutionRole }}"
          ThreadsPerCore: {{ ThreadsPerCore }}
          InstanceStorageConfigs: "{{ InstanceStorageConfigs }}"
          OnStartDeepHealthChecks: "{{ OnStartDeepHealthChecks }}"
          TrainingPlanArn: "{{ TrainingPlanArn }}"
          OverrideVpcConfig:
            SecurityGroupIds:
              - "{{ SecurityGroupIds }}"
            Subnets:
              - "{{ Subnets }}"
          ScheduledUpdateConfig:
            ScheduleExpression: "{{ ScheduleExpression }}"
            DeploymentConfig:
              RollingUpdatePolicy:
                MaximumBatchSize:
                  Type: "{{ Type }}"
                  Value: {{ Value }}
                RollbackMaximumBatchSize:
                  Type: "{{ Type }}"
                  Value: {{ Value }}
              WaitIntervalInSeconds: {{ WaitIntervalInSeconds }}
              AutoRollbackConfiguration:
                - AlarmName: "{{ AlarmName }}"
          ImageId: "{{ ImageId }}"
          AutoPatchConfig:
            PatchingStrategy: "{{ PatchingStrategy }}"
            PatchSchedule:
              NextPatchDate: "{{ NextPatchDate }}"
            DeploymentConfig:
              RollingUpdatePolicy:
                MaximumBatchSize:
                  Type: "{{ Type }}"
                  Value: {{ Value }}
                RollbackMaximumBatchSize:
                  Type: "{{ Type }}"
                  Value: {{ Value }}
              WaitIntervalInSeconds: {{ WaitIntervalInSeconds }}
              AutoRollbackConfiguration:
                - AlarmName: "{{ AlarmName }}"
          ImageReleaseVersion: "{{ ImageReleaseVersion }}"
          KubernetesConfig:
            Labels: "{{ Labels }}"
            Taints:
              - Key: "{{ Key }}"
                Value: "{{ Value }}"
                Effect: "{{ Effect }}"
          SlurmConfig:
            NodeType: "{{ NodeType }}"
            PartitionNames:
              - "{{ PartitionNames }}"
          CapacityRequirements:
            Spot: "{{ Spot }}"
            OnDemand: "{{ OnDemand }}"
          NetworkInterface:
            InterfaceType: "{{ InterfaceType }}"
    - name: RestrictedInstanceGroups
      description: |
        The specialized instance groups for training models like Amazon Nova to be created in the SageMaker HyperPod cluster.
      value:
        - InstanceCount: {{ InstanceCount }}
          InstanceGroupName: "{{ InstanceGroupName }}"
          InstanceType: "{{ InstanceType }}"
          ExecutionRole: "{{ ExecutionRole }}"
          ThreadsPerCore: {{ ThreadsPerCore }}
          InstanceStorageConfigs: "{{ InstanceStorageConfigs }}"
          OnStartDeepHealthChecks: "{{ OnStartDeepHealthChecks }}"
          TrainingPlanArn: "{{ TrainingPlanArn }}"
          OverrideVpcConfig:
            SecurityGroupIds:
              - "{{ SecurityGroupIds }}"
            Subnets:
              - "{{ Subnets }}"
          ScheduledUpdateConfig:
            ScheduleExpression: "{{ ScheduleExpression }}"
            DeploymentConfig:
              RollingUpdatePolicy:
                MaximumBatchSize:
                  Type: "{{ Type }}"
                  Value: {{ Value }}
                RollbackMaximumBatchSize:
                  Type: "{{ Type }}"
                  Value: {{ Value }}
              WaitIntervalInSeconds: {{ WaitIntervalInSeconds }}
              AutoRollbackConfiguration:
                - AlarmName: "{{ AlarmName }}"
          EnvironmentConfig:
            FSxLustreConfig:
              SizeInGiB: {{ SizeInGiB }}
              PerUnitStorageThroughput: {{ PerUnitStorageThroughput }}
    - name: RestrictedInstanceGroupsConfig
      description: |
        The configuration for the restricted instance groups (RIG) in the SageMaker HyperPod cluster.
      value:
        SharedEnvironmentConfig:
          FSxLustreDeletionPolicy: "{{ FSxLustreDeletionPolicy }}"
          FSxLustreConfig:
            SizeInGiB: {{ SizeInGiB }}
            PerUnitStorageThroughput: {{ PerUnitStorageThroughput }}
    - name: VpcConfig
      description: |
        Specifies an Amazon Virtual Private Cloud (VPC) that your SageMaker jobs, hosted models, and compute resources have access to. You can control access to and from your resources by configuring a VPC. For more information, see Give SageMaker Access to Resources in your Amazon VPC.
      value:
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        Subnets:
          - "{{ Subnets }}"
    - name: Tags
      description: |
        Custom tags for managing the SageMaker HyperPod cluster as an Amazon Web Services resource. You can add tags to your cluster in the same way you add them in other Amazon Web Services services that support tagging. To learn more about tagging Amazon Web Services resources in general, see Tagging Amazon Web Services Resources User Guide.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: Orchestrator
      description: |
        The type of orchestrator to use for the SageMaker HyperPod cluster. Currently, supported values are "Eks" and "Slurm", which is to use an Amazon Elastic Kubernetes Service or Slurm cluster as the orchestrator. If you specify the Orchestrator field, you must provide exactly one orchestrator configuration: either Eks or Slurm. Specifying both or providing an empty configuration returns a validation error.
      value:
        Eks:
          ClusterArn: "{{ ClusterArn }}"
        Slurm:
          SlurmConfigStrategy: "{{ SlurmConfigStrategy }}"
    - name: NodeRecovery
      value: "{{ NodeRecovery }}"
      description: |
        The node recovery mode for the SageMaker HyperPod cluster. When set to Automatic, SageMaker HyperPod will automatically reboot or replace faulty nodes when issues are detected. When set to None, cluster administrators will need to manually manage any faulty cluster instances.
      valid_values: ['Automatic', 'None']
    - name: TieredStorageConfig
      description: |
        The configuration for managed tier checkpointing on the HyperPod cluster. When enabled, this feature uses a multi-tier storage approach for storing model checkpoints, providing faster checkpoint operations and improved fault tolerance across cluster nodes.
      value:
        Mode: "{{ Mode }}"
        InstanceMemoryAllocationPercentage: {{ InstanceMemoryAllocationPercentage }}
    - name: NodeProvisioningMode
      value: "{{ NodeProvisioningMode }}"
      description: |
        The mode for provisioning nodes in the cluster. You can specify the following modes: Continuous: Scaling behavior that enables 1) concurrent operation execution within instance groups, 2) continuous retry mechanisms for failed operations, 3) enhanced customer visibility into cluster events through detailed event streams, 4) partial provisioning capabilities. Your clusters and instance groups remain InService while scaling. This mode is only supported for EKS orchestrated clusters.
      valid_values: ['Continuous']
    - name: ClusterRole
      value: "{{ ClusterRole }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role that HyperPod assumes to perform cluster autoscaling operations. This role must have permissions for sagemaker:BatchAddClusterNodes and sagemaker:BatchDeleteClusterNodes. This is only required when autoscaling is enabled and when HyperPod is performing autoscaling operations.
    - name: AutoScaling
      description: |
        The autoscaling configuration for the cluster. Enables automatic scaling of cluster nodes based on workload demand using a Karpenter-based system.
      value:
        Mode: "{{ Mode }}"
        AutoScalerType: "{{ AutoScalerType }}"
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

Updates a SageMaker HyperPod cluster.

```sql
UPDATE aws.sagemaker.clusters
SET 
ClusterName = '{{ ClusterName }}',
InstanceGroups = '{{ InstanceGroups }}',
RestrictedInstanceGroups = '{{ RestrictedInstanceGroups }}',
RestrictedInstanceGroupsConfig = '{{ RestrictedInstanceGroupsConfig }}',
TieredStorageConfig = '{{ TieredStorageConfig }}',
NodeRecovery = '{{ NodeRecovery }}',
InstanceGroupsToDelete = '{{ InstanceGroupsToDelete }}',
NodeProvisioningMode = '{{ NodeProvisioningMode }}',
ClusterRole = '{{ ClusterRole }}',
AutoScaling = '{{ AutoScaling }}',
Orchestrator = '{{ Orchestrator }}'
WHERE 
region = '{{ region }}' --required
AND ClusterName = '{{ ClusterName }}' --required
RETURNING
cluster_arn;
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

Delete a SageMaker HyperPod cluster.

```sql
DELETE FROM aws.sagemaker.clusters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_cluster_health_check"
    values={[
        { label: 'start_cluster_health_check', value: 'start_cluster_health_check' },
        { label: 'update_cluster_software', value: 'update_cluster_software' }
    ]}
>
<TabItem value="start_cluster_health_check">

Start deep health checks for a SageMaker HyperPod cluster. You can use DescribeClusterNode API to track progress of the deep health checks. The unhealthy nodes will be automatically rebooted or replaced. Please see Resilience-related Kubernetes labels by SageMaker HyperPod for details.

```sql
EXEC aws.sagemaker.clusters.start_cluster_health_check 
@region='{{ region }}' --required 
@@json=
'{
"ClusterName": "{{ ClusterName }}", 
"DeepHealthCheckConfigurations": "{{ DeepHealthCheckConfigurations }}"
}'
;
```
</TabItem>
<TabItem value="update_cluster_software">

Updates the platform software of a SageMaker HyperPod cluster for security patching. To learn how to use this API, see Update the SageMaker HyperPod platform software of a cluster. The UpgradeClusterSoftware API call may impact your SageMaker HyperPod cluster uptime and availability. Plan accordingly to mitigate potential disruptions to your workloads.

```sql
EXEC aws.sagemaker.clusters.update_cluster_software 
@region='{{ region }}' --required 
@@json=
'{
"ClusterName": "{{ ClusterName }}", 
"InstanceGroups": "{{ InstanceGroups }}", 
"DeploymentConfig": "{{ DeploymentConfig }}", 
"ImageId": "{{ ImageId }}"
}'
;
```
</TabItem>
</Tabs>
