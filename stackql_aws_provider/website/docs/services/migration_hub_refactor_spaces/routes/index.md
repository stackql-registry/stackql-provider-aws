--- 
title: routes
hide_title: false
hide_table_of_contents: false
keywords:
  - routes
  - migration_hub_refactor_spaces
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

Creates, updates, deletes, gets or lists a <code>routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="routes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migration_hub_refactor_spaces.routes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_route"
    values={[
        { label: 'get_route', value: 'get_route' },
        { label: 'list_routes', value: 'list_routes' }
    ]}
>
<TabItem value="get_route">

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
    <td><CopyableCode code="append_source_path" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, this option appends the source path to the service URL endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the application that the route belongs to. (pattern: &lt;code&gt;^app-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the route. (pattern: &lt;code&gt;^arn:aws:refactor-spaces:&#91;a-zA-Z0-9\-&#93;+:\w&#123;12&#125;:&#91;a-zA-Z_0-9+=,.@\-_/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the route creator. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the route is created.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the environment. (pattern: &lt;code&gt;^env-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Any error associated with the route resource.</td>
</tr>
<tr>
    <td><CopyableCode code="include_child_paths" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to match all subpaths of the given source path. If this value is false, requests must match the source path exactly before they are forwarded to this route's service.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the route was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="methods" /></td>
    <td><code>array</code></td>
    <td>A list of HTTP methods to match. An empty list matches all values. If a method is present, only HTTP requests using that method are forwarded to this route’s service.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the route owner. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="path_resource_to_id" /></td>
    <td><code>object</code></td>
    <td>A mapping of Amazon API Gateway path resources to resource IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="route_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the route. DEFAULT: All traffic that does not match another route is forwarded to the default route. Applications must have a default route before any other routes can be created. URI_PATH: A route that is based on a URI path. (pattern: &lt;code&gt;^rte-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="route_type" /></td>
    <td><code>string</code></td>
    <td>The type of route. (DEFAULT, URI_PATH)</td>
</tr>
<tr>
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the service. (pattern: &lt;code&gt;^svc-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_path" /></td>
    <td><code>string</code></td>
    <td>This is the path that Refactor Spaces uses to match traffic. Paths must start with / and are relative to the base of the application. To use path parameters in the source path, add a variable in curly braces. For example, the resource path &#123;user&#125; represents a path parameter called 'user'. (pattern: &lt;code&gt;^(/(&#91;a-zA-Z0-9._:-&#93;+|\&#123;&#91;a-zA-Z0-9._:-&#93;+\&#125;))+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the route. (CREATING, ACTIVE, DELETING, FAILED, UPDATING, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the route. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_routes">

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
    <td><CopyableCode code="append_source_path" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, this option appends the source path to the service URL endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the application. (pattern: &lt;code&gt;^app-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the route. (pattern: &lt;code&gt;^arn:aws:refactor-spaces:&#91;a-zA-Z0-9\-&#93;+:\w&#123;12&#125;:&#91;a-zA-Z_0-9+=,.@\-_/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the route creator. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the route is created.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the environment. (pattern: &lt;code&gt;^env-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Any error associated with the route resource.</td>
</tr>
<tr>
    <td><CopyableCode code="include_child_paths" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to match all subpaths of the given source path. If this value is false, requests must match the source path exactly before they are forwarded to this route's service.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the route was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="methods" /></td>
    <td><code>array</code></td>
    <td>A list of HTTP methods to match. An empty list matches all values. If a method is present, only HTTP requests using that method are forwarded to this route’s service.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the route owner. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="path_resource_to_id" /></td>
    <td><code>object</code></td>
    <td>A mapping of Amazon API Gateway path resources to resource IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="route_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the route. (pattern: &lt;code&gt;^rte-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="route_type" /></td>
    <td><code>string</code></td>
    <td>The route type of the route. (DEFAULT, URI_PATH)</td>
</tr>
<tr>
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the service. (pattern: &lt;code&gt;^svc-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_path" /></td>
    <td><code>string</code></td>
    <td>This is the path that Refactor Spaces uses to match traffic. Paths must start with / and are relative to the base of the application. To use path parameters in the source path, add a variable in curly braces. For example, the resource path &#123;user&#125; represents a path parameter called 'user'. (pattern: &lt;code&gt;^(/(&#91;a-zA-Z0-9._:-&#93;+|\&#123;&#91;a-zA-Z0-9._:-&#93;+\&#125;))+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the route. (CREATING, ACTIVE, DELETING, FAILED, UPDATING, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the route.</td>
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
    <td><a href="#get_route"><CopyableCode code="get_route" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-route_identifier"><code>route_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Amazon Web Services Migration Hub Refactor Spaces route.</td>
</tr>
<tr>
    <td><a href="#list_routes"><CopyableCode code="list_routes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all the Amazon Web Services Migration Hub Refactor Spaces routes within an application.</td>
</tr>
<tr>
    <td><a href="#create_route"><CopyableCode code="create_route" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RouteType"><code>RouteType</code></a>, <a href="#parameter-ServiceIdentifier"><code>ServiceIdentifier</code></a></td>
    <td></td>
    <td>Creates an Amazon Web Services Migration Hub Refactor Spaces route. The account owner of the service resource is always the environment owner, regardless of which account creates the route. Routes target a service in the application. If an application does not have any routes, then the first route must be created as a DEFAULT RouteType. When created, the default route defaults to an active state so state is not a required input. However, like all other state values the state of the default route can be updated after creation, but only when all other routes are also inactive. Conversely, no route can be active without the default route also being active. When you create a route, Refactor Spaces configures the Amazon API Gateway to send traffic to the target service as follows: URL Endpoints If the service has a URL endpoint, and the endpoint resolves to a private IP address, Refactor Spaces routes traffic using the API Gateway VPC link. If a service endpoint resolves to a public IP address, Refactor Spaces routes traffic over the public internet. Services can have HTTP or HTTPS URL endpoints. For HTTPS URLs, publicly-signed certificates are supported. Private Certificate Authorities (CAs) are permitted only if the CA's domain is also publicly resolvable. Refactor Spaces automatically resolves the public Domain Name System (DNS) names that are set in CreateService:UrlEndpoint when you create a service. The DNS names resolve when the DNS time-to-live (TTL) expires, or every 60 seconds for TTLs less than 60 seconds. This periodic DNS resolution ensures that the route configuration remains up-to-date. One-time health check A one-time health check is performed on the service when either the route is updated from inactive to active, or when it is created with an active state. If the health check fails, the route transitions the route state to FAILED, an error code of SERVICE_ENDPOINT_HEALTH_CHECK_FAILURE is provided, and no traffic is sent to the service. For private URLs, a target group is created on the Network Load Balancer and the load balancer target group runs default target health checks. By default, the health check is run against the service endpoint URL. Optionally, the health check can be performed against a different protocol, port, and/or path using the CreateService:UrlEndpoint parameter. All other health check settings for the load balancer use the default values described in the Health checks for your target groups in the Elastic Load Balancing guide. The health check is considered successful if at least one target within the target group transitions to a healthy state. Lambda function endpoints If the service has an Lambda function endpoint, then Refactor Spaces configures the Lambda function's resource policy to allow the application's API Gateway to invoke the function. The Lambda function state is checked. If the function is not active, the function configuration is updated so that Lambda resources are provisioned. If the Lambda state is Failed, then the route creation fails. For more information, see the GetFunctionConfiguration's State response parameter in the Lambda Developer Guide. A check is performed to determine that a Lambda function with the specified ARN exists. If it does not exist, the health check fails. For public URLs, a connection is opened to the public endpoint. If the URL is not reachable, the health check fails. Environments without a network bridge When you create environments without a network bridge (CreateEnvironment:NetworkFabricType is NONE) and you use your own networking infrastructure, you need to configure VPC to VPC connectivity between your network and the application proxy VPC. Route creation from the application proxy to service endpoints will fail if your network is not configured to connect to the application proxy VPC. For more information, see Create a route in the Refactor Spaces User Guide.</td>
</tr>
<tr>
    <td><a href="#update_route"><CopyableCode code="update_route" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-route_identifier"><code>route_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ActivationState"><code>ActivationState</code></a></td>
    <td></td>
    <td>Updates an Amazon Web Services Migration Hub Refactor Spaces route.</td>
</tr>
<tr>
    <td><a href="#delete_route"><CopyableCode code="delete_route" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-route_identifier"><code>route_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Web Services Migration Hub Refactor Spaces route.</td>
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
<tr id="parameter-application_identifier">
    <td><CopyableCode code="application_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the application to delete the route from.</td>
</tr>
<tr id="parameter-environment_identifier">
    <td><CopyableCode code="environment_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment to delete the route from.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-route_identifier">
    <td><CopyableCode code="route_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the route to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_route"
    values={[
        { label: 'get_route', value: 'get_route' },
        { label: 'list_routes', value: 'list_routes' }
    ]}
>
<TabItem value="get_route">

Gets an Amazon Web Services Migration Hub Refactor Spaces route.

```sql
SELECT
append_source_path,
application_id,
arn,
created_by_account_id,
created_time,
environment_id,
error,
include_child_paths,
last_updated_time,
methods,
owner_account_id,
path_resource_to_id,
route_id,
route_type,
service_id,
source_path,
state,
tags
FROM aws.migration_hub_refactor_spaces.routes
WHERE application_identifier = '{{ application_identifier }}' -- required
AND environment_identifier = '{{ environment_identifier }}' -- required
AND route_identifier = '{{ route_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_routes">

Lists all the Amazon Web Services Migration Hub Refactor Spaces routes within an application.

```sql
SELECT
append_source_path,
application_id,
arn,
created_by_account_id,
created_time,
environment_id,
error,
include_child_paths,
last_updated_time,
methods,
owner_account_id,
path_resource_to_id,
route_id,
route_type,
service_id,
source_path,
state,
tags
FROM aws.migration_hub_refactor_spaces.routes
WHERE application_identifier = '{{ application_identifier }}' -- required
AND environment_identifier = '{{ environment_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_route"
    values={[
        { label: 'create_route', value: 'create_route' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_route">

Creates an Amazon Web Services Migration Hub Refactor Spaces route. The account owner of the service resource is always the environment owner, regardless of which account creates the route. Routes target a service in the application. If an application does not have any routes, then the first route must be created as a DEFAULT RouteType. When created, the default route defaults to an active state so state is not a required input. However, like all other state values the state of the default route can be updated after creation, but only when all other routes are also inactive. Conversely, no route can be active without the default route also being active. When you create a route, Refactor Spaces configures the Amazon API Gateway to send traffic to the target service as follows: URL Endpoints If the service has a URL endpoint, and the endpoint resolves to a private IP address, Refactor Spaces routes traffic using the API Gateway VPC link. If a service endpoint resolves to a public IP address, Refactor Spaces routes traffic over the public internet. Services can have HTTP or HTTPS URL endpoints. For HTTPS URLs, publicly-signed certificates are supported. Private Certificate Authorities (CAs) are permitted only if the CA's domain is also publicly resolvable. Refactor Spaces automatically resolves the public Domain Name System (DNS) names that are set in CreateService:UrlEndpoint when you create a service. The DNS names resolve when the DNS time-to-live (TTL) expires, or every 60 seconds for TTLs less than 60 seconds. This periodic DNS resolution ensures that the route configuration remains up-to-date. One-time health check A one-time health check is performed on the service when either the route is updated from inactive to active, or when it is created with an active state. If the health check fails, the route transitions the route state to FAILED, an error code of SERVICE_ENDPOINT_HEALTH_CHECK_FAILURE is provided, and no traffic is sent to the service. For private URLs, a target group is created on the Network Load Balancer and the load balancer target group runs default target health checks. By default, the health check is run against the service endpoint URL. Optionally, the health check can be performed against a different protocol, port, and/or path using the CreateService:UrlEndpoint parameter. All other health check settings for the load balancer use the default values described in the Health checks for your target groups in the Elastic Load Balancing guide. The health check is considered successful if at least one target within the target group transitions to a healthy state. Lambda function endpoints If the service has an Lambda function endpoint, then Refactor Spaces configures the Lambda function's resource policy to allow the application's API Gateway to invoke the function. The Lambda function state is checked. If the function is not active, the function configuration is updated so that Lambda resources are provisioned. If the Lambda state is Failed, then the route creation fails. For more information, see the GetFunctionConfiguration's State response parameter in the Lambda Developer Guide. A check is performed to determine that a Lambda function with the specified ARN exists. If it does not exist, the health check fails. For public URLs, a connection is opened to the public endpoint. If the URL is not reachable, the health check fails. Environments without a network bridge When you create environments without a network bridge (CreateEnvironment:NetworkFabricType is NONE) and you use your own networking infrastructure, you need to configure VPC to VPC connectivity between your network and the application proxy VPC. Route creation from the application proxy to service endpoints will fail if your network is not configured to connect to the application proxy VPC. For more information, see Create a route in the Refactor Spaces User Guide.

```sql
INSERT INTO aws.migration_hub_refactor_spaces.routes (
ClientToken,
DefaultRoute,
RouteType,
ServiceIdentifier,
Tags,
UriPathRoute,
application_identifier,
environment_identifier,
region
)
SELECT 
'{{ ClientToken }}',
'{{ DefaultRoute }}',
'{{ RouteType }}' /* required */,
'{{ ServiceIdentifier }}' /* required */,
'{{ Tags }}',
'{{ UriPathRoute }}',
'{{ application_identifier }}',
'{{ environment_identifier }}',
'{{ region }}'
RETURNING
application_id,
arn,
created_by_account_id,
created_time,
last_updated_time,
owner_account_id,
route_id,
route_type,
service_id,
state,
tags,
uri_path_route
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: routes
  props:
    - name: application_identifier
      value: "{{ application_identifier }}"
      description: Required parameter for the routes resource.
    - name: environment_identifier
      value: "{{ environment_identifier }}"
      description: Required parameter for the routes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the routes resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: DefaultRoute
      description: |
        The configuration for the default route type.
      value:
        ActivationState: "{{ ActivationState }}"
    - name: RouteType
      value: "{{ RouteType }}"
      valid_values: ['DEFAULT', 'URI_PATH']
    - name: ServiceIdentifier
      value: "{{ ServiceIdentifier }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A collection of up to 50 unique tags
    - name: UriPathRoute
      description: |
        The configuration for the URI path route type.
      value:
        ActivationState: "{{ ActivationState }}"
        AppendSourcePath: {{ AppendSourcePath }}
        IncludeChildPaths: {{ IncludeChildPaths }}
        Methods:
          - "{{ Methods }}"
        SourcePath: "{{ SourcePath }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_route"
    values={[
        { label: 'update_route', value: 'update_route' }
    ]}
>
<TabItem value="update_route">

Updates an Amazon Web Services Migration Hub Refactor Spaces route.

```sql
UPDATE aws.migration_hub_refactor_spaces.routes
SET 
ActivationState = '{{ ActivationState }}'
WHERE 
application_identifier = '{{ application_identifier }}' --required
AND environment_identifier = '{{ environment_identifier }}' --required
AND route_identifier = '{{ route_identifier }}' --required
AND region = '{{ region }}' --required
AND ActivationState = '{{ ActivationState }}' --required
RETURNING
application_id,
arn,
last_updated_time,
route_id,
service_id,
state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_route"
    values={[
        { label: 'delete_route', value: 'delete_route' }
    ]}
>
<TabItem value="delete_route">

Deletes an Amazon Web Services Migration Hub Refactor Spaces route.

```sql
DELETE FROM aws.migration_hub_refactor_spaces.routes
WHERE application_identifier = '{{ application_identifier }}' --required
AND environment_identifier = '{{ environment_identifier }}' --required
AND route_identifier = '{{ route_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
