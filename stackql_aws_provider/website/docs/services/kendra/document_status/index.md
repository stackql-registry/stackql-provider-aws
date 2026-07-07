--- 
title: document_status
hide_title: false
hide_table_of_contents: false
keywords:
  - document_status
  - kendra
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

Creates, updates, deletes, gets or lists a <code>document_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="document_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kendra.document_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_document_status"
    values={[
        { label: 'batch_get_document_status', value: 'batch_get_document_status' }
    ]}
>
<TabItem value="batch_get_document_status">

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
    <td><CopyableCode code="DocumentStatusList" /></td>
    <td><code>array</code></td>
    <td>The status of documents. The status indicates if the document is waiting to be indexed, is in the process of indexing, has completed indexing, or failed indexing. If a document failed indexing, the status provides the reason why.</td>
</tr>
<tr>
    <td><CopyableCode code="Errors" /></td>
    <td><code>array</code></td>
    <td>A list of documents that Amazon Kendra couldn't get the status for. The list includes the ID of the document and the reason that the status couldn't be found.</td>
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
    <td><a href="#batch_get_document_status"><CopyableCode code="batch_get_document_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the indexing status for one or more documents submitted with the BatchPutDocument API. When you use the BatchPutDocument API, documents are indexed asynchronously. You can use the BatchGetDocumentStatus API to get the current status of a list of documents so that you can determine if they have been successfully indexed. You can also use the BatchGetDocumentStatus API to check the status of the BatchDeleteDocument API. When a document is deleted from the index, Amazon Kendra returns NOT_FOUND as the status.</td>
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
    defaultValue="batch_get_document_status"
    values={[
        { label: 'batch_get_document_status', value: 'batch_get_document_status' }
    ]}
>
<TabItem value="batch_get_document_status">

Returns the indexing status for one or more documents submitted with the BatchPutDocument API. When you use the BatchPutDocument API, documents are indexed asynchronously. You can use the BatchGetDocumentStatus API to get the current status of a list of documents so that you can determine if they have been successfully indexed. You can also use the BatchGetDocumentStatus API to check the status of the BatchDeleteDocument API. When a document is deleted from the index, Amazon Kendra returns NOT_FOUND as the status.

```sql
SELECT
DocumentStatusList,
Errors
FROM aws.kendra.document_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
