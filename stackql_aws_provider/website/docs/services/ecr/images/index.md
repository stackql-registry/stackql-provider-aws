--- 
title: images
hide_title: false
hide_table_of_contents: false
keywords:
  - images
  - ecr
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr.images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_image"
    values={[
        { label: 'batch_get_image', value: 'batch_get_image' },
        { label: 'describe_images', value: 'describe_images' }
    ]}
>
<TabItem value="batch_get_image">

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
    <td><CopyableCode code="failures" /></td>
    <td><code>array</code></td>
    <td>Any failures associated with the call.</td>
</tr>
<tr>
    <td><CopyableCode code="images" /></td>
    <td><code>array</code></td>
    <td>A list of image objects corresponding to the image references in the request.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="artifact_media_type" /></td>
    <td><code>string</code></td>
    <td>The artifact media type of the image.</td>
</tr>
<tr>
    <td><CopyableCode code="image_digest" /></td>
    <td><code>string</code></td>
    <td>The sha256 digest of the image manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="image_manifest_media_type" /></td>
    <td><code>string</code></td>
    <td>The media type of the image manifest.</td>
</tr>
<tr>
    <td><CopyableCode code="image_pushed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, expressed in standard JavaScript date format, at which the current image was pushed to the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="image_scan_findings_summary" /></td>
    <td><code>object</code></td>
    <td>A summary of the last completed image scan.</td>
</tr>
<tr>
    <td><CopyableCode code="image_scan_status" /></td>
    <td><code>object</code></td>
    <td>The current state of the scan.</td>
</tr>
<tr>
    <td><CopyableCode code="image_size_in_bytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size, in bytes, of the image in the repository. If the image is a manifest list, this will be the max size of all manifests in the list. Starting with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the docker images command shows the uncompressed image size. Therefore, Docker might return a larger image than the image shown in the Amazon Web Services Management Console.</td>
</tr>
<tr>
    <td><CopyableCode code="image_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the image. (ACTIVE, ARCHIVED, ACTIVATING)</td>
</tr>
<tr>
    <td><CopyableCode code="image_tags" /></td>
    <td><code>array</code></td>
    <td>The list of tags associated with this image.</td>
</tr>
<tr>
    <td><CopyableCode code="last_activated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, expressed in standard JavaScript date format, when the image was last restored from Amazon ECR archive to Amazon ECR standard.</td>
</tr>
<tr>
    <td><CopyableCode code="last_archived_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, expressed in standard JavaScript date format, when the image was last transitioned to Amazon ECR archive.</td>
</tr>
<tr>
    <td><CopyableCode code="last_recorded_pull_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, expressed in standard JavaScript date format, when Amazon ECR recorded the last image pull. Amazon ECR refreshes the last image pull timestamp at least once every 24 hours. For example, if you pull an image once a day then the lastRecordedPullTime timestamp will indicate the exact time that the image was last pulled. However, if you pull an image once an hour, because Amazon ECR refreshes the lastRecordedPullTime timestamp at least once every 24 hours, the result may not be the exact time that the image was last pulled.</td>
</tr>
<tr>
    <td><CopyableCode code="registry_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with the registry to which this image belongs. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td>The name of the repository to which this image belongs. (pattern: &lt;code&gt;&#91;a-z0-9&#93;+((\.|_|__|-+)&#91;a-z0-9&#93;+)*(\/&#91;a-z0-9&#93;+((\.|_|__|-+)&#91;a-z0-9&#93;+)*)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="subject_manifest_digest" /></td>
    <td><code>string</code></td>
    <td>The digest of the subject manifest for images that are referrers.</td>
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
    <td><a href="#batch_get_image"><CopyableCode code="batch_get_image" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets detailed information for an image. Images are specified with either an imageTag or imageDigest. When an image is pulled, the BatchGetImage API is called once to retrieve the image manifest.</td>
</tr>
<tr>
    <td><a href="#describe_images"><CopyableCode code="describe_images" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns metadata about the images in a repository. Starting with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the docker images command shows the uncompressed image size. Therefore, Docker might return a larger image than the image shown in the Amazon Web Services Management Console. The new version of Amazon ECR Basic Scanning doesn't use the ImageDetail$imageScanFindingsSummary and ImageDetail$imageScanStatus attributes from the API response to return scan results. Use the DescribeImageScanFindings API instead. For more information about Amazon Web Services native basic scanning, see Scan images for software vulnerabilities in Amazon ECR.</td>
