--- 
title: compute_node_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - compute_node_groups
  - pcs
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

Creates, updates, deletes, gets or lists a <code>compute_node_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compute_node_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pcs.compute_node_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_compute_node_group"
    values={[
        { label: 'get_compute_node_group', value: 'get_compute_node_group' },
        { label: 'list_compute_node_groups', value: 'list_compute_node_groups' }
    ]}
>
<TabItem value="get_compute_node_group">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The generated unique ID of the compute node group.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name that identifies the compute node group. (pattern: &lt;code&gt;(?!pcs_)^&#91;A-Za-z&#93;&#91;A-Za-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="amiId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Machine Image (AMI) that PCS uses to launch instances. If not provided, PCS uses the AMI ID specified in the custom launch template. (pattern: &lt;code&gt;ami-&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The unique Amazon Resource Name (ARN) of the compute node group.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td>The ID of the cluster of the compute node group.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customLaunchTemplate" /></td>
    <td><code>object</code></td>
    <td>An Amazon EC2 launch template PCS uses to launch compute nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="errorInfo" /></td>
    <td><code>array</code></td>
    <td>The list of errors that occurred during compute node group provisioning.</td>
</tr>
<tr>
    <td><CopyableCode code="iamInstanceProfileArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have the pcs:RegisterComputeNodeGroupInstance permission and the role name must start with AWSPCS or must have the path /aws-pcs/. For more information, see IAM instance profiles for PCS in the PCS User Guide. (pattern: &lt;code&gt;arn:aws(&#91;a-zA-Z-&#93;&#123;0,10&#125;)?:iam::&#91;0-9&#93;&#123;12&#125;:instance-profile/(&#91;!-~&#93;&#123;1,510&#125;/)?(&#91;\w+=,.@-&#93;&#123;1,128&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceConfigs" /></td>
    <td><code>array</code></td>
    <td>A list of EC2 instance configurations that PCS can provision in the compute node group.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="purchaseOption" /></td>
    <td><code>string</code></td>
    <td>Specifies how EC2 instances are purchased on your behalf. PCS supports On-Demand Instances, Spot Instances, Interruptible Capacity Reservations, On-Demand Capacity Reservations, and Amazon EC2 Capacity Blocks for ML. For more information, see Amazon EC2 billing and purchasing options in the Amazon Elastic Compute Cloud User Guide. For more information about PCS support for Capacity Blocks, see Using Amazon EC2 Capacity Blocks for ML with PCS in the PCS User Guide. For more information about PCS support for interruptible capacity reservations, see Using I-ODCRs with PCS in the PCS User Guide. Choose On-Demand if you plan to use an On-Demand Capacity Reservation (ODCR). For more information, see Using ODCRs with PCS. If you don't provide this option, it defaults to On-Demand. (ONDEMAND, SPOT, CAPACITY_BLOCK, INTERRUPTIBLE_CAPACITY_RESERVATION)</td>
</tr>
<tr>
    <td><CopyableCode code="scalingConfiguration" /></td>
    <td><code>object</code></td>
    <td>Specifies the boundaries of the compute node group auto scaling.</td>
</tr>
<tr>
    <td><CopyableCode code="slurmConfiguration" /></td>
    <td><code>object</code></td>
    <td>Additional options related to the Slurm scheduler.</td>
</tr>
<tr>
    <td><CopyableCode code="spotOptions" /></td>
    <td><code>object</code></td>
    <td>Additional configuration when you specify SPOT as the purchaseOption for the CreateComputeNodeGroup API action.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The provisioning status of the compute node group. The provisioning status doesn't indicate the overall health of the compute node group. The resource enters the SUSPENDING and SUSPENDED states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is SUSPENDED. For more information, see Frequently asked questions about Slurm versions in PCS in the PCS User Guide. (CREATING, ACTIVE, UPDATING, DELETING, CREATE_FAILED, DELETE_FAILED, UPDATE_FAILED, DELETED, SUSPENDING, SUSPENDED, RESUMING)</td>
</tr>
<tr>
    <td><CopyableCode code="subnetIds" /></td>
    <td><code>array</code></td>
    <td>The list of subnet IDs where instances are provisioned by the compute node group. The subnets must be in the same VPC as the cluster.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_compute_node_groups">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The generated unique ID of the compute node group.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name that identifies the compute node group. (pattern: &lt;code&gt;(?!pcs_)^&#91;A-Za-z&#93;&#91;A-Za-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The unique Amazon Resource Name (ARN) of the compute node group.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td>The ID of the cluster of the compute node group.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The provisioning status of the compute node group. The provisioning status doesn't indicate the overall health of the compute node group. The resource enters the SUSPENDING and SUSPENDED states when the scheduler is beyond end of life and we have suspended the cluster. When in these states, you can't use the cluster. The cluster controller is down and all compute instances are terminated. The resources still count toward your service quotas. You can delete a resource if its status is SUSPENDED. For more information, see Frequently asked questions about Slurm versions in PCS in the PCS User Guide. (CREATING, ACTIVE, UPDATING, DELETING, CREATE_FAILED, DELETE_FAILED, UPDATE_FAILED, DELETED, SUSPENDING, SUSPENDED, RESUMING)</td>
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
    <td><a href="#get_compute_node_group"><CopyableCode code="get_compute_node_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information about a compute node group. This API action provides networking information, EC2 instance type, compute node group status, and scheduler (such as Slurm) configuration.</td>
</tr>
<tr>
    <td><a href="#list_compute_node_groups"><CopyableCode code="list_compute_node_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all compute node groups associated with a cluster.</td>
</tr>
<tr>
    <td><a href="#create_compute_node_group"><CopyableCode code="create_compute_node_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterIdentifier"><code>clusterIdentifier</code></a>, <a href="#parameter-computeNodeGroupName"><code>computeNodeGroupName</code></a>, <a href="#parameter-subnetIds"><code>subnetIds</code></a>, <a href="#parameter-customLaunchTemplate"><code>customLaunchTemplate</code></a>, <a href="#parameter-iamInstanceProfileArn"><code>iamInstanceProfileArn</code></a>, <a href="#parameter-scalingConfiguration"><code>scalingConfiguration</code></a>, <a href="#parameter-instanceConfigs"><code>instanceConfigs</code></a></td>
    <td></td>
    <td>Creates a managed set of compute nodes. You associate a compute node group with a cluster through 1 or more PCS queues or as part of the login fleet. A compute node group includes the definition of the compute properties and lifecycle management. PCS uses the information you provide to this API action to launch compute nodes in your account. You can only specify subnets in the same Amazon VPC as your cluster. You receive billing charges for the compute nodes that PCS launches in your account. You must already have a launch template before you call this API. For more information, see Launch an instance from a launch template in the Amazon Elastic Compute Cloud User Guide for Linux Instances.</td>
</tr>
<tr>
    <td><a href="#register_compute_node_group_instance"><CopyableCode code="register_compute_node_group_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterIdentifier"><code>clusterIdentifier</code></a>, <a href="#parameter-bootstrapId"><code>bootstrapId</code></a></td>
    <td></td>
    <td>This API action isn't intended for you to use. PCS uses this API action to register the compute nodes it launches in your account.</td>
</tr>
<tr>
    <td><a href="#update_compute_node_group"><CopyableCode code="update_compute_node_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clusterIdentifier"><code>clusterIdentifier</code></a>, <a href="#parameter-computeNodeGroupIdentifier"><code>computeNodeGroupIdentifier</code></a></td>
    <td></td>
    <td>Updates a compute node group. You can update many of the fields related to your compute node group including the configurations for networking, compute nodes, and settings specific to your scheduler (such as Slurm).</td>
</tr>
<tr>
    <td><a href="#delete_compute_node_group"><CopyableCode code="delete_compute_node_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a compute node group. You must delete all queues associated with the compute node group first.</td>
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
    defaultValue="get_compute_node_group"
    values={[
        { label: 'get_compute_node_group', value: 'get_compute_node_group' },
        { label: 'list_compute_node_groups', value: 'list_compute_node_groups' }
    ]}
>
<TabItem value="get_compute_node_group">

Returns detailed information about a compute node group. This API action provides networking information, EC2 instance type, compute node group status, and scheduler (such as Slurm) configuration.

```sql
SELECT
id,
name,
amiId,
arn,
clusterId,
createdAt,
customLaunchTemplate,
errorInfo,
iamInstanceProfileArn,
instanceConfigs,
modifiedAt,
purchaseOption,
scalingConfiguration,
slurmConfiguration,
spotOptions,
status,
subnetIds
FROM aws.pcs.compute_node_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_compute_node_groups">

Returns a list of all compute node groups associated with a cluster.

```sql
SELECT
id,
name,
arn,
clusterId,
createdAt,
modifiedAt,
status
FROM aws.pcs.compute_node_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_compute_node_group"
    values={[
        { label: 'create_compute_node_group', value: 'create_compute_node_group' },
        { label: 'register_compute_node_group_instance', value: 'register_compute_node_group_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_compute_node_group">

Creates a managed set of compute nodes. You associate a compute node group with a cluster through 1 or more PCS queues or as part of the login fleet. A compute node group includes the definition of the compute properties and lifecycle management. PCS uses the information you provide to this API action to launch compute nodes in your account. You can only specify subnets in the same Amazon VPC as your cluster. You receive billing charges for the compute nodes that PCS launches in your account. You must already have a launch template before you call this API. For more information, see Launch an instance from a launch template in the Amazon Elastic Compute Cloud User Guide for Linux Instances.

```sql
INSERT INTO aws.pcs.compute_node_groups (
clusterIdentifier,
computeNodeGroupName,
amiId,
subnetIds,
purchaseOption,
customLaunchTemplate,
iamInstanceProfileArn,
scalingConfiguration,
instanceConfigs,
spotOptions,
slurmConfiguration,
clientToken,
tags,
region
)
SELECT 
'{{ clusterIdentifier }}' /* required */,
'{{ computeNodeGroupName }}' /* required */,
'{{ amiId }}',
'{{ subnetIds }}' /* required */,
'{{ purchaseOption }}',
'{{ customLaunchTemplate }}' /* required */,
'{{ iamInstanceProfileArn }}' /* required */,
'{{ scalingConfiguration }}' /* required */,
'{{ instanceConfigs }}' /* required */,
'{{ spotOptions }}',
'{{ slurmConfiguration }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
computeNodeGroup
;
```
</TabItem>
<TabItem value="register_compute_node_group_instance">

This API action isn't intended for you to use. PCS uses this API action to register the compute nodes it launches in your account.

```sql
INSERT INTO aws.pcs.compute_node_groups (
clusterIdentifier,
bootstrapId,
region
)
SELECT 
'{{ clusterIdentifier }}' /* required */,
'{{ bootstrapId }}' /* required */,
'{{ region }}'
RETURNING
endpoints,
nodeID,
sharedSecret
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: compute_node_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the compute_node_groups resource.
    - name: clusterIdentifier
      value: "{{ clusterIdentifier }}"
      description: |
        The name or ID of the cluster to register the compute node group instance in.
    - name: computeNodeGroupName
      value: "{{ computeNodeGroupName }}"
      description: |
        A name to identify the cluster. Example: MyCluster
    - name: amiId
      value: "{{ amiId }}"
      description: |
        The ID of the Amazon Machine Image (AMI) that PCS uses to launch compute nodes (Amazon EC2 instances). If you don't provide this value, PCS uses the AMI ID specified in the custom launch template.
    - name: subnetIds
      value:
        - "{{ subnetIds }}"
      description: |
        The list of subnet IDs where the compute node group launches instances. Subnets must be in the same VPC as the cluster.
    - name: purchaseOption
      value: "{{ purchaseOption }}"
      description: |
        Specifies how EC2 instances are purchased on your behalf. PCS supports On-Demand Instances, Spot Instances, Interruptible Capacity Reservations, On-Demand Capacity Reservations, and Amazon EC2 Capacity Blocks for ML. For more information, see Amazon EC2 billing and purchasing options in the Amazon Elastic Compute Cloud User Guide. For more information about PCS support for Capacity Blocks, see Using Amazon EC2 Capacity Blocks for ML with PCS in the PCS User Guide. For more information about PCS support for interruptible capacity reservations, see Using I-ODCRs with PCS in the PCS User Guide. Choose On-Demand if you plan to use an On-Demand Capacity Reservation (ODCR). For more information, see Using ODCRs with PCS. If you don't provide this option, it defaults to On-Demand.
      valid_values: ['ONDEMAND', 'SPOT', 'CAPACITY_BLOCK', 'INTERRUPTIBLE_CAPACITY_RESERVATION']
    - name: customLaunchTemplate
      description: |
        An Amazon EC2 launch template PCS uses to launch compute nodes.
      value:
        id: "{{ id }}"
        version: "{{ version }}"
    - name: iamInstanceProfileArn
      value: "{{ iamInstanceProfileArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have the pcs:RegisterComputeNodeGroupInstance permission and the role name must start with AWSPCS or must have the path /aws-pcs/. For more information, see IAM instance profiles for PCS in the PCS User Guide.
    - name: scalingConfiguration
      description: |
        Specifies the boundaries of the compute node group auto scaling.
      value:
        minInstanceCount: {{ minInstanceCount }}
        maxInstanceCount: {{ maxInstanceCount }}
    - name: instanceConfigs
      description: |
        A list of EC2 instance configurations that PCS can provision in the compute node group.
      value:
        - instanceType: "{{ instanceType }}"
    - name: spotOptions
      description: |
        Additional configuration when you specify SPOT as the purchaseOption for the CreateComputeNodeGroup API action.
      value:
        allocationStrategy: "{{ allocationStrategy }}"
    - name: slurmConfiguration
      description: |
        Additional options related to the Slurm scheduler.
      value:
        slurmCustomSettings:
          - parameterName: "{{ parameterName }}"
            parameterValue: "{{ parameterValue }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you don't specify a client token, the CLI and SDK automatically generate 1 for you.
    - name: tags
      value: "{{ tags }}"
      description: |
        1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
    - name: bootstrapId
      value: "{{ bootstrapId }}"
      description: |
        The client-generated token to allow for retries.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_compute_node_group"
    values={[
        { label: 'update_compute_node_group', value: 'update_compute_node_group' }
    ]}
>
<TabItem value="update_compute_node_group">

Updates a compute node group. You can update many of the fields related to your compute node group including the configurations for networking, compute nodes, and settings specific to your scheduler (such as Slurm).

```sql
UPDATE aws.pcs.compute_node_groups
SET 
clusterIdentifier = '{{ clusterIdentifier }}',
computeNodeGroupIdentifier = '{{ computeNodeGroupIdentifier }}',
amiId = '{{ amiId }}',
subnetIds = '{{ subnetIds }}',
customLaunchTemplate = '{{ customLaunchTemplate }}',
purchaseOption = '{{ purchaseOption }}',
spotOptions = '{{ spotOptions }}',
scalingConfiguration = '{{ scalingConfiguration }}',
iamInstanceProfileArn = '{{ iamInstanceProfileArn }}',
slurmConfiguration = '{{ slurmConfiguration }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND clusterIdentifier = '{{ clusterIdentifier }}' --required
AND computeNodeGroupIdentifier = '{{ computeNodeGroupIdentifier }}' --required
RETURNING
computeNodeGroup;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_compute_node_group"
    values={[
        { label: 'delete_compute_node_group', value: 'delete_compute_node_group' }
    ]}
>
<TabItem value="delete_compute_node_group">

Deletes a compute node group. You must delete all queues associated with the compute node group first.

```sql
DELETE FROM aws.pcs.compute_node_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
