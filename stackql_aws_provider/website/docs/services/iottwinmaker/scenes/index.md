--- 
title: scenes
hide_title: false
hide_table_of_contents: false
keywords:
  - scenes
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

Creates, updates, deletes, gets or lists a <code>scenes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scenes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iottwinmaker.scenes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_scene"
    values={[
        { label: 'get_scene', value: 'get_scene' },
        { label: 'list_scenes', value: 'list_scenes' }
    ]}
>
<TabItem value="get_scene">

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
    <td>The ARN of the scene. (pattern: &lt;code&gt;arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:&#91;\/a-zA-Z0-9_\-\.:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>A list of capabilities that the scene uses to render.</td>
</tr>
<tr>
    <td><CopyableCode code="contentLocation" /></td>
    <td><code>string</code></td>
    <td>The relative path that specifies the location of the content definition file. (pattern: &lt;code&gt;&#91;sS&#93;3:​//&#91;A-Za-z0-9._/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the scene was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the scene. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>The SceneResponse error.</td>
</tr>
<tr>
    <td><CopyableCode code="generatedSceneMetadata" /></td>
    <td><code>object</code></td>
    <td>The generated scene metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="sceneId" /></td>
    <td><code>string</code></td>
    <td>The ID of the scene. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9&#93;&#91;a-zA-Z_\-0-9&#93;*&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sceneMetadata" /></td>
    <td><code>object</code></td>
    <td>The response metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="updateDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the scene was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="workspaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace that contains the scene. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9&#93;&#91;a-zA-Z_\-0-9&#93;*&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_scenes">

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
    <td><CopyableCode code="sceneSummaries" /></td>
    <td><code>array</code></td>
    <td>A list of objects that contain information about the scenes.</td>
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
    <td><a href="#get_scene"><CopyableCode code="get_scene" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-scene_id"><code>scene_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a scene.</td>
</tr>
<tr>
    <td><a href="#list_scenes"><CopyableCode code="list_scenes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all scenes in a workspace.</td>
</tr>
<tr>
    <td><a href="#create_scene"><CopyableCode code="create_scene" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sceneId"><code>sceneId</code></a>, <a href="#parameter-contentLocation"><code>contentLocation</code></a></td>
    <td></td>
    <td>Creates a scene.</td>
</tr>
<tr>
    <td><a href="#update_scene"><CopyableCode code="update_scene" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-scene_id"><code>scene_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a scene.</td>
</tr>
<tr>
    <td><a href="#delete_scene"><CopyableCode code="delete_scene" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-scene_id"><code>scene_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a scene.</td>
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
<tr id="parameter-scene_id">
    <td><CopyableCode code="scene_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the scene to delete.</td>
</tr>
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_scene"
    values={[
        { label: 'get_scene', value: 'get_scene' },
        { label: 'list_scenes', value: 'list_scenes' }
    ]}
>
<TabItem value="get_scene">

Retrieves information about a scene.

```sql
SELECT
arn,
capabilities,
contentLocation,
creationDateTime,
description,
error,
generatedSceneMetadata,
sceneId,
sceneMetadata,
updateDateTime,
workspaceId
FROM aws.iottwinmaker.scenes
WHERE workspace_id = '{{ workspace_id }}' -- required
AND scene_id = '{{ scene_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_scenes">

Lists all scenes in a workspace.

```sql
SELECT
nextToken,
sceneSummaries
FROM aws.iottwinmaker.scenes
WHERE workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_scene"
    values={[
        { label: 'create_scene', value: 'create_scene' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_scene">

Creates a scene.

```sql
INSERT INTO aws.iottwinmaker.scenes (
sceneId,
contentLocation,
description,
capabilities,
tags,
sceneMetadata,
workspace_id,
region
)
SELECT 
'{{ sceneId }}' /* required */,
'{{ contentLocation }}' /* required */,
'{{ description }}',
'{{ capabilities }}',
'{{ tags }}',
'{{ sceneMetadata }}',
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
- name: scenes
  props:
    - name: workspace_id
      value: "{{ workspace_id }}"
      description: Required parameter for the scenes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the scenes resource.
    - name: sceneId
      value: "{{ sceneId }}"
    - name: contentLocation
      value: "{{ contentLocation }}"
    - name: description
      value: "{{ description }}"
    - name: capabilities
      value:
        - "{{ capabilities }}"
    - name: tags
      value: "{{ tags }}"
    - name: sceneMetadata
      value: "{{ sceneMetadata }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_scene"
    values={[
        { label: 'update_scene', value: 'update_scene' }
    ]}
>
<TabItem value="update_scene">

Updates a scene.

```sql
UPDATE aws.iottwinmaker.scenes
SET 
contentLocation = '{{ contentLocation }}',
description = '{{ description }}',
capabilities = '{{ capabilities }}',
sceneMetadata = '{{ sceneMetadata }}'
WHERE 
workspace_id = '{{ workspace_id }}' --required
AND scene_id = '{{ scene_id }}' --required
AND region = '{{ region }}' --required
RETURNING
updateDateTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scene"
    values={[
        { label: 'delete_scene', value: 'delete_scene' }
    ]}
>
<TabItem value="delete_scene">

Deletes a scene.

```sql
DELETE FROM aws.iottwinmaker.scenes
WHERE workspace_id = '{{ workspace_id }}' --required
AND scene_id = '{{ scene_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
