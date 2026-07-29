--- 
title: entities
hide_title: false
hide_table_of_contents: false
keywords:
  - entities
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

Creates, updates, deletes, gets or lists an <code>entities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="entities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iottwinmaker.entities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_entity"
    values={[
        { label: 'get_entity', value: 'get_entity' },
        { label: 'list_entities', value: 'list_entities' }
    ]}
>
<TabItem value="get_entity">

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
    <td><CopyableCode code="are_all_components_returned" /></td>
    <td><code>boolean</code></td>
    <td>This flag notes whether all components are returned in the API response. The maximum number of components returned is 30.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the entity. (pattern: &lt;code&gt;arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:&#91;\/a-zA-Z0-9_\-\.:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="components" /></td>
    <td><code>object</code></td>
    <td>An object that maps strings to the components in the entity. Each string in the mapping must be unique to this object.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the entity was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the entity. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="entity_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the entity. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;|^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z_\-0-9.:&#93;*&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="entity_name" /></td>
    <td><code>string</code></td>
    <td>The name of the entity. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="has_child_entities" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that specifies whether the entity has associated child entities.</td>
</tr>
<tr>
    <td><CopyableCode code="parent_entity_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the parent entity for this entity. (pattern: &lt;code&gt;\$ROOT|^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;|^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z_\-0-9.:&#93;*&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the entity.</td>
</tr>
<tr>
    <td><CopyableCode code="sync_source" /></td>
    <td><code>string</code></td>
    <td>The syncSource of the sync job, if this entity was created by a sync job. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="update_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the entity was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9&#93;&#91;a-zA-Z_\-0-9&#93;*&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_entities">

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
    <td><CopyableCode code="entity_summaries" /></td>
    <td><code>array</code></td>
    <td>A list of objects that contain information about the entities.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The string that specifies the next page of results. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#get_entity"><CopyableCode code="get_entity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-entity_id"><code>entity_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an entity.</td>
</tr>
<tr>
    <td><a href="#list_entities"><CopyableCode code="list_entities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all entities in a workspace.</td>
</tr>
<tr>
    <td><a href="#create_entity"><CopyableCode code="create_entity" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-entityName"><code>entityName</code></a></td>
    <td></td>
    <td>Creates an entity.</td>
</tr>
<tr>
    <td><a href="#update_entity"><CopyableCode code="update_entity" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-entity_id"><code>entity_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an entity.</td>
</tr>
<tr>
    <td><a href="#delete_entity"><CopyableCode code="delete_entity" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-entity_id"><code>entity_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-isRecursive"><code>isRecursive</code></a></td>
    <td>Deletes an entity.</td>
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
<tr id="parameter-entity_id">
    <td><CopyableCode code="entity_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the entity to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace that contains the entity to delete.</td>
</tr>
<tr id="parameter-isRecursive">
    <td><CopyableCode code="isRecursive" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that specifies whether the operation deletes child entities.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_entity"
    values={[
        { label: 'get_entity', value: 'get_entity' },
        { label: 'list_entities', value: 'list_entities' }
    ]}
>
<TabItem value="get_entity">

Retrieves information about an entity.

```sql
SELECT
are_all_components_returned,
arn,
components,
creation_date_time,
description,
entity_id,
entity_name,
has_child_entities,
parent_entity_id,
status,
sync_source,
update_date_time,
workspace_id
FROM aws.iottwinmaker.entities
WHERE workspace_id = '{{ workspace_id }}' -- required
AND entity_id = '{{ entity_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_entities">

Lists all entities in a workspace.

```sql
SELECT
entity_summaries,
next_token
FROM aws.iottwinmaker.entities
WHERE workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_entity"
    values={[
        { label: 'create_entity', value: 'create_entity' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_entity">

Creates an entity.

```sql
INSERT INTO aws.iottwinmaker.entities (
entityId,
entityName,
description,
components,
compositeComponents,
parentEntityId,
tags,
workspace_id,
region
)
SELECT 
'{{ entityId }}',
'{{ entityName }}' /* required */,
'{{ description }}',
'{{ components }}',
'{{ compositeComponents }}',
'{{ parentEntityId }}',
'{{ tags }}',
'{{ workspace_id }}',
'{{ region }}'
RETURNING
arn,
creation_date_time,
entity_id,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: entities
  props:
    - name: workspace_id
      value: "{{ workspace_id }}"
      description: Required parameter for the entities resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the entities resource.
    - name: entityId
      value: "{{ entityId }}"
    - name: entityName
      value: "{{ entityName }}"
    - name: description
      value: "{{ description }}"
    - name: components
      value: "{{ components }}"
    - name: compositeComponents
      value: "{{ compositeComponents }}"
    - name: parentEntityId
      value: "{{ parentEntityId }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_entity"
    values={[
        { label: 'update_entity', value: 'update_entity' }
    ]}
>
<TabItem value="update_entity">

Updates an entity.

```sql
UPDATE aws.iottwinmaker.entities
SET 
entityName = '{{ entityName }}',
description = '{{ description }}',
componentUpdates = '{{ componentUpdates }}',
compositeComponentUpdates = '{{ compositeComponentUpdates }}',
parentEntityUpdate = '{{ parentEntityUpdate }}'
WHERE 
workspace_id = '{{ workspace_id }}' --required
AND entity_id = '{{ entity_id }}' --required
AND region = '{{ region }}' --required
RETURNING
state,
update_date_time;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_entity"
    values={[
        { label: 'delete_entity', value: 'delete_entity' }
    ]}
>
<TabItem value="delete_entity">

Deletes an entity.

```sql
DELETE FROM aws.iottwinmaker.entities
WHERE workspace_id = '{{ workspace_id }}' --required
AND entity_id = '{{ entity_id }}' --required
AND region = '{{ region }}' --required
AND isRecursive = '{{ isRecursive }}'
;
```
</TabItem>
</Tabs>
