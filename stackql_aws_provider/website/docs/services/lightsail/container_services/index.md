--- 
title: container_services
hide_title: false
hide_table_of_contents: false
keywords:
  - container_services
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>container_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="container_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.container_services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_container_services"
    values={[
        { label: 'get_container_services', value: 'get_container_services' }
    ]}
>
<TabItem value="get_container_services">

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
    <td><CopyableCode code="containerServices" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe one or more container services.</td>
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
    <td><a href="#get_container_services"><CopyableCode code="get_container_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about one or more of your Amazon Lightsail container services.</td>
</tr>
<tr>
    <td><a href="#create_container_service"><CopyableCode code="create_container_service" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-power"><code>power</code></a>, <a href="#parameter-scale"><code>scale</code></a></td>
    <td></td>
    <td>Creates an Amazon Lightsail container service. A Lightsail container service is a compute resource to which you can deploy containers. For more information, see Container services in Amazon Lightsail in the Lightsail Dev Guide.</td>
</tr>
<tr>
    <td><a href="#create_container_service_registry_login"><CopyableCode code="create_container_service_registry_login" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a temporary set of log in credentials that you can use to log in to the Docker process on your local machine. After you're logged in, you can use the native Docker commands to push your local container images to the container image registry of your Amazon Lightsail account so that you can use them with your Lightsail container service. The log in credentials expire 12 hours after they are created, at which point you will need to create a new set of log in credentials. You can only push container images to the container service registry of your Lightsail account. You cannot pull container images or perform any other container image management actions on the container service registry. After you push your container images to the container image registry of your Lightsail account, use the RegisterContainerImage action to register the pushed images to a specific Lightsail container service. This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see Pushing and managing container images on your Amazon Lightsail container services in the Amazon Lightsail Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_container_service"><CopyableCode code="update_container_service" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Updates the configuration of your Amazon Lightsail container service, such as its power, scale, and public domain names.</td>
</tr>
<tr>
    <td><a href="#delete_container_service"><CopyableCode code="delete_container_service" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes your Amazon Lightsail container service.</td>
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
    defaultValue="get_container_services"
    values={[
        { label: 'get_container_services', value: 'get_container_services' }
    ]}
>
<TabItem value="get_container_services">

Returns information about one or more of your Amazon Lightsail container services.