</tr>
<tr>
    <td><a href="#update_image_storage_class"><CopyableCode code="update_image_storage_class" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-imageId"><code>imageId</code></a>, <a href="#parameter-targetStorageClass"><code>targetStorageClass</code></a></td>
    <td></td>
    <td>Transitions an image between storage classes. You can transition images from Amazon ECR standard storage class to Amazon ECR archival storage class for long-term storage, or restore archived images back to Amazon ECR standard.</td>
</tr>
<tr>
    <td><a href="#put_image"><CopyableCode code="put_image" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-imageManifest"><code>imageManifest</code></a></td>
    <td></td>
    <td>Creates or updates the image manifest and tags associated with an image. When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image. This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.</td>
</tr>
<tr>
    <td><a href="#put_image_scanning_configuration"><CopyableCode code="put_image_scanning_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-imageScanningConfiguration"><code>imageScanningConfiguration</code></a></td>
    <td></td>
    <td>The PutImageScanningConfiguration API is being deprecated, in favor of specifying the image scanning configuration at the registry level. For more information, see PutRegistryScanningConfiguration. Updates the image scanning configuration for the specified repository.</td>
</tr>
<tr>
    <td><a href="#put_image_tag_mutability"><CopyableCode code="put_image_tag_mutability" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-imageTagMutability"><code>imageTagMutability</code></a></td>
    <td></td>
    <td>Updates the image tag mutability settings for the specified repository. For more information, see Image tag mutability in the Amazon Elastic Container Registry User Guide.</td>
</tr>
<tr>
    <td><a href="#list_images"><CopyableCode code="list_images" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a></td>
    <td></td>
    <td>Lists all the image IDs for the specified repository. You can filter images based on whether or not they are tagged by using the tagStatus filter and specifying either TAGGED, UNTAGGED or ANY. For example, you can filter your results to return only UNTAGGED images and then pipe that result to a BatchDeleteImage operation to delete them. Or, you can filter your results to return only TAGGED images to list all of the tags in your repository.</td>
</tr>
<tr>
    <td><a href="#start_image_scan"><CopyableCode code="start_image_scan" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-imageId"><code>imageId</code></a></td>
    <td></td>
    <td>Starts a basic image vulnerability scan. A basic image scan can only be started once per 24 hours on an individual image. This limit includes if an image was scanned on initial push. You can start up to 100,000 basic scans per 24 hours. This limit includes both scans on initial push and scans initiated by the StartImageScan API. For more information, see Basic scanning in the Amazon Elastic Container Registry User Guide.</td>
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
    defaultValue="batch_get_image"
    values={[
        { label: 'batch_get_image', value: 'batch_get_image' },
        { label: 'describe_images', value: 'describe_images' }
    ]}
>
<TabItem value="batch_get_image">

Gets detailed information for an image. Images are specified with either an imageTag or imageDigest. When an image is pulled, the BatchGetImage API is called once to retrieve the image manifest.

```sql
SELECT
failures,
images
FROM aws.ecr.images
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_images">

Returns metadata about the images in a repository. Starting with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the docker images command shows the uncompressed image size. Therefore, Docker might return a larger image than the image shown in the Amazon Web Services Management Console. The new version of Amazon ECR Basic Scanning doesn't use the ImageDetail$imageScanFindingsSummary and ImageDetail$imageScanStatus attributes from the API response to return scan results. Use the DescribeImageScanFindings API instead. For more information about Amazon Web Services native basic scanning, see Scan images for software vulnerabilities in Amazon ECR.

```sql
SELECT
artifact_media_type,
image_digest,
image_manifest_media_type,
image_pushed_at,
image_scan_findings_summary,
image_scan_status,
image_size_in_bytes,
image_status,
image_tags,
last_activated_at,
last_archived_at,
last_recorded_pull_time,
registry_id,
repository_name,
subject_manifest_digest
FROM aws.ecr.images
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_image_storage_class"
    values={[
        { label: 'update_image_storage_class', value: 'update_image_storage_class' }
    ]}
