--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
  - apigateway
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.deployments" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the deployment resource.</td>
</tr>
<tr>
    <td><CopyableCode code="apiSummary" /></td>
    <td><code>object</code></td>
    <td>A summary of the RestApi at the date and time that the deployment resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the deployment resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the deployment resource.</td>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the deployment resource.</td>
</tr>
<tr>
    <td><CopyableCode code="apiSummary" /></td>
    <td><code>object</code></td>
    <td>A summary of the RestApi at the date and time that the deployment resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the deployment resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the deployment resource.</td>
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
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-embed"><code>embed</code></a></td>
    <td>Gets information about a Deployment resource.</td>
</tr>
<tr>
    <td><a href="#get_deployments"><CopyableCode code="get_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-position"><code>position</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Gets information about a Deployments collection.</td>
</tr>
<tr>
    <td><a href="#create_deployment"><CopyableCode code="create_deployment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a Deployment resource, which makes a specified RestApi callable over the internet.</td>
</tr>
<tr>
    <td><a href="#update_deployment"><CopyableCode code="update_deployment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Changes information about a Deployment resource.</td>
</tr>
<tr>
    <td><a href="#delete_deployment"><CopyableCode code="delete_deployment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Deployment resource. Deleting a deployment will only succeed if there are no Stage resources associated with it.</td>
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
<tr id="parameter-deployment_id">
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Deployment resource to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-restapi_id">
    <td><CopyableCode code="restapi_id" /></td>
    <td><code>string</code></td>
    <td>The string identifier of the associated RestApi.</td>
</tr>
<tr id="parameter-embed">
    <td><CopyableCode code="embed" /></td>
    <td><code>array</code></td>
    <td>A query parameter to retrieve the specified embedded resources of the returned Deployment resource in the response. In a REST API call, this embed parameter value is a list of comma-separated strings, as in GET /restapis/&#123;restapi_id&#125;/deployments/&#123;deployment_id&#125;?embed=var1,var2. The SDK and other platform-dependent libraries might use a different format for the list. Currently, this request supports only retrieval of the embedded API summary this way. Hence, the parameter value must be a single-valued list containing only the "apisummary" string. For example, GET /restapis/&#123;restapi_id&#125;/deployments/&#123;deployment_id&#125;?embed=apisummary.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</td>
</tr>
<tr id="parameter-position">
    <td><CopyableCode code="position" /></td>
    <td><code>string</code></td>
    <td>The current pagination position in the paged result set.</td>
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

Gets information about a Deployment resource.

```sql
SELECT
id,
apiSummary,
createdDate,
description
FROM aws.apigateway.deployments
WHERE restapi_id = '{{ restapi_id }}' -- required
AND deployment_id = '{{ deployment_id }}' -- required
AND region = '{{ region }}' -- required
AND embed = '{{ embed }}'
;
```
</TabItem>
<TabItem value="get_deployments">

Gets information about a Deployments collection.

```sql
SELECT
id,
apiSummary,
createdDate,
description
FROM aws.apigateway.deployments
WHERE restapi_id = '{{ restapi_id }}' -- required
AND region = '{{ region }}' -- required
AND position = '{{ position }}'
AND limit = '{{ limit }}'
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

Creates a Deployment resource, which makes a specified RestApi callable over the internet.

```sql
INSERT INTO aws.apigateway.deployments (
stageName,
stageDescription,
description,
cacheClusterEnabled,
cacheClusterSize,
variables,
canarySettings,
tracingEnabled,
restapi_id,
region
)
SELECT 
'{{ stageName }}',
'{{ stageDescription }}',
'{{ description }}',
{{ cacheClusterEnabled }},
'{{ cacheClusterSize }}',
'{{ variables }}',
'{{ canarySettings }}',
{{ tracingEnabled }},
'{{ restapi_id }}',
'{{ region }}'
RETURNING
id,
apiSummary,
createdDate,
description
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deployments
  props:
    - name: restapi_id
      value: "{{ restapi_id }}"
      description: Required parameter for the deployments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the deployments resource.
    - name: stageName
      value: "{{ stageName }}"
    - name: stageDescription
      value: "{{ stageDescription }}"
    - name: description
      value: "{{ description }}"
    - name: cacheClusterEnabled
      value: {{ cacheClusterEnabled }}
    - name: cacheClusterSize
      value: "{{ cacheClusterSize }}"
      description: |
        Returns the size of the CacheCluster.
      valid_values: ['0.5', '1.6', '6.1', '13.5', '28.4', '58.2', '118', '237']
    - name: variables
      value: "{{ variables }}"
    - name: canarySettings
      description: |
        The input configuration for a canary deployment.
      value:
        percentTraffic: {{ percentTraffic }}
        stageVariableOverrides: "{{ stageVariableOverrides }}"
        useStageCache: {{ useStageCache }}
    - name: tracingEnabled
      value: {{ tracingEnabled }}
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

Changes information about a Deployment resource.

```sql
UPDATE aws.apigateway.deployments
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
restapi_id = '{{ restapi_id }}' --required
AND deployment_id = '{{ deployment_id }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
apiSummary,
createdDate,
description;
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

Deletes a Deployment resource. Deleting a deployment will only succeed if there are no Stage resources associated with it.

```sql
DELETE FROM aws.apigateway.deployments
WHERE restapi_id = '{{ restapi_id }}' --required
AND deployment_id = '{{ deployment_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
