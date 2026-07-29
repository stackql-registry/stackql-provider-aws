--- 
title: workspaces
hide_title: false
hide_table_of_contents: false
keywords:
  - workspaces
  - connect
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.workspaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workspace"
    values={[
        { label: 'describe_workspace', value: 'describe_workspace' },
        { label: 'list_workspaces', value: 'list_workspaces' },
        { label: 'search_workspaces', value: 'search_workspaces' }
    ]}
>
<TabItem value="describe_workspace">

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
    <td>The Amazon Resource Name (ARN) of the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the workspace. (pattern: &lt;code&gt;^&#91;\\P&#123;C&#125;\r\n\t&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the workspace was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workspace was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace. (pattern: &lt;code&gt;.*\\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="theme" /></td>
    <td><code>object</code></td>
    <td>Contains theme configuration for a workspace, supporting both light and dark modes.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title displayed for the workspace. (pattern: &lt;code&gt;^&#91;\\P&#123;C&#125;&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Controls who can access the workspace. Valid values are: ALL (all users), ASSIGNED (only assigned users and routing profiles), and NONE (not visible). (ALL, ASSIGNED, NONE)</td>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the workspace was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workspace was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace. (pattern: &lt;code&gt;.*\\S.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_workspaces">

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
    <td>The Amazon Resource Name (ARN) of the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the workspace was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the workspace. (pattern: &lt;code&gt;^&#91;\\P&#123;C&#125;\r\n\t&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace. (pattern: &lt;code&gt;.*\\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title displayed for the workspace. (pattern: &lt;code&gt;^&#91;\\P&#123;C&#125;&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>The visibility setting of the workspace. (ALL, ASSIGNED, NONE)</td>
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
    <td><a href="#describe_workspace"><CopyableCode code="describe_workspace" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about a workspace, including its configuration and metadata.</td>
</tr>
<tr>
    <td><a href="#list_workspaces"><CopyableCode code="list_workspaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the workspaces in an Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#search_workspaces"><CopyableCode code="search_workspaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches workspaces based on name, description, visibility, or tags.</td>
</tr>
<tr>
    <td><a href="#create_workspace"><CopyableCode code="create_workspace" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a workspace that defines the user experience by mapping views to pages. Workspaces can be assigned to users or routing profiles.</td>
</tr>
<tr>
    <td><a href="#associate_workspace"><CopyableCode code="associate_workspace" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArns"><code>ResourceArns</code></a></td>
    <td></td>
    <td>Associates a workspace with one or more users or routing profiles, allowing them to access the workspace's configured views and pages.</td>
</tr>
<tr>
    <td><a href="#update_workspace_metadata"><CopyableCode code="update_workspace_metadata" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the metadata of a workspace, such as its name and description.</td>
</tr>
<tr>
    <td><a href="#delete_workspace"><CopyableCode code="delete_workspace" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a workspace and removes all associated view and resource assignments.</td>
</tr>
<tr>
    <td><a href="#import_workspace_media"><CopyableCode code="import_workspace_media" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MediaType"><code>MediaType</code></a>, <a href="#parameter-MediaSource"><code>MediaSource</code></a></td>
    <td></td>
    <td>Imports a media asset (such as a logo) for use in a workspace.</td>
</tr>
<tr>
    <td><a href="#disassociate_workspace"><CopyableCode code="disassociate_workspace" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArns"><code>ResourceArns</code></a></td>
    <td></td>
    <td>Removes the association between a workspace and one or more users or routing profiles.</td>
</tr>
<tr>
    <td><a href="#update_workspace_theme"><CopyableCode code="update_workspace_theme" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the theme configuration for a workspace, including colors and styling.</td>
</tr>
<tr>
    <td><a href="#update_workspace_visibility"><CopyableCode code="update_workspace_visibility" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the visibility setting of a workspace, controlling whether it is available to all users, assigned users only, or none.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the workspace.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_workspace"
    values={[
        { label: 'describe_workspace', value: 'describe_workspace' },
        { label: 'list_workspaces', value: 'list_workspaces' },
        { label: 'search_workspaces', value: 'search_workspaces' }
    ]}
>
<TabItem value="describe_workspace">

Retrieves details about a workspace, including its configuration and metadata.

```sql
SELECT
arn,
description,
id,
last_modified_region,
last_modified_time,
name,
tags,
theme,
title,
visibility
FROM aws.connect.workspaces
WHERE instance_id = '{{ instance_id }}' -- required
AND workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workspaces">

Lists the workspaces in an Amazon Connect instance.

```sql
SELECT
arn,
id,
last_modified_region,
last_modified_time,
name
FROM aws.connect.workspaces
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="search_workspaces">

Searches workspaces based on name, description, visibility, or tags.

```sql
SELECT
arn,
created_at,
description,
id,
name,
tags,
title,
visibility
FROM aws.connect.workspaces
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

Creates a workspace that defines the user experience by mapping views to pages. Workspaces can be assigned to users or routing profiles.

```sql
INSERT INTO aws.connect.workspaces (
Name,
Description,
Theme,
Title,
Tags,
instance_id,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ Theme }}',
'{{ Title }}',
'{{ Tags }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
workspace_arn,
workspace_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workspaces
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the workspaces resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workspaces resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: Theme
      description: |
        Contains theme configuration for a workspace, supporting both light and dark modes.
      value:
        Light:
          Palette:
            Header:
              Background: "{{ Background }}"
              Text: "{{ Text }}"
              TextHover: "{{ TextHover }}"
              InvertActionsColors: {{ InvertActionsColors }}
            Navigation:
              Background: "{{ Background }}"
              TextBackgroundHover: "{{ TextBackgroundHover }}"
              TextBackgroundActive: "{{ TextBackgroundActive }}"
              Text: "{{ Text }}"
              TextHover: "{{ TextHover }}"
              TextActive: "{{ TextActive }}"
              InvertActionsColors: {{ InvertActionsColors }}
            Canvas:
              ContainerBackground: "{{ ContainerBackground }}"
              PageBackground: "{{ PageBackground }}"
              ActiveBackground: "{{ ActiveBackground }}"
            Primary:
              Default: "{{ Default }}"
              Active: "{{ Active }}"
              ContrastText: "{{ ContrastText }}"
          Images:
            Logo:
              Default: "{{ Default }}"
              Favicon: "{{ Favicon }}"
          Typography:
            FontFamily:
              Default: "{{ Default }}"
        Dark:
          Palette:
            Header:
              Background: "{{ Background }}"
              Text: "{{ Text }}"
              TextHover: "{{ TextHover }}"
              InvertActionsColors: {{ InvertActionsColors }}
            Navigation:
              Background: "{{ Background }}"
              TextBackgroundHover: "{{ TextBackgroundHover }}"
              TextBackgroundActive: "{{ TextBackgroundActive }}"
              Text: "{{ Text }}"
              TextHover: "{{ TextHover }}"
              TextActive: "{{ TextActive }}"
              InvertActionsColors: {{ InvertActionsColors }}
            Canvas:
              ContainerBackground: "{{ ContainerBackground }}"
              PageBackground: "{{ PageBackground }}"
              ActiveBackground: "{{ ActiveBackground }}"
            Primary:
              Default: "{{ Default }}"
              Active: "{{ Active }}"
              ContrastText: "{{ ContrastText }}"
          Images:
            Logo:
              Default: "{{ Default }}"
              Favicon: "{{ Favicon }}"
          Typography:
            FontFamily:
              Default: "{{ Default }}"
    - name: Title
      value: "{{ Title }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_workspace"
    values={[
        { label: 'associate_workspace', value: 'associate_workspace' },
        { label: 'update_workspace_metadata', value: 'update_workspace_metadata' }
    ]}
>
<TabItem value="associate_workspace">

Associates a workspace with one or more users or routing profiles, allowing them to access the workspace's configured views and pages.

```sql
UPDATE aws.connect.workspaces
SET 
ResourceArns = '{{ ResourceArns }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
AND ResourceArns = '{{ ResourceArns }}' --required
RETURNING
failed_list,
successful_list;
```
</TabItem>
<TabItem value="update_workspace_metadata">

Updates the metadata of a workspace, such as its name and description.

```sql
UPDATE aws.connect.workspaces
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
Title = '{{ Title }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required;
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

Deletes a workspace and removes all associated view and resource assignments.

```sql
DELETE FROM aws.connect.workspaces
WHERE instance_id = '{{ instance_id }}' --required
AND workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import_workspace_media"
    values={[
        { label: 'import_workspace_media', value: 'import_workspace_media' },
        { label: 'disassociate_workspace', value: 'disassociate_workspace' },
        { label: 'update_workspace_theme', value: 'update_workspace_theme' },
        { label: 'update_workspace_visibility', value: 'update_workspace_visibility' }
    ]}
>
<TabItem value="import_workspace_media">

Imports a media asset (such as a logo) for use in a workspace.

```sql
EXEC aws.connect.workspaces.import_workspace_media 
@instance_id='{{ instance_id }}' --required, 
@workspace_id='{{ workspace_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"MediaType": "{{ MediaType }}", 
"MediaSource": "{{ MediaSource }}"
}'
;
```
</TabItem>
<TabItem value="disassociate_workspace">

Removes the association between a workspace and one or more users or routing profiles.

```sql
EXEC aws.connect.workspaces.disassociate_workspace 
@instance_id='{{ instance_id }}' --required, 
@workspace_id='{{ workspace_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ResourceArns": "{{ ResourceArns }}"
}'
;
```
</TabItem>
<TabItem value="update_workspace_theme">

Updates the theme configuration for a workspace, including colors and styling.

```sql
EXEC aws.connect.workspaces.update_workspace_theme 
@instance_id='{{ instance_id }}' --required, 
@workspace_id='{{ workspace_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Theme": "{{ Theme }}"
}'
;
```
</TabItem>
<TabItem value="update_workspace_visibility">

Updates the visibility setting of a workspace, controlling whether it is available to all users, assigned users only, or none.

```sql
EXEC aws.connect.workspaces.update_workspace_visibility 
@instance_id='{{ instance_id }}' --required, 
@workspace_id='{{ workspace_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Visibility": "{{ Visibility }}"
}'
;
```
</TabItem>
</Tabs>
