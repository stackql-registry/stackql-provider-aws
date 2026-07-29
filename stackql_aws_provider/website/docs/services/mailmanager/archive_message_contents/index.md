--- 
title: archive_message_contents
hide_title: false
hide_table_of_contents: false
keywords:
  - archive_message_contents
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

Creates, updates, deletes, gets or lists an <code>archive_message_contents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="archive_message_contents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mailmanager.archive_message_contents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_archive_message_content"
    values={[
        { label: 'get_archive_message_content', value: 'get_archive_message_content' }
    ]}
>
<TabItem value="get_archive_message_content">

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
    <td><CopyableCode code="html" /></td>
    <td><code>string</code></td>
    <td>The HTML body content of the message.</td>
</tr>
<tr>
    <td><CopyableCode code="message_malformed" /></td>
    <td><code>boolean</code></td>
    <td>A flag indicating if the email was malformed.</td>
</tr>
<tr>
    <td><CopyableCode code="text" /></td>
    <td><code>string</code></td>
    <td>The plain text body content of the message.</td>
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
    <td><a href="#get_archive_message_content"><CopyableCode code="get_archive_message_content" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the textual content of a specific email message stored in the archive. Attachments are not included.</td>
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
    defaultValue="get_archive_message_content"
    values={[
        { label: 'get_archive_message_content', value: 'get_archive_message_content' }
    ]}
>
<TabItem value="get_archive_message_content">

Returns the textual content of a specific email message stored in the archive. Attachments are not included.

```sql
SELECT
html,
message_malformed,
text
FROM aws.mailmanager.archive_message_contents
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
