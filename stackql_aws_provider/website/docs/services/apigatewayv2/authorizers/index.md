--- 
title: authorizers
hide_title: false
hide_table_of_contents: false
keywords:
  - authorizers
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

Creates, updates, deletes, gets or lists an <code>authorizers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="authorizers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewayv2.authorizers" /></td></tr>
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
    <td><CopyableCode code="authorizer_credentials_arn" /></td>
    <td><code>string</code></td>
    <td>Represents an Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_id" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_payload_format_version" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-64&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_result_ttl_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>An integer with a value between &#91;0-3600&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_type" /></td>
    <td><code>string</code></td>
    <td>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs). (REQUEST, JWT)</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_uri" /></td>
    <td><code>string</code></td>
    <td>A string representation of a URI with a length between &#91;1-2048&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_simple_responses" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see Working with AWS Lambda authorizers for HTTP APIs</td>
</tr>
<tr>
    <td><CopyableCode code="identity_source" /></td>
    <td><code>array</code></td>
    <td>The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_validation_expression" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;0-1024&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="jwt_configuration" /></td>
    <td><code>object</code></td>
    <td>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-128&#93;.</td>
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
    <td><CopyableCode code="authorizer_credentials_arn" /></td>
    <td><code>string</code></td>
    <td>Represents an Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_id" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_payload_format_version" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-64&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_result_ttl_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>An integer with a value between &#91;0-3600&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_type" /></td>
    <td><code>string</code></td>
    <td>The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs). (REQUEST, JWT)</td>
</tr>
<tr>
    <td><CopyableCode code="authorizer_uri" /></td>
    <td><code>string</code></td>
    <td>A string representation of a URI with a length between &#91;1-2048&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_simple_responses" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see Working with AWS Lambda authorizers for HTTP APIs</td>
</tr>
<tr>
    <td><CopyableCode code="identity_source" /></td>
    <td><code>array</code></td>
    <td>The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_validation_expression" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;0-1024&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="jwt_configuration" /></td>
    <td><code>object</code></td>
    <td>Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
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
    <td><a href="#get_authorizer"><CopyableCode code="get_authorizer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-authorizer_id"><code>authorizer_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Authorizer.</td>
</tr>
<tr>
    <td><a href="#get_authorizers"><CopyableCode code="get_authorizers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets the Authorizers for an API.</td>
</tr>
<tr>
    <td><a href="#create_authorizer"><CopyableCode code="create_authorizer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AuthorizerType"><code>AuthorizerType</code></a>, <a href="#parameter-IdentitySource"><code>IdentitySource</code></a></td>
    <td></td>
    <td>Creates an Authorizer for an API.</td>
</tr>
<tr>
    <td><a href="#update_authorizer"><CopyableCode code="update_authorizer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-authorizer_id"><code>authorizer_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an Authorizer.</td>
</tr>
<tr>
    <td><a href="#delete_authorizer"><CopyableCode code="delete_authorizer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-authorizer_id"><code>authorizer_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Authorizer.</td>
</tr>
<tr>
    <td><a href="#reset_authorizers_cache"><CopyableCode code="reset_authorizers_cache" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-stage_name"><code>stage_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.</td>
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
<tr id="parameter-authorizer_id">
    <td><CopyableCode code="authorizer_id" /></td>
    <td><code>string</code></td>
    <td>The authorizer identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-stage_name">
    <td><CopyableCode code="stage_name" /></td>
    <td><code>string</code></td>
    <td>The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.</td>
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
    defaultValue="get_authorizer"
    values={[
        { label: 'get_authorizer', value: 'get_authorizer' },
        { label: 'get_authorizers', value: 'get_authorizers' }
    ]}
>
<TabItem value="get_authorizer">

Gets an Authorizer.

