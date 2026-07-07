--- 
title: container_service_deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - container_service_deployments
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

Creates, updates, deletes, gets or lists a <code>container_service_deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="container_service_deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.container_service_deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_container_service_deployments"
    values={[
        { label: 'get_container_service_deployments', value: 'get_container_service_deployments' }
    ]}
>
<TabItem value="get_container_service_deployments">

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
    <td><CopyableCode code="deployments" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe deployments for a container service.</td>
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
    <td><a href="#get_container_service_deployments"><CopyableCode code="get_container_service_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the deployments for your Amazon Lightsail container service A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service. The deployments are ordered by version in ascending order. The newest version is listed at the top of the response. A set number of deployments are kept before the oldest one is replaced with the newest one. For more information, see Amazon Lightsail endpoints and quotas in the Amazon Web Services General Reference.</td>
</tr>
<tr>
    <td><a href="#create_container_service_deployment"><CopyableCode code="create_container_service_deployment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Creates a deployment for your Amazon Lightsail container service. A deployment specifies the containers that will be launched on the container service and their settings, such as the ports to open, the environment variables to apply, and the launch command to run. It also specifies the container that will serve as the public endpoint of the deployment and its settings, such as the HTTP or HTTPS port to use, and the health check configuration. You can deploy containers to your container service using container images from a public registry such as Amazon ECR Public, or from your local machine. For more information, see Creating container images for your Amazon Lightsail container services in the Amazon Lightsail Developer Guide.</td>
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
    defaultValue="get_container_service_deployments"
    values={[
        { label: 'get_container_service_deployments', value: 'get_container_service_deployments' }
    ]}
>
<TabItem value="get_container_service_deployments">

Returns the deployments for your Amazon Lightsail container service A deployment specifies the settings, such as the ports and launch command, of containers that are deployed to your container service. The deployments are ordered by version in ascending order. The newest version is listed at the top of the response. A set number of deployments are kept before the oldest one is replaced with the newest one. For more information, see Amazon Lightsail endpoints and quotas in the Amazon Web Services General Reference.

```sql
SELECT
deployments
FROM aws.lightsail.container_service_deployments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_container_service_deployment"
    values={[
        { label: 'create_container_service_deployment', value: 'create_container_service_deployment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_container_service_deployment">

Creates a deployment for your Amazon Lightsail container service. A deployment specifies the containers that will be launched on the container service and their settings, such as the ports to open, the environment variables to apply, and the launch command to run. It also specifies the container that will serve as the public endpoint of the deployment and its settings, such as the HTTP or HTTPS port to use, and the health check configuration. You can deploy containers to your container service using container images from a public registry such as Amazon ECR Public, or from your local machine. For more information, see Creating container images for your Amazon Lightsail container services in the Amazon Lightsail Developer Guide.

```sql
INSERT INTO aws.lightsail.container_service_deployments (
serviceName,
containers,
publicEndpoint,
region
)
SELECT 
'{{ serviceName }}' /* required */,
'{{ containers }}',
'{{ publicEndpoint }}',
'{{ region }}'
RETURNING
containerService
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: container_service_deployments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the container_service_deployments resource.
    - name: serviceName
      value: "{{ serviceName }}"
      description: |
        The name of the container service for which to create the deployment.
    - name: containers
      value: "{{ containers }}"
      description: |
        An object that describes the settings of the containers that will be launched on the container service.
    - name: publicEndpoint
      description: |
        An object that describes the settings of the public endpoint for the container service.
      value:
        containerName: "{{ containerName }}"
        containerPort: {{ containerPort }}
        healthCheck:
          healthyThreshold: {{ healthyThreshold }}
          unhealthyThreshold: {{ unhealthyThreshold }}
          timeoutSeconds: {{ timeoutSeconds }}
          intervalSeconds: {{ intervalSeconds }}
          path: "{{ path }}"
          successCodes: "{{ successCodes }}"
`}</CodeBlock>

</TabItem>
</Tabs>
