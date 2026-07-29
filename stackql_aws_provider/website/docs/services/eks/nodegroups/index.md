--- 
title: nodegroups
hide_title: false
hide_table_of_contents: false
keywords:
  - nodegroups
  - eks
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

Creates, updates, deletes, gets or lists a <code>nodegroups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="nodegroups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.nodegroups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_nodegroup"
    values={[
        { label: 'describe_nodegroup', value: 'describe_nodegroup' },
        { label: 'list_nodegroups', value: 'list_nodegroups' }
    ]}
>
<TabItem value="describe_nodegroup">

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
    <td><CopyableCode code="ami_type" /></td>
    <td><code>string</code></td>
    <td>If the node group was deployed using a launch template with a custom AMI, then this is CUSTOM. For node groups that weren't deployed using a launch template, this is the AMI type that was specified in the node group configuration. (AL2_x86_64, AL2_x86_64_GPU, AL2_ARM_64, CUSTOM, BOTTLEROCKET_ARM_64, BOTTLEROCKET_x86_64, BOTTLEROCKET_ARM_64_FIPS, BOTTLEROCKET_x86_64_FIPS, BOTTLEROCKET_ARM_64_NVIDIA, BOTTLEROCKET_x86_64_NVIDIA, BOTTLEROCKET_ARM_64_NVIDIA_FIPS, BOTTLEROCKET_x86_64_NVIDIA_FIPS, WINDOWS_CORE_2019_x86_64, WINDOWS_FULL_2019_x86_64, WINDOWS_CORE_2022_x86_64, WINDOWS_FULL_2022_x86_64, WINDOWS_CORE_2025_x86_64, WINDOWS_FULL_2025_x86_64, AL2023_x86_64_STANDARD, AL2023_ARM_64_STANDARD, AL2023_x86_64_NEURON, AL2023_x86_64_NVIDIA, AL2023_ARM_64_NVIDIA)</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_type" /></td>
    <td><code>string</code></td>
    <td>The capacity type of your managed node group. (ON_DEMAND, SPOT, CAPACITY_BLOCK)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>The name of your cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp at object creation.</td>
</tr>
<tr>
    <td><CopyableCode code="disk_size" /></td>
    <td><code>integer</code></td>
    <td>If the node group wasn't deployed with a launch template, then this is the disk size in the node group configuration. If the node group was deployed with a launch template, then this is null.</td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>object</code></td>
    <td>The health status of the node group. If there are issues with your node group's health, they are listed here.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_types" /></td>
    <td><code>array</code></td>
    <td>If the node group wasn't deployed with a launch template, then this is the instance type that is associated with the node group. If the node group was deployed with a launch template, then this is null.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>object</code></td>
    <td>The Kubernetes labels applied to the nodes in the node group. Only labels that are applied with the Amazon EKS API are shown here. There may be other Kubernetes labels applied to the nodes in this group.</td>
</tr>
<tr>
    <td><CopyableCode code="launch_template" /></td>
    <td><code>object</code></td>
    <td>An object representing a node group launch template specification. The launch template can't include SubnetId , IamInstanceProfile , RequestSpotInstances , HibernationOptions , or TerminateInstances , or the node group deployment or update will fail. For more information about launch templates, see CreateLaunchTemplate in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide. You must specify either the launch template ID or the launch template name in the request, but not both.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp for the last modification to the object.</td>
</tr>
<tr>
    <td><CopyableCode code="node_repair_config" /></td>
    <td><code>object</code></td>
    <td>The node auto repair configuration for the node group.</td>
</tr>
<tr>
    <td><CopyableCode code="node_role" /></td>
    <td><code>string</code></td>
    <td>The IAM role associated with your node group. The Amazon EKS node kubelet daemon makes calls to Amazon Web Services APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies.</td>
</tr>
<tr>
    <td><CopyableCode code="nodegroup_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) associated with the managed node group.</td>
</tr>
<tr>
    <td><CopyableCode code="nodegroup_name" /></td>
    <td><code>string</code></td>
    <td>The name associated with an Amazon EKS managed node group.</td>
