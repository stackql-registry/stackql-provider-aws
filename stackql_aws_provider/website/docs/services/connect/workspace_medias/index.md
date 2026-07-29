--- 
title: workspace_medias
hide_title: false
hide_table_of_contents: false
keywords:
  - workspace_medias
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

Creates, updates, deletes, gets or lists a <code>workspace_medias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspace_medias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.workspace_medias" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_workspace_media"
    values={[
        { label: 'list_workspace_media', value: 'list_workspace_media' }
    ]}
>
<TabItem value="list_workspace_media">

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
    <td><CopyableCode code="media" /></td>
    <td><code>array</code></td>
    <td>A list of media assets for the workspace.</td>
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
    <td><a href="#list_workspace_media"><CopyableCode code="list_workspace_media" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists media assets (such as logos) associated with a workspace.</td>
</tr>
<tr>
    <td><a href="#delete_workspace_media"><CopyableCode code="delete_workspace_media" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-mediaType"><code>mediaType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a media asset (such as a logo) from a workspace.</td>
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
<tr id="parameter-mediaType">
    <td><CopyableCode code="mediaType" /></td>
    <td><code>string</code></td>
    <td>The type of media to delete. Valid values are: IMAGE_LOGO_FAVICON and IMAGE_LOGO_HORIZONTAL.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_workspace_media"
    values={[
        { label: 'list_workspace_media', value: 'list_workspace_media' }
    ]}
>
<TabItem value="list_workspace_media">

Lists media assets (such as logos) associated with a workspace.

```sql
SELECT
media
FROM aws.connect.workspace_medias
WHERE instance_id = '{{ instance_id }}' -- required
AND workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workspace_media"
    values={[
        { label: 'delete_workspace_media', value: 'delete_workspace_media' }
    ]}
>
<TabItem value="delete_workspace_media">

Deletes a media asset (such as a logo) from a workspace.

```sql
DELETE FROM aws.connect.workspace_medias
WHERE instance_id = '{{ instance_id }}' --required
AND workspace_id = '{{ workspace_id }}' --required
AND mediaType = '{{ mediaType }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
