--- 
title: capacity_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_providers
  - ecs
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

Creates, updates, deletes, gets or lists a <code>capacity_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.capacity_providers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_capacity_providers"
    values={[
        { label: 'describe_capacity_providers', value: 'describe_capacity_providers' }
    ]}
>
<TabItem value="describe_capacity_providers">

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
    <td><CopyableCode code="capacity_providers" /></td>
    <td><code>array</code></td>
    <td>The list of capacity providers.</td>
</tr>
<tr>
    <td><CopyableCode code="failures" /></td>
    <td><code>array</code></td>
    <td>Any failures associated with the call.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The nextToken value to include in a future DescribeCapacityProviders request. When the results of a DescribeCapacityProviders request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.</td>
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
    <td><a href="#describe_capacity_providers"><CopyableCode code="describe_capacity_providers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes one or more of your capacity providers.</td>
</tr>
<tr>
    <td><a href="#create_capacity_provider"><CopyableCode code="create_capacity_provider" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a capacity provider. Capacity providers are associated with a cluster and are used in capacity provider strategies to facilitate cluster auto scaling. You can create capacity providers for Amazon ECS Managed Instances and EC2 instances. Fargate has the predefined FARGATE and FARGATE_SPOT capacity providers.</td>
</tr>
<tr>
    <td><a href="#update_capacity_provider"><CopyableCode code="update_capacity_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Modifies the parameters for a capacity provider. These changes only apply to new Amazon ECS Managed Instances, or EC2 instances, not existing ones.</td>
