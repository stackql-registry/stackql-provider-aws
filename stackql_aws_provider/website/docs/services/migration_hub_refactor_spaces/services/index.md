--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migration_hub_refactor_spaces.services" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service"
    values={[
        { label: 'get_service', value: 'get_service' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="get_service">

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
    <td><CopyableCode code="ApplicationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the application. (pattern: &lt;code&gt;^app-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service. (pattern: &lt;code&gt;^arn:aws:refactor-spaces:&#91;a-zA-Z0-9\-&#93;+:\w&#123;12&#125;:&#91;a-zA-Z_0-9+=,.@\-_/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedByAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the service creator. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the service is created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the service. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-_\s\.\!\*\#\@\'&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointType" /></td>
    <td><code>string</code></td>
    <td>The endpoint type of the service. (LAMBDA, URL)</td>
</tr>
<tr>
    <td><CopyableCode code="EnvironmentId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the environment. (pattern: &lt;code&gt;^env-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Error" /></td>
    <td><code>object</code></td>
    <td>Any error associated with the service resource.</td>
</tr>
<tr>
    <td><CopyableCode code="LambdaEndpoint" /></td>
    <td><code>object</code></td>
    <td>The configuration for the Lambda endpoint type. The Arn is the Amazon Resource Name (ARN) of the Lambda function associated with this service.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the service was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the service. (pattern: &lt;code&gt;^(?!svc-)&#91;a-zA-Z0-9&#93;+&#91;a-zA-Z0-9-_ &#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the service owner. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the service. (pattern: &lt;code&gt;^svc-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the service. (CREATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the service. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.</td>
</tr>
<tr>
    <td><CopyableCode code="UrlEndpoint" /></td>
    <td><code>object</code></td>
    <td>The configuration for the URL endpoint type. The Url isthe URL of the endpoint type. The HealthUrl is the health check URL of the endpoint type.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the virtual private cloud (VPC). (pattern: &lt;code&gt;^vpc-&#91;-a-f0-9&#93;&#123;8&#125;(&#91;-a-f0-9&#93;&#123;9&#125;)?$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_services">

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
    <td><CopyableCode code="ApplicationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the application. (pattern: &lt;code&gt;^app-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service. (pattern: &lt;code&gt;^arn:aws:refactor-spaces:&#91;a-zA-Z0-9\-&#93;+:\w&#123;12&#125;:&#91;a-zA-Z_0-9+=,.@\-_/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedByAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the service creator. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the service is created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the service. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-_\s\.\!\*\#\@\'&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointType" /></td>
    <td><code>string</code></td>
    <td>The endpoint type of the service. (LAMBDA, URL)</td>
</tr>
<tr>
    <td><CopyableCode code="EnvironmentId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the environment. (pattern: &lt;code&gt;^env-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Error" /></td>
    <td><code>object</code></td>
    <td>Any error associated with the service resource.</td>
</tr>
<tr>
    <td><CopyableCode code="LambdaEndpoint" /></td>
    <td><code>object</code></td>
    <td>A summary of the configuration for the Lambda endpoint type.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp that indicates when the service was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the service. (pattern: &lt;code&gt;^(?!svc-)&#91;a-zA-Z0-9&#93;+&#91;a-zA-Z0-9-_ &#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the service owner. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the service. (pattern: &lt;code&gt;^svc-&#91;0-9A-Za-z&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the service. (CREATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the service.</td>
</tr>
<tr>
    <td><CopyableCode code="UrlEndpoint" /></td>
    <td><code>object</code></td>
    <td>The summary of the configuration for the URL endpoint type.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
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
    <td><a href="#get_service"><CopyableCode code="get_service" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-service_identifier"><code>service_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Amazon Web Services Migration Hub Refactor Spaces service.</td>
</tr>
<tr>
    <td><a href="#list_services"><CopyableCode code="list_services" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all the Amazon Web Services Migration Hub Refactor Spaces services within an application.</td>
</tr>
<tr>
    <td><a href="#create_service"><CopyableCode code="create_service" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointType"><code>EndpointType</code></a></td>
    <td></td>
    <td>Creates an Amazon Web Services Migration Hub Refactor Spaces service. The account owner of the service is always the environment owner, regardless of which account in the environment creates the service. Services have either a URL endpoint in a virtual private cloud (VPC), or a Lambda function endpoint. If an Amazon Web Services resource is launched in a service VPC, and you want it to be accessible to all of an environment’s services with VPCs and routes, apply the RefactorSpacesSecurityGroup to the resource. Alternatively, to add more cross-account constraints, apply your own security group.</td>
</tr>
<tr>
    <td><a href="#delete_service"><CopyableCode code="delete_service" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_identifier"><code>application_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-service_identifier"><code>service_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Web Services Migration Hub Refactor Spaces service.</td>
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
    <td>Deletes a Refactor Spaces service. The RefactorSpacesSecurityGroup security group must be removed from all Amazon Web Services resources in the virtual private cloud (VPC) prior to deleting a service with a URL endpoint in a VPC.</td>
</tr>
<tr id="parameter-environment_identifier">
    <td><CopyableCode code="environment_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment that the service is in.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-service_identifier">
    <td><CopyableCode code="service_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the service to delete.</td>
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
    defaultValue="get_service"
    values={[
        { label: 'get_service', value: 'get_service' },
        { label: 'list_services', value: 'list_services' }
    ]}
>
<TabItem value="get_service">

Gets an Amazon Web Services Migration Hub Refactor Spaces service.

```sql
SELECT
ApplicationId,
Arn,
CreatedByAccountId,
CreatedTime,
Description,
EndpointType,
EnvironmentId,
Error,
LambdaEndpoint,
LastUpdatedTime,
Name,
OwnerAccountId,
ServiceId,
State,
Tags,
UrlEndpoint,
VpcId
FROM aws.migration_hub_refactor_spaces.services
WHERE application_identifier = '{{ application_identifier }}' -- required
AND environment_identifier = '{{ environment_identifier }}' -- required
AND service_identifier = '{{ service_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_services">

Lists all the Amazon Web Services Migration Hub Refactor Spaces services within an application.

```sql
SELECT
ApplicationId,
Arn,
CreatedByAccountId,
CreatedTime,
Description,
EndpointType,
EnvironmentId,
Error,
LambdaEndpoint,
LastUpdatedTime,
Name,
OwnerAccountId,
ServiceId,
State,
Tags,
UrlEndpoint,
VpcId
FROM aws.migration_hub_refactor_spaces.services
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
    defaultValue="create_service"
    values={[
        { label: 'create_service', value: 'create_service' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service">

Creates an Amazon Web Services Migration Hub Refactor Spaces service. The account owner of the service is always the environment owner, regardless of which account in the environment creates the service. Services have either a URL endpoint in a virtual private cloud (VPC), or a Lambda function endpoint. If an Amazon Web Services resource is launched in a service VPC, and you want it to be accessible to all of an environment’s services with VPCs and routes, apply the RefactorSpacesSecurityGroup to the resource. Alternatively, to add more cross-account constraints, apply your own security group.

```sql
INSERT INTO aws.migration_hub_refactor_spaces.services (
ClientToken,
Description,
EndpointType,
LambdaEndpoint,
Name,
Tags,
UrlEndpoint,
VpcId,
application_identifier,
environment_identifier,
region
)
SELECT 
'{{ ClientToken }}',
'{{ Description }}',
'{{ EndpointType }}' /* required */,
'{{ LambdaEndpoint }}',
'{{ Name }}',
'{{ Tags }}',
'{{ UrlEndpoint }}',
'{{ VpcId }}',
'{{ application_identifier }}',
'{{ environment_identifier }}',
'{{ region }}'
RETURNING
ApplicationId,
Arn,
CreatedByAccountId,
CreatedTime,
Description,
EndpointType,
EnvironmentId,
LambdaEndpoint,
LastUpdatedTime,
Name,
OwnerAccountId,
ServiceId,
State,
Tags,
UrlEndpoint,
VpcId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: services
  props:
    - name: application_identifier
      value: "{{ application_identifier }}"
      description: Required parameter for the services resource.
    - name: environment_identifier
      value: "{{ environment_identifier }}"
      description: Required parameter for the services resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the services resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Description
      value: "{{ Description }}"
    - name: EndpointType
      value: "{{ EndpointType }}"
      valid_values: ['LAMBDA', 'URL']
    - name: LambdaEndpoint
      description: |
        The input for the Lambda endpoint type.
      value:
        Arn: "{{ Arn }}"
    - name: Name
      value: "{{ Name }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A collection of up to 50 unique tags
    - name: UrlEndpoint
      description: |
        The configuration for the URL endpoint type.
      value:
        HealthUrl: "{{ HealthUrl }}"
        Url: "{{ Url }}"
    - name: VpcId
      value: "{{ VpcId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service"
    values={[
        { label: 'delete_service', value: 'delete_service' }
    ]}
>
<TabItem value="delete_service">

Deletes an Amazon Web Services Migration Hub Refactor Spaces service.

```sql
DELETE FROM aws.migration_hub_refactor_spaces.services
WHERE application_identifier = '{{ application_identifier }}' --required
AND environment_identifier = '{{ environment_identifier }}' --required
AND service_identifier = '{{ service_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
