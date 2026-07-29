--- 
title: integration_responses
hide_title: false
hide_table_of_contents: false
keywords:
  - integration_responses
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

Creates, updates, deletes, gets or lists an <code>integration_responses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integration_responses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.integration_responses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_integration_response"
    values={[
        { label: 'get_integration_response', value: 'get_integration_response' }
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
    <td><CopyableCode code="content_handling" /></td>
    <td><code>string</code></td>
    <td>Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors: If this property is not defined, the response payload will be passed through from the integration response to the method response without modification. (CONVERT_TO_BINARY, CONVERT_TO_TEXT)</td>
</tr>
<tr>
    <td><CopyableCode code="response_parameters" /></td>
    <td><code>object</code></td>
    <td>A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.&#123;name&#125;, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.&#123;name&#125; or integration.response.body.&#123;JSON-expression&#125;, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.</td>
</tr>
<tr>
    <td><CopyableCode code="response_templates" /></td>
    <td><code>object</code></td>
    <td>Specifies the templates used to transform the integration response body. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.</td>
</tr>
<tr>
    <td><CopyableCode code="selection_pattern" /></td>
    <td><code>string</code></td>
    <td>Specifies the regular expression (regex) pattern used to choose an integration response based on the response from the back end. For example, if the success response returns nothing and the error response returns some string, you could use the .+ regex to match error response. However, make sure that the error response does not contain any newline (\n) character in such cases. If the back end is an Lambda function, the Lambda function error header is matched. For all other HTTP and Amazon Web Services back ends, the HTTP status code is matched.</td>
</tr>
<tr>
    <td><CopyableCode code="status_code" /></td>
    <td><code>string</code></td>
    <td>The status code. (pattern: &lt;code&gt;&#91;1-5&#93;\d\d&lt;/code&gt;)</td>
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
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-http_method"><code>http_method</code></a>, <a href="#parameter-status_code"><code>status_code</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Represents a get integration response.</td>
</tr>
<tr>
    <td><a href="#update_integration_response"><CopyableCode code="update_integration_response" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-http_method"><code>http_method</code></a>, <a href="#parameter-status_code"><code>status_code</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Represents an update integration response.</td>
</tr>
<tr>
    <td><a href="#put_integration_response"><CopyableCode code="put_integration_response" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-http_method"><code>http_method</code></a>, <a href="#parameter-status_code"><code>status_code</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Represents a put integration.</td>
</tr>
<tr>
    <td><a href="#delete_integration_response"><CopyableCode code="delete_integration_response" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-http_method"><code>http_method</code></a>, <a href="#parameter-status_code"><code>status_code</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Represents a delete integration response.</td>
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
    <td>Specifies a delete integration response request's HTTP method.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>Specifies a delete integration response request's resource identifier.</td>
</tr>
<tr id="parameter-restapi_id">
    <td><CopyableCode code="restapi_id" /></td>
    <td><code>string</code></td>
    <td>The string identifier of the associated RestApi.</td>
</tr>
<tr id="parameter-status_code">
    <td><CopyableCode code="status_code" /></td>
    <td><code>string</code></td>
    <td>Specifies a delete integration response request's status code.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_integration_response"
    values={[
        { label: 'get_integration_response', value: 'get_integration_response' }
    ]}
>
<TabItem value="get_integration_response">

Represents a get integration response.

```sql
SELECT
content_handling,
response_parameters,
response_templates,
selection_pattern,
status_code
FROM aws.apigateway.integration_responses
WHERE restapi_id = '{{ restapi_id }}' -- required
AND resource_id = '{{ resource_id }}' -- required
AND http_method = '{{ http_method }}' -- required
AND status_code = '{{ status_code }}' -- required
AND region = '{{ region }}' -- required
;
```
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

Represents an update integration response.

```sql
UPDATE aws.apigateway.integration_responses
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
restapi_id = '{{ restapi_id }}' --required
AND resource_id = '{{ resource_id }}' --required
AND http_method = '{{ http_method }}' --required
AND status_code = '{{ status_code }}' --required
AND region = '{{ region }}' --required
RETURNING
content_handling,
response_parameters,
response_templates,
selection_pattern,
status_code;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_integration_response"
    values={[
        { label: 'put_integration_response', value: 'put_integration_response' }
    ]}
>
<TabItem value="put_integration_response">

Represents a put integration.

```sql
REPLACE aws.apigateway.integration_responses
SET 
selectionPattern = '{{ selectionPattern }}',
responseParameters = '{{ responseParameters }}',
responseTemplates = '{{ responseTemplates }}',
contentHandling = '{{ contentHandling }}'
WHERE 
restapi_id = '{{ restapi_id }}' --required
AND resource_id = '{{ resource_id }}' --required
AND http_method = '{{ http_method }}' --required
AND status_code = '{{ status_code }}' --required
AND region = '{{ region }}' --required
RETURNING
content_handling,
response_parameters,
response_templates,
selection_pattern,
status_code;
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

Represents a delete integration response.

```sql
DELETE FROM aws.apigateway.integration_responses
WHERE restapi_id = '{{ restapi_id }}' --required
AND resource_id = '{{ resource_id }}' --required
AND http_method = '{{ http_method }}' --required
AND status_code = '{{ status_code }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