</tr>
<tr>
    <td><a href="#put_cluster_capacity_providers"><CopyableCode code="put_cluster_capacity_providers" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cluster"><code>cluster</code></a>, <a href="#parameter-capacityProviders"><code>capacityProviders</code></a>, <a href="#parameter-defaultCapacityProviderStrategy"><code>defaultCapacityProviderStrategy</code></a></td>
    <td></td>
    <td>Modifies the available capacity providers and the default capacity provider strategy for a cluster. You must specify both the available capacity providers and a default capacity provider strategy for the cluster. If the specified cluster has existing capacity providers associated with it, you must specify all existing capacity providers in addition to any new ones you want to add. Any existing capacity providers that are associated with a cluster that are omitted from a PutClusterCapacityProviders API call will be disassociated with the cluster. You can only disassociate an existing capacity provider from a cluster if it's not being used by any existing tasks. When creating a service or running a task on a cluster, if no capacity provider or launch type is specified, then the cluster's default capacity provider strategy is used. We recommend that you define a default capacity provider strategy for your cluster. However, you must specify an empty array (&#91;&#93;) to bypass defining a default strategy. Amazon ECS Managed Instances doesn't support this, because when you create a capacity provider with Amazon ECS Managed Instances, it becomes available only within the specified cluster.</td>
</tr>
<tr>
    <td><a href="#delete_capacity_provider"><CopyableCode code="delete_capacity_provider" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified capacity provider. The FARGATE and FARGATE_SPOT capacity providers are reserved and can't be deleted. You can disassociate them from a cluster using either PutClusterCapacityProviders or by deleting the cluster. Prior to a capacity provider being deleted, the capacity provider must be removed from the capacity provider strategy from all services. The UpdateService API can be used to remove a capacity provider from a service's capacity provider strategy. When updating a service, the forceNewDeployment option can be used to ensure that any tasks using the Amazon EC2 instance capacity provided by the capacity provider are transitioned to use the capacity from the remaining capacity providers. Only capacity providers that aren't associated with a cluster can be deleted. To remove a capacity provider from a cluster, you can either use PutClusterCapacityProviders or delete the cluster.</td>
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
    defaultValue="describe_capacity_providers"
    values={[
        { label: 'describe_capacity_providers', value: 'describe_capacity_providers' }
    ]}
>
<TabItem value="describe_capacity_providers">

Describes one or more of your capacity providers.

```sql
SELECT
capacity_providers,
failures,
next_token
FROM aws.ecs.capacity_providers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_capacity_provider"
    values={[
        { label: 'create_capacity_provider', value: 'create_capacity_provider' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_capacity_provider">

Creates a capacity provider. Capacity providers are associated with a cluster and are used in capacity provider strategies to facilitate cluster auto scaling. You can create capacity providers for Amazon ECS Managed Instances and EC2 instances. Fargate has the predefined FARGATE and FARGATE_SPOT capacity providers.

```sql
INSERT INTO aws.ecs.capacity_providers (
name,
cluster,
autoScalingGroupProvider,
managedInstancesProvider,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ cluster }}',
'{{ autoScalingGroupProvider }}',
'{{ managedInstancesProvider }}',
'{{ tags }}',
'{{ region }}'
RETURNING
capacity_provider
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: capacity_providers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the capacity_providers resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the capacity provider. Up to 255 characters are allowed. They include letters (both upper and lowercase letters), numbers, underscores (_), and hyphens (-). The name can't be prefixed with "aws", "ecs", or "fargate".
    - name: cluster
      value: "{{ cluster }}"
      description: |
        The name of the cluster to associate with the capacity provider. When you create a capacity provider with Amazon ECS Managed Instances, it becomes available only within the specified cluster.
    - name: autoScalingGroupProvider
      description: |
        The details of the Auto Scaling group for the capacity provider.
      value:
        autoScalingGroupArn: "{{ autoScalingGroupArn }}"
        managedScaling:
          status: "{{ status }}"
          targetCapacity: {{ targetCapacity }}
          minimumScalingStepSize: {{ minimumScalingStepSize }}
          maximumScalingStepSize: {{ maximumScalingStepSize }}
          instanceWarmupPeriod: {{ instanceWarmupPeriod }}
        managedTerminationProtection: "{{ managedTerminationProtection }}"
        managedDraining: "{{ managedDraining }}"
    - name: managedInstancesProvider
      description: |
        The configuration for the Amazon ECS Managed Instances provider. This configuration specifies how Amazon ECS manages Amazon EC2 instances on your behalf, including the infrastructure role, instance launch template, and tag propagation settings.
      value:
        infrastructureRoleArn: "{{ infrastructureRoleArn }}"
        instanceLaunchTemplate:
          ec2InstanceProfileArn: "{{ ec2InstanceProfileArn }}"
          networkConfiguration:
            subnets:
              - "{{ subnets }}"
            securityGroups:
              - "{{ securityGroups }}"
          storageConfiguration:
            storageSizeGiB: {{ storageSizeGiB }}
          localStorageConfiguration:
            useLocalStorage: {{ useLocalStorage }}
          monitoring: "{{ monitoring }}"
          capacityOptionType: "{{ capacityOptionType }}"
          instanceMetadataTagsPropagation: {{ instanceMetadataTagsPropagation }}
          instanceRequirements:
            vCpuCount:
              min: {{ min }}
              max: {{ max }}
            memoryMiB:
              min: {{ min }}
              max: {{ max }}
            cpuManufacturers:
              - "{{ cpuManufacturers }}"
            memoryGiBPerVCpu:
              min: {{ min }}
              max: {{ max }}
            excludedInstanceTypes:
              - "{{ excludedInstanceTypes }}"
            instanceGenerations:
              - "{{ instanceGenerations }}"
            spotMaxPricePercentageOverLowestPrice: {{ spotMaxPricePercentageOverLowestPrice }}
            onDemandMaxPricePercentageOverLowestPrice: {{ onDemandMaxPricePercentageOverLowestPrice }}
            bareMetal: "{{ bareMetal }}"
            burstablePerformance: "{{ burstablePerformance }}"
            requireHibernateSupport: {{ requireHibernateSupport }}
            networkInterfaceCount:
              min: {{ min }}
              max: {{ max }}
            localStorage: "{{ localStorage }}"
            localStorageTypes:
              - "{{ localStorageTypes }}"
            totalLocalStorageGB:
              min: {{ min }}
              max: {{ max }}
            baselineEbsBandwidthMbps:
              min: {{ min }}
              max: {{ max }}
            acceleratorTypes:
              - "{{ acceleratorTypes }}"
            acceleratorCount:
              min: {{ min }}
              max: {{ max }}
            acceleratorManufacturers:
              - "{{ acceleratorManufacturers }}"
            acceleratorNames:
              - "{{ acceleratorNames }}"
            acceleratorTotalMemoryMiB:
              min: {{ min }}
              max: {{ max }}
            networkBandwidthGbps:
              min: {{ min }}
              max: {{ max }}
            allowedInstanceTypes:
              - "{{ allowedInstanceTypes }}"
            maxSpotPriceAsPercentageOfOptimalOnDemandPrice: {{ maxSpotPriceAsPercentageOfOptimalOnDemandPrice }}
          fipsEnabled: {{ fipsEnabled }}
          capacityReservations:
            reservationGroupArn: "{{ reservationGroupArn }}"
            reservationPreference: "{{ reservationPreference }}"
        propagateTags: "{{ propagateTags }}"
        infrastructureOptimization:
          scaleInAfter: {{ scaleInAfter }}
        autoRepairConfiguration:
          actionsStatus: "{{ actionsStatus }}"
    - name: tags
      description: |
        The metadata that you apply to the capacity provider to categorize and organize them more conveniently. Each tag consists of a key and an optional value. You define both of them. The following basic restrictions apply to tags: Maximum number of tags per resource - 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8 Maximum value length - 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_capacity_provider"
    values={[
        { label: 'update_capacity_provider', value: 'update_capacity_provider' }
    ]}
