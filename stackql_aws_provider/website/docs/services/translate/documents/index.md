--- 
title: documents
hide_title: false
hide_table_of_contents: false
keywords:
  - documents
  - translate
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.translate.documents" /></td></tr>
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
    <td><a href="#translate_document"><CopyableCode code="translate_document" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Document"><code>Document</code></a>, <a href="#parameter-SourceLanguageCode"><code>SourceLanguageCode</code></a>, <a href="#parameter-TargetLanguageCode"><code>TargetLanguageCode</code></a></td>
    <td></td>
    <td>Translates the input document from the source language to the target language. This synchronous operation supports text, HTML, or Word documents as the input document. TranslateDocument supports translations from English to any supported language, and from any supported language to English. Therefore, specify either the source language code or the target language code as “en” (English). If you set the Formality parameter, the request will fail if the target language does not support formality. For a list of target languages that support formality, see Setting formality.</td>
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
    defaultValue="translate_document"
    values={[
        { label: 'translate_document', value: 'translate_document' }
    ]}
>
<TabItem value="translate_document">

Translates the input document from the source language to the target language. This synchronous operation supports text, HTML, or Word documents as the input document. TranslateDocument supports translations from English to any supported language, and from any supported language to English. Therefore, specify either the source language code or the target language code as “en” (English). If you set the Formality parameter, the request will fail if the target language does not support formality. For a list of target languages that support formality, see Setting formality.

```sql
EXEC aws.translate.documents.translate_document 
@region='{{ region }}' --required 
@@json=
'{
"Document": "{{ Document }}", 
"TerminologyNames": "{{ TerminologyNames }}", 
"SourceLanguageCode": "{{ SourceLanguageCode }}", 
"TargetLanguageCode": "{{ TargetLanguageCode }}", 
"Settings": "{{ Settings }}"
}'
;
```
</TabItem>
</Tabs>
