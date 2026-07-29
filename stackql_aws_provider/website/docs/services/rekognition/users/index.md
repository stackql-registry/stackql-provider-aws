--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_users"
    values={[
        { label: 'search_users', value: 'search_users' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="search_users">

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
    <td><CopyableCode code="face_model_version" /></td>
    <td><code>string</code></td>
    <td>Version number of the face detection model associated with the input CollectionId.</td>
</tr>
<tr>
    <td><CopyableCode code="searched_face" /></td>
    <td><code>object</code></td>
    <td>Contains the ID of a face that was used to search for matches in a collection.</td>
</tr>
<tr>
    <td><CopyableCode code="searched_user" /></td>
    <td><code>object</code></td>
    <td>Contains the ID of the UserID that was used to search for matches in a collection.</td>
</tr>
<tr>
    <td><CopyableCode code="user_matches" /></td>
    <td><code>array</code></td>
    <td>An array of UserMatch objects that matched the input face along with the confidence in the match. Array will be empty if there are no matches.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_users">

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
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>A provided ID for the User. Unique within the collection. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.\-:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="user_status" /></td>
    <td><code>string</code></td>
    <td>Communicates if the UserID has been updated with latest set of faces to be associated with the UserID. (ACTIVE, UPDATING, CREATING, CREATED)</td>
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
    <td><a href="#search_users"><CopyableCode code="search_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for UserIDs within a collection based on a FaceId or UserId. This API can be used to find the closest UserID (with a highest similarity) to associate a face. The request must be provided with either FaceId or UserId. The operation returns an array of UserID that match the FaceId or UserId, ordered by similarity score with the highest similarity first.</td>
</tr>
<tr>
    <td><a href="#list_users"><CopyableCode code="list_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns metadata of the User such as UserID in the specified collection. Anonymous User (to reserve faces without any identity) is not returned as part of this request. The results are sorted by system generated primary key ID. If the response is truncated, NextToken is returned in the response that can be used in the subsequent request to retrieve the next set of identities.</td>
</tr>
<tr>
    <td><a href="#create_user"><CopyableCode code="create_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CollectionId"><code>CollectionId</code></a>, <a href="#parameter-UserId"><code>UserId</code></a></td>
    <td></td>
    <td>Creates a new User within a collection specified by CollectionId. Takes UserId as a parameter, which is a user provided ID which should be unique within the collection. The provided UserId will alias the system generated UUID to make the UserId more user friendly. Uses a ClientToken, an idempotency token that ensures a call to CreateUser completes only once. If the value is not supplied, the AWS SDK generates an idempotency token for the requests. This prevents retries after a network error results from making multiple CreateUser calls.</td>
</tr>
<tr>
    <td><a href="#delete_user"><CopyableCode code="delete_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified UserID within the collection. Faces that are associated with the UserID are disassociated from the UserID before deleting the specified UserID. If the specified Collection or UserID is already deleted or not found, a ResourceNotFoundException will be thrown. If the action is successful with a 200 response, an empty HTTP body is returned.</td>
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
    defaultValue="search_users"
    values={[
        { label: 'search_users', value: 'search_users' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="search_users">

Searches for UserIDs within a collection based on a FaceId or UserId. This API can be used to find the closest UserID (with a highest similarity) to associate a face. The request must be provided with either FaceId or UserId. The operation returns an array of UserID that match the FaceId or UserId, ordered by similarity score with the highest similarity first.

```sql
SELECT
face_model_version,
searched_face,
searched_user,
user_matches
FROM aws.rekognition.users
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_users">

Returns metadata of the User such as UserID in the specified collection. Anonymous User (to reserve faces without any identity) is not returned as part of this request. The results are sorted by system generated primary key ID. If the response is truncated, NextToken is returned in the response that can be used in the subsequent request to retrieve the next set of identities.

```sql
SELECT
user_id,
user_status
FROM aws.rekognition.users
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user"
    values={[
        { label: 'create_user', value: 'create_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user">

Creates a new User within a collection specified by CollectionId. Takes UserId as a parameter, which is a user provided ID which should be unique within the collection. The provided UserId will alias the system generated UUID to make the UserId more user friendly. Uses a ClientToken, an idempotency token that ensures a call to CreateUser completes only once. If the value is not supplied, the AWS SDK generates an idempotency token for the requests. This prevents retries after a network error results from making multiple CreateUser calls.

```sql
INSERT INTO aws.rekognition.users (
CollectionId,
UserId,
ClientRequestToken,
region
)
SELECT 
'{{ CollectionId }}' /* required */,
'{{ UserId }}' /* required */,
'{{ ClientRequestToken }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the users resource.
    - name: CollectionId
      value: "{{ CollectionId }}"
      description: |
        The ID of an existing collection to which the new UserID needs to be created.
    - name: UserId
      value: "{{ UserId }}"
      description: |
        ID for the UserID to be created. This ID needs to be unique within the collection.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        Idempotent token used to identify the request to CreateUser. If you use the same token with multiple CreateUser requests, the same response is returned. Use ClientRequestToken to prevent the same request from being processed more than once.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user"
    values={[
        { label: 'delete_user', value: 'delete_user' }
    ]}
>
<TabItem value="delete_user">

Deletes the specified UserID within the collection. Faces that are associated with the UserID are disassociated from the UserID before deleting the specified UserID. If the specified Collection or UserID is already deleted or not found, a ResourceNotFoundException will be thrown. If the action is successful with a 200 response, an empty HTTP body is returned.

```sql
DELETE FROM aws.rekognition.users
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
