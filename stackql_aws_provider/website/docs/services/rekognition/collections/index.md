--- 
title: collections
hide_title: false
hide_table_of_contents: false
keywords:
  - collections
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

Creates, updates, deletes, gets or lists a <code>collections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="collections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.collections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_collection"
    values={[
        { label: 'describe_collection', value: 'describe_collection' },
        { label: 'list_collections', value: 'list_collections' }
    ]}
>
<TabItem value="describe_collection">

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
    <td><CopyableCode code="collection_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the collection.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The number of milliseconds since the Unix epoch time until the creation of the collection. The Unix epoch time is 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970.</td>
</tr>
<tr>
    <td><CopyableCode code="face_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of faces that are indexed into the collection. To index faces into a collection, use IndexFaces.</td>
</tr>
<tr>
    <td><CopyableCode code="face_model_version" /></td>
    <td><code>string</code></td>
    <td>The version of the face model that's used by the collection for face detection. For more information, see Model versioning in the Amazon Rekognition Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="user_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of UserIDs assigned to the specified colleciton.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_collections">

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
    <td><CopyableCode code="collection_id" /></td>
    <td><code>string</code></td>
    <td>An array of collection IDs.</td>
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
    <td><a href="#describe_collection"><CopyableCode code="describe_collection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified collection. You can use DescribeCollection to get information, such as the number of faces indexed into a collection and the version of the model used by the collection for face detection. For more information, see Describing a Collection in the Amazon Rekognition Developer Guide.</td>
</tr>
<tr>
    <td><a href="#list_collections"><CopyableCode code="list_collections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns list of collection IDs in your account. If the result is truncated, the response also provides a NextToken that you can use in the subsequent request to fetch the next set of collection IDs. For an example, see Listing collections in the Amazon Rekognition Developer Guide. This operation requires permissions to perform the rekognition:ListCollections action.</td>
</tr>
<tr>
    <td><a href="#create_collection"><CopyableCode code="create_collection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CollectionId"><code>CollectionId</code></a></td>
    <td></td>
    <td>Creates a collection in an AWS Region. You can add faces to the collection using the IndexFaces operation. For example, you might create collections, one for each of your application users. A user can then index faces using the IndexFaces operation and persist results in a specific collection. Then, a user can search the collection for faces in the user-specific container. When you create a collection, it is associated with the latest version of the face model version. Collection names are case-sensitive. This operation requires permissions to perform the rekognition:CreateCollection action. If you want to tag your collection, you also require permission to perform the rekognition:TagResource operation.</td>
</tr>
<tr>
    <td><a href="#delete_collection"><CopyableCode code="delete_collection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified collection. Note that this operation removes all faces in the collection. For an example, see Deleting a collection. This operation requires permissions to perform the rekognition:DeleteCollection action.</td>
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
    defaultValue="describe_collection"
    values={[
        { label: 'describe_collection', value: 'describe_collection' },
        { label: 'list_collections', value: 'list_collections' }
    ]}
>
<TabItem value="describe_collection">

Describes the specified collection. You can use DescribeCollection to get information, such as the number of faces indexed into a collection and the version of the model used by the collection for face detection. For more information, see Describing a Collection in the Amazon Rekognition Developer Guide.

```sql
SELECT
collection_arn,
creation_timestamp,
face_count,
face_model_version,
user_count
FROM aws.rekognition.collections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_collections">

Returns list of collection IDs in your account. If the result is truncated, the response also provides a NextToken that you can use in the subsequent request to fetch the next set of collection IDs. For an example, see Listing collections in the Amazon Rekognition Developer Guide. This operation requires permissions to perform the rekognition:ListCollections action.

```sql
SELECT
collection_id
FROM aws.rekognition.collections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_collection"
    values={[
        { label: 'create_collection', value: 'create_collection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_collection">

Creates a collection in an AWS Region. You can add faces to the collection using the IndexFaces operation. For example, you might create collections, one for each of your application users. A user can then index faces using the IndexFaces operation and persist results in a specific collection. Then, a user can search the collection for faces in the user-specific container. When you create a collection, it is associated with the latest version of the face model version. Collection names are case-sensitive. This operation requires permissions to perform the rekognition:CreateCollection action. If you want to tag your collection, you also require permission to perform the rekognition:TagResource operation.

```sql
INSERT INTO aws.rekognition.collections (
CollectionId,
Tags,
region
)
SELECT 
'{{ CollectionId }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
collection_arn,
face_model_version,
status_code
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: collections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the collections resource.
    - name: CollectionId
      value: "{{ CollectionId }}"
      description: |
        ID for the collection that you are creating.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A set of tags (key-value pairs) that you want to attach to the collection.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_collection"
    values={[
        { label: 'delete_collection', value: 'delete_collection' }
    ]}
>
<TabItem value="delete_collection">

Deletes the specified collection. Note that this operation removes all faces in the collection. For an example, see Deleting a collection. This operation requires permissions to perform the rekognition:DeleteCollection action.

```sql
DELETE FROM aws.rekognition.collections
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
