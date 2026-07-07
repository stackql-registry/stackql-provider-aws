--- 
title: images
hide_title: false
hide_table_of_contents: false
keywords:
  - images
  - sagemaker
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

Creates, updates, deletes, gets or lists an <code>images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_image"
    values={[
        { label: 'describe_image', value: 'describe_image' },
        { label: 'list_images', value: 'list_images' }
    ]}
>
<TabItem value="describe_image">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the image was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the image. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The name of the image as displayed. (pattern: &lt;code&gt;\S(.*\S)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>When a create, update, or delete operation fails, the reason for the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="ImageArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the image. (pattern: &lt;code&gt;arn:aws(-&#91;\w&#93;+)*:sagemaker:.+:&#91;0-9&#93;&#123;12&#125;:image/&#91;a-zA-Z0-9&#93;(&#91;-.&#93;?&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ImageName" /></td>
    <td><code>string</code></td>
    <td>The name of the image. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;-.&#93;?&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ImageStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the image. (CREATING, CREATED, CREATE_FAILED, UPDATING, UPDATE_FAILED, DELETING, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the image was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that enables Amazon SageMaker AI to perform tasks on your behalf. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_images">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the image was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the image. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The name of the image as displayed. (pattern: &lt;code&gt;\S(.*\S)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>When a create, update, or delete operation fails, the reason for the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="ImageArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the image. (pattern: &lt;code&gt;arn:aws(-&#91;\w&#93;+)*:sagemaker:.+:&#91;0-9&#93;&#123;12&#125;:image/&#91;a-zA-Z0-9&#93;(&#91;-.&#93;?&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ImageName" /></td>
    <td><code>string</code></td>
    <td>The name of the image. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;-.&#93;?&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ImageStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the image. (CREATING, CREATED, CREATE_FAILED, UPDATING, UPDATE_FAILED, DELETING, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the image was last modified.</td>
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
    <td><a href="#describe_image"><CopyableCode code="describe_image" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a SageMaker AI image.</td>
</tr>
<tr>
    <td><a href="#list_images"><CopyableCode code="list_images" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the images in your account and their properties. The list can be filtered by creation time or modified time, and whether the image name contains a specified string.</td>
</tr>
<tr>
    <td><a href="#create_image"><CopyableCode code="create_image" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ImageName"><code>ImageName</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates a custom SageMaker AI image. A SageMaker AI image is a set of image versions. Each image version represents a container image stored in Amazon ECR. For more information, see Bring your own SageMaker AI image.</td>
</tr>
<tr>
    <td><a href="#update_image"><CopyableCode code="update_image" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ImageName"><code>ImageName</code></a></td>
    <td></td>
    <td>Updates the properties of a SageMaker AI image. To change the image's tags, use the AddTags and DeleteTags APIs.</td>
</tr>
<tr>
    <td><a href="#delete_image"><CopyableCode code="delete_image" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a SageMaker AI image and all versions of the image. The container images aren't deleted.</td>
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
    defaultValue="describe_image"
    values={[
        { label: 'describe_image', value: 'describe_image' },
        { label: 'list_images', value: 'list_images' }
    ]}
>
<TabItem value="describe_image">

Describes a SageMaker AI image.

```sql
SELECT
CreationTime,
Description,
DisplayName,
FailureReason,
ImageArn,
ImageName,
ImageStatus,
LastModifiedTime,
RoleArn
FROM aws.sagemaker.images
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_images">

Lists the images in your account and their properties. The list can be filtered by creation time or modified time, and whether the image name contains a specified string.

```sql
SELECT
CreationTime,
Description,
DisplayName,
FailureReason,
ImageArn,
ImageName,
ImageStatus,
LastModifiedTime
FROM aws.sagemaker.images
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_image"
    values={[
        { label: 'create_image', value: 'create_image' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_image">

Creates a custom SageMaker AI image. A SageMaker AI image is a set of image versions. Each image version represents a container image stored in Amazon ECR. For more information, see Bring your own SageMaker AI image.

```sql
INSERT INTO aws.sagemaker.images (
Description,
DisplayName,
ImageName,
RoleArn,
Tags,
region
)
SELECT 
'{{ Description }}',
'{{ DisplayName }}',
'{{ ImageName }}' /* required */,
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
ImageArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: images
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the images resource.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the image.
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        The display name of the image. If not provided, ImageName is displayed.
    - name: ImageName
      value: "{{ ImageName }}"
      description: |
        The name of the image. Must be unique to your account.
    - name: RoleArn
      value: "{{ RoleArn }}"
      description: |
        The ARN of an IAM role that enables Amazon SageMaker AI to perform tasks on your behalf.
    - name: Tags
      description: |
        A list of tags to apply to the image.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_image"
    values={[
        { label: 'update_image', value: 'update_image' }
    ]}
>
<TabItem value="update_image">

Updates the properties of a SageMaker AI image. To change the image's tags, use the AddTags and DeleteTags APIs.

```sql
UPDATE aws.sagemaker.images
SET 
DeleteProperties = '{{ DeleteProperties }}',
Description = '{{ Description }}',
DisplayName = '{{ DisplayName }}',
ImageName = '{{ ImageName }}',
RoleArn = '{{ RoleArn }}'
WHERE 
region = '{{ region }}' --required
AND ImageName = '{{ ImageName }}' --required
RETURNING
ImageArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_image"
    values={[
        { label: 'delete_image', value: 'delete_image' }
    ]}
>
<TabItem value="delete_image">

Deletes a SageMaker AI image and all versions of the image. The container images aren't deleted.

```sql
DELETE FROM aws.sagemaker.images
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
