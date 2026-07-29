--- 
title: repositories
hide_title: false
hide_table_of_contents: false
keywords:
  - repositories
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

Creates, updates, deletes, gets or lists a <code>repositories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repositories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecr.repositories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_repositories"
    values={[
        { label: 'describe_repositories', value: 'describe_repositories' }
    ]}
>
<TabItem value="describe_repositories">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in JavaScript date format, when the repository was created.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.</td>
</tr>
<tr>
    <td><CopyableCode code="image_scanning_configuration" /></td>
    <td><code>object</code></td>
    <td>The image scanning configuration for a repository.</td>
</tr>
<tr>
    <td><CopyableCode code="image_tag_mutability" /></td>
    <td><code>string</code></td>
    <td>The tag mutability setting for the repository. (MUTABLE, IMMUTABLE, IMMUTABLE_WITH_EXCLUSION, MUTABLE_WITH_EXCLUSION)</td>
</tr>
<tr>
    <td><CopyableCode code="image_tag_mutability_exclusion_filters" /></td>
    <td><code>array</code></td>
    <td>A list of filters that specify which image tags are excluded from the repository's image tag mutability setting.</td>
</tr>
<tr>
    <td><CopyableCode code="registry_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with the registry that contains the repository. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the repository. The ARN contains the arn:aws:ecr namespace, followed by the region of the repository, Amazon Web Services account ID of the repository owner, repository namespace, and repository name. For example, arn:aws:ecr:region:012345678910:repository-namespace/repository-name.</td>
