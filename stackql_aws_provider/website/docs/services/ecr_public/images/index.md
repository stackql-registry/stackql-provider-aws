--- 
title: images
hide_title: false
hide_table_of_contents: false
keywords:
  - images
  - ecr_public
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr_public.images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_images"
    values={[
        { label: 'describe_images', value: 'describe_images' }
    ]}
>
<TabItem value="describe_images">

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
    <td><CopyableCode code="artifactMediaType" /></td>
    <td><code>string</code></td>
    <td>The artifact media type of the image.</td>
</tr>
<tr>
    <td><CopyableCode code="imageDigest" /></td>
    <td><code>string</code></td>
    <td>The sha256 digest of the image manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="imageManifestMediaType" /></td>
    <td><code>string</code></td>
    <td>The media type of the image manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="imagePushedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, expressed in standard JavaScript date format, that the current image was pushed to the repository at.</td>
</tr>
<tr>
    <td><CopyableCode code="imageSizeInBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size, in bytes, of the image in the repository. If the image is a manifest list, this is the max size of all manifests in the list. Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the docker images command shows the uncompressed image size, so it might return a larger image size than the image sizes that are returned by DescribeImages.</td>
</tr>
<tr>
    <td><CopyableCode code="imageTags" /></td>
    <td><code>array</code></td>
    <td>The list of tags that's associated with this image.</td>
</tr>
<tr>
    <td><CopyableCode code="registryId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that's associated with the public registry where this image belongs. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repositoryName" /></td>
    <td><code>string</code></td>
    <td>The name of the repository where this image belongs. (pattern: &lt;code&gt;(?:&#91;a-z0-9&#93;+(?:&#91;._-&#93;&#91;a-z0-9&#93;+)*/)*&#91;a-z0-9&#93;+(?:&#91;._-&#93;&#91;a-z0-9&#93;+)*&lt;/code&gt;)</td>
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
    <td><a href="#describe_images"><CopyableCode code="describe_images" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns metadata that's related to the images in a repository in a public registry. Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the docker images command shows the uncompressed image size. Therefore, it might return a larger image size than the image sizes that are returned by DescribeImages.</td>
</tr>
<tr>
    <td><a href="#put_image"><CopyableCode code="put_image" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-imageManifest"><code>imageManifest</code></a></td>
    <td></td>
    <td>Creates or updates the image manifest and tags that are associated with an image. When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags that are associated with the image. This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.</td>
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
    defaultValue="describe_images"
    values={[
        { label: 'describe_images', value: 'describe_images' }
    ]}
>
<TabItem value="describe_images">

Returns metadata that's related to the images in a repository in a public registry. Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the docker images command shows the uncompressed image size. Therefore, it might return a larger image size than the image sizes that are returned by DescribeImages.

```sql
SELECT
artifactMediaType,
imageDigest,
imageManifestMediaType,
imagePushedAt,
imageSizeInBytes,
imageTags,
registryId,
repositoryName
FROM aws.ecr_public.images
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_image"
    values={[
        { label: 'put_image', value: 'put_image' }
    ]}
>
<TabItem value="put_image">

Creates or updates the image manifest and tags that are associated with an image. When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags that are associated with the image. This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.

```sql
REPLACE aws.ecr_public.images
SET 
registryId = '{{ registryId }}',
repositoryName = '{{ repositoryName }}',
imageManifest = '{{ imageManifest }}',
imageManifestMediaType = '{{ imageManifestMediaType }}',
imageTag = '{{ imageTag }}',
imageDigest = '{{ imageDigest }}'
WHERE 
region = '{{ region }}' --required
AND repositoryName = '{{ repositoryName }}' --required
AND imageManifest = '{{ imageManifest }}' --required
RETURNING
image;
```
</TabItem>
</Tabs>
