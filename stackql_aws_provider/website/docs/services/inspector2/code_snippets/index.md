--- 
title: code_snippets
hide_title: false
hide_table_of_contents: false
keywords:
  - code_snippets
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>code_snippets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code_snippets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.code_snippets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_code_snippet"
    values={[
        { label: 'batch_get_code_snippet', value: 'batch_get_code_snippet' }
    ]}
>
<TabItem value="batch_get_code_snippet">

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
    <td><CopyableCode code="code_snippet_results" /></td>
    <td><code>array</code></td>
    <td>The retrieved code snippets associated with the provided finding ARNs.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Any errors Amazon Inspector encountered while trying to retrieve the requested code snippets.</td>
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
    <td><a href="#batch_get_code_snippet"><CopyableCode code="batch_get_code_snippet" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves code snippets from findings that Amazon Inspector detected code vulnerabilities in.</td>
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
    defaultValue="batch_get_code_snippet"
    values={[
        { label: 'batch_get_code_snippet', value: 'batch_get_code_snippet' }
    ]}
>
<TabItem value="batch_get_code_snippet">

Retrieves code snippets from findings that Amazon Inspector detected code vulnerabilities in.

```sql
SELECT
code_snippet_results,
errors
FROM aws.inspector2.code_snippets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
