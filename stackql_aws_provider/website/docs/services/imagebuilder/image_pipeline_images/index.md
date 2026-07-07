--- 
title: image_pipeline_images
hide_title: false
hide_table_of_contents: false
keywords:
  - image_pipeline_images
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

Creates, updates, deletes, gets or lists an <code>image_pipeline_images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_pipeline_images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.image_pipeline_images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_image_pipeline_images"
    values={[
        { label: 'list_image_pipeline_images', value: 'list_image_pipeline_images' }
    ]}
>
<TabItem value="list_image_pipeline_images">

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
    <td>The name of the image. (pattern: &lt;code&gt;^&#91;-_A-Za-z-0-9&#93;&#91;-_A-Za-z0-9 &#93;&#123;1,126&#125;&#91;-_A-Za-z-0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the image. (pattern: &lt;code&gt;^arn:aws&#91;^:&#93;*:imagebuilder:&#91;^:&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws(?:-&#91;a-z-&#93;+)?):(?:image-recipe|container-recipe|infrastructure-configuration|distribution-configuration|component|image|image-pipeline|lifecycle-policy|workflow\/(?:build|test|distribution))/&#91;a-z0-9-_&#93;+(?:/(?:(?:x|&#91;0-9&#93;+)\.(?:x|&#91;0-9&#93;+)\.(?:x|&#91;0-9&#93;+))(?:/&#91;0-9&#93;+)?)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="buildType" /></td>
    <td><code>string</code></td>
    <td>Indicates the type of build that created this image. The build can be initiated in the following ways: USER_INITIATED – A manual pipeline build request. SCHEDULED – A pipeline build initiated by a cron expression in the Image Builder pipeline, or from EventBridge. IMPORT – A VM import created the image to use as the base image for the recipe. IMPORT_ISO – An ISO disk import created the image. (USER_INITIATED, SCHEDULED, IMPORT, IMPORT_ISO)</td>
</tr>
<tr>
    <td><CopyableCode code="dateCreated" /></td>
    <td><code>string</code></td>
    <td>The date on which Image Builder created this image.</td>
</tr>
<tr>
    <td><CopyableCode code="deprecationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when deprecation occurs for an image resource. This can be a past or future date.</td>
</tr>
<tr>
    <td><CopyableCode code="imageSource" /></td>
    <td><code>string</code></td>
    <td>The origin of the base image that Image Builder used to build this image. (AMAZON_MANAGED, AWS_MARKETPLACE, IMPORTED, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleExecutionId" /></td>
    <td><code>string</code></td>
    <td>Identifies the last runtime instance of the lifecycle policy to take action on the image. (pattern: &lt;code&gt;^lce-&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="loggingConfiguration" /></td>
    <td><code>object</code></td>
    <td>The logging configuration that's defined for the image. Image Builder uses the defined settings to direct execution log output during image creation.</td>
</tr>
<tr>
    <td><CopyableCode code="osVersion" /></td>
    <td><code>string</code></td>
    <td>The operating system version of the instances that launch from this image. For example, Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019.</td>
</tr>
<tr>
    <td><CopyableCode code="outputResources" /></td>
    <td><code>object</code></td>
    <td>The output resources that Image Builder produced when it created this image.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the image.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The image operating system platform, such as Linux or Windows. (Windows, Linux, macOS)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>object</code></td>
    <td>Image status and the reason for that status.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that apply to this image.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Specifies whether this image produces an AMI or a container image. (AMI, DOCKER)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the image. (pattern: &lt;code&gt;^&#91;0-9&#93;+\.&#91;0-9&#93;+\.&#91;0-9&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#list_image_pipeline_images"><CopyableCode code="list_image_pipeline_images" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of images created by the specified pipeline.</td>
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
    defaultValue="list_image_pipeline_images"
    values={[
        { label: 'list_image_pipeline_images', value: 'list_image_pipeline_images' }
    ]}
>
<TabItem value="list_image_pipeline_images">

Returns a list of images created by the specified pipeline.

```sql
SELECT
name,
arn,
buildType,
dateCreated,
deprecationTime,
imageSource,
lifecycleExecutionId,
loggingConfiguration,
osVersion,
outputResources,
owner,
platform,
state,
tags,
type_,
version
FROM aws.imagebuilder.image_pipeline_images
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