```sql
SELECT
containerServices
FROM aws.lightsail.container_services
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_container_service"
    values={[
        { label: 'create_container_service', value: 'create_container_service' },
        { label: 'create_container_service_registry_login', value: 'create_container_service_registry_login' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_container_service">

Creates an Amazon Lightsail container service. A Lightsail container service is a compute resource to which you can deploy containers. For more information, see Container services in Amazon Lightsail in the Lightsail Dev Guide.

```sql
INSERT INTO aws.lightsail.container_services (
serviceName,
power,
scale,
tags,
publicDomainNames,
deployment,
privateRegistryAccess,
region
)
SELECT 
'{{ serviceName }}' /* required */,
'{{ power }}' /* required */,
{{ scale }} /* required */,
'{{ tags }}',
'{{ publicDomainNames }}',
'{{ deployment }}',
'{{ privateRegistryAccess }}',
'{{ region }}'
RETURNING
containerService
;
```
</TabItem>
<TabItem value="create_container_service_registry_login">

Creates a temporary set of log in credentials that you can use to log in to the Docker process on your local machine. After you're logged in, you can use the native Docker commands to push your local container images to the container image registry of your Amazon Lightsail account so that you can use them with your Lightsail container service. The log in credentials expire 12 hours after they are created, at which point you will need to create a new set of log in credentials. You can only push container images to the container service registry of your Lightsail account. You cannot pull container images or perform any other container image management actions on the container service registry. After you push your container images to the container image registry of your Lightsail account, use the RegisterContainerImage action to register the pushed images to a specific Lightsail container service. This action is not required if you install and use the Lightsail Control (lightsailctl) plugin to push container images to your Lightsail container service. For more information, see Pushing and managing container images on your Amazon Lightsail container services in the Amazon Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.container_services (
region
)
SELECT 
'{{ region }}'
RETURNING
registryLogin
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: container_services
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the container_services resource.
    - name: serviceName
      value: "{{ serviceName }}"
      description: |
        The name for the container service. The name that you specify for your container service will make up part of its default domain. The default domain of a container service is typically https://\`<ServiceName>\`.\`<RandomGUID>\`.\`<AWSRegion>\`.cs.amazonlightsail.com. If the name of your container service is container-service-1, and it's located in the US East (Ohio) Amazon Web Services Region (us-east-2), then the domain for your container service will be like the following example: https://container-service-1.ur4EXAMPLE2uq.us-east-2.cs.amazonlightsail.com The following are the requirements for container service names: Must be unique within each Amazon Web Services Region in your Lightsail account. Must contain 1 to 63 characters. Must contain only alphanumeric characters and hyphens. A hyphen (-) can separate words but cannot be at the start or end of the name.
    - name: power
      value: "{{ power }}"
      description: |
        The power specification for the container service. The power specifies the amount of memory, vCPUs, and base monthly cost of each node of the container service. The power and scale of a container service makes up its configured capacity. To determine the monthly price of your container service, multiply the base price of the power with the scale (the number of nodes) of the service. Use the GetContainerServicePowers action to get a list of power options that you can specify using this parameter, and their base monthly cost.
      valid_values: ['nano', 'micro', 'small', 'medium', 'large', 'xlarge']
    - name: scale
      value: {{ scale }}
      description: |
        The scale specification for the container service. The scale specifies the allocated compute nodes of the container service. The power and scale of a container service makes up its configured capacity. To determine the monthly price of your container service, multiply the base price of the power with the scale (the number of nodes) of the service.
    - name: tags
      description: |
        The tag keys and optional values to add to the container service during create. Use the TagResource action to tag a resource after it's created. For more information about tags in Lightsail, see the Amazon Lightsail Developer Guide.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: publicDomainNames
      value: "{{ publicDomainNames }}"
      description: |
        The public domain names to use with the container service, such as example.com and www.example.com. You can specify up to four public domain names for a container service. The domain names that you specify are used when you create a deployment with a container configured as the public endpoint of your container service. If you don't specify public domain names, then you can use the default domain of the container service. You must create and validate an SSL/TLS certificate before you can use public domain names with your container service. Use the CreateCertificate action to create a certificate for the public domain names you want to use with your container service. You can specify public domain names using a string to array map as shown in the example later on this page.
    - name: deployment
      description: |
        An object that describes a deployment for the container service. A deployment specifies the containers that will be launched on the container service and their settings, such as the ports to open, the environment variables to apply, and the launch command to run. It also specifies the container that will serve as the public endpoint of the deployment and its settings, such as the HTTP or HTTPS port to use, and the health check configuration.
      value:
        containers: "{{ containers }}"
        publicEndpoint:
          containerName: "{{ containerName }}"
          containerPort: {{ containerPort }}
          healthCheck:
            healthyThreshold: {{ healthyThreshold }}
            unhealthyThreshold: {{ unhealthyThreshold }}
            timeoutSeconds: {{ timeoutSeconds }}
            intervalSeconds: {{ intervalSeconds }}
            path: "{{ path }}"
            successCodes: "{{ successCodes }}"
    - name: privateRegistryAccess
      description: |
        An object to describe the configuration for the container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories. For more information, see Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service in the Amazon Lightsail Developer Guide.
      value:
        ecrImagePullerRole:
          isActive: {{ isActive }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_container_service"
    values={[
        { label: 'update_container_service', value: 'update_container_service' }
    ]}
>
<TabItem value="update_container_service">

Updates the configuration of your Amazon Lightsail container service, such as its power, scale, and public domain names.

```sql
UPDATE aws.lightsail.container_services
SET 
serviceName = '{{ serviceName }}',
power = '{{ power }}',
scale = {{ scale }},
isDisabled = {{ isDisabled }},
publicDomainNames = '{{ publicDomainNames }}',
privateRegistryAccess = '{{ privateRegistryAccess }}'
WHERE 
region = '{{ region }}' --required
AND serviceName = '{{ serviceName }}' --required
RETURNING
containerService;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_container_service"
    values={[
        { label: 'delete_container_service', value: 'delete_container_service' }
    ]}
>
<TabItem value="delete_container_service">

Deletes your Amazon Lightsail container service.

```sql
DELETE FROM aws.lightsail.container_services
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
