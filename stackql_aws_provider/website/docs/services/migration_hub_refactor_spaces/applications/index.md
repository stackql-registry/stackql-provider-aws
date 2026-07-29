--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migration_hub_refactor_spaces.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

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
    <td><CopyableCode code="api_gateway_proxy" /></td>
    <td><code>object</code></td>
    <td>The endpoint URL of the API Gateway proxy.</td>
</tr>
<tr>
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the application. (pattern: &lt;code&gt;^app-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the application. (pattern: &lt;code&gt;^arn:aws:refactor-spaces:&#91;a-zA-Z0-9\-&#93;+:\w&#123;12&#125;:&#91;a-zA-Z_0-9+=,.@\-_/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the application creator. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the application is created.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the environment. (pattern: &lt;code&gt;^env-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Any error associated with the application resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the application was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the application. (pattern: &lt;code&gt;^(?!app-)&#91;a-zA-Z0-9&#93;+&#91;a-zA-Z0-9-_ &#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the application owner (which is always the same as the environment owner account ID). (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="proxy_type" /></td>
    <td><code>string</code></td>
    <td>The proxy type of the proxy created within the application. (API_GATEWAY)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the application. (CREATING, ACTIVE, DELETING, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the application. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual private cloud (VPC). (pattern: &lt;code&gt;^vpc-&#91;-a-f0-9&#93;&#123;8&#125;(&#91;-a-f0-9&#93;&#123;9&#125;)?$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_applications">

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
    <td><CopyableCode code="api_gateway_proxy" /></td>
    <td><code>object</code></td>
    <td>The endpoint URL of the Amazon API Gateway proxy.</td>
</tr>
<tr>
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the application. (pattern: &lt;code&gt;^app-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the application. (pattern: &lt;code&gt;^arn:aws:refactor-spaces:&#91;a-zA-Z0-9\-&#93;+:\w&#123;12&#125;:&#91;a-zA-Z_0-9+=,.@\-_/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the application creator. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the application is created.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the environment. (pattern: &lt;code&gt;^env-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Any error associated with the application resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the application was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the application. (pattern: &lt;code&gt;^(?!app-)&#91;a-zA-Z0-9&#93;+&#91;a-zA-Z0-9-_ &#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the application owner (which is always the same as the environment owner account ID). (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="proxy_type" /></td>
    <td><code>string</code></td>
    <td>The proxy type of the proxy created within the application. (API_GATEWAY)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the application. (CREATING, ACTIVE, DELETING, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the application.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual private cloud (VPC). (pattern: &lt;code&gt;^vpc-&#91;-a-f0-9&#93;&#123;8&#125;(&#91;-a-f0-9&#93;&#123;9&#125;)?$&lt;/code&gt;)</td>
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
    <td><a href="#get_application"><CopyableCode code="get_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Amazon Web Services Migration Hub Refactor Spaces application.</td>
</tr>
<tr>
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all the Amazon Web Services Migration Hub Refactor Spaces applications within an environment.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProxyType"><code>ProxyType</code></a>, <a href="#parameter-VpcId"><code>VpcId</code></a></td>
    <td></td>
    <td>Creates an Amazon Web Services Migration Hub Refactor Spaces application. The account that owns the environment also owns the applications created inside the environment, regardless of the account that creates the application. Refactor Spaces provisions an Amazon API Gateway, API Gateway VPC link, and Network Load Balancer for the application proxy inside your account. In environments created with a CreateEnvironment:NetworkFabricType of NONE you need to configure VPC to VPC connectivity between your service VPC and the application proxy VPC to route traffic through the application proxy to a service with a private URL endpoint. For more information, see Create an application in the Refactor Spaces User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Web Services Migration Hub Refactor Spaces application. Before you can delete an application, you must first delete any services or routes within the application.</td>
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
    <td>The ID of the application.</td>
</tr>
<tr id="parameter-environment_identifier">
    <td><CopyableCode code="environment_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
    defaultValue="get_application"
    values={[
        { label: 'get_application', value: 'get_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="get_application">

Gets an Amazon Web Services Migration Hub Refactor Spaces application.

```sql
SELECT
api_gateway_proxy,
application_id,
arn,
created_by_account_id,
created_time,
environment_id,
error,
last_updated_time,
name,
owner_account_id,
proxy_type,
state,
tags,
vpc_id
FROM aws.migration_hub_refactor_spaces.applications
WHERE application_identifier = '{{ application_identifier }}' -- required
AND environment_identifier = '{{ environment_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_applications">

Lists all the Amazon Web Services Migration Hub Refactor Spaces applications within an environment.

```sql
SELECT
api_gateway_proxy,
application_id,
arn,
created_by_account_id,
created_time,
environment_id,
error,
last_updated_time,
name,
owner_account_id,
proxy_type,
state,
tags,
vpc_id
FROM aws.migration_hub_refactor_spaces.applications
WHERE environment_identifier = '{{ environment_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application"
    values={[
        { label: 'create_application', value: 'create_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application">

Creates an Amazon Web Services Migration Hub Refactor Spaces application. The account that owns the environment also owns the applications created inside the environment, regardless of the account that creates the application. Refactor Spaces provisions an Amazon API Gateway, API Gateway VPC link, and Network Load Balancer for the application proxy inside your account. In environments created with a CreateEnvironment:NetworkFabricType of NONE you need to configure VPC to VPC connectivity between your service VPC and the application proxy VPC to route traffic through the application proxy to a service with a private URL endpoint. For more information, see Create an application in the Refactor Spaces User Guide.

```sql
INSERT INTO aws.migration_hub_refactor_spaces.applications (
ApiGatewayProxy,
ClientToken,
Name,
ProxyType,
Tags,
VpcId,
environment_identifier,
region
)
SELECT 
'{{ ApiGatewayProxy }}',
'{{ ClientToken }}',
'{{ Name }}',
'{{ ProxyType }}' /* required */,
'{{ Tags }}',
'{{ VpcId }}' /* required */,
'{{ environment_identifier }}',
'{{ region }}'
RETURNING
api_gateway_proxy,
application_id,
arn,
created_by_account_id,
created_time,
environment_id,
last_updated_time,
name,
owner_account_id,
proxy_type,
state,
tags,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: environment_identifier
      value: "{{ environment_identifier }}"
      description: Required parameter for the applications resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: ApiGatewayProxy
      description: |
        A wrapper object holding the Amazon API Gateway endpoint input.
      value:
        EndpointType: "{{ EndpointType }}"
        StageName: "{{ StageName }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Name
      value: "{{ Name }}"
    - name: ProxyType
      value: "{{ ProxyType }}"
      valid_values: ['API_GATEWAY']
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A collection of up to 50 unique tags
    - name: VpcId
      value: "{{ VpcId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application"
    values={[
        { label: 'delete_application', value: 'delete_application' }
    ]}
>
<TabItem value="delete_application">

Deletes an Amazon Web Services Migration Hub Refactor Spaces application. Before you can delete an application, you must first delete any services or routes within the application.

```sql
DELETE FROM aws.migration_hub_refactor_spaces.applications
WHERE application_identifier = '{{ application_identifier }}' --required
AND environment_identifier = '{{ environment_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
