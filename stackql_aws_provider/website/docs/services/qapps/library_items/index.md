--- 
title: library_items
hide_title: false
hide_table_of_contents: false
keywords:
  - library_items
  - qapps
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

Creates, updates, deletes, gets or lists a <code>library_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="library_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qapps.library_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_library_item"
    values={[
        { label: 'get_library_item', value: 'get_library_item' },
        { label: 'list_library_items', value: 'list_library_items' }
    ]}
>
<TabItem value="get_library_item">

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
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Q App associated with the library item. (pattern: &lt;code&gt;&#91;\da-f&#93;&#123;8&#125;-&#91;\da-f&#93;&#123;4&#125;-&#91;45&#93;&#91;\da-f&#93;&#123;3&#125;-&#91;89ABab&#93;&#91;\da-f&#93;&#123;3&#125;-&#91;\da-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="appVersion" /></td>
    <td><code>integer</code></td>
    <td>The version of the Q App associated with the library item.</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>The categories associated with the library item for discovery.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the library item was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the library item.</td>
</tr>
<tr>
    <td><CopyableCode code="isRatedByUser" /></td>
    <td><code>boolean</code></td>
    <td>Whether the current user has rated the library item.</td>
</tr>
<tr>
    <td><CopyableCode code="isVerified" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the library item has been verified.</td>
</tr>
<tr>
    <td><CopyableCode code="libraryItemId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the library item. (pattern: &lt;code&gt;&#91;\da-f&#93;&#123;8&#125;-&#91;\da-f&#93;&#123;4&#125;-&#91;45&#93;&#91;\da-f&#93;&#123;3&#125;-&#91;89ABab&#93;&#91;\da-f&#93;&#123;3&#125;-&#91;\da-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ratingCount" /></td>
    <td><code>integer</code></td>
    <td>The number of ratings the library item has received from users.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the library item, such as "Published".</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the library item was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The user who last updated the library item.</td>
</tr>
<tr>
    <td><CopyableCode code="userCount" /></td>
    <td><code>integer</code></td>
    <td>The number of users who have associated the Q App with their account.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_library_items">

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
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Q App associated with the library item. (pattern: &lt;code&gt;&#91;\da-f&#93;&#123;8&#125;-&#91;\da-f&#93;&#123;4&#125;-&#91;45&#93;&#91;\da-f&#93;&#123;3&#125;-&#91;89ABab&#93;&#91;\da-f&#93;&#123;3&#125;-&#91;\da-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="appVersion" /></td>
    <td><code>integer</code></td>
    <td>The version of the Q App associated with the library item.</td>
</tr>
<tr>
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>The categories associated with the library item.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the library item was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the library item.</td>
</tr>
<tr>
    <td><CopyableCode code="isRatedByUser" /></td>
    <td><code>boolean</code></td>
    <td>Whether the current user has rated the library item.</td>
</tr>
<tr>
    <td><CopyableCode code="isVerified" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the library item has been verified.</td>
</tr>
<tr>
    <td><CopyableCode code="libraryItemId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the library item. (pattern: &lt;code&gt;&#91;\da-f&#93;&#123;8&#125;-&#91;\da-f&#93;&#123;4&#125;-&#91;45&#93;&#91;\da-f&#93;&#123;3&#125;-&#91;89ABab&#93;&#91;\da-f&#93;&#123;3&#125;-&#91;\da-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ratingCount" /></td>
    <td><code>integer</code></td>
    <td>The number of ratings the library item has received.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the library item.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the library item was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The user who last updated the library item.</td>
</tr>
<tr>
    <td><CopyableCode code="userCount" /></td>
    <td><code>integer</code></td>
    <td>The number of users who have the associated Q App.</td>
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
    <td><a href="#get_library_item"><CopyableCode code="get_library_item" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-libraryItemId"><code>libraryItemId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-appId"><code>appId</code></a></td>
    <td>Retrieves details about a library item for an Amazon Q App, including its metadata, categories, ratings, and usage statistics.</td>
</tr>
<tr>
    <td><a href="#list_library_items"><CopyableCode code="list_library_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-categoryId"><code>categoryId</code></a></td>
    <td>Lists the library items for Amazon Q Apps that are published and available for users in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_library_item"><CopyableCode code="create_library_item" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appId"><code>appId</code></a>, <a href="#parameter-appVersion"><code>appVersion</code></a>, <a href="#parameter-categories"><code>categories</code></a></td>
    <td></td>
    <td>Creates a new library item for an Amazon Q App, allowing it to be discovered and used by other allowed users.</td>
</tr>
<tr>
    <td><a href="#update_library_item"><CopyableCode code="update_library_item" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-libraryItemId"><code>libraryItemId</code></a></td>
    <td></td>
    <td>Updates the library item for an Amazon Q App.</td>
</tr>
<tr>
    <td><a href="#delete_library_item"><CopyableCode code="delete_library_item" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a library item for an Amazon Q App, removing it from the library so it can no longer be discovered or used by other users.</td>
</tr>
<tr>
    <td><a href="#associate_library_item_review"><CopyableCode code="associate_library_item_review" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-libraryItemId"><code>libraryItemId</code></a></td>
    <td></td>
    <td>Associates a rating or review for a library item with the user submitting the request. This increments the rating count for the specified library item.</td>
</tr>
<tr>
    <td><a href="#disassociate_library_item_review"><CopyableCode code="disassociate_library_item_review" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-libraryItemId"><code>libraryItemId</code></a></td>
    <td></td>
    <td>Removes a rating or review previously submitted by the user for a library item.</td>
</tr>
<tr>
    <td><a href="#update_library_item_metadata"><CopyableCode code="update_library_item_metadata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-libraryItemId"><code>libraryItemId</code></a></td>
    <td></td>
    <td>Updates the verification status of a library item for an Amazon Q App.</td>
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
<tr id="parameter-instance-id">
    <td><CopyableCode code="instance-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Q Business application environment instance.</td>
</tr>
<tr id="parameter-libraryItemId">
    <td><CopyableCode code="libraryItemId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the library item to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-appId">
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Q App associated with the library item.</td>
</tr>
<tr id="parameter-categoryId">
    <td><CopyableCode code="categoryId" /></td>
    <td><code>string</code></td>
    <td>Optional category to filter the library items by.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of library items to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to request the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_library_item"
    values={[
        { label: 'get_library_item', value: 'get_library_item' },
        { label: 'list_library_items', value: 'list_library_items' }
    ]}
>
<TabItem value="get_library_item">

Retrieves details about a library item for an Amazon Q App, including its metadata, categories, ratings, and usage statistics.

```sql
SELECT
appId,
appVersion,
categories,
createdAt,
createdBy,
isRatedByUser,
isVerified,
libraryItemId,
ratingCount,
status,
updatedAt,
updatedBy,
userCount
FROM aws.qapps.library_items
WHERE `instance-id` = '{{ instance-id }}' -- required
AND libraryItemId = '{{ libraryItemId }}' -- required
AND region = '{{ region }}' -- required
AND appId = '{{ appId }}'
;
```
</TabItem>
<TabItem value="list_library_items">

Lists the library items for Amazon Q Apps that are published and available for users in your Amazon Web Services account.

```sql
SELECT
appId,
appVersion,
categories,
createdAt,
createdBy,
isRatedByUser,
isVerified,
libraryItemId,
ratingCount,
status,
updatedAt,
updatedBy,
userCount
FROM aws.qapps.library_items
WHERE `instance-id` = '{{ instance-id }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND nextToken = '{{ nextToken }}'
AND categoryId = '{{ categoryId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_library_item"
    values={[
        { label: 'create_library_item', value: 'create_library_item' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_library_item">

Creates a new library item for an Amazon Q App, allowing it to be discovered and used by other allowed users.

```sql
INSERT INTO aws.qapps.library_items (
appId,
appVersion,
categories,
`instance-id`,
region
)
SELECT 
'{{ appId }}' /* required */,
{{ appVersion }} /* required */,
'{{ categories }}' /* required */,
'{{ instance-id }}',
'{{ region }}'
RETURNING
createdAt,
createdBy,
isVerified,
libraryItemId,
ratingCount,
status,
updatedAt,
updatedBy
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: library_items
  props:
    - name: instance-id
      value: "{{ instance-id }}"
      description: Required parameter for the library_items resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the library_items resource.
    - name: appId
      value: "{{ appId }}"
    - name: appVersion
      value: {{ appVersion }}
    - name: categories
      value:
        - "{{ categories }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_library_item"
    values={[
        { label: 'update_library_item', value: 'update_library_item' }
    ]}
>
<TabItem value="update_library_item">

Updates the library item for an Amazon Q App.

```sql
UPDATE aws.qapps.library_items
SET 
libraryItemId = '{{ libraryItemId }}',
status = '{{ status }}',
categories = '{{ categories }}'
WHERE 
`instance-id` = '{{ instance-id }}' --required
AND region = '{{ region }}' --required
AND libraryItemId = '{{ libraryItemId }}' --required
RETURNING
appId,
appVersion,
categories,
createdAt,
createdBy,
isRatedByUser,
isVerified,
libraryItemId,
ratingCount,
status,
updatedAt,
updatedBy,
userCount;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_library_item"
    values={[
        { label: 'delete_library_item', value: 'delete_library_item' }
    ]}
>
<TabItem value="delete_library_item">

Deletes a library item for an Amazon Q App, removing it from the library so it can no longer be discovered or used by other users.

```sql
DELETE FROM aws.qapps.library_items
WHERE `instance-id` = '{{ instance-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="associate_library_item_review"
    values={[
        { label: 'associate_library_item_review', value: 'associate_library_item_review' },
        { label: 'disassociate_library_item_review', value: 'disassociate_library_item_review' },
        { label: 'update_library_item_metadata', value: 'update_library_item_metadata' }
    ]}
>
<TabItem value="associate_library_item_review">

Associates a rating or review for a library item with the user submitting the request. This increments the rating count for the specified library item.

```sql
EXEC aws.qapps.library_items.associate_library_item_review 
@instance-id='{{ instance-id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"libraryItemId": "{{ libraryItemId }}"
}'
;
```
</TabItem>
<TabItem value="disassociate_library_item_review">

Removes a rating or review previously submitted by the user for a library item.

```sql
EXEC aws.qapps.library_items.disassociate_library_item_review 
@instance-id='{{ instance-id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"libraryItemId": "{{ libraryItemId }}"
}'
;
```
</TabItem>
<TabItem value="update_library_item_metadata">

Updates the verification status of a library item for an Amazon Q App.

```sql
EXEC aws.qapps.library_items.update_library_item_metadata 
@instance-id='{{ instance-id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"libraryItemId": "{{ libraryItemId }}", 
"isVerified": {{ isVerified }}
}'
;
```
</TabItem>
</Tabs>
