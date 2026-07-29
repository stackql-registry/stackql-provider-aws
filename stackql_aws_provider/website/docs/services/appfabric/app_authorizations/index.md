--- 
title: app_authorizations
hide_title: false
hide_table_of_contents: false
keywords:
  - app_authorizations
  - appfabric
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

Creates, updates, deletes, gets or lists an <code>app_authorizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_authorizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appfabric.app_authorizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_app_authorization"
    values={[
        { label: 'get_app_authorization', value: 'get_app_authorization' },
        { label: 'list_app_authorizations', value: 'list_app_authorizations' }
    ]}
>
<TabItem value="get_app_authorization">

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
    <td><CopyableCode code="app" /></td>
    <td><code>string</code></td>
    <td>The name of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="app_authorization_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the app authorization. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="app_bundle_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the app bundle for the app authorization. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auth_type" /></td>
    <td><code>string</code></td>
    <td>The authorization type. (oauth2, apiKey)</td>
</tr>
<tr>
    <td><CopyableCode code="auth_url" /></td>
    <td><code>string</code></td>
    <td>The application URL for the OAuth flow.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the app authorization was created.</td>
</tr>
<tr>
    <td><CopyableCode code="persona" /></td>
    <td><code>string</code></td>
    <td>The user persona of the app authorization. This field should always be admin. (admin, endUser)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The state of the app authorization. The following states are possible: PendingConnect: The initial state of the app authorization. The app authorization is created but not yet connected. Connected: The app authorization is connected to the application, and is ready to be used. ConnectionValidationFailed: The app authorization received a validation exception when trying to connect to the application. If the app authorization is in this state, you should verify the configured credentials and try to connect the app authorization again. TokenAutoRotationFailed: AppFabric failed to refresh the access token. If the app authorization is in this state, you should try to reconnect the app authorization. (PendingConnect, Connected, ConnectionValidationFailed, TokenAutoRotationFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="tenant" /></td>
    <td><code>object</code></td>
    <td>Contains information about an application tenant.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the app authorization was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_app_authorizations">

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
    <td><CopyableCode code="app" /></td>
    <td><code>string</code></td>
    <td>The name of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="app_authorization_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the app authorization. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="app_bundle_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the app bundle for the app authorization. (pattern: &lt;code&gt;arn:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The state of the app authorization. The following states are possible: PendingConnect: The initial state of the app authorization. The app authorization is created but not yet connected. Connected: The app authorization is connected to the application, and is ready to be used. ConnectionValidationFailed: The app authorization received a validation exception when trying to connect to the application. If the app authorization is in this state, you should verify the configured credentials and try to connect the app authorization again. TokenAutoRotationFailed: AppFabric failed to refresh the access token. If the app authorization is in this state, you should try to reconnect the app authorization. (PendingConnect, Connected, ConnectionValidationFailed, TokenAutoRotationFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="tenant" /></td>
    <td><code>object</code></td>
    <td>Contains information about an application tenant, such as the application display name and identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp for when the app authorization was last updated.</td>
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
    <td><a href="#get_app_authorization"><CopyableCode code="get_app_authorization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-app_authorization_identifier"><code>app_authorization_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an app authorization.</td>
</tr>
<tr>
    <td><a href="#list_app_authorizations"><CopyableCode code="list_app_authorizations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of all app authorizations configured for an app bundle.</td>
</tr>
<tr>
    <td><a href="#create_app_authorization"><CopyableCode code="create_app_authorization" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-app"><code>app</code></a>, <a href="#parameter-credential"><code>credential</code></a>, <a href="#parameter-tenant"><code>tenant</code></a>, <a href="#parameter-authType"><code>authType</code></a></td>
    <td></td>
    <td>Creates an app authorization within an app bundle, which allows AppFabric to connect to an application.</td>
</tr>
<tr>
    <td><a href="#update_app_authorization"><CopyableCode code="update_app_authorization" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-app_authorization_identifier"><code>app_authorization_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an app authorization within an app bundle, which allows AppFabric to connect to an application. If the app authorization was in a connected state, updating the app authorization will set it back to a PendingConnect state.</td>
</tr>
<tr>
    <td><a href="#delete_app_authorization"><CopyableCode code="delete_app_authorization" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-app_authorization_identifier"><code>app_authorization_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an app authorization. You must delete the associated ingestion before you can delete an app authorization.</td>
</tr>
<tr>
    <td><a href="#connect_app_authorization"><CopyableCode code="connect_app_authorization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_bundle_identifier"><code>app_bundle_identifier</code></a>, <a href="#parameter-app_authorization_identifier"><code>app_authorization_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Establishes a connection between Amazon Web Services AppFabric and an application, which allows AppFabric to call the APIs of the application.</td>
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
<tr id="parameter-app_authorization_identifier">
    <td><CopyableCode code="app_authorization_identifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app authorization to use for the request.</td>
</tr>
<tr id="parameter-app_bundle_identifier">
    <td><CopyableCode code="app_bundle_identifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) or Universal Unique Identifier (UUID) of the app bundle that contains the app authorization to use for the request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results that are returned per call. You can use nextToken to obtain further pages of results. This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_app_authorization"
    values={[
        { label: 'get_app_authorization', value: 'get_app_authorization' },
        { label: 'list_app_authorizations', value: 'list_app_authorizations' }
    ]}
>
<TabItem value="get_app_authorization">

Returns information about an app authorization.

```sql
SELECT
app,
app_authorization_arn,
app_bundle_arn,
auth_type,
auth_url,
created_at,
persona,
status,
tenant,
updated_at
FROM aws.appfabric.app_authorizations
WHERE app_bundle_identifier = '{{ app_bundle_identifier }}' -- required
AND app_authorization_identifier = '{{ app_authorization_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_app_authorizations">

Returns a list of all app authorizations configured for an app bundle.

```sql
SELECT
app,
app_authorization_arn,
app_bundle_arn,
status,
tenant,
updated_at
FROM aws.appfabric.app_authorizations
WHERE app_bundle_identifier = '{{ app_bundle_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app_authorization"
    values={[
        { label: 'create_app_authorization', value: 'create_app_authorization' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app_authorization">

Creates an app authorization within an app bundle, which allows AppFabric to connect to an application.

```sql
INSERT INTO aws.appfabric.app_authorizations (
app,
credential,
tenant,
authType,
clientToken,
tags,
app_bundle_identifier,
region
)
SELECT 
'{{ app }}' /* required */,
'{{ credential }}' /* required */,
'{{ tenant }}' /* required */,
'{{ authType }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ app_bundle_identifier }}',
'{{ region }}'
RETURNING
app_authorization
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: app_authorizations
  props:
    - name: app_bundle_identifier
      value: "{{ app_bundle_identifier }}"
      description: Required parameter for the app_authorizations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the app_authorizations resource.
    - name: app
      value: "{{ app }}"
    - name: credential
      description: |
        Contains credential information for an application.
      value:
        oauth2Credential:
          clientId: "{{ clientId }}"
          clientSecret: "{{ clientSecret }}"
        apiKeyCredential:
          apiKey: "{{ apiKey }}"
    - name: tenant
      description: |
        Contains information about an application tenant.
      value:
        tenantIdentifier: "{{ tenantIdentifier }}"
        tenantDisplayName: "{{ tenantDisplayName }}"
    - name: authType
      value: "{{ authType }}"
      valid_values: ['oauth2', 'apiKey']
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_app_authorization"
    values={[
        { label: 'update_app_authorization', value: 'update_app_authorization' }
    ]}
>
<TabItem value="update_app_authorization">

Updates an app authorization within an app bundle, which allows AppFabric to connect to an application. If the app authorization was in a connected state, updating the app authorization will set it back to a PendingConnect state.

```sql
UPDATE aws.appfabric.app_authorizations
SET 
credential = '{{ credential }}',
tenant = '{{ tenant }}'
WHERE 
app_bundle_identifier = '{{ app_bundle_identifier }}' --required
AND app_authorization_identifier = '{{ app_authorization_identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
app_authorization;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app_authorization"
    values={[
        { label: 'delete_app_authorization', value: 'delete_app_authorization' }
    ]}
>
<TabItem value="delete_app_authorization">

Deletes an app authorization. You must delete the associated ingestion before you can delete an app authorization.

```sql
DELETE FROM aws.appfabric.app_authorizations
WHERE app_bundle_identifier = '{{ app_bundle_identifier }}' --required
AND app_authorization_identifier = '{{ app_authorization_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="connect_app_authorization"
    values={[
        { label: 'connect_app_authorization', value: 'connect_app_authorization' }
    ]}
>
<TabItem value="connect_app_authorization">

Establishes a connection between Amazon Web Services AppFabric and an application, which allows AppFabric to call the APIs of the application.

```sql
EXEC aws.appfabric.app_authorizations.connect_app_authorization 
@app_bundle_identifier='{{ app_bundle_identifier }}' --required, 
@app_authorization_identifier='{{ app_authorization_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"authRequest": "{{ authRequest }}"
}'
;
```
</TabItem>
</Tabs>
