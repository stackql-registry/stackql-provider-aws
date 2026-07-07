--- 
title: address_list_import_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - address_list_import_jobs
  - mailmanager
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

Creates, updates, deletes, gets or lists an <code>address_list_import_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="address_list_import_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mailmanager.address_list_import_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_address_list_import_job"
    values={[
        { label: 'get_address_list_import_job', value: 'get_address_list_import_job' },
        { label: 'list_address_list_import_jobs', value: 'list_address_list_import_jobs' }
    ]}
>
<TabItem value="get_address_list_import_job">

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
    <td><CopyableCode code="AddressListId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the address list the import job was created for. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CompletedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the import job was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the import job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Error" /></td>
    <td><code>string</code></td>
    <td>The reason for failure of an import job.</td>
</tr>
<tr>
    <td><CopyableCode code="FailedItemsCount" /></td>
    <td><code>integer</code></td>
    <td>The number of input addresses that failed to be imported into the address list.</td>
</tr>
<tr>
    <td><CopyableCode code="ImportDataFormat" /></td>
    <td><code>object</code></td>
    <td>The format of the input for an import job.</td>
</tr>
<tr>
    <td><CopyableCode code="ImportedItemsCount" /></td>
    <td><code>integer</code></td>
    <td>The number of input addresses successfully imported into the address list.</td>
</tr>
<tr>
    <td><CopyableCode code="JobId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the import job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the import job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PreSignedUrl" /></td>
    <td><code>string</code></td>
    <td>The pre-signed URL target for uploading the input file.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the import job was started.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the import job. (CREATED, PROCESSING, COMPLETED, FAILED, STOPPED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_address_list_import_jobs">

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
    <td><CopyableCode code="AddressListId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the address list the import job was created for. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CompletedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the import job was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the import job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Error" /></td>
    <td><code>string</code></td>
    <td>The reason for failure of an import job.</td>
</tr>
<tr>
    <td><CopyableCode code="FailedItemsCount" /></td>
    <td><code>integer</code></td>
    <td>The number of addresses in the input that failed to get imported into address list.</td>
</tr>
<tr>
    <td><CopyableCode code="ImportDataFormat" /></td>
    <td><code>object</code></td>
    <td>The format of the input for the import job.</td>
</tr>
<tr>
    <td><CopyableCode code="ImportedItemsCount" /></td>
    <td><code>integer</code></td>
    <td>The number of addresses in the input that were successfully imported into the address list.</td>
</tr>
<tr>
    <td><CopyableCode code="JobId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the import job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the import job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PreSignedUrl" /></td>
    <td><code>string</code></td>
    <td>The pre-signed URL target for uploading the input file.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the import job was started.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the import job. (CREATED, PROCESSING, COMPLETED, FAILED, STOPPED)</td>
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
    <td><a href="#get_address_list_import_job"><CopyableCode code="get_address_list_import_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fetch attributes of an import job.</td>
</tr>
<tr>
    <td><a href="#list_address_list_import_jobs"><CopyableCode code="list_address_list_import_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists jobs for an address list.</td>
</tr>
<tr>
    <td><a href="#create_address_list_import_job"><CopyableCode code="create_address_list_import_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AddressListId"><code>AddressListId</code></a>, <a href="#parameter-ImportDataFormat"><code>ImportDataFormat</code></a></td>
    <td></td>
    <td>Creates an import job for an address list.</td>
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
    defaultValue="get_address_list_import_job"
    values={[
        { label: 'get_address_list_import_job', value: 'get_address_list_import_job' },
        { label: 'list_address_list_import_jobs', value: 'list_address_list_import_jobs' }
    ]}
>
<TabItem value="get_address_list_import_job">

Fetch attributes of an import job.

```sql
SELECT
AddressListId,
CompletedTimestamp,
CreatedTimestamp,
Error,
FailedItemsCount,
ImportDataFormat,
ImportedItemsCount,
JobId,
Name,
PreSignedUrl,
StartTimestamp,
Status
FROM aws.mailmanager.address_list_import_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_address_list_import_jobs">

Lists jobs for an address list.

```sql
SELECT
AddressListId,
CompletedTimestamp,
CreatedTimestamp,
Error,
FailedItemsCount,
ImportDataFormat,
ImportedItemsCount,
JobId,
Name,
PreSignedUrl,
StartTimestamp,
Status
FROM aws.mailmanager.address_list_import_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_address_list_import_job"
    values={[
        { label: 'create_address_list_import_job', value: 'create_address_list_import_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_address_list_import_job">

Creates an import job for an address list.

```sql
INSERT INTO aws.mailmanager.address_list_import_jobs (
ClientToken,
AddressListId,
Name,
ImportDataFormat,
region
)
SELECT 
'{{ ClientToken }}',
'{{ AddressListId }}' /* required */,
'{{ Name }}',
'{{ ImportDataFormat }}' /* required */,
'{{ region }}'
RETURNING
JobId,
PreSignedUrl
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: address_list_import_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the address_list_import_jobs resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique token that Amazon SES uses to recognize subsequent retries of the same request.
    - name: AddressListId
      value: "{{ AddressListId }}"
      description: |
        The unique identifier of the address list for importing addresses to.
    - name: Name
      value: "{{ Name }}"
      description: |
        A user-friendly name for the import job.
    - name: ImportDataFormat
      description: |
        The format of the input for an import job.
      value:
        ImportDataType: "{{ ImportDataType }}"
`}</CodeBlock>

</TabItem>
</Tabs>
