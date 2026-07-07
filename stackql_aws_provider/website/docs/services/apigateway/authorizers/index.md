--- 
title: authorizers
hide_title: false
hide_table_of_contents: false
keywords:
  - authorizers
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

Creates, updates, deletes, gets or lists an <code>authorizers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="authorizers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.authorizers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_authorizer"
    values={[
        { label: 'get_authorizer', value: 'get_authorizer' },
        { label: 'get_authorizers', value: 'get_authorizers' }
    ]}
>
<TabItem value="get_authorizer">

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
    <td>The identifier for the authorizer resource.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the authorizer.</td>
</tr>
<tr>
    <td><CopyableCode code="authType" /></td>
    <td><code>string</code></td>
    <td>Optional customer-defined field, used in OpenAPI imports and exports without functional impact.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizerCredentials" /></td>
    <td><code>string</code></td>
    <td>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizerResultTtlInSeconds" /></td>
    <td><code>integer</code></td>
    <td>The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizerUri" /></td>
    <td><code>string</code></td>
    <td>Specifies the authorizer's Uniform Resource Identifier (URI). For TOKEN or REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:&#123;account_id&#125;:function:&#123;lambda_function_name&#125;/invocations. In general, the URI has this form arn:aws:apigateway:&#123;region&#125;:lambda:path/&#123;service_api&#125;, where &#123;region&#125; is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/&#91;FunctionARN&#93;/invocations.</td>
</tr>
<tr>
    <td><CopyableCode code="identitySource" /></td>
    <td><code>string</code></td>
    <td>The identity source for which authorization is requested. For a TOKEN or COGNITO_USER_POOLS authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is Auth, the header mapping expression is method.request.header.Auth. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is method.request.header.Auth, method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.</td>
</tr>
<tr>
    <td><CopyableCode code="identityValidationExpression" /></td>
    <td><code>string</code></td>
    <td>A validation expression for the incoming identity token. For TOKEN authorizers, this value is a regular expression. For COGNITO_USER_POOLS authorizers, API Gateway will match the aud field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the REQUEST authorizer.</td>
</tr>
<tr>
    <td><CopyableCode code="providerARNs" /></td>
    <td><code>array</code></td>
    <td>A list of the Amazon Cognito user pool ARNs for the COGNITO_USER_POOLS authorizer. Each element is of this format: arn:aws:cognito-idp:&#123;region&#125;:&#123;account_id&#125;:userpool/&#123;user_pool_id&#125;. For a TOKEN or REQUEST authorizer, this is not defined.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The authorizer type. Valid values are TOKEN for a Lambda function using a single authorization token submitted in a custom header, REQUEST for a Lambda function using incoming request parameters, and COGNITO_USER_POOLS for using an Amazon Cognito user pool. (TOKEN, REQUEST, COGNITO_USER_POOLS)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_authorizers">

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
    <td>The identifier for the authorizer resource.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the authorizer.</td>
</tr>
<tr>
    <td><CopyableCode code="authType" /></td>
    <td><code>string</code></td>
    <td>Optional customer-defined field, used in OpenAPI imports and exports without functional impact.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizerCredentials" /></td>
    <td><code>string</code></td>
    <td>Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizerResultTtlInSeconds" /></td>
    <td><code>integer</code></td>
    <td>The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizerUri" /></td>
    <td><code>string</code></td>
    <td>Specifies the authorizer's Uniform Resource Identifier (URI). For TOKEN or REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:&#123;account_id&#125;:function:&#123;lambda_function_name&#125;/invocations. In general, the URI has this form arn:aws:apigateway:&#123;region&#125;:lambda:path/&#123;service_api&#125;, where &#123;region&#125; is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/&#91;FunctionARN&#93;/invocations.</td>
</tr>
<tr>
    <td><CopyableCode code="identitySource" /></td>
    <td><code>string</code></td>
    <td>The identity source for which authorization is requested. For a TOKEN or COGNITO_USER_POOLS authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is Auth, the header mapping expression is method.request.header.Auth. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is method.request.header.Auth, method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.</td>
</tr>
<tr>
    <td><CopyableCode code="identityValidationExpression" /></td>
    <td><code>string</code></td>
    <td>A validation expression for the incoming identity token. For TOKEN authorizers, this value is a regular expression. For COGNITO_USER_POOLS authorizers, API Gateway will match the aud field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the REQUEST authorizer.</td>
</tr>
<tr>
    <td><CopyableCode code="providerARNs" /></td>
    <td><code>array</code></td>
    <td>A list of the Amazon Cognito user pool ARNs for the COGNITO_USER_POOLS authorizer. Each element is of this format: arn:aws:cognito-idp:&#123;region&#125;:&#123;account_id&#125;:userpool/&#123;user_pool_id&#125;. For a TOKEN or REQUEST authorizer, this is not defined.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The authorizer type. Valid values are TOKEN for a Lambda function using a single authorization token submitted in a custom header, REQUEST for a Lambda function using incoming request parameters, and COGNITO_USER_POOLS for using an Amazon Cognito user pool. (TOKEN, REQUEST, COGNITO_USER_POOLS)</td>
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
    <td><a href="#get_authorizer"><CopyableCode code="get_authorizer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-authorizer_id"><code>authorizer_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describe an existing Authorizer resource.</td>
</tr>
<tr>
    <td><a href="#get_authorizers"><CopyableCode code="get_authorizers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-position"><code>position</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Describe an existing Authorizers resource.</td>
</tr>
<tr>
    <td><a href="#create_authorizer"><CopyableCode code="create_authorizer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Adds a new Authorizer resource to an existing RestApi resource.</td>
