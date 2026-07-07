--- 
title: components
hide_title: false
hide_table_of_contents: false
keywords:
  - components
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

Creates, updates, deletes, gets or lists a <code>components</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="components" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.components" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_component"
    values={[
        { label: 'get_component', value: 'get_component' },
        { label: 'list_components', value: 'list_components' }
    ]}
>
<TabItem value="get_component">

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
    <td>The name of the component. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the component was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentStatus" /></td>
    <td><code>string</code></td>
    <td>The component deployment status. (IN_PROGRESS, FAILED, SUCCEEDED, DELETE_IN_PROGRESS, DELETE_FAILED, DELETE_COMPLETE, CANCELLING, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentStatusMessage" /></td>
    <td><code>string</code></td>
    <td>The message associated with the component deployment status.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the Proton environment that this component is associated with. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastAttemptedDeploymentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the last attempted deployment of this component. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastClientRequestToken" /></td>
    <td><code>string</code></td>
    <td>The last token the client requested.</td>
</tr>
<tr>
    <td><CopyableCode code="lastDeploymentAttemptedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when a deployment of the component was last attempted.</td>
</tr>
<tr>
    <td><CopyableCode code="lastDeploymentSucceededAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the component was last deployed successfully.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the component was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSucceededDeploymentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the last successful deployment of this component. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceInstanceName" /></td>
    <td><code>string</code></td>
    <td>The name of the service instance that this component is attached to. Provided when a component is attached to a service instance. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The name of the service that serviceInstanceName is associated with. Provided when a component is attached to a service instance. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceSpec" /></td>
    <td><code>string</code></td>
    <td>The service spec that the component uses to access service inputs. Provided when a component is attached to a service instance.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_components">

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
    <td>The name of the component. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the component was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentStatus" /></td>
    <td><code>string</code></td>
    <td>The component deployment status. (IN_PROGRESS, FAILED, SUCCEEDED, DELETE_IN_PROGRESS, DELETE_FAILED, DELETE_COMPLETE, CANCELLING, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentStatusMessage" /></td>
    <td><code>string</code></td>
    <td>The message associated with the component deployment status.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the Proton environment that this component is associated with. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastAttemptedDeploymentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the last attempted deployment of this component. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastDeploymentAttemptedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when a deployment of the component was last attempted.</td>
</tr>
<tr>
    <td><CopyableCode code="lastDeploymentSucceededAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the component was last deployed successfully.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the component was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSucceededDeploymentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the last successful deployment of this component. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceInstanceName" /></td>
    <td><code>string</code></td>
    <td>The name of the service instance that this component is attached to. Provided when a component is attached to a service instance. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The name of the service that serviceInstanceName is associated with. Provided when a component is attached to a service instance. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
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
    <td><a href="#get_component"><CopyableCode code="get_component" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get detailed data for a component. For more information about components, see Proton components in the Proton User Guide.</td>
</tr>
<tr>
    <td><a href="#list_components"><CopyableCode code="list_components" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List components with summary data. You can filter the result list by environment, service, or a single service instance. For more information about components, see Proton components in the Proton User Guide.</td>
</tr>
<tr>
    <td><a href="#create_component"><CopyableCode code="create_component" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-manifest"><code>manifest</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-templateFile"><code>templateFile</code></a></td>
    <td></td>
    <td>Create an Proton component. A component is an infrastructure extension for a service instance. For more information about components, see Proton components in the Proton User Guide.</td>
</tr>
<tr>
    <td><a href="#update_component"><CopyableCode code="update_component" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-deploymentType"><code>deploymentType</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Update a component. There are a few modes for updating a component. The deploymentType field defines the mode. You can't update a component while its deployment status, or the deployment status of a service instance attached to it, is IN_PROGRESS. For more information about components, see Proton components in the Proton User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_component"><CopyableCode code="delete_component" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an Proton component resource. For more information about components, see Proton components in the Proton User Guide.</td>
</tr>
<tr>
    <td><a href="#cancel_component_deployment"><CopyableCode code="cancel_component_deployment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-componentName"><code>componentName</code></a></td>
    <td></td>
    <td>Attempts to cancel a component deployment (for a component that is in the IN_PROGRESS deployment status). For more information about components, see Proton components in the Proton User Guide.</td>
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
    defaultValue="get_component"
    values={[
        { label: 'get_component', value: 'get_component' },
        { label: 'list_components', value: 'list_components' }
    ]}
>
<TabItem value="get_component">

Get detailed data for a component. For more information about components, see Proton components in the Proton User Guide.

```sql
SELECT
name,
arn,
createdAt,
deploymentStatus,
deploymentStatusMessage,
description,
environmentName,
lastAttemptedDeploymentId,
lastClientRequestToken,
lastDeploymentAttemptedAt,
lastDeploymentSucceededAt,
lastModifiedAt,
lastSucceededDeploymentId,
serviceInstanceName,
serviceName,
serviceSpec
FROM aws.proton.components
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_components">

List components with summary data. You can filter the result list by environment, service, or a single service instance. For more information about components, see Proton components in the Proton User Guide.

```sql
SELECT
name,
arn,
createdAt,
deploymentStatus,
deploymentStatusMessage,
environmentName,
lastAttemptedDeploymentId,
lastDeploymentAttemptedAt,
lastDeploymentSucceededAt,
lastModifiedAt,
lastSucceededDeploymentId,
serviceInstanceName,
serviceName
FROM aws.proton.components
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_component"
    values={[
        { label: 'create_component', value: 'create_component' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_component">

Create an Proton component. A component is an infrastructure extension for a service instance. For more information about components, see Proton components in the Proton User Guide.

```sql
INSERT INTO aws.proton.components (
clientToken,
description,
environmentName,
manifest,
name,
serviceInstanceName,
serviceName,
serviceSpec,
tags,
templateFile,
region
)
SELECT 
'{{ clientToken }}',
'{{ description }}',
'{{ environmentName }}',
'{{ manifest }}' /* required */,
'{{ name }}' /* required */,
'{{ serviceInstanceName }}',
'{{ serviceName }}',
'{{ serviceSpec }}',
'{{ tags }}',
'{{ templateFile }}' /* required */,
'{{ region }}'
RETURNING
component
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: components
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the components resource.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        The client token for the created component.
    - name: description
      value: "{{ description }}"
      description: |
        An optional customer-provided description of the component.
    - name: environmentName
      value: "{{ environmentName }}"
      description: |
        The name of the Proton environment that you want to associate this component with. You must specify this when you don't specify serviceInstanceName and serviceName.
    - name: manifest
      value: "{{ manifest }}"
      description: |
        A path to a manifest file that lists the Infrastructure as Code (IaC) file, template language, and rendering engine for infrastructure that a custom component provisions.
    - name: name
      value: "{{ name }}"
      description: |
        The customer-provided name of the component.
    - name: serviceInstanceName
      value: "{{ serviceInstanceName }}"
      description: |
        The name of the service instance that you want to attach this component to. If you don't specify this, the component isn't attached to any service instance. Specify both serviceInstanceName and serviceName or neither of them.
    - name: serviceName
      value: "{{ serviceName }}"
      description: |
        The name of the service that serviceInstanceName is associated with. If you don't specify this, the component isn't attached to any service instance. Specify both serviceInstanceName and serviceName or neither of them.
    - name: serviceSpec
      value: "{{ serviceSpec }}"
      description: |
        The service spec that you want the component to use to access service inputs. Set this only when you attach the component to a service instance.
    - name: tags
      description: |
        An optional list of metadata items that you can associate with the Proton component. A tag is a key-value pair. For more information, see Proton resources and tagging in the Proton User Guide.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: templateFile
      value: "{{ templateFile }}"
      description: |
        A path to the Infrastructure as Code (IaC) file describing infrastructure that a custom component provisions. Components support a single IaC file, even if you use Terraform as your template language.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_component"
    values={[
        { label: 'update_component', value: 'update_component' }
    ]}
>
<TabItem value="update_component">

Update a component. There are a few modes for updating a component. The deploymentType field defines the mode. You can't update a component while its deployment status, or the deployment status of a service instance attached to it, is IN_PROGRESS. For more information about components, see Proton components in the Proton User Guide.

```sql
UPDATE aws.proton.components
SET 
clientToken = '{{ clientToken }}',
deploymentType = '{{ deploymentType }}',
description = '{{ description }}',
name = '{{ name }}',
serviceInstanceName = '{{ serviceInstanceName }}',
serviceName = '{{ serviceName }}',
serviceSpec = '{{ serviceSpec }}',
templateFile = '{{ templateFile }}'
WHERE 
region = '{{ region }}' --required
AND deploymentType = '{{ deploymentType }}' --required
AND name = '{{ name }}' --required
RETURNING
component;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_component"
    values={[
        { label: 'delete_component', value: 'delete_component' }
    ]}
>
<TabItem value="delete_component">

Delete an Proton component resource. For more information about components, see Proton components in the Proton User Guide.

```sql
DELETE FROM aws.proton.components
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_component_deployment"
    values={[
        { label: 'cancel_component_deployment', value: 'cancel_component_deployment' }
    ]}
>
<TabItem value="cancel_component_deployment">

Attempts to cancel a component deployment (for a component that is in the IN_PROGRESS deployment status). For more information about components, see Proton components in the Proton User Guide.

```sql
EXEC aws.proton.components.cancel_component_deployment 
@region='{{ region }}' --required 
@@json=
'{
"componentName": "{{ componentName }}"
}'
;
```
</TabItem>
</Tabs>
