--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - apigatewayv2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewayv2.deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_deployment"
    values={[
        { label: 'get_deployment', value: 'get_deployment' },
        { label: 'get_deployments', value: 'get_deployments' }
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
    <td><CopyableCode code="AutoDeployed" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether a deployment was automatically released.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Deployment resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the deployment: PENDING, FAILED, or SUCCEEDED. (PENDING, FAILED, DEPLOYED)</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentStatusMessage" /></td>
    <td><code>string</code></td>
    <td>May contain additional feedback on the status of an API deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;0-1024&#93;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_deployments">

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
    <td><CopyableCode code="AutoDeployed" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether a deployment was automatically released.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Deployment resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the deployment: PENDING, FAILED, or SUCCEEDED. (PENDING, FAILED, DEPLOYED)</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentStatusMessage" /></td>
    <td><code>string</code></td>
    <td>May contain additional feedback on the status of an API deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;0-1024&#93;.</td>
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
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a Deployment.</td>
</tr>
<tr>
    <td><a href="#get_deployments"><CopyableCode code="get_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets the Deployments for an API.</td>
</tr>
<tr>
    <td><a href="#create_deployment"><CopyableCode code="create_deployment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a Deployment for an API.</td>
</tr>
<tr>
    <td><a href="#update_deployment"><CopyableCode code="update_deployment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a Deployment.</td>
</tr>
<tr>
    <td><a href="#delete_deployment"><CopyableCode code="delete_deployment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Deployment.</td>
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
<tr id="parameter-api_id">
    <td><CopyableCode code="api_id" /></td>
    <td><code>string</code></td>
    <td>The API identifier.</td>
</tr>
<tr id="parameter-deployment_id">
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>The deployment ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>string</code></td>
    <td>The maximum number of elements to be returned for this resource.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The next page of elements from this collection. Not valid for the last element of the collection.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_deployment"
    values={[
        { label: 'get_deployment', value: 'get_deployment' },
        { label: 'get_deployments', value: 'get_deployments' }
    ]}
>
<TabItem value="get_deployment">

Gets a Deployment.

```sql
SELECT
AutoDeployed,
CreatedDate,
DeploymentId,
DeploymentStatus,
DeploymentStatusMessage,
Description
FROM aws.apigatewayv2.deployments
WHERE api_id = '{{ api_id }}' -- required
AND deployment_id = '{{ deployment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_deployments">

Gets the Deployments for an API.

```sql
SELECT
AutoDeployed,
CreatedDate,
DeploymentId,
DeploymentStatus,
DeploymentStatusMessage,
Description
FROM aws.apigatewayv2.deployments
WHERE api_id = '{{ api_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_deployment"
    values={[
        { label: 'create_deployment', value: 'create_deployment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_deployment">

Creates a Deployment for an API.

```sql
INSERT INTO aws.apigatewayv2.deployments (
Description,
StageName,
api_id,
region
)
SELECT 
'{{ Description }}',
'{{ StageName }}',
'{{ api_id }}',
'{{ region }}'
RETURNING
AutoDeployed,
CreatedDate,
DeploymentId,
DeploymentStatus,
DeploymentStatusMessage,
Description
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deployments
  props:
    - name: api_id
      value: "{{ api_id }}"
      description: Required parameter for the deployments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the deployments resource.
    - name: Description
      value: "{{ Description }}"
      description: |
        A string with a length between [0-1024].
    - name: StageName
      value: "{{ StageName }}"
      description: |
        A string with a length between [1-128].
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_deployment"
    values={[
        { label: 'update_deployment', value: 'update_deployment' }
    ]}
>
<TabItem value="update_deployment">

Updates a Deployment.

```sql
UPDATE aws.apigatewayv2.deployments
SET 
Description = '{{ Description }}'
WHERE 
api_id = '{{ api_id }}' --required
AND deployment_id = '{{ deployment_id }}' --required
AND region = '{{ region }}' --required
RETURNING
AutoDeployed,
CreatedDate,
DeploymentId,
DeploymentStatus,
DeploymentStatusMessage,
Description;
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

Deletes a Deployment.

```sql
DELETE FROM aws.apigatewayv2.deployments
WHERE api_id = '{{ api_id }}' --required
AND deployment_id = '{{ deployment_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
