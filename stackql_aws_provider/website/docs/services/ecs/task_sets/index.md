--- 
title: task_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - task_sets
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

Creates, updates, deletes, gets or lists a <code>task_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="task_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.task_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_task_sets"
    values={[
        { label: 'describe_task_sets', value: 'describe_task_sets' }
    ]}
>
<TabItem value="describe_task_sets">

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
    <td><CopyableCode code="failures" /></td>
    <td><code>array</code></td>
    <td>Any failures associated with the call.</td>
</tr>
<tr>
    <td><CopyableCode code="task_sets" /></td>
    <td><code>array</code></td>
    <td>The list of task sets described.</td>
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
    <td><a href="#describe_task_sets"><CopyableCode code="describe_task_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the task sets in the specified cluster and service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_task_set"><CopyableCode code="create_task_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-service"><code>service</code></a>, <a href="#parameter-cluster"><code>cluster</code></a>, <a href="#parameter-taskDefinition"><code>taskDefinition</code></a></td>
    <td></td>
    <td>Create a task set in the specified cluster and service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS deployment types in the Amazon Elastic Container Service Developer Guide. On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition. For information about the maximum number of task sets and other quotas, see Amazon ECS service quotas in the Amazon Elastic Container Service Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_task_set"><CopyableCode code="update_task_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cluster"><code>cluster</code></a>, <a href="#parameter-service"><code>service</code></a>, <a href="#parameter-taskSet"><code>taskSet</code></a>, <a href="#parameter-scale"><code>scale</code></a></td>
    <td></td>
    <td>Modifies a task set. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_service_primary_task_set"><CopyableCode code="update_service_primary_task_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cluster"><code>cluster</code></a>, <a href="#parameter-service"><code>service</code></a>, <a href="#parameter-primaryTaskSet"><code>primaryTaskSet</code></a></td>
    <td></td>
    <td>Modifies which task set in a service is the primary task set. Any parameters that are updated on the primary task set in a service will transition to the service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_task_set"><CopyableCode code="delete_task_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified task set within a service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS deployment types in the Amazon Elastic Container Service Developer Guide.</td>
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
    defaultValue="describe_task_sets"
    values={[
        { label: 'describe_task_sets', value: 'describe_task_sets' }
    ]}
>
<TabItem value="describe_task_sets">

Describes the task sets in the specified cluster and service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide.

