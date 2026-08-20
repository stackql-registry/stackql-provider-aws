--- 
title: compliance_inquiry_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - compliance_inquiry_metadatas
  - artifact
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

Creates, updates, deletes, gets or lists a <code>compliance_inquiry_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compliance_inquiry_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.artifact.compliance_inquiry_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_compliance_inquiry_metadata"
    values={[
        { label: 'get_compliance_inquiry_metadata', value: 'get_compliance_inquiry_metadata' }
    ]}
>
<TabItem value="get_compliance_inquiry_metadata">

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
    <td><CopyableCode code="compliance_inquiry_detail" /></td>
    <td><code>object</code></td>
    <td>Detailed information about the compliance inquiry.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the compliance inquiry resource.</td>
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
    <td><a href="#get_compliance_inquiry_metadata"><CopyableCode code="get_compliance_inquiry_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-complianceInquiryId"><code>complianceInquiryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the metadata for a single compliance inquiry.</td>
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
<tr id="parameter-complianceInquiryId">
    <td><CopyableCode code="complianceInquiryId" /></td>
    <td><code>string</code></td>
    <td>Unique resource ID for the compliance inquiry.</td>
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
    defaultValue="get_compliance_inquiry_metadata"
    values={[
        { label: 'get_compliance_inquiry_metadata', value: 'get_compliance_inquiry_metadata' }
    ]}
>
<TabItem value="get_compliance_inquiry_metadata">

Get the metadata for a single compliance inquiry.

```sql
SELECT
compliance_inquiry_detail,
tags
FROM aws.artifact.compliance_inquiry_metadatas
WHERE complianceInquiryId = '{{ complianceInquiryId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
