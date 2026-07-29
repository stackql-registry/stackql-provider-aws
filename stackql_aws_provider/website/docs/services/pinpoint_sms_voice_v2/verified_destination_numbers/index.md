--- 
title: verified_destination_numbers
hide_title: false
hide_table_of_contents: false
keywords:
  - verified_destination_numbers
  - pinpoint_sms_voice_v2
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

Creates, updates, deletes, gets or lists a <code>verified_destination_numbers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="verified_destination_numbers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.verified_destination_numbers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_verified_destination_numbers"
    values={[
        { label: 'describe_verified_destination_numbers', value: 'describe_verified_destination_numbers' }
    ]}
>
<TabItem value="describe_verified_destination_numbers">

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
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the destination phone number was created, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_phone_number" /></td>
    <td><code>string</code></td>
    <td>The verified destination phone number, in E.164 format. (pattern: &lt;code&gt;\+?&#91;1-9&#93;&#91;0-9&#93;&#123;1,18&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rcs_agent_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the RCS agent associated with the verified destination number.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the verified destination phone number. PENDING: The phone number hasn't been verified yet. VERIFIED: The phone number is verified and can receive messages. (PENDING, VERIFIED, UNSUPPORTED)</td>
</tr>
<tr>
    <td><CopyableCode code="verified_destination_number_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the verified destination phone number.</td>
</tr>
<tr>
    <td><CopyableCode code="verified_destination_number_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the verified destination phone number.</td>
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
    <td><a href="#describe_verified_destination_numbers"><CopyableCode code="describe_verified_destination_numbers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified verified destination numbers.</td>
</tr>
<tr>
    <td><a href="#create_verified_destination_number"><CopyableCode code="create_verified_destination_number" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DestinationPhoneNumber"><code>DestinationPhoneNumber</code></a></td>
    <td></td>
    <td>You can only send messages to verified destination numbers when your account is in the sandbox. You can add up to 10 verified destination numbers.</td>
</tr>
<tr>
    <td><a href="#delete_verified_destination_number"><CopyableCode code="delete_verified_destination_number" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a verified destination phone number.</td>
</tr>
<tr>
    <td><a href="#send_destination_number_verification_code"><CopyableCode code="send_destination_number_verification_code" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VerifiedDestinationNumberId"><code>VerifiedDestinationNumberId</code></a>, <a href="#parameter-VerificationChannel"><code>VerificationChannel</code></a></td>
    <td></td>
    <td>Before you can send test messages to a verified destination phone number you need to opt-in the verified destination phone number. Creates a new text message with a verification code and send it to a verified destination phone number. Once you have the verification code use VerifyDestinationNumber to opt-in the verified destination phone number to receive messages.</td>
</tr>
<tr>
    <td><a href="#verify_destination_number"><CopyableCode code="verify_destination_number" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VerifiedDestinationNumberId"><code>VerifiedDestinationNumberId</code></a>, <a href="#parameter-VerificationCode"><code>VerificationCode</code></a></td>
    <td></td>
    <td>Use the verification code that was received by the verified destination phone number to opt-in the verified destination phone number to receive more messages.</td>
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
    defaultValue="describe_verified_destination_numbers"
    values={[
        { label: 'describe_verified_destination_numbers', value: 'describe_verified_destination_numbers' }
    ]}
>
<TabItem value="describe_verified_destination_numbers">

Retrieves the specified verified destination numbers.

```sql
SELECT
created_timestamp,
destination_phone_number,
rcs_agent_id,
status,
verified_destination_number_arn,
verified_destination_number_id
FROM aws.pinpoint_sms_voice_v2.verified_destination_numbers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_verified_destination_number"
    values={[
        { label: 'create_verified_destination_number', value: 'create_verified_destination_number' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_verified_destination_number">

You can only send messages to verified destination numbers when your account is in the sandbox. You can add up to 10 verified destination numbers.

```sql
INSERT INTO aws.pinpoint_sms_voice_v2.verified_destination_numbers (
DestinationPhoneNumber,
RcsAgentId,
Tags,
ClientToken,
region
)
SELECT 
'{{ DestinationPhoneNumber }}' /* required */,
'{{ RcsAgentId }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
created_timestamp,
destination_phone_number,
rcs_agent_id,
status,
tags,
verified_destination_number_arn,
verified_destination_number_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: verified_destination_numbers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the verified_destination_numbers resource.
    - name: DestinationPhoneNumber
      value: "{{ DestinationPhoneNumber }}"
      description: |
        The verified destination phone number, in E.164 format.
    - name: RcsAgentId
      value: "{{ RcsAgentId }}"
      description: |
        The unique identifier of the RCS agent to associate with the verified destination number. You can use either the RcsAgentId or RcsAgentArn.
    - name: Tags
      description: |
        An array of tags (key and value pairs) to associate with the destination number.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_verified_destination_number"
    values={[
        { label: 'delete_verified_destination_number', value: 'delete_verified_destination_number' }
    ]}
>
<TabItem value="delete_verified_destination_number">

Delete a verified destination phone number.

```sql
DELETE FROM aws.pinpoint_sms_voice_v2.verified_destination_numbers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="send_destination_number_verification_code"
    values={[
        { label: 'send_destination_number_verification_code', value: 'send_destination_number_verification_code' },
        { label: 'verify_destination_number', value: 'verify_destination_number' }
    ]}
>
<TabItem value="send_destination_number_verification_code">

Before you can send test messages to a verified destination phone number you need to opt-in the verified destination phone number. Creates a new text message with a verification code and send it to a verified destination phone number. Once you have the verification code use VerifyDestinationNumber to opt-in the verified destination phone number to receive messages.

```sql
EXEC aws.pinpoint_sms_voice_v2.verified_destination_numbers.send_destination_number_verification_code 
@region='{{ region }}' --required 
@@json=
'{
"VerifiedDestinationNumberId": "{{ VerifiedDestinationNumberId }}", 
"VerificationChannel": "{{ VerificationChannel }}", 
"LanguageCode": "{{ LanguageCode }}", 
"OriginationIdentity": "{{ OriginationIdentity }}", 
"ConfigurationSetName": "{{ ConfigurationSetName }}", 
"Context": "{{ Context }}", 
"DestinationCountryParameters": "{{ DestinationCountryParameters }}"
}'
;
```
</TabItem>
<TabItem value="verify_destination_number">

Use the verification code that was received by the verified destination phone number to opt-in the verified destination phone number to receive more messages.

```sql
EXEC aws.pinpoint_sms_voice_v2.verified_destination_numbers.verify_destination_number 
@region='{{ region }}' --required 
@@json=
'{
"VerifiedDestinationNumberId": "{{ VerifiedDestinationNumberId }}", 
"VerificationCode": "{{ VerificationCode }}"
}'
;
```
</TabItem>
</Tabs>
