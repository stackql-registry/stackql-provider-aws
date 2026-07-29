--- 
title: documents
hide_title: false
hide_table_of_contents: false
keywords:
  - documents
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

Creates, updates, deletes, gets or lists a <code>documents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="documents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workdocs.documents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_document"
    values={[
        { label: 'get_document', value: 'get_document' }
    ]}
>
<TabItem value="get_document">

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
    <td><CopyableCode code="custom_metadata" /></td>
    <td><code>object</code></td>
    <td>The custom metadata on the document.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata details of the document.</td>
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
    <td><a href="#get_document"><CopyableCode code="get_document" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-includeCustomMetadata"><code>includeCustomMetadata</code></a></td>
    <td>Retrieves details of a document.</td>
</tr>
<tr>
    <td><a href="#update_document"><CopyableCode code="update_document" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Updates the specified attributes of a document. The user must have access to both the document and its parent folder, if applicable.</td>
</tr>
<tr>
    <td><a href="#delete_document"><CopyableCode code="delete_document" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Permanently deletes the specified document and its associated metadata.</td>
</tr>
<tr>
    <td><a href="#abort_document_version_upload"><CopyableCode code="abort_document_version_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-version_id"><code>version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Aborts the upload of the specified document version that was previously initiated by InitiateDocumentVersionUpload. The client should make this call only when it no longer intends to upload the document version, or fails to do so.</td>
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
<tr id="parameter-document_id">
    <td><CopyableCode code="document_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the document.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version_id">
    <td><CopyableCode code="version_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the version.</td>
</tr>
<tr id="parameter-Authentication">
    <td><CopyableCode code="Authentication" /></td>
    <td><code>string</code></td>
    <td>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</td>
</tr>
<tr id="parameter-includeCustomMetadata">
    <td><CopyableCode code="includeCustomMetadata" /></td>
    <td><code>boolean</code></td>
    <td>Set this to TRUE to include custom metadata in the response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_document"
    values={[
        { label: 'get_document', value: 'get_document' }
    ]}
>
<TabItem value="get_document">

Retrieves details of a document.

```sql
SELECT
custom_metadata,
metadata
FROM aws.workdocs.documents
WHERE document_id = '{{ document_id }}' -- required
AND region = '{{ region }}' -- required
AND Authentication = '{{ Authentication }}'
AND includeCustomMetadata = '{{ includeCustomMetadata }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_document"
    values={[
        { label: 'update_document', value: 'update_document' }
    ]}
>
<TabItem value="update_document">

Updates the specified attributes of a document. The user must have access to both the document and its parent folder, if applicable.

```sql
UPDATE aws.workdocs.documents
SET 
Name = '{{ Name }}',
ParentFolderId = '{{ ParentFolderId }}',
ResourceState = '{{ ResourceState }}'
WHERE 
document_id = '{{ document_id }}' --required
AND region = '{{ region }}' --required
AND Authentication = '{{ Authentication}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_document"
    values={[
        { label: 'delete_document', value: 'delete_document' }
    ]}
>
<TabItem value="delete_document">

Permanently deletes the specified document and its associated metadata.

```sql
DELETE FROM aws.workdocs.documents
WHERE document_id = '{{ document_id }}' --required
AND region = '{{ region }}' --required
AND Authentication = '{{ Authentication }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="abort_document_version_upload"
    values={[
        { label: 'abort_document_version_upload', value: 'abort_document_version_upload' }
    ]}
>
<TabItem value="abort_document_version_upload">

Aborts the upload of the specified document version that was previously initiated by InitiateDocumentVersionUpload. The client should make this call only when it no longer intends to upload the document version, or fails to do so.

```sql
EXEC aws.workdocs.documents.abort_document_version_upload 
@document_id='{{ document_id }}' --required, 
@version_id='{{ version_id }}' --required, 
@region='{{ region }}' --required, 
@Authentication='{{ Authentication }}'
;
```
</TabItem>
</Tabs>