>
<TabItem value="update_image_storage_class">

Transitions an image between storage classes. You can transition images from Amazon ECR standard storage class to Amazon ECR archival storage class for long-term storage, or restore archived images back to Amazon ECR standard.

```sql
UPDATE aws.ecr.images
SET 
registryId = '{{ registryId }}',
repositoryName = '{{ repositoryName }}',
imageId = '{{ imageId }}',
targetStorageClass = '{{ targetStorageClass }}'
WHERE 
region = '{{ region }}' --required
AND repositoryName = '{{ repositoryName }}' --required
AND imageId = '{{ imageId }}' --required
AND targetStorageClass = '{{ targetStorageClass }}' --required
RETURNING
image_id,
image_status,
registry_id,
repository_name;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_image"
    values={[
        { label: 'put_image', value: 'put_image' },
        { label: 'put_image_scanning_configuration', value: 'put_image_scanning_configuration' },
        { label: 'put_image_tag_mutability', value: 'put_image_tag_mutability' }
    ]}
>
<TabItem value="put_image">

Creates or updates the image manifest and tags associated with an image. When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image. This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.

```sql
REPLACE aws.ecr.images
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
<TabItem value="put_image_scanning_configuration">

The PutImageScanningConfiguration API is being deprecated, in favor of specifying the image scanning configuration at the registry level. For more information, see PutRegistryScanningConfiguration. Updates the image scanning configuration for the specified repository.

```sql
REPLACE aws.ecr.images
SET 
registryId = '{{ registryId }}',
repositoryName = '{{ repositoryName }}',
imageScanningConfiguration = '{{ imageScanningConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND repositoryName = '{{ repositoryName }}' --required
AND imageScanningConfiguration = '{{ imageScanningConfiguration }}' --required
RETURNING
image_scanning_configuration,
registry_id,
repository_name;
```
</TabItem>
<TabItem value="put_image_tag_mutability">

Updates the image tag mutability settings for the specified repository. For more information, see Image tag mutability in the Amazon Elastic Container Registry User Guide.

```sql
REPLACE aws.ecr.images
SET 
registryId = '{{ registryId }}',
repositoryName = '{{ repositoryName }}',
imageTagMutability = '{{ imageTagMutability }}',
imageTagMutabilityExclusionFilters = '{{ imageTagMutabilityExclusionFilters }}'
WHERE 
region = '{{ region }}' --required
AND repositoryName = '{{ repositoryName }}' --required
AND imageTagMutability = '{{ imageTagMutability }}' --required
RETURNING
image_tag_mutability,
image_tag_mutability_exclusion_filters,
registry_id,
repository_name;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_images"
    values={[
        { label: 'list_images', value: 'list_images' },
        { label: 'start_image_scan', value: 'start_image_scan' }
    ]}
>
<TabItem value="list_images">

Lists all the image IDs for the specified repository. You can filter images based on whether or not they are tagged by using the tagStatus filter and specifying either TAGGED, UNTAGGED or ANY. For example, you can filter your results to return only UNTAGGED images and then pipe that result to a BatchDeleteImage operation to delete them. Or, you can filter your results to return only TAGGED images to list all of the tags in your repository.

```sql
EXEC aws.ecr.images.list_images 
@region='{{ region }}' --required 
@@json=
'{
"registryId": "{{ registryId }}", 
"repositoryName": "{{ repositoryName }}", 
"nextToken": "{{ nextToken }}", 
"maxResults": {{ maxResults }}, 
"filter": "{{ filter }}"
}'
;
```
</TabItem>
<TabItem value="start_image_scan">

Starts a basic image vulnerability scan. A basic image scan can only be started once per 24 hours on an individual image. This limit includes if an image was scanned on initial push. You can start up to 100,000 basic scans per 24 hours. This limit includes both scans on initial push and scans initiated by the StartImageScan API. For more information, see Basic scanning in the Amazon Elastic Container Registry User Guide.

```sql
EXEC aws.ecr.images.start_image_scan 
@region='{{ region }}' --required 
@@json=
'{
"registryId": "{{ registryId }}", 
"repositoryName": "{{ repositoryName }}", 
"imageId": "{{ imageId }}"
}'
;
```
</TabItem>
</Tabs>
