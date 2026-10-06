--- 
title: bounces
hide_title: false
hide_table_of_contents: false
keywords:
  - bounces
  - ses
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

Creates, updates, deletes, gets or lists a <code>bounces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bounces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.bounces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#send_bounce"><CopyableCode code="send_bounce" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-OriginalMessageId"><code>OriginalMessageId</code></a>, <a href="#parameter-BounceSender"><code>BounceSender</code></a>, <a href="#parameter-BouncedRecipientInfoList"><code>BouncedRecipientInfoList</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Explanation"><code>Explanation</code></a>, <a href="#parameter-MessageDsn"><code>MessageDsn</code></a>, <a href="#parameter-BounceSenderArn"><code>BounceSenderArn</code></a></td>
    <td>Generates and sends a bounce message to the sender of an email you received through Amazon SES. You can only use this operation on an email up to 24 hours after you receive it. You cannot use this operation to send generic bounces for mail that was not received by Amazon SES. For information about receiving email through Amazon SES, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.</td>
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
<tr id="parameter-BounceSender">
    <td><CopyableCode code="BounceSender" /></td>
    <td><code>string</code></td>
    <td>The address to use in the "From" header of the bounce message. This must be an identity that you have verified with Amazon SES.</td>
</tr>
<tr id="parameter-BouncedRecipientInfoList">
    <td><CopyableCode code="BouncedRecipientInfoList" /></td>
    <td><code>array</code></td>
    <td>A list of recipients of the bounced message, including the information required to create the Delivery Status Notifications (DSNs) for the recipients. You must specify at least one BouncedRecipientInfo in the list.</td>
</tr>
<tr id="parameter-OriginalMessageId">
    <td><CopyableCode code="OriginalMessageId" /></td>
    <td><code>string</code></td>
    <td>The message ID of the message to be bounced.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-BounceSenderArn">
    <td><CopyableCode code="BounceSenderArn" /></td>
    <td><code>string</code></td>
    <td>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the address in the "From" header of the bounce. For more information about sending authorization, see the Amazon SES Developer Guide.</td>
</tr>
<tr id="parameter-Explanation">
    <td><CopyableCode code="Explanation" /></td>
    <td><code>string</code></td>
    <td>Human-readable text for the bounce message to explain the failure. If not specified, the text is auto-generated based on the bounced recipient information.</td>
</tr>
<tr id="parameter-MessageDsn">
    <td><CopyableCode code="MessageDsn" /></td>
    <td><code>object</code></td>
    <td>Message-related DSN fields. If not specified, Amazon SES chooses the values.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="send_bounce"
    values={[
        { label: 'send_bounce', value: 'send_bounce' }
    ]}
>
<TabItem value="send_bounce">

Generates and sends a bounce message to the sender of an email you received through Amazon SES. You can only use this operation on an email up to 24 hours after you receive it. You cannot use this operation to send generic bounces for mail that was not received by Amazon SES. For information about receiving email through Amazon SES, see the Amazon SES Developer Guide. You can execute this operation no more than once per second.

```sql
EXEC aws.ses.bounces.send_bounce 
@OriginalMessageId='{{ OriginalMessageId }}' --required, 
@BounceSender='{{ BounceSender }}' --required, 
@BouncedRecipientInfoList='{{ BouncedRecipientInfoList }}' --required, 
@region='{{ region }}' --required, 
@Explanation='{{ Explanation }}', 
@MessageDsn='{{ MessageDsn }}', 
@BounceSenderArn='{{ BounceSenderArn }}'
;
```
</TabItem>
</Tabs>
