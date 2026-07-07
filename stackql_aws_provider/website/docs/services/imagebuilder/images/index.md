--- 
title: images
hide_title: false
hide_table_of_contents: false
keywords:
  - images
  - imagebuilder
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_image"
    values={[
        { label: 'get_image', value: 'get_image' },
        { label: 'list_images', value: 'list_images' }
    ]}
>
<TabItem value="get_image">

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
    <td><CopyableCode code="image" /></td>
    <td><code>object</code></td>
    <td>The image object.</td>
</tr>
<tr>
    <td><CopyableCode code="latestVersionReferences" /></td>
    <td><code>object</code></td>
    <td>The resource ARNs with different wildcard variations of semantic versioning.</td>
</tr>
<tr>
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td>The request ID that uniquely identifies this request.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this specific version of an Image Builder image. (pattern: &lt;code&gt;^&#91;-_A-Za-z-0-9&#93;&#91;-_A-Za-z0-9 &#93;&#123;1,126&#125;&#91;-_A-Za-z-0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a specific version of an Image Builder image. Semantic versioning is included in each object's Amazon Resource Name (ARN), at the level that applies to that object as follows: Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are either left off entirely, or they are specified as wildcards, for example: x.x.x. Version ARNs have only the first three nodes: <code>&lt;major&gt;</code>.<code>&lt;minor&gt;</code>.<code>&lt;patch&gt;</code> Build version ARNs have all four nodes, and point to a specific build for a specific version of an object. (pattern: &lt;code&gt;^arn:aws&#91;^:&#93;*:imagebuilder:&#91;^:&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws(?:-&#91;a-z-&#93;+)?):(?:image-recipe|container-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline|lifecycle-policy|workflow\/(?:build|test|distribution))/&#91;a-z0-9-_&#93;+(?:/(?:(?:x|&#91;0-9&#93;+)\.(?:x|&#91;0-9&#93;+)\.(?:x|&#91;0-9&#93;+))(?:/&#91;0-9&#93;+)?)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="buildType" /></td>
    <td><code>string</code></td>
    <td>Indicates the type of build that created this image. The build can be initiated in the following ways: USER_INITIATED – A manual pipeline build request. SCHEDULED – A pipeline build initiated by a cron expression in the Image Builder pipeline, or from EventBridge. IMPORT – A VM import created the image to use as the base image for the recipe. IMPORT_ISO – An ISO disk import created the image. (USER_INITIATED, SCHEDULED, IMPORT, IMPORT_ISO)</td>
</tr>
<tr>
    <td><CopyableCode code="dateCreated" /></td>
    <td><code>string</code></td>
    <td>The date on which this specific version of the Image Builder image was created.</td>
</tr>
<tr>
    <td><CopyableCode code="imageSource" /></td>
    <td><code>string</code></td>
    <td>The origin of the base image that Image Builder used to build this image. (AMAZON_MANAGED, AWS_MARKETPLACE, IMPORTED, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="osVersion" /></td>
    <td><code>string</code></td>
    <td>The operating system version of the Amazon EC2 build instance. For example, Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the image version.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The operating system platform of the image version, for example "Windows" or "Linux". (Windows, Linux, macOS)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Specifies whether this image produces an AMI or a container image. (AMI, DOCKER)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Details for a specific version of an Image Builder image. This version follows the semantic version syntax. The semantic version has four nodes: <code>&lt;major&gt;</code>.<code>&lt;minor&gt;</code>.<code>&lt;patch&gt;</code>/<code>&lt;build&gt;</code>. You can assign values for the first three, and can filter on all of them. Assignment: For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node. Patterns: You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01. Filtering: With semantic versioning, you have the flexibility to use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. (pattern: &lt;code&gt;^&#91;0-9&#93;+\.&#91;0-9&#93;+\.&#91;0-9&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#get_image"><CopyableCode code="get_image" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-imageBuildVersionArn"><code>imageBuildVersionArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an image.</td>
</tr>
<tr>
    <td><a href="#list_images"><CopyableCode code="list_images" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results.</td>
</tr>
<tr>
    <td><a href="#create_image"><CopyableCode code="create_image" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-infrastructureConfigurationArn"><code>infrastructureConfigurationArn</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.</td>
</tr>
<tr>
    <td><a href="#delete_image"><CopyableCode code="delete_image" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-imageBuildVersionArn"><code>imageBuildVersionArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands. To deregister an EC2 Linux AMI, see Deregister your Linux AMI in the Amazon EC2 User Guide . To deregister an EC2 Windows AMI, see Deregister your Windows AMI in the Amazon EC2 Windows Guide . To delete a container image from Amazon ECR, see Deleting an image in the Amazon ECR User Guide.</td>
</tr>
<tr>
    <td><a href="#cancel_image_creation"><CopyableCode code="cancel_image_creation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-imageBuildVersionArn"><code>imageBuildVersionArn</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.</td>
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
<tr id="parameter-imageBuildVersionArn">
    <td><CopyableCode code="imageBuildVersionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Image Builder image resource to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_image"
    values={[
        { label: 'get_image', value: 'get_image' },
        { label: 'list_images', value: 'list_images' }
    ]}
>
<TabItem value="get_image">

Gets an image.

```sql
SELECT
image,
latestVersionReferences,
requestId
FROM aws.imagebuilder.images
WHERE imageBuildVersionArn = '{{ imageBuildVersionArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_images">

Returns the list of images that you have access to. Newly created images can take up to two minutes to appear in the ListImages API Results.

```sql
SELECT
name,
arn,
buildType,
dateCreated,
imageSource,
osVersion,
owner,
platform,
type_,
version
FROM aws.imagebuilder.images
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

Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.

```sql
INSERT INTO aws.imagebuilder.images (
imageRecipeArn,
containerRecipeArn,
distributionConfigurationArn,
infrastructureConfigurationArn,
imageTestsConfiguration,
enhancedImageMetadataEnabled,
tags,
clientToken,
imageScanningConfiguration,
workflows,
executionRole,
loggingConfiguration,
region
)
SELECT 
'{{ imageRecipeArn }}',
'{{ containerRecipeArn }}',
'{{ distributionConfigurationArn }}',
'{{ infrastructureConfigurationArn }}' /* required */,
'{{ imageTestsConfiguration }}',
{{ enhancedImageMetadataEnabled }},
'{{ tags }}',
'{{ clientToken }}' /* required */,
'{{ imageScanningConfiguration }}',
'{{ workflows }}',
'{{ executionRole }}',
'{{ loggingConfiguration }}',
'{{ region }}'
RETURNING
clientToken,
imageBuildVersionArn,
latestVersionReferences,
requestId
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
    - name: imageRecipeArn
      value: "{{ imageRecipeArn }}"
    - name: containerRecipeArn
      value: "{{ containerRecipeArn }}"
    - name: distributionConfigurationArn
      value: "{{ distributionConfigurationArn }}"
    - name: infrastructureConfigurationArn
      value: "{{ infrastructureConfigurationArn }}"
    - name: imageTestsConfiguration
      description: |
        Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.
      value:
        imageTestsEnabled: {{ imageTestsEnabled }}
        timeoutMinutes: {{ timeoutMinutes }}
    - name: enhancedImageMetadataEnabled
      value: {{ enhancedImageMetadataEnabled }}
    - name: tags
      value: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: imageScanningConfiguration
      description: |
        Contains settings for Image Builder image resource and container image scans.
      value:
        imageScanningEnabled: {{ imageScanningEnabled }}
        ecrConfiguration:
          repositoryName: "{{ repositoryName }}"
          containerTags:
            - "{{ containerTags }}"
    - name: workflows
      value:
        - workflowArn: "{{ workflowArn }}"
          parameters: "{{ parameters }}"
          parallelGroup: "{{ parallelGroup }}"
          onFailure: "{{ onFailure }}"
    - name: executionRole
      value: "{{ executionRole }}"
    - name: loggingConfiguration
      description: |
        The logging configuration that's defined for the image. Image Builder uses the defined settings to direct execution log output during image creation.
      value:
        logGroupName: "{{ logGroupName }}"
`}</CodeBlock>

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

Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images that are created during the image build process. You must clean those up separately, using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands. To deregister an EC2 Linux AMI, see Deregister your Linux AMI in the Amazon EC2 User Guide . To deregister an EC2 Windows AMI, see Deregister your Windows AMI in the Amazon EC2 Windows Guide . To delete a container image from Amazon ECR, see Deleting an image in the Amazon ECR User Guide.

```sql
DELETE FROM aws.imagebuilder.images
WHERE imageBuildVersionArn = '{{ imageBuildVersionArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_image_creation"
    values={[
        { label: 'cancel_image_creation', value: 'cancel_image_creation' }
    ]}
>
<TabItem value="cancel_image_creation">

CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.

```sql
EXEC aws.imagebuilder.images.cancel_image_creation 
@region='{{ region }}' --required 
@@json=
'{
"imageBuildVersionArn": "{{ imageBuildVersionArn }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