</tr>
<tr>
    <td><a href="#update_authorizer"><CopyableCode code="update_authorizer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-authorizer_id"><code>authorizer_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing Authorizer resource.</td>
</tr>
<tr>
    <td><a href="#delete_authorizer"><CopyableCode code="delete_authorizer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-authorizer_id"><code>authorizer_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing Authorizer resource.</td>
</tr>
<tr>
    <td><a href="#test_invoke_authorizer"><CopyableCode code="test_invoke_authorizer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-authorizer_id"><code>authorizer_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Simulate the execution of an Authorizer in your RestApi with headers, parameters, and an incoming request body.</td>
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
<tr id="parameter-authorizer_id">
    <td><CopyableCode code="authorizer_id" /></td>
    <td><code>string</code></td>
    <td>Specifies a test invoke authorizer request's Authorizer ID.</td>
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
    defaultValue="get_authorizer"
    values={[
        { label: 'get_authorizer', value: 'get_authorizer' },
        { label: 'get_authorizers', value: 'get_authorizers' }
    ]}
>
<TabItem value="get_authorizer">

Describe an existing Authorizer resource.

```sql
SELECT
id,
name,
authType,
authorizerCredentials,
authorizerResultTtlInSeconds,
authorizerUri,
identitySource,
identityValidationExpression,
providerARNs,
type_
FROM aws.apigateway.authorizers
WHERE restapi_id = '{{ restapi_id }}' -- required
AND authorizer_id = '{{ authorizer_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_authorizers">

Describe an existing Authorizers resource.

```sql
SELECT
id,
name,
authType,
authorizerCredentials,
authorizerResultTtlInSeconds,
authorizerUri,
identitySource,
identityValidationExpression,
providerARNs,
type_
FROM aws.apigateway.authorizers
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
    defaultValue="create_authorizer"
    values={[
        { label: 'create_authorizer', value: 'create_authorizer' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_authorizer">

Adds a new Authorizer resource to an existing RestApi resource.

```sql
INSERT INTO aws.apigateway.authorizers (
name,
type,
providerARNs,
authType,
authorizerUri,
authorizerCredentials,
identitySource,
identityValidationExpression,
authorizerResultTtlInSeconds,
restapi_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ type }}' /* required */,
'{{ providerARNs }}',
'{{ authType }}',
'{{ authorizerUri }}',
'{{ authorizerCredentials }}',
'{{ identitySource }}',
'{{ identityValidationExpression }}',
{{ authorizerResultTtlInSeconds }},
'{{ restapi_id }}',
'{{ region }}'
RETURNING
id,
name,
authType,
authorizerCredentials,
authorizerResultTtlInSeconds,
authorizerUri,
identitySource,
identityValidationExpression,
providerARNs,
type_
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: authorizers
  props:
    - name: restapi_id
      value: "{{ restapi_id }}"
      description: Required parameter for the authorizers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the authorizers resource.
    - name: name
      value: "{{ name }}"
    - name: type
      value: "{{ type }}"
      description: |
        The authorizer type. Valid values are TOKEN for a Lambda function using a single authorization token submitted in a custom header, REQUEST for a Lambda function using incoming request parameters, and COGNITO_USER_POOLS for using an Amazon Cognito user pool.
      valid_values: ['TOKEN', 'REQUEST', 'COGNITO_USER_POOLS']
    - name: providerARNs
      value:
        - "{{ providerARNs }}"
    - name: authType
      value: "{{ authType }}"
    - name: authorizerUri
      value: "{{ authorizerUri }}"
    - name: authorizerCredentials
      value: "{{ authorizerCredentials }}"
    - name: identitySource
      value: "{{ identitySource }}"
    - name: identityValidationExpression
      value: "{{ identityValidationExpression }}"
    - name: authorizerResultTtlInSeconds
      value: {{ authorizerResultTtlInSeconds }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_authorizer"
    values={[
        { label: 'update_authorizer', value: 'update_authorizer' }
    ]}
>
<TabItem value="update_authorizer">

Updates an existing Authorizer resource.

```sql
UPDATE aws.apigateway.authorizers
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
restapi_id = '{{ restapi_id }}' --required
AND authorizer_id = '{{ authorizer_id }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
authType,
authorizerCredentials,
authorizerResultTtlInSeconds,
authorizerUri,
identitySource,
identityValidationExpression,
providerARNs,
type_;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_authorizer"
    values={[
        { label: 'delete_authorizer', value: 'delete_authorizer' }
    ]}
>
<TabItem value="delete_authorizer">

Deletes an existing Authorizer resource.

```sql
DELETE FROM aws.apigateway.authorizers
WHERE restapi_id = '{{ restapi_id }}' --required
AND authorizer_id = '{{ authorizer_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="test_invoke_authorizer"
    values={[
        { label: 'test_invoke_authorizer', value: 'test_invoke_authorizer' }
    ]}
>
<TabItem value="test_invoke_authorizer">

Simulate the execution of an Authorizer in your RestApi with headers, parameters, and an incoming request body.

```sql
EXEC aws.apigateway.authorizers.test_invoke_authorizer 
@restapi_id='{{ restapi_id }}' --required, 
@authorizer_id='{{ authorizer_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"headers": "{{ headers }}", 
"multiValueHeaders": "{{ multiValueHeaders }}", 
"pathWithQueryString": "{{ pathWithQueryString }}", 
"body": "{{ body }}", 
"stageVariables": "{{ stageVariables }}", 
"additionalContext": "{{ additionalContext }}"
}'
;
```
</TabItem>
</Tabs>
