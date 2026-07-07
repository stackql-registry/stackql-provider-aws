--- 
title: request_validators
hide_title: false
hide_table_of_contents: false
keywords:
  - request_validators
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

Creates, updates, deletes, gets or lists a <code>request_validators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="request_validators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.request_validators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_request_validator"
    values={[
        { label: 'get_request_validator', value: 'get_request_validator' },
        { label: 'get_request_validators', value: 'get_request_validators' }
    ]}
>
<TabItem value="get_request_validator">

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
    <td>The identifier of this RequestValidator.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this RequestValidator</td>
</tr>
<tr>
    <td><CopyableCode code="validateRequestBody" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean flag to indicate whether to validate a request body according to the configured Model schema.</td>
</tr>
<tr>
    <td><CopyableCode code="validateRequestParameters" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean flag to indicate whether to validate request parameters (true) or not (false).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_request_validators">

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
    <td>The identifier of this RequestValidator.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this RequestValidator</td>
</tr>
<tr>
    <td><CopyableCode code="validateRequestBody" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean flag to indicate whether to validate a request body according to the configured Model schema.</td>
</tr>
<tr>
    <td><CopyableCode code="validateRequestParameters" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean flag to indicate whether to validate request parameters (true) or not (false).</td>
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
    <td><a href="#get_request_validator"><CopyableCode code="get_request_validator" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-requestvalidator_id"><code>requestvalidator_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a RequestValidator of a given RestApi.</td>
</tr>
<tr>
    <td><a href="#get_request_validators"><CopyableCode code="get_request_validators" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-position"><code>position</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Gets the RequestValidators collection of a given RestApi.</td>
</tr>
<tr>
    <td><a href="#create_request_validator"><CopyableCode code="create_request_validator" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a RequestValidator of a given RestApi.</td>
</tr>
<tr>
    <td><a href="#update_request_validator"><CopyableCode code="update_request_validator" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-requestvalidator_id"><code>requestvalidator_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a RequestValidator of a given RestApi.</td>
</tr>
<tr>
    <td><a href="#delete_request_validator"><CopyableCode code="delete_request_validator" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-requestvalidator_id"><code>requestvalidator_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a RequestValidator of a given RestApi.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-requestvalidator_id">
    <td><CopyableCode code="requestvalidator_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the RequestValidator to be deleted.</td>
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
    defaultValue="get_request_validator"
    values={[
        { label: 'get_request_validator', value: 'get_request_validator' },
        { label: 'get_request_validators', value: 'get_request_validators' }
    ]}
>
<TabItem value="get_request_validator">

Gets a RequestValidator of a given RestApi.

```sql
SELECT
id,
name,
validateRequestBody,
validateRequestParameters
FROM aws.apigateway.request_validators
WHERE restapi_id = '{{ restapi_id }}' -- required
AND requestvalidator_id = '{{ requestvalidator_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_request_validators">

Gets the RequestValidators collection of a given RestApi.

```sql
SELECT
id,
name,
validateRequestBody,
validateRequestParameters
FROM aws.apigateway.request_validators
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
    defaultValue="create_request_validator"
    values={[
        { label: 'create_request_validator', value: 'create_request_validator' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_request_validator">

Creates a RequestValidator of a given RestApi.

```sql
INSERT INTO aws.apigateway.request_validators (
name,
validateRequestBody,
validateRequestParameters,
restapi_id,
region
)
SELECT 
'{{ name }}',
{{ validateRequestBody }},
{{ validateRequestParameters }},
'{{ restapi_id }}',
'{{ region }}'
RETURNING
id,
name,
validateRequestBody,
validateRequestParameters
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: request_validators
  props:
    - name: restapi_id
      value: "{{ restapi_id }}"
      description: Required parameter for the request_validators resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the request_validators resource.
    - name: name
      value: "{{ name }}"
    - name: validateRequestBody
      value: {{ validateRequestBody }}
    - name: validateRequestParameters
      value: {{ validateRequestParameters }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_request_validator"
    values={[
        { label: 'update_request_validator', value: 'update_request_validator' }
    ]}
>
<TabItem value="update_request_validator">

Updates a RequestValidator of a given RestApi.

```sql
UPDATE aws.apigateway.request_validators
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
restapi_id = '{{ restapi_id }}' --required
AND requestvalidator_id = '{{ requestvalidator_id }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
validateRequestBody,
validateRequestParameters;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_request_validator"
    values={[
        { label: 'delete_request_validator', value: 'delete_request_validator' }
    ]}
>
<TabItem value="delete_request_validator">

Deletes a RequestValidator of a given RestApi.

```sql
DELETE FROM aws.apigateway.request_validators
WHERE restapi_id = '{{ restapi_id }}' --required
AND requestvalidator_id = '{{ requestvalidator_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
