--- 
title: upload_job_paths
hide_title: false
hide_table_of_contents: false
keywords:
  - upload_job_paths
  - customer_profiles
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

Creates, updates, deletes, gets or lists a <code>upload_job_paths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="upload_job_paths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.upload_job_paths" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_upload_job_path"
    values={[
        { label: 'get_upload_job_path', value: 'get_upload_job_path' }
    ]}
>
<TabItem value="get_upload_job_path">

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
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>The plaintext data key used to encrypt the upload file. To persist to the pre-signed url, use the client token and MD5 client token as header. The required headers are as follows: x-amz-server-side-encryption-customer-key: Client Token x-amz-server-side-encryption-customer-key-MD5: MD5 Client Token x-amz-server-side-encryption-customer-algorithm: AES256</td>
</tr>
<tr>
    <td><CopyableCode code="Url" /></td>
    <td><code>string</code></td>
    <td>The pre-signed S3 URL for uploading the CSV file associated with the upload job. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ValidUntil" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiry timestamp for the pre-signed URL, after which the URL will no longer be valid.</td>
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
    <td><a href="#get_upload_job_path"><CopyableCode code="get_upload_job_path" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API retrieves the pre-signed URL and client token for uploading the file associated with the upload job.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain containing the upload job.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the upload job to retrieve the upload path for. This is generated from the CreateUploadJob API.</td>
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
    defaultValue="get_upload_job_path"
    values={[
        { label: 'get_upload_job_path', value: 'get_upload_job_path' }
    ]}
>
<TabItem value="get_upload_job_path">

This API retrieves the pre-signed URL and client token for uploading the file associated with the upload job.

```sql
SELECT
ClientToken,
Url,
ValidUntil
FROM aws.customer_profiles.upload_job_paths
WHERE domain_name = '{{ domain_name }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
