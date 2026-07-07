--- 
title: workspace_service_account_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - workspace_service_account_tokens
  - grafana
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

Creates, updates, deletes, gets or lists a <code>workspace_service_account_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspace_service_account_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.grafana.workspace_service_account_tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_workspace_service_account_tokens"
    values={[
        { label: 'list_workspace_service_account_tokens', value: 'list_workspace_service_account_tokens' }
    ]}
>
<TabItem value="list_workspace_service_account_tokens">

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
    <td>The unique ID of the service account token.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the service account token.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the service account token was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expiresAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the service account token will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUsedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the token was used to authorize a Grafana HTTP API.</td>
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
    <td><a href="#list_workspace_service_account_tokens"><CopyableCode code="list_workspace_service_account_tokens" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_account_id"><code>service_account_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of tokens for a workspace service account. This does not return the key for each token. You cannot access keys after they are created. To create a new key, delete the token and recreate it. Service accounts are only available for workspaces that are compatible with Grafana version 9 and above.</td>
</tr>
<tr>
    <td><a href="#create_workspace_service_account_token"><CopyableCode code="create_workspace_service_account_token" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_account_id"><code>service_account_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-secondsToLive"><code>secondsToLive</code></a></td>
    <td></td>
    <td>Creates a token that can be used to authenticate and authorize Grafana HTTP API operations for the given workspace service account. The service account acts as a user for the API operations, and defines the permissions that are used by the API. When you create the service account token, you will receive a key that is used when calling Grafana APIs. Do not lose this key, as it will not be retrievable again. If you do lose the key, you can delete the token and recreate it to receive a new key. This will disable the initial key. Service accounts are only available for workspaces that are compatible with Grafana version 9 and above.</td>
</tr>
<tr>
    <td><a href="#delete_workspace_service_account_token"><CopyableCode code="delete_workspace_service_account_token" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-token_id"><code>token_id</code></a>, <a href="#parameter-service_account_id"><code>service_account_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a token for the workspace service account. This will disable the key associated with the token. If any automation is currently using the key, it will no longer be authenticated or authorized to perform actions with the Grafana HTTP APIs. Service accounts are only available for workspaces that are compatible with Grafana version 9 and above.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-service_account_id">
    <td><CopyableCode code="service_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the service account from which to delete the token.</td>
</tr>
<tr id="parameter-token_id">
    <td><CopyableCode code="token_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the token to delete.</td>
</tr>
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace from which to delete the token.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of tokens to include in the results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of service accounts to return. (You receive this token from a previous ListWorkspaceServiceAccountTokens operation.)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_workspace_service_account_tokens"
    values={[
        { label: 'list_workspace_service_account_tokens', value: 'list_workspace_service_account_tokens' }
    ]}
>
<TabItem value="list_workspace_service_account_tokens">

Returns a list of tokens for a workspace service account. This does not return the key for each token. You cannot access keys after they are created. To create a new key, delete the token and recreate it. Service accounts are only available for workspaces that are compatible with Grafana version 9 and above.

```sql
SELECT
id,
name,
createdAt,
expiresAt,
lastUsedAt
FROM aws.grafana.workspace_service_account_tokens
WHERE service_account_id = '{{ service_account_id }}' -- required
AND workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workspace_service_account_token"
    values={[
        { label: 'create_workspace_service_account_token', value: 'create_workspace_service_account_token' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workspace_service_account_token">

Creates a token that can be used to authenticate and authorize Grafana HTTP API operations for the given workspace service account. The service account acts as a user for the API operations, and defines the permissions that are used by the API. When you create the service account token, you will receive a key that is used when calling Grafana APIs. Do not lose this key, as it will not be retrievable again. If you do lose the key, you can delete the token and recreate it to receive a new key. This will disable the initial key. Service accounts are only available for workspaces that are compatible with Grafana version 9 and above.

```sql
INSERT INTO aws.grafana.workspace_service_account_tokens (
name,
secondsToLive,
service_account_id,
workspace_id,
region
)
SELECT 
'{{ name }}' /* required */,
{{ secondsToLive }} /* required */,
'{{ service_account_id }}',
'{{ workspace_id }}',
'{{ region }}'
RETURNING
serviceAccountId,
serviceAccountToken,
workspaceId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workspace_service_account_tokens
  props:
    - name: service_account_id
      value: "{{ service_account_id }}"
      description: Required parameter for the workspace_service_account_tokens resource.
    - name: workspace_id
      value: "{{ workspace_id }}"
      description: Required parameter for the workspace_service_account_tokens resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workspace_service_account_tokens resource.
    - name: name
      value: "{{ name }}"
    - name: secondsToLive
      value: {{ secondsToLive }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workspace_service_account_token"
    values={[
        { label: 'delete_workspace_service_account_token', value: 'delete_workspace_service_account_token' }
    ]}
>
<TabItem value="delete_workspace_service_account_token">

Deletes a token for the workspace service account. This will disable the key associated with the token. If any automation is currently using the key, it will no longer be authenticated or authorized to perform actions with the Grafana HTTP APIs. Service accounts are only available for workspaces that are compatible with Grafana version 9 and above.

```sql
DELETE FROM aws.grafana.workspace_service_account_tokens
WHERE token_id = '{{ token_id }}' --required
AND service_account_id = '{{ service_account_id }}' --required
AND workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
