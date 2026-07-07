--- 
title: faces
hide_title: false
hide_table_of_contents: false
keywords:
  - faces
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

Creates, updates, deletes, gets or lists a <code>faces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="faces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.faces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_faces"
    values={[
        { label: 'search_faces', value: 'search_faces' },
        { label: 'list_faces', value: 'list_faces' }
    ]}
>
<TabItem value="search_faces">

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
    <td><CopyableCode code="FaceMatches" /></td>
    <td><code>array</code></td>
    <td>An array of faces that matched the input face, along with the confidence in the match.</td>
</tr>
<tr>
    <td><CopyableCode code="FaceModelVersion" /></td>
    <td><code>string</code></td>
    <td>Version number of the face detection model associated with the input collection (CollectionId).</td>
</tr>
<tr>
    <td><CopyableCode code="SearchedFaceId" /></td>
    <td><code>string</code></td>
    <td>ID of the face that was searched for matches in a collection. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_faces">

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
    <td><CopyableCode code="BoundingBox" /></td>
    <td><code>object</code></td>
    <td>Identifies the bounding box around the label, face, text, object of interest, or personal protective equipment. The left (x-coordinate) and top (y-coordinate) are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). The top and left values returned are ratios of the overall image size. For example, if the input image is 700x200 pixels, and the top-left coordinate of the bounding box is 350x50 pixels, the API returns a left value of 0.5 (350/700) and a top value of 0.25 (50/200). The width and height values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700x200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. The bounding box coordinates can have negative values. For example, if Amazon Rekognition is able to detect a face that is at the image edge and is only partially visible, the service can return coordinates that are outside the image bounds and, depending on the image edge, you might get negative values or values greater than 1 for the left or top values.</td>
</tr>
<tr>
    <td><CopyableCode code="Confidence" /></td>
    <td><code>number (float)</code></td>
    <td>Confidence level that the bounding box contains a face (and not a different object such as a tree).</td>
