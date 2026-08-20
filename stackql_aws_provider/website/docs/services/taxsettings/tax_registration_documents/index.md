--- 
title: tax_registration_documents
hide_title: false
hide_table_of_contents: false
keywords:
  - tax_registration_documents
  - taxsettings
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

Creates, updates, deletes, gets or lists a <code>tax_registration_documents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tax_registration_documents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.taxsettings.tax_registration_documents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tax_registration_document"
    values={[
        { label: 'get_tax_registration_document', value: 'get_tax_registration_document' }
    ]}
>
<TabItem value="get_tax_registration_document">

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
    <td><CopyableCode code="destination_file_path" /></td>
    <td><code>string</code></td>
    <td>The file path of the Amazon S3 bucket where you want to download your tax document to. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="presigned_s3_url" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 presigned URL of the tax registration document. (pattern: &lt;code&gt;https.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_tax_registration_document"><CopyableCode code="get_tax_registration_document" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Downloads your tax documents to the Amazon S3 bucket that you specify in your request.</td>
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
    defaultValue="get_tax_registration_document"
    values={[
        { label: 'get_tax_registration_document', value: 'get_tax_registration_document' }
    ]}
>
<TabItem value="get_tax_registration_document">

Downloads your tax documents to the Amazon S3 bucket that you specify in your request.

```sql
SELECT
destination_file_path,
presigned_s3_url
FROM aws.taxsettings.tax_registration_documents
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
