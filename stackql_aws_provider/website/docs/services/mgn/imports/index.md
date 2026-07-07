--- 
title: imports
hide_title: false
hide_table_of_contents: false
keywords:
  - imports
  - mgn
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

Creates, updates, deletes, gets or lists an <code>imports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="imports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.imports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_imports"
    values={[
        { label: 'list_imports', value: 'list_imports' }
    ]}
>
<TabItem value="list_imports">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>ImportTask arn.</td>
</tr>
<tr>
    <td><CopyableCode code="creationDateTime" /></td>
    <td><code>string</code></td>
    <td>Import task creation datetime. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endDateTime" /></td>
    <td><code>string</code></td>
    <td>Import task end datetime. (pattern: &lt;code&gt;&#91;1-9&#93;&#91;0-9&#93;*-(0&#91;1-9&#93;|1&#91;0-2&#93;)-(0&#91;1-9&#93;|&#91;12&#93;&#91;0-9&#93;|3&#91;01&#93;)T(&#91;0-1&#93;&#91;0-9&#93;|2&#91;0-3&#93;):&#91;0-5&#93;&#91;0-9&#93;:&#91;0-5&#93;&#91;0-9&#93;(\.&#91;0-9&#93;+)?Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="importID" /></td>
    <td><code>string</code></td>
    <td>Import task id. (pattern: &lt;code&gt;import-&#91;0-9a-zA-Z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="progressPercentage" /></td>
    <td><code>number (float)</code></td>
    <td>Import task progress percentage.</td>
</tr>
<tr>
    <td><CopyableCode code="s3BucketSource" /></td>
    <td><code>object</code></td>
    <td>Import task s3 bucket source.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Import task status. (PENDING, STARTED, FAILED, SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>object</code></td>
    <td>Import task summary.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Import task tags.</td>
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
    <td><a href="#list_imports"><CopyableCode code="list_imports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List imports.</td>
</tr>
<tr>
    <td><a href="#start_import_file_enrichment"><CopyableCode code="start_import_file_enrichment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-s3BucketSource"><code>s3BucketSource</code></a>, <a href="#parameter-s3BucketTarget"><code>s3BucketTarget</code></a></td>
    <td></td>
    <td>Starts an import file enrichment job to process and enrich network migration import files with additional metadata and IP assignment strategies.</td>
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
    defaultValue="list_imports"
    values={[
        { label: 'list_imports', value: 'list_imports' }
    ]}
>
<TabItem value="list_imports">

List imports.

```sql
SELECT
arn,
creationDateTime,
endDateTime,
importID,
progressPercentage,
s3BucketSource,
status,
summary,
tags
FROM aws.mgn.imports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_import_file_enrichment"
    values={[
        { label: 'start_import_file_enrichment', value: 'start_import_file_enrichment' }
    ]}
>
<TabItem value="start_import_file_enrichment">

Starts an import file enrichment job to process and enrich network migration import files with additional metadata and IP assignment strategies.

```sql
EXEC aws.mgn.imports.start_import_file_enrichment 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}", 
"s3BucketSource": "{{ s3BucketSource }}", 
"s3BucketTarget": "{{ s3BucketTarget }}", 
"ipAssignmentStrategy": "{{ ipAssignmentStrategy }}"
}'
;
```
</TabItem>
</Tabs>
