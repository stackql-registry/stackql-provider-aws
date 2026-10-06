--- 
title: protective_equipment
hide_title: false
hide_table_of_contents: false
keywords:
  - protective_equipment
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

Creates, updates, deletes, gets or lists a <code>protective_equipment</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="protective_equipment" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.protective_equipment" /></td></tr>
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
    <td><a href="#detect_protective_equipment"><CopyableCode code="detect_protective_equipment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Image"><code>Image</code></a></td>
    <td></td>
    <td>Detects Personal Protective Equipment (PPE) worn by people detected in an image. Amazon Rekognition can detect the following types of PPE. Face cover Hand cover Head cover You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. The image must be either a PNG or JPG formatted file. DetectProtectiveEquipment detects PPE worn by up to 15 persons detected in an image. For each person detected in the image the API returns an array of body parts (face, head, left-hand, right-hand). For each body part, an array of detected items of PPE is returned, including an indicator of whether or not the PPE covers the body part. The API returns the confidence it has in each detection (person, PPE, body part and body part coverage). It also returns a bounding box (BoundingBox) for each detected person and each detected item of PPE. You can optionally request a summary of detected PPE items with the SummarizationAttributes input parameter. The summary provides the following information. The persons detected as wearing all of the types of PPE that you specify. The persons detected as not wearing all of the types PPE that you specify. The persons detected where PPE adornment could not be determined. This is a stateless API operation. That is, the operation does not persist any data. This operation requires permissions to perform the rekognition:DetectProtectiveEquipment action.</td>
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
    defaultValue="detect_protective_equipment"
    values={[
        { label: 'detect_protective_equipment', value: 'detect_protective_equipment' }
    ]}
>
<TabItem value="detect_protective_equipment">

Detects Personal Protective Equipment (PPE) worn by people detected in an image. Amazon Rekognition can detect the following types of PPE. Face cover Hand cover Head cover You pass the input image as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. The image must be either a PNG or JPG formatted file. DetectProtectiveEquipment detects PPE worn by up to 15 persons detected in an image. For each person detected in the image the API returns an array of body parts (face, head, left-hand, right-hand). For each body part, an array of detected items of PPE is returned, including an indicator of whether or not the PPE covers the body part. The API returns the confidence it has in each detection (person, PPE, body part and body part coverage). It also returns a bounding box (BoundingBox) for each detected person and each detected item of PPE. You can optionally request a summary of detected PPE items with the SummarizationAttributes input parameter. The summary provides the following information. The persons detected as wearing all of the types of PPE that you specify. The persons detected as not wearing all of the types PPE that you specify. The persons detected where PPE adornment could not be determined. This is a stateless API operation. That is, the operation does not persist any data. This operation requires permissions to perform the rekognition:DetectProtectiveEquipment action.

```sql
EXEC aws.rekognition.protective_equipment.detect_protective_equipment 
@region='{{ region }}' --required 
@@json=
'{
"Image": "{{ Image }}", 
"SummarizationAttributes": "{{ SummarizationAttributes }}"
}'
;
```
</TabItem>
</Tabs>
