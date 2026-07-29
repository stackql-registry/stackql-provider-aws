--- 
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
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

Creates, updates, deletes, gets or lists an <code>integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewayv2.integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_integration"
    values={[
        { label: 'get_integration', value: 'get_integration' },
        { label: 'get_integrations', value: 'get_integrations' }
    ]}
>
<TabItem value="get_integration">

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
    <td><CopyableCode code="api_gateway_managed" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_id" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-1024&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_type" /></td>
    <td><code>string</code></td>
    <td>Represents a connection type. (INTERNET, VPC_LINK)</td>
</tr>
<tr>
    <td><CopyableCode code="content_handling_strategy" /></td>
    <td><code>string</code></td>
    <td>Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. (CONVERT_TO_BINARY, CONVERT_TO_TEXT)</td>
</tr>
<tr>
    <td><CopyableCode code="credentials_arn" /></td>
    <td><code>string</code></td>
    <td>Represents an Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;0-1024&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="integration_method" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-64&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="integration_response_selection_expression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="integration_subtype" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-128&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="integration_type" /></td>
    <td><code>string</code></td>
    <td>Represents an API method integration type. (AWS, HTTP, MOCK, HTTP_PROXY, AWS_PROXY)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_uri" /></td>
    <td><code>string</code></td>
    <td>A string representation of a URI with a length between &#91;1-2048&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="passthrough_behavior" /></td>
    <td><code>string</code></td>
    <td>Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. (WHEN_NO_MATCH, NEVER, WHEN_NO_TEMPLATES)</td>
</tr>
<tr>
    <td><CopyableCode code="payload_format_version" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-64&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="request_parameters" /></td>
    <td><code>object</code></td>
    <td>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.&#123;location&#125;.&#123;name&#125; , where &#123;location&#125; is querystring, path, or header; and &#123;name&#125; must be a valid and unique method request parameter name. For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see Working with AWS service integrations for HTTP APIs. For HTTP API integrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern <code>&lt;action&gt;</code>:&lt;header|querystring|path&gt;.`&lt;location&gt;`. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see Transforming API requests and responses.</td>
</tr>
<tr>
    <td><CopyableCode code="request_templates" /></td>
    <td><code>object</code></td>
    <td>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="response_parameters" /></td>
    <td><code>object</code></td>
    <td>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern <code>&lt;action&gt;</code>:<code>&lt;header&gt;</code>.`&lt;location&gt;` or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see Transforming API requests and responses.</td>
</tr>
<tr>
    <td><CopyableCode code="template_selection_expression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout_in_millis" /></td>
    <td><code>integer</code></td>
    <td>An integer with a value between &#91;50-30000&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="tls_config" /></td>
    <td><code>object</code></td>
    <td>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_integrations">

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
    <td><CopyableCode code="api_gateway_managed" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_id" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-1024&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="connection_type" /></td>
    <td><code>string</code></td>
    <td>Represents a connection type. (INTERNET, VPC_LINK)</td>
</tr>
<tr>
    <td><CopyableCode code="content_handling_strategy" /></td>
    <td><code>string</code></td>
    <td>Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. (CONVERT_TO_BINARY, CONVERT_TO_TEXT)</td>
</tr>
<tr>
    <td><CopyableCode code="credentials_arn" /></td>
    <td><code>string</code></td>
    <td>Represents an Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;0-1024&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="integration_method" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-64&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="integration_response_selection_expression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="integration_subtype" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-128&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="integration_type" /></td>
    <td><code>string</code></td>
    <td>Represents an API method integration type. (AWS, HTTP, MOCK, HTTP_PROXY, AWS_PROXY)</td>
</tr>
<tr>
    <td><CopyableCode code="integration_uri" /></td>
    <td><code>string</code></td>
    <td>A string representation of a URI with a length between &#91;1-2048&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="passthrough_behavior" /></td>
    <td><code>string</code></td>
    <td>Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. (WHEN_NO_MATCH, NEVER, WHEN_NO_TEMPLATES)</td>
</tr>
<tr>
    <td><CopyableCode code="payload_format_version" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-64&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="request_parameters" /></td>
    <td><code>object</code></td>
    <td>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.&#123;location&#125;.&#123;name&#125; , where &#123;location&#125; is querystring, path, or header; and &#123;name&#125; must be a valid and unique method request parameter name. For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see Working with AWS service integrations for HTTP APIs. For HTTP API integrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern <code>&lt;action&gt;</code>:&lt;header|querystring|path&gt;.`&lt;location&gt;`. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see Transforming API requests and responses.</td>
