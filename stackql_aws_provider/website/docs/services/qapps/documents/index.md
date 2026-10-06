--- 
title: documents
hide_title: false
hide_table_of_contents: false
keywords:
  - documents
  - qapps
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qapps.documents" /></td></tr>
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
    <td><a href="#import_document"><CopyableCode code="import_document" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cardId"><code>cardId</code></a>, <a href="#parameter-appId"><code>appId</code></a>, <a href="#parameter-fileContentsBase64"><code>fileContentsBase64</code></a>, <a href="#parameter-fileName"><code>fileName</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td></td>
    <td>Uploads a file that can then be used either as a default in a FileUploadCard from Q App definition or as a file that is used inside a single Q App run. The purpose of the document is determined by a scope parameter that indicates whether it is at the app definition level or at the app session level.</td>
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
<tr id="parameter-instance-id">
    <td><CopyableCode code="instance-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Q Business application environment instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="import_document"
    values={[
        { label: 'import_document', value: 'import_document' }
    ]}
>
<TabItem value="import_document">

Uploads a file that can then be used either as a default in a FileUploadCard from Q App definition or as a file that is used inside a single Q App run. The purpose of the document is determined by a scope parameter that indicates whether it is at the app definition level or at the app session level.

```sql
EXEC aws.qapps.documents.import_document 
@instance-id='{{ instance-id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"cardId": "{{ cardId }}", 
"appId": "{{ appId }}", 
"fileContentsBase64": "{{ fileContentsBase64 }}", 
"fileName": "{{ fileName }}", 
"scope": "{{ scope }}", 
"sessionId": "{{ sessionId }}"
}'
;
```
</TabItem>
</Tabs>
