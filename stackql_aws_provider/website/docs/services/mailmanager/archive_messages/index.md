--- 
title: archive_messages
hide_title: false
hide_table_of_contents: false
keywords:
  - archive_messages
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

Creates, updates, deletes, gets or lists an <code>archive_messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="archive_messages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mailmanager.archive_messages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_archive_message"
    values={[
        { label: 'get_archive_message', value: 'get_archive_message' }
    ]}
>
<TabItem value="get_archive_message">

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
    <td><CopyableCode code="Envelope" /></td>
    <td><code>object</code></td>
    <td>The SMTP envelope information of the email.</td>
</tr>
<tr>
    <td><CopyableCode code="MessageDownloadLink" /></td>
    <td><code>string</code></td>
    <td>A pre-signed URL to temporarily download the full message content.</td>
</tr>
<tr>
    <td><CopyableCode code="Metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata about the email.</td>
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
    <td><a href="#get_archive_message"><CopyableCode code="get_archive_message" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a pre-signed URL that provides temporary download access to the specific email message stored in the archive.</td>
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
    defaultValue="get_archive_message"
    values={[
        { label: 'get_archive_message', value: 'get_archive_message' }
    ]}
>
<TabItem value="get_archive_message">

Returns a pre-signed URL that provides temporary download access to the specific email message stored in the archive.

```sql
SELECT
Envelope,
MessageDownloadLink,
Metadata
FROM aws.mailmanager.archive_messages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
