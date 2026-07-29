--- 
title: image_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - image_versions
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

Creates, updates, deletes, gets or lists an <code>image_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.image_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_image_version"
    values={[
        { label: 'describe_image_version', value: 'describe_image_version' }
    ]}
>
<TabItem value="describe_image_version">

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
    <td><CopyableCode code="base_image" /></td>
    <td><code>string</code></td>
    <td>The registry path of the container image on which this image version is based. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="container_image" /></td>
    <td><code>string</code></td>
    <td>The registry path of the container image that contains this image version.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>When a create or delete operation fails, the reason for the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="horovod" /></td>
    <td><code>boolean</code></td>
    <td>Indicates Horovod compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="image_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the image the version is based on. (pattern: &lt;code&gt;arn:aws(-&#91;\w&#93;+)*:sagemaker:.+:&#91;0-9&#93;&#123;12&#125;:image/&#91;a-zA-Z0-9&#93;(&#91;-.&#93;?&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="image_version_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the version. (pattern: &lt;code&gt;(arn:aws(-&#91;\w&#93;+)*:sagemaker:.+:&#91;0-9&#93;&#123;12&#125;:image-version/&#91;a-z0-9&#93;(&#91;-.&#93;?&#91;a-z0-9&#93;)*/&#91;0-9&#93;+|None)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="image_version_status" /></td>
    <td><code>string</code></td>
    <td>The status of the version. (CREATING, CREATED, CREATE_FAILED, DELETING, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="job_type" /></td>
    <td><code>string</code></td>
    <td>Indicates SageMaker AI job type compatibility. TRAINING: The image version is compatible with SageMaker AI training jobs. INFERENCE: The image version is compatible with SageMaker AI inference jobs. NOTEBOOK_KERNEL: The image version is compatible with SageMaker AI notebook kernels. (TRAINING, INFERENCE, NOTEBOOK_KERNEL)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the version was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="ml_framework" /></td>
    <td><code>string</code></td>
    <td>The machine learning framework vended in the image version. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;+ ?\d+\.\d+(\.\d+)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="processor" /></td>
    <td><code>string</code></td>
    <td>Indicates CPU or GPU compatibility. CPU: The image version is compatible with CPU. GPU: The image version is compatible with GPU. (CPU, GPU)</td>
</tr>
<tr>
    <td><CopyableCode code="programming_lang" /></td>
    <td><code>string</code></td>
    <td>The supported programming language and its version. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;+ ?\d+\.\d+(\.\d+)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="release_notes" /></td>
    <td><code>string</code></td>
    <td>The maintainer description of the image version. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vendor_guidance" /></td>
    <td><code>string</code></td>
    <td>The stability of the image version specified by the maintainer. NOT_PROVIDED: The maintainers did not provide a status for image version stability. STABLE: The image version is stable. TO_BE_ARCHIVED: The image version is set to be archived. Custom image versions that are set to be archived are automatically archived after three months. ARCHIVED: The image version is archived. Archived image versions are not searchable and are no longer actively supported. (NOT_PROVIDED, STABLE, TO_BE_ARCHIVED, ARCHIVED)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The version number.</td>
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
    <td><a href="#describe_image_version"><CopyableCode code="describe_image_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a version of a SageMaker AI image.</td>
</tr>
<tr>
    <td><a href="#create_image_version"><CopyableCode code="create_image_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BaseImage"><code>BaseImage</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-ImageName"><code>ImageName</code></a></td>
    <td></td>
    <td>Creates a version of the SageMaker AI image specified by ImageName. The version represents the Amazon ECR container image specified by BaseImage.</td>
</tr>
<tr>
    <td><a href="#update_image_version"><CopyableCode code="update_image_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ImageName"><code>ImageName</code></a></td>
    <td></td>
    <td>Updates the properties of a SageMaker AI image version.</td>
</tr>
<tr>
    <td><a href="#delete_image_version"><CopyableCode code="delete_image_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a version of a SageMaker AI image. The container image the version represents isn't deleted.</td>
</tr>
<tr>
    <td><a href="#list_image_versions"><CopyableCode code="list_image_versions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ImageName"><code>ImageName</code></a></td>
    <td></td>
    <td>Lists the versions of a specified image and their properties. The list can be filtered by creation time or modified time.</td>
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
    defaultValue="describe_image_version"
    values={[
        { label: 'describe_image_version', value: 'describe_image_version' }
    ]}
>
<TabItem value="describe_image_version">

Describes a version of a SageMaker AI image.

```sql
SELECT
base_image,
container_image,
creation_time,
failure_reason,
horovod,
image_arn,
image_version_arn,
image_version_status,
job_type,
last_modified_time,
ml_framework,
processor,
programming_lang,
release_notes,
vendor_guidance,
version
FROM aws.sagemaker.image_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_image_version"
    values={[
        { label: 'create_image_version', value: 'create_image_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_image_version">

Creates a version of the SageMaker AI image specified by ImageName. The version represents the Amazon ECR container image specified by BaseImage.

```sql
INSERT INTO aws.sagemaker.image_versions (
BaseImage,
ClientToken,
ImageName,
Aliases,
VendorGuidance,
JobType,
MLFramework,
ProgrammingLang,
Processor,
Horovod,
ReleaseNotes,
region
)
SELECT 
'{{ BaseImage }}' /* required */,
'{{ ClientToken }}' /* required */,
'{{ ImageName }}' /* required */,
'{{ Aliases }}',
'{{ VendorGuidance }}',
'{{ JobType }}',
'{{ MLFramework }}',
'{{ ProgrammingLang }}',
'{{ Processor }}',
{{ Horovod }},
'{{ ReleaseNotes }}',
'{{ region }}'
RETURNING
image_version_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: image_versions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the image_versions resource.
    - name: BaseImage
      value: "{{ BaseImage }}"
      description: |
        The registry path of the container image to use as the starting point for this version. The path is an Amazon ECR URI in the following format: \`<acct-id>\`.dkr.ecr.\`<region>\`.amazonaws.com/<repo-name[:tag] or [@digest]>
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique ID. If not specified, the Amazon Web Services CLI and Amazon Web Services SDKs, such as the SDK for Python (Boto3), add a unique value to the call.
    - name: ImageName
      value: "{{ ImageName }}"
      description: |
        The ImageName of the Image to create a version of.
    - name: Aliases
      value:
        - "{{ Aliases }}"
      description: |
        A list of aliases created with the image version.
    - name: VendorGuidance
      value: "{{ VendorGuidance }}"
      description: |
        The stability of the image version, specified by the maintainer. NOT_PROVIDED: The maintainers did not provide a status for image version stability. STABLE: The image version is stable. TO_BE_ARCHIVED: The image version is set to be archived. Custom image versions that are set to be archived are automatically archived after three months. ARCHIVED: The image version is archived. Archived image versions are not searchable and are no longer actively supported.
      valid_values: ['NOT_PROVIDED', 'STABLE', 'TO_BE_ARCHIVED', 'ARCHIVED']
    - name: JobType
      value: "{{ JobType }}"
      description: |
        Indicates SageMaker AI job type compatibility. TRAINING: The image version is compatible with SageMaker AI training jobs. INFERENCE: The image version is compatible with SageMaker AI inference jobs. NOTEBOOK_KERNEL: The image version is compatible with SageMaker AI notebook kernels.
      valid_values: ['TRAINING', 'INFERENCE', 'NOTEBOOK_KERNEL']
    - name: MLFramework
      value: "{{ MLFramework }}"
      description: |
        The machine learning framework vended in the image version.
    - name: ProgrammingLang
      value: "{{ ProgrammingLang }}"
      description: |
        The supported programming language and its version.
    - name: Processor
      value: "{{ Processor }}"
      description: |
        Indicates CPU or GPU compatibility. CPU: The image version is compatible with CPU. GPU: The image version is compatible with GPU.
      valid_values: ['CPU', 'GPU']
    - name: Horovod
      value: {{ Horovod }}
      description: |
        Indicates Horovod compatibility.
    - name: ReleaseNotes
      value: "{{ ReleaseNotes }}"
      description: |
        The maintainer description of the image version.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_image_version"
    values={[
        { label: 'update_image_version', value: 'update_image_version' }
    ]}
>
<TabItem value="update_image_version">

Updates the properties of a SageMaker AI image version.

```sql
UPDATE aws.sagemaker.image_versions
SET 
ImageName = '{{ ImageName }}',
Alias = '{{ Alias }}',
Version = {{ Version }},
AliasesToAdd = '{{ AliasesToAdd }}',
AliasesToDelete = '{{ AliasesToDelete }}',
VendorGuidance = '{{ VendorGuidance }}',
JobType = '{{ JobType }}',
MLFramework = '{{ MLFramework }}',
ProgrammingLang = '{{ ProgrammingLang }}',
Processor = '{{ Processor }}',
Horovod = {{ Horovod }},
ReleaseNotes = '{{ ReleaseNotes }}'
WHERE 
region = '{{ region }}' --required
AND ImageName = '{{ ImageName }}' --required
RETURNING
image_version_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_image_version"
    values={[
        { label: 'delete_image_version', value: 'delete_image_version' }
    ]}
>
<TabItem value="delete_image_version">

Deletes a version of a SageMaker AI image. The container image the version represents isn't deleted.

```sql
DELETE FROM aws.sagemaker.image_versions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_image_versions"
    values={[
        { label: 'list_image_versions', value: 'list_image_versions' }
    ]}
>
<TabItem value="list_image_versions">

Lists the versions of a specified image and their properties. The list can be filtered by creation time or modified time.

```sql
EXEC aws.sagemaker.image_versions.list_image_versions 
@region='{{ region }}' --required 
@@json=
'{
"CreationTimeAfter": "{{ CreationTimeAfter }}", 
"CreationTimeBefore": "{{ CreationTimeBefore }}", 
"ImageName": "{{ ImageName }}", 
"LastModifiedTimeAfter": "{{ LastModifiedTimeAfter }}", 
"LastModifiedTimeBefore": "{{ LastModifiedTimeBefore }}", 
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}", 
"SortBy": "{{ SortBy }}", 
"SortOrder": "{{ SortOrder }}"
}'
;
```
</TabItem>
</Tabs>
