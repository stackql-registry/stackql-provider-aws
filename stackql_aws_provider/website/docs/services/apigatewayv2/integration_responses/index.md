--- 
title: integration_responses
hide_title: false
hide_table_of_contents: false
keywords:
  - integration_responses
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

Creates, updates, deletes, gets or lists an <code>integration_responses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integration_responses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewayv2.integration_responses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_integration_response"
    values={[
        { label: 'get_integration_response', value: 'get_integration_response' },
        { label: 'get_integration_responses', value: 'get_integration_responses' }
    ]}
>
<TabItem value="get_integration_response">

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
    <td><CopyableCode code="ContentHandlingStrategy" /></td>
    <td><code>string</code></td>
    <td>Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. (CONVERT_TO_BINARY, CONVERT_TO_TEXT)</td>
</tr>
<tr>
    <td><CopyableCode code="IntegrationResponseId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="IntegrationResponseKey" /></td>
    <td><code>string</code></td>
    <td>After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See Selection Expressions for a list of expressions and each expression's associated selection key type.</td>
</tr>
<tr>
    <td><CopyableCode code="ResponseParameters" /></td>
    <td><code>object</code></td>
    <td>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.&#123;name&#125;, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.&#123;name&#125; or integration.response.body.&#123;JSON-expression&#125;, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="ResponseTemplates" /></td>
    <td><code>object</code></td>
    <td>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</td>
</tr>
<tr>
    <td><CopyableCode code="TemplateSelectionExpression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_integration_responses">

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
    <td><CopyableCode code="ContentHandlingStrategy" /></td>
    <td><code>string</code></td>
    <td>Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. (CONVERT_TO_BINARY, CONVERT_TO_TEXT)</td>
</tr>
<tr>
    <td><CopyableCode code="IntegrationResponseId" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="IntegrationResponseKey" /></td>
    <td><code>string</code></td>
    <td>After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See Selection Expressions for a list of expressions and each expression's associated selection key type.</td>
</tr>
<tr>
    <td><CopyableCode code="ResponseParameters" /></td>
    <td><code>object</code></td>
    <td>A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.&#123;name&#125;, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.&#123;name&#125; or integration.response.body.&#123;JSON-expression&#125;, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="ResponseTemplates" /></td>
    <td><code>object</code></td>
    <td>The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</td>
</tr>
<tr>
    <td><CopyableCode code="TemplateSelectionExpression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
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
    <td><a href="#get_integration_response"><CopyableCode code="get_integration_response" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-integration_response_id"><code>integration_response_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an IntegrationResponses.</td>
</tr>
<tr>
    <td><a href="#get_integration_responses"><CopyableCode code="get_integration_responses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets the IntegrationResponses for an Integration.</td>
</tr>
<tr>
    <td><a href="#create_integration_response"><CopyableCode code="create_integration_response" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IntegrationResponseKey"><code>IntegrationResponseKey</code></a></td>
    <td></td>
    <td>Creates an IntegrationResponses.</td>
</tr>
<tr>
    <td><a href="#update_integration_response"><CopyableCode code="update_integration_response" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-integration_response_id"><code>integration_response_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an IntegrationResponses.</td>
</tr>
<tr>
    <td><a href="#delete_integration_response"><CopyableCode code="delete_integration_response" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-integration_id"><code>integration_id</code></a>, <a href="#parameter-integration_response_id"><code>integration_response_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an IntegrationResponses.</td>
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
<tr id="parameter-integration_response_id">
    <td><CopyableCode code="integration_response_id" /></td>
    <td><code>string</code></td>
    <td>The integration response ID.</td>
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
    defaultValue="get_integration_response"
    values={[
        { label: 'get_integration_response', value: 'get_integration_response' },
        { label: 'get_integration_responses', value: 'get_integration_responses' }
    ]}
>
<TabItem value="get_integration_response">

Gets an IntegrationResponses.

