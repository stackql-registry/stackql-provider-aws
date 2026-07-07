--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
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

Creates, updates, deletes, gets or lists a <code>deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.proton.deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_deployment"
    values={[
        { label: 'get_deployment', value: 'get_deployment' },
        { label: 'list_deployments', value: 'list_deployments' }
    ]}
>
<TabItem value="get_deployment">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the deployment. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="completedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the deployment was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="componentName" /></td>
    <td><code>string</code></td>
    <td>The name of the component associated with this deployment. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the deployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the deployment. (IN_PROGRESS, FAILED, SUCCEEDED, DELETE_IN_PROGRESS, DELETE_FAILED, DELETE_COMPLETE, CANCELLING, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentStatusMessage" /></td>
    <td><code>string</code></td>
    <td>The deployment status message.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the environment associated with this deployment. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="initialState" /></td>
    <td><code>object</code></td>
    <td>The initial state of the target resource at the time of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="lastAttemptedDeploymentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the last attempted deployment. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the deployment was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSucceededDeploymentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the last successful deployment. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceInstanceName" /></td>
    <td><code>string</code></td>
    <td>The name of the deployment's service instance. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The name of the service in this deployment. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="targetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the target of the deployment. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):&#91;a-zA-Z0-9-&#93;+:&#91;a-zA-Z0-9-&#93;*:\d&#123;12&#125;:(&#91;\w+=,.@-&#93;+&#91;/:&#93;)*&#91;\w+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="targetResourceCreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the depoyment target was created.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type of the deployment target. It can be an environment, service, service instance, or component. (ENVIRONMENT, SERVICE_PIPELINE, SERVICE_INSTANCE, COMPONENT)</td>
</tr>
<tr>
    <td><CopyableCode code="targetState" /></td>
    <td><code>object</code></td>
    <td>The target state of the target resource at the time of the deployment.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_deployments">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the deployment. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="completedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the deployment was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="componentName" /></td>
    <td><code>string</code></td>
    <td>The name of the component associated with the deployment. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the deployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the deployment. (IN_PROGRESS, FAILED, SUCCEEDED, DELETE_IN_PROGRESS, DELETE_FAILED, DELETE_COMPLETE, CANCELLING, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the environment associated with the deployment. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastAttemptedDeploymentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the last attempted deployment. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the deployment was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSucceededDeploymentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the last successful deployment. (pattern: &lt;code&gt;^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceInstanceName" /></td>
    <td><code>string</code></td>
    <td>The name of the service instance associated with the deployment. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The name of the service associated with the deployment. (pattern: &lt;code&gt;^&#91;0-9A-Za-z&#93;+&#91;0-9A-Za-z_\-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="targetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the target of the deployment. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov):&#91;a-zA-Z0-9-&#93;+:&#91;a-zA-Z0-9-&#93;*:\d&#123;12&#125;:(&#91;\w+=,.@-&#93;+&#91;/:&#93;)*&#91;\w+=,.@-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="targetResourceCreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the target resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type of the deployment target. It can be an environment, service, service instance, or component. (ENVIRONMENT, SERVICE_PIPELINE, SERVICE_INSTANCE, COMPONENT)</td>
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
    <td><a href="#get_deployment"><CopyableCode code="get_deployment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get detailed data for a deployment.</td>
</tr>
<tr>
    <td><a href="#list_deployments"><CopyableCode code="list_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List deployments. You can filter the result list by environment, service, or a single service instance.</td>
</tr>
<tr>
    <td><a href="#delete_deployment"><CopyableCode code="delete_deployment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the deployment.</td>
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
    defaultValue="get_deployment"
    values={[
        { label: 'get_deployment', value: 'get_deployment' },
        { label: 'list_deployments', value: 'list_deployments' }
    ]}
>
<TabItem value="get_deployment">

Get detailed data for a deployment.

```sql
SELECT
id,
arn,
completedAt,
componentName,
createdAt,
deploymentStatus,
deploymentStatusMessage,
environmentName,
initialState,
lastAttemptedDeploymentId,
lastModifiedAt,
lastSucceededDeploymentId,
serviceInstanceName,
serviceName,
targetArn,
targetResourceCreatedAt,
targetResourceType,
targetState
FROM aws.proton.deployments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_deployments">

List deployments. You can filter the result list by environment, service, or a single service instance.

```sql
SELECT
id,
arn,
completedAt,
componentName,
createdAt,
deploymentStatus,
environmentName,
lastAttemptedDeploymentId,
lastModifiedAt,
lastSucceededDeploymentId,
serviceInstanceName,
serviceName,
targetArn,
targetResourceCreatedAt,
targetResourceType
FROM aws.proton.deployments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_deployment"
    values={[
        { label: 'delete_deployment', value: 'delete_deployment' }
    ]}
>
<TabItem value="delete_deployment">

Delete the deployment.

```sql
DELETE FROM aws.proton.deployments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
