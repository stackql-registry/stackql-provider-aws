--- 
title: document_contents
hide_title: false
hide_table_of_contents: false
keywords:
  - document_contents
  - qbusiness
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

Creates, updates, deletes, gets or lists a <code>document_contents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="document_contents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.document_contents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_document_content"
    values={[
        { label: 'get_document_content', value: 'get_document_content' }
    ]}
>
<TabItem value="get_document_content">

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
    <td><CopyableCode code="mime_type" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the document content. When outputFormat is RAW, this corresponds to the original document's MIME type (e.g., application/pdf, text/plain, application/vnd.openxmlformats-officedocument.wordprocessingml.document). When outputFormat is EXTRACTED, the MIME type is always application/json.</td>
</tr>
<tr>
    <td><CopyableCode code="presigned_url" /></td>
    <td><code>string</code></td>
    <td>A pre-signed URL that provides temporary access to download the document content directly from Amazon Q Business. The URL expires after 5 minutes for security purposes. This URL is generated only after successful ACL validation.</td>
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
    <td><a href="#get_document_content"><CopyableCode code="get_document_content" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-dataSourceId"><code>dataSourceId</code></a>, <a href="#parameter-outputFormat"><code>outputFormat</code></a></td>
    <td>Retrieves the content of a document that was ingested into Amazon Q Business. This API validates user authorization against document ACLs before returning a pre-signed URL for secure document access. You can download or view source documents referenced in chat responses through the URL.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Q Business application containing the document. This ensures the request is scoped to the correct application environment and its associated security policies.</td>
</tr>
<tr id="parameter-document_id">
    <td><CopyableCode code="document_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the document that is indexed via BatchPutDocument API or file-upload or connector sync. It is also found in chat or chatSync response.</td>
</tr>
<tr id="parameter-index_id">
    <td><CopyableCode code="index_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the index where documents are indexed.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-dataSourceId">
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the data source from which the document was ingested. This field is not present if the document is ingested by directly calling the BatchPutDocument API. If the document is from a file-upload data source, the datasource will be "uploaded-docs-file-stat-datasourceid".</td>
</tr>
<tr id="parameter-outputFormat">
    <td><CopyableCode code="outputFormat" /></td>
    <td><code>string</code></td>
    <td>Document outputFormat. Defaults to RAW if not selected.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_document_content"
    values={[
        { label: 'get_document_content', value: 'get_document_content' }
    ]}
>
<TabItem value="get_document_content">

Retrieves the content of a document that was ingested into Amazon Q Business. This API validates user authorization against document ACLs before returning a pre-signed URL for secure document access. You can download or view source documents referenced in chat responses through the URL.

```sql
SELECT
mime_type,
presigned_url
FROM aws.qbusiness.document_contents
WHERE application_id = '{{ application_id }}' -- required
AND index_id = '{{ index_id }}' -- required
AND document_id = '{{ document_id }}' -- required
AND region = '{{ region }}' -- required
AND dataSourceId = '{{ dataSourceId }}'
AND outputFormat = '{{ outputFormat }}'
;
```
</TabItem>
</Tabs>
