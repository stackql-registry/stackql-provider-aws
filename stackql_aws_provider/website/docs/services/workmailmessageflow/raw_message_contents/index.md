--- 
title: raw_message_contents
hide_title: false
hide_table_of_contents: false
keywords:
  - raw_message_contents
  - workmailmessageflow
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

Creates, updates, deletes, gets or lists a <code>raw_message_contents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="raw_message_contents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmailmessageflow.raw_message_contents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_raw_message_content"
    values={[
        { label: 'get_raw_message_content', value: 'get_raw_message_content' }
    ]}
>
<TabItem value="get_raw_message_content">

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
    <td><CopyableCode code="message_content" /></td>
    <td><code>string (byte)</code></td>
    <td>The raw content of the email message, in MIME format.</td>
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
    <td><a href="#get_raw_message_content"><CopyableCode code="get_raw_message_content" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-message_id"><code>message_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the raw content of an in-transit email message, in MIME format.</td>
</tr>
<tr>
    <td><a href="#put_raw_message_content"><CopyableCode code="put_raw_message_content" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-message_id"><code>message_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>Updates the raw content of an in-transit email message, in MIME format. This example describes how to update in-transit email message. For more information and examples for using this API, see Updating message content with AWS Lambda. Updates to an in-transit message only appear when you call PutRawMessageContent from an AWS Lambda function configured with a synchronous Run Lambda rule. If you call PutRawMessageContent on a delivered or sent message, the message remains unchanged, even though GetRawMessageContent returns an updated message.</td>
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
<tr id="parameter-message_id">
    <td><CopyableCode code="message_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the email message being updated.</td>
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
    defaultValue="get_raw_message_content"
    values={[
        { label: 'get_raw_message_content', value: 'get_raw_message_content' }
    ]}
>
<TabItem value="get_raw_message_content">

Retrieves the raw content of an in-transit email message, in MIME format.

```sql
SELECT
message_content
FROM aws.workmailmessageflow.raw_message_contents
WHERE message_id = '{{ message_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_raw_message_content"
    values={[
        { label: 'put_raw_message_content', value: 'put_raw_message_content' }
    ]}
>
<TabItem value="put_raw_message_content">

Updates the raw content of an in-transit email message, in MIME format. This example describes how to update in-transit email message. For more information and examples for using this API, see Updating message content with AWS Lambda. Updates to an in-transit message only appear when you call PutRawMessageContent from an AWS Lambda function configured with a synchronous Run Lambda rule. If you call PutRawMessageContent on a delivered or sent message, the message remains unchanged, even though GetRawMessageContent returns an updated message.

```sql
REPLACE aws.workmailmessageflow.raw_message_contents
SET 
content = '{{ content }}'
WHERE 
message_id = '{{ message_id }}' --required
AND region = '{{ region }}' --required
AND content = '{{ content }}' --required;
```
</TabItem>
</Tabs>