</tr>
<tr>
    <td><CopyableCode code="request_templates" /></td>
    <td><code>object</code></td>
    <td>Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="response_parameters" /></td>
    <td><code>object</code></td>
    <td>Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern <code>&lt;action&gt;</code>:<code>&lt;header&gt;</code>.`&lt;location&gt;` or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see Transforming API requests and responses.</td>
</tr>
<tr>
    <td><CopyableCode code="template_selection_expression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout_in_millis" /></td>
    <td><code>integer</code></td>
    <td>An integer with a value between &#91;50-30000&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="tls_config" /></td>
    <td><code>object</code></td>
    <td>The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.</td>
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
    <td><a href="#get_integration"><CopyableCode code="get_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Integration.</td>
</tr>
<tr>
    <td><a href="#get_integrations"><CopyableCode code="get_integrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets the Integrations for an API.</td>
</tr>
<tr>
    <td><a href="#create_integration"><CopyableCode code="create_integration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IntegrationType"><code>IntegrationType</code></a></td>
    <td></td>
    <td>Creates an Integration.</td>
</tr>
<tr>
    <td><a href="#update_integration"><CopyableCode code="update_integration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an Integration.</td>
</tr>
<tr>
    <td><a href="#delete_integration"><CopyableCode code="delete_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Integration.</td>
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
<tr id="parameter-integration_id">
    <td><CopyableCode code="integration_id" /></td>
    <td><code>string</code></td>
    <td>The integration ID.</td>
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
    defaultValue="get_integration"
    values={[
        { label: 'get_integration', value: 'get_integration' },
        { label: 'get_integrations', value: 'get_integrations' }
    ]}
>
<TabItem value="get_integration">

Gets an Integration.

