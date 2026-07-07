--- 
title: imports
hide_title: false
hide_table_of_contents: false
keywords:
  - imports
  - lex_models
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lex_models.imports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_import"
    values={[
        { label: 'get_import', value: 'get_import' }
    ]}
>
<TabItem value="get_import">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name given to the import job. (pattern: &lt;code&gt;&#91;a-zA-Z_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp for the date and time that the import job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>array</code></td>
    <td>A string that describes why an import job failed to complete.</td>
</tr>
<tr>
    <td><CopyableCode code="importId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the specific import job.</td>
</tr>
<tr>
    <td><CopyableCode code="importStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the import job. If the status is FAILED, you can get the reason for the failure from the failureReason field. (IN_PROGRESS, COMPLETE, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="mergeStrategy" /></td>
    <td><code>string</code></td>
    <td>The action taken when there was a conflict between an existing resource and a resource in the import file. (OVERWRITE_LATEST, FAIL_ON_CONFLICT)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource imported. (BOT, INTENT, SLOT_TYPE)</td>
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
    <td><a href="#get_import"><CopyableCode code="get_import" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-import_id"><code>import_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an import job started with the StartImport operation.</td>
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
<tr id="parameter-import_id">
    <td><CopyableCode code="import_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the import job information to return.</td>
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
    defaultValue="get_import"
    values={[
        { label: 'get_import', value: 'get_import' }
    ]}
>
<TabItem value="get_import">

Gets information about an import job started with the StartImport operation.

```sql
SELECT
name,
createdDate,
failureReason,
importId,
importStatus,
mergeStrategy,
resourceType
FROM aws.lex_models.imports
WHERE import_id = '{{ import_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