</tr>
<tr>
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td>The name of the repository. (pattern: &lt;code&gt;&#91;a-z0-9&#93;+((\.|_|__|-+)&#91;a-z0-9&#93;+)*(\/&#91;a-z0-9&#93;+((\.|_|__|-+)&#91;a-z0-9&#93;+)*)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_uri" /></td>
    <td><code>string</code></td>
    <td>The URI for the repository. You can use this URI for container image push and pull operations.</td>
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
    <td><a href="#describe_repositories"><CopyableCode code="describe_repositories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes image repositories in a registry.</td>
</tr>
<tr>
    <td><a href="#create_repository"><CopyableCode code="create_repository" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a></td>
    <td></td>
    <td>Creates a repository. For more information, see Amazon ECR repositories in the Amazon Elastic Container Registry User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_repository"><CopyableCode code="delete_repository" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a repository. If the repository isn't empty, you must either delete the contents of the repository or use the force option to delete the repository and have Amazon ECR delete all of its contents on your behalf.</td>
</tr>
<tr>
    <td><a href="#batch_check_layer_availability"><CopyableCode code="batch_check_layer_availability" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-layerDigests"><code>layerDigests</code></a></td>
    <td></td>
    <td>Checks the availability of one or more image layers in a repository. When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped. This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.</td>
</tr>
<tr>
    <td><a href="#batch_delete_image"><CopyableCode code="batch_delete_image" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-imageIds"><code>imageIds</code></a></td>
    <td></td>
    <td>Deletes a list of specified images within a repository. Images are specified with either an imageTag or imageDigest. You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository. You can completely delete an image (and all of its tags) by specifying the image's digest in your request.</td>
</tr>
<tr>
    <td><a href="#complete_layer_upload"><CopyableCode code="complete_layer_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-uploadId"><code>uploadId</code></a>, <a href="#parameter-layerDigests"><code>layerDigests</code></a></td>
    <td></td>
    <td>Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a sha256 digest of the image layer for data validation purposes. When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed. This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.</td>
</tr>
<tr>
    <td><a href="#initiate_layer_upload"><CopyableCode code="initiate_layer_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a></td>
    <td></td>
    <td>Notifies Amazon ECR that you intend to upload an image layer. When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action. This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.</td>
</tr>
<tr>
    <td><a href="#upload_layer_part"><CopyableCode code="upload_layer_part" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-repositoryName"><code>repositoryName</code></a>, <a href="#parameter-uploadId"><code>uploadId</code></a>, <a href="#parameter-partFirstByte"><code>partFirstByte</code></a>, <a href="#parameter-partLastByte"><code>partLastByte</code></a>, <a href="#parameter-layerPartBlob"><code>layerPartBlob</code></a></td>
    <td></td>
    <td>Uploads an image layer part to Amazon ECR. When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is called once per each new image layer part. This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.</td>
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
    defaultValue="describe_repositories"
    values={[
        { label: 'describe_repositories', value: 'describe_repositories' }
    ]}
>
<TabItem value="describe_repositories">

Describes image repositories in a registry.

```sql
SELECT
created_at,
encryption_configuration,
image_scanning_configuration,
image_tag_mutability,
image_tag_mutability_exclusion_filters,
registry_id,
repository_arn,
repository_name,
repository_uri
FROM aws.ecr.repositories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_repository"
    values={[
        { label: 'create_repository', value: 'create_repository' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_repository">

Creates a repository. For more information, see Amazon ECR repositories in the Amazon Elastic Container Registry User Guide.

```sql
INSERT INTO aws.ecr.repositories (
registryId,
repositoryName,
tags,
imageTagMutability,
imageTagMutabilityExclusionFilters,
imageScanningConfiguration,
encryptionConfiguration,
region
)
SELECT 
'{{ registryId }}',
'{{ repositoryName }}' /* required */,
'{{ tags }}',
'{{ imageTagMutability }}',
'{{ imageTagMutabilityExclusionFilters }}',
'{{ imageScanningConfiguration }}',
'{{ encryptionConfiguration }}',
'{{ region }}'
RETURNING
repository
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: repositories
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the repositories resource.
    - name: registryId
      value: "{{ registryId }}"
      description: |
        The Amazon Web Services account ID associated with the registry to create the repository. If you do not specify a registry, the default registry is assumed.
    - name: repositoryName
      value: "{{ repositoryName }}"
      description: |
        The name to use for the repository. The repository name may be specified on its own (such as nginx-web-app) or it can be prepended with a namespace to group the repository into a category (such as project-a/nginx-web-app). The repository name must start with a letter and can only contain lowercase letters, numbers, hyphens, underscores, and forward slashes.
    - name: tags
      description: |
        The metadata that you apply to the repository to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: imageTagMutability
      value: "{{ imageTagMutability }}"
      description: |
        The tag mutability setting for the repository. If this parameter is omitted, the default setting of MUTABLE will be used which will allow image tags to be overwritten. If IMMUTABLE is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
      valid_values: ['MUTABLE', 'IMMUTABLE', 'IMMUTABLE_WITH_EXCLUSION', 'MUTABLE_WITH_EXCLUSION']
    - name: imageTagMutabilityExclusionFilters
      description: |
        A list of filters that specify which image tags should be excluded from the repository's image tag mutability setting.
      value:
        - filterType: "{{ filterType }}"
          filter: "{{ filter }}"
    - name: imageScanningConfiguration
      description: |
        The imageScanningConfiguration parameter is being deprecated, in favor of specifying the image scanning configuration at the registry level. For more information, see PutRegistryScanningConfiguration. The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository.
      value:
        scanOnPush: {{ scanOnPush }}
    - name: encryptionConfiguration
      description: |
        The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
      value:
        encryptionType: "{{ encryptionType }}"
        kmsKey: "{{ kmsKey }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_repository"
    values={[
        { label: 'delete_repository', value: 'delete_repository' }
    ]}
>
<TabItem value="delete_repository">

Deletes a repository. If the repository isn't empty, you must either delete the contents of the repository or use the force option to delete the repository and have Amazon ECR delete all of its contents on your behalf.

```sql
DELETE FROM aws.ecr.repositories
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_check_layer_availability"
    values={[
        { label: 'batch_check_layer_availability', value: 'batch_check_layer_availability' },
        { label: 'batch_delete_image', value: 'batch_delete_image' },
        { label: 'complete_layer_upload', value: 'complete_layer_upload' },
        { label: 'initiate_layer_upload', value: 'initiate_layer_upload' },
        { label: 'upload_layer_part', value: 'upload_layer_part' }
    ]}
>
<TabItem value="batch_check_layer_availability">

Checks the availability of one or more image layers in a repository. When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped. This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.

```sql
EXEC aws.ecr.repositories.batch_check_layer_availability 
@region='{{ region }}' --required 
@@json=
'{
"registryId": "{{ registryId }}", 
"repositoryName": "{{ repositoryName }}", 
"layerDigests": "{{ layerDigests }}"
}'
;
```
</TabItem>
<TabItem value="batch_delete_image">

Deletes a list of specified images within a repository. Images are specified with either an imageTag or imageDigest. You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository. You can completely delete an image (and all of its tags) by specifying the image's digest in your request.

```sql
EXEC aws.ecr.repositories.batch_delete_image 
@region='{{ region }}' --required 
@@json=
'{
"registryId": "{{ registryId }}", 
"repositoryName": "{{ repositoryName }}", 
"imageIds": "{{ imageIds }}"
}'
;
```
</TabItem>
<TabItem value="complete_layer_upload">

Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a sha256 digest of the image layer for data validation purposes. When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed. This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.

```sql
EXEC aws.ecr.repositories.complete_layer_upload 
@region='{{ region }}' --required 
@@json=
'{
"registryId": "{{ registryId }}", 
"repositoryName": "{{ repositoryName }}", 
"uploadId": "{{ uploadId }}", 
"layerDigests": "{{ layerDigests }}"
}'
;
```
</TabItem>
<TabItem value="initiate_layer_upload">

Notifies Amazon ECR that you intend to upload an image layer. When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action. This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.

```sql
EXEC aws.ecr.repositories.initiate_layer_upload 
@region='{{ region }}' --required 
@@json=
'{
"registryId": "{{ registryId }}", 
"repositoryName": "{{ repositoryName }}"
}'
;
```
</TabItem>
<TabItem value="upload_layer_part">

Uploads an image layer part to Amazon ECR. When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is called once per each new image layer part. This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the docker CLI to pull, tag, and push images.

```sql
EXEC aws.ecr.repositories.upload_layer_part 
@region='{{ region }}' --required 
@@json=
'{
"registryId": "{{ registryId }}", 
"repositoryName": "{{ repositoryName }}", 
"uploadId": "{{ uploadId }}", 
"partFirstByte": {{ partFirstByte }}, 
"partLastByte": {{ partLastByte }}, 
"layerPartBlob": "{{ layerPartBlob }}"
}'
;
```
</TabItem>
</Tabs>
