--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - m2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.m2.deployments" /></td></tr>
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
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the application. (pattern: &lt;code&gt;^\S&#123;1,80&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="applicationVersion" /></td>
    <td><code>integer</code></td>
    <td>The application version.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the deployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the deployment. (pattern: &lt;code&gt;^\S&#123;1,80&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the runtime environment. (pattern: &lt;code&gt;^\S&#123;1,80&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the deployment. (Deploying, Succeeded, Failed, Updating Deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the reported status.</td>
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
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the application. (pattern: &lt;code&gt;^\S&#123;1,80&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="applicationVersion" /></td>
    <td><code>integer</code></td>
    <td>The version of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the deployment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the deployment. (pattern: &lt;code&gt;^\S&#123;1,80&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the runtime environment. (pattern: &lt;code&gt;^\S&#123;1,80&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the deployment. (Deploying, Succeeded, Failed, Updating Deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the reported status.</td>
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
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details of a specific deployment with a given deployment identifier.</td>
</tr>
<tr>
    <td><a href="#list_deployments"><CopyableCode code="list_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of all deployments of a specific application. A deployment is a combination of a specific application and a specific version of that application. Each deployment is mapped to a particular application version.</td>
</tr>
<tr>
    <td><a href="#create_deployment"><CopyableCode code="create_deployment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationVersion"><code>applicationVersion</code></a>, <a href="#parameter-environmentId"><code>environmentId</code></a></td>
    <td></td>
    <td>Creates and starts a deployment to deploy an application into a runtime environment.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The application identifier.</td>
</tr>
<tr id="parameter-deployment_id">
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the deployment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of objects to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token returned from a previous call to this operation. This specifies the next item to return. To return to the beginning of the list, exclude this parameter.</td>
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

Gets details of a specific deployment with a given deployment identifier.

```sql
SELECT
applicationId,
applicationVersion,
creationTime,
deploymentId,
environmentId,
status,
statusReason
FROM aws.m2.deployments
WHERE application_id = '{{ application_id }}' -- required
AND deployment_id = '{{ deployment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_deployments">

Returns a list of all deployments of a specific application. A deployment is a combination of a specific application and a specific version of that application. Each deployment is mapped to a particular application version.

```sql
SELECT
applicationId,
applicationVersion,
creationTime,
deploymentId,
environmentId,
status,
statusReason
FROM aws.m2.deployments
WHERE application_id = '{{ application_id }}' -- required
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

Creates and starts a deployment to deploy an application into a runtime environment.

```sql
INSERT INTO aws.m2.deployments (
applicationVersion,
clientToken,
environmentId,
application_id,
region
)
SELECT 
{{ applicationVersion }} /* required */,
'{{ clientToken }}',
'{{ environmentId }}' /* required */,
'{{ application_id }}',
'{{ region }}'
RETURNING
deploymentId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deployments
  props:
    - name: application_id
      value: "{{ application_id }}"
      description: Required parameter for the deployments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the deployments resource.
    - name: applicationVersion
      value: {{ applicationVersion }}
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A client token is a unique, case-sensitive string of up to 128 ASCII characters with ASCII values of 33-126 inclusive. It is generated by the client to ensure idempotent operations, allowing safe retries without unintended side effects.
    - name: environmentId
      value: "{{ environmentId }}"
`}</CodeBlock>

</TabItem>
</Tabs>
