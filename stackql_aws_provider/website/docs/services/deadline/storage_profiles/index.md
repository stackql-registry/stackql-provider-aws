--- 
title: storage_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - storage_profiles
  - deadline
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

Creates, updates, deletes, gets or lists a <code>storage_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="storage_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.storage_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_storage_profile"
    values={[
        { label: 'get_storage_profile', value: 'get_storage_profile' },
        { label: 'list_storage_profiles', value: 'list_storage_profiles' }
    ]}
>
<TabItem value="get_storage_profile">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user or system that created this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the storage profile. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="fileSystemLocations" /></td>
    <td><code>array</code></td>
    <td>The location of the files for the storage profile.</td>
</tr>
<tr>
    <td><CopyableCode code="osFamily" /></td>
    <td><code>string</code></td>
    <td>The operating system (OS) for the storage profile. (WINDOWS, LINUX, MACOS)</td>
</tr>
<tr>
    <td><CopyableCode code="storageProfileId" /></td>
    <td><code>string</code></td>
    <td>The storage profile ID. (pattern: &lt;code&gt;sp-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_storage_profiles">

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
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the storage profile summary to update. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="osFamily" /></td>
    <td><code>string</code></td>
    <td>The operating system (OS) family. (WINDOWS, LINUX, MACOS)</td>
</tr>
<tr>
    <td><CopyableCode code="storageProfileId" /></td>
    <td><code>string</code></td>
    <td>The storage profile ID. (pattern: &lt;code&gt;sp-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_storage_profile"><CopyableCode code="get_storage_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-storage_profile_id"><code>storage_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a storage profile.</td>
</tr>
<tr>
    <td><a href="#list_storage_profiles"><CopyableCode code="list_storage_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists storage profiles.</td>
</tr>
<tr>
    <td><a href="#create_storage_profile"><CopyableCode code="create_storage_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-osFamily"><code>osFamily</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Creates a storage profile that specifies the operating system, file type, and file location of resources used on a farm.</td>
</tr>
<tr>
    <td><a href="#update_storage_profile"><CopyableCode code="update_storage_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-storage_profile_id"><code>storage_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Updates a storage profile.</td>
</tr>
<tr>
    <td><a href="#delete_storage_profile"><CopyableCode code="delete_storage_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-storage_profile_id"><code>storage_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a storage profile.</td>
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
<tr id="parameter-farm_id">
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The farm ID of the farm from which to remove the storage profile.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-storage_profile_id">
    <td><CopyableCode code="storage_profile_id" /></td>
    <td><code>string</code></td>
    <td>The storage profile ID of the storage profile to delete.</td>
</tr>
<tr id="parameter-X-Amz-Client-Token">
    <td><CopyableCode code="X-Amz-Client-Token" /></td>
    <td><code>string</code></td>
    <td>The unique token which the server uses to recognize retries of the same request.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null to start from the beginning.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_storage_profile"
    values={[
        { label: 'get_storage_profile', value: 'get_storage_profile' },
        { label: 'list_storage_profiles', value: 'list_storage_profiles' }
    ]}
>
<TabItem value="get_storage_profile">

Gets a storage profile.

```sql
SELECT
createdAt,
createdBy,
displayName,
fileSystemLocations,
osFamily,
storageProfileId,
updatedAt,
updatedBy
FROM aws.deadline.storage_profiles
WHERE farm_id = '{{ farm_id }}' -- required
AND storage_profile_id = '{{ storage_profile_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_storage_profiles">

Lists storage profiles.

```sql
SELECT
displayName,
osFamily,
storageProfileId
FROM aws.deadline.storage_profiles
WHERE farm_id = '{{ farm_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_storage_profile"
    values={[
        { label: 'create_storage_profile', value: 'create_storage_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_storage_profile">

Creates a storage profile that specifies the operating system, file type, and file location of resources used on a farm.

```sql
INSERT INTO aws.deadline.storage_profiles (
displayName,
osFamily,
fileSystemLocations,
farm_id,
region,
`X-Amz-Client-Token`
)
SELECT 
'{{ displayName }}' /* required */,
'{{ osFamily }}' /* required */,
'{{ fileSystemLocations }}',
'{{ farm_id }}',
'{{ region }}',
'{{ X-Amz-Client-Token }}'
RETURNING
storageProfileId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: storage_profiles
  props:
    - name: farm_id
      value: "{{ farm_id }}"
      description: Required parameter for the storage_profiles resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the storage_profiles resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: osFamily
      value: "{{ osFamily }}"
      valid_values: ['WINDOWS', 'LINUX', 'MACOS']
    - name: fileSystemLocations
      value:
        - name: "{{ name }}"
          path: "{{ path }}"
          type_: "{{ type_ }}"
    - name: X-Amz-Client-Token
      value: "{{ X-Amz-Client-Token }}"
      description: The unique token which the server uses to recognize retries of the same request.
      description: The unique token which the server uses to recognize retries of the same request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_storage_profile"
    values={[
        { label: 'update_storage_profile', value: 'update_storage_profile' }
    ]}
>
<TabItem value="update_storage_profile">

Updates a storage profile.

```sql
UPDATE aws.deadline.storage_profiles
SET 
displayName = '{{ displayName }}',
osFamily = '{{ osFamily }}',
fileSystemLocationsToAdd = '{{ fileSystemLocationsToAdd }}',
fileSystemLocationsToRemove = '{{ fileSystemLocationsToRemove }}'
WHERE 
farm_id = '{{ farm_id }}' --required
AND storage_profile_id = '{{ storage_profile_id }}' --required
AND region = '{{ region }}' --required
AND `X-Amz-Client-Token` = '{{ X-Amz-Client-Token}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_storage_profile"
    values={[
        { label: 'delete_storage_profile', value: 'delete_storage_profile' }
    ]}
>
<TabItem value="delete_storage_profile">

Deletes a storage profile.

```sql
DELETE FROM aws.deadline.storage_profiles
WHERE farm_id = '{{ farm_id }}' --required
AND storage_profile_id = '{{ storage_profile_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
