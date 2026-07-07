--- 
title: exports
hide_title: false
hide_table_of_contents: false
keywords:
  - exports
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

Creates, updates, deletes, gets or lists an <code>exports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lex_models.exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_export"
    values={[
        { label: 'get_export', value: 'get_export' }
    ]}
>
<TabItem value="get_export">

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
    <td>The name of the bot being exported. (pattern: &lt;code&gt;&#91;a-zA-Z_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="exportStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the export. IN_PROGRESS - The export is in progress. READY - The export is complete. FAILED - The export could not be completed. (IN_PROGRESS, READY, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="exportType" /></td>
    <td><code>string</code></td>
    <td>The format of the exported data. (ALEXA_SKILLS_KIT, LEX)</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>If status is FAILED, Amazon Lex provides the reason that it failed to export the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the exported resource. (BOT, INTENT, SLOT_TYPE)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>An S3 pre-signed URL that provides the location of the exported resource. The exported resource is a ZIP archive that contains the exported resource in JSON format. The structure of the archive may change. Your code should not rely on the archive structure.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot being exported. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_export"><CopyableCode code="get_export" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-exportType"><code>exportType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Exports the contents of a Amazon Lex resource in a specified format.</td>
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
<tr id="parameter-exportType">
    <td><CopyableCode code="exportType" /></td>
    <td><code>string</code></td>
    <td>The format of the exported data.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the bot to export.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource to export.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot to export.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_export"
    values={[
        { label: 'get_export', value: 'get_export' }
    ]}
>
<TabItem value="get_export">

Exports the contents of a Amazon Lex resource in a specified format.

```sql
SELECT
name,
exportStatus,
exportType,
failureReason,
resourceType,
url,
version
FROM aws.lex_models.exports
WHERE name = '{{ name }}' -- required
AND version = '{{ version }}' -- required
AND resourceType = '{{ resourceType }}' -- required
AND exportType = '{{ exportType }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
