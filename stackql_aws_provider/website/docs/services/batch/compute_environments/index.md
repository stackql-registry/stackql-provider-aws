--- 
title: compute_environments
hide_title: false
hide_table_of_contents: false
keywords:
  - compute_environments
  - batch
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

Creates, updates, deletes, gets or lists a <code>compute_environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compute_environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.batch.compute_environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_compute_environments"
    values={[
        { label: 'describe_compute_environments', value: 'describe_compute_environments' }
    ]}
>
<TabItem value="describe_compute_environments">

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
    <td><CopyableCode code="compute_environment_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the compute environment.</td>
</tr>
<tr>
    <td><CopyableCode code="compute_environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the compute environment. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).</td>
</tr>
<tr>
    <td><CopyableCode code="compute_resources" /></td>
    <td><code>object</code></td>
    <td>An object that represents an Batch compute resource. For more information, see Compute environments in the Batch User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="container_orchestration_type" /></td>
    <td><code>string</code></td>
    <td>The orchestration type of the compute environment. The valid values are ECS (default) or EKS. (ECS, EKS)</td>
</tr>
<tr>
    <td><CopyableCode code="context" /></td>
    <td><code>string</code></td>
    <td>Reserved.</td>
</tr>
<tr>
    <td><CopyableCode code="ecs_cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the underlying Amazon ECS cluster that the compute environment uses.</td>
</tr>
<tr>
    <td><CopyableCode code="eks_configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for the Amazon EKS cluster that supports the Batch compute environment. The cluster must exist before the compute environment can be created.</td>
</tr>
<tr>
    <td><CopyableCode code="service_role" /></td>
    <td><code>string</code></td>
    <td>The service role that's associated with the compute environment that allows Batch to make calls to Amazon Web Services API operations on your behalf. For more information, see Batch service IAM role in the Batch User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the compute environment. The valid values are ENABLED or DISABLED. If the state is ENABLED, then the Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically based on the job queue demand. If the state is DISABLED, then the Batch scheduler doesn't attempt to place jobs within the environment. Jobs in a STARTING or RUNNING state continue to progress normally. Managed compute environments in the DISABLED state don't scale out. Compute environments in a DISABLED state may continue to incur billing charges, for example, if they have running instances due to jobs that are still executing or a non-zero minvCpus setting. To prevent additional charges, disable and delete the compute environment. When an instance is idle, the instance scales down to the minvCpus value. However, the instance size doesn't change. For example, consider a c5.8xlarge instance with a minvCpus value of 4 and a desiredvCpus value of 36. This instance doesn't scale down to a c5.large instance. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the compute environment (for example, CREATING or VALID). (CREATING, UPDATING, DELETING, DELETED, VALID, INVALID)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>A short, human-readable string to provide additional details for the current status of the compute environment.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags applied to the compute environment.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the compute environment: MANAGED or UNMANAGED. For more information, see Compute environments in the Batch User Guide. (MANAGED, UNMANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="unmanagedv_cpus" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of VCPUs expected to be used for an unmanaged compute environment.</td>
</tr>
<tr>
    <td><CopyableCode code="update_policy" /></td>
    <td><code>object</code></td>
    <td>Specifies the infrastructure update policy for the compute environment. For more information about infrastructure updates, see Updating compute environments in the Batch User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the compute environment.</td>
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
    <td><a href="#describe_compute_environments"><CopyableCode code="describe_compute_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes one or more of your compute environments. If you're using an unmanaged compute environment, you can use the DescribeComputeEnvironment operation to determine the ecsClusterArn that you launch your Amazon ECS container instances into.</td>
