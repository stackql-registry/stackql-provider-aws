--- 
title: method_responses
hide_title: false
hide_table_of_contents: false
keywords:
  - method_responses
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

Creates, updates, deletes, gets or lists a <code>method_responses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="method_responses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.method_responses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_method_response"
    values={[
        { label: 'get_method_response', value: 'get_method_response' }
    ]}
>
<TabItem value="get_method_response">

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
    <td><CopyableCode code="response_models" /></td>
    <td><code>object</code></td>
    <td>Specifies the Model resources used for the response's content-type. Response models are represented as a key/value map, with a content-type as the key and a Model name as the value.</td>
</tr>
<tr>
    <td><CopyableCode code="response_parameters" /></td>
    <td><code>object</code></td>
    <td>A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header and the value specifies whether the associated method response header is required or not. The expression of the key must match the pattern method.response.header.&#123;name&#125;, where name is a valid and unique header name. API Gateway passes certain integration response data to the method response headers specified here according to the mapping you prescribe in the API's IntegrationResponse. The integration response data that can be mapped include an integration response header expressed in integration.response.header.&#123;name&#125;, a static value enclosed within a pair of single quotes (e.g., 'application/json'), or a JSON expression from the back-end response payload in the form of integration.response.body.&#123;JSON-expression&#125;, where JSON-expression is a valid JSON expression without the $ prefix.)</td>
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
    <td><a href="#get_method_response"><CopyableCode code="get_method_response" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-http_method"><code>http_method</code></a>, <a href="#parameter-status_code"><code>status_code</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a MethodResponse resource.</td>
</tr>
<tr>
    <td><a href="#update_method_response"><CopyableCode code="update_method_response" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-http_method"><code>http_method</code></a>, <a href="#parameter-status_code"><code>status_code</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing MethodResponse resource.</td>
</tr>
<tr>
    <td><a href="#put_method_response"><CopyableCode code="put_method_response" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-http_method"><code>http_method</code></a>, <a href="#parameter-status_code"><code>status_code</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds a MethodResponse to an existing Method resource.</td>
</tr>
<tr>
    <td><a href="#delete_method_response"><CopyableCode code="delete_method_response" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-http_method"><code>http_method</code></a>, <a href="#parameter-status_code"><code>status_code</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing MethodResponse resource.</td>
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
    <td>The Resource identifier for the MethodResponse resource.</td>
</tr>
<tr id="parameter-restapi_id">
    <td><CopyableCode code="restapi_id" /></td>
    <td><code>string</code></td>
    <td>The string identifier of the associated RestApi.</td>
</tr>
<tr id="parameter-status_code">
    <td><CopyableCode code="status_code" /></td>
    <td><code>string</code></td>
    <td>The status code identifier for the MethodResponse resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_method_response"
    values={[
        { label: 'get_method_response', value: 'get_method_response' }
    ]}
>
<TabItem value="get_method_response">

Describes a MethodResponse resource.

```sql
SELECT
response_models,
response_parameters,
status_code
FROM aws.apigateway.method_responses
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
    defaultValue="update_method_response"
    values={[
        { label: 'update_method_response', value: 'update_method_response' }
    ]}
>
<TabItem value="update_method_response">

Updates an existing MethodResponse resource.

```sql
UPDATE aws.apigateway.method_responses
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
restapi_id = '{{ restapi_id }}' --required
AND resource_id = '{{ resource_id }}' --required
AND http_method = '{{ http_method }}' --required
AND status_code = '{{ status_code }}' --required
AND region = '{{ region }}' --required
RETURNING
response_models,
response_parameters,
status_code;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_method_response"
    values={[
        { label: 'put_method_response', value: 'put_method_response' }
    ]}
>
<TabItem value="put_method_response">

Adds a MethodResponse to an existing Method resource.

```sql
REPLACE aws.apigateway.method_responses
SET 
responseParameters = '{{ responseParameters }}',
responseModels = '{{ responseModels }}'
WHERE 
restapi_id = '{{ restapi_id }}' --required
AND resource_id = '{{ resource_id }}' --required
AND http_method = '{{ http_method }}' --required
AND status_code = '{{ status_code }}' --required
AND region = '{{ region }}' --required
RETURNING
response_models,
response_parameters,
status_code;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_method_response"
    values={[
        { label: 'delete_method_response', value: 'delete_method_response' }
    ]}
>
<TabItem value="delete_method_response">

Deletes an existing MethodResponse resource.

```sql
DELETE FROM aws.apigateway.method_responses
WHERE restapi_id = '{{ restapi_id }}' --required
AND resource_id = '{{ resource_id }}' --required
AND http_method = '{{ http_method }}' --required
AND status_code = '{{ status_code }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
