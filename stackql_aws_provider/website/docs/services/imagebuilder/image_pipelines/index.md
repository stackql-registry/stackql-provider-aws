--- 
title: image_pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - image_pipelines
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

Creates, updates, deletes, gets or lists an <code>image_pipelines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_pipelines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.image_pipelines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_image_pipeline"
    values={[
        { label: 'get_image_pipeline', value: 'get_image_pipeline' },
        { label: 'list_image_pipelines', value: 'list_image_pipelines' }
    ]}
>
<TabItem value="get_image_pipeline">

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
    <td><CopyableCode code="imagePipeline" /></td>
    <td><code>object</code></td>
    <td>The image pipeline object.</td>
</tr>
<tr>
    <td><CopyableCode code="requestId" /></td>
    <td><code>string</code></td>
    <td>The request ID that uniquely identifies this request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_image_pipelines">

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
    <td>The name of the image pipeline. (pattern: &lt;code&gt;^&#91;-_A-Za-z-0-9&#93;&#91;-_A-Za-z0-9 &#93;&#123;1,126&#125;&#91;-_A-Za-z-0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the image pipeline. (pattern: &lt;code&gt;^arn:aws&#91;^:&#93;*:imagebuilder:&#91;^:&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws(?:-&#91;a-z-&#93;+)?):(?:image-recipe|container-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline|lifecycle-policy|workflow\/(?:build|test|distribution))/&#91;a-z0-9-_&#93;+(?:/(?:(?:x|&#91;0-9&#93;+)\.(?:x|&#91;0-9&#93;+)\.(?:x|&#91;0-9&#93;+))(?:/&#91;0-9&#93;+)?)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="consecutiveFailures" /></td>
    <td><code>integer</code></td>
    <td>Image Builder tracks the number of consecutive failures for scheduled pipeline executions and takes one of the following actions each time it runs on a schedule: If the pipeline execution is successful, the number of consecutive failures resets to zero. If the pipeline execution fails, Image Builder increments the number of consecutive failures. If the failure count exceeds the limit defined in the AutoDisablePolicy, Image Builder disables the pipeline. The consecutive failure count is also reset to zero under the following conditions: The pipeline runs manually and succeeds. The pipeline configuration is updated. If the pipeline runs manually and fails, the count remains the same. The next scheduled run continues to increment where it left off before.</td>
</tr>
<tr>
    <td><CopyableCode code="containerRecipeArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the container recipe that is used for this pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="dateCreated" /></td>
    <td><code>string</code></td>
    <td>The date on which this image pipeline was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dateLastRun" /></td>
    <td><code>string</code></td>
    <td>This is no longer supported, and does not return a value.</td>
</tr>
<tr>
    <td><CopyableCode code="dateNextRun" /></td>
    <td><code>string</code></td>
    <td>The next date when the pipeline is scheduled to run.</td>
</tr>
<tr>
    <td><CopyableCode code="dateUpdated" /></td>
    <td><code>string</code></td>
    <td>The date on which this image pipeline was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the image pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="distributionConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="enhancedImageMetadataEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.</td>
</tr>
<tr>
    <td><CopyableCode code="executionRole" /></td>
    <td><code>string</code></td>
    <td>The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions. (pattern: &lt;code&gt;^(?:arn:aws(?:-&#91;a-z&#93;+)*:iam::&#91;0-9&#93;&#123;12&#125;:role/)?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="imageRecipeArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the image recipe associated with this image pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="imageScanningConfiguration" /></td>
    <td><code>object</code></td>
    <td>Contains settings for Image Builder image resource and container image scans.</td>
</tr>
<tr>
    <td><CopyableCode code="imageTags" /></td>
    <td><code>object</code></td>
    <td>The tags to be applied to the images produced by this pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="imageTestsConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.</td>
</tr>
<tr>
    <td><CopyableCode code="infrastructureConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="lastRunStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the last image that this pipeline built, such as BUILDING, TESTING, FAILED, or AVAILABLE. (PENDING, CREATING, BUILDING, TESTING, DISTRIBUTING, INTEGRATING, AVAILABLE, CANCELLED, FAILED, DEPRECATED, DELETED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="loggingConfiguration" /></td>
    <td><code>object</code></td>
    <td>The logging configuration that's defined for pipeline execution.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The platform of the image pipeline. (Windows, Linux, macOS)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>object</code></td>
    <td>A schedule configures when and how often a pipeline will automatically create a new image.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the image pipeline. (DISABLED, ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags of this image pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="workflows" /></td>
    <td><code>array</code></td>
    <td>Contains the workflows that run for the image pipeline.</td>
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
    <td><a href="#get_image_pipeline"><CopyableCode code="get_image_pipeline" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-imagePipelineArn"><code>imagePipelineArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an image pipeline.</td>
</tr>
<tr>
    <td><a href="#list_image_pipelines"><CopyableCode code="list_image_pipelines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of image pipelines.</td>
</tr>
<tr>
    <td><a href="#create_image_pipeline"><CopyableCode code="create_image_pipeline" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-infrastructureConfigurationArn"><code>infrastructureConfigurationArn</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.</td>
</tr>
<tr>
    <td><a href="#update_image_pipeline"><CopyableCode code="update_image_pipeline" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-imagePipelineArn"><code>imagePipelineArn</code></a>, <a href="#parameter-infrastructureConfigurationArn"><code>infrastructureConfigurationArn</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images. You must specify exactly one recipe for your image, using either a containerRecipeArn or an imageRecipeArn. UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</td>
</tr>
<tr>
    <td><a href="#delete_image_pipeline"><CopyableCode code="delete_image_pipeline" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-imagePipelineArn"><code>imagePipelineArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an image pipeline.</td>
</tr>
<tr>
    <td><a href="#start_image_pipeline_execution"><CopyableCode code="start_image_pipeline_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-imagePipelineArn"><code>imagePipelineArn</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>Manually triggers a pipeline to create an image.</td>
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
<tr id="parameter-imagePipelineArn">
    <td><CopyableCode code="imagePipelineArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the image pipeline to delete.</td>
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
    defaultValue="get_image_pipeline"
    values={[
        { label: 'get_image_pipeline', value: 'get_image_pipeline' },
        { label: 'list_image_pipelines', value: 'list_image_pipelines' }
    ]}
>
<TabItem value="get_image_pipeline">

Gets an image pipeline.

```sql
SELECT
imagePipeline,
requestId
FROM aws.imagebuilder.image_pipelines
WHERE imagePipelineArn = '{{ imagePipelineArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_image_pipelines">

Returns a list of image pipelines.

```sql
SELECT
name,
arn,
consecutiveFailures,
containerRecipeArn,
dateCreated,
dateLastRun,
dateNextRun,
dateUpdated,
description,
distributionConfigurationArn,
enhancedImageMetadataEnabled,
executionRole,
imageRecipeArn,
imageScanningConfiguration,
imageTags,
imageTestsConfiguration,
infrastructureConfigurationArn,
lastRunStatus,
loggingConfiguration,
platform,
schedule,
status,
tags,
workflows
FROM aws.imagebuilder.image_pipelines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_image_pipeline"
    values={[
        { label: 'create_image_pipeline', value: 'create_image_pipeline' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_image_pipeline">

Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.

```sql
INSERT INTO aws.imagebuilder.image_pipelines (
name,
description,
imageRecipeArn,
containerRecipeArn,
infrastructureConfigurationArn,
distributionConfigurationArn,
imageTestsConfiguration,
enhancedImageMetadataEnabled,
schedule,
status,
tags,
imageTags,
clientToken,
imageScanningConfiguration,
workflows,
executionRole,
loggingConfiguration,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ imageRecipeArn }}',
'{{ containerRecipeArn }}',
'{{ infrastructureConfigurationArn }}' /* required */,
'{{ distributionConfigurationArn }}',
'{{ imageTestsConfiguration }}',
{{ enhancedImageMetadataEnabled }},
'{{ schedule }}',
'{{ status }}',
'{{ tags }}',
'{{ imageTags }}',
'{{ clientToken }}' /* required */,
'{{ imageScanningConfiguration }}',
'{{ workflows }}',
'{{ executionRole }}',
'{{ loggingConfiguration }}',
'{{ region }}'
RETURNING
clientToken,
imagePipelineArn,
requestId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: image_pipelines
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the image_pipelines resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: imageRecipeArn
      value: "{{ imageRecipeArn }}"
    - name: containerRecipeArn
      value: "{{ containerRecipeArn }}"
    - name: infrastructureConfigurationArn
      value: "{{ infrastructureConfigurationArn }}"
    - name: distributionConfigurationArn
      value: "{{ distributionConfigurationArn }}"
    - name: imageTestsConfiguration
      description: |
        Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.
      value:
        imageTestsEnabled: {{ imageTestsEnabled }}
        timeoutMinutes: {{ timeoutMinutes }}
    - name: enhancedImageMetadataEnabled
      value: {{ enhancedImageMetadataEnabled }}
    - name: schedule
      description: |
        A schedule configures when and how often a pipeline will automatically create a new image.
      value:
        scheduleExpression: "{{ scheduleExpression }}"
        timezone: "{{ timezone }}"
        pipelineExecutionStartCondition: "{{ pipelineExecutionStartCondition }}"
        autoDisablePolicy:
          failureCount: {{ failureCount }}
    - name: status
      value: "{{ status }}"
      valid_values: ['DISABLED', 'ENABLED']
    - name: tags
      value: "{{ tags }}"
    - name: imageTags
      value: "{{ imageTags }}"
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
        The logging configuration that's defined for pipeline execution.
      value:
        imageLogGroupName: "{{ imageLogGroupName }}"
        pipelineLogGroupName: "{{ pipelineLogGroupName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_image_pipeline"
    values={[
        { label: 'update_image_pipeline', value: 'update_image_pipeline' }
    ]}
>
<TabItem value="update_image_pipeline">

Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images. You must specify exactly one recipe for your image, using either a containerRecipeArn or an imageRecipeArn. UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.

```sql
UPDATE aws.imagebuilder.image_pipelines
SET 
imagePipelineArn = '{{ imagePipelineArn }}',
description = '{{ description }}',
imageRecipeArn = '{{ imageRecipeArn }}',
containerRecipeArn = '{{ containerRecipeArn }}',
infrastructureConfigurationArn = '{{ infrastructureConfigurationArn }}',
distributionConfigurationArn = '{{ distributionConfigurationArn }}',
imageTestsConfiguration = '{{ imageTestsConfiguration }}',
enhancedImageMetadataEnabled = {{ enhancedImageMetadataEnabled }},
schedule = '{{ schedule }}',
status = '{{ status }}',
clientToken = '{{ clientToken }}',
imageScanningConfiguration = '{{ imageScanningConfiguration }}',
workflows = '{{ workflows }}',
loggingConfiguration = '{{ loggingConfiguration }}',
executionRole = '{{ executionRole }}',
imageTags = '{{ imageTags }}'
WHERE 
region = '{{ region }}' --required
AND imagePipelineArn = '{{ imagePipelineArn }}' --required
AND infrastructureConfigurationArn = '{{ infrastructureConfigurationArn }}' --required
AND clientToken = '{{ clientToken }}' --required
RETURNING
clientToken,
imagePipelineArn,
requestId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_image_pipeline"
    values={[
        { label: 'delete_image_pipeline', value: 'delete_image_pipeline' }
    ]}
>
<TabItem value="delete_image_pipeline">

Deletes an image pipeline.

```sql
DELETE FROM aws.imagebuilder.image_pipelines
WHERE imagePipelineArn = '{{ imagePipelineArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_image_pipeline_execution"
    values={[
        { label: 'start_image_pipeline_execution', value: 'start_image_pipeline_execution' }
    ]}
>
<TabItem value="start_image_pipeline_execution">

Manually triggers a pipeline to create an image.

```sql
EXEC aws.imagebuilder.image_pipelines.start_image_pipeline_execution 
@region='{{ region }}' --required 
@@json=
'{
"imagePipelineArn": "{{ imagePipelineArn }}", 
"clientToken": "{{ clientToken }}", 
"tags": "{{ tags }}"
}'
;
```
</TabItem>
</Tabs>