</tr>
<tr>
    <td><CopyableCode code="release_version" /></td>
    <td><code>string</code></td>
    <td>If the node group was deployed using a launch template with a custom AMI, then this is the AMI ID that was specified in the launch template. For node groups that weren't deployed using a launch template, this is the version of the Amazon EKS optimized AMI that the node group was deployed with.</td>
</tr>
<tr>
    <td><CopyableCode code="remote_access" /></td>
    <td><code>object</code></td>
    <td>An object representing the remote access configuration for the managed node group.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>object</code></td>
    <td>The resources associated with the node group, such as Auto Scaling groups and security groups for remote access.</td>
</tr>
<tr>
    <td><CopyableCode code="scaling_config" /></td>
    <td><code>object</code></td>
    <td>An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the managed node group. (CREATING, ACTIVE, UPDATING, DELETING, CREATE_FAILED, DELETE_FAILED, DEGRADED)</td>
</tr>
<tr>
    <td><CopyableCode code="subnets" /></td>
    <td><code>array</code></td>
    <td>The subnets that were specified for the Auto Scaling group that is associated with your node group.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.</td>
</tr>
<tr>
    <td><CopyableCode code="taints" /></td>
    <td><code>array</code></td>
    <td>The Kubernetes taints to be applied to the nodes in the node group when they are created. Effect is one of No_Schedule, Prefer_No_Schedule, or No_Execute. Kubernetes taints can be used together with tolerations to control how workloads are scheduled to your nodes. For more information, see Node taints on managed node groups.</td>
</tr>
<tr>
    <td><CopyableCode code="update_config" /></td>
    <td><code>object</code></td>
    <td>The node group update configuration. An Amazon EKS managed node group updates by replacing nodes with new nodes of newer AMI versions in parallel. You choose the maximum unavailable and the update strategy.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The Kubernetes version of the managed node group.</td>
</tr>
<tr>
    <td><CopyableCode code="warm_pool_config" /></td>
    <td><code>object</code></td>
    <td>The configuration for an Amazon EC2 Auto Scaling warm pool attached to an Amazon EKS managed node group. Warm pools maintain pre-initialized EC2 instances alongside your Auto Scaling group that have already completed the bootup initialization process and can be kept in a Stopped, Running, or Hibernated state.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_nodegroups">

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
    <td><CopyableCode code="nodegroup" /></td>
    <td><code>string</code></td>
    <td>A list of all of the node groups associated with the specified cluster.</td>
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
    <td><a href="#describe_nodegroup"><CopyableCode code="describe_nodegroup" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-nodegroup_name"><code>nodegroup_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a managed node group.</td>
</tr>
<tr>
    <td><a href="#list_nodegroups"><CopyableCode code="list_nodegroups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the managed node groups associated with the specified cluster in your Amazon Web Services account in the specified Amazon Web Services Region. Self-managed node groups aren't listed.</td>
</tr>
<tr>
    <td><a href="#create_nodegroup"><CopyableCode code="create_nodegroup" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-nodegroupName"><code>nodegroupName</code></a>, <a href="#parameter-subnets"><code>subnets</code></a>, <a href="#parameter-nodeRole"><code>nodeRole</code></a></td>
    <td></td>
    <td>Creates a managed node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template. For later updates, you will only be able to update a node group using a launch template only if it was originally deployed with a launch template. Additionally, the launch template ID or name must match what was used when the node group was created. You can update the launch template version with necessary changes. For more information about using launch templates, see Customizing managed nodes with launch templates. An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by Amazon Web Services for an Amazon EKS cluster. For more information, see Managed node groups in the Amazon EKS User Guide. Windows AMI types are only supported for commercial Amazon Web Services Regions that support Windows on Amazon EKS.</td>
</tr>
<tr>
    <td><a href="#update_nodegroup_config"><CopyableCode code="update_nodegroup_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-nodegroup_name"><code>nodegroup_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the DescribeUpdate API operation. You can update the Kubernetes labels and taints for a node group and the scaling and version update configuration.</td>
</tr>
<tr>
    <td><a href="#delete_nodegroup"><CopyableCode code="delete_nodegroup" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-nodegroup_name"><code>nodegroup_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a managed node group.</td>
