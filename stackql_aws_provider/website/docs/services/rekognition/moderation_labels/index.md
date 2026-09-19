--- 
title: moderation_labels
hide_title: false
hide_table_of_contents: false
keywords:
  - moderation_labels
  - rekognition
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

Creates, updates, deletes, gets or lists a <code>moderation_labels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="moderation_labels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.moderation_labels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#detect_moderation_labels"><CopyableCode code="detect_moderation_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Image"><code>Image</code></a></td>
    <td></td>
    <td>Detects unsafe content in a specified JPEG or PNG format image. Use DetectModerationLabels to moderate images depending on your requirements. For example, you might want to filter images that contain nudity, but not images containing suggestive content. To filter images, use the labels returned by DetectModerationLabels to determine which types of content are appropriate. For information about moderation labels, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide. You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. You can specify an adapter to use when retrieving label predictions by providing a ProjectVersionArn to the ProjectVersion argument.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="detect_moderation_labels"
    values={[
        { label: 'detect_moderation_labels', value: 'detect_moderation_labels' }
    ]}
>
<TabItem value="detect_moderation_labels">

Detects unsafe content in a specified JPEG or PNG format image. Use DetectModerationLabels to moderate images depending on your requirements. For example, you might want to filter images that contain nudity, but not images containing suggestive content. To filter images, use the labels returned by DetectModerationLabels to determine which types of content are appropriate. For information about moderation labels, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide. You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. You can specify an adapter to use when retrieving label predictions by providing a ProjectVersionArn to the ProjectVersion argument.

```sql
EXEC aws.rekognition.moderation_labels.detect_moderation_labels 
@region='{{ region }}' --required 
@@json=
'{
"Image": "{{ Image }}", 
"MinConfidence": {{ MinConfidence }}, 
"HumanLoopConfig": "{{ HumanLoopConfig }}", 
"ProjectVersion": "{{ ProjectVersion }}"
}'
;
```
</TabItem>
</Tabs>
