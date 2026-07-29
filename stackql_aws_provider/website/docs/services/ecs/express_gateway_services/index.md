--- 
title: express_gateway_services
hide_title: false
hide_table_of_contents: false
keywords:
  - express_gateway_services
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

Creates, updates, deletes, gets or lists an <code>express_gateway_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="express_gateway_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.express_gateway_services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_express_gateway_service"
    values={[
        { label: 'describe_express_gateway_service', value: 'describe_express_gateway_service' }
    ]}
>
<TabItem value="describe_express_gateway_service">

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
    <td><CopyableCode code="active_configurations" /></td>
    <td><code>array</code></td>
    <td>The list of active service configurations for the Express service.</td>
</tr>
<tr>
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td>The short name or full ARN of the cluster that hosts the Express service.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp for when the Express service was created.</td>
</tr>
<tr>
    <td><CopyableCode code="current_deployment" /></td>
    <td><code>string</code></td>
    <td>The current deployment configuration for the Express service.</td>
</tr>
<tr>
    <td><CopyableCode code="infrastructure_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the infrastructure role that manages Amazon Web Services resources for the Express service.</td>
</tr>
<tr>
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN that identifies the Express service.</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Express service.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the Express service.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The metadata applied to the Express service.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp for when the Express service was last updated.</td>
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
    <td><a href="#describe_express_gateway_service"><CopyableCode code="describe_express_gateway_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about an Express service, including current status, configuration, managed infrastructure, and service revisions. Returns comprehensive service details, active service revisions, ingress paths with endpoints, and managed Amazon Web Services resource status including load balancers and auto-scaling policies. Use the include parameter to retrieve additional information such as resource tags.</td>
</tr>
<tr>
    <td><a href="#create_express_gateway_service"><CopyableCode code="create_express_gateway_service" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-executionRoleArn"><code>executionRoleArn</code></a>, <a href="#parameter-infrastructureRoleArn"><code>infrastructureRoleArn</code></a>, <a href="#parameter-primaryContainer"><code>primaryContainer</code></a></td>
    <td></td>
    <td>Creates an Express service that simplifies deploying containerized web applications on Amazon ECS with managed Amazon Web Services infrastructure. This operation provisions and configures Application Load Balancers, target groups, security groups, and auto-scaling policies automatically. Specify a primary container configuration with your application image and basic settings. Amazon ECS creates the necessary Amazon Web Services resources for traffic distribution, health monitoring, network access control, and capacity management. Provide an execution role for task operations and an infrastructure role for managing Amazon Web Services resources on your behalf.</td>
</tr>
<tr>
    <td><a href="#update_express_gateway_service"><CopyableCode code="update_express_gateway_service" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a></td>
    <td></td>
    <td>Updates an existing Express service configuration. Modifies container settings, resource allocation, auto-scaling configuration, and other service parameters without recreating the service. Amazon ECS creates a new service revision with updated configuration and performs a rolling deployment to replace existing tasks. The service remains available during updates, ensuring zero-downtime deployments. Some parameters like the infrastructure role cannot be modified after service creation and require creating a new service.</td>
</tr>
<tr>
    <td><a href="#delete_express_gateway_service"><CopyableCode code="delete_express_gateway_service" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Express service and removes all associated Amazon Web Services resources. This operation stops service tasks, removes the Application Load Balancer, target groups, security groups, auto-scaling policies, and other managed infrastructure components. The service enters a DRAINING state where existing tasks complete current requests without starting new tasks. After all tasks stop, the service and infrastructure are permanently removed. This operation cannot be reversed. Back up important data and verify the service is no longer needed before deletion.</td>
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
    defaultValue="describe_express_gateway_service"
    values={[
        { label: 'describe_express_gateway_service', value: 'describe_express_gateway_service' }
    ]}
>
<TabItem value="describe_express_gateway_service">

Retrieves detailed information about an Express service, including current status, configuration, managed infrastructure, and service revisions. Returns comprehensive service details, active service revisions, ingress paths with endpoints, and managed Amazon Web Services resource status including load balancers and auto-scaling policies. Use the include parameter to retrieve additional information such as resource tags.

