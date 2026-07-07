--- 
title: apis
hide_title: false
hide_table_of_contents: false
keywords:
  - apis
  - appsync
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appsync.apis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_api"
    values={[
        { label: 'get_api', value: 'get_api' },
        { label: 'list_apis', value: 'list_apis' }
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Api. (pattern: &lt;code&gt;&#91;A-Za-z0-9_\-\ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="apiArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the Api.</td>
</tr>
<tr>
    <td><CopyableCode code="apiId" /></td>
    <td><code>string</code></td>
    <td>The Api ID.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Api was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dns" /></td>
    <td><code>object</code></td>
    <td>The DNS records for the API. This will include an HTTP and a real-time endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="eventConfig" /></td>
    <td><code>object</code></td>
    <td>Describes the authorization configuration for connections, message publishing, message subscriptions, and logging for an Event API.</td>
</tr>
<tr>
    <td><CopyableCode code="ownerContact" /></td>
    <td><code>string</code></td>
    <td>The owner contact information for the Api (pattern: &lt;code&gt;&#91;A-Za-z0-9_\-\ \.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="wafWebAclArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the WAF web access control list (web ACL) associated with this Api, if one exists.</td>
</tr>
<tr>
    <td><CopyableCode code="xrayEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag indicating whether to use X-Ray tracing for this Api.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_apis">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Api. (pattern: &lt;code&gt;&#91;A-Za-z0-9_\-\ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="apiArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the Api.</td>
</tr>
<tr>
    <td><CopyableCode code="apiId" /></td>
    <td><code>string</code></td>
    <td>The Api ID.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Api was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dns" /></td>
    <td><code>object</code></td>
    <td>The DNS records for the API. This will include an HTTP and a real-time endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="eventConfig" /></td>
    <td><code>object</code></td>
    <td>Describes the authorization configuration for connections, message publishing, message subscriptions, and logging for an Event API.</td>
</tr>
<tr>
    <td><CopyableCode code="ownerContact" /></td>
    <td><code>string</code></td>
    <td>The owner contact information for the Api (pattern: &lt;code&gt;&#91;A-Za-z0-9_\-\ \.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="wafWebAclArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the WAF web access control list (web ACL) associated with this Api, if one exists.</td>
</tr>
<tr>
    <td><CopyableCode code="xrayEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A flag indicating whether to use X-Ray tracing for this Api.</td>
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
    <td>Retrieves an Api object.</td>
</tr>
<tr>
    <td><a href="#list_apis"><CopyableCode code="list_apis" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the APIs in your AppSync account. ListApis returns only the high level API details. For more detailed information about an API, use GetApi.</td>
</tr>
<tr>
    <td><a href="#create_api"><CopyableCode code="create_api" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-eventConfig"><code>eventConfig</code></a></td>
    <td></td>
    <td>Creates an Api object. Use this operation to create an AppSync API with your preferred configuration, such as an Event API that provides real-time message publishing and message subscriptions over WebSockets.</td>
</tr>
<tr>
    <td><a href="#update_api"><CopyableCode code="update_api" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-eventConfig"><code>eventConfig</code></a></td>
    <td></td>
    <td>Updates an Api.</td>
</tr>
<tr>
    <td><a href="#associate_api"><CopyableCode code="associate_api" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-apiId"><code>apiId</code></a></td>
    <td></td>
    <td>Maps an endpoint to your custom domain.</td>
</tr>
<tr>
    <td><a href="#disassociate_api"><CopyableCode code="disassociate_api" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes an ApiAssociation object from a custom domain.</td>
</tr>
<tr>
    <td><a href="#delete_api"><CopyableCode code="delete_api" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Api object</td>
</tr>
<tr>
    <td><a href="#flush_api_cache"><CopyableCode code="flush_api_cache" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Flushes an ApiCache object.</td>
</tr>
<tr>
    <td><a href="#start_schema_creation"><CopyableCode code="start_schema_creation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-api_id"><code>api_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-definition"><code>definition</code></a></td>
    <td></td>
    <td>Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has completed.</td>
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
    <td>The API ID.</td>
</tr>
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The domain name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that you want the request to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_api"
    values={[
        { label: 'get_api', value: 'get_api' },
        { label: 'list_apis', value: 'list_apis' }
    ]}
>
<TabItem value="get_api">

Retrieves an Api object.

```sql
SELECT
name,
apiArn,
apiId,
created,
dns,
eventConfig,
ownerContact,
tags,
wafWebAclArn,
xrayEnabled
FROM aws.appsync.apis
WHERE api_id = '{{ api_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_apis">

Lists the APIs in your AppSync account. ListApis returns only the high level API details. For more detailed information about an API, use GetApi.

```sql
SELECT
name,
apiArn,
apiId,
created,
dns,
eventConfig,
ownerContact,
tags,
wafWebAclArn,
xrayEnabled
FROM aws.appsync.apis
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
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

Creates an Api object. Use this operation to create an AppSync API with your preferred configuration, such as an Event API that provides real-time message publishing and message subscriptions over WebSockets.

```sql
INSERT INTO aws.appsync.apis (
name,
ownerContact,
tags,
eventConfig,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ ownerContact }}',
'{{ tags }}',
'{{ eventConfig }}' /* required */,
'{{ region }}'
RETURNING
api
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
    - name: name
      value: "{{ name }}"
    - name: ownerContact
      value: "{{ ownerContact }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        A map with keys of TagKey objects and values of TagValue objects.
    - name: eventConfig
      description: |
        Describes the authorization configuration for connections, message publishing, message subscriptions, and logging for an Event API.
      value:
        authProviders:
          - authType: "{{ authType }}"
            cognitoConfig:
              userPoolId: "{{ userPoolId }}"
              awsRegion: "{{ awsRegion }}"
              appIdClientRegex: "{{ appIdClientRegex }}"
            openIDConnectConfig:
              issuer: "{{ issuer }}"
              clientId: "{{ clientId }}"
              iatTTL: {{ iatTTL }}
              authTTL: {{ authTTL }}
            lambdaAuthorizerConfig:
              authorizerResultTtlInSeconds: {{ authorizerResultTtlInSeconds }}
              authorizerUri: "{{ authorizerUri }}"
              identityValidationExpression: "{{ identityValidationExpression }}"
        connectionAuthModes:
          - authType: "{{ authType }}"
        defaultPublishAuthModes:
          - authType: "{{ authType }}"
        defaultSubscribeAuthModes:
          - authType: "{{ authType }}"
        logConfig:
          logLevel: "{{ logLevel }}"
          cloudWatchLogsRoleArn: "{{ cloudWatchLogsRoleArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_api"
    values={[
        { label: 'update_api', value: 'update_api' },
        { label: 'associate_api', value: 'associate_api' },
        { label: 'disassociate_api', value: 'disassociate_api' }
    ]}
>
<TabItem value="update_api">

Updates an Api.

```sql
UPDATE aws.appsync.apis
SET 
name = '{{ name }}',
ownerContact = '{{ ownerContact }}',
eventConfig = '{{ eventConfig }}'
WHERE 
api_id = '{{ api_id }}' --required
AND region = '{{ region }}' --required
AND name = '{{ name }}' --required
AND eventConfig = '{{ eventConfig }}' --required
RETURNING
api;
```
</TabItem>
<TabItem value="associate_api">

Maps an endpoint to your custom domain.

```sql
UPDATE aws.appsync.apis
SET 
apiId = '{{ apiId }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required
AND apiId = '{{ apiId }}' --required
RETURNING
apiAssociation;
```
</TabItem>
<TabItem value="disassociate_api">

Removes an ApiAssociation object from a custom domain.

```sql
UPDATE aws.appsync.apis
SET 
-- No updatable properties
WHERE 
domain_name = '{{ domain_name }}' --required
AND region = '{{ region }}' --required;
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

Deletes an Api object

```sql
DELETE FROM aws.appsync.apis
WHERE api_id = '{{ api_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="flush_api_cache"
    values={[
        { label: 'flush_api_cache', value: 'flush_api_cache' },
        { label: 'start_schema_creation', value: 'start_schema_creation' }
    ]}
>
<TabItem value="flush_api_cache">

Flushes an ApiCache object.

```sql
EXEC aws.appsync.apis.flush_api_cache 
@api_id='{{ api_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="start_schema_creation">

Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has completed.

```sql
EXEC aws.appsync.apis.start_schema_creation 
@api_id='{{ api_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"definition": "{{ definition }}"
}'
;
```
</TabItem>
</Tabs>
