--- 
title: prompt_routers
hide_title: false
hide_table_of_contents: false
keywords:
  - prompt_routers
  - bedrock
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

Creates, updates, deletes, gets or lists a <code>prompt_routers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="prompt_routers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock.prompt_routers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_prompt_router"
    values={[
        { label: 'get_prompt_router', value: 'get_prompt_router' },
        { label: 'list_prompt_routers', value: 'list_prompt_routers' }
    ]}
>
<TabItem value="get_prompt_router">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the router was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The router's description. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z:.&#93;&#91; _-&#93;?)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fallbackModel" /></td>
    <td><code>object</code></td>
    <td>The target model for a prompt router.</td>
</tr>
<tr>
    <td><CopyableCode code="models" /></td>
    <td><code>array</code></td>
    <td>The router's models.</td>
</tr>
<tr>
    <td><CopyableCode code="promptRouterArn" /></td>
    <td><code>string</code></td>
    <td>The prompt router's ARN (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:default-prompt-router/&#91;a-zA-Z0-9-:.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="promptRouterName" /></td>
    <td><code>string</code></td>
    <td>The router's name. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91; _-&#93;?)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="routingCriteria" /></td>
    <td><code>object</code></td>
    <td>Routing criteria for a prompt router.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The router's status. (AVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The router's type. (custom, default)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the router was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_prompt_routers">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the router was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The router's description. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z:.&#93;&#91; _-&#93;?)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fallbackModel" /></td>
    <td><code>object</code></td>
    <td>The target model for a prompt router.</td>
</tr>
<tr>
    <td><CopyableCode code="models" /></td>
    <td><code>array</code></td>
    <td>The router's models.</td>
</tr>
<tr>
    <td><CopyableCode code="promptRouterArn" /></td>
    <td><code>string</code></td>
    <td>The router's ARN. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:default-prompt-router/&#91;a-zA-Z0-9-:.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="promptRouterName" /></td>
    <td><code>string</code></td>
    <td>The router's name. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91; _-&#93;?)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="routingCriteria" /></td>
    <td><code>object</code></td>
    <td>Routing criteria for a prompt router.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The router's status. (AVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The summary's type. (custom, default)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the router was updated.</td>
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
    <td><a href="#get_prompt_router"><CopyableCode code="get_prompt_router" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-prompt_router_arn"><code>prompt_router_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a prompt router.</td>
</tr>
<tr>
    <td><a href="#list_prompt_routers"><CopyableCode code="list_prompt_routers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>Retrieves a list of prompt routers.</td>
</tr>
<tr>
    <td><a href="#create_prompt_router"><CopyableCode code="create_prompt_router" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-promptRouterName"><code>promptRouterName</code></a>, <a href="#parameter-models"><code>models</code></a>, <a href="#parameter-routingCriteria"><code>routingCriteria</code></a>, <a href="#parameter-fallbackModel"><code>fallbackModel</code></a></td>
    <td></td>
    <td>Creates a prompt router that manages the routing of requests between multiple foundation models based on the routing criteria.</td>
</tr>
<tr>
    <td><a href="#delete_prompt_router"><CopyableCode code="delete_prompt_router" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-prompt_router_arn"><code>prompt_router_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified prompt router. This action cannot be undone.</td>
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
<tr id="parameter-prompt_router_arn">
    <td><CopyableCode code="prompt_router_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the prompt router to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of prompt routers to return in one page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the prompt routers, such as whether it's default or custom.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_prompt_router"
    values={[
        { label: 'get_prompt_router', value: 'get_prompt_router' },
        { label: 'list_prompt_routers', value: 'list_prompt_routers' }
    ]}
>
<TabItem value="get_prompt_router">

Retrieves details about a prompt router.

```sql
SELECT
createdAt,
description,
fallbackModel,
models,
promptRouterArn,
promptRouterName,
routingCriteria,
status,
type_,
updatedAt
FROM aws.bedrock.prompt_routers
WHERE prompt_router_arn = '{{ prompt_router_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_prompt_routers">

Retrieves a list of prompt routers.

```sql
SELECT
createdAt,
description,
fallbackModel,
models,
promptRouterArn,
promptRouterName,
routingCriteria,
status,
type_,
updatedAt
FROM aws.bedrock.prompt_routers
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND type = '{{ type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_prompt_router"
    values={[
        { label: 'create_prompt_router', value: 'create_prompt_router' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_prompt_router">

Creates a prompt router that manages the routing of requests between multiple foundation models based on the routing criteria.

```sql
INSERT INTO aws.bedrock.prompt_routers (
clientRequestToken,
promptRouterName,
models,
description,
routingCriteria,
fallbackModel,
tags,
region
)
SELECT 
'{{ clientRequestToken }}',
'{{ promptRouterName }}' /* required */,
'{{ models }}' /* required */,
'{{ description }}',
'{{ routingCriteria }}' /* required */,
'{{ fallbackModel }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
promptRouterArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: prompt_routers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the prompt_routers resource.
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
    - name: promptRouterName
      value: "{{ promptRouterName }}"
    - name: models
      value:
        - modelArn: "{{ modelArn }}"
    - name: description
      value: "{{ description }}"
    - name: routingCriteria
      description: |
        Routing criteria for a prompt router.
      value:
        responseQualityDifference: {{ responseQualityDifference }}
    - name: fallbackModel
      description: |
        The target model for a prompt router.
      value:
        modelArn: "{{ modelArn }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_prompt_router"
    values={[
        { label: 'delete_prompt_router', value: 'delete_prompt_router' }
    ]}
>
<TabItem value="delete_prompt_router">

Deletes a specified prompt router. This action cannot be undone.

```sql
DELETE FROM aws.bedrock.prompt_routers
WHERE prompt_router_arn = '{{ prompt_router_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