```sql
SELECT
active_configurations,
cluster,
created_at,
current_deployment,
infrastructure_role_arn,
service_arn,
service_name,
status,
tags,
updated_at
FROM aws.ecs.express_gateway_services
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_express_gateway_service"
    values={[
        { label: 'create_express_gateway_service', value: 'create_express_gateway_service' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_express_gateway_service">

Creates an Express service that simplifies deploying containerized web applications on Amazon ECS with managed Amazon Web Services infrastructure. This operation provisions and configures Application Load Balancers, target groups, security groups, and auto-scaling policies automatically. Specify a primary container configuration with your application image and basic settings. Amazon ECS creates the necessary Amazon Web Services resources for traffic distribution, health monitoring, network access control, and capacity management. Provide an execution role for task operations and an infrastructure role for managing Amazon Web Services resources on your behalf.

```sql
INSERT INTO aws.ecs.express_gateway_services (
executionRoleArn,
infrastructureRoleArn,
serviceName,
cluster,
healthCheckPath,
primaryContainer,
taskRoleArn,
networkConfiguration,
cpu,
memory,
scalingTarget,
tags,
region
)
SELECT 
'{{ executionRoleArn }}' /* required */,
'{{ infrastructureRoleArn }}' /* required */,
'{{ serviceName }}',
'{{ cluster }}',
'{{ healthCheckPath }}',
'{{ primaryContainer }}' /* required */,
'{{ taskRoleArn }}',
'{{ networkConfiguration }}',
'{{ cpu }}',
'{{ memory }}',
'{{ scalingTarget }}',
'{{ tags }}',
'{{ region }}'
RETURNING
service
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: express_gateway_services
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the express_gateway_services resource.
    - name: executionRoleArn
      value: "{{ executionRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make Amazon Web Services API calls on your behalf. This role is required for Amazon ECS to pull container images from Amazon ECR, send container logs to Amazon CloudWatch Logs, and retrieve sensitive data from Amazon Web Services Systems Manager Parameter Store or Amazon Web Services Secrets Manager. The execution role must include the AmazonECSTaskExecutionRolePolicy managed policy or equivalent permissions. For Express services, this role is used during task startup and runtime for container management operations.
    - name: infrastructureRoleArn
      value: "{{ infrastructureRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the infrastructure role that grants Amazon ECS permission to create and manage Amazon Web Services resources on your behalf for the Express service. This role is used to provision and manage Application Load Balancers, target groups, security groups, auto-scaling policies, and other Amazon Web Services infrastructure components. The infrastructure role must include permissions for Elastic Load Balancing, Application Auto Scaling, Amazon EC2 (for security groups), and other services required for managed infrastructure. This role is only used during Express service creation, updates, and deletion operations.
    - name: serviceName
      value: "{{ serviceName }}"
      description: |
        The name of the Express service. This name must be unique within the specified cluster and can contain up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens. The name is used to identify the service in the Amazon ECS console and API operations. If you don't specify a service name, Amazon ECS generates a unique name for the service. The service name becomes part of the service ARN and cannot be changed after the service is created.
    - name: cluster
      value: "{{ cluster }}"
      description: |
        The short name or full Amazon Resource Name (ARN) of the cluster on which to create the Express service. If you do not specify a cluster, the default cluster is assumed.
    - name: healthCheckPath
      value: "{{ healthCheckPath }}"
      description: |
        The path on the container that the Application Load Balancer uses for health checks. This should be a valid HTTP endpoint that returns a successful response (HTTP 200) when the application is healthy. If not specified, the default health check path is /ping. The health check path must start with a forward slash and can include query parameters. Examples: /health, /api/status, /ping?format=json.
    - name: primaryContainer
      description: |
        The primary container configuration for the Express service. This defines the main application container that will receive traffic from the Application Load Balancer. The primary container must specify at minimum a container image. You can also configure the container port (defaults to 80), logging configuration, environment variables, secrets, and startup commands. The container image can be from Amazon ECR, Docker Hub, or any other container registry accessible to your execution role.
      value:
        image: "{{ image }}"
        containerPort: {{ containerPort }}
        awsLogsConfiguration:
          logGroup: "{{ logGroup }}"
          logStreamPrefix: "{{ logStreamPrefix }}"
        repositoryCredentials:
          credentialsParameter: "{{ credentialsParameter }}"
        command:
          - "{{ command }}"
        environment:
          - name: "{{ name }}"
            value: "{{ value }}"
        secrets:
          - name: "{{ name }}"
            valueFrom: "{{ valueFrom }}"
    - name: taskRoleArn
      value: "{{ taskRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. This role allows your application code to access other Amazon Web Services services securely. The task role is different from the execution role. While the execution role is used by the Amazon ECS agent to set up the task, the task role is used by your application code running inside the container to make Amazon Web Services API calls. If your application doesn't need to access Amazon Web Services services, you can omit this parameter.
    - name: networkConfiguration
      description: |
        The network configuration for the Express service tasks. This specifies the VPC subnets and security groups for the tasks. For Express services, you can specify custom security groups and subnets. If not provided, Amazon ECS will use the default VPC configuration and create appropriate security groups automatically. The network configuration determines how your service integrates with your VPC and what network access it has.
      value:
        securityGroups:
          - "{{ securityGroups }}"
        subnets:
          - "{{ subnets }}"
    - name: cpu
      value: "{{ cpu }}"
      description: |
        The number of CPU units used by the task. This parameter determines the CPU allocation for each task in the Express service. The default value for an Express service is 256 (.25 vCPU).
    - name: memory
      value: "{{ memory }}"
      description: |
        The amount of memory (in MiB) used by the task. This parameter determines the memory allocation for each task in the Express service. The default value for an express service is 512 MiB.
    - name: scalingTarget
      description: |
        The auto-scaling configuration for the Express service. This defines how the service automatically adjusts the number of running tasks based on demand. You can specify the minimum and maximum number of tasks, the scaling metric (CPU utilization, memory utilization, or request count per target), and the target value for the metric. If not specified, the default target value for an Express service is 60.
      value:
        minTaskCount: {{ minTaskCount }}
        maxTaskCount: {{ maxTaskCount }}
        autoScalingMetric: "{{ autoScalingMetric }}"
        autoScalingTargetValue: {{ autoScalingTargetValue }}
    - name: tags
      description: |
        The metadata that you apply to the Express service to help categorize and organize it. Each tag consists of a key and an optional value. You can apply up to 50 tags to a service.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_express_gateway_service"
    values={[
        { label: 'update_express_gateway_service', value: 'update_express_gateway_service' }
    ]}
