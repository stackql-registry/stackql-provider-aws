--- 
title: file_transfer_results
hide_title: false
hide_table_of_contents: false
keywords:
  - file_transfer_results
  - transfer
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

Creates, updates, deletes, gets or lists a <code>file_transfer_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="file_transfer_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transfer.file_transfer_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_file_transfer_results"
    values={[
        { label: 'list_file_transfer_results', value: 'list_file_transfer_results' }
    ]}
>
<TabItem value="list_file_transfer_results">

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
    <td><CopyableCode code="failure_code" /></td>
    <td><code>string</code></td>
    <td>For transfers that fail, this parameter contains a code indicating the reason. For example, RETRIEVE_FILE_NOT_FOUND</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>For transfers that fail, this parameter describes the reason for the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="file_path" /></td>
    <td><code>string</code></td>
    <td>The filename and path to where the file was sent to or retrieved from. (pattern: &lt;code&gt;(.)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status_code" /></td>
    <td><code>string</code></td>
    <td>The current status for the transfer. (QUEUED, IN_PROGRESS, COMPLETED, FAILED)</td>
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
    <td><a href="#list_file_transfer_results"><CopyableCode code="list_file_transfer_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns real-time updates and detailed information on the status of each individual file being transferred in a specific file transfer operation. You specify the file transfer by providing its ConnectorId and its TransferId. File transfer results are available up to 7 days after an operation has been requested.</td>
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
    defaultValue="list_file_transfer_results"
    values={[
        { label: 'list_file_transfer_results', value: 'list_file_transfer_results' }
    ]}
>
<TabItem value="list_file_transfer_results">

Returns real-time updates and detailed information on the status of each individual file being transferred in a specific file transfer operation. You specify the file transfer by providing its ConnectorId and its TransferId. File transfer results are available up to 7 days after an operation has been requested.

```sql
SELECT
failure_code,
failure_message,
file_path,
status_code
FROM aws.transfer.file_transfer_results
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
