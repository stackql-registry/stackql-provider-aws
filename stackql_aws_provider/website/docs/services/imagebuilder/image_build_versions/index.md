--- 
title: image_build_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - image_build_versions
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

Creates, updates, deletes, gets or lists an <code>image_build_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_build_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.image_build_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_image_build_versions"
    values={[
        { label: 'list_image_build_versions', value: 'list_image_build_versions' }
    ]}
>
<TabItem value="list_image_build_versions">

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
    <td><CopyableCode code="build_type" /></td>
    <td><code>string</code></td>
    <td>Indicates the type of build that created this image. The build can be initiated in the following ways: USER_INITIATED – A manual pipeline build request. SCHEDULED – A pipeline build initiated by a cron expression in the Image Builder pipeline, or from EventBridge. IMPORT – A VM import created the image to use as the base image for the recipe. IMPORT_ISO – An ISO disk import created the image. (USER_INITIATED, SCHEDULED, IMPORT, IMPORT_ISO)</td>
</tr>
<tr>
    <td><CopyableCode code="date_created" /></td>
    <td><code>string</code></td>
    <td>The date on which Image Builder created this image.</td>
</tr>
<tr>
    <td><CopyableCode code="deprecation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when deprecation occurs for an image resource. This can be a past or future date.</td>
</tr>
<tr>
    <td><CopyableCode code="image_source" /></td>
    <td><code>string</code></td>
    <td>The origin of the base image that Image Builder used to build this image. (AMAZON_MANAGED, AWS_MARKETPLACE, IMPORTED, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_execution_id" /></td>
    <td><code>string</code></td>
    <td>Identifies the last runtime instance of the lifecycle policy to take action on the image. (pattern: &lt;code&gt;^lce-&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="logging_configuration" /></td>
    <td><code>object</code></td>
    <td>The logging configuration that's defined for the image. Image Builder uses the defined settings to direct execution log output during image creation.</td>
</tr>
<tr>
    <td><CopyableCode code="os_version" /></td>
    <td><code>string</code></td>
    <td>The operating system version of the instances that launch from this image. For example, Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019.</td>
</tr>
<tr>
    <td><CopyableCode code="output_resources" /></td>
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
    <td><a href="#list_image_build_versions"><CopyableCode code="list_image_build_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of image build versions.</td>
</tr>
<tr>
    <td><a href="#retry_image"><CopyableCode code="retry_image" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-imageBuildVersionArn"><code>imageBuildVersionArn</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td></td>
    <td>RetryImage retries an image distribution without rebuilding the image.</td>
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
    defaultValue="list_image_build_versions"
    values={[
        { label: 'list_image_build_versions', value: 'list_image_build_versions' }
    ]}
>
<TabItem value="list_image_build_versions">

Returns a list of image build versions.

```sql
SELECT
name,
arn,
build_type,
date_created,
deprecation_time,
image_source,
lifecycle_execution_id,
logging_configuration,
os_version,
output_resources,
owner,
platform,
state,
tags,
type_,
version
FROM aws.imagebuilder.image_build_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="retry_image"
    values={[
        { label: 'retry_image', value: 'retry_image' }
    ]}
>
<TabItem value="retry_image">

RetryImage retries an image distribution without rebuilding the image.

```sql
EXEC aws.imagebuilder.image_build_versions.retry_image 
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
