--- 
title: service_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - service_instances
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

Creates, updates, deletes, gets or lists a <code>service_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.service_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_instance"
    values={[
        { label: 'get_service_instance', value: 'get_service_instance' },
        { label: 'list_service_instances', value: 'list_service_instances' }
    ]}
>
<TabItem value="get_service_instance">

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
    <td>The name of the service instance. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service instance.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the service instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_status" /></td>
    <td><code>string</code></td>
    <td>The service instance deployment status. (IN_PROGRESS, FAILED, SUCCEEDED, DELETE_IN_PROGRESS, DELETE_FAILED, DELETE_COMPLETE, CANCELLING, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_status_message" /></td>
    <td><code>string</code></td>
    <td>The message associated with the service instance deployment status.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment that the service instance was deployed into. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_attempted_deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the last attempted deployment of this service instance. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_client_request_token" /></td>
    <td><code>string</code></td>
    <td>The last client request token received.</td>
</tr>
<tr>
    <td><CopyableCode code="last_deployment_attempted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when a deployment of the service instance was last attempted.</td>
</tr>
<tr>
    <td><CopyableCode code="last_deployment_succeeded_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the service instance was last deployed successfully.</td>
</tr>
<tr>
    <td><CopyableCode code="last_succeeded_deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the last successful deployment of this service instance. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service that the service instance belongs to. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="spec" /></td>
    <td><code>string</code></td>
    <td>The service spec that was used to create the service instance.</td>
</tr>
<tr>
    <td><CopyableCode code="template_major_version" /></td>
    <td><code>string</code></td>
    <td>The major version of the service template that was used to create the service instance. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="template_minor_version" /></td>
    <td><code>string</code></td>
    <td>The minor version of the service template that was used to create the service instance. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service template that was used to create the service instance. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_service_instances">

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
    <td>The name of the service instance. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service instance.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the service instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_status" /></td>
    <td><code>string</code></td>
    <td>The service instance deployment status. (IN_PROGRESS, FAILED, SUCCEEDED, DELETE_IN_PROGRESS, DELETE_FAILED, DELETE_COMPLETE, CANCELLING, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_status_message" /></td>
    <td><code>string</code></td>
    <td>A service instance deployment status message.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment that the service instance was deployed into. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_attempted_deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the last attempted deployment of this service instance. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_deployment_attempted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when a deployment of the service was last attempted.</td>
</tr>
<tr>
    <td><CopyableCode code="last_deployment_succeeded_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the service was last deployed successfully.</td>
</tr>
<tr>
    <td><CopyableCode code="last_succeeded_deployment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the last successful deployment of this service instance. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service that the service instance belongs to. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="template_major_version" /></td>
    <td><code>string</code></td>
    <td>The service instance template major version. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="template_minor_version" /></td>
    <td><code>string</code></td>
    <td>The service instance template minor version. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="template_name" /></td>
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
    <td><a href="#get_service_instance"><CopyableCode code="get_service_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get detailed data for a service instance. A service instance is an instantiation of service template and it runs in a specific environment.</td>
</tr>
<tr>
    <td><a href="#list_service_instances"><CopyableCode code="list_service_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List service instances with summary data. This action lists service instances of all services in the Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_service_instance"><CopyableCode code="create_service_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-spec"><code>spec</code></a></td>
    <td></td>
    <td>Create a service instance.</td>
</tr>
<tr>
    <td><a href="#update_service_instance"><CopyableCode code="update_service_instance" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-deploymentType"><code>deploymentType</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Update a service instance. There are a few modes for updating a service instance. The deploymentType field defines the mode. You can't update a service instance while its deployment status, or the deployment status of a component attached to it, is IN_PROGRESS. For more information about components, see Proton components in the Proton User Guide.</td>
</tr>
<tr>
    <td><a href="#cancel_service_instance_deployment"><CopyableCode code="cancel_service_instance_deployment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceInstanceName"><code>serviceInstanceName</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Attempts to cancel a service instance deployment on an UpdateServiceInstance action, if the deployment is IN_PROGRESS. For more information, see Update a service instance in the Proton User guide. The following list includes potential cancellation scenarios. If the cancellation attempt succeeds, the resulting deployment state is CANCELLED. If the cancellation attempt fails, the resulting deployment state is FAILED. If the current UpdateServiceInstance action succeeds before the cancellation attempt starts, the resulting deployment state is SUCCEEDED and the cancellation attempt has no effect.</td>
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
    defaultValue="get_service_instance"
    values={[
        { label: 'get_service_instance', value: 'get_service_instance' },
        { label: 'list_service_instances', value: 'list_service_instances' }
    ]}
>
<TabItem value="get_service_instance">

Get detailed data for a service instance. A service instance is an instantiation of service template and it runs in a specific environment.

```sql
SELECT
name,
arn,
created_at,
deployment_status,
deployment_status_message,
environment_name,
last_attempted_deployment_id,
last_client_request_token,
last_deployment_attempted_at,
last_deployment_succeeded_at,
last_succeeded_deployment_id,
service_name,
spec,
template_major_version,
template_minor_version,
template_name
FROM aws.proton.service_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_service_instances">

List service instances with summary data. This action lists service instances of all services in the Amazon Web Services account.

```sql
SELECT
name,
arn,
created_at,
deployment_status,
deployment_status_message,
environment_name,
last_attempted_deployment_id,
last_deployment_attempted_at,
last_deployment_succeeded_at,
last_succeeded_deployment_id,
service_name,
template_major_version,
template_minor_version,
template_name
FROM aws.proton.service_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_instance"
    values={[
        { label: 'create_service_instance', value: 'create_service_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_instance">

Create a service instance.

```sql
INSERT INTO aws.proton.service_instances (
clientToken,
name,
serviceName,
spec,
tags,
templateMajorVersion,
templateMinorVersion,
region
)
SELECT 
'{{ clientToken }}',
'{{ name }}' /* required */,
'{{ serviceName }}' /* required */,
'{{ spec }}' /* required */,
'{{ tags }}',
'{{ templateMajorVersion }}',
'{{ templateMinorVersion }}',
'{{ region }}'
RETURNING
service_instance
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the service_instances resource.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        The client token of the service instance to create.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the service instance to create.
    - name: serviceName
      value: "{{ serviceName }}"
      description: |
        The name of the service the service instance is added to.
    - name: spec
      value: "{{ spec }}"
      description: |
        The spec for the service instance you want to create.
    - name: tags
      description: |
        An optional list of metadata items that you can associate with the Proton service instance. A tag is a key-value pair. For more information, see Proton resources and tagging in the Proton User Guide.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: templateMajorVersion
      value: "{{ templateMajorVersion }}"
      description: |
        To create a new major and minor version of the service template, exclude major Version.
    - name: templateMinorVersion
      value: "{{ templateMinorVersion }}"
      description: |
        To create a new minor version of the service template, include a major Version.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_instance"
    values={[
        { label: 'update_service_instance', value: 'update_service_instance' }
    ]}
>
<TabItem value="update_service_instance">

Update a service instance. There are a few modes for updating a service instance. The deploymentType field defines the mode. You can't update a service instance while its deployment status, or the deployment status of a component attached to it, is IN_PROGRESS. For more information about components, see Proton components in the Proton User Guide.

```sql
UPDATE aws.proton.service_instances
SET 
clientToken = '{{ clientToken }}',
deploymentType = '{{ deploymentType }}',
name = '{{ name }}',
serviceName = '{{ serviceName }}',
spec = '{{ spec }}',
templateMajorVersion = '{{ templateMajorVersion }}',
templateMinorVersion = '{{ templateMinorVersion }}'
WHERE 
region = '{{ region }}' --required
AND deploymentType = '{{ deploymentType }}' --required
AND name = '{{ name }}' --required
AND serviceName = '{{ serviceName }}' --required
RETURNING
service_instance;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_service_instance_deployment"
    values={[
        { label: 'cancel_service_instance_deployment', value: 'cancel_service_instance_deployment' }
    ]}
>
<TabItem value="cancel_service_instance_deployment">

Attempts to cancel a service instance deployment on an UpdateServiceInstance action, if the deployment is IN_PROGRESS. For more information, see Update a service instance in the Proton User guide. The following list includes potential cancellation scenarios. If the cancellation attempt succeeds, the resulting deployment state is CANCELLED. If the cancellation attempt fails, the resulting deployment state is FAILED. If the current UpdateServiceInstance action succeeds before the cancellation attempt starts, the resulting deployment state is SUCCEEDED and the cancellation attempt has no effect.

```sql
EXEC aws.proton.service_instances.cancel_service_instance_deployment 
@region='{{ region }}' --required 
@@json=
'{
"serviceInstanceName": "{{ serviceInstanceName }}", 
"serviceName": "{{ serviceName }}"
}'
;
```
</TabItem>
</Tabs>
