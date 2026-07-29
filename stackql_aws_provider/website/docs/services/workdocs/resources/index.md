--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
  - workdocs
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workdocs.resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resources"
    values={[
        { label: 'get_resources', value: 'get_resources' }
    ]}
>
<TabItem value="get_resources">

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
    <td><CopyableCode code="documents" /></td>
    <td><code>array</code></td>
    <td>The documents in the specified collection.</td>
</tr>
<tr>
    <td><CopyableCode code="folders" /></td>
    <td><code>array</code></td>
    <td>The folders in the specified folder.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</td>
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
    <td><a href="#get_resources"><CopyableCode code="get_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-collectionType"><code>collectionType</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-marker"><code>marker</code></a></td>
    <td>Retrieves a collection of resources, including folders and documents. The only CollectionType supported is SHARED_WITH_ME.</td>
</tr>
<tr>
    <td><a href="#create_custom_metadata"><CopyableCode code="create_custom_metadata" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CustomMetadata"><code>CustomMetadata</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-versionid"><code>versionid</code></a></td>
    <td>Adds one or more custom properties to the specified resource (a folder, document, or version).</td>
</tr>
<tr>
    <td><a href="#create_labels"><CopyableCode code="create_labels" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Labels"><code>Labels</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Adds the specified list of labels to the given resource (a document or folder)</td>
</tr>
<tr>
    <td><a href="#delete_custom_metadata"><CopyableCode code="delete_custom_metadata" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-versionId"><code>versionId</code></a>, <a href="#parameter-keys"><code>keys</code></a>, <a href="#parameter-deleteAll"><code>deleteAll</code></a></td>
    <td>Deletes custom metadata from the specified resource.</td>
</tr>
<tr>
    <td><a href="#delete_labels"><CopyableCode code="delete_labels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-resource_id"><code>resource_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-labels"><code>labels</code></a>, <a href="#parameter-deleteAll"><code>deleteAll</code></a></td>
    <td>Deletes the specified list of labels from a resource.</td>
</tr>
<tr>
    <td><a href="#search_resources"><CopyableCode code="search_resources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Searches metadata and the content of folders, documents, document versions, and comments.</td>
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
<tr id="parameter-resource_id">
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
</tr>
<tr id="parameter-Authentication">
    <td><CopyableCode code="Authentication" /></td>
    <td><code>string</code></td>
    <td>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</td>
</tr>
<tr id="parameter-collectionType">
    <td><CopyableCode code="collectionType" /></td>
    <td><code>string</code></td>
    <td>The collection type.</td>
</tr>
<tr id="parameter-deleteAll">
    <td><CopyableCode code="deleteAll" /></td>
    <td><code>boolean</code></td>
    <td>Flag to request removal of all labels from the specified resource.</td>
</tr>
<tr id="parameter-keys">
    <td><CopyableCode code="keys" /></td>
    <td><code>array</code></td>
    <td>List of properties to remove.</td>
</tr>
<tr id="parameter-labels">
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>List of labels to delete from the resource.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of resources to return.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results. This marker was received from a previous call.</td>
</tr>
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The user ID for the resource collection. This is a required field for accessing the API operation using IAM credentials.</td>
</tr>
<tr id="parameter-versionId">
    <td><CopyableCode code="versionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the version, if the custom metadata is being deleted from a document version.</td>
</tr>
<tr id="parameter-versionid">
    <td><CopyableCode code="versionid" /></td>
    <td><code>string</code></td>
    <td>The ID of the version, if the custom metadata is being added to a document version.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_resources"
    values={[
        { label: 'get_resources', value: 'get_resources' }
    ]}
>
<TabItem value="get_resources">

Retrieves a collection of resources, including folders and documents. The only CollectionType supported is SHARED_WITH_ME.

```sql
SELECT
documents,
folders,
marker
FROM aws.workdocs.resources
WHERE region = '{{ region }}' -- required
AND Authentication = '{{ Authentication }}'
AND userId = '{{ userId }}'
AND collectionType = '{{ collectionType }}'
AND limit = '{{ limit }}'
AND marker = '{{ marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_metadata"
    values={[
        { label: 'create_custom_metadata', value: 'create_custom_metadata' },
        { label: 'create_labels', value: 'create_labels' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_metadata">

Adds one or more custom properties to the specified resource (a folder, document, or version).

```sql
INSERT INTO aws.workdocs.resources (
CustomMetadata,
resource_id,
region,
Authentication,
versionid
)
SELECT 
'{{ CustomMetadata }}' /* required */,
'{{ resource_id }}',
'{{ region }}',
'{{ Authentication }}',
'{{ versionid }}'
;
```
</TabItem>
<TabItem value="create_labels">

Adds the specified list of labels to the given resource (a document or folder)

```sql
INSERT INTO aws.workdocs.resources (
Labels,
resource_id,
region,
Authentication
)
SELECT 
'{{ Labels }}' /* required */,
'{{ resource_id }}',
'{{ region }}',
'{{ Authentication }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resources
  props:
    - name: resource_id
      value: "{{ resource_id }}"
      description: Required parameter for the resources resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resources resource.
    - name: CustomMetadata
      value: "{{ CustomMetadata }}"
    - name: Labels
      value:
        - "{{ Labels }}"
    - name: Authentication
      value: "{{ Authentication }}"
      description: Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
      description: Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
    - name: versionid
      value: "{{ versionid }}"
      description: The ID of the version, if the custom metadata is being added to a document version.
      description: The ID of the version, if the custom metadata is being added to a document version.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_metadata"
    values={[
        { label: 'delete_custom_metadata', value: 'delete_custom_metadata' }
    ]}
>
<TabItem value="delete_custom_metadata">

Deletes custom metadata from the specified resource.

```sql
DELETE FROM aws.workdocs.resources
WHERE resource_id = '{{ resource_id }}' --required
AND region = '{{ region }}' --required
AND Authentication = '{{ Authentication }}'
AND versionId = '{{ versionId }}'
AND keys = '{{ keys }}'
AND deleteAll = '{{ deleteAll }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_labels"
    values={[
        { label: 'delete_labels', value: 'delete_labels' },
        { label: 'search_resources', value: 'search_resources' }
    ]}
>
<TabItem value="delete_labels">

Deletes the specified list of labels from a resource.

```sql
EXEC aws.workdocs.resources.delete_labels 
@resource_id='{{ resource_id }}' --required, 
@region='{{ region }}' --required, 
@Authentication='{{ Authentication }}', 
@labels='{{ labels }}', 
@deleteAll={{ deleteAll }}
;
```
</TabItem>
<TabItem value="search_resources">

Searches metadata and the content of folders, documents, document versions, and comments.

```sql
EXEC aws.workdocs.resources.search_resources 
@region='{{ region }}' --required, 
@Authentication='{{ Authentication }}' 
@@json=
'{
"QueryText": "{{ QueryText }}", 
"QueryScopes": "{{ QueryScopes }}", 
"OrganizationId": "{{ OrganizationId }}", 
"AdditionalResponseFields": "{{ AdditionalResponseFields }}", 
"Filters": "{{ Filters }}", 
"OrderBy": "{{ OrderBy }}", 
"Limit": {{ Limit }}, 
"Marker": "{{ Marker }}"
}'
;
```
</TabItem>
</Tabs>
