--- 
title: document_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - document_versions
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

Creates, updates, deletes, gets or lists a <code>document_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="document_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.document_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_document_versions"
    values={[
        { label: 'list_document_versions', value: 'list_document_versions' }
    ]}
>
<TabItem value="list_document_versions">

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
    <td><CopyableCode code="CreatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the document was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DisplayName" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the SSM document. This value can differ for each version of the document. If you want to update this value, see UpdateDocument. (pattern: &lt;code&gt;^&#91;\w\.\-\:\/ &#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DocumentFormat" /></td>
    <td><code>string</code></td>
    <td>The document format, either JSON or YAML. (YAML, JSON, TEXT)</td>
</tr>
<tr>
    <td><CopyableCode code="DocumentVersion" /></td>
    <td><code>string</code></td>
    <td>The document version. (pattern: &lt;code&gt;(&#91;$&#93;LATEST|&#91;$&#93;DEFAULT|^&#91;1-9&#93;&#91;0-9&#93;*$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IsDefaultVersion" /></td>
    <td><code>boolean</code></td>
    <td>An identifier for the default version of the document.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The document name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;3,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ReviewStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the approval review for the latest version of the document. (APPROVED, NOT_REVIEWED, PENDING, REJECTED)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the SSM document, such as Creating, Active, Failed, and Deleting. (Creating, Active, Updating, Deleting, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusInformation" /></td>
    <td><code>string</code></td>
    <td>A message returned by Amazon Web Services Systems Manager that explains the Status value. For example, a Failed status might be explained by the StatusInformation message, "The specified S3 bucket doesn't exist. Verify that the URL of the S3 bucket is correct."</td>
</tr>
<tr>
    <td><CopyableCode code="VersionName" /></td>
    <td><code>string</code></td>
    <td>The version of the artifact associated with the document. For example, 12.6. This value is unique across all versions of a document, and can't be changed. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-.&#93;&#123;1,128&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#list_document_versions"><CopyableCode code="list_document_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List all versions for a document.</td>
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
    defaultValue="list_document_versions"
    values={[
        { label: 'list_document_versions', value: 'list_document_versions' }
    ]}
>
<TabItem value="list_document_versions">

List all versions for a document.

```sql
SELECT
CreatedDate,
DisplayName,
DocumentFormat,
DocumentVersion,
IsDefaultVersion,
Name,
ReviewStatus,
Status,
StatusInformation,
VersionName
FROM aws.ssm.document_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
