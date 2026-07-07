--- 
title: stages
hide_title: false
hide_table_of_contents: false
keywords:
  - stages
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

Creates, updates, deletes, gets or lists a <code>stages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.stages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_stage"
    values={[
        { label: 'get_stage', value: 'get_stage' },
        { label: 'get_stages', value: 'get_stages' }
    ]}
>
<TabItem value="get_stage">

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
    <td><CopyableCode code="accessLogSettings" /></td>
    <td><code>object</code></td>
    <td>Settings for logging access in this stage.</td>
</tr>
<tr>
    <td><CopyableCode code="cacheClusterEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether a cache cluster is enabled for the stage. To activate a method-level cache, set CachingEnabled to true for a method.</td>
</tr>
<tr>
    <td><CopyableCode code="cacheClusterSize" /></td>
    <td><code>string</code></td>
    <td>Returns the size of the CacheCluster. (0.5, 1.6, 6.1, 13.5, 28.4, 58.2, 118, 237)</td>
</tr>
<tr>
    <td><CopyableCode code="cacheClusterStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the cache cluster for the stage, if enabled. (CREATE_IN_PROGRESS, AVAILABLE, DELETE_IN_PROGRESS, NOT_AVAILABLE, FLUSH_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="canarySettings" /></td>
    <td><code>object</code></td>
    <td>Configuration settings of a canary deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="clientCertificateId" /></td>
    <td><code>string</code></td>
    <td>The identifier of a client certificate for an API stage.</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the stage was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Deployment that the stage points to.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The stage's description.</td>
