--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - proton
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service"
    values={[
        { label: 'get_service', value: 'get_service' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="get_service">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the service. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="branchName" /></td>
    <td><code>string</code></td>
    <td>The name of the code repository branch that holds the code that's deployed in Proton.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the service was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the service was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline" /></td>
    <td><code>object</code></td>
    <td>The service pipeline detail data.</td>
</tr>
<tr>
    <td><CopyableCode code="repositoryConnectionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the repository connection. For more information, see Setting up an AWS CodeStar connection in the Proton User Guide. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):&#91;a-zA-Z0-9-&#93;+:&#91;a-zA-Z0-9-&#93;*:\d&#123;12&#125;:(&#91;\w+=,.@-&#93;+&#91;/:&#93;)*&#91;\w+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repositoryId" /></td>
    <td><code>string</code></td>
    <td>The ID of the source code repository.</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>string</code></td>
    <td>The formatted specification that defines the service.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the service. (CREATE_IN_PROGRESS, CREATE_FAILED_CLEANUP_IN_PROGRESS, CREATE_FAILED_CLEANUP_COMPLETE, CREATE_FAILED_CLEANUP_FAILED, CREATE_FAILED, ACTIVE, DELETE_IN_PROGRESS, DELETE_FAILED, UPDATE_IN_PROGRESS, UPDATE_FAILED_CLEANUP_IN_PROGRESS, UPDATE_FAILED_CLEANUP_COMPLETE, UPDATE_FAILED_CLEANUP_FAILED, UPDATE_FAILED, UPDATE_COMPLETE_CLEANUP_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>A service status message.</td>
</tr>
<tr>
    <td><CopyableCode code="templateName" /></td>
    <td><code>string</code></td>
    <td>The name of the service template. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the service. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the service was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the service.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the service was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the service. (CREATE_IN_PROGRESS, CREATE_FAILED_CLEANUP_IN_PROGRESS, CREATE_FAILED_CLEANUP_COMPLETE, CREATE_FAILED_CLEANUP_FAILED, CREATE_FAILED, ACTIVE, DELETE_IN_PROGRESS, DELETE_FAILED, UPDATE_IN_PROGRESS, UPDATE_FAILED_CLEANUP_IN_PROGRESS, UPDATE_FAILED_CLEANUP_COMPLETE, UPDATE_FAILED_CLEANUP_FAILED, UPDATE_FAILED, UPDATE_COMPLETE_CLEANUP_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>A service status message.</td>
</tr>
<tr>
    <td><CopyableCode code="templateName" /></td>
    <td><code>string</code></td>
    <td>The name of the service template. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#get_service"><CopyableCode code="get_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get detailed data for a service.</td>
</tr>
<tr>
    <td><a href="#list_services"><CopyableCode code="list_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List services with summaries of detail data.</td>
</tr>
<tr>
    <td><a href="#create_service"><CopyableCode code="create_service" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-spec"><code>spec</code></a>, <a href="#parameter-templateMajorVersion"><code>templateMajorVersion</code></a>, <a href="#parameter-templateName"><code>templateName</code></a></td>
    <td></td>
    <td>Create an Proton service. An Proton service is an instantiation of a service template and often includes several service instances and pipeline. For more information, see Services in the Proton User Guide.</td>
</tr>
<tr>
    <td><a href="#update_service_pipeline"><CopyableCode code="update_service_pipeline" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-deploymentType"><code>deploymentType</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Update the service pipeline. There are four modes for updating a service pipeline. The deploymentType field defines the mode. NONE In this mode, a deployment doesn't occur. Only the requested metadata parameters are updated. CURRENT_VERSION In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. Don’t include major or minor version parameters when you use this deployment-type. MINOR_VERSION In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can specify a different minor version of the current major version in use. MAJOR_VERSION In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template by default. You can specify a different major version that's higher than the major version in use and a minor version.</td>
</tr>
<tr>
    <td><a href="#update_service_sync_blocker"><CopyableCode code="update_service_sync_blocker" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-resolvedReason"><code>resolvedReason</code></a></td>
    <td></td>
    <td>Update the service sync blocker by resolving it.</td>
</tr>
<tr>
    <td><a href="#update_service"><CopyableCode code="update_service" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Edit a service description or use a spec to add and delete service instances. Existing service instances and the service pipeline can't be edited using this API. They can only be deleted. Use the description parameter to modify the description. Edit the spec parameter to add or delete instances. You can't delete a service instance (remove it from the spec) if it has an attached component. For more information about components, see Proton components in the Proton User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_service"><CopyableCode code="delete_service" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a service, with its instances and pipeline. You can't delete a service if it has any service instances that have components attached to them. For more information about components, see Proton components in the Proton User Guide.</td>
</tr>
<tr>
    <td><a href="#cancel_service_pipeline_deployment"><CopyableCode code="cancel_service_pipeline_deployment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Attempts to cancel a service pipeline deployment on an UpdateServicePipeline action, if the deployment is IN_PROGRESS. For more information, see Update a service pipeline in the Proton User guide. The following list includes potential cancellation scenarios. If the cancellation attempt succeeds, the resulting deployment state is CANCELLED. If the cancellation attempt fails, the resulting deployment state is FAILED. If the current UpdateServicePipeline action succeeds before the cancellation attempt starts, the resulting deployment state is SUCCEEDED and the cancellation attempt has no effect.</td>
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
    defaultValue="get_service"
    values={[
        { label: 'get_service', value: 'get_service' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="get_service">

Get detailed data for a service.

```sql
SELECT
name,
arn,
branchName,
createdAt,
description,
lastModifiedAt,
pipeline,
repositoryConnectionArn,
repositoryId,
spec,
status,
statusMessage,
templateName
FROM aws.proton.services
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_services">

List services with summaries of detail data.

```sql
SELECT
name,
arn,
createdAt,
description,
lastModifiedAt,
status,
statusMessage,
templateName
FROM aws.proton.services
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

Create an Proton service. An Proton service is an instantiation of a service template and often includes several service instances and pipeline. For more information, see Services in the Proton User Guide.

```sql
INSERT INTO aws.proton.services (
branchName,
description,
name,
repositoryConnectionArn,
repositoryId,
spec,
tags,
templateMajorVersion,
templateMinorVersion,
templateName,
region
)
SELECT 
'{{ branchName }}',
'{{ description }}',
'{{ name }}' /* required */,
'{{ repositoryConnectionArn }}',
'{{ repositoryId }}',
'{{ spec }}' /* required */,
'{{ tags }}',
'{{ templateMajorVersion }}' /* required */,
'{{ templateMinorVersion }}',
'{{ templateName }}' /* required */,
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
    - name: branchName
      value: "{{ branchName }}"
      description: |
        The name of the code repository branch that holds the code that's deployed in Proton. Don't include this parameter if your service template doesn't include a service pipeline.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the Proton service.
    - name: name
      value: "{{ name }}"
      description: |
        The service name.
    - name: repositoryConnectionArn
      value: "{{ repositoryConnectionArn }}"
      description: |
        The Amazon Resource Name (ARN) of the repository connection. For more information, see Setting up an AWS CodeStar connection in the Proton User Guide. Don't include this parameter if your service template doesn't include a service pipeline.
    - name: repositoryId
      value: "{{ repositoryId }}"
      description: |
        The ID of the code repository. Don't include this parameter if your service template doesn't include a service pipeline.
    - name: spec
      value: "{{ spec }}"
      description: |
        A link to a spec file that provides inputs as defined in the service template bundle schema file. The spec file is in YAML format. Don’t include pipeline inputs in the spec if your service template doesn’t include a service pipeline. For more information, see Create a service in the Proton User Guide.
    - name: tags
      description: |
        An optional list of metadata items that you can associate with the Proton service. A tag is a key-value pair. For more information, see Proton resources and tagging in the Proton User Guide.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: templateMajorVersion
      value: "{{ templateMajorVersion }}"
      description: |
        The major version of the service template that was used to create the service.
    - name: templateMinorVersion
      value: "{{ templateMinorVersion }}"
      description: |
        The minor version of the service template that was used to create the service.
    - name: templateName
      value: "{{ templateName }}"
      description: |
        The name of the service template that's used to create the service.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_pipeline"
    values={[
        { label: 'update_service_pipeline', value: 'update_service_pipeline' },
        { label: 'update_service_sync_blocker', value: 'update_service_sync_blocker' },
        { label: 'update_service', value: 'update_service' }
    ]}
>
<TabItem value="update_service_pipeline">

Update the service pipeline. There are four modes for updating a service pipeline. The deploymentType field defines the mode. NONE In this mode, a deployment doesn't occur. Only the requested metadata parameters are updated. CURRENT_VERSION In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. Don’t include major or minor version parameters when you use this deployment-type. MINOR_VERSION In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can specify a different minor version of the current major version in use. MAJOR_VERSION In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template by default. You can specify a different major version that's higher than the major version in use and a minor version.

```sql
UPDATE aws.proton.services
SET 
deploymentType = '{{ deploymentType }}',
serviceName = '{{ serviceName }}',
spec = '{{ spec }}',
templateMajorVersion = '{{ templateMajorVersion }}',
templateMinorVersion = '{{ templateMinorVersion }}'
WHERE 
region = '{{ region }}' --required
AND deploymentType = '{{ deploymentType }}' --required
AND serviceName = '{{ serviceName }}' --required
AND spec = '{{ spec }}' --required
RETURNING
pipeline;
```
</TabItem>
<TabItem value="update_service_sync_blocker">

Update the service sync blocker by resolving it.

```sql
UPDATE aws.proton.services
SET 
id = '{{ id }}',
resolvedReason = '{{ resolvedReason }}'
WHERE 
region = '{{ region }}' --required
AND id = '{{ id }}' --required
AND resolvedReason = '{{ resolvedReason }}' --required
RETURNING
serviceInstanceName,
serviceName,
serviceSyncBlocker;
```
</TabItem>
<TabItem value="update_service">

Edit a service description or use a spec to add and delete service instances. Existing service instances and the service pipeline can't be edited using this API. They can only be deleted. Use the description parameter to modify the description. Edit the spec parameter to add or delete instances. You can't delete a service instance (remove it from the spec) if it has an attached component. For more information about components, see Proton components in the Proton User Guide.

```sql
UPDATE aws.proton.services
SET 
description = '{{ description }}',
name = '{{ name }}',
spec = '{{ spec }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required
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

Delete a service, with its instances and pipeline. You can't delete a service if it has any service instances that have components attached to them. For more information about components, see Proton components in the Proton User Guide.

```sql
DELETE FROM aws.proton.services
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_service_pipeline_deployment"
    values={[
        { label: 'cancel_service_pipeline_deployment', value: 'cancel_service_pipeline_deployment' }
    ]}
>
<TabItem value="cancel_service_pipeline_deployment">

Attempts to cancel a service pipeline deployment on an UpdateServicePipeline action, if the deployment is IN_PROGRESS. For more information, see Update a service pipeline in the Proton User guide. The following list includes potential cancellation scenarios. If the cancellation attempt succeeds, the resulting deployment state is CANCELLED. If the cancellation attempt fails, the resulting deployment state is FAILED. If the current UpdateServicePipeline action succeeds before the cancellation attempt starts, the resulting deployment state is SUCCEEDED and the cancellation attempt has no effect.

```sql
EXEC aws.proton.services.cancel_service_pipeline_deployment 
@region='{{ region }}' --required 
@@json=
'{
"serviceName": "{{ serviceName }}"
}'
;
```
</TabItem>
</Tabs>
