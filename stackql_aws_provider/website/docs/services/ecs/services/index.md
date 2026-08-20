--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_services"
    values={[
        { label: 'describe_services', value: 'describe_services' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="describe_services">

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
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>The list of services described.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_services">

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
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>The list of full ARN entries for each service that's associated with the specified cluster.</td>
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
    <td><a href="#describe_services"><CopyableCode code="describe_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified services running in your cluster.</td>
</tr>
<tr>
    <td><a href="#list_services"><CopyableCode code="list_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of services. You can filter the results by cluster, launch type, and scheduling strategy.</td>
</tr>
<tr>
    <td><a href="#create_service"><CopyableCode code="create_service" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Runs and maintains your desired number of tasks from a specified task definition. If the number of tasks running in a service drops below the desiredCount, Amazon ECS runs another copy of the task in the specified cluster. To update an existing service, use UpdateService. On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition. Amazon Elastic Inference (EI) is no longer available to customers. In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind one or more load balancers. The load balancers distribute traffic across the tasks that are associated with the service. For more information, see Service load balancing in the Amazon Elastic Container Service Developer Guide. You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when creating or updating a service. volumeConfigurations is only supported for REPLICA service and not DAEMON service. For more information, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide. Tasks for services that don't use a load balancer are considered healthy if they're in the RUNNING state. Tasks for services that use a load balancer are considered healthy if they're in the RUNNING state and are reported as healthy by the load balancer. There are two service scheduler strategies available: REPLICA - The replica scheduling strategy places and maintains your desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. For more information, see Service scheduler concepts in the Amazon Elastic Container Service Developer Guide. DAEMON - The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks. It also stops tasks that don't meet the placement constraints. When using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. For more information, see Amazon ECS services in the Amazon Elastic Container Service Developer Guide. The deployment controller is the mechanism that determines how tasks are deployed for your service. The valid options are: ECS When you create a service which uses the ECS deployment controller, you can choose between the following deployment strategies (which you can set in the “strategy” field in “deploymentConfiguration”): : ROLLING: When you create a service which uses the rolling update (ROLLING) deployment strategy, the Amazon ECS service scheduler replaces the currently running tasks with new tasks. The number of tasks that Amazon ECS adds or removes from the service during a rolling update is controlled by the service deployment configuration. For more information, see Deploy Amazon ECS services by replacing tasks in the Amazon Elastic Container Service Developer Guide. Rolling update deployments are best suited for the following scenarios: Gradual service updates: You need to update your service incrementally without taking the entire service offline at once. Limited resource requirements: You want to avoid the additional resource costs of running two complete environments simultaneously (as required by blue/green deployments). Acceptable deployment time: Your application can tolerate a longer deployment process, as rolling updates replace tasks one by one. No need for instant roll back: Your service can tolerate a rollback process that takes minutes rather than seconds. Simple deployment process: You prefer a straightforward deployment approach without the complexity of managing multiple environments, target groups, and listeners. No load balancer requirement: Your service doesn't use or require a load balancer, Application Load Balancer, Network Load Balancer, or Service Connect (which are required for blue/green deployments). Stateful applications: Your application maintains state that makes it difficult to run two parallel environments. Cost sensitivity: You want to minimize deployment costs by not running duplicate environments during deployment. Rolling updates are the default deployment strategy for services and provide a balance between deployment safety and resource efficiency for many common application scenarios. BLUE_GREEN: A blue/green deployment strategy (BLUE_GREEN) is a release methodology that reduces downtime and risk by running two identical production environments called blue and green. With Amazon ECS blue/green deployments, you can validate new service revisions before directing production traffic to them. This approach provides a safer way to deploy changes with the ability to quickly roll back if needed. For more information, see Amazon ECS blue/green deployments in the Amazon Elastic Container Service Developer Guide. Amazon ECS blue/green deployments are best suited for the following scenarios: Service validation: When you need to validate new service revisions before directing production traffic to them Zero downtime: When your service requires zero-downtime deployments Instant roll back: When you need the ability to quickly roll back if issues are detected Load balancer requirement: When your service uses Application Load Balancer, Network Load Balancer, or Service Connect LINEAR: A linear deployment strategy (LINEAR) gradually shifts traffic from the current production environment to a new environment in equal percentage increments. With Amazon ECS linear deployments, you can control the pace of traffic shifting and validate new service revisions with increasing amounts of production traffic. Linear deployments are best suited for the following scenarios: Gradual validation: When you want to gradually validate your new service version with increasing traffic Performance monitoring: When you need time to monitor metrics and performance during the deployment Risk minimization: When you want to minimize risk by exposing the new version to production traffic incrementally Load balancer requirement: When your service uses Application Load Balancer or Service Connect CANARY: A canary deployment strategy (CANARY) shifts a small percentage of traffic to the new service revision first, then shifts the remaining traffic all at once after a specified time period. This allows you to test the new version with a subset of users before full deployment. Canary deployments are best suited for the following scenarios: Feature testing: When you want to test new features with a small subset of users before full rollout Production validation: When you need to validate performance and functionality with real production traffic Blast radius control: When you want to minimize blast radius if issues are discovered in the new version Load balancer requirement: When your service uses Application Load Balancer or Service Connect External Use a third-party deployment controller. Blue/green deployment (powered by CodeDeploy) CodeDeploy installs an updated version of the application as a new replacement task set and reroutes production traffic from the original application task set to the replacement task set. The original task set is terminated after a successful deployment. Use this deployment controller to verify a new deployment of a service before sending production traffic to it. When creating a service that uses the EXTERNAL deployment controller, you can specify only parameters that aren't controlled at the task set level. The only required parameter is the service name. You control your services using the CreateTaskSet. For more information, see Amazon ECS deployment types in the Amazon Elastic Container Service Developer Guide. When the service scheduler launches new tasks, it determines task placement. For information about task placement and task placement strategies, see Amazon ECS task placement in the Amazon Elastic Container Service Developer Guide</td>
</tr>
<tr>
    <td><a href="#update_service"><CopyableCode code="update_service" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Modifies the parameters of a service. On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition. For services using the rolling update (ECS) you can update the desired count, deployment configuration, network configuration, load balancers, service registries, enable ECS managed tags option, propagate tags option, task placement constraints and strategies, and task definition. When you update any of these parameters, Amazon ECS starts new tasks with the new configuration. You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when starting or running a task, or when creating or updating a service. For more information, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide. You can update your volume configurations and trigger a new deployment. volumeConfigurations is only supported for REPLICA service and not DAEMON service. If you leave volumeConfigurations null, it doesn't trigger a new deployment. For more information on volumes, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide. For services using the blue/green (CODE_DEPLOY) deployment controller, only the desired count, deployment configuration, health check grace period, task placement constraints and strategies, enable ECS managed tags option, and propagate tags can be updated using this API. If the network configuration, platform version, task definition, or load balancer need to be updated, create a new CodeDeploy deployment. For more information, see CreateDeployment in the CodeDeploy API Reference. For services using an external deployment controller, you can update only the desired count, task placement constraints and strategies, health check grace period, enable ECS managed tags option, and propagate tags option, using this API. If the launch type, load balancer, network configuration, platform version, or task definition need to be updated, create a new task set For more information, see CreateTaskSet. You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new desiredCount parameter. You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when starting or running a task, or when creating or updating a service. For more information, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide. If you have updated the container image of your application, you can create a new task definition with that image and deploy it to your service. The service scheduler uses the minimum healthy percent and maximum percent parameters (in the service's deployment configuration) to determine the deployment strategy. If your updated Docker image uses the same tag as what is in the existing task definition for your service (for example, my_image:latest), you don't need to create a new revision of your task definition. You can update the service using the forceNewDeployment option. The new tasks launched by the deployment pull the current image/tag combination from your repository when they start. You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, minimumHealthyPercent and maximumPercent, to determine the deployment strategy. If minimumHealthyPercent is below 100%, the scheduler can ignore desiredCount temporarily during a deployment. For example, if desiredCount is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that don't use a load balancer are considered healthy if they're in the RUNNING state. Tasks for services that use a load balancer are considered healthy if they're in the RUNNING state and are reported as healthy by the load balancer. The maximumPercent parameter represents an upper limit on the number of running tasks during a deployment. You can use it to define the deployment batch size. For example, if desiredCount is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). When UpdateService stops a task during a deployment, the equivalent of docker stop is issued to the containers running in the task. This results in a SIGTERM and a 30-second timeout. After this, SIGKILL is sent and the containers are forcibly stopped. If the container handles the SIGTERM gracefully and exits within 30 seconds from receiving it, no SIGKILL is sent. When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic. Determine which of the container instances in your cluster can support your service's task definition. For example, they have the required CPU, memory, ports, and container instance attributes. By default, the service scheduler attempts to balance tasks across Availability Zones in this manner even though you can choose a different placement strategy. Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement. Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service. When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic: Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination. Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.</td>
</tr>
<tr>
    <td><a href="#delete_service"><CopyableCode code="delete_service" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you can't delete it, and you must update the service to a desired task count of zero. For more information, see UpdateService. When you delete a service, if there are still running tasks that require cleanup, the service status moves from ACTIVE to DRAINING, and the service is no longer visible in the console or in the ListServices API operation. After all tasks have transitioned to either STOPPING or STOPPED status, the service status moves from DRAINING to INACTIVE. Services in the DRAINING or INACTIVE status can still be viewed with the DescribeServices API operation. However, in the future, INACTIVE services may be cleaned up and purged from Amazon ECS record keeping, and DescribeServices calls on those services return a ServiceNotFoundException error. If you attempt to create a new service with the same name as an existing service in either ACTIVE or DRAINING status, you receive an error.</td>
</tr>
<tr>
    <td><a href="#stop_service_deployment"><CopyableCode code="stop_service_deployment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceDeploymentArn"><code>serviceDeploymentArn</code></a></td>
    <td></td>
    <td>Stops an ongoing service deployment. The following stop types are avaiable: ROLLBACK - This option rolls back the service deployment to the previous service revision. You can use this option even if you didn't configure the service deployment for the rollback option. For more information, see Stopping Amazon ECS service deployments in the Amazon Elastic Container Service Developer Guide.</td>
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
    defaultValue="describe_services"
    values={[
        { label: 'describe_services', value: 'describe_services' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="describe_services">

Describes the specified services running in your cluster.

```sql
SELECT
failures,
services
FROM aws.ecs.services
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_services">

Returns a list of services. You can filter the results by cluster, launch type, and scheduling strategy.

```sql
SELECT
service_arn
FROM aws.ecs.services
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service"
    values={[
        { label: 'create_service', value: 'create_service' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service">

Runs and maintains your desired number of tasks from a specified task definition. If the number of tasks running in a service drops below the desiredCount, Amazon ECS runs another copy of the task in the specified cluster. To update an existing service, use UpdateService. On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition. Amazon Elastic Inference (EI) is no longer available to customers. In addition to maintaining the desired count of tasks in your service, you can optionally run your service behind one or more load balancers. The load balancers distribute traffic across the tasks that are associated with the service. For more information, see Service load balancing in the Amazon Elastic Container Service Developer Guide. You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when creating or updating a service. volumeConfigurations is only supported for REPLICA service and not DAEMON service. For more information, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide. Tasks for services that don't use a load balancer are considered healthy if they're in the RUNNING state. Tasks for services that use a load balancer are considered healthy if they're in the RUNNING state and are reported as healthy by the load balancer. There are two service scheduler strategies available: REPLICA - The replica scheduling strategy places and maintains your desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. For more information, see Service scheduler concepts in the Amazon Elastic Container Service Developer Guide. DAEMON - The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks. It also stops tasks that don't meet the placement constraints. When using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. For more information, see Amazon ECS services in the Amazon Elastic Container Service Developer Guide. The deployment controller is the mechanism that determines how tasks are deployed for your service. The valid options are: ECS When you create a service which uses the ECS deployment controller, you can choose between the following deployment strategies (which you can set in the “strategy” field in “deploymentConfiguration”): : ROLLING: When you create a service which uses the rolling update (ROLLING) deployment strategy, the Amazon ECS service scheduler replaces the currently running tasks with new tasks. The number of tasks that Amazon ECS adds or removes from the service during a rolling update is controlled by the service deployment configuration. For more information, see Deploy Amazon ECS services by replacing tasks in the Amazon Elastic Container Service Developer Guide. Rolling update deployments are best suited for the following scenarios: Gradual service updates: You need to update your service incrementally without taking the entire service offline at once. Limited resource requirements: You want to avoid the additional resource costs of running two complete environments simultaneously (as required by blue/green deployments). Acceptable deployment time: Your application can tolerate a longer deployment process, as rolling updates replace tasks one by one. No need for instant roll back: Your service can tolerate a rollback process that takes minutes rather than seconds. Simple deployment process: You prefer a straightforward deployment approach without the complexity of managing multiple environments, target groups, and listeners. No load balancer requirement: Your service doesn't use or require a load balancer, Application Load Balancer, Network Load Balancer, or Service Connect (which are required for blue/green deployments). Stateful applications: Your application maintains state that makes it difficult to run two parallel environments. Cost sensitivity: You want to minimize deployment costs by not running duplicate environments during deployment. Rolling updates are the default deployment strategy for services and provide a balance between deployment safety and resource efficiency for many common application scenarios. BLUE_GREEN: A blue/green deployment strategy (BLUE_GREEN) is a release methodology that reduces downtime and risk by running two identical production environments called blue and green. With Amazon ECS blue/green deployments, you can validate new service revisions before directing production traffic to them. This approach provides a safer way to deploy changes with the ability to quickly roll back if needed. For more information, see Amazon ECS blue/green deployments in the Amazon Elastic Container Service Developer Guide. Amazon ECS blue/green deployments are best suited for the following scenarios: Service validation: When you need to validate new service revisions before directing production traffic to them Zero downtime: When your service requires zero-downtime deployments Instant roll back: When you need the ability to quickly roll back if issues are detected Load balancer requirement: When your service uses Application Load Balancer, Network Load Balancer, or Service Connect LINEAR: A linear deployment strategy (LINEAR) gradually shifts traffic from the current production environment to a new environment in equal percentage increments. With Amazon ECS linear deployments, you can control the pace of traffic shifting and validate new service revisions with increasing amounts of production traffic. Linear deployments are best suited for the following scenarios: Gradual validation: When you want to gradually validate your new service version with increasing traffic Performance monitoring: When you need time to monitor metrics and performance during the deployment Risk minimization: When you want to minimize risk by exposing the new version to production traffic incrementally Load balancer requirement: When your service uses Application Load Balancer or Service Connect CANARY: A canary deployment strategy (CANARY) shifts a small percentage of traffic to the new service revision first, then shifts the remaining traffic all at once after a specified time period. This allows you to test the new version with a subset of users before full deployment. Canary deployments are best suited for the following scenarios: Feature testing: When you want to test new features with a small subset of users before full rollout Production validation: When you need to validate performance and functionality with real production traffic Blast radius control: When you want to minimize blast radius if issues are discovered in the new version Load balancer requirement: When your service uses Application Load Balancer or Service Connect External Use a third-party deployment controller. Blue/green deployment (powered by CodeDeploy) CodeDeploy installs an updated version of the application as a new replacement task set and reroutes production traffic from the original application task set to the replacement task set. The original task set is terminated after a successful deployment. Use this deployment controller to verify a new deployment of a service before sending production traffic to it. When creating a service that uses the EXTERNAL deployment controller, you can specify only parameters that aren't controlled at the task set level. The only required parameter is the service name. You control your services using the CreateTaskSet. For more information, see Amazon ECS deployment types in the Amazon Elastic Container Service Developer Guide. When the service scheduler launches new tasks, it determines task placement. For information about task placement and task placement strategies, see Amazon ECS task placement in the Amazon Elastic Container Service Developer Guide

```sql
INSERT INTO aws.ecs.services (
cluster,
serviceName,
taskDefinition,
availabilityZoneRebalancing,
loadBalancers,
serviceRegistries,
desiredCount,
clientToken,
launchType,
capacityProviderStrategy,
platformVersion,
role,
deploymentConfiguration,
placementConstraints,
placementStrategy,
networkConfiguration,
healthCheckGracePeriodSeconds,
schedulingStrategy,
deploymentController,
tags,
enableECSManagedTags,
propagateTags,
enableExecuteCommand,
serviceConnectConfiguration,
volumeConfigurations,
vpcLatticeConfigurations,
monitoring,
region
)
SELECT 
'{{ cluster }}',
'{{ serviceName }}' /* required */,
'{{ taskDefinition }}',
'{{ availabilityZoneRebalancing }}',
'{{ loadBalancers }}',
'{{ serviceRegistries }}',
{{ desiredCount }},
'{{ clientToken }}',
'{{ launchType }}',
'{{ capacityProviderStrategy }}',
'{{ platformVersion }}',
'{{ role }}',
'{{ deploymentConfiguration }}',
'{{ placementConstraints }}',
'{{ placementStrategy }}',
'{{ networkConfiguration }}',
{{ healthCheckGracePeriodSeconds }},
'{{ schedulingStrategy }}',
'{{ deploymentController }}',
'{{ tags }}',
{{ enableECSManagedTags }},
'{{ propagateTags }}',
{{ enableExecuteCommand }},
'{{ serviceConnectConfiguration }}',
'{{ volumeConfigurations }}',
'{{ vpcLatticeConfigurations }}',
'{{ monitoring }}',
'{{ region }}'
RETURNING
service
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: services
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the services resource.
    - name: cluster
      value: "{{ cluster }}"
      description: |
        The short name or full Amazon Resource Name (ARN) of the cluster that you run your service on. If you do not specify a cluster, the default cluster is assumed.
    - name: serviceName
      value: "{{ serviceName }}"
      description: |
        The name of your service. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions.
    - name: taskDefinition
      value: "{{ taskDefinition }}"
      description: |
        The family and revision (family:revision) or full ARN of the task definition to run in your service. If a revision isn't specified, the latest ACTIVE revision is used. A task definition must be specified if the service uses either the ECS or CODE_DEPLOY deployment controllers. For more information about deployment types, see Amazon ECS deployment types.
    - name: availabilityZoneRebalancing
      value: "{{ availabilityZoneRebalancing }}"
      description: |
        Indicates whether to use Availability Zone rebalancing for the service. For more information, see Balancing an Amazon ECS service across Availability Zones in the Amazon Elastic Container Service Developer Guide . The default behavior of AvailabilityZoneRebalancing differs between create and update requests: For create service requests, when no value is specified for AvailabilityZoneRebalancing, Amazon ECS defaults the value to ENABLED. For update service requests, when no value is specified for AvailabilityZoneRebalancing, Amazon ECS defaults to the existing service’s AvailabilityZoneRebalancing value. If the service never had an AvailabilityZoneRebalancing value set, Amazon ECS treats this as DISABLED.
      valid_values: ['ENABLED', 'DISABLED']
    - name: loadBalancers
      description: |
        A load balancer object representing the load balancers to use with your service. For more information, see Service load balancing in the Amazon Elastic Container Service Developer Guide. If the service uses the ECS deployment controller and using either an Application Load Balancer or Network Load Balancer, you must specify one or more target group ARNs to attach to the service. The service-linked role is required for services that use multiple target groups. For more information, see Using service-linked roles for Amazon ECS in the Amazon Elastic Container Service Developer Guide. If the service uses the CODE_DEPLOY deployment controller, the service is required to use either an Application Load Balancer or Network Load Balancer. When creating an CodeDeploy deployment group, you specify two target groups (referred to as a targetGroupPair). During a deployment, CodeDeploy determines which task set in your service has the status PRIMARY, and it associates one target group with it. Then, it also associates the other target group with the replacement task set. The load balancer can also have up to two listeners: a required listener for production traffic and an optional listener that you can use to perform validation tests with Lambda functions before routing production traffic to it. If you use the CODE_DEPLOY deployment controller, these values can be changed when updating the service. For Application Load Balancers and Network Load Balancers, this object must contain the load balancer target group ARN, the container name, and the container port to access from the load balancer. The container name must be as it appears in a container definition. The load balancer name parameter must be omitted. When a task from this service is placed on a container instance, the container instance and port combination is registered as a target in the target group that's specified here. For Classic Load Balancers, this object must contain the load balancer name, the container name , and the container port to access from the load balancer. The container name must be as it appears in a container definition. The target group ARN parameter must be omitted. When a task from this service is placed on a container instance, the container instance is registered with the load balancer that's specified here. Services with tasks that use the awsvpc network mode (for example, those with the Fargate launch type) only support Application Load Balancers and Network Load Balancers. Classic Load Balancers aren't supported. Also, when you create any target groups for these services, you must choose ip as the target type, not instance. This is because tasks that use the awsvpc network mode are associated with an elastic network interface, not an Amazon EC2 instance.
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
        The details of the service discovery registry to associate with this service. For more information, see Service discovery. Each service may be associated with one service registry. Multiple service registries for each service isn't supported.
      value:
        - registryArn: "{{ registryArn }}"
          port: {{ port }}
          containerName: "{{ containerName }}"
          containerPort: {{ containerPort }}
    - name: desiredCount
      value: {{ desiredCount }}
      description: |
        The number of instantiations of the specified task definition to place and keep running in your service. This is required if schedulingStrategy is REPLICA or isn't specified. If schedulingStrategy is DAEMON then this isn't required.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        An identifier that you provide to ensure the idempotency of the request. It must be unique and is case sensitive. Up to 36 ASCII characters in the range of 33-126 (inclusive) are allowed.
    - name: launchType
      value: "{{ launchType }}"
      description: |
        The infrastructure that you run your service on. For more information, see Amazon ECS launch types in the Amazon Elastic Container Service Developer Guide. If you want to use Amazon ECS Managed Instances, you must use the capacityProviderStrategy request parameter and omit the launchType request parameter. The FARGATE launch type runs your tasks on Fargate On-Demand infrastructure. Fargate Spot infrastructure is available for use but a capacity provider strategy must be used. For more information, see Fargate capacity providers in the Amazon ECS Developer Guide. The EC2 launch type runs your tasks on Amazon EC2 instances registered to your cluster. The EXTERNAL launch type runs your tasks on your on-premises server or virtual machine (VM) capacity registered to your cluster. A service can use either a launch type or a capacity provider strategy. If a launchType is specified, the capacityProviderStrategy parameter must be omitted.
      valid_values: ['EC2', 'FARGATE', 'EXTERNAL', 'MANAGED_INSTANCES']
    - name: capacityProviderStrategy
      description: |
        The capacity provider strategy to use for the service. If you want to use Amazon ECS Managed Instances, you must use the capacityProviderStrategy request parameter and omit the launchType request parameter. If a capacityProviderStrategy is specified, the launchType parameter must be omitted. If no capacityProviderStrategy or launchType is specified, the defaultCapacityProviderStrategy for the cluster is used. A capacity provider strategy can contain a maximum of 20 capacity providers.
      value:
        - capacityProvider: "{{ capacityProvider }}"
          weight: {{ weight }}
          base: {{ base }}
    - name: platformVersion
      value: "{{ platformVersion }}"
      description: |
        The platform version that your tasks in the service are running on. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the LATEST platform version is used. For more information, see Fargate platform versions in the Amazon Elastic Container Service Developer Guide.
    - name: role
      value: "{{ role }}"
      description: |
        The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is only permitted if you are using a load balancer with your service and your task definition doesn't use the awsvpc network mode. If you specify the role parameter, you must also specify a load balancer object with the loadBalancers parameter. If your account has already created the Amazon ECS service-linked role, that role is used for your service unless you specify a role here. The service-linked role is required if your task definition uses the awsvpc network mode or if the service is configured to use service discovery, an external deployment controller, multiple target groups, or Elastic Inference accelerators in which case you don't specify a role here. For more information, see Using service-linked roles for Amazon ECS in the Amazon Elastic Container Service Developer Guide. If your specified role has a path other than /, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path. For example, if a role with the name bar has a path of /foo/ then you would specify /foo/bar as the role name. For more information, see Friendly names and paths in the IAM User Guide.
    - name: deploymentConfiguration
      description: |
        Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
      value:
        deploymentCircuitBreaker:
          enable: {{ enable }}
          rollback: {{ rollback }}
          resetOnHealthyTask: {{ resetOnHealthyTask }}
          thresholdConfiguration:
            type_: "{{ type_ }}"
            value: {{ value }}
        maximumPercent: {{ maximumPercent }}
        minimumHealthyPercent: {{ minimumHealthyPercent }}
        alarms:
          alarmNames:
            - "{{ alarmNames }}"
          rollback: {{ rollback }}
          enable: {{ enable }}
        strategy: "{{ strategy }}"
        bakeTimeInMinutes: {{ bakeTimeInMinutes }}
        lifecycleHooks:
          - targetType: "{{ targetType }}"
            hookTargetArn: "{{ hookTargetArn }}"
            roleArn: "{{ roleArn }}"
            lifecycleStages: "{{ lifecycleStages }}"
            hookDetails: "{{ hookDetails }}"
            timeoutConfiguration:
              timeoutInMinutes: {{ timeoutInMinutes }}
              action: "{{ action }}"
        linearConfiguration:
          stepPercent: {{ stepPercent }}
          stepBakeTimeInMinutes: {{ stepBakeTimeInMinutes }}
        canaryConfiguration:
          canaryPercent: {{ canaryPercent }}
          canaryBakeTimeInMinutes: {{ canaryBakeTimeInMinutes }}
    - name: placementConstraints
      description: |
        An array of placement constraint objects to use for tasks in your service. You can specify a maximum of 10 constraints for each task. This limit includes constraints in the task definition and those specified at runtime.
      value:
        - type_: "{{ type_ }}"
          expression: "{{ expression }}"
    - name: placementStrategy
      description: |
        The placement strategy objects to use for tasks in your service. You can specify a maximum of 5 strategy rules for each service.
      value:
        - type_: "{{ type_ }}"
          field: "{{ field }}"
    - name: networkConfiguration
      description: |
        The network configuration for the service. This parameter is required for task definitions that use the awsvpc network mode to receive their own elastic network interface, and it isn't supported for other network modes. For more information, see Task networking in the Amazon Elastic Container Service Developer Guide.
      value:
        awsvpcConfiguration:
          subnets:
            - "{{ subnets }}"
          securityGroups:
            - "{{ securityGroups }}"
          assignPublicIp: "{{ assignPublicIp }}"
    - name: healthCheckGracePeriodSeconds
      value: {{ healthCheckGracePeriodSeconds }}
      description: |
        The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing, VPC Lattice, and container health checks after a task has first started. If you do not specify a health check grace period value, the default value of 0 is used. If you do not use any of the health checks, then healthCheckGracePeriodSeconds is unused. If your service has more running tasks than desired, unhealthy tasks in the grace period might be stopped to reach the desired count.
    - name: schedulingStrategy
      value: "{{ schedulingStrategy }}"
      description: |
        The scheduling strategy to use for the service. For more information, see Services. There are two service scheduler strategies available: REPLICA-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. This scheduler strategy is required if the service uses the CODE_DEPLOY or EXTERNAL deployment controller types. DAEMON-The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks and will stop tasks that don't meet the placement constraints. When you're using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies. Tasks using the Fargate launch type or the CODE_DEPLOY or EXTERNAL deployment controller types don't support the DAEMON scheduling strategy.
      valid_values: ['REPLICA', 'DAEMON']
    - name: deploymentController
      description: |
        The deployment controller to use for the service. If no deployment controller is specified, the default value of ECS is used.
      value:
        type_: "{{ type_ }}"
    - name: tags
      description: |
        The metadata that you apply to the service to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. When a service is deleted, the tags are deleted as well. The following basic restrictions apply to tags: Maximum number of tags per resource - 50 For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8 Maximum value length - 256 Unicode characters in UTF-8 If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: enableECSManagedTags
      value: {{ enableECSManagedTags }}
      description: |
        Specifies whether to turn on Amazon ECS managed tags for the tasks within the service. For more information, see Tagging your Amazon ECS resources in the Amazon Elastic Container Service Developer Guide. When you use Amazon ECS managed tags, you must set the propagateTags request parameter.
    - name: propagateTags
      value: "{{ propagateTags }}"
      description: |
        Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action. You must set this to a value other than NONE when you use Cost Explorer. For more information, see Amazon ECS usage reports in the Amazon Elastic Container Service Developer Guide. The default is NONE.
      valid_values: ['TASK_DEFINITION', 'SERVICE', 'NONE']
    - name: enableExecuteCommand
      value: {{ enableExecuteCommand }}
      description: |
        Determines whether the execute command functionality is turned on for the service. If true, this enables execute command functionality on all containers in the service tasks.
    - name: serviceConnectConfiguration
      description: |
        The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace. Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see Service Connect in the Amazon Elastic Container Service Developer Guide.
      value:
        enabled: {{ enabled }}
        namespace: "{{ namespace }}"
        services:
          - portName: "{{ portName }}"
            discoveryName: "{{ discoveryName }}"
            clientAliases: "{{ clientAliases }}"
            ingressPortOverride: {{ ingressPortOverride }}
            timeout:
              idleTimeoutSeconds: {{ idleTimeoutSeconds }}
              perRequestTimeoutSeconds: {{ perRequestTimeoutSeconds }}
            tls:
              issuerCertificateAuthority:
                awsPcaAuthorityArn: "{{ awsPcaAuthorityArn }}"
              kmsKey: "{{ kmsKey }}"
              roleArn: "{{ roleArn }}"
        logConfiguration:
          logDriver: "{{ logDriver }}"
          options: "{{ options }}"
          secretOptions:
            - name: "{{ name }}"
              valueFrom: "{{ valueFrom }}"
        accessLogConfiguration:
          format_: "{{ format_ }}"
          includeQueryParameters: "{{ includeQueryParameters }}"
    - name: volumeConfigurations
      description: |
        The configuration for a volume specified in the task definition as a volume that is configured at launch time. Currently, the only supported volume type is an Amazon EBS volume.
      value:
        - name: "{{ name }}"
          managedEBSVolume:
            encrypted: {{ encrypted }}
            kmsKeyId: "{{ kmsKeyId }}"
            volumeType: "{{ volumeType }}"
            sizeInGiB: {{ sizeInGiB }}
            snapshotId: "{{ snapshotId }}"
            volumeInitializationRate: {{ volumeInitializationRate }}
            iops: {{ iops }}
            throughput: {{ throughput }}
            tagSpecifications:
              - resourceType: "{{ resourceType }}"
                tags: "{{ tags }}"
                propagateTags: "{{ propagateTags }}"
            roleArn: "{{ roleArn }}"
            filesystemType: "{{ filesystemType }}"
    - name: vpcLatticeConfigurations
      description: |
        The VPC Lattice configuration for the service being created.
      value:
        - roleArn: "{{ roleArn }}"
          targetGroupArn: "{{ targetGroupArn }}"
          portName: "{{ portName }}"
    - name: monitoring
      description: |
        The optional monitoring configuration for the service, which defines the resolution for the service-level CPUUtilization and MemoryUtilization Amazon CloudWatch metrics. When not specified, Amazon ECS uses the default resolution of 60 seconds.
      value:
        metricConfigurations:
          - metricNames: "{{ metricNames }}"
            resolutionSeconds: {{ resolutionSeconds }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service"
    values={[
        { label: 'update_service', value: 'update_service' }
    ]}
>
<TabItem value="update_service">

Modifies the parameters of a service. On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition. For services using the rolling update (ECS) you can update the desired count, deployment configuration, network configuration, load balancers, service registries, enable ECS managed tags option, propagate tags option, task placement constraints and strategies, and task definition. When you update any of these parameters, Amazon ECS starts new tasks with the new configuration. You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when starting or running a task, or when creating or updating a service. For more information, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide. You can update your volume configurations and trigger a new deployment. volumeConfigurations is only supported for REPLICA service and not DAEMON service. If you leave volumeConfigurations null, it doesn't trigger a new deployment. For more information on volumes, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide. For services using the blue/green (CODE_DEPLOY) deployment controller, only the desired count, deployment configuration, health check grace period, task placement constraints and strategies, enable ECS managed tags option, and propagate tags can be updated using this API. If the network configuration, platform version, task definition, or load balancer need to be updated, create a new CodeDeploy deployment. For more information, see CreateDeployment in the CodeDeploy API Reference. For services using an external deployment controller, you can update only the desired count, task placement constraints and strategies, health check grace period, enable ECS managed tags option, and propagate tags option, using this API. If the launch type, load balancer, network configuration, platform version, or task definition need to be updated, create a new task set For more information, see CreateTaskSet. You can add to or subtract from the number of instantiations of a task definition in a service by specifying the cluster that the service is running in and a new desiredCount parameter. You can attach Amazon EBS volumes to Amazon ECS tasks by configuring the volume when starting or running a task, or when creating or updating a service. For more information, see Amazon EBS volumes in the Amazon Elastic Container Service Developer Guide. If you have updated the container image of your application, you can create a new task definition with that image and deploy it to your service. The service scheduler uses the minimum healthy percent and maximum percent parameters (in the service's deployment configuration) to determine the deployment strategy. If your updated Docker image uses the same tag as what is in the existing task definition for your service (for example, my_image:latest), you don't need to create a new revision of your task definition. You can update the service using the forceNewDeployment option. The new tasks launched by the deployment pull the current image/tag combination from your repository when they start. You can also update the deployment configuration of a service. When a deployment is triggered by updating the task definition of a service, the service scheduler uses the deployment configuration parameters, minimumHealthyPercent and maximumPercent, to determine the deployment strategy. If minimumHealthyPercent is below 100%, the scheduler can ignore desiredCount temporarily during a deployment. For example, if desiredCount is four tasks, a minimum of 50% allows the scheduler to stop two existing tasks before starting two new tasks. Tasks for services that don't use a load balancer are considered healthy if they're in the RUNNING state. Tasks for services that use a load balancer are considered healthy if they're in the RUNNING state and are reported as healthy by the load balancer. The maximumPercent parameter represents an upper limit on the number of running tasks during a deployment. You can use it to define the deployment batch size. For example, if desiredCount is four tasks, a maximum of 200% starts four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). When UpdateService stops a task during a deployment, the equivalent of docker stop is issued to the containers running in the task. This results in a SIGTERM and a 30-second timeout. After this, SIGKILL is sent and the containers are forcibly stopped. If the container handles the SIGTERM gracefully and exits within 30 seconds from receiving it, no SIGKILL is sent. When the service scheduler launches new tasks, it determines task placement in your cluster with the following logic. Determine which of the container instances in your cluster can support your service's task definition. For example, they have the required CPU, memory, ports, and container instance attributes. By default, the service scheduler attempts to balance tasks across Availability Zones in this manner even though you can choose a different placement strategy. Sort the valid container instances by the fewest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have zero, valid container instances in either zone B or C are considered optimal for placement. Place the new service task on a valid container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the fewest number of running tasks for this service. When the service scheduler stops running tasks, it attempts to maintain balance across the Availability Zones in your cluster using the following logic: Sort the container instances by the largest number of running tasks for this service in the same Availability Zone as the instance. For example, if zone A has one running service task and zones B and C each have two, container instances in either zone B or C are considered optimal for termination. Stop the task on a container instance in an optimal Availability Zone (based on the previous steps), favoring container instances with the largest number of running tasks for this service.

```sql
UPDATE aws.ecs.services
SET 
cluster = '{{ cluster }}',
service = '{{ service }}',
desiredCount = {{ desiredCount }},
taskDefinition = '{{ taskDefinition }}',
capacityProviderStrategy = '{{ capacityProviderStrategy }}',
deploymentConfiguration = '{{ deploymentConfiguration }}',
availabilityZoneRebalancing = '{{ availabilityZoneRebalancing }}',
networkConfiguration = '{{ networkConfiguration }}',
placementConstraints = '{{ placementConstraints }}',
placementStrategy = '{{ placementStrategy }}',
platformVersion = '{{ platformVersion }}',
forceNewDeployment = {{ forceNewDeployment }},
healthCheckGracePeriodSeconds = {{ healthCheckGracePeriodSeconds }},
deploymentController = '{{ deploymentController }}',
enableExecuteCommand = {{ enableExecuteCommand }},
enableECSManagedTags = {{ enableECSManagedTags }},
loadBalancers = '{{ loadBalancers }}',
propagateTags = '{{ propagateTags }}',
serviceRegistries = '{{ serviceRegistries }}',
serviceConnectConfiguration = '{{ serviceConnectConfiguration }}',
volumeConfigurations = '{{ volumeConfigurations }}',
vpcLatticeConfigurations = '{{ vpcLatticeConfigurations }}',
monitoring = '{{ monitoring }}'
WHERE 
region = '{{ region }}' --required
AND service = '{{ service }}' --required
RETURNING
service;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service"
    values={[
        { label: 'delete_service', value: 'delete_service' }
    ]}
>
<TabItem value="delete_service">

Deletes a specified service within a cluster. You can delete a service if you have no running tasks in it and the desired task count is zero. If the service is actively maintaining tasks, you can't delete it, and you must update the service to a desired task count of zero. For more information, see UpdateService. When you delete a service, if there are still running tasks that require cleanup, the service status moves from ACTIVE to DRAINING, and the service is no longer visible in the console or in the ListServices API operation. After all tasks have transitioned to either STOPPING or STOPPED status, the service status moves from DRAINING to INACTIVE. Services in the DRAINING or INACTIVE status can still be viewed with the DescribeServices API operation. However, in the future, INACTIVE services may be cleaned up and purged from Amazon ECS record keeping, and DescribeServices calls on those services return a ServiceNotFoundException error. If you attempt to create a new service with the same name as an existing service in either ACTIVE or DRAINING status, you receive an error.

```sql
DELETE FROM aws.ecs.services
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="stop_service_deployment"
    values={[
        { label: 'stop_service_deployment', value: 'stop_service_deployment' }
    ]}
>
<TabItem value="stop_service_deployment">

Stops an ongoing service deployment. The following stop types are avaiable: ROLLBACK - This option rolls back the service deployment to the previous service revision. You can use this option even if you didn't configure the service deployment for the rollback option. For more information, see Stopping Amazon ECS service deployments in the Amazon Elastic Container Service Developer Guide.

```sql
EXEC aws.ecs.services.stop_service_deployment 
@region='{{ region }}' --required 
@@json=
'{
"serviceDeploymentArn": "{{ serviceDeploymentArn }}", 
"stopType": "{{ stopType }}"
}'
;
```
</TabItem>
</Tabs>