</tr>
<tr>
    <td><CopyableCode code="documentationVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the associated API documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the stage last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="methodSettings" /></td>
    <td><code>object</code></td>
    <td>A map that defines the method settings for a Stage resource. Keys (designated as /&#123;method_setting_key below) are method paths defined as &#123;resource_path&#125;/&#123;http_method&#125; for an individual method override, or /\*/\* for overriding all methods in the stage.</td>
</tr>
<tr>
    <td><CopyableCode code="stageName" /></td>
    <td><code>string</code></td>
    <td>The name of the stage is the first path segment in the Uniform Resource Identifier (URI) of a call to API Gateway. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The collection of tags. Each tag element is associated with a given resource.</td>
</tr>
<tr>
    <td><CopyableCode code="tracingEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether active tracing with X-ray is enabled for the Stage.</td>
</tr>
<tr>
    <td><CopyableCode code="variables" /></td>
    <td><code>object</code></td>
    <td>A map that defines the stage variables for a Stage resource. Variable names can have alphanumeric and underscore characters, and the values must match &#91;A-Za-z0-9-._~:/?#&=,&#93;+.</td>
</tr>
<tr>
    <td><CopyableCode code="webAclArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the WebAcl associated with the Stage.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_stages">

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
    <td><CopyableCode code="item" /></td>
    <td><code>array</code></td>
    <td>The current page of elements from this collection.</td>
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
    <td><a href="#get_stage"><CopyableCode code="get_stage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-stage_name"><code>stage_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a Stage resource.</td>
</tr>
<tr>
    <td><a href="#get_stages"><CopyableCode code="get_stages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-deploymentId"><code>deploymentId</code></a></td>
    <td>Gets information about one or more Stage resources.</td>
</tr>
<tr>
    <td><a href="#create_stage"><CopyableCode code="create_stage" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-stageName"><code>stageName</code></a>, <a href="#parameter-deploymentId"><code>deploymentId</code></a></td>
    <td></td>
    <td>Creates a new Stage resource that references a pre-existing Deployment for the API.</td>
</tr>
<tr>
    <td><a href="#update_stage"><CopyableCode code="update_stage" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-stage_name"><code>stage_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Changes information about a Stage resource.</td>
</tr>
<tr>
    <td><a href="#delete_stage"><CopyableCode code="delete_stage" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-stage_name"><code>stage_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Stage resource.</td>
</tr>
<tr>
    <td><a href="#flush_stage_authorizers_cache"><CopyableCode code="flush_stage_authorizers_cache" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-stage_name"><code>stage_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Flushes all authorizer cache entries on a stage.</td>
</tr>
<tr>
    <td><a href="#flush_stage_cache"><CopyableCode code="flush_stage_cache" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-stage_name"><code>stage_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Flushes a stage's cache.</td>
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
<tr id="parameter-restapi_id">
    <td><CopyableCode code="restapi_id" /></td>
    <td><code>string</code></td>
    <td>The string identifier of the associated RestApi.</td>
</tr>
<tr id="parameter-stage_name">
    <td><CopyableCode code="stage_name" /></td>
    <td><code>string</code></td>
    <td>The name of the stage to flush its cache.</td>
</tr>
<tr id="parameter-deploymentId">
    <td><CopyableCode code="deploymentId" /></td>
    <td><code>string</code></td>
    <td>The stages' deployment identifiers.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_stage"
    values={[
        { label: 'get_stage', value: 'get_stage' },
        { label: 'get_stages', value: 'get_stages' }
    ]}
>
<TabItem value="get_stage">

Gets information about a Stage resource.

```sql
SELECT
accessLogSettings,
cacheClusterEnabled,
cacheClusterSize,
cacheClusterStatus,
canarySettings,
clientCertificateId,
createdDate,
deploymentId,
description,
documentationVersion,
lastUpdatedDate,
methodSettings,
stageName,
tags,
tracingEnabled,
variables,
webAclArn
FROM aws.apigateway.stages
WHERE restapi_id = '{{ restapi_id }}' -- required
AND stage_name = '{{ stage_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_stages">

Gets information about one or more Stage resources.

```sql
SELECT
item
FROM aws.apigateway.stages
WHERE restapi_id = '{{ restapi_id }}' -- required
AND region = '{{ region }}' -- required
AND deploymentId = '{{ deploymentId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_stage"
    values={[
        { label: 'create_stage', value: 'create_stage' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_stage">

Creates a new Stage resource that references a pre-existing Deployment for the API.

```sql
INSERT INTO aws.apigateway.stages (
stageName,
deploymentId,
description,
cacheClusterEnabled,
cacheClusterSize,
variables,
documentationVersion,
canarySettings,
tracingEnabled,
tags,
restapi_id,
region
)
SELECT 
'{{ stageName }}' /* required */,
'{{ deploymentId }}' /* required */,
'{{ description }}',
{{ cacheClusterEnabled }},
'{{ cacheClusterSize }}',
'{{ variables }}',
'{{ documentationVersion }}',
'{{ canarySettings }}',
{{ tracingEnabled }},
'{{ tags }}',
'{{ restapi_id }}',
'{{ region }}'
RETURNING
accessLogSettings,
cacheClusterEnabled,
cacheClusterSize,
cacheClusterStatus,
canarySettings,
clientCertificateId,
createdDate,
deploymentId,
description,
documentationVersion,
lastUpdatedDate,
methodSettings,
stageName,
tags,
tracingEnabled,
variables,
webAclArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stages
  props:
    - name: restapi_id
      value: "{{ restapi_id }}"
      description: Required parameter for the stages resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the stages resource.
    - name: stageName
      value: "{{ stageName }}"
    - name: deploymentId
      value: "{{ deploymentId }}"
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
    - name: documentationVersion
      value: "{{ documentationVersion }}"
    - name: canarySettings
      description: |
        Configuration settings of a canary deployment.
      value:
        percentTraffic: {{ percentTraffic }}
        deploymentId: "{{ deploymentId }}"
        stageVariableOverrides: "{{ stageVariableOverrides }}"
        useStageCache: {{ useStageCache }}
    - name: tracingEnabled
      value: {{ tracingEnabled }}
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_stage"
    values={[
        { label: 'update_stage', value: 'update_stage' }
    ]}
>
<TabItem value="update_stage">

Changes information about a Stage resource.

```sql
UPDATE aws.apigateway.stages
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
restapi_id = '{{ restapi_id }}' --required
AND stage_name = '{{ stage_name }}' --required
AND region = '{{ region }}' --required
RETURNING
accessLogSettings,
cacheClusterEnabled,
cacheClusterSize,
cacheClusterStatus,
canarySettings,
clientCertificateId,
createdDate,
deploymentId,
description,
documentationVersion,
lastUpdatedDate,
methodSettings,
stageName,
tags,
tracingEnabled,
variables,
webAclArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_stage"
    values={[
        { label: 'delete_stage', value: 'delete_stage' }
    ]}
>
<TabItem value="delete_stage">

Deletes a Stage resource.

```sql
DELETE FROM aws.apigateway.stages
WHERE restapi_id = '{{ restapi_id }}' --required
AND stage_name = '{{ stage_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="flush_stage_authorizers_cache"
    values={[
        { label: 'flush_stage_authorizers_cache', value: 'flush_stage_authorizers_cache' },
        { label: 'flush_stage_cache', value: 'flush_stage_cache' }
    ]}
>
<TabItem value="flush_stage_authorizers_cache">

Flushes all authorizer cache entries on a stage.

```sql
EXEC aws.apigateway.stages.flush_stage_authorizers_cache 
@restapi_id='{{ restapi_id }}' --required, 
@stage_name='{{ stage_name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="flush_stage_cache">

Flushes a stage's cache.

```sql
EXEC aws.apigateway.stages.flush_stage_cache 
@restapi_id='{{ restapi_id }}' --required, 
@stage_name='{{ stage_name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
