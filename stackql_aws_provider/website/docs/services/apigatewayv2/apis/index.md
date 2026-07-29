--- 
title: apis
hide_title: false
hide_table_of_contents: false
keywords:
  - apis
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

Creates, updates, deletes, gets or lists an <code>apis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.apigatewayv2.apis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_api"
    values={[
        { label: 'get_api', value: 'get_api' },
        { label: 'get_apis', value: 'get_apis' }
    ]}
>
<TabItem value="get_api">

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
    <td><CopyableCode code="api_endpoint" /></td>
    <td><code>string</code></td>
    <td>The URI of the API, of the form &#123;api-id&#125;.execute-api.&#123;region&#125;.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</td>
</tr>
<tr>
    <td><CopyableCode code="api_gateway_managed" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</td>
</tr>
<tr>
    <td><CopyableCode code="api_id" /></td>
    <td><code>string</code></td>
    <td>The identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="api_key_selection_expression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="cors_configuration" /></td>
    <td><code>object</code></td>
    <td>Represents a CORS configuration. Supported only for HTTP APIs. See Configuring CORS for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the API was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;0-1024&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="disable_execute_api_endpoint" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https:​//&#123;api_id&#125;.execute-api.&#123;region&#125;.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="disable_schema_validation" /></td>
    <td><code>boolean</code></td>
    <td>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="import_info" /></td>
    <td><code>array</code></td>
    <td>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address_type" /></td>
    <td><code>string</code></td>
    <td>The IP address types that can invoke your API or domain name. (ipv4, dualstack)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-128&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol_type" /></td>
    <td><code>string</code></td>
    <td>Represents a protocol type. (WEBSOCKET, HTTP)</td>
</tr>
<tr>
    <td><CopyableCode code="route_selection_expression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A collection of tags associated with the API.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-64&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>The warning messages reported when failonwarnings is turned on during API import.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_apis">

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
    <td><CopyableCode code="api_endpoint" /></td>
    <td><code>string</code></td>
    <td>The URI of the API, of the form &#123;api-id&#125;.execute-api.&#123;region&#125;.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.</td>
</tr>
<tr>
    <td><CopyableCode code="api_gateway_managed" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.</td>
</tr>
<tr>
    <td><CopyableCode code="api_id" /></td>
    <td><code>string</code></td>
    <td>The API ID.</td>
</tr>
<tr>
    <td><CopyableCode code="api_key_selection_expression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="cors_configuration" /></td>
    <td><code>object</code></td>
    <td>Represents a CORS configuration. Supported only for HTTP APIs. See Configuring CORS for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the API was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;0-1024&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="disable_execute_api_endpoint" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https:​//&#123;api_id&#125;.execute-api.&#123;region&#125;.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="disable_schema_validation" /></td>
    <td><code>boolean</code></td>
    <td>Avoid validating models when creating a deployment. Supported only for WebSocket APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="import_info" /></td>
    <td><code>array</code></td>
    <td>The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address_type" /></td>
    <td><code>string</code></td>
    <td>The IP address types that can invoke your API or domain name. (ipv4, dualstack)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-128&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="protocol_type" /></td>
    <td><code>string</code></td>
    <td>Represents a protocol type. (WEBSOCKET, HTTP)</td>
</tr>
<tr>
    <td><CopyableCode code="route_selection_expression" /></td>
    <td><code>string</code></td>
    <td>An expression used to extract information at runtime. See Selection Expressions for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A collection of tags associated with the API.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>A string with a length between &#91;1-64&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="warnings" /></td>
    <td><code>array</code></td>
    <td>The warning messages reported when failonwarnings is turned on during API import.</td>
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
    <td><a href="#get_api"><CopyableCode code="get_api" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Api resource.</td>
</tr>
<tr>
    <td><a href="#get_apis"><CopyableCode code="get_apis" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets a collection of Api resources.</td>
</tr>
<tr>
    <td><a href="#create_api"><CopyableCode code="create_api" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProtocolType"><code>ProtocolType</code></a></td>
    <td></td>
    <td>Creates an Api resource.</td>