</tr>
<tr>
    <td><CopyableCode code="ExternalImageId" /></td>
    <td><code>string</code></td>
    <td>Identifier that you assign to all the faces in the input image. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.\-:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FaceId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier that Amazon Rekognition assigns to the face. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier that Amazon Rekognition assigns to the input image. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IndexFacesModelVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the face detect and storage model that was used when indexing the face vector. (pattern: &lt;code&gt;&#91;0-9\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UserId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier assigned to the user. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.\-:&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#search_faces"><CopyableCode code="search_faces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>For a given input face ID, searches for matching faces in the collection the face belongs to. You get a face ID when you add a face to the collection using the IndexFaces operation. The operation compares the features of the input face with faces in the specified collection. You can also search faces without indexing faces by using the SearchFacesByImage operation. The operation response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match that is found. Along with the metadata, the response also includes a confidence value for each face match, indicating the confidence that the specific face matches the input face. For an example, see Searching for a face using its face ID in the Amazon Rekognition Developer Guide. This operation requires permissions to perform the rekognition:SearchFaces action.</td>
</tr>
<tr>
    <td><a href="#list_faces"><CopyableCode code="list_faces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns metadata for faces in the specified collection. This metadata includes information such as the bounding box coordinates, the confidence (that the bounding box contains a face), and face ID. For an example, see Listing Faces in a Collection in the Amazon Rekognition Developer Guide. This operation requires permissions to perform the rekognition:ListFaces action.</td>
</tr>
<tr>
    <td><a href="#create_face_liveness_session"><CopyableCode code="create_face_liveness_session" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API operation initiates a Face Liveness session. It returns a SessionId, which you can use to start streaming Face Liveness video and get the results for a Face Liveness session. You can use the OutputConfig option in the Settings parameter to provide an Amazon S3 bucket location. The Amazon S3 bucket stores reference images and audit images. If no Amazon S3 bucket is defined, raw bytes are sent instead. You can use AuditImagesLimit to limit the number of audit images returned when GetFaceLivenessSessionResults is called. This number is between 0 and 4. By default, it is set to 0. The limit is best effort and based on the duration of the selfie-video.</td>
</tr>
<tr>
    <td><a href="#associate_faces"><CopyableCode code="associate_faces" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CollectionId"><code>CollectionId</code></a>, <a href="#parameter-UserId"><code>UserId</code></a>, <a href="#parameter-FaceIds"><code>FaceIds</code></a></td>
    <td></td>
    <td>Associates one or more faces with an existing UserID. Takes an array of FaceIds. Each FaceId that are present in the FaceIds list is associated with the provided UserID. The number of FaceIds that can be used as input in a single request is limited to 100. Note that the total number of faces that can be associated with a single UserID is also limited to 100. Once a UserID has 100 faces associated with it, no additional faces can be added. If more API calls are made after the limit is reached, a ServiceQuotaExceededException will result. The UserMatchThreshold parameter specifies the minimum user match confidence required for the face to be associated with a UserID that has at least one FaceID already associated. This ensures that the FaceIds are associated with the right UserID. The value ranges from 0-100 and default value is 75. If successful, an array of AssociatedFace objects containing the associated FaceIds is returned. If a given face is already associated with the given UserID, it will be ignored and will not be returned in the response. If a given face is already associated to a different UserID, isn't found in the collection, doesn’t meet the UserMatchThreshold, or there are already 100 faces associated with the UserID, it will be returned as part of an array of UnsuccessfulFaceAssociations. The UserStatus reflects the status of an operation which updates a UserID representation with a list of given faces. The UserStatus can be: ACTIVE - All associations or disassociations of FaceID(s) for a UserID are complete. CREATED - A UserID has been created, but has no FaceID(s) associated with it. UPDATING - A UserID is being updated and there are current associations or disassociations of FaceID(s) taking place.</td>
</tr>
<tr>
    <td><a href="#delete_faces"><CopyableCode code="delete_faces" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes faces from a collection. You specify a collection ID and an array of face IDs to remove from the collection. This operation requires permissions to perform the rekognition:DeleteFaces action.</td>
</tr>
<tr>
    <td><a href="#compare_faces"><CopyableCode code="compare_faces" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceImage"><code>SourceImage</code></a>, <a href="#parameter-TargetImage"><code>TargetImage</code></a></td>
    <td></td>
    <td>Compares a face in the source input image with each of the 100 largest faces detected in the target input image. If the source image contains multiple faces, the service detects the largest face and compares it with each face detected in the target image. CompareFaces uses machine learning algorithms, which are probabilistic. A false negative is an incorrect prediction that a face in the target image has a low similarity confidence score when compared to the face in the source image. To reduce the probability of false negatives, we recommend that you compare the target image against multiple source images. If you plan to use CompareFaces to make a decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the result to a human for review and further validation before taking action. You pass the input and target images either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file. In response, the operation returns an array of face matches ordered by similarity score in descending order. For each face match, the response provides a bounding box of the face, facial landmarks, pose details (pitch, roll, and yaw), quality (brightness and sharpness), and confidence value (indicating the level of confidence that the bounding box contains a face). The response also provides a similarity score, which indicates how closely the faces match. By default, only faces with a similarity score of greater than or equal to 80% are returned in the response. You can change this value by specifying the SimilarityThreshold parameter. CompareFaces also returns an array of faces that don't match the source image. For each face, it returns a bounding box, confidence value, landmarks, pose details, and quality. The response also returns information about the face in the source image, including the bounding box of the face and confidence value. The QualityFilter input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. Use QualityFilter to set the quality bar by specifying LOW, MEDIUM, or HIGH. If you do not want to filter detected faces, specify NONE. The default value is NONE. If the image doesn't contain Exif metadata, CompareFaces returns orientation information for the source and target images. Use these values to display the images with the correct image orientation. If no faces are detected in the source or target images, CompareFaces returns an InvalidParameterException error. This is a stateless API operation. That is, data returned by this operation doesn't persist. For an example, see Comparing Faces in Images in the Amazon Rekognition Developer Guide. This operation requires permissions to perform the rekognition:CompareFaces action.</td>
</tr>
<tr>
    <td><a href="#detect_faces"><CopyableCode code="detect_faces" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Image"><code>Image</code></a></td>
    <td></td>
    <td>Detects faces within an image that is provided as input. DetectFaces detects the 100 largest faces in the image. For each face detected, the operation returns face details. These details include a bounding box of the face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial landmarks (for example, coordinates of eye and mouth), pose, presence of facial occlusion, and so on. The face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm might not detect the faces or might detect faces with lower confidence. You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. This is a stateless API operation. That is, the operation does not persist any data. This operation requires permissions to perform the rekognition:DetectFaces action.</td>
</tr>
<tr>
    <td><a href="#disassociate_faces"><CopyableCode code="disassociate_faces" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CollectionId"><code>CollectionId</code></a>, <a href="#parameter-UserId"><code>UserId</code></a>, <a href="#parameter-FaceIds"><code>FaceIds</code></a></td>
    <td></td>
    <td>Removes the association between a Face supplied in an array of FaceIds and the User. If the User is not present already, then a ResourceNotFound exception is thrown. If successful, an array of faces that are disassociated from the User is returned. If a given face is already disassociated from the given UserID, it will be ignored and not be returned in the response. If a given face is already associated with a different User or not found in the collection it will be returned as part of UnsuccessfulDisassociations. You can remove 1 - 100 face IDs from a user at one time.</td>
</tr>
<tr>
    <td><a href="#index_faces"><CopyableCode code="index_faces" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CollectionId"><code>CollectionId</code></a>, <a href="#parameter-Image"><code>Image</code></a></td>
    <td></td>
    <td>Detects faces in the input image and adds them to the specified collection. Amazon Rekognition doesn't save the actual faces that are detected. Instead, the underlying detection algorithm first detects the faces in the input image. For each face, the algorithm extracts facial features into a feature vector, and stores it in the backend database. Amazon Rekognition uses feature vectors when it performs face match and search operations using the SearchFaces and SearchFacesByImage operations. For more information, see Adding faces to a collection in the Amazon Rekognition Developer Guide. To get the number of faces in a collection, call DescribeCollection. If you're using version 1.0 of the face detection model, IndexFaces indexes the 15 largest faces in the input image. Later versions of the face detection model index the 100 largest faces in the input image. If you're using version 4 or later of the face model, image orientation information is not returned in the OrientationCorrection field. To determine which version of the model you're using, call DescribeCollection and supply the collection ID. You can also get the model version from the value of FaceModelVersion in the response from IndexFaces For more information, see Model Versioning in the Amazon Rekognition Developer Guide. If you provide the optional ExternalImageId for the input image you provided, Amazon Rekognition associates this ID with all faces that it detects. When you call the ListFaces operation, the response returns the external ID. You can use this external image ID to create a client-side index to associate the faces with each image. You can then use the index to find all faces in an image. You can specify the maximum number of faces to index with the MaxFaces input parameter. This is useful when you want to index the largest faces in an image and don't want to index smaller faces, such as those belonging to people standing in the background. The QualityFilter input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. By default, IndexFaces chooses the quality bar that's used to filter faces. You can also explicitly choose the quality bar. Use QualityFilter, to set the quality bar by specifying LOW, MEDIUM, or HIGH. If you do not want to filter detected faces, specify NONE. To use quality filtering, you need a collection associated with version 3 of the face model or higher. To get the version of the face model associated with a collection, call DescribeCollection. Information about faces detected in an image, but not indexed, is returned in an array of UnindexedFace objects, UnindexedFaces. Faces aren't indexed for reasons such as: The number of faces detected exceeds the value of the MaxFaces request parameter. The face is too small compared to the image dimensions. The face is too blurry. The image is too dark. The face has an extreme pose. The face doesn’t have enough detail to be suitable for face search. In response, the IndexFaces operation returns an array of metadata for all detected faces, FaceRecords. This includes: The bounding box, BoundingBox, of the detected face. A confidence value, Confidence, which indicates the confidence that the bounding box contains a face. A face ID, FaceId, assigned by the service for each face that's detected and stored. An image ID, ImageId, assigned by the service for the input image. If you request ALL or specific facial attributes (e.g., FACE_OCCLUDED) by using the detectionAttributes parameter, Amazon Rekognition returns detailed facial attributes, such as facial landmarks (for example, location of eye and mouth), facial occlusion, and other facial attributes. If you provide the same image, specify the same collection, and use the same external ID in the IndexFaces operation, Amazon Rekognition doesn't save duplicate face metadata. The input image is passed either as base64-encoded image bytes, or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file. This operation requires permissions to perform the rekognition:IndexFaces action.</td>
</tr>
<tr>
    <td><a href="#start_face_detection"><CopyableCode code="start_face_detection" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Video"><code>Video</code></a></td>
    <td></td>
    <td>Starts asynchronous detection of faces in a stored video. Amazon Rekognition Video can detect faces in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartFaceDetection returns a job identifier (JobId) that you use to get the results of the operation. When face detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the results of the face detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceDetection and pass the job identifier (JobId) from the initial call to StartFaceDetection. For more information, see Detecting faces in a stored video in the Amazon Rekognition Developer Guide.</td>
</tr>
<tr>
    <td><a href="#start_face_search"><CopyableCode code="start_face_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Video"><code>Video</code></a>, <a href="#parameter-CollectionId"><code>CollectionId</code></a></td>
    <td></td>
    <td>Starts the asynchronous search for faces in a collection that match the faces of persons detected in a stored video. The video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartFaceSearch returns a job identifier (JobId) which you use to get the search results once the search has completed. When searching is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the search results, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceSearch and pass the job identifier (JobId) from the initial call to StartFaceSearch. For more information, see Searching stored videos for faces.</td>
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
    defaultValue="search_faces"
    values={[
        { label: 'search_faces', value: 'search_faces' },
        { label: 'list_faces', value: 'list_faces' }
    ]}
>
<TabItem value="search_faces">

For a given input face ID, searches for matching faces in the collection the face belongs to. You get a face ID when you add a face to the collection using the IndexFaces operation. The operation compares the features of the input face with faces in the specified collection. You can also search faces without indexing faces by using the SearchFacesByImage operation. The operation response returns an array of faces that match, ordered by similarity score with the highest similarity first. More specifically, it is an array of metadata for each face match that is found. Along with the metadata, the response also includes a confidence value for each face match, indicating the confidence that the specific face matches the input face. For an example, see Searching for a face using its face ID in the Amazon Rekognition Developer Guide. This operation requires permissions to perform the rekognition:SearchFaces action.

```sql
SELECT
FaceMatches,
FaceModelVersion,
SearchedFaceId
FROM aws.rekognition.faces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_faces">

Returns metadata for faces in the specified collection. This metadata includes information such as the bounding box coordinates, the confidence (that the bounding box contains a face), and face ID. For an example, see Listing Faces in a Collection in the Amazon Rekognition Developer Guide. This operation requires permissions to perform the rekognition:ListFaces action.

```sql
SELECT
BoundingBox,
Confidence,
ExternalImageId,
FaceId,
ImageId,
IndexFacesModelVersion,
UserId
FROM aws.rekognition.faces
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_face_liveness_session"
    values={[
        { label: 'create_face_liveness_session', value: 'create_face_liveness_session' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_face_liveness_session">

This API operation initiates a Face Liveness session. It returns a SessionId, which you can use to start streaming Face Liveness video and get the results for a Face Liveness session. You can use the OutputConfig option in the Settings parameter to provide an Amazon S3 bucket location. The Amazon S3 bucket stores reference images and audit images. If no Amazon S3 bucket is defined, raw bytes are sent instead. You can use AuditImagesLimit to limit the number of audit images returned when GetFaceLivenessSessionResults is called. This number is between 0 and 4. By default, it is set to 0. The limit is best effort and based on the duration of the selfie-video.

```sql
INSERT INTO aws.rekognition.faces (
KmsKeyId,
Settings,
ClientRequestToken,
region
)
SELECT 
'{{ KmsKeyId }}',
'{{ Settings }}',
'{{ ClientRequestToken }}',
'{{ region }}'
RETURNING
SessionId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: faces
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the faces resource.
    - name: KmsKeyId
      value: "{{ KmsKeyId }}"
      description: |
        The identifier for your AWS Key Management Service key (AWS KMS key). Used to encrypt audit images and reference images.
    - name: Settings
      description: |
        A session settings object. It contains settings for the operation to be performed. For Face Liveness, it accepts OutputConfig and AuditImagesLimit.
      value:
        OutputConfig:
          S3Bucket: "{{ S3Bucket }}"
          S3KeyPrefix: "{{ S3KeyPrefix }}"
        AuditImagesLimit: {{ AuditImagesLimit }}
        ChallengePreferences:
          - Type: "{{ Type }}"
            Versions:
              Minimum: "{{ Minimum }}"
              Maximum: "{{ Maximum }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        Idempotent token is used to recognize the Face Liveness request. If the same token is used with multiple CreateFaceLivenessSession requests, the same session is returned. This token is employed to avoid unintentionally creating the same session multiple times.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_faces"
    values={[
        { label: 'associate_faces', value: 'associate_faces' }
    ]}
>
<TabItem value="associate_faces">

Associates one or more faces with an existing UserID. Takes an array of FaceIds. Each FaceId that are present in the FaceIds list is associated with the provided UserID. The number of FaceIds that can be used as input in a single request is limited to 100. Note that the total number of faces that can be associated with a single UserID is also limited to 100. Once a UserID has 100 faces associated with it, no additional faces can be added. If more API calls are made after the limit is reached, a ServiceQuotaExceededException will result. The UserMatchThreshold parameter specifies the minimum user match confidence required for the face to be associated with a UserID that has at least one FaceID already associated. This ensures that the FaceIds are associated with the right UserID. The value ranges from 0-100 and default value is 75. If successful, an array of AssociatedFace objects containing the associated FaceIds is returned. If a given face is already associated with the given UserID, it will be ignored and will not be returned in the response. If a given face is already associated to a different UserID, isn't found in the collection, doesn’t meet the UserMatchThreshold, or there are already 100 faces associated with the UserID, it will be returned as part of an array of UnsuccessfulFaceAssociations. The UserStatus reflects the status of an operation which updates a UserID representation with a list of given faces. The UserStatus can be: ACTIVE - All associations or disassociations of FaceID(s) for a UserID are complete. CREATED - A UserID has been created, but has no FaceID(s) associated with it. UPDATING - A UserID is being updated and there are current associations or disassociations of FaceID(s) taking place.

```sql
UPDATE aws.rekognition.faces
SET 
CollectionId = '{{ CollectionId }}',
UserId = '{{ UserId }}',
FaceIds = '{{ FaceIds }}',
UserMatchThreshold = {{ UserMatchThreshold }},
ClientRequestToken = '{{ ClientRequestToken }}'
WHERE 
region = '{{ region }}' --required
AND CollectionId = '{{ CollectionId }}' --required
AND UserId = '{{ UserId }}' --required
AND FaceIds = '{{ FaceIds }}' --required
RETURNING
AssociatedFaces,
UnsuccessfulFaceAssociations,
UserStatus;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_faces"
    values={[
        { label: 'delete_faces', value: 'delete_faces' }
    ]}
>
<TabItem value="delete_faces">

Deletes faces from a collection. You specify a collection ID and an array of face IDs to remove from the collection. This operation requires permissions to perform the rekognition:DeleteFaces action.

```sql
DELETE FROM aws.rekognition.faces
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="compare_faces"
    values={[
        { label: 'compare_faces', value: 'compare_faces' },
        { label: 'detect_faces', value: 'detect_faces' },
        { label: 'disassociate_faces', value: 'disassociate_faces' },
        { label: 'index_faces', value: 'index_faces' },
        { label: 'start_face_detection', value: 'start_face_detection' },
        { label: 'start_face_search', value: 'start_face_search' }
    ]}
>
<TabItem value="compare_faces">

Compares a face in the source input image with each of the 100 largest faces detected in the target input image. If the source image contains multiple faces, the service detects the largest face and compares it with each face detected in the target image. CompareFaces uses machine learning algorithms, which are probabilistic. A false negative is an incorrect prediction that a face in the target image has a low similarity confidence score when compared to the face in the source image. To reduce the probability of false negatives, we recommend that you compare the target image against multiple source images. If you plan to use CompareFaces to make a decision that impacts an individual's rights, privacy, or access to services, we recommend that you pass the result to a human for review and further validation before taking action. You pass the input and target images either as base64-encoded image bytes or as references to images in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file. In response, the operation returns an array of face matches ordered by similarity score in descending order. For each face match, the response provides a bounding box of the face, facial landmarks, pose details (pitch, roll, and yaw), quality (brightness and sharpness), and confidence value (indicating the level of confidence that the bounding box contains a face). The response also provides a similarity score, which indicates how closely the faces match. By default, only faces with a similarity score of greater than or equal to 80% are returned in the response. You can change this value by specifying the SimilarityThreshold parameter. CompareFaces also returns an array of faces that don't match the source image. For each face, it returns a bounding box, confidence value, landmarks, pose details, and quality. The response also returns information about the face in the source image, including the bounding box of the face and confidence value. The QualityFilter input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. Use QualityFilter to set the quality bar by specifying LOW, MEDIUM, or HIGH. If you do not want to filter detected faces, specify NONE. The default value is NONE. If the image doesn't contain Exif metadata, CompareFaces returns orientation information for the source and target images. Use these values to display the images with the correct image orientation. If no faces are detected in the source or target images, CompareFaces returns an InvalidParameterException error. This is a stateless API operation. That is, data returned by this operation doesn't persist. For an example, see Comparing Faces in Images in the Amazon Rekognition Developer Guide. This operation requires permissions to perform the rekognition:CompareFaces action.

```sql
EXEC aws.rekognition.faces.compare_faces 
@region='{{ region }}' --required 
@@json=
'{
"SourceImage": "{{ SourceImage }}", 
"TargetImage": "{{ TargetImage }}", 
"SimilarityThreshold": {{ SimilarityThreshold }}, 
"QualityFilter": "{{ QualityFilter }}"
}'
;
```
</TabItem>
<TabItem value="detect_faces">

Detects faces within an image that is provided as input. DetectFaces detects the 100 largest faces in the image. For each face detected, the operation returns face details. These details include a bounding box of the face, a confidence value (that the bounding box contains a face), and a fixed set of attributes such as facial landmarks (for example, coordinates of eye and mouth), pose, presence of facial occlusion, and so on. The face-detection algorithm is most effective on frontal faces. For non-frontal or obscured faces, the algorithm might not detect the faces or might detect faces with lower confidence. You pass the input image either as base64-encoded image bytes or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes is not supported. The image must be either a PNG or JPEG formatted file. This is a stateless API operation. That is, the operation does not persist any data. This operation requires permissions to perform the rekognition:DetectFaces action.

```sql
EXEC aws.rekognition.faces.detect_faces 
@region='{{ region }}' --required 
@@json=
'{
"Image": "{{ Image }}", 
"Attributes": "{{ Attributes }}"
}'
;
```
</TabItem>
<TabItem value="disassociate_faces">

Removes the association between a Face supplied in an array of FaceIds and the User. If the User is not present already, then a ResourceNotFound exception is thrown. If successful, an array of faces that are disassociated from the User is returned. If a given face is already disassociated from the given UserID, it will be ignored and not be returned in the response. If a given face is already associated with a different User or not found in the collection it will be returned as part of UnsuccessfulDisassociations. You can remove 1 - 100 face IDs from a user at one time.

```sql
EXEC aws.rekognition.faces.disassociate_faces 
@region='{{ region }}' --required 
@@json=
'{
"CollectionId": "{{ CollectionId }}", 
"UserId": "{{ UserId }}", 
"ClientRequestToken": "{{ ClientRequestToken }}", 
"FaceIds": "{{ FaceIds }}"
}'
;
```
</TabItem>
<TabItem value="index_faces">

Detects faces in the input image and adds them to the specified collection. Amazon Rekognition doesn't save the actual faces that are detected. Instead, the underlying detection algorithm first detects the faces in the input image. For each face, the algorithm extracts facial features into a feature vector, and stores it in the backend database. Amazon Rekognition uses feature vectors when it performs face match and search operations using the SearchFaces and SearchFacesByImage operations. For more information, see Adding faces to a collection in the Amazon Rekognition Developer Guide. To get the number of faces in a collection, call DescribeCollection. If you're using version 1.0 of the face detection model, IndexFaces indexes the 15 largest faces in the input image. Later versions of the face detection model index the 100 largest faces in the input image. If you're using version 4 or later of the face model, image orientation information is not returned in the OrientationCorrection field. To determine which version of the model you're using, call DescribeCollection and supply the collection ID. You can also get the model version from the value of FaceModelVersion in the response from IndexFaces For more information, see Model Versioning in the Amazon Rekognition Developer Guide. If you provide the optional ExternalImageId for the input image you provided, Amazon Rekognition associates this ID with all faces that it detects. When you call the ListFaces operation, the response returns the external ID. You can use this external image ID to create a client-side index to associate the faces with each image. You can then use the index to find all faces in an image. You can specify the maximum number of faces to index with the MaxFaces input parameter. This is useful when you want to index the largest faces in an image and don't want to index smaller faces, such as those belonging to people standing in the background. The QualityFilter input parameter allows you to filter out detected faces that don’t meet a required quality bar. The quality bar is based on a variety of common use cases. By default, IndexFaces chooses the quality bar that's used to filter faces. You can also explicitly choose the quality bar. Use QualityFilter, to set the quality bar by specifying LOW, MEDIUM, or HIGH. If you do not want to filter detected faces, specify NONE. To use quality filtering, you need a collection associated with version 3 of the face model or higher. To get the version of the face model associated with a collection, call DescribeCollection. Information about faces detected in an image, but not indexed, is returned in an array of UnindexedFace objects, UnindexedFaces. Faces aren't indexed for reasons such as: The number of faces detected exceeds the value of the MaxFaces request parameter. The face is too small compared to the image dimensions. The face is too blurry. The image is too dark. The face has an extreme pose. The face doesn’t have enough detail to be suitable for face search. In response, the IndexFaces operation returns an array of metadata for all detected faces, FaceRecords. This includes: The bounding box, BoundingBox, of the detected face. A confidence value, Confidence, which indicates the confidence that the bounding box contains a face. A face ID, FaceId, assigned by the service for each face that's detected and stored. An image ID, ImageId, assigned by the service for the input image. If you request ALL or specific facial attributes (e.g., FACE_OCCLUDED) by using the detectionAttributes parameter, Amazon Rekognition returns detailed facial attributes, such as facial landmarks (for example, location of eye and mouth), facial occlusion, and other facial attributes. If you provide the same image, specify the same collection, and use the same external ID in the IndexFaces operation, Amazon Rekognition doesn't save duplicate face metadata. The input image is passed either as base64-encoded image bytes, or as a reference to an image in an Amazon S3 bucket. If you use the AWS CLI to call Amazon Rekognition operations, passing image bytes isn't supported. The image must be formatted as a PNG or JPEG file. This operation requires permissions to perform the rekognition:IndexFaces action.

```sql
EXEC aws.rekognition.faces.index_faces 
@region='{{ region }}' --required 
@@json=
'{
"CollectionId": "{{ CollectionId }}", 
"Image": "{{ Image }}", 
"ExternalImageId": "{{ ExternalImageId }}", 
"DetectionAttributes": "{{ DetectionAttributes }}", 
"MaxFaces": {{ MaxFaces }}, 
"QualityFilter": "{{ QualityFilter }}"
}'
;
```
</TabItem>
<TabItem value="start_face_detection">

Starts asynchronous detection of faces in a stored video. Amazon Rekognition Video can detect faces in a video stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartFaceDetection returns a job identifier (JobId) that you use to get the results of the operation. When face detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the results of the face detection operation, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceDetection and pass the job identifier (JobId) from the initial call to StartFaceDetection. For more information, see Detecting faces in a stored video in the Amazon Rekognition Developer Guide.

```sql
EXEC aws.rekognition.faces.start_face_detection 
@region='{{ region }}' --required 
@@json=
'{
"Video": "{{ Video }}", 
"ClientRequestToken": "{{ ClientRequestToken }}", 
"NotificationChannel": "{{ NotificationChannel }}", 
"FaceAttributes": "{{ FaceAttributes }}", 
"JobTag": "{{ JobTag }}"
}'
;
```
</TabItem>
<TabItem value="start_face_search">

Starts the asynchronous search for faces in a collection that match the faces of persons detected in a stored video. The video must be stored in an Amazon S3 bucket. Use Video to specify the bucket name and the filename of the video. StartFaceSearch returns a job identifier (JobId) which you use to get the search results once the search has completed. When searching is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic that you specify in NotificationChannel. To get the search results, first check that the status value published to the Amazon SNS topic is SUCCEEDED. If so, call GetFaceSearch and pass the job identifier (JobId) from the initial call to StartFaceSearch. For more information, see Searching stored videos for faces.

```sql
EXEC aws.rekognition.faces.start_face_search 
@region='{{ region }}' --required 
@@json=
'{
"Video": "{{ Video }}", 
"ClientRequestToken": "{{ ClientRequestToken }}", 
"FaceMatchThreshold": {{ FaceMatchThreshold }}, 
"CollectionId": "{{ CollectionId }}", 
"NotificationChannel": "{{ NotificationChannel }}", 
"JobTag": "{{ JobTag }}"
}'
;
```
</TabItem>
</Tabs>
