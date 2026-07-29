--- 
title: workspace_images
hide_title: false
hide_table_of_contents: false
keywords:
  - workspace_images
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

Creates, updates, deletes, gets or lists a <code>workspace_images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspace_images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.workspace_images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workspace_images"
    values={[
        { label: 'describe_workspace_images', value: 'describe_workspace_images' }
    ]}
>
<TabItem value="describe_workspace_images">

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
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the image was created. If the image has been shared, the Amazon Web Services account that the image has been shared with sees the original creation date of the image.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the image. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_./() -&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>The error code that is returned for the image.</td>
</tr>
<tr>
    <td><CopyableCode code="error_details" /></td>
    <td><code>array</code></td>
    <td>Additional details of the error returned for the image, including the possible causes of the errors and troubleshooting information.</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The text of the error message that is returned for the image.</td>
</tr>
<tr>
    <td><CopyableCode code="image_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the image. (pattern: &lt;code&gt;wsi-&#91;0-9a-z&#93;&#123;9,63&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the image. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_./()\\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="operating_system" /></td>
    <td><code>object</code></td>
    <td>The operating system that the image is running.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Web Services account that owns the image. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="required_tenancy" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the image is running on dedicated hardware. When Bring Your Own License (BYOL) is enabled, this value is set to DEDICATED. For more information, see Bring Your Own Windows Desktop Images. (DEFAULT, DEDICATED)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The status of the image. (AVAILABLE, PENDING, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="updates" /></td>
    <td><code>object</code></td>
    <td>The updates (if any) that are available for the specified image.</td>
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
    <td><a href="#describe_workspace_images"><CopyableCode code="describe_workspace_images" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list that describes one or more specified images, if the image identifiers are provided. Otherwise, all images in the account are described.</td>
</tr>
<tr>
    <td><a href="#create_updated_workspace_image"><CopyableCode code="create_updated_workspace_image" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceImageId"><code>SourceImageId</code></a></td>
    <td></td>
    <td>Creates a new updated WorkSpace image based on the specified source image. The new updated WorkSpace image has the latest drivers and other updates required by the Amazon WorkSpaces components. To determine which WorkSpace images need to be updated with the latest Amazon WorkSpaces requirements, use DescribeWorkspaceImages. Only Windows 10, Windows Server 2016, and Windows Server 2019 WorkSpace images can be programmatically updated at this time. Microsoft Windows updates and other application updates are not included in the update process. The source WorkSpace image is not deleted. You can delete the source image after you've verified your new updated image and created a new bundle.</td>
</tr>
<tr>
    <td><a href="#create_workspace_image"><CopyableCode code="create_workspace_image" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkspaceId"><code>WorkspaceId</code></a></td>
    <td></td>
    <td>Creates a new WorkSpace image from an existing WorkSpace.</td>
</tr>
<tr>
    <td><a href="#delete_workspace_image"><CopyableCode code="delete_workspace_image" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and unshare the image if it is shared with other accounts.</td>
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
    defaultValue="describe_workspace_images"
    values={[
        { label: 'describe_workspace_images', value: 'describe_workspace_images' }
    ]}
>
<TabItem value="describe_workspace_images">

Retrieves a list that describes one or more specified images, if the image identifiers are provided. Otherwise, all images in the account are described.

```sql
SELECT
created,
description,
error_code,
error_details,
error_message,
image_id,
name,
operating_system,
owner_account_id,
required_tenancy,
state,
updates
FROM aws.workspaces.workspace_images
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_updated_workspace_image"
    values={[
        { label: 'create_updated_workspace_image', value: 'create_updated_workspace_image' },
        { label: 'create_workspace_image', value: 'create_workspace_image' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_updated_workspace_image">

Creates a new updated WorkSpace image based on the specified source image. The new updated WorkSpace image has the latest drivers and other updates required by the Amazon WorkSpaces components. To determine which WorkSpace images need to be updated with the latest Amazon WorkSpaces requirements, use DescribeWorkspaceImages. Only Windows 10, Windows Server 2016, and Windows Server 2019 WorkSpace images can be programmatically updated at this time. Microsoft Windows updates and other application updates are not included in the update process. The source WorkSpace image is not deleted. You can delete the source image after you've verified your new updated image and created a new bundle.

```sql
INSERT INTO aws.workspaces.workspace_images (
Name,
Description,
SourceImageId,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ SourceImageId }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
image_id
;
```
</TabItem>
<TabItem value="create_workspace_image">

Creates a new WorkSpace image from an existing WorkSpace.

```sql
INSERT INTO aws.workspaces.workspace_images (
Name,
Description,
WorkspaceId,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ WorkspaceId }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
created,
description,
image_id,
name,
operating_system,
owner_account_id,
required_tenancy,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workspace_images
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workspace_images resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the new WorkSpace image.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the new WorkSpace image.
    - name: SourceImageId
      value: "{{ SourceImageId }}"
      description: |
        The identifier of the source WorkSpace image.
    - name: Tags
      description: |
        The tags that you want to add to the new WorkSpace image. To add tags when you're creating the image, you must create an IAM policy that grants your IAM user permission to use workspaces:CreateTags.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: WorkspaceId
      value: "{{ WorkspaceId }}"
      description: |
        The identifier of the source WorkSpace
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workspace_image"
    values={[
        { label: 'delete_workspace_image', value: 'delete_workspace_image' }
    ]}
>
<TabItem value="delete_workspace_image">

Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and unshare the image if it is shared with other accounts.

```sql
DELETE FROM aws.workspaces.workspace_images
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
