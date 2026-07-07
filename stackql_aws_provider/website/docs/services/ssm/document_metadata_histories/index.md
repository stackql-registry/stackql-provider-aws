--- 
title: document_metadata_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - document_metadata_histories
  - ssm
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

Creates, updates, deletes, gets or lists a <code>document_metadata_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="document_metadata_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.document_metadata_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_document_metadata_history"
    values={[
        { label: 'list_document_metadata_history', value: 'list_document_metadata_history' }
    ]}
>
<TabItem value="list_document_metadata_history">

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
    <td><CopyableCode code="Author" /></td>
    <td><code>string</code></td>
    <td>The user ID of the person in the organization who requested the review of the change template.</td>
</tr>
<tr>
    <td><CopyableCode code="DocumentVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the change template. (pattern: &lt;code&gt;(&#91;$&#93;LATEST|&#91;$&#93;DEFAULT|^&#91;1-9&#93;&#91;0-9&#93;*$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Metadata" /></td>
    <td><code>object</code></td>
    <td>Information about the response to the change template approval request.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the change template. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.</td>
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
    <td><a href="#list_document_metadata_history"><CopyableCode code="list_document_metadata_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Amazon Web Services Systems Manager Change Manager is no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services Systems Manager Change Manager availability change. Information about approval reviews for a version of a change template in Change Manager.</td>
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
    defaultValue="list_document_metadata_history"
    values={[
        { label: 'list_document_metadata_history', value: 'list_document_metadata_history' }
    ]}
>
<TabItem value="list_document_metadata_history">

Amazon Web Services Systems Manager Change Manager is no longer open to new customers. Existing customers can continue to use the service as normal. For more information, see Amazon Web Services Systems Manager Change Manager availability change. Information about approval reviews for a version of a change template in Change Manager.

```sql
SELECT
Author,
DocumentVersion,
Metadata,
Name,
NextToken
FROM aws.ssm.document_metadata_histories
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