</tr>
<tr>
    <td><a href="#update_nodegroup_version"><CopyableCode code="update_nodegroup_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-nodegroup_name"><code>nodegroup_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the Kubernetes version or AMI version of an Amazon EKS managed node group. You can update a node group using a launch template only if the node group was originally deployed with a launch template. Additionally, the launch template ID or name must match what was used when the node group was created. You can update the launch template version with necessary changes. If you need to update a custom AMI in a node group that was deployed with a launch template, then update your custom AMI, specify the new ID in a new version of the launch template, and then update the node group to the new version of the launch template. If you update without a launch template, then you can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For information about Linux versions, see Amazon EKS optimized Amazon Linux AMI versions in the Amazon EKS User Guide. For information about Windows versions, see Amazon EKS optimized Windows AMI versions in the Amazon EKS User Guide. You cannot roll back a node group to an earlier Kubernetes version or AMI version. When a node in a managed node group is terminated due to a scaling action or update, every Pod on that node is drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can force the update if Amazon EKS is unable to drain the nodes as a result of a Pod disruption budget issue.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of your cluster.</td>
</tr>
<tr id="parameter-nodegroup_name">
    <td><CopyableCode code="nodegroup_name" /></td>
    <td><code>string</code></td>
    <td>The name of the managed node group to update.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return. This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_nodegroup"
    values={[
        { label: 'describe_nodegroup', value: 'describe_nodegroup' },
        { label: 'list_nodegroups', value: 'list_nodegroups' }
    ]}
>
<TabItem value="describe_nodegroup">

Describes a managed node group.

