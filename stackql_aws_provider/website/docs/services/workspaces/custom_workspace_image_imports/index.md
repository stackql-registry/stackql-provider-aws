--- 
title: custom_workspace_image_imports
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_workspace_image_imports
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

Creates, updates, deletes, gets or lists a <code>custom_workspace_image_imports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_workspace_image_imports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.custom_workspace_image_imports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_custom_workspace_image_import"
    values={[
        { label: 'describe_custom_workspace_image_import', value: 'describe_custom_workspace_image_import' }
    ]}
>
<TabItem value="describe_custom_workspace_image_import">

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
    <td><CopyableCode code="Created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the WorkSpace image import was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorDetails" /></td>
    <td><code>array</code></td>
    <td>Describes in-depth details about the error. These details include the possible causes of the error and troubleshooting information.</td>
</tr>
<tr>
    <td><CopyableCode code="ImageBuilderInstanceId" /></td>
    <td><code>string</code></td>
    <td>The image builder instance ID of the WorkSpace image.</td>
</tr>
<tr>
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the WorkSpace image. (pattern: &lt;code&gt;wsi-&#91;0-9a-z&#93;&#123;9,63&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ImageSource" /></td>
    <td><code>object</code></td>
    <td>Describes the image import source.</td>
</tr>
<tr>
    <td><CopyableCode code="InfrastructureConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The infrastructure configuration ARN that specifies how the WorkSpace image is built. (pattern: &lt;code&gt;^arn:aws&#91;^:&#93;*:imagebuilder:&#91;^:&#93;+:(?:&#91;0-9&#93;&#123;12&#125;|aws):infrastructure-configuration/&#91;a-z0-9-_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the WorkSpace image import was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="ProgressPercentage" /></td>
    <td><code>integer</code></td>
    <td>The estimated progress percentage of the WorkSpace image import workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the WorkSpace image. (PENDING, IN_PROGRESS, PROCESSING_SOURCE_IMAGE, IMAGE_TESTING_START, UPDATING_OPERATING_SYSTEM, IMAGE_COMPATIBILITY_CHECKING, IMAGE_TESTING_GENERALIZATION, CREATING_TEST_INSTANCE, INSTALLING_COMPONENTS, GENERALIZING, VALIDATING, PUBLISHING, COMPLETED, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="StateMessage" /></td>
    <td><code>string</code></td>
    <td>The state message of the WorkSpace image import workflow.</td>
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
    <td><a href="#describe_custom_workspace_image_import"><CopyableCode code="describe_custom_workspace_image_import" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a WorkSpace BYOL image being imported via ImportCustomWorkspaceImage.</td>
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
    defaultValue="describe_custom_workspace_image_import"
    values={[
        { label: 'describe_custom_workspace_image_import', value: 'describe_custom_workspace_image_import' }
    ]}
>
<TabItem value="describe_custom_workspace_image_import">

Retrieves information about a WorkSpace BYOL image being imported via ImportCustomWorkspaceImage.

```sql
SELECT
Created,
ErrorDetails,
ImageBuilderInstanceId,
ImageId,
ImageSource,
InfrastructureConfigurationArn,
LastUpdatedTime,
ProgressPercentage,
State,
StateMessage
FROM aws.workspaces.custom_workspace_image_imports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
