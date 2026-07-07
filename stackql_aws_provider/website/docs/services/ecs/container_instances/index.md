--- 
title: container_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - container_instances
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

Creates, updates, deletes, gets or lists a <code>container_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="container_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.container_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_container_instances"
    values={[
        { label: 'describe_container_instances', value: 'describe_container_instances' },
        { label: 'list_container_instances', value: 'list_container_instances' }
    ]}
>
<TabItem value="describe_container_instances">

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
    <td><CopyableCode code="containerInstances" /></td>
    <td><code>array</code></td>
    <td>The list of container instances.</td>
</tr>
<tr>
    <td><CopyableCode code="failures" /></td>
    <td><code>array</code></td>
    <td>Any failures associated with the call.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_container_instances">

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
    <td><CopyableCode code="container_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The list of container instances with full ARN entries for each container instance associated with the specified cluster.</td>
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
    <td><a href="#describe_container_instances"><CopyableCode code="describe_container_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes one or more container instances. Returns metadata about each container instance requested.</td>
</tr>
<tr>
    <td><a href="#list_container_instances"><CopyableCode code="list_container_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of container instances in a specified cluster. You can filter the results of a ListContainerInstances operation with cluster query language statements inside the filter parameter. For more information, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide.</td>
</tr>
<tr>
    <td><a href="#register_container_instance"><CopyableCode code="register_container_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent. Registers an EC2 instance into the specified cluster. This instance becomes available to place containers on.</td>
</tr>
<tr>
    <td><a href="#update_container_instances_state"><CopyableCode code="update_container_instances_state" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-containerInstances"><code>containerInstances</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Modifies the status of an Amazon ECS container instance. Once a container instance has reached an ACTIVE state, you can change the status of a container instance to DRAINING to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size. A container instance can't be changed to DRAINING until it has reached an ACTIVE status. If the instance is in any other status, an error will be received. When you set a container instance to DRAINING, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the PENDING state are stopped immediately. Service tasks on the container instance that are in the RUNNING state are stopped and replaced according to the service's deployment configuration parameters, minimumHealthyPercent and maximumPercent. You can change the deployment configuration of your service using UpdateService. If minimumHealthyPercent is below 100%, the scheduler can ignore desiredCount temporarily during task replacement. For example, desiredCount is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they're in the RUNNING state. Tasks for services that use a load balancer are considered healthy if they're in the RUNNING state and are reported as healthy by the load balancer. The maximumPercent parameter represents an upper limit on the number of running tasks during task replacement. You can use this to define the replacement batch size. For example, if desiredCount is four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained, provided that the cluster resources required to do this are available. If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped. Any PENDING or RUNNING tasks that do not belong to a service aren't affected. You must wait for them to finish or stop them manually. A container instance has completed draining when it has no more RUNNING tasks. You can verify this using ListTasks. When a container instance has been drained, you can set a container instance to ACTIVE status and once it has reached that status the Amazon ECS scheduler can begin scheduling tasks on the instance again.</td>
</tr>
<tr>
    <td><a href="#deregister_container_instance"><CopyableCode code="deregister_container_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks. If you intend to use the container instance for some other purpose after deregistration, we recommend that you stop all of the tasks running on the container instance before deregistration. That prevents any orphaned tasks from consuming resources. Deregistering a container instance removes the instance from a cluster, but it doesn't terminate the EC2 instance. If you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing. If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents aren't automatically deregistered when terminated).</td>
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
    defaultValue="describe_container_instances"
    values={[
        { label: 'describe_container_instances', value: 'describe_container_instances' },
        { label: 'list_container_instances', value: 'list_container_instances' }
    ]}
>
<TabItem value="describe_container_instances">

Describes one or more container instances. Returns metadata about each container instance requested.