>
<TabItem value="update_capacity_provider">

Modifies the parameters for a capacity provider. These changes only apply to new Amazon ECS Managed Instances, or EC2 instances, not existing ones.

```sql
UPDATE aws.ecs.capacity_providers
SET 
name = '{{ name }}',
cluster = '{{ cluster }}',
autoScalingGroupProvider = '{{ autoScalingGroupProvider }}',
managedInstancesProvider = '{{ managedInstancesProvider }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required
RETURNING
capacity_provider;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_cluster_capacity_providers"
    values={[
        { label: 'put_cluster_capacity_providers', value: 'put_cluster_capacity_providers' }
    ]}
>
<TabItem value="put_cluster_capacity_providers">

Modifies the available capacity providers and the default capacity provider strategy for a cluster. You must specify both the available capacity providers and a default capacity provider strategy for the cluster. If the specified cluster has existing capacity providers associated with it, you must specify all existing capacity providers in addition to any new ones you want to add. Any existing capacity providers that are associated with a cluster that are omitted from a PutClusterCapacityProviders API call will be disassociated with the cluster. You can only disassociate an existing capacity provider from a cluster if it's not being used by any existing tasks. When creating a service or running a task on a cluster, if no capacity provider or launch type is specified, then the cluster's default capacity provider strategy is used. We recommend that you define a default capacity provider strategy for your cluster. However, you must specify an empty array ([]) to bypass defining a default strategy. Amazon ECS Managed Instances doesn't support this, because when you create a capacity provider with Amazon ECS Managed Instances, it becomes available only within the specified cluster.

```sql
REPLACE aws.ecs.capacity_providers
SET 
cluster = '{{ cluster }}',
capacityProviders = '{{ capacityProviders }}',
defaultCapacityProviderStrategy = '{{ defaultCapacityProviderStrategy }}'
WHERE 
region = '{{ region }}' --required
AND cluster = '{{ cluster }}' --required
AND capacityProviders = '{{ capacityProviders }}' --required
AND defaultCapacityProviderStrategy = '{{ defaultCapacityProviderStrategy }}' --required
RETURNING
cluster;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_capacity_provider"
    values={[
        { label: 'delete_capacity_provider', value: 'delete_capacity_provider' }
    ]}
>
<TabItem value="delete_capacity_provider">

Deletes the specified capacity provider. The FARGATE and FARGATE_SPOT capacity providers are reserved and can't be deleted. You can disassociate them from a cluster using either PutClusterCapacityProviders or by deleting the cluster. Prior to a capacity provider being deleted, the capacity provider must be removed from the capacity provider strategy from all services. The UpdateService API can be used to remove a capacity provider from a service's capacity provider strategy. When updating a service, the forceNewDeployment option can be used to ensure that any tasks using the Amazon EC2 instance capacity provided by the capacity provider are transitioned to use the capacity from the remaining capacity providers. Only capacity providers that aren't associated with a cluster can be deleted. To remove a capacity provider from a cluster, you can either use PutClusterCapacityProviders or delete the cluster.

```sql
DELETE FROM aws.ecs.capacity_providers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
