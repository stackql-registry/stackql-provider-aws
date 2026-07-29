--- 
title: face_liveness_session_results
hide_title: false
hide_table_of_contents: false
keywords:
  - face_liveness_session_results
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

Creates, updates, deletes, gets or lists a <code>face_liveness_session_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="face_liveness_session_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.face_liveness_session_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_face_liveness_session_results"
    values={[
        { label: 'get_face_liveness_session_results', value: 'get_face_liveness_session_results' }
    ]}
>
<TabItem value="get_face_liveness_session_results">

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
    <td><CopyableCode code="audit_images" /></td>
    <td><code>array</code></td>
    <td>A set of images from the Face Liveness video that can be used for audit purposes. It includes a bounding box of the face and the Base64-encoded bytes that return an image. If the CreateFaceLivenessSession request included an OutputConfig argument, the image will be uploaded to an S3Object specified in the output configuration. If no Amazon S3 bucket is defined, raw bytes are sent instead.</td>
</tr>
<tr>
    <td><CopyableCode code="challenge" /></td>
    <td><code>object</code></td>
    <td>Contains information regarding the challenge type used for the Face Liveness check.</td>
</tr>
<tr>
    <td><CopyableCode code="confidence" /></td>
    <td><code>number (float)</code></td>
    <td>Probabalistic confidence score for if the person in the given video was live, represented as a float value between 0 to 100.</td>
</tr>
<tr>
    <td><CopyableCode code="reference_image" /></td>
    <td><code>object</code></td>
    <td>A high-quality image from the Face Liveness video that can be used for face comparison or search. It includes a bounding box of the face and the Base64-encoded bytes that return an image. If the CreateFaceLivenessSession request included an OutputConfig argument, the image will be uploaded to an S3Object specified in the output configuration. In case the reference image is not returned, it's recommended to retry the Liveness check.</td>
</tr>
<tr>
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The sessionId for which this request was called. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Represents a status corresponding to the state of the session. Possible statuses are: CREATED, IN_PROGRESS, SUCCEEDED, FAILED, EXPIRED. (CREATED, IN_PROGRESS, SUCCEEDED, FAILED, EXPIRED)</td>
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
    <td><a href="#get_face_liveness_session_results"><CopyableCode code="get_face_liveness_session_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the results of a specific Face Liveness session. It requires the sessionId as input, which was created using CreateFaceLivenessSession. Returns the corresponding Face Liveness confidence score, a reference image that includes a face bounding box, and audit images that also contain face bounding boxes. The Face Liveness confidence score ranges from 0 to 100. The number of audit images returned by GetFaceLivenessSessionResults is defined by the AuditImagesLimit paramater when calling CreateFaceLivenessSession. Reference images are always returned when possible.</td>
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
    defaultValue="get_face_liveness_session_results"
    values={[
        { label: 'get_face_liveness_session_results', value: 'get_face_liveness_session_results' }
    ]}
>
<TabItem value="get_face_liveness_session_results">

Retrieves the results of a specific Face Liveness session. It requires the sessionId as input, which was created using CreateFaceLivenessSession. Returns the corresponding Face Liveness confidence score, a reference image that includes a face bounding box, and audit images that also contain face bounding boxes. The Face Liveness confidence score ranges from 0 to 100. The number of audit images returned by GetFaceLivenessSessionResults is defined by the AuditImagesLimit paramater when calling CreateFaceLivenessSession. Reference images are always returned when possible.

```sql
SELECT
audit_images,
challenge,
confidence,
reference_image,
session_id,
status
FROM aws.rekognition.face_liveness_session_results
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
