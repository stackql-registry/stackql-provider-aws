--- 
title: knowledge_base_documents
hide_title: false
hide_table_of_contents: false
keywords:
  - knowledge_base_documents
  - bedrock_agent
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

Creates, updates, deletes, gets or lists a <code>knowledge_base_documents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="knowledge_base_documents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent.knowledge_base_documents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_knowledge_base_documents"
    values={[
        { label: 'get_knowledge_base_documents', value: 'get_knowledge_base_documents' },
        { label: 'list_knowledge_base_documents', value: 'list_knowledge_base_documents' }
    ]}
>
<TabItem value="get_knowledge_base_documents">

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
    <td><CopyableCode code="document_details" /></td>
    <td><code>array</code></td>
    <td>A list of objects, each of which contains information about the documents that were retrieved.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_knowledge_base_documents">

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
    <td><CopyableCode code="data_source_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the data source connected to the knowledge base that the document was ingested into or deleted from. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="identifier" /></td>
    <td><code>object</code></td>
    <td>Contains information that identifies the document.</td>
</tr>
<tr>
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the knowledge base that the document was ingested into or deleted from. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The ingestion status of the document. The following statuses are possible: STARTING – You submitted the ingestion job containing the document. PENDING – The document is waiting to be ingested. IN_PROGRESS – The document is being ingested. INDEXED – The document was successfully indexed. PARTIALLY_INDEXED – The document was partially indexed. METADATA_PARTIALLY_INDEXED – You submitted metadata for an existing document and it was partially indexed. METADATA_UPDATE_FAILED – You submitted a metadata update for an existing document but it failed. FAILED – The document failed to be ingested. NOT_FOUND – The document wasn't found. IGNORED – The document was ignored during ingestion. DELETING – You submitted the delete job containing the document. DELETE_IN_PROGRESS – The document is being deleted. (INDEXED, PARTIALLY_INDEXED, PENDING, FAILED, METADATA_PARTIALLY_INDEXED, METADATA_UPDATE_FAILED, IGNORED, NOT_FOUND, STARTING, IN_PROGRESS, DELETING, DELETE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the status. Appears alongside the status IGNORED.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the document was last updated.</td>
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
    <td><a href="#get_knowledge_base_documents"><CopyableCode code="get_knowledge_base_documents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves specific documents from a data source that is connected to a knowledge base. For more information, see Ingest changes directly into a knowledge base in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#list_knowledge_base_documents"><CopyableCode code="list_knowledge_base_documents" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves all the documents contained in a data source that is connected to a knowledge base. For more information, see Ingest changes directly into a knowledge base in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_knowledge_base_documents"><CopyableCode code="delete_knowledge_base_documents" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes documents from a data source and syncs the changes to the knowledge base that is connected to it. For more information, see Ingest changes directly into a knowledge base in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#ingest_knowledge_base_documents"><CopyableCode code="ingest_knowledge_base_documents" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-knowledge_base_id"><code>knowledge_base_id</code></a>, <a href="#parameter-data_source_id"><code>data_source_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-documents"><code>documents</code></a></td>
    <td></td>
    <td>Ingests documents directly into the knowledge base that is connected to the data source. The dataSourceType specified in the content for each document must match the type of the data source that you specify in the header. For more information, see Ingest changes directly into a knowledge base in the Amazon Bedrock User Guide.</td>
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
    <td>The unique identifier of the data source connected to the knowledge base that you're adding documents to.</td>
</tr>
<tr id="parameter-knowledge_base_id">
    <td><CopyableCode code="knowledge_base_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the knowledge base to ingest the documents into.</td>
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
    defaultValue="get_knowledge_base_documents"
    values={[
        { label: 'get_knowledge_base_documents', value: 'get_knowledge_base_documents' },
        { label: 'list_knowledge_base_documents', value: 'list_knowledge_base_documents' }
    ]}
>
<TabItem value="get_knowledge_base_documents">

Retrieves specific documents from a data source that is connected to a knowledge base. For more information, see Ingest changes directly into a knowledge base in the Amazon Bedrock User Guide.

```sql
SELECT
document_details
FROM aws.bedrock_agent.knowledge_base_documents
WHERE knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND data_source_id = '{{ data_source_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_knowledge_base_documents">

Retrieves all the documents contained in a data source that is connected to a knowledge base. For more information, see Ingest changes directly into a knowledge base in the Amazon Bedrock User Guide.

```sql
SELECT
data_source_id,
identifier,
knowledge_base_id,
status,
status_reason,
updated_at
FROM aws.bedrock_agent.knowledge_base_documents
WHERE knowledge_base_id = '{{ knowledge_base_id }}' -- required
AND data_source_id = '{{ data_source_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_knowledge_base_documents"
    values={[
        { label: 'delete_knowledge_base_documents', value: 'delete_knowledge_base_documents' }
    ]}
>
<TabItem value="delete_knowledge_base_documents">

Deletes documents from a data source and syncs the changes to the knowledge base that is connected to it. For more information, see Ingest changes directly into a knowledge base in the Amazon Bedrock User Guide.

```sql
DELETE FROM aws.bedrock_agent.knowledge_base_documents
WHERE knowledge_base_id = '{{ knowledge_base_id }}' --required
AND data_source_id = '{{ data_source_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="ingest_knowledge_base_documents"
    values={[
        { label: 'ingest_knowledge_base_documents', value: 'ingest_knowledge_base_documents' }
    ]}
>
<TabItem value="ingest_knowledge_base_documents">

Ingests documents directly into the knowledge base that is connected to the data source. The dataSourceType specified in the content for each document must match the type of the data source that you specify in the header. For more information, see Ingest changes directly into a knowledge base in the Amazon Bedrock User Guide.

```sql
EXEC aws.bedrock_agent.knowledge_base_documents.ingest_knowledge_base_documents 
@knowledge_base_id='{{ knowledge_base_id }}' --required, 
@data_source_id='{{ data_source_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}", 
"documents": "{{ documents }}"
}'
;
```
</TabItem>
</Tabs>
