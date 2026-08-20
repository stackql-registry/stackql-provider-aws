--- 
title: contact_references
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_references
  - connect
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

Creates, updates, deletes, gets or lists a <code>contact_references</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contact_references" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.contact_references" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_contact_references"
    values={[
        { label: 'list_contact_references', value: 'list_contact_references' }
    ]}
>
<TabItem value="list_contact_references">

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
    <td><CopyableCode code="attachment" /></td>
    <td><code>object</code></td>
    <td>Information about the reference when the referenceType is ATTACHMENT. Otherwise, null.</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>object</code></td>
    <td>Information about a reference when the referenceType is DATE. Otherwise, null.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>object</code></td>
    <td>Information about a reference when the referenceType is EMAIL. Otherwise, null.</td>
</tr>
<tr>
    <td><CopyableCode code="email_message" /></td>
    <td><code>object</code></td>
    <td>Information about the reference when the referenceType is EMAIL_MESSAGE. Otherwise, null.</td>
</tr>
<tr>
    <td><CopyableCode code="email_message_plain_text" /></td>
    <td><code>object</code></td>
    <td>Information about the reference when the referenceType is EMAIL_MESSAGE. Otherwise, null.</td>
</tr>
<tr>
    <td><CopyableCode code="email_message_plain_text_redacted" /></td>
    <td><code>object</code></td>
    <td>Information about the reference when the referenceType is EMAIL_MESSAGE. Otherwise, null.</td>
</tr>
<tr>
    <td><CopyableCode code="email_message_redacted" /></td>
    <td><code>object</code></td>
    <td>Information about the reference when the referenceType is EMAIL_MESSAGE. Otherwise, null.</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>object</code></td>
    <td>Information about a reference when the referenceType is NUMBER. Otherwise, null.</td>
</tr>
<tr>
    <td><CopyableCode code="string" /></td>
    <td><code>object</code></td>
    <td>Information about a reference when the referenceType is STRING. Otherwise, null.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>object</code></td>
    <td>Information about the reference when the referenceType is URL. Otherwise, null.</td>
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
    <td><a href="#list_contact_references"><CopyableCode code="list_contact_references" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_id"><code>contact_id</code></a>, <a href="#parameter-referenceTypes"><code>referenceTypes</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>This API is in preview release for Connect Customer and is subject to change. For the specified referenceTypes, returns a list of references associated with the contact. References are links to documents that are related to a contact, such as emails, attachments, or URLs.</td>
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
<tr id="parameter-contact_id">
    <td><CopyableCode code="contact_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the initial contact.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-referenceTypes">
    <td><CopyableCode code="referenceTypes" /></td>
    <td><code>array</code></td>
    <td>The type of reference.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. This is not expected to be set, because the value returned in the previous response is always null.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_contact_references"
    values={[
        { label: 'list_contact_references', value: 'list_contact_references' }
    ]}
>
<TabItem value="list_contact_references">

This API is in preview release for Connect Customer and is subject to change. For the specified referenceTypes, returns a list of references associated with the contact. References are links to documents that are related to a contact, such as emails, attachments, or URLs.

```sql
SELECT
attachment,
date,
email,
email_message,
email_message_plain_text,
email_message_plain_text_redacted,
email_message_redacted,
number,
string,
url
FROM aws.connect.contact_references
WHERE instance_id = '{{ instance_id }}' -- required
AND contact_id = '{{ contact_id }}' -- required
AND referenceTypes = '{{ referenceTypes }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
