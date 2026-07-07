--- 
title: folders
hide_title: false
hide_table_of_contents: false
keywords:
  - folders
  - workdocs
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

Creates, updates, deletes, gets or lists a <code>folders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="folders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workdocs.folders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_folder"
    values={[
        { label: 'get_folder', value: 'get_folder' }
    ]}
>
<TabItem value="get_folder">

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
    <td><CopyableCode code="CustomMetadata" /></td>
    <td><code>object</code></td>
    <td>The custom metadata on the folder.</td>
</tr>
<tr>
    <td><CopyableCode code="Metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata of the folder.</td>
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
    <td><a href="#get_folder"><CopyableCode code="get_folder" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-folder_id"><code>folder_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-includeCustomMetadata"><code>includeCustomMetadata</code></a></td>
    <td>Retrieves the metadata of the specified folder.</td>
</tr>
<tr>
    <td><a href="#create_folder"><CopyableCode code="create_folder" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ParentFolderId"><code>ParentFolderId</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Creates a folder with the specified name and parent folder.</td>
</tr>
<tr>
    <td><a href="#update_folder"><CopyableCode code="update_folder" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-folder_id"><code>folder_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Updates the specified attributes of the specified folder. The user must have access to both the folder and its parent folder, if applicable.</td>
</tr>
<tr>
    <td><a href="#delete_folder"><CopyableCode code="delete_folder" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-folder_id"><code>folder_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Permanently deletes the specified folder and its contents.</td>
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
<tr id="parameter-folder_id">
    <td><CopyableCode code="folder_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the folder.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Authentication">
    <td><CopyableCode code="Authentication" /></td>
    <td><code>string</code></td>
    <td>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</td>
</tr>
<tr id="parameter-includeCustomMetadata">
    <td><CopyableCode code="includeCustomMetadata" /></td>
    <td><code>boolean</code></td>
    <td>Set to TRUE to include custom metadata in the response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_folder"
    values={[
        { label: 'get_folder', value: 'get_folder' }
    ]}
>
<TabItem value="get_folder">

Retrieves the metadata of the specified folder.

```sql
SELECT
CustomMetadata,
Metadata
FROM aws.workdocs.folders
WHERE folder_id = '{{ folder_id }}' -- required
AND region = '{{ region }}' -- required
AND Authentication = '{{ Authentication }}'
AND includeCustomMetadata = '{{ includeCustomMetadata }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_folder"
    values={[
        { label: 'create_folder', value: 'create_folder' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_folder">

Creates a folder with the specified name and parent folder.

```sql
INSERT INTO aws.workdocs.folders (
Name,
ParentFolderId,
region,
Authentication
)
SELECT 
'{{ Name }}',
'{{ ParentFolderId }}' /* required */,
'{{ region }}',
'{{ Authentication }}'
RETURNING
Metadata
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: folders
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the folders resource.
    - name: Name
      value: "{{ Name }}"
    - name: ParentFolderId
      value: "{{ ParentFolderId }}"
    - name: Authentication
      value: "{{ Authentication }}"
      description: Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
      description: Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_folder"
    values={[
        { label: 'update_folder', value: 'update_folder' }
    ]}
>
<TabItem value="update_folder">

Updates the specified attributes of the specified folder. The user must have access to both the folder and its parent folder, if applicable.

```sql
UPDATE aws.workdocs.folders
SET 
Name = '{{ Name }}',
ParentFolderId = '{{ ParentFolderId }}',
ResourceState = '{{ ResourceState }}'
WHERE 
folder_id = '{{ folder_id }}' --required
AND region = '{{ region }}' --required
AND Authentication = '{{ Authentication}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_folder"
    values={[
        { label: 'delete_folder', value: 'delete_folder' }
    ]}
>
<TabItem value="delete_folder">

Permanently deletes the specified folder and its contents.

```sql
DELETE FROM aws.workdocs.folders
WHERE folder_id = '{{ folder_id }}' --required
AND region = '{{ region }}' --required
AND Authentication = '{{ Authentication }}'
;
```
</TabItem>
</Tabs>