```sql
SELECT
authorizer_credentials_arn,
authorizer_id,
authorizer_payload_format_version,
authorizer_result_ttl_in_seconds,
authorizer_type,
authorizer_uri,
enable_simple_responses,
identity_source,
identity_validation_expression,
jwt_configuration,
name
FROM aws.apigatewayv2.authorizers
WHERE api_id = '{{ api_id }}' -- required
AND authorizer_id = '{{ authorizer_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_authorizers">

Gets the Authorizers for an API.

```sql
SELECT
authorizer_credentials_arn,
authorizer_id,
authorizer_payload_format_version,
authorizer_result_ttl_in_seconds,
authorizer_type,
authorizer_uri,
enable_simple_responses,
identity_source,
identity_validation_expression,
jwt_configuration,
name
FROM aws.apigatewayv2.authorizers
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
    defaultValue="create_authorizer"
    values={[
        { label: 'create_authorizer', value: 'create_authorizer' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_authorizer">

Creates an Authorizer for an API.

```sql
INSERT INTO aws.apigatewayv2.authorizers (
AuthorizerCredentialsArn,
AuthorizerPayloadFormatVersion,
AuthorizerResultTtlInSeconds,
AuthorizerType,
AuthorizerUri,
EnableSimpleResponses,
IdentitySource,
IdentityValidationExpression,
JwtConfiguration,
Name,
api_id,
region
)
SELECT 
'{{ AuthorizerCredentialsArn }}',
'{{ AuthorizerPayloadFormatVersion }}',
{{ AuthorizerResultTtlInSeconds }},
'{{ AuthorizerType }}' /* required */,
'{{ AuthorizerUri }}',
{{ EnableSimpleResponses }},
'{{ IdentitySource }}' /* required */,
'{{ IdentityValidationExpression }}',
'{{ JwtConfiguration }}',
'{{ Name }}',
'{{ api_id }}',
'{{ region }}'
RETURNING
authorizer_credentials_arn,
authorizer_id,
authorizer_payload_format_version,
authorizer_result_ttl_in_seconds,
authorizer_type,
authorizer_uri,
enable_simple_responses,
identity_source,
identity_validation_expression,
jwt_configuration,
name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: authorizers
  props:
    - name: api_id
      value: "{{ api_id }}"
      description: Required parameter for the authorizers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the authorizers resource.
    - name: AuthorizerCredentialsArn
      value: "{{ AuthorizerCredentialsArn }}"
      description: |
        Represents an Amazon Resource Name (ARN).
    - name: AuthorizerPayloadFormatVersion
      value: "{{ AuthorizerPayloadFormatVersion }}"
      description: |
        A string with a length between [1-64].
    - name: AuthorizerResultTtlInSeconds
      value: {{ AuthorizerResultTtlInSeconds }}
      description: |
        An integer with a value between [0-3600].
    - name: AuthorizerType
      value: "{{ AuthorizerType }}"
      description: |
        The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).
      valid_values: ['REQUEST', 'JWT']
    - name: AuthorizerUri
      value: "{{ AuthorizerUri }}"
      description: |
        A string representation of a URI with a length between [1-2048].
    - name: EnableSimpleResponses
      value: {{ EnableSimpleResponses }}
    - name: IdentitySource
      value:
        - "{{ IdentitySource }}"
      description: |
        The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.
    - name: IdentityValidationExpression
      value: "{{ IdentityValidationExpression }}"
      description: |
        A string with a length between [0-1024].
    - name: JwtConfiguration
      description: |
        Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
      value:
        Audience:
          - "{{ Audience }}"
        Issuer: "{{ Issuer }}"
    - name: Name
      value: "{{ Name }}"
      description: |
        A string with a length between [1-128].
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

Updates an Authorizer.

```sql
UPDATE aws.apigatewayv2.authorizers
SET 
AuthorizerCredentialsArn = '{{ AuthorizerCredentialsArn }}',
AuthorizerPayloadFormatVersion = '{{ AuthorizerPayloadFormatVersion }}',
AuthorizerResultTtlInSeconds = {{ AuthorizerResultTtlInSeconds }},
AuthorizerType = '{{ AuthorizerType }}',
AuthorizerUri = '{{ AuthorizerUri }}',
EnableSimpleResponses = {{ EnableSimpleResponses }},
IdentitySource = '{{ IdentitySource }}',
IdentityValidationExpression = '{{ IdentityValidationExpression }}',
JwtConfiguration = '{{ JwtConfiguration }}',
Name = '{{ Name }}'
WHERE 
api_id = '{{ api_id }}' --required
AND authorizer_id = '{{ authorizer_id }}' --required
AND region = '{{ region }}' --required
RETURNING
authorizer_credentials_arn,
authorizer_id,
authorizer_payload_format_version,
authorizer_result_ttl_in_seconds,
authorizer_type,
authorizer_uri,
enable_simple_responses,
identity_source,
identity_validation_expression,
jwt_configuration,
name;
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

Deletes an Authorizer.

```sql
DELETE FROM aws.apigatewayv2.authorizers
WHERE api_id = '{{ api_id }}' --required
AND authorizer_id = '{{ authorizer_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_authorizers_cache"
    values={[
        { label: 'reset_authorizers_cache', value: 'reset_authorizers_cache' }
    ]}
>
<TabItem value="reset_authorizers_cache">

Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.

```sql
EXEC aws.apigatewayv2.authorizers.reset_authorizers_cache 
@api_id='{{ api_id }}' --required, 
@stage_name='{{ stage_name }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
