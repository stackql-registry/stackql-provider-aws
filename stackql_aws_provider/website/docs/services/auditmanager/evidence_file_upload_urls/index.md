--- 
title: evidence_file_upload_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - evidence_file_upload_urls
  - auditmanager
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

Creates, updates, deletes, gets or lists an <code>evidence_file_upload_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evidence_file_upload_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.evidence_file_upload_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_evidence_file_upload_url"
    values={[
        { label: 'get_evidence_file_upload_url', value: 'get_evidence_file_upload_url' }
    ]}
>
<TabItem value="get_evidence_file_upload_url">

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
    <td><CopyableCode code="evidence_file_name" /></td>
    <td><code>string</code></td>
    <td>The name of the uploaded manual evidence file that the presigned URL was generated for. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="upload_url" /></td>
    <td><code>string</code></td>
    <td>The presigned URL that was generated. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_evidence_file_upload_url"><CopyableCode code="get_evidence_file_upload_url" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-fileName"><code>fileName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a presigned Amazon S3 URL that can be used to upload a file as manual evidence. For instructions on how to use this operation, see Upload a file from your browser in the Audit Manager User Guide. The following restrictions apply to this operation: Maximum size of an individual evidence file: 100 MB Number of daily manual evidence uploads per control: 100 Supported file formats: See Supported file types for manual evidence in the Audit Manager User Guide For more information about Audit Manager service restrictions, see Quotas and restrictions for Audit Manager.</td>
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
<tr id="parameter-fileName">
    <td><CopyableCode code="fileName" /></td>
    <td><code>string</code></td>
    <td>The file that you want to upload. For a list of supported file formats, see Supported file types for manual evidence in the Audit Manager User Guide.</td>
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
    defaultValue="get_evidence_file_upload_url"
    values={[
        { label: 'get_evidence_file_upload_url', value: 'get_evidence_file_upload_url' }
    ]}
>
<TabItem value="get_evidence_file_upload_url">

Creates a presigned Amazon S3 URL that can be used to upload a file as manual evidence. For instructions on how to use this operation, see Upload a file from your browser in the Audit Manager User Guide. The following restrictions apply to this operation: Maximum size of an individual evidence file: 100 MB Number of daily manual evidence uploads per control: 100 Supported file formats: See Supported file types for manual evidence in the Audit Manager User Guide For more information about Audit Manager service restrictions, see Quotas and restrictions for Audit Manager.

```sql
SELECT
evidence_file_name,
upload_url
FROM aws.auditmanager.evidence_file_upload_urls
WHERE fileName = '{{ fileName }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