</tr>
<tr>
    <td><a href="#create_compute_environment"><CopyableCode code="create_compute_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-computeEnvironmentName"><code>computeEnvironmentName</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Creates an Batch compute environment. You can create MANAGED or UNMANAGED compute environments. MANAGED compute environments can use Amazon EC2 or Fargate resources. UNMANAGED compute environments can only use EC2 resources. In a managed compute environment, Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the launch template that you specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is less than a specified percentage of the On-Demand price. In an unmanaged compute environment, you can manage your own EC2 compute resources and have flexibility with how you configure your compute resources. For example, you can use custom AMIs. However, you must verify that each of your AMIs meet the Amazon ECS container instance AMI specification. For more information, see container instance AMIs in the Amazon Elastic Container Service Developer Guide. After you created your unmanaged compute environment, you can use the DescribeComputeEnvironments operation to find the Amazon ECS cluster that's associated with it. Then, launch your container instances into that Amazon ECS cluster. For more information, see Launching an Amazon ECS container instance in the Amazon Elastic Container Service Developer Guide. Batch doesn't automatically upgrade the AMIs in a compute environment after it's created. For more information on how to update a compute environment's AMI, see Updating compute environments in the Batch User Guide.</td>
</tr>
<tr>
    <td><a href="#update_compute_environment"><CopyableCode code="update_compute_environment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-computeEnvironment"><code>computeEnvironment</code></a></td>
    <td></td>
    <td>Updates an Batch compute environment.</td>
</tr>
<tr>
    <td><a href="#delete_compute_environment"><CopyableCode code="delete_compute_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Batch compute environment. Before you can delete a compute environment, you must set its state to DISABLED with the UpdateComputeEnvironment API operation and disassociate it from any job queues with the UpdateJobQueue API operation. Compute environments that use Fargate resources must terminate all active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute environment enters an invalid state.</td>
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
    defaultValue="describe_compute_environments"
    values={[
        { label: 'describe_compute_environments', value: 'describe_compute_environments' }
    ]}
>
<TabItem value="describe_compute_environments">

Describes one or more of your compute environments. If you're using an unmanaged compute environment, you can use the DescribeComputeEnvironment operation to determine the ecsClusterArn that you launch your Amazon ECS container instances into.

