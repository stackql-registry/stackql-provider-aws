--- 
title: backends
hide_title: false
hide_table_of_contents: false
keywords:
  - backends
  - amplifybackend
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

Creates, updates, deletes, gets or lists a <code>backends</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backends" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplifybackend.backends" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_backend"
    values={[
        { label: 'get_backend', value: 'get_backend' }
    ]}
>
<TabItem value="get_backend">

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
    <td><CopyableCode code="AmplifyFeatureFlags" /></td>
    <td><code>string</code></td>
    <td>A stringified version of the cli.json file for your Amplify project.</td>
</tr>
<tr>
    <td><CopyableCode code="AmplifyMetaConfig" /></td>
    <td><code>string</code></td>
    <td>A stringified version of the current configs for your Amplify project.</td>
</tr>
<tr>
    <td><CopyableCode code="AppId" /></td>
    <td><code>string</code></td>
    <td>The app ID.</td>
</tr>
<tr>
    <td><CopyableCode code="AppName" /></td>
    <td><code>string</code></td>
    <td>The name of the app.</td>
</tr>
<tr>
    <td><CopyableCode code="BackendEnvironmentList" /></td>
    <td><code>array</code></td>
    <td>A list of backend environments in an array.</td>
</tr>
<tr>
    <td><CopyableCode code="BackendEnvironmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment.</td>
</tr>
<tr>
    <td><CopyableCode code="Error" /></td>
    <td><code>string</code></td>
    <td>If the request failed, this is the returned error.</td>
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
    <td><a href="#get_backend"><CopyableCode code="get_backend" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides project-level details for your Amplify UI project.</td>
</tr>
<tr>
    <td><a href="#create_backend"><CopyableCode code="create_backend" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AppId"><code>AppId</code></a>, <a href="#parameter-AppName"><code>AppName</code></a>, <a href="#parameter-BackendEnvironmentName"><code>BackendEnvironmentName</code></a></td>
    <td></td>
    <td>This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.</td>
</tr>
<tr>
    <td><a href="#create_backend_config"><CopyableCode code="create_backend_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a config object for a backend.</td>
</tr>
<tr>
    <td><a href="#remove_all_backends"><CopyableCode code="remove_all_backends" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes all backend environments from your Amplify project.</td>
</tr>
<tr>
    <td><a href="#delete_backend"><CopyableCode code="delete_backend" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-backend_environment_name"><code>backend_environment_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes an existing environment from your Amplify project.</td>
</tr>
<tr>
    <td><a href="#import_backend_auth"><CopyableCode code="import_backend_auth" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-backend_environment_name"><code>backend_environment_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-NativeClientId"><code>NativeClientId</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-WebClientId"><code>WebClientId</code></a></td>
    <td></td>
    <td>Imports an existing backend authentication resource.</td>
</tr>
<tr>
    <td><a href="#import_backend_storage"><CopyableCode code="import_backend_storage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-backend_environment_name"><code>backend_environment_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServiceName"><code>ServiceName</code></a></td>
    <td></td>
    <td>Imports an existing backend storage resource.</td>
</tr>
<tr>
    <td><a href="#remove_backend_config"><CopyableCode code="remove_backend_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the AWS resources required to access the Amplify Admin UI.</td>
</tr>
<tr>
    <td><a href="#update_backend_config"><CopyableCode code="update_backend_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the AWS resources required to access the Amplify Admin UI.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The app ID.</td>
</tr>
<tr id="parameter-backend_environment_name">
    <td><CopyableCode code="backend_environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_backend"
    values={[
        { label: 'get_backend', value: 'get_backend' }
    ]}
>
<TabItem value="get_backend">

Provides project-level details for your Amplify UI project.

