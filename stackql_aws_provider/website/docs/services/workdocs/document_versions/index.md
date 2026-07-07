--- 
title: document_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - document_versions
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

Creates, updates, deletes, gets or lists a <code>document_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="document_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workdocs.document_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_document_version"
    values={[
        { label: 'get_document_version', value: 'get_document_version' },
        { label: 'describe_document_versions', value: 'describe_document_versions' }
    ]}
>
<TabItem value="get_document_version">

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
    <td><CopyableCode code="CustomMetadata" /></td>
    <td><code>object</code></td>
    <td>The custom metadata on the document version.</td>
</tr>
<tr>
    <td><CopyableCode code="Metadata" /></td>
    <td><code>object</code></td>
    <td>The version metadata.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_document_versions">

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
    <td><CopyableCode code="ContentCreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the content of the document was originally created.</td>
</tr>
<tr>
    <td><CopyableCode code="ContentModifiedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the content of the document was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="ContentType" /></td>
    <td><code>string</code></td>
    <td>The content type of the document.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the document was first uploaded.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatorId" /></td>
    <td><code>string</code></td>
    <td>The ID of the creator. (pattern: &lt;code&gt;&#91;&\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the version. (pattern: &lt;code&gt;&#91;\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ModifiedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the document was last uploaded.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the version. (pattern: &lt;code&gt;&#91;\u0020-\u202D\u202F-\uFFFF&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Signature" /></td>
    <td><code>string</code></td>
    <td>The signature of the document. (pattern: &lt;code&gt;&#91;&\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the document, in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="Source" /></td>
    <td><code>object</code></td>
    <td>The source of the document.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the document. (INITIALIZED, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="Thumbnail" /></td>
    <td><code>object</code></td>
    <td>The thumbnail of the document.</td>
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
    <td><a href="#get_document_version"><CopyableCode code="get_document_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-version_id"><code>version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-fields"><code>fields</code></a>, <a href="#parameter-includeCustomMetadata"><code>includeCustomMetadata</code></a></td>
    <td>Retrieves version metadata for the specified document.</td>
</tr>
<tr>
    <td><a href="#describe_document_versions"><CopyableCode code="describe_document_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-include"><code>include</code></a>, <a href="#parameter-fields"><code>fields</code></a></td>
    <td>Retrieves the document versions for the specified document. By default, only active versions are returned.</td>
</tr>
<tr>
    <td><a href="#update_document_version"><CopyableCode code="update_document_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-version_id"><code>version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Changes the status of the document version to ACTIVE. Amazon WorkDocs also sets its document container to ACTIVE. This is the last step in a document upload, after the client uploads the document to an S3-presigned URL returned by InitiateDocumentVersionUpload.</td>
</tr>
<tr>
    <td><a href="#delete_document_version"><CopyableCode code="delete_document_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-version_id"><code>version_id</code></a>, <a href="#parameter-deletePriorVersions"><code>deletePriorVersions</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Deletes a specific version of a document.</td>
</tr>
<tr>
    <td><a href="#restore_document_versions"><CopyableCode code="restore_document_versions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Recovers a deleted version of an Amazon WorkDocs document.</td>
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
<tr id="parameter-deletePriorVersions">
    <td><CopyableCode code="deletePriorVersions" /></td>
    <td><code>boolean</code></td>
    <td>Deletes all versions of a document prior to the current version.</td>
</tr>
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
    <td>The ID of the version being deleted.</td>
</tr>
<tr id="parameter-Authentication">
    <td><CopyableCode code="Authentication" /></td>
    <td><code>string</code></td>
    <td>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</td>
</tr>
<tr id="parameter-fields">
    <td><CopyableCode code="fields" /></td>
    <td><code>string</code></td>
    <td>Specify "SOURCE" to include initialized versions and a URL for the source document.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of values. Specify "INITIALIZED" to include incomplete versions.</td>
</tr>
<tr id="parameter-includeCustomMetadata">
    <td><CopyableCode code="includeCustomMetadata" /></td>
    <td><code>boolean</code></td>
    <td>Set this to TRUE to include custom metadata in the response.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of versions to return with this call.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results. (You received this marker from a previous call.)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_document_version"
    values={[
        { label: 'get_document_version', value: 'get_document_version' },
        { label: 'describe_document_versions', value: 'describe_document_versions' }
    ]}
>
<TabItem value="get_document_version">

Retrieves version metadata for the specified document.

```sql
SELECT
CustomMetadata,
Metadata
FROM aws.workdocs.document_versions
WHERE document_id = '{{ document_id }}' -- required
AND version_id = '{{ version_id }}' -- required
AND region = '{{ region }}' -- required
AND Authentication = '{{ Authentication }}'
AND fields = '{{ fields }}'
AND includeCustomMetadata = '{{ includeCustomMetadata }}'
;
```
</TabItem>
<TabItem value="describe_document_versions">

Retrieves the document versions for the specified document. By default, only active versions are returned.

```sql
SELECT
ContentCreatedTimestamp,
ContentModifiedTimestamp,
ContentType,
CreatedTimestamp,
CreatorId,
Id,
ModifiedTimestamp,
Name,
Signature,
Size,
Source,
Status,
Thumbnail
FROM aws.workdocs.document_versions
WHERE document_id = '{{ document_id }}' -- required
AND region = '{{ region }}' -- required
AND Authentication = '{{ Authentication }}'
AND marker = '{{ marker }}'
AND limit = '{{ limit }}'
AND include = '{{ include }}'
AND fields = '{{ fields }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_document_version"
    values={[
        { label: 'update_document_version', value: 'update_document_version' }
    ]}
>
<TabItem value="update_document_version">

Changes the status of the document version to ACTIVE. Amazon WorkDocs also sets its document container to ACTIVE. This is the last step in a document upload, after the client uploads the document to an S3-presigned URL returned by InitiateDocumentVersionUpload.

```sql
UPDATE aws.workdocs.document_versions
SET 
VersionStatus = '{{ VersionStatus }}'
WHERE 
document_id = '{{ document_id }}' --required
AND version_id = '{{ version_id }}' --required
AND region = '{{ region }}' --required
AND Authentication = '{{ Authentication}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_document_version"
    values={[
        { label: 'delete_document_version', value: 'delete_document_version' }
    ]}
>
<TabItem value="delete_document_version">

Deletes a specific version of a document.

```sql
DELETE FROM aws.workdocs.document_versions
WHERE document_id = '{{ document_id }}' --required
AND version_id = '{{ version_id }}' --required
AND deletePriorVersions = '{{ deletePriorVersions }}' --required
AND region = '{{ region }}' --required
AND Authentication = '{{ Authentication }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restore_document_versions"
    values={[
        { label: 'restore_document_versions', value: 'restore_document_versions' }
    ]}
>
<TabItem value="restore_document_versions">

Recovers a deleted version of an Amazon WorkDocs document.

```sql
EXEC aws.workdocs.document_versions.restore_document_versions 
@document_id='{{ document_id }}' --required, 
@region='{{ region }}' --required, 
@Authentication='{{ Authentication }}'
;
```
</TabItem>
</Tabs>