```sql
SELECT
ContentHandlingStrategy,
IntegrationResponseId,
IntegrationResponseKey,
ResponseParameters,
ResponseTemplates,
TemplateSelectionExpression
FROM aws.apigatewayv2.integration_responses
WHERE api_id = '{{ api_id }}' -- required
AND integration_id = '{{ integration_id }}' -- required
AND integration_response_id = '{{ integration_response_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_integration_responses">

Gets the IntegrationResponses for an Integration.

```sql
SELECT
ContentHandlingStrategy,
IntegrationResponseId,
IntegrationResponseKey,
ResponseParameters,
ResponseTemplates,
TemplateSelectionExpression
FROM aws.apigatewayv2.integration_responses
WHERE api_id = '{{ api_id }}' -- required
AND integration_id = '{{ integration_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_integration_response"
    values={[
        { label: 'create_integration_response', value: 'create_integration_response' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_integration_response">

Creates an IntegrationResponses.

```sql
INSERT INTO aws.apigatewayv2.integration_responses (
ContentHandlingStrategy,
IntegrationResponseKey,
ResponseParameters,
ResponseTemplates,
TemplateSelectionExpression,
api_id,
integration_id,
region
)
SELECT 
'{{ ContentHandlingStrategy }}',
'{{ IntegrationResponseKey }}' /* required */,
'{{ ResponseParameters }}',
'{{ ResponseTemplates }}',
'{{ TemplateSelectionExpression }}',
'{{ api_id }}',
'{{ integration_id }}',
'{{ region }}'
RETURNING
ContentHandlingStrategy,
IntegrationResponseId,
IntegrationResponseKey,
ResponseParameters,
ResponseTemplates,
TemplateSelectionExpression
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: integration_responses
  props:
    - name: api_id
      value: "{{ api_id }}"
      description: Required parameter for the integration_responses resource.
    - name: integration_id
      value: "{{ integration_id }}"
      description: Required parameter for the integration_responses resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the integration_responses resource.
    - name: ContentHandlingStrategy
      value: "{{ ContentHandlingStrategy }}"
      description: |
        Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.
      valid_values: ['CONVERT_TO_BINARY', 'CONVERT_TO_TEXT']
    - name: IntegrationResponseKey
      value: "{{ IntegrationResponseKey }}"
      description: |
        After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See Selection Expressions for a list of expressions and each expression's associated selection key type.
    - name: ResponseParameters
      value: "{{ ResponseParameters }}"
      description: |
        For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.{location}.{name} , where {location} is querystring, path, or header; and {name} must be a valid and unique method request parameter name. For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see Working with AWS service integrations for HTTP APIs. For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern \`<action>\`:<header|querystring|path>.\`<location>\` where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see Transforming API requests and responses.
    - name: ResponseTemplates
      value: "{{ ResponseTemplates }}"
      description: |
        A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.
    - name: TemplateSelectionExpression
      value: "{{ TemplateSelectionExpression }}"
      description: |
        An expression used to extract information at runtime. See Selection Expressions for more information.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_integration_response"
    values={[
        { label: 'update_integration_response', value: 'update_integration_response' }
    ]}
>
<TabItem value="update_integration_response">

Updates an IntegrationResponses.

```sql
UPDATE aws.apigatewayv2.integration_responses
SET 
ContentHandlingStrategy = '{{ ContentHandlingStrategy }}',
IntegrationResponseKey = '{{ IntegrationResponseKey }}',
ResponseParameters = '{{ ResponseParameters }}',
ResponseTemplates = '{{ ResponseTemplates }}',
TemplateSelectionExpression = '{{ TemplateSelectionExpression }}'
WHERE 
api_id = '{{ api_id }}' --required
AND integration_id = '{{ integration_id }}' --required
AND integration_response_id = '{{ integration_response_id }}' --required
AND region = '{{ region }}' --required
RETURNING
ContentHandlingStrategy,
IntegrationResponseId,
IntegrationResponseKey,
ResponseParameters,
ResponseTemplates,
TemplateSelectionExpression;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_integration_response"
    values={[
        { label: 'delete_integration_response', value: 'delete_integration_response' }
    ]}
>
<TabItem value="delete_integration_response">

Deletes an IntegrationResponses.

```sql
DELETE FROM aws.apigatewayv2.integration_responses
WHERE api_id = '{{ api_id }}' --required
AND integration_id = '{{ integration_id }}' --required
AND integration_response_id = '{{ integration_response_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