>
<TabItem value="update_express_gateway_service">

Updates an existing Express service configuration. Modifies container settings, resource allocation, auto-scaling configuration, and other service parameters without recreating the service. Amazon ECS creates a new service revision with updated configuration and performs a rolling deployment to replace existing tasks. The service remains available during updates, ensuring zero-downtime deployments. Some parameters like the infrastructure role cannot be modified after service creation and require creating a new service.

```sql
UPDATE aws.ecs.express_gateway_services
SET 
serviceArn = '{{ serviceArn }}',
executionRoleArn = '{{ executionRoleArn }}',
healthCheckPath = '{{ healthCheckPath }}',
primaryContainer = '{{ primaryContainer }}',
taskRoleArn = '{{ taskRoleArn }}',
networkConfiguration = '{{ networkConfiguration }}',
cpu = '{{ cpu }}',
memory = '{{ memory }}',
scalingTarget = '{{ scalingTarget }}'
WHERE 
region = '{{ region }}' --required
AND serviceArn = '{{ serviceArn }}' --required
RETURNING
service;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_express_gateway_service"
    values={[
        { label: 'delete_express_gateway_service', value: 'delete_express_gateway_service' }
    ]}
>
<TabItem value="delete_express_gateway_service">

Deletes an Express service and removes all associated Amazon Web Services resources. This operation stops service tasks, removes the Application Load Balancer, target groups, security groups, auto-scaling policies, and other managed infrastructure components. The service enters a DRAINING state where existing tasks complete current requests without starting new tasks. After all tasks stop, the service and infrastructure are permanently removed. This operation cannot be reversed. Back up important data and verify the service is no longer needed before deletion.

```sql
DELETE FROM aws.ecs.express_gateway_services
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
