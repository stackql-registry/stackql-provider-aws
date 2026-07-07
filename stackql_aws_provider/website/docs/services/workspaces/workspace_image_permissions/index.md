--- 
title: workspace_image_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - workspace_image_permissions
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

Creates, updates, deletes, gets or lists a <code>workspace_image_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspace_image_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.workspace_image_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workspace_image_permissions"
    values={[
        { label: 'describe_workspace_image_permissions', value: 'describe_workspace_image_permissions' }
    ]}
>
<TabItem value="describe_workspace_image_permissions">

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
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the image. (pattern: &lt;code&gt;wsi-&#91;0-9a-z&#93;&#123;9,63&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ImagePermissions" /></td>
    <td><code>array</code></td>
    <td>The identifiers of the Amazon Web Services accounts that the image has been shared with.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</td>
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
    <td><a href="#describe_workspace_image_permissions"><CopyableCode code="describe_workspace_image_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the permissions that the owner of an image has granted to other Amazon Web Services accounts for an image.</td>
</tr>
<tr>
    <td><a href="#update_workspace_image_permission"><CopyableCode code="update_workspace_image_permission" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-AllowCopyImage"><code>AllowCopyImage</code></a>, <a href="#parameter-SharedAccountId"><code>SharedAccountId</code></a></td>
    <td></td>
    <td>Shares or unshares an image with one account in the same Amazon Web Services Region by specifying whether that account has permission to copy the image. If the copy image permission is granted, the image is shared with that account. If the copy image permission is revoked, the image is unshared with the account. After an image has been shared, the recipient account can copy the image to other Regions as needed. In the China (Ningxia) Region, you can copy images only within the same Region. In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support. For more information about sharing images, see Share or Unshare a Custom WorkSpaces Image. To delete an image that has been shared, you must unshare the image before you delete it. Sharing Bring Your Own License (BYOL) images across Amazon Web Services accounts isn't supported at this time in Amazon Web Services GovCloud (US). To share BYOL images across accounts in Amazon Web Services GovCloud (US), contact Amazon Web Services Support.</td>
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
    defaultValue="describe_workspace_image_permissions"
    values={[
        { label: 'describe_workspace_image_permissions', value: 'describe_workspace_image_permissions' }
    ]}
>
<TabItem value="describe_workspace_image_permissions">

Describes the permissions that the owner of an image has granted to other Amazon Web Services accounts for an image.

```sql
SELECT
ImageId,
ImagePermissions,
NextToken
FROM aws.workspaces.workspace_image_permissions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workspace_image_permission"
    values={[
        { label: 'update_workspace_image_permission', value: 'update_workspace_image_permission' }
    ]}
>
<TabItem value="update_workspace_image_permission">

Shares or unshares an image with one account in the same Amazon Web Services Region by specifying whether that account has permission to copy the image. If the copy image permission is granted, the image is shared with that account. If the copy image permission is revoked, the image is unshared with the account. After an image has been shared, the recipient account can copy the image to other Regions as needed. In the China (Ningxia) Region, you can copy images only within the same Region. In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support. For more information about sharing images, see Share or Unshare a Custom WorkSpaces Image. To delete an image that has been shared, you must unshare the image before you delete it. Sharing Bring Your Own License (BYOL) images across Amazon Web Services accounts isn't supported at this time in Amazon Web Services GovCloud (US). To share BYOL images across accounts in Amazon Web Services GovCloud (US), contact Amazon Web Services Support.

```sql
UPDATE aws.workspaces.workspace_image_permissions
SET 
ImageId = '{{ ImageId }}',
AllowCopyImage = {{ AllowCopyImage }},
SharedAccountId = '{{ SharedAccountId }}'
WHERE 
region = '{{ region }}' --required
AND ImageId = '{{ ImageId }}' --required
AND AllowCopyImage = {{ AllowCopyImage }} --required
AND SharedAccountId = '{{ SharedAccountId }}' --required;
```
</TabItem>
</Tabs>
