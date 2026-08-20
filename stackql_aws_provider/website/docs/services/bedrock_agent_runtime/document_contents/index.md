--- 
title: document_contents
hide_title: false
hide_table_of_contents: false
keywords:
  - document_contents
  - bedrock_agent_runtime
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent_runtime.document_contents" /></td></tr>
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
    <td><CopyableCode code="document_content_length" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the document content in bytes available at the pre-signed URL.</td>
</tr>
<tr>
    <td><CopyableCode code="mime_type" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the document content. For RAW format, this is the original file type (for example, application/pdf). For EXTRACTED format, this is always application/json.</td>
</tr>
<tr>
    <td><CopyableCode code="presigned_url" /></td>
    <td><code>string</code></td>
    <td>A pre-signed URL for downloading the document content. The URL expires after 5 minutes.</td>
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
    <td><a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the content of an ingested document from a knowledge base. Returns a pre-signed URL for secure document access.</td>
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
<tr id="parameter-data_source_id">
    <td><CopyableCode code="data_source_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data source that contains the document.</td>
</tr>
<tr id="parameter-document_id">
    <td><CopyableCode code="document_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the document to retrieve content for.</td>
</tr>
<tr id="parameter-knowledge_base_id">
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the knowledge base that contains the document.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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

Retrieves the content of an ingested document from a knowledge base. Returns a pre-signed URL for secure document access.

```sql
SELECT
document_content_length,
mime_type,
presigned_url
FROM aws.bedrock_agent_runtime.document_contents
WHERE data_source_id = '{{ data_source_id }}' -- required
AND document_id = '{{ document_id }}' -- required
AND knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