```sql
SELECT
failures,
task_sets
FROM aws.ecs.task_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_task_set"
    values={[
        { label: 'create_task_set', value: 'create_task_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_task_set">

Create a task set in the specified cluster and service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS deployment types in the Amazon Elastic Container Service Developer Guide. On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition. For information about the maximum number of task sets and other quotas, see Amazon ECS service quotas in the Amazon Elastic Container Service Developer Guide.

```sql
INSERT INTO aws.ecs.task_sets (
service,
cluster,
externalId,
taskDefinition,
networkConfiguration,
loadBalancers,
serviceRegistries,
launchType,
capacityProviderStrategy,
platformVersion,
scale,
clientToken,
tags,
region
)
SELECT 
'{{ service }}' /* required */,
'{{ cluster }}' /* required */,
'{{ externalId }}',
'{{ taskDefinition }}' /* required */,
'{{ networkConfiguration }}',
'{{ loadBalancers }}',
'{{ serviceRegistries }}',
'{{ launchType }}',
'{{ capacityProviderStrategy }}',
'{{ platformVersion }}',
'{{ scale }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
task_set
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: task_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the task_sets resource.
    - name: service
      value: "{{ service }}"
      description: |
        The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
    - name: cluster
      value: "{{ cluster }}"
      description: |
        The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
    - name: externalId
      value: "{{ externalId }}"
      description: |
        An optional non-unique tag that identifies this task set in external systems. If the task set is associated with a service discovery registry, the tasks in this task set will have the ECS_TASK_SET_EXTERNAL_ID Cloud Map attribute set to the provided value.
    - name: taskDefinition
      value: "{{ taskDefinition }}"
      description: |
        The task definition for the tasks in the task set to use. If a revision isn't specified, the latest ACTIVE revision is used.
    - name: networkConfiguration
      description: |
        An object representing the network configuration for a task set.
      value:
        awsvpcConfiguration:
          subnets:
            - "{{ subnets }}"
          securityGroups:
            - "{{ securityGroups }}"
          assignPublicIp: "{{ assignPublicIp }}"
    - name: loadBalancers
      description: |
        A load balancer object representing the load balancer to use with the task set. The supported load balancer types are either an Application Load Balancer or a Network Load Balancer.
      value:
        - targetGroupArn: "{{ targetGroupArn }}"
          loadBalancerName: "{{ loadBalancerName }}"
          containerName: "{{ containerName }}"
          containerPort: {{ containerPort }}
          advancedConfiguration:
            alternateTargetGroupArn: "{{ alternateTargetGroupArn }}"
            productionListenerRule: "{{ productionListenerRule }}"
            testListenerRule: "{{ testListenerRule }}"
            roleArn: "{{ roleArn }}"
    - name: serviceRegistries
      description: |
        The details of the service discovery registries to assign to this task set. For more information, see Service discovery.
      value:
        - registryArn: "{{ registryArn }}"
          port: {{ port }}
          containerName: "{{ containerName }}"
          containerPort: {{ containerPort }}
    - name: launchType
      value: "{{ launchType }}"
      description: |
        The launch type that new tasks in the task set uses. For more information, see Amazon ECS launch types in the Amazon Elastic Container Service Developer Guide. If a launchType is specified, the capacityProviderStrategy parameter must be omitted.
      valid_values: ['EC2', 'FARGATE', 'EXTERNAL', 'MANAGED_INSTANCES']
    - name: capacityProviderStrategy
      description: |
        The capacity provider strategy to use for the task set. A capacity provider strategy consists of one or more capacity providers along with the base and weight to assign to them. A capacity provider must be associated with the cluster to be used in a capacity provider strategy. The PutClusterCapacityProviders API is used to associate a capacity provider with a cluster. Only capacity providers with an ACTIVE or UPDATING status can be used. If a capacityProviderStrategy is specified, the launchType parameter must be omitted. If no capacityProviderStrategy or launchType is specified, the defaultCapacityProviderStrategy for the cluster is used. If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New capacity providers can be created with the CreateCapacityProviderProviderAPI operation. To use a Fargate capacity provider, specify either the FARGATE or FARGATE_SPOT capacity providers. The Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used. The PutClusterCapacityProviders API operation is used to update the list of available capacity providers for a cluster after the cluster is created.
      value:
        - capacityProvider: "{{ capacityProvider }}"
          weight: {{ weight }}
          base: {{ base }}
    - name: platformVersion
      value: "{{ platformVersion }}"
      description: |
        The platform version that the tasks in the task set uses. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the LATEST platform version is used.
    - name: scale
      description: |
        A floating-point percentage of the desired number of tasks to place and keep running in the task set.
      value:
        value: {{ value }}
        unit: "{{ unit }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        An identifier that you provide to ensure the idempotency of the request. It must be unique and is case sensitive. Up to 36 ASCII characters in the range of 33-126 (inclusive) are allowed.
    - name: tags
      description: |
        The metadata that you apply to the task set to help you categorize and organize them. Each tag consists of a key and an optional value. You define both. When a service is deleted, the tags are deleted. The following basic restrictions apply to tags: Maximum number of tags per resource - 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8 Maximum value length - 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_task_set"
    values={[
        { label: 'update_task_set', value: 'update_task_set' },
        { label: 'update_service_primary_task_set', value: 'update_service_primary_task_set' }
    ]}
>
<TabItem value="update_task_set">

Modifies a task set. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide.

```sql
UPDATE aws.ecs.task_sets
SET 
cluster = '{{ cluster }}',
service = '{{ service }}',
taskSet = '{{ taskSet }}',
scale = '{{ scale }}'
WHERE 
region = '{{ region }}' --required
AND cluster = '{{ cluster }}' --required
AND service = '{{ service }}' --required
AND taskSet = '{{ taskSet }}' --required
AND scale = '{{ scale }}' --required
RETURNING
task_set;
```
</TabItem>
<TabItem value="update_service_primary_task_set">

Modifies which task set in a service is the primary task set. Any parameters that are updated on the primary task set in a service will transition to the service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS Deployment Types in the Amazon Elastic Container Service Developer Guide.

```sql
UPDATE aws.ecs.task_sets
SET 
cluster = '{{ cluster }}',
service = '{{ service }}',
primaryTaskSet = '{{ primaryTaskSet }}'
WHERE 
region = '{{ region }}' --required
AND cluster = '{{ cluster }}' --required
AND service = '{{ service }}' --required
AND primaryTaskSet = '{{ primaryTaskSet }}' --required
RETURNING
task_set;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_task_set"
    values={[
        { label: 'delete_task_set', value: 'delete_task_set' }
    ]}
>
<TabItem value="delete_task_set">

Deletes a specified task set within a service. This is used when a service uses the EXTERNAL deployment controller type. For more information, see Amazon ECS deployment types in the Amazon Elastic Container Service Developer Guide.

```sql
DELETE FROM aws.ecs.task_sets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