```sql
SELECT
AmplifyFeatureFlags,
AmplifyMetaConfig,
AppId,
AppName,
BackendEnvironmentList,
BackendEnvironmentName,
Error
FROM aws.amplifybackend.backends
WHERE app_id = '{{ app_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_backend"
    values={[
        { label: 'create_backend', value: 'create_backend' },
        { label: 'create_backend_config', value: 'create_backend_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_backend">

This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.

```sql
INSERT INTO aws.amplifybackend.backends (
AppId,
AppName,
BackendEnvironmentName,
ResourceConfig,
ResourceName,
region
)
SELECT 
'{{ AppId }}' /* required */,
'{{ AppName }}' /* required */,
'{{ BackendEnvironmentName }}' /* required */,
'{{ ResourceConfig }}',
'{{ ResourceName }}',
'{{ region }}'
RETURNING
AppId,
BackendEnvironmentName,
Error,
JobId,
Operation,
Status
;
```
</TabItem>
<TabItem value="create_backend_config">

Creates a config object for a backend.

```sql
INSERT INTO aws.amplifybackend.backends (
BackendManagerAppId,
app_id,
region
)
SELECT 
'{{ BackendManagerAppId }}',
'{{ app_id }}',
'{{ region }}'
RETURNING
AppId,
BackendEnvironmentName,
JobId,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: backends
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the backends resource.
    - name: app_id
      value: "{{ app_id }}"
      description: Required parameter for the backends resource.
    - name: AppId
      value: "{{ AppId }}"
    - name: AppName
      value: "{{ AppName }}"
    - name: BackendEnvironmentName
      value: "{{ BackendEnvironmentName }}"
    - name: ResourceConfig
      value: "{{ ResourceConfig }}"
      description: |
        Defines the resource configuration for the data model in your Amplify project.
    - name: ResourceName
      value: "{{ ResourceName }}"
    - name: BackendManagerAppId
      value: "{{ BackendManagerAppId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="remove_all_backends"
    values={[
        { label: 'remove_all_backends', value: 'remove_all_backends' }
    ]}
>
<TabItem value="remove_all_backends">

Removes all backend environments from your Amplify project.

```sql
UPDATE aws.amplifybackend.backends
SET 
CleanAmplifyApp = {{ CleanAmplifyApp }}
WHERE 
app_id = '{{ app_id }}' --required
AND region = '{{ region }}' --required
RETURNING
AppId,
Error,
JobId,
Operation,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_backend"
    values={[
        { label: 'delete_backend', value: 'delete_backend' }
    ]}
>
<TabItem value="delete_backend">

Removes an existing environment from your Amplify project.

```sql
DELETE FROM aws.amplifybackend.backends
WHERE app_id = '{{ app_id }}' --required
AND backend_environment_name = '{{ backend_environment_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import_backend_auth"
    values={[
        { label: 'import_backend_auth', value: 'import_backend_auth' },
        { label: 'import_backend_storage', value: 'import_backend_storage' },
        { label: 'remove_backend_config', value: 'remove_backend_config' },
        { label: 'update_backend_config', value: 'update_backend_config' }
    ]}
>
<TabItem value="import_backend_auth">

Imports an existing backend authentication resource.

```sql
EXEC aws.amplifybackend.backends.import_backend_auth 
@app_id='{{ app_id }}' --required, 
@backend_environment_name='{{ backend_environment_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"IdentityPoolId": "{{ IdentityPoolId }}", 
"NativeClientId": "{{ NativeClientId }}", 
"UserPoolId": "{{ UserPoolId }}", 
"WebClientId": "{{ WebClientId }}"
}'
;
```
</TabItem>
<TabItem value="import_backend_storage">

Imports an existing backend storage resource.

```sql
EXEC aws.amplifybackend.backends.import_backend_storage 
@app_id='{{ app_id }}' --required, 
@backend_environment_name='{{ backend_environment_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"BucketName": "{{ BucketName }}", 
"ServiceName": "{{ ServiceName }}"
}'
;
```
</TabItem>
<TabItem value="remove_backend_config">

Removes the AWS resources required to access the Amplify Admin UI.

```sql
EXEC aws.amplifybackend.backends.remove_backend_config 
@app_id='{{ app_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="update_backend_config">

Updates the AWS resources required to access the Amplify Admin UI.

```sql
EXEC aws.amplifybackend.backends.update_backend_config 
@app_id='{{ app_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"LoginAuthConfig": "{{ LoginAuthConfig }}"
}'
;
```
</TabItem>
</Tabs>
