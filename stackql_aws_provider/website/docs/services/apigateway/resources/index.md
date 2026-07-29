--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource"
    values={[
        { label: 'get_resource', value: 'get_resource' },
        { label: 'get_resources', value: 'get_resources' }
    ]}
>
<TabItem value="get_resource">

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
    <td>The resource's identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>The parent resource's identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The full path for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="path_part" /></td>
    <td><code>string</code></td>
    <td>The last path segment for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_methods" /></td>
    <td><code>object</code></td>
    <td>Gets an API resource's method of a given HTTP verb.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_resources">

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
    <td>The resource's identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>The parent resource's identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The full path for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="path_part" /></td>
    <td><code>string</code></td>
    <td>The last path segment for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_methods" /></td>
    <td><code>object</code></td>
    <td>Gets an API resource's method of a given HTTP verb.</td>
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
    <td><a href="#get_resource"><CopyableCode code="get_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-embed"><code>embed</code></a></td>
    <td>Lists information about a resource.</td>
</tr>
<tr>
    <td><a href="#get_resources"><CopyableCode code="get_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-position"><code>position</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-embed"><code>embed</code></a></td>
    <td>Lists information about a collection of Resource resources.</td>
</tr>
<tr>
    <td><a href="#create_resource"><CopyableCode code="create_resource" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-parent_id"><code>parent_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pathPart"><code>pathPart</code></a></td>
    <td></td>
    <td>Creates a Resource resource.</td>
</tr>
<tr>
    <td><a href="#update_resource"><CopyableCode code="update_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Changes information about a Resource resource.</td>
</tr>
<tr>
    <td><a href="#delete_resource"><CopyableCode code="delete_resource" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Resource resource.</td>
</tr>
<tr>
    <td><a href="#test_invoke_method"><CopyableCode code="test_invoke_method" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-http_method"><code>http_method</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Simulate the invocation of a Method in your RestApi with headers, parameters, and an incoming request body.</td>
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
    <td>Specifies a test invoke method request's HTTP method.</td>
</tr>
<tr id="parameter-parent_id">
    <td><CopyableCode code="parent_id" /></td>
    <td><code>string</code></td>
    <td>The parent resource's identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>Specifies a test invoke method request's resource ID.</td>
</tr>
<tr id="parameter-restapi_id">
    <td><CopyableCode code="restapi_id" /></td>
    <td><code>string</code></td>
    <td>The string identifier of the associated RestApi.</td>
</tr>
<tr id="parameter-embed">
    <td><CopyableCode code="embed" /></td>
    <td><code>array</code></td>
    <td>A query parameter used to retrieve the specified resources embedded in the returned Resources resource in the response. This embed parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded Method resources this way. The query parameter value must be a single-valued list and contain the "methods" string. For example, GET /restapis/&#123;restapi_id&#125;/resources?embed=methods.</td>
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
    defaultValue="get_resource"
    values={[
        { label: 'get_resource', value: 'get_resource' },
        { label: 'get_resources', value: 'get_resources' }
    ]}
>
<TabItem value="get_resource">

Lists information about a resource.

```sql
SELECT
id,
parent_id,
path,
path_part,
resource_methods
FROM aws.apigateway.resources
WHERE restapi_id = '{{ restapi_id }}' -- required
AND resource_id = '{{ resource_id }}' -- required
AND region = '{{ region }}' -- required
AND embed = '{{ embed }}'
;
```
</TabItem>
<TabItem value="get_resources">

Lists information about a collection of Resource resources.

```sql
SELECT
id,
parent_id,
path,
path_part,
resource_methods
FROM aws.apigateway.resources
WHERE restapi_id = '{{ restapi_id }}' -- required
AND region = '{{ region }}' -- required
AND position = '{{ position }}'
AND limit = '{{ limit }}'
AND embed = '{{ embed }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resource"
    values={[
        { label: 'create_resource', value: 'create_resource' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resource">

Creates a Resource resource.

```sql
INSERT INTO aws.apigateway.resources (
pathPart,
restapi_id,
parent_id,
region
)
SELECT 
'{{ pathPart }}' /* required */,
'{{ restapi_id }}',
'{{ parent_id }}',
'{{ region }}'
RETURNING
id,
parent_id,
path,
path_part,
resource_methods
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resources
  props:
    - name: restapi_id
      value: "{{ restapi_id }}"
      description: Required parameter for the resources resource.
    - name: parent_id
      value: "{{ parent_id }}"
      description: Required parameter for the resources resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resources resource.
    - name: pathPart
      value: "{{ pathPart }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_resource"
    values={[
        { label: 'update_resource', value: 'update_resource' }
    ]}
>
<TabItem value="update_resource">

Changes information about a Resource resource.

```sql
UPDATE aws.apigateway.resources
SET 
patchOperations = '{{ patchOperations }}'
WHERE 
restapi_id = '{{ restapi_id }}' --required
AND resource_id = '{{ resource_id }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
parent_id,
path,
path_part,
resource_methods;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource"
    values={[
        { label: 'delete_resource', value: 'delete_resource' }
    ]}
>
<TabItem value="delete_resource">

Deletes a Resource resource.

```sql
DELETE FROM aws.apigateway.resources
WHERE restapi_id = '{{ restapi_id }}' --required
AND resource_id = '{{ resource_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="test_invoke_method"
    values={[
        { label: 'test_invoke_method', value: 'test_invoke_method' }
    ]}
>
<TabItem value="test_invoke_method">

Simulate the invocation of a Method in your RestApi with headers, parameters, and an incoming request body.

```sql
EXEC aws.apigateway.resources.test_invoke_method 
@restapi_id='{{ restapi_id }}' --required, 
@resource_id='{{ resource_id }}' --required, 
@http_method='{{ http_method }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"pathWithQueryString": "{{ pathWithQueryString }}", 
"body": "{{ body }}", 
"headers": "{{ headers }}", 
"multiValueHeaders": "{{ multiValueHeaders }}", 
"clientCertificateId": "{{ clientCertificateId }}", 
"stageVariables": "{{ stageVariables }}"
}'
;
```
</TabItem>
</Tabs>
