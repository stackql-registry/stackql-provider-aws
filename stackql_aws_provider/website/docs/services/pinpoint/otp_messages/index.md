--- 
title: otp_messages
hide_title: false
hide_table_of_contents: false
keywords:
  - otp_messages
  - pinpoint
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

Creates, updates, deletes, gets or lists an <code>otp_messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="otp_messages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.otp_messages" /></td></tr>
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
    <td><a href="#send_otp_message"><CopyableCode code="send_otp_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SendOTPMessageRequestParameters"><code>SendOTPMessageRequestParameters</code></a></td>
    <td></td>
    <td>Send an OTP message</td>
</tr>
<tr>
    <td><a href="#verify_otp_message"><CopyableCode code="verify_otp_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VerifyOTPMessageRequestParameters"><code>VerifyOTPMessageRequestParameters</code></a></td>
    <td></td>
    <td>Verify an OTP</td>
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
<tr id="parameter-application-id">
    <td><CopyableCode code="application-id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of your Amazon Pinpoint application.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="send_otp_message"
    values={[
        { label: 'send_otp_message', value: 'send_otp_message' },
        { label: 'verify_otp_message', value: 'verify_otp_message' }
    ]}
>
<TabItem value="send_otp_message">

Send an OTP message

```sql
EXEC aws.pinpoint.otp_messages.send_otp_message 
@application-id='{{ application-id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"SendOTPMessageRequestParameters": "{{ SendOTPMessageRequestParameters }}"
}'
;
```
</TabItem>
<TabItem value="verify_otp_message">

Verify an OTP

```sql
EXEC aws.pinpoint.otp_messages.verify_otp_message 
@application-id='{{ application-id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"VerifyOTPMessageRequestParameters": "{{ VerifyOTPMessageRequestParameters }}"
}'
;
```
</TabItem>
</Tabs>