```sql
SELECT
ami_type,
capacity_type,
cluster_name,
created_at,
disk_size,
health,
instance_types,
labels,
launch_template,
modified_at,
node_repair_config,
node_role,
nodegroup_arn,
nodegroup_name,
release_version,
remote_access,
resources,
scaling_config,
status,
subnets,
tags,
taints,
update_config,
version,
warm_pool_config
FROM aws.eks.nodegroups
WHERE name = '{{ name }}' -- required
AND nodegroup_name = '{{ nodegroup_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_nodegroups">

Lists the managed node groups associated with the specified cluster in your Amazon Web Services account in the specified Amazon Web Services Region. Self-managed node groups aren't listed.

```sql
SELECT
nodegroup
FROM aws.eks.nodegroups
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_nodegroup"
    values={[
        { label: 'create_nodegroup', value: 'create_nodegroup' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_nodegroup">

Creates a managed node group for an Amazon EKS cluster. You can only create a node group for your cluster that is equal to the current Kubernetes version for the cluster. All node groups are created with the latest AMI release version for the respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using a launch template. For later updates, you will only be able to update a node group using a launch template only if it was originally deployed with a launch template. Additionally, the launch template ID or name must match what was used when the node group was created. You can update the launch template version with necessary changes. For more information about using launch templates, see Customizing managed nodes with launch templates. An Amazon EKS managed node group is an Amazon EC2 Auto Scaling group and associated Amazon EC2 instances that are managed by Amazon Web Services for an Amazon EKS cluster. For more information, see Managed node groups in the Amazon EKS User Guide. Windows AMI types are only supported for commercial Amazon Web Services Regions that support Windows on Amazon EKS.

```sql
INSERT INTO aws.eks.nodegroups (
nodegroupName,
scalingConfig,
diskSize,
subnets,
instanceTypes,
amiType,
remoteAccess,
nodeRole,
labels,
taints,
tags,
clientRequestToken,
launchTemplate,
updateConfig,
nodeRepairConfig,
capacityType,
version,
releaseVersion,
warmPoolConfig,
name,
region
)
SELECT 
'{{ nodegroupName }}' /* required */,
'{{ scalingConfig }}',
{{ diskSize }},
'{{ subnets }}' /* required */,
'{{ instanceTypes }}',
'{{ amiType }}',
'{{ remoteAccess }}',
'{{ nodeRole }}' /* required */,
'{{ labels }}',
'{{ taints }}',
'{{ tags }}',
'{{ clientRequestToken }}',
'{{ launchTemplate }}',
'{{ updateConfig }}',
'{{ nodeRepairConfig }}',
'{{ capacityType }}',
'{{ version }}',
'{{ releaseVersion }}',
'{{ warmPoolConfig }}',
'{{ name }}',
'{{ region }}'
RETURNING
nodegroup
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: nodegroups
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the nodegroups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the nodegroups resource.
    - name: nodegroupName
      value: "{{ nodegroupName }}"
    - name: scalingConfig
      description: |
        An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
      value:
        minSize: {{ minSize }}
        maxSize: {{ maxSize }}
        desiredSize: {{ desiredSize }}
    - name: diskSize
      value: {{ diskSize }}
    - name: subnets
      value:
        - "{{ subnets }}"
    - name: instanceTypes
      value:
        - "{{ instanceTypes }}"
    - name: amiType
      value: "{{ amiType }}"
      valid_values: ['AL2_x86_64', 'AL2_x86_64_GPU', 'AL2_ARM_64', 'CUSTOM', 'BOTTLEROCKET_ARM_64', 'BOTTLEROCKET_x86_64', 'BOTTLEROCKET_ARM_64_FIPS', 'BOTTLEROCKET_x86_64_FIPS', 'BOTTLEROCKET_ARM_64_NVIDIA', 'BOTTLEROCKET_x86_64_NVIDIA', 'BOTTLEROCKET_ARM_64_NVIDIA_FIPS', 'BOTTLEROCKET_x86_64_NVIDIA_FIPS', 'WINDOWS_CORE_2019_x86_64', 'WINDOWS_FULL_2019_x86_64', 'WINDOWS_CORE_2022_x86_64', 'WINDOWS_FULL_2022_x86_64', 'WINDOWS_CORE_2025_x86_64', 'WINDOWS_FULL_2025_x86_64', 'AL2023_x86_64_STANDARD', 'AL2023_ARM_64_STANDARD', 'AL2023_x86_64_NEURON', 'AL2023_x86_64_NVIDIA', 'AL2023_ARM_64_NVIDIA']
    - name: remoteAccess
      description: |
        An object representing the remote access configuration for the managed node group.
      value:
        ec2SshKey: "{{ ec2SshKey }}"
        sourceSecurityGroups:
          - "{{ sourceSecurityGroups }}"
    - name: nodeRole
      value: "{{ nodeRole }}"
    - name: labels
      value: "{{ labels }}"
    - name: taints
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
          effect: "{{ effect }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them. The following basic restrictions apply to tags: Maximum number of tags per resource – 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length – 128 Unicode characters in UTF-8 Maximum value length – 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: launchTemplate
      description: |
        An object representing a node group launch template specification. The launch template can't include SubnetId , IamInstanceProfile , RequestSpotInstances , HibernationOptions , or TerminateInstances , or the node group deployment or update will fail. For more information about launch templates, see CreateLaunchTemplate in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see Customizing managed nodes with launch templates in the Amazon EKS User Guide. You must specify either the launch template ID or the launch template name in the request, but not both.
      value:
        name: "{{ name }}"
        version: "{{ version }}"
        id: "{{ id }}"
    - name: updateConfig
      description: |
        The node group update configuration. An Amazon EKS managed node group updates by replacing nodes with new nodes of newer AMI versions in parallel. You choose the maximum unavailable and the update strategy.
      value:
        maxUnavailable: {{ maxUnavailable }}
        maxUnavailablePercentage: {{ maxUnavailablePercentage }}
        updateStrategy: "{{ updateStrategy }}"
    - name: nodeRepairConfig
      description: |
        The node auto repair configuration for the node group.
      value:
        enabled: {{ enabled }}
        maxUnhealthyNodeThresholdCount: {{ maxUnhealthyNodeThresholdCount }}
        maxUnhealthyNodeThresholdPercentage: {{ maxUnhealthyNodeThresholdPercentage }}
        maxParallelNodesRepairedCount: {{ maxParallelNodesRepairedCount }}
        maxParallelNodesRepairedPercentage: {{ maxParallelNodesRepairedPercentage }}
        nodeRepairConfigOverrides:
          - nodeMonitoringCondition: "{{ nodeMonitoringCondition }}"
            nodeUnhealthyReason: "{{ nodeUnhealthyReason }}"
            minRepairWaitTimeMins: {{ minRepairWaitTimeMins }}
            repairAction: "{{ repairAction }}"
    - name: capacityType
      value: "{{ capacityType }}"
      valid_values: ['ON_DEMAND', 'SPOT', 'CAPACITY_BLOCK']
    - name: version
      value: "{{ version }}"
    - name: releaseVersion
      value: "{{ releaseVersion }}"
    - name: warmPoolConfig
      description: |
        The configuration for an Amazon EC2 Auto Scaling warm pool attached to an Amazon EKS managed node group. Warm pools maintain pre-initialized EC2 instances alongside your Auto Scaling group that have already completed the bootup initialization process and can be kept in a Stopped, Running, or Hibernated state.
      value:
        enabled: {{ enabled }}
        minSize: {{ minSize }}
        maxGroupPreparedCapacity: {{ maxGroupPreparedCapacity }}
        poolState: "{{ poolState }}"
        reuseOnScaleIn: {{ reuseOnScaleIn }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_nodegroup_config"
    values={[
        { label: 'update_nodegroup_config', value: 'update_nodegroup_config' }
    ]}
>
<TabItem value="update_nodegroup_config">

Updates an Amazon EKS managed node group configuration. Your node group continues to function during the update. The response output includes an update ID that you can use to track the status of your node group update with the DescribeUpdate API operation. You can update the Kubernetes labels and taints for a node group and the scaling and version update configuration.

```sql
UPDATE aws.eks.nodegroups
SET 
labels = '{{ labels }}',
taints = '{{ taints }}',
scalingConfig = '{{ scalingConfig }}',
updateConfig = '{{ updateConfig }}',
nodeRepairConfig = '{{ nodeRepairConfig }}',
warmPoolConfig = '{{ warmPoolConfig }}',
clientRequestToken = '{{ clientRequestToken }}'
WHERE 
name = '{{ name }}' --required
AND nodegroup_name = '{{ nodegroup_name }}' --required
AND region = '{{ region }}' --required
RETURNING
update;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_nodegroup"
    values={[
        { label: 'delete_nodegroup', value: 'delete_nodegroup' }
    ]}
>
<TabItem value="delete_nodegroup">

Deletes a managed node group.

```sql
DELETE FROM aws.eks.nodegroups
WHERE name = '{{ name }}' --required
AND nodegroup_name = '{{ nodegroup_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_nodegroup_version"
    values={[
        { label: 'update_nodegroup_version', value: 'update_nodegroup_version' }
    ]}
>
<TabItem value="update_nodegroup_version">

Updates the Kubernetes version or AMI version of an Amazon EKS managed node group. You can update a node group using a launch template only if the node group was originally deployed with a launch template. Additionally, the launch template ID or name must match what was used when the node group was created. You can update the launch template version with necessary changes. If you need to update a custom AMI in a node group that was deployed with a launch template, then update your custom AMI, specify the new ID in a new version of the launch template, and then update the node group to the new version of the launch template. If you update without a launch template, then you can update to the latest available AMI version of a node group's current Kubernetes version by not specifying a Kubernetes version in the request. You can update to the latest AMI version of your cluster's current Kubernetes version by specifying your cluster's Kubernetes version in the request. For information about Linux versions, see Amazon EKS optimized Amazon Linux AMI versions in the Amazon EKS User Guide. For information about Windows versions, see Amazon EKS optimized Windows AMI versions in the Amazon EKS User Guide. You cannot roll back a node group to an earlier Kubernetes version or AMI version. When a node in a managed node group is terminated due to a scaling action or update, every Pod on that node is drained first. Amazon EKS attempts to drain the nodes gracefully and will fail if it is unable to do so. You can force the update if Amazon EKS is unable to drain the nodes as a result of a Pod disruption budget issue.

```sql
EXEC aws.eks.nodegroups.update_nodegroup_version 
@name='{{ name }}' --required, 
@nodegroup_name='{{ nodegroup_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"version": "{{ version }}", 
"releaseVersion": "{{ releaseVersion }}", 
"launchTemplate": "{{ launchTemplate }}", 
"force": {{ force }}, 
"clientRequestToken": "{{ clientRequestToken }}"
}'
;
```
</TabItem>
</Tabs>
