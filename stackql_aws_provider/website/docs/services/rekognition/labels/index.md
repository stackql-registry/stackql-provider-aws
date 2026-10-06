--- 
title: labels
hide_title: false
hide_table_of_contents: false
keywords:
  - labels
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

Creates, updates, deletes, gets or lists a <code>labels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="labels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.labels" /></td></tr>
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
    <td><a href="#detect_labels"><CopyableCode code="detect_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Image"><code>Image</code></a></td>
    <td></td>
    <td>Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like landscape, evening, and nature. For an example, see Analyzing images stored in an Amazon S3 bucket in the Amazon Rekognition Developer Guide. You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. Optional Parameters You can specify one or both of the GENERAL_LABELS and IMAGE_PROPERTIES feature types when calling the DetectLabels API. Including GENERAL_LABELS will ensure the response includes the labels detected in the input image, while including IMAGE_PROPERTIES will ensure the response includes information about the image quality and color. When using GENERAL_LABELS and/or IMAGE_PROPERTIES you can provide filtering criteria to the Settings parameter. You can filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive filters, or a combination of inclusive and exclusive filters. For more information on filtering see Detecting Labels in an Image. When getting labels, you can specify MinConfidence to control the confidence threshold for the labels returned. The default is 55%. You can also add the MaxLabels parameter to limit the number of labels returned. The default and upper limit is 1000 labels. These arguments are only valid when supplying GENERAL_LABELS as a feature type. Response Elements For each object, scene, and concept the API returns one or more labels. The API returns the following types of information about labels: Name - The name of the detected label. Confidence - The level of confidence in the label assigned to a detected object. Parents - The ancestor labels for a detected label. DetectLabels returns a hierarchical taxonomy of detected labels. For example, a detected car might be assigned the label car. The label car has two parent labels: Vehicle (its parent) and Transportation (its grandparent). The response includes the all ancestors for a label, where every ancestor is a unique label. In the previous example, Car, Vehicle, and Transportation are returned as unique labels in the response. Aliases - Possible Aliases for the label. Categories - The label categories that the detected label belongs to. BoundingBox — Bounding boxes are described for all instances of detected common object labels, returned in an array of Instance objects. An Instance object contains a BoundingBox object, describing the location of the label on the input image. It also includes the confidence for the accuracy of the detected bounding box. The API returns the following information regarding the image, as part of the ImageProperties structure: Quality - Information about the Sharpness, Brightness, and Contrast of the input image, scored between 0 to 100. Image quality is returned for the entire image, as well as the background and the foreground. Dominant Color - An array of the dominant colors in the image. Foreground - Information about the sharpness, brightness, and dominant colors of the input image’s foreground. Background - Information about the sharpness, brightness, and dominant colors of the input image’s background. The list of returned labels will include at least one label for every detected object, along with information about that label. In the following example, suppose the input image has a lighthouse, the sea, and a rock. The response includes all three labels, one for each object, as well as the confidence in the label: &#123;Name: lighthouse, Confidence: 98.4629&#125; &#123;Name: rock,Confidence: 79.2097&#125; &#123;Name: sea,Confidence: 75.061&#125; The list of labels can include multiple labels for the same object. For example, if the input image shows a flower (for example, a tulip), the operation might return the following three labels. &#123;Name: flower,Confidence: 99.0562&#125; &#123;Name: plant,Confidence: 99.0562&#125; &#123;Name: tulip,Confidence: 99.0562&#125; In this example, the detection algorithm more precisely identifies the flower as a tulip. If the object detected is a person, the operation doesn't provide the same facial details that the DetectFaces operation provides. This is a stateless API operation that doesn't return any data. This operation requires permissions to perform the rekognition:DetectLabels action.</td>
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
    defaultValue="detect_labels"
    values={[
        { label: 'detect_labels', value: 'detect_labels' }
    ]}
>
<TabItem value="detect_labels">

Detects instances of real-world entities within an image (JPEG or PNG) provided as input. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like landscape, evening, and nature. For an example, see Analyzing images stored in an Amazon S3 bucket in the Amazon Rekognition Developer Guide. You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. Optional Parameters You can specify one or both of the GENERAL_LABELS and IMAGE_PROPERTIES feature types when calling the DetectLabels API. Including GENERAL_LABELS will ensure the response includes the labels detected in the input image, while including IMAGE_PROPERTIES will ensure the response includes information about the image quality and color. When using GENERAL_LABELS and/or IMAGE_PROPERTIES you can provide filtering criteria to the Settings parameter. You can filter with sets of individual labels or with label categories. You can specify inclusive filters, exclusive filters, or a combination of inclusive and exclusive filters. For more information on filtering see Detecting Labels in an Image. When getting labels, you can specify MinConfidence to control the confidence threshold for the labels returned. The default is 55%. You can also add the MaxLabels parameter to limit the number of labels returned. The default and upper limit is 1000 labels. These arguments are only valid when supplying GENERAL_LABELS as a feature type. Response Elements For each object, scene, and concept the API returns one or more labels. The API returns the following types of information about labels: Name - The name of the detected label. Confidence - The level of confidence in the label assigned to a detected object. Parents - The ancestor labels for a detected label. DetectLabels returns a hierarchical taxonomy of detected labels. For example, a detected car might be assigned the label car. The label car has two parent labels: Vehicle (its parent) and Transportation (its grandparent). The response includes the all ancestors for a label, where every ancestor is a unique label. In the previous example, Car, Vehicle, and Transportation are returned as unique labels in the response. Aliases - Possible Aliases for the label. Categories - The label categories that the detected label belongs to. BoundingBox — Bounding boxes are described for all instances of detected common object labels, returned in an array of Instance objects. An Instance object contains a BoundingBox object, describing the location of the label on the input image. It also includes the confidence for the accuracy of the detected bounding box. The API returns the following information regarding the image, as part of the ImageProperties structure: Quality - Information about the Sharpness, Brightness, and Contrast of the input image, scored between 0 to 100. Image quality is returned for the entire image, as well as the background and the foreground. Dominant Color - An array of the dominant colors in the image. Foreground - Information about the sharpness, brightness, and dominant colors of the input image’s foreground. Background - Information about the sharpness, brightness, and dominant colors of the input image’s background. The list of returned labels will include at least one label for every detected object, along with information about that label. In the following example, suppose the input image has a lighthouse, the sea, and a rock. The response includes all three labels, one for each object, as well as the confidence in the label: &#123;Name: lighthouse, Confidence: 98.4629&#125; &#123;Name: rock,Confidence: 79.2097&#125; &#123;Name: sea,Confidence: 75.061&#125; The list of labels can include multiple labels for the same object. For example, if the input image shows a flower (for example, a tulip), the operation might return the following three labels. &#123;Name: flower,Confidence: 99.0562&#125; &#123;Name: plant,Confidence: 99.0562&#125; &#123;Name: tulip,Confidence: 99.0562&#125; In this example, the detection algorithm more precisely identifies the flower as a tulip. If the object detected is a person, the operation doesn't provide the same facial details that the DetectFaces operation provides. This is a stateless API operation that doesn't return any data. This operation requires permissions to perform the rekognition:DetectLabels action.

```sql
EXEC aws.rekognition.labels.detect_labels 
@region='{{ region }}' --required 
@@json=
'{
"Image": "{{ Image }}", 
"MaxLabels": {{ MaxLabels }}, 
"MinConfidence": {{ MinConfidence }}, 
"Features": "{{ Features }}", 
"Settings": "{{ Settings }}"
}'
;
```
</TabItem>
</Tabs>