```sql
SELECT
containerInstances,
failures
FROM aws.ecs.container_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_container_instances">

Returns a list of container instances in a specified cluster. You can filter the results of a ListContainerInstances operation with cluster query language statements inside the filter parameter. For more information, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide.

```sql
SELECT
container_instance_arn
FROM aws.ecs.container_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_container_instance"
    values={[
        { label: 'register_container_instance', value: 'register_container_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_container_instance">

This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent. Registers an EC2 instance into the specified cluster. This instance becomes available to place containers on.

```sql
INSERT INTO aws.ecs.container_instances (
cluster,
instanceIdentityDocument,
instanceIdentityDocumentSignature,
totalResources,
versionInfo,
containerInstanceArn,
attributes,
platformDevices,
tags,
region
)
SELECT 
'{{ cluster }}',
'{{ instanceIdentityDocument }}',
'{{ instanceIdentityDocumentSignature }}',
'{{ totalResources }}',
'{{ versionInfo }}',
'{{ containerInstanceArn }}',
'{{ attributes }}',
'{{ platformDevices }}',
'{{ tags }}',
'{{ region }}'
RETURNING
containerInstance
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: container_instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the container_instances resource.
    - name: cluster
      value: "{{ cluster }}"
      description: |
        The short name or full Amazon Resource Name (ARN) of the cluster to register your container instance with. If you do not specify a cluster, the default cluster is assumed.
    - name: instanceIdentityDocument
      value: "{{ instanceIdentityDocument }}"
      description: |
        The instance identity document for the EC2 instance to register. This document can be found by running the following command from the instance: curl http://169.254.169.254/latest/dynamic/instance-identity/document/
    - name: instanceIdentityDocumentSignature
      value: "{{ instanceIdentityDocumentSignature }}"
      description: |
        The instance identity document signature for the EC2 instance to register. This signature can be found by running the following command from the instance: curl http://169.254.169.254/latest/dynamic/instance-identity/signature/
    - name: totalResources
      description: |
        The resources available on the instance.
      value:
        - name: "{{ name }}"
          type_: "{{ type_ }}"
          doubleValue: {{ doubleValue }}
          longValue: {{ longValue }}
          integerValue: {{ integerValue }}
          stringSetValue: "{{ stringSetValue }}"
    - name: versionInfo
      description: |
        The version information for the Amazon ECS container agent and Docker daemon that runs on the container instance.
      value:
        agentVersion: "{{ agentVersion }}"
        agentHash: "{{ agentHash }}"
        dockerVersion: "{{ dockerVersion }}"
    - name: containerInstanceArn
      value: "{{ containerInstanceArn }}"
      description: |
        The ARN of the container instance (if it was previously registered).
    - name: attributes
      description: |
        The container instance attributes that this container instance supports.
      value:
        - name: "{{ name }}"
          value: "{{ value }}"
          targetType: "{{ targetType }}"
          targetId: "{{ targetId }}"
    - name: platformDevices
      description: |
        The devices that are available on the container instance. The only supported device type is a GPU.
      value:
        - id: "{{ id }}"
          type_: "{{ type_ }}"
    - name: tags
      description: |
        The metadata that you apply to the container instance to help you categorize and organize them. Each tag consists of a key and an optional value. You define both. The following basic restrictions apply to tags: Maximum number of tags per resource - 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8 Maximum value length - 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_container_instances_state"
    values={[
        { label: 'update_container_instances_state', value: 'update_container_instances_state' }
    ]}
>
<TabItem value="update_container_instances_state">

Modifies the status of an Amazon ECS container instance. Once a container instance has reached an ACTIVE state, you can change the status of a container instance to DRAINING to manually remove an instance from a cluster, for example to perform system updates, update the Docker daemon, or scale down the cluster size. A container instance can't be changed to DRAINING until it has reached an ACTIVE status. If the instance is in any other status, an error will be received. When you set a container instance to DRAINING, Amazon ECS prevents new tasks from being scheduled for placement on the container instance and replacement service tasks are started on other container instances in the cluster if the resources are available. Service tasks on the container instance that are in the PENDING state are stopped immediately. Service tasks on the container instance that are in the RUNNING state are stopped and replaced according to the service's deployment configuration parameters, minimumHealthyPercent and maximumPercent. You can change the deployment configuration of your service using UpdateService. If minimumHealthyPercent is below 100%, the scheduler can ignore desiredCount temporarily during task replacement. For example, desiredCount is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. If the minimum is 100%, the service scheduler can't remove existing tasks until the replacement tasks are considered healthy. Tasks for services that do not use a load balancer are considered healthy if they're in the RUNNING state. Tasks for services that use a load balancer are considered healthy if they're in the RUNNING state and are reported as healthy by the load balancer. The maximumPercent parameter represents an upper limit on the number of running tasks during task replacement. You can use this to define the replacement batch size. For example, if desiredCount is four tasks, a maximum of 200% starts four new tasks before stopping the four tasks to be drained, provided that the cluster resources required to do this are available. If the maximum is 100%, then replacement tasks can't start until the draining tasks have stopped. Any PENDING or RUNNING tasks that do not belong to a service aren't affected. You must wait for them to finish or stop them manually. A container instance has completed draining when it has no more RUNNING tasks. You can verify this using ListTasks. When a container instance has been drained, you can set a container instance to ACTIVE status and once it has reached that status the Amazon ECS scheduler can begin scheduling tasks on the instance again.

```sql
UPDATE aws.ecs.container_instances
SET 
cluster = '{{ cluster }}',
containerInstances = '{{ containerInstances }}',
status = '{{ status }}'
WHERE 
region = '{{ region }}' --required
AND containerInstances = '{{ containerInstances }}' --required
AND status = '{{ status }}' --required
RETURNING
containerInstances,
failures;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_container_instance"
    values={[
        { label: 'deregister_container_instance', value: 'deregister_container_instance' }
    ]}
>
<TabItem value="deregister_container_instance">

Deregisters an Amazon ECS container instance from the specified cluster. This instance is no longer available to run tasks. If you intend to use the container instance for some other purpose after deregistration, we recommend that you stop all of the tasks running on the container instance before deregistration. That prevents any orphaned tasks from consuming resources. Deregistering a container instance removes the instance from a cluster, but it doesn't terminate the EC2 instance. If you are finished using the instance, be sure to terminate it in the Amazon EC2 console to stop billing. If you terminate a running container instance, Amazon ECS automatically deregisters the instance from your cluster (stopped container instances or instances with disconnected agents aren't automatically deregistered when terminated).

```sql
DELETE FROM aws.ecs.container_instances
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
