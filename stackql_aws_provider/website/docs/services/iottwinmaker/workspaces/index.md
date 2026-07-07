--- 
title: workspaces
hide_title: false
hide_table_of_contents: false
keywords:
  - workspaces
  - iottwinmaker
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

Creates, updates, deletes, gets or lists a <code>workspaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iottwinmaker.workspaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workspace"
    values={[
        { label: 'get_workspace', value: 'get_workspace' },
        { label: 'list_workspaces', value: 'list_workspaces' }
    ]}
>
<TabItem value="get_workspace">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the workspace. (pattern: &lt;code&gt;arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:&#91;\/a-zA-Z0-9_\-\.:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the workspace was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the workspace. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="linkedServices" /></td>
    <td><code>array</code></td>
    <td>A list of services that are linked to the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The ARN of the execution role associated with the workspace. (pattern: &lt;code&gt;arn:((aws)|(aws-cn)|(aws-us-gov)):iam::&#91;0-9&#93;&#123;12&#125;:role/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s3Location" /></td>
    <td><code>string</code></td>
    <td>The ARN of the S3 bucket where resources associated with the workspace are stored. (pattern: &lt;code&gt;.*(^arn:((aws)|(aws-cn)|(aws-us-gov)):s3:::)(&#91;a-zA-Z0-9_-&#93;+$).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updateDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the workspace was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="workspaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9&#93;&#91;a-zA-Z_\-0-9&#93;*&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workspaces">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The string that specifies the next page of results. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workspaceSummaries" /></td>
    <td><code>array</code></td>
    <td>A list of objects that contain information about the workspaces.</td>
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
    <td><a href="#get_workspace"><CopyableCode code="get_workspace" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a workspace.</td>
</tr>
<tr>
    <td><a href="#list_workspaces"><CopyableCode code="list_workspaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about workspaces in the current account.</td>
</tr>
<tr>
    <td><a href="#create_workspace"><CopyableCode code="create_workspace" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a workplace.</td>
</tr>
<tr>
    <td><a href="#update_workspace"><CopyableCode code="update_workspace" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a workspace.</td>
</tr>
<tr>
    <td><a href="#delete_workspace"><CopyableCode code="delete_workspace" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a workspace.</td>
</tr>
<tr>
    <td><a href="#execute_query"><CopyableCode code="execute_query" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-workspaceId"><code>workspaceId</code></a>, <a href="#parameter-queryStatement"><code>queryStatement</code></a></td>
    <td></td>
    <td>Run queries to access information from your knowledge graph of entities within individual workspaces. The ExecuteQuery action only works with Amazon Web Services Java SDK2. ExecuteQuery will not work with any Amazon Web Services Java SDK version &lt; 2.x.</td>
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
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace to delete.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_workspace"
    values={[
        { label: 'get_workspace', value: 'get_workspace' },
        { label: 'list_workspaces', value: 'list_workspaces' }
    ]}
>
<TabItem value="get_workspace">

Retrieves information about a workspace.

```sql
SELECT
arn,
creationDateTime,
description,
linkedServices,
role,
s3Location,
updateDateTime,
workspaceId
FROM aws.iottwinmaker.workspaces
WHERE workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workspaces">

Retrieves information about workspaces in the current account.

```sql
SELECT
nextToken,
workspaceSummaries
FROM aws.iottwinmaker.workspaces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workspace"
    values={[
        { label: 'create_workspace', value: 'create_workspace' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workspace">

Creates a workplace.

```sql
INSERT INTO aws.iottwinmaker.workspaces (
description,
s3Location,
role,
tags,
workspace_id,
region
)
SELECT 
'{{ description }}',
'{{ s3Location }}',
'{{ role }}',
'{{ tags }}',
'{{ workspace_id }}',
'{{ region }}'
RETURNING
arn,
creationDateTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workspaces
  props:
    - name: workspace_id
      value: "{{ workspace_id }}"
      description: Required parameter for the workspaces resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workspaces resource.
    - name: description
      value: "{{ description }}"
    - name: s3Location
      value: "{{ s3Location }}"
    - name: role
      value: "{{ role }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workspace"
    values={[
        { label: 'update_workspace', value: 'update_workspace' }
    ]}
>
<TabItem value="update_workspace">

Updates a workspace.

```sql
UPDATE aws.iottwinmaker.workspaces
SET 
description = '{{ description }}',
role = '{{ role }}',
s3Location = '{{ s3Location }}'
WHERE 
workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
RETURNING
updateDateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workspace"
    values={[
        { label: 'delete_workspace', value: 'delete_workspace' }
    ]}
>
<TabItem value="delete_workspace">

Deletes a workspace.

```sql
DELETE FROM aws.iottwinmaker.workspaces
WHERE workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="execute_query"
    values={[
        { label: 'execute_query', value: 'execute_query' }
    ]}
>
<TabItem value="execute_query">

Run queries to access information from your knowledge graph of entities within individual workspaces. The ExecuteQuery action only works with Amazon Web Services Java SDK2. ExecuteQuery will not work with any Amazon Web Services Java SDK version &lt; 2.x.

```sql
EXEC aws.iottwinmaker.workspaces.execute_query 
@region='{{ region }}' --required 
@@json=
'{
"workspaceId": "{{ workspaceId }}", 
"queryStatement": "{{ queryStatement }}", 
"maxResults": {{ maxResults }}, 
"nextToken": "{{ nextToken }}"
}'
;
```
</TabItem>
</Tabs>