</tr>
<tr>
    <td><a href="#update_api"><CopyableCode code="update_api" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an Api resource.</td>
</tr>
<tr>
    <td><a href="#delete_api"><CopyableCode code="delete_api" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Api resource.</td>
</tr>
<tr>
    <td><a href="#reimport_api"><CopyableCode code="reimport_api" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Body"><code>Body</code></a></td>
    <td><a href="#parameter-basepath"><code>basepath</code></a>, <a href="#parameter-failOnWarnings"><code>failOnWarnings</code></a></td>
    <td>Puts an Api resource.</td>
</tr>
<tr>
    <td><a href="#delete_cors_configuration"><CopyableCode code="delete_cors_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a CORS configuration.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-basepath">
    <td><CopyableCode code="basepath" /></td>
    <td><code>string</code></td>
    <td>Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see Set the OpenAPI basePath Property. Supported only for HTTP APIs.</td>
</tr>
<tr id="parameter-failOnWarnings">
    <td><CopyableCode code="failOnWarnings" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.</td>
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
    defaultValue="get_api"
    values={[
        { label: 'get_api', value: 'get_api' },
        { label: 'get_apis', value: 'get_apis' }
    ]}
>
<TabItem value="get_api">

Gets an Api resource.

```sql
SELECT
api_endpoint,
api_gateway_managed,
api_id,
api_key_selection_expression,
cors_configuration,
created_date,
description,
disable_execute_api_endpoint,
disable_schema_validation,
import_info,
ip_address_type,
name,
protocol_type,
route_selection_expression,
tags,
version,
warnings
FROM aws.apigatewayv2.apis
WHERE api_id = '{{ api_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_apis">

Gets a collection of Api resources.

```sql
SELECT
api_endpoint,
api_gateway_managed,
api_id,
api_key_selection_expression,
cors_configuration,
created_date,
description,
disable_execute_api_endpoint,
disable_schema_validation,
import_info,
ip_address_type,
name,
protocol_type,
route_selection_expression,
tags,
version,
warnings
FROM aws.apigatewayv2.apis
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_api"
    values={[
        { label: 'create_api', value: 'create_api' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_api">

Creates an Api resource.

```sql
INSERT INTO aws.apigatewayv2.apis (
ApiKeySelectionExpression,
CorsConfiguration,
CredentialsArn,
Description,
DisableSchemaValidation,
DisableExecuteApiEndpoint,
IpAddressType,
Name,
ProtocolType,
RouteKey,
RouteSelectionExpression,
Tags,
Target,
Version,
region
)
SELECT 
'{{ ApiKeySelectionExpression }}',
'{{ CorsConfiguration }}',
'{{ CredentialsArn }}',
'{{ Description }}',
{{ DisableSchemaValidation }},
{{ DisableExecuteApiEndpoint }},
'{{ IpAddressType }}',
'{{ Name }}',
'{{ ProtocolType }}' /* required */,
'{{ RouteKey }}',
'{{ RouteSelectionExpression }}',
'{{ Tags }}',
'{{ Target }}',
'{{ Version }}',
'{{ region }}'
RETURNING
api_endpoint,
api_gateway_managed,
api_id,
api_key_selection_expression,
cors_configuration,
created_date,
description,
disable_execute_api_endpoint,
disable_schema_validation,
import_info,
ip_address_type,
name,
protocol_type,
route_selection_expression,
tags,
version,
warnings
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: apis
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the apis resource.
    - name: ApiKeySelectionExpression
      value: "{{ ApiKeySelectionExpression }}"
      description: |
        An expression used to extract information at runtime. See Selection Expressions for more information.
    - name: CorsConfiguration
      description: |
        Represents a CORS configuration. Supported only for HTTP APIs. See Configuring CORS for more information.
      value:
        AllowCredentials: {{ AllowCredentials }}
        AllowHeaders:
          - "{{ AllowHeaders }}"
        AllowMethods:
          - "{{ AllowMethods }}"
        AllowOrigins:
          - "{{ AllowOrigins }}"
        ExposeHeaders:
          - "{{ ExposeHeaders }}"
        MaxAge: {{ MaxAge }}
    - name: CredentialsArn
      value: "{{ CredentialsArn }}"
      description: |
        Represents an Amazon Resource Name (ARN).
    - name: Description
      value: "{{ Description }}"
      description: |
        A string with a length between [0-1024].
    - name: DisableSchemaValidation
      value: {{ DisableSchemaValidation }}
    - name: DisableExecuteApiEndpoint
      value: {{ DisableExecuteApiEndpoint }}
    - name: IpAddressType
      value: "{{ IpAddressType }}"
      description: |
        The IP address types that can invoke your API or domain name.
      valid_values: ['ipv4', 'dualstack']
    - name: Name
      value: "{{ Name }}"
      description: |
        A string with a length between [1-128].
    - name: ProtocolType
      value: "{{ ProtocolType }}"
      description: |
        Represents a protocol type.
      valid_values: ['WEBSOCKET', 'HTTP']
    - name: RouteKey
      value: "{{ RouteKey }}"
      description: |
        After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See Selection Expressions for a list of expressions and each expression's associated selection key type.
    - name: RouteSelectionExpression
      value: "{{ RouteSelectionExpression }}"
      description: |
        An expression used to extract information at runtime. See Selection Expressions for more information.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Represents a collection of tags associated with the resource.
    - name: Target
      value: "{{ Target }}"
      description: |
        A string representation of a URI with a length between [1-2048].
    - name: Version
      value: "{{ Version }}"
      description: |
        A string with a length between [1-64].
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_api"
    values={[
        { label: 'update_api', value: 'update_api' }
    ]}
>
<TabItem value="update_api">

Updates an Api resource.

```sql
UPDATE aws.apigatewayv2.apis
SET 
ApiKeySelectionExpression = '{{ ApiKeySelectionExpression }}',
CorsConfiguration = '{{ CorsConfiguration }}',
CredentialsArn = '{{ CredentialsArn }}',
Description = '{{ Description }}',
DisableSchemaValidation = {{ DisableSchemaValidation }},
DisableExecuteApiEndpoint = {{ DisableExecuteApiEndpoint }},
IpAddressType = '{{ IpAddressType }}',
Name = '{{ Name }}',
RouteKey = '{{ RouteKey }}',
RouteSelectionExpression = '{{ RouteSelectionExpression }}',
Target = '{{ Target }}',
Version = '{{ Version }}'
WHERE 
api_id = '{{ api_id }}' --required
AND region = '{{ region }}' --required
RETURNING
api_endpoint,
api_gateway_managed,
api_id,
api_key_selection_expression,
cors_configuration,
created_date,
description,
disable_execute_api_endpoint,
disable_schema_validation,
import_info,
ip_address_type,
name,
protocol_type,
route_selection_expression,
tags,
version,
warnings;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_api"
    values={[
        { label: 'delete_api', value: 'delete_api' }
    ]}
>
<TabItem value="delete_api">

Deletes an Api resource.

```sql
DELETE FROM aws.apigatewayv2.apis
WHERE api_id = '{{ api_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reimport_api"
    values={[
        { label: 'reimport_api', value: 'reimport_api' },
        { label: 'delete_cors_configuration', value: 'delete_cors_configuration' }
    ]}
>
<TabItem value="reimport_api">

Puts an Api resource.

```sql
EXEC aws.apigatewayv2.apis.reimport_api 
@api_id='{{ api_id }}' --required, 
@region='{{ region }}' --required, 
@basepath='{{ basepath }}', 
@failOnWarnings={{ failOnWarnings }} 
@@json=
'{
"Body": "{{ Body }}"
}'
;
```
</TabItem>
<TabItem value="delete_cors_configuration">

Deletes a CORS configuration.

```sql
EXEC aws.apigatewayv2.apis.delete_cors_configuration 
@api_id='{{ api_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
