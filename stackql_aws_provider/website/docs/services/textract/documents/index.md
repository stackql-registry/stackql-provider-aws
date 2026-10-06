--- 
title: documents
hide_title: false
hide_table_of_contents: false
keywords:
  - documents
  - textract
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.textract.documents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#analyze_document"><CopyableCode code="analyze_document" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Document"><code>Document</code></a>, <a href="#parameter-FeatureTypes"><code>FeatureTypes</code></a></td>
    <td></td>
    <td>Analyzes an input document for relationships between detected items. The types of information returned are as follows: Form data (key-value pairs). The related information is returned in two Block objects, each of type KEY_VALUE_SET: a KEY Block object and a VALUE Block object. For example, Name: Ana Silva Carolina contains a key and value. Name: is the key. Ana Silva Carolina is the value. Table and table cell data. A TABLE Block object contains information about a detected table. A CELL Block object is returned for each cell in a table. Lines and words of text. A LINE Block object contains one or more WORD Block objects. All lines and words that are detected in the document are returned (including text that doesn't have a relationship with the value of FeatureTypes). Signatures. A SIGNATURE Block object contains the location information of a signature in a document. If used in conjunction with forms or tables, a signature can be given a Key-Value pairing or be detected in the cell of a table. Query. A QUERY Block object contains the query text, alias and link to the associated Query results block object. Query Result. A QUERY_RESULT Block object contains the answer to the query and an ID that connects it to the query asked. This Block also contains a confidence score. Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables. A SELECTION_ELEMENT Block object contains information about a selection element, including the selection status. You can choose which type of analysis to perform by specifying the FeatureTypes list. The output is returned in a list of Block objects. AnalyzeDocument is a synchronous operation. To analyze documents asynchronously, use StartDocumentAnalysis. For more information, see Document Text Analysis.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="analyze_document"
    values={[
        { label: 'analyze_document', value: 'analyze_document' }
    ]}
>
<TabItem value="analyze_document">

Analyzes an input document for relationships between detected items. The types of information returned are as follows: Form data (key-value pairs). The related information is returned in two Block objects, each of type KEY_VALUE_SET: a KEY Block object and a VALUE Block object. For example, Name: Ana Silva Carolina contains a key and value. Name: is the key. Ana Silva Carolina is the value. Table and table cell data. A TABLE Block object contains information about a detected table. A CELL Block object is returned for each cell in a table. Lines and words of text. A LINE Block object contains one or more WORD Block objects. All lines and words that are detected in the document are returned (including text that doesn't have a relationship with the value of FeatureTypes). Signatures. A SIGNATURE Block object contains the location information of a signature in a document. If used in conjunction with forms or tables, a signature can be given a Key-Value pairing or be detected in the cell of a table. Query. A QUERY Block object contains the query text, alias and link to the associated Query results block object. Query Result. A QUERY_RESULT Block object contains the answer to the query and an ID that connects it to the query asked. This Block also contains a confidence score. Selection elements such as check boxes and option buttons (radio buttons) can be detected in form data and in tables. A SELECTION_ELEMENT Block object contains information about a selection element, including the selection status. You can choose which type of analysis to perform by specifying the FeatureTypes list. The output is returned in a list of Block objects. AnalyzeDocument is a synchronous operation. To analyze documents asynchronously, use StartDocumentAnalysis. For more information, see Document Text Analysis.

```sql
EXEC aws.textract.documents.analyze_document 
@region='{{ region }}' --required 
@@json=
'{
"Document": "{{ Document }}", 
"FeatureTypes": "{{ FeatureTypes }}", 
"HumanLoopConfig": "{{ HumanLoopConfig }}", 
"QueriesConfig": "{{ QueriesConfig }}", 
"AdaptersConfig": "{{ AdaptersConfig }}"
}'
;
```
</TabItem>
</Tabs>
