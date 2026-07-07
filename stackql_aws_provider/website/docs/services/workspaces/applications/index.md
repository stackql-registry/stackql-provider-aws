--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - workspaces
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_applications"
    values={[
        { label: 'describe_applications', value: 'describe_applications' }
    ]}
>
<TabItem value="describe_applications">

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
    <td><CopyableCode code="Applications" /></td>
    <td><code>array</code></td>
    <td>List of information about the specified applications.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If you received a NextToken from a previous call that was paginated, provide this token to receive the next set of results.</td>
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
    <td><a href="#describe_applications"><CopyableCode code="describe_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified applications by filtering based on their compute types, license availability, operating systems, and owners.</td>
</tr>
<tr>
    <td><a href="#associate_workspace_application"><CopyableCode code="associate_workspace_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkspaceId"><code>WorkspaceId</code></a>, <a href="#parameter-ApplicationId"><code>ApplicationId</code></a></td>
    <td></td>
    <td>Associates the specified application to the specified WorkSpace.</td>
</tr>
<tr>
    <td><a href="#deploy_workspace_applications"><CopyableCode code="deploy_workspace_applications" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkspaceId"><code>WorkspaceId</code></a></td>
    <td></td>
    <td>Deploys associated applications to the specified WorkSpace</td>
</tr>
<tr>
    <td><a href="#disassociate_workspace_application"><CopyableCode code="disassociate_workspace_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkspaceId"><code>WorkspaceId</code></a>, <a href="#parameter-ApplicationId"><code>ApplicationId</code></a></td>
    <td></td>
    <td>Disassociates the specified application from a WorkSpace.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_applications"
    values={[
        { label: 'describe_applications', value: 'describe_applications' }
    ]}
>
<TabItem value="describe_applications">

Describes the specified applications by filtering based on their compute types, license availability, operating systems, and owners.

```sql
SELECT
Applications,
NextToken
FROM aws.workspaces.applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_workspace_application"
    values={[
        { label: 'associate_workspace_application', value: 'associate_workspace_application' }
    ]}
>
<TabItem value="associate_workspace_application">

Associates the specified application to the specified WorkSpace.

```sql
UPDATE aws.workspaces.applications
SET 
WorkspaceId = '{{ WorkspaceId }}',
ApplicationId = '{{ ApplicationId }}'
WHERE 
region = '{{ region }}' --required
AND WorkspaceId = '{{ WorkspaceId }}' --required
AND ApplicationId = '{{ ApplicationId }}' --required
RETURNING
Association;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="deploy_workspace_applications"
    values={[
        { label: 'deploy_workspace_applications', value: 'deploy_workspace_applications' },
        { label: 'disassociate_workspace_application', value: 'disassociate_workspace_application' }
    ]}
>
<TabItem value="deploy_workspace_applications">

Deploys associated applications to the specified WorkSpace

```sql
EXEC aws.workspaces.applications.deploy_workspace_applications 
@region='{{ region }}' --required 
@@json=
'{
"WorkspaceId": "{{ WorkspaceId }}", 
"Force": {{ Force }}
}'
;
```
</TabItem>
<TabItem value="disassociate_workspace_application">

Disassociates the specified application from a WorkSpace.

```sql
EXEC aws.workspaces.applications.disassociate_workspace_application 
@region='{{ region }}' --required 
@@json=
'{
"WorkspaceId": "{{ WorkspaceId }}", 
"ApplicationId": "{{ ApplicationId }}"
}'
;
```
</TabItem>
</Tabs>
