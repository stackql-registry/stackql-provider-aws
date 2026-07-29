--- 
title: exports
hide_title: false
hide_table_of_contents: false
keywords:
  - exports
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

Creates, updates, deletes, gets or lists an <code>exports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigateway.exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_export"
    values={[
        { label: 'get_export', value: 'get_export' }
    ]}
>
<TabItem value="get_export">

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
    <td><CopyableCode code="body" /></td>
    <td><code>string (byte)</code></td>
    <td>The binary blob response to GetExport, which contains the export.</td>
</tr>
<tr>
    <td><CopyableCode code="content_disposition" /></td>
    <td><code>string</code></td>
    <td>The content-disposition header value in the HTTP response.</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>The content-type header value in the HTTP response. This will correspond to a valid 'accept' type in the request.</td>
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
    <td><a href="#get_export"><CopyableCode code="get_export" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-restapi_id"><code>restapi_id</code></a>, <a href="#parameter-stage_name"><code>stage_name</code></a>, <a href="#parameter-export_type"><code>export_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-parameters"><code>parameters</code></a>, <a href="#parameter-Accept"><code>Accept</code></a></td>
    <td>Exports a deployed version of a RestApi in a specified format.</td>
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
<tr id="parameter-export_type">
    <td><CopyableCode code="export_type" /></td>
    <td><code>string</code></td>
    <td>The type of export. Acceptable values are 'oas30' for OpenAPI 3.0.x and 'swagger' for Swagger/OpenAPI 2.0.</td>
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
<tr id="parameter-stage_name">
    <td><CopyableCode code="stage_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Stage that will be exported.</td>
</tr>
<tr id="parameter-Accept">
    <td><CopyableCode code="Accept" /></td>
    <td><code>string</code></td>
    <td>The content-type of the export, for example application/json. Currently application/json and application/yaml are supported for exportType ofoas30 and swagger. This should be specified in the Accept header for direct API requests.</td>
</tr>
<tr id="parameter-parameters">
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>A key-value map of query string parameters that specify properties of the export, depending on the requested exportType. For exportType oas30 and swagger, any combination of the following parameters are supported: extensions='integrations' or extensions='apigateway' will export the API with x-amazon-apigateway-integration extensions. extensions='authorizers' will export the API with x-amazon-apigateway-authorizer extensions. postman will export the API with Postman extensions, allowing for import to the Postman tool</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_export"
    values={[
        { label: 'get_export', value: 'get_export' }
    ]}
>
<TabItem value="get_export">

Exports a deployed version of a RestApi in a specified format.

```sql
SELECT
body,
content_disposition,
content_type
FROM aws.apigateway.exports
WHERE restapi_id = '{{ restapi_id }}' -- required
AND stage_name = '{{ stage_name }}' -- required
AND export_type = '{{ export_type }}' -- required
AND region = '{{ region }}' -- required
AND parameters = '{{ parameters }}'
AND Accept = '{{ Accept }}'
;
```
</TabItem>
</Tabs>
