--- 
title: routes
hide_title: false
hide_table_of_contents: false
keywords:
  - routes
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

Creates, updates, deletes, gets or lists a <code>routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="routes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewayv2.routes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_route"
    values={[
        { label: 'get_route', value: 'get_route' },
        { label: 'get_routes', value: 'get_routes' }
    ]}
>
<TabItem value="get_route">

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
    <td><CopyableCode code="ApiGatewayManaged" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</td>
</tr>
<tr>
    <td><CopyableCode code="ApiKeyRequired" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="AuthorizationScopes" /></td>
    <td><code>array</code></td>
    <td>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</td>
</tr>
<tr>
    <td><CopyableCode code="AuthorizationType" /></td>
    <td><code>string</code></td>
    <td>The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. (NONE, AWS_IAM, CUSTOM, JWT)</td>
</tr>
<tr>
    <td><CopyableCode code="AuthorizerId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelSelectionExpression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="OperationName" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-64&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestModels" /></td>
    <td><code>object</code></td>
    <td>The request models for the route. Supported only for WebSocket APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestParameters" /></td>
    <td><code>object</code></td>
    <td>The request parameters for the route. Supported only for WebSocket APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteKey" /></td>
    <td><code>string</code></td>
    <td>After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See Selection Expressions for a list of expressions and each expression's associated selection key type.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteResponseSelectionExpression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="Target" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-128&#93;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_routes">

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
    <td><CopyableCode code="ApiGatewayManaged" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.</td>
</tr>
<tr>
    <td><CopyableCode code="ApiKeyRequired" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether an API key is required for this route. Supported only for WebSocket APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="AuthorizationScopes" /></td>
    <td><code>array</code></td>
    <td>A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</td>
</tr>
<tr>
    <td><CopyableCode code="AuthorizationType" /></td>
    <td><code>string</code></td>
    <td>The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. (NONE, AWS_IAM, CUSTOM, JWT)</td>
</tr>
<tr>
    <td><CopyableCode code="AuthorizerId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="ModelSelectionExpression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="OperationName" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-64&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestModels" /></td>
    <td><code>object</code></td>
    <td>The request models for the route. Supported only for WebSocket APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestParameters" /></td>
    <td><code>object</code></td>
    <td>The request parameters for the route. Supported only for WebSocket APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteKey" /></td>
    <td><code>string</code></td>
    <td>After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See Selection Expressions for a list of expressions and each expression's associated selection key type.</td>
</tr>
<tr>
    <td><CopyableCode code="RouteResponseSelectionExpression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="Target" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-128&#93;.</td>
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
    <td><a href="#get_route"><CopyableCode code="get_route" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-route_id"><code>route_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a Route.</td>
</tr>
<tr>
    <td><a href="#get_routes"><CopyableCode code="get_routes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets the Routes for an API.</td>
</tr>
<tr>
    <td><a href="#create_route"><CopyableCode code="create_route" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RouteKey"><code>RouteKey</code></a></td>
    <td></td>
    <td>Creates a Route for an API.</td>
</tr>
<tr>
    <td><a href="#update_route"><CopyableCode code="update_route" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-route_id"><code>route_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a Route.</td>
</tr>
<tr>
    <td><a href="#delete_route_request_parameter"><CopyableCode code="delete_route_request_parameter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-request_parameter_key"><code>request_parameter_key</code></a>, <a href="#parameter-route_id"><code>route_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a route request parameter. Supported only for WebSocket APIs.</td>
</tr>
<tr>
    <td><a href="#delete_route_settings"><CopyableCode code="delete_route_settings" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-route_key"><code>route_key</code></a>, <a href="#parameter-stage_name"><code>stage_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the RouteSettings for a stage.</td>
</tr>
<tr>
    <td><a href="#delete_route"><CopyableCode code="delete_route" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-route_id"><code>route_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Route.</td>
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
<tr id="parameter-request_parameter_key">
    <td><CopyableCode code="request_parameter_key" /></td>
    <td><code>string</code></td>
    <td>The route request parameter key.</td>
</tr>
<tr id="parameter-route_id">
    <td><CopyableCode code="route_id" /></td>
    <td><code>string</code></td>
    <td>The route ID.</td>
</tr>
<tr id="parameter-route_key">
    <td><CopyableCode code="route_key" /></td>
    <td><code>string</code></td>
    <td>The route key.</td>
</tr>
<tr id="parameter-stage_name">
    <td><CopyableCode code="stage_name" /></td>
    <td><code>string</code></td>
    <td>The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</td>
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
    defaultValue="get_route"
    values={[
        { label: 'get_route', value: 'get_route' },
        { label: 'get_routes', value: 'get_routes' }
    ]}
>
<TabItem value="get_route">

Gets a Route.

