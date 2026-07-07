--- 
title: route_responses
hide_title: false
hide_table_of_contents: false
keywords:
  - route_responses
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

Creates, updates, deletes, gets or lists a <code>route_responses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="route_responses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewayv2.route_responses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_route_response"
    values={[
        { label: 'get_route_response', value: 'get_route_response' },
        { label: 'get_route_responses', value: 'get_route_responses' }
    ]}
>
<TabItem value="get_route_response">

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
    <td><CopyableCode code="ModelSelectionExpression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="ResponseModels" /></td>
    <td><code>object</code></td>
    <td>Represents the response models of a route response.</td>
</tr>
<tr>
    <td><CopyableCode code="ResponseParameters" /></td>
    <td><code>object</code></td>
    <td>Represents the response parameters of a route response.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteResponseId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteResponseKey" /></td>
    <td><code>string</code></td>
    <td>After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See Selection Expressions for a list of expressions and each expression's associated selection key type.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_route_responses">

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
    <td><CopyableCode code="ModelSelectionExpression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="ResponseModels" /></td>
    <td><code>object</code></td>
    <td>Represents the response models of a route response.</td>
</tr>
<tr>
    <td><CopyableCode code="ResponseParameters" /></td>
    <td><code>object</code></td>
    <td>Represents the response parameters of a route response.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteResponseId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteResponseKey" /></td>
    <td><code>string</code></td>
    <td>After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See Selection Expressions for a list of expressions and each expression's associated selection key type.</td>
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
    <td><a href="#get_route_response"><CopyableCode code="get_route_response" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-route_id"><code>route_id</code></a>, <a href="#parameter-route_response_id"><code>route_response_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a RouteResponse.</td>
</tr>
<tr>
    <td><a href="#get_route_responses"><CopyableCode code="get_route_responses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-route_id"><code>route_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets the RouteResponses for a Route.</td>
</tr>
<tr>
    <td><a href="#create_route_response"><CopyableCode code="create_route_response" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-route_id"><code>route_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RouteResponseKey"><code>RouteResponseKey</code></a></td>
    <td></td>
    <td>Creates a RouteResponse for a Route.</td>
</tr>
<tr>
    <td><a href="#update_route_response"><CopyableCode code="update_route_response" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-route_id"><code>route_id</code></a>, <a href="#parameter-route_response_id"><code>route_response_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a RouteResponse.</td>
</tr>
<tr>
    <td><a href="#delete_route_response"><CopyableCode code="delete_route_response" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-route_id"><code>route_id</code></a>, <a href="#parameter-route_response_id"><code>route_response_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a RouteResponse.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-route_id">
    <td><CopyableCode code="route_id" /></td>
    <td><code>string</code></td>
    <td>The route ID.</td>
</tr>
<tr id="parameter-route_response_id">
    <td><CopyableCode code="route_response_id" /></td>
    <td><code>string</code></td>
    <td>The route response ID.</td>
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
    defaultValue="get_route_response"
    values={[
        { label: 'get_route_response', value: 'get_route_response' },
        { label: 'get_route_responses', value: 'get_route_responses' }
    ]}
>
<TabItem value="get_route_response">

Gets a RouteResponse.

```sql
SELECT
ModelSelectionExpression,
ResponseModels,
ResponseParameters,
RouteResponseId,
RouteResponseKey
FROM aws.apigatewayv2.route_responses
WHERE api_id = '{{ api_id }}' -- required
AND route_id = '{{ route_id }}' -- required
AND route_response_id = '{{ route_response_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_route_responses">

Gets the RouteResponses for a Route.

```sql
SELECT
ModelSelectionExpression,
ResponseModels,
ResponseParameters,
RouteResponseId,
RouteResponseKey
FROM aws.apigatewayv2.route_responses
WHERE api_id = '{{ api_id }}' -- required
AND route_id = '{{ route_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_route_response"
    values={[
        { label: 'create_route_response', value: 'create_route_response' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_route_response">

Creates a RouteResponse for a Route.

```sql
INSERT INTO aws.apigatewayv2.route_responses (
ModelSelectionExpression,
ResponseModels,
ResponseParameters,
RouteResponseKey,
api_id,
route_id,
region
)
SELECT 
'{{ ModelSelectionExpression }}',
'{{ ResponseModels }}',
'{{ ResponseParameters }}',
'{{ RouteResponseKey }}' /* required */,
'{{ api_id }}',
'{{ route_id }}',
'{{ region }}'
RETURNING
ModelSelectionExpression,
ResponseModels,
ResponseParameters,
RouteResponseId,
RouteResponseKey
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: route_responses
  props:
    - name: api_id
      value: "{{ api_id }}"
      description: Required parameter for the route_responses resource.
    - name: route_id
      value: "{{ route_id }}"
      description: Required parameter for the route_responses resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the route_responses resource.
    - name: ModelSelectionExpression
      value: "{{ ModelSelectionExpression }}"
      description: |
        An expression used to extract information at runtime. See Selection Expressions for more information.
    - name: ResponseModels
      value: "{{ ResponseModels }}"
      description: |
        The route models.
    - name: ResponseParameters
      value: "{{ ResponseParameters }}"
      description: |
        The route parameters.
    - name: RouteResponseKey
      value: "{{ RouteResponseKey }}"
      description: |
        After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See Selection Expressions for a list of expressions and each expression's associated selection key type.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_route_response"
    values={[
        { label: 'update_route_response', value: 'update_route_response' }
    ]}
>
<TabItem value="update_route_response">

Updates a RouteResponse.

```sql
UPDATE aws.apigatewayv2.route_responses
SET 
ModelSelectionExpression = '{{ ModelSelectionExpression }}',
ResponseModels = '{{ ResponseModels }}',
ResponseParameters = '{{ ResponseParameters }}',
RouteResponseKey = '{{ RouteResponseKey }}'
WHERE 
api_id = '{{ api_id }}' --required
AND route_id = '{{ route_id }}' --required
AND route_response_id = '{{ route_response_id }}' --required
AND region = '{{ region }}' --required
RETURNING
ModelSelectionExpression,
ResponseModels,
ResponseParameters,
RouteResponseId,
RouteResponseKey;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_route_response"
    values={[
        { label: 'delete_route_response', value: 'delete_route_response' }
    ]}
>
<TabItem value="delete_route_response">

Deletes a RouteResponse.

```sql
DELETE FROM aws.apigatewayv2.route_responses
WHERE api_id = '{{ api_id }}' --required
AND route_id = '{{ route_id }}' --required
AND route_response_id = '{{ route_response_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
