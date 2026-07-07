--- 
title: methods
hide_title: false
hide_table_of_contents: false
keywords:
  - methods
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

Creates, updates, deletes, gets or lists a <code>methods</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="methods" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.methods" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_method"
    values={[
        { label: 'get_method', value: 'get_method' }
    ]}
>
<TabItem value="get_method">

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
    <td><CopyableCode code="apiKeyRequired" /></td>
    <td><code>boolean</code></td>
    <td>A boolean flag specifying whether a valid ApiKey is required to invoke this method.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizationScopes" /></td>
    <td><code>array</code></td>
    <td>A list of authorization scopes configured on the method. The scopes are used with a COGNITO_USER_POOLS authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizationType" /></td>
    <td><code>string</code></td>
    <td>The method's authorization type. Valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, CUSTOM for using a custom authorizer, or COGNITO_USER_POOLS for using a Cognito user pool.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizerId" /></td>
    <td><code>string</code></td>
    <td>The identifier of an Authorizer to use on this method. The authorizationType must be CUSTOM.</td>
</tr>
<tr>
    <td><CopyableCode code="httpMethod" /></td>
    <td><code>string</code></td>
    <td>The method's HTTP verb.</td>
</tr>
<tr>
    <td><CopyableCode code="methodIntegration" /></td>
    <td><code>object</code></td>
    <td>Represents an HTTP, HTTP_PROXY, AWS, AWS_PROXY, or Mock integration.</td>
</tr>
<tr>
    <td><CopyableCode code="methodResponses" /></td>
    <td><code>object</code></td>
    <td>Gets a method response associated with a given HTTP status code.</td>
</tr>
<tr>
    <td><CopyableCode code="operationName" /></td>
    <td><code>string</code></td>
    <td>A human-friendly operation identifier for the method. For example, you can assign the operationName of ListPets for the GET /pets method in the PetStore example.</td>
</tr>
<tr>
    <td><CopyableCode code="requestModels" /></td>
    <td><code>object</code></td>
    <td>A key-value map specifying data schemas, represented by Model resources, (as the mapped value) of the request payloads of given content types (as the mapping key).</td>
</tr>
<tr>
    <td><CopyableCode code="requestParameters" /></td>
    <td><code>object</code></td>
    <td>A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key is a method request parameter name matching the pattern of method.request.&#123;location&#125;.&#123;name&#125;, where location is querystring, path, or header and name is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (true) or optional (false). The method request parameter names defined here are available in Integration to be mapped to integration request parameters or templates.</td>
</tr>
<tr>
    <td><CopyableCode code="requestValidatorId" /></td>
    <td><code>string</code></td>
    <td>The identifier of a RequestValidator for request validation.</td>
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
    <td><a href="#get_method"><CopyableCode code="get_method" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-http_method"><code>http_method</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describe an existing Method resource.</td>
</tr>
<tr>
    <td><a href="#update_method"><CopyableCode code="update_method" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-http_method"><code>http_method</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing Method resource.</td>
</tr>
<tr>
    <td><a href="#put_method"><CopyableCode code="put_method" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-http_method"><code>http_method</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-authorizationType"><code>authorizationType</code></a></td>
    <td></td>
    <td>Add a method to an existing Resource resource.</td>
</tr>
<tr>
    <td><a href="#delete_method"><CopyableCode code="delete_method" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-http_method"><code>http_method</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing Method resource.</td>
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
<tr id="parameter-http_method">
    <td><CopyableCode code="http_method" /></td>
    <td><code>string</code></td>
    <td>The HTTP verb of the Method resource.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The Resource identifier for the Method resource.</td>
</tr>
<tr id="parameter-restapi_id">
    <td><CopyableCode code="restapi_id" /></td>
    <td><code>string</code></td>
    <td>The string identifier of the associated RestApi.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_method"
    values={[
        { label: 'get_method', value: 'get_method' }
    ]}
>
<TabItem value="get_method">

Describe an existing Method resource.

```sql
SELECT
apiKeyRequired,
authorizationScopes,
authorizationType,
authorizerId,
httpMethod,
methodIntegration,
methodResponses,
operationName,
requestModels,
requestParameters,
requestValidatorId
FROM aws.apigateway.methods
WHERE restapi_id = '{{ restapi_id }}' -- required
AND resource_id = '{{ resource_id }}' -- required
AND http_method = '{{ http_method }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_method"
    values={[
        { label: 'update_method', value: 'update_method' }
    ]}
>
<TabItem value="update_method">

Updates an existing Method resource.

```sql
UPDATE aws.apigateway.methods
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
restapi_id = '{{ restapi_id }}' --required
AND resource_id = '{{ resource_id }}' --required
AND http_method = '{{ http_method }}' --required
AND region = '{{ region }}' --required
RETURNING
apiKeyRequired,
authorizationScopes,
authorizationType,
authorizerId,
httpMethod,
methodIntegration,
methodResponses,
operationName,
requestModels,
requestParameters,
requestValidatorId;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_method"
    values={[
        { label: 'put_method', value: 'put_method' }
    ]}
>
<TabItem value="put_method">

Add a method to an existing Resource resource.

```sql
REPLACE aws.apigateway.methods
SET 
authorizationType = '{{ authorizationType }}',
authorizerId = '{{ authorizerId }}',
apiKeyRequired = {{ apiKeyRequired }},
operationName = '{{ operationName }}',
requestParameters = '{{ requestParameters }}',
requestModels = '{{ requestModels }}',
requestValidatorId = '{{ requestValidatorId }}',
authorizationScopes = '{{ authorizationScopes }}'
WHERE 
restapi_id = '{{ restapi_id }}' --required
AND resource_id = '{{ resource_id }}' --required
AND http_method = '{{ http_method }}' --required
AND region = '{{ region }}' --required
AND authorizationType = '{{ authorizationType }}' --required
RETURNING
apiKeyRequired,
authorizationScopes,
authorizationType,
authorizerId,
httpMethod,
methodIntegration,
methodResponses,
operationName,
requestModels,
requestParameters,
requestValidatorId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_method"
    values={[
        { label: 'delete_method', value: 'delete_method' }
    ]}
>
<TabItem value="delete_method">

Deletes an existing Method resource.

```sql
DELETE FROM aws.apigateway.methods
WHERE restapi_id = '{{ restapi_id }}' --required
AND resource_id = '{{ resource_id }}' --required
AND http_method = '{{ http_method }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
