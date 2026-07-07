--- 
title: workspace_service_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - workspace_service_accounts
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

Creates, updates, deletes, gets or lists a <code>workspace_service_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspace_service_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.grafana.workspace_service_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_workspace_service_accounts"
    values={[
        { label: 'list_workspace_service_accounts', value: 'list_workspace_service_accounts' }
    ]}
>
<TabItem value="list_workspace_service_accounts">

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
    <td>The unique ID of the service account.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the service account.</td>
</tr>
<tr>
    <td><CopyableCode code="grafanaRole" /></td>
    <td><code>string</code></td>
    <td>The role of the service account, which sets the permission level used when calling Grafana APIs. (ADMIN, EDITOR, VIEWER)</td>
</tr>
<tr>
    <td><CopyableCode code="isDisabled" /></td>
    <td><code>string</code></td>
    <td>Returns true if the service account is disabled. Service accounts can be disabled and enabled in the Amazon Managed Grafana console.</td>
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
    <td><a href="#list_workspace_service_accounts"><CopyableCode code="list_workspace_service_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of service accounts for a workspace. Service accounts are only available for workspaces that are compatible with Grafana version 9 and above.</td>
</tr>
<tr>
    <td><a href="#create_workspace_service_account"><CopyableCode code="create_workspace_service_account" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-grafanaRole"><code>grafanaRole</code></a></td>
    <td></td>
    <td>Creates a service account for the workspace. A service account can be used to call Grafana HTTP APIs, and run automated workloads. After creating the service account with the correct GrafanaRole for your use case, use CreateWorkspaceServiceAccountToken to create a token that can be used to authenticate and authorize Grafana HTTP API calls. You can only create service accounts for workspaces that are compatible with Grafana version 9 and above. For more information about service accounts, see Service accounts in the Amazon Managed Grafana User Guide. For more information about the Grafana HTTP APIs, see Using Grafana HTTP APIs in the Amazon Managed Grafana User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_workspace_service_account"><CopyableCode code="delete_workspace_service_account" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_account_id"><code>service_account_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a workspace service account from the workspace. This will delete any tokens created for the service account, as well. If the tokens are currently in use, the will fail to authenticate / authorize after they are deleted. Service accounts are only available for workspaces that are compatible with Grafana version 9 and above.</td>
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
    <td>The ID of the service account to delete.</td>
</tr>
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace where the service account resides.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of service accounts to include in the results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of service accounts to return. (You receive this token from a previous ListWorkspaceServiceAccounts operation.)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_workspace_service_accounts"
    values={[
        { label: 'list_workspace_service_accounts', value: 'list_workspace_service_accounts' }
    ]}
>
<TabItem value="list_workspace_service_accounts">

Returns a list of service accounts for a workspace. Service accounts are only available for workspaces that are compatible with Grafana version 9 and above.

```sql
SELECT
id,
name,
grafanaRole,
isDisabled
FROM aws.grafana.workspace_service_accounts
WHERE workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workspace_service_account"
    values={[
        { label: 'create_workspace_service_account', value: 'create_workspace_service_account' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workspace_service_account">

Creates a service account for the workspace. A service account can be used to call Grafana HTTP APIs, and run automated workloads. After creating the service account with the correct GrafanaRole for your use case, use CreateWorkspaceServiceAccountToken to create a token that can be used to authenticate and authorize Grafana HTTP API calls. You can only create service accounts for workspaces that are compatible with Grafana version 9 and above. For more information about service accounts, see Service accounts in the Amazon Managed Grafana User Guide. For more information about the Grafana HTTP APIs, see Using Grafana HTTP APIs in the Amazon Managed Grafana User Guide.

```sql
INSERT INTO aws.grafana.workspace_service_accounts (
name,
grafanaRole,
workspace_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ grafanaRole }}' /* required */,
'{{ workspace_id }}',
'{{ region }}'
RETURNING
id,
name,
grafanaRole,
workspaceId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workspace_service_accounts
  props:
    - name: workspace_id
      value: "{{ workspace_id }}"
      description: Required parameter for the workspace_service_accounts resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workspace_service_accounts resource.
    - name: name
      value: "{{ name }}"
    - name: grafanaRole
      value: "{{ grafanaRole }}"
      valid_values: ['ADMIN', 'EDITOR', 'VIEWER']
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workspace_service_account"
    values={[
        { label: 'delete_workspace_service_account', value: 'delete_workspace_service_account' }
    ]}
>
<TabItem value="delete_workspace_service_account">

Deletes a workspace service account from the workspace. This will delete any tokens created for the service account, as well. If the tokens are currently in use, the will fail to authenticate / authorize after they are deleted. Service accounts are only available for workspaces that are compatible with Grafana version 9 and above.

```sql
DELETE FROM aws.grafana.workspace_service_accounts
WHERE service_account_id = '{{ service_account_id }}' --required
AND workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