```sql
SELECT
api_gateway_managed,
connection_id,
connection_type,
content_handling_strategy,
credentials_arn,
description,
integration_id,
integration_method,
integration_response_selection_expression,
integration_subtype,
integration_type,
integration_uri,
passthrough_behavior,
payload_format_version,
request_parameters,
request_templates,
response_parameters,
template_selection_expression,
timeout_in_millis,
tls_config
FROM aws.apigatewayv2.integrations
WHERE api_id = '{{ api_id }}' -- required
AND integration_id = '{{ integration_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_integrations">

Gets the Integrations for an API.

```sql
SELECT
api_gateway_managed,
connection_id,
connection_type,
content_handling_strategy,
credentials_arn,
description,
integration_id,
integration_method,
integration_response_selection_expression,
integration_subtype,
integration_type,
integration_uri,
passthrough_behavior,
payload_format_version,
request_parameters,
request_templates,
response_parameters,
template_selection_expression,
timeout_in_millis,
tls_config
FROM aws.apigatewayv2.integrations
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
    defaultValue="create_integration"
    values={[
        { label: 'create_integration', value: 'create_integration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_integration">

Creates an Integration.

```sql
INSERT INTO aws.apigatewayv2.integrations (
ConnectionId,
ConnectionType,
ContentHandlingStrategy,
CredentialsArn,
Description,
IntegrationMethod,
IntegrationSubtype,
IntegrationType,
IntegrationUri,
PassthroughBehavior,
PayloadFormatVersion,
RequestParameters,
RequestTemplates,
ResponseParameters,
TemplateSelectionExpression,
TimeoutInMillis,
TlsConfig,
api_id,
region
)
SELECT 
'{{ ConnectionId }}',
'{{ ConnectionType }}',
'{{ ContentHandlingStrategy }}',
'{{ CredentialsArn }}',
'{{ Description }}',
'{{ IntegrationMethod }}',
'{{ IntegrationSubtype }}',
'{{ IntegrationType }}' /* required */,
'{{ IntegrationUri }}',
'{{ PassthroughBehavior }}',
'{{ PayloadFormatVersion }}',
'{{ RequestParameters }}',
'{{ RequestTemplates }}',
'{{ ResponseParameters }}',
'{{ TemplateSelectionExpression }}',
{{ TimeoutInMillis }},
'{{ TlsConfig }}',
'{{ api_id }}',
'{{ region }}'
RETURNING
api_gateway_managed,
connection_id,
connection_type,
content_handling_strategy,
credentials_arn,
description,
integration_id,
integration_method,
integration_response_selection_expression,
integration_subtype,
integration_type,
integration_uri,
passthrough_behavior,
payload_format_version,
request_parameters,
request_templates,
response_parameters,
template_selection_expression,
timeout_in_millis,
tls_config
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: integrations
  props:
    - name: api_id
      value: "{{ api_id }}"
      description: Required parameter for the integrations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the integrations resource.
    - name: ConnectionId
      value: "{{ ConnectionId }}"
      description: |
        A string with a length between [1-1024].
    - name: ConnectionType
      value: "{{ ConnectionType }}"
      description: |
        Represents a connection type.
      valid_values: ['INTERNET', 'VPC_LINK']
    - name: ContentHandlingStrategy
      value: "{{ ContentHandlingStrategy }}"
      description: |
        Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.
      valid_values: ['CONVERT_TO_BINARY', 'CONVERT_TO_TEXT']
    - name: CredentialsArn
      value: "{{ CredentialsArn }}"
      description: |
        Represents an Amazon Resource Name (ARN).
    - name: Description
      value: "{{ Description }}"
      description: |
        A string with a length between [0-1024].
    - name: IntegrationMethod
      value: "{{ IntegrationMethod }}"
      description: |
        A string with a length between [1-64].
    - name: IntegrationSubtype
      value: "{{ IntegrationSubtype }}"
      description: |
        A string with a length between [1-128].
    - name: IntegrationType
      value: "{{ IntegrationType }}"
      description: |
        Represents an API method integration type.
      valid_values: ['AWS', 'HTTP', 'MOCK', 'HTTP_PROXY', 'AWS_PROXY']
    - name: IntegrationUri
      value: "{{ IntegrationUri }}"
      description: |
        A string representation of a URI with a length between [1-2048].
    - name: PassthroughBehavior
      value: "{{ PassthroughBehavior }}"
      description: |
        Represents passthrough behavior for an integration response. Supported only for WebSocket APIs.
      valid_values: ['WHEN_NO_MATCH', 'NEVER', 'WHEN_NO_TEMPLATES']
    - name: PayloadFormatVersion
      value: "{{ PayloadFormatVersion }}"
      description: |
        A string with a length between [1-64].
    - name: RequestParameters
      value: "{{ RequestParameters }}"
      description: |
        For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.{location}.{name} , where {location} is querystring, path, or header; and {name} must be a valid and unique method request parameter name. For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see Working with AWS service integrations for HTTP APIs. For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern \`<action>\`:<header|querystring|path>.\`<location>\` where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see Transforming API requests and responses.
    - name: RequestTemplates
      value: "{{ RequestTemplates }}"
      description: |
        A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.
    - name: ResponseParameters
      value: "{{ ResponseParameters }}"
      description: |
        Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients.
    - name: TemplateSelectionExpression
      value: "{{ TemplateSelectionExpression }}"
      description: |
        An expression used to extract information at runtime. See Selection Expressions for more information.
    - name: TimeoutInMillis
      value: {{ TimeoutInMillis }}
      description: |
        An integer with a value between [50-30000].
    - name: TlsConfig
      description: |
        The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
      value:
        ServerNameToVerify: "{{ ServerNameToVerify }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_integration"
    values={[
        { label: 'update_integration', value: 'update_integration' }
    ]}
>
<TabItem value="update_integration">

Updates an Integration.

```sql
UPDATE aws.apigatewayv2.integrations
SET 
ConnectionId = '{{ ConnectionId }}',
ConnectionType = '{{ ConnectionType }}',
ContentHandlingStrategy = '{{ ContentHandlingStrategy }}',
CredentialsArn = '{{ CredentialsArn }}',
Description = '{{ Description }}',
IntegrationMethod = '{{ IntegrationMethod }}',
IntegrationSubtype = '{{ IntegrationSubtype }}',
IntegrationType = '{{ IntegrationType }}',
IntegrationUri = '{{ IntegrationUri }}',
PassthroughBehavior = '{{ PassthroughBehavior }}',
PayloadFormatVersion = '{{ PayloadFormatVersion }}',
RequestParameters = '{{ RequestParameters }}',
RequestTemplates = '{{ RequestTemplates }}',
ResponseParameters = '{{ ResponseParameters }}',
TemplateSelectionExpression = '{{ TemplateSelectionExpression }}',
TimeoutInMillis = {{ TimeoutInMillis }},
TlsConfig = '{{ TlsConfig }}'
WHERE 
api_id = '{{ api_id }}' --required
AND integration_id = '{{ integration_id }}' --required
AND region = '{{ region }}' --required
RETURNING
api_gateway_managed,
connection_id,
connection_type,
content_handling_strategy,
credentials_arn,
description,
integration_id,
integration_method,
integration_response_selection_expression,
integration_subtype,
integration_type,
integration_uri,
passthrough_behavior,
payload_format_version,
request_parameters,
request_templates,
response_parameters,
template_selection_expression,
timeout_in_millis,
tls_config;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_integration"
    values={[
        { label: 'delete_integration', value: 'delete_integration' }
    ]}
>
<TabItem value="delete_integration">

Deletes an Integration.

```sql
DELETE FROM aws.apigatewayv2.integrations
WHERE api_id = '{{ api_id }}' --required
AND integration_id = '{{ integration_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