```sql
SELECT
ApiGatewayManaged,
ApiKeyRequired,
AuthorizationScopes,
AuthorizationType,
AuthorizerId,
ModelSelectionExpression,
OperationName,
RequestModels,
RequestParameters,
RouteId,
RouteKey,
RouteResponseSelectionExpression,
Target
FROM aws.apigatewayv2.routes
WHERE api_id = '{{ api_id }}' -- required
AND route_id = '{{ route_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_routes">

Gets the Routes for an API.

```sql
SELECT
ApiGatewayManaged,
ApiKeyRequired,
AuthorizationScopes,
AuthorizationType,
AuthorizerId,
ModelSelectionExpression,
OperationName,
RequestModels,
RequestParameters,
RouteId,
RouteKey,
RouteResponseSelectionExpression,
Target
FROM aws.apigatewayv2.routes
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
    defaultValue="create_route"
    values={[
        { label: 'create_route', value: 'create_route' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_route">

Creates a Route for an API.

```sql
INSERT INTO aws.apigatewayv2.routes (
ApiKeyRequired,
AuthorizationScopes,
AuthorizationType,
AuthorizerId,
ModelSelectionExpression,
OperationName,
RequestModels,
RequestParameters,
RouteKey,
RouteResponseSelectionExpression,
Target,
api_id,
region
)
SELECT 
{{ ApiKeyRequired }},
'{{ AuthorizationScopes }}',
'{{ AuthorizationType }}',
'{{ AuthorizerId }}',
'{{ ModelSelectionExpression }}',
'{{ OperationName }}',
'{{ RequestModels }}',
'{{ RequestParameters }}',
'{{ RouteKey }}' /* required */,
'{{ RouteResponseSelectionExpression }}',
'{{ Target }}',
'{{ api_id }}',
'{{ region }}'
RETURNING
ApiGatewayManaged,
ApiKeyRequired,
AuthorizationScopes,
AuthorizationType,
AuthorizerId,
ModelSelectionExpression,
OperationName,
RequestModels,
RequestParameters,
RouteId,
RouteKey,
RouteResponseSelectionExpression,
Target
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: routes
  props:
    - name: api_id
      value: "{{ api_id }}"
      description: Required parameter for the routes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the routes resource.
    - name: ApiKeyRequired
      value: {{ ApiKeyRequired }}
    - name: AuthorizationScopes
      value:
        - "{{ AuthorizationScopes }}"
      description: |
        A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.
    - name: AuthorizationType
      value: "{{ AuthorizationType }}"
      description: |
        The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.
      valid_values: ['NONE', 'AWS_IAM', 'CUSTOM', 'JWT']
    - name: AuthorizerId
      value: "{{ AuthorizerId }}"
      description: |
        The identifier.
    - name: ModelSelectionExpression
      value: "{{ ModelSelectionExpression }}"
      description: |
        An expression used to extract information at runtime. See Selection Expressions for more information.
    - name: OperationName
      value: "{{ OperationName }}"
      description: |
        A string with a length between [1-64].
    - name: RequestModels
      value: "{{ RequestModels }}"
      description: |
        The route models.
    - name: RequestParameters
      value: "{{ RequestParameters }}"
      description: |
        The route parameters.
    - name: RouteKey
      value: "{{ RouteKey }}"
      description: |
        After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See Selection Expressions for a list of expressions and each expression's associated selection key type.
    - name: RouteResponseSelectionExpression
      value: "{{ RouteResponseSelectionExpression }}"
      description: |
        An expression used to extract information at runtime. See Selection Expressions for more information.
    - name: Target
      value: "{{ Target }}"
      description: |
        A string with a length between [1-128].
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_route"
    values={[
        { label: 'update_route', value: 'update_route' }
    ]}
>
<TabItem value="update_route">

Updates a Route.

```sql
UPDATE aws.apigatewayv2.routes
SET 
ApiKeyRequired = {{ ApiKeyRequired }},
AuthorizationScopes = '{{ AuthorizationScopes }}',
AuthorizationType = '{{ AuthorizationType }}',
AuthorizerId = '{{ AuthorizerId }}',
ModelSelectionExpression = '{{ ModelSelectionExpression }}',
OperationName = '{{ OperationName }}',
RequestModels = '{{ RequestModels }}',
RequestParameters = '{{ RequestParameters }}',
RouteKey = '{{ RouteKey }}',
RouteResponseSelectionExpression = '{{ RouteResponseSelectionExpression }}',
Target = '{{ Target }}'
WHERE 
api_id = '{{ api_id }}' --required
AND route_id = '{{ route_id }}' --required
AND region = '{{ region }}' --required
RETURNING
ApiGatewayManaged,
ApiKeyRequired,
AuthorizationScopes,
AuthorizationType,
AuthorizerId,
ModelSelectionExpression,
OperationName,
RequestModels,
RequestParameters,
RouteId,
RouteKey,
RouteResponseSelectionExpression,
Target;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_route_request_parameter"
    values={[
        { label: 'delete_route_request_parameter', value: 'delete_route_request_parameter' },
        { label: 'delete_route_settings', value: 'delete_route_settings' },
        { label: 'delete_route', value: 'delete_route' }
    ]}
>
<TabItem value="delete_route_request_parameter">

Deletes a route request parameter. Supported only for WebSocket APIs.

```sql
DELETE FROM aws.apigatewayv2.routes
WHERE api_id = '{{ api_id }}' --required
AND request_parameter_key = '{{ request_parameter_key }}' --required
AND route_id = '{{ route_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_route_settings">

Deletes the RouteSettings for a stage.

```sql
DELETE FROM aws.apigatewayv2.routes
WHERE api_id = '{{ api_id }}' --required
AND route_key = '{{ route_key }}' --required
AND stage_name = '{{ stage_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_route">

Deletes a Route.

```sql
DELETE FROM aws.apigatewayv2.routes
WHERE api_id = '{{ api_id }}' --required
AND route_id = '{{ route_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