```sql
SELECT
compute_environment_arn,
compute_environment_name,
compute_resources,
container_orchestration_type,
context,
ecs_cluster_arn,
eks_configuration,
service_role,
state,
status,
status_reason,
tags,
type_,
unmanagedv_cpus,
update_policy,
uuid
FROM aws.batch.compute_environments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_compute_environment"
    values={[
        { label: 'create_compute_environment', value: 'create_compute_environment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_compute_environment">

Creates an Batch compute environment. You can create MANAGED or UNMANAGED compute environments. MANAGED compute environments can use Amazon EC2 or Fargate resources. UNMANAGED compute environments can only use EC2 resources. In a managed compute environment, Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the launch template that you specify when you create the compute environment. Either, you can choose to use EC2 On-Demand Instances and EC2 Spot Instances. Or, you can use Fargate and Fargate Spot capacity in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is less than a specified percentage of the On-Demand price. In an unmanaged compute environment, you can manage your own EC2 compute resources and have flexibility with how you configure your compute resources. For example, you can use custom AMIs. However, you must verify that each of your AMIs meet the Amazon ECS container instance AMI specification. For more information, see container instance AMIs in the Amazon Elastic Container Service Developer Guide. After you created your unmanaged compute environment, you can use the DescribeComputeEnvironments operation to find the Amazon ECS cluster that's associated with it. Then, launch your container instances into that Amazon ECS cluster. For more information, see Launching an Amazon ECS container instance in the Amazon Elastic Container Service Developer Guide. Batch doesn't automatically upgrade the AMIs in a compute environment after it's created. For more information on how to update a compute environment's AMI, see Updating compute environments in the Batch User Guide.

```sql
INSERT INTO aws.batch.compute_environments (
computeEnvironmentName,
type,
state,
unmanagedvCpus,
computeResources,
serviceRole,
tags,
eksConfiguration,
context,
region
)
SELECT 
'{{ computeEnvironmentName }}' /* required */,
'{{ type }}' /* required */,
'{{ state }}',
{{ unmanagedvCpus }},
'{{ computeResources }}',
'{{ serviceRole }}',
'{{ tags }}',
'{{ eksConfiguration }}',
'{{ context }}',
'{{ region }}'
RETURNING
compute_environment_arn,
compute_environment_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: compute_environments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the compute_environments resource.
    - name: computeEnvironmentName
      value: "{{ computeEnvironmentName }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['MANAGED', 'UNMANAGED']
    - name: state
      value: "{{ state }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: unmanagedvCpus
      value: {{ unmanagedvCpus }}
    - name: computeResources
      description: |
        An object that represents an Batch compute resource. For more information, see Compute environments in the Batch User Guide.
      value:
        type_: "{{ type_ }}"
        allocationStrategy: "{{ allocationStrategy }}"
        minvCpus: {{ minvCpus }}
        maxvCpus: {{ maxvCpus }}
        desiredvCpus: {{ desiredvCpus }}
        instanceTypes:
          - "{{ instanceTypes }}"
        imageId: "{{ imageId }}"
        subnets:
          - "{{ subnets }}"
        securityGroupIds:
          - "{{ securityGroupIds }}"
        ec2KeyPair: "{{ ec2KeyPair }}"
        instanceRole: "{{ instanceRole }}"
        tags: "{{ tags }}"
        placementGroup: "{{ placementGroup }}"
        bidPercentage: {{ bidPercentage }}
        spotIamFleetRole: "{{ spotIamFleetRole }}"
        launchTemplate:
          launchTemplateId: "{{ launchTemplateId }}"
          launchTemplateName: "{{ launchTemplateName }}"
          version: "{{ version }}"
          overrides:
            - launchTemplateId: "{{ launchTemplateId }}"
              launchTemplateName: "{{ launchTemplateName }}"
              version: "{{ version }}"
              targetInstanceTypes: "{{ targetInstanceTypes }}"
              userdataType: "{{ userdataType }}"
          userdataType: "{{ userdataType }}"
        ec2Configuration:
          - imageType: "{{ imageType }}"
            imageIdOverride: "{{ imageIdOverride }}"
            batchImageStatus: "{{ batchImageStatus }}"
            imageKubernetesVersion: "{{ imageKubernetesVersion }}"
        scalingPolicy:
          minScaleDownDelayMinutes: {{ minScaleDownDelayMinutes }}
    - name: serviceRole
      value: "{{ serviceRole }}"
    - name: tags
      value: "{{ tags }}"
    - name: eksConfiguration
      description: |
        Configuration for the Amazon EKS cluster that supports the Batch compute environment. The cluster must exist before the compute environment can be created.
      value:
        eksClusterArn: "{{ eksClusterArn }}"
        kubernetesNamespace: "{{ kubernetesNamespace }}"
    - name: context
      value: "{{ context }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_compute_environment"
    values={[
        { label: 'update_compute_environment', value: 'update_compute_environment' }
    ]}
>
<TabItem value="update_compute_environment">

Updates an Batch compute environment.

```sql
UPDATE aws.batch.compute_environments
SET 
computeEnvironment = '{{ computeEnvironment }}',
state = '{{ state }}',
unmanagedvCpus = {{ unmanagedvCpus }},
computeResources = '{{ computeResources }}',
serviceRole = '{{ serviceRole }}',
updatePolicy = '{{ updatePolicy }}',
context = '{{ context }}'
WHERE 
region = '{{ region }}' --required
AND computeEnvironment = '{{ computeEnvironment }}' --required
RETURNING
compute_environment_arn,
compute_environment_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_compute_environment"
    values={[
        { label: 'delete_compute_environment', value: 'delete_compute_environment' }
    ]}
>
<TabItem value="delete_compute_environment">

Deletes an Batch compute environment. Before you can delete a compute environment, you must set its state to DISABLED with the UpdateComputeEnvironment API operation and disassociate it from any job queues with the UpdateJobQueue API operation. Compute environments that use Fargate resources must terminate all active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute environment enters an invalid state.

```sql
DELETE FROM aws.batch.compute_environments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
