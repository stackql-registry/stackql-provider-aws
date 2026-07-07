--- 
title: folders
hide_title: false
hide_table_of_contents: false
keywords:
  - folders
  - quicksight
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.folders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_folder"
    values={[
        { label: 'describe_folder', value: 'describe_folder' },
        { label: 'search_folders', value: 'search_folders' },
        { label: 'list_folders', value: 'list_folders' }
    ]}
>
<TabItem value="describe_folder">

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
    <td><CopyableCode code="Folder" /></td>
    <td><code>object</code></td>
    <td>Information about the folder.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_folders">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the folder.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the folder was created.</td>
</tr>
<tr>
    <td><CopyableCode code="FolderId" /></td>
    <td><code>string</code></td>
    <td>The ID of the folder. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FolderType" /></td>
    <td><code>string</code></td>
    <td>The type of folder. (SHARED, RESTRICTED)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the folder was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The display name of the folder.</td>
</tr>
<tr>
    <td><CopyableCode code="SharingModel" /></td>
    <td><code>string</code></td>
    <td>The sharing scope of the folder. (ACCOUNT, NAMESPACE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_folders">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the folder.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the folder was created.</td>
</tr>
<tr>
    <td><CopyableCode code="FolderId" /></td>
    <td><code>string</code></td>
    <td>The ID of the folder. (pattern: &lt;code&gt;&#91;\w\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FolderType" /></td>
    <td><code>string</code></td>
    <td>The type of folder. (SHARED, RESTRICTED)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the folder was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The display name of the folder.</td>
</tr>
<tr>
    <td><CopyableCode code="SharingModel" /></td>
    <td><code>string</code></td>
    <td>The sharing scope of the folder. (ACCOUNT, NAMESPACE)</td>
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
    <td><a href="#describe_folder"><CopyableCode code="describe_folder" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-folder_id"><code>folder_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a folder.</td>
</tr>
<tr>
    <td><a href="#search_folders"><CopyableCode code="search_folders" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches the subfolders in a folder.</td>
</tr>
<tr>
    <td><a href="#list_folders"><CopyableCode code="list_folders" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists all folders in an account.</td>
</tr>
<tr>
    <td><a href="#create_folder_membership"><CopyableCode code="create_folder_membership" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-folder_id"><code>folder_id</code></a>, <a href="#parameter-member_id"><code>member_id</code></a>, <a href="#parameter-member_type"><code>member_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds an asset, such as a dashboard, analysis, or dataset into a folder.</td>
</tr>
<tr>
    <td><a href="#create_folder"><CopyableCode code="create_folder" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-folder_id"><code>folder_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an empty shared folder.</td>
</tr>
<tr>
    <td><a href="#update_folder"><CopyableCode code="update_folder" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-folder_id"><code>folder_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the name of a folder.</td>
</tr>
<tr>
    <td><a href="#delete_folder_membership"><CopyableCode code="delete_folder_membership" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-folder_id"><code>folder_id</code></a>, <a href="#parameter-member_id"><code>member_id</code></a>, <a href="#parameter-member_type"><code>member_type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes an asset, such as a dashboard, analysis, or dataset, from a folder.</td>
</tr>
<tr>
    <td><a href="#delete_folder"><CopyableCode code="delete_folder" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-folder_id"><code>folder_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an empty folder.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the Amazon Web Services account that contains the folder.</td>
</tr>
<tr id="parameter-folder_id">
    <td><CopyableCode code="folder_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the folder.</td>
</tr>
<tr id="parameter-member_id">
    <td><CopyableCode code="member_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the asset that you want to delete.</td>
</tr>
<tr id="parameter-member_type">
    <td><CopyableCode code="member_type" /></td>
    <td><code>string</code></td>
    <td>The member type of the asset that you want to delete from a folder.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_folder"
    values={[
        { label: 'describe_folder', value: 'describe_folder' },
        { label: 'search_folders', value: 'search_folders' },
        { label: 'list_folders', value: 'list_folders' }
    ]}
>
<TabItem value="describe_folder">

Describes a folder.

```sql
SELECT
Folder,
RequestId,
Status
FROM aws.quicksight.folders
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND folder_id = '{{ folder_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_folders">

Searches the subfolders in a folder.

```sql
SELECT
Arn,
CreatedTime,
FolderId,
FolderType,
LastUpdatedTime,
Name,
SharingModel
FROM aws.quicksight.folders
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_folders">

Lists all folders in an account.

```sql
SELECT
Arn,
CreatedTime,
FolderId,
FolderType,
LastUpdatedTime,
Name,
SharingModel
FROM aws.quicksight.folders
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_folder_membership"
    values={[
        { label: 'create_folder_membership', value: 'create_folder_membership' },
        { label: 'create_folder', value: 'create_folder' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_folder_membership">

Adds an asset, such as a dashboard, analysis, or dataset into a folder.

```sql
INSERT INTO aws.quicksight.folders (
aws_account_id,
folder_id,
member_id,
member_type,
region
)
SELECT 
'{{ aws_account_id }}',
'{{ folder_id }}',
'{{ member_id }}',
'{{ member_type }}',
'{{ region }}'
RETURNING
FolderMember,
RequestId,
Status
;
```
</TabItem>
<TabItem value="create_folder">

Creates an empty shared folder.

```sql
INSERT INTO aws.quicksight.folders (
Name,
FolderType,
ParentFolderArn,
Permissions,
Tags,
SharingModel,
aws_account_id,
folder_id,
region
)
SELECT 
'{{ Name }}',
'{{ FolderType }}',
'{{ ParentFolderArn }}',
'{{ Permissions }}',
'{{ Tags }}',
'{{ SharingModel }}',
'{{ aws_account_id }}',
'{{ folder_id }}',
'{{ region }}'
RETURNING
Arn,
FolderId,
RequestId,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: folders
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the folders resource.
    - name: folder_id
      value: "{{ folder_id }}"
      description: Required parameter for the folders resource.
    - name: member_id
      value: "{{ member_id }}"
      description: Required parameter for the folders resource.
    - name: member_type
      value: "{{ member_type }}"
      description: Required parameter for the folders resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the folders resource.
    - name: Name
      value: "{{ Name }}"
    - name: FolderType
      value: "{{ FolderType }}"
      valid_values: ['SHARED', 'RESTRICTED']
    - name: ParentFolderArn
      value: "{{ ParentFolderArn }}"
    - name: Permissions
      value:
        - Principal: "{{ Principal }}"
          Actions: "{{ Actions }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: SharingModel
      value: "{{ SharingModel }}"
      valid_values: ['ACCOUNT', 'NAMESPACE']
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

Updates the name of a folder.

```sql
UPDATE aws.quicksight.folders
SET 
Name = '{{ Name }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND folder_id = '{{ folder_id }}' --required
AND region = '{{ region }}' --required
RETURNING
Arn,
FolderId,
RequestId,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_folder_membership"
    values={[
        { label: 'delete_folder_membership', value: 'delete_folder_membership' },
        { label: 'delete_folder', value: 'delete_folder' }
    ]}
>
<TabItem value="delete_folder_membership">

Removes an asset, such as a dashboard, analysis, or dataset, from a folder.

```sql
DELETE FROM aws.quicksight.folders
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND folder_id = '{{ folder_id }}' --required
AND member_id = '{{ member_id }}' --required
AND member_type = '{{ member_type }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_folder">

Deletes an empty folder.

```sql
DELETE FROM aws.quicksight.folders
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND folder_id = '{{ folder_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
