--- 
title: backend_apis
hide_title: false
hide_table_of_contents: false
keywords:
  - backend_apis
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

Creates, updates, deletes, gets or lists a <code>backend_apis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backend_apis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplifybackend.backend_apis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_backend_api"
    values={[
        { label: 'get_backend_api', value: 'get_backend_api' }
    ]}
>
<TabItem value="get_backend_api">

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
    <td><CopyableCode code="AppId" /></td>
    <td><code>string</code></td>
    <td>The app ID.</td>
</tr>
<tr>
    <td><CopyableCode code="BackendEnvironmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment.</td>
</tr>
<tr>
    <td><CopyableCode code="Error" /></td>
    <td><code>string</code></td>
    <td>If the request fails, this error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceConfig" /></td>
    <td><code>object</code></td>
    <td>The resource config for the data model, configured as a part of the Amplify project.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceName" /></td>
    <td><code>string</code></td>
    <td>The name of this resource.</td>
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
    <td><a href="#get_backend_api"><CopyableCode code="get_backend_api" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-backend_environment_name"><code>backend_environment_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details for a backend API.</td>
</tr>
<tr>
    <td><a href="#create_backend_api"><CopyableCode code="create_backend_api" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BackendEnvironmentName"><code>BackendEnvironmentName</code></a>, <a href="#parameter-ResourceConfig"><code>ResourceConfig</code></a>, <a href="#parameter-ResourceName"><code>ResourceName</code></a></td>
    <td></td>
    <td>Creates a new backend API resource.</td>
</tr>
<tr>
    <td><a href="#update_backend_api"><CopyableCode code="update_backend_api" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-backend_environment_name"><code>backend_environment_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceName"><code>ResourceName</code></a></td>
    <td></td>
    <td>Updates an existing backend API resource.</td>
</tr>
<tr>
    <td><a href="#delete_backend_api"><CopyableCode code="delete_backend_api" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-backend_environment_name"><code>backend_environment_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing backend API resource.</td>
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
    defaultValue="get_backend_api"
    values={[
        { label: 'get_backend_api', value: 'get_backend_api' }
    ]}
>
<TabItem value="get_backend_api">

Gets the details for a backend API.

```sql
SELECT
AppId,
BackendEnvironmentName,
Error,
ResourceConfig,
ResourceName
FROM aws.amplifybackend.backend_apis
WHERE app_id = '{{ app_id }}' -- required
AND backend_environment_name = '{{ backend_environment_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_backend_api"
    values={[
        { label: 'create_backend_api', value: 'create_backend_api' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_backend_api">

Creates a new backend API resource.

```sql
INSERT INTO aws.amplifybackend.backend_apis (
BackendEnvironmentName,
ResourceConfig,
ResourceName,
app_id,
region
)
SELECT 
'{{ BackendEnvironmentName }}' /* required */,
'{{ ResourceConfig }}' /* required */,
'{{ ResourceName }}' /* required */,
'{{ app_id }}',
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
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: backend_apis
  props:
    - name: app_id
      value: "{{ app_id }}"
      description: Required parameter for the backend_apis resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the backend_apis resource.
    - name: BackendEnvironmentName
      value: "{{ BackendEnvironmentName }}"
    - name: ResourceConfig
      description: |
        The resource config for the data model, configured as a part of the Amplify project.
      value:
        AdditionalAuthTypes:
          - Mode: "{{ Mode }}"
            Settings:
              CognitoUserPoolId: "{{ CognitoUserPoolId }}"
              Description: "{{ Description }}"
              ExpirationTime: {{ ExpirationTime }}
              OpenIDAuthTTL: "{{ OpenIDAuthTTL }}"
              OpenIDClientId: "{{ OpenIDClientId }}"
              OpenIDIatTTL: "{{ OpenIDIatTTL }}"
              OpenIDIssueURL: "{{ OpenIDIssueURL }}"
              OpenIDProviderName: "{{ OpenIDProviderName }}"
        ApiName: "{{ ApiName }}"
        ConflictResolution:
          ResolutionStrategy: "{{ ResolutionStrategy }}"
        DefaultAuthType:
          Mode: "{{ Mode }}"
          Settings:
            CognitoUserPoolId: "{{ CognitoUserPoolId }}"
            Description: "{{ Description }}"
            ExpirationTime: {{ ExpirationTime }}
            OpenIDAuthTTL: "{{ OpenIDAuthTTL }}"
            OpenIDClientId: "{{ OpenIDClientId }}"
            OpenIDIatTTL: "{{ OpenIDIatTTL }}"
            OpenIDIssueURL: "{{ OpenIDIssueURL }}"
            OpenIDProviderName: "{{ OpenIDProviderName }}"
        Service: "{{ Service }}"
        TransformSchema: "{{ TransformSchema }}"
    - name: ResourceName
      value: "{{ ResourceName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_backend_api"
    values={[
        { label: 'update_backend_api', value: 'update_backend_api' }
    ]}
>
<TabItem value="update_backend_api">

Updates an existing backend API resource.

```sql
UPDATE aws.amplifybackend.backend_apis
SET 
ResourceConfig = '{{ ResourceConfig }}',
ResourceName = '{{ ResourceName }}'
WHERE 
app_id = '{{ app_id }}' --required
AND backend_environment_name = '{{ backend_environment_name }}' --required
AND region = '{{ region }}' --required
AND ResourceName = '{{ ResourceName }}' --required
RETURNING
AppId,
BackendEnvironmentName,
Error,
JobId,
Operation,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_backend_api"
    values={[
        { label: 'delete_backend_api', value: 'delete_backend_api' }
    ]}
>
<TabItem value="delete_backend_api">

Deletes an existing backend API resource.

```sql
DELETE FROM aws.amplifybackend.backend_apis
WHERE app_id = '{{ app_id }}' --required
AND backend_environment_name = '{{ backend_environment_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
