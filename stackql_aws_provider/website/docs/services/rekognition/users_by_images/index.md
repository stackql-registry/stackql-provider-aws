--- 
title: users_by_images
hide_title: false
hide_table_of_contents: false
keywords:
  - users_by_images
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

Creates, updates, deletes, gets or lists a <code>users_by_images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users_by_images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.users_by_images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_users_by_image"
    values={[
        { label: 'search_users_by_image', value: 'search_users_by_image' }
    ]}
>
<TabItem value="search_users_by_image">

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
    <td><CopyableCode code="FaceModelVersion" /></td>
    <td><code>string</code></td>
    <td>Version number of the face detection model associated with the input collection CollectionId.</td>
</tr>
<tr>
    <td><CopyableCode code="SearchedFace" /></td>
    <td><code>object</code></td>
    <td>A list of FaceDetail objects containing the BoundingBox for the largest face in image, as well as the confidence in the bounding box, that was searched for matches. If no valid face is detected in the image the response will contain no SearchedFace object.</td>
</tr>
<tr>
    <td><CopyableCode code="UnsearchedFaces" /></td>
    <td><code>array</code></td>
    <td>List of UnsearchedFace objects. Contains the face details infered from the specified image but not used for search. Contains reasons that describe why a face wasn't used for Search.</td>
</tr>
<tr>
    <td><CopyableCode code="UserMatches" /></td>
    <td><code>array</code></td>
    <td>An array of UserID objects that matched the input face, along with the confidence in the match. The returned structure will be empty if there are no matches. Returned if the SearchUsersByImageResponse action is successful.</td>
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
    <td><a href="#search_users_by_image"><CopyableCode code="search_users_by_image" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for UserIDs using a supplied image. It first detects the largest face in the image, and then searches a specified collection for matching UserIDs. The operation returns an array of UserIDs that match the face in the supplied image, ordered by similarity score with the highest similarity first. It also returns a bounding box for the face found in the input image. Information about faces detected in the supplied image, but not used for the search, is returned in an array of UnsearchedFace objects. If no valid face is detected in the image, the response will contain an empty UserMatches list and no SearchedFace object.</td>
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
    defaultValue="search_users_by_image"
    values={[
        { label: 'search_users_by_image', value: 'search_users_by_image' }
    ]}
>
<TabItem value="search_users_by_image">

Searches for UserIDs using a supplied image. It first detects the largest face in the image, and then searches a specified collection for matching UserIDs. The operation returns an array of UserIDs that match the face in the supplied image, ordered by similarity score with the highest similarity first. It also returns a bounding box for the face found in the input image. Information about faces detected in the supplied image, but not used for the search, is returned in an array of UnsearchedFace objects. If no valid face is detected in the image, the response will contain an empty UserMatches list and no SearchedFace object.

```sql
SELECT
FaceModelVersion,
SearchedFace,
UnsearchedFaces,
UserMatches
FROM aws.rekognition.users_by_images
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
