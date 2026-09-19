--- 
title: ids
hide_title: false
hide_table_of_contents: false
keywords:
  - ids
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

Creates, updates, deletes, gets or lists an <code>ids</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ids" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.textract.ids" /></td></tr>
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
    <td><a href="#analyze_id"><CopyableCode code="analyze_id" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DocumentPages"><code>DocumentPages</code></a></td>
    <td></td>
    <td>Analyzes identity documents for relevant information. This information is extracted and returned as IdentityDocumentFields, which records both the normalized field and value of the extracted text. Unlike other Amazon Textract operations, AnalyzeID doesn't return any Geometry data.</td>
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
    defaultValue="analyze_id"
    values={[
        { label: 'analyze_id', value: 'analyze_id' }
    ]}
>
<TabItem value="analyze_id">

Analyzes identity documents for relevant information. This information is extracted and returned as IdentityDocumentFields, which records both the normalized field and value of the extracted text. Unlike other Amazon Textract operations, AnalyzeID doesn't return any Geometry data.

```sql
EXEC aws.textract.ids.analyze_id 
@region='{{ region }}' --required 
@@json=
'{
"DocumentPages": "{{ DocumentPages }}"
}'
;
```
</TabItem>
</Tabs>
